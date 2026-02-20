# El Centro de Corazón — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "AUTHORIZATION FOR DISCLOSURE OF HEALTH INFORMATION" form. Page 1 is in English; page 2 is a Spanish translation ("AUTORIZACIÓN PARA LA DIVULGACIÓN DE INFORMACIÓN DE SALUD"). It is the only ROI-related document found for this organization. The form is a general-purpose authorization for disclosure — it is not specifically designed for patient self-access under HIPAA's Right of Access (45 CFR § 164.524). Instead, it uses a "provide to / receive from" framing that covers both incoming and outgoing disclosures with third parties. El Centro de Corazón is pre-printed on one side of the exchange, with a blank for the other party.

The source URL (`/wp-content/uploads/2020/08/AUTHORIZATION-FOR-DISCLOSURE-OF-HEALTH-INFORMATION-2.pdf`) suggests this version was uploaded in August 2020. The "-2" suffix hints at a prior revision.

## 2. FINDABILITY

**Retrieval difficulty: Easy.** A single web search for the organization's name plus "release of information form" returned a direct link. The PDF is hosted publicly on El Centro de Corazón's WordPress site with no authentication or CAPTCHA required. The URL path (`/wp-content/uploads/...`) is a standard WordPress media upload — functional but not a descriptive, human-friendly URL. The form does not appear to be linked from a clearly labeled "Medical Records" or "Patient Resources" page, but its direct discoverability via search compensates.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (4,879 characters across both languages). Not an image-only scan.
- **Fillable fields**: Zero (`fillable_field_count: 0`). The form must be printed and hand-completed, or annotated in a PDF viewer. There are no interactive checkboxes, text fields, or dropdowns.
- **File size**: 513 KB for a 2-page document with only 4 embedded images. This is moderately heavy for its content, suggesting embedded logos or decorative elements.
- **Font count**: 8 fonts — reasonable for a bilingual document.
- **Digital-first design**: No. The form uses underscore-line blanks for text entry ("Patient Full Name: ___________________") and instructs the user to "circle one" — both hallmarks of a print-first design. The checkboxes in the English section lack Unicode checkbox characters (the Spanish section uses □ symbols). This is a document designed to be printed and filled out by hand.

## 4. CONTENT DESIGN

**Length**: Appropriate — one page per language, with the English and Spanish versions mirroring each other closely.

**Structure**: The form follows a logical flow:
1. Patient identification (name, DOB, phone)
2. Direction of disclosure ("provide to / receive from")
3. Reason for disclosure (9 checkbox options)
4. Type of information to disclose (6 checkbox options in English, 5 in Spanish)
5. Sensitive information acknowledgment
6. Revocation rights and expiration
7. Signature block

**Clarity**: The language is relatively plain, though legal constructs appear ("I hereby authorize," "may be re-disclosure by the recipient"). The sentence "I understand that the information disclosed by this authorization may be re-disclosure by the recipient" contains a grammatical error — "re-disclosure" should be "re-disclosed."

**Checkbox options for reason**: Continuing of Care, Financial Insurance Verification, Update Evaluations/Assessments, Assess/Monitor Treatment Needs, Monitor Medical Status, Legal Proceedings, Transfers of Medical Care, Primary Care Provider Coordination, and Other. Notably, "Personal/Patient Request" is not listed as a reason — a patient requesting their own records has no matching option.

**Checkbox options for information type**: Medical Office Visits, Immunization Records, Lab Results, Medical/Progress Notes, Billing Records, and Other. This is a reasonable but limited list; it omits radiology/imaging, operative reports, and medication lists.

**Layout**: Functional but dense. The English version crams all content onto a single page. Signature lines include Patient, Legal/Authorized Representative, and a Witness line.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is oriented toward third-party disclosure, not patient self-access. The structure presumes information is flowing between El Centro de Corazón and another entity. There is no option for "send records to me, the patient." A patient requesting their own records would need to write their own name/address in the "provide to / receive from" blank, which is not intuitive.

**Reason checkboxes**: None of the 9 listed reasons map to "I want my own records." The closest is "Other (Specify)," which forces the patient to write in their purpose — an unnecessary burden for what should be the most straightforward use case.

**Format/delivery options**: None. The form does not ask how the patient wants to receive records (mail, fax, electronic, in-person pickup). There is no mention of electronic delivery, patient portal access, or email.

**Right of Access language**: Absent. The form does not reference HIPAA § 164.524, the patient's right of access, or any patient rights. It does mention that "information disclosed by this authorization may be re-disclosure by the recipient and no longer protected by the federal privacy laws" — a re-disclosure warning — but no affirmative rights language.

**EHI Export / bulk data**: Not mentioned.

**Fee disclosure**: The form states "I understand that I may be charged for the copies of health records I have requested" but provides no specifics about amounts, limits, or HIPAA's cost-based fee restrictions. The Spanish version similarly states "Yo entiendo que puedan resultar cargos asociados a la solicitud de records médicos."

## 6. COMPLIANCE

**Expiration**: "This authorization is valid for 90 days unless otherwise stated here: ________________________." A 90-day default expiration is relatively short. For patient self-access requests, this is not an issue (requests should be fulfilled within 30 days per HIPAA). For ongoing third-party disclosures, it requires periodic re-authorization.

**Witness requirement**: The form includes a "Witness' Signature" line ("Firma Del Testigo" in Spanish). HIPAA does not require a witness for authorization forms. While this appears optional (no language mandates it), the presence of the line may lead patients or staff to believe a witness is required, creating a potential barrier.

**Sensitive information**: The form bundles sensitive-information consent into the general authorization: "I understand and agree that this information may include information related to diagnosis and/or treatment of mental illness, drug and/or alcohol abuse, HIV testing or status, sexually transmitted diseases, Hepatitis B or C testing." This is a blanket acknowledgment rather than granular opt-in/opt-out for each category. Depending on Texas state law and 42 CFR Part 2 (substance abuse records), this may not satisfy the specific consent requirements for substance abuse treatment records.

**Revocation**: Clearly stated — the patient can revoke "at any time by submitting a revocation in writing." This is appropriate.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No patient self-access pathway**: The form's structure and checkbox options are entirely oriented toward third-party disclosure. A patient exercising their HIPAA Right of Access has no clear path — there is no "send records to me" option, no "personal request" reason checkbox, and no delivery preference field. This effectively makes the patient a second-class user of the form.

### ⚠️ AMBIGUITIES

- **Witness line without explanation**: The "Witness' Signature" field appears on both versions without any indication of whether it is required or optional. Staff may enforce it as mandatory, adding a barrier that HIPAA does not require.
- **"Provide to / receive from: (circle one)"**: This instruction asks the user to circle whether El Centro de Corazón should *provide* records to the other party or *receive* records from them. The concept is reasonable, but "circle one" on a non-fillable PDF is a print-era instruction that may confuse patients completing the form digitally.
- **Fee language is vague**: "I may be charged for the copies" gives no indication of what charges to expect, whether cost-based limits apply, or how to dispute fees.

### ❌ ERRORS

- **Grammatical error**: "the information disclosed by this authorization may be re-disclosure by the recipient" — should read "re-disclosed."
- **Checkbox mismatch between English and Spanish**: The English version lists 6 information-type checkboxes (Medical Office Visits, Immunization Records, Lab Results, Medical/Progress Notes, Billing Records, Other). The Spanish version lists only 5 — "Billing Records" / "Registros de Facturación" is omitted. A patient using the Spanish form cannot specifically request billing records via checkbox.
- **Missing accent marks**: The organization name appears as "El Centro de Corazon" (no accent) throughout the form, though the official name uses "Corazón" with an accent.

### ✨ BRIGHT SPOTS

- **Bilingual form (English/Spanish)**: Providing a full Spanish translation on the same document is a meaningful accessibility feature, especially for an FQHC serving Houston's predominantly Spanish-speaking communities. This is not common across healthcare providers.
- **Compact and not overwhelming**: At one page per language, the form avoids the multi-page complexity that can discourage patients from completing it.
