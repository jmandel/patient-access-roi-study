# Evaluation: Southwell (Tift Regional Health System) — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is an **Authorization to Release Protected Health Information** form for Tift Regional Health System, Inc. / Tift Regional Medical Center / Southwell Medical, a Campus of Tift Regional Medical Center. It is a single-page scanned document (image-only PDF) that appears to be a revised version of form-1.pdf, carrying a revision date of "Rev. 9/21" (September 2021) visible at the bottom left corner, and uploaded to the website in July 2025 (per the URL path `/wp-content/uploads/2025/07/Release-of-Information.pdf`).

The form covers the same TRHS facilities as form-1 (Tift Regional Medical Center, Southwell Health and Rehabilitation, Southwell Medical a campus of TRMC, Southwell Medical Rural Health Clinics). Its structure closely mirrors form-1 — patient demographics, facility selection, record type checkboxes, recipient information, purpose of disclosure, revocation instructions, and signature lines — but with one notable difference in expiration language: this version states the authorization will expire **one year** from signing if no date is specified, versus the **ninety (90) days** default in form-1.

Among the four documents found for Southwell, this form appears to be the most recently uploaded ROI authorization for the hospital system. Form-1 is an older digital-native version covering the same facilities; form-3 covers Southwell Ambulatory clinics; form-4 is a supplementary entity list.

## 2. FINDABILITY

Per the retrieval notes, the form was found on the medical release page at `https://mysouthwell.com/medical-release/`, accessible via **Home → Patient & Visitors → Medical Release**. The search required web queries and HTML scraping of that page to discover all PDF links. The URL (`/wp-content/uploads/2025/07/Release-of-Information.pdf`) is reasonably descriptive but uses a generic filename ("Release-of-Information.pdf") that doesn't indicate which facility or version it applies to. Having multiple authorization forms on the same page (form-1 for TRHS, form-2 as a newer TRHS variant, form-3 for ambulatory) without clear labeling could confuse patients about which form to use. No significant access barriers (no login, no bot blocking) were encountered.

## 3. TECHNICAL ACCESSIBILITY

This document has severe technical accessibility problems:

- **Image-only scan**: The PDF contains no text layer whatsoever. `pdftotext` returns only a form feed character. The metadata confirms `has_text_layer: false`, `full_text_chars: 1`, `font_count: 0`, and `is_image_only_scan: true`.
- **No fillable fields**: `fillable_field_count: 0`. Patients must print and hand-fill the form.
- **Scan origin**: The PDF creator metadata reads "Canon iR-ADV 4935 PDF" — confirming this was scanned on a Canon multifunction copier. It was produced with "Adobe PSL 1.3e for Canon" on July 14, 2025.
- **Image composition**: The scan consists of 4 embedded images — a 150 DPI grayscale background and three CCITT-encoded stencil layers at 300 DPI. Total file size is 75 KB for a single page, which is compact but reflects low image quality.
- **Readability**: The scan is legible but noticeably degraded. Text is fuzzy in places, with some characters partially obscured (e.g., header text shows artifacts around "MEDICAL CENTER" and "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION"). The dark header banner makes the title text harder to read.
- **Screen reader inaccessible**: With no text layer, the document is completely inaccessible to screen readers or any assistive technology.

This is a significant regression from form-1, which is a digital-native PDF with a full text layer and clean typography — yet appears to cover the same facilities and serve the same purpose.

## 4. CONTENT DESIGN

Based on visual inspection of the scanned image:

- **Length**: 1 page, which is appropriate for an authorization form. The content is dense but contained on a single sheet.
- **Structure**: The form follows a numbered section layout (1–8) covering: (1) facility selection, (2) record types, (3) sensitive information acknowledgment, (4) recipient, (5) purpose, (6) revocation and expiration, (7) non-conditioning statement, (8) voluntary disclosure acknowledgment. This mirrors form-1's structure.
- **Layout**: The form is cramped. All content is compressed onto a single page with minimal margins and tight line spacing. The checkboxes for record types (section 2) are arranged in a two-column layout that is hard to parse in the scan. Fill-in lines for dates are very short.
- **Typography**: The header uses a dark banner with reversed white text that is partially degraded in the scan. Body text appears to be approximately 9-10pt, which is borderline for readability, especially in a degraded scan.
- **Record type options**: Includes checkboxes for problem list, medication list, physician orders, laboratory results, x-ray/imaging reports, x-ray films, consultation reports, entire record, billing records, and other — plus most recent discharge summary, most recent history and physical, and physician progress notes with date range fields.
- **Delivery options**: Section 4 includes "Via: ☒ Paper ☐ CD ☐ Electronic Delivery (include e-mail address)" — Paper appears pre-checked by default in the scan.
- **Expiration**: Section 6 states that if no expiration date or event is specified, "this Authorization will expire one year from the date on which I signed this Authorization."

## 5. PATIENT-CENTEREDNESS

- **Patient access vs. third-party release**: This is a general-purpose release form, not specific to patient access. It is framed as authorizing disclosure "to the following individual or organization" (section 4), which could be the patient themselves or a third party. There is no specific pathway or simplified flow for patients requesting their own records.
- **Purpose options**: Section 5 includes "Personal Use" as a checkbox option alongside Legal Issue, Insurance Claim, Continuing Care, Certified Copy, and Other — so patients can indicate self-request, but the form doesn't differentiate the process.
- **Scope options**: Patients can select specific record types and provide date ranges, which is good granularity.
- **Format/delivery options**: Paper, CD, and Electronic Delivery are offered. However, Paper appears pre-checked in this scan, which may subtly nudge patients toward paper copies.
- **HIPAA Right of Access**: No explicit reference to HIPAA § 164.524 or patient rights language. The form references non-conditioning of treatment (section 7) which is a HIPAA-required statement, but doesn't educate patients about their right of access.
- **EHI Export**: No mention of electronic health information export or bulk data access.
- **Submission method**: The form provides a mailing address (PO Box 2560, Tifton, GA 31793) and phone number (229-353-6120 or per the scan, possibly 229-353-0122) for revocation, but doesn't clearly state how to submit the completed authorization itself. The retrieval notes mention Verisma as an online request partner, but this form doesn't reference that option.

## 6. COMPLIANCE

- **Expiration default**: The authorization defaults to **one year** if no expiration date is specified. This is a more patient-friendly default than form-1's 90-day expiration, and is reasonable.
- **Non-conditioning statement**: Section 7 appropriately states the facility "will not condition treatment, payment, enrollment, or eligibility for benefits" on signing.
- **Voluntary disclosure**: Section 8 appropriately notes the authorization is voluntary and warns about re-disclosure potential.
- **Revocation**: Section 6 requires written revocation presented to the HIM Department, which is standard.
- **Sensitive information**: Section 3 acknowledges the records may contain STD, AIDS/HIV, drug abuse, alcoholism, sickle cell anemia, and behavioral/mental health information — but does not provide separate opt-in/opt-out for these categories. This blanket acknowledgment may be insufficient under some state laws that require specific consent for releasing substance abuse or HIV records.
- **No fee disclosure**: The form does not mention any fees associated with record requests.
- **Witness requirement**: The form includes a "Signature of Witness" line with date and time fields, which could be interpreted as requiring a witness — a potential barrier for patients completing the form at home.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Image-only scan replaces digital-native form**: This scanned PDF was uploaded in July 2025 to replace or supplement a clean, text-layer-bearing digital form (form-1) that covers the same facilities. Publishing an image-only scan in 2025 is a significant step backward in accessibility. It is completely inaccessible to screen readers, cannot be searched or indexed, and cannot be filled electronically.
- **Paper delivery pre-checked**: The scan appears to show the "Paper" checkbox already marked (☒ Paper), potentially steering patients toward paper copies rather than electronic delivery. If intentional, this undermines patients' right to receive records in electronic format under HIPAA.
- **Witness line without clarification**: The form includes a "Signature of Witness" line but does not clarify whether a witness is required or optional. If required, this creates an unnecessary barrier — HIPAA does not require witnessed signatures for patient access requests.

### ⚠️ AMBIGUITIES

- **Relationship to form-1 unclear**: Both form-1 and form-2 cover the same TRHS facilities and serve the same purpose, but have different expiration defaults (90 days vs. 1 year) and different formats (digital-native vs. scanned). It is unclear which form patients should use, and the medical release page apparently links to both without differentiating them.
- **Phone number discrepancy**: Form-1's text reads "229-353-6120" for the HIM Department, while the scan of form-2 appears to show a different number (possibly "229-353-0122" — hard to read due to scan quality). This inconsistency could confuse patients trying to contact HIM.
- **Submission instructions absent**: The form explains how to revoke authorization but does not state where or how to submit the completed form (mail, fax, in-person, email, online portal).

### ❌ ERRORS

- **Degraded scan quality**: Multiple characters in the header and body text are partially obscured or fuzzy due to low scan quality. The title banner text "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION" has visible artifacts. This is a production quality issue for a form uploaded in 2025.
- **No OCR applied**: The PDF was scanned without OCR processing, resulting in zero extractable text. Modern scanners (including Canon iR-ADV series) support OCR — this was either disabled or skipped.
