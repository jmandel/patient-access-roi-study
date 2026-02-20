# Broward Health — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is the **Spanish-language translation** of Broward Health's Authorization for Release of Confidential Medical Information ("AUTORIZACIÓN PARA LA DIVULGACIÓN DE INFORMACIÓN MÉDICA CONFIDENCIAL"). It is one of four versions of the same ROI form offered in different languages:

- **form-1.pdf** — English (image-only scan, no text layer, 463 KB)
- **form-2.pdf** — Spanish (this form; digitally created, text layer present, 91 KB)
- **form-3.pdf** — Haitian Creole (digitally created, text layer present, 78 KB)
- **form-4.pdf** — Portuguese (digitally created, text layer present, 93 KB)

All four share the same form number (H-1007 - 119550 - (R) 8/2014) and identical structural layout. The Spanish version is a direct translation of the English original. Notably, the three non-English translations are digitally created PDFs with extractable text, while the English original is an image-only scan — suggesting the English form is an older artifact that was never re-digitized.

This is a **general-purpose ROI/authorization form**, not a form specifically designed for patients requesting their own records under HIPAA's Right of Access.

## 2. FINDABILITY

According to retrieval notes, the form was found on a dedicated **Medical Records Request page** at `https://www.browardhealth.org/patients-and-visitors/information-request/medical-records-request`, reachable in approximately **3 clicks** from the homepage (Patients and Visitors → Information Request → Medical Records Request). The page links to ROI forms in all four languages, which is a well-organized approach.

However, **Cloudflare bot protection** blocked direct `curl` downloads, requiring browser-based retrieval. Additionally, the URL for the English form was case-sensitive, causing failures with the lowercase variant. The Spanish form URL (`roi_spanish.ashx`) used lowercase and worked without issue.

Broward Health also offers an **online request option** via a third-party service (Swellbox), which is a notable alternative to the PDF form.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (5,587 characters). This is a significant advantage over the English version (form-1), which is image-only.
- **Fillable fields**: **Zero**. Despite being a digitally created PDF with 10 embedded fonts, the form has no interactive form fields. All blanks are represented as underscores in the text layer (e.g., `______________________`), requiring the patient to print, hand-fill, and scan or fax.
- **File size**: 90,670 bytes (91 KB) for a single page — reasonable.
- **Page count**: 1 page.
- **Digital-first design**: The form is digitally typeset (not a scan), but it is designed as a **print-and-fill document**, not a digital-first form. There is no mechanism to complete it electronically.
- **Encoding defects**: The bottom of the form contains **garbled text** from an encoding/font issue. The expiration clause renders as mojibake: `([FHSWR\u0003FXDQGR\u0003VH\u0003OD\u0003UHYRTXH\u0003GH\u0003RWUD\u0003PDQHUD...` — this appears to be text encoded with a symbol or wingdings-style font substitution that `pdftotext` cannot decode. The same issue affects the witness signature label. Comparing with the Creole version (form-3), which renders cleanly as "Amwenske yo anile li, otorizasyon sa a pral ekspire sis mwa apatide dat yo siyen l pi ba a" (a six-month expiration clause), the garbled Spanish text likely conveys the same expiration statement.

## 4. CONTENT DESIGN

**Structure and organization**: The single-page form is densely packed but follows a logical order:
1. Medical record number and facility fields at top
2. Sensitive record classification checkboxes (drug/alcohol, mental health, HIV/AIDS, genetic)
3. Patient demographic information (name, address, DOB, phone)
4. Authorization statement with recipient designation ("YO" for self, "OTRA PERSONA" for others)
5. Delivery method options
6. Purpose of release
7. Date range for records
8. Detailed record type checklist
9. Patient rights notifications (four bullet points with ×-marks)
10. Signature block (patient, Broward Health authorized, witness)

**Language**: The form is written in Spanish at a moderately complex level. Legal concepts are translated but retain formal register — e.g., "Comprendo que, según la ley de Florida, la clasificación de los registros marcados anteriormente..." This is functional but not plain-language.

**Record type options**: The form offers a detailed checklist including: complete medical record, history & physical, discharge summary, consults, operative report, lab reports (with date range), radiology reports (with date range), problem list, pathology report, physician progress notes, physician orders, physical therapy records, nursing notes, photos, and media interviews. This is a thorough set of options.

**Delivery format options**: Limited to "formato papel" (paper) or "CD encriptado" (encrypted CD). No mention of electronic delivery via email, portal, or other modern means.

**Layout**: The form crams substantial content onto a single page, which makes it dense. The footer includes internal routing codes ("WHITE - MEDICAL RECORD" / "CANARY - PATIENTS") and form number "900408", indicating this is also used as a physical multi-part form.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form serves dual purposes. It includes a "YO" (self) option for patients requesting their own records, alongside "OTRA PERSONA" (other person) for third-party disclosures. However, there is **no differentiation in process, rights, or fees** between these two fundamentally different use cases under HIPAA.

**Scope options**: Good — patients can specify date ranges, select from a detailed list of record types, and request the complete record with exclusions.

**Format options**: Limited and outdated. The only choices are paper or "CD encriptado" (encrypted CD). There is no option for electronic delivery via email, patient portal, or other digital means. Encrypted CDs were a reasonable option circa 2014 when this form was last revised, but are now obsolete.

**HIPAA Right of Access reference**: The form references **CFR 164.524** in the context of inspecting or copying records: "Comprendo que puedo inspeccionar o copiar la información que se divulgará, según se estipula en CFR 164.524 (con un cargo razonable)." This is a positive inclusion, though it frames the right in terms of "reasonable charge" without specifying that fees for patient access are limited under HIPAA.

**Minimum necessary concern**: The form states "Comprendo que Broward Health divulgará solo la cantidad mínima de información necesaria para cumplir una solicitud." Under HIPAA, the **minimum necessary standard does not apply** to disclosures requested by the individual about their own records (45 CFR § 164.502(b)(2)(v)). Applying this standard to patient self-requests could result in patients receiving less than what they are entitled to.

**Online alternative**: The notes mention a Swellbox-based online wizard at `https://www.swellbox.com/broward-health-wizard.html`, which provides a web-based alternative. However, this is not referenced on the PDF form itself.

## 6. COMPLIANCE

- **Witness requirement**: The form requires a **witness signature** in addition to the patient's signature and a Broward Health authorized signature. A witness requirement is not mandated by HIPAA for patient access requests and creates an additional barrier — patients must find someone to witness their signature.
- **Six-month expiration**: The authorization expires six months from the date of signature (inferred from the garbled text, confirmed by comparing with the Creole version which states "sis mwa" / six months). This is a standard timeframe and not unreasonable.
- **No conditioning on treatment**: The form explicitly states that Broward Health will not condition treatment, payment, or benefits eligibility on signing: "los centros de Broward Health no basarán el tratamiento, el pago o la elegibilidad respecto de los beneficios en mi decisión de autorizar o no."
- **Revocation rights**: Clearly stated — the patient can revoke authorization at any time in writing to the Medical Records Department.
- **Re-disclosure warning**: Present — informs the patient that disclosed information may be re-disclosed by the recipient and no longer protected.
- **Sensitive records classification**: The form appropriately separates authorization for drug/alcohol treatment, mental health, HIV/AIDS, and genetic records, requiring separate initials for each category per Florida law requirements.
- **Submission methods**: The notes indicate submission is via fax to specific facility numbers. The form itself does not specify submission instructions.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature requirement**: The form requires a witness signature, which is not required by HIPAA for patient access and creates a logistically unnecessary barrier — particularly for patients completing the form at home.
- **Minimum necessary applied to patient self-requests**: The statement "Broward Health divulgará solo la cantidad mínima de información necesaria para cumplir una solicitud" applies the minimum necessary standard universally, including to patient self-requests where HIPAA explicitly exempts it (45 CFR § 164.502(b)(2)(v)). This could lead to patients receiving incomplete records.

### ⚠️ AMBIGUITIES

- **No submission instructions on the form**: The form does not indicate where or how to submit it (fax numbers, mailing address, email, etc.). Patients must refer to the website for facility-specific fax numbers.
- **"CD encriptado" without explanation**: The form offers encrypted CD as a delivery option but provides no information about how the patient would access the encryption key or what software is needed.

### ❌ ERRORS

- **Garbled expiration clause**: The text encoding of the expiration statement near the bottom of the form is completely unreadable in extracted text: `([FHSWR\u0003FXDQGR\u0003VH\u0003OD\u0003UHYRTXH...`. This appears to render correctly in the visual PDF (based on comparison with working translations in other language versions), but it indicates a font-encoding problem that would affect screen readers, text search, and accessibility tools.
- **Form revision date of 8/2014**: The form has not been updated in over 11 years. The delivery options (paper or encrypted CD) reflect 2014-era technology. No mention of electronic delivery methods that have become standard.

### ✨ BRIGHT SPOTS

- **Multilingual availability**: Offering the same form in four languages (English, Spanish, Haitian Creole, Portuguese) is exceptional and serves Broward County's diverse population. Few healthcare organizations provide forms in more than two languages, and inclusion of Haitian Creole and Portuguese specifically reflects local community demographics.
- **Detailed record type checklist**: The form provides a granular list of specific record types patients can request, including date-range options for lab and radiology reports, which gives patients meaningful control over the scope of their request.
- **Online alternative available**: The Swellbox-based web wizard provides a modern alternative path for patients who cannot or prefer not to use the PDF form.
