# Cone Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **primary HIPAA Authorization for Use/Disclosure of Protected Health Information** for Cone Health's hospital system. It is a single-page English-language authorization form (91,381 bytes, PDF 1.3) dated 12/12/2024, identifiable by a document control number `165952800.1` in the footer.

Cone Health publishes four related documents. Form-2 is the Spanish-language equivalent of this form (same content, 2 pages). Form-3 is a Request for Amendment of Health Information (not an ROI form). Form-4 is a separate ROI form specifically for Cone Health Medical Group (CHMG) physician practices. This creates a split: hospital patients use form-1, while CHMG outpatient/practice patients need form-4 — though a patient may not know which entity treated them.

The form is titled "HIPAA AUTHORIZATION FOR USE / DISCLOSURE OF PROTECTED HEALTH INFORMATION" and serves as a general-purpose authorization — it covers both patient-initiated requests and third-party disclosures, with the purpose specified only by checkbox: "☐Patient Request ☐ Legal ☐ Other(specify)."

## 2. FINDABILITY

Per the collection notes, the form was located via the main Medical Records page at `https://www.conehealth.com/patients-visitors/medical-records/`, where it is directly linked as a downloadable PDF. It was also discoverable through web searches for "Cone Health release of information form" and similar queries.

**Positive**: The form is linked from a dedicated, logically-named page in the website's patient navigation hierarchy (`/patients-visitors/medical-records/`). The PDF filename is descriptive: `Cone-Health-HIPAA-Authorization-12-12-24-English.pdf`.

**Negative**: The website employs bot protection that blocks basic programmatic access (returning "Access Denied" for standard `curl` requests). Full browser-like headers were required. This is a barrier for assistive technologies or automated tools patients might use. Additionally, the separate CHMG form (form-4) is *not* linked from the main Medical Records page — it was found only via web search, meaning a CHMG patient navigating the website would find only the hospital form.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,420 characters). Not an image-only scan.
- **Fillable fields**: **Zero**. Despite being a structured form with numerous blanks (patient name, DOB, SSN, addresses, dates, checkboxes), the PDF contains no interactive form fields. Patients must print and handwrite all entries.
- **Font count**: 14 fonts are used in a single-page document, which is high and suggests complex formatting or embedded logo graphics.
- **Embedded images**: 11 images in a 1-page PDF. This likely includes checkbox graphics rendered as images rather than native PDF form elements, plus logos or decorative elements.
- **PDF version**: 1.3 — an older format (circa 2000), though this doesn't inherently affect usability.
- **File size**: 91 KB for a single page is moderately large, likely due to the 11 embedded images.

The lack of fillable fields is the most significant technical deficiency. This form cannot be completed electronically — it must be printed, hand-filled, and submitted physically or via fax/scan. This is a meaningful accessibility barrier, especially given that the CHMG form (form-4) *does* have 42 fillable fields, showing the organization has the capability to produce fillable PDFs.

## 4. CONTENT DESIGN

**Structure**: The form is organized into 6 numbered sections followed by an 8-item "PATIENT RIGHTS AND SIGNATURE" block. The layout is dense but logically ordered: patient identification → recipient → purpose → facility selection → date range → information type → delivery method → rights/signature.

**Facility selection (Section 3)**: Lists 11 specific facilities by name with checkboxes (Moses H. Cone Memorial Hospital, Alamance Regional Medical Center, Annie Penn Hospital, MedCenter High Point, Wesley Long Hospital, Women's Hospital, two behavioral health facilities, two cancer centers), plus "Other" and "Cone Health Medical Group" write-in lines. This is thorough but potentially confusing — patients may not know which facility holds their records.

**Information type selection (Section 5)**: Offers granular checkboxes: "Dates of Service Only," "Discharge Summary," "History and Physical," "Consultation Reports," "Operative Notes," "Progress Notes," "Laboratory Results," "X-Ray Reports," "ED Visit," "Substance Use Disorder Treatment Records," and "All." A separate behavioral health section adds: "Psychosocial History," "Psychiatric Admission Assessment," "Therapy Notes," "Two-Way Communication," "After Visit Summary (AVS)," "Suicide Risk Assessment at Discharge." This is detailed but uses clinical terminology throughout that patients are unlikely to understand (e.g., "History and Physical," "Consultation Reports," "Operative Notes," "Two-Way Communication").

**Delivery options (Section 6)**: Six options: "Print on paper," "CD/USB," "Mail to address above," "Fax to number above," "Pick up by the authorized recipient," "Email to address above." The inclusion of email is notable, though the rights section warns: "if I request my records to be mailed or e-mailed, my health information may not be secure during transit."

**Language**: The form is written in legal/administrative register. The Patient Rights section uses dense paragraph-style text with long sentences. For example, item 3 is a 56-word sentence explaining when authorization is required as a condition of treatment. While legally accurate, it is not plain-language.

**Patient identification**: Requires "Last 4 SSN: XXX-XX-|" — the format suggests it wants only the last 4 digits of the Social Security Number, with the first 5 masked. This is reasonable for identity verification but could confuse patients who may think they need to provide a full SSN.

## 5. PATIENT-CENTEREDNESS

**Mixed purpose**: The form does not clearly distinguish between a patient requesting their own records and a patient authorizing release to a third party. The same form serves both purposes, differentiated only by a checkbox in Section 2 ("☐Patient Request ☐ Legal ☐ Other"). A patient requesting their own records must navigate an authorization form designed primarily for third-party disclosures, including fields for recipient name, address, fax, and email that may feel unnecessary or confusing.

**No online submission pathway**: There is no electronic submission option. The form must be printed, completed by hand, and delivered — presumably in person, by mail, or by fax. The revocation clause provides a mailing address (Moses H. Cone Memorial Hospital; HIM Dept. – ATTN: ROI; 1200 N Elm Street; Greensboro, NC 27401) but there is no explicit submission address or instructions for the initial authorization itself.

**Fee disclosure**: Section 6 notes parenthetically "(There may be a fee charge for reproduction of medical records, films, and tapes.)" and Patient Rights item 8 states "I understand there may be a charge associated with the Release of Information services rendered." Neither specifies fee amounts or references HIPAA's fee limitations. "Fee charge" is an unusual and somewhat redundant phrasing.

**Expiration**: The authorization "will expire 1-year from the date signed unless an expiration date is otherwise stated." This is a reasonable default.

**Revocation**: Instructions for revoking authorization are provided but require written notice mailed to a specific address. No email, phone, or electronic revocation option is mentioned.

**Behavioral health carve-out**: The notes indicate the Medical Records page states that behavioral health records require calling the HIM department directly (336-832-8677) due to 42 CFR Part 2, despite the form itself including checkboxes for behavioral health facilities and substance use disorder treatment records. This creates a contradictory experience — the form suggests you can request these records via the form, but the website says you must call.

## 6. COMPLIANCE

- **42 CFR Part 2**: The form includes a specific acknowledgment for substance abuse records referencing "42 C.F.R., Part 2" — this is appropriate and legally required for substance use disorder treatment records.
- **Sensitive categories**: The form broadly covers "reproductive health, mental health, sexually transmitted diseases, genetic testing, drug/alcohol abuse, and HIV/AIDS diagnosis" in a single bundled authorization (Patient Rights item 1). This bundled approach means a patient cannot request general records without also authorizing release of these sensitive categories. There is no option to exclude specific sensitive categories.
- **Condition of treatment**: Patient Rights item 3 correctly states that Cone Health "cannot make me sign this authorization as a condition of receiving treatment" with the two standard HIPAA exceptions (research-related treatment and treatment solely for creating PHI for disclosure).
- **Re-disclosure warning**: Patient Rights item 4 warns that "once the information is disclosed pursuant to this authorization, the released information may no longer be protected by federal or state privacy regulations."
- **Representative authorization**: The signature block includes checkboxes for "☐ Parent ☐Guardian ☐ Authorized Representative (attach copy of legal documents)" — appropriate for allowing authorized persons to sign.
- **Identity verification**: The "OFFICE USE ONLY" section requires a Driver's License number and HIM Staff Signature, suggesting in-person identity verification is expected.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Bundled sensitive-category consent**: The form requires blanket authorization for all sensitive categories (reproductive health, mental health, STDs, genetic testing, drug/alcohol abuse, HIV/AIDS) with no opt-out mechanism. Patient Rights item 1 states: "This includes information pertinent to sensitive information such as that related to my reproductive health, mental health, sexually transmitted diseases, genetic testing, drug/alcohol abuse, and HIV/AIDS diagnosis." A patient requesting a simple lab result must authorize disclosure of all sensitive categories. This bundling may discourage patients from requesting records or result in unintended disclosure of sensitive information.

- **No submission instructions**: The form provides no address, fax number, email, or instructions for where or how to submit the completed form. The only address on the form appears in the revocation clause. A patient completing this form has no guidance on how to actually deliver it.

### ⚠️ AMBIGUITIES

- **Dual-purpose confusion**: The form serves both patient-access and third-party-release purposes without clearly distinguishing the two workflows. When a patient checks "☐Patient Request," they are still required to fill in "I authorize Cone Health... to disclose the following information to: Name: / Address: / Email Address:" — implying they must name themselves as recipient, which is awkward and unclear.

- **Hospital vs. CHMG form confusion**: Two separate ROI forms exist — this one for hospitals and form-4 for CHMG practices. The CHMG form is not linked from the main Medical Records page. A patient who received care at a CHMG practice might use this hospital form and have their request rejected or redirected, with no guidance on the form about this distinction.

- **Behavioral health contradiction**: The form includes checkboxes for behavioral health facilities and substance use disorder records, yet the Medical Records webpage reportedly instructs patients to call the HIM department for behavioral health records. This creates conflicting guidance.

### ❌ ERRORS

- **"Fee charge" phrasing**: Section 6 uses the phrase "There may be a fee charge for reproduction of medical records, films, and tapes" — "fee charge" is redundant and non-standard. It should read "fee" or "charge," not both.

- **Non-fillable PDF despite capability**: The hospital form (form-1) has 0 fillable fields, while the CHMG form (form-4) has 42 fillable fields. This inconsistency within the same organization suggests an oversight in form production rather than a deliberate choice.

### ✨ BRIGHT SPOTS

- **Spanish-language version available**: Cone Health provides a full Spanish translation of the authorization form (form-2), published alongside the English version on the same Medical Records page. This is a meaningful accessibility measure for the patient population served.

- **Email delivery option**: The form explicitly offers "☐Email to address above" as a delivery method, which many organizations do not provide. Combined with the transparency warning about email security, this gives patients a modern delivery option with informed consent about risks.

- **Granular information selection**: The form offers 18+ specific record-type checkboxes including a dedicated behavioral health section, giving patients meaningful control over what is disclosed — assuming they understand the clinical terminology.

- **Recent update**: The form date of 12/12/2024 indicates active maintenance. Many organizations use forms that are years or even decades old.
