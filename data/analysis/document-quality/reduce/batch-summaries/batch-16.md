# Document Quality Deep Dive — Batch 16

## Batch Composition

This batch contains **2 organizations**, both large nonprofit hospitals affiliated with major health systems:

| Organization | Facility Type | System | Region | State | Beds |
|---|---|---|---|---|---|
| Rhode Island Hospital | Teaching hospital | Brown University Health | Northeast | RI | 719 |
| Ascension Sacred Heart Pensacola | Community hospital | Ascension | South | FL | 566 |

Both organizations retrieved **2 forms each** (4 total documents), though in each case one form is the primary ROI authorization and the other is a department-specific or secondary document.

## Fillability and Technical Format

**Fillable/interactive PDFs: 0 of 4.** Neither organization offers a single fillable field across any of their forms. All four documents are born-digital PDFs with full text layers — none are image-only scans — yet all require print-and-handwrite completion. Both primary forms were authored digitally (Rhode Island Hospital's was updated as recently as October 2024; Ascension's uses 7 embedded fonts), making the absence of interactive fields a deliberate omission rather than a technical limitation. Adding fillable fields to these documents would be trivial.

**Digital-first vs. scanned: 2 digital-first, 0 scans.** Both primary forms are clearly born-digital documents with clean text layers, consistent typography, and structured layouts. Neither shows evidence of scanning artifacts, skew, or OCR. However, Ascension's secondary form (form-2, a 2016 Radiation Oncology release) shows signs of aging: outdated "Sacred Heart Health System" branding and multiple typos, suggesting it may have been created in an older workflow and never updated.

## Page Counts and Field Counts

Both primary forms are **single-page documents** with an estimated **~20 fields each**. This is notably compact — both organizations compress patient identification, recipient information, purpose, format preferences, record type selection, legal disclosures, and signature blocks onto one page. The density trade-off is significant: while brevity is patient-friendly, both forms sacrifice readability in their lower sections where legal text becomes cramped.

## Layout, Typography, and Visual Design

Both forms use **adequate but unremarkable layouts**:

- **Rhode Island Hospital** employs an 11-section numbered structure with a logical top-to-bottom flow. The structure is clear, but the single-page density creates competition between legal boilerplate and patient-facing fields. Typography is functional but not designed for accessibility — no visual hierarchy distinguishes instructions from fields from legal text.

- **Ascension Sacred Heart Pensacola** follows a similar logical flow (patient ID → recipient → purpose → format → record types → facilities → sensitive info → legal → signature). Its checkbox layout for record types and facility selection is clean and practical. However, the lower third deteriorates into a long-sentence sensitive-information authorization that bundles HIV, psychiatric conditions, substance abuse, and other categories into a single all-or-nothing binary decision without paragraph breaks.

Neither form uses color, icons, or visual design elements beyond basic rules and boxes. Both are black-and-white, text-heavy documents that look like they were last redesigned in the early 2000s despite recent revision dates.

## Instructions and Guidance

**Instructions: essentially absent from both forms.** Neither organization provides a plain-language summary, explanatory guidance, or step-by-step instructions for patients unfamiliar with HIPAA authorization forms.

- Rhode Island Hospital provides **no submission instructions** — a patient completing the form has no guidance on where to send it from the form itself.
- Ascension Sacred Heart Pensacola similarly lacks submission instructions but does include one notable (if problematic) directive: "If you fail to specify which records you desire, you will only receive a copy of the discharge summary." This defaults to minimal disclosure when patients don't navigate the checkbox list correctly — punishing unfamiliarity with the form rather than guiding the patient.

## Multilingual Support

**Multilingual: 0 of 2 organizations.** Both forms are English-only. Neither organization offers a Spanish-language version or any other language option despite serving diverse patient populations (Providence, RI and Pensacola, FL both have significant non-English-speaking communities).

## Notable Observations

**Worst practice — SSN collection (Ascension Sacred Heart Pensacola):** The Ascension form requests Social Security Number as a standard field for records access. This is unnecessary under HIPAA and creates identity theft risk. Combined with the mandatory "REQUIRED" label on the purpose-of-request field (which HIPAA does not require for patient self-access), this form collects more sensitive information than legally necessary.

**Worst practice — Liability waiver bundling (Rhode Island Hospital):** The Rhode Island Hospital form requires patients to "release Brown University Health, its employees and my physicians from all liability arising from this disclosure of my health information." Bundling a blanket liability release into a records authorization may discourage patients from exercising their access rights.

**Bright spot — Ascension's Swellbox portal:** While the PDF form is mediocre, Ascension's primary pathway is a Swellbox/Datavant online records request wizard — a genuinely digital-first alternative that largely compensates for the form's limitations. Rhode Island Hospital offers no comparable digital pathway.

**Bright spot — Granular record-type controls (both):** Both organizations offer approximately 10 record-type categories with individual selection, giving patients meaningful control over what they receive. Rhode Island Hospital additionally provides five categories of sensitive information exclusions (sexual abuse, mental health, STIs, substance use, HIV).

## Summary

This batch illustrates a common pattern: large, well-resourced health systems producing born-digital PDF forms that nonetheless lack fillable fields, instructions, multilingual support, and modern design. Both forms are functional but clearly designed for institutional workflows rather than patient self-service. The documents are technically competent (no scans, clean text layers) yet fail to leverage even basic interactive PDF capabilities. Ascension partially compensates with an online portal; Rhode Island Hospital offers only paper/CD delivery in 2024, with no electronic option.
