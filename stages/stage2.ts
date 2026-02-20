import type { RunOptions, OrgCategory, Organization } from "../lib/types";
import { runAgentJSON } from "../lib/llm";
import { readJson, writeJson, dataDir, exists } from "../lib/store";
import { runStage } from "../lib/stage-runner";
import { fail } from "../lib/log";

const CATEGORIES_PATH = "categories.json";
const ORGS_DIR = "organizations";

function makePrompt(cat: OrgCategory): string {
  const axesDesc = Object.entries(cat.axes)
    .map(([k, v]) => `  ${k}: ${v}`)
    .join("\n");

  return `You are finding real healthcare organizations for a study of ROI form quality.

Read DESIGN.md in this directory to understand the full study — your task is Stage 2.

Your specific assignment: find ${cat.target_count} organizations matching this category:
${axesDesc}
  Description: ${cat.description}

Use web search to find and verify real, currently operating organizations.
For each, confirm it has a patient-facing website.

Write the result to "output.json" as a JSON array. Each element must have:
  org_id (kebab-case, e.g. "mayo-clinic")
  name (official name)
  category_id ("${cat.category_id}")
  axes (${JSON.stringify(cat.axes)})
  state (2-letter abbreviation)
  city (city name)
  website (main URL)
  bed_count (integer or null)
  notes (brief, optional)

After writing, validate: read it back, confirm valid JSON, confirm all fields present,
confirm you found the target count of organizations.`;
}

export async function run(opts: RunOptions) {
  const categories = readJson<OrgCategory[]>(CATEGORIES_PATH);
  if (!categories) {
    fail("Stage 2", "No categories.json found. Run stage1 first.");
    process.exit(1);
  }

  await runStage<OrgCategory, Organization[]>({
    name: "Stage 2: Discover Organizations",
    loadItems: () => categories,
    itemId: (c) => c.category_id,
    itemLabel: (c) => `${c.category_id} (target: ${c.target_count})`,
    isComplete: (c) => exists(`${ORGS_DIR}/${c.category_id}.json`),
    run: async (cat, opts) => {
      const workDir = dataDir("_work", "stage2", cat.category_id);
      const orgs = await runAgentJSON<Organization[]>({
        workDir,
        prompt: makePrompt(cat),
        outputFile: "output.json",
        model: opts.model,
        instanceId: `stage2/${cat.category_id}`,
      });
      writeJson(`${ORGS_DIR}/${cat.category_id}.json`, orgs);
      return orgs;
    },
    formatResult: (_cat, orgs) => `found ${orgs.length} orgs`,
    summarize: (results) => {
      const total = results
        .filter((r) => r.result)
        .reduce((s, r) => s + r.result!.length, 0);
      console.log(`\n  Total organizations found: ${total}`);
    },
  }, opts);
}
