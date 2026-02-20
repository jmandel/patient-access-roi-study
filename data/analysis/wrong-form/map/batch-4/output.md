# Batch 4: The Wrong Form Problem — Classification and Analysis

## Pathway Classification

Of the **59 organizations** in this batch, the access pathway breakdown is:

| Classification | Count | % |
|---|---|---|
| **Generic HIPAA authorization only** | 46 | 78% |
| **Both** (dedicated patient access + generic) | 9 | 15% |
| **Dedicated patient access form** | 1 | 2% |
| **Portal-only** (no downloadable form) | 1 | 2% |
| **No applicable form** | 2 | 3% |

### Organizations with dedicated patient access forms (10 total, including BOTH)

Flowers Hospital (dedicated only — "Patient Request for Health Information," grade A), UTMB, Philadelphia FIGHT, Huntington Hospital/Northwell, Providence St. Vincent, Valleywise Health, West Tennessee Healthcare, Advocate Good Samaritan, AdventHealth Central Texas, and Mercy General Hospital all maintain separate forms for patient self-access vs. third-party release. The Iowa Clinic has fully transitioned to a Swellbox portal that differentiates the two use cases, with no current downloadable PDF.

### Organizations with no applicable form (2)

**Canton-Potsdam Hospital** has no live forms online — only archived documents from a defunct website. Patients must call by phone. **East Georgia Healthcare Center** publishes forms that only authorize *incoming* records from other providers, with EGHC's address hardcoded as the destination. A patient wanting records *from* EGHC finds no applicable form.

## The Mismatch Problem: What Patients Experience

The remaining **46 organizations (78%)** offer only a generic HIPAA authorization form designed for third-party release. When a patient wants their own records, they encounter several concrete friction points:

**Self-as-recipient absurdity.** The most common problem: forms with a "Release To" or "Disclose To" field requiring the patient to write their own name and address as if they were a third party. At SSM Health DePaul, the patient must fill in a recipient block with "name, address, fax, and relationship" fields — all designed for an external party. At Virginia Garcia, the patient must choose between "Get information," "Give information," or "Get and give information" and specify a recipient provider — a workflow that doesn't map to "I want my own records."

**Purpose-of-disclosure requirements.** HIPAA does not require patients to state a reason for accessing their own records, yet many generic forms demand one. At Carle BroMenn, a purpose field is required — flagged as "potentially non-compliant with HIPAA Right of Access." At SSM Health DePaul, "For personal access" is a checkbox buried alongside "Insurance/Workers' Compensation" and "Legal." Texas Oncology's form buries a note on page 2 that the authorization form "is not required" for patient self-access — an admission that patients are using the wrong form.

**Wrong legal framing.** Generic forms cite HIPAA § 164.508 (authorization for third-party release) rather than § 164.524 (individual right of access). This matters: authorizations can be denied or conditioned differently than access requests. At MGH and Newton-Wellesley, the form never mentions the Right of Access. At Barrett Hospital, conditioning language warns that "refusal to sign may affect ability to obtain treatment or payment" — language that applies to third-party authorizations but is flatly prohibited for patient access requests.

**Unnecessary fields and requirements.** Generic forms carry baggage irrelevant to self-access: witness signature lines (Southwell, Springhill, DHR Health, Fisher-Titus), SSN collection (Nemaha Valley, Rio Grande, UMC Southern Nevada, DHR Health), mandatory date specifications with no "all records" option (MGH), and liability waivers (Maury Regional, Piedmont). At Memorial Healthcare System, patients must sign an electronic delivery waiver assuming "all consequences, losses and damages" — risk-shifting language that could discourage patients from exercising their right to electronic records.

**Fee conflation.** Generic forms apply a single fee schedule to all requests. At JPS Health Network, patients face a $75 flat fee for electronic delivery and $30 for the first 10 pages — fees that likely exceed HIPAA's "reasonable, cost-based" limit for patient access but may be permissible for third-party releases under Texas law. The form makes no distinction.

## What Good Looks Like

The 10 organizations with dedicated forms demonstrate the contrast. Flowers Hospital's form is titled "Patient Request for Health Information" with "Myself" as the first recipient option. Huntington Hospital/Northwell explicitly cites HIPAA § 164.524 and offers "To me" as the default. Valleywise Health provides a bilingual dedicated form entirely separate from its third-party authorization. Philadelphia FIGHT maintains distinct forms — one titled "Patient Request for Access to Information," the other "Authorization for Release of Information" — each designed for its specific purpose.

These dedicated forms omit irrelevant fields (purpose justification, representative documentation, recipient addresses), add patient-relevant features (portal delivery, format choice), and frame the interaction as a right rather than a permission.

## Tally Summary

- **46/59 (78%)** of organizations funnel patients through generic third-party authorization forms
- **11/59 (19%)** offer some form of dedicated patient access pathway (form or portal)
- **2/59 (3%)** have no applicable form at all
- Among generic-only orgs, the most common friction points are: self-as-recipient fields (universal), required purpose statements (~60%), missing Right of Access language (~90%), and witness or SSN requirements (~30%)
