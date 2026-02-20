# Evaluation: UTMB Health — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

Form-3 is a third-party hosted copy of UTMB's **HIPAA Authorization for the Release of Protected Health Information (PHI) By UTMB**, identified as **Medical Record Form 7032 – Rev. 10/16** (October 2016). It is hosted by Champion Records Service at `https://www.championrecordsservice.com/uploads/forms/2024/UTMB-HIPAA-Auth-10-16.pdf`, not on UTMB's own website.

This document is substantively the same form as form-2.pdf (Form 7032 – Rev. 5/24), which is the current official version hosted on UTMB's SharePoint. Both are general-purpose HIPAA authorization forms for third-party (non-patient) requestors. UTMB also maintains a separate patient-specific form, Form 7033 (form-1.pdf), designed for patients/guardians requesting their own records.

Key differences between form-3 (Rev. 10/16) and form-2 (Rev. 5/24):
- **Revision date**: Form-3 is roughly 8 years older (October 2016 vs. May 2024).
- **Field labels**: Form-3 uses "Shot Records" where form-2 uses "Immunization Records"; form-3 labels "Telephone Number" / "Fax Number" where form-2 uses "Tel:" / "Fax:".
- **Signature field**: Form-3 says "Signature of Authorized Personal Representative" with a "Date" field; form-2 says the same but specifies "Date/Time."
- **Missing footer content**: Form-3 lacks the note "ADDITIONAL FORMS MAY BE OBTAINED FROM UTMB PRINTING SERVICES BY CALLING 409.772.5900" that appears on form-2.
- **Text ordering**: The extracted text for form-3 shows "Please state the purpose of your request for patient's records below:" placed earlier in the flow, before the release-to fields, while in form-2 it appears at the bottom — likely a layout difference in how the PDF text layer was constructed.
- **"I authorize" line placement**: Form-3's text extraction shows "I authorize the release of medical records from:" at the very end of the text body, after the footer block, suggesting a layout anomaly or text-layer ordering issue.

## 2. FINDABILITY

This form was **not found on UTMB's own website** but rather on a third-party records retrieval service site (Champion Records Service). The notes indicate it was surfaced via web search for UTMB medical record release forms. A patient going directly to UTMB's medical records page at `https://www.utmb.edu/utmbhealth/online-services/medical-records` would find the current versions (forms 1 and 2) but would not encounter this particular copy.

The fact that a third-party vendor hosts an outdated version of UTMB's form is a findability concern: a patient searching the web could land on this 2016 version rather than the current 2024 version, potentially submitting an outdated authorization form that UTMB may not accept or that may lack current legal language.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 121,604 bytes (reasonable for a single-page PDF).
- **Page count**: 1 page.
- **Text layer**: Present and functional — full text is extractable, making the form screen-reader accessible and searchable.
- **Fillable fields**: 0. The form has **no interactive fillable fields**, meaning users must print and hand-fill it. This is a significant digital accessibility limitation.
- **Font count**: 7 fonts used.
- **Embedded images**: 0.
- **Not an image-only scan**: Confirmed — text is natively embedded.

The lack of fillable fields is the primary technical shortcoming. Additionally, the text-layer ordering appears disordered (the "I authorize the release of medical records from:" line appears after the footer block in extracted text), which could affect screen-reader experience — a user navigating via assistive technology may encounter the form content in a confusing sequence.

## 4. CONTENT DESIGN

The form is a single-page document with a structured layout that covers core HIPAA authorization elements:

**Patient identification fields**: Patient name (Last, First, M.I.), previous names, address, date of birth, MRN.

**Record type selection**: 10 checkbox categories — Emergency Records, Hospital Records, Clinic Records, Radiology Reports, Lab Reports, Radiology Films, Shot Records, Pathology Reports, Slides, and Other. The instruction says "Please provide a detailed description of the particular data and period of time you are requesting" but provides no dedicated field for date ranges.

**Recipient information**: Name, address, city, state, ZIP, telephone, and fax number fields.

**Authorization language**: A dense paragraph covering sensitive information categories (AIDS/HIV, drug/alcohol abuse, mental/behavioral health), psychotherapy notes exclusion, revocation rights, re-disclosure warning, voluntariness, and non-conditioning of treatment.

**Concerns**:
- The authorization language is a **single dense block of text** with no paragraph breaks, bolding, or structural formatting. Key rights (revocation, voluntariness, re-disclosure risk) are buried within this block.
- The term "Shot Records" is informal and potentially confusing compared to form-2's updated "Immunization Records."
- The "180th day" expiration clause uses an unusual superscript rendering: "180^th day" — the extracted text shows it as "180 day" with "th" appearing to be a formatting artifact.
- There is **no date-range field** for partial records despite the instruction to describe "period of time."
- The purpose-of-request field is mentioned ("Please state the purpose of your request for patient's records below:") but there is no clearly defined space or text field for the response.

## 5. PATIENT-CENTEREDNESS

This form is **not designed for patient self-requests**. It is the general HIPAA authorization form (Form 7032) intended for third-party requestors. Key indicators:

- The signature line reads **"Signature of Authorized Personal Representative"** with a "Relationship to the Patient" field, implying a third party is signing — not the patient themselves.
- The bolded instruction states: **"Please attach documents to verify your authority to sign on behalf of the patient: Letter of Representation, Medical Power of Attorney, Guardianship Letters, etc."**
- There is no patient signature line — only a representative signature line.
- The form does not offer email, MyChart, or any electronic delivery options (unlike Form 7033).
- No submission instructions are provided on form-3 (form-2 includes the UTMB Printing Services phone number, but form-3 omits even this).

A patient who finds this form online and attempts to use it for a self-request would face confusion: there's no obvious place for the patient's own signature, and the attached-documents requirement implies authority verification that doesn't apply to a patient requesting their own records.

UTMB does have the right form for patient self-requests (Form 7033, form-1.pdf), which offers mail, email, fax, and MyChart delivery. The risk here is that patients encountering form-3 on a third-party site would not know that a better option exists.

## 6. COMPLIANCE

- **Expiration**: "This authorization will expire on the 180th day of the signing unless a lesser date is specified below." The 180-day default expiration is reasonable and compliant.
- **Revocation**: Revocation rights are clearly stated — patient may revoke "at any time by notifying UTMB in writing."
- **Voluntariness**: The form states: "This Authorization is voluntary and I may refuse to sign this Authorization Form."
- **Non-conditioning**: "I understand that I am not required to sign this Authorization Form in exchange for the patient receiving treatment from UTMB."
- **Sensitive information**: The form notes that disclosed information "may include" AIDS/HIV, drug/alcohol, and mental health information, and separately notes psychotherapy notes require a separate authorization — consistent with HIPAA and Texas law.
- **Re-disclosure warning**: Included appropriately.
- **Purpose of request**: The form asks for purpose but does not restrict disclosure to specific purposes, which is compliant.

No overtly non-compliant elements were identified. The form covers the core HIPAA authorization requirements (45 CFR § 164.508).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Third-party hosting of outdated form**: Champion Records Service hosts this 2016-vintage form at a URL containing "2024" in the path (`/uploads/forms/2024/UTMB-HIPAA-Auth-10-16.pdf`), which could mislead users into thinking it's current. UTMB's official version (Form 7032 – Rev. 5/24) has been updated, meaning this copy may contain outdated legal language or missing elements that UTMB's HIM department no longer accepts.

### ⚠️ AMBIGUITIES

- **No patient signature line**: The form provides only a "Signature of Authorized Personal Representative" line with no alternative for the patient themselves. A patient encountering this form would not know where to sign or whether they should use this form at all.
- **No date-range field despite date-range instruction**: The form instructs requestors to provide "a detailed description of the particular data and period of time you are requesting" but offers no dedicated date fields — only checkboxes for record categories. The updated form-2 also lacks explicit date range fields, suggesting this is a persistent gap.
- **"Shot Records" label**: This informal term (updated to "Immunization Records" in the 2024 revision) could cause confusion about what records are included.

### ❌ ERRORS

- **Text-layer ordering anomaly**: The line "I authorize the release of medical records from:" appears at the very end of the extracted text, after the footer material ("UTMB FORMS MGT. STRICTLY PROHIBITS CHANGES TO THIS FORM"), rather than near the top where it logically belongs. This suggests a PDF construction error that would affect screen-reader navigation.
- **Outdated revision**: Rev. 10/16 is nearly a decade old. The current official version is Rev. 5/24, which includes updates like the "Immunization Records" label and the UTMB Printing Services contact.

### ✨ BRIGHT SPOTS

- **Sensitive information transparency**: The authorization paragraph explicitly names the categories of sensitive information that may be disclosed (AIDS/HIV, substance abuse, mental health) and notes the psychotherapy notes exclusion — this is clear and compliant.
- **Re-disclosure warning**: The form includes a plain-language warning that "the information disclosed pursuant to this authorization may be re-disclosed by the recipient and no longer protected by federal or Texas privacy laws," which is a useful patient protection.
