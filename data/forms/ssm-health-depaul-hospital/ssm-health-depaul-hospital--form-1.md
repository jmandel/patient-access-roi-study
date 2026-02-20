# Evaluation: SSM Health DePaul Hospital – form-1.pdf

**Organization:** SSM Health DePaul Hospital - St. Louis (Bridgeton, MO)  
**Form file:** form-1.pdf (86,620 bytes, 1 page)  
**Source URL:** https://www.ssmhealth.com/getmedia/626ff70a-39ec-49a8-8f3f-903d077ae27d/medical-record-release-form.pdf  
**Form identifier:** DPM-2065-035 (1/2019)

---

## 1. DOCUMENT IDENTIFICATION

This is a system-wide ROI authorization form titled **SSMHC "Request for Access to/Authorization for Use and Disclosure of Protected Health Information."** It uses the older "SSMHC" (SSM Health Care) branding rather than the current "SSM Health" name, identifying it as a legacy version of the system's general authorization form.

The form is a **dual-purpose document** combining patient access requests and third-party disclosure authorizations into a single form. It includes a "Purpose of Disclosure" section with a checkbox for "For personal access (specify): Copy / Inspection / Summary," alongside options like "Changing physicians," "Insurance/Workers' Compensation," "Legal," and "Research."

**Relationship to other forms found:** A second form (form-2.pdf) was also retrieved — the St. Louis metro–specific version using current "SSM Health" branding. According to notes.md, form-2 is the version DePaul Hospital patients would actually be directed to use. Form-1 appears to be the older, system-wide generic version still hosted on the SSM Health website but effectively superseded for St. Louis facilities. Form-2 adds psychotherapy notes as a record type, includes an email delivery address field, and has 69 fillable form fields — none of which form-1 has.

---

## 2. FINDABILITY

**Search difficulty: Moderate.** The form was found via a web search for `SSM Health medical records release form authorization PDF`, which returned a direct link to the PDF. However, it is not the form DePaul patients would be directed to; navigating from the hospital's location page leads to the system-wide medical records page (https://www.ssmhealth.com/resources/get-my-medical-records), which uses location-dependent content to surface the STL metro form (form-2) instead.

The URL is a CMS-generated GUID path (`/getmedia/626ff70a-39ec-49a8-...`), which is not human-readable and provides no clue about what the document is. There is no descriptive filename — it downloads as `medical-record-release-form.pdf`, which is at least somewhat descriptive.

The SSM Health medical records page also mentions an electronic submission option via the **MRO Express portal** (mroexpress.mrocorp.com) for Missouri facilities, suggesting this PDF form may not even be the primary access pathway.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. Full text is extractable (4,756 characters), making the form searchable and screen-reader parseable.
- **Fillable fields:** **Zero.** This is a flat PDF with no interactive form fields. Every blank must be printed and filled by hand. This is in stark contrast to form-2, which has 69 fillable fields.
- **Image-only scan:** No — the form is digitally created, not a scan.
- **File size:** 86,620 bytes for a single page is reasonable.
- **Font count:** 11 fonts, suggesting structured typography but no embedded images.
- **Digital-first design:** Partially. The document was clearly authored digitally (not scanned), but it was designed as a **print-and-fill** artifact. Underscored blank lines like `PATIENT NAME:________` and checkbox characters rendered as `` indicate this was created for paper completion. Without fillable fields, patients must print, hand-write, scan, and return the form.

---

## 4. CONTENT DESIGN

**Length:** One page. This is impressively compact for a form covering both patient access and third-party release, with record type selection, delivery method, purpose of disclosure, and an eight-bullet acknowledgement section. However, the single-page constraint makes the form very **dense**.

**Organization:** The form follows a logical top-to-bottom flow:
1. Entity and patient identification
2. Type of access requested
3. Authorize from / disclose to (two-column layout)
4. Delivery method
5. Information to be released (record types with date fields)
6. Purpose of disclosure
7. Acknowledgement of understanding
8. Signature

**Clarity:** The language is largely institutional/legal but not impenetrable. The title itself — "Request for Access to/Authorization for Use and Disclosure of Protected Health Information" — is jargon-heavy and would confuse most patients. The dual purpose (access vs. disclosure) is not explained; a patient requesting their own records must navigate through fields designed for third-party releases (e.g., the "To Disclose My Protected Health Information To" block with NAME, RELATIONSHIP, ADDRESS, FAX fields).

**Layout concerns:**
- The two-column "I Hereby Authorize" / "To Disclose My Protected Health Information To" layout is confusing for patient-access requests where both parties are essentially the same person.
- Record type checkboxes are interleaved with date fields in a way that may be confusing — each record type has a `_________________` date line next to it, but the visual pairing is unclear in extracted text.
- The signature line appears mid-page, awkwardly positioned between the record types and the purpose/acknowledgement sections, with the notation `X_____________ SIGNATURE OF PATIENT OR PERSONAL REPRESENTATIVE DATE`.

**Font size:** With 11 fonts and all content on one page, the acknowledgement section likely uses very small type to fit the eight bullet points.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose form**, not a patient-access-specific form. The "For personal access" option is buried as the last checkbox under "PURPOSE OF DISCLOSURE." A patient requesting their own records must still fill out both the "I Hereby Authorize" and "To Disclose My Protected Health Information To" blocks, which is confusing — who goes in which box?

**Type of access options:** The form does offer three choices: "Inspection," "Hard Copy," and "Electronic Copy" — with the caveat: "only available if SSM Health Care maintains the requested information electronically." This is reasonable.

**Delivery methods:** Three options are listed:
- Mail
- Hold for pick up
- Electronic — but defined as "records will be provided on a CD and mailed to your residence"

The "electronic" option is misleadingly labeled — it still involves physical mailing of a CD, not a true electronic delivery. There is no email delivery option on this form (form-2 adds an email field). There is, however, a bullet in the acknowledgement section about unencrypted email that seems contradictory: "I request SSM Health Care to send an electronic copy (if available) of the requested information by unencrypted e-mail." This acknowledgement statement implies email delivery is possible, but the delivery method section does not include an email option or email address field.

**Record type granularity:** Good. The form lists: Discharge Summary, History & Physical Exam, Progress Notes, Lab Reports, X-Ray Reports, Medication Records, Detailed Bill, and Other. It also includes sensitive-category checkboxes for Substance abuse, Mental health/behavioral health, and HIV-related information — which is appropriate under 42 CFR Part 2 and state law.

**HIPAA Right of Access language:** The acknowledgement section references some patient rights:
- 30-day response timeline
- Right to request review of any denial
- No conditions on healthcare
- Right to revoke
However, it does not cite HIPAA § 164.524 by name, and does not explain what "Right of Access" means.

**EHI Export / bulk data:** No mention whatsoever.

---

## 6. COMPLIANCE

**Fee language:** The form states: "I understand that I may be required to pay the cost of creating paper copies or electronic media, mailing copies, supervising my inspection, or preparing a summary except for uses and disclosures for the purpose of treatment, payment, and operations." This is vague about what those costs are but does not impose fees that clearly exceed HIPAA limits. The "except for TPO" carve-out is unusual and not required by HIPAA.

**Expiration:** The form includes a blank for the patient to fill in an expiration date, with checkboxes for "at end of research study" and "not applicable for ongoing research." For a patient-access request, the expiration concept is somewhat misplaced — you don't need an expiring authorization to access your own records. This reflects the form's bias toward third-party release.

**No notarization requirement.** No in-person-only submission requirement.

**Signature placement:** The signature line is positioned mid-form, between the record types and the purpose/acknowledgement sections. This could lead patients to sign before reading the acknowledgement bullets below, though this may be a formatting artifact.

**30-day timeline:** The form states a 30-day response period, which aligns with HIPAA's requirement (with a possible 30-day extension).

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"Electronic" delivery means a mailed CD.** The delivery method section defines electronic delivery as "records will be provided on a CD and mailed to your residence." In 2019 (form date) and especially now, this is an anachronistic barrier that does not satisfy HIPAA's requirement to provide records in the electronic form and format requested by the patient (45 CFR § 164.524(c)(2)(ii)). A patient asking for email or portal delivery would have no clear path on this form.

### ⚠️ AMBIGUITIES

- **Contradictory email language.** The delivery method section offers no email option and no email address field, but the acknowledgement section includes a bullet about requesting records "by unencrypted e-mail." This creates confusion: is email delivery available or not? A patient would have no idea where to provide their email address.
- **Dual-purpose form creates confusion for patient access.** The "I Hereby Authorize" / "To Disclose My Protected Health Information To" two-column layout is designed for third-party releases. A patient requesting their own records must figure out which column to use for their own information, with no guidance provided.
- **Expiration date field on patient access requests.** The form asks the patient to fill in an expiration date, but a patient-access request is not an authorization that expires — it's a one-time right of access. This conflation is confusing.

### ❌ ERRORS

- **Outdated branding.** The form uses "SSMHC" (SSM Health Care), a name the organization no longer uses. The current branding is "SSM Health," as seen on form-2.
- **Signature line placement.** The signature line with "X_____________ SIGNATURE OF PATIENT OR PERSONAL REPRESENTATIVE DATE" appears mid-form, between the record type list and the purpose/acknowledgement section. This is a layout defect — patients would logically sign after reading all terms.

### ✨ BRIGHT SPOTS

- **Single-page efficiency.** Despite covering a lot of ground (access type, record types, sensitive categories, delivery, purpose, acknowledgements), the form fits on one page, reducing the barrier to completion.
- **Sensitive-category checkboxes.** Explicit checkboxes for substance abuse, mental health, and HIV-related information show awareness of 42 CFR Part 2 and state-level consent requirements for specially protected information.
- **Clear revocation and denial-review rights.** The acknowledgement section clearly states the right to revoke authorization and the right to request review of access denials.
