# Evaluation: UF Health Shands Hospital — form-2.pdf

**Organization:** UF Health Shands Hospital (Gainesville, FL)
**Document:** form-2.pdf (94,652 bytes, 1 page)
**Source URL:** https://ufhealth.org/assets/media/forms/46283_F.pdf
**Revision date:** 5/30/19
**Form ID:** PS46283 / RI0001

---

## 1. DOCUMENT IDENTIFICATION

This is the **primary ROI authorization form** linked directly from the official UF Health medical records page (ufhealth.org/medical-records). Its title is "Record Request: Authorization to Use and Disclose Protected Health Information ('PHI') Maintained by UF Health." It is a general-purpose authorization form covering both patient-initiated record requests and third-party releases.

The form covers a multi-entity collaboration: "the University of Florida Board of Trustees for the benefit of the University of Florida College of Medicine, Shands Jacksonville Medical Center, Inc., Shands Teaching Hospital and Clinics, Inc., and Shands Recovery, LLC."

Among the four forms found for this organization:
- **form-1.pdf** is an older, more detailed variant of the same form (revised 3/11/15), with numbered sections/boxes and identity verification fields (driver license, personally known). It includes 40 fonts vs. form-2's 8, suggesting a more complex layout.
- **form-2.pdf (this document)** is the current canonical form, streamlined relative to form-1.
- **form-3.pdf** is an even older version (revised 6/20/14) with a slightly different title and more facility-specific checkboxes including Radiology.
- **form-4.pdf** is a clinic-specific variant pre-filled for "All our Providers & UF C.A.R.D" (Center for Autism and Neurodevelopment), sharing form-2's structure and revision date.

Form-2 is the document a patient would most likely encounter when following the primary pathway from the UF Health website.

---

## 2. FINDABILITY

**Rating: Good.** Per the retrieval notes, the form was straightforward to locate. The medical records page at ufhealth.org/medical-records links directly to this PDF. Standard web searches for UF Health medical records release forms returned relevant results. The URL (`/assets/media/forms/46283_F.pdf`) is not human-readable — the filename "46283_F" is an internal identifier with no descriptive value — but the link context on the medical records page compensates for this.

No bot-blocking, JavaScript requirements, or CAPTCHAs were encountered during retrieval. The form downloaded successfully via curl. Retrieval difficulty was characterized as "easy" in the notes.

The existence of four separate form versions at different URLs on the same domain is potentially confusing — a patient who finds form-3 via search rather than form-2 via the medical records page would encounter an outdated version (2014 vs. 2019).

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. Full text is extractable (4,817 characters). Not an image-only scan.
- **Fillable fields:** Zero (0). Despite having a text layer, the PDF contains no interactive form fields. Patients must print and handwrite all entries.
- **Page count:** 1 page — compact for the amount of content it carries.
- **File size:** 94,652 bytes — very small and efficient.
- **Fonts:** 8 fonts embedded, suggesting a clean digital design rather than a scan.
- **Embedded images:** 0, confirming this is a born-digital document.
- **Digital-first design:** Mixed. The document was clearly designed digitally (not scanned), but the absence of any fillable fields means it functions as a print-and-fill document. There are checkboxes rendered as "h" characters in the text layer (a common artifact of checkbox fonts), which are not interactive.

The lack of fillable fields is a notable gap for a born-digital PDF from a major teaching hospital. Patients cannot complete this form on a computer; they must print, handwrite, and then mail or fax.

---

## 4. CONTENT DESIGN

**Length and density:** The entire form fits on one page, which is commendable for usability, but the tradeoff is density. The form packs patient demographics, from/to routing, facility selection, record type checkboxes (16 categories), purpose, format choice, a lengthy legal disclosure section (9 bullet points), signature, and representative information onto a single page.

**Clarity of language:** The legal disclosure section uses reasonably clear language. Key rights are explained in plain terms: "I may refuse to sign this authorization and doing so will not affect my treatment, payment, enrollment, or eligibility for benefits or the quality of care that I will receive." The 42 CFR Part 2 substance use disorder language is appropriately included. However, the form does not explicitly distinguish between patient self-access and third-party release scenarios — a patient requesting their own records fills out the same form in the same way.

**Organization:** The flow is logical: patient identity → from/to routing → record types → purpose/format → legal disclosures → signature → representative section. The representative section is clearly marked as conditional: "Complete the section below only if the person requesting records is not the patient."

**Record type granularity:** 16 checkbox categories are offered: History and Physical, Operative Report(s), Discharge Summary, Behavioral Health, Problem List, Medication List, Clinic/Office Notes, Substance Use Disorder, Emergency Room Record, Radiology Reports, Lab/Pathology Reports, STD/HIV/AIDS Treatment(s) or Test(s), Billing Records, Radiology Images, Genetic Testing, and Other. This is a strong level of granularity for patient control over what is released.

**Facility selection:** Four facilities are listed with checkboxes (UF Health Shands Hospital, Rehab Hospital, Psychiatric Hospital, Florida Recovery Center), plus UF Health Clinics with a write-in for specific clinic, and UF Health Shands HomeCare with a separate address/fax.

**Submission instructions:** Clearly printed on the form: "UF Health HIM Dept – ROI, P.O. Box 100348, Gainesville, FL 32610-0348, Phone: 352.594.0909, Fax: 352.265.1098." Mail and fax are the explicit submission channels.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a **dual-purpose** document. There is no separate form or pathway optimized specifically for patients requesting their own records under HIPAA's Right of Access. The "To the facility / person below" section includes a "Check here if same as patient" checkbox, which is the only accommodation for self-request. A patient requesting their own records must still navigate the full from/to routing logic designed for third-party releases.

**Scope options:** Strong. Patients can specify record types (16 checkboxes), date ranges ("Are there specific dates needed?"), and appointment relevance ("Is this needed for a doctor's appointment?"). This gives patients meaningful control over the scope of their request.

**Format options:** Three format options are offered: "MyUFHealth (UF Health Portal)," "CD," and "Paper." The inclusion of the patient portal as a delivery option is notable. However, there is no email delivery option — the older form-1 offered a web portal option with email notification via HealthPort, which appears to have been simplified in form-2.

**Purpose options:** Treatment/Continued Care, Payment/Billing, Personal Use, Legal, and Other. "Personal Use" is a positive inclusion for patient access.

**Right of Access language:** The form does **not** reference HIPAA § 164.524 or explicitly frame the request as exercising a Right of Access. It uses the broader "authorization" framework (more appropriate for third-party releases) rather than a "request for access" framework.

**EHI Export awareness:** None. No mention of electronic health information export, bulk data, or TEFCA.

---

## 6. COMPLIANCE

**Fee disclosure:** The form states: "I may be charged a fee for this request as allowed by law, which may include up to $1.00 per page (plus applicable tax and handling) for Paper Records and fees associated with labor, supplies (i.e. cost of a computer disk), and postage for Electronic Records." Fees are waived for treatment purposes. The $1.00/page fee language is appropriate for third-party releases under Florida law but may exceed HIPAA's "reasonable, cost-based fee" limit for patient self-access requests under 45 CFR § 164.524(c)(4), which limits fees to the cost of copying, not a per-page rate.

**Authorization expiration:** One year, which is reasonable. Patients are informed they can revoke at any time in writing.

**Revocation process:** Requires written revocation to the HIM Department — this is standard.

**No unreasonable barriers:** No notarization requirement, no in-person-only submission, no requirement for witness signatures. Mail and fax submission are available.

**Identity verification:** The form includes "Verification of Identity" and "Verification of Authority" fields, but they are marked "(Internal use only)" — so patients are not burdened with these requirements on their end.

**Sensitive information consent:** The form includes explicit checkboxes for Behavioral Health, Substance Use Disorder, STD/HIV/AIDS, and Genetic Testing, with appropriate 42 CFR Part 2 language. This is proper separate-consent handling for sensitive categories.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee language may exceed HIPAA patient-access limits.** The form states "up to $1.00 per page (plus applicable tax and handling) for Paper Records," which is a flat per-page rate. For patient self-access requests under 45 CFR § 164.524(c)(4), HIPAA limits fees to a "reasonable, cost-based fee" that covers only the cost of copying. The $1.00/page rate (which may be appropriate for third-party releases under Florida law) is presented without distinguishing between patient-access and third-party-release fee structures.

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release.** The form uses the "authorization" framework throughout, which is technically the wrong HIPAA mechanism for a patient requesting their own records (which should be a "request for access" under § 164.524, not an "authorization" under § 164.508). A patient might reasonably be confused about whether this is the right form to request their own records.
- **"Check here if same as patient" is the only self-access accommodation.** The checkbox in the "To" field is easy to miss and does not alter the form's overall third-party-release framing.

### ❌ ERRORS

- **Checkbox rendering artifacts.** All checkboxes appear as the letter "h" in the extracted text layer (e.g., "h UF Health Shands Hospital," "h History and Physical"). This is a font-mapping issue — the PDF uses a checkbox font that maps to "h" in the Unicode text layer. While visually correct when rendered, this degrades accessibility for screen readers and text extraction tools.

### ✨ BRIGHT SPOTS

- **MyUFHealth portal as a delivery format.** Offering delivery via the patient portal is a forward-looking option that many organizations lack. This enables electronic access without the security concerns of email delivery.
- **Granular record-type checkboxes.** Sixteen distinct record categories give patients meaningful control over what information is released, including separate sensitive-information categories with appropriate legal disclosures.
- **"Personal Use" as an explicit purpose option.** This validates patient self-access as a legitimate use case, even though the form's overall framing is authorization-based.
- **Compact single-page design.** Fitting a complete, functional authorization form onto one page reduces patient burden compared to multi-page forms found at other organizations.
- **Identity verification marked "Internal use only."** This avoids burdening patients with documentation requirements at the time of form completion.
