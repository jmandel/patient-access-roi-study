# Goleta Valley Cottage Hospital — ROI Form Retrieval Notes

## Organization Details
- **Name:** Goleta Valley Cottage Hospital
- **Website:** https://www.cottagehealth.org/locations/goleta-valley-cottage-hospital/
- **Location:** Goleta, CA
- **Parent System:** Cottage Health (regional nonprofit system including Santa Barbara Cottage Hospital, Goleta Valley Cottage Hospital, Santa Ynez Valley Cottage Hospital, Cottage Rehabilitation Hospital)

## Search Strategy

1. **Web search** for `"Goleta Valley Cottage Hospital" "authorization" "release" "health information" filetype:pdf` — did not return a direct PDF link but identified Cottage Health as the parent system.
2. **Web search** for `"Cottage Health" "medical records" "release form" authorization PDF` — found direct links to ROI forms on both `cottagehealth.org` and Azure Blob Storage (`stmlcottagehealthncus001.blob.core.windows.net`).
3. **Web search** for `site:cottagehealth.org authorization release medical records` — confirmed the medical records page URL and form links.
4. **Direct curl downloads** from `cottagehealth.org/app/files/public/...` URLs — **blocked by Akamai CDN** (returned "Access Denied" HTML).
5. **Direct curl downloads** from Azure Blob Storage URLs — **succeeded** without issue.
6. **Browser navigation** to `https://www.cottagehealth.org/patients-visitors/accessing-your-medical-records/` — confirmed the current form links and found updated versions (082025 vs 062025).

## What Worked
- The Azure Blob Storage URLs (`stmlcottagehealthncus001.blob.core.windows.net/public/...`) work with curl and don't have bot-blocking.
- The cottagehealth.org domain uses Akamai CDN which blocks curl requests even with a browser user-agent string.
- The medical records page is well-organized and easy to find (Home > Patients & Visitors > Accessing Your Medical Records).

## Difficulties
- **Akamai CDN blocking** on cottagehealth.org prevented direct PDF downloads from the main website URLs. The blob storage mirrors worked fine.
- The website has multiple versions of the same form at different URLs (062025 and 082025 versions), which could be confusing.

## Downloaded Forms

### form-1.pdf
- **Source URL:** `https://stmlcottagehealthncus001.blob.core.windows.net/public/NS1405_Authorization_for_Disclosure_of_Health_Information_082025.pdf`
- **File size:** 303,889 bytes
- **Description:** Cottage Health "Authorization for Disclosure of Health Information" — English version (August 2025 revision). This is the current ROI form linked from the medical records page. It covers all Cottage Health facilities including Goleta Valley Cottage Hospital, Santa Barbara Cottage Hospital, Cottage Rehabilitation Hospital, Santa Ynez Valley Cottage Hospital, and Cottage Urgent Care. 2-page form with text layer, checkboxes for facility selection, record types, delivery method (MyChart, pick-up, email, fax, mail), and expiration date.

### form-2.pdf
- **Source URL:** `https://stmlcottagehealthncus001.blob.core.windows.net/public/NS1405_Authorization_for_Disclosure_of_Health_Information_082025_spanish.pdf`
- **File size:** 195,064 bytes
- **Description:** Cottage Health "Autorización Para la Revelación de Información Médica" — Spanish version of the same ROI form (August 2025 revision). Same content and structure as form-1 but in Spanish.

### form-3.pdf
- **Source URL:** `https://stmlcottagehealthncus001.blob.core.windows.net/public/NS1405_Authorization_for_Disclosure_of_Health_Information_062025.pdf`
- **File size:** 349,042 bytes
- **Description:** Older version (June 2025 revision) of the same English ROI authorization form. Previously linked from the website but now replaced by the August 2025 version. Same basic structure and content.

## Additional Notes
- Cottage Health also offers an **online electronic request** option via Swellbox (https://www.swellbox.com/cottage-health-wizard.html) linked from the medical records page, which may be more convenient for patients than the PDF form.
- The form explicitly lists Goleta Valley Cottage Hospital as one of the facility options (checkbox).
- The form includes options for sensitive information categories (Mental Health, Chemical Dependency, HIV, Reproductive Healthcare) with appropriate California state law disclosures.
- Delivery methods include MyChart, pick-up (appointment only), email, fax, and mail.
- Authorization expires 12 months after signing if no date is specified.
