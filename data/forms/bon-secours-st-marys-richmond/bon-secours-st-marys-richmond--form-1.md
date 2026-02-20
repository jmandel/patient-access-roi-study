# Bon Secours St. Mary's Hospital (Richmond, VA) — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a one-page **Authorization to Disclose Health Information** form, identified by form ID **BSRMR50** (revision "BSR-MR-50 (1/21)"). It is a system-wide form used across all Bon Secours Richmond-area facilities — not specific to St. Mary's Hospital alone. The source URL (`roi-form-2017.ashx`) suggests it originated in 2017, though the form footer shows a January 2021 revision date.

A companion Spanish-language version exists as form-2.pdf (form ID BSR-MR-50SPN, revision 11/17), which mirrors the same structure and fields. The English form is the primary document evaluated here.

The form is a **general-purpose release/disclosure authorization**, not a patient-access-specific request form. It is framed around authorizing a facility "TO DISCLOSE" information to a named recipient, rather than being designed specifically for patients exercising their HIPAA Right of Access (45 CFR § 164.524).

## 2. FINDABILITY

**Easy to find.** Per the retrieval notes, a simple web search for the hospital name plus authorization/release keywords immediately surfaced the correct page. The form is directly linked from Bon Secours' patient resources page at `https://www.bonsecours.com/patient-resources/request-medical-records`, which is a logical and discoverable location. No login, JavaScript rendering, or bot blocking was encountered. The direct PDF URL (`https://www.bonsecours.com/-/media/bon-secours/files/richmond/roi-form-2017.ashx`) is functional but not descriptively named (the `.ashx` extension and `2017` path segment are somewhat opaque).

The medical records page also mentions alternative access methods: online requests via Ciox/Swellbox and MyChart, giving patients multiple pathways. This is a positive signal for findability.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. Full text is extractable (3,026 characters). Not an image-only scan.
- **Fillable fields:** **Zero** interactive form fields. Despite having a text layer, the PDF is a flat, non-fillable document. All patient information, checkboxes, and signature lines must be completed by hand after printing.
- **File size:** 55,110 bytes (≈54 KB) for a single page — reasonable.
- **Page count:** 1 page.
- **Font count:** 5 fonts embedded.
- **Embedded images:** 0.
- **PDF version:** 1.6.

The form has a clean text layer and appears to be digitally authored (not a scanned paper form), which is good. However, the complete absence of fillable fields is a significant gap — patients must print the form and fill it out by hand. This is a missed opportunity given the form is clearly a digital-origin document that could easily support interactive fields.

## 4. CONTENT DESIGN

**Structure and organization:** The single-page layout is compact and logically ordered:
1. Patient demographics (name, DOB, address, phone)
2. Authorizing facility identification
3. Record type selection (12 checkbox options including "Entire Record," "Abstract of Record," "Operative Report," "MyChart Communication," "X-rays or Imaging Report," "Discharge Summary," "ED Record," "Laboratory Results," "Immunization Record," "Anesthesia Record," plus two "Other" free-text lines)
4. Date of visit
5. Recipient information (name, address, fax)
6. Disclosure format selection (5 options)
7. Purpose of disclosure (7 options)
8. Authorization terms (4 numbered paragraphs of legal text)
9. Signature and date line
10. Department use section

**Clarity:** The top half of the form uses clear, short labels for the fill-in and checkbox sections. The bottom half (paragraphs 1–4 under "Authorization to Release Information") shifts to dense legal language. For example, paragraph 2 contains a 5-line run-on sentence: *"I understand that authorizing the disclosure of this health information is voluntary. I can refuse to sign this authorization. I need not sign this form in order to ensure treatment. I understand that I may inspect or copy the information to be used or disclosed, as provided in CFR 164.524."*

**Length:** Fitting everything on one page is efficient, but the legal text is crowded into the lower portion. The trade-off between brevity and readability is acceptable but not ideal.

**Visual hierarchy:** The title "AUTHORIZATION TO DISCLOSE HEALTH INFORMATION" is prominent. Section labels like "TO DISCLOSE THE FOLLOWING INFORMATION:" and "Disclosure Format" provide structure. However, the lack of visible borders, shading, or section separators makes the form feel somewhat flat. Checkbox items are well-organized in columns.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is fundamentally a **third-party disclosure form**, not a patient access request form. The structure — "I AUTHORIZE [facility] TO DISCLOSE... TO [recipient]" — frames the patient as authorizing a transfer between two other parties. A patient requesting their own records must awkwardly name themselves as both the authorizer and the recipient. There is no dedicated workflow for "I want my own records."

**Scope options:** Good. Patients can select from 12 record type categories plus two "Other" fields, and specify a "Date of Visit" to narrow the scope. The granularity is helpful (e.g., differentiating ED records, lab results, immunization records, and imaging reports).

**Format/delivery options:** Notably good. The form lists 5 disclosure formats:
- US Mail
- Electronic format: CD/DVD
- Radiology Film/CD
- MyChart
- "eDelivery by Ciox (for patient's only) - email address:"

The eDelivery option is specifically marked as "for patient's only" [sic] and requests an email address, suggesting electronic delivery to patients is available. MyChart is also listed as a delivery channel.

**Right of Access language:** Paragraph 2 references **"CFR 164.524"** — the HIPAA Right of Access provision — stating the patient may "inspect or copy the information to be used or disclosed." This is a positive compliance signal, though the citation format ("CFR 164.524" rather than the standard "45 CFR § 164.524") is informal.

**Purpose options:** Seven purpose checkboxes include "Personal," which is the most relevant for patient access requests. Other options (Physician, Insurance, Legal, Disability Determination, Worker's Compensation, Other) serve third-party use cases.

**EHI Export awareness:** No mention of electronic health information export, bulk data, or USCDI standards.

## 6. COMPLIANCE

**Authorization expiration:** Paragraph 3 states: *"Unless otherwise revoked, this authorization will expire 6 months from the date of signature."* A 6-month expiration is standard and reasonable.

**Revocation rights:** Clearly stated — patient may revoke in writing at any time, with standard exceptions for already-disclosed information and insurance contest rights.

**Voluntariness:** Paragraph 2 explicitly states: *"I understand that authorizing the disclosure of this health information is voluntary. I can refuse to sign this authorization. I need not sign this form in order to ensure treatment."* This is compliant with HIPAA requirements.

**Sensitive information:** Paragraph 1 addresses HIV/AIDS, STD, behavioral/mental health, and substance abuse information with a blanket inclusion unless the patient provides "Special Instructions" to exclude them. This is reasonable but somewhat aggressive — some state laws require separate, more specific authorization for these categories.

**Fees:** Paragraph 4 states: *"I understand that copying charges will be applied, according to the hospital policy."* This is vague — no fee schedule is provided, and there is no distinction between patient access requests (which HIPAA limits to reasonable, cost-based fees) and third-party requests. The blanket statement that "copying charges will be applied" to all requests, without acknowledging the fee limitations for patient access under 45 CFR § 164.524(c)(4), is a concern.

**No notarization requirement.** No in-person-only submission requirement stated. Fax submission appears possible (fax number listed in retrieval notes; recipient fax field on form marked "healthcare provider only").

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee language lacks patient-access distinction.** The form states "copying charges will be applied, according to the hospital policy" without distinguishing between patient access requests (subject to HIPAA's reasonable, cost-based fee limits) and third-party disclosure requests. This could lead to patients being charged impermissible fees for accessing their own records.

### ⚠️ AMBIGUITIES

- **"for patient's only" [sic] on eDelivery.** The possessive apostrophe in "patient's only" is grammatically incorrect (should be "patients only"), and the meaning is ambiguous — does it mean eDelivery is only available when the patient is the recipient, or only when the request is for a patient's own records? The intent is likely the former, but the phrasing is unclear.
- **Sensitive information handling.** Paragraph 1 says records will include HIV/AIDS, STD, behavioral health, and substance abuse information "unless indicated below" with a "Special Instructions" line. It's not entirely clear whether the default is inclusion or exclusion, and patients may not realize they need to affirmatively opt out of disclosing sensitive categories.
- **"Date of Visit" vs. date range.** The form provides a single "Date of Visit" field rather than a date range, which may confuse patients who had multiple visits or want records spanning a period.

### ❌ ERRORS

- **Informal legal citation.** The form references "CFR 164.524" rather than the standard citation format "45 CFR § 164.524." While not technically wrong, it omits the title number (45) and section symbol, which could make it harder for patients to look up.
- **URL path suggests outdated content.** The download URL contains `roi-form-2017.ashx`, though the form footer shows "BSR-MR-50 (1/21)" — a January 2021 revision. The mismatched URL could confuse users or suggest the form is outdated.

### ✨ BRIGHT SPOTS

- **Spanish-language version available.** A full Spanish translation (form-2.pdf) is provided alongside the English form, both linked from the same page. This is genuinely helpful for patient access in a diverse community.
- **Multiple delivery format options including eDelivery.** Offering 5 delivery methods — including MyChart and Ciox eDelivery with email — goes beyond what many organizations provide. The explicit inclusion of electronic delivery options for patients is commendable.
- **Alternative access pathways mentioned.** The medical records page references Ciox/Swellbox online requests and MyChart access, giving patients options beyond the PDF form.
- **Single-page efficiency.** Fitting demographics, record selection, delivery options, purpose, and legal terms on one page reduces patient burden compared to multi-page forms.
