# Document Quality Deep Dive — Batch 25

## Scope

This batch covers 190 organizations with synthesis data (of 195 in the batch; 5 lacked synthesis files). The sample spans all facility types: community hospitals (80), teaching hospitals (30), critical access hospitals (29), physician practices (26), and FQHCs (25).

## Fillability and Interactivity

Only **50 of 190 forms (26%)** are fillable/interactive PDFs. The remaining 140 (74%) are flat, print-and-fill documents. Of those flat forms, approximately 133 appear to be digitally authored (word-processor-origin PDFs with text layers) but exported without interactive fields — a widespread missed opportunity. Four forms are likely image-only scans with zero fields and no text layer, and 5 organizations offer portal-only pathways with no downloadable PDF at all.

Fillability varies sharply by organizational characteristics. Teaching hospitals lead at 40% fillable, followed by community hospitals (29%) and for-profits (29%). Critical access hospitals trail badly at just 10%. Major health systems produce fillable forms at 43%, more than double the rate of independents (19%) or regional systems (14%), suggesting that system-level standardization drives PDF quality. Major-system orgs also score higher overall (mean 3.57 vs. 3.10 for independents).

## Page Counts and Field Counts

The typical ROI form is short: **median 1 page, mean 1.7 pages**. The distribution is heavily right-skewed — 98 forms are single-page and 75 are two pages, with outliers at 8 pages (1), 9 pages (1), 10 pages (1), and 16 pages (1). Five organizations had zero pages, indicating no downloadable form exists.

Among the 50 fillable forms, field counts range from **7 to 103**, with a mean of 25.5. NewYork-Presbyterian Hospital leads with 103 fillable fields across a 2-page form — an impressively thorough digital experience. Other high-field-count standouts include Texas Oncology (95 fields, 3 pages), A.O. Fox Hospital (83 fields, 2 pages), and Massachusetts General Hospital (78 fields, 2 pages). Seven forms report zero fillable fields, confirming their flat/scan status.

## Digital-First vs. Scanned

The overwhelming majority of forms (roughly 95%) are digitally authored rather than scanned from paper. True image-only scans are rare — approximately 4 of 190 forms. However, "digitally authored" does not mean "digitally usable": 133 forms were clearly created in word processors or design software but lack any interactive fields, requiring patients to print, handwrite, and return them by fax or mail. Only 48 forms (25%) achieve a genuinely digital-first workflow where patients can type directly into form fields.

## Layout, Typography, and Visual Design

Layout quality is generally good: **165 of 190 forms (87%)** have clear, well-organized layouts. Most forms follow a logical top-to-bottom flow (patient info → authorization details → signature). However, only **91 (48%)** use plain language, meaning over half rely on legal or clinical jargon. The combination of all three quality markers — clear layout, plain language, and instructions — is present in only 48 forms (25%).

## Instructions

Instructions are included in **82 forms (43%)**. Teaching hospitals are most likely to include them (73%), while critical access hospitals almost never do (14%). FQHCs and physician practices fall in between at 32% and 27%. When present, instructions range from brief one-liners to detailed guidance on submission channels and expected timelines.

## Multilingual Support

**63 organizations (33%)** offer some multilingual support. Spanish is universal among multilingual forms (all 63 include it). Beyond Spanish, support is rare: Haitian Creole (3 orgs, including Broward Health and Memorial Healthcare System in South Florida), Portuguese (2), Chinese (2, including NewYork-Presbyterian), Somali (2, in Minnesota), and Hmong (1 — Prevea Health in Wisconsin). FQHCs lead in multilingual prevalence (48%), reflecting their diverse patient populations, while critical access hospitals trail at 10%.

## Notable Examples

**Best craftsmanship:** Flowers Hospital (Dothan, AL) earned the batch's only A grade (4.65). Its single-page, 66-field fillable PDF with co-equal Spanish translation, plain language, clear instructions, and a Swellbox digital portal represents what a patient-centered ROI form can look like.

**Worst craftsmanship:** Neshoba General Hospital and Aaron E. Henry Community Health Center (both F grades, 1.20) provide no online form, no instructions, and no digital pathway whatsoever. El Rio Health (F, 1.45) technically has a 16-page document but it is not an ROI form and includes no fillable fields or instructions. Betty Jean Kerr People's Health Centers (F, 1.35) similarly fails to provide any usable online form despite publishing a 10-page document.

**High-field-count engineering:** NewYork-Presbyterian's 103-field trilingual form (English/Spanish/Chinese) represents the technical ceiling, though its generic third-party authorization framing rather than a dedicated patient-access form costs it in patient-centeredness.

## Grade Distribution

| Grade | Count | Percentage |
|-------|-------|------------|
| A     | 1     | 0.5%       |
| B     | 81    | 42.6%      |
| C     | 94    | 49.5%      |
| D     | 9     | 4.7%       |
| F     | 5     | 2.6%       |

The modal form earns a C — functional but with significant gaps in fillability, instructions, or patient-centeredness. Nearly half the sample clusters in the B range, indicating adequate but improvable document quality. The near-absence of A grades (just 1 of 190) confirms that truly excellent ROI form craftsmanship remains exceptional.
