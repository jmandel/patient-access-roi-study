# Evaluation: Mayers Memorial Hospital District — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization for Release of Medical Records" — a standard ROI form authorizing disclosure of health record information. The form is titled "AUTHORIZATION FOR RELEASE OF MEDICAL RECORDS" with a subheading "TO REQUEST RELEASE OF MEDICAL INFORMATION PLEASE COMPLETE AND SIGN THIS FORM" and a footer reading "HIPAA Authorization For Release of Medical Records."

The form is entirely unbranded — it does not mention Mayers Memorial Hospital District anywhere in the document text. It was found hosted on PatientPop's CDN (`sa1s3.patientpop.com/assets/docs/223399.pdf`), a third-party patient engagement platform. The only other document found (form-2.pdf) is a "Disclosure of Privacy Practices" — a privacy notice, not an ROI form — hosted directly on the Mayers Memorial website. form-1.pdf is the sole records-request authorization form identified for this organization.

## 2. FINDABILITY

This form was **very difficult to find**. Per the retrieval notes:

- The hospital's Medical Records page (`/getpage.php?name=Medical_Records`) describes the department's hours and phone number but provides **no downloadable form and no instructions for requesting records**.
- The Patients & Visitors page links to privacy notices and other resources but **not to an ROI form**.
- A `site:mayersmemorial.com` search for authorization forms returned no results.
- The form was only discovered through a general web search that led to a third-party CDN (PatientPop/Tebra). A patient navigating the hospital website would have no way to find this form.

The URL (`sa1s3.patientpop.com/assets/docs/223399.pdf`) is non-descriptive — a numeric asset ID on an unrelated domain. There is no contextual page explaining what the form is for or how to use it.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The 1,904-character extracted text is clean and complete — this is a digitally created document, not a scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite having blank lines for patient information, the PDF contains no interactive form fields. A patient would need to print, hand-fill, and return the form.
- **File size**: 24,164 bytes — appropriately small for a one-page text-based document.
- **Fonts**: 2 fonts embedded.
- **Images**: None embedded.
- **Digital-first design**: Partially. The text layer is clean and the document was clearly created digitally (not scanned), but the absence of fillable fields means it functions as a print-and-fill document. There is no indication of electronic submission capability.

## 4. CONTENT DESIGN

The form is minimalist — one page with a straightforward layout. Sections include:

- **Opening statement**: "I, ______ hereby voluntarily authorize the disclosure of information from my health record."
- **Patient Information**: Name, Record Number, Address, Date of Birth (4 fields).
- **Information Requested**: 3 blank lines (free-text).
- **Purpose of Release**: 3 blank lines (free-text).
- **Recipient section** ("The Information Is To Be Provided To"): Name of Person/Organization/Facility, Address, Phone Number (3 fields).
- **Signature block**: Patient's Signature or Patient's Representative, Date, Printed Name of Patient's Representative, Relationship of Patient.
- **Closing text**: "This information is to be released for the purpose stated above and may not be used by recipient for any other purpose."
- **Footer instruction**: "PLEASE MAKE A COPY OF THIS RELEASE FOR YOUR RECORDS."

The language is plain and readable. The form uses only 2 fonts and has a clean, uncluttered layout. At just one page, the length is appropriate for the content. However, the entirely blank-line-based design (no checkboxes, no structured options) puts a burden on the patient to know what to write in the "Information Requested" and "Purpose of Release" fields.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is ambiguous. The structure — with a "The Information Is To Be Provided To" section requiring a recipient name, address, and phone number — is oriented toward third-party release. A patient requesting records for themselves would need to fill in their own information as the recipient, which is unintuitive. The form does not mention patient right of access, self-request workflows, or HIPAA § 164.524.

**Scope options**: None structured. The patient must free-text what information they want and why. There are no checkboxes for record types (lab results, imaging, visit notes, etc.), no date range fields, and no format/delivery options.

**Format/delivery options**: Not addressed. The form does not offer electronic delivery, specify how records will be provided, or mention any turnaround time.

**Right of Access language**: Absent. The footer says "HIPAA Authorization For Release of Medical Records" but there is no reference to patient rights, HIPAA § 164.524, or any explanation of the patient's right to access their own health information.

**EHI Export**: Not mentioned.

**Instructions**: The form says "PLEASE MAKE A COPY OF THIS RELEASE FOR YOUR RECORDS" but provides no instructions on where to submit the completed form — no mailing address, fax number, email, or physical drop-off location.

## 6. COMPLIANCE

- **No expiration/revocation clause**: The authorization contains no expiration date or event, and no language about the patient's right to revoke the authorization. Under HIPAA's authorization requirements (45 CFR § 164.508(c)), a valid authorization must include an expiration date or event and a statement of the right to revoke — this form lacks both.
- **No fees disclosed**: No mention of fees or costs for records.
- **No special categories addressed**: No mention of protections for sensitive records (substance abuse/42 CFR Part 2, HIV/AIDS, mental health, psychotherapy notes).
- **Submission method**: Not specified. Without any submission instructions, a patient has no clear path to actually use this form.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No submission instructions whatsoever**: The form provides no address, fax number, email, or any indication of how or where to submit it. A patient who somehow finds this form has no way to know what to do with it once completed.
- **Missing HIPAA-required authorization elements**: The form lacks an expiration date/event and a right-to-revoke statement, both required under 45 CFR § 164.508(c) for a valid HIPAA authorization.

### ⚠️ AMBIGUITIES
- **Unbranded and disconnected from the organization**: The form never mentions Mayers Memorial Hospital District. A patient who found it could not confirm it is the correct form for this facility.
- **Patient self-access unclear**: The form is structured for third-party release (requiring a recipient's name, address, and phone). It is unclear how a patient requesting their own records should complete the form.
- **"Information Requested" is entirely open-ended**: With no examples, checkboxes, or guidance, patients must guess what to write. The instruction "Information Requested" with blank lines provides no scaffolding.

### ❌ ERRORS
- **Form unreachable from hospital website**: Despite being associated with the hospital's PatientPop platform, the form is not linked from any page on mayersmemorial.com. The Medical Records page exists but contains no form link or records-request instructions.
- **No fillable fields despite digital creation**: The PDF was digitally created (not scanned) but contains zero interactive form fields — a missed opportunity for basic digital functionality.
