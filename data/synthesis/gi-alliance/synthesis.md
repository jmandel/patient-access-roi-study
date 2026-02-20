# GI Alliance — Organization Synthesis

## Overview

GI Alliance is a large, for-profit physician practice management organization headquartered in Southlake, TX, operating dozens of affiliated gastroenterology practices nationwide. Three forms were retrieved: one text-based authorization form from the main gialliance.com website (form-1), and two image-only scanned forms from affiliate practices Granite Peaks GI (form-2) and University GI (form-3). Form-1 is the canonical, centrally published document and represents the best available pathway for a patient requesting their own records.

## Access Pathway: No Dedicated Patient Route

GI Alliance does not offer a dedicated patient access pathway. All three forms are generic HIPAA authorization forms designed primarily for third-party release of information. Form-1 is titled "Authorization to Use and Disclose Protected Health Information," while forms 2 and 3 are explicitly titled "Authorization to Release Medical Records to Third Party." None reference HIPAA's Right of Access (§ 164.524) or acknowledge the distinct legal framework for patient self-access versus third-party authorization (§ 164.508).

Form-1 does include a "at Patient's request" checkbox under the purpose section, making it technically usable for patient-directed requests, but the form structure — requiring a recipient address, lacking delivery format preferences, and using authorization language throughout — treats the patient as just another requester rather than an individual exercising a legal right. This conflation could cause the organization to inadvertently apply third-party authorization rules (higher fees, broader denial grounds) to patient access requests.

## Retrieval Experience

Finding the primary form was relatively straightforward. A site-specific web search surfaced form-1 directly at a WordPress uploads URL. GI Alliance maintains a patient forms page at `gialliance.com/patient-forms-and-prep/`, but it is organized by local brand/location, adding navigational complexity for patients who must first identify their affiliate practice. The affiliate forms (forms 2 and 3) required searching beyond the main domain. No login wall, bot blocking, or portal gating was encountered. Retrieval difficulty: easy for the main form, moderate for the affiliate variants.

## Form Document Quality

Form-1, the best available document, is a single-page text-based PDF authored digitally in Microsoft Word — a significant quality advantage over the affiliate scans. However, it has **zero fillable fields**: all blanks are rendered as underscores, requiring the patient to print and handwrite. There is no electronic signature capability and no submit button. The form must be printed, completed by hand, and returned — but critically, **no submission method is specified anywhere on the form** (no fax number, no mailing address, no email, no portal link). A patient who downloads this form has no way to know where to send it without calling the organization.

The layout is logical, following standard authorization flow: patient identification → recipient → scope → sensitive categories → purpose → duration/revocation → signature. However, there are no bold section headers, no instructional text, and the language is moderately legalistic (e.g., "d/b/a GI Alliance on behalf of itself and all other practices that are operating as a single HIPAA Affiliated Covered Entity"). The form is concise at one page, which is a positive.

The affiliate forms (2 and 3) are substantially worse in quality: form-2 is a browser print-to-PDF with a completely garbled text layer (broken Type 3 font encoding), and form-3 is a raw scan with no text layer at all. Both are inaccessible to screen readers and cannot be filled digitally. Form-3 appears to be truncated, missing required HIPAA authorization elements like the signature block and revocation instructions.

## Barriers and Concerns

- **Blank provider identity**: Form-1 leaves both the authorizing entity name and the revocation mailing address as blank fill-ins, creating a functional barrier for patients who don't know which affiliate practice to name.
- **No submission instructions**: None of the three forms specify where to submit the completed authorization.
- **No fee disclosure**: No mention of fees or the patient's right to cost-based pricing under HIPAA.
- **No processing timeline**: No indication of how long records fulfillment will take.
- **SSN collection**: Forms 2 and 3 request the last four digits of SSN — unnecessary for HIPAA record requests and a potential deterrent.
- **No delivery format options**: Form-1 does not ask how the patient wants to receive records; forms 2 and 3 offer only "E-Delivery" and "Mail."

## Bright Spots

- **Sensitive information categories**: Form-1 requires separate initials for HIV/AIDS, mental health, substance use, and genetic information — a compliance-conscious design respecting state-level protections.
- **Explicit non-conditioning statement**: The clear declaration that treatment/payment won't be conditioned on signing is present and well-stated.
- **Concise format**: Form-1 covers all essential elements on a single page without being excessively dense.
- **Granular record selection** (affiliate forms): Forms 2 and 3 offer 9-10 specific record-type checkboxes, giving patients meaningful control over what information is released.

## Overall Assessment

GI Alliance provides a minimally adequate but patient-unfriendly records request experience. The organization channels all access requests — whether from patients, insurers, or attorneys — through a single generic authorization framework with no acknowledgment that patient self-access is a distinct right with its own legal protections. The primary form is digitally authored but not fillable, includes no submission instructions, and leaves critical fields (provider name, revocation address) blank. A patient attempting to request their own records online would download a form they cannot fill digitally, would not know where to send it, and would receive no guidance about fees, timelines, or their rights. The experience reflects organizational indifference to patient self-service rather than intentional obstruction.
