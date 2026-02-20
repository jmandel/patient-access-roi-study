# Baptist Health Lexington — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is a **1-page "Request for Medical Records"** form hosted on the Baptist Health MyChart portal (`mychart.baptist-health.org`). Unlike the other two forms found for this organization — form-1.pdf (a comprehensive 3-page system-wide "Authorization for Use and/or Disclosure of Protected Health Information" revised 02/2026) and form-3.pdf (an older 2-page version of the same authorization form) — form-2.pdf is specifically designed for **patients requesting their own records**. Its opening line states: "As the patient, or the patient's personal representative, I am requesting a copy of the medical record held by Baptist Health."

This is a simpler, patient-access-specific companion to the more general authorization forms. It is dated "7/19" (July 2019), making it nearly 7 years old at the time of evaluation. Baptist Health Lexington does not have location-specific forms; all forms are system-wide for Baptist Health Kentucky.

## 2. FINDABILITY

Per the retrieval notes, this form was found via a web search for `"Baptist Health Lexington Kentucky medical records release form filetype:pdf"`. It was hosted at `https://mychart.baptist-health.org/MyChart/en-US/docs/New%20Patient%20Medical%20Request%20Form.pdf` — a URL under the MyChart subdomain rather than the main `baptisthealth.com` website. The filename "New Patient Medical Request Form.pdf" is reasonably descriptive, though the word "New" at the beginning is slightly misleading (it could suggest this is for new patients only).

The form was directly downloadable without login or bot blocking. However, it lives on the MyChart portal domain rather than the main patient-facing website, which means a patient navigating `baptisthealth.com` → Medical Records would more likely encounter form-1.pdf (the system-wide authorization) rather than this simpler patient-access form. The main medical records page is at `https://www.baptisthealth.com/patients-visitors/after-your-visit/medical-records`, and it is unclear whether this simpler form is linked from there. Overall retrieval difficulty was rated "Easy."

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (2,050 characters) is extractable via `pdftotext`.
- **Fillable fields**: Zero (`fillable_field_count: 0`). The form uses underscores and blank lines for handwritten input, indicating a print-and-fill design.
- **File size**: 119,572 bytes (~117 KB) for a single page — reasonable.
- **Font count**: 2 fonts, suggesting a clean typographic design.
- **Embedded images**: 1 (likely a logo or header graphic).
- **Scan vs. digital**: Not an image-only scan; this is a digitally-created PDF.

Despite being digitally created (not a scan), the form has **no interactive form fields**. A patient must print the form, fill it by hand, and physically submit it. This is a significant shortcoming for a form hosted on a digital portal (MyChart). The form does not leverage any digital capabilities — no checkboxes are interactive, no text fields are fillable.

## 4. CONTENT DESIGN

**Length**: 1 page — concise and appropriately sized for a patient access request. This is a strength compared to the 3-page form-1.pdf.

**Structure**: The form follows a logical top-to-bottom flow:
1. Patient identification fields (name, DOB, phone, SSN last 4, address, email)
2. Facility and dates of service
3. Record type selection (7 checkbox options plus "Other")
4. Delivery recipient (Patient or Other)
5. Sensitive information notice
6. Format selection (paper, CD, secure portal, unsecure email, fax)
7. Email risk disclaimer
8. Signature and date

**Clarity**: The language is mostly plain and direct. The opening statement — "As the patient, or the patient's personal representative, I am requesting a copy of the medical record held by Baptist Health" — clearly establishes this as a patient access form. However, the sensitive information notice is dense: "I understand the record may include information relating to mental healthcare, communicable diseases, and treatment of alcohol or drug abuse. NOTICE: Once your PHI has been disclosed in accordance with this request, it may be re-disclosed to individuals or organizations that are not subject to the HIPAA regulations."

**Layout concerns**: The record type checkboxes use underscores (`_____`) rather than actual checkboxes or boxes, which makes the form look informal and potentially confusing. The "Does request include a virtual visit? Yes No" question is awkwardly placed in the middle of the record type list (between "Emergency Room Record" and "Radiology") without clear formatting to distinguish it as a separate question. The delivery format options (`__ paper  ___ CD  ___ secure portal  ___ unsecure email ____ fax`) are crammed onto two lines with inconsistent underscore spacing.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This is explicitly a patient access form — a significant strength. The form's title "Request for Medical Records" and opening language make clear it is for patients requesting their own records, not a general third-party release authorization.

**Record type options**: The form offers 7 specific record categories plus "Other":
- Summary of Medical Record
- Entire Medical Record
- Emergency Room Record
- Radiology
- Laboratory
- Operative/Pathology Report
- Immunization Records

This is a reasonable set of options, though notably simpler than form-1's "Package 1" and "Package 2" framework.

**Delivery format options**: The form offers 5 format/delivery options: paper, CD, secure portal, unsecure email, and fax. The inclusion of "secure portal" is a positive feature. However, there is no explicit mention of electronic delivery in a structured/machine-readable format (e.g., CCDA, FHIR).

**Delivery recipient**: The form allows delivery to "Patient" or "Other (Provide name and address)." This means the form can function as a limited third-party release as well, though its primary framing is patient access.

**HIPAA Right of Access**: The form does not reference HIPAA § 164.524 or explicitly mention the patient's right of access. There is a reference to HIPAA re-disclosure rules in the sensitive information notice, but no affirmative statement of patient rights.

**EHI Export**: No mention of electronic health information export, bulk data, or any digital health standards.

**SSN requirement**: The form asks for "Last Four Digits of Social Security Number." While this is a common identification practice, it is not required by HIPAA for patient access requests and may constitute an unnecessary barrier for patients uncomfortable sharing this information. The form does not indicate whether this field is optional.

## 6. COMPLIANCE

**No notarization required**: The form requires only a patient signature (or legal representative signature), with no notarization or witness requirements.

**No fees disclosed**: The form does not mention any fees or costs for obtaining records. This is neither a red flag nor a bright spot — fees may be communicated elsewhere.

**No expiration/revocation clause**: Unlike form-1.pdf and form-3.pdf, which include authorization expiration language (defaulting to one year), this patient access request form has no expiration clause. This makes sense for a simple records request as opposed to an ongoing authorization.

**Submission method unclear**: The form does not specify how to submit it — whether by mail, fax, email, in-person, or through the MyChart portal. There is no mailing address, fax number, email address, or other submission instructions on the form itself. A patient who downloads this form has no guidance on how to return it.

**Email risk disclaimer**: The form includes a reasonable disclaimer: "I understand if I request the record to be provided by email that I undertake the following potential risks - the information may be obtained by someone else, the information can be opened and read by someone else, unencrypted information does not provide any assurance of privacy or security." This is appropriate and not overly burdensome, though it could be more concisely stated.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions**: The form provides zero guidance on how to return it. No mailing address, no fax number, no email, no portal upload instructions. A patient who downloads and fills out this form is left guessing how to submit it. By contrast, form-1.pdf includes full contact information: "Release of Information ◆ PO Box 436147 ◆ Louisville, KY 40253 / Phone: (502) 253-4828 ◆ Toll Free: (833) 998-1257 ◆ Fax: (502) 253-4829."

### ⚠️ AMBIGUITIES

- **SSN field appears mandatory**: The form asks for "Last Four Digits of Social Security Number" with no indication it is optional. This may deter patients or create a perceived barrier, especially since SSN is not required by HIPAA for patient access requests.
- **"Does request include a virtual visit?" placement**: This question is inserted between the Emergency Room Record and Radiology checkboxes without visual separation, making it easy to overlook or misinterpret as related to radiology. It also has "Yes / No" options printed as text without checkboxes or clear selection mechanism.
- **Relationship between this form and form-1**: A patient encountering both forms would have no clear guidance on which to use. Form-1 (the system-wide authorization) also supports patient self-requests via a "Myself" checkbox option. The co-existence of two overlapping forms without cross-referencing could confuse patients.

### ❌ ERRORS

- **Outdated**: Dated "7/19" (July 2019), this form is nearly 7 years old while form-1 was revised 02/2026. The older form may not reflect current processes, policies, or delivery options available through Baptist Health's systems.

### ✨ BRIGHT SPOTS

- **Patient-access-specific design**: This is one of the few forms in the study that is explicitly designed for patient access rather than being a general third-party authorization repurposed for patient use. The opening sentence directly states the patient is requesting their own records.
- **Concise 1-page format**: The single-page design reduces burden on patients compared to multi-page authorization forms. All essential fields fit on one page without feeling excessively cramped.
- **Secure portal as a delivery option**: Including "secure portal" alongside traditional delivery methods (paper, CD, fax) demonstrates awareness of digital delivery channels, even if the form itself isn't digitally fillable.
