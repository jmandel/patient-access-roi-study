# Evaluation: Ironwood Cancer & Research Centers — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **10-page new patient forms packet** hosted on the sister site ironwoodwomenscenters.com (not the main ironwoodcrc.com domain). It is a general onboarding bundle containing:

1. Cover letter/instructions
2. Patient Demographic Information
3. Patient History Form (2 pages)
4. Medication and Allergy List
5. **Consent to Release Protected Health Information Contact List (HIPAA)**
6. Financial Policy/Assignment of Benefits
7. Questions for your appointment (blank lines)
8. Electronic Device Policy
9. Patient Portal Introduction

The only ROI-adjacent content is page 6: the "Consent to Release Protected Health Information Contact List." This is **not** a traditional ROI form — it is a HIPAA contact list where patients designate individuals (up to 3) who may receive their health information. It authorizes Ironwood to share information *with named contacts*, not for the patient to request their own records.

In context of the other forms found for this organization: **form-2.pdf** is the actual ROI form for releasing records from Ironwood; **form-1.pdf** is for requesting records *into* Ironwood from other facilities. This form-3.pdf serves a different purpose entirely — it's an intake packet with a HIPAA contact consent embedded within it.

## 2. FINDABILITY

This document was **not found on the main ironwoodcrc.com website**. It was discovered on the related site ironwoodwomenscenters.com through a targeted web search (`site:ironwoodcrc.com filetype:pdf medical records`). The source URL is:
`https://www.ironwoodwomenscenters.com/wp-content/uploads/2017/11/New-Patient-Forms.pdf`

The filename ("New-Patient-Forms.pdf") accurately describes what it is — a new patient packet — but gives no indication that it contains any authorization or consent content. A patient looking specifically for an ROI form or HIPAA contact list would not know this packet contains one. The main patient forms page at ironwoodcrc.com/patient-forms/ did not have visible links to this document when fetched.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present (`has_text_layer: true`), enabling search and copy/paste.
- **Fillable fields**: Zero (`fillable_field_count: 0`). Despite having many form fields (patient demographics, checkboxes for medical history, medication lists, signature lines), none are interactive. Every field must be hand-filled after printing.
- **File size**: 2.38 MB for 10 pages — notably large. The metadata shows 7,217 embedded images, which is extremely high and suggests heavy use of decorative images or a suboptimal PDF export process (possibly converting from a word processor with embedded assets). This is disproportionate to the content.
- **Font count**: 44 fonts is very high for a form packet, indicating inconsistent design or import from multiple source documents.
- **Digital usability**: This is clearly designed as a print-and-fill document. The cover letter instructs patients to "please print and have the following forms fully completed prior to your arrival." There is no consideration for digital completion.
- **Last updated**: Every page footer reads "Last Updated 6/24/2015" — the document is over 10 years old.

## 4. CONTENT DESIGN

**Length and proportion**: At 10 pages, this is a substantial packet, but only 1 page (the HIPAA contact list) is relevant to health information release authorization. The rest is standard intake material (demographics, medical history, medications, financial policy).

**Clarity of the consent form (page 6)**: The HIPAA contact list page has a dual structure:
- A top section where patients list up to 3 contacts with names, phone numbers, addresses, and relationships.
- A bottom block of fine-print legal text explaining the authorization's scope and terms.

The legal text is dense and packed into a small space. It covers:
- Authorization scope: "I authorize Ironwood Physicians, PC to use/disclose my personal health information to the individuals listed on this form."
- Sensitive information inclusion: "this may include information relating to communicable diseases, such as HIV/AIDS, sexually transmitted diseases, behavioral or mental health, alcohol and/or drug abuse treatment, and genetic testing information"
- Expiration: "this authorization does not expire unless written notice is mailed to P.O. Box 6423 Chandler AZ, 85246"
- Voicemail consent: "I understand that Ironwood Physicians, PC staff may leave detailed messages on my voicemail"
- Right to revoke in writing

**Organization**: The cover letter provides a clear numbered list of what's included. Individual forms are logically sequenced. However, the HIPAA consent form is buried at position 4 of 6 in a new patient packet — easy to sign without careful reading during a stressful first visit.

**Layout**: The system review section (pages 3-4) uses a very dense Yes/No checkbox format covering dozens of symptoms across multiple body systems. While comprehensive, it is visually overwhelming. The HIPAA contact list page is moderately well-organized with clear fields for each contact.

## 5. PATIENT-CENTEREDNESS

This form **does not serve a patient trying to access their own health records**. It serves the opposite purpose: it authorizes Ironwood to share the patient's information with designated third parties (family members, emergency contacts, friends).

Key concerns:
- **No patient-access pathway**: This form provides no mechanism for a patient to request copies of their own records.
- **Broad authorization scope**: The consent authorizes Ironwood to share information with listed contacts "for the purposes of treatment, payment and healthcare operations" — this is extremely broad. Listed individuals are treated as "individuals involved directly in my care."
- **No expiration by default**: The form states "this authorization does not expire unless written notice is mailed to P.O. Box 6423 Chandler AZ, 85246." This creates a perpetual authorization with a specific revocation mechanism requiring physical mail.
- **Voicemail consent bundled in**: The initials line for "I understand that Ironwood Physicians, PC staff may leave detailed messages on my voicemail" is bundled into this same form, conflating two different consent decisions.
- **No mention of patient rights**: No reference to HIPAA § 164.524, Right of Access, or any explanation of the patient's right to obtain their own records.
- **No electronic delivery options**: Not applicable since this isn't a records request form, but worth noting that the patient portal introduction page at the end mentions patients can "Request Lab Results" and "View Continuity of Care Documents (CCD)" through the portal.

## 6. COMPLIANCE

- **Perpetual authorization**: The statement "this authorization does not expire unless written notice is mailed" creates an indefinite authorization. While HIPAA permits this for authorizations related to treatment, it is unusual and potentially concerning that patients cannot easily revoke — they must mail written notice to a specific P.O. Box.
- **Broad sharing scope**: Treating listed contacts as "individuals involved directly in my care" for "treatment, payment and healthcare operations" purposes grants very wide sharing permissions. A patient listing a friend as an emergency contact may not realize they're authorizing Ironwood to share detailed health information with that person for billing purposes.
- **Bundled consent**: The voicemail consent is embedded in the same form as the contact list authorization, requiring initials on the same page. A patient cannot easily consent to one without the other.
- **No conditioning language issue**: The form does state "my ability to obtain health care from Ironwood Physicians PC will not be affected if I refuse to sign this authorization," which is appropriate.
- **Credit card on file policy**: The financial policy (separate page) states Ironwood will charge a patient's credit card on file if they don't pay within 60 days after insurance payment. While not directly ROI-related, this is aggressive for a cancer treatment center.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Perpetual, non-expiring authorization**: "this authorization does not expire unless written notice is mailed to P.O. Box 6423 Chandler AZ, 85246" — unlike the organization's own form-2.pdf which expires after one year, this contact list authorization never expires. Revocation requires mailing a physical letter to a P.O. Box, which is a meaningful barrier.
- **Overbroad sharing permissions**: Listed contacts (including friends) are designated as "individuals involved directly in my care" with authorization for "treatment, payment and healthcare operations" — this is far broader than most patients would expect when listing an emergency contact.
- **Sensitive information included by default**: The form states sharing "may include information relating to communicable diseases, such as HIV/AIDS, sexually transmitted diseases, behavioral or mental health, alcohol and/or drug abuse treatment, and genetic testing information." There is no option to exclude sensitive categories from sharing with contacts.

### ⚠️ AMBIGUITIES

- **Relationship between this form and form-2**: It is unclear how the HIPAA Contact List interacts with the separate "Authorization to Release Protected Health Information" (form-2.pdf). Form-2 references the contact list ("An authorized representative of the patient must be identified on the Consent to Release Health Information Contact Form that we have on file"), but the scope and purpose of the two forms are different and potentially confusing to patients.
- **"Individuals involved directly in my care"**: This phrase is used to characterize contacts listed on the form, but a spouse or friend listed as an emergency contact is not necessarily involved in direct care. The legal implication of this characterization is unclear.

### ❌ ERRORS

- **Extremely outdated**: Every page footer reads "Last Updated 6/24/2015" — over 10 years old at time of evaluation. The patient portal introduction page lists features as "Coming Soon" (appointment reminders) that have presumably been resolved long ago.
- **Cross-domain hosting**: The form is hosted on ironwoodwomenscenters.com rather than ironwoodcrc.com, creating confusion about which organization the form belongs to.
- **Excessive file size**: 2.38 MB with 7,217 embedded images for a 10-page form packet is grossly oversized, suggesting a poorly optimized export process.

### ✨ BRIGHT SPOTS

- **Patient portal introduction included**: The final page introduces the patient portal with clear sign-up steps and lists useful features including viewing Continuity of Care Documents and requesting lab results — providing an alternative digital pathway even though the forms themselves are paper-oriented.
- **Non-conditioning statement**: The form clearly states that refusing to sign will not affect the patient's ability to obtain healthcare, which is an appropriate HIPAA-compliant disclosure.
