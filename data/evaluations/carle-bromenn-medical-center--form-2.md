# Carle BroMenn Medical Center — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2 is the **Carle Health system-level** general Authorization to Release Protected Health Information (ROI) form. It is titled "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION" with the label "ROI" and carries form number **174-0319**. The HIM department address listed is **3310 Fields South Drive, Champaign, IL 61822** — the main Carle campus in Champaign, as opposed to the BroMenn campus in Normal.

This is one of three forms found for this organization:
- **form-1.pdf**: The CBMC-specific general ROI form (HIM at 1304 Franklin Ave., Normal IL 61761; covers "Carle West Physician Group, Carle BroMenn Medical Center, and Carle Eureka Hospital")
- **form-2.pdf** (this form): The Carle Health system-level general ROI form (Champaign campus)
- **form-3.pdf**: A CBMC-specific behavioral health ROI form (2 pages, specialized consent language)

Form-2 is structurally very similar to form-1 — nearly identical layout, record-type checkboxes, and legal language — but is branded for the Champaign HIM location rather than the Normal/BroMenn location. It serves as the counterpart to form-1 for the broader Carle Health system. Notably, form-2 does **not** include the asterisk footnote listing specific facilities (as form-1 does), suggesting it may be the generic system form while form-1 was customized for the BroMenn/Normal market.

## 2. FINDABILITY

Per the retrieval notes, all forms were found via straightforward web searches such as `"Carle BroMenn Medical Center medical records release form filetype:pdf"`. Form-2 was directly downloadable from a carle.org URL (`carle.org/getmedia/89408b8e-d7b3-475a-805e-cbc67197b137/carle-patient-release-form.pdf`) without any login wall or bot blocking.

The filename `carle-patient-release-form.pdf` is reasonably descriptive. The source URL uses a GUID-based CMS path (`/getmedia/89408b8e-...`), which is not human-readable but is a common CMS pattern. The form was discoverable via multiple search strategies, and retrieval notes characterize the overall difficulty as minimal: "No difficulties encountered. All forms were directly downloadable via curl."

However, a patient arriving at carle.org would need to navigate to the medical records page to find this form. The retrieval notes mention the page at `carle.org/patients-visitors/patient-resources/medical-records`. It's unclear whether a patient at Carle BroMenn Medical Center would know to use this system-level form versus form-1 (the CBMC-specific form), which could create confusion about which form to use.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 66,872 bytes (~65 KB) for a 1-page PDF — reasonable size.
- **Text layer**: Present. The full text is extractable (3,867 characters), confirming this is not a scanned image.
- **Fillable fields**: **Zero** fillable form fields. The form is a flat PDF with no interactive elements. Patients must print and fill by hand.
- **Fonts**: 8 fonts embedded.
- **Images**: 1 embedded image (likely a logo).
- **Scan status**: Not an image-only scan — the form was digitally created.
- **PDF design**: Despite being digitally created (not a scan), the form is designed as a print-and-fill document. The checkbox symbols render as "£" in the extracted text, indicating they are styled characters rather than interactive checkboxes. There is no way to complete this form digitally.

The form is technically a digital-origin document but functionally a print-only artifact. This is a missed opportunity — the digital origin means fillable fields could have been added with minimal effort.

## 4. CONTENT DESIGN

**Length**: 1 page. For the amount of content it contains (patient identification, authorization direction, method of release, record type selection, legal terms, signature block), a single page is impressively compact — but at the cost of density.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient identification (name, other names, last 4 SSN, DOB, MRN)
2. Authorization direction ("To Send to" / "To Request from") with recipient/sender details
3. Method of release (Mail, Pick up at HIM, MyCarle Account)
4. Specific records to be released — split into HOSPITALIZATION and CLINIC/OTHER columns, each with date ranges and detailed checkboxes
5. Purpose of disclosure
6. Legal terms (7 bullet points)
7. Signature block with age/authority rules
8. Staff use section

**Record type granularity**: The form offers extensive record-type checkboxes (~30+ categories across hospitalization and clinic columns), including sub-options like "Reports £ Images" under Cardiology, Pathology, and Radiology. This level of specificity is helpful for targeted requests but may overwhelm patients who just want "all my records."

**Clarity**: The legal section uses formal but mostly comprehensible language. Phrases like "the potential for an unauthorized re-disclosure" and "information may not be protected by federal confidentiality rules" are standard HIPAA authorization language but may not be easily understood by all patients. There is no plain-language summary.

**Layout concerns**: Fitting all this content on one page means the form is quite dense. The extracted text reveals heavy use of tab characters and compressed spacing. The "ATTENTION: This is a legal document" notice is somewhat intimidating as a closer.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose ROI form**, not a patient-access-specific form. It uses "To Send to" / "To Request from" framing, which serves both patients requesting their own records and third-party release scenarios. There is no separate streamlined pathway for a patient simply requesting their own records under HIPAA's Right of Access.

**Scope options**: Patients can specify:
- Date ranges for hospitalization and clinic records separately
- Granular record types (inpatient, consults, labs, radiology, billing, etc.)
- Purpose of disclosure (with examples: "continuing care, insurance claim, legal counsel, etc.")

**Delivery options**: Three options are listed:
- "£Mail"
- "£Pick up at HIM Department (217) 902-6500"
- "£MyCarle Account (Available for 30 days)"

The MyCarle Account option is notable — it suggests electronic delivery through the patient portal, though limited to 30-day availability. However, there is no option for email, fax to patient, or other electronic delivery.

**Right of Access language**: The form explicitly states: "I have the right to inspect and obtain a copy of the records that are to be disclosed (CFR 164.524)." This is a direct reference to the HIPAA Right of Access regulation, which is a positive signal.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

**Submission method**: The form provides no instructions on how to submit it (mailing address, fax number, email for completed forms). Unlike form-1, which lists the BroMenn HIM address and phone, form-2 only lists "Carle - Health Information Management, 3310 Fields South Drive, Champaign, IL 61822" as the authorizing entity, not explicitly as the submission address. This could be confusing for patients.

## 6. COMPLIANCE

**Fees**: The form states "I understand there may be a charge to obtain a copy of these records." It does not disclose specific fee amounts or a fee schedule. This is vague but not impermissible — HIPAA allows reasonable cost-based fees.

**Expiration**: "This authorization will expire on the following date or event: ___. If I do not specify an expiration date or event, this authorization will expire in one year." A 1-year default expiration is standard and reasonable.

**Revocation**: Patients are informed they may revoke at any time via written revocation to HIM. This is standard.

**Conditioning treatment**: The form includes appropriate language that signing is not required for treatment, with the standard exception for information created for a third party's use.

**Sensitive records**: The form notes that records "may include information relating to sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), human immunodeficiency virus (HIV), treatment for alcohol and/or substance abuse, and genetic testing results." It adds: "A separate special authorization must be completed to release mental health records." This carve-out for mental health aligns with form-3's existence (the behavioral health form).

**ID verification**: The "STAFF USE ONLY" section includes "Type of ID Verified," indicating in-person ID verification may be required, though the form itself doesn't explicitly mandate this for all submission methods.

**No notarization required**: The form does not require notarization.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Which form to use?** A patient of Carle BroMenn Medical Center might find both form-1 (CBMC-specific, Normal address) and form-2 (Carle Health system-level, Champaign address) and not know which to submit. There is no guidance on the form itself about when to use this version versus the BroMenn-specific version.
- **Submission instructions missing**: Form-2 does not include a clear "return this form to" instruction. The HIM address appears only as the authorizing entity header. Compare to form-3, which explicitly states "RETURN THIS COMPLETED FORM TO: Carle BroMenn - Health Information Management, 1304 Franklin Ave., Normal IL, 61761."
- **"Mental health" vs. "behavioral health" terminology**: Form-2 says "A separate special authorization must be completed to release mental health records," while form-3 is titled "Authorization to Release Behavioral Health Information." The terminology mismatch could confuse patients about whether these refer to the same carve-out.

### ❌ ERRORS

- **Checkbox rendering**: All checkbox characters render as "£" (pound sign) in extracted text, suggesting a font-mapping issue. While this is likely a display artifact from a custom checkbox font, it means the form text is not fully accessible to screen readers or text extraction tools.

### ✨ BRIGHT SPOTS

- **MyCarle Account delivery option**: Offering electronic delivery through the patient portal — even with the 30-day limitation — is a step above many facilities that offer only mail or in-person pickup.
- **CFR 164.524 citation**: Explicitly citing the HIPAA Right of Access regulation is a transparency measure many forms omit.
- **Granular record selection**: The extensive checkbox list for record types (hospitalization vs. clinic, with sub-categories for reports vs. images) gives patients meaningful control over what is released, rather than forcing an all-or-nothing request.
