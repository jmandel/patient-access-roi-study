# UAB Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **"Hospital Patient Access / Authorization for Use or Disclosure of Patient Information"** form specific to **UAB Hospital–Callahan Eye**, a specialty eye hospital affiliated with UAB Medicine. It is a 3-page PDF (108 KB), approved 7/25/2025, with extractable text and 16 fonts but **zero fillable fields** and 36 embedded images.

UAB Hospital provides three distinct forms: form-1.pdf is the general UAB Medicine patient self-access form (2 pages, 51 fillable fields); form-2.pdf (this document) is the Callahan Eye Hospital variant; and form-3.pdf is a third-party authorization form. This form serves the same function as form-1 but is tailored to the Callahan Eye Hospital sub-facility. Notably, it includes an option to request "Both UAB Hospital – Callahan Eye Records and UAB Health System Records," bridging the two entities.

## 2. FINDABILITY

Per the retrieval notes, this form was found via direct web search and is linked from UAB Medicine's medical records request page at `https://www.uabmedicine.org/pay-your-bill/medical-records-request/`. The source URL (`https://www.uabmedicine.org/wp-content/uploads/sites/3/2024/12/Callahan-Hospital-Patient-Medical-Records-Request_12.18.2024.pdf`) is descriptive and clearly identifies the document. The filename includes the hospital name and a date stamp (12.18.2024). The main medical records page reportedly distinguishes between patient self-access and third-party release, with separate download links — a good organizational choice. However, a patient seeking Callahan Eye records specifically must identify the correct form variant, which adds a layer of navigation complexity compared to a single unified form.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and clean — full text extraction yields 4,440 characters of well-formed content with no garbled characters (unlike form-3's CID encoding issues).
- **Fillable fields**: **Zero** fillable form fields, despite the form clearly containing many blanks for patient name, date of birth, address, phone, checkboxes, etc. This is a flat PDF — patients must print and hand-fill it. This is a significant regression from form-1, which has 51 fillable fields for the same type of information.
- **File size**: 108 KB for 3 pages is reasonable, though 36 embedded images is unexpectedly high for what appears to be a text-heavy form, suggesting the form may use images for logos, checkboxes, or other design elements rather than native PDF form objects.
- **Digital-first design**: No. The lack of fillable fields and the instruction to "please print" in the patient information section indicate this is designed as a print-and-fill document. The form must be printed, completed by hand, and returned by mail or fax.

## 4. CONTENT DESIGN

**Length**: 3 pages — slightly longer than form-1's 2 pages despite offering less content (2 record packages vs. 5). Page 1 covers patient info, recipient, date range, record scope, and delivery method. Page 2 covers supplemental record type checkboxes. Page 3 covers patient acknowledgment statements and signature.

**Clarity**: The language is generally clear but uses a legalistic opening: *"I hereby authorize the use or disclosure of my protected health information ("PHI") as described below."* The form front-loads legal consent language before the patient even fills in their name, which is an unusual ordering choice. The acknowledgment statements on page 3 require the patient to initial each of three statements, which adds complexity.

**Organization**: The form follows a logical flow (patient info → recipient → records scope → delivery → acknowledgments → signature), but the split across 3 pages feels stretched. The record package selection and supplemental checkboxes are on separate pages when they could be combined.

**Record packages**: Only 2 packages are offered:
- "Package 1 - Key Clinical Notes: Current History and Physical, Discharge Summary, Operative and/or Procedure Reports, Laser Center provider documentation, Lions Eye Clinic provider documentation and Emergency Department provider documentation"
- "Package 2 - Entire Hospital Medical Record"

This is simpler than form-1's 5-tier package system, which may reflect the narrower scope of an eye hospital.

**Delivery options**: Identical to form-1 — paper (mail or pickup), fax, CD, and email. The electronic delivery notice is included: *"UAB Hospital-Callahan Eye is not responsible for the privacy and security of the electronic records on the CD or in an email once they are received by the intended recipient."*

## 5. PATIENT-CENTEREDNESS

**Patient access framing**: The form title includes "Hospital Patient Access" alongside "Authorization for Use or Disclosure," which is a dual-purpose framing. The form allows the patient to indicate records should go to *"me for my personal use"* or to a third party. However, unlike form-1, this form does **not** include a statement recognizing the patient's right to access their own PHI (form-1 opens with "UAB Medicine recognizes a patient's right to access their own protected health information"). This omission is notable.

**Scope options**: Patients can specify a date range ("From: ___ to ___") or a specific date, with a default of 12 months if no date is provided. They can choose between Callahan Eye-only records or combined Callahan Eye + UAB Health System records. Supplemental record types include operative/procedure reports, billing records, medication list, laser center documentation, emergency department documentation, discharge summary, Lions Eye Clinic notes, and an "other" field.

**Sensitive records**: The form includes drug/alcohol and psychiatric records by default: *"This request includes any information relating to drug, alcohol use/treatment, communications with psychiatrists or psychologists, and records pertaining to sexually transmitted diseases."* Unlike form-1, there is **no opt-in/opt-out checkbox** for these sensitive categories — they are automatically included. This reduces patient granularity over sensitive information.

**Expiration**: The authorization includes a patient-specified expiration date, with a default of six months: *"If I fail to specify an expiration date or event, this Authorization will expire six months from the date on which it was signed."*

**Submission**: Return by mail or fax to UAB Hospital-Callahan Eye Release of Information Office, 1720 University Boulevard, Birmingham, AL 35233. Phone: 205-325-8390, Fax: 205-325-8682. No electronic submission option.

## 6. COMPLIANCE

**Authorization conditioning**: The form includes a proper statement that UAB may not condition treatment on signing the authorization, with the three HIPAA-recognized exceptions (research, health plan enrollment, third-party-requested treatment). This is standard.

**Revocation rights**: The form includes proper revocation language: *"I understand that I may revoke this Authorization at any time by notifying the entity privacy coordinator in writing."*

**No mention of fees**: The form does not reference any fees or costs for record retrieval.

**No mention of turnaround time**: The form does not state how long record fulfillment will take.

**Initialing requirement**: The acknowledgment section on page 3 requires the patient to initial each of three separate statements. While not a HIPAA violation, this adds procedural friction beyond a simple signature.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No fillable fields (0 of ~20+ expected)**: While form-1 has 51 fillable fields, this Callahan Eye variant has zero, forcing patients to print, hand-fill, and physically return the form. This creates a significant accessibility barrier, especially for patients with visual impairments seeking records from an *eye hospital*.

### ⚠️ AMBIGUITIES
- **Dual-purpose form without clear differentiation**: The form title says "Hospital Patient Access / Authorization for Use or Disclosure" and allows both self-access and third-party release on the same form, but the acknowledgment language on page 3 (conditioning of treatment, revocation) is standard authorization language that applies to third-party releases. It's unclear whether the conditioning/revocation provisions are relevant when a patient is simply requesting their own records under the Right of Access.
- **Sensitive records auto-included**: The form states sensitive records (drug/alcohol, psychiatric, STD) are automatically included with no opt-out. Form-1 provides a Yes/No checkbox for this. A patient might not realize these records will be disclosed, especially if sending to a third party.

### ❌ ERRORS
- **Page numbering error**: Page 3 is labeled "Page 3/2" — the denominator should be 3, not 2. Similarly, pages 1 and 2 are labeled "Page 1/2" and "Page 2/2" respectively, suggesting the third page was added after the original 2-page form without updating pagination. This is a clear formatting defect.

### ✨ BRIGHT SPOTS
- **Cross-system records option**: The ability to request "Both UAB Hospital – Callahan Eye Records and UAB Health System Records" with a single form is a patient-friendly convenience that avoids requiring separate forms for affiliated facilities.
- **Provider-to-provider shortcut**: The checkbox "Please check here if your records are going to another provider. They will be provided the Continuity of Care / Treatment package" streamlines a common use case.
- **Electronic delivery options**: Despite the form not being fillable, it does offer multiple electronic delivery methods (email, CD, fax) with an appropriate encryption notice.
