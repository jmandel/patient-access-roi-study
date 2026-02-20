# Document Quality Deep Dive — Batch 7

## Fillability and Interactivity

Across the 190 organizations studied, only **50 (26%)** offer fillable/interactive PDFs with functional form fields. The remaining **140 (74%)** provide flat, print-and-fill PDFs that require patients to print, handwrite, and physically return the form. Among the flat PDFs, a subset are particularly problematic: **image-only scans** with no text layer at all. Troy Regional Medical Center's form is a grayscale JPEG scan at 200 DPI — zero fillable fields, zero searchable text, completely inaccessible to screen readers, and served over unencrypted HTTP. Eight organizations scored a 1 on technical accessibility, meaning no usable digital form exists at all. Three orgs (Aaron E. Henry Community Health Services Center, Franklin Primary Health Center, Neshoba General Hospital) had no retrievable ROI form whatsoever — zero pages, zero fields.

Five organizations published forms as Word `.docx` files rather than PDFs, creating accessibility barriers for patients without Microsoft Word (notably Boone County Health Center, whose superseded 2017 version remains accessible at its original URL alongside the current form).

## Page Counts and Field Counts

The typical ROI form is remarkably compact: **53% are single-page** and **41% are two pages**, with a median of 1 page. Outliers include El Rio Health (16 pages — a compliance booklet, not a true request form), Betty Jean Kerr People's Health Centers (10 pages — an NPP misidentified as an ROI form), and Anaheim Global Medical Center (9 pages — also an NPP, not an ROI form). These high page counts signal that no actual request form was available, so the pipeline captured the nearest privacy-related document instead.

Field counts range from **7 to 103**, with a median of **20** and an interquartile range of 15–25. The most field-rich forms — NewYork-Presbyterian (103 fields), Texas Oncology (95), A.O. Fox Hospital (83), Northwestern Memorial (79), Massachusetts General (78) — are all fillable PDFs from major teaching hospitals or large systems. At the high end, 32 organizations offer fillable forms with 40+ interactive fields, representing genuinely digital-first design.

## Digital-First vs. Scanned Paper

Approximately **72 organizations** show evidence of digital-first design (forms created natively in software like Adobe InDesign or Word, with clean vector text and structured layouts). The standout is **Flowers Hospital**, whose HIM-1406 form packs 66 fillable AcroForm fields into a single page created in Adobe InDesign — every checkbox, text input, and selection is digitally interactive. At the opposite extreme, **103 organizations' narratives mention scanning**, though many of these have adequate text layers despite being scan-origin documents.

## Layout, Typography, and Visual Design

Clear layout is the strongest dimension: **87% of forms** received positive marks for logical organization. Most follow a predictable flow — patient demographics → record type selection → recipient → signature — which, while not creative, is functional. **48% use plain language**, while the rest lean on dense legal prose. Content design scores cluster at levels 3 (82 orgs) and 4 (97 orgs), with only 1 organization earning a 5: **Intermountain Medical Center**, whose patient self-access form uses question-based section headings ("What records do you want?", "How do you want your records delivered?") and limits the entire form to ~2,030 characters — concise, direct, and free of legal boilerplate.

## Instructions

**82 organizations (43%)** include instructions with their forms. When present, quality varies widely. Fenway Health pairs its one-page form with a companion three-page FAQ guide explaining every section in plain language — an exceptional practice. Most others embed minimal inline guidance. Critically, many forms lack **submission instructions**: Northwest Colorado Health's form, for instance, provides no fax number, mailing address, or email — a patient who completes the form has no idea where to send it.

## Multilingual Support

**63 organizations (33%)** offer multilingual forms. Spanish is nearly universal among these: **55 orgs** offer English/Spanish only. A few serve additional languages — Haitian Creole (Broward Health, Memorial Healthcare System), Chinese, Portuguese, Somali, and Hmong appear in small numbers. Flowers Hospital's Spanish version (HIM-1406S) is a professional, co-equal translation with identical structure and field count. By contrast, some organizations offer machine-generated translations of unclear quality.

## Notable Examples

**Best craftsmanship**: Flowers Hospital (Dothan, AL) — 66-field fillable single-page PDF, dedicated patient-access framing, English/Spanish versions, five delivery methods including password-protected removable media, plus a Swellbox online portal. Intermountain Medical Center (Murray, UT) — separate self-access and third-party forms with question-based headings and 48 fillable fields.

**Worst craftsmanship**: Troy Regional Medical Center (Troy, AL) — decade-old image-only scan on a defunct legacy website, zero text layer, no submission instructions, served over HTTP. Anaheim Global Medical Center (Anaheim, CA) — no ROI form at all; the only retrieved document is an outdated 2016 NPP with a page-numbering defect ("Page !1"), and patients are funneled to a third-party portal requiring account creation. La Clínica de La Raza requires patients to compose a letter and mail it to a P.O. Box — no form exists in any format.

## Summary

The "typical" ROI form is a flat, non-fillable, English-only, single-page PDF with about 20 fields, no instructions, and a generic third-party authorization structure. The gap between best and worst is enormous: the top tier offers fully interactive, multilingual, patient-centered documents with clear instructions and multiple delivery options, while the bottom tier offers image-only scans of decade-old paper forms — or no form at all.
