# UW Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is UW Medicine's primary Release of Information form: **"Patient Authorization to Disclose, Release, and/or Obtain Protected Health Information"** (internal form number U0626, version V.2512, content last approved December 2025). It is a 3-page PDF (321,683 bytes) covering all UW Medicine facilities: Harborview Medical Center & Clinics, UW Medical Center (Montlake and Northwest campuses), UW Medicine Primary Care, and UW Physicians.

The form is a **general-purpose authorization** — it serves both patient self-access and third-party release (attorneys, providers, insurers). This is the only ROI form found for UW Medical Center; the patient forms page lists several other privacy-related documents (Notice of Privacy Practices, Authorization for Publicity/Photography, Request for Amendment, etc.) but none are ROI alternatives. The form was the sole document downloaded; no separate patient-access-specific form exists.

## 2. FINDABILITY

**Good overall, with one notable wrinkle.** The form is discoverable through multiple pathways:

- **Web search** for UW Medical Center ROI-related terms immediately surfaces the form.
- **Website navigation** via Patient & Visitor Resources → Patient Forms → "Medical records and authorization forms" links directly to it.
- The **canonical URL** is `depts.washington.edu/comply/docs/103f7_AuthRq.pdf` — hosted by the UW compliance department, not the main uwmedicine.org CDN.

The wrinkle: the uwmedicine.org CDN (`/sites/stevie/files/...`) **blocks programmatic access** with a 403 "Access Denied" response, even with realistic browser User-Agent headers. Two alternate URLs on uwmedicine.org both returned this error. The compliance-site URL works without restriction, and the patient forms page links there, so patients following the official path would succeed. But anyone finding an older direct link would hit a dead end.

The URL and filename (`103f7_AuthRq.pdf`) are **not descriptive** — a patient would not recognize what this file is from the URL alone.

## 3. TECHNICAL ACCESSIBILITY

**Strong digital-first design.** Key observations:

- **Text layer**: Full extractable text (9,976 characters). Not a scan.
- **Fillable fields**: 61 interactive form fields — a high count indicating comprehensive digital fill-in capability. However, the metadata notes that `fillable_field_names` is an empty array, suggesting the fields may lack accessibility labels (no programmatic names exposed), which would hinder screen reader users.
- **Fonts**: 10 embedded fonts — typical for a well-designed PDF form with distinct font weights and styles.
- **Embedded images**: 4 images (likely logos or decorative elements).
- **File size**: 321 KB for 3 pages with interactive fields and images — reasonable and not bloated.
- **Carbon copy design**: The form footer notes "WHITE – MEDICAL RECORD / CANARY – PATIENT," indicating this form still references a two-part carbon-copy paper heritage. However, the digital version is clearly the primary artifact, not a scan of the paper version.

**Submission channels**: The form explicitly states it "can be sent to us by postal mail, email, or fax" and provides all three: a mailing address (Box 354914, 1959 N.E. Pacific St., Seattle, WA 98195), fax number ((206) 744-9997), and email address (uwmedroi@uw.edu). Billing records have a separate contact (passroi@uw.edu). This is excellent — patients are not forced into a single submission channel.

## 4. CONTENT DESIGN

**Well-organized, thorough, and reasonably clear.**

The form uses a **numbered section structure** (Items #1–7) that progresses logically:
1. Patient Information (name, address, birthdate, phone, email, former names)
2. Purpose of Request (checkboxes: Attorney, Provider, Insurance, Personal, PFMLA, Other)
3. Facilities to Release Records (checkboxes for each campus)
4. Recipient of Records (name, address, phone, fax, email)
5. Records to be Disclosed (date range, record type checkboxes, sensitive-info opt-in)
6. Format for Records (CD/DVD, Paper, MyChart, USB/Thumb Drive, Email)
7. Authorization expiration date/event

**Page 1** is the fill-in form itself. **Page 2** contains patient rights language, minor consent rules, and submission instructions. **Page 3** is an instruction sheet explaining how to complete each item.

**Clarity**: The form uses mostly plain language but includes some legal constructs. The patient rights section on page 2 contains a dense paragraph about conditioning treatment on authorization that would challenge many readers: *"UW Medicine may condition the provision of healthcare that is just for the purpose of creating protected health information for disclosure to a third party on my signing or my providing an authorization for the disclosure of the health information to such third party."* This is HIPAA-required language but could benefit from a plain-language summary.

**Length**: 3 pages is proportionate — the actual fill-in portion is ~1 page, the legal terms ~1 page, and the instructions ~1 page. The instruction page is a genuine value-add, not boilerplate padding.

## 5. PATIENT-CENTEREDNESS

**Several strong patient-serving features, with one structural gap.**

**Strengths:**
- **MyChart promotion**: The form opens with a proactive callout: *"Recent medical records are available via MyChart for immediate download without filling out this form. See page 3 for more information."* Page 3 reinforces this with a URL (https://www.uwmedicine.org/mychart) and notes that an electronic request form is also available within MyChart. This is a best-practice approach — steering patients to the fastest self-service channel.
- **Granular record type selection**: 8 record type checkboxes (Medical Records, Billing Records, Immunizations, Radiology Images, Clinic Notes, Labs and Pathology, Procedures, Radiology Reports) plus an "Other" free-text field.
- **Date range flexibility**: Option for specific date range or "Most Recent 2 Years" default.
- **Multiple format options**: CD/DVD, Paper, MyChart, USB/Thumb Drive, Email — five delivery formats. The email option includes a risk disclosure reference (https://www.uwmedicine.org/about/policies-and-notices/email-risk).
- **Sensitive information handling**: An opt-in model for sensitive categories (Sexual Assault Nurse Examination Records, Living Donor Records, Harborview Abuse and Trauma Center Records, Hall Health Mental Health Records). The form explains: *"Medical records directly related to your care from these units are excluded by default, but some information may be released even if you do not make a selection if referenced elsewhere in your chart."*
- **Verbal communication option**: Unique checkbox allowing authorization for verbal-only communication about medical history and care.
- **Patient rights statement**: Clearly states patients can inspect/copy PHI, receive a copy of the signed form, and refuse to sign. Notes that authorization can be revoked in writing.

**Structural gap:**
- **No patient-access-specific form**: The form bundles patient self-access with third-party release. A patient requesting their own records fills out the same form as an attorney or insurer. The "Purpose of Request" checkboxes do include "Personal," but the overall framing — "Recipient of Records (e.g., Insurance Company, Attorney, Physician, Patient)" — treats patient access as one option among many rather than the primary use case. Under HIPAA's Right of Access (45 CFR § 164.524), patient requests have different rules (shorter timelines, fee limits) than third-party authorizations — a single form may obscure this distinction.
- **No mention of HIPAA § 164.524** or the Right of Access specifically. The form references patient rights generally but does not cite the regulatory basis for patient access requests.
- **No mention of EHI export** or bulk data access (21st Century Cures Act / information blocking rules).

## 6. COMPLIANCE

- **Expiration default**: If no date/event is provided, the authorization is valid for **three years** from signature. Employer/financial institution authorizations are limited to one year. Three years is generous and patient-friendly.
- **Revocation**: Revocation requires a **written request** to the UW Medicine Compliance Office (Box 358049, Seattle, WA 98195). This is standard but could be more accessible — no email or phone revocation option is mentioned.
- **No fee disclosure**: The form does not mention any fees for record copies. This is neutral — no upfront fee barrier, but patients also aren't told what to expect.
- **No notarization or witness requirement**: The form requires only the patient's signature (or authorized representative with stated relationship and authority).
- **Minors**: Clearly states when minor signatures are required under Washington State law — reproductive care (any age), STDs (age 14+), substance abuse/mental health (age 13+). This is specific and legally accurate for Washington.
- **Deceased patients**: Form may be signed by surviving spouse or personal representative. No unreasonable proof requirements stated, though representatives "may be required to provide proof of legal authority."
- **Sensitive information opt-in**: The blanket statement that *"This authorization permits UW Medicine to release information related to sexually transmitted diseases, HIV/AIDS/AIDS-related illnesses, behavioral or mental health services, and treatment for alcohol and drug abuse"* appears as a single checkbox-free statement on the main form page, suggesting it applies automatically. The optional section below it handles specific unit records. This could create confusion about whether signing the form automatically releases sensitive categories or not.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **MyChart fast-track**: Opening the form with "Recent medical records are available via MyChart for immediate download without filling out this form" is an exemplary patient-first design choice. It actively diverts patients away from the paper process when a faster digital option exists.
- **Five delivery formats**: Offering CD/DVD, Paper, MyChart, USB/Thumb Drive, and Email gives patients genuine choice — more options than the vast majority of provider forms.
- **Instruction page**: A full page of clear, item-by-item completion instructions is unusual and helpful. The explanation of "completeness" — acknowledging hybrid records and real-time electronic documentation — sets honest expectations.
- **Multi-facility coverage**: A single form covers all UW Medicine entities, with clear facility checkboxes, avoiding the need for patients to track down separate forms for each campus.
- **Three submission channels**: Mail, fax, and email submission options with complete contact information for both medical and billing records.

### ⚠️ AMBIGUITIES
- **Sensitive information release scope**: The main form text states the authorization "permits UW Medicine to release information related to sexually transmitted diseases, HIV/AIDS/AIDS-related illnesses, behavioral or mental health services, and treatment for alcohol and drug abuse" as a blanket statement, while the optional section below addresses specific unit records. It is unclear whether signing the form automatically authorizes release of all sensitive categories, or whether this language merely describes what the form *could* authorize if those records happen to be referenced in the chart.
- **"PLACE PATIENT LABEL HERE"**: The form includes a patient label area on each page, which is a hospital-internal artifact (for inpatient use with pre-printed wristband labels). Patients filling out the form at home would not know what this means or whether they need to do anything with it.

### ❌ ERRORS
- **Fillable field names missing**: The 61 interactive fields have no programmatic names in the metadata (`fillable_field_names: []`), which may indicate accessibility deficiencies for screen readers and assistive technology — though this could also be a metadata extraction limitation rather than a true form defect.
- **Non-descriptive URL/filename**: The canonical download URL (`103f7_AuthRq.pdf`) uses an internal form numbering system that conveys nothing to patients about the document's purpose.
