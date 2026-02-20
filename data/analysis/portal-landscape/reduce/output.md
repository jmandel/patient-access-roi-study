# The Portal Landscape: Online Record Request Pathways Across U.S. Healthcare Organizations

## Executive Summary

Across 181 healthcare organizations studied, roughly 45% offer at least one digital pathway for medical records requests — but only 29% provide a dedicated online request portal distinct from an EHR patient portal. The remaining 55% rely exclusively on downloadable PDF forms submitted via fax, mail, or email. Even where portals exist, PDF forms persist alongside them in over 90% of cases, indicating a transitional landscape where digital tools supplement rather than replace paper-based workflows. Swellbox/Datavant dominates the third-party portal market with an estimated 55% share of dedicated ROI portals, while Epic MyChart is ubiquitous as a secondary access channel but rarely functions as a true request-initiation tool.

---

## Aggregate Portal Adoption

| Metric | Count | Percentage |
|---|---|---|
| Total organizations studied | 181 | — |
| Any digital request pathway (portal or patient portal) | 81 | 45% |
| Dedicated online ROI portal | 53 | 29% |
| Patient portal referenced as access channel | 48 | 27% |
| PDF-only (no digital pathway) | 100 | 55% |

The three batches show moderate variation in adoption rates — 47%, 51%, and 29% respectively — partly reflecting batch composition but also suggesting that portal adoption is unevenly distributed across organizational types. The weighted average of 45% represents a near-even split between digitally enabled and paper-only organizations.

Among the 53 organizations with dedicated ROI portals, only 35 (66%) designate the portal as the **primary** request pathway. The remaining 18 list it as a secondary or alternative channel, with the PDF form remaining the default. This distinction matters: a portal that exists but is buried behind a PDF-first workflow provides limited practical benefit to patients who don't know to look for it.

---

## Vendor Market Share

### Dedicated ROI Portal Vendors

**Swellbox/Datavant** is the clear market leader, powering approximately 29 of the 53 dedicated portal deployments (roughly 55% market share). This dominance reflects Datavant's consolidation of former Ciox and Swellbox products into a unified release-of-information platform. Swellbox portals appear across the full spectrum of facility types — from large academic-affiliated systems like Emory Healthcare and Bon Secours Mercy Health to mid-size community hospitals and even FQHCs like Penobscot Community Health Care.

The remaining market is fragmented, with no other vendor exceeding low single-digit deployments:

| Vendor | Approximate Deployments | Notes |
|---|---|---|
| **Swellbox/Datavant** | ~29 | Market leader; "records request wizard" |
| **MRO/Ciox** | ~4–5 | Legacy ROI vendor; MRO Express product |
| **Verisma** | ~3 | Identity-verified portals (e.g., NYP, Froedtert) |
| **ChartRequest** | 1 | Minnie Hamilton; portal-only approach |
| **MediCopy** | 1–2 | Flowers Hospital and secondary pathways |
| **ScanSTAT** | 1 | West Tennessee Healthcare |
| **HealthMark Group** | 1 | Southeast Georgia Health System |
| **Sharecare/HDS** | 1–2 | Scenic Mountain, Eastern Maine |
| **Other** (DocuSign, Formstack, JotForm, Zoho, custom) | ~6–8 | Improvised or general-purpose tools |

A notable tail of organizations use general-purpose form tools (JotForm, Formstack, DocuSign, Zoho Creator) rather than healthcare-specific ROI platforms. These improvised solutions suggest that some organizations recognize the need for digital intake but lack the budget or vendor relationship for a dedicated ROI product.

### Patient Portal (EHR) Vendors

**Epic MyChart** dominates patient portal references, accounting for 34 of the 48 patient portal mentions (71%). Other EHR portals — athenahealth, Cerner/Oracle Health, eClinicalWorks — each appear one to three times. However, MyChart's role is almost exclusively as a **records delivery or viewing channel**, not a request-initiation mechanism. No organization in the study makes MyChart the primary pathway for submitting a new records request. This is a significant gap: patients who are accustomed to managing appointments and medications through MyChart may reasonably expect to request their full medical records there, only to be redirected to a separate PDF or third-party portal.

---

## The PDF Coexistence Question

Across all three batches, **60 of 66 portal-offering organizations (91%)** maintain a downloadable PDF authorization form alongside their digital portal. Only six organizations have gone portal-only:

1. **AdventHealth Hendersonville** — directs entirely to AdventHealth portal
2. **East Georgia Healthcare Center** — online form, no PDF alternative
3. **Labette Health** — Swellbox portal as sole pathway
4. **HopeHealth** — web form submission only
5. **The Iowa Clinic** — Swellbox portal, no linked PDF
6. **Minnie Hamilton Health System** — ChartRequest portal only (with significant findability problems)

This 91% coexistence rate delivers a clear finding: **PDFs are not going away.** Even the most digitally progressive organizations retain paper forms as a fallback. The reasons are practical: patients without reliable internet access, third-party representatives submitting on a patient's behalf, and legal or compliance teams accustomed to wet-ink signatures all create demand for a downloadable form. The portal-only approach can also backfire — Minnie Hamilton's ChartRequest-only workflow earned poor findability and transparency scores because patients expecting a simple form download instead encountered account-creation requirements with no alternative.

The dominant model is **portal-plus-PDF**, where the organization offers both channels and (in the better implementations) directs patients to the portal first while keeping the PDF accessible. This dual-channel approach imposes a maintenance burden — organizations must keep both pathways current and consistent — but accommodates the widest range of patient capabilities and preferences.

---

## Is the Portal Trend Positive or Negative for Patient Access?

### The Case For Portals

Portals offer several genuine advantages over PDF-and-fax workflows:

- **Reduced friction for digitally fluent patients.** A well-designed portal eliminates the print-sign-scan-fax cycle, enabling submission in minutes from a phone or computer.
- **Structured data capture.** Portals can enforce required fields (date ranges, delivery preferences, identity verification) at submission time, reducing back-and-forth caused by incomplete paper forms.
- **Tracking and transparency.** Some portal vendors provide request status tracking, giving patients visibility into where their request stands — something impossible with faxed paper forms.
- **Accessibility for patients with disabilities.** A well-built web form can be more accessible than a flat PDF to screen readers and assistive technology users.

### The Case Against (or at Least for Caution)

The portal trend also introduces new barriers:

- **Technology requirements.** Portal access requires internet connectivity, a compatible device, and sufficient digital literacy — resources that are not equally distributed across patient populations.
- **Vendor lock-in and opacity.** When records requests flow through third-party platforms like Swellbox, patients interact with an intermediary whose policies, data practices, and timelines may be opaque. The organization's accountability becomes less visible.
- **Account creation as gatekeeping.** Some portals require account creation before a patient can even see what information is needed, creating a barrier that a downloadable PDF does not impose.
- **Findability challenges.** Portal links can be harder to discover than PDF download links, especially when they redirect patients to third-party domains that look disconnected from the healthcare organization's website.
- **False equivalence with MyChart.** Organizations that list "use MyChart" as a records request pathway may be conflating records *viewing* (limited to what the portal displays) with records *requesting* (the full designated record set under HIPAA). Patients following this advice may receive an incomplete record without realizing it.

### Net Assessment

On balance, the portal trend is **modestly positive** for patient access — but only when portals are implemented as an **additional** channel alongside PDF forms, not as a replacement. The best implementations (e.g., CrescentCare, NewYork-Presbyterian, Valley Hospital) offer identity-verified portal submission as the primary pathway while keeping PDF forms available as fallback. The worst implementations gate patients behind account creation with no transparency about what the process involves (Minnie Hamilton) or treat a MyChart reference as a substitute for an actual request mechanism.

---

## Patterns by Organization Type

### Facility Type

Portal adoption correlates strongly with facility type:

| Facility Type | Approximate Portal Adoption Rate | Notes |
|---|---|---|
| Community hospitals | 50–57% | Highest adoption; often system-deployed portals |
| Physician practices | 44–60% | Most innovative digital approaches (DocuSign, custom) |
| Teaching hospitals | 45–50% | High PDF quality may reduce portal urgency |
| FQHCs | 20–30% | Split; some early adopters, many PDF-only |
| Critical access hospitals | 15–25% | Lowest adoption; resource constraints |

Critical access hospitals — typically small, rural, and resource-constrained — are the least likely to offer portals. Only a handful across all batches have any digital pathway, with Wayne County Hospital's custom HTML web form standing out as a rare exception for a 25-bed rural facility. Teaching hospitals occupy an interesting middle position: they have the resources for portals but often invest instead in high-quality PDF forms with multiple submission channels, suggesting that portal adoption is not the only path to a good patient experience.

### System Affiliation

System affiliation is the strongest predictor of portal adoption. Organizations affiliated with major health systems adopt portals at rates of **55–62%**, compared to **35–43%** for independent organizations. The mechanism is straightforward: a single enterprise contract with Swellbox/Datavant or a system-wide Epic MyChart deployment covers dozens of facilities at marginal cost per site. Systems like AdventHealth, Ascension, Baptist Health, WellStar, Bon Secours Mercy Health, and Emory Healthcare deploy standardized portal infrastructure across their networks.

This creates a widening digital divide: system-affiliated organizations increasingly offer streamlined digital pathways, while independent community hospitals and critical access facilities — often serving the same patient populations — remain mired in PDF-and-fax workflows.

### Region

Portal adoption skews toward the **South** census region, which accounts for roughly 40% of portal deployments across the study. This partly reflects the concentration of large Southern health systems (Baptist Health, AdventHealth, WellStar) that have standardized on ROI portal vendors. No clear adoption disadvantage emerges for other regions, but the South's system-heavy landscape gives it a structural advantage in portal deployment.

### Ownership

Nonprofit organizations dominate portal adoption in absolute numbers, but this mirrors the study's overall nonprofit skew (131 of 199 target organizations). When adjusted for composition, nonprofit and for-profit organizations adopt portals at similar rates. Government-owned facilities show mixed results — some (Harris Health System, Rio Grande Hospital) offer portals, but the sample is too small for reliable inference.

---

## Key Findings

1. **The field is in transition, not transformation.** Forty-five percent of organizations offer some digital pathway, but the PDF form remains the backbone of medical records requests at the vast majority of organizations — including 91% of those with portals.

2. **Swellbox/Datavant has emerged as the de facto standard** for third-party ROI portals, with roughly 55% market share among dedicated portal deployments. No competitor approaches this scale.

3. **MyChart is everywhere but underutilized.** Epic's patient portal is referenced at 34 organizations but functions almost exclusively as a records viewing/delivery tool, not a request submission channel. This represents a significant missed opportunity for the dominant EHR vendor.

4. **System affiliation is the strongest predictor** of portal adoption, creating a digital divide between system-affiliated and independent organizations that mirrors broader healthcare consolidation trends.

5. **Portal-only approaches are rare and risky.** Only 6 of 181 organizations have eliminated PDF forms entirely, and at least one (Minnie Hamilton) demonstrates that portal-only workflows can harm findability and transparency when poorly implemented.

6. **The most innovative digital approaches come from unexpected places** — independent physician practices using DocuSign and general-purpose form tools, and a 25-bed rural hospital with a custom web form — not from the largest academic medical centers.

7. **Portal quality varies enormously.** The presence of a portal does not guarantee a better patient experience. Organizations with well-designed PDF forms and clear instructions (like GHC–South Central Wisconsin, scoring 4.40 with no portal) can outperform portal-equipped organizations that gate access behind account creation or opaque third-party redirects.
