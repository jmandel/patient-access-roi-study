# Evaluation: TriStar Centennial Medical Center — form-1.pdf

## Organization
- **Name**: TriStar Centennial Medical Center (Nashville, TN)
- **Type**: Community hospital, for-profit (HCA Healthcare system)
- **Website**: https://www.tristarhealth.com/locations/tristar-centennial-medical-center

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is the primary English-language **Authorization for Release of PHI (Protected Health Information)**, a standardized HCA Healthcare system form (form number HCA-840-00434, Rev. 09/21). It is a single-page document designed for both patient-initiated requests and third-party releases.

Three forms were found for this organization:
- **form-1.pdf** (this document): English ROI authorization form from the hospital's medical records page, hosted on HCA's Digital Asset Management system (hcadam.com). 1 page, 52 fillable fields.
- **form-2.pdf**: A separate form for Centennial Medical Group (affiliated physician practice), processed through a third-party vendor (Record Reproduction Services). 2 pages, no fillable fields. This is a distinct entity from the hospital.
- **form-3.pdf**: Spanish-language version of form-1 (HCA-840-00434-S), identical structure, also 52 fillable fields.

Form-1 is the primary ROI form for the hospital itself and is the most relevant document for evaluating the patient experience at TriStar Centennial Medical Center.

## 2. FINDABILITY

The form was easy to locate. Per the retrieval notes, a web search for `TriStar Centennial Medical Center "authorization" "release" "health information" form PDF` "immediately found the medical records request page." The form is directly linked from the hospital's medical records page at `https://www.tristarhealth.com/locations/tristar-centennial-medical-center/for-patients/medical-records`, which is accessible through a logical navigation path (For Patients → Medical Records).

The medical records page is described as "well-organized" and "prominently links to the authorization form PDFs." Both English and Spanish versions are available as direct PDF download links. The page also mentions an online portal option (Swellbox) for digital submission and the MyHealthONE patient portal for direct record access.

The URL/filename is not descriptive — it's a DAM hash (`46695a9ba25e4b9aa6376f53cef033ac`) — but this is a minor issue since the page itself clearly labels the links. No bot blocking, JavaScript rendering, or portal login was required to access the form.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. Full text extraction via pdftotext yielded 4,145 characters. No OCR issues or garbled text — extraction is clean and complete.

**Fillable fields**: The form has **52 fillable fields**, which is exceptionally high for a single-page document and indicates thorough interactive form design. Field names are not enumerated in the metadata (the `fillable_field_names` array is empty, likely a metadata extraction limitation), but based on the form text, fields appear to cover patient demographics, recipient information, delivery preferences, record type selections (checkboxes), date ranges, sensitive information exclusions, and signature.

**File format**: PDF with 9 embedded fonts, 0 embedded images, ~170 KB file size. This is a lean, digital-first document — not a scan of a paper form.

**Digital-first design**: Yes. The combination of 52 fillable fields on a single page, clean text extraction, small file size, no embedded images, and multiple font families all indicate this was designed natively as a digital PDF form. The checkbox-based record type selection and radio-button delivery options confirm interactive design.

## 4. CONTENT DESIGN

**Length**: 1 page (~4,145 characters of text). This is compact for the amount of content it covers, which is both a strength (efficiency) and a potential concern (density).

**Structure**: The form is organized into three labeled sections:
- **Section A**: Patient and recipient information, delivery preferences, record type selection, sensitive information handling, patient rights statements (the bulk of the form)
- **Section B**: Marketing/sale of PHI disclosures (conditional — skip if not applicable)
- **Section C**: Signatures

**Clarity**: The language is a mix of functional form labels and legal disclosures. The patient rights section (items 1–6) is written in first person ("I understand that…") and uses reasonably plain language. However, some portions are dense, particularly the unencrypted email risk disclaimer: "There is some level of risk that a third party could see your information without your consent when receiving unencrypted electronic media or email. We are not responsible for unauthorized access to the PHI contained in this format or any risks (e.g., virus) potentially introduced to your computer/device when receiving PHI in electronic format or email."

**Record type granularity**: The form offers 16 specific record type checkboxes (Consultation, Medication List, Discharge Instructions, Discharge Summary, Operative Report, Labor and Delivery Record, ER Report, Pathology Report, Specialty Test/Therapy, EKG Report, Problem List, Physician Orders, History and Physical, Radiology Report, Progress Notes, Clinical/Laboratory Report) plus an "All Pertinent Records" option and a free-text "Other" field. This gives patients meaningful control over what is released.

**Readability**: The form packs a lot into a single page. Font sizes appear adequate based on the 9-font setup, but the density of content on one page likely means modest font sizes and limited whitespace.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form serves both purposes. The "Purpose of disclosure" section offers "At the request of the individual" as the first option, with "Other 3rd party recipient (please specify purpose)" as the alternative. This dual-purpose design is common but does mean patients requesting their own records must navigate a form that also addresses third-party scenarios (marketing/sale of PHI in Section B, re-disclosure warnings, etc.).

**Scope options**: Excellent. Patients can specify:
- Dates of service range
- 16 specific record types via checkboxes, or "All Pertinent Records"
- Psychotherapy notes are properly separated (requiring a separate authorization per HIPAA)
- Sensitive information (alcohol, drug abuse, genetic, psychiatric, HIV/AIDS) is included by default with an option to exclude specific types

**Delivery format options**: Four options are provided:
1. Paper Copy (default if left blank)
2. Electronic Media, if available
3. Encrypted Email
4. Unencrypted Email (with risk disclaimer)

This is above-average for delivery options, though the default to paper copy when left blank means patients must affirmatively select electronic delivery.

**USCDI Release Request**: The form includes a notable line: "For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability. Requires Direct Address or National Provider Identifier." This is a forward-looking feature that acknowledges structured health data exchange standards, though it may be confusing for lay patients who don't know what USCDI or a Direct Address is.

**Patient rights language**: The form includes six "I understand that…" statements covering voluntary nature, no conditioning of treatment on signing, right to revoke, re-disclosure risk, right to inspect/copy for a "reasonable copy fee," and right to receive a copy of the signed form. These align with HIPAA authorization requirements. However, the form does not explicitly cite HIPAA § 164.524 or use the phrase "Right of Access."

**EHI Export awareness**: The USCDI mention is the closest reference to electronic health information interoperability, but there is no explicit mention of EHI export, bulk data, or TEFCA.

## 6. COMPLIANCE

**Expiration**: The authorization expires after **180 days** by default, with options to specify a custom expiration date or expiration event. The 180-day default is reasonable — not so short as to be burdensome, not indefinite.

**Fees**: The rights section states "I may see and obtain a copy the information described on this form, for a reasonable copy fee, if I ask for it." This language is appropriate and does not specify an amount upfront, which avoids the problem of quoting fees that may exceed HIPAA limits.

**No notarization required**: The form requires only a signature (patient or authorized representative), date, printed name of representative, relationship to patient, and ID verification initials. No notarization, witness, or in-person submission requirement is stated.

**SSN request**: The form asks for "Last 4 digit SSN (optional)" — the explicit "(optional)" marking is appropriate and avoids making SSN a barrier.

**Fax limitation**: The form notes "FAX only to Physician Office / Medical facility" for the recipient fax field, which could be read as restricting fax delivery to only medical facilities (not to individual patients). This is a minor potential barrier but may be a practical security measure.

**Psychotherapy notes**: Properly handled — separated from other record types per HIPAA requirements, with clear language: "Yes, then this is the only item you may request on this authorization. You must submit another authorization for other items below."

**Marketing/Sale of PHI**: Section B appropriately addresses whether the disclosure involves marketing or sale of PHI, including whether the provider receives financial remuneration and whether the recipient may further exchange the information for money. This is required by HITECH Act amendments to HIPAA.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **USCDI Release Request option**: The inclusion of "For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability" is rare and forward-looking. This acknowledges modern health data interoperability standards and gives technically sophisticated patients (or their providers) a mechanism to request structured data. Very few ROI forms reference USCDI.

- **Bilingual availability**: Both English (form-1) and Spanish (form-3) versions are provided with identical structure and 52 fillable fields each, directly linked from the medical records page. This is a meaningful accessibility feature.

- **52 fillable fields on a single page**: The form is fully interactive as a digital PDF, covering every input from patient demographics to record type checkboxes to delivery preferences. This is unusually thorough — many organizations provide flat, non-fillable PDFs.

- **Four delivery format options**: Paper, electronic media, encrypted email, and unencrypted email represent above-average choice for patients. The encrypted email option is a particularly thoughtful inclusion.

- **Online portal alternative**: The medical records page also offers Swellbox for digital submission and MyHealthONE for direct record access, meaning patients have multiple pathways beyond the PDF form.

### ⚠️ AMBIGUITIES

- **USCDI terminology without explanation**: The USCDI release option references "Direct Address or National Provider Identifier" without explaining what these are. A patient requesting their own records would likely not know what a Direct Address is or whether they have one. This feature appears designed for provider-to-provider exchange rather than patient access.

- **"Reasonable copy fee" without specifics**: The rights section mentions a "reasonable copy fee" but provides no estimate or reference to applicable fee schedules. While not disclosing an excessive fee is better than quoting one, patients have no way to anticipate costs.

- **Default to paper copy**: "If left blank, a paper copy will be provided" means patients who overlook the delivery section or don't understand it will receive paper, even if electronic delivery would be faster and more convenient. An electronic default or a required selection would be more patient-friendly.

### ❌ ERRORS

- **Minor grammatical issue**: "I may see and obtain a copy the information" is missing the word "of" — should read "a copy of the information." (Item 5 of the patient rights section.)
