# Virginia Garcia Memorial Health Center — ROI Form Retrieval Notes

## Organization
- **Name**: Virginia Garcia Memorial Health Center
- **Website**: https://virginiagarcia.org
- **Location**: Hillsboro, OR
- **Type**: FQHC, independent, nonprofit

## Search Strategies

1. **Web search**: Searched for `Virginia Garcia Memorial Health Center authorization release health information form PDF` — immediately returned direct links to the English ROI form PDF and the patient forms page.
2. **Patient Forms page**: Navigated to https://virginiagarcia.org/get-care/patient-forms/ to find all available ROI-related forms. The page uses Divi theme (WordPress) with clickable blurb modules — PDF URLs are not visible as standard `<a href>` links but are embedded in a JavaScript `et_link_options_data` array.
3. Found 4 Release of Information forms listed under a dedicated "Release of Information Forms" section.

## Difficulties

- The Spanish ROI form URL from the initial web search (`HIPAA-Release-of-Information-ROI-Form-Spanish-2.pdf`) returned an HTML page instead of a PDF — likely a redirect/404 page. The actual working URL was `HIPAA-Release-of-Information-ROI-Form-Spanish-1.pdf` (found via the Divi JavaScript config on the patient forms page).
- PDF links on the patient forms page are not standard HTML links; they are rendered via Divi theme JavaScript click handlers, requiring inspection of inline script data to extract URLs.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://virginiagarcia.org/wp-content/uploads/HIPAA-Release-of-Information-ROI-Form-English-2.pdf
- **File size**: 319,181 bytes
- **Description**: HIPAA Release of Information (ROI) form — English version. A comprehensive authorization form allowing patients to authorize Virginia Garcia to get, give, or exchange health information with specified providers/facilities. Includes checkboxes for record types (progress notes, immunizations, labs, dental, medication list, etc.) and special categories (HIV/AIDS/STD, genetic testing, mental health, drug/alcohol). Bilingual header text.

### form-2.pdf
- **Source URL**: https://virginiagarcia.org/wp-content/uploads/HIPAA-Release-of-Information-ROI-Form-Spanish-1.pdf
- **File size**: 357,444 bytes
- **Description**: HIPAA Release of Information (ROI) form — Spanish version (Divulgación de Información). Same form as form-1.pdf but in Spanish. Contains some English text as well (bilingual).

### form-3.pdf
- **Source URL**: https://virginiagarcia.org/wp-content/uploads/Release-of-Verbal-Health-Information-English.pdf
- **File size**: 65,631 bytes (1 page)
- **Description**: Release of Verbal Health Information — English. Allows patients to authorize VGMHC staff to verbally discuss PHI with specified family members/caregivers and to leave detailed voicemail messages. Includes optional authorization for release of sensitive information (HIV/AIDS/STD, genetic testing, mental health, substance abuse).

### form-4.pdf
- **Source URL**: https://virginiagarcia.org/wp-content/uploads/Release-of-Verbal-Health-Information-Spanish-1.pdf
- **File size**: 66,700 bytes (1 page)
- **Description**: Release of Verbal Health Information — Spanish version (Divulgación de Información Verbal de su Salud). Same form as form-3.pdf but in Spanish.

## Summary

Virginia Garcia Memorial Health Center makes their ROI forms easily accessible via a dedicated Patient Forms page. They provide 4 forms: the main HIPAA ROI form in English and Spanish, plus a Verbal Health Information release form in English and Spanish. The forms are well-organized on the website under a clear "Release of Information Forms" heading. Retrieval difficulty: **easy** (forms found on first search and clearly labeled on the website).
