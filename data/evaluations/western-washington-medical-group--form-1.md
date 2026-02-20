# Evaluation: Western Washington Medical Group — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is the primary Release of Information (ROI) authorization form for Western Washington Medical Group (WWMG), titled **"Authorization for Western Washington Medical Group to RELEASE HEALTHCARE INFORMATION."** It is a single-page fillable PDF (142,705 bytes), dated August 2024 based on the filename convention (`WWMG-Medical-Records-release-form-fillable-PDF-0824.pdf`).

WWMG has three ROI-related forms online. Form-1 is the organization's main, current release form — hosted directly on wwmedgroup.com with a descriptive URL. Form-2 is a department-specific (GI) authorization form dated 01/01/2023, non-fillable, with a stricter 90-day expiration and more verbose HIPAA language. Form-3 is a generic, unbranded authorization form hosted on PatientPop (a third-party marketing platform), likely a legacy artifact. Of the three, form-1 is clearly the primary and most polished document intended for general patient use.

## 2. FINDABILITY

The form was straightforward to locate. A site-specific search (`site:wwmedgroup.com "medical records" "release form"`) returned direct PDF links. The organization maintains a dedicated Medical Records Request page at `wwmedgroup.com/medical-records-request/` which links to the form. The URL itself is descriptive: `WWMG-Medical-Records-release-form-fillable-PDF-0824.pdf`. The retrieval notes describe the process as having "none significant" difficulties — no bot blocking, login walls, or portal requirements. The form was also listed on the Patient Intake and Registration Forms page. This represents a well-organized web presence for form discoverability.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and fully extractable (2,441 characters of clean text, no OCR artifacts).

**Fillable fields**: The form has **39 fillable fields**, making it a genuinely interactive digital form. This is notably high for an ROI form and suggests thorough digital-first design. However, the `fillable_field_names` array is empty in the metadata, which may indicate fields lack accessible names (potentially an accessibility concern for screen readers).

**Format and size**: Single-page PDF at ~143 KB with 10 fonts and 8 embedded images. The file size is reasonable for a one-page form with branding elements. The text is digitally rendered (not a scan).

**Digital-first design**: This form was clearly designed as a digital document — it is a fillable PDF with structured fields, not a scanned paper form. The instruction to "visit wwmedgroup.com/medical-records-request and refer to the contact info on the chart" for submission directions suggests a hybrid workflow where the completed form is submitted separately (fax, email, or mail — per the "OFFICE USE ONLY" section listing "Faxed / Mailed / Emailed" disposition options).

## 4. CONTENT DESIGN

**Length**: One page. This is admirably concise for an authorization form, fitting all necessary elements without requiring a second page.

**Clarity**: The language is relatively plain. Instructions like "PLEASE PROVIDE AS MUCH INFORMATION AS POSSIBLE" and "Please print" are direct. The form uses checkbox-based selections rather than requiring free-text legal language from the patient. The sensitive-information exclusion section is phrased clearly: "I do not consent to the release of health care information regarding testing, diagnosis and/or treatment for: (CHECK those items you wish to EXCLUDE)."

**Organization**: The form follows a logical flow: patient identification → recipient information → scope of records → sensitive information exclusions → purpose → expiration → signature. The "From" address (WWMG's address) is pre-printed, reducing patient burden.

**Layout**: The form includes a field asking "Which WWMG Clinic are you requesting records from?" — acknowledging the multi-location nature of the practice. The "OFFICE USE ONLY" section is clearly separated at the bottom. The form uses visual hierarchy with bold section headers and checkbox groupings.

**Record scope options**: The form offers four well-designed scope choices:
1. "ALL healthcare information (last 3 years)"
2. "Specific CONDITION" with free-text specification
3. "Specific DATES" with date range fields
4. "Mutual exchange of information with provider" (with 1-year expiration)

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is structured as a general release authorization — it directs records "To" a named recipient "From" WWMG. It is not specifically designed for patient self-access, though "Personal (to patient)" is listed as a purpose option with the note "*service fee may apply." This dual-purpose design means a patient requesting their own records uses the same form as someone authorizing release to a third party.

**Scope options**: Strong. Patients can choose all records (last 3 years), specific conditions, specific dates, or set up mutual exchange. The sensitive-information exclusion checkboxes (HIV, STDs, psychiatric, substance abuse) give patients granular control over what is released.

**Format/delivery options**: The form does not mention electronic delivery formats (e.g., CD, email, patient portal download). The "Send Records To" section collects a mailing address, fax, and phone — but no email field for the recipient and no option for the patient to specify preferred format. The "OFFICE USE ONLY" section shows that records can be "Faxed / Mailed / Emailed," but this is an internal disposition choice, not a patient-facing option.

**Right of Access language**: There is no explicit reference to HIPAA § 164.524 or the patient's right of access. The form does state: "I understand that I do not have to sign this authorization in order to receive healthcare benefits (treatment, payments or enrollment)," which addresses the anti-conditioning provision but does not educate the patient about their access rights.

**EHI Export / bulk data**: No mention of electronic health information export, bulk data, or any digital-era access mechanisms.

## 6. COMPLIANCE

**Expiration**: The form states "This authorization expires in 90 days or until the following occurs:" and further clarifies: "If I do not provide an expiration date or event, this authorization will expire in ninety (90) days of the date of authorization." The 90-day default is quite short. For patient self-access requests, which HIPAA requires be fulfilled within 30 days (with one 30-day extension), 90 days is technically adequate — but for ongoing release authorizations (e.g., mutual exchange with a provider), it creates unnecessary re-authorization burden. Notably, the "Mutual exchange" option separately states it "expires 1 year from date of signing," creating a potential conflict with the 90-day default.

**Fee disclosure**: The form notes "*service fee may apply" next to the "Personal (to patient)" purpose option. This is vague — it does not specify amounts or reference HIPAA's reasonable cost-based fee limitation under § 164.524(c)(4). HIPAA limits fees for patient access to reasonable, cost-based amounts, and this language leaves uncertainty about what will be charged.

**Re-disclosure warning**: The form includes appropriate language: "Once Western Washington Medical Group gives out the information, we have no control over it. The recipient might re-disclose it. Privacy laws may no longer protect it."

**Submission method**: The form directs patients to "visit wwmedgroup.com/medical-records-request and refer to the contact info on the chart" for submission instructions. This is somewhat indirect — requiring a web visit to find out where to send the form — but avoids mandating a single restrictive channel like in-person delivery.

**No notarization or witness requirement**: The form requires only a patient signature (or authorized representative with relationship noted). No notarization, witness, or in-person submission requirement.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Vague fee language for patient access**: The note "*service fee may apply" next to "Personal (to patient)" is concerning. HIPAA strictly limits what can be charged for patient access to their own records (reasonable, cost-based fees only). The vague phrasing could discourage patients from requesting their records or lead to overcharging.

### ⚠️ AMBIGUITIES

- **Conflicting expiration periods**: The general authorization defaults to 90 days, but the "Mutual exchange of information with provider" option states it "expires 1 year from date of signing." It is unclear which expiration governs when a patient selects mutual exchange — the specific 1-year term or the general 90-day default.
- **"ALL healthcare information (last 3 years)" limitation**: The "ALL" option is actually limited to the last 3 years. A patient who wants their complete medical history must presumably use the "Specific DATES" option, but this limitation is not explained or justified. The word "ALL" is misleading if it doesn't mean all records.
- **Submission instructions require a web visit**: Rather than listing fax numbers, email addresses, or mailing addresses directly on the form, patients are directed to a website for submission instructions. This adds a step and creates a barrier for patients without internet access.

### ✨ BRIGHT SPOTS

- **39 fillable fields**: This is a genuinely digital-first form with comprehensive interactive fields — well above average for healthcare ROI forms.
- **Single-page design**: Fitting a complete, well-organized authorization onto one page is an achievement in concision.
- **Sensitive information exclusion model**: The opt-out approach for sensitive categories (HIV, STDs, psychiatric, substance abuse) with "CHECK those items you wish to EXCLUDE" gives patients clear, granular control. Patient initials are required for this section, ensuring intentionality.
- **Multiple scope options**: Offering four distinct ways to define the scope of release (all/condition/dates/mutual exchange) is patient-friendly and well-structured.
- **Multi-clinic awareness**: The "Which WWMG Clinic are you requesting records from?" field acknowledges organizational complexity and routes requests appropriately.
