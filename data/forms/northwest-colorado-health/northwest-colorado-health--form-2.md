# Evaluation: Northwest Colorado Health — form-2.pdf

**Document:** Authorization for Use or Disclosure of Protected Health Information — Medical and/or Dental  
**Organization:** Northwest Colorado Health (Steamboat Springs, CO)  
**Org type:** FQHC · Independent · Nonprofit · West  
**Revision date on form:** 04/2020  

---

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization for Use or Disclosure of Protected Health Information — Medical and/or Dental" form. It is one of **two ROI forms** published by Northwest Colorado Health: form-1 covers **Behavioral Health** records, while this form (form-2) covers **Medical and/or Dental** records. The two forms share nearly identical structure and language, differing mainly in the record categories offered and the sensitive-information disclosures (this form lists HIV-related information and substance abuse; form-1 lists mental health, psychotherapy notes, and substance abuse).

The form explicitly notes the split: "I understand that if I also saw a Behavioral Health Provider for Substance Abuse a second release is required to be completed for those records." This means a patient who received both medical and behavioral health services would need to complete both forms.

---

## 2. FINDABILITY

Per the retrieval notes, the form was **easy to find**. A site-scoped web search (`site:northwestcoloradohealth.org`) located both forms, which are linked from a dedicated patient forms page at:  
`https://northwestcoloradohealth.org/what_you_can_do/patient-resources/patient-forms/english.html`

The download URL (`https://northwestcoloradohealth.org/file_download/inline/47f874e3-3d56-4e17-934f-11105ae813ba`) is a GUID-based inline link — not human-readable, but functional. No authentication, CAPTCHA, or bot-blocking was encountered. The forms page is navigable via the site's "Patient Resources" section.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The full text (4,303 characters) is fully extractable — this is not a scan.
- **Fillable fields:** The metadata reports `fillable_field_count: 43` but `fillable_field_names: []` (empty array). This is a contradictory signal. The notes.md describes the form as "Flat PDF without fillable fields" and says forms are "designed to be printed and filled by hand." The field count of 43 likely reflects embedded annotations or graphical elements, not true interactive form fields. For practical purposes, this form has **no usable fillable fields** — patients must print and handwrite.
- **File size:** 608,748 bytes (~609 KB) for a single page. This is notably large for a one-page text-dominant document; the 9 embedded images likely account for the bulk (logos, graphical elements).
- **Fonts:** 6 fonts embedded.
- **Design origin:** This appears to be a digitally-created document (not a scan), but it is designed for a print-and-fill workflow rather than digital completion.

---

## 4. CONTENT DESIGN

**Length:** One page — appropriate for the scope of information collected. The form packs a substantial amount of content into a single page.

**Structure:** The form follows a logical top-to-bottom flow:
1. Introductory paragraph explaining the purpose
2. Patient Information (name, DOB, SSN, address, phone)
3. "Request Information FROM" / "Release Information TO" sections
4. Record type checkboxes (MEDICAL, DENTAL) with date range and specific record subtypes (Progress Note, Lab Report, X-Ray Report, Other)
5. Purpose of Disclosure checkboxes
6. Sensitive information authorization (HIV, substance abuse)
7. Signature block
8. Six numbered legal paragraphs covering expiration, revocation, re-disclosure, non-retaliation, and general authorization
9. Final signature/acknowledgment block

**Clarity:** The introductory paragraph is written in **accessible, patient-friendly language**: "We value your privacy at Northwest Colorado Health. Legally, we cannot release your written health record to anyone (including you) without your specific consent." This is unusually clear. However, the six numbered paragraphs at the bottom shift to denser legal language, though still reasonably readable.

**Layout:** As a single-page form, content is necessarily compressed. The FROM/TO sections use checkbox pre-fills (e.g., "Northwest Colorado Health" and "Self / Legal Guardian" are printed as defaults), which reduces writing burden. The record types and purpose of disclosure are presented as checkbox options, aiding completion.

---

## 5. PATIENT-CENTEREDNESS

**Patient access pathway:** The form has pre-printed defaults that partially orient it toward patient access: "Release Information TO" includes "Self / Legal Guardian" as a named option alongside the blank fields. However, the form is a **general-purpose authorization** — it serves both patient access requests and third-party disclosures, without a dedicated patient-access-only pathway.

**Scope options:** Patients can specify:
- Medical vs. Dental records
- Date range ("From & To Dates" or "ALL Dates")
- Specific record types: Progress Note, Lab Report, X-Ray Report, Other
- Purpose of disclosure: Second Opinion, Legal, Insurance, School, Primary Care Provider Change, Other

This is a **reasonable set of scope options** for a single-page form.

**Format/delivery options:** The form provides **no options for delivery format** (electronic, mail, fax, pick-up). The "Release Information TO" section collects a fax number, suggesting fax is a supported delivery method, but there is no explicit choice for electronic delivery or patient portal access.

**Right of Access language:** There is no reference to HIPAA § 164.524 or the patient's Right of Access. The form does not explain patient rights regarding records access. Paragraph 4 states "My health care and payment for my health care will not be affected if I do not sign this form," which is a required HIPAA element, but the broader right-of-access framework is absent.

**EHI/electronic export:** No mention of electronic health information export or bulk data options.

**Processing time:** The form states requests "may take up to 48 business hours to complete" — roughly 6 business days, which is a reasonable turnaround.

**SSN collection:** The form requests the patient's Social Security Number ("SS# ___"). While not unusual in older form designs, collecting SSNs on authorization forms raises unnecessary privacy risk and is not required for record identification.

---

## 6. COMPLIANCE

**Expiration:** "This authorization will expire two years from my last date of service visit." This is a reasonable duration — not overly short, though the trigger is service-based rather than a fixed period from signature.

**Revocation:** Patients may revoke "at any time by notifying Northwest Colorado Visiting Nurse Association / Privacy Officer" in writing. The revocation mechanism is adequately described, though the use of the legacy organization name is notable (see below).

**Non-retaliation:** Paragraphs 4 and 5 appropriately state that refusing to sign will not affect treatment or payment.

**Re-disclosure warning:** Paragraph 3 includes the required notice about potential re-disclosure.

**Fees:** No fees are mentioned. The form neither discloses nor demands upfront payment, which avoids a potential barrier but also doesn't inform patients about possible costs.

**Submission method:** The form does not specify how it should be submitted — no mention of in-person, mail, fax, or email submission options. The Privacy Officer's mailing address is provided in the revocation section but not explicitly as a submission address.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection:** The form includes a field for Social Security Number ("SS#"). Collecting SSNs on ROI forms is an unnecessary privacy risk — date of birth and name should suffice for patient identification. This creates a potential data exposure if forms are transmitted via fax or mail.

### ⚠️ AMBIGUITIES

- **Fillable field discrepancy:** Metadata reports 43 fillable fields, but field names are empty and the retrieval notes describe the form as non-fillable ("Flat PDF without fillable fields"). This inconsistency may confuse digital workflows — a PDF reader might detect fields but they may not be functional.
- **Submission method unstated:** The form does not tell patients how or where to submit the completed authorization. The Privacy Officer's address appears only in the revocation paragraph, not as a submission destination. Patients must infer where to deliver the form.
- **"Request Information FROM" defaults to the organization:** The "FROM" field has "Northwest Colorado Health" pre-printed, but there's also a blank "Name / Agency" field below it. It's unclear whether the patient should use this form to request records *from* an outside provider to be sent *to* Northwest Colorado Health, or whether this form is only for records held by Northwest Colorado Health.

### ❌ ERRORS

- **Legacy organization name in revocation clause:** Paragraph 2 instructs patients to send revocations to "Northwest Colorado Visiting Nurse Association / Privacy Officer," while the rest of the form uses "Northwest Colorado Health." This is an outdated reference that has not been corrected since the organization's name change, despite the form's 04/2020 revision date.
- **Grammar error in legal text:** "The confidentiality of these records is required Title 42 of the United States code" — this sentence is missing the word "by" (should read "is required **by** Title 42").

### ✨ BRIGHT SPOTS

- **Plain-language introduction:** The opening paragraph ("We value your privacy... Legally, we cannot release your written health record to anyone (including you) without your specific consent") is notably patient-friendly and sets a welcoming tone.
- **Fast processing commitment:** "Up to 48 business hours" is a concrete, measurable timeframe — more specific than the common "30 days" that many organizations cite.
- **Checkbox-driven design:** Pre-populated options for record types, disclosure purposes, and destinations reduce the writing burden and guide patients through the form efficiently.
