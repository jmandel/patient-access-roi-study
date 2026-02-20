# Batch 3: The Wrong Form Problem

*Note: Due to a symlink collision in the batch inputs directory (all orgs' files share the same filename), this analysis reads from the synthesis directory directly, covering the full 190-org dataset rather than only the ~8 orgs assigned to this batch.*

## Classification Tally

| Pathway Type | Count | Pct |
|---|---|---|
| **Generic-only** (third-party authorization form, no patient-specific pathway) | 135 | 71% |
| **Both** (dedicated patient form + separate generic authorization) | 34 | 18% |
| **Portal-only** (online portal, no downloadable PDF form) | 13 | 7% |
| **Phone/in-person only** (no form or portal found) | 7 | 4% |
| **Dedicated-only** (patient access form with no generic counterpart) | 1 | <1% |
| **Total** | 190 | |

The central finding: **seven out of ten organizations offer patients only a generic third-party authorization form** when the patient wants to request their own records under HIPAA's Right of Access (§ 164.524). Only 18% maintain a separate, dedicated patient access pathway.

## What Makes the Generic Form a Poor Fit

The mismatch creates concrete problems for patients:

**Wrong framing.** Generic forms are titled "Authorization for Release of Health Information" or "Request for Release of Information" — language that frames the patient as authorizing disclosure to someone else, not exercising their own legal right. At **Alabama Medical Group**, the form uses "To Release To" / "To Obtain From" headers designed for inter-provider transfers. At **Desert Regional Medical Center**, "Continuation of Care" is the default/first purpose option, burying "At the request of the patient" further down.

**Self-as-recipient confusion.** On a generic form, the patient must enter their own name and address in a "Recipient" field designed for a third party. **Riverside Community Hospital**'s HCA template has a checkbox distinguishing "At the request of the individual" from "Other 3rd party recipient," but the form still requires the patient to fill in their own name as recipient — with no guidance for this use case. **Colquitt Regional Medical Center**'s form asks for recipient "Name" and "Address" with no explanation of what a self-requesting patient should enter.

**Irrelevant purpose fields.** Generic forms offer purpose checkboxes like "Legal," "Insurance," "Evaluation & Treatment," and "Other." A patient wanting their own records must often select "Other" and write in an explanation — or select "Personal" if it exists. At **ENT & Allergy Associates**, the 17-year-old Word document lists only third-party scenarios; a patient must navigate to Item 8 and list themselves as the person "to whom this information will be sent."

**Missing rights information.** None of the 135 generic-only forms reference HIPAA § 164.524 or inform patients of their 30-day response right, fee limits for patient access, or the distinction between a Right of Access request (which cannot be denied on most grounds) and a third-party authorization (which can be revoked or conditioned). **Yale New Haven Hospital**'s form cites § 164.508 (authorization requirements) but never mentions § 164.524. **Massachusetts General Hospital** follows the same pattern — "Personal" is a purpose checkbox, but the form never acknowledges the patient's legal right.

## Contrast: Organizations That Get It Right

The 34 "Both" organizations show what good looks like:

- **Advocate Good Samaritan Hospital** maintains a separate "Patient Request for Health Information" form with "Myself" as the first recipient option and a prominent portal callout. The third-party authorization is a companion document, not the default pathway.
- **Valleywise Health** offers Form 45643 ("Patient Request for Access to Protected Health Information"), which omits the recipient field, purpose field, and expiration clause entirely — all appropriate for a patient self-access request. Form 43439 handles third-party disclosures separately.
- **Flowers Hospital** titles its primary form "Patient Request for Health Information," lists "Myself" first among recipient options, and provides 66 fillable fields on a single page with a Spanish equivalent.

These organizations score 4–5 on patient-centeredness, compared to a near-universal score of 3 (and occasionally 2) for generic-only organizations.

## Systemic Pattern

The wrong-form problem spans every organization type — major academic medical centers (**Duke**, **Yale New Haven**, **Mass General**, **Northwestern Memorial**), large systems (**HCA**, **Tenet**, **Mercy Health**, **SSM Health**), small critical-access hospitals, FQHCs, and physician practices alike. It is not a function of resources or sophistication; it reflects a default assumption that all records requests are third-party disclosures, with patient self-access as an afterthought.
