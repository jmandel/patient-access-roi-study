# Evaluation: Duly Health and Care — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is Duly Health and Care's primary **"Authorization for Release of Health Information"** — a single-page ROI form processed by ScanSTAT Technologies (a third-party health information management vendor). The form header identifies ScanSTAT Technologies at 1100 W. 31st St., Downers Grove, IL 60515, with phone, fax, and email contact information (`mrrequests@dupagemd.com`).

This is the organization's own ROI form, as distinct from three MediCopy-branded forms also found for this organization:

- **form-2.pdf**: MediCopy "Authorization for the Release of Medical Records" covering Duly, South Bend Clinic, and Quincy Medical Group.
- **form-3.pdf**: MediCopy Disability/FMLA Intake Form — specialized, not for general records requests.
- **form-4.pdf**: Another MediCopy general authorization form with Duly-specific sensitive-information notices and MRO contact info (`duly@mrocorp.com`).

Form-1 appears to be the canonical Duly-branded ROI authorization. It was updated June 2023 and carries the form ID `DMG-ADM010`. The "DMG" prefix reflects the organization's former name, DuPage Medical Group.

## 2. FINDABILITY

Per the retrieval notes, this form was discovered through web search for `"Duly Health and Care medical records release form filetype:pdf"` and is hosted on Duly's Azure blob storage (`dmgwebprodstorage.blob.core.windows.net`). The source URL includes the descriptive filename `Release-of-Information-Authorization-Updated-062023.pdf`, making it somewhat identifiable by URL alone.

The retrieval notes also indicate that Duly's medical records request page at `dulyhealthandcare.com/services/medical-records-requests` was confirmed through a site-specific search. Retrieval difficulty was rated **easy** overall — all downloads succeeded on the first attempt with no bot blocking. A patient starting from the Duly website would likely navigate to the medical records page and find this form linked from there.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: Single-page PDF, 214,315 bytes (~209 KB).
- **Text layer**: Present (`has_text_layer: true`). Text is selectable and searchable. Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite having clearly structured form fields with blanks and checkboxes, none are interactive PDF form elements. A patient must print the form, complete it by hand, and submit physically — or use a third-party PDF annotation tool.
- **Fonts**: 8 fonts used — moderate typographic complexity for a single-page form.
- **Embedded images**: 2 (likely logos/branding).
- **Text extraction quality**: Good. The full text (4,801 characters) extracts cleanly with no OCR artifacts or garbled characters. All section headings, field labels, and legal text are readable.

The form is usable as a print-and-fill document but offers no digital completion pathway within the PDF itself. The header does reference MyChart as an alternative channel for accessing information, though this is mentioned only briefly: `"The information that you are requesting may be available through MyDMGHealth at https://mychart.dupagemedicalgroup.com."`

## 4. CONTENT DESIGN

The form is organized into six clearly numbered sections:

1. **Section 1 — Patient Information**: First name, last name, date of birth, address, city/state/ZIP, phone. Standard fields with the instruction `"please print and complete ALL fields"`.
2. **Section 2 — Information Requested**: Checkboxes for specific record types: Department/Physician/Clinic Location, Radiology Reports, Radiology Images (CD), Cardiac Reports, Cardiac Images (CD), Labs, Progress Notes, Vascular Images (CD), Medication List, Immunizations, Billing, and an "Other" free-text field. Dates of treatment are required with examples: `"specific date - 1/25/2013; range of dates - January-July 2014"`.
3. **Section 3 — Recipient**: Name, phone, address, city/state/ZIP, fax for the individual/organization receiving records. Includes the sensitive information notice.
4. **Section 4 — Method of Delivery**: Checkboxes for Fax, U.S. Mail, MyChart (must have active account), Secure e-Delivery (with email address field), and Pick up with photo ID (with a field for the individual picking up).
5. **Section 5 — Purpose of Disclosure**: Checkboxes for Continuation of Care, Personal Reasons, Insurance, Transfer of Care (Permanently Leaving), Legal, and Other.
6. **Section 6 — Signatures**: Patient signature, witness signature, and representative signature lines with dates.

The structure is logical and flows naturally from "who is the patient" through "what records" to "where to send them." The provision of specific record-type checkboxes in Section 2 is helpful — it gives patients granular control over what is requested. The explicit instruction that `'"All records" or incomplete dates are not considered specific'` enforces precision, though this may frustrate patients who genuinely want all their records.

The form is dense for a single page. The legal text in Section 6 contains six bullet points covering revocation rights, expiration, re-disclosure, right to inspect, sensitive information, and right to refuse. While comprehensive, these are presented in small type as a continuous block that is easy to gloss over.

A notable design quirk: the form states `"Charges may apply. Please contact us for details. Cash payments are not accepted."` This tells patients fees exist but gives no indication of their magnitude, and the prohibition on cash is an unusual restriction that is stated without explanation.

## 5. PATIENT-CENTEREDNESS

The form makes a reasonable effort to serve patients but has several friction points:

**Positive elements:**
- Multiple delivery methods including MyChart, secure e-delivery, fax, mail, and pick-up offer flexibility.
- The MyChart reference at the top (`"The information that you are requesting may be available through MyDMGHealth"`) suggests a digital self-service alternative, which could save patients from needing the form at all.
- Record-type checkboxes give patients specific control rather than forcing a blanket request.
- The purpose checkboxes include "Personal Reasons" — acknowledging that patients may request records for their own use without further justification.
- Section 6 explicitly states: `"I understand I have the right to refuse to sign this authorization, and Duly does not condition treatment on this authorization."`

**Friction points:**
- **Witness requirement**: The form requires a witness signature unless `"continuation of care or transfer of care is marked in Section 5, or records are produced to the patient."` This means a patient requesting records for "Personal Reasons," "Insurance," "Legal," or "Other" must locate a witness. This is an unusual burden that most ROI forms do not impose and that HIPAA does not require.
- **No fee schedule**: `"Charges may apply. Please contact us for details"` forces the patient to make a separate inquiry just to learn the cost. Combined with `"Cash payments are not accepted,"` a patient has no way to understand or plan for expenses.
- **Rejection of "all records"**: The statement that `'"All records" or incomplete dates are not considered specific'` may create a barrier for patients exercising their HIPAA right of access, which allows patients to request their entire designated record set.
- **No online submission**: Despite referencing MyChart and e-delivery, the form itself must be printed, completed by hand, and physically submitted. The contact information at the top (phone, fax, email) provides submission channels, but there is no mention of whether the completed form can be emailed or faxed back.
- **Old branding throughout**: The email address (`mrrequests@dupagemd.com`), the MyChart URL (`mychart.dupagemedicalgroup.com`), and the form ID prefix (`DMG`) all reference "DuPage Medical Group" — the organization's former name. A patient searching for "Duly Health and Care" might doubt they have the right form.

## 6. COMPLIANCE

- **Authorization expiration**: 90 days by default, with an option to specify a different date or event: `"I understand this authorization will expire in 90 days or upon the following specified date ___________ or event ____________."` The 90-day default is relatively short and could require patients to resubmit if processing is delayed.
- **Revocation rights**: Stated clearly: `"I understand I have the right to revoke this authorization in writing at any time by sending revocation to Duly's ROI Department at 1100 W. 31st St. Downers Grove, IL."` Appropriately notes the reliance exception.
- **Right to refuse**: Present: `"I understand I have the right to refuse to sign this authorization, and Duly does not condition treatment on this authorization, except disclosure necessary for payment of claims (excluding psychotherapy notes) or provision of healthcare solely for the purpose of creating PHI for disclosure to a third party (e.g. pre-employment or life insurance physicals)."`
- **Re-disclosure warning**: Present: `"I understand information disclosed may be subject to re-disclosure by the recipient and may no longer be protected by law."`
- **Right to inspect**: Present: `"I understand I have the right to inspect/receive a copy of the information used/disclosed and receive a copy of this form."`
- **Sensitive information notice**: References `"45 CFR § 171.204(a)(2)"` and states that Duly's EHR `"cannot segment (1) Mental Health, (2) HIV/AIDS/STD, (3) Genetic Testing, or (4) Drug/Alcohol Abuse 'sensitive information' from other information."` The notice warns that this sensitive information will be released to the named recipient upon signing. This is a transparency measure, though it also means patients cannot exclude sensitive categories from disclosure — unlike forms 2 and 4, which provide opt-out checkboxes for sensitive record types.
- **Minor provisions**: `"For minors ages 12-17, the minor's signature is required in Section 6 for the release of Mental Health Records."` This aligns with Illinois law regarding minors' mental health records.
- **Void-if-modified clause**: The title includes `"(Void if Form is Modified)"`, which could prevent patients from making reasonable annotations or corrections.
- **Form combines patient-access and third-party release**: The form does not distinguish between a patient requesting their own records (governed by the HIPAA Right of Access under 45 CFR § 164.524) and a patient authorizing release to a third party (governed by 45 CFR § 164.508). The witness requirement, fee structure, and expiration terms apply uniformly regardless of whether the patient is the recipient.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness requirement for non-care requests.** The form requires a witness signature for requests marked as "Personal Reasons," "Insurance," "Legal," or "Other." HIPAA does not require witness signatures on authorizations, and this creates an unnecessary burden — particularly for patients completing the form at home. Only "Continuation of Care," "Transfer of Care," and requests where records go directly to the patient are exempt from the witness requirement.
- **"All records" requests are rejected.** The form explicitly states that `'"All records" or incomplete dates are not considered specific.'` While specificity is reasonable for third-party releases, HIPAA's Right of Access (45 CFR § 164.524) entitles patients to request their entire designated record set. Categorically rejecting "all records" requests could improperly limit patient access.
- **No ability to exclude sensitive information.** Unlike the MediCopy forms (forms 2 and 4) used by the same organization, form-1 provides no checkboxes to exclude sensitive record categories. Instead, the sensitive information notice simply warns that all sensitive information *will* be released. Combined with the assertion that Duly's EHR "cannot segment" sensitive records, this removes patient control over granular disclosure — a step backward from the MediCopy forms that offer explicit opt-out checkboxes.

### ⚠️ AMBIGUITIES

- **"Charges may apply. Please contact us for details. Cash payments are not accepted."** This leaves patients unable to determine what they will owe, unable to pay with cash, and without any reference to HIPAA fee limits for patient-access requests. The ambiguity about whether fees apply to patient-access requests (which are fee-limited under HIPAA) versus third-party releases (which are not) is unresolved.
- **"Void if Form is Modified"** in the title is vague. Does correcting a mistake (e.g., crossing out a wrong date) void the form? Does adding a sticky note? The scope of "modified" is undefined and could discourage patients from making legitimate corrections.
- **Form does not distinguish patient-access from third-party release.** The same form, fee language, witness requirement, and 90-day expiration apply whether a patient requests records for themselves or authorizes release to a third party. These are governed by different HIPAA provisions with different rules, and conflating them may lead to improper requirements being applied to patient-access requests.

### ❌ ERRORS

- **Outdated branding and URLs.** The form uses the former organization name "DuPage Medical Group" in multiple places: the email address `mrrequests@dupagemd.com`, the MyChart URL `https://mychart.dupagemedicalgroup.com`, and the form ID `DMG-ADM010`. The organization rebranded to "Duly Health and Care," but this form — despite being "Updated 062023" — retains old references that may confuse patients or lead to non-functional links.
- **Incorrect regulatory citation.** The form cites `"45 CFR § 171.204(a)(2)"` for its sensitive information segmentation notice. This is a citation to the ONC Information Blocking Rule (21st Century Cures Act), not HIPAA. While the citation exists and relates to information blocking exceptions for content and manner, using it to justify an inability to segment sensitive records in a patient-facing ROI form is misleading — it appears to invoke a regulatory exception to excuse a system limitation rather than informing the patient of their rights.
- **No fillable PDF fields.** The form has zero interactive fields (`fillable_field_count: 0`) despite being distributed as a digital PDF download. This is a technical deficiency, not an intentional design choice.

### ✨ BRIGHT SPOTS

- **Multiple delivery options including secure e-delivery and MyChart.** Offering five delivery methods (fax, U.S. mail, MyChart, secure e-delivery, and pick-up) is above average for ROI forms and gives patients meaningful flexibility in how they receive their records.
- **Granular record-type checkboxes.** Section 2 provides 11 specific record categories (radiology reports, cardiac reports, labs, progress notes, medication list, immunizations, billing, plus imaging CDs), allowing patients to request precisely what they need rather than forcing an all-or-nothing approach.
- **Explicit date format examples.** The instruction `"(Examples: specific date - 1/25/2013; range of dates - January-July 2014)"` reduces ambiguity about how to specify treatment dates — a small but helpful detail that many forms lack.
