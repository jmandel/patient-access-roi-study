# Evaluation: JPS Health Network — form-3.pdf (HIE Revocation Form)

## 1. DOCUMENT IDENTIFICATION

**Document type:** HIE Revocation of Records Authorization Form — a single-page form that allows patients to cancel their consent for JPS Health Network's Health Information Exchange (HIE) to share their health records with other providers.

**Relationship to other forms found:** This is one of three forms downloaded from JPS Health Network's Patient Records page:

- **form-1.pdf** — The main ROI/Authorization & Request for Release of Information form (English). This is the actual records-release form. It is an image-only scan from 2018, with no text layer and no fillable fields.
- **form-2.pdf** — HIE Authorization Form, allowing patients to opt in to HIE sharing. A companion to form-3; structurally nearly identical in layout and language.
- **form-3.pdf** (this document) — HIE Revocation Form, allowing patients to opt out of / cancel HIE sharing.

Form-3 is **not an ROI form**. It does not authorize release of records to the patient or a third party. It is a consent-revocation instrument specific to HIE participation. Its presence on the Patient Records page is contextually appropriate (HIE is a records-sharing mechanism), but it serves a distinct purpose from the traditional ROI form (form-1).

## 2. FINDABILITY

The form was found on the Patient Records page at `https://jpshealthnet.org/patient-tools/patient-records`, reachable in approximately 2 clicks from the homepage (Patient Tools → Patient Records). It was listed under the "Health Information Exchange" accordion section with the link text "Revocation Form — English." A Spanish version is also available.

The source URL (`https://jpshealthnet.org/sites/default/files/2025-05/Patient-HIE-Revocation-Form.pdf`) uses a descriptive filename. The accordion structure on the Patient Records page organizes HIE-related forms separately from the main ROI form, which helps users distinguish purpose. However, the page itself does not provide a detailed description of what this revocation form does before the user downloads it — the link text alone ("Revocation Form — English") may not be self-explanatory to all patients.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. Full text (1,757 characters) is extractable via `pdftotext`. This is a meaningful improvement over form-1.pdf, which is an image-only scan.

**Fillable fields:** The metadata reports 9 fillable fields, though `fillable_field_names` is an empty array, meaning the fields exist but are unnamed. This makes programmatic form-filling harder but the form is at least interactive for manual use in a PDF viewer.

**File format:** PDF v1.7, 69,962 bytes (70 KB) for a single page with no embedded images and 3 fonts. This is a compact, well-constructed digital file — clearly designed digitally rather than scanned from paper.

**Digital-first design:** Yes. The clean text layer, embedded fonts, fillable fields, and small file size all indicate this was created as a born-digital PDF, likely from a word processor or form designer. This contrasts sharply with form-1.pdf (the actual ROI form), which is a 478 KB scanned image.

## 4. CONTENT DESIGN

**Length:** One page. Appropriate for the narrow scope of the form — revoking HIE consent requires minimal information.

**Clarity:** The form uses plain, direct language. Key sentences are readable:
- "I, the signer, am canceling the consent. The consent let JPS Health Network's Health Information Exchange (HIE) release my health records."
- "My request to cancel goes into effect when this signed form is processed."
- "This consent is for the HIE services. It does not cancel other consents to release records that I have given."

This is noticeably well-written — the language is straightforward, avoids jargon, and proactively clarifies scope limitations (HIE only, not other consents). The statement "I know HIE will not be able to access my records in the future" sets a clear expectation.

**Organization:** The form follows a logical flow: patient identification fields → consent revocation statement → signature block → representative/proxy definition → submission instructions. There are no unnecessary sections.

**Font and readability:** With 3 fonts and a clean layout (no embedded images), the form appears well-formatted. The text is likely rendered at a standard readable size.

**Processing time disclosure:** "The Data Integrity team takes up to 72 hours to complete the request" — setting a clear processing timeline.

## 5. PATIENT-CENTEREDNESS

**Purpose relative to patient access:** This form does not serve a patient trying to access their own records. It is specifically for revoking HIE consent. A patient visiting the Patient Records page seeking to obtain a copy of their medical records would need form-1.pdf instead.

**Scope:** Narrowly and appropriately scoped. The form explicitly states it applies only to HIE services and does not cancel other authorizations.

**Submission options:** The form provides three submission channels:
- **Mail:** Attn: Health Information Management, Data Integrity, 1500 S. Main Street, Fort Worth, Texas 76104
- **Fax:** 817-702-5700
- **Encrypted email:** him-dataintegrity@jpshealth.org

The availability of encrypted email submission is notable — this is a modern, convenient option that many healthcare organizations do not offer. This contrasts with the main ROI form (form-1), where the Patient Records page states "It is not possible to accept electronic transfer of this form at this time."

**Representative/proxy provisions:** The form includes a detailed definition of legally authorized representative/proxy, citing six categories rooted in Texas law (the Texas Consent to Medical Treatment Act). This is thorough and legally precise, though the paragraph is dense and may be difficult for some patients to parse.

## 6. COMPLIANCE

**No unreasonable barriers identified.** The form does not require notarization, in-person submission, or fees. It accepts email submission. The 72-hour processing window is reasonable.

**Prospective-only revocation:** The form states "I know my records were shared based on my old consent. My request to cancel goes into effect when this signed form is processed." This correctly communicates that revocation is prospective — it cannot undo past sharing. This is appropriate and compliant.

**No HIPAA Right of Access reference:** The form does not reference HIPAA § 164.524 or patient rights, but this is expected given that the form is not an ROI/access request form — it is an HIE consent revocation.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Plain-language drafting** is exemplary. Sentences like "I, the signer, am canceling the consent" and "I know HIE will not be able to access my records in the future" are clear and direct. The form avoids legalese while remaining legally precise.
- **Encrypted email submission** (`him-dataintegrity@jpshealth.org`) is offered as a submission channel — a digital-friendly option that many providers fail to offer even for their primary ROI forms. The irony is that this ancillary HIE revocation form offers email submission while JPS's actual ROI form (form-1) explicitly states electronic submission is not accepted.
- **Explicit scope limitation** — "This consent is for the HIE services. It does not cancel other consents to release records that I have given" — proactively prevents patient confusion about what the revocation covers.
- **Born-digital PDF** with fillable fields, text layer, and small file size (70 KB). A well-constructed digital document that contrasts favorably with the main ROI form's 478 KB image-only scan.

### ⚠️ AMBIGUITIES

- **Fillable field names are empty.** The metadata reports 9 fillable fields but with no field names, which may cause issues for screen readers or assistive technology that rely on form field labels for accessibility.
- **"Legally authorized representative/proxy" paragraph** is dense and may confuse patients. While legally thorough (citing six categories from Texas law), the block of text at the bottom of the form is stylistically inconsistent with the otherwise plain-language approach of the rest of the document.

### 🚩 RED FLAGS

- **The better-built form is the less important one.** Form-3 (this HIE revocation form) is a modern, fillable, text-searchable, email-submittable PDF — while form-1 (the actual ROI form patients need to request their records) is a 2018 image-only scan with no fillable fields and no electronic submission. This disparity suggests JPS modernized its HIE-related forms (updated May 2025) but has not applied the same treatment to its core ROI form, which is the document most patients actually need.
