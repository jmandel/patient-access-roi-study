# Evaluation: Franklin Primary Health Center — form-1.pdf

## Document Overview

- **Organization:** Franklin Primary Health Center (Mobile, AL)
- **Document:** New Patient Registration Packet
- **Source URL:** https://franklinprimary.org/wp-content/uploads/2025/08/New-Patient-Packet.pdf
- **Pages:** 8
- **File size:** 790,812 bytes (~771 KB)
- **Fillable fields:** 241
- **Text layer:** Yes
- **Image-only scan:** No

---

## 1. DOCUMENT IDENTIFICATION

This is a **New Patient Registration Packet**, not a Release of Information or medical records authorization form. The 8-page document comprises six distinct sections:

1. **Patient Information Form** (demographics, insurance, household income, emergency contacts)
2. **Sliding Fee Scale Self-Declaration** (income disclosure for fee discounts)
3. **Notice of Privacy Practices Acknowledgement** (receipt confirmation)
4. **Patient Questionnaire** (demographic and health screening questions)
5. **Patient Satisfaction Survey** (quality feedback)
6. **Patient Bill of Rights and Responsibilities** (rights listing)

The document's only ROI-adjacent content is a single paragraph embedded in the Patient Information Form labeled "ASSIGNMENT AND RELEASE," which reads:

> "I, THE UNDERSIGNED CERTIFY THAT THE ABOVE INFORMATION IS TRUE AND CORRECT, I CONSENT TO ANY SERVICES RENDERED TO ME OR MY DEPENDENTS UNDER DOCTOR'S ORDERS. I AUTHORIZE PAYMENT OF HEALTHCARE BENEFITS TO FPHC, INC. I UNDERSTAND THAT I AM FINANCIALLY REPONSIBLE FOR ALL CHARGES AND REFERENCE LAB FEES NOT PAID BY INSURANCE. I HEREBY AUTHORIZE FPHC, INC., TO RELEASE ALL INFORMATION NECESSARY TO SECURE PAYMENT OF BENEFITS."

This clause is narrowly scoped to **insurance billing and payment** only — it authorizes FPHC to release information to payers, not to release records to the patient themselves. It is **not** a general ROI form and cannot be used by a patient to request copies of their own medical records.

Among the three documents downloaded for this organization (form-1: New Patient Packet, form-2: Notice of Privacy Practices, form-3: Patient Bill of Rights), **none is a dedicated ROI form**. Franklin Primary Health Center does not appear to publish a standalone authorization for release of medical records online.

---

## 2. FINDABILITY

**The form was not found because it does not exist online.** The retrieval notes document an exhaustive search:

- Five targeted web searches with various query formulations returned no ROI form
- Full website navigation across all major pages (homepage, patient information, patient rights, new patient packet, school-based health center) yielded no medical records request page
- Complete WordPress sitemap analysis revealed no ROI-related pages
- 14 common ROI filename URL patterns were tried across 8 upload directories — all returned nothing
- Wayback Machine archive of all PDFs ever hosted confirmed no ROI form has ever been published on this site

The only route a patient has to obtain an ROI form is to **call (251) 432-4117 or visit in person**, or potentially use the EPIC/MyChart patient portal (https://mychart.ochin.org/MyChartFPHC/). The website provides no guidance whatsoever on how to request medical records.

---

## 3. TECHNICAL ACCESSIBILITY

As a digital artifact, the New Patient Packet is reasonably well-constructed:

- **Text layer:** Present and extractable, with full text of 14,476 characters
- **Fillable fields:** 241 interactive form fields, indicating the document was designed for digital completion
- **Fonts:** 11 fonts embedded
- **Images:** 14 embedded images (likely logos and formatting elements)
- **File size:** At 771 KB for 8 pages, the file is moderately sized

However, none of these technical qualities matter for ROI purposes because **this document does not serve the function of a medical records request form**. The fillable fields collect patient registration data (name, address, insurance, income), not records release authorization details.

One notable technical defect: the `fillable_field_names` array is empty despite 241 fields being detected, suggesting the fields may lack proper accessibility labels — a potential issue for screen readers.

---

## 4. CONTENT DESIGN

Evaluated as a registration packet (its actual purpose), the document has mixed quality:

- **Layout:** Dense, all-caps headers with standard form field structure. The "ASSIGNMENT AND RELEASE" clause is buried at the bottom of the first page in a block of all-caps text, making it difficult to distinguish from surrounding content.
- **Language:** The document uses a mix of plain language and legalese. The release clause is written entirely in uppercase, dense legalese — e.g., "I HEREBY AUTHORIZE FPHC, INC., TO RELEASE ALL INFORMATION NECESSARY TO SECURE PAYMENT OF BENEFITS."
- **Typos:** Multiple spelling errors are present: "EXPIRARTION" (page 1, first insurance block), "REPSONSIBILITIES" (in the acknowledgment line: "FRANKLIN'S PATIENT RIGHTS AND REPSONSIBILITIES"), and "REPONSIBLE" ("I AM FINANCIALLY REPONSIBLE").
- **Organization:** Six different document types are combined into a single 8-page PDF, with no table of contents or clear separation between sections beyond page breaks.
- **Footer:** Every page includes the organization's mission and vision statements, which is consistent but consumes space.

---

## 5. PATIENT-CENTEREDNESS

This document **does not serve a patient trying to access their own health records** in any meaningful way. Specifically:

- **No patient access pathway:** The "Assignment and Release" clause only authorizes release to insurance payers, not to the patient.
- **No scope options:** There is no ability to specify record types, date ranges, or delivery formats.
- **No format options:** No mention of electronic delivery, mail, fax, or any other delivery method for records.
- **No Right of Access language:** No reference to HIPAA § 164.524, patient rights to access records, or any process for requesting one's own records.
- **No EHI export awareness:** No mention of electronic health information export or bulk data.

The Patient Bill of Rights section (page 8) does state patients have the right "To review and have copies of your medical records and to request your record be amended" and "To be assured of confidential treatment and to authorize the release of identifiable health care and other personal information," but provides **no instructions, no form, and no process** for exercising these rights.

The Notice of Privacy Practices (form-2, a separate document) does mention that patients can "Get a copy of your paper or electronic medical record" and that FPHC "will provide a copy or a summary of your health information, usually within 30 days of your request" with a "reasonable, cost-based fee," but again provides no actionable form or process — only a contact address (PO Box 2048, Mobile, AL 36652-2048) and email (Compliance@FranklinPrimary.org).

---

## 6. COMPLIANCE

Since this is not an ROI form, compliance evaluation applies only to the "Assignment and Release" clause:

- **Bundled consent:** The clause bundles consent for treatment ("I CONSENT TO ANY SERVICES RENDERED TO ME OR MY DEPENDENTS UNDER DOCTOR'S ORDERS"), financial responsibility ("I AM FINANCIALLY REPONSIBLE FOR ALL CHARGES"), and records release for billing — all in a single paragraph with a single signature line. While this is standard practice for intake forms, it means the patient cannot selectively consent to these different authorizations.
- **No expiration:** The release clause has no expiration date or revocation instructions.
- **No restriction on scope:** The phrase "RELEASE ALL INFORMATION NECESSARY TO SECURE PAYMENT OF BENEFITS" is broad — "all information necessary" is determined by the provider, not the patient.

The absence of a dedicated ROI form is itself a compliance concern: if a patient cannot find or obtain an authorization form, they face a practical barrier to exercising their HIPAA Right of Access, even if the organization would honor a request made through other channels.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No ROI form available online at all.** Despite an exhaustive search, Franklin Primary Health Center publishes no form for patients to request their own medical records. This creates a de facto barrier to exercising HIPAA Right of Access rights — patients must contact the center by phone, in person, or potentially navigate a patient portal they may not know exists.
- **Patient rights are stated without any mechanism to exercise them.** The Patient Bill of Rights declares patients can "review and have copies of your medical records" but provides no form, no instructions, no contact information, and no process description within this document.

### ⚠️ AMBIGUITIES
- **"Assignment and Release" clause scope is unclear to patients.** The clause "RELEASE ALL INFORMATION NECESSARY TO SECURE PAYMENT OF BENEFITS" does not specify what information that includes, who receives it, or for how long the authorization remains in effect. A patient signing this may not understand what they are authorizing.

### ❌ ERRORS
- **Three spelling errors** in a single-page form section: "EXPIRARTION" (should be "EXPIRATION"), "REPSONSIBILITIES" (should be "RESPONSIBILITIES"), and "REPONSIBLE" (should be "RESPONSIBLE"). These errors in a patient-facing document undermine professionalism and may confuse patients.

### ✨ BRIGHT SPOTS
- **241 fillable form fields** indicate this organization has invested in making its intake packet digitally completable, even if no ROI form exists.
- **EPIC/MyChart patient portal** (via OCHIN) is available, which may provide an alternative pathway for patients to access records electronically — though this is not documented on the main website.
