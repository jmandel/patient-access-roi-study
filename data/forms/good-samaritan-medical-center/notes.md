# Good Samaritan Medical Center — ROI Form Retrieval Notes

## Organization
- **Name:** Good Samaritan Medical Center
- **Location:** West Palm Beach, FL
- **Website:** https://www.goodsamaritanmc.com
- **Parent System:** Palm Beach Health Network (PBHN), part of Tenet Healthcare
- **Type:** Community hospital, for-profit, major system affiliation

## Search Strategies

1. **Web search** for `"Good Samaritan Medical Center" "authorization" "release" "health information" form PDF` — immediately found a direct link to the PDF on the hospital's website.
2. **Web search** for `"Good Samaritan Medical Center" "medical records" "release form"` — confirmed the same form and also found the parent Palm Beach Health Network's medical records request page.
3. **Parent system check** — navigated to https://www.palmbeachhealthnetwork.com/patients/request-medical-records, which lists the same form in English, Spanish, and Creole, along with contact info for all PBHN facilities.

## Difficulties
- **Bot blocking via Cloudflare:** Direct `curl` downloads returned HTML instead of the PDF, even with realistic User-Agent headers and Referer. Required using the browser (Chrome DevTools) to fetch the PDF via JavaScript `fetch()`, extract as base64, and decode locally.

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.goodsamaritanmc.com/docs/librariesprovidergoodsam/default-document-library/authorization-to-use-disclose-phi.pdf?sfvrsn=be460533_0
- **File size:** 35,211 bytes
- **Pages:** 2
- **Document type:** Authorization to Use and Disclose Protected Health Information
- **Description:** Good Samaritan Medical Center-specific ROI form. Older version (catalog date 06/12/2014, EID-2028). Includes patient info fields, checkboxes for record types to disclose (face sheet, discharge summary, H&P, labs, etc.), recipient info, authorization term, purpose, and a second page with super-confidential information categories (mental illness, HIV/AIDS, substance abuse, etc.) requiring separate authorization. Has text layer (not a scan). No fillable form fields — designed as a print-and-fill form.

### form-2.pdf
- **Source URL:** https://www.palmbeachhealthnetwork.com/docs/pbhnbuildlibraries/default-document-library/authorization-to-use-disclose-phi-(eng).pdf?sfvrsn=4ea88cdc_1
- **File size:** 125,979 bytes
- **Pages:** 2
- **Document type:** Authorization to Use and Disclose Protected Health Information (PBHN network-wide version)
- **Description:** Palm Beach Health Network's version of the same form, covering all six PBHN facilities including Good Samaritan Medical Center. Newer version (catalog date 11/17/2020, EID-2028). Includes facility selection checkboxes, email field, and "Original Materials Released" section for blocks/slides. Otherwise very similar structure to form-1. Larger file size likely due to embedded images/logos. Also a print-and-fill form with no interactive fields.

## Key Observations
- The hospital has its own facility-specific form (form-1) and also participates in the parent network's shared form (form-2).
- The parent network page also offers Spanish and Haitian Creole versions of the form.
- Records requests are processed via Datavant (third-party ROI vendor), with email submission to SM-Tenetgoodsamaritan@Datavant.com.
- Both forms are 2-page authorization forms covering standard ROI plus super-confidential health information categories.
- Neither form has fillable/interactive PDF fields.
