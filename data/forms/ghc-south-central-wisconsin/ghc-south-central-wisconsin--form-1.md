# Evaluation: GHC-SCW — form-1.pdf (Authorization to Release Protected Health Information)

## 1. DOCUMENT IDENTIFICATION

This is a general-purpose **HIPAA authorization form** titled "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION FROM GHC-SCW." It is a 2-page PDF (93,854 bytes, PDF v1.4) designed to authorize disclosure of protected health information *from* GHC-SCW to a named third party or for personal use. The form number is CL.HIM.031 with version identifier MK20-33-1(7.24)F, indicating a July 2024 revision.

GHC-SCW also publishes a second, distinct form — **form-2.pdf**, "Patient Request for Health Information Form"** — which is specifically designed for patients requesting their own records. Form-1 is the broader authorization vehicle; it covers both patient-to-self and patient-to-third-party disclosures, but its framing and language lean heavily toward the third-party release use case. A Spanish-language version of this form is also available on the forms page.

## 2. FINDABILITY

Per the retrieval notes, this form was found immediately via a web search for "Group Health Cooperative of South Central Wisconsin authorization release health information form PDF." The direct PDF URL (`ghcscw.com/wp-content/uploads/2024/10/Release_Of_Medical_Record_Information_Form.pdf`) was returned in the first search result. The form is also linked from a dedicated forms page at `https://ghcscw.com/members/forms/`, which organizes forms under a clear "Release of Information Forms" section. No bot blocking, login walls, or CAPTCHA were encountered. The URL and filename are descriptive (`Release_Of_Medical_Record_Information_Form.pdf`). Findability is excellent.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (8,873 characters), confirming this is a digitally-authored document, not a scan.
- **Fillable fields**: The metadata reports **0 fillable fields** despite the form containing numerous blanks for patient name, address, DOB, checkboxes for purpose and information type, signature, and date fields. This means the form must be printed and completed by hand, or filled using a PDF annotation tool — a significant usability gap for a digitally-distributed document.
- **File size**: 93,854 bytes for 2 pages with no embedded images is lean and appropriate.
- **Font count**: 5 fonts, suggesting reasonable typographic structure.
- **Digital-first design**: Partially. The document was clearly composed digitally (not a scan), but the lack of fillable fields undermines its utility as a digital artifact. The form explicitly states in instruction 6(f): **"Electronic signatures will not be accepted"**, which forces a print-sign-scan workflow even when submitting electronically.

## 4. CONTENT DESIGN

**Length**: 2 pages. Page 1 is the authorization form itself; page 2 contains detailed instructions (13 numbered items) and an "Office Use Only" section. The length is proportionate — the instruction page is a nice addition that many forms lack.

**Organization**: The form uses a numbered section structure (1–6) that moves logically from patient identification → release-from → disclosed-to → purpose → information scope → rights. This is well-ordered.

**Clarity**: The rights section (§6) is written in first-person ("I understand that...") which aids comprehension, though sentences are long and legalistic. For example: *"I understand that written notification is necessary to revoke this authorization. To obtain information on how to revoke my authorization or to receive a copy of my withdrawal, I may contact GHC-SCW."* This is comprehensible but could be simplified.

The instruction page (page 2) is notably thorough, walking through each section with practical guidance. However, some passages are dense policy-speak likely aimed at staff rather than patients. For example, item 10: *"While GHC-SCW acknowledges that disclosure of PHI to plan sponsors and employer groups without certification that the plan sponsor's documents have been amended properly..."* — this is not patient-facing language.

**Layout**: The form uses checkboxes for purpose and record types, date range fields, and organized address blocks. The "RELEASED FROM" section pre-fills GHC-SCW's address, phone, fax, and email, which is helpful. Record type checkboxes include a reasonable set: Office Visits, PT/OT, Immunization Records, Complementary Medicine, Eye Care Notes, Lab Reports, Radiology Notes/Reports, Medication List, Procedures, plus a "Specific information pertaining to" free-text field.

**Special authorization categories**: The form correctly separates sensitive categories requiring additional consent: Mental Health, Alcohol/Drug Use, Developmental Disabilities, and AIDS/HIV, with a clear note that "Federal and state laws require special permission to release certain information."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is primarily structured as a third-party release authorization. The "DISCLOSED TO" section (§3) asks for "Name of Provider/Organization/Individual/Other" with address fields — framing that assumes the recipient is someone other than the patient. "Personal Use" appears as one checkbox option under purpose (§4), but the overall design doesn't prioritize the patient-access use case. Notably, GHC-SCW addresses this gap with form-2, which is explicitly patient-centered.

**Scope options**: Good. The form offers a date range selector and granular record-type checkboxes (approximately 12 categories). Patients can specify exactly what records they want disclosed.

**Format options**: Limited. The form offers "Paper OR DVD" and "MyChart (Personal requests only)" as format options. No mention of email delivery, USB, or CD on the form itself (though form-2 offers these). The MyChart option is restricted to personal requests, which is appropriate.

**Delivery/submission methods**: The form provides multiple submission channels — mail, fax (608-441-3499), email as PDF attachment to ghcroi@ghcscw.com, and in-person drop-off. This is good, though the email option comes with a caveat about unsecured transmission (instruction 7(c): *"note use of e-mail is considered an unsecured transmission"*).

**Rights language**: Section 6 covers four enumerated rights: right to inspect/copy, right to receive a copy of the authorization, right to refuse to sign, and right to revoke. The language explicitly states: *"GHC-SCW will not condition treatment on the completion of this authorization."* These are the standard HIPAA authorization rights, clearly presented.

## 6. COMPLIANCE

**Electronic signatures rejected**: Instruction 6(f) states *"Electronic signatures will not be accepted."* This creates friction for patients who find the form online, fill it out digitally, and attempt to submit electronically — they must still print, hand-sign, and scan. Under HIPAA's access provisions (45 CFR § 164.524), requests need not be on a specific form at all, so requiring wet signatures on even the organization's own form is a barrier, though not a violation per se for an authorization form (as opposed to a right-of-access request).

**Expiration**: The form defaults to a 1-year expiration from the date of signature unless otherwise specified. This is a reasonable default.

**No fee disclosure**: The form does not mention fees or charges for processing. For a third-party release authorization this is typical, though the absence of fee information could leave patients uninformed about potential costs.

**Identity verification**: The "Office Use Only" section on page 2 shows that GHC-SCW verifies identity (driver's license or other ID) and legal authority before processing. This is reasonable practice.

**"Photocopy is valid as original"**: This statement appears at the bottom of both pages, reducing potential disputes about copy validity.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"Electronic signatures will not be accepted"** (instruction 6(f)): This blanket prohibition forces a print-sign-scan workflow for every electronic submission, creating unnecessary friction. While the form can be emailed as a PDF, requiring a wet signature partially negates the convenience of electronic submission.

### ⚠️ AMBIGUITIES

- **"Hatchery Hill Clinic" address block** appears embedded within section 5 (Information to Be Disclosed) with its own fax and phone number, but without any label or explanation of when to use this address vs. the main ROI department address in section 2. It is unclear whether radiology/imaging requests must be directed there, since instruction 5 mentions *"requests for Radiology Films must be directed to another GHC-SCW location"* — presumably this clinic, but the connection is not explicit on page 1.

### ✨ BRIGHT SPOTS

- **Comprehensive instruction page**: The full page of numbered instructions (items 1–13) is unusually thorough. Most ROI forms provide little to no guidance — this one walks patients through each section, explains rights, and describes submission options.
- **Multiple submission channels**: Offering mail, fax, email, and in-person drop-off covers a wide range of patient preferences and capabilities.
- **Spanish version available**: A separate Spanish-language version of this form is published on the same forms page, improving accessibility for Spanish-speaking patients.
- **Sensitive category separation**: The form correctly handles Mental Health, Alcohol/Drug Use, Developmental Disabilities, and AIDS/HIV as separately authorized categories, with clear labeling.
- **Complaint process noted**: Instruction page item 1 states *"Patients may submit complaints about this process at any time by contacting the GHC-SCW Privacy Officer or the HIM Manager"* — proactively informing patients of their right to complain.
