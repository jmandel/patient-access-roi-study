# Blessing Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3.pdf is an **older, undated version** of the "Authorization for Release of Medical Information" used by Blessing Health System. The footer reads "BCS100/0100spd Revised 8/2015," placing this form over a decade old. It is one of five forms retrieved for Blessing Hospital:

- **form-1.pdf** and **form-2.pdf**: April 2023 English versions (nearly identical; form-1 includes a "Medical Record Number" header line)
- **form-3.pdf** (this document): Older/undated English version, revised 8/2015
- **form-4.pdf**: September 2025 English version — the **current version** linked from the website
- **form-5.pdf**: September 2025 Spanish version — the **current version** linked from the website

This form is a **superseded predecessor** to the current form-4.pdf. It is not currently linked from the Blessing Health website but remains accessible at its old URL. The title lacks the "BHS" branding prefix used in the newer versions (simply "AUTHORIZATION FOR RELEASE OF MEDICAL INFORMATION"). It names specific facilities — Blessing Hospital, Blessing Physician Services, Blessing Walk-In, and Illini Community Hospital — whereas newer versions use open-ended "RELEASE RECORDS FROM" fields, reflecting the system's evolution.

## 2. FINDABILITY

According to retrieval notes, this form was found via web search at the URL `https://blessinghealth.org/sites/default/files/BH_Authorize_Release_Of_Medical_Records.pdf`. It is **not linked from the current Medical Records page**, which now directs to the September 2025 versions. The URL path (`/sites/default/files/`) lacks any date or version identifier, making it impossible to tell from the URL alone that this is outdated. A patient who found this via a search engine could easily mistake it for the current form.

The current forms (form-4 and form-5) are easy to find: the retrieval notes describe them as "directly linked from the Medical Records page under 'For Patients'" at `https://www.blessinghealth.org/medicalrecords`. This older form benefits from none of that discoverability — it is an orphan accessible only through search engine indexing of a stale URL.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 50,108 bytes (50 KB) — compact and appropriate for a 2-page document. Notably smaller than the April 2023 versions (131 KB) and the September 2025 versions (271–333 KB).
- **Page count**: 2 (page 1: authorization form; page 2: completion guidelines)
- **Text layer**: Present (`has_text_layer: true`). Full text is extractable (6,436 characters).
- **Fillable fields**: Zero (`fillable_field_count: 0`). All fields use underscored blank lines (e.g., `"Name of Patient: ________________________________________________________"`). The form must be printed and completed by hand.
- **Fonts**: 6 embedded fonts.
- **Images**: 2 embedded images (likely the Blessing logo and/or decorative elements).
- **Scan status**: Not an image-only scan (`is_image_only_scan: false`); this was digitally authored.

The form is a **flat, print-oriented PDF** with no interactive elements. It was designed digitally (not scanned), so text is searchable, but there is no accommodation for on-screen completion. Delivery options on the form itself say `"(Circle) Email Fax Mail Pick-up"` — the word "Circle" reveals this was designed for pen-and-paper use.

## 4. CONTENT DESIGN

**Structure and layout**: The form uses a two-column layout for the FROM/TO sections and divides record types into two categories: "HOSPITAL SETTING" and "OFFICE SETTING." This is a distinctive organizational choice not found in the newer versions, which use a single merged list of record types. The Hospital Setting section lists 16 checkbox items; the Office Setting section lists 8 items. Page 2 provides a field-by-field guide ("GUIDELINES FOR COMPLETING 'AUTHORIZATION FOR RELEASE OF MEDICAL INFORMATION' FORM") explaining each field in plain terms.

**Clarity**: The legal paragraphs are dense but largely standard HIPAA authorization language. The sensitive-information paragraph specifically cites three Illinois and federal statutes: "Federal regulations governing Confidentiality of Alcohol and Drug Abuse Patients Records, 42 CFR Part 2, the Illinois AIDS Confidentiality Act, or the Mental Health and Developmental Disabilities Confidentiality Act." Notably, the form instructs patients that "A request in writing must be made to exclude the above from the disclosed information," placing the burden on the patient to opt *out* of sensitive-information disclosure rather than opt *in* — the reverse of what the newer versions do (which require explicit opt-in checkboxes for sensitive categories).

**Length**: At 2 pages, the form is reasonably concise. The inclusion of a full page of completion guidelines is helpful.

**Readability**: The extracted text suggests a mix of standard body text and form field labels. Instructions like `"(circle) yes no"` and `"(Circle) Email Fax Mail Pick-up"` are straightforward. However, the legal paragraphs run long without paragraph breaks.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose authorization form** used for both patient access and third-party release. The purpose section includes "My personal records" as a checkbox option alongside "Sharing with other healthcare providers" and an open-ended "Other" option. This is adequate but does not differentiate the patient-access workflow from third-party disclosure.

**Scope options**: Patients can specify:
- Dates of service/treatment (with a blank for date range)
- Specific record types via checkboxes, split by Hospital Setting and Office Setting
- An "Entire Record for dates listed" option in the Hospital Setting section
- An "Entire Record for dates of service" option in the Office Setting section
- A freeform "Other (please specify)" line in both sections

This granularity is above average. The Hospital/Office split may confuse patients who don't know which setting their care fell under, but it also demonstrates specificity.

**Delivery options**: The header includes `"(Circle) Email Fax Mail Pick-up"`, offering four delivery methods including email. However, the disclaimer later states: "Electronic images/records (ie Radiology) on CD/USB media are not encrypted or password-protected and are the sole responsibility of the recipient." The form does not mention secure email, patient portal delivery, or EHI/bulk data export.

**Right of Access language**: The form does not explicitly cite HIPAA § 164.524 or use the phrase "right of access." It does state: "I understand that I have the right to inspect and copy the information that is to be disclosed" and that "authorizing the use or disclosure of the information identified above is voluntary."

**Expiration**: "This Authorization expires on: __________________________________. If I fail to specify an expiration date, this authorization will expire six months from date of signature." The 6-month default is standard.

## 6. COMPLIANCE

**Witness requirement**: The form includes a `"Witness"` signature line with a date field. This is a notable burden not present in the current September 2025 version (form-4.pdf), which removed the witness requirement. For a patient access request, requiring a witness is an unnecessary barrier — HIPAA does not mandate witness signatures for patient access authorizations.

**Sensitive information opt-out model**: The form states: "I understand that the information in my health record may include information relating to sexually transmitted disease, genetic testing, acquired immunodeficiency syndrome (AIDS), or human immunodeficiency virus (HIV)... A request in writing must be made to exclude the above from the disclosed information." This **opt-out** approach to sensitive records is the inverse of the newer form's opt-in model (which has explicit checkboxes for "Mental Health Records," "Genetic Testing," "STD/AIDS/HIV," and "Drugs/Alcohol"). The opt-out approach could result in unintended disclosure of sensitive information if the patient doesn't notice or understand this paragraph.

**Photo ID**: "I understand photo identification may be required to obtain medical records." This is stated as a possibility, not an absolute requirement — reasonable.

**Treatment not conditioned**: "Healthcare treatment, payment, enrollment in the health plan, or eligibility for benefits is not conditioned on signing the authorization." This is proper HIPAA-compliant language.

**No fee disclosure**: The form itself does not mention fees. The notes reference a "$6.50 flat fee" mentioned on the website, but this is not stated on the form.

**Minor provisions**: The form includes a signature line for "Minor Age 12 to 17" and text explaining Illinois-specific rules for minor consent: "This Authorization must be signed by the patient or guardian if patient is less than 12. In keeping with the Mental Health & Services Disability Confidentiality Act, if the patient is a minor and recipient is 12 years of age or older, then this authorization must be signed by the patient."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature requirement**: The form requires a witness signature — a barrier not required by HIPAA and one that the organization itself later removed in the September 2025 version (form-4.pdf). A patient attempting to request their own records from home would need to find a witness before submitting, which is an unnecessary impediment to exercising their right of access.

- **Sensitive information opt-out model**: The statement "A request in writing must be made to exclude the above from the disclosed information" means sensitive records (STD, HIV, mental health, substance abuse) are included by default unless the patient proactively writes to exclude them. This is the reverse of the newer form's opt-in approach and creates risk of unintended disclosure of highly sensitive information.

### ⚠️ AMBIGUITIES

- **Outdated form still publicly accessible**: This 2015-vintage form remains downloadable at its old URL with no indication it has been superseded. A patient finding it via search engine has no way to know the current version (form-4.pdf, dated 9/2025) exists. Would Blessing HIM accept this version if submitted?

- **Hospital vs. Office Setting confusion**: Splitting record types into "HOSPITAL SETTING" and "OFFICE SETTING" may confuse patients who don't know which category their care falls under (e.g., was an outpatient procedure in the "hospital" or "office" setting?).

- **Named facilities only**: The FROM section is limited to four named entities (Blessing Hospital, Blessing Physician Services, Blessing Walk-In, Illini Community Hospital) with no write-in option, unlike the newer versions which have open FROM fields. Patients seen at other Blessing-affiliated locations would not know how to complete this field.

### ❌ ERRORS

- **Statutory name error**: The signature-area text refers to "the Mental Health & Services Disability Confidentiality Act," which appears to be a garbled version of the Illinois "Mental Health and Developmental Disabilities Confidentiality Act" (740 ILCS 110). The same form correctly names this act in the body text above, creating an internal inconsistency.

### ✨ BRIGHT SPOTS

- **Page 2 completion guidelines**: The full-page "GUIDELINES FOR COMPLETING" section provides field-by-field instructions in plain language (e.g., "FROM: Please select which Blessing entity records are being requested from"; "Expiration: Any date can be written here, if left blank, 6 months may apply"). This is a genuinely helpful feature that reduces patient confusion and is carried forward into the newer versions.
