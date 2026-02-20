# Evaluation: Mercy General Hospital — form-2.pdf

**Organization**: Mercy General Hospital (Sacramento, CA)
**Document**: form-2.pdf — "Patient's Request for Access to Protected Health Information"
**Source URL**: https://www.dignityhealth.org/content/dam/dignity-health/pdfs/medical-groups/sac-patient-access-request-form.pdf
**Revision date**: 09/17/2019
**Evaluated**: 2026-02-19

---

## 1. DOCUMENT IDENTIFICATION

This is a **patient access request form** specifically for **Mercy Medical Group**, the physician/medical group practice affiliated with Dignity Health Sacramento. The title reads "PATIENT'S REQUEST FOR ACCESS TO PROTECTED HEALTH INFORMATION," and the form header identifies it as "A Service of Dignity Health Medical Foundation / Mercy Medical Group / Release of Medical Information Department."

This is one of three forms found for the Mercy General Hospital ecosystem:

- **form-1.pdf**: A general third-party authorization form ("Authorization for Use or Disclosure of PHI") used across all six Dignity Health Sacramento facilities (MGH, MHF, MSJ, MTH, SNM, WMH). This is for releasing records *to others*, not for patient self-access.
- **form-2.pdf** (this document): A patient access form specific to the **medical group** (Mercy Medical Group — the outpatient/physician practice side).
- **form-3.pdf**: A patient access form specific to the **hospital** (Dignity Health Sacramento facilities).

The existence of separate patient access forms for the hospital vs. the medical group means a patient who received both inpatient and outpatient care would need to submit *two different forms* to *two different departments* to get their complete records. The form explicitly states its scope: "health information about you maintained by Mercy Medical Group," distinguishing it from hospital records.

---

## 2. FINDABILITY

Per the retrieval notes, this form was found via web search (`Mercy General Hospital Sacramento "authorization" "release" "health information" form PDF`) and is linked from the Dignity Health Sacramento medical records page at https://www.dignityhealth.org/sacramento/patients-and-visitors/for-patients/medical-record-requests. Retrieval difficulty was rated **easy**.

The form URL (`/content/dam/dignity-health/pdfs/medical-groups/sac-patient-access-request-form.pdf`) lives in a content delivery path, not a patient-facing navigation path, which is typical. However, the filename `sac-patient-access-request-form.pdf` is reasonably descriptive. A patient searching specifically for "Mercy Medical Group medical records" would likely find the medical records landing page, which links to multiple forms. The challenge is that a patient who goes to Mercy General Hospital's website may not realize they also need the *medical group* form for outpatient records — the dual-track system is inherently confusing.

The form provides direct contact information at the top: a phone number (916-363-4040), fax (916-366-3662), and email (GSSA-ROI@Dignityhealth.org), which is helpful for patients who have questions about the process.

---

## 3. TECHNICAL ACCESSIBILITY

| Attribute | Value |
|---|---|
| File size | 155,999 bytes (156 KB) |
| Pages | 2 |
| Text layer | Yes |
| Fillable fields | **0** |
| Fonts | 8 |
| Embedded images | 2 |
| Image-only scan | No |

The form has a text layer (extractable text, 4,155 characters), so it is not a scan. However, it has **zero fillable form fields**, meaning a patient cannot type into the PDF — they must print it, fill it by hand, and then scan/fax/mail it back. This is a significant gap, especially since the companion general authorization form (form-1.pdf) *does* have 42 fillable fields. The inconsistency suggests different departments or vendors created these forms without coordination.

The file size (156 KB for a 2-page text-based form with 2 embedded images) is reasonable. The form was clearly designed digitally (not a scan of a paper form), but it was designed as a **print-and-fill** document rather than a digital-first artifact. The blank lines for handwritten entries (e.g., `Name of Patient:_________________________________`) confirm this print-oriented design.

---

## 4. CONTENT DESIGN

**Length**: 2 pages — appropriate for the content covered (patient identification, delivery preferences, record type selection, sensitive records, and signature).

**Structure**: The form is organized into identifiable sections:
1. Header with contact information
2. Patient demographics (name, DOB, aliases, MRN, address, phone)
3. Delivery method selection (mail, pick up, email, flash drive, fax)
4. Section A: Access type (copy, inspect and copy, inspect only)
5. Section B: Summary option
6. Section C: Record type selection with date/type fields and checkboxes
7. Sensitive records section (HIV, psychiatric) with initial lines
8. Processing notice and authorization scope statement
9. Signature block with ID verification

**Clarity**: The language is reasonably clear but mixes plain instructions with legalistic phrasing. The opening instruction "To enable us to process your request, please read the following carefully and complete the requested information below" is straightforward. However, the sensitive records section uses dense language: "The following classes of information are protected by special privacy laws and access may be subject to special rules or may be restricted under certain circumstances, or access may require consultation with your physician or healthcare provider responsible for your care before release."

**Checkboxes and fields**: The record type section offers checkboxes for: Clinic Notes, Consultations, EKG results, Radiology Reports, Lab Reports, and OTHER. There is also an option for "All health information pertaining to any medical history, physical condition, and treatment received EXCEPT (optional)." Date and type of treatment fields are provided for scoping requests.

**Font/readability**: With 8 fonts and a text layer, the form appears to use reasonable typography. The text extracted cleanly, suggesting adequate font sizes and clear formatting.

---

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This is explicitly a patient access form, titled "Patient's Request for Access to Protected Health Information." The form clearly states: "This request for access will not require Mercy Medical Group to provide health information about you to anyone other than to your personal representative." It also distinguishes itself from the third-party authorization: "If you request us to disclose health records or information about you to some other person or entity, we would need a signed authorization (different form) from you."

**Delivery options**: The form offers five delivery methods:
- Mail to patient's address
- Pick up in person
- Have someone else pick up (with relationship field)
- Email (address field provided)
- Flash drive
- Fax ("Must be a secure line")

This is a **strong set of delivery options**, particularly the inclusion of email and flash drive alongside traditional mail and pickup.

**Access types**: Section A offers three options — copy only, inspect and copy, or inspect only — which aligns with HIPAA's Right of Access provisions that include the right to inspect records.

**Fee disclosure**: The form mentions fees twice: "There may be fees associated with your request. The manner in which you access your information may determine the amount of such fees" and "Copy only (fees will apply)" vs. "Inspect and copy (fees may apply)" vs. "Inspect only" (no fee mention). The form does not specify actual fee amounts, which leaves the patient uncertain about costs.

**Scope options**: Patients can specify dates of treatment, type of treatment, select from specific record categories, or request all records with optional exclusions. This provides good granularity.

**HIPAA Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or use the phrase "Right of Access." It references patient rights implicitly through the access/inspect options but does not educate the patient about their legal entitlement.

**EHI Export / electronic health information**: No mention of EHI export, bulk data, or electronic health information beyond email and flash drive delivery.

---

## 6. COMPLIANCE

**Sensitive records restrictions**: The form requires physician approval before releasing HIV test results ("to be released upon approval of your physician") and caregiver approval for psychiatric records ("to be released upon caregiver's approval"). It also states "Additional form is required" for both HIV and psychiatric records. This creates an extra barrier for patients seeking their own sensitive records. Under California law (Health & Safety Code § 120980 for HIV; Welfare & Institutions Code § 5328 for psychiatric), there are restrictions on *disclosure to third parties*, but a patient's own right of access under HIPAA generally should not require physician approval. The form's language conflates third-party disclosure protections with patient self-access.

**ID verification**: The form states "*** PICTURE I.D. MUST BE PRESENTED ***" in bold at the bottom, and includes a field for "Patient/Representative identification has been verified." This implies in-person ID verification is required, which could conflict with the mail/email/fax submission options listed earlier in the form.

**No notarization requirement**: The form does not require notarization.

**Authorization expiration**: Unlike the general authorization form (form-1.pdf), which includes a 1-year auto-expiration, this patient access form does not mention an expiration period — appropriate since this is a one-time request, not an ongoing authorization.

**Processing timeline**: The form states requests are "processed in the order received" but does not commit to a specific timeline. HIPAA requires a response within 30 days (with one 30-day extension).

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Physician approval required for patient's own HIV and psychiatric records**: The form states HIV results will be released "upon approval of your physician" and psychiatric records "upon caregiver's approval," plus "Additional form is required" for each. HIPAA's Right of Access (45 CFR § 164.524) permits denial of access only in narrow circumstances (e.g., psychotherapy notes, which are distinct from psychiatric care records). Requiring physician approval for a patient's own records access is a potential HIPAA violation that creates an illegitimate barrier.

- **"PICTURE I.D. MUST BE PRESENTED" alongside remote submission options**: The form offers mail, email, fax, and flash drive delivery, yet demands in-person photo ID verification. These requirements are contradictory — a patient submitting by mail or email cannot "present" a picture ID. This may effectively force in-person visits despite ostensibly offering remote options.

### ⚠️ AMBIGUITIES

- **Fee amounts undisclosed**: The form says "fees will apply" or "fees may apply" without specifying amounts. HIPAA limits fees for patient access to reasonable, cost-based amounts, but the patient has no way to estimate costs before submitting the request. The hospital-level form (form-3.pdf) mentions "See attached price list" — this medical group form does not.

- **"Must be a secure line" for fax**: The form requires the fax number to be "a secure line" without defining what qualifies. Most residential fax machines or fax-to-email services would not be considered "secure" by typical HIM standards, potentially negating fax as a viable option.

- **Scope of "Mercy Medical Group" records unclear to patients**: A patient treated at Mercy General Hospital may not understand which of their records are "hospital records" vs. "medical group records," or that they need a separate form for each.

### ❌ ERRORS

- **Outdated revision date**: The form was last revised 09/17/2019 — over 6 years ago. It does not reflect the 21st Century Cures Act information blocking rules (effective April 2021) or current ONC/CMS requirements around electronic health information access.

### ✨ BRIGHT SPOTS

- **Five delivery options including email and flash drive**: Offering mail, pickup, proxy pickup, email, flash drive, and fax gives patients genuine flexibility in how they receive their records. The flash drive option in particular is unusual and accommodates patients who want a portable digital copy.

- **Inspect-only option**: Offering patients the ability to inspect records without copying (and presumably without fees) is a HIPAA requirement that many forms omit. This form explicitly includes it as Section A's third option.

- **Clear separation from third-party authorization**: The form explicitly explains that it is for patient self-access only and directs patients to "a signed authorization (different form)" for third-party disclosures. This avoids the common problem of forms that bundle patient access with third-party release.

- **Direct contact information prominently displayed**: The header includes phone, fax, and email for the Release of Medical Information Department, making it easy for patients to ask questions.
