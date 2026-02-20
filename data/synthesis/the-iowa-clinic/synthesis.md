# The Iowa Clinic — Organization Synthesis

## Overview

The Iowa Clinic is an independent, for-profit physician practice in West Des Moines, Iowa. Notably, the organization has fully transitioned away from downloadable PDF authorization forms: all medical records requests are now handled through third-party online platforms. The two PDF forms evaluated (form-1.pdf and form-2.pdf) were retrieved exclusively from the Wayback Machine and date from approximately 2012–2015. They are no longer available on the live website.

## Available Pathways and Current State

The Iowa Clinic's medical records page (https://www.iowaclinic.com/for-patients/payment-billing/medical-records/) routes patients through four distinct channels depending on who is requesting records:

1. **Patient self-requests**: Datavant/Swellbox Health Record Wizard (https://www.swellbox.com/iowa-clinic-wizard.html) — an online portal for patients to request their own records.
2. **Imaging records**: A Formstack-powered web form on the Iowa Clinic website.
3. **Healthcare providers**: A separate Swellbox wizard.
4. **Third-party organizations**: SmartRequest portal (https://smartrequest.com).

This multi-channel architecture is the most relevant finding: The Iowa Clinic **does differentiate patient self-access from third-party release** at the website level, routing patients to a dedicated Swellbox wizard while directing third-party organizations to a separate SmartRequest portal. This structural separation is a meaningful strength.

## Retrieval Experience

Finding the medical records page itself was straightforward — it's accessible under For Patients > Payment & Billing > Medical Records. However, finding downloadable PDF forms required significant effort since none exist on the current site. The PDFs were only recoverable through Wayback Machine archive searches of defunct URLs (`/static/docs/Authorization_For_Release_From.pdf` and `/static/docs/medical-records-release-form.pdf`). No bot blocking was encountered, and no browser fallback was needed.

## Historical Form Quality (form-1.pdf — Primary Evaluated Form)

Form-1.pdf is the newer of the two historical forms — a single-page "Authorization for Release of Information" with a clean digital layout (not a scan), text layer present, but **zero fillable fields**. It would require printing and handwriting. The form has approximately 15 fields including patient demographics, record-type checkboxes (8 options), destination address, purpose of release (6 options plus "Other"), sensitive-information opt-out initials, and signature. The layout follows a logical flow and fits everything on one page without excessive cramming.

The language is a mix of plain and semi-legal. Disclosure paragraphs are readable but contain some dense constructions. The form includes a "Request by patient" purpose option, which is a bright spot — acknowledging patient-initiated access even within a form designed primarily for third-party release. Submission was by fax (515-875-9600) or mail only.

## Barriers and Concerns

- **SSN collection**: Both forms request Social Security Number, which is unnecessary for records release and creates identity theft risk.
- **Blanket liability waiver**: The electronic transmission clause shifts all liability for misdirected fax/email to the patient, which is an overreach.
- **Fees**: The forms mention a "cost-based fee" without specifying amounts — compliant language but leaves patients unable to anticipate costs.
- **No notarization or witness required** — a positive.
- **No in-person requirement** — fax and mail were offered as submission methods on the historical forms; the current online portal eliminates even these steps.

## Notable Strengths

The Iowa Clinic's most significant strength is its forward-looking transition to a fully digital, portal-based workflow. By routing patient requests through Swellbox/Datavant — a purpose-built health records request platform — the organization has eliminated the print-fill-fax cycle entirely for patients with internet access. The website's clear separation of patient requests from third-party requests demonstrates awareness of the distinction between individual access rights and authorization-based release.

## Overall Assessment

The Iowa Clinic presents a bifurcated picture. Its **current state** is strong: the organization has modernized beyond PDF forms to online portals with clear pathway differentiation. However, the **historical forms** we could directly evaluate were generic ROI authorization forms with no fillable fields, SSN collection, and liability waivers. Scoring reflects the best available current pathway (the Swellbox portal) while noting that the only downloadable form documents available for detailed quality assessment are from 2012–2015 and no longer represent the patient experience. For a patient requesting their own records today, The Iowa Clinic offers a patient-centered, digitally accessible process.
