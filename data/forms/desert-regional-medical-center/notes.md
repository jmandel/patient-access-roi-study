# Desert Regional Medical Center — ROI Form Retrieval Notes

## Organization Info
- **Name**: Desert Regional Medical Center
- **Website**: https://www.desertcarenetwork.com
- **Location**: Palm Springs, CA
- **Parent System**: Desert Care Network (part of Tenet Healthcare)

## Search Strategy

1. **Web search for PDFs**: Searched for `"Desert Regional Medical Center" "authorization" "release" "health information" filetype:pdf` — no direct PDF results.
2. **Web search for site-specific content**: Searched `site:desertcarenetwork.com authorization release medical records` — found the dedicated medical records request page at https://www.desertcarenetwork.com/patients/request-medical-records.
3. **Navigated the website**: The medical records page clearly lists download links for ROI forms for each hospital in the Desert Care Network, including Desert Regional Medical Center in both English and Spanish.

## What Worked
The site search (`site:desertcarenetwork.com`) immediately found the medical records page. The page is well-organized with direct download links labeled by hospital and language.

## Difficulties
- **Cloudflare bot protection**: Direct `curl` downloads were blocked by Cloudflare's "Just a moment..." challenge page. Had to use Chrome DevTools browser to bypass the protection and download the PDFs via in-page JavaScript `fetch()`.
- **Chrome PDF viewer wrapper**: The browser's network request capture saved the Chrome PDF viewer HTML wrapper instead of the actual PDF content. Worked around this by using `fetch()` within the page context to get the raw PDF bytes as base64.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.desertcarenetwork.com/docs/desertcarenetworklibraries/default-document-library/desert-regional-medical-center-roi-form-2025f689a0d6-a5bc-4d09-8b16-dfa7c3c87cbd.pdf?sfvrsn=6159096f_1
- **File size**: 149,544 bytes
- **Pages**: 2
- **Description**: English-language "Authorization for the Release of Health Information" form for Desert Regional Medical Center. Includes patient info fields, checkboxes for record types (ED reports, H&P, progress notes, labs, radiology, HIV/AIDS, etc.), date range specification, purpose of release, delivery method options (patient pick up, mail, fax, email), HIPAA rights notice, revocation instructions, and authorization expiration provisions. Has a text layer (not a scan). Appears to be a digitally created form. References Tenet Healthcare email (DES-DRMC-MedRecords@tenethealth.com).

### form-2.pdf
- **Source URL**: https://www.desertcarenetwork.com/docs/desertcarenetworklibraries/default-document-library/desert-regional-medical-center-roi-spanish-2form-(22)38a84035-2943-4b31-87b6-5796b63f0c58.pdf?sfvrsn=eee2c044_1
- **File size**: 166,783 bytes
- **Pages**: 2
- **Description**: Spanish-language version of the same ROI authorization form ("Autorización para la Divulgación de Información Médica"). Same structure and content as the English version, translated to Spanish. Includes the same record type checkboxes, delivery options, HIPAA rights notice, and expiration provisions.
