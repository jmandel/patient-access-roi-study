# Copley Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is Copley Hospital's primary Release of Information form, titled **"Patient Request for Health Information Authorization Form"** (Form 1085, dated 07-21). It is a single-page PDF (158,588 bytes) hosted on the hospital's WordPress site at a URL containing the path `/wp-content/uploads/2021/08/`. The filename in the URL is `Authorization-to-Release-Medical-Record-Form-07-21.pdf`.

The hospital's Medical Records page also links to three other HIPAA-related forms — a Medical Record Amendment Request (Form 221), a Request for Alternate Communication (Form 350), and a Request for Restrictions on PHI Use or Disclosure (Form 354) — but this is the only form related to requesting copies of health information. It serves a dual purpose: both patient self-requests ("Provide a copy of my records to: Me") and third-party releases ("Release my Records TO: [recipient]").

## 2. FINDABILITY

**Retrieval difficulty: Easy.** The retrieval notes confirm that a web search for "Copley Hospital Morrisville VT authorization release health information form PDF" immediately returned a direct link to the PDF. The form is also linked from the hospital's Medical Records page, located under the main navigation path "For Patients + Visitors > Medical Records." No login, CAPTCHA, or bot-blocking was encountered. The URL is descriptive enough (`Authorization-to-Release-Medical-Record-Form-07-21.pdf`) that a user can identify its purpose from the link text alone.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The full form text (3,601 characters) is extractable, enabling screen readers, text search, and copy-paste.
- **Fillable fields:** Zero (`fillable_field_count: 0`). Despite having clearly delineated fields for patient information (name, DOB, address, phone, email, dates of service, recipient address), none are interactive PDF form fields. A patient must print and hand-fill or use a PDF annotation tool.
- **Fonts:** 7 fonts are embedded, suggesting reasonable typographic structure (likely a mix of headings, body text, and checkbox symbols).
- **Images:** 1 embedded image, presumably the hospital logo. The form is not an image-only scan (`is_image_only_scan: false`), so it was created digitally.
- **File size:** 158 KB for a single page is moderately large (likely due to the embedded logo image), but not unreasonable.
- **Design origin:** This is a digitally authored document, not a scanned paper form. However, the lack of fillable fields means it functions as a print-and-fill document despite being digital in origin.

## 4. CONTENT DESIGN

**Length:** One page. This is impressively compact for a form that covers patient identification, record type selection, delivery method, format preference, authorization to self or third party, legal disclosures, and representative designation.

**Organization:** The form follows a logical top-to-bottom flow:
1. Patient identification fields
2. Record type checkboxes with date-of-service range
3. Delivery method and format options
4. Authorization scope (self vs. third-party release)
5. Legal disclosure statements ("I understand that:")
6. Patient signature and date
7. Representative section (for non-patient signers)
8. Administrative footer (HIM contact info, processing fields)

**Clarity:** The language is largely plain and accessible. The five "I understand that:" statements are clearly written. For example: "This Authorization is voluntary. My treatment will not be impacted, no matter if I sign this Authorization or not." This is a concise, patient-friendly way to convey the non-conditioning requirement.

**Layout concerns:** Given that all of this content fits on a single page, the form is likely quite dense. Seven fonts suggest some visual hierarchy, but the amount of content — patient demographics, record types, delivery options, authorization language, representative designation, and administrative fields — compressed onto one page likely results in small font sizes and tight spacing. The record type checkboxes and the legal disclosure text are both areas where cramping is likely.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is titled "Patient Request for Health Information" and includes a clear checkbox option to "Provide a copy of my records to: Me." This distinguishes it from pure third-party release forms. The dual-purpose design means patients don't need a separate form, but it also means the form carries third-party release complexity (recipient address fields, purpose of release) that is irrelevant when a patient simply wants their own records.

**Scope options:** Patients can select from 7 specific record types via checkboxes:
- Discharge Summary
- Emergency Room Records
- Operative/Procedure Reports
- Billing Records
- Physical Therapy/OT
- Complete Record
- Test Results (X-Rays, Lab/Pathology Results) — with a "Please specify" line
- Other (Progress Notes, Medication Lists) — with a "Please specify" line

A date-of-service range field is provided. This gives patients meaningful control over what they request.

**Format and delivery options:** Notably strong. The form offers four delivery methods: In-Person Pickup, Mail Delivery, Fax, and Patient Portal. It also offers format choices: Paper Copy or Electronic Copy, with electronic sub-options listed as "E-mail, USB, CD, Access in pt portal, Other." The form even includes a helpful note: "Many documents that you may be requesting are available to you in your patient portal."

**Right of Access language:** The form does not explicitly reference HIPAA § 164.524 or use the phrase "Right of Access." The legal disclosures cover voluntariness, authorization validity, revocation rights, and re-disclosure risk, but none specifically frame this as a patient exercising a legal right to their own records.

**EHI Export / bulk data:** No mention of electronic health information export, bulk data, or interoperability options (e.g., FHIR, C-CDA).

**Fees:** No mention of fees or costs anywhere on the form. The patient has no way of knowing from this form whether they will be charged for copies.

## 6. COMPLIANCE

**Authorization validity:** One year from the date signed, "unless I revoke/withdraw this Authorization or an earlier date is specified." One year is a standard and reasonable timeframe.

**Revocation:** Clearly described — the patient may "revoke/withdraw this Authorization, except to the extent that action has been taken prior to receipt of the revocation request, by mailing or faxing my written request to revoke to: Copley Hospital HIM, 528 Washington Hwy, Morrisville VT 05661." This is compliant language, and providing the mailing/fax address is helpful.

**Sensitive information disclosure:** The form states: "The medical information released may contain information related to HIV status, AIDS, sexually transmitted diseases, mental health, drug and alcohol abuse." This is an appropriate disclosure about the potential contents of records, though it does not give the patient an option to exclude these categories — it simply warns that they may be included.

**Representative authority:** The form requires representatives (non-patients) to identify their relationship from a set of checkboxes (Parent with Parental Rights, Court Appointed Guardian, Legally Appointed Healthcare Agent, Medical Power of Attorney, Court Appointed Personal Representative of Deceased) and states "You MUST attach proof of your authority to act on behalf of the patient as checked above (other than parent)." This is a reasonable requirement.

**Voluntariness:** Explicitly stated: "This Authorization is voluntary. My treatment will not be impacted, no matter if I sign this Authorization or not."

**No notarization or witness requirements.** The form requires only the patient's signature (or representative's signature with documentation).

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Comprehensive electronic delivery options.** Offering email, USB, CD, patient portal access, and an open-ended "Other" option for electronic copies goes beyond what many facilities provide. The patient portal callout ("Many documents that you may be requesting are available to you in your patient portal") is a helpful nudge toward self-service.
- **Clear voluntariness statement.** "My treatment will not be impacted, no matter if I sign this Authorization or not" is plain, direct, and reassuring.
- **Single-page efficiency.** Packing all necessary content — demographics, record selection, delivery/format options, authorization language, and representative designation — into one page reduces patient burden if the layout remains readable.

### ⚠️ AMBIGUITIES

- **No fee information.** The form is silent on whether the patient will be charged for copies. A patient has no way to anticipate costs before submitting the request. Under HIPAA, patients have a right to know about fees in advance.
- **"Purpose of Release" field for self-requests.** The form includes a "Purpose of Release" line in the section that also allows "Provide a copy of my records to: Me." Under HIPAA Right of Access, patients do not need to state a purpose when requesting their own records. The form does not clarify whether this field is required or optional for patient self-requests — its presence could confuse or deter patients.
- **Sensitive-information warning without opt-out.** The statement that records "may contain information related to HIV status, AIDS, sexually transmitted diseases, mental health, drug and alcohol abuse" is informational but could alarm patients. There is no option to exclude sensitive categories from the release, nor any explanation of additional protections (e.g., 42 CFR Part 2 for substance abuse records).

### ❌ ERRORS

- **Form date suggests staleness.** Form 1085 is dated 07-21 (July 2021) and the URL path includes `/2021/08/`. The form is now over 4.5 years old. While not necessarily containing errors, this means it predates the 21st Century Cures Act information blocking rules (effective April 2023) and may not reflect current requirements around electronic health information access.

### 🚩 RED FLAGS

- **No fillable fields despite digital authorship.** The form was created digitally (not scanned) yet has zero interactive form fields. This forces patients to print, hand-fill, and either scan/fax or physically deliver the form — creating an unnecessary barrier for patients without printers or who prefer fully digital workflows. For a facility that offers electronic delivery of records, the irony of requiring a non-electronic submission process is notable.
