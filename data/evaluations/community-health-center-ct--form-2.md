# Evaluation: Community Health Center, Inc. — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is the **standard English-language ROI form** for Community Health Center, Inc. (CHC), titled "AUTHORIZATION TO RELEASE OR OBTAIN HEALTH INFORMATION." It is a single-page PDF (176,978 bytes), revised 6/2019, and serves as the organization's general-purpose authorization for both releasing and obtaining patient health information.

CHC has three related forms on file:
- **form-1.pdf**: A site-specific variant of this same form, customized for the "B23 Site" / Birth to Three program with pre-filled recipient information (Rebecca Smith, Hartford, CT). It is a later revision (10/31/2019) with a slightly different layout and more fonts (22 vs. 4), suggesting a redesign. It adds "B23 Site/Evaluations/Assessments/IFSPs" as a record-type option and pre-fills the expiration as "Third Birthday."
- **form-3.pdf**: A Spanish translation of form-2.pdf ("AUTORIZACIÓN PARA DIVULGAR U OBTENER INFORMACIÓN MÉDICA"), revised 7/2019, with identical structure and content.

Form-2 is the **canonical general-purpose English ROI form** — the one a typical English-speaking patient would use for any records request not involving the Birth to Three program.

## 2. FINDABILITY

**Moderate difficulty.** Per the retrieval notes, the form was found at a WordPress uploads URL (`/wp-content/uploads/2019/08/ROI-English.pdf`) that was discoverable via site-scoped web search (`site:chc1.com authorization release medical records`). However, the organization's current patient forms page (https://www.chc1.com/for-patients/resources/patient-forms/) has transitioned to Luma Health online form portals rather than linking directly to this PDF. The two current links on that page ("CHC to release health information to another agency" and "CHC to obtain health information from another agency") point to `patient.lumahealth.io` survey URLs.

This means the PDF is essentially a **legacy document** — still hosted but no longer actively linked from the patient-facing navigation. A patient visiting the website today would be directed to the Luma Health portal instead. The PDF's URL (`ROI-English.pdf`) is descriptively named, which aids discoverability through search engines, but the form is not findable through normal site navigation.

The form header provides a fax number (860-343-7379) and mailing address (575 Main Street, Middletown, CT 06457) but no email address or web URL for submission.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,156 characters). Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite having a text layer, none of the blanks are interactive form fields. A patient would need to print and hand-fill, or use PDF annotation tools.
- **Page count**: 1 page — compact.
- **File size**: 176,978 bytes (~173 KB) for a single page with 1 embedded image and 4 fonts. Reasonable.
- **Digital-first design**: No. This is clearly designed as a **print-and-fill** document. The blanks are represented as underscores (`________`) rather than interactive fields. The layout uses visual formatting (column-style "RELEASE TO" and "OBTAIN FROM" side-by-side blocks) that works on paper but the extracted text shows these as interleaved lines, suggesting the two-column layout doesn't degrade gracefully for screen readers.
- **Font count**: 4 fonts — minimal, suggesting clean typographic structure.

The lack of fillable fields is the primary technical shortcoming. This form cannot be completed digitally without third-party tools.

## 4. CONTENT DESIGN

**Length and proportionality**: The single-page format is appropriate. All necessary fields and disclosures fit on one page without excessive cramming.

**Organization**: The form follows a logical top-to-bottom flow:
1. Header with department contact info
2. Patient identification (name, previous name, DOB, phone)
3. Direction of information flow (release TO vs. obtain FROM) — presented as two parallel columns
4. Self-request delivery options (mail, fax, pick-up, email)
5. Record type checkboxes (9 categories plus "Other")
6. Date range specification
7. Sensitive information categories (drug/alcohol, psychiatric, HIV/AIDS)
8. Reason for authorization
9. Expiration clause
10. Legal disclosures
11. Signature block

**Clarity**: The form uses mostly plain language. The dual-purpose design ("RELEASE... TO" / "OBTAIN... FROM") is clear, with "OR" prominently placed between the two options. However, the legal disclosures at the bottom are dense — a solid block of text covering revocation rights, re-disclosure warnings, voluntary nature, and the 30-day fulfillment window, all compressed into small print.

**Record type options** are specific and useful: Progress Notes, Dental records (including x-rays), Immunizations, Consultation Notes, Labs, X-ray/CT Scan/MRI/US results, Complete health record (with and without telephone encounters), plus an "Other" line.

**Date range handling**: Offers three options — specific date range, "From start of care to present," and a default of "the last 3 YEARS worth of records unless a different time period is specified." This default is clearly stated.

**Sensitive information**: The form requires explicit opt-in checkboxes for drug/alcohol abuse, psychiatric/behavioral health, and HIV/AIDS-related information, with a note: "If drug/alcohol abuse, psychiatric/mental health, or HIV/AIDS related information is to be included, you must check each box below." It also allows partial exclusion of drug/alcohol information: "*However, if you do not wish to disclose all of your drug/alcohol abuse information, please indicate what information to EXCLUDE here.*"

## 5. PATIENT-CENTEREDNESS

**Patient access support**: The form explicitly supports self-requests with the section "If to ME, my records should be released via:" offering four delivery methods: Mail, Fax, Pick-Up, and E-Mail. This is a meaningful inclusion — many ROI forms are oriented solely toward third-party releases.

**Scope options**: Patients can select specific record types (9 checkbox options), specify date ranges, and opt in/out of sensitive categories. The granularity is good.

**Delivery format options**: Four options including email, which is notable. However, there is no mention of electronic format preferences (e.g., PDF, CCDA, FHIR), patient portal access, or EHI export.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or the patient's Right of Access. The legal disclosures mention revocation rights, re-disclosure risk, and voluntary nature, but frame these generically rather than citing specific regulations.

**No fee disclosure**: The form makes no mention of fees or costs associated with the records request. This is neither positive nor negative on its own — it avoids discouraging requests, but patients have no upfront information about potential costs.

**30-day fulfillment**: The signature line states "CHC has 30 days to fulfill my request," which aligns with HIPAA's 30-day requirement (with possible 30-day extension). This is clearly communicated.

## 6. COMPLIANCE

**Expiration**: "This authorization will expire 90 days from the date on which it was signed, unless I indicate a different expiration event or date below." A 90-day default is short but not unreasonable for a third-party release authorization. For a patient requesting their own records, the expiration is largely irrelevant since the request would be fulfilled within 30 days. The form allows the patient to specify a different expiration.

**Revocation rights**: Clearly stated — must be in writing, presented to the Medical Records Department, does not apply to already-released information or insurance contests.

**Voluntary nature**: Explicitly stated: "I understand authorizing the use or disclosure of the information identified is voluntary. I can refuse to sign this authorization. I need not sign this form to ensure healthcare treatment."

**No notarization requirement**: The form requires only a signature, printed name, date, and relationship to patient (if representative).

**No in-person submission requirement**: The form provides a fax number for submission, and the self-request section offers mail and fax delivery, implying remote submission is acceptable.

**Reason for request**: The form asks patients to indicate a reason (Legal, Transferring Care, Coordinating Care, Relocation, Other). Under HIPAA's Right of Access, patients are not required to state a reason for requesting their own records. This field could discourage some patients, though it is styled as checkboxes rather than a mandatory justification.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Dual-purpose form conflation**: The form serves both patient access requests ("If to ME") and third-party release/obtain authorizations. The 90-day expiration, reason-for-request field, and sensitive-information opt-in checkboxes are appropriate for third-party releases under § 164.508 but are not required for patient access requests under § 164.524. The form does not distinguish between these two regulatory frameworks, which could lead to unnecessary barriers for patients simply requesting their own records.

- **"All Medical Records requests must be processed by Medical Records Department"**: This statement is presented as a standalone note but its practical implication is unclear — does it mean patients cannot request records from their provider directly, or is it simply routing guidance?

### ❌ ERRORS

- **Typo in legal text**: "the revocation will not apply to information that has already been released in response to **his** authorization" — should be "**this** authorization." This same typo appears in form-1.pdf, indicating it was carried forward across versions.

### ✨ BRIGHT SPOTS

- **Spanish translation available**: Form-3.pdf provides a full Spanish translation with identical structure, an important accessibility feature for an FQHC serving a diverse patient population in Connecticut.

- **Self-request delivery options including email**: The explicit "If to ME" section with four delivery methods (including email) is more patient-friendly than many ROI forms that only contemplate third-party releases.

- **Drug/alcohol exclusion option**: Rather than a simple all-or-nothing checkbox for substance abuse records, the form allows patients to specify what to *exclude* — giving more granular control over sensitive information disclosure.

- **Transition to online portal**: While the PDF itself is a legacy artifact, CHC's move to Luma Health online form portals for ROI suggests an effort to modernize the process, potentially offering a better digital experience than this static PDF.
