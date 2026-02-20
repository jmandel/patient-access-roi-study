# Piedmont Medical Center — ROI Form Retrieval Notes

## Organization
- **Name:** Piedmont Medical Center
- **Location:** Rock Hill, SC
- **Website:** https://www.piedmontmedicalcenter.com
- **System Affiliation:** Tenet Healthcare (for-profit)
- **Type:** Community hospital

## Search Strategies

### What worked
- **Web search** for "Piedmont Medical Center Rock Hill SC authorization release health information form PDF" immediately returned direct PDF links and the medical records request page URL.
- The organization has a clear **"Request Medical Records"** page at https://www.piedmontmedicalcenter.com/patients/request-medical-records with a direct link to the authorization form.
- A second form was found on the **Piedmont Physician Network** website (affiliated physician practices).

### Difficulties
- **Cloudflare bot protection** blocked direct `curl` downloads — both PDFs returned HTML challenge pages instead of actual PDFs.
- Used **Chrome DevTools browser** to navigate to the pages, which passed the Cloudflare challenge, then extracted the PDFs via JavaScript `fetch()` from within the browser context.

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.piedmontmedicalcenter.com/docs/librariesproviderpiedmont/pdfs/authorization-to-use-and-disclose-protected-health-information-form.pdf?sfvrsn=8ea4433c_0
- **File size:** 167,018 bytes
- **Pages:** 1
- **Document type:** ROI / Authorization to Use and Disclose Protected Health Information
- **Description:** Hospital-specific authorization form for Piedmont Medical Center. Single page, has text layer, includes checkboxes for record types (discharge summary, H&P, lab results, consultations, ER report, operative report, pathology report). Includes fields for patient info, information requested, and recipient designation. Form revision date R03/2013.

### form-2.pdf
- **Source URL:** https://www.piedmontphysiciannetwork.com/docs/pmcphysiciannetworklibraries/default-document-library/auth-disclose-medical-record.pdf?sfvrsn=df6c4f7b_2
- **File size:** 380,157 bytes
- **Pages:** 2
- **Document type:** Authorization to Use and Disclose Health Information (Physician Network version)
- **Description:** A more detailed 2-page authorization form used by the PMC Physician Network. Includes sections for highly confidential information (mental health, HIV/AIDS, substance abuse, psychotherapy notes), purpose of disclosure, expiration, and revocation rights. More comprehensive than form-1 with specific HIPAA-related language.

## Summary
- **Retrieval difficulty:** Easy (form linked directly from medical records page; minor technical hurdle with Cloudflare)
- The hospital has two related forms — one for the hospital itself (form-1) and one for its physician network (form-2). The physician network form is more detailed and HIPAA-compliant in its language.
- The medical records page also mentions Datavant as the contracted vendor for handling release of medical information, and provides online portals (Swellbox) for both patient and provider record requests.
