# WakeMed Health & Hospitals — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `WakeMed "authorization" "release" "health information" form PDF` — immediately returned the correct page and a direct PDF URL.
2. **Web search** for `WakeMed "medical records" "release form"` — confirmed the same page and provided a direct link to the English PDF.
3. **Initial direct PDF URL** (`/assets/documents/patients-and-visitors/roi-authorization-eng.pdf`) returned HTML instead of a PDF (likely an outdated/redirected URL).
4. **Browser navigation** to the HIM page (`/patients-and-visitors/medical-records/health-information-management-him`) revealed the current PDF URLs under `/sites/default/files/pdf/`.
5. **curl download** of the correct URLs succeeded without bot blocking.

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://www.wakemed.org/sites/default/files/pdf/N-935%20Authorization%20to%20Release%20Medical%20Information%20(1).pdf`
- **Document**: Authorization to Release Medical Information (English)
- **Pages**: 2
- **File size**: 73,867 bytes
- **Description**: WakeMed's official ROI form (English version). Includes fields for patient info, recipient info, dates of visit, specific record types (office visits, hospital admission, ED visit, immunizations, imaging, etc.), format options (paper or electronic copy), and delivery method (mail, fax, pick up, onsite review, MyChart, or email). Has text layer with selectable text. Not a fillable PDF (checkboxes and fields are text-based, not interactive form fields).

### form-2.pdf
- **Source URL**: `https://www.wakemed.org/sites/default/files/pdf/N-935S%20Authorization%20to%20Release%20Medical%20Information.pdf`
- **Document**: Authorization to Release Medical Information (Spanish)
- **Pages**: 2
- **File size**: 76,260 bytes
- **Description**: Spanish-language version of the same ROI form. Same structure and content as the English version, translated into Spanish. Some fields (like "Address where you want your PHI sent to" and "Email address") remain in English.

## Difficulties

- The first PDF URL found via web search (`/assets/documents/patients-and-visitors/roi-authorization-eng.pdf`) was stale and returned HTML instead of a PDF. Had to use the browser to navigate to the actual HIM page to get the current URLs.
- No other significant difficulties. The forms were easy to find — linked directly from the Health Information Management page under Patients and Visitors.

## Findability Assessment

The form is located at: Patients and Visitors → Medical Records → Health Information Management (HIM). It is clearly labeled and linked in both English and Spanish. The page also explains the process for requesting records, fees, and contact information. Moderate findability — requires navigating through a few levels of the site hierarchy, but the page is well-organized.
