import type { RunOptions } from "../lib/types";
import { runMapReduce, type MapReduceConfig } from "../lib/map-reduce";
import { dataPath, listDirs, listFiles, readJson } from "../lib/store";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { info, fail } from "../lib/log";
import type { Organization } from "../lib/types";
import type { OrgSynthesis } from "../lib/synthesis-schema";
import { hasRoiForm } from "../lib/roi-filter";

/** Build a single org-lookup.json mapping org_id → full org metadata (axes, state, etc.) */
function buildOrgLookup(): string {
  const outPath = dataPath("org-lookup.json");
  const orgs: Record<string, Organization> = {};
  for (const f of listFiles("organizations", ".json")) {
    const data = readJson<Organization[]>(`organizations/${f}.json`);
    if (data) for (const o of data) orgs[o.org_id] = o;
  }
  writeFileSync(outPath, JSON.stringify(orgs, null, 2));
  return outPath;
}

const ORG_LOOKUP_PATH = buildOrgLookup();

/** Return org dirs that have an actual ROI form (per synthesis document_type). */
function roiOrgDirs(): string[] {
  return listDirs("synthesis").filter((d) => {
    const sp = dataPath("synthesis", d, "scores.json");
    if (!existsSync(sp)) return false;
    try {
      const syn: OrgSynthesis = JSON.parse(readFileSync(sp, "utf-8"));
      return hasRoiForm(syn);
    } catch { return false; }
  });
}

/** Gather all org-level synthesis markdown files (ROI-form orgs only) */
function gatherSyntheses(): string[] {
  return roiOrgDirs()
    .map((d) => dataPath("synthesis", d, "synthesis.md"))
    .filter(existsSync);
}

/** Gather all org-level synthesis score JSON files (ROI-form orgs only) */
function gatherSynthesisScores(): string[] {
  return roiOrgDirs()
    .map((d) => dataPath("synthesis", d, "scores.json"))
    .filter(existsSync);
}

/** Gather synthesis narratives + scores together (two files per org) */
function gatherOrgFiles(): string[] {
  return [...gatherSyntheses(), ...gatherSynthesisScores()];
}

/** Gather all notes.md files from forms directories */
function gatherNotes(): string[] {
  return listDirs("forms")
    .map((d) => dataPath("forms", d, "notes.md"))
    .filter(existsSync);
}

const ANALYSES: Record<string, MapReduceConfig> = {
  "best-practices": {
    name: "best-practices",
    title: "Analysis: Best Practices",
    gatherInputs: gatherOrgFiles,
    extraFiles: [ORG_LOOKUP_PATH],
    mapPrompt: `You are analyzing ROI form retrieval results for a study of healthcare provider form quality.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Org-level synthesis files (synthesis.md narratives and scores.json structured data)
for a batch of organizations are included inline below.
org-lookup.json maps org_id → full org metadata (facility_type, ownership, system_affiliation,
census_region, state, city, bed_count). Use this to contextualize your findings by org type.

Your task: identify organizations in this batch whose forms or request processes stand
out positively. Look for genuinely thoughtful or innovative approaches — not just "adequate"
but things other organizations should emulate.

Write your findings to "output.md". For each notable example:
- Name the organization and describe what impressed you
- Quote specific form text or cite specific features from the synthesis
- Explain why this matters for patients

End with a brief summary of patterns you noticed across this batch.
Keep to 500-1000 words.`,

    reducePrompt: `You are synthesizing findings from multiple analysis batches about best practices
in healthcare ROI forms.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Findings from individual map batches are included inline below.

Your task: produce a cohesive analysis of best practices observed across the entire study.

- Select the most compelling examples across all batches
- Identify common patterns — what do the best forms/processes share?
- Organize by theme, not by batch
- Include specific org names and quoted form features
- Discuss what makes these practices effective for patients
- End with actionable recommendations other organizations could adopt

Write your analysis to "output.md". Aim for 1500-2500 words.`,
  },

  "worst-barriers": {
    name: "worst-barriers",
    title: "Analysis: Worst Barriers",
    gatherInputs: gatherOrgFiles,
    extraFiles: [ORG_LOOKUP_PATH],
    mapPrompt: `You are analyzing ROI form retrieval results for a study of healthcare provider form quality.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Org-level synthesis files (synthesis.md narratives and scores.json structured data)
for a batch of organizations are included inline below.
org-lookup.json maps org_id → full org metadata (facility_type, ownership, system_affiliation,
census_region, state, city). Use this to contextualize your findings by org type.

Your task: identify the most significant barriers patients would face when trying to
request their records from organizations in this batch. Look for:
- Difficulty finding the form
- Burdensome requirements imposed on patients
- Poor technical accessibility
- Anything that would frustrate or discourage a patient

Write your findings to "output.md". For each barrier:
- Name the organization and describe the problem
- Explain the impact on patients
- Note whether this seems like an oversight or a pattern

End with a brief summary of barrier patterns across this batch.
Keep to 500-1000 words.`,

    reducePrompt: `You are synthesizing findings from multiple analysis batches about barriers
patients face when requesting their health records.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Findings from individual map batches are included inline below.

Your task: produce a cohesive analysis of the worst barriers observed across the entire study.

- Organize by barrier type, not by batch or organization
- For each barrier type, cite the most egregious specific examples
- Assess whether barriers seem accidental (incompetence/neglect) or structural
- Discuss the cumulative impact on patients trying to exercise their HIPAA rights
- End with the most critical issues that need attention

Write your analysis to "output.md". Aim for 1500-2500 words.`,
  },

  "portal-landscape": {
    name: "portal-landscape",
    title: "Analysis: Portal Landscape",
    gatherInputs: gatherSynthesisScores,
    extraFiles: [ORG_LOOKUP_PATH],
    mapPrompt: `You are analyzing org-level synthesis data for a study of healthcare provider form quality.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Scores.json files for a batch of organizations are included inline below.
Focus on the access_pathway fields.
org-lookup.json maps org_id → full org metadata (facility_type, ownership, system_affiliation,
census_region, state, city). Use this to identify patterns by org type.

Your task: characterize the portal/online request landscape in this batch.
- How many orgs offer an online portal or patient portal pathway?
- Which vendors/platforms appear (Swellbox, MyChart, etc.)?
- When a portal exists, is a PDF form still available alongside it?
- Is the portal the primary pathway or a secondary option?
- Any notable patterns about which types of orgs have portals?

Write your findings to "output.md". Include counts and specific examples.
Keep to 500-800 words.`,

    reducePrompt: `You are synthesizing findings about the online portal landscape for healthcare
record requests across the entire study.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Portal analysis from individual map batches is included inline below.

Your task: produce a comprehensive picture of the portal landscape.
- What fraction of orgs offer portal pathways? Aggregate the counts.
- Which vendors dominate? Market share estimates.
- The PDF-vs-portal question: are PDFs going away or coexisting?
- Is the portal trend positive or negative for patient access? Both sides.
- Patterns by org type, system affiliation, or region.

Write your analysis to "output.md". Aim for 1000-2000 words.`,
  },

  "retrieval-experience": {
    name: "retrieval-experience",
    title: "Analysis: Retrieval Experience",
    gatherInputs: gatherNotes,
    mapPrompt: `You are analyzing the experience of searching for and retrieving ROI forms from
healthcare provider websites.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Notes.md files documenting the search process for a batch of organizations are included
inline below.

Your task: characterize the retrieval experience in this batch from a patient's perspective.
- How many clicks/searches did it typically take?
- What navigation patterns worked vs. failed?
- Common obstacles (broken links, bot blocking, login walls, outdated URLs)?
- How often was a browser fallback needed?
- Are some website designs systematically harder to navigate?

Write your findings to "output.md". Include specific examples.
Keep to 500-1000 words.`,

    reducePrompt: `You are synthesizing findings about what it's actually like to try to find
ROI forms online, as a patient would.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Retrieval experience analysis from individual map batches is included inline below.

Your task: produce a narrative about the patient navigation experience.
- What's the typical experience? How many searches, how many clicks?
- Common navigation patterns that work and don't work
- The most frustrating experiences and why
- Technical obstacles (bot blocking, JavaScript, login walls)
- Recommendations for organizations to improve findability

Write your analysis to "output.md". Aim for 1500-2000 words.`,
  },

  "surprising-findings": {
    name: "surprising-findings",
    title: "Analysis: Surprising Findings",
    gatherInputs: gatherOrgFiles,
    extraFiles: [ORG_LOOKUP_PATH],
    mapPrompt: `You are exploring org-level synthesis results for a study of healthcare provider form quality.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Org-level synthesis files (synthesis.md narratives and scores.json structured data)
for a batch of organizations are included inline below. Read with fresh eyes.
org-lookup.json maps org_id → full org metadata (facility_type, ownership, system_affiliation,
census_region, state, city). Use this to notice when orgs defy expectations for their type.

Your task: identify anything surprising, unexpected, or noteworthy that doesn't fit
neatly into the other analysis categories (best practices, barriers, portals, etc.).
What patterns or individual findings would you want to tell someone about?

Write your findings to "output.md". Be specific and cite organizations.
Keep to 500-1000 words.`,

    reducePrompt: `You are synthesizing surprising and unexpected findings from across the
entire ROI form study.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Notes on surprising findings from individual map batches are included inline below.

Your task: curate the most interesting and unexpected discoveries.
- Select findings that genuinely surprise or challenge assumptions
- Look for cross-batch patterns that individual mappers couldn't see
- Discuss implications — what do these findings suggest about the state of patient access?

Write your analysis to "output.md". Aim for 1500-2500 words.`,
  },

  "document-quality": {
    name: "document-quality",
    title: "Analysis: Document Quality",
    gatherInputs: gatherOrgFiles,
    extraFiles: [ORG_LOOKUP_PATH],
    mapPrompt: `You are analyzing the technical and design quality of ROI form documents for a
study of healthcare provider form quality.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Org-level synthesis files (synthesis.md narratives and scores.json structured data)
for a batch of organizations are included inline below.
org-lookup.json maps org_id → full org metadata (facility_type, ownership, system_affiliation,
census_region, state, city). Use this to contextualize your findings.

Your task: focus specifically on the FORM DOCUMENTS as technical artifacts. For this batch:
- How many forms are fillable/interactive PDFs vs. flat (print-and-fill) PDFs vs. image-only scans?
- What's the range of page counts and field counts?
- How many are clearly digital-first vs. scanned paper forms?
- What's the state of layout, typography, and visual design?
- Are instructions included? Are they clear?
- How common is multilingual support?
- Any notable examples of exceptionally good or bad document craftsmanship?

Tally counts where possible. Cite specific orgs for notable examples.
Write your findings to "output.md". Keep to 500-1000 words.`,

    reducePrompt: `You are synthesizing findings about form document quality across the entire
ROI form study — focusing on the forms as technical artifacts.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Document quality analysis from individual map batches is included inline below.

Your task: produce a comprehensive picture of document quality across the study.
- Aggregate the counts: what fraction are fillable? Image-only scans? Digital-first?
- What's the typical page count, field count range?
- How common are instructions, multilingual versions, clear layouts?
- What does the "typical" ROI form look like as a document?
- Contrast the best-crafted documents with the worst
- Are there patterns by org type — do larger orgs produce better documents?
- What would it take for the industry to reach a baseline standard?

Write your analysis to "output.md". Aim for 1500-2500 words.`,
  },

  "wrong-form": {
    name: "wrong-form",
    title: "Analysis: Wrong Form Problem",
    gatherInputs: gatherOrgFiles,
    extraFiles: [ORG_LOOKUP_PATH],
    mapPrompt: `You are investigating a specific problem in healthcare record access: organizations
that offer patients a generic third-party authorization form when the patient actually wants
to request their OWN records under HIPAA's Right of Access.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Org-level synthesis files (synthesis.md narratives and scores.json structured data)
for a batch of organizations are included inline below.
org-lookup.json maps org_id → full org metadata.

Your task: for each org in this batch, classify its access pathway:
- Does it offer a DEDICATED patient access form (designed for individual access under § 164.524)?
- Does it only offer a GENERIC HIPAA authorization form (designed for third-party release)?
- Does it offer BOTH (separate forms for each purpose)?
- Is it PORTAL-ONLY (no downloadable form)?
- Could you NOT DETERMINE from the available materials?

For orgs using only a generic form: what specifically makes it a poor fit for patient
self-access? What would a patient experience — confusion, extra fields, wrong framing?

Tally counts. Cite specific examples of the mismatch problem.
Write your findings to "output.md". Keep to 500-1000 words.`,

    reducePrompt: `You are synthesizing findings about the "wrong form" problem in healthcare
record access — how often patients seeking their own records are given a form designed
for third-party release of information.

Read DESIGN.md and ANALYSIS-PLAN.md for context.

Findings from individual map batches are included inline below.

Your task: produce a definitive analysis of this problem.
- What fraction of orgs have a dedicated patient access form vs. generic-only?
- Aggregate the pathway classifications across all batches
- What's the patient impact — how does using a third-party form for self-access create
  confusion, extra burden, or wrong framing?
- Are there patterns — do certain org types or regions do better?
- What does a good patient access form look like vs. a generic authorization?
  Use specific contrasting examples.
- Is this a widespread systemic issue or limited to certain org types?

Write your analysis to "output.md". Aim for 1500-2500 words.`,
  },
};

const AVAILABLE = Object.keys(ANALYSES).join(", ");

export async function run(opts: RunOptions & { analysis?: string }) {
  const name = opts.analysis;

  if (!name) {
    console.log(`\nAvailable analyses: ${AVAILABLE}\n`);
    console.log("Usage: bun run.ts analyze --analysis <name>");
    console.log("       bun run.ts analyze --analysis all\n");
    return;
  }

  if (name === "all") {
    for (const [key, config] of Object.entries(ANALYSES)) {
      info("Analyze", `Running: ${key}`);
      await runMapReduce(config, opts);
    }
    return;
  }

  const config = ANALYSES[name];
  if (!config) {
    fail("Analyze", `Unknown analysis: ${name}. Available: ${AVAILABLE}`);
    process.exit(1);
  }

  await runMapReduce(config, opts);
}
