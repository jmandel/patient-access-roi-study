# Mayers Memorial Hospital District — ROI Form Retrieval Notes

## Organization
- **Name:** Mayers Memorial Hospital District
- **Website:** https://www.mayersmemorial.com
- **Location:** Fall River Mills, CA
- **Type:** Critical access hospital, independent, government-owned

## Search Strategies

1. **Web search** for `"Mayers Memorial Hospital District" "authorization" "release" "health information" form PDF` — did not find a direct link from the hospital website but identified a PatientPop-hosted PDF.
2. **Web search** for `"Mayers Memorial Hospital District" "medical records" "release form"` — found the Medical Records page URL and a reference to the PatientPop form.
3. **Web search** for `site:mayersmemorial.com authorization release form filetype:pdf` — no results indexed.
4. **Website navigation** — visited the Medical Records page (`/getpage.php?name=Medical_Records`): it only has descriptive text about the department (hours, phone number), with no downloadable form.
5. **Patients & Visitors page** (`/getpage.php?name=For_Patients`) — found links to: Patient Guide, Notice of Privacy Practices, Disclosure of Privacy Practices (PDF), Financial/Insurance, Issue Resolution Form, Surveys. No direct ROI/authorization form link.
6. **Notice of Privacy Practices page** — found PDFs for privacy practices in English and Spanish; no ROI form.
7. **Web search** for the PatientPop-hosted PDF association with Mayers Memorial — confirmed the form at `sa1s3.patientpop.com/assets/docs/223399.pdf` is associated with Mayers Memorial Hospital District's PatientPop/Tebra platform.

## Downloaded Files

### form-1.pdf
- **Source URL:** https://sa1s3.patientpop.com/assets/docs/223399.pdf
- **Document type:** Authorization for Release of Medical Records (ROI form)
- **Description:** A 1-page, simple authorization form for release of medical records. Contains fields for patient name, record number, address, DOB, information requested (free text), purpose of release (free text), and recipient information. Has a text layer (not a scan). Not branded with the Mayers Memorial logo/name — appears to be a generic form hosted on PatientPop's CDN. Found via web search; not directly linked from the hospital website's patient-facing pages.
- **File size:** 24,164 bytes

### form-2.pdf
- **Source URL:** https://www.mayersmemorial.com/docs/Disclosure_of_Health_Info.pdf
- **Document type:** Disclosure of Privacy Practices (NOT an ROI form)
- **Description:** A 2-page image-only scanned PDF. No text layer extractable via pdftotext. Linked from the Patients & Visitors page as "Disclosure of Privacy Practices." This is a privacy-related document, not a release of information authorization form.
- **File size:** 58,834 bytes

## Difficulties Encountered
- The hospital's website does not directly link to an ROI/authorization form from any patient-facing page.
- The Medical Records page describes the department but provides no downloadable form or instructions for requesting records release.
- The ROI form was only found via web search on a third-party CDN (PatientPop), not from the hospital website itself.
- The form is generic/unbranded — it does not specifically mention Mayers Memorial Hospital District.
- The Disclosure of Health Info PDF is an image-only scan with no text layer.
