# Retrieval Experience Analysis — Batch 1

## Overview

This batch of 16 organizations reveals a retrieval landscape that ranges from trivially easy to effectively impossible, with the median experience requiring 2–3 search queries and 2 clicks from a provider's homepage. The dominant pattern: large health systems and well-resourced organizations make forms findable, while small independents and those that have outsourced records management to third-party vendors create the hardest experiences for patients.

## Typical Search Effort

Of the 16 organizations examined, roughly half (Ascension Sacred Heart, Black River Memorial, Colquitt Regional, CrescentCare, Erie Family Health, NewYork-Presbyterian, Piedmont Medical Center, Lincoln Hospital) yielded forms within 1–2 web searches and 2 clicks from the homepage. For these, a site-scoped Google search (`site:example.org medical records release`) or a direct visit to a "Patient Resources" or "Medical Records" page surfaced a clearly labeled download link.

At the harder end, organizations like Aaron E. Henry CHC, Schweiger Dermatology, HopeHealth, and Minnie Hamilton required 5–9 distinct search strategies — including Wayback Machine lookups, sitemap analysis, HTML source inspection, and direct URL guessing — and still produced no usable form. The Iowa Clinic fell in the middle: the current site has no downloadable PDF, but archived versions were recoverable from the Wayback Machine.

## Navigation Patterns That Worked

**Site-scoped web search** was the single most reliable strategy. Queries like `site:domain.org authorization release medical records` found the right page in 10 of 16 cases. **Navigating to a "Medical Records" or "Patient Resources" page** from the homepage was the second-best approach and worked in roughly the same cases, typically requiring exactly 2 clicks (e.g., Patients & Visitors → Health Records).

**Searching for the parent health system** rather than the individual facility was critical for system-affiliated hospitals. Huntington Hospital publishes no facility-specific forms — searching for "Northwell Health" forms was the only viable path. Similarly, GI Alliance affiliate practices each have their own scanned forms, but the canonical text-based form lives on the parent site.

## Navigation Patterns That Failed

**filetype:pdf searches** were surprisingly unreliable. Queries like `"Organization Name" "authorization" filetype:pdf` failed to return results for 10 of 16 organizations, even when a PDF existed on the site. **Direct URL guessing** (e.g., trying `/wp-content/uploads/release-of-information.pdf`) never succeeded. **Sitemap analysis** (crawling XML sitemaps) was attempted for Schweiger Dermatology and Aaron E. Henry CHC; in both cases, it confirmed the *absence* of forms rather than locating them.

## Common Obstacles

**Third-party portal delegation** was the most significant barrier. Four organizations (HopeHealth → HealthMark Group, Minnie Hamilton → ChartRequest, The Iowa Clinic → Swellbox/Datavant, Piedmont → Datavant) have outsourced records requests to external vendors. In these cases, the authorization form is embedded within a portal workflow that requires account creation or email verification — there is no standalone PDF a patient can download, review, and fill out offline. HopeHealth's HealthMark portal requires email verification before any workflow is visible; Minnie Hamilton's ChartRequest requires full account creation.

**Bot blocking / Cloudflare challenges** affected at least 3 organizations. Piedmont Medical Center's PDFs returned HTML challenge pages to `curl`, requiring browser-based workarounds. Lincoln Hospital's health records page returned 403 to automated fetchers. UTMB's SharePoint-hosted forms returned login pages to direct requests. In each case, a real browser successfully loaded the content.

**No form exists online** for 3 of 16 organizations (Aaron E. Henry CHC, Schweiger Dermatology, HopeHealth). Aaron E. Henry CHC's website has no medical records page at all; the WordPress uploads directory returns 403 for all access attempts. Schweiger Dermatology — a multi-state practice with hundreds of locations — has no patient forms section, no Notice of Privacy Practices, and no records request page; patients must call or use the patient portal behind login.

**Confusing search results / name collisions** created false leads. HopeHealth (Florence, SC) was repeatedly conflated with Hope Health Ellis County, TX, producing a JotForm result that appeared relevant but belonged to an entirely different organization. Huntington Hospital (NY/Northwell) conflated with Huntington Hospital (CA/Huntington Health).

## Browser Fallback Frequency

Browser-based access was needed in roughly 4 of 16 cases (25%). UTMB's SharePoint links, Piedmont's Cloudflare-protected PDFs, Lincoln Hospital's 403-returning pages, and NewYork-Presbyterian's DAM-hosted form all required a full browser to extract the actual PDF. The pattern: any hosting platform beyond simple static file serving (SharePoint, Widen DAM, Cloudflare-protected CMS) tends to block automated retrieval.

## Website Designs That Are Systematically Harder

Three design patterns create systematic difficulty:

1. **Portal-only organizations** that have eliminated downloadable forms entirely (HopeHealth, Minnie Hamilton, The Iowa Clinic). Patients who want to review the authorization terms before starting an electronic workflow — or who lack reliable internet — are left without options.

2. **Large multi-location practices without centralized forms** (Schweiger Dermatology, GI Alliance affiliates). When each location may or may not have its own form, and the parent organization's website doesn't aggregate them, patients face a maze.

3. **Minimal-website FQHCs and critical access hospitals** (Aaron E. Henry CHC) whose sites function primarily as informational brochures with no patient-facing document infrastructure. These organizations likely handle records requests in person or by phone, making the online pathway a dead end.

By contrast, the easiest sites share common traits: a dedicated "Medical Records" page linked from the main patient navigation, clearly labeled download links (e.g., "Download Medical Records Authorization Form"), and forms hosted as simple static files on the organization's own domain.
