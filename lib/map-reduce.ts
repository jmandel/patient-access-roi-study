/**
 * Map-reduce runner for qualitative analysis over large corpora.
 *
 * Pattern:
 * 1. Gather all items (e.g., org evaluations, abstractions, notes)
 * 2. Shuffle and split into randomized batches
 * 3. MAP: Run an LLM agent on each batch, producing a batch summary
 * 4. REDUCE: Run an LLM agent on all batch summaries, producing the final analysis
 *
 * Both map and reduce agents get DESIGN.md and ANALYSIS-PLAN.md for context.
 * The map agent works in a directory containing the batch's source files.
 * The reduce agent works in a directory containing all batch summaries.
 */

import { mkdirSync, copyFileSync, writeFileSync, readFileSync, readdirSync, existsSync, symlinkSync, rmSync } from "fs";
import { join } from "path";
import { runAgentFreeform } from "./llm";
import { dataDir, dataPath, studyDir } from "./store";
import { runParallel } from "./parallel";
import { banner, info, success, fail } from "./log";
import type { RunOptions } from "./types";

export interface MapReduceConfig {
  /** Analysis name, e.g. "best-practices" */
  name: string;
  /** Human-readable title for banners */
  title: string;
  /** Gather all source file paths to be distributed across batches */
  gatherInputs: () => string[];
  /** Max estimated tokens of batch content per map batch (default 100_000) */
  batchTokenBudget?: number;
  /** Prompt for the map agent. Gets the batch directory as working dir. */
  mapPrompt: string;
  /** Prompt for the reduce agent. Gets all batch summaries in working dir. */
  reducePrompt: string;
  /**
   * Additional files to symlink into each map agent's working directory.
   * e.g., the abstraction schema, analysis plan, etc.
   */
  extraFiles?: string[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function symlinkOrCopy(src: string, dst: string) {
  if (existsSync(dst)) return;
  try {
    symlinkSync(src, dst);
  } catch {
    try { copyFileSync(src, dst); } catch {}
  }
}

interface FileContent {
  name: string;
  content: string;
  tokens: number;
}

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

function inlineFiles(files: FileContent[]): string {
  return files.map(f => `<file name="${f.name}">\n${f.content}\n</file>`).join("\n\n");
}

/**
 * Run a map-reduce analysis. Returns the path to the final output.
 */
export async function runMapReduce(
  config: MapReduceConfig,
  opts: RunOptions
): Promise<string> {
  const analysisDir = dataDir("analysis", config.name);
  const mapDir = join(analysisDir, "map");
  const reduceDir = join(analysisDir, "reduce");
  mkdirSync(mapDir, { recursive: true });
  mkdirSync(reduceDir, { recursive: true });

  // Check if final output already exists
  const finalOutput = join(reduceDir, "output.md");
  if (existsSync(finalOutput) && !opts.force) {
    info(config.title, "Already complete. Use --force to re-run.");
    return finalOutput;
  }

  // Clean old map/reduce output when forcing
  if (opts.force) {
    rmSync(mapDir, { recursive: true, force: true });
    rmSync(reduceDir, { recursive: true, force: true });
    mkdirSync(mapDir, { recursive: true });
    mkdirSync(reduceDir, { recursive: true });
  }

  // Gather inputs, read contents, estimate tokens
  const allInputPaths = config.gatherInputs();
  const allFiles: FileContent[] = allInputPaths.map(f => {
    const content = readFileSync(f, "utf-8");
    return { name: f.split("/").pop()!, content, tokens: estimateTokens(content) };
  });
  const shuffled = shuffle(allFiles);

  // Batch by token budget
  const budget = config.batchTokenBudget ?? 100_000;
  const batches: FileContent[][] = [];
  let currentBatch: FileContent[] = [];
  let currentTokens = 0;
  for (const item of shuffled) {
    if (currentBatch.length > 0 && currentTokens + item.tokens > budget) {
      batches.push(currentBatch);
      currentBatch = [item];
      currentTokens = item.tokens;
    } else {
      currentBatch.push(item);
      currentTokens += item.tokens;
    }
  }
  if (currentBatch.length > 0) batches.push(currentBatch);

  banner(config.title, {
    Inputs: allFiles.length,
    Batches: batches.length,
    "Token budget": budget,
    Model: opts.model,
  });

  if (opts.dryRun) {
    info(config.title, `Dry run — would process ${batches.length} batches then reduce`);
    return finalOutput;
  }

  // === MAP PHASE ===
  info(config.title, `MAP: Processing ${batches.length} batches...`);

  const contextFiles = [
    studyDir("DESIGN.md"),
    studyDir("ANALYSIS-PLAN.md"),
    ...(config.extraFiles ?? []),
  ].filter(existsSync);

  const MAX_MAP_ROUNDS = 5;
  const RETRY_DELAY_MS = 60_000;

  async function runBatch(batch: FileContent[], index: number) {
    const batchDir = join(mapDir, `batch-${index}`);
    const summaryPath = join(batchDir, "output.md");

    if (existsSync(summaryPath)) return;

    mkdirSync(batchDir, { recursive: true });

    // Symlink context + extra files for agent reference
    for (const f of contextFiles) {
      symlinkOrCopy(f, join(batchDir, f.split("/").pop()!));
    }

    // Write manifest
    writeFileSync(
      join(batchDir, "manifest.json"),
      JSON.stringify(batch.map((f) => f.name), null, 2)
    );

    // Build prompt with inline batch content
    const fullPrompt = `${config.mapPrompt}\n\n<batch-inputs>\n${inlineFiles(batch)}\n</batch-inputs>`;

    await runAgentFreeform({
      workDir: batchDir,
      prompt: fullPrompt,
      model: opts.model,
      instanceId: `${config.name}/map/batch-${index}`,
    });

    if (!existsSync(summaryPath)) {
      throw new Error(`Map agent did not produce output.md`);
    }
  }

  let pendingIndices = batches.map((_, i) => i);

  for (let round = 1; round <= MAX_MAP_ROUNDS && pendingIndices.length > 0; round++) {
    if (round > 1) {
      info(config.title, `MAP retry round ${round}: ${pendingIndices.length} batches remaining, waiting ${RETRY_DELAY_MS / 1000}s...`);
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
    }

    let mapCompleted = 0;
    const failedThisRound: number[] = [];

    await runParallel({
      items: pendingIndices.map(i => ({ batch: batches[i], index: i })),
      concurrency: opts.parallel,
      onStart: ({ index }) =>
        info(config.title, `[${mapCompleted}/${pendingIndices.length}] MAP START batch-${index}`),
      onDone: ({ index }) => {
        mapCompleted++;
        success(config.title, `[${mapCompleted}/${pendingIndices.length}] MAP DONE  batch-${index}`);
      },
      onError: ({ index }, err) => {
        mapCompleted++;
        failedThisRound.push(index);
        fail(config.title, `[${mapCompleted}/${pendingIndices.length}] MAP FAIL  batch-${index} — ${err.message.slice(0, 100)}`);
      },
      fn: async ({ batch, index }) => runBatch(batch, index),
    });

    pendingIndices = failedThisRound;
  }

  if (pendingIndices.length > 0) {
    fail(config.title, `${pendingIndices.length} batches failed after ${MAX_MAP_ROUNDS} rounds`);
    throw new Error(`Map phase incomplete: batches ${pendingIndices.join(",")} never succeeded`);
  }

  // Collect batch summaries (all batches succeeded at this point)
  const batchSummaries = batches.map((_, i) => join(mapDir, `batch-${i}`, "output.md"));

  info(config.title, `MAP complete: all ${batchSummaries.length} batches succeeded`);

  // === REDUCE PHASE ===
  info(config.title, "REDUCE: Synthesizing batch summaries...");

  mkdirSync(reduceDir, { recursive: true });

  // Symlink context files into reduce dir
  for (const f of contextFiles) {
    symlinkOrCopy(f, join(reduceDir, f.split("/").pop()!));
  }

  // Inline batch summaries into reduce prompt
  const summaryContents: FileContent[] = batchSummaries.map((p, i) => {
    const content = readFileSync(p, "utf-8");
    return { name: `batch-${i}.md`, content, tokens: estimateTokens(content) };
  });
  const fullReducePrompt = `${config.reducePrompt}\n\n<batch-summaries>\n${inlineFiles(summaryContents)}\n</batch-summaries>`;

  await runAgentFreeform({
    workDir: reduceDir,
    prompt: fullReducePrompt,
    model: opts.model,
    instanceId: `${config.name}/reduce`,
  });

  if (!existsSync(finalOutput)) {
    throw new Error("Reduce agent did not produce output.md");
  }

  success(config.title, `Complete → ${finalOutput}`);
  return finalOutput;
}
