# Document Quality Deep Dive — Batch 24

## Batch Composition

This batch contains **2 organizations**, both community hospitals but representing starkly different scales and affiliations:

| Org | Facility Type | Ownership | Affiliation | Region | State | Beds |
|-----|--------------|-----------|-------------|--------|-------|------|
| Riverside Community Hospital | Community hospital | For-profit | Major system (HCA) | West | CA | 517 |
| Columbus Community Hospital | Community hospital | Nonprofit | Independent | Midwest | NE | 47 |

The contrast is instructive: a 517-bed HCA-affiliated trauma center vs. a 47-bed locally governed rural hospital. Together they hold 4 form documents and illustrate how system affiliation and scale shape document quality.

## Fillability and Interactivity

- **Fillable/interactive PDFs: 2 of 4 forms.** Riverside's current English (form-2) and Spanish (form-3) authorization forms each contain 52 interactive fields — checkboxes, radio buttons, and text inputs — enabling full on-screen completion. These are system-level HCA corporate templates (HCA-840-00434).

- **Flat (print-and-fill) PDFs: 2 of 4 forms.** Columbus Community Hospital's sole form (MR-1) is a flat PDF with zero fillable fields; all blanks are printed underscores requiring handwriting. Riverside's older form-1 (a 5-page legacy version hosted by third-party vendor Legal Image) is also non-fillable.

- **Image-only scans: 0 of 4.** All four documents have text layers — none are photographed paper.

**Org-level tally (high-watermark): 1 of 2 orgs (Riverside) has fillable forms; 1 of 2 (Columbus) is entirely flat/non-fillable.**

## Page Counts and Field Counts

| Form | Pages | Fillable Fields |
|------|-------|----------------|
| Riverside form-2 (current, English) | 1 | 52 |
| Riverside form-3 (current, Spanish) | 1 | 52 |
| Riverside form-1 (legacy) | 5 | 0 |
| Columbus form-1 | 1 | 0 |

Page counts range from **1 to 5**. Field counts range from **0 to 52**. The median current form is a single page. Riverside's 52-field count is notably high — among the most technically complete fillable forms in the study. Columbus's zero fields represent the other end of the spectrum.

## Digital-First vs. Scanned Paper

- **Digital-first: 3 of 4 forms.** Riverside's two current forms and Columbus's form all have native text layers and were created digitally. Riverside's current forms (form-2, form-3) are genuinely digital-first — designed for on-screen interaction with structured fields.

- **Digitized paper: 1 of 4.** Riverside's legacy form-1, while containing a text layer, was produced via a third-party ROI vendor and reads as a converted paper document rather than a born-digital design.

- **Scanned images: 0 of 4.** No forms in this batch are image-only scans.

## Layout, Typography, and Visual Design

**Riverside (form-2/form-3):** Clean, professionally designed single-page layout organized into three labeled sections (A: authorization details, B: marketing/PHI sale, C: signatures). Sixteen granular record-type checkboxes plus an "All Pertinent Records" option provide structured selection. The single-page format is efficient but dense — a tradeoff inherent in fitting 52 fields onto one page. Typography is consistent and readable. A rare USCDI release option is included, though with jargon ("Requires Direct Address or National Provider Identifier") that would confuse most patients.

**Columbus (form-1):** Logical top-to-bottom flow on a single page: patient identification → recipient → treatment dates → record-type checkboxes (9 options) → purpose checkboxes (6 options) → sensitive information → signatures. However, internal filing codes clutter the footer ("Found in Policy Manager/Consent Forms," page "42"), revealing that this is an internal document management artifact that was never cleaned up for patient-facing use. The form dates to December 2014 — over 11 years old at evaluation.

## Instructions and Clarity

**Neither organization includes instructions with its current form.** Riverside's legacy form-1 had a 2-page instruction set, but this was retired along with the form itself. Columbus's form contains no guidance text. Both organizations use formal, clinical language. Columbus includes unexplained jargon ("H & P"). Neither form explains to patients how to use it for self-access — both are structured as third-party release authorizations.

## Multilingual Support

- **Riverside: Yes.** A fully equivalent Spanish-language form (form-3) with identical structure and 52 fillable fields provides genuine language access — significant for Riverside, CA's majority-Hispanic community.

- **Columbus: No.** English only.

**Tally: 1 of 2 orgs offers multilingual support.**

## Notable Examples

**Best craftsmanship — Riverside Community Hospital:** The current HCA forms demonstrate what system-level standardization can achieve: 52 fillable fields, English/Spanish parity, a forward-looking USCDI option, and multiple delivery formats (paper, electronic media, encrypted/unencrypted email). The professional layout reflects corporate design resources. The persistent grammar error ("obtain a copy the information" — missing "of") across all form versions is a minor blemish on an otherwise polished artifact.

**Worst craftsmanship — Columbus Community Hospital:** A zero-field flat PDF from 2014 with internal document-management codes visible to patients, no instructions, no multilingual support, and an ambiguous witness signature line that may deter home completion. The form is functional but represents a pre-digital, compliance-oriented approach. Its hosting on a legacy domain (`columbushosp.org`) not linked from the current website (`columbusch.com`) compounds the problem: a patient might not even find it without a search engine.

## Pattern: System Affiliation Drives Quality

Even with just two orgs, the pattern is clear. Riverside benefits from HCA's corporate form infrastructure: professionally designed, fillable, multilingual, and consistently branded. Columbus, operating independently with 47 beds and local governance, produces a form that works but hasn't been updated in over a decade. The gap isn't effort — it's resources. Small independent hospitals lack the design, IT, and compliance staff to produce and maintain high-quality digital forms. This is the document-quality version of the digital divide.
