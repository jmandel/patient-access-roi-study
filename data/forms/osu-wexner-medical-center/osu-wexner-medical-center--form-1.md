# Evaluation: OSU Wexner Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a single-page "Authorization to Release Medical Information" form for The Ohio State University Wexner Medical Center and James Cancer Hospital and Solove Research Institute. It is an **image-only scan** of a paper form — there is no extractable text layer and no fillable fields. The filename on the PDF metadata is "1. 8510010515.g.cmp.pdf," and the creation date is November 25, 2019, with the form number "MC040184 (11/19)" visible at the bottom.

The organization also publishes **form-2.pdf**, a 2-page digitally-created PDF (with text layer) that bundles an instructions page with what appears to be the same authorization form. Form-1 is essentially the authorization form alone, presented as a scanned image, while form-2 is the more complete and technically superior version. Both are linked from the same Medical Records page and appear to contain identical form content — the same fields, checkboxes, legal text, and submission addresses.

## 2. FINDABILITY

According to retrieval notes, both forms were found on the **first web search attempt** with direct download links. The forms are linked from the [Medical Records page](https://wexnermedical.osu.edu/patient-and-visitor-guide/medical-records). The source URL is descriptive: `/patient-care/patient-and-visitor-guide/medical-records/authorization-to-release-medical-information-112619.pdf`. The filename includes the date "112619" (November 26, 2019), providing version context. Retrieval difficulty is rated **Easy** — no bot blocking, login walls, or JavaScript rendering issues were encountered.

The existence of two forms on the same page without clear differentiation could cause minor confusion — a patient might not know which to download. However, the URLs and the fact that both are directly available mitigates this.

## 3. TECHNICAL ACCESSIBILITY

Form-1 is technically deficient in nearly every accessibility dimension:

- **Text layer**: None. `pdftotext` extracts zero meaningful characters (1 byte — a form feed). The metadata confirms `has_text_layer: false` and `is_image_only_scan: true`.
- **Fillable fields**: Zero. `fillable_field_count: 0`. The form must be printed and filled by hand.
- **Fonts**: Zero embedded fonts (`font_count: 0`), confirming the entire page is a raster image.
- **Image count**: 1 embedded image — the entire page content is a single scanned image.
- **Creator**: "Global Graphics Harlequin RIP" — a raster image processor, confirming this was produced by scanning a paper document.
- **File size**: 231,492 bytes for a single page — large relative to what a text-based PDF of the same content would be.
- **PDF version**: 1.4.
- **Accessibility**: Not tagged (`Tagged: no`). A screen reader cannot read any content from this document. It is completely inaccessible to users with visual impairments.

From the screenshot, the scan quality is legible but not pristine. Text is readable at 100% zoom, but the scanned nature introduces slight graininess. The form appears to have been designed on paper and then digitized through scanning rather than being recreated digitally.

## 4. CONTENT DESIGN

Despite the scan-quality limitations, the visual layout of form-1 is reasonably well organized when viewed as an image:

- **Length**: 1 page. The form is dense but fits everything onto a single letter-size page.
- **Sections**: The form follows a logical top-to-bottom flow: Patient Information → Dates of Service → Specific Reports → Purpose of Disclosure → Release From → Release To → Legal disclosures → Signature → Submission addresses.
- **Checkboxes**: The "Specific Reports to be Disclosed" section offers 11 checkbox options organized in three columns: Emergency Department Records, Discharge Information, History and Physical Exam, Consults/Assessment, Progress Notes, Therapy Notes, Plan of Care, Operative/Procedure Reports, Laboratory Reports, Pathology Reports, Radiology Reports, plus an "Other" line.
- **Purpose of Disclosure**: 6 checkbox options — Medical Treatment, Disability, Insurance, Legal Reasons, Personal, Other.
- **Release From**: 8 facility checkboxes — James Cancer Hospital and Solove Research Institute, Ohio State University Wexner Medical Center, Brain and Spine Hospital, Dodd Hall, East Hospital, OSU Harding, Ross Heart Hospital, University Hospital, plus "Other (Specify)."
- **Release To**: Split into two columns — one for external recipients ("Other") with name/address/phone/fax/email fields, and one for internal OSU/James Cancer transfers with provider specification lines.
- **Font size**: Appears to be approximately 8–9pt in the scanned image, making it somewhat small, particularly in the legal disclosure paragraphs.
- **Cramping**: The lower portion of the form — the legal text and submission addresses — is noticeably cramped. Four dense paragraphs of legal text are squeezed between the "Release To" section and the signature lines.
- **No instructions**: Unlike form-2, this version has no instructions page. A patient receiving this form alone must interpret field labels and legal text without guidance.

## 5. PATIENT-CENTEREDNESS

- **Patient access vs. third-party release**: This is a **general-purpose authorization form** — it covers both patient self-requests and third-party disclosures. There is no separate pathway or language specifically addressing a patient requesting their own records under HIPAA's Right of Access (45 CFR § 164.524). The form uses "Release Information To" language, implying a sender-recipient model rather than patient access.
- **Scope options**: The form provides reasonable granularity for specifying what records to release — 11 record-type checkboxes plus date range fields ("From" and "To"). This is adequate for most patient needs.
- **Format/delivery options**: The form provides **no options for electronic delivery**. There is no mention of email delivery, patient portal access, CD/USB, or any format preference. The submission addresses are physical mail locations and phone numbers only. No fax number is provided for submission (though the "Release To" section includes a fax field for the recipient).
- **Right of Access language**: There is no mention of HIPAA § 164.524, patient rights, or the Right of Access. The legal paragraphs reference the "Notice of Privacy Practices" and HIPAA generally but only in the context of re-disclosure risk.
- **EHI Export**: No mention of electronic health information export or bulk data access.
- **Fees**: The form states: "Based on regulatory requirements, a fee may be charged for copies of medical records." It directs fee questions to "CIOX Health at 1-800-367-1500," identified as a business associate. The fee language is vague — no schedule, no cap reference, no distinction between patient access fees and third-party fees.
- **Signature requirement**: The legal text (visible in form-2's extracted text, same form content) requires "A wet ink signature and date on the form or an eSignature (e.g., Adobe) with a date & time stamp." However, since form-1 is an image-only scan with no fillable fields, eSignature is practically impossible without third-party tools.
- **Psychotherapy notes**: The form correctly notes that a "separate form" is required for psychotherapy notes, consistent with HIPAA requirements.
- **Substance use disorder**: The form includes a paragraph noting that records related to substance use disorder require additional consent under federal law (42 CFR Part 2).

## 6. COMPLIANCE

- **Fee disclosure**: The form mentions potential fees but provides no fee schedule or cost estimate. It references CIOX Health (now Veracross/Ciox, a major HIM vendor) as the fee contact. Under HIPAA, fees for patient access are limited to reasonable cost-based fees; the form does not clarify whether patient self-requests are subject to the same fees as third-party requests.
- **One-year validity**: The form states it "is valid for one year unless I give written notice prior to the release of the information." A one-year expiration is reasonable and within HIPAA norms.
- **No notarization required**: The form does not require notarization — positive.
- **No in-person requirement stated**: The submission instructions list mailing addresses and phone numbers but do not explicitly require in-person submission.
- **Treatment conditionality**: The form includes appropriate language: "treatment or payment for the care I have received at OSUWMC is not dependent on my signing this release, unless treatment is for research or the care was given to provide information to a third party."
- **Re-disclosure warning**: Present — "The information released as a result of this form may be re-disclosed by the recipient and may no longer be protected by federal or state privacy rules, such as HIPAA."
- **Sensitive information inclusion**: The authorization notes that released information "may include treatment for physical and mental illness, alcohol or drug use, AIDS (Acquired Immunodeficiency Syndrome) or HIV testing." This is a blanket inclusion rather than requiring separate opt-in for sensitive categories (except psychotherapy notes).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **CIOX Health as fee intermediary with no fee transparency**: The form directs all fee questions to CIOX Health (1-800-367-1500), a third-party business associate, without providing any fee schedule, cost estimates, or distinguishing patient-access fees from third-party release fees. Patients requesting their own records under HIPAA's Right of Access are entitled to fees limited to reasonable cost-based amounts. The opacity around pricing, combined with a third-party vendor handling billing, creates a potential barrier — patients may be discouraged from requesting records or may be charged fees that exceed HIPAA limits without knowing their rights.

### ⚠️ AMBIGUITIES

- **Two forms, no clear guidance on which to use**: The organization publishes both form-1.pdf (image-only scan, no instructions) and form-2.pdf (digital PDF with instructions page) from the same Medical Records page. There is no obvious indication of which a patient should use. They appear to contain the same authorization form, but form-1's inferior technical quality makes it the worse choice in every scenario.
- **No submission fax number**: The form provides three physical mailing addresses for submission but no fax number or email address for submitting the completed form. The "Release To" section includes a fax field for the *recipient* of records, but the submission instructions only list mail addresses and phone numbers. It is unclear whether fax submission is accepted.

### ❌ ERRORS

- **Image-only scan with no text layer**: The entire form is a single raster image with zero extractable text, zero embedded fonts, and no accessibility tagging. This fails WCAG and Section 508 accessibility requirements. A screen reader user cannot read or interact with this document at all. Given that the organization has a proper digital version (form-2.pdf) with full text, this scan version appears to be a legacy artifact that was never updated.

### ✨ BRIGHT SPOTS

- **Granular record-type checkboxes**: The form provides 11 specific record-type checkboxes (Emergency Department Records, Progress Notes, Lab Reports, Pathology Reports, Radiology Reports, etc.) plus an "Other" field, giving patients meaningful control over what is released.
- **Multi-facility selection**: The "Release Information From" section lists 8 specific OSU facilities with individual checkboxes, which is helpful for patients who received care at multiple locations within the system and want records from specific sites.
- **Substance use disorder acknowledgment**: The form includes a clear paragraph about 42 CFR Part 2 protections for substance use disorder records, informing patients that additional consent is required — a compliance-positive detail that many forms omit.
