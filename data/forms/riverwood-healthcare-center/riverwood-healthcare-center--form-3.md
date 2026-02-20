# Evaluation: Riverwood Healthcare Center — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "AUTHORIZATION TO RELEASE AND DISCLOSE PATIENT INFORMATION" form — the most current version of Riverwood's ROI authorization, uploaded in 2025 (source URL path: `/wp-content/uploads/2025/10/Patient-Information-Disclosure-Authorization-1.pdf`). It is a general-purpose authorization for releasing patient health information from one entity to another.

Riverwood has three ROI PDFs on its site. Form-1 is the 2018 version (368 KB, image-heavy), form-2 is the 2015 version (15 KB, text-based, titled "Medical Record Release Authorization"), and form-3 is the current replacement. All three share essentially the same structure — patient info, release from/to, purpose checkboxes, record type selections, chemical dependency/behavioral health opt-out, and HIPAA authorization language. Form-3 is linked from the Patient Forms page as the "Authorization to Release and Disclose Information Printable Form," making it the canonical current version. The older versions remain accessible via direct URL but are not prominently linked.

## 2. FINDABILITY

**Easy to locate.** Per the retrieval notes, the form was found via the Patient Forms page at `https://riverwoodhealthcare.org/patient-forms/`, reachable in one click from the main navigation. A web search for `"Riverwood Healthcare Center" "medical records" "release form" filetype:pdf` also surfaced the form directly. The URL filename (`Patient-Information-Disclosure-Authorization-1.pdf`) is descriptive and human-readable.

Additionally, Riverwood provides online JotForm equivalents (including a HIPAA-compliant version at `hipaa.jotform.com`), giving patients an alternative to the printable PDF. The Patient Forms page labels this as the "Printable Form," clearly distinguishing it from the online submission option.

## 3. TECHNICAL ACCESSIBILITY

- **File size:** 100,371 bytes for a single page — reasonable, though notably larger than form-2 (15 KB). The presence of 2 embedded images (likely a logo/header graphic) accounts for the additional size.
- **Text layer:** Present and fully extractable. The full text is 2,472 characters and reads cleanly with no OCR artifacts.
- **Fillable fields:** Despite the notes suggesting it "appears to have form fields (fillable PDF)," the metadata reports **0 fillable fields** (`fillable_field_count: 0`). The form uses visual checkbox characters (☐) rendered as text, not interactive form elements. This means patients must print and hand-fill the form, or use a PDF annotation tool.
- **Fonts:** 4 fonts used — indicating a digitally composed document, not a scan.
- **Design origin:** This is a digitally created document (not a scan), with clean layout and text rendering. However, the lack of fillable fields undermines its utility as a digital artifact — it is essentially a print-first design published as a PDF.

## 4. CONTENT DESIGN

**Length and proportion:** One page containing all fields, authorization language, and signature lines. This is appropriately concise for an ROI form.

**Organization:** The form follows a logical top-to-bottom flow with clearly labeled sections using bold headers with parenthetical plain-language explanations:
- "RELEASE INFORMATION FROM (WHO HAS THE INFORMATION YOU WANT RELEASED?)"
- "RELEASE INFORMATION TO (WHERE DO YOU WANT THE INFORMATION SENT?)"
- "PURPOSE OF RELEASE (WHY IS IT NEEDED?)"

This parenthetical guidance pattern is a notable design choice that helps patients understand each section's purpose.

**Record type options:** The form offers a "Routine Record Sets" checkbox described as "item a provider typically needs, such as labs, notes, procedures, and history, etc." alongside specific options: Physician Office Notes, Operative/Procedure Notes, Cardiology/EKG, Radiology reports, Radiology Images, Chemical Dependency/Substance Abuse, Psychological Testing/Mental Health, Lab/Path Reports, HIV/AIDS Testing, and Other. This provides reasonable granularity.

**Purpose options:** Six checkboxes — Continuing Care, Worker's Compensation, Legal, Personal Use, Insurance, Disability Determination — plus an "Other" option. Including "Personal Use" signals that patient self-requests are anticipated.

**Authorization language:** Two paragraphs of standard HIPAA authorization text covering voluntary nature, right to revoke in writing, potential for redisclosure, and expiration terms. The language is dense but standard. The authorization "expires once the above-stated purpose is fulfilled or one year, whichever comes first."

**Date fields:** Includes both "Date Records Needed By" and "Service Dates Between ___ to ___" which allow patients to specify both the scope and urgency of their request.

## 5. PATIENT-CENTEREDNESS

**Patient access framing:** This is a general-purpose release form, not specifically designed for patient self-access under HIPAA § 164.524. There is no mention of HIPAA Right of Access, patient rights, or the distinction between patient access requests and third-party releases. However, the "Personal Use" purpose checkbox and the "Release Information To" structure do accommodate patient self-requests.

**Delivery format:** No options for electronic delivery are offered. The form collects a fax number for the recipient but does not mention email, patient portal, CD/USB, or other electronic delivery methods. For a facility that uses MyChart (OCHIN), the absence of any portal-based option is a missed opportunity.

**Sensitive information handling:** The form includes checkboxes for Chemical Dependency/Substance Abuse, Psychological Testing/Mental Health, and HIV/AIDS Testing, with an opt-out mechanism: "All information regarding chemical dependency will be released unless you restrict by initialing: Do not release chemical dependency information / Do not release behavioral information." This opt-out (release-by-default) approach for sensitive categories is notable — it means a patient who checks "Routine Record Sets" may inadvertently authorize release of substance abuse or behavioral health information unless they actively initial the restriction lines.

**EHI/bulk data:** No mention of electronic health information export or bulk data requests.

**Fee information:** No fees are mentioned on the form, which is appropriate — fees should not appear on an authorization form — but there is also no reference to where a patient can learn about potential costs.

## 6. COMPLIANCE

**Expiration:** "Unless otherwise revoked, this authorization expires once the above-stated purpose is fulfilled or one year, whichever comes first." This is a reasonable and standard expiration clause.

**Revocation:** The form states patients must revoke "in writing" and "present my written revocation to the Medical Records Department." The requirement to "present" the revocation (rather than mail or fax it) could be read as requiring in-person delivery, though this may be unintentional phrasing.

**Signature:** Requires "Patient/Legal Gaurdian Signature" (note: "Guardian" is misspelled as "Gaurdian") and date. Also has a "Requester Name" field and "Authority to act on behalf of patient (attach document)" line for representative requests.

**No notarization or witness required:** Unlike form-2 (which includes a witness signature line), form-3 does not require a witness, reducing barriers.

**No submission channel specified:** The form header lists "Fax: 218-927-5319" but does not explicitly state how completed forms should be submitted (mail, fax, in-person, or otherwise). This is less clear than form-1, which explicitly provided the fax number in context.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Sensitive information defaults to release:** The form states "All information regarding chemical dependency will be released unless you restrict by initialing." This opt-out model for 42 CFR Part 2-protected substance abuse information is concerning — federal regulations require specific, informed consent for release of substance use disorder records, not a default-release-unless-opted-out approach.

### ⚠️ AMBIGUITIES

- **"Present" revocation language:** The phrase "present my written revocation to the Medical Records Department" could be interpreted as requiring in-person delivery, creating an unnecessary barrier for patients who cannot easily visit the facility.
- **No submission instructions:** The form does not tell patients how or where to submit the completed form. Only a fax number appears in the header, but it is not labeled as the submission channel.
- **No distinction between patient access and third-party release:** A patient requesting their own records under HIPAA Right of Access faces the same form — and the same opt-out burden for sensitive records — as any third-party release.

### ❌ ERRORS

- **"Gaurdian" misspelling:** The signature line reads "Patient/Legal Gaurdian Signature" — "Guardian" is misspelled.
- **Fillable fields not actually present:** The retrieval notes describe this as appearing to have "form fields (fillable PDF)," but metadata confirms 0 fillable fields. The ☐ checkboxes are Unicode characters in the text layer, not interactive form elements.

### ✨ BRIGHT SPOTS

- **Parenthetical plain-language guidance:** Each section header includes a clarifying question in parentheses (e.g., "WHO HAS THE INFORMATION YOU WANT RELEASED?"), making the form more approachable than typical legal-style ROI forms.
- **Online JotForm alternatives available:** While this PDF itself is not fillable, the organization also offers HIPAA-compliant online form submission via JotForm, providing a genuinely digital pathway for patients who can find it.
- **Single-page conciseness:** The entire authorization fits on one page without feeling cramped, which is respectful of patients' time.
