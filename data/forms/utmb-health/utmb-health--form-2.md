# Evaluation: UTMB Health — form-2.pdf (Form 7032)

**Organization**: University of Texas Medical Branch (Galveston, TX)
**Document**: HIPAA Authorization for the Release of Protected Health Information (PHI) By UTMB
**Form ID**: Medical Record Form 7032-Rev.–5/24
**Pages**: 1 | **File size**: 119,687 bytes | **Fillable fields**: 0

---

## 1. DOCUMENT IDENTIFICATION

This is UTMB's **general-purpose HIPAA authorization form** for releasing protected health information, designated as Form 7032 (revised May 2024). It is titled "HIPAA AUTHORIZATION FOR THE RELEASE OF PROTECTED HEALTH INFORMATION (PHI) By UTMB" and is intended for **third-party/representative requests** — i.e., "all other requests" that are not direct patient self-requests.

UTMB maintains a separate, patient-specific form: Form 7033 ("Patients Request for Medical Records," form-1.pdf), which is designed explicitly for patients or guardians requesting their own records. Form 7033 offers delivery options (mail, email, fax, MyChart portal) and is the preferred pathway for patient self-access. A third document (form-3.pdf) is an older version of this same Form 7032 (revised 10/16), hosted by Champion Records Service, a third-party release-of-information vendor.

The existence of two distinct forms — one patient-facing (7033) and one for third-party requests (7032) — is a significant design choice. Form 7032 is **not the primary patient access form**, which is important context for evaluation.

## 2. FINDABILITY

Per the retrieval notes, UTMB's medical records page (https://www.utmb.edu/utmbhealth/online-services/medical-records) lists forms clearly with download links, making the general authorization reasonably easy to locate. A web search for UTMB authorization/release form terms surfaced the page immediately.

However, the actual PDF download requires navigating SharePoint (`liveutmb.sharepoint.com`), which does not respond to programmatic (curl) access — browser-based download is required. The SharePoint URL (`EdAslXAlEhZDnOwaBpjq6ZcB3jXZPnOZRCFT3kTjcKuGpw`) is an opaque token, not a descriptive filename. The original filename "Authorization_Form.pdf" is generic.

The medical records page does distinguish between the patient form (7033) and this general authorization (7032), which helps users find the right document. Overall findability is **moderate** — easy to reach the page, but the download mechanism adds friction.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,101 characters), and the document is not an image-only scan.
- **Fillable fields**: **Zero**. Despite being a digital PDF with a text layer, the form has no interactive form fields. Every field (patient name, address, DOB, recipient info, checkboxes, signature, date) must be printed and completed by hand, or filled using a PDF annotation tool.
- **File size**: 119,687 bytes (~117 KB) for a single page — reasonable.
- **Fonts**: 6 fonts embedded; no embedded images.
- **Digital-first design**: This is **not** a digital-first document. The footer text "ADDITIONAL FORMS MAY BE OBTAINED FROM UTMB PRINTING SERVICES BY CALLING 409.772.5900" and "UTMB FORMS MGT. STRICTLY PROHIBITS CHANGES TO THIS FORM" strongly signal a print-oriented workflow. The form is designed to be printed, filled by hand, and submitted physically.

The absence of fillable fields is a meaningful accessibility gap. Patients or representatives using screen readers, those with motor disabilities, or anyone without access to a printer are disadvantaged.

## 4. CONTENT DESIGN

**Length and density**: A single page, which is appropriate for a release authorization. However, the form packs substantial legal text into that single page, resulting in a dense layout.

**Record type granularity**: The form provides 10 checkbox options for record types: Emergency Records, Hospital Records, Clinic Records, Radiology Reports, Lab Reports, Radiology Films, Immunization Records, Pathology Reports, Slides, and Other. This is a useful level of specificity. However, there is no "All Records" or "Entire Medical Record" option — the requestor must select individual categories, and there is no billing/claims option (unlike what the notes suggest the form should have).

**Expiration clause**: "This authorization will expire on the 180th day of the signing unless a lesser date is specified below" — a 180-day default expiration is reasonable and clearly stated.

**Legal disclosure block**: The authorization includes a comprehensive paragraph covering AIDS/HIV, substance abuse, and mental health disclosures; psychotherapy notes carve-out; revocation rights; re-disclosure warning; and voluntariness statement. This is thorough but dense — it is a single paragraph of approximately 130 words of legal language with no formatting breaks or plain-language summary.

**Purpose field**: "Please state the purpose of your request for patient's records below" is included, which is standard for third-party authorizations. Notably, this field appears at the bottom of the form in the extracted text, suggesting potentially confusing layout ordering.

**Signature section**: Only provides a signature line for "Authorized Personal Representative" — not the patient themselves. This is consistent with the form being for third-party use, but could confuse a patient who picks up this form by mistake.

## 5. PATIENT-CENTEREDNESS

This form is **not designed for patient self-access**. Key indicators:

- The signature line is labeled "Signature of Authorized Personal Representative" with "Relationship to the Patient" — there is no option for the patient's own signature.
- It requires the requestor to specify a "release to" recipient, implying records are being sent to a third party, not to the patient themselves.
- There are **no delivery format options** (no email, no portal, no electronic delivery). The form collects a fax number and mailing address for the recipient, suggesting mail/fax are the only assumed delivery methods.
- There is **no mention of HIPAA § 164.524** (Right of Access), patient rights, fees, turnaround times, or electronic health information export.
- The instruction "Please attach documents to verify your authority to sign on behalf of the patient: Letter of Representation, Medical Power of Attorney, Guardianship Letters, etc." further confirms this is a representative-use form.

A patient who encounters this form instead of Form 7033 would find no clear path to request their own records. The form does not redirect patients to the correct form (7033).

## 6. COMPLIANCE

- **Expiration**: 180-day default is within normal bounds.
- **Revocation rights**: Clearly stated — "I may revoke this authorization at any time by notifying UTMB in writing."
- **Voluntariness**: "This Authorization is voluntary and I may refuse to sign this Authorization Form. I understand that I am not required to sign this Authorization Form in exchange for the patient receiving treatment from UTMB." — appropriate non-conditioning language.
- **Sensitive information handling**: The form notes that disclosures may include AIDS/HIV, substance abuse, and mental health information, and requires a separate authorization for psychotherapy notes. This is compliant with 42 CFR Part 2 and HIPAA.
- **No fees disclosed**: The form does not mention any charges for record copies. This is neutral — fees may be addressed elsewhere.
- **No submission instructions on the form itself**: Unlike Form 7033, this form does not include submission instructions (mail, fax, email addresses for where to send the completed form). The requestor is expected to know where to submit it.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **No patient signature line**: The form only provides a signature line for "Authorized Personal Representative," with no accommodation for patients signing on their own behalf. A patient who picks up this form instead of Form 7033 has no appropriate place to sign.
- **Missing submission instructions**: Unlike Form 7033, this form does not specify where to send the completed authorization. The from-address is listed (UTMB at Galveston, 301 University Blvd.) but this appears as the records-source field, not as a submission destination.
- **Purpose field placement**: "Please state the purpose of your request" appears after the footer/form-number block in the extracted text, suggesting it may be placed in an unusual position on the physical form, potentially causing requestors to overlook it.

### 🚩 RED FLAGS

- **No cross-reference to patient form**: A patient who finds this form has no indication that a separate, more appropriate form (7033) exists for patient self-requests. This could lead to patients using a form not designed for them, with no delivery options and a third-party-oriented workflow.

### ❌ ERRORS

- **Checkbox rendering**: The checkboxes for record types appear as `❏` characters in the text layer, which is a cosmetic issue but confirms they are static text, not interactive form elements.
- **"HHSC DSHS" reference in footer**: The footer includes "HHSC DSHS" (Texas Health and Human Services Commission / Department of State Health Services) without explanation of what this abbreviation means or its relevance to the form. This may be a legacy institutional reference.

### ✨ BRIGHT SPOTS

- **Granular record type selection**: The 10 checkbox categories (Emergency, Hospital, Clinic, Radiology Reports, Lab Reports, Radiology Films, Immunization Records, Pathology Reports, Slides, Other) offer useful specificity for targeted requests, more granular than many comparable forms.
- **Clear expiration language**: The 180-day auto-expiration with option for a shorter period is clearly stated and reasonable.
- **Psychotherapy notes carve-out**: The explicit statement that "a separate authorization form must be completed" for psychotherapy session notes properly distinguishes these under HIPAA's heightened protections.
