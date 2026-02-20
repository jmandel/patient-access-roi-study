# Goleta Valley Cottage Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-1.pdf is the current English-language **"Authorization for Disclosure of Health Information"** (Form NS1405, Rev. 08/2025) used across the entire Cottage Health system. It is not specific to Goleta Valley Cottage Hospital; rather, it serves all Cottage Health facilities — patients select from checkboxes: Goleta Valley Cottage Hospital, Santa Barbara Cottage Hospital, Cottage Rehabilitation Hospital, Santa Ynez Valley Cottage Hospital, Cottage Urgent Care, and Pacific Diagnostic Labs (PDL).

Three forms were found for this organization:
- **form-1.pdf** (this document): Current English ROI authorization (Aug 2025 revision), 2 pages, 304 KB
- **form-2.pdf**: Spanish translation of the same form (Form NS1406, Rev. 08/2025), 2 pages, 195 KB
- **form-3.pdf**: Prior English version (Form NS1405, Rev. 06/2025), 2 pages, 349 KB — now superseded

This is a general-purpose disclosure authorization, not a patient-access-specific form — though it does include a "Patient (self)" checkbox under Section C, making it usable for patients requesting their own records.

## 2. FINDABILITY

The form is linked from Cottage Health's medical records page at a clear path: **Home > Patients & Visitors > Accessing Your Medical Records**. The retrieval notes confirm the page was "well-organized and easy to find." The form is also discoverable via standard web searches for Cottage Health medical records.

However, there are friction points:
- The primary website URLs (cottagehealth.org/app/files/public/...) are **blocked by Akamai CDN** for programmatic downloads. The actual accessible URLs are on Azure Blob Storage (`stmlcottagehealthncus001.blob.core.windows.net`), which is not a URL a patient would guess or bookmark.
- The website hosted **both the June 2025 and August 2025 versions** simultaneously at one point, which could cause confusion about which version is current.
- The filename (`NS1405_Authorization_for_Disclosure_of_Health_Information_082025.pdf`) is descriptive and includes the revision date, which is helpful.

The form is also supplemented by an **online electronic request option via Swellbox** (https://www.swellbox.com/cottage-health-wizard.html), providing an alternative to the PDF form.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and complete — full text is extractable via pdftotext (4,392 characters). Not a scan.
- **Fillable fields**: **Zero** interactive form fields despite being a digitally-designed document. The form uses visual checkbox symbols (☐) and blank lines but none are interactive PDF form fields. This means patients must print, hand-fill, and then scan or photograph the form to submit electronically — undermining the stated acceptance of email/fax submission.
- **File size**: 304 KB for a 2-page text document is somewhat large, likely due to 63 embedded fonts and 1 embedded image (presumably the Cottage Health logo).
- **Digital-first design**: The form appears to have been created digitally (not a scan of a paper original), evidenced by the clean text layer and structured layout. However, the lack of fillable fields means it functions as a print-and-fill document despite its digital origin.
- **Font count**: 63 fonts is unusually high for a 2-page document, suggesting complex formatting or font subsetting issues.

The statement "VALID ELECTRONIC SIGNATURES WILL BE ACCEPTED" (Section I) is a positive signal for digital workflow, but without fillable fields, the practical workflow is awkward.

## 4. CONTENT DESIGN

**Structure**: The form is well-organized into 9 lettered sections (A through I), each with a clear heading:
- A: Patient Information
- B: About the Health Information (facility, record type, purpose)
- C: To Whom Information Should Be Given
- D: Delivery Method
- E: Expiration
- F: Your Rights
- G: Restrictions (redisclosure prohibition)
- H: Cost & Time
- I: Authorizing Signature

**Length**: 2 pages is appropriate for the scope covered.

**Language clarity**: Generally clear and reasonably plain. The opening statement — "You may refuse to sign this authorization. Refusal to sign will not affect your ability to obtain services from Cottage Health (CH)" — is patient-friendly and important. However, some passages lean toward legalese, particularly Section G: "The recipient of the protected health information is prohibited from redisclosing the information unless the recipient obtains another authorization from me or unless the disclosure is specifically required or permitted by law."

**Record type options**: The form offers specific checkboxes for: Emergency Dept. Record, Provider (Physician) Notes, Diagnostic Test Results, Operative/Procedure Reports, Radiology Images, Billing, and an "Other" field. This gives patients reasonable control over scope.

**Sensitive categories**: Appropriately calls out Mental Health, Chemical Dependency, HIV, and Reproductive Healthcare as requiring explicit opt-in, with California state law footnotes explaining the requirement.

**Purpose options**: Continuation of Care, Insurance, Legal, Personal files, Other.

## 5. PATIENT-CENTEREDNESS

**Patient access pathway**: Section C includes a "Patient (self)" checkbox, explicitly accommodating patients requesting their own records. This is a general disclosure form, but it does not force patients into a third-party-only workflow.

**Delivery methods** (Section D): Five options are offered:
- MyChart (patient portal)
- Pick-up (appointment only)
- Email
- Fax
- Mail

Offering MyChart delivery is a genuinely patient-friendly option. Email is another strong digital option. The "appointment only" restriction for pick-up adds a small barrier but is operationally understandable.

**Scope control**: Patients can specify dates of service and select specific record types. No option for "all records" or "complete medical record" exists as a checkbox — a patient wanting everything would need to check all boxes or use "Other."

**Rights section** (F): Tells patients they have a right to a copy of the authorization and a right to revoke it. Does not reference HIPAA § 164.524 or the Right of Access specifically, and does not mention electronic health information (EHI) export.

**Cost transparency** (Section H): "There may be a fee for copies of medical records. You will be notified in advance if there are any fees incurred." The fee is waived when records are sent directly to another healthcare provider. The 15-day turnaround commitment is mentioned.

**Alternative access**: The Swellbox online request tool provides an alternative digital pathway, though this is not mentioned on the PDF form itself.

## 6. COMPLIANCE

**Potentially concerning language**:
- "Failure to provide all information requested may invalidate this authorization" — this opening statement could deter patients who don't have every piece of information the form asks for. Under HIPAA, a covered entity may not deny access simply because an authorization is incomplete in non-essential fields.

**Expiration**: "If no date is indicated, this Authorization will expire 12 months after the date of signing this form." A 12-month default is reasonable and standard.

**Submission methods**: Multiple channels are offered — email (medicalrecords@sbch.org), fax (805-749-2879), and mail (P.O. Box 689, Santa Barbara, CA 93102). No in-person-only requirement.

**Electronic signatures**: Explicitly accepted — "VALID ELECTRONIC SIGNATURES WILL BE ACCEPTED" in Section I header.

**Fees**: The "notified in advance" language around fees is somewhat vague but doesn't impose upfront payment as a barrier. The provider-to-provider fee waiver is appropriate.

**Revocation**: Must be submitted as a "signed written request" to HIM at Santa Barbara Cottage Hospital — not unreasonable but could be simpler.

**Representative access**: Properly addresses parent/guardian, conservator, and personal representative scenarios, requiring legal documentation. No notarization requirement.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS
- **Spanish translation available**: Form-2 is a complete Spanish-language version (Form NS1406) — a meaningful accessibility effort for the Goleta/Santa Barbara community.
- **MyChart delivery option**: Offering patient portal delivery alongside email, fax, and mail is a modern, patient-friendly approach that many organizations lack.
- **Electronic signatures explicitly accepted**: The all-caps statement "VALID ELECTRONIC SIGNATURES WILL BE ACCEPTED" removes a common barrier.
- **Online alternative via Swellbox**: Cottage Health offers an online electronic request wizard as an alternative to the PDF, providing a fully digital pathway.
- **Multiple submission channels**: Email, fax, and mail all accepted — no in-person-only requirement.
- **California sensitive-category handling**: Appropriate opt-in checkboxes for Mental Health, Chemical Dependency, HIV, and Reproductive Healthcare with state law citations.

### ⚠️ AMBIGUITIES
- **"Failure to provide all information requested may invalidate this authorization"**: This blanket warning doesn't clarify which fields are truly required vs. optional, potentially discouraging patients from submitting partially completed forms. A patient who doesn't know their exact dates of service, for example, might believe their request will be rejected.
- **Fee structure undefined**: "There may be a fee" with no indication of amount, schedule, or applicable limits (e.g., HIPAA's cost-based fee limit for patient access requests). A patient has no way to estimate costs before submitting.

### ❌ ERRORS
- **Phone number discrepancy between versions**: Form-1 (Aug 2025) lists the contact phone as **805-352-2506**, while form-3 (June 2025) lists **805-352-2306**. One of these is likely a typo — a patient calling the wrong number would be unable to reach HIM.
- **No fillable fields despite digital design**: The form was created digitally (not scanned) but has zero interactive form fields, creating a contradictory user experience — the form accepts electronic signatures and email submission but can't actually be filled out electronically.

### 🚩 RED FLAGS
- **"Invalidate this authorization" warning**: While framed as a caution, this language could function as a de facto barrier, giving the organization grounds to reject requests for minor omissions. HIPAA requires covered entities to provide access and does not allow denial based on incomplete authorization forms when the request is clear.
