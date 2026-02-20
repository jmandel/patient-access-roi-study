# Evaluation: St. Joseph's Hospital and Medical Center — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **third-party authorization form** titled "Authorization for Use or Disclosure of Protected Health Information." It is form number **X-MR-4862 (03/13)**, dated March 2013. The form is branded with the **Dignity Health / St. Joseph's Hospital and Medical Center** logo and barcode at the bottom of each page.

This is one of three forms found for St. Joseph's:
- **form-1.pdf**: A general Arizona Dignity Health authorization form (different form number, references Chandler/Gilbert addresses — appears to be from a different facility in the Dignity Health system)
- **form-2.pdf**: The primary **patient access request form** (X-MR-4869, dated 02/22), specifically designed for patients requesting their own records, with electronic delivery options and detailed record-type checkboxes
- **form-3.pdf** (this document): The **third-party release form** (X-MR-4862, dated 03/13), used when patients authorize disclosure of their records to a physician or other third party

Form-3 is linked directly from the St. Joseph's medical records page as the form to use when authorizing release to someone else. It is structurally similar to form-1 (general Arizona authorization) but is explicitly branded for St. Joseph's and includes St. Joseph's address for revocation.

## 2. FINDABILITY

Per the retrieval notes, the form was found on the **St. Joseph's medical records page** at `dignityhealth.org/arizona/locations/stjosephs/patients-and-visitors/for-patients/medical-records`, which is approximately **4–5 clicks** from the main Dignity Health site. The page distinguishes between "request for yourself" (form-2) and third-party authorization (form-3), which is helpful navigation.

The source URL (`dignityhealth.org/content/dam/dignity-health/pdfs/arizona/third-party-english3213448.pdf`) is hosted on Dignity Health's content DAM. The filename "third-party-english3213448" is somewhat descriptive but includes an opaque numeric suffix. The page linking to the form apparently labels it clearly as a third-party authorization, making it reasonably discoverable for someone navigating the site — though reaching the medical records page itself requires several clicks through the facility's patient resources section.

## 3. TECHNICAL ACCESSIBILITY

This document has **severe technical accessibility problems**. It is effectively an **image-only scanned form**:

- **Text layer**: The metadata reports `has_text_layer: true` and `full_text_chars: 159`, but the only extractable text is the title header repeated on each page: "AUTHORIZATION FOR USE OR DISCLOSURE OF PROTECTED HEALTH INFORMATION" and the form number "X-MR-4862 (03/13)". The entire body content of the form — all fields, instructions, checkboxes, rights language — exists only as scanned images.
- **Embedded images**: 4 CCITT-encoded images (fax-style compression) at **1200 DPI**, totaling approximately 284KB. These are high-resolution 1-bit (black-and-white) scans. The images include both a header/footer overlay (13216×10200 px) and the body content (≈10500×9000 px) on each page.
- **Fillable fields**: **Zero** fillable form fields. There are no interactive elements whatsoever.
- **File size**: 335,505 bytes (336KB) for a 2-page document — disproportionately large given the content, reflecting the high-resolution scan.
- **PDF version**: 1.5, created 2014-02-03, last modified 2021-06-23. Producer: Adobe PDF Library 7.0.
- **Fonts**: Only 2 embedded fonts (Arial and Arial Bold), used solely for the title overlay text — the scan body uses no fonts.
- **Tagging**: Not tagged (no accessibility structure).

This form was clearly **designed as a paper document, then scanned** and uploaded as a PDF. A patient cannot fill it out digitally — they must print it, complete it by hand, and either scan/fax it back or deliver it in person. Screen readers cannot access the body content. Copy-paste of form text is impossible.

## 4. CONTENT DESIGN

Based on visual inspection of the rendered pages:

**Page 1** contains:
- Opening statement: "Completion of this document authorizes the disclosure and/or use of health information about you."
- Warning: "Failure to provide *all* information requested may invalidate this authorization. Fees to reproduce records may apply."
- Patient identification fields: Name, Date of Birth, Other Names Used, Telephone Number, Medical Record or Account#
- "I AUTHORIZE" / "TO DISCLOSE TO" blanks for specifying the source facility and recipient
- Address field for the recipient
- Sensitive-information checkboxes requiring initials: Mental health records, Substance abuse, HIV, Genetic testing
- Record type checkboxes in a grid layout: Billing Records, Consultation Reports, Discharge Summary, Emergency Room, History and Physical, Laboratory Tests, Procedure Reports, Progress Notes, X-ray Reports
- Date(s) and Other(s) fields
- "ALL RECORDS (Fee May Apply)" checkbox
- Footer with Dignity Health / St. Joseph's branding, barcode, and Patient Label area

**Page 2** contains:
- PURPOSE section with checkboxes for "At the request of the patient or personal representative" or "Other"
- EXPIRATION: "This authorization will automatically expire one (1) year from the date of execution unless a different event or end date is specified"
- MY RIGHTS section with two bullet points about refusal rights and revocation in writing
- Revocation address: "Facility Privacy Officer, St. Joseph's Hospital & Medical Center, 350 West Thomas Road, Phoenix, AZ 85013"
- Re-disclosure warning paragraph
- SIGNATURE line with Date
- Personal representative fields (print name, relationship)
- Staff verification line: "Patient/Representative Identification Verified. Initials: ___ Dept: ___"
- 42 C.F.R. Part 2 substance abuse re-disclosure prohibition notice in bold
- Footer with branding and Patient Label

**Layout assessment**: The form is **reasonably well-organized** for a 2-page paper form. Sections flow logically: identification → authorization details → record types → purpose → rights → signature. The visual hierarchy uses bold headers (PURPOSE, EXPIRATION, MY RIGHTS, SIGNATURE) effectively. The record-type checkboxes are arranged in a clean 4-column grid. However, some text is moderately small, and the form is fairly dense — the rights language and re-disclosure warnings are tightly packed on page 2.

**Length**: 2 pages is appropriate for a third-party authorization form.

**Language**: The form uses standard legal/medical authorization language. It is not written in plain language — phrases like "the extent that others have acted in reliance upon this authorization" and "re-disclosed by the recipient" are legal boilerplate that may challenge patients with limited health literacy. The intimidating opening warning about invalidation ("Failure to provide *all* information requested may invalidate this authorization") sets a punitive tone.

## 5. PATIENT-CENTEREDNESS

This form is **explicitly designed for third-party release**, not patient access. It uses the "I AUTHORIZE [facility] TO DISCLOSE TO [recipient]" framework, which is the standard structure for authorizing disclosure to physicians, insurers, attorneys, or other third parties.

**Key patient-centeredness observations:**

- **No electronic delivery options**: Unlike form-2 (the patient access form, which offers USB, CD, secure/unsecured email), this form provides no options for how records should be delivered. It simply authorizes disclosure without specifying format.
- **No HIPAA Right of Access reference**: The form does not reference 45 CFR § 164.524 or the patient's right of access. This is appropriate since this is a third-party release form under § 164.508 (authorizations), not a right-of-access request. However, there is no guidance directing patients who want their *own* records to use the correct form (form-2).
- **Scope options**: The form does offer good granularity for record types (9 specific categories plus dates and "other") and sensitive-information categories (mental health, substance abuse, HIV, genetic testing), allowing targeted disclosure.
- **Fee warning**: The form notes "Fees to reproduce records may apply" at the top and "(Fee May Apply)" next to the ALL RECORDS checkbox, but provides no fee schedule or estimate.
- **Expiration**: Defaults to 1 year, which is reasonable and standard.
- **Revocation**: Clear instructions to submit revocation in writing to the Facility Privacy Officer at St. Joseph's specific address.

The form does not explain in accessible terms *when* a patient should use this form vs. the patient access form. A patient seeking their own records who encounters this form first would have no indication that a more appropriate form exists.

## 6. COMPLIANCE

- **1-year automatic expiration**: Standard and compliant. The form allows patients to specify a different date or event.
- **Right to refuse**: Clearly states that refusal will not affect treatment, payment, or eligibility — required HIPAA language.
- **Revocation rights**: Properly explains that revocation must be in writing and takes effect upon receipt, with the reliance exception.
- **Re-disclosure warning**: Appropriately includes both HIPAA re-disclosure warning and the more restrictive 42 C.F.R. Part 2 notice for substance abuse information.
- **Sensitive information categories**: Properly calls out mental health, substance abuse, HIV, and genetic testing as requiring separate initialing, consistent with Arizona state law requirements.
- **"Failure to provide all information" warning**: The statement that incomplete forms "may invalidate" the authorization is a potentially intimidating barrier, though it is a common practice and arguably encourages completeness.
- **Fee disclosure**: Mentions fees may apply but does not disclose amounts, which is not itself a violation but reduces transparency.
- **Form age**: Dated 03/13 (March 2013) — over 12 years old. While the PDF was modified in 2021 (possibly just re-uploaded), the form content has not been updated since 2013. This raises questions about whether it reflects current regulatory requirements or organizational practices.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Image-only scan with zero fillable fields**: The form is essentially a photograph of a paper document uploaded as a PDF. With only 159 characters of extractable text (just the title), the form is completely inaccessible to screen readers, cannot be filled digitally, and cannot be searched or indexed. This creates a significant barrier for patients with disabilities and for anyone trying to complete the form without access to a printer.

### ⚠️ AMBIGUITIES

- **No cross-reference to patient access form**: A patient who finds this third-party form when trying to request their own records has no indication that a separate, more appropriate patient access form (form-2) exists. The form title "Authorization for Use or Disclosure" does not clearly signal that this is only for third-party releases.
- **Fee language is vague**: "Fees to reproduce records may apply" and "(Fee May Apply)" appear without any fee schedule, estimate, or reference to where fee information can be found. Patients cannot make informed decisions about requesting ALL RECORDS vs. specific record types without knowing the cost implications.

### ❌ ERRORS

- **Form is 12+ years old (dated 03/13)**: The form number X-MR-4862 with date code 03/13 indicates it was last substantively updated in March 2013. Compare this to form-2 (patient access form, dated 02/22), which is 9 years newer. The third-party form may not reflect current practices, contact information changes, or regulatory updates since 2013.
- **336KB for 2 pages of text**: The file is bloated due to 1200 DPI CCITT scans. A properly digitized version with real text and form fields would be roughly 50–80KB.

### ✨ BRIGHT SPOTS

- **Clear separation of form purposes**: St. Joseph's commendably maintains separate forms for patient access (form-2) and third-party release (form-3), rather than forcing a single overloaded form to serve both purposes. The patient access form (form-2) is notably more modern and patient-friendly.
- **Specific revocation address**: The form names the exact recipient (Facility Privacy Officer), facility (St. Joseph's Hospital & Medical Center), and street address for revocation — more specific and actionable than many forms that give only a generic corporate address.
- **Granular record-type selection**: Nine specific record categories plus date range and free-text "Other" fields allow patients to authorize targeted disclosure rather than all-or-nothing release.
