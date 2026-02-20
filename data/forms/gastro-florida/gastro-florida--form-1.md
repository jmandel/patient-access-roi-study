# Evaluation: Gastro Florida — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

**form-1.pdf** is a **4-page new patient registration packet** — not a Release of Information (ROI) or patient access request form. It bundles four distinct purposes into one document:

1. **Patient Registration Form** (page 1) — demographics, insurance, emergency contacts
2. **Financial Policy** (page 2) — payment terms, missed appointment fees, collections language
3. **HIPAA Consent** (page 3) — privacy acknowledgment, communication preferences, restriction requests
4. **Patient Consent** (page 4) — consent for treatment, assignment of insurance benefits, authorization to release information, communication/portal authorization

The only ROI-adjacent content is a brief clause on page 4 titled "Authorization to Release Information," but it is narrowly scoped to provider-to-provider and provider-to-payor disclosures — not patient-initiated records requests (detailed below).

**Relationship to other documents:** Gastro Florida's site also hosts a 1-page HIPAA Notice of Privacy Practices (form-2.pdf, effective 2020) and a 7-page updated NPP (form-3.pdf, effective 2026). Neither is an ROI form. The notes document confirms that **no downloadable patient-initiated ROI form exists**. Instead, medical records requests are routed to a third-party portal operated by Sharecare/HDS (`myplatform.hds.sharecare.com`). The website's dedicated "Medical Records" page (`gastrofl.com/medical-records/`) is completely empty — no instructions, links, or forms.

## 2. FINDABILITY

The document was located on the **Patient Forms page** (`gastrofl.com/patient-forms/`) under "New Patient Paperwork – English," linked directly to `gastrofl.com/wp-content/uploads/2023/02/NEW-PT-PAPERWORK-UPDATED-2.2.23.pdf`. For its purpose as intake paperwork, it is reasonably findable.

However, as an ROI-relevant document, findability is poor:
- A patient searching for how to request their own records would find **no guidance on the website**. The "Medical Records" page is empty. The patient forms page links to the Sharecare portal for "Medical Records Request," but there is no explanatory text about what that portal does or how to use it.
- Multiple targeted searches (`site:gastrofl.com authorization release medical records`, etc.) yielded no standalone ROI form.
- The filename `NEW-PT-PAPERWORK-UPDATED-2.2.23.pdf` gives no hint of records-access content.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (10,972 characters across 4 pages). Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite being a form with dozens of blanks (name, address, insurance, signatures, etc.), none are interactive PDF form fields. A patient must print and handwrite.
- **File size**: 688 KB for 4 pages — moderately large, inflated by 24 embedded images and 25 fonts.
- **Digital design**: This is a digitally-created document (not a scan), but it was designed for print, not digital completion. The lack of any fillable fields in a form with extensive data-entry requirements is a significant gap.
- **Format**: Standard PDF with text layer; no accessibility tags noted.

## 4. CONTENT DESIGN

**Length**: 4 pages covering four distinct functional areas. The page count is reasonable for the scope, though bundling this many purposes into one document increases cognitive load for patients.

**Clarity**: The language varies by section. The registration form (page 1) is straightforward field labels. The financial policy (page 2) uses dense contractual language: *"Should the account be referred to an outside agency or an attorney for collections, the undersigned agrees to pay reasonable collection and attorney fees for collection expenses."* The HIPAA consent (page 3) is moderately readable with bullet points. The patient consent (page 4) mixes plain descriptions with legalistic phrasing.

**Organization**: Sections are clearly titled (all-caps headers), but the document packs multiple unrelated agreements together — financial responsibility, treatment consent, privacy acknowledgment, records release, communication preferences, and survey/review consent — requiring a single signature per page covering all provisions. There is no table of contents or section numbering.

**Layout**: Each page uses a separate functional layout. The registration form has clear field labels with lines. The financial policy is dense paragraph text with limited whitespace. The HIPAA consent uses bullet points effectively. The patient consent page bundles six distinct authorizations under a single signature block.

## 5. PATIENT-CENTEREDNESS

This document **does not serve a patient requesting their own health records**. The "Authorization to Release Information" on page 4 reads:

> *"I authorize the release of medical records and related information from Gastro Florida to authorized representatives of my third party payor or provider related to my care. I authorize review of records for any necessary agency audit and the release of the physician plan of care and discharge summary from my medical record upon my transfer to or from another health care facility."*

This authorizes outbound disclosure **to payors and other providers** for care/billing purposes. It does not:
- Enable the patient to request copies of their own records
- Offer scope options (record types, date ranges)
- Mention electronic delivery or format choices
- Reference HIPAA's Right of Access (45 CFR § 164.524)
- Mention EHI export or patient access rights

The HIPAA consent page (page 3) includes a "Restrictions" section where patients can request limits on disclosures and designate people with whom PHI may be discussed — but this is about restricting sharing, not requesting records.

The companion NPP documents (form-2 and form-3) do mention the right to obtain copies of medical records, but the actual mechanism — the Sharecare/HDS portal — is only reachable via a link on the patient forms page, with no explanatory text. The portal itself requires identity verification via driver's license and involves approximately 31 steps.

## 6. COMPLIANCE

**Consent bundling**: The patient consent page (page 4) bundles six distinct authorizations under a single signature:
1. Consent for treatment
2. Assignment of insurance benefits
3. Authorization to release information to payors/providers
4. Communication consent (email, phone, appointment reminders, marketing, clinical research)
5. Patient portal enrollment
6. Authorization to use survey/review comments in promotional material

A patient cannot consent to treatment without simultaneously authorizing use of their review comments in promotional material or being enrolled in the patient portal. The text states: *"I authorize Gastro Florida to include my patient survey or online review comments on its website or promotional material (note: your last name will not be used)."*

**No patient access pathway documented**: While HIPAA requires providers to have a process for patient access requests, this form packet provides no information about how to exercise that right. The separate NPPs describe the right abstractly but do not specify a concrete process.

**Collections language**: The financial policy includes aggressive collections terms and a $50 missed appointment fee.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Broad consent bundling on page 4**: Treatment consent is bundled with authorization to use patient survey/review comments in promotional materials, portal enrollment, and marketing communications — all under a single signature. A patient cannot refuse promotional use of their comments without refusing treatment consent, as the form states: *"Gastro Florida has the right to refuse to treat you if you refuse to sign this consent."*

- **No patient access form exists**: Gastro Florida provides no downloadable form, instructions, or clear pathway for patients to request their own medical records. The only mechanism is a third-party portal (Sharecare/HDS) linked without explanation from the patient forms page. The dedicated "Medical Records" page at `gastrofl.com/medical-records/` is completely empty.

### ⚠️ AMBIGUITIES

- **"Authorization to Release Information" is misleadingly titled**: The section name suggests it enables patient-directed records release, but the text only authorizes release to payors and providers. A patient reading this title might believe they are authorizing (or have a form for) personal records access.

- **NPP names different HIPAA Compliance Officers**: form-2.pdf (2020) lists "Kory Thomas" while form-3.pdf (2026) lists "Josh Frazier" as Privacy Officer. It is unclear which is current or whether both should be contacted.

### ❌ ERRORS

- **form-3.pdf contains a template placeholder**: The updated 2026 NPP reads *"ClientName respects your privacy..."* — using a vendor template variable instead of "Gastro Florida." This suggests the document was published from a template without proper customization.

- **Empty Medical Records page**: `gastrofl.com/medical-records/` exists as a navigation item but contains only a heading with no content — a broken page that misleads patients looking for records access information.

### ✨ BRIGHT SPOTS

- **Preferred name field**: The registration form includes a "Preferred First Name" field alongside the legal name — a small but meaningful patient-centered detail.

- **Granular communication preferences**: The HIPAA consent page offers specific opt-in/opt-out choices for messages at home, cell, and work numbers, and allows patients to designate specific individuals for PHI discussion by name and relationship.
