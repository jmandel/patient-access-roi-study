# Evaluation: Proliance Surgeons — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is an **incoming records request** form — titled "Authorization for Use or Disclosure of Health Information" — used to authorize another provider to send records **to** Proliance Pacific Rim Orthopaedic Surgeons (PROS), a member practice based in Bellingham, WA. The "Requesting Records To" section is pre-filled with the PROS address: "2979 Squalicum Parkway, Suite 203, Bellingham, WA, 98225" and fax "(360) 647-1901."

This is **not** a patient-initiated right-of-access form. It is designed for the workflow where Proliance needs records transferred from an outside provider. The "Send Records From" fields are blank for the patient to fill in the originating facility.

Among the four forms found for Proliance Surgeons:
- **form-1** (image-only scan, hosted on npsmri.com) and **form-2** / **form-4** (text-based, nearly identical templates) are outgoing ROI authorization forms for patients to authorize Proliance to release their records.
- **form-3** (this document) serves the opposite direction — bringing records *into* Proliance.

The filename itself — `PACO-PROS-Medical-Records-Release-Authorization-INCOMING-Records.pdf` — makes this distinction explicit with the word "INCOMING."

## 2. FINDABILITY

Per the retrieval notes, this form was discovered through a site-scoped search (`site:proliancesurgeons.com medical records release authorization form PDF`). It is hosted at `https://proliancesurgeons.com/wp-content/uploads/2024/12/PACO-PROS-Medical-Records-Release-Authorization-INCOMING-Records.pdf`. The URL's inclusion of "INCOMING-Records" is helpful for disambiguation, but a patient looking for a form to request their *own* records could easily encounter this form alongside the others and be confused about which to use.

The form was uploaded in December 2024 (per the URL path `/2024/12/`), making it the most recently updated of the four forms. It is not the form linked from the main Proliance medical records page; it appears to be subsidiary-specific content for the PROS/PACO practice.

**Assessment**: Findable via search, but not prominently linked. Low relevance for a patient seeking to exercise their right of access.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (2,551 characters).
- **Fillable fields**: Zero (`fillable_field_count: 0`). All fields are blank-line-style, requiring the patient to print and handwrite.
- **File size**: 63,665 bytes for a single page — reasonable, though the presence of 1 embedded image contributes to size.
- **Fonts**: 6 fonts used.
- **Format**: Not an image-only scan (`is_image_only_scan: false`), which is an improvement over form-1.

The form has no interactive elements whatsoever. A patient would need to print it, fill it out by hand, and submit it physically or by fax. There is no indication of electronic submission options.

## 4. CONTENT DESIGN

**Length**: One page, which is appropriate for the scope of the form.

**Organization**: The form follows a logical top-to-bottom flow: patient identification → source/destination facilities → record types requested → purpose → sensitive information authorization → legal provisions (duration, revocation, re-disclosure, conditioning) → signature. This is well-structured.

**Record type options**: The form offers specific record categories: "Radiology" (with sub-options "Mail Image Disk" / "Fax Image Report"), "Labs," "History and Physical," "Office/Progress Notes," and "Other/Body Part." These are clinically oriented selections appropriate for an incoming records transfer between providers.

**Purpose options**: "Insurance," "Continuing Care," "Legal," "Patient Request," and "Other" are offered as checkboxes.

**Clarity**: The legal language is reasonably clear, though some sections use formal phrasing. The conditional authorization for sensitive information is stated clearly: "If not checked and initialed, the records containing such information can NOT be released." The revocation provision — "I may revoke this authorization at any time, but I must do so in writing and submit it to PROS" — is straightforward.

**Layout**: The form uses blank lines for fill-in fields on the left ("Send Records From") and pre-printed text on the right ("Requesting Records To"), creating a clear visual contrast between what the patient fills in and what's fixed. However, without fillable fields, this layout only works well on paper.

## 5. PATIENT-CENTEREDNESS

This form is **not designed for patient right-of-access requests**. It serves a provider-to-provider records transfer workflow. Key indicators:

- The destination is pre-filled with the Proliance PROS address and fax — the records flow *to* Proliance, not to the patient.
- Record type options (radiology images, H&P, progress notes) are clinically oriented selections a provider would request, not what a typical patient would select.
- There is no mention of patient delivery format options (electronic copy, patient portal, mail to patient address).
- No reference to HIPAA § 164.524 (Right of Access) or patient rights to receive their own records.
- No mention of fees, timelines, or EHI export.

The "Purpose" checkboxes do include "Patient Request," suggesting the form *could* be used when a patient initiates a records transfer to Proliance, but the form is fundamentally structured around the provider-to-provider use case.

**Sensitive information handling**: The form includes opt-in authorization for "Mental health treatment information," "HIV test results," and "Alcohol/drug treatment information," each requiring separate initials. This is a standard approach for Washington State law compliance.

## 6. COMPLIANCE

**Expiration**: "This Authorization expires [insert date]: *If no Date is given; this authorization will expire 6 months from the signature date." A 6-month default is reasonable.

**Revocation**: Clearly stated — patient may revoke in writing, effective upon receipt. Appropriately notes that revocation doesn't affect actions already taken in reliance on the authorization.

**Re-disclosure warning**: "Information disclosed pursuant to this authorization could be re-disclosed by the recipient. Such re-disclosure is in some cases not protected by Washington law and may no longer be protected by federal confidentiality law (HIPAA)." This is a standard and appropriate warning.

**Conditioning**: "I may refuse to sign this Authorization... My refusal will not affect my ability to obtain treatment or payment or eligibility for benefits." This is correct under HIPAA.

**Legal citation error**: The form states "This authorization is being requested of you to comply with the terms of the Confidentiality of the Medical Information Act of 1981, Civil Code Section 56 et seq. and the Health Insurance Portability and Accountability Act (HIPAA) of 2003." This is problematic — the Confidentiality of Medical Information Act (CMIA) is a **California** statute (California Civil Code § 56), not a Washington State law. Proliance Surgeons operates in Washington State. Additionally, HIPAA was enacted in 1996, not 2003 (the Privacy Rule compliance deadline was 2003, but the Act itself is from 1996).

**No patient signature line**: The form has a "PROS Representative" signature line and date, but **no patient signature line**. This is a significant omission — the authorization document appears to lack a space for the patient to sign, which would be required for a valid HIPAA authorization under 45 CFR § 164.508(c)(1)(vi).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Missing patient signature line**: The form includes only a "PROS Representative" signature block with a date field. There is no explicit patient/individual signature line. A valid HIPAA authorization requires the signature of the individual or their personal representative. This is a fundamental defect that could render the form invalid.

### ❌ ERRORS

- **Wrong state law cited**: The form references "the Confidentiality of the Medical Information Act of 1981, Civil Code Section 56 et seq." — this is California's CMIA, not applicable in Washington State where Proliance operates. Washington's equivalent would be the Uniform Health Care Information Act (RCW 70.02).
- **Incorrect HIPAA year**: The form cites "the Health Insurance Portability and Accountability Act (HIPAA) of 2003." HIPAA was enacted in 1996. The Privacy Rule compliance date was April 2003, but the statute year is 1996.
- **Revision date format**: The form footer shows "Revised 08022021" — an ambiguous date format that could be read as August 2, 2021, but the compressed format without separators is unusual and slightly confusing.

### ⚠️ AMBIGUITIES

- **Form purpose unclear to patients**: While labeled "INCOMING Records" in the filename, the form title ("Authorization for Use or Disclosure of Health Information") is generic enough that a patient might mistake it for a general ROI form. The pre-filled destination address is the main signal that this is an incoming transfer form, but a patient unfamiliar with the workflow could be confused.
- **No submission instructions**: The form does not specify how or where to submit it (mail, fax, in-person). A patient would need to know independently that this form goes to the *originating* provider, not to Proliance.
