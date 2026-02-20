# West Tennessee Healthcare — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is titled **"MEDICAL RELEASE AUTHORIZATION"** with the subtitle "(Allows your physician/provider/nurse or staff to discuss your care or items selected with appointed individuals below)." It is specific to **West Tennessee Medical Group Clinic** (the physician group practice arm of the system), not the hospital broadly. The URL path (`/wp-content/uploads/2019/03/Medical_Release_Authorization.pdf`) suggests it was uploaded in March 2019.

West Tennessee Healthcare provides three separate ROI-related forms:
- **form-1.pdf** (this document): A general medical release authorization for the medical group clinics (2019)
- **form-2.pdf**: "AUTHORIZATION FOR RELEASE OF PROTECTED HEALTH INFORMATION" — a third-party release form (2020)
- **form-3.pdf**: "REQUEST FOR ACCESS TO PROTECTED HEALTH INFORMATION" — a patient-access-specific form (2020), explicitly noted as "to be used when patient wants to access their own medical record"

Form-1 is the oldest of the three and appears to serve a different purpose — authorizing staff to *discuss* care or release selected records to appointed individuals. It is not a patient access request form. The organization commendably created a separate, dedicated patient access form (form-3), but form-1 remains available and could confuse patients who encounter it first.

## 2. FINDABILITY

According to the retrieval notes, form-1 was found via a simple web search and is linked from the medical records page at https://www.wth.org/request-medical-records/. The retrieval difficulty was rated **easy** — the first web search was sufficient. The URL (`Medical_Release_Authorization.pdf`) is descriptive and human-readable.

However, the coexistence of three different forms creates a navigation burden. A patient arriving at the medical records page must distinguish between this older medical group clinic form, the third-party release form (form-2), and the actual patient access form (form-3). The form itself provides no guidance about when to use it versus the other forms.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,005 characters)
- **Fillable fields**: **Zero**. The form has no interactive form fields whatsoever. All fields must be printed and handwritten.
- **Pages**: 1
- **File size**: 124,077 bytes — notably large for a single-page text-only PDF with zero embedded images. By comparison, form-2 (also 1 page with text layer) is only 23,126 bytes, making form-1 over 5× larger for similar content. This suggests the PDF may have been generated inefficiently (6 fonts embedded vs. 4 for the other forms).
- **Digital-first design**: No. This is clearly designed as a print-and-handwrite document. The initials-based record selection system ("please initial beside documents or information that may be released") is fundamentally incompatible with digital completion. Blank lines for signatures and dates confirm the print-first intent.

## 4. CONTENT DESIGN

**Length**: 1 page — appropriate for the content, though the page is extremely dense. The form crams patient identification, release-to fields, purpose of disclosure, record type selection (15 categories with initial lines), and seven numbered legal paragraphs onto a single page.

**Clarity**: Mixed. The subtitle explains the form's purpose in plain language, but the legal paragraphs are dense. Paragraph 3 bundles authorization for alcohol/drug abuse records (42 CFR), psychiatric/mental illness records, and HIV/AIDS records into one sweeping clause. Paragraph 7, about marketing remuneration, is unlikely to be relevant for most patients and adds confusion.

**Organization**: The form follows a logical top-to-bottom flow: patient ID → release-from/to → purpose → record types → legal terms → signatures. However, the record-type selection section uses an initials-based system with underscores (`_____All Dictated Reports`, `_____Lab (may include AIDS/HIV information)`, etc.) arranged in a single column, which wastes vertical space and makes the page feel cramped.

**Readability**: The legal section uses small, dense text to fit seven paragraphs into a small area. Some terms are clinical rather than patient-friendly (e.g., "Pertinent Summary," "Anesthesia Record"). The "SS No. (optional)" field label is appropriately marked optional but its inclusion at all is questionable.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is a **general release authorization**, not a patient access form. It frames the action as allowing staff "to discuss your care or items selected with appointed individuals" — a third-party disclosure model. The organization does have a dedicated patient access form (form-3), but form-1 does not reference it or direct patients to it.

**Scope options**: The form offers 15 record-type categories with an initials-based selection system, plus an "Other" option. It includes date-of-treatment and place-of-treatment fields. This granularity is reasonable, though the initials system is burdensome.

**Format/delivery options**: None. Unlike form-2 and form-3 (which offer paper, fax, CD/DVD, email, and portal), form-1 lists no method of disclosure at all. The patient has no way to specify how they want to receive records.

**Right of Access language**: None. The form does not reference HIPAA § 164.524, patient rights, or the Right of Access. There is no mention of electronic health information export.

**Purpose options**: The form lists "Medical Care," "Patient Portal," "Insurance," "At the Request of the Patient," and "Other" as purposes of disclosure. "At the Request of the Patient" is the closest to a patient access purpose, but it's framed as a purpose for third-party release, not a rights exercise.

## 6. COMPLIANCE

**Expiration**: Paragraph 6 states: "The authorization will expire in **ninety (90) days** unless I provide an alternate expiration date or event." A 90-day default expiration is short and could force patients to re-submit if processing takes time, though the form does allow an alternate date.

**Liability waiver**: Paragraph 4 states: "The facility is hereby released from any liability and the undersigned will hold the facility harmless for complying with this authorization." This hold-harmless clause shifts liability to the patient, which is standard in ROI forms but goes beyond what HIPAA requires.

**SSN collection**: The form includes an "SS No. (optional)" field. While marked optional, including it at all creates a data collection risk and is unnecessary for records release purposes.

**Sensitive information bundling**: Paragraph 3 bundles consent for release of alcohol/drug abuse records, psychiatric/mental illness records, and HIV/AIDS information into a single paragraph with blanket authorization. This does not allow the patient to consent to release of some sensitive categories but not others.

**No fee disclosure**: The form does not mention any costs associated with the records request.

**No submission instructions**: The form provides no information about where to send the completed form, processing times, or contact information for questions.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No delivery method options**: Unlike the organization's newer forms (form-2 and form-3), this form provides no way for the patient to specify how records should be delivered. This omission effectively gives the facility complete discretion over the delivery method.
- **Blanket sensitive-information consent**: Paragraph 3 bundles alcohol/drug, psychiatric, and HIV/AIDS records into a single all-or-nothing authorization: "I hereby authorize the release of information. This authorization also includes any information related to diagnosis and/or treatment of any psychiatric or mental illness or any state of infection with the HIV (AIDS) virus." Some state laws require separate consent for each sensitive category.
- **Hold-harmless clause**: "The facility is hereby released from any liability and the undersigned will hold the facility harmless for complying with this authorization" — this could discourage patients from exercising their rights if they perceive personal legal risk.

### ⚠️ AMBIGUITIES

- **Relationship to other WTH forms is unclear**: This form is specific to "West Tennessee Medical Group Clinic" but is hosted on the same medical records page as the system-wide forms. A patient would not know whether to use this form or form-3 for a patient access request without external guidance.
- **"May speak freely" checkbox**: The line `_____ May speak freely with my Physician/Nurse/Provider/Clinic staff regarding all aspects of my care` is ambiguous — it's unclear whether this authorizes verbal discussion only, or also written record release, and with whom exactly. This conflates communication authorization with records release.

### ❌ ERRORS

- **Bloated file size**: At 124KB for a 1-page text-only document with zero images, the file is over 5× larger than comparable forms from the same organization, suggesting inefficient PDF generation.
- **Missing submission instructions**: No mailing address, fax number, email, or drop-off location is provided. A patient completing this form has no guidance on how to submit it.

### ✨ BRIGHT SPOTS

- **Organization distinguishes patient access from third-party release**: While form-1 itself is not a patient access form, the fact that West Tennessee Healthcare created a separate dedicated patient access form (form-3) with the explicit subtitle "To be used when patient wants to access their own medical record" is a strong practice. Few organizations make this distinction.
- **SSN marked optional**: The "SS No. (optional)" label, while the field's presence is questionable, at least clearly communicates that patients are not required to provide their Social Security number.
