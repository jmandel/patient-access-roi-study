# Baptist Health Lexington — Form 1 Evaluation

## Document Overview

- **Organization:** Baptist Health Lexington (Lexington, KY)
- **Form Title:** Authorization for Use and/or Disclosure of Protected Health Information (PHI)
- **Source URL:** https://www.baptisthealth.com/-/media/documents/patients-and-visitors/patient-packet/medicalrecordsreleaseform2026.pdf
- **File:** form-1.pdf — 244,139 bytes, 3 pages, PDF with text layer, 0 fillable fields, 11 fonts, 2 embedded images

---

## 1. DOCUMENT IDENTIFICATION

This is a system-wide **Authorization for Use and/or Disclosure of Protected Health Information (PHI)** published by Baptist Health Kentucky, the parent system. It is not specific to Baptist Health Lexington — the same form serves all Baptist Health locations. The form is dated "Revised 02/2026," making it the current version.

Baptist Health provides three downloadable forms in total. Form-1 (this document) is the comprehensive, current authorization form. Form-2 is a simpler 1-page "Request for Medical Records" hosted on the MyChart portal, specifically aimed at patients requesting their own records (dated 7/19, i.e., July 2019). Form-3 is an older 2-page version of the same authorization form as form-1, now apparently superseded. Form-1 is the primary, most up-to-date document and serves as both a patient-access and third-party release form through a checkbox selection on page 1.

---

## 2. FINDABILITY

**Retrieval difficulty: Easy.** The form was discoverable through basic web searches such as `"Baptist Health Lexington" "authorization" "release" "health information" filetype:pdf` and through the organization's medical records information page at `https://www.baptisthealth.com/patients-visitors/after-your-visit/medical-records`. The URL is descriptive (`medicalrecordsreleaseform2026.pdf`), and no login wall or bot-blocking was encountered. The form downloaded directly via curl without issue.

However, there is no Lexington-specific form — a patient searching specifically for "Baptist Health Lexington medical records form" would need to recognize that the parent system's form applies to them. The system-level search results pointed to this form without difficulty in this case.

---

## 3. TECHNICAL ACCESSIBILITY

The form has a **text layer** (12,341 characters extracted via pdftotext) and uses 11 fonts, indicating a digitally-created document rather than a scan. It contains 2 embedded images (likely logos or graphics). However, despite being digitally authored, the form has **zero fillable fields**. All entry areas are blank lines or check-box graphics that cannot be interacted with electronically — the patient must print, fill by hand, and submit physically (via mail or fax) or scan back.

At 244 KB for 3 pages, the file size is reasonable. The form is not a scan, but it is not a digital-first design either — it is a **print-oriented PDF** that happens to have been created digitally. The checkbox graphics (☐ symbols) and underscored blank lines throughout confirm this orientation.

---

## 4. CONTENT DESIGN

**Length and structure:** The form is 3 pages. Page 1 contains patient information fields, release-to/delivery method selection, purpose of release, and record type selection. Page 2 contains the authorization/consent language and signature block, plus package descriptions. Page 3 is an informational "Tips for Requesting Medical Record Copies" page. This is a reasonable length for the scope covered.

**Organization:** The form follows a logical flow: patient info → who to release to → delivery method → purpose → what records → legal language → signature. Sections are labeled with bold headers ("Patient Info," "Release To / Delivery Method," "Purpose," "Information to Release," "Parent / Patient / Legal Guardian Authorization"). The package descriptions on page 2 are helpfully detailed.

**Clarity:** The form mixes plain language with necessary legal text. The opening sentence is clear: "By completing and signing this form, I authorize my records to be released as noted below." However, the authorization language on page 2 is dense legal text covering HIV/AIDS, substance use disorder (42 CFR Part 2), revocation rights, re-disclosure warnings, and criminal justice system disclosures. This is legally required content but could benefit from plain-language summaries.

**Layout:** The form is text-dense, particularly on page 2 where the authorization language fills the entire page in a small font. Page 1 has somewhat better spacing with checkbox lists and field lines. The page 3 tips section uses bullet points effectively with a "DID YOU KNOW?" header.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form serves both purposes through a single checkbox choice on page 1: "☐ Myself" vs. "☐ Other person/organization." This is a reasonable dual-purpose design, and the form explicitly notes that purpose of release is "not required if being disclosed directly to patient."

**Scope options:** The form offers good granularity. Patients can specify:
- **Source:** Baptist Physician Office (with provider name/address), Baptist Hospital (with location), or Home Health
- **Date range:** "From ___ to ___" with a sensible default: "if no dates are listed, default will be the past 12 months"
- **Record types:** Package 1 (Key Documentation), Package 2 (All Documentation), Billing Records, or Other (custom specification). The package descriptions are detailed and helpful.

**Delivery method options:** Five options are offered — Paper via US Mail, Fax (limited to <50 pages), Email, CD via US Mail, and MyChart. The form notes that MyChart is the default delivery if no method is specified: "records will be released to patient's Baptist Health MyChart." This is a strong digital delivery option.

**Right of Access language:** The form does not explicitly reference HIPAA § 164.524 or the patient's Right of Access. It does state "This authorization is voluntary. I understand that Baptist Health will not base treatment, payment, enrollment, or eligibility for benefits on my signing this document," which addresses unconditional right to care but doesn't educate patients about their access rights.

**EHI Export / bulk data:** No mention of electronic health information export, TEFCA, or bulk data access.

**Turnaround time:** Page 3 states "Our goal is to get you the requested records within 15 calendar days, but delays do occur." This is within HIPAA's 30-day requirement but notably frames it as a "goal" rather than a commitment.

---

## 6. COMPLIANCE

**Authorization expiration:** The form states: "This authorization will expire on ____. If no date is included, the authorization will expire one year from the date of signature." A one-year default is standard.

**Revocation:** Patients can revoke authorization in writing at any time, except for criminal justice system disclosures. This is clearly explained.

**Sensitive information:** The form includes consent for release of HIV/AIDS, mental health, and substance use disorder records within the main authorization, rather than requiring separate consent. The form states: "I also authorize release of records about my behavioral or mental health services, and regarding my substance use disorder treatment, diagnosis, and referral, if those categories are applicable to me." This is bundled into the main authorization with no opt-out for individual categories — a patient wanting general records but not substance use disorder records has no mechanism to exclude them.

**Fees:** No fees are mentioned anywhere in the form. This is appropriate for patient access requests under HIPAA, which limits charges to reasonable cost-based fees.

**Submission methods:** The form provides a mailing address (PO Box 436147, Louisville, KY 40253), phone numbers (502-253-4828, toll-free 833-998-1257), and fax (502-253-4829). There is no online/electronic submission option — the form must be printed, signed, and mailed or faxed.

**SSN collection:** The form requests "Last 4 digits of SSN" as a patient identifier. While only partial, this is not required by HIPAA for patient identification and represents an unnecessary data collection practice.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Sensitive information bundled with no opt-out:** The authorization bundles consent for mental health, HIV/AIDS, and substance use disorder records into a single, all-or-nothing authorization. A patient cannot request general medical records while withholding consent for these sensitive categories. The text "I also authorize release of records about my behavioral or mental health services, and regarding my substance use disorder treatment" is presented as a statement of fact within the authorization, not as an optional consent.

### ⚠️ AMBIGUITIES

- **"Myself" checkbox purpose is unclear for submissions:** When a patient checks "Myself," the delivery method options include MyChart, email, US Mail, fax, and CD — but it's not clear whether checking "Myself" constitutes a Right of Access request (subject to HIPAA's 30-day timeline and cost-based fee limits) or a general authorization (which has different regulatory treatment). The form title ("Authorization for Use and/or Disclosure") and the use of authorization language suggests the latter, which could allow the provider to apply different fee and timeline standards than what HIPAA Right of Access requires.
- **Date range default may surprise patients:** "If no dates are listed, default will be the past 12 months" — a patient who wants their complete record history but leaves the field blank will receive only one year of records. This default is not prominently highlighted.

### ✨ BRIGHT SPOTS

- **MyChart as default delivery method:** Page 3 states that if no delivery method is specified, "records will be released to patient's Baptist Health MyChart." This is a patient-friendly default that prioritizes electronic delivery and quick access.
- **Package descriptions are detailed and helpful:** The Key Documentation vs. All Documentation packages are clearly described, listing specific record types included in each. The "Other" option allows custom specification. This gives patients meaningful choice without requiring medical records expertise.
- **Tips page adds genuine value:** Page 3's "Tips for Requesting Medical Record Copies" section provides practical guidance on personal representatives, MyChart default delivery, turnaround time expectations, and how to locate missing records. The 15-calendar-day goal and MyChart support phone number (844-764-7820) are useful for patients.
- **Toll-free phone number provided:** Contact information includes a toll-free number (833-998-1257) in addition to a local number, reducing barriers for patients who need to call with questions.
