# Batch 5: Retrieval Experience Analysis

## Overview

This batch covers 16 organizations spanning teaching hospitals (MUSC Health, UAB), critical access hospitals (Avera Hand County, Gritman, Mayers Memorial), physician practices (Lexington Clinic, Olmsted, Boulder Medical Center, Southeast Medical Group), FQHCs (Community Health Center CT), community hospitals (King's Daughters Brookhaven), and a practice management organization (EyeSouth Partners). The retrieval experiences ranged from effortless one-search discoveries to multi-step investigations requiring detective work across sister hospitals.

## How Many Searches Did It Take?

About half the organizations (8/16) yielded forms within 1–2 web searches. AdventHealth Central Texas, Lexington Clinic, and Providence Sacred Heart were the easiest — a single search for the org name plus "authorization release health information filetype:pdf" returned direct PDF download links immediately. Boulder Medical Center, UAB Hospital, and Valleywise Health required two searches but were still straightforward, with forms clearly linked from dedicated medical records pages.

The other half required 3–7 searches. Desert Valley Hospital was the worst case at 7 distinct search attempts: the hospital's website describes its records process but provides no downloadable form, forcing the searcher to probe the parent system (Prime Healthcare), check an employee health plan form that turned out to be employee-only, and ultimately find the correct patient template on a sister hospital's website (Chino Valley Medical Center). EyeSouth Partners required extensive searching across affiliated practices because the parent entity is a practice management organization with no patient-facing content at all.

## Navigation Patterns: What Worked vs. Failed

**Successful patterns:**
- **Direct web search with filetype:pdf** was the most reliable first step. When an organization hosts its form as a standard PDF on a WordPress or CMS site, this search reliably surfaces it.
- **Navigating to a "Medical Records" or "Patient Forms" page** worked well for organizations with clear website architecture. MUSC Health, Providence Sacred Heart, and UAB Hospital all had dedicated pages with clearly labeled download links — typically 2 clicks from the homepage (e.g., Patients & Visitors → Medical Records).
- **Parent system websites** helped when facility-specific forms didn't exist. Avera Health's centralized medical records page served Hand County Memorial Hospital, and Providence's per-facility records pages served Sacred Heart.

**Failed patterns:**
- **URL pattern guessing** (e.g., trying `/wp-content/uploads/2022/12/DVH-Authorization-...pdf`) consistently returned 404s at Desert Valley Hospital.
- **Site-scoped searches** failed when organizations simply don't host PDFs — King's Daughters Brookhaven, EyeSouth Partners, and Desert Valley Hospital returned nothing useful from `site:` queries.
- **Searching by facility name** caused confusion when names are shared. King's Daughters Medical Center in Brookhaven, MS was repeatedly conflated with King's Daughters Health System in Ashland, KY, an entirely separate organization.

## Common Obstacles

**Bot blocking (3/16, 19%):** Avera Health, Gritman Medical Center, and Olmsted Medical Center all blocked direct `curl` downloads, returning "Access Denied" HTML instead of PDFs. All three required browser-based fallback through Chrome DevTools — fetching via JavaScript `fetch()`, extracting base64 content, and decoding locally. Notably, the forms were easy to *find* at these sites; the barrier was purely technical at the download step.

**No downloadable form at all (3/16, 19%):** Desert Valley Hospital, King's Daughters Brookhaven, and Mayers Memorial Hospital do not publish ROI forms on their websites. King's Daughters has fully outsourced to Datavant/Swellbox's online wizard. Desert Valley's medical records page instructs patients to call or visit in person. Mayers Memorial's form was only discoverable on a third-party CDN (PatientPop) with no link from the hospital's own pages — a generic, unbranded form with no indication it belongs to Mayers Memorial.

**Third-party outsourcing obscuring access (2/16):** Southeast Medical Group redirects patients through a chain (mysemg.com → semg.link/med-records → medicopy.net) to reach MediCopy's generic authorization form. Community Health Center CT's patient forms page has transitioned from PDF downloads to Luma Health online portals, though older PDFs remain discoverable via search.

**Portal transition friction (1/16):** Community Health Center CT's current patient forms page links to Luma Health survey URLs rather than direct PDFs. The older downloadable forms from 2019 still exist on the WordPress uploads directory but are no longer linked from the website — a patient navigating the site today would not find them.

## Browser Fallback Frequency

Three of 16 organizations (19%) required browser-based download due to bot blocking (Avera, Gritman, Olmsted). In all three cases, the forms were findable through normal search — the obstacle was CDN-level access control (Akamai in Olmsted's case) that rejected non-browser HTTP clients. This is a purely technical barrier that wouldn't affect a patient using a web browser, but it highlights how organizations' security configurations can create friction for automated or programmatic access.

## Website Designs That Are Systematically Harder

Three design patterns consistently produced difficult retrieval experiences:

1. **Practice management organizations / holding companies** (EyeSouth Partners): When the named entity is a management company rather than a clinical practice, there is no patient-facing website, no forms page, and no centralized records process. Patients must identify their specific affiliated practice and navigate that practice's website independently. EyeSouth's affiliates showed inconsistent approaches — some offered downloadable PDFs, others used Sharecare portals, and one had a broken forms page (404).

2. **Small hospitals with minimal web presence** (Mayers Memorial, Desert Valley Hospital): These sites have medical records pages that describe department hours and phone numbers but provide no downloadable forms. The ROI form, if it exists online at all, lives on a third-party platform (PatientPop, Prime Healthcare sister site) with no link from the hospital. A patient who navigates to the hospital website would conclude that no form is available.

3. **Fully outsourced records processes** (King's Daughters → Datavant, Southeast Medical Group → MediCopy): When organizations outsource ROI entirely, the patient experience depends on the third-party vendor's interface rather than the provider's website. The redirect chains can be confusing, and the resulting forms are generic rather than provider-specific.

In contrast, large health systems (Providence, MUSC, AdventHealth, UAB) consistently provided the best retrieval experience: dedicated medical records pages, clearly labeled forms, multiple language options, and direct PDF links with no authentication barriers.
