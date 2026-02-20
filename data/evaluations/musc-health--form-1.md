# MUSC Health University Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is the primary **"Authorization to Release Protected Health Information"** (English version), 2 pages, revised 10/2023 (document ID: `OTE 700078 Rev. 10/2023`). It is the current main ROI form linked directly from the MUSC Health medical records page at `muschealth.org/patients-visitors/medical-records`. The source URL is `https://muschealth.org/-/sm/health/medical-records/f/authorization-to-disclose-phi.pdf`.

This form sits within a family of five related documents found for MUSC Health:

- **form-1.pdf** (this document): Current English authorization form, 2 pages — the primary ROI pathway.
- **form-2.pdf**: An older version of the same authorization (Version 11, dated 11/17, 1 page), hosted under the insurance section of the site. Has an older Charleston address (169 Ashley Avenue) vs. form-1's updated address (3 South Park Circle).
- **form-3.pdf**: A dental-specific authorization form (Version 9, dated 5/19), tailored for the College of Dental Medicine.
- **form-4.pdf**: MyChart instructions document (not an authorization form), explaining how to request records via the patient portal.
- **form-5.pdf**: Spanish-language version of form-1, with identical structure and content.

Form-1 is clearly the **canonical, current authorization form** intended for general medical records requests. It supersedes form-2 and covers all MUSC Health facility locations across South Carolina.

## 2. FINDABILITY

Findability is **excellent**. Per the retrieval notes, the form is reachable in approximately 2 clicks from the homepage: Patients & Visitors → Medical Records. The medical records page is well-organized, offering three clear pathways (MyChart, online eRequest via Ciox/Swellbox, and manual form download). The authorization form is linked under a clearly labeled "Authorization Form for Medical Records Release" section, with both English and Spanish versions available.

Web searches for terms like `"MUSC Health" "authorization" "release" "health information" filetype:pdf` returned the form directly. The URL path (`/medical-records/f/authorization-to-disclose-phi.pdf`) is descriptive and intuitive. No bot-blocking or access issues were encountered during retrieval.

The organization also provides an alternative electronic pathway through Ciox/Swellbox (`swellbox.com/medical-university-sc-wizard.html`), giving patients an option that doesn't require downloading a PDF at all.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and complete. The `has_text_layer` flag is `true` and `is_image_only_scan` is `false`. Full text extraction yields 7,789 characters — the form is clearly digitally authored, not a scan.
- **Fillable fields**: **Zero** interactive form fields (`fillable_field_count: 0`). Despite the notes describing it as a "fillable PDF," the metadata shows no actual interactive fields. This means patients must print and handwrite or use PDF annotation tools. This is a significant technical shortcoming for a 2023-revised form.
- **File size**: 158,878 bytes (≈155 KB) for 2 pages — reasonable and lightweight.
- **Page count**: 2 pages. Page 1 is the authorization form proper; page 2 is a directory of facility contact information for all MUSC Health locations.
- **Fonts**: 9 fonts used; 1 embedded image (likely the MUSC logo).
- **Digital-first design**: The form has a clean text layer and organized layout, but the lack of fillable fields undermines its utility as a digital document. The extensive use of checkbox characters (`□`) and blank lines (`____`) in the extracted text suggests these are static layout elements, not interactive controls.

## 4. CONTENT DESIGN

**Length and proportion**: Two pages is appropriate. The first page handles all authorization substance; the second page is a useful facility directory. The form does not feel bloated.

**Organization**: The form follows a logical flow: Patient Information → Release From → Release To → Types of Records → Purpose → Date Range → Release Method → Authorization/Consent Statements → Signature. This is an intuitive order.

**Record type options**: The form provides granular options:
- "Entire Record (Radiology Images are NOT included)" — the parenthetical is a helpful clarification
- "Abstract" with a detailed definition: "Contains: History & Physical, consults, lab & radiology reports, discharge summary, operative/procedure reports, Emergency Department reports and Occupational/Physical Therapy reports"
- Individual options for radiology images, immunization records, medication list, physician progress notes
- Dental records section ("FOR MUSC Dental RECORDS ONLY")
- A dedicated **Substance Use Disorder** section referencing "42 C.F.R. Part 2 and 45 C.F.R. pts 160 & 164", with granular opt-in options

**Clarity**: The authorization/consent section is dense but covers important ground. Most statements begin with "I understand that…" which is readable. The warning about unencrypted email is reasonably clear: "I understand that unencrypted e-mail is not secure – that means it could be intercepted and seen by others."

**Layout**: The form uses checkbox formatting and section grouping effectively. The header warning "IMPORTANT: FAILURE TO FULLY COMPLETE MAY INVALIDATE THIS AUTHORIZATION" is prominently placed. However, text is densely packed in the consent section, with multiple statements compressed into a small area.

**Release method options**: Five choices offered — Mail, MyChart (with exclusion note: "Rad Images & Dental excluded"), Fax, Encrypted E-mail, and Other. The default is stated: "If a method is not selected, the information will be mailed."

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a **general-purpose authorization** — it can be used both for patient self-requests and third-party releases. The purpose checkboxes include "Patient/Guardian/Legal Rep" as an explicit option alongside "Continuing Care," "Legal," "Insurance," etc. This is positive — it acknowledges patient access as a legitimate purpose — but the form is not specifically designed or streamlined for patient self-access.

**Scope options**: Strong. Patients can specify date ranges ("Treatment dates from ___ to ___") or select "All Treatment Dates." Record types are granular (see Content Design above). The SUD records section allows patients to authorize "All of my SUD records" or specify particular records.

**Format/delivery options**: Multiple electronic delivery methods are offered (MyChart, encrypted email, fax) in addition to mail, which is better than many ROI forms. However, there's a confusing inconsistency: the "Encrypted E-mail" option is listed, but the explanatory paragraph below it warns about "unencrypted e-mail" risks, creating ambiguity about what the patient is actually authorizing.

**Right of Access language**: The form explicitly references **45 CFR §164.524**: "I understand I may review and / or copy the information to be disclosed, as provided in 45 CFR §164.524." This is the correct HIPAA provision for patient right of access.

**EHI Export/bulk data**: No mention of electronic health information export, USCDI, or bulk data formats. The closest option is MyChart delivery, which would be governed by MyChart's own export capabilities.

**Fees**: The form states "I understand there may be fees for copies of medical records/images and postage fees may be charged as provided by S.C. Law." This references state law but does not disclose specific fee amounts. For patient self-requests under HIPAA, fees are limited to "a reasonable, cost-based fee" — the form does not clarify whether different fee structures apply to patient vs. third-party requests.

**ID requirement**: "Attach a copy of the patient/legal guardian/representative identification to this authorization." This is stated as a requirement, not an option.

**Witness signature**: The form includes a "Witness Signature" line, which is not required by HIPAA and may create a barrier for patients completing the form remotely.

**Processing time**: "(NOTE: HIPAA LAW ALLOWS 30 DAYS from receipt for processing.)" — This is accurate but presents only the maximum timeframe, not a commitment to faster turnaround.

## 6. COMPLIANCE

**Expiration**: "Unless otherwise canceled / revoked, this authorization will expire / end one year from the date below." One year is a standard and reasonable expiration period.

**Revocation rights**: Clearly stated: "I understand that I have a right to cancel / revoke this authorization at any time." The revocation procedure (written notice to Health Information Services) is specified.

**Voluntariness**: Explicit: "I understand that authorizing the disclosure of protected health information is voluntary. I can refuse to sign this authorization. I do not need to sign this form to receive treatment."

**SUD records (42 CFR Part 2)**: The form includes a dedicated section for Substance Use Disorder records with proper regulatory citation. This reflects awareness of the heightened protections for SUD information.

**Sensitive information disclosure**: "I authorize the release of the records as indicated above and understand that the release may include sensitive information (mental and behavioral health, genetic testing, HIV/AIDS, communicable/infectious diseases, substance use disorder(s), and sexual assault)." This is a broad consent statement that bundles authorization for all sensitive categories into a single checkbox/signature.

**Fee language**: References S.C. Law for fees without specifying amounts. Does not distinguish between patient-access fees (limited by HIPAA) and third-party release fees.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature requirement**: The form includes a dedicated "Witness Signature" line. HIPAA does not require a witness for patient authorization. This could create a barrier for patients filling out the form at home, particularly for those who live alone or have limited social contacts. It is unclear whether MUSC would reject a form lacking a witness signature.

- **Blanket sensitive-information consent**: The form bundles consent for all sensitive record categories (mental health, genetic testing, HIV/AIDS, SUD, sexual assault) into a single authorization statement rather than offering per-category opt-in/opt-out. For patient self-access this is less concerning, but for third-party releases it provides no granularity beyond the SUD section.

### ⚠️ AMBIGUITIES

- **Encrypted vs. unencrypted email confusion**: The release method lists "Encrypted E-mail" as an option, but the explanatory text immediately below warns: "I understand that unencrypted e-mail is not secure – that means it could be intercepted and seen by others. By choosing to receive My Health Information on an unencrypted email, I am acknowledging and accepting these risks." The option says "encrypted" but the consent language says "unencrypted." Which is the patient actually choosing?

- **Fillable form discrepancy**: The notes describe this as a "fillable PDF," but metadata shows `fillable_field_count: 0`. It's possible the form renders as fillable in some PDF viewers but uses non-standard field implementations not detected by metadata extraction. Regardless, the patient experience may vary by viewer.

- **Fee applicability for patient access**: "fees for copies of medical records/images and postage fees may be charged as provided by S.C. Law" — this does not acknowledge that HIPAA limits fees for patient self-access to a reasonable, cost-based fee, potentially leading patients to believe they may be charged the higher rates permitted under state law for third-party requests.

### ❌ ERRORS

- **Missing Kershaw phone/fax format**: On page 2, the Kershaw location entry has inconsistent spacing: "Fax number is (803)713-6600 or (803) 713-6327" — the first number is missing a space after the area code closing parenthesis, unlike all other entries.

### ✨ BRIGHT SPOTS

- **Spanish-language version available**: Form-5 is a full Spanish translation with identical structure, linked directly from the same medical records page. This is meaningful bilingual accessibility.

- **Multiple submission pathways**: MUSC offers three distinct request methods (MyChart portal, Ciox/Swellbox eRequest, manual form), giving patients flexibility. The medical records page clearly presents all three options.

- **Comprehensive facility directory**: Page 2 lists contact information (address, phone, fax, email) for 9 MUSC Health locations across South Carolina, so patients know exactly where to send their form regardless of which facility treated them. Each location has a dedicated ROI email address.

- **SUD records with proper 42 CFR Part 2 citation**: The dedicated section for Substance Use Disorder records with granular opt-in options and correct regulatory citation shows attention to privacy law beyond basic HIPAA.

- **Explicit 45 CFR §164.524 reference**: The form cites the specific HIPAA regulation for patient right of access, which is unusual and helpful for patient awareness.
