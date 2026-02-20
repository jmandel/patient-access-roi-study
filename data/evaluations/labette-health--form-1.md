# Labette Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**form-1.pdf** is a generic, one-page "AUTHORIZATION FOR RELEASE OF MEDICAL RECORDS" template sourced from PatientPop (a healthcare marketing platform), downloaded from `https://sa1s3.patientpop.com/assets/docs/223399.pdf`. It does **not** mention Labette Health anywhere in its text. The retrieval notes explicitly confirm: "Does NOT mention Labette Health anywhere — this is a generic template that appeared in search results but is not Labette Health's own form."

Labette Health's actual medical records request mechanism is an **online Formstack form** at `https://labetteheatlh.formstack.com/forms/medical_records_request` (notably misspelled subdomain — "labetteheatlh" instead of "labettehealth"). A second downloaded file, **form-2.pdf**, is Labette Health's Notice of Privacy Practices — relevant context but not an ROI form.

This means form-1.pdf is essentially a false positive from web search. The evaluation below assesses the document as retrieved, while noting its lack of connection to Labette Health.

## 2. FINDABILITY

This PDF was found via web search (`"Labette Health" "authorization" "release" "health information" filetype:pdf`) but is hosted on PatientPop's CDN (`sa1s3.patientpop.com`), not on Labette Health's website. It is not linked from any Labette Health webpage. A patient searching for Labette Health's ROI form would encounter this as a misleading search result — it looks relevant by keyword match but has no organizational affiliation.

Labette Health's actual ROI process is available from the main website navigation under **Patients & visitors → "Medical records request form"**, which links to the Formstack form. The Contact Us page also links to it. So Labette Health's real form is reasonably findable (2 clicks from homepage), but no downloadable PDF version exists. The URL for the Formstack form contains a typo in the subdomain (`labetteheatlh` instead of `labettehealth`), which could break if the typo were ever corrected upstream.

## 3. TECHNICAL ACCESSIBILITY

**form-1.pdf** is a 24,164-byte, single-page flat PDF with:
- **Text layer**: Yes — full text is extractable (1,904 characters)
- **Fillable fields**: Zero (`fillable_field_count: 0`)
- **Fonts**: 2 fonts embedded
- **Images**: 0 embedded images
- **Not a scan**: The document has native digital text, not OCR

Despite having a text layer, the form has no interactive fields. Every data entry point is represented by blank underscores (`____________________________________`). This is a print-and-handwrite design. There is no digital-first capability — a patient must print, fill by hand, and presumably mail or fax the form.

The file size is minimal (24 KB for 1 page), which is appropriate.

## 4. CONTENT DESIGN

The form is extremely brief — one page, approximately 1,900 characters of text. It collects:
- Patient name (in a legal preamble: "I, ____ hereby voluntarily authorize the disclosure of information from my health record")
- Patient name (again), record number, address, date of birth
- "Information Requested" (3 blank lines — completely open-ended)
- "Purpose of Release" (3 blank lines — also open-ended)
- Recipient name/organization/facility, address, phone number
- Patient signature, date, printed name of representative, relationship

The language is relatively plain, though the opening sentence is a run-on: `"I, ____________________________________hereby voluntarily authorize the disclosure of information from my health record."` There is no clear visual hierarchy — no section headers with differentiated formatting, no checkboxes, no structured options. The "Information Requested" and "Purpose of Release" sections are entirely unstructured blank lines, providing no guidance to the patient about what types of records are available or what constitutes a valid purpose.

The closing line `"PLEASE MAKE A COPY OF THIS RELEASE FOR YOUR RECORDS"` is practical but printed in all caps, and the final line `"HIPAA Authorization For Release of Medical Records"` appears as a footer-style label with no further HIPAA-specific content.

## 5. PATIENT-CENTEREDNESS

This form is poorly patient-centered in multiple respects:

- **Not patient-access specific**: The form is framed entirely around third-party disclosure ("The Information Is To Be Provided To: Name of Person/Organization/Facility"). There is no option for a patient requesting their own records. The structure assumes records flow from the provider to a named third party.
- **No scope guidance**: The "Information Requested" field is three blank lines with zero guidance. Compare this to Labette Health's actual Formstack form, which offers 15+ specific record type checkboxes (COVID-19, Abstract, Clinic Note, Consultation Report, Discharge Summary, EKG/Stress Test, ER Record, H&P, Lab Results, Operative Report, PFT, Radiology CD, Radiology Report, Sleep Study, Vaccination History).
- **No date range field**: There is no field for specifying a date range of records requested.
- **No format/delivery options**: No option for electronic delivery, no mention of email, portal, CD, or any format preference.
- **No Right of Access language**: Despite the footer referencing "HIPAA Authorization For Release of Medical Records," there is no mention of HIPAA § 164.524, patient rights, right to revoke, expiration period, or any of the standard HIPAA authorization elements required under 45 CFR § 164.508.
- **No EHI export awareness**: No mention of electronic health information export or bulk data access.

## 6. COMPLIANCE

The form is notable for what it **lacks** rather than what it imposes:

- **Missing required HIPAA authorization elements**: Under 45 CFR § 164.508(c), a valid authorization must include: (1) a description of information to be disclosed, (2) who is authorized to make the disclosure, (3) who will receive the information, (4) purpose, (5) expiration date or event, (6) signature and date, and (7) statements about the right to revoke and the ability/inability to condition treatment. This form is missing an expiration date/event (#5), any statement about the right to revoke (#7a), any statement about conditioning of treatment (#7b), and does not identify the disclosing entity (#2).
- **No submission instructions**: The form provides no address, fax number, email, or any indication of how to submit it. A patient filling this out would have no idea where to send it.
- **No fee disclosure**: No mention of charges for copies.
- **No notarization or in-person requirement**: The form does not impose these barriers, but this is unremarkable given the form's overall minimalism.

The closing disclaimer — `"This information is to be released for the purpose stated above and may not be used by recipient for any other purpose"` — is a re-disclosure limitation, which is appropriate but does not substitute for the missing HIPAA authorization elements.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Not Labette Health's form**: This PDF is a generic PatientPop template with no organizational branding, no provider name, and no connection to Labette Health. A patient who found and submitted this form would have no indication of where to send it and no assurance it would be processed by Labette Health.
- **Missing core HIPAA authorization elements**: The form lacks an expiration date, right-to-revoke statement, treatment-conditioning statement, and identification of the disclosing entity — all required under 45 CFR § 164.508(c) for a valid authorization.

### ⚠️ AMBIGUITIES

- **"Information Requested" is entirely open-ended**: Three blank lines with no examples, checkboxes, or guidance. A patient has no way to know what types of records are available or how to describe what they want.
- **No submission pathway**: The form says `"PLEASE MAKE A COPY OF THIS RELEASE FOR YOUR RECORDS"` but never says where to submit the original.
- **Unclear relationship to patient self-access**: The form is structured for third-party release ("The Information Is To Be Provided To") with no accommodation for a patient requesting their own records.

### ❌ ERRORS

- **Footer mislabels the form**: The footer reads `"HIPAA Authorization For Release of Medical Records"` but the form does not meet the minimum requirements for a valid HIPAA authorization under 45 CFR § 164.508.

### ✨ BRIGHT SPOTS

- **Labette Health's actual Formstack form (not this PDF) is notably strong**: It offers digital-first design with electronic signature, specific record-type checkboxes, date range fields, email delivery option, photo ID upload, sensitive-information exclusion choices, patient-self as a release option, and standard HIPAA authorization language including 1-year expiration and right to revoke. This represents a genuinely modern approach to ROI — but none of these qualities are present in form-1.pdf.
