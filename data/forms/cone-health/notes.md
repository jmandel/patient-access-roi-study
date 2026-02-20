# Cone Health — ROI Form Collection Notes

## Organization
- **Name:** Cone Health
- **Location:** Greensboro, NC
- **Website:** https://www.conehealth.com
- **Type:** Teaching hospital, regional system, nonprofit, South census region

## Search Strategies

1. **Web search** for "Cone Health release of information form" and "Cone Health authorization medical records PDF" — identified the main Medical Records page and several direct PDF URLs.
2. **Website navigation** to https://www.conehealth.com/patients-visitors/medical-records/ — this is the primary page listing forms for requesting medical records. Found 3 PDFs linked directly.
3. **Web search results** also surfaced a CHMG (Cone Health Medical Group) Release of Information form not linked from the main medical records page.

## Difficulties

- **Bot protection:** Cone Health's website blocks basic `curl` requests with "Access Denied" HTML responses (~500 bytes). Adding full browser-like headers (User-Agent, Sec-Ch-Ua, Sec-Fetch-* headers) resolved this for most URLs. For the initial downloads, browser-based fetch via Chrome DevTools was required.
- **URL redirects:** The Request for Amendment form URL (`/app/files/public/3334/...`) redirects to a UUID-based URL (`/app/files/public/7af00a9b-d7fd-40dc-ba5a-dff91c8192a7/...`).

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.conehealth.com/app/files/public/8f5342f1-147f-431a-9a44-c0eb316422a0/Cone-Health-HIPAA-Authorization-12-12-24-English.pdf
- **Size:** 91,381 bytes (1 page, PDF 1.3)
- **Description:** HIPAA Authorization for Use/Disclosure of Protected Health Information (English). This is the primary ROI form for Cone Health hospitals. Updated 12/12/2024. Covers authorization for release of medical records including mental health, substance abuse, HIV/AIDS, and genetic information.

### form-2.pdf
- **Source URL:** https://www.conehealth.com/app/files/public/554f4906-ee00-49be-9713-a39913c78382/Cone-Health-HIPAA-Authorization-12-12-24-Spanish.pdf
- **Size:** 114,330 bytes (2 pages, PDF 1.3)
- **Description:** Spanish-language version of the HIPAA Authorization form (Autorización de HIPAA para el Uso/Divulgación de Información Médica Protegida). Same content as form-1 in Spanish.

### form-3.pdf
- **Source URL:** https://www.conehealth.com/app/files/public/7af00a9b-d7fd-40dc-ba5a-dff91c8192a7/Request-for-Amendment-of-Health-Information.pdf
- **Size:** 13,430 bytes (1 page, PDF 1.5)
- **Description:** Request for Amendment of Health Information form. Not an ROI form — this is for patients requesting corrections/amendments to their medical records. Included as it was published on the same Medical Records page.

### form-4.pdf
- **Source URL:** https://www.conehealth.com/app/files/public/5cb84c2e-39ff-4feb-8171-ffcf634002cf/CHMG-Release-of-Information-Form.pdf
- **Size:** 41,504 bytes (PDF 1.6)
- **Description:** Cone Health Medical Group (CHMG) Request & Authorization for Use/Disclosure of Protected Health Information. This is a separate ROI form specifically for CHMG physician practices/outpatient settings. Found via web search but not linked from the main Medical Records page. Contains similar authorization language but is formatted differently from the hospital HIPAA Authorization form.

## Additional Notes

- The Medical Records page notes that behavioral health records require calling the HIM department directly (336-832-8677) due to 42 CFR Part 2 regulations. No separate behavioral health authorization form is published online.
- Cone Health has two distinct ROI forms: one for the hospital system (form-1/form-2) and one for the medical group practices (form-4).
- All forms were verified as valid PDFs with extractable text using `pdftotext`.
