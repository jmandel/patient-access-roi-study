# Evaluation: The Valley Hospital — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization for Release of Patient Records & Information" specific to **The Valley Hospital, Ridgewood, New Jersey**. It is the oldest of four forms found for the Valley Health System ecosystem. The other three forms serve different entities within the system: form-1 and form-2 are for Valley Medical Group (VMG, the physician practice arm), dated July 2023 and May 2023 respectively, and form-4 is for Valley Home Care (April 2023). This form-3 is the hospital-specific release form and is significantly older — its revision history footer reads `5/96, 8/01, 2/03, 5/03, 9/07, 9/08, 9/11`, meaning it was last revised in **September 2011**, over 14 years ago. The filename on the server (`Autho_VHNJ.pdf`) uses an abbreviation rather than a descriptive name.

Notably, the form lists the hospital location as "Ridgewood, New Jersey," while the organization's current website and medical records page use Paramus, NJ. This may reflect a campus relocation or address change since 2011.

## 2. FINDABILITY

This form was **not found on The Valley Hospital's own website**. It was discovered hosted on **mrocorp.com** (MRO Corp, a third-party medical records outsourcing company) at `https://mrocorp.com/wp-content/uploads/2012/05/Autho_VHNJ.pdf`. The hospital's medical records page (`valleyhealth.com/patients-visitors/medical-records`) now directs patients to an online records request tool and does not link to any downloadable PDF authorization forms — though the VMG forms (form-1, form-2) remain accessible at their direct URLs on valleyhealth.com.

A patient searching for a Valley Hospital release form would not find this document through the hospital's website navigation. It would only surface through a web search that happens to index the MRO Corp upload. The URL path (`/wp-content/uploads/2012/05/`) suggests it was uploaded to MRO's WordPress site in May 2012, further reinforcing that this is a legacy artifact rather than a currently promoted form.

## 3. TECHNICAL ACCESSIBILITY

- **File size:** 24,059 bytes (24 KB) — very small, appropriate for a single-page document.
- **Page count:** 1
- **Text layer:** Present, so the form is searchable and text is selectable.
- **Fillable fields:** 0 — the form has no interactive form fields at all. All blanks are represented as underscores (`____________`) in the text, requiring the user to print and hand-write entries.
- **Fonts:** 6 fonts embedded.
- **Images:** 0 embedded images.
- **Barcode artifacts:** The text extraction reveals nonsense strings near the top of the document (`AOBKHNGKGODODK`, `AIPCHBFIDDBHAK`, `AODBPMLBKEALPK`, `DLDLDDLLLLDDL`), which are barcode character data rendered as text. This is a tracking/scanning barcode, not meaningful content, but it pollutes the text layer.
- **Digital-first design:** This is clearly a document designed for **print-and-fill** workflow. The fill-in-the-blank underscores, lack of form fields, and barcode for physical document tracking all indicate a paper-first design that was saved as a PDF for distribution.

## 4. CONTENT DESIGN

**Length:** A single page containing the authorization, terms, record type checkboxes, signature block, and a compliance notice — all compressed into one page. While brevity can be positive, here it comes at the cost of legibility and whitespace.

**Language and clarity:** The form uses moderately legalistic language. The authorization statement reads: *"I, ____________, born on ____________ do hereby consent and authorize The Valley Hospital to disclose to..."* — formal but understandable. The rights/revocation section is dense but covers the essentials (right to revoke in writing, contact information for the Privacy Officer at "223 North Van Dien Avenue, Ridgewood, N.J. 07450").

**Organization:** The form follows a linear flow: patient identity → recipient → information type → purpose → revocation rights → record type checkboxes → signature. There is no sectioned layout with headers (unlike the newer VMG forms which use "Section A" / "Section B" structure). The record-type checkboxes (Inpatient, Outpatient, Emergency Room, Clinic, and specific test types like X-ray, Labs, Pathology, Vascular, EKG, Echocardiogram) are grouped at the bottom with date fields.

**Notable content issues:**
- The form opens with a "Doctor's Appt date" and "Time" field at the very top, before the authorization title. This is unusual and suggests the form doubles as an appointment scheduling artifact — confusing for a patient who just wants to request records.
- There are no instructions or directions page (unlike form-1 and form-2 which include a full page of "Directions for Completing the Authorization").
- A euro symbol (`€`) appears before "Other" in the test type checkboxes, which is clearly an encoding/font error — it should be a checkbox character.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose release form** — it authorizes The Valley Hospital to "disclose to" a named recipient. There is no specific pathway or language for patients requesting their own records. The form mentions "personal use" as one example purpose, but does not distinguish between patient access requests (which have stronger protections under HIPAA § 164.524) and third-party disclosures.

**Scope options:** The form provides checkboxes for service setting (Inpatient, Outpatient, Emergency Room, Clinic) and specific test types (X-ray, Labs, Pathology, Vascular, EKG, Echocardiogram, "Test results only"). Date ranges can be specified. There is also a free-text field for describing the information to be released. This is adequate but less granular than the newer VMG forms, which include categories like Progress Notes, Medication Lists, Immunization Records, and Psychotherapy Process Notes.

**Format/delivery options:** The form provides **no electronic delivery options**. There is no mention of fax, email, CD, USB, or any digital format. The only method implied is physical pickup, as the form states: *"If you are picking up the records personally, you will be required to show a legal form of identification."* This stands in stark contrast to the VMG forms (form-1, form-2) which offer fax, paper copy, CD, encrypted email, and unencrypted email.

**Right of Access language:** There is **no reference to HIPAA § 164.524** or patient rights to access their own records. The form references 42 CFR § 2 (substance abuse record confidentiality) and N.J.S.A. 26:5c-1 (NJ HIV/AIDS confidentiality), but only in the context of redisclosure restrictions on recipients — not patient rights.

**EHI Export awareness:** None.

## 6. COMPLIANCE

**Fee disclosure:** The form states: *"all copies for patient records for personal use carry a $1 per page fee."* This is a flat per-page fee disclosed upfront. Under HIPAA's Right of Access rule (as clarified by HHS guidance), fees for patient access should be limited to a reasonable, cost-based fee — and many states including New Jersey have specific fee schedules. A blanket $1/page fee disclosed on the form itself, without distinguishing patient access requests from third-party releases, may create a chilling effect on patient requests. The 2016 HHS guidance suggested a flat fee of $6.50 for electronic copies as a safe harbor — a per-page fee structure for patient access copies is disfavored.

**Timeline:** The form states: *"The State of New Jersey allows 30 days to comply with a record request and walk-ins will be handled accordingly unless there is an emergency."* While accurate as a statement of NJ law, the phrasing reads as a warning to patients rather than a commitment to timely service.

**Walk-in policy:** The form states walk-ins are "handled accordingly unless there is an emergency," which is vague and could be read as discouraging walk-in requests.

**Expiration:** The form states: *"Unless otherwise revoked, this Authorization will expire on the following date, event, or condition or in one year."* A default 1-year expiration is standard and reasonable.

**ID requirement:** The form requires showing "a legal form of identification" for in-person pickup. This is standard practice.

**Witness requirement:** The form includes a "Witness to Signature(s)" line, which is not required by HIPAA for patient access authorizations and adds an unnecessary step.

**Age restriction:** *"Patients over 18 years of age must request their own records."* This is standard and aligned with privacy practices.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Flat $1/page fee for personal-use copies** stated directly on the form: *"all copies for patient records for personal use carry a $1 per page fee."* For patient access requests under HIPAA, fees should be limited to reasonable cost-based amounts. A per-page fee structure (vs. a flat fee or cost-based calculation) is specifically disfavored by HHS guidance for patient access. Disclosing this on the form may deter patients from exercising their right of access.
- **No electronic delivery options at all** — the form assumes physical pickup or mailing, with no mention of fax, email, or electronic media. HIPAA requires covered entities to provide records in the format requested by the patient, including electronically, if readily producible.
- **Witness line** on the signature block adds a barrier not required by HIPAA or NJ law for standard patient access authorizations.

### ⚠️ AMBIGUITIES

- **"Doctor's Appt date" and "Time" fields** at the top of the form with no explanation of their purpose. It is unclear whether the form must be submitted in conjunction with a doctor's appointment, or whether this is simply a scheduling convenience field. The notation "(when applicable)" does not clarify.
- **"Walk-ins will be handled accordingly unless there is an emergency"** — vague language that could be read as either accommodating or discouraging walk-in requests. What does "handled accordingly" mean?
- The form is branded to "The Valley Hospital, Ridgewood, New Jersey" but the organization's current address and operations center on Paramus, NJ. It's unclear whether this form is still accepted.

### ❌ ERRORS

- **Encoding error:** A euro symbol (`€`) appears before "Other" in the test-type checkbox list where a checkbox character should be. This is a font/encoding defect.
- **Barcode text pollution:** The text layer includes nonsense barcode strings (`AOBKHNGKGODODK`, `AIPCHBFIDDBHAK`, etc.) that are not meaningful content but appear when the PDF text is extracted or searched.
- **Severely outdated:** Last revised September 2011 (per footer: `5/96, 8/01, 2/03, 5/03, 9/07, 9/08, 9/11`). The form predates major HIPAA Right of Access enforcement guidance (2016, 2019), the 21st Century Cures Act (2016), and the ONC Information Blocking Rule (2021). It likely does not reflect the hospital's current processes, especially given that form-1 and form-2 (VMG, 2023) are substantially more modern.
- **Hosted only on third-party site:** The form exists only at `mrocorp.com/wp-content/uploads/2012/05/Autho_VHNJ.pdf` — not linked from the hospital's own website, raising questions about whether it is still an active, accepted form.
