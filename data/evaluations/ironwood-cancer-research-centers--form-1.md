# Evaluation: Ironwood Cancer & Research Centers — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is **not** a patient-access ROI form. It is titled "Authorization to Release Protected Health Information TO Ironwood Cancer and Research Centers" and is designed for patients to authorize **other** facilities to send records **to** Ironwood "for the purpose of continuing patient care." It is an incoming-records request form — the patient fills it out and delivers it to an outside provider, who then sends records to Ironwood.

The organization has three forms total:
- **form-1.pdf** (this document): Incoming records request — authorizes external facilities to release records *to* Ironwood.
- **form-2.pdf**: The actual outgoing ROI form — authorizes Ironwood to release a patient's PHI *from* Ironwood to a specified recipient. This is the true patient-access form.
- **form-3.pdf**: A 10-page new patient forms packet from a sister site (ironwoodwomenscenters.com), which includes a "Consent to Release Protected Health Information Contact List" (a HIPAA contact list, not a traditional ROI).

Because form-1 is an incoming-records request rather than a patient-access authorization, much of the patient-centeredness and compliance evaluation below must be understood in that context. A patient trying to obtain their own records would need form-2, not this document.

## 2. FINDABILITY

The form was located via web search for `site:ironwoodcrc.com authorization release medical records` (search strategy #3 in retrieval notes). It was not directly linked from the patient forms page at https://www.ironwoodcrc.com/patient-forms/, which "did not have visible links to downloadable forms when fetched." The form lives at a WordPress uploads URL:

> `https://www.ironwoodcrc.com/wp-content/uploads/2023/11/Medical-Records-RequestForm-to-request-from-other-facilities_FILLABLE.pdf`

The filename is reasonably descriptive — "to-request-from-other-facilities" clarifies the direction. However, a patient navigating the website would not easily find this form through normal browsing. The patient forms page apparently requires JavaScript rendering or has removed visible links. The form was discoverable only through direct search, making findability poor from a patient perspective.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: Single-page PDF, 435 KB (reasonable for a 1-page form with an embedded image/logo).
- **Text layer**: Present — full text is extractable (4,960 characters).
- **Fillable fields**: 22 interactive form fields, making this a digitally fillable PDF. The metadata notes `fillable_field_names: []` (names not extracted), but the field count is substantial for a 1-page form.
- **Font count**: 10 fonts used.
- **Embedded images**: 1 (likely the Ironwood logo).
- **Digital-first design**: Yes — this appears to be a natively digital PDF with fillable fields, not a scan. The 2023 upload date in the URL confirms it's relatively current.

This is one of the better technical implementations: a fillable, text-layer PDF that can be completed digitally. However, no electronic submission method is specified — a patient would presumably need to print and deliver the completed form to the external facility.

## 4. CONTENT DESIGN

**Length**: 1 page. Given the form's purpose (authorizing another facility to release records), this is proportionate.

**Layout**: The form devotes roughly the top third of the page to listing all Ironwood physicians by specialty (Medical Oncology, Radiation Oncology, Gynecological Oncology, plus administrators). This is a lengthy roster — approximately 70+ names — which crowds the form and pushes the actual authorization content into the lower portion. This physician listing appears to serve an identification/credential purpose but creates visual clutter.

**Clarity**: The authorization language is reasonably clear. The form includes five starred disclosure statements covering:
1. Sensitive information categories (HIV/AIDS, STDs, mental health, substance abuse, genetic testing)
2. Non-conditioning of treatment on signing
3. Right to revoke in writing
4. Redisclosure risks
5. One-year expiration

The language is somewhat legalistic but not excessively dense for an authorization form. The sensitive-information disclosure is thorough.

**Organization**: Patient information fields (name, DOB, address, phone) appear in the middle of the form between the physician roster and the Ironwood office locations. This is a somewhat unusual layout — putting the physician roster first rather than patient identification creates an odd flow. The office locations block (8 offices with phone and fax numbers) takes up additional space.

**Records specification**: The form offers two options: "Please release all pertinent records from the dates of ___ to ___" OR "Please release the following information: ___" — giving patients control over scope. However, the date-range and specific-information fields appear to be free-text rather than structured checkboxes.

## 5. PATIENT-CENTEREDNESS

This form is **not designed for patient access to their own records**. It serves a different purpose: facilitating continuity of care by authorizing outside providers to send records to Ironwood. A patient trying to exercise their HIPAA Right of Access would need form-2.pdf instead.

That said, evaluating it on its own terms:
- **Scope options**: The form allows either all records within a date range or specific records — adequate flexibility.
- **Delivery method**: Not specified on this form; the form is directed to external facilities with Ironwood's fax numbers listed, implying fax delivery is the expected channel.
- **No electronic delivery options** for the patient themselves — no mention of email, portal, or download.
- **No patient rights language**: The form does not reference HIPAA § 164.524 or patient rights to access. This is understandable since the form is for incoming records transfer, not patient access.
- **No EHI export or bulk data mention**.

## 6. COMPLIANCE

- **Expiration**: "This authorization expires one (1) year from the date of signing unless an earlier date is specified in writing." This is standard and reasonable.
- **Non-conditioning**: The form states "ICRC will not condition treatment on whether I sign this Authorization" — appropriate HIPAA-compliant language.
- **Revocation**: Right to revoke is clearly stated, with the requirement that revocation be in writing. Standard.
- **Sensitive information**: The form explicitly addresses HIV/AIDS, STDs, mental health, substance abuse, and genetic testing — ensuring the authorization covers categories that often require separate consent under state laws.
- **No unreasonable barriers** such as notarization, in-person submission, or fees.
- **Signature**: Requires signature, printed name, date, and relationship to patient (if not patient). Standard fields.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Washington state law citation in an Arizona practice**: The form references "RCW 70.24 et seq." in its STD definition section — this is a **Revised Code of Washington** citation. Ironwood Cancer & Research Centers is based in Chandler, AZ, with all listed offices in Arizona. The form defines STDs "as defined by law, RCW 70.24 et seq." and then lists specific conditions including "VDRL, chancroid, lymphogranuloma venereuem." This strongly suggests the form template was copied from a Washington State provider without updating the legal references to Arizona law. This is a factual error that could create legal ambiguity about the authorization's scope and validity.

### ❌ ERRORS

- **Wrong state law reference**: As noted above, the citation to "RCW 70.24 et seq." is Washington state law, not Arizona law. Arizona's relevant statutes differ. This is a template-copy error.
- **Spelling error**: "lymphogranuloma venereuem" should be "lymphogranuloma venereum."
- **Physician name truncation**: The extracted text shows "Christopher M. Kellogg, M" — truncated, likely "MD" was cut off by a layout issue.

### ⚠️ AMBIGUITIES

- **Form purpose confusion**: A patient seeking their own records might find this form first (it ranks alongside form-2 in search results) and be confused about which form to use. The title "Authorization to Release Protected Health Information" is generic; only the subtitle "TO Ironwood Cancer and Research Centers" and the phrase "For the purpose of continuing patient care" clarify the direction. A patient could easily mistake this for a general ROI form.
- **No submission instructions**: The form doesn't specify how or where the patient should submit it. Since it's meant for an external facility, the patient presumably delivers it there — but this isn't stated.

### ✨ BRIGHT SPOTS

- **Fillable PDF**: With 22 interactive fields, this is a genuinely digitally fillable form — a meaningful step above non-fillable PDFs or image-only scans.
- **Flexible scope options**: The "all records from dates" OR "specific information" structure gives patients reasonable control.
- **Comprehensive office listing**: All 8 Ironwood offices with phone and fax numbers are listed, making it easy for external facilities to route the records correctly.
