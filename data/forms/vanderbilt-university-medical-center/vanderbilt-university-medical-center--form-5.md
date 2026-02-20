# Evaluation: Vanderbilt University Medical Center — form-5.pdf

## 1. DOCUMENT IDENTIFICATION

**Document title**: "Autorización para el uso o la revelación de información médica protegida" / "Authorization (P) – Release of Medical Information" (VMR 3675, dated 10/2023)
**Pages**: 2
**Source URL**: `https://files.vanderbilthealth.com/sites/default/files/2024-03/authorization-for-release-of-medical-information-spa.pdf`
**Hosted on**: Official Vanderbilt Health website (`files.vanderbilthealth.com`)

This is the **Spanish-language translation** of form-4.pdf, which is the current official English authorization form. Both are linked from the vanderbilthealth.com medical records page. The form uses the current "Vanderbilt Health" branding and has a different form number (VMR 3675) from the English version (VMR 3017), indicating it is tracked as a separate document in Vanderbilt's forms management system.

In context of all five forms found for this organization:

- **form-1.pdf**: VMR 3017, 02/2022 — older English version (4 pages), hosted on student health subdomain
- **form-2.pdf**: VMR-P 3017, 08/2017 — even older English version (4 pages)
- **form-3.pdf**: VMR 3022, 02/2022 — incoming records form (release TO VUMC)
- **form-4.pdf** ⭐: VMR 3017, 10/2023 — current official English form (2 pages)
- **form-5.pdf** (this document): VMR 3675, 10/2023 — current official Spanish translation (2 pages)

The form mirrors form-4's structure and layout closely but is rendered entirely in Spanish, with only the subtitle "Authorization (P) – Release of Medical Information" and the "Patient Label or Patient Identifiers" / "Patient Identifiers" placeholder text appearing in English. It is a general-purpose authorization form — not specific to patient access — with Section 8 asking "Si no es para su uso personal, díganos el motivo de la solicitud" (If not for personal use, tell us the reason for the request), implying personal use is one contemplated purpose.

## 2. FINDABILITY

**How this form was found**: Linked directly from the official Vanderbilt Health medical records page at `vanderbilthealth.com/information/medical-record-information`, alongside the English form-4. The notes indicate the page offers forms in both English and Spanish under a "Request Records by Authorization Form" section.

**Findability assessment**: For a Spanish-speaking patient who navigates to the official medical records page, the form is reasonably accessible — it is presented as a clear alternative to the English version. However, a patient searching the web in Spanish (e.g., "Vanderbilt formulario autorización expedientes médicos") may not discover it as readily, since the PDF filename (`authorization-for-release-of-medical-information-spa.pdf`) is in English and the page content linking to it may be primarily English. The form itself has essentially no searchable text layer, further reducing discoverability through search engines.

Vanderbilt also offers online portals (Swellbox, ChartSwap) as alternatives to the PDF form, but the notes do not indicate whether those portals offer a Spanish-language interface.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Effectively absent. The metadata reports `has_text_layer: true` but only 61 characters are extractable across both pages: `"Patient Label or Patient Identifiers"` and `"Patient Identifiers"` — both in English. Zero Spanish text is machine-readable. The entire form content is embedded as scanned images.

**Fillable fields**: Zero (`fillable_field_count: 0`). The form cannot be completed electronically — patients must print, handwrite entries, and submit by mail or fax.

**Images**: 3 embedded images across 2 pages — each page is essentially a full-page scan, plus a QR code in the header. The resolution appears to be 96 DPI based on PDF metadata (created by "Transform Foundation Server," produced by macOS Quartz PDFContext).

**File size**: 167,058 bytes (~163 KB) for a 2-page image-only document. Modest for image content, but grossly oversized relative to what a text-based PDF would require.

**Screen reader accessibility**: Completely inaccessible. A screen reader user would encounter two essentially blank pages. The PDF is not tagged for accessibility (`Tagged: no`). This fails WCAG 2.x and Section 508 requirements. For a Spanish-speaking patient who relies on assistive technology, this form is unusable.

**Digital-first design**: This is a scan of a paper form. It was created on March 4, 2024 (per PDF metadata), suggesting a physical form dated 10/2023 was scanned and uploaded. The form cannot be filled digitally in any way.

## 4. CONTENT DESIGN

The form is organized into 10 numbered sections across 2 pages, mirroring the English form-4:

**Page 1:**

1. **Nombre del paciente** (Patient Name): Fields for Apellido (last name), Primer nombre (first name), Iniciales, Apellido de soltera u otro nombre (maiden/other name), Fecha de nacimiento (DOB), Nombre anterior (previous name), N.° de expediente médico (medical record number), Últimos 4 dígitos del número de seguro social (last 4 SSN), Dirección, Ciudad, Estado, Código postal, Número de teléfono, Dirección de correo electrónico.

2. **Autorizo a la siguiente entidad médica de Vanderbilt a revelar información**: 8 facility checkboxes (Vanderbilt University Hospital, Vanderbilt Psychiatric Hospital, Vanderbilt Bedford Hospital, Vanderbilt Behavioral Health Clinics, Vanderbilt Wilson County Hospital, Vanderbilt Tullahoma-Harton Hospital, Monroe Carell Jr. Children's Hospital en Vanderbilt, Vanderbilt Home Care Services). Plus fields for specific clinic/doctor name, phone, address.

3. **Enviar mi información médica protegida a** (Send my PHI to): Recipient name, relationship, address, phone, fax.

4. **Cómo quiero que se envíe mi información médica protegida** (Delivery method): Three options — Correo (mail), Formato electrónico (electronic — "ver, imprimir o descargar como PDF a través del portal de solicitudes"), Otra opción (other).

5. **Tarifas razonables** (Reasonable fees): A 6-row fee schedule table with columns for Tipo de solicitud, Cómo se almacena el expediente, Cómo se envía el expediente, Tarifas de producción, Tarifa de papel, and Tarifas máximas. Fees range from a flat $6.50 for all-electronic to $0.70/page production + $0.50–$0.70/page paper + $50 maximum caps.

6. **Fechas e información que se revelará** (Dates and information to be disclosed): Sensitive information notice covering psychiatric/psychological conditions, substance use disorders, and HIV/AIDS. Includes an opt-out checkbox: "No autorizo a que se revele esta información."

**Page 2:**

7. **Fechas e información que se revelará** (continued): Date range fields (DEL ___ AL ___) and ~18 record type checkboxes: Resumen, Informes de laboratorio, Notas del consultorio, Obstetricia (parto/nacimiento), Resumen del alta, Registros de emergencia, Informes de radiología, Registros de medicamentos, Informes de operaciones, Registros de facturación, Registro de vacunas, Informes de patología, Visita de paciente ingresado, Historia y examen físico, Notas de progreso, Informes cardíacos, Expedientes de atención de salud a domicilio, Imágenes (especificar), Otro (especificar).

8. **Si no es para su uso personal, díganos el motivo de la solicitud**: Checkboxes for Atención médica/tratamiento, Legal (especifique), Otro (especifique).

9. **Reconocimiento de entendimiento** (Acknowledgment of understanding): 12 bullet points covering voluntary authorization, HIPAA patient access rights, fees, expiration upon fulfillment, right to revoke in writing, re-disclosure warning, no treatment conditioning, right to a copy, 30-day processing commitment, mail security disclaimer, CD/DVD password protection, and a final bolded underlined acknowledgment statement.

10. **Representative signature section**: For non-patient signers, with relationship checkboxes and proof-of-authority requirement.

**Layout quality**: The form is well-organized with clear numbered sections and consistent formatting. The 2-page design is compact. The fee table on page 1 is complex (6 rows × 6 columns) but logically structured. The scan quality is adequate — text is legible, though some smaller print in Section 9's bullet points is dense.

**Language quality**: The Spanish translation reads naturally and avoids overly literal phrasing. Medical and legal terminology is appropriately rendered (e.g., "información médica protegida" for PHI, "expediente médico" for medical record). However, the form does not include a note about the availability of the English version, nor does it offer a glossary for specialized terms.

## 5. PATIENT-CENTEREDNESS

**Target audience**: Spanish-speaking patients of Vanderbilt Health facilities. Providing a Spanish translation is a meaningful accessibility step, particularly for a Nashville-area health system where the Hispanic/Latino population has grown significantly.

**Patient access vs. third-party release**: Like the English form-4, this is a general-purpose authorization form. Section 3 asks the patient to specify a recipient ("Enviar mi información médica protegida a"), which is a third-party release model. Section 8 asks the purpose only "Si no es para su uso personal" — implying personal use is the default, but the form design still routes patients through a recipient-specification workflow. A patient requesting records for themselves must fill in their own name and address as the recipient, which is unintuitive.

**Electronic delivery option**: Available. Section 4 offers "Formato electrónico" described as "ver, imprimir o descargar como PDF a través del portal de solicitudes. Las indicaciones se envían a la dirección de correo electrónico de arriba." This is a significant improvement over the older form-1, which restricted electronic delivery to providers only. Notifications are sent via email, and records are accessed through a portal — a reasonable approach.

**Fee transparency**: The fee table in Section 5 is detailed but complex. It shows different pricing depending on whether records are stored electronically or on paper, and whether delivery is electronic or paper. Key fees:
- All-electronic (stored electronic, delivered electronic): $6.50 flat, no paper fee, no maximum listed
- Paper-stored, electronic delivery: $0.70/page production, no paper fee, $50 max
- Paper-stored, paper delivery: $0.70/page production + $0.50/page paper, $50 max
- The table header notes postage will be added for mailed records.

There is no mention of HIPAA's reasonable cost-based fee limitation for patient access requests specifically, nor any distinction between patient access fees and third-party release fees.

**Sensitive information handling**: Section 6 provides a meaningful opt-out: "No autorizo a que se revele esta información" (I do not authorize this information to be released). This is an improvement over the older form-1's blanket consent — patients can affirmatively exclude psychiatric, substance abuse, and HIV information.

**Processing time commitment**: Section 9 includes a notable bullet: "Entiendo que se atenderá mi solicitud en un plazo de 30 días" (I understand my request will be processed within 30 days). It further states that if access is denied, the patient has the right to request a review of any access denial. This aligns with HIPAA's 30-day response requirement.

**Rights language**: Section 9 explicitly states "Vanderbilt Health reconoce el derecho de un paciente según la ley HIPAA a acceder a copias de su información médica protegida" (Vanderbilt Health recognizes the right of a patient under HIPAA to access copies of their PHI). This is a positive acknowledgment. Additional bullet points cover voluntary nature, no treatment conditioning, right to revoke, expiration, re-disclosure risk, and right to receive a copy of the signed form.

## 6. COMPLIANCE

**Submission methods**: The form does not explicitly state how to submit, but the notes indicate the medical records page provides mailing address and fax options. The form's fax field in Section 3 ("Opción de fax solo para el médico/tratamiento") restricts faxing to medical/treatment purposes, meaning patients requesting records for personal use may not be able to fax the form — potentially limiting submission to mail or in-person delivery.

**Fee structure**: The fee schedule does not cite a specific state statute (unlike the older form-1, which cited Tennessee Code Annotated 68-11-304). The fees include a $50 maximum cap for most scenarios, which is a patient-friendly ceiling. However, the $6.50 flat fee for all-electronic delivery plus the $0.70/page for paper-to-electronic conversion could be scrutinized under HIPAA's reasonable cost-based fee standard for patient access.

**Authorization expiration**: Section 9 states the authorization expires when records are released for the requested dates, and future requests require a new authorization. This is a reasonable, request-specific expiration.

**Representative authorization**: Section 10 requires proof of authority ("prueba de autoridad") for non-patient signers, with specific relationship categories. It notes parents with parental rights may not need proof but Vanderbilt "puede requerir prueba de derechos parentales en algunas situaciones de custodia." A footnote warns that access to behavioral health and substance abuse records may require additional authorization under state and federal law.

**Bilingual inconsistency**: The form number (VMR 3675) differs from the English version (VMR 3017), and certain elements remain in English: the subtitle "Authorization (P) – Release of Medical Information," "Patient Label or Patient Identifiers," and "Patient Identifiers." The QR code in the header presumably links to the English page or a general intake system.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fax restricted to medical/treatment purposes**: Section 3 states "Opción de fax solo para el médico/tratamiento" (fax option only for doctor/treatment), which could prevent patients requesting records for personal use from submitting the form by fax — limiting them to mail or in-person delivery. Combined with the image-only scan format (no electronic filling), this creates a significant submission barrier.

### ⚠️ AMBIGUITIES

- **Fee table complexity without patient-access distinction**: The 6-row fee table covers many storage/delivery combinations but never distinguishes between patient access requests (subject to HIPAA's reasonable cost-based fee) and third-party releases (subject to state fee schedules). A Spanish-speaking patient confronting this table may not understand which row applies to their situation or that HIPAA may entitle them to lower fees.
- **No clear submission instructions on the form itself**: Unlike the older form-1 which specified "hand-deliver, mail, or fax," this form does not include a mailing address, fax number, or submission instructions. A patient who prints the form from the website must navigate back to the medical records page to find where to send it.
- **"Resumen de mi expediente médico legal"**: Section 7's note states that if patients don't specify records, Vanderbilt will send a "Resumen" (summary) of the legal medical record. This abstract/summary concept is not clearly defined — a patient may not understand they would receive an incomplete record subset.

### ❌ ERRORS

- **Zero machine-readable Spanish text**: Despite being a Spanish-language form, not a single Spanish character is extractable from the PDF. The only text layer content is English placeholder text ("Patient Label or Patient Identifiers"). This means the document is invisible to Spanish-language search queries, cannot be indexed by search engines as Spanish content, and is completely inaccessible to Spanish-speaking screen reader users. For a form whose entire purpose is to serve Spanish-speaking patients, this is a critical accessibility failure.
- **English remnants in a Spanish form**: The subtitle "Authorization (P) – Release of Medical Information" appears in English alongside the Spanish title. The patient label placeholders ("Patient Label or Patient Identifiers," "Patient Identifiers") are also in English. While minor, these inconsistencies undermine the form's purpose of providing a fully Spanish-language experience.

### ✨ BRIGHT SPOTS

- **Explicit HIPAA right-of-access acknowledgment in Spanish**: Section 9 includes "Vanderbilt Health reconoce el derecho de un paciente según la ley HIPAA a acceder a copias de su información médica protegida" — an unusually clear and affirmative statement of patient rights, rendered in the patient's language.
- **30-day processing commitment with denial review rights**: The form commits to a 30-day timeline and explicitly informs patients of their right to request review of any access denial — aligning with HIPAA requirements and providing actionable recourse language.
- **Sensitive information opt-out**: Unlike the older form-1's blanket consent, this form provides a clear checkbox to exclude psychiatric, substance abuse, and HIV/AIDS information, giving patients meaningful control over sensitive disclosures.
- **Granular record type selection**: The ~18 record type checkboxes give patients specific control over what is released, with categories covering lab, radiology, pathology, surgery, medications, billing, and more.
- **Existence of the Spanish form itself**: Offering a full Spanish translation of the current authorization form — linked prominently from the official medical records page — is a meaningful equity measure that many healthcare organizations do not provide.
