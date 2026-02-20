# Evaluation: Southeast Medical Group — form-1.pdf

## Document Overview

- **Organization:** Southeast Medical Group (SEMG), Alpharetta, GA
- **Document:** MediCopy Authorization for the Release of Medical Records (2023 version)
- **Source URL:** https://www.medicopy.net/sites/default/files/2023-12/MediCopy%20MRO%20Authorization%20%28English%29.pdf
- **Pages:** 1
- **File size:** 1,393,133 bytes (~1.4 MB)
- **Fillable fields:** 0
- **Text layer:** Yes
- **Image-only scan:** No

---

## 1. DOCUMENT IDENTIFICATION

This is a **generic third-party authorization form** produced by MediCopy, a Release of Information vendor. It is titled "MediCopy Authorization for the Release of Medical Records" and is not specific to Southeast Medical Group — it is a one-size-fits-all form used across all MediCopy client facilities. The patient must fill in the "Facility Name" field themselves to indicate SEMG as the source of records.

Four documents were found in total during the retrieval process:

- **form-1.pdf** (this document): MediCopy generic ROI authorization, 2023 version — the current form SEMG patients are directed to use.
- **form-2.pdf**: An older (2020) version of the same MediCopy authorization with nearly identical content and layout.
- **form-3.pdf**: SEMG Patient Portal Proxy Authentication Form — an image-only scan for authorizing portal access delegates. Not an ROI form.
- **form-4.pdf**: SEMG Patient Registration Form (4 pages) — includes HIPAA acknowledgement and a blanket consent to release records to specialists, but is not a patient-initiated ROI form.

SEMG does not publish its own standalone ROI form. This MediCopy form is the only mechanism provided for patients to request their own medical records.

---

## 2. FINDABILITY

Locating this form requires a non-trivial multi-step journey:

1. Navigate to **mysemg.com** → Resources → Medical Records.
2. Click "Request Records," which redirects through **semg.link/med-records** to **medicopy.net/patients** — a third-party site with no SEMG branding.
3. From MediCopy's site, locate the ROI page (medicopy.net/roi) and download the PDF.

Direct web searches for SEMG-specific ROI forms return nothing. The notes document that searches including `site:mysemg.com medical records release authorization form` and `"Southeast Medical Group" authorization "release of information" filetype:pdf` failed to find any SEMG-hosted form. The SEMG website's own forms page (mysemg.com/resources/forms) lists 10 patient forms but **does not include an ROI authorization form**.

The FAQ answer "How can I get a copy of my medical record?" is relatively helpful — it says "The fastest method is clicking here" and links to MediCopy, plus provides an email address (medicalrecords@southeastmedicalgroup.com). However, a patient who bypasses the FAQ and goes directly to the forms page would never find what they need.

The URL of the form itself (on medicopy.net) is reasonably descriptive, containing "MediCopy MRO Authorization (English)" in the filename.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** The PDF has extractable text (2,280 characters), making it searchable and screen-reader-accessible in principle.

**Fillable fields:** Despite being a digital-native PDF (not a scan), the form has **zero fillable fields**. This is a significant usability gap — a patient must either print and handwrite or use PDF annotation tools to complete the form. For a document produced by a company whose entire business is health information management, the absence of interactive form fields is a notable shortcoming.

**File size:** At 1.4 MB for a single page, the file is moderately oversized — likely due to 1 embedded image (the MediCopy branding/logo) and the design layout. This is not a barrier for most users but is larger than necessary.

**Digital-first design:** The form appears to have been created digitally (not scanned), using 7 fonts and clean layout. However, the lack of fillable fields undermines any digital-first advantage. MediCopy does offer an online HelloSign-based form as an alternative, though that option lives on their website rather than being directly linked by SEMG.

---

## 4. CONTENT DESIGN

**Length:** At 1 page, the form is appropriately concise for a medical records authorization.

**Organization:** The form uses a clear top-down structure with labeled sections:
1. "Where are the records being released from?" (facility info)
2. "Tell us about the patient." (patient demographics)
3. "Where are we sending the records?" (recipient info)
4. "What would you like released?" (record type selection)
5. Exclusion options for sensitive categories
6. "Purpose of Disclosure" (reason)
7. "Delivery Method" (how to receive records)
8. Signature block with authorization language

This logical flow — from source → patient → recipient → content → purpose → delivery → consent — is well-organized and easy to follow.

**Language clarity:** The section headers use plain, conversational language: "Where are the records being released from?", "Tell us about the patient.", "Why are we sending the records?", "How would you like the records sent?" This question-based framing is more approachable than the dense legalese seen on many ROI forms.

The authorization paragraph at the bottom is denser legal text but covers the essentials: scope of authorization, 12-month validity, right to revoke, re-disclosure warning, and statement that treatment cannot be conditioned on signing. It is a single paragraph — dense but not unreasonably long.

**Layout:** The form is visually clean with distinct sections, though without being able to view the PDF rendering directly, the text extraction suggests adequate spacing. Fields use simple line/blank formats.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a **general-purpose authorization** — it does not distinguish between a patient requesting their own records (Right of Access under HIPAA § 164.524) and a third-party release. The "Where are we sending the records?" section treats the patient and any third party identically. There is no mention of HIPAA's Right of Access, 45 CFR § 164.524, or the patient's specific right to obtain their own records. The "Purpose of Disclosure" options include "Personal Use," which is the closest analog, but the form frames every request as a disclosure to a third party — even when the patient is requesting records for themselves.

**SSN collection:** The form requests the last four digits of the patient's SSN ("SSN: XXX-XX-____"). While common, collecting SSN for a records request is not required by HIPAA and creates unnecessary privacy risk.

**Scope options:** The form provides good granularity for record types: "All Records," "Office/Clinic Notes," "Operative Reports," "Psychological/Psychiatric," "Lab/Pathology Results," "Radiology Reports," "Immunization Records," "Substance Abuse," and "Last Two Years of Records," plus custom date range and "Other" options. It also offers an exclusion mechanism for sensitive categories (Substance Abuse, AIDS/HIV/STDs, Psychological/Psychiatric), which gives patients meaningful control.

**Delivery options:** Three delivery methods are offered: Email, Fax, and "Postage (additional fee applies)." Email is the most patient-friendly electronic option. Notably, the form warns of an additional fee for postal delivery but does not specify the amount. No mention is made of patient portal delivery, CD/USB, or any EHI/bulk export option.

**No mention of EHI export:** There is no reference to electronic health information export, USCDI, or any structured data format option. This is a purely document-based (records copy) form.

**Right of Access language:** The authorization paragraph states "I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization" — which references a HIPAA principle but does not frame the form as a patient right of access mechanism.

---

## 6. COMPLIANCE

**Authorization validity:** The form states "This authorization is valid for 12 months from the date of signature," which is a reasonable expiration period.

**Revocation:** The form acknowledges the right to cancel: "I understand that I may cancel this request with written notification but that it will not affect any information released prior to notification cancellation."

**Re-disclosure warning:** Present: "I understand that the information used or disclosed may be subject to re-disclosure by the recipient listed above and will no longer be protected by federal regulations."

**No-conditioning statement:** Present: "I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization."

**Fee disclosure:** The only fee reference is "(additional fee applies)" for postal delivery. No fee schedule, no mention of per-page rates, and no statement about the cost of electronic delivery. For a patient exercising their Right of Access, HIPAA limits fees to "reasonable, cost-based" amounts — the form provides no information about what fees may apply.

**Submission method:** The form does not specify how to submit it — no mailing address, fax number, email address, or online upload option is printed on the form itself. A patient who downloads this PDF in isolation would not know where to send it.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions on the form:** The form itself contains no address, fax number, email, or portal link for returning the completed authorization. A patient who downloads this PDF (e.g., from a search result or shared link) has no way to know where to send it without navigating back to the MediCopy website.
- **SSN requested without justification:** The form collects the last 4 digits of SSN ("SSN: XXX-XX-____"). HIPAA does not require SSN for records requests, and collecting it creates unnecessary identity theft risk.

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release:** The form treats all requests identically — a patient requesting their own records completes the same form as an attorney or insurer requesting records. This may lead patients to believe they need the same level of authorization (and may face the same fee structure) as third-party requestors, when HIPAA affords patients specific Right of Access protections with lower fee limits.
- **"Additional fee applies" for postage without amount:** The form notes a fee for postal delivery but does not state how much. No fee information is provided for any delivery method, leaving patients unable to make an informed choice.
- **MediCopy vs. provider relationship unclear:** The form authorizes "MediCopy and its affiliates" to release records. A patient may not understand that MediCopy is a vendor acting on behalf of their provider, not the provider itself. The form does not explain this relationship.

### ❌ ERRORS

- **Zero fillable fields in a digitally-created PDF:** The form was designed digitally (7 fonts, not a scan) but has no interactive form fields. This is a design deficiency — the form cannot be completed electronically without third-party tools, despite being presented as a downloadable digital document.

### ✨ BRIGHT SPOTS

- **Plain-language section headers:** The use of question-based headers ("Where are the records being released from?", "Tell us about the patient.", "How would you like the records sent?") is notably more approachable than the legalistic headings typical of ROI forms. This lowers the cognitive barrier for patients.
- **Sensitive record exclusion options:** The form offers patients the ability to *exclude* specific sensitive categories (Substance Abuse, AIDS/HIV/STDs, Psychological/Psychiatric) rather than only offering inclusion checkboxes. This gives patients meaningful control over what is not shared, complementing the standard inclusion checklist.
- **Electronic delivery as default-positioned option:** Email is listed first among delivery methods, ahead of fax and postal mail, subtly positioning electronic delivery as the primary option.
