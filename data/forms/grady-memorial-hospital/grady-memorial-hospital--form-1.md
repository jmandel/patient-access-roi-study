# Grady Memorial Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is titled **"Patient Authorization for Disclosure of Protected Health Information"** and is the current/primary ROI form for Grady Health System. It is a 2-page document (195,547 bytes) with revision date "24-40 (Rev 9/08; 3/12, 5/15, 2/22)" — the most recent revision among the three forms found.

Two other forms were retrieved for this organization:
- **form-2.pdf**: An older version of the same authorization form with an earlier revision date (Rev 9/08; 3/12, 5/15 — missing the 2/22 update). It has a slightly different layout and uses Ethiopian Unicode checkmarks (፬) rather than standard checkbox symbols.
- **form-3.pdf**: A combined 3-page document bundling COVID-19-era instructions (drop-off, mail, electronic submission options, fee disclosure of "$6.50 max," processing times, and CIOX Health portal details) with the older form-2 content.

Form-1 appears to be the standalone, updated version currently linked from the medical records page. It adds several improvements over form-2, including an explicit "Electronic via Encrypted Email" delivery format option and a "Diagnostic Imaging" section with CD release options.

## 2. FINDABILITY

Findability was straightforward. Per the retrieval notes, web searches for `Grady Memorial Hospital Atlanta GA "authorization" "release" "health information" form PDF` "immediately found the main authorization form PDF and the medical records page." The form is directly linked from https://www.gradyhealth.org/medical-records/ with a descriptive URL (`/wp-content/uploads/medicalrecords.pdf`). No login or portal access was required. No bot-blocking or broken links were encountered.

The URL filename `medicalrecords.pdf` is reasonably descriptive, though not as specific as it could be (doesn't indicate "authorization" or "release"). The medical records page itself provides clear context and instructions for what the form is for.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text extraction yields 6,376 characters, confirming this is a digitally-created document, not a scan.
- **Fillable fields**: Zero. Despite being a digital-origin PDF with 12 fonts, there are no interactive form fields. All blanks are represented as underscores (`_____`) requiring the patient to print and hand-fill or use a PDF annotation tool.
- **File size**: 195,547 bytes for 2 pages — reasonable.
- **Digital-first design**: Partially. The document was clearly created digitally (not scanned), but it was designed with a print-and-fill workflow in mind. The absence of any fillable fields in a form with numerous blanks and checkboxes is a significant missed opportunity for digital accessibility.

## 4. CONTENT DESIGN

**Length**: 2 pages is appropriate for the amount of content. Page 1 contains the authorization body; page 2 has the signature block and documentation requirements.

**Organization**: The form follows a logical flow: patient demographics → from/to disclosure parties → date range → record type selection → purpose → format/method → legal notices → signature → documentation requirements. Sections are clearly delineated.

**Record type granularity**: The form offers detailed record type selections organized into three categories:
- *Hospital Visits*: 11 options (Entire Medical Record, Operative Notes, Abstract of Records, Progress Notes, Diagnosis, Radiology Reports, H&P, Lab Reports, Consultation Notes, Discharge Summary, Other)
- *Office Visits*: 9 options (Diagnosis, Progress Notes, H&P, Consultation Report, Immunization Records, Radiology Reports, Lab Reports, EKG/Cardiology Reports, Pathology Reports)
- *Diagnostic Imaging*: 5 options (Released on CD, X-Ray, CT Scan, MRI, Cardiac Imaging)

**Clarity**: The opening instruction is clear: "Please fill out form in its entirety. If any selection is incomplete, this form may be considered invalid and the request may not be processed." The introductory sentence ("By completing this form, I am granting Grady Health System ('Grady') permission to release/disclose certain information in my medical record") is reasonably plain. Legal language in the bullet points at the bottom is denser but generally understandable.

**Sensitive information notice**: The form includes a blanket statement: "Information disclosed may contain information about alcohol/drug abuse, mental/behavioral health, sexually transmitted diseases, HIV and/or AIDS." This is presented as informational rather than requiring separate consent for each sensitive category — a notable design choice. Unlike form-2, which has explicit checkboxes for HIV/AIDS and mental health records, form-1 handles these categories by general notice.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose authorization form, not specifically designed for patient access to their own records. The "To/From" structure frames it as disclosure between two parties. However, the form does accommodate patient access: the purpose options include "Personal," and the documentation requirements section on page 2 explicitly lists "Patients Requesting Their Own Medical Records" as the first category.

**Scope options**: Good. Patients can specify date ranges ("From ___ to ___"), select specific record types from ~25 checkbox options, and choose their purpose.

**Format options**: The form offers three release formats:
- Paper
- CD
- "Electronic via Encrypted Email: ____________"

And four delivery methods:
- Mail
- Pick Up
- Email
- Fax (Continuity of Care Only)

The encrypted email option is a notable positive — many provider forms lack any electronic delivery option.

**Right of Access language**: The form does not reference HIPAA § 164.524 or explicitly mention the patient's right of access. It does state: "I understand that I do not have to sign this Authorization to be treated at Grady" (with standard exceptions for third-party physicals and research), which partially addresses patient rights.

**EHI Export / bulk data**: No mention of electronic health information export, patient portal access, or USCDI/bulk data options.

**Fee disclosure**: The form states "Requests for copies of medical records are subject to reproduction fees in accordance with federal/state regulations" but does not disclose specific amounts. (Form-3's cover page mentions a $6.50 cap, but that information is not included in form-1 itself.)

## 6. COMPLIANCE

**Expiration**: "This authorization will expire one (1) year from the date of signing unless I revoke it in writing, or indicate an event or earlier date here: ___." One year is a standard and reasonable expiration period.

**Revocation**: Clearly stated — patient can revoke at any time by written notice to the HIM Department.

**Treatment conditioning**: Appropriately states authorization is not required for treatment (with standard exceptions).

**ID requirements**: Government-issued photo ID is required for all requesters. For patients requesting their own records, the requirements are: (1) signed authorization form, (2) government-issued photo ID. This is reasonable identity verification.

**Representative pickup**: If a representative picks up records requested by the patient, both the patient's and the representative's government-issued photo IDs are required. The form also asks for the representative's name to be listed on the form.

**Liability waiver**: The form includes: "I will not hold Grady, its officers, trustees, employees, agents, or contractors responsible for anything that may happen from the use or release of my PHI." This is a broad hold-harmless clause that could discourage patients from filing complaints about improper disclosures.

**SSN collection**: The form requests "Last Four of SSN" — while only requesting the last four digits (not the full SSN), collecting any portion of the Social Security Number on an authorization form raises data minimization concerns. Date of birth alone is generally sufficient for patient identification alongside name and photo ID.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Electronic delivery option**: The form explicitly offers "Electronic via Encrypted Email" as a release format, with a field for the email address. This is uncommon among ROI forms and represents a meaningful patient convenience.
- **Multiple delivery methods**: Offering mail, pick up, email, and fax gives patients flexibility in how they receive records.
- **Clear documentation requirements**: Page 2's structured breakdown of what's needed for patients, representatives, and third parties is well-organized and helps set expectations upfront.
- **"Personal" purpose option**: Including "Personal" alongside Continuity of Care, Insurance/Billing, and Legal acknowledges that patients may want their records for their own use.

### 🚩 RED FLAGS
- **Broad liability waiver**: "I will not hold Grady... responsible for anything that may happen from the use or release of my PHI" is an unusually sweeping hold-harmless clause. Patients should not be asked to waive their right to hold a provider accountable for unauthorized disclosures as a condition of requesting their own records.
- **Completeness barrier**: "If any selection is incomplete, this form may be considered invalid and the request may not be processed" — while understandable operationally, this language could be used to reject forms for minor omissions, creating a barrier to access.

### ⚠️ AMBIGUITIES
- **Sensitive information handling**: The statement "Information disclosed may contain information about alcohol/drug abuse, mental/behavioral health, sexually transmitted diseases, HIV and/or AIDS" is ambiguous about whether the patient is consenting to release of these categories or merely being notified. Form-2 handles this more clearly with explicit checkboxes for HIV/AIDS and mental health records.
- **Fee opacity**: Fees are referenced as being "in accordance with federal/state regulations" but no specific amounts are disclosed on this form. Patients have no way to know the cost before signing. (The $6.50 cap appears only in form-3's separate cover page.)
- **"Abstract of Records"**: Defined in a footnote as "history and physical, operative notes, consultation notes, and discharge summary" — but the asterisk (*) that triggers this footnote is easy to miss, and the term "abstract" itself may confuse patients.

### ❌ ERRORS
- **No fillable fields**: A digitally-created PDF with 12 fonts and zero fillable form fields is a design deficiency. The form's digital origin makes this an oversight rather than a technical limitation.
