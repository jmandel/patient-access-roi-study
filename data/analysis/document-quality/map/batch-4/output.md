# Batch 4 — Document Quality Deep Dive

## Format Distribution: Fillable vs. Flat vs. Image-Only

Across the 62 organizations in this batch with evaluable primary forms, the dominant format is the **flat, non-fillable PDF with a text layer** — digitally authored but lacking interactive fields. Approximately **46 organizations (~74%)** fall into this category: born-digital documents exported from word processors without activating form fields, forcing patients to print and handwrite.

**Fillable/interactive PDFs** account for roughly **13 organizations (~21%)**. These include the HCA Healthcare standardized form used across MountainView Hospital, Medical City Dallas, TriStar Centennial, and Riverside Community Hospital (52 fields each); Yale New Haven Hospital (97 fields — the highest in the batch); Mass General Hospital (78 fields); Providence St. Vincent (72 fields); SSM Health DePaul (69 fields); Duke University Hospital (67 fields); Gritman Medical Center (63 fields); Olmsted Medical Center (62 fields); Decatur County Hospital (61 fields); Desert Valley Hospital (47 fields); Advocare (41 fields); and UCSF Medical Center (39 fields). Providence Sacred Heart's dedicated patient access form adds another 45-field fillable example. System affiliation is a clear predictor: HCA, Duke Health, and Providence all deploy fillable forms system-wide.

**Image-only scans or functionally inaccessible formats** account for roughly **3 primary forms (~5%)**. Natividad Medical Center's primary form is a 200 DPI grayscale scan with no text layer. Nevada Health Centers' forms were created in Adobe Illustrator with text rendered as vector paths — born-digital but with zero extractable text, functionally equivalent to image scans. Mercy Health–Fairfield's currently linked 2024 form replaced a functional text-layer PDF with an image-only scan — an accessibility regression.

Three organizations effectively **have no evaluable standalone form**: HopeHealth and Minnie Hamilton route patients exclusively to vendor portals (HealthMark and ChartRequest respectively) with no downloadable form, while East Georgia Healthcare Center's forms are designed for *incoming* records from other providers, not patient self-access.

## Page Counts and Field Counts

Page counts cluster tightly: **1–2 pages is the norm**. Roughly 30 primary forms are single-page documents; another 25 are two pages. St. Joseph's Hospital Phoenix is the outlier at 5 pages (a dedicated patient access form with structured denial documentation). Michigan Medicine and Providence St. Vincent are 3-page forms.

Field counts range dramatically: from **10 fields** (Advocate Good Samaritan's streamlined patient access form) to **97 fields** (Yale New Haven Hospital's comprehensive fillable authorization). The median sits around 18–22 fields. Among fillable forms, the range is 39–97, reflecting that organizations investing in interactivity tend to include more granular options. Among flat PDFs, most have 12–25 fields.

## Digital-First vs. Scanned Paper

The overwhelming majority of forms — roughly **95%** — are clearly digital-first, created in word processors or design tools rather than scanned from paper. True scanned paper forms are rare as primary documents, with Natividad's grayscale scan being the clearest example. Several organizations retain scanned versions as secondary documents (Duke form-3, Erlanger's behavioral health form, Bayshore/HMH's Pascack Valley form), but these are not the primary pathway. The near-universal digital origin makes the prevalence of non-fillable PDFs especially notable: these organizations created documents digitally but chose not to — or didn't know how to — add interactive fields.

## Layout, Typography, and Visual Design

Most forms follow a standard **top-to-bottom flow**: patient demographics → record source/destination → record type selection → purpose → legal disclosures → signature. This convention is nearly universal and generally produces logical, navigable documents. Single-page forms risk visual cramping (SSM Health DePaul packs 69 fields into one page; UCHealth similarly compresses dense content). Two-page forms generally breathe better.

Typography is functional but rarely polished. Bold section headers appear in well-designed forms (WakeMed, Barnes-Jewish, Advocate Good Samaritan), while weaker forms present undifferentiated walls of legal text (ENT & Allergy Associates, Consensus Health). Notable design defects include Hillcrest Hospital Claremore's checkbox characters extracting as Khmer script (a font-mapping issue breaking assistive technology), Pocahontas Memorial Hospital's systematic "ti" ligature drops throughout the PDF, and Phelps Memorial's incorrect citation of "Health Information Portability and Accountability Act."

## Instructions

Only about **one-third of organizations** include completion instructions. Standout examples include Duke University Hospital's 3-page companion instruction document with plain-language definitions of each record type, Blessing Hospital's field-by-field guidelines on page 2, Mankato Clinic's section-by-section instruction page, and UPMC Presbyterian's companion guide with plain-language record type explanations. Most forms assume patients will understand terms like "Designated Record Set," "Abstract," or "USCDI" without help.

## Multilingual Support

Roughly **23 organizations (~37%)** provide multilingual forms, almost exclusively **English/Spanish**. Olmsted Medical Center is a notable exception, offering English, Spanish, and **Somali** — responsive to Rochester, Minnesota's significant Somali community. Several HCA facilities (MountainView, Medical City Dallas, TriStar Centennial, Riverside Community) share a standardized Spanish translation. Nevada Health Centers and Valleywise Health embed bilingual content on a single form page rather than providing separate documents. Some Spanish translations have quality issues: UCSF's Spanish version contains three spelling errors and omits a radiology request section; Valleywise's references a nonexistent form number; WakeMed's leaves key field labels untranslated.

## Notable Examples

**Exceptionally good craftsmanship**: Yale New Haven Hospital's 97-field fillable PDF represents the technical ceiling — every data-entry point is interactive. Duke University Hospital pairs 67 fillable fields with a standalone instruction guide, a rare combination. UCSF's form carries explicit accessibility remediation notes ("Made accessible 7/23"), signaling institutional commitment to digital access. Olmsted Medical Center's trilingual, 62-field fillable form demonstrates that even independent practices can produce high-quality documents.

**Exceptionally poor craftsmanship**: ENT & Allergy Associates' primary form is an orphaned Word .doc file last modified in January 2009, with no fillable fields, no submission instructions, no organizational branding, and confusing ALL-CAPS legal text — scoring the batch's lowest overall grade (D, 2.05). Natividad Medical Center's primary form is an image-only scan that cannot be read by screen readers, filled electronically, or searched — a regression from its older text-layer form. Nevada Health Centers created visually clean bilingual forms in Adobe Illustrator but inadvertently made them completely inaccessible by rendering text as vector paths rather than character data.
