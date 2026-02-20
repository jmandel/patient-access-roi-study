# Labette Health — Org-Level Synthesis

## Overview

Labette Health is an independent, nonprofit community hospital in Parsons, Kansas. It takes a notably digital-first approach to medical records requests: rather than offering a downloadable PDF authorization form, it routes patients to an **online Formstack form** accessible directly from the main website navigation. This places Labette Health ahead of many peers who still rely on print-and-mail PDF workflows.

## Forms and Pathways

Two PDF documents were downloaded during the search, but **neither is Labette Health's actual ROI form**:

- **form-1.pdf** — A generic one-page "Authorization for Release of Medical Records" template from PatientPop, hosted on PatientPop's CDN. It does not mention Labette Health anywhere and surfaced only as a misleading search result. It has no fillable fields, no submission instructions, and is missing core HIPAA authorization elements.
- **form-2.pdf** — Labette Health's Notice of Privacy Practices (NPP), effective November 2021. This is an informational compliance document, not a request mechanism. It does reference the right to inspect and copy records and the right to an electronic copy, but does not link to the actual request form.

The **primary and only pathway** for requesting records is the Formstack online form at `https://labetteheatlh.formstack.com/forms/medical_records_request` (note: the subdomain contains a typo — "labetteheatlh" instead of "labettehealth"). The Contact Us page also mentions visiting the office in person as an alternative.

## Access Pathway Differentiation

Labette Health's Formstack form **does differentiate** between patient self-access and third-party release. It includes a "Release direction" field with "to Patient/Self" as an explicit option alongside "Other," and a "Relationship to patient" field that includes "Patient/Self" as the first choice. While it is a single form serving multiple purposes rather than a dedicated patient-only form, the self-access pathway is clearly accommodated — a patient does not need to guess which parts apply to them.

## Retrieval Experience

Finding the form required navigating the website directly; standard web searches returned only the irrelevant PatientPop template. The website blocks simple HTTP fetches (returns 403), necessitating browser-based navigation. However, once on the site, the form is **easy to find**: the main navigation under "Patients & visitors" contains a direct "Medical records request form" link. The Contact Us page also links to it. Overall retrieval difficulty is **moderate** — the form is well-placed on the website but invisible to search engines and requires browser access.

## Form Document Quality

The Formstack form is a strong digital-first implementation:

- **Fully interactive**: All fields are fillable online with no printing required
- **Electronic signature**: Includes a signature pad for digital signing
- **Comprehensive record types**: 15+ specific checkboxes (COVID-19, Abstract, Clinic Note, Discharge Summary, EKG/Stress Test, ER Record, H&P, Lab Results, Operative Report, Radiology CD/Report, Sleep Study, Vaccination History, etc.)
- **Date range**: Includes date(s) of service field
- **Email delivery**: Offers an email delivery option for receiving records
- **Photo ID upload**: Built-in identity verification via file upload
- **Sensitive information**: Explicit exclusion options for mental health, communicable diseases, and drug/alcohol records
- **HIPAA language**: Standard authorization language including 1-year expiration, right to revoke, non-conditioning of treatment, and re-disclosure warning

The layout is structured with clear sections and the field count (~15-20 fields) is reasonable for a comprehensive records request.

## Barriers and Compliance

No unnecessary barriers were identified. There is no notarization requirement, no witness requirement, and no mandatory in-person submission. The form submits electronically upon completion. The NPP mentions that copies may incur a "reasonable fee" but provides no specific amounts — this is standard HIPAA language but leaves patients uncertain about costs.

## Notable Strengths

- **Digital-first, no-paper workflow**: Among the most modern approaches observed for a community hospital of this size
- **Patient self-access clearly supported**: "Patient/Self" is an explicit option, not an afterthought
- **Comprehensive NPP**: Includes an unusually detailed Kansas HIT/HIO section and complete Privacy Officer contact information (name, address, phone, email)
- **Email delivery option**: Patients can request records via email, going beyond the typical CD or paper delivery

## Weaknesses and Concerns

- **URL typo**: The Formstack subdomain "labetteheatlh" (missing an "h") is fragile — if corrected upstream, existing links would break
- **No PDF alternative**: Patients without reliable internet access have no downloadable form option (only in-person office visit)
- **NPP doesn't link to the form**: The NPP tells patients to "complete a specific form" to exercise access rights but never identifies which form or where to find it
- **Website blocks automated access**: 403 errors on HTTP fetches could impact accessibility tools or screen readers that rely on direct URL access

## Overall Assessment

Labette Health provides a genuinely patient-centered, digital-first records request experience that stands out for an independent community hospital. The Formstack form is well-designed, comprehensive, and clearly accommodates patient self-access. The main gaps are the lack of a PDF fallback, the URL typo, and the disconnect between the NPP and the actual request mechanism. Overall, this organization earns a **B grade** — above average in technical accessibility and patient-centeredness, with minor findability and disclosure gaps preventing a top score.
