# The Wrong Form Problem — Batch 16 Analysis

## Classification Summary

Of 195 organizations in this batch, 190 had usable synthesis data. Each was classified by the type of access pathway offered to patients requesting their own records:

| Category | Count | % of analyzed |
|---|---|---|
| **Generic HIPAA authorization only** | 142 | 74.7% |
| **Both dedicated + generic forms** | 19 | 10.0% |
| **Portal-only** | 19 | 10.0% |
| **Dedicated patient access form only** | 3 | 1.6% |
| **Could not determine** (phone/in-person only, no web presence) | 7 | 3.7% |

The dominant finding is stark: **three out of four organizations offer patients only a generic third-party authorization form** when the patient wants to exercise their individual right of access under HIPAA § 164.524. Just 22 organizations (11.6%) provide any dedicated patient access form — and only 3 offer it without also publishing a generic authorization alongside it.

## What Makes a Generic Form a Poor Fit?

Generic HIPAA authorization forms are built around a three-party model: the patient authorizes Provider A to release records *to* Recipient B. When a patient wants their own records, this framework creates several concrete problems:

**Conceptual mismatch.** The patient must fill in their own name as both the authorizer and the recipient. At Bon Secours St. Mary's Richmond, the form asks the patient "TO DISCLOSE" information to a named recipient — a patient must "awkwardly name themselves as both authorizer and recipient, navigating a form whose conceptual framework doesn't match their use case." Desert Regional Medical Center's form similarly forces patients to "list themselves as the recipient, an awkward workaround that conflates the HIPAA Right of Access (§ 164.524) with the authorization framework of § 164.508."

**Wrong legal framing.** A patient access request under § 164.524 is a *right* — it does not require the patient's authorization. Yet generic forms frame the transaction as a voluntary *authorization* under § 164.508, implying the provider is doing the patient a favor. Saratoga Hospital's form is titled "Authorization to Disclose Protected Health Information" with no mention of patient access rights. Grady Memorial Hospital's form includes a broad liability waiver — "I will not hold Grady... responsible for anything that may happen from the use or release of my PHI" — bundled into what should be a straightforward access request.

**Unnecessary fields and confusion.** Generic forms typically require fields irrelevant to self-access: the name, address, and relationship of a third-party recipient; a "purpose of disclosure" selection oriented toward insurance, legal, or continuity-of-care uses; and sometimes witness or notarization lines. Among the 142 generic-only organizations, 19 require notarization or a witness signature. At SSM Health St. Mary's Madison, patients must "write 'self' in the recipient field" — a workaround no form instructs them to do. At Riverside Community Hospital, despite 52 fillable fields and real technical sophistication, the form provides "no guidance for this use case" of patient self-access.

**Missing rights information.** Of the 142 generic-only organizations, 67 (47%) do not inform patients of their access rights — the 30-day response deadline, fee limits, or right to appeal a denial. JPS Health Network's fee schedule doesn't distinguish between patient access fees (which HIPAA limits to reasonable, cost-based amounts) and third-party fees governed by state law at higher rates. The patient has no way to know they're being overcharged.

**Non-fillable forms compound the problem.** Among generic-only organizations, 106 of 142 (75%) provide non-fillable PDFs — patients must print and handwrite. JPS Health Network's form is an image-only scan from 2018, "a photograph of a paper form with no text layer," despite the same organization producing modern fillable PDFs for other purposes.

## Patterns by Organization Type

Critical access hospitals are most likely to offer only a generic form (90%), followed by teaching hospitals (80%) and physician practices (78%). Regional systems are worst at 86%, compared to 65% for major systems — which are more likely to have both form types. Government-owned facilities trail at 83% generic-only versus 70% for nonprofits.

## What Good Looks Like

The 19 "both" organizations demonstrate the contrast. Northwell Health (Huntington Hospital, Phelps Hospital) offers a separate "Request for Access to Health Information" form explicitly citing § 164.524, alongside a distinct third-party authorization. Advocate Health provides a "Patient Request for Health Information" form with a "Myself" checkbox, separate from its release authorization. These forms acknowledge that requesting your own records is a fundamentally different act than authorizing disclosure to a third party — and they simplify the experience accordingly.

## Conclusion

The wrong-form problem is not an edge case — it is the norm. Nearly 75% of organizations funnel patients through a legal instrument designed for a different purpose. The patient experience ranges from mildly confusing (checking a "Self" box on an otherwise-generic form) to genuinely burdensome (handwriting your own name in a "recipient" field on a non-fillable scan, alongside a liability waiver). This is the single most pervasive design failure in the patient records access landscape.
