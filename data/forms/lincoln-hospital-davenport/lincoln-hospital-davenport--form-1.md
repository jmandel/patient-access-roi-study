# Lincoln Hospital (Davenport, WA) — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **clinics version** of Lincoln Hospital's "Authorization for Release of Health Care Information and Records," issued by Lincoln County Public Hospital District #3. The form is pre-filled with North Basin Medical Clinics' contact information (100 3rd Street, Suite 1, Davenport, WA 99122) on the "from" provider side, indicating it is specifically designed for records held at the affiliated clinic system rather than the hospital itself.

Lincoln Hospital publishes two ROI forms on its Health Records page: this clinics form (form-1.pdf) and a hospital form (form-2.pdf). Both share the same title, nearly identical structure, and the same legal boilerplate, but they are tailored to different care settings within the same public hospital district. The hospital form (form-2.pdf) is a digitally-created PDF with extractable text, while this clinics form is a scanned image of a paper document.

The form is 2 pages. Page 1 is the actionable authorization form with fields and checkboxes. Page 2 is an explanatory supplement covering the form's purpose, patient rights under HIPAA, fee schedules, response timelines, and laboratory result request procedures. The footer reads "HIPAA FORM Updated 03/2018."

## 2. FINDABILITY

The form is reasonably easy to find. According to retrieval notes, it is accessible from the Lincoln Hospital website in **2 clicks** from the homepage: Patients and Visitors → Health Records. Both the clinics and hospital forms are linked under a "Forms" heading on that page. The URL (`https://res.cloudinary.com/dpmykpsih/image/upload/lincoln-hospital-site-343/media/1179/medical-records-release-form-_clinic.pdf`) is hosted on Cloudinary CDN but is also available at a cleaner hospital-domain path (`lincolnhospital.org/media/1179/medical-records-release-form-_clinic.pdf`). The filename `medical-records-release-form-_clinic.pdf` is descriptive and clearly identifies the document, though the trailing underscore before "clinic" is a minor cosmetic blemish.

One complication: an alternate URL for this form returned HTTP 400, suggesting the form may have been relocated or updated at some point, potentially leaving stale links in search results. The Health Records page itself returned 403 to automated fetch tools (likely bot-blocking), which could impede programmatic discovery.

## 3. TECHNICAL ACCESSIBILITY

This form has **significant technical accessibility problems**:

- **Image-only scan**: The PDF contains zero extractable text (`full_text_chars: 2`, just form-feed characters). It is composed of 2 embedded images — scans of a paper form. This means the document is **completely inaccessible to screen readers**, cannot be searched, and text cannot be copied.
- **No fillable fields**: `fillable_field_count: 0`. The form must be printed and filled out by hand, or the patient must use a PDF annotation tool to overlay text on the image.
- **No fonts embedded**: `font_count: 0`, confirming the image-only nature.
- **Large file size**: At 948,568 bytes (~949 KB) for a 2-page document, it is over 3× the size of the hospital form (form-2.pdf at 284 KB) despite containing roughly similar content. This is typical of scanned image PDFs.
- **Not digital-first**: This is clearly a scan of a paper document — a physical form that was photocopied or scanned to create the PDF. The slight rotation, scan artifacts, and image-based rendering confirm this.

The contrast between this form and its hospital counterpart (form-2.pdf, which has a full text layer and was created digitally with Acrobat PDFMaker) is stark. The clinics form is the inferior version technically.

## 4. CONTENT DESIGN

Despite the poor digital format, the content itself is reasonably well-organized:

- **Length**: 2 pages is appropriate — page 1 is the authorization form, page 2 is explanatory/legal context.
- **Layout**: Page 1 uses a structured layout with a two-column table for "to" and "from" provider information, clearly labeled sections (Types of Information, Purpose, Revocation, Re-Disclosure, No Conditions, Time Frame, Consent of Minor), and a signature block.
- **Font size**: Text appears to be approximately 10-11pt for body text, with bold section headers. The fine-print paragraphs under "Types of Information to Be Released" and "Consent of Minor" are dense but still readable.
- **Checkbox design**: Record type checkboxes include Immunization Record (Child Profile), Laboratory/Radiology, Medication List, Office visits, and Other — a limited but functional set. Date range options include a helpful "Most recent □ two (2) years" option with specific examples: "include most recent colonoscopy/path, mammo, DEXA, Pap, diabetic eye/foot exams, hepatitis C screening, surgical reports."
- **Clarity**: The form uses a mix of plain language and legal terminology. Sections like "No Conditions" ("We will not condition your receipt of treatment on giving this authorization") are clear. The "Types of Information" preamble is dense legal text about sensitive categories (alcohol/chemical dependency, reproductive health, STDs, psychiatric disorders) that may overwhelm patients.

Page 2 is entirely explanatory text — no fields to fill out. It covers the form's purpose, authorization confirmation, access request rights, fee schedule, response timelines, and laboratory result procedures. This is valuable information but could benefit from formatting improvements (bullet points, bold key terms) rather than dense paragraphs.

## 5. PATIENT-CENTEREDNESS

**Mixed signals on patient access vs. third-party release:**

The form's page 1 is primarily a **third-party release authorization** — it asks the patient to authorize release of records from one provider to another. The "to/from" structure, the delivery options (Mailed, Faxed, Hand-Given), and the purpose checkboxes all frame it as a release of information to a designated recipient.

However, the form does include some patient access elements:
- A "Hand-Given to Patient/Family/Friend" delivery option
- "At the request of the Patient" as a purpose checkbox
- Electronic format options: "MyChart Secure Patient Portal, □CD, □USB Flash Drive (provided by patient)" — a notably progressive set of delivery options for a small critical access hospital

Page 2 explicitly includes an **"ACCESS REQUEST"** section: "This form is used for an individual's request and/or to obtain copies of the individual's protected health information or records maintained in Lincoln Hospital's designated record sets." This confirms the form is dual-purpose — both third-party release and patient access.

**Scope options**: Limited but functional. Patients can select from 5 record type categories plus "Other," specify date ranges, or request the most recent 2 years.

**Format options**: The electronic delivery options (MyChart Patient Portal, CD, USB Flash Drive) are a standout feature, especially for a rural critical access hospital.

**Rights information**: Page 2 includes "Right to Inspect and/or Obtain Copy" language referencing CLIA (42 U.S.C. § 263a) and exclusions for psychotherapy notes. No explicit citation to HIPAA § 164.524, though the right of access is described substantively.

**No mention of EHI Export** or bulk data access under the 21st Century Cures Act / Information Blocking rules.

## 6. COMPLIANCE

**Fee schedule (Page 2)**: The form discloses specific fees: "$26.00 Search/Base Fee, $1.17 first 30 pages, $0.88 each additional page plus tax, based on Department of Health Amended Rule on Allowable Fees for Searching and Duplicating Medical Records (WAC 246-08-400) effective September 7, 2017 through June 30, 2019." This is based on Washington state's fee schedule for third-party requests. However, for **patient access requests** under HIPAA Right of Access (§ 164.524), providers may only charge a "reasonable, cost-based fee" — the WAC schedule may exceed HIPAA limits for patient access copies. The form does not distinguish between fee structures for patient access vs. third-party release.

**Expiration**: The authorization defaults to 90 days from signature, which is reasonable. There is also a "No Expiration Date" checkbox under the purpose section.

**Identity verification**: The form states "Person making the request's identity has been verified with photo identification" and asks the patient to "Attach copy of photo identification." Requiring photo ID attachment could be a barrier for some patients, though identity verification itself is permissible.

**Response time**: 30 days, with 60 days if records are off-site, and one 30-day extension possible. This aligns with HIPAA requirements.

**No Conditions**: The form explicitly states "We will not condition your receipt of treatment on giving this authorization," which is a positive compliance signal.

**Minor consent**: Includes appropriate age thresholds for Washington state (14+ for drug/alcohol and sexuality-related information, 13+ for mental health).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee schedule may exceed HIPAA limits for patient access**: The disclosed fees ($26.00 base + $1.17/page for first 30 + $0.88/page thereafter + tax + postage) are based on Washington's WAC 246-08-400 schedule for third-party record duplication. For patient access requests under HIPAA § 164.524, HHS guidance limits fees to reasonable, cost-based amounts (or a flat fee not to exceed $6.50 per request under the 2016 guidance). The form makes no distinction between these two fee structures, and applying the WAC schedule to patient access requests would likely violate HIPAA.
- **Outdated fee schedule reference**: The WAC fee schedule cited is "effective September 7, 2017 through June 30, 2019" — this date range expired nearly 7 years ago. The form itself was "Updated 03/2018," meaning the fee information was already time-limited when published and is now stale.
- **Photo ID attachment requirement**: The form asks patients to "Attach copy of photo identification." While identity verification is permitted, requiring a photocopy of ID to be attached creates a burden and potential privacy risk (copies of IDs floating in files). HIPAA does not mandate photo ID for access requests.

### ⚠️ AMBIGUITIES

- **Dual-purpose form without clear routing**: The form serves as both a third-party release authorization (page 1) and a patient access request (page 2's "ACCESS REQUEST" section), but provides no clear instructions on how a patient should indicate which type of request they are making. A patient requesting their own records would check "At the request of the Patient" and "Hand-Given to Patient," but might not realize page 2's access request section applies to them.
- **"Initials" field on page 1**: After the "Types of Information to Be Released" paragraph, there is an "Initials" line, but it is unclear what exactly the patient is initialing — the sensitive-information disclosure consent? The entire types section? This is not explained.

### ❌ ERRORS

- **Expired fee schedule**: The WAC 246-08-400 fee amounts are explicitly scoped to "September 7, 2017 through June 30, 2019." The form has not been updated to reflect current fee schedules.
- **Form date vs. content mismatch**: The footer says "Updated 03/2018" but includes fee information with an end date of June 30, 2019, suggesting the fee schedule was forward-looking at time of creation but is now outdated regardless.

### ✨ BRIGHT SPOTS

- **Electronic delivery options**: Offering "MyChart Secure Patient Portal, □CD, □USB Flash Drive (provided by patient)" is notably progressive for a small, independent, government-owned critical access hospital in rural Washington. This shows awareness of patients' need for electronic access to their records.
- **"Most recent two (2) years" shortcut**: The date range section offers a convenient "Most recent □ two (2) years" checkbox with specific clinical examples (colonoscopy, mammogram, DEXA, Pap, diabetic exams, hepatitis C screening, surgical reports), reducing the burden on patients who want a comprehensive recent summary.
- **Explicit "No Conditions" statement**: Clear, prominent language that treatment will not be conditioned on signing the authorization.
- **Pre-filled clinic information**: The form comes pre-populated with North Basin Medical Clinics' address, phone, and fax, eliminating a common source of patient confusion (figuring out where to send the form).
