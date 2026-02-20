# Synthesis: Banner - University Medical Center Phoenix

## Overview

Banner - University Medical Center Phoenix is part of Banner Health, a major nonprofit health system in the western United States. The facility uses Banner Health's system-wide forms for medical records release rather than maintaining its own. Two forms were found: a current system-wide authorization (form-1.pdf, revised 06/2025) and a legacy hospital-specific version (form-2.pdf, revised 09/2017). The current system-wide form is the most relevant document for a patient requesting their own records.

## Available Pathways and Primary Form

Banner Health offers two pathways for record access: a downloadable PDF authorization form and a patient portal (Banner Health App / https://account.bannerhealth.com/). The current form (form-1.pdf) prominently notes at the top that patients can access most health information through the portal, which is a helpful redirect before a patient commits to the paper process. For records not available through the portal, the PDF form is the primary pathway. Submission options include mail, fax, and in-person pick-up — fax provides an adequate electronic submission method, though there is no online form submission or email-based submission option.

## Access Pathway Differentiation

Banner Health does **not** differentiate between patient self-access and third-party release. Both forms are generic "Authorization for Release of Medical Information" documents designed to cover all release scenarios. The current form includes a "Self" checkbox under both the "Release/Send Information To" field and the "Purpose" field, acknowledging that patients may request their own records, but the form structure, language, and authorization requirements are identical regardless of who the records are going to. A patient requesting their own records must navigate the same release-from/release-to paradigm, date range fields, record type checkboxes, and HIPAA authorization language that a third party would face. There is no simplified patient access request pathway.

## Retrieval Experience

Finding the forms was easy. A straightforward web search returned the system-wide form immediately, and it is published on bannerhealth.com under the patients/medical-records section. No bot blocking, login walls, or CAPTCHA was encountered. Both forms were directly downloadable via curl. The coexistence of the current (2025) and legacy (2017) forms on the same website creates a minor risk that patients might download the outdated version, which lacks the portal callout and has less granular sensitive-information controls.

## Form Document Quality

The primary form (form-1.pdf) is a flat, non-fillable PDF — zero interactive form fields despite being a born-digital document. A patient must print the form, handwrite all fields, sign it, and submit via mail, fax, or in-person. The form is 2 pages with approximately 20 fields to complete (patient demographics, release from/to addresses, date range, record type checkboxes, delivery preference, purpose, and signature). The layout is logically organized with clear section headers and a natural top-to-bottom flow. Record-type selection is granular with 12 specific categories plus an "Other" option.

Language is mixed: the opening paragraph about "third-party directives" is dense regulatory jargon that would confuse most patients, but the authorization statements on page 2 use accessible "I understand" framing. The sensitive information section uses an exclusion model — all sensitive data is included by default, with checkboxes to opt specific categories out. This is more protective than the legacy form's blanket consent but may still surprise patients who don't realize they must affirmatively opt out.

## Barriers and Concerns

**Fees**: The form warns "There may be a FEE associated with your Request for Records" without specifying amounts or distinguishing between patient-access fees (capped under HIPAA) and third-party release fees. This vagueness may deter patients from making requests.

**Liability waiver**: The form includes a broad release of Banner Health from "any legal responsibility or liability for the disclosure" — a clause that goes beyond standard HIPAA authorization requirements.

**No notarization or witness required**: The form requires only the patient's signature (or legal representative), which is appropriate.

**No in-person requirement**: Fax submission is available, so patients are not forced to visit the facility.

## Strengths

- **Patient portal callout**: The prominent opening line directing patients to the portal is a best practice that may eliminate the need for the paper form entirely for many patients.
- **Recent revision**: The 06/2025 revision date demonstrates active form maintenance.
- **Granular record selection**: 12 specific record categories give patients meaningful control.
- **Sensitive information opt-out**: Per-category exclusion checkboxes improve on the blanket consent approach.
- **Clear patient rights language**: Explicit statements about the right to refuse, non-conditioning of treatment, and right to revoke authorization.

## Overall Assessment

Banner Health provides a findable, recently maintained, and reasonably well-designed authorization form, but it falls short of a truly patient-centered experience. The form funnels all requests — self-access and third-party — through the same generic authorization, the PDF is not fillable, and the fee disclosure is vague. The patient portal redirect is a genuine bright spot, but for patients who need the paper form, the experience is a standard paper-based workflow with no digital-first innovation. The organization earns credit for accessibility and active maintenance but loses ground on technical modernization and pathway differentiation.
