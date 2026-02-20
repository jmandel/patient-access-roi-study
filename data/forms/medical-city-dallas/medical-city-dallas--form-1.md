# Medical City Dallas Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **English-language "Authorization for Release of PHI (Protected Health Information)"** form, form number HCA-840-00434, Rev. 09/21. It is a system-wide HCA Healthcare form — not specific to Medical City Dallas Hospital. The mailing address at the top is "PO Box 290789; Nashville, TN 37229-0789," which is HCA's corporate headquarters. The form is a general-purpose release authorization that covers both patient-initiated requests and third-party disclosures.

A companion document, form-2.pdf (HCA-840-00434-S), is a Spanish-language translation of the same form with identical structure and 52 fillable fields. Both forms were linked from the same medical records page.

## 2. FINDABILITY

**Mixed results.** Direct web searches for the form returned stale URLs on `medicalcityhealthcare.com/util/forms/` that all returned 404 errors — the forms had been migrated to HCA's digital asset management platform (`hcadam.com`). However, navigating the hospital website to the medical records page (`/locations/medical-city-dallas-hospital/for-patients/medical-records`) was straightforward. The page has a clear "Patient Requests" section with descriptively labeled download links: "Authorization for Release of Medical Information (PDF)." The form URL itself (`hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac?v=b53c28b5`) is an opaque API endpoint with a content hash — not human-readable or bookmarkable in any meaningful way. Overall, the form is findable through website navigation but not reliably discoverable via search engines due to the broken legacy URLs and opaque new URLs.

## 3. TECHNICAL ACCESSIBILITY

**Strong.** The form is a well-constructed digital-first PDF:

- **Text layer**: Full extractable text (4,145 characters), not a scan.
- **Fillable fields**: 52 interactive form fields on a single page — a high density of interactive elements. Field names are not exposed in metadata (`fillable_field_names: []`), but the field count confirms comprehensive interactivity.
- **File size**: 173,750 bytes (~170 KB) for a 1-page form — reasonable and indicates vector graphics/fonts rather than rasterized images.
- **Fonts**: 9 embedded fonts, 0 embedded images — consistent with a born-digital, professionally typeset document.
- **Page count**: 1 page. The entire form fits on a single page, which is efficient but may result in cramped layout given the density of content.

This is clearly designed as a digital artifact, not a scanned paper form. The 52 fillable fields suggest patients can complete this electronically before printing or submitting.

## 4. CONTENT DESIGN

**Functional but dense.** The form compresses a significant amount of content into a single page across three sections:

- **Section A** ("This section must be completed for all Authorizations"): Patient demographic fields (name, phone, DOB, last 4 SSN), recipient information (name, address, phone, fax, email), dates of service, purpose of disclosure, facility name, and delivery preferences.
- **Section B**: Marketing/sale of PHI questions — a specialized HIPAA-required section that most patients will skip.
- **Section C**: Signature block with patient/representative signature, date, printed name, relationship, and ID verification line.

**Record type selection** is granular, offering 16 specific categories: Consultation, Medication List, Discharge Instructions, Discharge Summary, Operative Report, Labor and Delivery Record, ER Report, Pathology Report, Specialty Test/Therapy, EKG Report, Problem List, Physician Orders, History and Physical, Radiology Report, Progress Notes, Clinical/Laboratory Report, plus "All Pertinent Records" and "Other" options.

**Delivery options** are well-articulated with four choices: Paper Copy, Electronic Media (if available), Encrypted Email, and Unencrypted Email. The unencrypted email option includes a risk disclaimer: *"There is some level of risk that a third party could see your information without your consent when receiving unencrypted electronic media or email."*

**Language clarity**: The form uses a mix of plain language and legal/medical terminology. The "I understand that" section (6 numbered items) is relatively clear, though phrases like "My treatment, payment, enrollment or eligibility for benefits may not be conditioned on signing this authorization" are legally precise but may challenge low-literacy readers. The psychotherapy notes section correctly implements the HIPAA requirement for separate authorization.

**Layout concern**: Fitting all this content — demographics, recipient info, delivery options, expiration settings, 16+ record type checkboxes, a 6-point disclosure statement, marketing/sale questions, and a signature block — onto a single page likely results in small font sizes and tight spacing. The 9 fonts may indicate use of condensed typefaces to fit everything.

## 5. PATIENT-CENTEREDNESS

**Adequate but not patient-access-focused.** Key observations:

- **Not patient-access-specific**: This is a general-purpose release form. The purpose field offers "At the request of the individual" as one option alongside "Other 3rd party recipient (please specify purpose)." It does not distinguish between a patient exercising their HIPAA Right of Access and a third-party authorization — both use the same form.
- **No HIPAA Right of Access reference**: The form does not cite 45 CFR § 164.524 or explain patients' rights to access their own records. The "I understand" section references privacy practices generally but not the Right of Access specifically.
- **Electronic delivery options**: The form does offer four delivery methods including encrypted and unencrypted email, which is better than many forms that only offer paper or fax.
- **USCDI reference**: The form includes a notable line: *"For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability. Requires Direct Address or National Provider Identifier."* This is an unusually forward-looking option that acknowledges modern health data interoperability standards, though it may be opaque to most patients.
- **Format options for records**: The granular record-type checklist gives patients control over scope, though the default "All Pertinent Records" makes it easy to request everything.
- **Reasonable copy fee**: Item 5 states *"I understand that I may see and obtain a copy of the information described on this form, for a reasonable copy fee, if I ask for it"* — this is appropriately vague about the amount but does disclose that fees may apply.

## 6. COMPLIANCE

- **Expiration**: Default 180-day expiration with options for a custom date or event. 180 days is a common and reasonable default.
- **SSN collection**: The form requests "Last 4 digit SSN (optional)" — while marked optional, collecting SSN on an ROI form is unnecessary for patient identification and raises privacy concerns. A medical record number or date of birth should suffice.
- **Fax restriction**: The form states "(FAX only to Physician Office / Medical facility)" — this limits where faxed records can be sent, which could be seen as a minor barrier if a patient wants records faxed to a non-medical recipient.
- **Psychotherapy notes**: Correctly requires a separate authorization per HIPAA § 164.508(a)(2).
- **Voluntary consent**: Properly states the authorization is voluntary and cannot condition treatment/payment.
- **Revocation rights**: Clearly states patients may revoke in writing at any time.
- **No notarization or in-person requirement**: The form does not mandate either, which is appropriate.
- **Centralized processing**: All requests go to Nashville HCA headquarters (PO Box 290789), not to the local hospital. This may cause confusion or delays for patients who expect to deal with Medical City Dallas directly.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **USCDI release option**: The inclusion of *"For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability"* is rare and forward-looking. This acknowledges electronic health information exchange standards and provides a pathway for structured data export, going beyond what most ROI forms offer.
- **Spanish-language version**: Providing a fully translated Spanish form (form-2.pdf) with identical structure and fillable fields demonstrates commitment to language access.
- **52 fillable fields**: The high number of interactive form fields means patients can complete the entire form digitally — a significant usability advantage over flat PDFs.
- **Four delivery options**: Offering Paper, Electronic Media, Encrypted Email, and Unencrypted Email gives patients meaningful choice in how they receive records.

### ⚠️ AMBIGUITIES
- **Centralized Nashville address with no local contact**: The form lists only HCA headquarters in Nashville. A patient at Medical City Dallas may not understand why they're mailing forms to Tennessee, and there is no local address, email, or submission option provided. It's unclear whether patients can also submit the form at the hospital in person.
- **"Electronic Media, if available"**: The qualifier "if available" is vague — it's unclear what determines availability or what format the electronic media would take (CD, USB drive, portal download?).
- **USCDI option may confuse patients**: The USCDI line requires a "Direct Address or National Provider Identifier," which are provider-facing technical concepts. A patient requesting their own records would likely not know what these are or how to provide them.

### 🚩 RED FLAGS
- **SSN collection**: Requesting the last 4 digits of Social Security Number — even optionally — on an ROI form is unnecessary and creates a data exposure risk. SSN is not required for HIPAA-compliant patient identification, and its presence on a form that may be faxed, mailed, or emailed increases the risk of identity theft.
