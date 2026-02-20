# Evaluation: Northwestern Memorial Hospital — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page form titled **"Authorization to Disclose Health Information TO Northwestern Memorial Healthcare"** (form number 6276, revised 2/2022). Unlike the primary ROI form (form-1.pdf), this document serves the *reverse* direction: it authorizes an **outside provider or facility to send records TO Northwestern Medicine** for the patient's continued care. It is not a patient access form under HIPAA's Right of Access — it is an authorization for inter-provider information transfer.

In the context of the three documents found for this organization:
- **form-1.pdf** is the primary outbound ROI form (English, 2/2026, for releasing NM records to the patient or third party)
- **form-2.pdf** (this document) is for inbound records — obtaining records FROM another provider
- **form-3.pdf** is the Spanish translation of form-1

This form is tangential to a patient exercising their right of access. A patient would use this form when they want their *other* providers' records consolidated at Northwestern, not when requesting their own records from Northwestern.

## 2. FINDABILITY

Per the retrieval notes, the form was straightforward to find. A web search for "Northwestern Medicine medical records release form PDF" returned direct links to all forms on nm.org. The source URL (`https://www.nm.org/-/media/northwestern/resources/patients-and-visitors/northwestern-medicine-authorization-to-obtain-information.pdf`) is hosted on Northwestern Medicine's CDN with a clearly named path. No login, CAPTCHA, or navigation maze was required. However, the URL slug ("authorization-to-obtain-information") could be confused with the outbound release form, and a patient might not immediately understand which form to use. The form itself does not appear to be linked from a prominent "Request Your Records" landing page in the same way the outbound form is — it serves a more specialized workflow.

## 3. TECHNICAL ACCESSIBILITY

**File size**: 67,590 bytes (very small, fast to download).

**Text layer**: Present. The PDF has a real text layer (not a scanned image), enabling text selection and screen reader compatibility.

**Fillable fields**: **Zero**. Despite the metadata showing `fillable_field_count: 0`, the form contains numerous data-entry areas (patient name, address, phone, dates, checkboxes for record types, signature lines). This means the form is **not electronically fillable** — a patient must print it and complete it by hand. This is a significant regression from form-1, which has 79 fillable fields. The text extraction shows garbled characters (`\b������`) in place of fillable blanks, suggesting the form uses static placeholder graphics rather than interactive form fields.

**Fonts**: 6 fonts are embedded.

**Images**: None embedded; the form is text-only.

**Page count**: 2 pages.

**Overall**: The form is technically readable but not digitally completable. The lack of fillable fields makes it a print-and-handwrite artifact, falling short of modern digital accessibility standards.

## 4. CONTENT DESIGN

**Structure**: The form is organized into three numbered sections plus signature blocks:
1. Patient Information (name, DOB, address, phone)
2. Release Information From (the external provider/facility sending records)
3. Recipient of Information at Northwestern Memorial Healthcare (the NM office receiving the records)

Between sections 2 and 3, there are unnumbered blocks for Purpose, Dates of Service, and Records to Be Released.

**Record type granularity**: The form offers 10 checkboxes for record types: Clinic/Office Visits, Consultations, Emergency Department Reports, Discharge Summary, Operative/Procedure Reports, History & Physical, Abstract of Record, Complete Record, Test Results/Reports (with specification space), and Other. This provides reasonable granularity for selecting what records to transfer.

**Purpose field**: Pre-checked as "Further Treatment/Continued Care" with an "Other (specify)" option. The pre-check is appropriate since this form's primary use case is care coordination.

**Delivery method**: Section 3 offers three options: Fax, Mail, and "Secure electronic delivery (if secure delivery, provide email)." This is notable — it includes a secure electronic option.

**Legal language** (page 2): The disclosure and rights section is dense but covers required elements:
- Opt-out model for sensitive categories (AIDS/HIV, substance abuse, genetic testing, mental health)
- Right to withdraw authorization in writing
- 6-month validity period
- Note about potential re-disclosure after receipt
- Reference to 42 CFR Part 2
- No-penalty clause ("Treatment, payment, enrollment or eligibility for benefits will not be based on whether or not I sign this authorization")
- Minors aged 12-17 must sign for certain categories
- Witness required for mental health/developmental disability and genetic counseling disclosures

**Weaknesses**: The form lacks clear instructions at the top (unlike form-1, which says "Please print clearly and complete both pages"). There is no contact information for questions — no phone number, email, or mailing address for HIM. The form doesn't explain what the patient should do with it after completing it (bring to their NM provider? send to the outside facility? both?). The workflow is ambiguous: does the patient fill this out and give it to the *sending* provider, or does NM send it on the patient's behalf?

## 5. PATIENT-CENTEREDNESS

This form has limited patient-centeredness because its use case is inherently clinical-operational rather than patient-initiated right-of-access. Key concerns:

**Unclear audience**: The form appears to be something a patient fills out, but it authorizes *another provider* to send records *to* NM. It's unclear whether the patient is expected to deliver this form to the outside provider themselves or hand it to their NM care team to coordinate. No workflow instructions are provided.

**No submission instructions**: Unlike form-1, which clearly lists three submission channels (mail to Winfield, IL; fax 312.926.3093; email releaseofinformation@nm.org), form-2 provides no guidance on where to submit the completed form or who to contact with questions.

**No digital completion path**: With zero fillable fields, patients must print the form, fill it by hand, and figure out where to deliver it. There's no mention of online submission, patient portal integration, or any digital workflow.

**Language**: Available only in English. The primary outbound ROI form (form-1) has a Spanish translation (form-3), but this inbound form does not.

**Legal density**: Page 2's legal text is a single block of dense prose. While the content is substantively correct, it is not written in plain language. Sentences are long and compound, e.g.: "If not withdrawn, this authorization is valid for a period of six (6) months from the date of signature and allows release of records past the date signed as long as the authorization is still in effect."

## 6. COMPLIANCE

**Authorization validity**: 6 months from date of signature, which is a reasonable default.

**Sensitive information handling**: Uses an opt-out model — sensitive categories (HIV/AIDS, substance abuse, genetic testing, mental health) are included by default unless the patient checks a box to exclude them. The form states: "Unless checked or listed below, I understand the released information may include any or all of the following. Check and/or list if you do NOT want to include." This is a standard approach but can catch patients off-guard if they don't read carefully.

**Fee disclosure**: The form states "I understand that the sender of my health information may charge for the service of disclosing medical information and I am responsible for inquiring about these potential charges." This is transparent about potential costs from the sending facility but vague about amounts.

**Re-disclosure notice**: Appropriately notes that once NM receives the information, it "may be able to be re-released" and that Illinois law restricts re-release of certain categories. References 42 CFR Part 2.

**Minor consent**: Correctly addresses patients aged 12-17 needing to sign for certain sensitive categories.

**Witness requirements**: Requires a witness signature for mental health/developmental disability information and genetic counseling — this is an Illinois-specific requirement.

**No-conditioning clause**: States "Treatment, payment, enrollment or eligibility for benefits will not be based on whether or not I sign this authorization."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions whatsoever**: The form provides no address, fax number, email, phone number, or any guidance on where to send the completed form or who to contact with questions. This is a significant usability failure for any patient trying to use this form independently. Compare with form-1, which provides mail address, fax, email, and phone number.

### ⚠️ AMBIGUITIES

- **Unclear workflow**: The form authorizes the "above named sending facility/provider as described in section 2 to release health information" — but it never explains whether the patient should give this form to the external provider, bring it to their NM appointment, or mail it somewhere. The operational pathway is completely undefined.
- **"Secure electronic delivery" without guidance**: Section 3 includes "Secure electronic delivery (if secure delivery, provide email)" but doesn't explain what constitutes "secure" delivery, who initiates it, or whether the sending facility needs to support a specific protocol.

### ❌ ERRORS

- **Not fillable despite appearing interactive**: The PDF has zero fillable fields, yet the layout clearly contains form fields (checkboxes, text blanks). The garbled `\b������` characters in the text extraction suggest placeholder graphics that look like fields but aren't functional. This is a technical defect — the form appears to promise digital completion but doesn't deliver it.
- **Outdated relative to companion forms**: This form was last revised 2/2022 (form number 6276), while the primary outbound ROI form (form-1) was revised 2/2026. The 4-year gap means this form may not reflect current NMHC entity names, policies, or legal requirements.

### ✨ BRIGHT SPOTS

- **Includes secure electronic delivery option**: While the details are sparse, the inclusion of "Secure electronic delivery" as a delivery method in Section 3 is forward-thinking for an inbound records form.
- **Clear sensitive-information opt-out**: The form clearly labels each sensitive category and uses a straightforward checkbox mechanism for exclusion, with appropriate Illinois-specific legal context about re-disclosure restrictions.
