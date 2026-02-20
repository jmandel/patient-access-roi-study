# Evaluation: Riverside Community Hospital — form-2.pdf

**Organization:** Riverside Community Hospital (Riverside, CA)
**Parent System:** HCA Healthcare (for-profit)
**Document:** form-2.pdf — "Authorization for Release of PHI (Protected Health Information)"
**Form Number:** HCA-840-00434, Rev. 09/21
**Source URL:** https://www.hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac?v=b53c28b5

---

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is the **current official English-language authorization form** for release of protected health information, linked directly from Riverside Community Hospital's medical records page. It is an HCA Healthcare corporate-standard form (form number HCA-840-00434), hosted on HCA's digital asset management CDN (hcadam.com). The mailing address listed is HCA's centralized ROI processing center: "PO Box 290789; Nashville, TN 37229-0789."

This form exists alongside two other documents found for this organization:
- **form-1.pdf** (5 pages): An older or alternative version of the authorization form hosted by a third-party ROI vendor (Legal Image / legalimage.net). It includes 2 pages of instructions and is non-fillable (0 fillable fields). It lists the local hospital address rather than the Nashville PO box.
- **form-3.pdf** (1 page): A Spanish-language version of form-2 (form number HCA-840-00434-S), same structure with 52 fillable fields.

Form-2 is the primary, current document a patient would encounter when seeking to release their records. It is a **general-purpose authorization** — it covers both patient-initiated requests ("At the request of the individual") and third-party releases ("Other 3rd party recipient"), but is not specifically designed for patient access under HIPAA's Right of Access.

---

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, the hospital's medical records page is accessible via Patient Resources on the main website (https://www.riversidecommunityhospital.com/patient-resources/medical-records), and form-2 is directly linked there as a downloadable PDF. The retrieval agent rated difficulty as "Easy — forms found within 1-2 clicks from the main medical records page." A web search also quickly surfaced relevant results.

However, the URL itself is opaque — `hcadam.com/api/public/content/46695a9ba25e4b9aa6376f53cef033ac?v=b53c28b5` — a CDN hash that gives no indication of the document's contents. If a patient bookmarked or shared this URL, neither they nor the recipient would know what it links to without opening it. The filename when downloaded would similarly be unhelpful.

---

## 3. TECHNICAL ACCESSIBILITY

This form is **technically strong**. Key metrics:

- **Pages:** 1
- **File size:** 173,750 bytes (~170 KB) — reasonable for a single-page form
- **Text layer:** Yes — full text is extractable (4,145 characters)
- **Fillable fields:** 52 — this is a genuinely interactive PDF form
- **Image-only scan:** No
- **Fonts:** 9 embedded fonts
- **Embedded images:** 0

The form is clearly **digital-first** — it was designed as a fillable PDF, not scanned from paper. With 52 fillable fields, nearly every data entry point appears to be interactive, including checkboxes for record types, delivery method radio buttons, and text fields for patient/recipient information. This is a significant advantage over form-1 (the older Legal Image version), which has 0 fillable fields.

The one-page layout is efficient, though it means the form is densely packed with information. The 9 fonts suggest proper typographic hierarchy (headings, body text, fine print).

---

## 4. CONTENT DESIGN

The form fits everything onto a single page, which is both a strength (concise, no multi-page confusion) and a weakness (very dense). The form is organized into three clearly labeled sections:

- **Section A** ("This section must be completed for all Authorizations"): Patient demographics, recipient info, delivery method, dates of service, purpose, facility names, psychotherapy notes, and record type selection.
- **Section B** (Marketing/sale of PHI): Only needed for commercial use.
- **Section C** (Signatures): Patient or representative signature.

**Record type granularity** is good. The form offers 16 specific record categories (Consultation, Medication List, Discharge Instructions, Discharge Summary, Operative Report, Labor and Delivery Record, ER Report, Pathology Report, Specialty Test/Therapy, EKG Report, Problem List, Physician Orders, History and Physical, Radiology Report, Progress Notes, Clinical/Laboratory Report) plus "All Pertinent Records" and an "Other" field.

**Delivery options** include four choices: Paper Copy, Electronic Media (if available), Encrypted Email, and Unencrypted Email — with a risk disclosure for the unencrypted option. The default is paper: "If left blank, a paper copy will be provided."

The **patient rights statements** (items 1-6) are reasonably clear, covering voluntariness, non-conditioning of treatment, right to revoke, re-disclosure risk, right to obtain a copy, and right to a copy of the signed form. However, these are presented in small-print legal language at the bottom of a dense form, where patients may not read them carefully.

The language throughout is formal and clinical, but not egregiously obscure. Terms like "PHI," "disclosure," and "remuneration" may challenge patients with lower health literacy. There is no plain-language summary or explanatory guidance on the form itself (unlike form-1, which includes 2 pages of instructions).

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose authorization**, not specifically a patient access request form. The purpose field offers "At the request of the individual" as a checkbox option alongside "Other 3rd party recipient (please specify purpose)," indicating it can serve both functions. However, it does not call out HIPAA's Right of Access (45 CFR § 164.524) or explain that patient access requests are subject to different rules (shorter timelines, fee limits) than third-party releases.

**Scope options:** Patients can specify dates of service, select from 16 record categories or request "All Pertinent Records," and exclude specific sensitive information. The form states: "All types of information found in the records selected above will be provided (if applicable), including information that may be viewed as sensitive, such as alcohol, drug abuse, genetic information, psychiatric, HIV testing, HIV results or AIDS information. Specify any information you want to exclude." This opt-out model for sensitive information is reasonable.

**USCDI Release:** The form includes a notable line: "For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability. Requires Direct Address or National Provider Identifier." This is unusual and forward-looking — it suggests awareness of interoperability standards and electronic health information export, though it may be confusing to patients unfamiliar with USCDI, Direct addresses, or NPIs.

**Format options:** Four delivery methods are offered, including electronic options. The email option for releases specifically notes "(for releases to email)" and the fax option is restricted: "(FAX only to Physician Office / Medical facility)."

**Expiration:** The authorization defaults to 180 days: "This authorization will expire after 180 days or on the following (please choose only one)." Patients can specify a different expiration date or event. 180 days is reasonable and not overly restrictive.

**SSN request:** The form asks for "Last 4 digit SSN (optional)" — the optional labeling is appropriate, but any SSN request on a form that may be transmitted via unencrypted email raises data minimization concerns.

---

## 6. COMPLIANCE

**Unreasonable barriers:** None observed. The form does not require notarization or in-person submission. It can be mailed or faxed to the Nashville processing center. There is no mention of upfront fees on the form itself (item 5 says "for a reasonable copy fee, if I ask for it").

**Consent bundling:** The marketing/sale-of-PHI section (Section B) is appropriately separated — it only needs completion if the request involves marketing or financial remuneration. This is proper HIPAA-compliant structure.

**Re-disclosure warning:** Item 4 properly warns that "If the recipient is not a health plan or health care provider, the released information may no longer be protected by federal privacy regulations and may be redisclosed."

**Psychotherapy notes:** The form correctly requires a separate authorization for psychotherapy notes: "Yes, then this is the only item you may request on this authorization. You must submit another authorization for other items below." This aligns with 45 CFR § 164.508(a)(2).

**ID verification field:** The form includes "ID verified by: ___________ (Initials)" — this is an internal processing field, not a patient-facing barrier.

**Centralized processing:** All requests go to HCA's Nashville PO box, not to the local hospital. This could create delays and depersonalize the process, but is not itself a compliance issue.

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **52 fillable form fields** on a single-page PDF is excellent technical execution. This is a genuinely digital-first form that patients can complete on-screen without printing.
- **USCDI Release option** ("For USCDI Release Requests: to include all elements as defined in the United States Core Data for Interoperability") is rare and forward-looking. Very few ROI forms reference USCDI or interoperability standards.
- **Spanish-language version** (form-3) with identical structure and fillable field count demonstrates commitment to language access.
- **Four delivery method options** including encrypted and unencrypted email, with transparent risk disclosure for unencrypted transmission.

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release.** The form handles both via a single checkbox ("At the request of the individual" vs. "Other 3rd party recipient"), but does not inform patients that access requests under HIPAA § 164.524 carry different rights (30-day response deadline, cost-based fees only, right to electronic copies). A patient using this form to request their own records may not know they have these protections.
- **USCDI line may confuse patients.** The text "Requires Direct Address or National Provider Identifier" assumes technical knowledge that most patients lack. No explanation is provided for what USCDI means or how to use this option.
- **"Facility Name(s) and Addresses" field** is ambiguous — it's unclear whether this refers to the facility where records are held (which could differ from Riverside Community Hospital) or some other entity.
- **Fax restriction** "(FAX only to Physician Office / Medical facility)" — unclear whether this prevents a patient from receiving their own records by fax, or only restricts *sending* the completed form by fax. The parenthetical appears next to the recipient's fax field, suggesting the former.

### 🚩 RED FLAGS

- **Centralized Nashville mailing address with no local submission option listed.** The form directs all correspondence to "PO Box 290789; Nashville, TN 37229-0789." While form-1 (the older version) lists the local Riverside hospital address, form-2 does not. A patient physically visiting the hospital's HIM department might not know they can submit locally, potentially adding days to processing time. The notes do mention an online portal option exists, but it is not referenced on this form.
