# Copley Hospital — Org-Level Synthesis

## Overview

Copley Hospital is an independent, nonprofit critical access hospital in Morrisville, Vermont. The hospital offers a single Release of Information form — titled "Patient Request for Health Information Authorization Form" (Form 1085, dated 07-21) — that serves as the primary pathway for patients seeking their own health records. No patient portal–based request option or online submission wizard was identified; the form is a downloadable PDF linked from the hospital's Medical Records page.

## Access Pathway & Patient Self-Access

Copley's form is a **dual-purpose authorization** that handles both patient self-access and third-party release on a single page. The form includes a clear checkbox for "Provide a copy of my records to: Me," which meaningfully distinguishes the patient self-access use case — but it does not separate this pathway from third-party release. A patient requesting their own records encounters fields irrelevant to their situation, such as "Release my Records TO:" (with recipient name, address, fax, and phone fields) and "Purpose of Release." Under HIPAA's Right of Access, patients need not state a purpose for requesting their own records, so the presence of this field — without clarification that it's optional for self-requests — could confuse or deter patients.

The form does not reference HIPAA § 164.524 or the phrase "Right of Access." While the authorization language (voluntariness, revocation rights, re-disclosure warning) is well-written, the form frames the interaction as an *authorization* rather than an *access right*, which is a conceptual distinction that matters for patient-centeredness.

## Retrieval Experience

Finding the form was **easy**. A web search for Copley Hospital's release of information form immediately surfaced a direct link to the PDF. The form is also prominently linked from the Medical Records page under "For Patients + Visitors" in the main site navigation. No bot blocking, CAPTCHA, or login was required. The hospital's Medical Records page also links to three related HIPAA forms (amendment request, alternate communication, PHI restrictions), which shows a thoughtful information architecture even if the ROI form itself is the only one relevant to record requests.

## Form Document Quality

The form is a **single-page PDF** — impressively compact — with a logical top-to-bottom flow: patient demographics → record type selection → delivery/format options → authorization scope → legal disclosures → signature → representative section. The language is largely plain and accessible, with standout phrasing like "My treatment will not be impacted, no matter if I sign this Authorization or not."

However, the form has **zero fillable fields** despite being digitally authored (not a scan). This means patients must print and hand-fill the form, then fax or mail it back. The delivery and format options are notably strong — in-person pickup, mail, fax, and patient portal for delivery, plus paper copy or electronic copy (email, USB, CD, portal) for format — and the form helpfully notes that "Many documents that you may be requesting are available to you in your patient portal." But the submission process itself requires either fax (802-888-8361) or mail to the HIM department.

## Barriers & Compliance

**No notarization or witness** is required. Representative signers must attach proof of authority, which is a reasonable requirement. The authorization is valid for one year with clear revocation instructions including both mailing and fax addresses.

**Fees are not mentioned** anywhere on the form, leaving patients unable to anticipate costs. This is a notable gap — HIPAA requires transparency about fees for patient access requests.

The form is dated July 2021 and predates the 21st Century Cures Act information blocking rules (effective April 2023), suggesting it may not reflect current requirements around electronic health information access.

## Notable Strengths

- **Comprehensive delivery and format options** — email, USB, CD, patient portal, fax, mail, and in-person pickup
- **Single-page efficiency** — all necessary content on one page
- **Clear voluntariness statement** in plain language
- **Easy findability** — prominent placement and search-engine accessible

## Notable Weaknesses

- **No fillable fields** — forces a paper workflow despite digital authorship
- **No fee disclosure** — patients cannot anticipate costs
- **"Purpose of Release" field** not flagged as optional for self-requests
- **No explicit Right of Access framing** — treated as authorization rather than access right
- **Form staleness** — over 4 years old, predating information blocking rules

## Overall Assessment

Copley Hospital provides a reasonably patient-friendly records request experience anchored by easy findability, a compact single-page form, plain language, and strong delivery/format options. The dual-purpose design accommodates patient self-access but doesn't optimize for it. The primary weaknesses — lack of fillable fields and absence of fee disclosure — represent missed opportunities rather than active barriers. Fax submission is available, providing an adequate electronic pathway. For a small critical access hospital, this is a competent if imperfect effort that would benefit from modernization: adding fillable fields, separating or clearly labeling the self-access pathway, and disclosing fee information.
