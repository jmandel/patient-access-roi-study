# Providence Sacred Heart Medical Center — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document title**: "AUTHORIZATION TO USE, DISCLOSE & RELEASE PROTECTED HEALTH INFORMATION"
**Form ID**: ORC 240A, Rev. 03/20
**Pages**: 2 | **File size**: 381,217 bytes | **Fillable fields**: 37

This is a **general third-party authorization/release form** — it authorizes Providence Health & Services to disclose a patient's records to a specified recipient. It is *not* a patient access (Right of Access) form. Providence Sacred Heart separately publishes a dedicated patient access form ("PATIENT REQUEST FOR ACCESS TO DESIGNATED RECORD SET," form-2.pdf, 45 fillable fields), which is explicitly designed for patients requesting their own records. The existence of two distinct, purpose-specific forms is notable — many organizations provide only a single general-purpose release form.

The facility-specific medical records page also links to Spanish versions of both forms, an Amendment Request form, an Accounting of Disclosures form, a Restriction/Revocation form, and Health Information Exchange opt-out forms — a comprehensive suite.

## 2. FINDABILITY

**Retrieval difficulty**: Easy. A single web search for `Providence Sacred Heart Medical Center Spokane "authorization" "release" "health information" form PDF` immediately returned direct links. The form is hosted on a centralized, facility-specific medical records page at `providence.org/about/medical-records-authorization/medical-records-wa/sacred-heart`, with direct PDF download links and no login walls or bot blocking.

The URL structure is clean and descriptive: `wa-sacred-heart-auth-release.pdf`. The medical records page clearly distinguishes between the authorization (third-party release) form and the patient access form, reducing confusion. The page is reachable from Providence's main navigation under a medical records section — no deep link-crawling required.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Yes — full extractable text (4,288 characters). Not an image-only scan.
**Fillable fields**: 37 interactive form fields — checkboxes for record types (History & Physical, Operative Report, Discharge Summary, etc.), delivery format (MyChart, Email, Paper, Disc, Fax), sensitive information categories, and text fields for patient name, DOB, recipient info, date ranges, etc.
**Digital-first design**: Mixed. The form is clearly designed digitally (not a scan), with a clean layout and interactive fields. However, both signature lines explicitly state *"(Print form and sign by hand)"*, requiring the patient to print, sign with a wet signature, and then submit by fax, email, or mail. This undermines the otherwise digital-friendly design.
**Font count**: 30 (high for a 2-page form, suggesting complex formatting).
**Embedded images**: 6 (likely logos/decorative elements).
**PDF version/format**: Standard PDF with text layer; reasonable file size for a 2-page form.

The 37 fillable fields are well above average and cover nearly every data-entry point on the form. However, the `fillable_field_names` array is empty in the metadata, suggesting the fields may lack accessible names — a potential issue for screen readers and assistive technology.

## 4. CONTENT DESIGN

**Structure**: Page 1 contains patient rights information, revocation instructions, and institutional notices. Page 2 contains the actual form fields. This front-loading of rights information is thoughtful — the patient reads their rights before filling in data.

**Clarity**: The rights language on page 1 is relatively clear:
> "I have the right to refuse to sign this form for authorization to disclose or release my protected health information. Refusal to sign the authorization will not adversely affect my ability to receive health care services or reimbursement for services."

This is plain-language by healthcare form standards, though the sentence about research-related exceptions adds some complexity. The re-disclosure warning is appropriately included:
> "Information used or disclosed pursuant to this authorization may be subject to re-disclosure and no longer protected under federal law."

**Record type options**: The form provides 6 checkboxes for specific record types (History & Physical, Operative Report, Diagnostic Reports, Discharge Summary, Emergency Department Report, Progress Notes) plus an "Other (specify)" field. Date range fields allow temporal scoping.

**Sensitive information handling**: A separate section requires the patient to initial next to each sensitive category they wish to include: HIV/AIDS testing/treatment, Mental Health specific visits, Genetic Testing, Drug/Alcohol specific visits. This is legally required in many states and is handled cleanly with a clear explanation: "I understand and agree that the information below will be disclosed if I place my initials in the applicable space."

**Facility selection**: Fields for "List Clinic(s) or Provider Name(s)" and "List Hospital(s) or Provider Name(s)" allow the patient to specify which Providence facilities' records to release.

**Purpose field**: An open-ended "For the purpose of:" field is present but has no guidance or common examples — patients may not know what to write.

**Length**: 2 pages is appropriate for a general authorization form.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is designed for **third-party disclosure**, not patient access. The heading "AUTHORIZATION TO USE, DISCLOSE & RELEASE" and the field structure (specifying a recipient) confirm this. However, Providence separately provides form-2 ("PATIENT REQUEST FOR ACCESS TO DESIGNATED RECORD SET") specifically for patient access requests, which is excellent practice.

**Delivery format options**: The form offers 5 delivery formats — MyChart, Email, Paper, Disc, Fax — which is unusually comprehensive. Electronic delivery (MyChart, Email) options are present and listed first.

**Scope control**: Patients can specify date ranges, specific facilities, specific record types, and selectively opt in or out of sensitive categories. This granularity gives patients meaningful control over what is disclosed.

**Fee disclosure**: Page 1 states *"There may be a fee associated with this request"* — vague but not unreasonable for a third-party release form (HIPAA's fee protections under § 164.524 apply to patient access requests, not third-party authorizations).

**Revocation rights**: Clearly stated with specific instructions including a mailing address, phone number, fax number, and email address for the Health Information Department.

**Contact information**: Full contact details provided (address, phone, fax, email), enabling multiple submission channels.

**Language access**: The form includes a language assistance notice in English, Spanish, and Chinese, with a toll-free phone number and TTY option.

**Right of Access / EHI language**: No mention of HIPAA § 164.524, patient rights of access, or electronic health information export — but these would be more relevant to form-2 (the patient access form) rather than this third-party authorization.

## 6. COMPLIANCE

**Expiration**: "Unless revoked, this authorization expires in 180 days or on this date: ___." The 180-day default is reasonable for a third-party authorization and compliant with HIPAA requirements that authorizations include an expiration date or event.

**Signature requirement**: Both patient and representative signature lines state "(Print form and sign by hand)," mandating a wet ink signature. No electronic signature option is offered, which creates a barrier for fully digital submission.

**SSN disclosure warning**: A notable and consumer-protective notice: "Providence Health & Services no longer print or release patient social security numbers unless required for billing. However, social security numbers may be included in patient information that is more than a few years old." This proactively warns patients that older records may contain their SSN.

**Liability release**: The form includes a liability release clause: "The facility, its employees, officers and physicians are hereby released from any legal responsibility or liability for disclosure of the above information to the extent indicated and authorized herein." This is standard in authorization forms.

**Non-discrimination statement**: Includes a standard non-discrimination notice.

**Sensitive information protections**: Separate initialing for HIV/AIDS, mental health, genetic testing, and drug/alcohol records complies with federal 42 CFR Part 2 and state-specific protections.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Separate patient access form exists**: Providence provides distinct forms for third-party authorization (form-1) and patient access (form-2), reducing confusion and allowing each form to be tailored to its purpose. Many organizations force patients to use the same generic release form for both scenarios.
- **Five delivery format options including MyChart and Email**: Offering MyChart, Email, Paper, Disc, and Fax goes well beyond most organizations, which typically offer only paper or fax.
- **Comprehensive medical records portal**: The facility-specific page at `providence.org` organizes authorization forms, patient access forms, amendment requests, accounting of disclosures, restriction/revocation forms, and Spanish translations — all in one place with direct download links.
- **Multilingual language assistance notice**: Includes English, Spanish, and Chinese notices with a toll-free number and TTY, directly on the form.
- **SSN proactive warning**: The disclosure about SSNs potentially appearing in older records is a thoughtful, patient-protective touch that most forms omit.

### ⚠️ AMBIGUITIES

- **"For the purpose of:" field has no guidance**: The open-ended purpose field offers no examples or explanation. Patients may leave it blank or write something that doesn't serve them well. Common purpose examples (e.g., "continuity of care," "insurance claim," "personal records") would help.
- **"Self" checkbox on recipient field is unclear in context**: The form includes a "Self" checkbox alongside the recipient name/address fields, but this is a third-party release form — if a patient selects "Self," they should arguably be using form-2 (patient access) instead. This overlap could confuse patients about which form to use.

### ❌ ERRORS

- **Fillable field names are empty**: Despite having 37 interactive fields, the metadata shows `fillable_field_names: []`, suggesting the PDF form fields may lack accessible names — a potential barrier for screen readers and PDF accessibility compliance (Section 508 / PDF/UA).
