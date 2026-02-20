# Retrieval Experience Analysis — Batch 12

## Overall Picture

This batch reveals a sharp divide in patient retrieval experience. Most organizations (~70–75%) make their ROI forms findable within 1–3 web searches and 2–3 clicks. But the remaining quarter presents genuine obstacles: portal-only workflows with no downloadable form, CDN bot protection blocking direct access, stale URLs from CMS migrations, and name-collision confusion in search results. The "easy" cases are genuinely easy; the hard cases can require 6+ search strategies, Wayback Machine archaeology, or browser-based workarounds.

## Typical Search Effort

For the straightforward cases, a single targeted web search — typically `"[Hospital Name]" "medical records" "release form" filetype:pdf` or `site:example.com authorization release medical records` — surfaced usable results immediately. **Lexington Clinic** exemplifies the best case: the first web search returned direct PDF download links, no bot blocking, no login wall, and `curl` worked on the first attempt. **Phelps Memorial Health Center** was similarly frictionless — a simple Drupal site with a static PDF link, downloadable without any obstacles. **UPMC Presbyterian** had forms linked from both a system-wide medical records page and a hospital-specific sub-page, found in 1–2 searches.

Site-scoped searches (`site:domain.com`) were consistently the most reliable fallback when generic searches returned noise. For system-affiliated hospitals, searching the parent system's domain was often more productive than searching for the individual facility.

## Navigation Patterns: What Works vs. What Fails

**What works:**
- **Dedicated "Medical Records" pages** under a Patients & Visitors section, with clearly labeled PDF download links. West Tennessee Healthcare, Emory Healthcare, and Michigan Medicine all follow this pattern effectively.
- **System-wide forms with facility checkboxes.** Hillcrest HealthCare System, A.O. Fox Hospital (Bassett Healthcare Network), Saratoga Hospital (Albany Med Health System), and UPMC all use a single system-wide form listing all facilities. This is efficient — one search finds the form regardless of which facility the patient visited.
- **WordPress sites with `/wp-content/uploads/` paths** — forms hosted this way are directly indexable by search engines, making them easy to discover.

**What fails:**
- **Portal-only approaches with no PDF fallback.** Gastro Florida directs patients exclusively to a Sharecare/HDS portal that requires identity verification via driver's license. The dedicated "Medical Records" page at gastrofl.com/medical-records/ is completely empty — just a heading with no content. HopeHealth similarly outsources everything to HealthMark Group's portal, which requires email verification before showing any authorization workflow. No PDF exists anywhere on either organization's website.
- **Hidden English forms while Spanish versions are linked.** Bayshore Medical Center (Hackensack Meridian Health) links the Spanish ROI form from the main Medical Records page but does not link the English version. The English PDF was eventually found in a Medical Group patient forms directory — a completely different URL path. English-speaking patients are directed to a Swellbox/Datavant online wizard instead.

## Common Obstacles

**CDN bot protection** was the most pervasive technical barrier, affecting over half of all organizations studied (103/195). Cherokee Health Systems (River Valley Health) had its forms clearly linked on a well-organized page — but Akamai CDN blocked all `curl` downloads with "Access Denied" responses, even with realistic browser headers. Sturdy Memorial Hospital had the same issue. Cottage Hospital's Cloudflare Turnstile challenge blocked *all* automated access, including Google Cache attempts. The workaround in each case required launching a full browser session and using JavaScript `fetch()` within the authenticated page context — a technique no ordinary patient would use, but which demonstrates that the forms are genuinely available to browser users.

**Browser fallback was needed in ~15% of cases** (29/195). This typically involved Chrome DevTools JavaScript fetch, base64 encoding, and manual decoding — an elaborate workaround that reflects CDN configuration rather than intentional access restriction.

**Stale or broken URLs** appeared in ~27% of organizations (52/195), reflecting CMS migrations, domain changes, and organizational mergers. Saratoga Hospital's original domain now redirects to albanymed.org after absorption into the Albany Med Health System. Cherokee Health Systems rebranded to River Valley Health with a new domain. These transitions leave behind search-indexed URLs that may confuse patients.

**Name collisions in search results** created false leads. Searching for "Hillcrest Hospital Claremore" returned a form from "Hillcrest Internal Medicine" in San Diego — a completely unrelated organization. HopeHealth Florence, SC was confused with Hope Health Ellis County, TX, leading to a JotForm that belonged to the wrong organization entirely.

## Systematically Harder Website Designs

**Portal-only organizations** (Gastro Florida, HopeHealth) are the hardest to navigate because there is literally nothing to find — no PDF exists. Patients who prefer to download, review, and fill a form offline are simply out of luck.

**Enterprise CMS sites with aggressive CDN protection** (Akamai, Cloudflare) create friction even when forms are well-organized. The forms are accessible to browser users but invisible to automated tools and potentially problematic for users with accessibility needs or non-standard browsers.

**Small critical access hospitals** like Cottage Hospital can be the most challenging: Cloudflare blocked all access including Google Cache, and the current form versions weren't even archived by the Wayback Machine. The only retrievable copies were older archived versions.

By contrast, **mid-size WordPress sites** and **large health systems with centralized medical records pages** offer the smoothest experience — forms are directly indexed, clearly labeled, and downloadable without authentication.
