/**
 * Compile pipeline data into site-ready JSON bundles.
 * Reads synthesis/scores.json + org metadata → site/public/data/
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, copyFileSync } from "fs";
import { join, basename } from "path";
import { hasRoiForm } from "../lib/roi-filter";

const DATA_DIR = join(import.meta.dir, "..", "data");
const OUT_DIR = join(import.meta.dir, "public", "data");

mkdirSync(join(OUT_DIR, "narratives"), { recursive: true });
mkdirSync(join(OUT_DIR, "notes"), { recursive: true });
mkdirSync(join(OUT_DIR, "evaluations"), { recursive: true });

// 1. Load all org metadata from organizations/*.json
interface OrgMeta {
  org_id: string;
  name: string;
  city: string;
  state: string;
  website: string;
  category_id: string;
  axes: Record<string, string>;
}

const orgMeta = new Map<string, OrgMeta>();
const orgsDir = join(DATA_DIR, "organizations");
for (const f of readdirSync(orgsDir).filter((f) => f.endsWith(".json"))) {
  const orgs: OrgMeta[] = JSON.parse(readFileSync(join(orgsDir, f), "utf-8"));
  for (const o of orgs) orgMeta.set(o.org_id, o);
}

// 2. Load all synthesis scores.json and merge with org metadata
const synthDir = join(DATA_DIR, "synthesis");
const allOrgs: any[] = [];

for (const orgId of readdirSync(synthDir)) {
  const scoresPath = join(synthDir, orgId, "scores.json");
  if (!existsSync(scoresPath)) continue;

  const scores = JSON.parse(readFileSync(scoresPath, "utf-8"));
  const meta = orgMeta.get(orgId);

  allOrgs.push({
    ...scores,
    // Ensure org metadata is present even if scores.json is missing some
    city: meta?.city ?? "",
    state: meta?.state ?? "",
    website: meta?.website ?? "",
    axes: meta?.axes ?? {},
  });

  // Copy synthesis.md
  const synthMd = join(synthDir, orgId, "synthesis.md");
  if (existsSync(synthMd)) {
    writeFileSync(join(OUT_DIR, "narratives", `${orgId}.md`), readFileSync(synthMd));
  }
}

// 3. Copy notes.md files
const formsDir = join(DATA_DIR, "forms");
for (const orgId of readdirSync(formsDir)) {
  const notesPath = join(formsDir, orgId, "notes.md");
  if (existsSync(notesPath)) {
    writeFileSync(join(OUT_DIR, "notes", `${orgId}.md`), readFileSync(notesPath));
  }
}

// 4. Copy evaluation files
const evalsDir = join(DATA_DIR, "evaluations");
if (existsSync(evalsDir)) {
  for (const f of readdirSync(evalsDir).filter((f) => f.endsWith(".md"))) {
    copyFileSync(join(evalsDir, f), join(OUT_DIR, "evaluations", f));
  }
}

// 4b. Exclude orgs where no actual ROI form was found/analyzed
const beforeCount = allOrgs.length;
const filteredOrgs = allOrgs.filter((org) => hasRoiForm(org));
console.log(`   ROI filter: ${filteredOrgs.length}/${beforeCount} orgs have an actual ROI form`);

// 5. Compute aggregate stats
const grades: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, F: 0 };
const overallScores: number[] = [];
for (const org of filteredOrgs) {
  const g = org.scores?.overall?.grade;
  if (g) grades[g] = (grades[g] || 0) + 1;
  if (org.scores?.overall?.score != null) overallScores.push(org.scores.overall.score);
}

const stats = {
  totalOrgs: filteredOrgs.length,
  grades,
  meanScore: overallScores.length
    ? +(overallScores.reduce((a, b) => a + b, 0) / overallScores.length).toFixed(2)
    : 0,
  medianScore: overallScores.length
    ? +overallScores.sort((a, b) => a - b)[Math.floor(overallScores.length / 2)].toFixed(2)
    : 0,
};

// 6. Write outputs
writeFileSync(join(OUT_DIR, "orgs.json"), JSON.stringify(filteredOrgs, null, 2));
writeFileSync(join(OUT_DIR, "stats.json"), JSON.stringify(stats, null, 2));

console.log(`✅ Built site data: ${filteredOrgs.length} orgs (${beforeCount - filteredOrgs.length} excluded by ROI filter), ${Object.values(grades).reduce((a, b) => a + b, 0)} graded`);
console.log(`   Grades: ${Object.entries(grades).map(([g, n]) => `${g}:${n}`).join(" ")}`);
console.log(`   Mean: ${stats.meanScore}, Median: ${stats.medianScore}`);
