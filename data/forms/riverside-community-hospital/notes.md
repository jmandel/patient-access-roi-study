# Riverside Community Hospital — ROI Form Retrieval Notes

## Organization Info
- **Name:** Riverside Community Hospital
- **Location:** Riverside, CA
- **Website:** https://www.riversidecommunityhospital.com
- **Parent System:** HCA Healthcare (for-profit; confirmed by Nashville, TN mailing address and HCA branding)

## Search Strategies

1. **Web search** for `Riverside Community Hospital "authorization" "release" "health information" medical records form` — immediately surfaced the form URL on legalimage.net and the hospital's medical records page.
2. **Direct website navigation** to https://www.riversidecommunityhospital.com/patient-resources/medical-records — found the official page with links to both English and Spanish authorization forms hosted on HCA's CDN (hcadam.com), plus a link to a third-party ROI service (legalimage.net).

## Downloaded Forms

### form-1.pdf
- **Source URL:** http://legalimage.net/images/Forms/Riverside_Community_Hospital-medical_records_authorization.pdf
- **File size:** 141,169 bytes (5 pages)
- **Description:** "Authorization for Protected Health Information (PHI)" — includes 2 pages of instructions on how to complete the form, followed by the actual authorization form. Covers patient info, recipient info, request delivery method, purpose of disclosure, psychotherapy notes consent, and signature sections. This appears to be an older or alternative version of the form hosted by a third-party ROI vendor (Legal Image).

### form-2.pdf
- **Source URL:** https://www.hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac?v=b53c28b5
- **File size:** 173,750 bytes
- **Description:** English-language "Authorization for Release of Medical Information" form, linked directly from the hospital's official medical records page. Hosted on HCA's digital asset management CDN. Contains fillable form fields for patient info, recipient, dates of service, purpose of disclosure, and signature. This is the current official form.

### form-3.pdf
- **Source URL:** https://www.hcadam.com/api/public/content/e109b112b80f42fc8291acbe0b1435fa?v=829b113e
- **File size:** 168,110 bytes
- **Description:** Spanish-language version ("Autorización para la divulgación de información médica") of the authorization form, also linked from the hospital's official medical records page. Same structure as form-2 but in Spanish.

## Difficulties
- **None significant.** The forms were easy to find — the hospital's medical records page is clearly linked under Patient Resources and provides direct PDF download links. No bot blocking, login walls, or JavaScript-rendered content issues.
- The legalimage.net URL (form-1) is served over HTTP (not HTTPS), which is a minor security concern for a healthcare form.

## Additional Notes
- Riverside Community Hospital is part of HCA Healthcare, the largest for-profit hospital system in the U.S. The ROI process is centralized through HCA's national medical records service (PO Box in Nashville, TN).
- The hospital also offers an online request portal via MyHealthONE patient portal and a separate Swellbox-based online request wizard.
- Retrieval difficulty: **Easy** — forms found within 1-2 clicks from the main medical records page.
