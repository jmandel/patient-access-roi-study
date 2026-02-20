# Abbeville Area Medical Center — Org-Level Synthesis

## Overview

Abbeville Area Medical Center (AAMC) is an independent, nonprofit critical access hospital in Abbeville, South Carolina. Two documents were found on its website: an authorization form for releasing protected health information (form-1.pdf) and a HIPAA Notice of Privacy Practices brochure (form-2.pdf). Only the authorization form is relevant for a patient requesting their own records.

## Access Pathway: No Patient Self-Access Distinction

AAMC provides a single, generic "Authorization to Release Protected Health Information" form (HIM 1022) for all record requests. The form is clearly designed for third-party release — it asks the patient to identify a "Name/Facility" recipient and authorize disclosure "to the following individual or group." A patient requesting their own records must awkwardly list themselves as both the patient and the recipient. There is no dedicated patient access form, no separate pathway or section for individual access under HIPAA § 164.524, and no mention of the right to access one's own records anywhere on the authorization form.

The companion HIPAA brochure (form-2.pdf) does articulate patient rights well, including the right to electronic copies and a 30-day response timeline, but this informational document is entirely disconnected from the authorization workflow. A patient would need to read two separate documents and synthesize the information themselves.

## Retrieval Experience

Finding the form was straightforward. The Medical Records page is accessible within 2–3 clicks from the homepage via Patients & Visitors navigation. The PDF is directly linked and downloads without login, CAPTCHA, or bot blocking. The WordPress site is simple and functional. This is one of the easier retrieval experiences in the study.

## Form Document Quality

The authorization form is a single page — admirably brief compared to multi-page forms at other organizations. It follows a logical numbered structure: authorization/recipient identification, record type selection (16 specific checkboxes), dates of service, purpose, and signature block. However, the form has significant technical limitations:

- **Not fillable**: Zero interactive form fields. All checkboxes are static Unicode characters, and all blanks are underscored lines. A patient must print the PDF and fill it in by hand.
- **No submission instructions**: The form provides no address, fax number, email, or department contact. A patient downloading this from the website would have no idea where to send the completed form. The fax number and mailing address must be found separately (the NPP brochure provides the Privacy Officer's P.O. Box and phone number).
- **No "All Records" option**: The 16 granular checkboxes are useful for targeted requests but there is no "Complete Medical Record" option for patients seeking comprehensive access.
- **Ambiguous fields**: Item 2 ("Date records were printed and/or CD was requested") appears to be an internal staff field but is numbered as if patients should complete it.

The language is a mix of plain English at the top and denser legal boilerplate at the bottom. Required fields are marked with asterisks, but the legend ("* Must Have Information") appears only at the very bottom of the page.

## Barriers

- **Witness requirement**: The form requires two witness signatures (marked with asterisks as required), which goes beyond HIPAA requirements for patient self-access and creates a logistical barrier.
- **Bundled sensitive-information consent**: The form automatically includes authorization to release psychiatric, substance abuse, HIV, and STD records with no opt-out mechanism. Patients who want general medical records but wish to exclude sensitive categories cannot do so.
- **90-day expiration**: The authorization expires 90 days from signing, which could force resubmission if processing is delayed.
- **No fee information**: The form discloses nothing about costs. The NPP brochure vaguely mentions "there will be a charge" without amounts.

## Bright Spots

- **Single-page brevity**: Everything fits on one page, reducing patient burden.
- **Fax acceptance**: The form explicitly states "A faxed copy of this release shall be deemed as having the same effect as the original," enabling remote submission.
- **Granular record-type selection**: The 16 checkboxes give patients meaningful control over what is released.
- **NPP quality**: The privacy brochure includes clear language about the right to electronic copies and a 30-day timeline — strong for a small critical access hospital.

## Overall Assessment

AAMC provides a minimally adequate but dated approach to patient record requests. The form is easy to find and mercifully short, but it offers no digital-first workflow, no patient-access-specific pathway, and no submission instructions. A patient must print the form, handwrite their information, find a fax number or mailing address from a separate document, and obtain two witness signatures — all to exercise a fundamental HIPAA right. The organization earns credit for accessibility of retrieval and brevity of form, but loses ground on technical accessibility, patient-centeredness, and unnecessary barriers. Grade: **C**.
