# Evaluation: Duly Health and Care — form-4.pdf

## 1. DOCUMENT IDENTIFICATION

Form-4 is titled **"Authorization for the Release of Medical Records"** and is a generic MediCopy authorization template. Unlike form-2 (which lists Duly Health and Care, The South Bend Clinic, and Quincy Medical Group as pre-printed facility options), form-4 leaves the facility name blank — the "Where are the records being released from?" section has open fields for "Facility Name," "Provider Name(s)," "Address," "City," and "State." This makes it a universal MediCopy template rather than a Duly-specific form.

Form-4 is hosted on Duly's own Azure blob storage (`dmgwebprodstorage.blob.core.windows.net`) at path `Duly-MRO-MediCopy-Authorization.pdf`, indicating Duly deliberately publishes this alongside their other forms. Its content is nearly identical to form-2, with two notable differences: (1) form-4 adds a sensitive-information notice referencing 45 CFR § 171.204(a)(2) about Duly's inability to segment sensitive data, and (2) form-4 includes a witness signature line with a conditional requirement note, neither of which appear on form-2.

In the context of Duly's four forms, form-1 is Duly's own branded authorization (processed by ScanSTAT Technologies), forms 2 and 4 are MediCopy authorization variants, and form-3 is a MediCopy FMLA/Disability intake form. For a patient requesting their own records, form-4 functions as a secondary/alternative pathway through Duly's MediCopy vendor relationship.

## 2. FINDABILITY

Per the retrieval notes, this form was discovered via web search for `"Duly Health and Care medical records release form filetype:pdf"`. It is hosted on Duly's Azure blob storage at a URL containing `Duly-MRO-MediCopy-Authorization.pdf` — the filename is reasonably descriptive (includes "Duly," "MRO," "MediCopy," and "Authorization"). However, the URL uses a legacy path structure (`dmgwebprodstorage.blob.core.windows.net/dmgprodweb/files/%40assetBasePath/files/`) with an encoded `@assetBasePath` component that suggests a CMS templating artifact rather than a clean, user-facing URL.

The form is not directly linked from the main medical records request page at `dulyhealthandcare.com/services/medical-records-requests` in any obvious way — it was found through a direct PDF search, not through site navigation. This means a patient browsing Duly's website would be unlikely to stumble upon this specific form. Overall findability is moderate: discoverable via search but not prominently surfaced.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The PDF has extractable text (2,765 characters), enabling copy/paste and screen reader access.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite having clear form fields for name, DOB, SSN, address, etc., none are interactive PDF form fields. A patient must print and handwrite, or use PDF annotation tools.
- **Page count**: 1 page. Concise and appropriately sized for the content.
- **File size**: 239,671 bytes (~234 KB) for a single page. This is moderately large, likely due to the 2 embedded images (MediCopy branding/logos) and 22 fonts. Not a practical barrier, but heavier than necessary.
- **Image-only scan**: No. This is a digitally-created document, not a scan.
- **Digital-first design**: Mixed. The document was clearly created digitally (not scanned), but the lack of fillable form fields means it doesn't function as a true digital form. The checkbox-style options (`o All Records`, `o Office/Clinic Notes`, etc.) are rendered as static text characters rather than interactive checkboxes.

## 4. CONTENT DESIGN

The form uses a conversational, question-based structure that is more approachable than typical medical-legal forms:

- **"Where are the records being released from?"** — natural language section headers
- **"Tell us about the patient."** — friendly phrasing
- **"What would you like released? Check all that apply."** — clear instructions
- **"Purpose of Disclosure: Why are we sending the records?"** — helpful restatement

The record type checklist includes 11 options: All Records, Office/Clinic Notes, Operative Reports, Images (X-Ray, MRI, Etc.), Lab/Pathology Results, Radiology Reports, Immunization Records, Substance Abuse Psychiatric Conditions, Last Two Years of Records, date range fields, and an "Other" freetext field. This is a reasonable range.

The sensitive information notice is dense but substantive: *"Duly's electronic medical record system cannot segment (1) Mental Health, (2) HIV/AIDS/STD, (3) Genetic Testing or (4) Drug/Alcohol Abuse 'sensitive information' from other information in your medical records."* This is an important disclosure, though it uses technical language ("segment," "45 CFR § 171.204(a)(2)") that most patients will not understand.

The legal/signature section is a single dense paragraph covering authorization, validity period (12 months), revocation rights, re-disclosure warning, and right to refuse. While legally thorough, it lacks the bullet-point formatting that form-1 uses for the same content, making it harder to parse.

Layout is compact — all content fits on one page — but the absence of visual section dividers, inconsistent spacing (evident from the extracted text), and the mix of section-header questions with checkboxes creates a somewhat flat visual hierarchy.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is framed as a general release ("Authorization for the Release of Medical Records") without distinguishing between patient-directed access and third-party disclosure. The "Purpose of Disclosure" options include "Personal Use," which would cover patient access requests, but the authorization language ("I hereby authorize MediCopy and its affiliates to release or disclose to the person(s) or organization listed above") treats all requests identically.

**Scope options**: Good. Patients can select specific record types, specify "Last Two Years" or a custom date range, and add freetext under "Other." However, unlike form-2, form-4 does **not** include the opt-out checkboxes for excluding sensitive categories (Substance Abuse, AIDS/HIV/STDs, Psychological/Psychiatric conditions). Instead, it has a blanket notice that sensitive information *will* be released. This is a step backward from form-2's approach.

**Delivery methods**: Four options are offered — Email, Fax, Pick up at HIM office ("you will be notified when ready"), and Postage ("additional fee applies"). Email delivery is a positive feature. However, there is no mention of MyChart or patient portal delivery, which form-1 does offer. The postage fee note is vague — no amount is specified.

**SSN collection**: The form requests the last two digits of the patient's SSN (`SSN: XXX-XX-__`), which is unusual and potentially concerning for patient privacy. While only partial, collecting any SSN digits may deter some patients.

**Right of Access language**: The form does not reference HIPAA § 164.524 or explicitly state the patient's right to access their own records. There is no mention of EHI export or bulk data access.

**Contact information**: The form footer provides `duly@mrocorp.com | Phone: 866-587-6274 | Fax: 833-734-1445`, giving patients multiple ways to submit or inquire.

## 6. COMPLIANCE

**Authorization validity**: 12 months from signature date. This is a reasonable duration.

**Witness requirement**: *"Witness required unless transfer of care, records produced to patient or patient directive."* This means a witness signature IS required for most disclosure purposes (personal use, litigation, insurance). Requiring a witness for routine records requests is an uncommon and potentially burdensome requirement.

**Revocation**: The form states patients "may cancel this request with written notification but that it will not affect any information released prior to notification cancellation." This is standard.

**Re-disclosure warning**: Present: *"the information used or disclosed may be subject to re-disclosure by the recipient listed above and will no longer be protected by federal regulations."*

**Right to refuse**: Stated: *"I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization."*

**Fee disclosure**: The only fee mention is "Postage (additional fee applies)" — no specific amounts. This is vague.

**Sensitive information handling**: Unlike form-2 which lets patients exclude sensitive categories, form-4 provides no exclusion mechanism. The notice effectively states that all sensitive information will be released with no patient control, other than not signing the form at all.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness requirement for routine requests**: The note "Witness required unless transfer of care, records produced to patient or patient directive" means a patient requesting records for "Personal Use," "Insurance," or "Litigation/Legal" must obtain a witness signature. This is an unusual burden not required by HIPAA and could discourage or delay legitimate requests.
- **No opt-out for sensitive information**: Unlike form-2 (which allows patients to exclude Substance Abuse, AIDS/HIV/STDs, and Psychological/Psychiatric records), form-4 provides a blanket notice that all sensitive information "will be released" with no mechanism for the patient to exclude specific categories. This removes patient control over highly sensitive data.

### ⚠️ AMBIGUITIES

- **Relationship between form-2 and form-4**: Both are MediCopy authorization forms hosted by Duly, but they differ in important ways (sensitive info opt-outs, witness requirements, facility pre-selection). A patient would have no way to know which form to use or that both exist.
- **"Substance Abuse Psychiatric Conditions" as a single checkbox**: This record type option conflates two distinct categories (substance abuse records and psychiatric records) into a single line item, making it unclear whether selecting this requests both or either.
- **Postage fee amount**: "Additional fee applies" without specifying the amount leaves patients unable to make informed decisions about delivery method.

### ❌ ERRORS

- **Regulatory citation**: The form cites "45 CFR § 171.204(a)(2)" in the sensitive information notice. This citation refers to the ONC Information Blocking exceptions (Infeasibility Exception), not HIPAA privacy rules. While technically relevant to why the system cannot segment data, citing an information blocking regulation on a patient-facing authorization form is confusing and arguably misapplied — a patient would expect HIPAA references here.

### ✨ BRIGHT SPOTS

- **Plain-language section headers**: The conversational framing ("Tell us about the patient," "Where are we sending the records?," "Why are we sending the records?") is noticeably more patient-friendly than traditional legal form headers.
- **Multiple contact channels**: Footer provides email, phone, and fax for the MediCopy/MRO service, giving patients clear options to reach out with questions.
