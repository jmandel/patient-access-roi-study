# Brattleboro Memorial Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization to Disclose Protected Health Information" form dated January 2025. It is Brattleboro Memorial Hospital's primary and most current ROI form, sourced from `https://www.bmhvt.org/wp-content/uploads/ROI-Form-1.2025.pdf`.

The hospital publishes three ROI-related documents. Form-2 is an older, simpler 1-page "Request for Use and/or Disclosure of Protected Health Information Release Authorization" with a 6-month default expiration. Form-3 is a DOCX version of essentially the same form as form-1, but from an earlier revision — it lacks the reproductive health care / gender affirming care language present in form-1. Form-1 is clearly the most current version and appears to be the hospital's primary authorization form.

This is a **general-purpose disclosure authorization**, not a patient-access-specific form. It covers both outgoing releases ("Send Out") and incoming information ("receive information from") — the header states: "YOU AUTHORIZE BRATTLEBORO MEMORIAL HOSPITAL AND ITS AGENTS TO RELEASE INFORMATION TO OR RECEIVE INFORMATION FROM THE PARTIES LISTED ON PAGE 2."

## 2. FINDABILITY

The form was very easy to locate. Per retrieval notes, the first web search for `"Brattleboro Memorial Hospital" "authorization" "release" "health information" form PDF` immediately returned direct PDF links. All three forms were publicly accessible on the hospital's WordPress site without login, bot blocking, or JavaScript rendering requirements. The URL (`/wp-content/uploads/ROI-Form-1.2025.pdf`) is reasonably descriptive, incorporating "ROI-Form" and the revision date "1.2025." The form itself includes HIM Department contact information: phone (802-257-8258) and fax (802-257-8881), giving patients an alternative path if they find the form but have questions.

However, the URL structure (`/wp-content/uploads/`) suggests the PDFs are uploaded as WordPress media files rather than linked from a dedicated Medical Records or Patient Resources page. It's unclear from the retrieval notes whether the hospital has a landing page that contextualizes these forms or simply hosts them as direct file downloads. Having three different versions of essentially the same form available online (with no obvious guidance on which to use) could also create confusion.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. The form has 4,275 characters of extractable text across 2 pages — not an image-only scan.

**Fillable fields:** Despite the retrieval notes claiming "Has fillable form fields," the metadata extraction reports **0 fillable fields** (`fillable_field_count: 0`, `fillable_field_names: []`). The form contains visual elements that look like fields (lines, checkboxes rendered as characters), but they are not interactive PDF form fields. This means the form cannot be completed digitally — it must be printed, filled by hand, and submitted physically or via fax/scan.

**File size:** 493,985 bytes (~494 KB) for a 2-page document is moderately large. The form contains 1 embedded image (likely the hospital logo) and uses 8 fonts, both contributing to the file size. This is not prohibitively large but is heavier than expected for a simple 2-page form.

**Digital-first design:** The form appears to be designed primarily as a print document. Page 2 uses underscore lines for write-in fields (`Patient Address:____`, `City:_____`, etc.) rather than structured input areas. The checkbox characters (□) are rendered as text rather than interactive elements. The overall design is a formatted word-processed document converted to flat PDF — functional for printing but not for digital completion.

## 4. CONTENT DESIGN

**Length:** 2 pages is appropriate for the content covered. Page 1 contains numbered instructions and patient-rights "I understand that..." statements. Page 2 contains the actual data-entry fields (patient info, from/to, purpose, records to release, signatures).

**Clarity and language:** The form uses a mix of plain language and legalistic constructions. Instructions 1–4 on page 1 are in ALL CAPS (instruction text) and standard case (explanatory text), which creates a jarring visual hierarchy. The "I understand that" statements are relatively clear, covering redisclosure risk, right to revoke, fee possibility, and voluntary nature. However, phrases like "If the medical record is complete and contains final copies of all reports, documentation, and appropriate signatures, your request for information will be submitted for processing" (instruction 4) are bureaucratic and may confuse patients — it implies their request could be delayed or rejected based on internal record completion status, which is not a patient's concern.

**Organization:** The two-page structure is logical: instructions/rights first, data entry second. The asterisk (*) convention for required sections is clearly explained in instruction 2: "YOU MUST COMPLETE ALL SECTIONS (*). IF ANY (*) SECTION OF THIS FORM IS INCOMPLETE, THIS FORM MAY BE INVALID." The Purpose and Information to Release sections use checkbox grids, which are efficient.

**Checkbox categories for records to release** are comprehensive: Hospital Abstract, ED Report, Clinic Visit Notes, Discharge Summary, Lab Reports, Radiology Reports/Images, Medication List, Operative Report, Immunizations, Psychiatric Diagnosis/Treatment, HIV/AIDS related, Drug and Alcohol Treatment, Hepatitis Status, Reproductive Health/Gender Affirming Care, plus an "Other" write-in.

**Layout:** Page 2 is dense. The FROM/TO fields, purpose checkboxes, information-to-release checkboxes, verbal communication section, date range, and signature block are all packed onto a single page. Some checkbox labels are misaligned across columns (e.g., "Hospital Abstract (e.g. History & Physical, Operative Report, Test Results, Discharge Summary)" wraps while adjacent column entries don't), making scanning difficult. The "VERBAL COMMUNICATION BETWEEN BMH* and:" section has three rows of name/relationship/phone entries that feel crammed.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general disclosure form. While one of the Purpose checkboxes is "Personal Records," the form's framing is oriented toward third-party disclosure. The FROM/TO structure asks the patient to specify where records should come from and where they should go — this works for transfers between providers but is somewhat awkward for a patient simply requesting their own records. A patient requesting copies for themselves would need to put their own name in the "TO" field, which is unintuitive.

**Scope options:** Granular. Patients can specify date ranges ("Dates of Care to be Released: ___ to: ___"), select specific record types via checkboxes, and indicate sensitive-information categories. The "Pick Up" and "Send Out" checkboxes provide two delivery methods but no electronic/digital delivery option.

**Format/delivery options:** Limited to "Pick Up" and "Send Out" — no email, patient portal, CD/USB, or electronic delivery mentioned. This is a notable gap for a form revised in January 2025.

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's right of access. It states "I may be charged a fee for copies in accordance with the state and federal law" — a vague reference to legal fee limits without citing specific regulations. There is no mention of EHI (electronic health information) export or bulk data access.

**Voluntariness:** Clearly stated: "Signing this form is voluntary. I do not need to sign this form to receive health services at Brattleboro Memorial Hospital."

## 6. COMPLIANCE

**Expiration:** "This authorization will automatically expire 12 months from the date signed unless otherwise specified." This is reasonable and standard.

**Fee disclosure:** "I may be charged a fee for copies in accordance with the state and federal law." This is vague but does not impose specific upfront charges — it defers to legal limits without quantifying them.

**Revocation rights:** Clearly stated: "I have a right to revoke this authorization at any time by submitting a written request to the Department or Office where I originally submitted it."

**No notarization required.** No witness requirement on this form (unlike form-2, which includes a witness line).

**Identification verification:** "For Office use only: Identification verified by (initial): ___ (Date): ___ (MRN): ___" — this is a staff-side field, not a patient barrier, but suggests in-person identity verification is expected without specifying acceptable forms of ID or remote verification alternatives.

**Submission method:** The form provides phone and fax numbers in the header but does not explicitly state how the completed form should be submitted (mail, fax, in-person, email). This leaves the submission method ambiguous.

**Redisclosure warning:** Present and standard: "Information used or disclosed pursuant to this authorization may be re-disclosed by recipient and may no longer be protected under federal and state law."

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Updated sensitive-information categories:** The form includes "Reproductive Health Care" and "Gender Affirming Care" as record-type categories — unusually progressive and inclusive language for a community hospital, reflecting the January 2025 revision date. This is more comprehensive than many forms from larger systems.
- **Clear voluntariness statement:** "I do not need to sign this form to receive health services at Brattleboro Memorial Hospital" — this directly addresses a common patient concern in plain language.
- **Verbal communication designees:** The "VERBAL COMMUNICATION BETWEEN BMH and:" section lets patients proactively designate people who can receive verbal information, combining authorization for written and verbal disclosure in one form.

### ⚠️ AMBIGUITIES
- **Multiple form versions with no guidance:** Three versions of essentially the same form are publicly available online (form-1, form-2, form-3) with different content, different expiration terms (6 months vs. 12 months), and different levels of detail. No apparent guidance tells patients which to use. A patient finding form-2 (with its 6-month default expiration and no reproductive health/gender affirming care options) gets a materially different experience than one finding form-1.
- **Instruction 4 is confusing:** "If the medical record is complete and contains final copies of all reports, documentation, and appropriate signatures, your request for information will be submitted for processing" — this conditions processing on internal record completeness. It is unclear what happens if the record is *not* complete, and patients have no way to know or control this.
- **No submission instructions:** The form includes HIM phone and fax numbers but never explicitly states how to submit the completed form — mail, fax, in-person drop-off, or email are all unaddressed.

### ❌ ERRORS
- **Fillable fields discrepancy:** The retrieval notes describe the form as having "fillable form fields," but metadata extraction confirms 0 interactive form fields. The form is a flat PDF that cannot be completed digitally despite visual appearance suggesting otherwise.

### 🚩 RED FLAGS
- **No electronic delivery option:** For a form revised in January 2025, offering only "Pick Up" and "Send Out" (physical methods) with no electronic delivery option is a notable barrier, particularly for patients who may not live near the hospital or have mobility limitations.
