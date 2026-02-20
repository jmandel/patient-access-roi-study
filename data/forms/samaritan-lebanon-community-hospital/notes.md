# Samaritan Lebanon Community Hospital — ROI Form Retrieval Notes

## Organization Details
- **Name**: Samaritan Lebanon Community Hospital
- **Website**: https://samhealth.org/find-a-location/samaritan-lebanon-community-hospital/
- **Location**: Lebanon, OR
- **Parent System**: Samaritan Health Services (samhealth.org)
- **Type**: Community hospital, regional system, nonprofit

## Search Strategies

### What was tried:
1. **Web search** for "Samaritan Lebanon Community Hospital authorization release health information form PDF" — pointed to the parent system's medical records request page and forms/documents page.
2. **Web search** for "Samaritan Health Services medical records release form authorization PDF Oregon" — identified key pages including the computer-readable files page and forms/documents page.
3. **Web search** for "site:samhealth.org authorization release medical records" — found the MRO online portal, computer-readable files page, and forms/documents page.
4. **Navigating samhealth.org** — browsed the Request Medical Records page, Computer Readable Files page, and Forms and Documents page.
5. **Browser inspection** — used JavaScript to extract all links from the medical records page, which revealed hidden/collapsed download links for the standard Authorization to Disclose Health Information form (English and Spanish) that weren't visible in the initial markdown rendering.
6. **MRO portal inspection** — confirmed the MRO Express portal is a web-only form (no downloadable PDF).

### What worked:
- The standard ROI form (Authorization to Disclose Health Information) was found by extracting all links from the Request Medical Records page using browser DevTools. The links were inside a collapsed/accordion section ("Sending a Request by Mail or Fax") that wasn't visible in the initial page fetch.
- The Computer Readable EHI Export Request forms were found on the dedicated "Request Computer Readable Files" subpage, also in a collapsed section.
- The Notice of Privacy Practices was found on the Forms and Documents page.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://samhealth.org/computer-readable-ehi-export-request-english?type=pdf
- **Document type**: Authorization to Disclose Electronic Health Information in Computer Readable Export (English)
- **Pages**: 2
- **File size**: 532,278 bytes
- **Description**: Specialized form for requesting health information in computer-readable format (EHI export). Includes patient info, date range, sensitive information initials, and delivery options (MyChart or CD). Branded as Samaritan Health Services.

### form-2.pdf
- **Source URL**: https://samhealth.org/wp-content/uploads/2023/12/Computer-Readable-EHI-Export-Request-Spanish.pdf
- **Document type**: Authorization to Disclose Electronic Health Information in Computer Readable Export (Spanish)
- **Pages**: 2
- **File size**: 472,665 bytes
- **Description**: Spanish-language version of form-1.pdf.

### form-3.pdf
- **Source URL**: https://samhealth.org/shs-notice-of-privacy-practices?type=pdf
- **Document type**: Notice of Privacy Practices
- **Pages**: 2
- **File size**: 618,837 bytes
- **Description**: HIPAA Notice of Privacy Practices for Samaritan Health Services. Lists all Samaritan facilities including Samaritan Lebanon Community Hospital. Covers patient rights, uses/disclosures, and how to file complaints.

### form-4.pdf
- **Source URL**: https://samhealth.org/authorization-to-disclose-health-information?type=pdf
- **Document type**: Authorization to Disclose Health Information (English) — **Primary ROI form**
- **Pages**: 2
- **File size**: 647,777 bytes
- **Description**: The standard ROI/authorization form for requesting medical records from any Samaritan Health Services facility. Includes checkboxes for specific facilities (including "Samaritan Lebanon Hospital"), record types, date ranges, format options (MyChart, Email, Paper, CD, Fax), sensitive information initials, and release-to-self or third-party options. This is the main form patients would use to request their medical records.

### form-5.pdf
- **Source URL**: https://samhealth.org/wp-content/uploads/2023/09/Authorization-to-Disclose-Health-Information-Spanish.pdf
- **Document type**: Authorization to Disclose Health Information (Spanish) — **Primary ROI form (Spanish)**
- **Pages**: 2
- **File size**: 517,175 bytes
- **Description**: Spanish-language version of form-4.pdf.

## Difficulties Encountered
- **No prominent download link**: The standard ROI form is not prominently linked on the medical records request page. The page primarily directs patients to the MRO Express online portal. The downloadable PDF form links are hidden inside a collapsed/accordion section titled "Sending a Request by Mail or Fax" — requiring browser-based inspection to discover.
- **MRO portal is primary**: Samaritan Health Services has outsourced medical records request processing to MRO Corp. The primary method is an online portal, not a downloadable form.
- **Confusable search results**: Web searches returned forms from "Samaritan Medical Center" (Watertown, NY) and "samaritanhealth.com" which are different organizations from "Samaritan Health Services" (samhealth.org, Oregon).

## Summary
Samaritan Health Services provides forms at the system level (not facility-specific). The primary ROI form is form-4.pdf (Authorization to Disclose Health Information), which lists Samaritan Lebanon Community Hospital as one of the facilities. They also offer a specialized Computer Readable EHI Export form and all forms are available in both English and Spanish. The organization primarily directs patients to an online MRO portal for records requests.
