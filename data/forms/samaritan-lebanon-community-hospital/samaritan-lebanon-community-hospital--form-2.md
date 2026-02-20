# Evaluation: Samaritan Lebanon Community Hospital — form-2.pdf

## Document Overview

- **Form title**: Autorización para divulgar Información electrónica de salud en formato comprensible por computadora (Authorization to Disclose Electronic Health Information in Computer Readable Export — Spanish)
- **Source URL**: https://samhealth.org/wp-content/uploads/2023/12/Computer-Readable-EHI-Export-Request-Spanish.pdf
- **Pages**: 2
- **File size**: 472,665 bytes (~461 KB)
- **Fillable fields**: 0
- **Text layer**: Yes
- **Image-only scan**: No

---

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is the **Spanish-language version** of the Computer Readable EHI Export Request form (form-1.pdf is its English counterpart). This is a **specialized** authorization form for patients who want their electronic health information exported in a machine-readable (computer-readable) format — distinct from the general-purpose ROI form (form-4.pdf / form-5.pdf).

Among the five forms found for this organization:
- **form-1.pdf**: EHI Export Request (English) — English twin of this document
- **form-2.pdf**: EHI Export Request (Spanish) — *this document*
- **form-3.pdf**: Notice of Privacy Practices
- **form-4.pdf**: Standard Authorization to Disclose Health Information (English) — the primary ROI form
- **form-5.pdf**: Standard Authorization to Disclose Health Information (Spanish)

All forms are system-level documents from **Samaritan Health Services**, not facility-specific to Samaritan Lebanon Community Hospital. The form is branded "Samaritan Health Services" and lists the centralized HIM office at PO Box 2728, Corvallis, OR 97339.

This form is notable for its specific focus on EHI export — a relatively uncommon form type that directly supports the 21st Century Cures Act's information blocking provisions.

---

## 2. FINDABILITY

**Difficult to locate.** According to the retrieval notes, the standard ROI forms and this EHI export form were found only after significant effort:

- The EHI export forms were located on a dedicated "Request Computer Readable Files" subpage, itself hidden inside a collapsed/accordion section requiring browser-based inspection to discover.
- The source URL (`/wp-content/uploads/2023/12/Computer-Readable-EHI-Export-Request-Spanish.pdf`) is a WordPress media upload path — functional but not descriptive to a user browsing the site.
- The primary medical records request page directs patients to the MRO Express online portal; downloadable forms are de-emphasized.
- Web searches returned confusable results from other similarly-named organizations (e.g., "Samaritan Medical Center" in Watertown, NY).

A Spanish-speaking patient would face additional difficulty: they would need to first navigate an English-language website to find this form, then locate the collapsed section with the Spanish download link. There is no indication that samhealth.org offers a Spanish-language site navigation.

---

## 3. TECHNICAL ACCESSIBILITY

**Mixed.** The document has a proper text layer (not a scan), which is good for accessibility and search. The extracted text is fully readable and well-structured in the metadata. However:

- **Zero fillable fields.** Despite being a digitally-authored PDF (6 fonts, 2 embedded images, clean text extraction), the form has no interactive form fields. Patients must print and hand-write all information. Checkboxes are rendered as Unicode characters (☐/☒) in the text layer, not as interactive elements.
- **File size**: 461 KB for a 2-page form is moderately large, likely due to embedded images (logos/branding). Not unreasonable but not optimized.
- **Digital-first design**: The form was clearly designed digitally (not a scan of paper), but it was designed *for printing*, not for digital completion. The instruction "ESCRIBA EN LETRA DE IMPRENTA POR FAVOR" (PLEASE PRINT) confirms this print-first orientation.

---

## 4. CONTENT DESIGN

**Well-organized but dense.** The form follows a logical numbered structure across its two pages:

- **Page 1**: Operational sections — patient information (section 1), purpose (section 3, pre-checked as "Solicitud del paciente - Electrónico"), date range (section 4), sensitive information initials (section 5), delivery format (section 6), rights summary (section 7), and signature (section 8).
- **Page 2**: Instructions and rights — numbered instructions corresponding to each section on page 1, plus details on fees, signature requirements, cancellation/revocation rights, and HIM office locations/hours.

Notably, **section 2 is missing** from the form. The numbering jumps from section 1 (patient information) directly to section 3 (purpose). This is because the standard ROI form (form-4) has a section 2 for selecting which Samaritan facility to release records from, but this EHI export form omits it — the numbering was not adjusted, creating a gap.

**Language quality**: The Spanish translation reads fluently. Medical and legal terminology is appropriately translated. The form includes a clear warning at the top: "Los archivos de este formato no están diseñados para ser leídos por humanos" ("The files in this format are not designed to be read by humans") — an honest and useful disclaimer about computer-readable exports.

**Length**: Two pages is appropriate for an authorization form of this type. Page 1 is the form itself; page 2 is instructions and supplementary information.

**Readability**: The text appears to be in a reasonable font size based on the character density. The numbered structure aids navigation. However, section 5 (sensitive information initials) and section 7 (rights) contain dense legal text that may challenge readers.

---

## 5. PATIENT-CENTEREDNESS

**Specialized and forward-looking, but with limitations.**

**Strengths:**
- This form is explicitly for **patient self-request** — section 3 is pre-checked "☒ Solicitud del paciente - Electrónico" (Patient Request - Electronic), eliminating ambiguity about whether this is for patient access or third-party release.
- It addresses **EHI export specifically**, which is rare among healthcare organizations. This demonstrates awareness of the Cures Act and patients' rights to their electronic health information in machine-readable format.
- **Delivery options** include SHS MyChart account or CD (with sub-options for pickup, mail, or release to a designated person).
- The form references that the authorization can be **canceled/revoked at any time** and explains the process clearly.
- The rights section (section 7 and page 2) explains refusal-to-sign rights and fee policies.

**Limitations:**
- **No email delivery option.** Unlike the standard ROI form (form-4), which offers MyChart, Email, Paper, CD, and Fax, this EHI export form only offers MyChart or CD. For a form specifically about *electronic* health information, the absence of email or direct download is a notable gap.
- **Date range limitation**: "El intervalo de fechas no puede ser anterior a 01/01/2013" ("Date range cannot be prior to 01/01/2013") — this is an explicit restriction that limits patients to records from their current EHR system era. While this may reflect a legitimate technical limitation (EHR go-live date), it is not explained as such.
- **No scope/record type selection.** Unlike form-4 which lets patients choose specific record types (discharge summaries, lab reports, imaging, etc.), this EHI export form appears to be all-or-nothing within the specified date range, aside from the sensitive information categories requiring initials.
- **MyChart dependency**: To use the MyChart delivery option, patients must have an active SHS MyChart account. Page 2 notes records are "disponibles allí durante 90 días" (available for 90 days), creating a time-limited access window.

---

## 6. COMPLIANCE

**Generally compliant with some notes:**

- **Fees**: Page 2 states "Se aplican tarifas razonables basadas en costos de acuerdo con HIPAA y la ley de Oregon" ("Reasonable cost-based fees apply in accordance with HIPAA and Oregon law") for initial patient requests. This is appropriately vague about the amount but references the correct legal standard. Notably, the standard ROI form (form-4) states "No Charge" for initial patient requests, while this EHI export form does not make the same "No Charge" commitment — it only says reasonable cost-based fees apply.
- **Expiration**: "Esta autorización vence a los 12 meses de la fecha en que firmé este formulario" ("This authorization expires 12 months from the date I signed this form") with an option to specify a different date. Twelve months is a standard and reasonable expiration period.
- **Processing time**: "Espere hasta 30 días para procesar las solicitudes" ("Allow up to 30 days to process requests"). HIPAA allows up to 30 days with a possible 30-day extension, so this is within compliance bounds, though the form does not mention the extension option.
- **Revocation**: Clearly explained — send a written, signed statement to cancel. Standard process.
- **42 CFR Part 2**: Section 5 and the page 2 instructions correctly reference federal regulations for alcohol/drug treatment records, requiring specific patient initials for disclosure.
- **No notarization** required. No in-person-only submission requirement — the form lists mailing address, fax, and email (SHSHIMROI@samhealth.org) as submission options.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee ambiguity for patient requests**: The standard ROI form (form-4) explicitly states "No Charge" for initial patient requests, but this EHI export form only states "Se aplican tarifas razonables basadas en costos" (reasonable cost-based fees apply) without the "No Charge" guarantee. This inconsistency may deter patients from requesting their EHI in computer-readable format, or it may simply be an oversight in the Spanish translation of the EHI-specific form. Under HIPAA § 164.524, patients have a right to access their records at a reasonable cost-based fee, but charging for an EHI export when the standard records request is free creates a concerning disparity.

### ⚠️ AMBIGUITIES

- **Missing section 2**: The form numbers jump from section 1 to section 3, which could confuse patients who wonder if they missed something or received an incomplete form.
- **Date range restriction to post-2013**: The statement "El intervalo de fechas no puede ser anterior a 01/01/2013" is presented as a hard rule with no explanation. Patients with records predating 2013 may not understand why or what alternatives exist.
- **"Computer readable" framing**: The form warns that "Los archivos de este formato no están diseñados para ser leídos por humanos" — while technically accurate for structured EHI exports, this language may discourage patients from using this form if they don't understand what computer-readable data is or why they might want it.

### ❌ ERRORS

- **Section numbering gap**: Section 2 is absent. The English version (form-1) has the same gap, so this is a design issue in the source form, not a translation error.
- **Minor inconsistency in contact info on page 2**: The email is listed as "SHSHIMROI@samhealth.org" on page 2, while page 1 header shows "SHSHIMROI@samhealth.org" — these match, but the page 2 instructions reference "Envíe el formulario de Solicitud de registros médicos del paciente completo a:" (Send the completed Patient Request for Medical Records form to:), using "medical records" language rather than "EHI export" language. This suggests the instructions page was copied from the standard ROI form without full adaptation.

### ✨ BRIGHT SPOTS

- **Dedicated EHI export form**: Having a specific form for computer-readable EHI export is **exceptionally rare** among healthcare organizations. Most providers offer only a general ROI form with no path to structured electronic data. This demonstrates genuine compliance with the Cures Act's information blocking provisions.
- **Spanish-language availability**: Providing the EHI export form in Spanish is above and beyond what most organizations do. Many organizations don't even offer their standard ROI form in Spanish, let alone a specialized EHI-specific form.
- **Pre-checked purpose field**: Section 3 comes pre-marked as "☒ Solicitud del paciente - Electrónico" (Patient Request - Electronic), reducing friction and making it unambiguous that this form is for patient self-access.
- **Multiple HIM locations listed**: Page 2 lists five physical HIM customer service locations with addresses and hours, including one in Lebanon, making in-person assistance accessible.
- **Clear revocation process**: The rights section explains how to cancel the authorization in straightforward language.
