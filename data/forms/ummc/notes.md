# UMMC ROI Form Retrieval Notes

## Organization
- **Name**: University of Mississippi Medical Center (UMMC)
- **Website**: https://www.umc.edu
- **Location**: Jackson, MS

## Search Strategies

### What was tried
1. **Web search** for "University of Mississippi Medical Center authorization release health information form PDF" — identified two key URLs:
   - `https://www.umc.edu/Compliance/files/thefinalauthorizationform.pdf` (older URL)
   - `https://www.umc.edu/common/files/ummch/Health/Forms/release-of-medical-information.pdf` (current URL on site)
2. **Direct curl download** — failed due to DNS resolution (`Could not resolve host: www.umc.edu`) in this environment
3. **Wayback Machine** — found archived HIPAA Forms page (Oct 2025) and Release Form page (Feb 2026), but the English PDF itself was never archived; only the Spanish version was archived
4. **Browser-based access** — navigated via Wayback Machine archived pages; confirmed the English PDF returns 404 on the live site while the Spanish version remains available
5. **pdf4pro.com cached copy** — found a cached/indexed copy of the English form via web search, successfully downloaded from their CDN

### What worked
- **Wayback Machine** for the Spanish version (`release-of-medical-information-ES.pdf`) — archived Feb 10, 2026
- **pdf4pro.com CDN** for the English version — cached copy of the older form

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://web.archive.org/web/20260210195649if_/https://www.umc.edu/common/files/ummch/Health/Forms/release-of-medical-information-ES.pdf`
- **Original URL**: `https://www.umc.edu/common/files/ummch/Health/Forms/release-of-medical-information-ES.pdf`
- **File size**: 232,277 bytes
- **PDF version**: 1.7
- **Description**: Spanish-language version of the UMMC "Authorization for Release of Health Information" (Autorización para la divulgación de información de salud). Includes locations: Jackson, Grenada, Lexington, Madison, and Clinic/Other. This appears to be the more recent version of the form.

### form-2.pdf
- **Source URL**: `https://pdf4pro.com/cdn/release-of-medical-information-the-university-of-75f5a3.pdf`
- **Original URL**: `https://www.umc.edu/common/files/ummch/Health/Forms/release-of-medical-information.pdf` (currently 404)
- **File size**: 137,220 bytes
- **PDF version**: 1.5
- **Description**: English-language version of the UMMC "Authorization for Release of Health Information" (Form #1862, Rev. 04/2018). Includes locations: Jackson, Grenada, Lexington, and Clinic/Other (no Madison). This is an older cached copy; the current English form link on the UMMC website is broken (404).

## Difficulties Encountered

1. **DNS resolution failure**: `www.umc.edu` could not be resolved via curl or direct browser navigation in this environment. The browser could only access the site indirectly through the Wayback Machine proxy context.

2. **Broken English form link**: The UMMC website's Release Form page (`/Healthcare/Patients-and-Visitors/Release-Form.html`) links to the English PDF at `/common/files/ummch/Health/Forms/release-of-medical-information.pdf`, which currently returns HTTP 404. The older URL (`/Compliance/files/thefinalauthorizationform.pdf`) also returns 404. The Spanish version at the same path with `-ES` suffix works fine.

3. **Wayback Machine gaps**: The English authorization form PDF was never archived by the Wayback Machine, despite the HTML pages linking to it being archived. Only the Spanish version PDF was captured.

4. **Cached copy age**: The English form obtained from pdf4pro.com is Form #1862 Rev. 04/2018 and lacks the Madison location that appears in the Spanish version, suggesting it's an older version.

## Key Observations

- UMMC publishes their ROI form in both English and Spanish
- The form is accessible from two paths: Compliance > HIPAA Forms, and Health Care > Patients and Visitors > Release Form
- The current English form link is broken (404) — a significant findability issue
- The form includes options for Paper, Electronic, and "View Access" delivery formats
- The authorization expires 6 months from signature date
- Sensitive information (substance abuse, mental health, HIV, genetic testing) requires separate initials
- The form requires a witness signature
- Multiple UMMC facility locations are listed on the form
