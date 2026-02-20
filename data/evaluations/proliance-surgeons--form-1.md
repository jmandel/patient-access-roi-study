# Proliance Surgeons — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **scanned, image-only copy** of what appears to be the Proliance Surgeons ROI authorization form, hosted on npsmri.com (Northwest Physicians Specialists / MRI, a Proliance member practice). The source URL is `https://npsmri.com/wp-content/uploads/2019/05/Proliance-Release-of-Information.pdf`. It is a single-page, letter-size document (612 × 792 pts), 24,078 bytes, containing a single JBIG2-compressed grayscale image at 150 DPI.

Because the PDF has **no text layer whatsoever** (`full_text_chars: 1`, which is just the form-feed character; `font_count: 0`; `fillable_field_count: 0`), it is impossible to programmatically read its content. However, based on the notes, it appears to be a scanned version of the same or similar template as form-2 and form-4 — both titled "Authorization for Proliance Surgeons, Inc., P.S. to Use or Disclose My Health Care Information." This makes form-1 a **redundant, degraded copy** of an authorization form available in better formats elsewhere.

Among the four forms found for Proliance Surgeons:
- **form-1.pdf** (this document): image-only scan, hosted on npsmri.com
- **form-2.pdf**: text-layer version hosted on proliancesurgeons.com (primary)
- **form-3.pdf**: incoming records request form (different purpose)
- **form-4.pdf**: nearly identical to form-2, hosted on proortho.com, with interactive checkboxes

## 2. FINDABILITY

The form was found via a general web search for `Proliance Surgeons release of information authorization medical records form`, which surfaced it among the top results. However, it is hosted on **npsmri.com**, a subsidiary practice site, not on the main Proliance Surgeons website. The URL path (`/wp-content/uploads/2019/05/`) suggests it was uploaded in May 2019 and has not been updated since. The filename (`Proliance-Release-of-Information.pdf`) is descriptive and clearly identifies the document's purpose.

The main Proliance Surgeons medical records page (https://proliancesurgeons.com/resource/medical-records/) links to form-2, not this document. A patient searching specifically for their local NPS/MRI practice might land on this inferior version instead of the better copies hosted elsewhere. There is no indication on the npsmri.com site that a better version exists.

## 3. TECHNICAL ACCESSIBILITY

This document is **severely deficient** in technical accessibility:

- **Text layer**: None. The PDF contains zero embedded fonts and zero extractable text. It is a pure raster image.
- **Image quality**: The single embedded image is 1275 × 1650 pixels at 150 DPI grayscale, 1-bit depth. This is a low-resolution, black-and-white scan — adequate for reading on screen but poor for zooming or printing at quality.
- **Fillable fields**: None (`fillable_field_count: 0`). The form must be printed and filled by hand.
- **Tagged/accessible**: The PDF is not tagged (`Tagged: no`), making it completely inaccessible to screen readers and assistive technology.
- **File size**: 24 KB — very small, but only because it's a low-resolution monochrome scan compressed with JBIG2.
- **Digital-first design**: This is emphatically **not** a digital-first document. It is a photocopy-quality scan of a paper form, uploaded as a PDF.

A patient who downloads this form cannot fill it electronically, cannot search it, and cannot use assistive technology to read it.

## 4. CONTENT DESIGN

Because the document has no text layer, content evaluation must be based on visual inspection of the scanned image and inference from the sibling forms (form-2 and form-4) that share the same template.

- **Length**: 1 page — appropriate and concise for an authorization form.
- **Clarity**: If the content matches form-2/form-4, the language is reasonably clear, using section headers ("I. My Authorization," "II. My Rights") and checkbox-driven options.
- **Readability**: At 150 DPI with 1-bit depth, the scan likely shows some degradation — text may appear rough or slightly blurry. No OCR was performed, so the document cannot be reflowed or resized for accessibility.
- **Layout**: As a scan, the original layout is frozen. Any nuance of the visual design (whitespace, font sizing, hierarchy) is flattened into a single raster image, losing all structure.

The inability to extract text means any assessment of language quality must be inferred. The document fails the most basic content design test: it is not machine-readable.

## 5. PATIENT-CENTEREDNESS

This document **poorly serves patients** trying to access their own health records:

- **Patient access vs. third-party release**: Based on the sibling forms, this is a general authorization form — it requires patients to specify a recipient ("You may disclose this health care information to: Name and organization"). There is no pathway specific to patients requesting records for themselves; the patient must designate themselves as the recipient, which creates unnecessary cognitive overhead.
- **Scope options**: If matching form-2/form-4, the form offers checkboxes for "All health care information," condition-specific records, date-specific records, and special categories (HIV, mental health, STDs, substance use). These are reasonable scope options.
- **Format/delivery options**: No electronic delivery options are mentioned in the sibling forms; this scan certainly provides none. The form must be printed, hand-filled, and submitted.
- **Right of Access language**: The sibling forms' "My Rights" section mentions the right not to sign for treatment/payment purposes and revocation rights, but does not explicitly reference HIPAA § 164.524 or the patient's Right of Access.
- **EHI Export awareness**: No mention of electronic health information export or bulk data.
- **Submission instructions**: The form-2 version includes a fax number (425.820.8975) and phone number (425-823-4224) at the bottom, but no mailing address, email, or portal submission option.

## 6. COMPLIANCE

Based on what can be inferred from the sibling forms (form-2/form-4):

- **Authorization elements**: The form includes required HIPAA authorization elements — description of information, recipient, purpose, expiration, right to revoke, and signature. This is an authorization form (45 CFR § 164.508), not an access request form (45 CFR § 164.524).
- **Expiration**: The form provides "on (date)" and "when the following event occurs" options for expiration, with a note that disclosures to financial institutions or employers expire after 90 days unless renewed. There is no unreasonable default expiration.
- **Fee disclosure**: No fees are mentioned.
- **Notarization/witnesses**: No notarization or witness requirements.
- **Form type mismatch**: The use of an authorization form (§ 164.508) for patient access requests (which should be governed by § 164.524) is a structural concern. Authorization forms are designed for third-party disclosures and carry requirements (e.g., recipient designation, purpose specification) that are not required for patient access requests.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Image-only scan with no text layer**: This document is completely inaccessible to screen readers, search tools, and assistive technology. It violates the spirit of digital accessibility requirements and creates a barrier for patients with visual impairments. While ADA/Section 508 compliance may not be legally required of a private practice website, providing a document that cannot be read by assistive technology is a significant accessibility failure.

### ⚠️ AMBIGUITIES

- **Relationship to other versions unclear**: A patient who finds this form on npsmri.com has no way to know that better versions exist on proliancesurgeons.com or proortho.com. There is no version number, revision date, or cross-reference to help patients identify the most current or most functional copy.
- **Content unknowable**: Because no text can be extracted, it is impossible to confirm whether this scan matches the form-2/form-4 template exactly, or whether it is an older version with different terms.

### ❌ ERRORS

- **Stale hosting**: The URL path (`/wp-content/uploads/2019/05/`) indicates the file was uploaded in 2019 and likely never updated. If the canonical form has been revised since then (form-2 was created more recently per its Word metadata), this scan may contain outdated language or terms.
- **150 DPI, 1-bit scan**: The image resolution is marginal for a document containing fine text — standard archival scanning is 300 DPI minimum. At 150 DPI with 1-bit depth, small text and fine details may be illegible.
