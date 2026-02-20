# Nevada Health Centers — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is a **general-purpose Release of Medical Information** form titled "Nevada Health Centers, Inc. — RELEASE OF MEDICAL INFORMATION." It is a single-page, bilingual (English/Spanish) authorization form with form ID "FD-ALL.012es," revised 7/25/2023. The document directs patients to the "Nevada Health Centers Support Services Department" at 4045 Spencer Street, Suite 105, Las Vegas, NV 89119.

This is one of three ROI-related forms found for the organization. Form-2 is a separate "Authorization to Share Information" form that lets patients designate persons/entities who may access their records on an ongoing basis. Form-3 is a WIC-specific variant of this same release form, customized with WIC clinic locations. Form-1 is the primary general-purpose release form and the one most relevant for a patient requesting their own records.

The form serves a **dual-purpose** design — it covers both patient-initiated requests and third-party releases, using a "To or From" directional checkbox rather than having separate forms for each scenario.

## 2. FINDABILITY

The form was **relatively easy to find**. A site-specific web search (`site:nevadahealthcenters.org authorization release medical records`) successfully identified the forms page at `https://www.nevadahealthcenters.org/forms/`. The forms page is described in the notes as "comprehensive" with multiple categories (General Forms, Dental Forms, Mammovan Forms, etc.), and the form is listed as "Release of Medical Information (English/Spanish PDF)."

Generic web searches (non-site-specific) did not surface this form — they returned results for other Nevada healthcare organizations instead. This suggests the form is findable only if a patient already knows to look on the NHC website.

The download URL (`/wp-content/uploads/2025/08/FD-ALL.012es-Release-of-Medical-Info-7-25-2023.pdf`) is reasonably descriptive, including the form ID, title, and revision date. However, the `/wp-content/uploads/` path and the `2025/08/` date folder (suggesting a recent re-upload of a 2023 document) are implementation artifacts that are not patient-meaningful.

## 3. TECHNICAL ACCESSIBILITY

This document has **significant technical accessibility problems**:

- **No text layer**: The PDF was created in Adobe Illustrator 27.7 as a vector graphic. All text is rendered as vector paths, not as font glyphs. `pdftotext` returns empty output, and the metadata confirms `has_text_layer: false`, `font_count: 0`, `fillable_field_count: 0`. This means the document is **completely inaccessible** to screen readers, text search, and copy-paste workflows.

- **No fillable fields**: There are zero interactive form fields. Every blank must be filled by hand after printing. This is a purely print-oriented document.

- **Not a scan**: The document is a clean vector graphic (not a scanned image), which makes the lack of a text layer especially unfortunate — the content is clearly machine-generated but the tool choice (Illustrator) destroyed text accessibility.

- **File size**: 410 KB for a single page is somewhat large, likely due to the vector path complexity of rendering all text as outlines.

- **PDF version**: 1.6, which is modern. The document is optimized and not encrypted.

- **Not tagged**: The PDF has no structural tags (`Tagged: no`), further undermining accessibility for assistive technologies.

The bilingual design (English and Spanish on the same page) is a positive intent, but the technical execution defeats the purpose for any patient relying on digital tools.

## 4. CONTENT DESIGN

**Length**: One page, which is appropriately concise for a release authorization. All content fits on a single letter-sized page without excessive compression.

**Layout and organization**: The form follows a logical top-to-bottom flow:
1. Header with organization name and contact info
2. Patient identification (name, DOB)
3. Direction of release ("To or From" with recipient details)
4. Record type selection (checkboxes)
5. Date range specification
6. Confidential information opt-in/opt-out
7. Reason for request
8. Revocation rights and expiration
9. Signature block
10. Office use section

**Bilingual presentation**: Each field label appears in English followed by Spanish in parentheses (e.g., "Patient name / Nombre del paciente"). This inline approach keeps the form to one page but makes both languages harder to read — the Spanish text is subordinated and interspersed rather than given equal prominence. By contrast, form-2 uses a full-page-per-language approach.

**Record type checkboxes**: The form offers six specific categories plus "Other": Medication List, Laboratory Results, Immunization Records, X-Ray, Provider Notes, Billing Records. This is a reasonable set but notably **lacks an "All records" option**, which could force a patient requesting their complete record to check every box plus write in the "Other" field.

**Confidential information section**: Uses a dual Yes/No checkbox structure for four sensitive categories: AIDS/HIV, behavioral/mental health, alcohol/drug, and social services. The framing "I DO / DO NOT authorize release of confidential information concerning" requires the patient to affirmatively opt in or out for each category. This is a legally cautious approach compliant with 42 CFR Part 2 and state law requirements for heightened consent.

**Readability**: Based on OCR output, the form uses clear, short sentences. The revocation paragraph is the densest block of text but is still relatively straightforward. Font size appears adequate for most content, though the bilingual compression likely reduces effective whitespace.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form uses a **single "To or From" checkbox** to handle both directions. While this is compact, it means there is no form specifically designed for patient access to their own records. A patient requesting their own records would check "To" (themselves) — but the form's language and structure are clearly oriented toward third-party release scenarios (providing a recipient's name, address, phone, and fax).

**No mention of patient rights**: The form does not reference HIPAA § 164.524, the Right of Access, or patient rights language of any kind. The revocation paragraph addresses the patient's right to revoke the authorization but does not mention the right to obtain one's own records.

**No electronic delivery option**: The form asks for recipient address, phone, and fax — but offers no email, patient portal, or electronic delivery option. The fax-centric design reflects a paper-era workflow.

**No mention of EHI export**: There is no reference to electronic health information, bulk data export, or any digital format options.

**Scope options**: The form does allow date range specification ("Healthcare records covering the period of [date] to [date]") and category-level selection via checkboxes, giving the patient reasonable control over scope.

**Expiration**: The form states "IF LEFT BLANK, THIS AUTHORIZATION WILL EXPIRE IN 120 DAYS." This 120-day default is moderately short and could cause issues if processing takes time, but the patient can specify a different date.

**Reason for request**: The form requires the patient to select a reason from: Medical Care, Insurance, Personal, Attorney, Other. While HIPAA does not require patients to state a reason for accessing their own records, providing "Personal" as an option at least accommodates this scenario.

## 6. COMPLIANCE

**No unreasonable barriers identified**: The form does not require notarization or in-person submission. It does not mention fees. It provides a mailing address and fax number for submission.

**Witness field**: The signature block includes a "Witness" line. While not explicitly required by the form's text, a witness line can create an implicit barrier — patients filling out the form at home may feel they need to find a witness, potentially delaying submission. It is not clear whether the witness is required or optional.

**No fee disclosure**: The form makes no mention of any fees for records. This could be viewed either positively (no fee barrier) or as an omission (fees may be charged but not disclosed up front).

**Re-disclosure warning**: The form includes a standard re-disclosure notice: "Information disclosed under this authorization might be re-disclosed by the recipient and this re-disclosure may no longer be protected by federal or state law." This is appropriate.

**120-day default expiration**: While not unreasonable, the default is on the shorter side. Many forms use 1 year. The patient can override this by specifying their own date.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No "All Records" checkbox**: The form provides six specific record categories plus "Other" but lacks an option to request all records. A patient exercising their HIPAA Right of Access to a complete designated record set would need to individually check every box and potentially write additional categories in the "Other" field — or risk receiving an incomplete response. This is a structural barrier to comprehensive record access.

### ⚠️ AMBIGUITIES

- **Witness line — required or optional?** The signature block includes "Witness (Testigo)" but the form text does not state whether a witness signature is mandatory. If required, this creates a barrier for patients completing the form remotely. If optional, its presence may still deter patients who assume it must be completed.
- **"To or From" direction** — The checkbox for "I authorize release of the above named patient's Healthcare Information — To or From" is functional but could confuse patients. It's unclear whether checking "To" means records go *to* the named recipient or *to* the patient from the named source. The field asks for only one set of contact information, so a patient requesting their own records from NHC may be unsure how to fill this out.

### ❌ ERRORS

- **Completely inaccessible PDF**: Despite being a born-digital document (created in Adobe Illustrator, not scanned), the PDF has zero extractable text, zero embedded fonts, zero fillable fields, and no structural tags. This is a technical design error — the choice to outline all text in Illustrator destroyed every accessibility feature. A screen reader user, a patient using assistive technology, or anyone attempting to search or copy text from this document will be unable to do so.

### ✨ BRIGHT SPOTS

- **Bilingual English/Spanish on a single form**: Rather than requiring Spanish-speaking patients to find a separate form, the inline bilingual design ensures both language communities encounter the same document. Form-2 and form-3 take the same approach.
- **Confidential information opt-in/opt-out granularity**: The four-category breakdown (AIDS/HIV, behavioral health, alcohol/drug, social services) with individual Yes/No checkboxes gives patients clear, granular control over sensitive information — a legally careful and patient-respecting approach.
- **Clean, single-page design**: The form fits all content on one page without appearing excessively cramped, which is an achievement given the bilingual content and the number of fields included.
