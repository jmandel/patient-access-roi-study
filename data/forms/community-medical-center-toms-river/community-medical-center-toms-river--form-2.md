# Evaluation: Community Medical Center (Toms River, NJ) — form-2.pdf

**Document**: form-2.pdf ("Request for Release of Health Information to CMC")
**Source URL**: https://www.rwjbh.org/documents/community-medical-center-/med-records-cmc-to.pdf
**Organization**: Community Medical Center, part of RWJBarnabas Health (RWJBH)
**Facility type**: Community hospital, nonprofit, Northeast, major system affiliation

---

## 1. DOCUMENT IDENTIFICATION

This is a **one-page inbound records request form** — it authorizes an outside provider or facility to release records **to** Community Medical Center, not from CMC to the patient. The title at the top reads "REQUEST FOR RELEASE OF HEALTH INFORMATION TO CMC" and the footer repeats "REQUEST FOR RELEASE OF HEALTH INFORMATION TO CMC" with the form number "CMC 3035." The form is addressed to "Community Medical Center, 99 Highway 37 West, Toms River, New Jersey" and includes a field "I hereby authorize staff of _____ to disclose my health information to: *(Specific Department or Individual)*" — establishing that the patient is directing a third party to send records to CMC.

**Relationship to other forms**: This organization has three downloadable forms. Form-1 is the CMC-specific outbound release ("Authorization to Disclose Health Information from CMC to Patient/Physician/Facility"). Form-3 is the system-wide RWJBH "Authorization to Use or Disclose Protected Health Information," a more modern 3-page document with a text layer (dated Nov 2025). Form-2 is functionally distinct from both — it is not a patient access form at all, but rather a convenience form for requesting that outside records be transferred into CMC for continuity of care.

**This form is not a patient access ROI form.** A patient seeking their own records from CMC would need form-1 or form-3, not form-2.

---

## 2. FINDABILITY

Per the retrieval notes, the CMC medical records page at `rwjbh.org/community-medical-center/patients-visitors/medical-records/` linked directly to this form. The URL (`med-records-cmc-to.pdf`) is reasonably descriptive — "to" signals the inbound direction. Direct web search for CMC authorization forms surfaced the medical records page quickly.

However, presenting an inbound transfer form alongside outbound release forms on the same "Medical Records" page without clear labeling could confuse patients. A patient looking for "release of information" might download this form and fill it out incorrectly, not realizing it serves the opposite purpose. The filename helps distinguish it, but the page context (not the PDF itself) would need to clearly differentiate the two use cases. Since this form is not relevant to a patient trying to access their own records, its presence alongside the patient access form could be a source of confusion.

---

## 3. TECHNICAL ACCESSIBILITY

This document has severe technical accessibility problems:

- **Image-only scan**: `is_image_only_scan: true`, `has_text_layer: false`, `font_count: 0`. The extracted text is empty (just a form feed character). The PDF was created via "PScript5.dll / Acrobat Distiller 7.0" suggesting it was printed to PDF from a word processor and then possibly re-scanned or flattened, destroying the text layer.
- **No fillable fields**: `fillable_field_count: 0`. All blanks (patient name, address, date range, checkboxes for record types) must be completed by hand after printing.
- **Oversized file**: At 413,261 bytes for a single page with no text layer and 3 embedded images, this is bloated — roughly 2.5× larger than form-1 (165 KB, also a single image-only page) and 2× larger than form-3 (201 KB, 3 pages with full text). The metadata notes the page has 180° rotation, which may cause display issues in some viewers.
- **Not digitally accessible**: No screen reader support, no searchability, no copy/paste of text. This is the worst possible outcome for a digital document — a printed form that was scanned or rendered as an image and posted online.

---

## 4. CONTENT DESIGN

Based on the visual rendering of the PDF:

**Layout and structure**: The form fits on a single page and is organized in a logical top-to-bottom flow: patient identification fields → recipient (CMC) address → purpose → date range → record type checkboxes → sensitive information disclosure statement → legal terms → signature block → office use section → footer with branding. The structure is reasonable for a simple form.

**Record type options**: The form offers 12 checkbox categories for information to be disclosed: Emergency Room Record, History & Physical Exam, Operative Reports & Pathology, Discharge Summary, Consultations, Progress Notes, Labs/X-Rays & Tests, Nurses' Notes, Complete Record, Abstract, Billing Information, and Other (with a blank line). This is a good level of granularity.

**Legal text density**: The bottom half of the form is packed with dense legal paragraphs covering sensitive information acknowledgment, prohibition on re-use, revocation rights, expiration (120 days), voluntary nature, and HIPAA reference. The font size appears small (likely 8-9pt) in the legal paragraphs, making readability difficult. There is minimal whitespace between these paragraphs.

**Signature lines**: The form includes spaces for Patient Signature, Legal Representative, Relationship, and Witness — plus a "For Office Use Only" section with ID check, date released, time, and printed name fields.

**Branding**: The footer includes Community Medical Center and RWJBarnabas Health logos, a QR code, and the "Patient Label" area.

---

## 5. PATIENT-CENTEREDNESS

**This form does not serve patient access at all.** It is designed for the reverse scenario — a patient authorizing an outside entity to send records *to* CMC. A patient wanting their own records from CMC would find this form unhelpful and potentially confusing.

- **No electronic delivery options**: Since the form requests inbound records to CMC, delivery options are not applicable from the patient access perspective.
- **No mention of patient right of access**: The form does reference "CFR 164.524" in its legal text, stating "I understand I may inspect or obtain a copy of the information to be used or disclosed, as provided in CFR 164.524." However, this is a general acknowledgment buried in dense legal text, not an affirmative statement of patient rights.
- **No EHI export awareness**: No mention of electronic health information export or bulk data.
- **Contact information**: The form provides a phone number "(732) 557-8132" for contacting the Health Information Management Department with questions.
- **Purpose field**: The form has a blank line for "The information to be disclosed to and used by the above is for the following purpose:" but does not offer pre-defined purpose categories (unlike form-3, which offers checkboxes for Continuing Care, Personal, Insurance, Legal, Other).

---

## 6. COMPLIANCE

- **120-day auto-expiration**: The form states "This authorization will automatically expire 120 days from the date of my signature, unless I otherwise specify that this authorization will terminate on the following date, or concurrently with the following event or condition." This is a shorter default expiration than form-3's 180 days. For an inbound records transfer, 120 days is reasonable, though it could force re-signing if processing is delayed.
- **Revocation rights**: The form includes language about written revocation to HIM, with acknowledgment that it cannot apply retroactively. This is standard.
- **Sensitive information acknowledgment**: Includes explicit notice about alcohol, drugs, genetic testing, behavioral/mental health, reproductive rights, AIDS/HIV, and sexually transmitted diseases — which is appropriate and aligns with state and federal disclosure requirements.
- **Witness line**: The form includes a "WITNESS" signature line, which is unusual and could be perceived as an additional barrier. While not requiring notarization, requiring a witness is more burdensome than standard practice.
- **No fee disclosure**: No mention of fees, which is appropriate for an inbound transfer form (fees would be charged by the sending facility, not CMC).

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness requirement**: The form includes a "WITNESS" signature line with a date field. While it's unclear whether this is mandatory or optional (no instruction text accompanies it), the presence of a witness line creates a perceived barrier. Most standard ROI forms do not require a witness, and HIPAA does not mandate one. This could deter patients from completing the form if they believe they need to find a witness before submitting.

### ⚠️ AMBIGUITIES

- **Easily confused with outbound release form**: The title "REQUEST FOR RELEASE OF HEALTH INFORMATION TO CMC" could be misread by patients as a request for their records from CMC. The critical word "TO" distinguishes this as an inbound transfer form, but patients unfamiliar with HIM workflows may not catch the distinction. Having this form alongside form-1 (outbound release) on the same medical records page without prominent contextual labeling increases the risk of patients using the wrong form.
- **Purpose field is a blank line**: Unlike form-3, which offers checkbox categories for purpose of release (Continuing Care, Personal, Insurance, Legal), this form only provides a blank line. Patients may not know what to write, potentially leading to processing delays or rejection.

### ❌ ERRORS

- **Image-only scan with no text layer**: For a document posted on a major health system's website as a downloadable PDF, the complete absence of a text layer is a significant accessibility defect. The form was apparently created digitally (via PScript5/Acrobat Distiller, not a flatbed scan) yet lost its text layer somewhere in the production process. This means it fails WCAG and Section 508 accessibility requirements.
- **Page rotation issue**: The metadata indicates 180° rotation on the page, which may cause the form to display upside-down in some PDF viewers, requiring manual rotation.
- **Outdated form**: Created in 2015, modified in 2021, but still bearing older formatting and branding compared to the Nov 2025 system-wide form (form-3). The coexistence of this legacy CMC-specific form alongside the modern RWJBH universal form suggests incomplete form consolidation.

### ✨ BRIGHT SPOTS

- **Granular record type checkboxes**: The form provides 12 distinct record type categories, allowing the patient (or provider) to specify exactly what types of records should be transferred. This level of specificity is better than forms that only offer "complete record" as an option.
- **Sensitive information disclosure is comprehensive**: The form explicitly lists all categories of sensitive information (alcohol, drugs, genetic testing, behavioral health, reproductive rights, HIV/AIDS, STDs) that may be included, ensuring informed consent.
