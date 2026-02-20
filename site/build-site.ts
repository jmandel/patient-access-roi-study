/**
 * Build the React site using Bun's bundler with HTML entrypoint.
 */
import { copyFileSync, mkdirSync, cpSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const SITE_DIR = import.meta.dir;
const DIST_DIR = join(SITE_DIR, "dist");

mkdirSync(DIST_DIR, { recursive: true });

// Bundle using HTML entrypoint — Bun rewrites script src automatically
const result = await Bun.build({
  entrypoints: [join(SITE_DIR, "index.html")],
  outdir: DIST_DIR,
  minify: true,
  splitting: false,
  target: "browser",
  naming: {
    asset: "[name]-[hash].[ext]",
    chunk: "[name]-[hash].[ext]",
    entry: "[name]-[hash].[ext]",
  },
});

if (!result.success) {
  console.error("Build failed:");
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

// Rename the hashed index HTML back to index.html for GH Pages
import { renameSync } from "fs";
const htmlOutput = result.outputs.find((o) => o.path.endsWith(".html"));
if (htmlOutput && !htmlOutput.path.endsWith("/index.html")) {
  renameSync(htmlOutput.path, join(DIST_DIR, "index.html"));
}

// Copy public data directory to dist
cpSync(join(SITE_DIR, "public", "data"), join(DIST_DIR, "data"), { recursive: true });

// Copy form PDFs to dist/forms/{org_id}/
const formsSource = join(SITE_DIR, "..", "data", "forms");
if (existsSync(formsSource)) {
  let pdfCount = 0;
  for (const orgId of readdirSync(formsSource)) {
    const orgDir = join(formsSource, orgId);
    for (const f of readdirSync(orgDir).filter((f) => f.endsWith(".pdf"))) {
      const destDir = join(DIST_DIR, "forms", orgId);
      mkdirSync(destDir, { recursive: true });
      copyFileSync(join(orgDir, f), join(destDir, f));
      pdfCount++;
    }
  }
  console.log(`   PDFs: ${pdfCount} copied to dist/forms/`);
}

const outputs = result.outputs.map((o) => `${o.path.split("/").pop()} (${(o.size / 1024).toFixed(1)}KB)`);
console.log(`✅ Site built → ${DIST_DIR}`);
console.log(`   Outputs: ${outputs.join(", ")}`);
