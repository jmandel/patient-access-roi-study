# Batch 3 — Surprising Findings

## The PatientPop Ghost Form Problem

A generic, unbranded "Authorization for Release of Medical Records" template from PatientPop (hosted at `sa1s3.patientpop.com/assets/docs/223399.pdf`) surfaced as a search result for at least three unrelated organizations: **Labette Health** (KS), **Mayers Memorial Hospital** (CA), and **Consensus Health** (NJ). In each case, this one-page template has no organizational branding, no submission instructions, and is missing core HIPAA authorization elements. For Consensus Health, it was the *only* ROI form discoverable online — a for-profit physician practice in New Jersey effectively has no functional records request pathway, earning a D grade (2.05) and the lowest findability score possible (1). The PatientPop artifact appears to be a legacy website-platform byproduct that pollutes search results, creating a false sense that a valid form exists when it doesn't.

## Small Rural Hospitals Outperforming Major Teaching Institutions

Several small critical access hospitals deliver patient experiences that rival or exceed those of major academic medical centers. **Wayne County Hospital** (25 beds, rural Kentucky, government-owned) offers a dedicated patient access form titled "Request to Review/Receive Medical Information," a parallel online web form for electronic submission, and transparent fee disclosure citing Kentucky's free-copy statute (KRS 422.317) — earning a B grade (3.65). Meanwhile, **OSU Wexner Medical Center** (1,439 beds, major teaching hospital) scores only a C (3.05) with a mail-only, non-fillable generic authorization form. Similarly, **Labette Health** (99 beds, independent community hospital in Parsons, KS) built a fully digital Formstack workflow with electronic signatures and photo ID upload — scoring a 5 in technical accessibility — while **Hospital of the University of Pennsylvania** (800 beds) requires patients to physically mail their fillable PDF despite having 70 interactive fields.

## The Typo in the URL

Labette Health's Formstack form lives at `labetteheatlh.formstack.com` — note the transposed "lh" in "health." This typo has been baked into the hospital's digital records infrastructure. If anyone corrects the subdomain upstream, every existing link breaks. This is a fragile single point of failure for the hospital's entire digital-first records strategy.

## Boone County's .docx Experiment

**Boone County Health Center** (Albion, NE) publishes its ROI authorization form as a Microsoft Word `.docx` file rather than a PDF — the only organization in this batch to do so. This creates an accessibility barrier for patients without Word, but it also suggests a small, resource-constrained facility (25 beds, government-owned) trying to make a form editable without knowing how to create fillable PDFs. They offer a dedicated ROI email address (`Roi@boonecohealth.org`) and encrypted email delivery — thoughtful touches that contrast with the format choice.

## For-Profit System Forms Are Not Always Worse

**Flowers Hospital** (Dothan, AL) and **Merit Health Central** (Jackson, MS), both for-profit CHS hospitals, deploy the same HIM-1406 form — a patient-titled "Patient Request for Health Information" with 66 fillable fields, "Myself" as the first recipient option, bilingual English/Spanish versions, and Swellbox online portals. Flowers earned the batch's only A grade. This CHS system-standardized form outperforms the generic authorization forms at many nonprofit institutions, challenging the assumption that for-profit ownership correlates with worse patient access.

## The Witness Signature Trap

Witness signature lines appear on forms from **Duly Health and Care**, **Broward Health**, **Wayne County Hospital**, **Cuba Memorial Hospital**, **Columbus Community Hospital**, and **Cottage Hospital** — with no indication of whether witnessing is actually required. HIPAA does not require witness signatures for patient access requests. At Duly, the witness is explicitly required for personal-use requests but exempted for care-transfer requests — an inversion of what patient-centered design would suggest. These ambiguous witness lines likely deter patients completing forms at home, particularly in rural areas where finding a witness adds logistical burden.

## Four-Language Form in South Florida

**Broward Health** offers its ROI form in English, Spanish, Haitian Creole, and Portuguese — the widest language coverage in this batch and a genuine reflection of South Florida demographics. Yet the English version is an image-only scan (no text layer, no fillable fields) while the translated versions are digitally created PDFs with text layers. The primary-language form is technically the worst artifact.

## Outdated Forms as Institutional Archaeology

Form revision dates reveal remarkable institutional inertia. **Cordova Community Medical Center** (Alaska, 13 beds) uses a form last updated in 2016. **Columbus Community Hospital** (Nebraska) dates to 2014. **Troy Regional Medical Center** (Alabama) has a form from February 2015 that is only findable on a defunct legacy website. **DHR Health** (Edinburg, TX) still carries its former "Doctors Hospital at Renaissance" branding on a 2015 form. These are not edge cases — many forms predate the 21st Century Cures Act's information blocking rules (2021) and the 2024 42 CFR Part 2 revisions, meaning they may not reflect current legal requirements.

## The EHI Export Unicorn

**Owensboro Health** (Owensboro, KY) explicitly offers "EHI Export" as a delivery format option, with a detailed explanation covering all ePHI across the organization and named Community Connect Partners, delivered in TSV format. This is the only organization in the batch to offer anything resembling the USCDI-based electronic health information export contemplated by the Cures Act — and it's a 477-bed regional nonprofit, not one of the major academic systems.

## FQHCs: Mission-Aligned but Technically Behind

FQHCs in this batch consistently demonstrate mission-aligned design choices — bilingual forms (CrescentCare, Nevada Health Centers, El Centro de Corazón), community-responsive language options (Nemaha Valley's Spanish form in rural Kansas), and text-message intake (Anchorage NHC). Yet none produces a fillable PDF. The organizations serving the most vulnerable populations offer the least digitally accessible form artifacts, creating an equity gap between intent and execution.
