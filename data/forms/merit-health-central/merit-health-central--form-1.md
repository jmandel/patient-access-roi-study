# Merit Health Central — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is form **HIM-1406**, titled **"Patient Request for Health Information"**, a single-page ROI authorization form in English. The form number and revision trail ("04/18 (Rev. 08/18, 01/20, 02/20, 06/21, 11/23)") indicate it is a standardized CHS (Community Health Systems) document that has been revised six times since its 2018 introduction. The most recent revision is November 2023.

A companion document, form-2.pdf (HIM-1406S), is a Spanish translation with identical structure and fields. Together these two forms represent the complete patient-facing ROI offering from Merit Health Central. The notes also mention an online request alternative via Swellbox, which is separate from these downloadable PDFs.

Notably, the form's title — "Patient Request for Health Information" — frames it explicitly as a patient access form, not a generic third-party release authorization. The recipient options ("Myself / Personal Representative / Other Third Party") confirm this dual-purpose design but with a patient-first orientation.

## 2. FINDABILITY

The form was **very easy to locate**. According to retrieval notes, a single web search for "Merit Health Central Jackson MS authorization release health information medical records form PDF" immediately surfaced the dedicated medical records request page at `https://www.merithealthcentral.com/request-medical-records`. The page provides clearly labeled "English" and "Spanish" download links.

The URL path (`/request-medical-records`) is descriptive and intuitive. The page sits under "Patients & Visitors" navigation, a natural location. The source URL for the PDF itself (`/Uploads/Public/Documents/all-new-documents/HIM-1406.pdf`) is less user-friendly but functional.

The page also distinguishes between patient/patient representative requests and provider requests, and includes an FAQ addressing authorization expiration, charges, and who can request records — providing helpful context before the patient even downloads the form.

## 3. TECHNICAL ACCESSIBILITY

The form performs well as a digital artifact:

- **Text layer**: Full extractable text (2,553 characters). Not a scan.
- **Fillable fields**: **66 interactive form fields** — an exceptionally high count for a single-page form. This means virtually every input area (text boxes, checkboxes, date fields) is digitally fillable.
- **File size**: 102,982 bytes (~100 KB) — appropriately compact for a 1-page PDF with no embedded images.
- **Fonts**: 6 fonts embedded, indicating designed typography rather than a scan.
- **Embedded images**: 0 — clean, text-based design.
- **Digital-first**: This is clearly a born-digital document designed for on-screen completion, not a scanned paper form.

The field names array is empty in metadata (the tool may not have extracted names), but the 66-field count indicates comprehensive interactive coverage of all form areas.

## 4. CONTENT DESIGN

**Length**: One page. This is impressively concise for the amount of information covered — patient demographics, facility identification, record type selection, sensitive information consent, delivery method, recipient designation, and signatures all fit on a single page.

**Organization**: The form follows a logical top-to-bottom flow:
1. Patient Information (name, DOB, phone, email, address)
2. Facility identification ("I am requesting my records from:")
3. Record type selection (12 checkbox categories plus "Other")
4. Sensitive information disclosure (5 categories)
5. Delivery method selection
6. Recipient designation
7. Signature block

**Language**: Generally plain and direct. Section headers are clear questions: "What records do you want to receive or have disclosed to the recipient noted?" and "How would you like your records delivered?" The only dense text is the email risk disclaimer: *"I understand that there is a risk to me when my information is transmitted via an unsecured e-mail system, and the information could be accessed by a third party during the transmission process."*

**Record type granularity**: The form offers 12 specific record categories: Progress Notes, Emergency Room Record, Discharge Summary, History and Physical, Consultation(s), Lab Reports, Pathology Report, Operative Note(s), Imaging/X-Ray Films, Imaging/X-Ray Reports, Entire Record, and Fetal Heart Monitor Strips, plus a free-text "Other" field. This gives patients meaningful control over scope.

**HIPAA acknowledgment**: The footer states: *"This Healthcare Facility recognizes a patient's right under HIPAA to access copies of his/her health information. There may be charges associated with processing a request and producing requested records."* This is placed at the bottom of the form, where it could be easily missed, but it does explicitly reference the patient's right.

## 5. PATIENT-CENTEREDNESS

This form is **unusually patient-centered** for an ROI document:

- **Patient access framing**: The title "Patient Request for Health Information" and the first recipient option ("Myself") make clear this is designed for patients requesting their own records, not just third-party releases.
- **Date range**: Includes date-of-service range fields ("____/____/________ through ____/____/________") for scoping requests.
- **Delivery method options**: Offers five delivery methods:
  - Paper
  - Email (with risk acknowledgment)
  - Removable Media (DVD, USB, CD-ROM) — with password-protected or unprotected options
  - Mail to specified address
  - In-person pickup
- **Sensitive information controls**: Patients can granularly authorize disclosure of alcohol abuse, drug abuse, communicable diseases/HIV, genetic testing, and psychiatric/behavioral diagnoses — each with its own checkbox.
- **Spanish version**: A fully translated Spanish form (form-2.pdf) is available alongside the English version.
- **Online alternative**: The Swellbox portal offers an entirely digital submission pathway as an alternative to the PDF.

**Gaps**: The form does not mention electronic health information (EHI) export, bulk data, or FHIR-based access. There is no mention of turnaround time expectations. The HIPAA reference is generic ("recognizes a patient's right") rather than citing the specific regulation (45 CFR § 164.524). No fee schedule is provided — only the vague statement that "there may be charges."

## 6. COMPLIANCE

The form is **largely compliant** with no obvious illegitimate barriers:

- **No notarization required**
- **No in-person-only submission requirement** — multiple delivery and submission methods are available
- **No unreasonable expiration** — no expiration date is mentioned on the form at all
- **No broad consent bundling** — the form is solely for records release
- **Witness signature field** is present but appears optional (no language mandating it)
- **Charges disclosure**: The statement "There may be charges associated with processing a request and producing requested records" is vague but not uncommon. It does not specify amounts or cite fee limits, which could leave patients uncertain about costs.

The email risk disclaimer is standard and proportionate — it informs the patient of unsecured email risks without prohibiting email delivery.

One potential concern: the form includes a "Patient Label" area (likely for an adhesive barcode/label applied in-facility), which suggests the form may also be used in face-to-face contexts, but this does not restrict remote submission.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **66 fillable fields on a single page**: This is an exceptionally high interactive field count, meaning the form can be completed entirely on-screen — a genuine digital-first design.
- **Five delivery methods including removable media with password protection**: Offering DVD/USB/CD-ROM delivery with an explicit password-protection option goes well beyond what most facilities provide.
- **Spanish translation available**: A complete Spanish version (HIM-1406S) with identical structure is provided alongside the English form — not as an afterthought but as a parallel download option.
- **Online alternative via Swellbox**: Patients who prefer not to download, fill, and submit a PDF can use a web-based request portal instead.
- **Patient-first title and structure**: Naming the form "Patient Request for Health Information" (not "Authorization for Release" or similar) and listing "Myself" as the first recipient option signals a patient-access orientation.

### ⚠️ AMBIGUITIES

- **Fee disclosure is vague**: "There may be charges associated with processing a request and producing requested records" gives no indication of amounts, fee schedules, or HIPAA's cost-based fee limits. A patient cannot anticipate costs before submitting.
- **Submission method unclear**: The form specifies how records should be *delivered* but does not state how the *completed form* should be submitted (email, fax, mail, in-person, or via portal). Patients must presumably check the website or call for submission instructions.
- **Witness signature purpose**: A "Witness Signature" field is included with no explanation of when or whether a witness is required, which could cause confusion for patients completing the form at home.
