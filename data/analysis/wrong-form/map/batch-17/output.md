# The Wrong Form Problem: Batch 17 Findings

## Classification Summary

Across 190 organizations with scored synthesis data, the access pathway classifications are:

| Pathway Type | Count | % |
|---|---|---|
| Generic HIPAA authorization only | 135 | 71% |
| Dedicated patient access form or both | 29 | 15% |
| Online portal (third-party vendor) | 19 | 10% |
| Phone/in-person only (no online path) | 7 | 4% |

Only **29 organizations (15%)** offer any form of dedicated patient access pathway — either a standalone patient access form (22 orgs) or a generic form with explicit individual-access differentiation (7 orgs with `has_individual_access_pathway: true` despite a generic primary form). The remaining **135 orgs (71%)** funnel patients requesting their own records through a form designed for third-party disclosure.

## What Makes the Generic Form Wrong

When a patient wants their own records and encounters a generic HIPAA authorization form, several concrete problems arise:

**Reversed framing.** The form asks patients to authorize the release of records *to* a named recipient — forcing the patient to list themselves as both "patient" and "person authorized to receive." At Abbeville Area Medical Center, the form's heading — "Authorization to Release Protected Health Information" — frames the patient as granting permission for disclosure rather than exercising a statutory right. The patient becomes a third party in their own request.

**Unnecessary and intrusive fields.** Generic forms collect recipient name, address, phone, and relationship — meaningless for self-access. Several organizations request Social Security Numbers: Addabbo Family Health Center uses New York's OCA Form 960 (originally designed for litigation), which collects full SSN; Guthrie Corning Hospital and Decatur County Hospital request the last four digits. This creates identity-theft risk for a transaction that needs no such verification.

**Missing rights information.** Generic authorization forms almost never mention HIPAA's 30-day response deadline, fee limits for patient access, the right to electronic copies, or format/delivery options. The patient's right of access under § 164.524 is treated as if it doesn't exist — the form implies discretionary approval. St. Joseph's Hospital, despite having a dedicated patient access form, still uses language about "acceptance or denial" of the request, as if individual access were optional rather than mandatory.

**Excessive requirements.** Troy Regional Medical Center's form states all fields "MUST be completed or authorization is invalid" and bundles a liability waiver patients must sign. Abbeville requires two witness signatures — a burden that exceeds HIPAA requirements for patient access. Cottage Hospital has a witness signature line with no indication it's optional and includes confusing "remuneration" fill-in fields. JPS Health Network charges a $75 flat fee for electronic delivery and a $30 minimum for the first 10 pages, without distinguishing patient access requests (subject to reasonable cost-based limits) from third-party releases.

## Patterns by Organization Type

**Critical access hospitals** are the worst offenders: 93% (27 of 29) offer only a generic form. These small rural facilities typically lack health information management resources and often use a single all-purpose authorization.

**Major health systems** perform best: only 55% (36 of 65) use a generic-only pathway, compared to 76% of independents and 86% of regional systems. Systems like Advocate Health and Ascension maintain separate patient access forms across their facilities. CommonSpirit Health's St. Joseph's Hospital explicitly separates "request for yourself" from third-party authorization on its medical records page.

**For-profit organizations** have the highest generic-only rate at 80%, compared to 67% for nonprofits. Government hospitals fall between at 75%.

## Contrasting Examples

**Good practice — St. Joseph's Hospital (Phoenix):** Maintains a dedicated "Patient's Request for Access to Protected Health Information" (form-2) explicitly for patient self-access, separate from a third-party authorization form. Offers USB, CD, secure email, and paper delivery. The medical records webpage clearly separates the two pathways. However, execution still falls short — the form has zero fillable fields and uses discretionary "acceptance" language.

**Poor practice — Cottage Hospital (NH):** Offers only a generic HIPAA authorization form with no submission instructions, a witness signature line, confusing remuneration fields, and phantom page numbering ("PAGE 14 OF 28" on a standalone one-page form). The website was blocked by Cloudflare Turnstile; forms were retrievable only through the Wayback Machine.

## Key Takeaway

The wrong-form problem is systemic: **71% of organizations give patients a third-party authorization form when they want their own records.** This misalignment means patients must navigate unnecessary fields, miss information about their rights, and confront a legal framework built for disclosure to others — not for exercising the right Congress created to give them access to their own health information.
