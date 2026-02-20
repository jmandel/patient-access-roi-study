# Mercy Health - Fairfield Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **"AUTHORIZATION FOR RELEASE OF PROTECTED HEALTH INFORMATION"** — a one-page ROI authorization form specific to the Mercy Health Cincinnati region. It is branded with form code "MHP 0786 Rev 1/19" (revised January 2019). The form covers five Cincinnati-area Mercy Health hospitals via checkboxes: Anderson, Clermont, **Fairfield**, The Jewish Hospital, and West Hospital.

A second document (form-2.pdf) was also found — a newer system-wide version of the same authorization form (filename suggests 2024 revision), but it is an image-only scan with only 46 characters of extractable text ("1ROI" and a print timestamp). Form-1 is the older Cincinnati-specific version with a full text layer and is the more usable of the two documents. Notably, the retrieval notes indicate that form-2 is now the version directly linked from the current medical records page, while form-1's URL (`cincinnati.ashx`) still works but is no longer prominently linked.

Both forms serve the same purpose — authorizing release of protected health information — and both appear to be general-purpose authorization forms usable for patient self-access as well as third-party release.

## 2. FINDABILITY

The retrieval notes describe this as **easy to find**. A web search for "Mercy Health Ohio medical records release form PDF authorization" immediately returned the Mercy Health medical records request page. The parent system manages medical records centrally at `https://www.mercy.com/patient-resources/medical-record-requests`, which lists forms, fax numbers, and alternative request methods.

However, form-1.pdf specifically is **no longer directly linked** from the current medical records page — the page now links to form-2.pdf (the image-only scan). Form-1 remains accessible via its direct URL (`https://www.mercy.com/-/media/mercy/patient-resources/medical-records-requests/cincinnati.ashx`) but would require a patient to already know this URL or find it through a search engine cache. The URL itself (`cincinnati.ashx`) is not descriptive of its content.

The medical records page also prominently mentions **MyChart** and an **online eRequest** system through Ciox/Datavant (Swellbox), providing alternative electronic pathways for record requests.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Form-1 has a full, high-quality text layer with 5,192 characters of extractable text. All content is readable and well-structured — no OCR artifacts or garbled text.

**Fillable fields**: Zero fillable form fields. The form is a flat PDF with blank lines and checkboxes rendered as static graphics. Patients must print the form and fill it out by hand, or use PDF annotation tools.

**File size**: 312,932 bytes (313 KB) for a single-page form with no embedded images. This is reasonable, though slightly large for a text-only single page.

**Fonts**: 9 fonts are embedded, suggesting some design complexity (bold, italic, different sizes).

**Digital-first design**: This is clearly designed as a **print-and-fill form**, not a digital-first document. The underscored blank lines (`_______________________________`) throughout the form are a hallmark of print design. The checkboxes are static text characters, not interactive elements. Despite this, the text layer means the form is searchable, selectable, and compatible with assistive technology — a significant advantage over form-2.

## 4. CONTENT DESIGN

**Length**: One page. The entire authorization fits on a single page, which is commendable for a form that covers patient identification, facility selection, record type specification, recipient designation, delivery method, and legal disclosures.

**Organization**: The form follows a logical flow: patient demographics → facility selection → date range → record types → recipient → delivery method → purpose → legal disclosures → signature. This sequence mirrors how a patient would think about a records request.

**Record type granularity**: The form offers 10 specific record type checkboxes plus an "Other" option:
- Abstract of record (Discharge Summary, H&P, Operative Records, Consults, Test Results…)
- Office Visit
- Emergency Department record
- History & Physical
- Discharge Summary
- Immunization record
- Test results (Lab, Pathology, Radiology, and Cardiac)
- Therapy Notes
- Operative record
- Itemized Bills
- Other (Images, Photos)
- Entire record (with note: "standard two years of information, unless otherwise specified")

**Language clarity**: The form mixes plain language with legal/medical terminology. The opening instruction is clear: "Complete all sections entirely. If this authorization is not complete, it may be returned and result in delay in processing." The legal disclosures at the bottom use dense but reasonably understandable language.

**Layout**: For a single page, the form is **densely packed**. The legal disclosure section at the bottom uses small text with bullet points to fit six substantive legal paragraphs. While the information is organized, the visual density may be overwhelming. The form uses horizontal rules and section groupings, but there is limited whitespace between sections.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form serves both purposes. The recipient section offers **"Self"** as the first checkbox option with "OR Name: ___" as the alternative — a clear and prominent acknowledgment that patients may request their own records. The purpose field defaults to "For Personal use if not otherwise stated."

**Delivery options**: The form offers four delivery methods:
1. **Mail** (with address fields)
2. **Fax** (with note "page limitation may apply")
3. **MyChart** (patient portal)
4. **Secure email** (with a risk acknowledgment: "I acknowledge the risks associated with information sent via email that is not secure and Mercy Health is not liable for disclosures misdirected or intercepted in transmission")

The requested format section offers **"Paper or Electronic (PDF/CD) PDF/CD default if not specified"** — notably defaulting to electronic format if the patient does not specify.

**Right of Access language**: The form explicitly references HIPAA § 164.524: "I understand that I may inspect or copy the information to be used or disclosed as provided by the federal government's rules, which are stated in the United States Code of Federal Regulations at section 164.524."

**EHI Export awareness**: No mention of electronic health information export, bulk data, or TEFCA/information blocking rules.

**Scope control**: Patients can specify date ranges ("Dates of service to release: from ___ to ___"), select specific record types via checkboxes, and choose specific facilities. The "Entire record" option notes it defaults to "standard two years of information, unless otherwise specified," allowing patients to override this limitation.

## 6. COMPLIANCE

**Photo ID requirement**: The form states "Photo ID required at the time of request" in the opening instruction. This is a notable requirement — while identity verification is reasonable, requiring photo ID specifically could create barriers for patients who do not have government-issued identification.

**Authorization expiration**: "This authorization will expire one year from date for Ohio & Kentucky and 60 days from date for Michigan." The one-year expiration for Ohio is standard. The 60-day Michigan expiration is notably shorter, though it reflects Michigan state law.

**Revocation rights**: The form clearly states the right to revoke authorization in writing, with appropriate caveats about already-disclosed information.

**Voluntariness**: The form includes a clear statement that signing is voluntary: "I understand that authorizing the disclosure of this health information is voluntary. I can refuse to sign this authorization."

**Fee disclosure**: The form states "There may be a charge for copies of records" without specifying amounts or fee schedules. This is vague but not unusual.

**Substance abuse / psychotherapy carve-out**: The form notes that "Psychotherapy or Substance Abuse Disorder notes" are not included and require a "separate authorization, only provider/author of notes can disclose." This is legally appropriate under 42 CFR Part 2 and HIPAA psychotherapy notes provisions.

**Re-disclosure warning**: The form includes standard language about potential unauthorized re-disclosure.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **"Self" as first recipient option**: The form prominently offers "Self" as the first checkbox in the recipient section, clearly supporting patient self-access rather than treating it as an afterthought.
- **Electronic default**: The format section states "PDF/CD default if not specified," meaning patients who don't express a preference get electronic copies — a patient-friendly default.
- **MyChart delivery option**: Including patient portal delivery as a checkbox option alongside mail, fax, and email is forward-thinking and reduces friction.
- **Multiple electronic request channels**: Beyond this PDF form, the organization offers MyChart and an online eRequest system through Ciox/Datavant, giving patients three pathways to request records.
- **One-page design**: Fitting a complete, legally compliant authorization form onto a single page reduces burden on patients.
- **Explicit HIPAA § 164.524 citation**: Referencing the specific federal regulation empowers patients with knowledge of their rights.

### 🚩 RED FLAGS

- **Photo ID requirement stated as mandatory**: "Photo ID required at the time of request" could exclude patients without government-issued photo identification. HIPAA requires reasonable identity verification but does not mandate photo ID specifically. This language could deter patients who lack such identification.

### ⚠️ AMBIGUITIES

- **"Standard two years of information"**: The "Entire record" option defaults to "standard two years of information, unless otherwise specified." It is unclear whether this is a processing default or a policy limitation. A patient checking "Entire record" and expecting their full history might receive only two years without realizing they needed to write in a broader date range.
- **Fee language is vague**: "There may be a charge for copies of records" provides no information about fee amounts, fee schedules, or the HIPAA-permitted fee structure. Patients cannot make an informed decision about costs before submitting.
- **Secure email risk disclaimer**: The email disclaimer — "I acknowledge the risks associated with information sent via email that is not secure and Mercy Health is not liable for disclosures misdirected or intercepted in transmission" — could discourage patients from choosing electronic delivery, even though HIPAA requires covered entities to send PHI by email if the patient requests it after being informed of risks.
- **"Page limitation may apply" for fax**: No further explanation of what the fax page limitation is or what happens if a request exceeds it.

### ❌ ERRORS

- **Form is no longer linked from the current website**: The notes indicate this form (form-1.pdf at the `cincinnati.ashx` URL) is no longer directly linked from the medical records page, which now points to form-2.pdf — an image-only scan with essentially no usable text layer. The more accessible version of the form has been effectively deprecated in favor of a less accessible one.
