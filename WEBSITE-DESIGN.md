# ROI Form Study: Showcase Website Design

## Purpose

A data-driven, interactive website that presents findings from the ROI form study at two levels:

1. **Narrative findings** — the qualitative and quantitative analyses from ANALYSIS-PLAN.md, presented as authored content with supporting visualizations.
2. **Full data explorer** — every organization, every score, every form, every evaluation — browsable, filterable, and queryable by the reader.

The site should feel like an investigative report backed by a rich, transparent dataset. A reader can consume the authored narrative, then drill into the data to verify claims, explore outliers, or discover their own patterns.

---

## Architecture

**Static site, client-side data.** All data is compiled at build time into JSON bundles. No server needed — deploy to GitHub Pages, Netlify, or S3.

**Tech stack:**
- Build: TypeScript script reads `data/synthesis/*/scores.json`, `data/forms/*/notes.md`, `data/evaluations/*.md`, org metadata, and analysis outputs → emits a `site/data/` directory of JSON + markdown + PDF assets.
- Framework: Vanilla HTML/JS or a lightweight framework (Preact, Svelte, or even just Alpine.js + Tailwind). The dataset is small enough (~200 orgs) to hold entirely in memory.
- Charts: Observable Plot, D3, or Chart.js for histograms, box plots, scatter plots.
- Markdown rendering: marked or markdown-it for synthesis narratives, evaluation detail.
- PDF viewing: embedded `<iframe>` or `<object>` for form PDFs; link to download.

---

## Page Structure

### Page 1: Landing / Executive Summary

**Route:** `/`

The front door. Sets context, presents headline findings, invites deeper exploration.

**Content:**
- Study title, one-paragraph abstract
- Headline stats in large type: N orgs studied, grade distribution (pie or donut), key finding callouts (e.g., "X% of orgs lack a dedicated patient access form", "median score: Y")
- 3-4 "key finding" cards linking to the narrative sections
- Navigation to Findings and Explorer

---

### Page 2: Findings

**Route:** `/findings`  
**Sub-routes:** `/findings/best-practices`, `/findings/barriers`, `/findings/portals`, etc.

Authored narrative content from the qualitative analyses (ANALYSIS-PLAN §1.1–1.7) and quantitative analyses (§2.1–2.6). Each analysis becomes a section or sub-page.

**Qualitative sections** (from map-reduce outputs):
- 1.1 Best Practices Showcase
- 1.2 Worst Barriers Deep Dive
- 1.3 The Portal Question
- 1.4 The Retrieval Experience
- 1.5 Surprising Findings
- 1.6 Document Quality Deep Dive
- 1.7 The Wrong Form Problem

Each section is a markdown narrative with:
- Inline references to specific orgs → clicking an org name navigates to that org's detail page in the Explorer
- Embedded form screenshots or quoted form text where relevant
- Callout boxes for particularly notable examples (best, worst, most surprising)

**Quantitative sections** (from deterministic analysis):
- 2.1 Sample Description — table of axis distributions, power analysis summary
- 2.2 Overall Distribution — interactive histograms of each score dimension; summary stats table; correlation heatmap
- 2.3 Univariate Predictors — box plots of score by axis value (facility_type, ownership, system_affiliation, region); table of test statistics and effect sizes
- 2.4 Multivariate Analysis — coefficient table from regression models; forest plot of effect sizes with CIs
- 2.5 Outlier Analysis — scatter plot (predicted vs. actual) with outlier orgs labeled → clickable to explorer
- 2.6 Trend Visualizations — the specific charts called out in the analysis plan (heatmaps, stacked bars, maps)

All charts are interactive: hover for values, click data points to navigate to org detail.

---

### Page 3: Organization Explorer

**Route:** `/explorer`

The heart of the data transparency layer. A searchable, filterable, sortable table/grid of all organizations with full drill-down capability.

#### 3a. Explorer List View (`/explorer`)

**Layout:** Filter sidebar + results table/cards.

**Filter controls** (sidebar or top bar):
- **Grade filter**: checkboxes for A, B, C, D, F — instant filter
- **Score range sliders**: one per dimension (findability, technical, content, patient-centeredness, compliance, overall) — range 1.0–5.0
- **Axis filters** (multi-select dropdowns, one per study axis):
  - facility_type: community_hospital, teaching_hospital, critical_access_hospital, physician_practice, fqhc
  - system_affiliation: independent, major_system, regional_system
  - ownership: nonprofit, for_profit, government
  - census_region: northeast, south, midwest, west
- **Boolean filters** (toggle switches):
  - Has individual access pathway (yes/no/either)
  - Differentiates self vs. third-party (yes/no/either)
  - Fillable fields (yes/no/either)
  - Online submission available (yes/no/either)
  - Requires physical delivery (yes/no/either)
  - Multilingual (yes/no/either)
  - Requires notarization/witness (yes/no/either)
  - Bot blocking encountered (yes/no/either)
- **Pathway type filter**: multi-select for primary_pathway_type enum values
- **Fee disclosure filter**: multi-select for fee_disclosure enum values
- **Retrieval difficulty filter**: multi-select for easy/moderate/hard/impossible
- **Text search**: search org name, city, state, parent system name
- **Has red flags / has bright spots**: toggle filters

**Results display:**
- Default sort: overall score descending
- Sortable columns: org name, state, grade, overall score, each dimension score, pathway type, form count
- Each row shows: org name, city/state, grade badge (color-coded A=green…F=red), pathway type icon, fillable icon, overall score, sparkline of 5 dimension scores
- Row count indicator: "Showing 47 of 199 organizations"
- Click any row → org detail page

**Aggregate stats bar** (updates as filters change):
- Current selection: N orgs, mean score, grade distribution mini-bar
- Comparison vs. full dataset when filters are active

#### 3b. Organization Detail Page (`/explorer/:org_id`)

**Route:** `/explorer/huntington-hospital`

Everything we know about one organization, all in one place.

**Header:**
- Org name, city, state, website link (external)
- Grade badge (large, color-coded)
- Overall score with dimensional breakdown bar chart (5 horizontal bars)
- Axis tags: e.g., `community_hospital` `major_system` `nonprofit` `northeast`
- Parent system name (if applicable, with link to filter explorer by same system)

**Section: Score Details**
- Radar/spider chart of 5 dimension scores
- Table: each dimension → score, rubric level description, rationale text from scores.json
- Weights visualization showing how overall score was computed

**Section: Access Pathway**
- Visual representation of what pathways exist (icons: PDF, portal, phone, fax, mail, email)
- Primary pathway highlighted
- `primary_pathway_type` displayed prominently with explanation
- `differentiates_self_vs_third_party`: yes/no with color
- `online_submission_available` / `requires_physical_delivery` status
- If pathway has a URL, link to it

**Section: Form Quality**
- Quick-glance icons: fillable ✓/✗, instructions ✓/✗, clear layout ✓/✗, plain language ✓/✗, multilingual ✓/✗, patient rights ✓/✗, consent bundling ✓/✗
- Field count estimate, page count
- Languages available

**Section: Barriers & Compliance**
- Red flags list (if any) — styled as warning cards
- Bright spots list (if any) — styled as success cards
- Fee disclosure badge
- Notarization/witness requirement indicator
- Response time if stated

**Section: Narrative Synthesis**
- Full `synthesis.md` rendered as formatted HTML
- This is the 400-800 word qualitative narrative

**Section: Retrieved Forms**
- Card for each downloaded PDF:
  - Filename, document type classification, scope, language
  - Source URL (external link)
  - Embedded PDF viewer (iframe) or thumbnail + download link
  - Link to the per-form evaluation markdown
- If metadata JSON exists, show extracted text stats (page count, word count, etc.)

**Section: Form Evaluations**
- Expandable/collapsible cards for each per-form evaluation (from `evaluations/{org}--{form}.md`)
- Each rendered as formatted markdown
- Organized by form (form-1, form-2, etc.) with document type labels

**Section: Retrieval Notes**
- Full `notes.md` rendered — the raw narrative of how the agent found and downloaded forms
- Retrieval difficulty badge, bot blocking indicator, browser fallback indicator

**Navigation:**
- "← Back to Explorer" link
- "Previous / Next" org navigation (within current filter context)
- Links to other orgs in same parent system (if applicable)
- Links to other orgs in same category

---

### Page 4: Methodology

**Route:** `/methodology`

**Content:**
- Study design overview (from DESIGN.md)
- Sampling strategy: axes, category definitions, target counts
- Pipeline description: stages 1-5, what each produces
- Scoring rubrics: the 5 dimensions with their 1-5 level descriptions (from synthesis-schema.ts comments)
- High-watermark principle explanation
- Submission baseline explanation (fax = acceptable)
- Limitations: sample size, power analysis, LLM-based evaluation caveats
- Reproducibility: link to code repository

---

### Page 5: Comparison Tool

**Route:** `/compare`

Side-by-side comparison of 2-4 organizations.

**Functionality:**
- Search/select orgs to compare (autocomplete dropdown)
- Side-by-side layout showing:
  - Grade badges
  - Overlaid radar charts
  - Pathway type comparison
  - Form quality attribute comparison (boolean grid)
  - Barrier comparison
  - Score difference highlighting (which org is better on which dimension)
- Pre-built comparisons linked from findings (e.g., "best vs. worst in same category")

---

## Data Pipeline (Build Step)

A TypeScript build script compiles all pipeline data into website-ready assets:

```
scripts/roi-form-study/build-site.ts
```

**Outputs to `site/data/`:**

1. **`orgs.json`** — Array of all OrgSynthesis objects (from `synthesis/*/scores.json`), enriched with org metadata (city, state, website, axes) from `organizations/*.json`. This is the main queryable dataset. ~200 objects, small enough to ship whole.

2. **`narratives/{org_id}.md`** — Each org's `synthesis.md`, copied verbatim. Loaded on demand when viewing org detail.

3. **`notes/{org_id}.md`** — Each org's `forms/{org_id}/notes.md`, copied. Loaded on demand.

4. **`evaluations/{org_id}--{form}.md`** — Per-form evaluation markdowns. Loaded on demand.

5. **`forms/{org_id}/{filename}.pdf`** — The actual downloaded PDFs. Served for inline viewing.

6. **`forms/{org_id}/{filename}-metadata.json`** — Form metadata with extracted text.

7. **`findings/{analysis_name}.md`** — Qualitative analysis outputs (from map-reduce analyses). Pre-rendered as HTML or shipped as markdown.

8. **`stats.json`** — Pre-computed quantitative analysis results: distributions, test statistics, regression coefficients, chart data. Avoids needing scipy in the browser.

9. **`axes.json`** — Study axis definitions and category mappings.

10. **`rubrics.json`** — Scoring rubric text extracted from synthesis-schema.ts for display on methodology page.

---

## Interaction Patterns

### Filter → Histogram → Drilldown

1. User selects filters (e.g., `ownership: for_profit`, `census_region: south`)
2. Aggregate stats bar updates: "12 orgs, mean score 2.8, grade distribution: 0A/2B/6C/3D/1F"
3. Histogram updates to show score distribution for current selection
4. User clicks a bar segment → table filters to orgs in that score range
5. User clicks an org row → navigates to org detail page

### Findings → Data

1. User reads narrative finding: "Baptist Health Lexington exemplifies a well-designed patient access form..."
2. Org name is a hyperlink → clicks through to `/explorer/baptist-health-lexington`
3. Can view the actual form PDF, read the evaluation, see the scores

### Chart Interaction

1. Box plot of score by facility_type → hover shows medians and quartiles
2. Click a data point (outlier dot) → navigate to that org's detail page
3. Brush-select a range on scatter plot → filter explorer to those orgs

### Comparison Flow

1. From org detail page, click "Compare with..." button
2. Opens comparison tool with current org pre-selected
3. Search for second org → side-by-side view

---

## Visual Design Principles

- **Grade colors**: A=#22c55e (green), B=#84cc16 (lime), C=#eab308 (yellow), D=#f97316 (orange), F=#ef4444 (red)
- **Clean, data-forward layout**: minimal chrome, let the data speak
- **Responsive**: works on desktop (primary) and tablet; mobile is read-only (no filters)
- **Accessible**: proper ARIA labels, keyboard navigation, sufficient contrast
- **Print-friendly**: findings pages should print cleanly for sharing

---

## URL Structure Summary

```
/                                    Landing / executive summary
/findings                            Findings hub
/findings/best-practices             Qualitative analysis 1.1
/findings/barriers                   Qualitative analysis 1.2
/findings/portals                    Qualitative analysis 1.3
/findings/retrieval                  Qualitative analysis 1.4
/findings/surprises                  Qualitative analysis 1.5
/findings/document-quality           Qualitative analysis 1.6
/findings/wrong-form                 Qualitative analysis 1.7
/findings/distributions              Quantitative analysis 2.1-2.2
/findings/predictors                 Quantitative analysis 2.3-2.4
/findings/outliers                   Quantitative analysis 2.5
/explorer                            Organization explorer (list + filters)
/explorer/:org_id                    Organization detail page
/compare                             Side-by-side comparison tool
/methodology                         Study design, rubrics, limitations
```

---

## Queryable Fields (from OrgSynthesis)

All of these are available for filtering, sorting, and faceting in the explorer:

**Scores (numeric 1-5):**
- `scores.findability.score`
- `scores.technical_accessibility.score`
- `scores.content_design.score`
- `scores.patient_centeredness.score`
- `scores.compliance.score`
- `scores.overall.score`
- `scores.overall.grade` (categorical: A/B/C/D/F)

**Access pathway (categorical/boolean):**
- `access_pathway.primary_pathway_type` (6 enum values)
- `access_pathway.has_individual_access_pathway` (boolean)
- `access_pathway.differentiates_self_vs_third_party` (boolean)
- `access_pathway.online_submission_available` (boolean)
- `access_pathway.requires_physical_delivery` (boolean)

**Form quality (boolean/numeric):**
- `form_quality.fillable_fields` (boolean)
- `form_quality.field_count_estimate` (number)
- `form_quality.page_count` (number)
- `form_quality.has_instructions` (boolean)
- `form_quality.clear_layout` (boolean)
- `form_quality.plain_language` (boolean)
- `form_quality.multilingual` (boolean)
- `form_quality.consent_bundling` (boolean)
- `form_quality.includes_patient_rights` (boolean)

**Barriers (categorical/boolean):**
- `barriers.requires_notarization_or_witness` (boolean)
- `barriers.requires_in_person` (boolean)
- `barriers.fee_disclosure` (5 enum values)
- `barriers.response_time_stated` (boolean)
- `barriers.red_flags` (array — filter on length > 0)
- `barriers.bright_spots` (array — filter on length > 0)

**Org metadata (from org lookup):**
- `org_name` (text search)
- `category_id`
- axes: `facility_type`, `system_affiliation`, `ownership`, `census_region`
- city, state
- `parent_system` (text, nullable)
- `uses_system_forms` (boolean)
- `total_forms_found` (number)

**Retrieval context:**
- `retrieval.difficulty` (4 enum values)
- `retrieval.bot_blocking_encountered` (boolean)
- `retrieval.browser_fallback_needed` (boolean)
