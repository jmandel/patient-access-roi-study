# Montefiore Nyack Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an older version (Rev. 10/2021) of the **"Montefiore Nyack Hospital Authorization for Release of Health Information"** form. The organization also has a newer version of the same form (form-1.pdf, Rev. 01/2022) which is the currently linked version on the Medical Records page. Both documents share nearly identical text content (~4,527 vs ~4,532 characters), but form-1 was upgraded to a 3-page layout with 39 fillable PDF fields, while this older form-2 remains a flat, single-page PDF with zero fillable fields.

Form-2 is essentially the superseded predecessor of form-1. It is no longer linked from the hospital's Medical Records page but remains accessible at its original URL (`https://www.montefiorenyack.org/sites/default/files/New%20Release%20of%20Information%20Authorization%20Form%2010.20.21.pdf`). It was discovered through web search results that still reference the old URL.

This is a general-purpose ROI authorization form — not a patient-access-specific form. It serves patients, attorneys, and other third parties requesting records from the hospital.

## 2. FINDABILITY

**Moderate difficulty.** This specific version of the form is no longer linked from the hospital website. The current version (form-1.pdf) is the one linked from the Medical Records page at `https://www.montefiorenyack.org/manage-my-care/medical-records`. Form-2 was only discovered via web search results that still index the old URL. A patient navigating the website would find form-1, not this document.

The URL itself (`New%20Release%20of%20Information%20Authorization%20Form%2010.20.21.pdf`) is somewhat descriptive but uses URL-encoded spaces and a date stamp that could confuse users. There is no landing page or context explaining this is an outdated version.

Additionally, the retrieval notes document that direct `curl` downloads (even with realistic User-Agent headers) were blocked by the site's CDN/WAF, returning "Access Denied" responses. Browser-based retrieval was required.

## 3. TECHNICAL ACCESSIBILITY

**Text layer:** Present. The document has extractable text (4,527 characters) and is not an image-only scan. 7 fonts are embedded and 0 images, confirming this is a digitally-authored document rather than a scanned paper form.

**Fillable fields:** Zero. This is a flat PDF — all form fields are represented as blank lines made of underscore characters (e.g., `____________________________________________________________`). A patient would need to print the form and fill it out by hand, or attempt to use a PDF annotation tool.

**File size:** 70,455 bytes (70 KB) for a single page — reasonable and efficient.

**Digital-first design:** Partially. While the document was created digitally (has a text layer, no scan artifacts), it was designed for print-and-fill workflows. The lack of any interactive form fields makes it functionally a print form distributed as a PDF.

## 4. CONTENT DESIGN

**Length:** Single page. All content is compressed into one page, which is concise but results in a very dense layout. The corresponding newer version (form-1) spreads the same content across 3 pages, suggesting the organization itself recognized the single-page format was too cramped.

**Clarity:** The language is a mix of plain instructions and legal boilerplate. The opening is clear: *"I hereby authorize Montefiore Nyack Hospital to release the following information from the medical records of..."* However, it transitions into dense legal passages, particularly the re-disclosure warning and HIV/AIDS consent language at the bottom, which runs together without clear visual separation.

**Organization:** The form follows a logical sequence: patient identification → recipient designation (Patient/Attorney/Other) → record type selection → sensitive information consent → revocation rights → signature → contact information. However, the "CONSENT OF MINOR (WHEN APPLICABLE)" heading appears near the bottom with no associated fields or instructions — it's just a dangling header. The re-disclosure/HIV consent paragraph is placed after the contact information and revision stamp, creating an odd layout where critical legal text appears after what seems like the form's footer.

**Readability:** With all content on a single page, the text is likely small and cramped. The form uses ALL CAPS for section headers (e.g., "MEDICAL RECORDS TO BE RELEASED", "PLEASE READ AND COMPLETE THE FOLLOWING") which aids scanning but contributes to visual density.

**Notable text error:** The revocation section contains the grammatical error *"it won't have any affect on any actions"* — "affect" should be "effect." This same error appears in both form versions.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a combined form serving patients, attorneys, and other third parties. The "RELEASE THE REQUESTED RECORDS TO" section lists three categories — PATIENT, ATTORNEY, and OTHER INDIVIDUAL/COMPANY — making it a general-purpose release form rather than one tailored to patient self-access under HIPAA's Right of Access.

**Scope options:** The form offers reasonable scope controls:
- Record type checkboxes: ER, Inpatient, Outpatient, Images, Billing
- A free-text field for specific documents: *"If you would like a specific document, please list it here"*
- Date-of-service specification is requested in the header
- Sensitive information categories requiring separate initials: Alcohol/Drug Treatment, Mental Health (excluding Psychotherapy Notes), HIV-Related Information
- An "abstract" default is noted: *"An abstract of your medical record will be released which includes physician documentation, labs, radiology reports, and test results unless you request the entire medical record."*

**Format/delivery options:** The form mentions electronic delivery: *"I understand that in order to receive this information in electronic format, I must provide my email address on this form and that I must also send an email from that address to ROI@montefiorenyack.org."* This is notable — it acknowledges electronic delivery exists — but imposes a two-step requirement (provide email on the form AND send a separate confirmation email) that adds friction.

**Right of Access language:** There is no explicit reference to HIPAA § 164.524 or the patient's right of access. The form title references "HIPAA" in its revision stamp ("MNH HIPAA AUTHORIZATION FORM") but does not explain patient rights.

**EHI Export awareness:** No mention of electronic health information export, bulk data, or TEFCA.

**Fee disclosure:** No fees are mentioned or disclosed on the form.

## 6. COMPLIANCE

**Authorization model:** The form uses an authorization model rather than a right-of-access request model. This is a common pattern but is worth noting — under HIPAA § 164.524, patients do not need to sign an "authorization" to access their own records; they have a right of access. Using an authorization form for patient self-requests conflates two distinct legal frameworks.

**Expiration:** The form defaults to 180 days (six months): *"Unless revoked earlier or otherwise indicated, this Authorization will expire 180 days (six months) from the date of signing or shall remain in effect for the period reasonable needed to complete the request."* This is reasonable and standard.

**Revocation:** Revocation rights are clearly stated, including the standard caveat about actions already taken.

**Re-disclosure warning:** Included at the bottom: *"I also understand that the information used or disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and no longer be protected under federal law."*

**NY-specific language:** The form includes New York State-required language for HIV/AIDS-related information disclosure: *"Diagnosis, Prognosis, and treatment for Acquired Immune Deficiency Syndrome (AIDS), AIDS Related Complex (ARC), or Human Immunodeficiency Virus (HIV) infection for any admissions."*

**Submission options:** The form provides office phone, fax number, and email address (ROI@montefiorenyack.org), suggesting multiple submission channels. No requirement for in-person submission or notarization is stated.

**Sensitive information consent:** Requires separate initials for alcohol/drug, mental health, and HIV information — consistent with New York Mental Hygiene Law and Public Health Law requirements.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **"CONSENT OF MINOR (WHEN APPLICABLE)"** appears as a section heading near the bottom of the form with no associated fields, instructions, or explanatory text. It's unclear what action a parent/guardian should take regarding a minor's consent, or whether additional documentation is required.

- **Electronic delivery process is unclear.** The form states: *"I understand that in order to receive this information in electronic format, I must provide my email address on this form and that I must also send an email from that address to ROI@montefiorenyack.org."* It's ambiguous what the confirming email should contain or say, and this two-step requirement may confuse patients who expect simply providing an email address to be sufficient.

- **"Abstract" vs. full record default:** The form states *"An abstract of your medical record will be released... unless you request the entire medical record"* but provides no checkbox or clear mechanism to request the entire record vs. the abstract. Patients may not understand what an "abstract" includes or excludes.

### ❌ ERRORS

- **Grammatical error in legal text:** *"it won't have any affect on any actions they took before the received revocations"* — "affect" should be "effect," and "the received revocations" should likely be "they received the revocation." This error persists into the newer form-1 version as well.

- **Orphaned document:** This form (Rev. 10/2021) is still publicly accessible at its URL but has been superseded by the Rev. 01/2022 version. There is no indication on the document itself that it is outdated, which could lead patients who find it through web searches to submit an obsolete version.

### ✨ BRIGHT SPOTS

- **Multiple contact channels provided:** The form lists office phone (845-348-2527), fax (845-348-8433), and email (ROI@montefiorenyack.org) — giving patients three ways to submit or inquire.

- **Electronic delivery acknowledged:** Unlike many ROI forms that only contemplate paper/fax, this form explicitly mentions the possibility of receiving records *"in electronic format"* via email, even if the process for requesting it is somewhat awkward.

- **Sensitive information granularity:** The form appropriately separates consent for alcohol/drug treatment, mental health, and HIV information, each requiring individual initials — complying with New York State requirements while giving patients granular control.
