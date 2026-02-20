# Evaluation: Myrtue Medical Center — form-1.pdf

## Organization
- **Name**: Myrtue Medical Center
- **Location**: Harlan, IA
- **Type**: Critical access hospital, independent, nonprofit, Midwest
- **Website**: https://www.myrtuemedical.org

## Document Under Review
- **File**: form-1.pdf
- **Source URL**: https://www.myrtuemedical.org/documents/authorization%20&%20release%20forms/ROI-English-06-17-25.pdf
- **Title**: "Authorization to Release Protected Health Information"
- **Pages**: 1
- **File size**: 490,858 bytes (~491 KB)

---

## 1. DOCUMENT IDENTIFICATION

This is Myrtue Medical Center's primary Release of Information (ROI) form, titled "Authorization to Release Protected Health Information" and labeled as a "HIPAA Privacy Form." It is a general-purpose authorization form that enables a patient (or authorized representative) to authorize disclosure of medical records either from or to Myrtue Medical Center and its affiliated locations (Behavioral Health, Community Health).

The form is one of four documents posted on the organization's "Authorization + Release Forms" page. The other English-language document (form-2.pdf) is a "Consent for Disclosure" form specifically for verbal communications — authorizing phone messages and verbal discussions with designated individuals. Both English forms also have Spanish translations available on the same page, though those were not downloaded for this study.

This form-1.pdf is the document a patient would use to request copies of their own medical records or to authorize release to a third party. It is **not differentiated** between patient self-access and third-party release — a single form serves both purposes.

---

## 2. FINDABILITY

**Rating: Easy.** The retrieval notes confirm the form was locatable through multiple channels:

- A site-scoped web search (`site:myrtuemedical.org medical records release authorization`) returned direct PDF URLs.
- The organization's website has a clearly labeled "Authorization + Release Forms" page under the "Patients + Visitors" navigation, reachable within 2 clicks from the homepage.
- The PDF URL (`ROI-English-06-17-25.pdf`) uses a descriptive filename that includes the document type, language, and revision date.
- The landing page lists all four forms (2 English, 2 Spanish) with clear descriptions.
- No bot blocking, JavaScript rendering issues, or other access barriers were encountered.

The form's header also provides complete contact information: "Health Information Management, 1213 Garfield Avenue, Harlan, Iowa 51537, Phone: 712-755-4368 / Fax: 712-755-2640, medicalrecords@myrtuemedical.org." This gives patients a clear path to submit or ask questions.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: The PDF has a proper text layer (not an image-only scan), with 4,108 characters of fully extractable text. `has_text_layer: true`, `is_image_only_scan: false`.

**Fillable fields**: The form has **zero fillable form fields** (`fillable_field_count: 0`). Despite being a digitally designed document (not a scan), all blanks are rendered as underscores/lines that require the user to print and hand-write, or use PDF annotation tools to type over them. This is a significant gap — with 10 fonts and an embedded image (likely the organizational logo), it is clearly designed in desktop publishing software but without interactive form elements.

**File size**: At ~491 KB for a single page, the file is moderately large, likely due to the embedded image/logo. This is not prohibitive but is larger than necessary for a one-page text-dominant form.

**Digital-first design**: The form was designed digitally (not scanned from paper) but is effectively a "print-and-fill" document. The checkboxes in the text extraction show up as invisible/zero-width characters (Unicode tag characters like `󠄀`), confirming they are non-interactive graphical elements rather than fillable PDF checkboxes. The form footer reads "Permanent Part of the Medical Record; Rev. 06/25," indicating it was recently revised (June 2025) but the revision did not add digital fillability.

---

## 4. CONTENT DESIGN

**Length**: The form is a single page, which is commendably concise. It covers patient identification, from/to routing, record types, purpose, delivery method, legal disclosures, and signature — all on one page.

**Structure and organization**: The form follows a logical top-to-bottom flow:
1. Header with contact info
2. Patient demographics (name, DOB, address, phone, maiden name)
3. From/To routing with pre-printed Myrtue addresses and checkboxes for affiliated locations
4. Record type selection with date range
5. Purpose of release
6. Delivery format/method
7. Legal disclosure statements
8. Signature block
9. Staff-use-only section at the bottom

**Clarity**: The language is relatively plain, though the legal disclosures at the bottom shift to more formal phrasing: "Any disclosure of information carries with it the potential for unauthorized re-disclosure and the information may not be protected by federal confidentiality rules." The instruction "request must have complete addresses" is parenthetically noted but easy to miss.

**Layout density**: Given that everything fits on one page, the layout is necessarily dense. The form uses approximately 10 different fonts to create visual hierarchy, and the from/to sections are laid out in a two-column format. The legal disclosures are presented as a bulleted list of "By signing this authorization form, I understand that:" items, which aids readability. However, the bottom of the form (signature area, staff-use section, legal text about substance use disorder re-disclosure) appears quite compressed.

**Record type options**: The form offers granular record selection:
- Entire medical record (with the explicit note: "does not include substance abuse disorder records")
- Mental / Behavioral Health records
- Radiology (with sub-options for Reports vs. Images on CD)
- Laboratory / Pathology reports
- Substance Use Disorder (with sub-options for "All records" vs. "Only the following records")
- Other (free text)

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form does **not** distinguish between a patient requesting their own records and a third-party authorization. The "From / To" structure with bidirectional checkboxes is designed for any release scenario. A patient requesting their own records would check Myrtue in the "From" column and fill in their own name/address in the "To" column's "Other" field. This works but does not streamline the patient self-access use case.

**Scope options**: The form provides good granularity for record types and includes a date range selector ("Date(s) of service from ___ to ___"). The explicit separation of substance use disorder records from the "entire medical record" checkbox is legally appropriate under 42 CFR Part 2 and clearly communicated.

**Delivery format options**: The form offers four delivery methods:
- "MyChart Portal" — electronic patient portal delivery
- "Mail"
- "Encrypted email" — with a line to write the email address
- "I will pick up at Myrtue Medical Center / Community Health"

The inclusion of MyChart Portal and encrypted email as delivery options is a strength, offering genuinely electronic delivery paths. However, there is no fax option listed, which is unusual — fax is typically a standard submission/delivery method for medical records.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or use the phrase "Right of Access." The legal disclosures reference "federal/state regulations" regarding reproduction fees and state that "Treatment, payment, enrollment or eligibility for benefits may not be conditioned on if I sign this authorization" — which is a HIPAA-required disclosure for authorizations under § 164.508 but is not the same as the Right of Access framework.

**EHI Export**: There is no mention of electronic health information (EHI) export, TEFCA, bulk data, or any modern interoperability options.

**Authorized representative**: The signature block includes "Authorized Representative Signature" and "Relationship to Patient (if applicable)," accommodating proxy access. However, there is no guidance on what documentation is needed for authorized representatives.

---

## 6. COMPLIANCE

**Fees**: The form states: "Requests for copies of medical records are subject to reproduction fees in accordance with federal/state regulations." This is disclosed but not specific about the actual fee amount, which could create uncertainty for patients.

**Revocation**: The form properly addresses revocation: "I have the right to revoke this authorization at any time, except where Myrtue Medical Center has already acted in reliance on my authorization. Revocation must be made in writing to the Health Information Management Department."

**Expiration**: The form includes an expiration date field with the constraint "however no longer than 1 year from the date on which it was signed." A one-year maximum is reasonable and within typical practice.

**Conditioning prohibition**: The form includes the required statement: "Treatment, payment, enrollment or eligibility for benefits may not be conditioned on if I sign this authorization."

**Re-disclosure warning**: The form includes both a general re-disclosure warning and a specific "Prohibition on Re-Disclosure of Substance Use Disorder Records" paragraph noting that "Substance Use Disorder records are protected by Federal law which prohibits unauthorized disclosure of these records. Upon my request, I have the right to receive a list of entities that have received my substance use disorder information."

**Identity verification**: The staff-use-only section at the bottom includes "Verified: Driver's License / ID Band / Other" — indicating in-person identity verification methods but not specifying how verification works for mailed or emailed requests.

**No notarization or witness requirements**: The form requires only the patient/representative signature, not notarization or witness signatures.

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Spanish translation available**: The organization provides a parallel Spanish-language version of this form (ROI-Spanish-06-17-25.pdf), linked from the same page. For a small critical access hospital in rural Iowa, this is commendable attention to language access.
- **MyChart Portal as delivery option**: Offering patient portal delivery as a first-listed option signals a digital-forward approach to record delivery, unusual for a small rural facility.
- **Encrypted email option**: Beyond portal delivery, the form explicitly offers "Encrypted email" as a delivery method — a meaningful electronic alternative.
- **Substance use disorder handling**: The explicit carve-out of substance use disorder records from "entire medical record," with its own checkbox and the 42 CFR Part 2 re-disclosure prohibition language, reflects careful legal compliance and transparency.
- **Recent revision**: The form footer shows "Rev. 06/25," indicating it was revised very recently (June 2025), suggesting active maintenance.

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party release conflation**: The form serves dual purposes without differentiation. A patient requesting their own records may be confused by the bidirectional "From / To" layout, which is designed primarily for third-party release scenarios. It is unclear whether the fee disclosure, expiration, and revocation language (which are § 164.508 authorization requirements) are intended to apply equally when a patient is simply requesting their own records under § 164.524.
- **Fee amounts undisclosed**: The form says fees apply "in accordance with federal/state regulations" but gives no indication of actual cost. A patient has no way to estimate what they might be charged.
- **Expiration date field ambiguity**: The form has a blank expiration date ("effective until the calendar date of ___/___/______") but also states "no longer than 1 year." It is unclear what happens if the patient leaves the date blank — does the authorization default to one year, or is it invalid without a date?

### ❌ ERRORS

- **Zero fillable fields despite digital design**: The form was designed in publishing software with 10 fonts and an embedded image, yet none of the checkboxes or text fields are interactive PDF form elements. The checkboxes render as non-functional Unicode tag characters (U+E0100 range) in text extraction. This is a technical deficiency, not a deliberate design choice — the form could have been made fillable with minimal effort during its June 2025 revision.
