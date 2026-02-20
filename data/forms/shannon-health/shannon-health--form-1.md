# Shannon Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document type:** Authorization for Release of Information (ROI) form, English version. Titled "AUTHORIZATION FOR RELEASE OF INFORMATION." This is Shannon Health's official, current ROI form (revised 06/2024, filename `ROI-Form-2025-English.pdf`).

**Relationship to other documents:** Shannon Health provides two forms: form-1.pdf (English) and form-2.pdf (Spanish). They are structurally identical — same layout, same fields, same 2-page format, same revision date. The Spanish version is a direct translation. This is the only ROI form type offered; there is no separate patient-access-specific form versus third-party release form.

## 2. FINDABILITY

**Retrieval path:** The form is accessible via the website navigation: **Patients & Visitors → Request Medical Records** (2 clicks from homepage). The landing page at `https://www.shannonhealth.com/patients-visitors/request-medical-records/` clearly labels the form and links directly to downloadable PDFs for both languages.

**URL/filename:** The URL `https://www.shannonhealth.com/documents/ROI-Form-2025-English.pdf` is descriptive and includes the year, making it clear this is the current version. However, the notes indicate that older URLs (e.g., `/documents/medical-record-authorization.pdf`) now return 404 errors, meaning anyone who bookmarked or linked to the previous version will encounter a broken link.

**Search findability:** Web searches for Shannon Health ROI/authorization forms returned outdated URLs that 404'd. The correct form was only reliably found by navigating the website directly. This is a minor friction point — the form itself is easy to find on-site, but search engine results may lag behind URL changes.

**Overall:** Good findability — 2 clicks, clearly labeled, prominently placed. The URL naming convention (year-stamped) is a good practice but creates link rot for prior versions.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. Full text is extractable via `pdftotext` — 4,748 characters across 2 pages. This is not a scanned image.

**Fillable fields:** Zero. The form has `fillable_field_count: 0`. All blanks are represented as underscores (`___________`) in the text layer. Patients must print and hand-fill or use a PDF annotation tool. This is a significant accessibility gap for a 2025-dated form.

**File format:** 115,825 bytes (≈113 KB) for 2 pages with 2 embedded images (likely the Shannon Health logo and possibly a checkbox graphic) and 2 fonts. Reasonably sized. The form appears to be a digitally-created PDF (not a scan), given the clean text layer and low image count.

**Digital-first design:** Mixed. The text layer and clean layout suggest it was created digitally (likely from Word or similar), but the absence of any fillable fields means it functions as a print-first document. The instruction "MAKE A PHOTOCOPY OF THIS SIGNED AUTHORIZATION BEFORE SENDING" reinforces the print-and-mail paradigm, though email submission is also offered.

## 4. CONTENT DESIGN

**Length:** 2 pages — proportionate for the information collected. Page 1 covers patient identification, recipient, purpose, record types, and format. Page 2 covers legal disclosures (expiration, revocation, re-disclosure, fees), signature block, and return instructions.

**Clarity:** The form uses reasonably clear language. Section headers like "Authorization and Purpose" and "Specific Description of Information to be Used or Disclosed" are functional if not plain-language. The legal sections on page 2 are denser but still comprehensible. The note "(Please note this section CAN NOT be used to release Psychotherapy Notes)" is a helpful clarification.

**Organization:** Logically ordered — patient info → recipient → purpose → record types → substance use disorder options → format → legal terms → signature → return instructions. The flow is intuitive.

**Record type granularity:** Offers 15 specific record type checkboxes: Physician Office Visits, Operation Reports, Discharge Instructions, History/Physical Exam, Lab Results, Discharge Summary, Shot Record, Pathology Reports, Consultation Reports, Radiology Images, Radiology Reports, ER Report, After Visit Summary, Entire Record. This gives patients good control over scope.

**Date range:** Includes a date range field: "Dates of treatment (date range) from: ____________to ______________" — allowing patients to specify a time window.

**Substance use disorder records:** The form handles 42 CFR Part 2 records thoughtfully with three clear options: include all SUD records, exclude all SUD records, or select specific records only. This is well-structured.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form serves both purposes. It includes "Self" as the first option under the recipient field, acknowledging patient access. However, it is fundamentally a general-purpose release form — the structure assumes a third-party recipient (with fields for recipient name, address, phone, fax, relationship). The "Self" checkbox adapts the form for patient access but doesn't streamline the experience for that use case.

**Purpose options:** Includes "Personal Use" among the purpose checkboxes, which is the appropriate selection for patient access requests. Other options (Continuing Medical Care, Legal Purposes, Military, Social Security Disability, School, Insurance) are third-party oriented.

**Format/delivery options:** The form offers six delivery options: Paper, CD, My Chart, Pick Up, Mail, and "Email (Encrypted through ShareFile) to the email address above." This is notably comprehensive — offering both electronic portal access (MyChart) and encrypted email delivery is above average.

**Right of Access language:** The form states: "I understand that Shannon may not condition treatment, payment, enrollment, or eligibility for benefits (including financial assistance) on my provision of this authorization." This is an important HIPAA protection disclosed to the patient. However, the form does not explicitly cite HIPAA § 164.524 or use the phrase "Right of Access."

**EHI Export awareness:** No mention of electronic health information export, bulk data, or TEFCA/interoperability standards.

**Submission options:** The form can be returned via email (`ROIRequests@shannonhealth.org`, listed as "Preferred Method"), mailed to 120 E. Harris Avenue, or delivered in person to 3555 Knickerbocker Road. Email as preferred method is a patient-friendly choice.

## 6. COMPLIANCE

**Fees:** The form states: "I understand that there may be a fee charged for the copying of the requested information. I have been notified of this policy and agree to pay accordingly." This is vague — no fee schedule is provided, and the patient is asked to agree to pay an undisclosed amount. Under HIPAA, fees for patient access copies must be reasonable and cost-based, and many states (including Texas) have specific fee caps. The lack of specificity here could be a concern.

**Expiration:** "This authorization will expire one year from the date of signature for the recipient and date range listed above." One year is a standard and reasonable expiration period.

**Right to revoke:** Clearly stated — patient can revoke at any time with written notice. Standard and appropriate.

**Re-disclosure warning:** Includes standard re-disclosure language noting that once disclosed, HIPAA may no longer protect the information. This is a routine and appropriate disclosure.

**No notarization requirement.** No witness requirement. No in-person-only submission requirement. Email submission is explicitly offered and preferred.

**Non-conditioning statement:** The form explicitly states Shannon cannot condition treatment, payment, enrollment, or benefits eligibility on the patient signing the authorization. This is an important patient protection that many forms omit.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Bilingual availability:** Offering both English and Spanish versions of the identical form is a meaningful accessibility practice, especially appropriate for San Angelo, TX (≈45% Hispanic population).
- **Email as "Preferred Method":** Listing email submission as the preferred return method — ahead of mail or in-person — signals a modern, patient-friendly approach. The dedicated `ROIRequests@shannonhealth.org` address is clear and professional.
- **Encrypted email delivery option:** Offering "Email (Encrypted through ShareFile)" as a delivery format shows awareness of security concerns while still providing electronic access. Combined with MyChart as another option, patients have multiple electronic delivery paths.
- **Non-conditioning disclosure:** Explicitly telling patients that Shannon cannot condition treatment or benefits on signing the authorization is an important HIPAA protection that many forms fail to include.
- **Substance use disorder handling:** The three-option approach to SUD records (include all, exclude all, or select specific) is well-designed and gives patients clear control over sensitive information.

### ⚠️ AMBIGUITIES

- **Fee disclosure is vague:** The statement "there may be a fee charged" with "I agree to pay accordingly" asks the patient to consent to unknown costs. No fee schedule, estimate, or reference to applicable state/federal fee limits is provided. A patient has no way to know what they're agreeing to.
- **"Self" option underspecified:** When "Self" is checked as the recipient, the rest of the recipient block (Address, Contact Name, Phone, Fax, Relationship) becomes ambiguous — should the patient fill in their own address again, or leave it blank? The form doesn't clarify.

### ❌ ERRORS

- **No fillable fields in a 2025-edition form:** Despite being labeled `ROI-Form-2025-English.pdf` and revised 06/2024, the form has zero interactive form fields. For a digitally-created PDF in 2025, this is a missed opportunity that forces patients to print, hand-fill, and scan/photograph the form.
- **Outdated URLs cause 404s:** Per the retrieval notes, previously published URLs for this form now return 404 errors. No redirects are in place, meaning any external links to the prior version are broken.
