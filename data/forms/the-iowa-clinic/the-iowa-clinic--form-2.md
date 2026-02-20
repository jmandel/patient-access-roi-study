# Evaluation: The Iowa Clinic — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a two-page "Authorization for Release of Information from The Iowa Clinic, P.C." dated October 2012. It is the older of two archived ROI forms found for this organization. Page 1 is a general authorization for releasing medical records to a specified recipient. Page 2 is a "Specific Authorization for Release of Information protected by State or Federal Law concerning Mental Health, Substance Abuse Treatment or AIDS-Related Information." This second page functions as a supplemental consent for specially protected categories under 42 CFR Part 2 and Iowa Code Chapters 228 and 141(A).

The organization also has a newer form (form-1.pdf), which is a single-page version that consolidates the sensitive-information opt-out onto the same page and uses a cleaner layout. Neither form is currently available on The Iowa Clinic's live website — both were retrieved via the Wayback Machine from 2012–2016 archives. The Iowa Clinic has since transitioned entirely to online web-based forms via third-party platforms (Datavant/Swellbox, Formstack, SmartRequest).

## 2. FINDABILITY

This form is **not findable through the organization's current website**. The original URL (`http://www.iowaclinic.com/static/docs/medical-records-release-form.pdf`) returns a 404. The form was only retrievable through the Wayback Machine, having been archived in 2012 and 2016. The retrieval notes document that site searches, direct URL probing, and website navigation all failed to locate a downloadable PDF. The Iowa Clinic's current medical records page routes patients through multiple third-party web portals (Swellbox for patient requests, SmartRequest for third-party organizations, Formstack for imaging and executive health). The filename `medical-records-release-form.pdf` is descriptive and appropriately named, but that is moot since the link is dead.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The document has extractable text, though the extracted content is heavily littered with tab and carriage-return characters (`\t\r`), making the raw text nearly unreadable without cleanup. This suggests the PDF was authored with unusual formatting — likely using tab stops for layout rather than proper typographic structure.
- **Fillable fields**: Zero (`"fillable_field_count": 0`). Despite having blank lines for patient name, address, dates, etc., none are interactive form fields. A patient would need to print and handwrite, or use a PDF annotation tool.
- **File size**: 76,365 bytes for a 2-page document — reasonable, though it contains 1 embedded image (likely a logo) and only 2 fonts.
- **Digital-first design**: No. The layout with underscored blank lines (`Name:_____________________________________`) and fill-in blanks formatted via tab characters indicates this was designed primarily for paper use. The `__` prefix used for record-type checkboxes (e.g., `__ Complete records`, `__ Lab data`) is a plaintext simulation of checkboxes rather than actual interactive checkbox fields.
- **Font count**: Only 2 fonts, suggesting a simple, minimally styled document.

## 4. CONTENT DESIGN

**Length**: Two pages, which is proportionate to the content. Page 1 covers the general authorization; page 2 covers special consent for sensitive information categories. This is a reasonable split.

**Clarity**: The language is functional but dense in places. The opening authorization paragraph is a single run-on clause: "I, as the patient or patient's legal representative, authorize The Iowa Clinic, P.C. or affiliate of The Iowa Clinic to disclose, release and deliver confidential medical information according to this Authorization." The redisclosure warning is written at a high reading level: "I understand that if the person or entity that receives the information requested is not covered by the federal privacy regulations or is not an individual or entity who has signed an agreement with a covered person or entity, the medical information may be redisclosed and will no longer be protected by the regulations."

**Organization**: Sections flow logically — patient information → sender/recipient → record types → purpose → legal disclosures → signature. However, there are no section headers or visual separators beyond white space. The record-type checkboxes and purpose-of-release options are laid out inline with tab-spaced formatting that likely looks acceptable in PDF rendering but extracts poorly.

**Record types offered**: Complete records, Lab data, Operative report, EKG, History & Physical, Radiology data, Discharge Summary, and Other.

**Purpose options**: Transferring Medical Care, Insurance Coverage, Case Coordination/Referral, Moving, Legal Purposes, At Request of Patient, and Other.

**Layout concerns**: The tab-heavy formatting (`\t\r` throughout the extracted text) suggests the visual layout relies on whitespace positioning rather than structured elements. This approach is fragile — it depends on specific rendering to look correct and produces garbled text when extracted programmatically.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is framed as a general release authorization ("authorize The Iowa Clinic...to disclose, release and deliver confidential medical information"), not specifically as a patient access request under HIPAA § 164.524. It asks where to "Send records to" (implying a third-party recipient), though a patient could presumably list themselves. There is no explicit "I am requesting my own records" pathway or checkbox. The purpose option "At Request of Patient" is the closest indicator, but it still frames the patient as directing a release rather than exercising a right of access.

**Scope options**: The form provides reasonable scope controls — checkboxes for record types and a date range field ("Dates: __________________________________________"). This gives patients meaningful control over what is released.

**Format options**: The form states: "Records may be provided in electronic form on a secure disk. Paper records are available upon request." This acknowledges electronic delivery as an option, though "secure disk" is an outdated format. Fax and email are also addressed, though the electronic transmission clause bundles in a liability waiver: "If any portion of the fax/e-mail is received by an inappropriate third party in error, I release The Iowa Clinic, its physicians and staff of any and all liability relating to the submission of said records."

**Submission methods**: The form provides fax (515-875-9600) and mail (The Iowa Clinic Support Services, 6800 Lake Dr., Ste 270, West Des Moines, IA 50266) as submission options. No email or online submission option is mentioned.

**Right of Access language**: The form does not reference HIPAA § 164.524 or explicitly describe the patient's right of access. It states: "I understand I have the right to inspect the information to be disclosed upon the proper notification" — which references the right to inspect but not the broader right to obtain copies.

**Fees**: The form mentions fees but is vague: "The Iowa Clinic charges a cost-based fee for the copying and releasing of medical records." No specific amounts are disclosed. Unlike form-1, this version does not provide a phone number for fee questions.

**Sensitive information**: Page 2 requires explicit separate authorization for substance abuse, mental health, and AIDS-related information. The mechanism is a "YES" or "NO" fill-in format ("[Place 'YES' or 'NO' in ALL applicable boxes]") rather than the opt-out initial approach used in form-1. This requires the patient to identify specific agencies, facilities, or individuals for each sensitive category — a burden that may be confusing if the patient simply wants all of their own records.

## 6. COMPLIANCE

**Authorization expiration**: "This authorization is effective for one year from the date on which it is signed" — standard and reasonable.

**Revocation rights**: "I understand that I may revoke this authorization at any time, except to the extent that action has already been taken in reliance upon it" — appropriately stated.

**Conditioning**: "The Iowa Clinic does not require completion of this form as a condition of evaluation or treatment" — proper HIPAA-required language with the appropriate exception for third-party evaluations.

**Liability waiver for electronic transmission**: The form requires patients to release The Iowa Clinic from "any and all liability" if faxed/emailed records are received by the wrong party. This is a potentially concerning clause that shifts risk to patients for the provider's transmission errors.

**Fee language**: "Cost-based fee" is mentioned without specifics. Under HIPAA's Right of Access, fees for patient access requests are limited to reasonable, cost-based fees. The vagueness leaves patients unable to anticipate costs.

**SSN collection**: The form requests Social Security Number, which is not required for processing a records request and raises unnecessary privacy concerns.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Liability waiver for electronic transmission**: The clause "I release The Iowa Clinic, its physicians and staff of any and all liability relating to the submission of said records" asks patients to waive liability for the provider's own fax/email errors. This is unusual and arguably shifts responsibility inappropriately.
- **SSN collection**: Requesting SSN (`SSN: ___________________________`) on an authorization form is unnecessary for record identification and creates an additional privacy risk for the patient, especially on a non-encrypted, non-fillable PDF.

### ⚠️ AMBIGUITIES
- **Patient access vs. third-party release**: The form does not distinguish between a patient requesting their own records (Right of Access under HIPAA) and a third-party authorization. A patient exercising their access rights should not need to complete an "authorization for release" at all — they have a right to copies regardless.
- **Sensitive information process on page 2**: The instruction "[Place 'YES' or 'NO' in ALL applicable boxes]" combined with requiring specific agency/facility names is confusing. A patient requesting their own complete records may not know which agencies hold substance abuse or mental health records within The Iowa Clinic's files.
- **"Proper notification" undefined**: The phrase "I understand I have the right to inspect the information to be disclosed upon the proper notification" does not explain what constitutes "proper notification."

### ❌ ERRORS
- **Severely garbled text extraction**: The PDF's text layer is filled with excessive `\t\r` (tab/carriage-return) sequences between nearly every word. While the visual PDF may render correctly, this makes the document nearly unusable for assistive technologies like screen readers, which would encounter fragmented, disjointed text. This is a significant accessibility defect.
- **Outdated and unavailable**: This form is dated October 2012 and is no longer hosted on the live website. It represents historical practices only.

### ✨ BRIGHT SPOTS
- **Electronic format option acknowledged**: The statement "Records may be provided in electronic form on a secure disk" was forward-looking for a 2012 form, predating much of the industry's move to electronic delivery.
- **Dedicated sensitive-information authorization page**: Having a full separate page for 42 CFR Part 2 and Iowa Code-protected information, with the required federal redisclosure warning language quoted in full, demonstrates compliance awareness for sensitive data categories.
