# Lakeland Regional Health Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **Authorization to Use or Disclose Protected Health Information** — a standard ROI form. The footer identifies it as "CONS00337_web" dated "LRH 04/16," making it the **April 2016 version** of the hospital's authorization form.

Three documents were found for this organization:
- **form-1.pdf** (this document): The older 2016 ROI form, found via web search at a `/wp-content/uploads/2018/08/` URL path.
- **form-2.pdf**: An LRH Physicians Group Release/Authorization Form — primarily an insurance assignment, billing authorization, and consent-to-treatment document. Not a patient-initiated records request form.
- **form-3.pdf**: The current 2022 ROI form (CONS00337, LRH 01/22), linked from the active Medical Records page. Nearly identical to form-1 but adds "MyChart Patient Portal" as a delivery option.

Form-1 is the **superseded predecessor** of form-3. It remains publicly accessible at its original URL but is no longer linked from the Medical Records page. Both share the same form number (CONS00337) but different revision dates.

## 2. FINDABILITY

Per the retrieval notes, the form was discovered easily: a web search for `"Lakeland Regional Health" "medical records" "release form" filetype:pdf` returned direct PDF URLs on mylrh.org immediately. The organization's Medical Records page (https://www.mylrh.org/medical-records/) links to the updated version (form-3), not this older version.

This specific file lives at a WordPress uploads path (`/wp-content/uploads/2018/08/Authorization-to-Use-or-Disclose-PHI-1.pdf`), suggesting it was uploaded as a media attachment in August 2018. The filename is reasonably descriptive ("Authorization-to-Use-or-Disclose-PHI-1"), though the "-1" suffix is unexplained. The URL does not signal that this is an outdated version.

The organization also offers a digital intake option via Swellbox (http://www.swellbox.com/lakeland-wizard.html) as an alternative pathway, which is a positive finding for overall accessibility — though it doesn't affect this specific PDF's findability.

Overall findability is good for the organization's ROI forms generally, though the continued public availability of this superseded version without any "outdated" marking is a concern.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (3,763 characters). Not an image-only scan.
- **Fillable fields**: Zero (0). Despite having blanks for patient name, address, MRN, dates, and checkboxes for record types and delivery method, none are interactive form fields. The form must be printed and filled by hand, or filled using a PDF annotation tool.
- **File size**: 463,006 bytes (~463 KB) for a single page with no embedded images. This is notably bloated — form-3 contains nearly identical content in only 87 KB. The oversized file may indicate embedded but unused resources or poor PDF optimization.
- **Fonts**: 4 fonts embedded.
- **Page count**: 1 page.
- **Design origin**: This appears to be a digitally-created document (not a scan), given the clean text layer, zero embedded images, and consistent font usage. However, it is designed as a print-first form — the underscore-line blanks (`_____`) are characteristic of paper forms, and the lack of fillable fields means patients cannot complete it digitally without workarounds.

## 4. CONTENT DESIGN

**Length and proportionality**: At 1 page, the form is concise and appropriately sized for an authorization. It avoids unnecessary verbosity.

**Structure and organization**: The form follows a logical top-to-bottom flow:
1. Patient identification (name, MRN, address, DOB, SSN last 4, phone)
2. Direction of disclosure ("to disclose my PHI to" / "to obtain my PHI from") with recipient details
3. Date range ("for the following dates of service")
4. Delivery method (Paper / Electronic)
5. Record type selection (14 checkbox categories)
6. Sensitive information notice with redaction option
7. Five numbered disclosure statements
8. Signature block with role checkboxes

**Clarity**: The language is a mix of plain English and legal terminology. The five numbered statements are written in first person ("I understand that..."), which aids readability. However, some phrases require health-literacy sophistication — e.g., "subject to re-disclosure and no longer protected by federal or state privacy laws" and "will not condition my treatment, payment enrollment in health plans or my eligibility for benefits."

**Record type granularity**: The form offers 14 specific record-type checkboxes: Abstract, CD (radiology/echocardiogram/cath lab images), Emergency department records, History & physical, Laboratory reports, Operative reports, Radiology reports, Consultation reports, Progress notes, Pathology reports, Billing records, Discharge summary, EKGs, and an "Other" field. This is a strong level of granularity for patient control.

**Layout**: The form is dense but not illegible for a single page. The use of underscored lines for fill-in fields and checkbox lists is standard but dated in design.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose authorization** — it accommodates both "disclose my PHI to" and "obtain my PHI from" scenarios via checkboxes at the top. It is not specifically tailored for a patient requesting their own records. A patient would need to fill in their own name in the recipient section, which may be confusing.

**Delivery options**: Two options are offered — "Paper" and "Electronic" with a field for email address. Notably, this older version lacks the "MyChart Patient Portal" option that was added in the 2022 revision (form-3).

**Scope control**: Good. Patients can specify dates of service and select from 14 specific record types, plus an "Other" field.

**Sensitive information handling**: The form includes a positive feature: explicit notice that "protected health information specified above includes mental health, substance abuse (i.e., drugs, alcohol), HIV/AIDS status information unless redaction is requested," with an initialing line for "Redaction requested." This gives patients control over sensitive categories.

**Right of Access language**: The form does **not** reference HIPAA § 164.524 or the patient's right of access. It references Florida Statute 395.3025 and Florida Administrative Code 64B8-10.003, but only in the context of fees — not patient rights.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA.

**Fee disclosure**: Item 4 states: "I further agree to pay charges to provide the information requested per Florida Statute 395.3025 or Florida Administrative Code 64B8-10.003." This is a blanket agreement to pay without disclosing what those charges are. The patient is asked to agree to a fee schedule they cannot see on the form.

## 6. COMPLIANCE

**Authorization expiration**: Item 5 states the authorization is "valid for six (6) months from the date signed below." This is a reasonable expiration window — long enough for processing but not indefinite.

**Revocation rights**: Item 1 clearly explains the right to revoke, the limitation on already-released information, and insurance exceptions. This is compliant with HIPAA authorization requirements.

**Voluntariness**: Item 3 explicitly states the form is voluntary and that treatment/payment/enrollment will not be conditioned on signing. This is a required HIPAA element and is properly included.

**Re-disclosure notice**: Item 2 warns that disclosed information "may be subject to re-disclosure and no longer protected." This is standard.

**Fee agreement**: The blanket agreement to pay fees (item 4) without disclosing the amount or schedule is a concern. While Florida statute does authorize certain fees for medical records, asking patients to agree to unspecified charges without any indication of cost creates a barrier, especially for patients exercising their HIPAA right of access (which caps fees at a reasonable, cost-based amount).

**SSN collection**: The form requests "Last 4 of SSN." While only the last four digits, collecting SSN information on an authorization form goes beyond what is necessary for patient identification when MRN, name, DOB, and address are already collected.

**Witness requirement**: The form includes a "Witness" signature line. It's unclear whether this is required or optional — there is no instruction saying "witness required" or "optional." If required, this could create an access barrier for patients completing the form at home.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket fee agreement without disclosure**: Item 4 requires patients to "agree to pay charges... per Florida Statute 395.3025 or Florida Administrative Code 64B8-10.003" without disclosing what those charges are. For patients exercising their HIPAA right of access, fees are capped at a reasonable, cost-based amount — but this form provides no cost information and frames fees as a condition of the authorization.

### ⚠️ AMBIGUITIES

- **Witness line — required or optional?** The form includes a "Witness" signature and date line but does not indicate whether a witness is mandatory. If required, this is a barrier; if optional, labeling it as such would reduce patient confusion.
- **Bidirectional authorization without clear default**: The form has checkboxes for both "to disclose my PHI to" and "to obtain my PHI from" but offers no guidance on which to select for a patient requesting their own records. A patient seeking their records must interpret whether they are asking Lakeland to "disclose to" themselves.
- **"Photo ID verified" checkbox**: A checkbox labeled "Photo ID verified" appears in the signature block. It is unclear whether photo ID presentation is mandatory, or whether this is for staff use only. If mandatory, it would effectively require in-person submission.

### ❌ ERRORS

- **Outdated version still publicly accessible**: This form (LRH 04/16) has been superseded by the January 2022 revision (form-3), yet remains accessible at its original URL with no "outdated" or "superseded" marking. A patient finding it via search could submit the wrong version.
- **Bloated file size**: At 463 KB for a single text-only page (no images), the file is approximately 5× larger than the functionally identical 2022 version (87 KB), suggesting poor PDF optimization.

### ✨ BRIGHT SPOTS

- **Granular record-type selection**: 14 specific record categories plus an "Other" field give patients meaningful control over what is disclosed — more specific than many comparable forms.
- **Sensitive information redaction option**: The explicit notice about mental health, substance abuse, and HIV/AIDS records with an opt-in "Redaction requested" initialing line is a patient-protective feature that many forms omit.
- **Single-page conciseness**: Packing a complete authorization into one page — with patient identification, recipient details, record selection, delivery options, legal disclosures, and signature — is efficient and reduces patient burden.
