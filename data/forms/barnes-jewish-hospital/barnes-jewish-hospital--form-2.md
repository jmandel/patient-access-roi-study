# Evaluation: Barnes-Jewish Hospital — form-2.pdf

## DOCUMENT IDENTIFICATION

This is a general-purpose **"Authorization For Release Of Information"** form — designed for authorizing Barnes-Jewish Hospital to release medical records to a third party (physician, institution, or agency). It is a 2-page PDF (225,608 bytes) with a revision date of 10/28/10.

Barnes-Jewish Hospital provides **two distinct forms** on its Medical Records Requests page. Form-1 ("Request for Access to Protected Health Information by Individual Patients") is specifically designed for patients requesting their own records. Form-2 (this document) is the general third-party release authorization. The two forms serve fundamentally different purposes: form-1 is the HIPAA Right of Access form; form-2 is a HIPAA authorization for disclosure to others. A patient seeking their own records should use form-1, not this document.

Notably, form-2 includes a full litigation section on page 2, suggesting it is also used in legal discovery contexts.

## FINDABILITY

The form was easy to locate. According to the retrieval notes, the official Barnes-Jewish Hospital website has a dedicated "Medical Records Requests" page at `https://www.barnesjewish.org/Patients-Visitors/Medical-Records-Requests` that clearly distinguishes between individual requests, third-party requests, next-of-kin requests, and amendment requests. All forms are directly linked as PDFs with no login required.

The source URL (`https://www.barnesjewish.org/Portals/0/PDF-Files/Authorization_for_Release_of_Info.pdf`) has a descriptive filename. The search process encountered no significant difficulties — the page was found via standard web searches and direct site navigation. The website organization is notably clear about which form serves which purpose.

## TECHNICAL ACCESSIBILITY

**Text layer:** Present. The full text (5,047 characters) is cleanly extractable, indicating this is a digitally-authored document rather than a scan.

**Fillable fields:** Zero (`fillable_field_count: 0`). Despite having a text layer and being digitally authored (8 fonts, 1 embedded image), the form has no interactive form fields whatsoever. Patients must print and fill by hand or use PDF annotation tools — a significant accessibility shortcoming for a 2026-era document.

**File format:** PDF version 1.7, 225 KB for 2 pages. The file size is slightly large for the content volume (likely due to the embedded image/logo), but not unreasonably so.

**Digital-first design:** The document appears to be a digitally-created PDF (not a scan), but it was designed for print-and-fill workflow. The lack of any fillable fields means it functions as a paper form that happens to be distributed digitally.

## CONTENT DESIGN

**Length:** 2 pages. Page 1 contains patient identification, record-type checkboxes, recipient information, purpose, and HIPAA authorization language. Page 2 contains the litigation section, signature lines, and address fields. The length is reasonable for a third-party authorization form, though the litigation section adds bulk that is irrelevant for most non-legal use cases.

**Record type options:** The form offers 16 checkbox categories for record types: Designated Record Set, Emergency Report, Discharge Summary, History & Physical, Operative Report, Pathology Report, Laboratory (specify), Other (specify), Itemized Billing Statement, X-Ray Reports, X-Ray Films, Mammograms, Cardiac Cath Lab Cine Film, Cardiac Cath Lab Reports, EKG, and Pharmacy Records.

**Clarity:** The language is a mix of plain text and legal boilerplate. The opening line is clear: "I hereby authorize/request Barnes Jewish Hospital to release medical information of:" However, the HIPAA authorization paragraph is dense: "I permit the release of all information indicated above including test results and/or diagnosis and treatment information, if any, concerning drug/alcohol treatment or use, psychiatric treatment or AIDS/HIV and other communicable diseases." This is a broad blanket consent for sensitive categories bundled into a single sentence.

**Organization:** The form follows a logical top-to-bottom flow: patient identification → record selection → recipient → purpose → authorization language → signatures. However, the litigation section on page 2 appears mid-form without clear separation from the non-litigation portions, which could confuse patients who are not involved in litigation.

**Layout:** The form uses checkbox lists and labeled fields. The "- OVER -" notation at the bottom of page 1 suggests a legacy print-era design convention. The form header includes phone and fax numbers prominently.

## PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is explicitly a **third-party release** form. Its opening line directs the patient to authorize release "to" a recipient (Individual/Physician/Institution/Agency). It is not designed for patients requesting their own records — Barnes-Jewish Hospital provides form-1 for that purpose. A patient who mistakenly uses this form to request their own records would need to fill in themselves as the recipient, which is an awkward workaround.

**Scope options:** Patients can select from 16 record-type checkboxes including a "Designated Record Set" option (which would capture the complete record), and specify dates of treatment. This is adequate granularity for a third-party release form.

**Format/delivery options:** The form offers no electronic delivery options. Records are mailed to the specified address by default: "NOTE: Records will be mailed to above address unless otherwise noted below." There is a checkbox for "Check if Patient will pick up copies at Barnes Jewish Hospital." No email, portal, or electronic delivery option is mentioned. By contrast, form-1 (the patient access form) does offer electronic delivery.

**Right of Access language:** The form does not reference HIPAA § 164.524 (Right of Access). Instead, it contains standard HIPAA authorization language about the right to revoke and the voluntary nature of the authorization. This is appropriate since this is a § 164.508 authorization form, not a § 164.524 access request.

**Revocation process:** The form states that revocation requires the patient to "mail, fax or bring a letter in person" — providing three channels for revocation, which is reasonable.

## COMPLIANCE

**Expiration:** The authorization expires after **90 days** from signing unless canceled earlier — except in litigation contexts where "this authorization... shall remain in effect until the underlying claim is finally resolved." The 90-day default is short but not unreasonable for a third-party release authorization.

**Social Security Number:** The form requests a full Social Security Number as an identification field. While this may have been standard practice when the form was last revised (2010), requesting full SSN creates unnecessary data exposure risk and is not required by HIPAA.

**Sensitive information bundling:** The authorization includes a blanket consent for "drug/alcohol treatment or use, psychiatric treatment or AIDS/HIV and other communicable diseases" bundled into the general authorization. Under 42 CFR Part 2 (substance use disorder records), separate consent may be required — the blanket bundling approach may not satisfy Part 2 requirements depending on the specific records involved.

**Representative requirements:** The form states that anyone signing on behalf of a patient "must attach a certified copy of your appointment as legal guardian or personal representative." Requiring a "certified copy" could be a barrier — HIPAA allows covered entities to request documentation but does not require certified copies specifically.

**Witness line:** The form includes a "Witness" signature line with a date field. While not explicitly required, the presence of a witness line could give patients the impression that a witness is mandatory, creating an unnecessary procedural barrier.

**Revision date:** The form was last revised on **10/28/10** — over 15 years ago. This means it predates significant HIPAA regulatory updates, including the 2013 Omnibus Rule and the 2024 HIPAA Privacy Rule updates. The age of the form raises questions about whether it reflects current legal requirements and best practices.

## NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Full SSN requested:** The form asks for a full "Social Security Number" with no option for last-4-digits-only. Form-1 (the patient access form) allows "Social Security # (or last 4 digits)" — form-2 does not offer this alternative, creating unnecessary data exposure.
- **Certified copy requirement for representatives:** The form demands "a certified copy of your appointment as legal guardian or personal representative" — a potentially burdensome requirement that exceeds what HIPAA mandates.
- **Sensitive-category blanket consent:** The form bundles consent for substance abuse, psychiatric, and HIV/AIDS records into the general authorization without offering patients the ability to opt out of releasing specific sensitive categories. This is particularly concerning given 42 CFR Part 2 requirements for substance use disorder records.

### ⚠️ AMBIGUITIES

- **Litigation section placement:** Page 2's litigation section begins with "If this Authorization is being presented pursuant to litigation, complete this section" but is physically interleaved with the general signature area, making it unclear which portions non-litigation patients should complete.
- **Witness requirement unclear:** A "Witness" signature line is present but the form never states whether a witness is required or optional. Patients may delay submission while finding a witness unnecessarily.
- **"- OVER -" on both pages:** Both pages end with "- OVER -", including page 2, which is the last page. This is either a formatting error or suggests pages may have been reordered at some point.

### ❌ ERRORS

- **Form revision date of 10/28/10:** The form is over 15 years old and predates the 2013 HIPAA Omnibus Rule, 42 CFR Part 2 alignment updates, and the 2024 HIPAA Privacy Rule changes. Legal citations and practices may be outdated.
- **OCR artifact:** The extracted text contains "01'" instead of "or" in the litigation section ("injuries, illnesses 01' conditions"), suggesting either a PDF text encoding issue or OCR-like artifact in the original digital document.
- **"- OVER -" on final page:** Page 2 (the last page) still says "- OVER -" at the bottom, which is incorrect — there is nothing on the other side.

### ✨ BRIGHT SPOTS

- **Separate forms for distinct use cases:** Barnes-Jewish Hospital provides a dedicated patient-access form (form-1) separate from this third-party release form, which is a best practice that avoids forcing patients through an unnecessarily complex authorization process when they simply want their own records. The website clearly distinguishes between the two use cases.
