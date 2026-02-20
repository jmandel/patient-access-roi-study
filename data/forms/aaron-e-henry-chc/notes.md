# Aaron E. Henry Community Health Services Center - ROI Form Search Notes

## Organization Info
- **Name**: Aaron E. Henry Community Health Services Center, Inc.
- **Website**: https://www.aehchc.org/
- **Location**: Clarksdale, MS 38614
- **Type**: FQHC, independent, nonprofit

## Search Strategies Tried

### 1. Web searches (multiple queries)
- `"Aaron E. Henry Community Health Services Center" "authorization" "release" "health information" filetype:pdf` — No results
- `"Aaron E. Henry" "medical records" "release form" Clarksdale Mississippi` — No results
- `site:aehchc.org medical records authorization release form` — No results
- `"Aaron E Henry" OR "AEHCHC" "release of information" OR "authorization" OR "medical records" PDF Mississippi` — No results
- `"aehchc.org" "release of information" OR "medical records request" OR "authorization to release" OR "ROI"` — No results
- `aehchc.org wp-content uploads PDF` — Found spam PDFs in formidable plugin uploads, no health forms
- `"aehchc" patient forms download PDF` — Found school-based consent form on pcmac.org
- `"Aaron E Henry" OR aehchc "notice of privacy practices" PDF` — No results
- `"Aaron E Henry" OR "aehchc" "consent to release" OR "authorization to disclose" OR "release of records"` — No results

### 2. Website navigation (browser)
- Explored full site structure via Chrome DevTools
- Checked every page in the XML sitemap (`/wp-sitemap.xml` → `/page-sitemap.xml`)
- Pages on site: Home, About (Mission, History, Administration, Board, Providers, Blog), Services, Locations, D.A.R.T.S. (transit), Job Openings, Patient Registration Forms, COVID-19 Notice, Privacy Policy, Terms, Accessibility Statement, Calendar, Patient-Centered Medical Home, Special Events, News
- **No medical records, ROI, or HIPAA-related pages exist on the site**
- "Patient Registration Forms" section contains only a contact form and online registration forms (patient + student)
- Privacy Policy page is a website privacy policy, not a HIPAA Notice of Privacy Practices

### 3. Direct URL guessing
- Tried common PDF paths under `/wp-content/uploads/` (release-of-information.pdf, authorization-form.pdf, etc.)
- All returned 403 — the entire uploads directory is access-restricted

### 4. Wayback Machine
- Checked web.archive.org for historical pages matching "release" — no relevant results

### 5. Third-party sites
- Found school-based consent form (AEH-branded) hosted on pcmac.org (North Panola School District)
- Patient portal is eClinicalWorks (mycw147.ecwcloud.com) — requires login, forms may be available behind portal

## Downloaded Forms

### form-1.pdf
- **Source URL**: http://images.pcmac.org/Uploads/NorthPanolaSD/NorthPanolaSD/Divisions/Forms/AEH-CONSENT%20FORM-%20rev%20June%202019%20re-revised%20(002)_Fillable_%7BSISE7D801F6F09B%7D.pdf
- **Document type**: School-based health consent form (Mississippi Children's Health Project Parent/Guardian Consent Form)
- **Description**: A fillable PDF consent form for parents/guardians to authorize AEH to provide health services (medical, dental, vision) to their children through a mobile medical unit visiting schools. Includes child health history, insurance information, and consent to treat. This is NOT a Release of Information / ROI form — it's a consent-to-treat form for school-based services.
- **Initial impression**: Not an ROI form; consent for school-based healthcare services

## Conclusion

**No ROI / Authorization for Release of Medical Records form was found online** for Aaron E. Henry Community Health Services Center. The organization's website is focused on information about services, locations, staff, and news. Patient-facing forms are limited to registration forms (available as online web forms, not PDFs). The only downloadable PDF form found was a school-based health consent form hosted on a third-party school district site.

## Difficulties Encountered
- Website has very limited patient-facing resources
- No dedicated medical records or HIM page exists
- WordPress uploads directory returns 403 for all direct PDF access attempts
- No HIPAA Notice of Privacy Practices is published online
- The organization appears to handle medical records requests entirely in-person or by phone
- The eClinicalWorks patient portal (behind login) may contain records request functionality, but this cannot be verified without patient credentials
