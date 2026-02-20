# NewYork-Presbyterian Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This document is **not an ROI authorization form**. It is a 2-page FAQ titled "FREQUENTLY ASKED QUESTIONS – RELEASE OF INFORMATION: HOW TO OBTAIN COPIES OF MY MEDICAL RECORDS?" It functions as a supplementary guide explaining the records request process.

In the context of other documents found for NewYork-Presbyterian:
- **form-1.pdf** is the primary "NY Consortium HIPAA Auth" Tripartite ROI form (shared across NYP/Columbia/Weill Cornell), which is a 2-page fillable PDF (103 fillable fields) — the actual authorization form.
- **form-2.pdf** (this document) is a companion FAQ explaining process, timelines, and contact information.
- **form-3.pdf** is an older or campus-specific (Lawrence) variant of the authorization form, without fillable fields.

Form-2 is best characterized as **patient-facing instructional material** — it does not collect any data or serve as a legal authorization. It sits alongside the actual ROI forms as an explanatory resource.

## 2. FINDABILITY

Per retrieval notes, this FAQ was found at `https://www.nyp.org/sites/default/files/acquiadam/2020-08/faq-for-obtaining-medical-records.pdf`, accessible from the main medical records page at `www.nyp.org/patients-visitors/medical-records`. The medical records page was reachable in approximately 2 clicks from the homepage (Home → Patients & Visitors → Medical Records). The filename `faq-for-obtaining-medical-records.pdf` is descriptive and clearly identifies the document's purpose. The URL path structure (`/sites/default/files/acquiadam/`) suggests it is hosted through a CMS (Drupal/Acquia) asset management system, which is standard but not the most user-friendly URL format.

The notes indicate overall findability was "straightforward" and the medical records page was "easily accessible and well-organized."

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,312 characters). Not an image-only scan.
- **Fillable fields**: Zero — appropriate since this is an informational FAQ, not a form.
- **File size**: 355,228 bytes for a 2-page text-only document — somewhat large for a document with no embedded images (`embedded_image_count: 0`). This suggests some bloat, possibly from embedded fonts (5 fonts detected).
- **Format**: Structured as a Q&A table with "Question" and "Response" columns. The text extracts cleanly via `pdftotext`, preserving the question-answer structure legibly.
- **Digital-first**: The document appears to be natively digital (not a scan). The clean text extraction and zero embedded images confirm this. However, the lack of hyperlinks in the extracted text (e.g., `www.nyp.org/HIM` appears as plain text rather than a clickable link) reduces its digital utility.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is appropriate for a FAQ document. The content is proportionate — it covers 10 distinct questions spanning the full records request lifecycle.

**Clarity**: The language is relatively plain and accessible. Questions are phrased from the patient's perspective (e.g., "How do I obtain copies of my medical records?", "Can parents request copies of the medical record for their minor child?"). Responses are direct and actionable.

**Organization**: The Q&A table format provides natural structure. Questions progress logically: how to request → where to find the form → where to send it → how you'll receive records → what's available on MyChart → special cases (minors, deceased, radiology/pathology) → contact info.

**Specific content observations**:
- The FAQ directs patients to three submission methods in a clear hierarchy: (1) MyChart portal, (2) Verisma vendor portal, (3) paper form "as a last option."
- It provides a dedicated phone number for help: "646-NYP-4ROI (646-697-4764)" with hours of operation ("Monday through Friday from 8am to 6pm").
- The MyChart section lists specific record types available electronically: "Cardiology Reports (EKG, Echocardiogram), Discharge/Visit Reports, Lab Tests (excluding HIV, STD, STI, Microbiology), Radiology Reports, Operative Reports" and other categories.
- It notes that "Behavioral Health information is not available on the portal" as an exception.
- Minor access rules are addressed: under-12 parents can request freely; ages 12–18 require the minor's signature (with an exception for ongoing medical care).

**Weaknesses**: The document does not mention fees or timelines for fulfillment, which would be useful in a FAQ about obtaining records. There is no mention of HIPAA rights or the legal basis for patient access.

## 5. PATIENT-CENTEREDNESS

**Strengths**:
- Explicitly structured around patient questions — the document takes the patient's perspective throughout.
- Clearly promotes electronic submission as the "preferred method" and mentions MyChart and Verisma portal options.
- Lists specific record types available via MyChart, helping patients understand what they can access electronically.
- Provides a memorable phone number (646-NYP-4ROI) with business hours for live assistance.
- Addresses edge cases patients commonly face: minor children, deceased family members, radiology films and pathology slides, physician office records.
- Notes the form is "available on the NYP website at www.nyp.org/HIM in English, Spanish and Chinese" — multilingual availability is mentioned.

**Weaknesses**:
- The FAQ requires "2 forms of picture identification available to scan into the portal when using the Verisma portal." This is a notable burden — HIPAA requires reasonable identity verification but does not mandate two forms of photo ID. The document does not explain why two are needed.
- No mention of HIPAA Right of Access, patient rights, or legal entitlement to records.
- No mention of fees, cost expectations, or fee limits.
- No mention of response timelines (HIPAA requires response within 30 days).
- No mention of electronic health information (EHI) export or bulk data access under the 21st Century Cures Act.
- The phrase "As a last option the paper form can be submitted" could discourage patients who prefer or need paper submission, though it may simply reflect a practical preference for electronic processing.

## 6. COMPLIANCE

As a FAQ document rather than a legal authorization form, compliance issues are limited. However, several observations are relevant:

- **Two forms of photo ID**: The statement "You will need 2 forms of picture identification available to scan into the portal when using the Verisma portal" could constitute an unreasonable barrier under HIPAA's identity verification requirements, which permit reasonable verification but do not require two photo IDs.
- **Paper as "last option"**: Framing paper submission as "a last option" could be seen as discouraging a legitimate submission method, though it stops short of refusing paper submissions.
- **No fee disclosure**: The FAQ does not mention any costs associated with obtaining records, which is a missed opportunity for transparency (though the companion form-1 does mention "reasonable fees to recover costs").
- **No timeline disclosure**: No mention of how long fulfillment takes or the 30-day HIPAA requirement.
- **Minor consent ages 12–18**: The requirement that "Parents of minors between the age of 12 and 18 must have the minor child sign the Authorization Form" appears consistent with New York State law regarding adolescent consent.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Two photo IDs required for Verisma portal**: "You will need 2 forms of picture identification available to scan into the portal when using the Verisma portal." Requiring two forms of photo ID for electronic submission is burdensome and may exceed what HIPAA considers reasonable verification. Many patients may not have two photo IDs readily available in scannable format.

### ⚠️ AMBIGUITIES
- **Paper form discouraged**: "As a last option the paper form can be submitted. You will need to be sure to legibly complete each field on the form." The phrase "last option" and the admonition about legibility could discourage patients from using a legitimate submission channel without clearly explaining why electronic is preferred.
- **No fee or timeline information**: For an FAQ about obtaining medical records, the absence of any mention of costs or turnaround time is a significant gap. Patients reading this document have no way to set expectations about either.
- **"The hospital can assist you with creating this account"** — for MyChart — is vague about where and how to get this assistance.

### ✨ BRIGHT SPOTS
- **Dedicated vanity phone number**: "646-NYP-4ROI (646-697-4764)" is a clever, memorable number with stated business hours — an unusually patient-friendly touch.
- **Multilingual form availability**: Noting the authorization form is available "in English, Spanish and Chinese" directly in the FAQ is helpful for a diverse patient population in New York City.
- **MyChart record type transparency**: Listing exactly which record categories are and aren't available through the portal (including the Behavioral Health exclusion) gives patients clear expectations before they begin the process.
- **Logical submission hierarchy**: Presenting three tiers of submission (MyChart → Verisma → paper) with the electronic options first reflects a modern, patient-friendly approach to records access.
