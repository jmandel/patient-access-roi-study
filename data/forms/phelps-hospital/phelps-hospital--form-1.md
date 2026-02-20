# Phelps Hospital — Form 1 Evaluation

## Document: Authorization for Release of Health Information (English)

**Source URL:** https://www.northwell.edu/sites/northwell.edu/files/2022-03/authorization-for-release-health-information-form-english.pdf
**Form ID:** VD001 (9/28/21)
**Pages:** 3 | **File size:** 86 KB | **Fillable fields:** 38

---

## 1. DOCUMENT IDENTIFICATION

Form-1 is the **"Authorization for Release of Health Information"** — a general-purpose third-party release form used across the entire Northwell Health system. It is not specific to Phelps Hospital. This is one of six documents retrieved for this organization:

- **Form-1** (this document): Third-party release authorization (English) — 3 pages, 38 fillable fields
- **Form-2**: "Request for Access to Health Information by Patient or Personal Representative" — the patient self-access form citing HIPAA 45 CFR 164.524 — 2 pages, 28 fillable fields
- **Form-3**: Duplicate of form-1 at a different URL (`release-of-health-information-form-english.pdf`) — identical text but 0 fillable fields and a smaller file (44 KB vs 86 KB)
- **Form-4**: Instructions for completing the authorization (release) form — 3 pages
- **Form-5**: Spanish-language version of the authorization form — 6 pages (bilingual)
- **Form-6**: Instructions for completing the patient access form — 2 pages

Critically, this form is **not** the patient self-access form. Northwell Health correctly distinguishes between third-party release (this form) and patient access (form-2). A patient seeking their own records should use form-2, not this one. The Northwell medical records page separates these into distinct sections, which reduces the risk of a patient using the wrong form.

---

## 2. FINDABILITY

The form was **easy to locate**. Web searches for "Phelps Hospital" combined with medical records or authorization terms quickly led to the Northwell Health system-wide medical records page at `https://www.northwell.edu/manage-your-care/medical-records`. The page organizes forms into two clearly labeled sections: "Request for Access to Health Information" and "Authorization for Release of Health Information."

All forms are directly linked as PDFs from this page — no portal login required. The URLs use descriptive filenames (e.g., `authorization-for-release-health-information-form-english.pdf`). However, there is a confusing duplication: form-1 and form-3 contain identical text content but are hosted at different URLs (`authorization-for-release-...` and `release-of-health-information-...`), and only one of them (form-1) has fillable fields. A patient could easily download the non-fillable version without realizing.

The Phelps Hospital sub-site (`phelps.northwell.edu`) does not appear to have its own medical records page — the patient must navigate to or be directed to the parent system's site.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. Full text is extractable (5,820 characters across 3 pages). This is a digitally authored PDF, not a scan.

**Fillable fields:** 38 interactive form fields are present, which is substantial. Field names are not exposed in the metadata (`fillable_field_names: []`), but the field count suggests comprehensive coverage of the form's data-entry areas (patient demographics, addresses, checkboxes for manner/format, date fields, signature areas). This is a genuinely fillable form.

**File format:** 86 KB for a 3-page form with no embedded images is compact and efficient. The file uses 3 fonts, suggesting clean, consistent typography.

**Digital-first design:** Yes — this form was clearly designed as a digital document. The checkbox rendering uses the `£` character in extracted text (standard PDF checkbox placeholder), fields are interactive, and layout is structured for on-screen completion. The footer includes "Copy 1 – Patient Medical Record / Copy 2 – Patient or Patient's Personal Representative," suggesting the form was originally conceived with physical carbon-copy distribution in mind, but the digital version is well-executed.

**Notable issue:** Form-3 is the same document hosted at a different URL but **without** fillable fields (0 fillable fields, 44 KB). If a patient finds the wrong version, they lose all interactive functionality.

---

## 4. CONTENT DESIGN

**Length:** 3 pages, which is proportionate for a release authorization covering NY State–specific requirements for substance abuse, mental health, and HIV-related information.

**Organization:** The form follows a logical numbered sequence (9 sections):
1. Who is releasing (from)
2. Who is receiving (to)
3. Delivery manner and format
4. Verbal authorization option
5. Requested health information
6. Reason for release
7. Legal disclosures
8. Sensitive information opt-out
9. Expiration and signatures

**Clarity:** The form uses a mix of plain language and legal terminology. Section headers use parenthetical plain-language explanations: "Contact information or health care provider or entity to release this information **(from who)**" and "person(s) or entities who will receive this information **(to who)**." This is helpful. However, section 7 contains dense legal text referencing "New York State Law, 42 CFR Part 2 and the Privacy Rule of the Health Insurance Portability and Accountability Act of 1996 (HIPAA)" in a long paragraph that could be intimidating.

**Section 8** uses an **opt-out** model for sensitive information: "The following types of information **may be released unless** you or your authorized representative initial in the appropriate spaces provided below to **opt out**." This means substance abuse, mental health, and HIV information are released by default unless the patient actively opts out — a design choice that favors information flow but may not align with patient expectations.

**Readability:** Font appears to be standard size (likely 10-11pt based on character density and page count). The form avoids being cramped; whitespace between sections is adequate.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is explicitly a **third-party release** form, not a patient access form. Northwell Health provides a separate "Request for Access" form (form-2) that cites HIPAA 45 CFR 164.524. This separation is a best practice — it means this form does not need to serve the patient access use case, and its design is appropriately focused on the release authorization scenario.

**Scope options:** The form offers good granularity in section 5:
- Medical Record Abstract (summary)
- Medical Record by date range
- Entire Medical Record
- Laboratory results by date of service
- Radiology images and reports by date of service
- Itemized bill
- Other (free text)

**Format/delivery options:** Section 3 offers multiple delivery methods and formats:
- Manner: Regular mail, pick up at facility, electronic mail, fax, other
- Format: Paper copy, Secure USB Flash Drive, CD
- For electronic mail: Secure email or unsecure email (with explicit acknowledgment of encryption risk)

The inclusion of USB flash drive and CD as format options, along with secure/unsecure email, gives patients meaningful choice — though these feel slightly dated (no mention of patient portal delivery or direct download).

**Right of Access language:** This form references HIPAA and 42 CFR Part 2 in section 7, but does **not** reference § 164.524 (Right of Access) — that citation is reserved for form-2. This is appropriate since this form is for third-party release, not patient access.

**EHI Export:** No mention of electronic health information export or bulk data access.

---

## 6. COMPLIANCE

**Authorization expiration:** Section 9 defaults to "One (1) year" with an option for a custom expiration date. The form states "*This field must be completed with date or event," preventing indefinite authorizations. This is compliant and reasonable.

**Voluntariness:** Section 7b explicitly states: "signing this Authorization is voluntary. My treatment, payment, enrollment in a health plan, or eligibility for benefits will not be conditioned upon my authorization of this disclosure." This is proper HIPAA language.

**Right to revoke:** Section 7a states the patient can revoke "at any time by writing to the health care provider listed in Section 1," with the standard limitation for actions already taken.

**Sensitive information handling:** The opt-out model for substance abuse (OASAS), mental health (OMH), and HIV information complies with NY State law requirements. The form correctly notes that 42 CFR Part 2 restricts redisclosure of substance abuse treatment information.

**No notarization required.** No in-person submission requirement. No fees mentioned.

**Witness requirement:** The signature block includes a "Witness to signature" line. This is presented as a field but not explicitly marked as required. If enforced as mandatory, it could create a barrier for patients completing the form independently.

---

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Sensitive information opt-out model is easy to miss.** Section 8 releases substance abuse, mental health, and HIV-related information **by default** unless the patient initials to opt out. The instruction "initial in the appropriate spaces provided below to opt out" could be overlooked, leading to unintended disclosure of sensitive information. An opt-in model would be safer for patients.

- **Witness line ambiguity.** The signature block includes a "Witness to signature" line but does not clarify whether a witness is required. If the form is rejected for lacking a witness signature, this becomes an undisclosed barrier.

- **Duplicate form URLs create confusion.** Form-1 (`authorization-for-release-...`) has 38 fillable fields; form-3 (`release-of-health-information-...`) has identical content but 0 fillable fields. Both are linked from the same Northwell page. A patient who downloads the wrong version must print and handwrite the form.

### ❌ ERRORS

- **Spanish form link bug.** Per the retrieval notes, both the "Request for Access Form (Spanish)" and "Authorization Form (Spanish)" links on the Northwell website point to the same URL (`request-for-access-to-health-info-form-spanish.pdf`). There does not appear to be a separate Spanish-language patient access form — only the authorization form exists in Spanish.

### ✨ BRIGHT SPOTS

- **Clear separation of patient access and third-party release.** Northwell maintains two distinct forms — "Request for Access" (form-2) and "Authorization for Release" (this form) — with the patient access form explicitly citing HIPAA § 164.524. This is a best practice that many organizations fail to implement.

- **Companion instruction documents.** Both forms have dedicated instruction PDFs (form-4 for the authorization, form-6 for patient access) with annotated examples. This is unusually thorough and helps patients complete the forms correctly.

- **Rich delivery and format options.** The form offers mail, facility pickup, secure email, unsecure email (with risk acknowledgment), fax, plus paper, USB, and CD format choices — giving patients meaningful control over how they receive information.

- **Parenthetical plain-language glosses.** Using "(from who)" and "(to who)" alongside formal field labels is a small but effective accessibility touch that many forms lack.

- **38 fillable fields.** The form is genuinely interactive as a digital artifact, not just a flat PDF for printing.
