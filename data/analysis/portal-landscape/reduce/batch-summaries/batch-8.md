# Portal and Online Request Landscape — Batch 8

## Portal Adoption at a Glance

Of 190 organizations in the study, **94 (49%)** offer some form of portal or online request pathway for medical records. However, "having a portal" and "using a portal as the primary pathway" are sharply different: only **42 orgs (22%)** designate a portal as the primary mechanism for patient record requests. The remaining 52 portal-equipped orgs treat it as a secondary option alongside a downloadable PDF authorization form.

The `primary_pathway_type` field confirms the dominance of traditional workflows: 142 orgs (75%) still channel patients through a generic HIPAA authorization form, 22 use a dedicated patient-access form, and only 19 classify the portal itself as the primary pathway type.

## Vendor Landscape

Two platforms account for most portal deployments:

| Vendor | Count | Typical Role |
|--------|-------|--------------|
| **MyChart (Epic)** | 33 | Usually secondary; patients told they *can* use the portal, but the PDF form remains primary |
| **Swellbox/Datavant** | 29 | More often primary; identity-verified wizard replaces the traditional form |
| Sharecare/HDS | 4 | Third-party ROI fulfillment portal |
| JotForm | 4 | Lightweight web forms, typically independent facilities |
| MRO Express | 3 | Enterprise ROI vendor portal |
| Others (ChartRequest, MediCopy, Formstack, athenahealth, DocuSign, Verisma, etc.) | ~15 | One-off or niche solutions |

A key distinction emerges: **MyChart functions as a general patient portal** that happens to offer records access, while **Swellbox/Datavant is purpose-built for ROI requests** with identity verification and guided authorization workflows. This design difference translates to scores: Swellbox orgs average 3.61 overall versus 3.36 for MyChart orgs and 3.20 for orgs with no portal at all.

## PDF Coexistence

When a portal exists, **85% (80 of 94) still offer a downloadable PDF form** alongside it. Only 14 organizations are portal-only. These portal-only orgs cluster heavily among FQHCs (7 of 14) — including El Rio Health, Franklin Primary Health Center, La Clínica de La Raza, and HopeHealth — where the "portal" is sometimes just a MyChart login with no public-facing alternative for unregistered patients. Two of these portal-primary FQHCs (El Rio, People's Health Centers) have `online_submission_available` flagged false, suggesting the portal mention doesn't translate to a functional online request pathway.

## Who Has Portals?

**Ownership** shows the starkest divide: for-profit organizations lead portal adoption at **61%** (25/41), nonprofits sit at 50% (63/125), and **government hospitals trail at 25%** (6/24). No government facility uses a portal as its primary pathway. The for-profit advantage reflects enterprise ROI vendor contracts — HCA facilities (MountainView, Riverside Community, TriStar Centennial) all deploy Swellbox plus the MyHealthONE patient portal, while Ardent/ScionHealth hospitals use the same Swellbox stack.

**Facility type** reveals that critical access hospitals significantly lag: only **28% (8/29)** offer any portal pathway, versus 53–57% for community hospitals, FQHCs, and physician practices. Teaching hospitals fall at 46%. Among the 8 CAHs with portals, 4 use them as primary — a higher conversion rate than other facility types, suggesting that when small rural hospitals do adopt portals, they go all-in rather than maintaining dual pathways.

**System affiliation** moderately predicts adoption: major systems lead at 55%, regional systems at 50%, independents at 44%. However, independents show a higher rate of portal-as-primary (22 of 40 portal-equipped independents) compared to major systems (14 of 36). This reflects the Swellbox pattern — enterprise Swellbox deployments at system hospitals often coexist with legacy PDF forms, while independents choosing a portal tend to make it the sole pathway.

**Geography**: The South leads at 55% adoption, the West at 51%, Midwest at 42%, and Northeast at 44%. The South's lead may partly reflect the concentration of HCA and Piedmont system hospitals.

## Patterns Worth Noting

The study reveals a **portal quality spectrum**. At one end, Swellbox/Datavant deployments offer identity-verified, guided authorization wizards that genuinely modernize the records request process. At the other end, some orgs "have a portal" only in the sense that they mention MyChart login — without providing any public-facing form, leaving unregistered patients stranded. The 14 portal-only organizations deserve scrutiny: while some (AdventHealth, King's Daughters) offer genuine Swellbox-based request tools, others (La Clínica, Aaron E. Henry) have no accessible pathway for patients who lack existing portal credentials.
