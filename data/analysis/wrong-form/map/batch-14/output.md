# The Wrong Form Problem — Batch 14 Analysis

## Classification Summary

Of 195 organizations examined (190 with synthesis data, 5 without), the access pathway breakdown is:

| Classification | Count | % of analyzed |
|---|---|---|
| **Generic authorization only** | 135 | 71% |
| **Dedicated patient access form** | 32 | 17% |
| **Portal-only** (online portal, no PDF) | 9 | 5% |
| **Both** (generic + dedicated) | 7 | 4% |
| **No online form** (phone/in-person only) | 7 | 4% |

The dominant finding is stark: **71% of organizations offer patients only a generic HIPAA authorization form** designed for third-party release when those patients want to exercise their individual Right of Access under § 164.524. Of these 135 generic-only organizations, 132 (98%) make no meaningful distinction between a patient requesting their own records and a third party requesting someone else's.

## What Makes the Generic Form a Poor Fit

The mismatch manifests in several concrete ways that a patient would experience:

**Wrong mental model.** Generic forms are structured around a three-party transaction: a patient authorizes Entity A to send records to Entity B. A patient wanting their own records must awkwardly cast themselves as both the authorizing party and the recipient. At **Columbus Community Hospital**, the form reads "I authorize Columbus Community Hospital to release the following information on [patient] to: [Name and Address]" — a patient must write their own name in both blanks with no guidance that this is expected. At **Bath Community Hospital**, the form is designed for inter-provider transfers, forcing patients to "adapt" it for self-access.

**Unnecessary fields and confusion.** Generic forms collect information irrelevant to self-access. **Addabbo Family Health Center** uses New York's OCA Form 960 — a litigation-oriented state authorization that collects Social Security Numbers and opens with six numbered legal disclosures written for attorneys. The form's own instruction page admits it was "designed for release of health information needed for litigation in New York State courts." **Duke University Hospital**'s form requests the last four digits of SSN and requires patients to opt in to receive their own mental health and genetic testing records — categories HIPAA's Right of Access grants without restriction.

**Wrong legal framework.** A HIPAA authorization (§ 164.508) is a permission slip — the patient grants the provider permission to disclose. A Right of Access request (§ 164.524) is a demand — the patient exercises a legal entitlement. Generic forms invoke the wrong statute. **Massachusetts General Hospital**'s form references § 164.508 authorization requirements but never mentions § 164.524. This matters practically: authorization-based requests can be denied for more reasons than access requests, and providers may (incorrectly) apply authorization-era fee schedules instead of the lower cost-based limits that apply to patient access.

**Bidirectional routing confusion.** Many generic forms serve double duty for obtaining records *from* other providers and releasing records *to* other parties. **Cherokee Health Systems** (River Valley Health) uses a bidirectional form with "Record Requested to be Sent From" and "Record to be Sent To" facility sections. A patient wanting a copy of their own records must navigate this inter-facility routing model with no guidance.

## The Score Gap

The classification correlates with measurable quality differences. Generic-only organizations score a mean **2.85/5** on patient-centeredness versus **4.12/5** for organizations with dedicated patient access forms — a 1.27-point gap. Overall scores show a similar pattern: 3.24 vs. 3.85.

## Notable Examples of the Mismatch

- **JPS Health Network** (Fort Worth): The ROI form is a 2018 image-only scan — literally a photograph of a paper form with zero fillable fields and no text layer. Meanwhile, the same organization's 2025 HIE forms are modern, fillable PDFs with encrypted email submission. The form patients actually need is the one that hasn't been updated.
- **Grady Memorial Hospital** (Atlanta): A major public safety-net hospital whose generic form includes a broad liability waiver ("I will not hold Grady... responsible for anything that may happen from the use or release of my PHI") bundled into the authorization. Submission requires physical delivery — no fax, no email, no portal.
- **Avera Hand County Memorial Hospital**: Patients use a system-wide Avera Health authorization form "designed for third-party release of records, filling in themselves as the recipient."

## The Seven "Both" Organizations

Seven organizations offer both a generic authorization and a dedicated patient access pathway: Ascension St. Vincent's East, Baptist Health Lexington, Hospital of the University of Pennsylvania, UCHealth University of Colorado, Michigan Medicine, MUSC Health, and CrescentCare. These demonstrate that the problem is solvable — organizations *can* maintain separate workflows — but only 4% currently do so alongside a generic form.

## Conclusion

The wrong-form problem is not an edge case — it is the default. Seven in ten organizations hand patients a form designed for someone else's use case, forcing them to navigate third-party disclosure language, unnecessary fields, and the wrong legal framework to exercise a fundamental right. The score data confirms this isn't merely a labeling issue: generic-only organizations score substantially lower on patient-centeredness, suggesting the form type reflects a deeper orientation toward institutional convenience over patient access.
