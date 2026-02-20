# Evaluation: Good Samaritan Medical Center — form-2.pdf

**Organization:** Good Samaritan Medical Center (West Palm Beach, FL)
**Document:** form-2.pdf — "Authorization to Use and Disclose Protected Health Information"
**Source URL:** https://www.palmbeachhealthnetwork.com/docs/pbhnbuildlibraries/default-document-library/authorization-to-use-disclose-phi-(eng).pdf?sfvrsn=4ea88cdc_1
**Catalog date:** 11/17/2020 | **EID:** 2028 | **Pages:** 2 | **File size:** 125,979 bytes

---

## 1. DOCUMENT IDENTIFICATION

This is the **Palm Beach Health Network (PBHN) network-wide version** of the Authorization to Use and Disclose Protected Health Information form. It is essentially an updated, multi-facility variant of form-1.pdf (the facility-specific Good Samaritan Medical Center version, dated 06/12/2014). Both share the same EID-2028 identifier and Cat #29 classification, confirming they are successive revisions of the same underlying template.

Key differences from form-1:
- **Scope:** form-2 covers all six PBHN facilities via checkboxes ("Delray Medical Center ☐ Florida Coast Medical Center ☐ Good Samaritan Medical Center ☐ St. Mary's Medical Center ☐ Palm Beach Gardens Medical Center ☐ West Boca Medical Center") rather than being branded solely for Good Samaritan.
- **Additions:** form-2 adds an "Email:" field in the patient demographics section and an "Original Materials Released" section for blocks and slides — neither present in form-1.
- **Removed content:** form-2 omits the remuneration disclosure paragraph that form-1 includes ("I understand that GOOD SAMARITAN MEDICAL CENTER may, directly or indirectly, receive remuneration from a third party in connection with the use or disclosure of my health information.") and omits the Privacy Office contact information (mailing address, phone, email).
- **Redisclosure warning repositioned:** In form-2, the redisclosure warning appears on page 1 immediately after the PURPOSE section, while in form-1 it appeared on page 2.
- **File size:** form-2 is ~126 KB vs. form-1's ~35 KB, with 20 embedded images (likely logos for each facility) vs. 1 in form-1.

This form appears to be the **currently recommended version** for patients at any PBHN facility, based on its newer date and prominent placement on the parent network's medical records request page.

---

## 2. FINDABILITY

**Moderate difficulty.** The retrieval notes document that the form was found via the parent system's medical records page at https://www.palmbeachhealthnetwork.com/patients/request-medical-records. It was not directly linked from Good Samaritan Medical Center's own website — a patient would need to know about the parent network or find the PBHN page through search.

The search process recorded in notes.md shows:
- A web search for `"Good Samaritan Medical Center" "authorization" "release" "health information"` found the facility-specific form-1 directly, but form-2 required navigating to the parent system.
- The PBHN medical records page offers the form in English, Spanish, and Haitian Creole — a useful landing page, but one step removed from the facility a patient actually visited.

The URL is not human-readable (`/docs/pbhnbuildlibraries/default-document-library/authorization-to-use-disclose-phi-(eng).pdf?sfvrsn=4ea88cdc_1`), which is a CMS artifact URL rather than a patient-friendly path. **Cloudflare bot protection** required browser-based workarounds for download, which would not affect a typical browser user but signals that programmatic access is restricted.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and complete. The full document text (3,659 characters on page 1, remainder on page 2; 5,659 total) is extractable via `pdftotext`, confirming this is not a scanned image.

**Fillable fields:** Zero. The form has `"fillable_field_count": 0` and no interactive form fields whatsoever. All blanks are represented as underscores (`__________________`) rendered as static text. This is a **print-and-fill form** that requires printing, handwriting entries, and either scanning/faxing or physically delivering.

**Fonts:** 6 fonts embedded — reasonable for a designed document.

**Embedded images:** 20 images. This is notably high for a 2-page form and likely accounts for the 126 KB file size (compared to form-1's 35 KB with only 1 image). The images are presumably facility logos for each of the six PBHN hospitals.

**Digital-first design:** No. This is clearly designed for paper-based workflows. The form includes merge field placeholders visible in the text (`«PatientNumber»`, `«PatientName»`, `«BirthDate»`, `«AdmitDate»`, `«Age»`, `«Gender»`, `«Race»`, `«Room»-«Bed»`, `«AttendingDoctorName»`, `«MedicalRecordNumber»`) — these are mail-merge fields from a document management/EMR system that print on wristbands or chart labels. Their presence in the downloaded PDF as raw placeholder text (e.g., `ACCT# «PatientNumber»`) suggests this PDF was exported from a template without merge processing, exposing internal infrastructure to patients.

---

## 4. CONTENT DESIGN

**Length:** 2 pages — appropriate for the scope of authorization covered.

**Structure and organization:** The form follows a logical sequence:
1. Facility selection (checkboxes for 6 hospitals)
2. Patient demographics (name, address, phone, SSN, DOB, email, visit dates)
3. Information to disclose (20 checkbox categories)
4. Original materials section (blocks/slides)
5. Recipient information
6. Term of authorization (4 options)
7. Purpose (4 checkbox options)
8. Redisclosure warning
9. Patient rights (refusal/revocation)
10. Signature block
11. (Page 2) Super-confidential information categories with separate authorization
12. Final signature and internal-use identity verification

**Clarity:** The language is moderately dense. Key passages use all-caps entity names ("PALM BEACH HEALTH NETWORK") repeatedly, which reduces readability. The legal paragraphs on rights and revocation are standard healthcare legalese — not plain language, but not unusually complex either. Example: "I understand that once PALM BEACH HEALTH NETWORK discloses my health information to the recipient, PALM BEACH HEALTH NETWORK cannot guarantee that the recipient will not redisclose my health information to a third party."

**Record type granularity:** The form offers 20 specific record type checkboxes plus "Other," which is a reasonably granular set: Face Sheet, Radiology Reports/Mammo, Laboratory, AM Labs Only, EEG, Discharge Summary, Anesthesia Records, ER, Respiratory, History & Physical, Pathology, Orders, Medications, Consultations, EKG/Stress Test/Holter, Progress Notes, Biopsychosocial Assessment, Operative Reports, Echo, Rehab (PT, OT, Speech).

**Layout concerns:** The form packs a significant amount of content onto two pages. The checkbox grid for record types is tightly arranged. The merge-field sidebar on both pages (`ACCT# «PatientNumber»`, `«PatientName»`, etc.) consumes right-margin space and is confusing for patients downloading the form from the web, since these fields are meaningless outside the hospital's internal printing system.

**Font size:** Based on the text density and 2-page constraint, fonts appear to be in the 8-10pt range for body text, which is at the lower end of comfortable readability.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general authorization form** that serves both patient self-access and third-party release purposes. The PURPOSE section includes "Personal Use" as a checkbox option alongside "Continuity of Care," "Patient Transfer," and "Other" — so patients requesting their own records would check "Personal Use," but the form is clearly designed primarily for disclosures to third parties. The RECIPIENT field asks "Name of person(s) to whom PALM BEACH HEALTH NETWORK may disclose my health information" — a patient requesting records for themselves must fill this in with their own name, which is unintuitive.

**Delivery options:** The form offers two delivery methods:
- "Mail to:" (with instruction to print name and address "or Email Address, if Preferred")
- "Do Not Mail; records will be picked up by:"

The parenthetical mention of email delivery is a positive addition over form-1, but it is buried in small text as an afterthought to the mailing address field. There is no dedicated checkbox or field for electronic delivery. No mention of patient portal access, secure download, or CD/USB options.

**Date range:** Patients can specify "Date of Hospital Visit(s) being requested" but cannot request records across a date range — only specific visit dates.

**Right of Access language:** The form does not reference HIPAA § 164.524 or explicitly mention the patient's right of access. It frames the transaction entirely as an "authorization to use and disclose" rather than as an exercise of the patient's right to obtain their own records.

**EHI Export:** No mention of electronic health information export, bulk data, or any modern data portability concepts.

**Super-confidential categories:** Page 2 requires separate check-and-sign authorization for 11 categories of sensitive information: Mental Illness, Developmental Disability, Psychotherapy Notes, HIV/AIDS Testing or Treatments, Venereal Disease, Abuse of an Adult with a Disability, Sexual Assault, Child Abuse or Neglect, Genetic Testing, Drug/Alcohol TX, and Other. This is driven by Florida state law and federal regulations (42 CFR Part 2 for substance abuse) and is legally appropriate, though it adds complexity for patients seeking complete records.

---

## 6. COMPLIANCE

**Identity verification:** The "For Internal Use Only" section states: "The identity of the requestor has been validated either with a government issued picture ID, such as a driver's license or passport, or comparison of signatures documented in the medical records." This is reasonable for in-person requests but does not explain the verification process for mailed or emailed submissions.

**SSN collection:** The form requests "Social Security #:" as a patient identifier. While not prohibited, collecting full SSNs on paper forms raises data security concerns — especially for forms that may be faxed, mailed, or emailed. Many modern forms have moved to last-4-digits or omit SSN entirely in favor of MRN/DOB combinations.

**No fee disclosure:** The form does not mention any fees for records copies. This is neutral — it neither imposes unreasonable fees nor transparently communicates that patient access copies are limited to a reasonable, cost-based fee under HIPAA.

**Revocation rights:** Clearly stated. Patients are informed they "may refuse to sign or may revoke (at any time) this Authorization for any reason" and that this "will not affect the commencement, continuation or quality of my treatment." The exception for research-purpose treatment is appropriately noted.

**Remuneration disclosure:** Unlike form-1, form-2 **omits** the disclosure that the facility "may, directly or indirectly, receive remuneration from a third party in connection with the use or disclosure of my health information." This omission is notable — if remuneration is involved (e.g., through Datavant's ROI processing), HIPAA requires disclosure.

**Privacy Office contact:** form-2 states patients should send revocation to "PALM BEACH HEALTH NETWORK's Privacy Office at the address listed below" — but **no address is actually listed**. form-1 included the specific address (1309 N. Flagler Dr., West Palm Beach, FL 33401), phone (561.655.5511), and email (GSM-PrivacyOfficer@tenethealth.com); form-2 removed this information without replacing it. A patient reading form-2 would not know where to send a revocation.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Missing Privacy Office contact information.** The form instructs patients to send written revocations to "PALM BEACH HEALTH NETWORK's Privacy Office at the address listed below," but no address, phone number, or email appears anywhere on form-2. This makes it effectively impossible for a patient to exercise their right to revoke authorization using only the information on this form.

- **Missing remuneration disclosure.** Form-1 (the older facility-specific version) included a statement that the facility may receive remuneration from third-party use/disclosure. Form-2 removes this disclosure entirely. If remuneration occurs — and the involvement of Datavant (a commercial ROI vendor) suggests it may — this omission may violate HIPAA's authorization requirements under 45 CFR § 164.508(a)(4).

### ⚠️ AMBIGUITIES

- **"Personal Use" purpose is unclear in context.** The form frames the entire transaction as a third-party disclosure ("Name of person(s) to whom PALM BEACH HEALTH NETWORK may disclose my health information"). A patient requesting their own records must awkwardly designate themselves as the "recipient" of their own information. It's ambiguous whether this form is even intended for patient self-access or only for authorizing disclosures to others.

- **Email delivery is mentioned but not formalized.** The instruction "Please Print Name and Address or Email Address, if Preferred" buries the electronic option within a mailing address field. It's unclear whether the facility would actually email records based on this instruction, or whether additional steps would be required.

### ❌ ERRORS

- **Exposed merge-field placeholders.** Both pages display raw mail-merge variables in a sidebar: `ACCT# «PatientNumber»`, `«PatientName»`, `«BirthDate»`, `«AdmitDate»`, `«Age» «Gender»`, `«Race»`, `Room: «Room»-«Bed»`, `«AttendingDoctorName»`, `MR# «MedicalRecordNumber»`. These are internal template markers that should not be visible to patients. They are confusing and unprofessional in a patient-facing download.

- **Spurious text artifact "3RF"** appears near the top of the extracted text, immediately after the account number fields. This appears to be a garbled label or OCR/export artifact that has no meaning to the patient.

- **"address listed below" references nothing.** As noted in the compliance section, the revocation paragraph directs patients to an address that does not exist on this form — a broken internal reference.

### ✨ BRIGHT SPOTS

- **Multilingual availability.** The parent PBHN medical records page offers this form in English, Spanish, and Haitian Creole — serving the diverse linguistic demographics of the Palm Beach area.

- **Granular record type selection.** The 20+ checkbox categories for record types give patients meaningful control over what is disclosed, rather than an all-or-nothing approach.

- **Flexible authorization term.** Four term options (specific date, until fulfilled, until a specific event, until withdrawn in writing) give patients appropriate control over the duration of their authorization.
