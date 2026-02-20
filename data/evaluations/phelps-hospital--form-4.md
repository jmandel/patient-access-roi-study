# Evaluation: Phelps Hospital — form-4.pdf

## 1. DOCUMENT IDENTIFICATION

Form-4.pdf is **not** an ROI form itself — it is a **companion instruction document** titled "Instructions For Completing The Authorization For Release Of Health Information Form," produced by Northwell Health's Health Information Management department. It is a 3-page, step-by-step guide explaining how to fill out the Authorization for Release of Health Information form (form-1.pdf / form-3.pdf). The document walks through each numbered section of the authorization form (sections 1–10), with annotated examples and explanatory text.

Within the suite of six documents retrieved for Phelps Hospital (a Northwell Health member facility), this is one of two instruction guides:
- **form-4.pdf**: Instructions for the third-party *Authorization for Release* form (form-1/form-3)
- **form-6.pdf**: Instructions for the patient self-access *Request for Access* form (form-2)

The document is system-wide Northwell Health material (footer: "Northwell Health – Authorization for Release of Information Form Instructions, 182691 v.1"), not Phelps Hospital-specific. It is dated 9/29/2021.

## 2. FINDABILITY

The instructions document was found on the Northwell Health medical records page (https://www.northwell.edu/manage-your-care/medical-records), which serves all Northwell facilities including Phelps Hospital. According to retrieval notes, the page was "well-organized and clearly lists all forms," with the instruction documents linked alongside the corresponding forms. The source URL (https://www.northwell.edu/sites/northwell.edu/files/2022-03/release-of-health-information-form-instructions.pdf) has a descriptive filename.

However, a patient starting at Phelps Hospital's own website (phelps.northwell.edu) would need to navigate to the parent Northwell system site to find this document. The instructions are a supplementary resource — a patient would first need to locate the authorization form, then separately find and download this instructions PDF. The instructions are not embedded within the form itself, which creates a two-document dependency.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,766 characters across 3 pages).
- **Fillable fields**: Zero, which is appropriate for an instruction document (no fields to fill).
- **File size**: 565 KB for 3 pages — relatively large, driven by 28 embedded images. These images appear to be annotated screenshots of the actual form, showing where to enter information. The text extraction shows "XXXXXXXXXXXX" blocks, which are redacted/placeholder areas in the annotated screenshots.
- **Fonts**: 9 fonts used, suggesting a mix of body text and screenshot content.
- **Format**: Not image-only; has a real text layer. However, the heavy reliance on embedded images (28 for 3 pages) means significant content is conveyed visually through the annotated form screenshots rather than through accessible text.
- **Digital-first**: This appears to be a digitally-created document (not a scan), but it is designed as a static PDF companion to a print form. The annotated screenshots suggest it was created as a visual walk-through meant to be printed alongside the form.

## 4. CONTENT DESIGN

**Length**: 3 pages for instructions covering a 3-page form — proportionate.

**Structure**: The instructions follow the form's numbered sections (1 through 10) in order, making it straightforward to cross-reference. Each instruction maps to a specific section of the authorization form.

**Clarity**: The language is generally clear and practical. Step-by-step guidance uses concrete examples:
- *"For Doctor's Office: The name and address of the doctor must be entered. (example: Dr. Jane Jones at 300 Northwell Drive)"*
- *"A medical record abstract will consist of the following items over the past 1-2 years (or date range specified): Provider/Clinician Documentation, Procedure Reports, Laboratory, Pathology, and Radiology Reports."*

Some instructions introduce useful nuance, such as explaining the difference between hospital and doctor's office requests, and clarifying what a "medical record abstract" includes.

**Complexity concerns**: A few instructions add complexity rather than clarity:
- Step 8 uses a double-negative construction: *"Initial this section ONLY IF OPTING OUT of the release of substance abuse treatment information."* The opt-out framing (initialing to *exclude* information) is inherently confusing.
- Step 9 imposes a strict requirement: *"Using 'indefinite,' is not acceptable. A fixed period of time is required by law (e.g., 6 months, 30 days post discharge, at the end of litigation)."* and *"If left blank, the Authorization Form will be returned for additional information."*

**Layout**: The document has a clear header ("Instructions For Completing The Authorization For Release Of Health Information Form") and subheader ("Health Information Management") on each page. Footer includes document ID, page numbers, and date. The XXXX blocks in the extracted text suggest annotated form screenshots are used as visual guides — a good design choice for comprehension, though it makes the document dependent on visual rendering.

## 5. PATIENT-CENTEREDNESS

This document is designed to help complete the **third-party release** authorization form, not the patient self-access form (form-2). The instructions do acknowledge patient-initiated requests — step 7 notes *"'At the request of the individual' may be selected when an individual initiates the authorization and does not, or elects not to, provide a statement of the purpose."* However, the instructions don't direct patients who want their own records to use the separate Request for Access form (form-2) instead.

**Helpful features**:
- Explains what a "medical record abstract" contains, helping patients who are unsure what to request
- Distinguishes between hospital records and doctor's office records
- Notes that separate forms are required for multiple recipients
- Explains the verbal authorization option (step 5)

**Gaps**:
- No mention of HIPAA patient rights or 45 CFR § 164.524
- No mention of electronic health information (EHI) export
- No mention of fee expectations or timelines for processing
- Doesn't clarify when a patient should use the Request for Access form (form-2) instead of the Authorization for Release form
- The instruction for step 9 (expiration) could confuse patients requesting their own records, since patient access requests under HIPAA don't require an expiration date

## 6. COMPLIANCE

**Expiration requirement**: Step 9 states *"A fixed period of time is required by law"* and *"Using 'indefinite,' is not acceptable."* While this is appropriate for HIPAA authorizations (45 CFR § 164.508 requires an expiration date or event), it could be problematic if patients use this authorization form for self-access requests rather than the dedicated patient access form (form-2), since patient access requests under § 164.524 have no such requirement.

**Opt-out for sensitive information**: Step 8 requires patients to initial to *exclude* substance abuse, mental health, and HIV-related information. This opt-out approach (release everything by default unless you initial to exclude) is consistent with New York State law (NY Mental Hygiene Law and Public Health Law § 2782) and 42 CFR Part 2 requirements, though the double-negative framing could lead to inadvertent disclosure.

**No unreasonable barriers identified**: The instructions don't impose notarization, in-person submission, or other barriers. They do note that incomplete forms will cause delays, which is reasonable.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **No cross-reference to the patient access form**: The instructions guide patients through the third-party release form without ever mentioning that a separate, simpler patient self-access form (form-2) exists. A patient seeking their own records could easily end up using the wrong form, filling out unnecessary fields (e.g., third-party recipient information, expiration date), and facing processing delays.
- **Opt-out framing for sensitive records**: Step 8's instruction to *"Initial this section ONLY IF OPTING OUT"* means that patients who skip this section (perhaps not understanding its significance) will have their substance abuse, mental health, and HIV-related information released by default. The double-negative structure makes this easy to misunderstand.
- **"Required by law" without citation**: Step 9 states a fixed expiration period is *"required by law"* without citing which law, which could mislead patients into thinking this applies to all records requests (it doesn't apply to patient access under § 164.524).

### ✨ BRIGHT SPOTS

- **Annotated visual examples**: The use of 28 embedded images (annotated form screenshots) to create a visual walk-through is a thoughtful design choice that goes beyond what most organizations provide. Having a dedicated instruction document at all is uncommon and commendable.
- **Practical guidance on "medical record abstract"**: Explaining that an abstract includes *"Provider/Clinician Documentation, Procedure Reports, Laboratory, Pathology, and Radiology Reports"* over the past 1–2 years helps patients who don't know what to request — a level of specificity rarely seen in ROI materials.
- **Availability as a separate downloadable document**: Providing instructions as a standalone PDF (rather than cramming them onto the form itself) keeps the form clean while still providing guidance for patients who need it.
