# Banner - University Medical Center Phoenix: ROI Form Retrieval Notes

## Organization
- **Name**: Banner - University Medical Center Phoenix
- **Parent System**: Banner Health
- **Website**: https://www.bannerhealth.com
- **Location**: Phoenix, AZ

## Search Strategies

1. **Web search**: `Banner Health "authorization" "release" "health information" medical records form PDF` — Found the system-wide form immediately.
2. **Web search**: `Banner University Medical Center Phoenix medical records release form PDF` — Found both the system-wide form and a hospital-specific version.
3. **Site-specific search**: `site:bannerhealth.com medical records release authorization form` — Confirmed the same two forms.

The forms were easy to find. Banner Health publishes them directly on bannerhealth.com under the patients/medical-records section.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.bannerhealth.com/-/media/files/project/bh/patients-visitors/medical-records/12000004-bh-authorization-to-use-or-disclose-protected-health-information-625.ashx
- **File size**: 222,330 bytes
- **Pages**: 2
- **Document type**: System-wide Authorization for Release of Medical Information
- **Description**: Banner Health's primary ROI form (form number 1200-0004, revision 06/2025). This is the current system-wide form used across Banner Health facilities. It includes patient information fields, release from/to sections, checkboxes for record types (medical records, billing, imaging, etc.), sensitive information opt-in (HIV, behavioral health, substance abuse, genetic testing), delivery format options, and standard HIPAA authorization language. The form notes that patients can access most health information through the Banner Health patient portal. Expires 12 months from date signed.

### form-2.pdf
- **Source URL**: https://www.bannerhealth.com/-/media/files/project/bh/locations/banner-university-medicine-family-medicine-clinic/1200-authorization-for-release-of-medical-information-roi.ashx
- **File size**: 89,850 bytes
- **Pages**: 2
- **Document type**: Hospital-specific Authorization for Release of Medical Information
- **Description**: An older hospital-specific version of the ROI form (form number 1200, revision 09/2017). This form is titled "Authorization for Release of Medical Information (Hospital)" and has a slightly different layout from the system-wide form. It includes similar fields but with some differences in structure (e.g., separate drug/alcohol treatment release section, employee verification fields). This appears to be a legacy form that may still be in use at some locations.

## Difficulties
- **form-1.pdf** had minor PDF parsing warnings (`xref num 71 not found`) from pdftotext, but text extraction worked fine.
- No bot blocking or login walls encountered. Both forms were directly downloadable via curl.
- Both forms are flat PDFs (not fillable), designed for print-and-sign workflow.
