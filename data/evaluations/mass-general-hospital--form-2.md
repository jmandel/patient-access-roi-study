# Massachusetts General Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an older version of MGH's "Authorization for Release of Protected or Privileged Health Information" form, version MGB00087 (11/21) — dated November 2021. It shares the same form number (MGB00087) as the current version (form-1.pdf, dated 06/24), confirming it is a superseded edition of the same document rather than a distinct form.

The form was found at a URL under the imaging subdirectory of massgeneral.org (`/assets/mgh/pdf/imaging/forms/medical-records-release-mgh-english.pdf`), suggesting it was uploaded for the radiology/imaging department but never updated when the 06/24 revision was published. This is one of three versions found for MGH:

- **form-1.pdf** (MGB00087 06/24): Current version, hosted on massgeneralbrigham.org, 78 fillable fields, 569 KB
- **form-2.pdf** (MGB00087 11/21): This document — older version, hosted on massgeneral.org under imaging, 0 fillable fields, 104 KB
- **form-3.pdf** (84182MGH 12/16): Oldest version, still references "Partners HealthCare System," 0 fillable fields, 601 KB

The content and structure are substantively identical to the current form-1 — same five sections (A–E), same sensitive-information consent categories, same mailing address. The differences are cosmetic (ALL CAPS headings, slightly different layout) and the absence of fillable form fields.

## 2. FINDABILITY

Per the retrieval notes, MGH's ROI forms were easy to find via standard web searches. However, this specific version (form-2) lives at an unintuitive URL path (`/imaging/forms/`) that is unlikely to be the first result a patient encounters. It is not linked from the main medical records or patient resources pages — it appears to be a stale copy left behind in a departmental subdirectory. A patient searching the massgeneral.org domain directly (rather than the parent massgeneralbrigham.org domain) could plausibly land on this outdated version rather than the current one, particularly if searching for imaging-related records.

The filename itself (`medical-records-release-mgh-english.pdf`) is descriptive and clear, but carries no version indicator in the URL to signal that it may be outdated.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (5,028 characters) is extractable, enabling copy-paste and assistive technology.
- **Fillable fields**: Zero. This is a flat PDF — patients must print and hand-fill. This is a significant downgrade from the current form-1, which has 78 fillable fields.
- **File size**: 104 KB for 2 pages — reasonable, though the 6 embedded images (likely logos or graphical elements) contribute to the size without adding fillability.
- **Font count**: 12 fonts, more than the current version's 10, suggesting slightly less streamlined typography.
- **Digital-first design**: No. The instruction "Please print all information clearly in order to process your request in a timely manner" confirms this is designed as a print-and-fill document. There is no way to complete this form digitally.

The lack of fillable fields is the most important technical deficiency. A patient who downloads this version instead of form-1 gets a materially worse experience.

## 4. CONTENT DESIGN

**Length**: 2 pages, appropriate for the amount of information collected. This matches the current version.

**Structure**: Five clearly labeled sections (A–E):
- A. Patient Information (name, DOB, MRN, address, phone)
- B. Permission to Share (from/to, purpose, delivery method)
- C. Information to Be Released (12 record-type checkboxes with date fields)
- D. Sensitive Information Consent (7 categories requiring affirmative "Yes")
- E. Terms and Conditions (7 bullet points plus signature)

**Clarity**: The language is functional but dense. Section E uses legalistic constructions like "Mass General Brigham cannot control how the recipient uses or shares the information, and that laws protecting its confidentiality at Mass General Brigham may or may not protect this information once it has been released to the recipient." The 42 CFR Part 2 disclosure in Section D is verbatim regulatory text: "Federal rules prohibit any further disclosure of this information unless further disclosure is expressly permitted by written consent of the person to whom it pertains or as otherwise permitted by 42 CFR Part 2."

**Typography**: Uses ALL CAPS for section headers and field labels (e.g., "PATIENT NAME:", "DATE OF BIRTH:", "MEDICAL RECORD #"), which reduces readability compared to the mixed-case style used in the current form-1.

**Layout**: The extracted text suggests a two-column layout for some sections (record types in Section C are listed in two columns). The "For copies of radiology images or films, contact (617) 726-1798 / Fax (617) 724-0264" note appears at the top of page 1, appropriate given this version's placement in the imaging subdirectory.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose ROI form, not specific to patient self-access. Section B frames the interaction as "I give my permission to share my protected health information" and asks the patient to specify a recipient. A checkbox allows the patient to request records be "mailed to the patient at the above address (section A)," but the form's default orientation is toward third-party release.

**Purpose options**: Six checkboxes — Medical Care, Insurance, Legal, Personal, School, Other. "Personal" is the closest option to patient self-access, but it is not labeled as such. The note "Copying fees may apply" appears next to Insurance, Legal, and Other purposes — but not Medical Care, Personal, or School.

**Scope options**: Good granularity. Section C offers 12 record-type checkboxes (Medical Record Abstract, Clinic Visit Notes, Discharge Summary, Lab Reports, Operative Reports, Pathology Reports, Radiation Reports, Radiology Reports, Photographs, Billing Records, plus "Other"). Each requires date specification — the form states patients "MUST specify dates."

**Delivery options**: Four methods listed:
- Mass General Brigham Patient Gateway (if available)
- Secure Email
- Fax
- Paper Copy via Mail

Electronic delivery options (Patient Gateway, Secure Email) are present, which is a positive feature.

**Right of Access language**: The form does not reference HIPAA § 164.524 or explicitly state the patient's right of access. Section E notes that "This authorization is voluntary" and that treatment/payment will not be conditioned on signing, but there is no affirmative statement of the patient's legal right to obtain their records.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

## 6. COMPLIANCE

**Fees**: "Copying fees may apply" is noted for Insurance, Legal, and Other purposes. No fee schedule is provided. The selective application of fees (not flagged for Personal or Medical Care purposes) is appropriate but the vagueness about amounts could concern patients.

**Expiration**: "This authorization will automatically expire 6 months from the date signed unless otherwise specified:__________" — a 6-month default expiration with an option to specify a different period. This is standard practice.

**Revocation**: The form states patients may cancel "at any time by submitting a written request to the Department or Office where I originally submitted it." For 42 CFR Part 2 records specifically, "This consent may be revoked upon oral or written request." The general revocation requiring written request (as opposed to also accepting oral revocation) is standard but slightly less patient-friendly than allowing oral revocation for all record types.

**Photo ID for pickup**: The "For Internal Use Only" section at the bottom lists pickup identification options (License, State ID, Passport, Other Photo ID), indicating in-person pickup is available but not required.

**No notarization required.** No witness requirement beyond the patient signature.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Stale form accessible at active URL**: This November 2021 version remains publicly accessible at a massgeneral.org URL with no indication that it is outdated. A patient could download this version thinking it is current and submit a form with no fillable fields, potentially causing processing delays. The current version (06/24) has 78 fillable fields and cleaner formatting — patients deserve to get that version.

### ⚠️ AMBIGUITIES

- **"Copying fees may apply" without specifics**: The asterisk-marked purposes (Insurance, Legal, Other) note that fees may apply, but no fee schedule is provided. It is unclear whether fees apply to patient self-access requests marked as "Personal," which would be governed by HIPAA's cost-based fee limitations under § 164.524(c)(4).
- **Mandatory date specification unclear**: The form states dates "MUST" be specified for records in Section C, but it is unclear what happens if a patient wants all records or doesn't know specific dates. This could create a barrier for patients requesting comprehensive records.
- **"Personal" purpose ambiguity**: It is not clear whether selecting "Personal" as the purpose triggers patient-access rights under HIPAA (with fee protections) or is treated as a general third-party release.

### ❌ ERRORS

- **Version mismatch with current form**: This document carries form number MGB00087 (11/21) but the current version is MGB00087 (06/24). Having two different versions of the same form number live at different URLs on related domains creates confusion and version-control risk.
- **Inconsistent contact information formatting**: The header shows "Phone: (617) 726-2361" with parenthetical area code formatting, while the radiology line uses "contact (617) 726-1798 / Fax (617) 724-0264" — a minor inconsistency but indicative of the form's age.

### ✨ BRIGHT SPOTS

- **Electronic delivery options**: The inclusion of Patient Gateway and Secure Email as delivery methods, even in this 2021 version, shows MGH was ahead of many organizations in offering digital delivery channels.
- **Granular sensitive-information consent**: Section D separately addresses seven categories of sensitive information (HIV, genetic screening, substance use disorder, mental health, social worker communications, domestic violence counseling, sexual assault counseling), giving patients fine-grained control over what is disclosed rather than using a single blanket consent.
- **Voluntary authorization statement**: Section E clearly states "This authorization is voluntary" and that "treatment, payment, health plan enrollment, or eligibility for benefits will not be affected if I do not sign this form" — an important patient protection clearly communicated.
