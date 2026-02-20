# WakeMed Health & Hospitals — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is WakeMed's official English-language **Authorization to Release Medical Information** (form N-935, REV. 11/25). It is a 2-page general-purpose ROI form that covers both releasing and obtaining patient PHI. A companion Spanish-language version (form N-935S, form-2.pdf) with identical structure and content is also available. The form is dual-purpose: the very first line asks the patient to select whether they authorize WakeMed to "RELEASE OR OBTAIN MY PROTECTED HEALTH INFORMATION (PHI)," and purpose options include "Personal" — meaning it can be used for patient access requests, though it is not specifically designed as a patient-access-only form.

## 2. FINDABILITY

The form was found via web search and is linked from WakeMed's Health Information Management (HIM) page under Patients and Visitors → Medical Records → Health Information Management. The retrieval notes indicate the form was easy to find — "immediately returned the correct page" on first web search — though the initial URL (`/assets/documents/...`) was stale and returned HTML instead of a PDF, requiring navigation to the HIM page to find the current URL under `/sites/default/files/pdf/`. The URL itself (`N-935%20Authorization%20to%20Release%20Medical%20Information%20(1).pdf`) is descriptive. Findability is moderate: a patient must navigate a few levels of site hierarchy, but the page is well-organized and clearly labels both the English and Spanish versions.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and fully extractable (5,623 characters). Not an image-only scan.
- **Fillable fields**: Zero interactive form fields. The metadata confirms `fillable_field_count: 0`. Checkboxes are rendered as the letter "o" in text, and blanks are underscores — entirely non-interactive. A patient must print and handwrite.
- **File size**: 73,867 bytes (74 KB) for 2 pages — reasonable.
- **Fonts**: 4 fonts embedded.
- **Images**: 4 embedded images (likely logos and the "Place Patient Label Here" box).
- **Digital-first design**: This is clearly designed for print, not digital use. The "Place Patient Label Here" sticker area in the margin, the underline-based blank fields, and the "o" checkboxes all indicate a paper-first form. A patient cannot complete this on-screen without third-party PDF annotation tools.

## 4. CONTENT DESIGN

**Length**: 2 pages — proportionate and concise. Page 1 covers identification, record selection, format, and delivery. Page 2 covers understanding/consent, authorization, revocation, and contact information.

**Organization**: Logically structured with clear section headers: PATIENT/RECIPIENT INFORMATION, PHI TO BE RELEASED/OBTAINED, Format, Delivery Method, UNDERSTANDING, AUTHORIZATION AND ACKNOWLEDGEMENT, REVOCATION, CONTACT US. The flow from "who" to "what" to "how" to "consent" is intuitive.

**Clarity**: Language is reasonably clear, though some sections lean toward legal formality. The UNDERSTANDING section is written as a series of "I understand..." statements that cover re-disclosure risk, right to revoke, non-conditioning of treatment, and potential fees — all important disclosures presented in a readable format. The sentence "I understand that requests for 'any and/or all' records, and other large volume requests are sent to WakeMed's copy service for processing" introduces fees without specifying amounts.

**Layout**: Text is well-spaced on page 1 with clear field labels. Page 2 is text-heavier but not cramped. The form uses bold/uppercase for section headers and provides adequate whitespace between sections.

**Record type options**: The form provides granular record selection including: Office Visit, Op Note, Consultations, Urgent Care Visit, Immunizations, Hospital Admission and/or ED Visit (with sub-options for Discharge Summary, History and Physical, Laboratory Reports, Radiology Reports), and Imaging study. An "Other" free-text option is also available.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general-purpose authorization, not a patient-access-specific form. The purpose options ("Billing/Insurance," "Patient Care," "Personal," "Legal," "Other") cover all use cases. A patient requesting their own records would select "Personal," but the form still asks for a "Recipient" — which is awkward when the patient is the recipient. The field "Name of Person, Organization, or Facility you want us to release your PHI to or obtain your PHI from" doesn't quite fit a simple "send me my records" scenario.

**Scope options**: Good granularity. Patients can specify date ranges, select from multiple record types, and choose sub-components of hospital admissions. The date field instruction ("Specify the date, date range, or other specific description of your visit") is flexible.

**Format options**: Offers both "Paper Copy" and "Electronic Copy (includes CD, MyChart, PDF via email)."

**Delivery methods**: Six options — Mail, Fax, Pick up, Onsite Review (by appointment only), MyChart (for dates of service on or after 2/1/2015), and Email. The email option includes a disclosure about encryption: "Communications via email may not be secure... Therefore, we encrypt your email unless you check this box for unencrypted email." This is a thoughtful approach that defaults to encrypted delivery.

**Rights language**: The form does not explicitly reference HIPAA § 164.524 or the patient's right of access. The UNDERSTANDING section states "treatment will not be conditioned upon my completion of this authorization," which is a HIPAA requirement (§ 164.508(b)(4)), but there is no plain-language explanation of the patient's right to obtain their own records.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA.

**Submission options**: The form can be submitted via email (HIMROI@Wakemed.org), fax (919-350-1720), or mail to the HIM Department. This is clearly stated on both pages. No in-person submission requirement.

## 6. COMPLIANCE

**Expiration**: The form states: "Unless previously revoked, this Authorization will expire on the following date, event or condition... If I fail to specify an expiration date or event or condition, this Authorization shall remain in effect for ninety (90) days from the date I sign it." A 90-day default is reasonable and standard.

**Fees**: The form mentions that "a fee will be charged" for large-volume/"any and/or all" requests sent to the copy service, but does not specify the fee amount or cite allowable fee limits. No fee schedule is provided on the form itself.

**Barriers**: No notarization required. No in-person submission required. The form does state "I understand proof of my identity and this authority may be requested," which is permissible under HIPAA. Multiple submission channels (email, fax, mail) are offered.

**Sensitive information**: The UNDERSTANDING section explicitly notes that disclosed PHI "may include information/results regarding psychological or psychiatric impairment, sexual assault, alcohol abuse, drug abuse, a communicable disease including HIV/AIDS, genetic testing, and/or reproductive health." This is a blanket disclosure rather than requiring separate authorization for each category — which streamlines the process but may not align with stricter state-specific protections for certain categories (e.g., substance abuse records under 42 CFR Part 2).

**Re-disclosure warning**: Present — "information disclosed pursuant to this authorization may be subject to re-disclosure by a recipient."

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Dual-purpose form with no patient-access pathway**: The form serves both patient access and third-party release but doesn't differentiate between them. A patient requesting their own records must still fill in "Recipient" information as if releasing to a third party. There is no simplified workflow for "I want my own records sent to me."
- **Fee disclosure is vague**: The form states "a fee will be charged" for large requests but provides no fee schedule, no estimate, and no reference to HIPAA fee limits. A patient has no way to know what they'll be charged before submitting.
- **Imaging study delivery language**: "When you request that your imaging studies be sent to a health care provider, the image will be electronically shared. If your provider is unable to receive via PowerShare a CD will be mailed to the provider." This only describes provider-to-provider sharing — it's unclear how a patient requesting their own imaging studies would receive them.

### ✨ BRIGHT SPOTS

- **Spanish-language version available** (form N-935S) — a parallel Spanish translation is offered alongside the English form, which is uncommon and serves the patient population well.
- **Email submission with encryption default**: The email delivery option defaults to encrypted transmission and requires an explicit opt-out to receive unencrypted email — a privacy-protective design choice.
- **Multiple submission channels**: Patients can submit the completed form by email, fax, or mail. The email address (HIMROI@Wakemed.org) and fax number are prominently repeated on both pages.
- **MyChart integration**: Including MyChart as a delivery method and noting the date-of-service cutoff (on or after 2/1/2015) is practical and transparent.
- **Granular record selection**: The form offers specific record type checkboxes with hospital admission sub-components, giving patients meaningful control over what is released.
- **Recent revision date** (REV. 11/25) suggests the form is actively maintained.
