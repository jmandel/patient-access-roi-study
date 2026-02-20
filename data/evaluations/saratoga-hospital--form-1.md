# Saratoga Hospital — Form 1 Evaluation

**Document**: `form-1.pdf` — "Authorization to Disclose Protected Health Information"
**Organization**: Saratoga Hospital (Saratoga Springs, NY) — community hospital, nonprofit, part of Albany Med Health System
**Source URL**: https://www.albanymed.org/wp-content/uploads/sites/2/2024/05/SH_Auth-to-Disclose-PHI_2020_Electronic-Form.pdf

---

## 1. DOCUMENT IDENTIFICATION

This is a **Saratoga Hospital–specific authorization to disclose PHI**, identified as Form 4202 (originally dated 2/17, revised 3/20). It is branded with "The Saratoga Hospital" header and the 211 Church Street, Saratoga Springs, NY 12866 address. The form authorizes Saratoga Hospital "and its affiliates" to disclose health information.

This is the **older, legacy form** for the organization. A newer system-wide form (form-2.pdf) has since been published by the Albany Med Health System (dated November 2024), which covers all four AMHS hospitals including Saratoga Hospital. The newer form is the one currently linked from the "Requesting Medical Records" page on albanymed.org. This form-1 remains hosted on albanymed.org but appears to be a legacy artifact from before Saratoga Hospital was fully absorbed into the AMHS branding.

The form is a **general-purpose authorization to disclose** — not specifically designed for patient self-access under HIPAA's Right of Access. It frames the transaction as disclosure to a named recipient, requiring the patient to fill in "DISCLOSE TO" and "REASON/PURPOSE" fields.

---

## 2. FINDABILITY

The form was located via a general web search (`Saratoga Hospital Saratoga Springs NY medical records release form`), which returned a direct link to this PDF on albanymed.org. A filetype:pdf-specific search did not directly surface it.

The main navigation complexity is that Saratoga Hospital's original domain (saratogahospital.org) now redirects to albanymed.org/saratoga/. A patient searching specifically for "Saratoga Hospital medical records form" would need to understand this redirect or know to look on the Albany Med site. The URL itself is reasonably descriptive (`SH_Auth-to-Disclose-PHI_2020_Electronic-Form.pdf`), making clear this is the Saratoga Hospital authorization form in electronic format.

However, the current medical records page on albanymed.org links to the **newer system-wide form** (form-2.pdf), not this legacy form. A patient following the current website navigation would find form-2, not form-1. This form persists as a findable-but-not-prominently-linked artifact.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and complete. The full 5,566-character text extracts cleanly via pdftotext, with the only artifact being the form number rendered as `Ì4202jÎ` (likely a barcode font).

**Fillable fields**: The form has **37 fillable fields**, which is strong for a single-page document. The filename explicitly identifies it as an "Electronic-Form." This indicates intentional design for on-screen completion rather than print-and-handwrite.

**File format**: 98,869 bytes for a single page with no embedded images — very lightweight. Uses 9 fonts. This is a clean, natively digital PDF, not a scan.

**Digital-first design**: Yes. The combination of fillable fields, small file size, no scanned images, and the "Electronic-Form" designation in the filename all point to a form designed for digital use. The email delivery option further supports this.

---

## 4. CONTENT DESIGN

**Length**: Single page — impressively compact given the amount of content it covers. This is efficient for patients.

**Organization**: The form follows a logical top-to-bottom flow: patient demographics → authorization statement → record type selection → recipient → delivery method → legal disclosures → signatures. This is conventional and easy to follow.

**Record type options**: The form offers checkboxes for: Summary, Laboratory Results, Radiology Reports, Radiology Films, Operative Report, Discharge Summary, History and Physical, Emergency Record, Mental Health, and an "Other" write-in. It also includes a date-of-visit field for scoping. Notably, there is **no "Entire Record" checkbox** — patients must select specific categories or use "Other."

**Delivery methods**: Four options are offered via checkboxes: "Pick-up," "By Mail," "Email," and "By Fax." The inclusion of **email** is a positive feature, though the form provides no email address field to specify where records should be sent electronically.

**Language complexity**: The form mixes plain patient-facing language (the top half) with dense legal paragraphs (the bottom half). The authorization language covering HIV/AIDS, re-disclosure, and 42 CFR Part 2 spans several long paragraphs in small print. The sentence beginning "I understand that federal and state law offer special protection for information relating to sexually transmitted disease..." runs to 62 words. The 42 CFR Part 2 notice at the very bottom is clearly directed at the **recipient**, not the patient — a confusing context shift in a patient-facing form.

**Visual density**: Fitting all content onto a single page comes at a cost — the legal disclosure section is densely packed. The form appears to use a mix of larger type for fields and smaller type for legal language.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is structured as a **third-party disclosure authorization**, not a patient self-access request. The patient must fill in "DISCLOSE TO" with a recipient name and address, plus "REASON/PURPOSE." A patient requesting their own records would need to list themselves as the recipient and invent a purpose — an awkward and unnecessary friction for a right-of-access request.

**Scope options**: The form allows date-of-visit scoping and record-type selection via checkboxes. However, the "Copy of record" vs. "Review Record" toggle at the top is ambiguous — it's unclear what "Review Record" means operationally (in-person viewing?).

**Format options**: Delivery includes email, which is progressive. However, there is no mention of electronic format options (e.g., CD, USB, patient portal), and no field to specify an email address for electronic delivery. The newer system-wide form (form-2.pdf) offers CD and USB options and references the MyChart patient portal — capabilities missing here.

**Right of Access language**: The form contains **no reference to HIPAA § 164.524**, the patient's Right of Access, or any patient rights explanation beyond the right to revoke authorization. It does not inform patients that they have a right to receive their records in a requested format.

**EHI Export awareness**: No mention of electronic health information export or bulk data.

---

## 6. COMPLIANCE

**Fee disclosure**: The form states: "I understand the fee for copies of my medical record is $0.75 cents per page. This fee will be waived if the records are being sent to another physician or for continuing treatment." Under HIPAA's Right of Access (45 CFR § 164.524), covered entities may only charge a reasonable, cost-based fee for patient access requests. A flat $0.75/page rate may exceed what is permissible for patient self-access requests. The OCR has clarified that per-page fees are generally not permissible for patient access — only labor, supply, and postage costs. The waiver for physician transfers suggests the fee is being applied uniformly to patient requests.

**Expiration**: The authorization defaults to **90 days** if no expiration date is specified. This is a standard timeframe and not unreasonable.

**Witness requirement**: The form includes a **witness signature line**, which is not required by HIPAA or New York law for standard authorization to release records. This creates an additional barrier, as the patient must find someone to witness their signature.

**Photo ID verification**: The "SARATOGA HOSPITAL USE ONLY" section includes "Photo ID verified - Initials: ___." While identity verification is reasonable, the form does not clarify whether this applies to in-person pick-up only or to all requests. If required for mailed/emailed requests, this would be burdensome.

**Re-disclosure language**: The HIV-specific re-disclosure warning and 42 CFR Part 2 notice are appropriate under New York Public Health Law Article 27-F and federal substance abuse confidentiality rules.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **$0.75/page fee applied to patient access**: The form states this fee uniformly with no distinction between patient self-access and third-party requests. Under HIPAA's Right of Access, per-page fees are generally impermissible for patient access requests. The OCR's 2016 guidance explicitly states that flat per-page fees do not satisfy the "reasonable, cost-based" standard for patient access.

- **Witness signature required**: The form includes a mandatory-appearing witness signature line. No federal or New York state law requires a witness for a patient's own authorization to release their records. This imposes an unnecessary barrier — a patient completing the form at home would need to arrange for someone to witness their signature.

### ⚠️ AMBIGUITIES

- **"Copy of record" vs. "Review Record"**: These two options are presented as radio-button alternatives ("Check one") but "Review Record" is undefined. Does this mean in-person inspection at the HIM department? The form gives no explanation.

- **Email delivery with no email field**: The form offers "Email" as a delivery option but provides no field for the patient to enter an email address. It's unclear how the hospital would fulfill an email delivery request.

- **Form still in circulation despite newer replacement**: This 2020 form coexists with a 2024 system-wide form. A patient might complete this legacy form only to have it rejected or redirected.

### ❌ ERRORS

- **"$0.75 cents per page"**: This is technically incorrect — "$0.75 cents" would mean three-quarters of one cent. The intended meaning is clearly $0.75 (seventy-five cents) per page, but the phrasing "$0.75 cents" is a factual formatting error that combines the dollar sign with the word "cents."

- **Garbled form number**: The form number "4202" renders as `Ì4202jÎ` in text extraction, suggesting it uses a barcode font that doesn't extract cleanly. This is a minor technical defect.

### ✨ BRIGHT SPOTS

- **37 fillable fields on a single page**: The form achieves a strong digital-completion experience in a compact format. Having fillable fields substantially reduces the friction of form completion compared to print-and-handwrite alternatives.

- **Single-page efficiency**: Covering demographics, record types, delivery options, legal disclosures, and signatures on one page is unusually efficient. Many comparable forms span 2-4 pages.
