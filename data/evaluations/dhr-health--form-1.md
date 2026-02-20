# DHR Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization for Release of Protected Health Information," form number DSR-GEN-71, dated 08/15 (August 2015). It is branded as **"Doctors Hospital at Renaissance"** — the organization's former name — not the current "DHR Health." The address listed is "5501 S. McColl: Edinburg, Texas 78539."

The form is a general-purpose, bidirectional authorization: it can authorize disclosure **from** the hospital to a third party, or **from** a third party **to** the hospital. It is not tailored for patient self-access requests.

A companion Spanish-language version exists (form-2.pdf), which is an image-only scan with no extractable text. Both forms are linked from the same Medical Records page on the DHR Health website.

## 2. FINDABILITY

Per the retrieval notes, the form is reachable in **2 clicks from the homepage** (Patients & Visitors → Medical Records), and the download links are clearly visible on the page with separate English and Spanish options. The current URL (`https://dhrhealth.com/media/q2dm5tx5/medical-records-form-english.pdf`) uses a CMS hash path rather than a descriptive slug, though the filename itself (`medical-records-form-english.pdf`) is descriptive.

One complication: older URLs from web search results (`/app/uploads/2020/10/AuthorizationToDiscloseMedicalInfo-DHRHealth-English.pdf`) now return empty files, indicating a CMS migration that broke inbound links. A patient following a search engine result could end up with a broken download. The current working links are only accessible by navigating the site directly.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — text is extractable, though with artifacts. Several garbled characters appear in the extracted text (e.g., `________________________�-------------` and `-�----Work Phone Number`), suggesting encoding issues or poor PDF generation.
- **Fillable fields**: The metadata reports **37 fillable fields**, but **none have names** (`fillable_field_names: []`). This means the fields exist as interactive elements but lack programmatic labels, which hurts screen reader accessibility and auto-fill functionality.
- **File size**: 190,271 bytes (186 KB) for 2 pages — reasonable, though the file contains 16 embedded images and 11 fonts, which is heavier than necessary for a simple authorization form.
- **Format**: Not an image-only scan, but the text extraction artifacts and high image count suggest this is a hybrid — likely a designed layout with graphical elements overlaid, rather than a clean digital-first document.
- **Digital-first design**: No. The form's visual structure, checkbox-heavy layout, and encoding artifacts point to a design intended for print, subsequently exported to PDF. The unnamed fillable fields feel like an afterthought addition rather than part of a considered digital workflow.

## 4. CONTENT DESIGN

**Length**: 2 pages is appropriate for a release authorization.

**Structure**: The form uses a dual-section layout:
- Section 1: "I hereby authorize Doctor's Hospital at Renaissance to disclose records..."
- Section 2 (preceded by "OR"): "I hereby authorize ______________ to disclose records... to Doctor's Hospital at Renaissance"

This bidirectional design forces the patient to understand which direction the disclosure flows and select the correct section — a conceptual burden that a patient requesting their own records shouldn't need to navigate.

**Record type selection**: The form offers a detailed checklist of specific record types: Cardiac Studies, Consult Reports, Discharge Summary, EKGs, Emergency Room Record, Face Sheet, History & Physical, Lab Reports, Medication Record, Nursing Notes, Operative Report, Pathology Report, Physician Orders, Progress Notes, Psychological Records, Psychiatric Records, Radiology Reports/Films, Rehab Services, plus "Other" and "Billing Office" options. This is reasonably comprehensive.

**Type of access**: Offers "Copies of Record" and "Review of Record" checkboxes — a useful distinction.

**Readability**: The language is legalistic but not impenetrable. The form uses institutional jargon ("PHI," "disclosure") without defining these terms for a lay audience. The sentence about psychiatric/substance abuse/HIV records is a dense, compound construction: "Do Not consent to release of information relating to psychiatric or psychological testing or treatment, biofeedback training, alcohol and/or drug abuse diagnosis, prognosis and treatment and/or HIV (AIDS) testing and/or results, or such disclosure shall be limited to the following specific types of information." This is difficult to parse and the Do/Do Not consent structure via initials could easily confuse a patient.

**Layout**: The extracted text suggests a cramped layout with checkboxes arranged in multiple columns. The presence of 16 embedded images for a 2-page form indicates heavy use of graphical elements (likely logos, borders, or decorative lines).

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **generic release form** that does not distinguish between a patient requesting their own records under HIPAA's Right of Access and a third-party authorization. A patient wanting copies of their own chart must fill out the same form as an attorney requesting records — selecting the correct directional section and identifying themselves as both the authorizer and the recipient. There is no streamlined patient self-access pathway.

**Personal information required**: The form requests Patient's Printed Name, Date of Service, Complete Address (with City/State/Zip), Patient's Birthdate, **Social Security Number**, Work Phone, Home Phone, and Cell Number. Requiring a full SSN for a records release is excessive and creates an identity theft risk, especially for forms submitted by fax or mail.

**Scope options**: Patients can select specific record types via checkboxes and can specify dates of service — a reasonable level of granularity.

**Format/delivery options**: No mention of electronic delivery, email, patient portal, or any digital delivery option. The form provides fields for phone and fax numbers of the recipient, implying paper-based delivery (mail or fax). No mention of fees or turnaround times.

**Rights information**: No reference to HIPAA § 164.524, patient rights, or the right to receive records in electronic format. No mention of EHI export or bulk data access. No explanation of what happens after submission. The form provides no context about the patient's legal right to access their own records.

**Purpose field**: The form includes a field to "List the purpose(s) for the release or disclosure of Protected Health Information." Under HIPAA Right of Access, patients do not need to state a purpose for requesting their own records. Including this field without clarification that it's optional for patient self-access could deter patients or make them feel their request requires justification.

## 6. COMPLIANCE

- **SSN requirement**: Requesting a Social Security Number is not required by HIPAA for a records release and creates unnecessary risk. The form does not indicate whether this field is optional.
- **Purpose requirement**: The purpose field, while standard on third-party release forms, is problematic in a patient self-access context because HIPAA does not require patients to state a reason for accessing their own records.
- **Psychiatric/substance abuse/HIV consent**: The form includes a separate initials-based Do/Do Not consent mechanism for sensitive categories (psychiatric, substance abuse, HIV). This is consistent with 42 CFR Part 2 and many state laws, but the execution is confusing — the sentence structure makes it unclear whether initialing means consent or non-consent.
- **Authorization expiration**: No expiration or auto-revocation clause is visible in the extracted text. The absence of an expiration date means the authorization could theoretically remain active indefinitely.
- **Form age**: Dated 08/15 (August 2015) — over 10 years old. The form predates the 2016 HIPAA Right of Access enforcement guidance and the 21st Century Cures Act (2016). It uses the organization's former name.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Social Security Number requested**: The form includes a field for "Patient's Social Security Number" with no indication it is optional. Collecting SSNs for records release creates identity theft risk and is not required by HIPAA. This is especially concerning for a form likely transmitted by fax or mail.
- **Purpose field without Right of Access exemption**: The form asks patients to "List the purpose(s) for the release or disclosure of Protected Health Information." HIPAA § 164.524 does not require patients to state a purpose when exercising their Right of Access. The form doesn't clarify that this is optional for patients requesting their own records.

### ⚠️ AMBIGUITIES
- **Do/Do Not consent construction**: The psychiatric/substance abuse/HIV consent section uses an initials-based "Do / Do Not" mechanism in a dense compound sentence. The structure — "___ (Initials) __Do Not consent to release of information relating to psychiatric or psychological testing or treatment, biofeedback training, alcohol and/or drug abuse diagnosis, prognosis and treatment and/or HIV (AIDS) testing and/or results" — is ambiguous. It's unclear how a patient indicates they **do** consent, since only "Do Not" is spelled out in the text.
- **Bidirectional form without guidance**: The two-section "OR" structure (disclose from hospital vs. disclose to hospital) provides no guidance on which section a patient requesting their own records should complete.
- **No expiration clause**: The authorization has no stated expiration or revocation mechanism in the extracted text, leaving it unclear how long the authorization remains valid.

### ❌ ERRORS
- **Outdated organization name**: The form is branded "Doctors Hospital at Renaissance" throughout, despite the organization having rebranded to "DHR Health." This creates a disconnect between the form and the website where it's hosted.
- **Broken legacy URLs**: The older download URL (`/app/uploads/2020/10/...`) returns an empty file. Patients or referring providers who bookmarked or cached the old link will get a non-functional download.
- **Text encoding artifacts**: The extracted text contains garbled characters (e.g., `�` appearing in address and phone fields), indicating PDF encoding or font embedding issues.
- **Form date**: "08/15" (August 2015) — over a decade old and predating significant regulatory changes including the 21st Century Cures Act.

### ✨ BRIGHT SPOTS
- **Bilingual availability**: Providing both English and Spanish versions of the form is a meaningful accommodation for the Rio Grande Valley patient population, where Spanish is widely spoken.
- **Granular record type selection**: The detailed checkbox list of specific record types (cardiac studies, EKGs, pathology, radiology, etc.) gives patients meaningful control over the scope of their request.
- **Easy website navigation**: The form is only 2 clicks from the homepage via a clearly labeled "Medical Records" page, with separate, clearly labeled download links for each language.
