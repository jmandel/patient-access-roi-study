# Evaluation: SSM Health DePaul Hospital — form-2.pdf

**Organization:** SSM Health DePaul Hospital - St. Louis (Bridgeton, MO)
**Document:** form-2.pdf — "SSM Health 'Request for Access to/Authorization for Use and Disclosure of Protected Health Information'"
**Source URL:** https://www.ssmhealth.com/SSMHealth/media/Documents/patients-and-visitors/get-medical-records/st-louis-metro/medical-records-request-form-stl.pdf

---

## 1. DOCUMENT IDENTIFICATION

This is the **St. Louis metro area version** of SSM Health's system-wide ROI/authorization form. The title reads: "SSM Health 'Request for Access to/Authorization for Use and Disclosure of Protected Health Information.'" It is a single-page, dual-purpose form that serves both patient access requests and third-party disclosures. The form uses current "SSM Health" branding, distinguishing it from form-1.pdf, which carries the older "SSMHC" (SSM Health Care) name and a document code "DPM-2065-035 (1/2019)."

Form-2 is the **applicable form for DePaul Hospital patients** in the St. Louis metro area, as confirmed by the SSM Health website's location-based routing. It adds two notable features over the older form-1: a checkbox for "Psychotherapy notes (as defined by HIPAA and SSM Health policy)" and an explicit email delivery field. Form-1 has zero fillable fields and a smaller file size (86,620 bytes vs. 293,571 bytes), suggesting form-2 is a more recent, digitally enhanced revision.

No DePaul Hospital–specific form exists; the hospital relies entirely on SSM Health's system-level forms.

---

## 2. FINDABILITY

The retrieval notes document a moderately complex path to this form. Starting from the SSM Health website, the form is reachable via:
- The system-wide medical records page at `ssmhealth.com/resources/get-my-medical-records`
- A location-dependent content loader that shows St. Louis metro–specific forms

The URL path (`/patients-and-visitors/get-medical-records/st-louis-metro/medical-records-request-form-stl.pdf`) is descriptive and logically structured. However, the location-based dynamic content loading posed challenges — the location selector's autocomplete reportedly did not populate options during testing. Starting from DePaul Hospital's own location page, the "Get Medical Records" link redirects to the same system-wide page rather than directly to the St. Louis form.

The SSM Health medical records page also mentions an electronic request option via the **MRO Express portal** (mroexpress.mrocorp.com) for Missouri facilities, offering an alternative to the downloadable PDF.

Overall, a patient would need to: (1) find the medical records page, (2) identify that location-specific forms exist, (3) navigate the location selector to surface the St. Louis metro form. This is a 3+ click path with a potentially broken location selector.

---

## 3. TECHNICAL ACCESSIBILITY

This form scores well technically:

- **Text layer:** Full extractable text (4,922 characters), not an image-only scan.
- **Fillable fields:** **69 fillable form fields** — a notably high count for a single-page form. This indicates interactive checkboxes, text inputs, and date fields throughout. The `fillable_field_names` array is empty (field names were not extracted), but the count suggests comprehensive digitization of every input area.
- **File size:** 293,571 bytes for a single page is moderately large but reasonable given the 69 interactive fields.
- **Fonts:** 9 embedded fonts.
- **No embedded images:** The form is built entirely from vector/text elements.
- **Digital-first design:** The high fillable field count and lack of embedded images strongly suggest this was **designed as a digital form**, not a scan of a paper original. This represents a clear improvement over form-1 (which has 0 fillable fields).

The form can be filled electronically in a PDF viewer, printed and submitted, or presumably submitted alongside an MRO Express portal request.

---

## 4. CONTENT DESIGN

**Length:** One page. For the amount of content packed in — patient demographics, recipient information, record type checkboxes, purpose of disclosure, and a seven-item acknowledgement section — this is extremely compact.

**Structure:** The form follows a logical top-to-bottom flow:
1. SSM Health entity name
2. Patient demographics (name, DOB, address, phone)
3. Type of access requested (Inspection / Hard Copy / Electronic Copy)
4. Disclosure recipient (name, relationship, address, phone, fax, email)
5. Information to be released (checkboxes with date fields)
6. Purpose of disclosure (checkboxes)
7. Acknowledgement of understanding (seven bullet points)
8. Signature block

**Clarity:** The language is largely legalistic. The acknowledgement section contains seven dense paragraphs covering authorization expiration, revocation rights, redisclosure risk, non-conditioning of care, right to a copy, 30-day response timeline, and fee disclosure. While these are all legally appropriate disclosures, they are written in formal legal register that may challenge patients with limited literacy.

**Layout:** Fitting all of this onto a single page results in tight spacing. The record-type checkboxes are arranged in two columns with date fields, which is space-efficient but dense. The acknowledgement section uses small text to fit seven paragraphs.

**Readability concern:** The single-page design forces compressed formatting. While the information hierarchy is reasonable, the density may be intimidating.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a **dual-purpose form**. It serves both patients requesting their own records and authorized disclosures to third parties. The "Purpose of Disclosure" section includes a "For personal access" checkbox with sub-options for "Copy," "Inspection," and "Summary," and "At request of individual" is listed as a purpose option. However, the form's primary orientation is toward third-party disclosure — the structure centers on a "disclose my protected health information... to:" recipient block.

**Scope options:** The form offers granular record type selection:
- Discharge Summary, History & Physical Exam, Progress Notes, Lab Reports, X-Ray Reports, Medication Records, Detailed Bill
- Sensitive categories requiring specific authorization: Substance abuse, Psychotherapy notes, HIV-related information
- "Other (specify)" catch-all
- Date fields alongside each record type

**Format options:** Three delivery formats are offered:
- "Inspection" (in-person review)
- "Hard Copy"
- "Electronic Copy (only available if SSM Health maintains the requested information electronically)"

An email field is provided for the recipient with the note: "E-mail option only available if SSM Health maintains the requested information electronically." The acknowledgement section includes a specific paragraph about unencrypted email risks.

**Right of Access language:** The form does not explicitly cite HIPAA § 164.524 or use the phrase "right of access." However, the acknowledgement section references several HIPAA concepts: the 30-day response requirement, right to request review of access denials, revocation rights, redisclosure warnings, and non-conditioning of care. The title itself includes "Request for Access to," which partially signals patient access.

**EHI Export awareness:** No mention of electronic health information export, bulk data, or USCDI standards.

---

## 6. COMPLIANCE

**Fee disclosure:** The form states: "I understand that I may be required to pay the cost of creating paper copies or electronic media, mailing copies, supervising my inspection, or preparing a summary except for uses and disclosures for the purpose of treatment, payment, and operations." This is appropriately hedged ("may be required") and references the TPO exception, though it does not specify fee amounts or HIPAA's cost-based fee limitation.

**Response timeline:** The form commits to acting "within 30 days," consistent with HIPAA's requirement.

**Expiration:** The authorization expiration is left as a fill-in date field ("I understand the expiration date of this authorization is ______________"), with research-specific options. No unreasonably short default is imposed.

**Revocation rights:** Clearly stated — patients can revoke "at any time by notifying the providing organization in writing."

**Non-conditioning:** Explicitly states: "By authorizing this use or disclosure of information, there will be no conditions placed on my health care or payment for my health care."

**Email warning:** The form includes a noteworthy paragraph: "SSM Health believes that the only way to avoid third party interception of information sent through e-mail is to send such information by encrypted e-mail. Despite this warning about the risk that my protected health information could be read/intercepted by a third party if it is not sent by encrypted e-mail, I request SSM Health to send an electronic copy (if available) of the requested information by unencrypted e-mail." This functions as both a risk disclosure and a liability waiver for email delivery.

**No notarization requirement.** No in-person submission requirement. No ID verification requirement on the patient's end (though a "Records Received by... ID VERIFIED" field exists for staff use).

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **69 fillable form fields** on a single-page form is impressive. This means patients can complete the entire form electronically in a PDF viewer without printing — a genuine digital-first design that many organizations fail to achieve.
- **Email delivery option** with explicit risk acknowledgement. While the unencrypted email warning is somewhat discouraging, the fact that email is offered at all puts this form ahead of many peers.
- **Granular record type selection with dates** allows patients to request exactly what they need rather than receiving (and paying for) their entire record.
- **Psychotherapy notes** are specifically broken out as a separate authorization checkbox, correctly reflecting HIPAA's heightened protection for these records (42 CFR Part 2 / HIPAA).
- **30-day response commitment** and **denial review rights** are explicitly stated in patient-facing language.

### ⚠️ AMBIGUITIES

- **Dual-purpose form conflation:** The form title says "Request for Access to/Authorization for Use and Disclosure," blending two distinct HIPAA concepts. A patient requesting their own records (Right of Access under § 164.524) has different legal protections than someone authorizing disclosure to a third party (§ 164.508). Using one form for both may confuse patients about which rights apply to them.
- **"Electronic Copy (only available if SSM Health maintains the requested information electronically)"** — this qualifier could be used to deny electronic copies of records that exist in an EHR, if the specific requested record type was originally paper-based. The scope of "maintains... electronically" is undefined.
- **Expiration date left blank** with options for "at end of research study" and "not applicable for ongoing research" — these research-oriented options make little sense for a patient access request and may confuse non-research requestors about what date to enter.

### 🚩 RED FLAGS

- **Email delivery framed as risky exception rather than standard option.** The lengthy warning about "third party interception" and the framing that encrypted email is "the only way to avoid" interception may discourage patients from choosing electronic delivery. Under HIPAA's Right of Access, patients are entitled to receive records in the electronic form and format they request if readily producible, and a provider should not create barriers to electronic transmission. The waiver-like language ("Despite this warning... I request SSM Health to send...") shifts risk entirely to the patient.

### ❌ ERRORS

- **No form revision date or document control number** visible on form-2, unlike form-1 which shows "DPM-2065-035 (1/2019)." This makes it impossible to determine when this version was published or whether it is current.
