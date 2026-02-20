# Olmsted Medical Center — Org-Level Synthesis

## Overview

Olmsted Medical Center (OMC) is an independent nonprofit physician practice in Rochester, MN. Two forms were found on the organization's website: a primary "Authorization for Release of Health Information" (form-1) and a companion "Authorization for Allowing Verbal Communication of Protected Health Information" (form-2). Only form-1 is relevant for a patient requesting copies of their medical records; form-2 is limited to authorizing verbal discussions with a designated person and explicitly disclaims any written record release.

## Access Pathway: Generic Authorization, Not Patient-Specific

OMC does **not** offer a dedicated patient access form or pathway. The primary form is a general-purpose HIPAA authorization designed to cover all release-of-information scenarios — patient self-access, third-party release to insurers, attorneys, employers, and others. A patient requesting their own records must navigate this generic form: they fill in OMC's address in the "Release Information From" field (pre-populated) and put their own name and address in the "Release Information To" field. The form includes a "Personal" checkbox under "Reason for Release," which at least provides a recognizable option, but there is no guidance text explaining how a patient should complete the form for self-access specifically. The form does not differentiate between individual access rights under § 164.524 and third-party authorization under § 164.508.

That said, the form does reference "CRF 164.524" (a typo for CFR) and includes a strong non-conditioning statement — both patient-protective elements that go beyond what many generic authorization forms include.

## Retrieval Experience

Finding the form was straightforward. OMC hosts a dedicated "Manage Your Health Information" page accessible through clear website navigation (Patients & Visitors > Your Care & Visit > Manage Your Health Information). Multiple search strategies — filetype:pdf queries, site-scoped searches, and direct navigation — all led to the form quickly. The only friction was Akamai CDN bot blocking, which prevented programmatic downloads via curl but would not affect a patient using a browser. The page also lists Spanish and Somali translations, MyChart proxy access forms, and the verbal communication authorization form.

## Form Document Quality

Form-1 is a genuinely well-crafted document. It is a **single-page fillable PDF** with **62 interactive form fields** — a truly digital-first design, not a scan or print-only document. The layout uses a clean left-column label / right-column field structure with clearly delineated sections: patient demographics, release from/to, method of disclosure, date range, record type selection (a granular checkbox grid), reason for release, authorization/expiration, revocation rights, and signature. The language is mostly plain and functional, though the opening line — "This is a legal document" — may intimidate some patients. The authorization section includes standard but dense legal language about redisclosure and revocation.

Delivery options include mail, pick up, fax (marked "Urgent Only — limitations may apply"), and patient portal (also with "limitations may apply"). The inclusion of patient portal delivery is a positive signal, though the unexplained "limitations" qualifiers create uncertainty. Submission methods include any OMC location, postal mail, or fax (507.287.2777), with a phone number for questions. Fax availability means a patient can submit without visiting in person or relying on postal mail.

## Barriers and Compliance

OMC imposes no unusual barriers. There is no notarization or witness requirement, no mandatory in-person submission, and no upfront fee disclosure. The one-year default authorization expiration is standard. Revocation rights are clearly stated and require written notice to the Health Information Department. The form explicitly references the patient's right to inspect or receive copies under CFR 164.524 and states that OMC will not condition treatment, payment, enrollment, or eligibility on signing the authorization — a strong compliance posture.

Minor issues include two typos ("CRF" for "CFR" and "provide" for "provided"), an inconsistent mailing address between form-1 and form-2, and the unexplained "limitations may apply" qualifiers on fax and portal delivery. The "File Only — No Records Needed at this time" option in the delivery section is an internal administrative option that may confuse patients.

## Bright Spots

- **Multilingual availability** in English, Spanish, and Somali — the Somali translation is notably community-responsive for Rochester, MN
- **62 fillable fields** — a genuinely interactive digital form, uncommon in healthcare ROI
- **Patient portal delivery option** alongside traditional methods
- **Explicit CFR 164.524 reference** and non-conditioning statement — unusually transparent about patient rights
- **Clean single-page design** that fits comprehensive content without feeling cramped

## Overall Assessment

Olmsted Medical Center delivers a technically strong, well-organized, and accessible ROI form that is easy to find and free of significant barriers. The primary weakness is the lack of a dedicated patient self-access pathway — patients must use a generic third-party authorization form and figure out how to adapt it for their own purposes. Despite this, the form's quality, fillability, multilingual support, and compliance posture make it a solid option for patients. The organization earns a **B** grade: strong document quality and accessibility, held back by the generic-form-for-all-purposes approach to patient access.
