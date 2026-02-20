# Document Quality Deep Dive — Batch 18

## Batch Composition

This batch contains **2 organizations** from contrasting settings:

| Org | Facility Type | Ownership | Affiliation | Region | State | Beds |
|-----|--------------|-----------|-------------|--------|-------|------|
| Southwell (Tift Regional Health System) | Community hospital | Nonprofit | Regional system | South | GA | 181 |
| Decatur County Hospital | Critical access hospital | Government | Independent | Midwest | IA | 25 |

One is a mid-size regional system serving rural South Georgia; the other is a 25-bed county-owned critical access hospital in rural Iowa. Both serve rural populations, but they diverge sharply in organizational complexity and document quality.

## Fillability and Interactivity

- **Fillable/interactive PDF: 1 of 2** — Decatur County Hospital's single-page form is a born-digital fillable PDF with **61 AcroForm interactive fields**. Nearly every blank — demographics, record type checkboxes, purpose options, sensitive-records initials, fee agreement, and signatures — can be completed electronically. This is a notable technical achievement for a 25-bed rural hospital. However, AcroForm field names are empty, which would hinder screen reader accessibility.

- **Flat (print-and-fill) PDF: 1 of 2** — Southwell's primary form (form-1, "TRHS Authorization to Release/Obtain PHI") has a text layer and logical numbered structure but **zero fillable fields**. All checkboxes and text fields are static, requiring patients to print and complete by hand.

- **Image-only scan: 1 additional form** — Southwell's form-2 is a degraded image-only scan (produced on a Canon copier, uploaded July 2025) with no text layer and no OCR. It appears to be a revised version of form-1 but represents a clear regression in document quality. It cannot be filled, searched, or read by assistive technology.

**Tally: 1 fillable PDF, 1 flat PDF, 1 image-only scan (across 2 orgs with 5 total documents).**

## Page Counts and Field Counts

| Org | Primary Form Pages | Field Count | Total Documents |
|-----|-------------------|-------------|-----------------|
| Decatur County Hospital | 1 | 61 (fillable) | 1 |
| Southwell | 2 | 18 (non-fillable) | 4 (plus 1 entity reference list) |

Decatur County packs 61 fields onto a single page — admirably compact but visually dense. Southwell's primary form uses 2 pages, though the second contains only two short paragraphs and signature lines, suggesting consolidation is possible. Southwell also maintains separate forms for hospital (TRHS) vs. ambulatory (SWA) entities, fragmenting the patient experience.

## Digital-First vs. Scanned Paper

- **Digital-first: 1 of 2** — Decatur County Hospital's form was created with Acrobat PDFMaker for Word, making it a genuinely born-digital document with full text layer and interactive fields.
- **Paper-oriented: 1 of 2** — Southwell's primary forms have text layers (suggesting digital origin) but zero fillability, placing them firmly in the print-and-mail paradigm. The existence of the image-only form-2 scan alongside the digital form-1 suggests the organization is moving *backward* in document quality over time.

## Layout, Typography, and Visual Design

**Decatur County Hospital**: Logical flow (patient identity → recipient → dates → record types → purpose → sensitive records → fees → legal text → signature) on a single page. The first half uses straightforward language; the second half descends into dense regulatory prose citing 42 CFR Part 2 and Iowa Code chapters. Record-type granularity is strong: 13 specific categories (Discharge Summary, H&P, Consultation, Radiology, Progress Notes, OR Report, etc.) plus "Other" and "Review only." The density of 61 fields on one page likely challenges readability.

**Southwell**: Clear numbered structure (8 sections) with good record-type granularity — 10 categories with individual date range fields and delivery options (Paper, CD, Electronic Delivery). Language is moderately legalistic with dense compliance-driven text in the sensitive information and revocation sections. Functional but not patient-friendly.

## Instructions

Neither organization includes instructions on their forms. **0 of 2** have instructions for completing or submitting the form. Southwell's forms notably lack any submission guidance — no fax number, email address, or mailing instructions for submitting the completed authorization (the address in Section 6 relates to revocation, not submission). A patient completing either organization's form at home would have to independently figure out where and how to send it.

## Multilingual Support

**0 of 2** offer multilingual forms. Both organizations provide English-only documents. Given their rural service areas (South Georgia and rural Iowa), this may reflect demographics, but it still presents a barrier for non-English-speaking patients.

## Notable Examples

**Best craftsmanship — Decatur County Hospital**: A 25-bed county hospital in rural Iowa producing a born-digital fillable PDF with 61 interactive fields is a standout. This small government facility demonstrates that technical document quality is not a function of organizational size or resources. The comprehensive record-type granularity (13 categories) and explicit conditioning prohibition are additional bright spots. The form is marred by SSN collection, a blank fee amount, and an 8-year-old review date (March 2018), but as a technical artifact, it outperforms many larger institutions.

**Worst craftsmanship — Southwell form-2**: An image-only scan uploaded in 2025 that *replaces* a readable digital form represents document quality moving in the wrong direction. No text layer, no fillable fields, degraded readability, and "Paper" pre-checked as the delivery method — this is a regression from an already paper-oriented baseline.

**Structural concern — Southwell's fragmented landscape**: Patients must navigate 4 downloads on the medical release page without clear differentiation, determine whether the TRHS or SWA form applies, and figure out the relationship between overlapping forms (form-1 vs. form-2). The witness signature requirement on all Southwell forms — not required by HIPAA — adds a real obstacle for patients completing forms independently at home.
