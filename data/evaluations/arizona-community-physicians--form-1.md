# Evaluation: Arizona Community Physicians — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is ACP's primary general-purpose **"Authorization to Release Medical Information"** (Form 100, revised 08/26/2024). It is a single-page, print-and-fill PDF designed for requesting the transfer of medical records between entities. The form is titled with ACP's corporate name ("Arizona Community Physicians P.C.") and is the most recently updated of the seven forms found.

Among the seven documents retrieved for this organization, form-1 is the canonical ROI form. The others serve more specialized or complementary roles:

- **form-2** is a near-identical variant pre-filled with a specific practice location ("Associates in Family Practice" at 6565 E. Carondelet Dr) and includes more granular purpose checkboxes (Moving, Treatment/consultation, Dissatisfaction, Change of Insurance). It is an older version (08/04/2017) of the same Form 100 template.
- **form-3** and **form-5/6** are standing access-designation forms (adult and minor) for ongoing permissions, not one-time release requests.
- **form-4** is an imaging-specific release for ACP Northwest and Eastside Imaging.
- **form-7** is a HIPAA amendment request form, not an ROI form.

The notes also document that ACP offers a **"Medical Records Electronic Self Request"** via an external service at `swellbox.com/arizona-cp-wizard.html`, providing an alternative electronic pathway that bypasses this paper form entirely.

## 2. FINDABILITY

The form was straightforward to locate. Per the retrieval notes, ACP's website has a **"Patient Forms" page** linked from the main navigation at `azacp.com/forms/`, which lists all available forms clearly. Both general web searches and site-specific searches returned direct PDF URLs. The form is hosted at a predictable WordPress uploads path: `azacp.com/wp-content/uploads/docs/forms/Medical_Records_Release_Form.pdf`.

No login, portal access, or patient verification was required to download the form. The filename ("Medical_Records_Release_Form.pdf") is descriptive and intuitive.

The one gap: the form itself contains **no instructions for how or where to submit it**. There is no mailing address, fax number, email address, or portal link printed on the form. A patient who downloads and prints this form has no guidance on where to send it. By contrast, form-7 (the amendment request) explicitly provides a mailing address, fax number, and in-person delivery option.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 112 KB — lightweight and quick to download.
- **Page count**: 1 page — concise.
- **Text layer**: Present. Text is selectable and searchable, enabling assistive technology use and copy/paste.
- **Fillable fields**: Zero. The form has 0 fillable form fields despite being a PDF. All fields are blank-line placeholders (e.g., `Patient Name_______________________________`), requiring the patient to print the form and fill it by hand.
- **Fonts**: Only 2 fonts used — simple, consistent typography.
- **Images**: 2 embedded images (likely a logo and possibly a checkbox graphic).
- **Scan quality**: Not an image-only scan; the text layer is native, not OCR.

The lack of fillable fields is the most significant technical limitation. In 2024–2025, a flat PDF requiring printing and handwriting is a meaningful barrier for patients who lack printers or prefer digital workflows. The existence of the Swellbox electronic option partially mitigates this, but that alternative is not referenced anywhere on the form itself.

## 4. CONTENT DESIGN

**Structure and layout**: The form is organized into clearly labeled sections with capitalized headers: PATIENT INFORMATION, INFORMATION TO BE RELEASED FROM, INFORMATION TO BE RELEASED TO, PURPOSE FOR THIS REQUEST, TYPE OF INFORMATION TO BE RELEASED, and a signature block. The single-page format keeps things concise.

**Patient identification fields**: Name, Former Name, Account #, Daytime Telephone, Birth Date. Notably, no Social Security Number is requested — a positive privacy practice. The "Former Name" field is a thoughtful inclusion for patients whose names have changed.

**Release FROM/TO structure**: The form uses a bidirectional model where the patient specifies both the releasing entity and the receiving entity. This is a standard third-party release structure, not a patient-access-specific design.

**Delivery options**: Three options are offered — "Paper," "Disc (PDF format)," and "Email" — with the caveat: *"Email option only available for medical records processed by CIOX."* This is the only mention of CIOX (a third-party records management company, now Datavant) on the form, and it's not explained further.

**Purpose options**: Minimal — only two checkboxes: "At request of Patient" and "Other (specify)." Compare this to form-2's six options (Moving, Treatment/consultation, Dissatisfaction, Change of Insurance Plans, At patient's request, Other). The streamlining in form-1 is arguably simpler but provides less structured data.

**Record type selection**: The form separates records into two tiers:
1. **General Release / Medical Records/Excluding Protected Records** — with a note that this is *"limited to 1 year of information including Lab, x-ray reports unless otherwise stated"* and an "Other Records" option.
2. **Information Protected by State/Federal Law** — explicitly listing "AIDS/HIV and Other Communicable Disease Information, Behavioral Health Care/Psychiatric Care, Alcohol and/or Drug Abuse Treatment."

This two-tier structure reflects the heightened consent requirements for 42 CFR Part 2 (substance abuse) and state-level protections for HIV and behavioral health records. The design requires patients to affirmatively check a separate box to release protected records, which is appropriate.

**Fee disclosure**: Fees are stated in a footnote under the "Other" purpose checkbox: *"The standard charge for copying medical records is $6.50 for a disc and $0.07 per page for paper. However, there may be additional charges for shipping and handling. Please do not submit payment with this request, you will receive a billing invoice."* The placement under "Other" is odd — fees apply regardless of purpose, but the visual association with "Other" could confuse patients who check "At request of Patient" and might not read the footnote.

**Expiration and revocation**: Clearly stated: *"THIS AUTHORIZATION WILL AUTOMATICALLY EXPIRE AFTER ONE YEAR (or 60 days for drug and alcohol abuse records) from the date of signing."* Revocation is available *"at any time by providing written notice."*

**Consent language**: The form includes: *"I understand authorizing the disclosure of the information identified above is voluntary. I need not sign this form to ensure healthcare treatment."* This is a required HIPAA element and is present, though brief.

**What's missing**: No mention of the right to receive a copy of the signed authorization. No explanation of what happens after submission (timeline, process). No reference to HIPAA by name. No mention of the patient's right to access their own records.

## 5. PATIENT-CENTEREDNESS

**Primary concern: The form does not distinguish between patient access and third-party release.** The structure — with "INFORMATION TO BE RELEASED FROM" and "INFORMATION TO BE RELEASED TO" fields — frames the transaction as a transfer between two organizations. A patient requesting their own records would need to write their own name and address in the "TO" field, but the form doesn't guide them to do this. The field label "Name of Physician/Organization" in the TO section even implies the recipient should be a provider, not the patient themselves.

This conflation matters because HIPAA's Right of Access (45 CFR § 164.524) gives patients specific rights when requesting their own records — including fee limits and a 30-day response deadline — that differ from third-party release scenarios. By using a single form for both, ACP risks applying third-party processes and fee structures to patient access requests.

**Fee transparency**: The $0.07/page rate is low and well within HIPAA's reasonable cost-based fee guidance. The $6.50 disc fee is also modest. However, the phrase *"additional charges for shipping and handling"* is open-ended and unquantified, leaving patients unable to estimate total costs upfront.

**Submission pathway**: As noted, the form provides no submission instructions. A patient downloading this form from the website has to independently figure out how to return it to ACP — a significant usability gap.

**Language accessibility**: The form is English-only. While form-6 (the minor access designation form) has a Spanish translation, there is no Spanish version of this primary ROI form. Given ACP's Tucson, Arizona location — where approximately 42% of the population is Hispanic — this is a notable gap.

**The 1-year records default**: The general release is *"limited to 1 year of information... unless otherwise stated."* While dates of treatment fields allow specification, a patient who checks "General Release" without carefully reading the fine print may not realize they're only getting one year of records. This default could frustrate patients seeking a complete records history.

## 6. COMPLIANCE

**HIPAA authorization elements (45 CFR § 164.508)**: The form includes most required elements for a valid HIPAA authorization: description of information to be disclosed, persons authorized to make/receive the disclosure, purpose, expiration, right to revoke, statement that treatment is not conditioned on signing. However, it is missing a few elements typically expected:
- No explicit statement that information disclosed may be subject to re-disclosure by the recipient and may no longer be protected by HIPAA (required by § 164.508(c)(2)(iii)). Notably, form-2 *does* include re-disclosure language for substance abuse records.
- No mention of the patient's right to receive a copy of the signed authorization.

**Fees**: $0.07/page and $6.50/disc are within reasonable bounds. For patient access requests specifically, HIPAA limits fees to reasonable cost-based amounts. These rates appear compliant, though the undefined "shipping and handling" surcharge introduces uncertainty.

**CIOX/Datavant involvement**: The note *"Email option only available for medical records processed by CIOX"* suggests records fulfillment is at least partially outsourced. This is common practice but means the patient's experience (timeline, communication) may be shaped by a third party not identified on the form.

**No notarization or witness requirements**: The form requires only the patient's (or representative's) signature and date — no notary, witness, or in-person submission is demanded.

**No ID verification required on the form**: Unlike form-7 (amendment request), which requires a form of ID, this release form does not mention identity verification at submission.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party release conflation**: The form's FROM/TO structure and the "Name of Physician/Organization" label in the TO section suggest it is designed for provider-to-provider transfers, not patient self-requests. A patient trying to get their own records would not find clear guidance on how to use this form for that purpose.

- **CIOX email restriction unexplained**: The note *"Email option only available for medical records processed by CIOX"* raises questions: Which records are processed by CIOX and which aren't? How does a patient know? What happens if they check the email box for records not processed by CIOX?

- **"Additional charges for shipping and handling"**: Unquantified and open-ended. A patient cannot estimate total cost before submitting.

- **1-year default for general release**: The statement *"This will be limited to 1 year of information including Lab, x-ray reports unless otherwise stated"* may not be noticed by patients who check the General Release box without reading the parenthetical, potentially resulting in incomplete records.

### ❌ ERRORS

- **No submission instructions**: The form contains no mailing address, fax number, email, or portal URL for returning the completed form. This is a functional defect — the form cannot be used without supplementary information that is not provided on the document itself.

- **Fee disclosure placement**: The fee information appears as a footnote visually associated with the "Other" purpose checkbox, preceded by an asterisk matching "Other*." A patient selecting "At request of Patient" might reasonably skip the "Other" footnote and miss the fee disclosure entirely.

### ✨ BRIGHT SPOTS

- **Electronic self-request alternative**: ACP offers a Swellbox-powered online wizard for electronic records requests (`swellbox.com/arizona-cp-wizard.html`), providing a modern digital pathway alongside the paper form. This is better than many organizations offer, though the form itself doesn't reference this option.

- **No SSN requested**: The form collects only name, former name, phone, birth date, and account number — no Social Security Number, which is a positive privacy practice.

- **Comprehensive form ecosystem**: ACP provides seven distinct forms covering general release, practice-specific release, imaging release, adult/minor access designation (with Spanish translation for minors), and amendment requests. This level of differentiation serves diverse patient needs.

- **Recent revision date**: Form-1 was revised 08/26/2024, indicating active maintenance of the form. This is the most recently updated form in the set (form-4 was updated 07/11/2025 per its metadata, suggesting ongoing attention to these documents).

- **Protected records separation**: The clear separation of general records from HIV/behavioral health/substance abuse records, with a distinct checkbox and separate date range fields, is a well-designed compliance feature that protects patients from inadvertent disclosure of sensitive information.
