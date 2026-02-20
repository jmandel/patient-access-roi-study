# Evaluation: Vanderbilt University Medical Center — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

**Document title:** "Authorization for Release of Medical Information to VUMC"
**Subtitle:** "Authorization (P) – Release of Medical Information"
**Form number:** VMR 3022 (02/2022)
**Pages:** 2
**Purpose:** This is an *incoming records* authorization — it authorizes an outside provider to release medical information **to** Vanderbilt University Medical Center, not from it. This is the reverse direction of a typical patient-access ROI form.

**Relationship to other Vanderbilt forms:**
Vanderbilt has five downloaded forms in this collection:
- **form-1.pdf** (VMR 3017, 02/2022): Authorization for release of information *from* VUMC — older version, 4 pages
- **form-2.pdf** (VMR-P 3017, 08/2017): Even older version of the release-from-VUMC form, 4 pages
- **form-3.pdf** (VMR 3022, 02/2022): **This document** — release of records *to* VUMC (incoming), 2 pages
- **form-4.pdf** (VMR 3017, 10/2023): Current official English release-from-VUMC form, 2 pages ⭐
- **form-5.pdf**: Spanish translation of form-4

Form-3 uses the older "Vanderbilt University Medical Center" branding (not the current "Vanderbilt Health" branding seen on form-4). It was found on a VUMC student health subdomain (`student-health.vmcweb.org`), not the main `vanderbilthealth.com` site.

## 2. FINDABILITY

**Source URL:** `https://student-health.vmcweb.org/student-health/sites/default/files/Authorization%20for%20Release%20of%20Medical%20Information%20to%20VUMC%20-VMR%203022.pdf`

This form was discovered via web search, hosted on a VUMC student health subdomain rather than the official `vanderbilthealth.com` medical records page. The current official medical records page (`vanderbilthealth.com/information/medical-record-information`) does not appear to link to this specific form — it links instead to the release-*from*-VUMC forms (form-4/form-5). The URL contains a descriptive filename (`Authorization for Release of Medical Information to VUMC -VMR 3022.pdf`), but the hosting location on a student health subdomain makes it unlikely a general patient would discover this form organically. The URL uses the older `vmcweb.org` domain rather than the current `vanderbilthealth.com` domain, suggesting this may be a legacy hosting location.

## 3. TECHNICAL ACCESSIBILITY

**Severe deficiencies across all digital accessibility dimensions:**

- **Text layer:** Effectively absent. The metadata reports `has_text_layer: true` but `full_text` contains only "Patient Label or Patient Identifiers" and "Patient Identifiers" — a total of 61 characters across 2 pages. The entire substantive content of the form (all labels, instructions, checkboxes, legal text) is embedded in scanned images and is not machine-readable.
- **Fillable fields:** Zero (`fillable_field_count: 0`). The form cannot be completed electronically; it must be printed and filled in by hand.
- **Image structure:** The PDF contains 3 embedded images — two full-page 816×1056 pixel scans at 96 DPI (one per page) plus a 179×179 pixel logo/QR code image at 300 DPI. The low DPI of the page scans means text is not crisp even when printed.
- **File size:** 191,745 bytes (192 KB) for 2 pages. This is reasonable for a scanned document but larger than needed for a digitally-created form.
- **Font count:** 1 (only for the minimal "Patient Label" text overlay).
- **Screen reader accessibility:** Completely inaccessible. The lack of a meaningful text layer means assistive technology cannot read any of the form content.
- **Digital-first design:** This is clearly a scan of a paper form, not a document designed for digital use.

## 4. CONTENT DESIGN

**Page 1** is densely packed with multiple structured sections:

- **PATIENT IDENTIFICATION:** Fields for Name, Date of Birth, Address, City/State/Zip, Previous Name, Patient Phone. Standard patient demographics.
- **RELEASE RECORDS TO: Vanderbilt University Medical Center:** Delivery method checkboxes (Mail, Pick up in person, Fax, Electronic) plus Provider Name/Address/Phone/Fax fields. The "to" destination is pre-printed as VUMC.
- **RELEASE RECORDS FROM:** Provider Name, Address, City/State/Zip, Phone/Fax — fields for identifying the external provider holding the records.
- **INFORMATION REQUESTED:** Date range fields ("Dates from ___ to ___ Or specific date: ___"), with record format options:
  - Abstract / Legal medical record
  - **OR Specific Categories** with 14+ checkbox options arranged in three columns: History and physical, Discharge summaries, Operative/procedure notes, Consultations, Radiology reports, Cardiac reports, Pathology reports, Lab results, Emergency services, Obstetrics (labor and delivery), Office/clinic notes, Respiratory reports, plus "Circle One: FMLA, Power of Attorney, Pre-Admission Screening & Resident Review"
  - Other (specify) blank line
- **ADDITIONAL REQUESTS:** Separate date range, plus checkboxes for Cardiac Images, Radiology Images, Billing, Payment Records, Fetal Monitoring Strips, Pharmacy, Home Care Services.

**Page 2** contains:

- **PURPOSE OF RELEASE:** Checkboxes for Patient Care, Personal Use, Administrative (i.e., FMLA), Appointment/Sharing with other health care provider as needed, Disability/Insurance Application/Claim, Attorney/Legal Case, Other (specify).
- **Authorization for Release of Medical Information:** A legal disclosure paragraph about sensitive information (psychiatric, psychological, drug/alcohol abuse, AIDS/HIV) with a required check: "(You must check one): I do ___ do not ___ authorize this information to be released." Includes option to limit information.
- **Patient rights notice** as a bulleted list:
  - "I may refuse to sign this authorization."
  - "Refusing to sign this authorization will not affect my treatment, payment, enrollment, or eligibility for benefits."
  - "I may take back (revoke) this authorization in writing, except for any actions already taken based upon it."
  - "I understand that this authorization will expire when the records are released for the request dated below. Any requests after this date will need a separate authorization."
  - "If the requestor or receiver is not a health plan or health care provider, the released information may no longer be protected by federal privacy rules and may be shared with others."
  - "I get a copy of this form after I sign it."
- **Signature block:** Printed Name of Patient/Legal Representative, Signature, Date, Time, Relationship to Patient.

**Layout observations:** The form is moderately dense but reasonably organized with clear section headers in bold/italic. The use of tables and boxes provides visual structure. However, the three-column checkbox layout under "OR Specific Categories" is quite cramped. The "Circle One: FMLA, Power of Attorney, Pre-Admission Screening & Resident Review" instruction is oddly placed among the record-type checkboxes and seems to belong under purpose of release instead. Font size appears to be approximately 9-10pt — readable but on the smaller side.

## 5. PATIENT-CENTEREDNESS

**This form is NOT designed for patient access to their own records.** It is specifically for authorizing the transfer of records from an external provider *to* Vanderbilt. The title makes this clear: "Authorization for Release of Medical Information **to VUMC**."

While this form could theoretically be used by a patient who wants Vanderbilt to receive their records from another provider (e.g., for continuity of care), it does not serve a patient trying to obtain their own records from Vanderbilt. For that purpose, forms 1, 4, or 5 (the release-*from*-VUMC forms) would be appropriate.

**Scope options:** The form does offer granular record-type selection with 14+ specific categories, date range specification, and a separate sensitive-information consent. This level of granularity is appropriate for its purpose.

**Delivery options:** The "RELEASE RECORDS TO" section lists Mail, Pick up in person, Fax, and Electronic — though these options are directed at how the external provider should send records to VUMC, not how the patient receives them.

**Purpose options:** The "PURPOSE OF RELEASE" section includes "Personal Use" and "Patient Care" among the choices, suggesting the form accommodates patient-initiated requests for records transfer.

**Rights language:** The form includes standard HIPAA authorization rights (right to refuse, no treatment conditioning, revocation rights, re-disclosure warning, copy entitlement). However, there is no explicit citation to 45 CFR § 164.524 or the HIPAA Right of Access, which is expected since this form is not a Right of Access request — it's a § 164.508 authorization for disclosure.

**No mention of EHI export or bulk data.**

## 6. COMPLIANCE

- **Sensitive information handling:** The form includes a specific opt-in/opt-out for psychiatric, psychological, drug/alcohol, and HIV/AIDS information: "(You must check one): I do ___ do not ___ authorize this information to be released." This is appropriate and likely required under Tennessee and/or federal law (42 CFR Part 2 for substance abuse records).
- **Authorization expiration:** "This authorization will expire when the records are released for the request dated below. Any requests after this date will need a separate authorization." This is a one-time-use authorization model — it expires after fulfillment rather than on a fixed date. This is reasonable.
- **No notarization required.**
- **No fees disclosed** on this form (fees would be the responsibility of the external provider releasing records, not VUMC).
- **No explicit submission method restrictions** — the form doesn't specify how it must be returned to VUMC, though as a non-fillable scan, it implicitly requires printing, hand-completion, and physical or fax submission.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Outdated form still publicly accessible:** This form (VMR 3022, dated 02/2022) is hosted on the legacy `student-health.vmcweb.org` subdomain with old "Vanderbilt University Medical Center" branding. Vanderbilt has since rebranded to "Vanderbilt Health" and updated their release-from-VUMC forms (form-4 is dated 10/2023). The continued public availability of this older form on a student health subdomain could lead patients — especially students — to use an outdated or incorrect form.

### ⚠️ AMBIGUITIES

- **"Circle One: FMLA, Power of Attorney, Pre-Admission Screening & Resident Review"** appears inline among the record-type checkboxes under "OR Specific Categories." It is unclear whether this is asking the patient to circle a record type to request or to circle a purpose. The instruction to "Circle One" also conflicts with the checkbox format used everywhere else on the form, creating a confusing interaction pattern.
- **Relationship between "ADDITIONAL REQUESTS" and "INFORMATION REQUESTED" sections** is unclear. Both have their own date range fields, and it's not obvious why Cardiac Images, Radiology Images, Billing, Payment Records, Fetal Monitoring Strips, Pharmacy, and Home Care Services are separated from the main record categories rather than included alongside them.

### ❌ ERRORS

- **Complete absence of machine-readable text:** Despite being a 2022-dated form, the PDF is a flat image scan at 96 DPI with no OCR text layer. This is a production/publishing deficiency — the form was likely created digitally but then printed, scanned, and saved as an image PDF, destroying all digital affordances.

### ✨ BRIGHT SPOTS

- **Granular record-type selection:** The form offers approximately 20+ specific record categories across two sections, allowing precise specification of what records to request. This is more granular than many comparable forms.
- **Clear sensitive-information consent:** The explicit opt-in/opt-out for psychiatric, substance abuse, and HIV information with a mandatory check is well-structured and protects patient autonomy over particularly sensitive categories.
- **Plain-language rights notice:** The bulleted rights list on page 2 uses accessible, first-person language ("I may refuse to sign this authorization," "I get a copy of this form after I sign it") rather than dense legalese.
