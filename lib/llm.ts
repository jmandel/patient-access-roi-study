import { existsSync, readFileSync, writeFileSync, symlinkSync, copyFileSync } from "fs";
import { join } from "path";
import { info, createInstanceLogger } from "./log";
import { studyDir, dataDir } from "./store";

const DEFAULT_MODEL = "claude-opus-4.6-fast";

export interface AgentOptions {
  /** Working directory — agent runs here and writes output files here */
  workDir: string;
  /** Prompt for the agent */
  prompt: string;
  /** Model override */
  model?: string;
  /** Unique ID for log prefixing (e.g. "stage3/mayo-clinic") */
  instanceId: string;
  /** Max retries on failure (default 1) */
  maxRetries?: number;
}

export interface StructuredAgentOptions<T> extends AgentOptions {
  /** Path (relative to workDir) where the agent writes JSON output */
  outputFile: string;
}

/** Symlink DESIGN.md into a working directory if not already present. */
export function ensureDesignDoc(workDir: string) {
  const src = studyDir("DESIGN.md");
  const dst = join(workDir, "DESIGN.md");
  if (existsSync(src) && !existsSync(dst)) {
    try {
      symlinkSync(src, dst);
    } catch {
      try { copyFileSync(src, dst); } catch {}
    }
  }
}

/**
 * Spawn a copilot agent, streaming its output to logs in real time.
 * Returns exit code.
 */
async function spawnCopilot(opts: AgentOptions): Promise<number> {
  const model = opts.model ?? DEFAULT_MODEL;
  const copilotLogDir = join(opts.workDir, "copilot-logs");
  const promptPath = join(opts.workDir, "prompt.txt");
  writeFileSync(promptPath, opts.prompt);
  const args = ["copilot", "-p", "", "--model", model, "--yolo",
    "--log-dir", copilotLogDir, "--log-level", "debug"];
  const logPath = join(opts.workDir, "agent-log.txt");
  const logger = createInstanceLogger(opts.instanceId, logPath);

  logger.write(`$ cd ${opts.workDir}\n$ cat prompt.txt | ${args.join(" ")}\n\n`);

  const promptFile = Bun.file(promptPath);
  const proc = Bun.spawn(args, {
    cwd: opts.workDir,
    stdin: promptFile,
    stdout: "pipe",
    stderr: "pipe",
  });

  // Stream both stdout and stderr in real time
  async function streamPipe(stream: ReadableStream<Uint8Array>, prefix?: string) {
    const decoder = new TextDecoder();
    const reader = stream.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        logger.write(decoder.decode(value, { stream: true }));
      }
    } finally {
      reader.releaseLock();
    }
  }

  await Promise.all([
    streamPipe(proc.stdout as ReadableStream<Uint8Array>),
    streamPipe(proc.stderr as ReadableStream<Uint8Array>),
  ]);

  const exitCode = await proc.exited;

  logger.close();
  return exitCode;
}

/**
 * Run a copilot agent that produces freeform output (files, markdown, etc.).
 * Agent gets DESIGN.md, full autonomy, and its output streams to logs.
 * Throws on non-zero exit after retries.
 */
export async function runAgentFreeform(opts: AgentOptions): Promise<void> {
  ensureDesignDoc(opts.workDir);
  const retries = opts.maxRetries ?? 1;

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    const exitCode = await spawnCopilot(opts);
    if (exitCode === 0) return;

    if (attempt <= retries) {
      info("LLM", `${opts.instanceId} attempt ${attempt} failed (exit ${exitCode}), retrying...`);
    } else {
      throw new Error(`Agent ${opts.instanceId} failed (exit ${exitCode})`);
    }
  }
}

/**
 * Run a copilot agent that produces a structured JSON output file.
 * Returns the parsed JSON after the agent exits successfully.
 */
export async function runAgentJSON<T>(opts: StructuredAgentOptions<T>): Promise<T> {
  ensureDesignDoc(opts.workDir);
  const retries = opts.maxRetries ?? 1;
  const outputPath = join(opts.workDir, opts.outputFile);

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    const exitCode = await spawnCopilot(opts);

    if (exitCode !== 0) {
      if (attempt <= retries) {
        info("LLM", `${opts.instanceId} attempt ${attempt} failed (exit ${exitCode}), retrying...`);
        continue;
      }
      throw new Error(`Agent ${opts.instanceId} failed (exit ${exitCode})`);
    }

    if (!existsSync(outputPath)) {
      if (attempt <= retries) {
        info("LLM", `${opts.instanceId} attempt ${attempt}: no ${opts.outputFile}, retrying...`);
        continue;
      }
      throw new Error(`Agent ${opts.instanceId} completed but did not produce ${opts.outputFile}`);
    }

    return JSON.parse(readFileSync(outputPath, "utf-8")) as T;
  }

  throw new Error("unreachable");
}
