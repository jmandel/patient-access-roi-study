# DHR Health — ROI Form Retrieval Notes

## Organization
- **Name:** DHR Health (formerly Doctors Hospital at Renaissance)
- **Location:** Edinburg, TX
- **Website:** https://dhrhealth.com

## Search Strategy
1. **Web search** for `DHR Health Edinburg TX "authorization" "release" "health information" form PDF` — found references to their medical records page and an older URL structure (`/app/uploads/2020/10/...`) that returned empty files.
2. **Web search** for `DHR Health Edinburg TX "medical records" "release form" PDF` — confirmed the medical records page URL.
3. **Direct website navigation** to https://dhrhealth.com/patients-and-visitors/medical-records/ — found the actual working download links under a "Download" section with English and Spanish options.

The initial URL from web search results (`/app/uploads/2020/10/AuthorizationToDiscloseMedicalInfo-DHRHealth-English.pdf`) returned an empty file. The actual working URLs were found by navigating the website directly using the browser.

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://dhrhealth.com/media/q2dm5tx5/medical-records-form-english.pdf
- **File size:** 190,271 bytes
- **Pages:** 2
- **Description:** "Authorization for Release of Protected Health Information" — English version. Still branded as "Doctors Hospital at Renaissance" (former name). Has text layer with extractable text. Includes checkboxes for type of access (copies vs. review), specific record types (cardiac studies, consult reports, discharge summary, operative reports, etc.), and sections for consent/non-consent regarding psychiatric records, substance abuse, and HIV information. Form number DSR-GEN-71, dated 08/15.
- **Initial impression:** This is the standard ROI/authorization form for DHR Health. It is a general release form (not patient-access-specific) — it authorizes disclosure either from or to the hospital. No fillable fields (flat PDF with text layer). Not a digital-first design.

### form-2.pdf
- **Source URL:** https://dhrhealth.com/media/2ldbyqpn/medical-records-form-spanish.pdf
- **File size:** 194,087 bytes
- **Pages:** 2
- **Description:** Spanish version of the same authorization form. This is an image-only scan (no extractable text, contains two scanned CCITT images at 300 DPI).
- **Initial impression:** Same ROI form as form-1.pdf but in Spanish. Image-only scan, so no text layer and no fillable fields.

## Difficulties
- The older URL path (`/app/uploads/2020/10/`) returned an empty file — DHR Health appears to have migrated their media URLs to a new CMS structure (`/media/{hash}/`).
- The form still uses the old name "Doctors Hospital at Renaissance" rather than the current "DHR Health" branding.
- The Spanish version is a scanned image with no text layer, making it less accessible than the English version.
- The medical records page was easy to find (2 clicks from homepage: Patients & Visitors → Medical Records), and the download links were clearly visible on the page.
