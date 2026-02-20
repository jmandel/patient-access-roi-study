# Evaluation: Southeast Medical Group — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **MediCopy Authorization for the Release of Medical Records**, dated 2020 based on the source URL path (`/2020-05/MediCopy Authorization 2020.pdf`). It is a generic, third-party ROI authorization form produced by MediCopy, a Release of Information service company — not a Southeast Medical Group (SEMG)-specific document.

The form is one of two MediCopy authorization PDFs found on the MediCopy ROI page (form-1.pdf is the 2023 version; this is the 2020 version). Both are linked from the same MediCopy page that SEMG directs patients to via its "Request Records" workflow. The extracted text of form-2 and form-1 is character-for-character identical (both 2,280 characters), suggesting the 2020→2023 revision was cosmetic (font/layout) rather than substantive.

SEMG does not publish its own standalone ROI form. Two other forms were found on SEMG's own site: a Patient Portal Proxy Authentication Form (form-3.pdf, image-only scan) and a Patient Registration Form (form-4.pdf, which includes HIPAA acknowledgement language but is not an ROI form). This form-2.pdf is therefore one of two versions of the *only* ROI authorization form available to SEMG patients.

## 2. FINDABILITY

**Finding this form requires a multi-step redirect chain.** The patient journey documented in notes.md is: mysemg.com → Resources → Medical Records → "Request Records" → redirect to `semg.link/med-records` → lands on `medicopy.net/patients` → navigate to MediCopy's ROI page → find the 2020 PDF link among multiple options.

This specific 2020 version is an older, potentially superseded form that is still accessible on MediCopy's site but may not be prominently linked. A patient seeking the current authorization form would more likely encounter the 2023 version (form-1.pdf). The existence of two nearly identical versions on the same site creates unnecessary ambiguity about which to use.

No SEMG-specific web search (`site:mysemg.com`, `"Southeast Medical Group" authorization release filetype:pdf`) surfaced this form. It can only be found by following SEMG's redirect to MediCopy and then navigating MediCopy's site.

## 3. TECHNICAL ACCESSIBILITY

- **Format:** Single-page PDF, 1.19 MB
- **Text layer:** Yes — full text is extractable and selectable
- **Fillable fields:** Zero (`fillable_field_count: 0`). Despite being a form with numerous blank fields for patient information, facility details, and checkboxes, none are implemented as interactive PDF form fields. The form must be printed and filled by hand.
- **Image content:** 1 embedded image (likely the MediCopy logo/header)
- **Fonts:** 9 fonts used
- **File size:** 1.19 MB is moderately large for a single-page PDF, suggesting embedded images or non-optimized assets

The lack of fillable fields is a significant technical limitation. A patient who downloads this PDF cannot complete it digitally — they must print it, fill it by hand, and then scan or fax it back. MediCopy does offer an online HelloSign-based authorization as an alternative, but this PDF artifact itself is not digitally functional.

## 4. CONTENT DESIGN

The form is organized into clearly labeled sections using plain-language question headers:

1. **"Where are the records being released from?"** — Facility Name, Provider Name(s), Address, City, State
2. **"Tell us about the patient."** — Name, DOB, SSN (last 4), Email, Address, Phone, Fax
3. **"Where are we sending the records?"** — Name, Email, Address, Phone, Fax
4. **"What would you like released? Check all that apply."** — 11 options including "All Records," specific record types, date range, and "Other"
5. **Exclusion section** — 3 sensitive categories (Substance Abuse, AIDS/HIV/STDs, Psychological/Psychiatric)
6. **"Purpose of Disclosure: Why are we sending the records?"** — 5 checkbox options
7. **"Delivery Method: How would you like the records sent?"** — Email, Fax, Postage
8. **Authorization/Signature block** — Legal text, signature line, relationship, date

**Strengths:**
- The conversational question-style headers ("Tell us about the patient," "Why are we sending the records?") are more approachable than typical legal form language.
- The exclusion section empowers patients to protect sensitive information categories.
- The authorization text is relatively concise (a single paragraph).

**Weaknesses:**
- The form fits everything onto a single page, which creates a dense layout.
- SSN collection (even last 4 digits) is unusual for an ROI form and may deter patients.
- No instructions on where/how to submit the completed form are included on the form itself.

## 5. PATIENT-CENTEREDNESS

**The form is oriented toward general release, not specifically toward patient self-access.** The structure assumes a sender and a recipient, with "Personal Use" being just one of five purpose options. A patient requesting their own records must fill in both the "Where are the records being released from?" and "Where are we sending the records?" sections, essentially providing their own address twice.

The form requests a **Social Security Number** (last 4 digits: `"SSN: XXX-XX-  __"`), which is not required by HIPAA for patient access requests and may create unnecessary privacy concerns for patients.

The **Purpose of Disclosure** options include "Personal Use," which appropriately covers patient self-access, but this is listed alongside legal and insurance purposes without any differentiation in process or rights.

The **Delivery Method** section offers Email, Fax, and Postage, with the note `"Postage (additional fee applies)"`. No fee amount is disclosed. Email and Fax are listed without fee notations, which is positive for electronic delivery but leaves patients uncertain about whether any fees apply to those methods.

There are **no instructions** on the form itself about:
- Where to submit the completed form
- Expected turnaround time
- Patient rights under HIPAA
- How to contact someone with questions
- Whether fees apply (beyond the vague postage note)

The form does not mention SEMG by name anywhere. A patient downloading this from MediCopy's site might be confused about whether this is the correct form for their SEMG records.

## 6. COMPLIANCE

The authorization paragraph includes several HIPAA-relevant disclosures:

- **Right to revoke:** `"I understand that I may cancel this request with written notification but that it will not affect any information released prior to notification cancellation."` — Correctly states revocability.
- **Re-disclosure warning:** `"I understand that the information used or disclosed may be subject to re-disclosure by the recipient listed above and will no longer be protected by federal regulations."` — Standard re-disclosure notice.
- **No conditioning of treatment:** `"I understand I can refuse to sign this authorization and my healthcare provider may not condition treatment on my signing this authorization."` — Important patient right correctly stated.
- **Expiration:** `"This authorization is valid for 12 months from the date of signature."` — Provides a defined expiration period.

**Notable compliance observations:**

- The form authorizes **"MediCopy and its affiliates"** to release records, rather than the healthcare provider. This is technically appropriate since MediCopy operates as the provider's agent, but it may confuse patients about who holds their records.
- The form mentions `"specially protected records such as those relating to psychological or psychiatric impairments, drug abuse, alcoholism, sickle cell anemia or HIV infection"` — the inclusion of **sickle cell anemia** as a specially protected category is unusual and may reflect Georgia-specific protections or may be an error/overreach.
- No mention of the HIPAA Right of Access rule (45 CFR § 164.524) or fee limits specific to patient access requests.
- No mention of Georgia-specific medical records laws.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection on an ROI form.** The form asks for the last 4 digits of the patient's Social Security Number (`"SSN: XXX-XX-  __"`). HIPAA does not require SSN for patient access requests, and collecting it on a form that will be transmitted (potentially via email or fax) creates an unnecessary data exposure risk. This may deter patients from completing the form.

- **No fee disclosure.** The form notes `"Postage (additional fee applies)"` but provides no dollar amount. No information about copy fees, per-page charges, or whether different fee structures apply to patient self-access vs. third-party requests. Under HIPAA's Right of Access, fees for patient access are limited to reasonable cost-based fees, but the form gives no indication of what will be charged.

### ⚠️ AMBIGUITIES

- **Which version to use?** This 2020 form and the 2023 version (form-1.pdf) have identical text content. Both appear to be linked from MediCopy's site. There is no indication on the form itself of its version or date, nor any guidance about which version is current.

- **No submission instructions.** The form contains no mailing address, fax number, email address, or online portal URL for submitting the completed form. A patient who prints and fills this form has no way to know where to send it based on the form alone.

- **"MediCopy and its affiliates" as the releasing party.** The authorization language states `"I hereby authorize MediCopy and its affiliates to release or disclose..."` — patients may not understand MediCopy's role or relationship to SEMG, particularly if they arrived at this form through SEMG's redirect chain.

### ❌ ERRORS

- **Sickle cell anemia listed as specially protected information.** The authorization text lists `"sickle cell anemia"` alongside HIV, substance abuse, and psychiatric records as "specially protected records." While some states have protections for genetic information, sickle cell anemia is not typically categorized alongside these highly sensitive categories in standard HIPAA authorization forms. This appears to be an error or an unusual editorial choice that could confuse patients about the nature of their protections.

### ✨ BRIGHT SPOTS

- **Plain-language section headers.** The use of conversational questions as section headers ("Tell us about the patient," "Where are we sending the records?", "Why are we sending the records?") is notably more approachable than the legalistic headings typical of ROI forms. This lowers the reading difficulty for patients.

- **Opt-out exclusion model for sensitive records.** Rather than requiring patients to opt *in* to release sensitive records, the form defaults to including them but offers explicit exclusion checkboxes for Substance Abuse, AIDS/HIV/STDs, and Psychological/Psychiatric conditions. This respects patient choice while streamlining the common case.
