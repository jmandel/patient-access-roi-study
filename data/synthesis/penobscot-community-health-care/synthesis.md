# Penobscot Community Health Care — Org-Level Synthesis

## Overview

Penobscot Community Health Care (PCHC) is an independent, nonprofit FQHC based in Bangor, Maine. Two PDF forms were found, but they are identical documents hosted at different WordPress upload paths (form-1.pdf and form-2.pdf share the same text, revision date, and form code MRC001). The organization's primary records request pathway is a third-party Datavant/Swellbox online portal, linked from the Health Information Management page. The PDF authorization form exists on the server but is not linked from any patient-facing page.

## Access Pathway: Generic Authorization, No Dedicated Patient Access

PCHC does **not** differentiate between a patient requesting their own records and a third-party authorization. The sole PDF form is titled "Authorization to Disclose Health Information" and covers both disclosing records TO a third party and obtaining records FROM a third party. A patient requesting their own records must fill in the same form designed for attorneys, insurers, and other third parties — including naming themselves as the recipient and navigating redisclosure warnings that don't apply to self-access. The purpose checkbox "At my request" is available but does not clearly distinguish individual access rights from authorized third-party release.

The Datavant/Swellbox portal (https://www.swellbox.com/pchc-wizard.html) is the pathway the organization actively directs patients toward from its website. While this provides a digital alternative, the PDF form — the only org-created document available for evaluation — remains a generic HIPAA authorization with no patient access specialization.

## Retrieval Experience

Finding the PDF form required a targeted Google search (`filetype:pdf` query); it was **not discoverable** through normal website navigation. The HIM page (https://pchc.com/healthinformation/) links to the Datavant portal and a Privacy Practices Booklet, but not the authorization form PDF. Two identical copies at different URLs (`/2024/03/` and `/2021/11/` paths) create version-control confusion. No bot blocking or browser fallback was needed. Difficulty: moderate — the portal is findable from the website, but the PDF form is effectively hidden.

## Form Document Quality

The form is a **flat, non-fillable PDF** (zero interactive fields) across 2 pages. Patients must print it, handwrite all entries, and submit physically. Despite the non-fillable format, the document itself is well-structured with clear, labeled sections progressing logically: patient identification → authorization direction → recipient details → delivery method → record types → sensitive information → purpose → duration → rights acknowledgments → signature. Approximately 18 fields require completion for a basic self-access request.

The language is a mix of plain English and legal terminology. Core instructions ("To DISCLOSE my health information below TO:") are clear with helpful capitalization for emphasis, but several sections use dense legal prose. The "continuing communications" clause and opt-out-by-striking mechanisms are particularly confusing — patients must physically strike out text to limit scope, and failure to do so defaults to the broadest possible authorization, including ongoing disclosure of future encounters.

Record type granularity is good, offering seven specific categories plus an open-ended option, with date-range filtering. Four delivery methods are available: mail (defaulting to CD), fax, email via secure portal, and verbal communication.

## Barriers and Compliance

No fees are disclosed — neither excessive charges nor explicit statements of no-fee patient access. No notarization or witness is required. The form does not specify submission instructions, though PCHC's fax number (207-990-1248), mailing address, and email (PCHCMR@pchc.com) are provided in the header, implying fax and mail submission are available.

Compliance elements are generally sound: oral revocation is permitted, the non-conditioning statement is present, 42 CFR Part 2 redisclosure notice is properly included, and sensitive information categories require affirmative opt-in. However, the form does not cite HIPAA § 164.524 or reference the patient's right of access. The office-use section includes an unusual and commendable accountability checkbox requiring staff to flag partial or incomplete disclosures.

## Bright Spots

- **Secure email delivery** via PCHC's portal (records sent as PDFs accessible through a secure messaging system)
- **Oral revocation** permitted — more accessible than written-only requirements
- **Partial disclosure transparency** — internal checkbox requiring notification when records provided are incomplete
- **Datavant/Swellbox portal** provides an alternative digital pathway beyond the paper form

## Red Flags

- **PDF form is unlinkable from the website** — HIM page directs exclusively to Datavant, making the org's own form effectively hidden
- **Opt-out-by-striking defaults** to broadest possible authorization for continuing communications and third-party-received records
- **CD as default mail delivery** medium — outdated and likely unusable for many patients

## Overall Assessment

PCHC provides an adequate but unexceptional records request experience. The organization deserves credit for offering a Datavant portal as a digital pathway and for several thoughtful compliance provisions. However, the lack of a dedicated patient access form, the non-fillable PDF, the hidden form URL, and the confusing opt-out defaults limit patient-centeredness. A patient navigating PCHC's website would be funneled to the Datavant portal — a workable option — but would struggle to find or use the organization's own authorization form independently.
