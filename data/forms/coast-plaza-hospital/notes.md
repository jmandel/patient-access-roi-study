# Coast Plaza Hospital — ROI Form Retrieval Notes

## Search Strategies

1. **Web search for PDF forms**: Searched for `Coast Plaza Hospital Norwalk CA "authorization" "release" "health information" filetype:pdf` — no direct results.
2. **Web search for medical records release form**: Searched for `Coast Plaza Hospital Norwalk CA "medical records" "release form" filetype:pdf` — found a direct link to the English authorization form (2022 version).
3. **Site-scoped search**: Searched `site:coastplazahospital.com authorization release medical records` — found the hospital's Medical Records page and a newer 2024 version of the ROI form.

Strategy #2 and #3 both worked. The hospital has a dedicated Medical Records page at `https://www.coastplazahospital.com/for-patients/medical-records/` with download links.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.coastplazahospital.com/wp-content/uploads/sites/9/2024/06/CPH-ROI-Form-FINAL.pdf
- **Document type**: Authorization to Release Protected Health Information (ROI form)
- **Impression**: This appears to be the current/final version of Coast Plaza Hospital's ROI form (uploaded June 2024). It is titled "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION" and includes fields for patient information, information release source/destination, purpose, and types of records to release. Has a text layer (not a scan). PDF version 1.6.

### form-2.pdf
- **Source URL**: https://www.coastplazahospital.com/wp-content/uploads/sites/9/2022/01/CPH-Medical-Records-Auth-Form-English.pdf
- **Document type**: Authorization to Release Protected Health Information (ROI form)
- **Impression**: This is an older version of the same form (uploaded January 2022). Very similar content to form-1 but with minor differences (e.g., different fax number, includes "Personal Use" and "Disability" as purpose options with underscores for checkboxes). PDF version 1.7, 2 pages.

## Difficulties

- No significant difficulties. The forms were directly accessible via public URLs on the hospital's website without any bot blocking, login walls, or JavaScript rendering requirements.
- Both forms downloaded successfully with curl.
- Both forms have extractable text layers.
