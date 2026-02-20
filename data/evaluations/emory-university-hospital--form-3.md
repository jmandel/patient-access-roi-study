# Evaluation: Emory University Hospital — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

Form-3.pdf is the **Spanish-language version** of Emory Healthcare's "Authorization for the Release of Protected Health Information," titled "AUTORIZACIÓN PARA DAR A CONOCER INFORMACIÓN MÉDICA PROTEGIDA." It is a 2-page PDF (640,846 bytes) with the URL path containing `spanish-authorization-form-fillable---revised-11-2025.pdf`. It is the direct Spanish counterpart to form-1.pdf (the English authorization form, same revision date). The form covers all Emory Healthcare facilities system-wide — listing 19+ locations including recently acquired facilities like "Emory Hospital Warner Robins – Clinic" and "Emory Hospital Perry – Clinic."

In context, this organization provides four documents on its medical records page: the primary English ROI form (form-1), a legacy/older ROI package (form-2, 4 pages), this Spanish translation (form-3), and a Request for Amendment form (form-4). Form-3 serves Spanish-speaking patients needing to authorize release of their records.

## 2. FINDABILITY

Per the retrieval notes, the Spanish authorization form is linked directly from Emory Healthcare's medical records page at `emoryhealthcare.org/patients-visitors/medical-records`. The notes describe this page as "well-organized and clearly labeled," with links to both English and Spanish authorization forms. The URL itself is descriptive (`spanish-authorization-form-fillable---revised-11-2025.pdf`), making the language and purpose clear before downloading. Offering a prominently linked Spanish-language form alongside the English version is a meaningful accessibility step — many health systems do not provide translated ROI forms at all. The form was discoverable through both web search and direct navigation to the medical records page.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present (`has_text_layer: true`, not an image-only scan). The extracted text is 7,673 characters covering both pages.
- **Fillable fields**: The metadata reports `fillable_field_count: 0`, despite the filename containing "fillable" and the notes describing it as a "fillable PDF." The English counterpart (form-1.pdf) also shows 0 fillable fields in metadata. This discrepancy suggests the form may use XFA-based form fields or another technology that the metadata extraction tool does not detect, or the fields may have been lost/broken. This is a significant concern: if the form truly isn't fillable, Spanish-speaking patients must print and handwrite, creating a barrier.
- **Font count**: 25 fonts — considerably higher than the English form-1's 7 fonts and form-2's 12 fonts. This high font count may reflect font substitution issues or embedding of both Spanish-accented character sets and English fonts.
- **Embedded images**: 1 (likely a logo or header graphic).
- **File size**: 640 KB for 2 pages — reasonable.
- **Character encoding issues**: The extracted text shows corruption of accented characters in at least one place: "Se exportara la informaci**6**n por EHI (formato electr**6**nico)" — where "ó" has been rendered as "6." This indicates a text encoding or font mapping problem in the PDF that could affect both screen readers and copy-paste functionality.

## 4. CONTENT DESIGN

The form is organized into 11 numbered sections across 2 pages:

1. Facility selection (checkboxes for 19+ Emory Healthcare facilities plus "Otro centro médico")
2. Recipient, format, and delivery method
3. Description of medical information to disclose (with checkbox grid for specific record types and date ranges)
4. Reason for disclosure
5. Important notice about email/electronic delivery security
6. Authorization expiration
7. Right to revoke
8. Re-disclosure warning
9. Fees
10. Refusal to authorize
11. Waiver for sensitive information (HIV/AIDS, substance abuse, mental health)

**Strengths**: The structure mirrors the English form, providing logical flow from patient identification through facility selection, information specification, delivery method, and legal provisions. The record type checklist is granular (history/physical, consultations, discharge reports, lab results, X-rays, pathology, ECG, ER reports, etc.), allowing specific requests.

**Weaknesses**: The form is a **bilingual hybrid** rather than a pure Spanish translation. Key terms and labels remain in English throughout:
- "HEALTH INFORMATION MANAGEMENT DEPARTMENT" (section header, untranslated)
- "Medical Records Department/s" (section 7)
- "Signature of patient (or Patient's Representative)" alongside the Spanish
- "Date / Fecha" and "Time / Hora" — mixed format labels
- "Printed name" alongside "Nombre y apellido en letra de imprenta"

This creates a reading experience that constantly switches languages, which may confuse patients with limited English proficiency — the exact audience this form is meant to serve. A fully Spanish-speaking patient would encounter untranslated institutional terms without explanation.

The form also contains a footer "NONCH35557 9/22" on page 1, suggesting an original form number from September 2022, despite the filename indicating a November 2025 revision. The "Frente" and "Reverso" labels (Front/Back) suggest this was originally designed as a two-sided paper print.

## 5. PATIENT-CENTEREDNESS

**Format and delivery options** are notably strong. The form offers:
- **Formats**: Paper ("En papel"), CD ("En CD"), USB drive ("Unidad de memoria USB")
- **Delivery methods**: MyChart, mail, pickup, e-delivery website ("Sitio web de EHC para solicitud de divulgación electrónica"), email, and **EHI Export** ("Se exportara la informaci6n por EHI (formato electr6nico)")

The inclusion of EHI Export as a delivery option is forward-looking and unusual among ROI forms. However, this option label suffers from the character encoding corruption noted above, rendering it as garbled text.

**Scope options** are comprehensive: patients can choose between complete records, partial records, or a continuity of care extract, each with date ranges. A billing records checkbox is also available.

**Authorization expiration** defaults to 90 days: "Si no especifica un evento o fecha de caducidad, esta autorización caducará a los noventa (90) días posteriores a la firma de esta autorización." This is a standard timeframe.

**Missing**: The form does not explicitly reference HIPAA § 164.524 or the patient's Right of Access. It is framed as a general authorization to release information rather than specifically as a patient access request. The form authorizes "representantes autorizados del/los centro/s médico/s siguientes den a conocer la información médica" — release from Emory to a designated recipient — rather than framing it as the patient obtaining their own records.

**Section 9 (Fees)**: States "las leyes federales y estatales permiten el cobro de honorarios por concepto de copias de historias clínicas y que es mi responsabilidad pagar estos honorarios" (federal and state laws permit charging fees for copies of medical records and it is my responsibility to pay these fees). No specific fee amounts are disclosed on this form; the fee schedule is available separately (form-2 includes it, and a standalone Patient Fee Sheet exists on the website). This vague language about fees without amounts may create uncertainty for patients.

## 6. COMPLIANCE

**Section 11 (Waiver/"Exención")** requires patients to affirmatively waive confidentiality protections for sensitive information: "doy mi consentimiento para que Emory Healthcare dé a conocer esa información y renuncio a todo privilegio de confidencialidad con respecto a dichas divulgaciones." This is a blanket waiver bundled into the main authorization form covering HIV/AIDS, substance abuse, and mental health records. Rather than offering separate opt-in consent for each sensitive category (as some state laws contemplate), this form bundles it into a single signature covering the entire authorization.

**Section 10 (Refusal)** contains language about research: "Emory Healthcare podrá denegar mi tratamiento si rehúso firmar esta autorización solo si: (1) el tratamiento se relacionara con nuestro proyecto de investigación..." This research-related conditioning of treatment language is appropriate for a teaching hospital but may confuse patients who are simply requesting their own records.

**No notarization** or in-person-only submission requirements are imposed — the form does not restrict how it can be submitted.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket waiver for sensitive information** (Section 11): The form requires patients to "renuncio a todo privilegio de confidencialidad" (waive all privileges of confidentiality) for HIV/AIDS, substance abuse, and mental health records in a single bundled statement, rather than providing granular consent options for each sensitive category. A patient who wants their general medical records but not their substance abuse records cannot easily use this form as designed.

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party release**: The form is structured as a general authorization to release information to a named recipient, not specifically as a patient Right of Access request. A patient requesting their own records must fill themselves in as both the authorizer and the recipient, which the form does not guide them through.
- **Fee language without amounts**: Section 9 tells patients they're responsible for fees but gives no indication of what those fees are. The fee schedule exists elsewhere (form-2, separate Patient Fee Sheet), but a Spanish-speaking patient using only form-3 would have no fee visibility.
- **Duplicate facility listing**: "Emory Saint Joseph's Hospital of Atlanta" appears **twice** in the facility checkbox list (once after "Emory Specialty Associates" and once after "Emory Hillandale Hospital"), which could confuse patients or cause processing errors.

### ❌ ERRORS

- **Character encoding corruption**: The EHI Export option renders as "Se exportara la informaci**6**n por EHI (formato electr**6**nico)" — accented "ó" characters are displayed as the digit "6." This is a PDF text layer defect that affects both readability and screen reader accessibility.
- **Incomplete translation**: Critical terms remain untranslated ("HEALTH INFORMATION MANAGEMENT DEPARTMENT," "Medical Records Department/s," "Signature of patient (or Patient's Representative)"), undermining the form's purpose of serving Spanish-speaking patients.
- **Fillable field discrepancy**: The filename includes "fillable" and the notes describe it as a fillable PDF, but metadata extraction detects 0 interactive form fields. If the fields are genuinely non-functional, the "fillable" designation is misleading.

### ✨ BRIGHT SPOTS

- **Spanish-language form exists at all**: Many U.S. health systems — including large academic medical centers — offer ROI forms only in English. Emory's provision of a parallel Spanish form, prominently linked on the medical records page, is a meaningful equity effort.
- **EHI Export as a delivery option**: Even though the label has encoding issues, including "EHI Export (formato electrónico)" as a checkbox delivery option demonstrates awareness of patients' rights to receive electronic health information in computable formats — a rare feature on ROI forms.
- **Granular record type selection**: The checkbox grid in Section 3 allows patients to specify exactly which record types they need (H&P, consultations, discharge reports, labs, X-rays, pathology, ECG, ER reports, photos/videos, operative reports, billing) with individual date fields — avoiding the all-or-nothing approach many forms take.
