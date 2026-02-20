# Medical City Dallas Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is the **Spanish-language version** of HCA Healthcare's system-wide Authorization for Release of Protected Health Information (PHI). It is the direct translation of form-1.pdf (the English version). Both forms share the same structure and form number base (HCA-840-00434, with the Spanish version appended "-S"). The revision date is 09/21 for both. This is not a hospital-specific document — it is a corporate HCA form, with the mailing address pointing to "PO Box 290789; Nashville, TN 37229-0789" (HCA headquarters). The form is titled "AUTHORIZATION FOR RELEASE OF PHI-SPANISH (PROTECTED HEALTH INFORMATION)" in its footer — notably, the footer title itself is in English, not Spanish.

## 2. FINDABILITY

According to retrieval notes, the form was found on the hospital's medical records page at `medicalcityhealthcare.com/locations/medical-city-dallas-hospital/for-patients/medical-records`. The link text was "Autorización para la divulgación de información médica (PDF)" — clearly labeled in Spanish for Spanish-speaking patients. However, **web search results returned stale URLs** on `medicalcityhealthcare.com/util/forms/` that all 404'd; the forms had been migrated to HCA's digital asset management platform (`hcadam.com`) without URL redirects. A patient searching via Google would likely encounter these dead links before finding the correct page. Once on the medical records page, the form is directly linked and clearly labeled — requiring no additional navigation.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,855 characters), confirming this is a digitally-authored PDF, not a scan.
- **Fillable fields**: 52 interactive form fields exist, indicating a fully fillable digital form. However, the metadata shows `fillable_field_names` is an empty array, suggesting field names may not be properly labeled (an accessibility concern for screen readers).
- **File size**: 168,110 bytes (~164 KB) for a single page — reasonable for a fillable PDF with embedded fonts.
- **Page count**: 1 page. The form packs all content onto a single page.
- **Fonts**: 8 fonts embedded.
- **Images**: 0 embedded images — pure text/vector layout.
- **Digital-first design**: Yes. This was clearly designed as a digital document, not a scan of a paper form. The 52 fillable fields indicate it was built for on-screen completion.

## 4. CONTENT DESIGN

The form compresses a substantial amount of content onto a single page. It is organized into three labeled sections:

- **Sección A**: Patient and recipient identification, delivery preferences, expiration settings, record type selection, and understanding/consent statements (items 1–6).
- **Sección B**: Marketing and sale of PHI disclosures.
- **Sección C**: Signatures.

**Clarity**: The Spanish translation is generally competent. Key terms are translated (e.g., "información médica protegida" for PHI, "Aviso de Prácticas de Privacidad" for Notice of Privacy Practices). However, certain phrases are awkward or overly literal — "Existe cierto nivel de riesgo de que un tercero pueda ver su información sin su consentimiento" is a functional but stilted rendering of the English disclaimer.

**Density**: The single-page format means the text is extremely dense. All record type checkboxes, consent language, delivery options, and signature blocks are compressed into one page. Given the volume of legal content, readability likely suffers from small font sizes and tight spacing.

**Record type selection**: The form offers 17+ specific record categories (consultation, medication list, discharge summary, operative report, labor and delivery, ER report, pathology, specialty test/therapy, EKG, problem list, physician orders, H&P, radiology, progress notes, clinical/lab, plus "All Pertinent Records" and "Other"). This is a strong level of granularity.

**Delivery options**: Four options are presented — paper copy, electronic media, encrypted email, and unencrypted email — with a disclaimer about risks of electronic transmission.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose authorization form**, not specifically designed for patient self-access. The "Purpose of disclosure" field offers "A solicitud del individuo" (at the request of the individual) as one option, and "Otro tercero destinatario" (other third-party recipient) as the other. A patient requesting their own records must use the same form as any third-party requester.

**Spanish availability**: The existence of a Spanish-language form is a significant patient-centeredness feature. It is directly linked from the medical records page with Spanish link text, making it discoverable for Spanish-speaking patients.

**Scope options**: Patients can specify dates of service and select from a detailed list of record types. The form also includes a USCDI reference: "Para las solicitudes de distribución de USCDI: incluir todos los elementos definidos en los Datos Básicos de Estados Unidos para la Interoperabilidad" with a field for "Requires Direct Address or National Provider Identifier." This is an unusually forward-looking feature.

**Format options**: Four delivery methods are offered (paper, electronic media, encrypted email, unencrypted email). Electronic delivery is available.

**Right of Access language**: The consent section states "Puedo negarme a firmar esta autorización y que es estrictamente voluntaria" (I may refuse to sign and it is strictly voluntary) and "Mi tratamiento, pago, inscripción o elegibilidad para los beneficios no pueden estar condicionados a la firma de esta autorización" (treatment/payment/enrollment cannot be conditioned on signing). These are standard HIPAA authorization statements, but the form does not explicitly reference 45 CFR § 164.524 or the HIPAA Right of Access by name.

**Fees**: Item 5 in the consent section states "Entiendo que puedo ver y obtener una copia de la información descrita en este formulario, a cambio de una tarifa razonable, si la solicito" — acknowledging a "reasonable copy fee" without specifying an amount.

## 6. COMPLIANCE

**Expiration**: The form defaults to 180-day expiration ("Esta autorización caducará después de 180 días") with an option to specify a custom expiration date or event. A 180-day default is reasonable.

**SSN collection**: The form requests "Últimos 4 dígitos SSN (opcional)" — last 4 digits of SSN marked as optional. While labeled optional, collecting SSN on an ROI form raises data minimization concerns.

**Psychotherapy notes**: The form correctly handles psychotherapy notes separately, stating that if the request is for psychotherapy notes, it must be the only item on the authorization ("éste es el único artículo que puede solicitar en esta autorización"), consistent with HIPAA requirements at 42 CFR § 164.508(a)(2).

**Sensitive information**: The form includes a blanket statement that all records will be provided "incluida información que pueda considerarse sensible, como la relativa a alcohol, abuso de drogas, información genética, psiquiátrica, pruebas de VIH, resultados de VIH o información sobre SIDA" with the option to "Especifique toda la información que desee excluir." This opt-out approach puts the burden on the patient to exclude sensitive categories.

**Revocation**: The form states authorization can be revoked "en cualquier momento por escrito" (at any time in writing), which is standard.

**Marketing/sale of PHI (Section B)**: The form includes a section asking whether the request involves marketing or sale of PHI, which is a HIPAA-required disclosure for those scenarios.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Spanish-language availability**: The form is offered as a direct parallel to the English version, linked from the same medical records page with Spanish link text. This is a meaningful accessibility feature for the large Spanish-speaking population in Dallas, TX.
- **USCDI reference**: The inclusion of "Para las solicitudes de distribución de USCDI: incluir todos los elementos definidos en los Datos Básicos de Estados Unidos para la Interoperabilidad" is unusually progressive. Very few ROI forms reference USCDI or interoperability standards. This signals awareness of modern health data exchange frameworks.
- **52 fillable fields**: The form is fully interactive and fillable digitally — a strong technical accessibility feature.
- **Four delivery format options**: Offering paper, electronic media, encrypted email, and unencrypted email gives patients genuine choice in how they receive their records.

### 🚩 RED FLAGS

- **SSN collection on ROI form**: Even though marked "(opcional)," requesting the last 4 digits of a patient's SSN on an authorization form is a data minimization concern. Date of birth, name, and facility should be sufficient for record identification.

### ⚠️ AMBIGUITIES

- **Mixed-language elements**: The footer reads "AUTHORIZATION FOR RELEASE OF PHI-SPANISH" in English. The field "ID verified by: ___________ (Initials)" at the bottom of Section C is also in English. A Spanish-speaking patient who cannot read English would not understand these elements. This suggests the Spanish form is treated as a staff-facing translation overlay rather than a fully localized patient document.
- **"Tarifa razonable" (reasonable fee)**: The form mentions a reasonable copy fee but does not define it or reference the HIPAA cost-based fee limit. A patient has no way to know what to expect.
- **Fax restriction**: The fax field states "FAX solo al medico oficina / centro médico" (fax only to physician office / medical facility), which could be interpreted as restricting where records can be faxed — potentially limiting patient-directed fax delivery.

### ❌ ERRORS

- **Stale web search URLs**: The `medicalcityhealthcare.com/util/forms/` URLs indexed by search engines all return 404. No redirects are in place, meaning patients searching Google for the form encounter dead links before finding the correct page.
- **Empty fillable field names**: Despite having 52 fillable fields, the metadata shows no field names — suggesting fields may lack proper programmatic labels, which impacts PDF accessibility for assistive technologies.
