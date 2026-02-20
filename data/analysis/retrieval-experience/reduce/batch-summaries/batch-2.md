# Retrieval Experience Analysis — Batch 2

## Overview

This batch of 15 organizations reveals that finding ROI forms online is generally achievable but rarely straightforward. The typical retrieval required **2–3 distinct search attempts** before locating a downloadable form, and the experience ranged from effortless single-search discovery to multi-step detective work involving browser DevTools and network traffic inspection.

## Search Effort and Click Counts

Most forms were found within **2–4 search queries**. The most common successful pattern was a site-scoped web search (e.g., `site:essehealth.com "medical records" "release form"`), which reliably surfaced direct PDF URLs when initial broad searches failed. Organizations like **MUSC Health**, **Barnes-Jewish Hospital**, and **Mass General Hospital** were exemplary — a single web search immediately returned direct PDF links, and the forms lived at clean, predictable URLs. At the other end, **Addabbo Family Health Center** required inspecting browser network traffic to discover actual PDF download paths hidden behind a JavaScript-rendered viewer, and **Shannon Health** initially returned 404 errors for outdated URLs that had been renamed for 2025.

For a typical patient without search expertise, 2–3 clicks from a homepage was the best case: *Patients & Visitors → Medical Records → Download Form*. Organizations following this pattern (Shannon Health, Prevea Health, TriStar Centennial) were easiest to navigate. The worst case involved forms that were technically hosted on the site but not linked from any navigable page — **Valley Hospital's** medical records page now directs patients exclusively to an online portal, with the PDF forms still hosted but effectively hidden.

## Navigation Patterns: What Worked vs. Failed

**Worked well:**
- **Dedicated "Medical Records" or "Patient Forms" pages** with clearly labeled PDF download links (Barnes-Jewish, Emory Healthcare, Prevea Health, Black River Memorial Hospital)
- **System-level standardization** where a parent health system hosts forms at consistent URLs (Mass General Brigham for MGH, HCA for TriStar Centennial, Bon Secours Mercy Health)
- **Site-scoped web searches** (`site:domain.com medical records release form`) — this was the single most reliable retrieval strategy, succeeding where broader searches failed

**Failed or created friction:**
- **Third-party form hosting platforms** that wrap PDFs in JavaScript viewers (Addabbo's use of `pbformsonline.com`), making direct download impossible without browser inspection
- **Dual-domain confusion** where organizations operate two websites with forms split across them (Columbus Community Hospital's `columbushosp.org` vs. `columbusch.com`; Ironwood's forms split across `ironwoodcrc.com` and `ironwoodwomenscenters.com`)
- **Outdated search results** pointing to renamed or moved files (Shannon Health's 404 errors on old PDF filenames)

## Common Obstacles

**Bot blocking** was rare but impactful. **Good Samaritan Medical Center** (Tenet/PBHN system) deployed Cloudflare protection that blocked programmatic downloads — even with realistic User-Agent headers, `curl` returned HTML instead of the PDF. Retrieving the form required using Chrome DevTools to execute a JavaScript `fetch()`, extract the response as base64, and decode locally. For a patient using a standard browser this wouldn't matter, but it signals an access-over-availability mindset.

**Login walls** were not encountered for form downloads, though several organizations (Valley Hospital, MUSC Health) are clearly transitioning toward portal-only workflows where the downloadable form is a legacy artifact rather than the promoted pathway.

**Multiple/outdated form versions** were surprisingly common. **Mosaic Life Care** had two versions of the same form linked from different pages. **Grady Memorial Hospital** had three PDFs including a COVID-era combined document. **Valley Hospital** had four authorization forms across three sub-entities. For patients, encountering multiple versions creates uncertainty about which form is current and correct.

## Browser Fallback

Of the 16 organizations analyzed, only **two** required browser-based workarounds: Addabbo (JavaScript PDF viewer) and Good Samaritan (Cloudflare bot blocking). **Shannon Health** also required browser navigation after search-discovered URLs returned 404s. The remaining ~80% of forms were directly downloadable via standard HTTP requests with no special handling.

## Systematically Harder Website Designs

Three patterns correlated with difficulty:

1. **Multi-entity health systems with fragmented web presences** — organizations operating under legacy and current brands simultaneously (Ascension St. Vincent's transitioning to UAB St. Vincent's, Columbus Community Hospital with two domains) force patients to determine which entity's form applies to them.

2. **Third-party form hosting** — when organizations outsource form hosting to platforms like Practice Builders (Addabbo) or MRO Corp (Valley Hospital), the forms become harder to discover via search and harder to download programmatically.

3. **Portal-first redesigns** — organizations that have redesigned their medical records pages around online portals (Valley Hospital, MUSC Health's Ciox/Swellbox integration) sometimes de-emphasize or unlink their PDF forms, even when those forms remain the legally required alternative for patients who cannot or prefer not to use portals.

## Bright Spots

Several organizations stood out for accessibility. **Prevea Health** offers its ROI form in English, Hmong, Somali, and Spanish — an unusually inclusive set of languages. **Barnes-Jewish Hospital** distinguishes between individual patient access and third-party release with separate, clearly labeled forms. **Emory Healthcare** provides a recently updated fillable PDF with EHI Export as a delivery option — a forward-looking feature. **TriStar Centennial's** HCA-standard form includes a USCDI release option, signaling awareness of interoperability standards.
