# Columbia Memorial Hospital — Org-Level Synthesis

## Overview

Columbia Memorial Hospital (CMH) is an independent, nonprofit critical access hospital in Astoria, Oregon. Two ROI forms were found: an English-language "Release of Information" form (HIPAA Form 3B, revised February 2025) and a Spanish translation (HIPAA Form 3Bsp, revised August 2017). Both are general-purpose HIPAA authorization forms — the hospital does not offer a dedicated patient access request form distinct from third-party release authorization.

## Access Pathway

CMH funnels all record requests — whether from patients seeking their own records or third parties — through a single generic ROI authorization form. The form's "Purpose" checkboxes (Continuing Care, Insurance, Legal, Other) do not include "Personal use" or "Patient access," forcing a patient requesting their own records to select "Other" and write in a reason. The bidirectional design (Section C has both "Send Records To" and "Request Records From" fields) further signals that this form was designed for inter-facility transfers, not individual access under HIPAA § 164.524.

The hospital does offer a patient portal (myCMH) for partial record access, but the primary written pathway for requesting complete records is this generic ROI form. There is no evidence of a dedicated patient access request process that distinguishes individual rights from third-party authorization.

## Retrieval Experience

Finding the form was straightforward. The Medical Records page at `columbiamemorial.org/patients-and-visitors/medical-records/` links directly to both the English and Spanish PDFs. No bot blocking, browser fallback, or creative search strategies were needed — basic website navigation sufficed. The page also prominently states that "Records are free to patients who request their records," which is a notable positive signal adjacent to the form links.

## Form Document Quality

The English form (form-1.pdf) is a cleanly structured 2-page PDF with five labeled sections (A through E). Page 1 is the patient-facing authorization; page 2 is for hospital administrative use only. The layout is logical and navigable, with clear section headers and a well-organized record-type checklist offering 11 specific categories (Emergency Room, Lab Reports, Imaging, etc.) each with a date-of-service field.

However, the form has **zero fillable fields** despite being digitally authored (not a scan). All data entry relies on printed blank lines, requiring patients to print the form and complete it by hand. This is a significant missed opportunity — the PDF was clearly created in a layout tool capable of adding interactive fields.

The language is generally plain and accessible. The opening purpose statement ("This form is an authorization to release protected health information") is clear and direct. The signature block language is standard without excessive legalese. There are no instructions or guidance text beyond the section labels, and no statement of patient rights beyond the required notice about entitlement to a copy of the signed authorization.

Submission methods are not explicitly stated on the form itself, though the header lists both a phone number and fax number. The page 2 hospital-use section tracks delivery via "Pt. Pick-Up," "Mailed," "Faxed," and "Electronic" — but these are staff-facing fields, not patient-facing options. A patient filling out the form independently would have to infer that faxing is acceptable.

## Barriers and Compliance

CMH demonstrates several positive practices: no notarization or witness requirement, no in-person mandate, and an explicit commitment to free records for patient access (stated on the website, though not on the form itself). Processing time is stated as 72–96 business hours.

The primary compliance concern is the absence of explicit expiration date/event language and revocation instructions in the form text — elements required by HIPAA § 164.508(c)(1)(v) for valid authorizations. Additionally, the form includes no reference to patient rights under HIPAA, no information about fees on the form itself, and no delivery format options for the patient.

## Notable Strengths and Weaknesses

**Bright spots:** Bilingual form availability (English and Spanish) is uncommon, especially for a small rural critical access hospital, and demonstrates attention to community language needs. The explicit "records are free" statement is exemplary transparency. The well-organized section structure makes the form more navigable than many single-block authorization forms.

**Red flags:** The Spanish form is nearly 8 years older than the English version (2017 vs. 2025), creating a risk that Spanish-speaking patients encounter outdated language or missing sections. Page 2 of the Spanish form is entirely untranslated. The form's missing expiration/revocation language may render signed authorizations technically non-compliant.

## Overall Assessment

Columbia Memorial Hospital provides a reasonably accessible, well-organized ROI process with commendable bilingual availability and fee transparency. However, the lack of a dedicated patient access pathway, the absence of fillable fields, and gaps in compliance language prevent it from achieving the highest marks. A patient can get their records here without unreasonable barriers, but the process was not designed with the individual access use case as a priority.
