# Evaluation: Cottage Hospital — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

**Document title:** "Authorization for Disclosure of Medical Information"
**Type:** General HIPAA authorization for use/disclosure of protected health information. This is a third-party release form, not a patient-access-specific request form.
**Pages:** 1
**File size:** 198,347 bytes (~194 KB for a single-page form — relatively large for text-only content, suggesting embedded font data)

This is the standalone authorization form found on the Cottage Hospital website. A second document (form-2.pdf) is a 12-page "RHC New Patient Packet" from the affiliated Rowe Health Center, which contains a slightly updated version of this same authorization form (page 2 of 12) alongside intake, demographic, billing, consent-to-treatment, and HIPAA directive forms. The form-2 version adds Rowe Health Center branding, distinguishes between copies provided to the patient vs. other providers, and includes a "Printed Name" field — suggesting it is the more current iteration.

Notably, the footer reads "SECTION II / USE AND DISCLOSURE / PAGE 14 OF 28," indicating this form was originally extracted from a larger HIPAA policy document and repurposed as a standalone PDF. The page numbering bears no relationship to the actual document.

## 2. FINDABILITY

**Difficulty: High.** The notes document multiple failed access strategies:

- Direct website access to cottagehospital.org was blocked by **Cloudflare Turnstile** challenge on every attempt (curl, browser with DevTools). The CAPTCHA could not be completed programmatically.
- Google Cache was also blocked by CAPTCHA.
- The form was ultimately retrieved only via the **Wayback Machine** (archived 2024-07-05).

Even when the website is accessible, the form's location is not intuitive. The notes indicate it was linked from a "Becoming a Rowe Health Center Patient" page under Step 2 — a context that frames the form as part of transferring records to a new provider, not as a general patient access mechanism. The hospital does have a dedicated HIM department page at `/department/medical-records-health-information-management-him`, but the relationship between that page and this form could not be verified due to access issues.

The original filename `AUTHORIZATIONFORDISCLOSURE.pdf` is descriptive but uses no spaces or hyphens, making it less readable as a URL. The newer versions (`RHC Medical Disclosure Form.pdf`, `RHC New Patient Packet Rev4_24.pdf`) were not archived by the Wayback Machine and could not be retrieved.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Yes — digitally created in Microsoft Word 2010 (2014 creation date). Clean, extractable text throughout.
- **Fillable fields:** Zero (0). Despite being digitally created, there are no interactive form fields. All blanks are represented by underscore characters (e.g., `Patient's Full Name___________________________________________`).
- **Image content:** Zero embedded images. Pure text document.
- **Font count:** 5 fonts used for a single-page form.
- **Digital-first design:** Partially. The document was created digitally (not a scan), which is positive. However, it was clearly designed to be printed and filled in by hand — the underscore-based blank lines are the giveaway. No consideration was given to electronic completion.

## 4. CONTENT DESIGN

**Length:** One page, which is appropriate for a basic authorization form.

**Clarity:** The form uses moderately dense legal language. Key disclosures are written in first-person ("I understand that…") which is reasonably clear, but sentences are long and complex. For example: "I understand that this authorization may be revoked in writing and delivered to the Privacy Officer of Cottage Hospital at any time, although revocation will not be effective as to the disclosure of records whose release I have previously authorized, or where other action has been taken in reliance on an authorization I have signed." This 50+ word sentence could be simplified.

**Organization:** The form flows logically: patient identification → recipient → purpose → record type selection → sensitive information categories → patient rights statements → signature block → administrative notes. However, there are no section headers or visual separators between the rights statements — they appear as a continuous block of text separated only by blank lines.

**Record type options:** Limited. Three checkboxes: "Complete copy of medical record," "Other (describe)," and "Psychotherapy Notes Only." The psychotherapy notes option includes an inline instruction: "(If applicable, no other information may be included in authorization)" — which is legally required but may confuse patients.

**Sensitive information categories:** Four categories with checkboxes: Mental illness, HIV related illness, AIDS, and Drug/alcohol treatment. The drug/alcohol line includes the proper 42 CFR Part 2 re-disclosure warning.

**Layout:** Cramped. The form packs substantial legal content onto a single page, which is efficient but leaves little whitespace. The signature area includes fields for Date, Signature, Authority/Relationship of representative, and Witness — all compressed at the bottom.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This form is designed primarily for **third-party disclosure**, not patient access. The operative language is: "This will authorize Cottage Hospital to use or disclose my protected health information to [other entity]." The blank for the recipient is labeled "[other entity]" — there is no option to simply request records for oneself without naming a third party.

However, the form does include the statement: "I understand that I may inspect or copy the protected health information described by this authorization," which acknowledges the right of access without providing a dedicated pathway for it.

**Scope options:**
- Record types: Three options (complete record, other, psychotherapy notes only)
- Date range: No date range field — no way to limit records to a specific time period
- Format/delivery: No options for delivery format (paper, electronic, fax, portal) or delivery method

**Right of Access language:** The form states patients may "inspect or copy" their PHI and that treatment cannot be conditioned on signing the authorization ("I MAY REFUSE TO SIGN THIS AUTHORIZATION FORM" — in caps). It does not cite HIPAA § 164.524 or reference specific patient rights under the regulation.

**EHI Export / electronic access:** No mention of electronic health information, patient portal access, or digital delivery options.

**Remuneration disclosure:** Unusually, the form includes a disclosure field for financial remuneration: "I understand that Cottage Hospital shall have the opportunity to obtain direct or indirect remuneration in the form of [describe]: _______________ from [third party]: _______________." This is a HIPAA-required disclosure for sale of PHI but is unusual to see as a fill-in-the-blank on a general authorization form; it will likely confuse patients who are simply requesting their own records.

## 6. COMPLIANCE

**Expiration:** "If no date or event is stated, expiration is six months from the date it was signed." Six months is reasonable.

**Witness requirement:** The form includes a "Witness" signature line. While not explicitly labeled as mandatory, its presence may lead patients (or staff) to believe a witness is required. HIPAA does not require a witness for a standard authorization.

**Copy to patient:** The form states "Cottage Hospital shall provide a copy of this authorization, when signed, to the patient" — which is a proper HIPAA compliance measure.

**No fee disclosure:** The form does not mention any fees for copies or processing.

**No submission instructions:** The form provides no guidance on where to submit it — no address, no fax number, no email, no mention of the HIM department. A patient completing this form would not know how to deliver it.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature line:** The form includes a "Witness" line with no explanation of whether it is required or optional. HIPAA does not require witness signatures for standard authorizations, and imposing one creates an unnecessary barrier — particularly for patients who may be completing the form at home without another person available.

- **No submission pathway disclosed:** The form provides zero instructions on how or where to submit it. No mailing address (beyond the hospital letterhead), no fax number, no email, no mention of in-person delivery. This is a significant practical barrier.

### ⚠️ AMBIGUITIES

- **Remuneration fields on a general-purpose form:** The blank fields for describing remuneration ("direct or indirect remuneration in the form of [describe]") will perplex most patients. These fields are relevant only in sale-of-PHI scenarios, not routine records requests. Their inclusion without explanatory context creates confusion.

- **"[other entity]" recipient labeling:** The form says "disclose my protected health information to [other entity]" with the bracketed text appearing to be a placeholder label rather than an instruction. It's unclear whether this is meant as a field label or a literal instruction to write something.

- **Phantom page numbering:** The footer reads "SECTION II / USE AND DISCLOSURE / PAGE 14 OF 28" — a vestige from a larger policy document. This gives the misleading impression the form is part of a 28-page document and that there are prior sections the patient hasn't seen.

### ❌ ERRORS

- **Mismatched page numbering:** "PAGE 14 OF 28" on a standalone 1-page PDF is a clear formatting defect from extracting this page out of a larger document without updating the footer.

### ✨ BRIGHT SPOTS

- **Psychotherapy notes properly segregated:** The form correctly notes that psychotherapy notes authorization cannot be combined with other information: "(If applicable, no other information may be included in authorization)" — reflecting the 45 CFR § 164.508(b)(3)(ii) requirement.

- **Non-conditioning statement in plain view:** The form prominently states in capitalized text that the patient "MAY REFUSE TO SIGN THIS AUTHORIZATION FORM" and that treatment/payment cannot be conditioned on authorization — a meaningful patient protection that many forms bury or omit.
