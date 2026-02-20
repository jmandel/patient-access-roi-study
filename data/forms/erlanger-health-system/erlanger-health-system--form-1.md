# Erlanger Health System — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is Erlanger Health System's general **"Authorization for Release of Medical Information"** — a 2-page PDF (914,573 bytes) designed for releasing health information from or to any party. It is a **general-purpose ROI/authorization form**, not a patient-access-specific form.

Erlanger publishes three distinct ROI-related documents:
- **form-1.pdf** (this document): General authorization for release of medical information — covers any release direction (from facility to third party, or to patient). Dated 05-10-23, form number 19755/CP8206.
- **form-2.pdf**: A behavioral health–specific "Authorization to Disclose Healthcare Information" hosted on a separate domain (erlangerbh.com). Image-only scan, no text layer.
- **form-3.pdf**: A "Patient Request for Access to Health Information" — specifically designed for patients requesting their own records. Originated from Erlanger Western Carolina Hospital (EWCH), dated 5/2021.

Form-1 is the system's **primary, general-purpose authorization** form. Notably, Erlanger also provides a separate patient-access form (form-3), meaning this form is not the only path for patients requesting their own records — but it is positioned as the main ROI form for the system.

## 2. FINDABILITY

Per the retrieval notes, all three forms were located through a single web search (`"Erlanger Health System" "medical records" "release form" filetype:pdf`). No significant barriers were encountered — no login walls, no bot-blocking, no broken links. The form URL (`https://www.erlanger.org/-/media/erlanger-media/file/patienttools/19755-authorization-to-release-medical-information.ashx`) is reasonably descriptive, containing the form number and a human-readable slug. The site-scoped search confirmed a Medical Records page at `https://www.erlanger.org/patient-and-family-resources/patient-tools/medical-records`.

Retrieval difficulty is rated **easy**. The form is publicly available and directly downloadable. The URL path places it under `/patienttools/`, which is logical. However, the `.ashx` extension and media path structure are CMS artifacts that would be opaque to patients browsing directly.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,923 characters), confirming this is a digitally authored PDF, not a scan.
- **Fillable fields**: **Zero** fillable form fields. Despite being a digitally created document, the form has no interactive fields — patients must print and fill by hand or use PDF annotation tools.
- **PDF version**: 1.6, which is modern and widely supported.
- **File size**: 914,573 bytes (~893 KB) for a 2-page form. This is disproportionately large — likely driven by embedded images (2 embedded images noted in metadata) or high-resolution graphical elements. By comparison, form-3 is a single page at 254 KB and form-2 (a scanned image PDF) is only 117 KB.
- **Font count**: 12 fonts, suggesting reasonable typographic variety for a 2-page document.
- **Digital-first design**: The document appears to have been created digitally (not scanned), but the lack of fillable fields means it functions as a print-and-fill form despite its digital origin. This is a missed opportunity for a true digital-first experience.

## 4. CONTENT DESIGN

**Length and structure**: 2 pages covering patient identification, release from/to fields, purpose of release, treatment date range, record type selection, format options, delivery method, patient rights, and signature blocks. The length is proportionate to the content.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient/Resident Information (name, DOB, address, SSN last 4, phone, email)
2. Release From / Release To fields
3. Purpose of Release (checkboxes: "Request of individual/personal," "Continued patient care," "Insurance," "Legal purpose," "Other")
4. Treatment date range
5. Record type selection (extensive checkbox list)
6. Format options (CD, secure email, paper)
7. Delivery method (US Mail, pick-up, fax, overnight)
8. Patient/Resident Rights (7 bullet points)
9. Signature and representative sections

**Clarity**: The language is reasonably clear but contains some dense legal passages. The Patient Rights section includes substantive disclosures like: *"This is a full release including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2, genetic information, HIV/AIDS, and other sexually transmitted diseases."* This is important but could be clearer — the sentence conflates what is being released with a compliance citation mid-sentence.

**Record type granularity**: The form provides good granularity for hospital records: Hospital Summary, Discharge Summary, History & Physical, Consultation Reports, Operative Reports, Radiology/X-ray Reports, Pathology Reports, Emergency Room Record, EKG, Stress Test, Laboratory Reports, Images, Billing Records, and "Entire Record (not including psychotherapy notes)." This gives patients meaningful control over scope.

**Layout notes**: The extracted text suggests a structured but moderately dense layout. The form uses a mix of fill-in-the-blank lines and checkbox options. The "(one patient/resident per form)" instruction is clear and practical.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is a **general-purpose authorization** that can serve both patient access and third-party release scenarios. The "Release Information To" field includes a "_________myself" option, indicating patients can use it for self-requests. However, the form's framing — "I give permission to release the health information of" — is written from a consent/authorization perspective, not an access-request perspective. Erlanger does offer a separate, more patient-centered form (form-3: "Patient Request for Access to Health Information"), which is purpose-built for patient access.

**Scope options**: Good. Patients can specify:
- Date range ("Treatment Dates: From: ... To: ...")
- Specific record types via checkboxes
- "Entire Record (not including psychotherapy notes)" as an option

**Format options**: The form offers CD, secure email, and paper copy. The format section notes "(charges may apply)" for CD and paper copy. Secure email is available, which is a positive feature.

**Delivery method**: Multiple options — regular US Mail, pick-up, fax ("where permitted"), overnight/express mail (charges may apply), paper copy, and "Other." This provides reasonable flexibility.

**Right of Access language**: The Patient Rights section states: *"Refusing to sign this form will not prevent my ability to get treatment, payment, enrollment in health plan, or eligibility for benefits."* This references the anti-conditioning requirement but does not explicitly cite HIPAA § 164.524 or use the phrase "Right of Access." The Notice of Privacy Practices is referenced with a URL: *"The Notice of Privacy Practices is available at www.erlanger.org."*

**EHI Export / bulk data**: No mention of electronic health information export, USCDI, or bulk data options.

**SSN requirement**: The form asks for "Last 4 numbers of SSN." While only asking for the last 4 digits is better than requesting the full SSN, this is still a data point that many patients may be uncomfortable providing, and it is not strictly necessary for record identification when combined with name, DOB, and MR#/Acct#.

## 6. COMPLIANCE

**Expiration**: The form states: *"This permission expires one year after the date of my signature unless an earlier date or event is written here."* A one-year default expiration is standard and reasonable.

**Revocation**: *"I can cancel this permission at any time. I must cancel in writing and send or deliver cancellation to releasing facility or practice named above."* This is clearly stated and appropriate.

**Re-disclosure warning**: *"Once my health information is released, the recipient may disclose or share my information with others and my information may no longer be protected by federal and state privacy protections."* Standard and appropriate.

**Fee disclosure**: The form mentions fees in several places — "(charges may apply)" appears next to CD, paper copy, and overnight delivery options. Additionally, the Patient Rights section states: *"A fee may be charged for providing the protected health information."* Fees are mentioned but amounts are not specified, which is vague but not necessarily non-compliant.

**Full release bundling**: The form states this is *"a full release including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2, genetic information, HIV/AIDS, and other sexually transmitted diseases."* This means signing the form authorizes release of **all** sensitive categories by default. There is no opt-out mechanism for specific sensitive categories — patients cannot, for example, authorize release of hospital records while withholding substance abuse treatment records. This is a bundled consent approach.

**Minor consent provisions**: The form includes a notable provision: *"if minor consented for their outpatient treatment for pregnancy, sexually transmitted disease or behavioral/mental health without parental consent, the minor must sign this authorization."* This reflects Tennessee law requirements and is appropriately handled.

**Representative signing**: The form lists authorized representatives: Healthcare Agent/POA, Guardian, Executor/Administrator/Attorney in Fact, Spouse, Parent, Adult Child, Affidavit Next of Kin, Other. Written proof may be requested. This is reasonable and well-documented.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Bundled sensitive-category consent**: The form's statement that it is "a full release including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2, genetic information, HIV/AIDS, and other sexually transmitted diseases" provides no mechanism for patients to exclude specific sensitive categories. Under 42 CFR Part 2 (substance use disorder records), authorization must be specific — bundling SUD records into a blanket release without a separate opt-in may raise compliance concerns, particularly under the revised Part 2 regulations.

### ⚠️ AMBIGUITIES

- **"Fax, where permitted"**: The delivery method includes "Fax, where permitted" without explaining what circumstances would prevent faxing. This leaves patients uncertain whether fax is actually available to them.
- **Fee amounts undisclosed**: Multiple references to "charges may apply" without specifying amounts or a fee schedule. Patients cannot assess cost before submitting the form. HIPAA limits fees for patient access requests to a reasonable, cost-based fee, but nothing on this form tells the patient what to expect.
- **Dual-purpose form ambiguity**: The form can be used for both patient self-access ("_________myself") and third-party release, but the rights disclosures and consent language are written for the third-party release scenario. A patient requesting their own records might be confused by language like "the recipient may disclose or share my information with others" — when the "recipient" is the patient themselves.

### ✨ BRIGHT SPOTS

- **Separate patient-access form exists**: While form-1 is a general authorization, Erlanger also provides form-3 specifically for patient access requests. This shows awareness that patient access and third-party release are different use cases, even if form-1 doesn't make this distinction clear.
- **Granular record-type checkboxes**: The form provides 14+ specific record type options plus "Entire Record," giving patients meaningful control over what is released.
- **Secure email option**: Including "Secure - Email" as a format option is a positive feature that many organizations omit.
- **Minor consent provisions**: The form's attention to when minors must sign their own authorization (pregnancy, STD, behavioral health, substance abuse treatment) reflects careful attention to Tennessee law and patient rights.
