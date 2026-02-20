# Evaluation: Erie Family Health Centers — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a single-page "AUTHORIZATION TO RELEASE PROTECTED HEALTH INFORMATION" form specific to Erie Family Health Centers. It is a general-purpose release form — not a patient-access-specific form — that serves both directions: releasing records *to* a third party and receiving records *from* a third party. The form header pre-fills Erie's Health Information Department address (2750 W North Avenue, Chicago, IL 60647), phone (312-432-2055), fax (312-432-4372), and email (ROI@eriefamilyhealth.org).

A second document (form-2.pdf) is a Spanish-language translation of the same form with identical structure and field layout. Both are linked from the organization's dedicated medical records request page at `https://www.eriefamilyhealth.org/recordsrequest/`. The notes indicate that the records request page also promotes MyChart (myeriehealth.com) as the primary records access pathway.

## 2. FINDABILITY

**Retrieval difficulty: Easy.** According to retrieval notes, the PDF was found directly via web search for `"Erie Family Health Centers" "medical records" "release form" PDF`, which returned the URL `https://www.eriefamilyhealth.org/wp-content/uploads/2023/02/ROI-English.pdf`. A site-specific search confirmed it and also surfaced the dedicated records request page (`/recordsrequest/`). No bot blocking or access barriers were encountered.

The URL follows a reasonable WordPress media convention (`/wp-content/uploads/2023/02/ROI-English.pdf`) with a descriptive filename. The dedicated records request page provides clear context and links to both English and Spanish versions. This is a well-organized findability story — the form is publicly posted and reachable within one or two clicks from a clearly labeled page.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (3,981 characters) extracts cleanly, with only a few stray control characters (`\u0003`) suggesting minor encoding artifacts but nothing that impairs readability.
- **Fillable fields**: The metadata reports 54 fillable fields, though `fillable_field_names` is empty (field names are not programmatically labeled). This means the form has interactive fields for digital completion, but the lack of named fields means screen readers and assistive technology will have difficulty navigating the form — each field will appear unnamed.
- **Page count**: 1 page — compact but dense.
- **File size**: 2,596,022 bytes (~2.5 MB) for a single-page form with no embedded images. This is quite large, suggesting the PDF may embed unnecessary font subsets or have other bloat. The Spanish version is smaller at ~1.7 MB.
- **Fonts**: 12 fonts embedded, which is high for a one-page form and likely contributes to the file size.
- **Digital-first design**: This appears to be a digitally created form (not a scan), with proper text layer and fillable fields. It was designed for digital completion, though the reference to "Paper copy" and "CD-ROM" as format options dates the form conceptually.

## 4. CONTENT DESIGN

The form packs a considerable amount of information onto a single page. Sections flow top-to-bottom in a logical order:

1. Patient identification (Name, Phone, DOB, PCP)
2. Authorization direction (Release to / Receive from) with recipient details
3. Purpose checkboxes (7 options)
4. Format selection (Paper / Electronic CD-ROM)
5. Delivery method (4 options)
6. Health information type (9 categories)
7. Date range selection
8. Special-permission categories (Mental/Behavioral Health, Alcohol/Substance Use, HIV/AIDS)
9. Rights/revocation statement
10. Signature block

The language is reasonably clear for an authorization form, though it is dense. The rights statement — "I understand that I have the right to inspect the disclosed information and may revoke this authorization at any time by submitting a written revocation to the Medical Records Department" — is concise and informative. However, the bottom of the form includes a block of fine-print legal notices about re-disclosure restrictions under the Mental Health and Developmental Disabilities Act, the Federal Confidentiality of Alcohol and Drug Abuse Patient Records Act (July 1, 1993), and the Illinois AIDS Confidentiality Act. This notice is clearly addressed to the *receiving* party, not the patient, yet it appears on the patient-facing form without differentiation, which may confuse patients.

The reference to "Please refer to Pay Scale for rates" under the FORMAT section is cryptic — no pay scale is included with the form, and no URL or reference is provided. A patient encountering this has no idea what costs to expect.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose release form, not specifically designed for patients requesting their own records. The dual checkboxes — "to Release to" and "to Receive from" — indicate it is used for both directions. A patient requesting their own records would check "to Release to" and write their own name in the recipient field, which is somewhat awkward since the form is framed around releasing records to a named third party (with fields for "Name of Health Care Facility, Individual or Agency" and "Address / City, State, Zip / Phone/Fax").

**Purpose options**: The "Personal Use" checkbox accommodates patient self-requests. Other options (Disability Determination, Transfer/Continuing Care, Legal Counsel, Insurance/Benefits, Upcoming Appointment, Other) cover common third-party scenarios.

**Scope options**: Good granularity. Patients can select from 9 record types (Office Visit Notes, Immunization/Shot Records, School Physical Forms, Lab Reports, Billing Records, Complete Chart, Prenatal Records, Radiology/Imaging Reports, Other) and specify date ranges or request most recent records. The special-permission section for sensitive categories (Mental/Behavioral Health, Alcohol/Substance Use, HIV/AIDS) correctly flags the need for explicit consent per federal and state law.

**Format options**: Paper copy or "Electronic copy (CD-ROM)." The CD-ROM reference is outdated. There is no mention of electronic health information export, patient portal download, or modern digital formats.

**Delivery methods**: Four options — encrypted email, pickup at an Erie facility, fax, and US postal mail. Encrypted email is a positive inclusion for digital delivery.

**ID requirement**: "Copy of ID Required" appears as a note under the DELIVERY METHOD section. While identity verification is reasonable, HIPAA does not require a copy of ID for patient access requests — it requires only "reasonable" verification. This could be a barrier for patients who lack government-issued photo ID, particularly relevant for an FQHC serving vulnerable populations.

**Rights language**: The form mentions the right to inspect disclosed information and to revoke authorization. It does not reference HIPAA § 164.524 or the patient's Right of Access specifically.

## 6. COMPLIANCE

- **Automatic expiration in 6 months**: The form states it "will automatically expire in six months or on the following date or event." Six months is a reasonable default expiration and is not unreasonably short.
- **Copy of ID required**: Stated as a blanket requirement. Under HIPAA, covered entities may verify identity but are not required to demand a copy of government-issued ID. For an FQHC serving uninsured and underserved populations, this could be a meaningful barrier.
- **Pay Scale reference without disclosure**: The form mentions "Please refer to Pay Scale for rates" but does not include the pay scale, link to it, or disclose any fee amounts. Under HIPAA's Right of Access, fees for patient copies must be limited to reasonable, cost-based amounts, and patients are entitled to know costs upfront. The vague reference provides no transparency.
- **Witness signature**: The form includes a "Signature of Witness" line. This is not required by HIPAA for patient access requests and adds an unnecessary procedural step.
- **Minor consent note**: "*For the release of Mental Health Information of patients between ages 12-17, patients from 12-17 years of age are required to sign authorization in addition to their parent or guardian." This aligns with Illinois law regarding minor consent for mental health treatment.
- **No submission method restrictions**: The form does not require in-person submission or notarization, which is appropriate.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **"Copy of ID Required"** stated as a blanket requirement with no alternative verification methods offered. For an FQHC serving populations that may lack government-issued ID, this could create an access barrier that goes beyond what HIPAA requires for identity verification.

### ⚠️ AMBIGUITIES

- **"Please refer to Pay Scale for rates"** — No pay scale is included, referenced, or linked. A patient has no way to learn what records will cost before submitting the form. This creates an information asymmetry where patients authorize release without knowing the financial implications.
- **Witness signature line** — It is unclear whether a witness is required or optional. The form provides a signature line labeled "Signature of Witness" with a date field, but includes no instructions about whether a witness must be present. If required, this imposes an extra step; if optional, its presence may lead patients to believe they need one.
- **"to Release to" / "to Receive from" directionality** — While the dual-direction design is flexible, it may confuse patients requesting their own records, who must determine which checkbox applies to their situation. No guidance text explains this.

### ❌ ERRORS

- **"Electronic copy (CD-ROM)"** — CD-ROM is an obsolete delivery medium. The parenthetical implies electronic copies come on CD-ROM, when in practice Erie likely provides USB drives or digital downloads. This suggests the form has not been updated in some time (the PDF URL path includes `2023/02`, but the content may predate that upload date).
- **Control characters in extracted text** — Multiple `\u0003` characters appear in the extracted text, indicating minor PDF encoding issues that do not affect visual rendering but impair programmatic text processing.

### ✨ BRIGHT SPOTS

- **Bilingual availability**: Both English (form-1.pdf) and Spanish (form-2.pdf) versions are provided, directly linked from the same page. For an FQHC serving Chicago's diverse population, this is appropriate and commendable.
- **Encrypted email delivery option**: Including encrypted email as a delivery method is a modern, patient-friendly option that many organizations omit.
- **Dedicated records request page**: The organization maintains a clear `/recordsrequest/` page that contextualizes the forms and also promotes the patient portal (MyChart) as an alternative pathway, giving patients multiple access routes.
- **Granular record-type selection**: Nine specific record categories plus an "Other" field let patients request exactly what they need rather than an all-or-nothing approach.
