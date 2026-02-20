# Grady Memorial Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **older version** of Grady Health System's "Authorization for Disclosure of Protected Health Information (PHI)" form. It is a 2-page standalone authorization form (144,601 bytes) sourced from `https://www.gradyhealth.org/wp-content/uploads/2017/08/Grady-PHI-form.pdf` — the URL path `/2017/08/` suggests it was uploaded to the website in August 2017.

The revision code at the bottom reads **"24-40 (Rev 9/08; 3/12, 5/15)"**, indicating the last revision was May 2015. By contrast, form-1.pdf (the current primary form) carries revision "24-40 (Rev 9/08; 3/12, 5/15, **2/22**)" — updated in February 2022. Form-2 is therefore a **superseded version** that remains publicly accessible. Form-3.pdf is a combined instructions-plus-form document that embeds the same form-2 content (identical revision code) along with a COVID-era cover page providing submission instructions and fee information.

Three forms were found for this organization. Form-1 is the current primary form; form-2 is an older version still hosted online; form-3 bundles form-2 with a COVID-era instruction sheet.

## 2. FINDABILITY

Per the retrieval notes, this form was found on the second web search (`Grady Memorial Hospital Atlanta "medical records" "release form" request`). The search "revealed additional PDF URLs including an older PHI form." The primary medical records page at `https://www.gradyhealth.org/medical-records/` links to the current form (form-1); form-2 is not prominently linked but remains discoverable via search engines.

The URL (`/wp-content/uploads/2017/08/Grady-PHI-form.pdf`) is moderately descriptive — "Grady-PHI-form" communicates the purpose — but the file is buried in a WordPress uploads directory with a date path, suggesting it was uploaded as a blog/page attachment rather than maintained as a canonical document. A patient searching for the form would more likely encounter the current version; finding this older version requires a broader search or encountering a cached link.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (5,492 characters), though the notes mention "xref errors reported by pdftotext" indicating some PDF structural corruption.
- **Fillable fields**: Zero (0). This is a flat, non-interactive PDF. Patients must print and handwrite all entries.
- **File size**: 144,601 bytes for 2 pages with no embedded images — reasonably sized.
- **Font count**: 9 fonts.
- **Digital-first design**: No. This is designed as a print-and-fill form. All fields are labeled but have no interactive entry mechanism.
- **Checkbox rendering**: The form uses the **Ethiopic character ፬ (U+1364)** as checkbox markers instead of standard checkbox symbols (☐/☑ or PDF form checkboxes). This is a significant rendering artifact — the checkboxes appear as an unusual character that many patients and even some PDF readers may not render correctly. In the extracted text, every checkbox option appears as `፬ Clinic Progress Notes`, `፬ Paper`, etc.

## 4. CONTENT DESIGN

**Length and structure**: 2 pages, well-organized into logical sections:
1. Patient demographics (name, SSN last 4, DOB, address, email, phone)
2. From/To disclosure parties
3. Information types to release (17 checkbox categories)
4. Release format and method
5. Expiration and revocation rights
6. Signature authority rules
7. Documentation requirements (page 2 bottom)

**Clarity**: The form uses a mix of plain language and legal terminology. The subtitle "(Patient's Permission to Release Information in the Medical Record)" is a helpful plain-language gloss. However, the body contains dense legal language, e.g.: "I will not hold Grady, its officers, trustees, employees, agents, or contractors responsible for anything that may happen from the use or release of my PHI."

**Information categories**: The form offers 17 specific record-type checkboxes plus an "Other" field and an "All Records" option. Sensitive categories are explicitly called out: HIV/AIDS, Mental Health Care, Psychotherapy Notes, and "Diagnosis, Treatment and/or Referral for Alcohol and/or Drug Abuse." This granularity is appropriate for a disclosure form.

**Missing elements**: There is **no date range selection** — no fields to specify "records from [date] to [date]." The form asks the patient to select record types but provides no temporal scoping mechanism. This contrasts with form-1, which includes "Date(s) of service requested: From _____ (date) to _____ (date)."

**Purpose field**: No field for the purpose/reason for the request. Form-1 includes purpose options (Continuity of Care, Insurance/Billing, Legal, Personal, Other).

**Release format options**: Only **Paper** and **CD/DVD**. No electronic/email option is offered on the form itself (though form-3's instruction cover sheet mentions electronic delivery as an option). Release methods are limited to **Mail**, **Pick-up**, and **Fax (continuing care only)**.

**Warning language**: The form opens with: "Instructions: Fill out form in its entirety. If any section is incomplete, this form may be invalid and the request may not be processed." This is repeated at the bottom of page 1 in an "ATTENTION" box. The threatening tone may discourage patients from submitting the form if they are unsure about any field.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose disclosure form** — not tailored for patient self-access. It uses a bidirectional "Request Information From" / "Release Information To" structure that treats all requestors alike. A patient requesting their own records must fill in both the "from" and "to" fields, effectively addressing the form to themselves.

**Documentation requirements** (page 2) distinguish between three scenarios: patients requesting their own records, patient representatives picking up records, and third-party requests. For patient self-access, the requirements are: (1) signed authorization form, and (2) government-issued photo ID. This is reasonable.

**No electronic delivery option**: The release format options are limited to Paper and CD/DVD. There is no email or electronic portal option on this version of the form, which is a notable gap.

**No HIPAA Right of Access reference**: The form does not mention 45 CFR § 164.524 or the patient's right of access under HIPAA. It does not mention any rights to receive records in electronic format.

**No fee disclosure**: The form does not mention fees. Form-3's cover page states "Charges may apply. These charges generally do not exceed $6.50" — but this information is absent from the standalone form-2.

**No EHI export or bulk data mention**: No reference to electronic health information export.

**Liability waiver**: The form includes a broad hold-harmless clause: "I will not hold Grady, its officers, trustees, employees, agents, or contractors responsible for anything that may happen from the use or release of my PHI." This clause may discourage patients or create a chilling effect, though its enforceability is questionable.

## 6. COMPLIANCE

**Authorization expiration**: "This authorization will expire one (1) year from the date of signing unless I revoke it in writing, or indicate an event or earlier date here." One year is a standard, reasonable expiration period.

**Right to revoke**: Clearly stated: "I may revoke this authorization at any time by sending a written notice to Grady Health Information Management Department."

**Authorization not required for treatment**: Correctly states: "I do not have to sign this Authorization to be treated at Grady" with appropriate exceptions for research and third-party-purpose-only treatment.

**SSN collection**: Requests "Last Four of SSN" — collecting any portion of SSN for a records release form raises privacy concerns, though last-4 is a common identity verification practice.

**Completeness requirement**: "If any section is incomplete, this form may be invalid and the request may not be processed" — this language is potentially problematic. HIPAA requires covered entities to process right-of-access requests; rejecting a form because a non-essential field is blank could constitute an unreasonable barrier if applied rigidly. However, the language says "may" rather than "will."

**Re-disclosure warning**: Includes standard language about potential re-disclosure.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Broad liability waiver**: "I will not hold Grady, its officers, trustees, employees, agents, or contractors responsible for anything that may happen from the use or release of my PHI." Requiring a patient to waive liability as part of requesting their own records goes beyond standard authorization language and could discourage patients from exercising their access rights.

### ⚠️ AMBIGUITIES

- **Superseded form still online**: This older version (rev. 5/15) remains publicly discoverable even though a newer version (form-1, rev. 2/22) exists. A patient finding this via search engine might unknowingly use an outdated form, missing features like electronic delivery, date range fields, and purpose-of-request options that the current form includes.
- **"May be invalid" completeness warning**: The form says incomplete sections "may" make the form "invalid" and the request "may not be processed" — but does not clarify which fields are truly required vs. optional, leaving patients uncertain about what can be safely left blank.
- **No date range fields**: Unlike the newer form-1, this form has no mechanism for patients to specify which dates of service they want records for. It's unclear whether leaving this unspecified means "all records" or whether the request would be rejected as incomplete.

### ❌ ERRORS

- **Ethiopic character checkboxes (፬)**: All checkboxes render as the Ethiopic punctuation character ፬ (U+1364) instead of standard checkbox symbols. This is a font/encoding error in the PDF that produces visually confusing output — particularly in extracted text and potentially in some PDF viewers. There are approximately 30 instances across both pages.
- **PDF structural corruption**: The retrieval notes report "xref errors reported by pdftotext," indicating the PDF's internal cross-reference table is damaged. While text is still extractable, this corruption may cause issues with some PDF readers or assistive technologies.
- **"of¿cers" rendering**: In the page 2 text extraction, "officers" renders as "of¿cers" — suggesting a font substitution issue where the "fi" ligature is not properly mapped. This affects accessibility for screen readers and text extraction tools.
