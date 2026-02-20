# Cottage Hospital — Org-Level Synthesis

## Overview

Cottage Hospital is an independent, nonprofit critical access hospital in Woodsville, NH, affiliated with the Rowe Health Center outpatient clinic. Two documents were retrieved: a standalone one-page "Authorization for Disclosure of Medical Information" (form-1) and a 12-page "RHC New Patient Packet" (form-2) containing a variant authorization form on page 2. Neither document is a dedicated patient access request form; both are generic HIPAA authorization forms designed primarily for third-party release of information.

## Retrieval Experience

Finding these forms was exceptionally difficult. The hospital's website (cottagehospital.org) is protected by Cloudflare Turnstile, which blocked all automated access — curl, browser with DevTools, and even Google's cache were inaccessible. The forms were ultimately recovered only through the Wayback Machine using archived snapshots from July 2024. Notably, the current versions of both documents (updated in 2024) were not captured by the Wayback Machine, meaning only older versions could be evaluated. A dedicated HIM department page exists on the site but could not be verified due to the access barrier. The form was linked from a "Becoming a Rowe Health Center Patient" page — framing the authorization as part of new-patient onboarding rather than a standalone records-request process.

## Access Pathway Differentiation

Cottage Hospital does not offer a dedicated patient access form. Both retrieved documents are generic HIPAA authorization forms. Form-1's operative language — "authorize Cottage Hospital to use or disclose my protected health information to [other entity]" — is oriented entirely toward third-party release, with no clear mechanism for a patient to request records for themselves.

Form-2's page-2 authorization makes a meaningful improvement: it distinguishes "Self or Representative" from "Other Provider or Facility" as separate recipient categories, with different scope rules for each. Copies to patients default to "Complete copy of medical record, excluding psychotherapy notes," while third-party copies offer more granular selection. This structural distinction is a genuine bright spot, showing intentional thought about different use cases. However, this better version is buried on page 2 of a 12-page new patient packet, which a patient searching for a records release form would have no reason to download based on the filename alone.

## Form Document Quality

Neither form has interactive/fillable fields despite both being digitally created in Microsoft Word. Patients must print and complete them by hand. Form-1 is a single page with approximately 12 fields — a manageable scope. The layout follows a logical flow (identification → recipient → record types → legal disclosures → signature), but lacks section headers or visual separators. Legal disclosures run as a continuous block of dense text with sentences exceeding 50 words. The form uses 5 fonts for a single page, and its footer reads "PAGE 14 OF 28" — a vestige of the larger policy document it was extracted from, which is confusing.

Both forms include confusing remuneration fields ("direct or indirect remuneration in the form of [describe]") that are required by HIPAA only for sale-of-PHI authorizations but will mystify patients making routine requests.

## Barriers

The most significant barrier is the complete absence of submission instructions on either form. No mailing address (beyond the hospital header), no fax number, no email, no mention of the HIM department as a submission point. A patient who completes the form has no guidance on how to deliver it. The witness signature line, while not explicitly marked as required, may lead patients to believe a witness is needed — a barrier HIPAA does not impose. No fees are mentioned, and no response time is stated.

## Notable Strengths

The non-conditioning statement ("I MAY REFUSE TO SIGN THIS AUTHORIZATION FORM") is prominently displayed in caps. Psychotherapy notes are properly segregated per 45 CFR § 164.508(b)(3)(ii). The 42 CFR Part 2 re-disclosure warning for substance abuse records is correctly included. Form-2's welcome letter is genuinely warm and accessible, and its billing section proactively discloses a 44% community health discount for self-pay patients.

## Red Flags

Form-2's General Consent for Treatment (Section 11) contains a blanket authorization allowing Cottage Hospital to disclose records "at its discretion" to any party liable for hospital charges, explicitly including substance abuse, psychiatric, and HIV records. This extremely broad authorization is bundled into routine intake paperwork, raising informed-consent concerns.

## Overall Assessment

Cottage Hospital provides a minimally functional records release process that requires significant patient initiative to navigate. The Cloudflare-protected website, non-fillable forms, absence of submission instructions, and generic third-party framing create a cumulative experience that falls short of patient-centered design. The partial self-access accommodation in form-2 and proper HIPAA compliance language prevent the assessment from being worse, but this is a facility where requesting your own records would require calling the hospital for basic instructions.
