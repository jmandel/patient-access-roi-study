# ROI Form Study: Analysis Plan

## Overview

This document outlines the analysis we'll perform once data collection (stages 1-5) is complete. The analysis has two complementary parts:

1. **Qualitative analysis** — Deep, open-ended exploration using LLM agents to surface surprising findings, exemplary practices, and systemic problems. This is where the agentic approach shines: the model reads evaluations, forms, and abstractions holistically and produces narrative insights a statistical model would miss.

2. **Quantitative analysis** — Statistical assessment of the structured abstraction data to understand distributions, predictors of form quality, and whether organizational characteristics (size, ownership, geography) systematically predict patient experience.

---

## Cross-Cutting Design Principles

### Map-reduce for large corpora

With ~199 organizations and potentially 500+ forms, no single LLM context window can hold everything. All qualitative analyses use a map-reduce pattern:

1. **Map phase**: An LLM agent processes a batch of items (e.g., 10-20 org evaluations) and produces a summary of findings, notable examples, and patterns observed in that batch.
2. **Reduce phase**: A second LLM agent reads all batch summaries and synthesizes them into a coherent overall analysis, resolving contradictions, identifying cross-batch patterns, and selecting the most compelling examples.

Batch boundaries should be randomized (not alphabetical or grouped by category) to avoid systematic bias in what each mapper sees. The reduce agent should have access to the original data for any specific examples it wants to verify or quote.

### Two-level qualitative analysis

The synthesize stage collapses per-form evaluations into org-level synthesis documents (`synthesis/*/synthesis.md` + `synthesis/*/scores.json`). These are the primary inputs for all qualitative analyses. The synthesis already reasons about which form matters most for patient self-access and scores against the rubric dimensions.

For analyses that need the raw retrieval narrative (e.g., 1.5 Retrieval Experience), the original `forms/*/notes.md` files are still available as a supplementary source.

### Unit of analysis for quantitative work

The unit of analysis is the **organization**, not the form. Many orgs have multiple downloaded documents (English + Spanish, old + new versions, instructions, fee schedules, department-specific forms). To avoid overcounting:

- **High-watermark scoring**: For each scoring dimension, use the best score achieved by any form for that org. If an org has 5 forms and one of them is fillable, the org gets credit for having a fillable form. If one of them is a patient-access-specific form, the org gets credit for patient-centeredness.
- **Primary form identification**: The abstraction identifies which form is current and which pathway is primary. For analyses that need a single representative form, use the current, primary-pathway form.
- **Rationale**: An organization that publishes 10 documents is not 10x more important than one that publishes 1. The patient experience depends on the best available pathway, not the average of all documents the org has ever published.

---

## Part 1: Qualitative Analysis

The qualitative analysis consists of a series of LLM-driven explorations, each with a specific lens but open-ended in what it may discover. Each analysis uses the map-reduce pattern described above. The primary inputs are the org-level synthesis files (`synthesis/*/synthesis.md` and `synthesis/*/scores.json`), with `forms/*/notes.md` available for retrieval-focused analyses.

### 1.1 Best Practices Showcase

**Input**: `synthesis/*/synthesis.md` + `synthesis/*/scores.json`

**Goal**: Identify organizations whose forms and/or request processes represent genuine best practices that others should emulate.

**Approach**: Map phase processes batches of synthesis files, looking for standout positive examples. Reduce phase selects the most compelling across all batches.

**Prompt direction**:
- Read all synthesis narratives and scores in this batch. Identify forms or request processes that impressed you.
- What specific design choices made them effective?
- Are there patterns — do certain types of orgs consistently do well?
- Find examples of: clear plain-language forms, excellent digital-first design, forms that genuinely center patient access, creative use of technology

**Output**: Narrative with specific org examples, quoted form text, and generalizable lessons.

### 1.2 Worst Barriers Deep Dive

**Input**: `synthesis/*/synthesis.md` + `synthesis/*/scores.json`

**Goal**: Identify the most significant barriers patients face when trying to request their records.

**Approach**: Map phase processes batches looking for difficulty patterns. Reduce phase organizes by barrier type and severity.

**Prompt direction**:
- What were the hardest forms to find? Why?
- Which forms impose the most burdensome requirements on patients?
- Are there forms that seem designed to discourage requests?
- What systemic patterns emerge — is this incompetence, indifference, or intentional friction?

**Output**: Narrative organized by barrier type, with specific examples and severity assessment.

### 1.3 The Portal Question

**Input**: `synthesis/*/scores.json` (access_pathway fields)

**Goal**: Understand the shift from downloadable PDF forms to online portal-based record request systems.

**Approach**: Map phase processes batches of synthesis scores, focusing on access_pathway data. Reduce phase synthesizes the portal landscape.

**Prompt direction**:
- What fraction of orgs offer a portal pathway? Which vendors dominate?
- When a portal exists, is there still a PDF form available?
- Are portals better or worse for patients?
- Do portal-based orgs tend to be larger? System-affiliated?
- Is the portal trend a net positive for patient access, or does it create new barriers?

**Output**: Analysis of the portal landscape with implications for patient access.

### 1.4 The Retrieval Experience

**Input**: `forms/*/notes.md` (raw retrieval narratives)

**Goal**: Characterize what it's actually like to try to find ROI forms online, as a patient would.

**Approach**: Map phase reads notes.md files in batches, focusing on the search narrative itself. This is the one analysis that uses the raw stage 3 notes rather than synthesis outputs, because the detailed search process narrative is richer than what the synthesis preserves.

**Prompt direction**:
- How many clicks/searches did it typically take to find the form?
- What navigation patterns work (direct search, website nav, parent system)?
- What common obstacles did agents encounter (broken links, bot blocking, login walls, outdated URLs)?
- How often did the agent need to fall back to a browser?
- Are some website designs systematically harder to navigate for this purpose?

**Output**: Narrative about the patient navigation experience, organized by difficulty pattern.

### 1.5 Surprising Findings

**Input**: `synthesis/*/synthesis.md` + `synthesis/*/scores.json`

**Goal**: Surface the unexpected — things we didn't think to look for.

**Approach**: Map phase reads batches with minimal direction. Reduce phase identifies the most unexpected patterns across all batches.

**Prompt direction**:
- Read all synthesis narratives and scores in this batch. What surprised you?
- What patterns don't fit neatly into our evaluation framework?
- Were there organizations that defied expectations based on their category?
- Did you notice documents that aren't ROI forms but reveal something interesting?

**Output**: Open-ended narrative.

### 1.6 Document Quality Deep Dive

**Input**: `synthesis/*/synthesis.md` + `synthesis/*/scores.json`

**Goal**: Characterize the technical and design quality of ROI form documents as artifacts — fillability, layout, typography, page counts, instructions, multilingual support.

**Approach**: Map phase tallies document quality metrics across a batch (fillable vs. flat vs. scan, page counts, field counts, digital-first vs. scanned, instruction quality, multilingual). Reduce phase aggregates counts and contrasts best vs. worst.

**Prompt direction**:
- What fraction of forms are fillable/interactive vs. flat vs. image-only scans?
- What's the range of page counts and field counts?
- How common are instructions, multilingual versions, clear layouts?
- What does the "typical" ROI form look like as a document?
- Are there patterns by org type — do larger orgs produce better documents?

**Output**: Quantified portrait of document quality with specific contrasting examples.

### 1.7 The Wrong Form Problem

**Input**: `synthesis/*/synthesis.md` + `synthesis/*/scores.json`

**Goal**: Investigate how often organizations give patients a generic third-party authorization form when the patient actually wants to request their own records under HIPAA's Right of Access (§ 164.524).

**Approach**: Map phase classifies each org's access pathway (dedicated patient form, generic-only, both, portal-only, unclear) and documents the patient impact of using the wrong form. Reduce phase aggregates and analyzes the systemic pattern.

**Prompt direction**:
- What fraction of orgs have a dedicated patient access form vs. generic-only?
- What's the patient impact of using a third-party form for self-access?
- Are there patterns by org type or region?
- What does a good patient access form look like vs. a generic authorization?

**Output**: Definitive analysis of this widespread mismatch problem.

### Note: System vs. Facility and State/Regional Patterns

The original analysis plan included narrative analyses for system-vs-facility form quality (1.4 original) and state/regional regulatory patterns (1.7 original). These are better handled as quantitative facets (see Part 2) — the `system_affiliation` and `census_region` axes in org-lookup.json enable direct statistical comparison without needing LLM narrative analysis.

---

## Part 2: Quantitative Analysis

### 2.1 Sample Description and Power Analysis

**Context**: ~199 target organizations across 4 axes with unbalanced cell sizes.

**Axis value counts** (target):
- facility_type: community_hospital (82), teaching_hospital (33), critical_access_hospital (31), physician_practice (27), fqhc (26)
- system_affiliation: independent (95), major_system (68), regional_system (36)
- ownership: nonprofit (131), for_profit (44), government (24)
- census_region: south (71), midwest (47), west (44), northeast (37)

**Power calculations** (for two-group comparisons using t-test, α=0.05):
- For detecting a "large" effect (Cohen's d=0.8): need ~26 per group → achievable for most axis values
- For detecting a "medium" effect (d=0.5): need ~64 per group → only achievable for the larger groups (community_hospital, nonprofit, independent, south)
- For detecting a "small" effect (d=0.2): need ~394 per group → not achievable for any comparison

**Implication**: We can detect large differences between axis values with reasonable confidence. Medium effects only for the biggest groups. We should be transparent about this limitation. Multi-factor analysis (e.g., does ownership matter *controlling for* facility type) will have very limited power.

**Recommended approach**: Focus on descriptive statistics and effect sizes rather than p-values. Report confidence intervals. Use non-parametric tests where appropriate given small cells. Treat this as an exploratory study that identifies hypotheses for future work, not a confirmatory study.

### 2.2 Overall Distribution

**Unit of analysis**: Organization (high-watermark across forms, see principles above).

**Analyses**:
- Distribution of overall scores (histogram, summary stats)
- Distribution within each dimension (findability, technical, content, patient-centeredness, compliance)
- Which dimensions have the most variance? Which are uniformly good or bad?
- Correlation matrix between dimensions — do they cluster, or are some independent?
- Distribution of retrieval difficulty
- Fraction of orgs with: no form found, image-only scans, zero fillable fields, portal pathways

**Implementation**: Compute distributions from `data/synthesis/*/scores.json`. Each file contains per-org dimensional scores, access pathway data, form quality metrics, and barrier assessments — all at the org level with high-watermark scoring already applied. Mostly pandas/numpy, no LLM needed.

### 2.3 Univariate Predictors

For each axis, test whether axis values predict each outcome measure:

**Outcome measures** (from scores):
- Overall score
- Each dimension score individually
- Binary outcomes: has_portal, uses_system_forms, has_fillable_fields, is_scan_only, no_form_found

**Predictor axes**:
- facility_type (5 levels → Kruskal-Wallis + post-hoc pairwise)
- system_affiliation (3 levels → Kruskal-Wallis)
- ownership (3 levels → Kruskal-Wallis)
- census_region (4 levels → Kruskal-Wallis)

**For binary outcomes**: Chi-squared or Fisher's exact test.

**Effect sizes**: Report eta-squared (Kruskal-Wallis) or Cramér's V (chi-squared) alongside p-values.

**Implementation**: Python script using scipy.stats, computed deterministically. Produce a summary table of test statistics, p-values, and effect sizes for all predictor×outcome combinations.

### 2.4 Multivariate Analysis

**Approach**: Ordinal logistic regression (or OLS on continuous scores) with all axes as predictors.

**Models to fit**:
1. overall_score ~ facility_type + ownership + system_affiliation + region
2. Each dimension_score ~ same predictors
3. has_portal ~ same predictors (logistic regression)
4. uses_system_forms ~ same predictors (logistic regression)

**Caveats**: With N≈199 and 15 predictor levels, we're at ~13 observations per parameter. This is marginal. Report with appropriate caution. Consider LASSO or ridge regularization to handle collinearity.

**Implementation**: Python statsmodels or sklearn. Output coefficient tables with CIs.

### 2.5 Outlier Analysis

**Goal**: Identify organizations that score much better or worse than predicted by their category.

**Approach**:
1. Fit the multivariate model (2.4)
2. Compute residuals for each org
3. Flag orgs with |residual| > 1.5 SD as outliers
4. Feed outlier list to a qualitative LLM exploration (bridges quant → qual)

**Prompt direction for LLM follow-up**:
- Here are organizations that scored much [better/worse] than expected given their type, size, ownership, and region
- Read their evaluations and abstractions
- What explains the deviation? Is it something specific about this org, or a limitation of our model?

### 2.6 Trend Visualization Specs

**Charts to produce** (can be generated by LLM or deterministic code):
- Box plots: score by each axis value
- Heatmap: mean score by facility_type × ownership
- Stacked bar: grade distribution (A/B/C/D/F) by axis value
- Scatter: findability vs. technical accessibility (are they correlated?)
- Map: mean score by state (if enough states represented)
- Bar: portal adoption rate by facility_type and system_affiliation

---

## Implementation Notes

### Qualitative analyses (1.1-1.7)
Each uses the map-reduce pattern. Map phase processes randomized batches of 10-20 org synthesis files, producing a 500-1000 word summary per batch. Reduce phase reads all batch summaries and produces the final analysis. The reduce agent can request access to specific original files for verification or quoting. Implement as a reusable map-reduce runner that takes a prompt template and batch size.

### Quantitative analyses (2.1-2.6)
These should be deterministic Python/TypeScript scripts operating on the structured `synthesis/*/scores.json` outputs. No LLM needed except for the outlier follow-up (2.5) and possibly narrative generation around the statistics. All quantitative analyses use the organization as the unit of analysis, with high-watermark scoring already applied by the synthesize stage.

### Sequencing
- Quantitative analyses can run as soon as synthesize stage is complete
- Qualitative analyses can run as soon as synthesize stage is complete
- The outlier analysis (2.5) bridges both: quant model → qual deep dive
- The retrieval experience analysis (1.5) can run earlier — it only needs stage 3 notes
- Final report synthesis combines both streams
