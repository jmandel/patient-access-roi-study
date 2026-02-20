// Quantitative analysis of synthesis scores.
// Reads synthesis/*/scores.json + org-lookup.json
// Produces data/analysis/quantitative/summary-stats.json and report.md

import { readdirSync, existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { dataPath, dataDir } from "../lib/store";
import type { OrgSynthesis } from "../lib/synthesis-schema";
import type { Organization } from "../lib/types";
import { hasRoiForm } from "../lib/roi-filter";

// ── Data Loading ───────────────────────────────────────────────────────

interface OrgRecord {
  synthesis: OrgSynthesis;
  org: Organization;
}

function loadData(): OrgRecord[] {
  const lookupPath = dataPath("org-lookup.json");
  const lookup: Record<string, Organization> = JSON.parse(readFileSync(lookupPath, "utf-8"));

  const synthDir = dataPath("synthesis");
  const records: OrgRecord[] = [];

  for (const dir of readdirSync(synthDir)) {
    const scoresPath = join(synthDir, dir, "scores.json");
    if (!existsSync(scoresPath)) continue;
    try {
      const synthesis: OrgSynthesis = JSON.parse(readFileSync(scoresPath, "utf-8"));
      if (!hasRoiForm(synthesis)) continue;
      const org = lookup[synthesis.org_id];
      if (!org) continue;
      records.push({ synthesis, org });
    } catch { /* skip malformed */ }
  }
  return records;
}

// ── Stats Helpers ──────────────────────────────────────────────────────

function mean(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function median(arr: number[]): number {
  const s = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

function std(arr: number[]): number {
  const m = mean(arr);
  return Math.sqrt(arr.reduce((s, x) => s + (x - m) ** 2, 0) / (arr.length - 1));
}

function quantile(arr: number[], q: number): number {
  const s = [...arr].sort((a, b) => a - b);
  const pos = (s.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return s[lo] + (s[hi] - s[lo]) * (pos - lo);
}

function summarize(arr: number[]) {
  if (arr.length === 0) return { n: 0, mean: 0, median: 0, std: 0, min: 0, max: 0, q25: 0, q75: 0 };
  return {
    n: arr.length,
    mean: round(mean(arr)),
    median: round(median(arr)),
    std: round(std(arr)),
    min: round(Math.min(...arr)),
    max: round(Math.max(...arr)),
    q25: round(quantile(arr, 0.25)),
    q75: round(quantile(arr, 0.75)),
  };
}

function round(n: number, d = 2): number {
  return Math.round(n * 10 ** d) / 10 ** d;
}

function countBy<T>(arr: T[], fn: (x: T) => string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const x of arr) {
    const k = fn(x);
    out[k] = (out[k] || 0) + 1;
  }
  return out;
}

function groupBy<T>(arr: T[], fn: (x: T) => string): Record<string, T[]> {
  const out: Record<string, T[]> = {};
  for (const x of arr) {
    const k = fn(x);
    (out[k] ||= []).push(x);
  }
  return out;
}

// ── Kruskal-Wallis H Test ──────────────────────────────────────────────

function ranks(values: number[]): number[] {
  const indexed = values.map((v, i) => ({ v, i }));
  indexed.sort((a, b) => a.v - b.v);
  const r = new Array(values.length);
  let i = 0;
  while (i < indexed.length) {
    let j = i;
    while (j < indexed.length && indexed[j].v === indexed[i].v) j++;
    const avgRank = (i + 1 + j) / 2; // 1-based average rank for ties
    for (let k = i; k < j; k++) r[indexed[k].i] = avgRank;
    i = j;
  }
  return r;
}

interface KruskalResult {
  H: number;
  df: number;
  p: number;
  eta_squared: number;
  group_medians: Record<string, number>;
  group_ns: Record<string, number>;
}

function kruskalWallis(groups: Record<string, number[]>): KruskalResult | null {
  const keys = Object.keys(groups).filter(k => groups[k].length > 0);
  if (keys.length < 2) return null;

  const allValues: number[] = [];
  const groupLabels: string[] = [];
  for (const k of keys) {
    for (const v of groups[k]) {
      allValues.push(v);
      groupLabels.push(k);
    }
  }
  const N = allValues.length;
  const r = ranks(allValues);

  let H = 0;
  const group_medians: Record<string, number> = {};
  const group_ns: Record<string, number> = {};
  for (const k of keys) {
    const indices = groupLabels.map((g, i) => g === k ? i : -1).filter(i => i >= 0);
    const ni = indices.length;
    const Ri = indices.reduce((s, i) => s + r[i], 0);
    H += (Ri * Ri) / ni;
    group_medians[k] = round(median(groups[k]));
    group_ns[k] = ni;
  }
  H = (12 / (N * (N + 1))) * H - 3 * (N + 1);
  const df = keys.length - 1;

  // Chi-squared approximation for p-value
  const p = 1 - chiSquaredCDF(H, df);

  // Effect size: eta-squared = (H - k + 1) / (N - k)
  const eta_squared = round(Math.max(0, (H - df) / (N - keys.length)), 3);

  return { H: round(H), df, p: round(p, 4), eta_squared, group_medians, group_ns };
}

// ── Chi-Squared CDF (approximation) ───────────────────────────────────

function chiSquaredCDF(x: number, k: number): number {
  if (x <= 0) return 0;
  return regularizedGammaP(k / 2, x / 2);
}

function regularizedGammaP(a: number, x: number): number {
  // Series expansion for lower incomplete gamma / gamma(a)
  if (x < a + 1) {
    let sum = 1 / a;
    let term = 1 / a;
    for (let n = 1; n < 200; n++) {
      term *= x / (a + n);
      sum += term;
      if (Math.abs(term) < 1e-12) break;
    }
    return sum * Math.exp(-x + a * Math.log(x) - lnGamma(a));
  }
  // Continued fraction for upper incomplete gamma
  return 1 - regularizedGammaQ(a, x);
}

function regularizedGammaQ(a: number, x: number): number {
  let f = 1 + x - a;
  let c = 1 / 1e-30;
  let d = 1 / f;
  let h = d;
  for (let i = 1; i < 200; i++) {
    const an = -i * (i - a);
    const bn = 2 * i + 1 + x - a;
    d = bn + an * d;
    if (Math.abs(d) < 1e-30) d = 1e-30;
    c = bn + an / c;
    if (Math.abs(c) < 1e-30) c = 1e-30;
    d = 1 / d;
    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) < 1e-12) break;
  }
  return Math.exp(-x + a * Math.log(x) - lnGamma(a)) * h;
}

function lnGamma(x: number): number {
  // Lanczos approximation
  const g = 7;
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];
  if (x < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * x)) - lnGamma(1 - x);
  }
  x -= 1;
  let a = c[0];
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  const t = x + g + 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}

// ── Chi-Squared Test for Independence ──────────────────────────────────

interface ChiSquaredResult {
  chi2: number;
  df: number;
  p: number;
  cramers_v: number;
  contingency: Record<string, Record<string, number>>;
}

function chiSquaredTest(
  groupLabels: string[],
  outcomeLabels: string[]
): ChiSquaredResult | null {
  if (groupLabels.length !== outcomeLabels.length) return null;

  const groups = [...new Set(groupLabels)];
  const outcomes = [...new Set(outcomeLabels)];
  if (groups.length < 2 || outcomes.length < 2) return null;

  const n = groupLabels.length;
  const observed: Record<string, Record<string, number>> = {};
  for (const g of groups) {
    observed[g] = {};
    for (const o of outcomes) observed[g][o] = 0;
  }
  for (let i = 0; i < n; i++) {
    observed[groupLabels[i]][outcomeLabels[i]]++;
  }

  const rowTotals: Record<string, number> = {};
  const colTotals: Record<string, number> = {};
  for (const g of groups) {
    rowTotals[g] = outcomes.reduce((s, o) => s + observed[g][o], 0);
  }
  for (const o of outcomes) {
    colTotals[o] = groups.reduce((s, g) => s + observed[g][o], 0);
  }

  let chi2 = 0;
  for (const g of groups) {
    for (const o of outcomes) {
      const expected = (rowTotals[g] * colTotals[o]) / n;
      if (expected > 0) {
        chi2 += (observed[g][o] - expected) ** 2 / expected;
      }
    }
  }

  const df = (groups.length - 1) * (outcomes.length - 1);
  const p = 1 - chiSquaredCDF(chi2, df);
  const k = Math.min(groups.length, outcomes.length);
  const cramers_v = round(Math.sqrt(chi2 / (n * (k - 1))), 3);

  return { chi2: round(chi2), df, p: round(p, 4), cramers_v, contingency: observed };
}

// ── Spearman Correlation ───────────────────────────────────────────────

function spearman(x: number[], y: number[]): number {
  const rx = ranks(x);
  const ry = ranks(y);
  const n = x.length;
  const mx = mean(rx), my = mean(ry);
  let num = 0, dx = 0, dy = 0;
  for (let i = 0; i < n; i++) {
    num += (rx[i] - mx) * (ry[i] - my);
    dx += (rx[i] - mx) ** 2;
    dy += (ry[i] - my) ** 2;
  }
  return dx && dy ? round(num / Math.sqrt(dx * dy), 3) : 0;
}

// ── Dimensions ─────────────────────────────────────────────────────────

const DIMENSIONS = [
  "findability",
  "technical_accessibility",
  "content_design",
  "patient_centeredness",
  "compliance",
  "overall",
] as const;
type Dimension = typeof DIMENSIONS[number];

const AXES = ["facility_type", "system_affiliation", "ownership", "census_region"] as const;
type Axis = typeof AXES[number];

function dimScore(s: OrgSynthesis, dim: Dimension): number {
  if (dim === "overall") return s.scores.overall.score;
  return s.scores[dim].score;
}

// ── Analysis 2.1: Sample Description ───────────────────────────────────

function sampleDescription(records: OrgRecord[]) {
  const axisCounts: Record<string, Record<string, number>> = {};
  for (const axis of AXES) {
    axisCounts[axis] = countBy(records, r => r.org.axes[axis] || "unknown");
  }

  const stateCounts = countBy(records, r => r.org.state);
  const statesRepresented = Object.keys(stateCounts).length;

  return {
    total_orgs: records.length,
    axis_counts: axisCounts,
    states_represented: statesRepresented,
    state_counts: stateCounts,
  };
}

// ── Analysis 2.2: Overall Distributions ────────────────────────────────

function overallDistributions(records: OrgRecord[]) {
  const dimensions: Record<string, ReturnType<typeof summarize>> = {};
  for (const dim of DIMENSIONS) {
    dimensions[dim] = summarize(records.map(r => dimScore(r.synthesis, dim)));
  }

  const grades = countBy(records, r => r.synthesis.scores.overall.grade);

  // Correlation matrix (Spearman)
  const dimScores: Record<string, number[]> = {};
  for (const dim of DIMENSIONS) {
    dimScores[dim] = records.map(r => dimScore(r.synthesis, dim));
  }
  const correlations: Record<string, Record<string, number>> = {};
  for (const d1 of DIMENSIONS) {
    correlations[d1] = {};
    for (const d2 of DIMENSIONS) {
      correlations[d1][d2] = spearman(dimScores[d1], dimScores[d2]);
    }
  }

  // Binary outcomes
  const binaryOutcomes = {
    has_fillable_fields: records.filter(r => r.synthesis.form_quality.fillable_fields).length,
    has_individual_access_pathway: records.filter(r => r.synthesis.access_pathway.has_individual_access_pathway).length,
    online_submission_available: records.filter(r => r.synthesis.access_pathway.online_submission_available).length,
    requires_physical_delivery: records.filter(r => r.synthesis.access_pathway.requires_physical_delivery).length,
    multilingual: records.filter(r => r.synthesis.form_quality.multilingual).length,
    has_instructions: records.filter(r => r.synthesis.form_quality.has_instructions).length,
    plain_language: records.filter(r => r.synthesis.form_quality.plain_language).length,
  };

  // Pathway type distribution
  const pathwayTypes = countBy(records, r => r.synthesis.access_pathway.primary_pathway_type);

  // Retrieval difficulty
  const retrievalDifficulty = countBy(records, r => r.synthesis.retrieval?.difficulty || "unknown");

  return { dimensions, grades, correlations, binary_outcomes: binaryOutcomes,
           pathway_types: pathwayTypes, retrieval_difficulty: retrievalDifficulty,
           total: records.length };
}

// ── Analysis 2.3: Univariate Predictors ────────────────────────────────

interface UnivariateResult {
  axis: string;
  outcome: string;
  type: "continuous" | "binary";
  test: KruskalResult | ChiSquaredResult | null;
}

function univariatePredictors(records: OrgRecord[]): UnivariateResult[] {
  const results: UnivariateResult[] = [];

  // Continuous outcomes: each dimension score
  for (const axis of AXES) {
    for (const dim of DIMENSIONS) {
      const groups: Record<string, number[]> = {};
      for (const r of records) {
        const g = r.org.axes[axis] || "unknown";
        (groups[g] ||= []).push(dimScore(r.synthesis, dim));
      }
      results.push({
        axis, outcome: dim, type: "continuous",
        test: kruskalWallis(groups),
      });
    }
  }

  // Binary outcomes
  const binaryFns: Record<string, (r: OrgRecord) => boolean> = {
    has_fillable_fields: r => r.synthesis.form_quality.fillable_fields,
    has_individual_access_pathway: r => r.synthesis.access_pathway.has_individual_access_pathway,
    online_submission: r => r.synthesis.access_pathway.online_submission_available,
    uses_system_forms: r => r.synthesis.uses_system_forms,
  };

  for (const axis of AXES) {
    for (const [outcomeName, fn] of Object.entries(binaryFns)) {
      const groupLabels = records.map(r => r.org.axes[axis] || "unknown");
      const outcomeLabels = records.map(r => fn(r) ? "yes" : "no");
      results.push({
        axis, outcome: outcomeName, type: "binary",
        test: chiSquaredTest(groupLabels, outcomeLabels),
      });
    }
  }

  return results;
}

// ── Markdown Report ────────────────────────────────────────────────────

function generateReport(
  sample: ReturnType<typeof sampleDescription>,
  dist: ReturnType<typeof overallDistributions>,
  univariate: UnivariateResult[],
): string {
  const lines: string[] = [];
  const ln = (s = "") => lines.push(s);

  ln("# ROI Form Study: Quantitative Analysis");
  ln();
  ln(`**N = ${sample.total_orgs}** organizations across ${sample.states_represented} states`);
  ln();

  // Sample description
  ln("## 1. Sample Description");
  ln();
  for (const axis of AXES) {
    ln(`### ${axis}`);
    ln("| Value | N | % |");
    ln("|-------|---|---|");
    const counts = sample.axis_counts[axis];
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    for (const [val, n] of sorted) {
      ln(`| ${val} | ${n} | ${round(n / sample.total_orgs * 100, 1)}% |`);
    }
    ln();
  }

  // Grade distribution
  ln("## 2. Overall Score Distribution");
  ln();
  ln("### Grades");
  ln("| Grade | N | % | Bar |");
  ln("|-------|---|---|-----|");
  for (const g of ["A", "B", "C", "D", "F"]) {
    const n = dist.grades[g] || 0;
    const pct = round(n / dist.total * 100, 1);
    const bar = "█".repeat(Math.round(pct / 2));
    ln(`| ${g} | ${n} | ${pct}% | ${bar} |`);
  }
  ln();

  // Dimension summaries
  ln("### Dimension Scores");
  ln("| Dimension | Mean | Median | SD | Min | Max |");
  ln("|-----------|------|--------|----|-----|-----|");
  for (const dim of DIMENSIONS) {
    const s = dist.dimensions[dim];
    ln(`| ${dim} | ${s.mean} | ${s.median} | ${s.std} | ${s.min} | ${s.max} |`);
  }
  ln();

  // Correlation matrix
  ln("### Dimension Correlations (Spearman)");
  const dimShort = DIMENSIONS.map(d => d.slice(0, 8));
  ln("| | " + dimShort.join(" | ") + " |");
  ln("|" + "-|".repeat(DIMENSIONS.length + 1));
  for (let i = 0; i < DIMENSIONS.length; i++) {
    const row = DIMENSIONS.map(d2 => {
      const v = dist.correlations[DIMENSIONS[i]][d2];
      return v === 1 ? "—" : String(v);
    });
    ln(`| ${dimShort[i]} | ${row.join(" | ")} |`);
  }
  ln();

  // Binary outcomes
  ln("### Binary Outcomes");
  ln("| Metric | N | % |");
  ln("|--------|---|---|");
  for (const [k, n] of Object.entries(dist.binary_outcomes)) {
    ln(`| ${k} | ${n} | ${round(n / dist.total * 100, 1)}% |`);
  }
  ln();

  // Pathway types
  ln("### Primary Pathway Type");
  ln("| Type | N | % |");
  ln("|------|---|---|");
  for (const [k, n] of Object.entries(dist.pathway_types).sort((a, b) => b[1] - a[1])) {
    ln(`| ${k} | ${n} | ${round(n / dist.total * 100, 1)}% |`);
  }
  ln();

  // Retrieval difficulty
  ln("### Retrieval Difficulty");
  ln("| Difficulty | N | % |");
  ln("|------------|---|---|");
  for (const [k, n] of Object.entries(dist.retrieval_difficulty).sort((a, b) => b[1] - a[1])) {
    ln(`| ${k} | ${n} | ${round(n / dist.total * 100, 1)}% |`);
  }
  ln();

  // Univariate predictors
  ln("## 3. Univariate Predictors");
  ln();
  ln("### Continuous Outcomes (Kruskal-Wallis)");
  ln();

  for (const axis of AXES) {
    ln(`#### By ${axis}`);
    ln("| Outcome | H | df | p | η² | Significant |");
    ln("|---------|---|----|----|----|----|");
    const axisResults = univariate.filter(r => r.axis === axis && r.type === "continuous" && r.test);
    for (const r of axisResults) {
      const t = r.test as KruskalResult;
      const sig = t.p < 0.05 ? "✅" : "";
      ln(`| ${r.outcome} | ${t.H} | ${t.df} | ${t.p} | ${t.eta_squared} | ${sig} |`);
    }
    ln();

    // Show group medians for significant results
    const sigResults = axisResults.filter(r => (r.test as KruskalResult).p < 0.05);
    if (sigResults.length > 0) {
      ln("**Group medians for significant results:**");
      ln();
      for (const r of sigResults) {
        const t = r.test as KruskalResult;
        const medians = Object.entries(t.group_medians)
          .sort((a, b) => b[1] - a[1])
          .map(([k, v]) => `${k}: ${v} (n=${t.group_ns[k]})`)
          .join(", ");
        ln(`- **${r.outcome}**: ${medians}`);
      }
      ln();
    }
  }

  ln("### Binary Outcomes (Chi-Squared)");
  ln();
  ln("| Axis | Outcome | χ² | df | p | Cramér's V | Significant |");
  ln("|------|---------|----|----|---|------------|-------------|");
  for (const r of univariate.filter(r => r.type === "binary" && r.test)) {
    const t = r.test as ChiSquaredResult;
    const sig = t.p < 0.05 ? "✅" : "";
    ln(`| ${r.axis} | ${r.outcome} | ${t.chi2} | ${t.df} | ${t.p} | ${t.cramers_v} | ${sig} |`);
  }
  ln();

  return lines.join("\n");
}

// ── Main ───────────────────────────────────────────────────────────────

export async function run() {
  console.log("\n  Loading synthesis data...");
  const records = loadData();
  console.log(`  Loaded ${records.length} org records\n`);

  if (records.length === 0) {
    console.error("  No synthesis data found. Run synthesize-orgs first.");
    process.exit(1);
  }

  const outDir = dataDir("analysis", "quantitative");

  console.log("  Computing sample description...");
  const sample = sampleDescription(records);

  console.log("  Computing distributions...");
  const dist = overallDistributions(records);

  console.log("  Computing univariate predictors...");
  const univariate = univariatePredictors(records);

  // Save structured results
  const stats = { sample, distributions: dist, univariate };
  writeFileSync(join(outDir, "summary-stats.json"), JSON.stringify(stats, null, 2));
  console.log(`  ✅ Wrote summary-stats.json`);

  // Generate report
  const report = generateReport(sample, dist, univariate);
  writeFileSync(join(outDir, "report.md"), report);
  console.log(`  ✅ Wrote report.md`);

  console.log(`\n  Output: ${outDir}\n`);
}
