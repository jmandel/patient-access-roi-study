# Evaluation: Riverwood Healthcare Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page **"AUTHORIZATION TO RELEASE AND DISCLOSE PATIENT INFORMATION"** form, dated 2018 based on its filename (`RIVERWOOD-ROI-2018.pdf`). It is a general-purpose ROI/authorization form — not specifically designed for patient self-access versus third-party release. The form uses numbered sections (1–5) covering patient demographics, release from/to, purpose, date range, record type selection, and authorization language.

Riverwood Healthcare Center has **three ROI PDFs** on file:
- **form-1.pdf (this document):** The 2018 version, hosted since at least January 2025 per the upload path. File size of 368 KB is disproportionately large for a single-page form, suggesting image-heavy construction.
- **form-2.pdf:** An older 2015 version (`Release-of-Information-Form-2015.pdf`) with substantially similar content but different layout. 15 KB, much leaner.
- **form-3.pdf:** The most current version (uploaded 2025), linked as the active "Printable Form" on the Patient Forms page. 100 KB with embedded images.

Additionally, Riverwood offers **JotForm-based online submission** options (HIPAA-compliant JotForm for information release, plus standard JotForm for consent and verbal PHI discussion permissions). This places form-1.pdf as a **legacy version** — still publicly accessible but superseded by form-3.pdf and the online JotForm alternatives.

## 2. FINDABILITY

**Easy to locate.** Per retrieval notes, a simple web search for `"Riverwood Healthcare Center" "medical records" "release form" filetype:pdf` immediately surfaced this PDF. The organization's **Patient Forms page** (https://riverwoodhealthcare.org/patient-forms/) is accessible within one click from the main navigation and provides organized links to forms.

However, the URL structure (`/wp-content/uploads/2025/01/RIVERWOOD-ROI-2018.pdf`) means this 2018 version remains publicly accessible even though it's been superseded. This creates a risk of patients using an outdated form if they arrive via a search engine rather than the Patient Forms page. The filename includes the organization name and year, which is descriptively helpful.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present (`has_text_layer: true`) — the form has extractable text despite its image-heavy construction. The extracted text is clean and complete (3,399 characters).
- **Fillable fields:** Zero (`fillable_field_count: 0`). The form uses printed underscores for blank lines (e.g., `NAME______________________________________`) rather than interactive PDF form fields. Patients must print and handwrite.
- **File size:** 368,811 bytes for a single page is notably large. The metadata shows 2 embedded images and 7 fonts, confirming this is not a pure-text document. By comparison, form-2.pdf (similar content) is only 15 KB.
- **Page count:** 1 page.
- **Digital-first design:** No. This is clearly designed as a print-and-fill form. The underscore-based blanks, lack of fillable fields, checkbox symbols rendered as `□`, and image-heavy construction all indicate a document optimized for paper use. A patient would need to print, handwrite, and then submit (presumably fax to the number listed: 218-927-5319, or deliver in person).

## 4. CONTENT DESIGN

**Structure and organization:** The form uses a logical numbered sequence (1–5) with parenthetical helper text explaining each section:
- Section 1: Patient Information
- Section 2: "Release Information From: (Who has the information you want released?)"
- Section 3: "Release Information To: (Where do you want the information sent?)"
- Section 4: "Purpose of Release: (Why is it needed?)"
- Section 5: "What are the approximate dates of information you want released? / What do you want released?"

The parenthetical plain-language explanations (e.g., "Who has the information you want released?") are a positive design choice that aids comprehension.

**Record type options:** The form offers a "Routine Record Sets" checkbox with a parenthetical definition: "(Notes, Labs, Rad, Procedures, Emergency, Consultation, History & Physical)" plus individual checkboxes for specific types. Sensitive categories — Chemical Dependency/Substance Abuse, HIV/AIDS Testing, and Psychological Testing/Mental Health — are included as separate checkboxes with an opt-out initialing mechanism for chemical dependency and behavioral health.

**Purpose options:** Six checkboxes: Continuing Care, Workers' Compensation, Legal, Personal Use, Insurance, Disability Determination, plus an "Other" write-in.

**Authorization language:** Two paragraphs of dense but standard HIPAA authorization language covering voluntariness, re-disclosure risk, right to revoke (in writing to Medical Records Department), and expiration ("once the above stated purpose is fulfilled or one year, whichever comes first").

**Length:** Appropriately concise at one page. However, the form is somewhat cramped — fitting all sections, checkboxes, authorization language, and signature lines onto a single page requires small text and tight spacing.

**Readability:** The authorization language paragraphs use smaller font and dense formatting with no paragraph breaks between concepts, making them harder to read. The form's operational sections (1–5) are reasonably clear.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a **general-purpose authorization** that could be used for patient self-access (via the "Personal Use" purpose checkbox) or third-party release. It is not specifically designed for the patient right-of-access use case under HIPAA § 164.524. The from/to structure assumes information flows between two organizations, which is awkward when the patient is requesting their own records — they must list themselves in the "Release Information To" section.

**Scope options:** Good granularity. Patients can specify date ranges ("Service Dates Between ___ to ___"), select from 9+ record type categories, and opt out of releasing chemical dependency or behavioral health information via initialing.

**Format/delivery options:** None specified. The form does not mention electronic delivery, patient portal access, or format preferences. The only submission pathway implied is fax (the form ends with "Riverwood Health Information FAX number: 218-927-5319") or physical delivery.

**Right of Access language:** No reference to HIPAA § 164.524 or the patient's right of access. The authorization language references voluntariness and revocation rights but does not inform patients of their legal right to obtain their records.

**EHI/electronic export:** No mention of electronic health information export, bulk data, or digital format options.

**Sensitive information handling:** The opt-out initialing approach for chemical dependency and behavioral health ("All information regarding chemical dependency or behavioral health will be released unless you restrict by initialing") defaults to releasing sensitive information, which places the burden on the patient to restrict it. The HIV/AIDS Testing checkbox is offered as a record-type selection but has no separate consent or restriction mechanism, unlike chemical dependency/behavioral health.

## 6. COMPLIANCE

**Expiration:** "Unless otherwise revoked, this authorization expires once the above stated purpose is fulfilled or one year, whichever comes first." This is a reasonable expiration period.

**Revocation:** Requires written revocation presented to the Medical Records Department. Standard language, though it does not mention alternative submission methods (mail, fax, portal).

**Barriers:** No notarization requirement. No explicit fee disclosure. No in-person-only submission requirement — the fax number is provided. However, the lack of fillable fields or electronic submission means the patient must print and either fax or deliver the form.

**SSN/sensitive data:** Unlike form-2.pdf, this form does **not** request a Social Security Number — it uses Date of Birth as the secondary identifier, which is a positive compliance choice.

**Witness requirement:** No witness signature line (unlike form-2.pdf, which includes one).

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Plain-language section headers with parenthetical explanations** — e.g., "Release Information From: (Who has the information you want released?)" — make the form more accessible than typical legal-style ROI forms.
- **No Social Security Number field** — uses DOB instead, reducing unnecessary collection of sensitive identifiers.
- **"Routine Record Sets" with definition** — the parenthetical "(Notes, Labs, Rad, Procedures, Emergency, Consultation, History & Physical)" helps patients understand what a standard records request includes, rather than forcing them to guess which individual boxes to check.

### ⚠️ AMBIGUITIES
- **Default release of sensitive information:** "All information regarding chemical dependency or behavioral health will be released unless you restrict by initialing" — this defaults to full release of sensitive categories, which could catch patients off guard. The opt-out initialing lines are easy to overlook on a dense one-page form.
- **No submission instructions beyond fax number:** The form ends with "Riverwood Health Information FAX number: 218-927-5319" but does not state whether forms can be mailed, emailed, or delivered in person, nor does it provide a mailing address in the form body (though the organization address appears in form-2 and form-3).

### ❌ ERRORS
- **Outdated form still publicly accessible:** This 2018 form remains available at its original URL even though a 2025 version (form-3.pdf) has been published. A search engine could direct patients to this older version, creating confusion about which form is current.
- **Oversized file:** At 368 KB for a single-page form, the file is ~24× larger than form-2.pdf with comparable content, suggesting poor optimization (embedded raster images where vector or text would suffice).
