# Anaheim Global Medical Center — form-1 Evaluation

## 1. DOCUMENT IDENTIFICATION

**form-1.pdf is NOT a Release of Information (ROI) or authorization form.** It is the hospital's **Notice of Privacy Practices (NPP)**, effective January 31, 2016. The title reads: "ANAHEIM GLOBAL MEDICAL CENTER (AGMC) NOTICE OF PRIVACY PRACTICES — THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION."

This was the only patient-facing document of any privacy relevance found on the AGMC website. Per the retrieval notes, no actual ROI/authorization form PDF is published anywhere on the site. The hospital directs patients to a third-party portal (ChartRequest at `https://app.chartrequest.com/m/KPC-locations`) for medical records requests. All sister facilities under parent system KPC Health follow the same pattern — none publish downloadable ROI forms. The comprehensive PDF scan of the AGMC website found only financial assistance policies, service modification notices, and this NPP.

This document is being evaluated because it is the closest privacy-related document available and because its content (particularly Section V, "Your Rights Regarding Your Protected Health Information") describes the process patients must follow to access their records.

## 2. FINDABILITY

**The NPP itself** is findable on the AGMC website, linked from the Notice of Privacy Practices page. The source URL (`/wp-content/uploads/2019/06/AGMC-NPP-2016-English.pdf`) is reasonably descriptive.

**An actual ROI form**, however, is effectively unfindable as a downloadable document. The retrieval agent tried multiple search strategies:
- Direct web searches for authorization/release forms returned results for the wrong hospital (AHMC Anaheim Regional Medical Center — a different system).
- Browsing the AGMC website — homepage, Patient & Family Resources, billing, contact — yielded no ROI form.
- Searching for KPC Health system-level forms also returned nothing.
- The "Access Medical Records" link on the Patient & Family Resources page redirects to ChartRequest, a third-party portal requiring account creation.

The retrieval difficulty was rated **Hard**. A patient looking for a form to download, fill out, and submit would be unable to find one.

## 3. TECHNICAL ACCESSIBILITY

The NPP PDF has a functional text layer (23,164 characters extracted cleanly), 7 fonts, and 9 embedded images. It is **not** a scanned image — it was created digitally. The file size is 303,793 bytes across 9 pages, which is reasonable.

However, the document has **zero fillable form fields** despite including signature/date lines on the last page ("Signature of Patient or Representative" and "Printed Name of Patient or Representative" with date lines). These are static text — a patient would need to print, sign, and return the document physically.

The PDF page numbering uses an unusual format ("Page !1", "Page !2", etc.) with exclamation marks, suggesting either a template rendering error or an unusual design choice that was never corrected.

## 4. CONTENT DESIGN

**Length**: 9 pages, which is standard for a Notice of Privacy Practices. The document covers the required HIPAA NPP content comprehensively.

**Organization**: The document follows a logical structure with numbered Roman numeral sections:
- I. Who Presents this Notice
- II. Privacy Obligations
- III. Permissible Uses and Disclosures Without Written Authorization (subsections A–X)
- IV. Uses and Disclosures Requiring Written Authorization (A–E)
- V. Your Rights Regarding Your Protected Health Information (A–H)
- VI. Changes to this Notice
- VII. Privacy Office contact information

**Clarity**: The language is dense legal prose throughout. Sentences are long and complex — e.g., "If you are a parent or legal guardian of a minor, certain portions of the minor's medical record will not be accessible to you (for example, records pertaining to health care services for which the minor can lawfully give consent and therefore for which the minor has the right to inspect or obtain copies of the record (i.e. abortion or mental health treatment); or the health care provider determines, in good faith, that access to the patient records requested by the representative would have a detrimental effect on the provider's professional relationship with the minor patient or on the minor's physical safety or psychological well-being." This is a single sentence spanning 100+ words with nested parentheticals.

**Layout**: The text appears cleanly formatted with adequate spacing between sections. Subsections are labeled with letters (A, B, C…) and use bullet points for sub-items. The overall visual hierarchy is acceptable for a legal document, though it is not particularly patient-friendly.

## 5. PATIENT-CENTEREDNESS

**This document is not designed for patients requesting records.** It is an informational notice, not a request form. That said, it does describe patient rights relevant to record access:

- **Section V.D (Right to Inspect and Copy)** tells patients they "may request access to your medical record file and billing records" and instructs them to "obtain a record request form from the Hospital Privacy Office and submit the completed form to the Hospital Privacy Office." This implies a form exists but is only available from the Privacy Office — not online.

- **Fees**: The document states "If you request copies of paper records you will be charged the reasonable cost of copies in accordance with federal and state law. You also will be charged for the postage costs, if you request that the copies be mailed to you." This is a compliant disclosure but makes no mention of electronic format options.

- **No electronic delivery options** are mentioned anywhere. No reference to patient portals, email, or electronic health information (EHI) export.

- **No HIPAA Right of Access citation** appears in Section V.D, though Section III.B does reference "45 C.F.R. § 164.524" in the context of permissible disclosures to the patient. The right to inspect and copy section itself does not cite the specific regulation.

- **No mention of turnaround times** for record requests.

- The document repeatedly directs patients to "obtain a [specific] form from the Hospital Privacy Office" for various actions (restrictions, revocations, amendments, accountings, record access) — at least 5 different forms referenced, none of which appear to be available online.

## 6. COMPLIANCE

Since this is an NPP rather than an ROI form, compliance evaluation applies differently:

- **The NPP itself** appears to cover the required elements under 45 CFR § 164.520, including descriptions of permissible uses/disclosures, patient rights, complaint procedures, and Privacy Officer contact information.

- **Barrier concern**: The instruction to "obtain a record request form from the Hospital Privacy Office" without providing any online access to that form creates a practical barrier. Patients must either call or visit in person to even begin the process.

- **ChartRequest portal barrier**: The online alternative (ChartRequest) requires account creation before a patient can even see or submit a request. This intermediary step adds friction and may discourage patients.

- **Outdated document**: The NPP is dated January 31, 2016 — over 10 years old at time of evaluation. It predates the 2018 HIPAA Right of Access initiative enforcement and the 21st Century Cures Act information blocking rules (effective 2021). It makes no reference to electronic health information, information blocking prohibitions, or patients' rights under more recent regulations.

- **Breach notification timeline**: The NPP states notification "no later than 5 business days after discovery of the breach." The HIPAA Breach Notification Rule requires notification within 60 calendar days of discovery (45 CFR § 164.404(b)), so 5 business days is actually more protective than required — though this may reflect California state law requirements.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No ROI form available online at all.** The hospital publishes no downloadable authorization or records request form. Patients are directed either to the Privacy Office in person or to a third-party portal (ChartRequest) requiring account creation. This effectively gates the records request process behind either a physical visit or registration with a commercial service.

- **ChartRequest portal requires account creation.** The only online pathway to request records forces patients to create an account with a third-party vendor before they can even view the request form or process. This is a meaningful barrier that may deter patients from exercising their right of access.

### ⚠️ AMBIGUITIES

- **Five different forms referenced, none available.** The NPP directs patients to obtain forms from the Privacy Office for restrictions, revocations, amendments, accounting of disclosures, and record access — but none of these forms are available on the website. It is unclear whether they are available by phone request, mail, or only in person.

- **"Reasonable cost of copies"** is mentioned without specifying what that cost is, leaving patients unable to anticipate expenses.

### ❌ ERRORS

- **Page numbering defect**: Every page footer reads "Page !1", "Page !2", etc. with an extraneous exclamation mark. This appears to be a rendering bug (possibly from Apple Pages or a similar word processor's auto-numbering feature) that was never corrected, suggesting limited quality review of the published document.

- **Severely outdated (2016)**: The NPP predates the 21st Century Cures Act and recent HIPAA enforcement guidance. It contains no mention of electronic health information rights, information blocking, or patient access to data in electronic format — all of which are now legally relevant.

### ✨ BRIGHT SPOTS

- **Explicit 45 C.F.R. § 164.524 reference**: Section III.B correctly cites the HIPAA provision governing patient access to PHI in a designated record set, and also references § 164.528 for accounting of disclosures. This is more specific than many NPPs.

- **Breach notification commitment of 5 business days** is substantially faster than the HIPAA-required 60 calendar days, reflecting either California state law or an organizational commitment to prompt notification.

- **Comprehensive coverage of California-specific protections**: The NPP addresses Highly Confidential Information categories (Section IV.E) including mental health, substance abuse, HIV/AIDS, genetic testing, child abuse, domestic violence, and sexual assault — reflecting California's stronger privacy protections beyond base HIPAA requirements.
