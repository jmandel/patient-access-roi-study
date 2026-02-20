# Evaluation: Advocate Good Samaritan Hospital — form-2.pdf

**Document**: form-2.pdf (71,737 bytes, 1 page)
**Organization**: Advocate Good Samaritan Hospital (Downers Grove, IL)
**Source URL**: https://www.advocatehealth.com/-/media/Project/Health-System-Enterprise/AdvocateHealthCom/amg/documents/98-5050-en.pdf
**Form ID on document**: 98-5050-EN

---

## 1. DOCUMENT IDENTIFICATION

This is an **"Authorization for Release of Patient Health Information"** form created for **Advocate Medical Group (AMG)**, a physician group practice within the Advocate Health system. It is a general third-party release authorization — the patient designates a FROM and a TO for health information transfer. The form number "98-5050-EN" and the URL path (`/amg/documents/`) confirm this is an older, AMG-specific version.

In context of the seven documents retrieved for this organization, form-2 is one of three distinct ROI-type forms. The system's current primary forms are form-4 ("Patient Request for Health Information," the patient-access form) and form-5 ("Authorization to Release Protected Health Information," the current third-party release form). Form-2 appears to be a legacy predecessor to form-5, specific to the AMG practice group before the system consolidated forms. The other documents include two EAP-specific release forms (form-1, form-3), a Spanish-language authorization (form-6), and an instructions document (form-7).

## 2. FINDABILITY

This form was found via web searches for Advocate Health authorization and release forms. It resides at a direct PDF URL under the `/amg/documents/` path, suggesting it is an older artifact that has not been removed from the web server. It is **not** linked from the current medical records page at advocatehealth.com/contact-us/medical-records, which features the newer form-4 and form-5 instead. A patient navigating the website organically would likely never encounter this form — it is discoverable only via direct web search or URL knowledge. The filename ("98-5050-en.pdf") is a form number, not a human-readable descriptor.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The full text (3,985 characters) is extractable via pdftotext, indicating this is a digitally composed document, not a scan.

**Fillable fields**: Zero. Despite having numerous blank lines indicated by underscores (e.g., `Patient Name________________________________________________________`), none are interactive PDF form fields. The document is designed as a print-and-handwrite form.

**File size**: 71,737 bytes for a single page with no embedded images and 8 fonts — reasonable and lightweight.

**Digital-first design**: No. The form uses long underscore runs for fill-in blanks, a hallmark of print-oriented design. The checkbox characters render as `\x1f` control characters in the text extraction (e.g., `\x1fFace Sheet`, `\x1fHistory & Physical`), suggesting either custom font-based checkboxes or encoding issues. The document was designed for paper workflows with a white/yellow carbonless copy distribution system, as noted at the bottom: "White - Original in the Medical Record / Yellow - Copy to the Patient."

## 4. CONTENT DESIGN

**Length**: One page — concise for an authorization form.

**Structure**: The form follows a logical flow: patient identification → FROM/TO addresses → purpose → disclosure content checkboxes → date range → sensitive information opt-out → authorization terms → signatures → redisclosure notice. However, the single-page constraint means everything is compressed.

**Record type checkboxes**: The form provides 12 record-type checkboxes across categories: Face Sheet, History & Physical, Laboratory Report, Operative Report, Itemized Bill, Discharge Summary, Progress/Physician Notes, X-ray/Radiology Report, Pathology Report, Emergency Report, Nurses Notes, EKG/EMG/EEG Report, Consultation Report, plus an "Other" option.

**Sensitive information handling**: Uses an unusual opt-out approach. The form states: "I must check one or more of the following types of health information that I do not want released to the above named Recipient." The three opt-out categories are: (1) substance abuse diagnosis/treatment, (2) HIV/AIDS testing and treatment, and (3) psychiatric/psychological records. If none are checked, all sensitive information may be included. This is an unusual framing — patients must affirmatively exclude sensitive categories rather than affirmatively include them.

**Language**: Moderately dense. The authorization terms paragraph is a single block of small-print text covering revocation rights, expiration, right to inspect, and non-conditioning of treatment. For example: "I also understand that this Authorization is subject to revocation/withdrawal by me at any time in writing to the medical record contact person at this site of care except to the extent that action has already been taken to release this information."

**Readability**: The form appears to use standard fonts at a readable size for the header and checkboxes, but the authorization terms paragraph at the bottom is noticeably smaller and denser.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **third-party release form**, not a patient access form. The FROM/TO structure assumes the patient is directing information transfer between two entities. There is no option for "send records to me" — a patient wanting their own records would need to fill in their own name and address in the TO field, which is not intuitive. The system's form-4 ("Patient Request for Health Information") is the proper patient-access form.

**Scope options**: The form provides reasonable record-type granularity with 12+ checkbox categories plus an "Other" field. A date range field ("Records for the period from ___ to ___") allows temporal scoping.

**Format/delivery options**: None. There is no mention of electronic delivery, email, CD, patient portal, or any delivery method. The paper-carbon copy model ("White - Original in the Medical Record / Yellow - Copy to the Patient") is the only implied delivery mechanism.

**Right of Access language**: The form does not reference HIPAA § 164.524 or the patient's right of access specifically. It does mention the right to inspect records and that treatment will not be conditioned on signing.

**EHI Export / portal**: No mention of electronic health information export, patient portals, or online access. The newer form-4 in this organization's portfolio prominently mentions the LiveWell patient portal; this older AMG form predates that capability.

## 6. COMPLIANCE

**Expiration**: "This Authorization shall remain valid unless revoked but will expire in 1 year after signing." A one-year default expiration is standard and reasonable.

**Revocation**: The form states revocation is available "at any time in writing to the medical record contact person at this site of care." This is appropriate.

**Non-conditioning**: States clearly that "The above named person/institution will not refuse to treat me based on whether I agree to allow my health information to be used and disclosed to others."

**Redisclosure notice**: Includes a redisclosure warning: "Advocate Health Care cannot guarantee that the Recipient receiving the requested health information will not redisclose any or all of it to others." Also notes that redisclosure of drug/alcohol, HIV, and mental health information is prohibited by law.

**Witness requirement**: The form includes a "Witness" signature line. While not explicitly stated as mandatory, the presence of this field may lead patients or staff to believe a witness is required, which is not a HIPAA requirement for patient access requests.

**Sensitive information opt-out framing**: The opt-out approach for sensitive information ("check what you do NOT want released") reverses the typical consent model and could lead to inadvertent disclosure if a patient doesn't carefully read the instructions.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature line**: The form includes a "Witness" line at the bottom with no indication that it is optional. Under HIPAA, a witness is not required for a patient authorization. The presence of this line could cause delays or create a barrier if patients cannot locate a witness.

### ⚠️ AMBIGUITIES

- **Opt-out model for sensitive information**: The form instructs patients to check categories they do **not** want released, stating: "I must check one or more of the following types of health information that I do not want released." This is confusing — the phrase "I must check one or more" suggests the patient is required to exclude at least one category, but the next sentence clarifies that if none are checked, all information may be released. The double-negative logic (check to NOT release) reverses the intuitive pattern of "check to include" used elsewhere on the same form, creating a high risk of misunderstanding.

- **"Operative Report Itemized Bill" text extraction**: In the checkbox list, "Operative Report" and "Itemized Bill" appear to run together as `\u001fOperative Report Itemized Bill`, suggesting they may be on the same line in the PDF or that a line break was lost. It is unclear whether "Itemized Bill" is a separate checkbox or a continuation of "Operative Report."

### ❌ ERRORS

- **Checkbox rendering**: All checkbox characters render as `\x1f` (Unit Separator control character) in extracted text, indicating the checkboxes are not standard Unicode characters. This means the form cannot be meaningfully processed by screen readers or text extraction tools — the checkboxes are invisible to assistive technology.

- **Outdated branding**: The form references "Advocate Health Care" in the redisclosure notice, which is the legacy name prior to the Advocate Aurora Health and subsequent Advocate Health rebrand. Combined with the AMG-specific URL path and form number, this form appears to be a legacy artifact that has not been updated.

### ✨ BRIGHT SPOTS

- **Concise single-page format**: Despite covering all required authorization elements (patient ID, FROM/TO, purpose, record types, date range, sensitive info, revocation rights, expiration, signature), the form fits on one page. This reduces burden compared to multi-page authorization forms.
