# Batch 4: Retrieval Experience Analysis

## Overview

This batch of 15 organizations reveals a stark divide in form findability. About 40% of organizations made their ROI forms readily discoverable in 1–2 web searches, while a third required extensive investigation across 5+ search strategies — sometimes without ever finding a downloadable form at all.

## Typical Search Effort

**Easy (1–2 searches, 6 orgs):** AdventHealth Central Texas, Boulder Medical Center, Providence Sacred Heart, UAB Hospital, Valleywise Health, and Ascension Saint Thomas Rutherford all surfaced forms quickly. A web search combining the facility name with "medical records release form" typically returned direct PDF links. Providence and UAB stood out — a single search found well-organized, facility-specific medical records pages with clearly labeled downloads.

**Moderate (3–4 searches, 4 orgs):** Avera Hand County Memorial, Gritman Medical Center, Olmsted Medical Center, and Community Health Center (CT) required additional steps. In these cases, the form existed and was findable, but technical barriers (bot blocking) or website transitions (CHC migrating to Luma Health portals) added friction. Olmsted's form was logically placed under "Patients & Visitors > Your Care & Visit > Manage Your Health Information" — clear navigation once you found the right page.

**Hard (5+ searches, 5 orgs):** Desert Valley Hospital, EyeSouth Partners, King's Daughters Medical Center (Brookhaven), Mayers Memorial Hospital, and Southeast Medical Group required exhaustive search strategies and sometimes yielded no usable form from the organization's own website.

## Navigation Patterns That Worked vs. Failed

**Effective strategies:**
- **Broad web search with "medical records" + "release form"** was the single most reliable approach, outperforming filetype:pdf-specific searches which frequently returned no results.
- **Parent system medical records pages** worked well for system-affiliated hospitals. Avera's centralized records page covered all its facilities; Providence maintained per-facility pages under a system-wide portal with clearly differentiated forms.
- **Directly navigating "Patients & Visitors" or "Medical Records" sections** succeeded when organizations had well-structured websites (Boulder, Gritman, Olmsted).

**Ineffective strategies:**
- **`filetype:pdf` searches** missed forms in the majority of cases, particularly when PDFs were hosted on CDNs or third-party platforms.
- **URL guessing** (e.g., constructing likely PDF paths on dvmc.com for Desert Valley) consistently returned 404 errors.
- **Sitemap crawling** rarely surfaced ROI forms even when they existed on the site.

## Common Obstacles

**No form available online (3 orgs):** Desert Valley Hospital's medical records page tells patients to call or visit in person — the form itself is not posted. The agent had to locate the identical system-wide template on a sister Prime Healthcare hospital's website (Chino Valley Medical Center). King's Daughters Medical Center (Brookhaven) has fully outsourced records requests to Datavant/Swellbox, with no downloadable PDF. Mayers Memorial Hospital's Medical Records page describes the department but links to no form; the only ROI form found was an unbranded generic document on PatientPop's CDN, not linked from the hospital site.

**Third-party outsourcing (3 orgs):** Southeast Medical Group redirects patients through a chain — mysemg.com → Resources → Medical Records → "Request Records" → medicopy.net — to reach a generic MediCopy authorization form. King's Daughters uses Datavant/Swellbox. Community Health Center (CT) has migrated from downloadable PDFs to Luma Health online portals, though older PDF versions remained accessible on their WordPress uploads directory.

**Bot blocking (3 orgs):** Avera, Gritman, and Olmsted all blocked direct HTTP downloads (curl/wget) at the CDN level (Akamai or similar), returning "Access Denied" HTML. This required falling back to Chrome DevTools, fetching the PDF via JavaScript `fetch()`, extracting base64-encoded content, and decoding locally. While a real patient with a browser wouldn't face this, it signals aggressive CDN configurations that could break direct link sharing or assistive technology.

**Name confusion:** King's Daughters Medical Center (Brookhaven, MS) shares its name with King's Daughters Health System (Ashland, KY), causing search engines to mix results from two unrelated organizations.

## Browser Fallback Frequency

3 of 15 organizations (20%) required browser-based workarounds due to bot blocking. This is a notable rate — one in five sites actively interfered with programmatic PDF retrieval.

## Systematically Harder Website Designs

**Practice management organizations:** EyeSouth Partners is a management company overseeing 60+ ophthalmology practices. Its corporate website has zero patient-facing content — no forms, no medical records page, nothing. Patients must somehow know which specific affiliated practice to contact, and those practices have inconsistent approaches (some use Sharecare portals, some offer PDFs, some have broken forms pages).

**For-profit chains with decentralized web presence:** Desert Valley Hospital (Prime Healthcare) exemplifies a system where the template form exists but individual facilities haven't posted their version. Patients must discover the parent system and check sibling hospitals — an unreasonable expectation.

**Small/rural hospitals with minimal web infrastructure:** Mayers Memorial Hospital's site is bare-bones, with a medical records page that describes hours and a phone number but provides no downloadable form. The only form found was hosted on a third-party platform with no visible connection to the hospital.

**Portal-only organizations:** King's Daughters has eliminated the downloadable form entirely in favor of a Datavant wizard. While potentially streamlined for some patients, this creates a single point of failure and removes the option of a paper-based process.

## Summary

The retrieval experience in this batch divides cleanly into organizations that treat form accessibility as a priority (Providence, UAB, Valleywise — with dedicated pages, labeled downloads, and separate patient-access forms) and those where finding the form is itself a barrier to exercising patient rights. The hardest cases share a common theme: the organization has delegated, fragmented, or simply neglected the online availability of what should be a basic patient-facing document.
