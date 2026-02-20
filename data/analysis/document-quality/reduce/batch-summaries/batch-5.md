# Document Quality Deep Dive — Batch 5

## Batch Composition

This batch contains **2 organizations**, both affiliated with major health systems but differing in facility type, ownership, and geography:

| Org | Facility Type | Ownership | Affiliation | Region | State | Beds |
|-----|--------------|-----------|-------------|--------|-------|------|
| Montefiore Nyack Hospital | Community hospital | Nonprofit | Major system (Montefiore) | Northeast | NY | 391 |
| MUSC Health University Medical Center | Teaching hospital | Government | Major system (MUSC) | South | SC | 865 |

Both are large, system-affiliated institutions — exactly the category one might expect to produce polished, digitally mature forms. The reality is more nuanced.

## Fillability and Interactivity

- **Fillable/interactive PDF: 1 of 2** — Montefiore Nyack's current form (form-1.pdf, Rev. 01/2022) has 39 interactive fillable fields, enabling fully digital completion. However, all 39 fields lack accessible names, rendering them effectively invisible to screen readers — a significant accessibility gap that undercuts the fillability.

- **Flat (print-and-fill) PDF: 1 of 2** — MUSC Health's primary form (form-1.pdf, Rev. 10/2023) is a digitally authored, text-layered PDF with clean layout but **zero fillable fields**. Despite being revised in late 2023, patients must print and handwrite all entries. This is particularly notable for South Carolina's only comprehensive academic medical center.

**Tally: 1 fillable PDF (with accessibility defects), 1 flat print-and-fill PDF, 0 image-only scans.**

## Page Counts and Field Counts

| Org | Pages | Fillable Fields | Total Forms |
|-----|-------|-----------------|-------------|
| Montefiore Nyack | 3 | 39 | 2 (current + superseded) |
| MUSC Health | 2 | 0 | 5 (English auth, superseded version, dental-specific, MyChart instructions, Spanish translation) |

Range: 2–3 pages, 0–39 fillable fields. MUSC's two-page format is more efficient — page one covers authorization substance, page two provides a nine-location facility directory. Montefiore Nyack's form inflated from 1 page (older version) to 3 pages for identical content, with file size growing from 70 KB to 353 KB (210 embedded images).

## Digital-First vs. Scanned Paper

Both forms are **digital-first** — authored in word processing or form design software with genuine text layers. Neither is a scanned paper document. This is consistent with what one would expect from major-system-affiliated hospitals. However, "digital-first authoring" did not translate to "digital-first experience" for MUSC, whose clean digital layout still requires pen and paper to complete.

## Layout, Typography, and Visual Design

**Montefiore Nyack** follows a logical flow: patient identification → recipient designation → record type selection → sensitive information consent → legal disclosures → signature → contact information. Section headers are bold and labeled. Record type checkboxes (ER, inpatient, outpatient, images, billing) offer useful granularity. However, the form contains grammatical errors in legal text ("affect" instead of "effect"), person-switching mid-sentence (first to second person), and a missing date-of-service field despite instructions telling patients to "SPECIFY THE DATES OF SERVICE."

**MUSC Health** has notably clean layout with logical flow: Patient Information → Release From → Release To → Record Types → SUD Records → Purpose → Date Range → Release Method → Authorization/Consent → Signature. Record type options include a dedicated Substance Use Disorder section with proper 42 CFR Part 2 citation. The encrypted/unencrypted email checkbox language creates confusion — the checkbox says "Encrypted E-mail" but the consent text warns about "unencrypted e-mail" risks.

## Instructions

Both forms include instructions, though quality varies. Montefiore Nyack's header instructs patients to specify dates of service but provides no field for entering them — a clear disconnect. MUSC provides a separate four-page MyChart instructions document (form-4) that explains the self-access vs. third-party distinction at the process level, a thoughtful touch. However, neither form includes standalone plain-language guidance explaining the records request process from a patient perspective.

## Multilingual Support

- **MUSC Health: Yes** — a Spanish translation (form-5) faithfully mirrors the current English version with professional translation quality. Both versions are co-located on the medical records page. This is a genuine bright spot.
- **Montefiore Nyack: No** — English only, despite serving a New York community with significant linguistic diversity.

**Tally: 1 of 2 orgs offers multilingual support.**

## Notable Examples

**Best craftsmanship element:** MUSC's multi-pathway approach — presenting MyChart, Ciox/Swellbox online portal, and downloadable form as three clearly labeled options — represents thoughtful information architecture. The Spanish translation and nine-location facility directory further demonstrate institutional investment in the records access process.

**Worst craftsmanship element:** Montefiore Nyack's form inflation from 1 page to 3 pages (with 210 embedded images ballooning file size 5×) while covering identical content, combined with grammatical errors and a missing date field that the form itself tells patients to fill out, suggests careless revision rather than intentional design improvement.

**Shared weakness:** Neither organization differentiates patient self-access from third-party release at the form level. Both funnel patients through generic HIPAA authorization documents designed for attorneys and insurers. Both received B grades overall (3.6 and 3.7 respectively) — functional but not designed around the patient experience.
