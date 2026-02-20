# Lexington Medical Center — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3.pdf is **not an ROI form**. It is a **"Model Attestation for a Requested Use or Disclosure of Protected Health Information Potentially Related to Reproductive Health Care"** — an HHS model form implementing the 2024 HIPAA Privacy Rule amendments (45 CFR 164.502(a)(5)(iii) and 45 CFR 164.509) that prohibit the use or disclosure of PHI for investigating or imposing liability related to lawful reproductive health care.

This is a **supplemental companion document** to the organization's primary ROI form (form-1.pdf, English) and its Spanish translation (form-2.pdf). It would be used when a third party (e.g., a law enforcement entity, court, or oversight body) requests PHI that is potentially related to reproductive health care. The requestor must sign this attestation before the covered entity can disclose such PHI.

The document is structured in three parts: (1) a two-page informational/instructional section explaining the prohibition and how the form works, and (2) a one-page fillable attestation form on page 3. The title and content indicate this is the HHS model attestation published in the Federal Register (89 FR 32976), adopted verbatim or near-verbatim by Lexington Medical Center.

The form is 256,103 bytes across 3 pages — substantially larger than the 72 KB two-page ROI form (form-1.pdf), likely due to the single embedded image (possibly the HHS or Lexington Medical Center logo).

## 2. FINDABILITY

The form was found on the same Medical Records page (`https://www.lexhealth.com/medical-records`) that hosts the English and Spanish ROI forms. Per the retrieval notes, this page was easy to locate via basic web search and is directly accessible from the main site. The source URL (`lexhealth.com/docs/default-source/privacy---legal/reproductive-health-attestation-form.pdf`) has a descriptive filename clearly identifying the document type.

The form is published alongside the ROI forms, which is appropriate placement since it relates to records disclosure. However, because this is not a patient-initiated form — it is a form for *requestors* of PHI — its co-location with patient-facing ROI forms on a "Medical Records" page could cause confusion. A patient looking for an ROI form might download this instead, not understanding its purpose.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and complete. The full extracted text is 7,656 characters across 3 pages, and the text is clean and coherent — no OCR artifacts or garbled content.

**Fillable fields**: Zero fillable fields (`fillable_field_count: 0`), despite the document containing multiple blank lines for name, description of PHI, and signature/date, plus two checkboxes on the attestation page. The checkboxes on page 3 are rendered as static Unicode box characters ("☐") rather than interactive form widgets. This means the attestation form portion must be printed and completed by hand.

**File format**: At 256 KB for 3 pages, the file is notably larger than either the English (72 KB / 2 pages) or Spanish (74 KB / 2 pages) ROI forms. The metadata shows 1 embedded image and 9 fonts (compared to 0 images and 5 fonts for the ROI forms), accounting for the size difference.

**Digital-first design**: The document reads as a print-oriented legal document. The two instructional pages are dense text with footnotes, and the attestation page uses blank lines and static checkbox characters — all hallmarks of a print-and-fill design. The footer note stating "This attestation document may be provided in electronic format, and electronically signed" acknowledges electronic execution but the PDF itself provides no mechanism for it.

## 4. CONTENT DESIGN

**Length**: Three pages. The first two pages are instructional/explanatory text aimed at two audiences — the person requesting PHI and the covered entity/business associate. Page 3 is the actual attestation form. The instructional-to-form ratio (2:1) is high; a busy requestor might not read the dense preamble before signing.

**Clarity**: The language is dense regulatory text. It is replete with defined terms, CFR citations, and nested conditional logic. For example: *"the reproductive health care at issue (1) is lawful under the law of the state in which such health care is provided under the circumstances in which it is provided, (2) is protected, required, or authorized by Federal law, including the United States Constitution, under the circumstances in which such health care is provided, regardless of the state in which it is provided, or (3) is provided by another person and presumed lawful."* This is comprehensible to legal/compliance professionals but would be challenging for most laypeople.

**Organization**: The document is logically structured:
- Opening paragraph explaining when the attestation is required
- Bulleted list of four applicable disclosure categories (health oversight, judicial/administrative proceedings, law enforcement, disclosures regarding decedents)
- "Prohibited Purposes" section defining what is not allowed
- "Model Instructions" split into two audience-labeled subsections: "Information for the Person Requesting the PHI" and "Information for the Covered Entity or Business Associate"
- Page 3: The attestation form itself with fields and checkboxes

The audience-specific instruction sections are a useful organizational choice, clearly delineating who needs to read what.

**Footnotes**: The document contains 21 footnotes with specific CFR citations (e.g., "See 45 CFR 160.103," "See 45 CFR 164.502(a)(5)(iii)(A)," "See 89 FR 32976, 33031"). These are thorough legal references appropriate for the document's regulatory nature.

**Font count**: 9 fonts — higher than the ROI forms — likely reflecting the mix of body text, footnotes, headers, and the attestation form fields.

## 5. PATIENT-CENTEREDNESS

**This document is not patient-facing.** It is designed for third-party requestors (law enforcement, courts, oversight bodies) and for the covered entity's own compliance use. A patient requesting their own records would not typically need to interact with this form. The HIPAA reproductive health privacy rule's attestation requirement applies specifically to disclosures for health oversight, judicial/administrative proceedings, law enforcement, and coroner/medical examiner purposes — not to patient self-access under the Right of Access.

**Impact on patients**: Indirectly, this form protects patient privacy by ensuring their reproductive health PHI is not disclosed for prohibited investigative or liability purposes. Its presence on Lexington Medical Center's website signals institutional awareness of and compliance with the 2024 privacy rule changes.

**No patient rights language**: The form does not reference HIPAA's Right of Access (45 CFR § 164.524) because it is not relevant to this document's purpose. It does correctly reference criminal penalties (42 U.S.C. 1320d-6) for knowingly obtaining PHI in violation of HIPAA.

**Format/delivery options**: The footer states *"This attestation document may be provided in electronic format, and electronically signed by the person requesting protected health information when the electronic signature is valid under applicable Federal and state law."* This explicitly permits electronic execution, though the PDF itself provides no interactive mechanism for doing so.

## 6. COMPLIANCE

**Regulatory alignment**: The form faithfully implements 45 CFR 164.509 (the attestation requirement for reproductive health care-related PHI disclosures). It correctly enumerates the four categories of disclosure that trigger the attestation requirement, defines the three prohibited purposes, and describes the conditions under which the attestation cannot be relied upon. The CFR citations throughout are accurate and current.

**Model form fidelity**: The document appears to be the HHS model attestation published with the final rule (89 FR 32976), adopted with minimal or no modification by Lexington Medical Center. Using the model form is a sound compliance strategy — it ensures the attestation meets all regulatory requirements without risk of omitting required elements.

**Scope**: The attestation correctly limits itself to the four categories where it is required (health oversight, judicial/administrative proceedings, law enforcement, disclosures regarding decedents) and does not overreach to other disclosure types.

**Criminal penalty notice**: The form correctly includes the required notice about criminal penalties: *"I understand that I may be subject to criminal penalties pursuant to 42 U.S.C. 1320d-6 if I knowingly and in violation of HIPAA obtain individually identifiable health information."*

**One-attestation-per-request**: The document notes *"You must obtain a new attestation for each specific use or disclosure request,"* consistent with 89 FR 32976, 33031.

**No concerning barriers**: Because this is a regulatory compliance form (not a patient access form), the standard compliance concerns about barriers to patient access (fees, notarization, in-person submission) do not apply in the same way.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Proactive adoption of the 2024 HIPAA reproductive health privacy rule**: Lexington Medical Center has adopted the HHS model attestation form and published it alongside its ROI forms, demonstrating awareness of and compliance with the relatively new regulatory requirements (final rule published April 2024, compliance date December 2024). Many organizations have not yet publicly posted this form.
- **Audience-specific instructions**: The "Model Instructions" section is clearly split into "Information for the Person Requesting the PHI" and "Information for the Covered Entity or Business Associate," making it easy for each party to identify what applies to them.
- **Electronic signature acknowledged**: The footer explicitly permits electronic format and electronic signatures, consistent with the rule's intent to not create unnecessary procedural barriers.

### ⚠️ AMBIGUITIES
- **Potential patient confusion from co-location**: This form is published on the same Medical Records page as the patient-facing ROI forms (form-1 and form-2). There is no indication in the retrieval notes that the website provides context explaining that this form is for third-party requestors rather than for patients requesting their own records. A patient navigating the Medical Records page might download this dense regulatory document, find it incomprehensible, and become confused or discouraged about the records request process.
- **No Lexington Medical Center branding or customization visible in text**: The extracted text contains no references to "Lexington Medical Center" or "Lexington Health." The form appears to be the unmodified HHS model attestation. While this ensures regulatory compliance, it may leave requestors uncertain whether this is the correct form for this specific institution.
