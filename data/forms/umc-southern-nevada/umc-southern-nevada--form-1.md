# Evaluation: UMC Southern Nevada — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **Protected Health Information (PHI) Release Authorization** form, version MRU00695 dated 01/29/19. It is a 2-page PDF (151,732 bytes) that serves as the primary ROI form for University Medical Center of Southern Nevada.

Three documents were found for this organization:
- **form-1.pdf** (this document): The current/newer PHI Release Authorization (2019 version)
- **form-2.pdf**: An older version of the same form (MRU00695, dated 06/06/16) — nearly identical content but with minor field label differences (e.g., "Account #" vs "CSN")
- **form-3.pdf**: A Request for Amendment of PHI — a different document type, not an ROI form

This is a general-purpose authorization form designed for releasing records to any recipient, not a patient-access-specific form. The "Patient (self)" checkbox under recipient options adapts it for patient access use, but the form's framing ("I authorize... to release my Protected Health Information") is oriented toward third-party disclosure.

## 2. FINDABILITY

This form has a significant findability problem. Per the retrieval notes, the main patient-facing Medical Records page (`umcsn.com/patients-visitors/patient-information/medical-records-and-birth-certificate-process`) does **not** link to this PHI Release Authorization form. That page links only to the Request for Amendment form (form-3). The ROI form is discoverable only via web search or by knowing the direct URL (`umcsn.com/getmedia/43e12672-40c1-4b7e-a4fc-099306b86efc/MRU00695_PHI_Rel_Auth_Eng_01-29-19.pdf`).

Adding to the confusion, an older 2016 version of the same form (form-2) remains hosted on the same domain. A patient searching the web could land on either version with no indication which is current. The filename `MRU00695_PHI_Rel_Auth_Eng_01-29-19.pdf` is at least descriptive, embedding the form number, language (English), and revision date — but this is a CMS-style internal naming convention, not a patient-friendly signal.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and functional. The full text (5,061 characters) extracts cleanly, indicating this is a digitally-composed PDF, not a scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite being a digital-origin document, there are no interactive form fields. A patient must print, hand-fill, and then scan/fax/mail the form. This is a significant missed opportunity — the form is clearly designed digitally (9 fonts, 3 embedded images) but provides no fillable interactivity.
- **File size**: 151 KB for 2 pages is reasonable.
- **Image-only scan**: No — it has proper text content, just lacks interactive fields.
- **Page indication error**: The header says "Page 1 of 1" on what is actually a 2-page document. The second page lists Quick Care and Primary Care locations referenced by the dagger (†) symbol on page 1.

## 4. CONTENT DESIGN

**Length and proportionality**: Two pages is reasonable. Page 1 is the authorization itself; page 2 is a reference list of UMC Quick Care and Primary Care locations with full addresses.

**Structure and organization**: The form follows a logical flow:
1. Patient identification (name, DOB, address, SS# marked as optional)
2. Facility selection (main campus, Quick Care, Primary Care — each with date-of-service fields)
3. Record type selection (6 checkbox options including Abstracts/Summaries, ER Records, Radiology, Imaging, Test Results, Other)
4. Sensitive information section (5 categories requiring individual Yes/No + initials)
5. Recipient information
6. Purpose and disclosure format/method
7. Expiration and legal notices
8. Signature block

**Clarity**: The language is mostly clear but somewhat dense. The sensitive information section deserves credit for explaining its rationale: "State and federal law protect the following information. If this information applies to you, please indicate if you would like this information to be released / obtained." However, the form contains a notable amount of institutional jargon — "*ROIRCD*" appears at the top with no explanation, and "CSN" (Clinical System Number) in the patient label area is not defined for patients.

**Layout**: The form uses a structured layout with checkboxes, blank lines, and labeled fields. The header includes a "PLACE PATIENT LABEL TO COVER OR COMPLETE BELOW" section — a clinical/in-house convention that would confuse patients filling this out at home.

## 5. PATIENT-CENTEREDNESS

**Patient access pathway**: The form includes a "Patient (self)" checkbox under recipient options, which adapts it for personal access. However, the overall framing remains third-party-release-oriented. There is no simplified patient access track — a patient requesting their own records must navigate the same full form as an attorney or insurance company.

**Scope options**: Good granularity for record type selection with 6 categories. The sensitive information section (substance abuse, HIV, mental health, psychotherapy, genetic records) provides appropriate individual opt-in/opt-out with Yes/No checkboxes and initials for each.

**Format and delivery options**: The form offers multiple disclosure methods:
- Paper (default if none selected)
- CD-ROM/disc
- Call for pick-up
- Send via US Mail
- Send via Fax
- Email
- Other/Spec. Req.

This is a relatively strong set of delivery options. Email is listed, and the "Other" catch-all provides flexibility. No mention of patient portal access or electronic health information (EHI) export.

**Rights information**: The form includes five numbered statements that patients must understand by signing. These cover: reproduction fees, voluntary nature, prohibition on conditioning treatment on signing, right to revoke in writing (with specific mailing address), and re-disclosure risk. Statement #3 ("Treatment, payment, enrollment or eligibility for benefits may not be conditioned on whether I sign this authorization") correctly reflects HIPAA requirements.

**No mention of HIPAA § 164.524**, patient right of access specifically, or EHI/bulk data export.

## 6. COMPLIANCE

**Fees**: Statement #1 references "reproduction fees in accordance with federal / state regulations" without specifying amounts. This is appropriately vague rather than intimidating, though a patient-friendly form might clarify that fees for patient access are limited by law.

**Expiration**: "This authorization will expire one year from the date of signature (default)" — a one-year default expiration is standard and reasonable.

**Revocation**: Must be "made in writing and presented or mailed to the UMC Health Information Management Department" at a specific address. Writing-only revocation is standard under HIPAA.

**Social Security Number**: Listed as "SS # (optional)" — properly marked optional.

**One recipient per request**: The form states "Recipient's Name (ONE per request)" which means a patient needing records sent to multiple providers must complete multiple forms. This adds burden but is not uncommon.

**No notarization requirement**. No in-person-only submission requirement (fax, mail, and email appear to be delivery options for the records, though the form itself doesn't explicitly state how to submit the completed authorization).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No link from the Medical Records page**: The primary patient-facing page for medical records does not link to the ROI form at all. This is a significant findability barrier — patients navigating the website in the expected way will not find the form they need.

### ⚠️ AMBIGUITIES
- **Submission method unclear**: The form specifies how records will be *disclosed* (mail, fax, email, etc.) but does not clearly state how a patient should *submit the completed authorization form*. There is no mailing address, fax number, or email for form submission on the form itself (only a revocation address is provided).
- **"PLACE PATIENT LABEL TO COVER OR COMPLETE BELOW"**: This instruction assumes institutional context (patient labels are printed by hospital registration systems). A patient filling this out at home would not know what a "patient label" is or that they should simply fill in the fields below.
- **"*ROIRCD*"**: Unexplained code at the top of the form. Appears to be an internal barcode/tracking code but has no patient-facing meaning.

### ❌ ERRORS
- **"Page 1 of 1" on a 2-page document**: The header pagination is incorrect — the form is actually 2 pages. The second page with location listings is treated as supplementary but is integral (referenced by the dagger symbol).

### ✨ BRIGHT SPOTS
- **Granular sensitive information controls**: The five-category sensitive information section (substance abuse, HIV, mental health, psychotherapy, genetic records) with individual Yes/No selection and required initials per line is well-designed. It respects both patient autonomy and the heightened protections these categories require under state and federal law.
- **Email listed as a delivery option**: Many ROI forms limit delivery to mail and fax only. Including email is a practical improvement.
- **SS# explicitly marked optional**: Many forms request Social Security numbers without indicating they are not required. UMC correctly labels this "(optional)."
