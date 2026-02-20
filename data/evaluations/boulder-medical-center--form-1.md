# Boulder Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page **Authorization to Release and/or Obtain Patient Information** form (Form ID: AUTH001a, Rev 01.2019) from Boulder Medical Center, P.C. It serves as a general-purpose ROI form covering both directions of information flow — requesting records *from* an outside entity and sending records *to* an outside entity. The form is the only PDF-based ROI document found for this organization.

The notes indicate that Boulder Medical Center also offers two digital pathways: (1) an online Swellbox form for records created before September 9, 2024, and (2) a MyChart "Sharing Hub" for records after that date. This PDF form therefore functions alongside those digital alternatives, though it is the only traditional authorization document available for download.

## 2. FINDABILITY

**Easy to find.** The form was located on the second search attempt and is directly linked from the Medical Records department page at `https://www.bouldermedicalcenter.com/departments/medical-records/` under "Option 2: Complete and Return the Form." The source URL (`/wp-content/uploads/2020/11/BMC-Record-Release-Form.pdf`) is reasonably descriptive, though hosted in a generic WordPress uploads directory. No deep navigation, bot-blocking, or JavaScript rendering was required. The retrieval notes describe zero difficulties.

The page contextualizes the form clearly by presenting it as one of multiple record-request options, which is helpful for patients who may prefer an online alternative.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,048 characters), confirming this is a natively digital PDF, not a scan.
- **Fillable fields**: **Zero** interactive form fields despite being a digitally-created document. All blanks are represented as underscores (`_____`) or empty space. A patient cannot fill this out electronically without printing or using a PDF annotation tool.
- **File size**: 59,672 bytes (≈60 KB) for a single page — reasonable.
- **Page count**: 1 page.
- **Fonts**: 5 fonts embedded. One embedded image (likely a logo).
- **Digital-first design**: The document was created digitally (not scanned), but it was designed for print-and-fill workflow. The absence of fillable fields is a significant missed opportunity given the digital origin.

## 4. CONTENT DESIGN

**Length and density**: The entire form fits on a single page, which is commendably concise. However, this compactness comes at a cost — the authorization language in the lower half is a dense block of "I understand that..." statements with no visual separation or formatting hierarchy.

**Language clarity**: The authorization language is reasonably plain but uses some legal phrasing. The nine "I understand..." statements are clear individually but run together visually. Notably, the form includes some genuinely helpful plain-language statements: "I understand that once this information is disclosed by BMC, it will no longer be protected by BMC" and "I understand that only records created by BMC will be transferred to other entities."

**Organization**: The form flows logically: patient demographics → delivery method → record type selection → entity information → authorization language → signatures. The structure is sound.

**Record type options**: Limited to five checkbox categories: Clinic/Progress Notes, Procedure Reports, Immunization Records, Radiology Reports, and Laboratory Reports. There is no "all records" option or ability to request other common record types (e.g., medication lists, discharge summaries, operative notes, imaging files).

**Confusing directional design**: The "I am requesting my records (check one)" section attempts to handle two opposite directions of information flow on a single line: "from the Entity listed below to be mailed to ___ at BMC or faxed to ___" versus "to be sent to Entity listed below." This dual-direction design on a single form is inherently confusing and may cause errors — a patient requesting their own records must parse which direction applies.

**Header instruction**: The form includes the directive "PLEASE DO NOT FAX IF OVER 20 PAGES- PLEASE MAIL" — this is an operational instruction for the *sender* of records, not the patient, yet it appears prominently at the top where patients read first.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is a **general-purpose** release form, not one specifically designed for patients requesting their own records under HIPAA's Right of Access. There is no separate pathway or language distinguishing a patient requesting their own records from a third-party release scenario. The phrase "I am requesting my records" suggests patient-initiated use, but the surrounding structure (entity-to-entity routing) treats the patient as a conduit for TPO-style transfers rather than as the information recipient.

**Delivery options**: Two options are offered — paper (mail only; "Records can no longer be picked up at Boulder Medical Center, P.C.") and electronic (email). The email option includes the caveat: "Due to HIPAA regulations regarding security of electronic transmissions, we cannot email records to anyone but your personal email." This restricts the patient's right to direct records to a third party via email and mischaracterizes HIPAA — under 45 CFR § 164.524(c)(3)(ii), patients may direct their records to a third party of their choosing.

**Processing time**: "Please allow for 10 business days for any request" — this is within HIPAA's 30-day window but presented as a fixed timeline rather than a maximum.

**No mention of patient rights**: The form does not reference HIPAA § 164.524, the Right of Access, or inform patients of their specific rights when requesting their own records. The only HIPAA reference is the email restriction mentioned above.

**No EHI export or bulk data mention**: No reference to electronic health information export, USCDI, or any bulk data options.

**Designated agent language**: The signature section for a "Designated Agent" attests to "the continuing inability of the above patient to make or communicate health care directions." This is narrowly worded — it only contemplates an incapacitated patient and does not account for other common representative scenarios (parent of minor, legal guardian, power of attorney for convenience).

## 6. COMPLIANCE

**180-day expiration**: "This consent will expire 180 days from the date of my signature." This is a reasonable window — not overly restrictive.

**Revocation process**: Revocation requires written notice, with the written revocation "signed and dated with a date that is later than the date on this authorization." Directing patients to the Notice of Privacy Practices for revocation instructions adds friction but is standard practice.

**Cost disclosure**: "I understand that there may be a cost to copy the records." This is vague — no fee schedule or estimate is provided. Under HIPAA, fees for patient access requests are limited to reasonable, cost-based fees, and some states (Colorado) may have specific fee caps. The lack of specificity could surprise patients.

**No-conditioning statement**: The form correctly states "treatment cannot be conditioned upon my signing this authorization," which is a HIPAA requirement.

**Pickup prohibition**: "Records can no longer be picked up at Boulder Medical Center, P.C.(BMC)" — this eliminates an access pathway without explanation.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Email restriction mischaracterizes HIPAA**: The statement "Due to HIPAA regulations regarding security of electronic transmissions, we cannot email records to anyone but your personal email" is misleading. HIPAA's Right of Access (45 CFR § 164.524(c)(3)(ii)) explicitly allows patients to direct their records to a third party in writing. Framing this restriction as a HIPAA requirement is inaccurate and may deter patients from exercising their right to direct records to others.
- **Elimination of in-person pickup**: Removing pickup as an option without providing an alternative fast-turnaround delivery method means patients who need urgent access must wait for mail delivery or hope their email works.

### ⚠️ AMBIGUITIES

- **Dual-direction form confusion**: The "I am requesting my records (check one): from the Entity listed below to be mailed to ___ at BMC or faxed to ___ / or / to be sent to Entity listed below" construction is confusing. It's unclear which option a patient requesting their own records for personal use should select, since both options involve routing records to/from an "Entity."
- **Designated agent scope**: The agent attestation language ("continuing inability of the above patient to make or communicate health care directions") does not clearly cover parents acting for minors, or agents acting under a general POA — only incapacitated patients.

### ❌ ERRORS

- **"A38" artifact**: The text "A38" appears at the top of the form between the organization name and the title, likely a form routing code or print artifact. It appears in the extractable text layer and adds visual clutter without meaning to patients.
- **Stale revision date**: Form is Rev 01.2019, last uploaded to the website in November 2020. Given the September 2024 transition to a new records system (MyChart Sharing Hub), the form may not reflect current workflows or systems.

### ✨ BRIGHT SPOTS

- **Multiple access pathways mentioned on website**: While this PDF is the traditional form, the Medical Records page describes three options (Swellbox online, MyChart Sharing Hub, and this PDF), giving patients choices.
- **Single-page simplicity**: Fitting the entire authorization on one page reduces patient burden compared to multi-page forms common at other organizations.
- **Plain-language disclosures**: Statements like "once this information is disclosed by BMC, it will no longer be protected by BMC" and "only records created by BMC will be transferred" are unusually clear and honest.
