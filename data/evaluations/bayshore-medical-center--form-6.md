# Bayshore Medical Center — Form 6 Evaluation

## 1. DOCUMENT IDENTIFICATION

Form 6 is the **primary English-language hospital-level ROI form** for the entire Hackensack Meridian Health (HMH) system, titled "AUTHORIZATION TO USE OR DISCLOSE PROTECTED HEALTH INFORMATION" (Form ID: CMR-003, dated 12-20-23). It is a 2-page PDF covering all 11 HMH hospital campuses, with Bayshore Medical Center listed as one of the selectable locations along with specific contact information (phone: 732-739-5933/5985, fax: 732-888-7332).

This is the most comprehensive and relevant form among the six retrieved for Bayshore. The other forms include: a simpler 1-page Medical Group outpatient release (form-1, dated March 2018), an image-only scanned form from sister facility Pascack Valley (form-2), the Spanish translation of this same CMR-003 form (form-3, CMR-003S), a records amendment form (form-4), and a patient-specific request form from Pascack Valley (form-5). Form 6 and its Spanish counterpart (form-3) are the standardized system-wide instruments that Bayshore Medical Center patients would use for hospital-level record releases.

## 2. FINDABILITY

This form was **difficult to find**. Per the retrieval notes, the HMH system-wide Medical Records page (`/en/patients-and-visitors/medical-records`) links to the Spanish version (CMR-003S) as a PDF download but does **not** link to this English version. English-speaking patients are instead directed to a Swellbox/Datavant online wizard for record requests. The English CMR-003 PDF was ultimately found via web search under a different URL path (`/medical-group/patient-forms/general-english/`) rather than the expected patients-visitors path where the Spanish version resides.

The retrieval required multiple search strategies: direct web searches, site-specific searches, navigation through the Bayshore Medical Center sub-page, and URL pattern guessing. The form was discovered through a web search that found it hosted under the Medical Group patient forms directory — an inconsistent location given that this is a hospital-level form, not a Medical Group form.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and fully extractable — 5,950 characters across 2 pages. The full text renders cleanly via `pdftotext` with no OCR artifacts or garbled content.

**Fillable fields**: Zero (0) interactive form fields. Despite being a digitally-created PDF (not a scan), the form has no fillable fields. Patients must print and hand-write all information. This contrasts with form-4 (the amendment form from the same system), which has 54 fillable fields — demonstrating that HMH has the capability to create fillable PDFs but did not do so for this ROI form.

**File format**: 67 KB, PDF with 5 fonts and 0 embedded images. The small file size and clean text layer indicate this is a born-digital document designed in a layout application, not a scan. The lack of any images (not even a logo) keeps the file extremely lightweight.

**Digital-first design**: Mixed. The document is clearly created digitally (not scanned), but its design is print-oriented — it includes a "PATIENT LABEL" placeholder (for physical sticker labels used in hospital settings), barcode placeholder (`*RI0000*`), and handwritten-signature lines. There is no mention of electronic submission channels (no email address, no portal link, no fax number for submitting the completed form itself — though fax numbers are listed for HIM department contact).

## 4. CONTENT DESIGN

**Length**: 2 pages — appropriate for the scope. Page 1 covers patient information, recipient, record types, purpose, sensitive-record consent, minor consent, delivery format, and signatures. Page 2 covers patient rights/understanding statements, a second signature block, fee disclosure, redisclosure prohibition, and a full contact directory for all 11 HMH campuses.

**Clarity**: The language is moderately accessible. Core instructions like "I authorize Hackensack Meridian Health to release information to:" are straightforward. However, legal sections use dense phrasing: "I understand that once the information has been released according to the terms of this authorization, the information cannot be recalled." The minor consent section is particularly complex, with nested conditions: "1) conditions relating to reproductive health care including, but not limited to, birth control and pregnancy-related services and sexually transmitted diseases, including HIV/AIDS, (age 13 and older)."

**Organization**: Logically structured with a clear top-to-bottom flow: patient info → recipient → location → records requested → purpose → sensitive records → minor consent → signature → format → (page 2) rights → signature → fees → contact directory. The contact directory table on page 2 is well-formatted with columns for campus, address, phone, and fax.

**Visual hierarchy**: The form uses checkbox lists (rendered as "n" characters in text extraction) for multi-select fields, which is appropriate. Section headers are present but could be more visually distinct. The "CONSENT OF MINOR" and "EHI Export" sections are set apart with explanatory text.

**Font size**: Appears readable based on the 5-font configuration and content density across 2 pages. The amount of text (5,950 characters) spread across 2 pages suggests reasonable sizing, though the contact directory table on page 2 is likely in smaller type to fit all 11 campuses.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is framed as a general authorization form — "I authorize Hackensack Meridian Health to release information to: Organization/Recipient:" — which is third-party-release language. The "Purpose of Release" options include "Personal use" as one of five choices, but the form architecture (requiring a named recipient organization/person) suggests it is designed primarily for disclosures to third parties rather than direct patient access. There is no separate patient-access pathway on this form.

**Scope options**: Good. Patients can specify date ranges ("from: ___ to: ___") and select from 11 record type checkboxes: Clinic Notes, Therapy Service Reports, Operative/Procedure Notes, Lab/Pathology Reports, Discharge Summaries, Emergency Dept Records, Radiology Images, Radiology Reports, Drug/Alcohol Records, Abstract, and Other. This granularity gives patients meaningful control over what is released.

**Format options**: Strong. Four delivery format options are offered: Paper, Electronic Copy (encrypted USB, CD), Fax, and Secured email. This covers a good range of modalities.

**EHI Export**: The form includes a notable EHI Export option: "EHI Export - is a machine-readable format of your medical records which can be uploaded to another Electric Health Record (EHR). If you would like to request a copy of your records in a machine-readable format, please indicate by adding your initials here___." This is an unusually forward-looking option that directly addresses interoperability.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or use the phrase "right of access." It does state: "Authorizing the disclosure of this health information is voluntary. I do not need to sign this form in order to assure treatment or payment" — which tracks HIPAA requirements but without citing the regulation.

## 6. COMPLIANCE

**Fees**: "There may be a fee for copying the medical records. Please ask the Health Information Management personnel for information about the fee schedule." This is vague — it neither discloses the fee schedule nor states that fees are limited to HIPAA's reasonable cost-based standard. The passive phrasing could discourage patients from requesting records.

**Expiration**: "This authorization will expire one year from the date signed below, unless another date or event is entered here ___." A 1-year default expiration is standard and reasonable.

**Voluntary statement**: Appropriately states that signing is voluntary and not required for treatment or payment.

**Revocation rights**: Patients can "cancel this authorization at any time by informing in writing the HMH Health Information Management Department." This is standard.

**Sensitive records**: The form handles 42 CFR Part 2 (substance abuse) records appropriately, requiring specific consent checkboxes and including the federally required redisclosure prohibition notice. New Jersey state requirements for minor consent (age 13+) for reproductive health, STDs/HIV, substance abuse, and mental health are addressed.

**No unreasonable barriers**: No notarization requirement, no in-person-only submission requirement, no witness requirement. The form does not restrict submission channels, though it also does not actively provide submission instructions (no email, fax, or mailing address for submitting the completed form — only HIM contact numbers for questions).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions on the ROI form itself**: While the contact directory lists phone and fax numbers for each campus HIM department, the form does not explicitly state how to submit the completed authorization. Compare with form-4 (amendment form) which clearly states "Please complete the form below and return to PatientAmendment@hmhn.org" and provides a mailing address. A patient completing form-6 must infer that they should call the phone number or send to the fax number listed in the contact directory.

### ⚠️ AMBIGUITIES

- **Third-party framing for patient access**: The form's core instruction — "I authorize Hackensack Meridian Health to release information to: Organization/Recipient:" — requires naming a recipient, which is confusing for patients who simply want their own records. A patient requesting records for "Personal use" must fill in their own name as the "Organization/Recipient," which is awkward and may not be obvious.
- **Undisclosed fee schedule**: The statement "There may be a fee" with a direction to "ask... for information about the fee schedule" leaves patients uncertain about costs before they commit to a request. HIPAA limits fees for patient access requests to reasonable cost-based amounts, but this form does not clarify that distinction.

### ❌ ERRORS

- **Typo in EHI Export description**: "Electric Health Record" should be "Electronic Health Record." The full text reads: "a machine-readable format of your medical records which can be uploaded to another Electric Health Record (EHR)."
- **Duplicate entry in location list**: "Carrier Clinic" appears twice in the Location of Services checkbox list.

### ✨ BRIGHT SPOTS

- **EHI Export option**: The inclusion of a machine-readable format option with an explanation that it "can be uploaded to another... (EHR)" is exceptional. Very few ROI forms acknowledge interoperability or offer structured data exports. This directly supports the 21st Century Cures Act's information blocking provisions.
- **Comprehensive contact directory**: Page 2 provides a complete, well-organized table of all 11 HMH hospital HIM departments with addresses, phone numbers, and fax numbers — making it easy for a patient at any campus to know exactly whom to contact.
- **Spanish companion form**: The existence of a parallel Spanish version (CMR-003S, form-3) with identical structure demonstrates commitment to language access, though the ironic discoverability gap (Spanish PDF is linked from the Medical Records page; English PDF is not) undermines this.
- **Sensitive-record granularity**: Rather than a blanket "all records" consent, the form breaks out five categories of sensitive information (reproductive health, STDs, HIV/AIDS, mental health, alcohol/drug abuse) requiring individual specific consent — appropriately protecting patient privacy while enabling targeted release.
