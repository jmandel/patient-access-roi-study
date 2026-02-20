# Evaluation: Advocare, LLC — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "AUTHORIZATION FOR USE/DISCLOSURE OF PROTECTED HEALTH INFORMATION" branded to Advocare, LLC. It is version "V2- 4.2021" (April 2021). Per the retrieval notes, it was found hosted on a different CDN subdirectory (`b4ec96c9`) than the current forms, suggesting it belongs to an individual Advocare practice's website rather than the central Advocare site. It is an **older version** of the authorization form. The organization also has:

- **form-2.pdf**: The current English-language authorization form (2 pages, 41 fillable fields, revised 1/2026), linked from the official medical records page.
- **form-3.pdf**: A Spanish-language version of form-2 (2 pages, 44 fillable fields, dated 01.2024).

Form-1 is therefore a **legacy document** that has been superseded by form-2 but remains publicly accessible on a CDN.

## 2. FINDABILITY

Per the retrieval notes, form-1 was discovered via a `site:advocaredoctors.com` web search with authorization/release keywords. It was **not** linked from the official Advocare medical records page (https://www.advocaredoctors.com/medical-records), which instead links to form-2 and form-3. The form was hosted at an `irp.cdn-website.com/b4ec96c9/` path, distinct from the `ddaae316` path used by the current forms.

A patient navigating the official website would not encounter this form — they would find form-2 (and form-3 in Spanish). However, a patient who searched the web might land on this older version, which creates a risk of using an outdated document. The retrieval notes characterize overall findability as "easy," though that applies primarily to the current forms on the medical records page, not to this legacy PDF.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is cleanly extractable (2,933 characters). Not an image-only scan.
- **Fillable fields**: **Zero (0)**. Despite having a text layer, the form has no interactive form fields. All blanks are represented as underscores (`_`) in the text, meaning patients must print and fill by hand or use a PDF annotation tool.
- **File size**: 189,083 bytes for a single page — reasonable, though the form contains one embedded image (likely a logo).
- **Font count**: 7 fonts used.
- **Digital-first design**: No. This is designed as a print-and-fill document. The lack of fillable fields, combined with underscore-based blanks and instruction text like "(Form MUST be completed before signing)," makes clear that the workflow assumes pen-and-paper completion.

Compared to form-2 (41 fillable fields), form-1 is significantly less accessible as a digital artifact.

## 4. CONTENT DESIGN

**Length**: One page. For the scope of information covered, this is appropriately concise, though it achieves brevity partly by omitting fields that form-2 includes (e.g., structured sender/recipient sections, delivery method, purpose checkboxes).

**Clarity**: The opening paragraph is dense legalese: "I hereby authorize the use or disclosure of my individually identifiable protected health information as described below." This is standard HIPAA authorization language but not plain-language. The numbered statements (1–3) are similarly legalistic but reasonably clear.

**Organization**: The form follows a logical flow: header → patient demographics → date range → record type checkboxes → recipient → authorization terms → signature. Sections are not explicitly labeled with headers (except "Patient Information" and "Release Records To"), which makes visual scanning harder.

**Record type options**: The form offers 11 checkboxes: complete health records (excluding images), discharge summary, H&P, consultation reports, mental health, progress notes, lab tests, x-ray reports, photographs/videotapes/digital images, substance abuse treatment, and AIDS/HIV information. There is also an "Other" write-in field. Notably, there is an either/or design: "Complete health record(s), excluding all images **OR** Select from the following (check all which apply)."

**Layout**: Functional but basic. The single-page layout keeps things compact, but the underscore-based fill lines and lack of structured address fields (no separate city/state/ZIP) make it feel dated.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is framed as a general disclosure authorization ("This information is to be disclosed to the individual or entity identified below for the purpose of: ___"). There is no specific pathway or checkbox for "patient requesting own records." A patient wanting their own records would need to fill in their own name in "Release Records To," which is unintuitive. The form has no "Patient Request" purpose checkbox (unlike form-2, which explicitly offers "Patient Request" as a purpose option).

**Scope options**: The form offers record type checkboxes and a date range ("Covering the period(s) of health care: From: ___ To: ___"), which is adequate. However, there is no option for format of delivery (paper vs. electronic), no email field, and no delivery method selection.

**Format/delivery options**: None. The form provides no mechanism to request electronic delivery. The "Release Records To" section captures only name, relationship, address, and phone number — no email, no fax, no electronic delivery checkbox.

**Right of Access language**: The form does not reference HIPAA § 164.524, the Right of Access rule, or any patient rights beyond revocation and voluntariness. There is no mention of EHI export or bulk data access.

**Social Security Number**: The form requests "Patient SS#" — a full Social Security Number. This is unusual and concerning for a records release form, as SSN is not required for patient identification under HIPAA and creates an unnecessary data exposure risk.

## 6. COMPLIANCE

**Expiration**: The form states: "If no expiration date is designated this authorization will expire six (6) months from the signature date." This is a reasonable default, though form-2 reduced this to 90 days.

**Revocation rights**: Clearly stated: "I may revoke this Authorization at any time by notifying Advocare, LLC in writing."

**Conditioning treatment**: Statement 3 correctly notes that Advocare cannot condition treatment on signing the authorization, with appropriate exceptions for research-related treatment and treatment solely for creating PHI for disclosure.

**Liability release**: The form includes: "Advocare, LLC, its providers, employees, members and agents are hereby released from any legal responsibility or liability for disclosure of the above information." This is a standard liability release clause, though it could discourage patients from exercising their rights.

**Response time**: Unlike form-2, this form does not mention the 30-day response timeline, so patients are not informed of their right to timely response.

**No fee disclosure**: No mention of fees or costs associated with the records request.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Social Security Number requested**: The form includes a "Patient SS#" field. Collecting a full SSN for a records release authorization is unnecessary and creates a significant privacy/identity theft risk. HIPAA does not require SSN for patient identification, and best practice is to use medical record numbers or dates of birth instead. Form-2 (the current version) notably **removed** this field.

### ⚠️ AMBIGUITIES

- **"Complete health record(s), excluding all images"**: The "excluding all images" qualifier on the complete record option is unusual. It's unclear whether this means the patient cannot obtain a truly complete record via this checkbox, or whether they must separately check the "Photographs, videotapes, digital or other images" box to get imaging. This creates confusion about what "complete" actually means.
- **No explicit patient-access pathway**: The form is structured as a third-party release form. A patient requesting their own records has no clear guidance on how to use this form for self-directed access, which may lead to confusion or rejection.

### ❌ ERRORS

- **Outdated/superseded form still publicly accessible**: This V2 (April 2021) form remains discoverable via web search despite being replaced by the current version (Rev. 1/2026). A patient could unknowingly submit an outdated form and potentially face delays or rejection.
- **Missing response timeline**: Unlike form-2, this form omits any mention of the legally required 30-day response period, leaving patients uninformed of their rights regarding timeliness.

### ✨ BRIGHT SPOTS

- **Concise single-page format**: The form covers essential authorization elements in one page, minimizing patient burden. While this comes at the cost of some detail, it is less intimidating than multi-page forms.
- **Separate checkboxes for sensitive categories**: The form correctly separates mental health, substance abuse, and HIV/AIDS records into distinct opt-in checkboxes, reflecting state and federal requirements for enhanced consent for these categories.
