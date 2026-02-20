# Hospital of the University of Pennsylvania — ROI Form Retrieval Notes

## Organization
- **Name**: Hospital of the University of Pennsylvania (HUP)
- **Parent System**: Penn Medicine (University of Pennsylvania Health System)
- **Website**: https://www.pennmedicine.org
- **Location**: Philadelphia, PA

## Search Strategies

1. **Web search** for `Hospital of the University of Pennsylvania "authorization" "release" "health information" form PDF` — Found multiple sources including the UPenn medical school site and a third-party neurology practice hosting the form.
2. **Web search** for `Penn Medicine "medical records" "release form" authorization PDF` — Found the official Penn Medicine patient access page and additional PDF links.
3. **Navigated Penn Medicine website** at https://www.pennmedicine.org/patient-resources/policies/patient-access-health-information — Found the official authorization form link and detailed instructions for submitting to each Penn Medicine hospital.

The Penn Medicine patient access page was initially blocked by Incapsula bot protection when fetched via `web_fetch`, but loaded successfully in the browser (Chrome DevTools).

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.med.upenn.edu/ctsa/assets/user-content/Authorization%20for%20Disclosure%20of%20Health%20Information_ADA.pdf
- **Also available at** (identical file): https://tupa-q-001.sitecorecontenthub.cloud/api/public/content/Authorization-for-Disclosure-of-Health-Information.pdf (linked from Penn Medicine's official patient access page)
- **File size**: 175,352 bytes
- **Document type**: Authorization for Disclosure of Health Information — the current/official Penn Medicine ROI form
- **Description**: ADA-accessible version of Penn Medicine's system-wide authorization form. Includes checkboxes for all Penn Medicine locations (HUP, Penn Presbyterian, Pennsylvania Hospital, Chester County Hospital, Lancaster General Health, Princeton Health, CPUP/CCA outpatient practices, Penn Medicine at Home). Has fillable fields for patient info, record types, date ranges, behavioral health and substance use disorder authorization sections, and signature fields. Lists specific record types available (discharge summary, operative report, labs, radiology, H&P, clinic/progress notes, billing, etc.). Authorization expires 180 days after signing.

### form-2.pdf
- **Source URL**: https://abingtonneurology.com/forms/PDFs/Penn_Medicine_Records_Request.pdf
- **File size**: 313,635 bytes (2 pages)
- **Document type**: Authorization for Disclosure of Health Information — an older/alternate version of the Penn Medicine ROI form
- **Description**: Similar content to form-1 but appears to be an older version hosted on a partner neurology practice's website. Lists fewer Penn Medicine locations and includes "Penn Home Care & Hospice" instead of "Penn Medicine at Home." Includes delivery method options (US Mail, CD, Email with security warnings). Includes purpose of request checkboxes (Legal, Insurance, Personal, Continuation of Care). Also expires 180 days after signing. Larger file size suggests it may contain embedded images/branding.

## Difficulties
- The Penn Medicine patient access page (pennmedicine.org) uses Incapsula bot protection, which blocked programmatic HTTP fetches. Browser navigation worked fine.
- Both forms are for general disclosure of health information (to third parties or self), not specifically a patient-access-only form. The website directs patients who want their own records to use the patient portal (myPennMedicine) instead.

## Summary
Penn Medicine has a clear patient access page with a single authorization form for disclosure of health information. The form is well-organized and covers all Penn Medicine facilities. Two versions were found — the current ADA-accessible version (form-1) and an older version hosted on a partner practice site (form-2). The organization directs patients who want their own records to the patient portal for self-service access, while the authorization form is primarily for third-party disclosure.
