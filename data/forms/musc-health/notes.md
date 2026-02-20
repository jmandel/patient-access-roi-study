# MUSC Health University Medical Center — ROI Form Retrieval Notes

## Organization
- **Name**: MUSC Health University Medical Center
- **Website**: https://muschealth.org
- **Location**: Charleston, SC
- **Type**: Teaching hospital, major system, government-owned

## Search Strategies

1. **Web search**: `"MUSC Health" "authorization" "release" "health information" filetype:pdf` — returned several candidate URLs including the main authorization form on muschealth.org and variants hosted on insurance/dental subpaths.
2. **Web search**: `"MUSC Health" "medical records" "release form" filetype:pdf` — surfaced the primary form URL, a MyChart instructions PDF, a dental records form, and a third-party-hosted copy of a MUSC form.
3. **Web search**: `site:muschealth.org authorization release medical records` — confirmed the medical records page at `muschealth.org/patients-visitors/medical-records` and found direct form links.
4. **Website navigation**: Browsed to the medical records page, explored all three tabs (MyChart Patient Portal, Online eRequest, Manual Request). The "Authorization Form for Medical Records Release" section at the bottom of the page links to both English and Spanish versions of the form.

**What worked best**: The second web search immediately surfaced the direct PDF URLs. The website navigation confirmed these are the official forms and revealed the Spanish version.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://muschealth.org/-/sm/health/medical-records/f/authorization-to-disclose-phi.pdf
- **File size**: 158,878 bytes
- **Description**: Main "Authorization to Release Protected Health Information" form (English). This is the primary ROI form linked directly from the MUSC Health medical records page. It is a fillable PDF with fields for patient information, release from/to, record types, purpose of release, and authorization/signature section. Appears to be the current/updated version (version 1.7 PDF).

### form-2.pdf
- **Source URL**: https://muschealth.org/-/sm/health/insurance/f/authorization-to-disclose-phi.ashx?la=en
- **File size**: 391,700 bytes
- **Description**: Another version of the "Authorization to Release Protected Health Information" form, hosted under the insurance section of the website. Version 11, dated 11/17. One page. Appears to be an older or alternate layout of the authorization form with similar fields but different formatting. Form Origination Date: 1/2000.

### form-3.pdf
- **Source URL**: https://muschealth.org/-/sm/health/dental/dental-files/records-release.ashx?la=en
- **File size**: 486,083 bytes
- **Description**: Authorization to Release Protected Health Information form specific to MUSC College of Dental Medicine. Version 9, dated 5/19. Includes dental-specific fax number (843-792-7009) and email (cdmimages@musc.edu). One page form.

### form-4.pdf
- **Source URL**: https://mychart.musc.edu/mychart/en-us/docs/Med%20Rec%20Request17.pdf
- **File size**: 244,831 bytes
- **Description**: Instructions document for requesting medical records via MyChart patient portal. Not an authorization form per se — it's a guide with screenshots explaining how to use the online portal to request records. Notes fee for search/duplication, mentions that some records can only be sent via US Mail. Updated 8/2/17.

### form-5.pdf
- **Source URL**: https://muschealth.org/-/sm/health/medical-records/f/spanish-auth-to-release-phi.pdf
- **File size**: 169,216 bytes
- **Description**: Spanish language version of the main authorization form ("Autorización para Divulgar Información de Salud Protegida"). Bilingual header with both Spanish and English title. Same structure as form-1 but in Spanish.

## Difficulties Encountered

- **None significant**. The forms were easy to find — the medical records page is well-organized with clear links. All PDFs downloaded successfully via curl without bot blocking.
- The annual patient access form URL (`musc.edu/cce/ORDFRMS/pdf/all_all_consent_authtorelease_ptannualaccess.pdf`) returned an HTML page rather than a PDF, suggesting that URL is no longer valid.
- MUSC also offers an online eRequest portal via Ciox/Swellbox (`swellbox.com/medical-university-sc-wizard.html`) for patients to request records electronically without downloading a form.

## Summary

MUSC Health provides a well-organized medical records page with three request pathways: MyChart portal, online eRequest (via Ciox), and manual form submission. The main authorization form is available in both English and Spanish as downloadable PDFs. A separate dental-specific version exists. The forms are directly linked from the medical records page under "Authorization Form for Medical Records Release" — findability is excellent (2 clicks from homepage: Patients & Visitors → Medical Records).
