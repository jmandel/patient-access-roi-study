# DHR Health — Organization-Level Synthesis

## Overview

DHR Health (formerly Doctors Hospital at Renaissance) in Edinburg, TX offers a single pathway for patients requesting their medical records: a general-purpose "Authorization for Release of Protected Health Information" form (DSR-GEN-71, dated August 2015), available in both English and Spanish from the Medical Records page. There is no dedicated patient self-access form, no online portal, and no digital submission option beyond fax. The form is over a decade old, still carries the organization's former branding, and was designed for third-party release rather than individual access rights under HIPAA.

## Forms and Pathways

Two PDF documents are available on the DHR Health website:

1. **form-1.pdf (English)** — A 2-page authorization form with a text layer and 37 unnamed fillable fields. This is the primary form for any records request.
2. **form-2.pdf (Spanish)** — An image-only scan of the same form, produced on a Konica Minolta copier. No text layer, no functional fillable fields, and several spelling/grammar errors in the Spanish text.

Both serve identical purposes: a bidirectional authorization that can route records either from or to the hospital. The form directs patients to choose between these two directions via an "OR" structure, with no guidance on which section applies to a patient requesting their own records. Submission is by fax or mail to the Health Information Management department; no online portal, email submission, or patient portal pathway was identified.

## Access Pathway Differentiation

DHR Health does **not** differentiate between patient self-access and third-party release. The same form is used whether a patient wants copies of their own chart or an attorney is requesting records. There is no streamlined pathway, no reference to HIPAA § 164.524 Right of Access, and no language acknowledging that patients have a legal right to their own records. The form asks patients to state a "purpose" for the request — a requirement that HIPAA does not impose on individual access — without clarifying that this field is optional for patients requesting their own records.

## Retrieval Experience

Finding the form was straightforward. The Medical Records page is **2 clicks from the homepage** (Patients & Visitors → Medical Records), and the download links are clearly labeled in English and Spanish. However, legacy URLs from a CMS migration return empty files, meaning patients following older search engine links will get broken downloads. The current URLs use CMS hash paths but have descriptive filenames.

## Form Document Quality

The English form (form-1.pdf) has a text layer and 37 fillable field annotations, but the fields lack programmatic names, limiting screen reader and auto-fill functionality. The form is not truly digital-first — it appears to be a designed layout with graphical elements, subsequently exported to PDF with fields added as an afterthought. The Spanish version is materially worse: a flat image-only scan with no text layer, no searchable text, and no assistive technology support, creating a two-tier accessibility gap.

The layout uses a cramped, checkbox-heavy design with multiple columns and 16 embedded images across 2 pages. The language is legalistic but not impenetrable, though the psychiatric/substance abuse/HIV consent section is a particularly dense compound sentence that would confuse most patients. The Do/Do Not consent mechanism via initials is ambiguous in its construction.

## Barriers and Red Flags

- **Social Security Number required** — The form requests a full SSN with no indication it is optional, creating identity theft risk for a document submitted by fax or mail.
- **Purpose field without exemption** — Patients are asked to justify their request, which HIPAA does not require for individual access.
- **Witness signature line** on the Spanish form adds an unnecessary step.
- **Liability waiver bundled** into the authorization on the Spanish form, asking patients to release the hospital from "all legal liability and any harm" from disclosure.
- **No fee disclosure** — The form says nothing about costs for copies.
- **No expiration clause** on the English form (the Spanish version defaults to 180 days).
- **No patient rights statement** — No reference to the right to access, right to revoke, or right to electronic format.

## Bright Spots

- **Bilingual availability** is meaningful in the Rio Grande Valley, where ~90% of the population is Hispanic/Latino. Offering a Spanish form, despite its quality issues, is a genuine accommodation.
- **Granular record type selection** — The ~20-item checkbox list gives patients meaningful control over what they're requesting.
- **Easy website navigation** — The form is prominently placed and easy to find via the main site navigation.

## Overall Assessment

DHR Health provides the bare minimum for patient records access: a downloadable PDF authorization form that is easy to find but poorly designed for patient self-access. The form is a decade-old generic release authorization that does not acknowledge individual access rights, requires unnecessary personal information (SSN), and bundles concerning liability language. The Spanish version's image-only format creates an equity gap. The organization would benefit from a modernized, patient-centered access form — or ideally an online request portal — that separates individual access from third-party release and removes unnecessary barriers.
