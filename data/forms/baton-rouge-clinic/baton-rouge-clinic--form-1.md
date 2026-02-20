# Evaluation: The Baton Rouge Clinic — form-1.pdf

**Organization:** The Baton Rouge Clinic (Baton Rouge, LA)
**Document:** "Authorization for Release of Protected Health Information from The Baton Rouge Clinic, AMC"
**Source URL:** https://batonrougeclinic.com/wp-content/uploads/2022/01/AuthFrom-01.31.22.pdf
**Pages:** 2 | **File size:** 200,510 bytes | **Fillable fields:** 0 | **Text layer:** Yes

---

## 1. DOCUMENT IDENTIFICATION

This is a general-purpose **third-party release authorization** — it authorizes The Baton Rouge Clinic to release the patient's protected health information *from* the clinic *to* a named recipient. The title is explicit: "Authorization for Release of Protected Health Information **from** The Baton Rouge Clinic, AMC."

This is **not** a patient-access / Right of Access form. It is designed for disclosures to third parties (other providers, insurers, attorneys, etc.), not for patients requesting their own records. The clinic maintains three distinct forms on its downloadable forms page:

- **form-1.pdf** (this document): Release **from** the clinic to a third party
- **form-2.pdf**: Release **to** the clinic from another entity (incoming records)
- **form-3.pdf**: "Right of Access Form" — the patient-access-specific form, which explicitly cites HIPAA 45 C.F.R. § 164.524 and offers electronic delivery

The existence of a separate Right of Access form (form-3) means that a patient trying to get their own records has a dedicated pathway, but they would need to identify the correct form among the three options. The downloadable forms page groups all three under "Medical Records" without clearly distinguishing which form is for which purpose.

---

## 2. FINDABILITY

**Retrieval difficulty: Easy.** Per the retrieval notes, a web search for the clinic's authorization form immediately returned direct PDF links. The forms are hosted on a well-organized "Downloadable Forms" page at `https://batonrougeclinic.com/patient-information/downloadable-forms/`. No login, CAPTCHA, or JavaScript rendering was required.

However, the **filename is unhelpful**: `AuthFrom-01.31.22.pdf` — a date-stamped abbreviation that doesn't describe the document's purpose. A patient browsing their downloads folder would struggle to identify this file. The URL path (`/wp-content/uploads/2022/01/`) reveals it's stored in WordPress's default uploads directory with no semantic structure.

The form was found within the "Medical Records" section of the downloadable forms page, which is a reasonable location. The initial web search surfaced this form but did **not** surface form-3 (the Right of Access form), which was only discovered by browsing the forms page directly. This means a patient searching the web specifically for how to request their own records might land on this third-party release form instead of the more appropriate Right of Access form.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present and complete. The extracted text is clean and well-structured, with 3,983 characters across 2 pages. Not an image-only scan.
- **Fillable fields:** Zero. This is a flat PDF with no interactive form fields. Patients must print and hand-fill or use PDF annotation tools.
- **Font count:** 3 (minimal, appropriate).
- **Embedded images:** 2 (likely logo/header graphics).
- **Digital-first design:** No. While it has a text layer (not a scan), the form is designed for print-and-fill workflow. The use of underscores for blank lines (e.g., `*From (date) ______________________________________`) and brackets for checkboxes (`[ ]Complete health record`) indicates paper-centric design.
- **File size:** 200 KB for a 2-page form is reasonable, likely due to the embedded images.

The lack of fillable fields is a significant accessibility gap. A patient with motor impairments or limited access to a printer cannot easily complete this form digitally.

---

## 4. CONTENT DESIGN

**Length:** 2 pages — proportionate for a general release authorization. The first page covers patient identification, recipient information, record types, date ranges, and purpose. The second page addresses sensitive records, revocation rights, re-disclosure, and signature.

**Organization:** The form follows a logical progression:
1. Patient identification (6 fields: name, DOB, address, SSN, telephone, email)
2. Authority to release / recipient details (space for 3 recipients)
3. Date range for records
4. Record type checkboxes (12 categories plus "Other")
5. Purpose of disclosure
6. Sensitive records consent (drug/alcohol, psychiatric, HIV/AIDS)
7. Right to revoke
8. Re-disclosure warning
9. Signature block

**Clarity:** The language is moderately legalistic. Key passages like the signature block contain dense, compound sentences: "I understand that I do not have to sign this authorization, and my treatment or payment for services will not be denied if I do not sign this form. However, if health care services are being provided to me for the purpose of providing information to a third-party (e.g. fitness-for-work test), I understand that services may be denied..." This is standard HIPAA authorization language but not plain-language friendly.

**Record type options:** The form provides 12 checkbox categories across 3 columns:
- Complete health record, History and physical exam, Laboratory test results, Photographs/videotapes
- Diagnosis & treatment codes, Consultation reports, X-ray reports, Immunization Records
- Discharge summary, Progress notes, X-ray films/images, Itemized bill
- Plus an open "Other" field

This is a reasonably granular set of options.

**Required fields:** Fields marked with asterisks (`*`) are identified as required, with a footer note: "* Information is required to process request." This is a helpful design choice.

**Contact information:** The form includes a phone number and email for the medical records department: "(225) 246-9770 or email us at medrecords@brclinic.com." The footer also displays the clinic's main address and general phone number.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is designed for third-party disclosures, not patient access. The opening language — "I hereby authorize The Baton Rouge Clinic, AMC to release the information identified in this authorization form from the medical records of [blank] and provide such information to: [recipient fields]" — clearly frames this as a release *to someone else*. There is no mention of HIPAA Right of Access, 45 C.F.R. § 164.524, or patient self-request.

However, the clinic does offer a separate Right of Access form (form-3), which is the correct form for patient self-access.

**SSN requirement:** The form includes a field for `*Social Security #:` marked as required (asterisk). Requiring a Social Security number is a notable data collection practice — many organizations have moved away from collecting SSNs on authorization forms due to identity theft concerns, and it is not required by HIPAA.

**Scope options:** The form offers both date range selection ("From" / "To" with examples like "mm/dd/yyyy or ALL") and record type checkboxes, giving patients reasonable control over what is released.

**Format options:** None. The form does not offer any choice between paper and electronic delivery. This contrasts with the clinic's own Right of Access form (form-3), which explicitly offers "An electronic record, access electronically or access through an online portal" as a delivery option.

**Sensitive records:** The form separately addresses drug/alcohol, psychiatric, STD, hepatitis B/C, and HIV/AIDS records with Yes/No circle options. This is appropriate under federal and state law for these categories.

**Expiration:** The authorization defaults to 1 year if no expiration date is specified: "Unless revoked, this authorization will expire on the following date, or after the following time period/event ___, or 1 year after the form was signed." One year is a reasonable default.

**Submission options:** Not explicitly stated on the form itself. The form provides a mailing address (7373 Perkins Road, Baton Rouge, LA 70808), phone number, and email address, but does not state whether the completed form can be submitted by email, fax, mail, or must be delivered in person.

---

## 6. COMPLIANCE

**Liability waiver:** The form includes a hold-harmless clause: "I hereby release and discharge The Baton Rouge Clinic, AMC of any liability and the undersigned will hold The Baton Rouge Clinic, AMC harmless for complying with this Authorization." While common in authorization forms, this language asks the patient to waive liability claims against the clinic for following the patient's own authorization — which goes beyond what HIPAA requires.

**Conditioning treatment on signing:** The form states treatment/payment will not be denied for refusing to sign, which is the correct HIPAA-compliant statement. However, it includes a carve-out for fitness-for-work examinations, which is also a legitimate exception under HIPAA.

**No fee disclosure:** The form does not mention any fees associated with record requests. Patients are not told whether they will be charged, or how much.

**No mention of response time:** The form does not state when the patient or recipient can expect to receive the records.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Required Social Security Number**: The form marks `*Social Security #:` as required (asterisk-denoted), with the footer confirming "* Information is required to process request." HIPAA does not require patients to provide their SSN to authorize a records release. Conditioning processing on SSN disclosure creates an unnecessary data collection burden and identity theft risk.

- **Liability waiver / hold-harmless clause**: "I hereby release and discharge The Baton Rouge Clinic, AMC of any liability and the undersigned will hold The Baton Rouge Clinic, AMC harmless for complying with this Authorization." This goes beyond HIPAA's requirements and may discourage patients from exercising their rights by implying legal risk.

### ⚠️ AMBIGUITIES

- **Unclear submission method**: The form provides a mailing address, phone, and email but never states how the completed form should be submitted. A patient filling out the form doesn't know whether they can email it, must mail it, or must deliver it in person.

- **Potential misdirection for patient self-access**: Because this third-party release form is more prominent in search results than the Right of Access form (form-3), patients searching for how to get their own records may use this form instead of the more appropriate and patient-friendly form-3. The forms page does not clearly guide patients to the right form for their situation.

- **"From" date range allows "ALL for all future dates"**: The "To (date)" field example states "mm/dd/yyyy or ALL for all future dates," which could be interpreted as an open-ended, perpetual authorization for future records — potentially broader than what patients intend.

### ✨ BRIGHT SPOTS

- **Medical records contact information with email**: The form provides both a phone number and email (`medrecords@brclinic.com`) for questions and urgent requests, giving patients multiple channels to reach the records department.

- **Explicit required-field marking**: The asterisk system with a clear footnote ("* Information is required to process request") helps patients understand which fields are mandatory.

- **Separate, dedicated Right of Access form exists**: While this particular form is a third-party release, the clinic maintains a distinct Right of Access form (form-3) that is shorter, simpler, cites HIPAA authority, and offers electronic delivery — evidence that the organization has thought about patient self-access as a distinct use case.
