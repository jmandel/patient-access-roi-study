# Evaluation: Boone County Health Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is the **current version** of Boone County Health Center's "Authorization for Release of Protected Health Information" form. It is a 2-page document converted from a Microsoft Word .docx file (originally hosted at `https://boonecohealth.org/wp-content/uploads/2026/02/Auth-for-Release-of-PHI.docx`) to PDF via LibreOffice for this study.

The organization has three downloadable documents:
- **form-1.pdf**: An older (August 2017) version of the ROI form, still accessible at its direct URL but no longer linked from the website. It uses the title "Release of Health Information" and lists a different street address (723 West Fairview Street).
- **form-2.pdf** (this document): The current ROI form, uploaded February 2026, titled "Release of Protected Health Information," listing the updated address (1173 South 8th Street) and adding an email address and encrypted email delivery option.
- **form-3.pdf**: A "HIPAA Contact Information" form for designating authorized contacts — explicitly not an ROI form ("This is not a substitute for a Release of Information form to obtain medical records.").

Form-2 is the primary document a patient would use to request their records today.

## 2. FINDABILITY

Per the retrieval notes, the form was **findable through basic web search** and listed on the Patient Forms section of the website (Patient Resources > General Information). The retrieval difficulty was rated "Easy."

However, there are complications:
- The form is published as a **.docx file**, not a PDF. Patients clicking the link download a Word document, which requires Microsoft Word, Google Docs, or another compatible application to open. This is an unusual and less accessible format choice.
- The **older PDF version** (form-1) is still accessible at its direct URL and may surface in search results, potentially confusing patients about which version is current.
- The website required **JavaScript rendering** to see the form links — a static `curl` returned no form links, meaning patients using simplified browsers or screen readers without JavaScript support may not find the forms.

## 3. TECHNICAL ACCESSIBILITY

**Format issues:**
- The native format is **.docx**, not PDF. The evaluated PDF is a LibreOffice conversion created for this study; patients would receive the .docx file directly.
- The converted PDF has **0 fillable fields** (`fillable_field_count: 0`). All form fields are represented as blank lines (e.g., `_____________________________________________________`), meaning patients must print, hand-fill, and return the form.
- The document has a **text layer** (not image-only), which is good for accessibility.
- **2 pages**, 78KB file size — compact and reasonable.
- **5 fonts** and **1 embedded image** (likely the facility logo/letterhead).

**Digital workflow:** There is no way to fill this form electronically. The .docx format theoretically allows typing into it, but the form uses underscores as fill lines rather than Word form fields, so even in Word the experience would be poor (typing over underscores, dealing with line formatting).

**Contact information provided:** The form header includes phone numbers (hospital: 402-395-2191, clinic: 402-395-5013), fax (402-395-2180), and email (Roi@boonecohealth.org). The email address is a positive signal that electronic submission may be possible, though the form doesn't explicitly state that completed forms can be emailed.

## 4. CONTENT DESIGN

**Structure and layout:**
The form follows a logical flow: facility header → patient identification → release direction → purpose → date range → record types → sensitive information authorization → delivery format → legal acknowledgments → signatures. This is a standard and sensible organization.

**Patient identification fields:**
- Patient Name (with note: "please list previous last name if applicable")
- DOB, Address, Phone, City/ST/ZIP
- No field for Medical Record Number (MRN), unlike the older form-1 which included MRN

**Release direction:**
The form uses a "Check One" approach for directionality: `"________ Release Information To:"` OR `"________ Obtain Records From:"`. This dual-purpose design means the same form serves both outbound release and inbound record requests. While efficient, it could confuse patients who simply want their own records — neither option maps cleanly to "give me my records."

**Purpose of Disclosure:**
Only two options: `"____ Patient Request"` and `"____Other"`. This is minimalist compared to form-1, which listed Transfer of Care, Consultation, Referral, Personal Record, Disability, and Other.

**Date range:**
Two options: a date range (`"______________to_____________"`) or `"____All Dates of Service"`. The form notes: `"copy fees may apply in accordance with Nebraska law"`.

**Record types (10 checkbox options):**
All, Clinic Notes, Laboratory, Cardiac (Specify), Immunizations, Therapy OT/PT/ST, Hospital Notes, Radiology, Operative Record, Other (Specify). This is a reasonable set of categories.

**Sensitive information:**
Three categories requiring separate initials: Substance Abuse, Mental Health, HIV/AIDS related information. The instruction text is garbled in the extracted text: `"I specifically Authorize the release of Information relating to: authorize. Please initial each you"` — this appears to be a formatting artifact where the instruction text was split across lines in the .docx layout, resulting in a disjointed sentence.

**Delivery format options (5 choices):**
Paper Copies, Fax, CD, Encrypted Email, Other (if feasible). The addition of **Encrypted Email** is a notable improvement over the older form-1.

**Legal acknowledgments (4 bullet points):**
1. Refusal to sign won't affect treatment
2. Re-disclosure warning
3. Authorization effective for **twelve (12) months** from date of signature; revocable in writing to "BCHC's Heath Information Management (HIM) Department"
4. Patient has read/received a copy

**Signature section:**
- Patient signature with Relationship to Patient and Date
- "Signature of Witness (Employee): Must attach photocopy ID for person responsible for picking up records"

## 5. PATIENT-CENTEREDNESS

**Strengths:**
- The opening sentence clearly explains what signing the form does: "you permit Boone County Health Center and/or Medical Clinics (BCHC) to disclose your protected health information as described below."
- The "Patient Request" purpose checkbox directly serves patients requesting their own records.
- Multiple delivery formats including encrypted email give patients options.
- The ROI-specific email address (Roi@boonecohealth.org) suggests a dedicated process for handling requests.
- Copy fee language references Nebraska law rather than stating a specific dollar amount, which is more flexible (though less transparent) than the older form's "$0.25 per page" disclosure.

**Weaknesses:**
- The form is **not fillable electronically** — patients must print and hand-fill it.
- The form is published as a **.docx file**, which many patients may not be able to open.
- The **release direction framing** ("Release Information To" vs. "Obtain Records From") is confusing for patient self-requests. If a patient wants their own records, do they check "Release Information To" and write their own name? This is not intuitive.
- There is **no instruction text** explaining how to submit the completed form (mail, fax, email, in-person?). The header provides contact information but doesn't say "return this form by…"
- The **witness/photo ID requirement** ("Must attach photocopy ID for person responsible for picking up records") is ambiguous — does this apply only to in-person pickup, or to all requests? It appears on a line labeled "Signature of Witness (Employee)" suggesting it's an internal administrative instruction, but its placement could confuse patients.
- No mention of **turnaround time** or what to expect after submission.
- No mention of the patient's **right to access** their records under HIPAA.

## 6. COMPLIANCE

**Expiration:** The authorization has a **fixed 12-month expiration** from the date of signature. The older form-1 left the duration as a fill-in blank (`"_____ months"`). A 12-month fixed duration is reasonable and compliant with HIPAA, which requires authorizations to include an expiration date or event.

**Revocation:** The form correctly states the right to revoke in writing, with the standard exception for actions already taken.

**Treatment conditioning:** The form correctly states: "My refusal to sign this authorization will not affect my ability to obtain treatment at BCHC."

**Re-disclosure warning:** Present and appropriately worded.

**Sensitive information:** Substance abuse, mental health, and HIV/AIDS require separate initials, which is consistent with 42 CFR Part 2 and Nebraska state law requirements.

**Copy fees:** The form states "copy fees may apply in accordance with Nebraska law" next to the date-of-service section. This is vague — it doesn't specify the amount or distinguish between patient-access fees (limited under HIPAA to a reasonable, cost-based fee) and third-party release fees.

**Photo ID requirement:** The line "Must attach photocopy ID for person responsible for picking up records" could be interpreted as requiring identity verification for in-person pickup, which is reasonable. However, its placement and wording are ambiguous about whether ID is required for all requests.

**Typo in legal text:** "BCHC's **Heath** Information Management (HIM) Department" — "Heath" should be "Health."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Form published only as .docx**: The sole current version of the ROI form is distributed as a Microsoft Word document, which requires specific software to open. This creates a meaningful accessibility barrier for patients without Word-compatible applications, particularly those using mobile devices, older computers, or public library terminals. PDF would be a universally accessible alternative.

### ⚠️ AMBIGUITIES

- **Release direction confusion for patient self-requests**: The form asks patients to check either "Release Information To" or "Obtain Records From" — neither option clearly maps to "I want a copy of my own records." A patient requesting their own records would presumably check "Release Information To" and list themselves, but this is never stated.
- **Copy fee language**: "Copy fees may apply in accordance with Nebraska law" doesn't distinguish between patient-access requests (subject to HIPAA's reasonable cost-based fee limits) and third-party releases (which may be charged differently). The older form-1 specified "$0.25 per page plus postage" — the current form's vagueness could leave patients uncertain about costs.
- **Photo ID / witness requirement**: The line "Must attach photocopy ID for person responsible for picking up records" appears under "Signature of Witness (Employee)" but it's unclear whether this applies only to in-person pickup or to all requests, and whether it's an instruction to staff or a requirement imposed on patients.
- **Garbled sensitive-information instruction**: The extracted text reads "I specifically Authorize the release of Information relating to: authorize. Please initial each you" — the instruction to initial has been split and garbled, likely a .docx formatting issue where text wraps oddly. The intended meaning is recoverable but the presentation is confusing.

### ❌ ERRORS

- **Typo in legal section**: "BCHC's **Heath** Information Management (HIM) Department" should read "**Health** Information Management."
- **Stale older form still accessible**: Form-1 (August 2017) remains at its direct URL (`Release_of_Health_Information_Form_August_2017.pdf`) with a different street address (723 West Fairview Street vs. the current 1173 South 8th Street). Patients finding this via search could submit to the wrong address or use an outdated form.

### ✨ BRIGHT SPOTS

- **Dedicated ROI email address**: `Roi@boonecohealth.org` signals a specific, staffed intake point for records requests — unusual for a small critical access hospital and potentially very helpful for patients.
- **Encrypted email delivery option**: Adding "Encrypted Email" as a delivery format is a forward-looking choice that balances patient convenience with privacy protection. Many larger health systems don't offer this.
- **Concise, readable legal acknowledgments**: The four bullet points covering treatment conditioning, re-disclosure, expiration/revocation, and receipt of copy are clearly written and avoid excessive legalese.
