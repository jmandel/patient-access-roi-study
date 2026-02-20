# Maury Regional Health — Org-Level Synthesis

## Overview

Maury Regional Health, a nonprofit regional system based in Columbia, TN (encompassing Maury Regional Medical Center, Marshall Medical Center, Wayne Medical Center, and Maury Regional Medical Group), provides a reasonably accessible records request experience with several notable strengths — particularly multilingual availability and multiple delivery channels — but falls short of best-in-class by relying on a generic authorization form rather than a dedicated patient access pathway.

## Available Forms & Pathways

Two PDF forms were found, both linked from the Medical Records page (`/patients-and-visitors/medical-records/`):

- **Form 1 (Form 131, 08/2018):** English-language "Authorization to Release Protected Health Information" — a single-page, general-purpose ROI form.
- **Form 2 (Form 131S, 05/2017):** Spanish-language translation of the same form, though dated over a year earlier and containing content discrepancies.

Beyond the downloadable PDFs, the medical records page also offers an **online request portal via Swellbox** and access through the **My Maury Health Patient Portal**, giving patients three distinct channels. Fax submission (931.380.4092) and phone contact (931.380.4089) are also listed.

## Access Pathway Differentiation

Maury Regional Health does **not** differentiate between patient self-access and third-party release. The single form serves all purposes — requesting your own records, releasing to an attorney, sending to an insurer, etc. However, the form does accommodate patient access by listing "Myself" as the first option in the recipient field and including "Personal Use" as a purpose checkbox. A patient can use this form, but must navigate fields designed for third-party scenarios (specifying a recipient name/address, selecting among purposes that don't apply). The availability of the Swellbox online portal is a meaningful alternative that may provide a more streamlined patient experience, though the portal itself was not evaluated in this study.

## Retrieval Experience

Finding the forms was **easy**. A site-scoped search immediately surfaced the medical records page. The page is reachable in two clicks from the homepage (Patients and Visitors → Medical Records). PDFs are hosted on Cloudinary CDN and downloaded without authentication or bot blocking. The only minor difficulty was a 403 error from the web_fetch tool on the medical records page, requiring browser fallback — but the PDFs themselves downloaded cleanly.

## Form Document Quality

The primary English form (Form 131) is a clean, single-page, digitally-created PDF — not a scan. It has a proper text layer enabling screen reader access and text search. However, it has **zero fillable fields**: all blanks are underscore lines requiring handwriting after printing. The form follows a logical top-to-bottom flow (demographics → direction of release → purpose → date range → record types → format → consent → signature) and uses reasonable visual hierarchy with checkboxes and section groupings. Language is a blend of plain English and necessary legal terminology — the consent bullets are clearly written, though the sensitive information disclosure section is dense.

The form offers an unusually good set of **four delivery format options**: paper copies, CD, USB flash drive, and encrypted email — with a thoughtful security disclosure about email risks.

## Barriers & Compliance

- **No notarization or witness required.**
- **No fees disclosed** — the form says nothing about costs.
- **Hold harmless clause** is a red flag: "The facility is hereby released and discharged of any liability, and I will hold the facility harmless for complying with this authorization." HIPAA does not permit conditioning access on signing a liability release.
- **90-day authorization expiration** is relatively short but within norms.
- **Photo ID verification** on the English form implies in-person submission, though the website lists fax as an option.
- **No response time commitment** stated.

## Notable Strengths

- **Spanish-language form available** — uncommon among community hospitals in this study.
- **Multiple request channels** (PDF, Swellbox portal, patient portal, fax, phone).
- **Encrypted email delivery** option with proactive security disclosure.
- **"Myself" listed first** in the recipient field — a subtle but meaningful patient-centric design choice.

## Weaknesses

- **No dedicated patient access form** — patients must use a generic authorization form.
- **Non-fillable PDF** — requires printing and handwriting.
- **Spanish form is outdated** (05/2017 vs. 08/2018 English) with missing content (no Social Security/Disability purpose, no Photo ID section).
- **Hold harmless clause** is potentially noncompliant for patient access requests.
- **Sensitive information limitation** is mentioned but no mechanism is provided to exercise it.

## Overall Assessment

Maury Regional Health provides an accessible, findable, and reasonably well-designed records request process with commendable multilingual support and multiple submission channels. The main shortcomings are the lack of a dedicated patient access pathway, a non-fillable PDF form, and a potentially problematic liability waiver. The availability of the Swellbox online portal partially compensates for the PDF's limitations, and the overall experience is adequate — a patient can successfully request their own records without undue difficulty, though the process could be more patient-centric.
