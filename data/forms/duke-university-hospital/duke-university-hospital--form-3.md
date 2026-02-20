# Duke University Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an older revision (M3132, Rev. 1/22) of the Duke Health Enterprise "Authorization for Release of Information" form. It is a single-page, image-only scan of what appears to be the same M3132 form family represented by form-1.pdf (Rev. 4/2024) and form-4.pdf (Rev. 3/2025). It was sourced not from the main dukehealth.org medical records page but from a Duke Outpatient Clinic "how-to" site hosted at `sites.duke.edu/dukeoutpatientclinic_howto/files/2024/06/Release-from-Duke.pdf`.

Duke Health's official forms page links to the current Rev. 3/2025 version (form-4). This document is essentially a superseded version still circulating on a satellite site. The companion instruction document (form-2.pdf) and the two newer revisions (form-1 and form-4) are all available on the main dukehealth.org site with proper text layers and fillable fields.

The form shares the same seven-part structure (Parts A–G) as the newer revisions but includes some content differences: notably an "In-Person Pick up" delivery option and a "Substance Use Disorder" sensitive-information checkbox that appear in this older version but have been modified or removed in later revisions.

## 2. FINDABILITY

This form was **not** found through the official Duke Health medical records page. It was discovered via a secondary Duke site (`sites.duke.edu/dukeoutpatientclinic_howto`), a WordPress-based informational page for the Duke Outpatient Clinic. A patient navigating the main dukehealth.org website would not encounter this version — they would find the current Rev. 3/2025 form instead.

The risk here is that a patient searching broadly (e.g., via Google for "Duke release of information form") could land on this outdated scan rather than the current, properly formatted version. The URL path (`/files/2024/06/`) suggests it was uploaded in June 2024, even though the form revision date is January 2022 — meaning an outdated form was re-posted relatively recently.

## 3. TECHNICAL ACCESSIBILITY

This document has severe technical accessibility deficiencies:

- **Image-only scan**: The metadata confirms `is_image_only_scan: true`, `has_text_layer: false`, and `full_text_chars: 1` (just a form-feed character). There is zero machine-readable text.
- **No fillable fields**: `fillable_field_count: 0`. The form must be printed and completed by hand.
- **No fonts embedded**: `font_count: 0` — consistent with a flat raster image.
- **Single embedded image**: The entire page is one 568 KB image embedded in the PDF wrapper.
- **Screen reader inaccessible**: With no text layer, this document is completely inaccessible to assistive technology users. It fails WCAG and Section 508 requirements.
- **Not searchable**: Text cannot be selected, copied, or searched within the document.

By contrast, the current official version (form-4.pdf, Rev. 3/2025) has a full text layer, 67 fillable fields, and 70 embedded fonts — making it a properly digital, interactive form. This scanned version offers none of those capabilities.

## 4. CONTENT DESIGN

Despite the poor technical format, the visual content of the scanned form is reasonably well-organized. Reading from the image:

- **Structure**: Seven clearly labeled parts (A through G) with shaded header bars for each section, following a logical flow from patient information → recipient → records selection → purpose → delivery → consent → witness.
- **Record selection granularity**: Part C offers a tiered approach — Abstract/Summary, specific individual report types (12 categories), or Entire Record — with clear explanatory text about defaults ("If sending to a provider, an Abstract/Summary of records will be sent unless otherwise marked below").
- **Treatment location options**: Four facility checkboxes plus a write-in for specific clinics, and an "All Duke Health Enterprise Entities" option.
- **Delivery options**: Three columns — Electronic Delivery (MyChart, Encrypted Email, Portal, Fax), Mail Delivery (CD, Thumbdrive, Paper), and In-Person Pick up with format sub-options.
- **Sensitive information consent**: Part F explicitly names Mental and Behavioral Health, Substance Use Disorder, and Genetic Testing as sensitive categories requiring specific opt-in.
- **Patient rights language**: The consent paragraph covers revocation rights, re-disclosure risk, right to refuse, non-retaliation for refusal, and potential fees. The authorization expires one year from signature unless otherwise specified.

The layout is dense but functional for a single page. However, the text is rendered at scan resolution, making some fine print harder to read than it would be in a native digital document. The submission instructions at the bottom are clear: email, fax, or mail addresses with a phone number for questions.

## 5. PATIENT-CENTEREDNESS

This version of the form has mixed patient-centeredness:

**Positive aspects visible in the content:**
- The "Self (same info as above)" checkbox in Part B makes self-requests straightforward.
- Purpose options include "Personal" as the first choice.
- Multiple delivery formats including electronic options (MyChart, Encrypted Email).
- The "In-Person Pick up" option (present in this version but absent from newer revisions) could be convenient for some patients.
- Clear submission channels: email, fax, and mail.
- Expiration defaults to one year, which is reasonable.

**Negative aspects:**
- The image-only format means a patient must print this, fill it out by hand, and then scan/photograph it to submit electronically — a significant barrier compared to the fillable PDF available on the main site.
- No plain-language summary or guidance is embedded in this version (the companion instructions document, form-2.pdf, exists separately but is not linked from this satellite site).
- The form requests "SS# (last 4 digits)" which, while only partial, may cause hesitation for privacy-conscious patients.
- The statement "Duke Health may charge a fee for providing the information specified above" provides no guidance on fee amounts or the patient's right to receive records at reasonable cost under HIPAA.
- The Part G witness section references "See Instructions for Details" but those instructions are not available on the same site where this scan is hosted.

## 6. COMPLIANCE

- **Fee disclosure**: The form states "Duke Health may charge a fee for providing the information specified above" without specifying amounts or referencing HIPAA's reasonable cost-based fee limitation for patient access requests. The newer revision (form-4) similarly notes "Charges may apply" for CD and Paper delivery.
- **Sensitive information categories**: This Rev. 1/22 version includes a "Substance Use Disorder" checkbox alongside Mental and Behavioral Health and Genetic Testing. The newer revisions (Rev. 4/2024 and Rev. 3/2025) appear to have dropped the Substance Use Disorder checkbox, listing only Mental and Behavioral Health and Genetic Testing. This may reflect changes in 42 CFR Part 2 regulations.
- **Authorization expiration**: One-year automatic expiration is standard and compliant.
- **Revocation rights**: Properly disclosed — patient can revoke in writing at any time.
- **Re-disclosure warning**: Present and appropriately worded.
- **Non-retaliation**: The form states treatment and payment will continue regardless of whether the patient signs — this is compliant with HIPAA's prohibition on conditioning treatment on authorization.
- **Representative documentation**: The form requires documentation of authority (Power of Attorney, Court Order, etc.) for non-patient signers, which is appropriate.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Image-only scan with no text layer is completely inaccessible** to screen reader users and other assistive technology, potentially violating ADA and Section 508 requirements. A patient with a visual disability could not independently complete this form.

### ⚠️ AMBIGUITIES

- **Outdated version circulating on a satellite site**: This Rev. 1/22 form was uploaded to `sites.duke.edu` as recently as June 2024, even though two newer revisions exist (Rev. 4/2024 and Rev. 3/2025). A patient finding this version via web search would not know it is superseded, and it contains content differences (e.g., "Substance Use Disorder" checkbox, "In-Person Pick up" option) that could create confusion if the HIM department processes it differently than expected.
- **"See Instructions for Details"** in Part G references a companion document that is not available on the same site where this form is posted, leaving the witness requirements unexplained.

### ❌ ERRORS

- **No text layer whatsoever**: The PDF contains only a raster image with `full_text_chars: 1`. This is not a partially degraded text layer — it is a complete absence of any machine-readable content, making the PDF functionally equivalent to a photograph.
- **Stale content still posted**: The form revision is from January 2022, but it was uploaded to the satellite site in June 2024, creating a misleading impression of currency.

### ✨ BRIGHT SPOTS

- **In-Person Pick up option**: This older version uniquely includes an "In-Person Pick up" column in Part E with name field and format choices (CD, Thumbdrive, Paper), which provides an additional access pathway not present in newer revisions. While this is a content bright spot, it is undermined by the form's inaccessible format.
- **Substance Use Disorder as explicit opt-in**: The inclusion of a separate "Substance Use Disorder" checkbox (beyond the broader "Mental and Behavioral Health") shows granularity in sensitive-information consent that respects 42 CFR Part 2 protections, though this may have been intentionally removed in later revisions due to regulatory changes.
