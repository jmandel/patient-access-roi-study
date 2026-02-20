# TriStar Centennial Medical Center — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `TriStar Centennial Medical Center "authorization" "release" "health information" form PDF` — immediately found the medical records request page.
2. **Web search** for `TriStar Centennial Medical Center "medical records" "release form" PDF` — confirmed the same page and also surfaced a Centennial Medical Group form.
3. **Navigated the medical records page** at `https://www.tristarhealth.com/locations/tristar-centennial-medical-center/for-patients/medical-records` — found direct PDF download links for English and Spanish authorization forms hosted on HCA's DAM (Digital Asset Management) system at `hcadam.com`.

## What Worked

The web search was immediately effective. The medical records page is well-organized and prominently links to the authorization form PDFs. TriStar Centennial is part of the HCA Healthcare system, and the forms are standardized HCA forms (form number HCA-840-00434, Rev. 09/21). The page also offers an online portal option via Swellbox.

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://www.hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac?v=b53c28b5`
- **Linked from**: TriStar Centennial medical records page (English "Authorization for Release of Medical Information")
- **Document type**: ROI / Authorization for Release of PHI (Protected Health Information)
- **Size**: 173,750 bytes (~170 KB), 1 page
- **Description**: Standard HCA authorization form. Includes patient info, recipient info, purpose of disclosure, delivery format options (paper, electronic media, encrypted/unencrypted email), record type checkboxes (consultation, discharge summary, ER report, etc.), USCDI release option, sensitive information handling, signature section. Form number HCA-840-00434, Rev. 09/21. Has text layer; appears to have fillable fields.

### form-2.pdf
- **Source URL**: `https://centennialmedical.com/wp-content/uploads/2020/04/Med-Record-request-FROM-CMG.pdf`
- **Linked from**: Web search results (Centennial Medical Group — affiliated physician group)
- **Document type**: Medical records request/release authorization form for Centennial Medical Group
- **Size**: 172,981 bytes (~169 KB), 2 pages
- **Description**: Instructions page plus authorization form for records from Centennial Medical Group (affiliated physician practice). Uses Record Reproduction Services (RRS) as third-party vendor. Includes legal requirements section with agree/disagree checkboxes for sensitive records (HIV/AIDS, psychiatric, substance abuse, mental health). 6-month default expiration. This is for the affiliated physician group, not the hospital itself.

### form-3.pdf
- **Source URL**: `https://www.hcadam.com/api/public/content/e109b112b80f42fc8291acbe0b1435fa?v=829b113e`
- **Linked from**: TriStar Centennial medical records page (Spanish "Autorización para la divulgación de información médica")
- **Document type**: ROI / Authorization form (Spanish language version of form-1)
- **Size**: 168,110 bytes (~164 KB), 1 page
- **Description**: Spanish-language version of the same HCA authorization form. Same structure and fields as form-1.

## Difficulties

- **None significant.** The forms were easy to find and download. The HCA DAM URLs worked with a standard curl request. No bot blocking or JavaScript rendering required.
- Minor pdftotext warnings about name token length, but text extraction worked fine.

## Additional Notes

- TriStar Centennial is part of HCA Healthcare (for-profit), and uses the standardized HCA authorization form system-wide.
- The medical records page also offers an **online portal** (Swellbox) for submitting requests digitally, plus the MyHealthONE patient portal for direct record access.
- The HCA form notably includes a **USCDI Release Request** option ("to include all elements as defined in the United States Core Data for Interoperability"), which is unusual and forward-looking.
- Delivery options include encrypted email, unencrypted email (with risk disclaimer), electronic media, and paper copy.
- The form expires after 180 days by default.
