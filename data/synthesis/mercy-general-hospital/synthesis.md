# Mercy General Hospital — Org-Level Synthesis

## Overview

Mercy General Hospital, a Dignity Health (CommonSpirit Health) facility in Sacramento, CA, provides patients with a reasonably accessible but structurally fragmented records request process. Three forms were found: a general third-party authorization (form-1), a medical group patient access form (form-2), and a hospital patient access form (form-3). The organization correctly separates patient self-access from third-party release — a meaningful positive — but splits patient access across two entities (hospital vs. medical group), requiring patients to navigate dual tracks.

## Access Pathway Differentiation

Mercy General Hospital does differentiate individual access from third-party release. Both form-2 and form-3 are titled "Patient's Request for Access to Protected Health Information" and explicitly state they will not result in disclosure to anyone other than the patient or their representative. The third-party authorization (form-1) is a clearly separate document. This is a genuine bright spot — many organizations funnel all requests through a single generic HIPAA authorization form.

However, the dual-track structure (hospital form vs. medical group form) creates confusion. A patient who received both inpatient and outpatient care at Mercy General would need to submit two different forms to two different departments. The website does not provide clear guidance on which form to use, and the hospital vs. medical group distinction is opaque to most patients.

## Retrieval Experience

Finding the forms was easy. All three were accessible via web search and linked from the Dignity Health Sacramento medical records page. One URL from search results returned a 404, suggesting some form reorganization over time, but current links worked. The forms' filenames are reasonably descriptive. Contact information (phone, fax, email) is provided on the medical group form, making it easy for patients to ask questions.

## Form Document Quality

The primary hospital patient access form (form-3) is a 2-page PDF with a text layer but **zero fillable fields** — it must be printed and completed by hand. This is a significant gap, especially since the companion third-party authorization (form-1) has 42 fillable fields, demonstrating the organization has the capability to produce interactive PDFs. The medical group form (form-2) also has zero fillable fields. Both patient access forms are print-and-fill documents that were designed for in-person clinical workflows and posted online as an afterthought.

Form-3's text layer suffers from severe font encoding corruption — extracted text contains garbled characters (e.g., "3DWLHQW ,GHQWL¿FDWLRQ" for "Patient Identification"), which likely renders the form inaccessible to screen readers.

The layout of both patient access forms is logical with lettered sections, clear record-type checkboxes, and multiple delivery format options (Paper, USB Drive, CD, Secure Email, Unsecured Email for form-3; mail, pickup, email, flash drive, fax for form-2). Language is mostly plain, though some legalistic phrasing appears in the sensitive records sections.

## Barriers and Concerns

The most significant red flags relate to physician gatekeeping of patient access:

- **Physician veto mechanism**: Form-3 includes a "NOTIFICATION TO DOCTOR" section that actively solicits physician objections to releasing records, without informing the patient of their right to appeal a denial.
- **Physician approval for HIV and psychiatric records**: Both patient access forms require physician/caregiver approval before releasing HIV test results or psychiatric records to the patient — a requirement that likely conflicts with HIPAA's right of access, which generally does not condition patient access on provider approval.
- **ID verification contradiction**: Form-2 demands "PICTURE I.D. MUST BE PRESENTED" while simultaneously offering mail, email, and fax submission — contradictory requirements.

Fee disclosure is vague on both forms ("fees may apply") without specifying amounts. Form-3 references an "attached price list" that is not included in the PDF. Neither form states a response timeline, and neither includes a patient rights section (unlike the third-party authorization form, which does).

## Strengths

- Clear separation of patient access from third-party release, with explicit cross-references between forms
- Multiple electronic delivery options including USB drive, CD, secure and unsecured email
- Inspect-only option on form-2 (no copying fees)
- Direct contact information (phone, fax, email) prominently displayed
- Multi-facility coverage across six Dignity Health Sacramento hospitals

## Overall Assessment

Mercy General Hospital demonstrates good intent in creating dedicated patient access forms separate from third-party authorizations, and offers genuinely flexible delivery options. However, the execution falls short: non-fillable PDFs, encoding accessibility issues, physician gatekeeping provisions, and a confusing dual-track structure undermine patient-centeredness. The organization invests more technical effort in the third-party release form (42 fillable fields) than in its patient access forms (zero fillable fields each), suggesting that patient self-access is not the priority workflow. A patient can ultimately navigate the process, but must contend with printing forms, unclear fee structures, and potentially inappropriate physician approval requirements.
