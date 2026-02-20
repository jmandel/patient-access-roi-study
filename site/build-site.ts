/**
 * Build the React site using Bun's bundler.
 */
import { copyFileSync, mkdirSync, cpSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const SITE_DIR = import.meta.dir;
const DIST_DIR = join(SITE_DIR, "dist");

mkdirSync(DIST_DIR, { recursive: true });

// Bundle React app
const result = await Bun.build({
  entrypoints: [join(SITE_DIR, "src", "index.tsx")],
  outdir: DIST_DIR,
  minify: true,
  splitting: false,
  target: "browser",
  format: "esm",
  naming: "[name].[hash].[ext]",
});

if (!result.success) {
  console.error("Build failed:");
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

// Get the output JS filename
const jsFile = result.outputs[0].path.split("/").pop()!;

// Copy index.html with injected script tag
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ROI Form Study — How Easy Is It to Request Your Health Records?</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1a1a2e; background: #fafbfc; line-height: 1.6; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/${jsFile}"></script>
</body>
</html>`;

Bun.write(join(DIST_DIR, "index.html"), html);

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

console.log(`✅ Site built → ${DIST_DIR}`);
console.log(`   JS: ${jsFile} (${(result.outputs[0].size / 1024).toFixed(1)}KB)`);
