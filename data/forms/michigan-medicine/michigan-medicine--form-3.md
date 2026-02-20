# Evaluation: Michigan Medicine — form-3.pdf

**Organization:** Michigan Medicine - University of Michigan Health (Ann Arbor, MI)  
**Document:** form-3.pdf ("Request for Outside Records — Patient Information From Another Organization")  
**Form ID:** 70-10016, VER: A/23, HIM: 04/23  
**Pages:** 1  
**Source URL:** https://www.uofmhealth.org/sites/default/files/2025-08/release-from-other-organizations.pdf

---

## 1. DOCUMENT IDENTIFICATION

This is **not** a standard Release of Information (ROI) form for patients requesting their own records from Michigan Medicine. Instead, it is an **incoming records request** — it authorizes Michigan Medicine to *request* the patient's medical records *from another organization* on the patient's behalf. The full title is "REQUEST FOR OUTSIDE RECORDS — PATIENT INFORMATION FROM ANOTHER ORGANIZATION (Authorization to Request)."

The form's purpose is the inverse of a typical ROI: rather than releasing records Michigan Medicine already holds, it initiates a retrieval of records held elsewhere so that Michigan Medicine providers can have continuity-of-care information.

**Relationship to other forms found:**
- **form-1.pdf** (70-10015, VER: A/24) is the current, primary ROI authorization for releasing Michigan Medicine records outward. This is the form patients would use to get their own records.
- **form-2.pdf** (70-10015, VER: B/11) is an older (2011) version of the same outbound release form, still hosted on the legacy medicine.umich.edu domain.
- **form-3.pdf** (this document) serves a different function entirely and would not be used by a patient trying to obtain their own records from Michigan Medicine.

## 2. FINDABILITY

According to the retrieval notes, this form was found via web search and was directly downloadable from uofmhealth.org without bot-blocking (unlike the older form-2 on medicine.umich.edu). The URL path (`release-from-other-organizations.pdf`) is reasonably descriptive. However, a patient searching specifically for "how to get my medical records from Michigan Medicine" would likely encounter form-1 first, since form-3 serves a different purpose. There is some risk of confusion: a patient who finds this form might mistakenly believe it is the correct form for requesting their own records, since the title includes "Authorization to Request" and involves medical records.

The filename on the server (`release-from-other-organizations.pdf`) is clearer than the form-1 filename (`ROI_.pdf`), which is a point in this form's favor for administrative clarity.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present and functional. The extracted text is clean, well-structured, and preserves the logical reading order of the form. No OCR artifacts or garbled text.

**Fillable fields:** The metadata reports `fillable_field_count: 0` — the form has **no fillable/interactive PDF fields**. All fields are represented as static underlines in the text layer. A patient would need to print the form and fill it by hand, or use a PDF annotation tool. This is a significant technical limitation given that the current form-1 also reports 0 fillable fields but at least mentions electronic delivery options.

**File size:** 174,069 bytes for a single page — reasonable.

**Font count:** 8 fonts — modest, unlikely to cause rendering issues.

**Embedded images:** 2 — likely a logo and possibly a barcode/form identifier.

**Page count:** 1 page — concise.

## 4. CONTENT DESIGN

The form is organized into 6 numbered sections on a single page, which is commendably compact:

1. Authorization to release information from a named outside doctor/clinic
2. Specific information needed, with date range and record-type checkboxes
3. Purpose of release/disclosure (pre-filled: "At the request of the patient... for continuing care")
4. Authorization expiration (defaults to 6 months if blank)
5. Revocation instructions
6. Effect of release/re-disclosure warning

**Strengths:**
- The opening statement clearly states the authorization is voluntary: "I understand that Michigan Medicine (MM) will not condition treatment, payment, enrollment, or eligibility for benefits on my signing this document."
- The record-type selection is granular with 13 checkbox options (Inpatient Record, Consults, Emergency Room Record, Pathology, Outpatient Record, Treatment Summary, Entire Medical Record, X-Ray Imaging Films/CD, Operative Report, Discharge Summary, Laboratory Tests Results, X-Ray Imaging Reports, Other).
- Date range format is clearly specified as (mm/dd/yyyy).
- The form includes a cost warning for diagnostic image re-reads with an initials-required acknowledgment: "If outside records include diagnostic images... there could be additional costs not covered by insurance."

**Weaknesses:**
- The top of the form has a large "For Clinic Use Only" section that takes up valuable space and may confuse patients about what they need to fill in versus what is for staff. The staff section includes fields for "Date Request Sent," "Mailed/Faxed," "Sent by," "Information Received," and "Received by" — all administrative tracking that could be on a separate internal tracking slip.
- The form provides space for sending records to **two** UMHS doctors/clinics/units, which is helpful but unlabeled (no "Recipient 1" / "Recipient 2" distinction).
- The relationship checkboxes for authorized representative are limited to: Spouse, Parent, Next-of-Kin, Legal Guardian, DPOA for Healthcare. No "Other" option is provided.
- There are no submission instructions on the form itself — no mailing address, fax number, email, or portal reference for where to send the completed form.

**Language level:** The form uses moderately complex legal/medical language. Phrases like "legally authorized representative" and "may no longer be protected from further disclosure by federal or state privacy laws" are standard but not plain-language. There is no glossary or patient-facing explanation of terms.

## 5. PATIENT-CENTEREDNESS

This form is **not designed for a patient requesting their own records from Michigan Medicine**. It serves patients who want Michigan Medicine to pull in records from an outside provider — a fundamentally different use case.

For its intended purpose, the form is functional but bureaucratic. A patient visiting a Michigan Medicine provider who needs records from a prior provider would likely be handed this form in a clinical setting, not seek it out online.

**Notable patient-experience issues:**
- No instructions on how/where to submit the completed form. A patient filling this out independently would not know where to send it.
- No contact information (phone, email, fax, address) for Michigan Medicine's records department is printed on the form itself, unlike form-1 and form-2 which include the ROI unit's contact details.
- The form requires the patient to know the name, address, phone, and fax of the outside organization they want records from. No guidance is offered for patients who don't have this information.
- The "purpose" field is pre-specified as "At the request of the patient (or patient's legally authorized representative); for continuing care" — this is helpful in that it removes ambiguity, but it also means the form can only be used for this single purpose.
- The substance abuse records cross-reference ("To release alcohol and substance use disorder/treatment information, complete this form and Form 70-10232") is clear but adds a step.

## 6. COMPLIANCE

**Authorization expiration:** Defaults to 6 months if left blank. This is more generous than form-1's 60-day default and is a reasonable timeframe for retrieving outside records.

**Revocation rights:** Clearly stated in section 5: "I may revoke (cancel) this authorization at any time. Revocations (cancellations) must be made in writing and sent to the releasing organization." This correctly directs the revocation to the *releasing* organization (the outside provider), not Michigan Medicine.

**Voluntariness statement:** Present at top: "I understand that Michigan Medicine (MM) will not condition treatment, payment, enrollment, or eligibility for benefits on my signing this document."

**Re-disclosure warning:** Present in section 6: "Once information has been disclosed, it may no longer be protected from further disclosure by federal or state privacy laws."

**42 CFR Part 2 (substance abuse):** The form references a separate form (70-10232) for alcohol and substance use disorder records, indicating awareness of the more restrictive consent requirements for these records.

**Sensitive information categories:** The form includes a blanket statement that released records "may include: Psychological and social work counseling; HIV or AIDS or ARC; communicable disease or infections, including sexually transmitted disease, venereal disease, tuberculosis and hepatitis; and demographic information." This bundles consent for multiple sensitive categories into a single authorization rather than allowing granular opt-in/opt-out per category.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **No submission instructions:** The form lacks any indication of where patients should send the completed form — no mailing address, fax number, phone number, or email for the Michigan Medicine records department. Form-1 and form-2 both prominently list the ROI Unit's contact information. A patient attempting to use this form independently would be stuck.
- **"UMHS MRN" field vs. "Michigan Medicine" branding:** The form header says "MICHIGAN MEDICINE" but the patient information section still asks for "UMHS MRN" (University of Michigan Health System Medical Record Number). This mixed branding could confuse patients unfamiliar with the name change.
- **Initials required for imaging cost warning but context unclear:** The form states "If outside records include diagnostic images (MRI, CT Scan, etc.) and a Michigan Medicine physician is required to 'Re-Read' the image(s), there could be additional costs not covered by insurance. ________(Initials Required)." It's unclear when a re-read would be required, who makes that decision, or what the potential costs are. Patients are asked to initial acknowledgment of a vague financial risk.

### ❌ ERRORS

- **No fillable fields despite being a current (2023) form:** The metadata confirms `fillable_field_count: 0`. For a form last versioned in April 2023 from a major academic medical center, the lack of any interactive PDF fields is a notable technical shortcoming — especially given that the form is hosted for online download.

### ✨ BRIGHT SPOTS

- **Single-page design:** The entire authorization fits on one page, which is significantly more compact than the 2-3 page form-1. For a supporting/ancillary form, this brevity is appropriate.
- **Pre-defined purpose:** Section 3 pre-fills the purpose as "At the request of the patient... for continuing care," eliminating a common source of patient confusion on ROI forms where patients must articulate why they want their records.
- **Clear substance abuse cross-reference:** The explicit callout to Form 70-10232 for alcohol/substance use disorder records demonstrates compliance awareness and gives patients a clear path rather than silently excluding those records.
