# Surprising Findings — Batch 21

## The "Born-Digital but Non-Interactive" Paradox

The most consistently surprising pattern across this batch is organizations publishing digitally authored PDFs — clearly created in Word, InDesign, or similar tools — with zero fillable fields. **Black River Memorial Hospital** exemplifies the extreme case: a form authored in Microsoft Word for Microsoft 365 in 2025 that renders as 970 embedded images across 2 pages, with only 43 characters of extractable text. A modern word processor produced a document less accessible than a 1990s photocopy. **Garfield Medical Center**, **Community Health Center (CT)**, **Cordova Community Medical Center**, and **Fenway Health** all exhibit the same pattern — born-digital documents exported as flat PDFs. The technical effort to add fillable fields to a Word-originated document is minimal; the consistent failure to do so suggests either ignorance of the capability or a deliberate choice to maintain a print-and-mail workflow.

## Rural Critical Access Hospitals Outperform Expectations on Delivery Options

**Fallon Medical Complex** — a 25-bed critical access hospital in Baker, Montana (population ~1,700) — offers seven disclosure format options including USB drive, patient portal signup, and unencrypted email with informed consent. It also explicitly states that the first copy is free. This is more delivery flexibility than many large urban systems in this batch. Similarly, **Cordova Community Medical Center** in remote Alaska (accessible only by plane or boat) earns a perfect findability score of 5 — the form is one click from a clearly labeled Medical Records page. These small, isolated facilities defy the assumption that rural means inaccessible: their websites are simpler but more navigable, and their forms, while not fillable, are at least straightforwardly organized.

## The Mislabeling Problem: Forms Hidden Behind Wrong Names

**Mayers Memorial Hospital** hides its ROI authorization form behind the label "Disclosure of Privacy Practices" — a title that describes an entirely different HIPAA-required document (the Notice of Privacy Practices). A patient looking for a records release form would rationally skip this link. Meanwhile, the actual Medical Records page provides only a phone number and department hours — no form at all. This is a more insidious barrier than a missing form: the form exists and is publicly accessible, but its label actively misdirects patients. A second form for Mayers was only discoverable on a third-party CDN (PatientPop/Tebra) via web search, suggesting the organization's web vendor published a generic form without the hospital's knowledge or coordination.

## Witness Requirements Persist Without Legal Basis

**Southwell (Tift Regional)** requires a witness signature on all ROI forms — a requirement HIPAA explicitly does not impose for either authorization or access requests. For a patient filling out a form at home, finding a witness creates real friction. Combined with Southwell's collection of the last four digits of SSN (when MRN and DOB suffice), this suggests an institutional culture of over-collecting identity verification, possibly inherited from legacy paper workflows that predated HIPAA's patient access provisions.

## The Fragmented Health System Form Problem

**Southwell** also illustrates a surprising organizational complexity barrier: patients must determine whether to use the TRHS (hospital) form or the SWA (ambulatory) form depending on where they received care, with no guidance on which covers which facility. A patient who saw a specialist in the clinic and was admitted to the hospital would need to file two separate authorization forms to two different legal entities. Even **Northwell Health** (serving Huntington Hospital) shows a subtler version: the system maintains separate patient-access and third-party-release forms, but the third-party form contains no cross-reference to the patient-access form. A patient who finds the wrong form first has no way to discover the right one exists.

## Consent Bundling in Unexpected Places

**Garfield Medical Center** bundles a CD/imaging liability waiver into its general ROI authorization — every patient who signs the form waives liability for CD release, even when requesting paper copies or email delivery. This is a quiet form of consent bundling that patients are unlikely to notice or question. It represents a use of the authorization form to extract legal protections for the organization beyond the scope of the records request.

## A Government-Owned Hospital Scores Worse Than Expected

**Mayers Memorial Hospital** is a government-owned critical access hospital — a category that might be expected to prioritize public accountability and patient access. Instead, it scores a D (2.35), the lowest in this batch. Its primary form is an image-only scan with no text layer, no fillable fields, no submission instructions, and is mislabeled on the website. Government ownership provides no inherent advantage for form quality; in this case, it correlates with the least patient-friendly experience in the batch.

## The Fenway Health Model: Mission-Driven Design Choices

**Fenway Health**, an FQHC serving Boston's LGBTQ+ community, includes a "Name used (if different)" field on its ROI form — a small design choice that accommodates patients whose current name differs from their legal name. The form also includes 10 granular sensitive-information categories with individual patient initials, including abortion care and gender-affirming care. The companion FAQ sheet defines terms like "bi-directional" and "abstract" in plain language. These design choices reflect an organization that knows its patients and has thought about their specific needs — a stark contrast to the generic templates used by most facilities. Yet even Fenway fails to provide a dedicated patient self-access form or fillable fields, suggesting that even mission-driven organizations struggle with the structural distinction between authorization and access.
