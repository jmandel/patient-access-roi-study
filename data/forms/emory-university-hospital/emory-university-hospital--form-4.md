# Evaluation: Emory University Hospital — form-4.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Request for Amendment of My Protected Health Information" form (98 KB, dated May 2021 per the source URL: `request-for-amendment-my-protected-health-information-5-2021.pdf`). It is **not** a Release of Information (ROI) authorization form — it is a separate patient rights form that allows patients to request corrections or additions to their medical record under HIPAA § 164.526.

The document has two distinct sections across its two pages:

1. **Page 1 — Amendment Request**: Collects patient identifying information (name, DOB, address, MRN, telephone), the specific entry to be amended (date, type of record, hospital/clinic name), a free-text area for describing the amendment, a patient signature block, and an internal section for the facility to record its approve/deny decision with reasoning.
2. **Page 2 — Authorization for Notification of Amendment**: Allows the patient to list persons or entities who should be notified of any approved changes, with a separate signature and date block.

Within the Emory form suite: form-1.pdf is the current English ROI authorization (revised November 2025), form-2.pdf is the legacy combined ROI package, form-3.pdf is the current Spanish ROI authorization, and this form-4.pdf is the amendment request form. It was found on the same medical records page as the ROI forms but serves a different HIPAA right (right to amend vs. right of access).

## 2. FINDABILITY

According to the retrieval notes, this form was found by navigating to the Emory Healthcare medical records page at `https://www.emoryhealthcare.org/patients-visitors/medical-records`. It was linked alongside the ROI authorization forms, fee sheets, and e-delivery instructions. The medical records page appears to serve as a centralized hub for all patient records-related forms, making this amendment form reasonably findable for patients who locate that page.

The form itself directs patients to "Return to: The appropriate Health Information Management Department for which the amendment is being requested. Please reference facility addresses on our webpage at: https://www.emoryhealthcare.org/patients-visitors/medical-records.html" — providing a clear return path, though the URL uses `.html` which may differ from the current page URL structure.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present (`has_text_layer: true`, `is_image_only_scan: false`). The full text extraction captures 2,958 characters, and unlike forms 1–2 where fillable fields obscured content, the form text is reasonably complete in the extraction. The field labels (patient name, date of birth, address, etc.) are all visible in the plain text.

**Fillable fields**: The metadata reports 39 fillable fields with an empty `fillable_field_names` array. For a 2-page form, 39 fields is a high count, suggesting the form includes interactive text inputs and possibly checkboxes for the approve/deny decision. The presence of fillable fields means patients could complete the form digitally before printing.

**File format**: At 98 KB with 4 embedded images and 7 fonts, this is a lightweight, well-optimized PDF. The 4 embedded images likely include the Emory Healthcare logo and possibly decorative elements.

**Digital-first design**: The form appears to be digitally authored (not a scan) with fillable fields. However, it requires a wet signature — the text reads "___________________________________________ Signature of Patient or Authorized Representative" with an underline-style field, and there is no mention of electronic signature capability. The form must be printed, signed, and physically returned to the appropriate Health Information Management Department.

## 4. CONTENT DESIGN

**Length**: Two pages is appropriate for an amendment request form — concise enough to not overwhelm, with adequate space for the required information.

**Layout**: The form uses a clean, line-based layout with underscored blank fields and clear labels. Page 1 flows logically: patient identification fields at the top, amendment details in the middle, patient signature, then the facility's decision section at the bottom. Page 2 is a standalone notification authorization. However, the text extraction shows the fields as simple underscored lines ("_______________________________________") rather than visually distinct input areas, which may feel dated.

**Clarity**: The form includes a helpful explanatory notice: "Patients may seek to change information in their medical record in order to improve the accuracy or completeness of the information. The original information contained in the record will not be erased or obliterated as a result of any amendment." This plainly explains both the purpose and the limitation of the amendment process (original entries are preserved). The instruction "Please explain how the entry is incorrect or incomplete. What should the entry state in order to be more accurate or complete?" is clear and actionable.

**Guidance**: The form provides only about 4 lines of free-text space for describing the amendment ("Please attach additional pages as necessary" is noted). This is reasonable, though patients may not understand the level of detail needed to support an amendment request.

**Facility identification**: The form asks for "Name of Hospital or Clinic (i.e. Emory University Hospital, The Emory Clinic, etc.)" — the parenthetical examples are helpful for patients who may not know the exact facility name.

## 5. PATIENT-CENTEREDNESS

**Purpose clarity**: The form clearly communicates its purpose — requesting an amendment to the medical record. The NOTICE paragraph explains that original information is preserved, which manages patient expectations about what "amendment" means in a medical records context.

**Notification feature**: Page 2's "Authorization for Notification of Amendment" is a thoughtful addition. It allows patients to designate who should be informed of approved changes — important for patients whose records have been shared with other providers or entities. This aligns with HIPAA § 164.526(d), which requires the covered entity to make reasonable efforts to inform persons the patient identifies.

**Accessibility gaps**: The form provides no alternative language versions for the amendment request (unlike the ROI forms, which have both English and Spanish versions). There is no mention of assistance for patients with disabilities or limited literacy. There is no electronic submission option — the form directs patients to return it to a physical department.

**Response process**: The form includes the facility's approve/deny decision section on the same page as the patient's request, which means the patient will not retain a copy of the facility's decision unless they request one separately. There is no mention of timelines for the facility to respond, nor any reference to the patient's right to submit a statement of disagreement if the amendment is denied (a right under HIPAA § 164.526(d)(2)).

## 6. COMPLIANCE

**HIPAA alignment**: The form addresses the right to amend under HIPAA § 164.526, though it does not cite the specific regulation. The form appropriately:
- Allows patients to request amendments to their records
- Notes that original information is preserved (consistent with HIPAA's requirement that the original entry not be altered)
- Includes a mechanism for the facility to document approval or denial with reasoning

**Missing patient rights information**: The form does not inform patients of several rights that HIPAA guarantees in the amendment context:
- The right to submit a written statement of disagreement if the amendment is denied
- The right to have the amendment request (and any denial) appended to the designated record set
- The 60-day timeline within which the covered entity must act (with a possible 30-day extension)
- The grounds on which an amendment may be denied (e.g., the record was not created by the covered entity, the record is already accurate)

**Submission method**: The form states "Return to: The appropriate Health Information Management Department" and references a webpage for facility addresses. There is no electronic submission option, requiring physical delivery of the form.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **"This request was: Approved / Denied (circle one)"** — This approve/deny section appears on the patient-facing form itself, which is unusual. It is unclear whether the patient receives a copy of this page after the facility makes its decision, or whether this is solely for internal use. The instruction to "circle one" assumes a paper workflow and would not function in the fillable PDF.
- **Return address uncertainty** — The form directs patients to "reference facility addresses on our webpage at: https://www.emoryhealthcare.org/patients-visitors/medical-records.html" rather than listing addresses directly. If the webpage changes or the URL breaks, patients have no fallback for determining where to send the form.

### ❌ ERRORS

- **URL may be outdated** — The form references `https://www.emoryhealthcare.org/patients-visitors/medical-records.html` with a `.html` extension. The retrieval notes reference `https://www.emoryhealthcare.org/patients-visitors/medical-records` (without `.html`). If the `.html` variant no longer resolves, patients following the form's instruction would encounter a dead link.
- **"Circle one" incompatible with fillable PDF** — The instruction "This request was: Approved / Denied (circle one)" assumes a printed paper form, but the document has 39 fillable fields suggesting it is designed for digital completion. Circling is not possible in a PDF form; a checkbox or dropdown would be appropriate for the digital version.

### ✨ BRIGHT SPOTS

- **Clear plain-language explanation of amendment process** — The NOTICE paragraph ("Patients may seek to change information in their medical record in order to improve the accuracy or completeness of the information. The original information contained in the record will not be erased or obliterated as a result of any amendment.") is a concise, patient-friendly explanation that sets realistic expectations. Many amendment forms lack this kind of contextual guidance.
- **Notification authorization on page 2** — Including a mechanism for patients to designate who should be notified of approved amendments is a proactive compliance feature that many organizations omit, and it empowers patients to ensure corrections propagate to downstream recipients of their records.
- **Lightweight, well-structured form** — At 98 KB and 2 pages, this form is appropriately scoped for its purpose. It does not burden the patient with excessive legal language or unnecessary fields.
