# Texas Oncology — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `Texas Oncology "authorization" "release" "health information" form PDF` — returned results pointing to the medical records page at texasoncology.com/medical-records, plus several older PDF URLs that turned out to be stale (404).
2. **Direct website navigation** — navigated to https://www.texasoncology.com/medical-records using browser. The page clearly lists the form under "How to Request Medical Records" with direct download links for both English and Spanish versions. The site has migrated to a Sitecore Edge CDN (`edge.sitecorecloud.io`), and older URLs (e.g., `/libraries/forms/...` and `/media/...`) no longer work.

## What Worked

Navigating directly to the Medical Records page via browser was the most reliable approach. The page is well-organized: Step 1 links to the form downloads, Step 2 says to complete it, Step 3 says to submit by fax or mail.

## Difficulties

- Three older PDF URLs found via web search all returned 404 errors — the site appears to have been restructured/migrated to Sitecore Edge CDN.
- Once the current URLs were found from the live page, downloads worked without issue (no bot blocking or login required).

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://edge.sitecorecloud.io/texasoncolo7d12-txo5d45-production6298-d24c/media/Files/Medical-Records/TXO-Protected-Health-Information-Disclosure-Authorization-Form-English.pdf
- **File size**: 721,971 bytes (705 KB)
- **Pages**: 3
- **Description**: "Authorization to Disclose Protected Health Information" — English version. This is the official Texas Oncology ROI form. It includes sections for patient info, reason for disclosure (treatment, personal use, billing, legal, etc.), specification of who is authorized to disclose, and what information to release. Has text layer (not a scan). 3 pages.

### form-2.pdf
- **Source URL**: https://edge.sitecorecloud.io/texasoncolo7d12-txo5d45-production6298-d24c/media/Files/Medical-Records/TXO-Protected-Health-Information-Disclosure-Authorization-Form-Spanish.pdf
- **File size**: 312,173 bytes (305 KB)
- **Pages**: 3
- **Description**: "Autorización Para Divulgar Información de Salud Protegida" — Spanish version of the same ROI form. Same structure and content as the English version. Has text layer.

## Summary

Texas Oncology makes their ROI form readily available on a dedicated Medical Records page (1 click from footer navigation). Both English and Spanish versions are provided as direct PDF downloads. The form is a general authorization for disclosure of protected health information, not specifically a patient-access form — it covers multiple disclosure reasons including personal use. The process requires printing, signing, and submitting by fax or mail.
