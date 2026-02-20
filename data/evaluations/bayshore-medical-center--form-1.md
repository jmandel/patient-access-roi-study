# Bayshore Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is titled **"Authorization for Release of Information"** and is branded to **Hackensack Meridian Health Medical Group** (the outpatient/physician practice arm of HMH). It is a 1-page, general-purpose third-party release form dated **March 2018**. It is not the primary hospital-level ROI form for Bayshore Medical Center — that role belongs to form-6.pdf (CMR-003, dated 12-20-23), which is the system-wide "Authorization to Use or Disclose Protected Health Information" covering all HMH hospital campuses.

Among the six forms retrieved for this organization, form-1 is the simplest and oldest. The collection includes:
- **form-1.pdf** (this document): HMH Medical Group outpatient release form (March 2018)
- **form-2.pdf**: Pascack Valley Medical Center ROI form (sister facility, image-only scan)
- **form-3.pdf**: Spanish version of the system-wide hospital ROI form (CMR-003S)
- **form-4.pdf**: Request for Amendment of PHI form
- **form-5.pdf**: Pascack Valley patient-access request form
- **form-6.pdf**: Primary English hospital-level ROI form (CMR-003) — the most comprehensive and current form

Form-1 applies specifically to the Medical Group practice setting, not the hospital. A patient at Bayshore Medical Center's hospital would need the CMR-003 form (form-6) instead; this form would only apply if they received care through an HMH Medical Group physician office.

## 2. FINDABILITY

This form was **not discoverable through normal patient navigation**. Per the retrieval notes, the HMH system-wide Medical Records page (`/en/patients-and-visitors/medical-records`) does not link to this document. It was found via web search on a **third-party website** (maochealth.com) and also exists at an HMH media path under the Medical Group patient forms directory.

The source URL (`https://www.maochealth.com/wp-content/themes/maoc/pdf/HMHMG_Authorization-for-Release-of-Information.pdf`) is hosted on an unrelated domain, which is a poor signal for a patient trying to find an official form. The alternate HMH-hosted URL uses a deep media path (`/-/media/Project/HMH/HMH/Public/Medical-Group/Patient-Forms/General-English/HMHMG-Authorization-for-Release-of-Information.pdf`) that is not browsable from the main website.

A patient navigating to Bayshore Medical Center's page, then to the HMH Medical Records page, would be directed to the Swellbox/Datavant online wizard for English requests — this PDF form is effectively invisible through normal website navigation.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (3,237 characters).
- **Fillable fields**: Zero. The form uses printed underscores (`_______`) for all data entry, requiring print-and-handwrite or awkward digital workarounds.
- **File size**: 321 KB for a single page — moderately large, likely due to 2 embedded images (probably a logo).
- **Page count**: 1 page.
- **Font count**: 5 fonts.
- **Digital-first design**: No. This is a flat PDF designed for printing and handwriting. There is no interactivity whatsoever.

The form functions as a print-only artifact. While having a text layer is positive for searchability and screen readers, the lack of any fillable fields means patients must print, hand-fill, and then scan/fax/mail the form.

## 4. CONTENT DESIGN

**Length**: 1 page — appropriately concise for its scope.

**Clarity**: The language is a mix of plain and legal. The authorization statement is reasonably clear: *"I authorize Hackensack Meridian Health Medical Group to release my health information to:"* and *"I authorize Hackensack Meridian Health Medical Group to obtain records from:"* — the bidirectional framing (release to / obtain from) could confuse patients about which direction their information is flowing.

**Record scope options**: Extremely limited — only two checkboxes:
- `____ Complete Medical Record`
- `____ Other (Please list)`

No granular record-type selection (contrast with form-6, which offers clinic notes, labs, radiology, discharge summaries, etc.).

**Purpose options**: Three choices:
- `____ For treatment purposes`
- `____ At the request of the patient`
- `____ Other (please specify)`

**Organization**: Linear and simple — patient info → recipient → records from → record type → purpose → authorization language → signature. No headers, sections, or visual hierarchy beyond the title.

**Layout**: Cramped, with dense underscore lines for fill-in fields and minimal whitespace. No section dividers or visual grouping. The bottom third of the page is dense legal text in small font, including the "NOTICE TO RECIPIENT OF INFORMATION" / "PROHIBITION ON REDISCLOSURE" block.

**Readability**: The main form body is readable, but the redisclosure notice at the bottom is in noticeably smaller type and dense legal language.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general third-party release form**, not a patient-access-specific form. The framing "I authorize Hackensack Meridian Health Medical Group to release my health information to: [Name/Address]" treats the patient as authorizing disclosure to a third party, not as directly requesting their own records. While "At the request of the patient" appears as a purpose option, the form structure requires the patient to name a recipient — it does not accommodate a patient simply requesting a copy for themselves.

**Delivery format options**: None. The form does not mention paper, electronic, email, CD, fax, or any delivery mechanism.

**HIPAA Right of Access**: Not referenced. There is no mention of HIPAA, 45 CFR § 164.524, or patient rights.

**EHI Export**: Not mentioned.

**Fee disclosure**: None.

**Expiration**: The form states: *"I understand that this authorization will expire on ____________________, and if I fail to specify an expiration date, event or condition, this authorization will expire in six months."* A 6-month default expiration is reasonable.

**Liability release clause**: The form includes: *"I further agree to release the provider and its employees and agents from all liability that may arise from the release of information herein requested."* This broad liability waiver is unusual in ROI forms and could discourage patients from exercising their right to access records.

## 6. COMPLIANCE

**Liability waiver**: The clause *"I further agree to release the provider and its employees and agents from all liability that may arise from the release of information herein requested"* is a notable compliance concern. HIPAA does not permit conditioning record access on a liability waiver. While this form is a general release authorization (not specifically a patient-access request form), including a blanket liability release could chill patient requests.

**No unreasonable barriers**: The form does not require notarization, in-person submission, or payment upfront. Submission method is not specified at all (no mailing address, fax number, or email provided on the form itself).

**Voluntary language**: The form appropriately states: *"I understand that authorizing the disclosure of this health information is voluntary. I can refuse to sign this authorization. I need not sign this form in order to assure treatment."*

**Redisclosure notice**: Includes appropriate 42 CFR Part 2 language regarding substance abuse records.

**Missing submission instructions**: The form provides no instructions on where or how to submit it — no address, no fax number, no email. A patient downloading this PDF would not know where to send it.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Broad liability waiver**: *"I further agree to release the provider and its employees and agents from all liability that may arise from the release of information herein requested."* This blanket release of liability is unusual and potentially chilling. HIPAA does not authorize covered entities to require liability waivers as a condition of information release.

### ⚠️ AMBIGUITIES

- **Bidirectional authorization without clarity**: The form contains both *"I authorize Hackensack Meridian Health Medical Group to release my health information to"* and *"I authorize Hackensack Meridian Health Medical Group to obtain records from"* — a patient requesting their own records might not understand which section applies to them, or might incorrectly fill in both.
- **No submission instructions**: The form provides zero guidance on where or how to submit the completed form — no address, phone, fax, or email. A patient is left to figure this out independently.
- **Medical Group vs. Hospital scope unclear**: The form is branded "Hackensack Meridian Health Medical Group" but a patient at Bayshore Medical Center (the hospital) might not realize this form only covers outpatient Medical Group records, not hospital records.

### ❌ ERRORS

- **Stale form**: Dated **March 2018** — nearly 8 years old at the time of evaluation. The system-wide CMR-003 form was updated December 2023. This form predates significant regulatory changes including the 21st Century Cures Act information blocking rules (effective April 2021).
- **Hosted on third-party domain**: The primary discoverable URL is on `maochealth.com`, not an official HMH domain, raising questions about whether this is the current version or an outdated copy.

### ✨ BRIGHT SPOTS

- **Concise 1-page format**: The form is brief and not overwhelming — a patient can quickly understand what's being asked.
- **Voluntary disclosure language**: Clearly states signing is voluntary and not required for treatment, which is an appropriate and patient-friendly disclosure.
