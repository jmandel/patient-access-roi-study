# Riverside Community Hospital — Org-Level Synthesis

## Forms and Pathways Available

Riverside Community Hospital, an HCA Healthcare facility in Riverside, CA, provides three downloadable authorization forms for medical records release. **Form-2** (English, 1 page, 52 fillable fields) is the current official document, linked directly from the hospital's [medical records page](https://www.riversidecommunityhospital.com/patient-resources/medical-records). **Form-3** is a Spanish-language equivalent with identical structure and field count. **Form-1** is an older, 5-page non-fillable version hosted by a third-party ROI vendor (Legal Image) that is no longer linked from the hospital's website. The retrieval notes also mention a MyHealthONE patient portal and a Swellbox-based online request wizard, though the PDF forms remain the primary documented pathway.

## Patient Self-Access vs. Third-Party Release

Riverside Community Hospital does **not** offer a dedicated patient access pathway. All three forms are generic "Authorization for Release of PHI" documents designed primarily for third-party release of information. Form-2 does include a checkbox distinguishing "At the request of the individual" from "Other 3rd party recipient," but the form's overall structure still centers on designating a separate "Recipient" — a patient requesting their own records must awkwardly enter their own name and address as the recipient, with no guidance for this use case. There is no reference to HIPAA § 164.524 (right of access), no mention of the 30-day response deadline for patient access requests, and no distinction in fee treatment between patient access and third-party release. The form is a general-purpose HCA corporate template (HCA-840-00434), not something designed with the patient self-request experience in mind.

## Retrieval Experience

Finding the forms was **easy** — the medical records page is accessible within 1-2 clicks from the main website under Patient Resources. Both English and Spanish forms are directly linked as downloadable PDFs. No bot blocking, login walls, or JavaScript rendering issues were encountered. The only minor concern is that form-1 is served over HTTP (not HTTPS) by the third-party vendor, but this is not the primary form.

## Form Document Quality

Form-2 is technically strong. It is a genuinely digital-first, fillable PDF with 52 interactive fields — checkboxes, radio buttons, and text fields — all on a single page. A patient can complete the form on-screen without printing. The layout is organized into three clearly labeled sections (A: authorization details, B: marketing/PHI sale, C: signatures), with 16 granular record-type checkboxes plus an "All Pertinent Records" option. The language is formal and clinical but generally comprehensible. However, the single-page format makes the form quite dense, and there are no standalone instructions or guidance text on the form itself (unlike form-1's two-page instruction set). The USCDI release request option is a rare and forward-looking inclusion, though the technical jargon ("Requires Direct Address or National Provider Identifier") would be meaningless to most patients.

## Barriers and Compliance

No significant barriers were identified. No notarization or witness signature is required. Submission can be made by mail (to HCA's Nashville, TN processing center) or by fax, satisfying the baseline for electronic submission. The SSN field is present but marked optional. Fees are mentioned vaguely ("a reasonable copy fee") without specifying amounts or distinguishing patient access from third-party release. No response time commitment is stated. The centralized Nashville mailing address means local submission is not mentioned on the current form, though a patient could potentially submit in person at the hospital's HIM department.

## Notable Strengths

- **Spanish-language parity**: Form-3 is a fully equivalent Spanish version with the same 52 fillable fields — genuine language access for Riverside's majority-Hispanic community.
- **USCDI release option**: Rare among ROI forms and signals awareness of interoperability standards.
- **Multiple delivery formats**: Paper, electronic media, encrypted email, and unencrypted email (with risk disclosure).
- **52 fillable fields**: Among the most technically complete fillable forms observed.

## Notable Weaknesses

- **No dedicated patient access pathway**: Patients are funneled through the same generic authorization form used for insurance companies and attorneys.
- **No right-of-access language**: The form never informs patients of their HIPAA right to access their own records or the associated protections (fee limits, 30-day timeline).
- **Centralized processing**: All requests route to Nashville, TN — no local submission address on the current form.
- **Grammar error persists**: "obtain a copy the information" (missing "of") appears across all form versions.

## Overall Assessment

Riverside Community Hospital delivers a technically competent but patient-generic records request experience. The fillable PDF, Spanish-language version, and multiple delivery options represent genuine strengths. However, the organization treats patient self-access as just another type of third-party release, missing an opportunity to provide a streamlined, patient-centered pathway. A patient can get their records through this process, but they receive no guidance tailored to their situation and may not understand their rights. The overall experience earns a **B** — solid technical execution held back by a one-size-fits-all approach to records access.
