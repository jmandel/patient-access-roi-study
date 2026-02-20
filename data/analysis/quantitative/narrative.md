# How Well Does American Healthcare Serve Patients Requesting Their Own Records? A Quantitative Portrait

## The Sample

We evaluated release-of-information (ROI) forms and processes at 181 healthcare organizations across 43 U.S. states, scoring each on five dimensions — findability, technical accessibility, content design, patient-centeredness, and compliance — and computing a weighted overall score. The sample was stratified along four axes to ensure broad representation: facility type (77 community hospitals, 30 teaching hospitals, 29 critical access hospitals, 25 physician practices, 20 FQHCs), system affiliation (81 independent, 65 major system, 35 regional system), ownership (119 nonprofit, 39 for-profit, 23 government), and census region (64 South, 41 Midwest, 40 West, 36 Northeast).

## The Overall Picture: A C+ Industry

The headline finding is that the U.S. healthcare industry earns a collective **C+** on patient records access. The mean overall score was 3.36 out of 5 (SD = 0.50), with a median of 3.40. The grade distribution tells the story starkly:

| Grade | N | % |
|-------|---|---|
| A (4.5–5.0) | 1 | 0.6% |
| B (3.5–4.4) | 79 | 43.6% |
| C (2.5–3.4) | 94 | 51.9% |
| D (1.5–2.4) | 7 | 3.9% |
| F (<1.5) | 0 | 0% |

A single organization — Flowers Hospital, a for-profit CHS facility in rural Alabama — earned an A. More than half the sample landed in the C range, and nearly 4% scored a D. No organization failed outright, but the ceiling was remarkably low: the maximum overall score was 4.65, and the 75th percentile was just 3.75. Even the "good" organizations are not great. The floor (1.75) represents organizations where a patient would struggle to even begin the process.

## Where Organizations Succeed and Fail: The Dimensional Profile

The five scored dimensions reveal a consistent pattern. Organizations are reasonably good at making forms findable but fall short on the dimensions that matter most once a patient has the form in hand.

| Dimension | Mean | Median | Weight |
|-----------|------|--------|--------|
| Findability | 3.85 | 4 | 15% |
| Content Design | 3.53 | 4 | 15% |
| Compliance | 3.49 | 4 | 20% |
| Technical Accessibility | 3.11 | 3 | 25% |
| Patient-Centeredness | 3.11 | 3 | 25% |

**Findability** is the relative bright spot (mean 3.85). Seventy-two percent of organizations made their forms easy to find, and only 8% presented serious retrieval obstacles. A site-scoped web search typically surfaced the form within minutes. The organizations that failed on findability tended to be in the throes of system transitions — acquisitions, website migrations, domain changes — where patient-facing pages were casualties of reorganization.

**Technical accessibility** and **patient-centeredness** are tied as the weakest dimensions (both mean 3.11), and they carry the heaviest scoring weights (25% each), dragging the overall distribution downward. These two dimensions are also moderately correlated with each other (ρ = 0.455), suggesting a common underlying factor: organizations that invest in one tend to invest in the other. But both have wide variance — minimum scores of 1 and 2 respectively, and standard deviations near the top of the range — indicating this is where organizations diverge most.

The correlation structure further reveals that **technical accessibility is the single strongest driver of overall score** (ρ = 0.784 with overall), followed by compliance (0.736) and patient-centeredness (0.721). By contrast, findability has only a moderate relationship with overall score (ρ = 0.515) — a form can be easy to find and still be poorly designed. Content design and compliance occupy a middle tier, with medians of 4 but limited variance (SD = 0.54 and 0.53 respectively), suggesting these dimensions have a natural floor: even mediocre forms tend to be at least adequate in structure and legal content. The real differentiation happens in how well the form works as a digital artifact and how well it serves the patient's specific use case.

## The Wrong-Form Problem: 78.5% of Organizations Hand Patients a Document Designed for Someone Else

The most consequential structural finding is the distribution of primary pathway types:

| Pathway Type | N | % |
|--------------|---|---|
| Generic HIPAA authorization | 142 | 78.5% |
| Dedicated patient form | 22 | 12.2% |
| Online portal | 16 | 8.8% |
| Phone/in-person only | 1 | 0.6% |

Nearly four in five organizations route patients through a generic third-party authorization form — a document designed for attorneys, insurers, and other external parties requesting disclosure under HIPAA § 164.508. Only 21% of organizations (38 of 181) offer any form of individual access pathway, meaning a form or process designed around the patient's own right under § 164.524. The chi-squared association between facility type and having an individual access pathway was significant (χ² = 11.8, p = 0.019, V = 0.255): teaching hospitals had the highest rate (10 of 30, 33%), followed by community hospitals (21 of 77, 27%), while critical access hospitals (1 of 29, 3%) and FQHCs (2 of 20, 10%) nearly universally relied on generic forms.

The system affiliation effect was even stronger (χ² = 22.73, p < 0.001, V = 0.354): 40% of major-system-affiliated organizations offered a dedicated pathway, versus just 6% of regional systems and 12% of independents. This suggests that creating a patient-specific form is a decision that, when made, tends to be made at the system level and propagated downward — and when it isn't made at the system level, it rarely happens at all.

## The Fillability Gap: Three-Quarters of Forms Are Digital in Name Only

Only 48 organizations (26.5%) offered fillable PDF form fields. The rest distribute born-digital PDFs — created in Word or InDesign, with intact text layers — that nonetheless require patients to print, handwrite, scan, and fax or mail. The technical barrier to closing this gap is trivial: adding interactive form fields to an existing PDF layout is a matter of hours. Yet across facility types, the flat PDF dominates.

System affiliation was the strongest predictor of fillability (χ² = 14.49, p = 0.0007, V = 0.283). Major-system organizations offered fillable fields 43% of the time (28 of 65), compared to just 14% of regional systems (5 of 35) and 19% of independents (15 of 81). The mechanism is straightforward: systems like HCA Healthcare, Providence, and Duke Health deploy standardized fillable templates across facilities. When the system-level template is good, every facility benefits; when it's not, every facility suffers equally.

Other binary outcomes paint a mixed picture. Online submission (via fax, email, or portal) was available at 82.3% of organizations — a strong baseline, though 17 organizations (9.4%) still required physical delivery with no electronic alternative. Multilingual forms were available at 34.3% (62 organizations), with Spanish as the near-universal second language. Fewer than half (48.6%) used plain language, and only 44.8% included instructions — meaning more than half of patients encounter complex legal authorization forms with no guidance beyond field labels.

## What Predicts Quality? System Affiliation Matters Most; Geography Doesn't

We tested four organizational axes as predictors of both continuous scores (Kruskal-Wallis H) and binary outcomes (chi-squared), applying a significance threshold of p < 0.05.

**System affiliation** emerged as the most consistent predictor. It was significantly associated with overall score (H = 18.88, p = 0.0001, η² = 0.095), technical accessibility (H = 10.83, p = 0.004, η² = 0.05), and patient-centeredness (H = 13.48, p = 0.001, η² = 0.065). Major-system organizations had a median overall score of 3.65, compared to 3.35 for regional systems and 3.30 for independents. System affiliation also predicted fillable fields, individual access pathways, and — unsurprisingly — use of system-level forms (χ² = 103.23, p < 0.001, V = 0.755, the largest effect size in the study). The story here is that large health systems function as quality amplifiers: they have the resources to invest in form design, and the organizational structure to propagate that investment (or its absence) across dozens of facilities.

**Facility type** was the second most informative axis, reaching significance for content design (H = 11.42, p = 0.022), patient-centeredness (H = 11.03, p = 0.026), and overall score (H = 17.86, p = 0.001). Teaching hospitals led on overall score (median 3.68), while critical access hospitals trailed (median 3.10). But the effect sizes were modest (η² = 0.04–0.08), and the medians on individual dimensions were often identical across groups (all facility types shared a median of 3 on patient-centeredness). The variation within facility types dwarfs the variation between them — a 25-bed critical access hospital in Kentucky can outperform a 1,400-bed academic medical center, and frequently does.

**Ownership** approached but did not reach significance on overall score (H = 5.92, p = 0.052). Nonprofits had the highest median (3.50) versus for-profits (3.30) and government (3.35). The most notable ownership finding was on online submission availability (χ² = 12.63, p = 0.002, V = 0.264): government-owned facilities were significantly less likely to offer electronic submission (13 of 23, 57%) compared to nonprofits (104 of 119, 87%) and for-profits (32 of 39, 82%).

**Census region** predicted nothing. Not a single dimensional score or binary outcome reached significance across the four regions, with p-values ranging from 0.06 (compliance, barely) to 0.92 (patient-centeredness). The ROI form landscape is remarkably uniform across the country: a patient in the Northeast, South, Midwest, or West faces essentially the same odds of encountering a well-designed or poorly designed form. The problems documented in this study are national, not regional.

## The Compliance Ceiling

One quiet finding deserves attention: no organization scored above 4 on compliance (max = 4, SD = 0.53). This is the only dimension with a hard ceiling below 5 in the observed data. It suggests that even the best organizations have compliance gaps — vague fee language, unnecessary purpose-of-disclosure requirements, missing patient rights statements, or witness signature lines that HIPAA does not require for patient access. Perfect compliance with the patient access provisions of § 164.524 is effectively unobserved in this sample.

## The EHI Export Blind Spot

Of the 474 individual form evaluations conducted across the study, only 2 organizations — Owensboro Health (KY) and Samaritan Lebanon Community Hospital (OR) — address EHI Export on their ROI forms. Both are Epic EHR customers; both reference the computable data export that providers are obligated to offer under the 21st Century Cures Act. The remaining 99% of organizations make no mention of EHI Export. This is not a form design issue so much as an industry-wide gap: the regulatory obligation to offer patients their electronic health information in a computable format has not yet been translated into patient-facing workflows at the vast majority of healthcare organizations. The two exceptions appear to reflect an EHR vendor initiative (Epic) rather than independent organizational awareness.

## What the Numbers Mean

The quantitative profile can be summarized in a few sentences. American healthcare is reasonably good at making ROI forms findable but mediocre at making them usable, patient-centered, or compliant. The typical organization hands patients a generic third-party authorization form with no fillable fields, no instructions, and no acknowledgment that a patient requesting their own records is doing something legally and practically different from an insurer requesting records for a claim. System affiliation is the strongest lever: organizations embedded in major health systems score higher, largely because systems propagate standardized templates and digital infrastructure. But system affiliation is a blunt instrument — it amplifies whatever the system-level template looks like, whether that's a 66-field fillable PDF with dedicated patient access framing or a decade-old scanned image. Geography, ownership, and facility type explain surprisingly little variance. The problems are structural and national, not regional or resource-dependent. And the gap between what exists and what's achievable is not large in cost or complexity — it's a gap in organizational attention.
