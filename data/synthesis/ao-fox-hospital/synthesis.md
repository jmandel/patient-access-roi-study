# A.O. Fox Hospital — Org-Level Synthesis

## Overview

A.O. Fox Hospital is a community hospital in Oneonta, NY, part of the Bassett Healthcare Network. It does not maintain its own medical records request form; instead, patients are directed to a single, network-wide "Authorization for Medical Record Release" (form H-6653) shared across all five Bassett facilities. This is the sole form available and serves as the primary pathway for any patient — whether requesting their own records or authorizing release to a third party.

## Access Pathway

The form is a **generic HIPAA authorization** designed for all types of medical record release, not a dedicated patient access request form. However, it does meaningfully accommodate patient self-access: Section 2 includes a "Self, address listed above" checkbox, Section 7 offers "Patient Request" as a purpose option, and Section 4 defaults to electronic delivery via the MyBassett Portal when no format is specified. These features ensure a patient can navigate the form for self-access without excessive confusion, but the form's framing as an "Authorization for Medical Record Release" — rooted in 45 CFR § 164.508 authorization concepts rather than § 164.524 Right of Access — means patients are signing an authorization they don't technically need, and must navigate sections (verbal communication authorization, expiration dates, redisclosure warnings) that are largely irrelevant to self-access.

The organization does **not** differentiate between patient self-access and third-party release at the pathway level. There is no separate patient access form, no distinct web page for individual record requests, and no portal-based request wizard. The single PDF form serves all purposes.

## Retrieval Experience

Finding the form was **easy**, though not via A.O. Fox Hospital directly. A search for Fox-specific forms returned nothing; searching for the parent system — Bassett Healthcare Network — immediately surfaced a direct PDF link on bassett.org. A patient who knows Fox is part of Bassett would locate this quickly. One who searches only for "A.O. Fox Hospital medical records" might need an extra step. No bot blocking, broken links, or access barriers were encountered.

## Form Document Quality

The form is a **well-constructed, digital-first fillable PDF** — one of the strongest technical implementations in the study. Key characteristics:

- **Fillable fields**: 83 AcroForm interactive fields across just 2 pages, covering every checkbox, text input, and signature area. This is unusually thorough.
- **Layout**: 10 clearly numbered sections with bold headings provide logical flow and easy scanning.
- **Delivery options**: Seven methods offered (MyBassett Portal, USB, CD, Fax, US Mail, in-person pickup at two locations, Email with encrypted/unencrypted options). The portal-first default is a progressive design choice.
- **Record type selection**: 13 categories plus "Entire Medical Record" and an open-ended "Other" field, with date range controls.
- **Sensitive records**: An opt-out model (Section 6) lets patients exclude categories they don't want disclosed, rather than requiring explicit opt-in for each — a patient-protective default.

**Weaknesses** are minor but notable: two typos ("Frist" for "First", "DISCLOUSRE" for "DISCLOSURE"), internal Windows file paths exposed in the revision line (`d:\forms\hosp\.ofm`), and dense legalese in the rights section — particularly the HIV/AIDS redisclosure paragraph, which is a single four-line sentence. The form does not mention fees or response times.

## Barriers

No significant barriers exist. The form requires only a patient signature — no notarization, no witness, no in-person submission requirement. The no-conditioning statement is clearly articulated. The one-year date range default ("If left blank, information from the past (1) year will be provided") could inadvertently limit scope for patients seeking older records, but this is a scope default rather than a true barrier.

## Bright Spots

- **Portal-first default delivery** is rare and genuinely patient-friendly.
- **83 fillable fields** on a 2-page form represents exceptional digital-first design.
- **Seven delivery format options** including encrypted email with explicit risk acknowledgment.
- **Opt-out model for sensitive records** defaults toward completeness.
- **No-conditioning language** explicitly protects patient rights.

## Overall Assessment

A.O. Fox Hospital, through its parent Bassett Healthcare Network, provides a technically excellent form that is easy to find and free of major barriers. The form's primary limitation is structural: it funnels all patients — including those exercising their individual right of access — through a generic authorization framework designed for third-party release. While the form accommodates patient self-access well, it does not center it. A dedicated patient access pathway or a clearly separated section for self-access requests would elevate this from a good form to an exemplary one. Grade: **B**.
