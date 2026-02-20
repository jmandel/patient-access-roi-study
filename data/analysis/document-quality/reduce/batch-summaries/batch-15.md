# Document Quality Deep Dive — Batch 15

## Batch Composition

This batch contains **2 organizations** representing sharply contrasting organizational profiles:

| Org | Facility Type | Ownership | Affiliation | Region | State | Beds |
|-----|--------------|-----------|-------------|--------|-------|------|
| Merit Health Central | Community hospital | For-profit | Major system (CHS) | South | MS | 319 |
| Heartland Community Health Center | FQHC | Nonprofit | Independent | Midwest | KS | N/A |

One is a system-affiliated for-profit hospital with corporate-standardized forms; the other is a small independent safety-net clinic producing its own materials. The contrast illuminates how organizational resources and system affiliation shape document quality.

## Fillability and Interactivity

- **Fillable/interactive PDF: 1 of 2** — Merit Health Central's HIM-1406 form has **66 fillable fields**, an exceptionally high count that makes virtually every input area digitally completable. Checkboxes, text fields, and date pickers are all interactive. The Spanish translation (HIM-1406S) mirrors this with an identical 66-field structure.

- **Flat (print-and-fill) PDF: 1 of 2** — Heartland Community Health Center's form is a born-digital PDF with a full text layer but **zero fillable fields**. Despite being digitally created (not a scan), it functions entirely as a print-and-handwrite document.

- **Image-only scans: 0 of 2** — Neither form is a scanned paper document.

**Tally: 1 fillable PDF (50%), 1 flat digital PDF (50%), 0 image-only scans.**

## Page Counts and Field Counts

| Org | Pages | Fillable Fields | Data Entry Points |
|-----|-------|----------------|-------------------|
| Merit Health Central | 1 | 66 | ~66 |
| Heartland Community Health Center | 1 | 0 | ~22 |

Both forms are single-page documents, keeping complexity manageable. However, the field count divergence is striking: Merit Health Central has 3× more data entry points, yet all are fillable, while Heartland's smaller form requires handwriting for every field. The Merit Health form's single-page density — packing 66 interactive fields into one page with 12 record-type checkboxes, 5 sensitive-information opt-ins, and 5 delivery methods — represents impressive information architecture.

## Digital-First vs. Scanned Paper

- **Digital-first: 2 of 2** — Both forms are born-digital PDFs with proper text layers. Neither is a scanned paper document. However, "digital-first" here means different things: Merit Health Central's form is truly digital-first with interactive fields designed for on-screen completion, while Heartland's is merely a digitally-typeset document that still requires a paper workflow.

## Layout, Typography, and Visual Design

**Merit Health Central** demonstrates polished, system-standardized design. The form follows a logical seven-section flow: patient information → facility identification → record type selection → sensitive information disclosure → delivery method → recipient designation → signature. Section headers are clear and patient-facing. The layout is dense but organized, fitting comprehensive options onto a single page without feeling cluttered. The CHS system-level form numbering (HIM-1406, revised six times since 2018) suggests ongoing corporate oversight and iterative refinement.

**Heartland Community Health Center** has a functional but dense layout. The single page covers demographics, record types, delivery method, from/to fields, purpose, legal disclosures, and signature — a logical sequence marred by tight spacing and 16 different fonts. The ordering is sensible (demographics first, legal text and signatures last), but the visual hierarchy is flat, with minimal differentiation between sections. The form is legible but workmanlike rather than designed.

## Instructions

- **Merit Health Central**: The form itself **lacks submission instructions** — no fax number, email, or mailing address is printed on the completed form. However, the website's dedicated Medical Records page provides an FAQ section addressing common questions before download. This split creates a problem: a patient who receives the form from someone else (not via the website) has no guidance on how to return it.

- **Heartland Community Health Center**: The form **includes return instructions** directly on the document — email address (medrecords@heartlandhealth.org), fax number (785-856-0375), mailing address, and a phone number for questions (785-842-4477, Option 5). Despite its other limitations, Heartland outperforms Merit Health on this critical usability dimension.

**Tally: 1 of 2 includes on-form submission instructions. Neither provides comprehensive patient-facing instructions explaining the records request process itself.**

## Multilingual Support

- **Merit Health Central**: Full Spanish translation (HIM-1406S) with identical structure and 66 fillable fields, prominently linked alongside the English version on the website.
- **Heartland Community Health Center**: English only. No multilingual support despite serving an FQHC population where language access is a federal requirement.

**Tally: 1 of 2 (50%) offers multilingual support.**

## Notable Examples

**Best document craftsmanship — Merit Health Central**: This form stands out for several reasons. The 66-field interactive design eliminates the print-and-handwrite barrier. The five delivery methods — including removable media (DVD/USB/CD-ROM) with password protection — show unusual thoughtfulness. The patient-first titling ("Patient Request for Health Information" rather than "Authorization to Release") and "Myself" as the first recipient option signal genuine patient-access orientation. The parallel Spanish translation is equally functional, not a token afterthought. An online Swellbox portal provides a fully digital alternative pathway. The system-standardized design, with documented revision history, suggests corporate-level investment in form quality.

**Instructive contrast — Heartland Community Health Center**: Despite being a safety-net clinic where digital accessibility arguably matters most, Heartland's form requires printing and handwriting. The generic third-party release framing ("Authorization to Release and Disclose Patient Information" with "Records From/To" fields) poorly serves patients seeking their own records. An ambiguous witness signature line and double email-liability waivers may deter patients. However, the form's pre-bundled "Record Set" option — offering a curated default bundle of recent visit notes, labs, medications, immunizations, screenings, and specialist list — is a genuinely creative feature that reduces patient decision burden and deserves recognition.

## Batch Summary

This batch illustrates the document quality divide between system-affiliated and independent providers. Merit Health Central's CHS-standardized form (Grade B, 4.15/5) demonstrates what corporate resources produce: fillable, bilingual, patient-oriented, portal-backed. Heartland's independent form (Grade C, 2.65/5) shows the typical FQHC pattern: functional but non-interactive, generically framed, monolingual. The gap isn't competence — Heartland's pre-bundled record set is more innovative than anything on the CHS form — but sustained investment in document infrastructure. Neither fully solves instructions: Merit Health omits submission details from the form; Heartland includes them but omits process guidance.
