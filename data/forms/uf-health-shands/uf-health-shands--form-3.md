# Evaluation: UF Health Shands Hospital — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

**Title:** "Authorization for Use or Disclosure of Protected Health Information ('PHI') Maintained by UF Health*"

**Document type:** General ROI / HIPAA authorization form. This is a combined patient-access and third-party release form — it does not distinguish between a patient requesting their own records and a third party requesting release. The form is identified by internal code `RI0001` and product code `PS46283`, matching the same codes on forms 1, 2, and 4.

**Revision date:** `Rev. 6/20/14` — making this the oldest of the four forms found for UF Health Shands. Form-1 is dated 3/11/15, and forms 2 and 4 are dated 5/30/19.

**Relationship to other forms:** This appears to be a predecessor to the current forms. UF Health Shands has four ROI forms online:
- **form-2.pdf** is the primary form, linked directly from the medical records page (ufhealth.org/medical-records), revised 5/30/19.
- **form-1.pdf** is a more structured version with numbered sections and boxes, revised 3/11/15.
- **form-3.pdf (this document)** is the oldest version (6/20/14), hosted at a generic path (`/media/PDF/ROI.pdf`).
- **form-4.pdf** is a clinic-specific variant pre-filled for UF C.A.R.D (Center for Autism and Neurodevelopment), revised 5/30/19.

All four share the `PS46283` / `RI0001` identifiers, confirming they are versions or variants of the same underlying form. Form-3 is likely a legacy version that was never removed from the website.

## 2. FINDABILITY

**Source URL:** `https://ufhealth.org/sites/default/files/media/PDF/ROI.pdf`

The file is discoverable via web search but is **not linked from the current medical records page** (which links to form-2). The URL path (`/media/PDF/ROI.pdf`) is generic and does not indicate versioning or date. A patient searching for "UF Health ROI form" could plausibly land on this older version via a search engine, even though it has been superseded. The filename "ROI.pdf" is descriptive at a high level but undifferentiated — a patient wouldn't know this is outdated without comparing revision dates.

Retrieval notes indicate the overall search process was easy, but the existence of four undifferentiated forms at different URLs creates ambiguity about which is current.

## 3. TECHNICAL ACCESSIBILITY

- **Pages:** 1 (single-page form)
- **File size:** 88,083 bytes (~86 KB) — reasonable for a single-page text-based PDF
- **Text layer:** Yes — full text is extractable (5,591 characters)
- **Fillable fields:** 0 — the form has no interactive form fields despite having a text layer. All fields must be filled by hand after printing.
- **Fonts:** 9 embedded fonts
- **Embedded images:** 0
- **Image-only scan:** No

The form is a flat/static PDF — it was designed digitally (not scanned) but lacks any fillable fields. This means a patient must print, hand-fill, and then mail, fax, or deliver the form. The lack of fillable fields is a significant accessibility shortcoming, especially since newer versions (forms 2 and 4) also lack fillable fields, suggesting this is a persistent organizational gap rather than just a legacy issue.

The form does mention electronic PDF delivery via HealthPort email, but the form itself cannot be completed electronically.

## 4. CONTENT DESIGN

**Layout and organization:** The form is dense but organized into logical sections flowing top-to-bottom on a single page:
1. Patient demographics (name, DOB, MRN, address, SSN last 4, phone, employee status)
2. Requestor information (if not patient) with relationship checkboxes and identity verification
3. Source facility selection (6 checkboxes with addresses, phones, and fax numbers)
4. Destination/recipient fields
5. PHI type selection (14 checkboxes)
6. Purpose, dates, and format fields
7. Legal authorization text
8. Signature line
9. Internal use section (record type codes, processing fields)

**Clarity:** The legal section is written in reasonably understandable language, using "I understand that" bullet-style statements. However, it is not plain language — phrases like "I hereby release and discharge UF Health, all of its successors and all persons acting under its permission and authority from any liability" are dense legalese. The warning about email risk — "WARNING: If you request your records to be sent to e-mail, there may be some level of risk that the records could be read by a third party" — is presented prominently in context.

**Length:** Fitting everything on one page is efficient but creates visual density. The facility listing with full addresses and phone/fax numbers consumes significant space.

**Granularity of PHI selection:** The form provides 14 checkboxes for record types including sensitive categories: "Mental Health/Psychiatric Treatment," "Alcohol or Substance Abuse Treatment," "Sexually Transmitted Disease Treatment," "HIV or AIDS Treatment(s) or Test(s)," and "Genetic Testing." This level of granularity is good for patient control. However, there is no "All Records" or "Complete Medical Record" option — a patient wanting everything must check each box individually.

**Internal use section:** The bottom of the form contains an "For UF Health Use Only" section with cryptic two-letter codes (ABS, DC, FS, PN, AN, EC, HP, PO, etc.) that are unexplained. While clearly intended for staff, their presence on the patient-facing form adds clutter.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a general-purpose authorization. It does not distinguish between a patient requesting their own records and a third party requesting release. The structure ("To the facility checked to send PHI" → "To share PHI with the person/facility below") implies a transfer-to-third-party model. A patient requesting records for personal use must check "Personal Use" under purpose and fill in their own name as the recipient (with a "Check here if same as patient above" convenience checkbox).

**Scope options:** The form offers good granularity:
- 14 specific record type checkboxes
- Date range field ("Are there specific dates needed?")
- Free-text "Other" option
- "Is this needed for a doctor's appointment?" field with date

**Format options:** The form offers electronic PDF delivery via email (through HealthPort), with an explicit warning about email security risks. It also implies paper and pickup options ("Check here for records pick-up only"). However, there is no mention of CD, patient portal (MyUFHealth), or other electronic delivery mechanisms that appear in newer form versions (form-2 offers "MyUFHealth (UF Health Portal)" and "CD" options).

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's Right of Access by name. It does state: "If I refuse to sign this authorization, doing so will not affect my treatment, payment, enrollment, eligibility for benefits or the quality of care that I will receive." It also states the patient's right to revoke the authorization in writing.

**EHI Export:** No mention of electronic health information export, bulk data, or USCDI.

## 6. COMPLIANCE

**Fee disclosure:** The form states: "I am aware that I may be charged a fee for this request as follows: Paper Copies – up to $1.00 per page (plus applicable tax and handling); Electronic Copies – fee associated with labor, supplies (i.e. cost of a computer disk), and postage. Additional fees apply for summary requests or explanations." The $1.00/page rate was stated in 2014 and may have been reasonable at the time, but HIPAA's Right of Access rule (as clarified by HHS in 2016 and subsequent guidance) limits fees for patient-access requests to reasonable, cost-based fees. Stating "up to $1.00 per page" could exceed what is permissible for patient access requests under current guidance.

**Expiration:** "This authorization will remain in effect for one (1) year or until I revoke it in writing." A one-year expiration is standard.

**Revocation:** Revocation must be in writing to the HIM Department — standard and compliant.

**Liability waiver:** The form includes: "I hereby release and discharge UF Health, all of its successors and all persons acting under its permission and authority from any liability that may arise from the release of PHI as I have directed." While common, requiring patients to waive liability as part of requesting their own records is a notable imposition.

**SSN collection:** The form requests "Last 4 digits of SSN (Optional)" — it is marked optional, which is appropriate, but collecting SSN digits on an ROI form is an unnecessary data collection practice.

**Submission methods:** The form lists facility addresses with phone and fax numbers, implying mail and fax submission. In-person pickup is also offered. No online/portal submission option is mentioned.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Liability waiver bundled into authorization:** The statement "I hereby release and discharge UF Health...from any liability that may arise from the release of PHI as I have directed" asks patients to waive liability as a condition of requesting records. This goes beyond what HIPAA requires for an authorization and could deter patients from exercising their access rights.
- **Per-page fee language may exceed HIPAA limits for patient access:** "Paper Copies – up to $1.00 per page (plus applicable tax and handling)" does not distinguish between patient-access requests (subject to reasonable cost-based fees under 45 CFR § 164.524(c)(4)) and third-party releases (where state fee schedules may apply). As of current HHS guidance, $1.00/page is likely excessive for patient-access copies.

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release:** The form serves both purposes without differentiating the legal framework, fee structure, or rights that apply to each. A patient requesting their own records has stronger rights under HIPAA than a third party requesting release, but this form treats both identically.
- **"Additional fees apply for summary requests or explanations"** — no indication of what those fees are or how they are calculated.
- **Electronic delivery via HealthPort email is offered but no email field is explicitly labeled** in the extracted text — the form says "please provide a valid and clear e-mail address below" but the metadata shows 0 fillable fields, suggesting no structured email input.

### ❌ ERRORS

- **Outdated form still publicly accessible:** This form is dated `Rev. 6/20/14` — over 11 years old — and has been superseded by at least two newer revisions (form-1 dated 3/11/15, forms 2 and 4 dated 5/30/19). It remains indexed and downloadable at its original URL, creating a risk that patients or referring providers use an outdated version. The newer forms include additional options (MyUFHealth portal, CD delivery, 42 CFR Part 2 language for substance use disorder records) that this version lacks.
- **Different phone number for Shands Hospital across form versions:** Form-3 lists `(352) 594-0909` while form-1 lists `352.265.0131` for the same facility. At least one of these may be outdated.

### ✨ BRIGHT SPOTS

- **Granular PHI type selection:** The 14 checkboxes for record types, including separate categories for sensitive information (mental health, substance abuse, STD, HIV/AIDS, genetic testing), give patients meaningful control over what is disclosed.
- **"Check here if same as patient above" convenience checkbox** reduces redundant data entry for patients requesting their own records.
- **Email-based electronic delivery option (via HealthPort)** was forward-thinking for a 2014 form, though it has since been superseded by portal-based options in newer versions.
