# Consensus Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a generic, one-page "Authorization for Release of Medical Records" form. It is **not branded to Consensus Health** — it bears no organization name, logo, address, or identifier anywhere in the document. It was found hosted on PatientPop's CDN (`sa1s3.patientpop.com/assets/docs/223399.pdf`), a practice marketing platform, and was associated with Consensus Health practices through web search results rather than through Consensus Health's own website.

Among the four documents retrieved for this organization, form-1.pdf is the only one that functions as a patient-initiated authorization for release of records. The other three documents are Consensus Health–branded forms from a member practice (Skylands Medical Group): form-2.pdf is a general "Consent, Disclosure and Authorization" form signed at intake; form-3.pdf is a HIPAA acknowledgment; and form-4.pdf is the Notice of Privacy Practices. None of those other forms serve the purpose of a patient requesting their own records, making form-1.pdf the closest thing to an ROI form — despite its generic, unbranded nature.

## 2. FINDABILITY

This form was **extremely difficult to find**. The retrieval notes document an exhaustive search: direct website navigation, URL guessing (`/patient-forms/`, `/forms/`, `/medical-records/`, etc.), site-specific searches, filetype searches, and exploration of both the main Consensus Health site and the Cherry Hill practice site. None produced an ROI form. The form was ultimately found only through a general web search that surfaced a PatientPop-hosted PDF loosely associated with Consensus Health practices.

Consensus Health's main website (`consensushealth.com`) has no patient forms section. The "For Patients" page describes benefits and links to the athenahealth patient portal but offers no downloadable forms. The organization operates a decentralized network of practices, and patient-facing materials are published inconsistently by individual member practices (e.g., Skylands Medical Group) rather than centrally. A patient visiting the main website or the Cherry Hill practice site would find no path to an ROI form.

## 3. TECHNICAL ACCESSIBILITY

The document is a single-page PDF (24,164 bytes) with a text layer — text is fully extractable and searchable. It is **not an image-only scan**, which is a positive. However, it has **zero fillable fields** (`fillable_field_count: 0`), meaning patients must print the form and complete it by hand. The form uses only 2 fonts and contains no embedded images, consistent with a bare-bones, text-only layout.

The file is very small and lightweight, but the complete absence of interactive fields means this is a print-and-mail document in practice. There is no indication of electronic submission options. The filename (`223399.pdf`) is a numeric identifier with no descriptive value.

## 4. CONTENT DESIGN

The form is short — one page, approximately 1,900 characters of extracted text. It contains the following sections and fields:

- **Header**: "AUTHORIZATION FOR RELEASE OF MEDICAL RECORDS" with instruction "TO REQUEST RELEASE OF MEDICAL INFORMATION PLEASE COMPLETE AND SIGN THIS FORM"
- **Opening statement**: "I, ______ hereby voluntarily authorize the disclosure of information from my health record."
- **Patient Information**: Patient Name, Record Number, Address, Date of Birth (4 fields)
- **Information Requested**: 3 blank lines (free-text)
- **Purpose of Release**: 3 blank lines (free-text)
- **The Information Is To Be Provided To**: Name of Person/Organization/Facility, Address, Phone Number (3 fields)
- **Signature block**: Patient's Signature or Patient's Representative, Date, Printed Name of Patient's Representative, Relationship of Patient (4 fields)
- **Footer note**: "This information is to be released for the purpose stated above and may not be used by recipient for any other purpose."
- **Final instruction**: "PLEASE MAKE A COPY OF THIS RELEASE FOR YOUR RECORDS"

The language is reasonably clear and uses short sentences. However, the form is entirely generic — there are no instructions about where to submit the completed form, no contact information, no mailing address, and no fax number. A patient completing this form would have no idea where to send it.

The layout is plain and functional with blank lines for handwritten entries. It reads as a template rather than a finished, organization-specific document.

## 5. PATIENT-CENTEREDNESS

This form is framed as an authorization for **disclosure to a third party** rather than as a patient right-of-access request. The language "authorize the disclosure of information from my health record" and "The Information Is To Be Provided To: Name of Person/Organization/Facility" assumes the records are being sent to someone else. There is no pathway or language addressing a patient requesting records for themselves.

**Scope options**: The form provides free-text lines for "Information Requested," allowing the patient to specify what records they want. However, there are no checkboxes for common record types (lab results, imaging, visit notes, etc.) and no field for date ranges. The "Purpose of Release" is also free-text with no guidance on what to write.

**Format options**: None. There is no mention of electronic delivery, email, patient portal access, or any delivery method whatsoever.

**Rights language**: The form includes the phrase "HIPAA Authorization For Release of Medical Records" at the very bottom, but this is merely a label — there is no explanation of patient rights under HIPAA § 164.524, no mention of the Right of Access, and no information about timelines for response or fee limitations.

**EHI Export**: No mention of electronic health information export or bulk data access.

## 6. COMPLIANCE

The form is notable for what it **lacks** rather than for imposing overt barriers:

- **No submission instructions**: The form provides no address, fax number, email, or any indication of how or where to submit it. A patient would need to independently figure out how to get this form to their provider.
- **No mention of fees**: There is no disclosure of fees for copying records, which could be positive (no upfront fee barrier) or concerning (patients don't know what to expect).
- **No expiration or revocation language**: The authorization has no stated expiration date and no instructions for how to revoke the authorization, which is a HIPAA requirement for valid authorizations under 45 CFR § 164.508(c)(2)(i).
- **No mention of right to refuse**: The form does not inform patients that they may refuse to sign or that refusal will not affect their treatment.
- **Sensitive information categories**: The form makes no mention of protections for substance abuse, HIV/AIDS, mental health, or genetic information, which may require additional authorization under state law (New Jersey has specific protections for these categories).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No revocation language or expiration date**: A valid HIPAA authorization under 45 CFR § 164.508 must include either an expiration date/event or a statement that the individual may revoke the authorization. This form contains neither, raising questions about its validity as a HIPAA authorization.
- **No submission pathway**: The form provides zero information about where or how to submit it — no address, no fax, no email, no portal link. This creates a practical barrier even for motivated patients.

### ⚠️ AMBIGUITIES
- **Patient access vs. third-party release**: The form is titled "Authorization for Release of Medical Records" and structured around disclosure to a named "Person/Organization/Facility," but it is unclear whether it can be used by a patient requesting records for themselves. A patient wanting their own records under the HIPAA Right of Access (which does not require an authorization form) might mistakenly believe they need to use this release-of-information authorization.
- **Unbranded, no organizational identity**: Because the form carries no organization name, logo, or identifying information, a patient cannot confirm this is the correct form for their provider. It is unclear which practice or practices within the Consensus Health network accept this form.
- **"Record Number" field**: The form asks for a "Record Number" without explaining what this is or where the patient would find it. Many patients will not know their medical record number.

### ❌ ERRORS
- **Missing HIPAA-required authorization elements**: Under 45 CFR § 164.508(c), a valid authorization must include: a description of the information to be disclosed, the name of the person authorized to make the disclosure, an expiration date or event, and a statement of the right to revoke. This form is missing the name of the entity making the disclosure (since it is unbranded) and expiration/revocation language.
- **Non-descriptive filename**: The source file is named `223399.pdf` — a meaningless numeric ID that provides no indication of the document's purpose.
