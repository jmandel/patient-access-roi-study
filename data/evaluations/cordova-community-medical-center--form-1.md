# Cordova Community Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page "AUTHORIZATION FOR RELEASE OF PROTECTED PATIENT HEALTH INFORMATION" form branded to Cordova Community Medical Center (CCMC). It is the only ROI-related form found for this organization. The form serves a dual purpose: it handles both obtaining records from external sources ("Obtain my information from") and releasing records to third parties ("Release my information to"). It is not specifically designed for patient self-access requests under HIPAA's Right of Access — it is a general-purpose authorization form. No separate patient-access-specific form was found. The form was last updated 5/5/2016 per the footer.

## 2. FINDABILITY

The form was very easy to locate. A single web search for the organization name plus ROI-related keywords returned a direct PDF link at `https://www.cdvcmc.com/wp-content/uploads/2017/11/Release-of-Information-form.pdf`. The form is also linked from the Medical Records page at `https://www.cdvcmc.com/for-patients/medical-records/`, which is an intuitive location under "For Patients." The URL path and filename (`Release-of-Information-form.pdf`) are descriptive and human-readable. Per the retrieval notes, no bot blocking, authentication, or portal login was required. The notes characterize retrieval difficulty as "Easy."

The Medical Records page reportedly explains patient rights and links directly to the download — a clean, one-click access path from an obviously-named section of the site.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** The PDF has a proper text layer (`has_text_layer: true`, `is_image_only_scan: false`). The full extracted text is 3,952 characters and reads cleanly, indicating this was digitally authored rather than scanned.

**Fillable fields:** Zero fillable form fields (`fillable_field_count: 0`). The form is a flat/static PDF. Patients must print and fill it by hand, which is a meaningful usability limitation for digital workflows.

**File format and size:** 75,222 bytes (≈73 KB) for a single page with no embedded images and 3 fonts — reasonable and lightweight. The lack of embedded images (`embedded_image_count: 0`) confirms it is a text-based design, not a scanned document.

**Digital-first design:** While the PDF was digitally created (not a scan), the absence of fillable fields means it was designed with a print-and-handwrite workflow in mind. This is a paper-first form distributed digitally, not a digital-first form.

## 4. CONTENT DESIGN

**Length:** One page. This is appropriate for the content — the form covers authorization, scope, revocation, redisclosure, and signature without requiring additional pages. The compactness is a positive.

**Clarity and language:** The form mixes plain language with legal/regulatory language. Sections 1–2 (authorization and record type selection) are relatively straightforward. Sections 4–7 shift into denser legal prose. For example, section 4 reads: "I understand that the revocation of this Authorization will not apply to my insurance company whenever my insurer has a legal right to contest a claim under my policy." This is functional but not plain-language. The redisclosure notice at the bottom is a block of regulatory text that would be difficult for a lay reader.

**Organization:** The form uses a numbered structure (sections 1–7) that flows logically: authorization → scope → limitations → revocation → rights → conditions → photocopies → signature → redisclosure. Section 3 (limitations on sensitive information) is placed between scope and revocation, which is a reasonable location.

**Layout:** With all this content on a single page, the form is somewhat dense. The record-type checkboxes in section 2 are arranged in a multi-column layout. The text in sections 3–7 and the redisclosure notice is likely small given the volume of content compressed into one page. Three fonts are used, suggesting some typographic hierarchy exists (likely bold headers and regular body text).

**Record type options:** Section 2 offers 12 specific record type checkboxes: all medical records, H&P exams, nursing notes, physician notes, pathology reports, consult by specific doctor, discharge summary, ER report, clinic notes, radiology/xray/CT, physician's orders, operative reports, lab data, EKG/cardiology reports, plus an "Other" write-in. This is a thorough selection. Date-range fields ("Covering records from on/about (date) ... To (date)") allow temporal scoping.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form does not distinguish between a patient requesting their own records and a third-party authorization. The structure — "I hereby authorize CCMC to Obtain my information from / Release my information to [NAME, ADDRESS]" — frames the interaction as releasing to a named recipient. A patient requesting their own records would need to write their own name in the recipient field, which is unintuitive. The "purpose" checkboxes reinforce this ambiguity: "Continuation of care," "Insurance purposes," "Employer requirement," and "Legal review" are all third-party scenarios. Only "Personal reasons" maps to patient self-access.

**Format/delivery options:** The form itself offers no choice of delivery format. The notes mention the website's Medical Records page discusses format options (paper, email, CD, or fax), but the form lacks any checkbox or field for this. Two fax numbers are listed at the bottom for submitting the form ("PLEASE FAX TO Medical Records (907) 424-8406 / Clinic Nurse (907) 424-8202"), but these are for sending the completed authorization, not for receiving records.

**Right of Access language:** The form references "Federal Law 45 CFR 164.524" in the redisclosure prohibition section and "42 CFR Part 2" for substance abuse confidentiality. However, 45 CFR 164.524 is the HIPAA Right of Access provision — it is cited here in the context of redisclosure exceptions, not to inform patients of their access rights. The form does not explicitly tell patients they have a right to access their own records under HIPAA.

**EHI Export/bulk data:** No mention of electronic health information export, patient portals, or digital delivery mechanisms.

**Submission methods:** The form provides fax numbers for submission. Combined with the downloadable PDF, patients can print, fill, and fax the form — a functional if dated workflow. No email submission address or online portal submission option is mentioned.

## 6. COMPLIANCE

**Expiration:** The authorization expires "three months from the date of my signature" with an option to specify a different expiration by "date, event, or condition." A 90-day default expiration is short but not unreasonable for a general release authorization. For patient self-access requests, however, HIPAA requires providers to act within 30 days (with one 30-day extension), so a 3-month window should be sufficient for a single access request.

**Photo ID requirement:** The signature line notes "photo id may be required," which is stated as a possibility rather than an absolute requirement. This is a reasonable identity-verification measure.

**Revocation process:** Section 4 clearly explains the right to revoke in writing, with appropriate caveats about information already released — this is compliant and transparent.

**Sensitive information blanket waiver:** Section 3 states: "There are no limitations placed on dates, history of illness or diagnostic/therapeutic information, including any treatment of alcohol use/abuse, drug use/abuse, HIV-AIDS, mental health, behavioral or psychiatric treatment." The signer must initial this clause. This is an all-or-nothing approach for sensitive categories — the patient can either initial it (releasing everything) or "qualify above" (presumably narrowing the scope in section 2). This bundling of all sensitive categories into a single initial is a concern, as 42 CFR Part 2 requires specific consent for substance abuse records.

**Authority documentation:** For minors or representatives, the form requires: "Attach Document to Prove Authority to Act on behalf of Patient." This is reasonable.

**Photocopies accepted:** Section 7 explicitly states a photocopy is acceptable as an original — a practical accommodation.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Sensitive information all-or-nothing bundling:** Section 3 bundles alcohol/drug abuse, HIV-AIDS, mental health, and psychiatric treatment into a single initial. While it offers the option to "qualify above," the default framing pressures patients to release all sensitive categories at once. This is particularly concerning given that the form itself cites 42 CFR Part 2 protections for substance abuse records, which require specific informed consent for each disclosure.

### ⚠️ AMBIGUITIES

- **Patient self-access is not clearly supported.** The form asks the patient to name a recipient to "release my information to," which doesn't map cleanly to "give me my own records." A patient must infer they should write their own name and address.
- **"Qualify above" is undefined.** Section 3 says the signer can "Or qualify above" instead of initialing the blanket sensitive-information release, but does not explain what qualifying means or where to write those qualifications.
- **Delivery format is unaddressed on the form.** The website reportedly offers format options (paper, email, CD, fax), but the form itself has no field for specifying preferred delivery format. This creates a gap between what the website promises and what the form captures.

### ❌ ERRORS

- **Stale document.** The form was last updated 5/5/2016 — nearly 10 years old at the time of this evaluation. The WordPress upload path (`/2017/11/`) suggests it was posted in November 2017. Regulatory guidance and best practices have evolved since then.
- **Misapplied citation:** 45 CFR 164.524 (the HIPAA Right of Access rule) is cited in the context of redisclosure prohibition: "Except as provided under Federal Law 45 CFR 164.524, this information has been disclosed from records whose confidentiality is protected by Federal Law 42 CFR Part 2." This citation appears in a sentence about 42 CFR Part 2 redisclosure restrictions, where 164.524 is not the typical exception mechanism — the standard redisclosure prohibition language for Part 2 records references 42 CFR Part 2 itself, not HIPAA's access provision. This may confuse patients or legal reviewers.

### ✨ BRIGHT SPOTS

- **Excellent findability.** A single search or one click from a clearly-labeled Medical Records page. No barriers, no portal login, no CAPTCHAs.
- **Comprehensive record-type granularity.** Twelve specific record categories plus "Other" and date-range fields give patients meaningful control over scope.
- **Photocopies explicitly accepted.** Section 7's acceptance of photocopies as originals removes a common friction point.
- **Compact single-page design.** Despite covering authorization, scope, revocation, rights, and redisclosure, the form fits on one page — reducing patient burden compared to multi-page forms.
