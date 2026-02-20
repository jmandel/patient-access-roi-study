import type { RunOptions, Organization } from "../lib/types";
import { readJson, writeJson, dataDir, dataPath, exists, listFiles, listDirs } from "../lib/store";
import { runAgentFreeform } from "../lib/llm";
import { runStage } from "../lib/stage-runner";
import { existsSync, readdirSync, copyFileSync, symlinkSync, mkdirSync } from "fs";
import { join } from "path";

const ORGS_DIR = "organizations";
const FORMS_DIR = "forms";
const EVALS_DIR = "evaluations";
const ABSTRACTIONS_DIR = "abstractions";
const SYNTHESIS_DIR = "synthesis";

function allOrganizations(): Organization[] {
  const files = listFiles(ORGS_DIR, ".json");
  const orgs: Organization[] = [];
  for (const f of files) {
    const data = readJson<Organization[]>(`${ORGS_DIR}/${f}.json`);
    if (data) orgs.push(...data);
  }
  return orgs;
}

interface SynthesisCandidate {
  org: Organization;
  formDir: string;
  evalFiles: string[];      // evaluation .md paths for this org's forms
  abstractionFile?: string; // abstraction JSON path if exists
}

function findCandidates(): SynthesisCandidate[] {
  const orgs = allOrganizations();
  const orgMap = new Map(orgs.map((o) => [o.org_id, o]));
  const candidates: SynthesisCandidate[] = [];

  for (const orgId of listDirs(FORMS_DIR)) {
    const org = orgMap.get(orgId);
    if (!org) continue;

    const formDir = dataPath(FORMS_DIR, orgId);
    if (!existsSync(join(formDir, "notes.md"))) continue;

    // Find all evaluation files for this org's forms
    const evalFiles = listFiles(EVALS_DIR, ".md")
      .filter((f) => f.startsWith(`${orgId}--`))
      .map((f) => dataPath(EVALS_DIR, `${f}.md`));

    // Need at least one evaluation to synthesize
    if (evalFiles.length === 0) continue;

    const abstractionPath = dataPath(ABSTRACTIONS_DIR, `${orgId}.json`);
    candidates.push({
      org,
      formDir,
      evalFiles,
      abstractionFile: existsSync(abstractionPath) ? abstractionPath : undefined,
    });
  }
  return candidates;
}

function symlinkOrCopy(src: string, dst: string) {
  if (existsSync(dst)) return;
  try {
    symlinkSync(src, dst);
  } catch {
    try { copyFileSync(src, dst); } catch {}
  }
}

function makePrompt(c: SynthesisCandidate): string {
  return `You are producing a per-organization synthesis for a study of ROI form quality.

Read DESIGN.md and ANALYSIS-PLAN.md for full context.
Read lib/synthesis-schema.ts — it defines the EXACT TypeScript interface your scores.json must conform to.

This directory contains everything we know about ${c.org.name}:
- notes.md — how forms were found and the retrieval experience
- evaluations/ — individual form evaluations (one .md per form)
${c.abstractionFile ? "- abstraction.json — structured summary of retrieval results" : ""}
- *-metadata.json files — technical metadata for each downloaded PDF

Organization: ${c.org.name} (${c.org.city}, ${c.org.state})
Type: ${Object.entries(c.org.axes).map(([k, v]) => `${k}: ${v}`).join(", ")}
Website: ${c.org.website}

Your task: read all the individual form evaluations and the retrieval notes, then produce
a SINGLE org-level synthesis that answers: "How well does this organization serve a patient
trying to request their own health records online?"

The key insight: this org may have multiple forms (patient access, third-party release,
Spanish version, old version, fee schedule, etc.). You need to reason about which form(s)
matter most for a patient requesting their own records, and assess the org based on the
best available pathway — not the average of all documents.

TWO KEY ASSESSMENT DIMENSIONS (go deep on these):

A. ACCESS PATHWAY DIFFERENTIATION
   Does this org offer a clear route for a patient requesting their OWN records?
   Or does it funnel patients through a generic HIPAA authorization form designed
   for third-party release of information? The best orgs have a dedicated patient
   access pathway — a form, portal, or process clearly designed for individual
   access rights under HIPAA, separate from authorization for release to insurers,
   attorneys, or other third parties. Assess what this org actually provides.

B. FORM DOCUMENT QUALITY & HYGIENE
   For the best available patient-facing form, evaluate the nuts and bolts:
   - Is it a fillable/interactive PDF or web form, or a flat scan to print and fill by hand?
   - How many fields must a patient complete? Is the scope reasonable?
   - Is the layout clean with clear section headers and logical flow?
   - Is the language plain and accessible or dense legalese?
   - Are there clear instructions? A statement of patient rights?
   - Are there unnecessary barriers (notarization, excessive fees)?
   - Any bright spots (multilingual, plain-language summaries)?

SCORING BASELINE — SUBMISSION METHOD:
   The industry norm is fax or mail submission. Do NOT penalize an org for lacking
   online/portal submission — fax counts as an adequate electronic pathway and an
   org offering fax submission can still earn an A. DO penalize if the ONLY option
   is in-person delivery or physical mail (no fax, no email, no portal). Record
   what submission methods exist in the structured output for descriptive purposes,
   but score against the baseline of "can a patient submit without physically
   visiting the facility or waiting for postal mail?"

Write two output files:

1. "synthesis.md" — A 400-800 word narrative covering:
   - What forms/pathways are available and which is most relevant for patient self-access
   - Whether the org differentiates individual access from third-party release
   - The retrieval experience (how hard was it to find the form?)
   - Form document quality: fillable fields, layout, language, instructions
   - Barriers encountered or absent
   - Notable strengths (bright spots) or weaknesses (red flags)
   - Overall assessment of patient-centeredness

2. "scores.json" — Structured org-level data conforming to the OrgSynthesis interface
   from lib/synthesis-schema.ts. This includes:
   - parent_system / uses_system_forms: health system relationship
   - request_pathways: ALL pathways a patient could use (PDF, portal, fax, phone, etc.)
     with vendor names (e.g. "Swellbox/Datavant", "Epic MyChart") and URLs where applicable
   - forms: classification of each downloaded document (type, scope, language, source URL)
   - retrieval: how the search went (difficulty, bot blocking, browser fallback)
   - access_pathway: deep assessment of the patient access route
   - form_quality: detailed form document characteristics (fillable, field count, layout, etc.)
   - barriers: notarization, fees, in-person requirements, red flags, bright spots
   - scores: dimensional scores (1-5) with rationale, plus weighted overall

   IMPORTANT: The scoring rubrics are defined as comments in lib/synthesis-schema.ts.
   Read them carefully and apply them literally — each score level (1-5) has specific
   criteria for each dimension. Cite the rubric level you chose and why in your rationale.

   For the overall score, use weights:
     findability 15%, technical_accessibility 25%, content_design 15%,
     patient_centeredness 25%, compliance 20%
   Grade: A (4.5-5.0), B (3.5-4.4), C (2.5-3.4), D (1.5-2.4), F (<1.5)

   org_id: "${c.org.org_id}"
   org_name: "${c.org.name}"
   category_id: "${c.org.category_id}"

After writing both files, validate scores.json: read it back, confirm valid JSON,
verify it has all required fields from the OrgSynthesis interface, and check the
weighted average and grade mapping.`;
}

export async function run(opts: RunOptions) {
  await runStage<SynthesisCandidate, void>({
    name: "Synthesize: Org-Level Scores",
    loadItems: findCandidates,
    itemId: (c) => c.org.org_id,
    itemLabel: (c) => `${c.org.org_id} (${c.org.name}, ${c.evalFiles.length} evals)`,
    isComplete: (c) => exists(`${SYNTHESIS_DIR}/${c.org.org_id}/scores.json`),
    emptyMessage: "No orgs with evaluations found. Run evaluate-forms first.",
    run: async (c, opts) => {
      const workDir = dataDir(SYNTHESIS_DIR, c.org.org_id);

      // Bring in notes.md
      symlinkOrCopy(join(c.formDir, "notes.md"), join(workDir, "notes.md"));

      // Bring in metadata files
      for (const f of readdirSync(c.formDir).filter((f) => f.endsWith("-metadata.json"))) {
        symlinkOrCopy(join(c.formDir, f), join(workDir, f));
      }

      // Bring in evaluations
      const evalDir = join(workDir, "evaluations");
      mkdirSync(evalDir, { recursive: true });
      for (const evalPath of c.evalFiles) {
        const name = evalPath.split("/").pop()!;
        symlinkOrCopy(evalPath, join(evalDir, name));
      }

      // Bring in abstraction if available
      if (c.abstractionFile) {
        symlinkOrCopy(c.abstractionFile, join(workDir, "abstraction.json"));
      }

      // Bring in schema so agent can read the TypeScript interface
      const libDir = join(workDir, "lib");
      mkdirSync(libDir, { recursive: true });
      const schemaSource = join(import.meta.dir, "..", "lib", "synthesis-schema.ts");
      symlinkOrCopy(schemaSource, join(libDir, "synthesis-schema.ts"));

      await runAgentFreeform({
        workDir,
        prompt: makePrompt(c),
        model: opts.model,
        instanceId: `synthesize/${c.org.org_id}`,
      });

      if (!existsSync(join(workDir, "scores.json"))) {
        throw new Error(`Agent did not produce scores.json`);
      }
      if (!existsSync(join(workDir, "synthesis.md"))) {
        throw new Error(`Agent did not produce synthesis.md`);
      }
    },
    summarize: (results) => {
      const succeeded = results.filter((r) => !r.error).length;
      console.log(`\n  ${succeeded} org syntheses produced`);
    },
  }, opts);
}
