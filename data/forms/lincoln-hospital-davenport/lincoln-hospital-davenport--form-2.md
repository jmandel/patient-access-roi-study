# Evaluation: Lincoln Hospital (Davenport, WA) — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "AUTHORIZATION FOR RELEASE OF HEALTH CARE INFORMATION AND RECORDS" published by Lincoln County Public Hospital District #3. It is the **hospital** version of the ROI form; the organization also publishes a separate clinics version (form-1.pdf). The document header reads "HIPAA FORM 3 & 9 (2007)" and was "Revised May 2019."

Page 1 is the authorization form itself — patient fields, record-type checkboxes, purpose selection, and signature block. Page 2 is an informational addendum that explains the form's purpose, the patient's right to inspect and obtain copies, response timeframes, and a note about requesting laboratory results. Notably, page 2 describes both an **authorization use case** (disclosing PHI to third parties) and an **access request** use case (patient inspecting/obtaining their own records), making this a dual-purpose document.

## 2. FINDABILITY

According to retrieval notes, the form was found via web search and confirmed on the hospital's Health Records page at `https://www.lincolnhospital.org/patients-and-visitors/health-records/`. It is reachable in **2 clicks** from the homepage (Patients and Visitors → Health Records). The form is hosted on Cloudinary CDN (`res.cloudinary.com/dpmykpsih/...`) and also accessible via a direct lincolnhospital.org media URL. The filename `release-of-info-form.pdf` is reasonably descriptive. The Health Records page itself returned a 403 to automated fetch tools (likely bot-blocking), which could hinder patients using assistive tools or non-standard browsers.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (7,364 characters), making the document screen-reader accessible and searchable.
- **Fillable fields**: Zero. The PDF is flat (no interactive form fields), requiring patients to print, hand-fill, and return by mail, fax, or in person. Created with "Acrobat PDFMaker 19 for Word," so the source was a Word document that could have easily been made fillable.
- **File size**: 284,491 bytes (284 KB) for 2 pages with no embedded images — reasonable.
- **Font count**: 11 fonts used, which is high for a 2-page form and suggests inconsistent formatting.
- **Digital-first design**: No. While it has a text layer (unlike form-1.pdf), it is designed as a print-and-fill document. Checkbox characters (□) are Unicode text rather than interactive fields.

## 4. CONTENT DESIGN

**Length**: 2 pages is appropriate — page 1 for the authorization, page 2 for explanatory information.

**Organization**: Page 1 is logically sectioned: patient identification → recipient → record types → purpose → revocation → re-disclosure → no-conditions statement → time frame → minor consent → signature. Sections are labeled with bold headers ("TYPES OF INFORMATION TO BE RELEASED," "PURPOSE FOR RELEASE," "REVOCATION OF RELEASE," etc.), providing clear visual hierarchy.

**Record type options**: The form offers 10 checkbox categories: Discharge Summary, EKG, Emergency Room Record, History & Physical, Radiology, Pathology Report, Progress Notes, Laboratory Results, Operative/Procedure Notes, and an "Other" free-text option. This gives reasonable granularity.

**Clarity**: The language is a mix of plain English and legal phrasing. The revocation section is clear: "I understand that I may change my mind and revoke this release at any time." The re-disclosure warning is straightforward. However, the "TYPES OF INFORMATION" preamble is dense: "I understand that the Provider needs my written authorization to release any health care information about testing, diagnosis, procedures and/or treatment for alcohol and/or chemical dependency, reproductive health, sexually transmitted diseases (including HIV/AIDS) or psychiatric disorders/mental illness." This is a necessary legal statement but is presented as a single long sentence.

**Layout**: The form uses a standard administrative layout. The "OFFICE USE" section appears near the top of page 1 alongside patient fields, which could confuse patients about what they need to fill out versus what staff will complete.

## 5. PATIENT-CENTEREDNESS

**Dual purpose — but confusing**: Page 2 contains an "ACCESS REQUEST" section describing the patient's right to inspect and obtain copies under HIPAA. This is a valuable inclusion, but it creates ambiguity: page 1 is structured as a third-party release authorization (send records *to* a named recipient), while page 2 describes a patient access request. There is no clear instruction on how a patient requesting their *own* records should fill out page 1 — do they list themselves as the recipient? The form doesn't say.

**Purpose options**: Include "At the request of the Patient," "For coordination of care," "Legal Review/Proceedings," "Discuss Health Care & Billing Info with Family or Friend(s)," and "Other." The "At the request of the Patient" option is useful for patient access but doesn't clarify the distinction from the access request described on page 2.

**Format/delivery options**: The "OFFICE USE" box lists delivery methods ("Mailed, Faxed, Given to Patient, Other") but these are staff-only fields — the patient has no way to indicate a delivery preference. No electronic delivery option is mentioned.

**Fee disclosure**: Page 2 states "the fees are $______ per page to copy these records" with the actual amount left blank. This is unhelpful — a patient cannot anticipate costs.

**Response time**: Page 2 correctly states the 30-day (60-day for off-site) response requirement and mentions the possibility of a 30-day extension. This is accurate to HIPAA requirements.

**Minor consent**: The form includes a detailed section on minor consent, citing specific age thresholds (14+ for drug/alcohol/sexuality, 13+ for mental health), which reflects Washington State law.

**No mention** of electronic health information export, bulk data, or patient portal alternatives.

## 6. COMPLIANCE

**Expiration**: "This release will remain valid for ninety (90) days from the date of my signature below" unless otherwise specified or revoked. A 90-day default is reasonable and not unduly short. The form also offers a "No Expiration Date" checkbox option under purpose.

**No-conditions statement**: The form explicitly states: "This authorization is voluntary. We will not condition your receipt of treatment on giving this authorization." This is a proper HIPAA compliance statement.

**Revocation**: Revocation is effective "five (5) business days receipt of written notice," which is reasonable.

**Fees**: The blank fee field ("$______ per page") on page 2 is concerning. Under HIPAA's Right of Access, fees for patient access requests must be limited to reasonable, cost-based fees. A per-page fee structure without a stated amount lacks transparency and could exceed HIPAA limits depending on what amount is filled in.

**Psychotherapy notes**: Correctly excluded from the general authorization: "the Provider may release all diagnostic, treatment information and records, except psychotherapy notes as defined by the Health Insurance Portability and Accountability Act of 1996, which requires a separate authorization."

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Dual-purpose confusion**: Page 1 is a third-party release authorization requiring a named recipient, while page 2 describes a patient access request under HIPAA § 164.524. There is no clear guidance on which workflow a patient requesting their own records should follow, or how to reconcile the two uses on a single form.
- **Blank fee field**: Page 2 states "the fees are $______ per page" without filling in the amount. A patient reading this form online cannot determine what they will be charged. This also creates a compliance risk if staff fill in an amount exceeding HIPAA's cost-based limits.
- **"OFFICE USE" placement**: The "Records Released by (□ Mailed, □Faxed, □Given to Patient, □Other)" box appears near the top of page 1, adjacent to patient-facing fields, with no clear label indicating it is not for patient use.

### ❌ ERRORS

- **Grammatical error in TIME FRAME section**: "Unless otherwise specified I revoke it, this release will remain valid for ninety (90) days..." — the phrase "I revoke it" appears to be a fragment; it should likely read "Unless otherwise specified **or** I revoke it."
- **Stale header**: "HIPAA FORM 3 & 9 (2007)" suggests the form template dates to 2007, though it was "Revised May 2019." The 2007 reference may confuse patients or suggest outdated content.

### ✨ BRIGHT SPOTS

- **Explicit no-conditions statement**: "This authorization is voluntary. We will not condition your receipt of treatment on giving this authorization" — a clear, patient-friendly articulation of HIPAA protections.
- **Minor consent detail**: The form provides specific age thresholds for minor consent aligned with Washington State law, which is more helpful than generic "minor consent" language.
- **Access request explanation on page 2**: Despite the dual-purpose confusion, including language about the patient's right to inspect and obtain copies is more than many small facilities provide.
