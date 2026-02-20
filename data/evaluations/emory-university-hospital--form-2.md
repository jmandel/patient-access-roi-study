# Evaluation: Emory University Hospital — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 4-page legacy/older ROI authorization package (filename: `roi-medical-records-form-9-28.pdf`, 968 KB). It bundles four distinct components into a single PDF:

1. **Authorization form** (pages 1–2): The core "Authorization for the Release of Protected Health Information" — the same content area as the current form-1.pdf but in an earlier version.
2. **E-Delivery instructions** (page 3): "Instructions for Making an E-Delivery Records Request" directing patients to the Emory Healthcare website.
3. **Release of Information Policies & Patient Fee Sheet** (page 4): Policies, fee schedule, and a secondary signature block acknowledging the fee structure.

This form appears to be an earlier version of the authorization package, now superseded by form-1.pdf (revised November 2025). The current medical records page links to separate documents for authorization, fee sheets, and e-delivery instructions rather than this combined PDF. Notably, this form has 99 fillable fields in its metadata, suggesting a robust interactive form, though pdftotext extraction only captures the static text portions (pages 2–4), with the main authorization fields on page 1 largely invisible in the text extraction.

Within the Emory suite: form-1.pdf is the current English authorization, form-3.pdf is the current Spanish version, and form-4.pdf is an amendment request form. Form-2.pdf is this legacy combined package.

## 2. FINDABILITY

According to the retrieval notes, this form was found via web search for "Emory Healthcare medical records release form authorization PDF" — the search surfaced this older PDF URL alongside the current form. It was **not** prominently linked from the current medical records page (which now links to the November 2025 revised forms). The URL path (`/medical-records/roi-medical-records-form-9-28.pdf`) suggests it was last updated around September 2028 (or more likely September 2022, given the `9/22` revision code visible in the Spanish version — "NONCH35557 9/22"). The file remains accessible on the Emory web server but appears to be an orphan — still reachable by direct URL but no longer actively linked from the main navigation. A patient searching the web could land on this older version rather than the current one.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present (`has_text_layer: true`, `is_image_only_scan: false`). However, the text extraction is incomplete — the 99 fillable form fields on page 1 do not appear in the extracted text. The extracted text (4,514 characters) primarily captures pages 2–4.

**Fillable fields**: The metadata reports 99 fillable fields but with an empty `fillable_field_names` array, meaning the field names are not enumerable from the metadata extraction. This is a significant count suggesting a thorough interactive form with checkboxes for facilities, record types, delivery methods, and text input fields for patient demographics.

**File format**: At 968 KB for 4 pages with 1 embedded image and 12 fonts, this is a moderately sized PDF. The presence of a "RESET" button in the extracted text confirms it is a fillable/interactive PDF form.

**Digital-first design**: This appears to be a digitally authored form (not a scan), with interactive fields, a reset button, and structured layout. However, it is designed as a "print-and-sign" form — the signature block at the bottom of page 4 ("Patient/Representative Signature" with a line) requires a wet signature, with no mention of electronic signature capability.

## 4. CONTENT DESIGN

**Length**: Four pages is substantial for an ROI authorization, but this bundles three distinct documents (authorization, e-delivery instructions, fee sheet) into one package. The authorization content itself spans approximately 2 pages, which is reasonable.

**Clarity**: The language is a mix of plain English and legal phrasing. The e-delivery instructions on page 3 are clear and actionable: "Click on the 'Medical Records-Release of Information' link at bottom right of page." The policies section on page 4 uses numbered points that are easy to follow. However, the authorization language on page 2 includes dense legal passages, particularly the HIV/AIDS/substance abuse waiver: "If the health information that I have requested Emory Healthcare to disclose contains any information related to certain infectious diseases (including, without limitation, HIV/AIDS confidential information), substance abuse and/or mental health, I consent to the disclosure of such information..."

**Organization**: The bundled structure has a logical flow — authorization first, then how-to instructions, then policies/fees. However, requiring a patient to read through and sign both the authorization (pages 1–2) and the fee acknowledgment (page 4) creates a two-signature workflow within a single document.

**Fee transparency**: The fee schedule on page 4 is detailed and specific:
- Electronic format (CD, Flash Drive, Electronic Website): **$6.50 flat fee** plus sales tax and actual postage
- Paper format: **$0.07 per page** plus $0.90 labor cost, $0.05/page supply cost, actual postage, and sales tax
- Certification fee: **$9.70**
- Radiology Film CD: **$25 flat fee**
- Continued Patient Care: **No cost** for abstract sent directly to a healthcare provider

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The text extraction does not clearly distinguish between patient self-access and third-party release scenarios. The form appears to be a general-purpose authorization covering both use cases — "releasing it to the party or parties authorized above" suggests the recipient could be anyone, including the patient.

**Scope options**: Based on the 99 fillable fields and the record-type descriptions visible in the Spanish version (form-3.pdf, which appears to share the same structure), the form likely offers granular scope options including: complete medical record, partial record, continuity of care/abstract, H&P, consultations, discharge summary, lab results, X-rays, CD/films, cath reports, itemized bill, office notes/progress notes, operative reports, pathology reports, ECG reports, photographs/videos, ER reports, and ECG strips — with date fields for each.

**Format options**: Multiple delivery formats are mentioned: e-mail (encrypted), CD, flash drive, and an electronic website. The e-delivery instructions on page 3 point patients to "www.emoryhealthcare.org" to make electronic requests. Unlike the current form-1.pdf, this version does **not** mention "EHI Export" or "USB Drive" as distinct delivery options — those appear to be additions in the November 2025 revision.

**Revocation rights**: Clearly stated: "I understand that I have a right to revoke this authorization at any time. I understand that if I revoke this authorization, I must do so in writing and present my written revocation to the Medical Records Department(s)..."

**Expiration**: The extracted text for this form does not include an expiration clause (though the Spanish version shows a 90-day default expiration — "esta autorización caducará a los noventa (90) días posteriores a la firma de esta autorización"). If this legacy form lacks an explicit expiration field, that is a design gap.

## 6. COMPLIANCE

**Fee structure**: The fees listed ($6.50 flat electronic, $0.07/page paper) appear to be within the range permissible under HIPAA for patient-directed copies. However, the form does not distinguish between fees for patient self-access (which HIPAA limits to reasonable cost-based fees) and third-party release fees. The $0.90 labor cost and $0.05/page supply cost add-ons for paper copies add complexity.

**Signature requirement**: The form requires two signatures — one on the authorization (page 2) and one on the fee acknowledgment (page 4): "By signing below, I acknowledge that I have read the above procedures regarding the release of medical records." Requiring fee acknowledgment as a precondition is not itself a HIPAA violation, but bundling it into the authorization flow creates friction.

**Authorization dating restriction**: Policy item 3 states: "All authorizations must be dated after discharge and signed by the patient, unless he/she is a minor, deceased, physically and/or mentally impaired, or has appointed a Durable Healthcare Power of Attorney or has a court appointed guardian." This requirement that the authorization be **dated after discharge** could create a barrier for patients requesting records for ongoing or outpatient care, or those who want to pre-authorize release.

**Vendor disclosure**: The form transparently notes: "In order to process requests for release of medical records on its behalf, Emory Healthcare has contracted with a vendor that is subject to HIPAA privacy and confidentiality requirements."

**Processing timeline**: "your request for information will be submitted for processing within 24 to 48 hours after receipt and delivered by mail or electronic (eDelivery) within 7 to 10 business days." This is within HIPAA's 30-day window.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"All authorizations must be dated after discharge"** (Policy item 3) — This requirement could prevent patients from requesting records during an ongoing episode of care or for outpatient visits. HIPAA does not impose such a limitation on patient access requests. A patient receiving outpatient treatment should not need to wait for "discharge" to request their records.
- **Mandatory fee acknowledgment signature** — Requiring a separate signature on page 4 acknowledging fees before processing the request adds an extra barrier. HIPAA allows reasonable fees but does not permit conditioning access on upfront fee acknowledgment.
- **Fees charged for patient self-access without distinguishing from third-party requests** — The fee schedule applies uniformly regardless of whether the patient is requesting their own records or authorizing third-party release. For patient access under HIPAA § 164.524, fees are limited to reasonable cost-based amounts, and the form does not clarify this distinction.

### ⚠️ AMBIGUITIES

- **"CD or flash drive you receive containing your medical health information may not be encrypted or password protected"** — This warning about unencrypted physical media is unusual and raises questions about why the organization would deliver PHI on unencrypted media rather than implementing encryption as a standard practice.
- **Orphaned document status** — This form is still accessible via direct URL but no longer linked from the medical records page. It is unclear whether Emory would still accept this version. A patient who finds it via search could submit an outdated form and face rejection or delays.

### ❌ ERRORS

- **Page 1 text extraction failure** — The core authorization form fields on page 1 (patient demographics, facility checkboxes, record types, recipient information) do not appear in the text extraction despite 99 fillable fields being detected. This means the most important page of the form cannot be evaluated from text alone. This is a technical limitation of the metadata extraction rather than a form defect, but it limits the depth of this evaluation.
- **Likely outdated e-delivery instructions** — Page 3 directs patients to "Click on the 'Medical Records-Release of Information' link at bottom right of page" on www.emoryhealthcare.org. Given the website has likely been redesigned since this form was published, these navigation instructions may no longer be accurate.

### ✨ BRIGHT SPOTS

- **Bundled informational package** — Combining the authorization, e-delivery instructions, and fee schedule into a single PDF is a patient-friendly design choice, ensuring the patient has all relevant information in one download rather than needing to find multiple documents separately.
- **Transparent and detailed fee schedule** — The fee breakdown is specific and itemized, including the notable "$0.00" for continued patient care abstracts. This level of detail helps patients understand costs upfront.
- **Vendor transparency** — Explicitly disclosing the use of a third-party vendor for records processing, while noting the vendor is HIPAA-compliant, is a transparency practice that many organizations omit.
