# Myrtue Medical Center — Org-Level Synthesis

## Overview

Myrtue Medical Center is an independent, nonprofit critical access hospital in Harlan, Iowa. The organization posts its medical records forms on a dedicated "Authorization + Release Forms" page under the Patients + Visitors section of its website. Two English-language forms were retrieved, along with references to their Spanish translations:

- **form-1.pdf** — "Authorization to Release Protected Health Information" (the primary ROI form)
- **form-2.pdf** — "Consent for Disclosure" (permission for verbal communication with designated individuals)

Form-1 is the document a patient would use to request copies of their own medical records. Form-2 serves a different purpose — authorizing the facility to discuss a patient's care by phone with family members or caregivers — and is not relevant to the patient self-access use case.

## Access Pathway: Generic Authorization, No Dedicated Patient Access

Myrtue Medical Center does **not** differentiate between a patient requesting their own records and a third party seeking authorization for release. Form-1 is a general-purpose HIPAA authorization form with a bidirectional "From / To" layout. A patient requesting their own records must check Myrtue in the "From" column and write their own name and address in the "To" column's "Other" field. This works, but the form was clearly designed with third-party release as the primary use case — there is no mention of HIPAA's Right of Access (§ 164.524), no streamlined self-request pathway, and no language acknowledging that patients have a legal right to their records.

## Retrieval Experience

Finding the forms was easy. A site-scoped web search returned direct PDF links, and the organization's website provides a clearly labeled forms page reachable within two clicks from the homepage. No bot blocking, JavaScript rendering issues, or login requirements were encountered. The PDF filenames are descriptive and include language and revision date. The form header includes complete HIM department contact information (phone, fax, and email), giving patients clear channels for questions and submission.

## Form Document Quality

Form-1 is a single-page, digitally designed PDF — concise and logically organized with a clear top-to-bottom flow: patient demographics, from/to routing, record type selection, purpose, delivery method, legal disclosures, and signature. The language is mostly plain, with formal phrasing limited to the legal disclosures at the bottom. Record type options are granular, with appropriate handling of substance use disorder records under 42 CFR Part 2.

However, the form has **zero fillable fields** despite being designed in publishing software with 10 fonts and an embedded logo. All checkboxes and text blanks are static graphics requiring print-and-handwrite completion. This is a missed opportunity — the June 2025 revision could have added interactive form elements with minimal effort.

## Submission and Delivery Options

The form offers four delivery methods for receiving records: MyChart Portal, mail, encrypted email, and in-person pickup. The inclusion of MyChart Portal and encrypted email is a genuine bright spot for a small rural facility. For form submission, the header lists fax (712-755-2640) and email (medicalrecords@myrtuemedical.org), meaning a patient can submit the completed form electronically. This meets the baseline for adequate electronic access.

## Barriers and Compliance

No notarization or witness is required — only the patient or authorized representative signature. Fees are disclosed as subject to "reproduction fees in accordance with federal/state regulations," but no specific amounts are provided, leaving patients unable to estimate costs. The form includes required HIPAA authorization disclosures: right to revoke, no-conditioning statement, re-disclosure warning, and a one-year maximum expiration. However, because the form frames patient access as a § 164.508 authorization rather than a § 164.524 access request, patients may not understand that different fee rules and timelines apply to their own records.

## Notable Strengths

- **Spanish translations available** for both forms — commendable for a small rural Iowa facility
- **MyChart Portal and encrypted email** as delivery options signal a digital-forward approach
- **Substance use disorder carve-out** with 42 CFR Part 2 re-disclosure language reflects careful compliance
- **Recent revision** (June 2025) suggests active form maintenance
- **Single-page design** minimizes patient burden

## Overall Assessment

Myrtue Medical Center provides a findable, reasonably well-designed ROI form with some genuinely progressive features (portal delivery, encrypted email, bilingual availability). However, the lack of a dedicated patient access pathway, the absence of fillable fields, and the generic authorization framing place it squarely in the middle tier. A patient can successfully request their own records, but the process was not designed with them as the primary audience.
