# Evaluation: East Georgia Healthcare Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a single-page "Medical Records Release" form bearing EGHC's logo and letterhead listing their service lines: "Family Practice, Pediatrics, Behavioral Health, Chiropractic, Optometry & Dental Services." The form is designed for **incoming records** — it authorizes another provider to release records *to* EGHC, not for a patient to obtain their own records *from* EGHC. The key language reads: "I hereby request copies of all records pertaining to my health history and medical care released to: EAST GEORGIA HEALTHCARE CENTER, 215 NORTH COLEMAN STREET, SWAINSBORO, GA 30401."

Three documents were found for this organization: form-1 (this English-language release), form-2 (a Spanish-language equivalent), and form-3 (the Notice of Privacy Practices). No form was found that is specifically designed for a patient requesting their own records from EGHC. This form is the closest available instrument for an ROI request, but it is functionally a records-transfer form, not a patient access form.

## 2. FINDABILITY

The form is hosted on RightSignature (an e-signature platform) and linked from EGHC's forms page at https://eghc.org/forms/. Locating it requires:

1. Navigate to eghc.org
2. Find the "Forms" page (linked from the site navigation)
3. Identify the "Medical Records Release" link among several other form types

This is a reasonable number of clicks (2–3), but the forms page lists many different document types (child/adult demographics, sliding scale packets, etc.) without grouping or categorization, which could cause confusion. The RightSignature URLs are opaque (e.g., `https://secure.rightsignature.com/templates/280e0c9b-...`) and give no indication of the document's content.

Older direct PDF links (e.g., `/wp-content/uploads/2019/02/Medical-Records-Release.pdf`) found via web search now return 404 errors, meaning patients who find cached search results will hit dead links. The current form is not directly downloadable as a PDF — it requires interaction with the RightSignature platform.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** None. The captured PDF is image-only (a PNG converted to PDF), yielding 0 extractable characters. The underlying RightSignature form renders the document as a raster image.

**Fillable fields:** The captured PDF has 0 fillable fields. However, the RightSignature platform does provide interactive fields — patients who access the form through the live RightSignature link can fill and sign electronically. The form itself is therefore technically fillable *in situ*, but not as a standalone document.

**File format:** Single-page PDF, 210 KB. Reasonable file size, but the image-only nature means it cannot be searched, copied, or read by screen readers.

**Digital-first design:** The underlying document appears to have been designed digitally (clean typography, consistent formatting, no scan artifacts), but the delivery mechanism (RightSignature image rendering) strips away all digital affordances. A patient who prints this form would get a clean page, but one with no interactive capability. The RightSignature approach is a mixed result: it adds e-signature capability but removes text accessibility.

**Accessibility:** With no text layer, this document is completely inaccessible to screen readers or assistive technology in its PDF form. The RightSignature interactive version may be somewhat more accessible, but the underlying image-based rendering is inherently problematic.

## 4. CONTENT DESIGN

**Length:** One page — appropriately concise for a records release form.

**Layout:** The form is cleanly organized with a clear visual hierarchy: logo and letterhead at top, patient identification fields, purpose statement, destination address (EGHC), source provider blank line, record-type checklist, release duration options, legal disclaimer, and signature block. The design is uncluttered with adequate whitespace.

**Patient identification fields:** Four fields — Patient Name, Date of Birth, Patient Address, and SSN. The inclusion of SSN is notable; while it can aid in record matching, collecting Social Security Numbers on a form that may be transmitted by fax or mail raises privacy concerns.

**Record type checklist:** 17 checkbox options organized in three columns:
- All Medical Records Including Psychiatric
- All Medical Records Except Psychiatric
- Colonoscopy Reports
- Current Medications
- Drug and Alcohol Tests
- EKG Reports
- HIV Records
- Hospital Records
- Immunization Records
- Laboratory Data
- List of Allergies
- Mammogram Results
- Pap Reports
- Progress Notes
- Psychiatric Records
- X-ray Reports
- Other (with blank line)

This is a reasonably comprehensive set of granular options, allowing patients to specify exactly what records they want transferred.

**Release duration:** Two options — "One time release" and "Coordination of Care (as long as patient is under the care of both providers)." These are clearly stated.

**Delivery note:** The form states "NO DISC – Please mail," indicating records will be sent by physical mail rather than on disc media. No electronic delivery option is mentioned.

**Legal language:** The disclaimer paragraph covers revocation rights, re-disclosure risk, and non-conditioning of treatment on authorization. The language is moderately dense but covers standard HIPAA authorization elements. The statement "You may refuse to sign the authorization" is a good inclusion.

**Font size:** Text appears to be 10–11pt throughout, which is readable. The heading and destination address are in bold, larger type.

## 5. PATIENT-CENTEREDNESS

**Critical issue — wrong direction:** This form is designed for records flowing *to* EGHC from other providers, not for patients requesting their *own* records from EGHC. A patient who wants to exercise their HIPAA Right of Access (45 CFR § 164.524) to obtain their own health information from EGHC would find no appropriate form on the website. The destination is hard-coded to EGHC's address, and the "Requesting medical records from:" field is where the patient fills in their *previous* provider.

**Scope options:** The checklist does allow granular record-type selection, which is positive. However, there is no date range field — a patient cannot limit the request to a specific time period.

**Format/delivery options:** The form explicitly states "NO DISC – Please mail," and provides no option for electronic delivery (email, patient portal, etc.). The only delivery mechanism mentioned is physical mail and potentially fax (the EGHC fax number is listed).

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's right of access. It references revocation rights and re-disclosure but frames these in the context of third-party authorization, not patient access.

**Personal representative:** The form includes a line for personal representatives: "As a personal representative, I have authority to act for the individual because I am:___" — allowing guardians or authorized persons to sign. This is a useful inclusion but lacks detail about what documentation is required.

## 6. COMPLIANCE

**SSN collection:** The form requests the patient's Social Security Number. While not a HIPAA violation per se, collecting SSN on a faxed/mailed document creates unnecessary data exposure risk. HIPAA's minimum necessary standard suggests collecting only what is needed for the purpose; SSN is rarely necessary for records matching when name, DOB, and address are already collected.

**No expiration date:** The form lacks an expiration date for the authorization. HIPAA requires that authorizations include "an expiration date or an expiration event" (45 CFR § 164.508(c)(1)(v)). The "One time release" and "Coordination of Care" options partially address this for ongoing authorizations, but there is no explicit expiration.

**No fee disclosure:** The form does not mention any fees that may be charged for copying records.

**Submission method unclear:** The form does not specify how a patient should submit the completed authorization (mail, fax, in-person, or through RightSignature). The RightSignature platform implies electronic submission is possible for the interactive version, but the form text itself gives no guidance.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No patient access form exists.** EGHC does not appear to offer any form for patients requesting their own records. The only ROI-related form is designed exclusively for incoming records from other providers. A patient seeking to exercise their HIPAA Right of Access has no clear path on the website.
- **SSN collection on a faxable form.** Requesting Social Security Numbers on a document designed to be faxed or mailed creates unnecessary exposure of highly sensitive identifiers.

### ⚠️ AMBIGUITIES

- **Missing authorization expiration.** The form lacks an explicit expiration date or event for the authorization, which is a required element under 45 CFR § 164.508(c)(1)(v). The "One time release" option implies single-use but does not specify when the authorization expires if not acted upon.
- **Submission method unstated.** The form text provides no instructions on how to return the completed form. A patient accessing the static PDF (rather than the RightSignature version) would not know where or how to submit it.
- **"NO DISC – Please mail" is ambiguous.** It is unclear whether this is an instruction to the sending provider (don't send records on disc, mail them instead) or a limitation communicated to the patient. Either way, it forecloses electronic delivery without explanation.

### ❌ ERRORS

- **Broken legacy URLs.** The previously published PDF links (e.g., `/wp-content/uploads/2019/02/Medical-Records-Release.pdf`) return 404 errors, but still appear in web search results, creating a confusing findability experience.

### ✨ BRIGHT SPOTS

- **Spanish-language version available.** EGHC provides a parallel Spanish-language release form (form-2), which serves the needs of Spanish-speaking patients in the community.
- **RightSignature e-signature integration.** While the implementation has accessibility trade-offs, offering electronic signature capability is a meaningful step toward digital-first form handling. Patients can complete and sign the form online without printing, signing, and faxing.
- **Granular record-type checklist.** The 17-option checklist with an "Other" field gives patients meaningful control over what information is released, which is better than many forms that offer only an all-or-nothing choice.
