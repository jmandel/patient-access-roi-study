# Evaluation: Adena Regional Medical Center — form-3.pdf

## Document Overview

- **Organization:** Adena Regional Medical Center (Chillicothe, OH)
- **Document:** form-3.pdf — "2025 Release of Information Pay Schedule / Adena Patient Letter"
- **Source URL:** `https://www.adena.org/docs/default-source/billing-and-financial/2025-release-of-information-pay-schedule_adena-patient-letter.pdf?sfvrsn=176dbece_1`
- **File size:** 638,906 bytes (639 KB)
- **Pages:** 1
- **Text layer:** None (image-only scan)
- **Fillable fields:** 0
- **Fonts embedded:** 0
- **Embedded images:** 184

---

## 1. DOCUMENT IDENTIFICATION

This is **not** an ROI authorization form. It is a fee schedule / patient letter that accompanies the ROI process. The filename (`2025-release-of-information-pay-schedule_adena-patient-letter.pdf`) and retrieval notes both describe it as a "2025 Release of Information fee schedule / patient letter." It was linked from the top of Adena's medical records request page under a "Medical Records Fees" section.

In context, Adena provides three documents on its medical records page:
- **form-1.pdf** — The current ROI authorization form (CLI.1777, Rev. 10/25), a text-based PDF
- **form-2.pdf** — An older version of the ROI authorization form (revised 09/02/2020), also text-based
- **form-3.pdf** — This fee schedule document (an image-only scan)

This document is a supporting/supplemental document rather than a form a patient would fill out. It likely communicates the charges Adena applies for copying medical records under Ohio law.

---

## 2. FINDABILITY

The fee schedule was linked directly from Adena's medical records request page (`https://www.adena.org/patients-and-visitors/patient-rights/medical-records-request`), under a "Medical Records Fees" heading. According to the retrieval notes, the medical records page was found on the first search attempt, and all three PDFs were directly downloadable without bot blocking or authentication barriers.

Placing a fee schedule prominently on the medical records page is reasonable — patients benefit from knowing costs upfront. However, the URL path (`/docs/default-source/billing-and-financial/`) suggests this was uploaded through a generic CMS document library rather than placed at a semantically meaningful URL. The filename is descriptive (`2025-release-of-information-pay-schedule_adena-patient-letter.pdf`), which helps somewhat.

---

## 3. TECHNICAL ACCESSIBILITY

This document has severe technical accessibility problems:

- **No text layer whatsoever.** The `full_text` field contains only a single form-feed character (`\f`), confirming zero extractable text. The `has_text_layer` flag is `false` and `font_count` is 0.
- **Image-only scan.** The `is_image_only_scan` flag is `true`. The document consists of 184 embedded images that compose the visual appearance of a single page. This is an extraordinarily high image count for a single page — it suggests the scan was processed in a way that shattered the page into many tiny image fragments rather than storing it as one raster image.
- **No fillable fields.** With 0 fillable fields and no text layer, this document is entirely static and non-interactive.
- **Disproportionately large file size.** At 639 KB for a single page with no text, the file is approximately 5× larger than form-1.pdf (131 KB, which is a text-based PDF of similar length). The 184 fragmented images likely contribute to the bloated file size.
- **Inaccessible to screen readers.** Without a text layer, this document is completely unusable for visually impaired patients relying on assistive technology.
- **Not searchable or indexable.** The content cannot be found via text search, copied, or programmatically processed.

---

## 4. CONTENT DESIGN

Because this is an image-only scan with no extractable text, the actual content of the fee schedule cannot be evaluated through the metadata alone. The following observations are limited to what can be inferred:

- **Length:** 1 page, which is appropriate for a fee schedule.
- **Clarity and readability:** Cannot be assessed without OCR or visual inspection, but the document title suggests it combines a fee schedule with a patient letter, which is a reasonable approach for communicating pricing in context.
- **Layout:** Unknown from metadata. The fact that 184 separate image fragments compose the page raises concerns about visual quality — fragmented scans sometimes exhibit alignment artifacts, uneven contrast, or reduced sharpness compared to a natively digital PDF.

---

## 5. PATIENT-CENTEREDNESS

As a fee schedule rather than an authorization form, this document serves a different purpose — informing patients about costs. Publishing a fee schedule is itself a patient-friendly act, as it provides upfront cost transparency. Both form-1 and form-2 reference charges: "there WILL be a charge for copies of records in accordance with Ohio Law." This fee schedule presumably details those charges.

However, the document's value to patients is severely undermined by its format:
- Patients cannot copy fee amounts from the document to compare or reference them.
- The content is not accessible to patients using screen readers or other assistive technology.
- The document cannot be translated by browser-based or system-level translation tools, creating a barrier for non-English-speaking patients.

The document also does not appear to distinguish between fees for patient access requests (which HIPAA limits to a reasonable, cost-based fee) and fees for third-party releases (which may be governed by state law with different rate structures). This distinction matters because HIPAA § 164.524(c)(4) caps fees for patient access at a reasonable cost-based amount, while Ohio law may allow different fee schedules for third-party disclosures.

---

## 6. COMPLIANCE

The most significant compliance consideration is whether the fee schedule clearly differentiates between patient access fees and third-party release fees. Under HIPAA's Right of Access rule (45 CFR § 164.524), covered entities may only charge a "reasonable, cost-based fee" for patient access requests, which is capped and cannot include costs like searching for or retrieving records. Ohio Revised Code § 3701.741 sets specific per-page rates for third-party copies, but these rates do not apply to patient access requests under HIPAA.

Because the document's text content is not extractable, it is impossible to verify from the metadata whether:
- The fee schedule complies with HIPAA's fee limitations for patient access
- The fee schedule distinguishes between patient access and third-party requests
- Any fees listed are reasonable and cost-based

The companion authorization forms (form-1 and form-2) both state: "with the exception of records being copied for continuity of care, for insurance company or other third party reimbursement, there WILL be a charge for copies of records in accordance with Ohio Law." This language does not explicitly reference HIPAA's patient access fee limitation, and the phrase "in accordance with Ohio Law" could lead patients to believe state per-page rates apply to their own access requests — which would be incorrect if those rates exceed HIPAA's cost-based fee cap.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Unreadable fee schedule format.** Publishing fee information as an image-only scan with no text layer means patients cannot access this information through assistive technology, translation tools, or text search. For a document whose entire purpose is to communicate pricing, this format fundamentally defeats the document's purpose for a significant subset of patients.

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party fees unclear.** The authorization forms reference charges "in accordance with Ohio Law" without distinguishing patient access requests (governed by HIPAA fee caps) from third-party releases (governed by Ohio per-page rates). If the fee schedule similarly fails to make this distinction, patients may be overcharged for their own records.

### ❌ ERRORS

- **184 embedded image fragments.** A single-page document should not contain 184 images. This indicates a defective scanning/conversion process that shattered the page content into many small image tiles rather than producing a clean single-image or text-based PDF. This contributes to a bloated file size (639 KB for one page) and likely degrades visual quality.
- **No OCR applied.** Modern scanning workflows routinely apply OCR to produce a text layer. The absence of any text layer suggests either outdated scanning equipment, a deliberate shortcut, or a lack of awareness of accessibility requirements.

### ✨ BRIGHT SPOTS

- **Proactive fee disclosure.** Publishing a fee schedule on the medical records page at all is a positive practice. Many organizations bury fee information or disclose it only after a request is submitted. Adena's decision to link the fee schedule prominently under "Medical Records Fees" gives patients the opportunity to understand costs before initiating a request.
