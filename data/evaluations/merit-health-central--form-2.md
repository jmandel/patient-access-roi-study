# Merit Health Central — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **Spanish-language version** of the "Patient Request for Health Information" authorization form, identified as **HIM-1406S** (the "S" suffix denoting Spanish). It is a direct translation of form-1.pdf (HIM-1406, the English version). Both forms share the same revision history: "04/18 (Rev. 08/18, 01/20, 02/20, 06/21, 11/23)", indicating they are maintained in parallel. The footer labels the document "Patient Request for Health Information (SP) (iPDF)," confirming it is the Spanish ("SP") interactive PDF variant of the same form.

Both forms are published by the Merit Health system (part of Community Health Systems/CHS) and appear to be system-wide standardized documents rather than facility-specific creations.

## 2. FINDABILITY

According to the retrieval notes, this form was **easy to find**. A web search for Merit Health Central's authorization form immediately led to the dedicated "Request Medical Records" page at `https://www.merithealthcentral.com/request-medical-records`. The page provides clearly labeled "English" and "Spanish" download links for the authorization form. The source URL (`/Uploads/Public/Documents/all-new-documents/HIM-1406S.pdf`) is reasonably descriptive — the filename includes the form number and "S" for Spanish.

The fact that the Spanish version is presented **alongside** the English version on the same page (rather than buried on a separate page or requiring navigation) is a positive findability signal. The page also offers an alternative online request process via Swellbox and includes a FAQ section addressing common questions about authorization, charges, and who can request records.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and functional. The full Spanish text is extractable (3,023 characters), confirming this is not a scanned image.

**Fillable fields**: The form has **66 fillable fields**, matching the English version exactly. This is a genuinely interactive PDF ("iPDF" per the footer label), meaning patients can type directly into fields, check boxes, and complete the form digitally before printing/submitting. The field names list is empty in the metadata, which may indicate the fields lack descriptive programmatic names (reducing screen reader accessibility), but the field count itself is robust.

**File size**: At 284,813 bytes (278 KB) for a single-page form, this is noticeably larger than the English version (102,982 bytes / 101 KB) — roughly 2.8× the size. This is likely due to additional font embedding required for Spanish-language characters or different font subsets. Still, 278 KB is a reasonable size for a fillable PDF.

**Digital-first design**: This appears to be a natively digital document, not a scan. Zero embedded images, 6 fonts, and a clean text layer all indicate it was authored in a PDF design tool. The "(iPDF)" designation in the footer confirms intentional interactive design.

## 4. CONTENT DESIGN

**Length**: One page. This is impressively compact for the amount of content covered — patient demographics, facility identification, record type selection, sensitive information consent, delivery method preferences, recipient designation, and signature block all fit on a single page.

**Structure and organization**: The form follows a logical top-to-bottom flow:
1. Patient information (name, DOB, phone, email, address)
2. Facility identification ("Solicito mis registros a:")
3. Record type selection with checkboxes (progress notes, ER records, discharge summary, H&P, consults, labs, pathology, operative notes, imaging, entire record, fetal heart monitor strips, plus free-text "Otros")
4. Sensitive information disclosure opt-ins (alcohol abuse, drug abuse, communicable diseases/HIV, genetic testing, psychiatric/behavioral)
5. Delivery method selection (paper, email, removable media, mail, pick up in person)
6. Recipient designation (self, personal representative, third party)
7. Signature block (patient/representative, witness, interpreter)

**Language quality**: The Spanish translation reads naturally and uses appropriate medical/legal terminology. Field labels like "Información del paciente (en letra imprenta)" and "Fecha de nacimiento (MM/DD/AAAA)" are clear. The email risk disclaimer is fully translated: "Entiendo que existe un riesgo para mí cuando mi información se transmite a través de un sistema de correo electrónico no seguro y que un tercero podría acceder a la información durante el proceso de transmisión."

**Readability**: Given the single-page format with 66 fillable fields, the layout is necessarily dense. However, the logical grouping and use of checkboxes help manage the density.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is explicitly titled "Patient Request for Health Information" and is clearly designed for patient-initiated requests, not third-party releases. The recipient options ("A mí / Representante personal / Otro tercero") place the patient's own request first.

**Scope options**: Patients can specify:
- Date range for records ("Fecha(s) de servicio: ____/____/________ hasta ____/____/________")
- 12 specific record types via checkboxes, plus a free-text "Otros" field
- Whether to include sensitive information categories (5 opt-in checkboxes)

**Format/delivery options**: The form offers five delivery methods:
- "Impreso" (Paper)
- "Correo electrónico" (Email) — with risk acknowledgment
- "Medios extraíbles" (Removable media: DVD, USB, CD-ROM) — with password-protected/unprotected options
- "Correo postal" (Mail)
- "Lo recogeré en persona" (Pick up in person)

This is an unusually comprehensive set of delivery options.

**HIPAA acknowledgment**: The form includes: "Este centro de atención médica reconoce el derecho del paciente bajo la ley HIPAA a acceder a copias de su información médica." This is a clear, plain-language statement of the patient's right of access. However, it does not cite the specific regulation (45 CFR § 164.524).

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

**Multilingual access**: The very existence of this form is a patient-centeredness feature — providing a Spanish translation of the full authorization form addresses a significant access barrier for Spanish-speaking patients.

## 6. COMPLIANCE

**Fee disclosure**: The form states: "Puede haber cargos asociados con el procesamiento de una solicitud y la producción de los registros solicitados." This is vague — it acknowledges fees may exist without specifying amounts or referencing HIPAA fee limits. This is neither a red flag nor a bright spot; it is typical hedging language.

**No notarization required**: The form requires only a signature, witness signature, and optional interpreter signature — no notarization.

**No in-person-only submission**: The form does not restrict how it may be submitted. It implies print-and-sign but does not mandate in-person delivery.

**Authorization expiration**: No expiration period is stated on the form, meaning there is no unreasonably short auto-revocation period. However, the absence of any expiration language could be considered an omission.

**Sensitive information handling**: The form properly separates sensitive information categories (alcohol/drug abuse, HIV, genetic testing, psychiatric) into opt-in checkboxes, which aligns with 42 CFR Part 2 requirements for substance abuse records and state-level protections for other sensitive categories.

**Consent bundling**: The form does not bundle records release with any unrelated authorizations. It is a single-purpose authorization form.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Spanish-language availability**: Providing a fully translated, equally functional Spanish version of the ROI form — with 66 identical fillable fields — is a genuine accessibility achievement. Many organizations offer English-only forms, creating a barrier for Spanish-speaking patients. The form is linked with equal prominence on the same page as the English version.

- **Comprehensive delivery options**: Offering five delivery methods including email, removable media (with password protection options), mail, paper, and in-person pickup goes well beyond what most organizations provide. The removable media option with password protection is particularly thoughtful.

- **Patient-access framing**: The form title ("Patient Request for Health Information") and structure place the patient's own request as the primary use case, with third-party release as a secondary option. This is better than the common pattern of a generic "Authorization for Release" form that treats the patient as just another requester.

- **Interactive PDF with 66 fields**: The form is genuinely fillable with a high field count, indicating comprehensive digital interactivity rather than a flat PDF with a few token form fields.

### ⚠️ AMBIGUITIES

- **Fee language is vague**: "Puede haber cargos asociados con el procesamiento de una solicitud y la producción de los registros solicitados" does not specify fee amounts, fee schedules, or the patient's right to receive records even if fees are disputed. A patient reading this might believe they must pay before receiving records.

- **Submission method unclear**: The form does not explain how or where to submit the completed authorization — no fax number, email address, mailing address, or portal link for submission appears on the form itself. Patients must presumably navigate back to the website or call the facility.

### ❌ ERRORS

- **Fillable field names are empty**: Despite having 66 fillable fields, the metadata shows `fillable_field_names: []`. This suggests the interactive fields lack descriptive programmatic names, which degrades accessibility for screen readers and assistive technologies. Fields without names may be announced as "text field" or "checkbox" without context.

- **File size inflation**: At 278 KB, the Spanish version is 2.8× larger than the functionally identical English version (101 KB). This likely reflects inefficient font embedding rather than additional content, and while not a patient-facing issue, it suggests the PDF was not optimized.
