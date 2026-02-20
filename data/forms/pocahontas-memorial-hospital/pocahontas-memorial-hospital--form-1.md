# Pocahontas Memorial Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "AUTHORIZATION FOR RELEASE OF MEDICAL INFORMATION" form from Pocahontas Memorial Hospital's Health Information Services department (150 Duncan Road, Buckeye, WV 24924). It is the hospital's primary general-purpose ROI form, covering all types of medical record release requests. The revision code is "Rev HIM 200028 Approved 02/25/2020," with earlier revision dates of 08/10/16 and 06/09/14 noted at the bottom of each page.

A second form was found for this organization (form-2.pdf), which is a narrowly scoped COVID-19 Testing and Diagnosis Authorization to Release Information, specific to employer/school disclosure. Form-1 is the form a patient would use to request their own records.

## 2. FINDABILITY

The form was locatable through targeted web searching. A `site:pmhwv.org` search for authorization/release/medical records terms identified the PDF URL and the Medical Records page at `https://www.pmhwv.org/patients-and-visitors/medical-records/`. The URL path (`/wp-content/uploads/2020/08/Authorization-to-release-PHI.pdf`) is reasonably descriptive. The form is linked from a "Patients and Visitors > Medical Records" navigation path, which is a logical location.

However, general web searching (without the site: qualifier) returned generic template sites rather than the hospital's direct link, suggesting the page has limited SEO visibility. Additionally, retrieval notes indicate the site has bot protection that interfered with direct programmatic download of the PDF, requiring a browser-based workaround. For a patient navigating the website directly, the form is findable in 2–3 clicks from the homepage, which is reasonable for a small facility.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The document was digitally created (not scanned), and full text is extractable (5,246 characters). However, the text extraction reveals a systematic encoding issue: the letter "ti" is consistently rendered as a space or dropped, producing garbled words throughout: "Pa ent" (Patient), "authoriza on" (authorization), "con nuing" (continuing), "en ty" (entity), "no ﬁca on" (notification), "informa on" (information), "diagnos c tes ng" (diagnostic testing), "facili es" (facilities). This is a significant quality defect in the underlying PDF encoding.

**Fillable fields**: Zero (0) interactive form fields. The form uses underscores/lines to indicate blank spaces, but none are digitally fillable. A patient must print the form and complete it by hand. This is a flat PDF, not a fillable form.

**File format**: 208,714 bytes (~204 KB) for 2 pages, which is reasonable. Contains 14 fonts and 1 embedded image (likely a header/logo). The document was digitally authored, not scanned.

**Digital-first design**: No. Despite being digitally created, the form is designed entirely for print-and-handwrite workflow. The absence of any fillable fields means patients cannot complete it electronically.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is proportionate for the scope of information collected. Page 1 covers patient identification, record type selection, and sensitive information opt-outs. Page 2 covers purpose, recipient, delivery method, authorization terms, and office-use fields.

**Clarity**: The language is generally understandable but mixes plain language with legal phrasing. The authorization paragraph on page 2 is a dense block: "I hereby authorize disclosure of my protected health information to the above person/facility. This authorization is valid for one (1) year from the date of signature unless otherwise specified below." This is standard but not particularly plain-language.

**Organization**: The form follows a logical flow: patient info → what to release → sensitive info carve-outs → purpose → recipient → delivery method → authorization terms → signature. This is a sensible progression.

**Record type selection**: Offers checkboxes for specific record types including "PERTINENT ELEMENTS ONLY (MOST RECENT DISCHARGE SUMMARY AND HISTORY AND PHYSICAL)," "EMERGENCY ROOM RECORD," "X-RAY AND IMAGING REPORT," "RHC OFFICE VISIT NOTES," "LABORATORY REPORTS," "ELECTROCARDIOGRAMS," and generic "Other" fields. Notably, "Snowshoe Mountain Clinic" appears as a checkbox option alongside record types — this is a location/facility, not a record type, suggesting it's a satellite clinic whose records may be stored separately.

**Layout**: The form uses underscored lines for fill-in fields and bullet/checkbox markers for selection items. Page numbering ("1 of 2," "2 of 2") is present. Visual hierarchy is minimal — there are no bold section headers or boxed sections to guide the eye beyond the document title and some capitalized labels. The sensitive information section on page 1 is a dense paragraph with inline initial-lines that could be difficult to parse.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is dual-purpose, framing the authorization as "release copies of my medical records" with a structure that accommodates both patient self-request and third-party release. The "Purpose of Disclosure" checkboxes include "Personal use" as the first option, and the "RELEASE INFORMATION TO" section allows the patient to name themselves as the recipient. The language "I authorize Pocahontas Memorial Hospital OR entity listed below to release copies of my medical records" accommodates both directions. However, there is no separate, simplified pathway for patients requesting their own records — the same form and process is used regardless.

**Scope options**: Patients can specify a date range ("From: ___ To: ___") and select specific record types from a checklist of ~10 options. The sensitive information opt-out section allows patients to exclude AIDS/HIV, substance abuse, pregnancy, behavioral health, STD, or other categories by initialing.

**Format options**: The form offers "Paper" or "Electronic (email, USB, CD, Portal, other)" with a write-in field to specify. This is a notable positive — many small facilities do not offer electronic delivery options. Delivery methods include pick-up (self or authorized person), US Mail, fax, and email.

**Right of Access language**: The form states "Pocahontas Memorial Hospital may not condition its providing of health care on whether copies to individuals or organizations are released as I request" — this is a paraphrase of HIPAA's non-conditioning requirement. However, there is no explicit citation to HIPAA § 164.524 or a plain-language explanation of patient rights.

**EHI Export / Bulk data**: No mention of electronic health information export, bulk data, or USCDI.

**Fee disclosure**: The form states "Fees are waived when copies are requested by other health care provider's agencies/facilities for continuing care. All other requestors are charged as state and federal laws allow." This discloses that fees exist but provides no specific amounts, which leaves patients uncertain about costs before submitting.

**Response time**: The form notes "the hospital has thirty (30) days to respond to your request for information that we maintain at our facility," which aligns with HIPAA's standard timeframe.

## 6. COMPLIANCE

**Photo ID requirement**: The form states "Photo ID is required" on page 1 as a blanket requirement. The "FOR OFFICE USE ONLY" section on page 2 elaborates on acceptable ID types (driver's license, state-issued ID, passport, military ID, or signature comparison). While identity verification is reasonable, requiring photo ID for all requests — including mailed or faxed requests — could be a barrier. The form does not clarify whether this applies only to in-person pickup.

**Authorization expiration**: Valid for "one (1) year from the date of signature unless otherwise specified." This is a standard and reasonable timeframe.

**Revocation**: The form includes revocation language: "I may cancel this request with written notification but that it will not affect any information released prior to notification of cancellation." This is standard.

**Re-disclosure warning**: Present — "the information disclosed may be subject to re-disclosure by the person or facility receiving it, and would then no longer be protected by federal regulations."

**Medical Power of Attorney**: The form notes that "Medical Power of Attorney only becomes effective if the patient has been declared by a medical provider as unable to make their own health care decisions." This is an appropriate clarification.

**No notarization required**: The form requires only a signature, not notarization.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket photo ID requirement**: "Photo ID is required" appears as an unconditional statement on page 1, with no exception for mailed or electronic requests. For patients who lack photo ID or are submitting remotely, this could create an illegitimate barrier to exercising their Right of Access under HIPAA.

### ⚠️ AMBIGUITIES

- **Fee amounts undisclosed**: The form states fees are charged "as state and federal laws allow" without providing specific amounts or a fee schedule. A patient cannot know the cost of their request before submitting it.
- **"Snowshoe Mountain Clinic" as a record type**: This facility name appears in the record-type checklist alongside categories like "LABORATORY REPORTS" and "ELECTROCARDIOGRAMS." It's unclear whether checking this box requests all records from that location, and its inclusion in a list of record types is confusing.
- **Sensitive information default**: The form states "I understand that I am giving my permission to release information... that may include information relating to AIDS/HIV, sexually transmitted diseases; pregnancy information, psychiatric/behavioral, and drug/alcohol testing" with an opt-out mechanism (initialing to exclude). The default-include approach for highly sensitive categories, while technically allowing exclusion, may catch patients off guard.

### ❌ ERRORS

- **Systematic text encoding defect**: The PDF has a font/encoding issue that drops the "ti" ligature throughout the document in text extraction. Words like "Patient," "authorization," "information," "notification," and "continuing" all render incorrectly ("Pa ent," "authoriza on," "informa on," "no ﬁca on," "con nuing"). While the visual rendering in a PDF viewer may appear correct, this breaks accessibility tools, screen readers, and text search — a significant accessibility defect.
- **Apostrophe error**: "provider's agencies/facilities" should be "providers' agencies/facilities" (plural possessive) or simply "provider agencies/facilities."

### ✨ BRIGHT SPOTS

- **Electronic format options explicitly listed**: The form offers "Electronic (email, USB, CD, Portal, other)" — a notably comprehensive set of electronic delivery options for a small critical access hospital, including patient portal access.
- **Multiple delivery methods**: Pick-up, authorized representative pick-up, US Mail, fax, and email are all offered, giving patients meaningful choice.
- **Non-conditioning statement included**: The form explicitly states the hospital "may not condition its providing of health care on whether copies... are released," reflecting HIPAA's non-conditioning requirement — unusual for a small rural facility to include.
