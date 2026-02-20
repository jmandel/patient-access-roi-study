# Evaluation: Samaritan Lebanon Community Hospital — form-1.pdf

**Organization**: Samaritan Lebanon Community Hospital (Lebanon, OR)
**Parent System**: Samaritan Health Services (samhealth.org)
**Document**: "Authorization to Disclose Electronic Health Information in Computer Readable Export"
**Source URL**: https://samhealth.org/computer-readable-ehi-export-request-english?type=pdf
**Form ID**: 002501 (11/23) 0

---

## 1. DOCUMENT IDENTIFICATION

This is a **specialized EHI (Electronic Health Information) computer-readable export request form** — not the standard ROI/authorization form. It is explicitly titled "Authorization to Disclose Electronic Health Information in Computer Readable Export" and exists to fulfill requests for health data in machine-readable formats, as distinguished from the standard human-readable medical records release.

This is a system-level form issued by Samaritan Health Services, not specific to Lebanon Community Hospital. Five forms were found for this organization:

- **form-1.pdf** (this document): Computer-readable EHI export request (English)
- **form-2.pdf**: Computer-readable EHI export request (Spanish)
- **form-3.pdf**: Notice of Privacy Practices
- **form-4.pdf**: Standard Authorization to Disclose Health Information (English) — the primary ROI form
- **form-5.pdf**: Standard Authorization to Disclose Health Information (Spanish)

Form-1 serves a narrower purpose than form-4: it is specifically for patients who want their data in a computer-readable (non-human-readable) format, while form-4 covers the general case of requesting medical records in various human-consumable formats.

---

## 2. FINDABILITY

The form was **difficult to locate**. According to the retrieval notes, it was found on a dedicated "Request Computer Readable Files" subpage of samhealth.org, inside a collapsed/accordion section. It was not discoverable through the primary medical records request page, which directs patients to the MRO Express online portal as the main request method.

The retrieval agent needed to use browser DevTools (JavaScript link extraction) to uncover download links hidden inside collapsed UI elements. Multiple web searches returned confusable results from unrelated organizations ("Samaritan Medical Center" in New York, "samaritanhealth.com"). The URL structure (`samhealth.org/computer-readable-ehi-export-request-english?type=pdf`) is reasonably descriptive but would not be guessed without navigating to the correct subpage first.

For a patient who specifically knows they want computer-readable data — an already niche awareness — finding this form requires navigating to the right subpage and expanding a collapsed section. This is a significant findability challenge.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present; full text is extractable (6,685 characters across 2 pages). Not an image-only scan.
- **Fillable fields**: Zero (0). The form has no interactive PDF form fields despite being a digitally-created document. Patients must print and hand-fill or use PDF annotation tools.
- **File size**: 532,278 bytes (~520 KB) for a 2-page document. This is moderately large, likely due to the 2 embedded images (probably the Samaritan Health Services logo and branding).
- **Fonts**: 7 fonts embedded, indicating a professionally typeset document.
- **Digital-first design**: The document was clearly created digitally (not a scan), but it is designed as a print-and-fill form. The lack of fillable fields is a missed opportunity given its digital origin.

The form is technically functional as a flat PDF with good text extraction, but the absence of any fillable fields is a significant gap for a form explicitly about *electronic* health information export.

---

## 4. CONTENT DESIGN

**Length**: 2 pages — page 1 is the authorization form itself; page 2 provides instructions and rights information. This is an appropriate length.

**Structure**: The form uses numbered sections (1 through 8 on page 1, with matching numbered instructions on page 2). Sections progress logically: patient information → purpose → date range → sensitive information consent → delivery format → rights → signature.

**Clarity**: The form opens with a notable plain-language warning: *"PLEASE NOTE: The files in this export are not designed to be read by humans. The files in this export could be very large and take extra time to process. You will need an application that can use computer-readable data to understand these files."* This is genuinely helpful expectation-setting, though it may also discourage patients who don't understand what "computer-readable data" means.

The rights section (section 7) uses clear language: *"I understand that refusal to sign the authorization will generally not negatively affect my ability to receive health care services or reimbursement for services."* Page 2 expands each right with plain-language explanations.

**Layout**: Sections use uppercase headers and checkbox/initial formatting. The form is reasonably well-organized but dense. The date range restriction ("Date range cannot be prior to 01/01/2013") is inline with the date fields.

**Numbering gap**: Section numbering skips from 1 to 3 — there is no section 2 on page 1. The instructions on page 2 also jump from 1 to 3 (section 2 is labeled "PURPOSE OF THIS REQUEST" in the instructions but corresponds to section 3 on page 1). This is confusing and appears to be an artifact of adapting the standard form (form-4, which has a section 2 for "MEDICAL INFORMATION IS TO BE RELEASED FROM") without renumbering.

---

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is explicitly for patient self-request. Section 3 has "Patient Request - Electronic" pre-checked (☒), and section 6 is titled "THIS INFORMATION IS TO BE RELEASED TO MYSELF." The form is clearly designed for patients requesting their own records, not third-party release.

**Scope options**: The form allows date range specification but does not offer granular record-type selection (unlike form-4 which has checkboxes for discharge summaries, lab reports, etc.). This makes sense — a computer-readable export is typically an all-or-nothing bulk data operation.

**Format/delivery options**: Two delivery channels are offered:
- SHS MyChart Account
- CD (with sub-options: call to pick up, mail, or release to another person)

These are limited. There is no option for email delivery, direct download, or USB drive — and notably **no API-based or FHIR-based delivery mechanism** despite this being an EHI export form. The CD option feels dated for a form revised in November 2023.

**Sensitive information handling**: Section 5 requires separate initials for drug/alcohol treatment, mental health, HIV, and genetic testing information. This is appropriate and compliant with 42 CFR Part 2 and state law.

**Rights explanation**: Page 2 provides clear instructions for each section and explains refusal-to-sign rights, cancellation/revocation procedures, and fee information. The fee section states: *"Reasonable cost-based fees apply in accordance with HIPAA and Oregon law."* This is notably less specific than form-4, which explicitly states "No Charge" for initial patient requests.

**EHI awareness**: This form is specifically designed for EHI export — it is one of the few forms in any health system that explicitly addresses computer-readable health information. This is unusual and forward-looking.

---

## 6. COMPLIANCE

**Fees**: The form states *"I may be charged a reasonable, cost-based fee for copies of the medical records I request"* and the instructions reference *"Reasonable cost-based fees apply in accordance with HIPAA and Oregon law."* Unlike form-4, this form does **not** explicitly state that initial patient requests are free. This creates ambiguity about whether fees apply to EHI export patient requests.

**Authorization expiration**: *"Unless canceled, this authorization expires 12 months from the date I signed this form unless another date or event is specified here."* The 12-month default expiration is standard.

**Processing time**: *"Please allow up to 30 days to process requests."* This is within HIPAA's 30-day window (with possible 30-day extension).

**Submission channels**: The form lists mail, fax, and email (SHSHIMROI@samhealth.org) as submission methods, plus in-person locations. Multiple channels is good; email acceptance is notable and patient-friendly.

**Date restriction**: *"Date range cannot be prior to 01/01/2013."* This arbitrary cutoff limits patients from requesting older records in computer-readable format, which may reflect EHR system limitations but is not explained on the form.

**No notarization required**; no in-person-only submission requirement.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee ambiguity for patient EHI requests**: While form-4 (the standard ROI form) explicitly states "No Charge" for initial patient requests, this EHI export form only says "Reasonable cost-based fees apply in accordance with HIPAA and Oregon law." Under HIPAA's Right of Access, patients are entitled to receive their records for a reasonable cost-based fee, and the ONC's information blocking rules further restrict fees for EHI export. The omission of "No Charge" language for patient requests — when it appears on the sibling form — could deter patients from requesting their data.

### ⚠️ AMBIGUITIES

- **Section numbering gap**: The form skips from section 1 to section 3, with no section 2. This is disorienting and creates a mismatch between form fields and page-2 instructions. A patient following the numbered instructions will look for a non-existent section 2 on page 1.
- **"Computer-readable" undefined**: The form warns that files "are not designed to be read by humans" and that patients "will need an application that can use computer-readable data," but never specifies what format the data will be in (C-CDA, FHIR, CSV, proprietary export, etc.). A patient has no way to know whether they have compatible software.
- **Date floor unexplained**: The restriction "Date range cannot be prior to 01/01/2013" is stated without explanation. Patients may have records predating 2013 and would not know why they can't request them in this format or what alternative exists.

### ✨ BRIGHT SPOTS

- **Dedicated EHI export form**: The mere existence of a separate form for computer-readable health information export is unusual and commendable. Most health systems offer only a general ROI form with no computer-readable option. Samaritan Health Services is ahead of the curve in acknowledging that patients may want machine-readable data.
- **Plain-language EHI warning**: The upfront notice that *"The files in this export are not designed to be read by humans"* is honest, clear expectation-setting that prevents patient confusion about what they'll receive.
- **Spanish-language version**: Form-2 is a complete Spanish translation of this form, demonstrating commitment to language access.
- **Email submission accepted**: Listing SHSHIMROI@samhealth.org as a submission channel allows patients to submit the form digitally without requiring in-person delivery or postal mail.
- **Multiple HIM locations listed**: Page 2 lists five physical HIM customer service locations across the system (Corvallis, Albany, Lebanon, Newport, Lincoln City), giving patients convenient in-person options.
