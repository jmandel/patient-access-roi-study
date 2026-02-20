# Maury Regional Health — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `Maury Regional Health Columbia TN "authorization" "release" "health information" medical records form PDF` — no direct results.
2. **Web search** for `site:mauryregional.com authorization release medical records` — found the medical records page and a direct PDF link to the authorization form hosted on Cloudinary CDN.
3. **Navigated** the medical records page at `https://www.mauryregional.com/patients-and-visitors/medical-records/` via browser to confirm all available forms. Found both English and Spanish versions linked directly.

## What Worked

The site-scoped search immediately surfaced the medical records page with direct PDF download links. The forms are hosted on Cloudinary (res.cloudinary.com) and downloaded without any bot blocking or authentication.

## Difficulties

- The web_fetch tool returned a 403 for the medical records page, but the browser (Chrome DevTools) loaded it successfully.
- No other difficulties — forms were easy to find and download.

## Downloaded Files

### form-1.pdf
- **Source URL:** https://res.cloudinary.com/dpmykpsih/image/upload/maury-site-494/media/8debb61ae50b44d79e3afc4994e423fd/131-2017-authorization-to-release-phi-maury-regional-health-1.pdf
- **Document type:** Authorization for Release of Protected Health Information (English)
- **Description:** Single-page ROI form (Form 131, revised 08/2018). Includes checkboxes for release/obtain, purpose options, date range, record type selection, and format options (paper, CD, USB, email). Notes 90-day authorization validity. Not a fillable PDF — designed for print-and-complete.

### form-2.pdf
- **Source URL:** https://res.cloudinary.com/dpmykpsih/image/upload/maury-site-494/media/49f7978a676c40898ce7fe52f3bd001a/131s-2017-authorization-to-release-phi_spanish.pdf
- **Document type:** Autorización para Divulgar Información de Salud Protegida (Spanish version)
- **Description:** Spanish-language version of the same ROI form (Form 131S). Same structure and content as the English version.

## Additional Notes

- The medical records page also offers an **online request submission** via a third-party service (swellbox.com) and access through the **My Maury Health Patient Portal**.
- The page is located at: Patients and Visitors > Medical Records — a straightforward 2-click path from the homepage.
- HIM department contact: 931.380.4089, Fax: 931.380.4092, Hours: Mon–Fri 8 AM to 4:30 PM.
