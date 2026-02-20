# Cone Health — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **Request for Amendment of Health Information** form — not a Release of Information (ROI) form. It allows patients to request corrections or additions to their medical records, exercising their right under HIPAA (45 CFR § 164.526) to amend protected health information.

Within Cone Health's document set, this form sits alongside three ROI-related documents:
- **form-1.pdf**: English HIPAA Authorization for Use/Disclosure (the primary ROI form)
- **form-2.pdf**: Spanish-language version of the same HIPAA Authorization
- **form-4.pdf**: Cone Health Medical Group (CHMG) separate ROI form for physician practices

Form-3 was published on the same Medical Records web page as the ROI forms. While it is not itself an authorization for records release, it is a patient-facing HIM form that exercises a distinct HIPAA right (amendment vs. access). Its presence alongside the ROI forms is appropriate — patients navigating to the Medical Records page would reasonably expect to find amendment request forms there too.

## 2. FINDABILITY

Per the collection notes, this form was found on Cone Health's main Medical Records page at `https://www.conehealth.com/patients-visitors/medical-records/`. The source URL (`/app/files/public/7af00a9b-d7fd-40dc-ba5a-dff91c8192a7/Request-for-Amendment-of-Health-Information.pdf`) uses a UUID-based path after a redirect from the original `/app/files/public/3334/...` URL. The filename is descriptive ("Request-for-Amendment-of-Health-Information.pdf"), which helps users understand what they're downloading.

The form is grouped with the ROI forms on the same page, which means a patient looking for amendment rights doesn't need a separate search. However, the notes indicate the site uses bot protection that blocks basic `curl` requests, requiring browser-like headers — this could hinder programmatic access or accessibility tools.

## 3. TECHNICAL ACCESSIBILITY

**Format:** PDF 1.5, 1 page, 13,430 bytes — extremely compact.

**Text layer:** Present and functional. The full text (2,508 characters) extracts cleanly with no OCR artifacts or garbled content.

**Fillable fields:** Zero (`fillable_field_count: 0`). Despite having clearly defined blank lines for patient name, date of birth, MRN, phone number, dates, and a free-text amendment description area, none of these are implemented as interactive form fields. Patients must print and hand-write their responses.

**Fonts:** Only 2 fonts used, suggesting a simple, clean layout.

**Embedded images:** 1 (likely a logo or header graphic).

**Not a scan:** The document has a native text layer, not an image-only scan.

The lack of fillable fields is a notable shortcoming for a form this simple. With only ~6 identification fields and one free-text area, implementing fillable PDF fields would be straightforward and would significantly improve usability.

## 4. CONTENT DESIGN

The form is concise and fits on a single page. It has a clear structure:

1. **Header/routing instruction:** "Forward this completed form to the Health Information Management Department at the Cone Health hospital, physician practice or other area where the record was created." This tells the patient where to send it, though it places the burden on the patient to determine which specific HIM department applies.

2. **Patient identification fields** (5 fields): Patient Name, Date of Birth, Patient Medical Record Number, Telephone, Date of Record to Be Amended, Type of Record to Be Amended.

3. **Explanatory notice:** "Patients may seek to change information in their medical records in order to improve the accuracy or completeness of the information. The original information contained in the record will not be erased or obliterated as a result of this amendment." This is a helpful, plain-language explanation of what an amendment does and does not do.

4. **Amendment description area:** Free-text space with the prompt "Please explain how the entry is incorrect or incomplete. What should the entry state in order to be more accurate or complete?" followed by approximately 8 blank lines. The instruction "Please attach an additional (one) page as necessary" limits supplemental documentation to one extra page.

5. **Notification section:** "Please identify the names and addresses of the persons who must be notified of the amendments, such as your personal physician." Two blank lines are provided. The form adds: "We also will be notifying the following persons who have received health information from your medical records in order to conduct business with Cone Health."

6. **Signature block:** Signature of Patient or Authorized Party, Date, Printed Name, Relationship to Patient.

The language is generally clear and at an accessible reading level. The form does not use legal jargon unnecessarily. However, it lacks some helpful elements: there is no reference to response timelines (HIPAA requires action within 60 days), no explanation of what happens if the amendment is denied, and no mention of the patient's right to submit a statement of disagreement.

## 5. PATIENT-CENTEREDNESS

**Strengths:**
- Plain-language notice explaining that amendments add to (not replace) existing records — this manages expectations well.
- The prompt for the amendment description is constructive: it asks both what is wrong and what the correct entry should be, guiding the patient toward an actionable request.
- Inclusion of a notification section empowers the patient to ensure relevant parties are informed.

**Weaknesses:**
- No submission options are specified beyond the vague instruction to "forward this completed form to the Health Information Management Department." There is no mailing address, fax number, email address, or portal submission option provided on the form itself. The patient must figure out how to get the form to the right place.
- No mention of response timeline or what to expect after submission.
- No guidance on what happens if the amendment is denied, or the patient's right to appeal or file a statement of disagreement per 45 CFR § 164.526(d).
- No mention of whether this form can be submitted electronically.
- The "(one) page" attachment limit may be insufficient for complex amendment requests involving supporting documentation.
- The form requires the "Patient Medical Record Number," which many patients may not have readily available. No guidance is provided on how to obtain this number.

## 6. COMPLIANCE

- **Scope:** The form addresses the HIPAA right to amendment (45 CFR § 164.526), a separate right from the right of access (45 CFR § 164.524). It does not create barriers to records access.
- **No fee mentioned:** Amendment requests under HIPAA cannot be subject to a fee, and the form correctly does not mention any charges.
- **Attachment limit:** The instruction "Please attach an additional (one) page as necessary" could be seen as a soft limit on supporting documentation. HIPAA does not specify a page limit for amendment requests, though organizations may set reasonable administrative requirements.
- **No timeline disclosure:** The form does not inform patients of the 60-day response window required by HIPAA (45 CFR § 164.526(b)(2)), nor does it mention the possibility of a 30-day extension.
- **Authorized party signing:** The form allows an "Authorized Party" to sign but does not specify what documentation is needed to establish authorization, unlike form-1 which requests a copy of legal documents.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **No submission destination provided.** The instruction says "Forward this completed form to the Health Information Management Department at the Cone Health hospital, physician practice or other area where the record was created," but provides no specific address, fax, email, or other contact information. Patients must independently determine where to send the form. By contrast, form-1 provides a specific mailing address for revocations (Moses H. Cone Memorial Hospital, HIM Dept. – ATTN: ROI, 1200 N Elm Street, Greensboro, NC 27401) — a similar level of specificity would be appropriate here.

- **"Type of Record to Be Amended"** is a fill-in-the-blank field with no guidance on what constitutes a "type" of record. Patients may not know whether to write "progress note," "lab result," "discharge summary," or something else. Form-1's itemized checkbox list of record types (discharge summary, history and physical, lab results, etc.) shows that Cone Health has a standard vocabulary for record types that could be offered as guidance here.

### ❌ ERRORS

- **Attachment limit language is awkwardly phrased.** "Please attach an additional (one) page as necessary" — the parenthetical "(one)" reads as an odd formatting choice. It's unclear whether it means "one additional page" as a maximum or is simply emphasizing that attachment is optional. The phrasing would benefit from clarification.

### ✨ BRIGHT SPOTS

- **Clear amendment explanation.** The notice that "The original information contained in the record will not be erased or obliterated as a result of this amendment" is a genuinely helpful disclosure. Many patients may fear that requesting an amendment means the original record disappears; this sets expectations correctly in plain language.

- **Patient notification empowerment.** Asking the patient to identify who should be notified of the amendment — and proactively stating that Cone Health will also notify its own business contacts — demonstrates transparency about the amendment propagation process.
