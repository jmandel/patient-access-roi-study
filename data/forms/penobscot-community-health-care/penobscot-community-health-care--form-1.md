# Evaluation: Penobscot Community Health Care — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization to Disclose Health Information" form (Rev. 06/01/2023, document code MRC001). It is a general-purpose HIPAA authorization form that covers both directions of information flow: disclosing the patient's health information TO a third party, and obtaining the patient's health information FROM a third party. It is **not** a patient-access-specific form — there is no dedicated pathway for a patient simply requesting their own records.

A second form (form-2.pdf) was found at a different URL path but contains identical text content (same 7,902 characters, same revision date). The two files differ only in modification date and MD5 hash, indicating form-2.pdf is an older upload of the same document. There is no other ROI-related form available from this organization.

## 2. FINDABILITY

**Poor findability.** The form is not directly linked from PCHC's Health Information Management page (https://pchc.com/healthinformation/). That page instead directs patients to use Datavant's third-party web portal (Swellbox) for medical records requests. The PDF exists on the server at `https://pchc.com/wp-content/uploads/2024/03/Release-of-Information-2023.pdf` but was only discoverable via a targeted Google search (`"Penobscot Community Health Care" "medical records" "release form" filetype:pdf`). A patient navigating the website would not encounter this form through normal browsing. The URL path (`/wp-content/uploads/2024/03/`) suggests it was uploaded to WordPress media but never linked from a patient-facing page. The filename ("Release-of-Information-2023.pdf") is at least descriptive.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (7,902 characters across 2 pages). Not an image-only scan.
- **Fillable fields**: Zero (0). The PDF has no interactive form fields at all. Patients must print the form, fill it out by hand, and submit physically. This is a significant barrier for digital access.
- **PDF version**: 1.6
- **File size**: ~150 KB for 2 pages — reasonable and lightweight.
- **Font count**: 7 fonts used.
- **Embedded images**: 2 (likely the PCHC logo on each page).
- **Design origin**: This appears to be a digitally-created document (not a scan), but it was designed as a print form rather than a digital-first artifact. The lack of any fillable fields confirms this.

## 4. CONTENT DESIGN

**Structure and organization**: The form is logically organized into clear, labeled sections: patient identification, authorization direction (disclose/obtain), recipient information, delivery method, health information types, sensitive health information, continuing communications, purpose, duration/expiration, patient rights acknowledgments, and signature. The progression is coherent and follows a natural workflow.

**Length**: Two pages is proportionate for the scope of this form, which covers both standard and sensitive records plus regulatory notices for 42 CFR Part 2 and HIV/AIDS information.

**Clarity**: The language is a mix of plain English and legal terminology. Core instructions like "To DISCLOSE my health information below TO:" and "To OBTAIN my health information below FROM:" are clear, with emphasis via capitalization. However, some sections are dense with legal prose, particularly the sensitive health information section and the continuing communications clause: "Unless I strike out any of the following, I intend this authorization to authorize continuing communications and subsequent disclosures of information within the scope of this authorization (i.e., the disclosing and recipient parties of my health care information are authorized to have continuing communications concerning the health care information authorized to be disclosed by this form, and to disclose information covered by this authorization that was created or related to clinical encounters occurring after the date of my signature below)."

**Record type granularity**: The form offers good specificity — patients can request their entire record, a date-range subset, or specific categories: Clinical Records, Immunization Records, Lab Reports, Hospital Records, Radiology Reports, Summary Records, or "Other Records (specify)."

**Delivery methods**: Four options are listed: Mail (on CD by default), Fax, Email (via PCHC's secure messaging portal), and Verbal Communication. The footnotes explain: "* Records provided by mail will be sent on a compact disc, unless you specify other instructions." and "** Records provided by email will be provided in Adobe PDF files that will be accessible to the email recipient via PCHC's secure messaging portal."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form does **not** distinguish between a patient requesting their own records and a third party requesting records with authorization. The same form is used for both scenarios. A patient requesting their own records would need to fill in their own name as both the patient and the recipient, which is unintuitive. The "purpose" checkboxes include "At my request" but the overall form architecture is oriented toward disclosure to/from third parties.

**Scope options**: Good. Patients can choose entire record, date-limited records, or specific record types from a predefined list of 7 categories plus an open-ended "Other" option.

**Format/delivery options**: Multiple options exist (mail, fax, email, verbal), which is positive. The email delivery via secure portal is notable — it provides electronic delivery while maintaining security. However, mail delivery defaults to CD, which is an outdated medium.

**Right of Access language**: The form does not explicitly cite HIPAA § 164.524 or reference the patient's right of access. The rights acknowledgment section mentions the right to refuse, the right to revoke, and the right to a copy of the signed authorization, but not the underlying right to access one's own records.

**EHI Export / bulk data**: No mention of electronic health information export or bulk data availability.

**Authorized representative**: The form accommodates representatives with four options: legal guardian, health care surrogate, health care power of attorney agent, or parent of a minor.

## 6. COMPLIANCE

**Expiration**: "This authorization will expire thirty (30) months from the date of my signature below." The form also notes mental health records from licensed facilities expire after 1 year. The 30-month default is generous and reasonable.

**Revocation**: Clear and permissive — "I may revoke this authorization at any time, either orally or in writing, by notifying PCHC."

**Non-conditioning statement**: Present — "PCHC will not condition services or treatment on whether I sign this authorization, unless authorized to do so by law."

**Redisclosure warning**: Appropriately included — "There is the potential that information disclosed pursuant to this authorization may be redisclosed by persons or entities receiving the information."

**42 CFR Part 2 compliance**: The form includes the federally required redisclosure notice for substance use disorder records, quoting the relevant regulatory sections (§2.31, §§2.12(c)(5), 2.65).

**Fees**: No fees are mentioned anywhere on the form. There is no disclosure of potential costs.

**Submission method**: Not specified on the form itself. The form provides PCHC's mailing address (P.O. Box 439, Bangor, ME 04402-0439), phone, fax (207-990-1248), and email (PCHCMR@pchc.com), but does not explicitly state how the completed form should be returned.

**Sensitive information opt-in**: Sensitive categories (mental health, substance use disorder, HIV/AIDS) require affirmative opt-in via checkbox/initial, which is appropriate.

**Office use section**: Includes a checkbox requiring PCHC to notify the patient if disclosure is "partial or incomplete as compared to the patient's request" — a good internal accountability mechanism.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **No submission instructions**: The form provides PCHC's contact information (mailing address, phone, fax, email) but never explicitly states how a completed form should be returned. A patient is left to infer they should mail, fax, or email it to the listed contact info.
- **"At my request" purpose is ambiguous for patient access**: The purpose checkbox "At my request" does not clearly distinguish between a patient requesting their own records versus authorizing a third-party disclosure at the patient's request. The form architecture funnels both use cases through the same workflow.
- **Opt-out via strikeout**: The clause "Unless I strike out this sentence, I intend this authorization to include disclosure of records...received from other healthcare providers" uses an opt-out mechanism (strike out to exclude) rather than opt-in, which may lead patients to inadvertently authorize broader disclosure than intended.
- **Continuing Communications clause defaults to opt-in**: Similarly, "Unless I strike out any of the following" for continuing communications and subsequent disclosures defaults to authorizing ongoing disclosure of future clinical encounters — a potentially broad authorization that patients may not realize they're granting.

### ❌ ERRORS

- **Default delivery on CD**: "Records provided by mail will be sent on a compact disc" is an outdated default. Many patients no longer have CD drives. While patients can "specify other instructions," defaulting to an obsolete medium creates friction.

### ✨ BRIGHT SPOTS

- **Secure email delivery option**: The form offers email delivery via PCHC's secure messaging portal with instructions sent to the recipient, showing awareness of secure electronic delivery practices.
- **Partial disclosure accountability**: The "FOR OFFICE USE ONLY" section requires PCHC staff to flag when disclosure is partial or incomplete compared to the patient's request — an unusual internal control that promotes transparency.
- **Generous expiration**: The 30-month default authorization period is more generous than many forms (which often default to 90 days or 1 year), reducing the burden of re-authorization.
- **Oral revocation permitted**: Allowing revocation "either orally or in writing" is more patient-friendly than forms requiring written revocation only.

### 🚩 RED FLAGS

- **Form is unlinkable from the website**: The HIM page directs patients exclusively to Datavant/Swellbox, a third-party vendor, for records requests. The PDF authorization form exists on the server but is effectively hidden. This creates a situation where patients cannot independently find and use the organization's own form without a search engine, potentially funneling all requests through a commercial intermediary.
