# Esse Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page **"Authorization for Release of Medical Information"** — a general-purpose ROI form that covers both patient-access and third-party release scenarios. The form is titled plainly and hosted as a standalone PDF on Esse Health's website. Its source URL filename is descriptive: `Authorization-for-Release-of-Medical-Information-–-For-Records-Transfer-or-Release.pdf`.

Esse Health also publishes a second form (form-2.pdf), which is a **communication/message authorization** allowing the practice to leave messages and speak with designated persons about medical and financial information. That form is not an ROI form. The patient forms page additionally links to a Notice of Privacy Practices.

Notably, Esse Health offers an **electronic submission version** of this same ROI form via DocuSign (linked from the same patient forms page), which represents an alternative pathway not captured in this PDF evaluation.

## 2. FINDABILITY

The form was **easy to locate**. Per the retrieval notes:

- A site-scoped web search (`site:essehealth.com "medical records" "release form"`) immediately surfaced the PDF URL.
- The form is linked from a clearly labeled patient forms page at `essehealth.com/patient-center/patient-forms/` under "General Forms."
- No login walls, bot blocking, or JavaScript rendering issues were encountered.

The retrieval difficulty was rated **Easy**. The URL itself is long but descriptive, containing the full document title. The patient forms page provides clear labeling that distinguishes this form from the communication authorization form.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (3,096 characters) is cleanly extractable — no OCR artifacts or garbled characters.
- **Fillable fields**: The metadata reports `fillable_field_count: 28` but `fillable_field_names: []` (empty array). This suggests the PDF has some form field annotations but they may not be properly named or functional. The form text uses underline blanks (`_______`) for fill-in areas, indicating it was designed primarily as a print-and-write form.
- **Page count**: 1 page — compact.
- **File size**: 370 KB for a single-page form with one embedded image (likely a logo). This is moderately large for the content but not unreasonable.
- **Font count**: 3 fonts used.
- **Digital-first design**: This appears to be a digitally-created document (not a scan), with clean text and consistent formatting. However, the reliance on underline blanks rather than properly labeled fillable fields means it does not fully leverage digital capabilities. The availability of a DocuSign alternative partially compensates for this.

## 4. CONTENT DESIGN

**Length and proportion**: At one page, the form is appropriately concise. It fits all necessary content — identification fields, record type checkboxes, sensitive information disclosure language, revocation rights, and signature — onto a single page without appearing excessively cramped.

**Clarity**: The language is a mix of plain English and moderate legalese. The opening is clear: *"I authorize the use or disclosure of the above-named individual's health information as described below."* The disclosure paragraphs covering HIV/AIDS, mental health, and substance abuse are denser but generally understandable. The revocation section is straightforward: *"I understand I have a right to cancel this authorization at any time."*

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient identification (name, DOB)
2. Release from/to fields
3. Record type checkboxes (11 categories)
4. Sensitive information disclosure
5. Revocation and expiration language
6. Signature and date

**Record type options**: The form provides 11 checkbox categories: Complete Medical Record, List of Allergies, X-ray reports, Physician Progress Notes, Problem list, EKG, Immunization Records, Lab Reports, Medication list, Consultation Reports, and Other. It also offers a condition-specific option (*"My health information relating only to the following treatment/condition"*) and a date-range restriction.

**Layout**: Clean but dense. The form uses underline blanks for all fields. Three fonts are used, suggesting some visual hierarchy (likely bold for headings). The single-page constraint means the legal language paragraphs are tightly packed.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose release** — it has both "INFORMATION TO BE RELEASED BY" and "INFORMATION TO BE RELEASED TO" fields, designed to work for transfers between providers or releases to third parties. There is no separate, dedicated patient-access request form. A patient requesting their own records would need to fill in themselves as the "released to" party, which is not intuitive.

**Scope options**: Good. Patients can select specific record types via checkboxes, specify a condition, or limit by date range. The "Other" option provides flexibility.

**Format/delivery options**: **None mentioned.** The form does not ask how the patient wants to receive records (electronic, paper, mail, pick-up). This is a notable gap for a patient-access scenario.

**Right of Access language**: The form references **CFR 164.524**: *"I understand I may inspect or copy the information to be used or disclosed as provided in CFR 164.524."* This is the correct HIPAA provision for patient access rights, though the citation format is informal (missing the "45" prefix).

**EHI Export/electronic delivery**: No mention of electronic health information export, bulk data, or any digital delivery mechanism.

**Fees**: The form states: *"I understand there may be a charge associated with copying my health information."* This provides notice of potential charges but gives no specifics about fee amounts or HIPAA's cost-based fee limits.

**Voluntariness**: Clearly stated: *"I understand authorizing the release of this health information is voluntary. I can refuse to sign this authorization. I do not have to sign this form to receive treatment."*

## 6. COMPLIANCE

**Expiration**: The form provides an expiration date/event field and defaults to six months: *"If I fail to specify an expiration date or event, this authorization will expire in six months."* Six months is a standard default and is reasonable.

**Revocation**: The form requires written cancellation presented to the health information management department. The language *"I must present my written cancellation to the health information management department"* is specific about the mechanism, which is helpful, though requiring in-person presentation could be a barrier.

**Sensitive information**: The form includes a blanket authorization for HIV/AIDS, mental health, substance abuse, and self-paid services information, with an option to exclude specific categories. The language states: *"You are hereby specifically authorized to release all information or medical records relating to such diagnosis, testing or treatment, unless specifically excluded below."* This opt-out approach (include everything unless you say otherwise) puts the burden on the patient to know what to exclude.

**Re-disclosure warning**: Appropriately included: *"I understand any disclosure of information carries with it the possibility for an unauthorized re-disclosure and the information may not be protected by federal confidentiality rules."*

**No notarization or witness requirements** are imposed.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **DocuSign electronic submission option** available as an alternative to the PDF, offering a modern digital pathway for form completion and submission without requiring printing, scanning, or in-person visits.
- **Concise single-page design** that covers all essential elements without sprawling into unnecessary length.
- **Explicit voluntariness statement** clearly telling patients they don't have to sign to receive treatment.

### ⚠️ AMBIGUITIES
- **General-purpose form with no patient-access pathway**: The form's "RELEASED BY" / "RELEASED TO" structure is designed for third-party transfers. A patient requesting their own records must awkwardly cast themselves as both the authorizer and the recipient, with no guidance on how to do so.
- **Revocation mechanism unclear**: The form says cancellation must be presented to *"the health information management department"* but does not clarify whether this can be done by mail, fax, or email — or only in person.
- **Fee disclosure is vague**: *"There may be a charge"* gives no information about the basis or limits of the charge, leaving patients unable to anticipate costs.

### ❌ ERRORS
- **Incomplete CFR citation**: The form references "CFR 164.524" rather than the standard "45 CFR § 164.524." While the intent is clear, the citation is technically incomplete.
- **Fillable fields metadata mismatch**: The PDF reports 28 fillable fields but none have names, suggesting the form fields may be improperly configured — potentially causing issues with assistive technology or programmatic form-filling.
