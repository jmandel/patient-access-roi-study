# Ben Taub Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Title:** "AUTHORIZATION FOR USE, REQUEST AND DISCLOSURE OF PROTECTED HEALTH INFORMATION"

This is the primary ROI authorization form for Harris Health System, Ben Taub Hospital's parent organization. It is a system-wide form covering all Harris Health facilities, with specific checkboxes for "Ben Taub Hospital," "Lyndon B. Johnson Hospital," and "Clinic(s)" under a "Facility" selector. The form serves both patient-initiated access and third-party release purposes, distinguished by conditional sections rather than separate forms.

A second document was found (form-2.pdf), but it is a "Media, Marketing and Educational Use" authorization — unrelated to patient access to medical records. Form-1 is the sole relevant ROI form for this organization.

The document identifier "280342 | 12.2024" at the bottom indicates a December 2024 revision, making this a very recently updated form.

## 2. FINDABILITY

The form was easy to locate. According to retrieval notes, a `site:harrishealth.org` search immediately surfaced the PDF URL. The form is directly linked from the Medical Records page at `https://www.harrishealth.org/patients-hh/Pages/medical-records.aspx`, which also explains the request process (mail, fax, email, or in-person drop-off). No bot blocking, login walls, or JavaScript rendering issues were encountered.

The PDF URL itself is descriptive: `280342-authorization-for-use-request-and-disclosure-of-phi.pdf`, making it identifiable in search results. The medical records page provides clear context about what the form is for and how to submit it.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present — full text is extractable (5,459 characters). This is not a scan.

**Fillable fields:** The form has **65 fillable form fields**, which is excellent for a single-page document. However, `fillable_field_names` is an empty array, meaning the fields exist but lack programmatic names — reducing their utility for assistive technology and auto-fill tools.

**File format:** 430 KB for a single-page PDF with 13 fonts and 1 embedded image. The file size is moderately large for a 1-page form, likely due to the embedded image (probably the Harris Health logo) and font embedding.

**Digital-first design:** This form was clearly designed digitally, not scanned. The dense single-page layout with interactive fields, structured checkbox groups, and fill-in blanks indicates a designed digital document. The 13 embedded fonts suggest deliberate typographic design, though this count is high for a form of this size.

## 4. CONTENT DESIGN

**Length:** A single page — impressively compact given the breadth of content. The form covers patient identification, recipient details, facility selection, record type selection (14+ categories), format options, purpose of disclosure, expiration terms, withdrawal instructions, re-disclosure warning, non-conditioning statement, signature blocks, and an internal-use identity verification section.

**Clarity:** The form uses moderately clear language but leans toward legal/administrative phrasing. The non-conditioning statement is well-worded: "I understand that I do not have to sign this authorization and that my treatment, payment, or enrollment / eligibility for benefits at Harris Health System will not be denied if I do not sign this authorization." However, some sections use dense compound sentences, such as the sensitive information consent: "I understand and agree that the information requested may contain reference(s) to drug and/or alcohol abuse, psychiatric care, sexually transmitted disease, HIV/AIDS, Hepatitis B or C testing, and/or other sensitive information."

**Organization:** Sections follow a logical flow: patient info → recipient → what records → format → purpose → expiration → withdrawal → signatures. There is no explicit section numbering or headers for each major block beyond the title, making it harder to navigate visually despite the logical ordering.

**Layout:** The form is dense. Fitting all content on a single page creates a cramped layout. The record type checkboxes are arranged in what appears to be a multi-column grid, which is efficient but potentially confusing when read linearly (the extracted text interleaves columns: "Billing Record / Clinic Visit(s) / Consultation Report(s)"). The form uses underscores for fill-in lines extensively, contributing to visual clutter.

**Font size:** With 13 fonts on a single page carrying 5,459 characters of content, font sizes are likely small in places to accommodate all content. This density trade-off is the cost of keeping the form to one page.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a dual-purpose form. It handles both patient access and third-party disclosure through conditional sections. The "Purpose of Request/Disclosure" section explicitly states it is "only required if the individual providing this authorization form to Harris Health is someone other than the patient or patient's legally authorized representative." Similarly, the expiration section is "only required if the individual providing this authorization form to Harris Health is someone other than the patient." This is a pragmatic approach — patients skip irrelevant sections — but it does mean patients must parse a form designed partially for third-party use.

**Scope options:** Strong. The form offers granular record type selection with 14+ checkboxes: Complete Medical Record, Billing Record, Emergency Room Record(s), Operative/Procedure Report(s), Clinic Visit(s), Entire Inpatient Record, Pathology Report(s), Consultation Report(s), Entire Outpatient Record, Pathology Slides/Blocks, History & Physical, Discharge Summary, Radiology Image(s), Lab Report(s), Eligibility Record(s), Radiology Report(s), and Psychotherapy Notes (with a clear caveat: "No other boxes maybe checked, if this box is checked"). Date range selection is also provided with From/To fields.

**Format options:** The form offers Paper, Compact Disc (CD), and Email — with email explicitly noted as "Email Address (Patients Only)." There is also an "Other" free-text field. The inclusion of email delivery for patients is a positive feature, though CD as a format option feels dated. No mention of electronic health information (EHI) export, FHIR-based access, or patient portal download.

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's right of access by name. The HIPAA Privacy Rule is mentioned only in the re-disclosure warning. The non-conditioning statement addresses the right not to sign but does not frame the form as an exercise of a patient right.

**Submission options:** Per the medical records page, the form can be submitted by mail, fax, email, or in-person drop-off — offering good flexibility. Contact information is printed on the form: Phone 346-426-0980, Fax 346-426-0959, Email Releaseofinformation@harrishealth.org.

## 6. COMPLIANCE

**Unreasonable barriers:** No notarization is required. No fees are mentioned. Submission is available via multiple channels (mail, fax, email, in-person). However, a **witness signature** is required on the form, which could be a practical barrier — patients completing the form at home may not have a readily available witness.

**Expiration:** The 180-day auto-expiration applies to third-party authorizations, not patient requests. The form text clarifies: "this section is only required if the individual providing this authorization form to Harris Health is someone other than the patient or patient's legally authorized representative." This is a reasonable distinction.

**Identity verification:** The "TO BE COMPLETED BY HARRIS HEALTH SYSTEM" section at the bottom includes identity verification via "Photo ID," "Matching Signature," or "Other, specify." This is an internal processing section, not a patient-imposed barrier, but the inclusion of identity verification is standard.

**Sensitive information:** The form requires affirmative consent for release of drug/alcohol, psychiatric, HIV/AIDS, and hepatitis records. This is consistent with 42 CFR Part 2 and state law requirements for substance abuse records, and is appropriately handled as a separate acknowledgment.

**Psychotherapy notes:** The form correctly separates psychotherapy notes with the caveat "No other boxes maybe checked, if this box is checked," consistent with HIPAA's heightened protections for psychotherapy notes under § 164.508(a)(2).

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Witness signature requirement:** The form includes a "Witness Signature" line with no guidance on who qualifies as a witness or whether a witness is truly required versus optional. This is ambiguous and could be a barrier for patients completing the form remotely.

- **"Check this box if the recipient of the requested health care information is your attorney or your legally authorized representative"** — The placement and phrasing of this checkbox is disconnected from its context. It appears near the recipient section but the implications of checking it are not explained on the form.

- **Psychotherapy notes caveat:** The text reads "No other boxes maybe checked, if this box is checked" — the word "maybe" should likely be "may be" (two words), creating a grammatical ambiguity. A reader could parse this as "no other boxes maybe [are/could be] checked" rather than the intended "no other boxes may be checked."

### ❌ ERRORS

- **Internal URL on public form:** The footer states "Please go to the Harris Health Document Control Center to retrieve an official controlled version of the document. https://apps.hchd.local/sites/dcc" — this is an **internal intranet URL** (`hchd.local`) that is inaccessible to patients. Including this on a patient-facing document is an oversight from the document control process.

- **Unnamed fillable fields:** Despite having 65 fillable fields, none have programmatic names (the `fillable_field_names` array is empty). This is a technical defect that undermines accessibility for screen readers and automated form processing.

### ✨ BRIGHT SPOTS

- **Email delivery for patients:** The format section explicitly offers email delivery with the notation "Email Address (Patients Only)," recognizing that patients specifically benefit from electronic delivery. This is a meaningful patient-access accommodation.

- **Conditional sections for patients vs. third parties:** The form smartly distinguishes between patient requests and third-party requests, noting that the "Purpose" and "Expiration" sections are "only required if the individual providing this authorization form to Harris Health is someone other than the patient." This reduces patient burden without requiring a separate form.

- **Granular record type selection:** With 14+ specific record categories, patients have meaningful control over what information is released, including separate handling of psychotherapy notes and sensitive information categories.

- **Multiple submission channels with contact details printed on form:** Providing phone, fax, and email directly on the form (rather than requiring patients to look them up separately) reduces friction. The dedicated email for authorization withdrawal (`AuthorizationWithdrawal@harrishealth.org`) is a nice touch.

- **Recent revision date (12.2024):** The form has been updated within the last two months, suggesting active document management and attention to currency.
