# Duke University Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is the **Duke Health Enterprise Authorization for Release of Information**, form number M3132, revision 4/2024. It is a single-page, general-purpose authorization form covering both patient-access and third-party release scenarios. It collects patient demographics (Part A), recipient information (Part B), record type selections (Part C), purpose of request (Part D), format/delivery preferences (Part E), sensitive-information consent and signature (Part F), and an optional witness section (Part G).

This is one of four documents found for Duke. Form-2 is a 3-page companion **instruction sheet** explaining how to complete the authorization. Form-3 is an image-only scanned release form from a Duke outpatient clinic site. Form-4 is a **newer revision** of the same M3132 form (Rev. 3/2025), now linked from the official Duke Health forms page. Form-1 is therefore an **older, superseded version** of the primary ROI authorization, still accessible at its original URL but no longer the current edition.

## 2. FINDABILITY

Duke Health's medical records page is well-organized and easy to reach—notes describe it as "2 clicks from the homepage" (Medical Records → Authorization Forms). The dedicated landing page at `dukehealth.org/medical-records/authorization-forms-and-instructions-medical-records` lists all available downloads with clear labels.

However, form-1 is the **older revision** (Rev. 4/2024). The official page now links to the newer Rev. 3/2025 (form-4). Form-1 was discovered via a direct web search for `Duke University Hospital "authorization" "release" "health information" filetype:pdf`. Because its URL remains live, patients who find it via search engines may unknowingly use an outdated version. The URL itself (`M3132AuthorizationforReleaseofInformation_Rev%20202312_V2.pdf`) confusingly references "202312" despite the form header reading "Rev. 4/2024."

Retrieval difficulty: **Easy** for the current version; this older version is a stale-URL risk.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,773 characters).
- **Fillable fields**: 45 interactive form fields — a strong count for a single-page form, indicating it was designed for on-screen completion.
- **Page count**: 1 page. Compact for the amount of content.
- **File size**: 560 KB — reasonable for a single-page fillable PDF with 4 embedded images and 25 fonts.
- **Design origin**: This is a **digital-first** document, not a scan. Clean text extraction, structured fillable fields, and multiple fonts confirm native PDF authoring.

The form is technically well-made for digital use. The 45 fillable fields suggest checkboxes and text inputs cover nearly every data-entry point on the form. No fillable field names are exposed in the metadata (the `fillable_field_names` array is empty), which could indicate unnamed fields — a minor accessibility concern for screen readers.

## 4. CONTENT DESIGN

**Organization**: The form follows a logical 7-part structure (A through G), progressing from patient identity → recipient → record scope → purpose → delivery format → consent/signature → witness. This is a sensible, sequential flow.

**Clarity**: Language is generally clear and functional. Section headers are labeled with both letter designations and descriptive titles (e.g., "PART C: INFORMATION TO BE RELEASED"). The form uses parenthetical guidance: "Last 2 years of active treatment will be provided unless specified" and "If sending to a provider, an Abstract/Summary of records will be sent unless otherwise marked below." These defaults are clearly communicated.

**Density**: Fitting 7 sections with extensive record-type checkboxes, delivery options, legal disclosure language, and submission instructions onto a single page makes the form quite dense. The Part C record selection area alone lists ~16 checkbox options organized in a multi-column layout. While the single-page design is efficient, it likely results in small font sizes and tight spacing.

**Record type granularity**: The form offers excellent granularity in Part C — patients can choose from Abstract/Summary, Entire Record, or 12+ individual report types (Discharge Summary, Consultation Report, History and Physical, Operative/Procedure Report, Clinic Visit, Laboratory Reports, Radiology Reports, Pathology Reports, Immunization Record, Emergency Department Record, Physical/Occupational Record, Radiology Images, Billing Records). Treatment location can be specified by individual hospital or "All Duke Health Enterprise Entities."

**Truncated text**: The extracted text shows "INFORMA" immediately after the header area, suggesting a word was cut off (likely "INFORMATION"). This appears to be a text-extraction artifact from overlapping layout elements rather than a visible defect on the printed form.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **unified** authorization that serves both patients requesting their own records (Part B includes a "Self" checkbox) and third-party releases. This dual-purpose design is functional but means the form isn't specifically tailored to the simpler patient-access use case. For example, when a patient checks "Self," many fields in Part B become redundant.

**Scope options**: Strong. Patients can specify date ranges, choose from multiple record types, or select "Entire Record." They can target specific treatment locations or select all Duke Health entities.

**Delivery options**: The form offers multiple electronic and physical delivery methods:
- Electronic: My Duke Health (patient portal), Encrypted Email, Fax, Portal (attorney/insurance)
- Mail: CD, Paper

The portal option is explicitly patient-facing ("patients only" for My Duke Health). The form notes "file size limitations may impact electronic delivery." No mention of in-person pickup in this version (the companion instructions document does mention it).

**Rights language**: Part F includes required HIPAA disclosures: right to revoke authorization in writing, notice that disclosed information may be re-disclosed, right to refuse to sign, and assurance that refusal won't affect treatment or payment. The text "Duke Health may charge a fee for providing the information specified above" is noted but no specific fee amount is disclosed.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA.

**Sensitive information**: Part F requires explicit opt-in checkboxes for "Mental and Behavioral Health" and "Genetic Testing" before sensitive records are released. The form notes records "may include reference to sensitive information related to mental and behavioral health, genetic testing, HIV/AIDS or other communicable diseases."

## 6. COMPLIANCE

**Expiration**: Authorization "will automatically expire one year from the date signed below unless revoked or another date or event is written here." One year is a standard, reasonable expiration period.

**Fee disclosure**: The form states "Duke Health may charge a fee" but does not specify amounts. Under HIPAA, fees for patient-access requests are limited to reasonable, cost-based fees. The lack of disclosure is ambiguous — patients don't know what to expect.

**Signature requirements**: Standard signature requirement (patient or authorized representative). Representatives must "attach documentation of your authority to act on behalf of the patient." The witness section is explicitly marked "Optional."

**Submission channels**: The form provides three submission methods — email (`ROI-requestor3@dm.duke.edu`), fax (919-620-5165), and mail (Duke University Hospital - HIM, DUMC Box 3016, Durham, NC 27710). A phone number for questions (919-684-1700) is also provided. No in-person-only restriction.

**SSN collection**: The form requests "SS# (last 4 digits)" — while limited to the last 4, collecting any SSN digits for a records request is questionable and potentially unnecessary. HIPAA does not require SSN for patient identification.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **SSN collection**: The form asks for "SS# (last 4 digits)" as an identifier. While limited to 4 digits, collecting Social Security Number data for a records release request is not required by HIPAA and creates unnecessary privacy risk. Medical record number and date of birth should suffice.
- **Sensitive-information opt-in as barrier**: Part F requires patients to affirmatively check boxes for "Mental and Behavioral Health" and "Genetic Testing" to receive those portions of their own records. Under HIPAA's Right of Access, patients are entitled to their complete designated record set; requiring separate opt-in for sensitive categories when the patient is the requester may function as a barrier, even if well-intentioned for third-party releases.

### ⚠️ AMBIGUITIES
- **Stale URL, mismatched revision**: The filename references "202312" but the form header reads "Rev. 4/2024." The newer form-4 (Rev. 3/2025) is now the official version. Patients finding form-1 via search engines may use an outdated form without realizing it.
- **Fee language without specifics**: "Duke Health may charge a fee for providing the information specified above" gives no indication of fee amounts or how they are calculated, leaving patients uncertain about potential costs.
- **"CD only" for Radiology Images**: Part C notes Radiology Images are available on "CD only," while Part E's mail delivery also lists CD as an option. It's unclear whether a patient requesting Radiology Images via electronic delivery would be denied or contacted for alternate arrangements.

### ✨ BRIGHT SPOTS
- **Granular record selection**: The form offers 12+ individual record types plus Abstract/Summary and Entire Record options, giving patients fine-grained control over what is released.
- **Multiple electronic delivery options**: Including patient portal (My Duke Health), encrypted email, fax, and third-party portal demonstrates commitment to electronic access.
- **Clear defaults stated on form**: "Last 2 years of active treatment will be provided unless specified" and "an Abstract/Summary of records will be sent unless otherwise marked" — these default behaviors are transparently communicated, reducing confusion.
- **Companion instruction document**: Form-2 is a dedicated 3-page instruction sheet that walks through each part of the authorization, an unusually thorough support resource.
- **Multiple submission channels**: Email, fax, and mail submission options, plus a phone number for questions, ensure patients aren't forced into a single submission method.
