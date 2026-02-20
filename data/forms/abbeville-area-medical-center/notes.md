# Abbeville Area Medical Center — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `"Abbeville Area Medical Center" "authorization" "release" "health information" filetype:pdf` — did not directly return the form in top results.
2. **Web search** for `"Abbeville Area Medical Center" "medical records" "release form" South Carolina` — found the medical records page URL and a direct link to the PDF.
3. **Web search** for `site:abbevilleareamc.com authorization release medical records` — returned a direct URL to the 2019 version of the PDF form.
4. **Website navigation** — fetched the Medical Records page at `https://www.abbevilleareamc.com/abbeville-area-medical-center/patients-visitors/medical-records/` and extracted all PDF links from the HTML.

**What worked best**: The site-specific web search (strategy 3) returned a direct PDF URL. Scraping the medical records page HTML (strategy 4) revealed both a newer version of the authorization form (uploaded Jan 2023) and a HIPAA privacy brochure.

## Downloaded Documents

### form-1.pdf
- **Source URL**: https://www.abbevilleareamc.com/wp-content/uploads/2023/01/HIM-1022-authorization.pdf
- **Document type**: Authorization to Release Protected Health Information (ROI form)
- **Description**: Single-page PDF titled "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION". Includes patient name/DOB fields, recipient fields, checkboxes for record types (H&P, discharge summary, operative reports, labs, radiology, etc.), date of service fields, purpose field, and signature lines. Contains sensitive-info release language (psych, substance abuse, HIV). States authorization valid for 90 days. Form number HIM 1022. This is the current version linked from the medical records page (uploaded 2023-01, replacing a 2019 version).
- **File size**: 230,134 bytes
- **Pages**: 1
- **Has text layer**: Yes

### form-2.pdf
- **Source URL**: http://www.abbevilleareamc.com/wp-content/uploads/2019/02/HIPAA-Brochure-AAMC-Rev-07-2017-legal.pdf
- **Document type**: HIPAA Notice of Privacy Practices (brochure)
- **Description**: Two-page PDF titled "SUMMARY OF YOUR PRIVACY RIGHTS". This is a HIPAA privacy practices brochure, not an ROI form. It describes how AAMC uses and discloses protected health information, patient rights, and how to file complaints. Revised July 2017.
- **File size**: 666,717 bytes
- **Pages**: 2
- **Has text layer**: Yes

## Difficulties Encountered

- **None significant**. The form was easy to find — it is directly linked from the Medical Records page, which is accessible via Patients & Visitors navigation. The website is a straightforward WordPress site with no bot blocking or login requirements.
- An older version of the same form (from 2019) was found via web search; the current website links to a 2023-uploaded version with minor updates (added purpose field, updated revocation language).

## Retrieval Difficulty: Easy

The form was findable within 2-3 clicks from the homepage (Home → Patients & Visitors → Medical Records) and was directly downloadable as a PDF.
