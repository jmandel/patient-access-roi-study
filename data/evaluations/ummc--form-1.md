# Evaluation: UMMC — form-1.pdf (Spanish-Language ROI Form)

**Organization**: University of Mississippi Medical Center (UMMC), Jackson, MS
**Document**: "Autorización para la divulgación de información de salud" (Authorization for Release of Health Information)
**Form number**: Form #1862 Rev. 05/2025
**Source**: Wayback Machine archive (Feb 10, 2026) of `https://www.umc.edu/common/files/ummch/Health/Forms/release-of-medical-information-ES.pdf`

---

## 1. DOCUMENT IDENTIFICATION

This is a **Spanish-language** version of UMMC's general-purpose "Authorization for Release of Health Information" form. It is a single-page PDF (232,277 bytes, PDF version 1.7) containing a complete ROI authorization. The form title is rendered in Spanish: "Autorización para la divulgación de información de salud," though the institutional name "The University of Mississippi Medical Center (UMMC)" remains in English at the top.

A companion English-language version exists as form-2.pdf (Form #1862 Rev. 04/2018), which is an older revision obtained from a third-party cache (pdf4pro.com). The Spanish form is the more recent revision (05/2025 vs. 04/2018) and includes the Madison location (161 River Oaks Drive, Canton, MS 39046) that the older English version lacks. Both forms share identical structure — patient information, release-to fields, purpose checkboxes, PHI record type selection, sensitive information initials, patient rights, and signature lines.

This is a **general-purpose release form**, not a patient-access-specific form. The "Divulgar a" (Release to) field and purpose options like "Legal/Abogado," "Seguro," and "Indemnización laboral" indicate it is designed primarily for third-party disclosures, though "Personal" is listed as a purpose option.

---

## 2. FINDABILITY

Findability is **severely compromised**. According to the retrieval notes, the English PDF link on UMMC's website currently returns HTTP 404, while only the Spanish version remains live. The search process required five different strategies — direct web search, curl (failed due to DNS), Wayback Machine, browser navigation through Wayback, and finally a third-party cache — to obtain both versions.

The form is ostensibly accessible from two website paths: Compliance > HIPAA Forms, and Health Care > Patients and Visitors > Release Form. However, only the Spanish PDF was actually retrievable from its canonical URL. The English version's URL (`/common/files/ummch/Health/Forms/release-of-medical-information.pdf`) is broken.

For a **Spanish-speaking patient** specifically seeking this form, findability is problematic in a different way: the form URL contains the `-ES` suffix, suggesting it's a secondary variant rather than a prominently linked resource. The filename `release-of-medical-information-ES.pdf` uses English naming conventions, which a Spanish-speaking user searching the site in Spanish would be unlikely to discover independently.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The form has extractable text (4,346 characters), and is not an image-only scan. This enables assistive technology access and copy/paste functionality.

**Fillable fields**: The form reports **70 fillable fields**, which is a strong count for a single-page form. This indicates it was designed as an interactive, digitally-fillable PDF rather than a print-and-handwrite document. However, the `fillable_field_names` array is empty, meaning the fields lack descriptive names — a significant accessibility gap for screen readers and assistive technologies that rely on field labels.

**File format**: PDF 1.7 at 232 KB for a single page with no embedded images. The file size is reasonable. Six fonts are embedded.

**Digital-first design**: The presence of 70 fillable fields and native text strongly suggests this was designed digitally. It is not a scan. However, the empty field names indicate the form was not fully optimized for accessibility — fillable fields without names appear as unlabeled to assistive technology.

---

## 4. CONTENT DESIGN

**Length**: Single page. For the amount of information collected, this is appropriately concise, though the density may make it feel cramped.

**Clarity**: The form is written entirely in Spanish with generally clear language. Some sections use formal/legal phrasing, such as "la información que se utiliza o divulga en virtud de esta autorización puede quedar sujeta a una nueva divulgación por parte del destinatario." The Patient Rights section ("Derechos del paciente") is a dense single paragraph with no bullet points or visual breaks, making it difficult to parse.

**Organization**: The form follows a logical top-to-bottom flow: location selection → patient information → release-to information → purpose → PHI type selection → sensitive information → patient rights → signatures. This is a standard and sensible layout.

**Record type options**: The form offers 14 specific record categories (History & Physical, Radiology Reports, Occupational Therapy Notes, Operative Report, Radiology Images, Dental Records, Progress Notes, ER Report, Entire Medical Record, Discharge Summary, Immunization Record, Lab Reports, Physical Therapy Notes, and Other), plus an explicit note that "Registro médico completo (No incluye imágenes)" — complete medical record does not include images. This is a useful clarification.

**Format options**: Three delivery formats are offered: "Papel" (Paper), "Electrónico" (Electronic), and "Acceso de visualización según lo programado" (View Access as scheduled). The inclusion of electronic delivery is positive.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose release form**, not specifically designed for patient self-access under HIPAA's Right of Access (45 CFR § 164.524). The "Divulgar a" (Release to) field and third-party-oriented purpose options (Legal/Attorney, Insurance, Disability, Workers' Comp) make this primarily a third-party disclosure vehicle. A patient requesting their own records must use this same form, selecting "Personal" as the purpose and filling in their own name/address in the "Release to" field — a somewhat confusing workflow.

**Scope options**: Good granularity. Patients can specify date ranges ("Desde / Hasta"), select from 14 record types, and specify a deadline ("La información se necesita a más tardar el"). The "Other" field allows free-text specification of additional record types.

**Format options**: Three formats offered including electronic — a positive feature. "Acceso de visualización según lo programado" (View Access as scheduled) suggests an in-person viewing option, which is an unusual but legitimate accommodation.

**Right of Access language**: The form does **not** reference HIPAA § 164.524, the Right of Access rule, or patient-specific access rights. The Patient Rights section focuses on authorization revocation procedures and re-disclosure warnings but does not inform patients of their affirmative right to access their own records.

**Language accessibility**: Being available in Spanish is itself a patient-centered feature, especially for a Mississippi institution serving a growing Spanish-speaking population. However, the revocation mailing address instructions are given in English within the Spanish text: "UMMC, Attention: Office of Integrity & Compliance, 2500 North State Street, Jackson, MS 39216-4505" — mixing languages in a critical instruction.

---

## 6. COMPLIANCE

**Witness requirement**: The form requires a **witness signature** with date. While not prohibited by HIPAA, a mandatory witness requirement creates a practical barrier — patients filling out the form at home or digitally may not have a witness available, potentially delaying their request.

**Expiration**: "Esta autorización vencerá dentro de 6 meses a partir de la fecha de la firma." The authorization expires **6 months** from signature date. This is a reasonably common timeframe but may be short for ongoing care coordination.

**Sensitive information**: Substance abuse treatment, mental health, HIV/AIDS-related information, genetic testing, and "other abuse" information all require **separate initials**. This is consistent with federal requirements (42 CFR Part 2 for substance abuse) and state law requirements for sensitive categories, though the initials-based approach adds friction.

**SSN collection**: The form requests the patient's Social Security Number ("NSS" — Número de Seguro Social). While not illegal, collecting SSNs on authorization forms raises privacy concerns and is not required by HIPAA for patient identification.

**Revocation process**: Written revocation must be sent by mail to the Office of Integrity & Compliance with "información detallada, tal como se identifica en la solicitud de autorización original." This is a somewhat burdensome revocation process.

**Voluntariness**: The form includes appropriate language stating "UMMC no condicionará mi tratamiento al hecho de dar esta autorización" (UMMC will not condition treatment on giving authorization) and that the form is voluntary.

**Incomplete forms rejected**: The header states "El UMMC no aceptará formularios incompletos" — UMMC will not accept incomplete forms. This blanket rejection policy could create barriers if minor fields are left blank.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness requirement**: The form mandates a witness signature. This is not required by HIPAA and creates a practical barrier for patients completing the form remotely or electronically.
- **SSN collection**: The form requests Social Security Number ("NSS"), which is unnecessary for HIPAA-compliant authorization and creates identity theft risk if the form is transmitted insecurely.

### ⚠️ AMBIGUITIES

- **"Acceso de visualización según lo programado"** (View Access as scheduled): It is unclear what "as scheduled" means — does the patient need to make an appointment to view records? How is this scheduled? The form provides no instructions.
- **"Formularios incompletos" rejection policy**: The form states incomplete forms will not be accepted, but does not define which fields are mandatory vs. optional. For example, is the SSN required? The "Information Needed By" date is labeled "(opcional)" but no other fields are similarly marked.
- **Revocation instructions partly in English**: The mailing address and department name for revoking authorization are in English ("Attention: Office of Integrity & Compliance") within an otherwise Spanish-language form, potentially confusing Spanish-speaking patients.

### ❌ ERRORS

- **Broken English companion form**: The English-language version of this form (at the non-`-ES` URL) returns HTTP 404. A Spanish-speaking patient who locates this form cannot easily share the English version with an English-speaking helper or representative. This is a live accessibility failure on UMMC's website.
- **"loco parentis" typo**: The minor-patient section reads "parte que actúa como loco parentis" — missing the "in" to correctly read "in loco parentis." This appears in both the Spanish form-1 and English form-2.

### ✨ BRIGHT SPOTS

- **Bilingual availability**: UMMC provides the form in both English and Spanish. The Spanish version is the more recently revised (05/2025), suggesting active maintenance of the translated version rather than a forgotten artifact.
- **70 fillable fields**: The form is fully interactive as a digital PDF, allowing patients to complete it electronically rather than printing and handwriting.
- **Electronic delivery option**: The form explicitly offers "Electrónico" as a delivery format, acknowledging digital access as a legitimate pathway.
- **"Complete Medical Record does not include images" clarification**: The note "Registro médico completo (No incluye imágenes)" is a helpful transparency measure, setting clear expectations about what "complete" means.
