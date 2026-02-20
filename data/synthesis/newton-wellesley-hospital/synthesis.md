# Newton-Wellesley Hospital — Org-Level Synthesis

## Overview

Newton-Wellesley Hospital (NWH) is a community hospital in Newton, MA, part of the Mass General Brigham (MGB) health system (formerly Partners HealthCare). For medical records requests, NWH uses the system-wide MGB authorization form rather than a facility-specific document. Two forms were found: the current MGB-branded authorization (form-1, dated 06/2024) and a legacy Partners HealthCare version (form-2, dated 01/2006) that remains accessible at an orphaned URL on nwh.org but is no longer linked from current navigation.

## Access Pathway

NWH does **not** offer a dedicated patient self-access pathway. The primary (and only current) form is a general-purpose "Authorization for Release of Protected or Privileged Health Information" designed to serve all release scenarios — patient self-access, third-party release to insurers, attorneys, and other recipients. A patient requesting their own records must navigate the same form as someone authorizing release to a third party, selecting "Personal" as the purpose and checking a box to have records mailed to their own address. While functional, this approach requires patients to identify which sections apply to them and which to skip, without explicit guidance distinguishing patient access rights from third-party authorization.

The form does not reference HIPAA § 164.524 or the patient's Right of Access. It frames the interaction as an "authorization" rather than a right, which is technically appropriate for third-party releases but conceptually misaligned for patient self-access requests.

## Retrieval Experience

Finding the form was **easy**. A single web search returned the direct PDF URL. The NWH website provides a clear navigable path (Patients and Visitors → Billing and Records → Medical Records), though this redirects to the MGB parent system's medical records page where the user must expand a "Newton-Wellesley Hospital" accordion to access the download. This extra indirection is minor. No bot blocking or browser fallback was needed.

## Form Document Quality

The current form (form-1) is a high-quality digital artifact. It features **78 fillable/interactive form fields** — checkboxes, text inputs, and date fields are all functional for on-screen completion. The form is organized into five clearly lettered sections (A through E) with a logical flow: patient info → permission/purpose → record types → sensitive information → understanding/signature. At 2 pages, the length is proportionate.

The header prominently displays submission instructions (mailing address and fax number), and the form offers four delivery methods for the records themselves: Patient Gateway (portal), Secure Email, Fax, and Paper Copy via Mail. The inclusion of electronic delivery options is a notable strength.

Language is mostly plain and accessible, though Section D (sensitive information authorization) contains dense regulatory text, particularly the 42 CFR Part 2 disclosure. This is legally required but not reader-friendly.

**Multilingual support** is a bright spot: the MGB medical records page offers the form in English, Spanish, and Portuguese.

## Barriers

**Notarization**: Not required. Only a patient signature is needed.

**Fees**: The form subtly differentiates — copying fees are asterisked only for Insurance, Legal, and Other purposes, while "Personal" and "Medical Care" are not marked, implying no fees for patient access requests. However, this is implicit rather than explicitly stated.

**Date requirement**: Section C states patients "MUST specify dates" (capitalized emphasis) for each record type category. HIPAA does not require patients to specify date ranges, and this requirement could function as a barrier for patients seeking comprehensive access to their records.

**Outside records carve-out**: Records from outside providers held by MGB will not be released unless the patient specifically requests them under "Other" — placing a knowledge burden on patients who may not know what outside records exist in their file.

## Strengths

- 78 fillable form fields enabling genuine digital completion
- Four delivery methods including portal and secure email
- Trilingual availability (English, Spanish, Portuguese)
- Implicit fee exemption for patient access requests
- Clean, well-organized layout with clear section headers
- Easy findability via web search or website navigation

## Weaknesses

- No dedicated patient access pathway; generic third-party authorization form only
- "MUST specify dates" requirement potentially exceeds HIPAA requirements
- No explicit statement of patient Right of Access
- Outside records require special knowledge to request
- Submission limited to fax or mail (no online form submission)

## Overall Assessment

Newton-Wellesley Hospital, through its parent system MGB, provides a technically well-executed authorization form that is easy to find and genuinely usable digitally. The form's 78 fillable fields, multilingual availability, and multiple delivery options represent above-average document quality. However, the organization does not differentiate patient self-access from third-party release, funneling all requestors through a generic authorization form. The "MUST specify dates" requirement and lack of Right of Access framing are missed opportunities to center the patient experience. Overall, this is a competent but generic approach — the form works, but it wasn't designed with the patient requesting their own records as the primary audience.
