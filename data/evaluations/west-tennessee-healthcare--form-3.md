# West Tennessee Healthcare — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3 is titled **"REQUEST FOR ACCESS TO PROTECTED HEALTH INFORMATION"** with the subtitle: *"(To be used when patient wants to access their own medical record or allow a personal representative to do so.)"* This is a dedicated patient access request form — the most relevant document for HIPAA Right of Access purposes among the three forms found for this organization.

West Tennessee Healthcare publishes three distinct forms:
- **form-1.pdf** — "MEDICAL RELEASE AUTHORIZATION" — an older (2019) general release form specific to West Tennessee Medical Group Clinics, 1 page, no fillable fields.
- **form-2.pdf** — "AUTHORIZATION FOR RELEASE OF PROTECTED HEALTH INFORMATION" — a third-party release authorization form (2020), 1 page, no fillable fields.
- **form-3.pdf** — This document — a patient access request form (2020), 2 pages, no fillable fields.

The organization appropriately distinguishes between patient access (form-3, using "request" language) and third-party release (form-2, using "authorization" language). This is a meaningful structural distinction that many organizations fail to make.

Source URL: `https://www.wth.org/wp-content/uploads/2020/05/ACCESS-REQUEST-2020.pdf`

## 2. FINDABILITY

The form was **easy to locate**. Per retrieval notes, the first web search for `West Tennessee Healthcare "authorization" "release" "health information" medical records form` immediately returned direct PDF links and the medical records page URL. The forms are linked from a clearly labeled page at `https://www.wth.org/request-medical-records/`. The page also offers Spanish-language versions of forms 2 and 3 and links to an online request portal via ScanSTAT.

The URL path (`/wp-content/uploads/2020/05/ACCESS-REQUEST-2020.pdf`) is somewhat descriptive — the filename `ACCESS-REQUEST-2020` makes it clear this is an access request form, though the WordPress upload path is generic. The medical records page itself provides context explaining what each form is for.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (3,322 characters). Not an image-only scan.
- **Fillable fields**: Zero. Despite being a digitally-authored document (4 fonts, no embedded images, clean text layer), the PDF has no interactive form fields. Patients must print and fill by hand or use PDF markup tools.
- **File size**: 22,991 bytes (≈23 KB) — appropriately small for a 2-page text document with no images.
- **Page count**: 2 pages.
- **Digital-first design**: No. While the document was clearly created digitally (not a scan), it is designed as a print-and-fill form with blank lines for handwritten entries (e.g., `"Facsimile No:___________________________"`, `"Other:___________________________________________________________________________________________"`). The initials-based record type selection is inherently a pen-and-paper interaction.

The lack of fillable fields is a significant missed opportunity. The form structure — with checkboxes, blank fields, and initial lines — maps directly to interactive PDF form elements. An online submission option exists via ScanSTAT but is separate from this PDF.

## 4. CONTENT DESIGN

**Length and proportionality**: At 2 pages and ~3,300 characters, the form is concise. The first page covers patient identification, recipient information, delivery method, and record scope. The second page (implied by the page count, since the extracted text runs continuously) contains the legal statements and signature lines. The length is proportionate to the content.

**Organization**: The form follows a logical flow:
1. Patient identification (name, DOB, SSN last 4, driver's license, email)
2. Release source and destination
3. Method of disclosure (Paper / Fax / CD-DVD / Portal / Email)
4. Description of information (dates, place of treatment, record types)
5. "I understand that" legal statements (5 numbered items)
6. Signature block

**Clarity**: The patient-facing sections (identification, delivery method, record selection) use reasonably plain language. The legal "I understand that" section is denser but structured as numbered statements, which aids readability. The form does not explain what each record type means (e.g., "Pertinent Summary," "All Dictated Reports"), which could confuse patients unfamiliar with clinical documentation categories.

**Record type selection**: Patients choose from 15 specific record types by initialing beside each: All Dictated Reports, Lab, History & Physical, Radiology Reports, Pertinent Summary, Discharge Summary, Pathology Reports, ER Record, Consultation, Anesthesia Record, Billing Record, Operative/Procedure Report, Entire Chart, Photographs/Images, and Other. This granularity is useful but may overwhelm patients who simply want their complete record.

**Layout**: Without fillable fields, the form relies on underscored blank lines and checkbox-style labels. The text is well-spaced based on the extracted content structure, though the email disclosure options (encrypted vs. unencrypted) are somewhat cramped with instructions inline.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This is explicitly a patient access form, not a general third-party release — a strong positive. The subtitle clearly states its purpose: *"To be used when patient wants to access their own medical record or allow a personal representative to do so."*

**Delivery method options**: The form offers five delivery methods:
- Paper
- Facsimile
- Password Protected CD or DVD
- Portal (*"If choosing portal, please proceed to signature line. No other action needed."*)
- Email (with choice of Secure/Encrypted or Unsecure/Unencrypted)

The portal option is a notable inclusion, and the streamlined instruction ("proceed to signature line") reduces friction for patients who already use the portal. The email option with explicit encrypted/unencrypted choice and risk acknowledgment is well-handled.

**Scope options**: Patients can specify dates of treatment, place of treatment (Outpatient/Inpatient/Emergency Room/Other), and specific record types. This is granular enough for targeted requests.

**Right of Access language**: The form does **not** reference HIPAA § 164.524, patient rights, or the right of access specifically. There is no mention of response timeframes, fee limits, or the patient's right to receive records in their requested format.

**EHI export**: No mention of electronic health information export, bulk data, or USCDI.

**Identity verification**: The form asks for SSN (last 4 digits) and Driver's License number. The driver's license is noted as *"only required if you are NOT requesting records in person"* — implying non-in-person requests face an additional identification burden.

## 6. COMPLIANCE

**Expiration**: Statement 5 reads: *"My signed (written) request will expire in ninety (90) days unless I provide an alternate expiration date or event."* A 90-day default expiration on a patient access **request** is conceptually problematic. Unlike an authorization (which permits ongoing disclosure to a third party), a patient access request is a one-time action — the patient asks for records, the facility produces them. Applying an expiration period to a request conflates it with an authorization. The language appears to have been carried over from the third-party release form (form-2 has identical language).

**Liability waiver**: Statement 4 states: *"The facility is hereby released from any liability and the undersigned will hold the facility harmless for complying with this request."* Requiring patients to waive liability as a condition of accessing their own records is a concerning barrier. HIPAA does not permit covered entities to require patients to sign a liability release to exercise their Right of Access.

**No fee disclosure**: The form does not mention fees or costs. While this avoids the problem of quoting excessive fees, it also means patients cannot know in advance what they may be charged.

**No conditioning statement**: Unlike form-2, which includes a statement that treatment will not be conditioned on signing the authorization (statement 5 in form-2), form-3 omits this statement entirely. This omission is notable since HIPAA § 164.524 prohibits denying access as a condition of treatment.

**SSN collection**: Requesting SSN (even last 4 digits) for a patient access request goes beyond what HIPAA requires for identity verification. The form does note it is only the last 4 digits.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Separate patient access form**: West Tennessee Healthcare maintains a distinct form for patient access versus third-party release — a practice that reduces confusion and aligns with the different HIPAA provisions governing each scenario.
- **Portal option with streamlined instructions**: The portal delivery option with *"If choosing portal, please proceed to signature line. No other action needed"* minimizes friction for digitally-engaged patients.
- **Email encryption choice with risk disclosure**: Offering both encrypted and unencrypted email with a clear risk acknowledgment (*"there is some level of risk that the information could be read or otherwise accessed by a third party while in transit"*) respects patient autonomy while ensuring informed consent — consistent with HHS guidance on patient-directed transmission.
- **Spanish-language versions available**: Per retrieval notes, the medical records page links to Spanish versions of both the access request and authorization forms.

### 🚩 RED FLAGS
- **Liability waiver in a patient access form**: Statement 4 — *"The facility is hereby released from any liability and the undersigned will hold the facility harmless for complying with this request"* — asks patients to waive their right to hold the facility accountable as a precondition of accessing their own records. This is inappropriate for a Right of Access request and could be seen as an impermissible condition under HIPAA.
- **90-day expiration applied to an access request**: Applying an authorization-style expiration to a one-time access request conflates two distinct HIPAA concepts. A patient's request for their records should be fulfilled; it does not need to "expire."

### ⚠️ AMBIGUITIES
- **"Request" vs. "authorization" language mixing**: The title uses "REQUEST FOR ACCESS" (correct for patient access under § 164.524), but the legal statements reference *"this request"* expiring and use language patterns borrowed from authorization forms. This hybrid framing may confuse patients about whether they are making a simple request or granting a revocable authorization.
- **Driver's license requirement scope**: The form states driver's license is *"only required if you are NOT requesting records in person"* but does not clarify what alternative identification is accepted for patients who lack a driver's license (e.g., state ID, passport).

### ❌ ERRORS
- **Missing non-conditioning statement**: Form-2 (the third-party authorization) includes a statement that treatment won't be conditioned on signing, but form-3 (patient access) omits it — the opposite of what one would expect, since HIPAA's non-conditioning provision is especially important for patient access requests.
