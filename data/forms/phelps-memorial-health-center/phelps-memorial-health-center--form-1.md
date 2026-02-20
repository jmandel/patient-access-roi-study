# Evaluation: Phelps Memorial Health Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a single-page "Request for Release of Information" form used by Phelps Memorial Health Center (Holdrege, NE). It is a general-purpose ROI form — not differentiated for patient self-access versus third-party release. The form covers three entities within the organization: "Phelps Memorial Health Center (Hospital)," "Phelps Medical Group (Clinic)," and "Phelps Memorial Specialty Clinic." It is the only ROI form found for this organization. The filename on the website is `Request%20for%20Release%20of%20Information%20Form_1.pdf`, and the footer indicates it was created or last updated "NEW: 8/1/2017."

## 2. FINDABILITY

The form was **easy to find** via web search. A search for `"Phelps Memorial Health Center" "medical records" "release form"` returned a direct link to the PDF hosted on phelpsmemorial.com. A site-scoped search confirmed the same URL. However, the form is **not linked from the organization's patient forms page** (`/health-center/patient-forms-0`), which lists only a Patient History Form and New Patient Form. This means a patient browsing the website would not discover the ROI form through normal navigation — only via search engine or direct URL. The source URL (`/sites/default/files/Request%20for%20Release%20of%20Information%20Form_1.pdf`) is a raw Drupal file path with no landing page context explaining what the form is for.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text is extractable (4,273 characters), confirming this is a digitally created PDF, not a scan.
- **Fillable fields**: Zero. The form has no interactive form fields. All blanks are underscored lines (`___________`) intended for handwriting. This is a print-and-fill design.
- **File size**: 285,592 bytes (~286 KB) for a single page. This is notably large for a one-page form, likely explained by the 8 embedded images (possibly logos or decorative elements) despite minimal visual complexity.
- **Font count**: 7 fonts used across one page — reasonable for a form with headers, body text, and fine print.
- **Digital-first design**: No. This is clearly designed for printing and manual completion. There is no option for electronic submission, no email address provided for return, and no mention of a patient portal alternative. Fax numbers are provided for return (308-995-3333 for hospital, 308-995-4868 for clinic), which at least allows remote submission.

## 4. CONTENT DESIGN

**Length**: One page, which is appropriate for a basic ROI form. The form manages to include patient identification, record source, recipient, purpose, record type selection, authorization language, and signature — all on a single page. This is efficient.

**Organization**: The form follows a logical top-to-bottom flow: header/org info → patient identification → record source → record recipient → purpose → record types → legal language → signature → representative options. This structure is sensible.

**Clarity**: The form mixes plain-language instructions with dense legal paragraphs. The top half is straightforward (checkboxes and blanks). The bottom half shifts to a wall of small-print legal text covering HIPAA rights, revocation, treatment conditioning, and sensitive information. The legal language, while accurate, is not written at a patient-friendly reading level — e.g., "Your right to access does not extend to information compiled in reasonable participation of, or for use in a civil, criminal or administrative action or proceeding."

**Layout**: The form is moderately cramped. Multiple checkbox items and legal paragraphs are squeezed onto one page. The record-type checkboxes (H&P, D/C Summary, Progress Notes, ER Note, Lab Results, Imaging Reports) are listed but with minimal spacing. The legal text at the bottom is in noticeably smaller font. The use of 8 embedded images on what appears to be a simple form suggests possible decorative elements that consume space without adding value.

**Notable phrasing**: The form includes an unusual field at top right: "Release completed by:___________" and "MR #:___________" — these are administrative fields for staff use, placed prominently in the patient-facing area of the form, which may confuse patients.

## 5. PATIENT-CENTEREDNESS

**Patient access pathway**: The form includes "Patient" as a checkbox option under "Release Records To:" and offers an "I would like to INSPECT my health record" option. This is a positive inclusion, though the inspection language adds a restrictive caveat: "I understand an employee of PMHC will be present during this time and that I may not make marks in or alter the record in any way." This addresses inspection but not copying/delivery for patient access.

**Scope options**: The form provides reasonable specificity:
- Record source selection (Hospital, Clinic, Specialty Clinic)
- Date range field ("Dates of Service")
- Individual record type checkboxes (H&P, D/C Summary, Consultation, Progress Notes, ER Note, Lab Results, Imaging Reports, Other)
- A "COMPLETE HEALTH RECORD" option that "Includes all reports below as available"

**Format/delivery options**: None specified. No mention of electronic delivery, email, patient portal, or mailing preferences. The only submission mechanism implied is fax (numbers listed in footer) or in-person delivery.

**Right of Access language**: The form references HIPAA and quotes relevant provisions: "As required by the Health Information Portability and Accountability Act of 1996 (HIPAA), you have the right to request the opportunity to inspect and copy health information that pertains to you." It also cites HIPAA 164.508 and 164.502(4). However, it misspells the law's name as "Health Information **Portability** and Accountability Act" rather than the correct "**Portability** and Accountability Act" — though confusingly, "Portability" is actually the correct word in the Act's name (Health Insurance Portability and Accountability Act), and the form writes "Health Information Portability" which substitutes "Information" for "Insurance."

**EHI Export**: No mention of electronic health information export or bulk data requests.

**Sensitive information**: The form includes a blanket disclosure notice: "I understand that the information in my health record may include information relating to sexually transmitted diseases, acquired immunodeficiency syndrome (AIDS) or human immunodeficiency virus (HIV). It may also include information about behavioral or mental health services and treatment for alcohol and drug abuse." This is informational rather than requiring separate consent for these categories, which is a reasonable approach.

## 6. COMPLIANCE

**Fees**: The form discloses: "$0.25 per page after the first 10 pages, and $10.00 for records transferred to a compact disc." The first 10 pages being free is a patient-friendly feature. The $0.25/page rate is within HIPAA's reasonable cost-based fee guidance. The $10 CD fee is disclosed upfront. However, HIPAA's Right of Access rule (§ 164.524) limits fees for patient access requests to reasonable cost-based fees, and the form does not distinguish between patient-access fees and third-party release fees — it applies the same fee schedule uniformly.

**Expiration**: The form states "Release effective until the end of this year _______" — meaning the authorization automatically expires at year-end. This is a fixed calendar-year expiration rather than a duration from signing. A patient signing in January has nearly 12 months; one signing in November has less than 2 months. This creates an inconsistent authorization window.

**Authorization conditioning**: The form includes appropriate anti-conditioning language: "I understand that I am under no obligation to sign this form and that Phelps Memorial Health Center may not condition treatment on my decision to sign this authorization," with the correct exception for research/disclosure-purpose treatment.

**Representative access**: The form provides checkboxes for parent of minor, guardian, power of Attorney, personal representative of deceased patient, and "OTHER." It requires supporting documentation for most categories and includes a self-certification checkbox for parents: "by checking this box I certify there is not a court order denying me access to my child's record."

**Submission method**: No explicit submission instructions beyond the fax numbers in the footer. No mailing address is given for the form itself (the header shows the facility address, but doesn't say "mail completed form to...").

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **HIPAA law name error in legal text**: The form cites "Health Information Portability and Accountability Act of 1996" — the actual name is "Health **Insurance** Portability and Accountability Act." This error in the legal foundation of the form undermines its credibility and suggests the text has not been carefully reviewed by counsel.

### ⚠️ AMBIGUITIES
- **Calendar-year expiration**: "Release effective until the end of this year _______" creates a variable-length authorization depending on when the patient signs. It's unclear whether the blank is for the patient to write in a year or for staff to note the current year.
- **Inspection vs. copy distinction**: The form offers an "INSPECT" option with supervision requirements, but for patients simply requesting copies of their records (the most common patient access scenario), the workflow is unclear — does checking "Patient" under "Release Records To" suffice?
- **No explicit submission instructions**: Fax numbers appear in the footer, but there is no "Return this form to:" instruction. A patient might not realize the footer fax numbers are the submission mechanism.
- **Staff fields on patient-facing form**: "Release completed by:" and "MR #:" at the top are for internal use but could confuse patients who think they need to fill them in.

### ❌ ERRORS
- **Incorrect HIPAA name**: "Health Information Portability and Accountability Act" should be "Health Insurance Portability and Accountability Act" (HIPAA). This is a factual error in the legal text.
- **Outdated form date**: The form footer reads "NEW: 8/1/2017" — the form is over 8 years old and has not been updated, potentially missing regulatory changes since then.

### ✨ BRIGHT SPOTS
- **First 10 pages free**: The fee schedule waives charges for the first 10 pages, which is more generous than many providers and reduces the cost burden for routine patient access requests.
- **Single-page design**: The form accomplishes a complete ROI authorization on one page, avoiding the multi-page complexity common at larger organizations.
- **Complete Health Record option**: The "COMPLETE HEALTH RECORD (Includes all reports below as available)" checkbox provides a simple way for patients to request everything without needing to know individual record categories.
- **Anti-conditioning language**: The form explicitly states treatment cannot be conditioned on signing, with the correct HIPAA exception noted with a specific citation (164.508).
