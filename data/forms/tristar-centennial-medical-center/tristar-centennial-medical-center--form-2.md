# Evaluation: TriStar Centennial Medical Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page medical records release/authorization form for **Centennial Medical Group** (CMG), an affiliated physician practice — not for TriStar Centennial Medical Center (the hospital) itself. Page 1 is an instruction sheet explaining how to submit requests through **Record Reproduction Services (RRS)**, a third-party vendor based in Media, PA. Page 2 is the actual "MEDICAL RECORD RELEASE OF INFORMATION AUTHORIZATION" form.

The form was sourced from `centennialmedical.com/wp-content/uploads/2020/04/Med-Record-request-FROM-CMG.pdf`, a WordPress-hosted site for the physician group. This is distinct from the hospital's own HCA-standard authorization form (form-1.pdf, a 1-page fillable PDF with 52 interactive fields) and its Spanish translation (form-3.pdf). While CMG is affiliated with TriStar Centennial, this form operates through a completely separate workflow, vendor, and physical address (Elkridge, MD 21075 — not Nashville, TN).

## 2. FINDABILITY

The form was not found through the hospital's own medical records page. Per the retrieval notes, it was surfaced via web search for `TriStar Centennial Medical Center "medical records" "release form" PDF`. A patient looking for records from the physician group would need to know to search for "Centennial Medical Group" specifically, or stumble upon the form through a general search. The file is hosted on the CMG WordPress site at a non-descriptive path (`/wp-content/uploads/2020/04/...`), indicating it was uploaded as a blog/page attachment in April 2020 rather than placed at a dedicated, well-organized patient resources section. There is no indication from the notes that this form is linked from the main TriStar Centennial hospital website.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (5,710 characters across 2 pages).
- **Fillable fields**: Zero. The form has `fillable_field_count: 0` despite having numerous blank lines for patient information, addresses, dates, and checkboxes. All fields are purely visual (underscores and blank lines rendered as text), requiring the patient to print and handwrite.
- **File size**: 172,981 bytes (~169 KB) for 2 pages — reasonable.
- **Fonts**: 3 fonts embedded.
- **Images**: 2 embedded images (likely logos or decorative elements).
- **Digital-first design**: No. This is clearly a print-oriented form. The blank lines (`Name:_____`, `Date of Birth:__________________________`) and the visual checkbox format (`_____ Referral to Specialist`) confirm it was designed to be printed and filled by hand.

Compared to the hospital's own form-1.pdf, which has 52 fillable fields and is designed for digital completion, this affiliated group's form is a significant step backward in technical capability.

## 4. CONTENT DESIGN

**Length**: 2 pages — page 1 is instructions, page 2 is the authorization form. The instruction page is useful but could be condensed.

**Clarity**: The instruction page is written in reasonably plain language. Numbered steps (1–4) explain the process clearly: fill out the form, submit via mail/email/fax, expect potential fees, and records will be delivered on CD-Rom by default. The form page itself is more formal but still understandable.

**Organization**: The form follows a logical flow: Patient Information → Information From/To → Medical Record Specifications → Purpose of Disclosure → Legal Requirements → Agreement → Signature. However, the "INFORMATION FROM" block is pre-filled with a specific CMG location (Elkridge, MD), making it unclear whether this form works for other CMG locations.

**Layout issues**:
- The blank-line field format (`Name:_____...`) is visually cluttered and gives no indication of expected field length.
- The "LEGAL REQUIREMENTS" section uses `Agree_____ Disagree_____ N/A_____` formatting that is cramped and potentially confusing.
- The purpose checkboxes use `_____` blanks instead of actual checkbox characters, making the form harder to parse visually.

**Font size**: Appears adequate based on the text layer extraction — no indication of unusually small text, though the legal/agreement section is dense.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general-purpose release form, not specifically designed for patient self-access. The "INFORMATION TO" section defaults to a doctor/facility recipient but includes a "SELF" option. The "PURPOSE OF DISCLOSURE" options include "Personal" as one choice among nine options, placing personal access on equal footing with insurance, legal, and workers' comp requests rather than streamlining it.

**Scope options**: Patients can specify date ranges (`Start Date` / `End Date`) and write in "Specific Information." There is no checklist of record types (unlike the HCA form-1, which lists 16+ record categories). The form says "Note: larger files will take longer to process and deliver," suggesting that narrowing scope speeds delivery.

**Format options**: The instructions page states "Records will be delivered on CD-Rom unless otherwise indicated." The form itself only offers one alternative: a "Deliver on Paper" checkbox. There is no option for encrypted email, electronic media, or other modern delivery methods — a stark contrast to form-1's four delivery options.

**Right of Access language**: The agreement section mentions "I understand that I may inspect and/or copy the information to be disclosed" and "I understand that I need not sign this authorization to assure continued treatment." These are appropriate HIPAA disclosures. However, there is no explicit reference to HIPAA § 164.524, patient rights, or any regulatory framework.

**EHI/USCDI awareness**: None. Unlike the hospital's form-1, which includes a forward-looking "USCDI Release Request" option, this form has no mention of electronic health information export, interoperability, or structured data.

**Third-party vendor friction**: All requests must be routed through RRS (Record Reproduction Services) in Pennsylvania, adding an intermediary layer. The patient cannot submit directly to their physician's office. This may create delays and confusion, especially for patients accustomed to dealing with their local practice directly.

## 6. COMPLIANCE

**Fees**: The instructions state "There may be a fee for the transfer of your information" and the agreement section repeats "I understand that there may be a fee for this service." Fees are not quantified. Under HIPAA, patients requesting their own records are entitled to copies at a "reasonable, cost-based fee." The vague language does not distinguish between patient self-access fees (which HIPAA constrains) and third-party release fees.

**Expiration**: "Unless otherwise revoked, this authorization will expire six months from the date which it was originally signed." A 6-month default expiration is standard and not unreasonable.

**Sensitive records handling**: The "LEGAL REQUIREMENTS" section requires patients to explicitly agree or disagree to release of HIV/AIDS, psychiatric, substance abuse, and mental health records. The form states: "failure to complete this section will automatically imply a declination of the above." This means silence equals withholding — the default is non-disclosure, which is a conservative approach that protects sensitive information but could cause patients requesting their own complete records to inadvertently receive incomplete files if they skip this section.

**Minor/deceased patients**: The agreement section states "Minors must have a parent signature. Individuals requesting records on deceased or adult patients must provide the required Power of Attorney or other supporting legal documents." This is standard.

**Turnaround time**: The instructions promise records "within 10 days of receipt of request." This is within HIPAA's 30-day requirement for patient access requests.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Third-party vendor as mandatory intermediary**: All records requests must go through Record Reproduction Services (RRS) in Media, PA — patients cannot request records directly from the physician practice. This adds friction and may create fee-related barriers, as RRS is a for-profit records reproduction company. HIPAA requires covered entities to respond to patient access requests, and routing through a vendor that specializes in billing for records reproduction raises questions about whether patient self-access requests receive the same treatment as third-party requests.

- **CD-Rom as default delivery in 2020+**: The instructions state "Records will be delivered on CD-Rom unless otherwise indicated on release," with the only alternative being paper. Many modern computers lack optical drives. This is an outdated default that fails to meet patients where they are.

### ⚠️ AMBIGUITIES

- **Single-location pre-fill**: The "INFORMATION FROM" block is hard-coded to "Centennial Medical Group - Elkridge, 8186 Lark Brown Road, Suites 201,202, Elkridge, MD 21075." It is unclear whether this form is valid for records from other CMG locations, or if each location has its own version. The Maryland address is notably far from TriStar Centennial Medical Center in Nashville, TN — raising questions about whether this form is even operationally relevant to the Nashville facility.

- **Silent default on sensitive records**: "Failure to complete this section will automatically imply a declination of the above." Patients who skip the legal requirements section will have sensitive records withheld without explicit awareness. The form does not explain what types of information might be affected or why consent is needed.

### ❌ ERRORS

- **Geographic mismatch**: This form is for a CMG location in **Elkridge, Maryland** (21075), not Nashville, Tennessee. While Centennial Medical Group may have multiple locations, the form's pre-filled address creates a direct conflict with the study context of TriStar Centennial Medical Center in Nashville. The form may have been surfaced by web search due to name similarity rather than actual organizational affiliation with the Nashville hospital.

- **Redundant address line**: The RRS address reads "600 North Jackson Street / Street Suite 104" — the word "Street" appears to be duplicated, likely a formatting error in the original document.

### ✨ BRIGHT SPOTS

- **Clear submission instructions**: The instruction page provides three submission channels (mail, email to cmg@rrsmedical.com, fax) and an online tracking portal (request.rrsmedical.com), giving patients multiple options for submission even if delivery options are limited.

- **10-day turnaround commitment**: An explicit promise of records delivery "within 10 days of receipt of request" — faster than HIPAA's 30-day requirement and clearly stated.
