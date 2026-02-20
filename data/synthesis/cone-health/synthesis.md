# Cone Health — Organizational Synthesis

## Overview

Cone Health is a nonprofit regional health system based in Greensboro, NC, operating multiple hospitals and the Cone Health Medical Group (CHMG) physician practices. Four documents were found related to medical records requests: a primary English HIPAA Authorization form (form-1), its Spanish translation (form-2), a Request for Amendment form (form-3, not an ROI form), and a separate CHMG-specific ROI form (form-4) discovered only through web search. The primary pathway for a patient requesting their own records is form-1, a generic HIPAA authorization downloaded from the Medical Records page.

## Access Pathway: Generic Authorization, No Differentiation

Cone Health does **not** offer a dedicated patient access pathway. The primary form (form-1) is a general-purpose "HIPAA Authorization for Use/Disclosure of Protected Health Information" that serves both patient self-requests and third-party releases. The only differentiation is a checkbox in the Purpose section: "☐ Patient Request ☐ Legal ☐ Other." A patient requesting their own records must still complete recipient fields (name, address, fax, email) designed for third-party disclosures — effectively naming themselves as the recipient of their own information. The form never references the HIPAA Right of Access (45 CFR § 164.524) or frames the interaction as a patient exercising a legal right. Adding to the confusion, CHMG patients need a separate form (form-4) that isn't linked from the main website, and no guidance explains which form applies to which patient.

## Retrieval Experience

The primary form was **easy to find** — it is linked directly from a well-organized Medical Records page at `/patients-visitors/medical-records/`. However, the site employs bot protection that blocks standard HTTP requests, requiring browser-like headers or a real browser for downloads. The CHMG form (form-4) was only discoverable via web search, not through website navigation — a notable findability gap for medical group patients.

## Form Document Quality

Form-1 is a **non-fillable PDF** with zero interactive fields despite being a digitally-produced document (not a scan). All 20+ fields must be completed by hand after printing. This is especially notable because the CHMG form (form-4) includes 42 fillable fields, demonstrating the organization has the capability. The form is organized into 6 numbered sections with a clear logical flow (patient identification → recipient → purpose → facility → date range → information type → delivery method → rights/signature). However, the language is heavily administrative/legal: the Patient Rights section consists of 8 dense paragraphs, and information-type checkboxes use clinical terminology ("History and Physical," "Consultation Reports," "Operative Notes") that most patients would not understand.

The form offers 6 delivery methods including email — a bright spot. But critically, the form provides **no submission instructions** — no address, fax number, email, or guidance on where to send the completed authorization. The only address appears in the revocation clause. A patient must independently determine how to submit.

## Barriers and Compliance

No notarization or witness is required. Fee disclosure is vague: "There may be a fee charge for reproduction of medical records" with no amounts or reference to HIPAA fee limits. The form bundles authorization for all sensitive categories (reproductive health, mental health, STDs, genetic testing, substance abuse, HIV/AIDS) with no opt-out mechanism — a patient requesting a simple lab result must authorize disclosure of all sensitive information. The "Office Use Only" section requiring a Driver's License number implies in-person identity verification may be expected. The CHMG form compounds these issues with an embedded liability waiver ("hereby released from any legal responsibility or liability") that is not standard HIPAA language and may chill patient access rights.

## Notable Strengths

- **Spanish-language form available** (form-2), professionally translated and linked alongside the English version
- **Email delivery option** offered with transparent security disclaimer
- **Granular record-type selection** with 18+ checkboxes including behavioral health subcategories
- **Recently updated** (December 2024), suggesting active form maintenance
- **Amendment form published** alongside ROI forms, appropriately serving the related HIPAA right

## Overall Assessment

Cone Health provides a functional but patient-unfriendly records request process. The organization funnels all patients through a generic HIPAA authorization form that was designed primarily for third-party disclosures, with no dedicated pathway for individual access. The primary form's lack of fillable fields, absent submission instructions, bundled sensitive-category consent, and split between hospital and CHMG forms create a process that works but requires persistence and guesswork from patients. The Spanish translation and email delivery option are genuine bright spots, but they don't compensate for the fundamental design choices that make this a C-level experience.
