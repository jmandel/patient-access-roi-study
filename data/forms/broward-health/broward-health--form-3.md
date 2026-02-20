# Broward Health — Form 3 Evaluation

## Document: Haitian Creole ROI Authorization Form

---

## 1. DOCUMENT IDENTIFICATION

Form-3.pdf is the **Haitian Creole translation** of Broward Health's "Authorization for Release of Confidential Medical Information" (titled "OTORIZASYON POU DIVILGE ENFÒMASYON MEDIKAL KONFIDANSYÈL"). It is one of four language versions of the same ROI form found on the Broward Health Medical Records Request page:

- **form-1.pdf**: English (image-only scan, no text layer)
- **form-2.pdf**: Spanish (text layer, digital)
- **form-3.pdf**: Haitian Creole (text layer, digital) ← *this document*
- **form-4.pdf**: Portuguese (text layer, digital)

All four forms share the same form number (H-1007 - 119550), revision date ((R) 8/2014), and structural layout. The footer indicates a two-part carbonless form: "WHITE - MEDICAL RECORD" and "CANARY - PATIENTS," confirming this was originally designed as a physical carbonless-copy paper form.

The form is a general-purpose ROI authorization — it covers both patient self-access ("MWENMENM") and third-party release ("LÒT MOUN"), but is not specifically tailored for patient access requests under HIPAA's Right of Access.

---

## 2. FINDABILITY

Per retrieval notes, the form was found on the **Medical Records Request page** at `https://www.browardhealth.org/patients-and-visitors/information-request/medical-records-request`, reachable in **3 clicks** from the homepage (Patients and Visitors > Information Request > Medical Records Request). The page explicitly links all four language versions.

The source URL is `https://www.browardhealth.org/-/media/broward-health/files/patients-and-visitors/roi_creole.ashx`, which uses a reasonably descriptive filename (`roi_creole`). However, direct downloads via curl were **blocked by Cloudflare bot protection**, requiring browser-based access. This means a patient using assistive technology or automated download tools may struggle to retrieve the form.

The page itself is well-organized and also offers an **online request option** via Swellbox, providing an alternative to the PDF. The Creole version being linked alongside the other languages on the same page is a positive accessibility feature.

---

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 78,041 bytes (78 KB) — compact and appropriate for a 1-page form.
- **Page count**: 1 page.
- **Text layer**: Yes — full extractable text (5,225 characters). This is notably better than the English version (form-1.pdf), which is an image-only scan with no text layer.
- **Fillable fields**: 0. The form has no interactive PDF form fields. All blanks are represented as underscores (`______`) in the text layer, requiring the patient to print and handwrite entries.
- **Font count**: 10 fonts embedded.
- **Embedded images**: 0 — the form is purely text-based, not a scan.
- **PDF design**: This is a digitally-generated PDF (not a scan), making it searchable and screen-reader compatible. However, the lack of fillable fields means it cannot be completed electronically — it must be printed, filled by hand, and then faxed or delivered.

The form footer references "ADDRESSOGRAPH" and the carbonless copy color scheme ("WHITE - MEDICAL RECORD / CANARY - PATIENTS"), confirming it was designed for use in a physical hospital setting with an addressograph machine, not for digital completion.

---

## 4. CONTENT DESIGN

**Length**: 1 page — densely packed but everything fits on a single page, which is appropriate for an authorization form.

**Structure and organization**: The form follows a logical sequence:
1. Medical record number and facility location
2. Sensitive information classifications requiring separate initialing (Drug & Alcohol, Mental Health, HIV/AIDS, Genetic)
3. Florida law disclosure about privileged records
4. Patient identification fields (name, address, DOB, phone)
5. Authorization designating who releases to whom
6. Delivery method (pick up or US mail; paper or encrypted CD)
7. Purpose of release
8. Date range of treatment
9. Specific record types with checkboxes (approximately 15 categories)
10. Patient rights disclosures (4 bullet points)
11. Expiration clause
12. Signature lines (patient, Broward Health representative, witness)

**Clarity**: The form is written in **Haitian Creole throughout**, making it genuinely accessible to Creole-speaking patients — not just a token translation of the title. However, some English terms are left untranslated in the footer ("ADDRESSOGRAPH," "ROI CONSENT," "WHITE - MEDICAL RECORD," "CANARY - PATIENTS," "Medical Records Department"), which could cause confusion.

**Record type options**: The form offers a granular list of approximately 15 record types including: complete medical record, history and physical ("Istorik ak Fizik"), lab reports with date ranges, discharge summary, problem list, pathology report, consultation, radiology reports with date ranges, surgical report, physician progress notes, physician orders, physical therapy records, and nursing notes. It also includes unusual options like "Antrevi avèk Medya" (media interview) and "Foto" (photos) with purpose options for media, public relations, or other.

**Readability**: The Creole text uses natural, accessible language appropriate for the target audience. The legal disclosure section is necessarily complex but follows standard authorization language. The four bullet-pointed rights disclosures at the bottom are marked with "x" characters rather than proper bullet points or checkboxes.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: The form accommodates both scenarios with a check option: "MWENMENM" (myself) or "LÒT MOUN" (other person). When "MWENMENM" is selected, the patient is requesting their own records. However, the form is not specifically designed or streamlined for patient access — it's a general-purpose authorization that happens to include self-access as one option.

**Delivery format options**: The form offers two delivery methods:
- "Mwen pral pase pran kopi dosye m yo" (I will pick up copies)
- "Voye kopi dosye m yo pa lapòs Amerikèn" (Send copies via US mail)

Format options are limited to **paper ("Fòm Papye")** or **encrypted CD ("CD ki kode")**. There is **no option for electronic delivery** (email, patient portal, or secure electronic transfer). The encrypted CD option, while more modern than paper alone, is dated — optical drives are uncommon in 2026.

**HIPAA Right of Access**: The form does reference CFR 164.524 in the rights disclosure: "Mwen konnen mwen ka enspekte oswa fè kopi enfòmasyon yo pral divilge a, selon dispozisyon ki etabli nan Kòd Règleman Federal la, CFR 164.524 (ap gen frè rezonab pou peye pou sa)." This is a positive inclusion, though it is buried in dense disclosure text.

**EHI export**: No mention of electronic health information export, bulk data, or FHIR-based access.

**Scope options**: Patients can specify date ranges for treatment, select from ~15 record types, or request the complete record with exceptions. This offers good granularity.

**Multilingual access**: The very existence of this Creole translation — alongside Spanish and Portuguese versions — demonstrates awareness of the South Florida patient population. This is a meaningful accessibility feature.

---

## 6. COMPLIANCE

**Expiration**: The authorization expires **six months** from the date of signature: "Amwenske yo anile li, otorizasyon sa a pral ekspire sis mwa apatide dat yo siyen l pi ba a." Six months is a standard and reasonable expiration period.

**Voluntary nature**: The form clearly states authorization is voluntary and that treatment, payment, and benefit eligibility will not be conditioned on signing: "mwen ka refize siyen, e establisman Broward Health yo pap baze tretman mwen, peman m ni elijibilite m pou benefis sou desizyon mwen pran."

**Right to revoke**: Clearly stated — revocation must be in writing to the Medical Records Department.

**Minimum necessary**: The form states Broward Health will disclose only the minimum necessary information.

**Re-disclosure warning**: Included — the form warns that information disclosed may be re-disclosed by the recipient.

**Sensitive information**: The form requires **separate initialing** for four categories of sensitive records (Drug & Alcohol treatment, Mental Health, HIV/AIDS, Genetic), in compliance with Florida law and federal substance abuse confidentiality regulations (42 CFR Part 2).

**Witness requirement**: The form includes a **witness signature line**, which is not required by HIPAA for patient access requests. While Florida law may require witnesses for certain authorizations, requiring a witness for a patient's own record request adds a procedural barrier.

**No notarization required**. No in-person submission mandate — submission methods include fax (per the main webpage listing fax numbers for each facility).

**Fee disclosure**: The CFR 164.524 reference mentions "frè rezonab" (reasonable fees) but does not specify dollar amounts or a fee schedule.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No electronic delivery option**: In 2026, offering only paper or encrypted CD as delivery formats — with no email, portal, or secure electronic transfer — creates a significant barrier to timely patient access. The encrypted CD option is particularly anachronistic.

### ⚠️ AMBIGUITIES

- **Witness requirement unclear**: The form includes a witness signature line but does not explain when a witness is required or what role the witness serves. For a patient simply requesting their own records, requiring a witness may be an unnecessary barrier, but the form doesn't clarify whether the witness is mandatory or optional.
- **"Broward Health authorized signature" line**: The form requires a signature from a "Siyati Otorize nan Broward Health" representative, suggesting the form may need to be completed in person or processed by staff before taking effect. This is unclear — does a patient fill out their part and submit, or must a Broward Health employee co-sign at the time of submission?

### ❌ ERRORS

- **Revision date of August 2014**: The form footer reads "H-1007 - 119550 - (R) 8/2014 CREOLE" — this form has not been updated in over 11 years. The filename of the English version suggests a March 2020 scan, but the Creole form itself dates to 2014.
- **Garbled text in sibling forms**: While form-3 (Creole) itself has clean text extraction, the Spanish (form-2) and Portuguese (form-4) versions show encoding artifacts in their expiration clauses (e.g., "([FHSWR\u0003FXDQGR\u0003VH\u0003OD\u0003UHYRTXH" in Spanish). This suggests a systematic font encoding issue across the translated forms that may affect how they render in some PDF viewers.
- **Mixed-language footer**: The footer contains untranslated English institutional text ("ADDRESSOGRAPH," "ROI CONSENT," "WHITE - MEDICAL RECORD," "CANARY - PATIENTS"), which is inconsistent with the goal of providing a fully Creole-language form.

### ✨ BRIGHT SPOTS

- **Genuine multilingual commitment**: Providing the ROI form in four languages (English, Spanish, Haitian Creole, Portuguese) reflects thoughtful attention to the linguistic diversity of South Florida's patient population. Haitian Creole and Portuguese translations are rare among U.S. healthcare providers.
- **Online alternative available**: The Swellbox web-based wizard (`swellbox.com/broward-health-wizard.html`) provides a digital-first alternative to the PDF, potentially bypassing many of the PDF form's limitations.
- **CFR 164.524 citation included**: Explicitly referencing the HIPAA Right of Access regulation in the patient rights disclosures is more transparent than many ROI forms, even if the reference is buried in legal text.
- **Granular record type selection**: Offering ~15 specific record categories with date range options gives patients meaningful control over the scope of their request.
