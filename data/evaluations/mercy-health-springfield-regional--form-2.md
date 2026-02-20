# Evaluation: Mercy Health - Springfield Regional Medical Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

Form-2 is titled **"AUTHORIZATION FOR RELEASE OF PROTECTED HEALTH INFORMATION"** (form number MHP 0782 Rev 1/19). It is a **Youngstown-region** variant of the Bon Secours Mercy Health ROI form, listing three facilities: "St. Elizabeth Boardman Hospital," "St. Elizabeth Youngstown Hospital," and "St. Joseph Warren Hospital." It does **not** list Springfield Regional Medical Center.

This form is one of four documents retrieved for this organization. The set includes:
- **form-1.pdf**: A patient-access-specific form from mercy.net (a *different* Mercy system based in Missouri — not the Ohio Bon Secours Mercy Health system)
- **form-2.pdf** (this document): Youngstown-region ROI authorization from the correct parent system (mercy.com)
- **form-3.pdf**: System-wide ROI form, but an image-only scan with virtually no extractable text (46 chars)
- **form-4.pdf**: Springfield-specific ROI authorization (MHP 0785), the most relevant form — nearly identical in structure to form-2 but listing Springfield Regional Medical Center and Urbana Hospital

Form-2 and form-4 are clearly siblings — same template, same form structure, same legal language, differing only in facility names and form numbers (MHP 0782 vs. MHP 0785). This document is **not directly relevant** to Springfield Regional Medical Center but reveals how the parent system manages region-specific variants.

## 2. FINDABILITY

This form was found via web search for `site:mercy.com "authorization" "release of information" filetype:pdf`. Its URL (`https://www.mercy.com/-/media/mercy/patient-resources/medical-records-requests/youngstown.ashx`) follows a predictable pattern that also revealed the Springfield variant at `.../springfield.ashx`.

The form is **not directly linked** from the main medical records page at `https://www.mercy.com/patient-resources/medical-record-requests`. That page links only to the system-wide image-only version (form-3). A Springfield patient would have no reason to find or use this Youngstown form unless they happened to discover the URL naming pattern. The Youngstown form itself is presumably linked from a Youngstown-specific medical records page, but it was not found through standard navigation from the Springfield facility page.

Findability of this specific form for a Springfield patient is essentially zero — it's the wrong region's form. However, it demonstrates that text-based, region-specific forms exist within the system, even though the website surfaces only the inferior image-only scan.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Yes — full text is extractable (5,146 characters). This is markedly superior to the system-wide form-3, which is an image-only scan.

**Fillable fields**: Zero. Despite having checkboxes for facility selection, record types, format preferences, and delivery methods, none are interactive PDF form fields. All fields are static text with blank lines (e.g., `Patient name:` followed by whitespace). The checkboxes are rendered as static text characters, not interactive elements.

**File size**: 200,918 bytes (201 KB) for a single page with no embedded images and 10 fonts. This is reasonable but slightly large for a text-only single page.

**Digital design**: The form reads as a digitally typeset document (not a scan), with clean font rendering and consistent layout. However, the lack of fillable fields means it must be printed, filled by hand, and then submitted — undermining its digital availability.

## 4. CONTENT DESIGN

**Length**: 1 page. Compact and efficient for the amount of information covered.

**Organization**: The form follows a logical flow: patient demographics → facility selection → date range → record types → recipient → format → delivery method → legal disclosures → signature. This sequence mirrors how a patient would think through the request.

**Record type granularity**: The form provides 11 specific record-type checkboxes including "Abstract of record (Discharge Summary, H&P, Operative Records, Consults, Test Results….)," "Office Visit," "Emergency Department record," "History & Physical," "Discharge Summary," "Immunization record," "Test results (Lab, Pathology, Radiology, and Cardiac)," "Therapy Notes," "Operative record," "Itemized Bills," and "Other (Images, Photos)." There is also an "Entire record" option with a note: "standard two years of information, unless otherwise specified."

**Clarity**: The header warning — "Complete all sections entirely. If this authorization is not complete, it may be returned and result in delay in processing" — is useful but mildly threatening. The legal section uses dense paragraph text with bullet points, which is harder to read than the structured upper portion. Language like "This does not apply to Treatment, Operations or Payment disclosures to insurance companies when the law gives the right to the insurers to contest a claim under policy" is complex legalese.

**Layout**: The single-page design keeps things concise, but the legal disclosures at the bottom are compressed into small-font dense paragraphs. The upper form fields use adequate spacing.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party**: The form serves both purposes — it offers a "Self" checkbox alongside an "OR Name: ___" field for third-party recipients. The title ("Authorization for Release") and the structure lean toward third-party release, but self-request is accommodated. The "Purpose for disclosure" line includes the parenthetical "(Continuation of care, Insurance, Legal, Please specify) – For Personal use if not otherwise stated," which defaults to personal use — a patient-friendly default.

**Format options**: The form offers "Paper or Electronic (PDF/CD)" with the note "PDF/CD default if not specified." Defaulting to electronic is a positive design choice.

**Delivery methods**: Four options — mail, fax, MyChart, and secure email. The form notes for fax: "page limitation may apply." For email, it includes a liability disclaimer: "I acknowledge the risks associated with information sent via email that is not secure and Mercy Health is not liable for disclosures misdirected or intercepted in transmission."

**HIPAA Right of Access**: The legal section explicitly references "the United States Code of Federal Regulations at section 164.524," directly citing the patient's right to inspect or copy their information.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

**Sensitive information**: The form acknowledges that records "may contain information regarding physical and mental illness, HIV test results or diagnosis, treatment of AIDS/AIDS related conditions, sexually transmitted diseases and/or alcohol/drug abuse." It carves out psychotherapy notes and substance abuse disorder notes, stating they require separate authorization.

## 6. COMPLIANCE

**Photo ID requirement**: The header states "Photo ID required at the time of request." This could create a barrier for patients submitting by mail or fax, as it's unclear how photo ID would be verified for remote submissions.

**Expiration**: "This authorization will expire one year from date for Ohio & Kentucky and 60 days from date for Michigan." The multi-state expiration is appropriate for the system's geographic footprint.

**Revocation**: Patients are informed they can revoke authorization "in writing via mail or faxing to the location the authorization was submitted to." This is standard.

**Fees**: "There may be a charge for copies of records." No specifics on amounts, which creates ambiguity but avoids sticker shock.

**"Entire record" default limitation**: The "Entire record" option states "standard two years of information, unless otherwise specified." This imposes a default time limitation that patients may not notice, potentially resulting in incomplete records if the patient doesn't explicitly specify a broader date range.

**In-house records caveat**: "I understand if I am requesting my information while I am In House/Admitted or receiving on-going services, my record may not be complete and I will need to request after services are completed and finalized." This is a practical notice, though it could discourage timely requests.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Photo ID requirement with ambiguous enforcement**: The form states "Photo ID required at the time of request" in the header, but it's unclear how this applies to fax, mail, or email submissions. HIPAA does not require photo identification for patient access requests; identity verification can be accomplished through other means. This blanket requirement could deter patients who lack photo ID or who submit remotely.

- **Two-year default for "Entire record"**: The text "standard two years of information, unless otherwise specified" under the "Entire record" checkbox may cause patients to unknowingly receive only partial records. HIPAA's Right of Access applies to all records in a designated record set, not just the most recent two years.

### ⚠️ AMBIGUITIES

- **Wrong region for this facility**: This is the Youngstown form (MHP 0782) being evaluated in the context of Springfield Regional Medical Center. A Springfield patient who somehow obtained this form would find it lists only Youngstown-area facilities (St. Elizabeth Boardman, St. Elizabeth Youngstown, St. Joseph Warren) — with no option for Springfield Regional. The "Other Healthcare Provider" write-in line could theoretically be used, but this creates unnecessary confusion.

- **Fee ambiguity**: "There may be a charge for copies of records" provides no guidance on amounts or HIPAA's cost-based fee limitations under 45 CFR § 164.524(c)(4).

- **"Page limitation may apply" for fax**: No specifics on what the page limit is, which could result in incomplete records being delivered via fax without the patient's knowledge.

### ✨ BRIGHT SPOTS

- **Electronic format as default**: "PDF/CD default if not specified" is an unusually patient-friendly design choice that nudges toward electronic delivery rather than paper.

- **Personal use as default purpose**: The parenthetical "For Personal use if not otherwise stated" means patients requesting their own records don't need to justify the purpose, aligning with HIPAA's principle that patients need not state a reason for access requests.

- **Explicit 45 CFR § 164.524 citation**: The form directly references the federal regulation governing patient access rights, which is uncommon and demonstrates awareness of the legal framework.

- **MyChart as a delivery option**: Including patient portal delivery alongside mail, fax, and email gives patients a secure digital channel.
