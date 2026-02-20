# Fisher-Titus Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **Authorization to Disclose PHI (Protected Health Information)** form — the organization's primary Release of Information form. It is identified as **Form #FTC24-5, revised 11/20/2024**, and is a 2-page, 8-section document covering patient information, recipient designation, treatment location, purpose, record types, format/delivery options, sensitive information consent, and authorization expiration.

Three documents were downloaded for this organization:
- **form-1.pdf** (this document): The primary ROI/authorization form, found on the Patient Forms page. Revised 11/20/2024.
- **form-2.pdf**: An unrelated Emergency Medical Authorization form (Form #FTC11-4) for parents/guardians authorizing emergency treatment for minors. Not an ROI form.
- **form-3.pdf**: A nearly identical version of the same form (same form number FTC24-5), found on the Medical Records page, revised 07/16/2025. Minor differences include "Occupational Health" replacing a duplicate "Behavioral Health" entry under specialty offices, and the removal of the "Reproductive Health" checkbox in the sensitive information consent section. This appears to be a slightly updated revision.

Form-1.pdf is the version linked from the Patient Forms page and is the earlier of the two ROI form revisions.

## 2. FINDABILITY

The form was **easy to locate**. According to retrieval notes, it was found within 2 clicks from the homepage: Patients & Guests → Patient Forms. The Patient Forms page (`/patients-guests/patient-forms`) clearly lists downloadable forms with descriptions and provides a direct PDF download link. Additionally, a version of this form is also available on the Medical Records page (`/medical-records`), providing two independent paths to find it.

The URL is descriptive: `https://www.fishertitus.org/media/2025/07/Service-Documents_FTC24-5-Authorization-to-disclose-PHI.pdf` — including the form number and purpose. No login wall, bot blocking, or JavaScript-rendered download links were encountered. Web searches for the organization's name combined with ROI-related keywords also successfully located the form.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: The form has an extractable text layer (6,177 characters) and is **not** an image-only scan. Text extracted cleanly via `pdftotext`.

**Fillable fields**: The form has **zero fillable fields** (`fillable_field_count: 0`). Despite being a digitally-created document (not a scan), all fields are blank lines rendered as underscores. Patients must print and hand-fill the form or use a PDF annotation tool.

**File format**: 158,608 bytes (159 KB) across 2 pages, with 4 fonts and 4 embedded images. The file size is reasonable for the content. This appears to be a digitally designed document (consistent fonts, clean layout) rather than a scan, but it was **designed for print** rather than digital completion.

**Digital-first design**: No. The form uses typographic underscores for blank lines and checkbox symbols (☐) that are not interactive. This is a print-first design distributed digitally.

## 4. CONTENT DESIGN

**Length**: 2 pages is proportionate to the content. The form packs substantial detail — 17+ record type checkboxes, multiple delivery options, and sensitive information consent — without unnecessary padding.

**Clarity**: The language is **moderately clear**. Section headers are numbered (1–8) and descriptive ("PATIENT INFORMATION," "PURPOSE OF REQUEST," "FORMAT AND DELIVERY OF INFORMATION"). However, the legal boilerplate in Section 7 uses complex sentence structures: *"I understand that the information disclosed pursuant to this Authorization may be subject to re-disclosure by the recipient and may no longer be protected under federal privacy law."* This is standard legal language but not plain-language.

**Organization**: The logical flow is well-structured: patient info → recipient → location → purpose → records → format → consent → signature. This follows a natural progression that a patient would expect.

**Layout**: Section 5 (record types) is dense — 17+ line items with parenthetical instructions like *"(list date(s) or type(s) of reports)"* crammed onto single lines. The treatment location section (Section 3) lists multiple clinics with phone/fax numbers, which is useful but adds visual density. The second page is less cramped, with the sensitive information consent and signature block having adequate spacing.

**Font size**: Based on the extracted text and 4 fonts, text appears to use a mix of heading and body sizes. The form's total text per page (~3,000 characters on page 1) suggests a small-to-moderate font size given the amount of content.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose authorization form** that serves both patients and third parties. Section 2 includes a **"☐ Self (same info as above)"** checkbox, which explicitly accommodates patients requesting their own records. However, the form title — "Authorization to Disclose PHI" — and overall framing position it as a third-party release form that patients happen to be able to use. There is no separate, patient-access-specific form.

**Scope options**: The form provides **excellent granularity** for record selection in Section 5. Patients can choose from 17+ specific record types (discharge summaries, H&P, consultation reports, operative reports, lab reports, pathology, radiology reports, radiology images, therapy records, immunizations, ED records, clinic visits, billing records, and "Entire Record"). Each has a space for dates of service. There is also an option for "Any future records through one year of signature."

**Format options**: The form offers **four format options** — CD (hospital only), Flash Drive, Encrypted Email, and Paper — and **three delivery methods** — Fax, Mail, and In-Person Pick Up. The inclusion of encrypted email as a format option is notably patient-friendly.

**Right of Access language**: The form does **not** explicitly reference HIPAA § 164.524 or the patient's right of access. There is no plain-language explanation of patient rights. The form does state: *"I understand that I may refuse to sign this Authorization. If I do not sign this Authorization, Fisher-Titus Health will continue to provide treatment and seek payment for services provided."*

**EHI Export awareness**: There is **no mention** of electronic health information export, bulk data, or patient portal alternatives.

## 6. COMPLIANCE

**Fees**: The form states *"Fisher-Titus Health may charge a fee for providing the information specified above"* but does not disclose the amount or fee schedule. No fee amount is quoted on the form.

**Expiration**: Section 8 states *"This Authorization will automatically expire one year from the date signed below unless revoked or another date or event is written here."* A 1-year expiration is reasonable and standard.

**Revocation**: The form clearly states patients may revoke authorization in writing at any time, with the standard exception for actions already taken. This is appropriate.

**Conditioning of treatment**: The form explicitly states treatment and payment will not be conditioned on signing: *"If I do not sign this Authorization, Fisher-Titus Health will continue to provide treatment and seek payment for services provided."*

**SSN collection**: Section 1 requests the patient's **Social Security Number** (SS#). While this may assist with record matching, collecting SSN on a form that could be faxed or mailed raises security concerns and is not required by HIPAA.

**Witness requirement**: The signature block includes a **"Witness Signature"** line with a date field. The form does not explain when a witness is required, leaving patients to guess whether this is mandatory for all submissions.

**Re-disclosure warning**: Present — *"I understand that the information disclosed pursuant to this Authorization may be subject to re-disclosure by the recipient and may no longer be protected under federal privacy law."*

**Sensitive information**: Section 7 requires **separate, explicit consent** for sensitive categories (Alcohol/Drug Abuse, Mental Health, STDs, HIV/AIDS). In form-1.pdf, Reproductive Health is also listed. This granular consent for 42 CFR Part 2 and state-protected information is compliant.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN requested on the form**: Section 1 includes a field for "SS#" (Social Security Number). HIPAA does not require patients to provide their SSN to exercise their right of access, and collecting it on a form that may be transmitted via fax or mail creates unnecessary identity theft risk.

### ⚠️ AMBIGUITIES

- **Witness requirement unexplained**: The form includes a "Witness Signature" line but provides no guidance on when a witness is needed. Is it always required? Only for representative signers? Patients may be unsure whether their request will be processed without a witness.
- **Fee disclosure vague**: The form states fees "may" be charged but gives no amount or range. A patient cannot assess cost before submitting.
- **Two versions of the same form exist on the website**: Form-1.pdf (revised 11/20/2024) is on the Patient Forms page, while form-3.pdf (revised 07/16/2025) is on the Medical Records page. They share the same form number (FTC24-5) but differ in content (duplicate "Behavioral Health" vs. "Occupational Health," and form-1 includes "Reproductive Health" in the sensitive info section while form-3 does not). A patient could encounter either version depending on their navigation path, with no indication which is current.

### ❌ ERRORS

- **Duplicate "Behavioral Health" entry**: In Section 3 (Treatment Location), the specialty offices list includes "Behavioral Health" twice as two separate checkboxes. This appears to be a data entry error (form-3.pdf corrects this by replacing one with "Occupational Health").

### ✨ BRIGHT SPOTS

- **"Self" checkbox for patient access**: The inclusion of "☐ Self (same info as above)" in Section 2 explicitly accommodates patients requesting their own records, reducing friction compared to forms that only contemplate third-party recipients.
- **Encrypted email as a delivery format**: Offering encrypted email alongside CD, flash drive, and paper is notably patient-friendly and progressive for a community hospital. Many larger systems do not offer this option.
- **Granular record type selection**: The 17+ specific record categories with date fields in Section 5 give patients fine-grained control over what is released, which is both privacy-protective and useful.
- **Easy findability with multiple access paths**: Two separate website pages link to the form, and the URL is descriptively named. This is well above average for a community hospital.
