# Carle BroMenn Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization to Release Protected Health Information" form specific to the Carle BroMenn Medical Center campus (Normal, IL). The form header includes "ROI" and identifies Carle Health's Health Information Management department at "1304 Franklin Ave., Normal IL, 61761 | P: (309) 268-5274." A footnote clarifies the form covers "Carle West Physician Group, Carle BroMenn Medical Center, and Carle Eureka Hospital." The form code is **X3833-0820**, suggesting an August 2020 revision.

Three forms were found for this organization:
- **form-1.pdf** (this document): The primary general ROI form for the BroMenn/Normal campus.
- **form-2.pdf**: A nearly identical system-level Carle Health ROI form for the Champaign campus (3310 Fields South Drive), with form code 174-0319, indicating a March 2019 revision. Structurally very similar but differs in the HIM address/phone and a few policy details (e.g., form-2's default expiration is "one year" vs. form-1's "date of signature").
- **form-3.pdf**: A 2-page behavioral health–specific authorization (form code X3852-0620) required separately for mental health records, as referenced in form-1's disclaimer text.

Form-1 is the document a BroMenn patient would most likely encounter for a standard records request.

## 2. FINDABILITY

Per the retrieval notes, the form was **easy to find**. A web search for `"Carle BroMenn Medical Center" "medical records" "release form" filetype:pdf` surfaced the direct PDF URL. The form is hosted at a clean, descriptive URL path on carle.org (`/getmedia/.../cbmc-release-of-information.pdf`). No login, portal access, or multi-step navigation was required — the PDF was directly downloadable. The retrieval agent described the process as having "no difficulties encountered."

The carle.org medical records page (`carle.org/patients-visitors/patient-resources/medical-records`) also links to these forms, providing a navigable path from the main website. This is a strong baseline for findability.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (4,252 characters) is extractable via pdftotext, confirming this is a digitally created document, not a scan.
- **Fillable fields**: **Zero**. Despite being a digital-origin PDF, it has no interactive form fields. Every blank — patient name, date of birth, SSN, checkboxes — must be filled by hand after printing.
- **File size**: 65,164 bytes (≈64 KB) for a single page — reasonable.
- **Fonts**: 7 fonts embedded.
- **Images**: 1 embedded image (likely the Carle Health logo).
- **PDF design**: This is a flat, print-oriented PDF. It was clearly authored digitally (not scanned), but it was not designed for on-screen completion. The checkbox characters render as `£` symbols in the extracted text, a common artifact of Wingdings/symbol fonts used for visual checkbox squares. This is a missed opportunity: the form could have been made fillable with minimal effort given it was already digitally authored.

## 4. CONTENT DESIGN

**Length**: One page. The form is dense but comprehensive — it packs patient identification, send/request toggles, a detailed record-type selection grid, legal disclaimers, signature blocks, and a staff-use section all onto a single page.

**Organization**: The form follows a logical flow:
1. Patient identification (name, DOB, SSN last-4, MRN)
2. Direction of release (send to / request from) with address fields
3. Method of release (mail, pick up, MyCarle Account)
4. Record type selection — split into "HOSPITALIZATION" and "CLINIC/OTHER" columns with date ranges
5. Purpose of disclosure
6. Legal notices (7 bullet points)
7. Signature block with provisions for minors and legal representatives
8. Staff use section

**Clarity**: The legal bullet points are reasonably clear, though they are dense. Key rights are stated plainly: "I have the right to inspect and obtain a copy of the records that are to be disclosed (CFR 164.524)." The warning "ATTENTION: This is a legal document. Please read carefully" is prominent.

**Layout concerns**: The single-page design means the form is quite **cramped**. The record-type checkboxes are arranged in two tight columns with minimal spacing. The legal text at the bottom is visually compressed. For a form that must be printed and hand-filled, the available write-in space appears limited — address fields, purpose-of-disclosure, and date fields are constrained.

**Font size**: Based on the density of content on one page (4,252 characters of text plus checkbox grids), the body text appears to use a small font, likely 8–9pt for the legal disclaimers. The record-type checkbox labels are similarly small.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose** authorization. It supports both "To Send to" and "To Request from" directions, meaning it serves patients requesting their own records as well as third-party release scenarios. There is no separate patient-access-specific form. A patient requesting their own records must navigate the same form designed for inter-provider transfers and legal disclosures.

**Scope options**: **Strong**. The form offers granular record-type selection with separate "HOSPITALIZATION" and "CLINIC/OTHER" sections, each with date ranges. Specific record types include inpatient hospitalization, history & physical, consults, progress notes, operative reports, discharge summaries, cardiology, immunizations, labs, pathology (reports and/or slides), radiology (reports and/or images), therapy services, emergency department visits, home care/hospice, one-day surgery, billing records, and an "Other" write-in. This is one of the more detailed record-type menus observed.

**Format/delivery options**: Three methods are offered:
- Mail
- Pick up at HIM Department
- **MyCarle Account (Available for 30 days)**

The MyCarle Account option is notable — it provides an electronic delivery pathway through the patient portal. The 30-day availability window is disclosed. However, there is no option for email, fax to patient, or CD/USB delivery.

**Right of Access language**: The form explicitly states: "I have the right to inspect and obtain a copy of the records that are to be disclosed (CFR 164.524)." This is a direct citation of the HIPAA Right of Access regulation, which is commendable.

**EHI Export / bulk data**: No mention of electronic health information export, USCDI, or bulk data access.

**Purpose of disclosure**: The form requires stating a purpose ("i.e., continuing care, insurance claim, legal counsel, etc."). Under HIPAA's Right of Access, patients are **not** required to provide a reason for requesting their own records. This field may deter or confuse patients who simply want their own data.

## 6. COMPLIANCE

**Fees**: The form states "I understand there may be a charge to obtain a copy of these records." No fee schedule or estimate is provided. This is vague but not inherently problematic — HIPAA allows reasonable cost-based fees.

**Expiration**: "This authorization will expire on the following calendar date or event ___. If I do not specify an expiration date or event, this authorization will expire on the date of the signature below and records will only be released for services up to and including that date." This is an unusual default — if a patient leaves the expiration blank, the authorization effectively covers only records up to the signing date. This is **more restrictive** than form-2 (the Champaign campus version), which defaults to one year. The practical effect is that a patient who signs today and leaves expiration blank gets only records created through today — which may be the intent (a one-time snapshot) but could surprise patients who expect the authorization to remain open for any period.

**SSN requirement**: The form asks for "Last 4 digits of SSN." While only the last 4, this is not strictly necessary for records release and creates a privacy concern. The field is not marked as optional.

**Sensitive records carve-out**: The form states: "A separate special authorization must be completed to release behavioral health records." This is consistent with Illinois law protections for mental health records but means a patient seeking all their records must fill out two separate forms (form-1 and form-3).

**Notarization**: Not required.

**In-person submission**: Not required — mail is an option.

**Witness requirement**: Not required on this form (unlike the behavioral health form-3, which requires a witness signature).

**Treatment conditioning**: Properly disclaimed: "I am not required to sign this authorization in order to seek medical treatment."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Purpose-of-disclosure requirement**: The form requires patients to state the purpose of the request ("i.e., continuing care, insurance claim, legal counsel, etc."). Under HIPAA's Right of Access (45 CFR § 164.524), covered entities **may not** require patients to provide a reason for accessing their own records. This field is potentially non-compliant when used for patient access requests.

### ⚠️ AMBIGUITIES
- **Default expiration language is confusing**: "If I do not specify an expiration date or event, this authorization will expire on the date of the signature below" — this sentence could be interpreted multiple ways. Does it mean the authorization is valid only on the signing date, or that only records created through the signing date are covered? The clause "records will only be released for services up to and including that date" clarifies somewhat, but the concept of an authorization that "expires" on the date it's signed is counterintuitive.
- **SSN field not marked optional**: The "Last 4 digits of SSN" field is presented as a standard field with no indication it can be left blank, yet it is not strictly required for a records request.
- **Inconsistency between campus forms**: Form-1 (BroMenn) defaults to expiration "on the date of the signature" while form-2 (Champaign) defaults to "one year." Patients interacting with the same health system could encounter different default terms depending on which campus they contact.

### ✨ BRIGHT SPOTS
- **MyCarle Account delivery option**: Offering electronic delivery through the patient portal is a meaningful step toward digital-first records access, and the 30-day availability window is transparently disclosed.
- **Explicit HIPAA Right of Access citation**: The form directly references "CFR 164.524," making patient rights visible within the document itself — an uncommon and welcome practice.
- **Granular record-type selection**: The extensive checkbox menu for both hospitalization and clinic records, with separate date ranges for each, gives patients fine-grained control over what is released.
- **Easy to find online**: Direct PDF download, no portal login required, accessible via web search and site navigation.
