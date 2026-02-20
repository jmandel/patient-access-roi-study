# Evaluation: Mercy Health - Springfield Regional Medical Center — Form 4

## 1. DOCUMENT IDENTIFICATION

Form-4.pdf is a **Springfield-specific "Authorization for Release of Protected Health Information"** (form number MHP 0785 Rev 1/19, revised January 2019). It is one of four documents retrieved for this organization:

- **Form 1**: A patient-access-specific form from mercy.**net** (a different Mercy organization based in Missouri — not this facility's parent system).
- **Form 2**: A structurally identical authorization form for the Youngstown region (MHP 0782 Rev 1/19), listing St. Elizabeth Boardman, St. Elizabeth Youngstown, and St. Joseph Warren hospitals.
- **Form 3**: A system-wide authorization form (MHP 0786, printed 2024-01-17) that is effectively an image-only scan with only 46 characters of extractable text. This is the version currently linked on the mercy.com medical records page.
- **Form 4 (this document)**: The Springfield-specific version listing "Springfield Regional Medical Center" and "Urbana Hospital." It is a near-identical template to Form 2 (Youngstown) with facility names swapped.

Form 4 is the **most relevant document** for this specific facility, but it is not the form a patient would most likely encounter — that would be the image-only Form 3, which is the one actually linked from the website.

## 2. FINDABILITY

This form is **not directly linked** from the Mercy Health medical records request page (https://www.mercy.com/patient-resources/medical-record-requests). The linked form is the system-wide image-only scan (Form 3). This Springfield-specific version was only discovered through **URL pattern probing** — testing predictable URL patterns like `mercy.com/-/media/mercy/patient-resources/medical-records-requests/springfield.ashx` after finding a Youngstown-specific version at a parallel URL.

A patient navigating the website would find the medical records page, which offers three pathways: MyChart, eRequest (via Swellbox/Datavant), and a downloadable paper form. The downloadable form link leads to the image-only scan, not this text-based Springfield version. To find this specific form, a patient would need to guess the URL — an unreasonable expectation.

The source URL (`springfield.ashx`) is descriptive but not discoverable. The filename provides no indication of content or form version.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Yes — full text is extractable (5,152 characters). This is a significant advantage over Form 3 (the linked system-wide version), which is an image-only scan.
- **Fillable fields**: Zero. Despite being a digitally-generated PDF (not a scan), the form has no interactive fields. All checkboxes and blanks must be filled by hand after printing.
- **File size**: 280,841 bytes (281 KB) for a single text-only page with no embedded images — somewhat large for its content, suggesting embedded fonts or other overhead.
- **Fonts**: 8 fonts embedded.
- **Digital-first design**: The form was clearly created digitally (not scanned), with clean text layout and checkboxes rendered as form elements. However, the lack of fillable fields means it functions as a print-and-fill document despite its digital origin.

## 4. CONTENT DESIGN

**Length**: One page — compact and efficient. All content fits on a single page, though this comes at the cost of dense text and small legal paragraphs at the bottom.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient identification (name, DOB, last 4 SSN, phone, address)
2. Facility selection (Springfield Regional / Urbana Hospital / Physician / Other)
3. Date range for records
4. Record type checkboxes (11 specific types plus "Entire record" and "Other")
5. Recipient (Self or named third party)
6. Format preference (Paper or Electronic PDF/CD)
7. Delivery method (Mail, Fax, MyChart, Secure email)
8. Purpose for disclosure
9. Legal disclosures (6 bullet points)
10. Signature block

**Clarity**: The form mixes plain instructions with legal language. The top-half operational sections are reasonably clear. The bottom-half legal bullets are dense, using phrases like "the United States Code of Federal Regulations at section 164.524" and "Treatment, Operations or Payment disclosures to insurance companies when the law gives the right to the insurers to contest a claim under policy." These passages are understandable to a careful reader but not plain language.

**Notable header text**: The form opens with "Complete all sections entirely. If this authorization is not complete, it may be returned and result in delay in processing. **Photo ID required at the time of request.**" — this sets a somewhat demanding tone.

**Visual hierarchy**: Uses bold headers sparingly. The "OFFICE USE ONLY" section at top right and the form code "*1ROI*" marker are clearly separated. Checkbox groupings provide visual structure for record types and delivery methods.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **dual-purpose form** — patients can check "Self" to request their own records, or specify a third-party recipient. It is not a patient-access-specific form; it's a general authorization that accommodates patient access as one option. The default purpose is "For Personal use if not otherwise stated," which is a patient-friendly default.

**Scope options**: Good. Patients can specify:
- Date range ("from" / "to" fields)
- 11 specific record types via checkboxes (Abstract, Office Visit, ED record, H&P, Discharge Summary, Immunization record, Test results, Therapy Notes, Operative record, Itemized Bills, Other)
- "Entire record (standard two years of information, unless otherwise specified)"

The "standard two years" default for entire record requests is notable — it presumes a limited scope unless the patient specifies otherwise.

**Format options**: Offers Paper or "Electronic (PDF/CD)" with "PDF/CD default if not specified" — a good electronic-default policy.

**Delivery methods**: Four options — Mail, Fax, MyChart, and Secure email. The MyChart option is notable as a portal-based delivery mechanism. No option for personal pickup is listed (unlike Form 1 from the Missouri Mercy system).

**Right of Access language**: The form explicitly references "the United States Code of Federal Regulations at section 164.524" — the HIPAA Right of Access provision. This is embedded within the legal bullet points rather than highlighted prominently.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or USCDI.

**Sensitive information handling**: The form notes that requested records "may contain information regarding physical and mental illness, HIV test results or diagnosis, treatment of AIDS/AIDS related conditions, sexually transmitted diseases and/or alcohol/drug abuse" and that psychotherapy notes and substance abuse disorder notes require a separate authorization.

## 6. COMPLIANCE

**Photo ID requirement**: "Photo ID required at the time of request." This language is ambiguous — does "at the time of request" mean when submitting the form? If so, this could be a barrier for patients submitting by mail or fax. HIPAA allows identity verification but doesn't mandate photo ID specifically.

**Fees**: "There may be a charge for copies of records." No fee schedule is provided, and no distinction is made between patient access requests (limited to reasonable cost-based fees under HIPAA) and third-party requests.

**Expiration**: "This authorization will expire one year from date for Ohio & Kentucky and 60 days from date for Michigan." The Ohio one-year expiration is standard. The mention of Michigan and Kentucky expiration timelines on a Springfield, OH form is slightly incongruous but reflects the multi-state Mercy Health system template.

**Revocation rights**: Clearly stated — patient can revoke in writing via mail or fax. The carve-out for "Treatment, Operations or Payment disclosures to insurance companies" is somewhat confusingly worded.

**No notarization required**. No in-person submission mandate (mail, fax, and email delivery options are available for the records themselves, and the form can presumably be submitted via fax or mail per Springfield contact info on the medical records page).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Photo ID requirement with vague scope**: "Photo ID required at the time of request" could function as an in-person-only barrier depending on interpretation. HIPAA does not require photo ID for patient access requests — reasonable identity verification is sufficient, and this should not prevent mail/fax submissions.
- **"Entire record" defaults to only two years**: "Entire record (standard two years of information, unless otherwise specified)" artificially limits what a patient receives when requesting their full record. A patient checking "Entire record" may not realize they're only getting two years unless they write in an expanded date range.

### ⚠️ AMBIGUITIES

- **Multi-state expiration on a single-facility form**: The authorization mentions Ohio, Kentucky, and Michigan expiration timelines despite this being a Springfield, OH-specific form. This may confuse patients about which rule applies to them.
- **Fee disclosure without specifics**: "There may be a charge for copies of records" provides no guidance on amounts and makes no distinction between patient access requests (fee-limited under HIPAA) and third-party releases.
- **Psychotherapy notes carve-out language**: "not included in the Mercy Health Legal Health Record – separate authorization, only provider/author of notes can disclose" — this parenthetical is technically informative but may confuse patients about what records they can actually obtain.

### ❌ ERRORS

- **Form is hidden behind an image-only scan**: The system-wide form linked on the website (Form 3, MHP 0786) is an image-only scan with 46 characters of extractable text. This superior text-based Springfield version (MHP 0785) is accessible only via URL guessing. Patients are directed to the inferior version.
- **Outdated form revision**: Revised January 2019 (Rev 1/19) — over 7 years old. The system-wide replacement (Form 3) appears to be from January 2024 but was published as an image-only scan rather than a proper digital PDF.

### ✨ BRIGHT SPOTS

- **Electronic format as default**: "PDF/CD default if not specified" is a progressive stance — electronic delivery is the default rather than an afterthought.
- **MyChart as a delivery option**: Offering portal-based delivery alongside traditional methods gives patients a secure, convenient access channel.
- **Self-request with personal-use default**: "For Personal use if not otherwise stated" means a patient doesn't need to justify why they want their own records, aligning with HIPAA's principle that patients need not state a reason.
- **Explicit 45 CFR § 164.524 reference**: The form cites the specific federal regulation governing patient access rights, providing a legal reference point for patients who want to understand their rights.
