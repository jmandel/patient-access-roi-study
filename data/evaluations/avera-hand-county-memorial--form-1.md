# Evaluation: Avera Hand County Memorial Hospital — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a system-wide **ROI (Release of Information) Authorization form** titled "Authorization - Release Of Medical Records Information," identified as **Form 8691-04 L6 PS (English) (Rev. 2/26)**. It is produced by the Avera Health system, not specific to Hand County Memorial Hospital. It is the only form found for this facility; Hand County Memorial Hospital does not publish a facility-specific ROI form. The Avera medical records page also lists several facility-specific variants (for Heart Hospital, Access Health Worthington, Windom, Spencer, Lakes Regional, Osceola), but Hand County is not among them and is expected to use this general form.

The form is a single-page PDF (139,493 bytes) with a text layer, 7 fonts, no embedded images, and no fillable fields. It is a digitally generated document (not a scan).

## 2. FINDABILITY

The form was **not directly discoverable** from the Avera Hand County Memorial Hospital facility profile page. It was located through:

- Web searches for "Avera medical records release form authorization PDF"
- Navigation to the parent system's medical records page at `https://www.avera.org/patients-visitors/patient-information/request-medical-records/`
- Clicking the "HIPAA Authorization for Disclosure of Health Information – English" link

A patient starting at the Hand County facility profile page would need to navigate to the parent Avera system's patient information section. The retrieval notes indicate the form required a site-scoped search or browsing the parent system's pages — a moderately difficult path for someone unfamiliar with the Avera system structure. Additionally, the Avera website **blocks curl/wget requests entirely** (returns "Access Denied"), meaning automated or assistive-technology-based downloads may fail; the PDF had to be retrieved via browser JavaScript.

The source URL (`medical-records-release-8691-04.pdf`) is descriptively named, which is a minor positive.

## 3. TECHNICAL ACCESSIBILITY

**Strengths:**
- The document has a **real text layer** (not an image-only scan), with 4,261 characters of extractable text.
- It is a **single page** and a reasonable file size (~139 KB) for a text-based PDF.
- It was **digitally created**, not scanned, using 7 fonts for clear visual hierarchy.

**Weaknesses:**
- The form has **zero fillable fields** (`fillable_field_count: 0`). Despite being digitally generated, it is designed as a print-and-handwrite form. Patients cannot complete it electronically — they must print, hand-fill, and submit physically or by fax.
- No embedded images (no logos or visual elements), which contributes to compactness but also an austere appearance.

## 4. CONTENT DESIGN

The form packs a substantial amount of content into a single page, organized into labeled left-margin sections: Patient Identification, Provider, Disclose Information to, Information to be Disclosed, Service Dates, Form and Format, Substance Abuse Documentation, Purpose of Disclosure, Expiration Date, Revocation, and Authorization/Signature.

**Clarity:** The language is a mix of moderately plain language and legal/regulatory references. Sections like Revocation are clearly written: "I understand I have a right to revoke this authorization at any time by presenting a written revocation to the Medical Record Department." The substance abuse section includes a regulatory warning: "42 CFR PART 2 PROHIBITS UNAUTHORIZED USE OR DISCLOSURE OF THESE RECORDS." The authorization block includes HIV/AIDS disclosure language and redisclosure warnings, which are legally required but dense.

**Layout:** Fitting all content onto a single page means the form is likely visually cramped, with limited whitespace. The section labels in the left margin help with navigation, but the sheer density of content — patient demographics, provider info, recipient info, disclosure options, format options, substance abuse, purpose, expiration, revocation, authorization, and signatures — on one page trades readability for brevity.

**Disclosure options** are provided via checkboxes: "Standard chart copy (Includes Demographic Face Sheet, Physician Dictated Reports, All Test Results)," "X-ray and imaging reports," "Entire record (charges may apply)," and "Other." Purpose options include "Continued healthcare," "Completion/payment," "Personal," and "Other."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose authorization form** for disclosure to any party, not a patient-access-specific form. The "Provider" section asks "Who is releasing information?" and the "Disclose Information to" section asks "Where is information to be sent?" — framing the patient as an intermediary authorizing a transfer between two entities, rather than as a person requesting their own records. There is no separate, simplified pathway for a patient requesting records for themselves.

**Scope options:** Patients can specify record types (standard chart copy, x-ray/imaging, entire record, other) and date ranges ("Dates of service from ___ to ___"). This is adequate.

**Format options:** The form offers five format choices: "Paper (pickup or mail)," "Fax," "Flash Drive," "CD-ROM (compact disc)," and "E-mail." The email option includes an encryption notice: "All medical records requested in electronic format will be encrypted unless specifically requested otherwise by the patient." There is a specific initial line for requesting unencrypted records. This is a relatively robust set of electronic delivery options.

**Right of Access language:** The authorization block explicitly references **45 CFR 164.524**: "I understand I may inspect or obtain copies of the information to be used or disclosed, as provided in 45 CFR 164.524." It also provides a contact number: "Avera Medical Records at 833-821-9944 or Fax 605-322-8200."

**EHI Export awareness:** There is no mention of electronic health information export, bulk data, patient portal downloads, or TEFCA/API-based access.

## 6. COMPLIANCE

**Fees:** The form notes "charges may apply" for the "Entire record" option but does not disclose fee amounts. No upfront fee schedule is provided.

**Expiration:** The form states: "If I fail to specify an expiration date, event, or condition, this authorization shall be in effect for one year from this date, for records generated as a result of services occurring on or prior to this date." A one-year default expiration is reasonable and standard.

**Revocation:** Revocation rights are clearly stated. The form requires "presenting a written revocation to the Medical Record Department" — written revocation is a standard, HIPAA-compliant requirement.

**SSN collection:** The form asks for "Social Security Number (last 4 digits)," which is somewhat unusual for a patient access request. While asking for only the last 4 digits mitigates risk compared to full SSN, this is not required by HIPAA and could deter privacy-conscious patients.

**Witness signature:** The form includes a "Signature of Witness" line, which is not required by HIPAA for patient access requests. This could create a practical barrier if patients interpret it as mandatory.

**Submission method:** The form does not specify how to submit the completed form. There is no mailing address, fax number, email address, or portal submission option printed on the form itself (beyond the general Avera fax number in the authorization block). A patient would need to determine where to send the form independently.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Witness signature line:** The form includes a "Signature of Witness" line with a date field, but does not explain whether a witness signature is required or optional. If interpreted as mandatory, this creates an unnecessary barrier — HIPAA does not require witnessed authorization for patient access.

- **No submission instructions:** The form provides no instructions on where or how to submit the completed authorization. The Avera Medical Records phone number (833-821-9944) and fax (605-322-8200) appear in the authorization text block but are framed as contacts for questions about disclosure, not as submission destinations.

- **"Charges may apply" without detail:** The note "(charges may apply)" next to "Entire record" provides no fee schedule, amount range, or reference to where patients can learn about costs. This is vague enough to discourage patients from requesting complete records.

### 🚩 RED FLAGS

- **SSN collection (last 4 digits):** The form requests the patient's last 4 digits of their Social Security Number. This is not required by HIPAA for access requests and creates a data minimization concern. Patients who are uncomfortable providing any portion of their SSN may be deterred from submitting the form.

### ✨ BRIGHT SPOTS

- **Multiple electronic delivery options:** Offering email, flash drive, and CD-ROM alongside paper and fax is notably comprehensive. The encryption-by-default policy with an explicit opt-out for unencrypted delivery ("If you want your records sent unencrypted please initial here") is a thoughtful, patient-respecting approach that balances security with patient autonomy.

- **Explicit 45 CFR 164.524 reference:** The form directly cites the HIPAA Right of Access provision, which helps educate patients about their rights and signals regulatory awareness.

- **Single-page efficiency:** Despite covering all required authorization elements, the form fits on a single page, reducing printing burden and cognitive overload compared to multi-page forms.
