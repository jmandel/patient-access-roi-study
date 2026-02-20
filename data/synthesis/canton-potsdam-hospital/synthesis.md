# Canton-Potsdam Hospital — Organization Synthesis

## Overview

Canton-Potsdam Hospital (CPH) is a community hospital in Potsdam, NY, operated as part of St. Lawrence Health System (SLH), which was acquired by Rochester Regional Health (RRH). Three documents were retrieved — all from the Wayback Machine, as no forms remain on any live website. The most relevant form for patient self-access is form-2.pdf, a blank New York State OCA Official Form No. 960 ("Authorization for Release of Health Information Pursuant to HIPAA"). The other two documents are a COVID-specific pre-filled version of the same form (form-1.pdf) and a Notice of Privacy Practices (form-3.pdf).

## Access Pathway

Canton-Potsdam Hospital does **not** offer a differentiated pathway for patient self-access. The only authorization form the organization ever published online was the generic NY State OCA-960, which is designed for third-party release of information — not for patients exercising their HIPAA Right of Access under § 164.524. A patient requesting their own records would use the same form as someone authorizing release to an attorney or insurer, needing to awkwardly list themselves as the recipient. There is no dedicated patient access request form, no online portal, and no web-based submission tool.

Critically, the parent system's Swellbox/Datavant online records request tool **explicitly excludes** St. Lawrence Health facilities, stating: "St. Lawrence Health is not currently available through this application, for information on requesting these records call (315) 769-4386." This leaves phone as the only visible pathway for patients today.

## Retrieval Experience

Finding any form for this organization was extremely difficult. The original SLH website (stlawrencehealthsystem.org) now redirects to rochesterregional.org, where CPH-specific content has not been migrated. Multiple web searches returned no downloadable forms. The only successful strategy was the Wayback Machine CDX API, which identified archived PDFs from the defunct SLH domain. A typical patient would have no realistic way to find these forms.

## Form Document Quality

The best available form (form-2.pdf, blank OCA-960) is a digitally produced PDF — not a scan — but has **zero fillable fields**. Its text layer is severely garbled due to font encoding issues, rendering the document inaccessible to screen readers, search, or copy-paste. Despite being created digitally (via PScript5.dll/Acrobat Distiller), no interactive fields were added, requiring patients to print and handwrite responses.

The form is 2 pages: page 1 is the authorization itself with 13 numbered items; page 2 provides instructions. The structure is logical and reasonably organized, covering patient identification, record scope, recipients, purpose, expiration, and signature. However, the language is formal and legalistic, and the form is not pre-populated with any CPH or SLH contact information — patients must know and fill in the correct provider name and HIM department address themselves.

## Barriers and Compliance

No notarization or witness signature is required. The form includes appropriate compliance elements: explicit voluntariness statement, non-conditioning language, right to revoke in writing, and separate initialing for sensitive categories (HIV, substance abuse, mental health) per NY State law. However, the form header includes a Social Security Number field, which creates unnecessary identity theft risk and is not required by HIPAA. No fees are mentioned on the authorization form itself, though the NPP (form-3) does include HIPAA-compliant fee language limiting electronic copy costs to direct labor.

The form does not specify submission methods, delivery format options, or response timelines. No electronic delivery options are mentioned.

## Notable Strengths

- Uses the standardized NY State OCA-960, ensuring baseline legal compliance
- NPP clearly articulates electronic access rights and EHR-based record availability
- Patient-controlled authorization expiration (by date or event)
- Appropriate sensitive-information opt-in with separate initialing requirements

## Notable Weaknesses

- No ROI form available on any live website; patients must call to initiate requests
- Parent system's online records tool explicitly excludes this facility
- No differentiation between patient self-access and third-party authorization
- Form has zero fillable fields and a garbled, inaccessible text layer
- SSN field on authorization form creates unnecessary risk
- Organization appears stuck in a transitional state between SLH and RRH infrastructure

## Overall Assessment

Canton-Potsdam Hospital presents one of the weakest patient access experiences in this study. The combination of unfindable forms, a phone-only current pathway, no dedicated patient access process, and technically deficient documents creates substantial barriers for patients seeking their own records. The organizational transition from St. Lawrence Health to Rochester Regional Health has left patients in a gap — excluded from the parent system's digital tools but with no local alternative. A patient today would need to call, navigate an uncertain process, and likely complete a paper form designed for third-party release rather than individual access.
