# Joseph P. Addabbo Family Health Center — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `"Joseph P. Addabbo Family Health Center" "authorization" "release" "health information" form PDF` — general results, no direct PDF links found.
2. **Web search** for `site:addabbo.org authorization release medical records` — successfully identified the Medical Records page (`/for-patients/medical-records/`) and Patient Forms page (`/for-patients/patient-forms/`).
3. **Website navigation** — navigated directly to the Medical Records page and Patient Forms page to find form links.

## What Worked

The organization's website has a dedicated **Medical Records** page (`https://www.addabbo.org/for-patients/medical-records/`) with clear links to the HIPAA authorization form. There is also a **Patient Forms** page (`https://www.addabbo.org/for-patients/patient-forms/`) listing all patient registration forms including a separate HIPAA Consent form.

Forms are hosted on a third-party platform (`pbformsonline.com` / Practice Builders) using a custom JavaScript-based PDF viewer. Direct `curl` downloads of the viewer URLs return HTML, not PDFs. The actual PDF files are served from a different path (`/pdv-view-merge/pdfviewer/data/fed/...`) which was discovered by inspecting network requests in the browser.

## Difficulties

- **Third-party form hosting**: Forms are not hosted directly on addabbo.org but on `pbformsonline.com` via a JavaScript-rendered PDF viewer. This required using browser DevTools to inspect network traffic and find the actual PDF download URLs.
- **No direct PDF download links**: The website links to the viewer, not the raw PDF files.

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://www.pbformsonline.com/pdv-view-merge/pdfviewer/data/fed/1566545098hipaa___fillable_form_07-10-18.pdf`
- **Linked from**: `https://www.addabbo.org/for-patients/medical-records/` (labeled "HIPAA-compliant request form")
- **What it is**: OCA Official Form No. 960 — "Authorization for Release of Health Information Pursuant to HIPAA" — approved by the New York State Department of Health. This is the primary ROI/authorization form used for requesting medical records. It is a fillable PDF with fields for patient info, provider info, recipient info, scope of records, sensitive information authorization (alcohol/drug treatment, mental health, HIV), reason for release, and expiration date.
- **File size**: 135,089 bytes

### form-2.pdf
- **Source URL**: `https://www.pbformsonline.com/pdv-view-merge/pdfviewer/data/fed/1745421042listening-postcard-updated-2.pdf`
- **Linked from**: `https://www.addabbo.org/for-patients/medical-records/` (labeled "We're Listening form") and `https://www.addabbo.org/for-patients/patient-forms/`
- **What it is**: "We're Listening" form — a bilingual (English/Spanish) patient survey/transfer form. Asks patients why they are seeking a transfer from Addabbo, with checkboxes for seeking another provider, moving, or requesting records for personal needs. Not an ROI form per se, but related to the records transfer process.
- **File size**: 963,019 bytes

### form-3.pdf
- **Source URL**: `https://www.pbformsonline.com/pdv-view-merge/pdfviewer/data/fed/1563365959addabbo-hipaa-release-english.pdf`
- **Linked from**: `https://www.addabbo.org/for-patients/patient-forms/` (labeled "HIPAA Consent to Release Information — English")
- **What it is**: "HIPAA Consent to Release Information Form" — a consent form for use and disclosure of Protected Health Information and acknowledgment of receipt of Notice of Privacy Practices. This is a general consent form signed during patient registration, not a specific records request authorization. It authorizes routine use/disclosure of PHI as described in the Notice of Privacy Practices.
- **File size**: 395,328 bytes

## Summary

The primary ROI form is **form-1.pdf** (OCA Form 960), which is the New York State standard authorization form for release of health information. The organization uses this state-standard form rather than a custom one. It was found on the Medical Records page, which is easily accessible from the main navigation under "For Patients > Medical Records." The form is fillable and can be submitted online through the Practice Builders platform, faxed, mailed, or delivered in person.
