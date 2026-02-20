# Evaluation: Providence St. Vincent Medical Center — form-3.pdf

**Document**: "Patient Request for Access to Designated Record Set"
**Source URL**: https://www.providence.org/-/media/project/psjh/shared/files/roi/or-mt-access-designated-record-set.pdf
**Organization**: Providence St. Vincent Medical Center (Portland, OR)
**Facility type**: Community hospital, nonprofit, major system affiliation (Providence St. Joseph Health), West region

---

## 1. DOCUMENT IDENTIFICATION

Form-3 is titled **"PATIENT REQUEST FOR ACCESS TO DESIGNATED RECORD SET"** and is a patient-access-specific form for Oregon and Montana facilities within the Providence Health & Services system. It is one of three ROI-related forms found for this organization:

- **Form-1** ("Authorization to Use, Disclose & Release Protected Health Information") — a general ROI authorization covering both patient access and third-party release, revision 03/20.
- **Form-2** ("Patient Request to Access/Disclose a Designated Record Set") — a newer PSJH-wide patient access form, dated 3/27/25, with updated branding and R1RCM vendor contact info.
- **Form-3** (this document) — an older OR/MT-specific patient access form, revision 03/20.

Form-3 appears to be the **predecessor to Form-2**. Both serve the same function — patient requests for access to their designated record set — but form-3 uses older "Providence Health & Services" branding and contact information, while form-2 uses the updated "Providence St. Joseph Health" (PSJH) name and an outsourced ROI vendor (R1RCM). The fact that both remain published online creates potential confusion about which form patients should use.

No facility-specific form exists for St. Vincent Medical Center; all forms are published at the Providence system level.

---

## 2. FINDABILITY

According to the retrieval notes, finding this form required multiple search strategies. Direct searches for "Providence St. Vincent Medical Center" ROI forms did not surface facility-specific results; the searcher had to pivot to searching for the parent system. The form was ultimately found via the Providence Health Information Management (HIM) page at `providence.org/about/medical-records-authorization/health-information-management`.

The URL structure (`/roi/or-mt-access-designated-record-set.pdf`) is reasonably descriptive — it indicates the form is for Oregon/Montana and relates to accessing a designated record set. However, the presence of three overlapping forms (form-1, form-2, form-3) without clear labeling on the HIM page about which is current vs. superseded makes it harder for patients to identify the correct form. The notes indicate that form-2 appears to be the intended replacement for form-3, yet form-3 remains downloadable.

The form itself instructs patients to forward it to "the hospital where you were seen" or, if unsure, to the central ROI address — which is helpful guidance for a multi-facility system, but this routing information uses the older "Providence Health Services" name and contact details.

---

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. Full text is extractable (3,097 characters across 2 pages), confirming this is not an image-only scan.

**Fillable fields**: The form has **50 fillable fields**, which is generous for a 2-page form. This includes fields for patient demographics, recipient information, delivery method, facility selection, date ranges, record types, and signatures. The field names are not reported in the metadata (`fillable_field_names: []`), but the text content shows clearly labeled areas for all major data entry points.

**File size**: At **754,824 bytes (755 KB)**, this is notably large for a 2-page form with a text layer. By comparison, form-1 is 283 KB (2 pages) and form-2 is only 97 KB (3 pages). The metadata shows 2 embedded images and 21 fonts — the high font count and images likely account for the bloated file size. This could slow downloads on poor connections.

**Digital-first design**: The form appears designed for digital completion — it has extensive fillable fields, checkbox options for delivery method and record type, and a text layer throughout. However, the signature lines read "(Print form and sign by hand)," indicating the final step requires printing, which undermines the digital-first approach.

**PDF version**: Not explicitly reported, but the form functions as a standard interactive PDF.

---

## 4. CONTENT DESIGN

**Length**: 2 pages, which is appropriate and concise for a patient access request form.

**Structure**: Page 1 is an informational preamble with instructions, contact information, disclaimers, and non-discrimination notices. Page 2 is the actual form with data entry fields. This separation is logical — information first, then action.

**Clarity**: The language is mostly plain and accessible. The opening instruction is clear: *"In some areas, Providence Health & Services and Affiliates may store patient records separately for hospitals. We would be glad to fax a copy of this form to other facilities upon request."* However, the title "Designated Record Set" is a HIPAA term of art that most patients would not recognize — "Medical Records" or "Health Records" would be more patient-friendly.

**Record type options**: The form offers checkboxes for specific record types: History & Physical, Operative Report, Diagnostic Report (lab, x-ray, EKG, etc.), Discharge Summary, Emergency Department Report, Progress Notes, plus an "Other (specify)" option and a "Last 2 years only" checkbox. This is a reasonable set of options.

**Delivery options**: The form offers five delivery methods via checkbox: Disc, Email, MyChart, Paper, Fax. This is a strong set of options.

**Layout**: The form is clean with reasonable whitespace. Field labels are clearly positioned. The state selection checkboxes (Alaska, California, Montana, Washington, Oregon) are laid out horizontally across the top of page 2. The multi-language notice on page 1 (English, Spanish, Chinese) is a thoughtful inclusion.

**Fee disclosure**: The form states *"Fees may be associated with this request"* — a brief, vague mention near the bottom of page 2. No details on fee amounts or the HIPAA-mandated reasonable cost-based fee limit for patient access requests.

---

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is explicitly designed for patient access — titled "Patient Request for Access to Designated Record Set" and defaulting to disclosure "to: Myself at the address above" with an alternative option for "the following recipient." This is a meaningful distinction from form-1, which is a general authorization covering both patient access and third-party release.

**Scope options**: Patients can specify date ranges ("For the range of dates from: ___ to: ___"), select specific record types via checkboxes, and name specific facilities. This gives patients reasonable granularity of control.

**Format options**: Five delivery options (Disc, Email, MyChart, Paper, Fax) are offered. The inclusion of MyChart (the patient portal) and email is forward-looking and patient-friendly.

**Right of Access language**: The form does not explicitly reference HIPAA § 164.524 or use the phrase "right of access." It does not explain patient rights regarding access to records. This is a notable gap — form-2 (the newer version) includes a "MY RIGHTS" section explaining that patients may refuse to sign, that refusal won't affect treatment, and that they can revoke the authorization. Form-3 lacks this entirely.

**Sensitive information handling**: Unlike form-1, which requires initials for HIV/AIDS, mental health, genetic testing, and drug/alcohol information, form-3 does **not** include any special handling for sensitive record categories. This is a significant omission — either the form assumes all records will be released (which may violate state-specific protections), or it implicitly excludes sensitive categories without informing the patient.

**EHI Export**: No mention of electronic health information export or bulk data access.

---

## 6. COMPLIANCE

**Signature requirement**: The form requires a wet signature — both the patient signature and representative signature lines state "(Print form and sign by hand)." Electronic signatures are not accepted, which creates a barrier for fully digital submission despite the form's fillable fields.

**Expiration**: No expiration clause is mentioned on form-3. Form-1 includes a 180-day default expiration, and form-2 includes a 6-month default. The absence of an expiration clause on form-3 is unusual and could mean the request never expires or that the organization applies an internal policy not communicated to the patient.

**Liability waiver**: The form includes: *"The facility, its employees, officers and physicians are hereby released from any legal responsibility or liability for disclosure of the above information to the extent indicated and authorized herein."* This liability release is standard in ROI forms but may confuse patients who interpret it as waiving their rights to challenge improper disclosures.

**Revocation**: No revocation instructions are provided on form-3. Form-1 explains the revocation process in detail, and form-2 includes a revocation address. The absence from form-3 is a compliance gap — HIPAA requires that authorizations inform individuals of their right to revoke.

**Fee language**: The form states *"Fees may be associated with this request"* but provides no fee schedule or reference to the HIPAA reasonable cost-based fee standard for patient access requests. Under HIPAA, fees for patient access (§ 164.524) are limited to reasonable, cost-based fees, and many states have more specific limits.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No revocation instructions**: HIPAA-valid authorizations must inform the individual of their right to revoke (45 CFR § 164.508(c)(2)(i)). Form-3 contains no revocation language or instructions whatsoever. This is a significant compliance deficiency.
- **Wet signature only**: Despite having 50 fillable digital fields, the form mandates "(Print form and sign by hand)" — forcing patients to print, sign, and then mail/fax the form. This creates an unnecessary barrier to access.

### ⚠️ AMBIGUITIES

- **Superseded but still published**: Form-3 (revision 03/20) appears to have been replaced by form-2 (dated 3/27/25), yet both remain accessible on the Providence website. The older contact information on form-3 (PH&S branding, different phone number 503-215-7423 vs. form-2's 855-234-2491, different email PHSHIM.CENTRALROIRECEPTION@providence.org vs. ROIHIMreception@r1rcm.com) could lead patients to outdated or non-functional contact channels.
- **No sensitive record categories**: Form-3 omits the checkboxes and initials for HIV/AIDS, mental health, genetic testing, and substance abuse records that appear on form-1 and form-2. It's unclear whether using form-3 means these categories are automatically included, excluded, or handled separately.
- **"Fees may be associated"**: The vague fee disclosure gives patients no basis to understand what they might be charged or what limits apply under HIPAA.
- **"Designated Record Set"** in the title is regulatory jargon unlikely to be understood by most patients.

### ❌ ERRORS

- **Outdated organizational branding**: The form uses "Providence Health & Services" (PH&S) throughout, while the organization has rebranded to "Providence St. Joseph Health" (PSJH). The contact email (`PHSHIM.CENTRALROIRECEPTION@providence.org`) and phone number (`503-215-7423`) differ from the updated information on form-2.
- **Grammar error**: The text states *"patient records that is more than a few years old"* — should be "that are more than a few years old."
- **Bloated file size**: At 755 KB for a 2-page form, the file is nearly 8x the size of the equivalent newer form-2 (97 KB for 3 pages), suggesting unoptimized embedded images or fonts (21 fonts for a 2-page document is excessive).

### ✨ BRIGHT SPOTS

- **Five delivery format options**: Offering Disc, Email, MyChart, Paper, and Fax gives patients meaningful choice in how they receive records — particularly the inclusion of MyChart and email as electronic options.
- **Multilingual notice**: The form includes language assistance notices in English, Spanish, and Chinese with a toll-free number and TTY access.
- **Central routing guidance**: The instruction to forward the form to the specific hospital or, if unsure, to the central ROI PO Box is practical for patients navigating a multi-facility system.
