# Owensboro Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is a 2-page "Authorization for Use and Disclosure of Health Information" — the primary ROI form for Owensboro Health. It is a general-purpose authorization that covers both patient self-requests and third-party releases. The form is accompanied by a separate companion document (form-2.pdf), a 2-page instruction sheet titled "Authorization for the Use and Disclosure of Health Information (INSTRUCTIONS)" that explains how to complete each section of the authorization form and provides submission addresses, fax numbers, and an email address. The authorization form itself (form-1) is the document patients must complete and sign; the instructions document (form-2) is informational only.

The form covers multiple Owensboro Health facilities: Regional Hospital, Muhlenberg Community Hospital, Twin Lakes Medical Center, and the Medical Group. It is dated "Rev: 11-9-23."

## 2. FINDABILITY

According to the retrieval notes, this form was **easy to find**. A simple web search for `Owensboro Health "authorization" "release" "health information" form PDF` immediately returned direct links to the PDF. The source URL (`https://www.owensborohealth.org/sites/default/files/inline/b7/health-disclosure-form.pdf`) is a direct download link with a reasonably descriptive filename ("health-disclosure-form.pdf"), though calling it a "disclosure form" rather than "release of information form" or "authorization form" may not match what patients would search for. The organization's medical records page at `/locations/owensboro-health-regional-hospital-home/about-your-stay/medical-records` also surfaces the form. No login walls, bot blocking, or CAPTCHAs were encountered.

The companion instruction document is also co-located, making it easy for patients to find both at once. The instruction sheet (form-2) helpfully provides a phone number — "(270) 417-6800" — for patients who need additional help completing the form.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** The form has a full text layer (not a scan). The extracted text is clean and well-structured, with 6,730 characters across 2 pages.

**Fillable fields:** The form has **zero fillable fields** (`fillable_field_count: 0`). All data entry areas are represented as underscored blank lines (e.g., `Patient Name: _________________________________________________________________`). This means a patient must print the form and fill it by hand, or attempt to type into the PDF using annotation tools — a significant usability limitation.

**File format:** 187,873 bytes (~184 KB) for a 2-page PDF is reasonable. The document uses 8 fonts and includes 2 embedded images (likely the Owensboro Health logo). It is not an image-only scan.

**Digital-first design:** Despite having a proper text layer, the form is clearly designed as a **print-and-fill** document. Checkboxes are represented as Unicode characters rather than interactive form elements, and blank lines substitute for text fields. This is a digitally-published paper form, not a digital-first document.

## 4. CONTENT DESIGN

**Length:** 2 pages is appropriate for an ROI authorization. The form includes patient demographics, format/delivery preferences, reason for request, facility selection, recipient information, date range, record type selection, special protected records notice, EHI export explanation, expiration terms, patient rights, legally authorized representative requirements, and signature — all within a manageable length.

**Clarity:** The form mixes plain language with some legal terminology. The "Your Rights" section on page 2 is relatively dense but includes important information. Some passages are clearly written for patients, such as: "If you would like us to send information over email not encrypted, this increases the risk that information could be read by an unauthorized third party." The EHI Export section uses regulatory language that may confuse patients: "Electronic Health Information (EHI) refers to 'electronic protected health information (ePHI)' only to the extent that it would be included in the medical record."

**Organization:** Sections flow logically: patient info → format/delivery → reason → facility → recipient → date range/record types → special records → EHI export → expiration → rights → legal representative → signature. The form uses checkboxes, bullet points, and clear section headers.

**Visual hierarchy:** Section labels are present but the form text is relatively dense, particularly on page 2. The "Your Rights" section is a block of bullet points with substantial text. The "Legally Authorized Representative" section lists requirements in numbered form, which aids readability.

**Font size:** Extracted text suggests readable font sizes throughout; the form uses 8 different fonts which likely provide visual differentiation between headers, body text, and fine print.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form serves dual purposes. It includes both "Me" and "The address below" as recipient options, and "Patient Request" appears as one of the reason/purpose checkboxes. However, it is not a patient-access-specific form — it bundles self-request with third-party release, legal/attorney, and insurance/payment purposes.

**Scope options:** Good granularity is offered. Patients can specify:
- A date range for records
- Specific record types: Medical Records Abstract, Emergency Department Reports, Operative/Procedure Reports, Immunizations, X-Ray Reports, Lab Reports, Billing, and an "Other" free-text option
- A specific facility within the Owensboro Health system

**Format options:** Notably strong. The form offers six format choices:
- Paper Copy
- MyChart Patient Portal
- EHI Export
- Email
- Fax
- CD
- USB flash drive

This is an unusually comprehensive set of format options.

**Delivery method options:** Similarly comprehensive, with six choices:
- Mail
- Pickup
- Fax
- MyChart Patient Portal
- Email (encrypted)
- Email (NOT encrypted) — with a clear risk warning

**EHI Export:** The form explicitly offers an EHI Export option with a substantive explanation: "An EHI export produced by Owensboro Health, Inc will include ALL electronic health information related to the patient across the OHI organization and all Community Connect Partners (Owensboro Pediatrics, Ohio Valley Nephrology Associates, Premier Medical Group, CareNow, and Dr. Tamberly McCoy)." It also notes that export files are delivered in "computer readable format" (TSV). This is a rare and commendable inclusion.

**Right of Access language:** The form does not explicitly cite HIPAA § 164.524, but the "Your Rights" section covers key patient rights: voluntariness of authorization, right to revoke, right to receive a copy of the authorization, and right to inspect and obtain copies of health information. It also notes that "information used and/or disclosed according to this authorization may no longer be protected by federal privacy law (also known as HIPAA)."

## 6. COMPLIANCE

**Expiration:** "This authorization shall become effective immediately and shall remain effective for 120 days from the date of signature." A 120-day expiration is relatively short but not unreasonable for a general authorization. However, for a patient self-access request this expiration is unnecessary — the patient's right of access under HIPAA is ongoing, not time-limited.

**No notarization required:** The form requires only a signature and date.

**No in-person submission required:** The instruction document (form-2) provides mailing addresses, fax numbers, and an email address for submission, offering multiple channels.

**No upfront fees disclosed:** The form does not mention fees, which avoids deterring patients but also leaves them uncertain about potential costs.

**Special protected records:** The form states: "I understand the following information may be included in my health records: information related to HIV/AIDS testing, the diagnosis or treatment of drug and/or alcohol (substance) abuse, information related to mental health or psychiatric disorders or genetic information." This serves as a blanket consent rather than allowing opt-in/opt-out for individual categories of sensitive information — a common approach but one that doesn't give patients fine-grained control.

**Legally authorized representative requirements:** The form lists specific documentation requirements (POA, executor/administrator documents, guardianship orders, custody papers). These are standard and appropriate.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **EHI Export option with explanation:** The form explicitly includes "EHI Export" as a format option, explains that it covers "ALL electronic health information related to the patient across the OHI organization and all Community Connect Partners," names the specific partner organizations included, and notes the file format (TSV). This level of transparency about EHI export is rare and exemplary — most organizations do not offer this on their standard ROI form.

- **Comprehensive format and delivery options:** Offering seven format choices (Paper, MyChart, EHI Export, Email, Fax, CD, USB) and six delivery methods (Mail, Pickup, Fax, MyChart, Email encrypted, Email unencrypted) with a clear risk warning for unencrypted email is well above average for ROI forms.

- **Companion instruction document:** Publishing a dedicated 2-page instruction sheet (form-2) that walks patients through each section in plain language, explains what EHI export means, and provides all submission addresses/fax/email is a patient-friendly practice that reduces confusion.

### ⚠️ AMBIGUITIES

- **"Requested Format" vs. "Delivery Method" overlap:** Both sections include options that could serve as format and delivery (e.g., "MyChart Patient Portal" appears in both; "Email" and "Fax" appear in both). The instruction to check "ONLY one" in each section creates potential confusion — does a patient who wants records emailed choose "Email" as format, delivery, or both?

- **EHI Export delivery method unclear:** The form says to select a delivery method but doesn't explain how an EHI Export would be delivered. If a patient checks "EHI Export" as format, which delivery method applies? TSV files can't be faxed or mailed as paper.

### 🚩 RED FLAGS

- **120-day expiration applied to patient self-access:** While a 120-day expiration on a third-party release authorization is reasonable, applying the same expiration to a patient's own access request conflates two legally distinct rights. Under HIPAA § 164.524, a patient's right to access their records does not require an authorization at all and is not subject to expiration — they have an ongoing right. Imposing a 120-day deadline could create the impression that the right to access one's own records lapses.