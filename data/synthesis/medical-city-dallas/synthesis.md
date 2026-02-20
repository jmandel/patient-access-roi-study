# Medical City Dallas Hospital — Organization Synthesis

## Overview

Medical City Dallas Hospital, part of HCA Healthcare's Medical City Healthcare division, provides patients with a single system-wide authorization form for requesting health records. The form is available in both English and Spanish as fillable PDFs linked from the hospital's medical records webpage. There is no dedicated patient self-access pathway — patients requesting their own records use the same generic HIPAA authorization form designed for all release-of-information scenarios, including third-party disclosures.

## Available Forms and Pathways

Two PDF forms were retrieved, both hosted on HCA's digital asset management platform (`hcadam.com`):

- **Form 1** (English): HCA-840-00434, Rev. 09/21 — "Authorization for Release of PHI (Protected Health Information)." A 1-page fillable PDF with 52 interactive fields.
- **Form 2** (Spanish): HCA-840-00434-S — Direct Spanish translation of Form 1, with identical structure and 52 fillable fields.

Both forms are general-purpose release authorizations. The purpose-of-disclosure field offers "At the request of the individual" as one option alongside "Other 3rd party recipient," but the form does not distinguish between patient self-access under HIPAA's Right of Access (45 CFR § 164.524) and third-party authorization. There is no separate patient access request form, no online portal, and no web-based submission wizard.

## Retrieval Experience

Finding the forms required navigating the hospital website to the medical records page (`/locations/medical-city-dallas-hospital/for-patients/medical-records`). Direct web searches returned stale 404 URLs from a previous hosting location (`medicalcityhealthcare.com/util/forms/`), with no redirects in place. Once on the correct page, the forms are clearly labeled and directly downloadable. No bot blocking or JavaScript rendering issues were encountered.

## Form Document Quality

The English form is a well-constructed, born-digital PDF — not a scan. All 52 fields are interactive and fillable on-screen, eliminating the need for handwriting. The single-page format is efficient but extremely dense: patient demographics, recipient information, four delivery options (paper, electronic media, encrypted email, unencrypted email), 16+ record-type checkboxes, a six-point disclosure statement, psychotherapy notes handling, marketing/sale of PHI questions, and a signature block are all compressed into one page. The language is a mix of plain English and legal terminology — functional for most adults but potentially challenging for low-literacy readers.

The form provides clear section headers (A, B, C) and logically groups related fields. Instructions are implicit in the form structure rather than stated separately. The consent statements correctly cover voluntary authorization, revocation rights, and non-conditioning of treatment — standard HIPAA requirements. The form mentions a "reasonable copy fee" without specifying an amount.

## Barriers and Red Flags

- **SSN collection**: The form requests the last 4 digits of SSN, marked "(optional)." While optional, collecting SSN on an ROI form is unnecessary for patient identification and creates a data exposure risk.
- **Centralized processing**: All requests go to HCA headquarters in Nashville (PO Box 290789), not to the local hospital. A patient expecting to deal with Medical City Dallas directly may find this confusing.
- **Fax restriction**: Fax delivery is limited to "Physician Office / Medical facility," which could restrict a patient's ability to receive records via fax at a non-medical location.
- **No online submission**: The form must be printed, signed, and mailed or faxed to Nashville. There is no portal-based or email submission option. However, fax submission is available (844-481-0298), meeting the baseline for electronic submission.

## Bright Spots

- **Spanish-language version**: A fully translated Spanish form with identical structure and fillable fields, linked with Spanish-language text from the same page — a meaningful accessibility feature for Dallas's large Spanish-speaking population.
- **USCDI release option**: The form includes a forward-looking option for USCDI (United States Core Data for Interoperability) release requests, acknowledging modern health data exchange standards. This is rare among ROI forms.
- **52 fillable fields**: Comprehensive digital interactivity means the entire form can be completed on-screen before printing for signature.
- **Four delivery format options**: Paper, electronic media, encrypted email, and unencrypted email give patients genuine choice.

## Overall Assessment

Medical City Dallas Hospital, via its parent HCA Healthcare, provides a technically competent ROI form that is fillable, multilingual, and reasonably well-organized. However, the organization does not differentiate patient self-access from third-party release — there is no dedicated patient access pathway. The form is a generic authorization that serves all purposes. Findability is hampered by broken legacy URLs, and the centralized Nashville processing model may confuse local patients. The form's document quality is solid (fillable, clear sections, multiple delivery options), but the lack of a patient-centric access pathway and the optional SSN field are notable shortcomings. The organization earns a mid-range assessment: technically adequate with meaningful strengths in multilingual access and digital form quality, but falling short on patient-centeredness and access pathway design.
