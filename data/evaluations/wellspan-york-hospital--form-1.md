# Evaluation: WellSpan York Hospital — form-1.pdf

**Document:** "Authorization to Use or Disclose Health Information"
**Form #:** 2606, Rev. (08/25), barcode identifier *WROI0001*
**Pages:** 2 | **File size:** 140,558 bytes | **Fillable fields:** 0

---

## 1. DOCUMENT IDENTIFICATION

This is WellSpan Health's system-wide authorization form for the use or disclosure of health information. It is the primary ROI form applicable to WellSpan York Hospital and covers all WellSpan facilities. A second form (form-2.pdf, "Authorization for Release of Protected Health Information") exists but is scoped to WellSpan's neighborhood hospitals (Newberry, Shrewsbury, Carlisle) and would not be used for York Hospital requests.

The form is a general-purpose authorization — not specifically designed for patient self-access under HIPAA § 164.524. The bidirectional "Obtain from" / "Disclose to" structure positions it as a third-party release form that patients can also use to request records for themselves. A note at the top directs users to a separate form (#14014) for substance use disorder treatment records, indicating WellSpan maintains a family of specialized authorization forms.

---

## 2. FINDABILITY

Per the retrieval notes, the form was immediately discoverable via a straightforward web search for "WellSpan York Hospital authorization release health information form PDF." It is hosted as a direct PDF link on wellspan.org:

> `https://www.wellspan.org/-/media/Project/Wellspan-Site-Tenant/wellspan-site/data/media/files/Notices-and-Forms/Disclose-Health-Info.pdf`

No login walls, bot-blocking, or JavaScript rendering was required. The URL is descriptive (`Disclose-Health-Info.pdf` under `Notices-and-Forms`). The form was also findable via site-scoped searches (`site:wellspan.org authorization release medical records`). Multiple search strategies all converged on the same document, suggesting strong SEO and straightforward site architecture.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and complete. The full text (7,830 characters) was extracted cleanly with no OCR artifacts or garbled characters.

**Fillable fields:** Zero. Despite being a digitally-created PDF (not a scan), the form has no interactive form fields. All patient information fields are represented as underscored blank lines in the layout. This means patients must print and handwrite, or attempt awkward text-overlay in a PDF viewer.

**File format:** The file size of ~141 KB for a 2-page text-based PDF is reasonable. Uses 7 fonts and no embedded images, consistent with a born-digital document.

**Digital-first design:** Partially. The document was clearly created digitally (not scanned), and it offers email delivery via a secure portal. However, the lack of fillable fields undercuts the digital-first claim — the form itself must still be completed by hand.

---

## 4. CONTENT DESIGN

**Length:** Two pages, which is appropriate for the amount of content. Page 1 covers patient information, record selection, and purpose; page 2 covers legal disclosures, signatures, and submission instructions.

**Clarity:** The language is largely clear, though it mixes patient-facing instructions with legal/regulatory text. The sensitive-records paragraph on page 1 is a dense block:

> "I understand that the records I have selected to be released may contain information about treatment and testing regarding genetics, behavioral health, HIV/AIDS, reproductive health care, and substance use disorder (for example, from primary care visits) and that by signing this authorization I am agreeing to the release of such information."

This is a single run-on sentence that could benefit from being broken into bullet points.

**Organization:** Logical top-to-bottom flow: patient identification → record source/destination → record type selection → purpose → delivery format → sensitive-records disclosure → legal terms → signatures → submission info. The structure is conventional and easy to follow.

**Record type options:** The form provides five top-level categories: Abstract (with a detailed sub-list), Diagnostic Test Results, Imaging (CD and Reports vs. Reports Only), Billing Statements, and Complete medical record / other. The Abstract category is helpfully expanded with examples ("History & Physical, Emergency Department Physician Notes, Discharge Summary, Consultation Reports, Mental Health Notes, Operative & Procedure Reports, Office Visit Notes, Psychiatric and/or Psychological Evals, Laboratory Reports, Imaging Reports, and any other Diagnostic Studies, etc.").

**Layout:** The form uses clear section breaks and checkbox formatting. The "Obtain from" / "Disclose to" fields are presented side-by-side, which is intuitive. However, certain checkbox indicators may render inconsistently — the extracted text shows `\u0007` control characters preceding some checkbox labels.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is structured as a general authorization rather than a patient self-access form. The "Obtain from" / "Disclose to" layout assumes a third-party transfer scenario. However, one of the purpose checkboxes is "Personal," which allows patients to request their own records. The form also explicitly states: "I can choose and have the right to have my records released directly to me so that I can review and inspect the materials, including for sensitive information I do not wish to be disclosed to a third party." This is a meaningful acknowledgment of the right of access, even within a general-purpose form.

**Scope options:** Patients can specify date ranges ("From / To"), select among record types, and indicate a purpose. This provides reasonable granularity.

**Delivery format options:** Four options are listed: Paper, CD, Fax, and Email. The email option is described as delivering "an email notification... with instructions to retrieve the requested records from a secure portal." Records are available as PDFs on the portal for 30 days. This is a modern, patient-friendly delivery mechanism.

**Expiration:** The authorization is valid for 12 months from the date of signature and covers records "entered into my medical records prior to or within 12 months after the date of my signature." This is a reasonable window.

**Right of Access language:** There is no explicit citation to HIPAA § 164.524, though the form does reference that "All fees are regulated by state and federal law." The explicit statement about the right to have records "released directly to me" partially substitutes for a formal right-of-access reference.

**EHI Export / bulk data:** No mention of electronic health information export, patient portal data download, or bulk data access.

---

## 6. COMPLIANCE

**Fees:** The form states: "There may be charges for the copies of my health record due to procedural and regulated steps involved with the release of information process. All fees are regulated by state and federal law, and are updated annually by the Pennsylvania State Legislature." Fees are not specified on the form itself, which avoids sticker shock but also leaves patients without transparency about costs.

**Revocation:** Patients must "present my written revocation to the Health Information Management – Release of Information Office." This is a reasonable process, though it requires in-person or mail delivery rather than offering electronic revocation.

**Copy acceptance:** The form explicitly states "A copy of this form will be accepted in lieu of an original," which reduces barriers.

**Processing:** The footer notes: "Requests for health information and invoices are processed by: MRO CORPORATION (610) 994-7500 Option 1." This is a third-party ROI vendor, which is common but worth noting — patients interacting with the process will deal with MRO, not WellSpan directly.

**SSN requirement:** The form requests "Last 4 of Social Security Number," which goes beyond what is strictly necessary for patient identification in most cases.

**Witness requirement:** The form includes a witness signature line and has a special section "TO BE COMPLETED WHEN A PATIENT/REPRESENTATIVE IS PHYSICALLY UNABLE TO PROVIDE A SIGNATURE" requiring two witness signatures for verbal consent. The standard witness line may create confusion about whether a witness is always required.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection:** The form asks for the "Last 4 of Social Security Number" as a standard identification field. While only partial, collecting SSN digits on a form that may be faxed or mailed introduces unnecessary privacy risk and is not a HIPAA requirement for patient identification.

### ⚠️ AMBIGUITIES

- **Witness requirement unclear:** A witness signature line appears on page 2 as a standard field, separate from the two-witness verbal consent section. It is unclear whether a witness is required for all submissions or only in specific circumstances.
- **Substance use disorder carve-out:** The top of the form directs patients to "use Form #14014 to Authorize the Disclosure of Substance Use Disorder Treatment Records," but the body of the form also states that selected records "may contain information about... substance use disorder" and signing authorizes their release. The boundary between what requires form #14014 versus what is covered by this form is not explained.
- **Sensitive records opt-out is limited:** The only opt-out checkbox listed is "Behavioral/Mental Health Services." The form text discusses genetics, HIV/AIDS, reproductive health care, and substance use disorder, but provides no individual opt-out checkboxes for these categories — only the blanket statement that signing authorizes their release.

### ✨ BRIGHT SPOTS

- **Secure portal email delivery:** The option to receive records via a secure portal with PDF download is a modern, patient-friendly feature. The 30-day availability window is clearly stated.
- **Explicit right-to-self language:** The statement "I can choose and have the right to have my records released directly to me so that I can review and inspect the materials, including for sensitive information I do not wish to be disclosed to a third party" is a clear, patient-empowering disclosure that many forms lack entirely.
- **Copy acceptance:** Explicitly stating "A copy of this form will be accepted in lieu of an original" removes a common barrier.
- **Easy findability:** The form is publicly hosted with no access barriers and is immediately discoverable through standard web searches.
