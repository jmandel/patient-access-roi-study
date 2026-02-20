# Evaluation: Joseph P. Addabbo Family Health Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is **OCA Official Form No. 960**, titled "Authorization for Release of Health Information Pursuant to HIPAA," a standardized form approved by the New York State Department of Health. It is not a custom form created by Addabbo but rather the state-standard authorization form designed originally for use in litigation contexts and subsequently adopted for broader use. The form is 2 pages: page 1 is the authorization itself; page 2 contains "Instructions for the Use of the HIPAA-compliant Authorization Form to Release Health Information Needed for Litigation."

In the context of the three documents found for this organization:
- **form-1.pdf** (this document): The primary ROI authorization form, linked from the Medical Records page. This is what a patient would use to request release of their records.
- **form-2.pdf**: A "We're Listening" bilingual patient survey/transfer form — not an ROI form, but related to the records transfer workflow.
- **form-3.pdf**: A general HIPAA consent form for routine use and disclosure of PHI, signed at patient registration. Not a records request form.

Form-1 is the only document that functions as a true authorization for release of health information.

## 2. FINDABILITY

Per the retrieval notes, the form was found on a dedicated **Medical Records page** (`/for-patients/medical-records/`) accessible under the "For Patients" navigation menu. The page labels the link as a "HIPAA-compliant request form." Web searches for the organization name plus authorization/release terms also surfaced this page.

However, the form is hosted on a **third-party platform** (`pbformsonline.com` / Practice Builders) using a JavaScript-based PDF viewer. The website links do not lead to a direct PDF download — they open the form in an embedded viewer. Discovering the actual PDF URL required inspecting browser network traffic. This means a patient trying to download the form for offline completion may struggle, though they can fill it out within the embedded viewer. The URL path (`1566545098hipaa___fillable_form_07-10-18.pdf`) is not human-readable and contains what appears to be a Unix timestamp prefix plus underscores, providing no meaningful description of the document's contents.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (6,446 characters), confirming this is not a scanned document.
- **Fillable fields**: The metadata reports **25 fillable form fields**, though `fillable_field_names` is an empty array, suggesting the fields exist but lack accessible name attributes. This is a significant accessibility gap — screen readers and assistive technology rely on field names to identify form inputs.
- **File size**: 135 KB for a 2-page PDF — reasonable.
- **Font count**: 7 fonts embedded.
- **Embedded images**: 1 (likely a seal or logo).
- **Digital-first design**: The form appears to have been designed digitally (not a paper scan). The instruction page text confirms: "This form may be filled out on line and downloaded to be signed by hand, or downloaded and filled out entirely on paper." The organization has added a typed-signature provision: "By typing my name on the Signature Line of this Request form, I acknowledge that it is my intent to sign this document and that the Joseph P. Addabbo Family Health Center shall accept the same as my signature."

The combination of fillable fields and acceptance of typed signatures makes this form functional for remote/digital completion, which is a positive attribute. However, the unlabeled form fields and the third-party viewer hosting reduce practical accessibility.

## 4. CONTENT DESIGN

**Length**: 2 pages. Page 1 is the operative authorization; page 2 is an instruction sheet. This is appropriately concise for the amount of information collected.

**Organization**: The form follows a numbered-item structure (Items 1–13), covering:
- Items 1–6: Legal notices and patient rights disclosures
- Item 7: Health provider releasing information
- Item 8: Recipient of information
- Item 9(a): Scope of records to release (with checkboxes and initials for sensitive categories)
- Item 9(b): Authorization to discuss health info with attorney/government agency
- Item 10: Reason for release
- Item 11: Expiration date/event
- Items 12–13: Representative information

The ordering front-loads dense legal language (6 numbered disclosures) before reaching the actionable fields. A patient must read through provisions about HIV redisclosure, the NYS Division of Human Rights phone number, and revocation rights before filling in any identifying information. This is structurally driven by the state form template, not by Addabbo's choices.

**Clarity**: The language is legalistic. Phrases like "In the event the health information described below includes any of these types of information, and I initial the line on the box in Item 9(a), I specifically authorize release of such information to the person(s) indicated in Item 8" are syntactically complex. The instruction page explicitly states the form was designed for "litigation in New York State courts" and can be used "more broadly" — this litigation-centric framing is unusual for a patient-facing medical records request form.

**Layout**: The checkbox options in Item 9(a) provide three scope choices: a date-range medical record, the entire medical record, or "Other." The sensitive-information initials (Alcohol/Drug Treatment, Mental Health Information, HIV-Related Information) are clearly delineated.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose authorization** — it covers both patient access and third-party release scenarios. Item 10 offers "At request of individual" as a reason, but this is one checkbox among options. The form does not distinguish between a patient exercising their HIPAA Right of Access (45 CFR § 164.524) and a third party seeking records. Item 9(b) specifically addresses disclosures to attorneys or governmental agencies, reinforcing the litigation origin of this form.

**Scope options**: Patients can choose:
- A date-range subset of the medical record
- The entire medical record (explicitly listing "patient histories, office notes (except psychotherapy notes), test results, radiology studies, films, referrals, consults, billing records, insurance records, and records sent to you by other health care providers")
- "Other" with a free-text line

This is reasonably granular. The explicit enumeration of what "entire medical record" includes is helpful.

**Format/delivery options**: The form does not offer any choice of delivery format (electronic, paper, CD, etc.) or delivery method (mail, email, patient portal, in person). There is no mention of electronic health information export or patient portal access.

**Right of Access language**: The form references HIPAA's Privacy Rule in its title and introductory language, but does **not** specifically cite 45 CFR § 164.524 (Right of Access) or explain the patient's right to receive their own records. The emphasis is on "release of health information" generally.

**SSN collection**: The form requests a Social Security Number in the header fields. While this may be used for patient matching, collecting SSN on an authorization form introduces privacy risk and is not required by HIPAA.

## 6. COMPLIANCE

**Voluntary signing**: Item 4 correctly states: "signing this authorization is voluntary. My treatment, payment, enrollment in a health plan, or eligibility for benefits will not be conditioned upon my authorization of this disclosure."

**Revocation rights**: Item 3 properly discloses the right to revoke "at any time by writing to the health care provider."

**Redisclosure notice**: Item 5 appropriately warns that disclosed information "might be redisclosed by the recipient" and may no longer be protected.

**Expiration**: Item 11 asks for a "date or event on which this authorization will expire" — this is patient-controlled and appropriate. The instructions note the patient may use language like "at the conclusion of my court case" or a specific date/timeframe.

**No fee disclosure**: The form does not mention fees for records. This is neutral — it neither imposes excessive fees nor informs patients of their cost-limited rights under HIPAA.

**Item 6 restriction**: The form states in all caps: "THIS AUTHORIZATION DOES NOT AUTHORIZE YOU TO DISCUSS MY HEALTH INFORMATION OR MEDICAL CARE WITH ANYONE OTHER THAN THE ATTORNEY OR GOVERNMENTAL AGENCY SPECIFIED IN ITEM 9 (b)." This language is peculiar for a general-purpose authorization — it seems to restrict verbal discussion to only attorneys or government agencies, even if the patient is authorizing release to a different recipient. This could be confusing for patients releasing records to family members, other providers, or insurers.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection on the form**: The header requests "Social Security Number" — collecting SSN on a records release authorization creates unnecessary privacy risk and is not required by HIPAA. Many organizations have moved away from collecting SSN for patient identification.

### ⚠️ AMBIGUITIES

- **Litigation-centric framing applied to patient access**: The instruction page states the form was designed "to authorize the release of health information needed for litigation in New York State courts" and "can, however, be used more broadly." A patient requesting their own records for personal use may be confused by the litigation framing, the attorney-discussion provisions in Item 9(b), and the Item 6 restriction on verbal discussion.
- **Item 6 discussion restriction**: The all-caps statement restricting discussion of health information to only attorneys or governmental agencies is confusing when the authorization is being used for non-litigation purposes. If a patient authorizes release to their new doctor, does Item 6 prevent Addabbo from discussing the records with that doctor by phone?
- **Fillable fields without accessible names**: The 25 fillable fields lack name attributes in the PDF metadata, which could cause confusion for users relying on assistive technology or automated form-filling tools.

### ❌ ERRORS

- **Outdated contact numbers**: The form lists the New York State Division of Human Rights at (212) 480-2493 and the NYC Commission of Human Rights at (212) 306-7450 for HIV-related discrimination complaints. These numbers should be verified for currency given the form's filename references a 2018 date (`07-10-18`).

### ✨ BRIGHT SPOTS

- **Typed signature acceptance**: The Addabbo-specific addition — "By typing my name on the Signature Line of this Request form, I acknowledge that it is my intent to sign this document and that the Joseph P. Addabbo Family Health Center shall accept the same as my signature" — removes the need to print, hand-sign, and scan the form. This is a meaningful accommodation for remote/digital submission.
- **Explicit enumeration of "entire medical record" contents**: Item 9(a)'s definition listing "patient histories, office notes (except psychotherapy notes), test results, radiology studies, films, referrals, consults, billing records, insurance records, and records sent to you by other health care providers" gives patients clarity about what they're requesting.
- **Sensitive information opt-in via initials**: The separate initialing requirement for alcohol/drug treatment, mental health, and HIV-related information provides granular patient control over the most sensitive record categories.
