import type { RunOptions, FormScores } from "../lib/types";
import { runAgentJSON } from "../lib/llm";
import { writeJson, dataPath, dataDir, exists, listFiles } from "../lib/store";
import { runStage } from "../lib/stage-runner";
import { writeFileSync, copyFileSync } from "fs";
import { join } from "path";

const EVALS_DIR = "evaluations";
const SCORES_DIR = "scores";

const SCORE_SCHEMA = {
  type: "object",
  required: ["org_id", "org_name", "scores", "evaluated_at"],
  properties: {
    org_id: { type: "string" },
    org_name: { type: "string" },
    form_url: { type: "string" },
    scores: {
      type: "object",
      required: ["findability", "technical_accessibility", "content_design", "patient_centeredness", "compliance_signals", "overall"],
      properties: {
        findability: { $ref: "#/$defs/dimension" },
        technical_accessibility: { $ref: "#/$defs/dimension" },
        content_design: { $ref: "#/$defs/dimension" },
        patient_centeredness: { $ref: "#/$defs/dimension" },
        compliance_signals: { $ref: "#/$defs/dimension" },
        overall: {
          type: "object",
          required: ["score", "grade", "summary"],
          properties: {
            score: { type: "number", minimum: 0, maximum: 5 },
            grade: { type: "string", enum: ["A", "B", "C", "D", "F"] },
            summary: { type: "string" },
          },
        },
      },
    },
    evaluated_at: { type: "string" },
  },
  $defs: {
    dimension: {
      type: "object",
      required: ["score", "rationale"],
      properties: {
        score: { type: "integer", minimum: 0, maximum: 5 },
        rationale: { type: "string" },
        subscores: { type: "object" },
      },
    },
  },
};

interface EvalFile {
  evalId: string;
  evalPath: string;
}

function allEvaluations(): EvalFile[] {
  return listFiles(EVALS_DIR, ".md").map((f) => ({
    evalId: f,
    evalPath: dataPath(EVALS_DIR, `${f}.md`),
  }));
}

function makePrompt(evalId: string): string {
  return `You are scoring a document from a healthcare provider based on a qualitative evaluation.

Read DESIGN.md to understand the full study — your task is Stage 5.
Read evaluation.md for the qualitative evaluation to score.
Read score-schema.json for the exact JSON schema your output must conform to.

Score each dimension 1-5 based on what the evaluation describes:
  5=Excellent (best practice), 4=Good, 3=Adequate, 2=Poor, 1=Very Poor, 0=N/A

Base your scores on the evidence in the evaluation. The rationale for each score should
cite specific observations from the evaluation, not general principles.

Weights for overall score: findability 15%, technical 25%, content 15%, patient-centeredness 25%, compliance 20%.
Grade: A (4.5-5.0), B (3.5-4.4), C (2.5-3.4), D (1.5-2.4), F (0-1.4).

Write your scores to "output.json".

After writing, validate:
1. Read output.json back and confirm it's valid JSON
2. Check all required fields from score-schema.json are present
3. Verify the overall score matches the weighted average of dimension scores
4. Verify the grade matches the score range`;
}

export async function run(opts: RunOptions) {
  await runStage<EvalFile, FormScores>({
    name: "Stage 5: Score Forms",
    loadItems: allEvaluations,
    itemId: (ev) => ev.evalId,
    isComplete: (ev) => exists(`${SCORES_DIR}/${ev.evalId}.json`),
    emptyMessage: "No evaluations found. Run stage4 first.",
    run: async (ev, opts) => {
      const workDir = dataDir("_work", "stage5", ev.evalId);

      copyFileSync(ev.evalPath, join(workDir, "evaluation.md"));
      writeFileSync(
        join(workDir, "score-schema.json"),
        JSON.stringify(SCORE_SCHEMA, null, 2)
      );

      const scores = await runAgentJSON<FormScores>({
        workDir,
        prompt: makePrompt(ev.evalId),
        outputFile: "output.json",
        model: opts.model,
        instanceId: `stage5/${ev.evalId}`,
      });

      writeJson(`${SCORES_DIR}/${ev.evalId}.json`, scores);
      return scores;
    },
    formatResult: (_ev, scores) =>
      `${scores.scores.overall.grade} (${scores.scores.overall.score.toFixed(1)})`,
    summarize: (results) => {
      const grades: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, F: 0 };
      for (const r of results) {
        if (r.result) {
          const g = r.result.scores.overall.grade;
          grades[g] = (grades[g] || 0) + 1;
        }
      }
      const nonZero = Object.entries(grades).filter(([, n]) => n > 0);
      if (nonZero.length > 0) {
        console.log("\n  Grade distribution:");
        for (const [g, n] of nonZero) {
          console.log(`    ${g}: ${n}`);
        }
      }
    },
  }, opts);
}
