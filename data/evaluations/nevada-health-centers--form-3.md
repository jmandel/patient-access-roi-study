# Evaluation: Nevada Health Centers — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

**Document title:** "Nevada Health Centers, Inc. WIC — RELEASE OF MEDICAL INFORMATION"
**Form ID:** FD-ALL.012es-WIC
**Revision date:** 3/14/2022 (per footer: "Revised 3/14/2022 (Replaces MR1.03Fa)")
**Pages:** 1
**Language:** Bilingual English/Spanish

This is a WIC (Women, Infants, and Children) program-specific variant of the organization's general Release of Medical Information form (form-1). It is nearly identical in structure to form-1 but adds a header block listing seven specific WIC clinic locations in the Las Vegas area with addresses, phone numbers, and fax numbers, and includes checkboxes to select the relevant clinic. The organization also publishes form-2, an "Authorization to Share Information" form for designating persons who can access records on the patient's behalf. Form-3 is a specialized subset of form-1 rather than a distinct document type.

## 2. FINDABILITY

The form was located on the organization's patient forms page at `https://www.nevadahealthcenters.org/forms/`, which was discoverable through a site-scoped search (`site:nevadahealthcenters.org authorization release medical records`). The forms page is well-organized with categories (General Forms, Dental Forms, Mammovan Forms, etc.). The form is listed as "WIC Release of Medical Information (English/Spanish PDF)" — a clear, descriptive label.

The URL (`/wp-content/uploads/2025/08/FD-ALL.012es-WIC-Release-of-Medical-Info-3-14-2022.pdf`) includes the form ID, subject, and revision date, which is helpful for version management but uses a WordPress uploads path rather than a stable permalink. The filename was updated in August 2025 despite the form content being revised in March 2022, suggesting the file was re-uploaded. Overall findability is good — the form was reachable within 2-3 clicks from the homepage.

## 3. TECHNICAL ACCESSIBILITY

This form has significant technical accessibility deficiencies:

- **No text layer:** The PDF was created in Adobe Illustrator 26.0 (Macintosh) and renders all text as vector paths rather than font glyphs. `pdftotext` returns empty output. The metadata confirms `has_text_layer: false`, `font_count: 0`, `fillable_field_count: 0`. This means the form is **completely inaccessible** to screen readers and cannot be searched or copied.
- **No fillable fields:** Zero interactive form fields. The form must be printed and filled by hand.
- **No embedded fonts:** Font count is 0 — text is rendered as vector outlines.
- **File size:** 1,769,382 bytes (~1.7 MB) for a single-page document. This is disproportionately large — form-1, which has nearly identical content minus the WIC header, is only 410 KB. The bloated size likely comes from the WIC clinic location block rendered as complex vector paths.
- **Not tagged:** The PDF is not tagged for accessibility (`Tagged: no`).
- **Format:** PDF 1.4, letter size (612 × 792 pts), not encrypted.

The form is a designed vector graphic, not a scan — it was intentionally created in Illustrator rather than a word processor or form-building tool. This is a design choice that prioritizes visual appearance over digital functionality.

## 4. CONTENT DESIGN

**Structure and organization:** The form follows a logical top-to-bottom flow:
1. WIC clinic location checkboxes (7 locations with full contact details)
2. Patient identification (name, DOB)
3. Authorization direction (To/From checkboxes)
4. Recipient identification (name, address, phone, fax)
5. Record type selection (checkboxes for Medication List, Laboratory Results, Immunization Records, X-Ray, Provider Notes, Billing Records, Other)
6. Date range fields
7. Re-disclosure warning
8. Confidential information opt-in/opt-out (AIDS/HIV, behavioral/mental health, alcohol/drug, social services)
9. Reason for request (Medical Care, Insurance, Personal, Attorney, Other)
10. Revocation language
11. Expiration notice
12. Signature block
13. Office-use-only section

**Language quality:** The form is bilingual, with Spanish translations appearing directly below English text throughout. The language is reasonably clear but leans toward administrative/legal phrasing. The re-disclosure warning ("Information disclosed under this authorization might be re-disclosed by the recipient and this re-disclosure may no longer be protected by federal or state law") is standard HIPAA language. The revocation clause is clear: "I understand that if I revoke this authorization I must do so in writing and present my written revocation to a Nevada Health Centers location."

**Layout:** The entire form is compressed onto a single page, which is ambitious given the amount of content (WIC locations, bilingual text, multiple checkbox sections, signature fields). The OCR output suggests a dense layout. The WIC location block at the top consumes significant space with seven addresses, likely crowding the remainder of the form.

**Readability:** Without interactive fields and being a single page with this much content, font sizes are likely small, particularly for the Spanish translations and the clinic address block.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general-purpose release form, not specific to patient access requests. The "To/From" direction checkboxes and "Reason For Request" options (Medical Care, Insurance, Personal, Attorney, Other) indicate it is designed for all types of information release. There is no separate pathway or language specifically addressing a patient's right of access under HIPAA § 164.524.

**Scope options:** The form offers reasonable granularity for record types (Medication List, Laboratory Results, Immunization Records, X-Ray, Provider Notes, Billing Records, Other) and includes date range fields ("Healthcare records covering the period of (date) to (date)"). The confidential information section (AIDS/HIV, behavioral/mental health, alcohol/drug, social services) provides appropriate opt-in/opt-out controls with Yes/No checkboxes.

**Delivery format options:** The form does not mention electronic delivery options. There is no mention of email delivery, patient portal access, CD/USB, or any digital format. The inclusion of fax numbers for each WIC location suggests fax is the expected transmission method.

**Right of Access language:** The form does not reference HIPAA § 164.524, patient rights, or the right of access. There is no mention of EHI export or electronic health information.

**WIC-specific considerations:** The form is tailored for WIC program participants, who may include pregnant women, new mothers, and families with young children — populations that may have particular need for accessible, easy-to-use forms. The print-only, hand-fill requirement is especially burdensome for this population.

## 6. COMPLIANCE

**Expiration:** "IF LEFT BLANK, THIS AUTHORIZATION WILL EXPIRE IN 120 DAYS." This is a reasonable default expiration period.

**Revocation:** The revocation process requires written notice presented to "a Nevada Health Centers location," which implies in-person delivery. There is no mention of mail, fax, or electronic revocation options.

**Witness requirement:** The signature block includes a "Witness" field. While not explicitly labeled as required, its presence may create confusion about whether a witness is necessary to submit the form.

**No fee disclosure:** The form does not mention fees for record copying or processing.

**No submission instructions:** Beyond listing WIC clinic locations with fax numbers, the form provides no explicit instructions for how to submit the completed authorization (in person, by mail, by fax, etc.).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Revocation requires in-person visit:** The form states "I must do so in writing and present my written revocation to a Nevada Health Centers location," which implies physical presence is required to revoke the authorization. This creates an unnecessary barrier, particularly for WIC program participants who may have limited transportation.

### ⚠️ AMBIGUITIES

- **Witness field purpose unclear:** The signature block includes "Witness (Testigo)" but does not indicate whether a witness signature is required or optional. If required, this would be an unusual and potentially burdensome requirement for a routine records release.
- **"To or From" framing ambiguous for patients:** The authorization direction uses "I authorize release of the above named patient's Healthcare Information — To or From" which may confuse a patient requesting their own records — it frames the patient in the third person ("above named patient's") even when the patient is the one signing.
- **No submission method specified:** Despite listing seven clinic locations with addresses and fax numbers, the form never explicitly states how the completed form should be submitted.

### ❌ ERRORS

- **Completely inaccessible text layer:** The PDF contains zero extractable text, zero fonts, and zero fillable fields despite being a designed (not scanned) document. This is a technical deficiency created by the choice to use Adobe Illustrator instead of a word processor or PDF form tool. Screen readers cannot read this document.
- **Disproportionate file size:** At 1.7 MB for a single-page form, this is roughly 4× larger than the nearly identical form-1 (410 KB). The vector rendering of the WIC location block inflates the file unnecessarily.

### ✨ BRIGHT SPOTS

- **Full bilingual English/Spanish integration:** Spanish translations appear inline throughout the form rather than on a separate page, making it immediately accessible to Spanish-speaking patients without needing to locate a second document.
- **Granular confidential information controls:** The Yes/No checkboxes for sensitive categories (AIDS/HIV, behavioral/mental health, alcohol/drug, social services) give patients meaningful control over particularly sensitive information, with clear bilingual labeling.
- **Specific clinic contact information:** Listing all seven WIC locations with complete addresses, phone numbers, and fax numbers eliminates the need for patients to look up where to send the form.
