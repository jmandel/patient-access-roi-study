# Pocahontas Memorial Hospital — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `"Pocahontas Memorial Hospital" "authorization" "release" "health information" form PDF` — returned generic template sites, no direct hospital link.
2. **Web search** for `site:pmhwv.org authorization release medical records` — successfully identified the direct PDF URL (`Authorization-to-release-PHI.pdf`) and the Medical Records page.
3. **Website navigation** — Confirmed the Medical Records page at `https://www.pmhwv.org/patients-and-visitors/medical-records/` which links to two downloadable PDFs.

## Difficulties

- **Bot blocking / redirect**: Direct `curl` download of the PDF returned HTML instead of the actual PDF. The site appears to have some form of bot protection (possibly via reCAPTCHA or similar). Successfully worked around this by using a browser environment to fetch the PDF content.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.pmhwv.org/wp-content/uploads/2020/08/Authorization-to-release-PHI.pdf
- **Document type**: ROI / Authorization for Release of Medical Information
- **Pages**: 2
- **Description**: The primary authorization form for release of medical information. Includes fields for patient info, format requested (paper or electronic), time period, specific record types (discharge summary, ER records, imaging, lab reports, etc.), sensitive information opt-out section, purpose of disclosure, and recipient information. Has text layer (digitally created, not a scan). Revision date: 02/25/2020.

### form-2.pdf
- **Source URL**: https://www.pmhwv.org/wp-content/uploads/2021/01/COVID-19-Release-for-Employees-Students.pdf
- **Document type**: COVID-19 Testing and Diagnosis Authorization to Release Information
- **Pages**: 1
- **Description**: A specialized release form for COVID-19 test results to be shared with employers or schools. Valid for one year from signature. Not a general ROI form but a specific-purpose authorization related to COVID-19 testing. Created 01/14/2021.
