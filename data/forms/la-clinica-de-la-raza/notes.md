# La Clínica de La Raza — ROI Form Retrieval Notes

## Organization
- **Name**: La Clínica de La Raza
- **Website**: https://laclinica.org
- **Location**: Oakland, CA (multiple locations in East Bay)
- **Type**: FQHC, independent, nonprofit

## Search Strategies

### 1. Web searches (multiple queries)
- `"La Clínica de La Raza" "authorization" "release" "health information" filetype:pdf`
- `"La Clínica de La Raza" "medical records" "release form" filetype:pdf`
- `site:laclinica.org authorization release medical records`
- `"La Clinica de La Raza" OR laclinica.org "release of information" form PDF Oakland`
- `laclinica.org filetype:pdf`
- `"La Clinica de La Raza" HIPAA "right of access" request records form`

**Result**: Web searches consistently returned forms from **laclinicahealth.org**, which is a *different organization* — La Clinica Health Centers in Medford, Oregon. Search engines frequently confused the two similarly-named organizations. No ROI form was found hosted on laclinica.org.

### 2. Website navigation (browser)
- Navigated to https://laclinica.org/patient-information/ — no medical records or ROI form link
- Checked "Rights and Responsibilities" page — general patient rights, no forms
- Checked "Notice of Privacy Practices" page — links to NPP PDFs (English, Spanish, Chinese)
- No "Medical Records", "Forms", or "Release of Information" section exists on the website

### 3. URL guessing
Tried common PDF URL patterns on laclinica.org/wp-content/uploads/:
- authorization-release-information.pdf, release-of-information.pdf, Authorization-to-Release-Information.pdf, etc.
- All returned 404

### 4. Other strategies
- Checked laclinica.projectahost.com — confirmed this is La Clinica Health (Oregon), not La Clínica de La Raza
- Searched for OCHIN-standard ROI forms (La Clínica uses OCHIN's MyChart) — OCHIN doesn't publish standard forms
- Checked Wayback Machine — no ROI forms found in archived pages

## Findings

**La Clínica de La Raza does NOT publish an ROI form on their public website.**

Their Notice of Privacy Practices (form-3.pdf) instructs patients to request records by writing to:
> La Clínica de La Raza, Inc.  
> Attention: Privacy Officer  
> P.O. Box 22210, Oakland, CA 94623

The NPP confirms the right to access/copy PHI and mentions the right to receive PHI in electronic format, but provides no downloadable authorization form.

## Downloaded Files

### form-1.pdf
- **Source URL**: https://laclinicahealth.org/wp-content/uploads/Authorization-to-Release-Information-english.pdf
- **What it is**: Authorization to Release/Disclose Information (2015 Revision)
- **Organization**: ⚠️ **WRONG ORGANIZATION** — La Clinica del Valle, Medford, OR 97501 (not La Clínica de La Raza, Oakland, CA)
- **Notes**: Found via web search that confused the two similarly-named organizations. The form explicitly references "La Clinica del Valle at 3617 S. Pacific Hwy., Medford, OR 97501."

### form-2.pdf
- **Source URL**: https://laclinicahealth.org/wp-content/uploads/Release-of-Information-0822-English.pdf
- **What it is**: Authorization to Release Information (August 2022 revision)
- **Organization**: ⚠️ **WRONG ORGANIZATION** — La Clinica Health Centers, Oregon (marked "OR PCD" at top)
- **Notes**: Also from laclinicahealth.org (Oregon). Updated version of their ROI form.

### form-3.pdf
- **Source URL**: https://laclinica.org/wp-content/uploads/2019/09/LC_8092-Notice-of-Privacy-Practices-English.pdf
- **What it is**: Notice of Privacy Practices (FORM 8092, 10/12 revision)
- **Organization**: ✅ La Clínica de La Raza, Inc., Oakland, CA (correct organization)
- **Notes**: Not an ROI form, but the only patient-facing privacy/records document published online by this organization. Contains the process description for requesting records.

## Difficulties
1. **Name confusion**: Two unrelated organizations share the "La Clinica" name — La Clínica de La Raza (Oakland, CA, laclinica.org) and La Clinica Health Centers (Medford, OR, laclinicahealth.org). Search engines consistently conflate them.
2. **No online form**: La Clínica de La Raza appears to handle medical records requests only in-person or by mail, with no downloadable ROI form on their website.
3. **Minimal web presence for patient forms**: The laclinica.org website has limited patient-facing documents — only the Notice of Privacy Practices, Rights and Responsibilities, and a sliding fee matrix are published as PDFs.

## Retrieval Difficulty: Hard / No form found online
The organization does not appear to make their ROI form available for download on their public website. Patients likely need to call (510-535-4000) or visit a clinic location to obtain the form.
