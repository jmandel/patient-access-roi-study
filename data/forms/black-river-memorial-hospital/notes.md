# Black River Memorial Hospital - ROI Form Retrieval Notes

## Organization
- **Name:** Black River Memorial Hospital (part of Black River Health)
- **Website:** https://blackriverhealth.com
- **Location:** Black River Falls, WI
- **Type:** Critical access hospital, independent, nonprofit, Midwest

## Search Strategies

### What worked
- **Web search** for `site:blackriverhealth.com authorization release medical records` immediately surfaced the direct PDF URL.
- **Patient Resources page** (https://blackriverhealth.com/patient-resources/) has a "Forms" section with the ROI form listed under "General Forms" as "Authorization to Disclose Information" with description: "Allows us to share or receive information from other healthcare facilities or providers."

### Other searches tried
- `"Black River Memorial Hospital" "authorization" "release" "health information" filetype:pdf` — no direct results
- `"Black River Memorial Hospital" Black River Falls WI "medical records" "release form"` — general guidance but no direct link

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://blackriverhealth.com/wp-content/uploads/2025/12/Release-of-Information-Authorization.pdf
- **Document type:** Release of Information Authorization form (ROI form)
- **Pages:** 2
- **File size:** 515,295 bytes
- **Description:** A comprehensive ROI/authorization form titled "Release of Information Authorization" from Black River Health. Page 1 collects patient information, specifies the healthcare provider/facility releasing records (checkboxes for Krohn Clinic, Black River Memorial Hospital, Black River Healthcare Clinic), destination for records, reason for release (continuing care, worker's comp, school, per patient request, insurance, legal, FMLA/disability, etc.), types of information to release (with service date range), format options (mailed, faxed, pick up, CD, electronic/PDF), and expiration terms. Page 2 contains patient rights information including right to receive a copy, right to refuse, right to revoke, re-disclosure notice, right to inspect, prohibition of conditions, and signature lines for patient and authorized person.
- **Text extraction:** Very sparse via pdftotext — the form appears to use many small images for text labels (Word-generated PDF with text rendered as images in some sections). Only "MRN", "FIN", and checkbox characters were extracted. Visual inspection via browser confirmed the full form content.
- **Fillable fields:** PDF metadata reports `Form: none` — no interactive form fields detected.
- **Created:** August 6, 2025 (modified December 4, 2025) by Austyn Zinn using Microsoft Word for Microsoft 365.

## Difficulties
- **Text extraction limitation:** The PDF, despite being created from Microsoft Word, renders most text as small images rather than searchable text. pdftotext extracted almost nothing. Visual inspection was required to confirm the document's content.
- **No other ROI-specific forms found:** The patient resources page lists several forms (Patient Information, Verbal Consent, Authorization to Disclose, Advance Directives, minor treatment consent, procedure prep forms) but only one ROI/authorization form.

## Retrieval Difficulty: Easy
The form was straightforward to find — it's linked directly from the Patient Resources page under a clearly labeled "Forms" section, and web search also surfaced the direct URL.
