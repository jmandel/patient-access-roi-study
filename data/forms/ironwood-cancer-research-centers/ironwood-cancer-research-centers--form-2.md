# Evaluation: Ironwood Cancer & Research Centers — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "Authorization to Release Protected Health Information" — the primary outbound ROI form authorizing **Ironwood Physicians, PC** to release a patient's protected health information. It is a general-purpose authorization form, not specifically tailored for patient self-access under HIPAA's Right of Access.

In context of the three documents found for this organization:
- **form-1.pdf** is the reverse direction — a request for *other* facilities to send records *to* Ironwood (incoming records for continuing care). It is a fillable PDF with 22 interactive fields.
- **form-2.pdf** (this document) is the outbound release authorization — the form a patient would use to get their own records or authorize release to a third party.
- **form-3.pdf** is a 10-page new patient forms packet from the related ironwoodwomenscenters.com site, containing a HIPAA contact list (not a traditional ROI form).

Form-2 is the only document that serves a patient requesting their own health records from Ironwood.

## 2. FINDABILITY

**Moderate difficulty.** Per the retrieval notes, the form was found via a `site:ironwoodcrc.com` search that turned up a 2019-era PDF. The organization's patient forms page (`https://www.ironwoodcrc.com/patient-forms/`) "did not have visible links to downloadable forms when fetched — may require JavaScript rendering or the forms were removed." The form was not directly linked from any obvious patient-facing page.

The source URL is `https://www.ironwoodcrc.com/wp-content/uploads/2019/03/Authorization-to-release-protected-health-information.pdf` — hosted in WordPress uploads with a descriptive filename, but the `/2019/03/` path segment suggests it dates from March 2019 and may not be actively maintained or linked.

A patient navigating the website would likely not find this form without a web search. The incoming records form (form-1) was uploaded more recently (November 2023), suggesting the organization may have updated its forms page to prioritize incoming records over patient access.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (2,668 characters across 2 pages). Not an image-only scan.
- **Fillable fields**: **Zero.** Despite having clear blank fields for patient name, date of birth, recipient information, dates of service, signature, etc., the PDF has no interactive form fields. This is a print-and-handwrite form. This stands in stark contrast to form-1 (the incoming records form), which has 22 fillable fields.
- **File size**: 157 KB for 2 pages — reasonable.
- **Font count**: 7 fonts used.
- **Embedded images**: 1 (likely a logo or header graphic).
- **Digital-first design**: No. This is clearly designed for printing and handwriting. The lack of fillable fields and the instruction to provide a wet signature ("Signature of Patient") confirm a paper-first workflow.

## 4. CONTENT DESIGN

**Length and proportionality**: 2 pages is appropriate for an authorization form. The first page covers patient/recipient information, record type selection, and delivery method. The second page contains the legal disclosures ("I UNDERSTAND THAT...") and signature blocks.

**Clarity**: The legal language is reasonably clear, though presented in a dense paragraph format. Key disclosures use "I UNDERSTAND THAT" headers that make obligations somewhat scannable. However, there is no plain-language summary or introductory paragraph explaining what the form is for or how to use it.

**Organization**: Logically ordered — patient identification → recipient → record types → date range → purpose → delivery method → legal disclosures → signatures → office-use section. The flow makes sense.

**Record type checkboxes**: The form offers 7 categories: "Physician's Notes," "Laboratory Reports," "Radiology Reports," "Biopsy Reports," "Prescriptions," "Radiology Imaging," and "Other (describe)." This is a reasonable granularity for a cancer care center.

**Purpose options**: "Personal Use," "Continued Patient Care," "Legal," "Insurance," "Disability," and "Other (describe)." Including "Personal Use" is notable — it explicitly acknowledges patient self-access as a valid purpose.

**Delivery methods**: Five options listed: "Fax," "Secure Email," "Mail," "Pick Up," and "Patient Portal." Each has relevant sub-fields (fax number, email address, mailing address, office location for pickup, portal terms note).

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form is a general authorization that serves both patient self-access and third-party release. It is *not* specifically designed for patient access. The "To" and "From" fields suggest a third-party model (designating a recipient), though "Personal Use" as a purpose option partially addresses self-access.

**Scope options**: Good. Patients can select specific record types (6 checkboxes plus "Other") and specify date ranges via "For Date(s) of Service." This allows targeted requests rather than all-or-nothing.

**Format/delivery options**: Strong. Five delivery methods are offered, including "Secure Email" and "Patient Portal" — both electronic options. The patient portal option notes: "Patient Portal 'Terms of Service' will be presented upon Sign In." This suggests integration with an existing portal system.

**Right of Access language**: The form does not reference HIPAA § 164.524 or use the term "Right of Access." It does state: "My treatment, payment, enrollment in a health plan, or eligibility for benefits cannot be conditioned upon my authorization of this disclosure" — which reflects the HIPAA non-conditioning requirement.

**EHI Export / bulk data**: No mention of electronic health information export, USCDI, or any bulk data options.

**Authorized representative**: The form addresses representatives: "An authorized representative of the patient must be identified on the Consent to Release Health Information Contact Form that we have on file, or be able to provide the appropriate legal documentation to support representative status." This cross-references form-3's HIPAA contact list.

## 6. COMPLIANCE

**Fees**: The form states "A fee may be charged for providing the protected health information." This is vague — no fee schedule is provided, no distinction is made between patient access fees (which HIPAA limits to reasonable cost-based fees) and third-party release fees.

**Expiration**: "Unless otherwise revoked, this authorization will expire one (1) year from the date of signing unless an earlier date is specified in writing." One year is a standard and reasonable expiration period.

**Revocation**: Clear language on revocation rights: "I may revoke this Authorization at any time... I must revoke this Authorization in writing." This is standard and compliant.

**Re-disclosure warning**: Includes appropriate re-disclosure notice: "information disclosed pursuant to this Authorization may be subject to re-disclosure by a recipient."

**Sensitive information**: Explicitly covers communicable diseases (HIV/AIDS, STDs), behavioral/mental health, alcohol/drug use, and genetic testing. No separate opt-in for these categories — they are bundled into the general authorization.

**Verification section**: The "For Office Use Only: Verification of Authority" section includes checkboxes for "HIPAA Contact List," "Legal Documentation," "Picture ID," "Chart ID Photo," and "Checked Fax Number/Address." The Picture ID requirement is standard for identity verification but is not presented as a patient-facing barrier.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No fillable fields on the outbound release form, while the incoming records form has 22 fillable fields.** This asymmetry suggests the organization invested in making it easy for *other providers* to send records *to* Ironwood (form-1, fillable, updated 2023) but not in making it easy for *patients* to request their *own* records (form-2, not fillable, from 2019). The patient-facing form is the inferior document.

### ⚠️ AMBIGUITIES

- **"A fee may be charged"** — no specifics on fee amounts, no distinction between patient-access and third-party fees, and no indication of fee schedule availability. Under HIPAA, fees for patient access are limited to reasonable cost-based amounts; this vague language could leave patients uncertain about costs.
- **"To" / "From" field confusion.** The form begins with "I authorize Ironwood Physicians, PC: To use or disclose the Protected Health Information of:" followed by "To:" and "From:" fields alongside "Name of Person or Facility" and address fields. For a patient requesting their own records, it's unclear whether they should fill in the "To" field with their own name or leave it blank. The layout is oriented toward third-party releases.

### ❌ ERRORS

- **Orphaned form — not linked from any active webpage.** The patient forms page at `https://www.ironwoodcrc.com/patient-forms/` did not expose this form. It exists only as a deep WordPress upload link from 2019, discoverable only via search engines. If the page was updated and this link was not re-added, the form may be effectively abandoned.

### ✨ BRIGHT SPOTS

- **"Personal Use" as an explicit purpose option.** Many ROI forms omit patient self-access as a purpose category, forcing patients to select "Other" or leaving them uncertain. Including "Personal Use" as a first-listed option signals awareness that patients may want their own records.
- **Five delivery methods including Secure Email and Patient Portal.** Offering both secure email and portal access alongside traditional methods (fax, mail, pickup) gives patients meaningful electronic options — better than many comparable forms.
