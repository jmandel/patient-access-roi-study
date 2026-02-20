# Evaluation: AdventHealth Hendersonville — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

Form-3.pdf is an **"Authorization for Use and/or Disclosure and Request for Access to Protected Health Information Form"** from **Florida Hospital Heartland Division**, located at 4200 Sun n' Lake Blvd., Sebring, FL 33871. This is a completely different facility from AdventHealth Hendersonville (Hendersonville, NC). The form surfaced in web search results because both facilities fall under the AdventHealth (formerly Adventist Health System) corporate umbrella, and the PDF is hosted on adventhealth.com at `assets/WAU_FH-Records-Request-Form.pdf`.

Among the three forms retrieved for this organization, none are specific to AdventHealth Hendersonville:
- **Form-1** (Patient Request for Access) and **Form-2** (Authorization for Release of Information) both belong to St. Luke's Hospital in Columbus, NC — a sister facility ~40 miles away.
- **Form-3** (this document) belongs to an entirely different state (Florida).

AdventHealth Hendersonville itself does not publish a downloadable PDF authorization form. Its medical records page directs patients to a **Swellbox/Datavant online eRequest wizard** instead.

## 2. FINDABILITY

This form was found via web search queries for AdventHealth authorization/release forms, but it is **not relevant to AdventHealth Hendersonville**. The URL (`WAU_FH-Records-Request-Form.pdf`) uses a cryptic prefix ("WAU_FH") that gives no indication it belongs to Florida Hospital Heartland Division rather than a North Carolina facility. A patient searching for an AdventHealth Hendersonville ROI form would encounter this document as a false positive — it shares the same adventhealth.com domain but references a facility 700+ miles away in a different state. There is no obvious navigation path from the AdventHealth Hendersonville medical records page to this PDF; it appears to be an orphaned asset on the adventhealth.com domain.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text (3,400 characters) is extractable via pdftotext.
- **Fillable fields**: Zero. The form has no interactive form fields despite having designated blanks for patient name, address, dates, checkboxes, etc. All checkboxes appear as the Unicode character "¨" in the extracted text, suggesting they are static text representations rather than interactive elements.
- **File size**: 82,773 bytes (83 KB) for a single page with no embedded images — moderately sized.
- **Font count**: 6 fonts.
- **Digital design**: This is a digitally-composed PDF (not a scan), but it is designed as a print-and-fill form. The lack of any fillable fields means patients must print, hand-fill, and return it physically.

## 4. CONTENT DESIGN

**Length**: 1 page. Given the amount of content packed onto it (patient demographics, authorization directions, record type checkboxes, legal disclosures, signature blocks, and a footnote), the form is dense but concise.

**Organization**: The form has a logical top-to-bottom flow: patient identification → disclosure direction → record types requested → reason for request → legal rights → signature. However, the layout tries to accomplish too much on a single page. The record type section is split across multiple departments ("Forward to Health Information Management," "Forward to Patient Business Office," "Forward to Cardiology Dept," "Forward to Radiology Dept"), which fragments the user's attention.

**Clarity**: The legal language section is relatively readable. Key rights statements use "I understand that..." phrasing, which is better than pure legalese. However, some statements are dense — e.g., "I understand that the revocation will not apply to my insurance company when the law provides my insurer with the right to contest a claim under my policy" packs a complex legal concept into a single sentence.

**Delivery options**: Limited to "Pick Up," "Mail," or "Other" — no electronic delivery option (no email, no CD, no portal). This is notably less patient-friendly than form-1.pdf (St. Luke's), which offers CD, flash drive, email, and paper copy.

**Record type granularity**: The form offers reasonable granularity with checkboxes for Abstract, Discharge Summary, Operative Report, Emergency Room Report, Pathology Report, History & Physical, Laboratory Report, Radiology Report, Consultation, and an "Other" option. A footnote helpfully defines "Abstract" as consisting of "facesheet, history & physical, consults, operative notes, emergency record, lab, radiology, EKG reports, pathology, physical therapy and rehab. (if available)."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form title references both "Disclosure" and "Request for Access," but the form body is structured primarily as a third-party disclosure form. The "Reason for requesting information" checkboxes include "Personal," "Legal," "Insurance," and "Continued Care" — the "Personal" option could serve as a patient access mechanism, but the form does not distinguish between patient self-access and third-party release workflows.

**Scope options**: Patients can specify admission/discharge dates, select specific record types via checkboxes, and choose between several departments. Date range selection is supported.

**Format/delivery options**: Very limited — only "Pick Up," "Mail," or unspecified "Other." No electronic delivery (email, CD, portal, secure download). This is a significant gap for modern patient access expectations.

**HIPAA Right of Access**: The form does reference the right to access: "I understand that I may inspect or obtain a copy of the information to be used or disclosed, as provided in CFR 164.524." This is a direct citation to the HIPAA Right of Access provision, which is good. However, the citation format is incomplete — it should read "45 CFR § 164.524."

**EHI Export**: No mention of electronic health information export or bulk data access.

**Fee disclosure**: The form states "Requests may be subject to copying fee" — vague but present.

## 6. COMPLIANCE

**Expiration**: The form has a **90-day expiration**, which is notably short. The form states: "Unless otherwise revoked, this authorization will expire on the following date, event or condition (not to exceed 90 days)." If no date is specified, it defaults to 90 days. For a patient access request under HIPAA § 164.524, a 90-day cap on authorization duration is unusual — HIPAA does not impose such limits on patient access authorizations, and this appears to be a state-influenced or organization-imposed restriction.

**Voluntary authorization**: The form correctly states: "I understand that authorizing the disclosure of this health information is voluntary. I can refuse to sign this authorization. I need not sign this form in order to assure treatment."

**Revocation rights**: Clear instructions on how to revoke: "I understand that if I revoke this authorization I must do so in writing and present my written revocation to the Health Information Management Department."

**Re-disclosure warning**: Present: "I understand that any disclosure of information carries with it the potential for an unauthorized re-disclosure and the information may not be protected by Federal confidentiality rules."

**SSN collection**: The form requests "SS#" (Social Security Number), which is not required by HIPAA for records access and raises privacy concerns. This is an unnecessary data collection point.

**Sensitive information acknowledgment**: The form includes a bolded paragraph noting that health records "may include psychiatric, alcohol or drug abuse/testing information" and "information relating to AIDS, HIV, and/or sexually transmitted disease." However, unlike form-2.pdf (St. Luke's), this form does not provide separate opt-in checkboxes for sensitive categories — it is an all-or-nothing acknowledgment.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Wrong facility entirely**: This form belongs to Florida Hospital Heartland Division in Sebring, FL, not AdventHealth Hendersonville in NC. A patient who downloads and completes this form would be submitting it to the wrong organization in the wrong state. The form's presence on adventhealth.com without clear facility-specific labeling in the URL creates a real risk of patient confusion.
- **90-day authorization cap**: The hard cap of "not to exceed 90 days" is unusually restrictive and potentially problematic for patient access requests, which should not require time-limited authorizations under HIPAA's Right of Access.
- **SSN collection**: The form requests full Social Security Number ("SS#"), which is not required for records access and creates unnecessary privacy risk.

### ⚠️ AMBIGUITIES

- **Dual-purpose form confusion**: The title references both "Use and/or Disclosure" and "Request for Access," but the form body does not clearly distinguish between these legally distinct concepts. A patient requesting their own records under HIPAA § 164.524 faces different rules than a third-party disclosure under § 164.508.
- **"Other" delivery option**: The "Other" checkbox under delivery methods is undefined — it's unclear whether this could include electronic delivery, fax, or other methods.
- **Incomplete CFR citation**: The form references "CFR 164.524" without the full citation "45 CFR § 164.524," which could make it harder for patients to look up their rights.

### ❌ ERRORS

- **Outdated branding**: The form still uses "Florida Hospital" branding. Adventist Health System rebranded all "Florida Hospital" facilities to "AdventHealth" in January 2019. This form predates the rebrand and has not been updated, suggesting it is at least 7 years old.
- **Checkbox rendering**: Checkboxes appear as "¨" (diaeresis character) in the text layer rather than proper checkbox glyphs, indicating a font encoding issue in the PDF.

### ✨ BRIGHT SPOTS

- **Abstract definition footnote**: The footnote defining what constitutes an "Abstract" ("facesheet, history & physical, consults, operative notes, emergency record, lab, radiology, EKG reports, pathology, physical therapy and rehab") is helpful transparency that most forms lack.
- **CFR 164.524 reference**: Despite the incomplete citation format, the explicit mention of the HIPAA Right of Access regulation is more than most ROI forms provide.
