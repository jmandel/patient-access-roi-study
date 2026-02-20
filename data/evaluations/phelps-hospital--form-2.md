# Phelps Hospital — Form 2 Evaluation

## Document: Request for Access to Health Information by Patient or Personal Representative

**File:** form-2.pdf | **Pages:** 2 | **Size:** 656 KB | **Fillable fields:** 28 | **Form ID:** VD087 (9/28/21)
**Source URL:** https://www.northwell.edu/sites/northwell.edu/files/2022-03/request-for-access-to-health-information-form-english-2022.pdf

---

## 1. DOCUMENT IDENTIFICATION

This is a **patient self-access request form** — specifically titled "REQUEST FOR ACCESS TO HEALTH INFORMATION BY PATIENT OR PERSONAL REPRESENTATIVE." It is distinct from the general third-party release authorization (forms 1 and 3, titled "Authorization for Release of Health Information"). The opening paragraph explicitly frames the request under HIPAA's Right of Access: "I am making this request under the provisions of the Health Insurance Portability and Accountability Act 'HIPAA') that entitle me to access my own health information including directing it to another person or entity (45 CFR 164.524)."

This is a Northwell Health system-wide form, not Phelps Hospital–specific. It is one of six documents found on Northwell's medical records page. The full set includes:
- **Form 1 / Form 3**: Authorization for Release of Health Information (third-party release; two URLs, same content)
- **Form 2** (this document): Patient self-access request
- **Form 4**: Instructions for the third-party authorization form
- **Form 5**: Spanish-language authorization form
- **Form 6**: Instructions for this patient access form

The deliberate separation of patient access from third-party release is a significant structural choice that reflects HIPAA's distinction between these two use cases.

---

## 2. FINDABILITY

The form is **easily locatable**. Per the retrieval notes, web searches for "Phelps Hospital Northwell Health authorization release health information form PDF" immediately led to the Northwell Health medical records page (https://www.northwell.edu/manage-your-care/medical-records). That page is well-organized with two distinct sections: one for "Request for Access to Health Information" (patient self-access) and one for "Authorization for Release of Health Information" (third-party). The form URL is descriptive (`request-for-access-to-health-information-form-english-2022.pdf`), making its purpose clear even from the link itself.

A patient searching for Phelps Hospital specifically would need to understand that Phelps uses Northwell Health's system-wide forms, which requires navigating to the parent system's website. Phelps Hospital's own site (phelps.northwell.edu) does not appear to host the forms directly — the patient must reach the Northwell corporate medical records page.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. Full text is extractable (3,912 characters across 2 pages), confirming this is a digitally-created PDF, not a scan.

**Fillable fields:** 28 interactive form fields are present, making this a genuinely fillable digital form. This is notably better than form-3 (the alternate-URL version of the authorization form, which has 0 fillable fields) and form-4/form-6 (instruction documents with no fields). The field names are not reported in the metadata (empty array), which may indicate generic field naming, but the fields are functionally present.

**File size:** At 656 KB for a 2-page form with no embedded images, the file is somewhat large — likely due to embedded fonts or PDF structure overhead rather than image content. By comparison, form-1 (3 pages, 38 fillable fields) is only 86 KB. This is a minor concern; the file will still load quickly.

**Fonts:** 4 fonts are embedded, and 0 images, confirming a clean digital-first design.

**Overall:** This is a well-constructed digital document — fillable, text-extractable, and designed for on-screen completion rather than print-and-scan workflows.

---

## 4. CONTENT DESIGN

**Length:** At 2 pages, the form is concise and proportionate to its purpose. It covers patient identification, source facility, recipient, delivery preferences, record scope, and signature — all essential elements — without padding.

**Organization:** The form follows a logical numbered sequence:
1. Facility releasing information ("From Who")
2. Recipient ("To Who") — with checkboxes for "To me" vs. "To Another Person or Entity"
3. Delivery manner and format (presented as a structured grid)
4. Requested health information (checkboxes for common record types)
5. Substance use disorder / HIV-specific section
6. Signature block

The delivery grid (Section 3) is well-designed, pairing manner (mail, pickup, email, fax, other) with format (paper, USB, CD, secure email, unsecure email) and delivery details in a tabular layout. This gives patients clear, structured choices.

**Clarity:** The language is reasonably plain. Headings like "From Who" and "To Who" in parentheses after formal labels ("Northwell Health Entity/Facility to Release this Information") show an effort to translate bureaucratic language. However, the substance use disorder section (Section 5) is dense legal text that may challenge lay readers — e.g., "This consent is subject to revocation at any time except to the extent that the Part 2 program that is permitted to make the disclosure has already acted in reliance on it."

**Readability:** The form uses checkbox-based selection for most fields, reducing free-text burden. The font appears to be standard size (readable). The 2-page length avoids cramming.

---

## 5. PATIENT-CENTEREDNESS

**Patient access focus:** This form is explicitly designed for patient self-access, not third-party release. The title, the opening HIPAA citation, and the "To me" checkbox in Section 2 all confirm this. This is the correct form for a patient requesting their own records under 45 CFR § 164.524.

**Scope options:** Section 4 provides granular checkboxes:
- Medical Record Abstract (summary)
- Medical Record with date range
- Entire Medical Record
- Laboratory results by date of service
- Radiology images and reports by date of service
- Itemized bill
- Other (free-text)

This gives patients meaningful control over what they request, including the option for a complete record.

**Format and delivery options:** Section 3 offers multiple delivery manners (mail, pickup, email, fax, other) and multiple formats (paper, USB flash drive, CD, secure email, unsecure email). The "unsecure email" option includes a clear acknowledgment: "I acknowledge that e-mail sent unencrypted means others may be able to access the information and read it once it is transmitted over the internet." This is a HIPAA-compliant way to honor patient requests for electronic delivery via unencrypted email per the patient's own direction.

**Right of Access language:** Explicitly present in the opening paragraph, citing 45 CFR 164.524 by name. This is a strong signal of compliance awareness.

**EHI Export / bulk data:** No mention of electronic health information export, FHIR, patient portal downloads, or bulk data access. The electronic options are limited to email, USB, and CD — traditional electronic formats, not modern interoperability mechanisms.

**Companion instructions:** Form-6 provides a step-by-step illustrated guide for completing this form, which is a significant patient-friendly feature.

---

## 6. COMPLIANCE

**No notarization required.** The form requires a signature but does not demand notarization or in-person submission.

**Witness line present but not required.** The signature block includes a "Witness to Signature" line, but the form does not state that a witness is mandatory. The footnote states: "The signature of the patient must be obtained unless the patient is an unemancipated minor under the age of 18 or is otherwise incapable of signing."

**No fees disclosed.** The form does not mention fees or costs for record access. Under HIPAA's Right of Access rule, providers may charge a reasonable, cost-based fee, but the absence of fee disclosure on the form itself is neutral — it neither warns of excessive fees nor promises free access.

**Substance use disorder and HIV protections:** Section 5 handles 42 CFR Part 2 (substance use disorder) and HIV/AIDS information with appropriate specificity, requiring a separate purpose statement and expiration date for these categories. The note about Part 2 revocation rights is legally correct. Importantly, this section is marked "ONLY IF the information you are requesting to access contains substance use disorder treatment information or HIV/AIDS Information" — so it doesn't burden patients who aren't requesting these records.

**No expiration requirement for general requests.** Unlike the third-party authorization form (forms 1/3), which requires an expiration date, this patient access form only requires an expiration date for substance use disorder/HIV information requests. This is appropriate — HIPAA does not require patient access requests to expire.

**No submission method specified.** The form does not indicate how or where to submit it (mail, fax, in-person, email). Patients would need to find this information elsewhere, potentially on the Northwell website or by calling the facility.

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Separate patient access form.** Northwell maintains a dedicated form for patient self-access under HIPAA § 164.524, distinct from the general third-party release authorization. Many health systems use a single form for both purposes, which can confuse patients and create unnecessary barriers. This separation is a best practice.

- **Explicit HIPAA Right of Access citation.** The opening paragraph cites "45 CFR 164.524" by name, framing the form as an exercise of patient rights rather than a permission request. This is unusually clear and legally grounded.

- **Rich delivery and format options.** The structured grid offering mail, pickup, email (secure and unsecure), fax, and "other" — combined with paper, USB, and CD format choices — gives patients meaningful control over how they receive their records. The unsecure email acknowledgment properly respects patient autonomy per HIPAA guidance.

- **Companion instruction document.** Form-6 provides a step-by-step annotated guide for completing this form, with example entries (e.g., "Jane Patient," "09/09/2000"). This significantly lowers the barrier for patients unfamiliar with medical records requests.

- **28 fillable fields.** The form is genuinely interactive, allowing digital completion without printing.

### ⚠️ AMBIGUITIES

- **No submission instructions.** The form provides no guidance on where or how to submit it — no mailing address, fax number, email address, or portal link. A patient who fills out the form has no way to know where to send it without finding that information elsewhere.

- **"To Another Person or Entity" on a patient access form.** Section 2 includes a checkbox to direct records "To Another Person or Entity," which blurs the line between patient access and third-party release. While HIPAA does allow patients to direct their records to a third party under the Right of Access, the presence of this option on a patient access form — alongside a separate third-party authorization form (forms 1/3) — may confuse patients about which form to use.

### ❌ ERRORS

- **Missing closing parenthesis in HIPAA citation.** The opening paragraph reads: "the Health Insurance Portability and Accountability Act 'HIPAA') that entitle me to access my own health information" — the opening parenthesis before "HIPAA" is rendered as a closing single-quote rather than a parenthesis. The extracted text shows `"HIPAA")` with a mismatched opening delimiter.

- **No Spanish-language equivalent available.** Per the retrieval notes, the website links for the Spanish "Request for Access" form actually point to the Spanish authorization (third-party release) form. There is no separate Spanish-language version of this patient access form, despite the website appearing to offer one. This is a website bug that affects Spanish-speaking patients' ability to exercise their access rights.
