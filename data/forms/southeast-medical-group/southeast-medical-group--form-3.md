# Evaluation: Southeast Medical Group — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **Patient Portal Proxy Authorization** form — not a Release of Information (ROI) form. It is branded with the **FollowMyHealth** patient portal logo and the SEMG logo, and its purpose is to grant another person (a proxy) full access to a patient's FollowMyHealth patient portal account. The form distinguishes between two proxy types via a checkbox: "I AM AN ADULT PROXY" and "I AM A MINOR PROXY."

In context of the four documents found for Southeast Medical Group, this form is tangentially related to records access but serves a distinct function. Forms 1 and 2 are the actual MediCopy-branded ROI authorization forms that SEMG directs patients to use for medical records requests. Form 4 is SEMG's patient registration packet (which includes HIPAA acknowledgement and blanket treatment-related release consent). Form 3 (this document) is a narrower instrument: it authorizes a designated individual to view the patient's health information through the online portal, rather than requesting a discrete release of records.

**Source URL:** `https://cdn.sanity.io/files/4pare3i8/production/bd23ef224680293eaafa04ca5303569d6d4952d2.pdf` (hosted on Sanity CDN, SEMG's content management system).

## 2. FINDABILITY

This form was found on the SEMG website at `https://mysemg.com/resources/forms`, which lists 10 patient forms. While the form is available on the site, it is **not labeled as an ROI or records release form** — it is a portal proxy authorization. A patient looking specifically for a way to request their medical records would not naturally land on this form; the records request pathway instead redirects to MediCopy (forms 1 and 2). The form is accessible without login or bot-blocking, directly linked from the patient resources page.

Findability for its intended purpose (portal proxy access) appears reasonable — it is listed among patient forms on the website. However, there is no indication of how the form should be submitted once completed (no mailing address, fax number, email address, or upload mechanism is specified on the form itself).

## 3. TECHNICAL ACCESSIBILITY

This document has significant technical deficiencies:

- **Image-only scan:** The PDF contains no text layer whatsoever. The metadata confirms `has_text_layer: false`, `full_text_chars: 1` (just a form feed character), `fillable_field_count: 0`, and `is_image_only_scan: true`.
- **Not fillable:** There are zero fillable form fields. All fields are blank lines printed in the image. A patient must print the form and fill it out by hand.
- **No OCR layer:** Screen readers and assistive technology cannot read this document. It is completely inaccessible to visually impaired users.
- **File size:** 198 KB for a single-page image-only PDF — reasonably small.
- **Font count:** 0 (consistent with image-only status).
- **Embedded images:** 3 (the SEMG logo, the FollowMyHealth logo, and the form content itself as an image).

The form appears to be a scan or flattened export of a document that may have originally been a word-processed or designed form. The image quality is legible in the rendered PNG, with clear text and reasonable contrast, but the lack of any digital text layer makes it a poor digital artifact.

## 4. CONTENT DESIGN

The form is a single page with a clean, organized layout divided into clear sections:

1. **Header:** SEMG logo (top left), "Patient Portal Proxy Authorization" label (top right), FollowMyHealth logo (centered).
2. **Introductory text:** *"A proxy authorization grants another person full access to your patient portal. This may be a parent, guardian, or someone who assists in managing your healthcare."*
3. **SELECT ONE:** Two checkboxes — "I AM AN ADULT PROXY" / "I AM A MINOR PROXY."
4. **PATIENT INFORMATION:** Fields for Full Legal Name, Date of Birth, Other Names Used for Treatment, Address (Line 1, Line 2, City, State, ZIP), and three phone numbers (Home, Cell, Work). Approximately 9 fields.
5. **PROXY INFORMATION:** Mirrors the patient section with Full Legal Name, Date of Birth, Relationship to Patient, Address, three phone numbers, and Email Address. Approximately 10 fields.
6. **Authorization statement:** *"I allow FollowMyHealth to release my personal health information from **Southeast Medical Group** to the proxy listed above via an online FollowMyHealth patient portal account. I understand that:"*
7. **Bullet points** (3 substantive + 1 blank):
   - Revocation: *"If I change my mind and no longer want the proxy to have access I may inform **Southeast Medical Group** in writing at any time."*
   - Confidentiality disclaimer: *"**Southeast Medical Group** is not responsible for the confidentiality of information that is released to/or used by my proxy."*
   - Re-disclosure warning: *"**Southeast Medical Group** cannot prevent my proxy from releasing my information to another person or organization."*
   - Note: *"The patient and the proxy must sign if this form is for an adult proxy."*
8. **Signature lines:** Patient Signature + Date Signed; Proxy Signature + Date Signed.

The language is relatively plain and readable. Section headers are bold. The layout is uncluttered. However, the form lacks any instructions about where or how to submit it, which is a notable omission.

There is one blank/empty bullet point (the 4th bullet) visible in the form — this appears to be a formatting artifact or placeholder that was never filled in.

## 5. PATIENT-CENTEREDNESS

This form is **not an ROI form** and would not serve a patient trying to request a copy of their own health records. Its purpose is narrower: authorizing a third party to access the patient's portal. For that specific use case:

- **Clarity of purpose:** The introductory text clearly explains what proxy access means.
- **Revocation rights:** The form explicitly states the patient can revoke proxy access "in writing at any time."
- **Informed consent elements:** The form warns that SEMG is not responsible for the proxy's use of information and cannot prevent re-disclosure — these are honest, if somewhat discouraging, disclosures.
- **Missing submission instructions:** The form does not tell the patient where to send the completed form (no fax number, mailing address, email, or office drop-off instruction). A patient completing this form has no guidance on the next step.
- **No electronic submission option:** The image-only format requires printing and handwriting. There is no online equivalent or digital signature capability.
- **No mention of fees:** The form does not reference any cost for proxy setup.

For a patient who actually wants their records (not proxy access), this form is irrelevant — they would need to be redirected to MediCopy via the SEMG website's "Request Records" link.

## 6. COMPLIANCE

As a portal proxy authorization (not an ROI form), standard HIPAA authorization requirements under 45 CFR § 164.508 do not strictly apply in the same way. However, several observations:

- **No expiration date:** The form does not specify how long the proxy authorization remains valid. It mentions revocation "in writing at any time" but sets no automatic expiration.
- **Blanket portal access:** The authorization grants "full access" to the patient portal — there is no option to limit the proxy's access to specific record types, date ranges, or categories of information.
- **Dual signature requirement:** The form states "The patient and the proxy must sign if this form is for an adult proxy," which is reasonable for proxy authorization (the proxy is accepting responsibility).
- **Confidentiality disclaimer:** SEMG disclaims responsibility for information the proxy accesses or re-discloses. While this is legally prudent for the organization, it places the entire burden of information security on the patient.
- **Written revocation only:** Revocation requires writing to SEMG — there is no option for verbal or electronic revocation, which could delay the process.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **No submission instructions:** The form provides no mailing address, fax number, email, or other mechanism for submitting the completed form. A patient who downloads, prints, and fills out this form has no way to know what to do next. This is a meaningful barrier to completion.

### ⚠️ AMBIGUITIES
- **Blank fourth bullet point:** The authorization section has four bullet points, but the fourth is empty — no text follows it. It is unclear whether content was accidentally omitted or if this is a design error.
- **No expiration or renewal terms:** The proxy authorization has no stated duration. It is unclear whether proxy access persists indefinitely until written revocation, or whether periodic re-authorization is required.
- **"Other Names Used for Treatment" field:** This field in the Patient Information section is unusual. It may be intended for patients who use a different name (maiden name, preferred name), but it could confuse patients who don't understand its purpose.

### ❌ ERRORS
- **Image-only PDF with no text layer:** This is a functional defect. The document cannot be searched, indexed, read by screen readers, or filled electronically. It fails basic digital accessibility standards (WCAG, Section 508). For an organization that uses a modern CMS (Sanity) and patient portal (FollowMyHealth), publishing a scanned image as a fillable form is a notable quality gap.
- **Hosted on CDN with opaque URL:** The source URL (`cdn.sanity.io/files/4pare3i8/production/bd23ef...`) is a raw CDN asset link with no human-readable path. While functional, it means the form cannot be found via URL inspection and would break if the CMS asset is reorganized.
