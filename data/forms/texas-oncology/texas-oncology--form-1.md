# Evaluation: Texas Oncology — form-1.pdf (English Authorization)

## 1. DOCUMENT IDENTIFICATION

This is **"Authorization to Disclose Protected Health Information"** — Texas Oncology's English-language authorization for disclosure of protected health information. It is a 3-page PDF (721,971 bytes / 705 KB), revised 09/19/2024. A companion Spanish translation exists as form-2.pdf ("Autorización Para Divulgar Información de Salud Protegida"), which is structurally identical but smaller (305 KB), likely due to fewer embedded fonts (8 vs. 20) and possibly different branding assets.

This is a **general-purpose disclosure authorization**, not a patient-specific Right of Access request form. It covers nine disclosure reasons: Treatment/Continuing Medical Care, Personal Use, Billing/Claims/Insurance, Health Oversight Activities, Legal Purposes, Disability Determination, School, Employment, and Other. A patient requesting their own records would need to select "Personal Use" among these options.

The three pages are: (1) the authorization form itself with patient demographics, disclosure fields, record type checkboxes, and signature; (2) a supplementary legal information page explaining HIPAA and Texas law applicability; and (3) a "Prohibited Use Attestation" page related to reproductive health care protections under 45 CFR 164.502(a)(5)(iii), relevant only to certain third-party requests (health oversight, judicial proceedings, law enforcement, disclosures about decedents).

The extracted text begins with `{Branding }` — a placeholder tag suggesting a logo or header image that did not render in text extraction.

## 2. FINDABILITY

Per the retrieval notes, the form is available from Texas Oncology's dedicated Medical Records page at `texasoncology.com/medical-records`, reachable in approximately one click from footer navigation. The page provides a clear 3-step process: (1) download the form, (2) complete it, (3) submit by fax or mail. Both English and Spanish versions are offered as direct PDF downloads.

The source URL is descriptive and self-explanatory:
`edge.sitecorecloud.io/.../TXO-Protected-Health-Information-Disclosure-Authorization-Form-English.pdf`

Three older PDF URLs found via web search returned 404 errors due to a site migration to Sitecore Edge CDN, but the live Medical Records page links work without issue. No login, bot blocking, or captcha was encountered.

The page clearly explains what the form is for and who should use it, which reduces confusion for patients navigating the process.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (8,676 characters). `is_image_only_scan: false`.
- **Fillable fields**: 95 interactive form fields are reported, indicating a thoroughly digitized form. However, `fillable_field_names` is an empty array `[]`, meaning the fields lack semantic names/labels in the PDF metadata — a gap for assistive technology and screen readers.
- **File size**: 721,971 bytes (705 KB) for 3 pages. This is somewhat large for a text-based form with no embedded images (`embedded_image_count: 0`). The 20 embedded fonts likely account for much of the size.
- **Font count**: 20 fonts — considerably more than the Spanish version's 8. This suggests either decorative branding fonts or font subsetting issues.
- **Digital-first design**: This is a natively digital PDF, not a scan. It was designed to be completed electronically (fillable fields) and then printed for submission. The form is functional as a fill-and-print workflow but does not support electronic submission.

## 4. CONTENT DESIGN

**Length**: 3 pages is appropriate for what the form covers. Page 1 is the actionable authorization form; page 2 is supplementary legal information that most patients won't need to read closely; page 3 is the Prohibited Use Attestation, which only applies to specific third-party requests.

**Clarity**: The form opens with a plain-language instruction: "Please read this entire form before signing and complete all the sections that apply to your decisions relating to the disclosure of protected health information." It also prominently states upfront that "Individuals cannot be denied treatment based on a failure to sign this authorization form, and a refusal to sign this form will not affect the payment, enrollment, or eligibility for benefits." This is good patient-facing language.

**Organization**: The form follows a logical flow: patient identification → reason for disclosure → who is authorized to disclose → who can receive → delivery method → what information → time period → revocation rights → signature. Sections are labeled in all-caps headers (e.g., "REASON FOR DISCLOSURE," "WHAT INFORMATION CAN BE DISCLOSED?"), providing clear visual hierarchy.

**Record type granularity**: The form provides 16 checkboxes for specific record types: All Health Information, Physician's Orders, Progress Notes, Pathology Reports, History/Physical Exam, Patient Allergies, Discharge Summary, Billing Information, Past/Present Medications, Operation Reports, Diagnostic Test Reports, Radiology Reports, Radiology Images, Lab Results, Consultation Reports, EKG/Cardiology Reports — plus an "Other" option. This gives patients meaningful control over disclosure scope.

**Sensitive information handling**: Four categories require separate initialing: Mental Health Records (excluding psychotherapy notes), Drug/Alcohol/Substance Abuse Records, Genetic Information (including Genetic Test Results), and HIV/AIDS Test Results/Treatment. This is consistent with both HIPAA requirements and Texas-specific privacy protections.

**Grammar note**: Page 2 contains a minor grammatical issue: "There may charge a retrieval/processing fee" — missing the word "be" (should read "There may be a charge" or "They may charge").

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general disclosure authorization, not a patient-specific access request form. A patient wanting their own records must select "Personal Use" from nine disclosure reasons and then navigate fields designed for third-party disclosures. Specifically, the patient must fill in both "I AUTHORIZE THE FOLLOWING TO DISCLOSE THE INDIVIDUAL'S PROTECTED HEALTH INFORMATION" (naming Texas Oncology) and "WHO CAN RECEIVE AND USE THE HEALTH INFORMATION?" (naming themselves) — a confusing exercise when the requester and recipient are the same person.

**Right of Access acknowledgment**: Page 2 includes a notable passage: "This form is not required for the permissible disclosure of an individual's protected health information to the individual or the individual's legally authorized representative. (45 C.F.R. §§ 164.502(a)(1)(i), 164.524; Tex. Health & Safety Code § 181.102)." This is legally accurate — patients don't technically need an authorization form to access their own records — but this critical information is buried in the supplementary legal text on page 2 rather than prominently communicated on page 1.

**Scope options**: Patients can specify a date of service range and choose from 16 specific record categories or select "All Health Information." This is a reasonable level of granularity.

**Format/delivery options**: Three delivery methods are offered: Email, US Postal Service, and "Print for pick-up." Email availability is a positive. However, there is no mention of patient portal access, electronic health information (EHI) export, FHIR-based access, or any other digital-first delivery mechanism.

**Submission method**: Per the Medical Records page, submission is by fax or mail only. No electronic/online submission option is mentioned — the form must be printed, signed, and faxed or mailed despite being fillable.

**Expiration**: The authorization is "valid until the earlier of the occurrence of the death of the individual; the individual reaching the age of majority; or permission is withdrawn; or the following specific date (optional)." This is reasonable and not artificially restrictive.

**Fees**: Page 2 states "There may charge a retrieval/processing fee and for copies of medical records under certain circumstances" (citing Tex. Health & Safety Code § 241.154). No specific amounts are disclosed. For patient-access requests under HIPAA § 164.524, fees are limited to a reasonable, cost-based fee — but the form does not distinguish patient-access fees from third-party disclosure fees, leaving patients uncertain about costs.

## 6. COMPLIANCE

**Legal framework**: The form explicitly references both HIPAA (45 CFR §§ 164.501, 164.502, 164.506, 164.508, 164.524) and the Texas Medical Privacy Act (Texas Health & Safety Code, Chapter 181). Definitions for "treatment," "healthcare operations," "psychotherapy notes," and "protected health information" are provided by reference to HIPAA (45 CFR 164.501). "Legally authorized representative" is defined by reference to Texas Occupations Code § 151.002(6), Texas Health & Safety Code §§ 166.164, 241.151, and Texas Probate Code § 3(aa).

**Reproductive health protections**: Page 3 implements the federal reproductive health privacy rule (45 CFR 164.502(a)(5)(iii)), requiring third-party requestors to attest that health information will not be used for prohibited purposes related to reproductive health care. This is current with the 2024 federal rulemaking and demonstrates up-to-date compliance.

**No notarization required**: Only a signature (or authorized representative signature) is needed.

**No in-person submission required**: Fax and mail are both accepted.

**Re-disclosure warning**: Included: "I understand that information disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and may no longer be protected by federal or state privacy laws."

**Right to revoke**: Clearly stated with instructions to provide "written notice stating my intent to revoke this authorization to the person or organization named under 'WHO CAN RECEIVE AND USE THE HEALTH INFORMATION.'"

**Treatment not conditioned on signing**: Prominently stated at the top of page 1.

**Representative authorization**: The form provides for a legally authorized representative to sign, with checkboxes for Parent of minor, Guardian, or Other — with space to specify the relationship.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Bilingual availability**: Offering a fully translated Spanish version as a parallel download is commendable for a Texas-based practice. Both forms are structurally identical, recently revised (09/19/2024), and available without additional navigation.
- **Reproductive health protections**: The dedicated Prohibited Use Attestation page (page 3) implementing 45 CFR 164.502(a)(5)(iii) is current with the 2024 federal reproductive privacy rule. Texas Oncology states it "will obtain a written and signed attestation from any third party requesting the information" for applicable purposes — an affirmative organizational commitment, not just a form checkbox.
- **Treatment-not-conditioned disclosure**: The statement that signing is not a condition of treatment is placed at the very top of the form, before any fields — not buried in fine print. This is better positioning than many ROI forms.
- **Email delivery option**: Including email as a delivery method alongside postal mail and pick-up is a practical nod to electronic access, even if the submission process itself remains analog.

### ⚠️ AMBIGUITIES

- **"This form is not required" buried on page 2**: The legally correct statement that "This form is not required for the permissible disclosure of an individual's protected health information to the individual" is on page 2 in supplementary legal text. A patient could reasonably believe they *must* complete this 3-page authorization to get their own records, when legally they may not need to. This should be surfaced on page 1.
- **Fee language is vague and contains a grammatical error**: "There may charge a retrieval/processing fee and for copies of medical records under certain circumstances" fails to specify amounts, when fees apply, or how patient-access fees differ from third-party disclosure fees. The sentence is also grammatically broken (missing "be").
- **Fillable fields lack semantic names**: All 95 interactive fields have no names in the PDF metadata (`fillable_field_names: []`), which impairs accessibility for assistive technology. Without field labels, a screen reader user would encounter 95 unlabeled input fields.

### 🚩 RED FLAGS

- **No electronic submission pathway**: Despite investing in a 95-field fillable PDF and offering email as a records delivery method, the form must still be printed, signed, and submitted by fax or mail. There is no online submission, e-signature, or portal upload option. This creates friction, particularly for patients without access to a printer or fax machine.

### ❌ ERRORS

- **Grammatical error on page 2**: "There may charge a retrieval/processing fee and for copies of medical records under certain circumstances" — should read "There may be a retrieval/processing fee charged for copies of medical records under certain circumstances" or similar. This appears in the official legal supplementary text.
- **`{Branding }` placeholder visible in text extraction**: The form's text layer begins with `{Branding }`, suggesting a template placeholder or variable that was not resolved into an actual logo or header. While this may render correctly in a visual PDF viewer (as an image overlay), it appears as raw placeholder text in any text-based extraction, which could confuse assistive technology or automated processing.
