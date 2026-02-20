# Lexington Clinic — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an older (2014-era) Authorization for Release of Protected Health Information form for "Lexington Clinic and Lexington Clinic Associate Practices." The filename on the server is `2014_AuthorizationToReleaseMedicalInfoForm.pdf`, confirming its vintage. It is a single-page, general-purpose ROI authorization — not specific to patient self-access.

Lexington Clinic also hosts a newer (2024-updated) form (form-1.pdf) titled "Authorization for the Release of Medical Records — Lexington Clinic/Vital Chart," which routes requests through the third-party vendor VitalChart. Form-2 appears to be a legacy version that has not been taken down. The two forms cover similar ground — patient demographics, purpose of release, record selection, delivery method, and signature — but form-1 is the current, actively linked version on the Patient Forms page. Form-2 remains publicly accessible at its direct URL but may not be linked from the main navigation.

## 2. FINDABILITY

Per the retrieval notes, both forms were returned by a simple web search (`Lexington Clinic Lexington KY "authorization" "release" "health information" medical records form PDF`) on the first try. The retrieval difficulty was rated "easy." However, this older form's URL (`/wp-content/uploads/2023/06/2014_AuthorizationToReleaseMedicalInfoForm.pdf`) suggests it was re-uploaded in June 2023 despite being a 2014 document. Having two different ROI forms publicly available with no clear labeling of which is current creates a risk that patients will find and use the outdated version, especially via search engines. The current Patient Forms page links to form-1, but form-2 is still indexed and discoverable.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (2,903 characters). Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite having a text layer, there are no interactive form fields. A patient must print and hand-fill, or use a PDF annotation tool.
- **File size**: 37,913 bytes (38 KB) — compact for a single-page PDF.
- **Page count**: 1 page.
- **Font count**: 4 fonts.
- **Embedded images**: 1 (likely a logo).
- **Digital-first design**: This is not a scanned paper form, but it is clearly designed for print-and-fill workflows. The absence of any fillable fields and the instruction "ALL AUTHORIZATIONS MUST BE MAILED TO ADDRESS AT TOP OF THIS FORM" confirm a paper-centric design. No electronic submission option is offered.

## 4. CONTENT DESIGN

**Length and structure**: The form fits on a single page, which keeps it approachable. Sections flow logically: patient identification → purpose → authorization source/recipient → delivery method → record selection → legal disclosures → signature.

**Clarity**: The form mixes plain language with legal boilerplate. The legal section (six numbered paragraphs) uses dense, clause-heavy sentences. For example: "I understand that my revocation is not effective to the extent that the persons I have authorized to use and/or disclose my protected health information have acted in reliance upon this authorization." While legally standard, this is not plain language.

**Record selection options**: The form offers reasonable granularity: specific providers, all providers, associate practices, date ranges, conditions/injuries, ambulatory surgery center records, and a catch-all for "any and all medical records." It includes the ability to cross out sensitive categories: "Any and all medical records in the possession of Lexington Clinic including mental health, HIV, and/or substance abuse records. (Cross out any item you do not authorize to be released.)" This opt-out-by-crossing-out approach requires manual action on paper.

**Delivery methods**: Three options are listed — "Mail Record," "I will pick up," and "FAX (*providers only)." Fax is restricted to providers. There is no email delivery option. The newer form-1 adds email as a delivery option; this older form does not.

**Missing fields**: There is no field for phone number or email address of the patient, limiting how the clinic could follow up. There is no explicit fee disclosure on this form, unlike form-1 which references the KRS 422.317 fee schedule.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general-purpose authorization, not tailored to patient self-access. The "Purpose of release" checkboxes include "Request of individual" and "Transfer of care," but the form's structure ("I authorize ___ to release my health information to: ___") frames the patient as authorizing release to a third party, not as a patient exercising their HIPAA Right of Access.

**Scope options**: Good — patients can select specific providers, date ranges, conditions, and record types. The option to include associate practices is a useful touch for a multi-site organization.

**Format options**: Very limited. Only mail, in-person pickup, and fax (providers only). No electronic delivery to patients at all. This is a significant gap, especially compared to the newer form-1 which at least offers email.

**Right of Access language**: There is no mention of HIPAA § 164.524 or the patient's right of access. There is no mention of EHI export or bulk data access.

**SSN collection**: The form asks for "Social Security Number (Last 4)." While only requesting the last four digits, collecting SSN data on an ROI form is not a HIPAA requirement and raises privacy concerns, especially on a form that must be mailed via postal mail.

## 6. COMPLIANCE

**Submission method**: The form states: "ALL AUTHORIZATIONS MUST BE MAILED TO ADDRESS AT TOP OF THIS FORM. WE CAN ACCEPT FAXED REQUESTS FROM HEALTHCARE PROVIDERS ONLY." This means patients cannot fax, email, or submit electronically. They must mail the form to 1221 South Broadway, Lexington KY 40504. This creates a meaningful barrier — a patient must print, fill, and mail a physical document.

**Expiration**: "I understand that this authorization expires one (1) year from the date of signature unless a specific date or event is listed." A one-year expiration is standard and reasonable.

**Treatment conditioning**: The form includes appropriate language: "I understand that I do not have to sign this authorization and that Lexington Clinic may not condition my treatment or payment on whether I sign this authorization."

**Re-disclosure warning**: Present: "I understand that information used or disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and no longer protected by federal laws and regulations regarding the privacy of my protected health information."

**Employee access restriction**: "Lexington Clinic Employees: This authorization does not permit usage of our computer systems to access your / a family member's patient information." This is an internal policy note, appropriate but unusual to include on a patient-facing form.

**Fee disclosure**: Absent. Unlike form-1, this form provides no information about costs. A patient cannot know before submitting whether they will be charged.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Mail-only submission for patients**: "ALL AUTHORIZATIONS MUST BE MAILED TO ADDRESS AT TOP OF THIS FORM. WE CAN ACCEPT FAXED REQUESTS FROM HEALTHCARE PROVIDERS ONLY." Requiring physical mail submission with no electronic alternative creates a significant barrier to patient access. Under HIPAA's Right of Access rules (45 CFR § 164.524), covered entities should provide reasonable access — a mail-only requirement adds days of delay and creates a burden that disproportionately affects patients without easy access to printers or postal services.

- **No fee disclosure**: Unlike the newer form-1 (which references KRS 422.317 and a fee schedule), this form provides zero information about potential costs. A patient submitting this form has no way to anticipate charges.

### ⚠️ AMBIGUITIES

- **Two live ROI forms, no version labeling**: Both form-1 (2024) and form-2 (2014) are publicly accessible on Lexington Clinic's website. There is no version number, effective date, or "superseded" notice on form-2. A patient finding form-2 via search engine would have no indication it is outdated or that a newer form exists. It is unclear whether the clinic would accept this form if a patient mailed it in.

- **SSN request without justification**: The form asks for "Social Security Number (Last 4)" without explaining why this is needed. While only the last four digits are requested, this is not a HIPAA requirement for an ROI authorization and may deter patients concerned about identity theft.

### ❌ ERRORS

- **"Associate Practices" section layout**: The top of the form says "(Fill in all that apply.)" and the record selection section says "(Fill in Associate Practice(s) at top of this form.)" but there is no clearly labeled field or blank space at the top of the form for listing associate practices. The extracted text shows "Associate Practices" as a label near the header but the structure for filling this in is unclear from the text extraction, suggesting a possible layout/design issue.

### ✨ BRIGHT SPOTS

- **Sensitive record categories with opt-out**: The form includes "mental health, HIV, and/or substance abuse records" with the instruction "(Cross out any item you do not authorize to be released.)" This gives patients granular control over sensitive categories, which is a thoughtful inclusion — many forms either omit these categories entirely or include them without patient control.

- **Compact single-page design**: Fitting the entire authorization on one page, including all legal disclosures, keeps the form approachable and reduces the barrier to completion.
