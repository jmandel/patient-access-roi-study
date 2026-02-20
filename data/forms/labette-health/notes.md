# Labette Health — ROI Form Retrieval Notes

## Organization
- **Name**: Labette Health
- **Location**: Parsons, KS
- **Website**: https://www.labettehealth.com
- **Type**: Community hospital, independent, nonprofit, Midwest

## Search Strategies

### Web searches tried
1. `"Labette Health" "authorization" "release" "health information" filetype:pdf` — No direct Labette Health PDF found; returned a generic PatientPop template
2. `"Labette Health" "medical records" "release form" filetype:pdf` — No results
3. `site:labettehealth.com authorization release medical records` — Found references to the Formstack online form and the Contact Us page
4. `"Labette Health" "release of information" OR "authorization for release" form PDF` — Found WyHealth.net reference mentioning faxing release forms

### Website navigation
- Navigated to https://www.labettehealth.com and explored the navigation menu
- **Patients & visitors** submenu contained a direct link: **"Medical records request form"** → `https://labetteheatlh.formstack.com/forms/medical_records_request` (note: typo in subdomain "labetteheatlh" — missing an "h")
- **Contact Us** page (https://www.labettehealth.com/contact-us/) says: "If you are needing copies of medical records, please complete the form below or visit our office located by the main entrance." Links to same Formstack form.
- **Resources** page was empty
- **Patient information** page had no ROI-related links
- **Notice of Privacy Practices** page mentioned patients' right to inspect/copy records and linked to a PDF version

## Key Finding

Labette Health does **not** provide a downloadable PDF authorization/release form. Instead, they use an **online Formstack form** at:
`https://labetteheatlh.formstack.com/forms/medical_records_request`

This is a comprehensive digital form with:
- Patient identification fields (name, DOB, address, phone)
- Authorization source selection (Hospital, Clinics, or Both)
- Release direction (to Patient/Self or Other; also a "receive from" option)
- Detailed record type checkboxes (COVID-19, Abstract, Clinic Note, Consultation Report, Discharge Summary, EKG/Stress Test, ER Record, H&P, Lab Results, Operative Report, PFT, Radiology CD, Radiology Report, Sleep Study, Vaccination History, Other)
- Date(s) of service
- Reason for request (Continued Care, Disability, Insurance, Legal, Personal, Other)
- Sensitive information exclusion options (mental health, communicable diseases, drug/alcohol)
- Electronic signature pad
- Relationship to patient (Patient/Self, DPOA, Executor, Guardian, Parent, Other)
- Photo ID upload
- Email delivery option field

The form includes standard HIPAA authorization language: authorization valid for 1 year, right to revoke, non-conditioning of treatment, and re-disclosure warning.

## Downloaded Files

### form-1.pdf
- **Source URL**: https://sa1s3.patientpop.com/assets/docs/223399.pdf
- **What it is**: Generic "AUTHORIZATION FOR RELEASE OF MEDICAL RECORDS" template from PatientPop (a healthcare marketing platform). 1 page, simple fill-in-the-blank form. Does NOT mention Labette Health anywhere — this is a generic template that appeared in search results but is not Labette Health's own form.
- **File size**: 24,164 bytes
- **Pages**: 1

### form-2.pdf
- **Source URL**: https://www.labettehealth.com/media/fc6f03662a5e4b14bfb881ecb89bc2f9/notice-of-privacy-practices-effective-november-17.pdf
- **What it is**: Labette Health's Notice of Privacy Practices, effective November 17, 2021. This is NOT an ROI form but is relevant context — it describes patients' rights regarding health information access and references the process for requesting records.
- **File size**: 95,150 bytes
- **Pages**: 4

### formstack-screenshot.png
- **Source**: Full-page screenshot of the Formstack online medical records request form
- **What it is**: Visual capture of Labette Health's actual ROI form (online-only, no PDF version available)

## Difficulties Encountered
1. **No downloadable PDF ROI form exists** — Labette Health has moved to an online-only Formstack form for medical records requests
2. **Website blocks simple HTTP fetches** — labettehealth.com returns 403 for basic web_fetch requests; required browser navigation
3. **Typo in Formstack URL** — The subdomain is `labetteheatlh` (missing an "h" in "health"), which is a notable quirk
4. **Generic PatientPop form in search results** — Search results returned a generic authorization form template that is not actually from Labette Health

## Assessment
Labette Health has a modern, digital-first approach to medical records requests via their Formstack online form. The form is well-organized with comprehensive options for record types, electronic signature, and email delivery. However, there is no downloadable PDF alternative for patients who prefer or need a paper form (the Contact Us page mentions visiting the office as an alternative). The form is accessible from the main navigation under Patients & visitors → Medical records request form.
