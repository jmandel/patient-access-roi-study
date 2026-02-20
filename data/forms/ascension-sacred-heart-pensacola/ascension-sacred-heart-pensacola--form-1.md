# Ascension Sacred Heart Pensacola — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization for Release of Medical Information From Ascension Sacred Heart," form number FFM99-8700-010-00 (rev 8/20). It serves as the primary ROI/authorization form for the facility. The form covers four Ascension Sacred Heart locations in the Florida panhandle: Pensacola, Emerald Coast, Gulf, and Bay — patients check a box to indicate which facility's records they are requesting.

A second document (form-2.pdf) was also found for this organization, but it is a department-specific "Medical Records Release Form" for the Sacred Heart Cancer Center / Department of Radiation Oncology. That form is oriented toward *inbound* records (requesting records from another provider to Sacred Heart), not patient self-request. Form-1 is clearly the general-purpose outbound ROI form and the relevant document for patients seeking their own records.

## 2. FINDABILITY

**Retrieval difficulty: Easy.** Per the retrieval notes, the form was found on the first web search for Ascension Sacred Heart Pensacola ROI-related keywords. It is hosted as a direct-download PDF on the `healthcare.ascension.org` content delivery system at a long but descriptive URL path: `/flpen_medrec/ffm99-8700-010-00-authorization-for-release-of-medical-info-from-ascension-sacred-heart-8-20.pdf`. The filename includes the form number and a recognizable description.

However, the facility's medical records page primarily directs patients to a Swellbox-powered online request wizard rather than to this downloadable PDF. While the PDF exists at a stable URL, patients navigating the website organically may be funneled to the online wizard and may not easily discover the traditional PDF form. The form is findable via search engine, but its discoverability from the website's own navigation is less clear.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text is extractable (4,937 characters), confirming this is a digitally-authored PDF, not a scan.
- **Fillable fields**: Zero. Despite being digitally created, the form has no interactive form fields — all blanks are represented by underscores (`____`). Patients must print the form to complete it by hand, or use PDF annotation tools.
- **File size**: 242,657 bytes (243 KB) for a single page with no embedded images — somewhat large for a text-only single-page document, but not problematic.
- **Fonts**: 7 fonts embedded, suggesting some design attention to typography/hierarchy.
- **Images**: None embedded.
- **Design origin**: This is a digitally designed document (not a scan of a paper form), but it was clearly designed for print-and-fill workflow. It is not "digital-first" — there is no accommodation for electronic completion or submission.

The form's footer includes internal EHR navigation paths: "PC > Consents & Legal > Information Release / EC and GC > Consents & Legal > General Consents / BAY > Admit Forms." These are staff-facing instructions for filing the completed form in the EHR, visible to patients who receive the document but not meaningful to them.

## 4. CONTENT DESIGN

**Length**: One page — appropriately concise for an authorization form. All content fits on a single page without appearing overly cramped.

**Structure and organization**: The form follows a logical flow:
1. Patient identification (name, address, DOB, SSN, phone)
2. Releasee information (who should receive the records)
3. Purpose of request
4. Format preference (electronic or paper)
5. Specific reports requested (checkbox list)
6. Facility and date range selection
7. Sensitive information authorization
8. Legal disclosures (revocation rights, redisclosure warning)
9. Signature block

**Checkbox list for record types**: The form offers 10 specific report types: History & Physical, Physical Therapy Notes, Discharge Summary, Abstract, Lab, Occupational Therapy Notes, X-Ray, Operative Report, Pathology, and Other. This is a practical level of granularity.

**Clarity**: The form uses a mix of plain language and legal phrasing. The upper portion (patient info, releasee, record types) is straightforward. The lower portion (sensitive information authorization, revocation rights) shifts into dense legal language. The sensitive information paragraph is a single long sentence that bundles HIV, AIDS, psychiatric impairment, drug/alcohol abuse, sickle cell anemia, STDs, and Hepatitis B/C into one binary authorization decision.

**Visual hierarchy**: Section labels and key terms like "REQUIRED" and "NOTE" are used to draw attention. The checkbox layout is clean. However, the legal text in the lower third of the page is set in smaller type and runs together without paragraph breaks, reducing readability.

**Notable warning**: The form includes this instruction: "NOTE: If you fail to specify which records you desire, you will only receive a copy of the discharge summary." This defaults to minimal disclosure if the patient does not check boxes — a restriction that may not serve patient interests.

## 5. PATIENT-CENTEREDNESS

**Patient access orientation**: The form includes a checkbox for "Patient Named Above" as the releasee, and one purpose option is "At the request of the patient." This means the form can be used for patient self-access, though it is structurally a general third-party release form — the patient must affirmatively check a box to indicate they are requesting their own records and write their own name/address as both patient and recipient.

**Format options**: The form offers a choice between "electronic or paper format" via checkboxes: "Medical Records should be released in ☐ electronic or ☐ paper format." This is a positive feature, though no further detail is given about what electronic delivery means (email? portal? CD?).

**Scope options**: Patients can select specific report types via checkboxes, specify care type (Emergency, Hospitalization, Outpatient, Ascension Medical Group), and provide date ranges. This gives patients reasonable control over the scope of their request.

**HIPAA Right of Access**: The form does not reference HIPAA § 164.524 or explicitly inform patients of their right to access their own records. The form footer includes "HIPAA" but only as a document classification tag ("FFM99-8700-010-00 (rev 8/20) HIPAA"), not as patient education.

**EHI Export**: No mention of electronic health information export, bulk data, or any modern health information exchange standards.

**SSN collection**: The form asks for "Social Security No." as a standard identification field. For a patient access request, this is unnecessary and creates a privacy risk — HIPAA does not require patients to provide their SSN to exercise their Right of Access.

## 6. COMPLIANCE

**Purpose of request marked REQUIRED**: The form labels the purpose field as "REQUIRED" with options "At the request of the patient" and "Other. Explain:___." Under HIPAA § 164.524, patients are not required to provide a reason for requesting their own records. However, the form does offer "At the request of the patient" as a pre-printed option, which may satisfy this field without requiring further explanation — the practical burden is low if the patient simply checks that box.

**Sensitive information binary choice**: The authorization for sensitive categories is marked "REQUIRED" and structured as a single all-or-nothing decision: "I do ___ I do not ___ authorize the release of information, including... HIV... AIDS... psychological or psychiatric impairment, drug abuse and/or alcoholism, sickle cell anemia, sexually transmitted disease, or Hepatitis B or C." Patients cannot selectively authorize some sensitive categories while withholding others. This bundling may be driven by Florida state law requirements (F.S. § 381.004 for HIV/AIDS, 42 CFR Part 2 for substance abuse), but the all-or-nothing framing is less patient-friendly than forms that allow category-by-category choices.

**Authorization expiration**: "This Authorization will expire one (1) year from the date of my signature." This is a standard and reasonable timeframe.

**Revocation rights**: Clearly stated — patients may revoke in writing to the Director of Health Information, with specific mailing addresses for all four facilities listed.

**Liability waiver**: The form includes: "Releasor, its agents and employees, are hereby authorized to obtain, inspect, and reproduce such records and/or information and are hereby relieved of any responsibility or liability that may arise from the release or reproduction of such records." This is a liability shield for the organization rather than a patient protection, and is standard but one-sided.

**No notarization or in-person requirement**: The form does not require notarization or in-person submission, which is appropriate.

**No fee disclosure**: The form does not mention any fees for copies. This is neither positive nor negative on its own — fees may be disclosed elsewhere — but patients have no advance notice of potential costs from the form itself.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection for records access**: The form requests "Social Security No." as a standard field. HIPAA does not require patients to provide their SSN to access their own records, and collecting it creates unnecessary identity theft risk. Many modern forms have eliminated this field or made it optional.

- **Purpose of request marked "REQUIRED"**: Under HIPAA § 164.524, a covered entity may not require a patient to state a reason for requesting access to their own records. While the form offers "At the request of the patient" as a checkbox (reducing the practical burden), labeling the purpose as "REQUIRED" creates a compliance concern if the form is used for patient self-access.

### ⚠️ AMBIGUITIES

- **"Electronic" format undefined**: The form offers "electronic or paper format" but does not specify what electronic delivery means — email, patient portal, CD/USB, or secure file transfer. A patient checking "electronic" has no way to know what they will receive or how.

- **Default to discharge summary only**: The note "If you fail to specify which records you desire, you will only receive a copy of the discharge summary" is ambiguous in the context of a patient access request. Under HIPAA, patients have the right to their complete designated record set. This language could be read as a policy of providing only minimal records unless the patient navigates a checkbox list correctly.

- **Multi-facility form without clear routing**: The form covers four Ascension Sacred Heart facilities, but provides no guidance on where to submit the completed form — should it go to the facility checked, or to the Pensacola address listed in the revocation section? The submission process is not stated anywhere on the form.

### ❌ ERRORS

- **Internal EHR navigation paths visible to patients**: The form footer includes "PC > Consents & Legal > Information Release / EC and GC > Consents & Legal > General Consents / BAY > Admit Forms" — these are internal staff instructions for filing the form in the electronic health record. They are meaningless to patients and suggest the form was not reviewed with patient-facing distribution in mind.

### ✨ BRIGHT SPOTS

- **Multi-facility coverage in one form**: Patients who have received care at multiple Ascension Sacred Heart locations across the Florida panhandle can use a single form, checking boxes for each facility. This reduces the burden of tracking down separate forms for each location.

- **Electronic format option offered**: Despite the ambiguity about what "electronic" means, including this option at all puts the form ahead of many peers that offer only paper delivery.

- **Concise single-page design**: Fitting a complete authorization form with specific report type selection, facility selection, date ranges, and legal disclosures on one page is efficient and reduces patient burden.
