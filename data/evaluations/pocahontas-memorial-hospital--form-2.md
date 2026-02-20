# Pocahontas Memorial Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **COVID-19 Testing and Diagnosis Authorization to Release Information** — a single-page, special-purpose release form for disclosing COVID-19 test results to employers or schools. It is **not** a general-purpose ROI form. The document was created on 01/14/2021, during the pandemic, and is narrowly scoped to COVID-19 results only.

Pocahontas Memorial Hospital also provides a general **Authorization for Release of Medical Information** (form-1.pdf, 2 pages, revised 02/25/2020) which covers all record types and purposes. Form-2 exists alongside form-1 as a supplementary, purpose-specific authorization. Both are linked from the hospital's Medical Records page at `https://www.pmhwv.org/patients-and-visitors/medical-records/`.

## 2. FINDABILITY

The form was located via a two-step process. A general web search for Pocahontas Memorial Hospital authorization forms initially returned generic template sites, not the hospital's own link. A site-scoped search (`site:pmhwv.org authorization release medical records`) succeeded, and the form was confirmed on the Medical Records page. The source URL is `https://www.pmhwv.org/wp-content/uploads/2021/01/COVID-19-Release-for-Employees-Students.pdf`.

The URL and filename (`COVID-19-Release-for-Employees-Students.pdf`) are descriptive and clearly convey the form's purpose. However, retrieval notes indicate bot protection or reCAPTCHA on the site interfered with direct `curl` downloads, requiring a browser-based workaround. This could impede assistive technology or programmatic access.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The form has extractable text (2,624 characters) and is digitally created, not a scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite being a digital-origin document, no interactive fields are provided — all blanks are underscores that must be printed and handwritten.
- **File size**: 175,616 bytes (~172 KB) for a single page, which is reasonable.
- **Fonts**: 4 fonts used.
- **Embedded images**: 1 (likely a logo).
- **Digital-first design**: The form was clearly created digitally (not scanned), but it is designed as a print-and-fill document. There is no mechanism for electronic completion.

## 4. CONTENT DESIGN

**Length**: One page — appropriate for its narrow scope (COVID-19 results only).

**Layout**: The form is compact. Patient identification fields are at the top (name, birth date, last 4 SSN digits, employer/school, fax number). The authorization text follows in a dense paragraph block, followed by signature lines and contact information.

**Clarity**: The language is mostly plain but contains some dense legal-style paragraphs. The authorization paragraph beginning with "I authorize Pocahontas Memorial Hospital (PMH) to disclose my identifiable health information..." is a single long block of text without breaks, mixing the authorization statement, verbal authorization provisions, processing time information, and hours of operation into one run-on section.

**Typos/errors**: The text contains a misspelling — "evaluationg" (should be "evaluating") and "businesss" (should be "business"). These are minor but suggest limited quality review.

**Fields collected** (approximately 7 manual-entry fields):
- Employee/Student Name
- Birth Date
- Last 4 digits of SSN
- Employer/School
- Fax Number
- Patient/Representative Signature + Date
- Witness signature + Date

## 5. PATIENT-CENTEREDNESS

This form is **not designed for patient access to their own records**. It is an authorization for the hospital to release COVID-19 results to a third party (employer or school). A patient seeking their own records would need form-1.pdf instead.

**Scope**: Narrowly limited to "identifiable health information related to my Covid-19 testing and diagnosis." No options to select specific record types or date ranges — the scope is fixed.

**Delivery mechanism**: Results are transmitted exclusively via fax to the employer/school. The form states: "No results will be released without a fax number." There is no option for mail, email, electronic portal, or patient pickup.

**Verbal authorization provision**: The form includes a provision for verbal authorization: "In the event I am unable to obtain/submit this authorization form myself, I give my verbal authorization for PMH to release my COVID-19 test results to My Employer or My School listed above as witnessed by a Hospital Staff member." This is a pragmatic accommodation, likely developed during the pandemic when patients may have been too ill to sign paperwork.

**Rights language**: The form notes that "federal and state privacy laws may not protect the information" after disclosure, and that the patient can revoke authorization "in writing." No reference to HIPAA § 164.524 or patient rights more broadly.

**Expiration**: Valid for one year from signature date, which is reasonable.

## 6. COMPLIANCE

**SSN collection**: The form collects the "LAST 4 DIGITS OF SSN#" as an identifier. While only partial, SSN collection on a release form is not standard practice and raises privacy concerns — birth date alone is typically sufficient for patient verification alongside name.

**Fax-only delivery**: "No results will be released without a fax number" constrains delivery to a single channel. While fax is an accepted healthcare transmission method, making it the sole option with no alternative is restrictive.

**Processing time**: The form notes "Your COVID test result may not be faxed until the next business day following receipt by Medical Records personnel" with hours "7:30 am to 4:00 pm M-F, excluding Holidays." This is transparent but could cause delays for time-sensitive COVID results.

**Revocation**: Requires written notice to the Medical Records Department — standard and appropriate.

**No fee disclosure**: The form does not mention any fees, which is appropriate for a third-party release of limited information.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES
- The form is titled "COVID-19 TESTING AND DIAGNOSIS AUTHORIZATION TO RELEASE INFORMATION" but its filename and posting alongside the general ROI form on the Medical Records page may confuse patients who arrive looking for a general records request form. A patient unfamiliar with the distinction could select the wrong form.
- The verbal authorization clause embeds a broad consent to release within the same sentence as the written authorization: "I give my verbal authorization for PMH to release my COVID-19 test results..." It is unclear whether this verbal authorization requires separate documentation or is automatically in effect once the form is signed.

### ❌ ERRORS
- "evaluationg" — misspelling of "evaluating" in the authorization paragraph.
- "businesss" — misspelling of "business" in the processing time note.
- The form has zero fillable fields despite being a digitally-created PDF, making it a missed opportunity for electronic completion.

### 🚩 RED FLAGS
- **Partial SSN collection**: Requesting "LAST 4 DIGITS OF SSN#" on a release authorization form is unnecessary. HIPAA does not require SSN for patient identification on authorization forms, and collecting it — even partially — increases the risk of identity-related harm if the form is lost or misdirected via fax.

### ✨ BRIGHT SPOTS
- **Verbal authorization accommodation**: The provision for witnessed verbal authorization is a practical, patient-friendly feature developed for pandemic conditions where patients may be unable to sign. This shows pragmatic flexibility.
- **Contact information completeness**: The form provides full address, fax number, and phone extension for the Medical Records Department, plus a helpful note that it is "Located in same building as Pocahontas Pharmacy."
- **One-page brevity**: For a single-purpose form, one page is appropriately concise.
