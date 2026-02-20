# Gritman Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page **"Authorization to Release Protected Health Information"** form (titled exactly that in the header). It is a general-purpose ROI form that serves both patient access requests and third-party release scenarios — the form includes both "RELEASE TO" and "RELEASE FROM" sections. The file is identified internally as `Materials:9407` and was revised `4/1/2024`.

This is the **only form found** for Gritman Medical Center. There is no separate patient-access-specific form; patients requesting their own records and those authorizing release to a third party use the same document. The form covers both the hospital and associated clinics — a checkbox at the top lets the patient select "Hospital" or "Clinic" with a fill-in line.

## 2. FINDABILITY

The form was **easy to locate**. According to the retrieval notes, it is linked directly from the "My Health Records" page at `https://www.gritman.org/patients-visitors/my-health-records/`, reachable in **2 clicks from the homepage** (Patients & Visitors → My Health Records). The source URL (`Authorization-to-Release-Protected-Health-Information_clinics.pdf`) is descriptive, though the `_clinics` suffix is slightly confusing since the form itself serves both hospital and clinic contexts.

A targeted web search for `Gritman Medical Center "medical records" "release form"` also returned the form directly. The first search using `filetype:pdf` did not return a direct hit, but the second attempt succeeded. Overall, findability is strong for a small critical access hospital.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (4,164 characters) is fully extractable via `pdftotext`, with no OCR artifacts or garbled text.
- **Fillable fields**: The form has **63 fillable form fields**, indicating a well-built interactive PDF. However, the `fillable_field_names` array is empty, meaning the fields lack accessible names — a significant accessibility gap for screen readers and automated form processing.
- **File size**: 252,109 bytes (≈246 KB) for a single page with no embedded images. This is moderately large for a text-only single-page form (likely due to embedded fonts — 9 fonts are present).
- **Format**: PDF with text layer, not an image-only scan. This is a **digitally designed form**, not a scan of a paper document.
- **Font count**: 9 fonts for a single-page form is somewhat high but not problematic.

The form is clearly designed for digital use with fillable fields, which is a meaningful positive. The lack of field names is a missed accessibility opportunity.

## 4. CONTENT DESIGN

**Length**: One page. This is appropriate — the form is compact yet covers all necessary elements.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient Information (name, DOB, address, phone)
2. Release To / Release From parties
3. Delivery method
4. Purpose
5. Treatment dates
6. Information to be released/disclosed (with specific report types)
7. "I Understand That" authorization language
8. Signature and date

**Clarity**: The form uses a mix of plain language and moderate legal/medical terminology. The "I UNDERSTAND THAT" section is dense but reasonably clear. The sensitive-information disclosure statement is notably specific: *"I understand that the information to be released may include a diagnosis or reference to the following condition(s): behavioral health services/psychiatric care, sickle cell anemia, genetic testing, acquired immune deficiency syndrome (AIDS) or human immunodeficiency virus (HIV), or drug and/or alcohol abuse."*

**Layout**: Being a single page, the form is necessarily compact. The checkbox-driven layout for report types (Billing Record, Cardiac Studies, Clinic/Office Visit, etc.) is organized in a **4-column grid** with 17 specific report categories, which is granular and helpful. However, fitting all of this on one page likely makes the form feel cramped.

**Readability**: The extracted text flows well, suggesting reasonable font sizes. The checkbox labels are concise and self-explanatory.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form does **not distinguish** between these scenarios. A patient requesting their own records fills out the same form as someone authorizing release to a third party. There is no specific language addressing the patient's HIPAA Right of Access (45 CFR § 164.524), and no reference to HIPAA at all by citation.

**Scope options**: Strong. Patients can specify:
- Entire visit records or specific report types (17 categories)
- Date ranges (`Treatment Dates From ___ to ___`), all dates, or "Major Documents for the Last 3 Years"
- Specific record categories including: Billing Record, Discharge Summary, ED Reports, Cardiac Studies, Laboratory, Immunization Record, Radiology Reports, Radiology Image CD, Mental Health/Psych, Genetic, Operative, Therapy, History & Physical, Consultation, Clinic/Office Visit, "Pertinent Info," and Other

**Delivery options**: Five methods are offered: Standard Mail, Fax, Email, Pickup, and Certified Mail (with a note of "Add'l Charge" for certified mail). Email availability is a positive for digital access.

**Fee transparency**: The form notes "Continuation of Care (no fee)" as a purpose option, implying other purposes may incur fees, but does not state what those fees are. The certified mail "Add'l Charge" note is similarly vague. There is no fee schedule or reference to where patients can find one.

**EHI Export / Bulk data**: No mention of electronic health information export, bulk data, or patient portal alternatives.

## 6. COMPLIANCE

**Expiration**: The authorization auto-expires at **90 days** by default, with an option to specify a different date: *"this authorization will automatically expire 90 days from the date signed below, unless I request an expiration date more or less than 90 days."* However, the form also states *"Expiration Date:________ (no greater than one year)"*, capping the maximum at one year.

**Revocation**: Clear revocation language is provided: *"You may revoke this authorization in writing at any time by sending written notification to Privacy Officer at Gritman Medical Center, 700 South Main St., Moscow, ID 83843."*

**Non-conditioning**: The form includes appropriate language: *"Your refusal to sign will not affect your ability to obtain treatment or payment or your eligibility for benefits."*

**Re-disclosure warning**: Present: *"If the person or entity receiving this information is not a health care provider or health plan covered by federal privacy regulations, the information described above may be disclosed to other individuals or institutions and no longer protected by these regulations."*

**Right to inspect**: Mentioned: *"You may inspect or copy the protected health information to be used or disclosed under this authorization."*

**Submission method**: The form does not specify how it must be submitted. There is no explicit in-person-only requirement, which is good, but there is also no guidance on whether it can be emailed, faxed, or mailed back.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release**: The form is titled "Authorization to Release Protected Health Information" and treats all requests identically. A patient requesting their own records under HIPAA's Right of Access has stronger legal protections (e.g., fee limits, 30-day response deadline) than a third-party release, but this form doesn't acknowledge that distinction.
- **Fee language is vague**: "Continuation of Care (no fee)" implies fees for other purposes, but no fee schedule is provided or referenced. A patient requesting records for "Personal" use cannot determine cost from the form alone.
- **"Add'l Charge" for certified mail** is not quantified — the patient has no way to know the cost before selecting this option.
- **Submission instructions are absent**: The form provides Gritman's phone and fax numbers in the header, but gives no explicit guidance on how to return the completed form (mail it? fax it? bring it in? email it?).

### ❌ ERRORS

- **Garbled text in "Other" purpose field**: The extracted text shows `❑ Other\b������������������������` — the "Other" purpose checkbox's fill-in field renders as garbled characters in the text layer, suggesting a form field encoding issue.
- **"*1RoI*" and "*1ROI*" artifacts**: These appear near the top of the extracted text and seem to be internal barcodes or form identifiers that are visible in the text layer. While likely intentional for internal tracking, they appear as unexplained artifacts to anyone reading the PDF text.

### ✨ BRIGHT SPOTS

- **Email delivery option**: Offering email as a delivery method is a meaningful accessibility feature, especially for a small rural critical access hospital where patients may live far from the facility.
- **Granular record type selection**: The 17-category checkbox list for specific report types is unusually detailed, giving patients fine-grained control over what is released.
- **"Major Documents for the Last 3 Years"** is a thoughtful shortcut option that saves patients from having to know exact treatment dates.
- **Recently revised (4/1/2024)**: The form is current, suggesting active maintenance by the HIM department.
- **63 fillable fields**: A well-built interactive PDF that patients can complete digitally before printing or submitting.
