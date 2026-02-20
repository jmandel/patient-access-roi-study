# Valleywise Health Medical Center — Org-Level Synthesis

## Overview

Valleywise Health Medical Center, a government-owned independent community hospital in Phoenix, AZ, provides a notably patient-centered approach to medical records access. The organization maintains two distinct PDF forms: a general third-party authorization (Form 43439) and a dedicated patient access request form (Form 45643). This two-form architecture is a best practice that many organizations fail to implement, clearly separating patient self-access rights under HIPAA § 164.524 from third-party authorization under § 164.508.

## Access Pathway Differentiation

Valleywise Health is among the organizations that get this right. Form 45643 — "Patient Request for Access to Protected Health Information" — is explicitly designed for patients requesting their own records. It does not require the patient to name a third-party recipient, does not include a purpose/reason field, and does not carry an expiration clause — all appropriate design choices for a one-time patient access request. Meanwhile, Form 43439 handles third-party disclosures with the appropriate authorization infrastructure (recipient designation, purpose selection, expiration, revocation rights). The organizational intent to differentiate is clear and well-executed.

## Retrieval Experience

Finding the forms was straightforward. A web search for `Valleywise Health "medical records" "release form" filetype:pdf` returned direct PDF URLs. The organization's patient records page at `valleywisehealth.org/patients/personal-health-record/` also links to the forms. Both PDFs were publicly accessible from a standard WordPress media directory with no bot blocking, CAPTCHA, or authentication. The descriptive filenames (e.g., `Form-45643-Patient-Request-For-Access-To-Protected-Health-Information_ENG_SPA.pdf`) make it clear which form is which.

## Form Document Quality

Form 45643 is a 2-page bilingual PDF (English page 1, full Spanish translation page 2). The layout is clean with a logical flow: patient identification → record type selection → date range → delivery format → recipient information → processing details → signature. The form offers an impressively granular record type selection with 16+ specific categories (discharge summary, H&P, nursing notes, operative reports, pathology, radiology, etc.) plus an "All Records" option. Delivery options include MyChart patient portal, paper copy, CD, USB, email, and fax.

However, the form has **zero fillable fields** despite being a digitally-authored document. Patients must print the form and complete it by hand. This is a significant missed opportunity — the form's clean layout would translate well to interactive PDF fields. Submission is available via fax (602-655-9017) and email (ROI@valleywisehealth.org), providing adequate electronic pathways, but the print-and-handwrite step creates friction in an otherwise well-designed process.

The language is plain and accessible throughout, with clear instructions ("Please check (✔) the appropriate box(es) (❑) and fill in the blank(s) as needed") and a patient-friendly tone ("We appreciate your patience while we process your request").

## Barriers and Concerns

No notarization, witness, or in-person requirements exist. The form states a HIPAA-compliant 30-day response timeline with a possible 30-day extension. Fee disclosure is vague — "Valleywise Health may charge a fee" — without specifying amounts or referencing a fee schedule, though the language about "actual cost of the portable media" aligns with HIPAA's cost-based limits.

Two concerns stand out. First, the form collects Social Security Number, which is unnecessary for patient access requests and creates identity theft risk on a form that may be faxed or emailed. Second, the Spanish translation references "documento 43780" instead of the correct Form 43439, potentially sending Spanish-speaking patients searching for a nonexistent form.

## Notable Strengths

The standout features are the **full bilingual (English/Spanish) form** — not a summary but a complete parallel translation, appropriate for Phoenix's demographics — the **dedicated patient access form** distinct from third-party release, and the **granular record type selection** giving patients meaningful control over their request scope. The email encryption transparency, defaulting to encryption with an informed opt-out, is a thoughtful touch.

## Overall Assessment

Valleywise Health demonstrates strong patient-centeredness in its medical records access process. The dedicated patient access form, bilingual design, granular record selection, and multiple delivery options reflect genuine attention to the patient experience. The primary gap is the lack of fillable PDF fields, which forces a paper-first completion workflow despite otherwise modern design sensibilities. The SSN field and Spanish-version cross-reference error are notable but secondary concerns. This is a well-designed system with room for straightforward technical improvements.
