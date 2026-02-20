# Duke University Hospital — form-4.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **current version** of the Duke Health Enterprise Authorization for Release of Information, form number M3132, **Rev. 3/2025**. It is a single-page, fillable PDF (816 KB) sourced from the official Duke Health forms page under the clinical trials information path. The form is structured in six parts (A through F) covering patient information, recipient, information to be released, purpose, delivery format, and review/approval.

In relation to the other documents found for this organization:

- **form-1.pdf** is the immediately prior revision of the same form (M3132, Rev. 4/2024) — same structure, slightly different layout and field arrangement.
- **form-2.pdf** is a 3-page companion instruction document ("Instructions for Completing the Authorization for Release of Information Form," Rev. 1/22) explaining each section.
- **form-3.pdf** is an image-only scan of a release form from a Duke Outpatient Clinic site (no text layer, no fillable fields) — a separate, inferior artifact.

Form-4 is the **primary, most current authorization form** a patient would use today.

## 2. FINDABILITY

The form was **easy to find**. According to retrieval notes, Duke Health has a well-organized medical records section reachable in approximately two clicks from the homepage (Medical Records → Authorization Forms). The official forms landing page at `dukehealth.org/medical-records/authorization-forms-and-instructions-medical-records` lists all available forms with download links, including English and Spanish versions. A web search for Duke Health authorization forms readily surfaces direct PDF URLs. The retrieval difficulty was rated **"easy"** by the search agent.

The source URL (`/sites/default/files/clinical_trials_information/M3132_English_Duke Health Authorization to Release Information.pdf`) includes the form number and a descriptive filename, though the `clinical_trials_information` path segment is slightly misleading — this is a general ROI form, not specific to clinical trials.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and complete. The full text extracts cleanly (3,661 characters), with all form labels, instructions, and legal text readable.

**Fillable fields**: The form contains **67 interactive form fields**, a substantial increase over the prior revision (form-1 had 45). This is a strong digital-first implementation. However, the `fillable_field_names` array is empty in the metadata, meaning the fields lack descriptive names — this is a minor accessibility gap for screen readers and assistive technology.

**File format**: 816 KB for a single-page PDF is moderately heavy (likely due to 4 embedded images, including the Duke Health branding). The 70 fonts embedded is unusually high for a single-page document and contributes to file bloat.

**Digital-first design**: This is clearly a born-digital document, not a scan. The structured layout, interactive fields, and clean text extraction confirm this. It is designed to be filled on-screen and submitted electronically.

## 4. CONTENT DESIGN

**Length**: Single page. This is impressively compact for the amount of information it covers — patient info, recipient, record types, delivery options, legal authorization, and submission instructions all fit on one page.

**Organization**: The form follows a logical six-part structure (A through F), progressing from patient identification → recipient → what records → why → how to deliver → legal authorization. This mirrors the natural workflow of a records request.

**Clarity**: The language is generally clear and functional. Section headers are descriptive ("PERSON OR COMPANY WHO WILL RECEIVE INFORMATION"). Instructions are embedded inline — e.g., "Last 2 years of active treatment will be provided unless specified" and "If sending to a provider, an Abstract/Summary of records will be sent unless otherwise marked below." These defaults are helpful.

**Layout concerns**: Fitting everything on one page necessarily creates density. The text in Part F (legal disclosure) is likely small given the amount squeezed in. The extracted text shows the word "INFORMA" truncated at the top, suggesting a header element may be clipped or overlapping.

**Record type granularity**: Part C offers extensive record-type options — 14+ distinct categories including Abstract/Summary, Entire Record, Discharge Summary, H&P, Clinic Visit, Radiology Reports/Images, Billing Records, Cardiology Images, Neurology Images, and an "Other Imaging" write-in. The form also lists 5 specific Duke treatment locations plus an "All Duke Health Enterprise Entities" option.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form serves **both** patient self-requests and third-party releases. Part B includes a "Self (Same Info As Above)" checkbox, and Part D includes "Personal" as a purpose option. However, the form is not specifically designed around patient access — it is a general-purpose authorization form.

**Scope options**: Excellent. Patients can specify:
- Date ranges or "All Treatment Dates"
- Specific treatment locations or all Duke entities
- Granular record types (14+ checkboxes) or entire record
- Abstract/Summary vs. full records

**Format and delivery options**: Part E offers **six delivery methods**: My Duke Health (patient portal), Portal (attorney/insurance), Encrypted Email, Fax, CD, and Paper. Electronic delivery options are prominently listed first. The note "Charges may apply" appears for CD and Paper only — electronic delivery appears free.

**Right of Access language**: The form does **not** reference HIPAA § 164.524 or patient rights explicitly. The legal text in Part F addresses revocation rights and re-disclosure risk, but does not inform patients of their right of access or the fee limitations under HIPAA.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

**Notable gap**: The form removed Part G (Witness) that existed in the prior revision (form-1). The current form states representatives "MUST attach documentation of your authority to act on behalf of the patient" but no longer includes the optional witness section.

## 6. COMPLIANCE

**Fee disclosure**: The form states "Duke Health may charge a fee for providing the information specified above" and notes "Charges may apply" for CD and Paper delivery. The fee amount is not disclosed, nor is there reference to HIPAA's reasonable cost-based fee limitation. This is vague but not inherently non-compliant.

**Authorization expiration**: "This Authorization will automatically expire one year from the date signed below unless revoked or another date or event is written here." One year is a reasonable default.

**Sensitive information consent**: Part F requires affirmative opt-in for release of "Mental and Behavioral Health" and "Genetic Testing" records. Notably, the form mentions that records "may include reference to sensitive information related to mental and behavioral health, genetic testing, HIV/AIDS or other communicable diseases" but only provides checkboxes for Mental Health and Genetic Testing — **HIV/AIDS is mentioned in the text but has no corresponding checkbox**. This creates ambiguity about whether HIV/AIDS records are released by default, withheld, or handled differently.

**Treatment conditioning**: The form correctly states "If I do not sign this Authorization, Duke Health will continue to provide treatment and seek payment for services provided."

**Representative requirements**: Representatives must attach legal documentation (POA, Court Order, Guardian Documentation, Executor/Administrator Documentation). This is standard.

**Submission channels**: The form provides fax (919-620-5165), email (ROI-requestor3@dm.duke.edu), phone for questions (919-684-1700), and mail address. Multiple submission options are available; no in-person-only restriction.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **HIV/AIDS checkbox missing**: Part F states records "may include reference to sensitive information related to mental and behavioral health, genetic testing, HIV/AIDS or other communicable diseases" but only provides checkboxes for Mental/Behavioral Health and Genetic Testing. HIV/AIDS is conspicuously absent from the opt-in checkboxes, creating a compliance gap — many state laws (including North Carolina) require specific authorization to release HIV/AIDS information.

### ⚠️ AMBIGUITIES

- **Fee amounts undisclosed**: "Duke Health may charge a fee" and "Charges may apply" for CD/Paper, with no indication of amounts or HIPAA fee limits. Patients cannot anticipate costs before submitting.
- **"INFORMA" truncation**: The extracted text shows "INFORMA" at the top of the page, suggesting a header or title element is clipped. The full word (likely "INFORMATION") may be cut off in the PDF rendering, which could confuse patients about the form's title.

### ❌ ERRORS

- **Unnamed fillable fields**: All 67 form fields lack descriptive names (`fillable_field_names: []`), which hinders accessibility for screen readers and automated form-filling tools.
- **Misleading URL path**: The form is hosted under `/clinical_trials_information/` but is a general ROI authorization — not specific to clinical trials.

### ✨ BRIGHT SPOTS

- **67 fillable fields on a single page** — one of the more complete digital-first implementations, enabling full on-screen completion.
- **Electronic delivery listed first** in Part E, with My Duke Health (patient portal) and Encrypted Email prominently featured — signaling a preference for digital fulfillment.
- **Sensible defaults**: "Last 2 years of active treatment will be provided unless specified" and "Abstract/Summary of records will be sent [to providers] unless otherwise marked" reduce cognitive burden on patients.
- **Multiple submission channels**: Email, fax, and mail are all accepted — no in-person requirement.
- **Companion instruction document** (form-2.pdf) provides detailed, plain-language guidance for every section — an unusually thorough support resource.
