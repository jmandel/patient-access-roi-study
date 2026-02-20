# Garfield Medical Center — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an "AUTHORIZATION FOR USE OR DISCLOSURE OF HEALTH INFORMATION" — a general-purpose ROI authorization form specific to Garfield Medical Center (part of AHMC Healthcare Inc.). It is 2 pages, 92,735 bytes, PDF version 1.5, revised 9/21.

Garfield Medical Center has two nearly identical authorization forms online. Form-2 is hosted at `/gmc/docs/Patient_Authorization_Form_for_Medical_Records.pdf` while form-1 is at `/gmc/documents/GMC-AUTHORIZATION-FOR-USE-OR-DISCLOSURE-OF-PHI.pdf`. The two forms have virtually identical text content (3,557 vs 3,560 characters), the same section structure, the same revision date ("Revised 9/21"), and the same 0 fillable fields. The only differences appear to be minor layout/spacing variations and file size (92 KB vs 271 KB). They are effectively duplicate versions of the same form maintained at different URL paths.

## 2. FINDABILITY

The form was easily located via standard web searches. Notes indicate no bot blocking, no login required, and direct PDF download via HTTP 200. Two search strategies succeeded:
- `"Garfield Medical Center Monterey Park medical records release form filetype:pdf"` found the `/gmc/documents/` version
- `"site:ahmchealth.com authorization release medical records"` found both versions

The URL path `Patient_Authorization_Form_for_Medical_Records.pdf` is descriptive and clearly named, which helps discoverability. However, having two nearly identical forms at two different URL paths (`/docs/` vs `/documents/`) creates potential confusion — a patient may not know which to use, or may wonder if they differ in a way that matters.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. The form has extractable text and is not an image-only scan. It was digitally created rather than scanned from paper.

**Fillable fields:** Zero. Despite being a digitally-created PDF, the form has no interactive form fields. All checkboxes and text fields must be printed and completed by hand. This is a significant limitation for a digital-first workflow.

**File format:** PDF 1.5, 92,735 bytes for 2 pages — a reasonable file size. 7 fonts embedded, 4 embedded images (likely a logo and decorative elements).

**Digital-first design:** Partially. The form was created digitally (not a scan), but it was designed as a print-and-fill document. There is no support for electronic completion, digital signatures, or online submission.

## 4. CONTENT DESIGN

**Length:** 2 pages is proportionate for an authorization form covering patient information, release destination, purpose, record types, delivery instructions, notice of rights, and signatures.

**Structure and organization:** The form follows a logical flow with clearly labeled sections:
1. PATIENT INFORMATION (name, DOB, address, phone)
2. RELEASE TO (destination person/organization)
3. PURPOSE (checkboxes: Insurance, Personal Use, Continuing Care, Legal, Other)
4. INFORMATION TO BE RELEASED (12 specific record type checkboxes plus ALL RECORDS and Other)
5. DELIVERY INSTRUCTIONS (mail, pick-up, hand-carried, email, other)
6. NOTICE OF RIGHTS (7 numbered items)
7. TERM (expiration clause)
8. SIGNATURE

**Clarity:** The form uses reasonably plain language. Section headers are clear. The Notice of Rights section (items 1-7) is written in accessible "I understand that..." format. However, legal references like "California Health and Safety Code Section 123100-123149.5 and Evidence Code Section 1560-1567" are included without explanation of what they mean for the patient.

**Warning language:** The form opens with "Failure to provide all information may invalidate this authorization" — a somewhat intimidating warning that appears immediately below the title. This could discourage patients who are unsure about certain fields (e.g., Medical Record Number).

**Layout:** The text appears reasonably organized with distinct sections, though without fillable fields the visual structure relies on labels and blank lines for handwriting.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general authorization form, not one specifically designed for patient self-access. The structure — "I authorize Garfield Medical Center to Release Medical records to:" with a Person/Organization field — frames the interaction as a third-party release. However, the form does include "Personal Use" as a purpose checkbox, so a patient requesting their own records could use it by filling in their own name as the recipient.

**Scope options:** Good granularity. The form offers 12 specific record type checkboxes (History and Physical, Discharge Summary, Emergency Record, Operative Report, Consultation Report, Laboratory Report, EKG/ECHO, Pathology Report, CD, Radiology Films/CD, Radiology Report, Pertinent Records) plus "ALL RECORDS" and "Other." A date range field ("Date(s) of Treatment") is provided. This level of specificity is useful for targeted requests.

**Format options:** The form offers format choices at the top: "Authorization for: Copies of Medical Record — Paper / Electronic / Other" and also "Inspect or Review Medical Record." The DELIVERY INSTRUCTIONS section offers: mail, pick-up with authorized proxy, hand-carried, email (with email address field), and other. The presence of electronic and email options is positive.

**Right of Access language:** The Notice of Rights references HIPAA indirectly: "Information disclosed pursuant to this authorization could be re-disclosed by the recipient and may no longer be protected by federal confidentiality law (HIPAA)." However, there is no explicit reference to HIPAA § 164.524 (Right of Access) or any patient rights explanation about the right to access one's own records. The form does not mention EHI export or bulk data access.

**Sensitive information handling:** The form addresses sensitive categories appropriately: "State/Federal Laws require specific authorization to release the following types of information: Mental Health / HIV Test Results / Alcohol/Drug Abuse" with a note that "A separate authorization is required for psychotherapy notes."

## 6. COMPLIANCE

**Fee disclosure:** The form references "California Health and Safety Code Section 123100-123149.5 and Evidence Code Section 1560-1567" and states "fees may be charged for medical record copies." This is a general notice rather than a specific fee schedule — the patient has no way of knowing what they will actually be charged before signing.

**Authorization expiration:** "Without written revocation, this authorization will automatically expire upon satisfaction of the need for disclosure, but in any event will expire 180 days from the date hereof, unless otherwise specified." The 180-day default expiration is reasonable and the form allows the patient to specify an alternative.

**Treatment conditionality:** The Notice of Rights item 1 correctly states: "If I refuse to sign this authorization my refusal will not affect my ability to obtain treatment."

**Revocation:** Item 3 explains revocation rights, specifying it must be "in writing, signed by me or on my behalf and mailed to Garfield Medical Center's Privacy Officer, 525 N. Garfield Ave. Monterey Park, CA 91754." Revocation must be mailed — no fax or electronic option is offered for revocation.

**CD liability waiver:** Item 7 in Notice of Rights states: "I understand that the Compact Disc (CD) to be released contains a copy of my medical images. I hereby release Garfield Medical Center and its agents and employees from all liability that may arise from the release of the Compact Disc (CD)." This blanket liability waiver is bundled into the general authorization form and applies regardless of whether the patient is actually requesting CD media.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket CD liability waiver bundled into general authorization:** Notice of Rights item 7 requires patients to "release Garfield Medical Center and its agents and employees from all liability that may arise from the release of the Compact Disc (CD)" — even when the patient is not requesting imaging on CD. This liability release is embedded in the general authorization rather than being a separate, conditional acknowledgment. Patients signing this form for simple lab results are still waiving liability for CD release.

- **Revocation limited to postal mail:** Revocation must be "in writing, signed by me or on my behalf and mailed to Garfield Medical Center's Privacy Officer." No fax, email, or in-person revocation option is mentioned, creating an unnecessary barrier to exercising revocation rights.

### ⚠️ AMBIGUITIES

- **Two near-identical forms at different URLs:** Form-1 and form-2 are effectively the same document hosted at different paths (`/documents/` vs `/docs/`). A patient encountering both might reasonably wonder which one to use or whether one has superseded the other. Both carry the same "Revised 9/21" date.

- **"Failure to provide all information may invalidate this authorization"** — this opening warning is ambiguous. Does "all information" mean every field? Would leaving the Medical Record Number blank (which many patients won't know) truly invalidate the form? This could deter patients from submitting the form if they lack a piece of information.

- **Fees "may be charged" without specifics:** The reference to California Health and Safety Code fee provisions gives no indication of actual amounts, leaving patients unable to anticipate costs.

### ❌ ERRORS

- **Outdated media reference:** The form references "Compact Disc (CD)" multiple times as a delivery medium for radiology images. While CDs are still used in some facilities, the 2021 revision date and the dedicated liability waiver for CD release feels dated and signals the form hasn't been updated to reflect modern digital image sharing practices.

### ✨ BRIGHT SPOTS

- **Electronic delivery and email option:** The form offers "Electronic" as a record format and "E-Mail" with a dedicated email address field in the delivery instructions — more forward-looking than many ROI forms that limit delivery to mail or pick-up only.

- **"Inspect or Review Medical Record" option:** In addition to requesting copies, the form explicitly offers the option to inspect or review records in person, which is a HIPAA-guaranteed right that many forms overlook.

- **Granular record type selection:** The 12 specific record type checkboxes plus "ALL RECORDS" and "Other" give patients meaningful control over the scope of their request.
