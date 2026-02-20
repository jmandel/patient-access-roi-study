# Huntington Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is a **general third-party "Authorization for Release of Health Information"** (form ID VD001, dated 9/28/21) published by Northwell Health, the parent system. It is not specific to Huntington Hospital — it is a system-wide form used across all Northwell facilities. This is one of four related documents retrieved for Huntington Hospital:

- **form-1.pdf** (this document): General third-party ROI authorization — 3 pages
- **form-2.pdf**: Companion instructions for form-1 — 3 pages
- **form-3.pdf**: Patient-specific "Request for Access to Health Information" form citing HIPAA § 164.524 — 2 pages, 28 fillable fields
- **form-4.pdf**: Companion instructions for form-3 — 2 pages

Critically, form-1 is designed for releasing records **to a third party**, not for patients requesting their own records. Northwell maintains a separate, distinct form (form-3) specifically for patient self-access under HIPAA's Right of Access. This two-form structure is an important design choice.

## 2. FINDABILITY

Retrieval was rated **easy** in the search notes. The forms are hosted on northwell.edu at a predictable path (`/sites/northwell.edu/files/2022-03/release-of-health-information-form-english.pdf`). The primary challenge was disambiguating Huntington Hospital (NY/Northwell) from the identically-named Huntington Hospital in California — resolved by adding "Northwell" to search queries.

The form is accessible from the Northwell Health medical records page. No facility-specific forms exist for Huntington Hospital itself; patients must navigate to the parent system site. The URL path includes a date (`2022-03`) but the filename is descriptive: `release-of-health-information-form-english.pdf`. The "english" suffix suggests a multilingual approach, though no other language versions were retrieved during this search.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 44,474 bytes (44 KB) — very lean for a 3-page PDF
- **Text layer**: Present — full text is extractable (5,820 characters)
- **Fillable fields**: **Zero (0)** — the form has no interactive form fields despite using checkbox symbols (£) throughout the text. This is a significant gap, especially given that the companion patient-access form (form-3) has 28 fillable fields.
- **Fonts**: 3 embedded fonts
- **Images**: 0 embedded images
- **Scan status**: Not a scan — digitally authored

The form appears to have been designed digitally (not scanned), but it lacks any interactive elements. All checkboxes are rendered as the pound/currency symbol "£" in the extracted text (e.g., `£ Regular Mail`, `£ Pick up at facility`), suggesting they are styled characters rather than functional form controls. Patients must print and complete this form by hand, or use PDF annotation tools informally. This is notably worse than form-3 (the patient access form), which has 28 fillable fields — an inconsistency that suggests form-1 may not have been updated to the same standard.

## 4. CONTENT DESIGN

**Length and proportion**: 3 pages is reasonable for a general authorization form covering delivery options, record types, sensitive-info opt-outs, and legal disclosures. A companion 3-page instruction document (form-2) doubles the total patient reading burden to 6 pages to complete one authorization.

**Structure**: The form uses a clear numbered section layout (1–9):
1. "From who" — releasing entity
2. "To who" — receiving entity
3. Manner/format/delivery details (mail, pickup, email, fax)
4. Verbal authorization initial
5. Requested health information (checkboxes)
6. Reason for release
7. Legal disclosures (HIPAA, NY State Law, 42 CFR Part 2)
8. Sensitive information opt-outs (substance abuse, mental health, HIV)
9. Expiration date and signatures

**Language clarity**: The form uses parenthetical plain-language glosses like "(from who)" and "(to who)" alongside formal headings, which is helpful. However, the legal section (item 7) contains dense multi-clause sentences — e.g., *"I understand that signing this Authorization is voluntary. My treatment, payment, enrollment in a health plan, or eligibility for benefits will not be conditioned upon my authorization of this disclosure."* This is standard HIPAA language but not plain-language.

**Layout observations**: Each page includes footer text identifying it as "Copy 1 – Patient Medical Record / Copy 2 – Patient or Patient's Personal Representative," suggesting the form was designed for carbon-copy physical distribution. The delivery options matrix in section 3 is structured as a three-column layout (Manner / Form/Format / Delivery Details) which attempts visual organization but loses clarity in the flat-text extraction.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is explicitly a **third-party release** authorization. It asks patients to specify both a "from" entity and a "to" entity, with no shortcut for "send to me." Patients requesting their own records should use form-3 instead, but form-1 itself contains **no cross-reference** directing patients to the correct form. A patient who finds form-1 first has no way to know form-3 exists from the document text alone.

**Scope options**: Good granularity — patients can request a medical record abstract, records for a date range, the entire record, specific lab results, radiology images/reports, itemized bills, or specify something custom. Date-range selection is available.

**Delivery format options**: Comprehensive for a third-party release: regular mail (paper, USB, CD), facility pickup (paper, USB, CD), electronic mail (secure or unsecure with explicit acknowledgment), and fax. The unsecure email option includes a clear risk disclosure: *"By checking here, I acknowledge that e-mail sent unencrypted means others may be able to access the information and read it once it is transmitted over the internet."*

**Right of Access language**: The form references "the Privacy Rule of the Health Insurance Portability and Accountability Act of 1996 (HIPAA)" and "42 CFR Part 2" in its legal section, but does **not** cite 45 CFR § 164.524 (the specific Right of Access provision). This is expected — form-1 is a general authorization, not a patient access request. The patient-access form (form-3) does cite § 164.524.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or TEFCA.

## 6. COMPLIANCE

**Expiration**: Section 9 defaults to "One (1) year" with an option for a custom expiration date. The instructions (form-2) state that "indefinite" is not acceptable and a fixed period is required by law. This is compliant with HIPAA and NY state requirements.

**Sensitive information handling**: Section 8 uses an **opt-out** model for substance abuse (OASAS-licensed programs), mental health (OMH-licensed programs), and HIV-related information — patients must initial to exclude these categories. This means sensitive information is released by default unless the patient actively opts out, which is a permissible approach under the authorization model but places the burden on the patient.

**Witness requirement**: The form includes a witness signature line. While not explicitly marked as mandatory, the presence of a dedicated witness section with date/time fields may create a perceived requirement for a witness — which is not required by HIPAA for a standard authorization and could create a practical barrier.

**No fees disclosed**: The form does not mention any costs or fees for record retrieval.

**No notarization required**: No notarization is mentioned.

**Submission method**: The form does not specify how to submit it (mail, fax, in-person, portal). The instruction document (form-2) also does not address submission logistics.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No fillable fields on the third-party release form while the patient access form has 28**: Form-1 has zero fillable fields, forcing print-and-sign, while form-3 (patient access) has 28 fillable fields. This inconsistency suggests form-1 has not been modernized to the same standard. Patients who need the general authorization are stuck with a less accessible experience.

### ⚠️ AMBIGUITIES

- **No cross-reference between forms**: Form-1 does not mention that a separate patient-access form (form-3/VD087) exists. A patient seeking their own records who encounters this form first would have no indication they should use a different document — and might complete the wrong form entirely.
- **Witness line ambiguity**: The witness signature line is present but the form does not clarify whether a witness is required or optional. The only footnote states the patient's own signature "must be obtained unless the patient is an unemancipated minor under the age of 18 or is otherwise incapable of signing" — it does not address whether the witness line is mandatory.
- **Submission method unspecified**: Neither form-1 nor its instructions (form-2) explain how or where to submit the completed form. There is no mailing address, fax number, email address, or portal URL for submission.

### ❌ ERRORS

- **Checkbox rendering as "£" symbols**: All checkboxes display as the pound/currency symbol "£" in text extraction (e.g., `£ Regular Mail`). This indicates the checkboxes are custom-font glyphs rather than standard PDF form controls or Unicode checkbox characters. While this doesn't affect the printed appearance, it makes the form unusable for assistive technology and text-based processing.

### ✨ BRIGHT SPOTS

- **Companion instruction documents**: Northwell provides separate, detailed instruction sheets (form-2 for this form, form-4 for the patient access form) with annotated examples showing exactly how to complete each section. This is uncommon and genuinely helpful for patients.
- **Comprehensive delivery format options**: Offering regular mail, facility pickup, secure email, unsecure email (with explicit risk acknowledgment), fax, USB flash drive, and CD covers a wide range of patient preferences — more options than most providers offer.
- **Two-form architecture**: Maintaining separate forms for third-party release (form-1) and patient self-access (form-3) is a structurally sound approach, even though cross-referencing between them is lacking. The patient access form (form-3) explicitly cites HIPAA § 164.524.
