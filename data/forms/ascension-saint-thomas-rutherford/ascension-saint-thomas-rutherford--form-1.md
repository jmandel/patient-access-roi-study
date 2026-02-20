# Evaluation: Ascension Saint Thomas Rutherford Hospital — form-1.pdf

**Organization:** Ascension Saint Thomas Rutherford Hospital (Murfreesboro, TN)
**Document:** Authorization for Disclosure of PHI (Form # STHS490, REV 02/04/20)
**Source URL:** `https://healthcare.ascension.org/-/media/project/ascension/healthcare/legacy/markets/tennessee/st-thomas/documents/sths409-authorization-for-disclosure-of-phi-1.pdf`

---

## 1. DOCUMENT IDENTIFICATION

This is a general-purpose **Authorization for Disclosure of Protected Health Information (PHI)** form used across the entire Ascension Saint Thomas system in Tennessee. It is not specific to Rutherford Hospital — the form lists nine facilities by name with checkboxes: DeKalb, Hickman, River Park, Rutherford, Medical Partners, Highlands, Stones River, Midtown, and West. This is a system-level form (scope: "system") branded as "Ascension Saint Thomas."

It is the only downloadable PDF form found for this organization. The primary records request pathway is actually a **Swellbox-based online wizard** (`swellbox.com/ascension-stthomas-wizard.html`) linked from the patient portal page. The PDF form is a secondary/alternative pathway, apparently intended for patients who prefer to submit by mail or email. No separate patient-access-specific form was found.

The form identifier "ROI2800" appears at the bottom alongside the form number STHS490, suggesting it is catalogued in the system's document management system. The revision date of 02/04/20 means the form is approximately six years old.

---

## 2. FINDABILITY

**Retrieval difficulty: Easy.** The retrieval notes indicate the form was found on the second web search query (`"Ascension Saint Thomas Rutherford" "medical records" "release form" filetype:pdf`), which returned a direct link. No bot blocking, CAPTCHA, or JavaScript rendering was required — a plain `curl` download succeeded.

However, the form is hosted on Ascension's **legacy content infrastructure** (URL path: `-/media/project/ascension/healthcare/legacy/markets/tennessee/st-thomas/documents/`). The "legacy" segment in the URL suggests this document may not be prominently linked from the current website architecture. A patient navigating the Ascension Saint Thomas Rutherford website would land on the patient portal page, which directs them to the Swellbox wizard — not to this PDF. The PDF appears to be discoverable primarily via search engines rather than through site navigation.

The filename (`sths409-authorization-for-disclosure-of-phi-1.pdf`) is descriptive but references "sths409" while the form itself is numbered STHS490 — a minor discrepancy that could confuse someone verifying they have the right document.

---

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The full text (3,632 characters) is extractable. This is not an image-only scan.
- **Fillable fields:** Zero. The form has no interactive form fields despite having clearly defined blanks for patient name, SSN, DOB, phone number, mailing address, email, dates of service, signature, and date. All must be completed by hand after printing.
- **Page count:** 1 page.
- **File size:** 744 KB — surprisingly large for a single-page text-based document with zero embedded images. The 5 fonts likely contribute, but this suggests inefficient PDF generation (possibly exported from a design application with excessive overhead).
- **Font count:** 5 fonts.
- **Digital-first design:** No. This is clearly designed as a print-and-fill form. The instruction "ALL BLANKS MUST BE COMPLETED" at the bottom reinforces the expectation that this will be printed, manually completed, and physically returned.

The absence of fillable fields is a significant technical shortcoming. A patient who wants to complete this form digitally must either use a PDF annotation tool or print it out.

---

## 4. CONTENT DESIGN

**Length and proportionality:** At one page, the form is appropriately concise. It covers authorization, recipient, purpose, record types, rights notice, and signature in a single page — an efficient layout.

**Organization:** The form uses a numbered structure (items 1–7) that follows a logical flow:
1. Facility selection and patient identification
2. Purpose of disclosure
3. Type and date range of records
4. Sensitive information acknowledgment
5. Revocation rights and expiration
6. Voluntariness and contact information
7. Delivery preference and signature

This is a reasonable ordering.

**Record type specificity:** The form offers a useful checklist of record types: Abstract, Discharge Summary, Operative/Procedure Report, Pathology Report, Copy of Medical Record only, Laboratory Report, Copy of Complete Record (medical records and financial records), History and Physical, Consultation, X-Ray Report, and an "Other" blank. This gives patients meaningful control over scope.

**Language quality:** The form mixes plain language with moderate legalese. Patient-facing text like "I understand that authorizing the disclosure of this health information is voluntary" is reasonably clear. However, some passages are dense, such as item 5's revocation clause: "I understand that my revocation will not apply if this authorization was obtained as a condition of obtaining insurance coverage and the law provides my insurer with the right to contest a claim under my policy or the policy itself." This is a legally required statement but could benefit from a plain-language summary.

**Layout:** The form is densely packed for a single page. There is minimal whitespace, and the facility checkbox section at the top competes visually with the patient identification fields. The font appears small (likely 8–9pt in places) to fit everything on one page. The "Abstract" checkbox description in parentheses ("Includes H&P, Progress notes, Procedure reports, Consult, DS, Diagnostic Testing, and all dictated reports") is helpful but adds to the visual density.

---

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release:** This is a general-purpose authorization form. The first option reads "Use my health information as described below; and/or Disclose my health information to the following individual or organization:" — the "and/or" construction handles both patient access and third-party release, but there is no specific pathway or simplified process for a patient who simply wants their own records. A patient requesting their own records must complete the same form (including specifying themselves as the recipient and providing their own mailing address) as someone authorizing release to a third party.

**Delivery options:** The form offers two delivery preferences via checkboxes: "Mail" and "E-mail." The inclusion of email is a positive feature, and there is an email address field (`E-Mail Address: ___`). However, there is no option for electronic portal delivery, CD/USB, or HIPAA-mandated right to receive records in electronic format.

**Scope control:** The date range fields ("Health information covering treatment from ___ to ___") and the record-type checklist give patients reasonable control over what is released. The "Copy of Complete Record" option explicitly includes both medical and financial records, which is a useful option.

**Right of Access language:** The form does **not** reference HIPAA § 164.524 or the patient's Right of Access. The rights information in items 5 and 6 addresses revocation and voluntariness but does not inform the patient of their right to access their own records, the provider's obligation to fulfill requests within 30 days, or the fee limits under HIPAA.

**EHI Export:** There is no mention of electronic health information export, bulk data, or the 21st Century Cures Act's information blocking provisions.

**SSN requirement:** The form requests the patient's Social Security Number ("SSN: ___"). While not explicitly marked as required, the bold instruction "ALL BLANKS MUST BE COMPLETED" at the bottom implies it is mandatory. Collecting SSN for a records release is not a HIPAA requirement and raises privacy concerns.

---

## 6. COMPLIANCE

**Expiration:** Item 5 states: "Unless otherwise revoked, this authorization will expire on the following date, event, or condition: ___. If I fail to specify an expiration date, event, or condition, this authorization will expire in six months." The six-month default expiration is reasonable and is clearly stated.

**Voluntariness:** Item 6 includes appropriate non-conditioning language: "Saint Thomas Health may not condition treatment, payment, enrollment in its health plan, or eligibility for benefits on my signing this authorization."

**Revocation rights:** Item 5 explains the right to revoke in writing to the HIM Department, with standard limitations. This is adequately disclosed.

**Re-disclosure warning:** Item 6 appropriately warns: "if I authorize Saint Thomas Health to disclose my health information, the health information may be subject to redisclosure by the recipient and may no longer be protected by certain federal privacy regulations."

**Sensitive information:** Item 4 explicitly acknowledges that records may contain STD, HIV/AIDS, behavioral/mental health, and drug/alcohol treatment information. This is an important state-law acknowledgment (Tennessee law requires specific authorization for these categories), though the form does not give the patient an option to exclude these categories — it simply states that records "may include" them.

**"ALL BLANKS MUST BE COMPLETED":** This instruction, if taken literally, means a patient must fill in every field including SSN, which goes beyond HIPAA minimum requirements. However, a provider refusing to process an authorization because a patient omitted their SSN would create an unreasonable barrier.

---

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **SSN collection with "ALL BLANKS MUST BE COMPLETED" instruction:** The form requests a Social Security Number and implies it is mandatory. HIPAA does not require SSN for records authorization. Requiring SSN creates a privacy risk and could deter patients from submitting the form. The combination of the SSN field with the "ALL BLANKS MUST BE COMPLETED" directive is particularly concerning.

### ⚠️ AMBIGUITIES

- **Patient access vs. third-party release conflation:** The form's "Use my health information as described below; and/or Disclose my health information to the following individual or organization" structure does not clearly distinguish between a patient requesting their own records (Right of Access under HIPAA § 164.524) and an authorization for third-party disclosure (HIPAA § 164.508). These are legally distinct rights with different timelines, fee structures, and denial grounds. Using a single form for both may lead to patient access requests being processed under the more permissive (for the provider) third-party authorization framework.

- **Sensitive information handling:** Item 4 states records "may include" HIV/AIDS, mental health, and substance abuse information, but does not give the patient the option to include or exclude these categories. It's unclear whether checking a record type automatically includes sensitive information within that category.

### ❌ ERRORS

- **Filename/form number mismatch:** The PDF filename references "sths409" while the form footer reads "Form # STHS490." This discrepancy could confuse patients or staff trying to verify they have the correct version.

- **Stale branding:** The form uses "Saint Thomas Health" branding throughout the body text while the footer reads "Ascension Saint Thomas." This suggests the form body was not updated when Ascension re-branded the facilities, creating inconsistency between the header/footer and the legal text.

### ✨ BRIGHT SPOTS

- **Email delivery option:** The form includes an email delivery checkbox and an email address field, which is better than many ROI forms that only offer mail or in-person pickup.

- **Granular record type checklist:** The ten-item record type checklist (plus "Other") gives patients meaningful control over the scope of their request, with helpful parenthetical descriptions like the Abstract definition.

- **Contact numbers for every facility:** Item 6 lists the HIM department phone number for each of the eight Saint Thomas facilities, making it easy for patients to call with questions regardless of which facility they visited.

- **Online alternative exists:** While this PDF form itself is not digitally sophisticated, Ascension offers a Swellbox-based online wizard as the primary request pathway, giving patients a more modern option.
