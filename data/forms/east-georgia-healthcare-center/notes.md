# East Georgia Healthcare Center — ROI Form Retrieval Notes

## Organization
- **Name:** East Georgia Healthcare Center (EGHC)
- **Website:** https://eghc.org/
- **Location:** Swainsboro, GA
- **Type:** FQHC, independent, nonprofit

## Search Strategies

1. **Web search for direct PDF links:** Searched for `"East Georgia Healthcare Center" "authorization" "release" "health information" filetype:pdf` and `"East Georgia Healthcare Center" "medical records" "release form" PDF`. Found references to old PDF URLs at `eghc.org/wp-content/uploads/2019/02/Medical-Records-Release.pdf` and a Spanish version, but these URLs now return 404 (page not found).

2. **Site search:** Searched `site:eghc.org authorization release medical records`. Results confirmed the forms page at https://eghc.org/forms/ is the main hub.

3. **Direct website navigation:** Navigated to https://eghc.org/forms/. Found the forms page lists several patient forms. The Medical Records Release forms (English and Spanish) are now hosted on **RightSignature** (an e-signature platform at secure.rightsignature.com) rather than as direct PDF downloads. The old WordPress-hosted PDFs have been removed.

## What Was Found

EGHC's forms page (https://eghc.org/forms/) contains:
- Child Demographic forms (English/Spanish) — via RightSignature
- Adult Demographic forms (English/Spanish) — via RightSignature
- **Medical Records Release forms (English/Spanish) — via RightSignature**
- Sliding Scale Packet (English/Spanish) — via RightSignature
- Notice of Privacy Practice (English/Spanish) — direct PDF downloads

## Downloaded Files

### form-1.pdf
- **Source URL:** https://secure.rightsignature.com/templates/280e0c9b-58a0-4965-a8f2-ada6269d8b00/template-signer-link/5be1e11e4a02b05742f2b4c6340bbe24
- **Original format:** RightSignature interactive e-signature form; underlying document image extracted from S3 and converted PNG→PDF
- **Description:** Medical Records Release form (English). Single page. Titled "Medical Records Release" with EGHC letterhead. The form is oriented toward **incoming records** — it authorizes release of records FROM other providers TO EGHC ("I hereby request copies of all [my] health history and medical care released to: EAST GEORGIA HEALTHCARE CENTER, 215 NORTH COLEMAN STREET, SWAINSBORO, GA 30401"). Includes checkboxes for record types (All Medical Records, HIV Records, Hospital Records, Immunization Records, Lab Data, X-ray Reports, etc.), options for one-time release vs. coordination of care, and standard HIPAA authorization language.
- **Text layer:** No (image-only, converted from PNG)
- **Fillable fields:** The RightSignature version has interactive fields, but the captured PDF does not

### form-2.pdf
- **Source URL:** https://secure.rightsignature.com/templates/93fb2d59-3fbd-40cf-b250-d54294d83270/template-signer-link/3ce2efc060c8a2c6b15bf53ebdc97574
- **Original format:** RightSignature interactive e-signature form; underlying document image extracted from S3 and converted PNG→PDF
- **Description:** Formulario de Autorización Médica / Medical Records Release form (Spanish). Single page. Spanish-language version of form-1. Titled "AUTORIZACIÓN PARA EL USO Y DIVULGACIÓN DE SU INFORMACIÓN DE SALUD PROTEGIDA."
- **Text layer:** No (image-only, converted from PNG)
- **Fillable fields:** The RightSignature version has interactive fields, but the captured PDF does not

### form-3.pdf
- **Source URL:** https://eghc.org/wp-content/uploads/2021/05/EGHC-Notice-of-Privacy.pdf
- **Original format:** Direct PDF download from EGHC website
- **Description:** Notice of Privacy Practices. Multi-page document describing how EGHC uses and discloses medical information. This is NOT an ROI form — it's the HIPAA-required privacy notice.
- **Text layer:** Yes (full text extractable)
- **Fillable fields:** None (informational document)

## Difficulties Encountered

1. **Old PDF links are broken:** The 2019-era WordPress-hosted PDF URLs (e.g., `/wp-content/uploads/2019/02/Medical-Records-Release.pdf`) now return 404 pages. Web search results still reference these dead links.

2. **Forms behind RightSignature:** The medical records release forms are now hosted on RightSignature's e-signature platform, which requires entering name and email to interact with the form. The underlying document is rendered as a PNG image, not a downloadable PDF. To capture the form, I had to:
   - Navigate to the RightSignature URL in a browser
   - Extract the S3-hosted document image URL from the page's DOM
   - Download the PNG image
   - Convert PNG to PDF using ImageMagick

3. **No patient-access-specific form:** The Medical Records Release form is oriented toward incoming records (from other providers to EGHC), not outgoing records (patient requesting their own records from EGHC). No separate form for patient access requests was found on the website.

4. **Image-only capture:** Because the forms were captured as rendered PNG images from the RightSignature platform, the resulting PDFs have no text layer and no fillable fields, even though the original RightSignature forms did have interactive fields.
