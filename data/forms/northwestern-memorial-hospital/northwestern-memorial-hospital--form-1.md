# Evaluation: Northwestern Memorial Hospital — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is the primary English-language **"Authorization for Release of Medical Information"** — a 2-page, system-wide Release of Information (ROI) form used across all Northwestern Memorial HealthCare (NMHC) entities. Form number 8094, revised 2/2026. It covers 11 named hospitals, physician groups (Northwestern Medical Group, Regional Medical Group, Florida Medical Group), behavioral health locations, and an "All Northwestern Memorial HealthCare Entities" catch-all checkbox.

Two companion documents exist for this organization: form-2.pdf is a separate **inbound** records request form ("Authorization to Disclose Health Information TO Northwestern Memorial Healthcare," form 6276, revised 2/2022) — the reverse direction. form-3.pdf is a **Spanish-language translation** of form-1 (form 8094SP, revised 8/2024). Together, these three forms constitute a well-organized records ecosystem: outbound release in English and Spanish, plus inbound request.

## 2. FINDABILITY

Per the retrieval notes, the form was trivially easy to locate. A web search for "Northwestern Memorial Hospital authorization release health information form PDF" immediately returned a direct download link to the PDF hosted on nm.org's media CDN (`nm.org/-/media/northwestern/resources/patients-and-visitors/...`). No navigation through the website was required; the form appeared directly in search results. The URL is descriptive (includes "authorization-of-release-of-information-english"), and the Spanish version URL follows the same pattern with "-spanish" suffix. The filename and URL make the document's purpose unambiguous.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and fully extractable (6,900 characters). Not an image-only scan.
- **Fillable fields**: 79 interactive form fields — an unusually high count for a 2-page form, indicating thorough digital form design. This includes text inputs for patient demographics, checkboxes for hospital/record-type selections, and delivery method options. The `fillable_field_names` array is empty in metadata, but the field count confirms interactive PDF elements.
- **File size**: 364,835 bytes (356 KB) for 2 pages — reasonable for an interactive PDF with no embedded images.
- **Font count**: 9 fonts used — indicates designed typography rather than a scan.
- **Embedded images**: 0 — the form is entirely text/vector-based.
- **Digital-first design**: This is clearly a digitally authored form, not a scanned paper document. The presence of 79 fillable fields, clean text extraction, and zero embedded images all confirm this. The form was designed for on-screen completion.

One limitation: the extracted text shows Unicode placeholder characters (`\b���...`) for fillable text fields, which is typical of PDF form field rendering in text extraction. This doesn't affect usability in a PDF reader but does mean text extraction gives garbled output for field areas.

## 4. CONTENT DESIGN

**Length and proportionality**: 2 pages is appropriate for this scope. Page 1 covers patient info, facility selection, record types, and delivery method. Page 2 covers medical images, recipient info, sensitive-record opt-outs, legal disclosures, and signatures. The content is dense but not excessive.

**Organization**: The form follows a logical flow:
1. Patient Information (demographics)
2. Release Information From (facility selection)
3. Purpose of Information Release
4. Medical Records to Be Released (record types, date range, delivery method)
5. Medical Images to Be Released (separate section on page 2)
6. Send Information To (recipient details)
7. Sensitive information opt-out checkboxes
8. Legal disclosures and rights
9. Signature blocks
10. Submission instructions

**Clarity**: The instructions line "Please print clearly and complete both pages" is straightforward. Record-type categories use helpful parenthetical explanations — e.g., "Emergency Department Visit (ED provider notes, progress notes, consultations, procedure notes, test results)" and "Hospital Stay (History and physical, progress notes, consultations, operative reports, discharge summary, test results)." This is unusually helpful in telling patients what each category includes.

**Legal language**: The legal disclosure section on page 2 is dense but covers important ground: 30-day response window, re-disclosure risks, right to refuse without care denial, right to revoke in writing, 6-month authorization validity, and Illinois-specific protections for sensitive records. The language is somewhat complex but not impenetrably legalistic.

**Default date range**: "If no dates listed, records will include the past 24 months" — a reasonable default that protects both the patient and organization.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general-purpose authorization. Purpose options include "Personal Use" as a checkbox alongside "Further Treatment/Continued Care," "Attorney/Client," and "Insurance." The "Personal Use" option clearly supports patient self-access, though the form does not distinguish between patient access rights under HIPAA § 164.524 and third-party release under § 164.508. The form title — "Authorization for Release of Medical Information" — frames this as a release/disclosure, not as an access request.

**Scope options**: Patients can specify:
- Which NMHC facility/facilities (11 hospitals, physician groups, behavioral health, or all entities)
- Purpose of release
- Date range for records
- Specific record types (ED visits, hospital stays, outpatient surgery, clinic visits, test results, other)
- Specific clinic or physician
- Medical images (radiology, mammography, cardiology) on page 2
- Delivery method

**Delivery method options**: Notably strong. The form offers: MyNM (patient portal), Fax, E-mail, and US Mail with format sub-options (CD or Paper). The portal option is a standout feature for electronic access.

**Sensitive information handling**: Uses an opt-out model: "Unless checked below, I understand that the released information may include the following information. Check if you do NOT want to include:" with checkboxes for AIDS/HIV, substance/alcohol abuse, genetic testing/counseling, and mental health/developmental disability records. This is Illinois-compliant and gives patients granular control.

**Right to revoke**: Clearly stated — must be done in writing, with a phone number provided (877.973.2673, TTY: 711). TTY inclusion is an accessibility positive.

**No mention of**: HIPAA Right of Access (§ 164.524), EHI export, or bulk data options. The form does not reference patient rights to receive records in electronic format under HIPAA or the 21st Century Cures Act.

## 6. COMPLIANCE

**Authorization validity**: 6 months from signature date — a reasonable timeframe that is neither too restrictive nor too permissive.

**Response time**: "Northwestern Memorial HealthCare has up to 30 days to review and respond to requests" — this matches HIPAA's 30-day window for Right of Access requests.

**Fees**: "Standard record copying fees per 735 ILCS 5/8-2006 may apply" — references the Illinois medical records copying fee statute. No specific dollar amounts are disclosed upfront.

**Care denial**: The form correctly states that NMHC "may not deny me care based on the fact that I did not sign it," with the narrow exception for care provided solely to collect information for third-party release (e.g., pre-employment exams).

**Submission methods**: Three options provided — mail (25 North Winfield Road, Winfield, IL 60190), fax (312.926.3093), and email (releaseofinformation@nm.org). Multiple submission channels reduce barriers.

**Minor signatures**: Patients 12-17 must sign for sensitive categories (mental health, substance abuse, HIV, STIs, pregnancy, sexual assault, birth control). This aligns with Illinois minor consent laws.

**42 CFR Part 2**: The form includes appropriate language about federal substance use disorder confidentiality rules.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **MyNM portal delivery option**: Offering patient portal delivery alongside mail, fax, and email is forward-thinking and removes a common access barrier. Many organizations only offer mail or fax.
- **Spanish-language version available** (form-3.pdf): A full Spanish translation of the same form demonstrates commitment to language access.
- **Record-type parenthetical explanations**: Each record category includes a detailed list of what it encompasses (e.g., "Hospital Stay (History and physical, progress notes, consultations, operative reports, discharge summary, test results)"), which helps patients make informed selections rather than guessing.
- **Three submission channels including email**: Mail, fax, and email (releaseofinformation@nm.org) gives patients flexibility. Email submission is still uncommon among healthcare organizations.
- **79 fillable fields**: The form is thoroughly interactive, allowing full digital completion without printing.
- **Memorable phone number**: 877.9RECORD (877.973.2673) is an effective patient-friendly touch.

### ⚠️ AMBIGUITIES
- **Patient access vs. third-party release conflation**: The form does not distinguish between a patient requesting their own records under HIPAA's Right of Access (which has stricter timelines, fee limits, and fewer permissible barriers) and a third-party release authorization. A patient checking "Personal Use" is functionally exercising their Right of Access, but the form treats it identically to an attorney or insurance release. This matters because Right of Access requests have different fee and timing rules under HIPAA.
- **Fee language is vague**: "Standard record copying fees per 735 ILCS 5/8-2006 may apply" gives no indication of actual cost. For patient access requests specifically, HIPAA limits fees to a reasonable, cost-based amount — the Illinois statute's fee schedule may exceed HIPAA limits for patient self-access. The form does not clarify which fee regime applies when.

### 🚩 RED FLAGS
- **No HIPAA Right of Access acknowledgment**: The form never references 45 CFR § 164.524 or the patient's right to access their own records. By channeling all requests through a general authorization form, the organization may inadvertently apply third-party release procedures (including potentially higher fees and broader discretion to deny) to what should be treated as Right of Access requests.
