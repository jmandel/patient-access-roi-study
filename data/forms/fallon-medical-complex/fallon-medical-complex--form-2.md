# Evaluation: Fallon Medical Complex — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **"Verbal Release of Information"** form — a single-page authorization that permits Fallon Medical Complex (FMC) or its Community Clinic to verbally share a patient's health information (e.g., over the phone) with specified individuals. It is explicitly **not** a request for copies of records; the form states: "this authorization does not allow release of copies of any records to the above mentioned individual(s) and a request for release of records requires a separate release."

This is a companion to form-1 ("Authorization for Access, Use and Disclosure of Protected Health Information"), which is the primary ROI form for requesting copies. Form-3 is a Notice of Privacy Practices. Together, the three documents cover the full spectrum of patient information access: verbal disclosure (form-2), written/electronic copies (form-1), and privacy rights notification (form-3).

The form is branded with the FMC tagline "Friends Healing Friends" and includes organizational contact details (PO Box 820, 202 South 4th Street West, Baker, MT 59313-0820, phone, fax, website). The footer reads "FMCCAH-ReleaseofInformationVerbal 03012020 slssls," indicating a last revision date of March 1, 2020.

## 2. FINDABILITY

Per the retrieval notes, the form was located with relative ease. The organization's website (fallonmedical.org) has an "Information Management" page that directly links to all three forms. The search required only two web queries. The form itself is hosted on Google Cloud Storage (`storage.googleapis.com/cardsetter-tmp-user-assets/fallon-medical/health-information-management/...`), which is a somewhat unusual hosting choice but posed no access barriers — no login walls, bot blocking, or CAPTCHAs were encountered.

The URL path includes "cardsetter-tmp-user-assets," suggesting the website uses Cardsetter as a CMS and the file is stored as a temporary/uploaded asset. This raises a minor durability concern — "tmp" in the path could indicate the URL is not guaranteed to be stable long-term — though it was accessible at the time of retrieval.

**Retrieval difficulty: Easy.** Forms are publicly linked from a clearly labeled page.

## 3. TECHNICAL ACCESSIBILITY

- **Format:** PDF, 1 page, 47,150 bytes — a lightweight file.
- **Text layer:** Present. The document has real text (not an image-only scan), with 2,898 characters extracted cleanly.
- **Fillable fields:** Zero. The form has **no fillable PDF fields** despite having numerous blanks (patient name, birth date, address, city, state, zip code, medical record number, individual names/relationships, date ranges, signature, date). Patients must print and hand-write all entries.
- **Fonts:** 8 fonts used, which is moderately high for a single-page document.
- **Images:** 1 embedded image (likely the FMC logo).
- **Checkbox rendering:** The form uses Unicode ballot box characters (❑) for checkboxes in the extracted text, but these are not interactive — they must be marked by hand on a printed copy.

The lack of fillable fields is a meaningful accessibility gap. A patient cannot complete this form digitally — they must print it, fill it by hand, and deliver it physically (or presumably fax it, given the fax number in the header). No electronic submission option is mentioned on the form itself.

## 4. CONTENT DESIGN

**Layout and structure:** The form is compact at one page, which is convenient. It flows logically: header/branding → facility selection → patient demographics → authorization body → information categories → sensitive information handling → date range → signature → supplementary notices (bullet list at bottom).

**Facility selection:** The form offers checkboxes for "Fallon Medical Complex," "Community Clinic," "Physical Therapy," and "Long-Term Care," though notably the Physical Therapy and Long-Term Care options appear to lack checkbox symbols in the extracted text (only the first two have ❑ marks). This could indicate a formatting issue or that those options are listed for context but not independently selectable.

**Information categories:** The form covers six specific categories via checkboxes: "Laboratory Reports," "X-ray/EKG Reports," "Clinic Visits (physician progress notes)," "ER Visits," "Observation Stays," and "Inpatient/Skilled Swingbed Stays." This is reasonably specific.

**Sensitive information handling:** The form uses a two-option structure requiring the signer to choose one and initial it:
1. "No limitations placed on dates, history of illness, or diagnostic and/or therapeutic information, **INCLUDING** any treatment for ❑ alcohol ❑ drug abuse ❑ mental health records ❑ HIV testing or treatment of AIDS or AIDS related conditions"
2. "No limitations placed on dates, history of illness, or diagnostic and/or therapeutic information, **EXCLUDING** any treatment for ❑ alcohol ❑ drug abuse ❑ mental health records ❑ HIV testing or treatment of AIDS or AIDS related conditions"

The INCLUDING/EXCLUDING structure is functionally sound but could be confusing to patients. Both options begin with identical language ("No limitations placed on...") and differ only in a single word (INCLUDING vs. EXCLUDING). This requires careful reading to distinguish.

**Recipient designation:** The form provides a simple table for "Name of Individual(s)" and "Relationship" plus a "Reason" field. The number of recipient slots is not apparent from the text extraction alone.

**Bottom notices (bullet list with ➢ markers):** Six supplementary statements cover expiration, revocation, redisclosure risk, non-conditioning of treatment, inspection rights under §164.524, and third-party compensation. These are written in regulatory/legal language rather than plain English.

## 5. PATIENT-CENTEREDNESS

**Scope clarity:** The form is specifically scoped to *verbal* release — a relatively unusual form type. This is transparent and well-delineated. However, it may not be immediately obvious to a patient seeking general records access that this form does not give them copies. The clarification appears near the bottom ("this authorization does not allow release of copies"), which is good, but a patient might not reach it before beginning to fill out the form.

**Language level:** The form uses moderately complex language throughout. Phrases like "The undersigned hereby authorizes and requests" and "diagnostic and/or therapeutic information" are legalistic. The bottom notices reference "§164.524 of the Privacy Act" without explanation, which is a jargon barrier for lay patients.

**Submission process:** The form provides no guidance on how to submit it. There is no mention of mailing address for submissions (the header address is for the organization generally), no email submission option, no fax instructions for returning the completed form, and no mention of in-person drop-off. A patient must infer the process.

**Time limitation:** The form caps authorization at one year ("RELEASE CAN ONLY COVER A PERIOD NOT TO EXCEED ONE YEAR"), printed in all-caps for emphasis. The expiration is also restated in the bottom notices. This is clearly communicated.

**Revocation:** The form states the authorization "may be revoked at any time by submitting request in writing to the above address." This is adequately communicated, though requiring written revocation is a higher bar than some forms impose.

## 6. COMPLIANCE

- **One-year limit:** The authorization is limited to one year, both in the date-range field and the expiration notice. This is a reasonable and common limitation.
- **Non-conditioning statement:** The form includes: "FMC/Community Clinic will not condition treatment, payment, continued enrollment in a health plan, or eligibility for benefits based on the individual providing appropriate authorization." This satisfies HIPAA's non-conditioning requirement.
- **Redisclosure warning:** Present, noting that disclosed information "may, in some instances, be re-disclosed" and "is no longer protected by the HIPAA Privacy Rule."
- **Inspection rights reference:** The form references §164.524, though it labels it "the Privacy Act" rather than the "HIPAA Privacy Rule" or "45 CFR §164.524," which could cause confusion with the federal Privacy Act of 1974.
- **Third-party compensation notice:** "A third party will compensate FMC directly or indirectly when disclosure will result in such compensation." This is somewhat opaque — it's unclear if this means the patient may be charged or if it refers to situations where a third party (like an insurer) pays FMC.
- **42 CFR Part 2 considerations:** The form addresses substance abuse/mental health/HIV with the including/excluding checkbox structure, which attempts to comply with additional protections for these categories. However, unlike form-1, this form does not explicitly reference 42 CFR Part 2 protections.
- **Witness requirement:** The form includes a witness signature line, which is not required by HIPAA but is not inherently problematic unless it creates a barrier to submission.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Witness signature requirement:** The form includes a "Witness" signature and date line. While not uncommon in healthcare settings, requiring a witness for a simple verbal information release authorization can create a barrier — particularly for patients in rural Baker, MT who may be completing the form at home without a convenient witness. HIPAA does not require witness signatures for valid authorizations.

### ⚠️ AMBIGUITIES
- **"Physical Therapy" and "Long-Term Care" listed without checkboxes:** The extracted text shows ❑ marks only for "Fallon Medical Complex" and "Community Clinic," while "Physical Therapy" and "Long-Term Care" appear without checkbox indicators. It is unclear whether these are selectable options, sub-departments of the main facility, or merely informational listings.
- **INCLUDING/EXCLUDING sensitive information structure:** Both options start with "No limitations" and diverge on a single word. A patient could easily misread which option they are selecting, particularly if checking individual sub-boxes (alcohol, drug abuse, mental health, HIV) within each option — it's unclear whether checking a sub-box under "INCLUDING" means that specific category IS included, or whether the sub-box is merely labeling what types of sensitive information exist.
- **Third-party compensation notice:** The statement "A third party will compensate FMC directly or indirectly when disclosure will result in such compensation" is difficult to parse and its practical implication for patients is unclear.
- **No submission instructions:** The form provides no guidance on how or where to submit the completed form.

### ❌ ERRORS
- **"Privacy Act" misnomer:** The form references "§164.524 of the Privacy Act." The correct citation is 45 CFR §164.524, which is part of the HIPAA Privacy Rule, not "the Privacy Act" (which typically refers to the Privacy Act of 1974, 5 U.S.C. §552a, a separate federal law applying to federal agencies). This same error appears in form-1.
- **Footer date inconsistency:** The footer reads "FMCCAH-ReleaseofInformationVerbal 03012020 slssls" (March 2020), but the notes describe the file URL as containing "01012021" — suggesting either the URL or the form body has an outdated date reference.

### ✨ BRIGHT SPOTS
- **Clear scope limitation:** The explicit statement that this authorization "does not allow release of copies" and requires a separate form for records copies is genuinely helpful in preventing patient confusion about what this form does and does not authorize.
- **Compact single-page design:** For a verbal release authorization, one page is appropriate and avoids overwhelming the patient with unnecessary length.
- **Granular information category checkboxes:** Allowing patients to specify exactly which types of information (lab, imaging, clinic visits, ER, etc.) may be shared verbally gives meaningful control rather than a blanket all-or-nothing authorization.
