# OrthoCarolina — Organization-Level Synthesis

## Overview

OrthoCarolina, an independent for-profit orthopedic practice in Charlotte, NC, offers a single generic HIPAA authorization form for all records requests — whether the patient is requesting their own records or authorizing release to a third party. Three versions of this form (dated 2017, 2020, and 2023) remain simultaneously available at different URLs on the organization's website. The most current version (form-1, revised 04/2023) is the primary form linked from the medical records resource page and represents the best available pathway for patient self-access.

## Access Pathway

OrthoCarolina does **not** differentiate patient self-access from third-party release. All requests flow through the same "Authorization for Access/Use/Disclosure of Protected Health Information" form. The form includes a "Personal Use" checkbox under Purpose of Release, which at least signals that patient self-requests are a recognized use case. However, the mandatory recipient section ("This information is to be disclosed to the following individual or entity (MUST BE COMPLETED)") forces patients requesting their own records to awkwardly list themselves as the disclosure target — a design that treats self-access as just another flavor of third-party release rather than a distinct right under HIPAA § 164.524.

The form makes no reference to HIPAA's Right of Access, does not explain patient rights to receive records within 30 days, and does not distinguish the fee structure for patient access (which must be reasonable and cost-based) from third-party release fees.

## Retrieval Experience

Finding the form was straightforward. A basic web search returned both the direct PDF link and OrthoCarolina's medical records resource page. No bot blocking, JavaScript rendering, or browser fallback was needed — forms downloaded cleanly via direct URL. The main findability concern is version confusion: three nearly identical forms exist at three different public URLs with no version indicators in the filenames, no redirects from old URLs, and different fax numbers across versions (the 2017 form lists a different fax number). A patient who finds form-2 via a search engine could submit to the wrong fax number.

## Form Document Quality

The primary form (form-1) is a single-page, born-digital PDF with a proper text layer — but **zero fillable fields**. Despite being revised as recently as April 2023, it uses underscored blank lines throughout, requiring patients to print and handwrite. A patient determined to complete it digitally would need third-party PDF annotation tools — a workaround, not a designed workflow.

The layout is dense but follows a logical top-to-bottom flow: patient demographics → records requested → radiology images → recipient → purpose → fee notice → delivery method → sensitive information consent → signature. However, the single-page constraint leads to cramped formatting, and the delivery method section has a known layout defect where authorization expiration language overlaps with delivery checkboxes, producing garbled text in the PDF's text layer (problematic for screen readers).

The language is mostly plain, though the sensitive-information consent and revocation clauses run together in a single dense paragraph. The newer form-1 dropped the prominent "YOU MAY REFUSE TO SIGN THIS AUTHORIZATION" notice that appeared in both older versions — a regression in patient-rights transparency.

## Submission & Delivery

OrthoCarolina offers notably comprehensive submission and delivery options. The form can be submitted via mail, email (OrthoCarolinaMedRec@orthocarolina.com), fax, or patient portal upload. For record delivery, seven options are available: patient portal upload, email (for both records and radiology images), fax, paper mail, CD mail, and in-person pickup. This breadth — particularly the inclusion of email submission and patient portal delivery — is a genuine strength for a physician practice.

## Barriers

No notarization or witness is required. In-person delivery is not mandated. Fees are mentioned but not quantified: "Medical record copy fees are determined by both the nature/purpose of your request and the format/method of delivery." This vagueness, combined with no distinction between patient-access and third-party-release fee structures, creates a risk of overcharging for Right of Access requests. The form also includes a broad liability waiver releasing OrthoCarolina from "any legal responsibility or liability for disclosure" — standard boilerplate but potentially intimidating.

## Overall Assessment

OrthoCarolina earns credit for easy form findability, multiple submission/delivery channels (including email and portal), and a reasonably organized single-page form. However, the lack of any dedicated patient access pathway, the absence of fillable fields in a 2023-vintage PDF, vague fee language, and the liability waiver embedded in a records request form collectively pull the assessment down. The organization treats patient self-access as undifferentiated from third-party release, missing an opportunity to acknowledge and streamline the exercise of a fundamental HIPAA right. The result is a serviceable but uninspired experience that a patient can navigate — but that was not designed with them in mind.
