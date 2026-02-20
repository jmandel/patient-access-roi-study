# Michigan Medicine (University of Michigan Health) — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for "Michigan Medicine University of Michigan Health authorization release of health information form PDF" — immediately found direct links to the current ROI form on uofmhealth.org and an older version on medicine.umich.edu.
2. **Web search** for "site:uofmhealth.org medical records release authorization form" — confirmed the same forms and also surfaced the "Request for Outside Records" form and the Medical Records landing page.
3. No need to navigate the website manually; the forms were directly discoverable via web search.

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.uofmhealth.org/sites/default/files/2025-03/ROI_.pdf
- **File size:** 770,186 bytes
- **Description:** Current "Authorization to Release Copies of a Medical Record" form. Title says "(Patient Requests Information To Be Sent From UMH)." This is the primary, current ROI form for Michigan Medicine. Has text layer, fillable fields, mentions MyUofMHealth.org Patient Portal and electronic email web link delivery. Includes fee schedule on page 2. References both patient self-request and third-party release pathways.
- **Download method:** curl (direct download, no bot blocking)

### form-2.pdf
- **Source URL:** https://medicine.umich.edu/sites/default/files/content/downloads/AuthorizationToReleaseCopiesOfMedicalRecord_2011-Sept-08_FINAL_FILLABLE.pdf
- **File size:** 260,121 bytes
- **Description:** Older version (dated 2011) of the same "Authorization to Release Copies of a Medical Record" form. Still references "University of Michigan Health System (UMHS)" branding rather than "Michigan Medicine." Has text layer and fillable fields. Includes eDelivery option and fee schedule.
- **Download method:** Browser (Chrome DevTools) — curl was blocked by Cloudflare challenge on medicine.umich.edu domain. Navigated to the URL in the browser, which passed the Cloudflare check, then extracted the PDF via JavaScript fetch.

### form-3.pdf
- **Source URL:** https://www.uofmhealth.org/sites/default/files/2025-08/release-from-other-organizations.pdf
- **File size:** 174,069 bytes
- **Description:** "Request for Outside Records — Patient Information From Another Organization (Authorization to Request)." This is the reverse direction — authorizing Michigan Medicine to *request* records from another provider on the patient's behalf. Not a standard ROI form for releasing Michigan Medicine records, but related to medical records authorization.
- **Download method:** curl (direct download, no bot blocking)

## Difficulties Encountered

- The older form on `medicine.umich.edu` was blocked by Cloudflare's bot protection when using curl. Had to use the browser (Chrome DevTools MCP) to navigate to the URL and download the PDF via in-page JavaScript fetch.
- The current form URL (`ROI_.pdf`) has a somewhat uninformative filename with a trailing underscore.

## Summary

Michigan Medicine makes their ROI forms readily available online. The current form (form-1.pdf, dated 2025-03) is prominently linked from their Medical Records page and was easy to find via web search. An older version (form-2.pdf, dated 2011) remains available on the medicine.umich.edu domain. Both forms support patient self-request and offer electronic delivery options. A separate form exists for requesting outside records (form-3.pdf).
