# Emory University Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **current primary English-language ROI authorization form** for Emory Healthcare, titled "Authorization for the Release of Protected Health Information." It is a 2-page fillable PDF, revised November 2025 (per filename; `ModDate: Mon Nov 17 07:47:58 2025`). The source URL path includes `/wr/english-authorization-form-fillable-revised-11-2025.pdf`, suggesting it may have been initially staged for the Warner Robins facility but serves as the unified system-wide form.

This form is one of four documents found for Emory Healthcare:
- **form-1.pdf** (this document): Current English ROI authorization — the primary patient-facing form.
- **form-2.pdf**: Older/legacy 4-page ROI package (dated 9/28, likely September 2022) that bundled the authorization form with e-delivery instructions, ROI policies, and a patient fee sheet.
- **form-3.pdf**: Spanish-language equivalent of form-1 ("Autorización para dar a conocer información médica protegida"), also revised November 2025.
- **form-4.pdf**: Request for Amendment of Protected Health Information (dated May 2021) — a related but distinct patient rights form.

Form-1 is clearly the document Emory Healthcare intends patients to use today for requesting their records.

## 2. FINDABILITY

**Good.** According to retrieval notes, the form was findable through a targeted web search for "Emory Healthcare medical records release form authorization PDF," which directly surfaced the PDF URL. Emory Healthcare maintains a dedicated medical records page at `emoryhealthcare.org/patients-visitors/medical-records` that links to the English and Spanish authorization forms, patient fee sheets, e-delivery instructions, and an amendment form. The URL path structure (`/patients-visitors/medical-records`) is logically organized under the patient-facing section of the site.

The filename (`english-authorization-form-fillable-revised-11-2025.pdf`) is descriptive and includes the language, form type, format (fillable), and revision date — a strong practice. There is also a third-party electronic request platform at `swellbox.com/emory-provider-wizard.html` as an alternative pathway.

Minor concern: the URL path includes a `/wr/` segment (likely "Warner Robins"), which could confuse patients at other Emory facilities into thinking it's facility-specific.

## 3. TECHNICAL ACCESSIBILITY

**Mixed.** The PDF is a true digital document (created in Adobe InDesign 16.1, not a scan) with a text layer, 7 fonts, and no embedded images. File size is 920 KB for 2 pages — somewhat large for a text-based form, though not unreasonable for a fillable PDF.

The form contains **100 interactive fields** (54 checkboxes/buttons, 46 text fields) covering patient demographics, facility selection, recipient info, record type selection, delivery format, and signature. This is a genuinely fillable PDF, though the metadata extraction tool reported `fillable_field_count: 0` — this is because the PDF uses AES-256 encryption with `change: no` permissions, which prevented the metadata tool from reading the AcroForm fields directly. After decryption, the fields are fully enumerable.

Field naming follows a logical convention: `cb1.*` for facility checkboxes (Section 1), `cb2_format.*` and `cb2_method.*` for delivery options (Section 2), `cb3.*` for record type selections (Section 3), `cb4.*` for purpose (Section 4), and standard demographic fields (`patientname`, `dob`, `ssn`, `email`, etc.).

**Key limitation**: The text extraction via pdftotext captures only the static label text (page 2 content, mostly legal paragraphs), not the structural elements of page 1 (section headings, field labels, facility names, record categories). This means the form's actual content is richer than the extracted text suggests — most of page 1's structure lives inside the form field layout and annotations rather than as static text. The Spanish version (form-3) provides a fuller picture, as its text extraction captured the complete label structure including all section headings and checkbox labels.

The PDF is **not tagged** (`Tagged: no`), which limits screen reader accessibility.

## 4. CONTENT DESIGN

**Good overall, with some caveats.** The form is 2 pages — concise for a system-wide authorization covering 18+ facilities. Based on the field structure and the parallel Spanish form, the layout is organized into numbered sections:

1. **Emory Healthcare Facility/Facilities** — 18+ facility checkboxes plus an "Other" option
2. **Recipient, Format, and Delivery Method** — format options (Paper, CD, USB Drive) and delivery methods (MyChart, Mail, Pick Up, EHC Electronic Request website, Email, EHI Export)
3. **Description of Health Information to Be Disclosed** — complete record, partial record, continuity of care/abstract, plus 17+ specific record type checkboxes (H&P, Consultations, Discharge Summary, Lab Results, X-Ray, CD/Films, Cath Reports, etc.) each with associated date fields
4. **Reasons for Releasing Information** — "At my request" plus other options, with certified records checkbox

Page 2 contains important notices and legal text in paragraph form:
- E-mail/CD/flash drive security warnings
- Authorization expiration (field `6.expire`)
- Right to revoke
- Re-disclosure warning
- Sensitive information waiver (HIV/AIDS, substance abuse, mental health)
- Signature block with date and time fields

The language on page 2 is moderately dense but largely understandable. The security warning paragraph about email and CD/flash drive is practical and patient-friendly. The legal text about revocation and re-disclosure follows standard HIPAA authorization language.

## 5. PATIENT-CENTEREDNESS

**Strong.** Several features indicate this form was designed with patient self-request in mind:

- **"At my request"** is listed as a purpose option, confirming this form serves patient access requests (not just third-party releases).
- **Multiple delivery formats**: Paper, CD, USB Drive, and notably **"Via EHI Export"** — an electronic health information export option. This is a standout feature; very few organizations offer EHI Export as a named delivery option on their authorization form.
- **Multiple delivery methods**: MyChart, Mail, Pick Up, EHC Electronic Request website, Email — giving patients 5+ channels to receive their records.
- **Granular record selection**: Patients can request complete records, partial records, or continuity of care abstracts. The 17+ specific record type checkboxes with individual date fields allow precise scoping.
- **Image request options**: Separate checkboxes for Radiology and Heart and Vascular imaging, addressing a common patient need.
- **Expiration field**: Allows the patient to set their own expiration date/event rather than imposing a fixed short window.
- **Spanish version available**: Form-3 is a parallel Spanish translation (also revised November 2025), demonstrating attention to language access.
- **Electronic request platform**: The Swellbox platform provides an additional digital pathway.

The form requests the last 4 digits of SSN (`ssn` field), not the full number — a reasonable security measure that avoids over-collection.

## 6. COMPLIANCE

**Generally compliant with minor notes:**

- **Sensitive information waiver**: The form includes a blanket waiver for HIV/AIDS, substance abuse, and mental health information: *"I consent to the disclosure of such information by Emory Healthcare and waive any privileges or confidentiality with regard to such disclosures."* This is a standard approach to handling 42 CFR Part 2 and state-specific protections, but it could be more clearly explained to patients — the bolded text draws attention but the implications may not be understood.

- **Revocation process**: Requires written revocation presented to the Medical Records Department, with addresses in the Notice of Privacy Practices rather than listed on the form itself. This adds an extra step for patients but is not unreasonable.

- **No fee disclosure on this form**: Unlike the legacy form-2 which included a fee sheet, form-1 does not mention fees. Fee information is available separately as a Word document on the medical records page. The older form-2 disclosed fees of "$6.50 flat fee" for electronic format and "$0.07/page" for paper — these are reasonable under HIPAA's cost-based fee structure.

- **No notarization or in-person requirement**: The form does not require notarization or in-person submission. Multiple submission pathways are available.

- **Authorization expiration**: The form includes a fill-in field for expiration but does not impose a default. The Spanish version clarifies a 90-day default if no date is specified: *"esta autorización caducará a los noventa (90) días posteriores a la firma."*

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **EHI Export as a named delivery option**: The checkbox labeled "Via EHI Export" is remarkably forward-thinking. Very few healthcare organizations surface this option directly on their authorization form, and its presence suggests awareness of the 21st Century Cures Act's information blocking provisions and ONC's EHI export requirements.

- **Spanish-language parallel form**: Providing a fully translated, equivalently structured Spanish authorization form (form-3) revised on the same date demonstrates genuine commitment to language access — not an afterthought.

- **Descriptive filename convention**: `english-authorization-form-fillable-revised-11-2025.pdf` immediately communicates the language, format, and currency of the document. This is a small but meaningful usability detail.

- **Comprehensive delivery options**: Offering MyChart, Mail, Pick Up, Electronic Request website, Email, and EHI Export gives patients an unusually wide range of choices for receiving their records.

### ⚠️ AMBIGUITIES

- **90-day default expiration is not stated on the English form**: The Spanish version (form-3, Section 6) explicitly states a 90-day default if no expiration is specified, but this critical detail is absent from the English form's extracted text. Either it appears in a label not captured by text extraction, or the English form omits it — creating a potential inconsistency between language versions.

- **Encrypted PDF prevents standard field enumeration**: The AES-256 encryption with `change: no` means that some PDF tools (including the study's metadata extractor) report 0 fillable fields. While the form is genuinely fillable in a PDF viewer, this encryption choice could cause issues for assistive technology or automated form-filling tools.

### ❌ ERRORS

- **URL path suggests facility-specific placement**: The source URL contains `/wr/` (Warner Robins), and the pdftotext extraction prominently surfaces "Emory Hospital Warner Robins – Clinic" and "Emory Hospital Perry – Clinic" as the first facility names — likely because these were the most recently added checkboxes and appear in a position that the text extractor encounters first. This is a cosmetic issue in the PDF's internal layer ordering, not a patient-facing problem, but it creates a misleading impression in metadata.

### 🚩 RED FLAGS

- **Blanket sensitive-information waiver**: The form requires patients to consent in advance to release of HIV/AIDS, substance abuse, and mental health records if those happen to be in the requested records. While this is presented as an opt-in waiver, it's structured as part of the overall authorization rather than as a separate, granular consent — patients who want their records but wish to exclude sensitive categories have no mechanism to do so on this form. The bolded text reads: *"I consent to the disclosure of such information by Emory Healthcare and waive any privileges or confidentiality with regard to such disclosures for the purpose(s) of releasing it to the party or parties authorized above."*
