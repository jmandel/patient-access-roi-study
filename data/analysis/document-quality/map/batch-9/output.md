# Document Quality Deep Dive — Batch 9

## Batch Composition

This batch contains **2 organizations** with sharply contrasting profiles:

| Org | Facility Type | Ownership | Affiliation | Region | State | Beds |
|-----|--------------|-----------|-------------|--------|-------|------|
| DHR Health | Community hospital | For-profit | Regional system | South | TX | 500 |
| East Georgia Healthcare Center | FQHC | Nonprofit | Independent | South | GA | N/A |

Both are Southern facilities, but they differ fundamentally in scale, ownership, and mission — a 500-bed physician-owned hospital system in the Rio Grande Valley vs. a small independent federally qualified health center serving 13 rural counties in southeast Georgia.

## Fillability and Interactivity

- **Fillable PDF with limitations: 1 of 2** — DHR Health's English form (form-1.pdf) contains 37 fillable field annotations and a text layer, but the fields lack programmatic names, undermining screen reader and auto-fill functionality. The form appears to be a designed layout with fields overlaid as an afterthought rather than a digital-first document.

- **Image-only scan with interactive platform backup: 1 of 2** — East Georgia Healthcare Center's standalone PDF is image-only with no text layer and zero fillable fields. However, the same form is available through RightSignature, a third-party e-signature platform, where it becomes fully interactive with fillable fields and electronic signature capability. The platform imposes a gate — patients must enter their name and email before even viewing the form content.

- **Image-only scan (flat): 1 secondary form** — DHR Health's Spanish version (form-2.pdf) is a flat image-only scan produced on a Konica Minolta copier, with no text layer, no fillable fields, and no assistive technology support.

**Tally: 1 partially fillable PDF (limited field metadata), 2 image-only scans, 1 interactive platform-hosted version. Zero fully accessible digital-first PDFs.**

## Page Counts and Field Counts

| Org | Form | Pages | Fillable Fields | Total Fields (est.) |
|-----|------|-------|----------------|-------------------|
| DHR Health | English (form-1) | 2 | 37 (unnamed) | ~37 |
| DHR Health | Spanish (form-2) | 2 | 0 (image scan) | ~37 (same content) |
| EGHC | English (form-1) | 1 | 0 (image) / interactive via RightSignature | ~10 |
| EGHC | Spanish (form-2) | 1 | 0 (image) / interactive via RightSignature | ~10 |

Page counts range from 1–2 pages. Field counts vary dramatically: DHR Health's 37-field form is nearly 4× more complex than EGHC's 10-field form, reflecting DHR's sprawling bidirectional authorization structure with ~20 record-type checkboxes, psychiatric/substance abuse consent sections, and witness lines.

## Digital-First vs. Scanned Paper

Neither organization produced a truly digital-first form:

- **DHR Health**: The English form has graphical elements but was not built for digital use — fields were added atop the design. The Spanish version is a photocopied scan, creating a **two-tier accessibility gap**.
- **EGHC**: Standalone PDFs are captured images, but RightSignature hosting represents a genuine digital workflow investment — undercut by hosting the wrong form.

**Tally: 0 digital-first, 1 hybrid (digital fields on legacy layout), 1 platform-hosted but image-captured PDF.**

## Layout, Typography, and Visual Design

- **DHR Health**: Cramped, checkbox-heavy design with multiple columns and dense legal language. The psychiatric/substance abuse/HIV consent section is impenetrable. The form still carries its former branding ("Doctors Hospital at Renaissance"), dating it visually.
- **EGHC**: Clean single-page layout with clear visual hierarchy — letterhead, patient fields, 17-option checklist, legal disclaimer, and signature block. Despite being the wrong form, it is well-organized.

**EGHC demonstrates better design despite being the smaller, lower-resourced organization.**

## Instructions and Clarity

Neither form includes instructions:

- **DHR Health**: No guidance on which section to complete for patient self-access (vs. third-party release). The bidirectional "OR" structure assumes the reader knows which direction applies. No submission instructions beyond listing fax and mail addresses.
- **EGHC**: No submission instructions on the form itself. No guidance on how to return the completed authorization. The Notice of Privacy Practices mentions the right to "inspect and copy medical information" but provides no actionable steps.

**Tally: 0 of 2 orgs include form instructions.**

## Multilingual Support

Both organizations offer **bilingual (English and Spanish) forms** — a notable strength given their patient populations:

- **DHR Health** serves the Rio Grande Valley (~90% Hispanic/Latino population). However, the Spanish form is materially inferior — an image-only scan with spelling/grammar errors, a bundled liability waiver not present in the English version, and a witness signature requirement absent from the English form. This creates an equity gap where Spanish-speaking patients receive a worse experience.
- **EGHC** serves rural southeast Georgia and provides equivalent Spanish-language forms through RightSignature, appropriate for an FQHC serving a diverse community.

**Tally: 2 of 2 orgs offer bilingual forms, though DHR Health's Spanish version is significantly degraded.**

## Notable Examples

**Worst craftsmanship — DHR Health's Spanish form**: A decade-old (August 2015) photocopied scan with no text layer, spelling errors, a bundled liability waiver asking patients to release the hospital from "all legal liability and any harm," and a witness requirement not imposed on English-speaking patients. This is the clearest example in this batch of a language-equity failure disguised as accommodation.

**Best infrastructure, wrong application — EGHC**: Invested in RightSignature e-signature platform for electronic form completion — a genuinely forward-thinking digital workflow — but applied it exclusively to an incoming-records-transfer form. A patient seeking their own records from EGHC would find no applicable form anywhere on the website, despite the organization having built the technical capability to serve them.

## Batch Summary

Both organizations share a common deficiency: neither provides a dedicated patient self-access form, offering only generic or misdirected authorization forms. Document quality is mediocre across the batch — no truly digital-first PDFs, no included instructions, and significant quality gaps between English and Spanish versions. The bright spots (bilingual availability, e-signature capability, easy findability) are real but undermined by fundamental pathway and content problems. The smaller FQHC (EGHC) produced a cleaner, simpler document than the 500-bed hospital system (DHR Health), suggesting that document quality does not necessarily scale with organizational resources.
