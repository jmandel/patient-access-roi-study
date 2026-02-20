# Evaluation: University of Iowa Hospitals & Clinics — Form 1 (Consent to Release of Information and Right of Access Request)

## 1. DOCUMENT IDENTIFICATION

This is "Form 1989: ADMIN – CONSENT TO RELEASE OF INFORMATION AND RIGHT OF ACCESS REQUEST," the official ROI form for University of Iowa Health Care (UI Health Care). It is a single-page document hosted directly on the university's healthcare domain at `healthcare.uiowa.edu/marcom/uihc/legal/consent-to-release.pdf`. The form was revised in May 2024, making it the current version.

A second copy of the same form (form-2.pdf, revised 8-2021) was found on a third-party CDN, pre-populated for a driving rehabilitation service ("Safer Driver Solutions"). Form-1 is the canonical, current version hosted by UIHC itself. The two forms share the same structure and Form 1989 designation, but form-1 is newer and reflects updated language (e.g., "Substance use" instead of "Substance abuse," and a longer default authorization window of three years vs. two).

Notably, the form title explicitly names both functions: "Consent to Release of Information AND Right of Access Request." This is a dual-purpose form — it serves patients requesting their own records as well as authorizations to send records to third parties. It does not differentiate between these two use cases in its fields or workflow.

## 2. FINDABILITY

The form was exceptionally easy to find. A basic web search for the organization name plus standard ROI terms immediately returned the direct PDF link. The official medical records request page at `uihc.org/medical-records-request` provides clear instructions and links to the form. No bot-blocking, CAPTCHAs, login walls, or JavaScript rendering barriers were encountered.

The URL path (`/marcom/uihc/legal/consent-to-release.pdf`) is reasonably descriptive, and the file is hosted on a stable institutional domain. The search notes confirm: "The form was very easy to find. The first web search returned a direct link to the official PDF."

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and clean. The full text (4,233 characters) extracts without garbling, OCR artifacts, or misencoded characters. This is a natively digital document, not a scan.

**Fillable fields**: The metadata reports `fillable_field_count: 0` — despite being a natively digital PDF, it has no interactive form fields. Patients must print, hand-write, and then scan/mail/fax the completed form. This is a significant missed opportunity, especially notable because the older third-party version (form-2.pdf) has 50 fillable fields. UIHC's own current form regressed in this regard.

**File size**: 130,005 bytes for a single page with no embedded images and only 4 fonts. This is reasonable and not bloated.

**Digital-first design**: The document was clearly created digitally (not scanned), but it was designed for the print-and-fill workflow. There are no interactive elements. The form supports email submission of the completed form to `him-consentform@uiowa.edu`, which implies they expect patients to print, fill by hand, scan, and email — a cumbersome workflow.

## 4. CONTENT DESIGN

**Length**: One page. This is commendably concise for a form that includes patient identification, recipient information, record type selection, consent language, and sensitive-category opt-outs.

**Clarity**: The language is generally clear, though portions of the consent text are dense. The sentence "If I cancel this consent at a later date, I must send written notification to the Director of Health Information Management at the above address" is straightforward. However, the passage about third-party treatment reports is more convoluted: "when the requested evaluation or treatment is solely for the purpose of creating a medical report for a third party, if authorization to release the information to that third party is not provided, it may result in the cancellation of those services."

**Organization**: The form follows a logical top-to-bottom flow: patient identification → recipient → format options → record types → date range → reason → consent language → sensitive categories → expiration → signature. Sections are not labeled with headers but are spatially separated.

**Record type options**: The form provides 16+ checkboxes for specific record types including: summary of record, history and physical, pathology reports, allergy list, immunization record, psychotherapy notes, billing information, laboratory results, radiology images, discharge notes, office visit notes, radiology reports, emergency notes, operative/procedure reports, test results (EKG, PFT, EMG, etc.). It also includes legacy entity lines ("Formerly Corridor OB GYN," "Formerly Mercy Clinics' records," "Formerly Mercy Hospital records"), which helps patients who received care before organizational mergers.

**Format options**: Five delivery format choices are offered: Electronic (CD / USB drive / Email), Fax, Paper, Verbal, and "No records needed at this time, to file only." The electronic options are noteworthy, though the parenthetical "(Email is not a secure means of communication)" warns patients without offering a secure alternative (e.g., no mention of a patient portal for delivery).

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form title explicitly includes "Right of Access Request," acknowledging that patients may be requesting their own records. However, the form body does not differentiate the workflow. The "Send UI Health Care information to" field requires a "Name and/or facility" and "Complete mailing address" — there is no "send to myself" shortcut or checkbox. A patient requesting their own records must write their own name and address in the recipient field, treating themselves as a third party. Compare this to form-2.pdf, which includes a "Myself at the address above unless noted below" option — a feature the newer form-1 apparently dropped.

**Scope options**: Good. Patients can specify date ranges ("Date(s): ___ to ___"), specific departments/providers, and select from a granular list of record types.

**Sensitive categories**: The form handles sensitive information via an opt-out model: substance use, mental health, HIV-related information, and genetic tests/info are included by default unless the patient checks a box to exclude them. The 42 CFR Part 2 footnote is present for substance use records. This approach is standard but could confuse patients who may not realize these categories are being released unless they actively opt out.

**Format options**: Electronic delivery is offered (CD, USB, email), which is better than many organizations. However, there is no mention of patient portal delivery, EHI export, or bulk data access.

**Fees**: The consent text states "I understand there may be a charge for this information" without disclosing the fee schedule. Under HIPAA's Right of Access, fees for patient access are limited to reasonable cost-based fees, but the form does not explain this distinction.

**Response time**: The form commits to responding "within 30 days of receipt" with notification if an extension is needed, which aligns with HIPAA's timeline requirements.

## 6. COMPLIANCE

**Expiration**: The authorization "will expire three years from the date of signature, or as indicated (specify number of days or months not to exceed five years)." A three-year default is reasonable and within HIPAA norms. The five-year maximum cap is explicitly stated.

**Revocation**: Patients can cancel the authorization by sending "written notification to the Director of Health Information Management." The requirement for written cancellation (rather than allowing phone or electronic cancellation) is a minor barrier.

**Conditioning treatment**: The form includes the required HIPAA statement: "UI Health Care does not require completion of this form as a condition of evaluation or treatment," with the appropriate carve-out for third-party evaluation/treatment scenarios.

**Re-disclosure warning**: Present — "recipients of this information may possibly re-release the information without proper authorization" and "once information is disclosed it may no longer be protected by federal privacy regulations."

**Electronic signature**: The form includes language validating electronic completion: "If this consent is completed electronically, it is as valid as if you signed the consent in writing." However, since the form has no fillable fields, it's unclear how a patient would complete it "electronically" in practice without a third-party tool.

**Submission methods**: Email (`him-consentform@uiowa.edu`), fax (two numbers provided: 319-356-3079 or 319-353-7944), and mail (200 Hawkins Dr., HSSB Ste. 100, Iowa City, IA 52242). Multiple submission channels are available, which is good.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Regression from fillable to non-fillable**: The current official form (form-1, revised 5-2024) has zero fillable fields, while an older version of the same form (form-2, revised 8-2021) had 50 fillable fields. The organization appears to have moved backward in digital accessibility with their most recent revision.

### ⚠️ AMBIGUITIES

- **Electronic completion paradox**: The form states it can be "completed electronically" and that such completion is "as valid as if you signed the consent in writing," yet the form itself has no fillable fields. Patients would need to use a third-party PDF annotation tool to fill it out electronically, creating an inconsistency between the form's stated capabilities and its actual design.
- **"Self-request" pathway unclear**: Unlike the older form-2 version, which includes a "Myself at the address above" option, form-1 requires patients to fill in recipient information with no shortcut for self-directed access requests, despite the form title including "Right of Access Request."
- **Fee language is vague**: "I understand there may be a charge for this information" does not distinguish between patient access fees (limited under HIPAA) and third-party release fees, nor does it disclose actual amounts.

### ✨ BRIGHT SPOTS

- **Dual-purpose title**: Explicitly naming both "Consent to Release of Information" and "Right of Access Request" in the form title is unusual and shows awareness that patients may be exercising their HIPAA right of access, not just authorizing third-party disclosure.
- **Legacy entity lines**: Including "Formerly Corridor OB GYN," "Formerly Mercy Clinics' records," and "Formerly Mercy Hospital records" as record source options is a thoughtful accommodation for patients who received care under prior organizational names before mergers/acquisitions.
- **Multiple submission channels**: Providing email, fax (two numbers), and mail options gives patients flexibility. Email submission is notably above-average for ROI form submission.
- **Excellent findability**: A single web search returns the form directly, and the institutional medical records page provides clear context.
