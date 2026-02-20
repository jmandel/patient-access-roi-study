# The Wrong Form Problem: Batch 4 Findings

## Classification Summary

*Note: Due to a symlink collision in batch inputs (all org files share the same basename), this analysis reads directly from the synthesis directory. Two orgs are confirmed in this batch via surviving symlinks — Sturdy Memorial Hospital and Rhode Island Hospital — and are analyzed in depth. Dataset-wide tallies are drawn from all 190 scored organizations.*

Across 190 organizations, pathway classifications break down as follows:

| Pathway Type | Count | % |
|---|---|---|
| Generic HIPAA authorization only | 135 | 71% |
| Both dedicated + generic forms | 28 | 15% |
| Online portal only | 19 | 10% |
| Phone/in-person only | 7 | 4% |
| Dedicated patient form only | 1 | <1% |

**Only 29 organizations (15%) offer any dedicated patient access form** — and 28 of those also maintain a separate generic authorization for third-party requests. The remaining 135 (71%) funnel all patients through a form designed for third-party disclosure. Another 19 use portals, and 7 have no online pathway at all.

## Detailed Batch Analysis

### Sturdy Memorial Hospital (Attleboro, MA) — GENERIC ONLY

Sturdy Memorial publishes a technically excellent 2-page fillable PDF with 59 interactive fields — among the best form documents in the study. Yet it is titled "Authorization to Release Health Information" and structured entirely around a three-party model: patient authorizes Provider A to release records to Provider B. A patient requesting their own records must list themselves as the recipient in the "Release of Protected Health Information To" field — an unintuitive workaround the form never explains. The "Purpose of Disclosure" checkboxes include "Personal" but this option is buried among "Insurance," "Legal," and "Continuing Care." The form never references HIPAA § 164.524 or the patient's Right of Access.

**Patient impact**: A patient with an excellent fillable form still faces wrong framing ("authorization to release" rather than "request for access"), must figure out to write their own name as recipient, and receives no information about their rights, fee limits, or response-time guarantees.

### Rhode Island Hospital (Providence, RI) — GENERIC ONLY

Part of the Brown University Health system, Rhode Island Hospital uses a system-wide "Authorization to Use or Disclose Protected Health Information" form. The form includes "Patient Request" as a purpose checkbox, but the overall workflow frames the transaction as disclosing records *to* a named recipient ("To release to:"). A patient must awkwardly fill in their own name as both patient and recipient. The form has zero fillable fields despite being a born-digital 2024 PDF.

More concerning: the form bundles a broad liability waiver requiring patients to "release Brown University Health, its employees and my physicians from all liability arising from this disclosure." Delivery options are limited to paper or CD — no electronic delivery in 2024. Fees are described only as "There may be a fee associated with this request" with no amounts or patient-access fee distinction.

**Patient impact**: Wrong framing, no fillable fields, a liability waiver that may intimidate patients, and no electronic delivery option. A patient exercising a statutory right is asked to sign away liability protections.

## What Makes Generic Forms a Poor Fit

Three recurring problems emerge across the 135 generic-only organizations:

**1. Wrong framing — patients cast as third parties.** Every generic form is titled some variant of "Authorization for Release/Disclosure of PHI," framing the transaction as sending records to someone else. At Mass General Hospital, the same form serves patients, attorneys, and insurers. At Colquitt Regional Medical Center, a patient must navigate a "Release Information To" field designed for external organizations. The entire document says "you are authorizing us to give your records to someone" rather than "you are requesting your own records."

**2. Unnecessary fields create friction.** Generic forms collect recipient names, addresses, relationships, and purposes — fields meaningless for self-access. Several orgs request Social Security Numbers (an unnecessary privacy risk). Expiration dates — required for § 164.508 authorizations but not for § 164.524 access requests — impose artificial deadlines. Sturdy Memorial's 90-day hard expiration leaves a narrow margin given HIPAA's 30-day processing window.

**3. Missing rights information.** Generic forms virtually never reference the patient's Right of Access, HIPAA's 30-day response requirement, fee limits ($6.50 per patient per request under the 2024 HHS guidance), or electronic format options. Patients are left unaware that requesting their own records is a *right* with specific protections, not a discretionary favor.

## The Contrast: What Good Looks Like

**Barnes-Jewish Hospital** (BJC HealthCare) maintains a separate "REQUEST FOR ACCESS TO PROTECTED HEALTH INFORMATION BY INDIVIDUAL PATIENTS" — using right-of-access framing rather than authorization language. The website separates "Individual requests" from "Third-party requests," so patients see an unambiguous path. The form offers email delivery and states the 30-day response timeline.

**Advocate Good Samaritan Hospital** has a separate "Patient Request for Health Information" form with "Myself" as the first recipient option and a portal callout at the top.

The average patient-centeredness score for generic-only organizations (2.9/5) lags dedicated-form organizations (4.4/5) by 1.5 points — the single largest gap across all scoring dimensions.

## Patterns

The wrong-form problem cuts across all facility types but is most acute at **critical access hospitals** (27 of 28 use generic-only, 96%) and **physician practices** (21 of 23 generic-only, 91%). Independent organizations are disproportionately affected (68 of 135 generic-only are independents), likely reflecting limited compliance resources. No strong regional pattern emerges — this is a nationwide systemic issue rooted in a fundamental confusion between HIPAA § 164.508 (authorization for third-party disclosure) and § 164.524 (individual right of access).
