# Montefiore Nyack Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is titled **"MONTEFIORE NYACK HOSPITAL AUTHORIZATION FOR RELEASE OF HEALTH INFORMATION"** (revised 01/2022). It is a general-purpose HIPAA authorization form that covers patient self-requests, attorney requests, and third-party disclosures on a single combined form — it is not a patient-access-specific request form.

The organization also has a second form (form-2.pdf), which is a nearly identical earlier version (revised 10/2021) in a single-page layout with no fillable fields. Form-2 is no longer linked from the Medical Records page but remains accessible at its old URL. Form-1 is the current, actively linked version and supersedes form-2.

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, a single web search for "Montefiore Nyack Hospital authorization release health information form PDF" immediately surfaced the direct PDF URL. The form is also accessible from the hospital's website via the Medical Records page at `https://www.montefiorenyack.org/manage-my-care/medical-records`, linked under a "Release of Medical Records" heading. The URL (`/sites/default/files/MNH_HIPAA_AuthorizationForm%20Rev%2001.2022FN.pdf`) is descriptive and includes the revision date.

One technical difficulty: the site's CDN/WAF blocks automated `curl` downloads, returning "Access Denied" responses even with a realistic User-Agent. This required browser-based retrieval. While this is likely an anti-bot measure rather than intentional gatekeeping, it could frustrate patients using download managers or assistive technology.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — the document is not a scan. Text is extractable via `pdftotext`.
- **Pages**: 3 pages, but the extracted text (4,532 characters) suggests substantive content only on page 1, with pages 2–3 appearing to contain mostly images or blank space (the metadata reports 210 embedded images despite the form being text-based, suggesting decorative elements or background images inflating the page count and file size).
- **Fillable fields**: 39 interactive form fields are present, which is a strong positive for digital usability. However, the `fillable_field_names` array is empty, meaning none of the fields have accessible names — a significant accessibility gap for screen readers and assistive technology.
- **File size**: 353 KB for a 3-page form is moderately large, likely due to the 210 embedded images. The older form-2 covers the same content in 70 KB on 1 page with zero embedded images, suggesting the redesign added visual bulk without proportional content value.
- **Fonts**: 10 fonts are used, which is more than typical for a simple authorization form.

Overall, the form is digital-first (not a scan) and includes fillable fields, but the bloated file size, unnamed fields, and excessive embedded images undercut the technical quality.

## 4. CONTENT DESIGN

**Structure and organization**: The form follows a logical flow: patient identification → recipient designation (patient/attorney/other) → records to be released → sensitive information consent → legal disclosures → signatures → contact information. Sections are labeled with bold headings. The "PLEASE SELECT ALL THAT APPLY" checkboxes for record types (ER, inpatient, outpatient, images, billing) provide useful specificity.

**Clarity**: The form mixes plain-language instructions with dense legal text. The opening "I hereby authorize Montefiore Nyack Hospital to release the following information" is clear, but the disclosure section is difficult: "I understand that I may revoke this authorization at any time by notifying Montefiore Nyack Hospital in writing, but if I do, it won't have any affect on any actions they took before the received revocations." This sentence switches from first to third person ("I" → "they") and contains a grammatical error ("affect" should be "effect"), making it harder to parse.

**Length**: The substantive content would fit on a single page (as demonstrated by form-2), but form-1 stretches to 3 pages. The additional pages appear to add little content value.

**Sensitive information handling**: The form requires separate acknowledgment for alcohol/drug treatment, mental health information, and HIV-related information — consistent with New York State law requirements.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **combined form** for all release types. The "RELEASE THE REQUESTED RECORDS TO" section lists "PATIENT," "ATTORNEY," and "OTHER INDIVIDUAL/COMPANY" as parallel options. There is no separate, streamlined pathway for patients requesting their own records under HIPAA's Right of Access (45 CFR § 164.524). Patients must navigate a form that also serves attorneys and third parties.

**Scope options**: Patients can select from five record categories (ER, inpatient, outpatient, images, billing) and can specify additional documents in a free-text field ("If you would like a specific document, please list it here"). However, there is no date-range field despite the header saying "PLEASE SPECIFY THE DATES OF SERVICE" — the form provides no structured space for this.

**Electronic delivery**: The form mentions email delivery: "I understand that in order to receive this information in electronic format, I must provide my email address on this form and that I must also send an email from that address to ROI@montefiorenyack.org." This is positive — electronic delivery is available — but the requirement to send a separate confirmation email adds friction and may confuse patients.

**Right of Access language**: The form does **not** reference HIPAA's Right of Access, 45 CFR § 164.524, or patient rights to obtain copies of their records. It frames the transaction purely as an "authorization to release" rather than as exercising a legal right.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

**Contact information**: The form provides phone (845-348-2527), fax (845-348-8433), and email (ROI@montefiorenyack.org) — multiple submission channels is helpful.

## 6. COMPLIANCE

**Expiration**: "Unless revoked earlier or otherwise indicated, this Authorization will expire 180 days (six months) from the date of signing or shall remain in effect for the period reasonable needed to complete the request." The 180-day default is a common timeframe and not unreasonable, though the "or shall remain in effect for the period reasonable needed to complete the request" language provides useful flexibility.

**Revocation rights**: Clearly stated — the patient can revoke in writing at any time.

**Re-disclosure warning**: Present: "I also understand that the information used or disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and no longer be protected under federal law."

**No notarization** requirement. **No in-person submission** requirement. **No fees disclosed** on the form.

**Sensitive information**: Requires separate initials/acknowledgment for alcohol/drug, mental health, and HIV information, which aligns with New York Mental Hygiene Law and Public Health Law § 2782 (HIV confidentiality).

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Conflicting date-of-service instructions**: The header "MEDICAL RECORDS TO BE RELEASED (PLEASE SPECIFY THE DATES OF SERVICE)" instructs patients to specify dates of service, but the form provides **no field or blank line** for entering dates. Patients are told to do something the form does not accommodate.
- **Email requirement for electronic delivery is confusing**: The requirement that patients "must also send an email from that address to ROI@montefiorenyack.org" to receive records electronically is not explained — it's unclear what the email should say, when to send it, or what happens if they don't.
- **"Abstract" vs. full record default**: The form states "An abstract of your medical record will be released which includes physician documentation, labs, radiology reports, and test results unless you request the entire medical record," but provides no checkbox or mechanism to request the entire record.

### ❌ ERRORS

- **Grammatical error**: "it won't have any **affect** on any actions" — should be "**effect**." This is a longstanding error present in both the 2021 and 2022 versions.
- **Awkward phrasing**: "before the received revocations" — appears to be a garbled revision of "before they received the revocation."
- **Person-switching**: The revocation paragraph switches between first person ("I understand that I may revoke") and second person ("You have the right to revoke") within consecutive sentences, suggesting content was merged from different source documents without harmonization.
- **Unnamed fillable fields**: All 39 fillable form fields lack accessible names (`fillable_field_names: []`), which likely means screen readers cannot identify what each field is for.

### ✨ BRIGHT SPOTS

- **Electronic delivery option**: The form explicitly offers email delivery of records, which many organizations do not. This is a meaningful accommodation for patients.
- **Multiple submission channels**: Phone, fax, and email contact information is provided, giving patients flexibility in how they submit the form.
- **Fillable PDF fields**: The presence of 39 interactive form fields means patients can complete this digitally rather than printing and handwriting, a significant practical advantage over flat PDFs.
