# Evaluation: Mercy Health - Springfield Regional Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

**Form title**: "Patient's Request to Access Protected Health Information ('PHI')"
**Source URL**: `https://www.mercy.net/content/dam/mercy/en/pdf/Mercy-Patients-Request-to-Access-Protected-Health-Information-Form_920.pdf`
**Form number**: MRC_36316 (5/19/22)
**Pages**: 2 | **File size**: 64,753 bytes

**Critical finding: This form belongs to the wrong organization.** It was downloaded from `mercy.net`, which is the Missouri-based Mercy health system. The target organization — Mercy Health - Springfield Regional Medical Center in Springfield, OH — is part of Bon Secours Mercy Health, whose website is `mercy.com`. These are two entirely separate health systems that happen to share the "Mercy" name. The form's header references "Mercy Facility" generically, with no mention of Ohio, Bon Secours, or Springfield Regional Medical Center.

Among the four forms retrieved for this organization, this is the only one that is explicitly a **patient access** form (as opposed to a general third-party release authorization). The other forms found are:
- **form-2.pdf**: Authorization for Release of PHI, Youngstown-specific (mercy.com, correct system, wrong region)
- **form-3.pdf**: Authorization for Release of PHI, system-wide 2024 version (mercy.com, correct system, but image-only scan)
- **form-4.pdf**: Authorization for Release of PHI, Springfield-specific (mercy.com, correct system and region — the most relevant form)

## 2. FINDABILITY

This form was discovered through a general web search for Mercy Health Springfield authorization forms. Because "Mercy" is a common healthcare brand name, the search returned results from both mercy.net (Missouri) and mercy.com (Ohio). The form is hosted on mercy.net's content delivery infrastructure (`mercy.net/content/dam/mercy/en/pdf/...`), which is publicly accessible without authentication.

The form is **not findable** from the target organization's perspective — a patient visiting mercy.com or the Springfield Regional Medical Center webpage would never encounter this document. It appeared only as a web search artifact due to the shared "Mercy" branding. There is no link to this form from any Bon Secours Mercy Health page.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. Full text (5,170 characters) is extractable via `pdftotext`. The document is a digitally-created PDF, not a scan.

**Fillable fields**: Zero (0). Despite being a digital-origin document with 9 embedded fonts, no interactive form fields are provided. All blanks are represented as underscored lines (e.g., `Patient's Name: _ __________________________________________`). A patient would need to print, hand-fill, and return the form — or use a PDF editor to type on top of the lines.

**File size**: 64,753 bytes for a 2-page text document is compact and appropriate.

**Digital-first design**: The form was clearly created digitally (not scanned), with clean typography and structured layout, but it was designed with a print-and-fill workflow in mind. The absence of any fillable fields is a missed opportunity given the digital origin.

## 4. CONTENT DESIGN

**Length**: 2 pages. Page 1 covers patient identification, record type selection (18 checkbox categories), date range, recipient, format, and delivery method. Page 2 contains an acknowledgment of electronic delivery risks, fee disclosure, signature block, personal representative section, pickup acknowledgment, and an internal-use-only section. The length is proportionate.

**Record type granularity**: The form offers 18 specific record type checkboxes: Physician Office Notes, X-ray Reports, Mammogram Report, Discharge Summary, Laboratory Reports, Physician Orders, History/Physical, EKG, Emergency Department Record, Consultation Reports, Pathology Reports, Billing Statements, Operative Reports, Progress Notes, Abstract of Health Information, X-Ray Images, Radiology Images, and Other. This is notably granular — more categories than most ROI forms provide.

**Clarity**: Language is generally clear. The sensitive information disclosure paragraph is somewhat dense: "If the PHI I am requesting contains information about drug/alcohol abuse, mental health treatment, genetic information, sexually transmitted diseases, HIV/AIDS testing or treatment or any other sensitive information, by signing this Patient's Request to Access PHI form, I confirm that I am requesting access to this information, unless I otherwise state here: _______." This single run-on sentence handles a complex topic but could be more accessible.

**Organization**: Logically sequenced — identity → what records → who receives → format → delivery method → acknowledgments → signature. Clean visual hierarchy using bold headers and checkbox groupings.

**Font**: Uses 9 embedded fonts, suggesting varied formatting (likely bold, regular, different sizes). The extracted text appears readable, though exact point sizes cannot be verified from metadata alone.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This is explicitly titled "Patient's Request to Access Protected Health Information" — one of the rare forms that is specifically designed for patient self-access rather than third-party release. The "I request my PHI" framing centers the patient.

**Recipient options**: The form includes both "To me" and "To the following person/entity" options, making it clear that the primary use case is patient self-access.

**Format options**: Extensive. The form offers:
- Paper Copy
- PDF Attachment to E-Mail
- CD
- Uploaded to MyMercy Web Portal
- Other (open field)

**Delivery method options**: Also extensive — 8 distinct options:
1. Personal pick-up by patient
2. Personal pick-up by designee
3. In-person inspection at facility
4. Mailed
5. Secure email
6. Unsecure email
7. Faxed
8. Via MyMercy Web Portal

This breadth of delivery choices is uncommonly patient-friendly.

**Date range**: Includes "From Date" and "To Date" fields, with the helpful note: "(if dates are not specified, records will be provided for all dates of service)."

**Fee disclosure**: States "I understand that I may be charged a reasonable fee for the costs of labor for copying, postage, supplies as permitted by HIPAA Privacy Rule and state law." This is appropriate and references the HIPAA standard, though it does not specify actual amounts.

**Right of Access language**: Does not explicitly cite 45 CFR § 164.524 or use "Right of Access" terminology. However, the form's entire design is structured around patient access.

**EHI export**: No mention of electronic health information export or bulk data access.

## 6. COMPLIANCE

**Barriers**: No unreasonable barriers are apparent. No notarization requirement. No in-person-only submission requirement (multiple remote delivery methods are offered). No upfront fee amounts are imposed.

**Photo ID**: Not mentioned on this form (unlike the mercy.com forms which state "Photo ID required at the time of request").

**Expiration**: No explicit expiration or auto-revocation clause on this form.

**Authorization scope**: The form handles sensitive information (substance abuse, mental health, genetic, STD, HIV/AIDS) via an opt-out model — signing the form means you're requesting all such information unless you specify otherwise. This is patient-favorable for access requests.

**Electronic delivery acknowledgment**: The form includes a clear acknowledgment on page 2: "I understand that the CD is not secure and that I am responsible for protecting information on the CD. I also understand that unsecure/unencrypted e-mail is not secure and while in transit it can be intercepted and seen by others." This is transparent and appropriate.

**SSN collection**: Requests "Social Security # (Last 4 Digits)" — collecting even the last 4 digits of SSN is not required by HIPAA for records access and raises privacy concerns, though it is not uncommon.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Wrong organization entirely**: This form is from mercy.net (Mercy, Missouri), not mercy.com (Bon Secours Mercy Health, Ohio). A patient at Springfield Regional Medical Center who found and submitted this form would be sending it to the wrong health system. The web search conflation of two similarly-named organizations is itself a findability hazard.

### ⚠️ AMBIGUITIES

- **Facility identification is a blank line**: The form says "I request my PHI from the following Mercy Facility: ___________" — a free-text field with no list of valid facilities. A patient unfamiliar with the system's organizational structure could easily fill this in incorrectly.
- **"Other" format and delivery options** are open-ended but provide no guidance on what alternatives might be available.

### ✨ BRIGHT SPOTS

- **Explicitly a patient access form**: Unlike the vast majority of ROI forms which are generic release-to-third-party authorizations, this form is titled and structured specifically for patients requesting their own records. The "I request my PHI" language is clear and empowering.
- **8 delivery method options including unsecure email**: Offering unsecure email as a patient-chosen option (with appropriate risk acknowledgment) reflects genuine respect for patient autonomy and HIPAA's directive that patients may request delivery by unsecured means.
- **18 record-type checkboxes**: Unusually granular control over what records to request, including specific categories like Mammogram Report, EKG, and Radiology Images that many forms lump together.
- **Opt-out model for sensitive information**: Rather than requiring a separate authorization for sensitive records (substance abuse, mental health, HIV), the form defaults to including them and lets the patient opt out. This reduces barriers for patients seeking their complete record.
- **MyMercy Portal option**: Offering portal delivery as both a format and delivery method provides a modern electronic access path.
