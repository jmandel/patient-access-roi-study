# Document Quality Deep Dive — Batch 0

## Batch Composition

This batch contains **2 organizations**, representing contrasting profiles:

| Org | Facility Type | Ownership | Affiliation | Region | State |
|-----|--------------|-----------|-------------|--------|-------|
| Colquitt Regional Medical Center | Community hospital | Government | Independent | South | GA |
| Gastro Florida | Physician practice | For-profit | Independent | South | FL |

Both are independent, Southern facilities, but they differ sharply in facility type, ownership model, and digital maturity.

## Fillability and Interactivity

- **Flat/image-only scans: 1 of 2** — Colquitt Regional's sole form is a single-page scanned image with no meaningful text layer (only 11 characters of OCR noise extracted) and zero fillable fields. It was digitized in 2021 using scanning software ("Transform Foundation Server"), confirming it is a photographed paper form uploaded as a PDF. It cannot be filled electronically, is completely inaccessible to screen readers, and must be printed and completed by hand.

- **Fillable/interactive digital pathway: 1 of 2** — Gastro Florida uses a third-party Sharecare/HDS online portal as its primary records request mechanism, offering a fully digital submission workflow with approximately 30 fillable fields. No downloadable ROI form exists; the portal *is* the form. While fully interactive, the 31-step portal process is unusually lengthy for a records request.

**Tally: 0 fillable PDFs, 1 image-only scan, 1 portal-only (no PDF at all).**

## Page Counts and Field Counts

- **Colquitt Regional**: 1 page, 0 fillable fields (10-item numbered list with 12 checkboxes, but all must be handwritten).
- **Gastro Florida**: 0 pages of downloadable form (portal-only); ~30 fields in the online portal workflow.

The range is minimal given the small batch, but it illustrates the two extremes: a single-page paper relic vs. a fully digital but overly complex portal.

## Digital-First vs. Scanned Paper

- **Scanned paper: 1** — Colquitt Regional's form is definitively a scanned paper document, confirmed by its creation tool metadata and the absence of a real text layer.
- **Digital-first: 1** — Gastro Florida's portal pathway is natively digital, with no paper antecedent.

## Layout, Typography, and Visual Design

**Colquitt Regional** has no section headers, boxes, or visual groupings. The single-page form is a numbered list with no typographic hierarchy. Despite this, the single-page length keeps complexity manageable — the 10-item flow (patient ID → discloser → record types → recipient → purpose → legal → signatures) is logically ordered, if visually undifferentiated.

**Gastro Florida** has a clean, clear layout in its portal interface with plain language, though the 31-step sequence is burdensome. The downloaded documents (3 PDFs retrieved, all Notice of Privacy Practices or intake paperwork — none are actual ROI forms) include a 2026 NPP with an unresolved `ClientName` template placeholder, suggesting poor quality control over published documents.

## Instructions

- **Colquitt Regional**: No instructions are provided. The form contains no submission guidance — no fax number, mailing address, email, or department name. A patient who downloads and completes the form has no guidance on how to return it.
- **Gastro Florida**: No pre-portal instructions exist on the website. The dedicated Medical Records page at gastrofl.com/medical-records/ is completely empty. Patients must find the portal link on the Patient Forms page without guidance.

**Tally: 0 of 2 organizations provide adequate instructions.**

## Multilingual Support

Neither organization offers multilingual forms or portal interfaces.

**Tally: 0 of 2 offer non-English support.**

## Notable Examples

**Worst document craftsmanship — Colquitt Regional Medical Center**: This form exemplifies the lowest tier of document quality. A scanned image with no text layer, no fillable fields, no submission instructions, and no accessibility support. It is a generic third-party authorization form (not a patient access form), with a witness signature line that may mislead patients into thinking a witness is required. The single redeeming feature is easy findability — the form is linked prominently from a clearly labeled page, approximately two clicks from the homepage.

**Best technical pathway — Gastro Florida**: The Sharecare/HDS portal demonstrates a fully digital, portal-based approach that eliminates printing and mailing entirely. The portal correctly differentiates patient self-access from third-party release. However, document craftsmanship issues undercut the technical achievement: the organization's published NPP contains template errors, the Medical Records page is blank, and the 31-step portal process is unusually burdensome.

## Summary

This small batch starkly illustrates the bifurcation in healthcare document quality. One organization relies on a scanned paper form from a pre-digital era; the other has leapfrogged PDFs entirely with a portal-based workflow. Neither achieves a satisfying balance of accessibility, clarity, and patient-centeredness. Both fail at instructions — the fundamental question "how do I submit this?" goes unanswered in one case and unguided in the other. Multilingual support is absent across the board. The "typical" ROI document in this batch is either technically non-functional (image scan) or technically functional but procedurally burdensome (31-step portal), with no middle ground of a well-designed, fillable PDF with clear instructions.
