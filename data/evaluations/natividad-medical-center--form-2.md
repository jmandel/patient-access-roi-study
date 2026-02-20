# Natividad Medical Center — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization for Use or Disclosure of Health Information" form created by Natividad Medical Center. It is a general-purpose ROI authorization—not a patient-access-specific request form. The form covers both patient-directed and third-party disclosures through the same mechanism.

Natividad's website hosts two forms: form-1.pdf ("Auth-to-Release-Health-Info_English.pdf," a 1-page image-only scan from 2019) and form-2.pdf ("Auth_ROI_e.pdf," this 2-page text-based PDF from 2007). The two appear to be different versions or generations of the same authorization form, both still linked from the medical records page. Form-2 is the older but more technically accessible of the two (text layer present; form-1 is image-only). The "e" suffix in the filename may indicate "English" or "electronic," but both are English-language forms with no fillable fields.

## 2. FINDABILITY

Per the retrieval notes, the form was discoverable via a general web search (`"Natividad Medical Center" "medical records" "release form" filetype:pdf`) and confirmed via site-specific search. Both forms are linked from the medical records page at `https://www.natividad.com/medical-records/`. The URL path (`/wp-content/uploads/2018/04/Auth_ROI_e.pdf`) indicates a WordPress upload from April 2018, housing a document originally created in 2007.

The filename "Auth_ROI_e.pdf" is cryptic and does not clearly communicate the form's purpose to a patient browsing files. However, the form is at least findable from the medical records page within a few clicks.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and complete. The extracted text is 4,903 characters across 2 pages, with clean, well-structured output from pdftotext. This is far superior to form-1, which has no text layer at all.

**Fillable fields**: Zero. The form uses underscore-line blanks (`____`) for all data entry fields. It must be printed and completed by hand. There are no interactive form fields whatsoever.

**File format**: 26,523 bytes (26 KB), very small. Created via Microsoft Word → Acrobat Distiller in 2007. Uses 6 fonts, no embedded images. The PDF is encrypted with RC4 (copy-protection enabled, printing allowed), which prevents text selection and copy-paste—an unnecessary barrier for a patient trying to reference or pre-fill information.

**Digital-first design**: This is clearly a print-era document. The underscore blanks, the `a.m./p.m.` circle option for time, and the complete absence of interactive fields all confirm it was designed for pen-and-paper completion. The 2007 creation date reinforces this—it predates widespread adoption of fillable PDF forms.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is reasonable for a general ROI authorization covering patient info, recipient, scope, special categories, purpose, expiration, rights, and signature.

**Structure**: The form is organized into clearly labeled sections: patient identification → use and disclosure → purpose → expiration → my rights → signature. This logical flow works well.

**Clarity**: The introductory sentence—"Completion of this document authorizes the disclosure and/or use of health information, about you"—has an unnecessary comma that slightly disrupts readability. The body text is largely plain language, though the footnotes descend into dense legal prose. Footnote 2 in particular is a 78-word run-on sentence about HIPAA exceptions that would be impenetrable to most patients.

**Footnotes**: The form uses 4 numbered footnotes. Footnote 1 explains the Lanterman-Petris-Short Act requirement for mental health record releases to third parties. Footnote 3 references "45 CF are section 164 or.50 8(D) (1), (each) (2))"—this is clearly garbled text, likely from a font-encoding or OCR issue in the original Word-to-PDF conversion. The intended citation is 45 CFR § 164.508(d)(1)/(2). Footnote 4 simply notes the requester should complete the compensation checkbox section.

**Layout**: Text is reasonably spaced. The section headers (USE AND DISCLOSURE, PURPOSE, EXPIRATION, MY RIGHTS, SIGNATURE) provide visual hierarchy. The checkbox area for special record categories (mental health, HIV, alcohol/drug) is formatted as a sub-list under section (b), which is functional if somewhat cramped.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is structured as a third-party release authorization, not a patient access request. The language "To release to: ___" requires the patient to name a recipient. A patient requesting their own records would need to write their own name as the recipient, which is unintuitive. There is no separate "Request for My Own Records" workflow.

**Scope options**: The form provides a binary choice: (a) all health information, or (b) specific records/types with dates. This is adequate but basic. The special-category checkboxes (mental health, HIV, alcohol/drug) with the note about separate psychotherapy-notes authorization show compliance awareness.

**Format/delivery options**: None. The form does not mention electronic delivery, email, patient portal access, CD/USB, or any delivery method at all. There is no mention of how records will be provided.

**Purpose options**: Only two choices—"Patient request" (checkbox) or "Other" (blank line). The "Patient request" checkbox is a positive inclusion, at least acknowledging that patients may initiate their own requests.

**Rights language**: The "MY RIGHTS" section is a genuine bright spot in content. It states: "I may refuse to sign this Authorization. My refusal will not affect my ability to obtain treatment or payment or eligibility for benefits." It also covers the right to inspect/copy the information, revocation rights, re-disclosure risks, and the right to receive a copy of the signed authorization. However, revocation requires submission "in writing" to an address left blank (`____________`), placing the burden on the patient to determine where to send it.

**Social Security Number**: The form requests the patient's SSN on the first line. HIPAA does not require SSN for record requests, and collecting it creates unnecessary privacy risk.

## 6. COMPLIANCE

**SSN collection**: Requesting Social Security numbers on an ROI form is unnecessary and creates a data-security risk. HIPAA permits identification by name, date of birth, and address; SSN is not required.

**Revocation address blank**: The form states "I may revoke this authorization at any time, but I must do so in writing and submit it to the following address:___" — the address is left blank, which means the form as distributed does not actually tell the patient how to revoke. This undermines the revocation right.

**Copy protection**: The PDF is encrypted to prevent copying text. While printing is allowed, copy-protection creates a barrier for patients using assistive technology (screen readers may struggle with copy-restricted PDFs) and prevents patients from easily extracting form text for reference.

**No expiration default**: The expiration field is a blank line with no guidance on reasonable timeframes, no default, and no discussion of what happens if left blank.

**Witness line**: The signature section includes a "Witness" line. While not explicitly required, the presence of a witness field may create the impression that a witness is needed—potentially delaying patients who don't have one available.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **SSN collection**: The form requests "Social Security number" as a standard field on page 1. This is not required by HIPAA and creates unnecessary privacy and identity-theft risk for patients.
- **Revocation address left blank**: The form instructs patients to submit revocations "to the following address:___" but provides no address, effectively nullifying the revocation instructions.

### ⚠️ AMBIGUITIES
- **Two forms, no guidance**: The website hosts both form-1 (2019 image scan) and form-2 (2007 text PDF) with no clear indication of which is current or preferred. A patient finding both would not know which to use.
- **Witness line**: The "Witness" field on the signature block is unexplained—is a witness required? Optional? For specific circumstances only? This ambiguity may deter patients from submitting the form without one.
- **No delivery method**: The form specifies what information to release and to whom, but never addresses how records will be delivered (mail, fax, pickup, electronic).

### ❌ ERRORS
- **Garbled legal citation**: Footnote 3 reads "45 CF are section 164 or.50 8(D) (1), (each) (2))" — this is a mangled rendering of 45 CFR § 164.508(d)(1)/(2), likely caused by font-encoding issues in the 2007 Word-to-PDF conversion. The citation is effectively unreadable.
- **Stray comma**: The opening sentence contains "the disclosure and/or use of health information, about you" — the comma before "about you" is grammatically incorrect.

### ✨ BRIGHT SPOTS
- **Patient rights section**: The "MY RIGHTS" section clearly communicates refusal rights, no-retaliation, right to inspect records, revocation rights, re-disclosure warnings, and the right to a copy of the signed authorization. This is more comprehensive than many ROI forms.
- **Special category awareness**: The form separately identifies mental health, HIV, and substance abuse records with appropriate legal footnotes about the Lanterman-Petris-Short Act, reflecting California-specific legal requirements.
