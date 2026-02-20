# Phelps Hospital — ROI Form Retrieval Notes

## Organization
- **Name:** Phelps Hospital
- **Location:** Sleepy Hollow, NY
- **Website:** https://phelps.northwell.edu/
- **Parent System:** Northwell Health (https://www.northwell.edu/)

## Search Strategy

1. **Web search** for "Phelps Hospital Northwell Health authorization release health information form PDF" — immediately identified that Phelps Hospital uses the Northwell Health system-wide forms available at https://www.northwell.edu/manage-your-care/medical-records.
2. **Web search** for "Phelps Hospital Sleepy Hollow NY medical records release form" — confirmed the same Northwell Health forms page and provided direct PDF URLs.
3. **Web search** for "site:northwell.edu authorization release medical records form" — found additional form URLs.
4. **Navigated the Northwell Health medical records page** via browser to confirm all available forms and get exact download URLs.

## What Worked
The Northwell Health medical records page (https://www.northwell.edu/manage-your-care/medical-records) is well-organized and clearly lists all forms. Phelps Hospital, as part of the Northwell system, uses the system-wide forms. The page has two distinct sections:
- **Request for Access to Health Information** — specifically for patients requesting their own records (cites HIPAA 45 CFR 164.524)
- **Authorization for Release of Health Information** — general third-party release authorization

## Difficulties
- One initial download attempt for the Spanish authorization form returned HTML instead of PDF (the URL `authorization-for-release-health-information-form-spanish.pdf` redirected to an HTML page). Browser inspection revealed that both the "Request for Access Form (Spanish)" and "Authorization Form (Spanish)" links on the website point to the same URL (`request-for-access-to-health-info-form-spanish.pdf`), which appears to be a website bug.
- Two different URLs (`authorization-for-release-health-information-form-english.pdf` and `release-of-health-information-form-english.pdf`) both contain the same Authorization for Release form content, though the files differ at the binary level (different PDF metadata/creation tools possibly).

## Downloaded Files

| File | Source URL | Pages | Size | Description |
|------|-----------|-------|------|-------------|
| form-1.pdf | https://www.northwell.edu/sites/northwell.edu/files/2022-03/authorization-for-release-health-information-form-english.pdf | 3 | 86 KB | **Authorization for Release of Health Information (English)** — General third-party release authorization form. Covers release of health information from one entity to another. Includes checkboxes for delivery manner (mail, pick up, electronic), format (paper, USB, CD), and specific information types. |
| form-2.pdf | https://www.northwell.edu/sites/northwell.edu/files/2022-03/request-for-access-to-health-information-form-english-2022.pdf | 2 | 656 KB | **Request for Access to Health Information by Patient or Personal Representative (English)** — Patient-specific access form citing HIPAA 45 CFR 164.524. This is the patient self-access form, distinct from the third-party release. |
| form-3.pdf | https://www.northwell.edu/sites/northwell.edu/files/2022-03/release-of-health-information-form-english.pdf | 3 | 44 KB | **Authorization for Release of Health Information (English, alternate URL)** — Same text content as form-1.pdf but different file hash. Appears to be an older or alternate version of the same form hosted at a different URL. |
| form-4.pdf | https://www.northwell.edu/sites/northwell.edu/files/2022-03/release-of-health-information-form-instructions.pdf | 3 | 565 KB | **Instructions for Completing the Authorization for Release of Health Information Form** — Step-by-step guide with annotated examples for filling out the authorization form. |
| form-5.pdf | https://www.northwell.edu/sites/northwell.edu/files/2022-03/request-for-access-to-health-info-form-spanish.pdf | 6 | 199 KB | **Autorización para divulgar información médica / Authorization for Release of Health Information (Spanish)** — Spanish-language version of the authorization form. Note: On the website, this same URL is linked under both "Request for Access Form (Spanish)" and "Authorization Form (Spanish)". |
| form-6.pdf | https://www.northwell.edu/sites/northwell.edu/files/2022-03/request-for-access-to-health-form-instructions.pdf | 2 | 435 KB | **Instructions for Completing the Request for Access to Health Information Form** — Step-by-step guide with annotated examples for filling out the patient access request form. |

## Key Observations
- Northwell Health distinguishes between **patient self-access** (Request for Access) and **third-party release** (Authorization for Release), which is a good practice.
- The patient access form (form-2.pdf) explicitly cites HIPAA 45 CFR 164.524 (Right of Access).
- All forms are system-wide Northwell Health forms, not Phelps Hospital–specific.
- Forms are easily findable — directly linked from the main medical records page with clear section headings.
- The Spanish form situation appears to have a bug on the website (both Spanish links point to the same authorization form, with no separate Spanish patient access form available).
