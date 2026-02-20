import type { RunOptions } from "./types";
import type { ParallelResult } from "./parallel";
import { runParallel } from "./parallel";
import { dataPath } from "./store";
import { banner, info, success, fail } from "./log";

export interface StageConfig<TItem, TResult> {
  /** Display name, e.g. "Stage 3: Retrieve Forms" */
  name: string;
  /** Load all candidate items from previous stage output */
  loadItems: () => TItem[];
  /** Unique ID for an item (used in filter matching and log prefixes) */
  itemId: (item: TItem) => string;
  /** Human-readable label for listing (defaults to itemId) */
  itemLabel?: (item: TItem) => string;
  /** Check whether this item already has output (skip unless --force) */
  isComplete: (item: TItem) => boolean;
  /** Banner details beyond the standard ones */
  extraBannerDetails?: Record<string, string | number>;
  /** Run one item — this is where the stage-specific logic lives */
  run: (item: TItem, opts: RunOptions) => Promise<TResult>;
  /** Format a successful result for the DONE log line (optional) */
  formatResult?: (item: TItem, result: TResult) => string;
  /** Print summary after all items complete */
  summarize?: (results: ParallelResult<TItem, TResult>[]) => void;
  /** Error message when loadItems returns empty */
  emptyMessage?: string;
}

/**
 * Generic stage runner. Handles the entire execution skeleton:
 * load → filter → limit → banner → dry-run → parallel execute → summary.
 */
export async function runStage<TItem, TResult>(
  config: StageConfig<TItem, TResult>,
  opts: RunOptions
): Promise<ParallelResult<TItem, TResult>[]> {
  const all = config.loadItems();
  if (all.length === 0) {
    fail(config.name, config.emptyMessage ?? "No items found. Run the previous stage first.");
    process.exit(1);
  }

  let work = all.filter((item) => {
    if (opts.filter && !config.itemId(item).includes(opts.filter)) return false;
    if (!opts.force && config.isComplete(item)) return false;
    return true;
  });
  if (opts.limit) work = work.slice(0, opts.limit);

  const skipped = all.length - work.length;
  banner(config.name, {
    Items: `${work.length} to process (${skipped} skipped)`,
    Parallel: opts.parallel,
    Model: opts.model,
    ...config.extraBannerDetails,
  });

  if (work.length === 0) {
    info(config.name, "Nothing to do.");
    return [];
  }

  for (const item of work) {
    const label = config.itemLabel?.(item) ?? config.itemId(item);
    console.log(`  • ${label}`);
  }
  console.log();

  if (opts.dryRun) {
    info(config.name, "Dry run — would process above items");
    return [];
  }

  let completed = 0;
  const total = work.length;

  const results = await runParallel({
    items: work,
    concurrency: opts.parallel,
    onStart: (item) =>
      info(config.name, `[${completed}/${total}] START  ${config.itemId(item)}`),
    onDone: (item, result) => {
      completed++;
      const extra = config.formatResult?.(item, result) ?? "";
      success(config.name, `[${completed}/${total}] DONE   ${config.itemId(item)}${extra ? " — " + extra : ""}`);
    },
    onError: (item, err) => {
      completed++;
      fail(config.name, `[${completed}/${total}] FAIL   ${config.itemId(item)} — ${err.message.slice(0, 100)}`);
    },
    fn: (item) => config.run(item, opts),
  });

  // Default summary
  const succeeded = results.filter((r) => !r.error).length;
  info(config.name, `Complete: ${succeeded}/${work.length} succeeded`);

  config.summarize?.(results);
  return results;
}
