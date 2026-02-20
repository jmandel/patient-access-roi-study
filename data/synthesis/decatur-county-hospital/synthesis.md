# Decatur County Hospital — Organization Synthesis

## Overview

Decatur County Hospital (Leon, IA) is an independent, government-owned critical access hospital in rural Iowa. The facility offers a single authorization form — "Authorization for Access, Use or Disclosure of Protected Health Information" (DCH-#0001) — for all medical records requests. There is no dedicated patient self-access pathway; the same generic HIPAA authorization form serves both patients requesting their own records and third-party release scenarios.

## Access Pathway

The hospital does not differentiate between patient self-access and third-party release of information. The form's opening language reads: "I, the undersigned authorize and request Decatur County Hospital to: Allow access, use or disclosure of my protected health information to: OR obtain from:" — presenting patient access and third-party release as two branches of the same document. A patient simply wanting to view or obtain copies of their own records must navigate fields designed for third-party recipients (recipient organization, address, fax number) that are irrelevant to their situation. The form includes a "Personal" purpose checkbox, which is the closest it comes to acknowledging individual access rights, but there is no explicit reference to HIPAA's Right of Access under § 164.524. No patient portal-based records request workflow or online submission mechanism was identified.

## Retrieval Experience

Finding the form was straightforward. While initial broad web searches failed, a site-scoped search quickly located the PDF linked from the hospital's Patient Portal page. The URL (`/wp-content/uploads/2026/02/0001-Auth-for-Access-Use-or-Disclosure-of-PHI.pdf`) is descriptive, and no bot blocking or browser workarounds were needed. For a small rural hospital, the form's online availability is commendable.

## Form Document Quality

The form is a genuine bright spot in terms of technical design. Created with Acrobat PDFMaker for Word, it is a born-digital, fillable PDF with 61 AcroForm interactive fields — covering patient demographics, record type checkboxes, purpose options, sensitive-records initials, fee agreement, and signatures. Nearly every blank on the form can be completed electronically without printing. However, AcroForm field names are empty, which would hinder screen reader accessibility.

The form fits everything onto a single page — admirably compact but visually dense. The logical flow is sound (patient identity → recipient → dates → record types → purpose → sensitive records → fees → legal text → signature), but cramming 61 fields, 13 record-type checkboxes, and multiple legal paragraphs onto one page likely challenges readability. The first half uses straightforward language, while the second half descends into dense regulatory prose, particularly the re-disclosure paragraph citing 42 CFR Part 2 and Iowa Code chapters 228 and 141.

Record-type granularity is a strength: patients can select from 13 specific categories (Discharge Summary, H&P, Consultation, Radiology, Progress Notes, OR Report, Pathology, Labs, ER Notes, EKG, PT/OT/ST, Photographs) plus "Other" and a "Review only" option. This gives patients meaningful control over scope.

## Barriers and Concerns

**Social Security Number**: The form requests SSN — unnecessary for patient identification under HIPAA and a significant identity-theft risk on a form that may be faxed or mailed. A medical record number (included as "for office use only") is sufficient.

**Blank fee amount**: The fee disclosure states the hospital "may impose a fee of [blank]" and asks patients to agree to unspecified costs. This prevents patients from making informed decisions about fees before submitting their request.

**No delivery format options**: The form lacks any field for patients to specify how they want to receive records (mail, electronic, in-person). HIPAA § 164.524(c)(2)(i) requires entities to provide records in the form and format requested if readily producible.

**Outdated**: Last reviewed March 2018 — nearly eight years old, predating the 21st Century Cures Act information blocking rules (effective 2021).

**Binding language**: The statement that authorization provisions "take precedence over statements made in the Decatur County Hospital's Notice of Privacy Practices" is potentially misleading, suggesting patients might be waiving protections.

## Strengths

The form includes an explicit conditioning prohibition (treatment will not be conditioned on signing), clear revocation instructions with a mailing address, and appropriate separate-initials requirements for sensitive records (substance abuse, mental health, HIV/AIDS) under applicable federal and state law. The comprehensive record-type granularity and digital-first fillable design are notable positives.

## Overall Assessment

Decatur County Hospital provides a functional but undifferentiated pathway for patient records access. The fillable PDF is technically sound, but the generic authorization approach, SSN collection, blank fee amount, outdated review date, and absence of delivery format options collectively place this facility below the standard patients should expect for exercising their individual access rights.
