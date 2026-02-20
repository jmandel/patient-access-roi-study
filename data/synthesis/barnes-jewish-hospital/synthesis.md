# Barnes-Jewish Hospital — Org-Level Synthesis

## Available Forms and Pathways

Barnes-Jewish Hospital (BJC HealthCare system) provides two distinct PDF forms on its Medical Records Requests page. **Form-1** is a dedicated patient access form titled "REQUEST FOR ACCESS TO PROTECTED HEALTH INFORMATION BY INDIVIDUAL PATIENTS," designed exclusively for patients requesting their own records. **Form-2** is a general "Authorization For Release Of Information" form for third-party disclosures — attorneys, insurers, other providers. The website clearly separates these use cases, also listing links for next-of-kin requests, amendment requests, and Care Everywhere revocation.

## Access Pathway Differentiation

This is where Barnes-Jewish stands out. Having a **dedicated patient self-access form** distinct from the third-party authorization is a genuine best practice that few organizations implement. The website's Medical Records Requests page explicitly categorizes "Individual requests" separately from "Third-party requests," so a patient arriving at the page sees an unambiguous path to the right form. The patient access form (revised 05/2022) uses right-of-access framing rather than authorization language — the patient is "requesting access" to their PHI, not "authorizing release." This is the correct legal framing under HIPAA § 164.524 and avoids confusing patients with irrelevant third-party authorization boilerplate.

## Retrieval Experience

Finding the forms was straightforward. The official website has a well-organized page at `/Patients-Visitors/Medical-Records-Requests` with direct PDF download links — no login, portal, or intermediary steps required. Standard web searches surfaced the page quickly. No bot blocking or browser fallback was needed. One potential source of confusion: the page notes that Washington University maintains separate medical records for WashU Clinic patients, which could leave some patients unsure whether they're requesting from the right entity.

## Form Document Quality

Form-1 is a single-page PDF — admirably concise. It follows a logical flow: patient identification → record type selection (20 checkboxes) → date range → delivery preferences → signature → processing information. The "Abstract (includes all * documents)" checkbox is a clever shortcut — patients who want a comprehensive record can check one box instead of thirteen individual starred items. The form explicitly offers electronic delivery via email, a forward-thinking feature for a 2022 revision.

However, the form has **zero fillable fields** despite being digitally authored (not a scan). Patients must print and fill by hand, then submit via fax (314-747-7211) or mail. This is the primary weakness: a form revised in 2022 should have interactive PDF fields as a basic digital accessibility expectation. The form does have a clean text layer, so annotation tools could work as a workaround, but it was not designed for that workflow.

## Barriers and Compliance

The form imposes minimal barriers. No notarization or witness is required — just a patient signature and date. Fees are described in HIPAA-compliant language ("based on the cost of the labor and supplies"), though no specific fee schedule or estimate is provided. The 30-day response time is clearly stated, matching the HIPAA-mandated timeline, with a note about possible extensions.

The main red flag is the **Social Security Number request**. While the form offers "or last 4 digits" as an alternative, placing the full SSN as the primary ask collects more sensitive PII than necessary — a medical record number or date of birth should suffice. This is an unnecessary privacy risk in a patient access context.

## Notable Strengths

- **Dedicated patient access form** separate from third-party release — a best practice
- **Single-page design** that accomplishes a complete request without overwhelming the patient
- **Electronic delivery option** via email, with a dedicated field
- **"Abstract" checkbox** that bundles comprehensive records into one selection
- **Clear, plain-language** processing instructions with 30-day timeline

## Overall Assessment

Barnes-Jewish Hospital demonstrates strong patient-centeredness in its records request process. The decision to create a dedicated patient access form — shorter, simpler, and legally distinct from the third-party authorization — reflects genuine attention to the patient experience. The website organization is exemplary. The primary gap is the lack of fillable PDF fields, which forces a print-and-handwrite workflow despite the form being digitally authored. With interactive fields added, this would be a near-ideal patient access pathway. As it stands, the experience is good but not fully digital-first.
