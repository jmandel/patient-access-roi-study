import { createWriteStream, mkdirSync, type WriteStream } from "fs";
import { join } from "path";

const DATA_DIR = join(import.meta.dir, "..", "data");
const LOGS_DIR = join(DATA_DIR, "_logs");

let statusStream: WriteStream | null = null;
let detailStream: WriteStream | null = null;

function ts(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

/** Open log files. Call once at startup. */
export function initLogs() {
  mkdirSync(LOGS_DIR, { recursive: true });
  const statusPath = join(LOGS_DIR, "status.log");
  const detailPath = join(LOGS_DIR, "details.log");
  statusStream = createWriteStream(statusPath, { flags: "a" });
  detailStream = createWriteStream(detailPath, { flags: "a" });

  const cmd = process.argv.join(" ");
  const watchCmd = `tail -f ${detailPath}`;
  const sep = `\n${"═".repeat(72)}\n  Run started: ${new Date().toISOString()}\n  Command: ${cmd}\n  Watch details: ${watchCmd}\n${"═".repeat(72)}\n`;
  statusStream.write(sep);
  detailStream.write(sep);

  console.log(`📋 Status: tail -f ${statusPath}`);
  console.log(`📋 Details: ${watchCmd}\n`);
}

/** Flush and close log files. */
export function closeLogs() {
  statusStream?.end();
  detailStream?.end();
  statusStream = null;
  detailStream = null;
}

function writeStatus(line: string) {
  statusStream?.write(line + "\n");
}

export function info(stage: string, msg: string) {
  const line = `[${ts()}] ${stage} ${msg}`;
  console.log(line);
  writeStatus(line);
}

export function success(stage: string, msg: string) {
  const line = `[${ts()}] ✅ ${stage} ${msg}`;
  console.log(line);
  writeStatus(line);
}

export function fail(stage: string, msg: string) {
  const line = `[${ts()}] ❌ ${stage} ${msg}`;
  console.error(line);
  writeStatus(line);
}

export function warn(stage: string, msg: string) {
  const line = `[${ts()}] ⚠️  ${stage} ${msg}`;
  console.error(line);
  writeStatus(line);
}

export function banner(
  title: string,
  details: Record<string, string | number>
) {
  const line = "═".repeat(60);
  const lines = [`\n${line}`, `  ${title}`, line];
  for (const [k, v] of Object.entries(details)) {
    lines.push(`  ${k.padEnd(14)} ${v}`);
  }
  lines.push(`${line}\n`);
  const text = lines.join("\n");
  console.log(text);
  writeStatus(text);
}

/** Write a line to the aggregated details log, prefixed with instanceId. */
export function detailLog(instanceId: string, text: string) {
  if (!detailStream) return;
  for (const line of text.split("\n")) {
    detailStream.write(`[${ts()}] [${instanceId}] ${line}\n`);
  }
}

/**
 * Create a logger that writes to both a per-instance file and the aggregated details log.
 * Use for streaming copilot agent output.
 */
export function createInstanceLogger(instanceId: string, logPath: string) {
  mkdirSync(join(logPath, ".."), { recursive: true });
  const instanceStream = createWriteStream(logPath, { flags: "w" });
  let buffer = "";

  return {
    /** Write a chunk of text (may contain multiple lines). */
    write(text: string) {
      instanceStream.write(text);
      buffer += text;
      const lines = buffer.split("\n");
      // Keep the last (possibly incomplete) line in the buffer
      buffer = lines.pop()!;
      for (const line of lines) {
        detailLog(instanceId, line);
      }
    },
    close() {
      if (buffer) detailLog(instanceId, buffer);
      buffer = "";
      instanceStream.end();
    },
  };
}
