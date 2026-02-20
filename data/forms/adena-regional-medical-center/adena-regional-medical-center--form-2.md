# Evaluation: Adena Regional Medical Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is an **older version** of Adena Health System's "Authorization: Release of Information Form," revised 09/02/2020. It is a general-purpose authorization for use/disclosure of health information — not specific to patient self-access. The form addresses the "272 Hospital Road, Chillicothe, OH 45601" location.

**Relationship to other documents found:**
- **form-1.pdf** is a newer revision of the same ROI form (CLI.1777, Rev. 10/25), found linked from the billing/financial section. Form-1 lists a different address (110 Vaughn Lane vs. 272 Hospital Road), adds a witness signature line, an "Abstract" record-type option, an "Itemized Bill" option, and an "Attorney/Legal Office Use Only" section — all absent from form-2.
- **form-3.pdf** is a separate 2025 fee schedule / patient letter (image-only scan, no text layer).

Having two versions of the same form simultaneously available on the website — with no clear indication which is current — is confusing. The notes confirm: "It's unclear which one the organization considers current." Form-2 is linked from the "Option 3 - By Mail or Fax" section of the medical records request page, suggesting it may still be actively distributed despite being superseded by form-1.

## 2. FINDABILITY

**Retrieval difficulty: Easy.** Per the retrieval notes, the forms were located via web search for `site:adena.org authorization release medical records`, which surfaced the medical records request page at `https://www.adena.org/patients-and-visitors/patient-rights/medical-records-request`. The page directly links both authorization form PDFs.

Form-2 specifically was linked under the "Option 3 - By Mail or Fax" section of that page. The URL itself (`authorization-for-roi-final---2020-09-02.pdf`) is somewhat descriptive, though the triple-dash and date-stamp suggest an administrative naming convention rather than a patient-facing one. The source URL path (`default-document-library/`) further suggests this is an older file that was uploaded to a generic CMS location, as opposed to form-1's more curated path (`billing-and-financial/`).

The page structure is reasonable: Patients & Visitors → Patient Rights → Medical Records Request. This is 3 clicks from the homepage — logical but not prominently surfaced.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. Full text is extractable (4,139 characters), enabling search, copy-paste, and screen reader access.
- **Fillable fields:** Zero. All fields use underscores/blanks for manual completion (e.g., `Patient Name: _________________________________________`). A patient must print and handwrite, or use PDF annotation tools.
- **File size:** 580,303 bytes (~567 KB) for a single page — notably large. For comparison, form-1 (also 1 page with similar content) is only 131 KB. This suggests form-2 may contain embedded images or less-optimized production.
- **Embedded images:** 2 images listed (likely a logo and possibly a background element).
- **Font count:** 6 fonts embedded.
- **PDF version / design origin:** The form has a text layer and is not a scan, but it is clearly designed as a print-first document. The reliance on underscored blanks and checkbox-by-initial conventions (`_____ Release records to`) confirms it was not designed for digital completion.

**Summary:** Functional as a readable digital document but not designed for digital workflow. No interactive form fields despite being a text-based PDF where adding them would be straightforward.

## 4. CONTENT DESIGN

**Length:** 1 page — concise and proportionate for an authorization form. All necessary elements fit on a single sheet.

**Organization:** The form follows a logical top-to-bottom flow:
1. Administrative header (driver's license, for office use)
2. Patient demographic information
3. Direction of disclosure (release to / obtain from / exchange with)
4. Recipient identification
5. Date range
6. Record types (checkbox list)
7. Purpose of disclosure
8. Patient rights disclosures ("I understand the following")
9. Signature and representative information

**Clarity:** Mixed. The form opens with "- Administrative Use Only – Driver's license number:" at the very top, which is confusing for patients — they may wonder if they need to provide this. The authorization language in the "I understand" section is reasonably clear but uses long, dense paragraphs rather than concise bullet points. For example, the revocation clause is a single run-on block:

> "That I have the right to revoke this authorization at any time and that I must do so in writing and submit my written revocation to the Medical Records Department, 272 Hospital Road, Chillicothe, OH 45601. I understand that the revocation will not apply to information that has been released in good faith prior to receipt of written revocation. I understand that the revocation will not apply to my insurance company when the law provides my insurer with the right to contest a claim under my policy."

**Record type options:** 9 specific categories plus "Other" and "Entire Treatment Record" — a reasonable set. Includes `X-ray / Imaging CD` and `X-ray / Imaging Report` as separate options, which is thoughtful.

**Layout:** Adequate but cramped. The single-page constraint means text is tightly packed. The "I understand" section uses paragraph format rather than bullet points, making it harder to parse. The checkbox convention (using `_____` followed by a label) is clear but old-fashioned.

**Font size:** Appears readable based on the text density relative to a single page, though the metadata doesn't provide exact point sizes.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose** release form. It supports three directions: "Release records to," "Obtain records from," and "Exchange verbal information with." There is no separate pathway or language specifically addressing a patient requesting their own records under HIPAA's Right of Access. A patient wanting their own records would need to fill in themselves as the recipient, which is not explicitly guided.

**Scope options:** Good. Patients can specify:
- Date range ("Dates of Service to Release – From / To")
- Specific record types (9 checkboxes plus "Entire Treatment Record" and "Other")
- Purpose of disclosure (5 options: Continuation of Medical Care, Insurance, Legal, Disability, Personal)

**Format options:** The form includes an electronic delivery option: "That record copies will be released in paper format unless requested as electronic by initialing here _________________. Please provide email for such: _________________________________________________________________________." This is a positive inclusion, though it requires initialing (on a non-fillable form) and email delivery rather than offering portal access or other secure digital methods.

**Right of Access language:** No explicit reference to HIPAA § 164.524 or the patient's right of access. The form mentions that authorization is "voluntary" and that signing is not required "to ensure healthcare treatment," but this is standard authorization language rather than right-of-access language.

**EHI export awareness:** No mention of electronic health information export, bulk data, or any modern data portability concepts.

**Sensitive information handling:** The form includes a blanket statement: "That this information may contain treatment information for drug / alcohol abuse, physical and mental illness, HIV Testing, HIV Test Results, Diagnosis of HIV, AIDS, ARC or other AIDS related disease." This disclosure is informational rather than requiring separate consent for these categories, which is appropriate under Ohio law for patient-directed releases but could be confusing — patients may not understand whether they are authorizing release of these specific categories or merely being informed that such information might exist.

## 6. COMPLIANCE

**Fees:** The form states: "That with the exception of records being copied for continuity of care, for insurance company or other third party reimbursement, there WILL be a charge for copies of records in accordance with Ohio Law." The emphasis on "WILL" (capitalized) is notable. The form does not disclose the actual fee amounts — patients must consult form-3 (the separate fee schedule). Under HIPAA's Right of Access, fees for patient-directed requests must be limited to a reasonable, cost-based fee. Referencing "Ohio Law" rather than HIPAA may result in higher fees than the federal standard permits for patient access requests.

**Expiration:** "Unless specified differently, this authorization will expire (date or event) _______________ or if I fail to specify, this authorization will expire one year from the date of the signature." A one-year default expiration is standard and reasonable.

**Revocation:** Clearly stated — must be in writing, submitted to the Medical Records Department at the specific address. This is standard.

**SSN collection:** The form requests "Last 4 digits SSN" in the header demographic section. While partial SSN collection is common, it's not required by HIPAA for identity verification and raises unnecessary data security concerns.

**Driver's license:** The "Administrative Use Only – Driver's license number" field at the top is positioned for staff use, not patient completion, but its placement at the very top of the form is confusing.

**No notarization requirement.** No in-person-only submission requirement (the form is linked from the "By Mail or Fax" section). No unreasonable barriers to submission.

**Psychotherapy notes:** The form includes "Psychotherapy (requires approval by psychotherapist)" as a record type option. Under HIPAA, psychotherapy notes (as defined in 45 CFR § 164.501) do require separate authorization for disclosure, so requiring psychotherapist approval is appropriate for third-party releases. However, for patient self-access under the Right of Access, providers cannot condition release on psychotherapist approval — but since this form doesn't distinguish between patient access and third-party release, this nuance is lost.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee language references Ohio Law instead of HIPAA:** The statement "there WILL be a charge for copies of records in accordance with Ohio Law" could result in fees exceeding HIPAA's cost-based limits for patient access requests. Ohio's fee schedule (ORC § 3701.741) allows per-page charges that may exceed HIPAA's reasonable cost-based fee. The form makes no distinction between patient-access requests (subject to HIPAA fee limits) and third-party requests (subject to state law fees).

- **Psychotherapy notes gating for patient access:** "Psychotherapy (requires approval by psychotherapist)" is appropriate for third-party release but would be an impermissible barrier if applied to a patient requesting their own records under the Right of Access (with limited exceptions). Since the form doesn't distinguish request types, staff may apply this restriction universally.

### ⚠️ AMBIGUITIES

- **Two versions of the same form live on the website simultaneously.** Form-2 (revised 09/02/2020) is linked from the "Option 3 - By Mail or Fax" section, while form-1 (Rev. 10/25) is linked from a different section of the same page. Different addresses appear on each (272 Hospital Road vs. 110 Vaughn Lane). A patient could submit either version, potentially to the wrong address.

- **Sensitive information disclosure is informational but unclear.** The statement about drug/alcohol, mental health, and HIV information doesn't clearly explain whether the patient is *authorizing* release of these categories or merely being *informed* they may exist in the record. Patients may not know if they can exclude these categories.

- **"Administrative Use Only" driver's license field** at the top of the form may confuse patients who see it first and think they must provide a driver's license number.

### ❌ ERRORS

- **Superseded form still actively linked.** Form-2 (2020) appears to be an older version that should have been replaced by form-1 (2025), yet both remain on the medical records request page. The older form lists a different mailing address, which could result in misdirected requests.

### ✨ BRIGHT SPOTS

- **Electronic delivery option included.** The form explicitly offers email delivery of records as an alternative to paper: "record copies will be released in paper format unless requested as electronic by initialing here." While the mechanism is basic (initialing + email address), the mere presence of this option puts the form ahead of many peers.

- **Single-page design.** Keeping the entire authorization on one page is efficient and reduces patient burden. All necessary elements — demographics, direction, scope, purpose, rights, and signature — fit without feeling excessively cramped.
