# Evaluation: Hillcrest Hospital Claremore — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is the official **"Authorization for Use or Disclosure of Protected Health Information"** form (document ID: HMC1072, Rev. 08/18) used across the entire Hillcrest HealthCare System (part of Ardent Health Services). It is a system-wide form covering nine facilities via checkboxes at the top, including "Hillcrest Hospital Claremore." There is no Claremore-specific ROI form; this is the only relevant authorization form for the facility.

The other document retrieved (form-1.pdf) is from "Hillcrest Internal Medicine" in San Diego, CA — a completely unrelated organization that appeared in search results due to shared naming. Form-2 is the sole applicable form for this evaluation.

The form is 2 pages, but both pages are identical — the extracted text repeats verbatim, including the same header, body, and footer (`HMC1072 (Rev. 08/18)`). This appears to be a two-part carbon-copy design: the footer reads "Original: Releasing entity" and "Copy: Patient or representative (Required)," indicating page 1 is the facility's copy and page 2 is the patient's copy. This is a holdover from physical paper workflows.

## 2. FINDABILITY

**Retrieval difficulty: Easy.** The form was located via the Hillcrest HealthCare System website. A site-scoped search (`site:hillcrest.com authorization release medical records`) led to the centralized Medical Records Request page at `https://hillcrest.com/policies-and-disclosures/medical-records-request/`. The form is downloadable from that page, reachable in 2–3 clicks from the main site.

The source URL (`https://hillcrest.com/wp-content/uploads/sites/14/2025/12/ROI.Current.English.HMC1072.pdf`) is reasonably descriptive — it includes "ROI," "Current," "English," and the form number. The Medical Records Request page also mentions a MyChart portal option and a Swellbox online request platform, suggesting the paper form is one of multiple request pathways.

No direct web search for "Hillcrest Hospital Claremore" + ROI form surfaced this document; the user must know or discover that the parent system manages medical records centrally. This is a minor friction point for patients searching specifically for Claremore.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The document is digitally created (not a scan), and text is fully extractable — 6,478 characters across two (identical) pages.
- **Fillable fields:** Zero (`fillable_field_count: 0`). Despite being a digitally-created PDF, the form has no interactive form fields. Patients must print and handwrite all entries.
- **File size:** 136,435 bytes (133 KB) for a 2-page document with no embedded images. Reasonable.
- **Font count:** 16 fonts used, which is high for a 2-page form and may indicate design complexity.
- **Embedded images:** None.
- **Digital-first design:** No. Although the PDF was created digitally (not scanned), the complete absence of fillable fields and the duplicate-page carbon-copy structure make this a print-oriented document. The checkbox characters render as Khmer script characters (`អ`) in text extraction, suggesting the checkboxes use a symbol font that maps to Unicode incorrectly — a cosmetic extraction issue but one that indicates the form was designed for visual rendering on paper, not digital interaction.

## 4. CONTENT DESIGN

**Length:** Effectively 1 page of unique content, duplicated for the carbon-copy format.

**Structure and organization:** The form follows a logical flow:
1. Facility selection (9 checkboxes)
2. Patient identification (name, DOB, medical record #)
3. Authorization body ("I hereby authorize...")
4. Sender/receiver fields
5. Record type checkboxes (9 options + "Other")
6. Date range field
7. Purpose checkboxes (5 options)
8. Legal disclosures ("I understand:" section with 4 bullet points)
9. Sensitive information acknowledgment
10. Signature blocks (patient + personal representative)
11. Processing line

**Record type options** are limited and clinically specific: History & Physical, Discharge Summary, Operative Report, Progress Notes, X-ray reports, ER Record, Consultation, Lab reports, and a catch-all "Other." There is no option for "entire medical record" or "all records" — patients wanting comprehensive access must either check all boxes or write something in the free-text area.

**Clarity:** The language is moderately legalistic. The "I understand" section contains four dense paragraphs covering revocation rights, liability release, redisclosure warnings, and anti-conditioning. The sensitive information paragraph is particularly dense: "I understand that the information authorized for use or disclosure may include information which may indicate the presence of a communicable or non-communicable disease and may include, but is not limited to, diseases such as hepatitis, syphilis, gonorrhea, and human immunodeficiency viruses also known as Acquired Immune Deficiency Syndrome (AIDS)." This is a single run-on sentence.

**Layout:** The form has a clean visual hierarchy with the facility checkboxes at top, then patient info, then the authorization body. However, the "I understand" section is a dense text block with no visual separation between concepts.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** The form is a general-purpose authorization that covers both directions — disclosure *to* third parties and disclosure *from* other entities. The authorization statement reads: "I hereby authorize the use or disclosure of the Protected Health Information described below to be provided to or obtained by the following." It includes fields for both "Name and Address of Individual/Facility/Company to Receive PHI" and "Name and Address of Individual/Facility to Disclose PHI." For a patient requesting their own records, both fields would need to be filled, which adds confusion.

**Purpose options** include "At the request of the patient or patient's representative," which is the correct category for patient access requests, but it's listed alongside Insurance, Continued treatment, and Legal — framing patient access as just one purpose among many rather than as a distinct right.

**Scope options:** The form offers 9 record-type checkboxes plus a date range field ("Medical information between ___ to ___"). There is no "all records" checkbox, and no way to specify electronic format. No mention of electronic delivery, email, portal, or CD/USB options.

**Right of Access language:** The form does not reference HIPAA § 164.524 or the patient's right of access. It references the "Notice of Privacy Rights" in the revocation clause but does not explain what that notice contains or where to find it. No mention of EHI export or bulk data access.

**Expiration:** The authorization auto-expires at "six (6) months from date of signature or upon occurrence of the following event: ___." Six months is short but within a reasonable range for a general-purpose authorization.

**Representative access:** The form includes a "SIGNATURE OF PERSONAL REPRESENTATIVE" line with a "DESCRIPTION OF REPRESENTATIVES AUTHORITY TO ACT FOR THE PATIENT" field, which is appropriate.

## 6. COMPLIANCE

**Liability waiver:** The form includes: "I release the entities listed above, their agents and employees from any liability in connection with the use or disclosure of the protected health information." This is a blanket liability release bundled into the authorization — patients must agree to release liability as a condition of authorizing disclosure.

**Fee disclosure:** "Normal applicable fees, such as copy fees, may apply." This is vague — no specific fee schedule is provided, and the patient has no way to know what they will be charged before authorizing.

**Anti-conditioning language:** Present: "the requesting entity will not condition the provision of treatment, payment, enrollment in a health plan, or eligibility for benefits on obtaining this authorization," but only "unless the purpose of this authorization is to determine payment of a claim for benefits."

**Sensitive information consent:** The form bundles consent for release of communicable disease information (hepatitis, syphilis, gonorrhea, HIV/AIDS), mental health treatment information, and substance abuse information into the general authorization — there are no separate checkboxes or opt-out options for these categories. Patients cannot authorize release of general records while excluding sensitive categories.

**Submission method:** The form does not specify how or where to submit the completed authorization (no mailing address, fax number, email address, or drop-off location).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket liability waiver bundled into authorization:** "I release the entities listed above, their agents and employees from any liability in connection with the use or disclosure of the protected health information." Patients cannot authorize disclosure without waiving their right to hold the facility accountable for improper handling. This is not required by HIPAA and creates an unnecessary legal concession.

- **No fillable fields on a digitally-created PDF:** Despite being created digitally (not scanned), the form has zero interactive fields. This forces patients to print, handwrite, and physically submit the form — an unnecessary barrier given the digital origin of the document.

### ⚠️ AMBIGUITIES

- **No submission instructions:** The form provides no mailing address, fax number, email, or other submission channel. Patients are left to figure out how to deliver the completed authorization.

- **"Provided to or obtained by" phrasing:** The authorization covers both sending and receiving PHI in a single form and single signature, which may confuse patients about which direction information flows in their specific request.

- **"Normal applicable fees, such as copy fees, may apply"** — no fee schedule, no estimate, no reference to where patients can learn what they'll be charged. This is particularly relevant for patient access requests, where HIPAA limits fees to a reasonable, cost-based amount.

### ❌ ERRORS

- **Checkbox characters extract as Khmer script (`អ`):** All checkbox characters render as Unicode U+17A2 (Khmer letter QA) in text extraction, indicating a font-mapping issue. While visually functional in the PDF, this breaks assistive technology and text-based processing.

- **Duplicate pages as "carbon copy":** The two-page PDF contains identical content on both pages, with the footer distinguishing "Original: Releasing entity" from "Copy: Patient or representative (Required)." This is a vestige of physical paper handling that adds no value in a digital PDF and doubles the document's length for no purpose.

- **Form revision date is August 2018** (`HMC1072 (Rev. 08/18)`) — nearly 8 years old at the time of evaluation. While not inherently erroneous, this predates the 2021 HIPAA Right of Access enforcement updates and the 21st Century Cures Act information blocking rules.

### ✨ BRIGHT SPOTS

- **Multiple request pathways available:** While this paper form is limited, the notes indicate that Hillcrest also offers MyChart portal access and a Swellbox online request platform. The paper form is the weakest link in what appears to be a multi-channel approach.

- **System-wide form covers all facilities clearly:** The facility checkbox design at the top of the form makes it unambiguous which entities are covered, and prevents patients from needing to track down facility-specific forms.
