# Evaluation: Vanderbilt University Medical Center — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

**Document title**: "Authorization for Release of Medical Information" (VMR 3017, dated 02/2022)  
**Pages**: 4  
**Source URL**: `https://www.vumc.org/student-health/sites/default/files/Authorization%20for%20Release%20of%20Medical%20Information%20from%20VUMC-VMR%203017.pdf`  
**Hosted on**: VUMC Student Health subdomain (`vumc.org/student-health/`)

This is an **older version** of Vanderbilt's general ROI authorization form. The organization has five publicly accessible forms total:

- **form-1.pdf** (this document): VMR 3017, 02/2022 version, 4 pages, hosted on student health subdomain
- **form-2.pdf**: VMR-P 3017, 08/2017 version — an even older iteration of the same form
- **form-3.pdf**: VMR 3022, 02/2022 — a different form for releasing records *TO* VUMC (incoming records)
- **form-4.pdf** ⭐: VMR 3017, 10/2023 — the **current official** English form linked from vanderbilthealth.com, redesigned as a 2-page form under "Vanderbilt Health" branding
- **form-5.pdf**: Spanish translation of form-4

Form-1 is **superseded** by form-4, the current official version. However, it remains publicly accessible on the VUMC Student Health website with no "outdated" warning, meaning patients searching online may find and use it. This is a generic release form (not patient-access-specific); the "RELEASE RECORDS TO" section directs the patient to specify a recipient, and "PURPOSE OF RELEASE" includes "Personal Use" as one of several options alongside "Attorney/Legal Case," "Disability/Insurance," etc.

## 2. FINDABILITY

**How this form was found**: Web search for "Vanderbilt University Medical Center authorization release health information form PDF" surfaced this PDF directly from the student health subdomain. It was not found via the current official medical records page at `vanderbilthealth.com/information/medical-record-information`, which links only to the newer form-4.

**Findability concerns**:
- The form is easily discovered via generic web searches, but a patient arriving at this form has **no way to know it's outdated**. The page header still uses old "Vanderbilt University Medical Center" branding with the VUMC logo, and nothing on the document indicates a newer version exists.
- The current official forms page is reasonably well-structured, offering three online portals (Swellbox for patient and provider requests, ChartSwap for third-party) plus PDF form downloads in English and Spanish. But a patient who finds form-1 via search may never reach the current page.
- The URL path (`/student-health/`) implies this may have been intended for student health patients, but the form itself is a general VUMC release form with no student-specific content.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Effectively absent. The metadata reports `has_text_layer: true` and `is_image_only_scan: false`, but the only extractable text across all 4 pages is: `"Patient Label or Patient Identifiers"` and `"Patient Identifiers"` — a total of 63 characters. The form content is entirely embedded as scanned images.

**Fillable fields**: Zero. `fillable_field_count: 0`. The form cannot be completed electronically.

**Images**: 5 embedded images across 4 pages — each page is a full-page scan at 96 DPI, plus a logo image. The resolution is low for a scanned document (96 DPI vs. the typical 150-300 DPI for readable scans).

**File size**: 500,149 bytes (~488 KB) for a 4-page image-only document. This is reasonable for image-based content but oversized relative to what a text-based PDF of equivalent content would require.

**PDF metadata**: Created by "Transform Foundation Server" (a document management/scanning product), confirming this is a scan of a paper original. PDF version 1.4. Not tagged for accessibility. No JavaScript.

**Screen reader accessibility**: Completely inaccessible. With only 63 characters of extractable text across 4 pages, a screen reader user would encounter essentially a blank document. This fails WCAG and Section 508 requirements for accessible digital documents.

**Digital-first design**: This is unambiguously a **scan of a paper form**, not a digital-first document. A patient must print, handwrite, and then mail or fax it back.

## 4. CONTENT DESIGN

Based on OCR extraction, the form has a reasonable organizational structure across its 4 pages:

**Page 1 — Patient Identification and Request Details**:
- Patient identification fields (Name, DOB, Address, City, State, Zip, Previous Name, Phone)
- "RELEASE RECORDS TO" section with options: Same as above, Mail, Pick up in person, Electronic (email — "For Doctors or other HealthCare Providers Only")
- "INFORMATION REQUESTED" section with extensive record type checkboxes (~20+ categories including History and Physical, Discharge Summaries, Operative/Procedure Notes, Radiology, Pathology, Lab, etc.)
- Date range fields
- "OTHER DEPARTMENT" items: Cardiac Images, Radiology Images, Billing, Payment Records, Fetal Monitoring Strips, Pharmacy, Home Care Services
- "PURPOSE OF RELEASE" checkboxes: Patient Care, Personal Use, Administrative, Disability/Insurance, Attorney/Legal Case, Other

**Page 2 — Authorization and Signature**:
- Sensitive information disclosure notice (psychiatric, drug/alcohol, AIDS/HIV)
- Statement that an "abstract" will be sent if patient doesn't specify records
- Check statement: "I do / do not authorize this information to be released"
- Patient rights bullet points (may refuse, won't affect treatment, may revoke in writing, expiration, re-disclosure warning, right to a copy)
- Signature block (Print Name, Signature, Relation, Date, Time)

**Page 3 — Billing & Fees**:
- Explains the relationship with CIOX (third-party processor)
- Distinguishes "abstract" (up to 50 pages at no cost for walk-in requests) from "legal medical record"
- Fee schedule citing Tennessee Code Annotated 68-11-304(a)(2):
  - $6.50 flat fee per request
  - $0.01–$0.02/page for paper records scanned
  - $0.05/page for hard copy delivery
  - Actual postage for hard copy
  - $6.50 total if stored and delivered electronically
- Option to set a fee ceiling: "Let me know if the fee for my records will be more than $___"
- Separate signature block for fee agreement

**Page 4 — Department Contact Information & Revocation**:
- Direct contact information for Home Care Services, Radiology Images, Pharmacy, Financial/Billing Records
- Instructions for revoking authorization (must be in writing, mailed to HIM)
- Note that treatment cannot be withheld based on authorization
- HIPAA/Privacy Rule re-disclosure warning

**Layout quality**: The form is densely packed but has logical sectioning with labeled headers (PATIENT IDENTIFICATION, RELEASE RECORDS TO, INFORMATION REQUESTED, PURPOSE OF RELEASE). Visual hierarchy relies on bold section headers and checkbox groupings. The scan quality at 96 DPI makes smaller text somewhat hard to read. The 4-page length is longer than necessary — the current form-4 covers similar ground in 2 pages.

**Language clarity**: Mixed. Some sections use plain language ("You have the right to take back (revoke) your authorization"), while others use institutional jargon ("Abstract," "Legal medical record" — though both are defined on the Billing & Fees page). The authorization statement on page 2 includes helpful parenthetical explanations.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose release form**, not patient-access-specific. The "RELEASE RECORDS TO" section asks the patient to specify a recipient, which is a third-party release model. However, "Personal Use" is listed as a purpose option, and the instructions do contemplate walk-in patient requests (the "no cost" abstract for walk-in patients).

**Electronic delivery**: Severely limited. The "Electronic" delivery option under "RELEASE RECORDS TO" is explicitly restricted: "E-mail Address: For Doctors or other HealthCare Providers Only." This means patients requesting their own records cannot elect electronic delivery through this form — they are limited to mail or in-person pickup.

**Scope options**: Comprehensive. Patients can specify date ranges, choose from ~20+ record categories, or request their full "legal medical record." The form also allows specifying imaging and specialty records. This level of granularity is above average.

**Fee transparency**: The fee schedule is clearly laid out with specific per-page costs and a useful option to set a maximum fee threshold. The distinction between electronic and paper delivery pricing is clear, and the $6.50 flat fee for fully electronic delivery is reasonable.

**Free records**: The form states up to 50 pages are free for "patient walk-in requests only." This limitation to walk-in requests may be problematic — HIPAA's Right of Access does not restrict free or reasonable-cost access to in-person requests only.

**Rights language**: Page 2 includes standard HIPAA authorization elements: right to refuse, no treatment conditioning, right to revoke, expiration, and re-disclosure warning. However, there is no explicit reference to HIPAA § 164.524 (Right of Access) or the distinction between patient access requests and third-party authorizations.

**Authorization expiration**: The form states: "this authorization will expire when the records are released for the request dated below." This is a reasonable, request-specific expiration rather than an arbitrary time limit.

## 6. COMPLIANCE

**Third-party processor**: The form discloses that "Vanderbilt University Medical Center contracts with CIOX to process requests for copies of medical records." CIOX (now Datavant) is a common ROI vendor. The fee agreement signature on page 3 is with CIOX, adding a layer between the patient and the institution.

**Submission requirements**: The form states: "Hand-deliver, mail, or fax a signed request in writing to VUMC." Fax (615-343-0126) is available, which counts as adequate electronic submission. No portal submission option is mentioned (though the newer form-4 and the Swellbox portal provide this).

**Fee structure**: Fees are based on Tennessee Code Annotated 68-11-304(a)(2). Under HIPAA's Right of Access, providers can only charge a reasonable cost-based fee for patient access requests. The state law-based fee schedule may exceed HIPAA limits for patient access requests (as opposed to third-party releases). The $0.05/page for hard copies plus $6.50 flat fee could be challenged under HIPAA's patient access fee limits.

**Minor authorization**: "If you are under the age of 18, your parent or legal guardian must sign as well." The "as well" suggests the minor also signs, which may not align with state law on minor consent.

**Sensitive information**: The blanket consent on page 2 — "I agree that any information about such diagnosis or treatment may be released" — covers psychiatric, drug/alcohol, and HIV information in a single opt-in. There is no granular opt-out for specific sensitive categories.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Electronic delivery restricted to providers only**: The form explicitly limits email delivery to "Doctors or other HealthCare Providers Only," denying patients the ability to receive their own records electronically through this form. Under HIPAA § 164.524(c)(3)(ii), patients have the right to receive records in electronic form if maintained electronically.
- **Free copies limited to walk-in only**: "What we will provide to the patient at no cost (For patient Walk-in requests only)" — conditioning free access on physical presence creates a barrier for patients who cannot visit in person, potentially conflating state copy fee rules with HIPAA's reasonable cost-based fee requirement for patient access.
- **Blanket sensitive-information consent**: The form bundles psychiatric, substance abuse, and HIV information into a single all-or-nothing consent ("I agree that any information about such diagnosis or treatment may be released") with no option for granular exclusion.

### ⚠️ AMBIGUITIES

- **"Abstract" vs. "Legal Medical Record" distinction**: While defined on page 3, the default behavior — "if I do not ask for my legal medical record or specify the records I want, the Medical Information Services department will send an abstract" — means patients who don't understand the distinction may receive an incomplete subset of their records without realizing it.
- **Fee applicability to patient access**: The fee schedule cites state law (TCA 68-11-304) without distinguishing patient access requests (governed by HIPAA's lower fee limits) from third-party releases (governed by state law). A patient requesting their own records may be overcharged.

### ❌ ERRORS

- **Outdated form still publicly hosted**: This 02/2022 version remains accessible on the VUMC student health subdomain with no deprecation notice, despite being superseded by the 10/2023 form-4 with updated "Vanderbilt Health" branding. The form references "Vanderbilt University Medical Center" branding that the organization has since moved away from.
- **Near-zero text layer**: Despite the metadata reporting `has_text_layer: true`, only 63 characters are extractable from a 4-page document. This effectively makes the document invisible to search engines, screen readers, and text-based processing tools.

### ✨ BRIGHT SPOTS

- **Granular record type selection**: The ~20+ checkbox categories for record types give patients meaningful control over what is released, including specialty-specific options (cardiac images, fetal monitoring strips, radiology images).
- **Fee ceiling option**: The field "Let me know if the fee for my records will be more than $___" is an unusually patient-friendly feature that prevents surprise billing for record requests.
- **Clear revocation instructions**: Page 4 provides explicit, plain-language instructions for revoking authorization, including the mailing address and a note that treatment cannot be withheld.
