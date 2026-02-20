# Evaluation: Memorial Healthcare System — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is the primary English-language **"Authorization for Release of Confidential Medical Records"** for Memorial Healthcare System, a government-owned regional hospital system in Hollywood, FL. The form number is **2310-10173 (05/21)**, indicating a May 2021 revision.

Memorial Healthcare System published four related documents on their Medical Records page:
- **form-1.pdf** (this document): English ROI authorization (2 pages, 2.45 MB)
- **form-2.pdf**: Spanish translation of the same form (2 pages, 709 KB)
- **form-3.pdf**: Haitian Creole translation (2 pages, 714 KB)
- **form-4.pdf**: Request for Amendment of Protected Health Information (1 page) — a separate HIPAA right, not an ROI form

This is a **general-purpose authorization form** — it authorizes disclosure of records to any named recipient, not specifically for patient self-access. The form's section 2 reads: "I authorize the above to disclose protected health information about the person named below," and section 4 asks for a recipient name and address, which could be the patient or a third party. There is no separate patient-access-specific form.

## 2. FINDABILITY

**Easy to locate.** Per retrieval notes, the form was found on the first web search attempt and is linked from the main website navigation at **Patients & Visitors > Medical Records** (https://www.mhs.net/patients-and-visitors/medical-records). The PDF URL is descriptive: `https://www.mhs.net/-/media/mhs/files/patients-and-visitors/medical-record-request.pdf`. No login, CAPTCHA, or bot blocking was encountered. The medical records page also links the Spanish, Creole, and Amendment forms, making the full suite discoverable from one location.

## 3. TECHNICAL ACCESSIBILITY

**Mixed.** The document has a text layer (not an image-only scan), which is good for accessibility and search. However, there are notable technical concerns:

- **No fillable fields**: The form has **0 interactive form fields** despite having numerous blanks for patient name, date of birth, dates of service, recipient name/address, email address, signature, and checkboxes. Every field must be completed by hand after printing.
- **Bloated file size**: At **2,455,765 bytes (2.45 MB)** for a 2-page form, this is extremely large. The Spanish and Creole translations of the identical form are ~700 KB each, suggesting the English version has unnecessary embedded content. The metadata confirms **23 fonts** and **7 embedded images** — far more than a 2-page form should need.
- **Garbled/extraneous text**: The extracted text contains significant amounts of extraneous content that appears to be from overlapping template layers or embedded business card/letterhead elements. Examples include repeated administrator names ("Michelle Marie Jadotte, MSN, ARPN", "Sharon Kaplan, Assistant Administrator"), facility addresses, fax numbers, and physician rosters (Iftikhar Hanif, MD; Brian E. Cauff, MD; etc.) that are not part of the form's functional content. Labels like **"JDCH Oncology BC (Multiple Doctors & Locations) FRONT"** and **"RIOSF Stacked"** suggest internal template/layer names that should not be visible. This content appears duplicated across pages.
- **Not digital-first**: This is clearly designed as a print-and-fill form. The structure — checkboxes, blank lines, signature/date fields — is oriented entirely toward paper completion.

## 4. CONTENT DESIGN

**Reasonably well-organized but dense.** The form uses a numbered structure (sections 1–5) with logical ordering:

1. **Facility selection** — checkboxes for 14 locations across the Memorial Healthcare System, including an "All Memorial Healthcare System Facilities" option and an "Other (specify)" write-in
2. **Patient identification** — name and date of birth
3. **Record type selection** — granular options including Abstract (a defined subset marked with asterisks), plus individual record types: Face Sheet, Discharge Summary, ER records, H&P, Progress Notes, Operative Reports, Pathology, Consultation, EKG, Lab, X-ray, and "All Medical Records"
4. **Recipient information** — name, address, and email field
5. **Acknowledgment statements** — eight lettered statements (a–h) covering revocation rights, expiration, sensitive information types, re-disclosure, electronic records risk, marketing compensation, and non-conditioning of treatment

The acknowledgments section (5a–5h) is **dense legal text** with long, complex sentences. For example, statement 5e reads: "I understand that records in an electronic form can be distributed on a wide scale with relative ease and losses or unintended releases of the requested information may occur under circumstances beyond the control of MHS, its release of information vendor or the person making the request. By requesting records in this format the requestor is knowingly and voluntarily assuming this risk and all consequences, losses and damages that might result." This is not plain language.

The form does include a helpful note: "Note: X-ray images must be obtained from the Radiology Department" — setting appropriate expectations about scope.

The second page appears to contain primarily administrative/facility contact information and footer elements, based on the extracted text showing repeated addresses, phone/fax numbers, and facility listings.

## 5. PATIENT-CENTEREDNESS

**Above average in several respects, but fundamentally a third-party release form.**

**Strengths:**
- **Multiple delivery methods**: The form header prominently lists "Pick-up / Mail Out / e-Delivery / CD / MyChart" as options — covering paper, electronic, and patient portal delivery
- **Email delivery**: Section 4 includes "I request my records be sent to me at this e-mail address" — explicitly supporting electronic delivery to patients
- **Granular record selection**: Patients can request specific record types rather than being limited to all-or-nothing
- **Multilingual availability**: English, Spanish, and Haitian Creole versions reflect the diverse South Florida patient population
- **Fast processing**: Per the medical records webpage, processing is "within two business days"
- **Non-conditioning statement**: Statement 5g explicitly states MHS "may not condition treatment, payment, enrollment or eligibility of benefits on the completion of this Authorization"

**Weaknesses:**
- **Not patient-access-specific**: The form is structured as a general authorization to release records to any third party. There is no streamlined pathway for patients simply requesting their own records — they must fill out the same form used for releases to attorneys, insurers, or other providers
- **No HIPAA Right of Access reference**: The form does not mention HIPAA § 164.524 or the patient's right of access. The non-conditioning language in 5g references authorization generally, not the specific right to obtain one's own records
- **No EHI export mention**: No reference to electronic health information export, bulk data, or USCDI
- **Purpose field is open-ended**: Statement 5h asks "This information will be used / disclosed for the following purpose(s)" with a blank — patients requesting their own records may not know what to write here
- **Electronic delivery risk warning may discourage digital access**: Statement 5e's lengthy warning about electronic records being "distributed on a wide scale" and the requestor "knowingly and voluntarily assuming this risk" could deter patients from choosing e-Delivery or MyChart

## 6. COMPLIANCE

- **6-month expiration**: Statement 5b states "This Authorization will expire six (6) months from date of signature, or when revoked or on the following date:" — the 6-month default is reasonable and standard
- **Revocation rights**: Statement 5a clearly explains how to revoke (written request to privacy officers, with addresses on back of form)
- **Sensitive information disclosure**: Statement 5c explicitly covers HIV/AIDS, mental health/psychiatric care, substance abuse treatment, and genetic testing results — properly noting these categories per Florida and federal law
- **Marketing compensation disclosure**: The form includes a section asking whether MHS will receive compensation for the disclosure and from whom — this is a HIPAA requirement for marketing authorizations (§ 164.508(a)(3))
- **No notarization requirement**: None mentioned
- **No in-person-only restriction**: The form can apparently be mailed or submitted electronically
- **Fees**: Not disclosed on the form itself; the medical records webpage notes "copy charges as authorized by Florida law" but states no charge for records sent to treating physicians for continuity of care
- **Re-disclosure warning**: Statement 5d warns that information "may be subject to re-disclosure" and "may no longer be protected by the federal privacy laws" — standard language

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Trilingual form availability** (English, Spanish, Haitian Creole) is exemplary and reflects genuine attention to the South Florida community's language needs. Many organizations provide only English forms, or English plus Spanish at most. The Haitian Creole translation is notably uncommon.
- **Five delivery method options** (Pick-up, Mail, e-Delivery, CD, MyChart) listed prominently at the top of the form. Offering MyChart portal delivery alongside traditional methods is forward-thinking and reduces barriers for digitally engaged patients.
- **Two-business-day processing commitment** (per the medical records webpage) is significantly faster than the HIPAA-allowed 30-day window.

### 🚩 RED FLAGS

- **Electronic delivery risk-shifting language** (statement 5e) frames electronic records delivery as inherently risky and requires the requestor to accept "all consequences, losses and damages." This language could discourage patients from exercising their right to receive records electronically, and the broad liability disclaimer ("circumstances beyond the control of MHS, its release of information vendor") may overreach relative to HIPAA's requirement that covered entities provide records in the electronic form requested if readily producible.

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party release is undifferentiated**: A patient requesting their own records fills out the same form and process as an attorney or insurer requesting records. The form does not clarify that patient self-access requests are subject to different rules (e.g., HIPAA Right of Access timelines, fee limits under § 164.524(c)(4)) than third-party authorization requests.
- **Purpose field**: The blank for "This information will be used / disclosed for the following purpose(s)" may confuse patients. Under HIPAA § 164.524, patients do not need to state a purpose for accessing their own records. Requiring a purpose here could create an impression that the request may be denied if the purpose is deemed insufficient.

### ❌ ERRORS

- **Extraneous template content in PDF**: The extracted text includes internal template labels ("JDCH Oncology BC (Multiple Doctors & Locations) FRONT", "RIOSF Stacked"), repeated administrator contact blocks, and physician roster information that appears to be from hidden or overlapping PDF layers. This inflates the file size to 2.45 MB (vs. ~700 KB for the identically structured Spanish/Creole versions) and produces garbled text when processed by assistive technologies or text extraction tools.
- **Duplicated page content**: The extracted text shows page 2 content (administrator names, addresses, facility listings) repeated with slight variations, suggesting layering or versioning artifacts within the PDF file. Two different revision dates appear in the text: "2310-10173 (05/21)" and "2310-10173 (9/18)", indicating an older version may be embedded beneath the current one.
