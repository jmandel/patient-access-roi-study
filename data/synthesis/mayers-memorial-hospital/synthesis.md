# Mayers Memorial Hospital District — Org-Level Synthesis

## Available Forms and Pathways

Two documents were found for Mayers Memorial Hospital District, a government-owned critical access hospital in Fall River Mills, California:

1. **form-2.pdf** — A 2-page "Authorization for Use or Disclosure of Health Information" branded with the hospital's name, adapted from the California Hospital Association template (CHA 16-1, March 2013). This is hosted directly on the hospital website but critically mislabeled as "Disclosure of Privacy Practices" in the site navigation. It is the hospital's primary ROI authorization form (form number MMH 470).

2. **form-1.pdf** — A 1-page generic, unbranded "Authorization for Release of Medical Records" hosted on PatientPop's CDN. It was found only through web search and is not linked from any page on the hospital website.

For a patient requesting their own records, **form-2.pdf is the most relevant** — it is the branded hospital form, includes a "Patient request" checkbox under Purpose, and contains a substantive "My Rights" section. However, both forms are fundamentally structured as third-party release authorizations.

## Access Pathway Differentiation

Mayers Memorial does **not** differentiate patient self-access from third-party release. Both forms require patients to fill in a recipient's name and address, meaning a patient requesting their own records must awkwardly enter their own contact information as the "recipient." Form-2 partially acknowledges patient self-access through a "Patient request" checkbox, but the workflow remains identical to a third-party release. Neither form references HIPAA § 164.524 or the patient's right of access.

## Retrieval Experience

Finding a usable form was **difficult**. The hospital's Medical Records page provides only department hours and a phone number — no downloadable form, no request instructions. The branded form (form-2) is linked from the Patients & Visitors page under the misleading label "Disclosure of Privacy Practices," a title that describes an entirely different type of document. A patient looking for a records release form would likely skip this link. The generic form-1 is only discoverable through external web search leading to a third-party CDN URL.

## Form Document Quality

**Form-2** (the primary form) is an **image-only scan** with no text layer and no fillable fields. It cannot be searched, copied from, or read by screen readers — a significant accessibility failure. Despite the poor digital format, its content is reasonably well-structured: clear section headers, checkboxes for record scope (all records vs. specific types), granular sensitive-information checkboxes (mental health, HIV, substance abuse) each requiring initials, and a "My Rights" section written in plain first-person language. Estimated field count is approximately 15 fields across 2 pages.

**Form-1** has a text layer (digitally created) but also lacks fillable fields and is far less complete — no checkboxes, no scope options, no rights statement, and no HIPAA-required authorization elements (expiration, revocation).

Neither form provides any submission instructions — no fax number, mailing address, email, or portal link. A patient who completes the form has no documented path to submit it without calling the hospital.

## Barriers and Concerns

- **No submission instructions on either form**: The most critical barrier — patients cannot determine how to return a completed form.
- **Image-only scan** (form-2): Completely inaccessible to screen readers and assistive technology.
- **Intimidating opening language** (form-2): "Failure to provide all information requested may invalidate this authorization" — potentially chilling for patients who lack details like their MRN.
- **Mislabeled web link**: The form is hidden behind an incorrect label, making it effectively unfindable through normal navigation.
- **No fee disclosure**: Neither form addresses whether fees will be charged.

## Bright Spots

- The "My Rights" section on form-2 is genuinely well-written in plain first-person language, clearly stating patients' rights to refuse, inspect records, and revoke authorization.
- Sensitive information handling is properly separated with individual checkboxes and initial lines, compliant with California law and 42 CFR Part 2.
- Use of the CHA template ensures baseline legal compliance with California health privacy requirements.

## Overall Assessment

Mayers Memorial provides a below-average patient experience for records access. While the branded form has decent content design rooted in its CHA template, the combination of extremely poor findability, an image-only scan format, absent submission instructions, and no differentiation of patient self-access from third-party release creates a frustrating and largely inaccessible process. A patient attempting to request their own records online would struggle at every step — finding the form, reading it with assistive technology, understanding how to complete it for self-access, and figuring out where to submit it.
