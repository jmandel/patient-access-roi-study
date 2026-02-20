# Evaluation: The Baton Rouge Clinic — form-3.pdf (Right of Access Form)

## 1. DOCUMENT IDENTIFICATION

This is a **"Right of Access Form"** — a single-page document specifically designed for patients to designate another person to receive their protected health information under HIPAA's Right of Access provision. It explicitly cites "HIPAA Authority for Right of Access: 45 C.F.R. 164.524."

The Baton Rouge Clinic maintains three distinct medical records forms:
- **form-1.pdf**: "Authorization for Release of Protected Health Information FROM The Baton Rouge Clinic, AMC" — a traditional outbound ROI/authorization form (2 pages).
- **form-2.pdf**: "Authorization for Release of Protected Health Information TO The Baton Rouge Clinic, AMC" — an inbound records transfer form (2 pages).
- **form-3.pdf** (this document): "Right of Access Form" — a patient-directed access/designee form (1 page).

Form-3 is the most patient-access-specific of the three. However, its framing is somewhat unusual: the form's language — "direct my health care and medical service providers and payers to disclose and release my protected health information described below to: Name: ___" — is structured as a designee authorization (granting another person access) rather than as a straightforward patient self-request. There is no explicit field or option for a patient to request records for themselves; the form assumes the patient is naming a third party to receive the records.

## 2. FINDABILITY

Per the retrieval notes, all three forms were found on a well-organized **"Downloadable Forms"** page at `https://batonrougeclinic.com/patient-information/downloadable-forms/`, under a "Medical Records" section. The Right of Access form was **not** surfaced by the initial web search for authorization/release forms — it was only discovered by visiting the downloadable forms page directly. This is a mild findability gap: a patient searching for "right of access" or "request my records" via a search engine may not find this form without navigating the clinic's website.

The source URL (`https://batonrougeclinic.com/wp-content/uploads/2022/01/RightOfAccess01.22.pdf`) includes a reasonably descriptive filename ("RightOfAccess"), though the "01.22" date suffix is cryptic. No login, CAPTCHA, or JavaScript rendering was required to download.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The document has extractable text (1,294 characters), not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). The PDF is a flat, non-interactive document. Patients must print and fill by hand, or use PDF annotation tools — a significant digital accessibility gap for a form that explicitly offers an "electronic record" delivery option.
- **Page count**: 1 page — admirably concise.
- **File size**: 123,342 bytes (~120 KB) for a single-page PDF — reasonable.
- **Fonts**: 2 fonts used, suggesting a clean, simple typographic design.
- **Embedded images**: 1 (likely the clinic logo).
- **Digital-first design**: No. Despite its brevity and text layer, the lack of fillable fields and the presence of blank lines for handwritten entry (e.g., "I, ___, direct my health care...") indicate this was designed as a print-and-fill paper form.

## 4. CONTENT DESIGN

**Length and proportionality**: At 1 page and ~1,300 characters of text, this is one of the most concise ROI-related forms one could encounter. The brevity is appropriate for its scope.

**Clarity**: The language is relatively plain. The opening sentence — "I, ___, direct my health care and medical service providers and payers to disclose and release my protected health information described below to:" — is understandable, though the phrase "providers and payers" may confuse patients who think of the clinic as a single entity.

**Organization**: The form follows a logical sequence:
1. Patient name → designee name
2. Scope of information (complete vs. restricted, with opt-out checkboxes for sensitive categories)
3. Form of disclosure (electronic or hard copy)
4. Duration of authorization
5. Signature and date
6. HIPAA citation

**Sensitive records handling**: The form allows patients to exclude specific categories: "Mental Health Records," "Communicable Disease (Including HIV and AIDS)," and "Alcohol/Drug Abuse Treatment," plus an open "Other" field. This is presented as opt-out from a complete disclosure default (option A), which is a reasonable design.

**Disclosure format options**: The form offers two choices:
- "An electronic record, access electronically or access through an online portal"
- "Hard Copy"

This is a notable positive feature. However, the parenthetical "(unless another format is mutually agreed upon between my provider and designee)" introduces ambiguity about who controls the final format decision.

**Duration options**: The form offers "All past, present and future periods" or a specific "Date or Event." The "all future periods" option is generous but raises compliance questions (see below).

## 5. PATIENT-CENTEREDNESS

**Designee focus vs. self-access**: The form is framed as a patient directing providers to disclose records "to: Name: ___" — i.e., to a named third party. There is no clear pathway for a patient to use this form to request records for themselves. A patient wanting their own records would need to either write their own name in the "Name" field (which is awkward given the form's language) or use form-1 instead (which is a general third-party release authorization, not a Right of Access form). This is a meaningful patient-centeredness gap: the form that cites the Right of Access is not designed for the most common Right of Access use case — a patient requesting their own records.

**Scope options**: Patients can request complete records or exclude specific sensitive categories. There is no date range selector — the duration field controls how long the authorization remains active, not which records are disclosed. This means a patient cannot request records from a specific date range using this form.

**Format options**: The electronic delivery option is a genuine bright spot. Few ROI forms offer this choice explicitly.

**Revocation**: The form notes "You may revoke this authorization at any time by notifying your health care providers in writing." This is clear and appropriately simple.

**No fee disclosure**: The form does not mention any fees for copies or access.

## 6. COMPLIANCE

**HIPAA Right of Access citation**: The form explicitly references "HIPAA Authority for Right of Access: 45 C.F.R. 164.524," which is correct and appropriate.

**"All future periods" authorization**: The option for "All past, present and future periods" means a patient could authorize ongoing, indefinite disclosure to a designee. While HIPAA does not prohibit open-ended authorizations for patient-directed access, this raises practical concerns about whether patients understand they are granting perpetual access.

**No conditioning language**: Unlike form-1 and form-2, this form does not include the standard HIPAA statement that treatment/payment will not be conditioned on signing. This omission is minor for a Right of Access form (which is patient-initiated) but is worth noting.

**Liability waiver absence**: Unlike form-1 and form-2, which include "I hereby release and discharge The Baton Rouge Clinic, AMC of any liability and the undersigned will hold The Baton Rouge Clinic, AMC harmless," this form does not include a hold-harmless clause. This is arguably more patient-friendly.

**Social Security Number**: This form does **not** request a Social Security Number, unlike form-1. This is a positive privacy practice.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Explicit electronic delivery option**: The form offers "An electronic record, access electronically or access through an online portal" — a clear, affirmative offer of electronic access that many ROI forms lack entirely.
- **HIPAA Right of Access citation**: Explicitly citing 45 C.F.R. 164.524 demonstrates awareness of the regulatory framework and signals to patients that this is a rights-based request.
- **Conciseness**: A single page with ~1,300 characters of text. The form does not bury the patient in legalese or unnecessary boilerplate.
- **No SSN required**: Unlike the clinic's own form-1, this form does not collect Social Security Numbers.

### ⚠️ AMBIGUITIES
- **Designee-only framing**: The form directs disclosure "to: Name: ___" with no clear option for self-request. A patient wanting their own records would have to awkwardly name themselves as the recipient, and it's unclear whether the clinic would accept this.
- **Format caveat**: The parenthetical "(unless another format is mutually agreed upon between my provider and designee)" creates uncertainty about whether the patient's format choice will actually be honored.
- **No date-range scoping**: The "effective until" field controls authorization duration, not which records are disclosed. A patient cannot use this form to request records from a specific treatment period.

### 🚩 RED FLAGS
- **No fillable fields on a form offering electronic access**: The form explicitly offers electronic record delivery, yet the form itself has zero fillable fields and must be printed and completed by hand. This internal contradiction undermines the form's digital-access promise — a patient who wants electronic records must start with a paper process.

### ❌ ERRORS
- **Ambiguous filename**: The source URL filename `RightOfAccess01.22.pdf` could be read as "January 2022" or "version 01.22." No version or revision date appears in the form text itself, making it impossible for a patient to confirm they have the current version.
