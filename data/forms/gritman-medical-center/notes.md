# Gritman Medical Center — ROI Form Retrieval Notes

## Organization
- **Name**: Gritman Medical Center
- **Location**: Moscow, ID
- **Website**: https://www.gritman.org
- **Type**: Critical access hospital, independent, nonprofit

## Search Strategies

1. **Web search** for `Gritman Medical Center "authorization" "release" "health information" filetype:pdf` — did not return a direct hit.
2. **Web search** for `Gritman Medical Center "medical records" "release form" OR "authorization form"` — returned the direct PDF URL and the medical records page.
3. **Website navigation**: The form is linked from the "My Health Records" page at https://www.gritman.org/patients-visitors/my-health-records/ under the "Requesting Your Medical Records" section.

## Downloads

### form-1.pdf
- **Source URL**: https://www.gritman.org/wp-content/uploads/Authorization-to-Release-Protected-Health-Information_clinics.pdf
- **File size**: 252,109 bytes
- **Document type**: Authorization to Release Protected Health Information (ROI form)
- **Pages**: 1
- **Description**: Single-page ROI form with fields for patient information, release-to/release-from parties, delivery method (standard mail, fax, email, pickup, certified mail), purpose (continuation of care, personal, legal, insurance, other), treatment dates, and information types to disclose (billing record, discharge summary, immunization record, ED reports, cardiac studies, laboratory, pertinent info, radiology reports, and more). Includes an "I Understand That" section with authorization language and a 90-day auto-expiration clause. Revised 4/1/2024.

## Difficulties

- **Bot blocking on direct curl download**: The initial `curl` attempt to download the PDF returned HTML instead of the actual PDF file. The server appears to require a browser-like session or cookies. Successfully downloaded via Chrome DevTools browser environment by fetching the PDF content from within the page context and base64-decoding it.

## Summary

The form was easy to find — directly linked from the medical records page (2 clicks from homepage: Patients & Visitors → My Health Records). Gritman provides a single general-purpose ROI form covering both patient access and third-party release scenarios. The form is a fillable PDF (version 1.6) with a text layer.
