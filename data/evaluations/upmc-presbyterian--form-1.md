# UPMC Presbyterian — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **system-wide UPMC "Authorization for Release of Protected Health Information"** form (version 05001-PA-V2-V, dated 10/2022). It is not specific to UPMC Presbyterian; it covers the entire UPMC hospital network, with checkboxes for 14+ hospitals and ambulatory surgery centers. The form header reads "AUTHORIZATION FOR RELEASE OF PROTECTED HEALTH INFORMATION" and lists facilities including "Presbyterian/Montefiore" as one checkbox option among many.

Two other documents were found alongside it: form-2.pdf is an "In Home" variant for UPMC In-Home Urgent Care Plus / Short Term Acute Care, and form-3.pdf is an "Informational Guide" that walks patients through completing the main form. This form (form-1) is the primary ROI form that UPMC Presbyterian patients would use.

## 2. FINDABILITY

The form was **easy to locate**. According to retrieval notes, the first web search for `UPMC "authorization" "release" "health information" form PDF` immediately returned direct PDF links hosted on UPMC's Digital Asset Management CDN (`dam.upmc.com`). The form is also linked from:

- The system-wide medical records page (`upmc.com/patients-visitors/medical-records`)
- The UPMC Presbyterian-specific sub-page (`upmc.com/locations/hospitals/presbyterian/patients-visitors/medical-records`)

The URL (`dam.upmc.com/-/media/upmc/patients-visitors/medical-records/documents/medical-release-form.pdf`) is descriptive and stable. No difficulties were reported — no bot blocking, no portal login required, no broken links. The companion instruction guide (form-3.pdf) is available from the same pages. This is straightforward findability for a major health system.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (7,465 characters across 2 pages) is fully extractable via pdftotext.
- **Fillable fields**: Essentially non-fillable — only **1 fillable field** is detected, with no field names reported. The form presents dozens of checkboxes and text blanks rendered as underscores (`______`) rather than interactive PDF form fields. Patients must print, fill by hand, and submit.
- **File size**: 371 KB for 2 pages — reasonable, though slightly large given minimal graphical content (only 2 embedded images, likely logos). The 22 embedded fonts suggest this is a designed digital document, not a scan.
- **Digital-first design**: The form was clearly created digitally (not a scan), but it was designed as a **print-first document**. The underscore-style blanks, checkbox squares, and layout all assume the user will print and hand-fill. Despite being born-digital, it does not leverage that for interactivity.

## 4. CONTENT DESIGN

**Length**: 2 pages — page 1 is the authorization form itself; page 2 contains "Additional Patient Rights and Responsibilities." This is proportionate for the scope covered (multi-facility, multiple record types, special categories).

**Organization**: The form follows a logical structure: facility selection → patient identification → recipient information → purpose → disclosure format → record types → sensitive information opt-outs → signatures. Sections are labeled A through C, with subsections 1 and 2 under C.

**Density**: Page 1 is **extremely dense**. It crams facility checkboxes, patient demographics, recipient address, purpose, disclosure format, record type selection (20+ specific document types), HIV/drug/alcohol/mental health consent, expiration terms, and signature blocks all onto a single page. The text is small and tightly packed with minimal whitespace between sections.

**Clarity**: The language is a mix of plain language and legal terminology. Instructions like "Parts 1 and 2 below must be completed to properly identify the records to be released" are clear. However, some phrasing is dense: "I understand that this Authorization is effective for a period of 90 days from the date of signature, unless otherwise specified below. No time frame may exceed one year from the date of signature." The note "Purpose is not required for patient access" is a helpful plain-language callout.

**Record type granularity**: The form offers an impressively detailed list of specific record types (20+ options including Abstract, Allergies, Consultation Report, Diagnostic Tests, EKG Report, Laboratory Report, Medication Administration Records, Nurses Notes, etc.). This gives patients fine-grained control but may also be overwhelming.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose ROI form** that serves both patient self-access and third-party release. It is not patient-access-specific. However, it does include a helpful note: "Purpose is not required for patient access," acknowledging the HIPAA distinction. One of the purpose checkboxes is "Personal Use."

**Scope options**: Excellent granularity. Patients can select:
- Specific UPMC facilities (14+ hospitals, ambulatory surgery centers, closed facilities)
- Record types by service category (Inpatient, Emergency Dept, Same Day Surgery, Outpatient, Physician Office/Clinic) with date ranges
- 20+ specific document types (labs, radiology, discharge summary, etc.)
- Opt-in/opt-out for HIV, Drug/Alcohol, and Mental Health records

**Format/delivery options**: The form offers multiple disclosure formats and delivery methods:
- Format: Paper, CD, FAX (Providers Only), Other
- Delivery: US Mail, In-Person Pickup, FAX (Providers Only), Email, Direct Address

Email and Direct Address options are notable positives. However, FAX is restricted to "Providers Only" — patients cannot request fax delivery, which is reasonable.

**Right of Access language**: The form does **not** explicitly reference HIPAA § 164.524 or the patient's Right of Access. The note about purpose not being required for patient access is the closest it comes. Page 2 states "UPMC will not condition treatment, payment, enrollment or eligibility of benefits on whether I sign this authorization," which echoes HIPAA's anti-conditioning requirement.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA/interoperability.

## 6. COMPLIANCE

**Expiration**: The default authorization period is **90 days**, with a maximum of one year. The 90-day default is relatively short and may force patients to resubmit if processing is slow. The form states: "I understand that this Authorization is effective for a period of 90 days from the date of signature, unless otherwise specified below. No time frame may exceed one year from the date of signature."

**Fees**: Page 2 states: "Please be aware that health care facilities are authorized by Pennsylvania State law to charge for reproduction of medical records and that charges may be associated with this request. Requestors may be notified in advance of the amount due for the request and records will be sent upon receipt of payment." This references state law but does not specify amounts or distinguish between patient-access requests (which HIPAA limits to reasonable cost-based fees) and third-party requests.

**Revocation**: Patients can revoke authorization "at any time by sending a written request." Revocation must be in writing.

**Redisclosure warning**: Page 2 includes a redisclosure warning and liability disclaimer: "UPMC and its staff/employees have no responsibility or liability as a result of a redisclosure."

**Conditioning**: The form explicitly states UPMC will not condition treatment on signing — good.

**Notarization/in-person**: Not required. The form does not mandate in-person submission.

**Oral authorization**: Accommodates persons "physically unable to sign" with oral authorization witnessed by two people, though this is "NOT Applicable to HIV related Information or Drug & Alcohol Treatment Information."

**Representative authorization**: Provides checkboxes for Parent/Legal Guardian, Power of Attorney, Next of Kin of Deceased, and Executor of Estate, each requiring attached documentation.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee language does not distinguish patient access from third-party requests.** The form says "charges may be associated with this request" citing PA state law, without acknowledging that HIPAA limits fees for patient-access requests to reasonable cost-based fees. The statement "records will be sent upon receipt of payment" could be read as conditioning release on upfront payment, which may conflict with HIPAA's requirement to provide records within 30 days regardless.

### ⚠️ AMBIGUITIES

- **90-day default expiration is unusually short.** While the form allows patients to specify a different expiration (up to one year), the 90-day default may catch patients off guard if processing takes longer. It is unclear whether this clock starts from signature or from receipt by UPMC.
- **"Direct Address" delivery option is unexplained.** The form offers "Direct Address: ___" as a delivery method alongside Email, but does not explain what a Direct Address is (it likely refers to the Direct Project secure messaging protocol, but a patient would not know this).
- **Form scope note on the companion guide says "This form does not apply to non-hospital records including those from physician offices and urgent care centers"** (form-3 text), yet form-1 itself includes a "Physician Office/Clinic" checkbox under both record types and specific information. This creates confusion about whether the form actually covers physician office records.

### ✨ BRIGHT SPOTS

- **"Purpose is not required for patient access"** — This inline note directly on the form is an unusually clear acknowledgment of HIPAA's patient access rights. Most ROI forms do not include this clarification.
- **Email and Direct Address delivery options** — Offering electronic delivery methods beyond just fax (which is provider-only) demonstrates awareness of patient preferences for digital access.
- **Companion instruction guide (form-3.pdf)** — UPMC provides a separate visual guide explaining how to complete the form, which is a patient-friendly support resource rarely seen from other organizations.
- **Granular record type selection** — The 20+ specific document type checkboxes give patients fine-grained control over exactly what records to request, rather than forcing an all-or-nothing approach.
- **Anti-conditioning statement** — Explicitly stating UPMC will not condition treatment on signing the authorization is a clear compliance signal.
