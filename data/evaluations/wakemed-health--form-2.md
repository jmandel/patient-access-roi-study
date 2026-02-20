# Evaluation: WakeMed Health & Hospitals — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is the **Spanish-language version** of WakeMed's "Authorization to Release Medical Information" form (document number **N-935S**, revised **11/25**). It is a 2-page PDF (76,260 bytes) that mirrors the English version (form-1.pdf, N-935, same revision date). WakeMed provides both versions linked from the same Health Information Management (HIM) page. The form serves as a general-purpose HIPAA authorization for both releasing and obtaining protected health information, covering patient-initiated requests as well as third-party disclosures.

The "S" suffix in the document number (N-935S vs. N-935) indicates this is the Spanish variant of the same form rather than an independent document.

## 2. FINDABILITY

Per the retrieval notes, the form was found on WakeMed's HIM page at `Patients and Visitors → Medical Records → Health Information Management (HIM)`. Both language versions are linked from the same page. The initial search required navigating a few levels of site hierarchy, and one older URL (`/assets/documents/...`) was stale and returned HTML rather than a PDF, though the current URL (`/sites/default/files/pdf/N-935S...`) worked correctly via direct download.

The fact that WakeMed provides a Spanish version at all is notable — many organizations offer only English. However, the form is only discoverable if a user navigates to the English-language HIM page; there is no indication from the notes that the Spanish form is linked from any Spanish-language site section.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — the PDF has selectable, extractable text (confirmed by `has_text_layer: true` and 6,061 characters of extracted text).
- **Fillable fields**: Zero (`fillable_field_count: 0`). The form uses text-rendered checkboxes ("o") and blank lines for data entry, requiring the patient to print and fill by hand.
- **Font count**: 4 fonts embedded.
- **Image count**: 4 embedded images (likely logos and the "Place Patient Label Here" box).
- **Not a scan**: `is_image_only_scan: false`.

The form is technically readable but not interactive. A patient cannot fill it digitally — they must print, complete by hand, and then submit via email, fax, or mail. This is a missed opportunity; the same limitation applies to the English version.

## 4. CONTENT DESIGN

**Structure**: The form is organized into clearly labeled sections across 2 pages:
- Page 1: Authorization direction (give/obtain), purpose, patient/recipient info, PHI specification (dates, record types), format, and delivery method.
- Page 2: Understanding (disclosures about sensitive info, revocation rights, treatment non-conditioning, re-disclosure risk, fees), Authorization/Acknowledgement (signature block), Revocation, and Contact Us.

**Purpose selection**: The form asks the patient to select a single purpose from: "Facturación/Seguros," "Atención al paciente," "Personal," "Legal," or "Otro." This is helpful for routing but could confuse patients who just want their own records — "Personal" is the closest match but isn't self-explanatory.

**Record type granularity**: The form provides a detailed breakdown of requestable records including office visits, urgent care, hospital admission/ED, op notes, consultations, immunizations, imaging studies, discharge summary, H&P, lab reports, and radiology reports. The hospital admission abstract is described as including "all" sub-items with an option to select separately — a nice structural choice.

**Imaging study note**: The form explains the PowerShare electronic sharing process and CD fallback, which is a practical and transparent detail.

**Translation quality issues**: Several field labels remain in English despite this being the Spanish version:
- "Address where you want your PHI sent to" (not translated)
- "Email address" (not translated)
- "Place Patient Label Here" (not translated)
- "Authorization to Release Medical Information" (header/footer, not translated)
- "REV. 11/25" and "PAGE 1 OF 2" / "PAGE 2 OF 2" (not translated)

The main body text is translated, but these untranslated fragments undermine the purpose of a Spanish-language form. A Spanish-speaking patient who cannot read English would encounter confusing gaps.

**Delivery methods**: Mail, Fax, Pick up, Onsite Review (by appointment), MyChart (for dates of service on/after 2/1/2015), and Email. The email option includes a transparency warning about encryption and an opt-out checkbox for unencrypted email.

## 5. PATIENT-CENTEREDNESS

**Dual-purpose form**: The form covers both "RELEASE" and "OBTAIN" (dar/obtener), meaning it is used for both patient access requests and third-party disclosures. This is a common design but can confuse patients who simply want their own records — they must navigate a form designed for a broader set of use cases.

**Fee disclosure**: The form mentions that "any and/or all" record requests and large-volume requests go to WakeMed's copy service and "a fee will be charged," but no specific fee amounts or fee schedule is referenced. This is vague.

**Expiration default**: If the patient doesn't specify an expiration date, the authorization expires after **90 days**. This is clearly stated on page 2.

**Revocation rights**: Clearly explained — must be in writing to the HIM Department.

**Treatment non-conditioning**: The form states "treatment will not be conditioned upon my completion of this authorization," which is appropriate and HIPAA-compliant.

**Sensitive information disclosure**: The form warns that released PHI "may include" information about psychological/psychiatric impairment, sexual assault, alcohol/drug abuse, communicable diseases including HIV/AIDS, genetic testing, and reproductive health. It does not provide granular opt-in/opt-out for these categories — it is a blanket acknowledgment.

**Submission options**: The form can be submitted via email (HIMROI@Wakemed.org), fax (919-350-1720), or mail to the HIM Department. A phone number for questions (919-350-8370) is provided. These contact details appear on both pages.

**Language accessibility**: The existence of a Spanish version is a positive step, but the incomplete translation diminishes its effectiveness for the target audience.

## 6. COMPLIANCE

- **No notarization required**: The form requires only the patient's signature (or personal representative's signature with explanation of authority).
- **No in-person-only submission**: Multiple remote submission channels are offered (email, fax, mail).
- **Fee mention without specifics**: The form warns about fees for large-volume requests but does not specify amounts or reference HIPAA's reasonable cost-based fee standard.
- **Broad sensitive-information acknowledgment**: Rather than offering granular consent for sensitive categories (which some state laws may require), the form uses a blanket "may include" statement.
- **Personal representative provisions**: The form includes fields for representative name, signature, and explanation of authority, which is appropriate.
- **90-day default expiration**: Reasonable and clearly communicated.
- **Re-disclosure warning**: Included, as required.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Untranslated fields in a Spanish form**: Key field labels like "Address where you want your PHI sent to" and "Email address" remain in English, as do the header/footer elements ("Authorization to Release Medical Information," "Place Patient Label Here," "PAGE 1 OF 2"). A monolingual Spanish speaker would struggle with these sections, undermining the form's purpose.
- **"Personal" purpose category is unclear**: A patient requesting their own records must select "Personal" from the purpose options, but this term is not explained. Other options like "Facturación/Seguros" and "Atención al paciente" could also seem applicable depending on context.
- **Fee language is vague**: The form states "se cobrará una tarifa por estos registros" (a fee will be charged) for large-volume requests but provides no fee schedule, cost estimate, or reference to HIPAA's reasonable cost-based standard.

### ❌ ERRORS

- **Inconsistent translation — mixed-language fields**: "Address where you want your PHI sent to" and "Email address" appear verbatim in English within the Spanish form. These are not formatting artifacts but substantive field labels that should have been translated.
- **Typo in Spanish text**: "solo con cita privia" should be "solo con cita previa" (prior appointment) — "privia" is not a Spanish word.

### ✨ BRIGHT SPOTS

- **Spanish-language availability**: WakeMed is one of few organizations in this study to offer a translated ROI form at all. This demonstrates attention to the needs of Spanish-speaking patients in the Raleigh, NC area.
- **Multiple delivery methods including email and MyChart**: Offering six delivery options (mail, fax, pick up, onsite review, MyChart, email) with an encryption transparency warning is unusually comprehensive.
- **Email submission of the form itself**: Providing an email address (HIMROI@Wakemed.org) for form submission removes a significant barrier — patients don't need to mail or fax the form.
- **Imaging study explanation**: The note about PowerShare electronic sharing with CD fallback is a practical, patient-friendly explanation of a process that is often opaque.
