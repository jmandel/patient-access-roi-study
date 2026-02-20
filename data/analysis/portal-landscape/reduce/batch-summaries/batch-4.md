# Portal & Online Request Landscape — Batch 4

## Overview

Of 190 organizations with completed scoring, **94 (49%)** offer some form of online portal or patient portal pathway for medical records requests. The remaining 96 orgs rely exclusively on downloadable PDF forms, phone, fax, or in-person processes. Despite nearly half offering a portal option, it is the **primary** pathway at only 34 orgs (18% of total); at the other 60, the portal is a secondary or supplementary channel alongside a traditional PDF form.

## Portal Types: Patient Portals vs. Third-Party ROI Platforms

Two distinct portal models emerge:

- **Patient portals** (56 orgs): Typically the facility's existing clinical portal (e.g., MyChart), where records requests are one feature among many. These were classified as `patient_portal`.
- **Third-party ROI platforms** (58 orgs): Standalone online wizards operated by release-of-information vendors, classified as `online_portal`. These are purpose-built for records requests and often involve identity verification, e-signature, and per-page fee structures.

Twenty orgs offer **both** types — for instance, Bon Secours St. Mary's Hospital (Richmond, VA) lists both MyChart and a Swellbox records request wizard, while NewYork-Presbyterian Hospital offers MyChart alongside a Verisma portal.

## Vendor/Platform Breakdown

**Patient portal vendors** are dominated by a single platform:

| Vendor | Count |
|---|---|
| Epic MyChart | 39 |
| HCA MyHealthONE | 3 |
| athenahealth | 2 |
| eClinicalWorks | 1 |
| Medfusion/NextGen | 1 |
| Unnamed/unknown | 10 |

**Third-party ROI portal vendors** show a different leader:

| Vendor | Count |
|---|---|
| Datavant/Swellbox | ~31 |
| Ciox/MRO/HealthMark | 5 |
| JotForm | 4 |
| Sharecare | 4 |
| ChartRequest/ChartSwap | 3 |
| Formstack | 2 |
| Verisma | 2 |
| Other (DocuSign, ScanSTAT, MediCopy, etc.) | ~7 |

Epic MyChart and Datavant/Swellbox together account for roughly 70 of the ~120 portal instances across both categories, making them the two dominant platforms in the portal landscape.

## PDF Forms Alongside Portals

Strikingly, **all 94 portal orgs also have at least one downloadable PDF document**, and 92 of those include a recognizable authorization or release form. Only Anaheim Global Medical Center directs patients to a ChartRequest portal with no downloadable ROI form at all. The PDF-alongside-portal pattern is nearly universal: even when a portal is the primary pathway, organizations maintain a paper fallback — though these are sometimes buried in collapsed website sections (e.g., Samaritan Lebanon Community Hospital's PDF hidden behind an accordion menu).

## Primary vs. Secondary Role

When a portal exists, it is the **primary** pathway at only 34 orgs (36% of portal orgs). The most common primary pathway across all 190 orgs remains a `generic_hipaa_auth` PDF form (142 orgs, 75%), followed by `dedicated_patient_form` (22 orgs), `online_portal` (19 orgs), and `phone_or_in_person_only` (7 orgs). MyChart is particularly notable as a secondary channel: of 39 MyChart-equipped orgs, only 5 designate it as primary; the rest treat it as a supplementary option alongside a downloadable form.

## Patterns by Organization Type

**Facility type**: Physician practices (58%) and FQHCs (56%) have the highest portal adoption rates, followed by community hospitals (54%). Critical access hospitals lag at 28%, likely reflecting smaller IT budgets and less vendor outreach.

**Ownership**: For-profit organizations lead at 61% portal adoption vs. 50% for nonprofits and only 25% for government facilities. The for-profit advantage is driven partly by HCA facilities uniformly deploying MyHealthONE and Swellbox.

**System affiliation**: Major-system hospitals adopt portals at 55% vs. 45% for independents. System-affiliated orgs benefit from enterprise-wide deployments — Ascension facilities consistently offer Swellbox, Mercy Health pairs MyChart with Swellbox, and HCA deploys MyHealthONE plus Swellbox across its network.

**Region**: The South leads portal adoption at 55%, followed by the West (51%), while the Midwest (43%) and Northeast (44%) trail modestly.

## Notable Observations

1. **Datavant/Swellbox is ubiquitous among system hospitals**: Nearly all Ascension, HCA, Mercy Health, and several Bon Secours facilities deploy Swellbox as their primary or secondary online request channel. This vendor's per-page fee model (often $6.50 flat + $0.12/page) raises concerns about HIPAA's cost-based fee limits for patient self-access requests.

2. **MyChart rarely serves as the primary records pathway**: Despite its market dominance in patient portals, MyChart is almost always a secondary channel. Orgs appear to prefer routing formal records requests through dedicated ROI vendors rather than the clinical portal.

3. **FQHCs show surprising digital adoption**: Community health centers — often associated with under-resourced populations — adopt portals at 56%, sometimes through creative solutions like JotForm-based HIPAA-compliant forms (Riverwood Healthcare Center) or Luma Health integrations (Community Health Center, Inc., CT).

4. **Government hospitals are offline-first**: Only 25% offer any portal pathway, with most relying on downloadable PDFs, fax, or in-person requests. JPS Health Network and Grady Memorial Hospital — large urban safety-net systems — have no portal pathway despite their scale.
