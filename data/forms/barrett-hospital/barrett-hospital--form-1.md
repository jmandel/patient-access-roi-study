# Barrett Hospital & HealthCare — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is Barrett Hospital & HealthCare's official **"Authorization for Disclosure of Protected Health Information"** — a single-page ROI form (revision 2.2022). It is the only form found for this organization. The form is a general-purpose authorization that serves both directions: it includes checkboxes for "RECEIVE from" and "RELEASE to," meaning it covers both incoming and outgoing disclosures. It is not specifically tailored for patient right-of-access requests under HIPAA § 164.524; rather, it is a broad disclosure authorization form. The internal file path printed at the bottom — "BPM/ Forms/ Internal Forms/ Health Information Management/ Authorization for Disclosure of Protected Health Information FORM 2.2022" — confirms this is the HIM department's standard release form.

## 2. FINDABILITY

The form was **easy to find**. A site-specific search (`site:barretthospital.org authorization release medical records`) quickly identified the "Request Medical Records" page at `https://www.barretthospital.org/request-medical-records`. That page contains a clearly labeled link: *"Click here to download an Authorization to Release records to obtain a copy of your medical records."* The retrieval notes confirm no difficulties. The URL itself (`_files/ugd/317b8b_409f155b0bef424f92bb8408fa8858de.pdf`) is a Wix-generated hash and is not human-readable, but this is a platform artifact rather than an organizational choice. For a small critical access hospital, this is notably good — the form is prominently linked from an obvious location.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (3,396 characters) is cleanly extractable via pdftotext, with no OCR artifacts or garbled characters.
- **Fillable fields**: **Zero** interactive form fields. The PDF has blank lines for handwriting but no digital form fields, meaning patients must print, handwrite, and return the form physically.
- **File size**: 178,857 bytes (175 KB) for a single page — somewhat large, likely due to the embedded image (logo). Not unreasonable but heavier than necessary for a one-page text document.
- **Fonts**: 8 fonts embedded, indicating a digitally composed document (not a scan).
- **Image-only scan**: No — this is a natively digital PDF, not a scanned paper form.
- **Digital-first design**: No. Despite being natively digital, the form is designed entirely for print-and-handwrite workflow. The blank lines and "circle one" instructions (e.g., "Format (circle one) Paper or Electronic" and "Purpose: (circle one)") assume physical interaction with the document.

## 4. CONTENT DESIGN

**Length**: One page. This is appropriately concise for a release authorization — all essential fields fit on a single side.

**Clarity**: The language is mostly plain. The authorization paragraphs at the bottom are denser but not unreasonably so. The opening mission statement ("Barrett Hospital & HealthCare provides compassionate care, healing, and health-improving service to all community members throughout life's journey") is pleasant but uses space that could go to patient instructions.

**Organization**: The form follows a logical flow: patient identification → recipient/sender → purpose → records to release → date ranges → format/delivery → legal notices → signature. The record types are listed with corresponding date range fields in a tabular layout, which is efficient.

**Layout concerns**: The form packs a lot into one page. The record-type section uses a compact table with columns for "Initial," record type, "Date Range of Service," "Format," and "Delivery." The "Initial" column heading is ambiguous — it appears patients should initial next to each record type they want released, but this is not explicitly instructed. The form mentions "Disc" next to "Imaging" which appears to refer to a disc format option but is cryptically abbreviated.

**Turnaround notice**: The form prominently states "Turn around for completed Release of Information is 10 days" directly below the title, which is a helpful expectation-setting detail.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **dual-purpose** authorization — it handles both "RECEIVE from" and "RELEASE to" scenarios in one form. There is no separate, streamlined pathway for patients simply requesting their own records under HIPAA's right of access. A patient requesting their own records must navigate a form designed primarily for inter-provider disclosures.

**Scope options**: Patients can select from specific record categories: Lab Reports, Notes, Imaging (CT, MRI, X-Ray, US, Mammo) with sub-options for Reports vs. Disc, Pathology Reports, "All Records (excluding mental health/substance abuse)," Mental Health/Substance Abuse Treatment Records, and an "Other" write-in. Date ranges can be specified per record type. This is reasonably granular.

**Format options**: The form offers "Paper or Electronic" as format choices (circle one), and delivery options of "Pick up, Fax, Mail, Other." The electronic option is mentioned but unspecified — it's unclear what "Electronic" means in practice (email? CD? patient portal?).

**Right of Access language**: There is **no reference** to HIPAA § 164.524 or the patient's right of access. The form is framed entirely as an "authorization for disclosure" rather than a right-of-access request.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or any modern digital access mechanism.

**SSN collection**: The form requests "Last 4 Digits of SSN," which, while limited, is not required by HIPAA for identity verification and represents a data collection practice that some patients may find concerning.

## 6. COMPLIANCE

**Authorization validity**: The form states authorization "is valid for one (1) year, unless revoked by my written notice." One year is a reasonable expiration period.

**Redisclosure notice**: Includes appropriate language: "if the person or entity that receives the information is not a health care provider or health plan covered under the federal privacy regulations, the information described above may be redisclosed and no longer protected."

**42 CFR Part 2 notice**: The form includes a prominent notice: "42 CFR PART 2 PROHIBITS UNAUTHORIZED DISCLOSURE OF THESE RECORDS" for substance abuse treatment records, which is appropriate.

**Compensation disclosure**: The form includes a fill-in-the-blank line: "I understand that __________________________ will receive compensation for its use/disclosure of the information." This is conditionally relevant (when a third party is involved), but its inclusion on a form also used for patient access is potentially confusing.

**Refusal language**: The form states: "I understand that I may refuse this authorization and that my refusal to sign may affect my ability to obtain treatment or payment or my eligibility for benefits." This language is concerning in a patient-access context — HIPAA § 164.524 prohibits conditioning treatment on signing an authorization for access to one's own records. This language is appropriate for third-party disclosures but inappropriate for patient right-of-access requests, and the dual-purpose form makes no distinction.

**Submission method**: No electronic submission option is mentioned. The form provides the HIM department's phone and fax numbers, and the delivery options (pick up, fax, mail) suggest the form itself must be physically submitted. There is no mention of email, online portal, or other digital submission.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Conditioning language applied to patient access**: The statement "my refusal to sign may affect my ability to obtain treatment or payment or my eligibility for benefits" should not apply to patient right-of-access requests. Because this dual-purpose form does not distinguish between patient access and third-party disclosure, this language is presented to patients exercising their HIPAA right of access, where conditioning is prohibited.

### ⚠️ AMBIGUITIES

- **"Initial" column unclear**: The record-type table has a column labeled "Initial" with no instructions explaining that patients should initial next to the record types they want. Patients may not understand what to do here.
- **"Electronic" format undefined**: The form offers "Electronic" as a format option but does not specify what this means — email, CD/disc, portal access, or something else.
- **"Disc" abbreviation**: Next to imaging records, "Disc" appears as a sub-option alongside "Reports" but is not explained. Presumably refers to a CD/DVD of imaging files, but this is not stated.
- **Compensation clause context**: "I understand that __________________________ will receive compensation for its use/disclosure of the information" has a blank where an entity name should go. It's unclear when this applies or who fills it in. For patient-access requests, this clause is irrelevant and confusing.

### ✨ BRIGHT SPOTS

- **Turnaround time disclosure**: Stating "Turn around for completed Release of Information is 10 days" directly on the form sets clear expectations — many organizations provide no timeline whatsoever.
- **Easy findability for a small rural hospital**: The form is linked clearly from a dedicated "Request Medical Records" page, which is better than many larger organizations achieve.
- **Concise single-page design**: Fitting all necessary fields on one page is efficient and reduces patient burden compared to multi-page forms found at many institutions.
