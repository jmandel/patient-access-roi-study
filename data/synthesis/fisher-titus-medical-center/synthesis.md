# Fisher-Titus Medical Center — Org-Level Synthesis

## Overview

Fisher-Titus Medical Center is an independent, nonprofit community hospital in Norwalk, Ohio. Three documents were downloaded from the organization's website: two versions of the same "Authorization to Disclose PHI" form (form-1.pdf revised 11/2024 and form-3.pdf revised 07/2025, both carrying form number FTC24-5) and an unrelated Emergency Medical Authorization form (form-2.pdf) for minor children. The relevant documents for patient self-access are the two ROI authorization forms, with form-3.pdf being the more current revision.

## Access Pathway: Generic Authorization with Patient Self-Access Accommodation

Fisher-Titus does **not** offer a dedicated patient access form. Instead, it provides a single general-purpose "Authorization to Disclose PHI" form that serves all release-of-information purposes — patient self-access, third-party releases to attorneys, insurers, and other providers alike. However, the form includes a notable accommodation: a **"Self (same info as above)" checkbox** in the recipient section (Section 2), which explicitly lets patients indicate they are requesting their own records without having to fill out a separate recipient name and address. A "Personal" purpose option in Section 4 further supports this use case.

Despite these accommodations, the form's framing — titled "Authorization to Disclose PHI" — and its overall design orient around third-party disclosure. There is no reference to HIPAA § 164.524 or the patient's right of access, no plain-language explanation of patient rights, and no guidance distinguishing the patient self-access process from a third-party release. A patient must navigate a form designed for a different primary audience.

## Retrieval Experience

Finding the form was **easy**. It is reachable within two clicks from the homepage (Patients & Guests → Patient Forms) and is also available on a dedicated Medical Records page (/medical-records). No bot blocking, login walls, or JavaScript-rendered links were encountered. URLs are descriptively named. The two independent navigation paths to the form are above average for a community hospital. One confusing element: the Patient Forms page links to the older revision (form-1.pdf) while the Medical Records page links to the newer revision (form-3.pdf), with no indication to the patient which version is current.

## Form Document Quality

The best available form (form-3.pdf, revised 07/2025) is a 2-page, digitally-authored PDF with extractable text. However, it has **zero fillable fields** — all blanks are rendered as typographic underscores, and checkboxes are non-interactive Unicode characters. Patients must print the form and complete it by hand or use a PDF annotation tool. This is a print-first design distributed digitally.

The form's structure is well-organized with **eight clearly numbered sections** following a logical progression: patient info → recipient → treatment location → purpose → record types → format/delivery → sensitive information consent → expiration/signature. Section 5 provides impressively granular record selection with approximately 17 specific record type checkboxes (discharge summaries, H&P, operative reports, lab, pathology, radiology images, immunizations, ED records, etc.), each with date fields. Patients can request their entire record or specific items.

The language is **moderately clear** — section headers are descriptive and the flow is intuitive, but legal boilerplate in Sections 7 and 8 uses complex sentence structures typical of authorization forms. A patient of average literacy could complete the form, though the dense Section 5 and legal consent language may slow them down. Approximately 20–25 fields require completion for a basic self-access request.

## Barriers and Concerns

- **SSN requested**: Section 1 asks for "SS#" (Social Security Number), which is unnecessary for patient access under HIPAA and creates identity theft risk on a form that may be faxed.
- **Witness signature line**: A "Witness Signature" line appears at the bottom with no explanation of when or whether a witness is required, potentially deterring patients who lack a convenient witness.
- **Vague fee disclosure**: The form states Fisher-Titus "may charge a fee" but provides no fee schedule, amounts, or indication of whether patient self-access requests are free.
- **Two conflicting versions online**: The older and newer revisions differ in content (sensitive information categories, specialty office listings) but share the same form number, risking patient confusion.

## Bright Spots

- **Encrypted email as a delivery format**: Fisher-Titus offers encrypted email alongside CD, flash drive, and paper for records delivery — a progressive option for a community hospital.
- **Granular record selection**: The 17+ record type checkboxes with date fields give patients fine-grained control over their request scope.
- **"Self" checkbox**: The explicit self-request accommodation, while not a dedicated patient form, reduces friction compared to forms that only contemplate third-party recipients.
- **Multiple submission channels**: Fax numbers are listed for each treatment location, and mail and in-person options are available — ensuring patients can submit without physically visiting the facility.

## Overall Assessment

Fisher-Titus Medical Center provides an accessible, reasonably well-designed records request process hampered by a print-only form design and a generic authorization framework that does not truly center patient self-access. The form is easy to find, logically organized, and offers progressive delivery options including encrypted email. However, the lack of fillable fields, the SSN request, the ambiguous witness requirement, and the absence of patient rights language or fee transparency pull the overall experience down. A patient can successfully request their own records through this process, but the organization has not designed the experience with that patient in mind as the primary audience.
