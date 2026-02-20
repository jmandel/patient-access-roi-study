# MountainView Hospital (Las Vegas, NV) — ROI Form Retrieval Notes

## Organization Details
- **Name**: MountainView Hospital
- **Location**: Las Vegas, NV (3100 N Tenaya Way, Las Vegas, NV 89128)
- **Website**: https://mountainview-hospital.com (redirects to sunrisehealthinfo.com)
- **Parent System**: HCA Healthcare / Sunrise Health (part of the Sunrise Health network alongside Sunrise Hospital, Southern Hills Hospital, and Sunrise Children's Hospital)
- **Type**: Community hospital, for-profit, major system affiliation

## Search Strategies

1. **Web search** for `MountainView Hospital Las Vegas "authorization" "release" "health information" form PDF` — found direct reference to the medical records page at sunrisehealthinfo.com.
2. **Web search** for `MountainView Hospital Las Vegas medical records release form request` — confirmed the form URL and provided additional context about the online request portal.
3. **Direct website navigation** to `https://www.sunrisehealthinfo.com/locations/mountainview-hospital/for-patients/medical-records` — found the authorization form links (English and Spanish).
4. **Initial curl download** from `sunrisehealthinfo.com/util/forms/...` URL returned HTML (bot blocking). Successful download from the actual CDN URL (`hcadam.com/api/public/content/...`) found on the page.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac?v=b53c28b5
- **Link text on page**: "Authorization for Release of Medical Information"
- **Description**: HCA Healthcare standard authorization form for release/disclosure of medical information (English version). Multi-section form with patient info, recipient info, record types selection (consultation, discharge summary, ER report, labs, etc.), delivery format options (paper, electronic media, encrypted/unencrypted email), USCDI release option, 180-day default expiration, and HIPAA-compliant authorization language.
- **Notable features**: Includes USCDI (United States Core Data for Interoperability) release option, electronic delivery choices, and psychotherapy notes separation.

### form-2.pdf
- **Source URL**: https://www.hcadam.com/api/public/content/e109b112b80f42fc8291acbe0b1435fa?v=829b113e
- **Link text on page**: "Autorización para la divulgación de información médica"
- **Description**: Spanish-language version of the same authorization form (form-1.pdf). Identical structure and content translated to Spanish.

## Difficulties Encountered
- The original URL pattern (`sunrisehealthinfo.com/util/forms/Authorization-to-Disclose-Medical-Information.pdf`) returned HTML instead of a PDF when using curl, likely due to bot protection or URL redirect. The actual PDF was served from HCA's CDN at `hcadam.com`.
- MountainView Hospital's own domain (`mountainview-hospital.com`) redirects to the Sunrise Health system website at `sunrisehealthinfo.com`.

## Additional Notes
- The medical records page also offers an **online medical records request portal** (via Swellbox: https://www.swellbox.com/hca-healthcare-wizard.html) and the **MyHealthONE patient portal** as alternative methods to request records.
- This is a standardized HCA Healthcare form used across their system, not specific to MountainView Hospital.
- The form was easy to find — directly linked from the Medical Records page under "For Patients" navigation.
