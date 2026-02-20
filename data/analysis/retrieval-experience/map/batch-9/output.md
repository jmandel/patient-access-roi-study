# Batch 9: Retrieval Experience Analysis

## Batch Composition

This batch contains retrieval notes for **1 organization**: Maury Regional Health (Columbia, TN). The limited sample size constrains generalizability, but the single case illustrates several recurring themes in ROI form retrieval.

## Search Effort: Clicks and Searches

For Maury Regional Health, the agent required **2 web searches and 1 browser navigation** to locate the ROI form:

1. A broad web search combining the org name with keywords like "authorization," "release," "health information," and "medical records form PDF" — **failed to surface a direct result**.
2. A site-scoped search (`site:mauryregional.com authorization release medical records`) — **succeeded**, immediately surfacing the medical records page and a direct PDF link.
3. A browser visit to the medical records page to confirm all available forms and download both English and Spanish versions.

From the homepage, the form page was reachable via a **2-click navigation path**: Patients and Visitors → Medical Records. This is a straightforward, well-organized information architecture.

## Navigation Patterns: What Worked vs. Failed

**What worked:**
- **Site-scoped search** (`site:domain.com`) proved effective when a broad web search failed. This is a pattern that technically savvy users might employ, but most patients would not think to use. The fact that a generic search with highly relevant keywords failed to surface the form — while a site-scoped search succeeded — suggests the site's SEO for medical records content is weak.
- **Logical website navigation** (Patients and Visitors → Medical Records) was clean and intuitive. The form was exactly where a patient would expect to find it.
- **Direct PDF links** on the medical records page. Once found, the forms were immediately downloadable without login, CAPTCHA, or other gatekeeping.

**What failed:**
- **Generic web search** with relevant keywords did not return the form or the medical records page. A patient who searches Google for "Maury Regional Health medical records form" may not find what they need on the first try.

## Obstacles Encountered

**403 errors / bot blocking (partial):** The `web_fetch` tool received a 403 Forbidden response when attempting to load the medical records page programmatically. However, a real browser (Chrome DevTools) loaded the page without issue. This suggests the website employs bot detection that blocks automated HTTP requests but does not affect human visitors. For patients, this is a non-issue — but it illustrates a broader pattern where healthcare websites increasingly deploy Cloudflare, Sucuri, or similar WAF/CDN protections that can interfere with automated accessibility testing.

**CDN-hosted forms:** The PDF forms were hosted on Cloudinary (`res.cloudinary.com`), not on the hospital's own domain. This is notable because:
- It makes the forms less discoverable via standard site searches
- It means the form URLs are long, opaque, and not human-readable
- However, the CDN hosting meant downloads were fast and reliable with no bot blocking on the PDF itself

**No other obstacles were encountered.** There were no login walls, no portal-only access requirements, no broken links, and no outdated URLs.

## Browser Fallback

A browser fallback **was needed** for this organization. The programmatic `web_fetch` tool returned a 403 for the medical records page, requiring the agent to use Chrome DevTools (a full browser) to load the page and confirm the form links. This is a common pattern: healthcare websites that use bot-detection middleware force a fallback to browser-based retrieval even when the underlying content is publicly accessible.

## Website Design Assessment

Maury Regional Health's website design is **patient-friendly for this purpose**:
- Clear information architecture with "Patients and Visitors" as a top-level navigation category
- Medical Records has its own dedicated page (not buried in an FAQ or legal section)
- Both English and Spanish versions of the ROI form are offered
- Multiple request pathways are available: downloadable PDF, online submission (via Swellbox), and patient portal (My Maury Health)
- Contact information (phone, fax, hours) is prominently displayed

The main design weakness is **discoverability via external search**: the form didn't surface through a standard web search, which is how many patients would begin their quest.

## Summary

Even in this single-organization sample, the retrieval experience reveals a characteristic tension: the form was **easy to find once on the website** (2 clicks from homepage) but **harder to find from outside** (generic search failed, site-scoped search required). Bot-detection middleware created an additional technical hurdle for automated retrieval, though it wouldn't affect a human using a browser. The organization's decision to offer multiple pathways (PDF download, online submission, patient portal) alongside bilingual forms represents a patient-centered approach that partially compensates for the discoverability gap.
