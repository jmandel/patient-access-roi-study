# Evaluation: Community Medical Center (Toms River, NJ) — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

Form-1 is a single-page CMC-specific authorization form titled **"AUTHORIZATION TO DISCLOSE HEALTH INFORMATION FROM CMC TO PATIENT / PHYSICIAN / FACILITY"** (form number CMC 3004). It authorizes staff of Community Medical Center of Toms River, NJ to release the patient's health information to a specified recipient — which may be the patient themselves, a physician, or another facility.

This is the primary outbound release-of-information form for CMC specifically. Two other forms were found for this organization:
- **form-2.pdf**: The reverse-direction form — a request for records to be sent *to* CMC from another provider (inbound). Not a patient access form.
- **form-3.pdf**: A system-wide RWJBarnabas Health "Universal Release of Information Authorization Form" (3 pages, dated Nov 2025), which covers all RWJBH facilities including CMC. This newer form appears to be the preferred system-wide replacement.

Form-1 is a legacy CMC-specific document, created in Adobe Photoshop CS2 and dated to 2017. It bears both the "Community Medical Center" and "RWJBarnabasHealth" logos at the bottom, reflecting CMC's membership in the RWJBH system.

## 2. FINDABILITY

Per the retrieval notes, the form was located readily. A direct web search for "Community Medical Center Toms River NJ authorization release health information form PDF" returned the CMC medical records page, which links to this form. The source URL (`https://www.rwjbh.org/documents/community-medical-center-/CMC-Authority-to-Disclose-Health-Information.pdf`) is hosted on the parent system's domain. The URL path is reasonably descriptive, containing both the facility name and document purpose.

The CMC medical records page at `https://www.rwjbh.org/community-medical-center/patients-visitors/medical-records/` also provides an online electronic request option through Ciox/Swellbox and links to the system-wide form (form-3). So patients navigating to medical records have multiple pathways. Finding the form required minimal effort — likely 2-3 clicks from the CMC homepage (Patient & Visitors → Medical Records → form link).

## 3. TECHNICAL ACCESSIBILITY

This document has **severe technical accessibility problems**:

- **Image-only scan**: The PDF has no text layer whatsoever. `full_text_chars: 1` (just a form-feed character). `font_count: 0`. The entire page is a single embedded image. This means:
  - It is **not searchable** within the PDF.
  - It is **completely inaccessible to screen readers** — a patient using assistive technology cannot interact with this form at all.
  - Text cannot be selected or copied.
- **No fillable fields**: `fillable_field_count: 0`. The form must be printed and filled out by hand, or the patient must use workarounds (annotation tools, etc.).
- **Created in Adobe Photoshop CS2**: This is a graphic design tool, not a document authoring tool. The form was apparently designed as or scanned into an image, then saved as a PDF. This is the least accessible way to produce a PDF form.
- **File size**: 165,175 bytes for a single-page image-only document. While not excessively large, the image resolution appears adequate for readability based on the rendered view.
- **No digital-first design**: This is unambiguously a print-era artifact digitized as an image. There is no accommodation for digital use.

## 4. CONTENT DESIGN

Based on OCR extraction and the visual rendering:

**Length**: One page. The form is compact but densely packed — all patient information fields, record type checkboxes, legal language, signature lines, and an office-use section are squeezed onto a single page.

**Structure and layout**: The form follows a logical top-to-bottom flow:
1. Patient demographics (Name, D.O.B., Address, Telephone)
2. Recipient identification (two blank lines + "Please Print E-Mail")
3. Purpose statement (one blank line)
4. Date range limitation (FROM / TO)
5. Record type checkboxes (15 categories in a 3-column grid)
6. Sensitive information disclosure notice
7. Legal provisions (revocation rights, voluntariness, expiration)
8. Signature block (Patient, Legal Representative, Witness)
9. Office Use Only section
10. Footer with logos and form number

**Record type options**: 15 checkbox categories including Emergency Room Record, History & Physical Exam, Consultations, Progress Notes, Labs/X-Rays/Tests, Nurses' Notes, Operative Reports & Pathology, Discharge Summary, Radiology Films/CD, Complete Record, Abstract, Billing Information, Cardiology CD, and an "Other" write-in. This is a reasonably comprehensive set.

**Readability**: The legal paragraphs are dense. Four substantial paragraphs of legal text occupy the middle-to-lower portion of the form. Font size appears to be approximately 8-9pt for the legal text — small but marginally readable in the image. The bold heading and checkbox section use slightly larger type. Overall, the form is text-heavy for a single page and the legal language is not plain-language.

**Visual design**: The layout is functional but dated. There is minimal whitespace between sections. The checkbox grid is relatively clear. The footer includes the Community Medical Center and RWJBarnabasHealth branding with a QR-like code/logo. The overall aesthetic is that of a mid-2010s institutional form.

## 5. PATIENT-CENTEREDNESS

**Patient access framing**: The form title — "FROM CMC TO PATIENT / PHYSICIAN / FACILITY" — explicitly includes "Patient" as a potential recipient, which is positive. However, the form structure is fundamentally a third-party release authorization. The patient fills in a recipient (which could be themselves), a purpose, and record types. There is no streamlined path specifically for "I want my own records."

**Scope options**: Good. The form provides:
- Date range selection (FROM / TO)
- 15 record type checkboxes plus an "Other" field
- Ability to request a complete record or specific components

**Delivery method options**: The form does not offer delivery method choices. There are no checkboxes for mail, fax, email, electronic delivery, or in-person pickup. The patient fills in a recipient name/address but has no control over format. By contrast, the newer system-wide form (form-3) offers Paper pickup, US Mail, Encrypted Email, "Other electronic format," and MyChart — a dramatic improvement.

**HIPAA Right of Access reference**: The form does reference "CFR 164.524" in the legal text: "I understand I may inspect or obtain a copy of the information to be used or disclosed, as provided in CFR 164.524." This is a positive inclusion, though it uses the regulatory citation without explanation of what that right means.

**EHI Export / electronic access**: No mention whatsoever.

**Sensitive information notice**: The form includes a clear disclosure that released information "includes my identity, diagnosis and treatment including ALCOHOL, DRUGS, GENETIC TESTING, BEHAVIORAL OR MENTAL HEALTH SERVICES, REPRODUCTIVE RIGHTS, SEXUALLY TRANSMITTED & INFECTIOUS DISEASES, AIDS and HIV information, as applicable." This is appropriately comprehensive.

## 6. COMPLIANCE

**Expiration**: "This authorization will automatically expire 120 days from the date of my signature." This is a relatively short auto-expiration — the system-wide form (form-3) uses 180 days. The patient can specify a different termination date or condition.

**Revocation**: The form states the patient must revoke in writing and "present my written revocation to the Health Information Management Department." The word "present" could imply in-person delivery, though it may just mean submission. The system-wide form uses "sent to" which is clearer.

**Witness line**: The form includes a "WITNESS" signature line with date. While not explicitly required (there's no "required" label), its presence may create the impression that a witness is needed, adding a potential barrier.

**ID verification**: The "For Office Use Only" section includes "ID Checked: Yes or No" and "ID Type," suggesting that ID verification may be performed. This is noted as an office procedure rather than a patient-facing requirement.

**Fees**: No fee information is disclosed on the form. The system-wide form (form-3) includes a fee disclosure section stating records are free when sent to another provider for care and that fees may apply otherwise.

**No notarization requirement**: The form does not require notarization.

**Re-disclosure limitation language**: The form includes a restriction: "the use of the information furnished is prohibited for any purpose other than stated above and that the recipient is prohibited from disclosing this information to any other party." This language attempts to restrict downstream use, which is unusual and potentially problematic — HIPAA's Right of Access does not permit covered entities to impose conditions on how a patient uses their own records when the patient is the recipient.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Re-disclosure restriction on the patient's own records**: The form states "the recipient is prohibited from disclosing this information to any other party to whom disclosure is not necessary or required for the purpose stated." When the patient is the recipient (which this form explicitly allows), this language inappropriately attempts to restrict what the patient can do with their own health information, which conflicts with HIPAA's Right of Access.
- **120-day auto-expiration** is on the shorter end. While not unreasonable per se, it means a patient whose request takes time to process could find their authorization expired before fulfillment.
- **Witness signature line** may create a perceived barrier — patients may believe they need a witness to submit the form, even though witness signatures are not a HIPAA requirement for patient access requests.

### ⚠️ AMBIGUITIES

- **"Present my written revocation"**: The word "present" is ambiguous — does it require in-person delivery, or can revocation be mailed/faxed/emailed? The system-wide form (form-3) uses "sent to," which is clearer.
- **No delivery method options**: The patient has no way to specify how they want their records delivered. The form has blank lines for the recipient's name and address but no checkboxes for mail, email, electronic format, or pickup.
- **Purpose field but no clarity on patient access**: The form asks for "the following purpose" of disclosure but doesn't clarify that a patient requesting their own records doesn't need to justify the request under HIPAA.

### ❌ ERRORS

- **Image-only PDF with zero accessibility**: Created in Photoshop CS2 (a raster image editor) circa 2017 and saved as a flat image. This is a PDF in name only — it's functionally a JPEG wrapped in a PDF container. No text layer, no form fields, no semantic structure, no accessibility tags. This is the worst possible technical format for a patient-facing form.
- **Outdated form**: Dating from 2017, this form predates the newer system-wide RWJBH Universal ROI form (form-3, dated Nov 2025). It is unclear whether CMC still actively uses this form or if it is a legacy artifact that should have been removed from the website.
- **Phone number discrepancy**: The form lists (732) 557-8136 for the HIM Department, while the notes.md mentions cmcroimedicalrecords@rwjbh.org and Fax: 732-557-2209. The system-wide form lists 732-923-7650 (phone) and 732-557-2209 (fax) for CMC. Patients may reach incorrect numbers.

### ✨ BRIGHT SPOTS

- **CFR 164.524 citation**: The form explicitly references the patient's right to inspect or obtain a copy of their information under 45 CFR § 164.524. Many ROI forms omit this reference entirely.
- **Comprehensive record type options**: 15 checkbox categories plus "Other" gives patients meaningful control over the scope of their request, including granular options like Cardiology CD, Radiology Films/CD, and Nurses' Notes.
- **Explicit inclusion of "Patient" in the title**: The form title "FROM CMC TO PATIENT / PHYSICIAN / FACILITY" makes clear this form can be used by patients requesting their own records, not just for third-party releases.
