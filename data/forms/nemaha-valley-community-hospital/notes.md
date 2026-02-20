# Nemaha Valley Community Hospital — ROI Form Retrieval Notes

## Organization
- **Name**: Nemaha Valley Community Hospital
- **Location**: Seneca, KS
- **Website**: https://nemvch.com
- **Type**: Critical access hospital, independent, nonprofit, Midwest

## Search Strategies

1. **Web search for PDF**: Searched `"Nemaha Valley Community Hospital" "authorization" "release" "health information" filetype:pdf` — no direct results.
2. **Web search for release form**: Searched `"Nemaha Valley Community Hospital" "medical records" "release form" filetype:pdf` — no direct PDF link but pointed to the hospital website.
3. **Site-scoped search**: Searched `site:nemvch.com authorization release medical records` — this was the most effective. The AI search response identified the form on the Resources page and provided the direct URL.
4. **Website navigation**: Navigated to https://nemvch.com/resources/ — found the "Authorization for Release of Health Information" form linked under "Documents and Resources" section.

## What Worked
The site-scoped web search was most effective, quickly identifying the Resources page (https://nemvch.com/resources/) as the location for the authorization form. The form was easy to find — listed clearly on the Resources page with a descriptive link title.

## Downloaded Files

### form-1.pdf
- **Source URL**: https://nemvch.com/wp-content/uploads/2019/10/Authorization-for-Release.pdf
- **Document type**: Authorization for Release of Health Information (ROI form)
- **Pages**: 2
- **File size**: 268,656 bytes
- **Text layer**: No — image-only scan (two grayscale CCITT-encoded images at 300 DPI)
- **Notes**: This is the primary ROI form. It is a scanned paper form with no extractable text and no fillable fields. A Spanish version is also available on the site.

### form-2.pdf
- **Source URL**: https://nemvch.com/wp-content/uploads/2026/02/Notice-of-Privacy-Practices-021626.pdf
- **Document type**: Notice of Privacy Practices (NPP)
- **Pages**: 12
- **File size**: ~large
- **Text layer**: Yes — full text extractable
- **Notes**: This is the hospital's HIPAA Notice of Privacy Practices, effective February 16, 2026. It describes patient rights including the right to access medical records. Not an ROI form itself, but a related compliance document that explains patient rights under HIPAA. Downloaded because it was referenced in search results and provides context for the ROI process.

## Difficulties
- The ROI form (form-1.pdf) is an image-only scan with no text layer, meaning it cannot be filled electronically and text cannot be extracted for analysis without OCR.
- The form was uploaded in October 2019 and appears to be an older scanned document.
- No issues with bot blocking or access restrictions — straightforward curl download worked.

## Additional Observations
- The hospital also offers a Spanish version of the authorization form at: https://nemvch.com/wp-content/uploads/2025/02/Release-of-information.-revision-2.2022-ES.pdf
- The Resources page is well-organized with clear document labels.
- The form was findable within 2 clicks from the homepage (Resources link in header → Authorization for Release of Health Information link).
