# Massachusetts General Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an **older version** of the MGH "Authorization for Release of Protected or Privileged Health Information" form, coded **84182MGH (12/16)** — indicating a December 2016 revision. It was downloaded from `https://www.massgeneral.org/assets/mgh/pdf/notices/roiauthorizationform-1-17.pdf`, with the filename suggesting a January 2017 posting date.

Three versions of essentially the same ROI authorization form were found for MGH:
- **form-1.pdf** (MGB00087, 06/24): The current version, hosted on the parent system domain (massgeneralbrigham.org), with 78 fillable fields.
- **form-2.pdf** (MGB00087, 11/21): An intermediate version from November 2021, hosted under the imaging section of massgeneral.org, with no fillable fields.
- **form-3.pdf** (84182MGH, 12/16): This document — the oldest version, still publicly accessible under `/notices/` on massgeneral.org.

A key distinguishing feature of form-3 is that it still references the **pre-rebrand entity name "Partners HealthCare System (PHS)"** throughout (e.g., "Partners HealthCare System (PHS) cannot control how the recipient uses or shares the information"), whereas forms 1 and 2 use the current "Mass General Brigham" branding. This form also carries a different form number scheme (84182MGH vs. MGB00087), confirming it predates the system's identity consolidation.

## 2. FINDABILITY

Per the retrieval notes, the current MGH ROI form was "easy to find via web search" with "no barriers." However, form-3 specifically was retrieved from a legacy URL path (`/assets/mgh/pdf/notices/`) that would not be a patient's first discovery point — it is not prominently linked from patient-facing pages. A patient searching for the ROI form today would likely land on form-1 (the current version) rather than this outdated document. The fact that form-3 remains publicly accessible at all is a findability concern: a patient could stumble upon it via a cached search result or old bookmark and unknowingly use a superseded version with outdated instructions and entity names.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (4,959 characters across 2 pages).
- **Fillable fields**: **Zero**. This is a completely flat PDF with no interactive form fields. The instruction "Please print all information clearly" confirms this was designed as a print-and-handwrite document.
- **File size**: 600,806 bytes (~601 KB) for a 2-page, text-only, zero-image document. This is disproportionately large — form-2 contains substantially similar content in only 104 KB. The bloat suggests an inefficient PDF generation tool or embedded resources not visible in the metadata.
- **Embedded images**: 0.
- **Font count**: 7 fonts, reasonable for a form with headers and body text.
- **Digital-first design**: No. This is clearly a print-oriented form. The "Please print all information clearly" header, lack of fillable fields, and design all indicate a paper-first workflow. The "SEND BY" section does list electronic delivery options (Patient Gateway, Secure Email, Fax, Paper Copy via Mail), but the form itself must be completed by hand.

## 4. CONTENT DESIGN

**Length**: 2 pages, appropriate for an ROI authorization form. The content is organized into five lettered sections (A through E), which provides clear logical structure.

**Section layout**:
- **Section A** (Patient Information): Name, DOB, medical record number, address, phone (day and evening).
- **Section B** (Permission to Share): FROM/TO fields, purpose checkboxes, delivery method.
- **Section C** (Information to Be Released): Checklist of record types with date fields.
- **Section D** (Sensitive Information): Opt-in checkboxes for HIV, genetic, substance use, mental health, social work, domestic violence, and sexual assault records.
- **Section E** (Terms and Conditions): Understanding/agreement bullet points, signature block.

**Clarity**: The form uses a mix of plain language and legal terminology. Section B is reasonably clear ("I give my permission to share my protected health information"). However, Section D uses dense regulatory language, particularly the 42 CFR Part 2 disclosure: "FEDERAL RULES PROHIBIT ANY FURTHER DISCLOSURE OF THIS INFORMATION UNLESS FURTHER DISCLOSURE IS EXPRESSLY PERMITTED BY WRITTEN CONSENT OF THE PERSON TO WHOM IT PERTAINS OR AS OTHERWISE PERMITTED BY 42 CFR PART 2." This is mandatory legal language but presented in all-caps, which reduces readability.

**Typography**: Section headers use ALL CAPS extensively (e.g., "AUTHORIZATION FOR RELEASE OF PROTECTED OR PRIVILEGED HEALTH INFORMATION," "PATIENT INFORMATION," "PERMISSION TO SHARE"). The all-caps style is harder to read than title case. The text_preview suggests the form includes a functional hierarchy but the caps-heavy approach gives it a dense, institutional feel.

**Visual hierarchy**: The lettered sections (A–E) provide adequate structure, though the "See Page 2 on Reverse" note at the bottom of page 1 suggests this was designed for double-sided printing.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose authorization form**, not specifically tailored for patient self-access. The FROM/TO structure in Section B is oriented around releasing information *to a third party*. However, there is a checkbox: "Check here if the records are to be mailed to the patient at the above address (section A)," which accommodates patient self-requests. The "Personal" purpose checkbox is available, though the asterisk note "*Copying fees may apply" is attached to it — implying that even personal-use requests may incur fees.

**Scope options**: Section C provides a granular checklist of 11 record types (Medical Record Abstract, Clinic Visit Notes, Discharge Summary, Lab Reports, Radiology Reports, Operative Reports, Pathology Reports, Radiation Reports, Photographs, Billing Records, Other), each with a date specification. This is good granularity. Section D separately addresses seven categories of sensitive information. This level of specificity is above average.

**Delivery options**: The "SEND BY" section offers four options: "Partners Patient Gateway (if available)," "Secure Email (provide email address below)," "Paper Copy via Mail," and "Fax (provide fax number)." The inclusion of Patient Gateway and secure email is positive, though the Patient Gateway option is qualified with "(if available)."

**Right of Access language**: The form does **not** reference HIPAA § 164.524 or explicitly state the patient's right of access. Section E states "This authorization is voluntary" and "My treatment, payment, health plan enrollment, or eligibility for benefits will not be affected if I do not sign this form," which are standard HIPAA authorization disclosures — but these address authorization requirements (§ 164.508), not the distinct right of access (§ 164.524).

**EHI Export awareness**: No mention of electronic health information export, bulk data, or USCDI.

## 6. COMPLIANCE

**Fees**: The form states "*Copying fees may apply" for purposes marked Personal, Insurance, Legal Matter, and Other. This vague disclosure does not specify amounts. Under HIPAA's right of access, fees for patient self-requests are limited to reasonable, cost-based fees — but the form does not distinguish between patient-access requests and third-party releases for fee purposes.

**Expiration**: "This authorization will automatically expire 6 months from the date signed unless otherwise specified." A 6-month default expiration is within the range of common practice, though it is on the shorter end and may require patients to re-authorize if processing is delayed.

**Revocation**: The form allows cancellation "at any time by submitting a written request to the Department or Office where I originally submitted it," with reasonable exceptions noted. For 42 CFR Part 2 substance use records, revocation may be "oral or written," which is appropriately more permissive.

**Submission methods**: The form header instructs "Mail or Fax to" with a physical address (121 Inner Belt Road, Room 240, Somerville, MA 02143-4453) and fax number (617 726 3661). No email submission option is mentioned. There is no indication that in-person submission is required, which is appropriate.

**Outdated entity references**: The form refers to "Partners HealthCare System (PHS)" throughout Section E. This entity rebranded to Mass General Brigham in 2019. A patient reading this in 2026 would encounter an unfamiliar corporate name, potentially causing confusion about whether this is the right form.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Fee ambiguity for patient self-access**: The "*Copying fees may apply" notation is attached to the "Personal" purpose checkbox, which is the most likely selection for a patient requesting their own records. HIPAA limits fees for patient access requests, but the form does not acknowledge this distinction — patients may be deterred from requesting their own records by the implication of fees.

### ⚠️ AMBIGUITIES

- **Outdated entity name**: The form consistently references "Partners HealthCare System (PHS)," which rebranded to Mass General Brigham in 2019. A patient encountering this form in 2026 may not recognize the entity or may question whether the form is still valid. The URL in the form header (`http://www.massgeneral.org/imaging/about/order_images_films.aspx`) also uses the non-HTTPS protocol and an `.aspx` path that may no longer resolve.
- **"Partners Patient Gateway" vs. "Mass General Brigham Patient Gateway"**: The delivery option references "Partners Patient Gateway," which has since been rebranded. A patient familiar with the current patient portal name may not realize these are the same system.
- **No clear distinction between patient access and third-party release**: The form serves both purposes but does not clearly explain the different rights, fee structures, or timelines that apply to each.

### ❌ ERRORS

- **Stale form still publicly accessible**: This December 2016 form (84182MGH 12/16) remains live at its original URL despite being superseded by at least two newer versions (MGB00087 11/21 and MGB00087 06/24). This is a web hygiene issue — outdated forms should be removed or redirected to the current version.
- **Likely dead URL**: The form prints `http://www.massgeneral.org/imaging/about/order_images_films.aspx` for radiology image requests. This .aspx URL predates the site's likely migration and may no longer function. It also uses HTTP rather than HTTPS.

### ✨ BRIGHT SPOTS

- **Granular record-type selection with date specificity**: Section C offers 11 distinct record categories, each requiring date ranges. This gives patients meaningful control over what is released.
- **Comprehensive sensitive-information opt-in**: Section D separately addresses seven categories of specially protected information (HIV, genetic, substance use, mental health, social work, domestic violence, sexual assault), each requiring explicit opt-in. This is thorough and exceeds what many organizations offer.
- **Electronic delivery options offered even on an older form**: Despite being from 2016, this form already included Patient Gateway and Secure Email delivery options, showing early adoption of electronic delivery channels.
