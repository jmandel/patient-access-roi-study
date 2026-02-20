# Southwell (Tift Regional Health System) — ROI Form Retrieval Notes

## Organization
- **Name**: Southwell (Tift Regional Health System)
- **Website**: https://mysouthwell.com
- **Location**: Tifton, GA

## Search Strategies

1. **Web search** for `Southwell "Tift Regional" "authorization" "release" "health information" form PDF` — no direct results.
2. **Web search** for `mysouthwell.com "medical records" "release form" authorization PDF` — returned a direct link to the TRHS authorization PDF and the medical records request page.
3. **Site-specific search** for `site:mysouthwell.com medical record request authorization release form` — confirmed the medical release page URL and identified both TRHS and Southwell Ambulatory forms.
4. **HTML scraping** of `https://mysouthwell.com/medical-release/` — extracted all PDF links on the page, revealing additional forms.

The medical release page is found under **Home → Patient & Visitors → Medical Release** on the website.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://mysouthwell.com/wp-content/uploads/2020/10/TRHS-Authorization-to-Release-Obtain-PHI.pdf
- **Document type**: ROI / Authorization to Release/Obtain Protected Health Information
- **Description**: Official TRHS authorization form for Tift Regional Medical Center and associated facilities. 2-page PDF with text layer. Includes checkboxes for facility selection, record types, delivery method (Paper/CD/Electronic Delivery), and purpose of disclosure. Contains sections for patient signature, witness, and revocation instructions.
- **Facilities covered**: Tift Regional Medical Center, Southwell Health and Rehabilitation, Southwell Medical (campus of TRMC), Southwell Medical Rural Health Clinics.

### form-2.pdf
- **Source URL**: https://mysouthwell.com/wp-content/uploads/2025/07/Release-of-Information.pdf
- **Document type**: Release of Information form (image-only scan)
- **Description**: A newer (July 2025 upload date) single-page form that is an image-only scan with no extractable text. 75KB file. Cannot determine exact content without OCR, but title suggests it is a Release of Information form. This may be a more recent version of the ROI form or a different variant.

### form-3.pdf
- **Source URL**: https://mysouthwell.com/wp-content/uploads/2020/10/SWA-Authorization-for-Release-of-Records-Clean.pdf
- **Document type**: Authorization to Release Protected Health Information (Southwell Ambulatory)
- **Description**: Single-page PDF with text layer for Southwell Ambulatory, Inc. facilities. Similar structure to form-1 but covers ambulatory/specialty locations (Gastroenterology, Valdosta Endoscopy Center, Lowndes Endoscopy Center, Pediatrics). Includes record type checkboxes and disclosure purpose options.

### form-4.pdf
- **Source URL**: https://mysouthwell.com/wp-content/uploads/2020/09/List-of-TRHS-Entities.pdf
- **Document type**: List of TRHS Entities (supplementary reference document)
- **Description**: Single-page PDF listing all Tift Regional Health System entity names and addresses. Not an ROI form itself, but a reference document linked from the medical release page that patients may need to identify which facility to request records from.

## Difficulties Encountered
- No significant difficulties. Forms were readily accessible from the website without bot blocking or login requirements.
- Form-2.pdf is an image-only scan with no text layer, making content analysis impossible without OCR.
- The organization maintains separate authorization forms for its hospital system (TRHS) and ambulatory clinics (SWA), which could be confusing for patients.

## Additional Notes
- Southwell also partners with **Verisma** for online medical record requests (https://www.verisma.com).
- Health Information Management contact: 229-353-6110 or 229-353-6120.
- The medical release page is at: https://mysouthwell.com/medical-release/
- The medical record request page is at: https://mysouthwell.com/medical-record-request/
