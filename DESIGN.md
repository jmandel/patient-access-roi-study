# ROI Form Quality Study: How Well Do Healthcare Providers Serve Patients Online?

## Overview

This study evaluates how well U.S. healthcare providers make their Release of Information (ROI) / Authorization forms available to patients online. We use an LLM-powered pipeline to systematically discover organizations, retrieve their forms, and score them against a structured rubric — producing a dataset that quantifies the current state of patient access to these critical documents.

### Research Question

> How common is it for healthcare providers to publish well-designed, digitally accessible release-of-information forms — and how does form quality vary by organization size, type, and geography?

### Motivation

HIPAA's Right of Access (45 CFR § 164.524) requires that patients be able to request their health information. In practice, the first step is often filling out a provider-specific authorization form. If that form is hard to find, impossible to fill electronically, or poorly designed, it creates an unnecessary barrier. This study quantifies how widespread these barriers are.

---

## Design Philosophy

### Agent autonomy over output parsing

Each pipeline stage invokes an LLM agent (via `copilot -p --yolo`) in a dedicated working directory. The agent gets full context — it can read DESIGN.md to understand where its work fits, read input files staged by the orchestrator, and use tools freely (web search, bash, file I/O). It writes its outputs to files in that directory rather than to stdout. The orchestrator never parses LLM text for structure; it reads files the agent produced.

This matters because:
- Agents debug their own work. When told "write output.json and validate it," the agent can read the file back, catch errors, and fix them — all within a single invocation.
- Context improves quality. An agent that reads the full study design makes better decisions than one given a narrow, decontextualized prompt.
- Reliability over cleverness. File existence is the completion signal, not regex extraction from a stream.

### Defer structure until it's needed

Not every stage needs structured output. The pipeline keeps data freeform until a downstream consumer genuinely requires structure for programmatic use:

- **Stages 1-2** produce structured JSON because the orchestrator must iterate over categories and organizations to dispatch subsequent work.
- **Stage 3** produces files (downloaded PDFs) and freeform notes (notes.md describing the search process). Structured PDF metadata is extracted deterministically by our code, not by the LLM.
- **Stage 4** produces freeform prose (evaluation.md) — a qualitative assessment that's meant to be read and reasoned about, not parsed. One evaluation per form document.
- **Stage 5** is where structure arrives: the agent reads all of an org's evaluations and retrieval notes, then produces both a freeform narrative (synthesis.md) and a fixed-schema JSON score object (scores.json), validated against a TypeScript schema before the agent exits. This is the quantification boundary. The unit of analysis is the **organization**, not the form — the agent reasons about which form best serves a patient and scores based on the best available pathway.
- **Analysis** aggregates structured scores into statistics and uses map-reduce over synthesis files to produce qualitative narrative findings.

This avoids premature structuring that constrains the LLM's reasoning or introduces fragile parsing. When we do need structure (Stage 5), we provide a real schema and ask the agent to validate against it.

### Resumable, filterable, parallelizable

Every stage supports:
- **Resumption**: file existence = done. Re-running a stage skips completed items.
- **Filtering**: `--filter <pattern>` to run a subset (by org ID, category ID, etc.).
- **Parallelism**: `--parallel N` controls concurrent agent invocations.
- **Force**: `--force` re-runs even if output exists.
- **Dry run**: `--dry-run` shows what would execute without doing it.

This lets you run a stage on one item to check quality, then expand to the full set. You can re-run a single failed item without redoing everything. You can go back to an earlier stage, re-run it with `--force` for a subset, and the downstream stages will pick up the new data on their next run.

### Don't lead the witness

Prompts should tell the agent **what to produce** (output format, files to write, validation criteria) without telling it **what to find or conclude**. The distinction:

- ✅ **Structural guidance**: "Write your evaluation covering findability, technical accessibility, content design, patient-centeredness, and compliance." — Tells the agent what dimensions to address.
- ❌ **Substantive priming**: "Check for unreasonable barriers such as notarization requirements, in-person submission, upfront fee disclosure, and unreasonable expiry." — Tells the agent what specific things to look for, anchoring it on those items.
- ❌ **Example-driven anchoring**: "Values should include: Large health system, Regional system, Community hospital..." — The agent will reproduce these verbatim rather than reasoning about what categories actually matter.

Why this matters:
- **Anchoring bias**: When you list specific examples, the LLM treats them as the answer and fills in around them rather than thinking independently.
- **Tunnel vision**: Enumerating what to look for causes the agent to confirm/deny each item rather than observe what's actually there.
- **Reproducibility**: If findings are driven by the prompt rather than the data, the study measures prompt design, not form quality.

Rules for prompt design in this pipeline:
1. Describe the **goal** and **output format**, not the expected content.
2. Don't provide example values for taxonomies — let the agent create its own based on domain knowledge.
3. Use open-ended questions ("How well does this document serve patients?") over checklists ("Does it offer electronic delivery? Does it reference HIPAA?").
4. When evaluation criteria are needed, describe the **dimension** not the **indicators**. The agent should discover the indicators from the data.

---

## Pipeline Architecture

The study runs as a multi-stage LLM pipeline. Each stage runs agents in working directories, reads previous-stage outputs, and writes its own.

```
Stage 1: Define Sampling Frame
    ↓ org_categories.json (structured — orchestrator iterates)
Stage 2: Discover Organizations
    ↓ organizations/{category}.json (structured — orchestrator iterates)
Stage 3: Retrieve Forms
    ↓ forms/{org}/ — PDFs + notes.md (freeform) + *-metadata.json (deterministic)
Stage 4: Evaluate Forms
    ↓ evaluations/{org}--{form}.md (freeform prose, one per form)
Stage 5: Synthesize Organizations
    ↓ synthesis/{org}/synthesis.md (freeform narrative)
    ↓ synthesis/{org}/scores.json (structured — validated against schema)
Analysis: Qualitative (map-reduce over synthesis files)
    ↓ analysis/{name}/reduce/output.md (narrative findings)
Analysis: Quantitative (deterministic scripts over scores.json)
    ↓ statistics, charts, report
```

---

## Stage 1: Define Sampling Frame

### Purpose
Produce a structured set of organization categories that ensures diverse, representative coverage across the U.S. healthcare landscape.

### Stratification Axes

| Axis | Values |
|------|--------|
| **Organization size** | Large health system (10+ hospitals), Regional system (2-9 hospitals), Community hospital (single), Physician group (multi-specialty), Small practice (1-5 providers), FQHC, Critical access hospital |
| **Geography** | Northeast, Southeast, Midwest, Southwest, West, Rural, Urban, Suburban |
| **Ownership type** | Non-profit, For-profit, Government/public, Academic medical center, VA/military |

Note: EHR vendor is deliberately excluded as a stratification axis. ROI forms are typically managed by Health Information Management (HIM) departments and legal/compliance teams, not by EHR vendors. The form's quality is driven by organizational culture, resources, and state regulations — not by which software the provider uses for clinical care.

### Output: `org_categories.json`

```json
[
  {
    "category_id": "large-nonprofit-midwest",
    "size": "Large health system",
    "region": "Midwest",
    "ownership": "Non-profit",
    "target_count": 3,
    "description": "Large non-profit health systems in the Midwest"
  }
]
```

### Sampling Strategy

Not every cell in the full cross-product needs to be filled (many combinations don't exist in practice). The prompt should:

1. Enumerate realistic combinations (e.g., Critical Access hospitals are mostly rural; Academic medical centers are mostly non-profit)
2. Target 5-10 organizations per major size category
3. Ensure geographic spread within each category
4. Aim for ~200-300 total organizations across all categories
5. Over-sample categories where we expect more variance (e.g., small practices may vary more than large systems)

### Prompt Template

```
You are designing a sampling frame for a study of healthcare provider ROI
(Release of Information) forms. Your goal is to define organization categories
that will give us broad, representative coverage of the U.S. healthcare
landscape.

Define categories by crossing these axes where realistic combinations exist:
- Organization size: [list]
- Geography: [list]
- Ownership type: [list]

For each category, specify how many organizations we should try to find
(target_count). Prioritize diversity. Skip combinations that rarely exist
in practice. Aim for ~200-300 total organizations.

Output as JSON array of category objects.
```

---

## Stage 2: Discover Organizations

### Purpose
For each category from Stage 1, identify real organizations that match the description — with enough metadata to find their forms.

### Approach

For each category, the LLM uses web search to find matching organizations. The prompt should guide it to:

1. **Search for organizations matching the category description** using queries like:
   - `"[size] [region] hospital"` or `"[size] health system [state]"`
   - CHNA (Community Health Needs Assessment) reports that list hospital characteristics
   - CMS Hospital Compare data references
   - State hospital association directories

2. **Verify each candidate** by confirming:
   - The organization exists and is currently operating
   - It matches the stated size/type
   - It has a website with a patient-facing section

3. **Collect metadata** for each organization

### Output: `organizations.json`

```json
[
  {
    "org_id": "mayo-clinic",
    "name": "Mayo Clinic",
    "category_id": "large-nonprofit-midwest",
    "size": "Large health system",
    "region": "Midwest",
    "state": "MN",
    "city": "Rochester",
    "ownership": "Non-profit",
    "website": "https://www.mayoclinic.org",
    "bed_count": 2059,
    "notes": "Academic medical center, multi-state system"
  }
]
```

### Prompt Template (per category)

```
Find {target_count} healthcare organizations matching this description:
- Size: {size}
- Region: {region}
- Ownership: {ownership}

For each organization, verify:
1. It currently operates and has a patient-facing website
2. It matches the size and ownership type described

Use web search to find and verify candidates. Provide structured output
with the fields listed below.

Output as JSON array.
```

---

## Stage 3: Retrieve Forms

### Purpose
For each organization, attempt to find and download their ROI / authorization / medical records release form(s). Document the retrieval process and any difficulties.

### Approach

For each organization, the LLM should:

1. **Search for the form** using multiple strategies (mirroring our SKILL.md approach):
   - Web search: `"[org name]" "authorization" "release" "health information" filetype:pdf`
   - Web search: `"[org name]" "medical records" "release form" filetype:pdf`
   - Web search: `site:[org-domain] authorization release`
   - Navigate the org's website → Patient Resources / Medical Records / HIM
   - Check parent health system's website if applicable

2. **Download each candidate form** using curl with a realistic user agent

3. **Classify what was found**:
   - Correct ROI/authorization form
   - Wrong document type (privacy notice, patient rights, etc.)
   - Form for third-party release (not patient access)
   - Generic state/federal form (not org-specific)
   - No form found online

4. **Extract technical metadata** from each downloaded PDF:
   - `pdftotext` output (full text or empty = image-only)
   - `pdffonts` output (embedded fonts)
   - `pdfimages -list` output (embedded images)
   - `list-form-fields.ts` output (fillable field count and names)
   - Page count
   - File size

### Output: `forms/{org_id}/` directory per organization

```
forms/mayo-clinic/
├── retrieval.json          # Search process and results
├── form-1.pdf              # Downloaded form(s)
├── form-1-metadata.json    # Technical metadata
├── form-2.pdf              # (if multiple forms found)
└── form-2-metadata.json
```

#### `retrieval.json`
```json
{
  "org_id": "mayo-clinic",
  "search_queries": [
    { "query": "...", "results_found": 3 }
  ],
  "forms_found": [
    {
      "url": "https://...",
      "filename": "form-1.pdf",
      "download_success": true,
      "document_type": "roi_form",
      "is_patient_access_specific": false,
      "notes": "General ROI form, not patient-access specific"
    }
  ],
  "no_form_found": false,
  "retrieval_difficulty": "easy|moderate|hard|impossible",
  "notes": "Form was 3 clicks deep under Patient Resources > Medical Records"
}
```

#### `form-1-metadata.json`
```json
{
  "filename": "form-1.pdf",
  "file_size_bytes": 245000,
  "page_count": 2,
  "has_text_layer": true,
  "text_preview": "AUTHORIZATION FOR RELEASE OF HEALTH INFORMATION...",
  "full_text_chars": 3200,
  "fillable_field_count": 0,
  "fillable_field_names": [],
  "font_count": 3,
  "embedded_image_count": 0,
  "is_image_only_scan": false,
  "pdf_version": "1.4"
}
```

### Prompt Template (per organization)

```
Find the Release of Information / Authorization for Medical Records form
for: {org_name} ({website})

Search strategy:
1. Try these web searches (adapt the org name as needed):
   - "{org_name}" "authorization" "release" "health information" filetype:pdf
   - "{org_name}" "medical records" "release form" filetype:pdf
   - site:{domain} authorization release medical records
2. Navigate the website looking for Patient Resources, Medical Records, or HIM pages
3. Check the parent health system's website if this is part of a larger system

For each form you find:
- Download it with: curl -sL -o form.pdf -A "Mozilla/5.0 ..." "<URL>"
- Run: pdftotext form.pdf - | head -80
- Run: pdfimages -list form.pdf
- Run: bun list-form-fields.ts form.pdf
- Classify the document type (ROI form, privacy notice, patient rights, etc.)

Report what you found, including any difficulties (broken links, bot blocking,
forms behind patient portals, etc.).
```

---

## Stage 4: Evaluate Forms (Qualitative)

### Purpose
For each successfully retrieved form, produce a detailed written evaluation against the quality rubric. This is the "reasoning" step — the LLM reads the form content and writes a thorough assessment before we ask it to boil things down to scores.

### Evaluation Dimensions

#### A. Findability
- How many clicks/searches to locate the form?
- Is it linked from obvious places (Medical Records page, Patient Resources)?
- Is the URL/filename descriptive?
- Does the page clearly explain what the form is for?

#### B. Technical Accessibility
- **Text layer**: Is there extractable text, or is it an image-only scan?
- **Fillable fields**: Are there interactive form fields? How complete are they?
- **File format**: PDF version, file size relative to content
- **Digital-first design**: Was this clearly designed as a digital document, or is it a scan of a paper form?

#### C. Content Design
- **Length**: How many pages? Is the length proportionate to what's needed?
- **Clarity**: Is the language plain and understandable, or is it dense legalese?
- **Organization**: Are sections logically ordered? Is there clear visual hierarchy?
- **Whitespace and layout**: Is it visually clean or cramped and busy?
- **Font size**: Is text readable (10pt+) or tiny?

#### D. Patient-Centeredness
- **Patient access vs. third-party release**: Is there a form specifically for patients requesting their own records, or only a general release-to-third-party form?
- **Scope options**: Can the patient request specific record types, date ranges?
- **Format options**: Does the form offer electronic delivery?
- **Right of Access language**: Does the form reference HIPAA § 164.524 or patient rights?
- **EHI Export awareness**: Any mention of electronic health information export or bulk data?

#### E. Compliance Signals
- **Unreasonable barriers**: Does the form impose requirements beyond what HIPAA allows (e.g., notarization, in-person submission only, fees disclosed upfront)?
- **Expiration/auto-revocation**: Does the authorization expire in an unreasonably short time?
- **Broad consent bundling**: Does it try to bundle records release with other authorizations?

### Output: `evaluations/{org_id}.md`

A 500-1000 word written evaluation covering each dimension, with specific observations and quotes from the form content.

### Prompt Template

```
You are evaluating a healthcare provider's Release of Information form
for patient accessibility and quality.

Organization: {org_name}
Form URL: {url}
Form text (extracted via pdftotext):
---
{full_text}
---

Technical metadata:
- Pages: {page_count}
- Fillable fields: {field_count} ({field_names})
- Has text layer: {has_text}
- Image-only scan: {is_scan}
- File size: {file_size}

Write a detailed evaluation covering these dimensions:

A. FINDABILITY: How easy was this form to locate online? (Use retrieval notes.)
B. TECHNICAL ACCESSIBILITY: Text layer, fillable fields, digital-first design.
C. CONTENT DESIGN: Length, clarity, organization, layout, readability.
D. PATIENT-CENTEREDNESS: Patient access focus, scope options, format options.
E. COMPLIANCE SIGNALS: Any unreasonable barriers or concerning requirements.

Be specific — quote form text, note exact field counts, describe layout issues.
This evaluation will be used to generate quantitative scores, so include enough
detail to justify scoring decisions.
```

---

## Stage 5: Synthesize Organizations

### Purpose
For each organization, read all per-form evaluations from Stage 4 and the retrieval notes from Stage 3, then produce a single org-level synthesis: both a qualitative narrative and structured scores. This is where the unit of analysis shifts from individual forms to the **organization** — the agent reasons about which form(s) matter most for a patient requesting their own records and assesses the org based on the best available pathway.

### Why combine evaluation and scoring?

The original design had separate "evaluate" and "score" stages. In practice, the scoring agent needs to reason about which of an org's multiple forms is most relevant, whether the org differentiates patient access from third-party release, and how the retrieval experience affects the overall assessment. This reasoning is the evaluation — splitting it from scoring created redundancy. The synthesize stage does both in one pass: read everything, reason about it, produce narrative + structured output.

### Key assessment dimensions

**A. Access Pathway Differentiation**: Does this org offer a clear route for a patient requesting their OWN records, or does it funnel patients through a generic HIPAA authorization form designed for third-party release?

**B. Form Document Quality & Hygiene**: For the best available patient-facing form — is it fillable? How many fields? Is the layout clean? Is the language plain? Are there unnecessary barriers?

### Scoring baseline

The industry norm is fax or mail submission. Fax counts as adequate electronic submission and should not be penalized. Only penalize if the ONLY option is in-person delivery or physical mail (no fax, no email, no portal).

### Rubric

Each dimension is scored 1-5:

| Score | Label | Meaning |
|-------|-------|---------|
| 5 | Excellent | Best-practice example; other orgs should emulate this |
| 4 | Good | Meets expectations with minor issues |
| 3 | Adequate | Functional but has notable shortcomings |
| 2 | Poor | Significant barriers to patient use |
| 1 | Very Poor | Effectively unusable or inaccessible |
| 0 | N/A | Form not found or not retrievable |

### Overall Score Calculation

`overall.score = weighted average of dimension scores`

Weights:
- Findability: 15%
- Technical Accessibility: 25%
- Content Design: 15%
- Patient-Centeredness: 25%
- Compliance Signals: 20%

Grade mapping: A (4.5-5.0), B (3.5-4.4), C (2.5-3.4), D (1.5-2.4), F (<1.5)

### Output: `synthesis/{org_id}/`

```
synthesis/mayo-clinic/
├── synthesis.md       # 400-800 word org-level narrative
└── scores.json        # Structured data conforming to OrgSynthesis interface
```

The `scores.json` schema is defined in `lib/synthesis-schema.ts` and includes:
- `access_pathway`: pathway type, whether it differentiates self vs. third-party, submission methods
- `form_quality`: fillable fields, field count, page count, instructions, layout, language, multilingual
- `barriers`: notarization, fees, in-person requirements, red flags, bright spots
- `scores`: dimensional scores (1-5) with rationale, plus weighted overall with grade

---

## Analysis

### Purpose
Aggregate synthesis outputs across all organizations to produce qualitative narrative findings and quantitative statistics. See ANALYSIS-PLAN.md for the full analysis design.

### Qualitative analyses (map-reduce)

Each qualitative analysis uses a two-phase pattern:
1. **Map**: LLM agent processes a randomized batch of ~15 org synthesis files, producing a 500-1000 word summary
2. **Reduce**: LLM agent reads all batch summaries and produces a cohesive 1500-2500 word analysis

Seven analyses are implemented:
1. **Best Practices** — standout positive examples worth emulating
2. **Worst Barriers** — most significant obstacles to patient access
3. **Portal Landscape** — portal vs. PDF trends and vendor landscape
4. **Retrieval Experience** — what it's like to find forms online (uses raw Stage 3 notes)
5. **Surprising Findings** — unexpected patterns and outliers
6. **Document Quality** — forms as technical artifacts (fillable, layout, design)
7. **Wrong Form Problem** — orgs giving patients generic auth forms instead of patient access forms

### Quantitative analyses

Deterministic scripts operating on `synthesis/*/scores.json` joined with org metadata from `organizations/*.json`. Includes distribution analysis, univariate predictors by org category axes, multivariate regression, and outlier identification. See ANALYSIS-PLAN.md for details.

---

## Implementation Plan

### Directory Structure

```
scripts/roi-form-study/
├── DESIGN.md                    # This document
├── ANALYSIS-PLAN.md             # Detailed analysis design
├── run.ts                       # Orchestrator (bun run.ts <stage>)
├── stages/
│   ├── stage1.ts                # Stage 1: sampling frame
│   ├── stage2.ts                # Stage 2: discover orgs
│   ├── stage3.ts                # Stage 3: retrieve forms
│   ├── stage4.ts                # Stage 4: evaluate forms
│   ├── synthesize.ts            # Stage 5: org-level synthesis + scoring
│   ├── analyze.ts               # Analysis: map-reduce qualitative
│   └── status.ts                # Pipeline status display
├── lib/
│   ├── synthesis-schema.ts      # TypeScript types for synthesis output
│   ├── stage-runner.ts          # Generic stage execution framework
│   ├── map-reduce.ts            # Map-reduce runner for analysis
│   ├── llm.ts                   # LLM agent invocation
│   └── store.ts                 # Data directory helpers
└── data/
    ├── org_categories.json      # Stage 1 output
    ├── organizations/           # Stage 2 output (per-category JSON)
    ├── forms/                   # Stage 3 output (per-org subdirectories)
    ├── evaluations/             # Stage 4 output (per-form markdown)
    ├── synthesis/               # Stage 5 output (per-org synthesis.md + scores.json)
    ├── analysis/                # Analysis output (per-analysis map + reduce)
    ├── org-lookup.json          # Generated org metadata lookup for analysis
    └── _logs/                   # Status and detail logs
```

### Orchestration

The pipeline orchestrator (`run.ts`) supports:

1. Running individual stages: `bun run.ts stage4`
2. Parallelism within stages: `--parallel N`
3. Resumption — file existence = done, re-running skips completed items
4. Filtering: `--filter <pattern>` for substring match on item IDs
5. Limiting: `--limit N` to process at most N items
6. Force re-run: `--force` to redo even if output exists
7. Dry run: `--dry-run` to preview what would execute

### Cost & Scale Estimates

For ~200 organizations with ~470 forms:
- Stage 1: 1 LLM call (sampling frame design)
- Stage 2: ~45 LLM calls (one per category)
- Stage 3: ~200 LLM calls (one per org, with web search and browser tools)
- Stage 4: ~470 LLM calls (one per form document)
- Stage 5: ~200 LLM calls (one per org, reading all form evaluations)
- Analysis: ~100 LLM calls (map batches + reduce, across 7 analyses)

Total: ~1000 LLM calls. Stages 3-4 are the most expensive due to tool use and long context.

### Validation & Quality Control

- **Spot checks**: Manually verify synthesis outputs against the actual forms
- **Schema validation**: Synthesis scores.json is validated against the TypeScript schema (`lib/synthesis-schema.ts`)
- **Outlier review**: Flag scores that are surprising given the org's category (handled in quantitative analysis)
- **Resumability**: Any failed item can be re-run individually with `--filter` + `--force`

---

## Ethical Considerations

- All data is publicly available (forms published on provider websites)
- No patient data is involved
- Organizations are identified by name (this is public accountability, not private information)
- Findings should be framed constructively — the goal is to improve patient access, not to shame specific organizations
- Consider sharing findings with organizations that score poorly, with specific improvement suggestions

---

## Extensions (Future Work)

- **Longitudinal tracking**: Re-run quarterly to track improvements
- **State-level policy correlation**: Do states with stronger patient access laws have better-scoring forms?
- **Portal integration**: Extend to evaluate whether forms are available through patient portals
- **Accessibility audit**: Add WCAG compliance checks (color contrast, screen reader compatibility)
- **OCR integration**: When we add OCR support, re-evaluate image-only scans
- **International comparison**: Extend to other countries' patient access frameworks

---

## Operational Guide for Agents

This section documents hard-won lessons about running the pipeline. Read this before helping a human operate the study.

### Launching pipeline stages

The pipeline is run via `bun run.ts <stage> [options]` from this directory. **Do not** tail logs or stream output into the interactive terminal — the copilot CLI's ANSI output causes severe UI flickering that crashes the terminal.

Instead, launch stages fully detached:

```bash
cd scripts/roi-form-study
setsid bun run.ts stage1 --force </dev/null > /tmp/roi-stage1.log 2>&1 &
disown
```

Key points:
- **`setsid` + `disown`** are both needed. `nohup` alone is not sufficient — Bun's child processes (copilot agents) receive SIGHUP and die when the shell exits.
- **Redirect stdin** (`</dev/null`) to prevent any interactive prompts from blocking.
- **Redirect stdout/stderr** to a temp file so the human can check orchestrator-level output without polluting their terminal.
- The human monitors progress via `tail -f data/_logs/status.log` and `tail -f data/_logs/details.log` in their own terminal.

### Log architecture

- **`data/_logs/status.log`** — high-level events (START, DONE, FAIL per item). One line per event.
- **`data/_logs/details.log`** — aggregated copilot agent output from all instances, prefixed with `[timestamp] [instanceId]`. Streams in real time.
- **`data/<stage-dir>/agent-log.txt`** — per-instance raw copilot output (both stdout and stderr).
- **`/tmp/roi-stage<N>.log`** — orchestrator console output (banners, progress).

### Copilot CLI output capture

The orchestrator spawns copilot agents via `Bun.spawn()` with `stdout: "pipe"` and `stderr: "pipe"`. Both streams are captured:

- **stdout**: Contains the agent's final response text. Appears only after the model finishes generating — **not** streamed token-by-token when piped.
- **stderr**: Contains tool-call output (● Read, ● Create, etc.) and session stats.

**Expected behavior**: After a tool call like "Read DESIGN.md", there will be a long silence (30-90s) while the model thinks. This is normal — the model's reasoning is not emitted to any stream when running in `-p` (non-interactive) mode. Output resumes when the model makes its next tool call or finishes.

To see the model's detailed thinking, each agent writes copilot debug logs to `<workdir>/copilot-logs/`. These include the full LLM request/response cycle. Find them with:
```bash
# Find the most recent copilot debug log
find data/ -path "*/copilot-logs/*.log" -newer data/axes.json | head -5
```

The detail logger buffers token-level chunks and only emits a log line on actual newlines, to avoid one-word-per-line noise from streaming LLM tokens.

### Checking progress without disrupting the terminal

```bash
# Quick status check (no LLM, reads files only)
bun run.ts status

# Watch high-level events
tail -f data/_logs/status.log

# Watch detailed agent output
tail -f data/_logs/details.log

# Check if bun orchestrator is still alive
pgrep -af "bun.*run.ts"

# Check if copilot agents are running
pgrep -af "copilot.*-p"
```

### Killing a stuck run

```bash
# Find PIDs
pgrep -af "bun.*run.ts"
pgrep -af "copilot.*-p"

# Kill by PID (never use pkill/killall)
kill <pid>
```

### Resumability

File existence = done. Re-running a stage skips completed items unless `--force` is passed. You can safely re-run after a crash — it picks up where it left off.
