# Piedmont Medical Center — Org-Level Synthesis

## Overview

Piedmont Medical Center is a for-profit community hospital in Rock Hill, SC, affiliated with Tenet Healthcare. Two authorization forms were found: a one-page hospital-specific form (form-1) and a two-page physician network form (form-2). The organization also contracts with Datavant and offers Swellbox online portals for both patient and provider record requests, which represents the most patient-friendly pathway.

## Available Pathways and Primary Form

The hospital's "Request Medical Records" page at piedmontmedicalcenter.com/patients/request-medical-records serves as the central hub, linking to: (1) a downloadable PDF authorization form (form-1), and (2) a Swellbox/Datavant online portal for patient record requests. A second PDF form (form-2) exists on the affiliated Piedmont Physician Network website but is not linked from the hospital's main medical records page.

Form-1 is the primary PDF document for hospital record requests. It is a single-page "Authorization to Use and Disclose Protected Health Information" form (EZ-7003, revised 2013). The Swellbox portal, however, is likely the pathway the organization most actively directs patients toward for digital submission.

## Access Pathway Differentiation

Neither PDF form is a dedicated patient-access form. Both are generic HIPAA authorization forms designed primarily for third-party release of information. Form-1 does include a "Self" checkbox under the PURPOSE section, acknowledging that a patient may be requesting their own records, but the form's framing ("I authorize Piedmont Medical Center to disclose the following information...") and structure assume a third-party recipient scenario. Form-2 is even more clearly a third-party release form, with fields for "Name of Person or Class of Persons who may disclose" and "To release records to" — a structure that makes no sense for self-access.

The Swellbox portal provides a meaningful alternative. By offering separate portals for patient and provider requests, the organization does create some differentiation between patient self-access and third-party release — though this differentiation exists at the portal level, not in the PDF forms themselves.

## Retrieval Experience

Finding the forms was straightforward. A web search immediately returned the medical records page URL and direct PDF links. The medical records page is well-organized and clearly labeled. The only technical hurdle was Cloudflare bot protection blocking automated downloads, requiring browser-based retrieval — a hosting infrastructure issue that could also affect assistive technologies.

## Form Document Quality

**Form-1** (primary hospital form) is a non-fillable PDF with zero interactive fields. Despite having labeled fields for patient name, date of birth, address, and various checkboxes for record types, all are static text requiring print-and-fill completion. The form is compact at one page with a logical layout organized into PATIENT INFORMATION, INFORMATION REQUESTED, PURPOSE, and INFORMATION TO BE GIVEN TO sections. Record type options are granular, with 14+ checkboxes covering specific document types plus a write-in option.

The language is moderately legalistic, particularly the liability release and re-disclosure clauses. Template merge fields (`«PatientNumberBarcode»`, `«PatientName»`, etc.) are visible at the bottom of the public PDF, indicating an unprocessed template extracted from the hospital's document management system — confusing for patients and unprofessional in appearance. A typo ("in ability" for "inability") in the legal representative attestation is concerning for a legal document.

**Form-2** (physician network form) is more comprehensive at two pages but also entirely non-fillable. Its standout feature is granular opt-in checkboxes for seven categories of highly confidential information (mental health, psychotherapy notes, HIV/AIDS, STDs, substance abuse, sexual assault, child abuse/neglect). However, it requests the patient's Social Security Number, carries no organizational branding, has a date field locked to "200_" (rendering one term option unusable since 2010), and provides no Privacy Office contact information.

## Barriers and Compliance

Neither form requires notarization or in-person submission. Neither mentions fees. Both include standard HIPAA disclosures: revocation rights, non-conditioning of treatment, and re-disclosure warnings. Form-1's six-month default expiration is reasonable. The liability release clause on Form-1 — releasing the hospital "from any legal responsibility or liability" — is unnecessary for patient self-access and could discourage patients from exercising their rights. Both forms are notably outdated (2013 and pre-2010 respectively), predating significant regulatory updates.

## Notable Strengths

- **Swellbox/Datavant online portal** for patient record requests provides a modern digital pathway beyond the paper forms
- **Dedicated medical records page** with clear organization and multiple access options
- **Granular record-type checkboxes** (14+ options on form-1) give patients meaningful control
- **Granular sensitive information opt-in** on form-2 (seven separate categories) represents strong practice

## Notable Weaknesses

- **No dedicated patient access form** — both PDFs are generic third-party authorization forms
- **Zero fillable fields** on either form — entirely print-and-fill
- **Severely outdated forms** (one from 2013, one from pre-2010)
- **Visible template merge fields** on form-1 indicate an unprocessed internal template
- **SSN requested** on form-2 (unnecessary privacy risk)
- **Liability release clause** on form-1 (inappropriate for patient self-access)

## Overall Assessment

Piedmont Medical Center provides a functional but unexceptional patient records request experience. The organization's investment in a Swellbox/Datavant online portal significantly improves the digital pathway, compensating for PDF forms that are entirely paper-oriented and outdated. The medical records page is easy to find and well-organized. However, the underlying PDF forms show their age — neither has been updated in over a decade, neither offers fillable fields, and neither is designed with patient self-access as a primary use case. The organization earns a B grade, buoyed by the portal alternative and reasonable findability, but held back by paper-era form design and a generic authorization approach that doesn't center patient access rights.
