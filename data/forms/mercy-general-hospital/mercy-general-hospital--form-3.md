# Mercy General Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document title**: "Patient's Request For Access To Protected Health Information"
**Form number**: SPSSSA20015 (09/22) SPS.INDD — dated September 2022
**Policy reference**: CHW Policy 9.806
**Page count**: 2 pages, 126,483 bytes

This is the **hospital-level patient access form** for Dignity Health Sacramento facilities. It is explicitly designed for patients requesting their own records — the form states: "This request for access will not require Dignity Health to provide health information about you to anyone other than to you or your personal representative." It directs patients who need third-party disclosure to use "a signed authorization (a different form)" — which corresponds to form-1.pdf in this collection.

**Relationship to other forms found for this organization:**
- **form-1.pdf** (SPSSSA20014, 11/22): General third-party authorization for use/disclosure of PHI — covers release to other persons or organizations. That form has 42 fillable fields; this one has zero.
- **form-2.pdf** (Revised 09/17/2019): Patient access form for **Mercy Medical Group** (the affiliated physician practice). Structurally similar to form-3 but intended for the medical group rather than the hospital.
- **form-3.pdf** (this form): Patient access form for the **hospital** (Mercy General Hospital and sibling Dignity Health Sacramento facilities).

The facility checkboxes at the bottom (MGH, MHF, MSJ, MTH, SNM, WMH) indicate this single form serves all six Dignity Health Sacramento hospitals. A patient at Mercy General Hospital would use this form for hospital records and form-2 for medical group/clinic records — a split that could confuse patients who don't understand the hospital vs. medical group distinction.

## 2. FINDABILITY

Per the retrieval notes, this form was found via: `site:dignityhealth.org sacramento "medical record requests" "patient access" form`. It was linked from the Dignity Health Sacramento medical records page at `https://www.dignityhealth.org/sacramento/patients-and-visitors/for-patients/medical-record-requests`. The source URL is: `https://www.dignityhealth.org/content/dam/dignity-health/sacramento/pdfs/Patients-Request-Access-Protected-Info.pdf`.

Retrieval difficulty was rated **easy** overall. However, there is a complication: the organization has **two separate patient access forms** (form-2 for the medical group, form-3 for the hospital), and a patient must determine which entity holds their records. Additionally, one URL from search results returned a 404 error, suggesting forms have been reorganized over time. The filename ("Patients-Request-Access-Protected-Info.pdf") is reasonably descriptive.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — the PDF contains extractable text, not an image-only scan.
- **Fillable fields**: **Zero** (0) fillable fields. Despite the form containing multiple checkboxes ("F" markers throughout the text) and blank lines for handwriting, none are interactive PDF form fields. This is a flat PDF intended for print-and-fill. This is notably worse than form-1.pdf from the same organization, which has 42 fillable fields.
- **Encoding issues**: The extracted text contains significant garbled characters due to font encoding problems. Examples:
  - `"VSHFL¿F LQIR EHORZ DOO UHFRUGV SHUWDLQLQJ WR GDWH RI VHUYLFH"` — likely intended to read "specific info below all records pertaining to date of service"
  - `"3DWLHQW ,GHQWL¿FDWLRQ"` — likely "Patient Identification"
  - `"FRQ¿UP"` — likely "confirm"
  - `"D GLႇHUHQW IRUP"` — likely "a different form"
  These encoding issues indicate the PDF uses a custom/non-standard font encoding (possibly a Caesar-cipher-like shift) that breaks text extraction. This would also impair screen reader accessibility and text search.
- **File size**: 126,483 bytes for 2 pages with no embedded images — reasonable, though the encoding issues suggest suboptimal PDF generation.
- **PDF version**: Not explicitly noted; 12 fonts used across 2 pages seems excessive for a simple form.
- **Digital-first design**: No. The form includes "Place Patient Label Here" boxes (hospital admission stickers), an "ID Presented" field for staff to complete in person, and a "Name of hospital employee verifying signatory information" field. This was clearly designed for in-person clinical workflows, then posted online as a PDF.

## 4. CONTENT DESIGN

**Length**: 2 pages — appropriate for a patient access request form.

**Structure**: The form is organized into lettered sections:
- Section A: Delivery format selection (Paper, USB Drive, CD, Secure Email, Unsecured Email)
- Section B: Record type selection (12 specific categories plus "Others")
- Special provisions section for sensitive records (HIV, Psychiatric, Drug/Alcohol)
- Page 2: Signature block, return addresses, physician notification section

**Clarity**: The form uses reasonably clear language in its instructions: "You have requested access to health information about you. To allow us to process your request, please read the following carefully and complete the requested information below." However, some phrasing is unnecessarily formal, e.g., "I have read and confirm the terms of access stated herein."

**Date range framing**: The form asks for "Covering the period of hospitalization from (date) ___ to (date) ___" — framing the request around a hospitalization stay rather than a general date range. This may confuse patients who had outpatient visits or want records spanning multiple encounters.

**Record type options**: The form offers 12 specific record types (Procedure Report, Emergency Room Records, Discharge Summary, Progress Notes, History and Physical, Laboratory Tests, Consultation Reports, X-ray Reports, EKG, Itemized Billing, Others) plus a checkbox that appears garbled but likely reads "See specific info below / all records pertaining to date of service." There's also a purpose distinction: "For my own use" vs. "For Doctor Follow-Up."

**Delivery options**: Five options are provided — Paper, USB Drive, CD, Secure Email, and Unsecured Email. The unsecured email option includes a brief risk acknowledgment: "I understand that using unsecured email may place my PHI at risk, and accept the risk of sending my PHI via an unsecured mechanism." A "written summary" alternative is also mentioned.

**Visual design**: Cannot be fully assessed from text extraction alone, but the encoding artifacts suggest the visual rendering may differ significantly from the extracted text. The form appears to use standard checkbox-and-line formatting.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This is explicitly a patient access form, clearly distinguished from the third-party authorization (form-1). The form states plainly that it "will not require Dignity Health to provide health information about you to anyone other than to you or your personal representative." This is a positive design choice.

**Delivery format options**: The form offers five delivery formats including electronic options (USB, CD, Secure Email, Unsecured Email). This is better than many ROI forms that only offer paper or fax. However, there is **no mention of patient portal access** or EHI/electronic health information export.

**Fee disclosure**: The form states "There may be fees associated with your request. The form in which you access your information may determine the amount of such fees" and references an "attached price list" for copy fees. The fee language is vague — patients cannot know the cost before submitting the form.

**No HIPAA rights language**: The form does **not** reference HIPAA § 164.524, the patient's right of access, or any patient rights regarding their request. Compare this to form-1 (the third-party authorization), which includes an explicit "MY RIGHTS" section explaining the right to refuse, the right to revoke, and the right to a copy of the authorization. The patient access form paradoxically has fewer rights disclosures than the third-party form.

**Physician gatekeeping**: The form includes a "NOTIFICATION TO DOCTOR" section on page 2: "Your patient has requested copies of their medical record. State / federal laws permit you to deny access in certain circumstances. Please notify us by ___ if you wish to deny access, otherwise we will provide copies of the record." While physicians can deny access in narrow circumstances under HIPAA (e.g., if disclosure would endanger the patient), this section's broad framing could facilitate inappropriate denials.

**Sensitive records restrictions**: HIV test results require "approval of your physician" and psychiatric care records require "caregiver's approval." While state laws (California) may impose some restrictions on certain records, under HIPAA's right of access, patients generally have the right to access their own records including these categories. The blanket physician-approval requirement for HIV results in a patient access context is concerning.

**Submission method**: The form provides two return addresses (Rancho Cordova and Grass Valley) but does not specify whether the form can be submitted electronically (email, fax, portal). The "ID Presented" field and employee verification section suggest the expected workflow is in-person submission.

## 6. COMPLIANCE

- **No notarization required**: The form does not require notarization — only patient signature.
- **No explicit in-person requirement**: While the form's design implies in-person use (patient label, ID verification, employee fields), it does not explicitly state in-person submission is required. Return addresses are provided for mailing.
- **Fee disclosure**: Fees are mentioned but not quantified; a "price list" is referenced as an attachment but not included in the PDF itself.
- **No expiration/revocation clause**: Unlike form-1, which specifies a 1-year auto-expiration, this patient access form has no expiration provision — which is appropriate since it's a one-time request, not an ongoing authorization.
- **Physician denial provision**: The doctor notification section creates a procedural mechanism for physician denial that goes beyond what HIPAA requires and could delay or block legitimate access requests.
- **Sensitive records gatekeeping**: Requiring physician approval for HIV results and caregiver approval for psychiatric records in the context of patient self-access may conflict with HIPAA's right of access, which generally does not condition access on provider approval (with narrow exceptions under 45 CFR § 164.524(a)(3)).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Physician veto mechanism for patient access**: The "NOTIFICATION TO DOCTOR" section actively solicits physician objections to releasing records to the patient: "Please notify us by ___ if you wish to deny access, otherwise we will provide copies of the record." While HIPAA allows denial in limited circumstances, building a routine notification-and-objection workflow into the standard patient access form risks normalizing denials. The form does not inform the patient of their right to appeal a denial or request review by a designated reviewing professional, as required by 45 CFR § 164.524(d)(4).
- **Physician approval required for HIV results**: The form states HIV test results will be released only "upon approval of your physician," even when the patient is requesting their own records. Under HIPAA's right of access, a covered entity generally cannot condition patient access on physician approval. California law (Health & Safety Code § 120980) governs disclosure of HIV results but does not override the patient's federal right to access their own records.
- **Psychiatric records require "caregiver's approval"**: Similarly, psychiatric care records require caregiver approval before release to the patient. This may be appropriate in narrow "reasonably likely to endanger" scenarios under 45 CFR § 164.524(a)(3)(i), but applying it as a blanket requirement for all psychiatric records exceeds HIPAA's allowance.

### ⚠️ AMBIGUITIES

- **Hospital vs. Medical Group confusion**: Patients must navigate two separate patient access forms — form-2 for the medical group, form-3 for the hospital — with no clear guidance on which to use. A patient who visited Mercy General Hospital for both inpatient and outpatient care might not know which entity holds which records.
- **Date range framed as "hospitalization"**: The form asks for "Covering the period of hospitalization from (date) ___ to (date) ___" which implies the form is only for inpatient stays, potentially confusing patients seeking ER, outpatient, or ambulatory records.
- **Fee ambiguity**: "There may be fees associated with your request" and "Fees may apply. See attached price list" — but no price list is included in the downloaded PDF. Patients cannot assess costs before submitting.

### ❌ ERRORS

- **Severe text encoding corruption**: The PDF's font encoding produces garbled text when extracted via `pdftotext`. Multiple passages are unreadable, including what appear to be key instructions (e.g., the checkbox option for "all records pertaining to date of service" is rendered as `"VSHFL¿F LQIR EHORZ DOO UHFRUGV SHUWDLQLQJ WR GDWH RI VHUYLFH"`). This also means the form is likely inaccessible to screen readers, violating digital accessibility standards.
- **No fillable fields despite sibling form having 42**: Form-1 (the third-party authorization from the same organization, dated 11/22) has 42 fillable PDF fields, while this patient access form (also dated 09/22) has zero. This inconsistency suggests the patient access form was produced with less care for digital usability than the third-party release form.
- **Outdated policy reference**: The form references "CHW Policy 9.806" — CHW refers to Catholic Healthcare West, Dignity Health's former name (rebranded in 2012). This suggests the policy numbering system hasn't been updated in over a decade.

### ✨ BRIGHT SPOTS

- **Clear separation of patient access from third-party release**: The form explicitly states it is for patient self-access only and directs third-party requests to a different form. This is a best practice that many organizations fail to implement.
- **Multiple electronic delivery options**: Offering Paper, USB Drive, CD, Secure Email, and Unsecured Email gives patients meaningful choice in how they receive their records, including two electronic options — better than many comparable forms.
- **Written summary alternative**: The form notes patients may request "a written summary of health information" instead of raw record copies, providing flexibility.
