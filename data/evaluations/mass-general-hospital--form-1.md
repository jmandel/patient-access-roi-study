# Massachusetts General Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is titled **"Authorization for Release of Protected or Privileged Health Information"** and is the current, authoritative ROI form for Massachusetts General Hospital. It is version **MGB00087 (06/24)**, dated June 2024, and is hosted on the Mass General Brigham parent system domain at `massgeneralbrigham.org/content/dam/mgb-global/en/patient-care/patient-and-visitor-information/medical-records/documents/mgh/medical-records-release-mgh-english.pdf`.

This is a **general-purpose authorization form** — it covers both patient-initiated requests and third-party releases, with purpose checkboxes including "Medical Care," "Insurance," "Legal," "Personal," "School," and "Other." It is not specific to patient access under HIPAA's Right of Access.

Three versions of essentially the same form were found for MGH:
- **form-1.pdf** (current, 06/24): 569 KB, 78 fillable fields — hosted on massgeneralbrigham.org
- **form-2.pdf** (older, 11/21): 104 KB, 0 fillable fields — hosted under massgeneral.org/assets/mgh/pdf/imaging/
- **form-3.pdf** (oldest, 12/16): 601 KB, 0 fillable fields — still references "Partners HealthCare System"

Form-1 is clearly the canonical current version, with the other two being superseded predecessors still accessible at legacy URLs.

## 2. FINDABILITY

The form was **easy to find**. Web searches for "Massachusetts General Hospital authorization release health information form PDF" returned direct links immediately. No login, CAPTCHA, or bot-blocking was encountered. The notes describe retrieval difficulty as essentially zero.

However, the form lives on the **parent system domain** (massgeneralbrigham.org) rather than massgeneral.org itself, which could confuse patients who start at the hospital's own website. The URL path is reasonably descriptive (`/patient-care/patient-and-visitor-information/medical-records/documents/mgh/medical-records-release-mgh-english.pdf`), and the filename `medical-records-release-mgh-english.pdf` clearly communicates the document's purpose and that it is English-language.

The persistence of **two older versions** at different massgeneral.org URLs (one under `/imaging/forms/`, another under `/notices/`) is a minor concern — patients navigating the site organically could land on a stale version.

## 3. TECHNICAL ACCESSIBILITY

Form-1 is a **digitally native PDF** with strong technical characteristics:

- **Text layer**: Full extractable text (5,223 characters across 2 pages)
- **Fillable fields**: **78 interactive form fields** — a high count indicating comprehensive field coverage for every input area (patient info, checkboxes, date fields, text areas)
- **File size**: 569 KB for 2 pages — moderately large but acceptable
- **Fonts**: 10 embedded fonts
- **Images**: 0 embedded images — the form is entirely text/vector-based
- **Not a scan**: This is clearly a digital-first document, not a scanned paper form

The 78 fillable fields represent a significant upgrade from the older versions (form-2 and form-3 both have **0 fillable fields**), showing that MGH/MGB has actively invested in making the form electronically completable. The field names list is empty in the metadata (suggesting unnamed fields), but the field count indicates comprehensive coverage.

## 4. CONTENT DESIGN

**Structure and organization**: The form follows a clear **A–E section structure**:
- **A. Patient information** — name, DOB, MRN, address, phone
- **B. Permission to share** — source facility, purpose, destination, delivery method
- **C. Information to be released** — record type checkboxes with date fields
- **D. Sensitive information** — opt-in consent for HIV, genetics, substance use, mental health, domestic violence, sexual assault
- **E. Terms and conditions** — understanding/agreement bullets, signature block

**Length**: 2 pages — appropriate and proportionate for the content.

**Language**: The form uses moderately clear language, though it leans toward institutional/legal phrasing rather than plain language. The instruction "Please print all information clearly in order to process your request in a timely manner" is straightforward. Section E bullet points are written in clear, if formal, prose. The 42 CFR Part 2 language in Section D is necessarily technical but includes the required federal disclosure notice verbatim.

**Layout**: The header provides contact information prominently — mailing address, fax number, phone for questions, and a separate line for radiology images. Section labels (A, B, C, D, E) provide clear visual hierarchy. Record type checkboxes in Section C are organized in two columns.

**Readability concern**: The form requires dates to be specified for **every** record type requested ("MUST specify dates" — emphasis in original). This is stated clearly but could be burdensome for patients who want "all my records."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general authorization form**, not a dedicated patient-access form. However, it accommodates patient requests through the "Personal" purpose checkbox and the option to "Check here if the records are to be mailed to the patient at the above address (section A)." A patient requesting their own records must use the same form as an attorney or insurance company requesting records on a patient's behalf.

**Delivery options**: The form offers **four delivery methods**, which is notably good:
1. "Mass General Brigham Patient Gateway (if available)" — patient portal
2. "Secure Email" — with email address field
3. "Fax (provide fax number)"
4. "Paper Copy via Mail"

**Scope options**: Patients can request specific record types from a list of 11 categories (medical record abstract, clinic visit notes, discharge summary, lab reports, operative reports, pathology reports, radiation reports, radiology reports, photographs, billing records, and "Other"). Dates must be specified for each. There is no "all records" option.

**Sensitive information handling**: Section D provides **granular opt-in consent** for seven categories of sensitive records: HIV results, genetic screening, substance use disorder (42 CFR Part 2), mental health treatment, social worker communications, domestic violence counseling, and sexual assault counseling. Each requires a separate "Yes" checkbox. This is compliant with Massachusetts state law and federal regulations but adds complexity.

**Right of Access language**: The form does **not** reference HIPAA § 164.524 or the patient's Right of Access. Section E states that "This authorization is voluntary" and that treatment/payment will not be affected by refusal to sign, which are standard HIPAA authorization elements — but these are authorization requirements (§ 164.508), not Right of Access provisions.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA.

## 6. COMPLIANCE

**Fees**: The form states "*Copying fees may apply" with an asterisk next to Insurance, Legal, and Other purposes. Notably, "Medical Care" and "Personal" are **not** asterisked, suggesting fees may not apply for patient-initiated personal requests. This is a nuanced approach but is not explicitly clarified.

**Expiration**: "This authorization will automatically expire 6 months from the date signed unless otherwise specified:__________." A 6-month default expiry with an option to specify an alternative is standard and reasonable.

**Revocation**: Patients may "cancel this authorization at any time by submitting a written request to the Department or Office where I originally submitted it." The written-request requirement for revocation is standard.

**No notarization required**: The form requires only a patient signature (or legal representative signature for minors/incompetent patients).

**Submission methods**: The header directs patients to "Mail or Fax Release Form To" with a physical address and fax number. There is no mention of electronic submission (e.g., email the completed form, submit via portal). The form itself can be filled electronically, but must apparently be printed and mailed/faxed.

**Photo ID for pickup**: The "For Internal Use Only" section at the bottom references pickup identification (License, State ID, Passport, Other Photo ID), indicating in-person pickup is an option but not the only option.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No electronic submission pathway**: Despite offering 78 fillable fields for digital completion, the form must be mailed or faxed — there is no option to submit electronically (e.g., via portal upload, email, or e-signature). The header states only "Mail or Fax Release Form To." This undermines the digital-first field design.

### ⚠️ AMBIGUITIES

- **Fee applicability is unclear for patient access**: The asterisk system ("*Copying fees may apply") marks Insurance, Legal, and Other but not Personal or Medical Care. While this *implies* no fees for personal requests, it is never stated affirmatively. Under HIPAA's Right of Access, fees for patient access are limited to a reasonable cost-based fee, and this distinction should be explicit.
- **"Must specify dates" for all record types**: The form requires dates for every checked record category. It's unclear whether a patient can request "all records" or "all records from [date] forward" without checking individual categories. This could function as a barrier for patients seeking comprehensive access.
- **Dual-purpose form ambiguity**: The form serves both patient access and third-party release but does not explain the different rights and processes that apply to each. A patient requesting their own records has different rights (HIPAA § 164.524) than a third party requesting records via authorization (§ 164.508).

### ✨ BRIGHT SPOTS

- **78 fillable fields**: The current version (06/24) has been fully converted to an interactive fillable PDF — a substantial improvement over the older versions (form-2 and form-3) which had zero fillable fields. This shows active investment in digital accessibility.
- **Four delivery method options**: Offering Patient Gateway, secure email, fax, and paper mail gives patients genuine choice in how they receive their records, including two electronic options.
- **Granular sensitive-information consent**: Section D's seven-category opt-in approach for sensitive records (HIV, genetics, substance use, mental health, social work, domestic violence, sexual assault) is thorough and respects both patient autonomy and Massachusetts/federal law requirements.
- **Clear non-coercion language**: Section E explicitly states "My treatment, payment, health plan enrollment, or eligibility for benefits will not be affected if I do not sign this form" — an important patient protection clearly communicated.
- **Version control**: The form carries a clear version identifier (MGB00087 06/24), making it possible to verify currency.
