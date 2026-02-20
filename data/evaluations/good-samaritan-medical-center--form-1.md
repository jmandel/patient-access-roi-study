# Evaluation: Good Samaritan Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a facility-specific **"Authorization to Use and Disclose Protected Health Information"** form (EID-2028, catalog date 06/12/2014). It is a 2-page document branded to Good Samaritan Medical Center at "1309 N. Flagler Drive, West Palm Beach, FL 33401." The form is designed as a general-purpose authorization for disclosing PHI to a named recipient — it is **not** a patient-access-specific request form under HIPAA's Right of Access (45 CFR § 164.524).

Good Samaritan Medical Center also participates in a newer, network-wide version of the same form (form-2.pdf, dated 11/17/2020) issued under the Palm Beach Health Network (PBHN) umbrella, which covers all six PBHN facilities. Both forms share the same EID-2028 identifier and nearly identical structure, but form-2 adds an email field, facility selection checkboxes, and an "Original Materials Released" section for pathology blocks/slides. Form-1 is the older, facility-only version that remains published on the Good Samaritan website.

## 2. FINDABILITY

Per the retrieval notes, the form was **easily discoverable** via web search. A search for `"Good Samaritan Medical Center" "authorization" "release" "health information" form PDF` returned a direct link to the PDF on the hospital's website. The parent system's medical records request page (https://www.palmbeachhealthnetwork.com/patients/request-medical-records) also links to the form.

However, actual download was **complicated by Cloudflare bot protection** — direct `curl` requests returned HTML rather than the PDF, requiring browser-based JavaScript `fetch()` as a workaround. The source URL is a long CMS-generated path (`/docs/librariesprovidergoodsam/default-document-library/authorization-to-use-disclose-phi.pdf?sfvrsn=be460533_0`) that is not human-readable but is functional.

The form exists alongside a newer network-wide version (form-2), but there's no clear guidance on the website about which form patients should use or whether the older facility-specific form is still current.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present — the full text (5,746 characters) is extractable, confirming this is not a scanned image.
- **Fillable fields:** Zero. The form has no interactive PDF form fields. All blanks are underscored lines (e.g., `__________________`) meant to be printed and filled by hand.
- **File size:** 35,211 bytes (35 KB) — very small for a 2-page PDF, indicating minimal graphics.
- **Fonts:** 6 fonts embedded.
- **Images:** 1 embedded image (likely a logo).
- **Design origin:** This is a digitally-created PDF (not a scan), but it was designed as a **print-first document**. The lack of fillable fields means patients must print, hand-write, and either mail/fax/scan it back. There is no digital-first workflow.

The form's page footers contain hospital information system merge fields (`DOB: _____/_____/_____`, `AdmitDate_____/_____/____`, `Age ___Gender __ Race______`, `ACCT# ____________________ Room: ____________`) suggesting it was designed to be printed from an internal system where these fields would auto-populate — patients downloading the form online would see these as confusing blank footer fields.

## 4. CONTENT DESIGN

**Length:** 2 pages, which is appropriate for a standard authorization form.

**Organization:** The form follows a logical flow:
1. Patient demographics (name, address, phone, DOB, SSN)
2. Record type checkboxes ("Specify Information to be Disclosed")
3. Recipient information
4. Authorization term options
5. Purpose checkboxes
6. Patient acknowledgment and signature
7. Page 2: Super-confidential information categories with individual authorizations

**Clarity:** The language is moderately legalistic. The acknowledgment paragraphs are dense, multi-sentence blocks in small text. For example: *"I understand that GOOD SAMARITAN MEDICAL CENTER may, directly or indirectly, receive remuneration from a third party in connection with the use or disclosure of my health information."* This is a legally required disclosure but is presented without plain-language explanation.

**Record type granularity:** The form offers 16 specific record type checkboxes (Face Sheet, Discharge Summary, History & Physical, Consultations, Operative Reports, Radiology Reports/Mammo, Anesthesia Records, Pathology, EKG/Stress Test/Holter, Echo, Laboratory, ER, Orders, Progress Notes, Rehab, EEG, Respiratory, Medications, Biopsychosocial Assessment) plus "Other." This is a good level of granularity.

**Super-confidential categories (Page 2):** Lists 11 categories requiring separate authorization: Mental Illness, Developmental Disability, Psychotherapy Notes, HIV/AIDS, Venereal Disease, Abuse of an Adult with a Disability, Sexual Assault, Child Abuse or Neglect, Genetic Testing, Drug/Alcohol TX, and Other. Each requires a separate check and signature line. This section appropriately addresses state and federal requirements for specially protected information.

**Layout concerns:** The form is reasonably organized but visually dense. The footer region on both pages contains hospital information system merge fields that would be blank and confusing for patients filling out the downloaded version.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is structured as a **general authorization to disclose PHI to a named third party**, not as a patient Right of Access request. The "RECIPIENT" section asks for "Name of person(s) to whom GOOD SAMARITAN MEDICAL CENTER may disclose my health information" — a patient requesting their own records would need to name themselves as the recipient, which is awkward but functional. The "PURPOSE" checkboxes include "Personal Use," which is the closest option for a patient self-request.

**No HIPAA Right of Access language:** The form does not reference 45 CFR § 164.524, patient rights to access their own records, or any distinction between patient access requests and third-party disclosures.

**No electronic delivery option:** The form offers only "Mail to" or "Do not mail; records will be picked up." There is no option for electronic delivery, email, portal access, or any digital format. The newer form-2 at least includes an email field in the demographics section, but even there, the delivery options remain mail or pickup.

**No EHI export mention:** No reference to electronic health information export or bulk data access.

**Scope options:** Patients can specify date ranges ("Date of Hospital Visit(s) being requested"), select specific record types via checkboxes, and choose "Other." This provides reasonable granularity for specifying scope.

**Format options:** None specified. The form does not ask patients what format they want records in (paper, CD, electronic).

**SSN required:** The form includes a Social Security Number field, which is not required under HIPAA for identity verification and may deter patients from completing the form.

## 6. COMPLIANCE

**Identity verification:** The internal-use section states: *"The identity of the requestor has been validated either with a government issued picture ID, such as a driver's license or passport, or comparison of signatures documented in the medical records."* This is reasonable and within HIPAA guidelines.

**Revocation rights:** Clearly stated — patients can revoke authorization in writing at any time, with Privacy Office contact information provided (mail, phone, and email at `GSM-PrivacyOfficer@tenethealth.com`).

**Treatment conditioning:** The form includes the statement: *"except, however, if my treatment at GOOD SAMARITAN MEDICAL CENTER is for the sole purpose of creating health information for disclosure to the recipient identified in this Authorization, in which case GOOD SAMARITAN MEDICAL CENTER may refuse to treat me if I do not sign this Authorization."* This is the standard HIPAA-permitted exception (research-related treatment) but is presented without context, which could confuse or alarm patients.

**Remuneration disclosure:** The form includes: *"I understand that GOOD SAMARITAN MEDICAL CENTER may, directly or indirectly, receive remuneration from a third party in connection with the use or disclosure of my health information."* This is legally required when applicable (42 CFR § 164.508(a)(4)) but its presence on a general form—rather than being triggered only when remuneration is involved—may cause unnecessary concern.

**No fee disclosure:** The form does not mention any fees for records copies, which leaves patients unaware of potential costs until after submitting the request.

**Form age:** Dated 06/12/2014 — over 11 years old at time of evaluation. The 21st Century Cures Act and ONC information blocking rules (effective 2021) postdate this form, meaning it cannot reflect current regulatory requirements.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN field on a downloadable form:** The form requests Social Security Number, which is unnecessary for HIPAA-permitted identity verification and creates a privacy/identity theft risk if the completed form is transmitted by mail or fax. HIPAA does not require SSN for patient access requests.
- **Remuneration disclosure on a general-purpose form:** The blanket statement that the hospital "may, directly or indirectly, receive remuneration from a third party in connection with the use or disclosure" of patient information is alarming when presented on a form a patient might use to request their own records. Under HIPAA § 164.508(a)(4), this disclosure is only required when remuneration is actually involved.

### ⚠️ AMBIGUITIES

- **Which form should patients use?** Both form-1 (facility-specific, 2014) and form-2 (network-wide, 2020) are available online for Good Samaritan Medical Center. There is no clear guidance about which is current or preferred.
- **Patient self-access workflow unclear:** Since this is a third-party disclosure form, a patient requesting their own records must awkwardly name themselves as the "RECIPIENT" and check "Personal Use" as the purpose. There is no indication this is the intended workflow for patient access.
- **Hospital system merge fields in footer:** The footer contains fields like `AdmitDate_____/_____/____`, `Age ___Gender __ Race______`, `Room: ____________` that appear designed for internal printing. A patient downloading this form would encounter these unexplained blank fields and not know whether to fill them in.

### ❌ ERRORS

- **Severely outdated form:** The catalog date of 06/12/2014 makes this form over 11 years old. It predates the 21st Century Cures Act (2016), the ONC Information Blocking Rule (2021), and significant HIPAA guidance updates. Publishing this alongside the newer 2020 network form without deprecation notice is confusing.

### ✨ BRIGHT SPOTS

- **Good record-type granularity:** The 16+ specific record type checkboxes give patients meaningful control over what information is disclosed.
- **Super-confidential information handled properly:** Page 2's separate authorization for specially protected categories (mental health, HIV/AIDS, substance abuse, genetic testing, etc.) with individual check-and-sign lines demonstrates compliance with Florida law and 42 CFR Part 2.
- **Multilingual availability (via parent system):** The notes indicate the parent Palm Beach Health Network offers this form in English, Spanish, and Haitian Creole — an important accessibility feature for the West Palm Beach community.
