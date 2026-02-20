# Sturdy Memorial Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **general-purpose Authorization to Release Health Information** form, 2 pages, form code SM00081 (10/24), with a filename indicating it was updated in January 2025. The form is used for authorizing the release of protected health information from Sturdy Memorial Hospital and Sturdy Health Medical Group to a designated recipient.

A second form (form-2.pdf) was also found — an older version of essentially the same authorization document, titled "Sturdy Memorial Hospital/Mansfield Health Center — Authorization to Release Health Information." That older version dates to approximately October 2017 (per HTTP headers), is much larger (761 KB vs. 221 KB), has zero fillable fields, and includes legacy references like "SDC" and "Sturdy Plus" clinics. Form-1 is clearly the current, actively maintained version and supersedes form-2.

Notably, there is **no separate patient-access-specific form** — this same authorization is used whether a patient requests their own records or authorizes release to a third party.

## 2. FINDABILITY

**Easy to locate.** The retrieval notes describe finding both PDF links on the first web search attempt (`Sturdy Memorial Hospital Attleboro MA "authorization" "release of information" medical records form filetype:pdf`). No website navigation was needed. The source URL is descriptive: it includes the phrase "Authorization to Release Medical Records FILLABLE Jan 25" in the filename, making it clear what the document is and that it is fillable.

However, the CDN (Akamai) **blocked direct curl downloads** even with a realistic user agent, requiring a browser-based workaround (fetching via JavaScript `fetch()` within a browser session). This is a technical barrier that could hinder programmatic or assistive-technology-based retrieval, though it would not affect a typical user downloading through a browser.

## 3. TECHNICAL ACCESSIBILITY

**Strong digital-first design.** This form is clearly authored as a native digital PDF, not a scan:

- **Text layer**: Full extractable text (5,129 characters across 2 pages).
- **Fillable fields**: **59 interactive form fields** — an unusually high count that indicates comprehensive fillability. The form appears to have interactive fields for all patient information, checkboxes for record types, purpose of disclosure, and sensitive information initials. However, the `fillable_field_names` array is empty in the metadata, suggesting either that the fields lack descriptive names or that the extraction tool could not retrieve them.
- **No embedded images**: 0 images, confirming this is a purely vector/text-based PDF.
- **Fonts**: 11 fonts (higher than typical, but not problematic).
- **File size**: 221 KB for 2 pages — reasonable and efficient.
- **PDF is not image-only**: Confirmed.

The form was designed to be filled electronically, as signaled by both the URL filename ("FILLABLE") and the field count.

## 4. CONTENT DESIGN

**Well-organized, moderate clarity.** The form follows a logical top-to-bottom flow:

1. **Header**: Organization address (211 Park Street, Attleboro, MA) and title.
2. **Patient identification**: Name, birth date, telephone, address, medical record number.
3. **Authorization direction**: "Authorizes" (source provider) and "Release of Protected Health Information To" (recipient), each with name/address fields plus a fax number field.
4. **Sensitive information**: Six categories requiring individual initials — mental health, HIV/AIDS, STD, sexual assault, substance abuse, genetic testing.
5. **Purpose of disclosure**: Seven checkbox options including "Further Medical Care," "Insurance Eligibility," "Legal Action," "Changing Physicians," "Personal," "Payment of Bill," and "Other."
6. **Re-disclosure warning**: Standard language about inability to guarantee recipient won't re-disclose.
7. **Page 2 — Information to be released**: Approximately 14 checkbox categories with date fields: medical record abstract, clinic visit notes, consultation, discharge summary, emergency room, lab reports, operative reports, pathology reports, radiology reports, physical therapy, billing records, and "other."
8. **Rights section**: Right to refuse, right to revoke, expiration clause.
9. **Signatures**: Patient signature with date/time, personal representative option with relationship field, and witness line.

**Length** is appropriate — 2 pages for this scope of content is concise. **Language** is a mix: the rights section uses reasonably clear prose ("I understand that I may refuse to sign this authorization and that such refusal will not affect my health care or payment for my health care"), while sections like the sensitive information disclosure are more legalistic. No plain-language summary is provided.

**Layout observation**: The extracted text shows extensive use of underscore lines (`____________`) for fill areas, which is a holdover from paper form design. Since the form has 59 fillable fields, these underscores likely serve as visual guides beneath the interactive fields.

## 5. PATIENT-CENTEREDNESS

**Moderate — this is a general release form, not a patient access form.** Key observations:

- **Patient access vs. third-party release**: The form structure is oriented toward authorizing release *to* a named recipient — it requires specifying a provider/plan/other entity in the "Release of Protected Health Information To" section. A patient requesting their own records would need to list themselves as the recipient, which is unintuitive. The "Purpose of Disclosure" checkbox list includes "Personal," which is the closest option for patient access, but this is not explained or highlighted.
- **No HIPAA Right of Access reference**: The form does not cite 45 CFR § 164.524 or mention the patient's right of access. The "Your Rights" section only addresses the right to refuse and the right to revoke — important, but not the same as informing patients of their right to obtain copies of their own records.
- **No electronic delivery option**: There is no checkbox or field for requesting electronic delivery. A fax number field exists for the recipient, but no email or portal delivery option.
- **No mention of EHI export**: No reference to electronic health information, bulk data, or TEFCA.
- **Scope options**: Good granularity — patients can select specific record types and date ranges across ~14 categories. This is better than many forms that offer only "entire record" or a few broad categories.
- **Sensitive information handling**: The six-category initial-based consent for sensitive information (mental health, HIV/AIDS, STD, sexual assault, substance abuse, genetic testing) is appropriately granular and compliant with Massachusetts and federal requirements for special-category data.

## 6. COMPLIANCE

- **90-day expiration**: The form states "This Authorization Expires 90 days from the date of signature below." This is a relatively short window. While not a HIPAA violation (HIPAA doesn't mandate a minimum expiration period), a 90-day hard expiration could create a barrier if processing is slow — the patient might need to re-sign.
- **No notarization requirement**: Not required. ✓
- **No in-person submission requirement**: Not stated. ✓
- **No fee disclosure**: No mention of fees or costs for records. This is neutral — fees may be communicated elsewhere.
- **Witness line**: The form includes a "WITNESS" line at the bottom. It's unclear whether this is mandatory or optional — there's no instruction text. If mandatory, this adds a logistical burden.
- **Right to refuse clearly stated**: "I understand that I may refuse to sign this authorization and that such refusal will not affect my health care or payment for my health care that is provided at Sturdy Memorial Hospital, or Sturdy Health Medical Group." This is appropriate.
- **Right to revoke clearly stated**: Directs written revocation to the Health Information Management Department with a specific mailing address.
- **Re-disclosure warning**: Standard and appropriate.
- **No consent bundling**: The form is solely for release of information authorization. No treatment consent, financial agreements, or other authorizations are bundled.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **90-day hard expiration** is relatively aggressive. For patient access requests under HIPAA, the provider has up to 30 days (with a possible 30-day extension) to fulfill a request — meaning the authorization could theoretically expire before it's even processed if there are delays. The older form-2 version allowed patients to specify a custom expiration date *or* defaulted to 90 days, which was more flexible.

### ⚠️ AMBIGUITIES

- **Witness requirement**: The "WITNESS" line at the bottom of page 2 has no accompanying instruction. It's unclear whether a witness signature is required for the authorization to be valid, or whether this is optional. If required, it creates a barrier for patients filling out the form independently at home.
- **"Authorizes" field confusion**: The first field on page 1 says "Authorizes: (e.g. hospital, clinic or provider name)" — this is where the patient names the entity whose records should be released. A patient requesting their own records from Sturdy Memorial would write "Sturdy Memorial Hospital" here, but this isn't obvious. The form doesn't clarify that this should typically be pre-filled with the hospital's name or explain the field's purpose in plain terms.

### ✨ BRIGHT SPOTS

- **59 fillable fields** is exceptional. Most ROI forms found in similar studies have zero fillable fields. This form was clearly intentionally designed for electronic completion, and the URL filename ("FILLABLE") confirms this was a deliberate design choice.
- **Granular record-type selection** with ~14 categories and date-range fields gives patients meaningful control over scope. Many forms offer only "entire record" or 3-4 broad categories.
- **Sensitive information categories** are individually initialed rather than grouped under a single blanket consent. This respects both Massachusetts law and patient autonomy over especially private data.
- **Current and maintained**: The form code SM00081 (10/24) and filename date (Jan 2025) demonstrate active maintenance. The existence of the superseded form-2 shows iterative improvement — the newer version is smaller, fillable, and has updated department references ("Health Information Management" vs. "Medical Record Department").
