# Barnes-Jewish Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **individual patient access form** titled "REQUEST FOR ACCESS TO PROTECTED HEALTH INFORMATION BY INDIVIDUAL PATIENTS." It is specifically designed for patients requesting their own records — distinct from the general third-party release form (form-2.pdf, "Authorization For Release Of Information"). The organization provides separate forms for each use case, which is unusual and noteworthy.

Form-1 is a single-page document (1,930 characters of extracted text, 170 KB file size), version-stamped "BJH-NMR-2731 (05/24/22) Page 1 of 1." Form-2, by contrast, is a 2-page general ROI authorization last revised 10/28/10. The patient-access form is significantly more recent and more concise.

## 2. FINDABILITY

The form was easy to locate. The official Barnes-Jewish Hospital website has a dedicated "Medical Records Requests" page at `https://www.barnesjewish.org/Patients-Visitors/Medical-Records-Requests` that clearly categorizes request types (individual, third-party, next of kin, amendments) and provides direct PDF download links. No login, portal, or intermediary steps are required.

The source URL (`https://www.barnesjewish.org/Portals/0/PDF-Files/BJH_Individual_Authorization_Form.pdf`) has a descriptive filename. The retrieval notes indicate "None significant" difficulties were encountered. The search process confirms the form appeared via standard web searches for Barnes-Jewish Hospital authorization/release forms.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable. Not an image-only scan.
- **Fillable fields**: **Zero fillable fields** (`fillable_field_count: 0`). Despite having a text layer, the form has no interactive form fields. Patients must print and fill by hand, or use PDF annotation tools.
- **File size**: 170,447 bytes for a single page — somewhat large, likely due to an embedded image (1 embedded image, possibly a logo or header graphic).
- **Font count**: 4 fonts used — reasonable for a single-page document.
- **Digital-first design**: No. The form is a flat PDF without interactive elements. The presence of checkbox characters (rendered as `\u0007` in text extraction) suggests designed-for-print checkboxes rather than interactive fields. This is a digitized paper form, not a digital-first document.

## 4. CONTENT DESIGN

**Length**: A single page — admirably concise for an ROI form. Everything fits on one page without appearing cramped based on the text volume.

**Record type options**: The form offers 20 specific record type checkboxes:
- Abstract (includes all * documents), X-Ray Report*, Emergency Report*, Mammogram Report*, Discharge Summary*, Cardiac Cath Lab Reports*, History & Physical*, EKG, Progress Notes*, Medication Report, Consults*, Advanced Directive, Operative Report*, Expiration Documents, Pathology Report*, Laboratory (specify), X-Ray Films, Itemized Billing Statement, Cardiac Cath Lab Cine Film, Good Faith Estimate, Mammogram Film, Other (specify)

The asterisk system groups documents under the "Abstract" option — a helpful shortcut for patients who want a comprehensive record without checking every box.

**Patient identification fields**: Name, Date of Birth, Social Security # (or last 4 digits), Address, Phone (Home and Cell).

**Delivery options**: The form offers three delivery mechanisms:
1. Mail to patient's address on file
2. Mail to another address (specified below)
3. Electronic delivery — "Would you like records sent electronically (if possible) to yourself or a designated individual?" with an email address field

**Organization**: Logical flow from patient identification → record selection → date range → delivery preferences → signature → processing information.

**Language clarity**: The processing section is written in plain, accessible language: "You may be charged a fee for the copying of requested health information. This fee will be based on the cost of the labor and supplies involved in copying the requested health information and the postage for mailing the copies to you."

## 5. PATIENT-CENTEREDNESS

**Patient-access specific**: This form is explicitly and exclusively for individual patients requesting their own records. The title makes this unambiguous: "REQUEST FOR ACCESS TO PROTECTED HEALTH INFORMATION BY INDIVIDUAL PATIENTS." This is a best practice — patients are not forced to use a generic third-party release form for self-access.

**Scope options**: Excellent. Patients can select specific record types from 20 options, specify dates of treatment, and use the "Abstract" option for comprehensive records. A write-in "Other (specify)" and "Laboratory (specify)" option provides flexibility.

**Format options**: The form explicitly offers electronic delivery with an email field, though qualified with "(if possible)." This is a positive feature, though the caveat introduces some ambiguity about when electronic delivery is or isn't possible.

**Right of Access language**: The title frames this as an "access" request, aligning with HIPAA § 164.524 terminology. However, the form does not explicitly cite HIPAA or explain patient rights to access their records.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or patient portal alternatives.

**Response time**: The form states "Response to your request for health information will be within 30 days of receipt of your request," which aligns with the HIPAA-mandated timeline. It also notes the possibility of an extension: "If we require additional time to respond to your request, we will contact you to inform you of this extension of time."

## 6. COMPLIANCE

**Fee disclosure**: The form states fees will be "based on the cost of the labor and supplies involved in copying the requested health information and the postage for mailing the copies to you." This is consistent with HIPAA's cost-based fee limitation for patient access requests, though no specific fee schedule or estimate is provided.

**Social Security Number**: The form requests "Social Security # (or last 4 digits)." Requesting a full SSN is notable — while offering the "last 4 digits" alternative softens this, the fact that a full SSN is the primary ask could be seen as collecting more information than necessary for record identification (a medical record number would suffice).

**No notarization or witness requirement**: The form requires only a patient signature and date — no witness, notarization, or other formalities.

**No in-person submission requirement**: The form header provides both phone and fax numbers, and the processing section mentions mailing or picking up records, implying the form can be submitted by mail or fax.

**No expiration clause**: Unlike form-2 (which expires 90 days from signing), this patient-access form contains no expiration or auto-revocation language. This is appropriate — a patient's request to access their own records should not auto-expire.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Dedicated patient-access form**: Having a separate form specifically for individual patients requesting their own records (distinct from the third-party release form) is a best practice that few organizations implement. It simplifies the patient experience and avoids confusing third-party authorization language.
- **Electronic delivery option**: Explicitly offering email delivery with a dedicated field is forward-thinking for a form revised in 2022.
- **Abstract shortcut**: The "Abstract (includes all * documents)" checkbox with asterisk-marked items is clever — patients who want everything can check one box instead of 13.
- **Single-page design**: Accomplishing a complete patient access request on a single page is impressive and reduces patient burden.

### ⚠️ AMBIGUITIES
- **Electronic delivery caveat**: The phrase "sent electronically (if possible)" is vague — patients have no way to know in advance whether their request will qualify for electronic delivery or what circumstances might make it "not possible."
- **Fee uncertainty**: While the form mentions potential fees, it provides no fee schedule, estimate range, or reference to where patients can learn about costs before committing.

### 🚩 RED FLAGS
- **SSN collection**: Requesting a full Social Security Number (even with "or last 4 digits" as an alternative) for a patient access request is unnecessary and raises privacy concerns. A medical record number or date of birth should suffice for patient identification. This practice collects sensitive PII beyond what is needed.

### ❌ ERRORS
- **No fillable fields**: Despite being revised in 2022, the form has zero interactive PDF fields. A form created or updated that recently should have fillable fields as a basic digital accessibility expectation.
