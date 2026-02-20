# Evaluation: Vanderbilt University Medical Center — form-4.pdf

## 1. DOCUMENT IDENTIFICATION

This is the **current official English-language authorization form** for Vanderbilt Health, titled "Authorization for the Use or Disclosure of Protected Health Information," with the subtitle "Authorization (P) – Release of Medical Information." It is form **VMR 3017**, dated **10/2023**, and spans **2 pages**.

This form is the successor to two older versions also found online: form-1.pdf (VMR 3017, dated 02/2022, 4 pages) and form-2.pdf (VMR-P 3017, dated 08/2017, 4 pages). It has been redesigned and condensed from 4 pages down to 2. It uses the current "Vanderbilt Health" branding rather than the older "Vanderbilt University Medical Center" branding. A Spanish-language translation of this same form exists as form-5.pdf. A separate form (form-3.pdf, VMR 3022) exists for authorizing release of records *to* Vanderbilt from other providers. Of the five forms discovered, form-4 is the one currently linked from the official vanderbilthealth.com medical records page and is the primary document a patient would encounter when requesting their own records.

## 2. FINDABILITY

**Good overall findability with some caveats.** The form is directly linked from the official Vanderbilt Health medical records page at `https://www.vanderbilthealth.com/information/medical-record-information`, under a clear section heading "Request Records by Authorization Form." Both English (form-4) and Spanish (form-5) versions are linked. The source URL (`https://files.vanderbilthealth.com/sites/default/files/2024-03/authorization-for-release-of-medical-information-eng.pdf`) downloaded without any login wall or bot blocking.

However, a significant findability concern is that **older, outdated versions of the form remain publicly accessible** on VUMC subdomains (vumc.org/student-health and vumc.org/information-privacy-security). A patient searching Google for "Vanderbilt medical records release form" could easily land on the 2017 or 2022 version instead of the current 2023 version. The outdated forms have different layouts, different fee structures, and fewer facility options, which could cause confusion or processing delays.

Vanderbilt also offers **three online request portals** as alternatives to the PDF form: Swellbox for patient and provider requests, and ChartSwap for third-party requests. These are listed on the same medical records page, giving patients a choice of workflows.

## 3. TECHNICAL ACCESSIBILITY

**Poor technical accessibility.** The PDF is fundamentally an **image-only scan** despite technically having a minimal text layer. The metadata confirms only 61 characters of extractable text across 2 pages: `"Patient Label or Patient Identifiers"` and `"Patient Identifiers"`. All substantive form content — headings, instructions, field labels, the fee table, legal text — exists only as raster images embedded in the PDF. There are **3 embedded images** covering the 2 pages, **1 font** (used only for the label placeholder text), and **0 fillable fields**.

Specific consequences:
- **Not fillable electronically**: Patients must print the form and complete it by hand.
- **Not screen-reader accessible**: Assistive technology cannot read the form content, making it inaccessible to visually impaired patients.
- **Not searchable**: The text cannot be selected, copied, or searched within the document.
- **Low resolution**: The scan appears to be at 96 DPI based on notes, which is below standard print quality (300 DPI) though legible on screen.
- **File size is reasonable** at 155 KB for a 2-page document.

The form does include a **QR code** in the page 1 header, which could potentially link to an online version or additional resources, though its destination is not determinable from the PDF alone.

## 4. CONTENT DESIGN

**Well-organized but dense.** The form is logically structured with 10 numbered sections progressing from patient identification through authorization to signature. The condensation from 4 pages (in older versions) to 2 pages is an improvement but comes at the cost of density — page 2 in particular is packed with small-font legal text.

**Section-by-section layout:**

1. **Patient Name** (Section 1): Collects Last Name, First Name, MI, Maiden or Other Name, Date of Birth, Former Name, Medical Record #, Last 4 SSN, Address, Phone, Email. The "Patient Label or Patient Identifiers" box in the upper right is for clinical use (sticker placement). Requesting "Last 4 SSN" is notable — more than many forms require.

2. **Facility Selection** (Section 2): Eight checkboxes covering Vanderbilt Health entities: Vanderbilt University Hospital, Vanderbilt Psychiatric Hospital, Vanderbilt Bedford Hospital, Vanderbilt Behavioral Health Clinics, Vanderbilt Wilson County Hospital, Vanderbilt Tullahoma-Harton Hospital, Monroe Carell Jr. Children's Hospital at Vanderbilt, and Vanderbilt Home Care Services. Also has fields for specific clinic/doctor name. This is useful for a multi-facility system.

3. **Recipient** (Section 3): Name, Relationship to Patient, Address, Phone, and "Fax Option for Physician/Treatment Only."

4. **Delivery Method** (Section 4): Three options — Mail, Electronic ("View, print, or download as PDF through request portal. Directions sent to email address above."), or Other. The electronic option is a notable positive.

5. **Fee Schedule** (Section 5): A detailed 6-row table breaking down fees by Type of Request, How Record is Stored, How Record is Delivered, Production Fees, Paper Fee, and Max Fees. Fees range from a $6.50 flat fee (electronic-to-electronic) to $0.90 flat fee + $0.7¢/page + $0.5¢/page for paper-to-mixed delivery, all capped at $50 max.

6. **Sensitive Information** (Section 6): Default opt-in for release of psychiatric, psychological, substance use, and HIV/AIDS information, with an opt-out checkbox: "I do not authorize this information to be released."

7. **Record Types** (Section 7): Date range (FROM/TO) and 16 named record-type checkboxes plus "Images (specify)" and "Other (specify)" write-in fields. A note states that if no specific records are requested, "the Center for Health Information Management department will send an Abstract of my legal medical record."

8. **Purpose** (Section 8): Three options — Healthcare/Treatment, Legal (specify), Other (specify). Only required "if not for your personal use."

9. **Acknowledgement of Understanding** (Section 9): Eleven bullet points of legal disclosure covering voluntariness, HIPAA rights, fees, expiration, revocation, re-disclosure, non-conditioning of care, copy rights, 30-day response timeline, mail security risks, and CD/DVD password protection.

10. **Representative Signing** (Section 10): For non-patient signers, requires proof of authority. Lists 8 representative types including Parent with Parental Rights, Legally Designated Healthcare Agent, Court Appointed Guardian or Conservator, Surrogate Decision Maker, Court Appointed Personal Representative of Deceased, Power of Attorney for Healthcare Decisions/Medical Power of Attorney, Power of Attorney with Right to See Medical Records, and Other.

**Typography and layout**: The form uses a clear hierarchy with bold numbered section headings. Tables are well-structured with visible borders. However, the legal text in Section 9 is notably small and dense, likely 8-9pt font in the original, making it difficult to read for many patients.

## 5. PATIENT-CENTEREDNESS

**Mixed.** The form has several patient-friendly features but also imposes barriers:

**Positive aspects:**
- The form explicitly states in Section 8 that purpose information is only needed "if not for your personal use," correctly recognizing that patients requesting their own records under HIPAA do not need to justify the request.
- An electronic delivery option is offered, with a clear description of how it works (PDF through request portal, directions sent to email).
- Section 9 includes a bullet acknowledging the patient's right to request a copy of the signed form.
- Section 9 states the 30-day response timeline and the patient's right to request review of any denial.
- The acknowledgement states "there will be no conditions placed on my health care or payment for my health care" for authorizing disclosure — correctly stating non-conditioning.
- A Spanish-language version exists (form-5.pdf).
- Online portal alternatives (Swellbox) are available for patients who prefer not to use the paper form.

**Concerns:**
- The form is not electronically fillable, requiring patients to print, hand-write, and then either mail, fax, or scan/upload the completed form.
- The form title and structure frame this primarily as a third-party disclosure authorization ("Authorization for the Use or Disclosure of Protected Health Information"), not specifically as a patient access request. Section 3 asks for "Relationship to Patient" even when the patient is requesting their own records — this framing could be confusing.
- The fee schedule in Section 5 is complex (6 different fee scenarios) and may overwhelm patients. However, all fees are capped at $50, which is a reasonable maximum.
- Section 6's default inclusion of sensitive information (psychiatric, substance use, HIV) with opt-out rather than opt-in may surprise patients, though this is a common approach.
- Requesting "Last 4 SSN" in Section 1 is more personal information than strictly necessary for record identification and could deter privacy-conscious patients.

## 6. COMPLIANCE

**Fees:** The fee schedule lists a $6.50 flat fee for electronic-to-electronic delivery, $0.7¢/page for paper-to-electronic, and various per-page rates for paper delivery (ranging from $0.5¢ to $0.7¢ per page), plus postage for mailed records. All scenarios are capped at $50. Under HIPAA's patient access rule (45 CFR § 164.524), when a patient requests their own records, covered entities may only charge a "reasonable, cost-based fee" — which for electronic copies the HHS has indicated should be limited to labor costs. The $6.50 flat fee for electronic delivery appears to be within a reasonable range as a labor-based flat fee. The paper per-page rates with the $50 cap are also within typical ranges.

**Response timeline:** Section 9 states "my request will be acted upon within 30 days," which aligns with HIPAA's 30-day response requirement (with one 30-day extension permitted).

**Sensitive information:** Section 6 handles 42 CFR Part 2 (substance use disorder) and state-law-protected categories (psychiatric, HIV) by defaulting to inclusion with an opt-out checkbox. This approach is permissible but puts the burden on the patient to affirmatively exclude sensitive records.

**Authorization vs. access:** The form appears to serve dual duty as both a patient access request form and a third-party authorization form. HIPAA technically distinguishes between these — a patient exercising their Right of Access (§ 164.524) does not need to sign an "authorization" (§ 164.508). Combining them into one form is extremely common practice but can create confusion about patient rights.

**Purpose of request:** Section 8 correctly limits the purpose question to non-personal-use requests, which aligns with HIPAA's prohibition on requiring patients to state a reason for accessing their own records.

**No notarization or witness requirements:** The form does not require notarization or witness signatures, which is appropriate.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Dual-purpose form conflation**: The form is titled "Authorization for the Use or Disclosure of Protected Health Information" and structured as a HIPAA authorization (§ 164.508), but it's also being used for patient access requests (§ 164.524). This is a widespread industry practice, but it can mislead patients into thinking they need to "authorize" access to their own records, when in fact they have a legal right to access them without signing an authorization. The "Acknowledgement of Understanding" in Section 9 reinforces this framing: "I hereby give Vanderbilt Health permission to disclose my individually identifiable protected health information" — patients aren't "giving permission," they're exercising a right.

### ⚠️ AMBIGUITIES

- **"Fax Option for Physician/Treatment Only"** in Section 3 suggests fax delivery is restricted to physician/treatment purposes. It's unclear whether a patient requesting their own records could receive them by fax, or whether this restriction applies only when the recipient is a treating physician.
- **Authorization expiration** (Section 9): The form states "this authorization will expire when the records are released for the requested dated below" — the phrasing "dated below" is unclear. It appears to mean the date range specified in Section 7, implying the authorization is single-use and expires upon fulfillment. But this could confuse patients who might expect a time-limited expiration date.
- **Fee applicability to patient access**: The fee schedule in Section 5 does not distinguish between fees charged for patient access requests vs. third-party disclosures. Under HIPAA, different fee rules apply — patients have the right to receive electronic copies at a reasonable cost-based fee, while third-party requests can be charged under state fee schedules. It's unclear which fee schedule row applies when a patient requests their own records electronically.

### ❌ ERRORS

- **Image-only scan with no meaningful text layer**: The form contains only 61 characters of extractable text across 2 pages. This is a significant technical deficiency for a current (2023) form from a major academic medical center. It means the PDF fails basic digital accessibility standards (WCAG, Section 508).
- **Outdated forms still publicly hosted**: The 2017 (form-2) and 2022 (form-1) versions remain accessible on vumc.org subdomains. These contain different fee structures and facility lists, and could be submitted by patients who find them via search engines, potentially causing processing delays or confusion.

### ✨ BRIGHT SPOTS

- **Electronic delivery option with clear description**: Section 4 offers electronic delivery described as "View, print, or download as PDF through request portal. Directions sent to email address above." This is a genuinely useful patient-friendly option that goes beyond basic mail/fax offerings.
- **Transparent and capped fee schedule**: The 6-row fee table in Section 5, while complex, provides detailed transparency about costs under different scenarios, and all fees are capped at a $50 maximum. This level of upfront disclosure is better than many organizations that either hide fees or leave them ambiguous.
- **Spanish-language version available**: Form-5.pdf provides the same form in Spanish, linked from the same medical records page — supporting non-English-speaking patients.
- **Online portal alternatives**: Vanderbilt offers Swellbox as an electronic request portal alongside the PDF form, giving patients a fully digital pathway that bypasses the limitations of the image-only PDF.
- **Compact 2-page design**: The consolidation from the older 4-page versions to 2 pages reduces patient burden while retaining all necessary content.
- **Purpose question correctly scoped**: Section 8 states "If not for your personal use, please tell us reason for request" — correctly avoiding requiring patients to justify personal access requests.
