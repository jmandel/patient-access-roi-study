# Evaluation: UCHealth University of Colorado Hospital — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization to Disclose Protected Health Information" form covering five UCHealth entities: University of Colorado Hospital, Poudre Valley Hospital, Medical Center of the Rockies, Memorial Hospital, and Colorado Health Medical Group. The form is a general-purpose ROI authorization — it handles both patient-directed and third-party releases.

Based on the URL path (`/wp-content/uploads/2017/03/`), this appears to be a **2017-era version** of the UCHealth authorization form. The organization has since published an updated version (form-4.pdf, dated October 2025 per its document number HIM19000.1025), which lists a much broader set of facilities and adds electronic delivery options. A second form (form-2.pdf) exists that is specifically focused on inter-facility release/obtain workflows at University of Colorado Hospital. Form-3.pdf is from a different organization entirely (UC Health Cincinnati).

Form-1 is therefore an **outdated predecessor** of the current authorization form. It remains hosted on uchealth.org but is likely superseded by form-4 for current use.

## 2. FINDABILITY

Per the retrieval notes, UCHealth's ROI forms were easy to locate. The notes describe finding forms within "1-2 clicks from the main website navigation" via the medical records page at `https://www.uchealth.org/access-my-health-connection/medical-records-uchealth/`. However, this particular form (form-1) was found via web search (`UCHealth University of Colorado Hospital "authorization" "release" "health information" form PDF`) rather than from the current medical records page, which now links to the updated form-4. The source URL (`https://www.uchealth.org/wp-content/uploads/2017/03/PATVIS-Authorization-to-Disclose-Protected-Health-Information.pdf`) suggests it's a leftover upload that hasn't been removed from the server.

A patient searching for the authorization form could land on this outdated version through a search engine, since it remains publicly accessible. There is no indication on the form itself that it has been superseded.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 483,507 bytes — relatively large for a single-page form (larger than the current 2-page form-4 at 142,641 bytes), likely due to embedded images.
- **Text layer**: Present and functional. The full text extracts cleanly with no garbled characters or OCR artifacts.
- **Fillable fields**: **Zero** (`fillable_field_count: 0`). Despite being a digital PDF with a text layer, the form has no interactive form fields. A patient would need to print and hand-fill, or use annotation tools.
- **Font count**: 3; **Embedded images**: 3 (likely logos/branding).
- **Page count**: 1 page.
- **No digital submission pathway** described on the form itself — no email address, no portal link, no fax number for the HIM department.

The form functions as a static, print-oriented document. It is digitally readable but not digitally completable.

## 4. CONTENT DESIGN

**Layout**: The form crams a significant amount of content onto a single page. It includes patient demographics, purpose of request, recipient information, date range, record type checkboxes, sensitive-information consent, seven numbered disclosure statements, fee schedule, a confidentiality warning, and signature block with ID verification. The density is high but the organization is logical — it flows top-to-bottom through identification → purpose → what records → terms → fees → signature.

**Record type options**: The form offers 20 specific record types arranged in two columns, including:
- Abstract, Billing/UB04, Clinic/Progress Notes, Complete (all records), Discharge Summary, Drug/Alcohol Treatment*, Emergency Room Report, Facesheet, Genetic Information*, History and Physical, HIV/AIDS Information*, Immunization Record, Laboratory Results, Mental Health Treatment*, Operative Note, Other, Radiology Reports, Radiology Images, Sickle Cell*, STD/Communicable Disease*

Asterisked items require an additional signature line for specialized consent: `"*I hereby consent to disclose the above bolded/specialized information."` This is a reasonable approach to handling sensitive categories under state and federal law.

**Language**: The numbered disclosures (1-7) are written in relatively plain language. Key statements include:
- `"I need not sign this form to ensure health care treatment."` (item 7)
- `"This authorization is voluntary and the disclosure is made at my request."` (item 3)
- `"I have a right to revoke this authorization at any time"` (item 6)

These are important patient rights statements presented clearly.

**Fee schedule**: Fees are stated directly on the form:
- "No charge for pages 1-10"
- "$.50 cents for each page from 11-40"
- "$.33 cents for each additional page"
- "$5.00 per sheet of film and $7.00 per CD-ROM" for additional radiology copies (first set free for referral)

**Expiration**: `"I request this authorization to expire on ______________ or 180 days from the date signed below."` — default is 180 days with option to specify a different date.

**Processing time**: `"Requests will be processed within 10 business days."` — this is stated prominently as item 1.

## 5. PATIENT-CENTEREDNESS

**For a patient requesting their own records**, this form has several limitations:

1. **No self-service option**: The form is entirely oriented toward third-party release. The "I authorize release to" field expects a name/facility/address. There's no checkbox or pathway for "release to myself" or any electronic delivery method (no email, no patient portal mention). The current form-4 adds `"If released to self, select method of release: Email / My Health Connection / Mail / PowerShare"` — this older form lacks all of those.

2. **No submission instructions**: The form provides no fax number, mailing address, email, or portal for submitting the completed form. A patient filling this out would need to find separate contact information.

3. **ID verification required at signature**: The form requires ID documentation at signing (Driver's License, State ID, Military ID checkboxes appear at the bottom), which implies in-person submission. However, this requirement is in the "For HIM Office Use Only" section, so it's ambiguous whether patients are expected to provide ID copies with mailed submissions.

4. **Internal identifiers requested**: The form asks for `"MRN#"` and `"CSN/FIN#"` at the top. Most patients don't know these numbers, and the form doesn't indicate they're optional.

5. **"Formerly Known As" field**: Present but useful — supports name changes.

6. **Fee transparency**: Including fees directly on the form is patient-friendly, and "no charge for pages 1-10" is generous.

## 6. COMPLIANCE

- **Processing time**: 10 business days is well within HIPAA's 30-day requirement (with 30-day extension). This is a positive commitment.
- **Fee structure**: The stated fees (free for 1-10 pages, $0.50 for pages 11-40, $0.33 thereafter) appear to follow Colorado state law fee schedules rather than HIPAA's "reasonable, cost-based" standard. For patient access requests under HIPAA, only reasonable cost-based fees are permitted (limited to labor for copying, supplies, and postage). Charging per-page fees to patients may exceed what HIPAA allows for patient access requests. However, if this form is used exclusively for third-party releases (not patient access), per-page fees may be permissible.
- **Expiration**: 180 days default is reasonable.
- **No conditioning on treatment**: Explicitly stated in item 7.
- **Revocation rights**: Clearly described in item 6.
- **Re-disclosure warning**: Item 4 warns that information released to non-covered entities "may no longer be protected by federal privacy regulations."
- **Multiple requests**: Item 5 states "Multiple requests are authorized if the purpose of the request remains the same" — this is an unusual clause that could be interpreted broadly. It could mean the authorization is ongoing/open-ended for the same purpose, which might not align with patient expectations of a one-time release.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Per-page fee structure applied without distinguishing patient access from third-party release**: The fee schedule ($0.50/page for pages 11-40, $0.33/page thereafter) may violate HIPAA's fee limitations for patient access requests under 45 CFR § 164.524(c)(4), which restricts charges to reasonable, cost-based fees. The form makes no distinction between patient-directed access and third-party release, so a patient requesting their own records could be charged these per-page fees. (The updated form-4 explicitly offers free delivery via patient portal and free paper copies for first 100 pages to patients.)

- **"Multiple requests are authorized if the purpose of the request remains the same"** (item 5): This creates an open-ended authorization that could be used to repeatedly release patient information without additional consent, as long as the purpose category matches. This is unusual and could exceed what patients intend when signing a single authorization.

### ⚠️ AMBIGUITIES

- **No submission instructions at all**: The form provides no address, fax number, email, or other mechanism for where or how to submit the completed form. A patient downloading this PDF has no guidance on what to do with it after completion.

- **MRN# and CSN/FIN# fields**: These internal identifiers are presented as standard fields at the top of the form with no indication that they're optional. Most patients won't have this information, and the form doesn't explain what these numbers are or where to find them.

- **ID verification section ambiguity**: The checkboxes for Driver's License, State ID, Military ID are in a "For HIM Office Use Only" block alongside Death Certificate, Living Will, and Power of Attorney. It's unclear whether patients submitting by mail need to include ID copies, or whether this is only for in-person verification.

### ❌ ERRORS

- **Outdated/orphaned document**: This form remains hosted on uchealth.org at its original URL with no indication it has been superseded by a newer version (form-4.pdf). Search engines may serve this outdated form to patients.

- **Limited facility list**: Lists only 5 facilities (University of Colorado Hospital, Poudre Valley Hospital, Medical Center of the Rockies, Memorial Hospital, Colorado Health Medical Group), whereas the current form-4 lists 12+ facilities. Patients at newer UCHealth locations would not find their facility on this form.

### ✨ BRIGHT SPOTS

- **Free first 10 pages**: The "No charge for pages 1-10" policy is generous compared to many organizations that charge from the first page, and this was carried forward (and expanded to 100 pages) in the current form.

- **10 business day processing commitment**: Stating a specific, relatively short turnaround time (well under HIPAA's 30-day limit) is unusually transparent and patient-friendly.

- **Granular record type selection**: Offering 20 distinct record categories gives patients meaningful control over what is disclosed, rather than forcing an all-or-nothing release.

- **Sensitive information separate consent**: Requiring a separate patient signature specifically for sensitive categories (Drug/Alcohol, HIV/AIDS, Mental Health, Genetic, Sickle Cell, STD) provides appropriate additional protection while still allowing disclosure when the patient affirmatively consents.
