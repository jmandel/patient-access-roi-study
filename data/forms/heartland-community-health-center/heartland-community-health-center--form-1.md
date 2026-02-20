# Evaluation: Heartland Community Health Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a single-page "Authorization to Release and Disclose Patient Information" form. It is the only form found for Heartland Community Health Center. The document is a general-purpose ROI form — it covers both patient-initiated requests and third-party releases, with no separate pathway for patients exercising their HIPAA Right of Access.

The header lists three Heartland locations:
- Heartland Community Health Center (1312 W 6th St, Lawrence, KS 66044)
- Heartland @ Panda Pediatrics (1803 W 6th St, Lawrence, KS 66044)
- Heartland COVID-19 Clinic (346 Maine St, Suite 150, Lawrence, KS 66044)

The form is titled with the organization's name and is clearly an internally-produced document, not a generic state template.

## 2. FINDABILITY

According to the retrieval notes, the form was not discoverable through generic web searches for PDF authorization/release forms. It was ultimately found via a site-scoped search (`site:heartlandhealth.org`), which returned a direct link to the PDF hosted in their WordPress uploads directory:

`https://heartlandhealth.org/wp-content/uploads/2021/10/FINAL-Updated-Release-of-Information-Form-2021.pdf`

The URL and filename are descriptive — "Release-of-Information-Form-2021" clearly communicates the document's purpose. However, the fact that the first two search strategies failed suggests the form is not prominently linked from obvious patient-facing pages. It lives in a WordPress uploads directory, which typically means it's embedded or linked somewhere on the site, but the path to it was not intuitive enough to surface through common search queries.

The retrieval notes characterize the difficulty as "None," which speaks well to overall accessibility once the right search was used. The form provides return instructions including email (medrecords@heartlandhealth.org), fax (785-856-0375), and mail address, which is helpful.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: The PDF has a full text layer (4,769 characters extracted cleanly). This is a digitally-created document, not a scan.

**Fillable fields**: Zero fillable form fields. Despite being a digital-origin PDF, the form is entirely static — patients must print it and fill it out by hand or use a PDF annotation tool. For a form with approximately 20+ distinct data entry points (name, DOB, address, phone numbers, dates, checkboxes for record types, "Records From" and "Records To" blocks, signature/date fields), the absence of any interactive fields is a significant missed opportunity.

**File size**: 237 KB for a single page is moderately large, likely due to embedded images (2 embedded images, probably the organization logo and possibly decorative elements). This is not a barrier but is larger than necessary for a text-heavy single-page document.

**Font count**: 16 fonts are used across a single page, which is high and suggests somewhat complex formatting.

**Digital-first design**: The document was clearly created digitally (not a scan), but it was designed as a print form — fill-in blanks indicated by underscores and checkboxes represented as Unicode characters (☐) rather than interactive form elements.

## 4. CONTENT DESIGN

**Length**: One page — impressively concise for the amount of content it covers. However, the tradeoff is that the form is extremely dense. Fitting patient demographics, record type selections, delivery method options, "Records From" and "Records To" blocks, purpose of request, a 10-bullet legal disclosure section, signature lines, and return instructions onto a single page means very tight spacing.

**Clarity**: The opening line is patient-friendly: "To treat you effectively, your provider needs to review your past medical records." This frames the form's purpose around the patient's care. However, this framing subtly positions the form as a tool for incoming records transfer rather than patient-initiated access to their own records.

The legal disclosure section is presented as a bulleted list of "I understand:" statements covering revocation rights, 12-month expiration, treatment non-conditioning, photocopy equivalence, re-disclosure warnings, and mental health records requirements. This is reasonably clear, though dense.

**Organization**: The form follows a logical flow: patient demographics → date range and record types → delivery method → records from/to → purpose → legal disclosures → signature → return instructions. This is a sensible ordering.

**Record type options**: The form offers two main approaches:
- A pre-defined "Record Set to Include" that bundles "Last Three (3) Office Visit Notes, most recent lab results, medication list, immunization records, colonoscopy report, mammogram report, pap report, imaging completed within the past year, foot/eye exam and A1C (if applicable), list of any known specialists caring for the patient."
- Individual checkboxes: Most Recent Medical Progress Notes, Most Recent Dental Progress Notes, Immunization, X-ray Reports/Films, Pathology/Lab Reports, Other.

**Notable design issue**: Mental health records are handled with a separate checkbox that states "No other records may be requested on this form" when mental health records are selected. The asterisk note clarifies: "A separate Authorization to Release/Request a patient's mental health notes must be completed to obtain additional records." This means requesting mental health records alongside other records requires two separate forms.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general-purpose release form. While "Patient's Request" is listed as one of the purpose options (alongside Insurance Dispute, Referral, Moving/switching providers, Seeing a Specialist, Disability, Other), the form's overall framing and structure are oriented toward records transfer between providers. The "Records From" and "Records To" fields suggest a third-party release model rather than a patient simply requesting their own records.

**Scope options**: Patients can specify date ranges, select from several record type categories, and choose a pre-bundled "Record Set." This is more flexible than many forms.

**Format/delivery options**: Four delivery methods are offered:
1. Pick up records in person
2. Email (with a security disclaimer: "although sent using encryption data software, the patient/recipient is aware this method may not be secure on the receiving end")
3. Fax
4. Mail copies

Email is a positive offering, though the liability disclaimer is notable: "Agreeing to have documents via secured email releases any/all liability from Heartland Community Health Center. Requester accepts all risks."

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or the patient's Right of Access. The HIPAA reference in the legal section is limited to the re-disclosure warning citing "45 C.F.R. Parts 160 and 164."

**EHI Export**: No mention of electronic health information export, patient portal download, or bulk data access.

**Submission methods**: Three return channels are offered — email (medrecords@heartlandhealth.org), fax (785-856-0375), and mail. This is good accessibility. The form also provides a phone contact for questions: "785-842-4477 Option 5" for the Health Information Management Department.

## 6. COMPLIANCE

**Expiration**: The authorization expires 12 months from the date of signature unless sooner revoked. This is a standard and reasonable timeframe.

**Revocation**: The form clearly states patients may revoke authorization at any time in writing, with the appropriate caveat that revocation does not apply to information already disclosed. This is compliant language.

**Treatment conditioning**: The form states "Heartland Community Health Center will not restrict my treatment if I choose not to sign this authorization." This is proper compliance language.

**Mental health records restriction**: The form requires a separate authorization for mental health records and prohibits combining mental health record requests with other record types on the same form. While this may reflect Kansas state law or organizational policy, it creates an additional step for patients needing comprehensive records.

**Witness requirement**: The form includes a "Witness" signature line with "Relationship to Patient" and "Date" fields. While not explicitly stated as required, the presence of a witness line could be interpreted as mandating a witness, which would be an unnecessary barrier.

**Communicable disease notice**: The form includes a capitalized notice: "THE INFORMATION AUTHORIZED FOR RELEASE MAY INCLUDE RECORDS THAT MAY INDICATE THE PRESENCE OF A COMMUNICABLE DISEASE OR NONCOMMUNICABLE DISEASE (This may include HIV Test Results, Substance Abuse/Drug Abuse Records, Genetic Test Results)." This serves as a content warning but also functions as a broad consent statement.

**Fee disclosure**: No fees are mentioned anywhere on the form.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Double liability waiver for email delivery**: The form contains two separate liability disclaimers for email: one inline ("the patient/recipient is aware this method may not be secure on the receiving end. However, they are accepting the risk") and a second in bold at the bottom ("Agreeing to have documents via secured email releases any/all liability from Heartland Community Health Center. Requester accepts all risks"). This double emphasis on liability transfer may discourage patients from choosing email delivery, effectively steering them toward less convenient options.

### ⚠️ AMBIGUITIES

- **Witness line purpose unclear**: The form includes a "Witness" signature line but never states whether a witness is required. For patient self-requests, requiring a witness would be an unreasonable barrier, but the form does not clarify when or if a witness is necessary.
- **"Records From" / "Records To" confusion for patient access**: When a patient is requesting their own records for personal use (not transfer to another provider), it's unclear how to fill out the "Records From" and "Records To" fields. The form assumes a transfer model; a patient requesting records for themselves may not know what to put in "Records To."
- **Mental health records exclusivity**: The asterisk note states "No other records may be requested on this form" when mental health records are checked, but the main form body says "A separate Authorization to Release/Request a patient's mental health notes must be completed." These are consistent but create confusion — does checking the mental health box on this form accomplish anything, or does the patient need an entirely different form?

### ✨ BRIGHT SPOTS

- **Pre-bundled "Record Set" option**: The form offers a thoughtfully curated default record bundle ("Last Three (3) Office Visit Notes, most recent lab results, medication list, immunization records, colonoscopy report, mammogram report, pap report, imaging completed within the past year, foot/eye exam and A1C (if applicable), list of any known specialists"). This reduces decision burden for patients who want comprehensive records without knowing exact medical terminology.
- **Multiple submission channels**: Offering email, fax, and mail for form return — plus a direct phone number for questions — makes the form accessible through multiple channels.
- **Single-page efficiency**: Despite its density, fitting the entire authorization onto one page reduces the barrier to completion compared to multi-page forms that can feel overwhelming.
- **Plain-language opening**: "To treat you effectively, your provider needs to review your past medical records" is a patient-friendly introduction that provides context before diving into form fields.
