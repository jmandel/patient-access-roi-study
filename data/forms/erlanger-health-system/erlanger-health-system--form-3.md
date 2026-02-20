# Evaluation: Erlanger Health System — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **"Patient Request for Access to Health Information"** form — a single-page document specifically designed for patients requesting their own medical records, as distinct from a third-party release authorization. The footer identifies it as originating from **Erlanger Western Carolina Hospital (EWCH)** and dated **5/2021**.

Within Erlanger's document ecosystem, this is one of three ROI-related forms:
- **form-1.pdf**: The general "Authorization for Release of Medical Information" — a broader two-page form covering release from/to any party, including patient self-requests and third-party disclosures.
- **form-2.pdf**: An "Authorization to Disclose Healthcare Information" form specific to Erlanger Behavioral Health Hospital, hosted on a separate domain (erlangerbh.com). This is an image-only scan with no extractable text.
- **form-3.pdf** (this document): The patient-specific access request form, narrower in scope and simpler in design than form-1.

The existence of a dedicated patient access form alongside a general release form is a meaningful structural choice — it signals that Erlanger distinguishes between a patient exercising their right of access and a third-party release scenario.

## 2. FINDABILITY

Per the retrieval notes, all three forms were discovered via a single web search (`"Erlanger Health System" "medical records" "release form" filetype:pdf`). The source URL (`https://www.erlanger.org/-/media/erlanger-media/file/murphy/2021-form---patient-request-for-access.ashx`) is hosted on the main erlanger.org domain under a media path. The URL includes the somewhat descriptive slug `patient-request-for-access`, but the path segment `murphy` is opaque and organizational rather than patient-facing.

Site-scoped search confirmed a Medical Records page at `https://www.erlanger.org/patient-and-family-resources/patient-tools/medical-records`. Retrieval difficulty was rated **easy** overall — no login walls, bot blocking, or broken links were encountered. However, this form's URL path suggests it may be associated with a specific facility (the "Murphy" reference likely ties to the T.C. Thompson Children's Hospital or Murphy Building) rather than being prominently linked from the main medical records page system-wide.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Yes — full text is extractable (2,535 characters). This is a digitally authored document, not a scan.
- **Fillable fields**: **Zero** interactive form fields (`fillable_field_count: 0`). Despite being digitally authored with a text layer, the form provides only blank lines for handwriting. A patient who downloads this PDF cannot fill it out on-screen — they must print, handwrite, and submit physically or as a scanned image.
- **Page count**: 1 page. File size is 254 KB, which is reasonable for a single-page PDF with one embedded image (likely a logo).
- **PDF version**: 1.6.
- **Font count**: 10 fonts, indicating some design effort with typographic hierarchy.
- **Digital-first design**: No. Although this is not a physical scan, it is designed for **print-and-fill** use. The blank lines (`_________________________________`) and checkbox structure assume pen-and-paper completion. There is no digital submission pathway built into the form itself.

## 4. CONTENT DESIGN

**Length and proportionality**: At one page, the form is concise and appropriately sized for a patient access request. It avoids the legal density of form-1's two pages.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient identification (name, DOB, address, SSN last 4, phone, email)
2. Facility/practice selection and send-to destination
3. Date range for records
4. Record type selection (hospital vs. office/clinic categories)
5. Format preference (CD, email, paper)
6. Delivery method (mail, secure email, fax, pickup)
7. Signature and authorization

**Clarity**: The language is straightforward and avoids dense legal jargon. Instructions like "I would like these dates of service to be released" and "I want these parts of my record" use first-person, patient-friendly phrasing. The dual-purpose structure — "give me a copy of my health information" vs. "send my records to" — is handled with a simple "(choose one)" instruction.

**Record type granularity**: The form provides two distinct checklist sections:
- **Hospital**: Hospital Summary, Discharge Summary, Emergency Record, History and Physical, Operative Reports, Laboratory Reports, Radiology/X-Ray Reports, Other, Entire Record, Itemized Bill (10 options)
- **Office/Clinic**: Office/Clinic Summary, Office Visits, Physical Exam, Laboratory Reports, Radiology Reports, Other, Entire Record, Itemized Bill (8 options)

This is a notably granular set of options that gives patients meaningful control over what they receive.

**Weaknesses**: The form collects the **last 4 digits of SSN**, which is increasingly considered unnecessary for patient identification. The "By providing your email address, you acknowledge and accept the risks outlined in Guidelines for E-mail, posted on www.erlanger.org" is a reference to an external document whose contents the patient cannot review while filling out the form.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is explicitly designed for patient access requests, as its title states: "Patient Request for Access to Health Information." The opening option — "give me a copy of my health information" — directly frames the interaction as a patient right. This is a significant positive differentiator compared to organizations that only offer a general third-party release form.

**Scope options**: Strong. Patients can specify:
- Date range of service
- Specific record types from two distinct care settings (hospital vs. office/clinic)
- "Entire Record" as a catch-all option in each category
- Itemized billing records

**Format options**: The form offers four format choices: CD, Email, Paper copy, and Other. This is reasonable breadth, though CD is increasingly obsolete.

**Delivery method options**: Four methods are offered: Mail, Secure e-mail, Fax, and Pickup. The inclusion of secure email is a positive signal for electronic access.

**Right of Access language**: The form does **not** reference HIPAA § 164.524, the Right of Access rule, or patient rights in any explicit way. There is no explanation of the patient's legal right to their records, nor any mention of applicable timelines, fees, or appeal processes.

**EHI Export / patient portal**: No mention of electronic health information export, patient portal access, or FHIR-based data access.

**Timeline disclosure**: The form notes "it may take up to 30 days to schedule the appointment or provide copies," which is consistent with HIPAA's 30-day initial response requirement but is presented only in the context of the in-person viewing alternative, not as a general processing timeline for all requests.

**Personal representative**: The form includes a brief note: "If the patient lacks legal capacity or is unable to sign, an authorized personal representative may sign this for the patient. (Written Proof May be Requested)." This is appropriately included but minimal.

## 6. COMPLIANCE

**No explicit fee disclosure**: The form does not mention any fees for copies. Form-1 mentions "A fee may be charged" and "charges may apply" next to CD and paper options, but form-3 is silent on costs. This is a notable omission — patients submitting this form have no idea if they will be charged.

**SSN collection**: Requesting the last 4 digits of SSN is not a HIPAA violation but is a privacy concern and may deter some patients. Most modern forms use medical record number or date of birth as the primary identifier.

**No expiration clause**: Unlike form-1 (which states "This permission expires one year after the date of my signature"), form-3 has no expiration language. For a patient access request (as opposed to an ongoing release authorization), this is arguably less problematic, but the omission is notable.

**Identity verification**: The "EWCH Use Only" section at the bottom includes "ID Verified," "DL/Other ID," and "EWCH Employee" checkboxes, suggesting in-person identity verification may be expected. This could imply that in-person submission is the anticipated or preferred pathway, which would be a barrier for remote patients.

**No cancellation/revocation instructions**: The form does not explain how to cancel or revoke a request.

**Facility scope**: The form is branded "Erlanger Western Carolina" and the internal-use section references "EWCH" specifically. It is unclear whether this form can be used for records from other Erlanger facilities (e.g., Erlanger Medical Center in Chattanooga). The notes suggest it is "applicable system-wide," but nothing on the form itself confirms this — the blank for "facility or practice" is the only flexibility point.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Implied in-person submission**: The "EWCH Use Only" section with "ID Verified" and "DL/Other ID" checkboxes strongly suggests this form is designed for in-person drop-off with photo ID verification. No mailing address, fax number, email, or online submission option is provided for submitting the completed form itself. This creates a significant access barrier for patients who cannot visit the facility.

### ⚠️ AMBIGUITIES

- **Facility scope unclear**: The form is labeled "Erlanger Western Carolina" but includes a blank for "(facility or practice)." It is ambiguous whether a patient at Erlanger Medical Center in Chattanooga can use this form, or whether each facility has its own version.
- **Email risk disclaimer without accessible detail**: The text "you acknowledge and accept the risks outlined in Guidelines for E-mail, posted on www.erlanger.org" references an external document. A patient filling out the paper form cannot easily verify what risks they are accepting. The URL is also non-specific — it doesn't point to a specific page.
- **No fee information**: The complete silence on fees leaves patients uncertain about costs, unlike form-1 which at least acknowledges charges may apply.

### ✨ BRIGHT SPOTS

- **Dedicated patient access form**: Having a separate form titled "Patient Request for Access to Health Information" — distinct from the general release authorization — is a meaningful patient-centered design choice. It frames the interaction as the patient exercising a right rather than authorizing a third-party disclosure.
- **Granular record type selection**: The dual-category checklist (Hospital vs. Office/Clinic) with 18 total options gives patients unusual control over what they receive, avoiding the all-or-nothing approach many forms take.
- **First-person, plain-language framing**: Phrases like "I would like," "I want these parts of my record," and "I want these records as a" are unusually patient-friendly compared to the legalistic third-person language typical of ROI forms.
- **Single-page simplicity**: The entire form fits on one page without feeling cramped, which reduces the perceived burden on patients.
