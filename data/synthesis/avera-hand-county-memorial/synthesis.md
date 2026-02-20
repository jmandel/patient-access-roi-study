# Avera Hand County Memorial Hospital — Org-Level Synthesis

## Overview

Avera Hand County Memorial Hospital is a critical access hospital in Miller, SD, part of the Avera Health regional nonprofit system. The facility does not publish its own ROI form; instead, patients use Avera Health's system-wide "Authorization – Release Of Medical Records Information" form (Form 8691-04). Only one form was found applicable to this facility.

## Pathway Assessment: Generic Third-Party Authorization

The sole available form is a **general-purpose HIPAA authorization** designed for disclosure of records between any two parties. It does not distinguish between a patient requesting their own records and a third party (attorney, insurer, other provider) requesting records with patient authorization. The form's structure — with separate "Provider (Who is releasing information?)" and "Disclose Information to (Where is information to be sent?)" sections — frames the transaction as a release between entities, not as a patient exercising individual access rights under HIPAA's Right of Access (45 CFR 164.524).

There is no dedicated patient access form, no patient portal–based request pathway, and no simplified workflow for self-access. A patient wanting their own records must complete the same authorization form as a third-party requester, filling in themselves as the recipient. The form does reference 45 CFR 164.524 in its authorization block, acknowledging the right to inspect or obtain copies, but this is buried in legal boilerplate rather than presented as a primary pathway.

## Retrieval Experience

Finding the form required **moderate effort**. The Hand County facility profile page on avera.org does not link directly to any medical records form. A patient would need to navigate to Avera Health's system-level "Request Medical Records" page or perform a web search. Additionally, Avera's website **blocks automated downloads** (curl/wget return "Access Denied"), requiring browser-based retrieval. The form URL is descriptively named, which is a minor positive.

## Form Document Quality

The form is a **single-page, digitally generated PDF** with a text layer — not a scan. However, it has **zero fillable fields**, making it a print-and-handwrite document. Patients must print, fill by hand, and submit via fax or mail. The layout uses labeled left-margin sections (Patient Identification, Provider, Disclose Information to, etc.) which provide reasonable navigation, but fitting all content onto one page results in a visually dense, cramped document. The language mixes moderately plain English with regulatory references (42 CFR Part 2, 45 CFR 164.524) and HIV/AIDS disclosure warnings — functional but not optimized for patient readability.

The form asks for approximately 15–18 discrete fields including patient demographics, provider information, recipient information, record type checkboxes, date ranges, format preferences, purpose, expiration date, and signature. This is a moderate field count for an authorization form, though several fields (provider address, recipient fax) add complexity that a patient self-access form would not need.

## Barriers and Red Flags

- **SSN collection**: The form requests the last 4 digits of the patient's Social Security Number, which is not required by HIPAA for access requests and may deter privacy-conscious patients.
- **Witness signature line**: A "Signature of Witness" field is present without clarification of whether it is required or optional. If interpreted as mandatory, this creates an unnecessary barrier.
- **No submission instructions on form**: The form does not print a mailing address or designate the fax number as a submission destination; the Avera fax number (605-322-8200) appears only in the context of "questions about disclosure."
- **Vague fee disclosure**: "Charges may apply" for entire record requests with no fee schedule or amounts provided.

## Bright Spots

- **Multiple electronic delivery options**: The form offers paper, fax, flash drive, CD-ROM, and email — with encryption by default and an explicit opt-out for unencrypted delivery. This is a notably comprehensive set of format choices.
- **45 CFR 164.524 citation**: Explicit reference to the HIPAA Right of Access provision signals regulatory awareness.
- **Single-page efficiency**: Covering all required elements on one page reduces printing burden.

## Overall Assessment

Avera Hand County Memorial Hospital provides a functional but **generic, third-party-oriented** pathway for records access. The form is adequate for its purpose as a system-wide authorization but does not serve patient self-access as a first-class use case. The lack of fillable fields, absence of submission instructions, SSN collection, and ambiguous witness requirement create friction. The strong delivery format options and 45 CFR 164.524 reference are bright spots, but the overall experience reflects an organization that has not optimized for patient-initiated access requests.
