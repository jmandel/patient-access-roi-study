# Document Quality Deep Dive — Batch 12

## Scope

This batch covers 190 organizations with scored data (of 195 in the batch; 5 had no retrievable forms). These span community hospitals (80), teaching hospitals (30), critical access hospitals (29), physician practices (26), and FQHCs (25).

## Fillability and Interactivity

Only **50 of 190 orgs (26%)** provide fillable/interactive PDF forms. The remaining 140 offer flat, print-and-fill documents. Teaching hospitals lead at 40% fillable, followed by community hospitals (29%) and FQHCs (24%). Critical access hospitals trail badly at just 10%. System affiliation is the strongest predictor: major-system hospitals achieve 43% fillable, while independent facilities manage only 19% and regional systems just 14%.

At least **7 organizations** serve outright image-only scans—photographed or photocopied paper forms with no text layer whatsoever. Troy Regional Medical Center's sole form is a decade-old grayscale scan served over unencrypted HTTP, with zero searchable text and zero fillable fields. JPS Health Network (Fort Worth) similarly offers only a photographed paper form. Mercy Health's Fairfield and Springfield Regional facilities both link to a 2024-vintage image-only scan that contains just 46 characters of extractable metadata—a functional regression from an earlier text-based version.

## Page Counts and Field Counts

Forms are compact: **98 orgs (52%)** have single-page forms, 75 (39%) have two-page forms, and only 12 exceed two pages. The median is 1 page; the mean is 1.7. Outliers include El Rio Health (16-page HIPAA compliance booklet—not actually an ROI form), People's Health Centers (10 pages), and Anaheim Global Medical Center (9 pages), all of which are bloated intake packets rather than focused request forms.

Field counts range from 0 to 103, with a median of 20 and mean of 25.5. NewYork-Presbyterian leads with 103 fillable fields on 2 pages; Texas Oncology packs 95 fields across 3 pages. Seven orgs register zero fields (flat scans or portal-only pathways). The 11–20 field range dominates (104 orgs, 55%), representing a typical one-page form with patient demographics, record type checkboxes, and a signature block.

## Digital-First vs. Scanned Paper

**29 orgs** qualify as genuinely digital-first, meeting all three criteria of fillable fields, clear layout, and plain language. These are predominantly major-system hospitals: HCA facilities (TriStar Centennial, MountainView), Northwell Health (Huntington, Phelps), and Providence St. Joseph Health. TriStar Centennial's single-page form exemplifies best practice—52 fillable fields, 170 KB file size, native digital design with four delivery format options including encrypted email.

By contrast, roughly 34 organizations show evidence of scanned-paper origins in their synthesis narratives. Many are smaller independent or critical access hospitals where the "PDF" is simply a flatbed scan of a typewritten form from the 2010s.

## Layout, Typography, and Visual Design

**165 of 190 orgs (87%)** have forms rated as having clear layout—a surprisingly high baseline. However, only **91 (48%)** use plain language, meaning many forms are visually organized but filled with legal jargon. The 25 orgs with unclear layouts include JPS Health Network, Anaheim Global Medical Center, ENT & Allergy Associates, and several critical access hospitals.

## Instructions and Patient Guidance

**82 orgs (43%)** include instructions with their forms. Teaching hospitals lead dramatically at 73%, while critical access hospitals provide instructions only 14% of the time. Separately, **99 orgs (52%)** include explicit patient rights information. Only **16 orgs (8%)** engage in consent bundling (combining ROI authorization with unrelated consents).

Flowers Hospital (Dothan, AL) exemplifies outstanding instructions: its HIM-1406 form includes a seven-section logical flow, explicit sensitive-information opt-in categories, and five delivery methods with risk disclosures. Northwell Health pairs each form with a dedicated instruction document.

## Multilingual Support

**63 orgs (33%)** offer multilingual forms—almost exclusively English-Spanish. FQHCs lead at 48%, consistent with their mission serving diverse populations. Community hospitals follow at 39%, with critical access hospitals lowest at 10%. Beyond Spanish, a handful offer Portuguese (2), Haitian Creole (3), Chinese (2), Somali (2), and Hmong (1). Newton-Wellesley Hospital is notable for offering English, Spanish, and Portuguese. Olmsted Medical Center provides English, Spanish, and Somali.

## Notable Examples

**Best craftsmanship:** Flowers Hospital's single-page form with 66 fillable fields, full Spanish translation, online Swellbox portal, and removable-media-with-password delivery option. Virginia Garcia Memorial Health Center (an Oregon FQHC) achieves 54 fillable fields with bilingual support—exceptional for a community health center.

**Worst craftsmanship:** Troy Regional Medical Center's image-only scan from 2015, hosted on a defunct legacy website, with no submission instructions. Neshoba General Hospital and Aaron E. Henry CHC have forms with zero fields, zero pages scored, no instructions, no plain language, and no multilingual support—essentially no usable document artifact at all.

**19 organizations** bypass PDF forms entirely with portal-only primary pathways (Ascension facilities, AdventHealth, Piedmont Medical Center, others), reflecting a broader industry shift away from downloadable documents.
