# MountainView Hospital (Las Vegas, NV) — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **HCA Healthcare system-wide standardized authorization form** titled "AUTHORIZATION FOR RELEASE OF PHI (PROTECTED HEALTH INFORMATION)," form number HCA-840-00434, Rev. 09/21. It is a general-purpose release/disclosure authorization—not a patient-access-specific form. The form is branded to HCA Healthcare, not to MountainView Hospital specifically; the mailing address listed is a centralized HCA processing center in Nashville, TN (PO Box 290789; Nashville, TN 37229-0789).

Two forms were found for this organization: form-1 (English) and form-2 (Spanish). They are identical in structure and content, with form-2 being a direct Spanish translation (HCA-840-00434-S). This evaluation covers form-1 (English version).

## 2. FINDABILITY

The form was **relatively easy to find** but required navigating an indirect path. MountainView Hospital's own domain (`mountainview-hospital.com`) redirects to the Sunrise Health system website at `sunrisehealthinfo.com`. From there, the form is linked under **For Patients → Medical Records** with the link text "Authorization for Release of Medical Information." The retrieval notes describe this as easy: "directly linked from the Medical Records page."

However, there are complications: the direct download URL on the page (`sunrisehealthinfo.com/util/forms/...`) returned HTML rather than a PDF when accessed via curl, likely due to bot protection. The actual PDF is served from HCA's CDN (`hcadam.com/api/public/content/...`), requiring discovery of the real URL. The medical records page also advertises an **online request portal** (via Swellbox) and the **MyHealthONE patient portal**, giving patients alternative digital pathways. The URL and filename are not descriptive—the CDN URL is a GUID (`46695a9ba25e4b9aa6376f53cef033ac`), offering no indication of the document's content.

## 3. TECHNICAL ACCESSIBILITY

This form scores well on technical accessibility:

- **Text layer**: Full extractable text (4,145 characters). Not an image-only scan.
- **Fillable fields**: **52 interactive form fields** — an unusually high count for a single-page form. This makes the form fully completable digitally without printing.
- **Page count**: 1 page — efficient and compact.
- **File size**: 173,750 bytes (~170 KB) — reasonable for a single-page PDF with 9 embedded fonts and no images.
- **Digital-first design**: Yes. This is clearly designed as a digital document: no scan artifacts, no handwriting lines, clean typographic layout with interactive fields. The form uses 9 fonts for visual hierarchy.

The form's field names are reported as empty (`fillable_field_names: []`), which may indicate the metadata extraction tool couldn't read them, but the field count of 52 confirms extensive interactivity.

## 4. CONTENT DESIGN

**Structure**: The form is organized into three clearly labeled sections:
- **Section A** ("This section must be completed for all Authorizations"): Patient demographics, recipient information, dates of service, facility names, purpose of disclosure, delivery format, expiration, record type selection, and sensitive information handling.
- **Section B**: Marketing/sale of PHI (conditional—skip if not applicable).
- **Section C**: Signatures.

**Record type granularity**: The form provides 16 specific record type checkboxes (Consultation, Medication List, Discharge Instructions, Discharge Summary, Operative Report, Labor and Delivery Record, ER Report, Pathology Report, Specialty Test/Therapy, EKG Report, Problem List, Physician Orders, History and Physical, Radiology Report, Progress Notes, Clinical/Laboratory Report) plus an "All Pertinent Records" option and an "Other" free-text field. This is thorough.

**Clarity**: The language is a mix of plain language and legal/medical terminology. The six numbered "I understand that..." statements are reasonably clear, covering voluntariness, non-conditioning on treatment, revocation rights, redisclosure risk, right to obtain copies, and right to a copy of the signed form. However, terms like "PHI," "USCDI," and "Direct Address or National Provider Identifier" are not defined on the form and would be opaque to most patients.

**Layout**: Fitting all of this onto a single page means the layout is **dense**. The form packs patient info fields, recipient fields, delivery options, expiration, psychotherapy notes handling, 16+ record type checkboxes, sensitive information handling, patient rights, marketing/sale section, and signatures into one page. While the section labels provide structure, the overall visual density is high.

**Readability**: Font sizes appear adequate based on the text extraction quality, but the single-page constraint necessarily limits whitespace and breathing room.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose authorization form**, not specifically designed for patient self-access. The "Purpose of disclosure" field offers two radio-button options: "At the request of the individual" and "Other 3rd party recipient (please specify purpose)." A patient requesting their own records would select the first option, but the form's overall framing (with "Recipient" fields, fax restrictions, etc.) is oriented toward third-party disclosure scenarios.

**Scope options**: Strong. Patients can specify dates of service, select from 16 record types or choose "All Pertinent Records," and exclude specific sensitive information. The form notes: "All types of information found in the records selected above will be provided (if applicable), including information that may be viewed as sensitive, such as alcohol, drug abuse, genetic information, psychiatric, HIV testing, HIV results or AIDS information. Specify any information you want to exclude."

**Delivery format options**: Excellent. Four options are provided:
1. Paper Copy
2. Electronic Media, if available
3. Encrypted Email
4. Unencrypted Email (with a risk disclosure)

The form states: "If left blank, a paper copy will be provided."

**USCDI awareness**: The form includes a dedicated line: "For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability. Requires Direct Address or National Provider Identifier." This is a notably forward-looking feature.

**Right of Access language**: The form does not explicitly cite HIPAA § 164.524 or use the phrase "Right of Access." The patient rights section references the "Notice of Privacy Practices" for further details but does not educate the patient about their specific legal right to access records.

**Psychotherapy notes**: Properly separated per HIPAA requirements: "Is this request for psychotherapy notes? ... Yes, then this is the only item you may request on this authorization."

## 6. COMPLIANCE

**Expiration**: The form defaults to 180 days: "This authorization will expire after 180 days or on the following (please choose only one): Expiration Date: / Expiration Event:". A 180-day default is reasonable and not unusually restrictive.

**Voluntary nature**: Clearly stated: "I may refuse to sign this authorization and that it is strictly voluntary" and "My treatment, payment, enrollment or eligibility for benefits may not be conditioned on signing this authorization."

**Revocation**: Addressed: "I may revoke this authorization at any time in writing."

**SSN request**: The form asks for "Last 4 digit SSN (optional)" — the optional designation is appropriate, but requesting SSN at all for a records release is unnecessary and raises privacy concerns.

**Fax restriction**: The form states "(FAX only to Physician Office / Medical facility)," which limits fax delivery to provider destinations and could be seen as restricting patient choice for fax-based delivery.

**ID verification**: The "ID verified by: ___________ (Initials)" field at the bottom suggests an in-person identity verification step, though it's not explicitly required in the form instructions. This field appears designed for staff use when the form is submitted in person.

**Fees**: The form mentions "I understand that I may see and obtain a copy the information described on this form, for a reasonable copy fee, if I ask for it" — this acknowledges fees exist but does not specify amounts. Note the phrase "for a reasonable copy fee" is embedded in a patient rights statement, which could be read as normalizing fee collection even for patient access requests under the Right of Access.

**Marketing/sale section**: Section B addresses whether PHI is being released for marketing or sale purposes, including financial remuneration questions. This is a HIPAA-compliant addition, though its presence on a patient-facing form adds complexity.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **USCDI release option**: Including "For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability" is rare and forward-looking. This acknowledges modern health data interoperability standards directly on the authorization form.
- **Multiple electronic delivery options**: Offering Paper, Electronic Media, Encrypted Email, and Unencrypted Email gives patients genuine choice in how they receive records, with honest risk disclosure for unencrypted options.
- **Spanish-language version**: Providing a complete Spanish translation (form-2) as a parallel download is a meaningful accessibility measure.
- **52 fillable fields**: The form is fully interactive, allowing digital completion without printing — a significant usability advantage.
- **Single page**: Packing a comprehensive authorization into one page reduces the barrier to completion.
- **Alternative digital pathways**: The medical records page also offers an online request portal (Swellbox) and MyHealthONE patient portal, so this PDF form is not the only option.

### ⚠️ AMBIGUITIES
- **"Reasonable copy fee" language**: The statement "I may see and obtain a copy of the information described on this form, for a reasonable copy fee, if I ask for it" could mislead patients into thinking fees are always required, even for Right of Access requests where HIPAA limits charges.
- **USCDI jargon**: The USCDI release option "Requires Direct Address or National Provider Identifier" is incomprehensible to most patients. No explanation of what USCDI, Direct Address, or NPI means is provided.
- **Fax restriction unclear**: "(FAX only to Physician Office / Medical facility)" — it's unclear whether this means the form itself can only be faxed to providers, or whether records can only be faxed to provider destinations. Either reading could limit patient options.
- **ID verification field**: The "ID verified by: ___________ (Initials)" field is ambiguous about whether in-person submission is expected or whether other submission methods (mail, fax, portal) are equally accepted.

### 🚩 RED FLAGS
- **SSN collection**: Requesting even the last 4 digits of SSN — though marked optional — is unnecessary for a records release authorization and creates a data minimization concern. No justification for this field is provided on the form.
- **No Right of Access distinction**: The form makes no distinction between a patient exercising their HIPAA Right of Access (which has specific fee limits and timeline requirements under 45 CFR § 164.524) and a general third-party authorization. Using this single form for both purposes risks applying third-party release practices (higher fees, longer timelines) to patient access requests.
