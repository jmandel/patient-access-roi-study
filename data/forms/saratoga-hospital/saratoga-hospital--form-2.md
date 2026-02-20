# Saratoga Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **Albany Med Health System (AMHS) system-wide "Authorization to Disclose Protected Health Information"**, dated November 2024 (V2). It is a general-purpose ROI authorization form covering all four hospitals in the AMHS system: Albany Medical Center, Columbia Memorial Health, Glens Falls Hospital, and Saratoga Hospital. The form includes checkboxes allowing patients to select which facility's records to release.

This is the **current/active form** linked from the AMHS "Requesting Medical Records" page (albanymed.org/patients-visitors/requesting-medical-records/). It replaces the older Saratoga Hospital–specific form (form-1.pdf, Form 4202 dated 2020), which was branded solely to Saratoga Hospital at 211 Church Street. The two forms share nearly identical legal language (revocation rights, HIV/AIDS protections, 42 CFR Part 2), but form-2 is a more modern, redesigned version with broader coverage and a more structured layout across 2 pages versus form-1's single dense page.

**Source URL**: `https://www.albanymed.org/wp-content/uploads/sites/2/2024/11/24_AMHS_Authorization-to-Disclose-PHI_V2-1.pdf`

---

## 2. FINDABILITY

The form was **easy to find**. According to retrieval notes, a general web search for `Saratoga Hospital Saratoga Springs NY medical records release form` returned a direct link. The form is also accessible by navigating to the AMHS "Requesting Medical Records" page. No difficulties were encountered — no bot blocking, CAPTCHA, or authentication walls.

However, there is a layer of indirection: Saratoga Hospital's original domain (saratogahospital.org) now redirects to albanymed.org/saratoga/. A patient searching specifically for "Saratoga Hospital medical records form" would need to understand that the hospital is now part of the Albany Med Health System and that a system-wide form has replaced the hospital-specific one. The URL itself (`24_AMHS_Authorization-to-Disclose-PHI_V2-1.pdf`) is reasonably descriptive, including the system name, document type, and version.

---

## 3. TECHNICAL ACCESSIBILITY

**Strong technical profile.** The form is a digitally-designed PDF (not a scan) with a full text layer (5,432 characters extractable via pdftotext). At 114,399 bytes for 2 pages, the file size is efficient. It uses 7 fonts with no embedded images, indicating clean digital-first construction.

The standout feature is **65 fillable form fields** — a high count that suggests comprehensive interactive coverage of all input areas (patient demographics, record type checkboxes, facility selection, sensitive-information initials, recipient details, and delivery method). This is well above average for healthcare ROI forms, which frequently have zero fillable fields.

The form was designed for digital use: it explicitly mentions the MyChart patient portal as an alternative submission channel ("Make your request through MyChart, the Albany Med Health System's secure online patient portal. Log in or create an account at mychart.albanymed.org").

---

## 4. CONTENT DESIGN

**Layout and Organization**: The form is organized into clearly labeled sections across 2 pages:
- Page 1: Patient Information → Record Types → Facility Selection → Sensitive Information → Recipient → Delivery Method
- Page 2: Legal disclosures → Signature block

The flow is logical — it moves from "who you are" to "what you want" to "where to send it" to "legal terms" to "sign here." The page 1 sidebar callout directing patients to MyChart is a useful design element.

**Record type options** are granular and practical: Billing Records, ER Report, Urgent Care Report, Primary Care Office notes, Specialty Office Notes, Laboratory Results, Radiology Reports, Radiology Images, Discharge Summary, Operative Reports, History & Physical, Entire Record, and Other. This gives patients meaningful control over scope.

**Sensitive information** is handled with a separate initials-based section for Alcohol/Drug Treatment, Mental Health Related Information, HIV-Related Information, and Genetic Testing Information — each requiring individual patient initials. This complies with New York State and federal requirements (42 CFR Part 2) for heightened consent.

**Delivery options** include Email, Fax, Mail (CD or USB Drive), and Pick Up In-Person (CD or USB Drive). The inclusion of CD and USB options is somewhat dated but functional.

**Readability concerns**: Page 2 is a dense block of legal text with no visual hierarchy — a single wall of small-print paragraphs covering revocation rights, re-disclosure warnings, HIV protections, and 42 CFR Part 2. This section would benefit from headings, bullet points, or at minimum paragraph spacing. The legal language is written at a college reading level and uses terms like "42 CFR Part 2" and "acquired immunodeficiency syndrome" without plain-language explanation.

---

## 5. PATIENT-CENTEREDNESS

**This is a general third-party release form, not a patient-access-specific form.** The structure assumes the patient is authorizing disclosure *to* a named recipient ("Release Information To: Name of Recipient"). A patient requesting their own records must fill in their own name as the recipient, which is not intuitive. There is no dedicated pathway, checkbox, or simplified flow for "I want my own records."

**No HIPAA Right of Access language**: The form does not reference 45 CFR § 164.524, does not mention the patient's right to access their own records, and does not distinguish between patient access requests and third-party disclosures. This is a significant gap — HIPAA's Right of Access has different fee structures, timelines, and denial grounds than third-party authorizations.

**No EHI export or bulk data mention**: There is no reference to electronic health information export, USCDI, or any modern interoperability frameworks.

**MyChart mention is positive**: The sidebar text — "Make your request through MyChart, the Albany Med Health System's secure online patient portal" — acknowledges a digital alternative, though it does not explain what records are available through MyChart or whether it fulfills a full records request.

**Fee disclosure**: The form states "the fee for copies of my medical record is $0.75 cents per page. This fee will be waived if the records are being sent to another physician or for continuing treatment." This per-page fee is presented as applying universally, without distinguishing patient access requests (which HIPAA limits to cost-based fees) from third-party requests.

**Expiration**: Default authorization expiry is 90 days if no date is specified, which is identical to the older form-1.

---

## 6. COMPLIANCE

**Fee structure**: The $0.75/page fee, if applied to patient access requests under HIPAA's Right of Access, may exceed the allowable "reasonable, cost-based fee" under 45 CFR § 164.524(c)(4). HHS guidance has clarified that per-page fees for patient access should reflect only labor and supply costs, not a flat $0.75/page. The form does not differentiate between patient access and third-party release fees.

**90-day default expiration**: While this is a common provision, it is worth noting. For a patient access request, this is not a barrier (the request should be fulfilled within 30 days per HIPAA). For third-party authorizations, 90 days is reasonable.

**Revocation**: The form properly notes that revocation must be in writing, which is standard. The language about revocation not applying to already-released information or insurance company rights is legally accurate.

**No notarization or witness required**: Unlike form-1 (which includes a witness signature line), form-2 does not require a witness. It allows a legal representative to sign with documentation of relationship.

**Sensitive information handling**: The note that "a Release of Information Department team member will be in touch to ensure your request is filled out in accordance with Federal & NYS regulations" when sensitive categories are selected adds a manual verification step that could delay fulfillment but is consistent with New York Article 27-F (HIV) and 42 CFR Part 2 requirements.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **$0.75/page fee applied without distinguishing patient access from third-party release**: The form states this fee universally. For patient access requests under HIPAA's Right of Access, this flat per-page rate likely exceeds the allowable cost-based fee. HHS OCR has specifically called out flat per-page charges as potentially non-compliant for patient access requests.

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release**: A patient requesting their own records uses the same form and same process as someone authorizing release to a third party. The form's "Release Information To" framing implies third-party disclosure. It is unclear whether different fee schedules, timelines, or processes apply when the patient is the requester.
- **Purpose field is open-ended**: The form lists example purposes ("Continuity of Care, Personal Use, Legal, etc.") but HIPAA does not require patients to state a purpose for their own access requests. A patient might feel they need to justify their request.

### ❌ ERRORS

- **Typo in footer**: Both page footers read "Authorization to **Dislcose** Protected Health Information" — "Disclose" is misspelled as "Dislcose." This appears on both page 1 and page 2 footers.
- **Bell character artifacts**: The extracted text contains `\u0007` (BEL) control characters before several checkbox labels (e.g., before "Primary Care" and "Specialist" under facility selection, and before email/fax delivery options). These likely render as invisible in the PDF viewer but indicate minor encoding issues in the form's construction.

### ✨ BRIGHT SPOTS

- **65 fillable form fields**: This is an unusually high number indicating thorough interactive field coverage. Patients can complete the entire form digitally without printing.
- **MyChart portal alternative**: The sidebar callout to MyChart offers patients a fully digital pathway that may bypass the paper form entirely.
- **Granular record-type checkboxes**: Thirteen specific record categories plus "Other" give patients meaningful control over what is released, rather than forcing an all-or-nothing choice.
- **Multi-facility coverage**: A single form serving all four AMHS hospitals reduces confusion for patients who have received care across the system.
