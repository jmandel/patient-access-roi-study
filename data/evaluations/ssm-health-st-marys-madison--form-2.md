# Evaluation: SSM Health St. Mary's Hospital - Madison — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a system-wide SSMHC form titled **"Request for Access to/Authorization for Use and Disclosure of Protected Health Information"** (form number DPM-2065-035, dated 1/2019). It is a single-page, dual-purpose document that combines patient access requests with third-party disclosure authorizations into one form.

Within the set of three forms found for this organization, form-2 occupies a distinct niche: form-1 is a Wisconsin-specific authorization (2 pages, updated 8/2024), form-3 is a Madison-area location-specific authorization (2 pages, dated 5/2019), and this form-2 is the system-wide SSMHC form used across all states. Notably, form-2 is the only one whose title explicitly includes "Request for Access to" — the other two are titled only "Authorization to Release Protected Health Information." This makes form-2 the most clearly patient-access-oriented of the three, though it also doubles as a general disclosure authorization.

The form's source URL (`ssmhealth.com/getmedia/626ff70a.../medical-record-release-form.pdf`) uses a generic CMS media path with a GUID, giving no human-readable indication of its purpose or scope from the URL alone.

## 2. FINDABILITY

Per the retrieval notes, this form was discovered through the second search query (`SSM Health "medical records" "release form" authorization PDF`) and was directly downloadable without bot-blocking or JavaScript barriers. Overall retrieval difficulty was rated **easy**. However, the existence of three overlapping forms — system-wide, state-specific, and location-specific — creates ambiguity about which form a patient at St. Mary's Madison should actually use. A patient would need to evaluate all three to determine the right one, and the system provides no clear guidance on which applies in which circumstance. The GUID-based URL provides no discoverability advantage through search engines or bookmarking.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,756 characters). Not an image-only scan.
- **Fillable fields**: Zero. Despite having checkboxes and blank lines throughout, the PDF contains no interactive form fields. Patients must print and complete by hand.
- **File size**: 86,620 bytes for a single page — reasonable but slightly large given no embedded images and no fillable fields. The 11 embedded fonts contribute to the file size.
- **PDF version**: 1.4.
- **Digital-first design**: No. This is clearly designed as a print form. The blank underlines for fields (`PATIENT NAME:________`), checkbox symbols rendered as text characters, and lack of any interactive elements all indicate a paper-first design that was saved to PDF. The "PATIENT LABEL" placeholder at the bottom right further confirms this is designed for in-office use where a physical label sticker would be applied.

## 4. CONTENT DESIGN

**Length**: One page. This is compact given the amount of content packed in — patient demographics, authorization parties (from/to), delivery method, record types with date fields, purpose of disclosure, and a lengthy 8-bullet acknowledgement section. The density suggests very small font sizes were used to fit everything.

**Organization**: The form follows a logical top-to-bottom flow: patient identification → authorization (from/to) → delivery method → information to release → purpose → acknowledgement → signature. However, the dual-purpose nature means the layout must accommodate both patient-access and third-party-disclosure scenarios in the same real estate, leading to a cramped layout.

**Clarity**: The acknowledgement section uses reasonably clear language, though some sentences are long and complex. For example: *"I understand that if I am being requested to authorize a use or disclosure that, upon request, I will get a copy of this form after I sign it"* — the nested conditional phrasing here is awkward. The email encryption warning is a full paragraph: *"SSM Health Care believes that the only way to avoid third party interception of information sent through e-mail is to send such information by encrypted e-mail. Despite this warning about the risk that my protected health information could be read/intercepted by a third party if it is not sent by encrypted e-mail, I request SSM Health Care to send an electronic copy (if available) of the requested information by unencrypted e-mail."* This reads as a liability disclaimer rather than a patient-friendly explanation.

**Record type options**: The form lists specific record types with accompanying date blanks for each: Discharge Summary, History & Physical Exam, Progress Notes, Lab Reports, X-Ray Reports, Medication Records, Detailed Bill, plus "Other." It also includes checkboxes for sensitive categories: substance abuse, mental health/behavioral health, and HIV-related information. Each record type has an adjacent date line (`_________________`), which is unusual — most forms use a single date range rather than per-category dates.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This is the strongest aspect of form-2 relative to the other forms. The title explicitly names "Request for Access to" and the form includes:
- **Type of access requested**: "Inspection," "Hard Copy," "Electronic Copy (only available if SSM Health Care maintains the requested information electronically)"
- **Purpose options** include "For personal access (specify): Copy / Inspection / Summary"
- **Method of delivery**: "Mail," "Hold for pick up by:___," "Electronic (records will be provided on a CD and mailed to your residence)"

However, the electronic delivery option is limited — electronic means "a CD mailed to your residence," not direct digital delivery. The unencrypted email option exists only in the acknowledgement section as an opt-in after a risk warning, not as a primary delivery choice. There is no mention of patient portal delivery, secure download, or any modern digital transmission method.

**Right of Access language**: The form states *"I understand my request will be acted upon within 30 days"* and references the right to request review of denials, which aligns with HIPAA § 164.524 requirements. However, the form does not cite the regulation by name or number.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or TEFCA.

**Scope options**: Patients can specify date ranges and select from a list of record types, which is helpful. The sensitive-category checkboxes (substance abuse, mental health, HIV) allow patients to include or exclude these categories.

## 6. COMPLIANCE

**Expiration**: The form provides a fill-in-the-blank expiration date field with options for "at end of research study" and "not applicable for ongoing research" — suggesting this form is also used for research disclosures, not just patient access. There is no default expiration mentioned if the patient leaves the field blank, unlike form-1 which defaults to one year.

**Fees**: The acknowledgement states *"I may be required to pay the cost of creating paper copies or electronic media, mailing copies, supervising my inspection, or preparing a summary except for uses and disclosures for the purpose of treatment, payment, and operations."* The exception for TPO is an odd inclusion in a patient-access context — a patient requesting their own records should be subject to HIPAA's cost-based fee limits regardless, and the TPO exception language could confuse patients into thinking their personal access request might not incur fees if it relates to their ongoing care.

**No notarization required**: Correct.

**No in-person-only submission**: The form does not mandate in-person delivery, though it does not clearly state how to submit (no mailing address, fax number, or email address for submission appears on the form itself).

**Identity verification**: The signature area includes "ID VERIFIED:____________________" and "Records Received by:_____________" lines, indicating an administrative verification step. This is standard.

**30-day timeline**: The acknowledgement explicitly commits to acting within 30 days, which matches the HIPAA requirement.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"Electronic Copy" means a CD mailed by postal mail.** The form states: *"Electronic (records will be provided on a CD and mailed to your residence)."* In 2026, offering a mailed CD as the "electronic" option is functionally outdated and may not satisfy a patient's right under HIPAA to receive records in a readily producible electronic format of their choosing. This limits patient access to a medium many modern computers cannot even read.

### ⚠️ AMBIGUITIES

- **Dual-purpose form creates confusion.** The form title combines "Request for Access to" with "Authorization for Use and Disclosure of" — blending patient access rights (governed by HIPAA § 164.524, which does not require an authorization) with third-party disclosure (governed by § 164.508, which does). A patient simply requesting their own records should not need to sign an "authorization" — they have a right of access. Combining these concepts may cause patients to misunderstand that an authorization is required for their own records.
- **No submission instructions on the form itself.** Unlike form-3 (which includes the PO Box address and fax numbers) and form-1 (which lists contact offices on the back), form-2 provides no mailing address, fax number, email, or other submission method. A patient downloading this form from the web would not know where to send it.
- **Expiration field has research-specific options but no patient-access default.** The expiration line offers "at end of research study" and "not applicable for ongoing research" — options irrelevant to patient access — but does not state what happens if a patient leaves the field blank.
- **"Name of SSMHC Entity" field at top.** The form asks the patient to fill in the *"Name of SSMHC Entity maintaining the information"* — expecting patients to know the corporate entity name rather than simply the hospital or clinic they visited.

### ❌ ERRORS

- **Outdated form.** The form is dated 1/2019 (DPM-2065-035), over 7 years old. Form-1 was updated to 8/2024. The entity name "SSMHC" (SSM Health Care) appears throughout, which is an older corporate name; the current branding is "SSM Health." This form may be an orphaned legacy document still accessible via the CMS but no longer actively maintained or linked from current pages.
- **No fillable fields despite digital distribution.** A PDF distributed via web download with zero interactive form fields is a missed opportunity — this forces all patients to print, hand-write, and physically submit the form.

### ✨ BRIGHT SPOTS

- **Explicitly names patient access as a purpose.** The "For personal access (specify): Copy / Inspection / Summary" option under Purpose of Disclosure, and the "Type of access requested" field at the top, clearly acknowledge that patients may be requesting their own records — not just authorizing third-party release. This is a meaningful distinction that many ROI forms fail to make.
- **30-day response commitment in writing.** The acknowledgement explicitly states: *"I understand my request will be acted upon within 30 days."* Including this timeline directly on the form sets clear expectations and aligns with HIPAA requirements.
- **Right to review denials.** The form states: *"I understand I will be notified, and have the right to request review of any denial of access other than those made in accordance with applicable law."* This is a patient-rights-forward inclusion that many forms omit.
