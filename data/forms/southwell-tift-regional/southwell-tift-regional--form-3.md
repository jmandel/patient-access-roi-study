# Southwell (Tift Regional Health System) — Form 3 Evaluation

**Document**: form-3.pdf — "SOUTHWELL AMBULATORY, INC. AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION"
**Source URL**: https://mysouthwell.com/wp-content/uploads/2020/10/SWA-Authorization-for-Release-of-Records-Clean.pdf
**Organization**: Southwell (Tift Regional Health System), Tifton, GA

---

## 1. DOCUMENT IDENTIFICATION

Form-3 is an authorization form for releasing protected health information from Southwell Ambulatory, Inc. (SWA) facilities specifically. It covers four specialty/ambulatory locations: Southwell Gastroenterology, Southwell Valdosta Endoscopy Center, Southwell Lowndes Endoscopy Center, and Southwell Pediatrics, plus an "Other" write-in option.

This is a companion form to form-1, which covers the Tift Regional Health System hospital facilities (Tift Regional Medical Center, Southwell Health and Rehabilitation, Southwell Medical campus, and Rural Health Clinics). The two forms are structurally nearly identical — same numbered sections, same record type checkboxes, same delivery and purpose options — but are scoped to different legal entities within the Southwell system. Form-2 is a newer image-only scan ROI form (July 2025 upload), and form-4 is a supplementary entity list. The existence of separate forms for the hospital system vs. the ambulatory entity means a patient who received care at both must locate and complete two different forms.

## 2. FINDABILITY

According to retrieval notes, the form was found on the medical release page at `https://mysouthwell.com/medical-release/`, accessible via **Home → Patient & Visitors → Medical Release**. The search process required web searching and site navigation, but the forms page was reachable without significant difficulty. The PDF filename `SWA-Authorization-for-Release-of-Records-Clean.pdf` is reasonably descriptive, identifying it as the SWA (Southwell Ambulatory) authorization. However, a patient unfamiliar with the "SWA" abbreviation or the corporate distinction between Tift Regional Health System, Inc. and Southwell Ambulatory, Inc. would need to determine which form applies to their situation, with no clear guidance on the page itself about which form to use for which facility. The URL path includes a "2020/10" date segment, indicating the form was uploaded in October 2020 and has not been updated since.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The full text (2,691 characters) is extractable via pdftotext, making it searchable and accessible to screen readers.

**Fillable fields**: Zero. Despite having numerous fields for patient name, date of birth, telephone number, SSN digits, facility checkboxes, record type checkboxes, recipient information, purpose checkboxes, expiration date, and signatures — none are interactive. The form must be printed and filled by hand or annotated in a PDF viewer.

**File format**: 133 KB, 1 page, PDF with 5 fonts and 0 embedded images. The file size is reasonable for a single-page text-based document.

**Digital-first design**: No. This is a print-oriented form. The checkbox indicators are plain text characters (likely square Unicode characters), not interactive form elements. The blank lines (e.g., "Telephone number: ____________________") are designed for handwriting. The form is a flat, non-interactive PDF clearly intended for print-fill-scan workflows.

## 4. CONTENT DESIGN

**Length**: Single page — appropriately concise for the scope of information collected.

**Clarity**: The form uses a mix of plain and legal language. Sections 1-5 are fairly straightforward, but sections 5-7 shift into dense legal statements: "I understand that authorizing the disclosure of this health information is voluntary and that disclosure of such information carries with it the potential for unauthorized re-disclosure." While this language is standard, it is not written for a lay reader.

**Organization**: The form follows a logical numbered sequence (1. Facility selection → 2. Record types → 3. Sensitive information notice → 4. Recipient → 5. Purpose → 6. Revocation/Expiration → 7. Non-conditioning statement). However, the numbering is inconsistent in the extracted text — some numbers appear on their own lines separated from their content.

**Record type options**: The form provides a reasonable set: problem list, medication list, physician orders, laboratory results, x-ray/imaging reports, x-ray films, consultation reports, entire record, billing records, most recent discharge summary, most recent history and physical, physician progress notes, plus date range fields and an "other" option. Each clinical record type includes date range fields ("from date ___ to date ___").

**Layout**: On a single page, the form packs considerable content. The extracted text suggests the layout is dense but organized, with checkboxes grouped logically.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general authorization form for disclosing records to any named individual or organization. It is not specific to patient self-access. However, "Personal Use" is listed as one of the purpose checkboxes, which at least acknowledges that patients may request their own records. The form's framing — "I authorize representatives from the following... facility(ies) to disclose the health information" to a named third party — is structured as a third-party release even when the patient is requesting records for themselves.

**Scope options**: Good. Patients can select specific record types (10+ categories with checkboxes), specify date ranges for each, and choose specific facilities. This granularity is above average.

**Format/delivery options**: The form offers three delivery methods: "Paper," "CD," and "Electronic Delivery (include email address)." The inclusion of electronic delivery is a positive feature, though it requires the patient to provide an email address on the form.

**Right of Access language**: The form does not reference HIPAA § 164.524, the Right of Access rule, or patient rights to access their own records. There is no mention of EHI export or bulk data access.

**SSN collection**: The form requests "Last 4 digits of SSN," which, while less invasive than a full SSN, is not required by HIPAA for a records release and may deter some patients.

## 6. COMPLIANCE

**Revocation**: Section 5 states the authorization "may be revoked by me at any time" but requires written revocation "present[ed]" to the Health Information Management Department at a physical mailing address (PO Box 2560, Tifton, GA 31793) or by phone (229-353-6120). Requiring written, physically-delivered revocation is standard but adds friction.

**Expiration**: The form defaults to **90 days** if no expiration date is specified: "If I do not specify an expiration date or event, this Authorization will expire ninety (90) days from the date on which I signed this Authorization." This is a relatively short default that may require patients to resubmit if processing is slow.

**Non-conditioning**: Section 6 includes appropriate language that SWA "will not condition treatment, payment, enrollment, or eligibility for benefits" on signing the authorization.

**Re-disclosure warning**: Section 7 warns about "potential for unauthorized re-disclosure," which is standard.

**Witness requirement**: The form requires a "Signature of Witness" with date and time, in addition to the patient signature. This is not required by HIPAA and adds a procedural barrier — a patient filling out the form at home would need to find a witness.

**Sensitive information notice**: The form notes records "may contain information concerning sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), human immunodeficiency virus (HIV), drug abuse, alcoholism, sickle cell anemia, and behavior or mental health services." This serves as blanket notice rather than requiring separate consent for each category, which is reasonable.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature required**: The form mandates a witness signature with date and time. HIPAA does not require witness signatures for patient authorization forms. This creates an unnecessary barrier for patients completing the form independently at home.
- **90-day default expiration**: The authorization automatically expires in 90 days if no date is specified. For a patient access request, this is unnecessarily restrictive and could force patients to resubmit if there are processing delays.

### ⚠️ AMBIGUITIES

- **Split forms by legal entity**: Patients must determine whether their care was provided by "Tift Regional Health System, Inc." (form-1) or "Southwell Ambulatory, Inc." (form-3). The ambulatory form covers only four named facilities plus an "Other" field, while the entity list (form-4) shows 40+ facilities across the system. A patient who saw a specialist at "Arthritis & Osteoporosis Center of South Georgia" would have no clear indication which form to use.
- **"Personal Use" purpose ambiguity**: While "Personal Use" is a purpose option, the form is structured entirely as a third-party release (Section 3: "This information may be disclosed to and used by the following individual or organization: Name: ___"). It's unclear whether a patient checking "Personal Use" should write their own name in the recipient field.

### ❌ ERRORS

- **Stale upload date**: The PDF URL path contains `2020/10`, indicating it was uploaded in October 2020 and has not been updated in over 5 years. The form lists only four SWA facilities, but the entity list (form-4) suggests the system has expanded significantly.

### ✨ BRIGHT SPOTS

- **Electronic delivery option**: The form explicitly offers "Electronic Delivery (include email address)" alongside Paper and CD, which is better than many ROI forms that offer only physical delivery.
- **Granular record type selection**: The form provides 10+ specific record categories with individual date range fields, giving patients meaningful control over what information is released rather than forcing an all-or-nothing choice.
