# Evaluation: Olmsted Medical Center — form-2.pdf

## Document Overview
- **Title:** Authorization for Allowing Verbal Communication of Protected Health Information
- **Organization:** Olmsted Medical Center (Rochester, MN) — independent nonprofit physician practice
- **Source URL:** https://www.olmmed.org/app/files/public/6ac63789-b7eb-489d-b147-e62879400dd0/Patients%20and%20Visitors/Consent---Authorization-for-Allowing-Verbal-Communication-of-PHI.pdf
- **Form ID:** 1031908 rev0322
- **Pages:** 1
- **File size:** 105,001 bytes
- **Fillable fields:** 17
- **Has text layer:** Yes

---

## 1. DOCUMENT IDENTIFICATION

This is **not** a traditional Release of Information (ROI) form. It is a narrowly scoped authorization that permits OMC staff to **verbally discuss** a patient's protected health information with a designated person. The form explicitly states: *"Release of information under this document is limited to verbal discussions with my OMC Healthcare Providers. This document does not permit release of any written health information to the individuals named on this authorization."*

Olmsted Medical Center offers this as a companion to their primary ROI form (form-1.pdf, "Authorization for Release of Health Information"). Both forms are listed on the same "Manage Your Health Information" page. Form-1 handles written record releases (clinic notes, lab results, radiology, etc.) with multiple delivery methods; form-2 handles only verbal communication with a named individual. The two forms serve distinct purposes and do not overlap.

The organization also provides Spanish and Somali translations of both forms (referenced by document IDs: English – 1031908, Spanish – 2022819, Somali – 2030119), plus additional forms for publicity-related disclosures and MyChart proxy access.

---

## 2. FINDABILITY

Per the retrieval notes, both forms were found on OMC's dedicated "Manage Your Health Information" page, accessible via a clear navigation path: **Patients & Visitors > Your Care & Visit > Manage Your Health Information**. The page was described as well-organized with multiple forms clearly listed. Web searches for standard terms like `"Olmsted Medical Center" "authorization" "release" "health information"` returned direct links.

The source URL uses a descriptive filename (`Consent---Authorization-for-Allowing-Verbal-Communication-of-PHI.pdf`), making it clear what the document contains even from the link alone. The one friction point noted was **Akamai CDN bot blocking**, which prevented programmatic downloads via `curl` — a technical barrier that wouldn't affect a patient using a regular browser.

Overall findability is strong: clear navigation, descriptive naming, dedicated page for health information management forms.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present — the full document text (2,251 characters) is extractable, confirming this is a digitally generated PDF, not a scan.

**Fillable fields:** The form has 17 interactive fields, which is appropriate for a single-page form of this scope (patient demographics, designated person details, condition limitations, date ranges, signatures). Field names are not exposed in metadata, but the field count aligns with the visible form elements.

**File format and size:** At 105 KB for a single-page fillable PDF, this is reasonable. The form uses 4 fonts and contains 1 embedded image (likely the OMC logo). PDF version supports AcroForm interactivity.

**Digital-first design:** The form appears to be designed digitally (not scanned), with a text layer, interactive fields, and clean typographic structure. However, the submission instructions — *"Please print, sign and return completed form"* — undercut the digital experience by requiring patients to print, physically sign, and either mail or fax the completed form.

---

## 4. CONTENT DESIGN

**Length and proportionality:** One page is appropriate for this form's narrow purpose. The form asks only for: patient demographics (name, DOB, address, phone), the designated person's name/relationship/phone, optional medical condition limitations, a time period, and signatures. This is well-scoped and not padded with unnecessary content.

**Clarity:** The language is mostly plain and understandable. The core authorization is stated clearly: *"I permit Olmsted Medical Center, their physicians, nurses, and other personnel ('OMC Healthcare Providers') to discuss health information, in person or by telephone, with the following person involved in my medical care."* The limitation on verbal-only communication is stated in bold-style emphasis and is unambiguous.

**Organization:** The form follows a logical flow: patient info → designated person → scope limitations → time period → verbal-only disclaimer → revocation instructions → signature → representative section → submission instructions. This is well-ordered.

**Parenthetical guidance:** The form includes helpful inline explanations, such as: *"(If no limitations are listed, discussions will be permitted regarding any medical condition and/or billing for which the patient has received care at Olmsted Medical Center.)"* This is good user guidance.

**Revocation:** The revocation process is stated simply: *"If, at any time, I do not want verbal discussions to be permitted... I must notify my OMC Healthcare Provider in writing."* This is clear, though it does require written notice.

---

## 5. PATIENT-CENTEREDNESS

**Purpose fit:** This form serves patients who want a family member or caregiver to be able to speak with their doctors about their care. It is not designed for patients requesting their own records — that function belongs to form-1. As a verbal communication authorization, it fills a legitimate and patient-friendly niche.

**Scope options:** Patients can limit the authorization to specific medical conditions or leave it open to all conditions and billing. This is a useful degree of control. They can also set custom date ranges or accept the default one-year validity.

**Designated person:** The form allows only a single designated person (one name/relationship/phone field). Patients needing multiple people authorized would need to complete multiple forms.

**Representative provisions:** The form includes a section for an authorized representative to sign on behalf of the patient, with a requirement to submit legal documentation of authority. This is standard and appropriate.

**Submission options:** The form can be returned by **mail** (to a specified address) or by **fax** (507.287.2777). There is no mention of email submission, online submission, or patient portal submission. The instructions say *"Please print, sign and return completed form,"* which assumes the patient has access to a printer.

**Rights language:** The form does not reference HIPAA, 45 CFR § 164.524, or patient rights. There is no mention of electronic health information export or bulk data — which is expected given this form's verbal-only scope.

---

## 6. COMPLIANCE

**Expiration:** The authorization defaults to one year from signature, with an option to specify custom dates. The form states: *"I understand that this authorization is valid for one year from the date signed or for the time period specified here."* One year is a reasonable default for this type of ongoing verbal communication authorization.

**Revocation:** Written revocation is required — *"I must notify my OMC Healthcare Provider in writing."* This is standard practice, though some organizations accept verbal revocation for verbal authorizations.

**Scope limitations:** The form is clearly limited to verbal discussions and explicitly disclaims written releases. This is appropriate scope management and avoids broad consent bundling.

**No concerning barriers:** The form does not require notarization, witness signatures, or in-person submission. Fax submission is offered as an alternative to mail. There are no fee disclosures (which is expected — there would be no cost associated with verbal communication permissions).

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Multilingual availability:** The form footer references Spanish (2022819) and Somali (2030119) translations — significant for Rochester, MN's diverse population including a large Somali community. This is uncommon and commendable.
- **Clear scope limitation:** The bold statement that the form "does not permit release of any written health information" is an excellent example of managing patient expectations and preventing misunderstanding about what this form authorizes.
- **Clean, single-page design:** The form is well-proportioned, fitting its entire content on one page without feeling cramped, and the 17 fillable fields make it genuinely interactive.
- **Default scope with opt-in limitation:** The approach of permitting all-condition discussion by default but allowing patients to narrow it to specific conditions is patient-friendly — it reduces burden while preserving control.

### ⚠️ AMBIGUITIES

- **"Person involved in my medical care":** The form restricts the designated person to someone "involved in my medical care," but doesn't define what qualifies. A spouse who drives the patient to appointments? An adult child who manages medications? This could lead to staff uncertainty about whether a named individual qualifies.
- **Single-person limitation unclear:** The form provides space for only one designated person but doesn't explicitly state whether the patient can submit multiple copies for multiple people, or whether a new form replaces a prior one.

### ❌ ERRORS

- **Footer artifact:** The form footer includes *"Epic – Release of Information – Verbal Communication"* — an internal EHR system reference (Epic workflow name) that has leaked into the patient-facing document. While harmless, it's an artifact of the production process that a patient shouldn't see.
