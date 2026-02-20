# Retrieval Experience Analysis — Batch 7

## Overview

This batch covers 16 organizations spanning FQHCs, community hospitals, teaching hospitals, physician practices, and specialty groups. The retrieval experience varied dramatically — from two-click successes to complete failures — revealing that a patient's ability to find their ROI form online depends heavily on whether the organization has committed to making it publicly accessible at all.

## Search Effort

Most organizations required **3–4 web searches** to locate a form, typically combining a general web search, a site-specific search (`site:domain.com`), and direct website navigation. The fastest retrievals (Ascension Sacred Heart Pensacola, Colquitt Regional Medical Center) took just 2–3 steps: a web search surfaced the form page, and the PDF was one click away. The hardest cases (Aaron E. Henry CHC, Schweiger Dermatology Group) consumed 9+ searches across multiple strategies — web search, sitemap crawling, URL guessing, Wayback Machine — and still yielded nothing.

The **median difficulty was "easy"**: 10 of 16 organizations (63%) had forms findable within a few searches with no major obstacles. Two were moderately difficult, and three were outright failures where no downloadable form could be retrieved.

## Navigation Patterns That Worked

**Site-specific web search** (`site:example.org "medical records" "release"`) was the single most reliable strategy. It bypassed confusing website navigation and surfaced direct PDF links. Nevada Health Centers, CrescentCare, and Erie Family Health Centers were all found this way.

**Parent system navigation** proved effective for system-affiliated hospitals. Huntington Hospital's forms were found through the Northwell Health parent system. Ascension Sacred Heart Pensacola was accessible through Ascension's standardized market forms. When a health system publishes centralized forms, it typically simplifies the patient experience.

**Clear "Patient Resources" or "Medical Records" pages** made retrieval trivial at organizations like Colquitt Regional (Patients & Visitors → Health Records, two clicks) and Lincoln Hospital Davenport (Health Records page linked from homepage).

## Navigation Patterns That Failed

**No public form published** was the most absolute barrier. Aaron E. Henry CHC, Schweiger Dermatology Group, and Minnie Hamilton Health System had no downloadable ROI form anywhere on their websites. Schweiger — despite a large, polished web presence — offered no patient-facing forms at all; records requests appeared to require a phone call or portal login. Aaron E. Henry CHC's website lacked even a medical records page.

**Portal-only workflows** created dead ends for patients wanting a simple PDF. The Iowa Clinic had transitioned entirely to online-only platforms (Swellbox/Datavant, Formstack, SmartRequest), and historical PDFs could only be found through the Wayback Machine. Minnie Hamilton used ChartRequest behind a login wall with no standalone form available.

## Common Technical Obstacles

**Bot blocking and access restrictions** affected 4 of 16 organizations (25%). Piedmont Medical Center used Cloudflare protection that blocked direct downloads, requiring browser DevTools workarounds. Lincoln Hospital returned HTTP 400 errors on alternate URLs and blocked `web_fetch` calls. UTMB Health hosted forms on SharePoint, which served login pages to automated requests instead of PDFs. NewYork-Presbyterian stored its form on a Digital Asset Management platform (nyp.widen.net) requiring browser-based extraction.

**Browser fallback was needed for 4 organizations** (25%): Black River Memorial Hospital, Lincoln Hospital, NewYork-Presbyterian, and Piedmont Medical Center. In each case, Cloudflare, SharePoint, or DAM platforms rejected programmatic access but served content normally through a browser — mimicking the experience a tech-savvy patient might have, while blocking simpler automated retrieval.

**Image-only PDFs** were a recurring accessibility problem. Colquitt Regional's form was a scanned image from 2021. Nevada Health Centers' three forms were Adobe Illustrator vector graphics with no text layer — technically not scans, but equally inaccessible to screen readers or text extraction. GI Alliance's affiliate forms were image-only scans. These forms cannot be filled electronically and are effectively inaccessible to patients using assistive technology.

## Website Design Patterns

**Specialty/physician practices were hardest.** Schweiger Dermatology Group (large multi-state practice) and GI Alliance both had complex, marketing-oriented websites with minimal patient-facing administrative content. The Iowa Clinic's transition to exclusively online portals left no discoverable offline pathway.

**FQHCs were polarized.** CrescentCare and Erie Family Health Centers both had well-organized, bilingual forms pages. Nevada Health Centers had easily findable forms despite their technical limitations. But Aaron E. Henry CHC had no public forms at all — the smallest organizations either do it well or don't do it at all.

**Large academic/system hospitals** (NewYork-Presbyterian, UTMB Health, Huntington/Northwell) generally had forms available but introduced technical friction through enterprise hosting platforms (SharePoint, DAM systems, Cloudflare) that complicated direct access.

## Key Takeaways

1. **The biggest barrier is absence**: 3 of 16 organizations (19%) had no downloadable form at all — no amount of searching can overcome a form that doesn't exist online.
2. **Site-specific search is the patient's best tool**: navigating website menus was less reliable than searching `site:domain.com` directly.
3. **Enterprise infrastructure creates friction**: SharePoint, DAM platforms, and Cloudflare protection all assume the user is navigating interactively through the organization's intended pathway, penalizing direct-link access.
4. **The typical successful retrieval** takes 3–4 searches and 2–3 clicks — manageable for a determined patient, but far from the one-click ideal.
