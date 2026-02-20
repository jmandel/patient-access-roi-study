# UPMC Presbyterian — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2 is an **"Authorization for Release of Protected Health Information"** specifically for **UPMC In-Home Urgent Care Plus** and **Short Term Acute Care** services. It is a variant of the main UPMC system-wide ROI form (form-1.pdf), tailored for home-based care rather than hospital-based care. The header reads: "I authorize the ☐ In-Home Urgent Care Plus ☐ Short Term Acute Care, to release information from the record of:".

This form is one of three documents retrieved for UPMC Presbyterian:
- **form-1.pdf**: The main system-wide UPMC ROI form covering all hospital facilities (2 pages, 371 KB)
- **form-2.pdf** (this document): The In-Home/Short Term Acute Care variant (2 pages, 238 KB)
- **form-3.pdf**: An informational guide explaining how to complete the main ROI form (1 page, 614 KB)

Form-2 is narrower in scope than form-1. Where form-1 lists ~20+ UPMC hospital facilities with checkboxes, form-2 offers only two service-type checkboxes ("In-Home Urgent Care Plus" and "Short Term Acute Care"). Similarly, the record-type options in Section C are significantly reduced — form-2 lists only 7 specific record types (Discharge/Patient Instructions, EKG Report, Laboratory Report/Test, Progress Note, Radiology Report, and a generic "Other" line), versus form-1's 20+ granular record categories. The second page ("Additional Patient Rights and Responsibilities") is substantively identical across both forms.

The URL path (`authorization-for-roi-of-phi-pa-modified-10-5-2022-in-home-version.pdf`) confirms this is a Pennsylvania-specific variant last modified October 5, 2022.

## 2. FINDABILITY

This form was found through UPMC's Digital Asset Management CDN, linked from the UPMC Presbyterian medical records page at `https://www.upmc.com/locations/hospitals/presbyterian/patients-visitors/medical-records`. According to the retrieval notes, finding UPMC's ROI forms required no special effort — web searches for UPMC authorization/release forms immediately returned direct PDF links. The form is also accessible from the system-wide medical records page (`https://www.upmc.com/patients-visitors/medical-records`).

However, this In-Home version is a secondary document. A patient receiving in-home care would need to know to seek this specific variant rather than the main hospital form. It is unclear whether the medical records landing page distinguishes between these forms with adequate labeling — the URL filename itself is long and descriptive (`authorization-for-roi-of-phi-pa-modified-10-5-2022-in-home-version.pdf`) but not patient-friendly.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable via pdftotext (6,558 characters). Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). The form is a flat PDF with blank lines (`______`) for all data entry. Despite being a digitally-authored document (8 fonts, not a scan), it has no interactive form fields whatsoever.
- **File size**: 237,822 bytes (238 KB) for 2 pages — reasonable.
- **Embedded images**: 2 (likely logos or decorative elements).
- **Digital-first design**: Partially. The document was clearly created digitally (not scanned), with proper fonts and layout. However, the complete absence of fillable fields means it must be printed, filled by hand, and submitted physically or by fax. This is a print-oriented design published as a PDF, not a digital-first form.

The lack of fillable fields is the primary technical barrier. A patient cannot complete this form electronically without third-party PDF annotation tools.

## 4. CONTENT DESIGN

**Length**: 2 pages. Page 1 contains all data-entry fields and the authorization/signature block. Page 2 contains "Additional Patient Rights and Responsibilities" — a disclosure statement about fees, re-disclosure risks, revocation rights, and email communication risks. This is an appropriate length for the content.

**Clarity**: The form uses a mix of plain language and legal terminology. The main body is reasonably clear for a healthcare authorization form — sections are labeled A through C with brief instructions. However, some language is dense, e.g.: "Although applicable law may prohibit re-disclosure of these records, I understand that it is possible that the facility/person that receives the records may re-disclose the information, therefore (1) UPMC and its staff/employees have no responsibility or liability as a result of a redisclosure and (2) such information would no longer be protected by the Privacy Rule."

**Organization**: The form follows a logical flow: patient identification → recipient information → purpose → disclosure format → record type → sensitive record categories → expiration/revocation → signature. Section labels (A, B, C) provide some structure, but the form is dense with minimal whitespace between sections.

**Layout**: The form is text-heavy for a single page of data entry. Checkboxes, blank lines, and labels are packed tightly. The "Imprint Patient Information Here" instruction at the top suggests this form is also used in clinical settings with an addressograph machine, reinforcing its paper-first orientation.

**Font size**: Based on the 8-font document fitting substantial content on one page of data entry, text appears to be in a readable but compact size (likely 9-10pt for body text).

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose authorization form, not specific to patient access requests. The form structure ("I authorize... to release information... to: [Facility/Person to Receive Records]") is oriented toward releasing records to a third party. However, it does include "Personal Use" as a purpose option under Section A, and contains the explicit note: **"Note: Purpose is not required for patient access."** This is a positive acknowledgment of HIPAA patient access rights.

**Scope options**: Patients can specify:
- Service type: In-Home or Short Term Acute Care with date ranges
- 7 specific record types (Discharge/Patient Instructions, EKG Report, Laboratory Report/Test, Progress Note, Radiology Report, plus "Other")
- HIV release opt-out checkbox ("Do not release")
- Separate checkmarks required for Drug/Alcohol and Mental Health records

The record-type options are significantly more limited than form-1's ~20 categories, which makes sense for the narrower scope of home-based care.

**Format options**: The form offers multiple disclosure formats:
- Paper, CD, FAX (Providers Only), and "Other" under Disclosure Format
- US Mail, In-Person Pickup, FAX (Providers Only), Email, and Direct Address under Method Received

Email and Direct Address options are notable positives. However, FAX is explicitly restricted to "Providers Only," and there is no mention of electronic health information (EHI) export, patient portal access, or bulk data download.

**Right of Access language**: No explicit reference to HIPAA § 164.524 or patient right of access. The "Purpose is not required for patient access" note is the closest acknowledgment. Page 2 states "UPMC will not condition treatment, payment, enrollment or eligibility of benefits on whether I sign this authorization," which addresses the non-conditioning requirement.

**EHI Export awareness**: None. No mention of electronic health information export, USCDI, or any digital health data standards.

## 6. COMPLIANCE

**Authorization expiration**: The form states: "this Authorization is effective for a period of 90 days from the date of signature, unless otherwise specified below. No time frame may exceed one year from the date of signature." A 90-day default is relatively short and could force patients to re-submit if processing takes time, though the option to extend up to one year mitigates this.

**Fees**: Page 2 states: "Please be aware that health care facilities are authorized by Pennsylvania State law to charge for reproduction of medical records and that charges may be associated with this request. Requestors may be notified in advance of the amount due for the request and records will be sent upon receipt of payment." This language does not distinguish between patient access requests (subject to HIPAA's reasonable, cost-based fee limitations) and third-party requests (which may be subject to different fee schedules). The phrasing "records will be sent upon receipt of payment" could be read as conditioning access on pre-payment.

**Revocation**: Patients are told they can revoke "by sending a written request to the entity/person I authorized above to release the information." This is straightforward.

**Sensitive records**: The form requires affirmative checkmarks ("A CHECK MARK IS REQUIRED") to release Drug/Alcohol and Mental Health records, consistent with Pennsylvania's more protective state laws for these categories. HIV-related information is released by default unless the patient checks "Do not release" — an opt-out rather than opt-in approach.

**Oral authorization**: The form provides a section for oral authorization "for persons physically unable to sign," requiring two witnesses, but explicitly excludes HIV and Drug/Alcohol treatment information from oral authorization. This is a reasonable accommodation.

**Authorized representatives**: The form lists four categories (Parent/Legal Guardian, Power of Attorney, Next of Kin of Deceased, Executor of Estate) with documentation requirements for each.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Fee language does not distinguish patient access from third-party requests.** The statement that "records will be sent upon receipt of payment" could be interpreted as requiring pre-payment for patient access requests, which would conflict with HIPAA's requirement that providers not unreasonably delay access. HIPAA limits fees for patient access to reasonable, cost-based amounts and does not permit conditioning access on upfront payment in the same way as third-party requests.

- **90-day default expiration is unexplained.** While patients can specify a longer period (up to one year), many patients may not realize they should do so. If processing exceeds 90 days, the authorization expires and the patient must resubmit — with no guidance on typical processing timelines.

- **"Imprint Patient Information Here" header is confusing for patients.** This instruction is directed at clinical staff using addressograph machines, not at patients filling out the form at home. Its placement as the first thing on the form could confuse home-care patients.

### 🚩 RED FLAGS

- **No fillable form fields despite being a digitally-authored PDF.** The complete absence of interactive fields (0 out of a possible 20+ data-entry points) forces patients to print, hand-fill, and physically submit the form. For a major health system serving home-care patients — who by definition may have mobility limitations — this is a significant accessibility barrier.

### ✨ BRIGHT SPOTS

- **"Note: Purpose is not required for patient access."** This explicit callout in Section A is a clear, patient-friendly acknowledgment of HIPAA rights that many forms omit entirely. It correctly signals that patients requesting their own records need not justify their request.

- **Email and Direct Address delivery options.** Offering email delivery and Direct Address (a healthcare messaging standard) as alternatives to mail and fax demonstrates awareness of digital delivery needs, even though the form itself is not digitally fillable.

- **Oral authorization provision.** The two-witness oral authorization section for patients physically unable to sign is a thoughtful accessibility accommodation, particularly relevant for a home-care population.

- **Non-conditioning statement.** The explicit statement that "UPMC will not condition treatment, payment, enrollment or eligibility of benefits on whether I sign this authorization" is a clear compliance commitment.
