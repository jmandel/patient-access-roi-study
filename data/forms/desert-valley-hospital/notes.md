# Desert Valley Hospital — ROI Form Retrieval Notes

## Organization Info
- **Name**: Desert Valley Hospital
- **Website**: https://dvmc.com
- **Location**: Victorville, CA 92395
- **Parent System**: Prime Healthcare (for-profit)
- **Associated Medical Group**: Desert Valley Medical Group (desertvalleymedicalgroup.com)

## Search Strategies Tried

1. **Web search for DVH-specific ROI form**: Searched for `"Desert Valley Hospital" "authorization" "release" "health information" filetype:pdf` and similar queries. No DVH-specific downloadable form was found.

2. **Navigated dvmc.com website**: Visited the Medical Records page at https://dvmc.com/patients-visitors/medical-records/. The page describes the ROI process (mail/fax/in-person submission, $15 fee, 14 business day turnaround) but does **not** provide a downloadable authorization form. The only PDFs on dvmc.com are Privacy Policy documents and a mosquito bite prevention flyer.

3. **Checked dvmc.com sitemap**: Crawled `page-sitemap.xml` — confirmed no form download pages exist on the site.

4. **Probed common URL patterns**: Tried multiple guessed URLs for authorization PDFs on dvmc.com (e.g., `/wp-content/uploads/2022/12/DVH-Authorization-for-Use-or-Disclosure-of-Health-Information.pdf`). All returned 404.

5. **Checked Desert Valley Medical Group site** (desertvalleymedicalgroup.com): No patient ROI form. Found only an employment services authorization form.

6. **Searched Prime Healthcare parent system**: Checked `ehp.primehealthcare.com` — found a form but it is marked "FOR PRIME EMPLOYEES AND THEIR ENROLLED DEPENDENTS USE ONLY" (form PHSI-320-012).

7. **Checked sister Prime Healthcare hospitals**: Found the standard Prime Healthcare patient ROI form template (PHSI-280-014) on:
   - Chino Valley Medical Center (cvmc.com) — downloaded successfully
   - Centinela Hospital Medical Center (centinelamed.com) — verified same template
   - These forms are identical in structure, differing only in the hospital name/address header and form code suffix.

## What Worked
The form was not available directly from Desert Valley Hospital. The best result came from checking sister hospitals within the Prime Healthcare system, which use an identical standardized form template (PHSI-280-014). Desert Valley Hospital would use the same form with "DVH" designation.

## Downloaded Files

### form-1.pdf
- **Source URL**: https://ehp.primehealthcare.com/wp-content/uploads/2022/09/Authorization-for-Use-or-Disclosure-of-Health-Information.pdf
- **What it is**: Prime Healthcare Employee Health Plan authorization for use/disclosure of health information. Marked "FOR PRIME EMPLOYEES AND THEIR ENROLLED DEPENDENTS USE ONLY." Form number PHSI-320-012. 2 pages.
- **Relevance**: This is the employee version, not the general patient ROI form. Downloaded because it appeared in search results as a Prime Healthcare authorization form before the employee-only restriction was apparent.

### form-2.pdf
- **Source URL**: https://www.cvmc.com/wp-content/uploads/2022/12/CVMC-Authorization-for-Use-or-Disclosure-of-Health-Information.pdf
- **What it is**: Patient-facing "Authorization for Use or Disclosure of Health Information" from Chino Valley Medical Center — a sister Prime Healthcare hospital. Form number PHSI-280-014 CVMC (04/20). 2 pages. Includes checkboxes for record types, purpose, electronic format options (CD or paper), expiration, and patient rights. This is the same standardized template Desert Valley Hospital would use (with DVH header/address instead).
- **Relevance**: This is the closest available patient ROI form for Desert Valley Hospital. The template is system-wide across Prime Healthcare facilities.

### form-3.pdf
- **Source URL**: https://desertvalleymedicalgroup.com/wp-content/uploads/2023/06/Authorization-for-Employment-services-8.pdf
- **What it is**: Authorization for Employment Services form from Desert Valley Medical Group. 1 page. For occupational health services (DOT physicals, drug screens, etc.) — not an ROI/medical records release form.
- **Relevance**: Not an ROI form. This was the only downloadable authorization-type form found on the Desert Valley Medical Group website.

## Difficulties Encountered
- **No downloadable ROI form on dvmc.com**: Desert Valley Hospital's medical records page instructs patients to contact the department by phone, fax, or in person to obtain the authorization form, but does not provide it for download.
- **No form on DVMG site either**: The associated medical group site also lacks a patient ROI form.
- **Had to rely on sister hospital**: The actual patient form was only findable on other Prime Healthcare hospital websites (CVMC, Centinela). Desert Valley Hospital uses the same system-wide template but hasn't posted their version online.

## Retrieval Difficulty: Hard
The form is not available from Desert Valley Hospital's website at all. Finding the correct template required knowing the parent system (Prime Healthcare) and checking sister hospitals.
