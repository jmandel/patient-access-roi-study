# Evaluation: Michigan Medicine — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is the **current, primary ROI authorization form** for Michigan Medicine – University of Michigan Health, titled "AUTHORIZATION TO RELEASE COPIES OF A MEDICAL RECORD (Patient Requests Information To Be Sent From UMH)." It is a 3-page document (form number 70-10015, VER: A/24, HIM: 11/24) that serves as both a patient self-request form and a third-party release authorization. The source URL is `https://www.uofmhealth.org/sites/default/files/2025-03/ROI_.pdf`.

The organization also hosts two other related forms:
- **form-2.pdf**: An older version of the same authorization (dated 2011, VER: B/11), still available on `medicine.umich.edu`, using the legacy "University of Michigan Health System (UMHS)" branding.
- **form-3.pdf**: A "Request for Outside Records" form — the reverse direction, authorizing Michigan Medicine to *request* records from another provider.

Form-1 is the document a patient would encounter if searching for how to get copies of their own Michigan Medicine records today.

## 2. FINDABILITY

The form was **readily discoverable via web search**. Per the retrieval notes, a direct search for "Michigan Medicine University of Michigan Health authorization release of health information form PDF" immediately returned links to this form. It was also discoverable via site-specific searches. The form downloaded directly from `uofmhealth.org` with no bot-blocking or CAPTCHA challenges (unlike the older form-2 on `medicine.umich.edu`).

One minor issue: the source URL filename is `ROI_.pdf` — an uninformative filename with a trailing underscore, which provides no descriptive context for someone examining a download folder.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: The PDF has a proper text layer and is not a scan — text is selectable and extractable. The extracted text is clean and well-ordered, spanning 10,805 characters across 3 pages.

**Fillable fields**: Despite the retrieval notes describing the form as having "fillable fields," the metadata extraction reports **fillable_field_count: 0**. This means the form is either flattened or uses visual field styling without actual interactive PDF form fields. A patient would need to print and handwrite, or use a PDF annotation tool to fill it — a meaningful barrier for digital completion.

**File size**: 770 KB for a 3-page form is moderately large, likely due to 8 embedded images and 54 distinct fonts. This is functional but heavier than necessary.

**Structure**: The form uses numbered sections (1–9 across pages 1–2) and a separate fee schedule/information page (page 3). Sections are logically ordered: voluntariness statement → patient info → recipient → purpose → record set → expiration → revocation → fees.

## 4. CONTENT DESIGN

**Layout**: The form packs significant content into its pages. Page 1 covers patient identification, delivery method, recipient, purpose, and record selection. Page 2 covers expiration, revocation rights, signature, and submission instructions. Page 3 is a standalone fee schedule infographic.

**Record selection system**: The form uses a "Package" system (Package 1: Key Clinical Written Documentation; Package 2: All Clinical Written Documentation) linked to a purpose-of-disclosure table in Section 4. This is a structured approach that attempts to simplify what records to request, though the cross-referencing between Section 4 and Section 5 adds complexity. The instructions say "Package selections (as recommended in Section 4, more may be specified below)" — requiring patients to navigate between two sections to understand what they're requesting.

**Language complexity**: The form uses bureaucratic but largely understandable language. Key legal concepts (voluntariness, revocation rights, redisclosure risk) are explained. However, some passages are dense, such as: "If this authorization was obtained as a condition of providing insurance coverage, the authorization will not apply to my insurance company to the extent the law provides my insurer with the right to contest a claim under the policy, or the policy itself."

**Delivery method options**: The form offers multiple delivery methods: MyUofMHealth.org Patient Portal, Electronic (email web link), US Mail, Fax (for health providers/urgent), Certified Overnight Delivery (extra charge). The self-request section (item 2) offers Portal and Electronic/US Mail options. The third-party section (item 3) adds Fax and Certified delivery.

**Fee schedule (page 3)**: Presented as a clear table with costs broken down by scenario:
- Patient Portal: Free
- Electronic delivery to patient: $6.89
- Paper delivery to patient: $6.89 plus shipping
- Third-party electronic: $6.89
- Third-party paper: $30.60 initial + per-page fees ($1.53/page for pages 1–20, $0.77 for 21–50, $0.31 for 51+)

The fee page also includes a "No Cost Services" sidebar explaining free pathways (portal, direct-to-doctor).

## 5. PATIENT-CENTEREDNESS

**Self-request pathway**: The form includes a dedicated "Myself" option (item 2) where a patient can request their own records sent to their own address. This is separate from the third-party release pathway (item 3), providing useful clarity.

**Portal promotion**: The form prominently mentions MyUofMHealth.org Patient Portal as a free delivery option, and the fee schedule page highlights "No Cost Services" for portal access. This is a positive nudge toward the most convenient and affordable pathway.

**Barriers noted**:
- "**No Walk-In Services Available**" and "**MAIL ONLY - NO WALK-IN SERVICES**" — patients must submit by mail or fax only. This eliminates in-person submission as an option, which may inconvenience patients who prefer face-to-face interactions or need assistance completing the form.
- The form requires a wet or electronic signature with "attestation of the Name/Date/Time the individual signed the form" for electronic signatures — adding complexity for digital submission.
- The turnaround time is stated as "five business days plus shipping time" on page 2 and "5-7 business days" on page 3, with a broader allowance to "please allow up to 30 days" on page 3.
- Fees apply for all non-portal delivery methods, even for patient self-requests ($6.89 minimum).

**Sensitive information handling**: Section 5 explicitly states the authorization "may include: alcohol and drug abuse/treatment; psychological and social work counseling; HIV, AIDS or ARC; communicable disease or infections, including sexually transmitted diseases, venereal disease, tuberculosis and hepatitis; genetic information." It also references form 70-10232 for "release of alcohol / substance use disorder info," suggesting a separate form may be needed for 42 CFR Part 2 protected records.

**Contact information**: Phone number (734-936-5490) and fax (734-936-8571) are provided. A mailing address is given. The fee schedule URL is referenced: `https://www.uofmhealth.org/patient-visitor-guide/medical-records`.

## 6. COMPLIANCE

**Expiration**: The authorization expires 60 days from signature if no date is specified — a relatively short default window. This is reasonable for limiting open-ended authorizations but could cause issues if processing delays push past the expiration date given the "up to 30 days" processing allowance.

**Revocation rights**: Clearly stated in Section 7 — revocations must be in writing. The standard exception for already-disclosed information is noted.

**Fee structure**: Fees are stated as "authorized and updated annually by the State of Michigan Medical Records Access Act, P.A. 47 of 2004, MCL 333.26269" with "Additional fee guidance is provided under federal regulations." The $6.89 charge for patient electronic delivery may raise questions under the HIPAA Right of Access rule, which limits fees to a "reasonable, cost-based fee" — the HHS has stated this should generally not exceed $6.50 for electronic copies per its 2016 guidance, though subsequent guidance revised this. The fee is in the ballpark but not clearly broken down as cost-based.

**Prepayment**: "Some records requested for legal, insurance, or personal use may require a prepayment." The phrase "personal use" could include patient self-requests, which would be problematic under HIPAA's prohibition on conditioning access on payment. The form does not clearly exempt patient self-requests from prepayment requirements.

**Third-party vs. patient requests**: The form is used for both patient self-requests and third-party authorizations. While the form structurally separates these (items 2 vs. 3), the fee schedule and prepayment language do not clearly differentiate HIPAA Right of Access requests from other types, which could lead to patients being charged third-party rates or subjected to prepayment when exercising their HIPAA rights.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No in-person submission**: The form states "MAIL ONLY - NO WALK-IN SERVICES" and "No Walk-In Services Available." While not a legal violation per se, eliminating in-person submission entirely removes a common access pathway and may disproportionately affect patients with limited mail/fax access. This is a regression from form-2 (2011 version), which allowed delivery "to any University of Michigan Hospital or Health Center registration desk."
- **Prepayment language ambiguity**: The statement "Some records requested for legal, insurance, or personal use may require a prepayment" could be read to include patient self-requests under "personal use." HIPAA prohibits conditioning a patient's right of access on upfront payment.

### ⚠️ AMBIGUITIES

- **Page 1 says "UMH" while page 2 says "UMHS"**: The subtitle on page 1 reads "(Patient Requests Information To Be Sent From UMH)" but the page 2 header says "(Patient Requests Information To Be Sent From UMHS)." This branding inconsistency (UMH = University of Michigan Health vs. UMHS = University of Michigan Health System) suggests the form was not fully updated when rebranding.
- **Conflicting turnaround times**: Page 2 states "five business days plus shipping time" while page 3 says "5-7 business days" and adds "please allow up to 30 days." The 30-day allowance is six times the stated average, creating confusion about when to expect records.
- **Fee schedule says "as of 2024"** but the form version is dated "A/24, HIM: 11/24" and the source URL path contains "2025-03" — it's unclear whether these are 2024 or 2025 fees, and the fee schedule directs patients to a URL for the "current" schedule, implying the form's own fee table may not be current.
- **Separate form for substance use disorder records**: The mention of form 70-10232 for "release of alcohol / substance use disorder info" is noted in passing but could confuse patients who expect this authorization to cover all their records.

### ❌ ERRORS

- **Fillable fields not functional**: The retrieval notes describe the form as having "fillable fields," but metadata extraction shows `fillable_field_count: 0`. The form appears to have visual field styling (lines, boxes) without actual interactive PDF form fields, meaning it cannot be digitally completed in standard PDF readers.
- **Inconsistent "Intial" spelling**: The third-party fee section on page 2 reads "Intial Fee as permitted by State Law" — missing the letter 't' in "Initial."

### ✨ BRIGHT SPOTS

- **Free patient portal pathway prominently featured**: The form explicitly highlights that MyUofMHealth Patient Portal delivery is free, with a "No Cost Services" callout on page 3. This effectively guides patients toward the zero-cost, fastest option.
- **Vendor transparency**: Page 3 states "Vital Chart (VRC) is the approved vendor that provides copies of medical records" and notes that "Records transmission emails will come from Vital Chart." This sets clear expectations about who will contact the patient, reducing confusion or distrust when receiving emails from an unfamiliar sender.
- **Package-based record selection**: Rather than requiring patients to specify individual record types, the form offers pre-built packages (Package 1: Key Clinical Documentation; Package 2: All Clinical Documentation) with recommended mappings to common purposes. This simplifies what is typically one of the most confusing parts of ROI forms.
