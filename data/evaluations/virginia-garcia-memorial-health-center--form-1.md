# Evaluation: Virginia Garcia Memorial Health Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is the English-language HIPAA Release of Information (ROI) form used by Virginia Garcia Memorial Health Center (VGMHC), a federally qualified health center in Hillsboro, OR. The document is titled "Release of Information (ROI)" and is 2 pages long (319 KB). It is a general authorization form that covers both patient-access and third-party release scenarios — it allows patients to authorize VGMHC to "Get information," "Give information," or "Get and give information."

This is one of four ROI-related forms found for VGMHC:
- **form-1.pdf** (this document): English ROI form
- **form-2.pdf**: Spanish ROI form (identical structure, Spanish language)
- **form-3.pdf**: Release of Verbal Health Information (English) — 1 page, authorizes verbal disclosure to family/caregivers
- **form-4.pdf**: Release of Verbal Health Information (Spanish) — 1 page, Spanish version of form-3

Form-1 is the primary written records release form and the most relevant document for patients requesting copies of their health information.

## 2. FINDABILITY

The form was easy to locate. A direct web search for the organization name plus "release health information form PDF" returned direct links. The form is also accessible via the Patient Forms page at `https://virginiagarcia.org/get-care/patient-forms/` under a dedicated "Release of Information Forms" section. The retrieval notes rate difficulty as **easy**.

However, two usability issues were noted:
- The PDF links on the patient forms page are embedded in Divi theme JavaScript click handlers rather than standard HTML `<a href>` links, which could cause problems for screen readers and users who right-click to save links.
- The URL is descriptive: `HIPAA-Release-of-Information-ROI-Form-English-2.pdf` — clear and human-readable.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and complete. The document has a full text layer with 3,802 characters of extractable text. It is not an image-only scan.

**Fillable fields**: The form has **54 fillable form fields**, indicating a well-designed interactive PDF. However, `fillable_field_names` is an empty array, meaning the fields lack accessible names — a potential problem for screen readers and assistive technology. Despite the high field count, the form can be filled digitally.

**File format**: At 319 KB for 2 pages with 1 embedded image (likely the VGMHC logo), the file is reasonably sized. It uses 8 fonts.

**Digital-first design**: This appears to be a born-digital document, not a scan. The structured text layer, high fillable field count, and clean text extraction all indicate a purpose-built PDF form.

## 4. CONTENT DESIGN

**Length**: 2 pages — proportionate for the scope of information covered. Page 1 contains the authorization fields and record type selections; page 2 contains the legal disclosures, signature area, and a staff-only section.

**Organization**: The form follows a logical flow:
1. Patient identification (name, alias, DOB)
2. Direction of information flow (get/give/exchange) — with a clear "ONLY ONE BOX" instruction
3. Recipient/sender details (provider name, address, phone, fax)
4. Scope: verbal vs. past/future records, purpose, frequency
5. Record types via checkboxes (progress notes, immunizations, labs, dental, medications, etc.)
6. Sensitive information categories (HIV/AIDS/STD, genetic testing, mental health, drug/alcohol)
7. Legal disclosures (restrictions, rights, cancellation)
8. Signature block
9. Staff verification section

**Clarity**: The language is mostly clear and accessible. The rights section uses relatively plain language: "You do not have to sign this form and you can still get treatment or eligibility for benefits." The cancellation instructions are specific: "send a written statement to PO Box 6149, Aloha, OR 97007."

**Record type granularity**: The form offers useful specificity — patients can request "Last 3 visits" or specify a date range for progress notes, and choose from 9+ record categories plus 4 sensitive-information categories. The "All health records" checkbox is present with an explicit note that sensitive categories are excluded unless separately checked.

**Version control**: The form includes effective date (10/24/2016), revision date (04/14/2021), department (Compliance), and version number (6), showing active document governance.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose** ROI form — it does not differentiate between a patient requesting their own records and a patient authorizing release to a third party. The direction checkboxes ("Get information," "Give information," "Get and give information") technically accommodate both scenarios, but there is no dedicated patient-access workflow or simplified path for a patient who simply wants a copy of their own records. A patient requesting their own records must fill out the same two-page form designed for inter-provider exchanges.

**Purpose options**: The form lists purposes as "Coordination of care," "For my own use," "Insurance/Legal," and "Other." The inclusion of "For my own use" is a positive signal for patient access.

**Format/delivery options**: The form does **not** offer electronic delivery options. There is no mention of email delivery, patient portal download, CD/USB, or any digital format choice. The only delivery-related note is "Please do not fax more than 20 pages," suggesting fax and mail are the primary delivery mechanisms.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or the patient's Right of Access. It cites "45 CFR Part 160 and Subparts A and E or Part 164" and Oregon state law (ORS 179.505, 192.525) in general terms, but does not frame the patient's right to obtain their own records as a distinct entitlement.

**Processing time**: The form states "VGMHC has 30 days to process your records request," which aligns with HIPAA's 30-day requirement.

**EHI Export**: No mention of electronic health information export or bulk data access.

**Duration**: The authorization "remains in effect until my care ends with Virginia Garcia" unless the patient specifies otherwise. This is notably open-ended — the default expiration is tied to the care relationship rather than a fixed time period.

## 6. COMPLIANCE

**Revocation**: Clearly described — patients can cancel "in writing at any time" by sending a statement to the PO Box or requesting a Revocation of Authorization form from any employee. Past disclosures cannot be undone.

**Right to refuse**: Explicitly stated: "You do not have to sign this form and you can still get treatment or eligibility for benefits (unless the services are solely for the purpose of giving health information to someone else)."

**Re-disclosure warning**: The form includes a clear re-disclosure notice: "If we already have records from other clinics, it may become part of your chart and may be re-released and not be protected by privacy laws or regulations, except for Alcohol and Drug treatment records."

**Sensitive information handling**: Sensitive categories (HIV/AIDS/STD, genetic testing, mental health, drug/alcohol) require separate opt-in checkboxes, which is consistent with 42 CFR Part 2 and state-level protections.

**Fees**: No fees are mentioned on the form.

**Submission method**: The form does not specify how it must be submitted. There is no requirement for in-person delivery or notarization. The fax number and PO Box address are provided in the header, implying mail and fax are accepted.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Bilingual availability**: Having the identical form available in both English (form-1) and Spanish (form-2) serves VGMHC's predominantly Spanish-speaking patient population well. This is consistent with the organization's mission as an FQHC serving the Latino community.
- **"For my own use" purpose option**: Explicitly including this checkbox acknowledges patient-access requests as a valid use case, which many ROI forms omit.
- **Granular record selection**: The form allows patients to choose specific record types (progress notes with "Last 3 visits" or date range, immunizations, labs, dental, medications, consultations, X-ray/imaging) rather than forcing an all-or-nothing approach.
- **Active version control**: Effective date, revision date, version number (6), and owning department (Compliance) demonstrate ongoing document governance.
- **Clear revocation process**: Two pathways given — send a written statement to the PO Box or ask any employee for the Revocation of Authorization form.

### ⚠️ AMBIGUITIES
- **"ONLY ONE BOX" for direction**: The instruction "For the health information below I authorize Virginia Garcia to: (ONLY ONE BOX)" limits patients to choosing one of Get/Give/Exchange. If a patient wants to both receive records from Provider A and send records to Provider B, they would need to fill out the form twice. This isn't explained.
- **Default authorization duration**: The authorization "remains in effect until my care ends with Virginia Garcia" — this is an unusually long default duration. While patients can specify a different date, the default could result in indefinite authorization for patients in long-term care relationships.
- **Fillable field names are empty**: Despite having 54 fillable fields, none have accessible names (`fillable_field_names: []`), which may create accessibility barriers for users relying on screen readers or assistive technology.

### ❌ ERRORS
- **Minor text artifact**: The extracted text shows "CertI hereby authorize" in form-3 (the verbal release form), suggesting a text extraction artifact, though this does not affect form-1 directly.
- **Missing grammar**: "If have not received your records" in the rights section is missing the word "you" — should read "If you have not received your records."
