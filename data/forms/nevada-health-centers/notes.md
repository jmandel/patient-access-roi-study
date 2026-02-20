# Nevada Health Centers — ROI Form Retrieval Notes

## Organization
- **Name:** Nevada Health Centers
- **Website:** https://www.nevadahealthcenters.org
- **Location:** Carson City, NV
- **Type:** FQHC, independent, nonprofit

## Search Strategy

1. **Web search** for `"Nevada Health Centers" "authorization" "release" "health information" filetype:pdf` — no direct hits to NHC-specific forms.
2. **Web search** for `"Nevada Health Centers" "medical records" "release form" filetype:pdf` — returned results for other Nevada organizations (Northern Nevada Medical Center, Health Plan of Nevada, Southern Nevada Health District) but not NHC specifically.
3. **Web search** for `site:nevadahealthcenters.org authorization release medical records` — **this worked**. Identified the forms page at https://www.nevadahealthcenters.org/forms/ with a direct link to the "Release of Medical Information" form.
4. **Navigated to the forms page** at https://www.nevadahealthcenters.org/forms/ — found a comprehensive patient forms page with multiple categories (General Forms, Dental Forms, Mammovan Forms, etc.). Three ROI-related forms were identified.

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.nevadahealthcenters.org/wp-content/uploads/2025/08/FD-ALL.012es-Release-of-Medical-Info-7-25-2023.pdf
- **Listed as:** "Release of Medical Information (English/Spanish PDF)"
- **Description:** 1-page bilingual (English/Spanish) Release of Medical Information form. Titled "Nevada Health Centers, Inc. — RELEASE OF MEDICAL INFORMATION." Includes fields for patient name, DOB, authorization direction (To/From), name/address/phone/fax of recipient, checkboxes for record types (Medication List, Laboratory Results, Immunization Records, X-Ray, Provider Notes, Billing Records, Other), date range, confidential information opt-in/opt-out (AIDS/HIV, behavioral/mental health, alcohol/drug, social services), reason for request, revocation language, and signature fields. States "IF LEFT BLANK, THIS AUTHORIZATION WILL EXPIRE IN 120 DAYS." Has an office-use-only section at the bottom.
- **File size:** 410,025 bytes
- **Pages:** 1
- **Technical notes:** Created in Adobe Illustrator; no extractable text layer (image-only vector PDF), no embedded fonts, no fillable form fields. Not a scan — it's a designed vector graphic.

### form-2.pdf
- **Source URL:** https://www.nevadahealthcenters.org/wp-content/uploads/2025/08/FD-ALL.011es-Authorization-to-Share-Information-2-4-22-2.pdf
- **Listed as:** "Authorization to Share Information Form (English/Spanish PDF)"
- **Description:** 2-page bilingual (English/Spanish) form titled "Nevada Health Centers, Inc. — AUTHORIZATION TO SHARE INFORMATION." Page 1 is English, page 2 is Spanish. References the Notice of Privacy Practices (FD-ALL.014e). Allows patients to authorize persons/entities to represent them and request information, or to terminate authorization to disclose to listed persons. Includes fields for names, relationships, DOBs. Checkboxes for what information can be shared: Medication refills, Referrals, All information pertaining to appointments, All medical information. Patient signature fields with minor/guardian provisions.
- **File size:** 463,726 bytes
- **Pages:** 2
- **Technical notes:** Created in Adobe Illustrator 26.0; no extractable text layer, no embedded fonts, no fillable form fields.

### form-3.pdf
- **Source URL:** https://www.nevadahealthcenters.org/wp-content/uploads/2025/08/FD-ALL.012es-WIC-Release-of-Medical-Info-3-14-2022.pdf
- **Listed as:** "WIC Release of Medical Information (English/Spanish PDF)"
- **Description:** 1-page bilingual Release of Medical Information form, nearly identical to form-1 but specifically for WIC (Women, Infants, and Children) program locations. Titled "Nevada Health Centers, Inc. WIC — RELEASE OF MEDICAL INFORMATION." Lists specific WIC clinic locations with addresses and phone/fax numbers at the top. Same structure as form-1: record type checkboxes, confidential information opt-in/opt-out, reason for request, revocation language, 120-day expiration.
- **File size:** 1,769,382 bytes
- **Pages:** 1
- **Technical notes:** No extractable text layer, no embedded fonts, no fillable form fields.

## Difficulties
- **No text layer:** All three PDFs are created in Adobe Illustrator as vector graphics with no extractable text. `pdftotext` returns empty output. They are not scans — they are designed vector documents, but text is rendered as paths rather than font glyphs.
- **No fillable fields:** None of the forms have interactive form fields; they are designed to be printed and filled by hand.
- **Easy findability:** The forms page was straightforward to find — linked from the main site and clearly organized. The site search for "release" also surfaces the forms page.

## Summary
Nevada Health Centers publishes three ROI-related forms on their patient forms page. Form-1 is the primary general-purpose Release of Medical Information form. Form-2 is an Authorization to Share Information form (for designating persons who can access your records). Form-3 is a WIC-specific variant of the release form. All are bilingual English/Spanish, all lack text layers and fillable fields, and all are designed as print forms.
