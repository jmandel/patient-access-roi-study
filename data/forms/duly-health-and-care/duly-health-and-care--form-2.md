# Evaluation: Duly Health and Care — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **MediCopy "Authorization for the Release of Medical Records"** — a third-party vendor form that serves as a general-purpose ROI authorization. It is a single-page PDF (231,731 bytes) hosted on MediCopy's own website at `medicopy.net/sites/default/files/2025-01/Duly%20and%20MediCopy%20Authorization.pdf`.

What distinguishes this form from others found for Duly is that it is a **multi-facility form** covering three separate organizations:

- **Duly Health and Care**
- **The South Bend Clinic**
- **Quincy Medical Group**

The patient must select which organization's records are being released from via radio-button-style options at the top: `"Where are the records being released from? o The South Bend Clinic o Quincy Medical Group o Duly Health and Care"`.

Among the four forms found for this organization:
- **form-1.pdf** is Duly's own in-house authorization (processed by ScanSTAT Technologies), with Duly-specific branding, contact information, and detailed compliance notices.
- **form-2.pdf** (this document) and **form-4.pdf** are both MediCopy general authorization forms, but form-2 is multi-facility while form-4 has a generic facility name field with Duly-specific notices added.
- **form-3.pdf** is a specialized MediCopy FMLA/disability intake form.

Form-2 appears to be the version MediCopy hosts on its own site for patients who find it through MediCopy rather than through Duly's website. The January 2025 date in the URL suggests it was recently uploaded or updated.

## 2. FINDABILITY

Per the retrieval notes, this form was discovered via web search for `"Duly Health and Care medical records release form filetype:pdf"`. Unlike forms 1, 3, and 4 — which are hosted on Duly's own Azure blob storage (`dmgwebprodstorage.blob.core.windows.net`) — form-2 is hosted on MediCopy's website (`medicopy.net`). A patient navigating Duly's own medical records request page at `dulyhealthandcare.com/services/medical-records-requests` would likely encounter form-1 first. Form-2 would more likely be found through a general web search or by visiting MediCopy's site directly.

The overall retrieval difficulty was rated **easy**, with all four forms found through straightforward web searches. However, a patient encountering form-2 in isolation might be confused by the multi-facility design — it is not immediately clear why a Duly-specific search would surface a form that also covers The South Bend Clinic and Quincy Medical Group.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: Single-page PDF, 231,731 bytes.
- **Text layer**: Present (`has_text_layer: true`). Text extracts cleanly at 2,401 characters with no garbled content or OCR artifacts.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite the form's checkbox-style layout (rendered as `"o"` characters in the extracted text), there are no interactive PDF form fields. A patient would need to print, hand-fill, and physically submit the form — or use a third-party PDF annotation tool.
- **Fonts**: 19 fonts — a high count for a single-page form, suggesting complex formatting or design elements layered together.
- **Embedded images**: 2 (likely MediCopy logo/branding).
- **Image-only scan**: No — this is a natively digital PDF with real text.

The absence of fillable fields is a significant barrier for digital use. The form is clearly designed for print-and-fill workflows. No online submission option is apparent.

## 4. CONTENT DESIGN

The form uses a conversational, question-based structure with clear section headings:

1. **`"Where are the records being released from?"`** — Three radio-button-style options (South Bend Clinic, Quincy Medical Group, Duly Health and Care), plus fields for Provider Name and Address.
2. **`"Tell us about the patient."`** — Name, DOB, partial SSN (`"SSN: XXX-XX-__"`), Email, Address, City, State, Phone, Fax, Zip.
3. **`"Where are we sending the records?"`** — Recipient name, email, address, city, state, phone, fax, zip.
4. **`"What would you like released? Check all that apply."`** — 11 checkbox options: All Records, Office/Clinic Notes, Operative Reports, Images (X-Ray, MRI, Etc.), Lab/Pathology Results, Radiology Reports, Immunization Records, Last Two Years of Records, specific date range, `"Substance Abuse Psychological/Psychiatric conditions if any"`, and Other.
5. **Sensitive information exclusion** — `"If you do not want certain portions of your medical records released, please check the categories listed below you would like excluded."` Three options: Substance Abuse, AIDS/HIV/STDs, Psychological/Psychiatric conditions.
6. **`"Purpose of Disclosure: Why are we sending the records?"`** — Five options: Personal Use, Litigation/Legal, Insurance, Continuation of Care, Transfer to New Physician.
7. **`"Delivery Method: How would you like the records sent?"`** — Four options: Email, Fax, Pick up at HIM office (you will be notified when ready), Postage (additional fee applies).
8. **Patient's Signature section** — Authorization paragraph, signature line, relationship to patient, date.

The conversational tone is approachable. However, several content design issues are notable:

- **`"Substance Abuse Psychological/Psychiatric conditions if any"`** appears as a single combined checkbox under "What would you like released?" — these are distinct categories of sensitive information that are treated separately elsewhere on the same form (in the exclusion section). The combined phrasing is confusing: does checking it request both categories, either category, or something else?
- **Partial SSN collection** (`"SSN: XXX-XX-__"`) — last 4 digits are still sensitive PII. The form does not explain why SSN is needed.
- **No date range guidance**: The date range field (`"Dates ___ to ___"`) provides no formatting instructions or examples, unlike form-1 which gives explicit examples (`"specific date - 1/25/2013; range of dates - January-July 2014"`).
- **No contact information for questions or submission**: The form provides no phone number, fax number, email address, mailing address, or any indication of where to send the completed form. This is a critical omission — a patient completing this form has no way to know what to do with it. Form-4 (also MediCopy) includes `duly@mrocorp.com | Phone: 866-587-6274 | Fax: 833-734-1445`; form-2 includes none of this.
- **"Postage (additional fee applies)"** is the only mention of fees, and only for the postal delivery method. No fee schedule or contact information is provided for cost inquiries.

## 5. PATIENT-CENTEREDNESS

The form serves as a general-purpose records release authorization and could be used by a patient requesting their own records (selecting "Personal Use" as purpose of disclosure). However, several aspects undermine patient-centeredness:

- **No submission pathway**: The most significant gap. A patient who downloads, prints, and fills out this form is left with no instructions on how to submit it. There is no address, fax number, email, online portal, or any guidance whatsoever. The patient would have to independently figure out how to get this form to MediCopy or Duly.
- **Multi-facility confusion**: A patient seeking Duly records encounters a form that also covers The South Bend Clinic and Quincy Medical Group. This may cause confusion about whether they have the right form, especially if they found it via web search.
- **No explanation of MediCopy's role**: The authorization paragraph begins `"I hereby authorize MediCopy and its affiliates to release or disclose..."` but nowhere does the form explain who MediCopy is, what their relationship to Duly is, or why the patient is authorizing a third party rather than their healthcare provider directly.
- **No process description**: No indication of processing time, how the patient will be notified, or what happens next after submission.
- **Email delivery option**: The form offers email as a delivery method, which is notable — but provides no information about whether the email will be encrypted or secure, raising potential privacy concerns.
- **Right to refuse**: The authorization paragraph includes `"I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization"` — this is important patient-rights language and is present here (unlike on form-3).

## 6. COMPLIANCE

- **Authorization validity**: 12 months from date of signature — within typical ranges, though notably longer than form-1's 90-day default.
- **Revocation rights**: `"I understand that I may cancel this request with written notification but that it will not affect any information released prior to notification cancellation."` Present but uses "cancel" rather than HIPAA's "revoke" terminology, and does not specify where to send the written cancellation.
- **Right to refuse**: Present: `"I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization."`
- **Re-disclosure warning**: Present: `"I understand that the information used or disclosed may be subject to re-disclosure by the recipient listed above and will no longer be protected by federal regulations."`
- **Sensitive information**: The exclusion checkbox mechanism allows patients to opt out of disclosing substance abuse, AIDS/HIV/STDs, and psychological/psychiatric records. However, form-2 **lacks the 45 CFR § 171.204(a)(2) notice** found on forms 1 and 4, which warns that Duly's EHR system cannot segment sensitive information from other records. This is a meaningful omission — the exclusion checkboxes may give patients a false sense of control if the system cannot actually enforce the segmentation.
- **No witness requirement**: Unlike forms 1 and 4, this form has no witness signature line. Form-1 requires a witness `"unless continuation of care or transfer of care is marked in Section 5, or records are produced to the patient."` Form-4 requires a witness `"unless transfer of care, records produced to patient or patient directive."` Form-2 omits the witness entirely.
- **No representative signature provision**: The form includes `"Relationship to patient"` below the signature line but has no separate field or guidance for when a legal representative signs on behalf of the patient.
- **No minor-specific provisions**: Forms 1 and 4 note that `"For minors ages 12-17, the minor's signature is required for the release of Mental Health Records."` Form-2 has no such notice.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions of any kind.** The form provides no address, fax number, email, phone number, website, or any indication of where or how to submit the completed form. A patient cannot act on this form without independently researching submission options. Form-4 (also a MediCopy form for Duly) includes `duly@mrocorp.com | Phone: 866-587-6274 | Fax: 833-734-1445` — form-2's omission of this information is a meaningful barrier to access.
- **Missing 45 CFR § 171.204(a)(2) sensitive-information system-limitation notice.** Forms 1 and 4 both warn patients that Duly's EHR `"cannot segment (1) Mental Health, (2) HIV/AIDS/STD, (3) Genetic Testing, or (4) Drug/Alcohol Abuse 'sensitive information' from other information in your medical records."` Form-2 omits this notice entirely, yet still presents exclusion checkboxes for sensitive categories. This creates a misleading impression that the patient can granularly control what is disclosed when the underlying system may not support it.

### ⚠️ AMBIGUITIES

- **`"Substance Abuse Psychological/Psychiatric conditions if any"`** appears as a single combined checkbox under "What would you like released?" It is unclear whether this is one category or two improperly combined, and why it is offered as something to *request* in the release section when the same categories appear individually as things to *exclude* in the section immediately below. A patient could simultaneously check this box requesting these records and check the exclusion boxes excluding them.
- **Multi-facility scope creates identity confusion.** The form covers three unrelated organizations (Duly Health and Care, The South Bend Clinic, Quincy Medical Group). There is no explanation of the relationship between these organizations or why they share a form. A patient may question whether they have the correct form for their provider.
- **12-month vs. 90-day authorization validity.** This form's 12-month validity period differs significantly from form-1's 90-day default. A patient who has used form-1 before may not realize this form grants a much longer authorization window, and the form draws no attention to this duration.

### ❌ ERRORS

- **Zero fillable form fields** despite being distributed as a downloadable digital PDF. All checkboxes are rendered as static `"o"` characters rather than interactive form elements. The form cannot be completed digitally without third-party tools.
- **No contact information anywhere on the form.** Unlike form-4 (which includes MediCopy contact details) and form-1 (which includes ScanSTAT contact details), form-2 provides no organizational contact information — no phone, fax, email, or address for either MediCopy or Duly Health and Care.

### ✨ BRIGHT SPOTS

- **Conversational section headings** (`"Tell us about the patient"`, `"Where are we sending the records?"`, `"Why are we sending the records?"`) make the form more approachable than typical bureaucratic authorization forms. The question-and-answer structure provides a natural flow.
- **Sensitive-information exclusion checkboxes** give patients explicit opt-out control over substance abuse, AIDS/HIV/STD, and psychological/psychiatric records, presented clearly with the prompt `"If you do not want certain portions of your medical records released, please check the categories listed below you would like excluded."`
- **Email delivery option** is offered alongside fax, pick-up, and postal mail — providing a modern delivery channel that many provider forms still lack, even if security details are unspecified.
- **Right-to-refuse language is present**, unlike form-3 from the same organization: `"I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization."`
