# Evaluation: Community Health Centers of Burlington — form-2.pdf

## AUTHORIZATION FOR VERBAL COMMUNICATION (ONLY)

---

## 1. DOCUMENT IDENTIFICATION

This is a **verbal-only consent form** titled "AUTHORIZATION FOR VERBAL COMMUNICATION (ONLY)." It is a companion to form-1.pdf ("Authorization to Send Health Information"), which is CHCB's primary ROI form for requesting paper/electronic records. Form-2 explicitly limits itself to verbal communication: "This form allows for sharing verbal information with another person. No paper records will be sent." It is **not** an ROI form for patients requesting their own records — it authorizes CHCB staff to speak with a designated third party about the patient's health information.

The form shares substantially similar structure and legal boilerplate with form-1, including the same record-type checkboxes (Medical, Mental Health/Psychiatry, Dental), expiration language, HIPAA reference, and revocation section. Both were revised November 2023 and hosted in the same WordPress uploads directory (`/wp-content/uploads/2024/03/`).

Notably, form-1 includes a "Patient copy" checkbox under Reason for Release that form-2 omits, reinforcing that form-2 is not intended for patient self-access.

---

## 2. FINDABILITY

The form was discoverable via site-scoped web search (`site:chcb.org`) but was **not** easily reachable through navigation on chcb.org. The main forms page (https://www.chcb.org/forms/) did not render content when fetched — likely JavaScript-rendered. The PDF was hosted at a direct URL: `https://www.chcb.org/wp-content/uploads/2024/03/Verbal-Consent-to-Disclose-Health-Information-FILLABLE.pdf`.

The filename is descriptive (`Verbal-Consent-to-Disclose-Health-Information-FILLABLE.pdf`), clearly distinguishing it from the general consent form. However, a patient looking to request their own records would likely not seek out this form — and there is no guidance on the form itself about when to use it versus form-1.

---

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 154,028 bytes (~150 KB) for a single page — reasonable.
- **Page count**: 1 page.
- **Text layer**: Present and complete; full text is extractable.
- **Fillable fields**: 26 interactive form fields (compared to 36 on form-1). Field names are not populated in metadata, but the form includes text entry areas for patient name, DOB, address, phone, date ranges, recipient info, expiration date, and signature fields.
- **Fonts**: 5 fonts used.
- **Embedded images**: 1 (likely a logo).
- **Scan vs. digital-first**: This is a **digital-first** document, not a scan. The clean text extraction, fillable fields, and structured layout confirm it was authored digitally (likely in a word processor) and saved as an interactive PDF.

The form is well-suited for on-screen completion. The fillable fields cover all main data entry points. One limitation: the checkbox fields for record types and reasons appear to be present but are not enumerated in the metadata field names, suggesting they may use unnamed form fields.

---

## 4. CONTENT DESIGN

**Length and proportionality**: A single page is appropriate for a verbal consent form with limited scope. The form fits its content without excessive whitespace or cramping.

**Organization**: The form follows a logical top-to-bottom flow:
1. Header and scope statement
2. Patient demographics
3. Reason for release (3 checkboxes: Coordination of care, Legal purposes, Other)
4. Record type selection (Medical, Mental Health/Psychiatry, Dental — each with date range options)
5. Recipient information
6. Expiration clause
7. Legal/HIPAA notice
8. Signature blocks (patient and guardian/representative)
9. Revocation section

**Clarity**: The opening instruction — "This form allows for sharing verbal information with another person. No paper records will be sent." — is clear and direct. The instruction "For individual use only - please do not add multiple names" is helpful. However, the dense legal paragraph near the bottom shifts abruptly from plain language to legalese: "I understand that my Medical Records are protected under the Health Insurance Portability and Accountability Act of 1996 ('HIPAA'), 45 Parts 160 and 164, and cannot be disclosed without my written consent unless otherwise provided for by state and federal regulations."

**Reason for Release options**: Form-2 offers only 3 reasons (Coordination of care, Legal purposes, Other), compared to form-1's 6 options (adding Transfer care, Patient copy, Second opinion). The reduced set makes sense given the verbal-only scope.

**Visual hierarchy**: The form uses bold headers for sections (Medical, Mental Health/Psychiatry, Dental) and checkbox formatting. The title "AUTHORIZATION FOR VERBAL COMMUNICATION (ONLY)" is prominently displayed. The "(ONLY)" emphasis effectively signals the form's limited scope.

---

## 5. PATIENT-CENTEREDNESS

**This form is not designed for patient self-access.** It authorizes CHCB to share information verbally with a designated third party. There is no "Patient copy" option, no mention of providing records to the patient, and the "Information RELEASED TO" field (singular) asks for a third party's phone number and relationship to the patient.

The form lacks:
- Any mention of patient right of access under HIPAA § 164.524
- Electronic delivery options (irrelevant since no records are sent)
- Any guidance directing patients who want their own records to use form-1 instead
- Fee information (not applicable for verbal communication)

**Scope options**: Despite being verbal-only, the form provides granular control over what can be discussed — patients can select complete records or specific subsets across medical, mental health, and dental categories, with date range restrictions. This is a positive feature for patient control over disclosures.

The form includes a "Relationship to me" field for the recipient, which helps ensure the patient is aware of who will receive their information.

---

## 6. COMPLIANCE

**Expiration**: "If I do not state a date of expiration above, then this consent will expire one year from the last date of service to me at CHC." This is a reasonable default — one year from last service date, not from signing. This is somewhat unusual phrasing; it means the consent could technically persist for years if the patient continues receiving care.

**Revocation**: The form includes an inline revocation section: "I understand that I may revoke this consent at any time... I hereby revoke this consent on: ______________ (date)." This is clear and accessible, though it's slightly unusual to place revocation on the same physical form as the authorization — it could create ambiguity if the form is filed after initial signing.

**Denial of services warning**: The form states: "I understand that I might be denied services if I refuse to consent to a disclosure for purposes of treatment, payment, or health care operations. I will not be denied services if I refuse to consent to a disclosure for other purposes." This is legally accurate (conditioning treatment on authorization is permitted for TPO under certain circumstances) but could intimidate patients.

**Format contradiction**: The legal boilerplate states "You are authorizing the Community Health Centers of Burlington to disclose your records in the following formats: verbal, written, electronic, unless otherwise specified here." This **directly contradicts** the form's title and opening statement that "No paper records will be sent." The boilerplate appears to be copied from form-1 without modification, creating a significant inconsistency.

**HIPAA citation**: The form references "45 Parts 160 and 164" — this is an incomplete citation (should be "45 CFR Parts 160 and 164"). The same truncated citation appears on form-1.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Boilerplate authorizes written/electronic disclosure on a verbal-only form**: The legal text states the patient is "authorizing the Community Health Centers of Burlington to disclose your records in the following formats: verbal, written, electronic" — directly contradicting the form's stated purpose of verbal-only communication. This could expose CHCB to liability or confuse patients about what they've actually authorized.

### ⚠️ AMBIGUITIES

- **Expiration tied to last date of service**: The phrase "one year from the last date of service to me at CHC" means the consent auto-renews as long as the patient remains active. A patient who signed this form years ago but continues receiving care would still have an active verbal consent — which may not reflect their current wishes.
- **Revocation section on the same form as authorization**: Including "I hereby revoke this consent on: ___" on the authorization form itself creates confusion about the form's current status when filed. Is a completed revocation date an amendment, or a separate action?

### ❌ ERRORS

- **Incomplete HIPAA citation**: "45 Parts 160 and 164" is missing "CFR" — should read "45 CFR Parts 160 and 164."
- **Copied boilerplate contradicts form purpose**: The disclosure formats clause ("verbal, written, electronic") was clearly copied from form-1 without being narrowed to match the verbal-only scope of this form.

### ✨ BRIGHT SPOTS

- **Clear scope limitation in the title**: The "(ONLY)" emphasis in "AUTHORIZATION FOR VERBAL COMMUNICATION (ONLY)" and the plain-language opening statement immediately set expectations.
- **Granular record-type selection for verbal disclosures**: Even though this is just a verbal consent, the form still lets patients control exactly what categories of information can be discussed and for what date ranges — giving patients meaningful control over verbal disclosures.
- **Single-page efficiency**: The form accomplishes its purpose concisely in one page without sacrificing necessary fields.
- **"For individual use only" instruction**: The note to "please do not add multiple names" prevents over-broad consent and ensures each authorization is specific to one recipient.
