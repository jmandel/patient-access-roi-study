# Evaluation: OrthoCarolina — form-3.pdf

**Organization:** OrthoCarolina (Charlotte, NC)
**Document:** "Authorization for Access/Use/Disclosure of Protected Health Information"
**Source URL:** https://www.orthocarolina.com/storage/wysiwyg/authorization_for_access_use_disclosure_of_phi_3.pdf
**Revision date:** 12/2020

---

## 1. DOCUMENT IDENTIFICATION

Form-3 is an authorization for access, use, or disclosure of protected health information — a general-purpose ROI form. It is one of **three variants** of essentially the same authorization form found on OrthoCarolina's website. All three share the same structure, mailing address (4601 Park Road, Suite 250, Charlotte, NC 28209), and phone number (704-323-2049).

Form-3 sits between form-2 (the oldest, dated 4/2017) and form-1 (the newest, revised 04/2023) chronologically. Its revision date of 12/2020 makes it a **superseded intermediate version**. Key differences from the other two forms:

- **vs. form-1 (04/2023):** Form-3 lacks the "Health Information Management Services" prefix in the header, lacks the "Office Use Only" section at the bottom, and restricts radiology images to CD only ("can only be provided on a CD"), whereas form-1 allows email delivery of radiology images. Form-3 includes a "Print Name" field and "Relationship of Representative to Patient" as separate labeled fields; form-1 collapses these differently. Form-1 uses "Orth Carolina" (apparent truncation) in its legal text, while form-3 uses the full "OrthoCarolina."
- **vs. form-2 (4/2017):** Form-3 adds "Access" to the title, offers patient portal upload as a delivery method, uses the updated fax number (704-323-3806 vs. 704-323-3941), and drops the "Complete health record" checkbox options and some record-type categories (Photographs, Consultation Reports).

This is a **general-purpose authorization form** — it is not specific to patient access requests. The same form serves patients requesting their own records and third-party releases.

---

## 2. FINDABILITY

Per the retrieval notes, all three OrthoCarolina forms were discoverable through standard web searches (e.g., `OrthoCarolina "medical records" "release form" Charlotte NC`) and site-scoped searches. No bot blocking or JavaScript rendering was required — forms were directly downloadable via their URLs.

However, the existence of **three nearly identical forms at three different URLs** is a findability concern. A patient searching the web might land on form-3 (the 12/2020 version) rather than the current form-1 (04/2023). The URL structure (`/storage/wysiwyg/authorization_for_access_use_disclosure_of_phi_3.pdf`) is descriptive but includes a cryptic `_3` suffix that provides no signal about whether it's current. The filename itself does not include a version date.

The email address for submission is provided: `OrthoCarolinaMedRec@orthocarolina.com`, and the form mentions "Upload to Patient Portal" as a submission method, which is helpful. The main medical records resource page (https://www.orthocarolina.com/resources-category/medical-records) reportedly links to form-1, not form-3 — so form-3 is effectively an orphaned legacy version that persists at a public URL.

---

## 3. TECHNICAL ACCESSIBILITY

- **Pages:** 1 (single-page form)
- **File size:** 406,966 bytes (~407 KB) — relatively large for a single-page text-based form. The metadata shows 2 embedded images and 11 fonts, which contributes to the file size but doesn't fully justify it being nearly twice the size of form-1 (218 KB) for comparable content.
- **Text layer:** Present — full text is extractable (4,790 characters), not an image-only scan.
- **Fillable fields:** **Zero.** Despite being a digitally generated PDF (not a scanned paper form), it contains no interactive form fields. Patients must print, hand-fill, and then scan/fax/mail the completed form.
- **Digital-first design:** Mixed. The PDF has a proper text layer and clean extraction, indicating it was authored digitally (likely in Word or similar). However, the complete absence of fillable fields means it fails to take advantage of the digital format. Blank-line fields like `Patient Name: ___________________________________` throughout confirm a print-first design philosophy.

The lack of fillable fields is a meaningful accessibility barrier. A patient attempting to complete this form digitally must either use a PDF annotation tool or print and re-digitize the document.

---

## 4. CONTENT DESIGN

**Length and density:** The form is a single page, which is appropriate for its scope. However, it is densely packed — approximately 4,790 characters of content crammed into one page. The delivery method section and the legal disclosure text at the bottom are particularly compressed.

**Organization:** The form follows a logical top-to-bottom flow:
1. Header with contact/submission info
2. Authorization statement
3. Patient demographics
4. Records requested (type + date range)
5. Radiology images (separate section with date range)
6. Recipient information
7. Purpose of release
8. Fee notice
9. Delivery method preferences
10. Sensitive information disclosure + legal language
11. Signature block

This structure is reasonable and follows common ROI form conventions.

**Clarity of language:** The opening authorization statement is clear: "I hereby authorize the access, use, or disclosure of my individually identifiable health information as described below. I understand that this authorization is voluntary." The re-disclosure warning — "if the organization authorized to receive the information is not a health plan or health care provider, the released information may no longer be protected by federal privacy regulations and further charges may apply" — is reasonably plain, though the phrase "further charges may apply" is ambiguous (charges for what?).

**Processing time notice:** The form states "Please allow 14 business days for your request to be processed." This is a notable expectation-setter — 14 business days (nearly 3 calendar weeks) is the stated processing window.

**Layout issues from text extraction:** The delivery method section shows evidence of a formatting problem. The extracted text reads:

> "☐ Upload records to the Patient Portal  
> I understand that unless earlier revoked, this authorization will expire one year from today.  
> ☐ Email the records to the address provided"

The expiration language ("I understand that unless earlier revoked, this authorization will expire one year from today") appears to be a sidebar or callout box that overlaps with the delivery method checkboxes in the PDF layout. This creates a confusing reading experience where legal text is interleaved with form fields.

**Record type options:** The form offers 8 checkboxes for medical records (Office Notes, Operative Report, Discharge Summary, Physical Therapy, Laboratory Results, MRI Reports, CT Reports, Itemized Statement) plus an "Other" free-text field. Radiology images get a separate section with checkboxes for X-rays, MRI, CT, and "Other (please specify body part)." This granularity is reasonable for an orthopedic practice.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose form** that serves both patient access and third-party disclosure. The "Purpose of Release" checkboxes include "Personal Use" as an option, which signals patient access, but the form does not differentiate the workflow. The recipient section states "This information is to be disclosed to the following individual or entity (MUST BE COMPLETED)" — meaning even a patient requesting records for themselves must fill out recipient information, which is unnecessary friction for personal access requests.

**Scope options:** Patients can specify date ranges for both medical records and radiology images, select specific record types via checkboxes, and write in additional items. This is good granularity — a patient can request just operative reports or just lab results rather than the entire record.

**Format/delivery options:** The form offers 7 delivery methods:
1. Upload records to the Patient Portal
2. Email records to the address provided
3. Fax records to the number provided
4. Mail paper records to address provided
5. Mail CD of records to the address provided
6. Mail CD of images to the address provided
7. Pick up records at a specified location

Offering patient portal upload is a strong feature. However, the note that radiology images "can only be provided on a CD" is a limitation (form-1, the newer version, adds email as an option for radiology images).

**Rights language:** The form includes the mandatory HIPAA statement that authorization cannot be conditioned on treatment (with the standard two exceptions for research and disclosure-only care). It mentions the right to revoke "at any time by notifying OrthoCarolina in writing." The statement "YOU MAY REFUSE TO SIGN THIS AUTHORIZATION" appears at the bottom in what appears to be emphasized text. However, there is no affirmative reference to HIPAA § 164.524 or the patient's Right of Access. No mention of electronic health information export or bulk data access.

**Fee disclosure:** The form states "Medical record copy fees are determined by both the nature/purpose of your request and the format/method of delivery" and adds "If requesting both Medical Records and CD of Images there is a separate fee for each request." Fees are not enumerated — they are left vague, determined by unspecified criteria. This makes it impossible for a patient to estimate costs before submitting.

---

## 6. COMPLIANCE

**Processing timeline:** "Please allow 14 business days for your request to be processed." HIPAA requires response within 30 calendar days (with a possible 30-day extension). 14 business days (~20 calendar days) is within the HIPAA window, but stating it as "business days" rather than calendar days creates ambiguity about the actual commitment.

**Expiration:** "This authorization will expire one year from date of signature." A one-year expiration is standard and reasonable.

**Fee structure:** The vague fee language ("determined by both the nature/purpose of your request and the format/method of delivery") is concerning for patient access requests. Under HIPAA's Right of Access, fees for patient access to their own records are limited to reasonable, cost-based fees. Varying fees by "purpose" could mean patients requesting records for personal use are charged differently than those requesting for medical care — the form doesn't clarify. The separate fee for radiology images on CD is also noted.

**Sensitive information:** The form includes a blanket statement that records "may include information relating to treatment for drug or alcohol abuse, sickle cell anemia, psychological or psychiatric impairments, sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), and AIDS related complex (ARC) and/or human immunodeficiency virus (HIV)." This is a disclosure notice, not a separate consent — the patient's signature on the overall authorization covers these categories. This approach is more permissive than form-1, which has separate checkboxes for sensitive information categories. Whether this complies with state-specific requirements for substance abuse (42 CFR Part 2) or HIV records depends on North Carolina law.

**Liability waiver:** The form includes: "OrthoCarolina, its employees, officers, and physicians are hereby released from any legal responsibility or liability for disclosure of the above information to the extent indicated and authorized herein." This is a liability release embedded in a records request form, which is not a HIPAA requirement and adds legal language that may intimidate patients.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Liability waiver in ROI form:** The form requires patients to agree that "OrthoCarolina, its employees, officers, and physicians are hereby released from any legal responsibility or liability for disclosure of the above information." Embedding a liability release in a records access form is not required by HIPAA and may discourage patients from exercising their right of access.

- **Vague, purpose-dependent fee structure:** Fees are "determined by both the nature/purpose of your request and the format/method of delivery." Under HIPAA's Right of Access, fees for patient access must be reasonable and cost-based. Conditioning fees on "purpose" without disclosing amounts creates a risk of overcharging patients for personal-use requests.

### ⚠️ AMBIGUITIES

- **"Further charges may apply" in re-disclosure warning:** The phrase "further charges may apply" at the end of the re-disclosure notice is unclear — it could refer to fees from the receiving entity or additional OrthoCarolina charges. This language does not appear in form-2 (the older version).

- **Interleaved expiration language:** The authorization expiration statement ("I understand that unless earlier revoked, this authorization will expire one year from today") is embedded within the delivery method checkbox section in the PDF layout, making it easy to overlook and creating visual confusion about whether it's a separate acknowledgment or part of a delivery option.

- **Orphaned form version:** This form (revised 12/2020) coexists at a public URL alongside form-1 (04/2023) and form-2 (4/2017). A patient arriving at this URL has no indication it may not be the current version, and no redirect is in place.

### ❌ ERRORS

- **Radiology image CD-only restriction is outdated:** Form-3 states radiology images "can only be provided on a CD," but the newer form-1 (04/2023) offers email delivery for radiology images. This restriction in form-3 is now factually incorrect relative to OrthoCarolina's current capabilities.

### ✨ BRIGHT SPOTS

- **Multiple submission channels:** The form offers mail, email, fax, patient portal upload, and in-person pickup — giving patients meaningful choice in how they submit and receive records.

- **Patient portal upload option:** Including "Upload to Patient Portal" as both a submission method and a delivery method is forward-thinking and reduces barriers for digitally comfortable patients.

- **"YOU MAY REFUSE TO SIGN THIS AUTHORIZATION":** This explicit statement at the bottom of the form, while legally required, is presented prominently and serves as a clear reminder of patient autonomy.
