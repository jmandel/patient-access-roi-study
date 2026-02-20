# Evaluation: Aurora Medical Center - Grafton — form-1.pdf

**Organization**: Aurora Medical Center - Grafton (Grafton, WI)
**Parent System**: Advocate Health (formerly Advocate Aurora Health)
**Document**: "Authorization to Release Protected Health Information" (form S300503, Rev. 11/25)
**Source URL**: `https://www.aurorahealthcare.org/-/media/Project/Health-System-Enterprise/AuroraHealthCareOrg/aurorahealthcare/documents/patients-visitors/medical-records/authorization-for-release-of-information-wi-il.PDF`

---

## 1. DOCUMENT IDENTIFICATION

Form-1 is titled **"Authorization to Release Protected Health Information"** and is a **general third-party release authorization** — not a patient-access-specific form. It is designed for authorizing the release of health information *to* a named recipient (facility, person, or company). The form asks the patient to identify who should receive the records under "Release the Requested Information to:" with fields for name, address, phone, and fax.

Aurora Medical Center - Grafton uses system-wide forms from its parent, Advocate Health. Three forms were retrieved for this organization:

- **form-1.pdf** (this document): General ROI authorization (S300503)
- **form-2.pdf**: Identical content to form-1 (same byte size 196,289, same text, same form number S300503 Rev. 11/25) but hosted at a different URL — appears to be a duplicate or alternate link to the same revision.
- **form-3.pdf**: "Patient Request for Health Information" (S88411-EN) — a separate, patient-access-specific form that includes a "☐ Myself" checkbox and prominently references the patient portal (LiveWell).

Form-1 is thus the **general-purpose third-party authorization**, while form-3 is the purpose-built patient access form. A patient seeking their own records would ideally use form-3, not form-1.

---

## 2. FINDABILITY

Retrieval was **easy**. Per the search notes, the Aurora Health Care medical records page (https://www.aurorahealthcare.org/patients-visitors/medical-records) is reachable in approximately 2 clicks from the main website (Home → Patients & Visitors → Medical Records). The page is well-organized and lists multiple forms with download links. Form-1 was also discoverable via web search for `Aurora Health Care "medical records" "release form" authorization PDF`.

The medical records page distinguishes between the authorization form (third-party release) and the patient request form, which helps patients identify the correct document. However, having two different URLs for what appears to be the same form (form-1 vs. form-2) could cause minor confusion about which version is current.

The URL/filename (`authorization-for-release-of-information-wi-il.PDF`) is reasonably descriptive and includes the applicable states (WI/IL).

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable via `pdftotext` — 3,423 characters across 1 page.
- **Fillable fields**: **Zero** (0) interactive form fields despite the form being structured with clear blanks and checkboxes. This is a flat PDF — patients must print and fill by hand, or use PDF annotation tools informally.
- **File size**: 196,289 bytes (~192 KB) for a single-page document. This is somewhat heavy given the content, suggesting embedded graphics or fonts. The metadata shows 9 fonts and 1 embedded image (likely a logo).
- **Scan vs. digital**: This is **not** a scan — it was digitally created with a proper text layer. However, the lack of fillable fields means it doesn't take advantage of digital affordances.
- **PDF version**: Not explicitly reported, but the digital-native construction with 9 fonts suggests a modern PDF.

The form is technically readable by screen readers and searchable, but the absence of any fillable fields is a significant missed opportunity. The form has clear checkbox areas (record types, delivery methods, purpose of release) that could easily have been implemented as interactive fields.

---

## 4. CONTENT DESIGN

**Length**: 1 page. For the amount of content covered (patient info, record types, delivery method, rights statement, signature), fitting everything on a single page is efficient but results in a dense layout.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient Information (name, DOB, address, phone, email)
2. Treatment Facility/Physician and Treatment Dates
3. Mutual exchange checkbox (behavioral health only)
4. Information Requested — organized into four sub-categories: Medical Records, Imaging, Billing, and additional items
5. Release recipient information
6. Purpose of Release
7. Requested Format/Delivery Method
8. Rights statement
9. Expiration
10. Signature block (including minor authorization)

**Clarity**: The language is predominantly clear, though the rights section is dense legal prose. For example: "I understand that information disclosed under this authorization may be subject to re-disclosure and may no longer be protected by federal and state privacy laws." This is necessary but not written at a plain-language reading level.

**Record type options**: Impressively granular. Medical Records includes 14+ specific subcategories (Facility Summary, Discharge Summary, H&P, Consultation Reports, Office/Progress Notes, Operative Reports, Lab Reports, Pathology Reports, Radiology Reports, Immunizations, Sleep Study Reports, Emergency Record, Entire Medical Record, Behavioral Health Treatment Records). Imaging breaks out into 5 categories. Billing offers 4 options. This level of specificity empowers patients to request exactly what they need.

**Visual hierarchy**: The form uses bold text for the "Facility Summary" group and organizes record types into clearly labeled columns. However, cramming all of this onto a single page means the font is small and spacing is tight.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is designed for **third-party release**, not patient access. The "Release the Requested Information to:" section asks for a facility/person/company name and address — it does not include a simple "to myself" option. However, the "Purpose of Release" section does include a "Personal (at my request)" checkbox, which partially addresses patient-initiated requests but still requires filling out the recipient section.

A patient requesting their own records should use **form-3** ("Patient Request for Health Information"), which includes a "☐ Myself" checkbox and promotes the patient portal. The fact that Aurora provides a **separate, dedicated patient access form** is a positive signal, but form-1 itself is not patient-access-oriented.

**Scope options**: Excellent. Patients can select specific record types, date ranges (via "Treatment Dates"), and specific facilities/physicians. The granularity of the record type checkboxes is above average.

**Format/delivery options**: The form offers multiple delivery methods:
- By Mail: Paper Copy, CD
- Electronically: Encrypted Email, Patient Portal
- In Person Pick-up: Paper, CD

The inclusion of **encrypted email** and **patient portal** as electronic delivery options is forward-thinking. The note "(Fees may apply)" is present but fees are not quantified.

**Right of Access language**: The form does **not** reference HIPAA § 164.524 or the patient's right of access. The "Your Rights Regarding This Authorization" section covers revocation rights, the right to inspect the authorization, non-discrimination (treatment/payment not contingent on signing), and re-disclosure risk — but not the affirmative right to access one's own records.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA.

---

## 6. COMPLIANCE

**Expiration**: "This authorization expires one year from the date of my signature unless otherwise written here: ___." A one-year default expiration is standard and reasonable, and the form allows the patient to specify a different period.

**Full release scope**: The form explicitly states: "This is a full release, including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2), genetic information, HIV/AIDS, and other sexually transmitted diseases." This is transparent but notable — it bundles all sensitive categories into a single blanket release rather than allowing patients to opt in/out of sensitive categories individually. For a third-party release form, this could result in over-disclosure.

**No notarization required**: The form requires only the patient's signature (or authorized representative's). No notarization, no witness, no in-person requirement.

**Fee disclosure**: "(Fees may apply)" is stated next to the delivery method section but no fee schedule is provided. This is vague — patients cannot make informed decisions about format/delivery without knowing costs.

**Non-discrimination**: The form correctly states: "Refusing to sign this form will not affect my ability to receive treatment, payment, health plan enrollment, or eligibility for benefits."

**Minor authorization**: Detailed and legally careful language addresses minors who consented to their own treatment, aligned with Wisconsin law.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket sensitive-information release**: The statement "This is a full release, including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2), genetic information, HIV/AIDS, and other sexually transmitted diseases" provides no opt-out mechanism for individual sensitive categories. When used for third-party release, this could lead to disclosure of sensitive information the patient may not intend to share. The 42 CFR Part 2 compliance claim should be verified — Part 2 typically requires *specific* consent for substance use disorder records, and a blanket inclusion may not meet that standard.

### ⚠️ AMBIGUITIES

- **"Fees may apply"** without any fee schedule, range, or reference to where fees are published. Patients cannot evaluate the cost implications of choosing paper vs. CD vs. encrypted email.
- **Mutual exchange checkbox**: "Check here if Information will be mutually exchanged (allows both the sender and recipient(s) to share the information below with each other) this is for Behavioral Health information only." It is unclear why mutual exchange is limited to behavioral health, and the placement at the top of the form before the record-type selection could confuse patients.
- **Duplicate forms**: Form-1 and form-2 are textually identical (same form number S300503, same revision 11/25, same byte count 196,289) but hosted at different URLs. Patients encountering both may wonder which is authoritative.

### ✨ BRIGHT SPOTS

- **Separate patient access form exists**: Aurora provides form-3 ("Patient Request for Health Information") specifically for patients requesting their own records, with a "☐ Myself" option and patient portal reference. This is better practice than forcing patients to use a third-party release form.
- **Granular record-type selection**: The form offers 20+ individually selectable record types across medical, imaging, and billing categories, giving patients fine-grained control over what is released.
- **Multiple delivery methods including encrypted email and patient portal**: Offering electronic delivery options alongside traditional mail and in-person pickup is progressive and patient-friendly.
- **Single page**: Fitting a comprehensive authorization on one page respects patients' time, even if it results in dense layout.
- **Well-organized medical records web page**: The parent system's medical records page lists all available forms (including Spanish versions, revocation forms, and restriction requests) with clear descriptions.
