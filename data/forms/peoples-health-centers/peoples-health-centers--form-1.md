# Evaluation: Betty Jean Kerr People's Health Centers — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

**form-1.pdf** is a **HIPAA Notice of Privacy Practices (NPP)**, not a Release of Information (ROI) or Authorization form. It is a 10-page document sourced from the parent organization's site at `https://peoplesfamilystl.org/wp-content/uploads/2023/08/NPP-2.pdf`. The document references 45 CFR 164.520 (the regulation governing NPPs) and is titled "NOTICE OF PRIVACY PRACTICES."

This is the **only document** retrieved for this organization. No ROI/authorization form was found despite exhaustive searching (see notes.md). The NPP was downloaded as the closest publicly available document related to health information access. A second document — a Patient Rights and Responsibilities PDF — was identified on the parent organization site but returns a 500 Internal Server Error and could not be retrieved.

Because this is not an ROI form, this evaluation assesses the document on its own terms as an NPP, while noting the complete absence of an actual authorization form.

## 2. FINDABILITY

The ROI form itself was **not findable**. The organization has a dedicated "Requests for Release of Health Information" page at `https://phcenters.org/release-of-health-information/`, but this page contains **only contact information** (fax numbers, mailing address, patient portal login) — no downloadable form.

The NPP (form-1.pdf) was found not on the main phcenters.org site but on the **parent organization's site** (peoplesfamilystl.org). It was not linked from the main patient-facing website. A patient navigating phcenters.org would not encounter this document.

Search strategies that failed to locate an ROI form included:
- Google/Bing searches with multiple query variations
- Direct site navigation and page browsing
- Crawling WordPress upload directories (which had directory listing enabled — a security concern in itself)
- Wayback Machine historical archive searches

The organization appears to distribute ROI forms **only in-person or through a login-required patient portal (Medfusion/NextGen)**. This creates a significant barrier for patients who want to initiate a records request remotely.

## 3. TECHNICAL ACCESSIBILITY

The NPP document itself has reasonable technical qualities:
- **Text layer**: Present (`has_text_layer: true`), enabling search, copy-paste, and screen reader access
- **Page count**: 10 pages
- **File size**: ~197 KB — modest and quick to download
- **Fillable fields**: 0 — appropriate for an NPP, which is informational and not a form to be completed
- **Fonts**: 7 fonts used
- **Images**: 7 embedded images
- **Not a scan**: The document is digitally authored, not an image-only scan

The text extraction is largely clean, though there are some OCR-like artifacts in the extracted text: "unay" (should be "may"), "energency" (should be "emergency"), "detertnined" (should be "determined"), "cornpetency" (should be "competency"), "treattnent" (should be "treatment"), "Dehnar" (should be "Delmar"), "enforcernent" (should be "enforcement"). These suggest the PDF may have been created from a degraded source or has encoding issues affecting certain character combinations.

## 4. CONTENT DESIGN

The NPP follows a **structured outline format** with lettered sections (A, B, C) and numbered subsections. Key structural elements:

- **Section A**: Commitment to patients' privacy — introductory framing
- **Section B**: Permitted uses and disclosures of PHI — the bulk of the document (6 numbered categories)
- **Section C**: Patient rights regarding PHI — 4 enumerated rights (numbered inconsistently — see errors below)

**Strengths:**
- The document opens with a clear header: "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY"
- The regulatory reference (45 CFR 164.520) is cited explicitly
- Named privacy officer contact (Myson Joseph) with address and phone number is provided multiple times throughout
- The document covers required NPP content areas: uses/disclosures, patient rights, complaints

**Weaknesses:**
- At 10 pages and ~27,800 characters, the document is **dense and legalistic**. There is no plain-language summary, glossary, or simplified overview for patients
- No table of contents or visual navigation aids
- No effective date or revision date is stated — patients cannot tell when this notice was last updated
- The language is heavily regulatory ("covered entity," "Privacy Rule," "permissive uses and disclosures") with minimal effort to translate into patient-friendly language
- The document acknowledges this complexity: "We realize that these laws are complicated, but we must provide our patients with the following important information" — but then proceeds without simplification

## 5. PATIENT-CENTEREDNESS

This document has **limited patient-centeredness**. While it technically informs patients of their rights, the presentation creates barriers:

**Access rights (Section C.3):** The document states patients "have the right to inspect and obtain a copy of their PHI" but provides only a **single channel** for exercising this right: written request to the Privacy Officer at a physical address. There is no mention of:
- Email or electronic submission
- Patient portal as a records request channel
- Turnaround times for fulfilling requests
- What format records will be provided in

**Fees:** The document states "BJKPHC charge a fee for the costs of copying, mailing, labor and supplies associated with the requests" but provides **no fee schedule or cost estimate**. Patients cannot anticipate costs before submitting a request.

**Authorization:** Section C.4 (confusingly numbered — see errors) states that the organization "will obtain patients' written authorization for uses and disclosures that are not identified by this notice" and that authorizations "may be revoked at any time in writing." This is standard language but provides no practical guidance on how to obtain or submit an authorization form.

**Complaint process:** Patients are told they can file complaints with BJKPHC or HHS, but no HHS contact information is provided — only the internal privacy officer. The document states "All complaints must be submitted in writing" without explaining what constitutes a valid written complaint.

## 6. COMPLIANCE

As an NPP, the document covers the **required HIPAA content areas** specified in 45 CFR 164.520(b):
- Uses and disclosures for TPO ✓
- Disclosures requiring authorization ✓
- Patient rights (access, amendment, accounting, confidential communications, restrictions) ✓
- Complaints ✓
- Privacy Officer contact ✓

**Notable compliance concerns:**

- **No effective date**: 45 CFR 164.520(b)(1)(vi) requires the NPP to contain its effective date. No date appears anywhere in the document.
- **Psychotherapy notes typo in entity name**: The section on psychotherapy notes references "BKJPHC" (transposed letters) instead of "BJKPHC" in two places — under "Psychotherapy Notes" and "Essential Government Functions." While minor, this inconsistency in a legal document could cause confusion.
- **Numbering errors in Section C**: Patient rights are numbered 1-2 at the top level, then switch to 1-4 in a sub-list. Right #3 ("Inspection and Copies") and Right #4 ("Amendment") are at the top level, but then "Accounting of Disclosures" restarts at 1, "Right to a Paper Copy" is 2, "Right to File a Complaint" is 3, and "Right to Provide an Authorization" is 4. This numbering is confusing and inconsistent.
- **Fee disclosure is vague**: The document mentions fees for copies but does not specify amounts or reference the HIPAA-permitted fee structure, making it impossible for patients to know if charges are reasonable.
- **No breach notification language**: Post-HITECH Act NPPs are required to include a description of the right to be notified of breaches of unsecured PHI. This document does not appear to contain breach notification language, suggesting it may predate the HITECH Act requirements or was not updated to reflect them.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No ROI form available online**: The complete absence of a downloadable authorization form is a significant barrier. Patients must either visit in person, already have patient portal credentials, or somehow know to fax/mail a request — but without a form to fill out, even fax/mail channels are incomplete. The "Release of Health Information" webpage provides no form, just submission addresses.
- **Written-only complaints**: Requiring "All complaints must be submitted in writing" may discourage patients from exercising their complaint rights, though this is not necessarily a HIPAA violation.

### ⚠️ AMBIGUITIES

- **Fee structure undefined**: "BJKPHC charge a fee for the costs of copying, mailing, labor and supplies" — no amounts, ranges, or reference to regulatory limits. A patient has no way to know if they'll be charged $5 or $500.
- **Authorization form process unclear**: The NPP references the need for "written authorization" for certain disclosures but never explains how to obtain the authorization form itself. The "Release of Health Information" page provides submission channels but no form.

### ❌ ERRORS

- **Entity name transposition**: "BKJPHC" appears instead of "BJKPHC" in the Psychotherapy Notes and Essential Government Functions sections.
- **Section C numbering inconsistency**: Patient rights numbering restarts mid-section (1, 2, 3, 4 at top level, then 1, 2, 3, 4 again in a sub-list), creating confusion about how many rights are listed and their hierarchy.
- **Character encoding artifacts**: Multiple words are garbled in the text layer — "unay" for "may," "energency" for "emergency," "detertnined" for "determined," "cornpetency" for "competency," "treattnent" for "treatment," "Dehnar" for "Delmar," "enforcernent" for "enforcement." This may affect screen reader output and searchability.
- **Missing effective date**: Required by 45 CFR 164.520(b)(1)(vi) but absent from the document.
- **No breach notification language**: Likely required post-HITECH but absent, suggesting the document has not been updated since at least 2009.
