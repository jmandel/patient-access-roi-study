# Guthrie Corning Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document title:** "AUTHORIZATION TO USE OR DISCLOSE HEALTH INFORMATION"

This is the primary ROI form for the entire Guthrie system (form number LMR 1581, dated March 2021). It is a general-purpose authorization used across all Guthrie entities — the form lists hospital checkboxes for "Corning," "Cortland," "Robert Packer," "Robert Packer Hospital Towanda Campus," and "Troy," plus "Guthrie Medical Group" clinic locations. It is not specific to Corning Hospital alone.

This form is one of three documents found for this organization:
- **form-1.pdf** (this document): The main ROI authorization form
- **form-2.pdf**: A specialized "Release of Patient Information to Family, Friends and Others Involved in Your Care" form
- **form-3.pdf**: An instruction sheet explaining how to submit the authorization, including fee schedules and contact information for each facility

The instruction sheet (form-3) is a companion to this form — patients are expected to print form-1, complete it, and then consult form-3 for submission details. This separation means critical information (fees, mailing addresses, fax numbers) is not on the authorization form itself.

## 2. FINDABILITY

Per the retrieval notes, this form was **easy to find**. A web search for `Guthrie Corning Hospital "authorization" "release" "health information" form PDF` immediately returned the form. The parent system's medical records page at https://www.guthrie.org/medical-records serves as a central hub. No bot blocking, JavaScript barriers, or portal login was required.

The source URL (`https://www.guthrie.org/sites/default/files/Medical-Record-Release-Form-March21.pdf`) is reasonably descriptive, though it sits under a generic `/sites/default/files/` path rather than a structured `/medical-records/` path. The filename includes a date indicator ("March21").

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. Full text is extractable (2,977 characters).
- **Fillable fields:** Zero. This is a flat PDF — patients must print it and fill it out by hand or use a PDF annotation tool. There are no interactive form fields despite the form containing numerous blanks, checkboxes, and data entry areas.
- **File size:** 223,163 bytes (~218 KB) for a single page — somewhat large, likely due to the 1 embedded image (probably the Guthrie logo) and 9 fonts.
- **Page count:** 1 page.
- **Digital-first design:** No. This is clearly designed as a print-and-fill document. The layout uses underlines and blank spaces for handwriting. Checkboxes are represented as empty squares in the text layer rather than interactive form elements.
- **PDF version/format:** Standard PDF with text layer but no interactivity.

The lack of fillable fields is a significant accessibility gap. A patient wanting to submit this form must print it, handwrite their information, and then mail, fax, or deliver it in person — there is no way to complete it digitally without third-party annotation tools.

## 4. CONTENT DESIGN

**Length and proportionality:** The form fits on a single page, which is commendable for an ROI authorization. It manages to include patient demographics, facility selection, record type selection, disclosure format, recipient information, purpose, patient rights statements, sensitive information opt-outs, and signature — all on one page. However, this compression comes at the cost of readability.

**Clarity:** The form opens with "Read Entire Document Before Signing" — a useful instruction. The patient rights section (item 6) uses reasonably clear language, e.g., "I may refuse to sign this authorization and that it is strictly voluntary." However, the overall tone is legalistic. Phrases like "I authorize the disclosure of the above-named individual's health information" use third-person framing even though the patient is the one signing, which can feel distancing.

**Organization:** The form uses numbered sections (1-8) with a logical flow: facility → records → format → recipient → purpose → rights → expiration → sensitive info → signature. This structure is functional but the numbering is inconsistent — section 1 is the facility selection but is not visually labeled as section 1; the numbering begins mid-form.

**Layout:** The single-page format means the form is quite dense. There are many checkboxes, blank lines, and data fields competing for space. The sensitive information section (item 8) and rights section (item 6) are particularly cramped. The form uses a mix of checkboxes, blank lines, and parenthetical placeholders (e.g., `Telephone # : ( )`) that create visual clutter.

**Readability:** With 9 fonts used on a single page, the typography is varied but may contribute to visual busyness. The text appears to be adequately sized based on the PDF metadata, though the density of content on one page means spacing is tight.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general-purpose authorization form, not specifically designed for patient access requests. However, it does include "Personal Use" as one of the purpose options (section 5), alongside "Sharing with healthcare provider," "Legal," "Insurance," "Lay Caregiver," and "Other." This means a patient requesting their own records can use this form, but it is not tailored to that use case.

**Scope options:** The form provides good granularity for record selection:
- Date range: "Dates of treatment: From ___ to ___"
- Record types: Discharge Summary, History & Physical, Operative Report, Cardiac Reports, Radiology Report, Emergency Department, Physical Therapy, Lab Results, Discharge Instructions, Clinic Notes, Immunization Records, Other
- Radiology images by modality: CT Scan, NM/PET, MRI, Ultrasound, Mammography, XRay

**Format options:** The form offers three format choices: "Paper Copy," "Electronic (CD/DVD)," and "Electronic On-Line." The inclusion of "Electronic On-Line" is noteworthy — it suggests some form of digital delivery is available, though the form provides no further detail on what this means in practice (e.g., portal access, email, secure link).

**Right of Access language:** The form does not reference HIPAA § 164.524 or explicitly mention the patient's right of access. The rights statements in section 6 address general authorization rights (voluntary nature, revocation, redisclosure risk) but do not inform the patient of their specific right to access their own records.

**EHI Export:** No mention of electronic health information export, bulk data, or USCDI.

**Fee disclosure:** The form itself does not disclose fees. The companion instruction sheet (form-3) states a "$6.50 flat rate fee... for individual requests for electronic health records for personal use purposes" and notes no charge for records sent to another healthcare provider. This fee information is not on the authorization form itself.

**SSN collection:** The form requests "SS# : (last 4 digits)," which is unnecessary for a records release request and may deter patients concerned about identity theft, even though only the last 4 digits are requested.

## 6. COMPLIANCE

**Expiration:** Section 7 states: "This authorization will expire twelve months from the date of signing unless I request an earlier date or event here." A 12-month expiration is standard and reasonable.

**Voluntary nature:** The form clearly states: "I may refuse to sign this authorization and that it is strictly voluntary" and "My refusal to sign this authorization will not affect my ability to obtain treatment."

**Sensitive information handling:** Section 8 addresses drug/alcohol, HIV, and mental health records with an opt-out mechanism: "Drug, Alcohol, HIV and Mental Health information contained in the parts of the records indicated above will be released through this authorization unless otherwise indicated." The default is to release sensitive information unless the patient affirmatively checks the opt-out boxes. This opt-out (rather than opt-in) approach for sensitive categories is worth noting.

**Photo ID requirement:** The form states "Photo ID required for records to be picked up" with a "Witness to ID" signature line. This applies to in-person pickup, which is reasonable, but may create barriers if applied broadly.

**Genetic information:** Section 6 includes: "The information to be disclosed may include information relating to genetic diseases/testing." This is disclosed as a statement rather than offering an opt-out, unlike the drug/alcohol/HIV/mental health categories.

**No notarization required.** No in-person-only submission requirement (form-3 confirms mail and fax are accepted). No upfront fee disclosure on the form itself.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **"Electronic On-Line" format option is undefined.** The form offers "Electronic On-Line" as a disclosure format but provides no explanation of what this means — portal access, email, secure download link, or something else. A patient checking this box has no way to know what they'll actually receive.

- **Sensitive information default is opt-out.** Section 8's phrasing — "will be released... unless otherwise indicated" — means sensitive records (drug/alcohol, HIV, mental health) are released by default. Patients who don't carefully read this section may inadvertently authorize release of sensitive information. The opt-in approach used by many other forms is arguably more protective.

- **Genetic information has no opt-out.** Unlike drug/alcohol, HIV, and mental health records, genetic information is mentioned only as a disclosure statement in section 6 ("may include information relating to genetic diseases/testing") with no corresponding opt-out checkbox in section 8. This inconsistency could confuse patients about whether they can exclude genetic data.

### ✨ BRIGHT SPOTS

- **Three format options including electronic.** Offering "Paper Copy," "Electronic (CD/DVD)," and "Electronic On-Line" on the form itself is better than many ROI forms that offer only paper or don't specify format at all.

- **Single-page form.** Fitting a complete authorization on one page reduces burden on patients compared to multi-page forms common at other organizations.

- **Granular record type selection.** The checklist of specific record types (discharge summary, H&P, operative report, cardiac reports, radiology by modality, etc.) gives patients meaningful control over what is released.

- **Companion instruction sheet with fee transparency.** While fees aren't on the form itself, form-3 clearly states the $6.50 flat rate for personal-use electronic records and that provider-to-provider transfers are free — a degree of transparency many organizations lack entirely.
