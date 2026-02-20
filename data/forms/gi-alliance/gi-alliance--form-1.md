# GI Alliance — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization to Use and Disclose Protected Health Information" form. It is a general-purpose HIPAA authorization — not a patient-access-specific form — that covers both patient-initiated requests and third-party releases. The form is branded to GI Alliance as an entity, using the construction "I authorize __________________ d/b/a GI Alliance on behalf of itself and all other practices that are operating as a single HIPAA Affiliated Covered Entity (collectively 'Provider')." This reflects GI Alliance's structure as a large physician practice management organization with many affiliated gastroenterology practices nationwide.

Two other forms were found: form-2.pdf (a "Release Medical Records to Third Party" form from Granite Peaks GI, a GI Alliance affiliate, 2-page image-only scan with garbled OCR) and form-3.pdf (a scanned medical release form from University GI, another affiliate, image-only with no text layer). Form-1 is the canonical, centrally published GI Alliance authorization form and is clearly the primary document a patient would encounter.

## 2. FINDABILITY

The form was relatively easy to locate. A site-specific web search surfaced it directly at `gialliance.com/wp-content/uploads/2024/08/authorization-health-form.pdf`. The URL path is in a WordPress uploads directory, suggesting it is linked from a page on the site rather than being a standalone landing page. The filename `authorization-health-form.pdf` is reasonably descriptive. Notes indicate GI Alliance has a patient forms page at `gialliance.com/patient-forms-and-prep/`, but it is organized by local brand/location, which adds complexity for patients trying to find the right form. No login wall or portal was required. Overall findability is moderate — it's publicly accessible and searchable, but the lack of a dedicated, clearly labeled "Request Your Medical Records" page means patients must navigate a multi-brand organizational structure.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. The form has fully extractable text (2,863 characters), confirming it was created digitally in Microsoft Word rather than scanned. This is a significant advantage over form-2 and form-3, which are image-only scans.

**Fillable fields:** Zero. The metadata reports `fillable_field_count: 0`. All blanks are represented by underscores (e.g., `Patient Name: ____________________________________`). A patient cannot fill this form electronically without printing it or using a PDF annotation tool.

**File format:** 96,670 bytes for a single-page text-based PDF — a reasonable file size. No embedded images. Six fonts are used.

**Digital-first design:** Partially. The document was clearly authored digitally (not scanned), but the flat, non-fillable design means it functions as a print-and-sign document. There is no electronic signature field, no submit button, and no indication that electronic submission is accepted.

## 4. CONTENT DESIGN

**Length:** One page — appropriately concise for an authorization form. All content fits on a single page without appearing excessively cramped.

**Clarity:** The language is moderately legalistic but generally understandable. Phrases like "operating as a single HIPAA Affiliated Covered Entity" and "d/b/a GI Alliance" introduce legal jargon that most patients will not fully understand. However, the core concepts (what information, to whom, for what purpose) are presented in a logical flow.

**Organization:** The form follows a reasonable top-to-bottom structure: patient identification → recipient → information scope → sensitive information categories → purpose → duration/revocation → consent disclaimers → signature. This mirrors standard HIPAA authorization structure.

**Scope options:** The form offers two tiers of scope: "all information about Patient held by Provider including full copies of medical records" or specific subsets including date-range-limited records and an open "other" field. It also includes separate initials for four categories of sensitive information: HIV/AIDS, mental health, substance use disorder, and genetic information. This is a thoughtful design that complies with state and federal requirements for special-category data.

**Layout:** The form uses checkboxes (rendered as `[ ]`) and blank lines for manual completion. The visual hierarchy is adequate for a single-page form — section transitions are apparent from the content structure, though there are no bold headings or section dividers beyond the title line.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a general-purpose authorization, not tailored to patient access. However, it does include a "at Patient's request" checkbox under the purpose section, making it usable for patient-directed requests. It does not reference HIPAA § 164.524 (Right of Access) or explain patient rights to access their own records.

**Format/delivery options:** None specified. The form does not ask how the patient wants to receive records (paper, electronic, portal, etc.). There is no mention of electronic delivery, email, or patient portal access.

**EHI/export awareness:** No mention of electronic health information export, bulk data, or any digital delivery mechanism.

**Revocation instructions:** The form states patients can revoke "at any time by notifying Provider at ______________________" with blanks for the address, followed by "Attn: Privacy Officer." The address is left blank, meaning the patient must know where to send a revocation — or someone must fill in the address when the form is distributed. The form notes "My revocation must be in writing."

**Non-conditioning statement:** The form explicitly states: "Provider will not condition Patient's treatment or payment for care on whether I sign this form." This is a required HIPAA element and is clearly stated.

**Re-disclosure warning:** Included: "Once information is disclosed as a result of this form, it may no longer be protected by the federal HIPAA privacy rules."

## 6. COMPLIANCE

**Expiration:** The authorization is effective for "one (1) year from the date signed below or the date on which Patient no longer receives services from Provider, whichever is later." A one-year expiration is standard and not unreasonably short, and the "whichever is later" clause is patient-friendly — it ensures the authorization doesn't expire while the patient is still receiving care.

**Barriers:** No notarization requirement. No indication that in-person submission is required. No fee disclosure (neither prohibitive fees nor a statement about fee limits). No indication of required identity verification beyond a signature.

**Consent bundling:** The form is limited to information use and disclosure. It does not bundle other authorizations (e.g., consent to treatment, financial agreements).

**Blank provider fields:** The form has blanks for the specific practice name ("I authorize __________________") and the revocation address. This suggests the form is a template distributed across GI Alliance affiliates, but when downloaded directly from the website without pre-filling, a patient would not know where to send it or which entity they are authorizing.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Blank provider identity and revocation address:** The form leaves both the authorizing entity name and the revocation mailing address as blank fill-ins. A patient downloading this from the website has no way to know which practice to name or where to send a revocation without contacting the organization first. This creates a functional barrier to exercising both authorization and revocation rights.

### ⚠️ AMBIGUITIES
- **No delivery method specified:** The form authorizes disclosure but never asks *how* the patient wants to receive records. A patient requesting their own records under HIPAA's Right of Access is entitled to receive them in the format they request (if readily producible), but the form provides no mechanism to express this preference.
- **"d/b/a GI Alliance" construction:** The phrase "I authorize __________________ d/b/a GI Alliance on behalf of itself and all other practices that are operating as a single HIPAA Affiliated Covered Entity" may confuse patients about who exactly holds their records and who is being authorized.

### ❌ ERRORS
- **Mysterious trailing number:** The form ends with the number `34985840` after the signature block, which appears to be an internal document tracking or version number. It has no label or explanation and would be confusing to patients.

### ✨ BRIGHT SPOTS
- **Sensitive information categories with separate initials:** The form requires separate initials for HIV/AIDS, mental health, substance use, and genetic information rather than bundling them into the general authorization. This is a compliance-conscious design that respects state-level protections for sensitive health data.
- **Explicit non-conditioning statement:** The clear statement that treatment and payment will not be conditioned on signing is a required HIPAA element that many forms bury or omit.
- **Concise single-page format:** The form covers all essential authorization elements on a single page without being excessively dense, making it more approachable than multi-page alternatives.
