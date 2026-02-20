# Good Samaritan Medical Center — Org-Level Synthesis

## Overview

Good Samaritan Medical Center is a for-profit community hospital in West Palm Beach, FL, operated under the Palm Beach Health Network (PBHN), itself part of Tenet Healthcare. The facility offers two downloadable PDF authorization forms for records release — an older facility-specific version (form-1, dated 2014) and a newer network-wide version (form-2, dated 2020). Records requests are processed through Datavant, a third-party ROI vendor, with email submission available. The parent system's medical records page also offers the form in Spanish and Haitian Creole.

## Access Pathway: Generic Authorization, Not Patient-Centric

Good Samaritan does **not** offer a dedicated patient access pathway. Both forms are titled "Authorization to Use and Disclose Protected Health Information" — standard third-party disclosure authorization forms. A patient requesting their own records must name themselves as the "RECIPIENT" (the field asks for "person(s) to whom [the facility] may disclose my health information") and check "Personal Use" under the PURPOSE section. This is functional but unintuitive; the form was clearly designed for disclosures to insurers, attorneys, and other third parties, not for patients exercising their HIPAA Right of Access under 45 CFR § 164.524. Neither form references the right of access, offers format options for records delivery, or distinguishes self-access from third-party release in any meaningful way.

## Retrieval Experience

Finding the forms was straightforward. A web search immediately surfaced a direct link to form-1 on the hospital's website, and the parent PBHN medical records page linked to form-2 along with Spanish and Haitian Creole versions. However, Cloudflare bot protection blocked programmatic download, requiring browser-based workarounds. For a typical patient using a browser, this would not be an issue. One source of confusion: both the older facility form and the newer network form are published simultaneously with no guidance on which to use.

## Form Document Quality

The best available form (form-2, the 2020 network version) is a 2-page print-and-fill PDF with **zero fillable fields**. All blanks are underscored lines requiring handwriting. The form follows a logical structure — facility selection, demographics, record type checkboxes (20 categories), recipient, term, purpose, super-confidential categories — but is visually dense with small fonts. Notably, form-2 exposes raw mail-merge placeholders in the sidebar (`«PatientNumber»`, `«PatientName»`, `«BirthDate»`, etc.) that are meaningless to patients and appear unprofessional. The form also references a Privacy Office address "listed below" that does not actually appear anywhere on the document — a broken internal reference that prevents patients from exercising their right to revoke authorization.

The language is moderately legalistic. The legal paragraphs on redisclosure, revocation, and treatment conditioning are standard healthcare boilerplate but lack plain-language explanation. The form collects Social Security Number, which is unnecessary for HIPAA identity verification and creates data security risk on a form transmitted via fax or mail.

## Submission Methods

Patients can submit via fax (561-650-6467, listed on form-1), email to Datavant (SM-Tenetgoodsamaritan@Datavant.com, per retrieval notes), mail, or in-person pickup. The availability of fax and email means patients are not forced to physically visit the facility, which meets the baseline for adequate electronic submission.

## Barriers and Bright Spots

**Barriers:** SSN collection is unnecessary and potentially deterrent. No fees are disclosed — patients have no visibility into costs before submitting. The form's lack of fillable fields means the entire completion process is paper-based. Form-2 is missing Privacy Office contact information, and its omission of the remuneration disclosure present in form-1 raises compliance questions given Datavant's involvement.

**Bright spots:** Multilingual availability (English, Spanish, Haitian Creole) is a genuine strength for the Palm Beach community. The 20+ record-type checkboxes give patients granular control over what is disclosed. Flexible authorization term options (specific date, until fulfilled, until event, until withdrawn) are well-designed. The super-confidential information section on page 2 properly handles Florida state law and 42 CFR Part 2 requirements for sensitive health information categories.

## Overall Assessment

Good Samaritan Medical Center provides a functional but patient-unfriendly records request process. The organization funnels all requestors — patients and third parties alike — through a generic authorization form not designed for individual access. The forms lack digital fillability, contain confusing internal system artifacts, and collect unnecessary personal information. While multilingual availability and granular record selection are genuine positives, the overall experience reflects a process designed around institutional workflow rather than patient needs. Grade: **C**.
