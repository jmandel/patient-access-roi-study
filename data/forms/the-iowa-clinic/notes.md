# The Iowa Clinic — ROI Form Retrieval Notes

## Organization
- **Name:** The Iowa Clinic
- **Website:** https://www.iowaclinic.com
- **Location:** West Des Moines, IA
- **Type:** Physician practice, independent, for-profit

## Search Strategies

### 1. Web searches (partially successful)
- `"The Iowa Clinic" "authorization" "release" "health information" filetype:pdf` — No direct PDF results
- `"The Iowa Clinic" "medical records" "release form" filetype:pdf` — No direct PDF results
- `site:iowaclinic.com authorization release medical records` — Found the medical records page URL
- `"The Iowa Clinic" "release of information" form authorization download` — Found pdfFiller reference and Executive Health form page

### 2. Website navigation (no downloadable PDF found)
- Navigated to https://www.iowaclinic.com/for-patients/payment-billing/medical-records/
- Page has four sections: Request Records from Us, Request Imaging Records, For Healthcare Providers, For Third-Party Organizations
- **No downloadable PDF forms** — all records requests are handled via online web forms:
  - Patient requests: Datavant/Swellbox Health Record Wizard (https://www.swellbox.com/iowa-clinic-wizard.html)
  - Imaging records: Formstack-powered web form on iowaclinic.com
  - Healthcare providers: Swellbox wizard
  - Third-party organizations: SmartRequest portal (https://smartrequest.com)
- Also found Executive Health Medical Record Release Form page — another Formstack web form
- Old URL (medical-records-old/medical-record-request-form/) contains an older Formstack-based authorization form

### 3. Wayback Machine archive search (successful)
- Searched `web.archive.org/cdx/search/cdx` for PDFs hosted on iowaclinic.com
- Found two archived authorization PDFs that were previously available at `/static/docs/`:
  - `Authorization_For_Release_From.pdf` (archived 2015-07-23)
  - `medical-records-release-form.pdf` (archived 2012 and 2016)
- Both URLs return 404 on the live site — PDFs have been removed in favor of online forms

### 4. Direct URL probing (unsuccessful)
- Tried various common paths (`/content/cms/files/`, `/forms/`, `/pdf/`, etc.) — all 404

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://web.archive.org/web/2015/http://www.iowaclinic.com/static/docs/Authorization_For_Release_From.pdf
- **Original URL:** http://www.iowaclinic.com/static/docs/Authorization_For_Release_From.pdf (now 404)
- **File size:** 69,082 bytes
- **What it is:** "Authorization for Release of Information from The Iowa Clinic P.C." — This is the newer/updated version of the ROI form. Single-page, well-formatted layout with checkboxes for record types and purpose of release. Includes sections for sensitive information opt-out (substance abuse, genetics, mental health, AIDS). Has text layer, not a scan.
- **Note:** This appears to be a more polished, professionally designed version compared to form-2.

### form-2.pdf
- **Source URL:** https://web.archive.org/web/2016/http://www.iowaclinic.com/static/docs/medical-records-release-form.pdf
- **Original URL:** http://www.iowaclinic.com/static/docs/medical-records-release-form.pdf (now 404)
- **File size:** 76,365 bytes
- **What it is:** "Authorization for Release of Information from The Iowa Clinic, P.C." — An older version (dated October 2012) of the same ROI form. Two pages. Includes a dedicated second page for "Specific Authorization for Release of Information protected by State or Federal Law concerning Mental Health, Substance Abuse Treatment or AIDS-Related Information." References 42 CFR Part 2 and Iowa Code Chapter 228 and 141(A). Has text layer but uses many tab/space characters for formatting.

## Difficulties Encountered
1. **No current downloadable PDF forms** — The Iowa Clinic has fully transitioned to online web-based forms (Swellbox/Datavant, Formstack, SmartRequest). There are no PDF downloads available on their current website.
2. **Multiple third-party platforms** — Different request types route to different vendor platforms (Swellbox for patients/providers, SmartRequest for third parties, Formstack for executive health).
3. **Archived forms only** — The only downloadable PDF authorization forms were found via the Wayback Machine from 2012-2016. These were previously hosted at `/static/docs/` but have since been removed.

## Summary
The Iowa Clinic no longer offers downloadable PDF authorization forms. All medical records requests are now handled through online web forms via third-party platforms (Datavant/Swellbox, Formstack, SmartRequest). Two historical PDF versions of their "Authorization for Release of Information" form were retrieved from the Wayback Machine archive. These represent the forms that were in use approximately 2012-2015.
