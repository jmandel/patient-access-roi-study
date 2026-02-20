# Document Quality Deep Dive — Batch 8

## Form Format Breakdown

Across the 190 organizations with scored forms, ROI documents fall into three technical tiers:

- **Fillable/interactive PDFs**: 50 orgs (26%) provide forms with fillable fields — text inputs, checkboxes, or dropdowns that patients can complete digitally. These cluster at technical accessibility scores of 4–5.
- **Flat digital PDFs (print-and-fill)**: ~90 orgs (47%) publish born-digital PDFs with a text layer but zero fillable fields. Despite being digitally created, they require printing and handwriting.
- **Image-only scans / no form**: 50 orgs (26%) serve scanned paper forms or have no usable form at all (technical scores of 1–2). Eight orgs score 1, meaning no usable digital form exists.

Nearly three-quarters of all forms offer no digital completion pathway — patients must print, handwrite, and physically deliver.

## Page Counts and Field Counts

Most forms are compact: **98 orgs (52%) fit on a single page**, and 75 (39%) use two pages. Only 4 orgs exceed 3 pages. Outliers include **El Rio Health** (16 pages — a compliance booklet, not an ROI form), **Peoples Health Centers** (10 pages — a mislabeled NPP), and **Anaheim Global Medical Center** (9 pages).

Field counts range from **7 to 103**, with a median of 20 and a mean of 26.5. At the high end, **NewYork-Presbyterian Hospital** packs 103 fillable fields into 2 pages, followed by **Texas Oncology** (95 fields, 3 pages) and **A.O. Fox Hospital** (83 fields, 2 pages) — all interactive PDFs from large or teaching-affiliated institutions. Low-end forms barely collect demographics and a signature.

## Digital-First vs. Scanned Paper

**65 orgs (34%)** qualify as digital-first (technical score ≥ 4), meaning patients can complete and often submit electronically. Five achieve a perfect score of 5: **AdventHealth Hendersonville**, **Flowers Hospital**, **Gastro Florida**, **Kings Daughters Medical Center Brookhaven**, and **Labette Health** — all offering fully online workflows via vendors like Swellbox/Datavant, Sharecare, or Formstack.

At the opposite pole, **50 orgs (26%)** serve image-only scans or have no form at all. **Troy Regional Medical Center** is the worst artifact: a grayscale 200 DPI JPEG scan with no text layer, served over unencrypted HTTP. **Canton-Potsdam Hospital** provides an archived OCA-960 form with a garbled, inaccessible text layer.

## Layout, Typography, and Visual Design

**165 of 190 orgs (87%)** have forms rated as having a clear layout, suggesting that basic document organization is a near-universal norm even when technical quality lags. However, only **91 (48%)** use plain language throughout — the rest mix accessible language with dense legal boilerplate.

A striking pattern: **Broward Health** serves its English-language form as an image-only scan, while the Spanish, Creole, and Portuguese versions are born-digital PDFs — the primary language version is paradoxically the worst artifact. The form's footer referencing "ADDRESSOGRAPH" and carbon-copy routing confirms it was never modernized from its paper origins.

## Instructions and Patient Guidance

Only **82 orgs (43%)** include any form of instructions. **Owensboro Health** stands out with a dedicated 2-page companion instruction document written in plain language, explaining each section of the authorization form — an uncommon and genuinely patient-friendly practice. Most orgs that do include instructions embed them minimally within the form itself.

Teaching hospitals lead on instructions (reflecting their overall higher technical scores: mean 3.27), while critical access hospitals (mean 2.79) and FQHCs (mean 2.68) lag behind.

## Multilingual Support

**63 orgs (33%)** offer forms in languages beyond English. Spanish is dominant (63 orgs), with much smaller representation for Haitian Creole (3), Portuguese (2), Chinese (2), Somali (2), and Hmong (1). Eight orgs offer 3+ languages: **Broward Health** leads with four (English, Spanish, Creole, Portuguese), while **Prevea Health** unusually offers Hmong and Somali alongside Spanish, reflecting its Wisconsin patient population. **Flowers Hospital** earns a notable mention for a professionally translated Spanish version with identical structure and field count — not a machine-generated afterthought.

## Patterns by Organization Type

Teaching hospitals are the most likely to offer fillable forms (40%), followed by community hospitals (29%). Critical access hospitals are the least likely (10%). System-affiliated orgs dramatically outperform independents: **43% of major-system orgs** provide fillable forms versus only **19% of independents** and **14% of regional systems**. This suggests that large health systems invest in standardized, higher-quality form templates that cascade to member facilities.

## Notable Examples

**Best craftsmanship**: Flowers Hospital's single-page form packs 66 fillable fields with a logical seven-section flow, including a password-protected removable media option and a co-equal Spanish translation. NewYork-Presbyterian's 103-field form covers 11 campuses with granular sensitive-information authorization compliant with New York state law. Owensboro Health's EHI Export option with named partner organizations and TSV format specification is well ahead of industry norms.

**Worst craftsmanship**: Troy Regional Medical Center's unencrypted HTTP scan with no text layer represents a form frozen in time. El Rio Health publishes a 16-page compliance booklet but no actual records request form. Aaron E. Henry CHC and Franklin Primary Health Center publish no ROI form of any kind.
