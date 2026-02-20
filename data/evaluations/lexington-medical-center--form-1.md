# Lexington Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a two-page **"Authorization for Release of Protected Health Information"** form (English version) published by Lexington Medical Center at 2720 Sunset Boulevard, West Columbia, SC 29169. It is the organization's primary ROI form, covering two distinct functions via a top-level checkbox selection:

- **Medical Records Release** (Section 1): Release of copies of PHI/medical records
- **Verbal Communication Release** (Section 2): Permission to verbally discuss PHI with named individuals

Section 3 ("Review and Authorize") spans both functions and contains the authorization terms and signature block.

The form bears a document control number `7181-1155-1 (10/20)`, indicating an October 2020 revision.

Lexington Medical Center publishes three forms on its Medical Records page. Form-2 is a **Spanish-language translation** of this same form (same structure, same content). Form-3 is a **Reproductive Health Attestation** form — a supplemental HHS model attestation, not an ROI form itself. Thus form-1 is the sole English-language ROI form for this organization.

## 2. FINDABILITY

**Easy to locate.** Per retrieval notes, a basic web search for `Lexington Medical Center West Columbia SC "medical records" "release form" PDF` immediately surfaced the form. The organization's website has a dedicated Medical Records page at `https://www.lexhealth.com/medical-records` that links directly to all three PDF forms.

The source URL is descriptive: `lexhealth.com/docs/default-source/privacy---legal/medical-records-release-authorization-form.pdf`. The path clearly signals what the document is. The Medical Records page also explains both digital (MyChart) and paper-based request options, giving patients context before they download the form.

No difficulties were encountered: no bot blocking, no JavaScript-required rendering, no portal login needed. The form is publicly accessible via direct link.

## 3. TECHNICAL ACCESSIBILITY

**Text layer present, but no fillable fields.** The form has extractable text (5,710 characters across 2 pages) and is not a scan — it was digitally authored. It uses 5 fonts and contains zero embedded images, resulting in a compact 72 KB file size.

However, the form has **zero interactive form fields** (`fillable_field_count: 0`). Every field is represented by underscores or empty checkboxes (`£` characters in the text layer, rendered as checkbox squares in the PDF). This means patients must print the form to complete it by hand, or use PDF annotation tools — neither of which is ideal.

The form is designed as a **print-first document** that happens to be distributed digitally. It is not a digital-first design. The checkbox character rendering (`£` in extracted text) suggests the PDF uses a symbol font for checkboxes rather than proper form field widgets.

## 4. CONTENT DESIGN

**Well-organized two-page layout with clear structure.** The form uses a logical three-section design:

- **Top of page 1**: Patient identification (name, DOB, SSN), then a clear either/or checkbox directing the patient to the relevant section
- **Section 1** (page 1): Medical Records Release — sender, recipient, delivery method, and a detailed grid of record types
- **Section 2** (page 2, top): Verbal Communication Release — table for person/relationship/phone
- **Section 3** (page 2, bottom): Review and Authorize — 8 numbered conditions plus signature block

The **record type grid** is notably granular, organized into three columns: Reports/Notes (ED Notes, H&P, Consultations, Discharge Summary, Operative Reports, PT/OT/ST Reports, Physician Office Note), Test Results/Studies (Lab Tests, Pathology, Immunization, X-Ray Reports/Films, Cardiac/Respiratory tests including Catheterization, Echo, EKG, Stress Test, PFT), and Other (Diagnosis List, Medication List, Billing Record, Patient ID Sheet, Entire Medical Record, Abstract of Medical Record). This gives patients meaningful control over what gets released.

**Readability** is adequate. The authorization conditions in Section 3 use moderately complex language — not impenetrable legalese, but not plain language either. For example: *"I understand that if the person or entity receiving this information is not covered by federal privacy regulations, this information will no longer be protected and may be re-disclosed."* This is reasonably clear but could be simplified.

**Length** is appropriate — two pages for the scope of content covered is proportionate.

## 5. PATIENT-CENTEREDNESS

**Mixed signals on patient access vs. third-party release.** The form is structured as a general authorization — *"I authorize the following provider/entity _____ to release my health information to: Recipient/Provider Name: _____"* — which frames the transaction as provider-to-third-party disclosure. A patient requesting their own records must fill in themselves as both the authorizing party and the recipient, which is unintuitive.

There is **no separate patient-access-specific form** and **no reference to HIPAA's Right of Access (45 CFR § 164.524)**. The form does not mention patient rights to access their own records at all, nor does it reference EHI export or electronic health information in any modern sense.

**Delivery method options** are provided: Portal, Mail, Pick-up, and Fax (limited to health providers). The inclusion of "Portal" is notable — it suggests electronic delivery is available, though no further details are given about what portal access means in practice.

**Scope options are strong.** The detailed record-type checklist gives patients granular control. The form also asks for "Date(s) of Treatment" and "Purpose of Release," letting patients scope their request by time and intent.

**Fee disclosure is indirect.** Condition 5 states: *"I understand that there may be a charge for obtaining the requested information. Information on this charge can be obtained by contacting the Medical Records department at (803) 791-2264."* The form does not state the fee amount, only that one may apply and provides a phone number for more information.

**Submission method**: The form instructs patients to *"Mail completed form to: Lexington Health Attn: Medical Records, 2720 Sunset Blvd., West Columbia, SC 29169."* Mail is the only submission method mentioned on the form itself, though the notes indicate the website also references MyChart as a digital option.

## 6. COMPLIANCE

**90-day expiration.** Condition 7 states: *"I understand that this medical record release authorization will expire 90 days after signature unless an earlier date is specified here ___."* This is a relatively short expiration window. For a patient requesting their own records this is generally adequate (the request would be processed well within 90 days), but for ongoing third-party release needs it could be burdensome.

**SSN collection.** The form requests the patient's full Social Security Number at the top. While this may be used for patient identification, collecting full SSN on a form that must be mailed creates a privacy risk, and it is not required by HIPAA for records release.

**No notarization or in-person requirements.** The form explicitly states *"a copy or fax of this document is just as valid as the original document"* (condition 6), which is a patient-friendly provision.

**Right to refuse without treatment impact.** Condition 4 states: *"I understand that I may refuse to sign this authorization and my refusal to sign will not affect my ability to obtain treatment."* This is compliant with HIPAA requirements.

**Revocation rights clearly stated.** Condition 3 explains the right to revoke, with specific instructions for both Medical Records and Verbal Communication revocations.

**Sensitive information disclosure.** Condition 1 states: *"I understand that if my records contain documentation of alcohol abuse, psychiatric condition, drug abuse or communicable diseases, this information will be released as part of my record."* This is a broad disclosure notice — it does not offer patients the ability to exclude sensitive categories, and depending on South Carolina state law and 42 CFR Part 2 requirements, the blanket inclusion of substance abuse records may require separate consent.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Full SSN collection**: The form requests the complete Social Security Number (`Social Security Number:____ ____ ____ – ____ ____ – ____ ____ ____ ____`) as a top-level identifier. This is not required by HIPAA, creates identity theft risk especially when mailed, and is increasingly considered a poor practice.

- **Blanket substance abuse/psychiatric records disclosure**: Condition 1 states all alcohol abuse, psychiatric, drug abuse, and communicable disease documentation *"will be released as part of my record"* with no opt-out mechanism. This may conflict with 42 CFR Part 2 requirements for substance use disorder records, which generally require separate, specific consent.

### ⚠️ AMBIGUITIES

- **"Portal" delivery option undefined**: The form lists "Portal" as a delivery method but provides no explanation of what portal, how to access it, or whether this is a patient portal (MyChart) or a provider-to-provider portal. A patient checking this box has no way to know what will happen.

- **Patient self-request workflow unclear**: The form's sender/recipient framing (*"I authorize the following provider/entity _____ to release my health information to: Recipient/Provider Name"*) does not clearly accommodate a patient requesting their own records. It's ambiguous whether the patient should list themselves as the recipient.

### ✨ BRIGHT SPOTS

- **Spanish-language version available**: Form-2 is a full Spanish translation of the same form, published alongside the English version. The Spanish version even includes an interpreter services phone number (`(803) 791-2254`), which is a thoughtful addition absent from the English form.

- **Granular record-type selection**: The checkbox grid offers approximately 20+ distinct record categories across Reports/Notes, Test Results/Studies, X-Ray/Radiology, and Cardiac/Respiratory, giving patients meaningful control over scope.

- **Copies and faxes accepted**: Condition 6 explicitly states *"a copy or fax of this document is just as valid as the original document,"* removing a common unnecessary barrier.

- **Reproductive Health Attestation form**: The inclusion of a separate reproductive health attestation (form-3) implementing the 2024 HIPAA reproductive health care privacy rule demonstrates proactive compliance with recent regulatory changes.
