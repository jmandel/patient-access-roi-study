# Evaluation: Aurora Medical Center - Grafton — form-3.pdf

**Organization**: Aurora Medical Center - Grafton (Grafton, WI)
**Parent System**: Advocate Health (formerly Advocate Aurora Health)
**Document**: Patient Request for Health Information (S88411-EN, Rev. 11/25)
**Source URL**: `https://www.aurorahealthcare.org/-/media/Project/Health-System-Enterprise/AuroraHealthCareOrg/aurorahealthcare/documents/patients-visitors/medical-records/patient-request-for-health-information-s88411en.PDF`

---

## 1. DOCUMENT IDENTIFICATION

Form-3 is titled **"Patient Request for Health Information"** with a subtitle "(Authorization to Release Protected Health Information)." This is the **patient-access-specific form** — designed for patients requesting their own records, distinct from the general third-party authorization forms (form-1 and form-2). The form identifier is S88411-EN, revised 11/25.

Aurora Medical Center - Grafton uses system-wide forms from Advocate Health rather than facility-specific forms. Three forms were retrieved for this organization:
- **Form-1 and Form-2**: Both titled "Authorization to Release Protected Health Information" (S300503, Rev. 11/25) — general third-party release forms. These two files are identical in content and file size (196,289 bytes) but hosted at different URLs, likely a versioning artifact.
- **Form-3 (this document)**: The patient-specific request form, shorter and simpler, focused on the patient requesting their own information.

The existence of a dedicated patient-access form separate from the third-party release form is a significant positive — many organizations force patients to use a third-party release form even when requesting their own records.

---

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, Aurora Health Care maintains a well-organized medical records page at `https://www.aurorahealthcare.org/patients-visitors/medical-records`, reachable in approximately 2 clicks from the main website (Home > Patients & Visitors > Medical Records). The page clearly lists all available forms with download links, including this patient request form, the third-party authorization form, Spanish versions, and supplemental forms (restriction requests, accounting of disclosures, revocation).

The form also appeared in web search results. The URL is long but descriptive — it includes the path segment `patient-request-for-health-information`, making it identifiable from the URL alone. The medical records page additionally links to instructions for completing each form and lists multiple submission methods (email, fax, mail, in-person), reducing the need for patients to search further.

---

## 3. TECHNICAL ACCESSIBILITY

- **Format**: 1-page PDF, 164,638 bytes (~161 KB). Reasonable file size for a single-page form.
- **Text layer**: Present — full text is extractable (2,438 characters). Not an image-only scan.
- **Fillable fields**: **Zero**. Despite being a digitally-generated PDF (not a scan), the form has no interactive form fields. Patients must print it and fill it out by hand, or use a PDF annotation tool.
- **Fonts**: 8 fonts embedded, indicating designed typography rather than a basic scan.
- **Embedded images**: 0.
- **Digital-first design**: Partially. The document is clearly digitally authored (clean text layer, multiple fonts, structured layout) but was designed as a **print-and-fill form**, not a fill-on-screen form. The lack of fillable fields is a significant missed opportunity given that the PDF is otherwise well-produced.

The form includes checkbox characters (¨) rendered as text rather than interactive checkboxes, confirming it was designed for print use. The `\u0007` (bell) characters appearing before some imaging options suggest minor encoding artifacts in the text extraction, though these likely render as bullet or checkbox markers in the visual PDF.

---

## 4. CONTENT DESIGN

**Length**: One page. Concise and proportionate to the task — the form collects patient identity, specifies what records are requested, and captures a signature. No unnecessary padding.

**Organization**: The form follows a logical flow:
1. Patient portal callout (header)
2. Patient demographics (name, DOB, address, phone, email)
3. Treatment facility/physician and dates
4. Information requested — organized into three clear categories:
   - **Medical Records**: 13 checkbox options (Facility Summary, Discharge Summary, Pathology Reports, H&P, Radiology Reports, Consultation Reports, Immunizations, Office/Progress Notes, Sleep Study Reports, Emergency Record, Entire Medical Record, Operative Reports, Other)
   - **Imaging**: 5 options (Radiology, Cardiology, Neurology, Fetal Ultrasound, Other), with note "(requires CD format)"
   - **Billing**: 4 options (Itemized Bills, UB04 Form, CMS 1500 Form, Other)
   - Plus a standalone **Laboratory Reports** checkbox
5. Recipient (Myself or Other, with address fields)
6. Delivery method (Paper by mail, Encrypted Email, CD, Patient Portal, In Person Pick-up)
7. Sensitive information acknowledgment
8. Signature (patient or legal representative)
9. Minor authorization section

**Clarity**: Language is reasonably plain. The form avoids dense legalese — the sensitive information acknowledgment ("I understand the information to be disclosed may include information regarding genetic testing, genetic services and family medical history, mental health/developmental disabilities, Substance Use Disorder, HIV Test results and AIDS/AIDS-related illness") is straightforward and avoids unnecessarily alarming language.

**Layout**: Fitting all of this on one page means the form is likely dense, though the digital generation (vs. scan) suggests reasonable formatting. The checkbox options are well-categorized with clear headers. The "(One Patient Per Form)" instruction is prominently placed.

**Readability**: With 8 fonts used across a single page, the form employs typographic hierarchy (likely bold headers, different sizes for sections vs. fields). The bold items under "Facility Summary (Includes all items in bold)" use formatting itself to convey the relationship between the summary option and its components.

---

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is **explicitly designed for patient access**. The title "Patient Request for Health Information" and the "Send my requested information to: Myself" option make its purpose unambiguous. This is a meaningful distinction from the third-party authorization form (form-1/form-2).

**Patient portal callout**: The form opens with: *"Did you know you can request and access your medical records online through your patient portal? Visit: https://livewell.aah.org."* This proactively directs patients to a potentially faster digital channel before they fill out a paper form.

**Scope options**: Excellent granularity. Patients can select from 13+ medical record types, 5 imaging categories, and 4 billing document types, plus "Entire Medical Record" as an option. Treatment dates allow narrowing the time range.

**Format/delivery options**: Four delivery methods are offered:
- Paper Copy (by mail)
- Encrypted Email
- CD
- Patient Portal
- In Person Pick-up (paper or CD)

This is an unusually strong set of delivery options, including two electronic methods (encrypted email and patient portal).

**Right of Access language**: The form does **not** cite HIPAA § 164.524 or explicitly reference the patient's right of access. There is no "Your Rights" section on this form — unlike form-1/form-2, which include a paragraph on rights regarding the authorization. The form also does not mention response timeframes.

**EHI Export awareness**: No mention of electronic health information (EHI) export, FHIR, or bulk data access.

---

## 6. COMPLIANCE

**No notarization required**: The form requires only a signature.

**No in-person-only restriction**: Multiple submission and delivery methods are available.

**Fees**: The form states "(Fees may apply)" next to the delivery method section but does not specify amounts or reference fee limits under HIPAA. This vagueness could create uncertainty for patients.

**Expiration**: Unlike the third-party authorization form (form-1/form-2), which states "This authorization expires one year from the date of my signature unless otherwise written here," form-3 has **no expiration clause**. This is appropriate for a patient access request, which is a one-time action rather than an ongoing authorization.

**No purpose of release required**: The form does not ask patients to state a purpose for requesting their own records, which is correct — HIPAA does not require patients to justify access requests.

**Sensitive information disclosure**: The form includes an acknowledgment that disclosed records "may include information regarding genetic testing, genetic services and family medical history, mental health/developmental disabilities, Substance Use Disorder, HIV Test results and AIDS/AIDS-related illness." This is a standard Wisconsin-compliant notice, not a barrier.

**Legal representative provisions**: Appropriate accommodations for patients who lack legal capacity and for minors, with clear guidance on when a minor may sign independently (pregnancy, STDs, outpatient behavioral health, substance use treatment).

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Dedicated patient-access form**: Having a separate "Patient Request for Health Information" form — distinct from the third-party authorization — is a best practice that many organizations fail to implement. It removes confusing fields (purpose of release, recipient authorization language) that don't apply when patients request their own records.
- **Patient portal callout at the top**: The opening line directs patients to `https://livewell.aah.org` for online access before they even start filling out the paper form. This is a genuinely helpful, patient-first design choice.
- **Comprehensive delivery options**: Offering encrypted email and patient portal alongside traditional mail, CD, and in-person pickup gives patients meaningful choice — including two fully electronic options.
- **Granular record selection**: 22+ checkbox options across medical records, imaging, and billing let patients request exactly what they need, including an "Entire Medical Record" catch-all.
- **Spanish version available**: The medical records page links to a Spanish translation of this form, expanding accessibility.
- **No purpose-of-release requirement**: Correctly omits the "purpose" field that appears on the third-party form, reflecting that patients need not justify requests for their own records.

### ⚠️ AMBIGUITIES

- **"(Fees may apply)"**: This is the only mention of fees, with no specifics about amounts, fee schedules, or HIPAA's cost-based fee limitation for patient access requests. A patient reading this has no way to estimate costs before submitting.
- **Laboratory Reports checkbox placement**: The "Laboratory Reports" checkbox appears outside the three main categories (Medical Records, Imaging, Billing) in the extracted text, which may indicate unclear visual grouping on the form — or it may simply be positioned at the boundary of the Medical Records section. Its placement could confuse patients about whether it's included in the "Facility Summary" or "Entire Medical Record" options.

### ❌ ERRORS

- **No fillable fields despite digital-native PDF**: The form is digitally authored with 8 fonts and clean layout, yet has zero interactive form fields. This is a production oversight — adding fillable fields would be trivial for the design team and would significantly improve usability for patients filling it out on a computer or mobile device.
- **Text encoding artifacts**: Some checkbox items show `\u0007` (bell character) prefixes in extracted text (e.g., before "Radiology Images," "Cardiology Images"), suggesting minor encoding issues in the PDF's text layer. These likely render correctly visually but indicate imperfect PDF construction.
