# Rhode Island Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **department-specific** "Authorization to Disclose Protected Health Information" form used by **Lifespan Medical Imaging** (the diagnostic imaging department). It is a single-page form focused exclusively on the release of imaging records — reports and CDs. The form still carries the legacy "Lifespan" branding (revised 2/2/2023), whereas Rhode Island Hospital's primary system-wide ROI form (form-1.pdf) has been updated to "Brown University Health" branding (revised 10/2024).

Compared to form-1.pdf (the main system-wide authorization), this form is narrower in scope: it covers only imaging records rather than the full range of medical records. It lacks the numbered-section structure of form-1, has fewer record-type options, and sets a shorter authorization expiration window (90 days vs. 1 year). The two forms serve complementary roles — form-1 is the general-purpose ROI form applicable to Rhode Island Hospital and its sibling facilities, while form-2 is a specialized imaging-department form.

## 2. FINDABILITY

Per the retrieval notes, this form was found through web searches for Rhode Island Hospital authorization/release forms. It was directly downloadable from the Brown University Health website at a long but publicly accessible URL (`brownhealth.org/sites/default/files/2023-04/DI-Authorization-to-Release-Protected-Health-Information-FORM-...pdf`). No login, bot blocking, or portal access was required.

However, the URL path is opaque and non-descriptive (begins with `DI-Authorization...`), and the file is dated from an April 2023 upload. It is unclear whether this form is prominently linked from the medical records request page at `brownhealth.org/patients-visitors/request-medical-records` or if it was only discoverable via direct search. The filename itself does not mention "imaging" or "radiology," which could make it harder for a patient to distinguish from the general form. A patient specifically seeking to release imaging records would likely need to know this form exists separately from the main ROI form.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,173 characters), making the form searchable, copy-pastable, and accessible to screen readers.
- **Fillable fields**: Zero. The form has no interactive form fields — all fields are blank lines or checkboxes that would need to be printed and hand-filled, or annotated in a PDF viewer.
- **File size**: 46 KB for a single page — appropriately small.
- **Fonts**: 6 fonts embedded; reasonable for a simple form.
- **Embedded images**: 1 (likely a logo or header graphic).
- **Digital-first design**: No. This is a flat PDF clearly designed for print-and-fill workflow. The `DATE REQUESTED` field uses a hand-drawn underline (`_________________________________`), and checkboxes are represented as text characters (` `) rather than interactive form elements. The bottom includes internal administrative fields ("To be completed by DI Medical Records") and a document control number ("CC 1013020"), further indicating a print-oriented workflow.

## 4. CONTENT DESIGN

**Length**: 1 page. Appropriate for the narrow scope of imaging-records release.

**Clarity**: The form uses moderately accessible language. The opening instruction "(This form must be completed in full before signing)" is clear and direct. The legal boilerplate in the lower half is dense but standard — referencing federal privacy laws, Rhode Island General Laws, and 42 CFR Part 2.

**Organization**: The layout follows a logical top-to-bottom flow: patient demographics → recipient information → dates of treatment → purpose → sensitive-information exclusions → record types and method of release → legal disclaimers → signature. However, the "TYPE OF RECORDS REQUESTED" and "METHOD OF RELEASE" lines are crammed onto the same horizontal band as the sensitive-information exclusions, which creates visual confusion. The form lacks numbered sections (unlike form-1's 11-section structure), making it harder to reference specific parts.

**Layout and whitespace**: The form is somewhat cramped. Multiple fields and checkboxes are packed onto single lines (e.g., `TYPE OF RECORDS REQUESTED:  REPORTS  CD` and `METHOD OF RELEASE:  PT PICK UP  COURIER  MAIL  FED EX  OTHER` all on adjacent lines, mixed with the sensitive information exclusion checkboxes). The extracted text shows an awkward interleaving of sensitive-info checkboxes with the record-type and method-of-release sections, suggesting the physical layout tries to compress too much into limited space.

**Font size**: The form uses 6 fonts. Based on the density of content fitting on a single page (~3,173 characters including boilerplate), font sizes appear adequate but likely on the smaller side for the legal disclaimer text.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general disclosure authorization**, not a patient-access-specific form. The language "I hereby authorize Lifespan Medical Imaging to obtain from and/or release to:" frames the form as a third-party release mechanism. The purpose checkboxes include "Patient Request" as one option alongside "Coordination of Care" and "Legal," which at least acknowledges patient-initiated requests but does not distinguish patient access rights from other disclosures.

**Scope options**: Limited by design. The form only covers imaging records with two type options: "REPORTS" and "CD." There is a "SPECIAL REQUESTS" write-in line. A "Dates of treatment or time period" field is provided, which is helpful.

**Format options**: The form offers **physical delivery methods only**: "PT PICK UP," "COURIER," "MAIL," "FED EX," and "OTHER." There is no mention of electronic delivery, email, patient portal access, or any digital format option. This is a notable gap, especially for imaging records where DICOM files could readily be transmitted electronically.

**Right of Access language**: The form does **not** reference HIPAA § 164.524, the patient's Right of Access, or any patient rights specific to accessing one's own records. The legal text references "federal privacy laws" generically and cites 42 CFR Part 2 for substance use protections, but there is no explicit mention of HIPAA or the patient's right to obtain copies of their records.

**EHI Export awareness**: No mention of electronic health information export or bulk data access.

**Sensitive information handling**: The form provides opt-out checkboxes for sensitive categories: sexual abuse, mental health, sexually transmitted infections, alcohol/drug use/test, and AIDS/HIV test results. This uses a "do not want disclosed" framing, which is appropriate — it defaults to including all information unless the patient actively excludes categories.

## 6. COMPLIANCE

**Authorization expiration**: The form states it "will expire 90 days from the date signed below." This is notably shorter than form-1's 1-year expiration. While HIPAA requires authorizations to include an expiration, 90 days is relatively restrictive and could force patients to re-authorize if processing is delayed.

**Revocation rights**: The form correctly states the patient may revoke authorization "by notifying Lifespan in writing" and that previously disclosed information would not be subject to revocation.

**Right to refuse**: The form states: "I understand that I may refuse to sign this authorization and that my refusal to sign will not affect my ability to obtain treatment, payment, or my eligibility for benefits." This is compliant with HIPAA's prohibition on conditioning treatment on authorization.

**Liability waiver**: The form includes: "I release Lifespan, its employees and my physicians from all liability arising from this disclosure of my health information." This is a broad liability release bundled into the authorization.

**Fees**: No fee disclosure is included on this form (unlike form-1, which mentions "There may be a fee associated with this request").

**Identity verification**: The bottom of the form includes "ID VERIFIED BY: ___________" — an internal field suggesting identity verification occurs at pickup/release, which is appropriate for security but the process is not explained to the patient.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **90-day authorization expiration**: The form states authorization "will expire 90 days from the date signed below." This is notably short — particularly for a patient requesting their own records, where processing delays could mean the authorization expires before the request is fulfilled. Form-1 for the same health system allows 1 year. For patient-access requests under HIPAA, covered entities must act within 30 days (with a possible 30-day extension), but a 90-day window leaves little margin for the patient if there are administrative delays.

- **Broad liability waiver**: "I release Lifespan, its employees and my physicians from all liability arising from this disclosure of my health information." This blanket liability release, embedded in an authorization form, asks the patient to waive all liability claims related to disclosure as a condition of the authorization. This is an unusually broad bundling of a legal waiver into what should be a straightforward records-release form.

### ⚠️ AMBIGUITIES

- **"Obtain from and/or release to" dual-purpose language**: The authorization states "I hereby authorize Lifespan Medical Imaging to obtain from and/or release to:" a specified recipient. This combines two distinct actions (obtaining records from an outside source and releasing records to an outside party) into a single authorization, which could confuse patients about the direction of information flow.

- **"Courier" in signature line**: The signature field reads "Signature of Patient*, Legal Guardian, or Representative, Courier." It is unclear what role a "Courier" plays in signing an authorization form. This may be an artifact of a workflow where couriers sign to acknowledge receipt, but its presence in the patient-signature line is confusing.

### ❌ ERRORS

- **Outdated branding**: The form references "Lifespan Medical Imaging" and "Lifespan" throughout, despite the organization's rebrand to "Brown University Health" completed by October 2024. The form revision date is 2/2/2023, making it over two years old with outdated entity names. This could cause patient confusion about whether the form is still valid or applicable.

- **Inconsistent formatting**: The extracted text reveals layout artifacts where the "TYPE OF RECORDS REQUESTED" and "METHOD OF RELEASE" sections are interleaved with the sensitive-information exclusion checkboxes, suggesting the PDF layout does not linearize cleanly — potentially causing accessibility issues for screen readers.

### ✨ BRIGHT SPOTS

- **Sensitive-information opt-out model**: The form uses a patient-friendly approach to sensitive information by letting patients check categories they do *not* want disclosed, rather than requiring them to opt in to each category. This defaults to full disclosure while giving patients explicit control over sensitive categories (sexual abuse, mental health, STIs, substance use, HIV).

- **Multiple delivery methods**: While lacking electronic delivery, the form does offer five physical delivery options (patient pickup, courier, mail, FedEx, other), giving patients more flexibility than many forms that only offer mail or in-person pickup.
