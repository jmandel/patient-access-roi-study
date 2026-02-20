# Document Quality Deep Dive — Batch 17

## Batch Composition

This batch contains **2 organizations**, both Midwestern nonprofits but differing in facility type and system affiliation:

| Org | Facility Type | Ownership | Affiliation | Region | State |
|-----|--------------|-----------|-------------|--------|-------|
| Carle BroMenn Medical Center | Community hospital (221 beds) | Nonprofit | Regional system (Carle Health) | Midwest | IL |
| Heartland Community Health Center | FQHC | Nonprofit | Independent | Midwest | KS |

Despite their geographic and nonprofit commonality, these organizations represent different care delivery models — a system-affiliated community hospital versus an independent federally qualified health center — and both earn middling overall grades (C for each, 2.9 and 2.65 respectively).

## Fillability and Interactivity

**Neither organization offers fillable PDF forms.** Both produce digitally-authored PDFs with full text layers, but neither includes interactive form fields. Every field must be completed by hand after printing.

- **Carle BroMenn**: 3 forms found (general ROI for BroMenn campus, system-level Carle Health ROI, and a behavioral health authorization), all with zero fillable fields. Despite being born-digital documents created from a layout tool, the forms function as print-and-fill artifacts.
- **Heartland**: 1 form found, also born-digital with zero fillable fields and approximately 22 data entry points crammed onto a single page.

**Tally: 0 fillable PDFs, 0 image-only scans, 2 flat (print-and-fill) digital PDFs.** Neither organization's forms are scanned paper — both are digitally authored — but neither exploits the medium's interactive capabilities.

## Page Counts and Field Counts

| Org | Forms | Pages (primary) | Field Count Est. |
|-----|-------|-----------------|------------------|
| Carle BroMenn | 3 | 1 (general), 1 (system), 2 (behavioral health) | ~18 (primary form) |
| Heartland | 1 | 1 | ~22 |

Both primary forms are single-page documents. Carle BroMenn's behavioral health companion form adds a second page, bringing the total for a patient needing mental health records to 3 pages across 2 forms. The field counts (18–22) are moderate — enough to capture necessary information but dense for a single page.

## Digital-First vs. Scanned Paper

**Both forms are digital-first** — created in layout or word processing software with full text layers, not scanned from paper originals. However, neither takes advantage of digital affordances like fillable fields, auto-calculation, or electronic submission through the form itself. They are essentially digital documents designed for an analog workflow.

## Layout, Typography, and Visual Design

**Carle BroMenn** (form-1) features a well-organized top-to-bottom flow: patient identification → direction of release → delivery method → record type selection → legal terms → signature. A standout feature is its **granular record-type checkbox grid with 30+ categories** across hospitalization and clinic columns, giving patients fine-grained control. However, the single-page design makes the form **cramped**, with estimated 8–9pt font for legal text and limited write-in space. Legal disclaimers are dense, and the "ATTENTION: This is a legal document" warning is somewhat intimidating. No plain-language summary is provided.

**Heartland** has a **logically ordered layout** (demographics → record types → delivery method → from/to → purpose → legal → signature → return instructions) with a patient-friendly opening line: "To treat you effectively, your provider needs to review your past medical records." The form uses **16 distinct fonts**, which suggests design complexity bordering on visual noise, and the density is high for a single page. Despite these issues, the layout rated as clear with plain language — a notable achievement for a single-page, 22-field form.

## Instructions

- **Heartland**: Includes instructions — the form opens with contextualizing text and provides return submission details (email, fax, mail, phone). This was rated as having instructions present.
- **Carle BroMenn**: Rated as having **no instructions**. The form is self-contained but lacks an introductory explanation of the process, expected timelines, or guidance on which form to use (a real issue given that three overlapping forms exist for the same system).

The absence of guidance at Carle BroMenn is particularly problematic because a patient might encounter both the BroMenn-specific form (form-1) and the Champaign campus form (form-2) without clear direction on which to complete.

## Multilingual Support

**Neither organization provides multilingual forms.** Both are English-only. For Heartland — an FQHC serving a community that likely includes Spanish-speaking patients — the absence of a Spanish-language version is a notable gap. Carle BroMenn, serving the Bloomington-Normal metro area, also lacks any non-English alternatives.

**Tally: 0 of 2 organizations offer multilingual support.**

## Notable Examples

**Best design element**: Heartland's **pre-bundled "Record Set" option** is a genuinely patient-centered innovation. It offers a curated default bundle (last 3 visit notes, recent labs, medication list, immunization records, screening reports, specialist list), reducing decision burden for patients who want comprehensive records without navigating a long checkbox list. This is a bright spot worth emulating.

**Most concerning gap**: Carle BroMenn's **purpose-of-disclosure requirement** asks patients to state why they want their records — a requirement that is potentially non-compliant with HIPAA's Right of Access (§ 164.524), which prohibits requiring a reason for patient self-access requests. Combined with an unmarked SSN field and no online submission option, the system-affiliated hospital imposes more friction than the independent FQHC despite having more institutional resources.

**Shared weakness**: Both organizations use **generic third-party authorization forms** rather than dedicated patient self-access forms. Neither differentiates between a patient requesting their own records and a third party requesting records on someone's behalf, forcing patients to navigate form structures designed for inter-provider transfers.

## Summary

This batch illustrates a common pattern: digitally-created documents trapped in paper-era workflows. Both organizations produce clean, born-digital PDFs but fail to add fillable fields — a low-effort improvement that would meaningfully reduce patient burden. The forms are compact (1 page each), moderately complex (18–22 fields), and reasonably well-organized, but neither includes multilingual support, and only one includes basic instructions. The FQHC slightly outperforms the system-affiliated hospital on content design and plain language, while the hospital excels at findability. Both earn C grades overall, reflecting functional but uninspired document craftsmanship.
