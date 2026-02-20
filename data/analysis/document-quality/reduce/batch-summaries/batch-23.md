# Document Quality Deep Dive — Batch 23

## Batch Composition

This batch contains **2 organizations** with contrasting profiles:

| Org | Facility Type | Ownership | Affiliation | Region | State | Beds |
|-----|--------------|-----------|-------------|--------|-------|------|
| Decatur County Hospital | Critical access hospital | Government | Independent | Midwest | IA | 25 |
| Samaritan Lebanon Community Hospital | Community hospital | Nonprofit | Regional system (Samaritan Health Services) | West | OR | 25 |

Both are small (25-bed) facilities in different governance models: one independent and government-owned, the other part of a regional nonprofit system. This pairing illustrates how system affiliation shapes document quality even when bed counts are identical.

## Fillability and Interactivity

- **Fillable/interactive PDF: 1 of 2** — Decatur County Hospital's single form is a born-digital, fillable PDF with **61 AcroForm interactive fields**. Created with Acrobat PDFMaker for Word, nearly every blank can be completed electronically — demographics, record-type checkboxes, purpose options, sensitive-records initials, fee agreement, and signatures. However, AcroForm field names are empty, which would hinder screen reader accessibility.

- **Flat (non-fillable) PDF: 1 of 2** — Samaritan Lebanon's forms are digitally authored with clean text layers but have **zero fillable fields** despite being digital in origin. Patients must print and complete by hand. This is a clear missed opportunity — the PDFs were created digitally but never had form fields added.

- **Image-only scans: 0 of 2** — Neither organization relies on scanned paper forms.

**Tally: 1 fillable PDF, 1 flat digital PDF, 0 image-only scans.**

## Page Counts and Field Counts

| Org | Pages | Fillable Fields | Total Forms |
|-----|-------|----------------|-------------|
| Decatur County Hospital | 1 | 61 | 1 |
| Samaritan Lebanon Community Hospital | 2 (+ instruction page) | 0 | 5 (2 ROI forms, 2 EHI export forms, 1 NPP) |

Decatur County crams everything — 61 fields, 13 record-type checkboxes, and multiple legal paragraphs — onto a single page, creating visual density that challenges readability. Samaritan's 2-page form with a matching instruction sheet offers more breathing room but no electronic completion capability.

## Digital-First vs. Scanned Paper

Both organizations' forms are **digital-first** — neither relies on scanned paper documents. Decatur County's PDF was created with Acrobat PDFMaker for Word; Samaritan's forms are cleanly authored digital documents. This is notable for two small rural facilities, suggesting that even resource-constrained organizations are producing born-digital documents.

## Layout, Typography, and Visual Design

**Decatur County Hospital**: The single-page format is admirably compact but visually dense. The logical flow is sound (patient identity → recipient → dates → record types → purpose → sensitive records → fees → legal text → signature), but the second half descends into dense regulatory prose citing 42 CFR Part 2 and Iowa Code chapters 228 and 141. No section headers or visual hierarchy differentiate form regions.

**Samaritan Lebanon Community Hospital**: The 2-page form uses numbered sections (1–9) with clear headers, creating a well-organized layout. The matching instruction page on page 2 provides additional guidance. Record-type granularity is strong with 11 specific checkboxes plus an "Other" field. The visual design is functional and clean, though unremarkable.

## Instructions

- **Decatur County Hospital**: **No instructions provided.** The form lacks submission guidance — while a mailing address exists for revocation, there is no explicit statement of how to submit the completed form (no fax number, email, or department name on the form itself).

- **Samaritan Lebanon Community Hospital**: **Instructions included and reasonably clear.** A dedicated instruction page accompanies the form, and submission channels are specified (mail, fax 541-768-9363, email SHSHIMROI@samhealth.org). Processing time is stated as up to 30 days.

**Tally: 1 of 2 organizations provides adequate instructions.**

## Multilingual Support

- **Decatur County Hospital**: English only. No multilingual support.
- **Samaritan Lebanon Community Hospital**: **English and Spanish** for all forms — both the standard ROI authorization and the EHI export request form are available in both languages. This is a meaningful commitment to language access.

**Tally: 1 of 2 organizations offers multilingual forms.**

## Notable Examples

**Exceptionally good craftsmanship — Samaritan Health Services (Samaritan Lebanon Community Hospital)**: The system's dedicated **Computer Readable EHI Export Request form** is exceptionally rare across the study. Offering a separate form specifically for machine-readable health information export demonstrates genuine 21st Century Cures Act awareness. Combined with bilingual availability, six delivery format options (MyChart, email, paper, CD, fax, or custom), transparent three-tier fee disclosure ("No Charge" for patient requests), and email submission acceptance, this organization sets a high bar for patient-centered design. The main gap — zero fillable fields — prevents it from being truly exemplary.

**Mixed craftsmanship — Decatur County Hospital**: The 61-field fillable PDF is technically impressive for a small rural CAH, demonstrating that even a 25-bed government hospital can produce interactive digital forms. However, the form collects **Social Security Numbers** (unnecessary and risky), leaves the **fee amount blank** (asking patients to agree to unknown costs), offers **no delivery format options** (violating HIPAA's form-and-format requirement intent), and hasn't been reviewed since **March 2018** — predating the Cures Act information blocking rules by three years.

## System Affiliation Effect

This batch starkly illustrates how system affiliation shapes document quality. Both hospitals have 25 beds, but Samaritan Lebanon benefits from Samaritan Health Services' system-level resources: bilingual forms, multiple submission channels, a dedicated EHI export pathway, and transparent fee policies. Decatur County, operating independently, produced a technically functional fillable PDF but lacks the breadth and polish that system resources provide. The tradeoff: Decatur County's form was easy to find, while Samaritan's downloadable forms were buried in collapsed accordion sections requiring browser DevTools to discover — suggesting system websites optimize for portal funneling over form accessibility.
