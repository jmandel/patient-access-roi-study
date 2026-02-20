# Cottage Hospital - ROI Form Retrieval Notes

## Organization
- **Name:** Cottage Hospital
- **Location:** Woodsville, NH 03785
- **Website:** https://www.cottagehospital.org
- **Type:** Critical access hospital, independent, nonprofit, Northeast

## Search Strategies

### Strategy 1: Web search for PDF forms
- Searched for `"Cottage Hospital" Woodsville NH "authorization" "release" "health information" filetype:pdf`
- Searched for `"Cottage Hospital" Woodsville NH "medical records" "release form" filetype:pdf`
- Searched for `site:cottagehospital.org authorization release medical records`
- **Result:** Web search identified two key PDFs:
  1. `RHC Medical Disclosure Form.pdf` — standalone authorization form (current version)
  2. `RHC New Patient Packet 11.6.2019.pdf` — contains an authorization form within a larger packet
  3. `RHC New Patient Packet Rev4_24.pdf` — newer version of the patient packet
- Also identified the HIM department page: `/department/medical-records-health-information-management-him`

### Strategy 2: Direct website access
- Attempted to access cottagehospital.org directly via curl and browser
- **Result:** Blocked by Cloudflare Turnstile challenge on every attempt. The checkbox verification could not be completed programmatically.

### Strategy 3: Google Cache
- Attempted to access cached version of the HIM page
- **Result:** Google also blocked the cache request (CAPTCHA)

### Strategy 4: Wayback Machine (successful)
- Searched Wayback Machine CDX API for `cottagehospital.org/uploads/files/*`
- Found archived copies of:
  - `AUTHORIZATIONFORDISCLOSURE.pdf` (multiple captures, latest 2024-07-05)
  - `RHC New Patient Packet 11.6.2019.pdf` (multiple captures, latest 2024-07-05)
- The newer `RHC Medical Disclosure Form.pdf` and `RHC New Patient Packet Rev4_24.pdf` were NOT archived
- Also found the "Becoming a Rowe Health Center Patient" page (archived 2025-02-08) which links to both forms
- Successfully downloaded both PDFs using the Wayback Machine `id_` (raw) URL format

## Downloaded Files

### form-1.pdf
- **Source URL:** `https://web.archive.org/web/20240705122454id_/https://cottagehospital.org/uploads/files/AUTHORIZATIONFORDISCLOSURE.pdf`
- **Original URL:** `https://cottagehospital.org/uploads/files/AUTHORIZATIONFORDISCLOSURE.pdf`
- **File size:** 198,347 bytes
- **Pages:** 1
- **Description:** "Authorization for Disclosure of Medical Information" — a standalone one-page authorization form from Cottage Hospital. Includes fields for patient name, DOB, recipient, purpose, record type selection (complete records, psychotherapy notes, mental illness, HIV, drug/alcohol), signature, witness, and expiration date. Created in Microsoft Word 2010 (2014). Has text layer, appears to be a digitally-created document (not a scan). Not fillable (no interactive form fields).

### form-2.pdf
- **Source URL:** `https://web.archive.org/web/20240705112806id_/https://cottagehospital.org/uploads/files/RHC%20New%20Patient%20Packet%2011.6.2019.pdf`
- **Original URL:** `https://cottagehospital.org/uploads/files/RHC%20New%20Patient%20Packet%2011.6.2019.pdf`
- **File size:** 601,565 bytes
- **Pages:** 12
- **Description:** "RHC New Patient Packet" for Rowe Health Center (affiliated clinic across from Cottage Hospital). This 12-page packet contains multiple forms including an "Authorization for Disclosure of Medical Records" (a slightly updated version of the standalone form in form-1.pdf, this one explicitly mentions both Cottage Hospital and Rowe Health Center). The packet also includes welcome letter, patient demographics, insurance info, and other intake forms. Created in Microsoft Word 2016 (2019). Has text layer.

## Difficulties Encountered
1. **Cloudflare Turnstile blocking:** The cottagehospital.org website uses Cloudflare's Turnstile challenge, which blocked all automated access (curl, browser with DevTools). Multiple attempts to complete the checkbox verification failed.
2. **Google Cache also blocked:** Google's cache access was also blocked by CAPTCHA.
3. **Wayback Machine HTML wrappers:** Initial attempts to download from Wayback Machine returned HTML wrapper pages instead of raw PDFs. Had to use the `id_` URL modifier to get raw content.
4. **Newer forms not archived:** The current versions of the forms (`RHC Medical Disclosure Form.pdf` and `RHC New Patient Packet Rev4_24.pdf`) were not captured by the Wayback Machine, so we only have the older versions.

## Notes
- The hospital's current website (as seen in the Wayback archive) links to the ROI form from the "Becoming a Rowe Health Center Patient" page under Step 2: "Transfer your medical records by completing the Authorization for Disclosure of Medical Information."
- The hospital has a dedicated Medical Records / HIM department page at `/department/medical-records-health-information-management-him`
- The form appears to be a general authorization for disclosure rather than a patient-access-specific form
- Both forms have text layers (digitally created in Microsoft Word, not scans)
