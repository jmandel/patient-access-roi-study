# Riverside Community Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3 is a 1-page Spanish-language "Autorización para la divulgación de información médica" (Authorization for Release of Medical Information), hosted on HCA Healthcare's digital asset management CDN at `https://www.hcadam.com/api/public/content/e109b112b80f42fc8291acbe0b1435fa?v=829b113e`. It carries the form number HCA-840-00434-S (the "-S" suffix presumably indicating Spanish), Rev. 09/21, and is labeled "AUTHORIZATION FOR RELEASE OF PHI-SPANISH (PROTECTED HEALTH INFORMATION)" in its footer — notably, this footer label is in English even though the form body is in Spanish.

This is one of three forms found for Riverside Community Hospital. Form-2 is the current official English-language authorization (same layout, same form number without the "-S" suffix, same 52 fillable fields, same revision date 09/21). Form-3 is the direct Spanish translation of form-2. Form-1 is an older, longer (5-page) English version hosted by a third-party vendor (Legal Image) with no fillable fields. The hospital's official medical records page links to both form-2 and form-3, making this the official Spanish-language form.

## 2. FINDABILITY

Form-3 was easy to locate. According to the retrieval notes, the hospital's medical records page at `https://www.riversidecommunityhospital.com/patient-resources/medical-records` directly links to both the English and Spanish authorization forms. The form was found "within 1-2 clicks from the main medical records page." Retrieval difficulty was rated **Easy**.

The URL itself is a non-descriptive CDN hash (`e109b112b80f42fc8291acbe0b1435fa`), meaning a patient could not identify this as a Spanish-language ROI form from the URL alone. However, the link on the hospital's website presumably labels it in context. The form is served over HTTPS via HCA's CDN, which is appropriate for a healthcare document.

Providing a Spanish-language form alongside English is itself a findability asset for the large Spanish-speaking population in Riverside, CA — it means Spanish-speaking patients can locate a form they can actually read without needing to navigate English-language pages to find a translator.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text extraction via `pdftotext` yields 4,855 characters — searchable and copy/paste-capable.
- **Fillable fields**: 52 interactive form fields (matching form-2 exactly). While `fillable_field_names` is empty in the metadata (field names not extracted), the high field count indicates a fully interactive form that can be completed digitally.
- **File size**: 168,110 bytes (168 KB) for 1 page — reasonable.
- **Fonts**: 8 fonts embedded.
- **Images**: 0 embedded images.
- **Scan status**: Not an image-only scan; digitally authored.
- **Digital-first design**: Yes. With 52 fillable fields on a single page, this form was designed for digital completion. The delivery options include electronic media, encrypted email, and unencrypted email, further supporting a digital workflow. However, submission of the completed form still appears to require mailing or faxing to "PO Box 290789; Nashville, TN 37229-0789" (HCA's centralized ROI processing center) — phone 844-481-0278 and fax 844-481-0298 are listed.

Technically, this form is on par with form-2 — same field count, same digital-first design, same HCA template. This is a strength; the Spanish version was not treated as a second-class afterthought.

## 4. CONTENT DESIGN

**Length**: 1 page. Impressively compact given the amount of information it covers — patient demographics, recipient information, delivery options, expiration, psychotherapy notes handling, granular record type selection, sensitive information disclosure, patient rights statements, marketing/sale of PHI disclosures, and signature. The single-page format is efficient but necessarily dense.

**Clarity**: The form is written in Spanish that is generally comprehensible, though some passages are dense and formal. For example, the delivery disclaimer reads: "Existe cierto nivel de riesgo de que un tercero pueda ver su información sin su consentimiento al recibir medios electrónicos o correo electrónico no encriptado. No nos hacemos responsables del acceso no autorizado a la PHI (información médica protegida) contenida en este formulario ni de los riesgos (por ejemplo, virus) que puedan introducirse en su computadora/dispositivo al recibir la PHI en formato electrónico o por correo electrónico." This is a dense, legalistic paragraph that may challenge patients with limited literacy in Spanish.

**Organization**: The form follows the same three-section structure as form-2: Section A (patient/recipient info, delivery, record types), Section B (marketing/PHI sale), Section C (signatures). Sections are clearly labeled. The "I understand that" block lists six numbered rights. The record type checklist is organized in a grid with clear labels.

**Translation quality**: The translation appears competent but has some inconsistencies. The term "PHI" is used untranslated throughout, with a parenthetical explanation "(información médica protegida)" appearing only once in the delivery disclaimer. The word "medico" appears without the accent mark ("médico") in at least one instance: "(FAX solo al medico oficina / centro médico)" — and "medico oficina" is an awkward construction that should likely read "consultorio médico" or "oficina del médico."

**Record type selection**: Offers a comprehensive list including "Consulta," "Lista de medicamentos," "Instrucciones de alta," "Resumen de alta," "Informe quirúrgico," "Registro de trabajo de parto y parto," "Informe de emergencias," "Informe de patología," and others. Also includes a USCDI option: "Para las solicitudes de distribución de USCDI: incluir todos los elementos definidos en los Datos Básicos de Estados Unidos para la Interoperabilidad" — though "Datos Básicos de Estados Unidos para la Interoperabilidad" as a translation of "United States Core Data for Interoperability" may not be a recognized term for Spanish-speaking patients.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: Like form-2, this is a general-purpose release form, not specifically designed for patient self-access. The purpose of disclosure field offers two options: "A solicitud del individuo" (at the request of the individual) and "Otro tercero destinatario (especifique propósito)" (other third-party recipient). The first option does acknowledge patient-initiated requests, but the overall form structure still centers on designating a "destinatario" (recipient) — a patient requesting their own records must fill in their own name and address as the recipient with no explicit guidance for this use case.

**Delivery options**: Paper copy, electronic media ("Medios electrónicos, si están disponibles"), encrypted email ("Correo electrónico encriptado"), and unencrypted email ("Correo electrónico no encriptado"). This matches form-2 and is a reasonably good set of options. The risk disclaimer for unencrypted options is included in Spanish.

**Scope options**: Granular record type selection with an "Todos los registros pertinentes" (all pertinent records) option plus individual categories. Psychotherapy notes are properly separated: "¿Es esta una solicitud de notas de psicoterapia? Sí, entonces éste es el único artículo que puede solicitar en esta autorización."

**Expiration**: "Esta autorización caducará después de 180 días o en la opción siguiente (por favor, elija una sola)" — 180-day default, matching form-2. Custom date or event expiration is also available.

**Right of Access language**: No explicit reference to HIPAA § 164.524 or patient rights to access their own records. The "Entiendo que" section covers the right to refuse, right to revoke, and mentions the "Aviso de Prácticas de Privacidad" (Notice of Privacy Practices), but does not inform patients of their HIPAA right of access.

**EHI/USCDI**: Includes a USCDI option ("Para las solicitudes de distribución de USCDI"), matching form-2. This is a forward-looking inclusion, though its practical utility for Spanish-speaking patients is questionable given that USCDI is a technical interoperability standard unlikely to be familiar to lay users in any language.

**Sensitive information**: States that "Se proveerá todo tipo de información que se encuentre en los registros seleccionados anteriormente (si corresponde), incluida información que pueda considerarse sensible, como la relativa a alcohol, abuso de drogas, información genética, psiquiátrica, pruebas de VIH, resultados de VIH o información sobre SIDA." Unlike form-1, which requires an initial for consent to sensitive information release, form-3 (like form-2) simply states this will be included and allows the patient to "Especifique toda la información que desee excluir" (specify information to exclude) — an opt-out rather than opt-in approach.

## 6. COMPLIANCE

**SSN request**: Asks for "Últimos 4 dígitos SSN (opcional)" — marked optional, but requesting SSN on an ROI form is unnecessary and raises privacy concerns. Identical to form-2.

**No notarization required**: The form does not require notarization.

**Submission method**: Mailing address (PO Box 290789, Nashville, TN) and fax (844-481-0298) are provided at the top. No online submission option is mentioned. The centralized Nashville address means the form is processed at HCA's national ROI center, not locally at Riverside Community Hospital.

**Fee disclosure**: Point 5 in the "Entiendo que" section states: "Entiendo que puedo ver y obtener una copia de la información descrita en este formulario, a cambio de una tarifa razonable, si la solicito." This references a "tarifa razonable" (reasonable fee) without specifying amounts.

**Authorization expiration**: 180-day default — reasonable and matching form-2.

**Marketing/sale of PHI**: Section B properly asks whether the PHI request is for marketing or involves the sale of PHI, with follow-up questions about financial remuneration. This is appropriate HIPAA compliance.

**ID verification field**: The form includes "ID verified by: ___________ (Initials)" — this field is in English, not Spanish, and is presumably for staff use. Its presence on a patient-facing form is somewhat confusing.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Spanish-language parity**: The Spanish form is functionally identical to the English form-2 — same layout, same 52 fillable fields, same form number series, same revision date. This is genuine parity, not a degraded afterthought. For a community hospital in Riverside, CA (where approximately 52% of residents speak Spanish at home), providing a fully equivalent Spanish-language form is a meaningful accessibility feature.
- **USCDI option in Spanish**: Including a USCDI release request option in the Spanish form shows that HCA's template updates are applied uniformly across language versions.
- **52 fillable fields**: Full digital fillability in the Spanish version matches the English version — patients can complete the form electronically regardless of language preference.

### ⚠️ AMBIGUITIES

- **Mixed-language elements**: Several elements remain in English despite the form being in Spanish. The footer reads "AUTHORIZATION FOR RELEASE OF PHI-SPANISH (PROTECTED HEALTH INFORMATION)." The "ID verified by" field is entirely in English. The form identifier "*ROI*" and "Patient Label" are in English. This mixing could confuse Spanish-speaking patients who specifically chose this form because they do not read English.
- **"PHI" used without consistent translation**: The abbreviation "PHI" appears multiple times with a Spanish expansion ("información médica protegida") provided only once. A Spanish-speaking patient unfamiliar with English healthcare acronyms may not understand "PHI" in subsequent references.
- **USCDI terminology**: "Datos Básicos de Estados Unidos para la Interoperabilidad" is not an established Spanish-language term. A Spanish-speaking patient encountering this would have no practical understanding of what they are requesting.

### ❌ ERRORS

- **Grammar error in patient rights**: Point 5 reads "Entiendo que puedo ver y obtener una copia de la información descrita en este formulario" — this mirrors the English version's grammatical issue ("obtain a copy the information" is missing "of"). The Spanish rendering is actually somewhat smoother ("una copia de la información") but the phrasing "a cambio de una tarifa razonable" (in exchange for a reasonable fee) creates a different issue: it implies the patient must pay a fee to see their information, when HIPAA only permits reasonable cost-based fees for copies, not for inspection.
- **"medico oficina"**: The phrase "(FAX solo al medico oficina / centro médico)" contains a grammatical error — "medico oficina" should read "consultorio médico" or "oficina del médico." The missing accent on "medico" (should be "médico") is also present.
- **Centralized mailing address with no local option**: The form directs submissions to Nashville, TN (HCA's national center) with no mention of the local hospital address. While this may be operationally correct, it could be confusing or off-putting for a Spanish-speaking patient in Riverside, CA who expects to interact with their local hospital. Form-1 (the older version) provided the local Riverside address.
