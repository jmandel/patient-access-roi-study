# Northwest Colorado Health — Org-Level Synthesis

## Overview

Northwest Colorado Health is an independent nonprofit FQHC in Steamboat Springs, Colorado. The organization publishes two ROI authorization forms on its website: one for behavioral health records (form-1) and one for medical/dental records (form-2). Both are single-page PDFs available from a dedicated patient forms page. There is no patient portal, online request wizard, or dedicated patient-access form — both forms are generic HIPAA authorization forms designed for any release of information, whether to the patient themselves or to a third party.

## Access Pathway

Northwest Colorado Health does **not** differentiate between patient self-access and third-party release. Both forms use the same "Request Information FROM" / "Release Information TO" structure, treating a patient requesting their own records identically to someone authorizing release to an insurer, attorney, or another provider. The "Release Information TO" section does list "Self / Legal Guardian" as a pre-printed option, which at least acknowledges that patients may be the intended recipient, but the form's structure, legal language, and scope options are all oriented toward the general authorization use case.

Patients who received both medical and behavioral health services at this facility would need to complete **two separate forms** — a meaningful friction point not faced by those seeking release to a single third party.

## Retrieval Experience

Finding the forms was straightforward. A site-scoped web search located the patient forms page at a logical URL path (`/what_you_can_do/patient-resources/patient-forms/english.html`). Both forms were publicly linked, downloadable without authentication, and no bot-blocking or CAPTCHA was encountered. The download URLs are GUID-based and not human-readable, but this is a minor cosmetic issue.

## Form Document Quality

The primary form for patient self-access is form-2 (Medical and/or Dental), as it covers the broadest category of records most patients would seek. Key observations:

- **Fillability:** Despite metadata reporting 43 field annotations, the form is functionally a flat PDF — not practically fillable. Patients must print and complete by hand.
- **Length:** A single page, which is commendably concise. However, this compresses a substantial amount of content into a tight layout.
- **Language:** The introductory paragraph is notably patient-friendly: "We value your privacy at Northwest Colorado Health. Legally, we cannot release your written health record to anyone (including you) without your specific consent." The tone shifts to denser legal language in the six numbered disclaimers but remains reasonably readable.
- **Layout:** Logically organized with clear sections — patient info, FROM/TO entities, record types, purpose, sensitive-information authorization, signature, and legal paragraphs. Checkbox-driven options for record types and disclosure purposes reduce writing burden.
- **Instructions:** The form provides adequate contextual guidance but lacks explicit step-by-step instructions. Critically, it provides **no submission instructions** — a patient who downloads and completes the form has no guidance on where or how to send it (no fax number, no mailing address, no email, no portal link for submission).

## Barriers and Concerns

- **SSN collection:** Both forms request the patient's Social Security Number, which is unnecessary for identity verification under HIPAA and creates a data security risk.
- **No submission method stated:** The absence of submission instructions is a significant barrier. The Privacy Officer's mailing address appears only in the revocation clause, not as a submission destination.
- **No fee disclosure:** The forms neither mention fees nor state that patient access is free, leaving cost ambiguity.
- **Legacy organization name:** The revocation section refers to "Northwest Colorado Visiting Nurse Association," the organization's former name, which could confuse patients despite the form's 04/2020 revision date.

## Bright Spots

- **Fast processing commitment:** "Up to 48 business hours" (~6 business days) is well within HIPAA's 30-day window and more specific and faster than most organizations promise.
- **Plain-language introduction:** The opening paragraph is warm, clear, and patient-friendly — significantly better than the legalistic openings common on ROI forms.
- **Photocopy validity:** The form states that photocopies are as valid as originals, reducing barriers for patients.
- **Non-retaliation statement:** Clearly states that care and payment will not be affected by declining to sign.
- **Easy findability:** Forms are publicly accessible without login or barriers.

## Overall Assessment

Northwest Colorado Health provides a functional but unremarkable records request process. The forms are easy to find, concise, and written with an unusually patient-friendly tone. However, the organization funnels all requests through a generic authorization form with no differentiation for patient self-access, collects unnecessary SSNs, provides no submission instructions, and offers only a print-and-handwrite workflow. The split into two separate forms by record category adds friction for patients. This is a typical small independent FQHC approach — adequate but not designed with the patient's individual access rights as a first-class concern.
