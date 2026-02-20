# Olmsted Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the primary **"Authorization for Release of Health Information"** form used by Olmsted Medical Center (OMC). It is a single-page, general-purpose ROI authorization covering both patient-directed access and third-party release scenarios. The form is identified internally as document **1032407 rev0925** and is managed through Epic ("Epic – Release of Information – Disclosed by OMC").

A second form was also found for this organization: **form-2.pdf**, titled "Authorization for Allowing Verbal Communication of Protected Health Information" (document 1031908 rev0322). That companion form is limited to verbal discussions only and does not authorize release of written records. Form-1 is the operative document for patients seeking copies of their medical records.

Both forms are available in English, Spanish, and Somali translations, as indicated by document control numbers printed on each form.

## 2. FINDABILITY

According to retrieval notes, the form was **easy to find** on the OMC website. It is accessible via a dedicated "Manage Your Health Information" page at a logical navigation path: **Patients & Visitors > Your Care & Visit > Manage Your Health Information**. Multiple web search strategies successfully surfaced the form, including filetype:pdf searches and site-scoped queries.

The URL is descriptive and includes the form title:
`/app/files/public/.../Consent - Authorization for Release of Health Information.pdf`

The hosting page organizes all consent/authorization forms together and includes multilingual versions. The only retrieval difficulty noted was **Akamai CDN bot blocking** on programmatic downloads — the form could not be fetched via `curl` and required a browser-based approach. This is a technical barrier for automated access but does not affect a typical patient using a web browser.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and complete. The extracted text (4,415 characters) is well-structured and cleanly readable, with no OCR artifacts or garbled content.

**Fillable fields:** The form has **62 interactive form fields** (AcroForm/PDF 1.7), making it a genuinely fillable digital form. However, the metadata reports `fillable_field_names: []` — field names are empty, which may indicate unnamed or generically-named fields. This could hinder assistive technology (screen readers) that relies on field labels for accessibility.

**File size:** 205,357 bytes (~200 KB) for a single page with one embedded image (likely the OMC logo). This is reasonable.

**Digital-first design:** The form is clearly designed as a digital document, not a scan of a paper form. It uses 5 fonts, has structured layout sections, and supports interactive form filling. This is above-average for healthcare ROI forms.

## 4. CONTENT DESIGN

**Length:** Single page — appropriately concise for the scope of information it collects.

**Organization:** The form is well-organized into clearly labeled sections using a left-column label / right-column field layout:
- Patient demographics (name, DOB, address, phone, previous names)
- "Release Information From" and "Release Information To" with address/phone/fax fields
- Method of Disclosure
- Date range
- Health Information to be Released (checkbox grid)
- Reason for Release
- Authorization Expiration
- Revocation rights
- Authorization/Signature

**Clarity:** The form opens with `"IMPORTANT: This is a legal document; please complete each section to ensure we are able to process your request."` — direct and functional, though calling it "a legal document" may be intimidating to some patients. The authorization section includes dense but standard legal language about redisclosure, revocation rights, and voluntary nature.

**Record type granularity:** The checkbox grid offers useful specificity: Clinic Visit Notes, Laboratory/Pathology, Sleep Medicine, Billing Records, Emergency Department Notes, Immunization Record, Prenatal Records, Radiology Report, Operative Reports, Medication List, Allergies, Radiology Image, plus an "Other" free-text field. There are also higher-level options: "All Medical Records For: Clinic Visits / Hospital Visits (inpatient and outpatient)."

**Delivery options:** Four methods are offered — `Mail`, `Pick up (will call when ready)`, `Fax (Urgent Only-limitations may apply)`, and `Patient Portal (limitations may apply)`. The inclusion of Patient Portal is positive, though the vague "limitations may apply" qualifier is unexplained.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose release form** that does not distinguish between a patient requesting their own records and a third party requesting records with patient authorization. The "Release Information From" field defaults to OMC's address, and "Release Information To" is left blank for the patient/requester to fill in. A patient requesting their own records would need to put their own name/address in the "To" field, which is workable but not specifically guided.

**Purpose options:** The form offers checkboxes for reason: `Consult/Treatment`, `Insurance`, `Out of town move`, `Work Comp`, `Disability`, `Legal`, `Personal`, `Other`. The inclusion of "Personal" is helpful for patient-access requests.

**Sensitive information notice:** The form includes an important disclosure: `"I understand the records to be released may include information related to evaluation or treatment of behavioral or mental health, alcohol and drug abuse, and HIV/AIDS."` This is transparent and appropriate.

**Rights language:** The form explicitly references **CFR 164.524** (the HIPAA Right of Access provision): `"I understand I may inspect or be provided a copy of the information to be used or disclosed, as provided in CRF 164.524."` Note the typo — "CRF" instead of "CFR." The form also states: `"I understand the facility will not condition treatment, payment, enrollment, or eligibility for benefits on whether I sign this authorization."` This is a strong, patient-protective statement.

**Submission options:** The form can be submitted to "any OMC location," mailed to a specified address, or faxed to 507.287.2777. A phone number for questions is provided: 507.287.2752. No electronic/online submission option is mentioned beyond fax.

**EHI Export / bulk data:** No mention of electronic health information export, USCDI, or bulk data options.

## 6. COMPLIANCE

**Expiration:** `"This authorization is valid for one year from the date signed or a different time period provide by law or on the date/event specified here."` One year is a standard and reasonable default. Note the typo: "provide" should be "provided."

**Revocation:** Clearly described — must be in writing to the Health Information Department. Includes appropriate caveats about prior disclosures and insurance company rights.

**Barriers:** The form does **not** require notarization, does **not** mandate in-person submission, and does **not** disclose upfront fees. It accepts fax and mail submission. The requirement for an authorized representative to submit "documentation of legal authority" is standard and appropriate.

**Staff-only fields at top:** The form includes `"For OMC Staff Use Only: Request ID # / Patient MR# / Release Date / By"` at the top. These are clearly marked as staff-only and do not burden the patient.

**"File Only" option:** The method of disclosure includes `"File Only - No Records Needed at this time"` — this appears to be an administrative option allowing an authorization to be placed on file without triggering an immediate records release.

## 7. NOTABLE OBSERVATIONS

### ❌ ERRORS
- **Typo in legal citation:** The form references `"CRF 164.524"` — this should be **"CFR 164.524"** (Code of Federal Regulations). A small but notable error in a document that self-describes as a "legal document."
- **Typo in expiration clause:** `"a different time period provide by law"` — should be `"provided by law."`

### ⚠️ AMBIGUITIES
- **"Limitations may apply" on Patient Portal and Fax delivery:** The form states `"Fax (Urgent Only-limitations may apply)"` and `"Patient Portal (limitations may apply)"` without explaining what those limitations are. A patient choosing portal delivery has no way to know whether their request will be honored or restricted.
- **"File Only - No Records Needed at this time":** This option in the Method of Disclosure is not explained and may confuse patients who don't understand its administrative purpose.
- **Inconsistent address:** The "Release Information From" section lists OMC at "210 Ninth Street SE," but form-2.pdf's submission instructions give a different address: "1650 Fourth Street SE." Patients may be confused about where to send forms.

### ✨ BRIGHT SPOTS
- **Multilingual availability:** Forms are offered in English, Spanish, and Somali — the latter reflecting Rochester, MN's significant Somali community. This is a thoughtful localization effort.
- **62 fillable fields:** A genuinely interactive digital form, not a print-and-handwrite experience. This is uncommon and commendable.
- **Patient Portal as a delivery option:** Including portal delivery alongside mail, fax, and pick-up shows awareness of digital-first patient preferences.
- **Explicit CFR 164.524 reference:** Despite the typo, explicitly citing the patient's right of access regulation is unusual and empowering for patients.
- **Non-conditioning statement:** The explicit statement that OMC "will not condition treatment, payment, enrollment, or eligibility for benefits on whether I sign this authorization" is a strong patient-rights affirmation.
