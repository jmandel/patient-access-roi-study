# Document Quality Deep Dive — Batch 10

## Batch Composition

This batch contains **8 organizations** spanning diverse facility types, ownership models, and regions:

| Org | Facility Type | Ownership | Affiliation | Region | State |
|-----|--------------|-----------|-------------|--------|-------|
| Myrtue Medical Center | Critical access hospital | Nonprofit | Independent | Midwest | IA |
| Neshoba General Hospital | Community hospital | Government | Independent | South | MS |
| Vanderbilt University Medical Center | Teaching hospital | Nonprofit | Major system | South | TN |
| Esse Health | Physician practice | For-profit | Independent | Midwest | MO |
| La Clínica de La Raza | FQHC | Nonprofit | Independent | West | CA |
| Bayshore Medical Center | Community hospital | Nonprofit | Major system (HMH) | Northeast | NJ |
| The Iowa Clinic | Physician practice | For-profit | Independent | Midwest | IA |
| GI Alliance | Physician practice | For-profit | Independent | South | TX |

## Fillability and Interactivity

The dominant pattern is **non-fillable PDFs**: 7 of 8 organizations' primary PDF forms have zero interactive fields, requiring print-and-handwrite workflows. Only Esse Health's form has field annotations (28 reported), though even these may be non-functional based on empty field-name arrays. The breakdown:

- **Fillable/interactive PDFs: 0 of 8** — No organization offers a genuinely fillable, form-field-enabled PDF. Esse Health's form metadata reports annotations but behaves as a print-and-write document.
- **Flat (print-and-fill) PDFs: 5 of 8** — Myrtue, GI Alliance, Bayshore (CMR-003), Vanderbilt, and Esse Health all provide digitally-authored PDFs with text layers but static blanks/underscores.
- **Image-only scans: 1 of 8** — Vanderbilt's current form (VMR 3017, dated 10/2023) is an image-only scan with only 61 characters of extractable text — surprising for a major academic medical center publishing a 2023-dated form.
- **Portal-only (no current PDF): 1 of 8** — The Iowa Clinic has fully transitioned to Swellbox/Datavant, with historical PDFs recoverable only via Wayback Machine.
- **No form online: 1 of 8** — Neshoba General Hospital publishes no ROI form whatsoever.

## Page Counts and Field Counts

| Org | Pages | Estimated Fields |
|-----|-------|-----------------|
| Myrtue Medical Center | 1 | 18 |
| Vanderbilt (current form) | 2 | 22 |
| Esse Health | 1 | 15 |
| Bayshore (CMR-003) | 2 | 25 |
| GI Alliance | 1 | 12 |
| The Iowa Clinic (historical) | 1 | 15 |
| Neshoba General | 0 | 0 |
| La Clínica de La Raza | 0 (NPP only: 8pp) | 0 |

Page counts range from **0 to 2** for actual ROI forms — heavily concentrated at **1 page** (4 of 6 forms). The median field count for organizations with forms is approximately 17. GI Alliance's 12-field form is the leanest; Bayshore's 25-field form is the most comprehensive.

## Digital-First vs. Scanned Paper

- **Digital-first/born-digital: 4** — Myrtue, Esse Health, GI Alliance, and Bayshore all have PDFs created in word processing or publishing software with full text layers.
- **Image-only scans: 1** — Vanderbilt's primary form is a scanned paper document despite its 2023 revision date.
- **Portal-first (no PDF): 1** — The Iowa Clinic's Swellbox workflow is natively digital.
- **No document: 2** — Neshoba and La Clínica have no ROI form to classify.

Ironically, both Neshoba and Bayshore demonstrate the *capability* to produce fillable PDFs elsewhere (54-field employer and amendment forms, respectively) — yet neither applied this to their ROI forms.

## Layout, Typography, and Visual Design

Forms are generally **adequate but uninspired**, following a standard top-to-bottom authorization flow: demographics → scope → purpose → sensitive information → legal → signature. Vanderbilt's is the most polished visually with numbered sections, but its image-only format undermines the investment. GI Alliance's is the weakest — no headers, no instructional text, and blank fill-ins for provider identity that leave patients guessing.

## Instructions and Submission Guidance

Instructions are **alarmingly scarce**. Only 2 of 8 organizations include instructions:

- **Vanderbilt**: Provides fee schedule, 30-day timeline, and submission methods.
- **Bayshore/HMH**: Includes a comprehensive contact directory with per-campus fax numbers, though the form itself never explicitly tells patients *how* to submit.

The most egregious omission belongs to **GI Alliance**: zero submission instructions — no fax, no address, no email. A patient who completes the form has no way to know where to send it. **Neshoba** and **La Clínica** fail more fundamentally — no form means no instructions. La Clínica's only guidance is buried in a 2012 NPP directing patients to mail a letter to a P.O. Box.

## Multilingual Support

Multilingual availability is **better than expected** in this batch: 4 of 8 organizations (50%) offer non-English materials:

- **Myrtue Medical Center**: English + Spanish — notable for a rural Iowa critical access hospital with 25 beds.
- **Vanderbilt**: English + Spanish PDF forms.
- **Bayshore/HMH**: Spanish companion authorization form (CMR-003S).
- **La Clínica de La Raza**: NPP in English, Spanish, and Chinese — though the lack of an ROI form renders this moot for records access.

No organization offers forms in languages beyond Spanish and Chinese, despite serving diverse patient populations.

## Notable Examples

**Best craftsmanship — Myrtue Medical Center**: A small rural critical access hospital producing a well-organized, single-page, recently revised (June 2025) form with bilingual availability, MyChart and encrypted email delivery options, and careful 42 CFR Part 2 substance use handling. The only gap is fillable fields — a fixable shortcoming that, if addressed, would make this form competitive with major academic centers.

**Worst absence — Neshoba General Hospital (F grade, 1.2/5)**: No ROI form, no Medical Records page, no NPP, no instructions for requesting records online. A patient visiting this website would find zero guidance on exercising their HIPAA Right of Access.

**Most ironic — Vanderbilt University Medical Center**: A leading academic medical center whose 2023 form is an image-only scan with zero fillable fields — while simultaneously offering a differentiated Swellbox portal and transparent capped fees. The portal compensates, but the PDF is below the standard expected of this institution.

## Summary

This batch reveals the bifurcated state of ROI document quality. The "typical" form is a 1-page, non-fillable, digitally-authored PDF with ~17 fields, English-only, no instructions, and generic authorization framing. Fillable fields are absent across the board (0 of 8), even among organizations with demonstrated capability. Instructions are the weakest dimension — most forms fail to answer "how do I return this?" Multilingual support (50%) is a relative bright spot, though concentrated in Spanish. The two organizations with no online form (Neshoba, La Clínica) represent the most severe failure: the form that doesn't exist cannot serve any patient.
