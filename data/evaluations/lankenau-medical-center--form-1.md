# Evaluation: Lankenau Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **system-level "Authorization for Disclosure of Health Information" form** published by Main Line Health, the parent health system that operates Lankenau Medical Center. The form is not specific to Lankenau; it lists six facilities at the top with checkboxes: Bryn Mawr Hospital, Lankenau Hospital, Riddle Hospital, Bryn Mawr Rehabilitation, Paoli Hospital, and MLHC Physician Office. A patient would check the relevant facility before completing the form.

A second document (form-2.pdf) was also retrieved from a different URL on the same website. The two forms share essentially identical text content and structure. Key differences: form-1 is substantially larger (1.5 MB vs. 165 KB), has 41 fillable form fields while form-2 has zero, and form-1 carries document code `MLH900-331.0621` while form-2 carries `MLH900-331.0325` — suggesting form-2 is a more recent revision (March 2025 vs. June 2021). Notably, form-2 also includes a phone number (`484-476-1721`) in the instructions that form-1 omits, and form-2 lists a slightly different address (Suite 160 vs. Suite 110). Form-1 includes interactive PDF buttons ("PRINT", "SAVE AS", "EMAIL", "RESET") that form-2 lacks.

This evaluation covers **form-1.pdf** — the older but more technically interactive version.

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, a web search for `Lankenau Medical Center "authorization" "release" "health information" form PDF` immediately returned a direct PDF link. The source URL is descriptive: `mainlinehealth.org/-/media/files/pdf/basic-content/patient-services/authorizationdisclosurehealthinfo.pdf`. Multiple search strategies confirmed the same form. No login, bot blocking, or patient portal access was required.

The fact that two slightly different versions exist at two different URLs (`authorizationdisclosurehealthinfo.pdf` and `authorization-for-disclosure-of-health-information.pdf`) without any clear versioning indicator visible to patients could cause mild confusion — a patient could inadvertently use the older form.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and functional. The full text (6,922 characters) was extracted cleanly by pdftotext, with one minor artifact — checkboxes render as Khmer Unicode characters (`អ`) rather than standard checkbox symbols, suggesting a non-standard font mapping.

**Fillable fields**: 41 interactive form fields are detected, which is excellent. The form also includes action buttons for PRINT, SAVE AS, EMAIL, and RESET, indicating it was designed for digital completion. However, `fillable_field_names` is an empty array in the metadata, meaning the fields may lack accessible names — a potential issue for screen readers and assistive technology.

**File size**: At 1.5 MB for a 2-page form with no embedded images, the file is notably large. This is roughly 10x the size of form-2, which has identical content. The bloat likely stems from embedded fonts or the interactive form field infrastructure.

**Format**: PDF 1.6, 10 fonts, no embedded images. This is a digitally-authored form (not a scan), which is the right approach.

## 4. CONTENT DESIGN

**Length**: 2 pages — page 1 is the authorization form itself; page 2 is detailed instructions. This is a reasonable length.

**Structure**: The form follows a logical flow: (1) select facility, (2) authorize release from a named institution, (3) patient identification, (4) date range, (5) record type selection, (6) sensitive information consent, (7) rights acknowledgment, (8) recipient information, (9) purpose, (10) delivery method, (11) expiration/revocation, (12) signatures. This is well-organized.

**Record type granularity**: The form offers 10 checkbox options for record types: Complete Chart Copy, Abstract, Discharge Summary/Instructions, ER Record, Progress Notes, Medication Records, History and Physical, Consultations, Operative Report, and Other. The "Abstract" option is defined on page 2 (instruction #3) as a comprehensive subset including H&P, Discharge Summary, Progress Notes, Labs, Radiology, Op Reports, Pathology, Consultations, Cardiology, Neurovascular, Diagnostic, ER Notes, and Anesthesia.

**Language**: The form uses moderately formal language. The rights acknowledgment paragraphs are dense but substantive, explaining the 30/60-day response timeline, extension procedures, and appeal rights. The sentence beginning "I understand that Main Line Health may deny this request under limited circumstances..." is important but uses legalistic phrasing that could be simplified.

**Instructions page**: Page 2 provides numbered instructions covering who can sign (with detailed minor/deceased patient guidance), how to submit, delivery option availability by recipient type (presented as a clear table), and fee information. The signing authority guidance (instruction #7) is notably thorough, covering patients 18+, ages 14-18 with mental health/substance abuse nuances, under-14, and deceased patients — all reflecting PA-specific law.

## 5. PATIENT-CENTEREDNESS

**Patient access as a purpose**: The form explicitly offers "Patient personal use" as a checkbox purpose option, which directly supports HIPAA Right of Access requests. This is a positive feature — many forms only list third-party release purposes.

**Delivery options**: Unusually strong. Six delivery methods are offered: encrypted USB, MyChart (patient portal), printed paper with pick-up, printed paper with mail, fax, and encrypted email or third-party portal. The instructions page includes a helpful table showing which delivery options are available for which recipient type (patients get all options; providers, legal, and insurance get all except MyChart). The asterisk note that MyChart and Fax "may not be available due to file size" is a practical, honest caveat.

**Sensitive information handling**: The form correctly separates opt-in consent for AIDS/HIV, psychiatric care, and drug/alcohol treatment, stating that these categories will be excluded from any release unless specifically checked. This complies with 42 CFR Part 2 and PA mental health law.

**Right of Access language**: The form references the right to have a denial reviewed by "a licensed health care professional selected by Main Line Health who did not participate in the decision to deny my request," which aligns with HIPAA § 164.524(d)(4). However, the form does not explicitly cite HIPAA section numbers or use the phrase "Right of Access."

**EHI export**: No mention of electronic health information export, bulk data, or USCDI.

**Verbal consent provision**: The form includes a section for verbal release of mental health information when the patient "is physically unable to provide a signature," witnessed by two persons. This is an accessibility accommodation.

## 6. COMPLIANCE

**Fees**: The form states: "Main Line Health may charge a fee for obtaining copies of records, except for copies mailed directly to a healthcare facility or physician for continuing care purposes." Instruction #6 adds: "Records for all purposes except continuing care are subject to copying charges... An invoice will be delivered to you and payment will be expected prior to the records being delivered." This phrasing — "payment will be expected prior to the records being delivered" — could be read as conditioning delivery on prepayment, which could conflict with the HIPAA requirement that fees not be used to create unreasonable barriers to access. The fee amounts are not specified on the form itself.

**Expiration**: Authorization automatically expires in 12 months "unless otherwise revoked or indicated to expire on [date]" with the constraint "Date not to exceed 12 months." A 12-month default expiration is standard and reasonable.

**Submission methods**: The instructions list fax (610-356-3167), email (HIMROI@mlhs.org), and US Mail/Walk-in (3809 West Chester Pike, Suite 110, Newtown Square, PA 19073). Notably, there is no phone number listed in form-1 (form-2 adds one). Multiple submission channels including email are offered, which is good.

**Incomplete forms**: Instruction #1 warns that "Incomplete forms will be returned to the sender for completion." This is a standard but potentially burdensome policy — it depends on what the organization considers "incomplete."

**Response timeline**: The form commits to responding within 30 days (on-site records) or 60 days (off-site records), with a possible 30-day extension with written notice. This matches HIPAA's required timelines.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Prepayment language**: Instruction #6 states "payment will be expected prior to the records being delivered." Under HIPAA, covered entities may charge a reasonable cost-based fee for patient access requests but should not condition access on prepayment in a way that creates an unreasonable barrier. This language could deter patients from requesting records, particularly when fee amounts are undisclosed on the form.

### ⚠️ AMBIGUITIES

- **Two versions online with no guidance**: Form-1 (`MLH900-331.0621`) and form-2 (`MLH900-331.0325`) coexist at different URLs with different document codes, different fillable capabilities, and slightly different contact details (different suite numbers, form-2 adds a phone number). There is no indication on either form or on the website about which is current. A patient finding both could be confused about which to use.
- **"Authorization for Disclosure" framing**: The form is titled "Authorization for Disclosure of Health Information" — framing oriented toward release to third parties. While it does include "Patient personal use" as a purpose, the overall framing and language (e.g., "This information is to be disclosed to: Name of Person or Institution") may confuse patients who simply want their own records. A patient requesting their own records must fill in their own name as the "person" the information is disclosed to, which is unintuitive.

### ❌ ERRORS

- **Checkbox rendering artifact**: Checkboxes in the extracted text render as Khmer Unicode character `អ` rather than standard checkbox symbols, indicating a font encoding issue in the PDF. This does not affect visual rendering when viewing the PDF but would impair any text-based processing or accessibility tool that relies on extracted text.

### ✨ BRIGHT SPOTS

- **Excellent delivery options**: Six delivery methods including encrypted USB, MyChart portal, encrypted email, and third-party portal — with a clear table on page 2 showing availability by recipient type. This is among the most comprehensive delivery option sets observed.
- **Fillable PDF with action buttons**: 41 interactive fields plus PRINT, SAVE AS, EMAIL, and RESET buttons demonstrate genuine digital-first design intent. The EMAIL button is particularly notable — it suggests the form can be completed and submitted entirely electronically.
- **Detailed signing authority guidance**: Instruction #7 provides thorough, PA-law-compliant guidance covering multiple age groups, mental health treatment nuances, substance abuse consent, and deceased patients. This level of detail helps patients and representatives understand who is authorized to sign without needing to call the HIM department.
- **Sensitive information opt-in**: Clear, separate checkboxes for AIDS/HIV, psychiatric care, and substance abuse treatment, with explicit language that these categories are excluded unless the patient affirmatively opts in.
