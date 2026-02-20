# East Georgia Healthcare Center — Org-Level Synthesis

## Overview

East Georgia Healthcare Center (EGHC) is an independent nonprofit FQHC in Swainsboro, Georgia. Three documents were found on its website: an English-language Medical Records Release form (form-1), a Spanish-language equivalent (form-2), and a Notice of Privacy Practices (form-3). The critical finding is that **none of these documents serve a patient requesting their own records from EGHC**. Both release forms are designed exclusively for incoming records — authorizing other providers to send records *to* EGHC — with EGHC's own address hardcoded as the destination.

## Access Pathway: The Wrong Form Problem

EGHC exemplifies the "wrong form" problem identified in this study. The Medical Records Release form's key language reads: *"I hereby request copies of all records pertaining to my health history and medical care released to: EAST GEORGIA HEALTHCARE CENTER, 215 NORTH COLEMAN STREET, SWAINSBORO, GA 30401."* The "Requesting medical records from" field is where the patient fills in their *previous* provider. A patient trying to exercise their HIPAA Right of Access (45 CFR § 164.524) to obtain records *from* EGHC would find no applicable form anywhere on the website.

The organization does not differentiate between patient self-access and third-party release — it simply does not address patient self-access at all. The Notice of Privacy Practices mentions the right to "inspect and copy medical information" but provides no actionable instructions, no form reference, and no guidance on how to actually submit a request. A patient would likely need to call the Privacy Officer or visit in person, with no written process to guide them.

## Retrieval Experience

The forms page at https://eghc.org/forms/ is findable within 2–3 clicks from the homepage via site navigation. However, the forms are hosted on RightSignature, a third-party e-signature platform, which requires entering a name and email before viewing the form content. Old direct PDF links (from 2019) now return 404 errors but still appear in search engine results, creating confusing dead ends. The retrieval required moderate effort: the forms page was located without difficulty, but extracting the actual form content from RightSignature required technical workarounds (extracting the S3-hosted PNG image and converting to PDF).

## Form Document Quality

The primary form (form-1) is a single-page document with clean layout and clear visual hierarchy: letterhead at top, patient identification fields, destination address, source provider field, a granular 17-option record type checklist, release duration options, legal disclaimer, and signature block. Via the RightSignature platform, the form is interactive with fillable fields and e-signature capability — a meaningful step toward digital-first form handling. However, the standalone captured PDF is image-only with no text layer, no fillable fields, and is completely inaccessible to screen readers.

The language is moderately accessible — the legal disclaimer covers standard HIPAA authorization elements (revocation rights, re-disclosure risk, non-conditioning) without being impenetrably dense. The form collects approximately 10 fields, which is reasonable in scope. However, it requests the patient's Social Security Number, which creates unnecessary data exposure risk given that name, date of birth, and address are already collected.

## Barriers and Concerns

- **No patient access form**: The most significant barrier — a patient has no written pathway to request their own records.
- **SSN collection**: Requesting Social Security Numbers on a form designed for fax/mail transmission is an unnecessary privacy risk.
- **Missing authorization expiration**: The form lacks an explicit expiration date, a required element under 45 CFR § 164.508(c)(1)(v).
- **No fee disclosure**: No mention of fees for record copies.
- **No submission instructions**: The form text gives no guidance on how to return the completed authorization.
- **RightSignature viewing barrier**: Patients must provide name and email before even viewing the form content.

## Notable Strengths

- **Bilingual availability**: Both English and Spanish versions of the release form are offered — appropriate for an FQHC serving a diverse community in south-central Georgia.
- **RightSignature e-signature**: Electronic completion and submission capability is a genuine digital-first investment, even if applied to the wrong form.
- **Granular record type selection**: The 17-category checklist with an "Other" option gives patients meaningful control over what information is released.
- **Title X confidentiality**: The NPP includes thoughtful language about Title X Family Planning Program confidentiality.

## Overall Assessment

EGHC has invested in some positive infrastructure — bilingual forms, an e-signature platform, and a navigable forms page — but these investments are undermined by a fundamental gap: the organization provides no form or pathway for patients to request their own records. The only ROI-related forms are designed for incoming records from other providers. A patient exercising their HIPAA Right of Access would find their rights acknowledged in the NPP but no actionable way to exercise them online. This represents a significant patient-centeredness failure that overshadows the form's otherwise reasonable document quality.
