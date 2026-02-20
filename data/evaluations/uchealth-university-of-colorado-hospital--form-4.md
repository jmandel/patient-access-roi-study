# Evaluation: UCHealth University of Colorado Hospital — form-4.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization to Disclose Protected Health Information" form — the **current official** UCHealth Colorado ROI authorization. The document number is `HIM19000.1025`, with the `.1025` suffix suggesting an October 2025 revision. The source URL (`uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/2025/11/21090243/HIM19000.1025-Authorization-to-Disclose-PHI.pdf`) confirms it was uploaded in November 2025.

This form supersedes the older form-1.pdf (a 2017-era version covering only 5 facilities) and significantly expands both the facility list and delivery options. It is linked directly from UCHealth's medical records page. Among the four downloaded forms:
- **form-1.pdf**: Outdated predecessor (2017), 5 facilities, no electronic delivery options
- **form-2.pdf**: A narrower "Release and/or Obtain Patient Information" form specific to University of Colorado Hospital, likely for inter-facility transfers; it requests Social Security Number and includes an in-person acknowledgement section
- **form-3.pdf**: Wrong organization entirely (UC Health Cincinnati, uchealth.com domain)
- **form-4.pdf** (this document): Current, comprehensive, system-wide authorization form

## 2. FINDABILITY

Per the retrieval notes, this form was found on UCHealth's medical records page at `https://www.uchealth.org/access-my-health-connection/medical-records-uchealth/`, reachable "within 1-2 clicks from the main website navigation." The page also offers an online request portal (MRO Express) as an alternative. The URL filename is descriptive: `HIM19000.1025-Authorization-to-Disclose-PHI.pdf`. The form was also discoverable via web search.

UCHealth's medical records page is described as "clearly organized with download links, online request option, and contact info for each UCHealth location." This is a strong findability story — the form is directly linked from an intuitive location and has a self-describing filename.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 142,641 bytes — compact for a one-page form with embedded branding.
- **Text layer**: Present and functional. The 5,746-character full text extracts cleanly without OCR artifacts.
- **Fillable fields**: The metadata reports `fillable_field_count: 0`, meaning no interactive PDF form fields are present. The retrieval notes describe "fillable checkboxes and text fields," which may refer to visual checkbox graphics rather than true interactive form fields. A patient would need to print and hand-fill, or use PDF annotation tools.
- **Font count**: 8 fonts — more typographically sophisticated than the 3-font form-1.
- **Embedded images**: 1 (likely a logo).
- **Page count**: 1 page, though the density is very high.
- **Format**: Digital-native PDF with clean text layer — not a scan.

Despite being digitally generated, the lack of true fillable form fields makes this a print-oriented document. The form mentions electronic delivery *of records* (email, My Health Connection portal, PowerShare) but offers no electronic submission pathway for the form itself.

## 4. CONTENT DESIGN

**Layout**: An enormous amount of content is compressed into a single page. The form includes: a 12-facility selection grid, recipient/patient demographics, purpose checkboxes, delivery method options, 28 record-type checkboxes, sensitive-information consent, six numbered disclosure statements, a reproductive healthcare notice, expiration clause, a full fee schedule, a confidentiality warning, a signature block, and a "For HIM Office Use Only" section with ID verification. This is dense — the single page must use small type to accommodate everything.

**Record type options**: The form offers approximately 28 record types in two apparent columns:
- Billing/UB04, Clinic/Progress notes, Discharge summary, Drug/Alcohol treatment*, Emergency room report, Facesheet, Family Planning/Reproductive Health*, Genetic information*, History & Physical, HIV/AIDS information*, Immunization record, Laboratory results, Mental health treatment*, Operative note, Pathology Reports, Pathology Slides, Procedure Reports, Radiology reports, Radiology images, Sickle cell information*, STD/Communicable diseases*, Transplant Evaluation documentation (including Selection Committee Notes), Visit record, Visit summary, Other

The asterisked items require a separate consent signature: `"*I hereby consent to disclose the above bolded specialized information."` The form helpfully defines what "Visit record" and "Visit summary" include in parenthetical notes — e.g., `"Visit record (includes emergency room records, provider notes/reports, Health data, medical history, medicine and allergy lists, test results; does not include images)"`.

**Language**: The six numbered disclosure items are in relatively plain language:
- `"I need not sign this form to ensure health care treatment."` (item 5)
- `"This authorization is voluntary and the disclosure is made at my request."` (item 2)
- `"I have a right to revoke this authorization at any time"` (item 4)

A new item not present in form-1: `"I understand that I may be authorizing release of reproductive healthcare information that may be used in pursuit of litigation against me."` (item 6). This is a notable addition reflecting the post-*Dobbs* legal landscape.

**Fee schedule**: Disclosed directly on the form with distinct pricing for patient access vs. third-party:
- *To patient*: `"My Health Connection delivery is free. Paper: 1-100 pages – free; 100+ pages will be sent electronically. Radiology images: 1st disc is free; Additional discs are $6.50 each."`
- *To third party*: `"$18.53 (retrieval fee for pages 1-10) plus $0.85 (each pages 11–40) plus $0.57 (each page over 40)"`

**Expiration**: `"I request this authorization to expire on _________________or 180 days from the date signed below"` — 180-day default with option to specify an alternative date.

## 5. PATIENT-CENTEREDNESS

This form represents a significant improvement over form-1 for patient self-access:

1. **Self-service delivery options**: The form includes `"If released to self, select method of release:"` with four options: Email (with a field for the address), My Health Connection (patient portal), Mail, and PowerShare (radiology images only). This explicitly acknowledges patients requesting their own records and provides multiple electronic delivery paths.

2. **Free patient access**: The fee schedule clearly separates patient and third-party pricing. Patient access via My Health Connection is free, and paper copies are free up to 100 pages — after which records are "sent electronically." This is a generous and HIPAA-compliant approach.

3. **Granular scope control**: Date-of-service range fields plus ~28 record-type checkboxes give patients fine-grained control over what they request. The definitions for "Visit record" vs. "Visit summary" help patients understand what they're selecting.

4. **Comprehensive facility coverage**: 12 UCHealth facilities plus an "Other Facility/Provider" option with name/address/phone/fax fields, so the form works across the entire system.

5. **No explicit submission instructions on the form itself**: While the medical records web page provides contact information, the form text contains no mailing address, fax number, email, or portal link for submitting the completed authorization. A patient who has only the PDF would not know where to send it.

6. **Internal identifiers**: The form doesn't request MRN at the top (unlike form-1). Instead, `"MRN"` appears only in the "FOR HIM OFFICE USE ONLY" section at the bottom — a clear improvement.

7. **No Right of Access language**: The form does not reference HIPAA § 164.524 or explicitly mention the patient's right of access. There is no mention of EHI export or bulk data.

## 6. COMPLIANCE

- **Fee structure**: The dual fee schedule — free for patients via portal, free paper up to 100 pages, separate third-party rates — is a strong compliance posture. Patient access pricing appears consistent with HIPAA's reasonable, cost-based fee limitation. The third-party rates ($18.53 retrieval + per-page fees) are clearly separated and not applied to patients.
- **Expiration**: 180-day default is reasonable and in line with common practice.
- **No conditioning on treatment**: Explicitly stated in item 5.
- **Revocation rights**: Clearly described in item 4, including the requirement that revocation be in writing.
- **Re-disclosure warning**: Item 3 warns that non-covered entities may not protect the information.
- **Reproductive healthcare warning**: Item 6 (`"I understand that I may be authorizing release of reproductive healthcare information that may be used in pursuit of litigation against me"`) adds a Colorado-specific protection, alerting patients to legal risks. This likely reflects the Colorado Reproductive Health Equity Act or similar state law.
- **Processing time**: Unlike form-1, this form does **not** state a processing time commitment. The 10 business day promise from the older form is absent.
- **"Multiple requests" clause removed**: Form-1's unusual item 5 about multiple requests being authorized for the same purpose is no longer present — the form is limited to `"the date(s) specified above."` This is a compliance improvement.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions on the form**: Despite offering multiple record *delivery* options, the form itself provides no guidance on how to *submit* the completed authorization — no mailing address, fax number, email address, or portal link. A patient who downloads this PDF from a search engine (rather than the medical records webpage) would have no way to know where to send it.

### ⚠️ AMBIGUITIES

- **"100+ pages will be sent electronically"**: The fee schedule states `"100+ pages will be sent electronically"` for patient paper requests. It's unclear whether this means the request automatically converts to electronic delivery, what format the electronic version would take, or whether the patient has any choice in the matter. This could be confusing for patients without internet access or who specifically need paper copies.

- **Fillable vs. non-fillable discrepancy**: The retrieval notes describe "fillable checkboxes and text fields," but the metadata shows `fillable_field_count: 0`. The form appears to have visual checkbox squares that aren't true interactive form fields, which could confuse patients who expect to fill it digitally.

### ✨ BRIGHT SPOTS

- **Explicit patient vs. third-party fee separation**: The fee schedule clearly distinguishes patient access (free via portal, free paper up to 100 pages) from third-party recipient rates. This is unusually transparent and ensures patients aren't overcharged. Very few organizations make this distinction this clearly on the form itself.

- **Electronic delivery options for self-requests**: Offering four delivery channels — email, patient portal, mail, and PowerShare (for radiology images) — directly on the form is forward-thinking. The `"If released to self, select method of release"` framing explicitly acknowledges patient self-access as a primary use case.

- **Reproductive healthcare warning**: Item 6's `"I understand that I may be authorizing release of reproductive healthcare information that may be used in pursuit of litigation against me"` is a notable post-*Dobbs* addition. This proactive warning about legal risks of releasing reproductive health data is rare and demonstrates attention to emerging patient safety concerns.

- **MRN moved to office-use section**: Unlike the older form-1, which asked patients for MRN# and CSN/FIN# at the top, this form places those identifiers only in the "FOR HIM OFFICE USE ONLY" block — removing an unnecessary barrier for patients who don't know their medical record number.

- **Family Planning/Reproductive Health as a distinct sensitive category**: Adding this as a separately consented category (asterisked) alongside Drug/Alcohol, HIV/AIDS, Mental Health, Genetic, and Sickle Cell information reflects evolving privacy concerns and gives patients explicit control over this sensitive data.

- **Visit record vs. Visit summary definitions**: The inline parenthetical explanations — `"Visit record (includes emergency room records, provider notes/reports, Health data, medical history, medicine and allergy lists, test results; does not include images)"` and `"Visit summary (includes provider notes/reports, test results; does not include images)"` — help patients make informed selections rather than guessing at what categories contain.
