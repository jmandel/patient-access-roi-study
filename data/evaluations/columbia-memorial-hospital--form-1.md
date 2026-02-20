# Columbia Memorial Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page general Release of Information (ROI) authorization form titled "RELEASE OF INFORMATION," internally designated "HIPAA Form 3B" (revised 02-25). It is a standard authorization for release of protected health information — not a patient-access-specific request form. The form is designed for bidirectional records transfer: Section C provides both "Send Records To" and "Request Records From" fields, indicating it serves both outgoing disclosures and incoming record requests.

A companion document (form-2.pdf, "HIPAA Form 3Bsp") is a Spanish-language translation of this same form, revised 08-15-17. The English version is notably more recent (revised February 2025 vs. August 2017 for the Spanish version), raising the question of whether the Spanish form has been updated to match.

## 2. FINDABILITY

The form was easy to locate. Per the retrieval notes, the hospital's Medical Records page at `https://www.columbiamemorial.org/patients-and-visitors/medical-records/` links directly to the PDF. The page is reachable via intuitive navigation (Patients & Visitors → Medical Records). The source URL (`hipaa-form-3b.pdf`) is functional but uses an internal naming convention that would be opaque to a patient encountering it in isolation. The Medical Records page also explicitly states that "Records are free to patients who request their records," which is a helpful contextual detail adjacent to the form link.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and functional. The full text is cleanly extractable at 3,041 characters, with no OCR artifacts or garbled text.

**Fillable fields:** Zero interactive form fields (`fillable_field_count: 0`). Despite being a digitally-authored PDF (not a scan), the form relies entirely on printed blank lines for data entry. A patient who downloads this form must print it out and handwrite their information or use a PDF annotation tool.

**File format:** PDF 1.6, 144 KB for 2 pages — reasonable file size. The document uses 3 fonts and contains 3 embedded images (likely the hospital logo and decorative elements). It is not an image-only scan (`is_image_only_scan: false`), confirming it was created digitally.

**Assessment:** The form is technically accessible for reading and text extraction but fails as a digital-first document due to the complete absence of fillable fields. This is a missed opportunity given that the PDF was clearly authored in a layout tool, not scanned from paper.

## 4. CONTENT DESIGN

**Length:** 2 pages. Page 1 is the patient-facing authorization; page 2 is entirely for hospital use (staff verification, ID checking, release tracking). This is an appropriate length — the patient only needs to engage with page 1.

**Organization:** The form uses a clear section-based structure:
- **Section A:** Patient Information (name, address, telephone, DOB)
- **Section B:** Protected health information to be released — a checklist of 11 record types (Emergency Room, Lab Reports, Imaging CD/Reports, EKG/EEG, History & Physical, Inpatient Progress Notes, Operative Report, Discharge Summary, Clinic Chart Notes, Physical Therapy, Other) each with a "Date of Service OR Description of Service" column
- **Section C:** Send-to/Request-from addresses
- **Section D:** Special release categories requiring separate initialing (HIV/AIDS/STDs, Mental Health, Drug/Alcohol, Genetic Info)
- **Section E:** Purpose of authorization (checkboxes: Continuing Care, Insurance, Legal, Other)

**Clarity:** The opening purpose statement — "This form is an authorization to release protected health information" — is direct and plain-language. The signature block language is standard: "I have had the full opportunity to read and consider the contents of this authorization. I understand that by signing this form I am confirming my authorization for the use and/or disclosure of my protected health information." This is clear without being excessively legalistic.

**Layout concerns:** The form packs Sections B and C side-by-side (based on the column structure visible in the text extraction), which is reasonably space-efficient but may create visual density. The record-type checklist uses blank lines for dates rather than checkboxes, making it slightly ambiguous whether a patient should write a date or leave blank for "all dates."

**Missing elements:** There is no field for a date range limiting the scope of records requested. There is no explicit expiration date field, though the signature section includes a date line.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general-purpose ROI form, not a patient-access-specific form. Nothing on the form distinguishes between a patient requesting their own records and a third party requesting records with patient authorization. The "Purpose" checkboxes (Continuing Care, Insurance, Legal, Other) don't include "Personal use" or "Patient access" as an option, which means a patient requesting their own records would need to select "Other" and write in their reason.

**Scope options:** The form provides good granularity for selecting record types (11 specific categories plus "Other"), and each category has a date/description field. However, there is no simple "all records" checkbox, and there is no date range selector (e.g., "records from ___ to ___"). A patient wanting complete records would need to check every box individually.

**Format/delivery options:** The form does not offer the patient any choice of delivery format (paper, electronic, CD, etc.). The hospital's page 2 includes staff checkboxes for "Pt. Pick-Up," "Mailed," "Faxed," and "Electronic" — but these are internal-use fields, not patient-facing choices. The patient has no way to indicate their preferred delivery method.

**Rights language:** The form does not reference HIPAA § 164.524, the patient's Right of Access, or any patient rights information. There is a note that "YOU ARE ENTITLED TO A COPY OF THIS AUTHORIZATION AFTER YOU SIGN IT," which is a HIPAA-compliant notice about the authorization copy, but this is about the authorization document itself, not about the right to access records.

**EHI Export / bulk data:** No mention of electronic health information export, bulk data, or digital formats.

**Submission method:** The form header lists a phone number (503-338-7528) and fax number (503-325-6841), and Section C includes an email address field for the records destination. However, the form itself doesn't specify how to submit the completed authorization (mail, fax, in-person, email). The retrieval notes mention processing time of "72-96 business hours" but no submission channel guidance.

## 6. COMPLIANCE

**Special release categories:** Section D appropriately requires separate initialing for HIV/AIDS/STDs, Mental Health Diagnosis and Treatment, Drug/Alcohol Diagnosis and Treatment, and Genetic Information. This is consistent with state and federal requirements for heightened protections on these categories (42 CFR Part 2 for substance use, various state mental health confidentiality laws).

**Expiration/revocation:** The notes reference expiration/revocation language, but the extracted text does not include an explicit expiration period or revocation instructions. This is a gap — HIPAA requires that a valid authorization include either an expiration date or an expiration event (45 CFR § 164.508(c)(1)(v)).

**Fee disclosure:** The Medical Records page states "Records are free to patients who request their records," but the form itself contains no fee information. This separation means a patient who receives the form secondhand (not from the website) would have no information about costs.

**No notarization or in-person requirement** is stated on the form, which is appropriate.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Missing expiration date/event:** The extracted form text contains no expiration clause, no expiration date field, and no revocation instructions. HIPAA § 164.508(c)(1)(v) requires a valid authorization to include an expiration date or event. This may render authorizations signed on this form technically non-compliant.

### ⚠️ AMBIGUITIES

- **No submission instructions:** The form provides no guidance on how to submit the completed authorization — no mailing address is provided (only the hospital's header address), and there's no mention of fax, email, or in-person submission as options. A patient filling this out independently would have to guess.
- **"Purpose" options don't include patient access:** The four purpose choices (Continuing Care, Insurance, Legal, Other) don't acknowledge that a patient might be requesting records for themselves. A patient must select "Other" and write in a purpose, which implies this use case wasn't a primary design consideration.
- **Date of Service field ambiguity:** Each record type has a "Date of Service OR Description of Service" field, but it's unclear whether leaving it blank means "all dates" or "none selected." There are no instructions clarifying this.

### ❌ ERRORS

- **Spanish version significantly outdated:** The English form (HIPAA Form 3B) was revised 02-25, while the Spanish version (HIPAA Form 3Bsp) was revised 08-15-17 — nearly 8 years older. If the English form was substantively updated, the Spanish version may contain outdated language, different fields, or missing sections.

### ✨ BRIGHT SPOTS

- **Bilingual availability:** Providing both English and Spanish versions of the ROI form is uncommon and demonstrates attention to the community's language needs (Astoria, OR has a notable Spanish-speaking population).
- **Free records for patients:** The Medical Records page explicitly states "Records are free to patients who request their records" — a clear, patient-friendly commitment that exceeds what many organizations communicate.
- **Clean, well-structured layout:** The sectioned design (A through E) with distinct purposes per section makes the form navigable and logically organized, better than many single-block authorization forms.
- **Granular record-type selection:** Offering 11 specific record categories allows patients to request exactly what they need rather than an all-or-nothing approach.
