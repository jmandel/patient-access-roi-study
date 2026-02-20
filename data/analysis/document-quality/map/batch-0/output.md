# Document Quality Deep Dive — Batch 0

## Format Classification: Fillable vs. Flat vs. Scan

Of the 62 organizations in this batch, **24 (39%)** provide fillable/interactive PDFs with functional AcroForm fields, **35 (56%)** distribute flat (print-and-fill) PDFs with a text layer but no interactive fields, and **3 (5%)** serve image-only scans with no text layer at all. The three image-only scans — Troy Regional Medical Center (grayscale JPEG at 200 DPI, dated 2015, served over unencrypted HTTP), JPS Health Network (2018 scan with no text layer), and Bath Community Hospital (scanned image with OCR errors) — represent the floor of document quality and are completely inaccessible to screen readers.

The flat-PDF category is notable because many of these forms were clearly authored digitally in layout software (InDesign, Word, etc.) but never had interactive fields added. MUSC Health, Goleta Valley Cottage Hospital, and University of Iowa Hospitals all distribute born-digital PDFs with clean text layers and zero fillable fields — a gap that is technically trivial to close. Iowa's form even *regressed* from 50 fillable fields (2021 version) to zero (2024 version). NorthLakes Community Clinic similarly regressed from a fillable 2022 form to a non-fillable 2023 version.

## Page and Field Counts

Page counts cluster tightly: **37 forms (60%)** are single-page, **22 (35%)** are two pages, and only **2 (3%)** reach three pages (Texas Oncology and UW Medical Center). One organization (Labette Health) has no PDF at all, using an online Formstack form exclusively.

Field counts range from **11** (Consensus Health's bare-minimum unbranded form) to **103** (NewYork-Presbyterian's Tripartite authorization). The median sits around 18–20 fields. The top tier of fillable forms is dramatically more interactive: NYP (103 fields), Texas Oncology (95), A.O. Fox/Bassett (83), Newton-Wellesley/MGB (78), UMMC (70), SSM Health DePaul (69), Flowers Hospital (66), and Ben Taub/Harris Health (65) all pack substantial interactivity into compact layouts. These high-field-count forms represent genuine digital-first design where every checkbox, text input, and date field is programmatically fillable.

## Digital-First vs. Scanned Paper

**58 of 62 organizations (94%)** distribute digitally authored documents with extractable text. Only 3 are image-only scans, and 1 (Fallon Medical Complex) distributes its form as a Microsoft Word .doc file rather than a PDF — an unusual and fragile format choice. The digital-first majority is encouraging, but "digitally authored" does not mean "digitally usable" — the majority of these born-digital forms still require printing and handwriting because they lack interactive fields.

## Layout, Typography, and Visual Design

Most forms follow a logical top-to-bottom flow with identifiable sections. Numbered sections are the most common organizational pattern (e.g., UW Medical Center's Items #1–7, Fisher-Titus's eight numbered sections, Intermountain's question-based headings). Layout quality is generally adequate but rarely excellent. Several forms cram dense content into single pages, resulting in small type and compressed sections (SSM Health DePaul, Ben Taub). Good Samaritan Medical Center and Piedmont Medical Center expose unprocessed template merge fields (`«PatientNumber»`, `«PatientName»`) — internal CMS artifacts visible to patients. Memorial Healthcare System's English PDF is bloated at 2.45 MB with 23 embedded fonts and garbled hidden content from template layers.

Standout design: Intermountain Medical Center's form uses conversational, question-based section headers ("What information do you want?") that lower cognitive barriers. Flowers Hospital's Adobe InDesign–produced form achieves clean visual hierarchy on a single fillable page. A.O. Fox/Bassett defaults delivery to the MyBassett Portal — a progressive design choice embedded in the form structure itself.

## Instructions and Guidance

Only **21 of 62 forms (34%)** include instructions of any kind. Most forms drop patients into fields with no guidance. Notable exceptions: Owensboro Health provides a separate 2-page plain-language companion instruction document; Fenway Health offers a 3-page FAQ guide explaining every form section; UW Medical Center includes a full instruction page with item-by-item guidance; and Northwell Health (Phelps/Huntington) provides companion documents with annotated visual examples using fictional patient names — the most patient-friendly instructional approach observed.

## Multilingual Support

**23 of 62 organizations (37%)** offer forms in more than one language. Spanish is universal among multilingual providers (23/23). Three organizations go further: Good Samaritan Medical Center and Memorial Healthcare System provide **Haitian Creole** versions alongside English and Spanish — meaningful for their South Florida communities. NewYork-Presbyterian offers English, Spanish, and **Chinese**. Newton-Wellesley/MGB offers English, Spanish, and **Portuguese**. Olmsted Medical Center provides English, Spanish, and **Somali** — a distinctive choice reflecting Rochester, MN's refugee community.

## Notable Exemplars

**Best document craftsmanship**: NewYork-Presbyterian (103 fillable fields, trilingual, 16+ record-type checkboxes across 2 clean pages) and Flowers Hospital (66 fillable fields on a single InDesign-produced page with professional Spanish translation and patient-centered "Myself" framing) represent the high-water mark.

**Worst document quality**: Troy Regional Medical Center's form is a decade-old, image-only grayscale scan hosted on a defunct legacy website over HTTP, with no text layer, no fillable fields, and no submission instructions. Consensus Health's form is an unbranded single page with 11 fields, no organizational identity, no submission instructions, and missing HIPAA-required elements. JPS Health Network's 2018 image-only scan is particularly striking because the same organization produced modern fillable PDFs for its 2025 HIE forms — demonstrating capability it chose not to apply to patient access.

**Notable regression**: University of Iowa Hospitals dropped from 50 fillable fields to zero between form revisions, and NorthLakes Community Clinic similarly regressed — evidence that form modernization is not monotonically improving.
