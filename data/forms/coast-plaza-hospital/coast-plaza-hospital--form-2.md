# Coast Plaza Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION" form for Coast Plaza Hospital (Norwalk, CA). It is the **older version** of the hospital's ROI form, uploaded to the website in January 2022 (per the URL path: `/wp-content/uploads/sites/9/2022/01/CPH-Medical-Records-Auth-Form-English.pdf`). A newer version (form-1.pdf, dated June 2024) also exists on the same Medical Records page. Both forms are structurally near-identical, with minor differences: form-2 uses a different fax number (562-929-3582 vs. the newer form's (213) 537-0963), and form-2 uses underscores as checkbox placeholders (e.g., `__ Continuation of Care`, `__ Personal Use`) rather than cleaner formatting.

The filename suffix "English" suggests a multilingual intent, though no non-English version was found during retrieval.

## 2. FINDABILITY

**Moderate findability.** The form was discovered through two search strategies: a general web search for `"medical records" "release form" filetype:pdf` and a site-scoped search of `coastplazahospital.com`. Both led to the hospital's dedicated Medical Records page at `https://www.coastplazahospital.com/for-patients/medical-records/`. The URL is descriptive and the page is located under a logical path (For Patients → Medical Records). No login walls, bot blocking, or JavaScript rendering was required.

However, the fact that this **older version is still publicly accessible** alongside the newer 2024 version creates potential confusion — a patient could download either version without knowing which is current. Neither form appears to carry an explicit version number or "effective date" in the document text itself.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,519 characters), confirming this is not an image-only scan.
- **Fillable fields**: Zero. Despite being a digitally created PDF (not a scan), the form has no interactive form fields. Patients must print, hand-fill, and submit physically or scan back — undermining the benefit of having the document online.
- **File size**: 127 KB for 2 pages — reasonable.
- **Fonts**: 6 fonts embedded.
- **Images**: 4 embedded images (likely the hospital logo and decorative elements).
- **Digital-first design**: Partial. The document was clearly created digitally (has a text layer, clean layout), but it was designed as a print form. The use of blank underscores for checkboxes (`__ Continuation of Care`) and fill-in lines (`Date:__________________`) reinforces this print orientation. No interactive elements exist.

## 4. CONTENT DESIGN

**Structure and organization**: The form is logically organized into clear labeled sections: "Patient Information," "Information to be Released From" (pre-filled with Coast Plaza Hospital's details), "Information to be Released to," "For What Purpose," "Information to be Released," and "Authorization." The two-page layout is proportionate to the content.

**Clarity**: The authorization section on page 2 uses plain, bulleted language that is reasonably understandable:
> "I understand that treatment, payment, enrollment or eligibility will not be conditioned upon my signing this authorization."

However, the form does not explain *what* ROI is or guide the patient through the process. It assumes familiarity with the concept.

**Record type granularity**: The form provides 16+ specific record types to choose from (History & Physical, Consultation Report, Pathology Report, Emergency Department, EKG Report, Physician Order, Medication Report, Discharge Summary, Operative Report, Radiology Report, Laboratory Report/Result, Physician Progress Note, Nurses Note, Mental Health Evaluation, plus "Records for Continuity of Care" and "Records for Personal Use" as bundled options). This is a reasonably granular selection.

**Special categories**: The form appropriately separates sensitive record types requiring specific authorization under state/federal law: Mental Health/Psychiatric Treatment, Genetic Testing, Alcohol/Drug Abuse Treatment, and HIV/AIDS Test Results. Patients must initial next to each category they authorize.

**Layout weaknesses**: The checkbox styling uses raw underscores (`__`, `_____, `______`) which look cluttered and are difficult to use when printing. The "PATIENT LABEL" box at the bottom right of each page ("Hospital & Clinic Staff: Affix a patient label here if providing records to the patient") is staff-facing and may confuse patients filling this out at home.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose release form** — not specifically designed for patient self-access. The "Information to be Released to" section requires the patient to fill in a recipient's name and address, which is awkward when the patient is requesting records for themselves. However, the purpose options do include `__ Personal Use`, and the delivery section includes options for patient pickup and electronic format, suggesting it *can* be used for patient self-access.

**Delivery/format options**: The form offers meaningful delivery choices:
- Paper records by Mail or Fax
- Pickup at the Facility (with a date field)
- Records in Electronic Format — CD
- Encryption preference: "I do want my records encrypted" / "I do Not want my records encrypted"

The inclusion of electronic format (CD) and encryption options is notable, though CD delivery is dated technology. There is no mention of email delivery, patient portal access, or other modern electronic delivery methods.

**Scope options**: Date range selection (`Dates of Service: From_______________ To_______________`) and specific record type selection are both available, giving patients reasonable control over what they request.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or the patient's right of access. The authorization section references HIPAA only obliquely: "a separate, specific authorization is required to authorize the disclosure or use of psychotherapy notes, as defined in the federal regulations implementing the Health Insurance Portability and Accountability Act." There is no plain-language explanation of patient rights.

**EHI Export**: No mention of electronic health information export, bulk data, or modern interoperability standards.

## 6. COMPLIANCE

**Expiration**: "Unless otherwise revoked, this authorization will expire 180 days after the date of signing this form." A 180-day (roughly 6-month) expiration is reasonable and standard.

**Fees**: "I understand that there may be a fee associated with this request." This is vague — no fee schedule is provided, no per-page rate is quoted, and no reference to HIPAA's "reasonable, cost-based fee" standard is made. While not itself a violation, the lack of specificity could allow for unexpected charges.

**Revocation**: Clearly stated — must be done in writing, sent to the releasing facility. This is standard.

**Conditioning**: Correctly states that "treatment, payment, enrollment or eligibility will not be conditioned upon my signing this authorization."

**No notarization requirement**: The form does not require notarization or witnesses beyond the patient's own signature.

**Submission method**: The form does not specify how to submit (mail, fax, in-person). The lack of explicit submission instructions could be a minor barrier, though the hospital's contact information (phone, fax, address) is pre-printed.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Outdated form still publicly available**: This January 2022 version remains downloadable alongside the June 2024 version with no indication of which is current. A patient could submit the wrong version, potentially causing processing delays. The different fax numbers between versions (562-929-3582 in form-2 vs. (213) 537-0963 in form-1) could mean a fax sent to the old number goes nowhere.

### ⚠️ AMBIGUITIES

- **Fee language is vague**: "I understand that there may be a fee associated with this request" provides no information about fee amounts, basis, or limits. Patients sign this with no idea what they might be charged.
- **"Records for Personal Use" vs. "Personal Use" purpose**: The form lists both `__ Personal Use` as a purpose option and `__Records for Personal Use` as a record type category. The relationship between these two is unclear — does selecting "Personal Use" as a purpose automatically include all records, or must the patient also check "Records for Personal Use" under record types?
- **No submission instructions**: The form does not tell patients how or where to submit the completed form (mail to the address? fax to the listed number? bring in person?).

### ❌ ERRORS

- **Inconsistent checkbox formatting**: Checkboxes alternate between `__` (double underscore), `_____` (5 underscores), and `______` (6 underscores) with no apparent pattern. Some purpose options have `__` while the sensitive-category initials use `_____`/`______`. This is a minor formatting defect but contributes to a cluttered appearance.

### ✨ BRIGHT SPOTS

- **Electronic format with encryption choice**: The form offers records on CD and explicitly asks whether the patient wants encryption — a privacy-conscious option rarely seen on ROI forms: `"__I do want my records encrypted"` / `"__I do Not want my records encrypted"`. While CD is outdated, the encryption awareness is commendable.
- **Granular record type selection**: Offering 16+ specific record types rather than forcing an all-or-nothing release gives patients meaningful control over their disclosure.
- **Sensitive category separation**: Properly segregating Mental Health, Genetic Testing, Alcohol/Drug, and HIV/AIDS records with separate initials reflects good compliance with 42 CFR Part 2 and state-specific protections.
