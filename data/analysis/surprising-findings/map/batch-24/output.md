# Surprising Findings — Batch 24 (Full Corpus, 190 Organizations)

## The For-Profit That Leads the Pack

The study's single A-grade organization is **Flowers Hospital** in Dothan, Alabama — a for-profit community hospital owned by Community Health Systems (CHS). With a 4.7/5.0 overall score, 66 fillable fields on a single page, a co-equal Spanish translation, a dedicated "Patient Request for Health Information" form with "Myself" as the first recipient option, and a Swellbox online portal, it outperforms every nonprofit, every teaching hospital, and every major health system in the dataset. CHS is often associated with cost-cutting, not patient-centered design. That a CHS facility is the gold standard here upends assumptions about for-profit healthcare and patient access.

## FQHCs: A Bimodal Distribution

Federally Qualified Health Centers — organizations whose mission is serving underserved populations — show the widest quality gap of any facility type. **CrescentCare** (New Orleans, 4.2/5.0) and **Philadelphia FIGHT** (4.0/5.0) provide bilingual forms, dedicated patient access pathways, and digital submission options. Yet five FQHCs have no online records pathway at all: **Aaron E. Henry CHC** (MS), **Franklin Primary Health Center** (AL), **People's Health Centers** (MO), **El Rio Health** (AZ), and **La Clínica de La Raza** (CA) — all scoring at or below 1.65. Ironically, La Clínica, which serves a heavily Spanish-speaking population in Oakland, provides no online form in any language. These organizations receive federal funding to improve access for vulnerable communities, yet they have the least accessible records request processes in the entire study.

## One in Four Forms Collects Social Security Numbers

Forty-seven of 190 organizations (25%) request Social Security Numbers on their ROI forms — a practice with no HIPAA basis that creates identity theft risk, especially since many of these forms are faxed. SSN collection cuts across every category: teaching hospitals (Duke, Barnes-Jewish, UMMC), critical access hospitals (Nemaha Valley, Lane County), FQHCs (Addabbo, East Georgia), and physician practices (The Iowa Clinic, Advocare). This is not a resource or sophistication issue — it is an industry-wide blind spot.

## The Capability-Deployment Gap at JPS Health Network

**JPS Health Network** (Fort Worth, TX) — a government safety-net hospital — presents a striking contradiction. Its 2025 HIE forms are modern fillable PDFs accepting encrypted email submission. Its patient ROI form is a 2018 image-only scan with no text layer and no fillable fields, served over unencrypted HTTP. The website explicitly states: "It is not possible to accept electronic transfer of this form at this time." The organization charges $75 for electronic delivery, likely exceeding HIPAA's cost-based limit. JPS proves it *can* build good digital forms — it simply hasn't extended that capability to the one form patients actually need.

## Rural Overperformers

Several independent critical access hospitals defy the resource-constrained stereotype. **Myrtue Medical Center** (Harlan, Iowa, pop. ~5,000) offers Spanish-translated forms, MyChart portal delivery, and encrypted email — unusual digital sophistication for a 25-bed rural facility. **Gritman Medical Center** (Moscow, Idaho) scores 3.8 with a clean fillable form. Meanwhile, **Cottage Hospital** (Woodsville, NH), a similar-profile CAH, hides behind Cloudflare bot-blocking with forms recoverable only via the Wayback Machine.

## Government Hospitals: Valleywise Stands Out

**Valleywise Health** (Phoenix, AZ), a government-owned safety-net hospital, earns a perfect 5/5 on patient-centeredness — the only organization in the dataset to do so. Its dedicated patient access form omits the purpose field and expiration clause entirely, correctly recognizing that these elements belong on third-party authorizations, not patient self-access requests. This design discipline is remarkable for a county hospital and contrasts sharply with government peers like **Neshoba General** (MS, 1.2/5.0) and **Troy Regional** (AL, 1.8/5.0), which have no functional online pathway at all.

## The Zombie Form Problem

At least 40 organizations maintain outdated forms publicly accessible alongside current versions, with no deprecation notice. **Michigan Medicine** still hosts a 2011 form that search engines index. **Piedmont Medical Center's** active forms date to 2013. **Troy Regional's** sole form is from 2015, hosted on a defunct legacy website unreachable from the current site. These ghost forms don't just confuse patients — they may contain outdated addresses, wrong fax numbers, and pre-Cures Act language that misstates patient rights.

## System Affiliation Is Not Destiny

System-affiliated hospitals average 3.57 vs. 3.10 for independents, but the spread within systems is enormous. **Canton-Potsdam Hospital** (NY), part of Rochester Regional Health, scores 1.9 — the parent system's Swellbox portal explicitly excludes it, leaving phone as the only pathway. Within Ascension, three facilities in this batch all collect SSNs. System membership provides a floor, but the floor has cracks.
