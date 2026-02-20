# Phelps Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3.pdf is titled **"Authorization for Release of Health Information"** and is a Northwell Health system-wide third-party release authorization form. It is a 3-page, 44 KB flat PDF dated "VD001 (9/28/21)".

This document is textually identical to form-1.pdf, which carries the same form ID (VD001), same date, and same extracted text (5,820 characters in both). However, it was downloaded from a different URL (`release-of-health-information-form-english.pdf` vs. `authorization-for-release-health-information-form-english.pdf`) and differs at the binary level — critically, form-1 has **38 fillable fields** while form-3 has **zero fillable fields**. Form-3 is nearly half the file size (44 KB vs. 86 KB), consistent with stripping interactive form elements. It appears to be an older or non-interactive variant of the same authorization form, both hosted on the Northwell website.

Within the full suite of six downloaded Phelps Hospital / Northwell Health documents, form-3 is a duplicate of form-1 (third-party release authorization). The patient self-access form is form-2, which is a distinct document ("Request for Access to Health Information") explicitly citing HIPAA 45 CFR 164.524. Companion instruction documents exist for both the authorization form (form-4) and the access form (form-6). Form-5 is a Spanish-language version of the authorization form.

## 2. FINDABILITY

This form was easy to locate. Northwell Health's medical records page (https://www.northwell.edu/manage-your-care/medical-records) is well-organized with clear section headings distinguishing "Request for Access to Health Information" from "Authorization for Release of Health Information." Phelps Hospital, as part of the Northwell system, relies on these centralized forms. Web searches for "Phelps Hospital Northwell Health authorization release health information form PDF" immediately surfaced the correct page.

However, the existence of two separate URLs serving what appears to be the same form — one with fillable fields, one without — is a findability hazard. A patient who happens to click the alternate link gets a non-interactive version with no indication that a better version exists. The URL `release-of-health-information-form-english.pdf` gives no signal that it differs from the primary version.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (5,820 characters across 3 pages).
- **Fillable fields**: **Zero**. This is the critical deficiency. The identical form text exists as form-1.pdf with 38 fillable fields; form-3 is a flat, print-only rendering.
- **File size**: 44 KB for 3 pages — reasonable and lightweight.
- **Fonts**: 3 fonts embedded.
- **Images**: 0 embedded images.
- **Digital-first design**: No. Without fillable fields, this is essentially a print-and-handwrite document. Checkbox characters render as `£` symbols in the extracted text (a common PDF rendering artifact for checkbox glyphs), confirming they are static characters rather than interactive form elements.
- **PDF version**: Not explicitly noted, but the clean text extraction and small file size suggest a digitally-created (not scanned) document.

The form is technically clean but functionally limited — a patient cannot fill it out digitally. This is particularly problematic because the identical content exists in an interactive version (form-1.pdf), making this flat version an inferior duplicate that should arguably be removed from the website.

## 4. CONTENT DESIGN

**Length**: 3 pages, which is reasonable for an authorization form covering sensitive information categories (substance abuse, mental health, HIV).

**Structure**: The form uses a numbered 9-section layout:
1. Entity releasing information ("from who")
2. Recipient of information ("to who")
3. Delivery manner and format (Regular Mail / Pick up / Electronic mail / Fax) with corresponding format options (Paper copy / USB / CD)
4. Verbal authorization (initials)
5. Requested health information (checkboxes for record types and date ranges)
6. Reason for release
7. Legal notice (HIPAA, NY State Law, 42 CFR Part 2 acknowledgments)
8. Opt-out for sensitive information (substance abuse, mental health, HIV)
9. Expiration date/event

**Clarity**: The form mixes plain language with legal terminology. Sections 1-6 are reasonably clear, using parenthetical plain-language guidance like "(from who)" and "(to who)." Section 7 shifts to dense legal language citing "New York State Law, 42 CFR Part 2 and the Privacy Rule of the Health Insurance Portability and Accountability Act of 1996 (HIPAA)."

**Layout**: The delivery manner section (Section 3) is presented as a matrix of checkboxes organized by manner (mail/pickup/email/fax), format (paper/USB/CD), and delivery details — a logical but somewhat complex layout. Each page is marked "Page X of 3" and includes a footer: "Copy 1 – Patient Medical Record / Copy 2 – Patient or Patient's Personal Representative."

**Font size**: Not directly measurable from metadata, but the 5,820-character text spread across 3 pages with 0 images suggests adequate spacing and readable font sizes.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is explicitly a **third-party release authorization**, not a patient self-access form. The structure — requiring both "from who" (Section 1) and "to who" (Section 2) entities — is designed for directing information between providers or to third parties. Northwell Health does provide a separate patient access form (form-2.pdf) that cites HIPAA Right of Access, so this form exists appropriately alongside it. However, form-3 itself does not reference patient access rights or 45 CFR 164.524.

**Scope options**: Reasonably granular. Patients can request: Medical Record Abstract, records by date range, Entire Medical Record, lab results by date, radiology by date, itemized bill, or "Other." This gives meaningful control over what is released.

**Format options**: The form offers multiple delivery methods (regular mail, facility pickup, electronic mail, fax) and formats (paper copy, secure USB flash drive, CD). This is above average for format flexibility.

**Unsecure email acknowledgment**: Section 3 includes an explicit option for "Unsecure email" with a patient acknowledgment: "By checking here, I acknowledge that e-mail sent unencrypted means others may be able to access the information and read it once it is transmitted over the internet." This gives patients a choice while making the risk transparent.

**Sensitive information handling**: Section 8 uses an **opt-out model** for substance abuse (OASAS), mental health (OMH), and HIV-related information — meaning these categories are released by default unless the patient initials to exclude them. The form clarifies these apply only to records from specifically licensed programs.

**Right of Access / EHI Export**: No mention of HIPAA Right of Access (this is the third-party release form, not the access form). No mention of electronic health information export or bulk data.

## 6. COMPLIANCE

**Authorization is voluntary**: Section 7b explicitly states: "signing this Authorization is voluntary. My treatment, payment, enrollment in a health plan, or eligibility for benefits will not be conditioned upon my authorization of this disclosure."

**Revocation rights**: Section 7a clearly explains the right to revoke, with the limitation that revocation cannot undo actions already taken in reliance on the authorization.

**Redisclosure notice**: Section 7c provides appropriate redisclosure warnings, with specific protections noted for substance abuse, mental health, and HIV information.

**Expiration**: Section 9 defaults to "One (1) year" with an option for a custom expiration date. The form notes "*This field must be completed with date or event" — making expiration mandatory, which is appropriate.

**Witness requirement**: The signature block includes a "Witness to signature" line. While not explicitly labeled as mandatory, the form layout positions it as a standard field, which could be interpreted as required and may create a barrier for patients completing the form independently.

**No notarization required**: The form does not require notarization.

**No in-person-only restriction**: The form does not explicitly restrict submission to in-person delivery, though it also does not specify how to submit the completed form (no mailing address, fax number, or email for returning the authorization itself).

**Sensitive information opt-out model**: The opt-out approach to substance abuse, mental health, and HIV records (Section 8) is legally compliant under NY State law and 42 CFR Part 2, but the framing — "information may be released unless you... initial... to opt out" — places the burden on patients to affirmatively restrict disclosure of their most sensitive records.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Duplicate inferior version with no fillable fields**: This document is a flat PDF clone of form-1.pdf, which has 38 fillable fields. Both are hosted on the same Northwell website at different URLs with no indication to the user that one is interactive and the other is not. A patient who downloads form-3 gets a strictly worse version of the same form, forced to print and handwrite rather than fill digitally.

### ⚠️ AMBIGUITIES

- **No submission instructions**: The form tells the patient what to fill out but provides no guidance on how or where to submit the completed authorization. There is no mailing address, fax number, email address, or patient portal reference for returning the form. A patient would need to independently determine where to send it.
- **Witness line ambiguity**: The "Witness to signature" line is presented alongside mandatory fields without clarity on whether a witness is actually required. The footnote states "The signature of the patient must be obtained unless the patient is an unemancipated minor under the age of 18 or is otherwise incapable of signing" — but says nothing about the witness requirement, leaving patients uncertain.
- **Sensitive information opt-out framing**: Section 8 states information "may be released unless you... initial... to opt out." This opt-out model means patients who are confused by or overlook this section will have their substance abuse, mental health, and HIV records released by default — the opposite of what many patients would expect.

### ❌ ERRORS

- **Checkbox rendering as `£` symbol**: All checkbox characters in the extracted text render as `£` (pound sterling symbol), e.g., `£ Regular Mail`, `£ Paper copy`. This is a PDF encoding issue where the checkbox glyph maps to the wrong Unicode character, making the form less accessible to screen readers and text-extraction tools.
- **Duplicate hosting is itself a defect**: As noted in the retrieval notes, the URL `release-of-health-information-form-english.pdf` serves an inferior (non-fillable) version of the same content available at `authorization-for-release-health-information-form-english.pdf`. This appears to be a web content management oversight — two URLs pointing to functionally different versions of the same form, with no explanation for the discrepancy.

### ✨ BRIGHT SPOTS

- **Granular delivery and format options**: Section 3's matrix of delivery manner (mail, pickup, email, fax) crossed with format (paper, USB, CD) is unusually thorough. Few authorization forms offer secure USB flash drive or CD as delivery options.
- **Transparent unsecure email risk acknowledgment**: The explicit "Unsecure email" checkbox with a plain-language risk warning ("others may be able to access the information and read it once it is transmitted over the internet") respects patient autonomy while ensuring informed consent on transmission risk.
- **Companion instruction document**: Northwell provides a separate 3-page instruction guide (form-4.pdf) with step-by-step annotated examples for completing this authorization form — a genuinely helpful resource that few organizations offer.
