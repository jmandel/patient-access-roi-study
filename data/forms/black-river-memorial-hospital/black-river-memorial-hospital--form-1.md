# Black River Memorial Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **Release of Information Authorization** form from Black River Health (the parent brand for Black River Memorial Hospital). It is a 2-page general-purpose authorization form for disclosing protected health information. The form is designed to cover both directions of information flow — releasing records *from* the organization and receiving records *to* the organization — rather than being specifically tailored for patient self-access under HIPAA's Right of Access.

This is the only ROI-related form found for the organization. The Patient Resources page lists several other forms (Patient Information, Verbal Consent, Advance Directives, etc.), but this is the sole authorization/release document.

## 2. FINDABILITY

**Retrieval difficulty: Easy.** The form was straightforward to locate through two independent pathways:

- **Direct web search**: A query for `site:blackriverhealth.com authorization release medical records` immediately surfaced the PDF URL.
- **Website navigation**: The form is linked from the Patient Resources page (https://blackriverhealth.com/patient-resources/) under a "Forms" section, listed as "Authorization to Disclose Information" with the description: "Allows us to share or receive information from other healthcare facilities or providers."

The URL is descriptive (`/wp-content/uploads/2025/12/Release-of-Information-Authorization.pdf`), and the filename clearly identifies the document's purpose. The hosting page explains what the form is for, though the description frames it as facility-to-facility sharing rather than patient access to their own records.

## 3. TECHNICAL ACCESSIBILITY

This document has **severe technical accessibility problems**:

- **Text extraction**: Despite being created in Microsoft Word for Microsoft 365 (author: Austyn Zinn, created August 6, 2025, modified December 4, 2025), the PDF renders almost all text as images. The `pdftotext` extraction yields only 43 characters: `"MRN\n\nFIN\n\n☐\n\n☐\n\n\fMRN\n\nFIN\n\n☐\n\n☐\n\n☐\n\n☐\n\n☐\n\n\f"`. The metadata reports **970 embedded images** for a 2-page document, confirming that text labels, headings, and body copy are rendered as image fragments.
- **Fillable fields**: Zero interactive form fields detected. The form is entirely static — patients must print and hand-fill it.
- **File size**: 515 KB for 2 pages is bloated, consistent with the image-heavy rendering.
- **Searchability**: The document is effectively unsearchable. A screen reader or assistive technology would encounter almost no readable text.
- **ADA compliance**: The image-based text rendering makes this form essentially inaccessible to users relying on screen readers, text-to-speech, or other assistive technologies.

The form was clearly created digitally (not a scan of paper), but the Word-to-PDF conversion process destroyed text accessibility. This is a modern document (2025) that behaves like a low-quality scan.

## 4. CONTENT DESIGN

Based on visual inspection of the PDF:

**Structure and organization**: The form uses a clear numbered-section layout (sections 1–8 on page 1, patient rights text and signatures on page 2). Sections are:

1. Patient Information (Name, DOB, Previous Name, Address, Phone)
2. Healthcare Provider of the Facility who has the information you want released (checkboxes for Krohn Clinic, Black River Memorial Hospital, Black River Healthcare Clinic, BRH Behavioral Health, plus **Alcohol Treatment, **HIV Results, All, Other)
3. Where you want the information to be sent (checkboxes for same three facilities plus Name/Organization, Attention, Address, Fax, Phone)
4. Why the information is needed (Continuing Care, Worker's Compensation, School, Per Patient Request, Insurance Purposes, Legal, Form Completion (FMLA/Disability, etc.), Other)
5. What information you want released (date range with default of 2 years if not completed; specific diagnosis or provider; specific record types: Billing Records, Photographs, Radiology Images, Other)
6. When the information is needed by (date fields)
7. How would you like this information (Release Method/Format Requested — "Information supplied electronically is in PDF format"; options: Mailed, Faxed, Pick Up, CD, Other)
8. Expiration ("This authorization will remain in effect until this request is processed unless you specify this authorization will be effective for an additional period of time as indicated here")

**Page 2 content** includes patient rights sections with bold headings:
- RIGHT TO RECEIVE A COPY OF THIS AUTHORIZATION
- RIGHT TO REFUSE TO SIGN THIS AUTHORIZATION ("my refusal to sign will not affect my ability to obtain treatment")
- RIGHT TO REVOKE THIS AUTHORIZATION (written statement to BRH Health Information Management (HIM) Department)
- RE-DISCLOSURE notice
- RIGHT TO INSPECT OR COPY OF INFORMATION USED OR DISCLOSED ("Reasonable fee may be associated.")
- PROHIBITION OF CONDITIONS ("Black River Health may not condition treatment, payment, enrollment in a health plan, or eligibility for benefits based on the provision that I authorize this disclosure")
- Photocopy validity statement
- HIPAA Privacy & Security Officer contact: 715-284-5361
- Signature lines for patient and authorized person
- Checkbox: "By checking this box, I (the patient) am requesting a copy of this authorization" and "Copy Given to Patient"
- Patient status checkboxes (Minor, Incompetent, Disabled, Deceased)
- Legal Authority options (Legal Guardian, Next of Kin)
- BRH USE ONLY section at bottom

**Clarity**: The language is relatively plain for a legal/medical form. Section headers use clear, question-like phrasing ("Why the information is needed," "How would you like this information"). The patient rights section on page 2 uses bolded headings but is dense paragraph text.

**Layout**: The tabular grid on page 1 is well-organized with clear visual separation between sections. However, section 2 mixes source facility selection with sensitive-record-type checkboxes (**Alcohol Treatment, **HIV Results) in a way that could be confusing — these are information types, not facilities.

**Length**: Two pages is appropriate for the content covered.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose release form**, not a patient-access-specific form. The structure (Section 2: "who has the information"; Section 3: "where you want it sent") is designed for facility-to-facility transfers. A patient requesting their own records must navigate a form designed for a different primary use case. The reason checkbox "Per Patient Request" is available but is one of eight options, not the default framing.

**Scope options**: Reasonable granularity is offered:
- Date range for service dates (Section 5A), with a default of 2 years if not specified
- Specific diagnosis or provider (Section 5B)
- Specific record types: Billing Records, Photographs, Radiology Images, Other (Section 5C)
- The record type options are limited — no checkboxes for clinical notes, lab results, medications, immunizations, or other common record categories.

**Format/delivery options**: Section 7 offers Mailed, Faxed, Pick Up, CD, and Other. It notes "Information supplied electronically is in PDF format." There is no mention of email delivery, patient portal access, or electronic health information (EHI) export. The options are paper-era methods with CD as the most "electronic" option.

**Patient rights**: Page 2 includes a substantive patient rights section covering the right to receive a copy, refuse to sign, revoke authorization, inspect records, and prohibition of conditions. These are appropriate and clearly stated. However, the right to inspect/copy mentions "(Reasonable fee may be associated.)" without specifying fee amounts or HIPAA fee limitations.

**No mention of**: HIPAA § 164.524 by citation, electronic health information export, 21st Century Cures Act, information blocking, or turnaround time expectations.

## 6. COMPLIANCE

**Expiration**: Section 8 states the authorization "will remain in effect until this request is processed" unless the patient specifies an additional period. This is reasonable and does not impose an unreasonably short expiration.

**Fees**: The form mentions "(Reasonable fee may be associated.)" under the right to inspect/copy but provides no specifics. HIPAA limits fees for patient access requests to a reasonable, cost-based fee.

**Sensitive information handling**: Section 2 includes checkboxes for "**Alcohol Treatment" and "**HIV Results" with double asterisks, suggesting these require special authorization. This is appropriate given federal (42 CFR Part 2) and state law protections for substance abuse treatment records and HIV information, though the form does not explain *why* these are flagged separately.

**Revocation**: The revocation process requires "a written statement of revocation to Black River Health's (BRH) Health Information Management (HIM) Department." This is a standard requirement.

**Photocopy clause**: "A photocopy of this authorization shall be considered as valid as the original" — a patient-friendly provision.

**Conditional treatment prohibition**: Explicitly stated — Black River Health "may not condition treatment, payment, enrollment in a health plan, or eligibility for benefits" on signing this authorization.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **970 embedded images in a 2-page Word-generated PDF**: This renders the form effectively inaccessible to screen readers, assistive technology, and text search. For a document created in 2025 using modern software, this level of inaccessibility is a significant barrier — particularly for patients with visual impairments who are legally entitled to accessible formats under the ADA.

### ⚠️ AMBIGUITIES

- **Section 2 mixes facilities and information types**: Checkboxes for "Krohn Clinic," "Black River Memorial Hospital," and "Black River Healthcare Clinic" are in the same section as "**Alcohol Treatment," "**HIV Results," and "All." The section header says "Healthcare Provider of the Facility who has the information you want released," but Alcohol Treatment and HIV Results are information types, not facilities. This conflation could confuse patients about what they're authorizing.
- **2-year default scope**: Section 5 states "**If not completed, 2 years' worth of information will be provided." This imposes a default scope that may not align with what the patient needs — they may want their complete record — and the default is not prominently called out.
- **"Reasonable fee may be associated"**: No specifics on what fees might be charged or what HIPAA permits, leaving patients uncertain about potential costs.
- **No submission instructions**: The form does not specify where or how to submit the completed form (mail address, fax number, in-person location, email). A patient downloading this online would not know how to return it.

### ❌ ERRORS

- **Near-total text extraction failure**: Only 43 characters of extractable text from a 2-page document with hundreds of words. The Word-to-PDF conversion rendered virtually all text as image fragments, producing a technically defective digital document.

### ✨ BRIGHT SPOTS

- **Photocopy validity**: "A photocopy of this authorization shall be considered as valid as the original" removes a potential barrier for patients who cannot submit originals.
- **Explicit prohibition of conditions**: Clear language that the organization cannot condition treatment or benefits on signing the authorization.
- **Direct HIPAA Privacy Officer contact**: Provides a specific phone number (715-284-5361) for the HIPAA Privacy & Security Officer, giving patients a clear escalation path.
- **Patient-friendly expiration**: The authorization remains in effect until the request is processed rather than expiring after a fixed period, which avoids the common problem of authorizations expiring before records are delivered.
