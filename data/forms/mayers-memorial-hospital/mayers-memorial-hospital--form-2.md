# Evaluation: Mayers Memorial Hospital District — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page **"Authorization for Use or Disclosure of Health Information"** form, branded with "MAYERS MEMORIAL HOSPITAL DISTRICT" at the top of each page. The footer identifies it as "Adapted from CHA 16-1 (3/13)" (California Hospital Association template, March 2013 version) and labels it "AUTHORIZATION FOR USE OR DISCLOSURE OF HEALTH INFORMATION MMH 470," indicating it is an internal hospital form with a specific form number (MMH 470) marked as a "Permanent Part of Medical Record."

The retrieval notes initially misidentified this document as a "Disclosure of Privacy Practices" (likely based on the filename `Disclosure_of_Health_Info.pdf` and the link label on the website). In fact, it is a full ROI authorization form — the primary branded form this hospital uses for releasing health information.

This is the second of two forms found for Mayers Memorial. **form-1.pdf** is a generic, unbranded 1-page "Authorization for Release of Medical Records" hosted on a third-party CDN (PatientPop), found only via web search. form-2.pdf is the hospital's own branded, more comprehensive authorization form, hosted directly on the hospital website — though mislabeled in the site navigation.

## 2. FINDABILITY

**Poor findability due to mislabeling.** This form is linked from the hospital's "Patients & Visitors" page under the label "Disclosure of Privacy Practices" — a label that describes a Notice of Privacy Practices, not an authorization form. A patient looking for a records release form would likely skip this link entirely. The URL (`/docs/Disclosure_of_Health_Info.pdf`) reinforces the misleading label.

The hospital's dedicated Medical Records page (`/getpage.php?name=Medical_Records`) provides no downloadable form or instructions for requesting records — only department hours and a phone number. There is no link labeled "Authorization," "Release of Information," or "Request Your Records" anywhere on the site. A patient would need to either call the hospital, know to click on the misleadingly labeled "Disclosure of Privacy Practices" link, or find the generic form-1.pdf via external web search.

## 3. TECHNICAL ACCESSIBILITY

**Significant technical barriers.** The PDF is an image-only scan:

- **No text layer**: `pdftotext` extracts zero characters (metadata shows `full_text_chars: 2`, which are just form-feed characters). The document cannot be searched, copied from, or read by screen readers.
- **No fillable fields**: `fillable_field_count: 0`. The form must be printed and filled by hand.
- **Image-only scan**: `is_image_only_scan: true`, with 16 embedded images composing the 2 pages. This is a scan of a paper form, not a digitally created document.
- **File size**: 58,834 bytes for 2 pages — modest, but entirely image data.
- **No digital-first design**: The form was clearly designed as a paper document, photocopied/scanned, and uploaded as-is.

A patient with a visual impairment relying on assistive technology would be completely unable to use this form independently.

## 4. CONTENT DESIGN

Based on visual inspection of the scanned pages, the form is reasonably well-organized for a paper form:

**Page 1** contains:
- Header with organization name and form title
- Introductory statement: "Completion of this document authorizes the disclosure and use of health information about you. Failure to provide all information requested may invalidate this authorization."
- Patient demographics: Name, Date of Birth, MRN
- Section "USE AND DISCLOSURE OF HEALTH INFORMATION" with recipient name and address fields
- Scope options: checkbox for "All health information" OR "Only the following records or types of health information (including any dates)" with blank lines
- Sensitive information section (Section B) with checkboxes for Mental health treatment, HIV test results, and Alcohol/drug treatment — each requiring initials
- Note about psychotherapy notes requiring separate authorization
- Purpose section with checkboxes for "Patient request" or "Other" plus lines for detail
- "Limitations, if any" field

**Page 2** contains:
- Expiration section with a date field
- "MY RIGHTS" section with five bullet points covering: right to refuse, right to inspect, right to revoke, revocation takes effect upon receipt, right to a copy, and redisclosure warning with California law reference
- Signature block: Date, Time, AM/PM, Signature, relationship if representative, print name, phone number, contact phone number

**Strengths**: Logical flow from identification → scope → purpose → rights → signature. Section headers are highlighted/boxed (EXPIRATION, MY RIGHTS, SIGNATURE, PURPOSE). The "My Rights" section is written in plain first-person language ("I may refuse," "I may inspect," "I may revoke").

**Weaknesses**: The introductory warning — "Failure to provide all information requested may invalidate this authorization" — is unnecessarily intimidating as the very first substantive text. Footnote references (superscript 2, 3, 4) appear in the "My Rights" bullets but there are no corresponding footnotes visible on either page, suggesting they reference the original CHA template annotations that were not included. The scan quality is adequate but not crisp.

## 5. PATIENT-CENTEREDNESS

**Mixed signals.** The form includes a "Patient request" checkbox under Purpose, indicating awareness that patients may be requesting their own records. The "My Rights" section explicitly tells patients they can refuse without affecting treatment, can inspect records, and can revoke authorization — all positive for patient empowerment.

However, the form is fundamentally structured as a third-party release form ("I hereby authorize Mayers Memorial Hospital District to release to ___"), which means a patient requesting their own records must fill in their own name and address as the recipient — an awkward and potentially confusing workflow.

**No format/delivery options**: There is no field to specify whether records should be provided in paper, electronic, or other format. No mention of electronic delivery, patient portal, or email options.

**No mention of HIPAA Right of Access**: The form does not reference 45 CFR § 164.524 or explicitly inform patients of their right to access their own records. The "My Rights" section covers authorization-related rights but not access rights.

**No fee disclosure**: The form does not mention whether fees will be charged.

**No mention of EHI export or bulk data access.**

The scope options (all records vs. specific types, with sensitive-information checkboxes) are reasonably granular, which is a positive feature.

## 6. COMPLIANCE

- **Expiration**: The form includes an expiration date field, which is appropriate. No pre-set unreasonably short expiration period is imposed.
- **Sensitive information handling**: The form correctly separates mental health, HIV, and substance abuse records with individual initial lines, consistent with California law requirements (and 42 CFR Part 2 for substance abuse).
- **Psychotherapy notes**: The form correctly notes that "A separate authorization is required to authorize the disclosure or use of psychotherapy notes, as defined in the federal regulations implementing the Health Insurance Portability and Accountability Act."
- **Revocation**: The form states the right to revoke "at any time" in writing, with revocation effective upon receipt.
- **No notarization required.**
- **No witness requirement** (beyond the signature itself).
- **No in-person submission requirement** stated — though no alternative submission methods (fax, email, portal) are mentioned either.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Intimidating invalidation warning**: The form opens with "Failure to provide all information requested may invalidate this authorization." For a patient Right of Access request, providers generally cannot deny access simply because a form field is incomplete — this language could chill patients from submitting the form if they lack information like their MRN.

### ⚠️ AMBIGUITIES
- **Mislabeled on the website**: The form is linked as "Disclosure of Privacy Practices" on the Patients & Visitors page, but is actually an authorization form. A patient looking for a release form would likely not click this link, and a patient looking for privacy practices would find the wrong document.
- **Dangling footnote references**: Superscript numbers 2, 3, and 4 appear in the "My Rights" bullet points (e.g., "benefits.2", "writing3", "authorization.4") but no corresponding footnotes exist on either page. These are artifacts of the CHA template and create confusion.
- **No submission instructions**: The form does not tell patients where to send, fax, or deliver the completed form — no address, fax number, email, or portal link is provided.

### ❌ ERRORS
- **Image-only scan with no text layer**: The entire document is inaccessible to screen readers, text search, and copy/paste. This is an ADA/Section 508 accessibility failure for a publicly posted web document.
- **Website link label mismatch**: The document is filed under and labeled as "Disclosure of Privacy Practices" when it is actually an "Authorization for Use or Disclosure of Health Information" — a fundamentally different type of document.

### ✨ BRIGHT SPOTS
- **"My Rights" section in plain first-person language**: Bullet points like "I may refuse to sign this authorization. My refusal will not affect my ability to obtain treatment or payment or eligibility for benefits" are clearly written and patient-friendly.
- **Sensitive information granularity**: The form properly separates mental health, HIV, and substance abuse records with individual checkboxes requiring initials, which is both legally compliant and informative to patients about the sensitivity of these categories.
- **CHA template provenance**: Using a California Hospital Association template (CHA 16-1) ensures baseline legal compliance with California-specific health privacy requirements.
