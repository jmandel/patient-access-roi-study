# Evaluation: Northwest Colorado Health — form-1.pdf

**Organization:** Northwest Colorado Health (Steamboat Springs, CO)
**Type:** FQHC · Independent · Nonprofit · West
**Document:** Authorization for Use or Disclosure of Protected Health Information — Behavioral Health
**Source URL:** https://northwestcoloradohealth.org/file_download/inline/2f9a888a-2c02-465a-944d-2573dcc8583c
**Revision date:** 04/2020

---

## 1. DOCUMENT IDENTIFICATION

This is a **behavioral health–specific** Authorization for Use or Disclosure of Protected Health Information. It is one of two ROI forms Northwest Colorado Health provides; the companion document (form-2.pdf) covers medical and dental records. The two forms are nearly identical in structure and language but diverge in the record types covered: form-1 addresses behavioral health records including substance abuse, mental health, and psychotherapy notes, while form-2 addresses medical/dental records and HIV-related information.

Patients who need to release records spanning both behavioral health and medical/dental categories would need to complete **both** forms. The form itself makes this explicit: "I understand that if I also saw a Medical Provider for Substance Abuse a second release is required to be completed for those records."

The form is a single page (606,501 bytes), dated revision 04/2020.

---

## 2. FINDABILITY

According to retrieval notes, the form was found without significant difficulty. A site-scoped web search (`site:northwestcoloradohealth.org`) located both forms and the patient forms page. The forms are linked from a dedicated **Patient Forms** page at `https://northwestcoloradohealth.org/what_you_can_do/patient-resources/patient-forms/english.html`. The URL path (`what_you_can_do/patient-resources/patient-forms/english.html`) is reasonably descriptive and suggests a logical site hierarchy (Patient Resources → Patient Forms → English).

The download URL itself (`/file_download/inline/2f9a888a-2c02-465a-944d-2573dcc8583c`) is a system-generated UUID with no descriptive filename, which means a patient couldn't identify this form from the URL alone. No difficulties were reported: no bot blocking, no patient portal login required, no broken links.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The document has extractable text (4,288 characters), confirming it is not an image-only scan.
- **Fillable fields:** The metadata reports `fillable_field_count: 41`, but `fillable_field_names: []` (empty array). This is an inconsistency — the notes describe the form as "Flat PDF without fillable fields" and designed to be "printed and filled by hand," yet the metadata tool detected 41 form widgets. Examining the extracted text shows blank-line fields (e.g., `Patient Name: _____________________________________`), which are consistent with a flat, non-interactive PDF. The 41 "fields" likely correspond to checkbox-like annotation objects or decorative form elements that lack proper field naming. Regardless of interpretation, the form is **not practically fillable** — a patient cannot type into it digitally.
- **Font count:** 6 fonts, indicating designed typography rather than a simple scan.
- **Embedded images:** 9 images. Given that this is a single-page form, these are likely logos, icons, or decorative elements (possibly the checkbox squares and section header graphics visible from the text structure like "About You," "Special Situations," "Your Medical Records," "Signature").
- **File size:** 606 KB for a single page is moderately large, likely due to embedded images/graphics. Not prohibitive but could be optimized.
- **Digital-first design:** The form was designed digitally (not a scan), but it is designed for a **print-and-handwrite workflow**, not for electronic completion.

---

## 4. CONTENT DESIGN

**Length:** Single page. This is commendably concise for an authorization form that covers behavioral health, substance abuse, and psychotherapy notes — record types that typically trigger extra legal language.

**Clarity and tone:** The introductory text is approachable: "We value your privacy at Northwest Colorado Health. Legally, we cannot release your written health record to anyone (including you) without your specific consent." This is plain language that frames the form's purpose clearly. However, some legal clauses later are dense: "The confidentiality of these records is required Title 42 of the United States code. This material shall not be transmitted to anyone without written consent or authorization as provided in this statute."

**Organization:** The form uses labeled sections that follow a logical flow:
1. "About You" — Patient information (name, DOB, SSN, address, phone)
2. "Special Situations" — (section header visible but content not elaborated in text)
3. "Your Medical Records" — FROM/TO entities, record types, date ranges
4. FROM/TO fields for specifying sender and recipient
5. Record type checkboxes and date range
6. Purpose of disclosure
7. Substance abuse / mental health / psychotherapy notes authorization
8. Signature and legal disclaimers (6 numbered points)

**Fields collected:** Patient name, date of birth, Social Security number (SSN), address, phone number, FROM entity details (name/agency, phone, fax, address), TO entity details, record types (Progress Note, Lab Report, Other), date range, purpose of disclosure, and two signature lines.

**Layout observations:** Cramming all of this onto a single page likely results in small text and tight spacing. With 6 fonts, 9 embedded images, patient info fields, FROM/TO blocks, record type checkboxes, purpose of disclosure options, behavioral health authorization checkboxes, a primary signature line, 6 numbered legal disclaimers, and a final signature block — a single page is dense.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is a **general authorization** form — it is not specific to patient self-access. The FROM/TO structure treats the patient's own access the same as a third-party release. The TO field lists "Self / Legal Guardian" as a pre-printed option alongside "Northwest Colorado Health" and "Other," which at least acknowledges self-requests but doesn't differentiate the process.

**Scope options:** The form offers:
- Date range selection ("From & To Dates" or "ALL Dates")
- Record type selection: Progress Note, Lab Report, Other (and a "NO RECORDS NEED RELEASED" option)
- Purpose of disclosure: Second Opinion, Legal, Insurance, School, Primary Care Provider Change, Other

This provides reasonable granularity for specifying what records to release, though it lacks options for immunization records, visit summaries, or imaging.

**Format/delivery options:** No electronic delivery options are mentioned. There is no checkbox for email, portal, CD/USB, or any electronic format. The form collects fax numbers for both FROM and TO entities, implying fax is a delivery method. No mention of electronic health information export or bulk data access.

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's right of access. The numbered disclaimers reference federal privacy regulations generally and Title 42 (substance abuse confidentiality) specifically, but there is no affirmative statement of the patient's right to obtain their records.

**Processing time:** "We will work on your request as soon as possible, but it may take up to 48 business hours to complete." This is notably fast — 48 business hours (~6 business days) is well within HIPAA's 30-day window and faster than many providers promise.

**SSN collection:** The form asks for the patient's Social Security number. This is unusual and raises privacy concerns for a records release form, as SSN is not required by HIPAA for identity verification.

---

## 6. COMPLIANCE

**Authorization expiration:** "This authorization will expire two years from my last date of service visit." This is a reasonable duration.

**Revocation rights:** Clearly stated — the patient can revoke at any time by notifying the Privacy Officer in writing. However, the form refers to "Northwest Colorado Visiting Nurse Association" as the entity to notify, which appears to be the organization's former name. The mailing address provided (940 Central Park Drive, Suite 101, Steamboat Springs, CO 80487) is presumably current.

**Conditional treatment:** Point 4 states "My health care and payment for my health care will not be affected if I do not sign this form," which is the correct HIPAA-required disclosure. Point 5 adds the behavioral health caveat: refusal "will not jeopardize my right to obtain present or future treatment for psychiatric disabilities except where disclosure of the information is necessary for the treatment."

**Re-disclosure warning:** Appropriately included: "information used or disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and no longer be protected by Federal privacy regulations."

**42 CFR Part 2 compliance:** The form includes substance abuse authorization language and a reference to Title 42, reflecting awareness of the stricter confidentiality rules for substance abuse treatment records.

**Submission method:** The form does not specify how to submit it. There is no instruction to bring it in person, mail it, fax it, or submit it electronically. This is ambiguous — a patient downloading this form has no guidance on what to do with it once completed.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Social Security Number requested:** The form includes a field for "SS#" with a blank line. Collecting SSNs on a records release form is unnecessary under HIPAA and creates a data security risk. Most organizations use name + DOB + medical record number for identity verification.
- **No submission instructions:** The form gives no guidance on how or where to submit the completed authorization — no mailing address for submission, no fax number for the HIM department, no email, no portal link. The only address on the form is the Privacy Officer's address for revocations, not for submitting the form itself.

### ⚠️ AMBIGUITIES

- **"Special Situations" section:** This section header appears in the extracted text but its content is unclear — the text jumps from patient information fields directly to "Your Medical Records." It may be a visual label for the behavioral health–specific authorization language, but without seeing the layout it's ambiguous what it encompasses.
- **Two signature lines with unclear purpose:** The form has an initial signature line ("Signature of Patient, Parent or Legal Guardian") followed by six numbered legal points and then a second signature block ("Signature of Patient" + "Relationship to Patient if not self"). It's unclear whether both signatures are required or if the second block is the actual authorization signature while the first is specifically for the substance abuse/mental health acknowledgment.
- **"NO RECORDS NEED RELEASED" checkbox:** This option is puzzling on an authorization form — if no records need to be released, why would the patient be completing the form? This may be for administrative use or revocation purposes, but its purpose is not explained.
- **Legacy organization name in revocation clause:** The revocation section refers to "Northwest Colorado Visiting Nurse Association" rather than the current name "Northwest Colorado Health." This could confuse patients about whether they're dealing with the right entity.

### ❌ ERRORS

- **Grammar error in Title 42 reference:** "The confidentiality of these records is required Title 42 of the United States code" — this sentence is missing a preposition. It should read "required **by** Title 42" or "required **under** Title 42."
- **Outdated organization name:** "Northwest Colorado Visiting Nurse Association" appears in the revocation section despite the organization now operating as "Northwest Colorado Health." The form was revised in 04/2020, so this name should have been updated.

### ✨ BRIGHT SPOTS

- **Fast processing commitment:** The 48 business hours turnaround promise is significantly faster than the industry norm and well within HIPAA's 30-day requirement.
- **Plain-language introduction:** The opening paragraph ("We value your privacy...") is warm, clear, and patient-friendly — a noticeably better tone than the legalistic openings on many ROI forms.
- **Photocopy validity:** "A photocopy of this form will be considered as valid as the original" — this is a patient-friendly provision that prevents the form from becoming a barrier if the original is lost.
- **Conditional treatment protection clearly stated:** The form explicitly tells patients their care won't be affected by declining to sign, which is the correct HIPAA disclosure and is stated more clearly than on many forms.
