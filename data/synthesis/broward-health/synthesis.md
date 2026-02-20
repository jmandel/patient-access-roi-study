# Broward Health — Org-Level Synthesis

## Overview

Broward Health, a government-owned regional health system in Fort Lauderdale, FL, offers a single general-purpose ROI authorization form ("Authorization for Release of Confidential Medical Information") in four languages: English, Spanish, Haitian Creole, and Portuguese. The organization also provides an online records request wizard via Swellbox, a third-party vendor. The system operates multiple facilities (Medical Center, North, Coral Springs, Imperial Point, East Imaging Center, Weston), all sharing the same form and process.

## Access Pathway

Broward Health does **not** differentiate between patient self-access and third-party release. The ROI form is a generic HIPAA authorization that serves both purposes, with a "MYSELF" checkbox alongside an "OTHER" option for third-party recipients. While this checkbox makes it possible for patients to request their own records, the form was not designed around the patient access use case — it requires a purpose statement (not required under HIPAA § 164.524 for patient access), applies minimum necessary language to all requests (which should not apply to individual access under 45 CFR § 164.502(b)(2)(v)), and includes a witness signature line that creates unnecessary procedural friction.

The Swellbox online wizard at `swellbox.com/broward-health-wizard.html` offers a potentially better digital pathway, though the PDF form appears to be the primary resource offered on the Medical Records Request page.

## Retrieval Experience

Finding the form was **straightforward**. The Medical Records Request page is reachable in approximately 3 clicks from the homepage (Patients and Visitors → Information Request → Medical Records Request) and is well-organized, listing all four language versions with direct download links plus the Swellbox option. However, **Cloudflare bot protection** blocked all direct `curl` download attempts, requiring browser-based retrieval. The English form URL was also case-sensitive, with the lowercase variant linked on the page failing — a subtle but real broken link.

## Form Document Quality

The form quality is a mixed picture. On the positive side, the form is a concise single page with a logical section flow: sensitive record classification, patient demographics, authorization and recipient designation, delivery method, purpose, date range, detailed record type checklist (~15 categories with date ranges for lab and radiology), patient rights disclosures, and signatures.

On the negative side, the **English version (form-1.pdf) is an image-only scan** — a grayscale JPEG at 200 DPI with no text layer, no fillable fields, and no screen reader accessibility. This is the primary language version yet the worst quality artifact. The Spanish, Creole, and Portuguese versions are digitally created PDFs with text layers, but they too have **zero fillable fields** — all blanks are underscores requiring print-and-handwrite completion. The Spanish and Portuguese versions also have garbled text from font encoding errors in their expiration clauses. The form's footer references "ADDRESSOGRAPH" and carbon-copy routing ("WHITE - MEDICAL RECORD / CANARY - PATIENTS"), confirming its origin as a physical paper form from 2014 that has never been modernized.

Delivery options are limited to paper or **encrypted CD** — an anachronistic option in 2026 with no email, portal, or electronic transfer available through the form itself.

## Barriers and Compliance

The form includes a **witness signature line**, which is not required by HIPAA for patient access requests and could prevent patients from completing the form at home. A Broward Health authorized signature line is also present, suggesting the form may have been designed for in-person processing. No notarization is required. Fees are referenced vaguely ("reasonable charge" per CFR 164.524) without specific amounts. The website notes approximately 3 business days for processing. Fax submission is available at facility-specific numbers, meeting the baseline for electronic submission.

## Notable Strengths

- **Exceptional multilingual support**: Offering the ROI form in four languages (English, Spanish, Haitian Creole, Portuguese) reflects genuine attention to South Florida's linguistic diversity and is rare among U.S. healthcare organizations.
- **Swellbox online portal**: Provides a fully digital alternative pathway for patients who cannot or prefer not to use the PDF.
- **Explicit CFR 164.524 citation**: References the HIPAA Right of Access regulation directly in patient rights disclosures.
- **Granular record type selection**: The detailed checklist with date-range filtering gives patients meaningful control over their request scope.

## Overall Assessment

Broward Health demonstrates genuine effort in accessibility through multilingual forms and an online portal alternative, but the underlying form infrastructure is outdated and not patient-access-oriented. The 2014-era generic ROI authorization, image-only English scan, lack of fillable fields, witness requirement, and inappropriate application of minimum necessary language to patient requests all reflect an organization that has not modernized its records request process to match the spirit of HIPAA's individual access rights. The Swellbox portal partially redeems the experience, but the PDF pathway — which remains prominently offered — falls short of modern standards. **Grade: C.**
