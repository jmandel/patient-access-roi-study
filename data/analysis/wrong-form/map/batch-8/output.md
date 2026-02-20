# Batch 8: The Wrong Form Problem

*Note: Due to a symlink collision in the batch inputs directory (all orgs' synthesis.md and scores.json files share the same filename), this analysis reads from the synthesis source directory, covering all 190 organizations.*

## Classification Tally

| Pathway Type | Count | Pct |
|---|---|---|
| **Generic only** — third-party authorization form, no dedicated patient access pathway | 135 | 71% |
| **Both** — dedicated patient access form alongside a separate third-party authorization | 33 | 17% |
| **Portal only** — online portal with no downloadable PDF form | 13 | 7% |
| **No form found** — phone or in-person only | 7 | 4% |
| **Dedicated only** — patient access form with no generic counterpart | 1 | <1% |

The headline: **71% of organizations hand patients a generic third-party authorization form** when the patient wants to exercise their Right of Access under HIPAA § 164.524. Only 18% maintain any dedicated patient access pathway.

## What Makes the Generic Form a Poor Fit?

Four concrete problems emerge from the synthesis data:

**1. Wrong framing.** Generic forms are titled "Authorization for Release of Health Information" or "Authorization to Use or Disclose Health Information" — language that frames the patient as authorizing a disclosure to someone else, not exercising a legal right. At **Desert Regional Medical Center**, the first purpose option is "Continuation of Care," burying "At the request of the patient" further down the list. At **SSM Health DePaul Hospital**, "For personal access" is a checkbox buried under the Purpose of Disclosure section alongside "Insurance/Workers' Compensation" and "Legal."

**2. Self-as-recipient confusion.** On a generic form, the patient must write their own name and address into a "Recipient" field designed for a third party — with no guidance on how to handle this. **Colquitt Regional Medical Center**'s form asks for recipient "Name" and "Address" with no explanation. **Goleta Valley Cottage Hospital** (Cottage Health) accommodates this with a "Patient (self)" checkbox, but the patient must still navigate irrelevant sections for recipient relationship and redisclosure restrictions.

**3. Irrelevant fields and barriers.** Generic forms collect information irrelevant to patient self-access. **ENT & Allergy Associates** uses a 17-year-old Word document listing only third-party scenarios; a patient must navigate to Item 8 to list themselves as recipient. **Ascension Saint Thomas Rutherford**'s form demands "ALL BLANKS MUST BE COMPLETED" including an SSN field — HIPAA does not require SSN for patient access, and collecting it creates unnecessary privacy risk. **Colquitt Regional Medical Center** includes a witness signature line that may deter patients without someone immediately available.

**4. Missing rights information.** None of the 135 generic-only forms reference § 164.524, the 30-day response obligation, patient-specific fee limits, or the crucial distinction between a Right of Access request (which generally cannot be denied) and a third-party authorization (which is revocable and conditional). **Yale New Haven Hospital** cites § 164.508 (authorization requirements) but never mentions § 164.524. **Massachusetts General Hospital** offers "Personal" as a purpose checkbox but provides no patient rights language.

## The Score Gap

The patient-centeredness dimension captures this mismatch precisely:

- **Generic-only orgs**: mean patient-centeredness score **2.9** (n=135). The modal score is 3 ("a patient can use the process, but it wasn't designed for them"). Twenty-two orgs score 2 ("patient self-access is an afterthought").
- **Both/Dedicated orgs**: mean score **4.2** (n=33). Eleven orgs score 5 (fully patient-centered).

Organizations like **Advocate Good Samaritan Hospital** (score 5) maintain a separate "Patient Request for Health Information" form with "Myself" as the first recipient option. **Huntington Hospital** (Northwell Health) explicitly cites § 164.524 on its dedicated access form. **Flowers Hospital** titles its form "Patient Request for Health Information" and lists "Myself" first, with 66 fillable fields. These organizations demonstrate that the distinction is feasible and that industry leaders have already adopted it.

## The Patient Experience

A patient at a generic-only organization faces this sequence: find a form titled "Authorization for Release" (not "Request for Your Records"); puzzle over who the "recipient" is when they want their own records; encounter irrelevant fields for "purpose of disclosure" designed for attorneys and insurers; see no mention of their legal right or the 30-day timeline; and potentially be told the form is "invalid" because they left the SSN or witness line blank. The form communicates — through its structure, language, and required fields — that they are asking for a favor, not exercising a right.

## Systemic Pattern

The wrong-form problem spans every organizational type: academic medical centers (Yale New Haven, Mass General, Duke), major systems (HCA, Tenet, SSM Health, Mercy Health), small critical-access hospitals, FQHCs, and physician practices alike. It is not a matter of resources — it reflects a default industry assumption that all records requests are third-party disclosures, with patient self-access as an afterthought.
