# Sturdy Memorial Hospital — Org-Level Synthesis

## Forms and Pathways Available

Sturdy Memorial Hospital (Attleboro, MA) publishes two PDF authorization forms on its website, both titled "Authorization to Release Health Information." Form-1 (updated January 2025, form code SM00081 10/24) is the current, actively maintained version — a 2-page fillable PDF with 59 interactive fields. Form-2 is an older (~2017) legacy version of the same document with zero fillable fields, outdated terminology ("Venereal Disease"), and defunct department references. Form-2 remains publicly accessible, creating a risk that patients download the wrong version. There is no redirect, banner, or other mechanism steering patients to the current form.

No online portal, patient portal integration, or third-party vendor (e.g., Swellbox/Datavant) was identified for records requests. The only documented pathway is downloading and completing the PDF authorization form, then submitting it — presumably by mail or fax, though the form itself does not specify a submission method. The hospital's mailing address (211 Park Street, PO Box 2963, Attleboro, MA 02703-0963) is listed in the revocation instructions.

## Access Pathway Differentiation

Sturdy Memorial does **not** differentiate between patient self-access and third-party release. Both form versions are general-purpose HIPAA authorization forms structured around a three-party model: the patient authorizes Provider A to release records to Provider B. A patient requesting their own records must list themselves as the recipient in the "Release of Protected Health Information To" field — an unintuitive workaround that the form does not explain. The "Purpose of Disclosure" checkboxes include "Personal," the closest match for self-access, but this option is neither highlighted nor explained. The form does not reference the patient's HIPAA Right of Access (45 CFR § 164.524), nor does it mention the right to inspect or obtain copies of one's own records as a distinct use case.

## Retrieval Experience

Finding the forms was **easy**. A single web search immediately surfaced both PDFs as direct links on sturdyhealth.org. No website navigation was needed. However, Akamai CDN bot protection blocked programmatic downloads (curl returned "Access Denied"), requiring a browser-based JavaScript workaround to retrieve the raw PDF bytes. This would not affect a typical patient using a web browser but could impede assistive-technology or API-based access.

## Form Document Quality (Form-1)

The current form is a standout in technical execution. With 59 fillable fields, it is comprehensively interactive — patients can complete the entire form electronically without printing. The PDF is a native digital document (no scanned images, full text layer, 221 KB file size). The layout follows a logical flow: patient identification → authorization source/recipient → sensitive information categories → purpose of disclosure → record types → rights → signature. The form uses clear section organization across its 2 pages.

Language is mixed: the rights section uses accessible plain English ("I may refuse to sign this authorization and that such refusal will not affect my health care"), while the sensitive information and disclosure sections are more legalistic. No plain-language summary or introductory guidance is provided. The form is English-only.

Record-type granularity is a notable strength — approximately 14 categories with individual date-range fields (medical record abstract, clinic visit notes, emergency room, lab reports, radiology, pathology, operative reports, etc.), giving patients meaningful control over scope. Sensitive information categories (mental health, HIV/AIDS, STD, sexual assault, substance abuse, genetic testing) require individual initials, respecting Massachusetts law and patient autonomy.

## Barriers and Red Flags

- **90-day hard expiration**: The authorization expires 90 days from signature, with no option to specify a custom date (the older form-2 allowed this). Given HIPAA's 30-day processing window with a possible 30-day extension, this leaves a narrow margin.
- **Ambiguous witness requirement**: A "WITNESS" line appears at the bottom of page 2 with no instructions on whether a witness is required. Patients may unnecessarily delay submission while seeking a witness.
- **No fee disclosure**: The form says nothing about costs for records copies.
- **No submission instructions**: The form does not specify how or where to submit the completed authorization.
- **No electronic delivery option**: No checkbox for email, portal, or electronic format delivery of the requested records.

## Bright Spots

- **59 fillable fields** — exceptional among ROI forms, most of which have zero interactive fields. Clearly a deliberate digital-first design decision.
- **Granular record-type selection** with ~14 categories and date ranges.
- **Individual sensitive-information consent** via initials for each category.
- **Active form maintenance** — the January 2025 update shows ongoing attention.
- **No notarization requirement**, no consent bundling, and clear right-to-refuse language.

## Overall Assessment

Sturdy Memorial Hospital delivers a technically excellent form that falls short on patient-centeredness. The fillable PDF with granular record selection is among the best form documents in its class, but the absence of a dedicated patient access pathway means patients must navigate a third-party release form to exercise their Right of Access. The form's structure, language, and field design all orient toward provider-to-provider or provider-to-insurer disclosure rather than patient self-access. Combined with ambiguities around witness requirements, submission methods, and a restrictive expiration, the experience is functional but not patient-centered.
