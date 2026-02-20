# Batch 1: Document Quality Analysis

## Batch Composition

This batch covers **50 organizations** spanning all facility types (community hospitals, teaching hospitals, critical access hospitals, FQHCs, physician practices), ownership models, and census regions. Organizations range from rural single-facility CAHs (Tioga Medical Center, ND; Lane County Hospital, KS) to major academic medical centers (Duke, Penn, Michigan Medicine, MUSC).

## Format Distribution: Fillable vs. Flat vs. Image-Only

Of the 50 organizations' primary forms:

- **Fillable/interactive PDFs: 14 (28%)**. These include A.O. Fox/Bassett (83 fields), Mass General Hospital (78 fields), Hospital of the University of Pennsylvania (70 fields), Duke University Hospital (67 fields), Gritman Medical Center (63 fields), Decatur County Hospital (61 fields), UW Medical Center (61 fields), Virginia Garcia (54 fields), GHC–South Central Wisconsin (49 fields), Desert Valley/Prime Healthcare (47 fields), Lankenau/Main Line Health (41 fields), Montefiore Nyack (39 fields), Community Health Centers of Burlington (36 fields), and Huntington/Northwell (28 fields).

- **Flat digital PDFs (text layer, zero fillable fields): 31 (~62%)**. The dominant category. These are born-digital documents with extractable text but no interactive form fields — patients must print and handwrite. Examples span every facility type: Banner Health, UPMC, Baptist Health, Memorial Healthcare System, CrescentCare, UCHealth, Hartford Hospital, and many others.

- **Image-only scans: 5 (10%)**. The worst technical category. Nemaha Valley Community Hospital's form is a photocopy scanned by a Savin copier in 2016. Tioga Medical Center and Colquitt Regional Medical Center also provide image-only PDFs. Black River Memorial Hospital's Word-generated PDF renders virtually all text as 970 embedded images — technically a digital file but functionally an image scan. Mercy Health–Fairfield's currently linked version regressed from a text-layer PDF to an image-only scan.

## Page Counts and Field Counts

**Page counts** range from 1 to 3 pages. Single-page forms are most common (~20 orgs), followed by 2-page forms (~24 orgs). Only 3 organizations use 3-page forms (Michigan Medicine, Baptist Health Lexington, UW Medical Center, Montefiore Nyack).

**Field counts** range from 10 (EyeSouth Partners, East Georgia Healthcare Center) to 83 (A.O. Fox/Bassett Healthcare). Among fillable forms, the median is ~54 fields. Among all forms, estimated field counts cluster around 15–22, reflecting the typical set of patient demographics, record-type checkboxes, purpose selection, and signature blocks.

## Digital-First vs. Scanned Paper

Approximately **45 of 50 forms (90%) are digitally authored** — created in Word, InDesign, or similar tools and exported to PDF. Only 5 are scans of paper originals. However, "digitally authored" does not mean "digitally usable": 31 of those 45 digital-origin PDFs have zero fillable fields, making them functionally print-and-fill documents despite their digital provenance. One notable case: Boone County Health Center publishes its form as a .docx file rather than PDF — unusual and less accessible.

## Layout, Typography, and Visual Design

Most forms follow a predictable structure: patient demographics → recipient/direction → record types → purpose → legal disclosures → signature. Layout quality is generally adequate — **38 of 50 forms (76%) are rated as having clear layouts** in structured scoring. Common design problems include:

- **Staff-facing elements left on patient documents**: Coast Plaza Hospital includes "PATIENT LABEL" boxes; Cottage Hospital's form shows "PAGE 14 OF 28" from its parent policy document; Columbus Community Hospital exposes internal filing codes.
- **Dense single-page compression**: Decatur County Hospital fits 61 fields and multiple legal paragraphs onto one page. UCHealth compresses 28 record-type checkboxes, a full fee schedule, and six disclosure statements onto a single page.
- **Typographical errors persisting across revisions**: Hendrick Health misspells "HIPAA" as "HIPPA" throughout; San Luis Valley Health has "INFORMATION REQUIRIED"; Community Health Center Inc. has "in response to his authorization" (should be "this").
- **Font encoding corruption**: Mercy General Hospital's form produces garbled text when extracted (e.g., "3DWLHQW ,GHQWL¿FDWLRQ" for "Patient Identification"), rendering it inaccessible to screen readers.

## Instructions

**Only ~15 of 50 organizations (30%) include instructions** with their forms. Notable examples of good instruction design: Huntington/Northwell provides companion instruction documents with annotated visual examples; UPMC publishes a separate plain-language instruction guide; Owensboro Health includes a dedicated 2-page companion explaining each section; and The Valley Hospital offers a full-page instruction sheet with practical examples. Most forms simply present blank fields with no guidance.

## Multilingual Support

**17 of 50 organizations (34%) offer multilingual forms**, almost exclusively English/Spanish. Memorial Healthcare System stands out with trilingual availability (English, Spanish, Haitian Creole) — reflecting South Florida demographics. Several FQHCs appropriately serve their communities: Virginia Garcia, CrescentCare, El Centro de Corazón, East Georgia Healthcare Center, and Anchorage Neighborhood Health Center all provide Spanish versions. Small rural hospitals offering Spanish forms include Nemaha Valley (Kansas), Columbia Memorial (Oregon), San Luis Valley (Colorado), and Myrtue Medical Center (Iowa) — commendable given their resource constraints. However, quality gaps exist: DHR Health's Spanish form is an image-only scan while the English version has fillable fields, and Columbia Memorial's Spanish form is ~8 years older than its English counterpart.

## Notable Exemplars

**Best document craftsmanship**: A.O. Fox/Bassett Healthcare Network's form (83 fillable fields, portal-first default delivery, 10 numbered sections) and Hospital of the University of Pennsylvania (70 fillable fields, ADA-accessible design, detailed instructions) represent the highest technical quality. Lankenau/Main Line Health's form includes embedded PRINT, SAVE AS, EMAIL, and RESET action buttons — genuinely digital-first design.

**Worst document craftsmanship**: Nemaha Valley Community Hospital's decade-old image-only photocopy with typewriter-style fonts, an exposed internal cost worksheet on page 2, and both pages erroneously labeled "Page 2 of 2" represents the low end. Black River Memorial Hospital's 2025-vintage Word file that renders as 970 embedded images is a particularly striking failure — a modern authoring tool producing an inaccessible output. Cottage Hospital's form was only recoverable via the Wayback Machine due to Cloudflare blocking.

## Summary

The typical ROI form in this batch is a **2-page, digitally authored but non-fillable PDF in English only, with 15–22 fields, no instructions, and a clear but dense layout**. The 28% fillable rate means nearly three-quarters of patients face a mandatory print-and-handwrite workflow. The 10% image-only scan rate — concentrated in smaller rural facilities — represents the most severe accessibility failure. Multilingual support at 34% is encouraging but unevenly distributed, and instruction inclusion at 30% leaves most patients navigating complex legal forms without guidance.
