# Cone Health — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2 is the **Spanish-language version** of Cone Health's HIPAA Authorization for Use/Disclosure of Protected Health Information ("AUTORIZACIÓN DE HIPAA PARA EL USO / DIVULGACIÓN DE INFORMACIÓN MÉDICA PROTEGIDA"). The English title appears as a subtitle directly below. It is a direct translation of form-1.pdf, the English-language HIPAA authorization. Both forms carry the same document tracking number (165952800.1) and the same 12/12/2024 revision date implied by the source URL filename (`Cone-Health-HIPAA-Authorization-12-12-24-Spanish.pdf`).

Cone Health publishes four documents on or near its Medical Records page:
- **form-1.pdf** — English HIPAA Authorization (1 page, 91 KB)
- **form-2.pdf** — Spanish HIPAA Authorization (2 pages, 114 KB) ← this document
- **form-3.pdf** — Request for Amendment of Health Information (not an ROI form)
- **form-4.pdf** — CHMG (Cone Health Medical Group) separate ROI form (found via web search, not linked from main page)

Form-2 is functionally equivalent to form-1 but formatted across 2 pages rather than 1, likely due to the increased character count of the Spanish translation.

## 2. FINDABILITY

Per the retrieval notes, form-2 was found on Cone Health's Medical Records page at `conehealth.com/patients-visitors/medical-records/`. It was linked alongside the English version, making it relatively easy to locate for a Spanish-speaking patient who navigates to that page. The source URL is descriptive: the filename explicitly identifies it as the Spanish HIPAA Authorization with a date stamp.

However, the site uses bot-protection (returning "Access Denied" to basic HTTP requests), meaning automated retrieval required browser-like headers. This is a minor friction point for programmatic access but not for a human using a browser.

The findability for Spanish-speaking patients is good in the context of "already on the Medical Records page," but it depends on the patient navigating an English-language website to reach that page. There is no indication from the notes of a Spanish-language landing page or navigation path.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and extractable. Full text (5,170 characters) was extracted successfully. The extracted text is coherent and readable.
- **Fillable fields**: Zero (0) interactive form fields. The PDF is a flat document with no digital form functionality — patients must print and fill by hand.
- **File format**: PDF 1.3, 114,330 bytes (114 KB) across 2 pages. File size is moderate but larger than the 1-page English equivalent (91 KB), partly explained by the extra page and 19 fonts (vs. 14 in the English version).
- **Fonts**: 19 embedded fonts — unusually high for a 2-page form, suggesting complex formatting or font subsetting issues.
- **Images**: 11 embedded images, same count as the English version. These are likely logos or design elements.
- **Digital-first design**: No. This is designed as a print-and-fill document. Despite having a text layer, the absence of fillable fields means patients cannot complete it digitally without third-party PDF annotation tools.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is reasonable for an authorization form covering multiple facilities, record types, and patient rights disclosures.

**Structure**: The form follows a logical numbered sequence:
1. Authorization target (who receives the records)
2. Purpose of disclosure (3 checkbox options: patient request, legal, other)
3. Facility selection (12 named Cone Health facilities plus "Other" and Medical Group)
4. Date range of requested services
5. Information types to disclose (extensive checkbox list including behavioral health subcategories)
6. Manner of disclosure / delivery format
7–8. Patient Rights and Signature section (8 numbered rights statements)

**Clarity**: The Spanish translation is competent but dense. Legal constructs like "Entiendo que esta autorización caducará un año después de la fecha de la firma, a menos que se indique otra fecha de caducidad" (understanding expiration) are faithful translations but inherit the complexity of the English legal language. The form uses a mix of Spanish body text with some English labels — notably the "OFFICE USE ONLY" section at the bottom remains entirely in English, and the signature line reads "Firma (Signature)" and "Fecha (Date)" in bilingual format.

**Layout**: Based on the text extraction, the form appears densely packed. Checkbox items for facilities and record types are run together in paragraph-style rather than listed vertically, which reduces scannability. The behavioral health section is a subsection within item 5 with its own checkboxes, creating a nested structure that could confuse patients.

**Readability**: The form uses both Spanish and English throughout — section headers, key terms, and the title all appear bilingually. This is helpful for bilingual readers but adds visual clutter. The extraction shows some formatting artifacts (e.g., `_ _ _ _ _ _ _ _ _` for state field), suggesting the layout may appear cluttered in the original PDF.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form serves dual purposes — it can be used for patient self-request ("Solicitud del paciente" checkbox under Purpose of Disclosure) or third-party release. It is not specifically tailored for patient access under HIPAA § 164.524; there is no mention of the Right of Access or that provision. The form frames the interaction as "authorization to disclose" rather than "request for your own records."

**Scope options**: Strong. Patients can specify:
- Specific Cone Health facilities (12 named options)
- Date ranges ("de: / / a: / /") or current episode through discharge
- Granular record types: dates of service only, discharge summary, H&P, consult reports, operative notes, progress notes, lab results, x-ray reports, ED visits, substance use disorder treatment records, or "All"
- Behavioral health-specific subtypes: psychosocial history, psychiatric admission assessment, therapy notes, two-way communication, AVS, suicide risk assessment at discharge

**Format/delivery options**: Six options offered: print on paper, CD/USB, mail, fax, pick-up by authorized recipient, and email. This is a solid range of delivery methods including electronic options.

**Fee disclosure**: The form states "Es posible que se cobre un cargo por la reproducción de historias clínicas, películas y cintas" (there may be a charge for reproduction of medical records, films, and tapes) and reiterates in Rights item 8: "Entiendo que puede haber un cargo asociado a los servicios de divulgación de información prestados." No specific fee schedule or HIPAA fee limits are mentioned.

**EHI Export / bulk data**: No mention of electronic health information export, patient portal, or bulk data access.

**Language accessibility**: The existence of a Spanish-language version is itself a patient-centered feature that many organizations do not offer.

## 6. COMPLIANCE

**Expiration**: Authorization expires 1 year from signature unless otherwise specified. This is a reasonable default. The CHMG form (form-4) defaults to 90 days, creating an inconsistency across the Cone Health system.

**Revocation**: Patients are told revocation must be in writing, mailed to a specific physical address ("The Moses H. Cone Memorial Hospital; HIM Dept. - ATTN: ROI; 1200 N Elm Street; Greensboro, NC 27401"). No email, fax, or online revocation option is mentioned, which imposes a mail-only barrier for revocation.

**Conditioning treatment on authorization**: The form correctly states that signing is voluntary and Cone Health cannot condition treatment on signing, with the standard exceptions for research-related treatment and disclosure-only encounters.

**Sensitive information bundling**: The authorization explicitly includes "información sensible como la relacionada con mi salud reproductiva, salud mental, enfermedades de transmisión sexual, pruebas genéticas, abuso de drogas/alcohol y diagnóstico de VIH/SIDA." This bundles sensitive categories into a single authorization. While the form does provide separate checkboxes for substance use disorder records and behavioral health records in section 5, the Rights section 1 statement applies blanket authorization across all sensitive categories once signed.

**42 CFR Part 2**: The form includes a specific statement about substance abuse record protections under 42 CFR Part 2, which is appropriate.

**Identity verification**: The "OFFICE USE ONLY" section requires Driver's License # and HIM Staff Signature, suggesting in-person identity verification may be expected. This is not explicitly stated as a requirement in the patient-facing instructions, but it implies a pick-up or in-person submission workflow.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Spanish-language form available**: Cone Health provides a professionally translated Spanish version of its HIPAA authorization, linked alongside the English version on the Medical Records page. This is relatively uncommon and serves a significant patient population.
- **Granular record-type selection**: The form offers detailed checkbox options for specific record types including a dedicated behavioral health subsection, giving patients meaningful control over what is disclosed.
- **Multiple delivery formats**: Six delivery options including email and CD/USB, covering both digital and physical preferences.

### 🚩 RED FLAGS
- **Mail-only revocation**: Revocation requires written notice sent by mail to a specific address. No electronic revocation path is offered, creating a barrier for patients who may need to quickly revoke an authorization.
- **Driver's License requirement in office section**: The "OFFICE USE ONLY" section (which remains in English even on the Spanish form) captures "Driver's License #," potentially creating barriers for patients without a driver's license and implying in-person verification.

### ⚠️ AMBIGUITIES
- **Broad sensitive-information consent in Rights section 1**: While section 5 lets patients select specific record types, Rights statement 1 states the authorization "incluye información pertinente a información sensible como la relacionada con mi salud reproductiva, salud mental..." — it's unclear whether a patient who checks only "Lab Results" in section 5 has also authorized release of their mental health and HIV records if they happen to be "pertinent."
- **Fee language is vague**: "Es posible que se cobre un cargo" (there may be a charge) provides no specifics about amounts or HIPAA fee limits, leaving patients uncertain about costs.
- **English-only navigation path**: The form itself is in Spanish, but reaching it requires navigating an English-language website. The gap between a Spanish form and an English-only website journey is not addressed.

### ❌ ERRORS
- **"OFFICE USE ONLY" section left in English**: On a Spanish-language form, the administrative section remains entirely in English ("OFFICE USE ONLY," "Driver's License #," "HIM Staff Signature," "Date"), creating an inconsistency. While this section is for staff use, it signals incomplete translation.
- **Zero fillable fields**: Despite being a digitally-produced PDF (not a scan), the form has no interactive form fields, requiring patients to print, hand-fill, and submit physically — a missed opportunity for digital accessibility.
