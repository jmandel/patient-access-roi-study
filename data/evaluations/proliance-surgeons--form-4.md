# Evaluation: Proliance Surgeons — form-4.pdf

**Document**: `form-4.pdf` (99,656 bytes, 1 page)
**Source URL**: https://www.proortho.com/wp-content/uploads/authorization-to-disclose.pdf
**Organization**: Proliance Surgeons (Seattle, WA) — independent, for-profit physician practice

---

## 1. DOCUMENT IDENTIFICATION

This is an "Authorization for Proliance Surgeons, Inc., P.S. to Use or Disclose My Health Care Information" — a general-purpose HIPAA authorization form. It is hosted on the ProOrtho website (proortho.com), which is a member practice within the Proliance Surgeons group.

This form is nearly identical in text and structure to form-2.pdf, which is hosted on the main proliancesurgeons.com site and attributed to PHWE (Pacific Hand & Wrist Experts). Both share the same two-section structure (I. My Authorization, II. My Rights), the same boilerplate language, and the same document tracking number ("1777000.1"). The key differences: form-2 includes pre-filled phone/fax numbers for a specific practice ("Fax: 425.820.8975 / Phone: 425-823-4224") while form-4 does not, and notes.md indicates form-4 has interactive checkbox fields (though metadata reports `fillable_field_count: 0`, suggesting the checkboxes may be annotation-based rather than AcroForm fields). Form-4's filename ("authorization-to-disclose.pdf") is more descriptive than form-2's ("PHWE-Record-Release-Form.pdf").

The other forms in this collection are: form-1 (an image-only scan of a similar form, hosted on npsmri.com), and form-3 (an incoming records request form for Pacific Rim Orthopaedic Surgeons — a different use case entirely, oriented toward pulling records TO Proliance rather than releasing them from Proliance).

## 2. FINDABILITY

This form was discovered via a site-scoped web search (`site:proliancesurgeons.com medical records release authorization form PDF`), which turned up the ProOrtho-hosted version. Per notes.md, the search process was straightforward — both general and site-scoped searches were "highly productive" and the overall retrieval difficulty was rated "easy."

However, this specific form is hosted on a subsidiary practice website (proortho.com) rather than the main Proliance Surgeons domain. A patient visiting proliancesurgeons.com would find form-2 linked from the medical records page; form-4 would only be found by patients specifically navigating ProOrtho's site or through a search engine. The URL path (`/wp-content/uploads/authorization-to-disclose.pdf`) is a standard WordPress uploads path — functional but not a curated patient-facing location.

The filename "authorization-to-disclose.pdf" is reasonably descriptive and would be recognizable in a downloads folder.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,259 characters), enabling search, screen reader use, and copy/paste.
- **Fillable fields**: Metadata reports 0 AcroForm fillable fields, despite notes.md stating this version "has fillable checkbox fields." This discrepancy suggests the checkboxes may be implemented as annotations or non-standard interactive elements rather than true PDF form fields. If functional in a PDF reader, this would be an improvement over form-2; if not, the interactive appearance is misleading.
- **File size**: 99,656 bytes for a single page — reasonable, though on the larger side likely due to the embedded image (1 embedded image noted in metadata) and 8 fonts.
- **Digital design**: This appears to be a digitally-created document (Word-originated, not a scan), with a proper text layer and structured layout. It is not image-only. However, the blank-line fields (e.g., "Patient name: ________________________________________________") suggest a print-and-fill design philosophy. There is no provision for electronic signature or digital submission.

## 4. CONTENT DESIGN

**Length and proportion**: A single page covering authorization scope, sensitive information categories, recipient identification, purpose/reason, expiration, and patient rights. This is appropriately concise for an authorization form.

**Structure**: The form is divided into two clearly labeled sections:
- "I. My Authorization" — covering what to disclose, sensitive categories, recipient, reason, and expiration
- "II. My Rights" — covering right to refuse, revocation process, and re-disclosure warning

This is a logical and intuitive flow: first what the patient is authorizing, then what rights they retain.

**Clarity**: The language is relatively plain. Sentences like "I understand I do not have to sign this authorization in order to get health care benefits (treatment, payment or enrollment)" are accessible. The revocation instructions are concrete: "Fill out a revocation form. A form is available from the practice. Or Write a letter to the practice." The re-disclosure warning ("Once health care information is disclosed, the person or organization that receives it may re-disclose it. Privacy laws may no longer protect it.") is clear and appropriately cautionary.

**Layout**: As a single-page form with defined sections, it is not overly cramped. Checkboxes are used for multi-select options (record scope, sensitive categories, reason). The marketing-related checkboxes use slightly awkward inline layout ("check only if practice requests the authorization for marketing purposes" appears as a checkbox label alongside other reason options), which could confuse patients.

**Tracking number**: The footer contains "1777000.1 1777000.1 1777000.1" — a document tracking/version number repeated three times, which is visually odd but functionally insignificant.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose authorization form, not one specifically designed for patients requesting their own records. The form asks the patient to specify a recipient ("You may disclose this health care information to: Name (or title) and organization..."), which makes sense for third-party releases but is unnecessary friction for a patient requesting records for themselves. The reason checkboxes include "at my request," which at least acknowledges patient-initiated requests.

**Scope options**: Good granularity. Patients can choose from:
- All records
- Records for a specific treatment/condition
- Records for specific date(s)
- Other items (X-rays, bills) with date specification

Sensitive information categories (HIV, psychiatric/mental health, STDs, drug/alcohol use) are separately opt-in, which complies with state-level requirements for heightened protections.

**Format/delivery options**: None. The form has no field for specifying desired format (paper, CD, electronic) or delivery method (mail, fax, email, patient portal). This is a significant gap for patients seeking their records.

**Right of Access language**: The form does not reference HIPAA § 164.524 or the patient's specific Right of Access. Section II discusses rights in the context of authorization (right to refuse, right to revoke) but does not mention the patient's independent right to access their records, timelines for response, or fee limitations.

**EHI export**: No mention of electronic health information export or bulk data access.

**Submission method**: No instructions on where or how to submit the completed form — no address, no fax number, no email, no portal link. (By contrast, form-2 at least includes a phone and fax number.) A patient completing this form would have no guidance on what to do with it.

## 6. COMPLIANCE

**Expiration**: The form requires the patient to specify an expiration date or event. A parenthetical notes that disclosures to financial institutions or employers expire after 90 days unless renewed — this is a Washington State requirement (RCW 70.02). No default expiration is specified if the patient leaves both fields blank, creating potential ambiguity.

**Barriers**: No notarization requirement, no in-person submission requirement, and no fee disclosure. The form does not mention costs. The signature block requires a wet signature (no electronic signature option), which effectively requires printing.

**Conditioning**: The form correctly states that signing is not required for treatment, payment, or enrollment, with appropriate exceptions (research, third-party information creation).

**Marketing disclosures**: The form includes two marketing-related checkboxes — one for practice-requested marketing authorization and another disclosing whether the practice receives compensation for marketing. This is a HIPAA requirement (§ 164.508(a)(3)) and is appropriately included, though the placement inline with other "reason" checkboxes could be clearer.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Fillable field discrepancy**: Notes.md describes this form as having "interactive checkboxes," but metadata reports 0 fillable fields. Patients may encounter inconsistent behavior depending on their PDF reader.
- **No submission instructions**: The form provides no address, fax number, email, or other guidance on how to submit the completed authorization. A patient downloading this from proortho.com would have to separately search for contact information.
- **No default expiration**: If a patient leaves both the date and event fields blank under "This authorization ends," the authorization's duration is undefined. Form-3 (the incoming records form) defaults to 6 months; this form does not.

### ❌ ERRORS

- **Repeated tracking number**: The footer shows "1777000.1 1777000.1 1777000.1" — the same number printed three times, suggesting a template or mail-merge artifact.

### ✨ BRIGHT SPOTS

- **Concise single-page format**: The form covers all essential authorization elements on one page without feeling cramped, which reduces patient burden.
- **Clear revocation instructions**: The form provides two specific methods for revoking authorization (revocation form or letter), which is more actionable than many ROI forms.
- **Descriptive filename**: "authorization-to-disclose.pdf" is immediately recognizable in a downloads folder, unlike generic filenames.
