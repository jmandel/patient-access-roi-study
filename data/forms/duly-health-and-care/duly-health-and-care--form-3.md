# Evaluation: Duly Health and Care — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **MediCopy Disability/FMLA Intake Form and Authorization** — a specialized, single-purpose form for requesting completion and release of disability or Family and Medical Leave Act (FMLA) paperwork. It is **not** a general-purpose Release of Information (ROI) authorization form.

The form is produced by MediCopy (a third-party health information management vendor) and hosted on Duly Health and Care's Azure blob storage at `dmgwebprodstorage.blob.core.windows.net`. It sits alongside three other forms found for this organization:

- **form-1.pdf**: Duly's own "Authorization for Release of Health Information" — the primary ROI form, processed by ScanSTAT Technologies.
- **form-2.pdf**: A MediCopy "Authorization for the Release of Medical Records" covering Duly and two other organizations (South Bend Clinic, Quincy Medical Group).
- **form-4.pdf**: Another MediCopy general authorization form with Duly-specific sensitive-information notices.

Form-3 is the narrowest in scope of the four — it only applies to disability/FMLA scenarios and would not be used by a patient simply requesting copies of their own medical records. Its presence among Duly's downloadable forms reflects the organization's use of MediCopy as a vendor for specialized record-handling workflows.

## 2. FINDABILITY

Per the retrieval notes, this form was discovered via web search for `"Duly Health and Care medical records release form filetype:pdf"` and is hosted on Duly's Azure blob storage. The URL (`dmgwebprodstorage.blob.core.windows.net/dmgprodweb/files/%40assetBasePath/files/Duly-MediCopy-MRO-Intake-Form-Authorization.pdf`) is not human-readable and uses encoded characters (`%40assetBasePath`), suggesting it is linked from a content management system rather than being directly navigable.

Overall retrieval difficulty was rated **easy** in the notes, though finding this specific form would require either a targeted web search or navigation from Duly's medical records request page. A patient seeking standard record access would likely encounter form-1 or form-4 first; form-3 would only be relevant if a patient specifically needed FMLA/disability paperwork completed. It is unclear whether this form is prominently linked from Duly's patient-facing website or buried in their document repository.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: Single-page PDF, 81,363 bytes.
- **Text layer**: Present (`has_text_layer: true`), so text is selectable and searchable. Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite being a PDF with form-like structure, there are no interactive form fields. A patient would need to print the form, hand-fill it, and submit it physically — or annotate the PDF with a third-party tool.
- **Fonts**: Only 3 fonts used — simple typographic structure.
- **Embedded images**: 3 (likely MediCopy logo and decorative elements).
- **Text extraction quality**: Good. The full text of 1,768 characters extracts cleanly with no garbled or OCR-error text.
- **Print instruction**: The form includes `"Time off is: (Circle one)"`, which explicitly assumes the form will be printed and completed by hand, reinforcing that digital completion was not considered in the design.

The lack of fillable fields is a significant accessibility gap. The form cannot be completed digitally without workarounds.

## 4. CONTENT DESIGN

The form is brief and uses conversational section headings:

- `"Where is the form/records coming from?"` — Facility name field.
- `"Tell us about the patient."` — Name, DOB, partial SSN, email, address, phone, fax.
- `"Where are we sending the completed form/records?"` — Recipient information.
- `"What would you like released?"` — Free-text field.
- `"Why are we sending the completed form/records?"` — Purpose of disclosure (free-text).

The conversational tone (`"Tell us about the patient"`, `"Where are we sending..."`) is more approachable than typical legal-style forms. However, the form's layout has some issues:

- **SSN collection**: The form asks for `"SSN: XXX-XX-__"` (last 4 digits). While partial SSN is less risky than full, it is still sensitive PII and its necessity for an FMLA form is questionable.
- **Sparse structure for record specification**: The `"What would you like released?"` section is a single free-text field with no checkboxes or structured options, unlike forms 2 and 4 which offer detailed record-type checkboxes (office notes, operative reports, lab results, etc.). For a disability/FMLA form this may be intentional (since the request is typically for the physician to complete specific employer paperwork), but it gives the patient little guidance about what to write.
- **FMLA-specific fields**: Includes `"Time off is: (Circle one) Intermittent or Continuous"`, `"Time off start date"`, and `"Estimated return to work date"` — appropriate for the form's purpose but presented without instructions or explanations.
- **Exclusion checkboxes**: Three checkboxes allow the patient to exclude categories from disclosure: `"Substance Abuse, if any"`, `"AIDS/HIV/STDs, if any"`, and `"Psychological/Psychiatric conditions, if any"`. This is a reasonable opt-out mechanism.
- **No contact information**: Unlike form-1 (which includes ScanSTAT's phone, fax, and email) and form-4 (which includes `duly@mrocorp.com`, phone, and fax), form-3 provides no contact information for questions or submission. A patient would not know where to send the completed form.

The authorization paragraph at the bottom is a dense block of legal text covering authorization scope, 12-month validity, cancellation rights, and re-disclosure risk. At roughly 100 words, it is shorter than form-1's authorization section but still presented as a single undifferentiated paragraph.

## 5. PATIENT-CENTEREDNESS

This form is **not designed for a patient requesting their own records** — it serves a specific workflow where a patient needs their provider to complete disability or FMLA paperwork on their behalf, and authorizes MediCopy to handle the process.

From a patient perspective, several issues stand out:

- **No submission instructions**: The form does not state where or how to submit it. No mailing address, fax number, email, or online portal is mentioned. A patient completing this form would have no idea what to do with it next.
- **No fee disclosure**: The form does not mention whether fees apply for this service. Form-1 notes `"Charges may apply. Please contact us for details"`, but form-3 is silent on costs.
- **No explanation of the process**: A patient encountering this form would not understand the workflow — who is MediCopy? What happens after submission? How long will it take? None of this is explained.
- **Treating physician field**: The form asks for `"Treating physician's name"` but does not clarify whether this should be the physician the patient sees at Duly or the physician who needs to receive completed paperwork.
- **Authorization scope**: The authorization text states `"I hereby authorize MediCopy and its affiliates to release or disclose to the person(s) or organization listed above, all medical records requested, including any specially protected records..."` — this is broad authorization language for what is nominally a disability/FMLA intake form. The scope of "all medical records requested" may exceed what a patient expects when they simply want FMLA paperwork completed.

## 6. COMPLIANCE

- **Authorization validity**: 12 months from date of signature — longer than form-1's 90-day default, and within typical ranges.
- **Revocation rights**: Mentioned: `"I understand that I may cancel this request with written notification but that it will not affect any information released prior to notification cancellation."` Uses "cancel" rather than "revoke," which is less precise but functionally equivalent.
- **Right to refuse**: Not explicitly stated on this form. Form-2 and form-4 include `"I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization"` — this standard HIPAA-required language is absent from form-3.
- **Re-disclosure warning**: Present: `"I understand that the information used or disclosed may be subject to re-disclosure by the recipient on this request and will no longer be protected by federal regulations."`
- **Sensitive information handling**: The exclusion checkboxes for substance abuse, HIV/AIDS/STDs, and psychiatric conditions provide an opt-out mechanism, but form-3 lacks the 45 CFR § 171.204(a)(2) notice found on forms 1 and 4 about system limitations in segmenting sensitive records.
- **No witness or representative signature field context**: The form includes `"Relationship to patient"` below the signature line but does not explain when a representative may sign or what documentation is needed.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions whatsoever.** The form provides no address, fax number, email, phone number, or any indication of how or where to submit the completed form. This is a meaningful barrier — a patient cannot act on this form without independently researching where to send it.
- **Missing right-to-refuse language.** HIPAA requires that authorizations inform patients they may refuse to sign and that treatment will not be conditioned on signing (with limited exceptions). Forms 2 and 4 from the same organization include this language; form-3 omits it entirely.

### ⚠️ AMBIGUITIES

- **Broad authorization scope vs. narrow form purpose.** The form title says "Disability/FMLA Intake Form" but the authorization language authorizes release of "all medical records requested, including any specially protected records." A patient may believe they are only authorizing FMLA paperwork completion, when the legal language authorizes much broader disclosure.
- **"Treating physician's name" is ambiguous.** It is unclear whether this refers to the Duly physician whose records are being accessed or the physician/entity that needs the completed paperwork.
- **"What would you like released?" is a free-text field with no guidance.** For a disability/FMLA form, patients may not know what to write — it's unclear whether they should list specific records or describe their disability claim.

### ❌ ERRORS

- **No fillable form fields** despite being distributed as a digital PDF. The `"(Circle one)"` instruction for Intermittent/Continuous confirms the form was designed for print-only use and was not adapted for digital workflows.
- **"Relationship to patient" field appears below the signature line** without a separate representative signature line, creating confusion about whether it applies to the patient's own signature or a representative's.

### ✨ BRIGHT SPOTS

- **Conversational section headings** (`"Tell us about the patient"`, `"Where are we sending the completed form/records?"`) are more approachable than typical bureaucratic form language and could serve as a model for plain-language form design — though the execution is undermined by the missing submission instructions and the dense legal authorization paragraph.
- **Sensitive-information exclusion checkboxes** give patients explicit control over whether substance abuse, HIV/AIDS/STD, and psychiatric records are included in the disclosure, presented as an opt-out rather than an opt-in.
