# Evaluation: Erlanger Health System — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a two-page document from **Erlanger Behavioral Health Hospital**, a specialty facility within the Erlanger Health System. It is actually two distinct documents packaged into a single PDF:

- **Page 1** is an informational instruction sheet titled "Health Information Management" that provides the mailing address (804 N. Holtzclaw Avenue, Chattanooga, TN 37404-1235), contact information for the Release of Information Services department (phone: (423) 498-4650 Ext 214 or Ext 215; fax: (423) 498-4639; business hours: Monday–Friday, 8:30 am – 4:00 pm), and a three-step process for obtaining records. Notably, step 1 reads "Download and print the Authorization for Release of Health Information form below" with a placeholder note: "***Add our ROI here" — suggesting this was a web page or template where the actual form was meant to be embedded or linked.

- **Page 2** is the actual authorization form, titled **"AUTHORIZATION TO DISCLOSE HEALTHCARE INFORMATION"**. It is a third-party disclosure authorization form (not a patient-access request form) designed specifically for the behavioral health setting.

In the context of Erlanger's three forms, this is the **behavioral-health-specific disclosure authorization**, distinct from form-1 (the general system-wide release authorization) and form-3 (the patient-specific access request form). This form is hosted on a separate domain (erlangerbh.com) rather than the main erlanger.org site.

## 2. FINDABILITY

**Moderate difficulty.** Per the retrieval notes, this form was found via a general web search (`"Erlanger Health System" "medical records" "release form" filetype:pdf`) rather than through direct site navigation. The form is hosted at `https://www.erlangerbh.com/wp-content/uploads/sites/44/2022/05/Medical-Records.pdf` — a WordPress uploads directory on a separate domain (erlangerbh.com) from the main Erlanger site (erlanger.org). A patient navigating erlanger.org's medical records page would not naturally find this form; they would need to know about the separate behavioral health hospital website or use a search engine. The URL path (`wp-content/uploads/sites/44/2022/05/`) suggests it was uploaded to a WordPress site in May 2022 but may not be prominently linked from any patient-facing navigation. The filename "Medical-Records.pdf" is generic and unhelpful for distinguishing this from any other medical records document.

## 3. TECHNICAL ACCESSIBILITY

**Poor.** This document has significant technical deficiencies:

- **Image-only scan**: The PDF has no text layer whatsoever. The metadata confirms `has_text_layer: false`, `full_text_chars: 2` (just form-feed characters), `font_count: 0`, and `fillable_field_count: 0`. The 2-page document is composed entirely of 6 embedded images of scanned paper.
- **Not fillable**: With zero fillable fields, this form must be printed and completed by hand. There is no way to fill it electronically.
- **Not accessible**: The absence of a text layer means screen readers cannot read this document. It fails WCAG and Section 508 accessibility requirements. Text cannot be selected, copied, or searched.
- **File size**: At 116,703 bytes for a 2-page image-only scan, the file size is reasonable, but the quality of the scan (visible at 200 DPI rendering) is adequate though not crisp.
- **PDF version**: 1.4, which is a dated but universally compatible version.

Page 2 (the actual form) appears to be a photocopy or scan of a physical form, with visible scan artifacts. The text is legible but the overall presentation is unprofessional compared to the digitally-created forms (form-1 and form-3) in the Erlanger system.

## 4. CONTENT DESIGN

**Below average.** The document has notable content and layout issues:

**Page 1 (instruction sheet):**
- Provides useful contact information (address, phone, fax, business hours).
- The three-step process is simple and clear: (1) download/print the form, (2) complete and sign it, (3) fax or mail it.
- However, it contains the placeholder text "***Add our ROI here" under step 1, which is an internal editing note that was never replaced with actual content. This suggests the document was created from a template that was incompletely finalized.
- The warning "Please note: Unsigned and/or incomplete requests cannot be processed" is clear and prominent.

**Page 2 (authorization form):**
- Dense and text-heavy, with small font sizes in the legal paragraphs.
- The form uses a two-column layout for the "I hereby authorize" section with pre-filled facility information on the left and blank recipient fields on the right.
- Record types available for selection include: Psychiatric Evaluation, History & Physical, Practitioner Orders, Practitioner Progress Notes, Discharge Summary, Laboratory Reports, Immunization Records, Medication Records, Treatment/Individualized Service Plan, Discharge Instructions, Financial Account information, and Other.
- Purpose of disclosure options are extensive (11 options including: To Transfer Client Care, For Follow Up Care, To Inform Family, Referral Source, Legal/Court System, To Aid in Treatment, For Discharge Planning, To Update Medical Records, Employer, Application for Provider Coverage, Psychological Report, To Aid in financial account activity, and Other).
- The form includes specific opt-in/opt-out checkboxes (Yes/No with date fields) for three categories of sensitive information: (1) Alcohol, Drug, or Substance Abuse Records; (2) HIV Testing and Results; and (3) Mental Health Records. This is appropriate for a behavioral health setting given 42 CFR Part 2 requirements.
- Disclosure format line states: "Disclosure Format (Paper/US Mail or Fax is default if not marked.): Specify 'E-mail' or other Electronic format" — this is a single write-in line, not checkboxes, making it easy to overlook.
- The authorization expiration clause states it "will expire at the time of disclosure of requested information or on _____ (date cannot be more than 180 days after date signed below)." The 180-day maximum is relatively short.

**Legal language:**
- The form includes a liability release clause: "I hereby release above Facility, its affiliates and its agent and representatives, (including collection agencies) from all legal liabilities that may result from the release of this information according to this request." This goes beyond standard authorization language.
- It also includes an auto-dialer consent: "I also expressly consent and authorize to be contacted by the phone number provided (cellular or residential) by any type of voice method and by auto-dialer technology for any permissible purpose." This is unrelated to records release and appears to be bundled consent.
- The fine print at the bottom references 45 C.F.R. §160-164, 42 C.F.R. Part 2, and 42 U.S.C. § §290dd-2.

## 5. PATIENT-CENTEREDNESS

**Poor.** This form is designed primarily as a third-party disclosure authorization, not a patient access request. Several features work against patient interests:

- **Not designed for self-access**: The form's structure ("I hereby authorize [facility] to disclose information... release information to: [recipient]") is framed as releasing records to a third party, not providing records to the patient. There is no clear checkbox or option for "release to myself" — patients requesting their own records would need to fill in their own name as the recipient.
- **Behavioral health framing**: While appropriate for its setting, the form's emphasis on sensitive categories (substance abuse, HIV, mental health) and the detailed opt-in process may be confusing or intimidating for patients simply seeking their own records.
- **Limited delivery options**: The default delivery is paper/US Mail or fax. Electronic delivery requires the patient to write in "E-mail" on a single line — it is not offered as an equal option.
- **No patient rights explanation**: Unlike form-1, which includes a detailed "PATIENT/RESIDENT RIGHTS" section, this form's patient rights language is minimal and buried in dense legal text. The form does note that treatment cannot be conditioned on signing the authorization, but it's embedded in a paragraph of legal boilerplate.
- **Liability release and auto-dialer consent**: Patients are asked to release the facility from legal liability and consent to auto-dialer contact — neither of which is relevant to a medical records request and both of which may discourage patients from signing.
- **Fax or mail only**: Step 3 on page 1 states patients must "Fax or mail the completed form" — no electronic submission, in-person drop-off, or portal option is mentioned.
- **Validation within 60 days**: The form states "This authorization is valid only if received within 60 days of being signed" — meaning patients have a narrow window to submit after signing.

## 6. COMPLIANCE

Several compliance-related observations:

- **42 CFR Part 2 compliance**: The form appropriately separates consent for substance abuse records, HIV records, and mental health records with individual Yes/No checkboxes and date fields. This aligns with federal requirements for substance abuse treatment records.
- **Bundled consent concerns**: The auto-dialer consent language ("I also expressly consent and authorize to be contacted by the phone number provided (cellular or residential) by any type of voice method and by auto-dialer technology for any permissible purpose") is bundled into the same signature as the records release authorization. Under the Telephone Consumer Protection Act (TCPA), this consent should arguably be separate. Under HIPAA, authorization forms should be limited to the specific purpose of the authorization.
- **Liability waiver**: The clause releasing the facility "from all legal liabilities that may result from the release of this information" could be seen as an attempt to pre-waive patient rights. HIPAA does not permit conditioning access on waiver of rights.
- **180-day expiration cap**: The form limits authorization validity to a maximum of 180 days. While not illegal, this is more restrictive than form-1's one-year default and adds burden for ongoing care coordination scenarios.
- **60-day receipt window**: Requiring the form to be received within 60 days of signing creates an additional procedural barrier that could result in rejected requests.
- **No fee disclosure**: The form does not mention any fees that may be charged for records, unlike form-1 which notes "A fee may be charged."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Bundled auto-dialer consent**: The form includes consent to be "contacted by the phone number provided (cellular or residential) by any type of voice method and by auto-dialer technology for any permissible purpose." This telemarketing-style consent is completely unrelated to medical records release and is bundled into the same signature block — patients cannot opt out without refusing to sign the entire authorization.
- **Broad liability waiver**: The patient is asked to "release above Facility, its affiliates and its agent and representatives, (including collection agencies) from all legal liabilities that may result from the release of this information." Including collection agencies in a medical records release form is unusual and concerning, and the blanket liability waiver may discourage patients from exercising their access rights.

### ⚠️ AMBIGUITIES

- **Patient self-access unclear**: The form is structured as a third-party disclosure authorization with no clear option for patients requesting their own records. It is ambiguous whether a patient should use this form for self-access or whether a different form (like form-3) is intended for that purpose.
- **"***Add our ROI here" placeholder on page 1**: This internal editing note was left in the published document, creating confusion about whether the form is complete or whether an additional document should have been attached.

### ❌ ERRORS

- **Placeholder text left in final document**: Page 1 contains "***Add our ROI here" — an internal template instruction that was never replaced. This is a production error that made it into the published PDF.
- **Image-only scan with no text layer**: The entire document is a scanned image with no OCR text layer, rendering it inaccessible to screen readers, unsearchable, and non-fillable. This is a significant accessibility defect.
- **No revision date visible**: Unlike form-1 (dated 05-10-23) and form-3 (dated 5/2021), this form has no visible revision date or form number, making version control impossible.

### ✨ BRIGHT SPOTS

- **Granular sensitive-information consent**: The separate Yes/No checkboxes with date fields for substance abuse records, HIV records, and mental health records demonstrate thoughtful compliance with 42 CFR Part 2 and allow patients to selectively authorize disclosure of sensitive categories rather than forcing an all-or-nothing choice.
