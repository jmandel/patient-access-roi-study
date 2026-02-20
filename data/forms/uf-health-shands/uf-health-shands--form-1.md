# UF Health Shands Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Title:** "Record Request: Authorization to Use and Disclose Protected Health Information ('PHI') Maintained by UF Health"

This is a comprehensive, multi-section ROI authorization form. It is one of four ROI-related PDFs found on the UF Health website. The notes describe it as "a more detailed/newer version of the ROI form," though its revision date ("Revised 3/11/15") actually makes it **older** than form-2.pdf (revised 5/30/19), which is the primary form linked from the official medical records page. Form-1 shares the same form code (PS46283 / RI0001) as all other variants, indicating it is part of the same form family.

Compared to the other forms:
- **form-2.pdf** is the canonical version linked from the patient-facing medical records page (revised 5/30/19, simpler layout).
- **form-3.pdf** is an even older version (rev. 6/20/14) with a different title ("Authorization for Use or Disclosure…").
- **form-4.pdf** is a clinic-specific variant pre-filled for UF C.A.R.D./Center for Autism and Neurodevelopment.

Form-1 is distinctive for its **Section 2** identity verification and representative authorization fields, which are more prominent than in other versions. It uses a numbered-section and numbered-box layout (Sections 1–7, Boxes 1–25) that is more structured than the other forms.

## 2. FINDABILITY

The form was found via web search at `https://ufhealth.org/sites/default/files/media/Locations/forms/Medical-Record-Release-Form.pdf`. Notably, this is **not** the form linked from the official medical records page at ufhealth.org/medical-records — that page links to form-2.pdf instead. Form-1 exists at a `/Locations/forms/` path, suggesting it may be a location-specific or legacy version that is still publicly accessible but not prominently linked.

The URL filename "Medical-Record-Release-Form.pdf" is descriptive, which is helpful if a patient stumbles on it via search. However, the presence of multiple similar forms at different URLs without clear version labeling creates potential confusion about which form is current.

## 3. TECHNICAL ACCESSIBILITY

- **Pages:** 1 (single page, densely packed)
- **File size:** 612,570 bytes (~613 KB) — notably large for a single-page PDF with no embedded images. This is approximately 6.5× the size of form-2.pdf (94 KB) and 7× form-3.pdf (88 KB), suggesting a more complex internal structure or embedded fonts.
- **Text layer:** Present and fully extractable. All text was successfully extracted (5,308 characters).
- **Fillable fields:** 0. Despite its 25 labeled boxes (Box 1 through Box 25), the PDF contains **no interactive form fields**. A patient must print and hand-fill or use PDF annotation tools.
- **Font count:** 40 — extremely high for a single-page document, indicating a complex design with many font variants (possibly contributing to the large file size).
- **Embedded images:** 0.
- **Digital-first design:** No. This is designed as a print-and-fill document. The lack of fillable fields, combined with the dense single-page layout and 40 fonts, suggests it was composed in a desktop publishing tool for print output rather than digital completion.

## 4. CONTENT DESIGN

**Structure:** The form uses a numbered-section system (Sections 1–7) with numbered boxes (Box 1–25). This provides clear organization:
- Section 1: Patient demographics and identity verification (Boxes 1–5)
- Section 2: Representative authorization (Boxes 6–10)
- Section 3: "From" facility selection (Boxes 11–14)
- Section 4: "To" recipient (Boxes 15–17)
- Section 5: PHI types and date range (Boxes 18–21)
- Section 6: Purpose and format (Boxes 22–23)
- Section 7: Signature (Boxes 24–25)

**Clarity:** The form uses moderately clear language, though some sections lean legalistic. The opening footnote is dense: "*For purposes of this agreement, UF Health describes a collaboration of the University of Florida Board of Trustees for the benefit of the University of Florida College of Medicine, Shands Jacksonville Medical Center, Inc., Shands Teaching Hospital and Clinics, Inc., and Shands Recovery, LLC.*" This is not patient-friendly language.

**Layout:** Cramming 25 boxes and 7 sections plus an extensive "I understand that" disclosure block onto a single page makes the form visually dense. The extracted text shows a logical flow, but a single-page format for this much content likely results in small font sizes and tight spacing.

**Record type checkboxes:** 13 specific record categories are offered: History and Physical, Operative Reports, Discharge Summary, Mental Health/Psychiatric Treatment, Problem List, Medication List, Treatment Notes, Alcohol or Substance Abuse Treatment, Emergency Room Record, Radiology Reports/Films, Lab/Pathology Reports, STD/HIV/AIDS Treatment(s) or Test(s), and Genetic Testing. This is reasonably granular.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is designed as a general-purpose authorization covering both patient self-request and third-party release. It does not differentiate between these use cases. There is no specific language addressing a patient's HIPAA Right of Access under 45 CFR § 164.524, nor any mention of the term "Right of Access."

**Scope options:** Patients can specify:
- Specific record types via 13 checkboxes plus a free-text field (Box 18)
- Date ranges ("Are there specific dates needed?" — Box 20)
- Whether records are needed for an appointment (Box 19)

**Purpose options:** Three checkboxes: Treatment/Continued Care, Payment/Billing, Personal Use, plus an "Other" option (Box 22).

**Format options:** The form offers electronic delivery via a web portal: "Through a web portal, with notice provided to my e-mail account at: [email field]." It explains: "You will receive an e-mail from HealthPort and that e-mail will tell you how to get the records." Paper and Other options are also available (Box 23). The mention of HealthPort (a third-party ROI vendor, now part of Ciox/Datavant) is notable — it reveals the release process is outsourced.

**Facility selection:** Five specific UF Health facilities are listed with full addresses, phone numbers, and fax numbers. A sixth option allows specification of a "University of Florida person, class of persons, or organization." This is helpful for patients who may not know which entity holds their records.

**Fee disclosure:** The form states: "I am aware that I may be charged a fee for this request as allowed by law, which may include up to $1.00 per page (plus applicable tax and handling) for Paper Records and fees associated with labor, supplies (i.e. cost of a computer disk), and postage for Electronic Records." This is a per-page fee disclosure, which may exceed HIPAA's "reasonable, cost-based fee" limit for patient access requests under the Right of Access. The form notes "Fees are waived when PHI is released to a health care provider for treatment purposes."

**Revocation rights:** Clearly stated: "This authorization will remain in effect for one (1) year or until I revoke it in writing." The patient is informed of the right to revoke and that refusal to sign will not affect care.

**Re-disclosure warning:** Present: "PHI released per this authorization may no longer be protected by state law or the federal health privacy law and could be re-disclosed by the person or entity that receives it."

## 6. COMPLIANCE

**Fee structure concern:** The "$1.00 per page" fee disclosure is potentially problematic for patient access requests. Under HIPAA's Right of Access (45 CFR § 164.524(c)(4)), fees for patient-requested copies must be limited to reasonable, cost-based fees, and HHS guidance has indicated that per-page fees (especially at $1.00/page) may exceed this standard. The form does not distinguish between patient access requests and third-party disclosures for fee purposes.

**Identity verification:** Section 1 includes identity verification checkboxes (Driver License/State ID, Personally Known, Other) and requests "Last 4 digits of SSN (Optional)." While SSN is marked optional, requesting it at all on an authorization form may be unnecessary and raises privacy concerns.

**Authorization duration:** One year, which is reasonable and standard.

**No notarization required:** The form does not require notarization or witnesses, which is appropriate.

**Submission methods:** The form does not explicitly state how to submit it (unlike form-2, which directs patients to mail or fax). The facility addresses and fax numbers are listed in the "From" section, but there is no clear instruction like "mail or fax completed forms to." This omission could confuse patients.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Per-page fee disclosure without Right of Access distinction:** The form states fees "may include up to $1.00 per page (plus applicable tax and handling) for Paper Records." For patient self-access requests, HIPAA limits fees to reasonable, cost-based amounts. HHS OCR has specifically flagged per-page charges of this nature as potentially non-compliant for Right of Access requests. The form applies this fee structure uniformly without distinguishing patient access from third-party release.

### ⚠️ AMBIGUITIES

- **No submission instructions:** Unlike form-2.pdf, which clearly directs patients to "mail or fax completed forms to: UF Health HIM Dept – ROI," form-1 provides no explicit submission guidance. A patient completing this form would not know where to send it unless they infer it from the facility addresses listed in the "From" section.
- **Version confusion:** This form (revised 3/11/15) coexists online with form-2 (revised 5/30/19) and form-3 (revised 6/20/14), all sharing the same form code PS46283/RI0001. There is no indication on the form itself that it has been superseded or which version a patient should use.
- **"Box" numbering without visible boxes in text:** The extracted text references "Box 1" through "Box 25," but these labels appear to be layout identifiers rather than patient-visible instructions. Patients may not understand the box numbering system when filling out the form.

### ❌ ERRORS

- **Outdated HealthPort reference:** The form references "HealthPort" as the electronic delivery vendor. HealthPort was acquired by Ciox Health (now Datavant). This suggests the form has not been updated since at least the HealthPort/Ciox transition, consistent with its 2015 revision date.
- **Potentially outdated contact information:** The HomeCare address listed (3515 NW 98th Street) differs from the address in form-2.pdf (1610 NW 23rd Avenue), suggesting at least one form has stale information.

### ✨ BRIGHT SPOTS

- **Electronic delivery option:** The form offers portal-based electronic record delivery with email notification — a more modern option than many ROI forms, which only offer paper or fax.
- **Granular record type selection:** 13 specific record categories plus a free-text description field give patients meaningful control over what is released.
- **Clear revocation and refusal rights:** The "I understand that" section plainly informs patients they can revoke at any time in writing, and that refusing to sign will not affect their care.
