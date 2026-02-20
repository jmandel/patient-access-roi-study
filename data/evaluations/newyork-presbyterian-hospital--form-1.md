# NewYork-Presbyterian Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the **"NY Consortium HIPAA Auth"** — a 2-page Tripartite ROI/HIPAA Authorization form shared across NewYork-Presbyterian Hospital, Columbia University Irving Medical Center (CUIMC), and Weill Cornell Medicine (WCM). It is the primary paper-based authorization form for the entire NYP system, covering all campuses (Allen, Lawrence, Weill Cornell, Brooklyn Methodist, Lower Manhattan, Westchester, Morgan Stanley Children's, Hudson Valley, Queens, and Gracie Square Hospital) plus affiliated outpatient/physician office practices.

The organization's medical records page also yielded two other documents: form-2.pdf (an FAQ about obtaining medical records, not an authorization form itself) and form-3.pdf (an older or campus-specific authorization form, possibly for NYP/Lawrence, with a different layout and fewer options). Form-1 is clearly the current, system-wide standard — it is the form linked from the main NYP medical records page as the "paper form" option and is labeled Rev. 10/2/2019.

NYP also offers electronic submission via the Verisma vendor portal (vra.verisma.com) and through MyChart. These digital pathways are the preferred method per the FAQ; the paper form is positioned as a fallback.

## 2. FINDABILITY

**Good.** The form was reachable from the NYP homepage in approximately 2 clicks: Home → Patients & Visitors → Medical Records (https://www.nyp.org/patients-visitors/medical-records). The medical records page is well-organized, linking to the paper authorization form, the Verisma electronic portal, and the FAQ document.

The form itself is hosted on a digital asset management (DAM) platform (nyp.widen.net), which initially served an HTML landing page with an embedded viewer rather than a direct PDF. The retrieval notes document difficulty extracting the actual PDF download URL. The URL — `https://nyp.widen.net/content/tfeix7vzfw/original/Tripartite-ROI-HIPAA-Authorization_English.pdf` — is not human-readable or guessable. This is a minor friction point but the form is ultimately accessible.

The form is available in **English, Spanish, and Chinese** — a notable accessibility feature for New York City's diverse patient population.

Web search queries for "NewYork-Presbyterian authorization release health information" readily surfaced both the medical records page and direct PDF links. The form is discoverable through standard search strategies.

## 3. TECHNICAL ACCESSIBILITY

**Strong.** Form-1 is a well-constructed digital PDF:

- **Text layer**: Present and complete. Full text of 6,085 characters is extractable, covering all labels, instructions, checkboxes, and legal language. Not an image-only scan.
- **Fillable fields**: **103 fillable form fields** — an exceptionally high count for an ROI form. This indicates a fully interactive PDF designed for on-screen completion. (Note: `fillable_field_names` is empty in metadata, but the field count alone demonstrates extensive interactivity.)
- **File size**: 141,180 bytes (~138 KB) for 2 pages — very lean. No bloat.
- **Fonts**: 5 embedded fonts.
- **Images**: 8 embedded images (likely logos/headers).
- **Digital-first design**: This is clearly a born-digital document, not a scan. The combination of extractable text, 103 fillable fields, and clean layout confirms it was designed for electronic use.

The form is a model of technical accessibility for a PDF-based authorization form. The only gap is that it remains a downloadable PDF rather than a native web form, but the Verisma portal fills that role for patients who prefer fully online submission.

## 4. CONTENT DESIGN

**Well-organized and reasonably clear.** The 2-page form follows a logical top-to-bottom flow:

1. **PATIENT** section — name, address, DOB, phone, fax, email
2. **RECIPIENT** section — with a "check if same as above" shortcut
3. **REQUEST REASON** — 7 checkboxes: Life Insurance, Patient Request, Care at another facility/provider, Disability, Legal Purposes, Worker's Comp, Other
4. **DISCLOSING ENTITY** — comprehensive listing of all NYP hospital/inpatient locations (11 campuses), outpatient/physician practices (6 groups with write-in lines), and ancillary services (Radiology, Laboratory, Imaging, Dental)
5. **INFORMATION TO BE RELEASED** — date range required, with checkboxes for Entire Medical Record, Inpatient/Hospital Records, Outpatient/Provider Office Records, plus 10 specific record type options (Hospital Admission Only, ED Only, Radiology Reports, Provider Notes, Operative Reports, Ambulatory Surgery, Radiology Images, Consult Reports, Discharge Summaries, Itemized Billing, Lab Reports, Immunization List, Dental Record), plus a write-in "Other"
6. **SENSITIVE INFORMATION** — separate initials required for Alcohol/Drug, HIV/AIDS, Mental Health, Genetic Testing
7. **RELEASE METHOD** — 6 options: Paper, Fax, Email (noted as "unsecure method"), CD, Flash Drive ("if available"), Patient Portal
8. **AUTHORIZATION** — 7-point legal disclosure section plus signature/date

**Strengths:**
- The disclosing entity section is comprehensive, reflecting the complexity of a multi-campus consortium. Patients can target specific campuses or physician groups.
- Record type granularity is excellent — 10+ specific options plus "Entire Medical Record."
- Release method options are diverse, including electronic options.
- The legal authorization section is numbered and structured, not a wall of text.

**Weaknesses:**
- The form is dense. Fitting all of this onto 2 pages requires small-ish text and tight spacing, particularly in the disclosing entity section.
- The authorization language in section 4 is a long, compound sentence: "By my specifically authorizing the release of sensitive information (i.e., HIV/AIDS related alcohol or drug treatment, mental health treatment information, and genetic testing information) that the recipient is prohibited from redisclosing such information without my authorization unless permitted to do so under federal or state law." This is difficult to parse.
- Date format fields use the pattern `____/____/____` without specifying MM/DD/YYYY explicitly in the date-of-service section (though it's implicit).

## 5. PATIENT-CENTEREDNESS

**Mixed — good features but not patient-access-specific.** This is a general-purpose authorization form used for all types of disclosures, not a form tailored specifically for patients requesting their own records. Key observations:

- **Patient Request is one of 7 request reasons**, listed alongside Life Insurance, Legal Purposes, Worker's Comp, etc. A patient requesting their own records must check "Patient Request" and may then wonder whether the rest of the form (RECIPIENT section, etc.) applies the same way. The form doesn't differentiate workflow based on reason.
- **No HIPAA Right of Access language**: The form does not reference 45 CFR § 164.524 or explicitly inform patients of their right to access their records. The authorization section states "I may inspect and/or receive a copy" (item 1) and "Treatment and payment will not be conditional on whether you sign this authorization" (item 3), but these are generic HIPAA authorization statements, not patient-rights-focused.
- **Electronic delivery options exist**: Paper, Fax, Email, CD, Flash Drive, and Patient Portal are offered. The Patient Portal option notes "patients with an active account can request electronic delivery via secure web patient portal at no cost" — a helpful detail.
- **No mention of EHI Export** or bulk data download.
- **Scope options are excellent**: Date range plus granular record type selection. Patients can request specific items (e.g., "Lab Reports Only") rather than being forced to request everything.
- **Sensitive information requires separate initials** (Alcohol/Drug, HIV/AIDS, Mental Health, Genetic Testing) — this is New York state law compliance and is appropriately handled with clear instructions: "records containing sensitive information will be only released if the appropriate items are initialed."

The companion FAQ (form-2.pdf) provides more patient-friendly guidance, including information about MyChart access, a dedicated phone number (646-NYP-4ROI), and step-by-step instructions. But the authorization form itself is designed for institutional workflow rather than patient self-service.

## 6. COMPLIANCE

- **Fees**: Item 2 states "Providers are permitted to charge reasonable fees to recover costs for inspections and/or copying." This is appropriately vague per HIPAA — no specific dollar amount is quoted, and the language tracks the statutory standard. The FAQ (form-2) mentions fees but the authorization form itself doesn't create fee barriers.
- **Expiration**: Item 7 states the authorization "will expire on (enter date): ____/____/____ or 1 year after being signed." A 1-year default expiration is reasonable.
- **Revocation**: Item 6 allows revocation "at any time by providing written notice" with the standard exception for actions already taken. This is compliant.
- **Voluntariness**: Item 3 clearly states signing is voluntary and won't affect treatment or payment, but adds "if you refuse to sign NYP/CUIMC/WCM will not release your records." This is technically correct for third-party releases but could be confusing for patient-access requests, where HIPAA does not require a signed authorization — only a written request.
- **Sensitive information**: The separate-initial requirement for HIV/AIDS, mental health, alcohol/drug, and genetic testing information complies with New York Mental Hygiene Law and Public Health Law § 2782 (HIV). The form includes the required contact information for the NYS Division of Human Rights (1-888-392-3644) and NYC Commission of Human Rights ((718) 722-3131).
- **No notarization required** on this form (unlike form-3, which includes a "Witness or Notary" line).
- **No in-person requirement**: The form can presumably be mailed, faxed, or submitted via the Verisma portal.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **103 fillable fields**: This is one of the most technically capable ROI PDFs one is likely to encounter — fully interactive and designed for digital completion.
- **Multilingual availability**: English, Spanish, and Chinese versions reflect thoughtful accommodation of NYC's patient demographics.
- **Multiple electronic delivery options**: Paper, Fax, Email, CD, Flash Drive, and Patient Portal — six distinct delivery methods. The Patient Portal option specifically notes "at no cost."
- **Dedicated phone line**: 646-NYP-4ROI (646-697-4764) for help with the process, available M-F 8am-6pm (per the FAQ).
- **Granular record selection**: 10+ specific record type checkboxes plus "Entire Medical Record" and a write-in field. Patients aren't forced into all-or-nothing requests.

### ⚠️ AMBIGUITIES
- **Patient-access vs. third-party confusion**: The form serves all disclosure purposes. Item 3 states "if you refuse to sign NYP/CUIMC/WCM will not release your records" — but for patient-access requests under HIPAA § 164.524, a signed authorization is not required; only a written request is needed. Using an authorization form for patient access could create the impression that the provider can deny access if the patient doesn't sign, which is not accurate for right-of-access requests.
- **Date of service requirement**: The form states "records will not be released unless Date of Service section is complete." For a patient requesting their full longitudinal record, this requires knowing exact dates. It may deter patients who want "everything" but don't know their service dates.

### ❌ ERRORS
- **Form is dated Rev. 10/2/2019** — over 6 years old at the time of evaluation. While the content may still be accurate, the form predates the 2021 ONC Information Blocking Rule and the 21st Century Cures Act's EHI definition. No mention of electronic health information export or information blocking rights appears anywhere.
- **NYC Commission of Human Rights phone number**: The form lists (718) 722-3131, while form-3 (the older campus version) lists (212) 306-7450. At least one of these may be outdated; the current number should be verified.
