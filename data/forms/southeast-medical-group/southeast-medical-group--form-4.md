# Evaluation: Southeast Medical Group — form-4.pdf

## Document Overview

- **Document title:** Patient Registration Form (multi-section packet)
- **Source URL:** `https://cdn.sanity.io/files/4pare3i8/production/3f40d79aa87a96396ffad4b157f7dcfbea285511.pdf`
- **Pages:** 4
- **File size:** 251,959 bytes (~246 KB)
- **Text layer:** Yes
- **Fillable fields:** 0
- **Image-only scan:** No

---

## 1. DOCUMENT IDENTIFICATION

Form-4 is a **multi-page patient registration packet** consisting of four distinct sections across four pages:

1. **Patient Registration Form** — demographics, insurance, emergency contact, and a communications consent / blanket release-of-records clause
2. **Patient Financial Policy Agreement** — billing, payment, collections, and administrative service fee (ASF) policies
3. **Privacy Practices Acknowledgement and HIPAA Authorization Form** — HIPAA notice acknowledgement, designation of authorized individuals, and phone number consent for leaving medical information
4. **Telemedicine and E-Visit Consent Form** — consent for virtual visits

This is **not** a Release of Information (ROI) or patient-access authorization form. It is a registration/intake packet that patients complete before their first visit. However, it contains two elements relevant to records access:

- A blanket consent on page 1: *"I give permission to SEMG to release my medical records to any specialists, hospitals or medical facilities associated with my care plan."*
- A HIPAA privacy practices acknowledgement on page 3 that summarizes patient rights, including the right to *"inspect or obtain a copy of the IIHI, less psychotherapy notes"* and notes that *"This request must be made in writing."*

Among the four forms retrieved for SEMG, form-1 and form-2 are the actual ROI authorization forms (MediCopy's generic forms), form-3 is a patient portal proxy form, and this form-4 is the registration packet. This document is peripheral to the ROI process but provides context about SEMG's HIPAA practices and how they handle records disclosure for treatment purposes.

---

## 2. FINDABILITY

This form was found on SEMG's website at `mysemg.com/resources/forms`, which lists approximately 10 patient forms. It is hosted on SEMG's Sanity CMS CDN. The URL is a hash-based CDN path (`cdn.sanity.io/files/4pare3i8/production/3f40d79...pdf`) — not human-readable and not descriptive of the content. A patient looking specifically for a records-release form would not find what they need in this document; SEMG's website directs records requests to MediCopy instead.

For its actual purpose (pre-visit registration), the form is reasonably findable — it's linked from the patient resources/forms page. But it is not relevant to a patient seeking to request their own medical records.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and functional. The full 13,560 characters of text extract cleanly, indicating a digitally-authored PDF rather than a scan.

**Fillable fields:** Zero. Despite being a registration form with dozens of blank fields for patient demographics, insurance information, and signatures, none are interactive PDF form fields. Patients must print and hand-fill this document.

**File size:** 246 KB for 4 pages is reasonable, though 10 embedded images seem high for a text-heavy form and suggest logos or decorative elements.

**Digital-first design:** Mixed. The text layer is clean and well-structured, suggesting digital authorship (not a scan). But the complete absence of fillable fields means it functions as a print-only document in practice. The form cannot be completed digitally.

**Font count:** 8 fonts, indicating reasonable typographic structure with distinct heading/body/emphasis styles.

---

## 4. CONTENT DESIGN

**Length:** 4 pages for four separate consent/agreement sections. Each page covers a distinct topic, which is reasonable for a registration packet. However, the financial policy section (page 2) is dense and lengthy — it covers 14+ distinct policy topics in continuous paragraph form.

**Clarity:** The language varies by section:
- The registration page is straightforward with clear field labels.
- The financial policy page is written in legalistic, practice-protective language. Passages like *"Failure on our part to collect co-payments and deductibles from patients can be considered fraud"* frame compliance obligations as threats.
- The HIPAA page opens with a date reference: *"On April 14, 2001, the Health Insurance Portability and Accountability Act became law, with an effective date of April 14, 2003."* This is historically inaccurate (HIPAA was enacted August 21, 1996; the Privacy Rule compliance date was April 14, 2003). The language reads as boilerplate drafted circa 2003 and never updated.
- The telemedicine consent is clearly written and well-organized with bullet points.

**Organization:** Each page is self-contained and logically organized. However, the packet bundles four very different types of consent into a single document, which could overwhelm patients at check-in.

**Layout:** The registration page uses a form-field layout with labeled blanks. Other pages are primarily wall-of-text paragraphs with minimal visual hierarchy. The financial policy page in particular has no bullet points, no bolded key terms (beyond section headers), and runs as continuous dense text.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This document is not designed for patient-initiated records requests. The blanket consent on page 1 is a provider-to-provider release for treatment purposes: *"I give permission to SEMG to release my medical records to any specialists, hospitals or medical facilities associated with my care plan."* This is a one-way, blanket authorization that the patient signs at registration — not a mechanism for requesting one's own records.

**Right of Access language:** Page 3 includes a brief mention: *"You have the right to inspect or obtain a copy of the IIHI, less psychotherapy notes. This request must be made in writing."* This is a summary of HIPAA rights but provides no actionable pathway — no form to use, no address to send requests to, no mention of timelines or fees.

**Scope options:** None. The blanket release on page 1 covers "any specialists, hospitals or medical facilities associated with my care plan" with no scope limitation beyond "only the records pertaining to the visit."

**Format options:** None mentioned.

**EHI Export / electronic access:** Not mentioned.

**Authorized individuals:** Page 3 includes a section: *"I authorize the following individuals to have full access to my health information"* with two name/relationship fields. This designates proxy access but is not an ROI authorization — it's an open-ended grant of "full access" bundled into the registration packet.

---

## 6. COMPLIANCE

**Blanket consent bundling:** The registration form bundles a blanket records-release consent with communications consent (phone/text/email) and registration, all under a single signature block on page 1. Patients cannot selectively opt in or out of the records release without declining the entire registration.

**Administrative Service Fees (ASF):** The financial policy page discloses an ASF structure: *"This may be paid annually at $75 per year to cover all your administrative forms for one year. Or you may choose a 'fee per form' status and fees will be assessed at the time the form is completed. Individual form fees range from $10 to $150."* Examples listed include *"immunization records"* — which could implicate patient access requests. While this is framed as administrative forms (DOT physicals, FMLA, etc.), the broad language could be interpreted to apply to records requests, potentially exceeding HIPAA's cost-based fee limitations for patient access.

**Writing requirement:** The HIPAA acknowledgement states that requests to inspect or copy records *"must be made in writing"* — this is permissible under HIPAA but no form or address is provided to fulfill this requirement.

**Psychotherapy notes exclusion:** The privacy acknowledgement states patients can access IIHI *"less psychotherapy notes"* — this is consistent with HIPAA's carve-out for psychotherapy notes under 45 CFR § 164.524(a)(1)(i).

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket records release bundled with registration:** The consent to release records to specialists is embedded in the registration form under the same signature as communications consent and demographic submission. There is no separate opt-out mechanism. Patients sign away records-release consent as a condition of completing registration, which could be seen as conditioning treatment on authorization — contrary to the HIPAA principle that providers *"may not condition treatment on my signing this authorization"* (language that appears in the MediCopy forms used by the same organization).

- **Ambiguous ASF fee structure may apply to records requests:** The $10–$150 per-form fee schedule lists *"immunization records"* as an example. If applied to patient access requests for medical records, these fees would likely exceed HIPAA's cost-based fee limitations. The language is broad enough to encompass records requests even though it seems targeted at administrative paperwork.

### ⚠️ AMBIGUITIES

- **"Full access to my health information" for authorized individuals is undefined.** Page 3 allows patients to authorize individuals for *"full access to my health information"* but does not define what "full access" means — portal access? In-person record pickup? Phone inquiries? This open-ended grant is bundled into registration rather than being a standalone, specific authorization.

- **HIPAA rights summary lacks actionable detail.** The privacy acknowledgement tells patients they have the right to *"inspect or obtain a copy"* and that requests *"must be made in writing"* — but provides no form, no address, no timeline, and no fee information. Patients are told they have rights but not how to exercise them.

### ❌ ERRORS

- **Incorrect HIPAA enactment date.** The privacy acknowledgement states: *"On April 14, 2001, the Health Insurance Portability and Accountability Act became law, with an effective date of April 14, 2003."* HIPAA was enacted on **August 21, 1996**, not April 14, 2001. The April 14, 2003 date refers to the Privacy Rule compliance deadline. This error suggests the boilerplate has never been reviewed or updated since initial drafting.

- **Outdated boilerplate language.** The HIPAA section references posting a "detailed policy letter on our web site (mysemg.com)" — phrasing like "policy letter" and the overall tone suggests this text was written in the early 2000s and has not been modernized.

### ✨ BRIGHT SPOTS

- **Preferred language and pronouns fields.** The registration form includes fields for *"PREFERRED LANGUAGE"* and *"PREFERRED PRONOUNS"* — a modern, patient-centered inclusion that many registration forms lack.

- **Clean text layer.** Despite having no fillable fields, the document has a fully extractable text layer, which supports accessibility tools and digital processing.
