# Valley Medical Group — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **generic MediCopy authorization form** titled "MediCopy Authorization for the Release of Medical Records." It is not branded or customized for Valley Medical Group in any way — it is a one-size-fits-all form produced by MediCopy, a third-party Health Information Management (HIM) / Release of Information vendor based in Nashville, TN. VMG patients are directed to this form via a "REQUEST RECORDS" link on vmgma.com that points to https://medicopy.net/patients.

A second form (form-2.pdf) is the Spanish-language version of this same MediCopy authorization. Both are hosted on MediCopy's website, not on vmgma.com. There is no VMG-specific ROI form.

## 2. FINDABILITY

**Moderate difficulty.** The form is not published on vmgma.com itself. A patient must:

1. Visit vmgma.com and notice the "REQUEST RECORDS" link (visible in the header/footer).
2. Follow that link to https://medicopy.net/patients, which is MediCopy's generic patient portal.
3. From MediCopy's site, navigate to the ROI landing page (https://medicopy.net/landing/roi) where the PDF is available for download.

This is approximately a **3-click journey** that crosses domain boundaries — from vmgma.com to medicopy.net — which may confuse patients who don't expect to be redirected to an unfamiliar third-party site. The URL of the form itself (https://medicopy.net/sites/default/files/2023-12/MediCopy%20MRO%20Authorization%20%28English%29.pdf) is not descriptive from a patient perspective; it contains vendor nomenclature ("MRO Authorization") rather than patient-friendly language. A patient searching directly for "Valley Medical Group medical records request" would not find this form via web search, since it contains no reference to VMG.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present — full text is extractable (2,280 characters). Not an image-only scan.
- **Fillable fields:** Zero (`fillable_field_count: 0`). Despite being a digitally-created PDF (not a scan), it has no interactive form fields whatsoever. Patients must print, hand-fill, and submit.
- **File size:** 1.39 MB for a single page — notably large, likely due to an embedded image (logo/branding; `embedded_image_count: 1`). The Spanish version of the same form is only 278 KB.
- **Font count:** 7 fonts used, which is reasonable for a single-page document.
- **Digital-first design:** The form was clearly designed digitally (it has a proper text layer and uses multiple styled fonts), but the **lack of fillable fields** means it does not function as a digital-first document. It is a printable static PDF.

MediCopy does offer an alternative online HelloSign-based form (https://app.hellosign.com/s/01LCH5zj), which may provide a better digital experience — but this PDF itself is not digitally fillable.

## 4. CONTENT DESIGN

**Length:** One page — concise and appropriate for the task.

**Organization:** The form uses a logical top-to-bottom flow with clear section headers phrased as questions:
- "Where are the records being released from?" (facility identification)
- "Tell us about the patient." (patient demographics)
- "Where are we sending the records?" (recipient info)
- "What would you like released?" (record type selection)
- "Purpose of Disclosure" (reason)
- "Delivery Method" (how to receive records)
- "Patient's Signature" (authorization block)

The conversational question-and-answer framing ("Tell us about the patient," "Where are we sending the records?") is more approachable than typical legal-heavy forms.

**Clarity:** Language is generally plain and accessible. The authorization paragraph at the bottom is more legally dense but covers necessary disclosures (re-disclosure risk, right to refuse, 12-month validity, cancellation rights).

**Record type options:** The form offers 11 checkboxes including "All Records," specific categories (Office/Clinic Notes, Operative Reports, Lab/Pathology Results, Radiology Reports, Immunization Records), date-range options, and an "Other" free-text field. It also includes sensitive-information categories that patients can **exclude** (Substance Abuse, AIDS/HIV/STDs, Psychological/Psychiatric conditions).

**Layout concern:** Fitting all of this onto a single page likely makes it feel cramped when printed. With facility info, patient demographics, recipient info, 11 record-type checkboxes, 3 exclusion checkboxes, 5 purpose options, 3 delivery options, and a signature block — that is a lot of content for one page.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a **general release** form, not specifically designed for patient access. The "Where are we sending the records?" section asks for a third-party recipient's name, address, phone, and fax — implying the records go to someone else. A patient requesting records for themselves would need to fill in their own information twice (once as patient, once as recipient). "Personal Use" is listed as a purpose option, but the form's structure is oriented toward third-party disclosure.

**Scope options:** Good. Patients can select specific record types, request "All Records," specify date ranges, or write in custom requests. The exclusion checkboxes for sensitive categories (substance abuse, HIV/AIDS, psychiatric) provide meaningful patient control over disclosure.

**Format/delivery options:** Three options are offered — Email, Fax, and Postage. Email delivery is a positive inclusion. However, "Postage" is noted as having an "additional fee applies" without specifying the amount. No electronic portal or download option is mentioned.

**Rights language:** The authorization block states: "I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization." This is an important patient right. However, the form **does not reference HIPAA § 164.524**, patient Right of Access, or any fee limitations. There is no mention of EHI export, bulk data, or the patient's right to receive records in electronic format under HIPAA.

**SSN field:** The form requests the last four digits of the patient's Social Security Number ("SSN: XXX-XX-____"). While only partial, collecting SSN is not necessary for a records release and raises privacy concerns, particularly on a non-fillable PDF that may be transmitted insecurely.

## 6. COMPLIANCE

- **No fee disclosure:** The form mentions "additional fee applies" for postage but provides no schedule of copying fees, no reference to HIPAA's reasonable cost-based fee standard, and no mention that patient access copies are subject to fee limitations.
- **12-month authorization window:** "This authorization is valid for 12 months from the date of signature." This is a standard and reasonable expiration period.
- **Re-disclosure warning:** The form warns that "information used or disclosed may be subject to re-disclosure by the recipient listed above and will no longer be protected by federal regulations." This is a standard HIPAA-compliant disclosure.
- **No notarization or witness required:** The form requires only the patient's signature, date, and relationship to patient — no notary, witness, or in-person submission requirement.
- **No explicit submission instructions:** The form does not specify how or where to submit the completed authorization (mail, fax, email, in-person). A patient filling out this generic form would not know where to send it unless they navigate back to MediCopy's website.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection:** The form requests the last four digits of the patient's SSN. This is unnecessary for a medical records release under HIPAA and creates an unnecessary data exposure risk, especially on a non-fillable PDF that patients may email or fax through insecure channels.

### ⚠️ AMBIGUITIES

- **No submission instructions:** The completed form has no mailing address, fax number, email address, or portal link for submission. A patient who downloads and fills out this PDF in isolation would have no idea where to send it.
- **"Additional fee applies" for postage** without specifying the amount or referencing any fee schedule. Patients cannot evaluate costs before choosing a delivery method.
- **Generic form with no VMG branding:** The "Facility Name" is a blank field the patient must fill in. A VMG patient might not know what to write — "Valley Medical Group"? A specific office location? A specific provider? This creates unnecessary ambiguity.

### ❌ ERRORS

- **Disproportionate file size:** At 1.39 MB for a single-page non-fillable PDF, the file is roughly 5× larger than the equivalent Spanish version (278 KB). This suggests an unoptimized embedded image and could create download difficulties for patients with limited bandwidth.

### ✨ BRIGHT SPOTS

- **Spanish-language version available:** Having form-2.pdf as a parallel Spanish translation is a meaningful accessibility feature, especially notable for a small independent physician practice.
- **Sensitive-information exclusion checkboxes:** The form's approach of letting patients explicitly exclude substance abuse, HIV/AIDS, and psychiatric records from disclosure gives patients meaningful control — this is a thoughtful design choice that goes beyond many ROI forms.
- **Conversational section headers:** Using plain questions ("Tell us about the patient," "What would you like released?") instead of bureaucratic labels makes the form more approachable.
- **Email delivery option:** Offering email as a delivery method is a practical digital option that many forms still lack.
- **Online alternative exists:** While this PDF is not fillable, MediCopy also offers a HelloSign-based online form, providing an alternative digital pathway for patients comfortable with e-signatures.
