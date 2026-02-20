#!/usr/bin/env bun
import { parseArgs } from "util";
import type { RunOptions } from "./lib/types";
import { initLogs, closeLogs } from "./lib/log";

const DEFAULT_MODEL = "claude-opus-4.6-fast";

const { values, positionals } = parseArgs({
  args: Bun.argv.slice(2),
  allowPositionals: true,
  options: {
    limit: { type: "string", short: "n" },
    filter: { type: "string", short: "f" },
    parallel: { type: "string", short: "j", default: "2" },
    "dry-run": { type: "boolean", default: false },
    force: { type: "boolean", default: false },
    model: { type: "string", short: "m", default: DEFAULT_MODEL },
    analysis: { type: "string", short: "a" },
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help || positionals.length === 0) {
  printHelp();
  process.exit(0);
}

const opts: RunOptions = {
  limit: values.limit ? parseInt(values.limit) : undefined,
  filter: values.filter,
  parallel: parseInt(values.parallel!),
  dryRun: values["dry-run"]!,
  force: values.force!,
  model: values.model!,
};

const command = positionals[0];

// Initialize file-based logging for all stage commands (not status/help)
if (command !== "status") {
  initLogs();
}

try {
  switch (command) {
    case "stage1":
    case "sampling-frame":
      await (await import("./stages/stage1")).run(opts);
      break;
    case "stage2":
    case "discover-orgs":
      await (await import("./stages/stage2")).run(opts);
      break;
    case "stage3":
    case "retrieve-forms":
      await (await import("./stages/stage3")).run(opts);
      break;
    case "stage4":
    case "evaluate-forms":
      await (await import("./stages/stage4")).run(opts);
      break;
    case "stage5":
    case "synthesize-orgs":
      await (await import("./stages/synthesize")).run(opts);
      break;
    case "analyze":
      await (await import("./stages/analyze")).run({ ...opts, analysis: values.analysis });
      break;
    case "quantitative":
      await (await import("./stages/quantitative")).run();
      break;
    case "status":
      await (await import("./stages/status")).run();
      break;
    default:
      console.error(`Unknown command: ${command}`);
      printHelp();
      process.exit(1);
  }
} finally {
  closeLogs();
}

function printHelp() {
  console.log(`
ROI Form Quality Study Pipeline

Usage: bun run.ts <stage> [options]

Stages:
  stage1, sampling-frame    Generate organization categories
  stage2, discover-orgs     Find organizations per category
  stage3, retrieve-forms    Download and analyze ROI forms
  stage4, evaluate-forms    Qualitative evaluation of each form
  stage5, synthesize-orgs   Org-level synthesis with scores
  analyze -a <name>         Run qualitative analysis (best-practices, worst-barriers,
                            portal-landscape, retrieval-experience, surprising-findings,
                            document-quality, wrong-form, all)
  quantitative              Run quantitative analysis (deterministic, no LLM)
  status                    Show pipeline progress

Options:
  -n, --limit <N>           Process at most N items
  -f, --filter <pattern>    Filter items by ID (substring match)
  -j, --parallel <N>        Max parallel LLM calls (default: 2)
  -m, --model <model>       LLM model (default: ${DEFAULT_MODEL})
  -a, --analysis <name>     Analysis to run (for analyze command)
      --dry-run             Show what would run without executing
      --force               Re-run even if output already exists
  -h, --help                Show this help

Examples:
  bun run.ts stage1
  bun run.ts stage2 --limit 3
  bun run.ts stage3 --filter mayo-clinic
  bun run.ts stage3 -j 4 --force
  bun run.ts status
`);
}
