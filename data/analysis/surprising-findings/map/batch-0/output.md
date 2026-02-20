# Surprising Findings — Batch 0

## The Fillability Regression Paradox

Several organizations have demonstrably *regressed* in digital accessibility over time. **University of Iowa Hospitals** dropped from 50 fillable fields in its older form to zero in the current revision — while the form's own consent language claims electronic completion is "as valid as if you signed the consent in writing," creating a paradox where the form endorses digital completion but provides no mechanism for it. **NorthLakes Community Clinic** (FQHC, Ashland, WI) tells a similar story: its older form-2 has 54 fillable fields, but the current form-1 that replaced it has zero. The newer form added better submission instructions and encrypted email delivery but stripped out the interactive fields. These aren't legacy organizations failing to modernize — they are organizations that *had* modern forms and chose to abandon them.

## The "Wrong State Law" Problem

Multiple organizations cite laws from the wrong state on their forms. **AdventHealth Central Texas** (Killeen, TX) cites Illinois law on a form used at a Texas facility. **Proliance Surgeons** (Seattle, WA) has a subsidiary form citing California's Confidentiality of Medical Information Act instead of Washington's RCW 70.02. **Ironwood Cancer & Research Centers** (Arizona) cites Washington State's RCW 70.24 on a form for an Arizona practice. These aren't obscure footnotes — they're the legal basis for sensitive-information consent. This suggests organizations are copying form templates across state lines without legal review, a compliance risk that could invalidate patient authorizations.

## The 25-Bed Hospital That Outperforms Teaching Centers

**Wayne County Hospital** — a 25-bed independent critical access hospital in rural Monticello, Kentucky — offers both a downloadable PDF *and* a web-based HTML submission form, email delivery of records, and prominently discloses that first copies are free under Kentucky law (KRS 422.317). Meanwhile, **OSU Wexner Medical Center** (1,439 beds, government teaching hospital) provides no electronic submission channel, no fax number, no email address, and routes all billing through a third-party vendor (CIOX) without fee transparency. A patient at one of the nation's largest academic medical centers has a materially worse digital experience than one at a tiny rural hospital. Similarly, **Fallon Medical Complex** (25-bed CAH in Baker, MT) offers seven delivery formats including USB drive, patient portal, and email — a breadth that rivals major systems. **Myrtue Medical Center** (25-bed CAH, Harlan, IA) offers MyChart portal delivery and encrypted email, plus a Spanish translation — remarkable for a facility its size.

## The JPS Health Network Capability Gap

**JPS Health Network** (Fort Worth, TX; 573 beds, government) earned the batch's lowest grade (D, 2.45). The most damning detail: JPS published modern, fillable, email-submittable HIE authorization forms in 2025 — proving the organization has the technical capability — while its patient ROI form remains a seven-year-old image-only scan with no text layer and a $75 flat fee for electronic delivery. The organization demonstrably *can* produce digital-first forms but has not applied that capability to patient access. The $75 electronic delivery fee and $30 minimum for first 10 pages are among the most potentially excessive fees in the batch, likely violating HIPAA's cost-based limit for patient access requests.

## Organizational Transitions Leave Patients in Limbo

**Canton-Potsdam Hospital** (NY) presents a cautionary tale about health system acquisitions. After St. Lawrence Health was acquired by Rochester Regional Health, the facility's forms vanished from the web entirely — findable only via the Wayback Machine. The parent system's Swellbox portal *explicitly excludes* St. Lawrence Health facilities, leaving phone as the only pathway. A patient today encounters a gap between two organizations' infrastructures with no bridge. **Ascension St. Vincent's East** (Birmingham, AL) faces a similar branding-transition problem: the Ascension-to-UAB transition means initial searches yield a legacy form on a different domain, and the current form dropped its HIPAA Right of Access citation that was present in the predecessor.

## Samaritan Health Services' Rare EHI Export Form

**Samaritan Lebanon Community Hospital** (OR), through its parent Samaritan Health Services, offers a dedicated "Computer Readable EHI Export Request" form in both English and Spanish — a mechanism specifically for patients to receive their health information in machine-readable format. This is exceptionally rare across the entire study and demonstrates genuine 21st Century Cures Act awareness. However, the standard ROI form explicitly states "No Charge" for patient requests, while the EHI export form omits this commitment — an inconsistency that could inadvertently create a financial barrier to the very interoperability the Cures Act mandates.

## Memorial Healthcare System's Trilingual Achievement — With Hidden Debris

**Memorial Healthcare System** (Hollywood, FL; government-owned, 850 beds) offers forms in English, Spanish, and Haitian Creole — the only trilingual organization in this batch, reflecting South Florida's demographics. Yet the English PDF is bloated to 2.45 MB (vs. ~700 KB for identical Spanish/Creole versions) because it contains garbled hidden content from template layers — including staff business cards, physician rosters, and internal labels like "JDCH Oncology BC (Multiple Doctors & Locations) FRONT." This hidden debris inflates file size and produces garbled output for assistive technologies, undermining the accessibility the multilingual effort was meant to serve.

## Prevea Health's Demographic-Responsive Multilingual Choice

**Prevea Health** (Green Bay, WI), an independent nonprofit physician practice, provides its ROI form in English, Hmong, Somali, and Spanish. Hmong and Somali translations are vanishingly rare in healthcare forms nationally and reflect specific awareness of northeastern Wisconsin's refugee resettlement communities. This is the most demographically responsive language access decision in the batch and stands in sharp contrast to organizations like **Sea Mar Community Health Centers** (Seattle FQHC serving diverse communities) that offer only English despite serving populations where multilingual forms would be expected.
