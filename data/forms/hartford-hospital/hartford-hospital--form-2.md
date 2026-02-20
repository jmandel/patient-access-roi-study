# Hartford Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is an **Institute of Living–specific** "Authorization to Disclose/Obtain Health Information" (form number HH Forms 573008, Rev. 05/12). The Institute of Living is the psychiatric facility within Hartford Hospital. This form is a specialized variant of the system-wide Hartford HealthCare ROI form.

The organization also publishes a newer, system-wide form (form-1.pdf / form-3.pdf, HH Forms 571559, Rev. 11-2022) that covers all Hartford HealthCare facilities including the Institute of Living. Form-2 appears to be an **older, facility-specific predecessor** — its revision date (May 2012) predates the current system-wide form (November 2022) by over a decade.

Notably, form-2 uses a **two-column layout** with separate columns for "FILL OUT FOR INSTITUTE OF LIVING TO DISCLOSE" and "FILL OUT FOR INSTITUTE OF LIVING TO OBTAIN," whereas the newer system-wide form consolidates these into a single section labeled "FILL OUT BELOW TO DISCLOSE/OBTAIN."

## 2. FINDABILITY

Per the retrieval notes, form-2 was found via web search results and is hosted at `hartfordhospital.org/File%20Library/Hartford%20Hospital%20Forms/Consent%20Forms/Release%20of%20Medical%20Records/573008.pdf`. It was **not** linked from the main Hartford HealthCare medical records landing page (`hartfordhealthcare.org/patients-visitors/patients/medical-records`), which only links to the current system-wide form (571559). This means a patient navigating the official medical records page would not encounter this form at all — it is discoverable only through web search or direct URL knowledge.

The URL path structure (`Consent Forms/Release of Medical Records/573008.pdf`) is moderately descriptive but uses an internal form number as the filename rather than a human-readable name. A patient encountering this form via search might be confused about whether it is the correct or current form to use.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 40,428 bytes (≈40 KB) — very small, appropriate for a 2-page document
- **Pages**: 2
- **Text layer**: Present; full text is extractable (5,915 characters)
- **Fillable fields**: **0** — the PDF contains no interactive form fields despite having numerous blanks (patient name, date of birth, addresses, checkboxes for record types, signature lines). All checkboxes and text fields must be printed and filled by hand
- **Font count**: 7 fonts
- **Embedded images**: 2 (likely the barcode header `*104507*`)
- **Scan status**: Not an image-only scan — it has a proper text layer

The form is clearly a **print-oriented design digitized as a static PDF**, not a digital-first form. The complete lack of fillable fields means a patient must print, hand-complete, and then mail, fax, or deliver the form physically. The small file size is a positive, but the absence of any interactive elements is a significant accessibility gap.

## 4. CONTENT DESIGN

**Length**: 2 pages. Page 1 contains the authorization fields; page 2 contains legally required notices about HIV, psychiatric, and substance abuse records. This is appropriately concise.

**Layout**: The two-column structure on page 1 (disclose vs. obtain) adds complexity. A patient requesting their own records must determine which column to complete, which is not self-evident. The column headers — "FILL OUT FOR INSTITUTE OF LIVING TO DISCLOSE" and "FILL OUT FOR INSTITUTE OF LIVING TO OBTAIN" — use institutional perspective rather than patient perspective.

**Record type options**: The form offers 13 checkbox categories: History & Physical, Discharge Summary, ED Record, Psychiatric Intake & Eval, Consultations, Laboratory Reports, Radiology Reports, EKG/EEG Reports, Psych/Neuro testing, Psychosocial Assess., Progress Reports/TPR, Billing Records, Entire Record, plus an "Other" blank. The psychiatric-specific categories (Psychiatric Intake & Eval, Psych/Neuro testing, Psychosocial Assess.) reflect its IOL focus.

**Purpose options**: Medical, Legal, Disability, Insurance, "At the request of the patient," and Other.

**Delivery methods**: Mail, Verbal, Fax, Pick-up, and Review. Notably **missing** are "Electronic" and "MyChart Plus" options that appear on the newer system-wide form (571559).

**Language**: The form uses reasonably clear language but is written from an institutional/legal perspective. The opening sentence — "Subject to the statements printed on the back, I, the undersigned patient or legal representative, hereby authorize the use and disclosure of health information including, if applicable, information relating to the diagnosis or treatment of mental illness, drug and/or alcohol abuse and HIV related information" — is a single dense sentence that packs in multiple legal concepts.

**Page 2 notices**: Three blocks covering HIV-related information, psychiatric information, and drug/alcohol abuse records. These are legally required re-disclosure notices. The newer form (571559) adds a fourth notice for reproductive health care services, which this older form lacks.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose authorization** that does not distinguish between a patient requesting their own records and a third-party release. The purpose checkbox "At the request of the patient" is the only indicator that self-request is contemplated, but the form's structure is fundamentally designed around third-party disclosure scenarios.

**Scope control**: Patients can specify dates of treatment and select from 13 record type categories plus "Entire Record." This provides reasonable granularity.

**Format/delivery options**: No electronic delivery option. The available methods (Mail, Verbal, Fax, Pick-up, Review) are all analog. The newer system-wide form adds "Electronic" and "MyChart Plus" — this form's absence of digital delivery options reflects its 2012 vintage.

**Rights information**: The form states "I understand that my treatment or continued treatment by the Institute of Living is in no way conditioned on whether or not I sign this authorization and that I may refuse to sign it" and "I understand that I may inspect or copy the information to be used or disclosed. I understand there is a charge for copies." There is no reference to HIPAA § 164.524, no mention of patient right of access, and no discussion of EHI export or bulk data.

**Expiration**: "This authorization will be valid for a period of one year from the date below." Unlike the newer form, there is no option for the patient to set a custom expiration date.

**Revocation**: "I may revoke this authorization at any time by notifying Patient Relations in writing."

**Submission address**: Health Information Management, 80 Seymour Street Bliss 139, Hartford, CT 06102-5037. Only a single physical address — no fax number for submission is provided in the submission instructions (though a fax number appears in the header: 860-545-6764).

## 6. COMPLIANCE

**Fee disclosure**: The form mentions "I understand there is a charge for copies" without specifying amounts. This is vague but not necessarily non-compliant — HIPAA allows reasonable cost-based fees for patient access requests.

**Signature requirements**: Physical signature required. The form specifies "White Copy – Medical Record / Yellow Copy - Patient," indicating it was designed as a multi-part carbon form for in-person completion. No electronic signature option is mentioned.

**Minor consent**: States "The parent of legal guardian must sign this authorization if the patient is a minor (under age 16)" — notably uses age 16 as the threshold rather than 18. This appears to reflect Connecticut law regarding minors' capacity. Also states "Minors receiving drug abuse treatment or treatment of venereal disease may sign their own authorization."

**No notarization requirement**: The form does not require notarization.

**No in-person-only restriction**: While the carbon-copy language implies in-person design, the form does not explicitly restrict submission to in-person only. Authorization can be sent to the listed HIM address.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"White Copy – Medical Record / Yellow Copy - Patient"**: This carbon-copy language strongly implies the form was designed for in-person completion only. A patient downloading this PDF has no way to produce a "Yellow Copy." This creates an implicit barrier to remote submission and suggests the organization has not updated this form for digital use in over a decade.

### ⚠️ AMBIGUITIES

- **Two-column layout confusion**: A patient requesting their own records must determine whether to complete the "DISCLOSE" column (Institute of Living sends records to the patient) or the "OBTAIN" column (Institute of Living requests records from another provider). The form does not explain this distinction in patient-friendly terms.
- **Fax number inconsistency**: The header shows "Fax: 860-545-6764" but the submission instructions give only a physical address (Bliss 139). It is unclear whether faxing the completed form is an accepted submission method. The newer system-wide form clarifies this with "HH/IOL Health Information Management, 80 Seymour St, Bliss 104, Hartford, CT 06102 – Fax# 860.545.6764 or 545.6446."

### ❌ ERRORS

- **Typo**: "If signed y the legal Representative attach appropriate documentation to verify authority" — missing the letter "b" in "by."
- **Outdated form still publicly accessible**: This 2012 form (573008) remains downloadable despite being superseded by the 2022 system-wide form (571559). A patient finding this via search may use an outdated form that lacks current delivery options (electronic, MyChart Plus) and current legal notices (reproductive health care services under Connecticut law). The form is listed on `hartfordhospital.org` but not linked from the current medical records page — creating a ghost document that search engines still index.
- **Missing reproductive health notice**: The newer form (571559) includes a "REPRODUCTIVE HEALTH CARE SERVICES INFORMATION" notice on page 2 that this form lacks, potentially reflecting a post-2012 change in Connecticut law that this form has not been updated to address.

### ✨ BRIGHT SPOTS

- **Psychiatric-specific record categories**: The inclusion of categories like "Psychiatric Intake & Eval," "Psych/Neuro testing," and "Psychosocial Assess." shows thoughtful tailoring to the Institute of Living's psychiatric patient population, giving patients meaningful granularity over sensitive mental health records.
