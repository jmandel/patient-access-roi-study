import { readJson, listFiles, listDirs, dataPath } from "../lib/store";
import type { OrgCategory, Organization, FormScores } from "../lib/types";
import { banner } from "../lib/log";
import { existsSync, readdirSync } from "fs";

export async function run() {
  // Stage 1: categories
  const categories = readJson<OrgCategory[]>("categories.json");
  const catCount = categories?.length ?? 0;
  const targetOrgs = categories?.reduce((s, c) => s + c.target_count, 0) ?? 0;

  // Stage 2: organizations
  const orgFiles = listFiles("organizations", ".json");
  let orgCount = 0;
  for (const f of orgFiles) {
    const orgs = readJson<Organization[]>(`organizations/${f}.json`);
    orgCount += orgs?.length ?? 0;
  }

  // Stage 3: forms
  const formDirs = listDirs("forms");
  let formsWithNotes = 0;
  let totalPdfs = 0;
  for (const d of formDirs) {
    if (existsSync(dataPath("forms", d, "notes.md"))) formsWithNotes++;
    const files = readdirSync(dataPath("forms", d));
    totalPdfs += files.filter((f) => f.endsWith(".pdf")).length;
  }

  // Stage 4: evaluations (per-form)
  const evalFiles = listFiles("evaluations", ".md");

  // Stage 5: scores
  const scoreFiles = listFiles("scores", ".json");
  let gradeDistribution: Record<string, number> = {};
  for (const f of scoreFiles) {
    const score = readJson<FormScores>(`scores/${f}.json`);
    if (score) {
      const g = score.scores.overall.grade;
      gradeDistribution[g] = (gradeDistribution[g] || 0) + 1;
    }
  }

  banner("ROI Form Study — Pipeline Status", {});

  console.log("  Stage 1: Sampling Frame");
  console.log(
    `    ${catCount > 0 ? "✅" : "⬜"} ${catCount} categories defined (targeting ${targetOrgs} orgs)`
  );

  console.log("\n  Stage 2: Discover Organizations");
  console.log(
    `    ${orgCount > 0 ? "✅" : "⬜"} ${orgFiles.length}/${catCount} categories processed → ${orgCount} organizations`
  );

  console.log("\n  Stage 3: Retrieve Forms");
  console.log(
    `    ${formsWithNotes > 0 ? "✅" : "⬜"} ${formsWithNotes}/${orgCount} orgs searched → ${totalPdfs} PDFs found`
  );

  console.log("\n  Stage 4: Evaluate Forms");
  console.log(
    `    ${evalFiles.length > 0 ? "✅" : "⬜"} ${evalFiles.length}/${totalPdfs} forms evaluated`
  );

  console.log("\n  Stage 5: Score Forms");
  console.log(
    `    ${scoreFiles.length > 0 ? "✅" : "⬜"} ${scoreFiles.length}/${evalFiles.length} evaluations scored`
  );

  if (Object.keys(gradeDistribution).length > 0) {
    console.log("    Grades:", gradeDistribution);
  }

  console.log();
}
