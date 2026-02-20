# Yale New Haven Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the primary system-wide **"Authorization for Access/Release of Information"** form (Form F4918Eng, dated 07/19) used across the Yale New Haven Health System (YNHHS). Despite the evaluation target being Yale New Haven Hospital specifically, this form covers multiple YNHHS facilities: Yale New Haven Hospital (York Street Campus and St. Raphael's Campus/Smilow Care Centers), Bridgeport Hospital (including Milford Campus), Greenwich Hospital, NEMG provider practices, and Yale Medicine provider practices. It is a dual-purpose form — patients can check either "RELEASE information from my medical record TO" or "OBTAIN information FROM" — meaning it serves both outgoing release and incoming records retrieval.

A second form (form-2.pdf, Form LH000013, rev. 03/24) exists separately for Lawrence + Memorial Hospital, another YNHHS facility, with a nearly identical structure but its own contact information and slight differences (e.g., it offers a CD-ROM format option). The existence of a separate L+M form suggests that while YNHHS aims for system-wide standardization, some facilities still maintain independent ROI processes.

## 2. FINDABILITY

The form was **easy to find**. According to the retrieval notes, a web search for "Yale New Haven Hospital authorization release health information form PDF" immediately surfaced the form. It is directly linked from the YNHHS "Request Medical Records" page on the parent system website (ynhhs.org). No account, login, or portal access is required to download it.

The URL is descriptive enough — it contains `/medical-records/f4918eng_fillable_0719.pdf` — making it clear what the file is. The form is hosted on the parent system site (ynhhs.org) rather than the individual hospital site (ynhh.org), which is reasonable but could cause mild confusion for patients starting at ynhh.org. The retrieval notes indicate "forms were easy to find" and encountered "none significant" difficulties.

## 3. TECHNICAL ACCESSIBILITY

This form performs **well as a digital artifact**:

- **Text layer**: Full extractable text (5,814 characters across 2 pages). Not an image-only scan.
- **Fillable fields**: 97 interactive form fields — a high count that suggests comprehensive fillability. The form title area even includes a "Print Form and Sign Here" button-style label, indicating awareness that users will interact digitally then print for signature.
- **File size**: 564 KB for a 2-page form. Slightly large but not problematic; there are no embedded images (image count is 0), so the size likely comes from the 10 embedded fonts and form field infrastructure.
- **PDF design**: This is clearly a digitally-designed form, not a scan. The structured layout, embedded fonts (10 total), zero embedded images, and 97 fillable fields all point to a form built natively in a PDF authoring tool.

The form lacks a true electronic signature capability — patients must print and physically sign — but the fillable fields allow patients to complete everything digitally before printing. This is a half-step toward full digital workflow.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is proportionate for the scope of authorization being requested. Page 1 handles patient identification, purpose, recipient, delivery method, facility/visit selection, and record type selection. Page 2 handles sensitive information opt-outs, understanding/consent statements, submission instructions, and signatures.

**Organization**: The form follows a logical flow: identity → purpose → who to release to/obtain from → delivery method → visit type and location → date range → record types → sensitive information exclusions → legal disclosures → submission instructions → signature. Sections are clearly delineated.

**Clarity**: The language is mostly clear but includes some dense legal passages, particularly the five bullet-pointed "I understand that" statements on page 2. These cover authorization validity (one year), re-disclosure risks, voluntariness, right to review, and minor consent rules. The minor consent paragraph is especially complex: "The parent or legal guardian must sign this authorization if the patient is a minor (under age 18) unless the records relate to treatment(s) for which the minor may provide consent under CT state law. If HIV, Behavioral Health, Drug/Alcohol information is included for a patient age 13 or older, the minor must sign as described above."

**Record type selection**: The form offers granular options — 17 specific record types plus "Complete Medical Record" and "Itemized Bill." The complete record option includes a helpful clarification: "(Includes all of the above, plus nursing notes, ancillary notes, and consents. Excludes nursing flowsheets unless specifically requested)."

**Layout**: The form is dense but functional. Checkboxes are used extensively for multi-select fields (purpose, delivery method, visit type, location, record types, sensitive information exclusions, representative relationship). The sensitive information section uses an opt-out/initials approach, with the bold header: "HIV-BEHAVIORAL HEALTH- DRUG/ALCOHOL INFORMATION contained within the medical records indicated above will be released through this authorization unless otherwise indicated below."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form title — "Authorization for Access/Release of Information" — and the "Personal use" purpose checkbox indicate it is intended to serve patients requesting their own records, not just third-party releases. However, the form's structure is still fundamentally a release-to-third-party framework. Patients requesting their own records must fill in the "RELEASE information from my medical record TO" section with their own name and address, which is somewhat awkward.

**Delivery options**: The form offers five delivery methods — a genuine strength:
- MyChart (with note: "Must have active account")
- Mail
- Fax
- Secure Email
- Pick-up (with a prompt: "Please indicate how you would like to be contacted when ready for pick-up")

MyChart delivery is notable as an electronic option. However, there is no mention of EHI export, FHIR-based access, bulk data, or any digital health interoperability standards.

**Scope options**: Patients can specify date ranges ("Date(s) of Service") and select from 17 specific record categories or a complete record. This provides good granularity.

**Rights language**: The form states "this authorization is voluntary and my treatment by YNHHS/Yale Medicine is in no way conditioned on whether or not I sign this authorization." It does not explicitly cite HIPAA § 164.524 or use the term "Right of Access," though the authorization voluntariness language is consistent with HIPAA requirements. It references Connecticut law for copy charges: "There may be a charge for copies in accordance with Connecticut law."

**Turnaround**: The form states "Routine requests for medical records are generally processed within 10 business days," which is within HIPAA's 30-day requirement (with possible 30-day extension). A customer service phone number (203-688-2231) is provided.

**Multiple submission channels**: The form provides three distinct email addresses for different entities (releaseofinfo-Hosp@ynhh.org, releaseofinfo-NEMG@ynhh.org, releaseofinfo-YM@ynhh.org), a fax number (203-688-4645), and a mailing address (PO Box 9565, New Haven, CT 06535).

## 6. COMPLIANCE

**Authorization validity**: One year from signing date — standard and not unreasonably short.

**Revocation**: Patients can revoke "at any time by contacting in writing YNHHS Release of Information Services." Revocation does not apply retroactively to already-released information. This is standard.

**Fees**: The form mentions "Reasonable cost-based fees apply" for radiology images, and "There may be a charge for copies in accordance with Connecticut law." Fees are not quantified on the form itself, which is neither ideal nor unusual. For patient access requests under HIPAA, fees should be limited to reasonable, cost-based fees; the form's language is ambiguous about whether it distinguishes patient-access fees from third-party fees.

**Sensitive information handling**: The opt-out approach for sensitive records (HIV, substance abuse, behavioral health, pregnancy test, genetic testing, STD) is notable. By default, all sensitive information **will** be released; patients must affirmatively initial to exclude categories. This approach is protective of patient autonomy (patients get everything unless they opt out) but could surprise patients who assume sensitive records are withheld by default.

**Proof of authority**: The form states that authorized representatives "must provide proof of authority (except parent of a minor)." No notarization is required.

**No in-person requirement**: The form can be returned by mail, fax, or email. No requirement for in-person submission.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **MyChart delivery option**: Offering electronic delivery through the patient portal is a progressive feature that most ROI forms lack. The form explicitly lists it as the first delivery method.
- **Multiple submission channels**: Three separate email addresses (hospital, NEMG, Yale Medicine), fax, and mail — patients have genuine flexibility in how they submit the form.
- **97 fillable fields**: Exceptionally high fillability count for an ROI form, suggesting nearly every data entry point is interactive. This is a genuinely digital-first form design.
- **Granular record selection**: 17 specific record categories plus complete record and itemized bill options give patients meaningful control over what they receive.
- **10-business-day turnaround commitment**: Explicit and faster than HIPAA's maximum, with a customer service number for follow-up.

### ⚠️ AMBIGUITIES

- **Fee language is split and vague**: "Reasonable cost-based fees apply" appears next to radiology images, while "There may be a charge for copies in accordance with Connecticut law" appears in the legal section. It's unclear whether radiology-specific fees differ from general copy fees, and neither amount is disclosed. Patients requesting their own records under HIPAA Right of Access are entitled to fee limits that may differ from Connecticut's general records-copying statute.
- **"Personal use" purpose checkbox is ambiguous**: Does checking "Personal use" trigger a different (HIPAA Right of Access) fee schedule or processing pathway? The form doesn't clarify whether purpose selection affects fees, turnaround time, or any other aspect of processing.
- **Sensitive information opt-out mechanism is potentially confusing**: The bold header warns that sensitive information "will be released... unless otherwise indicated below," but the instruction says "Indicate which you do NOT want released with your initials." The double-negative framing (opt out of release by initialing exclusions) could confuse patients, especially given the stakes of inadvertent HIV or substance abuse disclosure.

### ❌ ERRORS

- **Form date is July 2019**: The form identifier "F4918Eng (07/19)" indicates it was last revised nearly 7 years ago. While not necessarily containing outdated content, the Milford Hospital note — "includes Milford Campus after 6/8/2019" and "Milford Hospital (prior to 6/9/2019)" — suggests the form was designed around a specific facility merger and hasn't been updated since. A form this old may not reflect current policies or facility configurations.
