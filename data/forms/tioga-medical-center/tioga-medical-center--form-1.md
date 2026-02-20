# Tioga Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page "Authorization for Release of Medical/Confidential Information" form bearing the Tioga Medical Center Hospital/Clinic logo and contact information (Phone: 701-664-3305 option 2, Fax: 701-664-2646, P.O. Box 159, Tioga, ND 58852). It is a general-purpose release form — not specifically designed for patient self-access under HIPAA's Right of Access. The form uses a "Release From" / "Release To" structure, indicating it is primarily oriented toward facility-to-facility or third-party disclosure rather than a patient requesting their own records.

This is the only ROI form found for Tioga Medical Center. The HIM page also links to a Word (.docx) version of the same form, plus HIPAA/Notice of Privacy Practices documents, but no separate patient-access-specific request form exists.

## 2. FINDABILITY

The form was straightforward to locate. A web search for `Tioga Medical Center "authorization" "release" "health information" form PDF` immediately surfaced the HIM page at https://www.tiogahealth.org/him. The form is directly linked from that page in both PDF and Word formats. The HIM page is accessible from the site's main navigation under "TMC." This represents a reasonable level of discoverability for a small critical access hospital — no patient portal login required, no buried navigation.

However, the source URL (`https://www.tiogahealth.org/_files/ugd/51e5d7_89494c330746455abd75cb844132f681.pdf`) is a Wix-generated file path with a non-descriptive hash, offering no indication of the document's content. The HIM page itself does not appear to provide explanatory context about when or why a patient would use this form.

## 3. TECHNICAL ACCESSIBILITY

This document has significant technical deficiencies:

- **Image-only scan**: The PDF is a CCITT fax-encoded image (1704×2199 pixels, 200 DPI grayscale) with no text layer whatsoever. `pdftotext` extracts zero characters. This means the form is completely inaccessible to screen readers and cannot be searched or indexed by text.
- **No fillable fields**: The fillable field count is 0. Patients must print the form and complete it by hand.
- **No embedded fonts**: Font count is 0, consistent with being a pure image scan.
- **File size**: 52,290 bytes (52 KB) for a single page — compact, but only because it's a low-resolution fax-quality scan.
- **Digital design**: This is clearly a scan of a paper form, not a born-digital document. The image shows slight rotation artifacts and the characteristic appearance of a photocopied/faxed document.

The availability of a Word (.docx) version partially mitigates the PDF's limitations — a patient could theoretically download the Word file, type into it, and print or email it. However, this depends on the patient having Microsoft Word or a compatible application.

## 4. CONTENT DESIGN

**Length and proportionality**: The form fits on a single page, which is appropriate for a basic authorization form. The layout is dense but not unreasonably so.

**Structure and organization**: The form follows a logical top-to-bottom flow:
1. Patient demographics (name, DOB, address)
2. Release From (facility, phone, fax, address, appointment date)
3. Release To (same fields)
4. Date range of services requested
5. Purpose checkboxes (6 options: Coordination of Services, Establishing care, Legal Proceedings, Follow-up treatment, Referral, Other)
6. Information type checkboxes (12 options: Emergency Room Record, History & Physical, Discharge Summary, Consultation Reports, Physician Orders, Laboratory Reports, Radiology Reports, ECG/EEG Reports, Nurses Notes, Progress Notes, Clinic Notes, Other) — with a tracking sidebar for "Records given □ / Number of Pages / Initials"
7. Sensitive records authorization (mental health/psychiatric, alcohol/drug abuse, HIV/AIDS)
8. Patient signature line
9. Legal disclosure paragraph
10. Three signature lines (Patient, Parent/Guardian, Witness)

**Clarity**: The form uses reasonably plain language for most sections. The legal paragraph at the bottom is a dense block of text covering revocation rights, insurance implications, re-disclosure risks, and photocopy equivalence. While comprehensive, it is presented as a single unbroken paragraph with no visual breaks or bolding to highlight key patient rights.

**Readability**: As a scanned image at 200 DPI, the text is legible but not crisp. The font appears to be approximately 10-11pt in the original, adequate for reading but tight in the legal disclosure section where the font drops slightly smaller.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is designed as a general release authorization, not a patient access request. The "Release From" / "Release To" structure implies records moving between facilities or to third parties. A patient requesting their own records would need to put themselves in the "Release To" field, which is not intuitive. There is no mention of HIPAA § 164.524 or the patient's Right of Access.

**Scope options**: The form provides good granularity for selecting specific record types (12 checkbox categories) and allows date range specification ("Dates of Services you are requesting records for From ___ To ___"). This is a positive feature.

**Format/delivery options**: No delivery format options are offered. There is no mention of electronic delivery, email, CD, USB, or patient portal access. The form's fax number and the "Release To" facility structure suggest the assumed delivery method is fax or mail between institutions.

**Sensitive records**: The form includes a separate authorization section for sensitive records: "Mental Health/psychiatric diagnosis/treatment," "Alcohol and/or Drug Abuse," and "HIV Testing/Aids/Aid related illnesses" with a note about "Diagnosis/treatment of sexually transmitted disease(s)." The age-of-consent note states "for addiction services, 14-years-old and older is considered an adult."

**EHI Export**: No mention of electronic health information export, bulk data, or any digital format options.

## 6. COMPLIANCE

**Expiration**: The form states "This release of information authorization remains in effect for six (6) months from the date of this consent unless otherwise noted." Six months is a reasonable expiration period and is within typical ranges.

**Revocation rights**: The legal paragraph states "I understand that I have the right to revoke this authorization at any time by giving written notice to the Tioga Medical Center Health Information Department." This is appropriately disclosed.

**Voluntariness**: The form states "I understand that authorizing the disclosure of this health information is voluntary. I can refuse to sign this authorization. I need not sign this form in order to assure treatment." This is a positive compliance element.

**Witness requirement**: The form includes a "Signature of Witness" line with a date field. While not explicitly labeled as required, the presence of a dedicated witness signature line could create confusion — patients may believe a witness is mandatory, which is not a HIPAA requirement for patient access requests and could create an unnecessary barrier.

**Insurance implications**: The legal text includes "I understand that the revocation will not apply to my insurance company when the law provides my insurer with the right to contest a claim under my policy." This is an unusual and somewhat confusing clause that conflates release authorization with insurance dispute rights.

**Re-disclosure warning**: "I understand that any disclosure of information carries with it the potential for unauthorized re-disclosure and the information may not be protected by federal confidentiality rules." This is standard language.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Witness signature line**: The form includes a "Signature of Witness" field. While it may not be explicitly required, its presence as a structured field on the form implies it is expected. HIPAA does not require a witness for patient access requests, and this could deter patients who don't have someone available to serve as witness.

### ⚠️ AMBIGUITIES
- **No distinction between patient access and third-party release**: The form's "Release From" / "Release To" structure makes it unclear how a patient requesting their own records should complete it. Should they list themselves under "Release To"? This ambiguity is a significant gap for patient self-access.
- **"Records given □ / Number of Pages / Initials" sidebar**: This tracking area in the information-type section appears to be for internal HIM staff use, but it's not labeled as such. Patients may be confused about whether they need to complete it.
- **"Appointment Date" fields in Release From/To sections**: These fields are unusual for a records release form and may confuse patients — it's unclear what appointment date is relevant when requesting historical records.

### ❌ ERRORS
- **"HIV Testing/Aids/Aid related illnesses"**: The text appears to contain a typo — "Aid" should likely be "AIDS" (Acquired Immunodeficiency Syndrome). This appears in the sensitive records authorization section.
- **Image-only scan with no OCR**: The PDF contains zero extractable text, making it completely inaccessible to assistive technology and non-compliant with Section 508 / ADA digital accessibility requirements.

### ✨ BRIGHT SPOTS
- **Granular record type selection**: The 12 checkbox categories for specifying which records to release give patients meaningful control over the scope of disclosure.
- **Clear voluntariness statement**: The form explicitly states patients can refuse to sign without affecting treatment — a patient-friendly disclosure that many forms omit.
- **Dual format availability**: Offering both PDF and Word (.docx) versions gives patients a path to type their responses rather than handwriting, partially compensating for the non-fillable PDF.
