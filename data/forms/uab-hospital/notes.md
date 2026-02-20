# UAB Hospital — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for `UAB Hospital Birmingham Alabama "authorization" "release" "health information" form PDF` — immediately found direct PDF links to the patient request form and Callahan Eye form.
2. **Web search** for `UAB Medicine "medical records" "release form" request PDF` — found the third-party authorization form and confirmed the medical records request page URL.
3. **Navigated the UAB Medicine website** at `https://www.uabmedicine.org/pay-your-bill/medical-records-request/` — this is the main medical records request page. It clearly distinguishes between (1) patient requesting own records and (2) third-party release, with separate downloadable forms for each.

The web search strategy was highly effective — UAB Medicine makes their forms readily accessible with direct PDF download links.

## Downloaded Forms

### form-1.pdf
- **Source URL:** `https://www.uabmedicine.org/wp-content/uploads/sites/3/2023/05/Patient-Request-own-medical-records.pdf`
- **Document type:** Patient Request for Own Medical Records (ROI form — patient access specific)
- **File size:** 341,021 bytes
- **Pages:** 2
- **Text extractable:** Yes, clean text extraction
- **Notes:** This is the primary patient-access ROI form. It recognizes the patient's right to access their own PHI. Offers multiple record packages (key clinical notes, full record, etc.), delivery options (paper mail, pickup, fax, CD, email), and includes options for psychiatric/substance use records. Well-structured with clear sections. Form number F#2197r, approved 06/02/2023.

### form-2.pdf
- **Source URL:** `https://www.uabmedicine.org/wp-content/uploads/sites/3/2024/12/Callahan-Hospital-Patient-Medical-Records-Request_12.18.2024.pdf`
- **Document type:** Hospital Patient Access / Authorization for Use or Disclosure of Patient Information (Callahan Eye Hospital variant)
- **File size:** 108,099 bytes
- **Pages:** 3
- **Text extractable:** Yes, clean text extraction
- **Notes:** Callahan Eye Hospital-specific variant of the ROI form. Similar structure to form-1 but tailored for UAB Hospital–Callahan Eye. Includes option to request both Callahan Eye and UAB Health System records. Approved 7/25/2025. Has fewer record package options (2 packages vs 5). Includes same delivery method options.

### form-3.pdf
- **Source URL:** `https://www.uabmedicine.org/wp-content/uploads/sites/3/2023/05/Authorization.pdf`
- **Document type:** Authorization for Use or Disclosure of Protected Health Information (third-party release)
- **File size:** 637,412 bytes
- **Pages:** 2
- **Text extractable:** Partially — pdftotext produces garbled output due to CID font encoding (Identity-H). The PDF uses custom-encoded CID Type 0C fonts that don't map cleanly to Unicode. The document is viewable in a PDF reader but text extraction is unreliable.
- **Notes:** This is the general third-party authorization form (for releasing records to attorneys, insurance companies, etc., rather than patient self-access). Same record package structure as form-1. Linked from the medical records request page under "I am requesting that my medical records be sent directly to a third party."

## Difficulties

- **Form-3 text extraction:** The third-party authorization form (form-3.pdf) uses CID Type 0C fonts with Identity-H encoding that produce garbled text when extracted with pdftotext. The fonts have non-standard glyph mappings. The PDF renders correctly visually but automated text extraction is unreliable.
- **No other difficulties:** Forms were easy to find — UAB Medicine's medical records request page is clearly organized and directly linked from their billing/payment section with prominent download links.

## Summary

UAB Hospital (UAB Medicine) provides three distinct downloadable PDF forms for medical records requests:
1. A patient self-access form (form-1) — the primary ROI form
2. A Callahan Eye Hospital variant (form-2) — for the affiliated eye hospital
3. A third-party authorization form (form-3) — for releasing records to others

The patient self-access form (form-1) is the most relevant ROI form for this study. It is well-organized, offers granular record selection and multiple delivery options including electronic formats.
