# Evaluation: UTMB Health — form-1.pdf

## Document Overview
- **Organization**: University of Texas Medical Branch (Galveston, TX)
- **Document**: form-1.pdf — "Patients Request for Medical Records"
- **Form ID**: Medical Record Form 7033–04/23
- **Pages**: 1
- **File size**: 279,350 bytes
- **Has text layer**: Yes
- **Fillable fields**: 0

---

## 1. DOCUMENT IDENTIFICATION

Form-1 is UTMB's **patient-specific** authorization for release of medical records, designated Form 7033 (dated April 2023). The title at the bottom of the form reads "PATIENTS REQUEST FOR MEDICAL RECORDS," and the body begins with "I hereby authorize UTMB health to release to:" — making it clear this is for patients (or their legal representatives) requesting their own records.

UTMB maintains a separate form ecosystem: Form 7032 (form-2.pdf, revised May 2024) is the general HIPAA authorization for "all other requests" (third-party disclosures). Form-3.pdf is a third-party-hosted older version of 7032 (revised October 2016) found on Champion Records Service's website. The existence of a dedicated patient-facing form (7033) distinct from the general authorization (7032) is a meaningful design choice — it signals that UTMB has considered the patient self-request use case separately.

The form is a single page, fitting the entire authorization workflow into a compact space. It has the UTMB administrative footer: "UTMB FORMS MGT. STRICTLY PROHIBITS CHANGES TO THIS FORM."

---

## 2. FINDABILITY

**Search path**: Per the retrieval notes, searching for `UTMB "authorization" "release" "health information" form PDF` immediately surfaced the UTMB medical records page. The official page at `https://www.utmb.edu/utmbhealth/online-services/medical-records` lists the forms with download links. The form was findable in essentially one search step.

**Hosting obstacle**: The PDFs are hosted on SharePoint (`liveutmb.sharepoint.com`), which does not respond to simple programmatic requests (curl receives HTML login pages). A browser-based download was required. This is a moderate barrier for programmatic access but irrelevant for typical patients who would use a browser.

**Alternative pathways**: UTMB also offers records requests through Datavant/Swellbox, providing a digital alternative. The medical records page is organized under Online Services > Request Medical Records, a logical navigation path.

Overall findability is **good** — the form is one click from a search result, and the medical records page is clearly structured. The SharePoint hosting is a minor technical nuisance but not a patient-facing barrier.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and functional. The full text is extractable (2,549 characters), and the extracted content is clean and readable — no OCR artifacts or garbled text.

**Fillable fields**: Zero. Despite having clear form fields (patient name, address, date of birth, phone number, recipient name/address, email, fax, dates, signature), none are implemented as interactive PDF form fields. The form is designed to be printed and filled by hand, or at best typed upon using a PDF annotation tool.

**Font count**: 9 fonts used, which is moderately high for a single-page form and suggests some typographic complexity.

**Embedded images**: None. The form is purely text-based.

**File size**: 279 KB for a single text-only page is somewhat large, but not problematic.

**Submission options**: The form lists three submission channels — mail (301 University Blvd., Galveston, TX 77555-0782), fax (409-772-5101), and email (himrio@utmb.edu). The inclusion of email submission is notable and patient-friendly.

The lack of fillable fields is the primary technical shortcoming. A patient must either print, fill by hand, and submit (mail/fax/scan-and-email), or use PDF annotation tools — neither of which is ideal for digital workflows.

---

## 4. CONTENT DESIGN

**Layout**: The form fits on one page, which is efficient. It flows logically: patient identification → recipient/delivery method → scope of records → expiration → signature → submission instructions.

**Delivery method options**: The form offers four delivery channels for records: mail, email, fax, and MyChart Patient Portal. These are presented as selectable options directly within the authorization. The text "via MyChart Patient Portal (An active MyChart account is required for this option)" clearly notes the prerequisite.

**Email risk disclosure**: A notable paragraph explains the risks of unencrypted email: "UTMB's email system is configured to send encrypted email, but not all other email servers can accept encrypted email. This means that email communications to you from UTMB may not be encrypted and, as a result, a third party may be able to access the information and read it since it is transmitted over the Internet." This is a responsible, plain-language disclosure. Signing the form indicates consent to this risk.

**Record scope options**: The form offers "Entire Medical Records" or "Partial Records" with start/end date fields and a free-text "Description of records (diagnosis, department, physician, etc.)" field. There is also an "Other (please specify)" option. The form explicitly notes that the authorization covers "any treatment or test results for mental health, alcohol and/or drug abuse, or reportable communicable diseases, including acquired immune deficiency syndrome or human immuno-deficiency virus infection." This bundled consent approach is efficient but could raise concerns about over-disclosure (see Notable Observations).

**Expiration**: Two options — "This request is for a one time release" or "This request is ongoing until withdrawn in writing." The ongoing option gives the revocation address and fax number inline.

**Signature**: Space for patient signature OR legal representative signature (with name and relationship fields). No witness or notarization requirement.

**Language**: Generally clear and functional, though the form reads more like an institutional document than a patient-friendly guide. There is no introductory explanation of what the form is for or what rights the patient has. The header is simply "UTMB Release of Information" with the address and phone/fax numbers.

**Missing elements**: No fee disclosure. No estimated turnaround time. No reference to HIPAA rights. No Spanish-language version (notable for a Galveston, TX institution serving a significant Spanish-speaking population). No instructions beyond "Please complete this request and submit to UTMB Release of Information."

---

## 5. PATIENT-CENTEREDNESS

**Positive aspects**:
- The form is specifically designated for patient self-requests, separate from the general third-party authorization (Form 7032). This is a patient-centered structural decision.
- Four delivery options (mail, email, fax, MyChart) give patients meaningful choice in how they receive their records.
- The email submission option (himrio@utmb.edu) for the form itself lowers the barrier to submission — patients don't need to print and mail/fax.
- The email risk disclosure is transparent and written in accessible language.
- One-page format is not intimidating.

**Negative aspects**:
- No fillable fields means patients must print and handwrite or use workarounds.
- No information about fees, turnaround times, or patient rights under HIPAA.
- No plain-language explanation of the process (what happens after submission, whom to contact with questions beyond the phone/fax in the header).
- The bundled consent for sensitive categories (mental health, substance abuse, HIV/AIDS) is presented as a single take-it-or-leave-it authorization rather than letting patients opt in/out of specific sensitive categories.
- The "ongoing until withdrawn in writing" option could lead to indefinite disclosure if a patient doesn't realize they need to actively revoke.
- No multilingual support.

---

## 6. COMPLIANCE

**Authorization scope**: The form authorizes release of records "including, if applicable, any treatment or test results for mental health, alcohol and/or drug abuse, or reportable communicable diseases, including acquired immune deficiency syndrome or human immunodeficiency virus infection." Under 42 CFR Part 2 (substance use disorder records) and some state laws, substance abuse treatment records may require separate, specific authorization. The bundled approach here may not satisfy Part 2's requirement for a standalone consent for substance use records, though recent Part 2 reforms (2024 final rule) have moved toward alignment with HIPAA.

**Expiration**: The "ongoing until withdrawn in writing" option lacks a fixed expiration date. HIPAA requires authorizations to include an expiration date or event. The form technically satisfies this by making the expiration event "withdrawn in writing," but this is more permissive than many institutions allow and could be questioned.

**No purpose-of-request field**: Unlike Form 7032 (which asks "Please state the purpose of your request"), Form 7033 does not ask the patient to state a purpose. Under HIPAA, patients are not required to provide a reason for requesting their own records, so omitting this field is correct and patient-friendly.

**No fee information**: The form does not mention fees. HIPAA limits fees for patient access requests to a reasonable, cost-based fee. The absence of fee information could be seen positively (no fee barrier) or negatively (patient doesn't know what to expect).

**Submission method**: Mail, fax, and email are all listed. No in-person requirement is imposed.

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Dedicated patient self-request form**: The existence of Form 7033 specifically for patients requesting their own records, distinct from the general Form 7032, is an unusually thoughtful design choice. It simplifies the patient experience by removing irrelevant fields (purpose of request, specific record-type checkboxes) present on the general form.

- **Four delivery options including MyChart and email**: The form offers mail, fax, email, and MyChart portal delivery. The MyChart option in particular represents a modern, digital-first delivery pathway. Many health systems don't offer portal-based delivery of ROI requests on their authorization forms.

- **Email submission of the form itself**: The himrio@utmb.edu submission option means patients can complete and submit the form without needing to mail or fax it, significantly lowering the barrier.

- **Transparent email encryption disclosure**: The paragraph about email encryption risks is clearly written and appropriately informs patients without being needlessly alarming.

### ⚠️ AMBIGUITIES

- **Bundled sensitive-information consent**: The form authorizes release of mental health, substance abuse, and HIV/AIDS records in a single blanket statement rather than providing individual opt-in checkboxes. A patient who wants their general records but not their substance abuse treatment notes has no mechanism to exclude them. The language "including, if applicable" is somewhat ambiguous — it could be read as "if these records exist, they'll be included" rather than as an active consent.

- **"Ongoing until withdrawn" expiration**: The option "This request is ongoing until withdrawn in writing" creates an indefinite authorization. It's unclear whether this is intended for patients who want continuous access to their own records or whether it's a carryover from third-party release language. For a patient self-request, the concept of an "ongoing" release is somewhat unusual.

### ❌ ERRORS

- **Zero fillable fields**: Despite being a digitally distributed PDF with a text layer, no form fields are interactive. This is a technical deficiency that undermines the digital delivery model — a patient who downloads this form still cannot fill it out electronically in any standard PDF reader.
