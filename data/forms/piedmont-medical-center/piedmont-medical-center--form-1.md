# Piedmont Medical Center — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization to Use and Disclose Protected Health Information" form (form ID: EZ-7003 AUT REL MED) from Piedmont Medical Center, a Tenet Healthcare-affiliated community hospital in Rock Hill, SC. The form's revision date is R03/2013, with a print timestamp of 6/29/2018, making the template at least 7 years old at time of evaluation.

A second form (form-2.pdf) was also found—a two-page authorization from the affiliated Piedmont Physician Network. That form is more detailed and includes explicit HIPAA language and a highly confidential information section. Form-1 is the primary hospital-level authorization form, linked directly from the hospital's "Request Medical Records" page.

The medical records page also references Datavant as the contracted vendor and provides Swellbox online portals for both patient and provider record requests, suggesting this PDF form may be supplementary to a digital workflow.

## 2. FINDABILITY

**Relatively easy to locate.** Per the retrieval notes, a web search for "Piedmont Medical Center Rock Hill SC authorization release health information form PDF" immediately returned results. The hospital has a dedicated "Request Medical Records" page at `piedmontmedicalcenter.com/patients/request-medical-records` with a direct link to the form. The URL path (`/docs/librariesproviderpiedmont/pdfs/authorization-to-use-and-disclose-protected-health-information-form.pdf`) is descriptive and clearly names the document.

However, Cloudflare bot protection blocked programmatic downloads, requiring browser-based retrieval. While this is a hosting/infrastructure issue rather than a form design issue, it does mean automated tools or assistive technologies that fetch PDFs may encounter difficulties.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. Full text is extractable (3,790 characters), confirming this is not a scanned image.
- **Fillable fields:** Zero. Despite having labeled fields for patient name, date of birth, address, phone number, dates of service, and recipient information, none are interactive form fields. The checkboxes for record types (□ Discharge Summary, □ History & Physical, etc.) are static Unicode characters, not fillable checkboxes.
- **File size:** 167,018 bytes for a single page with no embedded images—reasonable but not optimized.
- **Fonts:** 5 fonts embedded.
- **Digital-first design:** No. This is designed as a print-and-fill form. The presence of template merge fields at the bottom (`«PatientNumberBarcode»`, `«AdmitDate»`, `«PatientNumber»`, `«MedicalRecordNumber»`, `«PatientName»`, `«Age»«AgeCode»`, `«Gender»`) indicates it was generated from a document management system (likely Meditech or similar) intended for in-house printing with patient demographics pre-populated. When posted online as a blank form, these template placeholders appear as literal text, which is confusing.

## 4. CONTENT DESIGN

**Length:** One page—compact and efficient for a basic authorization form.

**Organization:** The form uses a structured layout with labeled sections: PATIENT INFORMATION, INFORMATION REQUESTED, PURPOSE, and INFORMATION TO BE GIVEN TO. This is a logical flow.

**Record type options:** The form provides a good range of checkboxes:
- All Pertinent Records, Discharge Summary, History & Physical, Lab results, Consultations, ER Report, Operative Report, Pathology Report, Discharge Instructions, X-ray Reports, Imaging and/or imaging reports, Behavioral Health/Psychiatric Care Record, Screening and/or Treatment of Alcohol and/or Substance Abuse, EKG Report, plus a "Specify" write-in option and "All Records."

**Sensitive information handling:** The form includes a blanket statement: "I understand that information in my health record may include information relating to Sexually Transmitted Disease, Acquired Immunodeficiency Syndrome (AIDS), Human Immunodeficiency Virus (HIV) and other communicable disease, Behavioral health Care/Psychiatric Care, treatment of alcohol and/or drug abuse and genetic testing; my signature authorizes release of any such information." This is a single omnibus consent for all sensitive categories rather than giving granular control (contrast with form-2, which has individual checkboxes for each sensitive category).

**Clarity:** The language is moderately legalistic. While not impenetrable, sentences like "I release Piedmont Medical Center, its employees and agents, medical staff members and business associates from any legal responsibility or liability for the disclosure of the above information to the extent indicated and authorized herein" are dense for a general patient audience.

**Visual hierarchy:** Section headers (PATIENT INFORMATION, INFORMATION REQUESTED, etc.) appear in all-caps labels. The form is compact but legible based on the text extraction.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is primarily a third-party disclosure authorization ("I authorize Piedmont Medical Center to disclose the following information..."). However, it includes a "□ Self" checkbox under the PURPOSE section, indicating patients can use it to request their own records. There is no dedicated patient-access form.

**Scope options:** Good. Patients can specify date ranges ("Service Dates From/To"), select specific record types from 14+ checkboxes, or request "All Records."

**Format/delivery options:** None. The form has no field for specifying how records should be delivered (paper, electronic, fax, portal, etc.). There is no mention of electronic delivery, email, or patient portal access.

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's Right of Access. It mentions the "Notice of Privacy Practices" and provides Privacy Office contact information, but does not inform patients of their specific right to access their own records.

**EHI Export awareness:** No mention of electronic health information export, USCDI, or bulk data access.

**Purpose options:** Limited. The form offers only "□ Continuing Medical Care" and "□ Other (specify reason)" as purpose choices. There is no option for "personal use," "patient access," or "transfer to another provider," which are common reasons patients request records.

## 6. COMPLIANCE

**Expiration:** The form states: "Unless I revoke this authorization earlier, it will expire 6 months from the date signed or as specified: __________________________." A 6-month default expiration is reasonable and within HIPAA norms.

**Right to revoke:** Addressed—"I understand that I may revoke this authorization at any time, except to the extent that action based on this authorization has already been taken."

**Conditioning of treatment:** Properly addressed—"Piedmont Medical Center will not condition or deny treatment on my signing this authorization" with the standard research exception.

**Liability release:** The form includes: "I release Piedmont Medical Center, its employees and agents, medical staff members and business associates from any legal responsibility or liability for the disclosure of the above information." While common, this language is unusual for a patient-access context.

**No fee disclosure:** The form does not mention any fees for records processing.

**In-person submission:** Not explicitly required, but no alternative submission methods (email, fax, online) are listed on the form itself. The notes indicate the medical records page mentions Datavant/Swellbox portals.

**Employee verification section:** The bottom of the form includes "For Healthcare Use Only" fields including "Employee completed/reviewed form with patient" and "ID verified," suggesting in-person processing is expected.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket sensitive-information consent without granular control.** The form's single omnibus statement authorizes release of STD, HIV/AIDS, behavioral health, substance abuse, and genetic testing information all at once with no opt-out for individual categories. South Carolina law (S.C. Code § 44-29-135 for HIV, 42 CFR Part 2 for substance abuse) may require more specific authorization for some of these categories. Form-2 (Physician Network version) handles this correctly with individual checkboxes.

- **Liability release clause.** The statement releasing the hospital "from any legal responsibility or liability for the disclosure" could discourage patients from exercising their rights, particularly if there were an unauthorized disclosure. This language is not required by HIPAA and may be inappropriate in a patient-access context.

### ⚠️ AMBIGUITIES

- **Template merge fields visible in the public PDF.** The bottom of the form displays raw template placeholders: `«PatientNumberBarcode»`, `«AdmitDate»`, `«PatientNumber»`, `«MedicalRecordNumber»`, `«PatientName»`, `«Age»«AgeCode»`, `«Gender»`. These are meaningless to patients and suggest the publicly posted form is an unprocessed template extracted from the hospital's document system.

- **"In ability" typo in legal representative section.** The form reads: "I attest to the continuing in ability of the above patient to make or communicate health care decisions." This appears to be a formatting error for "inability"—a typo in legal attestation language is concerning.

- **Unclear submission process.** The form provides no instructions for where to send, fax, or submit the completed form. Patients receive Privacy Office contact information (mail and email) but no explicit guidance on submitting the authorization itself.

### ❌ ERRORS

- **Form revision date of R03/2013 (13 years old).** While the print timestamp shows 6/29/2018, the form template has not been revised since 2013. This predates significant regulatory updates.

- **Pre-filled "200" in form-2's year field** (noted for context)—form-2's expiration section reads "day of ___, 200__" indicating it was designed before 2010 and never updated. Form-1 avoids this specific issue but shares the overall staleness problem.

### ✨ BRIGHT SPOTS

- **Dedicated medical records page with multiple access pathways.** The hospital's website includes a "Request Medical Records" page that links to this form, mentions the Datavant/Swellbox online portal for both patient and provider requests, and provides clear organizational context. The online portal option (even though not referenced on the PDF form itself) gives patients a modern alternative.

- **Good range of record-type checkboxes.** The 14+ specific record type options (including imaging, behavioral health, EKG, and a write-in) give patients meaningful control over what is disclosed.
