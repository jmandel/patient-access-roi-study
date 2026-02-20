# Evaluation: Michigan Medicine – form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is an **older version** (dated September 2011, version "VER: B/11, HIM: 09/11") of Michigan Medicine's "Authorization to Release Copies of a Medical Record" form. It uses the legacy branding "University of Michigan Health System (UMHS)" rather than the current "Michigan Medicine" name. The subtitle reads "(Patient Requests Information To Be Sent From UMHS)."

This is the same type of document as form-1.pdf (the current 2024 version, "VER: A/24, HIM: 11/24"), but predates it by over 13 years. Form-3.pdf is unrelated — it is a "Request for Outside Records" form for requesting records *from* another organization. The form-2 document was found at a different subdomain (`medicine.umich.edu`) than the current form (`uofmhealth.org`), suggesting it was never taken down from the legacy hosting location.

The form is 2 pages, 260,121 bytes, with form identifier "70-10015" — the same identifier as the current form-1, confirming it is a prior revision of the same document (it also notes "Replaces: POD-0138").

## 2. FINDABILITY

According to retrieval notes, this form was discoverable via web search alongside the current version. It lives at `medicine.umich.edu/sites/default/files/content/downloads/AuthorizationToReleaseCopiesOfMedicalRecord_2011-Sept-08_FINAL_FILLABLE.pdf` — a long but at least descriptive URL that includes the date and "FILLABLE" designation.

The fact that this outdated 2011 form is still publicly accessible and indexed by search engines is a findability concern. A patient searching for Michigan Medicine's ROI form could encounter this version and not realize it is 13+ years out of date. Nothing on the form itself warns that it is superseded, and the branding ("University of Michigan Health System") may not be recognized as outdated by all patients.

The retrieval notes indicate the `medicine.umich.edu` domain required browser-based download due to Cloudflare bot blocking on curl requests — a minor technical barrier for programmatic access, though patients downloading via browser would not be affected.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present; full text is extractable (9,223 characters across 2 pages). Not an image-only scan.
- **Fillable fields**: Despite the filename containing "FILLABLE," the metadata reports `fillable_field_count: 0`. This suggests the fillable fields may have been flattened, or the extraction tool could not detect them. Either way, the form does not appear to function as a fillable PDF in its current state — a significant gap given the filename promise.
- **Font count**: 14 fonts embedded, suggesting reasonable typographic structure.
- **Embedded images**: 4 images (likely logos/headers).
- **Digital design**: The form was designed digitally (not a scan), with structured layout and typed text. However, it relies on underline blanks (`___________`) for data entry, which is typical of print-oriented design.
- **File size**: 260 KB for 2 pages — reasonable.

## 4. CONTENT DESIGN

**Structure and organization**: The form uses a numbered section approach (sections 1–8) that progresses logically: voluntariness statement → patient info → recipient → purpose → record set → expiration → revocation → signature → payment. Page 2 repeats the header and adds supplemental information (submission instructions, fee schedule).

**Clarity**: The language is somewhat formal but generally understandable. Section 1 opens with a clear voluntariness statement: *"This authorization is voluntary. I understand that the University of Michigan Health System (UMHS) will not base treatment, payment, enrollment, or eligibility for benefits on my signing this document."* The re-disclosure warning in section 7 is plain: *"Once information has been disclosed, UMHS can no longer protect it from further disclosure."*

**Record selection**: Sections 3–4 offer a distinctive "Package" system with three predefined packages:
- **Package 1**: Key clinical documentation for the past 24 months
- **Package 2**: All clinical written documentation for a date range (more comprehensive)
- **Package 3**: Key clinical documentation related to a specific incident date

Section 3 also cross-references recommended packages to disclosure purposes (e.g., "Continuation of Care → Package 1"). This is a thoughtful design that helps patients select appropriate records without needing to understand medical record taxonomy. Additionally, granular options exist for lab reports, radiology reports, imaging by modality (MRI, CT, ultrasound, X-rays, mammograms), and billing information.

**Layout**: The form is dense but functional. Page 1 crams patient info, recipient, purpose, and full record selection into a single page. The fee schedule on page 2 is presented in a readable format with clear per-page rates.

**Length**: 2 pages is appropriate for this level of content.

## 5. PATIENT-CENTEREDNESS

**Patient self-request**: Section 2 includes a "Myself" checkbox, making clear this form can be used by patients requesting their own records — not just third-party releases. The subtitle "(Patient Requests Information To Be Sent From UMHS)" reinforces this.

**Delivery options**: Four delivery methods are offered: eDelivery (secure web link), Fax, US Mail, and Certified Overnight Delivery (with extra charge noted). The eDelivery option is notable for a 2011-era form.

**Scope options**: Strong. Patients can choose from three predefined packages, specify date ranges, and select specific record types (lab, radiology by modality, billing). The package system with cross-referenced recommendations helps guide patients who may not know what to request.

**Turnaround time**: Disclosed as "seven business days" average — clear and reasonable.

**Submission methods**: Three options listed: delivery to any UM Hospital or Health Center registration desk, mail, or fax. In-person delivery is available but not required.

**Rights language**: The form references voluntariness and revocation rights but does not cite HIPAA § 164.524, the Right of Access regulation, or any specific federal/state law. No mention of EHI export or bulk data access.

**Fee schedule**: Disclosed directly on the form:
- Patients: Pages 1–20 at $1.10/page, pages 21–50 at $0.55/page, pages 51+ at $0.23/page
- Attorneys/Insurance: Same per-page rates plus a $22.13 clerical fee
- Microfiche copies at $2.00/page

The payment section (section 8) states: *"Should your record fees exceed 50.00, you will be contacted to approve the fee before your request will be processed."* This is a reasonable safeguard but creates a potential processing delay.

**Third-party vendor**: Payment is directed to "HealthPort" — an external records vendor, indicating the institution outsources ROI processing.

## 6. COMPLIANCE

**Expiration**: Section 5 states authorization expires on a specified date or event, defaulting to 60 days from signature if left blank. This is a reasonable default.

**Revocation**: Section 6 clearly explains that revocation must be in writing, applies prospectively, and includes the insurance coverage exception. This language is standard and compliant.

**Psychotherapy notes**: Section 1 correctly notes: *"A separate form is required for release of psychotherapy (progress) notes"* — appropriately separating these from standard PHI requests per HIPAA requirements.

**Fee structure**: The per-page fee model ($1.10 for first 20 pages) predates current HIPAA guidance favoring flat fees or cost-based fees for patient access requests. The current (form-1) version has been updated with flat electronic delivery fees ($6.89), but this legacy form still shows the older per-page structure. For a patient requesting their own records, per-page fees may exceed what HIPAA's "reasonable, cost-based" standard allows, though Michigan's Medical Records Access Act (MCL 333.26269) does authorize per-page fees.

**Sensitive information handling**: Section 4 includes an explicit, broad consent statement covering alcohol/drug treatment, psychological counseling, HIV/AIDS, STDs, TB, hepatitis, and genetic information. This bundled disclosure of sensitive categories within the main authorization may be at odds with 42 CFR Part 2 (substance use disorder records), though the form does not specifically call out Part 2 compliance.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Outdated form still publicly accessible and search-indexed**: This 2011 form remains available on `medicine.umich.edu` without any deprecation notice. A patient could submit this form with outdated contact information, fee schedules, and branding, potentially causing processing delays or confusion. The mailing address (2901 Hubbard Rd #2722) differs from the current form's address (3621 S. State Street 700 KMS Place).
- **Per-page patient fees**: The $1.10/page rate (for pages 1–20) could result in substantial charges for patients requesting their own records. A 50-page request would cost $28.15 under this schedule. While authorized by Michigan state law, this conflicts with HIPAA's preference for reasonable, cost-based fees for patient self-access.

### ⚠️ AMBIGUITIES

- **"FILLABLE" filename vs. non-fillable reality**: The filename explicitly promises `FINAL_FILLABLE.pdf`, but the metadata shows zero fillable fields. Patients expecting interactive form fields will find only static blanks. It is unclear whether the fields were lost in a file conversion or were never functional.
- **Sensitive records bundling**: Section 4's consent covers substance use disorder records alongside general PHI. It is unclear whether submitting this form alone is sufficient to release 42 CFR Part 2-protected substance use records, or whether additional consent is required. The current form (form-1) references a separate form (70-10232) for alcohol/substance use disorder information, but this older version does not.
- **"HealthPort" as payee**: The instruction to make checks payable to "HealthPort" names a third-party vendor without explaining who they are or their relationship to UMHS. This could confuse patients who expect to pay the hospital directly.

### ❌ ERRORS

- **Outdated branding**: References "University of Michigan Health System (UMHS)" throughout — the organization rebranded to "Michigan Medicine" in 2017. This makes the form appear unofficial or abandoned.
- **Potentially outdated contact information**: The address (2901 Hubbard Rd #2722), phone (734-936-5490), and fax (734-936-8571) may or may not still be valid. The current form-1 lists a different mailing address (3621 S. State Street 700 KMS Place, Bay 11).
- **Fee amounts likely outdated**: The fee schedule references 2011-era rates. The current form-1 lists 2024 rates that are structured differently (flat $6.89 for electronic delivery to patients vs. per-page for this form). A patient using this form's fee schedule would have incorrect cost expectations.

### ✨ BRIGHT SPOTS

- **Package-based record selection**: The three-package system with cross-referenced recommendations to disclosure purposes is a genuinely helpful design pattern. It anticipates that patients don't know medical record taxonomy and guides them to appropriate selections. This concept carried forward into the current form-1.
- **eDelivery option in 2011**: Offering electronic delivery via secure web link in a 2011-era form was forward-thinking. Many organizations still do not offer this option in 2025.
- **Fee approval threshold**: The $50 approval threshold before processing (*"you will be contacted to approve the fee"*) protects patients from unexpected large charges.
