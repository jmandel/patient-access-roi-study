# Grady Memorial Hospital — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-3 is a **3-page combined document** bundling (1) a COVID-19-era cover page with medical records request instructions, (2) pages 1–2 of the "Authorization for Disclosure of Protected Health Information (PHI)" form, and (3) a documentation requirements reference section. The source URL (`Medical-Records-Requests-combined.pdf`) confirms this is intended as a one-stop package.

Pages 2–3 of this document are identical to form-2.pdf (the older authorization form, revision "24-40 (Rev 9/08; 3/12, 5/15)"), which lacks the updates found in form-1.pdf (revised 2/22). Form-1 is the current/primary standalone authorization form with a more modern layout and additional options (e.g., date-of-service range, diagnostic imaging, encrypted email delivery). Form-3 thus packages an **outdated version** of the authorization with a COVID-era instruction sheet.

## 2. FINDABILITY

Per the retrieval notes, both web searches immediately surfaced Grady's forms, and all three PDFs are directly linked from https://www.gradyhealth.org/medical-records/. No login, portal access, or bot-blocking was encountered. The URL path `wp-content/uploads/Medical-Records-Requests-combined.pdf` is reasonably descriptive. The medical records page itself provides clear instructions and direct download links. Finding this form required minimal effort — one search or a couple of clicks from the homepage.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present throughout all 3 pages; text is extractable (7,698 characters). Not an image-only scan.
- **Fillable fields**: Zero (0). The PDF has no interactive form fields despite having labeled blanks (Patient Name, Date of Birth, etc.) and checkboxes rendered as Ethiopian characters ("፬"). A patient must print and hand-fill or use a PDF annotation tool.
- **File size**: 463,478 bytes for 3 pages — reasonable, though larger than form-1 (195 KB / 2 pages) or form-2 (144 KB / 2 pages), likely due to the 2 embedded images.
- **Fonts**: 14 fonts embedded.
- **Encoding issues**: The text contains "of¿cers" (page 3) and "Certi¿cate" where "fi" ligatures were lost during text extraction, suggesting font encoding problems. The Ethiopian "፬" characters used as checkbox markers (Unicode U+1364) are unconventional and will not render as expected checkboxes in many contexts.
- **Digital-first design**: This is a digitally-created document (not a scan), but it was designed for print workflows. The lack of fillable fields and the instructions to "Drop the completed form" or "Mail the completed form" confirm a paper-first mindset.

## 4. CONTENT DESIGN

**Length and structure**: 3 pages — the first page is an instruction/cover sheet, pages 2–3 are the authorization form with a documentation requirements section appended. The structure is logical: instructions → form → reference material.

**Cover page clarity**: The cover page is written in relatively plain language. Instructions are organized with clear headers ("Required Documents," "Submitting Medical Records Requests," "Receiving Medical Records," "Fees," "Continuing Care Requests"). Submission options (drop-off, mail) and delivery options (electronic, mail) are broken out with estimated timelines ("3-5 business days for processing," "2-business day after processing" for electronic, "7-10 business days" for mail).

**Authorization form (pages 2–3)**: The form opens with "PLEASE COMPLETE THE FORM IN ITS ENTIRETY WHERE CHECK MARKS ARE PRESENT" in what appears to be a bold header — a somewhat demanding tone. Field layout is dense with patient demographics, "Request Information From" / "Release Information To" sections, record type checkboxes, release format/method, and legal sections all compressed into roughly 1.5 pages. The visual hierarchy is adequate — section labels are distinguishable — but the overall design feels cramped.

**Readability**: The legal sections on page 3 (Authorization as Condition to Treatment, Potential Re-disclosure, liability waiver) use accessible phrasing: "I understand that persons who get PHI about me from Grady could give my information to others." However, the form also uses formal constructs like "I will not hold Grady, its of¿cers, trustees, employees, agents, or contractors responsible for anything that may happen from the use or release of my PHI" — a liability waiver that reads as legalese.

**Revision date**: "24-40 (Rev 9/08; 3/12, 5/15)" — last revised May 2015. The cover page references COVID-19 but the underlying form has not been updated since 2015. Form-1, by contrast, was revised 2/22.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose "Authorization for Disclosure" form, not a patient-access-specific form. The "Request Information From" / "Release Information To" fields frame it as a transfer between parties. However, the cover page contextualizes it for patients requesting their own records, and the documentation requirements section includes a "Patients Requesting Their Own Medical Records" category.

**Scope options**: The form offers granular record-type checkboxes (17+ categories including Clinic Progress Notes, Discharge Summary, Lab Reports, All Records, Hospital Progress Notes, EKG/Cardiology Reports, Radiology Reports, HIV/AIDS, History and Physical, Pathology Reports, Radiology Images, Mental Health Care or Services, Consultation Notes, Operative Reports, Psychotherapy Notes, ED Notes, and an "Other" option, plus a separate checkbox for "Diagnosis, Treatment and/or Referral for Alcohol and/or Drug Abuse"). However, unlike form-1, there is **no date-of-service range** field on pages 2–3 of this document — patients cannot limit the time period.

**Format/delivery options**: The form itself lists only "Paper" and "CD/DVD" for format, and "Mail," "Pick-up," and "Fax (continuing care only)" for method. Notably, **email is not listed on the form** even though the cover page explicitly describes electronic delivery: "If you would like to receive your medical records by email, please provide an email address in the first section of the authorization form." This creates a contradiction — the cover page promises email delivery, but the form has no email checkbox and the only email field is in the patient demographics section.

**HIPAA Right of Access**: No reference to HIPAA § 164.524, patient rights under HIPAA, or the Right of Access rule. The form references "Federal and State Law" generally.

**EHI Export**: No mention of electronic health information export, bulk data, or USCDI.

**Fee disclosure**: The cover page states "Charges may apply. These charges generally do not exceed $6.50" and notes "There is no charge to send records to your physician" for continuing care. This is a positive disclosure, though the word "generally" introduces ambiguity.

## 6. COMPLIANCE

**Photo ID requirement**: "Include a copy of a government issued photo ID. Required with each authorization form." HIPAA allows providers to verify identity but does not mandate government-issued photo ID specifically. This could be a barrier for patients who lack such identification.

**Liability waiver**: "I will not hold Grady, its of¿cers, trustees, employees, agents, or contractors responsible for anything that may happen from the use or release of my PHI." This hold-harmless clause is not a HIPAA-valid condition for processing a patient access request, and could intimidate patients.

**Completeness requirement**: "If any section is incomplete, this form may be invalid and the request may not be processed." This warning appears twice. While understandable for operational reasons, it could discourage patients from submitting if they cannot fill every field.

**Authorization expiration**: One year from signing — a standard and reasonable timeframe.

**No notarization required**: The form does not require notarization or witnesses beyond the patient's signature.

**No in-person-only requirement**: The cover page explicitly offers mail and drop-off options, and electronic delivery is described.

**COVID-era instructions**: The cover page states "the Medical Records office is temporarily closed" due to COVID-19 — this language is outdated and may confuse patients visiting the page years after pandemic restrictions ended.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Liability waiver bundled into authorization**: The form requires patients to agree "I will not hold Grady, its of¿cers, trustees, employees, agents, or contractors responsible for anything that may happen from the use or release of my PHI." Bundling a liability waiver with a records request authorization may deter patients and is not a HIPAA-permitted condition for access.
- **Mandatory government-issued photo ID**: Requiring photo ID "with each authorization form" could be a barrier for patients without such identification (e.g., elderly, homeless, undocumented individuals) — a notable concern for a safety-net hospital serving Atlanta's underserved populations.

### ⚠️ AMBIGUITIES
- **Email delivery contradiction**: The cover page promises electronic delivery via email and instructs patients to "provide an email address in the first section of the authorization form," but the authorization form itself only offers Paper, CD/DVD, Mail, Pick-up, and Fax as format/method options — no email checkbox or email delivery option exists on the form.
- **Fee language**: "Charges may apply. These charges generally do not exceed $6.50" — the word "generally" leaves open the possibility of higher charges without specifying when or why.
- **"Temporarily closed" language**: The COVID-19 closure notice on the cover page is presented in the present tense with no date, making it impossible for a patient to know whether this is current or obsolete.

### ❌ ERRORS
- **Outdated form version**: This document packages the 2015-revised authorization (Rev 9/08; 3/12, 5/15) while Grady has a newer 2022-revised form (form-1.pdf, Rev 9/08; 3/12, 5/15, 2/22) with additional features including date-of-service fields, diagnostic imaging options, and an encrypted email delivery option.
- **Character encoding defects**: The "fi" ligature is consistently broken, rendering as "of¿cers," "Certi¿cate," "identi¿cation," and "of¿ce" throughout the text layer. The checkbox markers render as Ethiopian fidel characters ("፬" / U+1364) rather than standard checkboxes — a font mapping issue.
- **Grammatical error**: "2-business day" should be "2-business-day" (hyphenation) on the cover page.

### ✨ BRIGHT SPOTS
- **Bundled instructions with form**: The combined document concept — providing a cover sheet explaining the process, submission options, fees, and timelines alongside the form — is genuinely helpful. Few organizations package operational guidance this clearly with the form itself.
- **Processing time estimates**: Specific timelines ("3-5 business days for processing," electronic delivery "within 2-business day after processing," mail "within 7-10 business days") set clear patient expectations.
- **Fee transparency**: Disclosing the approximate maximum fee ($6.50) and noting no charge for continuing care requests is patient-friendly.
- **Continuing care facilitated**: "To have records sent to a physician, please provide the physician's office information... There is no charge to send records to your physician" — a clear and helpful provision.
