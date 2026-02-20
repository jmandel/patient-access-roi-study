# MUSC Health University Medical Center — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-2 is titled **"AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION"** — the same title as the primary form (form-1). It is Version 11, with a version date of 11/17 (November 2017) and a form origination date of 1/2000. It is a single-page form hosted at a URL under the **insurance** subdirectory of the MUSC website (`/health/insurance/f/authorization-to-disclose-phi.ashx`), rather than the medical records section where the main form (form-1) lives.

This appears to be an **older revision** of the same authorization form. For comparison, form-1 (the current primary form) was revised 10/2023, is 2 pages, and includes several features absent from form-2: a dedicated Substance Use Disorder (SUD) records section, an encrypted email delivery option, dental-specific checkboxes integrated into the main form, and a second page listing contact information for 9 MUSC Health facilities. Form-2's contact footer references only a single address at "169 Ashley Avenue / MSC 349 / Suite 200" — an address that has since been replaced in form-1 by "3 South Park Circle / Bldg. 3 / Suite 103."

The internal form number `all_all_consent_authorelease` and OTE number `700078` are shared between form-2 and form-1, confirming form-2 is a prior version of the same document, not a separate form. The organization also has form-3 (a dental-specific variant), form-4 (MyChart instructions), and form-5 (Spanish translation of form-1).

## 2. FINDABILITY

Form-2 was **not linked from the main medical records page**. It was discovered via web search and is hosted under the insurance section of the MUSC website. According to the retrieval notes, the primary medical records page links only to form-1 (English) and form-5 (Spanish). A patient navigating the website through the standard path (Patients & Visitors → Medical Records) would never encounter form-2.

The URL (`/health/insurance/f/authorization-to-disclose-phi.ashx?la=en`) uses the `.ashx` extension (an ASP.NET handler), which is less descriptive than the clean PDF URL used for form-1. The filename `authorization-to-disclose-phi` is reasonably descriptive, but the insurance subdirectory placement is misleading — this is a general ROI form, not an insurance-specific document.

Because this form is an older version that hasn't been removed from the server, a patient performing a web search could find and use this outdated form instead of the current version, potentially leading to confusion or delays.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The form has extractable text (3,738 characters), is not an image-only scan.
- **Fillable fields**: **Zero** interactive form fields, despite the metadata showing `fillable_field_count: 0`. This means the PDF must be printed, hand-filled, and submitted physically — or a patient must use a PDF annotation tool. The newer form-1 also has 0 fillable fields, so this is a systemic issue, not specific to this version.
- **File size**: 391,700 bytes for a single-page form is disproportionately large. For reference, form-1 is 158,878 bytes for 2 pages. The 2 embedded images (likely a logo/header) account for the bloat.
- **Font count**: 11 fonts for a 1-page form suggests some design complexity.
- **Digital-first design**: This is clearly a form designed for paper. The layout uses dense tabular formatting with labels like "Where do you want the information sent?" in parenthetical helper text — suitable for physical completion but not digitally optimized.

## 4. CONTENT DESIGN

**Length**: 1 page. The form is compact but cramped, squeezing all fields into a single page. By comparison, form-1 spread similar content across 2 pages, gaining readability.

**Clarity**: The form uses a mix of plain language and legal text. Field labels include helpful parenthetical guidance — e.g., `"(Where do you want the information sent? Who may have the information?)"`, `"(Why is it needed?)"`, `"(When were you seen?)"` — which is genuinely useful. However, the legal disclosure paragraphs at the bottom are dense and single-spaced with no visual separation, making them difficult to parse.

**Organization**: The form follows a logical flow: patient identity → recipient → delivery method → purpose → date range → record types → legal disclosures → signature. This is a reasonable ordering, though the "Abstract Information" option is defined inline with a long list of included record types ("History & Physical, consults, lab & radiology reports, discharge summary, operative/procedure reports, Emergency Department reports, and Occupational /Physical Therapy reports"), which is helpful but adds density.

**Record type options**: Offers "Entire Medical Record" vs. "Abstract Information" plus specific types: Radiology Images/DVD, Immunization records, Medication list, Physician progress/visit notes. Notably, no dental records section appears in this version (unlike form-1, which integrated dental options).

**Delivery options**: Mail, DVD/CD, Fax, and MyChart. Fax is noted as being for "healthcare providers / organizations as permitted." No email option is offered — the encrypted email option was added in the 2023 revision (form-1).

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general-purpose release form. "Patient Request" appears as one of the purpose-of-release checkboxes alongside Continuing Care, Legal, Military, Insurance, Disability, School, and Other. The form does not distinguish between a patient requesting their own records (Right of Access under HIPAA) and a third-party release, which can create confusion about applicable fees and timelines.

**Scope options**: The form provides adequate scope controls — specific treatment date ranges or "All Treatment Dates," and multiple record-type checkboxes. The "Other" field allows freeform specification.

**Format options**: Limited to Mail, DVD/CD, Fax, and MyChart. No email delivery option exists on this version, which is a meaningful gap for patients seeking convenient electronic access. The MyChart option is a positive inclusion.

**Rights language**: The form does reference patient rights: `"I understand I may review and / or copy the information to be disclosed, as provided in 45 CFR §164.524."` It also states `"I can refuse to sign this authorization. I do not need to sign this form to receive treatment."` These are appropriate HIPAA-required disclosures.

**Fee disclosure**: The form states: `"I understand that fees for copies of medical records/Images and postage fees may be charged as provided by S.C. Law."` This references South Carolina state law rather than HIPAA's fee limitations for patient access requests, which is a meaningful distinction. Under HIPAA Right of Access, fees are limited to reasonable, cost-based fees — S.C. law may allow higher charges, and the form doesn't clarify which fee schedule applies to patient requests.

**Sensitive information**: The form includes a blanket acknowledgment: `"I understand this information may include reference to psychiatric / psychological care, sexual assault, drug abuse, results of tests for all infectious diseases including HIV / AIDS and / or alcohol abuse."` Unlike form-1, there is no separate opt-in/opt-out for Substance Use Disorder records protected under 42 C.F.R. Part 2 — the disclosure is all-or-nothing.

## 6. COMPLIANCE

**Identification requirement**: `"A copy of my identification will be made and attached to this authorization."` This is a verification step, not inherently unreasonable, but the phrasing implies in-person presentation ("will be made"), which could be read as requiring an in-person visit.

**Witness signature**: The form includes a "Witness Signature" line. While not labeled as mandatory, the form's instruction that it "must be COMPLETED in its entirety in order to be considered valid" could be read to require a witness — a potential barrier if the patient is completing the form at home.

**Processing time**: `"HIPAA LAW ALLOWS 30 DAYS from receipt for processing."` This is accurate per 45 CFR § 164.524(b)(2), though phrased as a maximum entitlement rather than a target.

**Authorization expiration**: The authorization expires one year from the date of signature, which is reasonable.

**Revocation**: The form explains how to revoke in writing and notes that revocation doesn't apply to information already released. This is standard and correct.

**SSN collection**: The form asks for "Last 4 digits of SSN" — while partial, this is more information than strictly necessary for identity verification under HIPAA, though it is common practice.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness requirement ambiguity**: The form states it `"must be COMPLETED in its entirety in order to be considered valid"` and includes a "Witness Signature" line. If interpreted literally, patients completing the form remotely would need to find a witness, creating a barrier not required by HIPAA for patient access requests.
- **Fee reference to state law only**: The statement `"fees for copies of medical records/Images and postage fees may be charged as provided by S.C. Law"` omits any mention of HIPAA's more restrictive fee limits for patient access requests (45 CFR § 164.524(c)(4)). South Carolina law may permit higher fees than HIPAA allows for Right of Access requests.

### ⚠️ AMBIGUITIES

- **In-person implication for ID**: The phrasing `"A copy of my identification will be made and attached"` implies the patient must present ID in person for copying, but doesn't address remote submission workflows (e.g., attaching a scanned ID to a mailed or faxed form).
- **Patient access vs. third-party release conflation**: The same form serves both patient access requests and third-party disclosures, with no differentiation in fee structure, processing requirements, or legal basis. A patient checking "Patient Request" under Purpose of Release should be subject to HIPAA Right of Access rules, but the form doesn't acknowledge this distinction.
- **Sensitive records blanket inclusion**: Unlike the newer form-1, which offers granular SUD opt-in under 42 C.F.R. Part 2, this form uses a blanket statement that the release "may include" sensitive information without giving the patient the option to exclude specific categories.

### ❌ ERRORS

- **Outdated contact information**: The mailing address listed is "169 Ashley Avenue / MSC 349 / Suite 200" — the current form-1 lists "3 South Park Circle / Bldg. 3 / Suite 103" as the address for Health Information Services. A patient using this form may send it to a wrong or outdated address.
- **Stale URL availability**: This form remains publicly accessible on the MUSC website despite being superseded by a 2023 revision (form-1). No indication on the document itself that it is outdated or that a newer version exists.

### ✨ BRIGHT SPOTS

- **Inline field guidance**: The parenthetical helper text throughout — `"(Where do you want the information sent?)"`, `"(Why is it needed?)"`, `"(When were you seen?)"`, `"(What do you want sent or released?)"` — is genuinely patient-friendly and clearer than the typical bare field labels found on many ROI forms.
- **MyChart delivery option**: Even in this 2017-era form, MyChart was offered as a delivery method, showing early adoption of patient portal integration for records delivery.
