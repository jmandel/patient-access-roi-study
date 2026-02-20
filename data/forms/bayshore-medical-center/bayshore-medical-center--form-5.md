# Bayshore Medical Center — Form 5 Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document title**: "PATIENT REQUEST FOR HEALTH INFORMATION"
**Source**: Pascack Valley Medical Center (an HMH sister facility), downloaded from `pascackmedicalcenter.com/wp-content/uploads/sites/7/2024/09/PVC-Patient-Request-Form.pdf`
**Form ID**: None visible in the extracted text
**Date**: Not dated in the form text
**Pages**: 1 | **File size**: 61 KB | **Text layer**: Yes | **Fillable fields**: 0

This is a patient-access-specific request form from Pascack Valley Medical Center, a sister facility within the Hackensack Meridian Health (HMH) system. It is **not** a Bayshore Medical Center form — it was retrieved during the search process as a comparison document from a sibling hospital that maintains its own website (`pascackmedicalcenter.com`). Among the six forms found, form-6 (CMR-003) is the primary ROI form applicable to Bayshore; form-5 serves as a point of comparison from a facility in the same health system that chose a different form design. The mailing address and phone number on form-5 reference Pascack Valley specifically: "HIM Department, 250 Old Hook Rd. Westwood NJ, 07675" and "201-781-1121."

## 2. FINDABILITY

This form was found on Pascack Valley Medical Center's own website, which is separately managed from the main HMH site. Per the retrieval notes, the search process included checking sister facilities' websites for comparison forms. A patient at Bayshore Medical Center would have no reason to find this form — it is not linked from any Bayshore or HMH Medical Records page. A Pascack Valley patient, however, would presumably find it on their facility's website. The URL path (`/wp-content/uploads/sites/7/2024/09/`) suggests it's hosted as a WordPress media upload, with no descriptive URL structure. Findability for an actual Bayshore patient: not applicable — this is not their form. Findability for a Pascack Valley patient: moderate, assuming it's linked from a patient resources page on pascackmedicalcenter.com.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and fully extractable. The full text is 2,548 characters, compact for a 1-page form.
**Fillable fields**: Zero. Despite having a text layer, there are no interactive PDF form fields — patients must print and hand-write entries.
**File size**: 61 KB for a single page is lightweight and efficient.
**Embedded images**: 1 (likely a logo or header graphic).
**Fonts**: 8 fonts used, which is somewhat high for a 1-page form but indicates digital-origin design rather than a scan.
**Digital-first design**: The form was created digitally (not a scan), with clean text extraction. However, the absence of fillable fields means it functions as a print-and-fill document. The checkbox characters render as "฀" (Unicode replacement characters) in the extracted text, suggesting the PDF uses a symbol font for checkboxes that doesn't map cleanly to standard Unicode — this would impair screen reader accessibility.

## 4. CONTENT DESIGN

**Length**: Appropriately concise at 1 page. The form fits patient identification, record selection, delivery preference, recipient information, and signature all on a single page without feeling excessively cramped.

**Structure**: The form uses clear section headers in caps:
- "PATIENT INFORMATION (PLEASE PRINT)"
- "WHAT RECORDS DO YOU WANT?"
- "HOW WOULD YOU LIKE YOUR RECORDS DELIVERED?"
- "WHERE DO YOU WANT YOUR RECORDS SENT?"

These headers use plain, patient-friendly language (e.g., "WHAT RECORDS DO YOU WANT?" rather than "Information to Be Released"). This is notably more approachable than the system-wide CMR-003 form.

**Record type options**: 8 checkboxes offered:
- Summary (doctor notes, emergency room record, test results, operations)
- Discharge Summary
- Emergency Room Record
- Radiology Reports
- History/Physical
- Operative Report(s)
- Radiology Images
- Laboratory Reports
- Other

The "Summary" option helpfully provides a parenthetical explanation of what it includes, which is useful for patients unfamiliar with medical terminology.

**Sensitive information notice**: The form includes a single-line disclosure: "I understand that this information may include information relating to: AIDS, HIV, diagnosis/treatment of drug or alcohol abuse; mental, behavioral health, or psychiatric care." This is positioned above the record type checkboxes rather than as a separate consent section, which conflates acknowledgment with selection in a potentially confusing way.

**Date range**: A single "Date(s) of Service" field is provided, but without explicit from/to fields.

## 5. PATIENT-CENTEREDNESS

**Patient-access focus**: This is explicitly a "PATIENT REQUEST" form — the title and design clearly center on the patient requesting their own records. The "WHERE DO YOU WANT YOUR RECORDS SENT?" section defaults to "Myself" as the first checkbox option, with "My Personal Representative" as a secondary option. This is a strong patient-access design.

**Delivery format options**: Three options offered:
- **Paper**: Pick up in-person or mail to home
- **CD**: Pick up in-person or mail to home
- **Email**: With explicit email address field and a risk acknowledgment for unencrypted email

The email option is notable and patient-friendly. The form honestly warns: "I understand there is a level of risk that my PHI could be read or otherwise accessed by a third party while in transit and agree to receiving my PHI by unencrypted e-mail." This requires a separate signature specifically for the email consent.

**Missing**: No mention of EHI Export or machine-readable format option (unlike the system-wide CMR-003 form which does include this). No reference to HIPAA Right of Access or § 164.524. No mention of response timeframes.

**HIPAA acknowledgment**: The form contains a brief statement: "Facility checked above recognizes a patient's right under HIPAA to access copies of his/her health information." This is a positive inclusion, though it doesn't cite the specific regulation.

**Fees**: The form states: "There may be charges associated with processing a request and producing requested records." No fee schedule or amounts are provided.

## 6. COMPLIANCE

**Submission method**: The form instructs "Please Return Completed Form to: HIM Department, 250 Old Hook Rd. Westwood NJ, 07675" — only a physical mailing address is provided. No fax number, no email submission option. This is a meaningful barrier compared to the HMH amendment form (form-4) which provides email submission.

**Expiration**: No expiration clause is stated. Since this is a patient request form (not a third-party authorization), the absence of an expiration is appropriate.

**Identity verification**: The form requires "Signature of Patient/Authorized Representative" and for representatives requires them to "attach appropriate legal documents." A separate staff-use section includes "ID Verified" — suggesting in-person or post-submission verification rather than up-front requirements like notarization.

**No notarization required**. No in-person-only submission requirement (mailing is accepted).

**Sensitive records**: Unlike the CMR-003 form, which has separate specific-consent checkboxes for reproductive health, STDs, HIV/AIDS, mental health, and alcohol/drug abuse, this form bundles the sensitive-record acknowledgment into a single blanket statement. Under New Jersey law and federal 42 CFR Part 2 requirements, this less granular approach may be insufficient for substance abuse records specifically.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Plain-language section headers**: "WHAT RECORDS DO YOU WANT?" and "HOW WOULD YOU LIKE YOUR RECORDS DELIVERED?" are unusually patient-friendly compared to the legalistic language typical of ROI forms. This is clearer than the system-wide CMR-003's "Information to Be Released" and "Requested Format."
- **Patient-first design**: The form title ("PATIENT REQUEST FOR HEALTH INFORMATION"), the "Myself" default recipient option, and the HIPAA right-of-access acknowledgment all signal that this form was designed around the patient's own access needs rather than adapted from a third-party release form.
- **Email delivery option with honest risk disclosure**: Offering unencrypted email delivery with a clear risk warning and separate signature consent is a pragmatic, patient-centered approach.

### 🚩 RED FLAGS
- **Mail-only submission**: The form provides only a physical mailing address for return ("Please Return Completed Form to: HIM Department, 250 Old Hook Rd. Westwood NJ, 07675"). No fax, no email submission option. This creates a significant access barrier — a patient can receive records electronically but cannot submit the request electronically.

### ⚠️ AMBIGUITIES
- **Sensitive records consent is vague**: The single-line statement "I understand that this information may include information relating to: AIDS, HIV, diagnosis/treatment of drug or alcohol abuse; mental, behavioral health, or psychiatric care" is ambiguous — does checking a record type automatically authorize release of sensitive information within that category? The CMR-003 form handles this more clearly with separate specific-consent checkboxes.
- **"Facility checked above"**: The form text references "Facility checked above" but there is no facility selection checkbox visible in the extracted text. This phrase appears to be a remnant from a multi-facility template that wasn't fully adapted for Pascack Valley's single-facility use.
- **Date(s) of Service field**: The singular/plural "Date(s)" and lack of explicit from/to structure makes it unclear whether a patient can request a date range or only specific visit dates.

### ❌ ERRORS
- **Checkbox rendering**: All checkboxes appear as "฀" (U+0E00, Thai character block) in the extracted text, indicating the PDF uses a non-standard symbol font for checkboxes that doesn't map to Unicode. This would cause problems for assistive technology/screen readers.
- **Orphaned facility reference**: "Facility checked above recognizes a patient's right..." references a facility checkbox that doesn't exist on this form, suggesting incomplete template customization.
