# Huntington Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is **not an ROI form itself** — it is an instruction document titled "Instructions For Completing The Authorization For Release Of Health Information Form." It is a 3-page companion to form-1.pdf (the general third-party "Authorization for Release of Health Information," form VD001). The document walks through each numbered section of form-1, explaining what to enter in each field with annotated visual examples.

This is one of four documents found for Huntington Hospital, all published at the Northwell Health system level:
- **form-1.pdf**: General third-party Authorization for Release of Health Information (VD001)
- **form-2.pdf** *(this document)*: Instructions for completing form-1
- **form-3.pdf**: Patient-specific Request for Access to Health Information (VD087) — cites HIPAA § 164.524
- **form-4.pdf**: Instructions for completing form-3

The instruction/form pairing pattern (form-1 + form-2, form-3 + form-4) shows that Northwell Health publishes separate instruction guides alongside each authorization form.

## 2. FINDABILITY

Per the retrieval notes, all four documents were found via the Northwell Health system website, not through Huntington Hospital's facility-specific site. The source URL is `https://www.northwell.edu/sites/northwell.edu/files/2022-03/release-of-health-information-form-instructions.pdf`. Retrieval difficulty was rated **easy** — forms are directly linked from the Northwell Health medical records page.

The filename `release-of-health-information-form-instructions.pdf` is descriptive and clearly distinguishes this as the instruction companion to the release form. However, a patient searching specifically for "Huntington Hospital medical records form" would need to recognize that Huntington Hospital uses parent-system (Northwell Health) forms. Initial searches were confused by the similarly-named Huntington Hospital in California, requiring disambiguation by adding "Northwell" to queries.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,766 characters across 3 pages).
- **Fillable fields**: 0 — appropriate for an instruction document that isn't meant to be filled out.
- **File size**: 565,187 bytes (565 KB) for 3 pages. This is relatively large, likely driven by the 28 embedded images used for annotated visual examples (the "X" marks and highlighted fields showing where to fill in). By contrast, form-1.pdf (the actual form it explains) is only 44 KB.
- **Fonts**: 9 fonts embedded, suggesting varied typography for instructional callouts versus body text.
- **Digital design**: The document has a proper text layer and is not a scan, but the heavy reliance on embedded images for the annotated examples means it's a hybrid — digitally authored text with screenshot-style visual examples. The "XXXXXXX" sequences visible in the extracted text appear to be redacted/placeholder content in the annotated example images where the text layer captures the overlay marks.

The document functions adequately as a digital artifact. The large file size relative to content is the main technical concern.

## 4. CONTENT DESIGN

The document is organized as a numbered walkthrough (steps 1–10) corresponding to sections on form-1. Each step provides clear guidance:

- **Step 1**: "Enter the name, address, date of birth, telephone number, and e-mail address (for electronic delivery) of the patient for whom records are being requested. Only include one patient per form."
- **Step 4**: Explains delivery method selection: "Select the preferred delivery method by checking ONE of the choices under delivery manner."
- **Step 6**: Explains record type options with helpful context: "For a doctor's office, if you are unsure of the time frame, select Medical Record Abstract and the most recent information will be released."
- **Step 7**: Clarifies the reason field: "'At the request of the individual' may be selected when an individual initiates the authorization and does not, or elects not to, provide a statement of the purpose."

The language is generally clear and written in plain terms, with practical examples (e.g., "ex. North Shore University Hospital," "Dr. Jane Jones at 300 Northwell Drive"). Step 8's opt-out instructions are clearly flagged: "Initial this section ONLY IF OPTING OUT of the release of substance abuse treatment information, mental health treatment information or HIV-related information."

At 3 pages for instructional content, the length is proportionate. The document includes a footer on each page with version information ("182691 v.1") and date ("9/29/2021"), aiding version control.

One layout concern: the "XXXXXXX" placeholder sequences from the annotated images create visual noise in the extracted text, though these likely render as highlighted example fields in the visual PDF.

## 5. PATIENT-CENTEREDNESS

This instruction document supports the **general third-party release form** (form-1), not the patient-access-specific form (form-3). There is no mention of HIPAA Right of Access (§ 164.524), patient rights, or electronic health information export in this document — those topics are addressed in the form-3/form-4 pair instead.

The instructions do explain the full range of delivery options available (regular mail, pickup, electronic mail with secure/unsecure options, fax), and helpfully note: "If this information is not included, records will be sent by regular mail" — setting clear default expectations.

Step 9 addresses authorization expiration, stating: "If left blank, the Authorization Form will be returned for additional information. Using 'indefinite,' is not acceptable. A fixed period of time is required by law (e.g., 6 months, 30 days post discharge, at the end of litigation)." This is transparent about requirements but also imposes a burden — patients must specify an expiration date.

There is no mention of fees, processing time expectations, or how to submit the completed form (in-person, mail, fax, portal, etc.). A patient reading the instructions might complete the form correctly but still not know where to send it.

## 6. COMPLIANCE

The document itself doesn't impose requirements — it explains the requirements of form-1. Notable compliance-relevant instructions:

- **Expiration requirement**: The instructions state that "indefinite" is not acceptable and "A fixed period of time is required by law." This is consistent with New York State law requirements for authorization expiration. However, this applies to the general authorization form, not to patient access requests (which are governed by HIPAA § 164.524 and don't require the same expiration framework).
- **Opt-out framing for sensitive information**: Step 8 uses an opt-out model — substance abuse, mental health, and HIV information are included by default unless the patient initials to exclude them. This is appropriate for New York's consent framework.
- **Witness/interpreter provisions**: Step 10 provides for interpreter assistance and witness signatures, which supports accessibility for non-English speakers.

No notarization is mentioned. No fees are disclosed. No in-person-only submission requirement is stated.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Dedicated instruction document**: Providing a separate, detailed instruction guide alongside the form is uncommon and genuinely helpful. Many organizations leave patients to decipher forms on their own. The step-by-step walkthrough with annotated visual examples is a best practice.
- **Practical examples**: The instructions include concrete examples like "Dr. Jane Jones at 300 Northwell Drive" and "North Shore University Hospital" rather than abstract descriptions, making it easier for patients to understand what's expected.
- **"At the request of the individual" guidance**: Step 7 explicitly tells patients they can select this option when they don't want to disclose a purpose, which respects patient autonomy.

### ⚠️ AMBIGUITIES
- **No submission instructions**: The document explains how to *complete* the form but never explains how to *submit* it — no mailing address, fax number, portal link, or drop-off location is provided. A patient could fill the form out correctly and still be stuck.
- **"XXXXXXXX" visual artifacts**: The extracted text contains numerous "XXXXXXX" sequences from the annotated example images. While these likely render clearly in the visual PDF, they make the document confusing if consumed via assistive technology or text extraction.

### ❌ ERRORS
- **Date mismatch**: The instruction document is dated "9/29/2021" while form-1 (the form it explains) is dated "9/28/21" (VD001). This is a minor discrepancy but could cause confusion about whether the instructions match the current form version.
