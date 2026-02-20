# Evaluation: Alabama Medical Group — form-1.pdf

**Organization:** Alabama Medical Group, P.C. (Mobile, AL)
**Document:** "Request for Release of Information" (form-1.pdf)
**Source URL:** https://www.alabamamedicalgroup.com/wp-content/uploads/2018/02/Request-for-Release-of-Information-Form.pdf
**Found on:** https://www.alabamamedicalgroup.com/patient-resources/medical-records/request-medical-records/

---

## 1. DOCUMENT IDENTIFICATION

This is a general-purpose **authorization for release/obtaining of medical records**, titled "Request for Release of Information." It is a single-page, flat PDF (no fillable fields) with a text layer. The form authorizes Alabama Medical Group, P.C. either "To Release To" or "To Obtain From" records — serving dual purpose for both outbound release and inbound record requests.

Alabama Medical Group hosts two forms relevant to information disclosure:
- **form-1.pdf** (this document): The primary ROI authorization form, linked from both the "Request Medical Records" page and the "Other Patient Forms" page. An identical copy exists at a second URL (uploaded one month apart in Feb and Mar 2018, byte-for-byte identical per MD5 hash).
- **form-2.pdf**: A simpler "Permission to Give Medical Information" form that authorizes phone disclosure to up to three family members. This is a narrower consent form, not a full ROI authorization.

This form is the organization's sole mechanism for patients to request their own records. There is no separate patient-access-specific form; patients must use the same general release authorization that would be used for third-party transfers.

---

## 2. FINDABILITY

The form was **easy to locate**. The website has a clearly organized Patient Resources section with a dedicated "Request Medical Records" page at `/patient-resources/medical-records/request-medical-records/`. The same form is also linked from the "Other Patient Forms" page. The retrieval notes characterize the search as straightforward, with no significant difficulties.

The URL path (`/wp-content/uploads/2018/02/Request-for-Release-of-Information-Form.pdf`) is descriptive enough — the filename "Request-for-Release-of-Information-Form.pdf" clearly identifies the document's purpose. However, the URL reveals this is a WordPress upload from February 2018, suggesting the form has not been updated in approximately 8 years.

The duplicate hosting at two URLs (Feb 2018 and Mar 2018 uploads) is a minor organizational issue but does not impair findability.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The full text (3,272 characters) is extractable, confirming this is not a scanned image.
- **Fillable fields:** Zero. The form has no interactive form fields — it is designed as a print-and-fill document with blank lines rendered as underscores.
- **File size:** 529 KB for a single page, which is relatively large. The metadata shows 1 embedded image and 7 fonts, suggesting a logo or letterhead image contributes to the file size.
- **Page count:** 1 page.
- **Design origin:** This appears to be a digitally created document (not a scan), given the clean text layer and multiple fonts. However, it is designed entirely for a paper workflow — fill in by hand, sign in ink.

The lack of fillable fields means patients cannot complete this form digitally. They must print it, fill it out by hand, and submit it physically. There is no mention of email, fax, or portal submission options on the form itself.

---

## 4. CONTENT DESIGN

**Length and proportionality:** At one page, the form is concise. It covers identification, recipient/source, purpose, record type, sensitive information consent, signature, and authorization terms — all on a single page. This is efficient, though the density makes the layout somewhat cramped.

**Language clarity:** The form uses a mix of plain language and legal boilerplate. The identification fields are straightforward. The sensitive information consent section is reasonably clear: "I understand that the above request may contain information concerning sexually transmitted disease and/or treatment, drug and/or alcohol test and treatment, psychiatric treatment, and HIV/AIDS tests or treatment." The authorization terms paragraph is denser legalese but is standard for ROI forms.

**Organization and layout:** The form follows a logical top-to-bottom flow:
1. Patient identification (name, DOB, SSN, medical record number)
2. Release/obtain destination with address, phone, fax
3. Purpose checkboxes (Legal, Insurance, Evaluation & Treatment, Other)
4. Type of information to be released (free-text with example prompt)
5. Sensitive information consent (two signature blocks — permit or not permit)
6. Authorization terms and final signature
7. Legal representative and witness signature lines

**Field inventory:** The form collects: patient name (last, first, MI, maiden), DOB, SSN, medical record number, release-to or obtain-from entity, address, phone, fax, purpose (4 options), information type (free-text), two sensitive-info signature lines, patient/legal representative signature and date, representative authority statement, and employee/witness signature and date.

**Type/category of information field:** The form provides a free-text field with a helpful example prompt: "(Example: Office Notes, Labs, In-Office Testing, all records)." This gives patients guidance on what to specify.

**Date range:** Notably absent — there is no field for specifying a date range for the requested records. Patients cannot limit their request to a specific time period on the form itself.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a **general-purpose authorization** that does not distinguish between a patient requesting their own records and a third party requesting records. The dual "To Release To" / "To Obtain From" structure suggests it primarily serves inter-provider and third-party transfers. A patient requesting their own records would need to put their own name and address in the "Release To" field, which is workable but not intuitive.

**Scope options:** Patients can specify the type of information via free text and select a purpose category. However, there is no date range field, no checkbox list of record categories, and no way to request specific encounter records.

**Format/delivery options:** The form provides **no options for electronic delivery**. There is no mention of email, patient portal, CD/USB, or any delivery format. The form implicitly assumes paper delivery.

**Right of Access language:** The form contains **no reference to HIPAA § 164.524**, patient rights, or the right of access. It does not inform patients that they have a legal right to access their records. The authorization language focuses entirely on consent-to-release framing.

**EHI Export / electronic access:** No mention whatsoever.

**SSN collection:** The form requests the patient's Social Security Number, which is not necessary for a medical records request and raises privacy concerns. While it may help with record matching, it is an unnecessary data collection point that could deter patients.

---

## 6. COMPLIANCE

**Expiration:** The form states "Unless otherwise revoked, this authorization will expire one year from the date signed below." A one-year expiration is reasonable and standard.

**Revocation:** The form provides for written revocation: "this authorization may be revoked in writing at any time by submitting a letter to the medical records supervisor, except to the extent that action has been taken in reliance on this authorization." This is standard HIPAA-compliant language.

**Liability waiver:** The form includes: "The facility, its employees, officers and physicians are hereby released from any legal responsibility or liability for disclosure of the above information to the extent indicated and authorized herein." This is a liability release embedded in the authorization — a common but notable practice.

**Re-disclosure warning:** The form includes: "the protected health information used or disclosed pursuant to this authorization may be subject to re-disclosure by the recipient of this disclosure and may no longer be protected under federal law." This is appropriate HIPAA-required language.

**Witness requirement:** The form includes a "Signature of Employee/Witness" line with a date field. It is unclear whether a witness signature is required or optional. If required, this would be a barrier not mandated by HIPAA for patient access requests.

**Sensitive information consent:** The form handles sensitive information (STD, drug/alcohol, psychiatric, HIV/AIDS) through a dual opt-in/opt-out structure — the patient signs one of two blocks: "I AM SPECIFICALLY PERMITTING" or "I AM SPECIFICALLY NOT PERMITTING" inclusion of this information. This is a reasonable approach to complying with state laws that may require specific consent for sensitive categories, though it adds complexity.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection on a records request form.** The form requests "S.S.N." as a standard field alongside DOB and medical record number. Collecting Social Security Numbers for a medical records release is unnecessary and creates a privacy/identity theft risk. HIPAA does not require SSN for patient identification on authorization forms.

- **Possible witness requirement.** The "Signature of Employee/Witness" line at the bottom suggests the form may need to be completed in the presence of a staff member, which would effectively require in-person submission. HIPAA does not require witnessed signatures for patient access requests.

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release.** The form's "To Release To" / "To Obtain From" structure does not clarify how a patient requesting their own records should complete it. A patient may be confused about whether to put themselves in the "Release To" field or how this form differs from a third-party authorization.

- **Witness line is ambiguous.** It is unclear whether the employee/witness signature is required for the form to be processed or is merely optional. The label "Signature of Employee/Witness" does not indicate whether it is mandatory.

- **No submission instructions.** The form itself contains no instructions on where or how to submit it — no mailing address, fax number, email address, or office location is printed on the form. A patient who downloads this form from the website would not know how to return it without navigating back to the website or calling the office.

### ❌ ERRORS

- **Stale upload date.** The form URL indicates it was uploaded in February 2018 and has apparently not been updated since. While not necessarily an error, the form's design and content (no electronic delivery options, no portal mention, no HIPAA right-of-access language) reflect practices that are increasingly outdated.

### ✨ BRIGHT SPOTS

- **Helpful example text for record type field.** The prompt "(Example: Office Notes, Labs, In-Office Testing, all records)" gives patients concrete guidance on what to specify, which is better than a blank field with no guidance.

- **Clean sensitive information consent design.** The dual signature block approach (specifically permitting vs. specifically not permitting sensitive information) gives patients a clear, affirmative choice rather than burying this in fine print or forcing blanket consent.
