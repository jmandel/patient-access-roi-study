# SSM Health St. Mary's Hospital - Madison: ROI Form Retrieval Notes

## Search Strategies

1. **Web search for filetype:pdf** — Searched `SSM Health St. Mary's Hospital Madison "authorization" "release" "health information" filetype:pdf`. This didn't return direct PDF links but confirmed SSM Health has forms online.

2. **Web search for SSM Health release form** — Searched `SSM Health "medical records" "release form" authorization PDF`. This surfaced two PDF URLs: a Wisconsin-specific form and a general SSMHC form.

3. **Site-specific search** — Searched `site:ssmhealth.com authorization release medical records form`. Confirmed the same forms and the medical records request page at ssmhealth.com/resources/get-my-medical-records.

4. **Location-specific search** — Searched `ssmhealth.com medical records request copy Wisconsin Madison`. This revealed a **St. Mary's Madison-specific** version of the authorization form hosted at a different URL path.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.ssmhealth.com/getmedia/4f4b2386-365a-4227-83b2-4ea09365a347/ssm-health-medical-records-release-forms-wisconsin-ministries.pdf
- **File size**: 44,626 bytes
- **PDF version**: 1.6
- **Description**: SSM Health Wisconsin ministries "Authorization to Release Protected Health Information" form. Generic form for all Wisconsin SSM Health facilities. Includes fields for patient info, authorization to release, purpose of disclosure, types of health information, and special categories (mental health, substance abuse, HIV). Has a text layer (not image-only scan).

### form-2.pdf
- **Source URL**: https://www.ssmhealth.com/getmedia/626ff70a-39ec-49a8-8f3f-903d077ae27d/medical-record-release-form.pdf
- **File size**: 86,620 bytes
- **PDF version**: 1.4
- **Description**: SSMHC system-wide "Request for Access to/Authorization for Use and Disclosure of Protected Health Information" form. More comprehensive than form-1 — includes options for type of access (inspection, hard copy, electronic copy), method of delivery (mail, pick up, electronic/CD), and explicit HIPAA-style acknowledgement language. This appears to be the general SSMHC form used across all states. Has a text layer.

### form-3.pdf
- **Source URL**: https://www.ssmhealth.com/SSMHealth/media/Documents/patients-and-visitors/get-medical-records/wisconsin/st-marys-madison-medical-records-request-form.pdf
- **File size**: 79,647 bytes
- **PDF version**: 1.5
- **Description**: Location-specific "Authorization to Release Protected Health Information" form listing SSM Health Dean Medical Group, SSM Health Surgery Center, SSM Health Digestive Health Center, SSM Health St. Mary's Hospital – Madison, SSM Health St. Mary's Hospital – Janesville, and SSM Health St. Clare Hospital – Baraboo. Pre-filled with the Madison PO Box address (PO Box 259840, Madison, WI 53725-9840) and fax numbers for Dean Medical Group (608-294-6294) and SSM Health Hospitals (608-270-6815). Has a text layer. This is the most directly relevant form for this facility.

## Difficulties Encountered

- No significant difficulties. All forms were directly downloadable as PDFs via curl without bot blocking or JavaScript requirements.
- SSM Health maintains multiple versions of similar forms (system-wide vs. state-specific vs. location-specific), which is common for large health systems.

## Summary

SSM Health makes ROI forms readily available online. For St. Mary's Hospital - Madison specifically, there are three relevant forms: a Wisconsin-wide authorization form (form-1), a system-wide SSMHC request for access form (form-2), and a location-specific Madison-area authorization form (form-3). The location-specific form (form-3) is the most directly applicable to this facility. Retrieval difficulty: **easy**.
