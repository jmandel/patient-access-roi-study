# Document Quality Across the ROI Form Study

## The Landscape at a Glance

This analysis examines 244 healthcare organizations' Release of Information forms as technical artifacts — the documents patients must navigate to exercise their federal right of access to health records. The picture that emerges is of an industry that has largely moved past paper but stopped short of digital usability: the typical ROI form is a born-digital PDF that nonetheless forces patients to print, handwrite, scan, and mail.

## Format Distribution: The Fillability Gap

Across all four batches (244 organizations with evaluable forms), the format breakdown is remarkably consistent:

| Format | Count | Percentage |
|---|---|---|
| Fillable/interactive PDF | 60 | 25% |
| Flat digital PDF (text layer, no fields) | 163 | 67% |
| Image-only scan (no text layer) | 14 | 6% |
| Non-PDF format (Word .doc/.docx) or web-only | 7 | 3% |

**Three-quarters of organizations distribute forms that were authored digitally but lack interactive fields.** This is the study's most consequential document-quality finding. These are not legacy artifacts scanned from filing cabinets — they are documents created in Microsoft Word, Adobe InDesign, or similar tools, exported to PDF, and posted online without the additional step of adding fillable form fields. The technical barrier to closing this gap is trivial: adding AcroForm fields to an existing PDF layout is a matter of hours, not months. Yet across teaching hospitals, community hospitals, FQHCs, and physician practices alike, the flat PDF dominates.

The fillable minority (25%) is not randomly distributed. System-affiliated organizations show higher fillability rates — HCA Healthcare deploys a standardized 52-field fillable form across multiple facilities (MountainView, Medical City Dallas, TriStar Centennial, Riverside Community), and Providence, Duke Health, and Main Line Health similarly propagate fillable templates system-wide. But system affiliation is neither necessary nor sufficient: Olmsted Medical Center (independent, 62 fillable fields) and Sturdy Memorial Hospital (community hospital, 59 fillable fields) demonstrate that any organization can produce high-quality fillable documents.

The 6% image-only scan rate — approximately 14 organizations — represents the floor of document quality. These forms cannot be read by screen readers, filled electronically, or even reliably searched. The image-scan category clusters at smaller and government-owned facilities (Troy Regional Medical Center, Tioga Medical Center, Colquitt Regional Medical Center, Nemaha Valley Community Hospital), but is not exclusive to them. Vanderbilt University Medical Center — a major academic teaching hospital — distributes image-only PDF scans for its authorization forms despite offering a parallel digital portal. Broward Health's English-language form is a 200 DPI grayscale scan from 2014, while its Spanish, Haitian Creole, and Portuguese translations are clean digital documents — the primary language version is the worst-quality artifact.

## Page and Field Counts

Page counts cluster tightly across the study. Roughly **50% of forms are single-page** and **40% are two pages**, with only a handful reaching three pages (Michigan Medicine, Providence St. Vincent, Montefiore Nyack, Baptist Health Lexington) and one outlier at five pages (St. Joseph's Hospital Phoenix). The average is approximately 1.5 pages. There is no evidence that more pages correlate with better quality — many of the study's best forms achieve comprehensive coverage on a single page.

Field counts tell a more interesting story. Across all forms, the median is approximately **18–20 fields**, reflecting the standard set of patient demographics, record-type checkboxes, purpose selection, and signature blocks. But the range spans from **7 fields** (Baton Rouge Clinic's minimalist Right of Access form) to **103 fields** (NewYork-Presbyterian's Tripartite authorization). Among fillable forms specifically, the median jumps to approximately **54 fields** — organizations that invest in interactivity tend to build comprehensive forms with granular record-type selection, multiple delivery options, and distinct date-range inputs. The top tier includes Yale New Haven Hospital (97 fields), NewYork-Presbyterian (103), A.O. Fox/Bassett (83), Northwestern Memorial (79), Mass General Hospital (78), and Providence St. Vincent (72).

This bifurcation suggests that fillability is a proxy for overall form investment: organizations that take the step of adding interactive fields typically also invest in more granular content design.

## Digital Authoring vs. Digital Usability

Approximately **90–96% of forms across batches are born-digital** — created in software rather than scanned from paper originals. This is encouraging as a baseline but misleading as a quality signal. "Born-digital" means the text layer is intact and the document is searchable, but it does not mean the form is fillable, accessible, or well-designed. The vast majority of born-digital forms still require a print-handwrite-scan workflow.

A handful of organizations distribute forms in unusual formats: Fallon Medical Complex, ENT & Allergy Associates, and Boone County Health Center publish Word .doc or .docx files rather than PDFs — fragile format choices that assume patients have compatible software. Labette Health bypasses PDF entirely with a Formstack web form. Nevada Health Centers created forms in Adobe Illustrator with text rendered as vector paths — visually clean but with zero extractable text, making them functionally equivalent to image scans despite being born-digital.

Several organizations show **quality regression over time**. University of Iowa Hospitals dropped from 50 fillable fields (2021 version) to zero (2024 version). NorthLakes Community Clinic similarly regressed from a 54-field fillable 2022 form to a non-fillable 2023 replacement. Mercy Health–Fairfield replaced a functional text-layer PDF with an image-only scan. These regressions demonstrate that document quality improvement is not monotonic — organizational changes, template migrations, or simple inattention can erase prior gains.

## Instructions and Guidance

Across the study, only **roughly 30% of organizations include any form of instructions**. The batch-level estimates range from 24% to 47%, with an overall figure near one-third. This means approximately **two-thirds of patients encounter complex legal authorization forms with no guidance** beyond field labels — expected to independently interpret terms like "Designated Record Set," "Abstract," "psychotherapy notes," or "USCDI."

Where instructions exist, quality varies enormously. The best examples are genuinely patient-centered:

- **Cherokee Health Systems** provides color-coded annotated instructional guides in English and Spanish — the most visually sophisticated approach observed.
- **Northwell Health** (Phelps/Huntington) publishes companion documents with annotated visual examples using fictional patient names.
- **Duke University Hospital** offers a 3-page companion with plain-language definitions of each record type.
- **Fenway Health** provides a 3-page FAQ guide explaining every form section.
- **Intermountain Medical Center** uses conversational, question-based section headers ("What information do you want?") that lower cognitive barriers.

These examples prove that effective instructional design is achievable. Their rarity reflects an industry-wide failure to consider the patient's perspective when designing authorization workflows.

## Multilingual Support

Approximately **33–37% of organizations offer forms in more than one language**, with Spanish as the near-universal second language. Beyond Spanish, a small number of organizations serve additional communities:

- **Broward Health**: English, Spanish, Haitian Creole, Portuguese (4 languages — the study maximum)
- **Prevea Health**: English, Spanish, Hmong, Somali (4 languages)
- **NewYork-Presbyterian**: English, Spanish, Chinese
- **Newton-Wellesley/MGB**: English, Spanish, Portuguese
- **Olmsted Medical Center**: English, Spanish, Somali

These multilingual outliers typically reflect local community demographics rather than national diversity strategies. Translation quality is uneven: Desert Regional Medical Center's Spanish form contains at least nine typographical errors and omits the delivery method section entirely; DHR Health's Spanish version is an image-only scan while the English form has fillable fields; and several organizations' Spanish translations lag years behind their English counterparts.

## The Typical ROI Form

Synthesizing across all batches, the modal ROI form in the United States is:

- **A 1–2 page, born-digital PDF** created in Microsoft Word
- **Non-fillable** — requires printing and handwriting
- **English-only**, with no multilingual alternative
- **~18–20 fields**: patient name, DOB, address, record source, record destination, record type checkboxes (5–10 categories), purpose, date range, signature, date
- **No instructions** beyond field labels
- **Clear but dense layout** — adequate organization but little visual hierarchy or white space
- **Legal-forward**: HIPAA boilerplate and revocation language occupy significant page real estate, often in small type

This typical form is functional but far from patient-friendly. It assumes the patient has a printer, can read English legal prose, understands medical record categories, and knows where to send the completed form.

## Best vs. Worst: The Quality Spectrum

**The best-crafted documents** demonstrate what is achievable:

- **Yale New Haven Hospital** (97 fillable fields) — the technical ceiling for interactivity
- **NewYork-Presbyterian** (103 fillable fields, trilingual, 16+ record-type categories) — comprehensive and inclusive
- **Flowers Hospital** (66 fillable fields, InDesign-produced, bilingual, patient-centered "Myself" framing) — professional design with patient voice
- **Lankenau/Main Line Health** — embedded PRINT, SAVE AS, EMAIL, and RESET action buttons: genuinely digital-first
- **A.O. Fox/Bassett** (83 fillable fields, portal-first default delivery) — progressive digital integration
- **UCSF Medical Center** — carries explicit accessibility remediation notes ("Made accessible 7/23"), signaling institutional commitment

**The worst-crafted documents** expose how far the floor sits below the ceiling:

- **Troy Regional Medical Center** — a decade-old image-only grayscale scan hosted on a defunct legacy website over unencrypted HTTP, with no text layer, no fillable fields, and no submission instructions
- **ENT & Allergy Associates** — a 17-year-old orphaned Word .doc file with no fillable fields, no branding, no submission instructions, and confusing ALL-CAPS legal text
- **Nemaha Valley Community Hospital** — a photocopy scanned by a Savin copier in 2016, with both pages erroneously labeled "Page 2 of 2" and an exposed internal cost worksheet
- **Nevada Health Centers** — forms created in Adobe Illustrator that look professional but have zero extractable text
- **Good Samaritan Medical Center** — exposes raw mail-merge placeholders (`«PatientNumber»`, `«PatientName»`) to patients

The distance between best and worst is not a matter of degree but of kind. The best forms are genuinely digital-first artifacts designed for patient self-service. The worst are organizational afterthoughts — internal documents repurposed or neglected, never designed with the patient in mind.

## Patterns by Organization Type

Several structural patterns emerge:

**System affiliation is the strongest predictor of fillability.** HCA, Providence, Duke Health, Main Line Health, and Mass General Brigham all deploy standardized fillable templates across their facilities. System affiliation provides both the resources to invest in form design and the mechanism to propagate quality (or mediocrity) at scale.

**Teaching hospitals occupy both ends of the spectrum.** Yale, Duke, Penn, and Northwestern produce some of the study's best documents. But Vanderbilt distributes image-only scans, and OSU Wexner's primary form lacks a text layer. Academic affiliation provides no guarantee of document quality.

**Critical access hospitals and small rural facilities are disproportionately represented among image-only scans** (Tioga, Nemaha Valley, Colquitt Regional, Mayers Memorial, Bath Community). Resource constraints are a plausible explanation, but counterexamples exist: Decatur County Hospital (a small Iowa CAH) produces a 61-field fillable form, and Gritman Medical Center (a small Idaho hospital) achieves 63 fillable fields.

**FQHCs show strong multilingual support** (Virginia Garcia, CrescentCare, El Centro de Corazón, East Georgia Healthcare Center, Anchorage Neighborhood Health Center) but uneven technical quality — many FQHC forms are non-fillable despite serving populations with limited resources for printing and mailing.

## What Would a Baseline Standard Require?

Moving the industry to a minimum acceptable standard would require five changes, none of which involves new technology:

1. **Fillable fields on every form.** The tools already exist in every PDF authoring workflow. This is a configuration choice, not a development project. A reasonable target: every form field that accepts patient input should be an interactive AcroForm field.

2. **At least one page of plain-language instructions.** Terms like "Designated Record Set" and "psychotherapy notes" are meaningless to most patients. A companion page with definitions and a step-by-step walkthrough would address the most common confusion points.

3. **Spanish translation for all organizations**, with additional languages driven by local demographics. The 33–37% multilingual rate is inadequate for a country where 13% of the population speaks Spanish at home.

4. **No image-only scans.** Every form should have an intact text layer at minimum. This is a basic accessibility requirement under Section 508 and ADA principles, and it costs nothing to maintain when forms are authored digitally.

5. **Annual review and version control.** Forms referencing "UB-92" (replaced in 2007), citing incorrect law names ("Health Information Portability and Accountability Act"), or carrying decade-old revision dates signal organizational neglect. A simple annual review process — does the form still reflect current practice? — would catch these drift failures.

None of these changes requires regulatory mandates, new software, or significant capital investment. The 25% of organizations already producing fillable, well-designed forms demonstrate that the standard is achievable. The remaining 75% are not facing a technical barrier — they are facing an attention barrier. The ROI form is a low-priority administrative artifact in most health systems, and it shows. Elevating it to a patient-facing document worthy of design attention is the fundamental shift required.
