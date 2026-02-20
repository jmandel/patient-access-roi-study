# Evaluation: Lankenau Medical Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization for Disclosure of Health Information" form published by **Main Line Health**, the parent health system of Lankenau Medical Center. It is a system-level form used across all Main Line Health facilities — the top of the form lists checkboxes for Bryn Mawr Hospital, Lankenau Hospital, Riddle Hospital, Bryn Mawr Rehabilitation, Paoli Hospital, and MLHC Physician Office.

Page 1 is the authorization form itself; page 2 contains detailed instructions for completing the form, including contact information, a delivery options matrix, and rules about who may sign.

**Relationship to form-1.pdf**: The two forms are substantively identical in content and layout. The extracted text matches almost exactly. The key differences are:
- **Form revision code**: form-2 is marked `MLH900-331.0325` (March 2025), while form-1 is `MLH900-331.0621` (June 2021). Form-2 appears to be a **newer revision**.
- **Fillable fields**: form-1 has 41 fillable fields and includes PRINT/SAVE AS/EMAIL/RESET buttons; form-2 has **0 fillable fields** — it is a flat, non-interactive PDF.
- **File size**: form-2 is 165 KB vs. form-1's 1.5 MB, consistent with the absence of embedded form logic.
- **Contact details differ slightly**: form-2 lists a phone number (484-476-1721) and a different suite address ("Ste. 160") vs. form-1's "Suite 110" and no phone number on the instructions page.

The two files are hosted at different URLs on mainlinehealth.org, possibly reflecting a version transition where the newer flat PDF replaced the older fillable one, or where both remain available at different paths.

## 2. FINDABILITY

Per the retrieval notes, the form was **easy to find** via web search. Searches for `Lankenau Medical Center "authorization" "release" "health information" form PDF` returned direct PDF links as the first result. Main Line Health publishes both URLs prominently.

The source URL (`authorization-for-disclosure-of-health-information.pdf`) has a **descriptive filename** that clearly identifies the document's purpose. The form appeared with multiple search query variations, and neither URL required authentication or triggered bot blocking.

However, a patient searching specifically for "Lankenau Medical Center" would encounter a system-level form rather than a facility-specific one, which could momentarily confuse someone looking for a Lankenau-branded document. The form's header lists the facilities clearly enough to resolve this.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (6,943 characters). Not an image-only scan.
- **Fillable fields**: **Zero**. This is a flat PDF with no interactive form fields. A patient would need to print it to complete by hand or use ad-hoc PDF annotation tools. This is a significant step backward from form-1, which offered 41 fillable fields.
- **File size**: 165 KB for 2 pages — efficient and appropriate.
- **PDF version**: 1.6.
- **Fonts**: 7 fonts embedded, no images embedded.
- **Digital-first design**: **No.** Despite being a born-digital PDF (not a scan), it is designed as a print-and-fill document. There are no interactive elements, no action buttons, and no digital submission pathway embedded in the document itself.

The text extraction shows control characters (e.g., `\u0018` for checkbox glyphs, `\b` for form field placeholders), suggesting the PDF uses custom font encoding for form elements. The checkbox characters extracted as `\u0018` rather than standard Unicode checkbox glyphs — a minor rendering quirk that doesn't affect usability but does affect text extraction fidelity.

## 4. CONTENT DESIGN

**Length**: 2 pages — one for the form, one for instructions. This is appropriate and well-proportioned.

**Clarity**: The form uses a mix of plain language and legal phrasing. The authorization statement itself is clear: "I hereby authorize [facility] to release medical information from the records of [Patient Name]." The instructions on page 2 are detailed and well-organized with numbered items and bullet points.

The sensitive information section is clearly written: "I understand that any information released pursuant to this request will not include any information related to my treatment for AIDS/HIV, psychiatric care and treatment, treatment for drug and alcohol abuse unless specifically checked below."

**Organization**: Logically structured — facility selection → patient identification → record types → sensitive categories → recipient → purpose → delivery → expiration → signatures → instructions. This flow is intuitive.

**Record type options**: 10 checkboxes — Complete Chart Copy, Abstract, Discharge Summary/Instructions, ER Record, Progress Notes, Medication Records, History and Physical, Consultations, Operative Report, and Other. The "Abstract" option cross-references the instructions page for its definition, which is a helpful touch.

**Delivery options**: Six options offered — encrypted USB, MyChart, printed paper & pick-up, printed paper & mail, fax, encrypted email or third-party portal. The instructions page provides a helpful matrix showing which delivery options are available for each recipient type (Patient, Provider, Legal, Insurance).

**Minor issue**: The address field on page 2 appears garbled in the text extraction: "3\u0007 803 West Chester Pike" — this may be a rendering artifact of `3809` with a control character, or it could indicate a text encoding issue in the PDF. Form-1's instructions show "3809 West Chester Pike" cleanly.

## 5. PATIENT-CENTEREDNESS

**Patient access pathway**: The form includes "Patient personal use" as an explicit purpose checkbox, which is a positive signal. However, this is fundamentally a **general-purpose disclosure authorization form** — it serves patients requesting their own records and third-party releases equally. There is no separate, streamlined patient access request form.

**Scope options**: Good. Patients can specify date ranges ("Covering the period(s) of care"), select from 10 record type categories, and separately consent to sensitive information categories (HIV, psychiatric, substance abuse).

**Format/delivery options**: Strong. Six delivery options including modern electronic formats (encrypted USB, MyChart, encrypted email). The delivery matrix on page 2 clarifies that patients can use all delivery methods while some are restricted for other requestor types.

**Response timeline language**: The form clearly states the 30/60-day response timeline with a possible 30-day extension, which aligns with HIPAA requirements. This transparency is helpful.

**Right of Access language**: The form references the patient's right to have a denial reviewed by "a licensed health care professional selected by Main Line Health who did not participate in the decision to deny my request" — this mirrors HIPAA § 164.524 requirements without citing the specific regulation.

**EHI Export / bulk data**: No mention of electronic health information export, USCDI, or bulk data requests.

**Verbal release provision**: The form includes a section for verbal release of mental health information when a patient is "physically unable to provide a signature," requiring two witnesses. This is a thoughtful accommodation.

## 6. COMPLIANCE

**Fee disclosure**: The form states: "Main Line Health may charge a fee for obtaining copies of records, except for copies mailed directly to a healthcare facility or physician for continuing care purposes, and I agree to pay such charges." The instructions add: "Records for all purposes except continuing care are subject to copying charges in accordance with Federal and PA State Law. An invoice will be delivered to you and payment will be expected prior to the records being delivered." The phrase "payment will be expected prior to the records being delivered" could be read as requiring **prepayment**, which for patient access requests may conflict with HIPAA's reasonable cost-based fee limitations and the requirement to provide records even while resolving fee disputes.

**Expiration**: 12-month automatic expiration with the option to set a shorter date ("Date not to exceed 12 months"). This is a reasonable timeframe.

**Submission channels**: The instructions provide fax, email (HIMROI@mlhs.org), US Mail, and walk-in options. No online submission portal is mentioned.

**Witness requirement**: The main signature block includes a witness line. Whether this is mandatory or optional is not explicitly stated — the form simply provides the field labeled "(Signature of Witness)."

**No notarization required**: The form does not demand notarization.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Prepayment language**: The instruction "payment will be expected prior to the records being delivered" could function as a barrier for patient access requests. Under HIPAA, covered entities may charge a reasonable cost-based fee for patient access but should not withhold records pending payment disputes.

### ⚠️ AMBIGUITIES

- **Witness requirement unclear**: The form includes a "(Signature of Witness)" line but does not state whether a witness signature is mandatory. If required, this creates an additional barrier for patients completing the form at home.
- **Which form is current?** Two nearly identical forms exist at different URLs with different revision codes (0325 vs. 0621). A patient could encounter either version — form-2 (this document, revision 0325) is the more recent revision but **lacks fillable fields**, while form-1 (revision 0621) has 41 fillable fields. It's unclear whether the organization intends both to be active or if form-2 supersedes form-1.

### ❌ ERRORS

- **Garbled address in instructions**: The text extraction shows the mailing address as "3\u0007 803 West Chester Pike, Ste. 160" — the `\u0007` control character suggests a text encoding defect in the PDF. Compare form-1 which renders the address cleanly as "3809 West Chester Pike, Suite 110."

### ✨ BRIGHT SPOTS

- **Delivery options matrix**: The instructions page includes a clear table showing which delivery methods (MyChart, USB, Fax, Print & Mail, Print & Pick-up) are available for each requestor type (Patient, Provider, Legal, Insurance). This level of transparency is unusual and helpful.
- **Multiple electronic delivery options**: Offering encrypted USB, MyChart, encrypted email, and third-party portal alongside traditional paper/fax shows genuine engagement with modern delivery expectations.
- **Verbal consent accommodation**: Including a witnessed verbal consent pathway for patients physically unable to sign demonstrates attention to accessibility edge cases.
- **"Patient personal use" as explicit purpose**: Making this a dedicated checkbox normalizes patient access requests rather than forcing patients to write in their own purpose.
