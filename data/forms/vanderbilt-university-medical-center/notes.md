# Vanderbilt University Medical Center — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for "Vanderbilt University Medical Center authorization release health information form PDF" — returned multiple direct PDF links from vumc.org subdomains (student health, information-privacy-security) and third-party form sites.
2. **Web search** for "Vanderbilt University Medical Center medical records release form PDF" — confirmed same URLs plus the official vanderbilthealth.com medical records page.
3. **Web search** for "site:vanderbilthealth.com authorization release medical records" — identified the main patient-facing page and online request portals (Swellbox, ChartSwap).
4. **Navigated to** https://www.vanderbilthealth.com/information/medical-record-information — the official medical records page. Found the current authorization form links under "Request Records by Authorization Form" section, in both English and Spanish.

**What worked best**: The official vanderbilthealth.com medical records page had the current forms clearly linked. Web searches also surfaced older versions from VUMC subdomains that are still publicly accessible.

## Online Request Options

Vanderbilt also offers three online portals (not PDF-based):
- **Patient Medical Records Request**: https://www.swellbox.com/vanderbilt-umc-wizard.html
- **Provider Medical Records Request**: https://www.swellbox.com/vanderbilt-umc-provider-wizard.html
- **Third-Party Medical Records Request**: https://chartswap.com/

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.vumc.org/student-health/sites/default/files/Authorization%20for%20Release%20of%20Medical%20Information%20from%20VUMC-VMR%203017.pdf
- **Document**: "Authorization for Release of Medical Information" (VMR 3017, dated 02/2022)
- **Pages**: 4
- **Description**: Older version of the release FROM VUMC form. Uses old "Vanderbilt University Medical Center" branding. Image-only scan at 96 DPI — no usable text layer. Includes patient identification, recipient info, record categories, purpose of release, billing & fees pages, and signature/authorization sections.

### form-2.pdf
- **Source URL**: https://www.vumc.org/information-privacy-security/sites/default/files/public_files/Authorization%20for%20Release%20of%20Medical%20Information%2008_2017.pdf
- **Document**: "Authorization for Release of Medical Information" (VMR-P 3017, dated 08/2017)
- **Pages**: 4
- **Description**: Even older version of the same release form. Includes separate return address options for Vanderbilt University Hospital vs. Vanderbilt Psychiatric Hospital. Has a "Medical Record Includes Records From" section listing specific facilities. Image-only scan, no usable text layer.

### form-3.pdf
- **Source URL**: https://student-health.vmcweb.org/student-health/sites/default/files/Authorization%20for%20Release%20of%20Medical%20Information%20to%20VUMC%20-VMR%203022.pdf
- **Document**: "Authorization for Release of Medical Information TO VUMC" (VMR 3022, dated 02/2022)
- **Pages**: 2
- **Description**: Form for authorizing release of records FROM another provider TO Vanderbilt (incoming records). Different form number (3022 vs 3017). Old VUMC branding. Image-only scan.

### form-4.pdf ⭐ (Current official English form)
- **Source URL**: https://files.vanderbilthealth.com/sites/default/files/2024-03/authorization-for-release-of-medical-information-eng.pdf
- **Document**: "Vanderbilt Health — Authorization for the Use or Disclosure of Protected Health Information" (VMR 3017, dated 10/2023)
- **Pages**: 2
- **Description**: Current official ROI form linked from vanderbilthealth.com medical records page. Uses new "Vanderbilt Health" branding. Redesigned as a more compact 2-page form (vs 4 pages in older versions). Includes facility checkboxes (Vanderbilt University Hospital, Psychiatric Hospital, Bedford Hospital, Behavioral Health Clinics, Wilson County Hospital, Tullahoma-Harton Hospital, Monroe Carell Jr. Children's Hospital, Home Care Services). Has delivery options: Mail, Electronic ("View, print, or download as PDF through request portal"), or Other. Includes a fee schedule table. Image-only scan at 96 DPI with minimal text layer (only "Patient Label or Patient Identifiers").

### form-5.pdf
- **Source URL**: https://files.vanderbilthealth.com/sites/default/files/2024-03/authorization-for-release-of-medical-information-spa.pdf
- **Document**: Spanish language version of the current authorization form
- **Pages**: 2
- **Description**: Spanish translation of form-4. Same layout and structure. Image-only scan.

## Difficulties

- **All forms are image-only scans**: Every downloaded PDF is a scanned image at 96 DPI with essentially no text layer (only "Patient Label or Patient Identifiers" as extractable text). This means they are not fillable electronically and are not accessible for screen readers.
- **Multiple outdated versions still publicly accessible**: The VUMC student health and privacy/security subdomains still host older versions (2017, 2022) of the authorization form, which could confuse patients searching online.
- **No issues with download**: All PDFs downloaded successfully with curl; no bot blocking or login walls encountered.
