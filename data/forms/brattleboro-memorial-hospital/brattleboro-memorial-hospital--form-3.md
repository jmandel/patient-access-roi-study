# Brattleboro Memorial Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an "Authorization to Disclose Protected Health Information" form — a general-purpose ROI authorization allowing release of records to or from third parties. It is a 2-page form (the document self-identifies as "Page 1 of 2" and "Page 2 of 2," though the converted PDF renders as 3 pages due to content overflow from DOCX-to-PDF conversion).

The form is structurally and textually very similar to form-1.pdf (the organization's primary, most current ROI form dated January 2025). It appears to be an **older revision** of that same form. Key differences from form-1.pdf:

- **Missing newer language**: form-3 lacks the "Reproductive Health Care" and "Gender Affirming Care" language and checkbox that form-1 includes.
- **Original format**: Distributed as a Word document (.docx) rather than PDF, suggesting it may serve as an editable template for staff or patients.
- **Pre-filled example data**: The "TO" field is pre-populated with "Brattleboro OB/GYN" at "21 Belmont Ave, Brattleboro VT 05301" with phone (802-251-9965) and fax (802-251-9972), suggesting this version may have been created for a specific use case or as a template example.
- **Record type differences**: form-3 includes "Obstetric Records" and "Gynecology Records" checkboxes instead of form-1's consolidated "Reproductive Health/Gender Affirming Care" checkbox.

The organization also has form-2.pdf, an older, simpler one-page ROI form. Together, the three forms reflect different revision generations of essentially the same authorization document.

## 2. FINDABILITY

Per the retrieval notes, this form was found via a web search for `site:bmhvt.org authorization release medical records`. The source URL (`https://www.bmhvt.org/wp-content/uploads/Authorization-to-share-Protected-Health-Information-Outgoing-Records.docx`) is a direct file link on the hospital's WordPress site. The filename is descriptively named ("Authorization-to-share-Protected-Health-Information-Outgoing-Records.docx"), which aids discoverability.

However, the form was originally a .docx file — not a PDF — which limits its findability for patients searching with `filetype:pdf`. Overall retrieval difficulty was rated **easy** by the retrieval agent; all three forms were found in the first round of searching without login, bot blocking, or JavaScript rendering requirements.

The coexistence of three similar ROI forms on the same website creates potential confusion: a patient would not know which version is current or which to use. There is no visible versioning, date stamp, or guidance on the form itself (unlike form-1.pdf, which is dated January 2025).

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (4,547 characters).
- **Fillable fields**: Zero. The original Word document may have had editable fields (consistent with the notes describing it as "originally a fillable Word document"), but the PDF conversion eliminated any interactive capability. The extracted text shows blank underscores for fields (e.g., `Patient Name`, `Date of Birth _____________________`).
- **File size**: 59,715 bytes for 3 pages — very lightweight.
- **Format**: Originally distributed as .docx, which is unusual for patient-facing healthcare forms. DOCX is not universally accessible — patients without Microsoft Word or compatible software may not be able to open, view, or fill it. The converted PDF has 4 fonts, no embedded images, and is not a scan.
- **Page count mismatch**: The form header says "Page 1 of 2" and "Page 2 of 2," but the converted PDF is 3 pages. This is a conversion artifact — the DOCX content does not fit neatly into 2 PDF pages, causing the record-type checkboxes and signature block to spill onto a third page.
- **Digital-first design**: This is a hybrid. The DOCX format suggests it was designed to be filled on a computer (Word's form fields), but distributing a .docx file is not a modern digital-first approach. The PDF conversion renders it as a flat, non-fillable document.

## 4. CONTENT DESIGN

**Length**: 2 logical pages (3 in the converted PDF). Appropriate for the content scope.

**Clarity**: The instructions on page 1 are written in a mix of capitalized directive text and lower-case explanatory paragraphs. The capitalized instructions (items 1-2) are clear but somewhat stern: "YOU MUST COMPLETE ALL SECTIONS (*). IF ANY (*) SECTION OF THIS FORM IS INCOMPLETE, THIS FORM MAY BE INVALID." The patient rights statements ("I understand that...") use accessible language and cover key topics: sensitive information, fees, revocation rights, re-disclosure risk, and voluntariness.

**Organization**: The form follows a logical structure — instructions/rights on page 1, data entry fields on page 2. Sections are marked with (*) for required fields. The "Permission to Share" section uses "FROM" and "TO" fields with checkboxes for "Pick Up" or "Send Out" delivery direction.

**Layout issues**: The converted PDF suffers from formatting problems. The record-type checkboxes on page 2 are misaligned — the text reads as a confusing run-on:

> "□ Hospital Abstract (e.g. History & Physical, □ Immunizations □ Psychiatric Diagnosis/Treatment Operative Report, Test Results, Discharge Summary) □ Clinic Visit Notes □ HIV/AIDS related illness"

This layout makes it difficult to determine which checkboxes correspond to which record types. The three-column layout of checkboxes (general records, clinical data, sensitive categories) is not clearly delineated.

**Pre-filled data problem**: The "TO" field contains a specific provider's information ("Brattleboro OB/GYN, 21 Belmont Ave, Brattleboro VT 05301, 802-251-9965"). This is confusing for a general-purpose ROI form — a patient downloading this from the website would need to clear this data and may be uncertain whether the form is intended for a specific referral context.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general release/disclosure form**, not specific to patient access. The framing is about authorizing disclosure to or from third parties. A patient requesting their own records would use the "Personal Records" purpose checkbox and set themselves as the "TO" party, but the form does not streamline or specifically address this use case.

**Scope options**: The form provides reasonable granularity:
- Record type checkboxes: Hospital Abstract, ED Report, Discharge Summary, Medication List, Operative Report, Immunizations, Clinic Visit Notes, Lab Reports, Radiology Reports, Radiology Images, Psychiatric Diagnosis/Treatment, HIV/AIDS, Drug and Alcohol Treatment, Hepatitis Status, Obstetric Records, Gynecology Records, plus an "Other" field.
- Date range fields: "Dates of Care to be Released: ________________ to: ______________________"
- Purpose checkboxes: Current Treatment, Provider Transfer, Insurance, Worker's Compensation, Attorney, Disability, Personal Records, Other.

**Format/delivery options**: The form offers "Pick Up" and "Send Out" checkboxes but does not mention electronic delivery (email, patient portal, secure upload, CD/USB). This limits modern delivery options.

**Right of Access language**: The form does not reference HIPAA § 164.524 or explicitly mention the patient's right of access. It does state "Signing this form is voluntary. I do not need to sign this form to receive health services at Brattleboro Memorial Hospital," which addresses the non-conditioning requirement but stops short of informing patients of their right to access their own records.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or patient portal integration.

**Verbal communication section**: The form includes fields for "VERBAL COMMUNICATION BETWEEN BMH* and:" with space for three names, relationships, and phone numbers. This is a useful feature for designating who the hospital may communicate with verbally.

## 6. COMPLIANCE

**Expiration**: "This authorization will automatically expire 12 months from the date signed unless otherwise specified." This is reasonable and allows patient customization.

**Fees**: "I may be charged a fee for copies in accordance with the state and federal law." This is appropriately vague (deferring to legal limits) but provides no specific fee schedule or estimate, which can create uncertainty for patients.

**Revocation**: "I have a right to revoke this authorization at any time by submitting a written request to the Department or Office where I originally submitted it." This appropriately informs patients of their revocation right.

**Re-disclosure warning**: "Information used or disclosed pursuant to this authorization may be re-disclosed by recipient and may no longer be protected under federal and state law." Standard and appropriate.

**No-conditioning statement**: "Signing this form is voluntary. I do not need to sign this form to receive health services at Brattleboro Memorial Hospital." This correctly addresses the HIPAA non-conditioning requirement.

**Sensitive information handling**: The form includes separate checkboxes for psychiatric, HIV/AIDS, drug and alcohol treatment, and hepatitis status records. This follows 42 CFR Part 2 and state-specific requirements for sensitive health information categories. However, the form does not include the newer reproductive health care / gender affirming care language that form-1.pdf has — potentially a compliance gap depending on when Vermont enacted relevant protections.

**Identification requirement**: "For Office use only: Identification verified by (initial):_______(Date):_______ (MRN):________" — standard practice, not burdensome.

**No notarization or witness requirement** (unlike form-2.pdf, which includes a witness signature line).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Pre-filled recipient data**: The "TO" field is pre-populated with "Brattleboro OB/GYN" contact information. If a patient submits this form without clearing that data, their records could be inadvertently directed to the wrong party. For a form published on a public website, this is a significant patient safety concern.

### ⚠️ AMBIGUITIES

- **Which form to use?** The hospital publishes three overlapping ROI forms with no guidance on which is current. Form-3 lacks a revision date, making it impossible for a patient to determine if this is the correct version. Form-1.pdf (dated January 2025) appears to be the authoritative version, but nothing on form-3 signals that it is superseded.
- **"Pick Up" vs. "Send Out"**: The form offers these delivery direction checkboxes but does not explain what "Pick Up" entails (in-person pickup at HIM? Where? When?) or what "Send Out" means (mail? fax? both?).

### ❌ ERRORS

- **Page count mismatch**: The form says "Page 1 of 2" and "Page 2 of 2" but renders as 3 PDF pages due to the DOCX conversion. The third page contains critical content (remaining record-type checkboxes, verbal communication fields, signature block, and dates of care), so a patient printing this could miss it or be confused by the pagination.
- **Garbled checkbox layout**: The record-type checkboxes are visually confusing in the converted PDF, with items from different logical columns running together into ambiguous clusters. For example, "□ Psychiatric Diagnosis/Treatment" and "□ Immunizations" appear on the same line but belong to different conceptual categories (sensitive vs. general records).
- **Missing reproductive health category**: Unlike the updated form-1.pdf, form-3 does not include a "Reproductive Health Care" or "Gender Affirming Care" checkbox. If a patient uses this older version, they may not be able to specifically authorize release of these record types, which could be significant given Vermont's health privacy landscape.

### ✨ BRIGHT SPOTS

- **Verbal communication authorization**: The dedicated section for designating up to three individuals for verbal communication with BMH is a thoughtful, patient-friendly feature that goes beyond typical ROI forms.
- **DOCX availability**: While the .docx format has accessibility limitations, offering an editable document format is potentially useful for patients who want to fill in the form on a computer without needing a PDF editor. This is a somewhat forward-thinking approach, even if the execution is imperfect.
