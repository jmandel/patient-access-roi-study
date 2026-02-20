# Rhode Island Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the primary **"Authorization to Use or Disclose Protected Health Information"** form for the Brown University Health system (formerly Lifespan). It is a system-wide form that covers multiple affiliated facilities: Rhode Island Hospital/Hasbro Children's, The Miriam Hospital, Newport Hospital, and Brown Health Medical Group. The form was updated in October 2024 (filename: `Authorization-Release-PHI-Brown-Health-10152024-V2.pdf`) and reflects the system's recent rebrand from "Lifespan" to "Brown University Health."

A second form (form-2.pdf) was also found — a department-specific authorization for Lifespan Medical Imaging, still bearing older "Lifespan" branding (revised 2/2/2023). Form-1 is the general-purpose authorization applicable to Rhode Island Hospital; form-2 is a narrower imaging-department variant.

## 2. FINDABILITY

The form was **easy to locate**. Per the retrieval notes, the first web search immediately surfaced the form, and a site-specific search confirmed the URL and identified a dedicated medical records request page at `https://www.brownhealth.org/patients-visitors/request-medical-records`. No bot blocking, login walls, or other retrieval difficulties were encountered.

The source URL is hosted at a logical path (`/sites/default/files/2024-10/`) under the Brown Health website, though the filename — `Authorization-Release-PHI-Brown-Health-10152024-V2.pdf` — is machine-oriented (date-stamped, versioned) rather than human-friendly. A patient navigating the website would reach this via the "Patients & Visitors > Request Medical Records" path.

The form header lists phone and fax numbers for each facility's HIM department, plus a separate status-inquiry line. This is helpful for follow-up, though the header includes a California area code (858.244.1811) for attorney/insurance inquiries and a Massachusetts area code (978.922.0016) for patient status inquiries — suggesting outsourced ROI processing.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (4,520 characters), confirming this is a digitally-generated PDF rather than a scan.
- **Fillable fields**: **Zero**. Despite being a digital document, the form has no interactive form fields. Patients must print and hand-fill all information — name, DOB, address, checkboxes, dates, and signatures.
- **Page count**: 1 page.
- **File size**: 186 KB — reasonable for a single-page PDF.
- **Font count**: 37 fonts — unusually high for a one-page document, which may indicate complex formatting or embedded brand fonts.
- **Embedded images**: 2 (likely logos or header graphics).
- **Design origin**: This appears to be a born-digital document (not a scan), which makes the absence of fillable fields a missed opportunity. The layout and typography are clearly designed in a publishing tool, yet the form still requires printing.

## 4. CONTENT DESIGN

**Length and density**: The form compresses 11 numbered sections onto a single page. While brevity is generally positive, the result is a dense, tightly packed layout. The sections cover: facility selection, recipient, treatment dates, purpose, record format, information types, exclusions, privacy notices, re-disclosure warning, authorization terms, refusal rights, and signature.

**Clarity of language**: The legal sections (items 8–11) use formal regulatory language: *"I understand that my records are protected under the federal privacy laws and regulations and under the General Laws of Rhode Island..."* This is standard HIPAA authorization language but dense for a patient audience. No plain-language summary or explanatory guidance is provided.

**Organization**: The 11-section numbered structure is logical:
1. Which facility (checkboxes)
2. Recipient
3. Date range
4. Purpose
5. Record format
6. Record types
7. Exclusions
8–11. Legal terms and signature

**Record type granularity**: Section 6 provides a useful breakdown: Emergency Dept. Record, Operative/Path Report, Lab/X-ray Reports, Other Diagnostic Testing, Clinic/Office Visit, Consultation/Evaluation, After Visit Summary, Abstract, Discharge Summary, Other. It also includes a separate line for behavioral health requests (Assessment, Treatment Plan, Psychiatric Evaluation, Medications). The "Abstract" option is defined with a helpful footnote: *"Abstract includes: Facesheet, ED Record, H & P, D/C Summary, Consult, Operative report, Pathology report, test results, PT / OT / ST"*.

**Record format options**: Section 5 offers only two choices: "paper" or "CD disc." No electronic/digital delivery option (email, portal, secure link) is mentioned.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose authorization form**, not a patient-access-specific form. The structure (Section 2: "To release to" with a recipient field) frames it as a disclosure-to-third-party form. However, Section 4 does include "Patient Request" as a purpose checkbox, acknowledging that patients themselves may be the requestor. There is no separate, simplified workflow for patients requesting their own records under HIPAA's Right of Access.

**Scope options**: Patients can specify:
- Which facility (checkboxes for 5 entities)
- Date range (Section 3)
- Specific record types (Section 6, with ~10 categories)
- Exclusions for sensitive information (Section 7: sexual abuse, mental health, STIs, alcohol/drug, HIV)

**Format options**: Limited to paper or CD. No electronic delivery option is offered. This is a significant gap for patients seeking digital access to their records.

**Right of Access language**: The form does **not** reference HIPAA § 164.524 (Right of Access) or explain patient rights to access their own records. The legal language in Sections 8–11 addresses disclosure authorization under general HIPAA privacy rules but does not distinguish between patient access requests and third-party disclosures.

**EHI Export awareness**: No mention of electronic health information (EHI) export, bulk data, or TEFCA/interoperability.

**Fee disclosure**: Section 6 notes parenthetically: *"There may be a fee associated with this request."* This is vague — it does not specify fee amounts, fee schedules, or distinguish between patient-access fees (which HIPAA caps at a reasonable cost-based amount) and third-party release fees.

## 6. COMPLIANCE

**Authorization expiration**: Section 10 states the authorization *"will expire 1 year from the date signed below."* This is a reasonable expiration period. By contrast, the imaging-specific form-2 uses a 90-day expiration — significantly shorter.

**Revocation rights**: Section 10 clearly states patients can revoke in writing and that previously disclosed information is not subject to revocation.

**Right to refuse**: Section 11 states: *"I understand that I may refuse to sign this authorization and that my refusal to sign will not affect my ability to obtain treatment, payment, or my eligibility for benefits."* This is compliant HIPAA language.

**Liability release**: Section 9 includes: *"I release Brown University Health, its employees and my physicians from all liability arising from this disclosure of my health information."* This is a broad liability waiver embedded within a records authorization form.

**Sensitive information handling**: Section 7 allows patients to exclude specific sensitive categories from disclosure (sexual abuse, mental health, STIs, alcohol/drug, HIV). This appropriately acknowledges state-specific protections and 42 CFR Part 2.

**No notarization or in-person requirement**: The form does not require notarization or mandate in-person submission. Phone, fax, and mailing information are provided in the header.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Broad liability waiver**: Section 9 requires patients to *"release Brown University Health, its employees and my physicians from all liability arising from this disclosure of my health information."* Bundling a blanket liability release into a records authorization is aggressive and may discourage patients from exercising their rights.
- **No electronic delivery option**: Offering only "paper" and "CD disc" as format options in 2024 (even in a form revised October 2024) creates a barrier for patients seeking digital access to their records, especially given HIPAA's requirement that covered entities provide records in the electronic format requested by the patient if readily producible.

### ⚠️ AMBIGUITIES

- **Out-of-state phone numbers for a Providence, RI hospital**: The header lists 978.922.0016 (Massachusetts) for patient status inquiries and 858.244.1811 (San Diego, CA) for attorney/insurance inquiries. This suggests outsourced ROI fulfillment but is not explained, potentially confusing patients who expect to reach their local hospital.
- **Vague fee language**: *"There may be a fee associated with this request"* does not distinguish between patient-access fees (HIPAA-regulated) and third-party disclosure fees, nor does it provide any fee schedule or estimate.
- **"Brown Health Medical Group, Inc." vs. "Brown Health Medical Group Primary Care"**: Two separate checkboxes appear for what seem like closely related entities without explanation of the distinction.

### ❌ ERRORS

- **"CD disc"**: The term "CD disc" is redundant (CD already stands for "Compact Disc"). Minor, but reflects inattention to detail in a recently updated form.

### ✨ BRIGHT SPOTS

- **Granular record-type selection**: Section 6 offers approximately 10 specific record categories plus a behavioral health sub-section, giving patients meaningful control over what is disclosed. The "Abstract" definition footnote is a thoughtful addition.
- **Sensitive information exclusions**: Section 7 proactively lists five categories of sensitive information patients can exclude, appropriately respecting both federal (42 CFR Part 2) and Rhode Island state protections.
- **Multi-facility coverage with clear selection**: The single form serves multiple facilities within the system, with clear checkboxes — avoiding the need for patients to find separate forms for each entity.
- **Recent update**: Revised October 2024, reflecting current branding and presumably current regulations.
