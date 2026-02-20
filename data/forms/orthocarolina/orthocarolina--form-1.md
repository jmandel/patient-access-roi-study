# OrthoCarolina — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is OrthoCarolina's primary **Authorization for Access/Use/Disclosure of Protected Health Information** — a single-page ROI form used for both patient self-access and third-party release. The header identifies the "Health Information Management Services/Release of Information Department" at 4601 Park Road, Suite 250, Charlotte, NC 28209. It was revised 04/2023, making it the newest of three nearly identical authorization forms found for OrthoCarolina (form-2 is dated 4/2017; form-3 is dated 12/2020). All three share the same essential structure, but form-1 appears to be the current version linked from the medical records page. Compared to the older variants, form-1 adds "Access" to its title ("Authorization for Access/Use/Disclosure"), includes a patient portal upload delivery option, and uses fax number 704-323-3806 (the 2017 version used 704-323-3941).

## 2. FINDABILITY

Based on retrieval notes, the form was straightforward to locate. A web search for `OrthoCarolina "medical records" "release form" Charlotte NC` returned the direct PDF link and the medical records resource page (https://www.orthocarolina.com/resources-category/medical-records). The PDF URL is descriptive: `/storage/wysiwyg/authorization_for_access_use_disclosure_of_protected_health_information.pdf`. No JavaScript rendering or bot-blocking was encountered — a simple `curl` download succeeded. The main concern is that three different versions of essentially the same form exist at different URLs, which could cause patients to find and submit an outdated version. However, the primary form itself is easy to find from the medical records page.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and functional. Full text of 4,868 characters was extracted cleanly, with only minor PDF layout artifacts (e.g., the expiration sentence is split across checkbox lines: "I understand that unless earlier revoked, this authorization will expire one year from today." is garbled in extraction because it overlaps with delivery-method checkboxes).
- **Fillable fields**: Zero (0). Despite being a born-digital PDF (not a scan), no interactive form fields exist. All blanks are drawn as underscores (`___`), requiring the patient to print and handwrite or use PDF annotation tools.
- **File size**: 218 KB for a single page with 2 embedded images — reasonable.
- **Page count**: 1 page.
- **Font count**: 11 fonts used, consistent with a digitally authored document.
- **Digital-first design**: The form was clearly created digitally (not scanned), but it was designed for print-and-fill rather than electronic completion. The absence of any fillable fields is a significant accessibility gap for a 2023 revision.

## 4. CONTENT DESIGN

**Length and density**: The form fits on a single page, which is efficient, but the result is dense and cramped. There is little whitespace, and the document packs patient demographics, record type checkboxes, recipient information, purpose of release, delivery method options, sensitive-information consent, revocation language, and signature blocks all onto one page.

**Clarity of language**: The opening paragraph is legalistic but reasonably clear: "I hereby authorize the access, use, or disclosure of my individually identifiable health information as described below." The sensitive-information consent and revocation language is written in plain-ish English but is delivered in a single run-on paragraph with no line breaks or bullet formatting, making it hard to parse visually.

**Record type options**: The form offers a useful set of checkboxes — Office Notes, Operative Report, Discharge Summary, Physical Therapy, Laboratory Results, MRI Reports, CT Reports, Itemized Statement, plus an "Other" field. Radiology images are handled separately with their own date range and modality checkboxes (X-rays, MRI, CT, Other).

**Delivery methods**: Seven options are listed — patient portal upload, email of medical records, email of radiology images, fax, mailed paper records, mailed CD of radiology images, and in-person pick-up. This is a notably comprehensive set.

**Fee disclosure**: The form states "Medical record copy fees are determined by both the nature/purpose of your request and the format/method of delivery" and adds "If requesting both Medical Records and Images there is a separate fee for each request." No specific dollar amounts are given. This ambiguity could be a concern — patients don't know what they'll pay before submitting.

**Organization name truncation**: The revocation and rights section repeatedly uses "Orth Carolina" instead of "OrthoCarolina" — this appears four times: "notifying Orth Carolina in writing," "Orth Carolina took before it received the revocation," "Orth Carolina cannot make me sign," and "Orth Carolina provides me with." This is likely a text-extraction artifact, but if it reflects what's printed on the form, it suggests a formatting or typographical error.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general-purpose authorization that serves both patients requesting their own records and third-party releases. The "Purpose of Release" checkboxes include "Personal Use" as an explicit option, which helpfully signals that patient self-request is a valid use case. However, the form is not tailored specifically to patients — it treats patient access the same as any other disclosure, requiring the patient to fill in themselves as both the requestor and recipient.

**Scope options**: Good granularity. Patients can specify date ranges (separate for medical records and radiology images), select specific record types via checkboxes, and specify radiology modalities. This is above average for scope control.

**Format options**: The delivery method section is strong — seven options including patient portal upload and email, which are modern digital delivery methods. The inclusion of portal upload is a notable positive.

**Right of Access language**: The form does not reference HIPAA § 164.524 or use the phrase "Right of Access." It references "federal privacy regulations" generally in the opening paragraph. There is no explanation of patient rights or the right to receive records within 30 days.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or USCDI.

**Submission methods**: The header provides mail, email (OrthoCarolinaMedRec@orthocarolina.com), phone, and fax as contact/submission methods. The inclusion of email as a submission method is positive for accessibility.

## 6. COMPLIANCE

**Authorization expiration**: "This authorization will expire one year from date of signature" — stated twice. One year is a standard expiration period and not unreasonable.

**Revocation rights**: Clearly stated — patients can revoke "at any time by notifying Orth[o] Carolina in writing" with the caveat that revocation doesn't apply to actions already taken. This is compliant with HIPAA requirements.

**Treatment conditioning**: The form explicitly states OrthoCarolina "cannot make me sign this authorization as a condition to receive treatment" with the two standard HIPAA exceptions (research-related treatment and information created solely for disclosure). This is proper and clearly stated.

**Voluntary statement**: The form states "YOU MAY REFUSE TO SIGN THIS AUTHORIZATION" is absent from form-1 (it appears in forms 2 and 3). The opening says "this authorization is voluntary," but the explicit refusal notice at the bottom is missing from this version.

**Liability waiver**: The form includes: "Orth Carolina, its employees, officers, and physicians are hereby released from any legal responsibility or liability for disclosure of the above information." This is a fairly standard clause but could be read as asking the patient to waive rights more broadly than necessary.

**Fee ambiguity**: The form acknowledges fees exist but provides no fee schedule, amounts, or reference to state fee limits or HIPAA's cost-based fee standard for patient access requests. This is a gap — patients requesting their own records under HIPAA Right of Access should be charged only reasonable, cost-based fees, but nothing on the form signals this distinction.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Liability waiver language**: The form asks the patient to release OrthoCarolina from "any legal responsibility or liability for disclosure" — a broad release that goes beyond simply authorizing the disclosure.
- **Fee opacity for patient access**: Fees are mentioned as varying by "nature/purpose of your request and the format/method of delivery" with no specifics. For patient self-access requests (which are subject to HIPAA's reasonable cost-based fee limit), this ambiguity could allow overcharging. The form doesn't distinguish between patient access fees (capped by HIPAA) and third-party release fees (regulated by state law).

### ⚠️ AMBIGUITIES

- **Mixed-purpose form without differentiation**: The form serves both patient access (Right of Access under HIPAA § 164.524) and third-party release, but applies identical requirements to both. A patient requesting their own records faces the same form burden as an attorney requesting records for litigation.
- **Garbled text around delivery options**: The extracted text shows "I understand that unless earlier revoked, this authorization will expire one year from today." is interleaved with delivery method checkboxes, suggesting either a formatting/layout issue in the PDF or a text-extraction artifact. If this reflects the actual layout, the overlapping text could confuse patients.

### ❌ ERRORS

- **"Orth Carolina" truncation**: The form text shows "Orth Carolina" four times in the legal sections where "OrthoCarolina" is clearly intended. If this appears on the printed form (not just a text-extraction issue), it's a typographical error in a legal document. Even as an extraction artifact, it suggests the PDF's text layer may not faithfully represent the visible content.
- **Missing "YOU MAY REFUSE TO SIGN" notice**: Unlike forms 2 and 3, form-1 omits the explicit statement "*YOU MAY REFUSE TO SIGN THIS AUTHORIZATION*" that appears at the bottom of the older versions. While the voluntary nature is mentioned in the opening paragraph, removing the prominent refusal notice is a regression.

### ✨ BRIGHT SPOTS

- **Seven delivery method options including patient portal**: The range of delivery options — portal upload, email (for both records and radiology images separately), fax, mail (paper and CD), and in-person pick-up — is unusually comprehensive for a physician practice.
- **Email submission accepted**: Providing OrthoCarolinaMedRec@orthocarolina.com as a submission channel alongside mail and fax lowers the barrier for patients who can fill and email the form.
- **Separate radiology image handling**: Recognizing that radiology images are a distinct deliverable with different format requirements (CD, email) shows attention to the practical realities of records fulfillment.
