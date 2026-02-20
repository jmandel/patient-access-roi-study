# Community Health Center, Inc. — ROI Form Retrieval Notes

## Organization
- **Name**: Community Health Center, Inc.
- **Website**: https://www.chc1.com
- **Location**: Middletown, CT
- **Type**: FQHC, independent, nonprofit

## Search Strategies

1. **Web search for PDFs**: Searched for `"Community Health Center Inc Middletown CT" "authorization" "release" "health information" filetype:pdf` — no direct results.
2. **Site-scoped search**: `site:chc1.com authorization release medical records` — found references to the patient forms page and two direct PDF URLs.
3. **Patient forms page**: Navigated to https://www.chc1.com/for-patients/resources/patient-forms/ — confirmed the ROI forms section. The page now links to Luma Health online form portals rather than direct PDF downloads.
4. **Direct PDF URLs**: Found two English PDFs hosted on the site (one from 2024, one from 2019), plus a Spanish version at a guessed URL based on the English filename pattern.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.chc1.com/wp-content/uploads/2024/07/Release-of-Information-for-B23.pdf
- **File size**: 243,549 bytes
- **Description**: "Authorization to Release or Obtain Health Information" — appears to be a site-specific version (references "B23 Site" and "Birth to Three" program with pre-filled recipient info for Rebecca Smith/Birth to Three at 450 Columbus Blvd Suite 205, Hartford CT). This is a customized variant of the standard CHC ROI form for a specific program referral.
- **Has text layer**: Yes
- **Initial impression**: ROI/authorization form, site-specific variant

### form-2.pdf
- **Source URL**: https://www.chc1.com/wp-content/uploads/2019/08/ROI-English.pdf
- **File size**: 176,978 bytes
- **Description**: "Authorization to Release or Obtain Health Information" — the standard English version of the CHC ROI form. Includes sections for releasing or obtaining records, record type checkboxes, date range, special categories (drug/alcohol, psychiatric, HIV/AIDS), 90-day default expiration, and signature. Revised 6/2019.
- **Has text layer**: Yes
- **Initial impression**: Standard ROI/authorization form (English)

### form-3.pdf
- **Source URL**: https://www.chc1.com/wp-content/uploads/2019/08/ROI-Spanish.pdf
- **File size**: 177,997 bytes
- **Description**: "Autorización para Divulgar u Obtener Información Médica" — Spanish translation of the standard CHC ROI form. Same structure and content as form-2.pdf.
- **Has text layer**: Yes
- **Initial impression**: Standard ROI/authorization form (Spanish)

## Difficulties
- The patient forms page has transitioned from direct PDF downloads to Luma Health online form portals for ROI. The two current links ("CHC to release health information to another agency" and "CHC to obtain health information from another agency") point to `patient.lumahealth.io` survey URLs rather than static PDFs.
- The older PDF versions are still hosted on the WordPress uploads directory and were discoverable via web search.
- No difficulties with bot blocking or download issues — all PDFs downloaded cleanly with curl.

## Key Observations
- CHC provides both English and Spanish versions of the ROI form.
- The form serves dual purposes: both releasing records TO another party and obtaining records FROM another party.
- The form includes a self-request option ("If releasing information to ME") with mail, fax, pick-up, and email delivery options.
- 90-day default expiration for authorization.
- The patient forms page also mentions the myCHC patient portal for accessing records online.
