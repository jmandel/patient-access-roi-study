# Medical City Dallas Hospital — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for "Medical City Dallas Hospital authorization release health information form PDF" — returned several candidate URLs on `medicalcityhealthcare.com/util/forms/` but all returned 404 (URLs appear to be outdated/restructured).
2. **Direct website navigation** to the medical records page at `https://www.medicalcityhealthcare.com/locations/medical-city-dallas-hospital/for-patients/medical-records` — this was the successful strategy. The page clearly links to the authorization form PDFs hosted on `hcadam.com` (HCA's digital asset management platform).

## What Worked

Navigating the hospital's medical records page via browser. The page has a clear "Patient Requests" section with direct download links for the authorization form in English and Spanish. The forms are hosted on HCA's DAM platform (`hcadam.com`) rather than on the `medicalcityhealthcare.com` domain directly.

## Difficulties

- The PDF URLs cited in web search results (on `medicalcityhealthcare.com/util/forms/`) are all stale and return 404. The forms have been moved to HCA's central DAM platform.
- No issues with bot blocking or JavaScript rendering — the page loaded normally.

## Parent System

Medical City Dallas Hospital is part of Medical City Healthcare, which is part of HCA Healthcare (for-profit). The authorization form is an HCA system-wide form (mailing address is PO Box in Nashville, TN — HCA headquarters), not hospital-specific.

## Downloaded Files

### form-1.pdf
- **Source URL**: https://www.hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac?v=b53c28b5
- **Linked from**: https://www.medicalcityhealthcare.com/locations/medical-city-dallas-hospital/for-patients/medical-records
- **Link text**: "Authorization for Release of Medical Information (PDF)"
- **File size**: 173,750 bytes
- **Description**: English-language Authorization for Release of Medical Information form. Multi-section form covering patient info, recipient info, delivery preferences (paper, electronic media, encrypted/unencrypted email), expiration settings, record type selection (consultation, medication list, discharge summary, operative report, etc.), and signature sections. This is an HCA Healthcare system-wide ROI form.

### form-2.pdf
- **Source URL**: https://www.hcadam.com/api/public/content/e109b112b80f42fc8291acbe0b1435fa?v=829b113e
- **Linked from**: https://www.medicalcityhealthcare.com/locations/medical-city-dallas-hospital/for-patients/medical-records
- **Link text**: "Autorización para la divulgación de información médica (PDF)"
- **File size**: 168,110 bytes
- **Description**: Spanish-language version of the same Authorization for Release of Medical Information form. Same structure and content as form-1.pdf.
