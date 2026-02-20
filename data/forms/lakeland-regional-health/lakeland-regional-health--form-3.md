# Lakeland Regional Health Medical Center — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3.pdf is an **Authorization to Use or Disclose Protected Health Information** — a standard ROI form titled "AUTHORIZATION TO USE OR DISCLOSE PROTECTED HEALTH INFORMATION" (document ID CONS00337, dated LRH 01/22). It is a single-page, text-based PDF (87,452 bytes).

This is the **current/active version** of the hospital's ROI form, linked from the medical records page at https://www.mylrh.org/medical-records/. It is an updated revision of form-1.pdf (dated LRH 04/16, document ID CONS00337_web), which was an older version found at a different URL. The key difference between form-3 and form-1 is the addition of **"MyChart Patient Portal"** as a delivery option alongside Paper and Electronic. Form-2.pdf is an entirely different document — an LRH Physicians Group Release/Authorization Form focused on insurance assignment, billing, and treatment consent, not patient-initiated records requests.

## 2. FINDABILITY

The form was **easy to locate**. Per the retrieval notes, a web search for `"Lakeland Regional Health" "medical records" "release form" filetype:pdf` immediately returned direct PDF URLs. The form is also linked from the organization's medical records page (https://www.mylrh.org/medical-records/), which is a logical place for patients to look. A site-scoped search (`site:mylrh.org authorization release medical records`) also confirmed the medical records page.

The URL (`https://www.mylrh.org/wp-content/uploads/2022/05/Authorization-to-Use-or-Disclose-PHI.pdf`) is descriptive and clearly indicates the document's purpose, though its location in `wp-content/uploads` reveals a WordPress backend rather than a structured patient resource section. The retrieval agent reported "No significant difficulties" — this is a straightforward find.

One minor issue: the older version (form-1.pdf, dated 04/16) remains accessible at its original URL, meaning patients could stumble upon the outdated version via search. However, the current version is the one actively linked from the medical records page.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and complete. The full text (3,780 characters) extracts cleanly via pdftotext with no garbled content or OCR artifacts. This is a digitally-authored document, not a scan.

**Fillable fields**: **Zero** interactive form fields (`fillable_field_count: 0`). The form uses underscores for blank lines (e.g., `Patient's Legal Name: _____________________________________________________`), requiring the patient to print, hand-fill, and return the form. This is a significant limitation for a digital document.

**File format**: PDF, 87,452 bytes, 1 page, 3 fonts, 0 embedded images. The file is lean and efficient — a substantial improvement over form-1.pdf (463,006 bytes for essentially the same content).

**Digital-first design**: **No.** Despite being a clean, digitally-authored PDF (not a scan), the form is designed as a print-and-fill document. The absence of fillable fields, combined with the requirement for a physical signature and witness signature, makes this fundamentally a paper workflow. The organization does offer a separate digital intake option via Swellbox (noted in retrieval notes), but the PDF itself is not digitally fillable.

## 4. CONTENT DESIGN

**Length**: 1 page — concise and appropriate for the task. The form fits everything on a single page without feeling excessively cramped.

**Clarity**: The form uses a mix of plain language and legal terminology. Numbered clauses (1–5) explain patient rights regarding revocation, re-disclosure, voluntary signing, fees, and authorization validity. Sentences like "I understand that I am signing this form voluntarily and I am signing this under my own free will" are relatively clear. However, the fee clause — "I further agree to pay charges to provide the information requested per Florida Statute 395.3025 or Florida Administrative Code 64B8-10.003" — references statutes without explaining what the charges actually are.

**Organization**: The form flows logically:
1. Patient identification (name, MRN, address, DOB, last 4 SSN, phone)
2. Direction of information flow (disclose to / obtain from) with recipient details
3. Date range for records
4. Delivery method (Paper / Electronic / MyChart Patient Portal)
5. Record type checkboxes (13 categories)
6. Sensitive information notice with redaction option
7. Five numbered legal clauses
8. Signature block (patient/authorized person, witness, released-by)

**Layout**: Clean, with reasonable use of whitespace given the single-page constraint. Checkbox options for record types are arranged in three columns. The form uses 3 fonts, suggesting some typographic hierarchy (likely bold headings vs. regular body text). The title "AUTHORIZATION TO USE OR DISCLOSE PROTECTED HEALTH INFORMATION" is prominently placed at the top.

**Font size**: Based on the clean text extraction and single-page density with ~3,780 characters of content, text appears to be at or near 10pt — functional but not generous.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose authorization** — it uses bidirectional language: "to disclose my PHI to" and "to obtain my PHI from" with checkboxes for each direction. This means a patient requesting their own records uses the same form as a third-party release. There is no separate, streamlined form for patient self-access under HIPAA's Right of Access (45 CFR § 164.524).

**Scope options**: Good granularity. The form offers:
- Date range specification: "for the following dates of service"
- 13 record type checkboxes: Abstract, CD (radiology/echo/cath lab images), Emergency department records, History & physical, Laboratory reports, Operative reports, Radiology reports, Consultation reports, Progress notes, Pathology reports, Billing records, Discharge summary, EKGs
- An "Other" write-in field
- Sensitive information redaction option for mental health, substance abuse, HIV/AIDS status

**Format options**: Three delivery methods are offered — **Paper**, **Electronic** (with email address field), and **MyChart Patient Portal**. The inclusion of MyChart is a notable improvement over the older form-1 version. However, no specifics are given about the electronic format (e.g., PDF, CCDA, FHIR).

**Right of Access language**: The form does **not** reference HIPAA § 164.524 or the patient's right to access their records. It references only Florida Statute 395.3025 (regarding fees) and Florida Administrative Code 64B8-10.003.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or any modern health data interoperability concepts.

## 6. COMPLIANCE

**Fees**: The form states: "I further agree to pay charges to provide the information requested per Florida Statute 395.3025 or Florida Administrative Code 64B8-10.003." This cites state fee schedules but does not disclose the actual fee amounts. For patient access requests under HIPAA, fees are limited to reasonable cost-based fees, and citing state statute fee schedules (which may exceed HIPAA limits for patient access) without distinguishing between patient access and third-party release is potentially problematic.

**Authorization expiration**: "This authorization will remain valid for six (6) months from the date signed below." This is a reasonable timeframe — neither excessively short nor long.

**Revocation rights**: Clearly stated — patient may revoke "at any time by notifying the Health Information Management department in writing."

**Voluntary signing**: Explicitly stated: "Lakeland Regional Health will not condition my treatment, payment enrollment in health plans or my eligibility for benefits by signing this form."

**Re-disclosure warning**: Present: "I understand that the information disclosed may be subject to re-disclosure and no longer protected by federal or state privacy laws."

**Witness requirement**: The form includes a "Witness" signature line with date. This is not a HIPAA requirement for patient access requests and adds an unnecessary step for patients.

**Photo ID verification**: The form includes a "Photo ID verified" checkbox, which is reasonable for identity verification but could function as a barrier if interpreted as requiring in-person presentation.

**SSN collection**: The form requests "Last 4 of SSN" — while only partial, collecting SSN data on an authorization form raises questions about necessity and data minimization.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee language references state statute without HIPAA distinction**: The clause "I further agree to pay charges to provide the information requested per Florida Statute 395.3025 or Florida Administrative Code 64B8-10.003" applies the same fee structure regardless of whether the request is patient access (where HIPAA limits fees to reasonable cost-based amounts) or third-party release. Florida's fee schedule may exceed HIPAA's allowable charges for patient access requests.
- **Witness signature required**: The form includes a mandatory-looking "Witness" signature line. HIPAA does not require a witness for patient access requests, and requiring one creates a logistical barrier, particularly for patients submitting remotely.

### ⚠️ AMBIGUITIES

- **"Photo ID verified" checkbox**: It is unclear whether this is an internal-use field (staff checks it after verifying ID) or a requirement the patient must satisfy before the request is processed. If interpreted as requiring in-person ID presentation, it could conflict with electronic/mail submission.
- **Dual-purpose form without clear guidance**: The "to disclose my PHI to" / "to obtain my PHI from" structure doesn't clearly guide patients requesting their own records. A patient wanting their own records must figure out they should check "to disclose my PHI to" and fill in their own name/address as the recipient — an unintuitive workflow.
- **No fee amounts disclosed**: Patients agree to pay charges per statute but have no way to know what those charges will be before submitting the form.

### ✨ BRIGHT SPOTS

- **MyChart Patient Portal as a delivery option**: Including portal delivery alongside paper and electronic options is a forward-thinking addition that leverages existing infrastructure to give patients convenient digital access.
- **Granular record type selection**: Thirteen specific record type checkboxes plus an "Other" field give patients meaningful control over what is released, including specialized options like CD images for radiology and cath lab.
- **Sensitive information redaction option**: The form explicitly notes that records "include mental health, substance abuse (i.e., drugs, alcohol), HIV/AIDS status information unless redaction is requested" and provides an initialing option for redaction — a patient-protective feature.
- **Single-page efficiency**: The form manages to include comprehensive content — patient identification, recipient details, record types, delivery options, legal clauses, and signature blocks — all on a single page without excessive density.
