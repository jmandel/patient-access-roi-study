# Synthesis: Aurora Medical Center - Grafton

## Overview

Aurora Medical Center - Grafton is a community hospital in Grafton, Wisconsin, operated by Advocate Health (formerly Advocate Aurora Health). The facility uses system-wide forms rather than facility-specific ones, drawing from Aurora Health Care's centralized medical records infrastructure. Three PDF forms were retrieved, and the organization also directs patients to its LiveWell patient portal for online record access.

## Forms and Pathways

Three forms were downloaded:

- **Form-1 and Form-2** are identical copies (same form number S300503 Rev. 11/25, same byte size) of the general "Authorization to Release Protected Health Information" — a third-party release form designed for authorizing disclosure to other providers, insurers, or attorneys. Two URLs exist for the same document, a minor source of confusion.
- **Form-3** is a dedicated "Patient Request for Health Information" (S88411-EN Rev. 11/25) — explicitly designed for patients requesting their own records. It features a "Myself" checkbox, omits the purpose-of-release requirement, and opens with a callout to the LiveWell patient portal.

The most relevant form for patient self-access is **form-3**. The existence of a dedicated patient access form, separate from the third-party authorization, is a meaningful structural choice that many organizations fail to make.

## Access Pathway Differentiation

Aurora clearly differentiates individual access from third-party release. Form-3 is titled and structured around the patient's own request — no "Release the Requested Information to" recipient block, no purpose-of-release field, and a prominent "Myself" option. The patient portal callout ("Did you know you can request and access your medical records online through your patient portal? Visit: https://livewell.aah.org") is placed at the very top of the form, proactively directing patients to a faster digital channel before they even begin filling out the paper form. This is a best-practice design choice.

## Retrieval Experience

Finding the forms was **easy**. Aurora Health Care maintains a well-organized medical records page at `/patients-visitors/medical-records`, reachable in about two clicks from the homepage. The page clearly lists all available forms with download links, including English and Spanish versions, instruction sheets, restriction request forms, accounting of disclosures, and revocation forms. No bot blocking or browser fallback was needed. The forms also appeared in web search results.

## Form Document Quality

Form-3 is a single-page, digitally-authored PDF with clean typography and logical section flow: patient demographics → treatment context → record type selection → recipient → delivery method → signature. The record-type selection is impressively granular, with 22+ checkbox options spanning medical records, imaging by modality, billing documents, and laboratory reports. The language is plain and accessible — the sensitive-information acknowledgment is straightforward without being alarming.

However, despite being digitally produced, form-3 has **zero interactive fillable fields**. All checkboxes are static glyphs, and all blanks require handwriting. This is the form's most significant weakness — adding fillable fields would be trivial for the design team and would dramatically improve the digital experience. The form is designed as a print-and-fill artifact published as a PDF.

## Submission and Delivery

The medical records page lists multiple submission methods: email, fax, mail, and in-person delivery. The form itself offers multiple delivery methods for receiving records: paper by mail, encrypted email, CD, patient portal, and in-person pickup. Offering both encrypted email and patient portal as electronic delivery options is progressive. The note "(Fees may apply)" appears but no fee amounts or schedule are provided — a common ambiguity.

## Barriers and Compliance

No notarization or witness is required. No in-person submission is mandated. The form correctly omits a purpose-of-release requirement for patient access. Non-discrimination language is present on the third-party form. Minor authorization provisions are detailed and legally careful. The main compliance gap is the vague fee disclosure — patients cannot estimate costs before submitting.

## Overall Assessment

Aurora Medical Center - Grafton, through its parent system, demonstrates strong patient-centeredness by offering a dedicated patient access form, a patient portal alternative, Spanish translations, and granular record-type selection. The retrieval experience is excellent and the content design is clear and well-organized. The primary weakness is the non-fillable PDF format, which forces a paper workflow despite the form being digitally authored. This technical gap prevents the organization from reaching the top tier, but the overall experience is solidly good — a patient requesting their own records has a clear, well-documented pathway with multiple submission and delivery options.

**Grade: B** (weighted score: 4.15/5.0)
