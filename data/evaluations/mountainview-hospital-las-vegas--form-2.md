# Evaluation: MountainView Hospital (Las Vegas, NV) — form-2.pdf

**Organization**: MountainView Hospital, Las Vegas, NV
**Parent System**: HCA Healthcare / Sunrise Health
**Document**: form-2.pdf — Spanish-language authorization for release of PHI
**Form ID**: HCA-840-00434-S, Rev. 09/21

---

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is the **Spanish-language version** of MountainView Hospital's authorization for release of protected health information. It is a direct translation of form-1.pdf (HCA-840-00434, the English version). Both forms are standardized HCA Healthcare system-wide documents, not facility-specific to MountainView Hospital.

The form was linked from the Sunrise Health medical records page under the label "Autorización para la divulgación de información médica." It serves the same purpose as the English version — a general-purpose HIPAA authorization for disclosure of medical records that can be used for both patient self-requests and third-party releases.

The two forms together constitute the complete offering: one English, one Spanish, identical in structure and content.

---

## 2. FINDABILITY

The Spanish form was **easy to find**. It was linked directly alongside the English version on the MountainView Hospital medical records page at `sunrisehealthinfo.com/locations/mountainview-hospital/for-patients/medical-records`. The link text was in Spanish ("Autorización para la divulgación de información médica"), making it identifiable to Spanish-speaking users browsing the page.

However, the **surrounding page content** (navigation, instructions, and the medical records page itself) appears to be in English only, which means a Spanish-speaking patient would need to navigate through English-language pages to reach the Spanish form. The actual download URL (`hcadam.com/api/public/content/e109b112b80f42fc8291acbe0b1435fa`) is an opaque CDN path that provides no indication of content or language.

Initial curl downloads from the `sunrisehealthinfo.com/util/forms/` URL returned HTML due to bot protection; the actual PDF was served from HCA's CDN at `hcadam.com`.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and complete. All form text is extractable (4,855 characters), confirming this is a natively digital document, not a scan.

**Fillable fields**: The form contains **52 fillable fields** — a strong count indicating comprehensive interactive form coverage. However, the metadata notes `fillable_field_names: []`, suggesting the fields may lack programmatic names/labels, which could impair screen reader accessibility.

**Format**: Single-page PDF, 168 KB — efficient file size for the content. Uses 8 fonts. No embedded images. PDF appears to be a digital-first design.

**Digital-first design**: Yes. The form was clearly authored digitally with proper text encoding, interactive fields, and checkbox elements. It is not a scanned paper form.

**Concern**: While the form is technically well-constructed, the fact that 52 fillable fields are packed onto a single page means the form may be visually dense or rely on very small field sizes.

---

## 4. CONTENT DESIGN

**Length**: 1 page. All content — patient information, recipient details, record type selection, delivery options, authorization language, and signatures — fits on a single page. This is efficient but results in a dense layout.

**Clarity**: The Spanish translation is generally competent. Section labels are clear ("Sección A: Esta sección debe completarse para todas las autorizaciones"). The numbered "Entiendo que" (I understand that) statements cover key HIPAA rights in accessible language.

**Organization**: The form follows a logical three-section structure:
- **Sección A**: Patient/recipient information, record selection, delivery options
- **Sección B**: Marketing/sale of PHI disclosure
- **Sección C**: Signatures

**Record type granularity**: The form offers 16+ specific record types (Consulta, Lista de medicamentos, Instrucciones de alta, Resumen de alta, Informe quirúrgico, etc.) plus an "Otros" free-text field and an "All Pertinent Records" catch-all option.

**Language quality issue**: Several elements remain **untranslated in English**, undermining the purpose of a Spanish-language form:
- "ID verified by: ___________ (Initials)" — entirely in English
- "AUTHORIZATION FOR RELEASE OF PHI-SPANISH (PROTECTED HEALTH INFORMATION)" — the footer title is in English
- "Patient Label" — English
- "*ROI*" — English abbreviation
- "HCA-840-00434-S" and "Rev. 09/21" — form identifiers (less critical)

These untranslated elements are clearly staff-facing rather than patient-facing, but their presence in the patient document creates a mixed-language experience.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose authorization form**, not specific to patient self-access. The "Purpose of disclosure" field offers two options: "A solicitud del individuo" (at the request of the individual) and "Otro tercero destinatario (especifique propósito)" (other third-party recipient). A patient requesting their own records would select the first option, but the form does not distinguish the workflow or simplify it for this use case.

**Scope options**: Good. Patients can specify:
- Date range ("Solicita fechas de servicio")
- Specific record types via checkboxes (16+ categories)
- Exclusions for sensitive information ("Especifique toda la información que desee excluir")

**Format/delivery options**: Strong. Four delivery options are offered:
- "Copia en papel" (paper copy)
- "Medios electrónicos, si están disponibles" (electronic media)
- "Correo electrónico encriptado" (encrypted email)
- "Correo electrónico no encriptado" (unencrypted email)

The form includes a risk disclosure about unencrypted email, which is appropriate.

**USCDI awareness**: The form includes a notable line: "Para las solicitudes de distribución de USCDI: incluir todos los elementos definidos en los Datos Básicos de Estados Unidos para la Interoperabilidad." This is an advanced feature rarely seen on ROI forms and indicates awareness of interoperability standards. It also requires a "dirección directa o identificador nacional de proveedor" (Direct Address or NPI) for USCDI requests.

**Right of Access language**: The "Entiendo que" section includes key HIPAA disclosures:
- Authorization is voluntary (point 1)
- Treatment/payment cannot be conditioned on signing (point 2)
- Right to revoke in writing (point 3)
- Re-disclosure risk (point 4)
- Right to obtain a copy "a cambio de una tarifa razonable" (for a reasonable fee) (point 5)
- Right to a copy of the signed form (point 6)

**SSN request**: The form asks for "Últimos 4 dígitos SSN (opcional)" — last 4 digits of SSN, marked as optional. While labeled optional, including this on the form at all may make patients uncomfortable.

**Psychotherapy notes**: Properly separated per HIPAA requirements, with clear language that psychotherapy notes must be requested via a separate authorization.

---

## 6. COMPLIANCE

**Expiration**: Default 180-day expiration with the option to specify a custom date or event. The 180-day default is within common ranges but could be considered moderately short — a patient with an ongoing need would need to reauthorize every 6 months.

**Fee language**: Point 5 references "una tarifa razonable" (a reasonable fee) for obtaining copies but does not specify amounts. This is compliant with HIPAA's reasonable cost-based fee requirement but does not give patients advance notice of what they might pay.

**No notarization required**: The form requires only a signature (patient or representative), not notarization.

**No in-person requirement**: The form includes a mailing address (PO Box 290789, Nashville, TN), phone, and fax for submission, and the notes mention an online portal (Swellbox) as an alternative.

**Marketing/sale of PHI**: Section B appropriately addresses whether the disclosure involves marketing or sale of PHI, with financial remuneration disclosures — a HIPAA requirement that many forms omit.

**Representative authorization**: Section C includes fields for a patient representative's printed name and relationship to the patient, supporting authorized representative access.

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Spanish-language availability**: Offering the form in Spanish alongside English is a meaningful accessibility feature, especially in Las Vegas where a significant portion of the population is Spanish-speaking.
- **USCDI release option**: The inclusion of a USCDI (United States Core Data for Interoperability) release request option is **rare and forward-thinking**. This aligns with ONC interoperability standards and provides a pathway for structured data export that most healthcare organizations do not offer on their ROI forms.
- **Electronic delivery options**: Four delivery format choices including encrypted and unencrypted email, with appropriate risk disclosures, give patients meaningful control over how they receive their records.
- **52 fillable fields**: The high fillable field count on a single-page form means patients can complete this digitally without printing, which is a strong technical accessibility feature.
- **Marketing/sale disclosure (Section B)**: Including the HIPAA-required marketing and sale of PHI section, which many organizations omit, demonstrates thorough compliance attention.

### ⚠️ AMBIGUITIES

- **"Tarifa razonable" without specifics**: The form states patients can obtain copies "a cambio de una tarifa razonable" but provides no fee schedule or estimate. A Spanish-speaking patient may not know what to expect financially.
- **Mixed-language content**: Staff-facing elements like "ID verified by: ___________ (Initials)" and the footer "AUTHORIZATION FOR RELEASE OF PHI-SPANISH" remain in English. While these are arguably not patient-facing, they appear on the document the patient signs and could cause confusion for a monolingual Spanish speaker.

### ❌ ERRORS

- **Footer title in English**: The document footer reads "AUTHORIZATION FOR RELEASE OF PHI-SPANISH (PROTECTED HEALTH INFORMATION)" — using English text plus the word "SPANISH" as a language tag rather than providing the title in Spanish. This is a localization defect; the footer should read something like "AUTORIZACIÓN PARA LA DIVULGACIÓN DE PHI (INFORMACIÓN MÉDICA PROTEGIDA)."
- **"Patient Label" in English**: The "Patient Label" placeholder (for an adhesive patient identification label) is left in English, suggesting incomplete translation review.
