# Broward Health — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is the **English-language** version of Broward Health's "Authorization for Release of Health Information" (also titled "Authorization for Disclosure of Confidential Medical Information" per the translated versions). It is a single-page general ROI authorization form.

Broward Health provides this same form in four languages: English (form-1), Spanish (form-2), Haitian Creole (form-3), and Portuguese (form-4). All four share the same structure, form number (H-1007 - 119550), and revision date (8/2014). The English version is uniquely problematic: it is an **image-only scan** with no extractable text, while the Spanish, Creole, and Portuguese versions are digitally-rendered PDFs with full text layers. The filename (`ROI-English-032620.ashx`) suggests the scan was uploaded on 03/26/2020, but the form itself dates to the 8/2014 revision.

This is a **general release form**, not a patient-access-specific form. Based on the translated versions' content, the form authorizes disclosure of health information to the patient ("MYSELF") or to a third party ("OTHER"), serving dual purposes without distinguishing between HIPAA Right of Access requests and third-party authorizations.

## 2. FINDABILITY

The form is **moderately easy to find**. The retrieval notes indicate the Medical Records Request page is reachable in approximately 3 clicks from the homepage (Patients and Visitors > Information Request > Medical Records Request). The page is well-organized and lists all four language versions with direct download links.

However, there are significant access barriers:
- **Cloudflare bot protection** blocks direct `curl` downloads, requiring browser-based access.
- **Case-sensitive URLs**: The English form link on the page used a lowercase URL (`roi-english-032620.ashx`) that failed; only the case-correct URL (`ROI-English-032620.ashx`) worked. This suggests a broken or fragile link on the page itself.
- The URL/filename is not particularly descriptive — `.ashx` is an ASP.NET handler extension, not a meaningful filename.

Positively, Broward Health also offers an **online request option** via Swellbox (`swellbox.com/broward-health-wizard.html`), providing an alternative to the PDF form.

## 3. TECHNICAL ACCESSIBILITY

This is a **technically poor** digital artifact:

- **Text layer**: None. The metadata confirms `has_text_layer: false`, `full_text_chars: 1` (just a form feed character), and `font_count: 0`.
- **Image-only scan**: The form is a single grayscale JPEG embedded in a PDF (1700×2200 px at 200 DPI). The `is_image_only_scan: true` flag confirms this.
- **Fillable fields**: Zero. `fillable_field_count: 0` with no field names.
- **File size**: 463 KB for a single-page scan — roughly 5× larger than the digitally-rendered Spanish version (91 KB) despite containing the same content.
- **Accessibility**: As an image-only PDF, this form is completely inaccessible to screen readers, cannot be searched, and cannot be filled digitally. Patients must print, hand-write, and scan or fax the form.

The contrast with the other three language versions is striking. The Spanish, Creole, and Portuguese forms all have text layers, 10 embedded fonts, and no embedded images — they were clearly created as digital documents. The English form appears to be a scan of a printed copy of an earlier version that was never replaced with a digital equivalent.

## 4. CONTENT DESIGN

Because form-1.pdf is an image-only scan with no extractable text, content analysis must rely on the translated versions (forms 2-4), which share identical structure (form number H-1007 - 119550, revision 8/2014).

Based on the Spanish version's extracted text, the form includes:
- **Sensitive information classification** section at top (Drug & Alcohol treatment, Mental Health, HIV/AIDS, Genetic records) with Florida-law-specific consent language
- **Patient identification** fields (name, address, DOB, phone)
- **Recipient designation**: checkbox for "MYSELF" or "OTHER" with address fields
- **Delivery options**: pick up copies or mail via US Postal Service, in paper format or encrypted CD
- **Purpose** field and **date range** for treatment records
- **Record type selection**: Complete medical record, H&P, discharge summary, consultations, operative report, lab reports (with date ranges), radiology reports (with date ranges), problem list, pathology report, media interview, physician progress notes, physician orders, physical therapy records, nursing notes, photos
- **Patient rights disclosures** (4 bulleted statements): right to revoke, voluntary nature, right to inspect/copy per CFR 164.524, re-disclosure warning, minimum necessary standard
- **Expiration clause**: authorization expires six months from signature date
- **Signature lines**: Patient/personal representative, authorized Broward Health signature, witness signature
- **Color-coded copy distribution**: "WHITE - MEDICAL RECORD" and "CANARY - PATIENTS" — language designed for paper carbon-copy forms

The form is a **single page**, which is appropriately concise. However, the density of content on one page (based on the translated versions) means fields are likely cramped. The 200 DPI scan resolution is adequate but not high quality.

The language, as visible in translations, is **legalistic but reasonably structured**. Sections follow a logical order. The record-type checklist is comprehensive.

## 5. PATIENT-CENTEREDNESS

- **Patient access vs. third-party release**: The form serves dual purposes. The "MYSELF" checkbox option allows patients to request their own records, but the form is fundamentally structured as a third-party release authorization. There is no separate, streamlined patient access request form.
- **Scope options**: Good. Patients can specify date ranges, select from ~15 record types, and exclude specific records from a "complete medical record" request.
- **Format options**: Limited to **paper** or **encrypted CD**. No electronic delivery option (no email, no patient portal download, no secure electronic transfer). The "encrypted CD" option is notably outdated for a form still in use in 2026.
- **Right of Access language**: The translated versions reference "CFR 164.524" — the HIPAA Right of Access provision — in the context of the patient's right to inspect or copy information to be disclosed, with a note about "reasonable charges." This is a positive inclusion.
- **EHI Export awareness**: None. No mention of electronic health information export, bulk data, or modern digital delivery mechanisms.
- **Purpose field**: The form requires patients to state a purpose for the request. Under HIPAA § 164.524, patients requesting their own records are **not required** to provide a reason. This field, while perhaps intended for third-party releases, is not clearly marked as optional for patient access requests.
- **Online alternative**: The Swellbox online wizard is a meaningful alternative, though its existence doesn't excuse the poor quality of the downloadable form.

## 6. COMPLIANCE

- **Witness signature required**: The form includes a witness signature line. While not explicitly labeled as mandatory, its presence suggests it may be expected, which could create an unnecessary barrier for patients completing the form at home.
- **Broward Health authorized signature**: A signature line for "Authorized Broward Health" staff is included, indicating this is designed as an in-person, dual-signature process.
- **Six-month expiration**: The authorization expires six months from the signature date (confirmed in translated versions: "this authorization will expire six months from the date signed below"). This is a reasonable timeframe.
- **No notarization required**: The form does not require notarization.
- **No fee disclosure**: The form mentions a "reasonable charge" for inspection/copying per CFR 164.524 but does not disclose specific fee amounts.
- **Voluntary authorization**: The form explicitly states authorization is voluntary and that treatment, payment, and eligibility will not be conditioned on signing. This is a HIPAA-required disclosure and is properly included.
- **Minimum necessary standard**: The form states Broward Health "will disclose only the minimum amount of information necessary to fulfill a request." While this is good practice for third-party releases, applying the minimum necessary standard to patient access requests would be incorrect — HIPAA's Right of Access entitles patients to their complete designated record set.
- **Sensitive record categories**: The form requires separate initialing for Drug & Alcohol, Mental Health, HIV/AIDS, and Genetic records, consistent with Florida law and federal 42 CFR Part 2 requirements.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Purpose requirement without patient access exception**: The form asks patients to state a purpose ("For the purpose of: ___"). HIPAA § 164.524 does not require patients to justify their access requests. The form does not indicate this field is optional for patient self-requests.
- **Minimum necessary applied to patient access**: The statement "Broward Health will disclose only the minimum amount of information necessary to fulfill a request" is appropriate for third-party releases but would violate HIPAA if applied to patient access requests, where patients are entitled to their full designated record set.

### ⚠️ AMBIGUITIES

- **Witness signature**: It is unclear whether the witness signature is mandatory. If required, this could prevent patients from completing and submitting the form remotely without arranging for a witness.
- **Encrypted CD as "electronic" delivery**: The only non-paper format option is an "encrypted CD," which is technically electronic but practically obsolete. It's unclear whether patients can request records via email, portal, or other modern electronic means.

### ❌ ERRORS

- **Image-only English form**: The primary English-language form is a scan with no text layer, while all three translated versions are properly digitized. This is a significant technical defect — the most-requested language version is the least accessible.
- **Garbled text in translated PDFs**: The Spanish and Portuguese versions contain garbled text strings (e.g., `([FHSWR\u0003FXDQGR\u0003VH\u0003OD\u0003UHYRTXH...` in Spanish, `6DOYR\u0003GLVSRVLomR\u0003HP\u0003FRQWUiULR...` in Portuguese), indicating font encoding issues in what appears to be the expiration clause and witness signature line. These sections are unreadable in the extracted text.
- **Case-sensitive URL breakage**: The link on Broward Health's own Medical Records page used an incorrect case for the English form URL, causing download failures.
- **Outdated form revision**: The form is dated 8/2014 (over 11 years old) and has not been updated to reflect modern delivery options or the 2021 HIPAA Right of Access enforcement actions.

### ✨ BRIGHT SPOTS

- **Multilingual availability**: Offering the ROI form in four languages (English, Spanish, Haitian Creole, Portuguese) is commendable and reflects the linguistic diversity of the South Florida community served by Broward Health.
- **Online alternative**: The availability of a Swellbox-based online wizard for medical records requests provides a modern alternative to the PDF form, potentially bypassing many of the PDF's accessibility limitations.
- **CFR 164.524 reference**: Explicitly citing the HIPAA Right of Access regulation gives patients a reference point for understanding their rights.
- **Comprehensive record type checklist**: The form offers granular control over which record types to request, including date-range filtering for lab and radiology reports.
