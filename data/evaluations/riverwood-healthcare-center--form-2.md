# Evaluation: Riverwood Healthcare Center — form-2.pdf

## Document Overview
- **Organization:** Riverwood Healthcare Center (Aitkin, MN)
- **Document title:** "Medical Record Release Authorization"
- **Source URL:** https://riverwoodhealthcare.org/wp-content/uploads/2016/03/Release-of-Information-Form-2015.pdf
- **Date on form:** 5/2015
- **Pages:** 1
- **File size:** 15,455 bytes
- **Fillable fields:** 0
- **Text layer:** Yes (extractable text, not a scan)

---

## 1. DOCUMENT IDENTIFICATION

This is a **2015-vintage general-purpose ROI authorization form** titled "Medical Record Release Authorization." It is the oldest of three ROI forms found for Riverwood Healthcare Center. The organization has since replaced it with form-1 (a 2018 version titled "Authorization to Release and Disclose Patient Information") and form-3 (a 2025 version with the same title as form-1). All three forms serve the same purpose — authorizing the release of medical records — but with progressively updated layouts and content.

The URL path (`/wp-content/uploads/2016/03/`) indicates it was uploaded to the WordPress site in March 2016. Despite being superseded, this PDF remains publicly accessible at its original URL, though the notes indicate the Patient Forms page now links to the newer form-3 version.

---

## 2. FINDABILITY

Per the retrieval notes, Riverwood's forms were **easy to find**. A web search for `"Riverwood Healthcare Center" "medical records" "release form" filetype:pdf` surfaced this form directly. The organization's Patient Forms page (https://riverwoodhealthcare.org/patient-forms/) is accessible with one click from the main navigation. However, this specific form (form-2) is the **older 2015 version** — a patient searching today would more likely encounter the current form-3 linked from the Patient Forms page. The continued availability of this older version at its original URL could cause confusion if a patient arrives via a search engine hit.

The filename `Release-of-Information-Form-2015.pdf` is descriptive and date-stamped, which is helpful. The URL path structure is standard WordPress media uploads.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** The form has a proper text layer with 3,332 characters of extractable text. It is not an image-only scan.

**Fillable fields:** Zero. Despite having a text layer, the form contains no interactive form fields. All blanks are represented with underscores (e.g., `Patient Name______________________________`). A patient would need to print and hand-fill, or attempt to type over the lines in a PDF editor.

**File size:** At 15,455 bytes for a one-page document with no embedded images, the file is appropriately lightweight. This is the smallest of the three forms by a wide margin (form-1 is 368KB, form-3 is 100KB).

**Font count:** 4 fonts are used, which is reasonable for a single-page document.

**Digital-first design:** The form was clearly designed digitally (not a scan), evidenced by the clean text extraction and zero embedded images. However, the lack of fillable fields means it was designed for the **print-and-fill workflow** rather than digital completion. This is a significant accessibility gap — a patient cannot complete this form electronically without third-party tools.

---

## 4. CONTENT DESIGN

**Length:** One page, which is appropriate for an ROI authorization. The form manages to fit patient demographics, release from/to fields, purpose checkboxes, record type selections, and legal language onto a single page.

**Organization:** The form uses lettered sections:
- Patient demographics at the top (name, maiden name, SSN, DOB, phone, address, email)
- **A)** "I hereby authorize records FROM:" (source)
- **B)** "To be released TO:" (recipient)
- **C)** "For the purpose of:" (checkboxes)
- Record type checkboxes (unlabeled section)
- Legal disclosures
- Signature block

The lettered structure (A/B/C) is somewhat helpful, but the record type section is oddly **not given a letter or label** — it sits between section C and the legal text without a header, which could confuse patients.

**Purpose checkboxes:** Six options: Litigation, Disability, Insurance, Work Comp, Self/Personal Copy, Other, and Transfer or Continuity of Care. The inclusion of "Self/Personal Copy" is useful for patients requesting their own records.

**Record type selections:** Presented in two unlabeled columns:
- Column 1: Physician Office Notes, Immunizations, Operative/Procedure Reports, Other
- Column 2: Cardiology/EKG Reports, Lab/Path Reports, Radiology/XRay/MRI Reports, Digital Images

These are presented as simple fill-in-the-blank lines (not checkboxes with labels), making the layout somewhat ambiguous — it's not immediately clear whether these are checkboxes to check or items to circle.

**Clarity:** The legal language is dense but standard HIPAA boilerplate. The form uses passive constructions like "I understand that authorizing the disclosure of this health information is voluntary." The text is readable but not plain-language.

**Layout issues:** The extracted text reveals garbled layout near the signature block: `"All incomplete\nwill be returned for\n______________________________________________________(Signature\nof forms\nWitness)\n\ncompletion prior to processing the request."` This appears to be a text box or marginal note ("All incomplete forms will be returned for completion prior to processing the request") that was placed next to the witness signature line in the PDF but extracts poorly as text.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is a **general-purpose ROI form** — it can be used by patients requesting their own records (via the "Self/Personal Copy" purpose checkbox) or for third-party release. It does not differentiate between these use cases. There is no specific language about HIPAA's Right of Access (45 CFR § 164.524) or patient rights to their own records.

**Scope options:** The form allows patients to specify:
- Date range ("Date Range_____ to _____")
- Record types (checkboxes for specific categories)
- Purpose of release
This provides adequate granularity for patients to limit the scope of their request.

**Sensitive information:** The form includes a paragraph about HIV/AIDS, behavioral health, and substance abuse information: "I understand that the information in my medical record may include information relating to sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), or human immunodeficiency virus (HIV). It may also include information about behavioral or mental health services, and treatment for alcohol and drug abuse." However, unlike form-1 and form-3, this form does **not** provide an opt-out initialing mechanism for restricting chemical dependency or behavioral health information. The mention is informational only, meaning all sensitive records are released by default without an explicit restriction option.

**Format/delivery options:** The form does not mention any delivery format preferences (electronic, mail, fax, in-person pickup). There is no mention of electronic delivery, patient portal access, or any modern delivery mechanism.

**SSN collection:** The form requests the patient's Social Security Number (`SS#___________`). This is noteworthy — neither form-1 nor form-3 collects SSN. Collecting SSN for a records release request raises unnecessary privacy risk.

**Expiration:** The form has an "expiration date" field next to the patient signature but does not specify a default expiration period. This contrasts with form-1 and form-3, which both state "this authorization expires once the above stated purpose is fulfilled or one year, whichever comes first."

**Witness requirement:** The form includes **two** witness signature lines: `Signature of Witness___________________________________` and a second one. Requiring witnesses for an ROI form is unusual and potentially burdensome — HIPAA does not require witness signatures for authorization forms.

---

## 6. COMPLIANCE

**No explicit expiration default:** Unlike the newer forms, form-2 has an expiration date field but no stated default. This means the authorization could theoretically remain in effect indefinitely if the patient leaves the expiration date blank, which may not align with HIPAA best practices.

**SSN collection:** Requesting Social Security Numbers for a medical records release is not required by HIPAA and creates unnecessary data exposure risk.

**No fee disclosure:** The form does not mention any fees associated with records requests.

**No submission instructions:** The form does not specify where or how to submit the completed form (no mailing address, fax number, email, or office location for submission — though the organization's fax number appears in the header).

**"All incomplete forms will be returned for completion prior to processing the request":** This statement, while reasonable on its face, could create delays in record access if interpreted rigidly for minor omissions.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Social Security Number requested:** The form asks for `SS#___________`. Neither the 2018 nor 2025 replacement forms include this field, suggesting the organization itself recognized this was inappropriate. Collecting SSN for an ROI request creates unnecessary identity theft risk and is not required by HIPAA.
- **Two witness signature lines:** The form requires signatures from two witnesses — a requirement not imposed by HIPAA and one that could create a practical barrier for patients completing the form at home or remotely.

### ⚠️ AMBIGUITIES

- **No expiration default:** The form has an expiration date blank but no stated default period. Patients may not know what to put here, and providers may interpret a blank field differently.
- **Record type section is unlabeled:** The checkboxes/lines for record types sit between section C ("For the purpose of") and the legal text with no section header, making it unclear what action the patient should take with these items.
- **No submission instructions:** The form does not tell the patient where to send it. The fax number in the header (218-927-5319) is the only contact method, but it's not explicitly stated as the submission destination.

### ❌ ERRORS

- **Garbled text extraction near signature block:** The marginal note "All incomplete forms will be returned for completion prior to processing the request" overlaps with the witness signature line in the extracted text, producing the confusing sequence: `"All incomplete\nwill be returned for\n______________________________________________________(Signature\nof forms\nWitness)\n\ncompletion prior to processing the request."` While this may display correctly in the rendered PDF, it indicates poor layout layering.
- **Outdated/superseded form still publicly accessible:** The URL for this 2015 form remains live, meaning patients could find and submit an outdated form via search engines, potentially causing processing delays.

### ✨ BRIGHT SPOTS

- **Compact single-page design:** Despite covering all necessary fields, the form fits on one page — reducing patient burden compared to multi-page authorization forms.
- **Descriptive filename:** `Release-of-Information-Form-2015.pdf` clearly communicates what the file is and when it was created, which is better than many organizations' generic filenames.
