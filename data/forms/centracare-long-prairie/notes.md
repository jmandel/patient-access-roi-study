# CentraCare – Long Prairie Hospital: ROI Form Retrieval Notes

## Organization
- **Name**: CentraCare – Long Prairie Hospital
- **Website**: https://www.centracare.com/locations/profile/long-prairie-hospital/
- **Location**: Long Prairie, MN
- **Parent System**: CentraCare (regional system based in St. Cloud, MN)

## Search Strategies

1. **Web search for PDFs**: Searched for `CentraCare Long Prairie Hospital "authorization" "release" "health information" filetype:pdf` — did not find Long Prairie–specific forms but found CentraCare system-wide forms.
2. **Web search for CentraCare medical records release form**: Found direct PDF links and the medical records release page URL.
3. **Site-specific search**: `site:centracare.com authorization release medical records form` — confirmed the same system-wide forms.
4. **Navigated CentraCare website**: Visited https://www.centracare.com/patient-resources/medical-records-release/ which lists all available forms. Long Prairie Hospital uses the system-wide CentraCare authorization form (no facility-specific form).

## Difficulties

- **Bot blocking on curl**: Direct `curl` downloads returned "Access Denied" HTML pages (505 bytes). Had to use Chrome DevTools browser to navigate to PDF URLs and download via JavaScript `fetch()` within the page context.
- **No facility-specific form**: CentraCare uses a single "Universal Authorization" form across all facilities. Long Prairie Hospital is listed as one of the locations in the instructions document.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.centracare.com/app/files/public/a8f46347-1e70-4f91-b743-dff034a64a35/release-of-health-info-form.pdf
- **File size**: 873,096 bytes
- **Description**: CentraCare "Authorization for Release of Health Information" — the main ROI form. Multi-page fillable-style PDF with sections for patient information, release from/to, information types to release (H&P, discharge summary, lab reports, radiology, etc.), special disclosure for substance use disorder records, preferred delivery method (print, CD, encrypted email, MyChart), reason for release, and authorization/signature section. Has a text layer. Lists all CentraCare facilities including Long Prairie on page 2.

### form-2.pdf
- **Source URL**: https://www.centracare.com/app/files/public/7e758b76-e05b-4eb1-8765-fa9653741e44/release-of-health-info-instruction.pdf
- **File size**: 177,020 bytes
- **Description**: "Instructions for Completing Authorization for Release of Health Information" — a companion document explaining how to fill out the ROI form. Includes section-by-section guidance, submission methods (email to CCHROI@CentraCare.com, fax, mail), fee information, and a directory of all CentraCare HIM/ROI department locations with addresses, fax numbers, and phone numbers. Long Prairie is listed under "Long Prairie" with specific contact info.

### form-3.pdf
- **Source URL**: https://www.centracare.com/app/files/public/3366c37f-eada-4170-b4cd-21525b0d5f72/Authorization-to-Share-Substance-Use-Disorder-Health-Information.pdf
- **File size**: 235,480 bytes
- **Description**: "Authorization to Share Substance Use Disorder Health Information" — a separate authorization form specifically for substance use disorder records (42 CFR Part 2). This is an image-only scan (no text layer, 1 page). Found on the same medical records release page.
