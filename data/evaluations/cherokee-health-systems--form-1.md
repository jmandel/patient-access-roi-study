# Cherokee Health Systems — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the primary English-language ROI form titled **"Authorization to Release and/or Obtain Health Records."** It is a single-page PDF (133,570 bytes) dated December 2025 per the source URL filename (`12.22.25 Release of Information - English.pdf`). The organization has rebranded from Cherokee Health Systems to **River Valley Health** (website: rvh.org).

This form sits within a suite of four documents published on the Medical Records page:
- **form-1.pdf** (this document): English ROI form
- **form-2.pdf**: Spanish ROI form — identical structure and fields
- **form-3.pdf**: English color-coded instructional version with annotations explaining each section (e.g., "Enter your personal information in this section," "You are authorizing River Valley Health to obtain records from the following healthcare provider")
- **form-4.pdf**: Spanish color-coded instructional version

The form is a **dual-purpose authorization** — it can be used to either release records from River Valley Health or obtain records from an external provider, as indicated by the two facility sections: "Record Requested to be Sent From" and "Record to be Sent To."

## 2. FINDABILITY

The form was straightforward to find. Per the retrieval notes, a web search for authorization/release terms immediately located the Medical Records page at `https://www.rvh.org/patients-visitors/medical-records/`. The same page is accessible via the site navigation: **Patients & Visitors → Medical Records**. The page provides four clearly labeled PDF download links with descriptive filenames.

The URL of the form itself is descriptive (`12.22.25 Release of Information - English.pdf`), making it clear what the document is even outside the website context. The Medical Records page includes instructions for submission (email to registration@rvh.org or in person), so context is provided alongside the download.

One minor friction point: direct `curl` downloads were blocked by Akamai CDN bot protection, requiring browser-based workarounds. This is a hosting infrastructure issue rather than an intentional access barrier, but it could affect automated retrieval or assistive technologies.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The extracted text is clean and complete (2,854 characters), with no OCR artifacts or garbled content. This is a digitally-created PDF, not a scan.

**Fillable fields**: Despite appearing to be a form with blank fields, the metadata reports **0 fillable fields** (`fillable_field_count: 0`). The form has visual input areas but no interactive PDF form fields. A patient would need to print and handwrite, or use a PDF annotation tool.

**Fonts**: 8 fonts are used, which is somewhat high for a single-page form but not problematic.

**Embedded images**: 29 embedded images in a single-page document is notable. This suggests the form layout uses images for design elements (lines, boxes, checkboxes) rather than native PDF drawing primitives, which increases file size and may reduce accessibility for screen readers.

**File size**: 133,570 bytes (131 KB) for a single page is moderate — not excessive, but larger than expected for a text-heavy single-page form, consistent with the high image count.

**Digital-first design**: The form was clearly designed digitally (not scanned), but it was designed for **print use** — no fillable fields, no electronic signature capability. It is a digital document designed for an analog workflow.

## 4. CONTENT DESIGN

**Length**: One page. Appropriate for the scope of the form, though the dense legal text in the lower half is tightly packed.

**Structure**: The form is logically organized in top-to-bottom sections:
1. "For Office Use Only" header (Chart #)
2. Patient Information (Name, DOB, Phone, Address, City, State, Zip)
3. Record Requested to be Sent From (facility details)
4. Record to be Sent To (facility details)
5. Records Requested (type checkboxes + date range)
6. Sensitive information disclosure notice (asterisked footnote)
7. Purpose (checkboxes: Personal Use, Legal, Disability, Coordination of Care, Transfer of Care, Other)
8. Patient Signature section with certification text

**Clarity**: The upper portion (patient info, facility info) is clean and self-explanatory. The lower portion has two dense legal paragraphs:

The **sensitive information notice** is written in accessible language, explaining that released records "may include information that could be considered information about family planning services and communicable disease, which may include, but is not limited to: hepatitis, syphilis, gonorrhea, human immunodeficiency virus (HIV), and Acquired Immune Deficiency Syndrome (AIDS)." It properly references 42 C.F.R. Part 2 and HIPAA (45 C.F.R. pts 160 & 164).

The **certification paragraph** is dense legalese, packing six different signer categories into a single run-on sentence. It lists age requirements (16 for behavioral health/SUD, 18 for medical records), parents/guardians, conservators, guardians-ad-litem, attorneys-in-fact, and executors/administrators. This is legally thorough but challenging for a typical patient to parse.

**Layout**: The form uses checkbox-style fields for record types and purpose. The visual hierarchy is reasonable with bold section headers, but the bottom third is very text-dense with small print.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose authorization** — it handles both obtaining records from external providers and releasing records to external providers. It does not distinguish between patient self-access (Right of Access under HIPAA § 164.524) and third-party release. The "Purpose" checkboxes include "Personal Use," which partially addresses patient access, but the form's framing as "Release and/or Obtain" positions the patient as someone routing records between facilities, not necessarily requesting their own copy.

**Scope options**: Good. The patient can specify:
- Record type: Medical Records, Behavioral Health Records, Substance Use Disorder Treatment Records, Other
- Date range: "From" and "To" fields
- Purpose: Six options including "Personal Use"

**Format/delivery options**: None. The form does not offer any choice of delivery format (paper, electronic, CD, portal) or delivery method. Patients cannot request records be sent to an email address or patient portal.

**Right of Access language**: The form does **not** reference HIPAA's Right of Access (§ 164.524), patient rights, or any obligation to fulfill requests within a specific timeframe. It references HIPAA only in the context of 42 C.F.R. Part 2 substance use disorder protections.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

**Submission options**: Per the notes, forms can be submitted via email (registration@rvh.org) or in person. No fax number or mailing address is specified on the form itself for submission (though the form has fax fields for the facilities involved in the records transfer).

## 6. COMPLIANCE

**Authorization expiration**: The form states "this authorization is valid for 12 months from the date of signature," which is a reasonable duration.

**Revocation rights**: The form acknowledges the right to cancel: "I may cancel this request by written notification signed by me, but that it will not affect any information released prior to written notification of cancellation." This is compliant with standard authorization language.

**Age requirements**: The form specifies differing age thresholds — 16 for behavioral health/SUD records and 18 for medical records — which appears to reflect Tennessee state law regarding minors' consent rights. This is appropriate but may confuse patients who don't understand why two different ages apply.

**No fee disclosure**: The form does not mention any fees for record retrieval or copies. This is neither a positive nor a negative on its own, but the absence means patients have no upfront information about potential costs.

**No unreasonable barriers observed**: No notarization requirement, no witness requirement, no mandatory in-person submission. The form is relatively straightforward.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Bilingual form suite with instructional guides**: Providing both the ROI form and an annotated "How To Complete" version in both English and Spanish is exceptional. The color-coded guide (form-3.pdf) includes plain-language annotations like "Enter your personal information in this section" and "You are authorizing River Valley Health to obtain records from the following healthcare provider." This dramatically reduces confusion for patients unfamiliar with authorization forms.
- **Recently updated**: The forms are dated December 2025, indicating active maintenance and attention to the document suite.
- **Email submission available**: Allowing submission to registration@rvh.org removes the need for in-person visits or fax machines, which is a meaningful accessibility improvement.

### ⚠️ AMBIGUITIES

- **"Sent From" vs. "Sent To" directionality confusion**: The form uses "Record Requested to be Sent From" and "Record to be Sent To" without clearly indicating which facility is River Valley Health. A patient wanting their own records might not know which section to fill in. The instructional guide (form-3) clarifies this with annotations ("You are authorizing River Valley Health to obtain records from the following healthcare provider" / "You are authorizing River Valley Health to send your medical records to this healthcare provider"), but the base form leaves this ambiguous.
- **No self-request pathway**: The form does not clearly accommodate a patient simply requesting their own records be sent to themselves. Both facility sections assume records are going to/from an institutional entity (with Facility Name, Fax Number, Phone Number fields). A patient requesting records for "Personal Use" would need to put their own information in the "Record to be Sent To" section, which feels awkward.

### 🚩 RED FLAGS

- **No fillable fields**: Despite being a digitally-created PDF, the form has zero interactive fields. This forces patients to print, handwrite, scan, and email — a workflow that disadvantages patients without printers or those with disabilities affecting handwriting. For a form updated in December 2025, the absence of fillable fields is a meaningful accessibility gap.
