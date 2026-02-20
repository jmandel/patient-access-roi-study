# Blessing Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document title:** "BHS Authorization for Release of Medical Information"
**Date:** 04/2023 (printed at bottom of page 1)
**Document ID:** 13337113 (PolicyStat-managed; references `https://blessing-forms.policystat.com/`)
**Pages:** 2 (page 1 = authorization form; page 2 = "Guidelines for Completing" instructions)
**Source URL:** `https://www.blessinghealth.org/sites/default/files/users/user15/BH_Authorize_Release_Of_Medical_Records_4-23.pdf`

This is a **near-duplicate** of form-1.pdf. Both carry the same PolicyStat document ID (13337113), the same 04/2023 date stamp, and identical body text (6,260 vs. 6,284 characters). The sole observed difference is that form-1 includes a "Medical Record Number:" header line at the top of page 1, while form-2 omits it. The retrieval notes confirm they are hosted at slightly different URLs (`_4-2023.pdf` vs. `_4-23.pdf`). Both are **superseded** by form-4.pdf (09/2025), which is the version currently linked from the Blessing Health website. A Spanish translation (form-5.pdf, 09/2025) and an older undated version (form-3.pdf, revised 08/2015) also exist.

Because form-2 is effectively a variant of form-1 and both are superseded by the current 09/2025 edition, this document is **not the canonical form** a patient would encounter today. However, it remains publicly accessible at its original URL.

## 2. FINDABILITY

The retrieval notes indicate the form was discovered via web search for `Blessing Hospital Quincy IL "authorization" "release" "health information" form PDF`, which "immediately found direct PDF links to multiple versions." The currently linked forms on the Medical Records page (`https://www.blessinghealth.org/medicalrecords`) are the 09/2025 versions (forms 4 and 5). Form-2 is **not linked from the current website** but remains accessible at a direct URL that differs from form-1's URL only in the date suffix (`4-23` vs. `4-2023`).

The filename `BH_Authorize_Release_Of_Medical_Records_4-23.pdf` is reasonably descriptive, though the abbreviated date suffix (`4-23`) is ambiguous — it could be read as April 2023 or as a version number. The existence of two nearly identical PDFs at slightly different URLs with no clear deprecation signal is confusing for anyone who stumbles on both via search.

Overall findability for *this specific version* is moderate: a search engine can surface it, but the website itself directs patients to the newer version. There is no redirect or "this form is outdated" notice at the old URL.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present — full text is extractable (6,260 characters). Not an image-only scan.
- **Fillable fields:** Zero. The form uses `(Circle)` instructions and blank lines for handwritten entry (e.g., `"Number to call: (________) _________ - ________________"`). This is a print-and-handwrite design.
- **File size:** 131,219 bytes (~131 KB) for 2 pages — reasonable.
- **Fonts:** 7 embedded fonts.
- **Images:** 2 embedded images (likely the Blessing Health logo and a checkbox grid).
- **PDF version/management:** Managed through PolicyStat (`Official copy located at https://blessing-forms.policystat.com/`), suggesting institutional document control.

The form is a **flat, non-fillable PDF** designed for printing. All data entry fields are indicated by underscores, blank lines, or `(Circle)` instructions. A patient downloading this form must print it, complete it by hand, and submit it physically or via fax. There are no interactive form elements whatsoever (fillable_field_count: 0).

## 4. CONTENT DESIGN

**Structure:** The 2-page layout is logical. Page 1 contains the authorization itself; page 2 provides field-by-field completion guidelines. This is a helpful pairing — the guidelines page explains terms like "Continuing Care Abstract" and clarifies which fields are for staff use.

**Record-type granularity:** The form offers 15 specific record-type checkboxes:
- Continuing Care Abstract, Discharge Summary, Radiology Reports, Immunization Records, History and Physical, Radiology Images, Operative Reports, Consultations, Therapy Notes, Physical Forms, Emergency Department Records, Cardiology Reports, Workability or School Release Forms, Laboratory and Pathology Reports, Office Notes — plus an "Other (please specify)" option.

This provides good specificity, though it collapses "Hospital Setting" and "Office Setting" categories from the older form-3 into a single flat list.

**Sensitive information handling:** A separate "Sensitive Medical Information" section requires explicit opt-in for Mental Health Records, Genetic Testing, STD/AIDS/HIV, and Drugs/Alcohol, with a required date range. The form notes: `"**Witness signature is required below."` for sensitive information releases — the double asterisks marking this requirement are the only typographic emphasis on the page.

**Language:** The text is moderately dense legal prose. Sentences like *"I understand once the above information is disclosed, it may be re-disclosed by the recipient and the information may not be protected by federal or state privacy laws or regulations"* are legally necessary but not plain-language. The guidelines page on page 2 partially compensates by offering simpler explanations.

**Delivery options:** Listed at the top via `"(Circle) Pick up or Mail or Fax or Email"`, offering four delivery methods including email. The form also mentions CD/USB media for radiology images, with a caveat that these are `"not encrypted or password-protected"` and `"Unencrypted CD/USB media cannot be mailed by Blessing."`

**Purpose options:** Five checkboxes: Personal reasons, Legal, Insurance, Transferring care, Continuity of care, plus "Other (please describe)."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose authorization form**, not patient-access-specific. The FROM/TO fields allow any entity to request records from any other entity. A patient requesting their own records would fill in their name in the "TO" field. The purpose checkbox "Personal reasons" is the closest patient-access option, but the form does not distinguish between a patient exercising their HIPAA Right of Access and a third-party disclosure authorization.

**HIPAA Right of Access:** The form **does not reference** HIPAA § 164.524, the Right of Access rule, or patient rights to obtain their own records. It frames the interaction entirely as an "authorization for release" — which is the wrong legal framework for patient access requests (those require no authorization under HIPAA; they are a right).

**EHI export / electronic access:** No mention of electronic health information export, patient portal access, or bulk data rights under the 21st Century Cures Act.

**Expiration:** `"This Authorization expires on: ___. (Default: 6 months) This Authorization is only valid for existing records."` Six months is a reasonable default, and the form explicitly notes patients can write any date.

**Voluntariness statement:** The form clearly states: `"Healthcare treatment, payment, enrollment in the health plan, or eligibility for benefits is not conditioned on signing the Authorization."` This is an important patient protection.

**Identification requirement:** `"I understand photo identification may be required to obtain medical records."` The word "may" keeps this reasonable.

## 6. COMPLIANCE

**Witness requirement:** This form (04/2023 version) requires a witness signature: `"**Witness signature is required below."` This is a notable barrier. Witness requirements are **not mandated by HIPAA** for standard ROI authorizations and can create practical difficulties for patients submitting forms remotely. Notably, the current 09/2025 version (form-4) **removed this witness requirement**, suggesting Blessing Health recognized it as problematic.

**Fee disclosure:** The notes mention a "$6.50 flat fee" for certain records requests, referenced on the Medical Records webpage, but the form itself does not disclose any fees.

**Submission methods:** The form provides mailing addresses for three locations (Blessing Health System in Quincy, IL; Hannibal Clinic Operations in Hannibal, MO; Denman Services in Quincy, IL) with phone and fax numbers. No email submission address is listed, creating a disconnect — the form offers email as a *delivery* method but not as a *submission* method.

**Date range requirement:** `"Dates of Service/Treatment (MUST specify date range)"` — the capitalized "MUST" could be read as preventing patients from requesting all records without specifying dates, which would be a barrier for comprehensive record requests.

**CD/USB caveat:** The disclaimer that electronic media are `"not encrypted or password-protected and are the sole responsibility of the recipient"` is a notable security concern and shifts liability to the patient.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature requirement:** The instruction `"**Witness signature is required below"` imposes a barrier not required by HIPAA. This is especially problematic for patients completing the form at home for mail/fax submission. (This was corrected in the 09/2025 revision.)

### ⚠️ AMBIGUITIES

- **Mandatory date range:** The instruction `"Dates of Service/Treatment (MUST specify date range)"` is unclear about whether a patient can request "all records" or must specify specific dates. This could be used to reject requests that don't include a date range, creating a barrier for patients who want their complete record.
- **"I authorize the use or disclosure of the above named individual's health information, its employees and agents, to furnish"** — the grammatical subject is unclear. "Its employees and agents" appears to modify "health information" rather than the authorizing entity, creating a confusing sentence.
- **FROM field ambiguity:** The form says `"RELEASE RECORDS FROM:"` with a blank Name/Address field, while the guidelines page explains this is `"The entity in which an individual needs records from."` For patient self-requests, it's unclear whether the patient should write "Blessing Hospital" here or leave it blank.

### ❌ ERRORS

- **Duplicate/orphaned URL:** This form (`_4-23.pdf`) and form-1 (`_4-2023.pdf`) are near-identical documents at different URLs with no indication of which is authoritative. Both remain accessible despite being superseded by the 09/2025 version, with no deprecation notice or redirect.

### ✨ BRIGHT SPOTS

- **Page 2 guidelines:** The dedicated "Guidelines for Completing" page with field-by-field explanations is genuinely helpful and more informative than most ROI forms provide. Explanations like `"Date of Service: Date of records needed, this can be a date range (i.e. '1999 to present', or specific lab report on 06/01/12.)"` give concrete examples.
- **Multiple delivery options:** Offering pick up, mail, fax, and email as delivery methods is above average for ROI forms, especially the inclusion of email.
- **Granular record-type selection:** The 15 specific record-type checkboxes plus "Other" give patients meaningful control over what is released.
