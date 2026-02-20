# Document Quality Deep Dive — Batch 1

## Form Format Breakdown

Across the batch, ROI forms fall into three distinct technical tiers:

- **Fillable/interactive PDFs**: 48 orgs (25%) provide forms with fillable fields — text inputs, checkboxes, or dropdowns that can be completed digitally. These cluster at technical accessibility scores of 4 (38 orgs) and 5 (4 orgs).
- **Flat digital PDFs (print-and-fill)**: 110 orgs (58%) publish digitally-created PDFs with zero fillable fields. Despite being born-digital (not scans), they require printing and handwriting. This is the dominant format.
- **Image-only scans**: 25 orgs (13%) serve scanned paper forms — grayscale or B&W images with no text layer, no searchability, and no accessibility. These are the worst technical artifacts in the study.
- **No form found**: 7 orgs (4%) publish no downloadable ROI form at all, leaving patients with no clear starting point.

The overwhelming majority of forms (71%) offer no digital completion pathway whatsoever — patients must print, handwrite, and either mail, fax, or hand-deliver.

## Page Counts and Field Counts

Most forms are compact: **98 orgs (52%) use a single page**, and another 75 (39%) use two pages. The median is 1 page. Only 5 orgs exceed 3 pages, with outliers at the high end:

- **El Rio Health** (16 pages, 0 fields) — a compliance booklet, not an ROI form
- **Peoples Health Centers** (10 pages, 0 fields) — an NPP mislabeled as a request form
- **Anaheim Global Medical Center** (9 pages) and **La Clínica de la Raza** (8 pages) — lengthy multi-purpose documents

Field counts range from 7 to 103, with a median of 20 and a mean of 26.5. The interquartile range is 15–25 fields. At the extremes, **NewYork-Presbyterian Hospital** packs 103 fillable fields into 2 pages, while forms at the low end offer barely enough space for demographics and a signature. **Texas Oncology** (95 fields, 3 pages) and **A.O. Fox Hospital** (83 fields, 2 pages) are similarly field-dense — all three are fillable interactive PDFs from teaching or system-affiliated hospitals.

## Digital-First vs. Scanned Paper

**42 orgs** (22%) qualify as digital-first: they provide fillable PDFs with a technical accessibility score ≥ 4, meaning patients can complete and often submit without printing. Five orgs achieve a perfect technical score of 5 — **AdventHealth Hendersonville**, **Flowers Hospital**, **Gastro Florida**, **Kings Daughters Medical Center Brookhaven**, and **Labette Health** — all offering fully digital online workflows via portals (Swellbox/Datavant, Sharecare, or Formstack).

At the opposite end, **10 orgs** serve clearly scanned paper forms with technical scores of 1–2: institutions like **Troy Regional Medical Center** (image-only, 200 DPI grayscale, no text layer), **Bath Community Hospital**, **Tioga Medical Center**, and **GI Alliance**. Troy's form is the worst artifact in the study: a decade-old scan on a defunct website, served over unencrypted HTTP.

## Layout, Typography, and Visual Design

Layout quality is surprisingly strong even when technical format is poor: **165 orgs (87%)** have clear, logical layouts. Most forms follow a standard flow — demographics → record type selection → recipient information → authorization/signature — with adequate spacing and section headers. Only 25 orgs have unclear layouts, typically from dense legal blocks, poor scan quality, or multi-purpose forms trying to serve too many functions.

Plain language is more divided: only **91 orgs (48%)** use plain language, meaning the slight majority (52%) rely on legalistic or jargon-heavy phrasing that could confuse patients.

## Instructions

**82 orgs (43%)** include instructions with their forms. The remaining 108 (57%) provide forms with no guidance — patients must infer where to send the form, what fields are required, and how the process works. **Troy Regional Medical Center** is an extreme example: its form provides no submission address, fax number, or department name. In contrast, **Flowers Hospital** includes clear instructions alongside the form.

## Multilingual Support

**63 orgs (33%)** offer multilingual materials, overwhelmingly English-Spanish bilingual. Spanish is the only widely available second language (63 orgs). A handful offer additional languages: **Prevea Health** stands out with four languages (English, Hmong, Somali, Spanish). **Broward Health** and **Memorial Healthcare System** include Haitian Creole and Portuguese. **NewYork-Presbyterian** and **La Clínica de la Raza** offer Chinese alongside Spanish. But two-thirds of orgs are English-only.

## Facility Type Patterns

Teaching hospitals lead in technical quality (mean tech score 3.27) and fillable form adoption (40%), while **critical access hospitals** lag most (mean 2.79, only 10% fillable). FQHCs also score low (mean 2.68, 24% fillable), suggesting smaller and safety-net providers lack resources for digital form infrastructure. Community hospitals fall in the middle (mean 3.21, 29% fillable).

## Notable Examples

**Best**: **Flowers Hospital** (Grade A) — the only A-graded org — provides a fillable, single-page, patient-titled form ("Patient Request for Health Information") with 66 interactive fields, a co-equal Spanish translation, Swellbox portal alternative, instructions, and a sensitive-information opt-in design. It is the clearest example of patient-centered document craftsmanship.

**Worst**: **Troy Regional Medical Center** (Grade D, tech score 1) — image-only scan, no text layer, no instructions, no submission address, decade-old, on a defunct website. Multiple compliance red flags including a mandatory liability waiver and a witness requirement. A patient attempting to use this form would face near-total failure.
