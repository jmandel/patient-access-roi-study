# Maury Regional Health — Form 1 Evaluation

**Document:** form-1.pdf (Form 131, revised 08/2018)
**Title:** Authorization to Release Protected Health Information
**Organization:** Maury Regional Health (Columbia, TN) — nonprofit community hospital / regional system

---

## 1. DOCUMENT IDENTIFICATION

This is a general-purpose Authorization to Release Protected Health Information (Form 131, revised 08/2018). It is a single-page form covering both directions of health information exchange — releasing records to a recipient and obtaining records from another source — via a checkbox toggle:

> "☐ To Release my health information to: [...]"
> "☐ To Obtain my health information from: [...]"

The form serves the entire Maury Regional Health system, as noted in a footer disclaimer: "*Maury Regional Health brand is representative of Maury Regional Hospital d/b/a Maury Regional Medical Center, Maury Regional Hospital d/b/a Marshall Medical Center, Maury Regional Hospital d/b/a Wayne Medical Center, and Maury Regional Medical Group, Inc."

A second document (form-2.pdf, Form 131S, dated 05/2017) is a Spanish-language translation of the same form, with identical structure and content. The availability of both English and Spanish versions is notable and suggests intentional multilingual accessibility.

---

## 2. FINDABILITY

The form was located via a site-scoped web search (`site:mauryregional.com authorization release medical records`), which surfaced the medical records page directly. Per the retrieval notes, the page is reachable in **two clicks** from the homepage: Patients and Visitors → Medical Records. The URL path (`/patients-and-visitors/medical-records/`) is descriptive and intuitive.

The PDFs are hosted on Cloudinary CDN and downloaded without authentication or bot blocking. However, the Cloudinary URL itself is opaque — a long hash-based path (`/media/8debb61ae50b44d79e3afc4994e423fd/131-2017-authorization-to-release-phi-maury-regional-health-1.pdf`) — which is fine for functionality but makes the direct link non-intuitive if shared.

Notably, the medical records page also offers an **online request submission** via a third-party service (swellbox.com) and access through the **My Maury Health Patient Portal**, providing patients with alternatives beyond downloading and printing the PDF.

Overall findability is good: easily discoverable, clearly labeled, and accessible without barriers.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. Full text is extractable (4,067 characters). Not an image-only scan.
- **Fillable fields:** Zero (0). The PDF has no interactive form fields — all blanks are underscored lines meant to be handwritten after printing.
- **File size:** 209,385 bytes (~209 KB) for a single page with no embedded images. This is somewhat large for a text-only single-page form, likely due to embedded fonts (12 font resources).
- **Page count:** 1 page.
- **Font count:** 12 fonts — a high number for a single-page form, suggesting complex formatting or multiple font variants (bold, italic, condensed, etc.).
- **Digital-first design:** No. This is clearly designed as a print-and-fill form. The underscore-line blanks, checkbox squares (☐), and absence of any interactive fields all indicate a paper-first workflow. The form must be printed, filled by hand, and submitted physically or by fax.

The presence of a clean text layer is a positive, enabling screen readers, text search, and copy-paste. But the lack of fillable fields significantly limits digital usability.

---

## 4. CONTENT DESIGN

**Length & proportion:** At one page, the form is concise and appropriate in length for the information it collects. It covers patient identification, direction of release, purpose, date range, record types, format preference, and consent acknowledgments — all on a single page without feeling excessively cramped.

**Clarity of language:** The form uses a blend of plain language and necessary legal terminology. The consent section ("I understand that:") uses reasonably clear bullet points explaining key concepts:

> "I do not have to sign this authorization in order to receive treatment, payment or to be eligible for benefits."
> "this authorization can be taken back (revoked) at any time with a written request to the HIM Department (Medical Records)."

These are plainly stated and patient-friendly. However, the sensitive information disclosure notice becomes denser:

> "my records may include information regarding the diagnosis or treatment for alcohol and/or drug abuse; psychiatric or mental illness; and/or sexually transmitted diseases (STDs), as well as AIDS or HIV information AND that I can limit the release of this type of information."

This is functional but could be better structured for comprehension.

**Organization:** The form follows a logical top-to-bottom flow: patient demographics → direction of release → purpose → date range → record types → format preference → consent acknowledgments → signature. This is a natural and intuitive ordering.

**Visual hierarchy:** The form uses a mix of checkboxes, bold headers (PURPOSE), and indentation to create visual structure. The "I understand that:" section uses bullet points effectively. However, with 12 fonts on a single page, the typography may be busier than necessary.

**Readability:** Text appears to be at readable sizes based on the well-formed text extraction, though exact point sizes cannot be confirmed from metadata alone.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general-purpose authorization form, not one specific to patient access. However, it does explicitly accommodate patient self-requests via the "To Release my health information to:" field, with the parenthetical clarification "(Myself or the Name and Address of Recipient– Specify: Attorney, Insurance, etc.)" — putting "Myself" first. Additionally, "Personal Use" is listed as a purpose option. This dual-use design is workable but means the form is not tailored to the simpler patient-access scenario.

**Scope options:** The form provides reasonable specificity:
- **Date range:** "Date(s) of treatment to be released: ______ to: ______"
- **Record types:** Lab Reports, Imaging (X-ray) Reports, ER Records, Billing, Other, and Medical Record Abstract (defined as "History & Physical, Discharge Summary, Consults, Operative Report, and Pathology, if applicable")
- **Purpose checkboxes:** Further Care, Legal, Insurance, Payment or Billing, Personal Use, Social Security/Disability

**Format options:** The form offers four delivery format options, which is notably better than most:
> "☐Paper copies ☐Copies on a CD ☐Copies on a USB flash drive ☐an electronic file emailed** to me at:"

The email option includes an important security notice: "sending an unencrypted or unsecured email poses the risk of the file being viewed by unknown persons through the internet. **The records will be emailed in a secure/encrypted manner unless instructed otherwise." This is a thoughtful disclosure.

**Right of Access language:** The form does not explicitly cite HIPAA § 164.524 or mention the patient's "right of access." It references "Federal and State law and regulations" generally but does not name HIPAA specifically.

**EHI Export awareness:** No mention of electronic health information export, bulk data, or TEFCA.

**Sensitive information:** The form explicitly acknowledges that records may contain information about substance abuse, psychiatric conditions, STDs, and HIV/AIDS, and that the patient "can limit the release of this type of information." However, there is no mechanism on the form itself (no checkboxes or fields) to actually specify such limitations — the patient would need to write this in somewhere or communicate it separately.

---

## 6. COMPLIANCE

**SSN collection:** The form requests "Last 4 digits of S.S. #" — not a full SSN, which is a reasonable identity verification approach, though some may question whether even the last 4 digits are necessary when other identifiers (name, date of birth, photo ID) are already collected.

**Authorization duration:** The form states "this authorization will remain in effect for ninety (90) days after the date recorded below." A 90-day expiration is relatively short and could be burdensome if a patient's request takes time to process, but it is within common practice norms.

**Photo ID requirement:** The form includes "Photo ID was provided: □Yes □No - If No, specify form of patient identification:" — which is a reasonable verification step, though it implies in-person submission since ID verification is difficult for mailed or faxed requests.

**Hold harmless clause:** The form includes: "The facility is hereby released and discharged of any liability, and I will hold the facility harmless for complying with this authorization." While common in ROI forms, this type of liability waiver could be seen as overreaching in a patient access context — HIPAA does not permit conditioning access on a liability release.

**Revocation:** Appropriately notes that revocation must be in writing but cannot undo prior disclosures.

**No fee disclosure:** The form does not mention any fees or costs associated with record requests.

---

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Spanish-language version available:** A dedicated Spanish translation (Form 131S) is published alongside the English form — an uncommon practice that demonstrates genuine effort toward language accessibility.
- **Four format delivery options:** Offering paper, CD, USB, and encrypted email gives patients meaningful choice — the email option in particular is above average for community hospitals.
- **Email security disclosure:** The form thoughtfully explains email risks and defaults to secure/encrypted transmission: "The records will be emailed in a secure/encrypted manner unless instructed otherwise."
- **Alternative submission channels noted on the website:** The medical records page offers an online request submission (via swellbox.com) and patient portal access alongside the downloadable form.
- **"Myself" listed first in recipient options:** The parenthetical "(Myself or the Name and Address of Recipient...)" subtly prioritizes patient self-access.

### 🚩 RED FLAGS

- **Hold harmless / liability waiver:** "The facility is hereby released and discharged of any liability, and I will hold the facility harmless for complying with this authorization." Under HIPAA's Right of Access, a covered entity may not condition fulfillment of a patient's access request on signing a liability release. Including this language in a form that patients use for personal access is potentially noncompliant and could intimidate patients.

### ⚠️ AMBIGUITIES

- **Sensitive information limitation mechanism missing:** The form states patients "can limit the release of this type of information" (substance abuse, psychiatric, STDs, HIV/AIDS) but provides no checkbox, field, or instructions for how to specify those limitations on the form itself.
- **90-day expiration without context:** The form does not explain what happens if the request is not fulfilled within 90 days — must the patient re-authorize? This could create confusion for complex or delayed requests.
- **In-person submission implied:** The Photo ID verification field ("Photo ID was provided: □Yes □No") suggests the form is designed for in-person submission, but the form itself does not specify accepted submission methods (in-person, mail, fax, email). The website notes fax and other options, but the form is silent.

### ❌ ERRORS

- **Spanish form version date discrepancy:** The English form (Form 131) is dated 08/2018, while the Spanish version (Form 131S) is dated 05/2017 — over a year older. If the English form was revised, the Spanish version may not reflect the same updates, creating potential inconsistency between the two versions.
