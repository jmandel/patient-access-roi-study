# Evaluation: Scenic Mountain Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page English-language "Patient Request / Authorization to Use and/or Disclose Protected Health Information" form, branded to Scenic Mountain Medical Center (Big Spring, TX). It carries form ID "HIM 44" with version number SMM_ROI_14000, dated 03/2023. The form is a general-purpose HIPAA authorization — despite the "Patient Request" title, it is structured as a release-to-named-recipient form (Section 2 asks "INFORMATION TO BE DISCLOSED TO:" a specific person or facility), not a patient-access-specific request under 45 CFR § 164.524.

A Spanish-language counterpart exists as form-2.pdf (SMM_ROI_14000S), with identical structure and fields fully translated. Both forms were posted to the same WordPress-hosted domain and linked from the same medical records page. The medical records page also offers an electronic request option via a Sharecare/HDS platform.

## 2. FINDABILITY

**Retrieval difficulty: Easy.** Per the retrieval notes, the form was directly discoverable via a web search for "Scenic Mountain Medical Center Big Spring TX medical records release form PDF." The hospital's medical records page at `scenicmountainmedical.com/medical-records/` links to both the English and Spanish PDFs. The actual PDF files are hosted on a separate WordPress domain (`scenicmountainmedicalcenter.org/wp-content/uploads/2024/10/SMM.pdf`), which is somewhat confusing from a URL perspective — the filename "SMM.pdf" is nondescript and the hosting domain differs from the main site. However, the end-user experience is transparent: a patient visiting the medical records page would simply click a download link.

No bot blocking, login gates, or portal requirements were encountered. The page also provides phone (432-268-4650) and fax (432-268-4949) contact information, plus a separate phone number for checking ROI request status (610-994-7500 — notably a Pennsylvania area code, likely the third-party ROI vendor).

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present — full text is extractable (7,064 characters), confirming this is a digitally-authored document, not a scan.
- **Fillable fields:** Zero. The PDF has no interactive form fields despite having clearly defined blank lines and checkboxes throughout the document. A patient must print, hand-fill, and return the form.
- **File size:** 436,842 bytes (~437 KB) for a 2-page document with no embedded images. This is somewhat large for a text-only form, though not problematic for download.
- **Fonts:** 7 fonts embedded, indicating reasonable typographic variety.
- **Digital-first design:** The form was clearly created digitally (not scanned), but it is designed as a print-and-fill artifact. The lack of any fillable fields is a missed opportunity — the structured layout with numbered sections, checkboxes, and signature lines would translate well to an interactive PDF.

## 4. CONTENT DESIGN

**Length and structure:** The form spans 2 pages with 15 numbered sections, progressing logically from patient identification (Section 1) through recipient details (2), delivery method (3), treatment dates (4), specific records (5), restricted release categories (6), exclusion requests (7), purpose (8), term/expiration (9), revocation rights (10), effect on treatment (11), redisclosure warning (12), access rights (13), and signatures (14–15). The numbered layout aids navigation.

**Clarity of language:** The form uses a mix of plain language and legal phrasing. Sections 10–13 are dense paragraph-style legal disclosures that will challenge many readers. For example, Section 10 reads: "I understand that I may revoke this Authorization at any time by requesting it of Scenic Mountain Medical Center in writing at the address listed below. The revocation will be effective immediately upon Scenic Mountain Medical Center receipt of my written notice." This is serviceable but wordy. In contrast, the Section 5 record-type checkboxes (Admission History and Physical, Laboratory Results, Imaging Reports, etc.) are clear and practical.

**Record type specificity:** Section 5 offers 11 checkboxes for specific record types: Admission History and Physical, Laboratory Results, Rehab Services, Discharge Summary, Imaging Reports (with instructions to specify CT/X-Ray/MRI), Consultation, Pathology Reports, Emergency Room, Operative Notes, EKG Reports, and two "Other" write-in lines. This granularity is helpful.

**Restricted release section:** Section 6 is a detailed table requiring separate checkboxes and signatures for 9 categories of sensitive information: Mental/Behavioral Health, Genetic Testing, HIV/AIDS, Alcohol/Substance Abuse, Confidential Communications with a Social Worker, Child/Elder Abuse and Neglect, Rape/Sexual Assault Victim's Counseling, Domestic Violence Victim's Counseling, and Sexually Transmitted Disease. Three footnotes provide regulatory context (psychotherapy notes exclusion, genetic testing definition, 42 CFR Part 2 applicability). This section is thorough but space-constrained — the signature fields are small and the layout is dense.

**Visual design:** The form uses bold headers, checkboxes, and horizontal lines to create structure. The "IMPORTANT" notice at the bottom of each page is capitalized and bolded: "THIS AUTHORIZATION IS NOT VALID UNLESS ALL APPLICABLE ENTRIES ARE COMPLETED AND FORM IS SIGNED ON PAGE 2." The overall layout is functional but moderately cramped — fitting 15 sections across 2 pages leaves limited whitespace.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form title includes "Patient Request," but the body is structured as a general authorization to disclose PHI to a named third party. Section 2 asks patients to name the recipient ("Person or Facility Name"), which is awkward for patients requesting records for themselves — they must list themselves as both requester and recipient. There is no dedicated pathway, separate form, or explicit language for patients exercising their HIPAA Right of Access (45 CFR § 164.524). The "Purpose of the Disclosure" options in Section 8 include "Personal," which could cover self-request, but this is not spelled out.

**Delivery options:** Section 3 offers three delivery methods: Email, Postal Mail, and In-Person Pick-Up. Including email is a positive feature that many facilities do not offer. No fax option is listed for patient delivery, though fax is available for submission of the form itself.

**Scope controls:** Patients can specify treatment date ranges (Section 4), choose specific record types (Section 5), and exclude specific visits (Section 7). This level of granularity gives patients meaningful control over what is released.

**Expiration/term:** Section 9 defaults to one year but offers alternatives: until the request is fulfilled, a specific date, a specific event, or "Other." The "until fulfilled" option is practical for patient access requests.

**Rights information:** Section 11 clearly states that refusing to sign will not affect treatment, payment, or eligibility — an important HIPAA protection. Section 12 provides a redisclosure warning. Section 13 notes the facility's right to deny access in certain circumstances with written notification. However, there is no affirmative statement of the patient's Right of Access under HIPAA, no citation to 45 CFR § 164.524, and no mention of EHI export or electronic health information in any format.

**Representative authorization:** Section 15 provides for a personal representative to sign if the patient is a minor or unable to sign, with fields for name, signature, date, and relationship/authority. This is appropriate and clearly labeled.

## 6. COMPLIANCE

**Fees:** Section 8 includes an asterisk note "*fees may apply" but provides no further detail — no fee schedule, no indication of amounts, no reference to HIPAA's cost-based fee limitations for patient access requests. This vagueness could deter patients from exercising their rights.

**ID verification:** The form includes an "I.D Verification" field in the "For Office Use" section, indicating identification will be checked. This is standard practice but the requirements are not specified for the patient.

**Witness requirement:** A "Witness" signature line appears next to the patient signature in Section 14. It is not labeled as optional or required. If required, this could create a barrier — HIPAA does not require witness signatures for patient access requests.

**No notarization:** The form does not require notarization.

**No in-person-only restriction:** The form offers multiple delivery methods and does not mandate in-person submission of the authorization itself.

**Revocation:** Must be in writing to the HIM department at the listed mailing address. This is standard.

**"All applicable entries" requirement:** The bolded footer stating "THIS AUTHORIZATION IS NOT VALID UNLESS ALL APPLICABLE ENTRIES ARE COMPLETED AND FORM IS SIGNED ON PAGE 2" could be read as requiring every field to be completed, though "applicable" provides some qualification. For a patient access request, many fields (like the restricted release section) may not be relevant.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No differentiation between patient access and third-party release.** The form funnels patients requesting their own records through the same authorization designed for third-party disclosures. Under HIPAA's Right of Access (45 CFR § 164.524), patients should not need to "authorize" release of their own records — they have a right to access them. Using an authorization form for patient access requests conflates two legally distinct processes and may cause the facility to apply authorization-based rules (e.g., restricted release signatures, purpose requirements) where Right of Access rules should apply.

- **"*fees may apply" with no specifics.** The vague fee notice gives patients no way to understand potential costs. For Right of Access requests, HIPAA limits fees to reasonable, cost-based amounts and requires facilities to inform patients of costs in advance. The absence of any fee schedule or rate information may violate this requirement.

### ⚠️ AMBIGUITIES

- **Witness signature line** — unlabeled as optional or required. If enforced as mandatory, this would impose a barrier not required by HIPAA.

- **"ALL APPLICABLE ENTRIES ARE COMPLETED"** — the word "applicable" mitigates somewhat, but staff may interpret this strictly and reject forms with blank optional fields.

- **ROI status check phone number (610) 994-7500** is a Pennsylvania area code, suggesting a third-party ROI vendor handles requests. This is not mentioned on the form itself, creating a disconnect between the form and the actual processing workflow. Patients may be confused about whom to contact.

### ✨ BRIGHT SPOTS

- **Email delivery option.** Including email as a delivery method (Section 3) is forward-looking and patient-friendly. Many facilities still restrict delivery to mail, fax, or in-person pickup only.

- **Spanish-language version available.** Form-2.pdf is a fully translated Spanish equivalent — not a partial translation or bilingual form, but a complete standalone document. For a community hospital in West Texas, this is an important accessibility measure.

- **Exclusion request section.** Section 7 allows patients to specifically exclude certain admission/visit dates from the request, giving patients granular control beyond what most forms offer.

- **Practical expiration options.** Section 9's "Until Scenic Mountain Medical Center fulfills this request" option is well-suited to one-time patient access requests and avoids the problem of authorizations expiring before records are produced.
