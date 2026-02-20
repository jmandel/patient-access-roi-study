# Lincoln Hospital (Davenport, WA) — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `Lincoln Hospital Davenport WA "authorization" "release" "health information" form PDF` — generic results, no direct hit.
2. **Web search** for `Lincoln Hospital Davenport Washington "medical records" "release form" PDF` — **found direct Cloudinary-hosted PDF links** for both the hospital and clinics forms, plus a link to the Health Records page.
3. **Site-specific search** `site:lincolnhospital.org medical records release authorization form` — confirmed two forms (hospital and clinics versions) and revealed an alternate clinics form URL.
4. **Browsed the Health Records page** at `https://www.lincolnhospital.org/patients-and-visitors/health-records/` — confirmed two forms are linked under a "Forms" heading. Page is straightforward — 2 clicks from homepage (Patients and Visitors → Health Records).

## Downloaded Forms

### form-1.pdf
- **Source URL:** `https://res.cloudinary.com/dpmykpsih/image/upload/lincoln-hospital-site-343/media/1179/medical-records-release-form-_clinic.pdf`
- **Also available at:** `https://www.lincolnhospital.org/media/1179/medical-records-release-form-_clinic.pdf` (same file, verified by MD5)
- **Document type:** Authorization for Release of Medical Records (clinics)
- **Pages:** 2
- **File size:** 948,568 bytes
- **Text layer:** No — image-only scan. pdftotext extracts no text.
- **Notes:** This is a scanned version of the clinics release form. Being image-only makes it non-fillable digitally.

### form-2.pdf
- **Source URL:** `https://res.cloudinary.com/dpmykpsih/image/upload/lincoln-hospital-site-343/media/1180/release-of-info-form.pdf`
- **Also available at:** `https://www.lincolnhospital.org/media/44556afe6a04479fb95b497fbdc2030f/release-of-info-form.pdf`
- **Document type:** Authorization for Release of Health Care Information and Records (hospital)
- **Pages:** 2
- **File size:** 284,491 bytes
- **Text layer:** Yes — full text extractable
- **Form fields:** None (flat PDF, not fillable)
- **Notes:** Standard HIPAA-compliant authorization form for Lincoln County Public Hospital District #3. Includes checkboxes for types of information, purpose of release, revocation rights, re-disclosure notice, and 90-day default expiration. Created with Acrobat PDFMaker 19 for Word. Title references "HIPAA FORM 3 & 9 (2007)".

## Difficulties Encountered

- The alternate clinics form URL (`https://res.cloudinary.com/dpmykpsih/image/upload/lincoln-hospital-site-343/media/a1666be1f0a846999c68eec3c06c874e/authorization-for-release-of-medical-records-clinics.pdf`) returned HTTP 400 — possibly removed or replaced.
- The Health Records page returned 403 to `web_fetch` (likely bot blocking), but loaded fine in the browser.
- The clinics form (form-1.pdf) is an image-only scan with no extractable text, limiting digital accessibility.

## Summary

Lincoln Hospital publishes two ROI forms on their Health Records page — one for the hospital and one for the clinics. Both are easy to find (2 clicks from homepage). The hospital form (form-2.pdf) has a text layer and clear content, while the clinics form (form-1.pdf) is an image-only scan. Neither form has fillable fields.
