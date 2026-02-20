# Lane County Hospital — Org-Level Synthesis

## Overview

Lane County Hospital is a government-owned, independent critical access hospital in Dighton, Kansas. The facility offers a single pathway for medical records requests: a one-page PDF authorization form available on its website. There is no patient portal, online request wizard, or dedicated patient self-access form.

## Available Pathways and Form Classification

Only one form was found: **form-1.pdf**, titled "Authorization for Release of Health Information." This is a generic HIPAA authorization form designed for third-party release of information. It uses the standard disclosure structure — "I authorize [entity] to disclose... to [name]" — which frames the transaction as releasing records to someone other than the patient. A patient requesting their own records must awkwardly list themselves as both the authorizing party and the recipient, navigating a form that was not designed with their use case in mind.

The organization does **not** differentiate between patient self-access requests and third-party authorization releases. There is no separate patient access request form, no mention of HIPAA § 164.524 individual access rights, and no streamlined process for patients who simply want to review or obtain copies of their own records.

## Retrieval Experience

Finding the form was exceptionally easy. A basic web search immediately identified the hospital's Records Request page, which contains a single "Click Here" link to the PDF. No login, bot blocking, or portal navigation was required. For a small rural hospital, this level of web accessibility is a genuine bright spot.

## Form Document Quality

The form is a digitally created PDF with a full text layer but **zero fillable fields**. All blanks are underscore lines, requiring the patient to print the form and complete it by hand (or use third-party PDF annotation tools). The form is one page long with a logical flow: patient identification at top, authorization body, 16 record-type checkboxes, legal disclosures, and signature block. The record-type checkboxes offer strong granularity — 16 categories from Anesthesia Records to Social Work Reports — giving patients meaningful control over what is disclosed.

The language is a mix of plain language and standard legal boilerplate. Some sentences are convoluted ("I understand that I may refuse to sign this Authorization and that my treatment of payment for my treatment will not be affected...") but the form is generally readable. The title contains a typo ("HEATH" instead of "HEALTH") that has persisted since at least 2018. "Psychotherapy Notes" appears twice in the checkbox list, and a cryptic "RESOURCE: MARKETING AUTHORIZATION FORM" reference at the bottom could confuse patients.

## Submission and Barriers

The form directs patients to return it via **fax** to one of two numbers. No email, mail, or online submission option is mentioned. Fax provides an adequate electronic submission pathway.

Two unnecessary barriers stand out. First, the form requests a **Social Security Number**, which is not required for HIPAA-compliant release processing and creates identity theft risk on a form routinely transmitted by fax. Second, a **witness signature line** creates an implicit expectation that a witness is needed, though HIPAA does not require one for valid authorization. Together these add friction and potential deterrence for patients acting alone.

No fees are mentioned. The form includes solid compliance elements: an expiration field, a citation of Kansas SB 119's one-year authorization limit, and clear revocation instructions naming the Privacy Officer with full contact information.

## Overall Assessment

Lane County Hospital makes its records request form easy to find and keeps it concise at one page with good record-type granularity. However, the form funnels all requesters — patients and third parties alike — through a generic authorization designed for disclosure to others, not for individual access. The lack of fillable fields, the SSN request, and the witness signature line create unnecessary friction. For a small critical access hospital, the web accessibility is commendable, but the form itself reflects a third-party-release mindset rather than a patient-centered approach to individual access rights.
