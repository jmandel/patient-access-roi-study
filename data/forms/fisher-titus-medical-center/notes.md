# Fisher-Titus Medical Center — ROI Form Retrieval Notes

## Organization
- **Name:** Fisher-Titus Medical Center
- **Location:** Norwalk, OH
- **Website:** https://www.fishertitus.org
- **Type:** Independent community hospital, nonprofit

## Search Strategies

1. **Web search** for `Fisher-Titus Medical Center "authorization" "release" "health information" filetype:pdf` — did not return direct PDF links but confirmed the form exists.
2. **Web search** for `Fisher-Titus Medical Center Norwalk Ohio "medical records" "release form"` — identified the patient forms page and medical records page.
3. **Web search** for `site:fishertitus.org authorization release medical records` — confirmed the patient forms page at `/patients-guests/patient-forms` and medical records page at `/medical-records`.
4. **Direct website navigation** to the patient forms page — found two downloadable forms directly linked.
5. **Medical records page** (`/medical-records`) — found a second version of the authorization form linked as "Medical Records Request Form."

## What Worked
Direct navigation to the **Patient Forms page** (`/patients-guests/patient-forms`) was the most effective strategy. The page clearly lists downloadable forms with descriptions. The **Medical Records page** (`/medical-records`) also links to the authorization form, but under a different URL (potentially an updated version).

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.fishertitus.org/media/2025/07/Service-Documents_FTC24-5-Authorization-to-disclose-PHI.pdf
- **Found on:** Patient Forms page (`/patients-guests/patient-forms`)
- **Document type:** Authorization to Disclose PHI (Protected Health Information) — this is the primary ROI form
- **Pages:** 2
- **File size:** 158,608 bytes
- **Notes:** Comprehensive authorization form (Form #FTC24-5, revised 11/20/2024). Includes patient info, recipient info, treatment location checkboxes for Fisher-Titus facilities, purpose of request, detailed record type selection, format/delivery options (CD, flash drive, encrypted email, paper), sensitive information consent, revocation language, and 1-year auto-expiration.

### form-2.pdf
- **Source URL:** https://www.fishertitus.org/media/2025/07/Service-Documents_FTC11-4-Emergency-Medical-Authorization-OPT-11-16.pdf
- **Found on:** Patient Forms page (`/patients-guests/patient-forms`)
- **Document type:** Emergency Medical Authorization — NOT an ROI form
- **Pages:** 1
- **File size:** 25,283 bytes
- **Notes:** Form for parents/guardians to authorize emergency medical treatment for minor children. Form #FTC11-4, revised 3/6/12. Not related to release of information.

### form-3.pdf
- **Source URL:** https://www.fishertitus.org/media/2025/08/FTC24-5_Authorization_to_disclose_PHI_2.pdf
- **Found on:** Medical Records page (`/medical-records`), linked as "Medical Records Request Form"
- **Document type:** Authorization to Disclose PHI — same form type as form-1.pdf but a slightly different version
- **Pages:** 2
- **File size:** 166,110 bytes
- **Notes:** Same form number (FTC24-5) as form-1.pdf but with minor differences (e.g., "Occupational Health" listed under specialty offices instead of a duplicate "Behavioral Health" entry). Different MD5 hash confirms it's not identical. This version appears on the medical records page and may be a slightly updated revision.

## Difficulties
- **None significant.** The forms were easily accessible from the website with no bot blocking, login walls, or JavaScript-rendered download links. Both the Patient Forms page and Medical Records page are well-organized and clearly link to downloadable PDFs.

## Retrieval Difficulty: Easy
The form was found within 2 clicks from the homepage (Patients & Guests → Patient Forms), with clear labeling and direct PDF download links.
