# Mercy General Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Title**: "Authorization for Use or Disclosure of Protected Health Information"
**Form ID**: SPSSSA20014 (11/22) SPS.INDD — reference "9.803 Form General Authorization for California"
**Pages**: 2 | **File size**: 344,720 bytes | **Fillable fields**: 42

This is a **general third-party release/authorization form**, not a patient access form. It authorizes Dignity Health Sacramento facilities to disclose PHI to a specified recipient ("TO DISCLOSE TO:"). It is designed for releasing records *to others*, not for a patient requesting their own records.

Mercy General Hospital has three forms available. Form-1 is the general authorization; form-2 is a patient access form specific to Mercy Medical Group (the affiliated physician practice); and form-3 is a hospital-level patient access form ("Patient's Request For Access To Protected Health Information," SPSSSA20015). Form-1 is the only one of the three that is a third-party release authorization. The form lists six facilities by abbreviation (MGH, MHF, MSJ, MTH, SNM, WMH), confirming it is a shared Dignity Health Sacramento form, not specific to Mercy General Hospital alone.

## 2. FINDABILITY

Per the retrieval notes, the form was found via a straightforward web search (`Mercy General Hospital Sacramento "authorization" "release" "health information" form PDF`) and is linked from the Dignity Health Sacramento medical records page at `https://www.dignityhealth.org/sacramento/patients-and-visitors/for-patients/medical-record-requests`. The source URL is descriptive:
`https://www.dignityhealth.org/content/dam/dignity-health/sacramento/pdfs/Use-and-Disclosure-General-Authorization-PHI.pdf`

Retrieval difficulty was rated **easy**. The filename clearly identifies the document's purpose. However, a patient seeking to request their *own* records would first encounter this general authorization form alongside the actual patient access forms — potentially causing confusion about which form to use. The medical records landing page apparently does not clearly distinguish between the two use cases.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present — full text is extractable (4,472 characters). No OCR issues aside from garbled Unicode artifacts in some fillable field placeholders (e.g., `\b����������������������` for the Date of Birth field).

**Fillable fields**: The form has **42 fillable fields**, which is notably high for a 2-page form. Field names were not captured (`fillable_field_names: []`), but the text shows structured fields for patient demographics, facility name, recipient information, record type checkboxes, and date ranges. This is a genuinely interactive PDF — a patient could complete it digitally without printing.

**File format**: 344 KB for a 2-page document with no embedded images is somewhat large, suggesting complex form field definitions or font embedding (15 fonts). Not unreasonable but heavier than necessary.

**Digital-first design**: Yes — this was clearly designed as a digital PDF form, not a scan. It has structured fillable fields, checkboxes, and consistent formatting. The "Place Patient Label Here" box and the `*ROI*` marker suggest it is also used as a print form within hospital registration workflows, but the digital version is fully functional.

## 4. CONTENT DESIGN

**Length**: 2 pages — appropriate for a general authorization form covering multiple record types and special categories.

**Clarity**: The form opens with a clear statement: "Completion of this document authorizes the disclosure and/or use of health information about you." The warning "Failure to provide all information requested may invalidate this authorization" is direct, though somewhat threatening in tone.

**Organization**: Page 1 covers patient identification, the authorizing/receiving parties, date range, and record type selection. Page 2 covers purpose, expiration, patient rights, and signature. This is a logical flow. Record type checkboxes are clearly laid out with options including:
- Mental health/developmental disability records
- Substance abuse treatment records
- HIV test results (with a helpful note: "your records may include information concerning your HIV status even if you do not initial this line")
- Specific clinical record types (Consultation Reports, H&P, Progress Notes, Discharge Summary, Lab, X-ray, ER Reports, Procedure Reports)
- "ALL RECORDS" option
- Itemized billing records

**Patient Rights section**: The "MY RIGHTS" section on page 2 is well-structured with bullet points covering:
- Right to refuse without consequence
- Right to revoke in writing (with specific mailing address provided)
- Right to receive a copy of the authorization

**Readability**: Language is predominantly legal/clinical but reasonably accessible. The substance abuse re-disclosure notice at the bottom of page 2 is dense federal regulatory language (42 C.F.R. part 2), which is required but may intimidate patients.

**Visual hierarchy**: Section headers are clearly distinguished. Checkbox items use consistent formatting. The footer includes facility selection checkboxes (MGH through WMH) and page numbering.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is explicitly a **third-party release** authorization. It asks "TO DISCLOSE TO:" a named recipient. It is *not* designed for a patient requesting their own records. However, the purpose section does include "At the request of the patient or personal representative" as an option, which blurs the line — a patient could technically use this form to have records sent to themselves, though that would be an awkward workaround when dedicated patient access forms (form-2, form-3) exist.

**Scope options**: Good granularity — patients can select specific record types, specify date ranges, or request all records. Sensitive categories (mental health, substance abuse, HIV) require separate initials, consistent with California law.

**Format/delivery options**: None specified on this form. It authorizes disclosure but does not offer the patient a choice of delivery format (paper, electronic, etc.). The recipient address field implies mailed or delivered records.

**Right of Access language**: The form references HIPAA indirectly through the "federal confidentiality law (HIPAA)" mention in the re-disclosure notice, but does not cite 45 CFR § 164.524 or explicitly reference the patient's HIPAA Right of Access. This is expected — it is an authorization form, not an access request form.

**EHI Export**: No mention of electronic health information export or bulk data access.

## 6. COMPLIANCE

**Expiration**: "This authorization will automatically expire one (1) year from the date of execution unless a different end date is specified." One year is a standard and reasonable expiration period.

**Revocation**: Clearly described — must be in writing, with a specific address provided (Health Information Management, 3400 Data Dr. Suite 1064, Rancho Cordova, CA 95670). The requirement for written revocation is standard.

**No treatment conditioning**: The form states: "I may refuse to sign this authorization. My refusal will not affect my ability to obtain treatment or payment or eligibility for benefits." This is HIPAA-compliant language.

**Re-disclosure warning**: Includes both HIPAA and 42 C.F.R. Part 2 re-disclosure notices, which is appropriate for a form covering substance abuse records.

**No unreasonable barriers observed**: The form does not require notarization, does not mandate in-person submission, and does not disclose fees (fees are not applicable to this type of authorization). No consent bundling beyond the standard record type selections.

**Psychotherapy notes**: The form correctly notes: "A separate authorization is required for the use or disclosure of psychotherapy notes or research health information," consistent with HIPAA's distinct treatment of psychotherapy notes.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Form selection confusion**: A patient visiting the Dignity Health Sacramento medical records page will find this general authorization alongside two separate patient access forms (form-2 for medical group, form-3 for hospital). The distinction between "authorization for disclosure" and "request for access" is not self-evident to most patients. A patient wanting their own records might mistakenly complete this third-party release form instead of the appropriate access request form.

- **Garbled field placeholders**: The extracted text shows Unicode artifacts in fillable field areas (e.g., `\b����������������������` for Date of Birth). While this may be a metadata extraction artifact rather than a rendering issue, it suggests the form fields may not display placeholder text cleanly in all PDF viewers.

### ✨ BRIGHT SPOTS

- **42 fillable fields on a 2-page form**: This is a notably high level of digital interactivity. The form can be completed entirely on-screen, which is uncommon for healthcare authorization forms.

- **Sensitive record protections**: The handling of mental health, substance abuse, and HIV records is well-structured — each requires a separate initial, and the HIV checkbox includes a helpful explanatory note about indirect disclosure: "your records may include information concerning your HIV status even if you do not initial this line."

- **Clear rights statement**: The "MY RIGHTS" section is concise, uses bullet points, and provides a specific mailing address for revocation — better than many authorization forms that leave the revocation process vague.

- **Multi-facility coverage**: The single form serves six Dignity Health Sacramento facilities, reducing the burden on patients who have received care at multiple locations.
