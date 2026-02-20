# University Medical Center of Southern Nevada — ROI Form Retrieval Notes

## Search Strategies

1. **Web search for "University Medical Center of Southern Nevada authorization release health information form PDF"** — Immediately returned direct PDF links to the PHI Release Authorization form hosted on umcsn.com.
2. **Site-scoped search (`site:umcsn.com medical records release authorization form`)** — Confirmed the same PDF URL and also pointed to the Medical Records page.
3. **Navigated the Medical Records page** at `https://www.umcsn.com/patients-visitors/patient-information/medical-records-and-birth-certificate-process` — Notably, this page does **not** directly link to the PHI Release Authorization form. It links only to the Request for Amendment form. The ROI form is discoverable via search but not clearly linked from the patient-facing medical records page.

## Downloaded Forms

### form-1.pdf
- **Source URL:** `https://umcsn.com/getmedia/43e12672-40c1-4b7e-a4fc-099306b86efc/MRU00695_PHI_Rel_Auth_Eng_01-29-19.pdf`
- **Document type:** PHI Release Authorization form (ROI form)
- **Version:** MRU00695 (01/29/19) — the current/newer version
- **Pages:** 2
- **File size:** 151,732 bytes
- **Text extractable:** Yes (has text layer, ~5,203 chars)
- **Notes:** This is the primary ROI form. It allows patients to authorize release of their Protected Health Information from UMC facilities (main campus, Quick Care, Primary Care). Includes checkboxes for types of records, sensitive information categories (substance abuse, HIV, mental health, genetic info), and signature fields. Two-page form with clear sections.

### form-2.pdf
- **Source URL:** `https://umcsn.com/getmedia/38304303-0e51-4547-82ea-088afa777004/MRU00695PHI.pdf`
- **Document type:** PHI Release Authorization form (ROI form) — older version
- **Version:** MRU00695 (06/06/16)
- **Pages:** 2
- **File size:** 166,276 bytes
- **Text extractable:** Yes (has text layer, ~4,949 chars)
- **Notes:** This is the older (2016) version of the same ROI form. Very similar content and layout to form-1 but with slightly different field labels (e.g., "Account #" vs "CSN"). Both versions are still hosted and accessible on the UMCSN website.

### form-3.pdf
- **Source URL:** `https://www.umcsn.com/getmedia/1dd2697c-e454-46e3-a217-a800685388a6/RequestforAmendmentPHI_English.pdf`
- **Document type:** Request for Amendment of Protected Health Information
- **Version:** MRU01840 (02/10/22)
- **Pages:** 1
- **File size:** 118,189 bytes
- **Text extractable:** Yes (has text layer, ~2,281 chars)
- **Notes:** This is NOT an ROI form — it's a form to request amendments to medical records. Found linked from the Medical Records page. Included because it was prominently linked on the medical records page and is part of the patient records access workflow.

## Difficulties Encountered

- **No direct link to the ROI form on the Medical Records page.** The main patient-facing "Medical Records and Birth Certificate Process" page links to the amendment form but does NOT link to the PHI Release Authorization form. The ROI form is only discoverable via web search or by knowing the direct URL. This is a notable findability gap.
- **Two versions of the same form still hosted.** Both the 2016 and 2019 versions are accessible, which could cause confusion for patients who find the older version.
- **No issues with downloading.** Both forms downloaded cleanly via curl with no bot-blocking or JavaScript requirements.
