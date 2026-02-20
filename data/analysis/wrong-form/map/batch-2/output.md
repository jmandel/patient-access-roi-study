# The Wrong Form Problem: Batch 2 Analysis

## Pathway Classification

Eight organizations were analyzed in depth across four facility types and five states. The results reinforce a pattern visible across the full dataset: the overwhelming majority of organizations funnel patients through generic third-party authorization forms rather than offering a dedicated patient access pathway.

| Organization | Type | Pathway | Differentiates Self-Access? |
|---|---|---|---|
| Advocare, LLC (NJ) | Physician practice | GENERIC | Partial — "Patient Request" checkbox |
| Boone County Health Center (NE) | Critical access hospital | GENERIC | No |
| Duke University Hospital (NC) | Teaching hospital | GENERIC | Partial — "Self" checkbox + instructions |
| Fenway Health (MA) | FQHC | GENERIC | No |
| Lane County Hospital (KS) | Critical access hospital | GENERIC | No |
| Desert Valley Hospital (CA) | Community hospital | GENERIC | No |
| Advocate Good Samaritan Hospital (IL) | Community hospital | BOTH (dedicated + generic) | Yes — separate forms |
| Labette Health (KS) | Community hospital | PORTAL | Yes — "Patient/Self" option |

**Tally**: 6 generic-only, 1 dedicated+generic (BOTH), 1 portal-only. Zero orgs offered *only* a dedicated patient access form. Across the broader dataset of 190 organizations, 142 (75%) use generic-only forms, 22 (12%) offer dedicated patient access forms, 19 (10%) use online portals, and 7 (4%) have phone/in-person-only pathways.

## What Makes Generic Forms a Poor Fit

The six generic-only organizations in this batch illustrate three recurring problems:

**Wrong framing — patients must cast themselves as third parties.** Every generic form is titled some variant of "Authorization for Release/Disclosure of Protected Health Information," framing the transaction as sending records *to someone else*. At Lane County Hospital, patients must "awkwardly list themselves as both the authorizing party and the recipient, navigating a form that was not designed with their use case in mind." Fenway Health's FROM/TO structure — "I give permission to release my protected health information FROM: Sender/Facility's name... TO: Recipient/Facility's name" — forces patients to write their own name into a "Recipient/Facility" field. At Boone County Health Center, the "Release Information To" vs. "Obtain Records From" dual-direction checkbox is confusing for someone who simply wants their own records.

**Unnecessary fields create friction.** Generic forms include sections that don't apply to self-access: third-party recipient addresses, purpose-of-disclosure checkboxes listing "Insurance," "Legal," and "Continuing Care" before "Personal," and expiration dates (required for authorizations but not for access requests). Lane County Hospital's form requests a Social Security Number and a witness signature — neither required by HIPAA for patient access. Desert Valley Hospital's sister-facility form warns that incomplete fields "may invalidate this Authorization," pressuring patients to fill in every field even when sections don't apply to them.

**No rights information.** None of the six generic forms reference HIPAA § 164.524, the 30-day response deadline, or fee limits for patient access copies. Duke's form comes closest to accommodating self-access — it includes a "Self (Same Info As Above)" checkbox and companion instructions addressing patient requests — but still doesn't mention the Right of Access or distinguish it from third-party authorization. Patients are left unaware that requesting their own records is a *right* with specific protections, not a discretionary favor.

## The Contrast: What Good Looks Like

Advocate Good Samaritan Hospital demonstrates best practice. Its system (Advocate Health) maintains a separate "Patient Request for Health Information" form with "Myself" as the first recipient option and a callout directing patients to the LiveWell portal. The dedicated form is distinct from the third-party "Authorization to Release Protected Health Information" — patients never need to navigate disclosure-oriented fields. This organization scores 5/5 on patient-centeredness versus 3/5 for every generic-only org in this batch.

Labette Health shows a portal-based alternative: its Formstack online form includes "Patient/Self" as the first option for both release direction and relationship to patient, clearly signaling that self-access is a supported use case. Though it uses a single form for all requesters, the digital design makes branching natural.

## Systemic Pattern

The wrong-form problem cuts across every facility type in this batch: a major teaching hospital (Duke), an FQHC (Fenway), critical access hospitals (Boone County, Lane County), and a for-profit community hospital (Desert Valley) all use generic forms. Even Duke, with 67 fillable fields and excellent companion instructions, still treats patient self-access as a special case of third-party disclosure rather than a distinct workflow. The average patient-centeredness score for generic-only organizations (2.9/5) lags dedicated-form organizations (4.4/5) by a full 1.5 points — the single largest gap across all scoring dimensions. This is not a documentation problem; it is a conceptual one. Most organizations have not internalized that a patient requesting their own records is exercising a fundamentally different right than authorizing disclosure to a third party.
