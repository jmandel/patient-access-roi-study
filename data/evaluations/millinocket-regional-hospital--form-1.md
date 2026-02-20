# Evaluation: Millinocket Regional Hospital — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a general-purpose **"Authorization to Release Health Care Information"** form — a two-page PDF (31,717 bytes) hosted at `https://www.mrhme.org/wp-content/uploads/2014/06/Release-of-Information-for-Medical-Records.pdf`. It is the only ROI-related form found for Millinocket Regional Hospital. The form is designed for disclosing records *to a named third party*, not specifically for a patient requesting their own records under HIPAA's Right of Access. The header identifies the hospital by name, address, phone, and fax, and the form carries a sender-to-recipient structure: the patient authorizes the "Name of Institution" to disclose information to another "Name of Institution or Person."

## 2. FINDABILITY

The form was **not discoverable through generic web searches**. The first two search strategies — non-site-scoped queries for `"Millinocket Regional Hospital" "authorization" "release" "health information" filetype:pdf` and `"medical records" "release form" filetype:pdf` — returned no results. Only the site-scoped query (`site:mrhme.org authorization release medical records`) succeeded, which means a patient would likely need to already know the hospital's domain and use targeted searching, or navigate the website directly.

The URL path includes `/2014/06/`, suggesting the file was uploaded in June 2014 and has not been moved or renamed since. The filename (`Release-of-Information-for-Medical-Records.pdf`) is descriptive, but the URL structure gives no indication of currency. There is no evidence from the retrieval notes that the form is prominently linked from a Patient Resources or Medical Records page — it was found only through site-scoped search.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The PDF yields 3,739 characters via `pdftotext`, confirming it is a digitally authored document, not a scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). The form uses underscores and blank lines for all fields, requiring the patient to print and hand-fill. There are no interactive PDF form fields.
- **Fonts**: 4 embedded fonts, indicating basic typographic variety (likely bold/regular variations).
- **Images**: Zero embedded images — a text-only layout with no logos or graphical elements.
- **File size**: 31,717 bytes for 2 pages is compact and reasonable.
- **Digital-first design**: No. The document is a flat PDF designed for print-and-fill. It cannot be completed digitally without third-party tools. There is no mention of electronic submission options (email, portal upload) on the form itself.

## 4. CONTENT DESIGN

**Length**: Two pages — appropriate for the content covered. Page 1 handles patient identification, sender/recipient, record types, and reason for release. Page 2 handles sensitive-information consent (substance abuse, HIV/AIDS, psychiatric) and signature lines.

**Clarity**: The language is mostly plain but includes some legalese. For example: *"I understand that refusal or revocation of permission may result in improper diagnosis or treatment, denial of health benefits or insurance, or other adverse consequences."* This is a broadly worded warning that could alarm patients without clarifying that these consequences relate to third-party information sharing, not to the patient's right to access their own records.

**Organization**: The form follows a logical sequence: identification → what to release → why → patient rights statement → sensitive records consent → signatures. The record-type checklist (items a through r) is well structured with 18 categories including History and Physical, Lab Results, Progress Notes, Discharge Summary, and an open-ended "Others (specify)" field.

**Layout**: The form relies heavily on underscored blanks and lacks visual hierarchy beyond basic bold text for the title. There are no section headers, boxes, or shading to visually separate content areas. The record-type list appears in three columns based on the text extraction, which is functional but unadorned.

**Readability**: Text appears to be in a standard readable font size. The compact two-page format avoids excessive density.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is structured for third-party release. The core operative language is: *"hereby authorize [Name of Institution], its authorized employees or agents, to disclose the following information to: [Name of Institution or Person]."* A patient requesting their own records would need to fill in themselves as the recipient, which is workable but not intuitive. There is no separate patient-access pathway or form.

**Scope options**: Good. The form provides 18 checkable record categories (a–r) with an instruction that reads: *"I authorize the release of only that information which is not crossed out below."* This is an opt-out approach (cross out what you don't want released) rather than an opt-in approach (check what you do want). This is somewhat unusual and could confuse patients — does leaving an item uncrossed mean it will be released?

**Reason for release**: Two options — "for continuing care" or "other (please specify)." No option for "patient's own use" or "personal records request."

**Format/delivery options**: None specified. The form does not mention electronic delivery, mail, fax, in-person pickup, or any other delivery mechanism.

**Right of Access language**: The form states *"I may review my records"* — a brief nod to patient rights. However, there is no reference to HIPAA § 164.524, no mention of the Right of Access, and no explanation of patient rights beyond this single sentence.

**EHI Export / electronic records**: No mention whatsoever.

## 6. COMPLIANCE

**Expiration**: The form includes a field: *"The permission is good until_____________."* This is appropriate and required for a valid HIPAA authorization, with follow-up information permitted during the authorization period.

**Revocation**: The form states: *"I may refuse permission to give out records or revoke permission by giving MRH Health Information Management written instructions signed by me and dated."* This is a standard and adequate revocation provision.

**Completeness mandate**: The form states: *"All spaces on this form MUST be completed for this release to be valid."* This is potentially burdensome. If a patient is requesting their own records, filling in sender, recipient, reason, and all other fields may be unnecessary. This requirement could serve as an administrative barrier.

**Sensitive information consent**: The form handles substance abuse, HIV/AIDS, and psychiatric records with separate initial lines, which is appropriate under federal regulations (42 CFR Part 2 for substance abuse) and state laws. The language *"I do authorize disclosure of information which refers to treatment or diagnosis of drug or alcohol abuse. Such information may not be redisclosed by the recipient without my specific written consent"* correctly references redisclosure restrictions.

**Witness line**: The form includes a witness signature line, which is not required by HIPAA for a standard authorization. While not inherently problematic, it could be perceived as an extra barrier.

**Minor provisions**: The form includes a separate signature line for patients aged 14–17 and references internal policies ("See IDD 20.041" and "See IDD 20.060") for representative signing authority.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"All spaces on this form MUST be completed for this release to be valid."** This blanket requirement could be used to reject forms with trivially missing information. HIPAA authorizations require specific elements (45 CFR § 164.508(c)), but demanding that literally every blank be filled goes beyond what HIPAA mandates and creates a potential rejection mechanism.

### ⚠️ AMBIGUITIES

- **Opt-out record selection is confusing.** The instruction *"I authorize the release of only that information which is not crossed out below"* uses a double-negative logic — items are released unless crossed out. Patients may be uncertain whether leaving items alone means they consent to release or whether they need to affirmatively mark items they want included.
- **No patient-access pathway.** The form is structured exclusively for third-party release. A patient requesting their own records must awkwardly cast themselves as both the authorizing party and the recipient, with no guidance on how to do so.
- **Internal policy references ("IDD 20.041," "IDD 20.060")** are meaningless to patients and provide no way to look up these policies.

### ❌ ERRORS

- **Stale URL dating.** The form URL includes `/2014/06/`, suggesting it has not been updated or re-uploaded in over a decade. While not an error in the form text itself, this raises questions about whether the content reflects current practices and regulations.

### ✨ BRIGHT SPOTS

- **Granular record-type selection.** The 18-category checklist (a–r) gives patients meaningful control over what information is released, including less common categories like "Patient Additions," "Responses to Patients Additions," and "Care Conference Notes."
- **Clear redisclosure language.** The substance abuse consent section correctly states that disclosed information *"may not be redisclosed by the recipient without my specific written consent,"* which is an accurate reflection of 42 CFR Part 2 requirements.
