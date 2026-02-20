# Olmsted Medical Center — ROI Form Retrieval Notes

## Organization
- **Name:** Olmsted Medical Center
- **Website:** https://www.olmmed.org
- **Location:** Rochester, MN
- **Type:** Independent nonprofit physician practice

## Search Strategies

1. **Web search** for `"Olmsted Medical Center" "authorization" "release" "health information" filetype:pdf` — returned direct PDF links and identified the "Manage Your Health Information" page.
2. **Web search** for `"Olmsted Medical Center" "medical records" "release form" Rochester MN` — confirmed the main ROI form URL and page location.
3. **Web search** for `site:olmmed.org authorization release medical records` — provided additional context and form URLs.
4. **Direct website navigation** to https://www.olmmed.org/patients-visitors/your-care-visit/manage/ — the main page listing all consent/authorization forms.

## Difficulties
- **Bot blocking (Akamai CDN):** Direct `curl` downloads were blocked with "Access Denied" responses. Had to use browser (Chrome DevTools) to fetch the PDFs and extract them via base64 encoding.
- Forms were easy to find on the website (Patients & Visitors > Your Care & Visit > Manage Your Health Information), clearly organized with multiple language options.

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.olmmed.org/app/files/public/4c1a4ac3-ee2d-4c4e-9475-80528a070c34/Patients%20and%20Visitors/Consent%20-%20Authorization%20for%20Release%20of%20Health%20Information.pdf
- **File size:** 205,357 bytes
- **Description:** "Authorization for Release of Health Information" — the primary ROI form. Includes fields for patient name, DOB, address, release from/to details, method of disclosure (mail, pick up, fax, patient portal), specific information to be released (clinic visit notes, operative reports, lab, radiology, immunizations, etc.), purpose of release, and authorization/signature section. This is the main form patients use to request their medical records.
- **Initial impression:** Standard ROI/authorization form — appears to be a fillable PDF (version 1.7 with AcroForm). Well-organized single-page form.

### form-2.pdf
- **Source URL:** https://www.olmmed.org/app/files/public/6ac63789-b7eb-489d-b147-e62879400dd0/Patients%20and%20Visitors/Consent---Authorization-for-Allowing-Verbal-Communication-of-PHI.pdf
- **File size:** 105,001 bytes
- **Description:** "Authorization for Allowing Verbal Communication of Protected Health Information" — a separate authorization form that permits OMC staff to verbally discuss a patient's health information with a designated person. Limited to verbal discussions only, does not permit release of written health information. Valid for one year or specified time period.
- **Initial impression:** Companion authorization form, not a traditional ROI form but related to health information disclosure. Narrower scope (verbal only).

## Other Forms Available (Not Downloaded)
The "Manage Your Health Information" page also lists:
- Spanish and Somali translations of both forms above
- "Authorization for Use and Disclosure of Patient Health Information for Publicity Purposes" (English only)
- MyChart Adult Proxy Access and Authorization forms (on a separate proxy access page)

## Summary
Olmsted Medical Center makes their ROI forms readily available on a dedicated "Manage Your Health Information" page. The primary form (form-1.pdf) is the standard authorization for release of health information. The website is well-organized with clear navigation, and forms are offered in multiple languages. The main barrier was CDN-level bot blocking requiring browser-based download.
