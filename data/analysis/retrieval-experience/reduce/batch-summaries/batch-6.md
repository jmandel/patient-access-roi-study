# Retrieval Experience Analysis — Batch 6

## Overall Difficulty Profile

Of the 16 organizations in this batch, the majority (12 of 16, 75%) had forms that were **easy** to find — typically requiring 1–3 web searches and 2–3 clicks from the homepage. One organization required moderate effort due to third-party form hosting, one was technically easy to locate but required browser workarounds for download, and two were **impossible** — no ROI form exists on their public-facing websites despite exhaustive searching.

## Typical Search Effort

For the easy cases, a targeted web search like `"[Hospital Name]" "medical records" "release form"` or a site-scoped search (`site:example.com authorization release medical records`) was sufficient to surface either the direct PDF URL or the medical records page. Most organizations followed a predictable navigation structure: **Home → Patients & Visitors → Medical Records** (2–3 clicks), with forms clearly labeled and directly downloadable.

The fastest retrievals required essentially zero navigation beyond a search engine. **University of Iowa Hospitals & Clinics** and **Blessing Hospital** (Quincy, IL) both had forms that appeared as direct PDF links in the very first web search result. **Esse Health** (St. Louis, MO) similarly had a well-organized patient forms page where the ROI form was filed under "General Forms" with clear labeling — and notably also offered an electronic DocuSign version. **Black River Memorial Hospital** (Black River Falls, WI) had its form linked from a clearly labeled "Forms" section on its Patient Resources page, discoverable in a single site-scoped search.

## Navigation Patterns: What Works and What Fails

**What works:**
- **Site-scoped web search** (`site:example.com`) was the single most reliable strategy, succeeding for nearly every organization that publishes a form online.
- **Dedicated medical records pages** under a "Patients & Visitors" or "For Patients" section, with direct PDF download links. **Carolina Pines Regional Medical Center**, **Myrtue Medical Center** (Harlan, IA), and **Fenway Health** (Boston, MA) all exemplify this clean pattern.
- **WordPress sites** with straightforward `/wp-content/uploads/` paths — forms hosted this way are directly indexable by search engines and download cleanly.

**What fails:**
- **`filetype:pdf` searches** were unreliable across the batch, often returning no results even when PDFs existed on the organization's site. Generic web searches with the hospital name and "medical records" consistently outperformed filetype-specific queries.
- **Bare-bones websites with no patient forms section.** **Lake Martin Community Hospital** (Dadeville, AL, operated by Ivy Creek Healthcare) has only 21 pages total across its entire site. Its FAQ acknowledges that "a signed authorization form is required" but offers no downloadable form — the form exists only behind a patient portal login or in-person. Six different search strategies, including WordPress upload directory probing and Wayback Machine checks, all came up empty.
- **Multi-practice networks** with forms scattered across subsidiary sites. **Proliance Surgeons** has different versions of the same ROI form hosted on npsmri.com, proliancesurgeons.com, and proortho.com — one of which is an image-only scan. A patient would have no way to know which is current or canonical.

## Common Obstacles

**No form published online (2 of 16):** **Betty Jean Kerr People's Health Centers** (St. Louis, MO — FQHC) has a dedicated "Release of Health Information" page that lists fax numbers, mailing address, and a patient portal login — but no downloadable form anywhere on the site. An exhaustive search including WordPress upload directory crawls, the parent organization site (People's Family of Corporations), and the Wayback Machine turned up zero ROI forms across 17 years of archived PDFs. **Lake Martin Community Hospital** was similarly impossible — no forms section exists on the Ivy Creek Healthcare site at all.

**Bot blocking / CDN protection (2 of 16):** **Gritman Medical Center** (Moscow, ID) had its form easily findable (2 clicks from homepage) but curl returned HTML instead of the PDF. Browser-based download via DevTools was required. **Michigan Medicine** had the same issue on its older domain — Cloudflare blocked curl on `medicine.umich.edu`, though the current form on `uofmhealth.org` downloaded cleanly.

**Third-party form hosting (1 of 16):** **Addabbo Family Health Center** (Queens, NY) hosts its forms through Practice Builders (`pbformsonline.com`), which uses a JavaScript-rendered PDF viewer. The website links point to the viewer, not the raw PDF. Finding the actual download URL required inspecting network requests in browser DevTools — a step no typical patient would take.

**Image-only scans and outdated forms:** **JPS Health Network** (Fort Worth, TX) uses an image-only scan from 2018 as its primary ROI form — no text layer, no fillable fields, and the page explicitly states "It is not possible to accept electronic transfer of this form." **Community Medical Center** (Toms River, NJ) has two facility-specific forms that are both image-only scans from 2015–2017, though the parent system (RWJBarnabas Health) offers a more modern system-wide form from 2025.

## Browser Fallback Frequency

Three of 16 organizations (19%) required browser-based fallback during retrieval: Gritman Medical Center (bot blocking), Michigan Medicine's older domain (Cloudflare), and Addabbo Family Health Center (JavaScript-rendered PDF viewer). In all three cases, the forms were discoverable — the obstacle was downloading, not finding. A patient using a standard browser would likely succeed, but anyone using assistive technology, an older browser, or trying to share a direct link could encounter friction.

## Website Design Patterns That Are Systematically Harder

**Small independent hospitals with minimal web presence** were the hardest. Both impossible retrievals — People's Health Centers and Lake Martin Community Hospital — are small independents. Their websites lack patient forms infrastructure entirely. Contrast this with **Fenway Health**, also a small independent FQHC, which has a well-organized medical records page with English and Spanish forms plus an FAQ companion guide — proof that organization size alone doesn't determine findability.

**System-affiliated hospitals** generally benefit from parent system resources. Carolina Pines RMC (ScionHealth) and Community Medical Center (RWJBarnabas Health) both have forms hosted through their parent system's CMS, making them professionally structured and consistently findable — even when the individual facility's own forms are outdated scans.
