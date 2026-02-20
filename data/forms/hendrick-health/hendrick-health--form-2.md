# Hendrick Health — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization to Obtain Protected Health Information (PHI)" form branded for **Hendrick Clinic**, the outpatient/clinic arm of the Hendrick Health system. The page title reads "Release of Medical Information" and the Hendrick Clinic logo appears in the upper right. The PDF title bar reveals its provenance: "Microsoft Word - Page 2__05.2022 MASTER-Authorization to Obtain or Release PHI- - Copy.docx," indicating this was exported from a Word document revised in May 2022.

Hendrick Health maintains two separate ROI forms: form-1.pdf covers the hospital entities (Hendrick Medical Center, HMC South, HMC Brownwood) while this form-2.pdf is specifically for Hendrick Clinic. The two forms share nearly identical structure, language, and layout — the main differences are branding (hospital vs. clinic logo), the absence of facility codes (HMC/HMCB/HMCS) and Dates of Service field in the clinic form, and that form-1 includes an email delivery option that this form omits. The clinic form also lacks the pre-filled Hendrick Service Center address that form-1 provides in the "I AUTHORIZE THE FOLLOWING TO DISCLOSE" section.

## 2. FINDABILITY

According to the retrieval notes, both forms were easily discoverable via web search — standard queries for Hendrick Health authorization/release forms surfaced the Medical Records page (https://www.hendrickhealth.org/patients-visitors/medical-records/) which links to both PDFs directly. No portal login, CAPTCHA, or multi-step navigation was required.

The source URL is reasonably descriptive: `hendrickhealth.org/documents/hendrick%20clinic/Hendrick-Clinic-Authorization-to-Obtain-or-Release-PHI.pdf`. The path includes the organization name and document purpose, though the space-encoded directory (`hendrick%20clinic`) is slightly untidy. The filename itself clearly identifies the document type.

Having two separate forms — one for hospital, one for clinic — may confuse patients who aren't sure which entity treated them, but both are co-located on the same Medical Records page with clear descriptions.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. The full text (3,247 characters) is extractable via pdftotext, enabling search, copy-paste, and screen reader access.

**Fillable fields:** Zero. The form has no interactive PDF form fields despite being digitally created (exported from Word). All blanks are underscored lines meant for handwriting. This is a significant missed opportunity since the source is a Word document that could easily have been exported with fillable fields.

**File size:** 83,670 bytes (82 KB) for a single page — reasonable and lightweight.

**Fonts:** 7 embedded fonts (Microsoft Sans Serif, Calibri, Wingdings for checkboxes). All are embedded subsets, ensuring consistent rendering.

**Images:** 1 embedded image (the Hendrick Clinic logo, 230×54 px).

**Digital-first design:** This is not a scan, but it is not truly digital-first either. It was created in Word and exported to a flat PDF. The visual design (checkbox squares rendered as Wingdings characters, underscore lines for fill-in fields) is oriented toward printing and handwriting. The PDF title bar literally reads "Page 2__05.2022 MASTER-Authorization..." suggesting this was originally page 2 of a multi-page Word document, now saved as a standalone PDF.

## 4. CONTENT DESIGN

**Length:** Single page. All content fits on one page, which is commendable for a form of this type — patients can see everything at once without flipping pages.

**Organization:** The form follows a logical top-to-bottom flow: header/authorization statement → patient information → delivery method → record type selection → sensitive record initials → reason for disclosure → effective time period → right to revoke → signature authorization → sender/recipient identification → signatures. This sequencing is reasonable, though the sender/recipient blocks appearing after the legal text rather than near the top is slightly unusual.

**Clarity:** The opening authorization statement is dense: "I hereby authorize _____________ to obtain true and correct copies of the health care information (including any and all individually identifiable health information under HIPPA regulations) identified below pertaining to the history, diagnosis, treatment or prognosis of:" — this is a single run-on sentence spanning three lines of small text. The legal paragraphs at the bottom (EFFECTIVE TIME PERIOD, RIGHT TO REVOKE, SIGNATURE AUTHORIZATION) are packed tightly with small font and minimal paragraph separation.

**Layout:** The form uses a table/grid structure with blue header bars for section titles ("AUTHORIZATION TO OBTAIN PROTECTED HEALTH INFORMATION (PHI)", "PATIENT INFORMATION (please print)", "PLEASE RELEASE THE FOLLOWING INFORMATION", etc.). This provides reasonable visual hierarchy. However, the overall design is extremely dense — fitting this much content onto a single page means text is quite small, particularly in the legal paragraphs. The checkbox area for record types is arranged in a 4-column grid that is hard to scan.

**Font size:** The legal text in the lower portion of the form appears to be approximately 7–8pt, pushing below comfortable readability. The field labels and checkboxes are somewhat larger but still compact.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general-purpose authorization form, not specifically designed for patients requesting their own records. The structure — "I AUTHORIZE THE FOLLOWING TO DISCLOSE" → "WHO CAN RECEIVE AND USE THE PROTECTED HEALTH INFORMATION" — frames the transaction as a disclosure between two parties, which could include a patient requesting records sent to themselves or a third party requesting records. The "Personal Use" checkbox under "REASON FOR DISCLOSURE" is the only nod to patient self-access.

**Scope options:** The form offers good granularity for record type selection with 15 specific categories (History/Physical Exam, Past/Present Medications, Patient Allergies, Operation Reports, Discharge Summary, Diagnostic Test Results, Billing Information, Radiology Reports & Images, Lab Results, Consultation Reports, EKG/Cardiology Reports, Physician's Orders, Progress Notes/Office Visits, Pathology Reports, plus "Other"). An "All health information" option is also available. However, there is no date range field — unlike form-1, this clinic form omits a "Dates of Service" line entirely.

**Delivery options:** Three options listed: Personal Pickup, Mail (with address field), and Fax (with number field). Notably, **email delivery is not offered** on this clinic form, even though form-1 (the hospital version) includes an email checkbox. This is a meaningful gap for digital access.

**Format options:** No mention of electronic delivery formats (CD, USB, patient portal, secure download). No mention of EHI export or bulk data access.

**Right of Access language:** The form does not reference HIPAA § 164.524 (Right of Access). It cites Texas Health & Safety Code § 181.154(c) and 45 C.F.R. § 164.502(a)(1), which relate to permitted disclosures — not patient access rights. There is no plain-language explanation of the patient's right to obtain their own records.

**Sensitive records:** The form appropriately requires separate initials for Mental Health Records, Genetic Information, Drug/Alcohol/Substance Abuse Records, and HIV/AIDS Test Results — consistent with Texas and federal requirements.

## 6. COMPLIANCE

**Expiration:** The EFFECTIVE TIME PERIOD language is reasonable: authorization is valid until death, age of majority, revocation, or an optional specific date. No unreasonably short automatic expiration is imposed.

**Revocation:** Right to revoke is clearly stated, with the standard caveat about prior reliance.

**SSN collection:** The form requests "Last 4 of SSN" — while not a full SSN, collecting even partial Social Security Numbers on a form that may be faxed or mailed raises data minimization concerns. This is not strictly necessary for record identification when combined with name and date of birth.

**No submission instructions:** The form does not specify where or how to submit the completed form (no address, fax number, email, or portal link for submission). Unlike form-1, which pre-fills the Hendrick Service Center address, this clinic form leaves both the "I AUTHORIZE THE FOLLOWING TO DISCLOSE" and "WHO CAN RECEIVE AND USE" sections completely blank. A patient trying to use this form independently would not know where to send it.

**Legal citations:** The form cites Texas Health & Safety Code § 181.154(c) and 45 C.F.R. § 164.502(a)(1), which are real and relevant provisions. The minor consent note references Tex. Fam. Code § 32.003, also appropriate.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No email delivery option on clinic form.** While the companion hospital form (form-1) offers email as a delivery method, this clinic form limits options to Personal Pickup, Mail, and Fax only. This creates an inconsistency within the same health system and eliminates the most convenient digital delivery method for clinic patients.

### ⚠️ AMBIGUITIES

- **No submission instructions.** Unlike form-1 (which pre-fills the Hendrick Service Center address and phone), this form provides no guidance on where or how to submit the completed authorization. Both the discloser and recipient fields are blank. A patient who downloads this form has no way to know where to send it without calling the clinic.
- **No date range field.** The clinic form lacks any "Dates of Service" field (present on form-1), making it impossible for patients to scope their request to a specific time period. Combined with the "All health information" checkbox, this could lead to overbroad or underbroad disclosures.
- **Two-form system without clear guidance.** Patients may not know whether they should use the hospital form or the clinic form. No instructions on either form explain when to use which.

### ❌ ERRORS

- **"HIPPA" typo.** The form text reads "including any and all individually identifiable health information under HIPPA regulations" — misspelling HIPAA as "HIPPA." This same error appears on form-1 as well, suggesting a systemic issue in the master template.
- **Revealing PDF metadata.** The PDF title is "Microsoft Word - Page 2__05.2022 MASTER-Authorization to Obtain or Release PHI- - Copy.docx" — exposing internal document management details (page numbering, "MASTER" designation, "Copy" suffix) and suggesting this was hastily exported. The footer also reads "page 2__05.2022 master-authorization to obtain or release phi- - copy.docx / Revised 05.2022," reinforcing the impression of a carelessly exported document.
