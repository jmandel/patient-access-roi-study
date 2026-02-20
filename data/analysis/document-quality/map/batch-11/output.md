# Document Quality Deep Dive — Batch 11

## Batch Composition

This batch contains **2 organizations** spanning different facility types, affiliations, and geographies:

| Org | Facility Type | Ownership | Affiliation | Region | State |
|-----|--------------|-----------|-------------|--------|-------|
| Joseph P. Addabbo Family Health Center | FQHC | Nonprofit | Independent | Northeast | NY |
| Mercy Health - Springfield Regional Medical Center | Community hospital | Nonprofit | Major system (Bon Secours Mercy Health) | Midwest | OH |

A small independent community health center versus a 234-bed system-affiliated hospital — yet both converge on a surprisingly similar document quality profile.

## Fillability and Interactivity

- **Fillable PDF with limitations: 1 of 2** — Addabbo's primary form (OCA Form 960, a NY State standard) has **25 fillable fields** including text inputs and checkboxes, enabling digital completion. However, none of the fields have accessible name attributes, degrading screen reader usability. A notable bright spot: the form includes a **typed-signature acceptance clause**, allowing patients to complete and sign entirely without printing — a meaningful digital accommodation that many larger systems lack.

- **Flat (print-and-fill) PDF: 1 of 2** — Mercy Health Springfield's best available form (form-4, MHP 0785 Rev 1/19) is a digitally-created PDF with a full text layer but **zero fillable fields**. Despite being born-digital, patients must print and handwrite all entries. This is particularly striking given the system's investment in digital request pathways (Swellbox/Datavant eRequest portal, MyChart).

- **Image-only scan: 1 secondary form** — Mercy Health's system-wide linked form (form-3, the 2024 revision) is an image-only scan with only 46 characters of extractable text — functionally inaccessible to screen readers, search, or digital filling. This is a **regression** from the 2019 text-based regional versions, suggesting the system replaced a functional document with a photographed paper copy.

**Tally: 1 fillable PDF (with accessibility gaps), 1 flat digital PDF, 1 image-only scan (secondary). 0 fully accessible interactive forms.**

## Page Counts and Field Counts

- **Addabbo**: 2 pages (1 page authorization + 1 page instructions), ~25 fillable fields
- **Mercy Health Springfield**: 1 page, ~18 field areas (all print-and-fill, 0 interactive)

Both forms are appropriately concise — neither inflates page count with unnecessary content. The single-page Mercy form packs patient demographics, facility selection, date range, record types (11 checkboxes), recipient, format, delivery, and legal disclosures into a logical one-page layout, though the legal section is compressed.

## Digital-First vs. Scanned Paper

- **Digital-first: 2 of 2 primary forms** — Both primary forms are natively digital PDFs with intact text layers. Neither is a scanned paper document.
- **Scanned paper: 1 secondary** — Mercy's system-wide form-3 is a confirmed scan, created in 2024 but produced by digitizing a paper original. The metadata indicates scanning software, not document authoring tools.

## Layout, Typography, and Visual Design

- **Addabbo**: The form front-loads six dense legal disclosures before any patient-fillable fields — a legalistic opening that may intimidate patients. Item 6's all-caps discussion restriction ("WITH ANYONE OTHER THAN THE ATTORNEY OR GOVERNMENTAL AGENCY SPECIFIED IN ITEM 9(b)") is confusing outside litigation contexts. The form's visual hierarchy prioritizes legal compliance over patient usability.

- **Mercy Health Springfield**: The top half is well-organized with clear visual hierarchy — patient demographics flow logically into facility selection, date range, and record type checkboxes. The bottom half compresses six legal bullet points into small paragraphs with complex language ("Treatment, Operations or Payment disclosures to insurance companies when the law gives the right to the insurers to contest a claim under policy"). The form balances compactness against readability, landing on the readable side for the top half but losing clarity in the legal section.

## Instructions

- **Addabbo**: The second page contains instructions, but these are oriented toward litigation use — the OCA Form 960 instruction page explicitly states the form was designed for "release of health information needed for litigation in New York State courts." No patient-access-specific guidance is provided. The form itself does not indicate how to submit (no fax number, mailing address, or email on the form).

- **Mercy Health Springfield**: Instructions are embedded as inline legal text. The form lists submission options (mail, fax, MyChart, secure email) and defaults to electronic format (PDF/CD) — an unusually patient-friendly choice. However, "Photo ID required at the time of request" provides no guidance for remote submissions.

## Multilingual Support

- **Neither organization provides multilingual forms.** Both are English-only. This is notable for Addabbo, an FQHC serving Far Rockaway, Queens — a community with significant linguistic diversity. Addabbo does host a bilingual (EN/ES) patient exit survey on its Medical Records page, demonstrating awareness of its community's needs, but the actual ROI form remains English-only. Mercy Health Springfield similarly offers no Spanish or other language versions.

**Tally: 0 of 2 orgs provide multilingual ROI forms.**

## Notable Examples

**Exceptionally good craftsmanship**: Addabbo's **typed-signature acceptance clause** is a standout feature. By explicitly allowing digital signatures, the small independent FQHC removes the print-sign-scan barrier that frustrates patients at many larger systems. Combined with 25 fillable fields, this enables a fully digital workflow — a better technical outcome than what the 234-bed, system-affiliated Mercy Health Springfield provides.

**Exceptionally poor craftsmanship**: Mercy Health's **2024 image-only scan regression** (form-3) is a cautionary tale. The system replaced functional text-based regional forms with a scanned image as the primary linked document on its website. Meanwhile, the superior Springfield-specific text version (form-4) exists at a predictable URL but is entirely undiscoverable through normal website navigation. The result: patients following normal navigation links find an unusable scan, while the functional form sits hidden.

## Cross-Batch Patterns

This batch illustrates a recurring theme: **system affiliation does not guarantee document quality**. The independent FQHC produced a more technically capable form (fillable, typed-signature) than the major-system hospital (flat, no fillable fields, image scan as primary link). Both organizations default to generic third-party authorization forms rather than dedicated patient access instruments, and both lack multilingual support despite serving linguistically diverse communities. The small FQHC's advantage appears rooted in adopting a state-standard form (OCA 960) that was professionally designed with fillable fields, while the health system's in-house forms reflect less attention to digital accessibility.
