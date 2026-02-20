# Providence St. Vincent Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Title**: "AUTHORIZATION TO USE, DISCLOSE & RELEASE PROTECTED HEALTH INFORMATION"

**Form number**: ORC 240A | **Revision date**: 03/20 (March 2020)

This is a **general ROI authorization form** covering both patient access to their own records and third-party release. It is a system-level form for Providence Health & Services, not specific to St. Vincent Medical Center. It serves the OR/MT region but also includes checkboxes for CA, WA, and AK — effectively a multi-state form.

**Relationship to other forms found**: Providence publishes three overlapping forms. Form-1 is the broadest — a general-purpose authorization. Form-2 ("Patient Request to Access/Disclose a Designated Record Set," form number 940507, dated 3/27/25) is a newer, patient-access-specific form that appears to be its recommended replacement for patient requests. Form-3 ("Patient Request for Access to Designated Record Set," Rev. 03/20) is an older patient-access form that form-2 appears to supersede. A patient seeking their own records would likely be better served by form-2, but form-1 is the most prominent result in web searches and is the one most likely encountered first.

## 2. FINDABILITY

Per the retrieval notes, this form was **not findable by searching for the facility name** ("Providence St. Vincent Medical Center"). It was found by pivoting to the parent system name ("Providence health system medical records release form"). The form lives at a system-level URL: `https://www.providence.org/-/media/Project/psjh/shared/Files/roi/or-mt-auth-release.pdf`. The filename `or-mt-auth-release.pdf` is reasonably descriptive.

The form is accessible from the Providence Health Information Management page (`/about/medical-records-authorization/health-information-management`), but this page is not prominently linked from the St. Vincent facility page. A patient starting at the St. Vincent Medical Center website would need to navigate up to the parent system site, then find the HIM section — a non-obvious path requiring knowledge that forms are managed centrally. The retrieval agent noted: "Searching for the parent system was essential."

The HIM page does list multiple forms with some context, but a patient would need to determine which of the three forms applies to their situation, with no clear guidance on which to use for personal record access vs. third-party release.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (4,329 characters across 2 pages). Not an image-only scan.
- **Fillable fields**: 42 interactive form fields — a generous count for a 2-page form, suggesting comprehensive digital fill coverage. Field names are not exposed in metadata (the `fillable_field_names` array is empty), but the form text confirms fields for patient name, DOB, recipient info, facility names, date ranges, record types, and delivery method.
- **File size**: 282,968 bytes (283 KB) for 2 pages — reasonable, though slightly large given the modest content (27 fonts embedded, 6 images).
- **Font count**: 27 fonts is unusually high for a 2-page form, suggesting design tool overhead or multiple font variants.
- **Digital-first design**: The form was designed for digital completion — it includes fillable fields and explicitly instructs "(Print form and sign by hand)" only for the signature line, implying the rest is intended to be filled on-screen. However, the wet-signature requirement means the workflow is still partially paper-dependent.

This is a well-constructed digital PDF. The 42 fillable fields covering most input areas is notably above average for healthcare ROI forms.

## 4. CONTENT DESIGN

**Length**: 2 pages — appropriate for the scope of a general ROI authorization.

**Structure**: Page 1 is entirely disclosure/legal text (patient rights, revocation instructions, contact info, non-discrimination notice, language assistance). Page 2 is the actual form with input fields. This is an unusual ordering — most forms lead with input fields and place legal text at the end. Putting dense legal text first may cause patients to disengage before reaching the actionable portion.

**Clarity**: The opening text is written at a moderate legal register. The first paragraph begins: "I have the right to refuse to sign this form for authorization to disclose or release my protected health information." This is reasonably clear but the sentence is long (47 words in the full first bullet). The document uses bullet-point formatting for key rights, which aids readability.

**Record type options**: The form offers seven specific record types (History & Physical, Operative Report, Diagnostic Reports, Discharge Summary, Emergency Department Report, Progress Notes) plus an "Other (specify)" field. It also includes a diagnosis/injury description field and date range selection.

**Sensitive information handling**: The form requires patients to initial next to four categories of sensitive information: HIV/AIDS testing/treatment, Mental Health specific visits, Genetic Testing, Drug/Alcohol specific visits. This is standard for multi-state compliance but adds complexity.

**Delivery options**: Five delivery methods are offered: Email, MyChart, Paper, Disc, Fax. This is a strong set of options including electronic delivery.

**Layout concerns**: The form is functional but dense. Page 2 packs a significant amount of information into a single page — state selection, patient info, recipient info, delivery method, facility selection, date range, record types, sensitive info initials, and signature blocks. The visual hierarchy relies on bold headers and checkbox groupings, which is adequate but not generous with whitespace.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is a **general-purpose authorization** — it is not specifically designed for patients requesting their own records. The "To be disclosed to:" field includes a "Self" checkbox option, which accommodates patient access, but the overall framing is around "authorization to use, disclose & release" — language oriented toward releasing records to a third party. Providence does offer a dedicated patient access form (form-2), but this general form is more easily found via web search.

**Scope selection**: Patients can select specific record types, date ranges, and individual facilities. This is good granularity. The "For information related to the following diagnosis or injury" field is useful but unusual — it may confuse patients who simply want all their records from a visit.

**Format/delivery options**: The form explicitly offers MyChart, Email, Paper, Disc, and Fax. Including MyChart as a delivery option is notably patient-friendly, providing a way to receive records through an already-familiar patient portal.

**Right of Access language**: The form does not explicitly cite HIPAA § 164.524 or use the phrase "right of access." It states "I have the right to refuse to sign this form" and addresses revocation rights, but these are authorization-related rights, not patient access rights. There is no mention of HIPAA's required response timeframes or the patient's right to receive records in their requested format.

**EHI Export / bulk data**: No mention of electronic health information export, bulk data, or USCDI.

**Fee disclosure**: The form states "There may be a fee associated with this request" without specifying amounts or referencing HIPAA's cost-based fee limitations. This is vague but not overtly problematic.

**Expiration**: The form states "Unless revoked, this authorization expires in 180 days or on this date:___" — providing both a default expiration and a custom option. 180 days is a reasonable default for a general authorization.

## 6. COMPLIANCE

**Entity name**: The form references "PH&S" (Providence Health & Services) in the revocation section — an abbreviation that is not defined on the form and refers to an older entity name. The newer form-2 uses "PSJH" (Providence St. Joseph Health). This inconsistency suggests the form hasn't been updated since the corporate name change.

**Liability waiver**: The form includes: "The facility, its employees, officers and physicians are hereby released from any legal responsibility or liability for disclosure of the above information to the extent indicated and authorized herein." While common in ROI forms, this language asks patients to waive potential legal claims as part of requesting their records.

**Re-disclosure warning**: The form includes appropriate warnings about re-disclosure risk, with specific mention of federal and state protections for HIV/AIDS, mental health, genetic testing, and drug/alcohol information.

**Sensitive categories requiring initials**: The form requires separate initials for four categories of sensitive information (HIV/AIDS, Mental Health, Genetic Testing, Drug/Alcohol). This is consistent with 42 CFR Part 2 and various state laws, though it adds friction.

**Signature requirement**: The form requires a wet signature ("Print form and sign by hand"), precluding fully electronic submission. No e-signature option is mentioned.

**Contact information**: Revocation instructions point to: PO Box 4950, Portland, OR 97208, phone (503) 215-7425, fax (503) 215-0405, email PHSHIM.CENTRALROIRECEPTION@providence.org. This is the older PH&S contact info. Form-2 uses updated R1RCM vendor contact info with different phone/fax numbers and email. Patients using form-1 may reach outdated contact channels.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Which form to use?** Providence publishes three overlapping forms with no clear guidance on which to use. A patient wanting their own records could reasonably pick form-1 (the most search-visible) when form-2 would be more appropriate. The HIM page does not clearly differentiate them.

- **"Self" checkbox ambiguity**: The form has a "Self" checkbox under "To be disclosed to:" but does not explain that patients requesting their own records may be better served by a different form (form-2) designed for that purpose.

- **Outdated entity references**: The form uses "PH&S" (Providence Health & Services) while the organization has rebranded to "PSJH" (Providence St. Joseph Health). This creates confusion about which entity the patient is authorizing.

### ❌ ERRORS

- **Potentially stale contact information**: The phone number (503) 215-7425 and email PHSHIM.CENTRALROIRECEPTION@providence.org on form-1 differ from form-2's updated contact info (855-234-2491, ROIHIMreception@r1rcm.com). If ROI processing has moved to R1RCM as form-2 indicates, form-1's contact info may route to outdated channels.

- **"HOSPTIAL USE ONLY" typo** (on form-2, noted for context): Form-2 contains the misspelling "HOSPTIAL" in its internal-use section, suggesting limited quality review of these forms.

### ✨ BRIGHT SPOTS

- **42 fillable fields on a 2-page form** is excellent digital form design — nearly every input area is interactive, minimizing the need to print-and-handwrite.

- **Five delivery options including MyChart and Email**: Offering portal-based delivery alongside traditional methods is patient-friendly and forward-looking.

- **Multilingual accessibility notice**: The form includes language assistance notices in English, Spanish, and Chinese with a phone number and TTY option — going beyond the minimum.

- **Multi-state coverage via checkboxes**: Rather than maintaining separate per-state forms, Providence uses a single form with state-selection checkboxes, reducing confusion for patients seen across state lines.
