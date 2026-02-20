# Lane County Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page **Authorization for Release of Health Information** — a general-purpose ROI form. The title on the document reads "AUTHORIZATION FOR RELEASE OF HEATH INFORMATION" (note the typo: "HEATH" instead of "HEALTH"). It is the only form found for Lane County Hospital. The form is structured as a third-party disclosure authorization: it asks the signer to "authorize [entity] to Disclose confidential health information from the above-named patient's health information to [name]." There is no separate patient-access-specific form; a patient requesting their own records would use this same document.

## 2. FINDABILITY

The form was exceptionally easy to find. A web search for Lane County Hospital medical records immediately identified the records request page at `https://www.lanecountyhospital.com/getpage.php?name=records`. From there, a single "Click Here" link leads directly to the PDF at `https://www.lanecountyhospital.com/docs/Authorization_for_release_of_health_information.pdf`. The URL is descriptive and human-readable. No login, patient portal, or bot-blocking was encountered. The retrieval notes describe the process as straightforward — essentially one search plus one click.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Full extractable text (3,379 characters). Not an image-only scan.
- **Fillable fields**: Zero fillable fields (`fillable_field_count: 0`). All blanks are represented as underscore lines, meaning the form must be printed and completed by hand or filled using a PDF annotation tool — neither is ideal.
- **File size**: 178,397 bytes (~174 KB) for a single page with no embedded images. This is moderately large for text-only content (7 fonts are embedded), but not unreasonable.
- **Digital design**: The form was clearly created digitally (not a scan), as evidenced by the clean text layer and multiple embedded fonts. However, the lack of fillable fields means it was designed with print-and-handwrite workflows in mind, not digital completion.
- **Submission**: The form directs patients to fax: "Please return form to Lane County Hospital Fax: (620) 397-2129 or Lane County Medical Clinic (620) 397-2264." No email, online portal, or mail address for submission is listed (though the revocation section does include a mailing address).

## 4. CONTENT DESIGN

- **Length**: One page. Concise and proportionate to the information needed.
- **Clarity**: The language is reasonably clear, mixing plain language with necessary legal boilerplate. Sentences like "I understand that I may refuse to sign this Authorization and that my treatment of payment for my treatment will not be affected..." are somewhat convoluted but largely standard for ROI forms.
- **Organization**: The form flows logically — patient identification at top, authorization body, record type checkboxes, legal disclosures, then signature block. The record-type checkboxes are arranged in a multi-column list of 16 categories (Anesthesia Record, Emergency Department Records, Operative Reports/Records, Psychotherapy Notes, Billing Records, etc.).
- **Layout**: For a single page, it is moderately dense. The underscore-line fields and checkbox list are legible but the form squeezes a lot of content into one page.
- **Fonts**: 7 fonts are used, suggesting some visual hierarchy (bold headers, body text, etc.).

## 5. PATIENT-CENTEREDNESS

- **Patient access vs. third-party release**: The form is designed for third-party disclosure. The structure — "I authorize [entity] to Disclose... to [name]" — frames the transaction as releasing records to someone else, not as a patient requesting their own records. A patient wanting their own records must awkwardly fill in themselves as both the authorizing party and the recipient.
- **Scope options**: Strong granularity. Patients can select from 16 record type checkboxes (Anesthesia, ED, Operative, Psychotherapy Notes, Billing, H&P/Discharge, Pharmacy, Respiratory Therapy, Consultation, Lab, PT/ST/OT, Diagnostic Tests, Nursing Notes, Physician Notes/Orders, Social Work). There is also a "treatment dates of" field to specify a date range.
- **Format options**: None mentioned. No option for electronic delivery, CD, or email.
- **Right of Access language**: The form states "I understand that I may see and copy the information described on this form as provided by federal regulations," which is a general nod toward the right of access. There is no explicit citation of HIPAA § 164.524.
- **EHI Export**: No mention of electronic health information export or bulk data access.
- **Sensitive information**: The form includes a blanket authorization for HIV, contagious disease, psychiatric, mental health, and substance abuse information, stating: "I authorize disclosure of that information." This is noted rather than giving the patient opt-in/opt-out granularity for sensitive categories.
- **Purpose field**: A single blank line for "Purpose" — open-ended, which is fine for flexibility but provides no guidance.

## 6. COMPLIANCE

- **Expiration**: The form includes an expiration field: "This authorization will expire on the following date or event: ___." A footnote adds: "Kansas SB 119 mandates that all authorizations are no longer valid after one year from the date of signature." This is a helpful state-law citation, though the footnote marker ("i") is oddly placed and its connection to the inline reference is not visually clear.
- **Revocation**: Clear language on how to revoke the authorization, including a named contact (Privacy Officer), mailing address, phone number, and fax number.
- **SSN collection**: The form requests a Social Security Number in the identification section. While not prohibited, collecting SSN on an authorization form is unusual and raises data security concerns — it is not required for HIPAA-compliant release processing and creates unnecessary risk if the form is faxed or mislaid.
- **Witness signature**: The form includes a witness signature line. This is not required by HIPAA for patient access requests and adds a procedural step that could delay or complicate the process, particularly for patients who lack a readily available witness.
- **Fees**: No mention of fees.
- **Submission restrictions**: Fax-only return is specified. No mention of in-person delivery, mail, or electronic submission.
- **"MARKETING AUTHORIZATION FORM" reference**: Near the bottom, the text "RESOURCE:" followed by "MARKETING AUTHORIZATION FORM" appears as what seems to be a cross-reference or footer artifact. Its purpose and relationship to this form is unclear.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Social Security Number requested**: The form includes a "SOCIAL SECURITY NUMBER" field in the patient identification section. SSN is not required for processing a records release under HIPAA, and its collection on a form routinely transmitted by fax creates unnecessary identity theft risk. This is a data minimization concern.
- **Witness signature line**: While not explicitly stated as "required," the presence of a dedicated witness signature line with date creates an implicit expectation that a witness is needed. HIPAA does not require a witness for valid authorization, and this could deter patients who are alone or in a hurry.

### ⚠️ AMBIGUITIES

- **"MARKETING AUTHORIZATION FORM" reference**: The text "RESOURCE: MARKETING AUTHORIZATION FORM" appears at the bottom of the form with no explanation. It is unclear whether this indicates the form was adapted from a marketing authorization template, refers to a companion document, or is a stale artifact. This could confuse patients who wonder whether signing this form authorizes marketing use of their data.
- **"Psychotherapy Notes" listed twice**: The checkbox list includes "Psychotherapy Notes" in both the first column (4th item) and the fourth column (4th item). It is unclear whether this is a duplication error or intentionally covers two distinct categories.
- **Footnote "i" marker**: The expiration field ends with a lowercase "i" that connects to the Kansas SB 119 footnote at the bottom, but the visual linkage is weak — it could easily be mistaken for a stray character.
- **Blanket sensitive-information authorization**: The form states patients "authorize disclosure of that information" for HIV, psychiatric, substance abuse, and other sensitive records, but does not offer the option to exclude specific sensitive categories. Patients may not realize they are authorizing release of all sensitive information by signing.

### ❌ ERRORS

- **Title typo — "HEATH" instead of "HEALTH"**: The form title reads "AUTHORIZATION FOR RELEASE OF HEATH INFORMATION." This is a clear typographical error that has apparently persisted since at least the form's date of "8-1-18."
- **Duplicate "Psychotherapy Notes" checkbox**: As noted above, this record type appears twice in the checkbox list, which appears to be a layout or copy-paste error.

### ✨ BRIGHT SPOTS

- **Excellent findability**: The form is one click from a clearly labeled Records Request page, with a clean, descriptive URL. For a small critical access hospital in rural Kansas, this is notably accessible.
- **Granular record-type selection**: Offering 16 distinct record-type checkboxes gives patients meaningful control over what is disclosed, which is better than many forms that offer only "all records" or a handful of broad categories.
- **Kansas SB 119 citation**: The footnote citing the one-year authorization expiration under state law is a useful compliance detail that many forms omit.
- **Clear revocation instructions**: The form names the Privacy Officer, provides a mailing address, phone, and fax for revocation — more complete contact information than many forms offer.
