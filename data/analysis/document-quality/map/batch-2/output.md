# Document Quality Deep Dive — Batch 2 (68 Organizations)

## Format Breakdown: Fillable vs. Flat vs. Image-Only

Of 68 organizations, the primary ROI form breaks down as follows:

| Format | Count | % |
|---|---|---|
| Fillable/interactive PDF | 14 | 21% |
| Flat (print-and-fill) PDF with text layer | 51 | 75% |
| Image-only scan (no usable text layer) | 3 | 4% |

The dominant form type is the **flat, born-digital PDF** — a document created in Word or a layout tool, exported to PDF, but with zero interactive fields. Three-quarters of organizations fall into this category. Only one in five offers a genuinely fillable form. The three image-only scans — **Mayers Memorial Hospital** (a CHA template photocopied to PDF), **Bath Community Hospital** (a scanned paper form with error-ridden OCR), and **Vanderbilt University Medical Center** (surprisingly, a 2023-revised form from a major academic center) — represent the worst tier of document quality. Several additional organizations have image-only scans as *secondary* forms (Proliance Surgeons form-1, Southwell form-2, Community Medical Center Toms River forms 1–2, GI Alliance form-3, Mercy Health–Springfield form-3), though their primary forms have text layers.

## Page Counts and Field Counts

- **Page counts**: 32 forms are 1 page, 35 are 2 pages, 1 is 3 pages (Community Medical Center/RWJBH). Average: 1.5 pages.
- **Field counts**: Range from 7 (Baton Rouge Clinic's minimalist Right of Access form) to ~100 (Emory University Hospital's comprehensive fillable form). Average: 25 fields. Median is approximately 18.

Among the 14 fillable forms, field counts tend to be substantially higher (median ~54), reflecting the investment required to make a form truly interactive. The standouts: **Emory** (~100 fields), **Northwestern Memorial** (79 fields with a matching 82-field Spanish version), **Newton-Wellesley/MGB** (78 fields), **UMMC** (70 fields on the Spanish version only), and **Flowers Hospital** (66 fields). At the other end, **Labette Health** achieves fillability with just 18 fields via a Formstack web form — a fundamentally different approach.

## Digital-First vs. Scanned Paper

The vast majority of forms (65 of 68, 96%) are born-digital — created in software rather than scanned from paper. However, "born-digital" does not mean "digital-friendly": 51 of those 65 have zero fillable fields, forcing a print-handwrite-scan workflow despite being authored in tools that could easily produce interactive PDFs. This is the batch's most pervasive quality gap. Notable offenders include **Fenway Health**, which created a carefully designed single-page PDF with 7 fonts but no fillable fields, and **CrescentCare**, whose born-digital form is distributed online but contains no interactive elements.

The few image scans include forms with corrupted or absent text layers: **Canton-Potsdam Hospital's** OCA-960 has a garbled text layer from font encoding errors, and **Pocahontas Memorial Hospital** has a systematic text encoding defect (broken "ti" ligature) that impairs screen readers.

## Layout, Typography, and Visual Design

Most forms achieve at least adequate organization: 62 of 68 (91%) were rated as having clear layout. The typical form follows a logical top-to-bottom sequence — patient demographics, release direction, record types, legal disclosures, signature. Section numbering or lettering is common. However, "clear" does not mean "well-designed." Dense legal paragraphs on page 2 are nearly universal, and few forms use visual hierarchy (bold headers, white space, bullet points) to aid comprehension.

**Best document craftsmanship**: **Flowers Hospital** (HIM-1406) — a single-page fillable PDF with 66 fields, bilingual English/Spanish versions, clear section headers, and a logical flow explicitly centering patient self-access. **Group Health Cooperative of SCW** — a fillable single-page form using plain-language question headers ("What records do you want?", "How would you like your records delivered?"). **Lankenau Medical Center/Main Line Health** — a fillable PDF with built-in PRINT, SAVE AS, EMAIL, and RESET action buttons.

**Worst document craftsmanship**: **Mayers Memorial Hospital** — an image-only scan mislabeled on the website as "Disclosure of Privacy Practices," with no text layer and no submission instructions. **GI Alliance** — form-2 (Granite Peaks) has a completely garbled text layer from broken Type 3 fonts; form-3 (University GI) is a truncated scan missing the signature block. **Bath Community Hospital** — a scanned form with OCR errors throughout ("ERNOTE," "LABffEST RESULTS," "IMAGINE REPORTS"). **Boone County Health Center** publishes its form as a `.docx` file rather than PDF, creating accessibility barriers for patients without Microsoft Word.

## Instructions

Only 16 of 68 organizations (24%) include instructions with their forms. These range from dedicated companion documents (**Fenway Health's** 3-page FAQ guide, **CentraCare's** explanatory instruction sheet, **Phelps Hospital/Northwell's** annotated visual examples) to integrated instruction pages (**Blessing Hospital's** page-2 field-by-field guidelines, **The Valley Hospital's** full-page step-by-step walkthrough). The remaining 76% of forms provide no guidance beyond field labels — patients must determine independently how to complete and submit the form.

## Multilingual Support

18 of 68 organizations (26%) offer forms in languages beyond English. Spanish is universal among these; **Newton-Wellesley/MGB** adds Portuguese (trilingual), and **Prevea Health** stands out with four languages: English, Hmong, Somali, and Spanish — a rare accommodation reflecting local Wisconsin demographics. Translation quality varies: **Desert Regional Medical Center's** Spanish form contains at least 9 typographical errors and omits the delivery method section entirely; **Emory's** Spanish form has character encoding issues rendering accented characters as digits.

## Notable Observations

The gap between born-digital authoring and fillable delivery is this batch's defining quality story. Organizations invest in layout tools to create clean, well-structured documents — then export them as flat PDFs that defeat the purpose of digital distribution. The 14 fillable forms demonstrate that the technical barrier is trivial: organizations that choose to make forms fillable typically produce high field counts (median 54) with comprehensive coverage. The remaining 51 flat PDFs represent a deliberate or habitual omission, not a technical limitation. **Sturdy Memorial Hospital** exemplifies the best case: 59 fillable fields, granular record-type selection with date ranges, and active January 2025 maintenance — a genuinely digital-first document from a community hospital.
