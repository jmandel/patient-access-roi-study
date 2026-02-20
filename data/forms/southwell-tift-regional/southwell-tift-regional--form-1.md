# Evaluation: Southwell (Tift Regional Health System) — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a 2-page "AUTHORIZATION TO RELEASE / OBTAIN PROTECTED HEALTH INFORMATION" form for Tift Regional Health System, Inc. (TRHS). It is specifically branded for the hospital/inpatient side of the system, covering "Tift Regional Medical Center," "Southwell Health and Rehabilitation," "Southwell Medical, a campus of TRMC," and "Southwell Medical Rural Health Clinics."

This form is one of four documents found on the organization's medical release page:

- **form-1.pdf** (this document): TRHS hospital authorization form (2 pages, text layer, 135 KB)
- **form-2.pdf**: A newer (July 2025 upload) single-page Release of Information form that is an image-only scan — no text layer, no fillable fields, content unverifiable without OCR
- **form-3.pdf**: A parallel authorization form for "Southwell Ambulatory, Inc." covering specialty/outpatient locations (Gastroenterology, Endoscopy Centers, Pediatrics) — nearly identical structure to form-1 but scoped to ambulatory facilities
- **form-4.pdf**: A reference list of all TRHS entity names and addresses (not an ROI form)

The existence of separate forms for hospital vs. ambulatory facilities creates a fragmented experience. A patient who received care at both a TRHS hospital and an ambulatory clinic would need to complete two different forms. It is also unclear how form-2.pdf relates — it may be a replacement or alternate version, but its image-only format makes comparison impossible.

## 2. FINDABILITY

According to the retrieval notes, the form was located via the website's navigation path **Home → Patient & Visitors → Medical Release** at `https://mysouthwell.com/medical-release/`. The search process found the form through web searches and confirmed the page via site-specific searching. No bot blocking or login requirements were encountered.

The source URL (`https://mysouthwell.com/wp-content/uploads/2020/10/TRHS-Authorization-to-Release-Obtain-PHI.pdf`) is a WordPress media upload path from October 2020. The filename is reasonably descriptive ("TRHS-Authorization-to-Release-Obtain-PHI.pdf"), though using a `/wp-content/uploads/` path rather than a more intentional permalink is typical of WordPress sites and not ideal for long-term link stability.

The medical release page presents multiple forms without clear guidance about which form applies to which patient scenario, which could create confusion — particularly given the separate TRHS and SWA forms, plus the mysterious form-2.pdf. The organization also references Verisma as an online records request partner, adding another pathway.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The form has 2,817 characters of extractable text across 2 pages. The `pdftotext` extraction is clean and readable, with logical text flow.

**Fillable fields**: None. The `fillable_field_count` is 0 and `fillable_field_names` is empty. Despite having checkboxes rendered in the text (for facility selection, record types, delivery method, and purpose), these are static/print-only — not interactive PDF form fields. The form must be printed and filled by hand, or filled using PDF annotation tools (not a reliable workflow).

**File format**: 134,621 bytes (135 KB) for a 2-page document with no embedded images and 5 fonts. This is a reasonable file size. The form is not an image-only scan (`is_image_only_scan: false`).

**Digital-first design**: No. This is clearly a print-oriented document. The lack of fillable fields, the reliance on blank lines for data entry (e.g., "from date ______________ to date _______________"), and the requirement for a physical "Signature of Witness" all indicate it was designed for paper workflows. There is no electronic submission path described in the form itself.

## 4. CONTENT DESIGN

**Length**: 2 pages. The content is appropriately sized for an authorization form — not excessively long, though the second page contains only two short paragraphs (items 7-8) plus signature lines, suggesting the layout could be consolidated to a single page.

**Organization**: The form uses numbered sections (1-8) covering: facility selection, record type, sensitive information notice, recipient, purpose, revocation, non-conditioning statement, and voluntary disclosure notice. This is a logical flow that moves from "what" to "who" to "why" to legal notices.

**Clarity**: The language is moderately legalistic. Section 3 uses a dense notice about sensitive information types: "sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), human immunodeficiency virus (HIV), drug abuse, alcoholism, sickle cell anemia, and behavior or mental health services." This is a compliance-driven enumeration that may alarm patients. The purpose options are terse labels ("Legal Issue," "Continuing Care," "Insurance Claim," "Personal Use," "Certified Copy") without explanation.

**Layout**: The form uses checkboxes and blank lines for data entry. The record type section (item 2) is laid out in a two-column format with date range fields, which is dense but functional. The header block with patient identification fields (Name, DOB, MRN, last 4 of SSN) is standard.

**Readability**: Based on the extracted text, the font appears to be standard-sized (the form fits a reasonable amount of content on two pages). The numbered structure provides adequate visual hierarchy.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose authorization form. It is titled "AUTHORIZATION TO RELEASE / OBTAIN PROTECTED HEALTH INFORMATION," with "I authorize representatives from the following... facility(ies) to disclose the health information as directed below." The form structure is designed for releasing records to a named third party (Section 4: "This information may be disclosed to and used by the following individual or organization"). While "Personal Use" is listed as a purpose option, the form is not specifically designed for patient self-access under HIPAA's Right of Access.

**Scope options**: Good granularity. The form offers 10 specific record type checkboxes: problem list, medication list, physician orders, laboratory results, x-ray/imaging reports, x-ray films, consultation reports, entire record, billing records, and other. Most include date range fields. There is also a "from (doctor's name)" field for consultation reports, allowing targeted requests.

**Format/delivery options**: The form offers three delivery methods: "Paper," "CD," and "Electronic Delivery (include e-mail address)." The inclusion of electronic delivery is a positive feature, though the parenthetical instruction to "include e-mail address" suggests unencrypted email may be the mechanism — no mention of a patient portal or secure transfer method.

**Right of Access language**: The form does not reference HIPAA § 164.524 or use the phrase "Right of Access." There is no mention of patient rights to access their own records, applicable timelines for response, or fee limitations. The non-conditioning statement (Section 7: "TRHS will not condition treatment, payment, enrollment, or eligibility for benefits concerning my health care on whether I sign or refuse to sign this authorization") references 45 CFR § 164.508 authorization principles, not § 164.524 access rights.

**EHI Export**: No mention of electronic health information export, bulk data, or TEFCA/information blocking provisions.

## 6. COMPLIANCE

**Last 4 digits of SSN**: The form requests "Last 4 digits of SS number" as a patient identifier. While not the full SSN, this is an unnecessary data element for a records release request — Medical Record Number and Date of Birth should suffice for identity verification.

**Witness requirement**: The form includes a "Signature of Witness" line with Date and Time fields. HIPAA does not require a witness for a valid authorization, and adding this requirement creates an additional barrier for patients completing the form remotely or independently.

**Revocation process**: Section 6 states revocation must be done "in writing" and presented "to the Health Information Management Department, PO Box 2560, Tifton, GA 31793, 229-353-6120." This is specific and actionable, though requiring written revocation to a physical mailing address is a minor barrier.

**Default expiration**: Section 6 states: "If I do not specify an expiration date or event, this Authorization will expire ninety (90) days from the date on which I signed this Authorization." A 90-day default expiration is relatively short — it means the authorization becomes invalid quickly if the organization is slow to process the request. This could force patients to re-submit if there are processing delays.

**Non-conditioning**: Section 7 appropriately states that TRHS will not condition treatment or benefits on signing the authorization. This is a standard HIPAA authorization element.

**Fees**: The form does not mention any fees, costs, or charges for records. While this avoids the problem of discouraging requests with upfront fee disclosures, it also means the patient has no idea what to expect financially.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature requirement**: The form requires a "Signature of Witness" — HIPAA authorizations under § 164.508 do not require witnesses, and this adds a barrier for patients completing the form independently at home. A patient living alone or requesting records remotely would need to find a witness before submitting.

- **SSN collection**: Requesting "Last 4 digits of SS number" is unnecessary for patient identity verification in a records release context. MRN and DOB are standard identifiers; collecting even partial SSN creates privacy risk and may deter patients.

### ⚠️ AMBIGUITIES

- **Fragmented form landscape**: The medical release page hosts at least three different ROI forms (TRHS hospital, SWA ambulatory, and the image-only form-2.pdf) without clear guidance on which form to use. A patient who isn't sure whether their visit was to a "TRHS" or "SWA" facility would not know which form to complete.

- **Electronic delivery mechanism unclear**: The form offers "Electronic Delivery (include e-mail address)" but doesn't specify whether this means unencrypted email, a secure portal link, or some other mechanism. Patients cannot make an informed choice about delivery method without knowing the security posture.

- **90-day default expiration**: While not unreasonable on its face, the 90-day default expiration combined with no stated processing timeline creates ambiguity — a patient doesn't know if their request will be fulfilled before the authorization expires.

### ❌ ERRORS

- **Stale upload date**: The form's URL path contains `/2020/10/`, indicating it was uploaded to the website in October 2020. Given that the organization has since rebranded from "Tift Regional" to "Southwell" (the website is mysouthwell.com), the form header still uses "TIFT REGIONAL HEALTH SYSTEM, INC." branding — a naming inconsistency that may confuse patients navigating the Southwell-branded website.

### ✨ BRIGHT SPOTS

- **Granular record type selection**: The form offers 10 specific record type checkboxes with associated date ranges, allowing patients to request targeted subsets of their records rather than only "entire record." This is more granular than many ROI forms.

- **Electronic delivery option**: Including "Electronic Delivery" as a delivery method option, alongside Paper and CD, is a positive feature that many provider forms still lack.

- **"Personal Use" as an explicit purpose**: Listing "Personal Use" as a checkbox option for purpose of disclosure acknowledges that patients may be requesting their own records, even though the form is not specifically designed for patient access.
