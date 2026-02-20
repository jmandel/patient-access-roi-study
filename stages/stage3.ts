import type { RunOptions, Organization } from "../lib/types";
import { readJson, writeJson, dataDir, dataPath, exists, listFiles } from "../lib/store";
import { runAgentFreeform } from "../lib/llm";
import { extractPdfMetadata } from "../lib/pdf";
import { runStage } from "../lib/stage-runner";
import { info } from "../lib/log";
import { readdirSync } from "fs";
import { join } from "path";

const ORGS_DIR = "organizations";
const FORMS_DIR = "forms";

function allOrganizations(): Organization[] {
  const files = listFiles(ORGS_DIR, ".json");
  const orgs: Organization[] = [];
  for (const f of files) {
    const data = readJson<Organization[]>(`${ORGS_DIR}/${f}.json`);
    if (data) orgs.push(...data);
  }
  return orgs;
}

function makePrompt(org: Organization): string {
  return `You are retrieving Release of Information (ROI) forms for a study of form quality.

Read DESIGN.md in this directory to understand the full study — your task is Stage 3.

Your specific assignment: find and download the ROI / Authorization for Medical Records
form for this organization:

  Name: ${org.name}
  Website: ${org.website}
  Location: ${org.city}, ${org.state}
  Type: ${Object.entries(org.axes).map(([k, v]) => `${k}: ${v}`).join(", ")}

Use your judgment to search effectively. Try web searches, navigate the organization's
website, and check parent systems if applicable. Adapt your search strategy to what works
for this specific organization — don't just follow a fixed recipe.

For downloading PDFs, use curl with a realistic browser user-agent string.
Verify each download is a real PDF by extracting text with pdftotext.

If curl fails (bot blocking, JavaScript-rendered pages, login walls, etc.), you have
access to a full browser environment via Chrome DevTools MCP. Use it to navigate to the
page, interact with it, and download the form.

Number forms sequentially: form-1.pdf, form-2.pdf, etc.
Keep ALL downloaded PDFs — don't discard documents even if they turn out to be something
other than an ROI form. Part of the study is understanding what documents organizations
publish and how they relate to each other. Let the evaluation stage sort out what each
document is.

When done, write "notes.md" summarizing what you found. Include:
- What search strategies you tried and what worked
- Which URLs you downloaded from and what each document turned out to be
- Any difficulties encountered
- For each downloaded PDF, note the filename, source URL, and your initial impression
  of what the document is`;
}

export async function run(opts: RunOptions) {
  const results = await runStage<Organization, number>({
    name: "Stage 3: Retrieve Forms",
    loadItems: allOrganizations,
    itemId: (o) => o.org_id,
    itemLabel: (o) => `${o.org_id} (${o.name})`,
    isComplete: (o) => exists(`${FORMS_DIR}/${o.org_id}/notes.md`),
    emptyMessage: "No organizations found. Run stage2 first.",
    run: async (org, opts) => {
      const workDir = dataDir(FORMS_DIR, org.org_id);

      await runAgentFreeform({
        workDir,
        prompt: makePrompt(org),
        model: opts.model,
        instanceId: `stage3/${org.org_id}`,
      });

      // Deterministic metadata extraction for any PDFs the agent downloaded
      const pdfs = readdirSync(workDir).filter((f) => f.endsWith(".pdf"));
      for (const pdf of pdfs) {
        try {
          const metadata = await extractPdfMetadata(join(workDir, pdf));
          writeJson(join(workDir, pdf.replace(".pdf", "-metadata.json")), metadata);
        } catch {
          info("Stage 3", `  Could not extract metadata from ${pdf}`);
        }
      }
      return pdfs.length;
    },
    formatResult: (_org, count) => `${count} PDF(s) downloaded`,
    summarize: (results) => {
      const totalPdfs = results
        .filter((r) => r.result !== undefined)
        .reduce((s, r) => s + r.result!, 0);
      console.log(`  Total PDFs downloaded: ${totalPdfs}`);
    },
  }, opts);
}
