# ROI Form Retrieval Experience: Batch 0 Analysis

## Overview

Across 80 organizations in this batch, ROI form retrieval difficulty broke down as follows:

- **Easy (1–2 searches, clearly linked):** ~55 organizations (69%)
- **Moderate (multiple strategies, workarounds needed):** ~13 organizations (16%)
- **Hard/Impossible (no form online):** ~12 organizations (15%)

## Typical Search Effort

Most forms were found within **2–3 search queries**. The dominant successful pattern was a three-step funnel: (1) a broad web search for the organization + "authorization release health information PDF," (2) a site-scoped search (`site:domain.com authorization release medical records`), and (3) navigating the organization's medical records page directly. The site-scoped search was the single most reliable strategy, succeeding even when broad searches returned nothing (e.g., Barrett Hospital, ANHC, Myrtue Medical Center, Millinocket Regional Hospital). For roughly a third of organizations, the very first web search returned a direct PDF link — Northwestern Memorial, Cordova Community Medical Center, and Owensboro Health are examples where no website navigation was needed at all.

## Navigation Patterns That Worked vs. Failed

**Worked well:** Organizations with a dedicated "Medical Records" or "Patient Forms" page linked from the main navigation (Patients & Visitors → Medical Records) provided the smoothest experience. Examples include Columbia Memorial Hospital, Fenway Health, and Philadelphia FIGHT, where forms were 2 clicks from the homepage. Large health systems (HCA Healthcare, Advocate Health, Northwell Health, Mass General Brigham) centralized forms at the system level, making a single form cover multiple facilities.

**Failed or frustrated:** Accordion/collapsed sections hid download links at Samaritan Lebanon Community Hospital, where the PDF links were buried inside a "Sending a Request by Mail or Fax" section invisible until expanded. Virginia Garcia embedded PDF URLs inside Divi theme JavaScript config rather than standard `<a href>` links. At UMCSN, the medical records page linked to an amendment form but *not* the actual ROI form — a notable findability gap. The Valley Hospital's medical records page removed form links entirely, directing patients to an online tool, though the PDFs remained on the server.

## Common Obstacles

**Stale/broken URLs (7 organizations):** Medical City Dallas, Texas Oncology, WakeMed, Hartford Hospital, UMMC, and Troy Regional Medical Center all had outdated PDF URLs returning 404 errors in search results. UMMC's English form link was broken on their own website while the Spanish version worked fine. Texas Oncology's migration to Sitecore Edge CDN left three old URLs dead.

**Bot/CDN blocking (9 organizations):** Cloudflare challenged downloads at Good Samaritan Medical Center (West Palm Beach), Piedmont Medical Center, Michigan Medicine, and Cottage Hospital (Woodsville, NH — where Turnstile was completely impassable). Akamai blocked Goleta Valley Cottage Hospital's main domain. Incapsula protected Penn Medicine. CentraCare and Cone Health returned "Access Denied." MountainView Hospital's original URL served HTML instead of PDF. In all cases, browser-based fallback (Chrome DevTools with JavaScript `fetch()`) or alternative CDN URLs resolved the issue.

**No form published online (12 organizations):** Neshoba General Hospital, Holy Cross Hospital (Taos), Neighborhood Health Association, El Rio Health, Betty Jean Kerr People's Health Centers, Franklin Primary Health Center, and Consensus Health published no ROI form whatsoever. Patients at these organizations must call or visit in person. AdventHealth Hendersonville, Anaheim Global Medical Center, HopeHealth, and Southeast Medical Group outsourced entirely to third-party portals (Swellbox, ChartRequest, HealthMark, MediCopy) requiring account creation — no downloadable PDF exists. Desert Valley Hospital had no form on its site; the correct template was only discoverable on a sister Prime Healthcare hospital's website.

**Login walls/portal-only access:** Anaheim Global Medical Center's ChartRequest portal requires account creation before any form is visible. HopeHealth's HealthMark portal requires email verification. These represent real barriers — a patient cannot even *see* the authorization form without registering.

## Browser Fallback Frequency

Browser-based download (via Chrome DevTools) was needed for approximately **10–12 organizations** (12–15%), primarily due to bot protection (Cloudflare, Akamai, Incapsula) or SharePoint/DAM hosting that rejected programmatic requests (UTMB's SharePoint, NYP's Widen DAM platform). In most cases, the workaround was straightforward — navigate to the URL in a browser and the PDF loads normally.

## Website Designs That Are Systematically Harder

**Small/rural critical access hospitals** were the most inconsistent. Some (Barrett Hospital, Cordova Community Medical Center, Copley Hospital) had clean, simple sites with forms easy to find. Others (Neshoba General, Holy Cross Taos, Troy Regional, Mayers Memorial) had minimal websites with no medical records section at all. Cuba Memorial Hospital's form was only findable by following a footer link to a parent organization's site.

**Physician practice networks** (Consensus Health, Southeast Medical Group, ENT & Allergy Associates) were notably harder. Decentralized governance means forms may exist only at individual practice locations, not on the parent organization's site. ENT & Allergy Associates hosted their form as a `.doc` file from 2009, not linked from any navigable page.

**Large for-profit systems** using CDN-hosted forms (HCA's `hcadam.com`, Tenet's `librariesprovider` paths) generally worked well but introduced URL opacity — patients cannot guess or bookmark these URLs, and they break if the CDN restructures.

**Sites that have recently migrated platforms** (Texas Oncology to Sitecore, Troy Regional from FastHealth to WordPress, UMMC) leave behind broken URLs that persist in search engine indexes for months, sending patients to 404 pages.

## Key Takeaway

For the majority of organizations, a patient with moderate internet skills could find the ROI form within 5 minutes using a search engine. The 15% of organizations with no online form represent a significant access barrier — these patients must know to call the medical records department, a step that many may not take. Bot-blocking affected automated retrieval more than it would affect a real patient using a browser, but stale URLs and missing medical records pages are obstacles that affect everyone equally.
