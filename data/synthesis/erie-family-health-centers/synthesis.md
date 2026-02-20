# Erie Family Health Centers — Org-Level Synthesis

## Overview

Erie Family Health Centers, an independent nonprofit FQHC in Chicago, provides two downloaded ROI forms: an English version (form-1.pdf) and a Spanish translation (form-2.pdf). Both are identical in structure — a single-page "Authorization to Release Protected Health Information" form. The organization also directs patients to MyChart (myeriehealth.com) as the primary records access pathway, referenced on a dedicated medical records request page at `/recordsrequest/`.

## Access Pathway Assessment

Erie does **not** offer a dedicated patient-access form. Both downloaded forms are generic HIPAA authorization forms designed for bidirectional use: releasing records *to* a third party or receiving records *from* a third party. A patient requesting their own records must select "to Release to" and write their own name and address in the recipient fields — a process designed for inter-provider transfers, not individual access. The form includes a "Personal Use" checkbox under the purpose section, which accommodates self-requests but does not differentiate the pathway. There is no separate, simplified form for patients exercising their Right of Access under § 164.524.

That said, the records request page promotes MyChart as the primary way to access records, which provides a true patient-access pathway. The PDF form functions as a secondary or fallback option.

## Retrieval Experience

Finding the forms was **easy**. A simple web search for "Erie Family Health Centers medical records release form PDF" returned the direct URL. The organization maintains a clearly labeled `/recordsrequest/` page that links both English and Spanish PDFs and also promotes MyChart. No bot blocking, login walls, or access barriers were encountered.

## Form Document Quality

The English form (form-1.pdf) is a single-page, digitally created PDF with **54 fillable fields**. It was designed for digital completion, not a scan. However, field names are not programmatically labeled (empty `fillable_field_names` array), which impairs screen reader accessibility. The layout is logically organized — patient identification, authorization direction, purpose, format, delivery method, record types, date range, sensitive-category permissions, rights statement, and signature — all on one dense page.

The language is reasonably clear for an authorization form, though the legal disclaimers at the bottom (addressing re-disclosure restrictions under Illinois mental health, substance abuse, and AIDS confidentiality laws) are dense and directed at the receiving party rather than the patient. The reference to "Please refer to Pay Scale for rates" is cryptic — no pay scale is provided or linked, leaving patients uninformed about potential costs.

Format options include paper copy or "Electronic copy (CD-ROM)" — the CD-ROM reference is outdated. Delivery methods include encrypted email, pickup at an Erie facility, fax, and US postal mail. Encrypted email is a notable modern inclusion.

## Barriers

- **Copy of ID required** as a blanket requirement, with no alternative verification methods offered. For an FQHC serving populations that may lack government-issued ID, this exceeds what HIPAA mandates for identity verification.
- **Witness signature line** present with no indication of whether it is required or optional, potentially creating an unnecessary procedural barrier.
- **Fee opacity**: "Please refer to Pay Scale for rates" references an undisclosed fee schedule. Patients cannot learn costs before submitting.
- **No notarization** required. No in-person submission requirement. Auto-expiration at six months is reasonable.

## Bright Spots

- **Bilingual forms**: Both English and Spanish versions are provided and linked side-by-side — appropriate and commendable for a Chicago FQHC.
- **Encrypted email delivery**: A modern, patient-friendly option that many organizations omit.
- **Dedicated records request page**: Clear `/recordsrequest/` page contextualizes forms and promotes MyChart as an alternative.
- **Granular record selection**: Nine specific record categories plus "Other" let patients request exactly what they need.
- **MyChart availability**: The patient portal provides a true digital-first access pathway beyond the PDF form.

## Overall Assessment

Erie Family Health Centers earns a **B grade** (3.70 weighted score). The organization makes its forms easy to find, offers bilingual versions, provides a fillable PDF with modern delivery options including encrypted email, and maintains a dedicated records page. These are genuine strengths, especially for an independent FQHC. However, the lack of a dedicated patient-access pathway (funneling all requestors through a generic third-party authorization form), the undisclosed fee schedule, the blanket ID copy requirement, and the ambiguous witness signature line prevent a higher score. The MyChart portal partially compensates by offering patients a true self-service pathway, but the PDF form itself — the focus of this evaluation — treats patient self-access as just another use case rather than a first-class right.
