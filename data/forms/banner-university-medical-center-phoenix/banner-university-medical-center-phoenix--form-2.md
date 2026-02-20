# Evaluation: Banner - University Medical Center Phoenix — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization for Release of Medical Information (Hospital)" form, identified by form number **1200**, revision date **09/2017**. It is a hospital-specific ROI authorization form, distinct from the newer system-wide Banner Health form (form-1.pdf, form number 1200-0004, revision 06/2025). The "(Hospital)" suffix in the title and separate sections for behavioral health records suggest this form was designed for inpatient/facility-level releases. The form was hosted at a URL path referencing "banner-university-medicine-family-medicine-clinic," indicating it may have been associated with a specific clinic within the Banner University Medicine system.

Compared to form-1.pdf — the current system-wide version — this is a **legacy form** that predates the updated version by nearly eight years. The system-wide form (06/2025) has a more modern layout, includes a patient portal callout, references the "designated record set" per 45 CFR 164.501, and offers opt-out checkboxes for sensitive information categories. This older form instead bundles sensitive information consent into a single blanket authorization paragraph on page 2.

## 2. FINDABILITY

Per notes.md, the form was found through web searches and was directly downloadable from bannerhealth.com without login walls or bot blocking. However, it was hosted at a deep, non-obvious URL path (`/-/media/files/project/bh/locations/banner-university-medicine-family-medicine-clinic/1200-authorization-for-release-of-medical-information-roi.ashx`) rather than the main patients/medical-records section. A patient navigating the Banner Health site would likely land on the system-wide form (form-1.pdf) first; this legacy version would only surface through search or a direct link from clinic materials. The coexistence of two forms — one current and one eight years old — creates a risk that patients download and complete the outdated version.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 89,850 bytes (small, suitable for low-bandwidth connections)
- **Pages**: 2
- **Text layer**: Present — text is extractable, not a scan
- **Fillable fields**: **0** — the form is a flat PDF with no interactive form fields. It is designed for a print-and-sign workflow only.
- **Fonts**: 5 fonts used
- **Embedded images**: 0
- **Checkboxes**: Rendered as the character `q` in extracted text (e.g., `q All Pertinent Records`), indicating graphical checkboxes that are not interactive

The form is technically readable but entirely non-fillable. Patients must print the form, hand-write all fields, and physically sign it. There is no digital submission pathway built into the document itself, though the form does list email as a delivery option for the *records*, not for form submission. The minimal file size and clean text extraction are positives, but the lack of any fillable fields is a significant usability gap in 2026.

## 4. CONTENT DESIGN

**Structure and layout**: The form is organized into labeled sections: releasing organization, recipient, patient information, dates requested, records being requested, delivery options, purpose, and authorization language. The use of grouped section headers (e.g., "Records Being Requested:", "Delivery of Records:", "Purpose:") provides reasonable navigability.

**Record type granularity**: The form offers detailed record-type checkboxes split into two main categories:
- General hospital records: 12 checkbox options (e.g., "Allergies," "Laboratory," "Discharge Summary," "Operative Report," "ER Report," "Pathology Report," "EKG Report," etc.) plus an "All Pertinent Records" option
- "Non-Pertinent Records": 4 additional options including "Official Medical Record" with a note that it "includes pertinent, non pertinent and other sections of the official medical record"
- Behavioral Health Unit/Psychiatric Record: A separate section with 8 pertinent and 3 non-pertinent options

This distinction between "pertinent" and "non-pertinent" records uses HIM jargon that most patients would not understand. The term "Non-Pertinent Records" is particularly confusing — a patient would reasonably wonder why they would want records classified as "non-pertinent."

**Sensitive information handling**: The form takes a **blanket consent approach** on page 2: "I understand that information in my health record may include information relating to Sexually Transmitted Disease, Acquired Immunodeficiency Syndrome (AIDS), Human Immunodeficiency Virus (HIV), and other communicable diseases, Behavioral Health Care/Psychiatric Care, treatment of alcohol and/or drug abuse and genetic testing: my signature authorizes release of any such information." There is no opt-out mechanism for individual sensitive categories (unlike form-1.pdf which provides checkboxes to exclude specific sensitive categories).

A separate drug/alcohol section asks: "DO THE REQUESTED RECORDS INCLUDE DRUG/ALCOHOL TREATMENT RECEIVED: If yes, I release my drug and alcohol information for the following purpose:" — this appears to be a nod to 42 CFR Part 2 requirements, but its relationship to the blanket consent paragraph above is unclear.

**Fee disclosure**: The form states in bold-style formatting: "*There May be a FEE Associated with your Request for Records*" — vague and non-specific. No fee schedule, amounts, or reference to HIPAA fee limits is provided.

## 5. PATIENT-CENTEREDNESS

**Self-request pathway**: The "Purpose" field includes a "Self" checkbox option, indicating the form can be used for patient access requests. However, the form's title ("Authorization for Release of Medical Information") and overall framing suggests a third-party release paradigm. There is no language distinguishing patient access rights under HIPAA from third-party authorizations.

**No patient portal reference**: Unlike form-1.pdf (06/2025), which prominently notes "You can access most of your health information directly through our patient portal," this older form provides no mention of electronic access alternatives.

**Encryption choice**: The form includes an unusual pair of options: "I Do Not want my electronic record encrypted" and "I Do want my electronic record encrypted," placing the burden on the patient to understand encryption implications. The accompanying note warns: "There is some level of risk that a third party could access your Protected Health Information (PHI) without your consent when electronic media or email is unencrypted. We are not responsible for unauthorized access to unencrypted media or email." This liability-shifting language is not patient-friendly.

**Employee verification fields**: Page 2 includes a "For Healthcare Use Only" section with fields for "Employee printed name who completed/reviewed form with patient," "Verbal Release or Viewed EMR," "POA Verified," "ID/License Verified," and "Processing Initials." The "Verbal Release or Viewed EMR" field is unusual and suggests the form may also be used to document verbal authorizations or situations where staff accessed the EMR on the patient's behalf.

**Radiology specification**: The form asks patients to "Specify type of test i.e. X-Ray, CT and location i.e. Shoulder, leg" for radiology records — this level of specificity may be difficult for patients who don't remember exact test types or anatomical designations.

## 6. COMPLIANCE

- **Expiration**: 12 months from date signed (standard)
- **Right to revoke**: Mentioned, with reference to Banner Health's Notice of Privacy Practices for the revocation process
- **Conditioning of treatment**: States "Banner will not condition or deny treatment on my signing this authorization" (required HIPAA language)
- **Right to copy**: "I understand that I have a right to receive a copy of this authorization" (compliant)
- **Re-disclosure warning**: Present
- **Liability release**: "I release Banner Health, its employees and agents, medical staff members and business associates from any legal responsibility or liability for the disclosure of the above information" — this is a broad liability waiver that goes beyond standard HIPAA authorization requirements
- **Blanket sensitive information consent**: The all-or-nothing approach to sensitive information (STD, HIV, behavioral health, substance abuse, genetic testing) does not give patients granular control. While the separate drug/alcohol question may partially address 42 CFR Part 2, the overall approach is less protective than the opt-out model used in form-1.pdf.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket sensitive information consent with no opt-out**: The form authorizes release of STD, HIV/AIDS, behavioral health, substance abuse, and genetic testing information through a single signature with no mechanism to exclude individual categories. The newer form-1.pdf corrected this by offering per-category exclusion checkboxes. Patients using this legacy form surrender granular control over their most sensitive health data.
- **Broad liability release**: The clause releasing Banner Health from "any legal responsibility or liability for the disclosure" goes beyond what HIPAA requires and could discourage patients from seeking recourse for improper disclosures.

### ⚠️ AMBIGUITIES

- **"Pertinent" vs. "Non-Pertinent" records terminology**: This HIM-internal jargon is never defined on the form. A patient cannot meaningfully choose between "All Pertinent Records" and "Official Medical Record (includes pertinent, non pertinent and other sections)" without understanding what these classifications mean.
- **Conflicting drug/alcohol handling**: The blanket authorization on page 2 says the signature "authorizes release of any such information" including substance abuse records, but then a separate Yes/No checkbox asks whether the records include drug/alcohol treatment and requests a specific purpose. It's unclear whether checking "No" on the drug/alcohol question actually overrides the blanket consent above.
- **Fee warning without specifics**: "*There May be a FEE Associated with your Request for Records*" provides no guidance on fee amounts, whether fees apply to patient-directed requests (which HIPAA limits), or how to inquire about costs before submitting.

### ❌ ERRORS

- **Outdated form still publicly accessible**: This form is dated 09/2017 — over eight years old — and remains publicly downloadable from bannerhealth.com alongside the current 06/2025 version. There is no "superseded" or "archived" marking on the form, creating risk that patients or clinic staff use the outdated version.
- **Control character artifacts in extracted text**: The extracted text contains multiple `\b` (backspace) and `\u0007` (bell) control characters in field labels (e.g., "Date of Birth: \b", "Address: \u0007"), suggesting minor PDF encoding issues in the text layer.

### ✨ BRIGHT SPOTS

- **Separate behavioral health record section**: The form provides a dedicated section for behavioral health/psychiatric records with its own granular record-type checkboxes, recognizing that these records may require distinct handling and allowing patients to specifically request only certain portions of behavioral health documentation.
- **Electronic delivery options**: Despite its age, the form offers email and CD delivery alongside paper options, and explicitly addresses encryption preferences — more forward-looking than many forms from the same era.
