# Batch 3: Retrieval Experience Analysis

## Overall Difficulty Profile

Of the 16 organizations in this batch, the majority (12 of 16) were rated **easy** to find — forms appeared within the first one or two web searches and were directly downloadable as PDFs. Two required moderate effort, one was genuinely difficult, and one (Desert Regional Medical Center) was technically easy to locate but required browser-based workarounds to actually download.

## Typical Search Effort

Most forms were discoverable in **1–3 search queries**. The dominant winning pattern was a targeted web search such as `"[Organization Name]" "medical records" "release form" filetype:pdf` or a site-scoped search like `site:example.com authorization release medical records`. For organizations like Northwestern Memorial Hospital, Community Health Center of Central Missouri, and Lakeland Regional Health, the very first search returned a direct PDF URL — zero clicks beyond the search engine. For system-affiliated hospitals (Aurora Medical Center–Grafton, Essentia Health–Fosston, MountainView Hospital), the search consistently led to a parent-system medical records page rather than a facility-specific page, adding one conceptual hop but no real friction.

Organizations with well-structured WordPress sites (Adena, Community Health Center of Central Missouri, Boone County Health Center) made forms especially easy to find because their PDF URLs appeared directly in search results.

## Navigation Patterns That Worked

- **Direct PDF search** (`filetype:pdf` queries) was the fastest path when it worked, yielding a clickable download link with no website navigation at all. This succeeded for roughly half the batch.
- **Site-scoped search** (`site:domain.com`) reliably found the medical records page when direct PDF search missed. This was the fallback strategy that worked in nearly every case.
- **Standard website navigation** (Home → Patients & Visitors → Medical Records) was a consistent 2-click path when search failed. Organizations like JPS Health Network, Maury Regional Health, and Desert Regional Medical Center all placed their forms under predictable menu structures.

## Navigation Patterns That Failed

- **Facility-specific searches for system hospitals** often returned no results because the forms live on the parent system's domain. A patient searching for "Aurora Medical Center Grafton release form" wouldn't find a facility-specific PDF because Aurora uses system-wide forms on `aurorahealthcare.org`.
- **Current-website-only searches** failed for Troy Regional Medical Center, where the current WordPress site has no medical records page at all — the form exists only on a legacy FastHealth-hosted site (`trmc.fasthealth.com`), discoverable only through general web search.

## Common Obstacles

**Outdated or duplicate form versions** were the most pervasive issue. Eight of 16 organizations had multiple versions of their ROI form at different URLs — old and new revisions both accessible online, sometimes with different addresses, layouts, or content. Adena had a 2020 and a 2025 version with different mailing addresses. Boone County Health Center still had a 2017 PDF accessible even though the current version is a 2026 .docx upload. A patient using an outdated form could send records to the wrong address or miss newer options like portal delivery.

**Bot blocking / Cloudflare protection** affected two organizations. Desert Regional Medical Center's site (`desertcarenetwork.com`) blocked `curl` downloads with Cloudflare's challenge page, requiring Chrome DevTools browser to fetch the PDFs via in-page JavaScript. MountainView Hospital's parent site (`sunrisehealthinfo.com`) similarly returned HTML instead of PDFs for direct URL requests, requiring the actual CDN URL (`hcadam.com`) to be extracted from the page source. In both cases, a real patient using a standard browser wouldn't notice — but anyone using assistive technology or automated tools would be blocked.

**Third-party delegation** created a mild findability barrier for Valley Medical Group, which publishes no ROI form on its own site. Instead, a "REQUEST RECORDS" link redirects to MediCopy (medicopy.net), a third-party ROI vendor. The form is a generic MediCopy template, not VMG-branded. A patient must recognize the external link and trust a third-party site — moderate friction, but the link is prominent on the homepage.

**Non-PDF formats** were unusual but present. Boone County Health Center publishes its current form as a `.docx` file, which is less accessible to patients without Microsoft Word.

## Browser Fallback Frequency

Browser-based retrieval (Chrome DevTools) was needed for **3 of 16 organizations** — Desert Regional Medical Center (Cloudflare blocking), MountainView Hospital (CDN redirect), and Boone County Health Center (JavaScript-rendered page). In all three cases the forms were technically findable through search, but the actual download required browser interaction. For the remaining 13, standard `curl`/`fetch` worked without issue.

## Website Designs That Are Systematically Harder

**Legacy-to-modern website migrations** were the single biggest structural problem. Troy Regional Medical Center migrated from FastHealth to WordPress but left its ROI form stranded on the old site, with no link from the new one. The only way to find the 2015-era scanned form is through a general web search that happens to surface the legacy URL. This pattern — a shiny new marketing site that drops patient-facing operational content — is a real risk for small, independent hospitals.

**Large system CDN architectures** (HCA Healthcare, Tenet Healthcare) make forms technically available but obscure the actual download URLs behind content-addressed CDN paths (`hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac`). These URLs are not human-readable, won't appear in search results on their own, and may break if the CDN changes.

**Multi-practice organizations** like Proliance Surgeons create form fragmentation: four different versions of essentially the same form hosted across member practice sites (npsmri.com, proliancesurgeons.com, proortho.com). A patient searching for "Proliance Surgeons release form" might find any of these, and only one (form-4, on proortho.com) has fillable fields.

## Summary

For most organizations in this batch, a motivated patient with basic search skills can find the ROI form in under a minute. The dominant pattern is a single web search leading directly to a medical records page with a PDF download link. The real barriers are not findability but what happens after: outdated forms with wrong addresses, image-only scans that can't be filled digitally, bot protection that blocks non-browser downloads, and legacy websites that strand critical documents. The hardest cases involved website migrations (Troy Regional) and third-party delegation (Valley Medical Group) — both patterns that break the assumption that an organization's current website is the authoritative source for its forms.
