import type { RunOptions, Organization } from "../lib/types";
import { readJson, dataPath, dataDir, exists, listFiles, listDirs } from "../lib/store";
import { runAgentFreeform } from "../lib/llm";
import { runStage } from "../lib/stage-runner";
import { existsSync, copyFileSync, readdirSync } from "fs";
import { join } from "path";

const ORGS_DIR = "organizations";
const FORMS_DIR = "forms";
const EVALS_DIR = "evaluations";

function allOrganizations(): Organization[] {
  const files = listFiles(ORGS_DIR, ".json");
  const orgs: Organization[] = [];
  for (const f of files) {
    const data = readJson<Organization[]>(`${ORGS_DIR}/${f}.json`);
    if (data) orgs.push(...data);
  }
  return orgs;
}

interface FormCandidate {
  org: Organization;
  formDir: string;
  pdfFile: string;
  evalId: string;
}

function findCandidates(): FormCandidate[] {
  const orgs = allOrganizations();
  const orgMap = new Map(orgs.map((o) => [o.org_id, o]));
  const candidates: FormCandidate[] = [];

  for (const orgId of listDirs(FORMS_DIR)) {
    const org = orgMap.get(orgId);
    if (!org) continue;

    const dir = dataPath(FORMS_DIR, orgId);
    if (!existsSync(join(dir, "notes.md"))) continue;

    const pdfs = readdirSync(dir).filter((f) => f.endsWith(".pdf"));
    for (const pdf of pdfs) {
      const stem = pdf.replace(".pdf", "");
      candidates.push({
        org,
        formDir: dir,
        pdfFile: pdf,
        evalId: `${orgId}--${stem}`,
      });
    }
  }
  return candidates;
}

function makePrompt(c: FormCandidate): string {
  return `You are evaluating a single document from a healthcare provider for a study of ROI form quality.

Read DESIGN.md to understand the full study — your task is Stage 4.

This directory contains all forms downloaded for ${c.org.name}, plus notes and metadata.
Your job is to evaluate ONE specific document: ${c.pdfFile}

Read these files:
- notes.md — how forms were found (search process, source URLs, initial impressions)
- ${c.pdfFile.replace(".pdf", "-metadata.json")} — technical metadata and extracted text for this PDF
- Any other *-metadata.json files for context on what else was found

Organization: ${c.org.name} (${c.org.city}, ${c.org.state})
Type: ${Object.entries(c.org.axes).map(([k, v]) => `${k}: ${v}`).join(", ")}
Website: ${c.org.website}

Write your evaluation to "${c.evalId}.md" covering these areas:

1. DOCUMENT IDENTIFICATION: What type of document is this and how does it relate to
   other documents found for this organization?

2. FINDABILITY: How easy was this form to locate online?

3. TECHNICAL ACCESSIBILITY: How well does this document work as a digital artifact?

4. CONTENT DESIGN: How well is the document written and laid out?

5. PATIENT-CENTEREDNESS: How well does this document serve a patient trying to access
   their own health records?

6. EHI EXPORT: Does this document mention or address EHI Export — the computable
   electronic health information dataset that providers/EHRs must offer under the
   21st Century Cures Act and ONC information blocking rules? Look for checkboxes,
   fields, or sections referencing "EHI export", "electronic health information
   export", "Cures Act", or similar. Note: this is NOT the same as offering email
   delivery or a "digital copy" — EHI Export is a specific regulatory obligation
   to provide data in a computable format. Also note if the entire form appears to
   be dedicated to EHI Export requests specifically.

7. COMPLIANCE: Does this document impose any requirements or barriers worth noting?

8. NOTABLE OBSERVATIONS: End with a list of callouts — anything that stands out as
   particularly surprising, noteworthy, or concerning. Use these categories:
   - 🚩 RED FLAGS: Requirements or language that may violate patient rights or create
     illegitimate barriers (e.g., notarization demands, in-person-only submission,
     fees that exceed HIPAA limits, overly broad consent bundling)
   - ⚠️ AMBIGUITIES: Language that is vague, contradictory, or likely to confuse
     patients (e.g., unclear whether form applies to patient access vs. third-party
     release, conflicting instructions, undefined terms)
   - ❌ ERRORS: Factual mistakes, broken references, outdated information, formatting
     defects (e.g., wrong legal citations, dead URLs, garbled text from bad OCR,
     mismatched field labels)
   - ✨ BRIGHT SPOTS: Things done unusually well that other organizations could learn
     from (e.g., plain-language summaries, multilingual support, electronic submission
     options, clear patient rights explanations)
   If nothing stands out in a category, omit it. Only flag things that are genuinely
   notable — not routine observations already covered in sections 1-6.

Be specific — quote form text from the metadata, note field counts, describe what you
observe. This evaluation will feed into a scoring step later, so include enough detail
to justify scoring decisions. Report what you actually find, not what you expect to find.`;
}

export async function run(opts: RunOptions) {
  await runStage<FormCandidate, void>({
    name: "Stage 4: Evaluate Forms",
    loadItems: findCandidates,
    itemId: (c) => c.evalId,
    itemLabel: (c) => `${c.evalId} (${c.org.name})`,
    isComplete: (c) => exists(`${EVALS_DIR}/${c.evalId}.md`),
    emptyMessage: "No forms with notes found. Run stage3 first.",
    run: async (c, opts) => {
      // Agent works in the forms dir so it can read all PDFs, notes, metadata
      await runAgentFreeform({
        workDir: c.formDir,
        prompt: makePrompt(c),
        model: opts.model,
        instanceId: `stage4/${c.evalId}`,
      });

      // Copy evaluation to canonical location
      const evalSrc = join(c.formDir, `${c.evalId}.md`);
      if (existsSync(evalSrc)) {
        const evalDir = dataDir(EVALS_DIR);
        copyFileSync(evalSrc, join(evalDir, `${c.evalId}.md`));
      } else {
        throw new Error(`Agent did not produce ${c.evalId}.md`);
      }
    },
  }, opts);
}
