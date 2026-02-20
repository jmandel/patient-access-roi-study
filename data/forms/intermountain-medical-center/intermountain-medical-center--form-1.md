# Intermountain Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1 is titled **"Authorization to Use and Disclose Protected Health Information"** and is a general-purpose third-party release form. It is the oldest of three forms found for this organization, dated **"IHC CMP870 / 5/2017"** and branded under the legacy "Intermountain Health Care, Inc. (2008)" copyright. It was downloaded from the legacy domain (`intermountainhealthcare.org`).

In context, Intermountain Health has since published two newer forms (both dated 06/2025): form-2 is a third-party disclosure authorization and form-3 is a patient self-request form. Form-1 appears to be a **superseded legacy form** that remains accessible on the old domain but has been effectively replaced by forms 2 and 3 on the current site. It uses the pre-rebrand "Intermountain Healthcare" branding rather than the current "Intermountain Health" name.

The form's URL (`authorization-for-release-of-health-info-form.pdf`) is descriptive and reasonable. The form is designed for releasing records **to a third party**, not for patients requesting their own records — though it does reference the patient's right to inspect/copy under HIPAA.

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, web searches for variations of "Intermountain Medical Center authorization release health information" returned direct PDF download links. No login, portal, or JavaScript rendering was required. The form was reachable from the parent system's website (`intermountainhealthcare.org`) without navigating through multiple pages.

However, this is a system-wide form — Intermountain Medical Center does not publish its own facility-specific form. Patients searching specifically for "Intermountain Medical Center medical records form" would need to recognize that the parent system's form applies to their facility. The URL path (`/-/media/files/patient-tools/`) suggests it is filed under a general patient tools section rather than a facility-specific page.

The filename is descriptive: `authorization-for-release-of-health-info-form.pdf`. No difficulties with bot blocking, broken links, or access barriers were encountered.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The full text (3,652 characters) is extractable via `pdftotext`, indicating this is a natively digital PDF, not a scan.

**Fillable fields**: **Zero** interactive form fields. Despite being a born-digital PDF with 11 fonts and structured layout, the form has no fillable fields — patients must print it and fill it out by hand. This is a significant limitation, especially when compared to forms 2 and 3 (each with 48 fillable fields and Print/Clear buttons).

**File format**: Single page, 100,038 bytes (~100 KB), with 5 embedded images and 11 fonts. The file size is reasonable for the content. The use of 11 fonts seems high for a single-page form and may reflect inconsistent design choices.

**Digital-first design**: No. While it has a text layer (not a scan), the lack of fillable fields means it functions as a **print-and-fill document**. It was clearly designed for the paper workflow — there are no interactive elements, no Print/Clear buttons, and no digital submission instructions.

## 4. CONTENT DESIGN

**Length**: One page. This is commendably concise for the amount of content it covers, though the density comes at the cost of readability.

**Clarity**: The form mixes plain-language instructions with legal boilerplate. The "I understand that" section contains six bullet points of legal text, including a reference to "42 CFR, part 2" for substance use disorder records and a full paragraph on re-disclosure risk. While legally necessary, this creates a wall of small text at the bottom of a single page.

**Organization**: The form follows a logical top-to-bottom flow: patient identity → recipient → releasing facility → purpose/dates → record types → authorization terms → signature. However, section boundaries are implied by spacing rather than explicit headers or numbering, making visual scanning difficult.

**Record type options**: The form offers a reasonable selection of 16 record-type checkboxes organized in three columns, including: "Discharge Summary," "History & Physical," "Lab report(s)," "Radiology report(s)," "Behavioral Health Admitting Evaluation," "Mental Health Therapy Records," "Substance Use Disorder Treatment Record(s)," "Operative report(s)," "Progress notes," and "Other Protected Health Information as specified." Financial items include "Itemized Billing Statement" and "Financial Information."

**Delivery options**: Five options are provided: "In Person," "Mail," "By Phone," "Fax," "Secure Email," and "Secure Audio/Video Connection." The inclusion of secure email and secure audio/video is notable.

**Multilingual support**: The form includes interpretation service notices in Chinese (Traditional) and Spanish:
- `"我們將根據您的需求提供免費的口譯服務。請找尋工作人員協助;"`
- `"Si lo solicita, se le proveerá un servicio de interpretación gratis. Hable con un empleado del hospital para solicitarlo."`
- `"If requested, we will provide you a free interpretation service. Talk to an employee of the hospital to apply."`

**Layout**: The form is dense for a single page. The lower half is particularly compressed, with the "I understand that" section, signature line, and distribution instruction ("Original (Medical Record) / Copy (Patient)") all competing for space. Font sizes appear to decrease toward the bottom of the page.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is fundamentally a **third-party release form**, not a patient access form. The header reads "Authorization to release the protected health information **to:**" followed by a recipient field — the form's structure presumes the records are going to someone other than the patient. There is no option for "send to self" or "I am requesting my own records."

That said, the form does reference the patient's right of access: `"I may make a request in writing at any time to 'this facility' to inspect and/or obtain a copy of my health information maintained at this facility as provided in the Federal Privacy Rule 45 CFR § 164.524."` However, this is buried in the sixth bullet of the legal fine print and serves as an informational notice rather than a functional pathway.

**Scope options**: Date range and specific record types can be selected. The purpose field is a single free-text line ("The purpose of this disclosure is:"), which is reasonable for a general authorization but provides no structured guidance.

**Format options**: The delivery section lists options (In Person, Mail, By Phone, Fax, Secure Email, Secure Audio/Video Connection) but these describe how the information is delivered **to the third-party recipient**, not format options for the patient. There is no mention of electronic health information export, patient portal access, or bulk data.

**Right of Access language**: The HIPAA § 164.524 reference exists but is framed as a separate informational right, not as something this form facilitates.

**Contact information**: A phone number is provided: `"call 844-442-1987"` for questions about disclosure. No email, fax, or mailing address for submitting the completed form is given on the form itself (unlike forms 2 and 3, which provide detailed submission addresses).

## 6. COMPLIANCE

**Authorization expiration**: The form states: `"Unless otherwise noted above this authorization will remain in effect 180 days from the date signed."` This is a reasonable timeframe and allows patients to specify an alternative event/date.

**Revocation**: Clear language: `"I may refuse to sign or may revoke this Authorization at any time for any reason and that such refusal or revocation will not affect the commencement, continuation or quality of 'this facility' treatment of me, enrollment in the health plan, or eligibility for benefits."` This correctly addresses the non-conditioning requirement.

**No notarization required**: The form requires only a patient/representative signature. A witness signature is explicitly marked `"(optional)"`.

**No fees mentioned**: The form does not disclose any fees or charges for processing the request.

**Substance use disorder records**: Appropriately notes 42 CFR Part 2 protections and the need for both a minor's and parent/guardian's signature for minor substance abuse records.

**Re-disclosure warning**: Includes standard language about re-disclosure risk after information leaves the facility.

**No submission instructions**: Unlike the newer forms (which provide email, fax, and mail addresses for two regional offices), form-1 provides no guidance on how or where to submit the completed form. This creates a practical barrier — a patient downloading this form online would not know where to send it.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No submission instructions on the form itself.** A patient who downloads this PDF has no address, fax number, or email to submit it to. The only contact provided is a phone number (`844-442-1987`) "for questions about disclosure." This effectively forces the patient to call first or visit in person — a significant barrier for a form ostensibly available online.

### ⚠️ AMBIGUITIES
- **"This facility" in scare quotes throughout.** The form repeatedly uses `"this facility"` in quotation marks (e.g., `"Once 'this facility' discloses my health information..."`) without ever defining which facility it refers to. While there is a "Facility Name/Provider" field, the legal language's use of scare quotes is unusual and could confuse patients about which entity is bound by the authorization.
- **Legacy form still accessible.** This 2017-dated form coexists online alongside 2025-dated replacements (forms 2 and 3). There is no indication on the form or its download page that it has been superseded. A patient could easily find and use the outdated form.

### ❌ ERRORS
- **Outdated branding.** The form bears "IHC CMP870 / 5/2017 © Intermountain Health Care, Inc. (2008)" — the organization rebranded to "Intermountain Health" and the current forms reflect this. Continuing to host this form under the old brand creates confusion about whether it is still valid.
- **Zero fillable fields despite digital origin.** With 11 fonts and 5 embedded images, this is clearly a designed PDF — yet it lacks any interactive fields. The newer forms (48 fields each) demonstrate the organization is capable of producing fillable PDFs, making this omission an artifact of the form's age rather than a technical limitation.

### ✨ BRIGHT SPOTS
- **Multilingual interpretation notices.** Including Chinese (Traditional) and Spanish notices about free interpretation services directly on the form is uncommon and patient-friendly. The text `"我們將根據您的需求提供免費的口譯服務"` and `"Si lo solicita, se le proveerá un servicio de interpretación gratis"` go beyond what most ROI forms provide.
- **Secure Audio/Video Connection as a delivery option.** Offering `"Secure Audio/Video Connection"` as a delivery method is unusual and forward-looking, though its practical implementation is unclear.
- **Comprehensive record-type checkboxes.** Sixteen specific record types across clinical, behavioral health, substance use, and financial categories give patients granular control over what is disclosed.
