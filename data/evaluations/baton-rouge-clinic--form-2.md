# Evaluation: The Baton Rouge Clinic — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page **"Authorization for Release of Protected Health Information TO The Baton Rouge Clinic, AMC"** — an incoming records transfer form. It authorizes an outside provider to send the patient's records *to* The Baton Rouge Clinic, not the reverse. The title makes this clear: "Release of Protected Health Information **to** The Baton Rouge Clinic, AMC."

The clinic maintains three distinct medical records forms:
- **form-1.pdf** — Authorization for release of records **from** the clinic to another party (outbound ROI).
- **form-2.pdf** (this document) — Authorization for release of records **to** the clinic from another provider (inbound transfer).
- **form-3.pdf** — "Right of Access Form" — a HIPAA Right of Access form for patient or designee access, citing 45 C.F.R. 164.524.

This form is **not a patient access request form**. It is designed for the scenario where a patient wants records from a prior provider sent to The Baton Rouge Clinic for continuity of care. The key authorizing language is: "I hereby authorize ___ to release the information identified in this authorization form from the medical records of ___ and provide such information to: ___" — i.e., the patient fills in the external provider's name and the records flow inbound to the clinic.

## 2. FINDABILITY

Per the retrieval notes, all three forms were found on a well-organized **"Downloadable Forms"** page at `https://batonrougeclinic.com/patient-information/downloadable-forms/`. A web search for authorization/release forms returned direct PDF links. The form-2 PDF was sourced from `https://batonrougeclinic.com/wp-content/uploads/2023/03/AuthTo-02.28.2023.pdf`.

**URL/filename**: The filename `AuthTo-02.28.2023.pdf` is reasonably descriptive — "AuthTo" signals the direction (authorization to the clinic), and the date is embedded. However, a patient unfamiliar with "AuthTo" might not immediately understand its purpose from the URL alone.

**Findability overall**: Easy. No login, CAPTCHA, or JavaScript rendering required. Directly linked from a dedicated patient-facing page. The page groups the forms under "Medical Records," which helps patients locate the right document.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present (`has_text_layer: true`). All text is extractable, not an image-only scan.
- **Fillable fields**: **Zero** (`fillable_field_count: 0`). This is a flat PDF — patients must print and hand-fill. No interactive form fields despite the form being digitally created (not a scan).
- **Font count**: 6 fonts used, suggesting some typographic structure (likely headings vs. body text).
- **Embedded images**: 2 (likely a logo/header graphic).
- **File size**: 264,223 bytes (258 KB) for 2 pages — slightly large for a text-heavy 2-page form but not unreasonable given embedded images.
- **Digital-first design**: The form was clearly created digitally (clean text layer, no scan artifacts), but it was designed for **print-and-fill** workflow. There are no fillable fields, no electronic submission instructions, and no email/fax submission option mentioned on the form itself. The blank lines (e.g., `____________________________________________`) confirm the print-and-fill intent.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is proportionate for an authorization form of this type.

**Structure and organization**: The form follows a logical sequence:
1. Patient Identification (name, DOB, address, SSN, telephone)
2. Authority to Release (identifies the releasing party and recipient)
3. Information to be Released (date range, record type checkboxes)
4. Purpose of Disclosure
5. Sensitive Records Release (drug/alcohol, psychiatric, HIV/AIDS — separate yes/no)
6. Right to Revoke Authorization
7. Re-disclosure Notice
8. Signature Block

**Clarity**: The language is moderately legalistic but generally comprehensible. The sensitive records section uses clear, direct language: "I understand if my medical or billing record contains information in reference to drug and/or alcohol abuse, psychiatric care, sexually transmitted disease, hepatitis B or C testing, and/or other sensitive information, I agree to its release." The revocation instructions are specific, naming the mailing address.

**Record type options**: The form provides 13 checkbox categories for record types: complete health record, diagnosis & treatment codes, history and physical exam, consultation reports, discharge summary, progress notes, laboratory test results, X-ray reports, X-ray films/images, photographs/videotapes, immunization records, itemized bill, and other (specify). This is a reasonable and fairly granular set of options.

**Layout**: The form uses underlined blank spaces for handwritten input. Spacing appears adequate for handwriting based on text layout. The footer includes the clinic's address, phone, and website.

**Notable absence**: Unlike form-1, this form does **not** include an email address field for the patient, nor does it provide a phone number or email for questions about the request (form-1 includes "please call 225-246-9770 or email us at medrecords@brclinic.com").

## 5. PATIENT-CENTEREDNESS

**Purpose alignment**: This form is designed for **incoming records transfers**, not for a patient requesting their own records from the clinic. A patient seeking their own health information from The Baton Rouge Clinic should use form-1 (outbound release) or, ideally, form-3 (Right of Access). This form would be used when a patient wants records from *another* provider sent to the clinic.

**Scope options**: Patients can specify date ranges ("From" / "To" dates) and select specific record types via checkboxes. This provides reasonable granularity.

**Format options**: **None**. The form does not offer any choice of delivery format (electronic vs. paper). Compare this to form-3 (Right of Access), which explicitly offers "An electronic record, access electronically or access through an online portal" and "Hard Copy."

**Right of Access language**: **Absent**. The form does not reference HIPAA § 164.524 or patient right of access. This is understandable since the form is not designed for patient access — it is a third-party authorization for transferring records between providers.

**EHI Export awareness**: No mention of electronic health information export or bulk data.

**SSN requirement**: The form includes a field for "Social Security #" without indicating whether it is optional. Requiring a Social Security number on a medical records form is increasingly considered a privacy risk and is not required by HIPAA.

## 6. COMPLIANCE

**Liability waiver**: The signature section includes: "I hereby release and discharge The Baton Rouge Clinic, AMC of any liability and the undersigned will hold The Baton Rouge Clinic, AMC harmless for complying with this Authorization." This hold-harmless clause appears in both form-1 and form-2 and is a standard (if aggressive) practice.

**Expiration**: The form states the authorization will expire on a specified date/event "or 1 year after this form was signed." A 1-year default expiration is reasonable and standard.

**Right to revoke**: Clearly stated — patient can revoke "at any time by submitting a written notice to The Baton Rouge Clinic, AMC, ATTN: Medical Records Manager at 7373 Perkins Road, Baton Rouge, LA 70808."

**Non-conditioning statement**: The form includes appropriate language: "I understand that I do not have to sign this authorization, and my treatment or payment for services will not be denied if I do not sign this form." It also correctly notes the exception for fitness-for-work type services.

**Re-disclosure warning**: Present: "I understand the information disclosed by this authorization may be subject to re-disclosure by the recipient and no longer be protected by the Health Insurance Portability and Accountability Act of 1996."

**Sensitive records**: Drug/alcohol, psychiatric, and HIV/AIDS information require separate affirmative consent ("Circle One: Yes / No"), which is appropriate for compliance with 42 CFR Part 2 and state-specific laws.

**No fees disclosed**: The form does not mention any fees associated with processing the request.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **SSN field with no optionality marker**: The form requests "Social Security #" without indicating whether it is required or optional. Form-1 marks required fields with asterisks (*) and includes SSN among them; form-2 uses no such marking system at all, leaving it unclear which fields are mandatory. Asking for SSN on a records form creates unnecessary privacy exposure.

- **No contact information for questions**: Unlike form-1, which provides a phone number (225-246-9770) and email (medrecords@brclinic.com) for questions, form-2 provides no way for a patient to reach the medical records department with questions about their request. The footer has only the main clinic number (225) 769-4044.

- **"Circle One" instruction on a non-fillable PDF**: The sensitive records section instructs patients to "Circle One: Yes / No" — but since the PDF has no fillable fields, this instruction only works if printed. There is no way to circle an option in the digital file.

### ❌ ERRORS

- **Missing word in HIV/AIDS consent**: The HIV/AIDS release paragraph reads: "I understand if my medical or billing record contains information in reference to HIV/AIDS... testing and/or treatment, agree to its release." The word **"I"** is missing before "agree" — it should read "...treatment, **I** agree to its release." (The extracted text shows the orphaned "I" on a separate line, suggesting a line-break formatting issue in the PDF where the "I" is visually present but separated oddly from the sentence flow.)

### ✨ BRIGHT SPOTS

- **Three-form strategy with clear differentiation**: The clinic maintains three purpose-specific forms (inbound transfer, outbound release, and Right of Access), which is more thoughtful than many organizations that use a single catch-all authorization. This helps patients and staff select the correct form for the situation.

- **Granular record type checkboxes**: The 13 record type categories provide meaningful specificity, letting patients control exactly what is released rather than forcing an all-or-nothing decision.
