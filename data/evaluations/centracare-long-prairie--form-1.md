# Evaluation: CentraCare – Long Prairie Hospital — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is the **"Authorization for Release of Health Information"** — CentraCare's system-wide ROI form used across all of its facilities. It is a 2-page PDF (873,096 bytes) with a text layer. Page 1 contains the authorization form itself; page 2 is a directory of HIM department locations organized by region (Central, Northwest, Willmar/Redwood, Benson), with mailing addresses, fax numbers, phone numbers, and a shared email address.

Long Prairie Hospital does not have a facility-specific form. This same form is used across the entire CentraCare system. Long Prairie is explicitly listed on page 2 under "Northwest locations" with the Sauk Centre HIM office serving as the mailing destination. The form is one of three documents found on CentraCare's medical records release page:
- **form-1.pdf** (this document): The main authorization form
- **form-2.pdf**: An instructions companion document explaining how to complete the form
- **form-3.pdf**: A separate "Authorization to Share Substance Use Disorder Health Information" form (image-only scan, no text layer)

This is a **general-purpose authorization** — it is designed to handle both patient self-requests and third-party releases. There is no separate patient-access-specific form.

## 2. FINDABILITY

Per the retrieval notes, the form was found via a dedicated medical records release page at `https://www.centracare.com/patient-resources/medical-records-release/`. Multiple search strategies converged on the same page — both web searches for `CentraCare Long Prairie Hospital "authorization" "release" "health information" filetype:pdf` and site-specific searches led to the system-wide forms.

The source URL (`release-of-health-info-form.pdf`) has a reasonably descriptive filename, though the actual URL path uses a UUID (`a8f46347-1e70-4f91-b743-dff034a64a35`). The page where the form lives is logically organized under Patient Resources.

One notable friction point: direct `curl` downloads returned "Access Denied" (505-byte HTML pages), requiring browser-based download via Chrome DevTools. This bot-blocking behavior means automated tools or assistive technologies may struggle to retrieve the PDF directly.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The full text (5,648 characters) is extractable, which is good for screen readers and text-based processing.

**Fillable fields**: Zero (`fillable_field_count: 0`). Despite having a text layer, this is a flat PDF — patients must print and handwrite, or use PDF annotation tools. This is a significant accessibility gap for a form from a regional health system.

**Font count**: 5 fonts are embedded. The form uses 5 embedded images, suggesting some graphical elements (likely logos and layout components).

**File size**: 873 KB for a 2-page document is moderately large, likely due to embedded images. This is not prohibitive but is heavier than necessary for a text-centric form.

**Digital-first design**: This appears to be a designed digital document (not a scan), given the text layer and font embedding. However, the lack of fillable fields undermines digital usability — it has the appearance of a born-digital form but functions like a print-only document.

## 4. CONTENT DESIGN

**Length**: 2 pages is appropriate. Page 1 is the actual form; page 2 is the submission directory. The content-to-page ratio is reasonable.

**Organization**: The form follows a logical flow: Patient Information → Release From → Release To → Information to be Released → Special Disclosure (substance use) → Preferred Method → Reason for Release → Authorization/Signature → Revocation. This is a well-structured sequence.

**Information categories**: The form offers 11 specific record type checkboxes:
- History and Physical
- Pathology Reports
- *Radiology Films
- Discharge Summary
- Consult Reports
- All Records listed (*not included)
- Emergency Room Notes
- Laboratory Reports
- Other (please specify)
- Progress Notes
- Operative/Procedure Notes
- Assessment/Evaluation
- Radiology Reports
- Substance Use Disorder (in a separate Special Disclosure section)

The asterisk notation for "Radiology Films" (excluded from "All Records") is a helpful detail.

**Language**: The form mixes plain language with legal/regulatory text. The patient-facing fields are clear, but the revocation section is dense: *"This authorization may be revoked at any time except to the extent that action has been taken in reliance upon it or upon final disposition of the conditional release for which authorization was given."* This sentence is complex and may confuse patients.

**Date-range defaults**: The form includes a sensible note: *"If dates are not specified, only the most recent visit/encounter will be released."* This is both helpful (sets expectations) and potentially limiting (a patient wanting all records might not realize they need to specify "all dates").

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose form. It uses "Release Information From" and "Release Information To" language, which is oriented toward third-party transfer. A patient requesting their own records must put themselves in the "To" field, which is unintuitive. There is no checkbox or pathway specifically for "I want a copy of my own records."

**Scope options**: Good. Patients can specify date ranges and select from 11+ record categories. The "Other (please specify)" option provides flexibility.

**Delivery method options**: The form offers four delivery methods:
- Paper (print)
- CD
- Encrypted email
- MyChart portal

This is a strong set of options, particularly the inclusion of MyChart and encrypted email. However, there is a caveat noted in form-2 (the instructions): *"If your original records are on paper, we are only able to provide them on paper."* This is a practical limitation but is disclosed.

**Reason for release**: The form offers checkboxes for: Continuation or Transfer of Care, Personal Use, Attorney, Insurance, Other. The inclusion of "Personal Use" is positive — it acknowledges that patients may want their own records for their own purposes.

**Right of Access language**: The form does not reference HIPAA § 164.524 or patient rights explicitly. The closest it comes is the statement: *"CentraCare will not refuse treatment to any patient that refuses to sign an authorization for release of Protected Health Information."* This addresses the anti-conditioning requirement but does not educate patients about their access rights.

**Redisclosure notice**: The form includes: *"CentraCare cannot prevent redisclosure of your information by the person/organization who receives your records under this authorization, and your information may not be covered by state and federal privacy protections after it is released."*

**Shared EMR disclosure**: Notably, the form warns: *"CentraCare shares an Electronic Medical Record with non-CentraCare organizations. Authorizing the release of the following items: Medication List, Allergy List, Problem List, Immunization Data and/or Medical History includes this information from all sites that share an electronic medical record."* This is transparent but may surprise patients.

**EHI Export / bulk data**: No mention of electronic health information export or bulk data options.

## 6. COMPLIANCE

**Expiration**: The authorization expires one year from the date of signature unless the patient specifies a different date or event. One year is a reasonable default.

**Revocation**: The form states revocation can be done "at any time by notifying, in writing, the provider/facility listed in the FROM section." The written-only revocation requirement is standard.

**Fees**: No fee information appears on the form itself. The companion instructions document (form-2) reportedly addresses fees, but form-1 is silent on this topic. Patients would not know about potential costs from the form alone.

**Submission methods**: The form directs patients to submit to HIM departments via mail, fax, or email (`CCHROI@CentraCare.com`). Email submission is a strong option. No in-person-only requirement.

**42 CFR Part 2**: The form includes a dedicated "Special Disclosure" section for substance use disorder records, correctly referencing 42 CFR Part 2 and requiring separate dates and diagnosis/treatment specification. The instruction *"do not list ICD-10 codes"* is appropriate.

**Anti-re-release**: The form states: *"I do not authorize re-release of this information to anyone."* This is a blanket prohibition on re-release which is embedded in the boilerplate — the patient does not get to choose whether to authorize re-release. This could be seen as a protective measure but also limits patient control.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Anti-re-release language is non-optional**: The statement *"I do not authorize re-release of this information to anyone"* is printed as part of the standard form text, not as a checkbox the patient can choose. This effectively makes it a mandatory condition of every authorization, regardless of the patient's wishes.

### ⚠️ AMBIGUITIES

- **"Only the most recent visit/encounter will be released" default**: The note *"If dates are not specified, only the most recent visit/encounter will be released"* could cause patients seeking comprehensive records to inadvertently receive only a single encounter. A patient unfamiliar with medical records processes might not think to write "all dates" and could miss the significance of this default.

- **No distinction between patient access and third-party release**: The form's "From/To" structure does not accommodate the common scenario of a patient requesting their own records to keep. A patient must figure out they should list themselves as the "To" party. This ambiguity may lead patients to leave the "To" field blank or fill it incorrectly.

- **Shared EMR scope warning is vague**: The form notes that certain data types "include this information from all sites that share an electronic medical record" but does not name those organizations. It only offers: *"A list of these non-CentraCare organizations will be provided to the patient upon request."* This makes it impossible for a patient to assess scope before signing.

### ✨ BRIGHT SPOTS

- **Multiple electronic delivery options**: Offering MyChart portal, encrypted email, CD, and paper gives patients meaningful choice in how they receive their records. The inclusion of encrypted email is particularly noteworthy for a regional system.
- **Email submission accepted**: Completed forms can be emailed to `CCHROI@CentraCare.com`, eliminating the need for printing, scanning, faxing, or mailing.
- **"Personal Use" as an explicit reason**: Including "Personal Use" as a checkbox option normalizes patients requesting their own records and may reduce pushback from HIM staff.
- **Comprehensive facility directory**: Page 2 provides a complete directory of all CentraCare HIM offices organized by region, with fax numbers, phone numbers, mailing addresses, and email. This saves patients from having to hunt for the correct submission address.
- **Anti-conditioning statement**: The explicit statement that *"CentraCare will not refuse treatment to any patient that refuses to sign an authorization"* is a positive transparency measure.
