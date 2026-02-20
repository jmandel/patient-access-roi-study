# Evaluation: Aurora Medical Center - Grafton — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is titled **"Authorization to Release Protected Health Information"** and is a general third-party ROI authorization form. It is a system-wide form used across all Advocate Aurora Health (now Advocate Health) facilities, not specific to the Grafton campus. The form number is **S300503 (Rev. 11/25)**.

This organization has three forms downloaded. Form-1.pdf is textually identical to form-2.pdf (same 3,423-character extracted text, same 196,289-byte file size) but was found at a different URL — it appears to be an older or alternate link to the same revision. Form-3.pdf ("Patient Request for Health Information," S88411-EN) is a distinct, patient-access-specific form designed for patients requesting their own records. Form-2.pdf is the version of the general authorization directly linked from the medical records page, and is intended for releasing information to third parties (other providers, insurers, attorneys, etc.), though a patient could also use it for personal requests.

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, the medical records page at `aurorahealthcare.org/patients-visitors/medical-records` is reachable in about two clicks from the homepage (Home → Patients & Visitors → Medical Records) and appeared in web search results. The page organizes all available forms with clear download links, including English and Spanish versions of both the authorization form and the patient request form, plus ancillary forms (revocation, accounting of disclosure, restriction requests). The URL is long but descriptive: it includes `authorization-to-release-protected-health-information-wi-il-s300503.PDF`. The `wi-il` suffix helpfully signals the form's jurisdictional scope (Wisconsin and Illinois).

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (3,423 characters). Not an image-only scan.
- **Fillable fields**: **Zero** interactive form fields despite having clear blanks for patient name, DOB, address, signature, etc. The form uses 9 fonts and has visual checkbox characters in the extracted text, but these are static glyphs, not interactive PDF form elements. A patient must print the form and fill it by hand, or use clumsy PDF annotation tools.
- **File size**: 196 KB for a single page — reasonable, though the 1 embedded image and 9 fonts suggest some design overhead.
- **Digital-first design**: No. The form is designed for print-and-fill workflow. The lack of fillable fields, combined with a signature line (no e-signature support), confirms this is a paper-first artifact published as a flat PDF.

## 4. CONTENT DESIGN

**Length**: 1 page. This is impressively compact given the breadth of content — patient demographics, record type selection, recipient information, purpose of release, delivery method, rights disclosure, expiration, signature, and minor authorization provisions all fit on a single page.

**Clarity**: The language is a mix of functional plain language and legal boilerplate. The rights section is fairly readable: *"I may revoke this authorization at any time by providing written notice to the health information department."* The minor authorization paragraph is denser but legally necessary. The phrase *"This is a full release, including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2), genetic information, HIV/AIDS, and other sexually transmitted diseases"* is notable — it bundles sensitive-category consent into a blanket statement rather than requiring separate opt-in for each category.

**Organization**: The form follows a logical top-to-bottom flow: patient info → what records → send to whom → why → how → your rights → expiration → signature. Section headers ("Patient Information," "Information Requested," "Release the Requested Information to," "Purpose of Release," "Requested Format/Delivery Method," "Your Rights Regarding This Authorization") provide clear structure.

**Record type granularity**: The form offers extensive checkboxes across three categories: Medical Records (12+ options including "Facility Summary," "Entire Medical Record," individual report types, and behavioral health), Imaging (5 modality-specific options), and Billing (4 options). This level of specificity is above average.

**Layout**: Fitting this much content on one page means the form is **dense**. The extracted text shows tightly packed sections. The behavioral health mutual exchange checkbox appears at the top between demographics and record selection, which is a somewhat unusual placement. Font sizes likely run small to accommodate everything.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general third-party release form**, not a patient access form. The "Release the Requested Information to" field asks for a facility, person, or company — the framing is about sending records elsewhere, not about the patient obtaining their own copies. The "Purpose of Release" options include "Personal (at my request)" as one choice among continuation of care, legal/investigation, and insurance, but the form's structure still frames the patient as authorizing a release to a named third party. Aurora does offer a **separate patient-access form** (form-3.pdf, "Patient Request for Health Information") which better serves patients requesting their own records and prominently mentions the patient portal.

**Scope options**: Good. Patients can specify treatment facility, date range, and select from granular record categories. The "Entire Medical Record" checkbox is available for those who want everything.

**Format/delivery options**: The form offers multiple delivery methods: paper copy by mail, CD by mail, encrypted email, patient portal, and in-person pick-up (paper or CD). The inclusion of encrypted email and patient portal as delivery options is a positive signal. However, the note *"(Fees may apply)"* is vague — it does not specify what fees, their amounts, or under what circumstances they apply.

**Right of Access language**: The rights section mentions the right to revoke, the right to a copy of the authorization, and non-discrimination for refusing to sign. It does **not** explicitly reference HIPAA § 164.524 or the patient's Right of Access. It references 42 CFR Part 2 for substance abuse records.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

## 6. COMPLIANCE

**Expiration**: *"This authorization expires one year from the date of my signature unless otherwise written here."* A one-year default expiration is standard and reasonable.

**Non-discrimination**: The form includes the required statement: *"Refusing to sign this form will not affect my ability to receive treatment, payment, health plan enrollment, or eligibility for benefits."*

**Re-disclosure warning**: Present: *"I understand that information disclosed under this authorization may be subject to re-disclosure and may no longer be protected by federal and state privacy laws."*

**Sensitive categories**: The form states it is *"a full release, including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2), genetic information, HIV/AIDS, and other sexually transmitted diseases."* This bundles all sensitive categories into a single blanket release rather than allowing patients to opt in or out of individual categories. While this simplifies the form, it means a patient cannot authorize release of medical records while withholding, say, behavioral health or HIV records — a tension with the principle of minimum necessary disclosure.

**Fees**: The parenthetical *"(Fees may apply)"* next to the delivery method section provides no specifics. HIPAA limits fees for patient access requests to reasonable cost-based amounts; the lack of disclosure leaves patients uninformed about potential costs.

**Submission methods**: The form itself does not specify how to submit it (fax, mail, email, in-person). The retrieval notes indicate the medical records webpage offers multiple submission methods, but the form as a standalone document does not include this information.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket sensitive-category release**: The form declares itself *"a full release, including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2), genetic information, HIV/AIDS, and other sexually transmitted diseases"* with no option to exclude individual sensitive categories. For a third-party release form, this could result in patients disclosing highly sensitive information they did not intend to share, and conflicts with minimum necessary principles under HIPAA and the granular consent requirements of 42 CFR Part 2.

### ⚠️ AMBIGUITIES

- **"Fees may apply"** is stated without any specifics — no fee schedule, no cap, no distinction between patient-access fees (limited by HIPAA) and third-party release fees. A patient reading this form has no way to anticipate costs.
- **No submission instructions on the form itself**: The form lacks a fax number, mailing address, or email address for submission. A patient who prints this form from a search result (without visiting the medical records webpage) would not know where to send it.
- **Duplicate forms (form-1 vs. form-2)**: Two identical files exist at different URLs, which could confuse patients or staff about which is current. Both carry the same revision number (S300503, Rev. 11/25).

### ✨ BRIGHT SPOTS

- **Comprehensive delivery options**: Offering encrypted email, patient portal, CD, paper mail, and in-person pick-up gives patients meaningful choice in how they receive records.
- **Granular record selection**: The extensive checkbox grid covering medical records, imaging by modality, and billing document types lets patients request exactly what they need.
- **Companion patient-access form exists**: While form-2 is a general authorization, Aurora provides a separate dedicated "Patient Request for Health Information" form (form-3) specifically for patients, including a patient portal callout — showing awareness that patient access and third-party release are different use cases.
- **Well-organized medical records page**: The parent webpage provides a clear, comprehensive listing of all available forms with instructions, including Spanish versions.
