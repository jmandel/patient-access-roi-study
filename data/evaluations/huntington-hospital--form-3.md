# Huntington Hospital — Form 3 Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3 is titled **"Request for Access to Health Information by Patient or Personal Representative"** (form ID VD087, dated 9/28/21). This is a **patient-specific access request form** — distinct from form-1, which is a general third-party "Authorization for Release of Health Information." The form is a Northwell Health system-wide document; Huntington Hospital does not publish its own facility-level forms. The opening sentence explicitly invokes HIPAA right of access: *"I am making this request under the provisions of the Health Insurance Portability and Accountability Act 'HIPAA') that entitle me to access my own health information including directing it to another person or entity (45 CFR 164.524)."*

Northwell provides a four-document suite: the general ROI form (form-1), its instructions (form-2), the patient access form (form-3, this document), and its instructions (form-4). The existence of a dedicated patient access form separate from the third-party release form is notable and demonstrates that Northwell has thoughtfully distinguished between the two use cases.

## 2. FINDABILITY

Per the retrieval notes, forms were **easy to find** — directly linked from the Northwell Health medical records page. However, the initial web search was complicated by name confusion with Huntington Hospital in California. Adding "Northwell" resolved this. The form URL (`northwell.edu/sites/northwell.edu/files/2022-03/request-for-access-to-health-information-form-english-2022.pdf`) is descriptive and clearly identifies the document. The filename includes "request-for-access" language, distinguishing it from the general release form. No facility-specific link exists at `huntington.northwell.edu` — patients must navigate to the parent system's site, which adds a layer of indirection for someone starting from the hospital's own website.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (3,912 characters across 2 pages). Not an image-only scan.
- **Fillable fields**: 28 interactive form fields detected. This is a genuinely fillable PDF — patients can complete it digitally without printing. This is a strong positive. (Note: `fillable_field_names` is empty in the metadata, so specific field names were not extracted, but the count of 28 is substantial for a 2-page form.)
- **File size**: 656 KB for 2 pages with 0 embedded images. Somewhat large for a text-only PDF (form-1, which is 3 pages with no fillable fields, is only 44 KB), but not unreasonable for a fillable form.
- **Fonts**: 4 fonts embedded.
- **PDF design**: This is clearly a digital-first document, not a scan. Clean text rendering, structured layout, interactive checkboxes (represented as `£` in the text extraction).

## 4. CONTENT DESIGN

**Length**: 2 pages — concise and appropriate for a patient access request. This is shorter than the 3-page general ROI form (form-1), reflecting that patient access requests are simpler than third-party releases.

**Organization**: The form follows a logical flow:
1. Patient demographics (name, DOB, address, phone)
2. Source facility ("From Who")
3. Recipient ("To me" or "To Another Person or Entity")
4. Delivery method and format (6 manner/format combinations)
5. Requested health information (7 specific categories)
6. Special section for substance use disorder/HIV information
7. Signature block with interpreter and witness provisions

**Clarity**: Language is generally accessible. Section headers use numbered items. The parenthetical labels *"(From Who)"* and *"(To Who)"* in sections 1–2 are informal and helpful, though grammatically they should be "From Whom" / "To Whom." The unsecure email acknowledgment is clearly worded: *"By checking here, I acknowledge that e-mail sent unencrypted means others may be able to access the information and read it once it is transmitted over the internet."*

**Delivery options matrix**: The form presents a structured matrix pairing delivery manner (Mail, Pickup, Electronic mail, Fax, Other) with format (Paper copy, USB, CD, Secure email, Unsecure email). This is well-designed but moderately complex — the matrix layout with nested checkboxes may require careful reading.

**Record type options**: Offers granular choices — abstract, date-range records, entire record, lab results, radiology, itemized bills, and a free-text "Other" option. This gives patients meaningful control over scope.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is explicitly designed for patient self-access, not third-party release. The title, opening paragraph, and HIPAA citation all make this clear. The "To me" checkbox in section 2 is the first option, signaling that self-access is the primary use case. Patients can also direct records to another person or entity, which correctly reflects HIPAA's right to direct access.

**Scope options**: Strong — patients can request specific record types, date ranges, or their entire record. The 7 checkbox categories cover common needs well.

**Format options**: Excellent range — paper, USB flash drive, CD, secure email, unsecure email (with acknowledgment), fax, and an open "Other" field. The inclusion of USB and CD is notable for patients wanting bulk electronic records. The secure/unsecure email distinction with explicit consent is a good practice.

**Right of access language**: Explicitly cites HIPAA 45 CFR 164.524 in the opening paragraph. This is a clear compliance signal and educates patients about their rights.

**EHI Export awareness**: No mention of electronic health information export, patient portal access, or FHIR/API-based options. The electronic options (email, USB, CD) are traditional digital media rather than modern health data exchange mechanisms.

**Companion instructions**: Form-4 provides a dedicated 2-page instruction document with annotated examples. This is a meaningful accessibility aid, though it requires patients to locate a second document.

## 6. COMPLIANCE

**No notarization requirement**: The form requires only a patient signature — no notarization or in-person submission mandate.

**Witness**: A witness signature line is present but the form does not explicitly state it is *required*. The line reads "Witness to Signature (Signature)" without mandatory language. This is ambiguous — it could be interpreted as required or optional.

**Substance use disorder / HIV section**: Section 5 requires a purpose and expiration date *only* for records containing substance use disorder treatment information or HIV/AIDS information. This aligns with 42 CFR Part 2 requirements for substance abuse records and New York Public Health Law for HIV. The form correctly notes that consent for substance use disorder information *"is subject to revocation at any time."*

**No fee disclosure**: The form does not mention fees or costs, which avoids creating a discouragement but also means patients have no visibility into potential charges before submitting.

**Expiration**: The form does not impose an expiration date on the access request itself (unlike the general ROI form-1, which requires an expiration date). The expiration field in section 5 applies only to the substance use/HIV consent component. This is appropriate — patient access requests under HIPAA do not require expiration dates.

**Voluntary signing**: The form does not include a statement that signing is voluntary (the general ROI form-1 includes this language). For a patient access form this is less concerning since the patient is exercising their own right, but a note that the form is voluntary would still be good practice.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Dedicated patient access form**: Northwell maintains a separate form specifically for patient self-access (this form) versus third-party release (form-1). This is uncommon and demonstrates a thoughtful approach to HIPAA compliance. Many organizations use a single general ROI form for both purposes.
- **Explicit HIPAA 164.524 citation**: The opening paragraph directly cites the regulatory basis for patient access rights. This educates patients and signals strong compliance awareness.
- **28 fillable fields**: A genuinely fillable PDF that patients can complete digitally — a significant usability advantage over the general ROI form (form-1), which has zero fillable fields.
- **Broad electronic delivery options**: USB flash drive, CD, secure email, and unsecure email (with informed consent) give patients real choice in how they receive their records. The inclusion of USB is particularly notable.
- **Companion instruction document**: A dedicated instructions sheet (form-4) with annotated examples lowers the barrier for patients unfamiliar with these forms.

### ⚠️ AMBIGUITIES

- **Witness requirement unclear**: The witness signature line at the bottom does not state whether a witness is required or optional. Patients may assume it is mandatory, creating an unnecessary barrier if it is not.
- **"From Who" / "To Who" phrasing**: While informal and arguably helpful, the parenthetical labels in sections 1–2 may confuse patients who aren't sure whether "From Who" means the source facility or the requesting patient.

### ❌ ERRORS

- **Missing closing parenthesis in HIPAA citation**: The text reads *"Health Insurance Portability and Accountability Act 'HIPAA')"* — the opening parenthesis before "HIPAA" was rendered as an opening single quote rather than a parenthesis, creating a mismatched bracket. (This may be a text extraction artifact, but the extracted text consistently shows this.)
