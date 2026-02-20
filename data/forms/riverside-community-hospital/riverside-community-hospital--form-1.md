# Riverside Community Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is a 5-page "Authorization for the Release of Protected Health Information" hosted by a third-party ROI vendor, Legal Image, at `http://legalimage.net/images/Forms/Riverside_Community_Hospital-medical_records_authorization.pdf`. It consists of two pages of field-by-field instructions ("Instructions to Completing the Authorization for Protected Health Information (PHI)") followed by three pages of the actual authorization form (Sections A, B, and C).

This is one of three forms found for Riverside Community Hospital. Form-2 is the current official English-language authorization (1 page, 52 fillable fields, hosted on HCA's CDN, form number HCA-840-00434 Rev. 09/21). Form-3 is the Spanish-language equivalent of form-2. Form-1 appears to be an older or alternative version — it is longer (5 pages vs. 1), has no fillable fields, uses a different layout, and is served by a third-party vendor rather than HCA's own infrastructure. The hospital's official medical records page links to forms 2 and 3, while form-1 is found via web search on the Legal Image site.

## 2. FINDABILITY

Form-1 was easily discoverable via web search. According to the retrieval notes, a search for `Riverside Community Hospital "authorization" "release" "health information" medical records form` "immediately surfaced the form URL on legalimage.net." However, this form is **not linked from the hospital's own medical records page** — that page links to forms 2 and 3 (the HCA versions) instead. A patient navigating the hospital website directly would not encounter form-1 at all; only a patient who searched the web would find it.

The URL itself is descriptive (`Riverside_Community_Hospital-medical_records_authorization.pdf`) but is served over plain HTTP (not HTTPS), which is a notable deficiency for a healthcare document.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text extraction via `pdftotext` yields 7,485 characters across 5 pages.
- **Fillable fields**: Zero. The form has no interactive fields despite having clearly labeled blanks (Patient Name, Date of Birth, etc.). A patient must print and hand-fill the form.
- **File size**: 141,169 bytes (141 KB) for 5 pages — reasonable.
- **Fonts**: 8 fonts embedded.
- **Images**: 1 embedded image (likely a logo or header graphic).
- **Scan status**: Not an image-only scan; it was digitally authored.
- **Digital-first design**: No. While the document has a text layer, the absence of any fillable fields and the inclusion of two pages of print-oriented instructions signal a document designed to be printed, filled by hand, and submitted physically. The form explicitly instructs the patient to "Please return Authorization to: Riverside Community Hospital, ATTN: HIM/MEDICAL RECORDS, 4445 MAGNOLIA AVE., RIVERSIDE, CA 92501" with phone and fax numbers. No online submission option is mentioned.

Compared to form-2 (52 fillable fields, 1 page, HCA-hosted), form-1 is dramatically inferior as a digital artifact.

## 4. CONTENT DESIGN

**Length**: 5 pages — disproportionately long for an authorization form. Two full pages are consumed by field-by-field instructions before the form itself begins. The actual form content (Sections A–C) spans pages 3–5. By contrast, the current official form (form-2) accomplishes the same purpose in a single page.

**Instructions section (pages 1–2)**: Provides plain-language explanations for each field. For example: "Patient's Name — The name of the person who received the medical service(s)." While this is helpful in isolation, many explanations are self-evident (e.g., explaining that "Birth Date" means "The patient's date of birth"). The instruction for Consent to Release is useful: "Initial this box if you acknowledge and consent to the release of protected health information that may contain alcohol/drug abuse, psychiatric, HIV testing, HIV results, or AIDS information."

**Clarity**: The form uses generally understandable language. Legal disclosures in Section A's "I understand that:" block are written in plain sentences (e.g., "I may refuse to sign this authorization and that it is strictly voluntary"). However, the structure overloads the patient with information — a combined 5-page document for what should be a simple authorization.

**Record type selection**: The form provides a detailed grid of record types organized in three columns with date fields for each, including options like "ABSTRACT only," "My entire medical record (all PHI)," "Admission form," "Dictation reports," "Labor/delivery summary," "Itemized bill," "UB-04," and many others. This gives granular control but the layout (three columns of checkboxes with date fields) is dense and potentially confusing.

**Visual hierarchy**: Section labels (A, B, C) provide organizational structure. The instructions section uses a two-column layout (field name left, explanation right). The form itself is moderately organized but cramped in the record-type selection area.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose release form, not specifically designed for patient access to their own records. The form's structure centers on disclosing information to a designated "Recipient" — the field asks for "Name of the person being authorized by the patient to receive the requested protected health information." A patient requesting their own records must fill in their own name as the recipient, which is awkward and not explicitly guided.

**Delivery options**: The form offers: Paper Copy, "Electronic Media, if available (e.g., USB drive, CD/DVD, eDelivery)," Encrypted Email, and Unencrypted Email. This is a reasonably good set of options. The form includes an email address field and notes that "In the event the facility is unable to accommodate an electronic delivery as requested, an alternative delivery method will be provided."

**Scope options**: Granular record type selection with individual date fields. Includes psychotherapy notes handling with appropriate separation ("If yes, then this is the only item you may request on this authorization. You must submit another authorization for other items below").

**Expiration**: "Authorization will expire in 90 days unless otherwise noted on this form." The form allows specifying a custom date or event. The 90-day default is relatively short and could pressure patients to act quickly.

**Right of Access language**: No explicit reference to HIPAA § 164.524 or patient rights to access their own records. The "I understand that" section mentions the right to refuse, right to revoke, and the Notice of Privacy Practices, but does not inform patients of their right to obtain their records.

**EHI/USCDI**: No mention of electronic health information export or USCDI — unlike form-2, which explicitly includes a "For USCDI Release Requests" option.

**Sensitive information consent**: Requires an initial (not just a checkbox) for release of information "that may contain alcohol, drug abuse, genetic information, psychiatric, HIV testing, HIV results or AIDS information." This is appropriate for California's more restrictive consent requirements.

## 6. COMPLIANCE

**SSN request**: The form asks for "Last 4-digit SSN" but marks it "(optional)." While marked optional, requesting SSN at all on an ROI form is unnecessary and raises privacy concerns.

**No notarization required**: The form does not require notarization.

**Submission method**: Physical mail or fax only ("Please return Authorization to: Riverside Community Hospital, ATTN: HIM/MEDICAL RECORDS, 4445 MAGNOLIA AVE."). No online submission, no email submission. The phone number (951-788-3165) and fax (951-788-3175) are provided.

**Fee disclosure**: Point 5 in the "I understand" section states: "I understand that I may see and obtain a copy the information described on this form, for a reasonable copy fee, if I ask for it." This references fees but does not specify amounts.

**Authorization expiration**: 90-day default is relatively short. Form-2 (the current official version) uses a 180-day default, suggesting HCA recognized 90 days was too short and doubled it.

**Representative documentation**: The instructions require that if someone other than the patient signs, "a description of the representative's authority to act on behalf of the patient must be provided (i.e. Medical Power of Attorney, Executor of Estate, or Legal Guardian). Also, please include a copy of all supporting documentation."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **HTTP (not HTTPS) hosting**: The form is served at `http://legalimage.net/...` — an unencrypted connection for a healthcare authorization document. This is a security concern, especially given that the completed form would contain PHI.
- **90-day default expiration**: Significantly shorter than the 180-day default on the current official form (form-2) and could create an unnecessary time barrier for patients navigating a complex records request.

### ⚠️ AMBIGUITIES

- **Unclear status**: It is unclear whether this form is still accepted by the hospital. It is hosted by a third-party vendor (Legal Image) and is not linked from the hospital's own website, yet it remains publicly accessible and names Riverside Community Hospital specifically. A patient finding this via web search might complete and submit it, only to have it rejected in favor of the current HCA form.
- **Patient self-request workflow unclear**: The form assumes a third-party recipient model. A patient requesting their own records receives no guidance on how to fill out the "Recipient" section for themselves.

### ❌ ERRORS

- **Grammar error in patient rights**: Point 5 reads "I understand that I may see and obtain a copy **the** information" — missing the word "of" (should be "a copy **of the** information"). This same error appears in form-2 and form-3, suggesting it is an HCA-wide template error.
- **"affect" vs. "effect"**: Point 3 states revocation "will not have any **affect** on any actions taken prior to receiving the revocation." The correct word is "effect." (Notably, form-2 corrects this to "effect," confirming form-1 is an older version.)

### ✨ BRIGHT SPOTS

- **Detailed field-by-field instructions**: The two-page instructions section, while arguably excessive, demonstrates an attempt to make the form accessible to patients who may be unfamiliar with authorization forms. The plain-language explanations (e.g., explaining what "ABSTRACT" means: "only includes your face sheet, discharge summary, history and physical, consults, path, radiology and lab reports and any operative report") are genuinely helpful.
- **Multiple delivery format options**: Including paper, electronic media, encrypted email, and unencrypted email — with an honest risk disclosure about unencrypted options — is better than many comparable forms.
- **Psychotherapy notes separation**: Properly handled per HIPAA requirements, with clear guidance that psychotherapy notes must be requested on a separate authorization.
