import type { RunOptions, OrgCategory, StudyAxes } from "../lib/types";
import { runAgentJSON } from "../lib/llm";
import { readJson, dataPath, dataDir } from "../lib/store";
import { banner, info, success } from "../lib/log";

const AXES_FILE = "axes.json";
const CATEGORIES_FILE = "categories.json";

const TASK_PROMPT = `You are generating a sampling frame for a study of healthcare provider ROI forms.

Read DESIGN.md in this directory to understand the full study design — your task is Stage 1.
Use the design doc for context on the study goals, but create your OWN taxonomy based on
your knowledge of the U.S. healthcare landscape. Don't copy the design doc's example values.

Your job has TWO parts:

PART 1: Define the study axes. Write "${AXES_FILE}" with this structure:
{
  "axes": {
    "axis_name": {
      "description": "What this axis captures and why it matters for ROI form quality",
      "values": ["value1", "value2", ...]
    },
    ...
  },
  "unrealistic_combinations": [
    "short description of combo to skip",
    ...
  ]
}

Design principles for good axes:
- Each axis should capture ONE independent dimension of variation. Don't mix concepts
  (e.g. geographic region and urbanicity are separate dimensions, not one list).
- Values within an axis must be mutually exclusive and collectively exhaustive —
  every real U.S. healthcare organization should fit exactly one value per axis.
- Choose axes that plausibly affect ROI form quality (org resources, regulatory
  environment, patient population, etc.)
- 3-5 axes is probably right. More than 5 creates an unmanageable product space.
- Each axis should have a manageable number of values (3-8 typically).

PART 2: Produce a curated list of realistic categories. Write "${CATEGORIES_FILE}" as a JSON
array. Do NOT blindly compute the full cartesian product — many combinations are rare or
nonexistent. Only include a category if:
  - The combination actually exists in practice
  - You could realistically identify at least 50 candidate organizations nationwide
    through a thorough web search

Each element must have these exact fields:
  category_id (kebab-case string uniquely identifying this combination)
  axes (object mapping each axis name to its value for this category)
  target_count (integer — how many orgs to find for this category)
  description (one sentence describing what organizations fit here)

Guidelines:
- Be selective — fewer well-populated categories are better than many sparse ones
- Aim for ~150-250 total organizations across all categories
- Over-sample where you expect more form quality variance

IMPORTANT — Calibrate target counts using real-world data:
Before setting target_count values, use web search to understand the actual distribution
of U.S. healthcare organizations across your axes. Look for data from AHA, CMS, HRSA,
state hospital associations, or other authoritative sources. Use these real-world
proportions to guide how many organizations you target per axis value.

The study will compare scores across axis values (e.g., "do for-profit hospitals have
worse forms than nonprofits?"). For these comparisons to be meaningful, every value on
every axis needs enough representation in the sample. If a value is underrepresented,
the study can't draw conclusions about it — which defeats the purpose of including it
as an axis in the first place.

After writing both files, validate:
- Read each back and confirm valid JSON
- Confirm every category's axis values appear in the axes definition
- Check that all required fields are present on every category entry
- Print a summary: axes with their values, total categories, total target orgs`;

export async function run(opts: RunOptions) {
  const existingAxes = readJson<StudyAxes>(AXES_FILE);
  const existingCats = readJson<OrgCategory[]>(CATEGORIES_FILE);
  if (existingAxes && existingCats && !opts.force) {
    info("Stage 1", `Already have ${existingCats.length} categories. Use --force to regenerate.`);
    return;
  }

  banner("Stage 1: Sampling Frame", { Model: opts.model, Output: dataPath(CATEGORIES_FILE) });

  if (opts.dryRun) {
    info("Stage 1", "Dry run — would generate sampling frame");
    return;
  }

  info("Stage 1", "Generating axes and organization categories...");

  const workDir = dataDir();

  // Agent writes both axes.json and categories.json; we key on categories.json for completion
  const categories = await runAgentJSON<OrgCategory[]>({
    workDir,
    prompt: TASK_PROMPT,
    outputFile: CATEGORIES_FILE,
    model: opts.model,
    instanceId: "stage1",
  });

  const axes = readJson<StudyAxes>(AXES_FILE);
  if (axes) {
    console.log("\nAxes defined:");
    for (const [name, axis] of Object.entries(axes.axes)) {
      console.log(`  ${name}: ${axis.values.join(", ")}`);
    }
    if (axes.unrealistic_combinations?.length) {
      console.log(`  Pruned: ${axes.unrealistic_combinations.length} unrealistic combos`);
    }
  }

  const totalOrgs = categories.reduce((s, c) => s + c.target_count, 0);
  success("Stage 1", `Generated ${categories.length} categories targeting ${totalOrgs} organizations`);

  // Breakdown by each axis
  if (axes) {
    for (const axisName of Object.keys(axes.axes)) {
      const byValue: Record<string, { count: number; target: number }> = {};
      for (const c of categories) {
        const val = c.axes[axisName] ?? "(missing)";
        const s = byValue[val] ?? { count: 0, target: 0 };
        s.count++;
        s.target += c.target_count;
        byValue[val] = s;
      }
      console.log(`\nBreakdown by ${axisName}:`);
      for (const [val, { count, target }] of Object.entries(byValue)) {
        console.log(`  ${val.padEnd(40)} ${count} categories, ${target} orgs`);
      }
    }
  }
}
