# Evaluation: Springhill Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a single-page **"REQUEST FOR RELEASE OF HEALTH INFORMATION"** authorization form — a general-purpose ROI form for releasing patient health information to a named recipient. The form header lists the address "3719 Dauphin Street, P.O. Box 8709, Mobile, AL 36608" and phone number 251-344-9630, but notably references the legacy name **"Springhill Memorial Hospital"** rather than the organization's current name, Springhill Medical Center.

The other document found for this organization (form-2.pdf) is an ONC-branded patient rights infographic ("GET IT. CHECK IT. USE IT.") from HealthIT.gov — a general educational resource, not an organization-specific ROI form. Thus, form-1.pdf is the **only actual authorization form** available from this organization's website. The notes also mention a **Zoho-based online ROI request portal** linked from the medical records page, which represents an alternative electronic submission pathway but was not evaluated as a downloadable form.

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, a direct web search for `"Springhill Medical Center" "medical records" "release form" filetype:pdf` returned the PDF, and a site-specific search also surfaced it. The organization's Medical Records page (https://springhillmedicalcenter.com/patients-visitors/medical-records) links to both this form and the Zoho-based portal.

However, the **URL/filename is problematic**: `Release-of-information-2011-Version-1.pdf` — embedding the year "2011" in the filename and housed under `/sites/default/files/2020-10/`, suggesting it was uploaded or migrated in October 2020 but the form itself dates from 2011. This creates uncertainty about currency. The retrieval difficulty was rated "easy."

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (3,798 characters). This is not an image-only scan.
- **Fillable fields**: **Zero** fillable/interactive form fields. The form uses underscore lines (`___________`) for fill-in areas and bracket-style checkboxes (`[ ]`). This is a flat, print-oriented PDF.
- **File size**: 74,165 bytes (72 KB) for a single page — reasonable.
- **Page count**: 1 page.
- **Font count**: 8 fonts used.
- **Embedded images**: 1 (likely a logo or header graphic).
- **Digital-first design**: No. This form was clearly designed for printing and handwriting. There are no interactive elements, no clickable checkboxes, and no structured form fields. A patient must print, fill by hand, and then fax/mail/deliver the form.

## 4. CONTENT DESIGN

**Length**: A single page, which is appropriately concise for an authorization form.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient demographics (name, address, city/state/zip, DOB, phone, SSN)
2. Inpatient/Outpatient designation
3. Authorization statement with hospital/facility and recipient fields
4. Record type checkboxes (12 categories)
5. Date range
6. Purpose of disclosure
7. Delivery method options
8. Consent/authorization legal language
9. Signature block with representative relationship options

**Clarity**: The language is a mix of functional and legal. The authorization statement is reasonably clear: *"I hereby authorize ___________ to release the following information to ___________"*. The legal disclosures at the bottom are dense but standard: *"This consent and authorization may include, but is not limited to, the release of medical, alcohol and/or drug abuse treatment, psychological, psychiatric, sexually transmitted diseases, and HIV/AIDS information."*

**Layout**: Fitting all content onto one page makes it dense. The record-type checkboxes are split into two columns (left column: Abstract, Entire Record, H&P, Discharge Summary, Operative Report, Other; right column: ER Record, Pathology Reports, Consultations, Physician's Orders, Progress Notes, Nurses Notes, plus additional items Lab Reports, X-ray Reports, X-ray Films/CD's, Itemized Statement, UB-92). The delivery method section is the most text-heavy, particularly the patient portal option which includes a lengthy disclaimer about password responsibility.

**Readability**: Text appears to use a readable font size given that 3,798 characters fit legibly on one page with 8 fonts. The form is functional but visually dated.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose release form**, not a patient-access-specific form. The authorization structure — *"I hereby authorize ___ to release the following information to ___"* — is designed for releasing records from one entity to another. A patient requesting their own records would need to fill in the hospital name as the source and their own name as the recipient, which is unintuitive. There is no separate pathway or language acknowledging HIPAA's Right of Access (45 CFR § 164.524).

**Scope options**: Good granularity. The form offers **12 record-type checkboxes** (Abstract, Entire Record, H&P, Discharge Summary, Operative Report, ER Record, Pathology Reports, Consultations, Physician's Orders, Progress Notes, Nurses Notes, plus an "Other" field) and additional options for Lab Reports, X-ray Reports, X-ray Films/CD's, Itemized Statement, and UB-92. A date range field is provided for *"Dates of Hospitalization or visit."*

**Delivery methods**: Notably strong for a 2011-era form. Five options are listed:
1. **Pick-up** (in-person)
2. **Mail** (with full address fields)
3. **Fax** (with fax number field)
4. **Patient Portal** (with email for account setup and a disclaimer about password responsibility)
5. **Email** (with email address field)

The patient portal option includes a notable disclaimer: *"If your password is shared with others or used inappropriately once your account is setup, Springhill is not responsible for any resulting disclosures."*

**Right of Access language**: Not present. No mention of HIPAA § 164.524, patient rights, or Right of Access.

**EHI Export**: No mention of electronic health information export or bulk data access.

**SSN collection**: The form requests the patient's **Social Security Number**, which is not required for a records request and raises privacy concerns.

## 6. COMPLIANCE

**Authorization expiration**: The form states: *"This authorization will expire (i) after 6 months, (ii) after the disclosure is made, or (iii) the date specified here: __________, to accomplish the purpose of the disclosure stated above."* A 6-month default is reasonable.

**Revocation**: The form acknowledges revocability: *"I understand that this consent is revocable, except to the extent that action has already been taken in reliance thereon. Request for revocation of this authorization must be in writing and presented to the Medical Records Department."*

**Conditioning**: The form states: *"Springhill Memorial Hospital may not condition treatment or payment on whether you sign this authorization."* This is a correct statement of HIPAA requirements.

**Redisclosure notice**: The form warns: *"Information used or disclosed pursuant to this authorization may be subject to redisclosure by the recipient and is no longer protected under Title 45, CFR."* This is a valid but generalized reference to 45 CFR — it omits the specific section number.

**Sensitive information bundling**: The consent language includes a broad sweep: *"This consent and authorization may include, but is not limited to, the release of medical, alcohol and/or drug abuse treatment, psychological, psychiatric, sexually transmitted diseases, and HIV/AIDS information."* This bundles sensitive categories (substance abuse, mental health, STDs, HIV/AIDS) into the general authorization without separate opt-in, though some state laws (and 42 CFR Part 2 for substance abuse) may require separate consent for these categories.

**Witness requirement**: The form includes a *"Signature of Witness"* line. While not explicitly labeled as mandatory, the presence of a designated witness signature field implies it may be expected, which is not a HIPAA requirement for patient-access requests.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Social Security Number field**: The form requests SSN, which is unnecessary for a medical records request and creates an outsized privacy risk for a document that may be faxed, mailed, or emailed. Patients should not need to disclose their SSN to exercise their right of access.
- **Witness signature line**: The inclusion of a "Signature of Witness" field suggests or implies a witness is needed, adding a barrier that has no basis in HIPAA for patient-initiated requests.
- **Sensitive information bundling**: The blanket inclusion of substance abuse, psychiatric, STD, and HIV/AIDS information without separate consent checkboxes may conflict with 42 CFR Part 2 (substance abuse records) and various state-specific protections for these categories.

### ⚠️ AMBIGUITIES

- **Patient self-request unclear**: The form's structure (*"I hereby authorize ___ to release the following information to ___"*) does not clearly accommodate a patient requesting their own records. It reads as a third-party release authorization, leaving patients uncertain how to fill it out for personal access.
- **"For Internal Use Only" fields**: The top section includes "Med Rec Number," "Account Number," and "Discharge Date" labeled "For Internal Use Only." While these are clearly for staff, their prominent placement at the top could confuse patients about what they need to provide.

### ❌ ERRORS

- **Outdated organization name**: The form references **"Springhill Memorial Hospital"** throughout, but the organization now operates as **Springhill Medical Center**. This is a stale artifact that may confuse patients or raise questions about validity.
- **Form vintage**: The filename indicates this form dates from **2011** — making it approximately 15 years old. The legal landscape (including 21st Century Cures Act information blocking rules effective 2021) has changed significantly since this form was created.
- **Incomplete CFR citation**: The redisclosure warning references "Title 45, CFR" without specifying the part or section number (should reference 45 CFR § 164.508(c)(2)(iii) or similar).
- **"UB-92" reference**: The form lists "UB-92" as a selectable record type, but UB-92 was replaced by UB-04 (CMS-1450) in **2007** — four years before this form was even created.

### ✨ BRIGHT SPOTS

- **Multiple delivery methods**: For a 2011-era form, offering five delivery options (pick-up, mail, fax, patient portal, and email) is notably forward-looking. The patient portal and email options were ahead of their time.
- **Single-page design**: Keeping the entire authorization on one page minimizes burden and is patient-friendly.
- **Clear non-conditioning statement**: The explicit statement that treatment/payment cannot be conditioned on signing the authorization is a helpful patient rights disclosure.
