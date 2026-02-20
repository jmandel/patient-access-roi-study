# UCSF Medical Center — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **"Authorization for Release of Health Information"** (form number 756-020Zi, Rev. 04/22), a 2-page PDF (226,907 bytes) served from `https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/pdf/roi-authorization.pdf`. It is the **currently canonical English ROI form** linked directly from the UCSF Health Medical Records page.

Three forms were found for this organization:
- **form-1.pdf** (162,793 bytes): An older copy of the same English authorization form, served from a different URL with a legacy filename (`health-information-release-01_756-020zirev0421_en.pdf`). Identical extracted text to form-2 (both say Rev. 04/22), but smaller file size and slightly different field/font counts (41 fillable fields vs. 39; 15 fonts vs. 14). The older version includes a footer note "Made accessible 12/18" that is absent from form-2.
- **form-2.pdf** (this document): The current, canonical English version.
- **form-3.pdf** (133,557 bytes): A **Spanish-language translation** ("Autorización de Divulgación de Información Médica"), Rev. 05/22, with the same structure and legal citations.

This is a **general-purpose release/disclosure authorization**, not a patient-access-specific form. It covers release *to* any named person or facility, not specifically a patient requesting their own records under HIPAA's Right of Access (45 CFR § 164.524).

## 2. FINDABILITY

**Easy to find.** Per the retrieval notes, the very first web search (`UCSF Medical Center authorization release health information medical records form PDF`) surfaced this form immediately. The UCSF Health website has a dedicated Medical Records page (`https://www.ucsfhealth.org/medical-records`) that links directly to both the English and Spanish versions. No login, no JavaScript gate, no bot blocking.

The URL path (`/pdf/roi-authorization.pdf`) is clean and descriptive. The Medical Records page also describes the request process, mentions MyChart as an alternative, and discloses fees ($0.25/page paper, $25 electronic).

**Minor issue:** Two different English URLs serve substantively identical forms (form-1 and form-2), which could confuse a patient who finds the older link via search.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (4,311 characters), enabling screen readers, search, and copy/paste.
- **Fillable fields**: 39 interactive form fields detected. The form is designed for digital completion — patients can type into fields and check boxes without printing. However, `fillable_field_names` is an empty array, meaning fields lack programmatic names, which degrades accessibility for screen readers.
- **File format**: 226,907 bytes for 2 pages is moderate. Not an image-only scan; uses 14 fonts with no embedded images. This is a digitally authored document, not a scanned paper form.
- **Digital-first design**: The form was clearly designed digitally. Checkboxes, structured fields, and clean text extraction all confirm this. The absence of a "Made accessible" footer note (present in form-1 as "Made accessible 12/18") is curious — it may suggest a re-export that dropped the accessibility statement, or the newer version simply omits it.

**OCR artifacts**: The UCSF Health logo extracts as "OCsFHealth" — a minor text-layer rendering artifact that wouldn't affect visual appearance but degrades text search.

## 4. CONTENT DESIGN

**Length**: 2 pages — appropriately concise for the scope.

**Page 1 — the authorization form itself** — is densely but logically organized:
1. Header fields (date, patient name, birthdate, ID verification)
2. "I authorize" source → recipient disclosure structure
3. Purpose checkboxes (continuity of care, billing, patient request, other)
4. Record type checkboxes with helpful parenthetical examples (e.g., "Emergency Room Visit (e.g. ED provider notes, radiology reports, lab and diagnostic, consults and procedure notes)")
5. Delivery method selection (Mail, Pick-up, Online Portal)
6. Sensitive information opt-in section with legal citations
7. Expiration clause
8. Signature block with format preference (Paper or CD)

**Page 2 — informational notices**:
- Confidentiality warning about downstream re-disclosure
- Return addresses for San Francisco and Oakland patients
- Radiology-specific submission instructions (email + fax + phone)
- "Your Rights" section

**Clarity**: The language is mostly plain and functional. Instructions are direct ("Please specify the health information you authorize to be released. Please check all that apply."). Legal citations for sensitive categories are included inline, which is good for transparency but adds density.

**Layout note**: The extracted text contains stray "0" characters at multiple points (appearing between sections), which likely represent decorative elements or form field artifacts in the PDF that extract as zeros.

**Typo**: "specifcally" appears in the sensitive information section — "The following information will not be released unless you specifcally authorize it" — a minor but noticeable spelling error.

## 5. PATIENT-CENTEREDNESS

**Mixed.** The form is designed as a **general release authorization**, not as a patient-access request form. A patient requesting their own records would use the same form as an attorney requesting records for litigation or a provider requesting records for continuity of care. The purpose checkbox "At the request of the patient/patient representative" is the closest the form comes to acknowledging patient access specifically.

**Scope options are good.** Patients can specify:
- Date ranges ("For dates of service:")
- Record types (ER visit, entire hospital record, clinic visit, billing, radiology images, dental, reproductive health, or other)
- Delivery method (mail, pick-up, or online portal)
- Format (paper or CD)

**Sensitive records handled well.** The form separately gates release of substance abuse (42 C.F.R. §§2.34/2.35), mental health (Welfare & Institutions Code §§5328 et seq.), HIV/AIDS test results (Health & Safety Code §120980(g)), and genetic testing (Health & Safety Code §124980(j)) records — each requiring affirmative opt-in. This respects California-specific protections.

**Rights disclosure is present.** Page 2's "Your Rights" section states the authorization is voluntary, lists exceptions, explains revocation rights, and notes the patient's entitlement to a copy of the signed authorization.

**What's missing:**
- No mention of HIPAA's Right of Access (45 CFR § 164.524) or the patient's specific right to obtain their own records.
- No mention of timelines (HIPAA requires response within 30 days).
- No mention of electronic health information (EHI) export or bulk data options.
- Format options limited to "Paper" or "CD" — no option for electronic file delivery (despite "Online Portal" appearing as a delivery method, the format checkboxes don't include a digital file format).
- The bidirectional exchange checkbox ("Check this box to authorize exchange between the persons/organizations listed above") could confuse a patient seeking one-directional access to their own records.

## 6. COMPLIANCE

**Fee disclosure**: The form itself does not mention fees, but the retrieval notes indicate the Medical Records webpage discloses $0.25/page for paper and $25 for electronic copies. The $0.25/page fee is within California's limit, and the $25 flat electronic fee is within HIPAA's cost-based reasonable fee allowance.

**Expiration**: "If no date is indicated, the Authorization will expire 12 months after the date of my signing this form." This is a reasonable default — not overly short.

**Submission channels**: The form lists physical mail to two addresses (San Francisco and Oakland) and, for radiology, email and fax. There is no mention of electronic/online submission for the authorization itself, meaning a patient likely must print, sign, and mail/deliver the form.

**No notarization or in-person requirements**: The form does not require notarization, witnesses, or in-person submission — positive.

**ID verification fields**: The header includes "ID VERIFICATION (TYPE)" and "ID VERIFIED BY" — these appear to be staff-completed fields for in-person submissions, not requirements imposed on the patient.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party release**: The form does not distinguish between a patient requesting their own records and a third party requesting records about a patient. A patient must fill in both the "I authorize [source]" and "to release health information to [recipient]" fields, effectively authorizing release *to themselves* — an awkward framing for a right-of-access request.
- **"Online Portal (Medical Records Only)"**: This delivery method option is unclear. Does it mean records will be uploaded to MyChart? Is this available to all patients? The parenthetical "(Medical Records Only)" is ambiguous — does it mean only medical records (not billing), or only through the medical records department?
- **Format options vs. delivery method mismatch**: The delivery method includes "Online Portal" but the format options are only "Paper" and "CD." If a patient selects online portal delivery, what format do they receive?

### ❌ ERRORS

- **Typo**: "specifcally" (missing 'i') in "The following information will not be released unless you specifcally authorize it."
- **Logo OCR artifact**: The UCSF Health logo extracts as "OCsFHealth" in the text layer — a text extraction defect.
- **Stray characters**: Multiple "0" characters appear in the extracted text between sections, likely from form field artifacts or decorative elements that render incorrectly in text extraction.
- **Potential citation error**: The form cites "Health and Safety Code §124980(j)" for genetic testing information. The correct California statute for genetic testing privacy is Health and Safety Code §124980(**i**), not (j). This may be a typographical error in the legal citation.

### ✨ BRIGHT SPOTS

- **Spanish-language version available**: UCSF provides a parallel Spanish-language form (form-3.pdf, Rev. 05/22) linked from the same Medical Records page — an important accessibility measure for the San Francisco patient population.
- **Sensitive records opt-in with legal citations**: The form's separate opt-in checkboxes for substance abuse, mental health, HIV/AIDS, and genetic testing records — each with the corresponding California statute cited — is a model of transparency. Patients can see exactly which law protects each category.
- **Granular record type selection with examples**: The parenthetical descriptions for each record type (e.g., "Entire Hospital Record (e.g. History and physical, consult, operative report, discharge summary, lab, radiology reports, nursing notes, progress notes)") help patients understand what they're requesting.
- **Easy findability**: The form is directly linked from a clean, informative Medical Records webpage with no barriers to access.
- **Fillable PDF**: 39 interactive fields allow digital completion, saving patients from printing and handwriting.

### 🚩 RED FLAGS

- **No electronic submission path for the authorization**: Despite offering a fillable PDF, there is no way to submit the completed form electronically (except for radiology requests, which accept email/fax). Patients must print and physically deliver or mail the signed form, creating a meaningful barrier — especially for patients who found and completed the form digitally.
