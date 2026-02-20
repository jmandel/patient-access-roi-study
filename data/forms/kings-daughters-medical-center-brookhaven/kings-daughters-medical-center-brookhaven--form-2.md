# Evaluation: King's Daughters Medical Center (Brookhaven, MS) — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

**This is not a Release of Information form.** Form-2.pdf is an "Employer Authorization form" for occupational health services — a form used by *employers* to authorize workplace-related medical services (DOT physicals, pre-employment physicals, drug/alcohol testing, injury treatment, etc.) for their *employees*. The title reads simply "Employer Authorization form" and the content is structured around employer information, requested services, and billing arrangements.

This document was downloaded from `https://www.kdmc.org/documents/KDMC-Occ-Health-Authorization-Form-Revised.pdf`. It is one of only six PDFs found on the entire kdmc.org domain. The other downloaded document (form-1.pdf) is KDMC's Joint Notice of Privacy Practices — also not an ROI form.

**No actual ROI/authorization for release of health information form exists as a downloadable PDF on KDMC's website.** The retrieval agent conducted an exhaustive search (multiple web queries, full site navigation, PDF inventory of the domain) and confirmed that KDMC handles medical records requests exclusively through a third-party Datavant/Swellbox online wizard at `https://www.swellbox.com/kings-daughters-mc-wizard.html`. The notes report a cost of "$6.50 flat fee + $0.12 per page" through that service.

## 2. FINDABILITY

Because this document is **not an ROI form**, findability of the actual records-request process is more relevant. The notes document that:

- The website's "Online Medical Record Request" page redirects to the Datavant/Swellbox wizard rather than offering a downloadable form.
- There is no link to any ROI authorization form anywhere on the site.
- The occupational health form (this document) was found only through an exhaustive PDF inventory of the domain — it would not be found by a patient searching for medical records release forms.
- Retrieval difficulty was rated **Hard** by the search agent.
- Name confusion with the unrelated King's Daughters Health System in Ashland, KY further complicated discovery.

A patient looking for a way to request their own medical records would need to navigate to the "Online Medical Record Request" page and then interact with the Datavant third-party wizard. There is no downloadable form to fill out offline or submit independently.

## 3. TECHNICAL ACCESSIBILITY

As a PDF artifact, form-2.pdf is reasonably well-constructed for its intended purpose (employer occupational health authorization):

- **Text layer**: Present — full text is extractable (1,214 characters).
- **Fillable fields**: 55 interactive fields, suggesting this was designed as a digital-first fillable form. However, the field names array is empty (`fillable_field_names: []`), meaning the fields lack accessible names/labels — a significant accessibility gap for screen readers and assistive technology.
- **File size**: 323,117 bytes (315 KB) for a single page — somewhat large, likely due to the embedded image (logo) and 25 fonts.
- **Page count**: 1 page.
- **Design**: Digital-first (not a scan), with structured sections for employee information, employer information, requested services, drug/alcohol testing, and billing.

The 55 fillable fields on a single page is notable — the form is densely interactive. But the empty field names mean that while visually the form presents labels like "Employee Name," "Today's Date," "Company Name," etc., these are not programmatically associated with the corresponding input fields.

## 4. CONTENT DESIGN

The form is organized into clearly labeled sections:

1. **Employee identification** — Name, date of birth, phone, Social Security number
2. **EMPLOYER INFORMATION** — Company name, phone, fax, address, authorizing person with signature
3. **REQUESTED SERVICES** — Checkboxes for DOT Physical, Pre-employment Physical, OSHA Questionnaire, Immunizations, chest x-ray, TB Skin Test, Return to Work Physical, Treatment for Injury, etc.
4. **DRUG AND OR ALCOHOL TESTING** — Reason checkboxes (Random, Reasonable Suspicion, Post Accident, Return to Duty, Follow-up) and test type options (escreen eCup 5 panel, escreen xCup 10 panel, Breath Alcohol, DOT vs Non-DOT)
5. **BILLING INFORMATION** — Company billing, Worker's Comp Carrier information
6. **Internal Use Only** — Results tracking

The layout fits all content on one page but is dense. Section headers use capitalization ("EMPLOYER INFORMATION," "REQUESTED SERVICES," "DRUG AND OR ALCOHOL TESTING," "BILLING INFORMATION"). The form uses a mix of fill-in blanks and checkboxes. The language is straightforward occupational health terminology — no legalese, but also no plain-language explanations of the services.

Notably, the form requests a Social Security number ("Social:__________________"), which is sensitive PII collection. There is no explanation of why SSN is needed or how it will be protected.

## 5. PATIENT-CENTEREDNESS

**This form does not serve patients requesting their own health records.** It serves an entirely different purpose — employer authorization of occupational health services. Key observations:

- The form is employer-facing, not patient-facing. The "patient" here is an employee being sent for workplace-required testing.
- There are no scope options for medical records, no date range selectors, no delivery format options.
- There is no reference to HIPAA Right of Access (§ 164.524), patient rights, or health information release.
- There is no mention of electronic health information export or EHI access.
- The authorization is for *services to be performed*, not for *records to be released*.

The only relevance to patient access is that KDMC's lack of a downloadable ROI form forces all records requests through the Datavant third-party platform — and this occupational health form is the closest thing to an "authorization" form that exists on their website.

## 6. COMPLIANCE

Since this is not an ROI form, HIPAA Right of Access compliance analysis does not directly apply. However, several observations are relevant:

- **SSN collection**: The form collects Social Security numbers without explaining the necessity or data protection measures. For an occupational health form that may be filled out by the employer on behalf of the employee, this creates a risk of unnecessary SSN exposure.
- **Third-party records process**: By routing all records requests through Datavant at "$6.50 flat fee + $0.12 per page" (per the notes), the fee structure may exceed HIPAA's "reasonable, cost-based fee" standard for patient access requests, depending on record length. HIPAA limits fees for patient access to reasonable cost-based amounts, which the HHS has interpreted as excluding per-page charges in many contexts.
- **No downloadable ROI form**: The absence of any downloadable authorization form means patients cannot review the terms of release before engaging with the third-party platform. This lack of transparency is a barrier to informed consent about the records request process.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No ROI form exists online**: KDMC has completely outsourced medical records requests to Datavant/Swellbox with no downloadable authorization form for patients to review independently. Patients cannot assess the process, fees, or terms before engaging with the third-party platform.
- **Fee structure concern**: The Datavant fee of "$6.50 flat fee + $0.12 per page" disclosed in the notes may exceed HIPAA's reasonable cost-based fee limits for patient access to their own records (as distinguished from third-party requests). HHS guidance has stated that per-page fees are generally not appropriate for patient access requests.

### ⚠️ AMBIGUITIES
- **SSN collection without justification**: The form asks for "Social:__________________" without explaining why a Social Security number is required for occupational health services, or whether it is optional.
- **Unlabeled fillable fields**: Despite having 55 interactive form fields, all field names are empty — making it unclear which field corresponds to which label for anyone using assistive technology or programmatic form processing.

### ❌ ERRORS
- **Misclassification risk**: This document is an employer occupational health authorization form, not a patient-facing ROI form. Its presence in this study's form collection reflects the absence of any actual ROI form on KDMC's website — the retrieval agent downloaded it as the closest available authorization-type document.
- **Document title ambiguity**: The filename `KDMC-Occ-Health-Authorization-Form-Revised.pdf` is clear, but the document's internal title is simply "Employer Authorization form" — which could be mistaken for a patient authorization form without reading the content.
