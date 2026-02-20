# Mosaic Life Care at St. Joseph — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page general-purpose **"Authorization for Release of Protected Health Information / Access Request to Another Agency"** (Form # 3014, dated 03.28.19). It is designed for patients to authorize the release of their records from a Mosaic Life Care facility to a third party — not specifically for a patient requesting their own records under HIPAA's Right of Access.

The organization has a second version of the same form (form-2.pdf, also Form # 3014 but dated 11/24/15), found on a different page of the website. Form-2 is an older, single-page version with fewer embedded images (91 KB vs. 602 KB), fewer fonts (4 vs. 20), and still uses the legacy name "Heartland Regional Medical Center" in its legal disclaimer. Form-1 is the newer version with facility-specific checkboxes (Albany, Maryville, Saint Joseph, LTACH) and a multilingual notice section. A third version in .docx format with entirely old "Heartland Health" branding was also found via search. The existence of three overlapping versions of the same form (same form number) linked from different pages creates patient confusion about which is current.

## 2. FINDABILITY

According to retrieval notes, the form was found within **2–3 clicks** from the homepage: Health Information Management page → "Authorizations and Forms" section → direct PDF link. The source URL (`/contentassets/.../authorization-for-release-of-phi.pdf`) is hosted on the organization's domain but uses a CMS-generated GUID path rather than a human-readable URL. A site-specific search (`site:mymlc.com authorization release medical records`) also surfaced the HIM page. The HIM page itself provides useful context with links to other related resources (Restriction Request web form, Medical Records Amendment Request web form).

However, the organization also links a different/older version of the same form from its Privacy Policy > HIPAA Authorization Form page, creating a fragmented experience. A patient following one navigation path gets form-1; another path yields form-2. Neither page explicitly warns that another version exists or clarifies which is current.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present — full text is extractable via `pdftotext`. The document is not an image-only scan.

**Fillable fields**: Zero (0). Despite having a text layer, the PDF has no interactive form fields. All blanks are rendered as underscores (`____`), requiring the patient to print and handwrite, or use a PDF annotation tool. This is a significant barrier for digital use.

**File size**: 601,526 bytes (602 KB) for 2 pages. This is relatively large for a simple form; 9 embedded images and 20 fonts contribute to the bloat. By comparison, form-2 covers similar content in 91 KB with 4 fonts.

**Digital-first design**: No. The form is clearly designed as a print document that happens to be distributed as a PDF. The underscore blanks, checkbox-style lists rendered as plain text, and lack of interactive fields all point to a paper-first workflow. The form instructs patients to submit via mail, fax, or email (ROI@myMLC.com), but the document itself offers no way to fill it digitally.

## 4. CONTENT DESIGN

**Length**: 2 pages. Page 1 contains the form proper; page 2 is roughly half signature/legal text and half multilingual language assistance notices (15 languages). The length is reasonable for the content covered.

**Clarity**: The form uses a mix of plain and legal language. The main sections (patient information, release-from, release-to, record types, purpose) are straightforward. However, the legal disclaimers are dense: *"I understand that the information disclosed by this authorization could be re-disclosed by the person receiving it and is no longer protected by federal or state legal privacy requirements."* The deceased-patient section on page 1 is particularly complex, citing Missouri statute Section 537.080 RS.Mo and listing five categories of authorized representatives with documentation requirements.

**Organization**: The form follows a logical top-to-bottom flow: patient demographics → source facility → recipient → date range → record types → purpose → deceased patient provisions → legal terms → signature. This ordering is intuitive.

**Record type options**: 13 specific checkboxes including "Pertinent Information," "History & Physical," "Emergency Room Report," "Lab Results," "Consultations," "Pathology Results," "Operative Reports," "Pathology Slides," "Radiology Reports," "Discharge Summary," "Radiology Films/Other Diagnostic Images," "Complete Billing Record/Itemized Bill," and "Complete Health Record," plus an "Other" free-text field. This provides good granularity.

**Purpose options**: 12 categories (Disability, FMLA, Insurance, Legal, Medical, Law Enforcement, Personal, Research, School, Military, Adoption, Department of Social Service) plus "Other." The instruction reads "must select one" — singular, though a patient might have multiple purposes.

**Layout**: The form is dense but organized. Two-column layout is used in several sections (e.g., record types on the right, release-to on the left), making efficient use of space. Font sizes appear adequate but the overall feel is cramped, especially the deceased-patient section.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form title includes "ACCESS REQUEST TO ANOTHER AGENCY," framing this as a release-to-third-party form rather than a patient self-access form. There is no separate pathway for a patient simply requesting their own records for personal review. A patient requesting their own records must fill in themselves as both the requesting party and the recipient. While "Personal" is listed as a purpose option, the form's structure doesn't streamline or simplify the patient self-access use case.

**Scope options**: The form provides good scope controls: specific date ranges or "All," and granular record type selection. The "Covering the period of health care from (must select one)" field with "Specific Date(s)" and "All" options is clear.

**Format options**: The form does not offer any choice of delivery format. There is no checkbox for electronic delivery, paper copies, or CD/USB. The "release to" section collects an address, fax, and email, implying the HIM department chooses the delivery method. There is no mention of patient portal access as an alternative.

**Right of Access language**: The form does not reference HIPAA § 164.524 or the patient's Right of Access by name. It does state: *"I understand that I do not have to sign this authorization, that my treatment or payment for services will not be denied if I do not sign this authorization, and that I can inspect or copy the protected health information to be used or disclosed."* This language acknowledges the right to inspect/copy but does not frame it as a HIPAA right or explain the associated timelines and fee limits.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or the 21st Century Cures Act. The organization uses Epic MyChart (per notes), but the form does not reference the patient portal or any digital access alternatives.

## 6. COMPLIANCE

**Fees**: Form-1 does not mention fees at all. (Form-2, by contrast, notes that *"Requests for copies of medical records and/or non-document material may be subject to copying fees."*) The omission from form-1 could mean fees are disclosed elsewhere, but it leaves the patient uninformed at the point of authorization.

**Expiration**: The form states: *"Unless otherwise revoked, this authorization will expire on the following date/event/condition: ___. If I fail to specify an expiration date/event/condition, this authorization will expire one year from the date signed."* A one-year default expiration is reasonable and standard.

**Right to revoke**: Clearly stated: *"I have the right to revoke this authorization at any time. Revocation must be made in writing and presented to the Health Information Management Department."*

**Conditioning treatment on signing**: Properly disclaims: *"my treatment or payment for services will not be denied if I do not sign this authorization."*

**Re-disclosure warning**: Present with both HIPAA and 42 CFR Part 2 (substance abuse records) notices.

**No notarization requirement**: The form does not require notarization.

**Submission methods**: Per the notes, forms can be submitted via email (ROI@myMLC.com), mail, or fax — no in-person-only requirement.

**Identity verification**: The form includes an "Identification type: ___ Verified by: ___" line, suggesting ID is checked, but does not specify what forms of ID are acceptable or whether this happens at submission or pickup.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Purpose requirement as mandatory field**: The form states "Purpose for requesting Information (must select one)," but under HIPAA § 164.524, a patient exercising their Right of Access is **not required to state a reason** for requesting their own records. Requiring a purpose selection could create an illegitimate barrier or discourage patients from exercising their rights.

### ⚠️ AMBIGUITIES
- **Three versions of the same form**: Form # 3014 exists as form-1.pdf (2019, current), form-2.pdf (2015, older), and a .docx file (oldest, "Heartland Health" branding) — all accessible from different parts of the website. No page clarifies which is current or supersedes the others.
- **"Access Request to Another Agency"**: The subtitle frames the form as a release *to another agency*, which may confuse patients requesting records for themselves. It's unclear whether a patient can use this form for self-access or whether a different process exists.
- **Identity verification process undefined**: The "Identification type" / "Verified by" fields appear at the bottom but the form doesn't explain when, where, or how identity verification occurs, or what ID types are accepted.

### ❌ ERRORS
- **Legacy name in legal text**: The form still references **"Heartland Regional Medical Center"** in the 42 CFR Part 2 disclaimer on page 2, despite the organization having rebranded to Mosaic Life Care. The main body uses the current name, but the legal boilerplate was not fully updated. (The 2015 form-2 has the same issue, suggesting this text has been carried forward without correction for years.)
- **Multilingual notice text partially garbled**: Several of the 15 language assistance notices on page 2 have extraction artifacts — particularly Laotian, Arabic, Karen, and Burmese, where text appears fragmented or missing characters. While this may be a `pdftotext` extraction issue rather than a rendering issue in the PDF itself, it raises questions about whether the PDF's font embedding properly supports all these scripts.

### ✨ BRIGHT SPOTS
- **15-language assistance notice**: Page 2 includes language assistance notices in Spanish, Vietnamese, Chinese, Serbo-Croatian, German, Korean, French, Russian, Laotian, Tagalog, Cushite (Oroomiffa), Pennsylvania Dutch, Japanese, Trukese, Arabic, Karen, and Burmese. This is an unusually comprehensive set, particularly including Pennsylvania Dutch and Trukese, which suggests attention to local community demographics.
- **Granular record type selection**: The 13-category record type checklist plus "Other" gives patients meaningful control over what is released, rather than forcing an all-or-nothing authorization.
- **Multiple submission channels**: Email, mail, and fax submission options (per retrieval notes) reduce access barriers compared to in-person-only requirements.
- **Deceased patient provisions**: The detailed section for authorized representatives of deceased patients, citing specific Missouri statutes and listing five categories of eligible requesters with documentation requirements, is thorough — though dense, it demonstrates legal rigor.
