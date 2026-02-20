# Virginia Garcia Memorial Health Center — Org-Level Synthesis

## Overview

Virginia Garcia Memorial Health Center (VGMHC) is an independent, nonprofit FQHC based in Hillsboro, Oregon, serving a predominantly Latino patient population. The organization publishes four Release of Information–related documents on its website: the main HIPAA ROI authorization form in English (form-1) and Spanish (form-2), plus a Release of Verbal Health Information form in English (form-3) and Spanish (form-4). The primary form for a patient requesting copies of their own medical records is form-1 (or form-2 for Spanish speakers).

## Access Pathway: Generic Authorization, Not Dedicated Patient Access

VGMHC does **not** offer a dedicated patient access form or pathway. A patient wanting their own records must use the same general-purpose HIPAA Release of Information form designed for inter-provider exchanges and third-party releases. The form asks the patient to choose a direction ("Get information," "Give information," or "Get and give information") and specify a recipient provider/facility — a workflow that doesn't map cleanly to "I want a copy of my own records."

A partial mitigation exists: the form includes "For my own use" as a purpose checkbox alongside "Coordination of care" and "Insurance/Legal." This acknowledges patient self-access as a valid use case, but the patient still must navigate a form structured around bilateral information exchange rather than simple record retrieval. There is no separate patient access request form, no online portal, and no patient portal–based records request option visible on the website.

## Retrieval Experience

Finding the forms was **easy**. A web search immediately returned direct links to the English ROI form, and the organization's Patient Forms page (https://virginiagarcia.org/get-care/patient-forms/) has a clearly labeled "Release of Information Forms" section grouping all four documents. The only friction points were technical: PDF links are embedded in Divi theme JavaScript click handlers rather than standard HTML anchor tags, and the initial Spanish PDF URL found via search returned an error page (the working URL differed by one character in the filename). Neither issue would meaningfully impede a typical patient clicking through the website.

## Form Document Quality

The primary English ROI form (form-1) is a **well-constructed, fillable interactive PDF** — a 2-page document with 54 interactive form fields, a full text layer, and clean digital typography. It was clearly born-digital, not a scan. The form follows a logical structure: patient identification → direction of release → recipient details → purpose and frequency → granular record type selection (9+ categories plus 4 sensitive-information opt-ins) → legal disclosures → signature block → staff-only section.

The language is mostly **plain and accessible**. The rights section clearly states patients don't need to sign to receive treatment, provides a 30-day processing timeline, and offers two concrete revocation pathways. One minor grammatical error exists ("If have not received your records" — missing "you").

A notable accessibility gap: all 54 fillable fields **lack accessible names** (`fillable_field_names: []`), meaning screen readers cannot identify what each field is for. This is a significant deficiency for an otherwise well-designed digital form.

## Barriers and Compliance

VGMHC imposes **no illegitimate barriers**. There is no notarization requirement, no in-person submission mandate, no witness signature needed, and no fees mentioned. The form header provides both a fax number (503-357-4371) and a PO Box address, enabling remote submission. The 30-day processing commitment aligns with HIPAA requirements.

One concern is the **open-ended authorization duration** — the form defaults to remaining in effect "until my care ends with Virginia Garcia," which could mean years or decades for a patient in an ongoing care relationship. While the patient can specify a different date, the default is unusually long compared to typical 1-year expirations.

The form does not explicitly cite the HIPAA Right of Access (§ 164.524) or frame patient record requests as a distinct legal entitlement — it treats all authorization types equivalently under a general HIPAA authorization framework.

## Bright Spots

- **Bilingual forms**: Both the main ROI form and the verbal release form are available in full English and Spanish versions — not bilingual addenda, but complete standalone translations. For an FQHC serving a predominantly Spanish-speaking community, this is a meaningful commitment to language access.
- **Granular record selection**: Patients can choose specific record types (progress notes with date range, immunizations, labs, dental, medications, imaging, consultations) rather than an all-or-nothing approach, with separate opt-ins for sensitive categories.
- **Active document governance**: Version numbering (v6), effective/revision dates, and department ownership (Compliance) demonstrate ongoing form maintenance.

## Overall Assessment

Virginia Garcia earns a solid **B grade**. The organization makes its forms easy to find, provides a technically capable fillable PDF, offers meaningful bilingual access, and imposes no illegitimate barriers. The main shortcoming is the absence of a patient-centric access pathway — a patient requesting their own records must navigate a generic authorization form designed for third-party releases. The form accommodates patient access (via the "For my own use" checkbox) but doesn't prioritize it. For an independent FQHC without portal infrastructure, this is a common pattern, and VGMHC handles it better than many peers thanks to its well-designed form documents and strong language accessibility.
