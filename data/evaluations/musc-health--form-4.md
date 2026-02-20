# Evaluation: MUSC Health University Medical Center — form-4.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **4-page instructional guide** explaining how to request medical records through the MUSC MyChart patient portal. It is **not** an authorization form — it contains no fields to fill out, no signature lines, and no legal authorization language. Instead, it provides step-by-step instructions with 11 embedded screenshots walking a patient through the MyChart records request workflow.

The document opens with policy information about fees and delivery methods, then provides a click-by-click walkthrough: navigating to "Health → Request Medical Records," filling out the questionnaire, receiving records via MyChart, downloading password-protected PDFs, and viewing them.

Within the MUSC Health document set, this serves as a **companion/instructional supplement** to the main ROI pathway:
- **form-1.pdf**: Primary authorization form (Rev. 10/2023, English)
- **form-2.pdf**: Older authorization form (Version 11, dated 11/17)
- **form-3.pdf**: Dental-specific authorization form (Version 9, dated 5/19)
- **form-4.pdf** (this document): MyChart instructions guide
- **form-5.pdf**: Spanish-language version of form-1

The document explicitly notes that for records "sent directly to a physician office, hospital or third parties and for radiology image requests, please complete a MUSC HIPAA Compliant Authorization Form." This positions MyChart as the self-service channel for patient access and the authorization form as the channel for third-party releases.

**Source URL**: `https://mychart.musc.edu/mychart/en-us/docs/Med%20Rec%20Request17.pdf`

## 2. FINDABILITY

Per the retrieval notes, this document was surfaced through a web search for `"MUSC Health" "medical records" "release form" filetype:pdf`. It is hosted on the MyChart subdomain (`mychart.musc.edu`) rather than the main `muschealth.org` site.

The main medical records page at `muschealth.org/patients-visitors/medical-records` has a "MyChart Patient Portal" tab, which presumably links to this or similar MyChart instructions. The notes confirm this page is reachable in 2 clicks from the homepage (Patients & Visitors → Medical Records).

However, the document itself references a URL for the authorization form and FAQ that uses an older path structure: `http://www.muschealth.org/patients-visitors/medical-records/obtaining-records.html` — using `http://` rather than `https://` and the `www.` prefix, which may or may not still resolve correctly.

The "17" in the filename (`Med%20Rec%20Request17.pdf`) and the `en-us/docs/` path suggest this was created alongside a 2017 MyChart deployment and may not be actively maintained or prominently linked from current pages.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 244,831 bytes (245 KB) — reasonable for a 4-page document with 11 screenshots
- **Page count**: 4
- **Text layer**: Present (`has_text_layer: true`)
- **Fillable fields**: 0 — expected, as this is an instructional document, not a form
- **Font count**: 2 — minimal and appropriate
- **Embedded images**: 11 — all appear to be screenshots of the MyChart interface
- **Image-only scan**: No
- **Text content**: 2,325 characters — relatively sparse text, with screenshots carrying most of the instructional content

The document is technically well-formed as a PDF with searchable text. The low font count and clean text extraction suggest it was created natively (likely from a word processor), not scanned. The 11 embedded images are essential to the document's purpose as a screenshot-based tutorial.

## 4. CONTENT DESIGN

### Opening Policy Block
The document leads with three important policy statements before the walkthrough begins:

1. "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient."
2. "A prepay notice will be mailed or emailed (via MyChart) and once paid; the records will be released."
3. "Some records requested to be released to MyChart will only be available to be sent via US Mail. This will depend on the year the visit occurred and / or what electronic system the records were generated in."

These set expectations upfront, though the fee-first positioning may deter patients before they begin the process. No fee amounts are disclosed.

### Step-by-Step Walkthrough
The instructions follow a logical sequence:
1. Navigate to Health → Request Medical Records
2. Fill out the questionnaire and click SUBMIT
3. Receive records via MyChart with email notification
4. Access records via the email link or Health → Download My Summary → Requested Records
5. View system-generated password, copy it
6. Click DOWNLOAD, wait for the download dialog, click CONTINUE DOWNLOAD
7. Paste the password to unlock the PDF

The walkthrough is screenshot-heavy (11 images across 4 pages), which makes it easy to follow visually but creates a problem: **the screenshots are from a 2017-era MyChart interface**. MyChart has undergone significant UI updates since then, meaning the screenshots may no longer match what patients actually see.

### Writing Style
The text is concise and uses imperative instructions ("Click the link," "Highlight password and right click to choose copy"). The language is reasonably plain, though some phrasing is slightly awkward (e.g., "You will receive a tickler message in your personal email alerting you of a new Medical Record Document to view" — "tickler message" is jargon).

### Footer
Each page includes "Updated 8/2/17" at the bottom — confirming the document has not been updated in over 8 years.

## 5. PATIENT-CENTEREDNESS

**Strengths:**
- Provides a digital self-service pathway for records access through MyChart, avoiding the need to print/fax/mail an authorization form
- Step-by-step format with screenshots lowers the technical barrier for portal-based requests
- Clearly distinguishes between patient self-access (MyChart) and third-party release (authorization form), directing patients to the appropriate pathway
- Notes that records will arrive via MyChart with email notification, setting delivery expectations

**Weaknesses:**
- **Fee disclosure upfront without amounts**: The very first sentence states "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient" — this is positioned as a blanket statement with no fee schedule, cost estimate, or mention of fee limits. This could deter patients from exercising their HIPAA right of access.
- **Prepayment requirement**: "A prepay notice will be mailed or emailed (via MyChart) and once paid; the records will be released" — requiring prepayment before releasing records to the patient adds a delay and barrier. Under HIPAA, providers may charge a reasonable cost-based fee but the prepayment model can function as a gatekeeper.
- **Password-protected PDF workflow is burdensome**: The multi-step process of viewing a system-generated password, copying it, downloading the file, and then pasting the password adds significant friction to what should be a straightforward download. While security-motivated, this is a usability obstacle, particularly for less tech-savvy patients.
- **No mention of timeframe**: Unlike the authorization forms which note 30-day processing, this document provides no expected turnaround time for MyChart requests.
- **Severely outdated**: Updated 8/2/17 — nearly 9 years old. The MyChart interface has likely changed substantially, meaning the screenshots and navigation instructions may be inaccurate.
- **Uses jargon**: "tickler message" is healthcare industry terminology that patients may not understand.
- **US Mail limitation unexplained**: "Some records requested to be released to MyChart will only be available to be sent via US Mail" with only a vague explanation ("the year the visit occurred and / or what electronic system the records were generated in"). Patients have no way to predict whether their records will face this limitation.

## 6. COMPLIANCE

- **Fees**: The blanket statement that "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient" does not distinguish between HIPAA-regulated patient access fees (which must be reasonable and cost-based under 45 CFR § 164.524) and fees for third-party releases (governed by state law). The statement implies all patient requests incur a fee, with no acknowledgment of fee limits or a patient's right to receive records in electronic format at reduced cost. Under HHS guidance, patients have the right to receive an electronic copy at a fee limited to labor costs.
- **Prepayment**: Requiring prepayment before release ("once paid; the records will be released") could be seen as conditioning access on payment. While HIPAA permits reasonable fees, OCR guidance emphasizes that fees should not create barriers to access. The prepayment model delays delivery.
- **No mention of rights**: Unlike the authorization forms (form-1, form-2, form-3), this document contains no mention of patient rights under HIPAA, no reference to 45 CFR § 164.524, no mention of the right to revoke, and no statement that treatment will not be conditioned on signing. As an instructional document rather than an authorization form, this may be expected — but since it is the guide for the primary patient access pathway, the absence of rights information is notable.
- **Format choice**: The document mentions records available "via MyChart" or "via US Mail" but does not inform patients of their HIPAA right to request records in the form and format of their choice (including electronic format).

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Blanket fee statement with no amounts or limits**: The opening line — "There is a fee charged for the search and duplication of medical records for all patient requests released to the patient" — asserts fees for all patient requests without acknowledging HIPAA's reasonable cost-based fee limitation. Combined with the prepayment requirement, this creates a financial barrier to patient access with no transparency about what the fee will actually be.
- **Prepayment as a precondition for release**: "A prepay notice will be mailed or emailed (via MyChart) and once paid; the records will be released." This conditions record delivery on upfront payment, which adds delay and may discourage patients from exercising their right of access — particularly if the fee amount is unknown in advance.

### ⚠️ AMBIGUITIES
- **US Mail fallback without criteria**: "Some records requested to be released to MyChart will only be available to be sent via US Mail. This will depend on the year the visit occurred and / or what electronic system the records were generated in." Patients cannot predict whether this applies to their records, and the document offers no guidance on which years or systems trigger the limitation.
- **Link to potentially stale URL**: The document references `http://www.muschealth.org/patients-visitors/medical-records/obtaining-records.html` — using HTTP rather than HTTPS and an older URL pattern. This link may redirect or be broken.

### ❌ ERRORS
- **Severely outdated (8/2/17)**: The document is nearly 9 years old. MyChart's interface has undergone multiple major redesigns since 2017. The 11 embedded screenshots almost certainly no longer match the current MyChart UI, making the step-by-step instructions potentially misleading. Navigation paths (e.g., "click on Health and choose Request Medical Records") may no longer be accurate.
- **Jargon usage**: "You will receive a tickler message in your personal email" — "tickler message" is HIM/healthcare industry jargon, not patient-facing language. The term may confuse patients who are unfamiliar with it.

### ✨ BRIGHT SPOTS
- **Clear pathway differentiation**: The document explicitly distinguishes between patient self-access (via MyChart) and third-party/provider-directed release (via authorization form), helping patients choose the right process for their needs.
- **Screenshot-based tutorial format**: While now outdated, the approach of providing annotated screenshots to guide patients through a portal workflow is a patient-friendly instructional design choice that reduces the barrier to digital records access.
