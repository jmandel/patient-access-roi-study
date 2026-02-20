# Grady Memorial Hospital — ROI Form Retrieval Notes

## Organization
- **Name**: Grady Memorial Hospital
- **Website**: https://www.gradyhealth.org
- **Location**: Atlanta, GA
- **System**: Grady Health System (government/public hospital)

## Search Strategy
1. Web search for `Grady Memorial Hospital Atlanta GA "authorization" "release" "health information" form PDF` — immediately found the main authorization form PDF and the medical records page.
2. Web search for `Grady Memorial Hospital Atlanta "medical records" "release form" request` — confirmed the first result and revealed additional PDF URLs including an older PHI form and a combined instructions+form document.

Both searches were effective on the first try. The forms are directly linked from the Grady Health System website at https://www.gradyhealth.org/medical-records/.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.gradyhealth.org/wp-content/uploads/medicalrecords.pdf
- **File size**: 195,547 bytes
- **Description**: "Patient Authorization for Disclosure of Protected Health Information" — the current/primary ROI form. Includes patient info fields, from/to disclosure fields, checkboxes for record types (hospital visits, office visits, diagnostic reports), purpose of disclosure, and signature fields. Appears to be the main form currently linked from the medical records page.

### form-2.pdf
- **Source URL**: https://www.gradyhealth.org/wp-content/uploads/2017/08/Grady-PHI-form.pdf
- **File size**: 144,601 bytes
- **Description**: "Authorization for Disclosure of Protected Health Information (PHI)" — an older version of the authorization form (2-page format). Has similar content to form-1 but different layout. The PDF has some structural issues (xref errors reported by pdftotext). Includes a page with documentation requirements for different requester types (patients, representatives, third parties).

### form-3.pdf
- **Source URL**: https://www.gradyhealth.org/wp-content/uploads/Medical-Records-Requests-combined.pdf
- **File size**: 463,478 bytes
- **Description**: Combined document that includes: (1) a cover page with instructions for medical records requests during COVID-19, including drop-off, mail, and electronic submission options, fees ($6.50 max), and processing times; (2) the Authorization for Disclosure of PHI form (same as form-2); and (3) documentation requirements page. This is the most comprehensive document as it bundles instructions with the form.

## Difficulties
- No significant difficulties. Forms were easy to find via web search and directly downloadable as PDFs without any bot blocking or login requirements.
- form-2.pdf had minor PDF structural issues (xref errors) but text was still extractable.
- The medical records page (https://www.gradyhealth.org/medical-records/) provides clear instructions and direct links to the form.
