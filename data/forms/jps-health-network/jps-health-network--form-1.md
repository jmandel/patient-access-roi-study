# JPS Health Network — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is the primary **Authorization & Request for Release of Information** form for JPS Health Network (John Peter Smith Hospital) in Fort Worth, TX. The source URL (`roi_english_revised_2018_10.pdf`) indicates it was last revised in October 2018. It is a single-page, image-only scan of a paper form.

Three forms were found on the JPS Patient Records page. Form-1 is the main ROI form; form-2 is an HIE (Health Information Exchange) opt-in authorization, and form-3 is an HIE revocation form. The HIE forms are not traditional ROI/patient access forms — they govern data sharing with other providers via an HIE network. A Spanish version of form-1 is also linked on the page but was not downloaded separately.

Form-1 is the only document relevant to a patient requesting copies of their own medical records. It appears to be a general-purpose release-of-information form (not patient-access-specific), though this cannot be confirmed from extracted text since the form is an image-only scan.

## 2. FINDABILITY

The form is **easy to find**. The retrieval notes document two clicks from the homepage: **Patient Tools → Patient Records** (https://jpshealthnet.org/patient-tools/patient-records). An accordion section labeled "JPS Authorization Form" contains a "Download Form in English" link. Web search for `"JPS Health Network" "medical records" "release form" filetype:pdf` also surfaced the direct PDF URL.

The URL is descriptive (`roi_english_revised_2018_10.pdf`) and the page provides context about the form's purpose. The Patient Records page also discloses the fee schedule and submission instructions, giving patients a reasonable understanding of the process before downloading.

However, the URL sits under `/sites/default/files/inline-files/` — a Drupal CMS default path — suggesting it was uploaded as an inline attachment rather than given a meaningful permanent URL.

## 3. TECHNICAL ACCESSIBILITY

This is the weakest dimension for form-1. The technical metadata confirms:

- **Image-only scan**: `is_image_only_scan: true`, `has_text_layer: false`
- **No extractable text**: `full_text_chars: 1` (just a form feed character)
- **No fillable fields**: `fillable_field_count: 0`
- **No embedded fonts**: `font_count: 0`
- **Single embedded image**: `embedded_image_count: 1` (the entire page is one scanned image)
- **File size**: 478,247 bytes (478 KB) — large for a single-page document, consistent with a 300 DPI scan

The form is entirely inaccessible to screen readers, text search, or any automated processing. It cannot be filled digitally. A patient must print the form, handwrite their information, and then mail or fax it.

This stands in stark contrast to form-2 and form-3 (the HIE authorization/revocation forms), which were created in 2025, have proper text layers, 3 embedded fonts, 9 fillable fields each, and even accept encrypted email submission to `him-dataintegrity@jpshealth.org`. The organization clearly has the capability to produce digitally-native, fillable PDFs — it simply has not updated the ROI form since 2018.

The Patient Records page explicitly states: **"It is not possible to accept electronic transfer of this form at this time."** This means even if a patient could somehow fill the form digitally, JPS would not accept it electronically.

## 4. CONTENT DESIGN

Because the form is an image-only scan with no text layer, detailed content analysis is limited. What can be observed:

- **Length**: 1 page — appropriate for an authorization form
- **Layout**: The document is a single scanned image; without OCR, the specific layout, font sizes, and field structure cannot be programmatically assessed
- **Vintage**: The filename indicates an October 2018 revision, making the form over 7 years old at the time of this evaluation
- **Format**: Appears to be a scan of a pre-printed paper form, not a document originally created digitally

The 2018 revision date raises concerns about whether the form reflects current legal requirements and organizational processes.

## 5. PATIENT-CENTEREDNESS

Several observations from the surrounding web page context (since the form text itself is unreadable):

**Submission barriers**: The page states electronic submission is not accepted. Patients must print the form, fill it by hand, and mail or fax it. This is a significant barrier for patients without access to a printer, pen, and postal mail or fax machine.

**ID requirement**: Patients must "present government-issued photo ID" at pickup. This is a standard identity verification practice but limits pickup to in-person only.

**Fee schedule**: The page discloses fees:
- $30 for the first 10 pages
- Per-page charges thereafter
- Electronic/digital delivery: flat $75

The $75 flat fee for electronic delivery is notably high and may exceed HIPAA's "reasonable, cost-based" fee standard under 45 CFR § 164.524(c)(4), which limits fees to the cost of labor, supplies, and postage (or an agreed-upon flat fee for electronic copies). HHS guidance has indicated electronic copy fees should generally be modest — $6.50 was the maximum flat fee under the 2016 guidance.

**Multilingual support**: A Spanish version of the ROI form is available, which is appropriate for the Fort Worth, TX community.

**No electronic delivery pathway**: While the fee schedule mentions electronic/digital delivery pricing, the page simultaneously says electronic transfer of the form is not accepted. This creates confusion about whether electronic delivery of the *records* is possible even if the *form* must be submitted on paper.

**No mention of patient rights**: The surrounding page does not appear to reference HIPAA Right of Access, patient rights, or EHI export options.

## 6. COMPLIANCE

**Fee concerns**: The disclosed fee structure ($30 for first 10 pages; $75 for electronic delivery) is potentially problematic under HIPAA. The 2016 HHS Right of Access guidance set a $6.50 flat fee ceiling for electronic copies. While this guidance was later modified, fees must still be "reasonable and cost-based." A $75 flat fee for electronic delivery and $30 minimum for paper copies may exceed what is permissible for patient access requests (as opposed to third-party requests, which are governed by state law and may allow higher fees). Texas state law (Texas Health & Safety Code § 241.154) does allow specific per-page fees, but these apply to third-party requests — patient access requests under HIPAA may be subject to lower limits.

**No electronic submission**: Refusing electronic form submission in 2026 creates an unnecessary barrier. HIPAA does not require providers to accept electronic authorization forms, but best practice and HHS guidance encourage removing barriers to patient access.

**Form age**: A 2018 form has not been updated to reflect subsequent regulatory guidance, including HHS's 2019 Right of Access Initiative enforcement actions and the 21st Century Cures Act information blocking provisions.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **$75 flat fee for electronic delivery** — This likely exceeds HIPAA's "reasonable, cost-based" fee limit for patient access requests. HHS has taken enforcement action against providers charging similar fees.
- **$30 minimum for first 10 pages** — For patient access requests (as opposed to third-party), this charge may exceed permissible levels under federal rules.
- **No electronic form submission accepted** — The page explicitly states "It is not possible to accept electronic transfer of this form at this time," requiring patients to print, fill by hand, and mail/fax. This creates unnecessary barriers, especially for patients without access to printers or fax machines.

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party release**: Because the form is an image-only scan, it is impossible to determine from the extracted text whether the form distinguishes between patient access requests and third-party releases. The fee schedule on the web page does not differentiate between these request types, which have different fee limits under federal law.
- **Electronic delivery confusion**: The page mentions electronic/digital delivery at $75 but also says electronic form submission is not accepted — it is unclear whether patients can ultimately receive records electronically even if they must submit the paper form.

### ❌ ERRORS

- **Image-only scan with no text layer** — The form produces no extractable text (`full_text_chars: 1`). This is a technical defect that makes the document inaccessible to screen readers, violating basic digital accessibility standards.
- **Stale form (October 2018)** — Over 7 years old, the form predates significant regulatory developments including HHS Right of Access enforcement actions (2019-2023) and 21st Century Cures Act information blocking rules (2021).

### ✨ BRIGHT SPOTS

- **Spanish language version available** — The page offers the ROI form in both English and Spanish, appropriate for the Fort Worth, TX demographic.
- **Fee disclosure on the web page** — While the fees themselves may be problematic, disclosing them upfront before the patient downloads the form is transparent and helpful.
- **Modern HIE forms demonstrate capability** — The 2025 HIE forms (form-2 and form-3) have text layers, fillable fields, and accept encrypted email submission, proving the organization has the technical capability to produce accessible digital forms. This makes the outdated scan of the ROI form all the more conspicuous.
