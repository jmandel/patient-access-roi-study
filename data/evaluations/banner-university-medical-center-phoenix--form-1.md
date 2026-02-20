# Evaluation: Banner - University Medical Center Phoenix — form-1.pdf

**Organization**: Banner - University Medical Center Phoenix (Phoenix, AZ)
**Document**: form-1.pdf — "Authorization for Release of Medical Information"
**Form number**: 1200-0004 (revision 06/2025)
**Pages**: 2 | **File size**: 222,330 bytes | **Fillable fields**: 0

---

## 1. DOCUMENT IDENTIFICATION

This is Banner Health's current system-wide authorization form for release of medical information. It is titled "AUTHORIZATION FOR RELEASE OF MEDICAL INFORMATION" and carries form number 1200-0004, revised June 2025. It is a general-purpose ROI form — not specific to patient self-access versus third-party release. It serves all Banner Health facilities including hospitals, clinics, urgent care centers, home care/hospice, imaging centers, and Banner Family Pharmacy.

A second form (form-2.pdf) was also found: an older hospital-specific version (form 1200, revised 09/2017) titled "Authorization for Release of Medical Information (Hospital)." Form-1 is clearly the current, canonical form and would be the one a patient encounters today.

## 2. FINDABILITY

Per the retrieval notes, the form was easy to find. A web search for `Banner Health "authorization" "release" "health information" medical records form PDF` returned it immediately. It is published directly on bannerhealth.com under the patients/medical-records section. The source URL (`https://www.bannerhealth.com/-/media/files/project/bh/patients-visitors/medical-records/12000004-bh-authorization-to-use-or-disclose-protected-health-information-625.ashx`) is somewhat descriptive — it includes the form number and a reference to "authorization to use or disclose protected health information" — though the `.ashx` extension and numeric prefix make it less human-readable than a clean URL. No bot-blocking, login walls, or patient portal gates were encountered; the PDF was directly downloadable via curl.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and functional. Full text extraction via `pdftotext` succeeded with only a minor `xref num 71 not found` warning. The extracted text is clean and readable at 5,296 characters.

**Fillable fields**: Zero. The form has no interactive PDF form fields despite having 10 embedded fonts. This is a flat, print-and-sign PDF. A patient must print the form, fill it by hand, and submit it physically (mail, fax, or pick-up). There is no option for digital form completion within the PDF itself.

**File size**: At 222 KB for a 2-page form with no embedded images, the file is slightly large but not unreasonable. It suggests some design assets or font embedding overhead.

**Digital-first design**: This is not a digital-first document. While it was born-digital (not a scan), the workflow it presupposes is entirely paper-based: print, handwrite, sign, and submit via mail, fax, or in-person pick-up. The only nod toward digital delivery is the "Encrypted E-mail" option for receiving records back, not for submitting the form.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is appropriate for the amount of information collected.

**Clarity**: The form mixes plain language with some regulatory jargon. The opening note about "third-party directives" is dense and technical: *"According to federal regulations, third-party directives are only applicable to records maintained in an EHR (electronic health record) and the release must be electronic (not paper)."* This is accurate but likely confusing to most patients. In contrast, the authorization language on page 2 is relatively clear and uses "I understand" framing that is accessible.

**Organization**: The form follows a logical flow: patient information → release from/to → dates of service → records requested → exclusions → delivery method → purpose → authorization language → signature. Sections are labeled with bold headers.

**Layout**: The form uses checkbox lists (rendered as "T" characters in the extracted text) for record types, delivery methods, and purpose. The "Release Information From" and "Release/Send Information To" sections are arranged side-by-side. The exclusion section for sensitive information is clearly separated. The overall layout appears structured but not cramped for a 2-page form.

**Record type granularity**: The form offers 12 specific record-type checkboxes including medical record abstract, entire medical record, clinic/urgent care notes, lab/pathology, radiology reports, immunizations, home health records, billing, prescriptions, and images/photos. An "Other (please specify)" option is included.

**Sensitive information handling**: The form takes an unusual approach — it provides checkboxes to *exclude* specific categories of sensitive information (STD, substance abuse, HIV/AIDS, communicable diseases, behavioral health, genetic testing, child abuse/neglect). The instruction reads: *"Please exclude the following information from being release as a part of the release of information request."* Meanwhile, the authorization language on page 2 states: *"My signature authorizes release of any such information."* This creates a two-tier consent structure: by default, all sensitive information is included, but patients can opt specific categories out.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form does not distinguish between patient self-access and third-party release. It is a general authorization form. The "Release/Send Information To" field offers "Self (same info as above)" as an option, acknowledging that patients may request records for themselves, but the same form structure is used for any release.

**Portal reference**: The form opens with a helpful note: *"You can access most of your health information directly through our patient portal (Banner Health App on Android or Apple device) or https://account.bannerhealth.com/."* This directs patients to the most efficient self-service channel before they fill out a paper form.

**Third-party directive explanation**: The form includes a note about HIPAA's right to direct electronic transmission to a third party: *"An individual has a right to direct a healthcare provider to transmit their protected health information (PHI), maintained electronically, directly to another person or entity designated by the individual."* However, it then narrows this by saying Banner Health *"requires a HIPAA authorization"* for records not maintained in an EHR or for paper releases. This is legally correct but may confuse patients about the scope of their rights.

**Delivery options**: Paper (mail or pick up) and electronic (encrypted email or fax). No mention of CD, USB, or patient portal delivery of requested records. The form warns about risks of fax and unencrypted electronic delivery.

**Purpose options**: Limited to "Self," "Continuing Care," or "Other." No guidance on what constitutes acceptable purposes.

**EHI Export / bulk data**: No mention of electronic health information export, USCDI, or any bulk data access mechanism.

**Date range limitation**: The form states *"Must be for prior or current date(s) of service. Future dates cannot be accepted."* This is standard but explicitly stated.

## 6. COMPLIANCE

**Fees**: The form states: *"Please Note There may be a FEE associated with your Request for Records"* but provides no details about fee amounts, what determines whether a fee applies, or the distinction between patient-access fees and third-party release fees under HIPAA. This is vague.

**Treatment conditioning**: The form correctly states: *"I understand that Banner will not condition or deny treatment on my signing this authorization."*

**Revocation**: The form notes revocation is possible *"except to the extent that action based on this authorization has already been taken"* and that the process is in Banner Health's Notice of Privacy Practices, *"which includes a request in writing."*

**Expiration**: 12-month expiration from date signed, which is reasonable.

**Liability release**: The form includes: *"I release Banner Health, its employees and agents, medical staff members and business associates from any legal responsibility or liability for the disclosure of the above information."* This is a broad liability waiver for information disclosure, which is common but worth noting.

**Submission methods**: The form offers no electronic submission path. It must be printed, signed by hand, and delivered by mail, fax, or in-person pick-up. This creates a meaningful access barrier for patients without printers or who cannot visit in person.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Fee disclosure is vague and undifferentiated**: The form warns about possible fees but provides no amounts and does not distinguish between patient-access requests (capped under HIPAA at reasonable cost-based fees) and third-party releases. A patient has no way to anticipate costs before submitting the form.
- **Broad liability waiver**: The sentence *"I release Banner Health, its employees and agents, medical staff members and business associates from any legal responsibility or liability for the disclosure of the above information"* asks patients to waive liability as a condition of the authorization. While common, this could discourage patients from exercising their access rights.

### ⚠️ AMBIGUITIES
- **Sensitive information exclusion vs. authorization language conflict**: The exclusion checkboxes on page 1 say *"Please exclude the following information from being release"* while the authorization on page 2 says *"My signature authorizes release of any such information."* A patient who checks exclusion boxes on page 1 might be confused by the blanket authorization language on page 2. The interplay between these two sections is not explained.
- **Third-party directive note is confusing**: The opening paragraph distinguishes between "third-party directives" (electronic only, EHR only) and general HIPAA authorizations, but a typical patient is unlikely to understand this distinction or know whether their records are maintained in an EHR.
- **Grammatical error in exclusion section**: *"Please exclude the following information from being release as a part of the release of information request"* — "release" should be "released." Also: *"We are not able to redact specific words/phrases when records are being released to the patient"* is an oddly placed caveat that seems to address a different concern than the exclusion checkboxes.

### ❌ ERRORS
- **Typo in exclusion instructions**: "from being release" should read "from being released."
- **Minor PDF structural issue**: `pdftotext` reported `xref num 71 not found` during extraction, suggesting a minor PDF cross-reference table corruption, though it did not affect text extraction.

### ✨ BRIGHT SPOTS
- **Patient portal redirect at the top**: Opening with *"You can access most of your health information directly through our patient portal"* and providing a direct URL is a helpful practice that may save patients from needing to complete the paper form at all.
- **Recent revision date**: The form was revised June 2025, indicating active maintenance. The older form-2 (09/2017) is still available, but form-1 is clearly current.
- **Granular record-type selection**: 12 specific record categories plus an "Other" option gives patients meaningful control over what is released.
- **Explicit right to refuse**: The form clearly states patients can refuse to sign and that treatment will not be conditioned on signing.
