# MUSC Health University Medical Center — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is **not an authorization form**. It is a 5-page instructional guide titled "Request Medical Records via MyChart" that walks patients through the process of requesting medical records through MUSC's MyChart patient portal. The document consists primarily of screenshots (10 embedded images) with brief textual instructions.

Within the MUSC Health document set, this is one of three PDFs:
- **form-1.pdf**: The actual English-language "Authorization to Release Protected Health Information" form (2 pages)
- **form-2.pdf** (this document): MyChart instructional guide (5 pages)
- **form-3.pdf**: Spanish-language version of the authorization form (2 pages)

This document serves as a companion/supplementary guide rather than a standalone ROI form. It explicitly directs patients to the HIPAA authorization form for third-party releases: "For medical records to be sent directly to a physician office, hospital or third parties and for radiology image requests, please complete a MUSC HIPAA Compliant Authorization Form."

## 2. FINDABILITY

The document is hosted at `https://mychart.muschealth.com/mychart/en-us/docs/Med%20Rec%20Request.pdf` — on the MyChart subdomain rather than the main muschealth.org domain. Per the retrieval notes, it was found through a web search for `MUSC Health "medical records" "release form" filetype:pdf`. It was not prominently linked from the main medical records page (muschealth.org/patients-visitors/medical-records), which focuses on the authorization form and the eRequest tool.

A patient navigating the main MUSC website would likely encounter the authorization form (form-1) or the Ciox eRequest tool before finding this PDF. It appears to be a support document within the MyChart ecosystem, likely linked from within the portal itself rather than from the public-facing website. The URL structure (`mychart.muschealth.com/mychart/en-us/docs/`) suggests it is documentation embedded in the MyChart application.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 524,775 bytes — relatively large for 5 pages, owing to 10 embedded screenshot images.
- **Text layer**: Present (`has_text_layer: true`), but the actual extractable text is only 1,924 characters across 5 pages. The bulk of the content is in the screenshot images, which are not machine-readable.
- **Fillable fields**: Zero — appropriate since this is an instructional guide, not a form.
- **Fonts**: 3 fonts used.
- **Image-only**: Not flagged as image-only scan, but the heavy reliance on screenshots means most instructional content is locked inside images and inaccessible to screen readers, translation tools, or text search.

The document would be poorly served by assistive technologies. The screenshot images likely lack alt text (standard PDFs with embedded images typically do not include alt text), meaning a visually impaired patient using a screen reader would get only the sparse text instructions without the visual context they reference.

## 4. CONTENT DESIGN

The document opens with important caveats before diving into instructions:

> "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient."

> "A prepay notice will be mailed or emailed (via MyChart) and once paid; the records will be released."

> "Some records requested to be released to MyChart will only be available to be sent via US Mail."

The step-by-step instructions are brief and direct:
1. Click on MY MEDICAL RECORD → QUESTIONNAIRES
2. Choose REQUEST MY MEDICAL RECORDS
3. Complete all required fields → CONTINUE
4. Review → SUBMIT QUESTIONNAIRE
5. Receive records via MyChart; download with system-generated password

The writing is plain and procedural, appropriate for a how-to guide. However, the instructions are tightly coupled to a specific MyChart UI version — any portal redesign would make the screenshots and navigation paths obsolete. There is no date or version indicator on the document itself (unlike form-1, which notes "Rev. 10/2023").

The document references a URL for the authorization form: `http://www.muschealth.org/patients-visitors/medical-records/obtainingrecords.html` — notably using **http** (not https) and a path (`obtainingrecords.html`) that may differ from the current site structure.

## 5. PATIENT-CENTEREDNESS

**Strengths**: The document provides a genuinely useful walkthrough of an electronic records request pathway. Having a MyChart-based request option is patient-friendly, allowing requests to be submitted digitally without printing, signing, and mailing/faxing a paper form.

**Weaknesses**:
- **Fee barrier prominently stated**: The very first sentence announces fees. While fee disclosure is reasonable, leading with it — before any instruction — creates a discouraging tone. The document states records require prepayment before release, which may chill patient access requests.
- **No fee amounts specified**: The document says fees exist but gives no indication of how much they are, leaving patients unable to anticipate costs.
- **Older records limitation**: The note that "Some records requested to be released to MyChart will only be available to be sent via US Mail" depending on "the year the visit occurred and / or what electronic system the records were generated in" is vague. A patient cannot know in advance whether their records qualify for electronic delivery.
- **Password-protected downloads**: Records are delivered as password-protected PDFs with system-generated passwords. While this adds security, it introduces a usability friction point — the patient must navigate to REQUESTED RECORDS, click SHOW PASSWORD, copy it, and paste it into the PDF reader. This multi-step retrieval process may challenge less technically savvy patients.
- **No mention of patient rights**: Unlike form-1, this document makes no reference to HIPAA rights, the right to access records, or the voluntary nature of authorization. It is purely transactional.

## 6. COMPLIANCE

- **Fees for patient access**: The document states "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient." Under HIPAA's Right of Access (45 CFR § 164.524), fees for patient access to their own records are limited to reasonable, cost-based fees for copying. Charging for "search" of records for patient access requests may exceed what HIPAA permits — HIPAA only allows cost-based fees for labor for copying (not searching) when the request is from the patient for their own records. The blanket statement that fees apply to "all patient requests" does not distinguish between patient access requests (which have HIPAA fee limits) and third-party release requests.
- **Prepayment requirement**: Requiring prepayment before releasing records to the patient ("once paid; the records will be released") may conflict with HIPAA guidance. OCR has clarified that covered entities should not condition access on upfront payment.
- **30-day processing**: Not mentioned in this document (it is mentioned in form-1), so there is no timeline expectation set for MyChart requests.
- **The document is not itself an authorization form**, so standard authorization requirements (expiration, revocation rights, etc.) do not apply to it.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"Fee charged for the search and duplication of medical records for all patient requests released to the patient"** — Charging for "search" in patient access requests likely exceeds HIPAA-permitted fees. HIPAA allows only reasonable, cost-based fees for copying, not for search/retrieval, when the patient is requesting their own records.
- **Prepayment requirement** — "A prepay notice will be mailed or emailed (via MyChart) and once paid; the records will be released." Conditioning release of records on upfront payment may violate HHS/OCR guidance on patient access rights.

### ⚠️ AMBIGUITIES

- **No fee amounts disclosed** — Patients are told fees exist but given no schedule, estimate, or cap. This makes it impossible to assess reasonableness before submitting a request.
- **Vague older-records limitation** — "This will depend on the year the visit occurred and / or what electronic system the records were generated in" gives the patient no way to predict whether they'll receive records electronically or via mail.
- **No distinction between patient access and third-party release** — The fee language applies to "all patient requests released to the patient," conflating patient access rights (which have HIPAA fee protections) with other request types.

### ❌ ERRORS

- **Potentially broken URL** — The document references `http://www.muschealth.org/patients-visitors/medical-records/obtainingrecords.html` using HTTP (not HTTPS) and an `obtainingrecords.html` path. The retrieval notes indicate the current page is at `muschealth.org/patients-visitors/medical-records`, suggesting this URL may be outdated or broken.
- **No version date** — Unlike form-1 (Rev. 10/2023) and form-3, this document has no revision date, making it impossible to know how current the screenshots and instructions are.
- **Screenshots may be outdated** — The document's 10 embedded screenshots are tied to a specific MyChart UI version. Any portal update would render navigation instructions inaccurate with no versioning mechanism to flag staleness.

### ✨ BRIGHT SPOTS

- **Electronic request pathway exists** — The fact that MUSC offers a MyChart-based records request mechanism at all is a positive. Many organizations require paper forms exclusively.
- **Password-protected delivery** — Delivering records as password-protected PDFs via MyChart demonstrates attention to security, even if it adds usability friction.
