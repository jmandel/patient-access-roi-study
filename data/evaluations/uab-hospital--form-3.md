# UAB Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Title**: "Authorization for Use or Disclosure of Patient Information" (UAB Medicine)
**Form number**: F# 219612 (Ref HA#18 & 20), Issued: 8/28/25
**Pages**: 2 | **File size**: 637,412 bytes

This is a **general HIPAA authorization form** — not a patient self-access form. It serves as the third-party release authorization, used when a patient wants records sent to attorneys, insurance companies, or other external parties. The form opens with "I hereby authorize the use or disclosure of my protected health information ('PHI') as described below," framing the transaction as a disclosure authorization rather than a patient access request.

**Relationship to other forms**: UAB Hospital provides three forms. Form-1 ("Patient Request for Own Medical Records") is the dedicated patient self-access form, which opens with "UAB Medicine recognizes a patient's right to access their own protected health information." Form-2 is a Callahan Eye Hospital variant. Form-3 (this document) is the general authorization form, linked from the medical records page under "I am requesting that my medical records be sent directly to a third party." Notably, form-3 still includes "me for my personal use" as one of the recipient options, creating overlap with form-1.

## 2. FINDABILITY

The form was easy to find. According to retrieval notes, web searches immediately surfaced PDF links, and the UAB Medicine medical records page (`uabmedicine.org/pay-your-bill/medical-records-request/`) clearly distinguishes between patient self-access and third-party release, with separate download links. The source URL (`https://www.uabmedicine.org/wp-content/uploads/sites/3/2023/05/Authorization.pdf`) uses a generic filename ("Authorization.pdf") that is less descriptive than form-1's filename ("Patient-Request-own-medical-records.pdf"). The URL path includes a 2023/05 date folder, though the form itself shows an issue date of 8/28/25, suggesting the URL was not updated when the form was revised.

The website's organization makes it clear this form is for third-party disclosures, which is good — patients seeking their own records should be routed to form-1 instead.

## 3. TECHNICAL ACCESSIBILITY

**Text extraction is severely broken.** The PDF uses CID Type 0C fonts with Identity-H encoding that produce completely garbled output via `pdftotext`. The metadata shows the extracted text as unreadable control characters and substitution-ciphered text (e.g., `8WD>NW_\x1e8L>` for "Patient Name", `\x13DW]\x04_"W8W>\x03_8N<_&DR` for "City, State, and Zip"). While the document renders correctly in a PDF viewer, any programmatic text extraction — including assistive technology, search indexing, or automated form processing — will fail.

**No fillable fields.** The metadata confirms `fillable_field_count: 0` with no interactive form fields. All blanks are indicated by underscores in the text (e.g., "Patient Name: ________________"). The form must be printed and filled by hand, or annotated using a PDF editor.

**File size is disproportionate.** At 637 KB for a 2-page text-based form, this is nearly twice the size of form-1 (341 KB, also 2 pages) and 6× the size of form-2 (108 KB, 3 pages). The metadata shows 2 embedded images and 9 fonts. The bloated size and broken text encoding suggest a suboptimal PDF generation pipeline — possibly generated from a system that embeds fonts without proper Unicode mappings.

**Not a scan** — the document has a text layer (albeit garbled) and is digitally generated. It is not image-only. However, the broken text encoding undermines the benefit of having a text layer.

## 4. CONTENT DESIGN

Based on OCR of the rendered PDF:

**Structure mirrors form-1.** The form follows the same organizational pattern as the patient self-access form: patient information section, recipient section, psychiatric/substance use records question, date range selector, five record packages, individual record type checkboxes, delivery options, and signature block. This parallel structure is logical for an organization maintaining consistent processes.

**Five record packages** are offered, identical to form-1:
- Package 1: Key Clinical Notes
- Package 2: Clinical Notes (Package 1 + medication list)
- Package 3: Clinical Notes II (Packages 1 & 2 + diagnostics)
- Package 4: Laboratory/Radiology/diagnostic reports only
- Package 5: Entire Medical Record (Package 3 + nursing docs, excludes fetal monitoring strips)

**Delivery options** include paper (mail or pickup), fax, CD, and email — with an appropriate privacy notice about encryption and disclaimer of responsibility after receipt.

**Language is reasonably clear**, though it opens with legalistic authorization framing rather than plain language. The consent paragraph on page 1 is dense: "This request includes any information relating to drug, alcohol use/treatment, communications with psychiatrists or psychologists, and records pertaining to sexually transmitted diseases, if they are a part of my medical record."

**Page 2 initials section** requires the patient or representative to initial three blanks acknowledging: (1) right to revoke, (2) non-conditioning of treatment on authorization, and (3) authorization expiration terms. These are appropriate HIPAA-required elements for a valid authorization.

**Expiration clause**: "If I fail to specify an expiration date or event, this Authorization will expire six months from the date on which it was signed." This is a reasonable default.

## 5. PATIENT-CENTEREDNESS

This form is **not designed for patient self-access** — it is a third-party disclosure authorization. UAB appropriately provides a separate, dedicated patient access form (form-1) that opens with rights-affirming language. However, form-3 still includes "me for my personal use" as a recipient option, which could confuse a patient who encounters this form first.

The form **does not reference HIPAA § 164.524** (Right of Access) or patient rights language. This is appropriate since it is an authorization form under § 164.508, not an access request. The initials section correctly addresses authorization-specific requirements (revocation rights, non-conditioning of treatment).

**No mention of EHI export**, bulk data access, or patient portal alternatives.

**Submission is limited to physical channels**: the return address is given as "UAB Health Information Management, Release of Information Office, 1201 11th Ave. South, Birmingham, AL 35205, Fax: 205-930-6721." No email submission, online portal, or electronic submission option is mentioned for the form itself (though records can be delivered electronically).

## 6. COMPLIANCE

**Appropriate authorization elements present**: The form includes the required HIPAA authorization elements — description of information, persons authorized to disclose/receive, purpose, expiration, right to revoke, and signature/date.

**Non-conditioning statement is properly included**: "I understand that UAB Medicine may not condition the provision of treatment, payment, and enrollment in a health plan, or eligibility for benefits on signing this Authorization" — with appropriate exceptions for research, health plan enrollment, and third-party-requested treatment.

**No notarization required.** No witness requirement. No fee disclosure.

**Six-month default expiration** is reasonable and not overly restrictive.

**Substance use/psychiatric records**: The form bundles consent for drug, alcohol, psychiatry, and STD records into the main authorization text on page 1 rather than offering opt-in/opt-out. However, it also asks "Are you requesting psychiatric or substance use records to be included in the release? ____ Yes ____ No" — providing an explicit opt-in/opt-out for sensitive categories, which is good practice for 42 CFR Part 2 compliance.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Broken text encoding creates an accessibility barrier.** The CID font encoding produces entirely garbled output from standard text extraction tools. This means screen readers and other assistive technologies likely cannot read this form, potentially violating ADA/Section 508 accessibility requirements. A visually impaired patient would be unable to independently complete this form without sighted assistance.

### ⚠️ AMBIGUITIES

- **"Me for my personal use" option on a third-party form.** The form includes "UAB Medicine should provide records to ____ me for my personal use or to ____ the party indicated below." Since UAB has a separate patient self-access form (form-1), having this option on the third-party authorization creates confusion about which form a patient should use. A patient using form-3 for self-access would be subject to the authorization framework (expiration dates, initials requirements) rather than the simpler access request framework.

### ❌ ERRORS

- **URL path date mismatch.** The source URL contains `/2023/05/` but the form footer reads "Issued: 8/28/25," suggesting the form was updated without changing the URL path. This is a minor web hygiene issue.
- **Page numbering error in form-2** (for context): form-2's third page reads "Page 3/2" — a pagination error. Not present in form-3.
- **Garbled text layer.** While the visual rendering is correct, the underlying text data is functionally corrupt, making copy-paste, search, and accessibility features fail completely.

### ✨ BRIGHT SPOTS

- **Clear separation of patient access vs. third-party authorization.** UAB's website explicitly routes patients to different forms based on their need, with form-1 for self-access and form-3 for third-party release. This is a best practice that many organizations fail to implement.
- **Granular record package options.** Five tiered packages plus individual record type checkboxes give patients and their representatives meaningful control over disclosure scope.
- **Substance use records opt-in/opt-out.** Despite bundling sensitive record types in the authorization text, the explicit yes/no question for psychiatric and substance use records provides appropriate granularity for 42 CFR Part 2 compliance.
