# Broward Health — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `Broward Health "authorization" "release" "health information" form PDF` — immediately found the direct PDF URL and the medical records request page.
2. **Website navigation** — visited https://www.browardhealth.org/patients-and-visitors/information-request/medical-records-request which is the dedicated Medical Records Request page. Found links to ROI forms in 4 languages (English, Spanish, Creole, Portuguese).
3. **curl download** — Failed due to Cloudflare bot protection ("Just a moment..." challenge page). Had to use browser-based download instead.
4. **Browser-based download** — Used Chrome DevTools to fetch PDFs via JavaScript `fetch()` from the authenticated browser session. Note: the lowercase URL for the English form failed even in the browser; the case-sensitive URL (`ROI-English-032620.ashx`) succeeded.

## Difficulties

- **Cloudflare protection**: Direct curl requests (even with realistic User-Agent and Referer headers) were blocked by Cloudflare's bot detection, returning an HTML challenge page instead of the PDF.
- **Case-sensitive URLs**: The English form URL linked in the page (`roi-english-032620.ashx`) failed with a `fetch()` error when lowercase. The original case-sensitive URL (`ROI-English-032620.ashx`) from the CDN subdomain worked.
- **Image-only English form**: The English version is a scanned image with no text layer, while the Spanish, Creole, and Portuguese versions have extractable text — suggesting the English form is an older scan that was never OCR'd or recreated digitally.

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://www.browardhealth.org/-/media/Broward-Health/Files/Patients-and-Visitors/ROI-English-032620.ashx`
- **File size**: 463,053 bytes (463 KB)
- **Pages**: 1
- **Description**: Broward Health Authorization for Release of Health Information — English version. This is an image-only scan (single grayscale JPEG, 1700×2200 px at 200 DPI). No extractable text layer. Dated 03/26/20 based on filename.

### form-2.pdf
- **Source URL**: `https://www.browardhealth.org/-/media/broward-health/files/patients-and-visitors/roi_spanish.ashx`
- **File size**: 90,670 bytes (91 KB)
- **Pages**: 1 (based on text content)
- **Description**: Broward Health Authorization for Release of Health Information — Spanish version. Has extractable text. Includes sections for drug/alcohol treatment records, mental health records, HIV/AIDS records, and genetic records classification.

### form-3.pdf
- **Source URL**: `https://www.browardhealth.org/-/media/broward-health/files/patients-and-visitors/roi_creole.ashx`
- **File size**: 78,041 bytes (78 KB)
- **Pages**: 1 (based on text content)
- **Description**: Broward Health Authorization for Release of Health Information — Haitian Creole version. Has extractable text. Same ROI form translated to Creole with the same section structure.

### form-4.pdf
- **Source URL**: `https://www.browardhealth.org/-/media/broward-health/files/patients-and-visitors/roi_portugese.ashx`
- **File size**: 92,959 bytes (93 KB)
- **Pages**: 1 (based on text content)
- **Description**: Broward Health Authorization for Release of Health Information — Portuguese version. Has extractable text. Same ROI form translated to Portuguese.

## Additional Notes

- Broward Health also offers an **online request option** via a third-party service (Swellbox) at `https://www.swellbox.com/broward-health-wizard.html` — this is a web-based wizard for requesting medical records without needing to download/print/scan the PDF form.
- The Medical Records Request page is well-organized and easy to find (Patients and Visitors > Information Request > Medical Records Request — 3 clicks from homepage).
- The page lists submission instructions for multiple Broward Health facilities (Medical Center, North, Coral Springs, Imperial Point, East Imaging Center, Weston) with fax numbers for each.
- Processing time noted as approximately 3 business days.
