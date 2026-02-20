# Garfield Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "AUTHORIZATION FOR USE OR DISCLOSURE OF HEALTH INFORMATION" form specific to Garfield Medical Center (525 N Garfield Avenue, Monterey Park, CA 91754). It is a general-purpose ROI authorization — not specifically a patient-access request form — covering both release to third parties and patient personal use. The form is marked "Revised 9/21" (September 2021).

A second form (form-2.pdf) was found at a different URL path (`/gmc/docs/` vs. `/gmc/documents/`). The two forms are nearly identical in content and structure (both 2 pages, same "Revised 9/21" date, same text), differing only in minor layout/spacing and file size (271 KB vs. 93 KB). They appear to be two versions of the same form hosted at different paths — likely a maintenance oversight rather than intentionally distinct documents. Garfield Medical Center is part of AHMC Healthcare Inc., a for-profit regional system.

## 2. FINDABILITY

According to retrieval notes, the form was found relatively easily. A web search for `"Garfield Medical Center Monterey Park medical records release form filetype:pdf"` returned a direct link. A site-scoped search (`site:ahmchealth.com authorization release medical records`) also located both form versions. No login or patient portal access was required, and no bot-blocking was encountered.

The source URL (`https://www.ahmchealth.com/gmc/documents/GMC-AUTHORIZATION-FOR-USE-OR-DISCLOSURE-OF-PHI.pdf`) is descriptive and clearly indicates the document's purpose. However, the existence of two nearly identical forms at different URL paths (`/documents/` and `/docs/`) could create confusion about which is current — both carry the same revision date.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. The document is digitally created, not a scanned image (`is_image_only_scan: false`). Full text is extractable (3,560 characters).

**Fillable fields:** Zero (`fillable_field_count: 0`). Despite being a digitally-created PDF, it has no interactive form fields — patients must print and fill by hand. This is a significant missed opportunity given the document was clearly authored in a word processor or design tool, not scanned from paper.

**File format:** PDF 1.4, 271 KB for 2 pages. The file size is larger than expected for a text-based 2-page document (form-2 with equivalent content is only 93 KB), suggesting embedded images (logo, etc.; `embedded_image_count: 4`) that could have been optimized. Seven fonts are embedded.

**Digital-first design:** Mixed. The document was clearly created digitally (not a scan), with structured sections and checkbox indicators. However, the lack of any fillable fields means it functions as a print-only form despite its digital origin.

## 4. CONTENT DESIGN

**Length:** 2 pages — reasonable for an authorization form of this scope.

**Structure and organization:** The form follows a logical flow: Patient Information → Release To → Purpose → Information to Be Released → Delivery Instructions → Notice of Rights → Term → Signature. Section headers are clearly labeled and visually distinct.

**Clarity:** Language is generally understandable, though it mixes plain instructions with legal references. The opening line — "Failure to provide all information may invalidate this authorization" — is an immediate warning tone that could be off-putting. The Notice of Rights section (items 1-7) is written in reasonably clear language.

**Record type granularity:** The form offers good specificity in record types: History and Physical, Discharge Summary, Emergency Record, Operative Report, Consultation Report, Laboratory Report, EKG/ECHO, Pathology Report, CD, Radiology Films/CD, Radiology Report, Pertinent Records, ALL RECORDS, and an "Other" option with a specify field. Date(s) of Treatment is also provided.

**Special categories:** The form correctly identifies that "State/Federal Laws require specific authorization to release" Mental Health, HIV Test Results, and Alcohol/Drug Abuse records, and notes that "A separate authorization is required for psychotherapy notes."

**Fee disclosure:** A sidebar states: "Based on California Health and Safety Code Section 123100-123149.5 and Evidence Code Section 1560-1567 fees may be charged for medical record copies." This discloses the possibility of fees and cites the legal basis, but provides no specific amounts.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a general authorization, not specifically designed for patient self-access under HIPAA's Right of Access. However, it does include "Personal Use" as a purpose checkbox and lists "Inspect or Review Medical Record" as an authorization option alongside "Copies of Medical Record," which shows some awareness of patient access rights.

**Format options:** The top of the form offers checkboxes for "Paper," "Electronic," and "Other" under the authorization type, and the Delivery Instructions section includes "E-Mail" with an email address field. This is a positive feature — many forms lack electronic delivery options entirely.

**Delivery options:** Five delivery options are provided: mail, call for pick-up, designated person pick-up, hand-carried, email, and "Other." This is reasonably comprehensive.

**Right of Access language:** The form does not explicitly reference HIPAA § 164.524 or the patient's right of access. The Notice of Rights mentions HIPAA only in the context of re-disclosure risk (item 6: "may no longer be protected by federal confidentiality law (HIPAA)"). There is no explanation of patient rights to access their own records, timelines for fulfillment, or fee limits.

**EHI Export awareness:** No mention of electronic health information export, bulk data, or USCDI.

## 6. COMPLIANCE

**Auto-expiration:** The TERM section states: "Without written revocation, this authorization will automatically expire upon satisfaction of the need for disclosure, but in any event will expire 180 days from the date hereof, unless otherwise specified." A 180-day default expiration is relatively standard and not unreasonable, though the "unless otherwise specified" qualifier allows the patient to set a different term.

**Revocation process:** Revocation must be "in writing, signed by me or on my behalf and mailed to Garfield Medical Center's Privacy Officer." Requiring a mailed written revocation is a modest barrier but within standard practice.

**Treatment conditionality:** The form correctly states (item 1): "If I refuse to sign this authorization my refusal will not affect my ability to obtain treatment."

**CD liability waiver:** Item 7 in the Notice of Rights states: "I hereby release Garfield Medical Center and its agents and employees from all liability that may arise from the release of the Compact Disc (CD)." This liability release is bundled into the authorization form itself, which could be seen as a form of consent bundling — the patient must agree to waive liability for CD release as part of signing the general authorization.

**Fee specificity:** Fees are referenced via California statute but no amounts are disclosed. The patient has no way to estimate cost before submitting.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **CD liability waiver bundled into authorization:** Item 7 requires patients to "release Garfield Medical Center and its agents and employees from all liability that may arise from the release of the Compact Disc (CD)" as part of signing the authorization. This bundles a liability waiver into the ROI form — there is no way to authorize records release without also waiving CD-related liability claims.

### ⚠️ AMBIGUITIES

- **Duplicate forms at different URLs:** Two nearly identical forms exist at `/gmc/documents/` and `/gmc/docs/`, both marked "Revised 9/21." A patient discovering both would have no way to know which is current or authoritative.
- **"Failure to provide all information may invalidate this authorization"** — This opening warning is vague about what "all information" means. Which fields are truly required? Could a missing middle initial invalidate the form?
- **Fee disclosure without amounts:** The form states fees "may be charged" per California statute but gives no indication of actual costs, leaving patients unable to anticipate expenses.

### ✨ BRIGHT SPOTS

- **Electronic delivery option with email field:** The form explicitly offers email as a delivery method with a dedicated field for the email address — a meaningful accommodation that many ROI forms lack entirely.
- **"Inspect or Review" option:** The top of the form offers "Inspect or Review Medical Record" as a distinct authorization type alongside "Copies," acknowledging the patient's HIPAA right to inspect records in addition to obtaining copies.
- **Granular record type selection:** The form lists 12+ specific record types plus "ALL RECORDS" and an open "Other" field, giving patients meaningful control over what is released.
- **Clear special-category handling:** The form properly identifies Mental Health, HIV, and Alcohol/Drug Abuse as requiring specific authorization and notes the separate requirement for psychotherapy notes.
