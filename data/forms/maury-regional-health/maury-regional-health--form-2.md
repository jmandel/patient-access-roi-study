# Maury Regional Health — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document title:** "Autorización para Divulgar Información de Salud Protegida" (Authorization to Release Protected Health Information)

**Form number:** 131S, dated 05/2017

This is the **Spanish-language version** of the organization's ROI/authorization form. The English counterpart is form-1.pdf (Form 131, revised 08/2018). Both are single-page forms with the same basic structure: patient demographics, release/obtain checkboxes, purpose selection, date range, record type selection, format options, and a disclosure/signature section.

Notably, form-2 is an **older revision** than the English version — dated 05/2017 vs. 08/2018 — and contains substantive content differences (detailed below), suggesting it was not updated in sync with the English form.

## 2. FINDABILITY

Per the retrieval notes, the form was found on the Medical Records page at `https://www.mauryregional.com/patients-and-visitors/medical-records/`, which is a **2-click path** from the homepage (Patients and Visitors → Medical Records). Both English and Spanish PDFs were linked directly on this page alongside an online request option (Swellbox) and patient portal access.

The site-scoped search (`site:mauryregional.com authorization release medical records`) surfaced the page immediately. The PDF itself is hosted on Cloudinary CDN (`res.cloudinary.com/dpmykpsih/...`) with a long, opaque filename (`131s-2017-authorization-to-release-phi_spanish.pdf`) that at least contains "spanish" as a descriptor.

**Assessment:** Good findability. The form is easy to locate for someone who navigates the website, and the medical records page clearly presents both language options. The Cloudinary-hosted URL is not human-readable, but this is a minor concern since patients access it through the website link.

## 3. TECHNICAL ACCESSIBILITY

| Attribute | Value |
|---|---|
| File size | 213,767 bytes (~214 KB) |
| Pages | 1 |
| Text layer | Yes |
| Fillable fields | 0 |
| Fonts | 11 |
| Embedded images | 0 |
| Image-only scan | No |

The form has a proper text layer (full text is extractable, 4,133 characters), so it is searchable and accessible to screen readers. However, it has **zero fillable form fields** — every blank is represented by underscore characters (e.g., `Nombre del Paciente:_________________________`). Checkboxes are Unicode characters (☐) rather than interactive form elements.

The file is 214 KB for a single page with no images, which is somewhat large — likely due to the 11 embedded fonts. This is a digitally-created PDF (not a scan), but it is designed as a **print-and-complete** document rather than a digital-first form.

**Assessment:** The document is technically sound (text layer, no scan artifacts) but lacks any interactive capability. A patient must print, hand-fill, and return it physically or by fax.

## 4. CONTENT DESIGN

**Length:** 1 page — appropriately concise for what it covers.

**Structure:** The form follows a logical flow:
1. Patient demographics (name, DOB, last 4 SSN digits, address, phone)
2. Release/obtain direction with recipient/source fields
3. Purpose checkboxes (5 options)
4. Date range for records
5. Record type checkboxes (6 options)
6. Format preference (paper, CD, USB, email)
7. Disclosure statements ("Entiendo que:")
8. Signature block
9. Footer with facility DBA information

**Clarity of Spanish:** The translation is generally competent but contains some awkward phrasing and inconsistencies. For example:
- "Fecha(s) de tratamiento para ser divulgada(s)" is grammatically acceptable but reads stiffly.
- "introduzca fecha(s) específica(s)" uses a formal register ("introduzca") that may not be the most natural choice for a general patient audience.
- "Extracto de Historial Médico" translates "Medical Record Abstract" literally; "Resumen del Historial Médico" might be more natural.
- "Dada de Alta" appears to be a typo — should be "**Dada** de Alta" or more correctly "**Alta**" / "Resumen de Alta" (the English version says "Discharge Summary").

**Layout:** The form is dense but manages to fit everything on one page. The disclosure section uses a mix of plain paragraphs and bullet points (•), creating some visual inconsistency. Font size appears adequate based on the text density relative to page count.

**Assessment:** Reasonably well-organized for a single-page form. The Spanish translation has minor quality issues that could confuse some readers, and the density means limited whitespace.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose** authorization form. The first checkbox option reads "Se divulgue mi información de salud a:" with the parenthetical "(Yo mismo o el Nombre y Dirección del Beneficiario– Especifique: Abogado, Aseguranza, etc.)" — "Yo mismo" (myself) is listed as an option, so patients can use it for personal access. However, it is not a dedicated patient-access form.

**Purpose options:** Five checkboxes — "Cuidados Adicionales," "Legal," "Aseguranza," "Pagos o Facturación," "Uso Personal." The "Uso Personal" option supports patient access. Notably, the English form includes a sixth option — "Social Security/Disability" — that is **missing from the Spanish form**.

**Record type options:** Six checkboxes covering lab reports, imaging, ER records, billing, other, and a medical record abstract. Patients can specify date ranges.

**Format options:** Paper copies, CD, USB flash drive, or electronic file via email. The email option includes a disclosure about encryption: "Los registros serán enviados por correo electrónico de manera segura/cifrada a menos que se instruya de otra manera."

**HIPAA Right of Access:** No explicit reference to HIPAA § 164.524 or the patient's right of access. The form references "reglamentos federales de privacidad" (federal privacy regulations) and "ley y reglamentos Federales y Estatales" generally, but does not educate the patient about their rights.

**EHI Export:** No mention of electronic health information export or bulk data access.

**Assessment:** The form accommodates patient access as one use case among many but does not center it. The inclusion of "Uso Personal" and electronic delivery options is positive. The lack of HIPAA rights language and the missing purpose option (vs. the English version) are gaps.

## 6. COMPLIANCE

**Authorization validity:** "esta autorización permanecerá vigente por noventa (90) días después de la fecha grabada líneas abajo." A 90-day expiration is reasonable for a release authorization.

**Revocation:** Clear language that the authorization can be revoked in writing to the HIM Department at any time.

**No-conditioning statement:** "no tengo que firmar esta autorización para recibir tratamiento, pago, ni para ser elegible para beneficios" — properly states that signing is not a condition of treatment.

**Sensitive information disclosure:** The form warns that records may include alcohol/drug abuse, psychiatric/mental health, STD, and HIV/AIDS information, and states the patient "puedo limitar la divulgación de este tipo de información" — but provides no mechanism on the form to actually limit it (no opt-out checkboxes for sensitive categories).

**Liability waiver:** "La instalación por el presente es liberada y descargada de cualquier responsabilidad, y encontrará la instalación sin perjuicio por cumplir con esta autorización." This hold-harmless clause is standard but potentially intimidating.

**Photo ID requirement:** Unlike the English form-1 which includes a "Photo ID was provided: □Yes □No" section, the Spanish form entirely omits this. This is a meaningful content discrepancy between versions.

**No fee disclosure:** The form does not mention any fees or costs associated with records requests.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Content discrepancies between English and Spanish versions suggest the Spanish form is not maintained equally.** The English form (08/2018) includes a "Social Security/Disability" purpose checkbox, a "Photo ID was provided" section, and a "Relationship to patient" field — all absent from the Spanish form (05/2017). Spanish-speaking patients receive a materially different (and older) form, which could result in different procedural requirements being applied based on language.

### ⚠️ AMBIGUITIES

- **Sensitive information limitation is mentioned but not operationalized.** The form states "puedo limitar la divulgación de este tipo de información" (I can limit the release of this type of information) regarding substance abuse, psychiatric, STD, and HIV records, but provides no checkboxes or mechanism to exercise this right on the form itself. A patient reading this would not know how to limit the release.
- **"Extracto de Historial Médico" is an unusual translation** for "Medical Record Abstract" and may not be immediately understood by all Spanish-speaking patients.

### ❌ ERRORS

- **"Dada de Alta"** appears to be a typo in the medical record abstract description — the phrase "Resumen de Dada de Alta" is grammatically incorrect. The English version correctly says "Discharge Summary," which should translate to "Resumen de Alta" or "Resumen del Alta."
- **Form date discrepancy:** Form 131S is dated 05/2017 while the English Form 131 is dated 08/2018, confirming the Spanish version was not updated with the English revision.

### ✨ BRIGHT SPOTS

- **Multilingual availability itself is noteworthy.** Many organizations in this study provide only English-language forms. Maury Regional Health provides a dedicated Spanish-language form linked alongside the English version on their medical records page — a meaningful accessibility effort for their patient population.
- **Electronic delivery option with encryption disclosure.** The form offers email delivery and proactively discloses that records will be sent encrypted by default ("de manera segura/cifrada a menos que se instruya de otra manera"), which is a thoughtful security practice.
- **Multiple format options** (paper, CD, USB, email) give patients flexibility in how they receive records.
