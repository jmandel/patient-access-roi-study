# St. Charles Redmond — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is an older (April 2016) version of the **"Authorization for Use and Disclosure of Protected Health Information"** used across all St. Charles Health System locations. The filename on the server is `ROIAuthorizationForm_42816_ENGLISH.pdf`, hosted under a `/2020-01/` path, suggesting it was uploaded to the CMS in January 2020 but the form number `3740 (Spanish 3742) 4/16` indicates original creation in April 2016.

This is a **legacy version** of the same authorization form that has since been updated twice:
- **form-2.pdf** (November 2019 revision, `3740 11/19`): Added fillable fields (64 fields), added "MUST BE WET-INK SIGNED" requirement, added photo ID checkbox.
- **form-3.pdf** (January 2025 revision, `3740 1/25`): Current English version with 65 fillable fields, added St. Charles Center for Orthopedics and Neurosurgery, changed CD format to "Electronic Media (i.e. CD, Thumbdrive)," and added fax page limit note.
- **form-4.pdf** (February 2025, `3742 2/25`): Current Spanish translation of form-3.

Form-1 is a system-wide form — it covers St. Charles Bend, Redmond, Madras, Prineville, and Sage View hospitals, plus St. Charles Medical Group clinics. There is no Redmond-specific ROI form.

## 2. FINDABILITY

According to retrieval notes, the form was **easy to find**. The St. Charles release of information page (`stcharleshealthcare.org/patients/release-information`) is clearly linked and discoverable via standard web searches. However, form-1.pdf specifically is a **legacy document no longer linked from the current website** — it was discovered via direct URL or search engine cache. The notes indicate that the older URL returned the file without issue, though an even older URL gave a 404.

The current website directs patients to form-3 (English) and form-4 (Spanish), making form-1 an orphaned artifact still accessible on the server. A patient navigating the website today would not encounter this form unless they found it via a search engine result linking to the old URL.

## 3. TECHNICAL ACCESSIBILITY

- **File size:** 192,017 bytes (192 KB) — reasonable for a 2-page PDF.
- **Pages:** 2
- **Text layer:** Yes — full text is extractable (7,474 characters).
- **Fillable fields:** **0** — This is a flat, non-interactive PDF. It was designed to be printed and filled by hand. This contrasts sharply with the later revisions: form-2 has 64 fillable fields and form-3 has 65.
- **Fonts:** 15 embedded fonts.
- **Images:** 0 embedded images.
- **Scan:** Not a scan — it is a digitally-authored PDF.

The form is **digitally created but not digitally usable**. The lack of any fillable fields means patients must print, hand-write, and physically submit the form. The text layer makes it accessible for screen readers and searchable, which is a baseline positive. The layout appears to be a two-column design on page 1 (based on the truncated text fragments visible in the extracted text — e.g., columns of St. Charles location checkboxes alongside sender/recipient fields), which likely renders well in print but may extract poorly for accessibility tools.

## 4. CONTENT DESIGN

**Length:** 2 pages — appropriate for an authorization form. Page 1 covers patient demographics, sender/recipient identification, date range, and record type selection. Page 2 covers sensitive information initials, authorization terms, format/delivery options, and signatures.

**Organization:** The form uses a numbered-section system (sections 1–10) with corresponding instructions at the bottom of each page. This is a thoughtful design choice — the numbered fields map to numbered instruction items, reducing confusion. Instructions for sections 1–6 appear at the bottom of page 1; instructions for 7–10 appear at the bottom of page 2.

**Record type options** are granular and useful:
- Hospital Summary (with parenthetical explaining contents: "Includes: Discharge Summary, History & Physical, Operative Report(s), Anesthesia Record, Consultations, Diagnostic Test Results, Radiology, Lab, etc.")
- Clinical Summary
- Emergency Room Record
- Lab Report(s)
- Radiology Report(s)
- Radiology Film / Imaging Studies / Tracings
- Itemized Billing Records
- Complete Legal Medical Record
- Only last two years of legal medical records
- Other (free text)

**Clarity:** The language is moderately clear but tilts toward legal/administrative phrasing. The instruction "Please complete the following section, using a separate form for each sender or recipient of the medical records" is helpful but may confuse patients who don't understand the from/to directionality. The dual "Check one: FROM / TO" boxes in sections 3 and 4 is a complex interaction pattern that relies heavily on the instructions to interpret.

**Sensitive records handling:** The form requires separate **initialing** for each category of sensitive information (Alcohol/Drug, HIV, Mental Health, Genetic records), with "Patient Initial Initial Required" repeated for each. This is legally appropriate under 42 CFR Part 2 and Oregon state law but adds complexity.

**Fee language:** The form states "Standard copy fees will apply subject to federal and state regulations" and repeats this for delivery options. No specific dollar amounts are given.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **general-purpose authorization form** that serves both patient self-requests and third-party disclosures. The "Purpose for requesting information" field includes "Personal" as an option alongside Legal, Insurance, and Continuation of Care — but the form does not distinguish between a patient requesting their own records and a third party requesting records about someone else. The FROM/TO structure is bidirectional, allowing the form to be used to send records to another provider or to request records from another provider.

**No reference to HIPAA Right of Access:** The form does not cite 45 CFR § 164.524 or mention the patient's right to access their own records. It does state that "No determination about treatment, payment, enrollment, or eligibility for benefits will be based on whether or not I sign this authorization form," which is a HIPAA-required statement for authorizations (§ 164.508), but notably this framing treats patient self-access the same as third-party release — using an authorization framework rather than an access-request framework.

**Format options:** Section 8 offers Paper, CD, or "No records requested." There is **no electronic delivery option** (no email, no patient portal download, no secure file transfer). The later 2025 revision (form-3) updated "CD" to "Electronic Media (i.e. CD, Thumbdrive)" but still offers no true electronic delivery.

**Delivery options:** U.S. Mail, Fax (restricted to healthcare providers only), or Pick up. No email option.

**No mention of EHI export** or bulk data access.

**Expiration:** "Unless I revoke this authorization, it will expire on the following date or event: ___. If an expiration date is not specified, this authorization will expire one year from the date it is signed." This is a reasonable default.

## 6. COMPLIANCE

**Fee disclosure:** The form mentions fees will apply "subject to federal and state regulations" twice but never specifies amounts. Under HIPAA, patient access requests (as opposed to third-party authorizations) are limited to a reasonable, cost-based fee. The vague fee language, combined with the failure to distinguish patient access from third-party release, could lead to patients being overcharged.

**No notarization required.**

**No explicit in-person requirement** in this version — though the form must be signed and physically delivered (no electronic submission pathway is mentioned). The later versions (form-2, form-3) added "MUST BE WET-INK SIGNED," which form-1 does not include.

**Revocation rights:** Clearly stated — written revocation to the HIM Manager.

**No consent bundling** — the form is solely for records release.

**Authorization rejection:** "St. Charles reserves the right to reject this authorization form if the legal authority of the representative cannot be validated." This is reasonable for representative-submitted requests but could be used as a barrier.

**Minor consent:** The form correctly addresses Oregon law regarding minors: "No drug and alcohol treatment records of a minor who is 14 years old or older, nor medical records of any type of a minor who is 15 years old or older, may be released without the minor's written authorization if the minor self-consented to the treatment."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No distinction between patient access requests and third-party authorizations.** HIPAA treats these differently — patient access under § 164.524 has different fee limits and timelines than third-party authorizations under § 164.508. By funneling all requests through a single authorization form, St. Charles may be applying authorization-level fees and processes to patient access requests, which are subject to stricter cost limitations.
- **"Standard copy fees will apply"** without specifying amounts or distinguishing patient access fees from third-party release fees. For patient access requests, HIPAA limits fees to a reasonable, cost-based amount. The vague language leaves room for overcharging.

### ⚠️ AMBIGUITIES

- **The FROM/TO structure in sections 3–4 is confusing.** The form has two separate FROM/TO pairs, each requiring the user to check a box and fill in contact information. The instructions for sections 3 and 4 are identical: "Check with the 'From' or 'To' box, then identify and provide the contact information for the sender or recipient of the medical records, as applicable." A patient requesting their own records would struggle to determine which section to complete and how.
- **"No records requested" checkbox** under Records Format (section 8) is puzzling — why would someone fill out an authorization form and then check "no records requested"?
- **Email field** appears in the patient demographics (section 1) but email is not offered as a delivery option (section 9), creating a disconnect about why the email address is collected.

### ❌ ERRORS

- **Orphaned document.** This form is no longer linked from the website but remains publicly accessible at its original URL. A patient finding it via a search engine would be using a form that is 9+ years old, missing fillable fields, and lacking the updated location list (e.g., no Center for Orthopedics and Neurosurgery).
- **Garbled text extraction in column areas.** The two-column layout on page 1 causes overlapping text fragments in the extracted text (e.g., "AUTHORIZATION FOR" appears as a disconnected fragment, "I. *This document can b" is truncated). While this is a PDF rendering issue rather than a form design flaw, it would affect any automated processing of this document.

### ✨ BRIGHT SPOTS

- **Numbered section–instruction pairing.** The form numbers each section (1–10) and provides matching numbered instructions at the bottom of each page. This is a genuinely helpful design pattern that reduces the need for patients to guess what each field requires.
- **Granular record type selection** with parenthetical descriptions explaining what each category includes (e.g., "Hospital Summary (Includes: Discharge Summary, History & Physical, Operative Report(s), Anesthesia Record, Consultations, Diagnostic Test Results, Radiology, Lab, etc.)"). This helps patients understand what they're requesting.
- **System-wide form with location checkboxes.** Rather than requiring patients to identify and contact each hospital separately, the form lists all St. Charles locations with checkboxes, simplifying multi-location requests.
