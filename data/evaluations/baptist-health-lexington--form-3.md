# Baptist Health Lexington — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3 is an **older version** of the system-wide Baptist Health "Authorization for Use and/or Disclosure of Protected Health Information (PHI)" form. It was downloaded from `https://www.baptisthealth.com/-/media/documents/patients-and-visitors/patient-packet/medicalrecordsreleaseform.pdf` — note the URL lacks the "2026" suffix found in form-1's URL (`medicalrecordsreleaseform2026.pdf`), confirming it is a prior revision.

The form is identified by header text "HIM ROI AUTHORIZATION 300385" (a form control number). It is 2 pages compared to form-1's 3 pages (revised 02/2026). No revision date appears anywhere in the form text itself.

In context: Baptist Health Lexington uses system-wide forms from Baptist Health Kentucky. Three forms were found:
- **form-1.pdf**: Current 2026 version of this same authorization form (3 pages, 244 KB)
- **form-2.pdf**: A simpler 1-page "Request for Medical Records" patient access form hosted on MyChart (dated 7/19)
- **form-3.pdf**: This document — the older undated version of form-1 (2 pages, 915 KB)

## 2. FINDABILITY

Per the retrieval notes, forms were found through basic web searches and were "straightforward to find and download — no bot blocking or login walls encountered." Retrieval difficulty was rated **Easy**. This older form was found at a non-versioned URL on baptisthealth.com, alongside the 2026 revision. The fact that both old and new versions remain publicly accessible at similar URLs could cause patient confusion about which form is current. The medical records info page is linked at `https://www.baptisthealth.com/patients-visitors/after-your-visit/medical-records`.

The URL filename `medicalrecordsreleaseform.pdf` is descriptive and straightforward, though it gives no indication of version or date.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (10,017 characters across 2 pages).
- **Fillable fields**: Zero. Despite 12 fonts and clear digital typesetting, the form has no interactive form fields. All blanks are visual-only (e.g., "Patient Full Name:" followed by empty space).
- **File size**: 914,542 bytes (914 KB) for a 2-page document. This is disproportionately large — nearly 4× the size of form-1's 3-page version (244 KB). The metadata shows 15 embedded images, which likely explains the bloat. By contrast, form-1 has only 2 embedded images.
- **PDF version**: Not explicitly listed in metadata, but notes indicate PDF 1.5.
- **Digital-first design**: The form has a text layer and uses digital fonts (12 fonts), so it is not a scan. However, the lack of fillable fields means it is designed as a print-and-handwrite document despite being digitally composed. The 15 embedded images (likely decorative elements, checkboxes, or logos) contribute to the oversized file.

## 4. CONTENT DESIGN

**Length and structure**: 2 pages. Page 1 contains the authorization form proper (patient info, release-to/delivery method, purpose, information to release, authorization/signature). Page 2 is a "Tips for Requesting Medical Record Copies" reference sheet with six "DID YOU KNOW?" sections.

**Organization**: The form follows a logical flow: Patient Info → Release To / Delivery Method → Purpose → Information to Release → Authorization & Signature. Section headers are present ("Patient Info," "Release To / Delivery Method," "Purpose," "Information to Release," "Parent / Patient / Legal Guardian Authorization"). The second page acts as a helpful supplementary guide.

**Language**: Mostly clear but includes substantial legal/regulatory language in the authorization section. The sensitive information disclosure paragraph is a single dense block: "I understand that the protected health information released may include information relating to sexually transmitted disease, acquired immunodeficiency syndrome (AIDS) or human immunodeficiency virus (HIV). It may also include information about my behavioral or mental health services and treatment I have received for drug and alcohol abuse if those categories are applicable to me." This is readable but not plain language.

**Record type options**: Offers a tiered "Package" system (Package 1: Key Documentation, Package 2: All Documentation, Billing Records, Other) with descriptions provided on page 2. This is a helpful structure that gives patients meaningful choices without requiring clinical knowledge.

**Delivery methods**: Five options listed — Paper via US Mail, Fax ("must be less than 50 pages"), CD via US Mail ("requires encryption software"), MyChart ("released to parent/patient/legal guardian only"), and Email. These are clearly presented as checkboxes.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form serves dual purposes. It explicitly offers a "Myself" option: "I request Baptist Health to release my protected health information to me using the information listed above." It also covers third-party releases via the "Other person/organization" option. The purpose section notes it is "not required if being disclosed directly to patient," which is a helpful distinction.

**Scope options**: Patients can specify date ranges ("DATES OF SERVICE REQUESTED: From ___ to ___") with a default of "past 12 months" if no dates are listed. The Package system allows selecting Key Documentation, All Documentation, Billing, or specific record types.

**Delivery format**: Offers electronic delivery via MyChart and Email, alongside Paper, Fax, and CD. The page 2 tip notes: "If you did not specify a delivery method for records to be released, records will be released to patient's Baptist Health MyChart." This MyChart-default approach is patient-friendly for existing portal users.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or the patient's Right of Access. The page 2 tip references 45 CFR 164.512(e)(1)(iii), but only in the context of attorney subpoenas, not patient rights.

**EHI Export**: No mention of electronic health information export, bulk data, or interoperability.

**Turnaround time**: Page 2 states "Our goal is to get you the requested records within 15 calendar days, but delays do occur" — a reasonable and transparent commitment.

**Revocation**: Clear instructions: "I may revoke (cancel) this authorization at any time. Revocations (cancellations) must be made in writing."

## 6. COMPLIANCE

**Authorization expiry**: "This authorization will expire on ___. If no date is included, the authorization will expire one year from the date of signature." The one-year default is standard.

**Voluntariness statement**: "This authorization is voluntary. I understand that Baptist Health will not base treatment, payment, enrollment, or eligibility for benefits on my signing this document." This is proper HIPAA-compliant language.

**Sensitive information**: The form addresses HIV/AIDS, mental health, and substance abuse records in a single bundled consent paragraph rather than offering separate opt-in/opt-out for each category. The text states the information "may include" these categories "if those categories are applicable to me" — treating it as a blanket acknowledgment rather than granular control.

**42 CFR Part 2 reference**: Correctly references federal substance abuse confidentiality requirements, noting that "such information may not be used to criminally investigate or prosecute a substance abuse patient."

**SSN collection**: Requests "Last 4 digits of SSN#" — not the full number, which is more privacy-protective, but collecting any SSN digits for a records release form is arguably unnecessary.

**Fees**: No fee schedule or mention of costs appears anywhere in the form. This is a gap — patients have no way to know what charges they might incur.

**Submission method**: The form provides a centralized mailing address (Louisville, KY), phone, toll-free number, and fax. No email submission or online submission option is mentioned. The form must be printed, signed, and mailed/faxed.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Fax page limit without alternative**: The form states fax delivery "must be less than 50 pages" but does not explain what happens if the record exceeds 50 pages — the patient may be silently switched to a different, potentially less convenient delivery method.
- **SSN collection**: Requesting "Last 4 digits of SSN#" is not required by HIPAA for a records release and creates unnecessary privacy risk. This field is not marked as optional.

### ⚠️ AMBIGUITIES
- **No revision date**: Unlike form-1 (marked "Revised 02/2026"), this form has no visible date or version indicator. Patients and staff have no way to confirm whether they are using the current version. The coexistence of both versioned and unversioned URLs on the same website compounds this confusion.
- **Sensitive information bundling**: The form presents HIV/AIDS, mental health, and substance abuse as a single acknowledgment block rather than separate authorizations. The language "may include... if those categories are applicable to me" is ambiguous — it's unclear whether the patient is actively authorizing release of these categories or merely acknowledging their possible presence.
- **Default date range**: "If no dates are listed, default will be the past 12 months" — patients may not notice this default and unintentionally limit the scope of their request if they want records older than 12 months.

### ❌ ERRORS
- **Outdated form still publicly hosted**: This older version remains accessible at a live URL on baptisthealth.com alongside the current 2026 revision. The URL pattern (`medicalrecordsreleaseform.pdf` vs. `medicalrecordsreleaseform2026.pdf`) makes it likely that search engines and cached links point patients to this outdated version. The older form references a physical address (2600 Stanley Gault Parkway, Suite 101, Louisville, KY 40223) while the 2026 version uses a PO Box (PO Box 436147, Louisville, KY 40253) — meaning patients using the old form may mail to an incorrect address.
- **Bloated file size**: At 914 KB for 2 pages (with 15 embedded images), this PDF is nearly 4× the size of the newer 3-page form. This suggests poor PDF optimization, potentially causing slow downloads on limited connections.
- **OCR artifacts in header**: The text extraction shows "HIM ROI AUTHORIZATION" followed by separated digits "3 0 0 3 8 5" rather than "300385," suggesting the form number is rendered as an image or barcode that extracts poorly.

### ✨ BRIGHT SPOTS
- **Package-based record selection**: The tiered "Package 1 / Package 2 / Billing / Other" system with clear descriptions on page 2 is a thoughtful approach that simplifies an inherently complex choice. It gives patients meaningful control without requiring them to know clinical terminology.
- **MyChart as default delivery**: The page 2 guidance that unspecified delivery defaults to MyChart is a patient-friendly, electronic-first approach that promotes timely digital access.
- **Informative "Tips" page**: The page 2 "DID YOU KNOW?" section provides genuinely useful guidance on personal representative requirements, delivery defaults, turnaround times, and missing records — going beyond what most ROI forms offer.
