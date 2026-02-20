# Evaluation: Joseph P. Addabbo Family Health Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This document is titled **"We're Listening"** ("Estamos Escuchando" in Spanish). It is **not** a Release of Information (ROI) or authorization form. It is a bilingual (English/Spanish) patient exit survey designed to capture reasons why a patient is transferring away from Addabbo Family Health Center.

The form is 2 pages. Page 1 presents three broad options:
- "You are or will be seeking medical services with another Provider?"
- "You have or will be moving within the next 3 months."
- "You are requesting your records for your Personal needs."

Page 2 provides more granular satisfaction-related checkboxes (12 options), including relocating, difficulty scheduling, unhappiness with providers, wait times, and hours of operation.

Both pages offer a comments field and an option to request a callback from the CEO ("Renee-Hastick-Motes").

**Relationship to other forms**: This organization has three downloaded forms. **Form-1** is the primary ROI form (OCA Official Form No. 960, the New York State standard HIPAA authorization). **Form-3** is a HIPAA Consent to Release form signed during patient registration. Form-2 (this document) is tangentially related to the records request process — it appears to be a companion document presented when a patient requests a transfer or record release, functioning as a retention/feedback tool rather than a legal authorization.

## 2. FINDABILITY

According to notes.md, this form was linked from both the **Medical Records page** (`/for-patients/medical-records/`) labeled "We're Listening form" and the **Patient Forms page** (`/for-patients/patient-forms/`). Its placement on the Medical Records page alongside the actual ROI form (form-1) could cause confusion for patients who are simply trying to request their records.

The form is hosted on a third-party platform (`pbformsonline.com`) using a JavaScript-based PDF viewer, which required inspecting browser DevTools network traffic to identify the actual PDF download URL. The source URL (`1745421042listening-postcard-updated-2.pdf`) suggests it was uploaded or last updated around April 2025 based on the Unix timestamp prefix.

Because this is not an ROI form, findability is less relevant to the study's core question. However, its co-location with the actual ROI form on the Medical Records page is notable.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 963,019 bytes (~963 KB) — large for a 2-page form with minimal content, suggesting embedded images or inefficient encoding.
- **Page count**: 2
- **Text layer**: Present — the form has extractable text, not an image-only scan.
- **Fillable fields**: 53 fields reported, which is surprisingly high for the apparent simplicity of the form (checkboxes, a couple of text lines, name, and phone number on each page/language section). This suggests the form was built with interactive form fields.
- **Font count**: 12 fonts — high for a simple survey form.
- **Embedded images**: 4 — likely logos or decorative elements.
- **Hosting**: Served through a JavaScript PDF viewer on `pbformsonline.com` rather than as a direct download link, creating a barrier for users trying to save or print the form.

The text extraction is clean and readable, indicating a well-formed PDF structure.

## 4. CONTENT DESIGN

**Structure**: The form is organized into two pages, each presenting the same content in English and Spanish side by side on the same page (top half English, bottom half Spanish). Page 1 has broad transfer reasons; Page 2 has detailed satisfaction checkboxes.

**Clarity**: The English text is straightforward and conversational. The framing "Our patients are most important to us" establishes a patient-centered tone. However, the form's purpose is somewhat ambiguous — it's unclear whether this is mandatory when requesting records or voluntary feedback.

**Redundancy**: Pages 1 and 2 both have the same header, comments section, and CEO callback option, creating duplication. The relationship between the two pages is not explained — a patient might not know they should fill out both, or whether they should choose one.

**Spanish translation quality**: The Spanish version contains multiple errors:
- **"ESCHUCHANDO"** — should be "ESCUCHANDO" (misspelling of "listening")
- **"sbuscando"** — should be "buscando" (misspelling of "seeking")
- Page 2 contains incomplete translations with English mixed in: "Not happy No estoy content con mi médico / proveedor" (English phrase left in, and "content" should be "contento")
- **"Unable to see my primary o puedo ver a mi médico primario"** — English left untranslated at the beginning
- **"No hay suficientes horas de retraso"** — "horas de retraso" (literally "delay hours") is an incorrect translation of "late hours"; should be something like "horas nocturnas" or "horas extendidas"
- **"difficil"** — should be "difícil" (missing accent, incorrect double 'f')

**Instruction text**: On page 2 in the Spanish section, "Por favor marque todos los que aplique" is adequate, but on page 1 in Spanish the instruction line reads "Please check all that apply:" — left untranslated in English.

## 5. PATIENT-CENTEREDNESS

This form does not serve a patient trying to access their health records. It serves the organization's interest in understanding why patients leave. While patient feedback is valuable, several aspects are concerning from a patient-centeredness perspective:

- **Gatekeeping risk**: If this form is presented as a prerequisite or companion to the records request process, it could function as an implicit barrier — making patients feel they must justify their request before receiving their records. HIPAA does not require patients to explain why they want their records.
- **Framing as "transfer"**: The form frames all records requests as a "transfer from" the organization, which presupposes that the patient is leaving. A patient may simply want a copy of their records while continuing care.
- **CEO escalation offer**: Offering to connect patients with the CEO ("Renee-Hastick-Motes") suggests a retention-oriented purpose. While this could be genuinely helpful for patients with complaints, coupling it with the records request process may feel coercive.

The bilingual format is a positive feature for the Far Rockaway, NY community, though the translation quality undermines its effectiveness.

## 6. COMPLIANCE

This document is not an authorization form and does not contain HIPAA authorization language, so standard compliance elements (right to revoke, voluntariness, expiration) are not applicable.

However, if this form is routinely presented alongside or as a condition of processing a records request, it could raise concerns under HIPAA's prohibition on conditioning treatment or record access on unrelated activities. The form asks patients to disclose their reasons for leaving and potentially share contact information for a CEO callback — neither of which is required for processing a records release.

The form does not collect any health information, signatures, or authorization language, so it does not function as a consent or authorization document.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Potential barrier to records access**: Placing this exit survey on the Medical Records page alongside the actual ROI form, and framing all records requests as a "transfer," risks creating the impression that patients must complete this survey to obtain their records. If this form is presented as a step in the records request workflow, it would be an illegitimate barrier under HIPAA.

### ⚠️ AMBIGUITIES
- **Unclear whether form is mandatory or voluntary**: Nothing on the form indicates whether completing it is required to process a records request, or whether it is optional feedback. Patients encountering this on the Medical Records page may assume it is required.
- **Relationship between Page 1 and Page 2 unexplained**: Two pages with overlapping but different content, no instructions on whether to complete one or both.

### ❌ ERRORS
- **Pervasive Spanish translation errors**: "ESCHUCHANDO" (should be "ESCUCHANDO"), "sbuscando" (should be "buscando"), "content" (should be "contento"), "difficil" (should be "difícil"), "horas de retraso" (nonsensical translation of "late hours").
- **Untranslated English in Spanish sections**: "Not happy" and "Unable to see my primary" left in English within the Spanish text on page 2. On page 1, "Please check all that apply:" appears untranslated in the Spanish section.

### ✨ BRIGHT SPOTS
- **Bilingual format**: Providing both English and Spanish on the same form is a positive accessibility feature for the community served, though execution is undermined by translation quality.
- **CEO accessibility**: Offering a direct line to the CEO for patient concerns, with name provided, suggests genuine organizational interest in patient feedback — even if coupling it with the records process is problematic.
