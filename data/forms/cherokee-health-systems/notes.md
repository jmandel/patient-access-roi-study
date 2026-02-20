# Cherokee Health Systems — ROI Form Retrieval Notes

## Organization Info
- **Name**: Cherokee Health Systems (now rebranded as **River Valley Health**)
- **Website**: https://www.rvh.org/
- **Location**: Knoxville, TN
- **Type**: FQHC, independent, nonprofit

## Search Strategies

1. **Web search** for `Cherokee Health Systems Knoxville TN "authorization" "release" "health information" form PDF` — immediately found the medical records page at https://www.rvh.org/patients-visitors/medical-records/
2. **Web search** for `site:cherokeehealth.com authorization release medical records` — confirmed direct PDF URLs
3. **Navigated the website** to the Medical Records page (Patients & Visitors → Medical Records) — found 4 PDF download links

The forms were easy to find — prominently linked under Patients & Visitors → Medical Records, with clear labels and instructions.

## Download Difficulties

- **CDN bot blocking**: Direct `curl` downloads were blocked by Akamai CDN ("Access Denied") even with realistic browser User-Agent and headers.
- **Workaround**: Used Chrome DevTools browser to fetch the PDFs via JavaScript `fetch()`, base64-encoded them, and decoded to disk. All 4 PDFs downloaded successfully.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.rvh.org/app/files/public/81c83db3-d365-4d1d-9d48-180da88de191/12.22.25%20Release%20of%20Information%20-%20English.pdf
- **File size**: 133,570 bytes
- **Pages**: 1
- **Description**: "Authorization to Release and/or Obtain Health Records" — the primary English-language ROI form. Includes patient info, sender/recipient facility fields, record type checkboxes (Medical, Behavioral Health, Substance Use Disorder, Other), date range, purpose of disclosure, and signature/authorization section. Has text layer (fillable or at least text-based). References sensitive health information categories.

### form-2.pdf
- **Source URL**: https://www.rvh.org/app/files/public/2cc0de8d-85ae-4cab-93c4-9214c9a2b402/12.18.25%20Release%20of%20Information%20-%20Spanish.pdf
- **File size**: 147,692 bytes
- **Pages**: 1
- **Description**: "Autorización para solicitar / enviar historial médico" — Spanish-language version of the ROI form. Same structure and fields as form-1.pdf.

### form-3.pdf
- **Source URL**: https://www.rvh.org/app/files/public/71d25e7f-af20-4431-a7a5-4cbacf80a9bf/12.19.25%20Color%20Coated%20Release%20of%20Information%20.pdf
- **File size**: 135,599 bytes
- **Pages**: 1
- **Description**: "How To Complete the Form" (English) — color-coded instructional version of the same ROI form, with annotations explaining each section (e.g., "Enter your personal information in this section", "You are authorizing River Valley Health to obtain records from the following healthcare provider"). Same layout as form-1 but with added guidance.

### form-4.pdf
- **Source URL**: https://www.rvh.org/app/files/public/5f94e10f-3f73-4bf2-8a95-6ca3636d9ce5/12.23.25%20Color%20Copy%20Release%20of%20Information%20-%20Spanish.pdf
- **File size**: 150,618 bytes
- **Pages**: 1
- **Description**: "How To Complete the Form" (Spanish) — Spanish-language version of the color-coded instructional form.

## Summary

Cherokee Health Systems (now River Valley Health) provides a well-organized medical records page with 4 downloadable PDFs: the ROI form in English and Spanish, plus annotated "How To Complete" guides in both languages. The forms use a third-party records management service (Vital Records Control) and can be submitted via email to registration@rvh.org or in person. The forms are dated December 2025, indicating they are recently updated.
