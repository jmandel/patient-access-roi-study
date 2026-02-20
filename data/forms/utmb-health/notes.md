# UTMB Health — ROI Form Retrieval Notes

## Organization
- **Name**: University of Texas Medical Branch (UTMB)
- **Website**: https://www.utmb.edu
- **Location**: Galveston, TX
- **Type**: Teaching hospital, government-owned, major system

## Search Strategies

1. **Web search** for `UTMB "authorization" "release" "health information" form PDF` — immediately found the UTMB medical records page and identified Forms 7033 and 7032.
2. **Web search** for `UTMB Galveston "medical records" "release form" PDF` — confirmed the same forms and also surfaced a third-party copy hosted by Champion Records Service.
3. **Website navigation** — visited https://www.utmb.edu/utmbhealth/online-services/medical-records which is the official medical records request page. Forms are clearly listed with download links.

## Retrieval Difficulty: Easy-Moderate

The forms were easy to find (one click from search results), but downloading required extra effort because the PDFs are hosted on SharePoint (`liveutmb.sharepoint.com`), which doesn't respond to simple curl requests. Browser-based download was needed.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://liveutmb.sharepoint.com/:b:/s/collaboration/webfiles/Eco2ejThJIlDjcRxwSOsH14BR3PF8A5GzjVy_LSMcUOyrw?e=ajENiL
- **Original filename**: Patients Request for Medical Records.pdf
- **UTMB Form**: 7033 (English)
- **File size**: 279,350 bytes
- **Pages**: 1
- **Description**: Patient/parent/guardian authorization form for release of PHI by UTMB. This is the form specifically designed for patients requesting their own records. Includes options for mail, email, and MyChart portal delivery. Has text layer. Covers entire or partial records with date ranges. Includes specific checkboxes for mental health, substance abuse, and HIV/AIDS information.

### form-2.pdf
- **Source URL**: https://liveutmb.sharepoint.com/:b:/s/collaboration/webfiles/EdAslXAlEhZDnOwaBpjq6ZcB3jXZPnOZRCFT3kTjcKuGpw?e=fqa7g7
- **Original filename**: Authorization_Form.pdf
- **UTMB Form**: 7032 (English)
- **File size**: 119,687 bytes
- **Pages**: 1
- **Description**: General HIPAA authorization for release of PHI by UTMB — for "all other requests" (not patient self-requests). Lists specific record types (emergency, hospital, clinic, radiology, lab, billing, etc.) with checkboxes. Has text layer. Includes purpose-of-request field and standard HIPAA authorization language.

### form-3.pdf
- **Source URL**: https://www.championrecordsservice.com/uploads/forms/2024/UTMB-HIPAA-Auth-10-16.pdf
- **Original filename**: UTMB-HIPAA-Auth-10-16.pdf
- **File size**: 121,604 bytes
- **Pages**: 1
- **Description**: Third-party hosted copy of the UTMB HIPAA authorization form (appears to be a version of Form 7032), hosted by Champion Records Service. Very similar content to form-2.pdf but may be an older or alternate version (filename suggests October 2016 date). Downloaded directly via curl without issues.

## Key Observations

- UTMB has **two distinct ROI forms**: Form 7033 for patients/guardians requesting their own records, and Form 7032 for all other requestors. This is a patient-friendly distinction.
- The **patient form (7033) offers email and MyChart delivery options**, which is notable for digital accessibility.
- Forms are hosted on **SharePoint**, requiring browser-based download (curl receives HTML login pages).
- UTMB also partners with **Datavant/Swellbox** for online electronic records requests, offering a digital alternative to the paper forms.
- The medical records page is well-organized under Online Services > Request Medical Records, making it reasonably findable.
- Additional related forms are also available: 7032B (non-legal representative of minors), 7034 (authorization to release PHI *to* UTMB), revocation form, and amendment request form.
