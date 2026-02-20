# Ascension Sacred Heart Pensacola — Org-Level Synthesis

## Overview

Ascension Sacred Heart Pensacola is a community hospital in the Florida panhandle, part of the Ascension health system — one of the largest nonprofit Catholic health systems in the United States. The facility uses Ascension's market-specific forms for the Florida panhandle region rather than purely facility-level documents. Two PDF forms were found during retrieval, along with references to a Swellbox-powered online records request portal and an Ascension patient portal.

## Available Pathways and Most Relevant Form

Three pathways exist for patients requesting their own records:

1. **Swellbox/Datavant online portal** (primary): The facility's medical records page directs patients to a Swellbox-powered online request wizard — a third-party vendor platform purpose-built for patient record requests. This is the org's preferred channel.
2. **PDF authorization form (form-1.pdf)**: A traditional single-page "Authorization for Release of Medical Information From Ascension Sacred Heart," form number FFM99-8700-010-00 (rev 8/20). This is the general-purpose ROI form covering four Ascension Sacred Heart facilities in the Florida panhandle.
3. **Ascension patient portal**: The medical records page also references the patient portal for direct record access.

A second PDF (form-2.pdf) was found but is irrelevant for patient self-access — it is a department-specific inbound records release for the Radiation Oncology department, designed for transferring records *from* other providers *to* Sacred Heart. It uses outdated "Sacred Heart Health System" branding, contains multiple typos, and dates from 2016.

**Form-1 is the most relevant downloadable document** for a patient requesting their own records.

## Access Pathway Differentiation

The organization does not offer a dedicated patient-access PDF form distinct from third-party authorization. Form-1 is a generic HIPAA authorization form designed to cover all release scenarios — patients, insurers, attorneys, and other third parties all use the same document. A patient requesting their own records must check the "Patient Named Above" box to indicate they are both the patient and recipient, and select "At the request of the patient" as the purpose. This works but requires the patient to navigate a form designed for a broader audience.

However, the Swellbox online portal serves as a de facto dedicated patient access pathway. Online records request wizards are specifically designed for patient-initiated requests, providing a more guided experience than the generic PDF form. The existence of this portal partially compensates for the lack of a dedicated patient-access PDF.

## Retrieval Experience

Finding the forms was **easy**. The primary PDF was discovered on the first web search using standard ROI-related keywords and downloaded without any bot blocking, JavaScript rendering issues, or browser fallback requirements. The form is hosted on Ascension's content delivery system at a stable, descriptive URL. However, a patient navigating the website organically would be directed to the Swellbox portal rather than the PDF — the downloadable form is available but not prominently linked from the website's navigation.

## Form Document Quality (Form-1)

**Technical format**: The PDF has a text layer (not a scan) but zero fillable/interactive fields. All blanks are underscores — patients must print and handwrite. Despite being digitally authored with 7 embedded fonts, it was designed entirely for a print-and-fill workflow.

**Layout and organization**: The single-page form follows a logical top-to-bottom flow: patient identification → recipient information → purpose → format preference → report type checkboxes → facility/date selection → sensitive information authorization → legal disclosures → signature. The checkbox layout for report types and facility selection is clean and practical.

**Language**: The upper portion uses reasonably plain language. The lower third shifts to dense legal text — the sensitive information authorization bundles HIV, AIDS, psychiatric conditions, substance abuse, sickle cell anemia, STDs, and hepatitis into a single all-or-nothing binary decision in one long sentence. The revocation rights section runs together without paragraph breaks.

**Instructions**: Minimal. There are no instructions for how or where to submit the completed form. A note warns: "If you fail to specify which records you desire, you will only receive a copy of the discharge summary" — defaulting to minimal disclosure when patients don't navigate the checkbox list correctly.

## Barriers and Red Flags

- **SSN collection**: The form requests Social Security Number as a standard field — unnecessary for patient access and creates identity theft risk.
- **Purpose marked "REQUIRED"**: HIPAA does not require patients to state a reason for accessing their own records, though the pre-printed "At the request of the patient" option reduces the practical burden.
- **Default to minimal records**: The discharge-summary-only default if record types aren't specified may result in patients receiving less than they're entitled to.
- **No fee disclosure**: The form says nothing about costs. Patients have no advance notice of potential fees.
- **Internal EHR navigation paths visible**: Staff-facing filing instructions appear in the form footer, suggesting the document wasn't reviewed for patient-facing use.

## Notable Strengths

- **Swellbox online portal as primary pathway**: Directing patients to a dedicated digital request wizard is a significant positive.
- **Multi-facility coverage**: One form covers four Ascension Sacred Heart locations — patients with care across facilities don't need separate forms.
- **Electronic format option**: The form offers a choice between electronic and paper delivery, though "electronic" is undefined.
- **Concise single-page design**: All content fits on one page without excessive cramming.

## Overall Assessment

Ascension Sacred Heart Pensacola provides a **mixed but functional** experience. The organization's strength lies in offering a Swellbox online portal as the primary pathway — a genuinely patient-centered digital option. However, the fallback PDF form is a generic third-party authorization with no fillable fields, unnecessary SSN collection, and no submission instructions. The form is easy to find but was clearly designed for institutional workflow rather than patient self-service. A patient who uses the Swellbox portal will likely have a reasonable experience; one who downloads the PDF will face a traditional print-and-mail workflow with some compliance concerns.
