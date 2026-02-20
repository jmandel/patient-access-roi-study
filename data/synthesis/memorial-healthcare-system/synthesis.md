# Memorial Healthcare System — Org-Level Synthesis

## Overview

Memorial Healthcare System (Hollywood, FL) is a government-owned regional hospital system serving South Florida. The system's medical records page provides a single general-purpose "Authorization for Release of Confidential Medical Records" form available in three languages (English, Spanish, Haitian Creole), plus a separate Request for Amendment form. There is no dedicated patient self-access form; all record requests flow through the same HIPAA authorization designed for third-party release.

## Pathways and Primary Form

The primary pathway is a downloadable PDF form (form-1.pdf in English) linked from the main website at Patients & Visitors > Medical Records. The form lists five delivery methods — Pick-up, Mail Out, e-Delivery, CD, and MyChart — prominently at the top, showing the org supports both traditional and electronic record delivery. MyChart is referenced as a delivery option, suggesting patients may also be able to request records through their patient portal. The medical records page states a two-business-day processing commitment, far faster than the HIPAA-allowed 30-day window.

## Access Pathway Differentiation

Memorial does **not** differentiate between patient self-access and third-party release. The form is titled "Authorization for Release of Confidential Medical Records" and is structured around disclosing records to a named recipient (Section 4: "This information is to be released to: Name / Address"). While an email field explicitly reads "I request my records be sent to me at this e-mail address" — clear patient-access language — the overall form design is a generic authorization. There is no mention of HIPAA's Right of Access (§ 164.524), and Section 5h requires patients to state a purpose for the disclosure, which is not required for patient self-access under HIPAA. A patient requesting their own records must navigate the same form and process as an attorney or insurer, figuring out which fields apply to their situation.

## Retrieval Experience

Finding the form was **easy**. The medical records page is linked from the main navigation, the PDF is directly downloadable without login or CAPTCHA, and all language versions are grouped on the same page. No bot blocking was encountered.

## Form Document Quality

The English form (form-1.pdf) is a 2-page digitally-authored PDF with a text layer but **zero fillable fields** — every checkbox, text field, and signature line must be completed by hand after printing. This is consistent across all three language versions. The file is bloated at 2.45 MB (vs. ~700 KB for the identically structured Spanish and Creole versions), with 23 embedded fonts and garbled hidden content from overlapping template layers — including staff business cards, physician rosters, and internal template labels like "JDCH Oncology BC (Multiple Doctors & Locations) FRONT." This hidden content inflates file size and produces garbled output for assistive technologies.

The form's content is organized in five numbered sections with logical flow: facility selection, patient identification, record type selection (~15 granular options), recipient information, and acknowledgment statements. The acknowledgments (Sections 5a–5h) are dense legal text — particularly the electronic delivery risk-shifting language in 5e, which requires patients to "knowingly and voluntarily assume this risk and all consequences, losses and damages" for electronic records. This language could discourage patients from exercising their right to receive records electronically.

## Barriers and Bright Spots

**No notarization or witness is required.** Fees are not disclosed on the form itself; the website mentions "copy charges as authorized by Florida law" with an exception for records sent to treating physicians. The six-month authorization expiration is standard. No in-person-only submission restriction exists — forms can be mailed. However, there is no explicit electronic submission pathway for the form itself (no fax, no email-based submission explicitly stated, though MyChart may serve this role).

**Bright spots** are notable. The trilingual availability (English, Spanish, Haitian Creole) is exemplary and uncommon — most organizations offer at most English and Spanish. The five delivery methods, including e-Delivery and MyChart, are forward-thinking. The two-business-day processing commitment is remarkably fast. Granular record type selection gives patients meaningful control.

**Red flags** include the electronic delivery risk-shifting language (Section 5e), the purpose field that may create an impression that patients need to justify their access, and the bloated English PDF with garbled hidden content that affects accessibility tools.

## Overall Assessment

Memorial Healthcare System demonstrates genuine patient-centeredness in several areas — multilingual access, fast processing, and electronic delivery options — but is held back by a non-fillable, generic authorization form that doesn't distinguish patient self-access from third-party release. The form's paper-based workflow and dense legal language create unnecessary friction. The org earns a solid **B** grade overall: excellent findability and some compliance strengths offset by a fundamentally paper-based process and a form that wasn't designed with patients as the primary audience.
