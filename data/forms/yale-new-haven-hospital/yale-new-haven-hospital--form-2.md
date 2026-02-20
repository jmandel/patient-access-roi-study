# Evaluation: Yale New Haven Hospital — form-2.pdf

**Document**: Authorization for Release of Information (LH000013, Rev. 03/24)
**Organization**: Yale New Haven Hospital (New Haven, CT) — via parent system Yale New Haven Health
**Facility covered**: Lawrence + Memorial Hospital (New London, CT)
**Source URL**: https://www.ynhhs.org/-/media/Files/YNHHS/PDF/medical-records/LH000013_Release_of_Information_Form_Fillable_031924.ashx

---

## 1. DOCUMENT IDENTIFICATION

This is a **facility-specific ROI authorization form** for Lawrence + Memorial Hospital (L+M), one of the member hospitals within the Yale New Haven Health System (YNHHS). It is a sibling document to form-1.pdf, which is the system-wide "Authorization for Access/Release of Information" covering Yale New Haven Hospital proper, Bridgeport Hospital, Greenwich Hospital, NEMG, and Yale Medicine.

Key differences from form-1:
- **Title**: "Authorization for Release of Information" — notably drops the word "Access" that appears in form-1's title ("Authorization for Access/Release of Information"). This is significant because "Access" in HIPAA terms connotes patient right-of-access requests, while "Release" suggests third-party disclosure.
- **Scope**: Covers only Lawrence + Memorial Hospital rather than multiple YNHHS facilities.
- **Directionality**: form-2 only supports "Release information from my medical record to" a named recipient. Form-1 offers both "RELEASE information... TO" and "OBTAIN information FROM" — the bidirectional capability is absent here.
- **Format option**: form-2 uniquely includes a "CD-ROM" checkbox as a format option, which form-1 does not offer.
- **Revision date**: form-2 is dated 03/24 (March 2024), significantly newer than form-1's 07/19 (July 2019).
- **Form number**: LH000013 vs. F4918Eng.
- **Contact info**: Separate mailing address (365 Montauk Avenue, New London, CT 06320), fax (860-444-3760), email (releaseofinfo@lmhosp.org), and customer service number (860-444-3704).

The existence of a separate form for L+M Hospital — despite being part of the same health system — suggests incomplete standardization across YNHHS facilities.

---

## 2. FINDABILITY

Per the retrieval notes, both forms were **easy to find**. The YNHHS parent system website has a dedicated "Request Medical Records" page with direct download links. The form was discovered via a site-specific web search (`site:ynhhs.org request medical records release of information form`).

The forms are hosted on the parent system website (ynhhs.org) rather than the individual hospital domain (ynhh.org), which is logical given the system structure. The URL is descriptive: the filename `LH000013_Release_of_Information_Form_Fillable_031924.ashx` clearly identifies the form number, purpose, fillable nature, and revision date.

However, there is a potential confusion point: a patient of Yale New Haven Hospital specifically might not realize that their L+M Hospital records require a different form, or that L+M is part of the same system but requires separate submission.

---

## 3. TECHNICAL ACCESSIBILITY

**Strong digital artifact.** Key technical characteristics:

- **Text layer**: Present — full text is extractable (5,153 characters across 2 pages).
- **Fillable fields**: 79 interactive form fields — a robust count indicating the form was designed for digital completion.
- **File size**: 1,090,059 bytes (~1.1 MB) — notably large for a 2-page PDF with zero embedded images. Form-1 achieves similar functionality in 565 KB. The bloat is unexplained but not a usability barrier on modern connections.
- **Fonts**: 9 fonts embedded.
- **Images**: 0 embedded images. This is a born-digital document, not a scan.
- **PDF format**: Fillable, interactive PDF — clearly designed for digital use.

The form is well-suited for digital workflow: patients can fill it on-screen and submit via email (releaseofinfo@lmhosp.org). The combination of fillable fields + email submission creates a viable end-to-end electronic process.

---

## 4. CONTENT DESIGN

**Well-organized 2-page form with clear sectioning.** The layout follows a logical flow:

1. **Patient identification** (name, DOB, preferred name, phone, address, email, maiden/other name)
2. **Purpose** — 9 checkboxes: Personal use, Continuing care, Legal, Disability, Workers Comp, Insurance Eligibility/Benefits, Social Security Claim, Veterans Benefits, Other
3. **Recipient information** (name, address, phone)
4. **Delivery method** — 5 options with one explicitly noted as exclusive: "Choose one only" — MyChart, Mail, Fax, Secure Email, Pick Up/Hand Carry
5. **Format** — CD-ROM checkbox
6. **Record specification** — date of service or date range, plus detailed medical record type checkboxes
7. **Sensitive information exclusions** (page 2) — opt-out checkboxes for HIV, Behavioral Health/Psychiatric, Substance Abuse, Termination of Pregnancy, STD, Genetic Testing, Other
8. **Patient rights disclosures** — 5 bullet points of "I understand that..." statements
9. **Minor authorization rules**
10. **Submission instructions** with mailing address, fax, and email
11. **Signature block** with relationship checkboxes

**Record type granularity** is good. The form offers:
- Hospital Admission Abstract (with parenthetical listing of what's included)
- Outpatient Visit Notes
- 14 specific record type checkboxes (H&P, Consult Report, Discharge Summary, Lab Results, Echocardiogram/EKG, Immunization Record, Emergency Visits, Radiology Report, Pulmonary Function Test, Medication List, Operative/Procedure Report, Pathology Report, PT/OT/Speech Notes, Other)
- Complete Medical Record with flowsheet opt-in
- Separate line items for Radiology Images (with date/type specification) and Itemized Bill

**Language** is a mix: the patient-identification and record-selection sections are straightforward, but the "I understand that" section on page 2 shifts to denser legal prose. For example: "The information disclosed in response to this authorization may be subject to re-disclosure by recipient, and will no longer be protected under the terms of this authorization or by federal privacy regulations." This is standard HIPAA authorization language but reads at a high level.

**Sensitive information section** uses an unusual default-inclusion model with opt-out exclusions: "All information selected on page 1 will be disclosed with this authorization unless specifically requested to be excluded." This is actually a patient-friendly approach — rather than requiring patients to affirmatively opt in to release sensitive data (which they might forget), it defaults to full disclosure and lets patients carve out categories. The section header is clearly marked with "SENSITIVE INFORMATION" in caps.

---

## 5. PATIENT-CENTEREDNESS

**Mixed signals.** The form serves patients reasonably well but has notable gaps:

**Strengths:**
- **"Personal use" as first purpose option**: The first checkbox under purpose is "Personal use," signaling that patient self-requests are expected and welcome.
- **Multiple delivery methods**: MyChart portal, Mail, Fax, Secure Email, Pick Up/Hand Carry — five options including two electronic methods.
- **MyChart integration**: "Must have active account. To activate your account go to mychart.ynhhs.com" — provides an actionable URL for patients without existing portal access.
- **CD-ROM option**: An unusual but potentially useful format option for patients wanting bulk data.
- **Granular record selection**: Patients can target specific record types rather than being forced to request everything.
- **Date range support**: Both specific date and date-range options.
- **Processing timeline disclosed**: "Routine requests for medical records are generally processed within 10 business days."
- **Voluntariness statement**: "This authorization is voluntary and my treatment by Lawrence + Memorial Hospital is in no way conditioned on whether or not I sign this authorization."

**Weaknesses:**
- **No "Access" framing**: Unlike form-1, which is titled "Authorization for Access/Release of Information," this form is titled "Authorization for Release of Information" only. The form structurally requires identifying a recipient ("Release information from my medical record to: Name: / Address:"), which is awkward for a patient simply requesting their own records — they must fill in their own name and address as the "recipient."
- **No HIPAA Right of Access reference**: The form does not cite 45 CFR § 164.524 or mention the patient's right of access. The "I understand" section references "federal privacy regulations" only generically.
- **No mention of EHI export or bulk data**: No reference to electronic health information export, USCDI, or patients' rights under the 21st Century Cures Act.
- **No fee disclosure**: The form states "There may be a charge for copies in accordance with Connecticut law" but does not disclose the actual fee schedule or HIPAA's cost-based fee limit. Form-1 includes the phrase "Reasonable cost-based fees apply" on the radiology images line, but form-2 lacks even that.
- **Signature requirement**: The form requires a wet signature ("Signature of Patient or Authorized Representative"), which means it cannot be fully completed electronically despite being a fillable PDF. Patients must print, sign, and then scan/email or mail the form.

---

## 6. COMPLIANCE

- **Authorization validity**: One year from date of signature — standard and reasonable.
- **Revocation**: Clearly described — patient can revoke in writing, with appropriate caveat that revocation doesn't apply to already-released information.
- **Re-disclosure warning**: Present — standard HIPAA authorization language.
- **Voluntariness**: Explicitly stated — treatment is not conditioned on signing.
- **Minor consent rules**: Detailed CT state-specific rules for minors at ages 13 and 16, distinguishing between different types of sensitive information. This is thorough and legally appropriate.
- **Fee language**: "There may be a charge for copies in accordance with Connecticut law" — vague but not overtly non-compliant. Connecticut law (CGS § 20-7c) sets its own fee schedule, which may differ from HIPAA's cost-based approach. The form does not clarify which fee standard applies for patient-access requests (where HIPAA's lower cost-based fee ceiling should apply).
- **Submission channels**: Mail, fax, or email — no in-person-only restriction.
- **No notarization requirement**.
- **Proof of authority**: "Must provide proof of authority (except parent of a minor)" for authorized representatives — standard.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Release-only framing for patient access**: The form is structured exclusively as a release-to-third-party form. There is no mechanism for a patient to simply request access to their own records without designating themselves as an external "recipient." This is a design flaw — HIPAA distinguishes between patient access rights (§ 164.524) and third-party authorization (§ 164.508), and the form conflates them. A patient requesting their own records should not need to complete a third-party release form.

### ⚠️ AMBIGUITIES

- **Fee language**: "There may be a charge for copies in accordance with Connecticut law" does not clarify whether the HIPAA cost-based fee limit applies for patient-access requests. Patients may be unaware that fees for accessing their own records are capped under federal law.
- **Sensitive information "9" prefixes**: The extracted text shows "9 HIV 9 Behavioral Health/Psychiatric 9 Substance Abuse..." — the "9" characters appear to be checkbox artifacts from pdftotext extraction. In the actual PDF these are likely checkboxes, but the text-extraction rendering is ambiguous and could cause confusion for any text-based processing.
- **"Choose one only" for delivery**: The restriction to a single delivery method may frustrate patients who want records sent to multiple destinations (e.g., both their MyChart and a specialist via fax).

### ✨ BRIGHT SPOTS

- **MyChart portal delivery with activation URL**: The form doesn't just offer MyChart — it provides the specific URL (mychart.ynhhs.com) for patients to activate their account, lowering the barrier to electronic access.
- **CD-ROM format option**: While arguably dated, this is one of the few forms in the study likely to offer a physical media option for bulk data, which could be useful for patients wanting comprehensive records in a portable format.
- **Sensitive-information opt-out model**: Rather than requiring patients to affirmatively authorize release of sensitive categories (which some patients might not understand), the form defaults to full release and lets patients check boxes to *exclude* specific categories. This is clearly labeled and includes a broad set of categories (HIV, Behavioral Health, Substance Abuse, Termination of Pregnancy, STD, Genetic Testing).
- **Detailed minor consent rules**: The form provides specific age thresholds (13 and 16) for different categories of sensitive information under CT law, rather than a generic "parent must sign for minors" statement.
- **Email submission accepted**: The form can be returned via email to releaseofinfo@lmhosp.org, enabling a mostly-electronic workflow (fill digitally → print → sign → scan → email).
