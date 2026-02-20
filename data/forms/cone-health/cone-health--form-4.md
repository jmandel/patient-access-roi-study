# Cone Health — form-4.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **Cone Health Medical Group (CHMG) Request & Authorization for Use/Disclosure of Protected Health Information** — a Release of Information form specifically for CHMG physician practices and outpatient settings. It is distinct from the main Cone Health hospital-system HIPAA Authorization form (form-1/form-2). The form identifier at the bottom reads "MR9120459 (06/14)", indicating a June 2014 revision date.

Cone Health maintains four related documents: form-1 is the primary hospital HIPAA Authorization (English, updated 12/2024), form-2 is its Spanish translation, form-3 is a Request for Amendment form (not an ROI form), and this form-4 is the CHMG-specific ROI form. A patient seeing a Cone Health Medical Group physician would likely need this form rather than the hospital form, though the distinction is never explained on the website.

## 2. FINDABILITY

This form was **not linked from Cone Health's main Medical Records page** (https://www.conehealth.com/patients-visitors/medical-records/). Per the retrieval notes, it was only discovered via web search for terms like "Cone Health release of information form." The source URL (https://www.conehealth.com/app/files/public/5cb84c2e-39ff-4feb-8171-ffcf634002cf/CHMG-Release-of-Information-Form.pdf) uses a UUID-based path with a descriptive filename, but there is no landing page or contextual navigation leading to it. A CHMG patient navigating the Cone Health website would find only the hospital authorization forms on the Medical Records page, with no indication that a separate CHMG form exists. This is a meaningful findability gap — patients of Cone Health Medical Group practices would not know which form applies to them.

## 3. TECHNICAL ACCESSIBILITY

- **Format:** PDF 1.6, 41,504 bytes, 1 page — reasonably compact.
- **Text layer:** Present; full text is extractable (4,421 characters). Not an image-only scan.
- **Fillable fields:** The metadata reports 42 fillable fields, but `fillable_field_names` is an empty array, suggesting the fields exist as interactive form elements but lack descriptive names/labels. This is a usability issue for assistive technology (screen readers) — fields are present but not properly labeled.
- **Fonts:** 7 fonts used; 1 embedded image (likely a logo).
- **Digital-first design:** The form appears to be digitally authored (not a scan), with interactive fields. However, the design heavily mimics a paper form with underscores for blanks ("Patient Name: ____________________________________") in the text layer, suggesting it was designed primarily for print and then retrofitted with form fields.

## 4. CONTENT DESIGN

The form fits on a single page, which is appropriate for its scope. However, cramming everything onto one page comes at the cost of readability.

**Language:** The prefatory legal text is a single dense paragraph beginning with "READ THE FOLLOWING CAREFULLY:" — a wall of legalese covering liability release, voluntariness, re-disclosure, expiration, revocation, and treatment conditioning. This block is approximately 200 words of unbroken text in what appears to be small type. Key concepts (revocation rights, expiration, re-disclosure risk) are buried mid-paragraph rather than broken into numbered items. Compare this to form-1, which organizes the same concepts into 8 numbered points under a clear "PATIENT RIGHTS AND SIGNATURE" header.

**Organization:** The form flows top-to-bottom: patient demographics → legal text → delivery format → recipient → purpose → information scope → signatures → office-use section. The legal text block appears before the substantive authorization fields, which is unconventional — most forms collect what you're authorizing before presenting terms.

**Purpose options** are limited to: "Continuity of Care," "Legal Representation," "School Credit," "Patient Request," and "Other." The "Patient Request" option at least signals this form is usable for patient-initiated access.

**Record type checkboxes** include: Office Progress Notes, Lab Test, Dates of Service(s), X-ray Reports, Hospital Discharge Summary, History & Physical, and Other. This is a narrower set than form-1, which also includes ED Visit, Substance Use Disorder Treatment Records, Behavioral Health–specific categories, and an "All" option. Notably, form-4 lacks an "All records" checkbox.

## 5. PATIENT-CENTEREDNESS

**Patient access pathway:** "Patient Request" is listed as a purpose option, indicating the form can be used for patient-initiated access. However, the form's title ("Request & Authorization for Use/Disclosure") and its structure — with a "disclose to" recipient section — frame it primarily as a third-party release form. A patient requesting their own records must fill in their own name as the recipient.

**Delivery format options** include: "Print on paper," "CD/DVD/USB," "Mail," "Fax to #," and "Pick up by the authorized recipient." Email is notably absent — form-1 includes email as a delivery option, but this CHMG form does not. There is no mention of patient portal access or electronic health information export.

**Expiration:** The form states: "unless revoked earlier, this authorization will expire on (DATE):________________________. If no date is indicated, this release will expire 90 days from the date of signature." This 90-day default is significantly shorter than form-1's 1-year default. For a patient access request, any expiration is arguably unnecessary, but 90 days is particularly tight.

**Revocation:** The form states patients may revoke "by notifying Cone Health in writing" but does not provide a specific address or method, unlike form-1 which gives a mailing address.

**Fees:** The form states in bold: "***THERE MAY BE A CHARGE FOR THE REPRODUCTION OF MEDICAL RECORDS / FILMS / TAPES.***" No fee schedule is provided, no reference to HIPAA fee limits, and no distinction between patient access requests (which under HIPAA § 164.524 are limited to a reasonable, cost-based fee) and third-party releases.

**Rights language:** The form mentions HIPAA only implicitly (treatment conditioning exceptions reference HIPAA-like rules). It does not cite 45 CFR § 164.524 or explicitly reference the patient's Right of Access. The statement "*YOU MAY REFUSE TO SIGN THIS AUTHORIZATION*" is present.

## 6. COMPLIANCE

**Liability release:** The form opens with: "Cone Health, its employees, officers, and physicians are hereby released from any legal responsibility or liability for the disclosure of the information listed below to the extent indicated and authorized herein." This liability waiver is baked into the authorization itself — signing the form both authorizes release and waives liability. This is not standard HIPAA authorization language and may discourage patients from exercising their access rights.

**ID verification:** The office-use section requires "Driver's License #" and states "STAFF MUST CHECK LEGAL PICTURE I.D. PRIOR TO SIGNING." While identity verification is reasonable, requiring a driver's license specifically (rather than any government-issued ID) could be a barrier for patients who don't drive.

**Sensitive information:** The form states it "includes information pertinent to mental health, drug/alcohol abuse, and HIV/AIDS diagnosis" but unlike form-1, it does not cite 42 CFR Part 2 for substance abuse records, and there is no separate opt-in for sensitive categories — consent for all sensitive records is bundled into the general authorization.

**No submission instructions:** The form header says "Please address revocations or inquiries pertinent to this request to (site name, address, phone, and fax):" — but this is a blank template with no specific site information pre-filled. A patient downloading this form online would not know where to submit it.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Embedded liability waiver**: The authorization text includes "hereby released from any legal responsibility or liability for the disclosure" — patients must waive liability as a condition of authorizing release, which is not a standard HIPAA requirement and may chill access rights.
- **No submission destination**: The form header asks to address requests to "(site name, address, phone, and fax)" but leaves this blank. A patient downloading this PDF has no idea where to send it.
- **Driver's license requirement**: Office-use section specifies "Driver's License #" and "LEGAL PICTURE I.D." — not all patients have driver's licenses.

### ⚠️ AMBIGUITIES

- **Which form for which patient?** The website publishes hospital forms (form-1/2) on the Medical Records page but does not link or mention this CHMG form. A CHMG patient would not know this separate form exists, or whether the hospital form would be accepted at their physician's office.
- **Sensitive records bundled**: The form states it covers mental health, drug/alcohol, and HIV/AIDS records in the same authorization text with no opt-in/opt-out granularity, yet does not cite 42 CFR Part 2 protections for substance abuse records as form-1 does.
- **No "All records" option**: Unlike form-1, this form has no "All" checkbox for information to be disclosed, forcing patients to select individual record types or use the "Other" write-in — which may result in incomplete disclosures.

### ❌ ERRORS

- **Severely outdated**: The form revision date is "06/14" (June 2014) — nearly 12 years old at time of evaluation. Form-1 was updated December 2024. Regulatory requirements have changed substantially since 2014, including the 21st Century Cures Act (2016) and the ONC Information Blocking Rule (2021).
- **Missing email delivery option**: Form-1 offers email delivery; this CHMG form does not, despite serving the same health system. This inconsistency may reflect the form's age.

### ✨ BRIGHT SPOTS

- **Fillable PDF fields**: The form includes 42 interactive form fields, making it fillable digitally — a meaningful advantage over the hospital form-1, which has 0 fillable fields despite being 10 years newer.
- **Single-page format**: The form fits on one page, reducing burden for a straightforward request.
