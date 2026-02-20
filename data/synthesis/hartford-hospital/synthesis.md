# Hartford Hospital — Org-Level Synthesis

## Overview

Hartford Hospital is part of Hartford HealthCare (HHC), a regional nonprofit health system in Connecticut. For medical records requests, the organization uses the system-wide "Authorization to Disclose/Obtain Health Information" form (HH Forms 571559, Rev. 11-2022), a generic HIPAA authorization that serves all 11 HHC facilities. Three PDF documents were retrieved: the system-wide form hosted on two different HHC domains (form-1 and form-3, which are textually identical), and an older Institute of Living–specific variant from 2012 (form-2). The primary form for a patient seeking their own records is form-1.

## Access Pathway: Generic Authorization, No Dedicated Patient Route

Hartford Hospital does **not** offer a dedicated patient access pathway. The system-wide form is a general-purpose authorization designed equally for third-party release (to insurers, attorneys, other providers) and patient self-access. The form's structure — "I authorize _____ to disclose/obtain health information to: ______" — is fundamentally oriented around third-party disclosure. A patient requesting their own records must puzzle over which blank to fill with the hospital's name and which with their own.

The purpose field lists "At the request of the patient" as one checkbox alongside "Medical," "Legal," "Disability," and "Insurance," correctly marked as "(Optional)." But the form offers no simplified pathway, no separate section, and no explanatory text for patients exercising their Right of Access under HIPAA § 164.524. The patient must navigate the same form and fields designed for attorneys and insurance companies.

## Retrieval Experience

Finding the form required **moderate effort**. The parent system's medical records page at `hartfordhealthcare.org/patients-visitors/patients/medical-records` is well-organized and links directly to the authorization form. However, a patient starting at `hartfordhospital.org` must navigate to the parent system's site. A previously indexed URL for the form now returns a 404 error, meaning patients following older search results or bookmarks encounter a dead link. The current URL uses an opaque numeric filename (`571559.pdf`) that gives no indication of the document's contents.

## Form Document Quality

The primary form is a 2-page, digitally-authored PDF with a text layer but **zero fillable fields**. Despite being revised in November 2022, every field is rendered as static underscored blank lines. A patient must print the form and complete it by hand — or use a PDF annotation tool as a workaround. For a major regional health system, the absence of any interactive form fields is a significant missed opportunity.

The layout is dense but logically organized: patient identification → source/destination → delivery method → record types → purpose → rights/signature. However, the form opens with staff-facing administrative fields (MR#, Date Completed, Pages Copied, Initials) that have no relevance to patients and may cause confusion. The record type section offers 19 checkbox options — useful granularity for specificity but potentially overwhelming for patients who simply want "my records." Sensitive categories (HIV, mental health, substance abuse, reproductive health) are appropriately broken out with corresponding legal notices on page 2.

The language is moderately legalistic. The opening sentence is a dense multi-clause construction that packs in references to mental illness, substance abuse, HIV, and reproductive services. Page 2's legal notices contain typographical errors ("If the event" instead of "In the event") and inconsistent capitalization.

## Submission Methods and Barriers

The form lists fax numbers and mailing addresses for all 11 HHC facilities, making submission by fax or mail straightforward. There is no email address, web portal, or online submission option. Fax qualifies as an adequate electronic pathway per our scoring baseline.

**No notarization or witness is required.** No fees are mentioned on the form. The form correctly states that treatment is not conditioned on signing the authorization, and that the patient may inspect or copy their information. The purpose field is correctly marked optional.

## Bright Spots

- **Comprehensive facility directory**: All 11 HHC facilities listed with addresses and fax numbers as checkboxes, eliminating the common pain point of not knowing where to send the form.
- **Connecticut-specific protections**: Detailed legal notice blocks for HIV, psychiatric, substance abuse, and reproductive health records, citing applicable state and federal law.
- **Purpose marked optional**: Correctly implements the HIPAA principle that patients need not justify access requests.
- **Sensitive information opt-in**: Separate checkboxes for specially protected categories give patients granular control.

## Red Flags

- **Stale URL returning 404**: Older links to the form lead to a dead end.
- **Confusing dual-purpose "disclose/obtain" structure**: Patients must determine which direction of information flow applies to them.
- **"Electronic" delivery undefined**: Listed as an option with no explanation of what it means in practice.
- **Typographical errors**: Multiple instances of "If the event" instead of "In the event" on page 2.

## Overall Assessment

Hartford Hospital provides a functional but unremarkable records request experience. The system-wide form covers the basics and includes appropriate compliance language, but the lack of fillable fields, absence of a dedicated patient access pathway, and generic third-party authorization structure all represent missed opportunities to serve patients well. The form is a C-grade experience: a patient can get their records, but the process was not designed with them in mind.
