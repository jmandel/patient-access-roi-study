# Columbus Community Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page **"Authorization to Release Medical Records"** form (form ID: MR-1, dated 12/14 — likely December 2014). It is the only ROI-related document found for Columbus Community Hospital. The form is a general-purpose authorization for releasing medical records from the hospital to a named recipient. It is not specifically designed for patient self-access under HIPAA's Right of Access; it is framed as a release *to* a third party ("I authorize Columbus Community Hospital to release the following information on [patient] to: [Name and Address]"). A patient requesting their own records would need to list themselves as the recipient, which is unintuitive.

The form header identifies "COLUMBUS COMMUNITY HOSPITAL, INC." at "4600 38th Street, PO Box 1800, Columbus, NE 68602-1800." Footer references include "*1HIPAA*" and filing instructions: "Found in Policy Manager/Consent Forms" and "c: HIPAA Manual," suggesting this is an internal compliance document repurposed for patient-facing use.

## 2. FINDABILITY

**Moderate difficulty.** The form was found via web search but not through straightforward website navigation. The hospital operates two domains — `columbushosp.org` (older, hosts the PDF) and `columbusch.com` (newer, main navigation). The patient forms page on the newer site (`columbusch.com/patient-forms/`) mentions the Release of Information form and provides an email address (`release@columbusch.com`) for submission, but does **not** include a direct download link to the PDF. The PDF itself lives at a long, non-descriptive URL on the legacy domain:

> `https://www.columbushosp.org/Content/Uploads/ColumbusHosp/files/Release%20Med%20Records%2C%20Authorization.pdf`

A patient navigating the main website would find a mention of the form but no way to download it. Finding it required a web search that surfaced the legacy-domain URL. The URL filename ("Release Med Records, Authorization.pdf") is at least descriptive of the content.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present — full text is extractable via pdftotext (2,420 characters).
- **Fillable fields:** Zero. The form has no interactive form fields whatsoever. All blanks are represented as underscores in the text (e.g., `______________________________________________________________________________`). Patients must print and handwrite.
- **File size:** 211 KB for a single page, which is somewhat large — likely due to 1 embedded image (probably the hospital logo) and 10 fonts.
- **Digital-first design:** No. This is clearly a print-era document designed for handwritten completion. The blank-line formatting, witness signature line, and "AM/PM" time notation all indicate paper-first design.
- **PDF version:** Not explicitly noted, but the flat structure with no form fields is consistent with an older PDF.

The form is not a scan (it has real text), but it offers no digital interaction. A patient cannot fill it on-screen.

## 4. CONTENT DESIGN

**Length:** One page — appropriately concise for a basic authorization form.

**Structure and organization:** The form follows a logical top-to-bottom flow:
1. Patient identification (name, DOB)
2. Recipient identification (name, address)
3. Dates of treatment and record types (9 checkbox options)
4. Purpose for disclosure (6 options)
5. Special authorization for sensitive information (substance abuse, mental health, HIV/AIDS)
6. Patient acknowledgments (4 numbered items)
7. Signature block with witness line
8. Notice of Revocation section

**Clarity:** The language is relatively straightforward but still legalistic. The acknowledgment section uses passive legal constructions: "Medical information to be disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and no longer protected by State or federal law." This is standard but not plain language.

**Layout concerns:** As a single page containing all of the above elements, the form is likely quite dense. With 10 fonts listed in the metadata, there is some typographic variation, but fitting authorization, acknowledgments, signatures, and a revocation notice onto one page leaves little whitespace. The record-type checkboxes list 9 options in a column, which is efficient but compact.

**Readability:** The form uses standard medical/legal terminology. Terms like "H & P" (history and physical) would not be understood by many patients.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is designed for third-party release. The structure "I authorize Columbus Community Hospital to release the following information on [patient] to: [Name and Address]" assumes the records are going to someone else. There is no dedicated pathway, language, or option for a patient requesting records for themselves. A patient would need to write their own name and address in the "to:" field.

**Scope options:** Reasonably granular. Nine record types are offered as checkboxes: Discharge Summary, ER Record, Lab & X-ray Reports, Operative Report, Progress Notes, H & P, X-ray Films, Consult Report, and Complete Record. Date range is captured via "Date(s) of Treatment." Six purpose options are listed: Treatment, Insurance, Follow Up, Legal Proceedings, Personal, and Other.

**Format/delivery options:** None specified. The form does not mention electronic delivery, email, CD, or any format preference. The notes indicate the patient forms page instructs patients to email the form to `release@columbusch.com`, which at least provides an electronic submission path — but this is not stated on the form itself.

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's right of access. The footer notation "*1HIPAA*" and "HIPAA Manual" reference exists but serves as an internal filing code, not patient-facing rights information.

**EHI Export awareness:** No mention of electronic health information export or bulk data access.

## 6. COMPLIANCE

**Authorization expiration:** The form states: "This authorization is effective for 12 months after the date it was signed." This is a reasonable standard timeframe.

**Revocation rights:** Clearly stated — patients may "revoke this authorization at any time by contacting HIM Department at CCH." A dedicated "Notice of Revocation" section is included at the bottom of the form with fields for patient name, original authorization date, and effective revocation date. This is a positive feature.

**Non-retaliation:** Acknowledgment #1 states: "My refusal to sign this authorization will not affect my ability to obtain treatment at Columbus Community Hospital." This is appropriate.

**Re-disclosure warning:** Acknowledgment #2 warns about potential re-disclosure. Standard language.

**Witness requirement:** The form includes a "Witness to signature only" line. While this is not labeled as mandatory, requiring a witness could be a practical barrier for patients completing the form at home.

**Fees:** No fees are mentioned on the form.

**Sensitive information:** Substance abuse, mental health, and HIV/AIDS information each require specific separate authorization via checkboxes, which is consistent with 42 CFR Part 2 and state law requirements.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No patient self-access pathway:** The form is structured exclusively as a third-party release ("to: [Name and Address]"). HIPAA's Right of Access (45 CFR § 164.524) entitles patients to request their own records, but this form provides no clear mechanism for that. A patient requesting their own records must awkwardly fill in their own name as the recipient, with no guidance that this is a valid use of the form.

### ⚠️ AMBIGUITIES

- **Witness line purpose unclear:** The "Witness to signature only" line does not indicate whether a witness is required or optional. If required, this creates a barrier — patients cannot complete the form alone.
- **Unexplained jargon:** "H & P" (history and physical) is listed as a record type without explanation. Many patients would not understand this abbreviation.
- **"AM/PM" time notation on signature line** suggests a level of time-specificity (`___________________ PM Date/Time`) that is unusual and potentially confusing. The "AM" and "PM" appear as pre-printed text adjacent to the date/time field, making it unclear how the patient should indicate the time.

### ❌ ERRORS

- **Form date "12/14" suggests December 2014** — over 11 years old at the time of evaluation. While not necessarily incorrect, a form this old may not reflect current regulatory requirements or organizational practices.
- **Internal filing codes on patient-facing form:** Footer text "*1HIPAA*", "Found in Policy Manager/Consent Forms", "Consent Form Manual", "c: HIPAA Manual", and the page number "42" are internal document-management notations that were not removed before publishing the form for patient use.
- **Disconnected web presence:** The form is hosted on `columbushosp.org` but the main patient-facing website (`columbusch.com`) does not link to it. Patients following the website navigation path would find a reference to the form but no download link.

### ✨ BRIGHT SPOTS

- **Built-in revocation section:** Including a "Notice of Revocation" directly on the authorization form is thoughtful — patients don't need to find a separate form or write a letter to revoke their authorization.
- **Granular record-type selection:** Nine specific record types plus "Complete Record" gives patients meaningful control over what is released, rather than an all-or-nothing approach.
- **Email submission mentioned on website:** While not on the form itself, the patient forms page provides `release@columbusch.com` as a submission channel, offering at least one electronic submission option.
