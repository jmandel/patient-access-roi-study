# Ascension St. Vincent's East — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **"Authorization To Disclose Protected Health Information"** form branded as **Ascension St. Vincent's**, revised February 2022 (form code `66450-4000 Rev. 2/22`). It is a 2-page general ROI authorization form covering both patient-access and third-party release scenarios.

A second form was found for this organization: **form-2.pdf**, a newer **"Authorization for Use or Disclosure of Patient Information Hospital Records"** branded as **UAB St. Vincent's** (dated February 2026). The facility underwent a rebrand/partnership from Ascension to UAB St. Vincent's, making form-1 the **legacy form** that has likely been superseded. However, form-1 remains publicly hosted on the Ascension healthcare.ascension.org domain at the time of retrieval.

The two forms differ substantially: form-2 is cleaner, smaller (140 KB vs. 2.8 MB), lists specific UAB St. Vincent's locations, and adds a checkbox distinguishing personal-use vs. third-party requests. Form-1 predates the rebranding and lacks that explicit distinction.

## 2. FINDABILITY

**Moderate difficulty.** According to retrieval notes, the form was not found through the initial facility-specific search. It required an Alabama-specific search (`Ascension St. Vincent's Alabama medical records request form PDF authorization release`) to locate the direct PDF link on healthcare.ascension.org. The form was not linked from an obvious "Medical Records" or "Patient Resources" page on the facility's website in a straightforward way.

The URL is long but descriptive:
`https://healthcare.ascension.org/-/media/project/ascension/healthcare/legacy/markets/alabama/documents/stvincents-documents/authorization_to_disclose_protected_health_information_feb-2022.pdf`

Notably, the URL path includes the word **"legacy"**, signaling that even Ascension's own CMS treats this as a legacy document. Both forms were directly downloadable without bot-blocking or portal authentication.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable via pdftotext (5,293 characters).
- **Fillable fields**: **Zero.** The form has no interactive PDF form fields despite having clear blanks for patient name, address, dates, checkboxes, etc. Patients must print and hand-write all entries.
- **File size**: **2,918,679 bytes (~2.8 MB)** for a 2-page form — extraordinarily large. By comparison, the replacement form-2 is only 143 KB for the same page count. This suggests embedded raster images or inefficient PDF construction.
- **Font count**: **38 fonts** — an unusually high number for a simple 2-page form, suggesting complex or layered PDF authoring.
- **Embedded images**: 1 embedded image.
- **Digital-first design**: No. While it has a text layer (not a flat scan), the lack of fillable fields, the bloated file size, and the print-oriented layout all indicate this was designed as a paper form that happens to be available as a PDF. The form includes underscores for fill-in blanks (`___________`) rather than interactive text fields.

## 4. CONTENT DESIGN

**Length**: 2 pages — reasonable for an authorization form.

**Organization**: The form follows a logical sequence:
1. Internal-use header (MRN, FIN, dates)
2. TO/FROM facility fields
3. Patient demographics
4. Delivery method selection
5. Record type selection with dates
6. Sensitive information disclosure notice
7. Purpose of disclosure
8. Revocation rights and expiration
9. Signature block
10. Identity verification section (page 2, "For External Use Only")

**Clarity**: The language is moderately legalistic but generally comprehensible. Key clauses are numbered (items 1–6), which aids navigation. However, some sentences are dense — for example, item 5 runs to 5 sentences covering revocation, insurance contest rights, and expiration in a single paragraph.

**Layout**: The form uses checkbox grids for record types with paired DATE columns, which is space-efficient but somewhat cramped. The TO/FROM facility section uses parallel column layout. Font sizes appear adequate based on the text layer extraction quality.

**Readability concerns**: The form starts with "FOR INTERNAL USE ONLY" fields (MRN, FIN, Date Received, Date Completed, Completed By), which may confuse patients who encounter them at the top of the document.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party**: The form is a **general-purpose authorization** — the same form is used whether the patient is requesting records for themselves or authorizing release to a third party. There is no checkbox or branch distinguishing patient-access requests from third-party disclosures. The purpose section includes "Patient / Personal Representative" as one option alongside "Physician Care," "Legal," "Insurance," and "Other," but this is merely a purpose descriptor, not a workflow distinction.

**Scope options**: Good. The form offers **14 specific record type checkboxes** (facesheet, discharge summary, H&P, ED record, consultation, operative report, anesthesia/surgery report, progress notes, physician orders, lab report, X-ray report, fetal monitor strip, entire record, and "Other") with corresponding date fields for each.

**Delivery options**: The form offers three delivery methods:
- Pick up
- U.S. Postal Service / Mail
- Electronically: with a field for email address

**Right of Access language**: Item 6 includes: *"I understand that I may inspect or obtain a copy of the information to be used or disclosed, as provided in CFR 164.524."* This is a direct reference to the HIPAA Right of Access regulation — a positive inclusion.

**Sensitive information notice**: Item 3 explicitly addresses sensitive record types: *"information relating to sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), or human immunodeficiency virus (HIV)...behavioral or mental health services, and treatment for alcohol and drug abuse."* However, the form does not offer a separate opt-in/opt-out for these categories — the notice is informational only, bundled into the general authorization.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or TEFCA-related concepts.

**Social Security Number**: The form requests **Social Security Number** as a demographic field, which is concerning from a privacy and data minimization perspective. SSN is not necessary for a records request.

## 6. COMPLIANCE

**Identity verification**: The "For External Use Only" section on page 2 lists identity verification methods including:
- Social Security Number
- Two utility bills
- **Notarized signature**
- Power of Attorney
- Executor/Adm. Estate
- "ASV knows individual"
- Driver's license
- Work photo badge
- Other photo ID

The inclusion of **notarized signature** as a verification option is notable. While it appears to be one option among many (not a requirement), its presence on the form may lead staff to request it, creating unnecessary barriers for patients.

**Expiration**: Item 5 states: *"Unless otherwise revoked, this authorization will expire on the following date, event, or condition: ___. If I fail to specify an expiration date, event or condition, this authorization will expire in six (6) months."* A 6-month default expiration is standard and reasonable.

**Voluntary nature**: Item 6 states: *"I understand that authorizing the disclosure of this health information is voluntary. I can refuse to sign this authorization. I need not sign this form in order to assure treatment."* This is appropriate non-conditioning language.

**Re-disclosure warning**: Item 6 includes: *"any disclosure information carries with it the potential for an un-authorization re-disclosure and the information may not be protected by Federal Confidentiality Rules."* The phrasing "un-authorization re-disclosure" appears to be a typographical error — likely intended to say "unauthorized re-disclosure."

**Fees**: No fee information is disclosed on the form.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection as a demographic field**: The form includes a "Social Security Number" field in the patient demographics section, not just in the identity verification section. Collecting SSN for a routine records request raises data minimization concerns and exposes patients to identity theft risk if the form is mishandled.
- **Notarized signature as identity verification option**: While presented as one option among several, listing notarization on the form normalizes it as a verification method for medical records requests — a practice that HHS OCR has flagged as an unreasonable barrier when required.

### ⚠️ AMBIGUITIES

- **"FOR INTERNAL USE ONLY" header at top of patient-facing form**: The form begins with internal fields (MRN, FIN, Date Received, Date Completed, Completed By) before reaching the patient-facing content. Patients downloading this form online may be confused about whether these fields apply to them.
- **No distinction between patient-access and third-party requests**: The same form serves both purposes with no workflow branching, which may cause confusion about applicable rights and processes (e.g., HIPAA Right of Access timelines and fee limits only apply to patient-access requests).
- **"un-authorization re-disclosure"**: This appears to be a typo for "unauthorized re-disclosure" in item 6, which could confuse patients reading the legal language carefully.

### ❌ ERRORS

- **Legacy/superseded form still publicly accessible**: The form is hosted on the Ascension domain (in a URL path containing "legacy") despite the facility now operating as UAB St. Vincent's East. Patients searching online may find and submit this outdated form, potentially causing processing delays. The form references "Ascension St. Vincent's" branding that no longer reflects the facility's current identity.
- **Inconsistent form code**: Page 1 shows `66450-4000` while page 2 shows `64450-4000` — the first two digits differ between pages, suggesting a typographical error in the form code.

### ✨ BRIGHT SPOTS

- **CFR 164.524 reference**: The form explicitly cites the HIPAA Right of Access regulation, which is uncommon and helps educate patients about their rights.
- **Electronic delivery option**: The form offers email delivery with a field for the email address, alongside physical pickup and mail options — a meaningful accommodation for patients who want digital copies.
- **Granular record type selection**: The 14-category record type checklist with individual date fields gives patients fine-grained control over their request scope.
