# San Luis Valley Health Regional Medical Center — ROI Form Retrieval Notes

## Search Strategies

1. **Web search for "San Luis Valley Health Regional Medical Center authorization release health information form PDF"** — Immediately found a direct link to the 2024 updated authorization form PDF on their website.
2. **Web search for "San Luis Valley Health Regional Medical Center medical records release form PDF"** — Found a second, older version of the authorization form at a different URL.
3. **Web search for "site:sanluisvalleyhealth.org authorization release medical records"** — Confirmed both forms and provided additional context about submission process.
4. **Navigated the Medical Records page** at `https://www.sanluisvalleyhealth.org/patient-center/medical-records/` — Found the current English form and a Spanish version linked directly from this page.

## What Worked

The forms were very easy to find. Web search immediately returned direct PDF links. The organization's Medical Records page clearly links to both the English and Spanish authorization forms. No bot blocking, login walls, or JavaScript rendering issues encountered.

## Downloaded Forms

### form-1.pdf
- **Source URL:** `https://www.sanluisvalleyhealth.org/documents/resource%20flyers/Authorization-to-Release-Information-Update-2024.pdf`
- **Document type:** Authorization to Release Medical Record Information (updated 2024 version)
- **Description:** Single-page ROI form with fields for releasing facility, patient info, recipient, record types (ER/Inpatient, Outpatient/Clinic, complete record, last 2 years for transfer of care), expiration options (1 year default, specific date, 180 days, or custom), specific authorization for drug/alcohol/psychiatric conditions, and signature lines. This is the current version linked from the Medical Records page.

### form-2.pdf
- **Source URL:** `https://www.sanluisvalleyhealth.org/documents/Authorization-to-release-medical-record-information.pdf`
- **Document type:** Authorization to Release Medical Record Information (older version, form number 000700, dated 08-13)
- **Description:** Single-page ROI form, similar content to form-1 but with slightly different layout and options. Includes "Electronic Discharge Instructions" as an option. References both San Luis Valley Health-RMC (Alamosa) and San Luis Valley Health-CCH (La Jara). This appears to be an older version that is still accessible but no longer linked from the Medical Records page.

### form-3.pdf
- **Source URL:** `https://www.sanluisvalleyhealth.org/documents/resource%20flyers/Authorization-to-Release-Information-Spanish.pdf`
- **Document type:** Autorización para Divulgar Información de la Historia Clínica (Spanish version of authorization form)
- **Description:** Spanish-language version of the authorization to release medical records form. Same structure as form-1, translated into Spanish. Linked from the Medical Records page alongside the English version.

## Difficulties

None. The forms were straightforward to find and download. All three PDFs downloaded successfully with curl and contained extractable text.
