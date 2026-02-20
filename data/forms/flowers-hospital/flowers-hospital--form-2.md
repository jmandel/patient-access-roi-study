# Flowers Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is Flowers Hospital's official **"Patient Request for Health Information"** form, identified as **HIM-1406**. It is a single-page PDF (102,982 bytes) with the revision history line: `04/18 (Rev. 08/18, 01/20, 02/20, 06/21, 11/23)`, indicating the form has been actively maintained since its 2018 creation, most recently revised in November 2023.

This is the primary ROI form for the hospital. Three documents were found for Flowers Hospital:
- **form-1.pdf**: A separate release form from Wiregrass Surgical Associates, an affiliated practice located in the Flowers Hospital Doctor's Center — not the hospital's own form.
- **form-2.pdf** (this document): The hospital's official English-language patient request form.
- **form-3.pdf**: A Spanish-language translation (HIM-1406S) with identical structure and the same 66 fillable fields, revised 01/24.

The form is explicitly titled "Patient Request for Health Information," framing itself as a patient-access document rather than a general third-party release form. It does also accommodate disclosure to personal representatives and other third parties via a "Please provide my records to" section with options for "Myself," "Personal Representative," and "Other Third Party."

## 2. FINDABILITY

According to the retrieval notes, the form was **easy to find**. The hospital's main website (flowershospital.com) has a "Request Medical Records" page accessible from the "Patients & Visitors" navigation section. That page links directly to the downloadable English and Spanish PDF forms. The source URL is descriptive: `https://www.flowershospital.com/Uploads/Public/Documents/all-new-documents/HIM-1406.pdf`.

The medical records page also provides an alternative online request portal via Swellbox, giving patients a choice between the downloadable PDF and an electronic submission pathway. The retrieval notes describe finding the form through direct website navigation with no significant difficulties.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** The form has a full extractable text layer (2,553 characters). It is not an image-only scan.

**Fillable fields:** The form has **66 AcroForm fillable fields** — a notably high count for a single-page document. This indicates comprehensive interactive form design where virtually every input area (text fields, checkboxes for record types, delivery method selections, signature fields) is digitally fillable. The `fillable_field_names` array is empty in the metadata, suggesting the fields may use auto-generated names rather than descriptive ones, though the field count itself demonstrates thorough coverage.

**File format and design:** At 102,982 bytes with 6 fonts, 0 embedded images, and a single page, this is a lean, purpose-built digital document. The retrieval notes indicate it was "Created with Adobe InDesign," confirming it was designed as a digital-first document rather than a scanned paper form. The `*ROI*` header marker in the extracted text suggests structured tagging.

**Overall:** This is a technically strong digital artifact — fillable, text-searchable, lightweight, and created with professional design software.

## 4. CONTENT DESIGN

**Length:** Single page (1 of 1), which is appropriate for a patient access request form. All content fits on one page without feeling excessive.

**Organization and structure:** The form follows a logical top-to-bottom flow:
1. Patient demographics (name, DOB, phone, email, address)
2. Facility identification (which facility records are requested from)
3. Record type selection (checkboxes for specific record types)
4. Sensitive information consent (separate opt-in checkboxes)
5. Delivery method selection
6. Recipient identification
7. Signature block

**Record type granularity:** The form offers 13 specific record type checkboxes: Progress Notes, Emergency Room Record, Discharge Summary, History and Physical, Consultation(s), Lab Reports, Pathology Report, Operative Note(s), Imaging/X-Ray Films, Imaging/X-Ray Reports, Entire Record, Fetal Heart Monitor Strips, plus an "Other (specify)" free-text field. This gives patients meaningful control over the scope of their request.

**Sensitive information handling:** The form separately lists five categories of sensitive information that require explicit opt-in: Alcohol Abuse, Drug Abuse, Communicable diseases (including HIV status), Genetic Testing, and Psychiatric/Behavioral Diagnoses. This is compliant with 42 CFR Part 2 and state-level protections.

**Language:** The form uses reasonably plain language. Field labels are clear ("What records do you want to receive or have disclosed to the recipient noted?"). The email risk disclaimer is written at an accessible level: "I understand that there is a risk to me when my information is transmitted via an unsecured e-mail system, and the information could be accessed by a third party during the transmission process."

**Signature block:** Includes spaces for patient/representative signature, relationship, date/time, interpreter (if utilized), and witness signature — well-organized with appropriate role distinctions.

## 5. PATIENT-CENTEREDNESS

**Patient access framing:** The form title — "Patient Request for Health Information" — and the first recipient option ("Myself") explicitly frame this as a patient access form. This is a meaningful distinction from forms titled "Authorization for Release" or "Disclosure Authorization," which implicitly frame the patient as authorizing disclosure to someone else.

**HIPAA Right of Access acknowledgment:** The footer states: `"This Healthcare Facility recognizes a patient's right under HIPAA to access copies of his/her health information."` This is a clear, affirmative statement of the patient's right.

**Delivery options:** The form provides five delivery methods:
1. Paper
2. Email (with risk acknowledgment)
3. Removable Media (DVD, USB, CD-ROM) — with password-protection choice
4. Mail to specified address
5. Pick up in person

The removable media option with a password-protection toggle is notably patient-friendly and shows awareness of patients' digital needs. The email option includes an appropriate risk disclosure rather than simply prohibiting electronic delivery.

**Date range scoping:** The form includes a date-of-service range field (`through` format), allowing patients to narrow their request.

**Multilingual support:** The existence of form-3.pdf (HIM-1406S), a complete Spanish translation with identical structure and fillable fields, demonstrates commitment to serving non-English-speaking patients.

**Online portal alternative:** Per the retrieval notes, the hospital also offers a Swellbox online request portal as an alternative to the PDF form, giving patients a fully digital submission pathway.

**Limitations:** The form does not mention EHI (Electronic Health Information) export or bulk data access. There is no mention of turnaround time expectations. The fee disclosure is vague: "There may be charges associated with processing a request and producing requested records" — it does not specify a fee schedule or reference HIPAA's cost-based fee limitations.

## 6. COMPLIANCE

**Fee language:** The footer states: `"There may be charges associated with processing a request and producing requested records."` This is vague but not affirmatively problematic — it does not quote specific amounts or impose unreasonable fees. However, it lacks transparency: patients have no way to estimate costs before submitting their request. Compare this with form-1.pdf (Wiregrass Surgical), which explicitly cites Alabama State Law fee schedules ($1.00/page first 25, $0.50/page thereafter, $5.00 search fee).

**No notarization requirement:** The form does not require notarization.

**No in-person submission requirement:** Multiple submission pathways are implied (mail, in-person pickup, etc.), but the form itself does not restrict how it must be submitted.

**No unreasonable expiration:** The form does not include an authorization expiration clause, which is appropriate for a patient-access request (as opposed to a third-party authorization).

**Witness requirement:** The form includes a "Witness Signature" field with Date/Time. While not explicitly marked as required, the presence of a witness signature field may create a practical barrier if interpreted as mandatory — most patients completing the form at home would not have a witness available. This could deter patients from submitting the form or delay their request.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Removable media with password protection option:** The form explicitly offers USB/DVD/CD-ROM delivery with a patient choice between "Password Protected" and "Not Password Protected." This is an unusually thoughtful digital delivery option that most healthcare forms do not provide.
- **Spanish-language parallel form:** A complete, structurally identical Spanish translation (HIM-1406S) with the same 66 fillable fields is available alongside the English version — not a separate, inferior translation.
- **Patient-access framing:** Titling the form "Patient Request for Health Information" and listing "Myself" as the first recipient option centers the patient's own right of access rather than framing the interaction as a third-party disclosure.
- **66 fillable fields on a single page:** Comprehensive AcroForm coverage means essentially every input area is digitally fillable, enabling patients to complete the form entirely on-screen.
- **Online portal alternative (Swellbox):** The hospital offers a fully digital submission pathway alongside the PDF, reducing barriers for patients who prefer not to print and scan.

### ⚠️ AMBIGUITIES

- **Witness signature field:** The form includes a "Witness Signature" line but does not indicate whether a witness is required or optional. For a patient-access request (as distinct from a third-party authorization), requiring a witness would be an unusual and potentially burdensome requirement. The ambiguity may cause patients to delay submission if they believe a witness is needed.
- **Fee disclosure vagueness:** The statement "There may be charges associated with processing a request" gives patients no information about what those charges might be or how they are calculated. Under HIPAA's Right of Access rule, fees must be limited to reasonable, cost-based amounts, but the form does not reference this protection.
