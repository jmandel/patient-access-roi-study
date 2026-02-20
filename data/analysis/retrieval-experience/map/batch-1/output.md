# Retrieval Experience Analysis — Batch 1

## Overview

This batch covers 70 healthcare organizations. The dominant pattern: most ROI forms are findable within 1–2 web searches and 2–3 clicks from the homepage, but a significant minority present serious obstacles — and a subset have no downloadable form at all.

## Clicks and Searches

For roughly **45 of 70 organizations (~64%)**, the form was found on the first or second web search with a direct PDF link. The typical successful path was a site-scoped search (`site:example.com authorization release medical records`) returning either a direct PDF URL or a clearly labeled medical records page. From the homepage, the standard navigation path — **Patients & Visitors → Medical Records** (or Patient Forms) — required 2–3 clicks.

About **13 organizations (~19%)** required moderate effort: searching for a parent system's form (Huntington Hospital → Northwell Health; A.O. Fox → Bassett Healthcare; Aurora Medical Center Grafton → Advocate Health), navigating to a third-party vendor site (Valley Medical Group → MediCopy; Joseph P. Addabbo → Practice Builders), or working around outdated URLs (Shannon Health, DHR Health). These added 1–3 extra search iterations.

For **12 organizations (~17%)**, no downloadable PDF form was found at all. These include Schweiger Dermatology Group, EyeSouth Partners, La Clínica de La Raza, Minnie Hamilton Health System, King's Daughters Medical Center (Brookhaven), Aaron E. Henry CHSC, Crenshaw Community Hospital, Lake Martin Community Hospital, Gastro Florida, Labette Health, and The Iowa Clinic (archived forms only).

## Navigation Patterns That Worked vs. Failed

**Successful patterns:**
- **Site-scoped web search** (`site:domain.com`) was the single most reliable strategy, working for the vast majority of organizations that publish forms.
- **Dedicated medical records pages** with clear download links (Providence Sacred Heart, Duke Health, Barnes-Jewish Hospital, Aurora Health Care) were the gold standard. These pages typically offered English/Spanish versions, submission instructions, and alternative online request options.
- **Parent system forms** served well when facility-specific forms didn't exist. Organizations like Northwell Health, YNHHS, SSM Health, Ascension, RWJBarnabas Health, and Avera publish system-wide forms covering all affiliated facilities.

**Failed patterns:**
- **Generic "Patient Forms" pages** that list registration paperwork but omit the ROI form (Ironwood Cancer, Schweiger Dermatology).
- **Empty or placeholder medical records pages** (Gastro Florida's `/medical-records/` page has a heading and nothing else).
- **WordPress uploads directory probing** rarely worked; most sites block directory listing.

## Common Obstacles

**Bot blocking (~16% of organizations):** Eleven sites blocked direct `curl`/`wget` downloads, requiring browser-based workarounds. Cloudflare (Desert Regional, Broward Health), Akamai (Olmsted Medical Center, Sturdy Memorial, Cherokee Health Systems, Montefiore Nyack), and custom WAFs caused "Access Denied" or challenge pages. The workaround — fetching via JavaScript `fetch()` in a browser session — always succeeded, but a real patient using a simple link would not face this issue (it only affects programmatic access).

**Outdated/broken URLs (~10%):** Shannon Health's PDF filenames changed for 2025, returning 404s for search-engine-cached links. DHR Health migrated their CMS, leaving old `/app/uploads/` paths empty. East Georgia Healthcare Center's WordPress-hosted PDFs were removed when they moved to RightSignature. Canton-Potsdam Hospital's parent system (St. Lawrence Health) was absorbed into Rochester Regional Health, making all old domain links redirect.

**Third-party platform barriers:** Several organizations outsource ROI entirely to vendors. ChartRequest (Minnie Hamilton) requires account creation. Sharecare/HDS (Gastro Florida) runs a 31-step wizard requiring identity verification. RightSignature (East Georgia Healthcare) renders forms as PNG images inside an e-signature workflow, not downloadable PDFs. Formstack (Labette Health) replaces the PDF entirely with an online-only form.

**Name confusion:** Search engines conflated La Clínica de La Raza (Oakland, CA) with La Clinica Health Centers (Medford, OR); King's Daughters Medical Center (Brookhaven, MS) with King's Daughters Health System (Ashland, KY); Mercy Health (Ohio, mercy.com) with Mercy (Missouri, mercy.net); and multiple "Valley Medical Group" and "Community Medical Center" entities.

**No form published:** The hardest cases were small or transitional organizations with minimal web presences. Crenshaw Community Hospital's website has 25 pages total and no patient forms section. Lake Martin Community Hospital's FAQ acknowledges a "signed authorization form is required" but doesn't offer one for download. Aaron E. Henry CHSC's uploads directory returns 403 for all access attempts.

## Browser Fallback Frequency

A browser-based download was needed for **11 of 70 organizations (~16%)**, exclusively due to CDN/WAF bot protection rather than content being behind a login wall. In every case, the form was publicly accessible — only the download method was blocked. No organization required patient portal authentication to access the ROI form itself, though several (Schweiger Dermatology, Lake Martin Community Hospital) appear to make forms available only through authenticated portals.

## Systematically Harder Website Designs

**PMOs and management organizations** (EyeSouth Partners) have corporate-facing websites with no patient resources. Patients must identify and navigate to individual affiliated practices, each with different approaches.

**Small critical access hospitals** (Crenshaw Community, Lake Martin Community) tend to have minimal websites focused on services and providers, with no forms infrastructure.

**Organizations in system transitions** (Canton-Potsdam Hospital/St. Lawrence Health → Rochester Regional; Ascension St. Vincent's → UAB St. Vincent's; Cherokee Health → River Valley Health) create broken links and confusion about which domain hosts current forms.

**Practices using website builders** (Valley Medical Group on Wix; sites using PatientPop) tend to outsource forms to external platforms rather than hosting PDFs directly, adding navigation steps.

**Large multi-location specialty groups** (GI Alliance, Schweiger Dermatology) may have extensive web presences for marketing but sparse patient-facing administrative resources. GI Alliance's patient forms page is organized by local brand, requiring patients to know their specific affiliate.
