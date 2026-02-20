# The Wrong Form Problem — Batch 21 Analysis

## Summary

Of 190 organizations with scoreable data (5 had no scores), the vast majority funnel patients requesting their **own** records through forms designed for **third-party** release:

| Classification | Count | % |
|---|---|---|
| **Generic HIPAA auth only** | 136 | 71.6% |
| **Dedicated patient access form** | 22 | 11.6% |
| **Portal-only** (online wizard) | 19 | 10.0% |
| **Phone/in-person only** | 7 | 3.7% |
| **Not determined** (no scores) | 5 | 2.6% |
| **Both** (dedicated + generic available) | 6 | — |

Among the 22 "dedicated" orgs, all but one explicitly differentiate patient self-access from third-party release — typically by offering a form titled "Patient Request for Access to Health Information" alongside a separate authorization form. The remaining 136 generic-only organizations force patients into a workflow never designed for them.

## What Makes a Generic Form Wrong for Patient Self-Access?

A HIPAA authorization form (§ 164.508) is legally and structurally designed for a patient to **authorize disclosure to a named third party** — an attorney, insurer, or another provider. When a patient simply wants their own records under the Right of Access (§ 164.524), this framing creates several concrete problems:

**Recipient confusion.** Every generic form requires the patient to name a "Disclose To" or "Release To" entity. A patient must awkwardly write their own name and address, with no guidance that this is expected. At Columbus Community Hospital, the form reads "I authorize Columbus Community Hospital to release the following information on [patient] to: [Name and Address]" — a construction that presupposes a third party. At Montefiore Nyack Hospital, the form "serves patients, attorneys, and third parties equally" with no differentiation.

**Unnecessary fields and legal overhead.** Generic forms typically require a stated "Purpose of Disclosure" (e.g., legal proceedings, insurance, continued care). Patients requesting their own records shouldn't need to justify their request — HIPAA grants an unconditional right. Yet at Saratoga Hospital, the purpose field "may mislead patients into thinking they must justify their own access request." Many forms also include re-disclosure warnings, liability waivers, and authorization expiration dates (e.g., AdventHealth Central Texas caps authorization at 90 days) — provisions that apply to third-party release but are legally irrelevant to patient access.

**Fee conflation.** When forms don't distinguish self-access from third-party release, fee schedules often don't either. JPS Health Network charges a $75 flat fee for electronic delivery and $30 for the first 10 pages — fees that "likely exceed HIPAA's reasonable, cost-based fee limit for patient access requests" but may be permissible for third-party release under Texas state law. Saratoga Hospital's $0.75/page fee is "generally impermissible for patient access" but standard for third-party requests. Without form-level differentiation, patients are charged the wrong rate.

**Witness and notarization barriers.** Several generic forms include witness signature lines (Millinocket Regional Hospital, Barrett Hospital, Colquitt Regional Medical Center) that, combined with "all spaces must be completed" mandates, effectively require patients to find a witness before they can request their own records — a requirement HIPAA does not impose for individual access.

## Egregious Examples

**East Georgia Healthcare Center** offers only a form for *incoming* records transfers — authorizing other providers to send records *to* EGHC. A patient wanting records *from* EGHC has literally no applicable form.

**ENT & Allergy Associates** (80+ offices across four states) provides a single 2009-vintage Word document, discoverable only through `filetype:doc` web searches, with no submission instructions whatsoever. The form collects Social Security Numbers.

**Troy Regional Medical Center**'s only form is an image-only scan on a defunct legacy website, including a broad liability waiver that patients must accept as a condition of signing — even when requesting their own records.

## Patterns by Organization Type

Critical access hospitals are worst: 93% (27/29) offer only generic forms. Regional systems follow at 86% (31/36), then physician practices at 81% (21/26). Major health systems perform best at 57% generic-only (37/65) — systems like Northwell Health, Advocate Health, Providence, and Intermountain have invested in dedicated patient access forms that clearly separate the two workflows. For-profit organizations (80%) fare worse than nonprofits (68%).

## What Good Looks Like

The 22 organizations with dedicated forms demonstrate the contrast. Northwell Health's "Request for Access to Health Information" form (VD087) explicitly cites § 164.524, uses "Myself" as the default recipient, and earns a patient-centeredness score of 5. Intermountain Medical Center's fillable PDF is titled "Patient Request for Health Information" with no third-party authorization language. These forms don't ask patients to justify their request, don't impose authorization expiration dates, and don't require witness signatures.

## Conclusion

Nearly three-quarters of organizations in this batch give patients the wrong form. The mismatch isn't merely cosmetic — it produces concrete harms: inflated fees, unnecessary procedural barriers, confusing recipient fields, and legal framing that implies patients need permission to access their own health information. The organizations that get it right prove that a simple, dedicated patient access form is achievable. The rest haven't tried.
