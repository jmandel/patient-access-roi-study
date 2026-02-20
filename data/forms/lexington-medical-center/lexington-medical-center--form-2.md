# Lexington Medical Center — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is the **Spanish-language version** of Lexington Medical Center's "Authorization for Release of Protected Health Information," titled "Autorización para Divulgar Información Protegida de Salud." It is a direct translation of form-1.pdf (the English-language ROI form). Both share identical structure: a two-page layout with Section 1 for Medical Records Release, Section 2 for Verbal Communication Release, and Section 3 for Review and Authorization.

A third document (form-3.pdf) was also found — a supplemental reproductive health attestation form (in English only), which is a companion document rather than a standalone ROI form.

The source URL for form-2.pdf (`(en-español)-medical-records-release-authorization-form.pdf`) explicitly identifies it as the Spanish version. The form number "7181-1155-1SP (10/20)" on page one confirms it as the Spanish ("SP") variant of form 7181-1155-1, dated October 2020.

## 2. FINDABILITY

Per the retrieval notes, finding this form was straightforward. The Medical Records page at `https://www.lexhealth.com/medical-records` links directly to all three PDFs, including the Spanish version. A web search for Lexington Medical Center's medical records release form immediately surfaced results. The retrieval notes describe no difficulties — no bot blocking, no JavaScript-rendering issues, and the forms were directly downloadable.

The URL structure is descriptive: the filename contains "(en-español)" making the language clear before downloading. The Medical Records page reportedly includes a "Request Paper Copies" section with clear links and also mentions MyChart for digital requests.

The Spanish form being co-located with the English version on the same page (rather than buried in a separate "Español" section) is a positive design choice for accessibility.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: The PDF has a proper text layer (`has_text_layer: true`, `is_image_only_scan: false`). The extracted text is coherent and complete at 6,563 characters across 2 pages. This is a digitally-authored document, not a scan.

**Fillable fields**: Zero fillable fields (`fillable_field_count: 0`). All form blanks are rendered as static underscores (e.g., `Nombre Completo del (de la) Paciente en el Momento del Tratamiento:___________`). Patients must print and hand-write responses or use workaround annotation tools.

**File format**: The file is 73,764 bytes (72 KB) — very compact for a 2-page PDF. It uses 5 fonts and contains zero embedded images, indicating a clean, digitally-composed document rather than a scanned paper form.

**Digital-first design**: Despite being digitally authored (not a scan), the form is clearly designed for print-and-fill workflow. The absence of any interactive fields makes it a flat PDF. Checkboxes are rendered as the "£" character (a common artifact of Wingdings/symbol fonts rendering as text), confirming they are not interactive.

## 4. CONTENT DESIGN

**Length**: Two pages, which is proportionate for an ROI form covering both medical records release and verbal communication authorization.

**Structure**: The form is logically organized into three sections:
- Section 1: "Divulgación de Expedientes Médicos" (Medical Records Release) — covers recipient info, delivery method, and record type selection
- Section 2: "Divulgación de Comunicación Verbal" (Verbal Communication Release) — covers verbal permission to discuss PHI with named individuals
- Section 3: "Revisión y Autorización" (Review and Authorization) — 8 numbered conditions plus signature block

**Record type granularity**: The form provides a detailed checklist organized into four categories — "Reportes/Notas" (Reports/Notes), "Resultados de Análisis/Estudios" (Test Results/Studies), "Cardíaco/Respiratorio" (Cardiac/Respiratory), and "Otro" (Other). Approximately 25+ checkboxes cover specific record types including ED notes, lab tests, H&P, consultations, pathology, radiology, surgical reports, and more. An "El Expediente Médico Completo" (Entire Medical Record) option is also available.

**Delivery methods**: Four options are listed: "Portal," "Correo" (Mail), "Lo Recogeré" (Pick-up), and "Fax (solamente al proveedor de atención médica)" (Fax to healthcare provider only). Notably, "Portal" is listed first.

**Translation quality**: The Spanish appears to be a professional translation. The form preserves the same structure and field order as the English version. Some terms retain English context where appropriate (e.g., "Medical Records" appears in the mailing address, which is an English proper noun for the department name).

**Readability**: The language uses formal but standard Spanish. The authorization conditions in Section 3 are dense but mirror the English version's legal register. The form does not include a plain-language summary in Spanish.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose release form, not one specifically designed for patient self-access under HIPAA's Right of Access. The form's structure — "I authorize [provider] to release my health information to: [Recipient Name]" — frames the patient as directing a release to a third party. A patient requesting their own records would need to fill in their own name as the recipient, which is workable but not explicitly guided.

**Scope options**: Strong. Patients can specify dates of treatment, purpose of release, and select from a granular list of record types. The form also provides space for "Especifique otro" (Specify other) entries.

**Format/delivery options**: The form lists Portal, Mail, Pick-up, and Fax. "Portal" likely refers to the MyChart patient portal. There is no explicit option for electronic delivery via email, CD/USB, or download link.

**Right of Access language**: The form does not reference HIPAA § 164.524 or the patient's Right of Access. It does not explain that patients have a legal right to obtain copies of their records.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA/interoperability mechanisms.

**Fees**: Condition 5 states: "Entiendo que puede haber un cargo que pagar para conseguir la información solicitada. La información sobre este costo puede ser obtenida contactando al departamento de Expedientes Médicos (Medical Records) al número (803) 791-2264." Fees are acknowledged but not disclosed; patients must call to learn the cost. Helpfully, it also adds: "Si necesita la ayuda de un intérprete comuníquese con el Servicio de Interpretes al (803) 791-2254 y pida que le hagan una llamada en conferencia."

**Interpreter services**: The inclusion of an interpreter services phone number (803-791-2254) in the Spanish form, with instructions to request a conference call, is a thoughtful accessibility feature.

## 6. COMPLIANCE

**Expiration**: Condition 7 states the medical records release authorization expires **90 days** after signature: "esta autorización de divulgación de expediente médico caducará 90 días después de firmada." The verbal communication release (Condition 8) expires after one year. The 90-day expiration for a records release is quite short and could require patients to re-submit if processing is delayed.

**Revocation**: Condition 3 explains that authorization can be revoked at any time but won't apply to information already released. Medical Records revocations must be sent to the mailing address. Verbal communication revocations can be done "por escrito o en persona" (in writing or in person).

**SSN collection**: The form requests the patient's full Social Security Number at the top: "Número de Seguro Social:___ ___ ___ – ___ ___ – ___ ___ ___ ___." Collecting full SSN on an ROI form is unnecessary for patient identification and raises privacy concerns — most facilities use medical record numbers or date of birth instead.

**No notarization required**: The form does not require notarization or witness signatures.

**Submission method**: The form instructs: "Enviar el formulario completado a: Lexington Health Attn: Medical Records, 2720 Sunset Blvd., West Columbia, SC 29169." This is mail-only submission — no fax number, email, or electronic submission option is mentioned for sending the completed form back to the facility.

**Sensitive information disclosure**: Condition 1 states that records containing documentation of "abuso de alcohol, condición psiquiátrica, abuso de drogas o enfermedades contagiosas" will be released as part of the record. This appears to bundle sensitive categories (substance abuse, psychiatric, communicable disease) into a blanket release rather than requiring separate consent, which may conflict with 42 CFR Part 2 protections for substance abuse treatment records.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Spanish-language availability**: Offering a fully translated Spanish ROI form, co-located with the English version on the same Medical Records page, is a meaningful accessibility step that many facilities neglect.
- **Interpreter services contact**: The Spanish form uniquely includes a phone number for interpreter services (803-791-2254) with instructions to request a conference call — a practical, patient-centered touch not always seen even in translated forms.
- **Granular record selection**: The ~25+ checkbox options for specific record types give patients meaningful control over what is released.

### 🚩 RED FLAGS
- **Full SSN collection**: The form requests the patient's complete Social Security Number. This is excessive for patient identification on an ROI form and creates unnecessary privacy/identity-theft risk, especially for a document that must be mailed physically.
- **90-day authorization expiration**: The blanket 90-day expiration for medical records release is notably short. If a facility takes several weeks to process the request, the authorization could expire before fulfillment, requiring re-submission and re-signing.
- **Potential 42 CFR Part 2 conflict**: Condition 1 states substance abuse records "will be released as part of my record" without a separate specific consent, which may not comply with federal substance abuse confidentiality regulations (42 CFR Part 2) that require a more specific authorization.

### ⚠️ AMBIGUITIES
- **"Portal" delivery option undefined**: The form lists "Portal" as a delivery method but does not explain what this means (presumably MyChart), nor does it provide instructions for accessing it. A Spanish-speaking patient unfamiliar with the patient portal would have no guidance.
- **Mail-only form submission**: The form only provides a mailing address for submission. It's unclear whether the form can also be submitted via fax, in person, or electronically — the retrieval notes mention the website references MyChart for digital requests, but the form itself gives no alternative to postal mail.
- **Fee amount undisclosed**: Patients are told there "may be a charge" and must call to find out the cost. This lack of upfront fee disclosure makes it difficult for patients to make informed decisions, and the phone call itself could be a barrier for Spanish-speaking patients even with the interpreter service.
