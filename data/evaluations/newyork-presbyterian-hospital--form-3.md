# NewYork-Presbyterian Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization to Disclose Protected Health Information/Medical Records" form that appears to be a campus-specific variant associated with NYP/Lawrence Hospital. The URL path (`/documents/lawrence/patients-visitors/auth-to-disclose-phi-lawrence.pdf`) confirms its Lawrence provenance. It is one of three documents retrieved for NewYork-Presbyterian:

- **form-1.pdf**: The primary "NY Consortium HIPAA Auth" — the current Tripartite ROI form shared across NYP, Columbia (CUIMC), and Weill Cornell (WCM). Revised 10/2/2019, with 103 fillable fields.
- **form-2.pdf**: An FAQ document explaining the ROI process (not itself an authorization form).
- **form-3.pdf** (this document): An older or campus-specific Lawrence Hospital authorization form. It covers similar ground to form-1 but with a different layout, fewer campus options, fewer record-type checkboxes, and — critically — zero fillable fields.

Page 1 is the authorization form itself; page 2 is a reference table listing "Medical Correspondence Units" with mailing addresses, in-person addresses, and telephone numbers for five NYP campuses (Columbia, Weill Cornell, Westchester, Lower Manhattan, and Lawrence).

## 2. FINDABILITY

Per the retrieval notes, form-3 was discovered through a `site:nyp.org` search. It was not prominently linked from the main Medical Records page (https://www.nyp.org/patients-visitors/medical-records), which instead directs patients to the Verisma electronic portal and the Tripartite form (form-1). The form's URL (`/documents/lawrence/patients-visitors/auth-to-disclose-phi-lawrence.pdf`) suggests it lives in a campus-specific document directory rather than in the primary patient-facing navigation.

While the main medical records page was easy to locate (2 clicks from the homepage), this particular form appears to be a secondary or legacy document. A patient directed to the main website would likely encounter form-1 first. It is unclear whether Lawrence campus patients are still directed to this form or to the consolidated Tripartite form. The filename `auth-to-disclose-phi-lawrence` is descriptive but uses internal abbreviations ("phi") that may not be meaningful to patients.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (5,595 characters), confirming this is not an image-only scan.
- **Fillable fields**: Zero. This is a flat PDF with no interactive form fields, in stark contrast to form-1's 103 fillable fields. Patients would need to print and hand-fill this document.
- **File size**: 257,716 bytes (~252 KB) for 2 pages — reasonable, though larger than form-1 (141 KB) despite having fewer features.
- **Fonts**: 9 fonts are embedded (compared to 5 in form-1), suggesting a more complex or less optimized design.
- **Images**: 2 embedded images, likely logos or decorative elements.
- **Digital-first design**: No. This is clearly designed as a print-and-fill paper form. The instructions uniformly say "(please print)" and the layout uses blank lines for handwritten responses. There is no indication it was designed for on-screen completion.

## 4. CONTENT DESIGN

**Length**: 2 pages — page 1 is the form, page 2 is a campus contact directory. This is a reasonable length, though the contact directory could be a separate document.

**Organization**: The form flows top-to-bottom through logical sections: patient demographics → recipient information → disclosing entity selection → records specification → sensitive information authorization → delivery preferences → purpose → legal terms → signature. However, sections are not visually numbered or labeled with headers (unlike form-1, which uses bold section headings like "DISCLOSING ENTITY" and "INFORMATION TO BE RELEASED").

**Clarity**: The form mixes patient-facing instructions with legal language. The opening fields are straightforward, but the lower portions become dense. For example, the legal notice about HIV/AIDS discrimination rights is presented as a single unbroken block: *"If I experience discrimination because of the release or disclosure of HIV-related information, I may contact the New York State Division of Human Rights at (212) 480-2493 or the New York City Commission of Human Rights at (212) 306-7450."* This is required by New York law but is presented without any formatting to help patients parse it.

**Record specificity**: The form offers only four record-type checkboxes: "Hospital Admission," "Emergency Department," "Ambulatory Surgery," and "Outpatient," plus a free-text field for specific reports. Form-1, by contrast, offers 16+ record-type options. This is a significant reduction in granularity.

**Sensitive information handling**: Requires the patient to initial each sensitive category (Alcohol/Drug, Mental Health, HIV/AIDS, Genetic Testing), with a warning: *"Please note that the information will not be released if not initialed."* This is appropriate under New York law but the phrasing could confuse patients who want all records — they might not realize they must affirmatively initial each sensitive category.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form serves both purposes. The purpose checkboxes include "Individual's request" as the first option, which is the patient-access use case. However, the form's title — "Authorization to Disclose Protected Health Information" — frames it as a disclosure/release form rather than a patient access request, which is conceptually distinct under HIPAA.

**Scope options**: Date range is required ("medical records will not be released unless a date of service(s) is identified on this form"). The four record-type checkboxes are limited, though free text allows specificity. No "entire medical record" checkbox is offered (form-1 has one).

**Delivery options**: Two electronic options are listed: CD/DVD and "Electronic Delivery." The form also references a Lawrence-specific patient portal: *"Patients with an active NYP Lawrence patient-portal account can access certain medical record information via secure web patient portal at no cost."* This is a positive feature, though the qualifier "certain medical record information" is vague. No paper/mail option is explicitly checked (though the contact directory on page 2 implies mail and in-person submission).

**Right of Access language**: The form states *"I may inspect and/or receive a copy of the information described on this Authorization"* — referencing the inspection right. However, it does not cite HIPAA § 164.524 by name. There is no mention of EHI export or bulk data access.

**Fee disclosure**: The form notes *"Providers are permitted to charge reasonable fees to recover costs for inspections and/or copying"* but does not specify actual fee amounts. The FAQ (form-2) provides more detail: the phone number 646-NYP-4ROI is available for questions.

## 6. COMPLIANCE

**Witness or Notary line**: The signature section includes a "Witness or Notary" line with a date field. While this does not explicitly *require* notarization, the presence of this line may lead patients to believe notarization or a witness is necessary, creating a potential barrier. HIPAA does not require either for patient access requests.

**Expiration**: The authorization expires on a patient-specified date *"or 1 year after being signed."* A 1-year default expiration is standard and reasonable.

**Revocation**: Clearly stated: *"I may revoke this authorization at any time by providing written notice to NYP except to the extent that action has already been taken based on this authorization."*

**Voluntary signing**: The form correctly states: *"Treatment and payment will not be conditional on whether you sign this authorization."* However, it adds: *"Signing is voluntary, however if you refuse to sign NYP will not release your records."* This is somewhat contradictory — it's voluntary but also required to obtain records. This is technically accurate for third-party releases but potentially misleading for patient access requests, where HIPAA requires providers to fulfill requests even without a formal authorization form.

**Date of service requirement**: *"Medical records will not be released unless a date of service(s) is identified on this form."* This could be an unreasonable barrier for patients who want their complete record but don't remember exact service dates.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"Witness or Notary" signature line**: Including a notary/witness line implies these may be required. HIPAA does not require notarization or witnesses for patient access requests. Even if not strictly mandatory on this form, the presence of this field creates an implied barrier that may deter patients who lack access to a notary.
- **Mandatory date-of-service range**: The statement *"medical records will not be released unless a date of service(s) is identified on this form"* could prevent patients from requesting their complete medical record if they cannot recall specific dates. HIPAA's Right of Access does not permit providers to refuse requests solely because a patient cannot specify dates.

### ⚠️ AMBIGUITIES

- **"Electronic Delivery" option is undefined**: The form offers "CD/DVD" and "Electronic Delivery" as options but does not explain what "Electronic Delivery" means — email? portal? secure link? Patients cannot make an informed choice without more detail.
- **"Certain medical record information" on portal**: The portal option states only "certain medical record information may be accessed," without defining what is or isn't available. This vagueness may leave patients unsure whether the portal will meet their needs.
- **Voluntary but required**: The statement that signing is "voluntary, however if you refuse to sign NYP will not release your records" conflates two distinct HIPAA concepts — third-party release authorizations (which do require patient signature) and patient access requests (which do not require a formal authorization).

### ❌ ERRORS

- **Outdated contact numbers**: The HIV/AIDS discrimination hotline numbers listed — NYS Division of Human Rights at (212) 480-2493 and NYC Commission of Human Rights at (212) 306-7450 — differ from the numbers on form-1, which lists 1-888-392-3644 and (718) 722-3131 respectively. At least one set is likely outdated.
- **No revision date**: Unlike form-1, which is clearly marked "Rev. 10/2/2019," form-3 contains no revision date, making it impossible to determine how current the form is. Given the differences from form-1, it may be significantly older.
- **Missing campuses**: Form-3 lists only 5 NYP campuses (Columbia, Weill Cornell, Westchester, Lower Manhattan, Lawrence) plus "Other." Form-1 lists 11 campuses including Brooklyn Methodist, Hudson Valley, Queens, Gracie Square, and Allen Hospital as distinct options. This suggests form-3 predates the expansion of the NYP system.

### ✨ BRIGHT SPOTS

- **Patient portal integration**: The Lawrence portal option with a specific patient initial line — allowing patients to receive records electronically at no cost — is a patient-friendly feature, even if limited in scope.
- **Campus contact directory**: Page 2 provides a comprehensive table with mailing addresses, in-person addresses, and phone numbers for all five campuses, making it easy for patients to know exactly where to submit their form.
