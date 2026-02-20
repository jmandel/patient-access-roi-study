# Evaluation: Arizona Community Physicians — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is an **"Authorization to Disclose Medical Information"** form (Form # 100, updated 08/04/2017) issued by Arizona Community Physicians P.C. It is a 1-page, single-purpose ROI authorization designed for releasing medical records *from* an outside organization *to* a specific ACP practice location.

The "INFORMATION TO BE RELEASED TO" section is **pre-filled** with:
- "Associates in Family Practice"
- 6565 E. Carondelet Dr. Ste 175, Tucson, AZ 85710
- Phone: 520-547-5960 / Fax: 520-547-5969

This makes form-2 a **practice-specific variant** of form-1.pdf (the general-purpose ROI form). Structurally the two are nearly identical — same sections, same field layout, same legal language — but form-2 locks the recipient to one specific practice. The organization hosts seven total forms; form-1 is the primary general ROI, form-3 and form-5 are standing access designation forms, form-4 is imaging-specific, form-6 is a Spanish-language minor form, and form-7 is a HIPAA amendment request.

Notably, the title differs from form-1: form-1 says "Authorization to **Release** Medical Information" while form-2 says "Authorization to **Disclose** Medical Information." The filename on the server is `AFP-Records-Release.pdf`, where "AFP" corresponds to Associates in Family Practice.

## 2. FINDABILITY

Per the retrieval notes, all forms were accessible from a dedicated **Patient Forms page** at `azacp.com/forms/`, linked from the main navigation as "Patient Forms." Standard web searches for `"Arizona Community Physicians" "medical records" "release form"` returned direct URLs to the PDFs. No login or portal access was required.

The URL for this form (`/wp-content/uploads/docs/forms/AFP-Records-Release.pdf`) uses an abbreviation ("AFP") that would not be meaningful to most patients — they would need to know which ACP practice they attend. However, since the forms page presumably labels each form, this is a minor issue. Overall findability is **good**: 2–3 clicks from the homepage, clearly organized, publicly accessible.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: PDF, 132,932 bytes (133 KB) — reasonable for a 1-page form
- **Pages**: 1
- **Text layer**: Present (`has_text_layer: true`, `is_image_only_scan: false`), enabling text search and copy/paste
- **Fillable fields**: **Zero** (`fillable_field_count: 0`). The form is a flat PDF with blank lines rendered as underscores. It must be printed and hand-filled.
- **Fonts**: 3 fonts used
- **Embedded images**: 1 (likely the ACP logo)

This form is **not digitally fillable**. It follows a print-and-write design pattern. The notes mention that the organization also offers a **"Medical Records Electronic Self Request"** via Swellbox (`swellbox.com/arizona-cp-wizard.html`), which is a separate electronic pathway — but this PDF itself offers no digital completion capability.

The lack of fillable fields is a meaningful accessibility gap. Patients who lack access to a printer, or who have motor impairments affecting handwriting, face barriers. The text layer is a positive: it enables screen readers to parse the form content, though the underscore-heavy layout may make screen reader output awkward.

## 4. CONTENT DESIGN

**Structure**: The form is organized into clearly labeled sections:
1. PATIENT INFORMATION (name, former name, account #, phone, DOB)
2. INFORMATION TO BE RELEASED FROM (source organization fields)
3. INFORMATION TO BE RELEASED TO (pre-filled with Associates in Family Practice)
4. PURPOSE FOR THIS REQUEST (checkboxes)
5. TYPE OF INFORMATION TO BE RELEASED (checkboxes with sub-options)
6. DATES OF TREATMENT (date ranges)
7. Legal disclosure paragraph
8. Signature block
9. Copying fee notice

**Clarity**: The language is reasonably clear but includes some dense legal phrasing. The paragraph about drug/alcohol redisclosure restrictions is legalistic: *"the recipient of this information understands that it is prohibited from making any disclosure of this information unless further disclosure is expressly permitted by written consent of the undersigned or otherwise permitted by applicable law."* This is standard but not plain language.

**Purpose checkboxes** are pragmatic and relevant: "Moving," "Treatment or consultation," "Dissatisfaction," "Change of Insurance Plans," "At patients request," "Other."

**Record type options** distinguish between:
- "General Release / Medical Records/Excluding Protected Records" (limited to 1 year unless stated otherwise)
- "Information Protected by State/Federal Law" including AIDS/HIV, behavioral health, and substance abuse

This is a useful distinction that respects both patient autonomy and legal requirements for sensitive records.

**Layout**: At one page, the form is compact. Given the amount of content, it likely appears somewhat **cramped**. The use of underscore lines for fields rather than proper form boxes is a dated design pattern.

**Comparison to form-1**: form-2 is missing some features present in the updated form-1 (revised 08/26/2024):
- form-1 offers **delivery format options**: "Paper," "Disc (PDF format)," "Email" — form-2 has **no delivery format options**
- form-1's purpose section is simplified to "At request of Patient" and "Other" — form-2 retains the longer list
- form-1 has clearer voluntary-consent language: *"I understand authorizing the disclosure of the information identified above is voluntary. I need not sign this form to ensure healthcare treatment."* form-2's version is subtly different and less clear: *"I understand that Arizona Community Physicians may not condition my treatment on whether I sign this authorization form unless specified above under Purpose for Request."*

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is structured as a **third-party release** — it authorizes an outside entity to send records *to* Associates in Family Practice. It is **not designed for a patient requesting their own records**. The "FROM" field is blank (for the patient to fill in their current/previous provider), and the "TO" field is pre-filled with the ACP practice. A patient wanting copies of their records from ACP would need to use form-1 instead.

**Scope options**: The form offers reasonable granularity:
- Date ranges for treatment periods
- Distinction between general records and protected records (HIV, psychiatric, substance abuse)
- "Other Records (specify)" for custom requests

**Format options**: Unlike form-1, form-2 offers **no delivery format choices** (no paper/disc/email options). This is a gap, though it's somewhat understandable since the form is designed for inter-provider transfer to a pre-specified practice.

**Right of Access language**: The form does not reference HIPAA § 164.524 or patient rights specifically. There is no mention of EHI export or electronic health information.

**Fees**: The form states: *"The standard charge for copying medical records is $6.50 for a disc and $0.07 per page for paper. However there maybe additional charges for shipping and handling."* This pricing is disclosed but includes a typo ("maybe" should be "may be"). The $0.07/page rate is low and reasonable. The mention of "additional charges for shipping and handling" is vague.

## 6. COMPLIANCE

**Expiration**: *"THIS AUTHORIZATION WILL AUTOMATICALLY EXPIRE AFTER ONE YEAR (or 60 days for drug and alcohol abuse records) from the date of signing."* One year is a standard and reasonable expiration. The 60-day limit for substance abuse records aligns with 42 CFR Part 2 requirements.

**Revocation**: *"The undersigned may revoke this authorization at any time by providing written notice of revocation."* This is appropriate.

**Conditioning treatment**: The form states: *"I understand that Arizona Community Physicians may not condition my treatment on whether I sign this authorization form unless specified above under Purpose for Request."* The "unless specified above" clause is **concerning** — it implies that treatment could be conditioned on signing if the purpose is something like "Treatment or consultation." Under HIPAA, conditioning treatment on an authorization is generally prohibited except in narrow research contexts.

**Redisclosure notice**: Included for drug/alcohol and communicable disease records, as required.

**No notarization** or witness requirements. No in-person submission requirement stated.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Conditional treatment language**: The phrase *"may not condition my treatment on whether I sign this authorization form unless specified above under Purpose for Request"* creates an exception that could be read as allowing treatment to be conditioned on signing the authorization. This conflicts with HIPAA's general prohibition on conditioning treatment on authorization (45 CFR § 164.508(b)(4)).

### ⚠️ AMBIGUITIES

- **Form directionality confusion**: The form title says "Authorization to Disclose Medical Information" and is hosted on ACP's website, but its structure requires the patient to fill in the *source* organization (FROM) while the ACP practice is pre-filled as the *recipient* (TO). A patient visiting ACP's forms page expecting to request their own records from ACP could easily download this form by mistake, only to find it's for transferring records *into* ACP.
- **Vague shipping fees**: *"there maybe additional charges for shipping and handling"* — no upper bound or estimate given, and the typo ("maybe") adds to the informality.

### ❌ ERRORS

- **Outdated form**: Last updated 08/04/2017 — nearly 9 years old. The equivalent general form (form-1) was revised 08/26/2024. form-2 is missing features added to the updated form-1 (delivery format options, simplified purpose section, clearer voluntary-consent language).
- **Typo in fee disclosure**: "However there maybe additional charges" — should be "may be" (two words).

### ✨ BRIGHT SPOTS

- **Sensitive records handling**: Clear, separate authorization pathway for HIV/AIDS, behavioral health, and substance abuse records, with a shorter expiration (60 days) and explicit redisclosure restrictions. This respects both legal requirements and patient privacy.
- **Multiple purpose options**: The purpose checkboxes ("Moving," "Dissatisfaction," "Change of Insurance Plans," etc.) acknowledge that patients have diverse, legitimate reasons for requesting records — though this is somewhat undermined by the pre-filled recipient making this primarily an inter-provider form.
