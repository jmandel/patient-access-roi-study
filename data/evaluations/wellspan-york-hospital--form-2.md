# Evaluation: WellSpan York Hospital — form-2.pdf

**Document:** "Authorization for Release of Protected Health Information"  
**Organization:** WellSpan York Hospital (York, PA)  
**Source URL:** https://www.wellspan.org/-/media/Project/Wellspan-Site-Tenant/wellspan-site/data/media/files/Patient-Resources/Neighborhood-Hospitals/Authorization-for-Release-of-PHI---English.pdf  
**Form ID:** FROF017Rev1092722WS  

---

## 1. DOCUMENT IDENTIFICATION

This is a 2-page authorization form titled "Authorization for Release of Protected Health Information." It is specifically designed for three WellSpan "neighborhood hospitals" — WellSpan Newberry Hospital, WellSpan Shrewsbury Hospital, and WellSpan Carlisle Hospital — as indicated by facility checkboxes at the top and contact information for each facility on page 2. It is **not** the primary form for WellSpan York Hospital; that role belongs to form-1.pdf ("Authorization to Use or Disclose Health Information," form #WROI0001), which is the system-wide ROI form applicable to all WellSpan facilities including York Hospital.

This form exists in parallel with form-1.pdf, creating a two-form system within WellSpan Health. The neighborhood hospitals form appears to be an older, facility-specific document (revision date in the form ID suggests October 2022: "Rev1092722"), while form-1.pdf (Form #2606 Rev. 08/25) is newer and system-wide. Notably, WellSpan York Hospital is not listed on form-2.pdf at all — a patient at York Hospital would need form-1.pdf instead.

---

## 2. FINDABILITY

Per the retrieval notes, this form was discoverable via web search with queries like "WellSpan medical records release form PDF." It appeared alongside the primary system-wide form. The source URL path (`/Patient-Resources/Neighborhood-Hospitals/Authorization-for-Release-of-PHI---English.pdf`) is descriptive and clearly indicates the form's scope (neighborhood hospitals) and language (English). The filename itself — "Authorization-for-Release-of-PHI---English" — is clear and human-readable.

However, there is a risk that a patient at WellSpan York Hospital could encounter this form in search results and attempt to use it, even though it does not apply to York Hospital. The form's title ("Authorization for Release of Protected Health Information") is generic and does not signal its limited facility scope until the patient reads the checkbox area.

The retrieval notes indicate no difficulties: no bot blocking, no login walls, and direct PDF links. This is a positive finding.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The form has extractable text (4,252 characters across 2 pages), confirming it is a digitally-created PDF, not a scan.
- **Fillable fields:** Zero (`fillable_field_count: 0`). Despite being digitally created, the form has no interactive form fields. A patient must print, fill by hand, and submit physically or by fax. This is a significant accessibility gap.
- **File size:** 211,250 bytes (~206 KB) for a 2-page text-only document with no embedded images. This is somewhat large for the content, though not unreasonable.
- **Font count:** 7 fonts used, suggesting some formatting variety.
- **Embedded images:** 0 — the form is text-only.
- **Digital-first design:** No. While the PDF was digitally created (not scanned), the absence of fillable fields and the reliance on print-sign-fax workflow indicate a print-first design philosophy.

---

## 4. CONTENT DESIGN

**Length:** 2 pages, which is appropriate for an ROI authorization form. Page 1 covers the authorization itself (patient info, recipient, record types, sensitive info opt-outs, reason, expiration). Page 2 covers legal disclosures, signature blocks, and facility contact information.

**Clarity:** The form uses relatively plain language in places. The opening statement — "I understand that signing or not signing this form will not affect treatment I receive in any way. The facility cannot require me to sign the authorization in order to receive treatment." — is a clear, patient-friendly statement of rights. However, page 2 shifts into denser legal language: "I understand that this authorization is subject to revocation at any time, except to the extent that the facility has already taken action in reliance upon it or to the extent previously disclosed within the HIPAA NOTICE OF PRIVACY PRACTICES for Treatment, Payment, and/or Business Operations."

**Record type granularity:** The form offers 16 specific record type checkboxes plus two free-text fields ("Other" and "Billing or other business records"), providing good granularity:
- Entire Clinical Record, Discharge Summary, Laboratory Reports/Tests, EKG Report, Nurses Notes, Emergency Department Report, Consultation Reports, History & Physical Exam, Physician Orders, Medication Administration Records, Physician Progress Reports, Psychiatric/Psychological Evaluation, Radiology Report, Pathology Report, Abstract, Billing or other business records.

**Sensitive information handling:** The form has a clear opt-out mechanism for sensitive records: "HIV, mental health, and drug/alcohol information contained in the parts of the records indicated above will be released through this authorization unless otherwise indicated. Do not release: ☐ Drug/Alcohol ☐ HIV ☐ Mental Health (Psychiatric)." This is an opt-out (default release) rather than opt-in approach.

**Organization:** Sections flow logically: facility selection → patient info → recipient → record types → sensitive info → reason → dates → expiration → legal terms → signature → facility contacts.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is structured as a release-to-third-party form ("the information will be released to: Facility/Person to Receive Records"). There is no specific pathway or language for a patient requesting records for themselves. The "Reason for Request" options are: Continuing treatment, Legal, Employer, Disability, Insurance, Study/Research, "I do not wish to disclose the reason," and Other. None explicitly name "personal use" or "patient access" as a reason, though "Other" could accommodate this and "I do not wish to disclose the reason" is available.

**Scope options:** Good. The form supports specific record types (16 checkboxes), date ranges ("Dates of Service for record requests"), and sensitive information opt-outs.

**Format/delivery options:** None specified. The form does not offer electronic delivery, email, CD, or portal access. This stands in contrast to form-1.pdf, which explicitly offers Paper, CD, Fax, and Email (via secure portal) delivery options. Form-2.pdf's only submission path is to send the completed form by mail or fax to one of three facility addresses.

**Right of Access language:** There is no explicit reference to HIPAA § 164.524, the Right of Access rule, or patient rights to inspect/copy their records. The form does state that treatment cannot be conditioned on signing, but does not educate patients about their broader access rights.

**EHI Export:** No mention of electronic health information export, bulk data, or any digital-first record delivery mechanism.

---

## 6. COMPLIANCE

**Expiration:** "This authorization will expire in six months or: [blank]." A 6-month default expiration is relatively short. While not a violation, it is more restrictive than form-1.pdf's 12-month expiration.

**Identity verification:** The form requires: "Identity of requestor verified via ________ Photo ID ________ Matching Signature ________ Other, Specify ___." This is reasonable for in-person requests but could create barriers for remote/mailed submissions.

**Power of Attorney documentation:** "If authority to act is a Power of Attorney, supporting documentation must be included with this request." This is a standard and reasonable requirement.

**Witness requirement:** The form includes two witness signature lines (with date and time fields). These appear to be required for standard submissions, not just oral authorization scenarios — which is unusual. The oral authorization provision states: "If I am physically unable to sign, I may provide oral authorization if witnessed by two (2) staff members." The witness lines on the main form may also serve this purpose, but their presence on the standard signature block could confuse patients about whether witnesses are routinely required.

**Revocation:** The form states revocation must be delivered "in writing... to the Privacy Officer." This is standard. However, it adds: "My decision to revoke the authorization may result in my insurance company not being able to pay for my medical care, and I understand that I may be responsible for payment of the claim." This language is concerning — it implies financial consequences for revoking an authorization, which could discourage patients from exercising their right to revoke.

**Fees:** No fee information is disclosed on the form, in contrast to form-1.pdf which mentions charges regulated by state and federal law.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Revocation deterrence language:** The statement "My decision to revoke the authorization may result in my insurance company not being able to pay for my medical care, and I understand that I may be responsible for payment of the claim" links authorization revocation to potential financial harm. While potentially factually accurate in narrow insurance-related release scenarios, placing this language on a general ROI form could discourage patients from revoking authorizations they no longer want, particularly when the authorization was for patient access rather than insurance purposes.

### ⚠️ AMBIGUITIES

- **Witness requirement scope:** The main signature block includes two witness signature lines. It is unclear whether witnesses are required for all submissions or only for oral authorization when the patient is "physically unable to sign." A patient filling this out at home would not know if they need witnesses to submit a valid form.

- **Applicability confusion:** The form title is generic ("Authorization for Release of Protected Health Information") but it only applies to three neighborhood hospitals — not WellSpan York Hospital. A York Hospital patient finding this via web search could waste time completing the wrong form.

- **Sensitive info default-release model:** The opt-out approach for HIV, mental health, and drug/alcohol records — where these are released by default unless the patient affirmatively checks "Do not release" — may surprise patients who expect sensitive records to require explicit opt-in consent, particularly given varying state law protections for these categories.

### ❌ ERRORS

- **No fillable fields:** Despite being a digitally-created PDF, the form has zero fillable fields, forcing patients to print and handwrite. This is a design deficiency rather than a factual error, but it represents a missed opportunity in a born-digital document.

### ✨ BRIGHT SPOTS

- **Clear non-coercion statement:** The language "I understand that signing or not signing this form will not affect treatment I receive in any way. The facility cannot require me to sign the authorization in order to receive treatment" is prominent and plainly written — appearing on page 1, not buried in fine print.

- **Granular record type selection:** With 16 specific record-type checkboxes, the form gives patients meaningful control over what is released, rather than forcing an all-or-nothing disclosure.

- **Facility contact information:** Page 2 provides complete contact details (address, phone, fax) for all three applicable facilities, making it clear where to submit the form.
