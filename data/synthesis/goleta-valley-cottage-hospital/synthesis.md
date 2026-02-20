# Goleta Valley Cottage Hospital — Org-Level Synthesis

## Overview

Goleta Valley Cottage Hospital is part of **Cottage Health**, a regional nonprofit system serving the Santa Barbara/Goleta area of California. The hospital does not maintain its own ROI forms; instead, it uses Cottage Health's system-wide "Authorization for Disclosure of Health Information" (Form NS1405). Three documents were retrieved: the current English form (Aug 2025), a complete Spanish translation (Form NS1406, Aug 2025), and a superseded English version (Jun 2025). Cottage Health also offers an online electronic request pathway via Swellbox, linked from the same medical records page.

## Access Pathway: Generic Authorization, Not Dedicated Patient Access

The primary form is a **generic HIPAA authorization** designed for all types of health information disclosure — to providers, insurers, attorneys, and the patient themselves. It is not a dedicated patient access request form. However, Section C includes a clear **"Patient (self)" checkbox**, so a patient requesting their own records can use the form without pretending to be a third party. The form's title ("Authorization for Disclosure of Health Information"), structure (redisclosure restrictions, recipient relationship fields), and framing are clearly built around the third-party release paradigm. A self-requesting patient must navigate sections that don't apply to them — recipient relationship, redisclosure restrictions — and there is no streamlined "I just want my own records" pathway on the PDF itself.

The **Swellbox online wizard** (linked from the medical records page) provides an alternative digital pathway that may be more patient-centric, though it was not evaluated in detail.

## Retrieval Experience

Finding the form was **straightforward**. The medical records page sits at a clear navigation path (Home > Patients & Visitors > Accessing Your Medical Records) and is well-organized. The main friction was technical: the primary website URLs are protected by Akamai CDN, which blocks programmatic downloads. Azure Blob Storage mirror URLs worked without issue. The website also hosted both June and August 2025 versions simultaneously, creating minor version-confusion risk. The older version remains live at its original URL with no "outdated" notice.

## Form Document Quality

The primary form (form-1.pdf) is a **2-page, digitally-authored PDF** with a full text layer — not a scan. Despite this, it has **zero fillable/interactive form fields**. All checkboxes and text blanks are static visual elements. A patient must print the form, fill it by hand, and then scan or photograph it for electronic submission. This contradicts the form's own statement that "VALID ELECTRONIC SIGNATURES WILL BE ACCEPTED" — the form signals digital readiness but doesn't deliver it.

The layout is well-organized with **nine lettered sections (A–I)**, each with clear headings, following a logical flow: patient info → record scope → recipient → delivery method → expiration → rights → restrictions → cost → signature. The language is **mostly plain**, with an accessible opening statement about the right to refuse. Some passages lean toward legalese (redisclosure restrictions in Section G). At approximately 15–18 fields, the scope is reasonable for the content covered.

## Barriers and Compliance

**Submission methods** are genuinely flexible: email (medicalrecords@sbch.org), fax, and mail are all accepted. No in-person requirement exists. Electronic signatures are explicitly accepted. **No notarization** is required.

**Fees** are vaguely disclosed: "There may be a fee for copies of medical records. You will be notified in advance." No fee schedule or amount is provided, and the waiver for provider-to-provider transfers could imply that patient self-requests do incur fees. The form commits to a **15-day turnaround**, faster than HIPAA's 30-day requirement.

One **red flag**: the opening warning that "Failure to provide all information requested may invalidate this authorization" could function as a barrier, potentially giving the organization grounds to reject incomplete but actionable requests. HIPAA does not permit denying access based on incomplete non-essential fields.

## Notable Strengths

- **Spanish-language version**: A complete, professionally translated form (NS1406) — not a summary — demonstrating genuine linguistic accessibility for the Goleta/Santa Barbara community.
- **MyChart delivery option**: Patients can receive records directly through the patient portal, a modern approach many organizations lack.
- **Swellbox online alternative**: A fully digital request pathway exists alongside the PDF, giving patients a choice.
- **Multiple submission channels**: Email, fax, and mail all accepted — no physical visit required.
- **California sensitive-category handling**: Appropriate opt-in checkboxes for Mental Health, Chemical Dependency, HIV, and Reproductive Healthcare with state law citations.

## Overall Assessment

Cottage Health provides a **competent but not exemplary** patient access experience. The system earns credit for offering multiple pathways (PDF, Swellbox portal, email/fax submission), a Spanish translation, and MyChart delivery. However, the core form is a generic third-party authorization rather than a dedicated patient access pathway, and the lack of fillable fields in the PDF undermines the digital workflow the system otherwise supports. The vague fee language and "invalidation" warning are minor compliance concerns. A patient can successfully request their own records through this system without undue hardship, but the process could be meaningfully improved with a patient-specific form and interactive PDF fields.

**Grade: B** — Good overall with room for improvement in patient-centeredness and technical accessibility of the PDF form.
