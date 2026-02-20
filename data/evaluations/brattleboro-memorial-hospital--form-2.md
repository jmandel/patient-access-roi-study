# Brattleboro Memorial Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Request for Use and/or Disclosure of Protected Health Information Release Authorization" — a general-purpose ROI authorization form. It is the shorter and apparently older of three ROI-related documents found for Brattleboro Memorial Hospital. The hospital also publishes a more comprehensive, updated 2-page form (form-1.pdf, dated January 2025) and a Word document variant (form-3.pdf) that closely mirrors form-1. Form-2 lacks several features present in form-1 — notably the reproductive health care / gender affirming care categories, HIM department contact information on the form itself, and the "Personal Records" purpose checkbox — suggesting it predates the current revision cycle. The filename on the server (`Consent-Release-of-Medical-Information.pdf`) does not match the title on the form itself ("Request for Use and/or Disclosure of Protected Health Information Release Authorization"), which may cause confusion for patients trying to identify the correct document.

## 2. FINDABILITY

Per the retrieval notes, all three forms were found in the first round of searching with standard queries. Form-2 was directly linked as an uploaded file on the hospital's WordPress site at `https://www.bmhvt.org/wp-content/uploads/Consent-Release-of-Medical-Information.pdf`. No login, JavaScript rendering, or bot-blocking was encountered. Retrieval difficulty was rated **easy**. However, the coexistence of three overlapping ROI forms on the same site creates a discoverability problem of a different kind: a patient encountering form-2 may not realize there is a newer, more complete version (form-1) available, and there is no indication on form-2 itself that it has been superseded. The server-side filename gives no version date or revision indicator.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The full text (3,045 characters) is extractable via `pdftotext`, confirming this is not an image-only scan.
- **Fillable fields:** Zero. The form is a flat PDF — fields are represented as underscored blank lines (e.g., `Full Name:_________________________________`) rather than interactive form fields. Patients must print and handwrite or use PDF annotation tools.
- **File size:** 82,253 bytes for a single page with no embedded images — reasonable, though the 5 fonts embedded for a one-page form is slightly heavy.
- **Design origin:** The form appears to be a digitally authored document (not a paper scan), but it was designed for print-and-fill workflows. There is no digital-first design consideration. Checkboxes are rendered as text labels without interactive check elements.
- **PDF structure:** The checkbox items for purpose and record type are listed as plain text without clear visual checkbox indicators in some cases. The `pdftotext` output shows items like `Family Education`, `Continuity of Care`, `Legal` as standalone text blocks — suggesting they may use graphical checkbox squares that don't translate to text, but the absence of fillable fields means patients cannot interact with them digitally.

## 4. CONTENT DESIGN

**Length and proportionality:** At one page and 3,045 characters, the form is concise. It covers the essential elements (patient identity, recipient, purpose, record types, sensitive-information consent, patient rights, signature, expiration) without excessive bulk. This brevity is a strength compared to lengthier forms, though it comes at the cost of some detail.

**Language and clarity:** The form mixes plain language with legalistic phrasing. The patient rights section is written in first-person "I understand that…" statements, which is a reasonable approach. However, phrases like "shall not condition treatment, payment or enrollment in the health plan or eligibility for benefits on my providing authorization for the requested use of disclosure" are dense and may challenge lower-literacy readers. The emphatic "AND THAT I MAY REFUSE TO SIGN THIS AUTHORIZATION" in all-caps mid-sentence is visually jarring and grammatically awkward as a continuation of the preceding clause.

**Organization:** The form follows a logical top-to-bottom flow: patient info → recipient → purpose → record types → dates of care → sensitive information → patient rights → signature → expiration. Sections are not explicitly labeled or numbered, relying instead on spatial grouping and blank-line separation. There are no section headers or visual dividers beyond the title block.

**Layout:** The form is functional but visually dated. Address fields use long underscore runs. The checkbox lists for purpose and record types appear to be laid out in a single-column format based on the text extraction. The sensitive information section asks patients to "CHECK all boxes beside the information that you want TO BE RELEASED and/or write NO beside the information that you DO NOT want to be released" — a confusing dual-action instruction that requires both checking and writing.

**Record type options:** The form offers: Discharge Summary, Laboratory Data, Progress Notes, History & Physical Exam, Emergency Room Records, Operative Note, Nurse's Notes, X-ray/Scans/Etc., and Other. This is a reasonable set for a community hospital but lacks modern categories (e.g., imaging, medication lists, immunizations) that form-1 includes.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general release/disclosure form, not specifically designed for patients requesting their own records. The form authorizes BMH to "use/disclose my individually identifiable health information" and requires specifying a recipient in the "Health information shall be disclosed to" section. A patient requesting their own records would need to list themselves as the recipient — workable, but not intuitive. There is no "Personal Records" purpose checkbox (unlike form-1), though "Other" is available.

**Scope options:** The form provides date-range fields ("Dates of care included: ___ to ___") and record-type checkboxes, giving patients reasonable control over what is released. The sensitive-information section (Psychiatric, Drug/alcohol, HIV/AIDS, Hepatitis) provides appropriate granular consent for categories that require special authorization.

**Format/delivery options:** The form provides no options for electronic delivery. There is no mention of email, patient portal, CD/DVD, or any delivery mechanism. The form does not specify how records will be delivered at all.

**Right of Access language:** The form includes "I understand that I may inspect or obtain a copy of the protected health information described by this authorization" — which is a positive inclusion. However, it does not cite HIPAA § 164.524 or use the phrase "Right of Access." There is no mention of electronic health information export or bulk data access.

**Fee disclosure:** The form states "I understand I may be charged for copies" without specifying amounts, fee schedules, or citing the HIPAA cost-based fee limitation. This is vague but not unusual.

**Revocation rights:** Clearly stated: authorization "may be revoked in writing and delivered to the HIM Department of Brattleboro Memorial Hospital at any time."

**Re-disclosure warning:** Present: "information used or disclosed as a result of this authorization could be redisclosed by the receiver and, if so, may not be subject to federal or state law protecting its confidentiality."

## 6. COMPLIANCE

**Expiration:** "This authorization will expire on (date no later than one year from now) ___. (If no date is stated, this authorization expires six months from the date it was signed.)" The six-month default expiration is somewhat short but not unreasonable. The one-year maximum is standard.

**Witness requirement:** The form includes a witness signature line. While not explicitly requiring a witness (there is no instruction text mandating it), the presence of a dedicated "Witness" and "Print Name Signed" line may create a perceived barrier — patients may believe they cannot submit the form without a witness, which is not a HIPAA requirement for patient-access requests.

**No notarization required.** No in-person submission requirement stated. No mention of specific ID requirements.

**Non-conditioning language:** Present — "Brattleboro Memorial Hospital shall not condition treatment, payment or enrollment in the health plan or eligibility for benefits on my providing authorization."

**Copy offer:** "At your request we will provide you a copy of this form" — a minor but positive inclusion.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness line without clarification:** The form includes a "Witness / Print Name Signed" field. While not explicitly requiring a witness, patients may interpret this as mandatory. HIPAA does not require witness signatures for patient access requests, and the presence of this field without a note like "optional" or "if applicable" may deter patients who lack a convenient witness.

### ⚠️ AMBIGUITIES

- **Confusing sensitive-information instruction:** The form directs patients to "CHECK all boxes beside the information that you want TO BE RELEASED and/or write NO beside the information that you DO NOT want to be released." This dual-action instruction is contradictory — does an unchecked box mean "do not release" or "no preference stated"? The mixed use of checking AND writing "NO" for a single set of categories creates unnecessary confusion.
- **Multiple overlapping forms online:** The hospital publishes three ROI-related forms with no indication of which is current or preferred. A patient finding form-2 has no way to know that form-1 is the newer version. There is no version date, revision number, or "supersedes" notice on form-2.
- **No delivery method specified:** The form never states how records will be delivered (mail, fax, pickup, electronic). A patient completing this form has no visibility into what happens next.

### ❌ ERRORS

- **Filename/title mismatch:** The server filename is `Consent-Release-of-Medical-Information.pdf` while the document title is "Request for Use and/or Disclosure of Protected Health Information Release Authorization." This mismatch may confuse patients and suggests poor document management hygiene.
- **Bullet rendering artifacts:** The extracted text shows `•` bullet characters appearing as standalone items in the patient rights section, suggesting layout issues or formatting artifacts that may render oddly in some PDF viewers.

### ✨ BRIGHT SPOTS

- **Right to inspect language:** The inclusion of "I understand that I may inspect or obtain a copy of the protected health information" is a positive patient-rights statement not always found on ROI forms.
- **Copy-of-form offer:** "At your request we will provide you a copy of this form" is a small but thoughtful detail that supports patient record-keeping.
