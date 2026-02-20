# Evaluation: Carolina Pines Regional Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "RELEASE OF INFORMATION AUTHORIZATION / REQUISITION FORM" in English. It is a general-purpose ROI authorization — not a patient-access-specific request form. The form is designed to authorize disclosure of records to any named recipient, whether that's the patient themselves, another provider, or a third party. It does not distinguish between a patient exercising their HIPAA Right of Access and a third-party release scenario.

A Spanish-language translation (form-2.pdf) with identical structure is also available. The two forms together constitute the organization's complete publicly available ROI documentation. Both are hosted on the ScionHealth parent system's content management infrastructure (URL path: `/content/dam/Home/ScionHealth/...`), suggesting this is a system-wide template branded for Carolina Pines.

## 2. FINDABILITY

Per the retrieval notes, the forms were **easy to find**. A site-specific web search (`site:cprmc.com medical records release authorization`) immediately surfaced both the English and Spanish PDF URLs. The hospital's medical records page at `https://www.cprmc.com/medical-records` links directly to the forms and provides submission instructions (in-person, fax, email). The source URL is descriptive: `Authorization_Update_(English).pdf`.

The availability of a dedicated medical records page with direct form links, clear submission instructions, and business hours (Mon–Thu 8am–5pm, Fri 8am–2pm) represents a functional, straightforward experience. There was no bot blocking, no portal login required, and no multi-click navigation maze.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (3,265 characters). Not an image-only scan.
- **Fillable fields**: Zero. Despite having a text layer, the form has no interactive form fields. Every field (patient name, DOB, address, dates of service, checkboxes, signature lines) must be completed by printing and handwriting, or by using PDF annotation tools.
- **Page count**: 1 page, which keeps file size manageable (185 KB).
- **Fonts**: 6 fonts embedded.
- **Images**: 0 embedded images.
- **Digital-first design**: This appears to be a digitally-created PDF (not a scan), but it was designed for print-and-fill workflow. The lack of any fillable fields means patients cannot complete this form digitally in a standard PDF viewer. They must print it, fill it by hand, and then submit via fax, email (presumably as a scan), or in person.

The 0-fillable-field count is a significant accessibility gap. For a form that can be submitted by email, the inability to fill it electronically creates a friction-filled workflow: download → print → handwrite → scan → email back.

## 4. CONTENT DESIGN

**Structure**: The form is organized into two main sections:
- **Section A** ("to be completed by the patient"): Patient demographics, disclosing provider info, recipient info, dates of service, and record type selection.
- **Section B** ("Must be completed by the patient for all authorizations"): Seven numbered statements about patient rights, plus signature block.

**Record type selection**: 15 checkbox options including Face Sheet, History & Physical, Consultation, Discharge Summary, Emergency Records, Surgery/Proc Report, Pathology Report, Imaging Reports, Laboratory, Physician Orders, Progress Notes, All Records, Medication Records, Nursing Records, and EKG's — plus an "Other" write-in field. This is a reasonably comprehensive set of record types.

**Length**: At one page, the form is compact. This is both a strength (not intimidating) and a weakness (the seven rights statements in Section B are squeezed into small print, and the layout is dense).

**Language**: The rights statements use moderately complex language. For example: "I understand that information used or disclosed to any entity other than a health plan or health care provider may be subject to redisclosure by the recipient and no longer protected by the Standards for Privacy of Individually Identifiable Health Information, as set forth in 45 C.F.R. 160 and 164." This is standard legal language, but not plain-language-accessible.

**Layout**: Cramming all content onto a single page means limited whitespace. The Section B statements are numbered 1–7 but appear to be in small text. The record type checkboxes are arranged in a three-column layout, which is functional but compact.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a generic authorization form. It requires the patient to fill in both a "Name of Disclosing Hospital/Provider" and a "Name of Recipient," which is the structure of a third-party disclosure authorization. A patient requesting their own records would need to list themselves as the recipient, which is not intuitive. The form does not mention HIPAA's Right of Access (§ 164.524) — it only references 45 CFR 160 and 164 in the context of redisclosure risk.

**Scope options**: Good granularity — 15 record types plus "Other" and "All Records" options, with a date-of-service field for temporal scoping.

**Sensitive information**: The form includes separate consent for HIV/AIDS, STD, mental health, and substance abuse information, plus a separate question about psychotherapy notes — both requiring circled YES/NO and initials. This is appropriate for state-law compliance.

**Format/delivery options**: The form itself does not mention delivery format options (paper, electronic, CD, portal, etc.). There is no field for the patient to specify how they want to receive the records. The medical records webpage mentions fax, email, and in-person submission for sending the completed form, but the form itself says nothing about how the patient will receive the requested records.

**Purpose field**: "Describe the purpose/reason for this request" — HIPAA does not require patients to state a reason for accessing their own records. For third-party releases, purpose is a required authorization element, but including this field without clarification may mislead patients into thinking they must justify their request.

**Right to copy**: Statement 5 says "I understand that I may see the information described on this form if I ask to see it and I understand that I will receive a copy of this form after I sign it." This refers to seeing a copy of the authorization form itself — not necessarily to receiving the requested records. This is oddly worded and potentially confusing.

**Expiration**: Statement 2 says the authorization expires on a written date, or "one year from the date on which it is received by the hospital" if no date is specified. A one-year default is reasonable.

**Revocation**: Statement 4 clearly states the right to revoke "at any time by notifying the hospital in writing."

## 6. COMPLIANCE

**Fee disclosure**: No mention of fees anywhere on the form or in the extracted text. Patients have no indication of what records retrieval will cost before submitting.

**Third-party vendor**: Per the retrieval notes, MRO Corp handles ROI processing (email: CPRMCROI@mrocorp.com). This is not disclosed on the form itself, meaning patients don't know their request will be handled by a third party.

**Identity verification**: The "FOR OFFICE USE ONLY" section at the bottom includes fields for "License #" and "SS #" (Social Security number). While this is labeled for office use, the presence of an SS# field in a verification context raises questions about what identification patients are asked to present. Requesting a full Social Security number as identity verification is excessive.

**Physician authorization for sensitive info**: Statement 6 says "I understand that if my records contain sensitive information that I may need to have my physician authorize the use or disclosure of it." This is an unusual and potentially problematic statement — it suggests the patient may not be able to access their own sensitive records without physician involvement, which could conflict with HIPAA's Right of Access.

**No mention of response timeline**: The form does not indicate when the patient can expect to receive the requested records. HIPAA requires response within 30 days (with one 30-day extension).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Physician gating of sensitive information**: Statement 6 — "I understand that if my records contain sensitive information that I may need to have my physician authorize the use or disclosure of it" — implies a patient may need physician approval to access their own sensitive records. Under HIPAA's Right of Access, patients have the right to access their records (with narrow exceptions for psychotherapy notes and certain other categories). Physician "authorization" as a prerequisite could function as an illegitimate barrier.

- **Social Security number in verification**: The "FOR OFFICE USE ONLY" section includes an "SS #" field, suggesting patients may be asked for their full Social Security number to verify identity. This is excessive for identity verification and creates a data security risk.

### ⚠️ AMBIGUITIES

- **"Purpose/reason for this request" field**: The form does not distinguish between patient self-access (where no reason is required under HIPAA) and third-party release (where purpose is a required element). A patient requesting their own records may believe they must justify their request.

- **Statement 5's meaning**: "I understand that I may see the information described on this form if I ask to see it" — it's unclear whether "the information described on this form" refers to the medical records being requested or to the authorization form itself. The second clause ("I will receive a copy of this form after I sign it") suggests it's about the form, but the first clause seems to be about the records.

- **Record delivery format unspecified**: The form provides no mechanism for the patient to indicate how they want to receive their records (mail, pickup, electronic, fax, etc.). This omission leaves the delivery method entirely at the facility's discretion.

### ✨ BRIGHT SPOTS

- **Spanish-language version available**: Providing a fully translated Spanish form (form-2.pdf) is a meaningful accessibility feature, particularly for a community hospital in the South.

- **Easy online findability**: Direct links from the medical records page, descriptive file names, no access barriers — this is how form availability should work.

- **Multiple submission channels**: The medical records page offers in-person, fax, and email submission — fax and email being adequate electronic options for submitting the completed form.
