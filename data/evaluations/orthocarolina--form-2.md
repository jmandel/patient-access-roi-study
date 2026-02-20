# Evaluation: OrthoCarolina — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization for Use/Disclosure of Protected Health Information" form, dated "Approved 4/2017" per the footer. It is an **older version** of OrthoCarolina's ROI authorization form. The filename (`authorization_for_use_disclosure_of_phi_6-20171_1.pdf`) suggests a June 2017 timestamp.

OrthoCarolina has three versions of this form available online. Form-1 (revised 04/2023) and form-3 (revised 12/2020) are newer and titled "Authorization for **Access**/Use/Disclosure" — notably adding the word "Access." Form-2 omits "Access" from the title, which may reflect an older drafting convention that predates OrthoCarolina's awareness of HIPAA's patient access rights as distinct from third-party disclosure. Form-1 appears to be the current primary version linked from the medical records page; form-2 is a legacy artifact that remains publicly accessible at its original URL.

Key differences from the newer forms: form-2 uses a different fax number (704-323-3941 vs. 704-323-3806), includes "Photographs" and "Consultation Reports" as separate record-type checkboxes, places copy fee language at the top of the form, and does not offer patient portal upload as a submission method.

## 2. FINDABILITY

Per retrieval notes, this form was found via site-scoped search (`site:orthocarolina.com`) and web search. It is **not** the primary form linked from OrthoCarolina's medical records resource page — it is an orphaned PDF still hosted at a distinct URL (`/storage/components/...`). A patient navigating the website would likely find form-1 or form-3 before encountering this version.

The URL path (`/storage/components/authorization_for_use_disclosure_of_phi_6-20171_1.pdf`) is descriptive enough to identify the document type but includes a versioning suffix that is not user-friendly. The fact that this legacy form remains live and discoverable via search engines is a findability concern: a patient might land on this outdated form and not realize a newer version exists.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: Single-page PDF, 130,629 bytes — a reasonable file size.
- **Text layer**: Present; full text is extractable (4,739 characters). Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). This is a flat PDF — patients must print it, fill by hand, and return it physically or via fax/email. There are no interactive form fields despite having 8 fonts and 8 embedded images.
- **Digital-first design**: This is clearly designed as a print-and-fill document, not a digital-first form. The blank lines (`___________________________________`) are designed for handwriting. The lack of any fillable fields means patients cannot complete this form on-screen.
- **Text extraction quality**: Mostly clean, but there is a notable garbling artifact in the delivery method section. The extracted text reads: `"I need\nto makearlier\notherrevoked,\narrangements\nfor picking up\nmedical\npaper\ncopies  CD\nI understand\nthat unless\nthis authorization\nwill\nexpirerecords\none year from\ntoday."` This appears to be a layout issue where overlapping text columns were not properly linearized during extraction, combining the delivery options with the authorization expiration language. This suggests the PDF layout is poorly structured, with text boxes overlapping in a way that confuses extraction tools.

## 4. CONTENT DESIGN

**Length**: One page, appropriate for an authorization form. The density is high — the form crams all fields, checkboxes, legal language, and signature blocks onto a single page.

**Clarity**: The form opens with reasonably clear language: *"I hereby authorize the use or disclosure of my individually identifiable health information as described below. I understand that this authorization is voluntary."* It then immediately states: *"I understand that if the organization authorized to receive the information is not a health plan or health care provider, the released information may no longer be protected by federal privacy regulations."* This re-disclosure warning is appropriate but could confuse patients who are requesting records for their own use.

**Organization**: The form follows a logical flow: patient info → date range → purpose → record types → recipient → delivery method → sensitive info consent → signature. However, copy fees are placed prominently at the top (immediately below the title), which front-loads cost concerns before the patient has even begun filling out the form.

**Record type options**: The form offers 12 specific record type checkboxes (Progress Notes, Operative Report, Discharge Summary, Test Results, Laboratory Tests, Consultation Reports, Physical Therapy, X-Ray Reports, MRI Reports, CT Reports, Itemized Statement, Photographs) plus three aggregate options (complete records with/without radiology images, all radiology images only) and an "Other" free-text field. This is a comprehensive set.

**Purpose options**: Five checkboxes — Medical Review, Legal Review, Insurance Review, Personal Use, Other. "Personal Use" is available, though it is listed alongside third-party purposes without any differentiation in process or fees.

**Delivery options**: Fax, email, in-person pick-up (paper or CD), and paper/CD mail. No patient portal upload option (unlike the newer forms). The form notes: *"Please allow 5-7 business days for your request to be completed"* — a reasonable turnaround.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is designed primarily as a third-party release form. The title says "Use/Disclosure" without "Access," and the structure requires designating a recipient (*"This information is to be disclosed to the following individual or entity (MUST BE COMPLETED)"*). A patient requesting their own records must fill in their own name as the recipient, which is unintuitive. The newer forms added "Access" to the title, suggesting OrthoCarolina recognized this gap.

**Scope options**: Good granularity. Patients can specify date ranges, select from 12+ record types, and choose between complete or selective records. The "Pertaining to" free-text field allows additional scoping by condition or body part.

**Format/delivery options**: Multiple delivery methods are available (fax, email, pick-up, mail), but no patient portal option. The pick-up location is specified as a single address (4601 Park Road, Suite 250, Charlotte, NC 28209), which may be inconvenient for patients seen at other OrthoCarolina locations.

**Fee disclosure**: The form states upfront: *"COPY FEES TO OBTAIN RECORDS: Medical record copies will be provided to you for a fee as and where allowed under HIPAA regulations."* This is vague — it doesn't specify amounts or fee schedules, and the phrasing "for a fee" implies charges are standard rather than conditional. HIPAA permits only reasonable, cost-based fees for patient access requests (45 CFR § 164.524(c)(4)), and the form does not distinguish between patient access fees and third-party release fees.

**Sensitive information**: The form includes a blanket consent for sensitive information: *"I understand that the information in my medical record may include information relating to treatment for drug or alcohol abuse, sickle cell anemia, psychological or psychiatric impairments, sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), and AIDS related complex (ARC) and/or human immunodeficiency virus (HIV)."* This is a bundled all-or-nothing consent without separate opt-in checkboxes for each category (unlike form-1, which has separate checkboxes for sensitive categories).

**Right of Access language**: The form does not reference HIPAA § 164.524 or explain patient rights to access their own records. There is no mention of EHI export or bulk data access.

**Representative authorization**: The form includes fields for representative signature, printed name, relationship to patient, and a line to describe the representative's authority. It also states *"YOU MAY REFUSE TO SIGN THIS AUTHORIZATION"* prominently at the bottom — a positive patient-rights signal.

## 6. COMPLIANCE

**Fee language**: The upfront fee statement (*"Medical record copies will be provided to you for a fee"*) does not distinguish between patient access requests (which are subject to HIPAA's reasonable cost-based fee limitation) and third-party releases (which may be subject to state fee schedules). This ambiguity could lead to overcharging patients exercising their Right of Access.

**Liability waiver**: The form includes: *"OrthoCarolina, its employees, officers, and physicians are hereby released from any legal responsibility or liability for disclosure of the above information."* This is standard boilerplate but may discourage patients who are uncertain about signing away protections.

**Expiration**: *"This authorization will expire one year from date of signature."* A one-year expiration is reasonable and standard.

**Condition of treatment**: The form correctly states that signing is not a condition of treatment, with appropriate exceptions for research-related treatment and treatment solely for creating PHI for disclosure.

**No notarization or witness requirements**: The form requires only the patient's signature and date — no notarization, witnesses, or in-person identity verification.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Undifferentiated fee language for patient access**: The statement *"Medical record copies will be provided to you for a fee as and where allowed under HIPAA regulations"* fails to distinguish patient access requests from third-party releases. Under HIPAA § 164.524(c)(4), fees for patient access must be limited to reasonable, cost-based amounts. Applying general "copy fees" to patient access requests without clarification may result in overcharging.

### ⚠️ AMBIGUITIES

- **Form does not distinguish patient access from third-party disclosure**: The mandatory recipient field (*"This information is to be disclosed to the following individual or entity (MUST BE COMPLETED)"*) forces patients requesting their own records to awkwardly list themselves as the disclosure target. The form provides no guidance on how to handle a self-access request.
- **Bundled sensitive information consent**: The single paragraph covering drug/alcohol, sickle cell, psychiatric, STD, and HIV information provides no option to consent selectively. Patients cannot release general records while withholding sensitive categories — it's all or nothing.

### ❌ ERRORS

- **Garbled text extraction in delivery section**: The PDF layout causes overlapping text in the delivery options area, producing garbled extraction output: `"I need\nto makearlier\notherrevoked\narrangements..."` This suggests poorly structured text boxes in the PDF that overlap, which could cause issues for assistive technology (screen readers).
- **Outdated form still publicly accessible**: This April 2017 form remains live at its original URL despite being superseded by at least two newer versions (12/2020 and 04/2023). The different fax number (704-323-3941 vs. 704-323-3806) could result in failed fax submissions if patients use this version.

### ✨ BRIGHT SPOTS

- **"YOU MAY REFUSE TO SIGN THIS AUTHORIZATION"**: This statement, prominently displayed at the bottom in bold, is a clear patient-rights affirmation that many ROI forms omit.
- **Direct email address provided**: The header includes `OrthoCarolinaMedRec@orthocarolina.com`, giving patients a direct email contact for the Release of Information Department — a useful alternative to phone/fax for questions.
- **Reasonable turnaround time**: The stated 5-7 business day turnaround is shorter than many providers (form-3 states 14 business days), though this older form's timeline may no longer be honored.
