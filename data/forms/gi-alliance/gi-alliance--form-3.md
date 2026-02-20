# GI Alliance — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a scanned, image-only PDF titled **"Authorization to Release Medical Records to Third Party"** bearing the GI Alliance logo. It was downloaded from University GI's website (`https://www.universitygi.com/wp-content/uploads/2024/09/Medical-Release-Form.pdf`), an affiliate practice of GI Alliance. The PDF metadata title is "Scanned Image," created with NAPS2 scanning software on November 17, 2025.

The document is explicitly framed as a **third-party release** form — the title says "to Third Party," and the purpose checkboxes emphasize uses like "Continuing Medical Care," "Insurance," "Legal Purposes," "School," and "Military." There is a "Patient's Request" checkbox among the purpose options, but the form's design and language center on directing records to external recipients rather than enabling direct patient access.

This is the third of three forms found for GI Alliance. Form-1 is the canonical GI Alliance "Authorization to Use and Disclose Protected Health Information" (text-based, from the main gialliance.com site). Form-2 is a similar third-party release form from Granite Peaks GI (another affiliate, also a scan). Form-3 thus represents a local affiliate's variant of the GI Alliance release form ecosystem.

## 2. FINDABILITY

This form was **not findable from the main GI Alliance website**. It was located on the website of University GI (`universitygi.com`), a GI Alliance affiliate practice, via web search. The notes describe the GI Alliance patient forms page (`gialliance.com/patient-forms-and-prep/`) as "organized by local brand/location, making it somewhat complex to navigate." A patient seeking to release their own records from University GI would need to know to look at the affiliate's website rather than the parent organization's.

The file is hosted at a direct URL (`/wp-content/uploads/2024/09/Medical-Release-Form.pdf`) with no apparent linking from a patient forms landing page — suggesting it may be accessible via direct link or search but not prominently featured in site navigation.

## 3. TECHNICAL ACCESSIBILITY

This document has significant technical accessibility problems:

- **Image-only scan**: The PDF contains a single embedded image with zero extractable text (`full_text_chars: 1`, which is just a form-feed character). There is no text layer, no OCR layer, and zero fonts embedded.
- **No fillable fields**: `fillable_field_count: 0`. The form must be printed, filled by hand, and returned physically or via scan.
- **File size**: 301,396 bytes for a single-page document — relatively large due to the embedded image.
- **Not tagged**: The PDF is not tagged for accessibility, meaning screen readers cannot parse it at all.
- **Created by scanning**: NAPS2 is document scanning software, and the PDF metadata confirms this is a scan of a paper form, not a digitally authored document.

A patient using assistive technology would be completely unable to interact with this form. Even a sighted patient cannot fill it digitally — it requires printing, handwriting, and physical return or re-scanning.

## 4. CONTENT DESIGN

Based on visual inspection of the scanned form:

**Layout**: The form is a single page with a clear GI Alliance logo at top, the title prominently displayed, and content organized in logical sections. It uses a two-column box layout for "OBTAIN FROM" (left) and "DISCLOSE TO" (right) information, which is reasonably clear.

**Patient identification fields**: Name of Patient, Date of Birth, and Last 4 Digits of SSN. Collecting partial SSN is notable — this is unnecessary for a records release and creates a data security concern.

**Section structure**:
1. Authorization statement and patient identifiers
2. Obtain From / Disclose To addresses (boxed)
3. Purpose checkboxes (8 options including "Patient's Request" and "Other (specify)")
4. Date(s) of Treatment (with "Specific Dates" and "All Dates" options)
5. Specific Information Request (9 checkbox options: All Records, Abstract Record, Medication Records, Laboratory/Pathology Reports, Radiology Reports, Verbal Communication Only, Office/Progress Notes, Operative Notes, Itemized Billing Statements, plus Other)
6. Sensitive information disclosure (HIV/AIDs, Drug/Alcohol Use, Genetic Testing, Mental Health/Developmental Disabilities) — requires initialing

**Missing elements**: The visible portion of the scanned form appears to be **cut off at the bottom**. There is no visible:
- Signature line
- Date line for signature
- Authorization expiration clause
- Revocation instructions
- Notice about right to refuse signing
- HIPAA-required re-disclosure warning

This is a critical issue — either the scan truncated essential legal content, or the form itself omits required HIPAA authorization elements.

**Language**: The authorization preamble uses formal legal language: "I hereby authorize ___ d/b/a GI Alliance on behalf of itself and all other practices that are operation as a single HIPAA affiliated Covered Entity (collectively 'Provider') to transfer, release, or obtain information on:" This is dense but standard.

The sensitive information paragraph is clearly written: "I understand that my records may contain but are not limited to: history, diagnosis, and/or treatment of sexually transmitted diseases, drug and/or alcohol abuse, mental illness, psychiatric treatment, or genetic counseling. By initialing, I give my specific authorization for these records to be released."

## 5. PATIENT-CENTEREDNESS

This form is **poorly suited for patient access requests**:

- **Title signals third-party use**: "Authorization to Release Medical Records to Third Party" immediately frames this as a form for sending records to someone else, not for the patient to obtain their own records.
- **"DISCLOSE TO" section requires full address/phone/fax**: A patient requesting their own records would need to fill in their own contact information as if they were a third party, which is confusing and redundant (their info is already at the top).
- **Purpose framing**: While "Patient's Request" is an available checkbox, it's listed alongside "Insurance," "Legal Purposes," "School," and "Military" — suggesting the form's primary audience is patients authorizing disclosure to others, not patients exercising their HIPAA right of access.
- **Delivery method options**: "E-Delivery" and "Mail" are offered in the DISCLOSE TO box, which is a positive feature if the patient can use this form for self-access.
- **No fee disclosure**: There is no mention of fees, costs, or the patient's right to receive records at a reasonable cost-based fee.
- **No instructions for submission**: There is no information about where to send the completed form, no fax number, no email, and no mailing address for the HIM/medical records department.
- **No processing timeline**: No mention of how long the patient should expect to wait.

## 6. COMPLIANCE

Several compliance concerns arise:

- **Missing HIPAA-required authorization elements**: A valid HIPAA authorization under 45 CFR § 164.508 must include: (1) an expiration date or event, (2) the right to revoke, (3) a statement that treatment cannot be conditioned on signing, and (4) the potential for re-disclosure. None of these elements are visible in the scanned form. If the scan truncated a second section or the back of the page, these elements may exist but are not captured in this document.
- **Sensitive information handling**: The form correctly requires separate initialing for HIV/AIDS, drug/alcohol use, genetic testing, and mental health information, consistent with 42 CFR Part 2 and various state law requirements.
- **SSN collection**: Requesting "Last 4 Digits of SSN" on a records release form is not required by HIPAA and creates unnecessary exposure of sensitive identifiers. Most organizations use medical record numbers or date of birth for verification.
- **No distinction between patient access and third-party release**: HIPAA's Right of Access (45 CFR § 164.524) has different rules than authorization for third-party disclosure (45 CFR § 164.508). By using a single "Third Party" form for both purposes, the organization may be applying third-party authorization requirements to patient access requests — which could create illegitimate barriers.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Missing authorization elements (or truncated scan)**: The scanned form contains no visible signature block, expiration date, revocation instructions, or re-disclosure warning — all required under 45 CFR § 164.508 for a valid HIPAA authorization. If this form is genuinely incomplete (not just a bad scan), it fails to meet basic regulatory requirements.
- **Third-party form used for patient access**: The form is titled "Authorization to Release Medical Records to Third Party" yet includes a "Patient's Request" purpose option. Using a third-party authorization framework for patient access requests may impose requirements beyond what HIPAA allows for the Right of Access, such as requiring more granular authorization than is needed for a patient's own records.
- **SSN collection**: Requesting the last 4 digits of the patient's SSN is unnecessary for a records release, creates data security risk, and may deter patients who are uncomfortable providing this information.

### ⚠️ AMBIGUITIES

- **"Abstract Record" with asterisk**: One information-type checkbox is labeled "Abstract Record*" with a footnote: "*(Office notes, procedures, images, and test results only)." This is an unusual term that most patients would not understand — the distinction between "Abstract Record" and "All Records" is unclear.
- **"Verbal Communication Only" checkbox**: One of the specific information request options is "Verbal Communication Only." It is unclear what this means in the context of a medical records release — does it authorize a phone call instead of written records? This is confusing and potentially in tension with a patient's right to receive records in a usable format.
- **"OBTAIN FROM" vs "DISCLOSE TO"**: The form instructs the user to fill in both "OBTAIN FROM: (DO NOT LEAVE BLANK)" and "DISCLOSE TO: (DO NOT LEAVE BLANK)." For a patient requesting their own records, this two-party structure is unnecessarily confusing.

### ❌ ERRORS

- **Image-only scan with no text layer**: The PDF is a raw scan with absolutely no OCR or text layer applied. The `pdftotext` output is a single form-feed character. This renders the form completely inaccessible to screen readers, text search, and digital form-filling — a significant ADA/Section 508 concern.
- **Apparent scan truncation**: The form appears to end abruptly after the sensitive information section without a signature block or required legal notices, suggesting either the scan captured only part of the original document or the form itself is incomplete.

### ✨ BRIGHT SPOTS

- **Delivery method options**: The form offers "E-Delivery" and "Mail" as delivery methods, giving patients a choice that includes electronic delivery — a relatively uncommon feature on paper-based forms.
- **Granular record selection**: The form provides 9 specific information-type checkboxes plus "Other," allowing patients or requestors to tailor their request rather than forcing an all-or-nothing approach.
