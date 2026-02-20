# Blessing Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **"BHS Authorization for Release of Medical Information"** — a general-purpose ROI authorization form dated **April 2023** (ID: 13337113). It is a 2-page PDF (131 KB): page 1 is the authorization form itself and page 2 is a "Guidelines for Completing" instruction sheet.

This is **not the current version** linked on the Blessing Health website. The organization has since published a September 2025 revision (form-4.pdf, ID: 18929997). Five forms were found total for this organization:

- **form-1.pdf** (this document): English, April 2023, includes "Medical Record Number" header and witness signature requirement
- **form-2.pdf**: Nearly identical April 2023 variant without the "Medical Record Number" header line
- **form-3.pdf**: Older/undated version (revised 8/2015) with a different layout that names specific Blessing facilities
- **form-4.pdf**: English, September 2025 — **current version** linked from the website; removes witness requirement
- **form-5.pdf**: Spanish, September 2025 — **current version**, Spanish translation of form-4

The form is hosted via PolicyStat ("Official copy located at https://blessing-forms.policystat.com/"), indicating an enterprise policy/forms management system.

## 2. FINDABILITY

The retrieval notes describe this form as **easy to find**. According to the search documentation:

- A web search for `Blessing Hospital Quincy IL "authorization" "release" "health information" form PDF` "immediately found direct PDF links to multiple versions."
- The medical records page at `https://www.blessinghealth.org/medicalrecords` is described as "well-organized under For Patients > Request Medical Records."
- The URL is descriptive: `BH_Authorize_Release_Of_Medical_Records_4-2023.pdf`.

However, this specific PDF (form-1) is an **older version** still accessible at its URL but no longer the one linked from the main medical records page. This creates a version confusion risk — a patient arriving via a search engine could download a superseded form. There are at least three distinct English-language versions (2015, April 2023, September 2025) all reachable via direct URLs, with no redirect or deprecation notice.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. The full text (6,284 characters) is cleanly extractable via `pdftotext`, indicating this is a digitally-created PDF rather than a scan.

**Fillable fields:** Zero (`fillable_field_count: 0`). Despite being digitally authored, the form has no interactive form fields whatsoever. All blanks use underscores or written instructions like "(Circle) Pick up or Mail or Fax or Email." The form instructs users to circle options — a purely paper-oriented interaction model.

**File format:** 131 KB for 2 pages with 7 fonts and 2 embedded images. Reasonable file size. Not an image-only scan.

**Digital-first design:** This is clearly a **print-first document** that happens to be distributed as a PDF. The "(Circle)" instructions, manual fill-in blanks, and physical signature lines all assume the patient will print and hand-complete the form. There is no mechanism for electronic completion or submission within the PDF itself.

## 4. CONTENT DESIGN

**Length:** 2 pages — page 1 is the authorization, page 2 is completion guidelines. Proportionate for the content covered.

**Organization:** The form follows a logical flow: patient identification → delivery preferences → records source and destination → record types → sensitive information consent → purpose → revocation rights → expiration → signatures. The page 2 guidelines are a genuinely helpful field-by-field instruction sheet.

**Record type options:** The form provides 14 specific checkbox categories for record types: Continuing Care Abstract, Discharge Summary, Radiology Reports, Immunization Records, History and Physical, Radiology Images, Operative Reports, Consultations, Therapy Notes, Physical Forms, Emergency Department Records, Cardiology Reports, Workability or School Release Forms, Laboratory and Pathology Reports, Office Notes, plus an "Other" write-in. This is a granular and well-designed selection.

**Sensitive information:** A separate "Sensitive Medical Information" section requires explicit authorization for Mental Health Records, Genetic Testing, STD/AIDS/HIV, and Drugs/Alcohol, with a required date range. This section carries an additional witness signature requirement (noted with "**Witness signature is required below").

**Clarity:** The form mixes relatively plain language with legal boilerplate. The rights language (revocation, re-disclosure, voluntariness) is written at a moderately high reading level but is standard for HIPAA authorization forms. The page 2 guidelines use genuinely helpful plain-language explanations (e.g., "Date of records needed, this can be a date range (i.e. '1999 to present', or specific lab report on 06/01/12.)").

**Layout:** Moderately dense. The record-type checkboxes are compactly arranged. The legal text paragraphs on the lower half of page 1 are tightly spaced. Font count of 7 suggests reasonable typographic hierarchy.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose authorization form** — not specific to patient access. The "RELEASE RECORDS FROM" / "RECORDS GOING TO" structure is bidirectional, treating patient self-access the same as third-party release. The purpose options include "Personal reasons" alongside "Legal," "Insurance," "Transferring care," "Continuity of care," and "Other." A patient requesting their own records would need to fill in both the FROM and TO fields, essentially authorizing themselves.

**Delivery options:** The form header offers "(Circle) Pick up or Mail or Fax or Email" and includes a "Call when ready?" prompt. Email delivery is listed as an option. The form also notes: "Electronic images/records (i.e. Radiology) on CD/USB media are not encrypted or password-protected and are the sole responsibility of the recipient."

**Format options:** No mention of electronic health information export, patient portal access, FHIR, or bulk data options. The notes indicate that Blessing Health also offers "an online records request tool (identity verification via driver's license photo)" — but this is not referenced on the form itself.

**HIPAA Right of Access:** The form does not reference HIPAA § 164.524 or explicitly frame the patient's right to access their own records. It references rights to revoke, inspect, and copy — but these are framed as standard authorization language, not as patient access rights.

**Scope options:** Patients can specify date ranges (mandatory: "MUST specify date range") and select from 14+ record type checkboxes. This provides good granularity for specifying what records are needed.

**Expiration:** "This Authorization expires on: ___. (Default: 6 months) This Authorization is only valid for existing records. Future services will need a new Authorization." The 6-month default is short but explicitly stated.

## 6. COMPLIANCE

**Witness requirement:** The form includes a "**Witness" signature line with the note "**Witness signature is required below." This witness requirement appears to apply specifically to the sensitive medical information section (Mental Health, Genetic Testing, STD/AIDS/HIV, Drugs/Alcohol). The September 2025 version (form-4) removes this requirement entirely, suggesting Blessing itself determined it was unnecessary.

**Photo ID:** "I understand photo identification may be required to obtain medical records." — Uses permissive "may be required" language rather than a blanket mandate.

**Fees:** Not mentioned on this form. The retrieval notes indicate "A flat fee of $6.50 may apply for certain record requests" per the website, but the form itself is silent on fees.

**No notarization required.** No in-person-only submission requirement.

**Voluntariness statement:** The form includes the required HIPAA statement: "Healthcare treatment, payment, enrollment in the health plan, or eligibility for benefits is not conditioned on signing the Authorization."

**Minor consent provisions:** The form addresses Illinois-specific minor consent rules: "If the patient is a minor, the patient must sign for the release of sensitive information. In Illinois, the patient must be at least 12 years of age." This is appropriately specific.

**Contact information:** Page 2 provides mailing addresses, phone numbers, and fax numbers for three entities: Blessing Health System HIM (Quincy, IL), Hannibal Clinic Operations HIM (Hannibal, MO), and Denman Services, Inc. (Quincy, IL).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature requirement for sensitive records:** The form mandates "**Witness signature is required below" for release of mental health, genetic testing, STD/AIDS/HIV, and drug/alcohol records. While Illinois law does have specific protections for mental health records under the Mental Health and Developmental Disabilities Confidentiality Act, a blanket witness requirement for all sensitive categories may exceed what is legally required and creates a practical barrier — a patient requesting their own mental health records would need to find a witness. Notably, the organization itself removed this requirement in the September 2025 revision.

### ⚠️ AMBIGUITIES

- **Grammatically incomplete authorization sentence:** The authorization statement reads: "I authorize the use or disclosure of the above named individual's health information, its employees and agents, to furnish:" — the sentence structure is garbled. It's unclear what entity "its employees and agents" refers to, and the sentence lacks a clear subject performing the release. The intended meaning is likely "I authorize [Blessing Health System], its employees and agents, to use or disclose..." but the actual text is confusing.
- **Multiple outdated versions accessible online:** With at least three English-language versions (2015, April 2023, September 2025) all reachable via direct URLs, patients finding this form via search engine may unknowingly use a superseded version. The form-1 and form-2 URLs differ only in filename suffix (`_4-2023` vs `_4-23`) but form-2 omits the Medical Record Number header — it's unclear which was the "official" April 2023 version.

### ✨ BRIGHT SPOTS

- **Page 2 completion guidelines:** The dedicated instruction page providing plain-language, field-by-field guidance for completing the form is genuinely helpful and goes beyond what most ROI forms provide. Examples like "Date of records needed, this can be a date range (i.e. '1999 to present', or specific lab report on 06/01/12.)" are concrete and patient-friendly.
- **Granular record type selection:** The 14+ checkbox categories for record types give patients meaningful control over exactly what information is released, rather than forcing an all-or-nothing disclosure.
- **Multiple delivery modalities:** Offering pickup, mail, fax, and email directly on the form — with a "Call when ready?" courtesy prompt — shows attention to patient convenience.
- **Spanish translation available:** The existence of form-5 (Spanish, September 2025 version) demonstrates awareness of language access needs, though no Spanish translation of this specific April 2023 version was found.
