# MUSC Health University Medical Center — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is the primary **"Authorization to Release Protected Health Information"** form (English version), 2 pages, revised 10/2023 (document ID: OTE 700078). It is a **general-purpose HIPAA authorization** form — not a patient-access-specific request form. It serves both patient self-requests and third-party releases, as evidenced by the "Purpose of the Release" checkboxes that include "Patient/Guardian/Legal Rep" alongside "Legal," "Insurance," "Disability," and others.

Two companion documents exist for this organization:
- **form-2.pdf** — a 5-page instructional guide explaining how to request records through MyChart (not itself an authorization form).
- **form-3.pdf** — the Spanish-language version of this same form ("Autorización para Divulgar Información de Salud Protegida"), document ID OTE 700251, with identical structure and content.

This form is used across the entire MUSC Health system — page 2 lists contact information for 9 separate facilities (Charleston, Columbia, Chester, Florence, Kershaw, Lancaster, Marion, Orangeburg, plus the College of Dental Medicine).

## 2. FINDABILITY

The form was **easy to find**. Per the retrieval notes, a standard web search for `MUSC Health "authorization" "release" "health information" filetype:pdf` immediately surfaced the direct PDF URL. The form is hosted at a clean, descriptive URL: `muschealth.org/-/sm/health/medical-records/f/authorization-to-disclose-phi.pdf`. The organization's medical records page (`muschealth.org/patients-visitors/medical-records`) links to it directly. No bot-blocking, login walls, or JavaScript rendering barriers were encountered. The URL path structure (`/medical-records/f/authorization-to-disclose-phi.pdf`) is descriptive and intuitive.

MUSC also offers two alternative digital pathways — MyChart portal records request and a Ciox/Swellbox eRequest tool — giving patients multiple avenues, though the eRequest tool requires webcam/smartphone identity verification.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present and fully extractable — 7,789 characters of clean text. Not an image-only scan.

**Fillable fields**: **Zero** fillable/interactive form fields (`fillable_field_count: 0`). Despite having a text layer, this PDF has no interactive elements — all blanks are represented as underscores or empty lines. Patients must print and hand-write entries, or use PDF markup tools to overlay text. This is a significant shortcoming for a form that offers "Encrypted E-mail" as a delivery method — a digitally-minded patient choosing encrypted email delivery still cannot fill the form digitally.

**File format**: 158,878 bytes (159 KB) for 2 pages with 1 embedded image (likely the MUSC logo) and 9 fonts. File size is reasonable. The form has a text layer and uses real fonts — it was designed digitally, not scanned from paper.

**Digital-first design**: Mixed. The form was clearly authored digitally (not a scanned paper form), but it was not designed for digital completion. The lack of any fillable fields means it functions as a print-and-fill document despite being distributed electronically.

## 4. CONTENT DESIGN

**Length**: 2 pages. Page 1 contains the entire authorization form. Page 2 is entirely dedicated to facility contact information for 9 MUSC locations — useful reference but consuming a full page. The form content itself is appropriately concise for what it covers.

**Clarity**: The form uses a mix of plain language and legal/regulatory references. The opening instruction — "IMPORTANT: FAILURE TO FULLY COMPLETE MAY INVALIDATE THIS AUTHORIZATION" — is clear but somewhat intimidating. Legal disclosures at the bottom of page 1 are dense but substantively appropriate, covering revocation rights, voluntariness, Right of Access (45 CFR §164.524), re-disclosure risks, and fees.

**Organization**: The form follows a logical flow: Patient Info → Release From → Release To → Record Types → Purpose → Date Range → Delivery Method → Sensitive Records Authorization → Legal Disclosures → Signature. This is a standard and sensible progression.

**Record type options**: The form offers reasonable granularity:
- Entire Record (with explicit note: "Radiology Images are NOT included")
- Abstract (defined as: "History & Physical, consults, lab & radiology reports, discharge summary, operative/procedure reports, Emergency Department reports and Occupational/Physical Therapy reports")
- Radiology Images/DVD
- Immunization Records
- Medication List
- Physician progress notes/visit notes
- Other (free text)
- Separate dental records section

**Layout**: The form is reasonably organized but dense. Checkbox options, text fields, and legal disclosures are packed tightly on page 1. The legal disclosure block at the bottom is a wall of small-print text with no visual separation between distinct rights statements.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form does **not** differentiate between patient self-access and third-party release. It uses "Release Records From" and "Release Records To" framing, which is the standard third-party release paradigm. A patient requesting their own records must fill in their own name in both the patient information section and the "Release Records To" field — which is unintuitive. The "Purpose of the Release" checkbox "Patient/Guardian/Legal Rep" exists but is one of 8 options, not the default or primary pathway.

**Scope options**: Good. Patients can specify date ranges ("Treatment dates from ___ to ___") or select "All Treatment Dates." Record type checkboxes provide meaningful granularity. The "Abstract" option is helpfully defined so patients understand what it includes.

**Delivery method options**: Strong. The form offers 5 delivery methods: Mail, MyChart, Fax, Encrypted E-mail, and Other. The MyChart option notes "Rad Images & Dental excluded." The form includes a sensible default: "If a method is not selected, the information will be mailed."

**Sensitive records**: The form explicitly addresses substance use disorder records (42 CFR Part 2), mental health, HIV/AIDS, genetic testing, communicable diseases, and sexual assault. It provides specific SUD opt-in checkboxes — "All of my SUD records" or "Only the following SUD records" with space for specificity.

**Right of Access language**: The form explicitly states: "I understand I may review and / or copy the information to be disclosed, as provided in 45 CFR §164.524." This is a direct reference to HIPAA's Right of Access provision.

**Voluntariness**: Clear: "I understand that authorizing the disclosure of protected health information is voluntary. I can refuse to sign this authorization. I do not need to sign this form to receive treatment."

**Fees**: The form states: "I understand there may be fees for copies of medical records/images and postage fees may be charged as provided by S.C. Law." Fees are mentioned but not quantified on the form itself. The MyChart instructional guide (form-2) separately states: "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient."

## 6. COMPLIANCE

**Expiration**: Authorization expires "one year from the date below" unless revoked — a standard and reasonable timeframe.

**Revocation**: Must be done "in writing" and presented to HIM or Dental HIS. This is compliant with HIPAA but could be more patient-friendly by specifying that email or fax revocation is acceptable.

**ID requirement**: The form states: "Attach a copy of the patient/legal guardian/representative identification to this authorization." This is a blanket ID requirement for all requests, not limited to representative requests. While identity verification is reasonable, requiring ID attachment (presumably a photocopy of a driver's license or similar) for all requests — including patient self-requests — adds a barrier.

**Witness signature**: The form includes a "Witness Signature" line. This is not legally required by HIPAA for patient access requests and adds an unnecessary step.

**Processing time**: "(NOTE: HIPAA LAW ALLOWS 30 DAYS from receipt for processing.)" This is accurate per 45 CFR §164.524(b)(2).

**Last 4 SSN**: The form requests "Last 4 digits of Social Security #" — this is a common but unnecessary identifier. MRN, name, and date of birth should be sufficient for patient matching.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Blanket ID attachment requirement**: "Attach a copy of the patient/legal guardian/representative identification to this authorization" applies to ALL requestors, not just representatives. HIPAA does not require patients to submit copies of their ID to exercise their Right of Access. This creates a barrier — patients without easy access to a copier or scanner face additional friction.
- **Fees charged for patient self-access**: Form-2 (MyChart instructions) explicitly states "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient." Under HIPAA, fees for patient access requests are limited to reasonable, cost-based fees and may not include search fees (only labor for copying, supplies, and postage). Charging a "search" fee for patient access requests may violate 45 CFR §164.524(c)(4).

### ⚠️ AMBIGUITIES

- **"Encrypted E-mail" disclaimer contradicts itself**: The section labeled "Encrypted email" states: "I understand that unencrypted e-mail is not secure... By choosing to receive My Health Information on an unencrypted email, I am acknowledging and accepting these risks." The heading says "encrypted" but the disclaimer describes "unencrypted" — it's unclear whether the delivery will actually be encrypted or not.
- **Witness signature purpose unclear**: A "Witness Signature" line appears with no explanation of when a witness is required or who qualifies as a witness. Patients may believe a witness is always required, creating confusion and delay.

### ✨ BRIGHT SPOTS

- **Spanish-language version available**: Form-3 is a full Spanish translation (not just a cover sheet), with bilingual headers. This is uncommon and demonstrates meaningful language access effort.
- **Multiple delivery methods including encrypted email and MyChart**: Offering 5 delivery options (Mail, MyChart, Fax, Encrypted E-mail, Other) is above average for ROI forms.
- **Abstract record type defined**: The form helpfully explains what "Abstract" includes, so patients can make informed choices about scope rather than guessing.
- **Multi-facility contact directory**: Page 2 provides complete contact information (address, phone, fax, email) for 9 MUSC locations, so patients know exactly where to send their form regardless of which facility they visited.
- **Three access pathways**: MUSC offers PDF form, MyChart portal, and Ciox eRequest — giving patients genuine choice in how to request records.
