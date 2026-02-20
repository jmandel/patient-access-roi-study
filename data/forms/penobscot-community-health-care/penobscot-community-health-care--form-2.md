# Evaluation: Penobscot Community Health Care — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization to Disclose Health Information" form (Rev. 06/01/2023, form code MRC001). It is a general-purpose HIPAA authorization form covering both disclosure of records TO third parties and obtaining records FROM third parties. It is **not** a patient-specific Right of Access request form — it is a bidirectional authorization.

**Relationship to other forms found**: form-2.pdf is textually identical to form-1.pdf. Both contain the same extracted text (7,902 characters), the same revision date (06/01/2023), and the same form code (MRC001). They differ only in hosting URL and file-level metadata: form-1.pdf is at `/wp-content/uploads/2024/03/Release-of-Information-2023.pdf` (modified Mar 27, 2024), while form-2.pdf is at `/wp-content/uploads/2021/11/release-of-information-2023.pdf` (modified Sep 25, 2023). form-2.pdf appears to be the original upload, with form-1.pdf being a later re-upload to a different path. The file sizes differ by only 18 bytes (150,296 vs. 150,278), suggesting minor metadata-level differences only.

## 2. FINDABILITY

**Poor findability.** The form is not directly linked from PCHC's Health Information Management page (https://pchc.com/healthinformation/). That page instead directs patients to use Datavant/Swellbox, a third-party records management portal, for medical records requests. The PDF exists on the server at a WordPress uploads path but is essentially a hidden resource — locating it requires either a search engine query or knowledge of the direct URL.

The URL path (`/wp-content/uploads/2021/11/release-of-information-2023.pdf`) is descriptive enough to identify the document but uses a generic WordPress uploads structure. Having two copies of the same form at different URLs (the 2021/11 and 2024/03 paths) adds confusion — a patient finding one may not know if it's current. Neither URL includes a version indicator that matches the form's own revision date.

The form was discoverable via web search (`"Penobscot Community Health Care" "medical records" "release form" filetype:pdf`), but a patient navigating the website directly would not find it without searching.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (7,902 characters). Not an image-only scan.
- **Fillable fields**: Zero (0). The form has no interactive form fields. It is a flat PDF designed for print-and-fill by hand.
- **File format**: PDF version 1.6, 150,296 bytes for 2 pages — reasonable file size.
- **Fonts**: 7 fonts used.
- **Images**: 2 embedded images (likely logos/headers).
- **Digital-first design**: No. This is a print-oriented document. The absence of any fillable fields means patients must print it, handwrite all entries, and then submit via fax, mail, or in-person delivery. There is no option for electronic completion or digital signature.

## 4. CONTENT DESIGN

**Structure and organization**: The form is logically organized across its 2 pages:
1. Patient identification (name, former name/alias, address, DOB, phone)
2. Authorization direction (DISCLOSE TO / OBTAIN FROM) with recipient details
3. Delivery method selection (Mail, Fax, Email, Verbal Communication, Other)
4. Health information scope (entire record, date-specific, type-specific with checkboxes for Clinical, Immunization, Lab, Hospital, Radiology, Summary, Other)
5. Sensitive health information (Mental health, Substance use disorder/42 CFR Part 2, HIV/AIDS)
6. Continuing communications authorization
7. Purpose of disclosure (At my request, Treatment, Transfer, Insurance, Legal, Other)
8. Duration/expiration
9. Patient rights acknowledgments
10. Signature block with authorized representative options
11. Office use section

**Clarity**: The form uses moderately dense legal language. It is generally comprehensible but includes complex constructions, e.g.: "Unless I strike out this sentence, I intend this authorization to include disclosure of records and information the above disclosing person or organization has received from other healthcare providers, facilities or persons, unless such information may be withheld by law." Opt-out-by-striking mechanisms require careful reading and may confuse patients.

**Length**: Two pages is appropriate for the scope of content covered, including sensitive information categories and rights acknowledgments.

**Record type options**: Good granularity — patients can request entire records or select from 7 specific categories (Clinical, Immunization, Lab, Hospital, Radiology, Summary, Other), with date range filtering.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose authorization** that covers both disclosure and obtaining records. While "At my request" is listed as a purpose option, there is no dedicated patient access pathway. A patient requesting their own records must fill out the same form designed for third-party releases, including specifying themselves as a recipient and navigating sections about redisclosure warnings.

**Delivery format options**: Four options are offered:
- **Mail**: "Records provided by mail will be sent on a compact disc, unless you specify other instructions."
- **Fax**
- **Email**: "Records provided by email will be provided in Adobe PDF files that will be accessible to the email recipient via PCHC's secure messaging portal."
- **Verbal Communication**

The email option uses a secure portal rather than direct email attachment, which is thoughtful from a security standpoint.

**Right of Access language**: The form does not reference HIPAA § 164.524 or the patient's Right of Access. It does state: "PCHC will not condition services or treatment on whether I sign this authorization, unless authorized to do so by law." However, the rights section focuses on refusal/revocation consequences rather than affirming the patient's right to access their records.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or TEFCA.

**Authorized representatives**: The form accommodates representatives with specific categories (Legal guardian, Health care surrogate, Health care power of attorney agent, Parent of a minor).

## 6. COMPLIANCE

**Expiration**: The authorization expires 30 months from signature, with a 1-year limit for mental health facility records, child residential care, and foster care records. The 30-month default is generous. The form allows patients to set an earlier expiration date.

**Revocation**: Clearly stated — patients may revoke "at any time, either orally or in writing." This is a strong patient-friendly provision.

**No-conditioning statement**: Present — "PCHC will not condition services or treatment on whether I sign this authorization, unless authorized to do so by law."

**Fees**: No fee schedule is mentioned anywhere on the form. This is neither positive nor negative — it means patients have no upfront visibility into potential costs.

**Submission method**: The form itself does not specify how to submit it. Contact information (phone, fax, email, mailing address) is provided in the header. There is no explicit in-person-only requirement.

**42 CFR Part 2**: The form includes a proper "Notice to Recipient of Prohibition on Redisclosure" for substance use disorder records, citing specific regulatory sections (§2.31, §§2.12(c)(5), §2.65).

**Partial disclosure notification**: The form includes an office-use checkbox: "If the disclosure is by PCHC and the disclosure is partial or incomplete as compared to the patient's request, PCHC must notify the patient and recipient."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No fees disclosed**: While not imposing fees on the form, the complete absence of fee information means patients cannot evaluate costs before submitting. Under HIPAA, patients requesting their own records are entitled to copies at a reasonable, cost-based fee — the lack of any disclosure here may lead to surprise charges.

### ⚠️ AMBIGUITIES

- **Opt-out-by-striking language**: The form uses "Unless I strike out this sentence" and "Unless I strike out any of the following" as opt-out mechanisms for including third-party-received records and authorizing continuing communications. This requires patients to physically mark up the form to limit scope — failure to do so results in the broadest possible authorization. Patients unfamiliar with this convention may unknowingly authorize broader disclosure than intended.

- **Dual-purpose form obscures patient access**: The form's dual DISCLOSE/OBTAIN structure means a patient requesting their own records must figure out which box to check and whom to name as recipient. There is no guidance distinguishing a patient's Right of Access request from a third-party authorization.

- **CD as default mail format**: "Records provided by mail will be sent on a compact disc" is an unusual default that may confuse patients who expect paper records or who lack a CD drive.

### ❌ ERRORS

- **Duplicate forms at different URLs**: Two identical copies of the form exist at different WordPress upload paths (`/2021/11/` and `/2024/03/`). This creates version-control confusion — patients or staff may not know which is authoritative. The older URL path (`2021/11`) is inconsistent with the form's own revision date (06/01/2023).

### ✨ BRIGHT SPOTS

- **Secure email delivery via portal**: Rather than sending records as unencrypted email attachments, PCHC uses a secure messaging portal with PDF delivery. The form explains this clearly: "An email will be sent to the email address you provide with instructions to the recipient on how to access such records via PCHC's portal."

- **Oral revocation permitted**: Allowing patients to revoke authorization "either orally or in writing" is more accessible than requiring written-only revocation.

- **Partial disclosure transparency**: The office-use section requiring notification when disclosure is "partial or incomplete as compared to the patient's request" is an unusually transparent patient protection measure that most forms lack.

- **Comprehensive sensitive information handling**: The form provides detailed, category-specific consent for mental health, substance use disorder (42 CFR Part 2), and HIV/AIDS records, with clear explanations of potential consequences and patient review rights for each category.
