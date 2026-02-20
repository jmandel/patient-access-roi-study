# Evaluation: AdventHealth Hendersonville — form-2.pdf

**Document**: `form-2.pdf` (36,287 bytes, 1 page)
**Source URL**: `https://www.adventhealth.com/sites/default/files/assets/slh_form_medicalrecords_releaseofinformation.pdf`
**Organization under study**: AdventHealth Hendersonville (Hendersonville, NC)
**Actual facility on form**: St. Luke's Hospital (Columbus, NC 28722)

---

## 1. DOCUMENT IDENTIFICATION

This is a general **Authorization for Release of Information** form — a third-party release authorization, not a patient access request form. The form header reads "St. Luke's Hospital / Authorization for Release of Information" and is structured around disclosing records *from* one facility *to* another party.

This is one of three PDFs downloaded for AdventHealth Hendersonville. Critically, **none of the three forms actually belong to AdventHealth Hendersonville**:

- **form-1.pdf**: "Patient Request for Access" — from St. Luke's Hospital, Columbus, NC (sister facility ~40 miles away). This is the patient-access-specific counterpart.
- **form-2.pdf** (this document): "Authorization for Release of Information" — also from St. Luke's Hospital. General third-party release.
- **form-3.pdf**: "Authorization for Use and/or Disclosure" — from Florida Hospital Heartland Division, Sebring, FL. Completely different state and facility.

AdventHealth Hendersonville itself does not publish a downloadable PDF ROI form. It directs patients to an online Swellbox/Datavant eRequest wizard instead. This form was found hosted on the adventhealth.com domain and appeared in search results, but it belongs to a sister facility with pre-rebrand branding ("St. Luke's Hospital" rather than "AdventHealth").

## 2. FINDABILITY

This form is **not discoverable through the AdventHealth Hendersonville website**. The medical records page at `adventhealth.com/hospital/adventhealth-hendersonville/medical-records` does not link to this PDF. The notes document that the retrieval agent:

- Searched multiple query variations including `AdventHealth Hendersonville "authorization" "release" "health information" form PDF` and others
- Navigated the website and found only a Swellbox eRequest link for Hendersonville
- Found this PDF only because it was hosted on the adventhealth.com domain under `/sites/default/files/assets/slh_form_medicalrecords_releaseofinformation.pdf` — the `slh_` prefix identifies it as St. Luke's Hospital's form

The filename (`slh_form_medicalrecords_releaseofinformation.pdf`) is descriptive but clearly signals this is not a Hendersonville form. A patient searching specifically for AdventHealth Hendersonville's ROI form would not find this document through normal website navigation.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present — full text is extractable (5,025 characters). The document is not a scan.

**Fillable fields**: Zero. The form has blank lines for handwritten entries (e.g., `Patient Name: ____________________________________________`). All checkboxes are represented as text characters, not interactive form elements. This is a flat, print-oriented PDF.

**File format**: Small (36 KB), 1 page, 6 fonts, 1 embedded image (likely a logo). Reasonable file size for the content.

**Digital-first design**: No. This is designed to be printed and filled out by hand. The underscored blank lines, lack of fillable fields, and layout all indicate a paper-first workflow. There is no indication of electronic submission capability on the form itself.

## 4. CONTENT DESIGN

**Length**: 1 page. This is compact for the amount of content packed in — patient demographics, from/to fields, purpose checkboxes, record type selections (hospital and behavioral health categories), a full patient rights section, signature lines, personal representative options, and a minor consent note. The density is high.

**Clarity**: The form uses a mix of plain language and legal/regulatory terminology. The patient rights section is written at approximately a high school to college reading level. Phrases like "42 CFR Part 2" and "federal and state privacy protections" are regulatory citations that average patients may not understand, though they are contextualized in sentences.

**Organization**: The form flows in a logical top-to-bottom sequence: patient demographics → from/to → purpose → dates → record types → patient rights → signatures → administrative use. However, with everything on one page, sections blur together. There is no use of boxes, shading, or bold section headers to create visual separation between the "Release Information From" / "Release Information To" blocks and the record selection area.

**Layout**: Dense. The record type checkboxes for hospital and behavioral health are arranged in two parallel columns, which helps, but the overall form lacks breathing room. The patient rights section is a solid block of small text at the bottom.

**Record type granularity**: Good. Patients can select specific record types from two categories:
- Hospital: Hospital Summary, Discharge Summary, Emergency Record, History and Physical, Cardiac Reports/EKG, Consultation reports, Operative Reports, Laboratory reports, Radiology/X-Ray Reports, Pathology reports, Other
- Behavioral Health/Sub. Abuse: Hospital Summary, Assessments, Discharge Summary, Physician Orders, Progress notes, Medications, Lab reports, Other
- Or "Entire record (Not including psychotherapy notes)"

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general third-party release form**, not a patient access form. It uses "Release Information From" / "Release Information To" framing and lists purposes like "Legal purpose including discussions & proceedings," "Continued patient care," and "Insurance." While "Request of individual/personal" is one purpose checkbox, the form's architecture assumes a sender and receiver — not a patient requesting their own records. The companion form-1.pdf ("Patient Request for Access") from the same facility serves the patient access use case.

**Scope options**: Adequate. Patients can specify treatment date ranges and select from granular record types. They can choose "Entire record (Not including psychotherapy notes)" as a catch-all.

**Format/delivery options**: Very limited. The administrative section at the bottom offers only: "Mail," "Fax," and "Hard Copy." There is no option for electronic delivery (email, CD, patient portal, secure electronic transfer). This is a significant gap compared to form-1.pdf from the same facility, which offers CD, flash drive, email, and paper.

**Right of Access language**: The form does not reference HIPAA § 164.524 or the patient's right of access. It references privacy protections generally and mentions that the Notice of Privacy Practices is at `www.saintlukeshospital.com`.

**EHI Export**: No mention of electronic health information export or bulk data.

**SSN collection**: The form requests "Last 4 numbers of SSN" — a partial Social Security Number. While less concerning than a full SSN, this is still a sensitive identifier that is not strictly necessary for processing a records release.

## 6. COMPLIANCE

**Expiration**: "This permission expires one year after the date of my signature unless another date or event is written here." A 1-year default expiration is standard and reasonable.

**Revocation rights**: Clearly stated — "I can cancel this permission at any time. I must cancel in writing and send or deliver cancellation to releasing facility or practice named above."

**Treatment conditionality**: Correctly notes: "Refusing to sign this form will not prevent my ability to get treatment, payment, enrollment in health plan, or eligibility for benefits."

**Behavioral health/substance abuse**: The form includes a blanket release statement: "This is a full release including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2), genetic information, HIV/AIDS, and other sexually transmitted diseases." This is an opt-in consent for sensitive categories, which is appropriate — but it's presented as a monolithic statement rather than separate opt-in checkboxes for each sensitive category. A patient who wants general records released but not substance abuse records has no way to express that distinction on this form.

**Fee disclosure**: States "A fee may be charged for providing the protected health information" without specifying amounts or referencing fee limitations under HIPAA or state law.

**Minor consent**: Includes a specific note about minors who consented to their own treatment: "If minor consented for their outpatient treatment for pregnancy, sexually transmitted disease or behavioral/mental health condition without parental consent, the minor must sign this authorization." This is a legally sound provision.

**Personal representative provisions**: Lists multiple categories: Healthcare Agent/POA, Guardian, Executor/Administrator/Attorney in Fact, Spouse, Parent, Adult Child, Affidavit Next of Kin, Other. Comprehensive.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Bundled sensitive information consent**: The statement "This is a full release including information related to behavioral/mental health, drug and alcohol abuse treatment (in compliance with 42 CFR Part 2), genetic information, HIV/AIDS, and other sexually transmitted diseases" is all-or-nothing. Patients cannot opt out of releasing specific sensitive categories while authorizing release of other records. Under 42 CFR Part 2 (substance abuse records), consent must be specific and informed — a single blanket statement covering behavioral health, substance abuse, genetic information, HIV/AIDS, and STDs simultaneously risks inadequate specificity.

- **No electronic delivery option**: The only delivery methods are Mail, Fax, and Hard Copy. For a form that could be used for patient access (via the "Request of individual/personal" purpose), the absence of any electronic delivery mechanism is a significant barrier.

### ⚠️ AMBIGUITIES

- **Wrong facility branding on a system-wide site**: This form is branded "St. Luke's Hospital" but is hosted on adventhealth.com. A patient at AdventHealth Hendersonville who somehow finds this form would not know whether it's accepted at their facility. The mismatch between the hosting domain and the facility named on the form creates confusion about applicability.

- **Outdated web reference**: The form directs patients to `www.saintlukeshospital.com` for the Notice of Privacy Practices. Given that St. Luke's Hospital has been rebranded to AdventHealth, this URL may be defunct or redirect unexpectedly.

### ❌ ERRORS

- **Garbled header text**: The extracted text begins with `*1HIPAA*` / `*1HIPAA*` — this appears to be a barcode or form identifier that renders as garbled text in the PDF text layer. While not a functional error, it suggests the text layer was not carefully proofed.

### ✨ BRIGHT SPOTS

- **Comprehensive patient rights section**: The 8-point patient rights list covers revocation, scope of release, re-disclosure risk, non-conditionality of treatment, privacy practices reference, fee notice, right to a copy, and expiration — all in plain-enough language. This is more thorough than many ROI forms.

- **Detailed minor consent provisions**: The form addresses the specific scenario where a minor consented to their own treatment for sensitive conditions, correctly noting the minor must sign the authorization in that case. This level of legal precision is uncommon on single-page forms.
