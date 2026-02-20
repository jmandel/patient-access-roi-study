# Evaluation: Decatur County Hospital — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a single-page authorization form titled **"Authorization for Access, Use or Disclosure of Protected Health Information"**, form number DCH-#0001, last reviewed 3/2018. It is the only ROI-related form found for this organization. The form serves a dual purpose: it covers both patient access to their own records ("Allow access, use or disclosure of my protected health information to") and incoming/outgoing third-party releases ("obtain from"), with these two options presented as an "OR" on the same form. There are no separate patient-access-specific forms, no supplemental instruction sheets, and no additional documents found for Decatur County Hospital.

## 2. FINDABILITY

The form was **easy to locate**. Per the retrieval notes, a site-scoped search (`site:decaturcountyhospital.org authorization release medical records`) was successful after two broader searches yielded no results. The form is linked from the Patient Portal page at `https://www.decaturcountyhospital.org/resources/patient-portal/` and is also directly accessible via a WordPress uploads URL. The URL itself is reasonably descriptive: `0001-Auth-for-Access-Use-or-Disclosure-of-PHI.pdf`. No difficulties were encountered — no bot blocking, no portal login required to access the form.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and fully extractable. The full text runs 3,851 characters, and all content is machine-readable — not an image-only scan.

**Fillable fields**: The form has **61 fillable AcroForm fields**, which is impressively comprehensive for a single-page form. This indicates nearly every blank — patient demographics, recipient information, record type checkboxes, purpose checkboxes, sensitive-records initials, fee agreement, signature, and date fields — is interactive. However, the `fillable_field_names` array is empty, suggesting fields lack accessible names, which would hinder screen reader usability.

**Format**: PDF 1.6, created with "Acrobat PDFMaker 25 for Word" — a digital-first document, not a scan. File size is 167 KB, reasonable for a single-page form with 2 embedded images (likely a logo and/or letterhead). Only 2 fonts are used, keeping rendering simple.

**Digital-first design**: This is clearly designed as a fillable digital document. The Word-to-PDF pipeline and AcroForm fields confirm it was intended for electronic completion.

## 4. CONTENT DESIGN

**Length**: One page. This is admirably compact given the amount of content it covers — patient demographics, record types, purpose, sensitive-records authorization, fee disclosure, conditioning prohibition, re-disclosure notice, expiration, and revocation instructions all fit on a single page.

**Clarity**: The language is a mix of plain instructions and legal/regulatory text. The first half (patient info, record selection, purpose) uses straightforward language. The second half becomes dense, especially the re-disclosure paragraph: *"However, Federal Law (42 CFR Part 2) for Alcohol/Drug abuse, and State Law (Iowa Code ch. 228 & 141) for Mental Health, and HIV/AIDS treatment, prohibit information disclosed from records protected by these laws from being re-disclosed, even to the patient, without the specific written consent of the patient or as otherwise permitted by such law and/or regulations."* This 60+ word sentence would challenge most patients.

**Organization**: Logically sequenced — patient identity → recipient/sender → dates of service → record types → purpose → sensitive records → fees → legal notices → signature. The flow follows the natural order a patient would think through.

**Layout**: Fitting all of this on one page likely makes the form visually dense. With 61 fields, 12+ record-type checkboxes, 6 purpose options, 3 sensitive-record categories, and multiple paragraphs of legal text on a single page, readability likely suffers from tight spacing.

**Record types offered**: Discharge Summary, History & Physical, Consultation Report, Radiology Report/IMD/CD of films, PT/OT/ST Eval/Notes, Photographs, Emergency Room Note, EKG, Progress Notes, Operation Report, Pathology Report, Laboratory Results, and Other — a thorough 13-category list with an open "Other" option. Also includes a "Review only" option.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form conflates both use cases into a single document. The opening reads *"I, the undersigned authorize and request Decatur County Hospital to: Allow access, use or disclosure of my protected health information to: OR obtain from:"* — the patient can use it to request their own records or authorize a third-party release. While functional, this dual-purpose design means a patient simply wanting their own records must navigate release-oriented language and fields (recipient address, fax number) that don't apply to their situation.

**Scope options**: Good granularity. Patients can specify dates of service, choose from 13 specific record categories, and select "Other" for anything not listed. The "Review only" checkbox is a thoughtful addition for patients who want to inspect records without requesting copies.

**Delivery format options**: **None specified.** The form has no checkboxes or fields for requesting electronic delivery, mail, fax, or in-person pickup. There is no mention of electronic health information export or any digital delivery pathway. For a patient exercising their HIPAA right of access, the absence of format/delivery options is a notable gap.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or the patient's right of access. It does reference HIPAA generally in the re-disclosure paragraph ("federal privacy law (also known as HIPAA)") and includes a "Prohibition on Conditioning of Authorization" section that mirrors 45 CFR § 164.508 language about not conditioning treatment on authorization. However, these references relate to authorization requirements, not the patient's affirmative right to access their records.

**Fee disclosure**: The form states *"Decatur County Hospital may impose a fee of [blank] to cover the cost of labor, copying, postage, and preparing a summary of the requested information."* The fee amount is left blank, with a Yes/No agreement question. The listed cost components ("labor, copying, postage, and preparing a summary") generally align with HIPAA allowable cost-based fees, though including "labor" as a separate item could be read broadly.

**Sensitive records**: Requires separate initials for Drugs/alcohol, Mental Health, and HIV/AIDS records, which is appropriate under 42 CFR Part 2 and Iowa Code ch. 228 & 141.

## 6. COMPLIANCE

**Expiration**: The form states authorization is *"effective until (day, month, year) or expiration of event... but no longer than 1 year from the date on which it is signed."* A 1-year maximum is standard and reasonable.

**Revocation**: Clear instructions provided: *"I may revoke this authorization at any time by notifying Decatur County Hospital in writing by sending a letter to Decatur County Hospital, Medical Records Department, 1405 NW Church Street, Leon, IA 50144 or completing the Revocation for Authorization form."* This provides a mailing address and mentions an alternative revocation form — both appropriate.

**Conditioning prohibition**: The form explicitly states DCH *"will not condition treatment on your signing this authorization"* with two noted exceptions (research-related treatment and employer-required exams). This is compliant with HIPAA requirements.

**SSN collection**: The form requests "Social Security #" as part of patient demographics. Collecting SSNs on an ROI form is not required by HIPAA and creates unnecessary data exposure risk.

**Witness requirement**: The form includes a "Witness/Received by" field in the office-use section. While this appears to be for staff processing rather than a patient-side witness requirement, it's ambiguous.

**Re-disclosure language**: The form includes a blanket statement that *"information used and/or disclosed according to this authorization may no longer be protected by federal privacy law"* before carving out 42 CFR Part 2 and state-law protections. This re-disclosure warning is appropriate but somewhat alarming when read by a patient requesting their own records — it implies their records lose protection simply by being released to them.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Social Security Number requested**: The form includes a "Social Security #" field. HIPAA does not require SSNs for record access requests, and collecting them on a form that could be faxed, mailed, or emailed creates significant identity-theft risk. A medical record number (which the form also includes, for "office use only") is sufficient for patient identification.

- **Fee amount left blank**: The fee disclosure states DCH "may impose a fee of [blank]" without specifying an amount or citing a fee schedule. This open-ended fee structure gives the patient no ability to anticipate costs before agreeing. The Yes/No question asks patients to agree to unknown fees as a condition of the request.

### ⚠️ AMBIGUITIES

- **No delivery method specified**: The form lacks any field or instruction for how records will be delivered (mail, fax, electronic, in-person pickup). A patient has no way to request their preferred format, and HIPAA § 164.524(c)(2)(i) requires covered entities to provide records in the form and format requested if readily producible.

- **"Review only" option unclear**: The form includes a "Review only" checkbox alongside the record-type checkboxes, but doesn't explain what this means procedurally — whether the patient must come in person, whether there's a fee for review-only, or how this differs from requesting copies.

- **"This Authorization is binding" language**: The statement that authorization provisions *"take precedence over statements made in the Decatur County Hospital's Notice of Privacy Practices"* is confusing and potentially misleading. A patient's authorization to release records cannot override their rights under the NPP; this language could be read to suggest the patient is waiving protections.

### ❌ ERRORS

- **Last reviewed 3/2018**: The form hasn't been updated in nearly 8 years. Given that HIPAA regulations, state laws, and best practices around electronic access have evolved since 2018 (including the 21st Century Cures Act information blocking rules effective 2021), this form is significantly outdated.

- **Fillable field names empty**: Despite having 61 AcroForm fields, none have accessible names in the metadata. This is a PDF accessibility defect that would make the form difficult to use with screen readers or assistive technology.

### ✨ BRIGHT SPOTS

- **Comprehensive record-type granularity**: The form offers 13 specific record categories plus "Other" and a "Review only" option — more granular than many forms that simply offer "entire medical record" as the only choice. This gives patients meaningful control over the scope of their request.

- **Conditioning prohibition included**: The explicit statement that treatment will not be conditioned on signing the authorization, with appropriate exceptions noted, is a patient-protective disclosure that many forms omit entirely.

- **Revocation instructions with mailing address**: Providing the specific mailing address and mentioning a dedicated revocation form makes it practical for patients to exercise their right to revoke authorization, rather than leaving them to figure out how.
