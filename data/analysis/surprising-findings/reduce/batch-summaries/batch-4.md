# Surprising Findings — Batch 4

## Rural Critical Access Hospitals Outperforming Major Systems

The most counterintuitive finding in this batch is that two tiny rural critical access hospitals produced better digital form experiences than several major-system community hospitals. **Gritman Medical Center** (Moscow, ID; independent CAH, ~25 beds) earned a B (3.75) with 63 fillable PDF fields and an email delivery option — uncommon for rural facilities. It also offers a "Major Documents for the Last 3 Years" shortcut for patients who don't know exact treatment dates, a design choice that suggests genuine patient empathy. Similarly, **Columbia Memorial Hospital** (Astoria, OR; independent CAH) scored a B (3.5) and — most strikingly — explicitly states on its website that "records are free to patients who request their records." This fee transparency is vanishingly rare across all organization types. Meanwhile, **SSM Health DePaul Hospital** (major-system community hospital, St. Louis) and **Avera Hand County Memorial** (regional-system CAH) both scored lower despite having far greater institutional resources.

## The PatientPop Ghost Form Ecosystem

Two organizations — **Consensus Health** (NJ physician practice) and **Mayers Memorial Hospital** (CA government CAH) — share an identical problem: their only discoverable ROI form is a generic, unbranded template hosted on PatientPop's CDN, not linked from their own websites. These forms carry no organizational identity; a patient cannot confirm the form even belongs to their provider. They lack submission instructions, HIPAA-required authorization elements, and any semblance of patient-centered design. This suggests a shadow ecosystem where vendor platforms generate placeholder forms that organizations never customize or integrate into their workflows — a finding that doesn't fit neatly into "barriers" because the forms technically exist but are functionally orphaned.

## Wet-Ink Mandates Sabotaging Digital Investment

**St. Charles Redmond** (OR, regional nonprofit) invested in a 65-field fillable PDF with bilingual support and iterated through three revision generations (2016, 2022, 2025) — yet the form explicitly states "MUST BE WET-INK SIGNED," forcing patients to print after completing it digitally. This creates a paradox: the organization clearly values digital-first design but then invalidates its own work with a single policy decision. The form is technically excellent but procedurally paper-bound.

## Memorial Healthcare's Leaking PDF

**Memorial Healthcare System** (Hollywood, FL; government regional system) has a 2.45 MB English PDF that is 3x larger than its identically structured Spanish and Creole versions. The reason: the English file contains "garbled hidden content from overlapping template layers — including staff business cards, physician rosters, and internal template labels." This isn't just bloat — it's a potential data leak. Staff contact information embedded in hidden PDF layers is exposed to anyone who extracts text, and the garbled content produces confusing output for screen readers. The Spanish and Creole versions, being clean files, inadvertently provide a better accessibility experience than the English original.

## The "HIPPA" Email and Wrong-Statute Problem

**HopeHealth** (Florence, SC; FQHC) lists its Privacy Officer's email as `HIPPA@hope-health.org` — misspelling the law the officer is tasked with enforcing. Beyond the optics, this could be a functional failure if the email address doesn't actually exist. More substantively, HopeHealth's generic HealthMark form cites § 164.508 (authorization for disclosure) throughout, when patient self-access falls under § 164.524 (right of access). This isn't a technicality — the two sections carry different fee limits, response timelines, and denial grounds. Multiple orgs in this batch conflate authorization with access rights, but HopeHealth's explicit wrong-statute citation is the clearest example of the confusion.

## Physician Practices: The Forgotten Category

The two physician practices in this batch — **Consensus Health** (D, 2.05) and **Alabama Medical Group** (C, 2.65) — are the lowest-scoring organizations, well below even the smallest critical access hospitals. Consensus Health's experience borders on "functionally absent": no forms on their website, no documented workflow, no branded documents. Alabama Medical Group's form hasn't been updated since February 2018 (eight years) and still collects Social Security Numbers. These practices aren't imposing deliberate barriers — they simply haven't invested in records access infrastructure at all. The finding is surprising because physician practices are where most patients receive most of their care, yet they appear to have the least developed patient access processes.

## Translation Decay as a Systemic Pattern

Three organizations offer multilingual forms, but translation quality degrades over time. **Columbia Memorial Hospital**'s Spanish form is eight years older than its English version (2017 vs. 2025), and page 2 is entirely untranslated. **El Centro de Corazón** (Houston FQHC serving predominantly Spanish-speaking communities) has a bilingual form, but the Spanish version omits "Billing Records" as a checkbox — a substantive translation gap, not just a stylistic one. These aren't isolated typos; they suggest organizations update English forms without revisiting their translations, creating a growing divergence in what English-speaking and non-English-speaking patients can request.

## Witness Requirements Cluster at Small Southern Hospitals

**Abbeville Area Medical Center** (SC, independent CAH) requires *two* witness signatures — a requirement that goes well beyond HIPAA and creates a significant logistical barrier for patients completing forms at home. **El Centro de Corazón** also has a witness line. These requirements cluster at smaller, independent facilities in the South, suggesting a regional or institutional culture of formality around medical documentation that persists independent of legal requirements.
