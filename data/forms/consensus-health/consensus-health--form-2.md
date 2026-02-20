# Consensus Health — form-2.pdf Evaluation

## Document: "Consent, Disclosure and Authorization Form"
**Source:** https://www.skylandsmedicalgroup.com/wp-content/uploads/2022/03/CMG-Form-Consent-Disclosure-and-Authorization-2022.pdf
**Identifier:** CMG Form 5/Version 1.0 (04/2019)
**Pages:** 2 | **File size:** 160 KB | **Fillable fields:** 0

---

## 1. DOCUMENT IDENTIFICATION

This is a **general consent and PHI disclosure authorization form**, not a patient-initiated Release of Information or medical records request form. It combines three distinct functions into a single document:

1. **General Consent for Examination and Treatment** — blanket consent for routine medical care, diagnostic procedures, and clinical photography.
2. **Acknowledgment of Receipt of Notice of Privacy Practices** — patient confirms reading the HIPAA NPP.
3. **Consent to Use and Disclose PHI for Treatment, Payment, and Health Care Operations (TPO)** — authorizes the practice to use and share PHI in the ordinary course of care.

It also includes a section for **designating authorized individuals** who may receive the patient's health and/or payment information, and a **contact preferences** section for how the practice may reach the patient.

This is an intake form — signed at or before the first visit — not a form a patient would use to request copies of their own records. Among the four documents found for Consensus Health, form-1.pdf (a generic, unbranded "Authorization for Release of Medical Records") is the closest thing to an ROI form. Form-3 is a standalone HIPAA acknowledgment and form-4 is the Notice of Privacy Practices. None of these four forms is specifically designed for a patient exercising their HIPAA Right of Access.

## 2. FINDABILITY

This form was **not available on Consensus Health's main website** (consensushealth.com). It was discovered on the website of **Skylands Medical Group** (skylandsmedicalgroup.com), a member practice in the Consensus Health network, under their Patient Resources page. Consensus Health's own site has no patient forms section, no downloadable PDFs, and no medical records request page. The researcher had to:

- Search the main site and multiple URL paths (all 404)
- Try site-specific searches (no results)
- Eventually locate forms on a subsidiary practice's WordPress site

The URL (`/wp-content/uploads/2022/03/CMG-Form-Consent-Disclosure-and-Authorization-2022.pdf`) indicates it was uploaded to WordPress media in March 2022, despite the form version date of 04/2019. The filename is reasonably descriptive. Still, a patient visiting consensushealth.com or the Cherry Hill practice site would have no way to find this form without knowing to look at a different practice's website.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and complete. All text is extractable (7,801 characters across 2 pages), with no OCR artifacts or garbled text. The document was created digitally, not scanned.

**Fillable fields:** Zero. Despite having approximately 25+ blank lines for patient name, address, DOB, medical record number, authorized individuals (name, relationship, address, phone × 4 entries), phone numbers, signature, and date fields, none are interactive PDF form fields. The patient must print and handwrite all entries.

**File size:** 160 KB for 2 pages with no embedded images is reasonable, though slightly large for a text-only document with no graphics. The metadata reports 10 fonts, suggesting some formatting complexity.

**Digital-first design:** This is a digitally-authored document (not a scan), but it is designed for paper completion. The checkbox indicators use "9" characters (likely Wingdings or similar rendering that appears as empty squares in the PDF) for Yes/No and contact preference options, reinforcing the print-and-fill workflow.

## 4. CONTENT DESIGN

**Length:** Two pages is appropriate for the scope of content covered (consent, HIPAA acknowledgment, authorized individuals, contact preferences).

**Clarity:** The opening paragraph provides a helpful definition: "As used in this form, the words 'I,' 'me,' 'my' and similar references mean the patient whose name appears above, or the parent, legal guardian or other legally responsible person on behalf of the minor or incapacitated patient named above." This is good practice. However, the TPO consent section is dense — a single paragraph covering treatment, payment, operations, drug/alcohol information, genetic information, and HIV/AIDS information, with examples embedded inline. The sentence beginning "I hereby consent and authorize Consensus Health to use and disclose my health information..." runs to approximately 100 words before the first period.

**Organization:** Sections are logically ordered: consent for treatment → HIPAA acknowledgment → TPO authorization → authorized individuals → contact preferences → signature block. Each section has a bold heading. Page 2 repeats the patient name/DOB header, which is good practice for multi-page forms.

**Layout:** The form uses adequate whitespace and line spacing. The authorized individuals section has four identical blocks (name, relationship, address, phone, yes/no checkboxes for health info and payment info), which is well-structured but takes up significant space on page 2.

## 5. PATIENT-CENTEREDNESS

**This form does not serve a patient trying to access their own health records.** It is a provider-initiated intake form that authorizes Consensus Health to use and disclose the patient's information in the normal course of care. It does not:

- Provide a mechanism for the patient to request copies of their records
- Mention the HIPAA Right of Access (45 CFR § 164.524)
- Offer any format options for receiving records (electronic, paper, etc.)
- Allow the patient to specify a date range or record types
- Reference fees, timelines, or the process for obtaining records

The "Disclosures to Authorized Individuals" section allows the patient to designate up to four people who may receive health or payment information, but this is a standing designation — not a request for specific records to be sent.

The contact preferences section is patient-friendly in that it lets patients choose how the practice communicates with them (home/work/cell phone, detailed vs. callback-only messages, mail to home or work), which shows some awareness of patient communication preferences.

## 6. COMPLIANCE

Since this form is not an ROI/records request form, the typical HIPAA Right of Access compliance concerns (fees, timelines, unreasonable barriers) do not directly apply. However, several aspects are worth noting:

**Broad TPO consent bundling:** The form combines general treatment consent, HIPAA acknowledgment, and PHI use/disclosure authorization into a single signature. While HIPAA permits consent (not authorization) for TPO uses, bundling these with the treatment consent means a patient cannot easily agree to treatment while declining the PHI disclosure consent — though HIPAA does not require such granularity for TPO uses.

**Sensitive information disclosure:** The TPO consent explicitly covers "drug or alcohol treatment information, genetic, genetic counseling and genetic testing information, HIV/AIDS information." Under many state laws (including New Jersey's), these categories of information have heightened protections. The blanket consent to disclose all of these categories for TPO purposes may be overly broad, though HIPAA's TPO consent framework arguably permits this.

**No expiration or revocation language:** The form contains no statement about how long this consent remains in effect or how the patient might revoke it. The final section states "A copy of this consent and authorization may be used in place of the original" but says nothing about duration or revocation rights.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No revocation language or expiration.** The form contains no mention of the patient's right to revoke this consent/authorization, nor any expiration date. The statement "A copy of this consent and authorization may be used in place of the original" suggests indefinite validity. While a TPO consent (as distinguished from a HIPAA authorization) does not require the same revocation provisions, the form's title includes "Authorization," creating ambiguity about which legal framework applies.

### ⚠️ AMBIGUITIES

- **"Consent" vs. "Authorization" confusion.** The form title is "Consent, Disclosure and Authorization Form," but HIPAA distinguishes between consent (for TPO, optional, 45 CFR § 164.506) and authorization (for other uses, required, 45 CFR § 164.508). The form uses both terms interchangeably — "I hereby consent and authorize" — without clarifying which legal standard applies. This matters because authorizations require specific elements (expiration, right to revoke, etc.) that this form lacks.

- **Checkbox rendering.** The metadata shows "9 Yes 9 No" for the authorized individuals section and "9" characters for contact preferences. These likely render as checkbox squares in the PDF but appear as the digit "9" in extracted text, suggesting a font-dependent rendering (e.g., Wingdings). This could cause accessibility issues for screen readers or text-based processing.

### ❌ ERRORS

- **Form version mismatch.** The form identifier is "CMG Form 5/Version 1.0 (04/2019)" but was uploaded to the Skylands website in March 2022 with "2022" in the filename. The form content has not been updated since 2019, while the companion Notice of Privacy Practices (form-4) was updated to Version 2.0 in 2025. The consent form's reference to the NPP may therefore be based on an outdated version of that notice.

### ✨ BRIGHT SPOTS

- **Authorized individuals section is well-designed.** The form provides structured fields for up to four authorized individuals, with separate Yes/No options for health information and payment information disclosure. This granularity allows the patient to, for example, authorize a spouse to receive health information but not billing details, or vice versa.

- **Contact preferences section.** The form allows patients to specify communication preferences across three phone numbers (home, work, cell) with the option to choose "Detailed Message" vs. "Call Back Message Only" for each, plus mail to home or work address. This is more granular than most intake forms.
