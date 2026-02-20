# Evaluation: Community Health Center of Central Missouri — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is the **2023 version** of the organization's "Authorization for Use and Disclosure of Protected Health Information" — a general-purpose ROI form used for both releasing and obtaining records. It is a single-page PDF (82,830 bytes) sourced from `https://www.chccmo.org/wp-content/uploads/2024/02/Release-of-Records-updated-2023.pdf`. The filename indicates it was uploaded in February 2024.

This is the **older of two versions** found for this organization. Form-1 is a 2025 update that supersedes this form. Both serve the same function — general authorization for use/disclosure — but differ in layout and content details. The 2025 version (form-1) adds email as a delivery method, includes additional record-type checkboxes (e.g., visit notes, ultrasound, billing), and reorganizes the sender/receiver fields with clearer "FROM" and "TO" labels. This 2023 version remains publicly accessible on the website alongside the newer form, which could confuse patients who land on it via search.

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, a straightforward web search for the organization name plus "authorization release health information form" returned direct PDF links on chccmo.org. No site navigation, login walls, or bot-blocking were encountered. The form is hosted as a WordPress upload, publicly accessible at a permanent URL.

However, the URL path (`/wp-content/uploads/2024/02/Release-of-Records-updated-2023.pdf`) is a raw WordPress media library path rather than a patient-facing page with instructions. There is no landing page that contextualizes the form, explains when to use it, or distinguishes it from the 2025 version. A patient finding this via Google might not realize a newer version exists.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and functional. The full text (3,257 characters) was extracted cleanly.
- **Fillable fields**: **Zero** interactive form fields. Despite having blanks indicated by underscores (e.g., `Patient Name:______________`), none are implemented as fillable PDF fields. A patient must print, hand-write, and scan/deliver.
- **Font count**: 2 fonts, suggesting a simple layout.
- **Embedded images**: 1 (likely a logo or header graphic).
- **File size**: 82,830 bytes for a 1-page form — reasonable.
- **Digital-first design**: No. This is a print-oriented document. The use of underscored blank lines, the lack of fillable fields, and the instruction to "Hold for Pick-up" all signal a paper workflow. There is no electronic submission pathway mentioned.

## 4. CONTENT DESIGN

**Length**: One page — appropriate for a basic ROI authorization. The form packs a reasonable amount onto a single page without becoming overwhelming.

**Clarity**: The form is functional but mixes administrative and patient-facing content. The very first line — `"Processed by________ (initials) Requesting Provider____________"` — is an internal administrative field that appears before the form title, which may confuse patients about whom this form is for.

**Organization**: The form follows a logical flow: patient identification → authorization direction (release/obtain) → delivery method → recipient → information to be released → purpose → acknowledgment → signatures. The "To ________ release ________ obtain" construction requires the patient to fill in checkmarks in blanks, which is an awkward interaction pattern.

**Record type options**: The form lists 8 specific record categories via checkboxes:
- Discharge Summary, History/Physical Exam, Operative Report, Dental Records/Xrays, X-Ray Reports/Films, Medication Records, Lab/Pathology Reports, plus an "Other" free-text field.
- Each has an associated date field. Notably, "Dental Records/Xrays" is present in this version but handled differently in the 2025 update.

**Purpose of disclosure**: Five options — Changing Providers, Legal, Consultation, Insurance Purposes, Other — with instruction to "Circle One." Circling is another paper-workflow indicator.

**Delivery methods**: Three options — Mail, Fax, Hold for Pick-up. **No email or electronic delivery option** is offered (the 2025 version adds email).

**Clinic locations**: Four locations are explicitly listed with addresses (Jefferson City, Linn, California, Fulton), which helps patients identify their clinic.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form does **not** distinguish between a patient requesting their own records and a third-party release. The "To/From" structure and "release/obtain" language treat all disclosures identically. There is no specific pathway or simplified process for patients exercising their HIPAA right of access under 45 CFR § 164.524.

**Scope options**: Adequate. Patients can select specific record types and associate date ranges with each. However, there is no "entire record" checkbox option (the 2025 version adds this), and no date range shortcut like "last 12 months."

**Format options**: Very limited. Only physical delivery methods are available (mail, fax, hold for pickup). No electronic delivery, no patient portal mention, no email option.

**Right of Access language**: None. The form does not reference HIPAA § 164.524, patient rights to access their own records, or any patient rights beyond the general acknowledgment section.

**EHI Export awareness**: None. No mention of electronic health information export or bulk data.

**Acknowledgment section**: The "AKNOWLEDGEMENT OF UNDERSTANDING" [sic] section is dense but covers important points: the authorization expires in 1 year, can be revoked in writing, information may be re-disclosed by the recipient, healthcare won't be conditioned on signing, and the request will be acted on within 30 days. It also notes the patient "may be required to pay the cost of preparing and mailing copies" but exempts "uses and disclosures for the purpose of treatment, payment, and operations."

## 6. COMPLIANCE

**Expiration**: The authorization expires in 1 year from signing. This is reasonable and standard.

**Revocation**: Patients can revoke "at any time by notifying the providing organization in writing." This is HIPAA-compliant.

**Fee disclosure**: The form states patients "may be required to pay the cost of preparing and mailing copies supervising my inspection, or preparing a summary except for uses and disclosures for the purpose of treatment, payment, and operations." This is somewhat vague — it does not specify fee amounts or reference HIPAA's reasonable cost-based fee limits. The phrasing about TPO exemption is odd in context (HIPAA fee limits apply to patient access requests regardless of purpose; the TPO distinction is more relevant to whether an authorization is needed at all).

**Witness requirement**: The form includes a "Witnessed By" line with a date field. While not labeled as mandatory, the presence of a witness signature line creates an implicit expectation that could deter patients from submitting the form without finding a witness — an unnecessary barrier not required by HIPAA for patient access requests.

**Sensitive information bundling**: The acknowledgment states the release "may include records relating to care and treatment for mental health conditions, care and treatment for dug or alcohol abuse, HIV testing, infections status, care and treatment for AIDS, or information related to genetic testing." This blanket disclosure statement bundles all sensitive categories together rather than allowing patients to opt in or out of specific sensitive record types — which may conflict with 42 CFR Part 2 requirements for substance use disorder records that mandate specific, granular consent.

**30-day response time**: The form states "my request will be acted upon within 30 days," which aligns with HIPAA's 30-day requirement for access requests.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No electronic delivery option**: Only mail, fax, and hold-for-pickup are offered — no email or electronic access. For a patient exercising their right of access, HIPAA requires providers to deliver records in the format requested by the patient if readily producible, including electronically. The absence of any electronic option is a significant barrier.
- **Blanket sensitive-information bundling**: The form bundles mental health, substance abuse, HIV/AIDS, and genetic testing records into a single all-or-nothing disclosure statement rather than providing granular consent options. This likely fails to meet 42 CFR Part 2 requirements for substance use disorder records.

### ⚠️ AMBIGUITIES
- **"Release" vs. "obtain" distinction**: The instruction `"To ________ release ________ obtain my protected health information"` requires patients to mark one, but provides no explanation of the difference or when each applies. A patient requesting their own records might not know which to choose.
- **Fee language**: The statement about costs "except for uses and disclosures for the purpose of treatment, payment, and operations" is confusing in the context of patient access — it's unclear whether a patient requesting their own records would be charged.
- **Witness line ambiguity**: The "Witnessed By" line is present but not explicitly marked as required or optional. Patients may delay or avoid submitting because they believe a witness is needed.

### ❌ ERRORS
- **"AKNOWLEDGEMENT"**: The heading is misspelled — should be "ACKNOWLEDGEMENT." This same error persists in the 2025 version (form-1).
- **"dug or alcohol abuse"**: The text reads "care and treatment for dug or alcohol abuse" — "dug" should be "drug." This is a clear typographical error.
- **"infections status"**: Should likely read "infection status." Another typo in the sensitive-information clause.
- **Missing comma/phrasing**: "I understand this use or disclosure of information, there will be no conditions placed on my health care of payment for my health care" is grammatically garbled. It should read something like "I understand that by signing or not signing this authorization, no conditions will be placed on my health care or payment for my health care."
- **"copies supervising my inspection"**: The phrase "pay the cost of preparing and mailing copies supervising my inspection" appears to be a formatting or OCR error — it should likely read "copies, supervising my inspection, or preparing a summary."

### ✨ BRIGHT SPOTS
- **Clinic locations listed**: All four clinic locations with full addresses are printed directly on the form, making it easy for patients to identify where to submit.
- **30-day response commitment**: The form explicitly states the request will be acted upon within 30 days and that the patient will be notified if access is denied — with a right to request review. This is more transparent than many ROI forms.
