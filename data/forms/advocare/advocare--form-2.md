# Evaluation: Advocare, LLC — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a two-page "Authorization for Use/Disclosure of Protected Health Information" form. It is the **current, primary English-language ROI form** linked directly from Advocare's official medical records page (https://www.advocaredoctors.com/medical-records). The source URL is on Advocare's CDN (`irp.cdn-website.com/ddaae316/...`).

In context, Advocare provides three downloaded forms:
- **form-1.pdf** — An older single-page version (v2, dated 4/2021) hosted on a different CDN path, likely from an individual practice site. It has 0 fillable fields and a shorter record-type list.
- **form-2.pdf (this document)** — The current English authorization form, revised 1/2026 (per footer "Rev. 1/2026"), with 41 fillable fields and more granular record categories.
- **form-3.pdf** — A Spanish-language translation of this same form, dated 01/2024, with 44 fillable fields.

This form is a general-purpose HIPAA authorization — it covers both patient-directed access and third-party release via the "Purpose for the record request" checkboxes.

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, a `site:advocaredoctors.com` search quickly surfaced the dedicated Medical Records page, which links directly to downloadable PDFs in English and Spanish, as well as an online submission option via ShareCare. The URL/filename is descriptive: `Advocare+Authorization+for+Use+Disclosure+of+Protected+Health+Information.pdf`. The medical records page is described as "well-organized" and "clearly" linking to forms. No bot blocking or authentication was required. The retrieval difficulty was rated **easy** by the search agent.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present — full text is extractable (4,323 characters across 2 pages). Not an image-only scan.

**Fillable fields:** The form has **41 interactive form fields**, indicating it was designed for digital completion. However, the `fillable_field_names` array is empty, meaning the fields lack accessible names — this hurts screen reader compatibility and could degrade the experience in some PDF viewers.

**File size:** 122,505 bytes (≈120 KB) for a 2-page text-based form with no embedded images. This is reasonable.

**Fonts:** 9 fonts are used, which is somewhat high for a 2-page form but not problematic.

**Digital-first design:** The form appears to be a born-digital document (not a scan), with clean text extraction and interactive fields. The checkbox rendering uses "9" characters in the extracted text (e.g., "9 Send via mail or"), which suggests styled checkbox symbols in the PDF that extract as the digit "9" — a minor text-extraction artifact but not an accessibility issue in the visual PDF itself.

**Text extraction artifact:** There is a duplicated/garbled line: "Select from thethe following the information to be disclosed Select from the following the information to be disclosed (check all that apply):" — this appears to be a rendering or layering issue in the PDF where text is doubled.

## 4. CONTENT DESIGN

**Length:** Two pages — appropriate for the scope of information collected.

**Organization:** The form follows a logical flow: patient information → sending/receiving provider → purpose → date range → record types → sensitive categories → attestation statements → signature. This is well-structured.

**Record type granularity:** The form offers 12 checkboxes for record types plus an "Other" option. Categories include: Abstract Record, Complete Medical Record, Immunization Record, Operative/Procedure Reports, Growth Charts, Consultation Reports, Encounters, Cardiology/EKG Report, Lab Reports, Itemized Billing Statements, Diagnostic Imaging Reports, and Photographs/videotapes/digital images. The "Abstract Record" option is thoughtful — described as "Last year of encounters and procedures, lab results, and diagnostic results" — giving patients a practical shortcut.

**Sensitive information:** Four categories of sensitive information are called out separately with their own checkboxes: Mental health, Alcohol/drug abuse, AIDS/HIV, and Reproductive Services. A helpful **Reference Guide** on page 2 defines each category in plain language (e.g., "All medical, surgical, counseling, or referral services relating to the human reproductive system including, but not limited to, services relating to pregnancy, contraception, or termination of a pregnancy"). The reference to New Jersey law "Reproductive Law P.L.2022, c.51" is included.

**Clarity:** The introductory paragraph is reasonably clear: "I understand that this authorization is voluntary. I understand that if the organization authorized to receive the information is not a health plan or health care provider, the released information may no longer be protected by federal privacy regulations." The numbered attestation statements on page 2 are written in first person and are generally understandable, though still somewhat legalistic.

**Layout:** The two-column layout for sending provider vs. recipient is efficient. However, the form is fairly dense, particularly on page 1 where record-type checkboxes are packed tightly.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form includes "Patient Request" as a purpose checkbox alongside "Continued Care" and "Transfer of Care." This acknowledges patient self-access, but the form is fundamentally a general-purpose authorization, not a patient-access-specific form. A patient requesting their own records still fills out "recipient" fields, which may be confusing — why should they need to provide their own address as a "recipient"?

**Delivery options:** The form offers "Send via mail or Email" as delivery method checkboxes, plus an email field for the recipient. This is a positive feature, enabling electronic delivery.

**Format options:** No options for specifying electronic format (e.g., PDF, CCDA, FHIR). No mention of patient portal access as an alternative.

**Right of Access language:** The form does not reference HIPAA § 164.524 or explicitly state patients' right of access. It does note: "I understand that Advocare, LLC cannot make me sign this Authorization as a condition to receive treatment" — but this addresses conditioning of treatment, not right of access.

**EHI Export:** No mention of electronic health information export, bulk data, or ONC/information blocking rules.

**Response time:** Statement 4 reads: "I understand and accept that by law you have 30 days to comply with my request." This correctly reflects the HIPAA timeline.

**Online submission:** Per retrieval notes, Advocare also offers an online request option via ShareCare, though this form itself is the downloadable PDF pathway.

## 6. COMPLIANCE

**Expiration:** "If no expiration date is designated, this authorization will expire in 90 days from the signature date." The older form-1 defaulted to 6 months. A 90-day default is on the short side — it means if there are any delays, the patient may need to re-authorize. This is not a HIPAA violation but is less patient-friendly than longer defaults.

**No fees disclosed:** The form does not mention fees. This is neither good nor bad — HIPAA permits reasonable cost-based fees but doesn't require upfront disclosure on the authorization form itself.

**Liability release:** The form includes: "Advocare, LLC, its providers, employees, members, and agents are hereby released from any legal responsibility or liability for disclosure of the above information to the extent indicated and authorized herein." This is a standard liability release clause.

**No unreasonable barriers:** No notarization requirement. No in-person submission requirement. No SSN field (the older form-1 had a "Patient SS#" field; this version removed it). Legal representative documentation is required only when applicable.

**Revocation rights:** Clearly stated — patient can revoke "at any time by notifying Advocare, LLC, in writing."

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Patient self-request awkwardness:** When a patient checks "Patient Request" as the purpose, they are still required to fill out the "To release to (Recipient)" section with a recipient name, address, and phone number. It is unclear whether the patient should list themselves as the recipient or whether this section can be left blank for patient self-access requests. This dual-purpose form design creates confusion for the most common patient use case.

- **90-day default expiration:** The form states it expires "in 90 days from the signature date" if no date is specified. This is shorter than the industry-typical 6 months (which form-1 used) and could result in expired authorizations if processing takes longer than expected. There's no explanation of why 90 days was chosen.

### ❌ ERRORS

- **Duplicated/garbled text:** The extracted text contains: "Select from thethe following the information to be disclosed Select from the following the information to be disclosed (check all that apply):" — this is a text layering defect in the PDF where the heading appears to be doubled, with "thethe" as a typo artifact. This suggests a layout error in the source document.

- **Unlabeled fillable fields:** The form has 41 fillable fields but the `fillable_field_names` array is empty, meaning none of the interactive fields have accessible names/labels. This is a PDF accessibility deficiency that would impact screen reader users and assistive technology.

### ✨ BRIGHT SPOTS

- **Spanish-language version available:** Advocare provides a full Spanish translation (form-3.pdf) linked alongside the English form — uncommon and valuable for patient accessibility in a Northeast practice.

- **"Abstract Record" option:** The checkbox for "Abstract Record (Last year of encounters and procedures, lab results, and diagnostic results)" is a thoughtful addition that gives patients a practical shortcut rather than forcing them to select individual record types or request the complete record.

- **Reference Guide for sensitive categories:** The page 2 Reference Guide plainly defines each sensitive information category (mental health, substance abuse, HIV/AIDS, reproductive services) with specific examples, including a citation to New Jersey reproductive privacy law (P.L.2022, c.51). This helps patients make informed choices about what they're authorizing.

- **Email delivery option:** Explicitly offering email as a delivery method, with a field for the recipient's email address, is a modern and convenient touch.

- **SSN removed:** Compared to the older form-1, which included a "Patient SS#" field, this current version appropriately removed the Social Security Number field — reducing unnecessary collection of sensitive identifiers.

- **Online submission alternative:** While not on this form itself, Advocare's medical records page offers an online request pathway via ShareCare alongside the downloadable PDF, giving patients a choice of submission methods.
