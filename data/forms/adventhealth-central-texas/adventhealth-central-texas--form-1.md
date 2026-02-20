# AdventHealth Central Texas — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **system-wide AdventHealth authorization form** (form number ADV-800003A, revised 4/2022) titled "Authorization for Release of Patient Health Information." It is a general-purpose ROI form designed for use across all AdventHealth facilities nationwide — it is not tailored to the Central Texas location.

The form covers three directions of information flow: "Disclose," "Obtain," and "Disclose and Obtain" (Section 2). It is organized into 12 sections across 2 pages (271 KB, 7,025 characters of extracted text).

A second form was also found for this organization: **form-2.pdf** (AHCT 616), which is a facility-specific "Request For Access And Authorization" form branded to AdventHealth Central Texas with local address and phone numbers. That facility-specific form explicitly includes patient access language ("Provide me with access to the protected health information") and a HIPAA citation (45 CFR 164.501), whereas this system-wide form does not. The existence of both forms — a system-level template and a facility-specific form — creates potential confusion about which form a patient should use.

## 2. FINDABILITY

Per the retrieval notes, both forms were discovered on the **first web search** for "AdventHealth Central Texas authorization release health information medical records form PDF." The PDF is hosted on AdventHealth's CDN at a direct URL (`adventhealth.com/sites/default/files/assets/ADV-8000003A_...pdf`). No login wall, bot blocking, or navigation maze was required.

However, the URL filename includes a form number rather than a human-readable name, and it's not clear from the URL alone whether this form applies to patient access or third-party disclosure. The form was served from the system-wide CDN rather than a Central Texas-specific page. For a patient searching for "how to get my medical records from AdventHealth Central Texas," it would not be immediately obvious which of the two forms to use.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The document was digitally created (not a scan), with fully extractable text.

**Fillable fields**: Zero (0). Despite being a digitally-authored PDF with 18 fonts and professional layout, the form has no interactive form fields whatsoever. Every field — patient name, address, checkboxes, dates, signatures — must be filled by hand after printing. This is a significant accessibility gap for a 2022-revised form from a major health system.

**File format**: 271 KB for 2 pages with 2 embedded images (likely logos). Reasonable file size. The extracted text is clean and well-structured.

**Digital-first design**: No. While the PDF itself was digitally created (not scanned), it was clearly designed as a print-and-fill form. Blank lines with underscores (`Month _________ Day _________ Year __________`), checkbox squares rendered as `☐` characters, and "Place Label Here" sticker areas all indicate a paper-first workflow.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is reasonable for a comprehensive authorization form, though the density of content is very high — especially on page 2 where Sections 8–12 are packed together.

**Clarity**: The language is a mix of semi-plain instructions and legal boilerplate. The opening instruction is reasonably clear: "This authorization is made by you for the disclosure of your health information, as indicated. Please complete each section." However, the form quickly becomes dense. Section 11 ("Important Information") is a wall of legal text with 8 statements beginning with "I understand that..." — classic legalese that most patients will skip.

**Organization**: The 12-section structure is logical in sequence (patient info → who to send to → why → what format → what records → expiration → signatures). However, the sheer number of sections and the density of checkboxes — particularly Sections 7 (16 record type options), 8 (10 sensitive-information categories), and 9 (22 behavioral health sub-options) — make the form visually overwhelming. A patient requesting a simple copy of their records must navigate 48+ checkbox options.

**Layout**: The form uses a two-column layout in places and has clear section headers with numbered sections. However, Section 9 (behavioral health) uses a three-column layout that feels cramped. The "Place Label Here" boxes in the margins consume valuable whitespace.

**Font size**: Based on the extracted text density and 2-page length, font sizes appear adequate for headers but likely small (8-9pt range) for the dense checkbox sections, particularly Section 9's three-column behavioral health grid.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is fundamentally a **third-party disclosure form**, not a patient access form. Section 2 asks patients to name a facility/entity/individual to "Disclose To" or "Obtain From." While "Personal Use" appears as a purpose option in Section 3, the form's entire architecture assumes a triangular transaction (patient authorizing transfer between entities), not a direct patient access request. A patient simply wanting their own records would find the form's structure confusing — they'd need to list themselves as the "Disclose To" recipient.

**Scope options**: Extensive. Sections 7 and 9 offer granular record-type selection (emergency reports, H&Ps, consults, progress notes, labs, pathology, radiology, films, EKGs, clinic notes, rehab notes, prenatal summaries, entire chart, itemized bill, plus 22 behavioral health sub-categories). Section 6 allows date-range specification. This granularity is good for precision but overwhelming for routine requests.

**Format options**: Section 4 offers Paper, Electronic Media, and Verbal Disclosure. Section 5 offers Mail, Pick-Up, Fax, and Secure Email delivery. The inclusion of electronic media and secure email is positive, though there is no mention of patient portal delivery or EHI/bulk data export.

**Right of Access language**: The form does not cite HIPAA § 164.524 (Right of Access). Section 11 includes the vague statement "I understand that I have the right of access to inspect and obtain a copy of my health Information" but does not explain this right or cite its legal basis. No mention of EHI export, TEFCA, or any modern interoperability framework.

## 6. COMPLIANCE

**Unreasonable barriers**: No notarization requirement. No in-person-only submission requirement. The form does not disclose fees (neither stating them nor warning about them).

**Expiration/auto-revocation**: Section 10 offers three options: "This occurrence only," "1 year from the date of signature (mental health records only)," and "60 days from the date of signature." The default is noteworthy: "*Only effective for this occurrence if none is chosen." This is a reasonable default that limits scope.

**Witness requirement**: Section 12 requires a witness signature "to release any mental health or developmental disability information," with the added restriction that "The witness cannot be the same person as the authorized signatory." This adds friction for patients seeking behavioral health records.

**Specific consent for sensitive information**: Section 8 is labeled "MUST BE COMPLETED FOR ALL REQUESTS" and requires patients to affirmatively check boxes authorizing disclosure of highly confidential categories (STDs, mental health, genetic testing, substance use, sexual assault, HIV/AIDS, etc.) or check "Not Applicable." While this likely reflects state law requirements, the mandatory completion for all requests adds burden even for patients seeking routine medical records.

**Illinois law reference in Texas**: Section 11 states: "I understand that under the provisions of the Illinois Mental Health and Development Disabilities Confidentiality Act..." This is the **wrong state law** for a form being used at a Texas facility. This suggests the form is a system-wide template that was not adapted for the jurisdictions where it's actually deployed.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Wrong state law cited**: The form references the "Illinois Mental Health and Development Disabilities Confidentiality Act" in Section 11, despite being served to patients at a Texas facility. This is legally inappropriate and potentially misleading — patients may be subject to different (and potentially more favorable) protections under Texas law (Texas Health & Safety Code Chapter 611).

### ⚠️ AMBIGUITIES

- **Which form to use?**: Two different ROI forms exist for this organization — this system-wide form and a facility-specific AHCT 616. Neither form references the other or explains when each should be used. A patient could reasonably complete the wrong one.
- **"Personal Use" purpose unclear**: While "Personal Use" is listed as a purpose option in Section 3, the form's architecture (requiring a named "Disclose To" recipient entity in Section 2) doesn't clearly accommodate a patient simply requesting their own records for themselves.
- **"Electronic Media" undefined**: Section 4 offers "Electronic Media" as a format but does not define what this means — CD? USB drive? Portal download? Direct email attachment? The ambiguity leaves implementation entirely to the provider's discretion.

### ❌ ERRORS

- **Illinois law citation in Texas context**: As noted above, Section 11's reference to the Illinois Mental Health and Development Disabilities Confidentiality Act is a factual error when this form is used at the Central Texas facility. This is not merely an ambiguity — it is an incorrect legal citation.
- **Form number discrepancy**: The notes reference form "ADV-800003A" but the source URL contains "ADV-8000003A" (extra zero). The form footer reads "ADV-800003A 4/2022." Minor but indicates sloppy asset management.

### ✨ BRIGHT SPOTS

- **Secure email delivery option**: Section 5 includes "Secure Email" with a field for the email address — more progressive than many ROI forms that only offer mail/fax/pickup.
- **Granular record-type selection**: The form offers unusually detailed record-type checkboxes across Sections 7 and 9, allowing patients to request exactly the records they need rather than all-or-nothing.
- **Clear revocation rights**: Section 11 clearly explains the right to cancel the authorization via written notice and that cancellation won't affect information already disclosed.
- **Non-conditioning statement**: Section 11 explicitly states that "refusal to sign this authorization will not affect any conditions of my treatment, payment, enrollment, or eligibility for benefits" — a direct HIPAA requirement that many forms omit.
