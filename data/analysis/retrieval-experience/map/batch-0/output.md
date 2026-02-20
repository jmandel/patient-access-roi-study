# Retrieval Experience Analysis — Batch 0

## Overall Picture

Across this batch, finding ROI forms online is surprisingly uneven. The majority of organizations (~75%) make their forms easy to find — typically requiring 1–2 web searches and 2–3 clicks from the homepage. But the remaining quarter ranges from moderately frustrating to effectively impossible, with forms buried behind login walls, blocked by CDN bot protection, hosted on stale URLs, or simply not published online at all.

## Typical Search Effort

For the easy cases, a single web search like `"[Hospital Name]" "medical records" "release form" filetype:pdf` was usually sufficient to surface direct PDF links. Site-scoped searches (`site:example.com authorization release medical records`) were the most reliable fallback when generic searches returned noise. On-site navigation typically followed a predictable path: **Home → Patients & Visitors → Medical Records** (2–3 clicks), with forms clearly labeled and directly downloadable.

Examples of frictionless retrieval: **WellSpan York Hospital** forms appeared in the first web search, directly downloadable without any bot blocking. **Merit Health Central** had a dedicated "Request Medical Records" page with clearly labeled English and Spanish download links. **Abbeville Area Medical Center**, a small WordPress-based site, had its form 2–3 clicks deep under Patients & Visitors → Medical Records — simple and functional.

## Navigation Patterns: What Works and What Fails

**What works:**
- Dedicated "Medical Records" or "Request Medical Records" pages under a Patients & Visitors section
- Direct PDF links on those pages (not buried inside accordions or portals)
- System-level form publishing (e.g., **AdventHealth**, **WellSpan**, **Bon Secours**) where one URL serves all facilities
- WordPress sites with straightforward `/wp-content/uploads/` paths — forms are often directly indexable by search engines

**What fails:**
- Organizations that have migrated to third-party portals but removed the downloadable form entirely. **HopeHealth** (Florence, SC) outsources all records requests to HealthMark Group's portal, which requires email verification before you can even see the authorization workflow. No PDF exists anywhere on their website.
- Large multi-entity organizations where forms are scattered across subsidiary sites. **Proliance Surgeons** has different versions of the same form on different member practice websites (npsmri.com, proortho.com, proliancesurgeons.com), some as image-only scans.
- Portal-only approaches without a public fallback. **Anaheim Global Medical Center** (KPC Health) directs patients exclusively to ChartRequest, requiring account creation. No downloadable form exists — and searching for one leads to confusion with the similarly-named AHMC Healthcare system.

## Common Obstacles

**Bot blocking and CDN protection (~53% of organizations showed some form of this):** Cloudflare and Akamai were the most common culprits. **Goleta Valley Cottage Hospital**'s Akamai CDN blocked curl requests even with browser user-agent strings, though the same files were accessible via Azure Blob Storage mirrors. **Desert Regional Medical Center** required using Chrome DevTools and in-page JavaScript `fetch()` to bypass Cloudflare challenges.

**Stale or broken URLs (~16%):** **DHR Health** had old URLs (`/app/uploads/2020/10/...`) returning empty files after a CMS migration — the actual forms lived at new `/media/{hash}/` paths. **WakeMed Health** had a search-indexed PDF URL that returned HTML instead of a PDF; the current URLs had moved to `/sites/default/files/pdf/`. These represent real patient friction — a bookmarked or search-cached link simply stops working.

**No form published online (~15+ organizations):** **El Rio Health** (FQHC, Tucson) has no ROI form, no medical records page, and directs patients to MyChart or phone. **Consensus Health** (physician network, NJ) has no patient forms section at all — finding any ROI-related form required navigating to a member practice's separate website. **Desert Valley Hospital** doesn't post its ROI form despite describing the request process; the identical system template was only findable on sister Prime Healthcare hospital sites.

## Browser Fallback Frequency

About 26% of organizations (50 of 195) required browser-based fallback at some point during retrieval — typically because `curl` or `web_fetch` was blocked by CDN protection or because the site required JavaScript rendering. This is a meaningful proxy for patient experience: if an automated tool with browser-like headers gets blocked, a patient using an older browser, screen reader, or download manager would face similar issues.

**UTMB Health** hosts forms on SharePoint (`liveutmb.sharepoint.com`), which returns login pages to non-authenticated HTTP clients. A patient clicking the link in a normal browser would be fine, but anyone trying to directly download or share the URL would get an authentication wall.

## Website Design Patterns That Are Systematically Harder

**Portal-only organizations** are the hardest category. When a hospital delegates records requests entirely to ChartRequest, HealthMark, or Datavant (~23% of organizations use one of these), there's often no downloadable form at all. The patient must create an account, verify their email, and navigate a third-party interface — a very different experience from downloading a PDF.

**Multi-domain systems** create confusion. Organizations with multiple domains (e.g., `scenicmountainmedical.com` vs. `scenicmountainmedicalcenter.org`, or `erlanger.org` vs. `erlangerbh.com`) make it unclear which site is canonical. Patients may land on an outdated domain with broken links.

**WordPress sites** with simple structures were paradoxically the easiest to navigate — small community hospitals and critical access hospitals often had the most straightforward retrieval experience. Large health systems with enterprise CMSes (Sitecore, Kentico) were more likely to have complex URL structures, CDN protection, and multi-level navigation that obscured the medical records page.
