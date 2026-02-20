# UF Health Shands Hospital — Form 4 Evaluation

## 1. DOCUMENT IDENTIFICATION

Form 4 is a **clinic-specific variant** of UF Health's standard ROI authorization form, titled "Record Request: Authorization to Use and Disclose Protected Health Information ('PHI') Maintained by UF Health." It is a single-page PDF (181,454 bytes) revised 5/30/19, document code PS46283.

What distinguishes this form from the other three UF Health forms is that the "From" field is **pre-filled** with "All our Providers & UF C.A.R.D" and the "To" field is pre-filled with "UF Center for Autism and Neurodevelopment (CAN.)" along with a fax number (352-733-1030) and a pre-filled purpose of "UF CAN Case Conference." This makes it a specialized release designed for families of patients receiving autism/neurodevelopmental services, authorizing the sharing of records among the providers involved in their care.

The form shares its revision date (5/30/19) and document code (PS46283) with form-2.pdf, the primary general-purpose ROI form linked from the medical records page. It is structurally nearly identical to form-2 — same layout, same legal language, same understanding statements — with the key difference being pre-populated clinic/provider fields and purpose. The URL path (`/media/BASIC%20Providers%20RELEASE.pdf`) suggests it was intended for distribution within the "BASIC Providers" program rather than general public use.

## 2. FINDABILITY

This form was **not linked from the main medical records page** (ufhealth.org/medical-records). It was discovered through broader web searches for UF Health ROI forms. The source URL (`https://ufhealth.org/sites/default/files/media/BASIC%20Providers%20RELEASE.pdf`) places it in a general media file directory rather than a structured forms section, suggesting it was uploaded for a specific clinic's use rather than as a public-facing patient resource.

The filename "BASIC Providers RELEASE.pdf" is only loosely descriptive — a patient encountering this file would not immediately know it relates to autism/neurodevelopmental services or what "BASIC Providers" refers to. A patient at UF Health's Center for Autism and Neurodevelopment might receive this form from their clinic but would be unlikely to locate it independently online.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and fully extractable (4,870 characters). Not an image-only scan.
- **Fillable fields**: Zero (0) interactive form fields. Despite having 20 fonts and checkboxes rendered visually, none are digitally fillable. The form must be printed and completed by hand.
- **File size**: 181,454 bytes for a single page — reasonable, though larger than form-2 (94,652 bytes) and form-3 (88,083 bytes), likely due to 1 embedded image (the UF Health/Shands logo).
- **Digital-first design**: No. The form is a flat PDF with no interactive elements. The pre-filled fields are baked into the document as static text rather than as editable form fields. Checkboxes render as "0" characters in text extraction (e.g., "0 History and Physical", "0 Operative Report(s)"), indicating they are static graphics rather than interactive controls.
- **Format options listed on form**: "□ MyUFHealth (UF Health Portal) □ CD □ Paper" — but these are not digitally selectable.

## 4. CONTENT DESIGN

**Length**: Single page, which is appropriate for the content. All information fits without scrolling or page breaks.

**Clarity**: The form uses a mix of reasonably clear language and legal/regulatory prose. The authorization statement is written at a moderate reading level. The "I understand that" section includes helpful parenthetical translations: "revoke it in writing (i.e., tell UF Health to cancel it)." However, the opening definition of "UF Health" — a dense paragraph naming the University of Florida Board of Trustees, Shands Jacksonville Medical Center Inc., Shands Teaching Hospital and Clinics Inc., and "Shands Recove,y, LLC" (note the OCR/text artifact with comma instead of 'r' in "Recovery") — is dense corporate legalese.

**Organization**: The form flows logically: patient demographics → from/to → facility selection → PHI type checkboxes → date/purpose/format → legal terms → signature → representative section. This mirrors the structure of form-2.

**Layout**: Cramped. The form packs facility checkboxes, PHI type checkboxes, date fields, purpose checkboxes, format options, a full legal disclosure section, a signature block, and a representative section all onto a single page. The mailing/fax instructions for HIM Dept are embedded in the middle of the form alongside facility checkboxes, competing visually with the from/to fields. The address "4101 NW 89th Blvd." appears alongside the facility checkboxes without clear labeling of which facility it references.

**Font size**: Multiple font sizes are used (20 fonts detected). The main body text appears readable, but the legal disclosure section and the UF Health definition paragraph use smaller text to fit onto one page.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is a **third-party release form**, not a patient access form. It is designed for releasing records *from* one provider *to* another for a specific clinical purpose ("UF CAN Case Conference"). The pre-filled "From" and "To" fields, along with the pre-filled purpose, indicate this is meant to be given to a family by clinic staff — not used by a patient independently requesting their own records.

**Scope options**: The form offers granular PHI type checkboxes: Problem List, History and Physical, Operative Report(s), Discharge Summary, Emergency Room Record, Radiology Reports, Radiology Images, Lab/Pathology Reports, Billing Records, Medication List, Clinic/Office Notes. It also includes sensitive-information checkboxes requiring separate authorization: Behavioral Health, Substance Use Disorder, STD/HIV/AIDS Treatment(s) or Test(s), Genetic Testing. Date-range fields are provided. This level of granularity is appropriate.

**Format options**: Three format options are listed — "MyUFHealth (UF Health Portal)," "CD," and "Paper." The portal option is notable, though it's unclear how it functions in practice for a third-party release. No electronic PDF delivery via email is mentioned (unlike form-1, which includes a HealthPort web portal option with email).

**Right of Access language**: The form does not reference HIPAA § 164.524 or patient rights specifically. The 42 C.F.R. Part 2 reference for substance use disorder records and HIPAA 45 C.F.R. pts 160 & 164 are mentioned in the understanding statements.

**EHI Export**: No mention of electronic health information export or bulk data access.

## 6. COMPLIANCE

**Fees**: The form states: "I am aware that I may be charged a fee for this request as allowed by law, which may include up to $1.00 per page (plus applicable tax and handling) for Paper Records and fees associated with labor, supplies (i.e. cost of a computer disk), and postage for Electronic Records." The $1.00/page fee is the standard Florida statutory rate and is appropriate for third-party releases, but would exceed HIPAA's "reasonable, cost-based fee" limit if applied to patient access requests under § 164.524. The form does not distinguish between patient access and third-party release fee structures. Fees are waived for treatment-purpose releases.

**Authorization duration**: "This authorization will remain in effect for one (1) year or until I revoke it in writing." One year is a reasonable default.

**Right to refuse**: Clearly stated: "I may refuse to sign this authorization and doing so will not affect my treatment, payment, enrollment, or eligibility for benefits or the quality of care that I will receive."

**Re-disclosure warning**: Present: "PHI released per this authorization may no longer be protected by state law or the federal health privacy law and could be redisclosed by the person or entity that receives it."

**Revocation process**: Requires writing to the Health Information Management Department. This is standard.

**Submission**: The form directs patients to mail or fax completed forms to "UF Health HIM Dept – ROI, P.O. Box 100348, Gainesville, FL 32610-0348" or fax to 352.265.1098. No electronic submission option is available.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES
- **Pre-filled fields blur the form's purpose**: The pre-filled "From" (All our Providers & UF C.A.R.D) and "To" (UF Center for Autism and Neurodevelopment) suggest this form is meant for a specific inter-provider transfer, yet the form is structurally identical to the general ROI form. A parent presented with this form may not understand whether they can modify the pre-filled fields or whether signing it authorizes only the specific described transfer.
- **"All our Providers" is undefined**: The "From" field says "All our Providers & UF C.A.R.D" without specifying which providers are included. A patient signing this form does not know exactly which providers' records they are authorizing for release.
- **Fee language on a treatment-purpose form**: The form includes the $1.00/page fee disclosure, then immediately notes "Fees are waived when PHI is released to a health care provider for treatment purposes." Since this form's pre-filled purpose is clinical (case conference), the fee disclosure is functionally irrelevant but may still cause confusion or concern.

### ❌ ERRORS
- **Text extraction artifact**: "Shands Recove,y, LLC" appears in the UF Health definition — a comma replaces the letter 'r' in "Recovery." This appears in the PDF's text layer (visible in extraction at `form-4-metadata.json`) and suggests either a font-mapping issue or a typographical error in the source document.
- **Inconsistent checkbox rendering**: Checkboxes appear as "0" and "D" characters in text extraction, indicating at least two different visual styles for checkboxes within the same form, which may cause confusion when the form is read by assistive technology or text-extraction tools.

### 🚩 RED FLAGS
- **Fee structure may be problematic if used for patient access**: The $1.00/page fee is stated without any distinction between patient access requests (which HIPAA limits to reasonable, cost-based fees) and third-party releases (which may charge the state-permitted rate). While this form is clearly designed for third-party release, the lack of any patient-access pathway or fee differentiation across UF Health's form suite is worth noting at the organizational level.

### ✨ BRIGHT SPOTS
- **Substance use disorder protections explicitly cited**: The form specifically references "42 C.F.R. Part 2, and HIPAA, 45 C.F.R. pts 160 & 164" for substance use disorder records, which is a more thorough regulatory citation than many ROI forms provide.
- **Sensitive information categories separated**: Behavioral Health, Substance Use Disorder, STD/HIV/AIDS, and Genetic Testing are listed as separate opt-in checkboxes under "I further authorize the release of the following information," rather than being bundled into the general release — correctly reflecting the heightened consent requirements for these categories.
