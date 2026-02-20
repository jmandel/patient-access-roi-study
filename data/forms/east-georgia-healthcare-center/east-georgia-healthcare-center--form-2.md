# Evaluation: East Georgia Healthcare Center — form-2.pdf

**Organization:** East Georgia Healthcare Center (EGHC), Swainsboro, GA
**Document:** form-2.pdf — Spanish-language Medical Records Release / Authorization
**Source:** RightSignature e-signature platform (captured as PNG→PDF)

---

## 1. DOCUMENT IDENTIFICATION

This is the **Spanish-language version** of EGHC's Medical Records Release form, titled "AUTORIZACIÓN PARA EL USO Y DIVULGACIÓN DE SU INFORMACIÓN DE SALUD PROTEGIDA." It is a single-page document and is the direct Spanish translation of form-1.pdf (the English-language Medical Records Release). Form-3.pdf in this set is EGHC's Notice of Privacy Practices (English only, not an ROI form).

Critically, like its English counterpart, this form is oriented toward **incoming records** — it authorizes release of records FROM other providers TO EGHC. The OCR text confirms: "Por la presente solicito copias de todos los registros relacionados con mi historial de salud y atención médica que sean enviados a: 215 NORTH COLEMAN STREET, SWAINSBORO, GA 30401." The destination is pre-printed as EGHC's own address. No separate form for patients requesting their own records from EGHC was found on the website.

## 2. FINDABILITY

The form is linked from EGHC's forms page (https://eghc.org/forms/) under "Medical Records Release" with a Spanish designation. However, the link does not lead to a downloadable PDF — it redirects to a **RightSignature e-signature page** (secure.rightsignature.com) that requires entering a name and email before viewing the form content. The underlying document is rendered as a PNG image, not offered as a standard PDF download.

Old direct PDF links (e.g., `/wp-content/uploads/2019/02/Medical-Records-Release.pdf`) now return 404 errors, meaning cached search engine results lead to dead links. A patient searching in Spanish (e.g., "East Georgia Healthcare Center autorización registros médicos") would likely not find this form directly via web search; they would need to navigate the EGHC website, where the forms page itself is in English.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** None. The PDF is an image-only document (converted from a PNG screenshot of the RightSignature platform). The metadata confirms `has_text_layer: false`, `full_text_chars: 1`, and `is_image_only_scan: true`.
- **Fillable fields:** Zero in the captured PDF (`fillable_field_count: 0`). The original RightSignature version does have interactive fields, but these are platform-specific and not embedded in any downloadable artifact.
- **File size:** 285,556 bytes for a single page — large relative to content because it's a raster image, not vector text.
- **Font count:** 0 (no embedded fonts, consistent with image-only).
- **Digital-first design:** The form was originally designed for paper (based on its layout with lines for handwriting), then digitized as an image hosted on an e-signature platform. It is not a born-digital, accessible document. Screen readers cannot parse it, text cannot be searched or copied, and the document cannot be reflowed for different screen sizes.

The RightSignature platform adds a layer of interactivity, but this is locked behind a proprietary portal requiring identification (name/email) before even viewing the form — a significant barrier for patients who simply want to review what information is required.

## 4. CONTENT DESIGN

**Length:** Single page, which is appropriate for a records release authorization.

**Layout:** The form is densely packed. It includes EGHC's letterhead with the tagline "MEDICINA FAMILIAR, PEDIATRIA, SALUD MENTAL, QUIROPRACTICA & SERVICIOS DENTALES," followed by the authorization title, patient identification fields, authorization text, a pre-printed list of all 13 EGHC clinic locations with addresses/phone/fax numbers, checkboxes for record types, fields for releasing/receiving parties, and signature lines — all on a single page.

**Record type checkboxes:** The form offers 15 categories including: Todo historial medico (incluido/excluido Psiquiátrico), Resultados de Colonoscopias, Medicinas Actuales, Prueba de Drogas y Alcohol, Resultados de Electrogramas EKG, Registros de VIH, Registros de Hospital, Inmunizaciones, Prueba de Laboratorio, Lista de Alergias, Papanicolaou, Reporte de Visitas, Reporte Psiquiátrico, Rayos X, Resultado de Mamograma, and Otros.

**Language quality:** The form is written entirely in Spanish, which is a positive step for serving Spanish-speaking patients. However, there are some oddities: the section header "PLEASE INCLUDE ALL INFORMATION CHECKED" appears in **English** mid-form, breaking the Spanish-language consistency. Some OCR artifacts suggest possible diacritical/accent issues in the original, though this may be OCR noise.

**Clarity:** The authorization language is relatively clear for a legal form, explaining the patient's right to refuse and to revoke authorization in writing. The statement "No vamos a condicionar el tratamiento médico basado en su autorización. Usted puede negarse a firmar dicha autorización" clearly communicates that treatment will not be conditioned on signing.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form does NOT serve patients requesting their own records from EGHC. It is designed for **incoming records** — authorizing external providers to send records to EGHC. The pre-printed destination address is EGHC's own address at 215 North Coleman Street. A Spanish-speaking patient seeking to obtain their own records from EGHC would find no applicable form on the website.

**Scope options:** The checklist of record types is reasonably granular (15 categories), allowing patients to specify what records should be transferred. A date range or expiration field is present ("Fecha de vencimiento o vencimiento de un evento").

**Format/delivery options:** No electronic delivery options are mentioned. No mention of receiving records by email, patient portal, or any digital format.

**Right of Access language:** The form includes brief HIPAA-related language: "Sujeto a ciertas excepciones, usted tiene el derecho de inspeccionar y copiar la información de salud protegida." However, this is generic and does not reference specific HIPAA sections (e.g., 45 CFR § 164.524). There is no discussion of patient rights under the HIPAA Right of Access rule.

**EHI Export / bulk data:** No mention whatsoever.

**Language accessibility:** The existence of a Spanish-language form is a positive. However, the forms page at eghc.org/forms/ is entirely in English with no Spanish navigation or instructions, so a Spanish-only speaker would have difficulty finding this form without assistance.

## 6. COMPLIANCE

**Revocation rights:** The form includes clear language about the right to revoke: "usted tiene el derecho de revocar esta autorización por escrito."

**Re-disclosure warning:** Includes standard language that disclosed information "puede estar sujeta a una nueva divulgación por el destinatario."

**Treatment conditioning:** Explicitly states treatment will not be conditioned on authorization — "No vamos a condicionar el tratamiento médico basado en su autorización."

**No notarization or in-person requirements** are stated on the form itself, though the RightSignature submission pathway implies electronic submission is the intended method.

**Missing outgoing records form:** The most significant compliance concern is not what this form contains but what's missing from EGHC's online presence — there is no form for patients to request their own records. HIPAA requires covered entities to provide access to PHI upon request (45 CFR § 164.524), and the absence of a patient-access form creates a practical barrier, even if not technically a violation of this specific document.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No patient-access form exists online.** This form and its English counterpart (form-1) are both for incoming records to EGHC — not for patients requesting their own records from EGHC. A patient trying to exercise their HIPAA Right of Access has no applicable form available on the website.
- **Form viewing requires identification.** The RightSignature platform requires entering a name and email address before a patient can even view the form content, creating a surveillance-like barrier to simply reviewing what's being asked of them.

### ⚠️ AMBIGUITIES

- **English instruction mid-Spanish form.** The heading "PLEASE INCLUDE ALL INFORMATION CHECKED" appears in English within an otherwise all-Spanish document, creating confusion about the form's intended audience and suggesting incomplete translation.
- **Releasing vs. receiving party fields are confusing.** The form asks for "Nombre o identificación específica de la persona(s)... autorizada a solicitar el uso o la divulgación" (who is releasing) and separately who EGHC can request information from (who is receiving), but since the form is for incoming records to EGHC, the direction of these fields may confuse patients.

### ❌ ERRORS

- **Dead legacy URLs.** Prior PDF links (e.g., `/wp-content/uploads/2019/02/Medical-Records-Release.pdf`) return 404 errors but still appear in search engine results, sending patients to broken pages.
- **Image-only PDF with no text layer.** The captured form has zero extractable text, zero fonts, and is entirely a raster image — making it completely inaccessible to screen readers and assistive technology.

### ✨ BRIGHT SPOTS

- **Spanish-language availability.** Offering the form in Spanish reflects awareness of EGHC's patient population in south-central Georgia and is an important equity measure, especially for an FQHC serving a diverse community.
- **Clear non-conditioning statement.** The explicit statement that treatment will not be conditioned on signing the authorization ("No vamos a condicionar el tratamiento médico basado en su autorización") is patient-friendly and compliant with HIPAA requirements.
- **Granular record type selection.** The 15-category checklist allows patients to specify exactly which types of records should be transferred, rather than forcing an all-or-nothing release.
