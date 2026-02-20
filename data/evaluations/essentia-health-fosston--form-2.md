# Evaluation: Essentia Health-Fosston — form-2.pdf

## Document Overview

- **Form title:** MyChart Access Self-Authorization
- **Form ID:** EH2931 12/20
- **Source URL:** https://essentiamychart.org/MyChart/myhealthselfauthorization.pdf
- **Pages:** 1
- **File size:** 110,457 bytes
- **Fillable fields:** 0
- **Text layer:** Yes
- **Image-only scan:** No

---

## 1. DOCUMENT IDENTIFICATION

This is a **MyChart Access Self-Authorization** form — a specialized authorization for a patient to grant Essentia Health permission to release their personal health information to *themselves* via the MyChart patient portal. It is subtitled "For Age 12 and above."

This is **not** a traditional Release of Information (ROI) form. It does not allow designation of a third-party recipient, record-type selection, or date-range scoping. It is a single-purpose document that authorizes portal access.

Among the four forms found for Essentia Health-Fosston:
- **form-1.pdf** is the primary ROI form ("Authorization for Use and Disclosure of Protected Health Information," EH10843).
- **form-2.pdf** (this document) is the MyChart self-authorization.
- **form-3.pdf** is a MyChart Adult Proxy Authorization (image-only, no text layer).
- **form-4.pdf** is a Verbal Authorization form for designating individuals who may receive verbal information.

All forms are system-wide Essentia Health documents, not specific to the Fosston facility.

---

## 2. FINDABILITY

The form was sourced from `https://essentiamychart.org/MyChart/myhealthselfauthorization.pdf`, hosted on the MyChart subdomain rather than the main Essentia Health website. According to the retrieval notes, the main medical records page at `https://www.essentiahealth.org/patients-visitors/medical-records` references MyChart-based access, and the forms were discoverable through web searches. The notes describe the search as yielding results with "No significant difficulties."

The URL is reasonably descriptive (`myhealthselfauthorization.pdf`), though it lives on a separate domain (`essentiamychart.org`) from the main site. A patient would need to either follow a link from the medical records page or know to search for MyChart enrollment specifically. The form is not directly linked from the main medical records page as a standalone PDF — it sits in the MyChart infrastructure.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and fully extractable. The full text (2,544 characters) renders cleanly with no OCR artifacts or garbled content.

**Fillable fields:** Zero. Despite containing structured data-entry fields (patient name, date of birth, SSN last four digits, address, phone numbers), none are interactive. A patient must print the form and fill it by hand, consistent with the instruction: "Please print clearly."

**File format:** At 110 KB for a single page, the file is reasonably sized. It uses 4 fonts and no embedded images, suggesting a digitally composed (not scanned) document.

**Digital-first design:** The form was created digitally (not a scan), but it was designed for a print-and-mail workflow, not digital completion. There are no interactive elements. The form does note that "A photocopy, fax or electronically scanned and transmitted image is the same as the original," which at least permits scanning a completed form for submission.

---

## 4. CONTENT DESIGN

**Length:** One page — concise and appropriate for the narrow scope of authorizing portal access.

**Clarity:** The language is generally clear. The core authorization statement is straightforward: "I allow Essentia Health to release my personal health information to me via an online MyChart account." The bulleted "I understand that" section uses plain language and is readable without legal training.

**Organization:** The form follows a logical top-to-bottom flow:
1. Title and age restriction
2. Patient demographic fields (name, DOB, age, email, address, SSN, phone)
3. Authorization statement
4. Bulleted terms and conditions
5. Signature and date
6. Submission instructions (mail, email, fax)

**Layout:** Clean with adequate whitespace. The single-page format avoids overwhelming the reader.

**Field count:** Approximately 10 data-entry fields (name components, DOB, age, email, address, SSN last four, city, state, zip, phone numbers). The SSN field is notable — see compliance section below.

---

## 5. PATIENT-CENTEREDNESS

**Patient access focus:** This form is explicitly and solely about the patient accessing their own records — a self-authorization for portal access. In that narrow sense, it is directly patient-centered. However, it does not enable a patient to request a specific set of records, choose a delivery format, or define a date range. It simply authorizes ongoing portal access.

**Scope options:** None. The authorization covers all information "maintained in MyChart" without any ability to limit scope. The form states the authorization "will be valid for as long as I maintain an active MyChart account."

**Format options:** The form does not offer delivery format choices — it is inherently tied to the MyChart portal as the delivery mechanism.

**Right of Access language:** The form does not reference HIPAA § 164.524 or patient rights. It does note that "If I do not sign this form I will still be treated and payment, enrollment and eligibility for benefits will not be impacted" — a standard anti-conditioning statement.

**EHI Export awareness:** No mention of electronic health information export, bulk data, or any alternative to portal access.

**Submission options:** The form provides three submission channels: mail ("Essentia Health, Health Information Services, West Annex – HIS - 45, 400 East Third Street Duluth MN 55805"), fax (218-786-6658), and email (MyChartSignUp@EssentiaHealth.org). Providing an email option is a positive feature.

---

## 6. COMPLIANCE

**SSN collection:** The form requests "Last four digits of SSN" — this is a notable data point. While partial SSN collection is not uncommon for identity verification, it is not a HIPAA requirement for patient portal enrollment, and collecting even partial SSN introduces privacy risk.

**Indefinite authorization:** The authorization "will be valid for as long as I maintain an active MyChart account" — this is an open-ended, indefinite authorization. While this makes practical sense for ongoing portal access, it differs from the one-year default in the main ROI form (form-1).

**Revocation:** The form states the patient "may let Essentia Health know in writing at any time" to revoke, with the change "effective no later than the next business day." This is reasonable and clear.

**Anti-conditioning:** Properly included: "If I do not sign this form I will still be treated and payment, enrollment and eligibility for benefits will not be impacted."

**Re-disclosure warning:** The form includes: "Essentia Health cannot be responsible for the confidentiality of information released to me, and cannot prevent me from releasing the information to another person. At that time, the information is no longer protected by federal and state privacy regulations." This is a factually questionable statement when applied to a patient accessing their own records — information released to the patient about themselves was never "protected from" the patient.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Partial SSN collection for portal enrollment:** The form requires "Last four digits of SSN" to sign up for MyChart. This is not a HIPAA requirement and creates unnecessary identity-theft risk. Many health systems enroll patients in portals without collecting SSN data.

### ⚠️ AMBIGUITIES

- **Re-disclosure warning applied to self-access:** The form warns that "Essentia Health cannot be responsible for the confidentiality of information released to me, and cannot prevent me from releasing the information to another person. At that time, the information is no longer protected by federal and state privacy regulations." Applying a re-disclosure warning to a patient receiving *their own* records is misleading — HIPAA's re-disclosure concept applies to third-party recipients, not to patients accessing their own information. This language could confuse patients into thinking they have limited rights to share their own health information.

- **"For Age 12 and above" without explanation:** The form is limited to ages 12+ but provides no guidance on what form or process applies to children under 12, or why age 12 is the threshold.

### ❌ ERRORS

- **Form date suggests age:** Form ID "EH2931 12/20" indicates a December 2020 creation date, making this form over 5 years old at the time of evaluation. The mailing address references "West Annex – HIS - 45, 400 East Third Street Duluth MN 55805," while the main ROI form (form-1, dated 12/25) uses "502 East Second Street, Duluth MN 55805." This address discrepancy between forms suggests the MyChart form may not have been updated when the HIM department relocated.

### ✨ BRIGHT SPOTS

- **Email submission option:** The form provides `MyChartSignUp@EssentiaHealth.org` as a submission channel, allowing patients to submit without mailing or faxing. This is a meaningful convenience that many organizations lack.

- **Clear revocation terms:** The statement that revocation becomes "effective no later than the next business day" is more specific and patient-friendly than the vague revocation language found in many authorization forms.
