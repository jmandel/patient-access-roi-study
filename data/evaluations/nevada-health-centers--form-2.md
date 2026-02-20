# Evaluation: Nevada Health Centers — form-2.pdf

## DOCUMENT IDENTIFICATION

This is an **"Authorization to Share Information"** form (internal document ID: FD-ALL.011es), not a Release of Medical Information or Right of Access request form. It allows patients to designate family members, friends, or other individuals who may contact the clinic and request information on the patient's behalf — or to terminate such authorization. It is functionally a **proxy access designation form**, not a patient-initiated records request.

Nevada Health Centers publishes three ROI-related forms. Form-1 is the primary general-purpose "Release of Medical Information" form. Form-3 is a WIC-specific variant of that release form. This form (form-2) serves a distinct purpose: it doesn't enable the patient to obtain their own records, but rather authorizes third parties to interact with the clinic about the patient's care. The form references the organization's Notice of Privacy Practices (FD-ALL.014e) and frames itself as exercising the Patient Rights Section of that notice.

## FINDABILITY

The form was found on the organization's patient forms page at `https://www.nevadahealthcenters.org/forms/`, which was discoverable via a site-scoped web search (`site:nevadahealthcenters.org authorization release medical records`). The forms page is organized by category (General Forms, Dental Forms, etc.) and this form was listed as "Authorization to Share Information Form (English/Spanish PDF)." The listing title is descriptive enough to distinguish it from the Release of Medical Information form. The URL path (`/wp-content/uploads/2025/08/FD-ALL.011es-Authorization-to-Share-Information-2-4-22-2.pdf`) includes the document ID and title, though the date in the filename (2-4-22) is a revision date, which is mildly useful.

The form was findable in approximately 2–3 steps: search → forms page → click link. This is reasonable. However, a patient looking specifically for a form to request their own records might download this form by mistake, since the title "Authorization to Share Information" could be confused with a general records release authorization.

## TECHNICAL ACCESSIBILITY

**Critical deficiency: no text layer.** The PDF was created in Adobe Illustrator 26.0 (Macintosh) and all text is rendered as vector paths, not as font glyphs. `pdftotext` returns empty output. The file contains 0 embedded fonts, 0 fillable form fields, and 0 embedded images. It is not a scan — it is a designed vector graphic where text was converted to outlines.

This means:
- **Screen readers cannot read the form.** It fails basic accessibility (ADA/Section 508) requirements.
- **Text cannot be copied or searched.** A patient cannot select or copy any text.
- **No fillable fields.** The form must be printed, hand-filled, and returned physically (or scanned back). There is no digital workflow.
- **File size** is 463,726 bytes (≈453 KB) for 2 pages — moderately large for a form with no images, due to the vector path representation of text.

The PDF is not tagged, has no form fields, and no JavaScript. PDF version 1.5, letter size. Title metadata is present ("FD-ALL.011es Authorization to Share Information DRAFT2 2-4-22") — notably, the title still contains the word "DRAFT2," suggesting the metadata was never finalized even though the form has been in production since at least 2022.

## CONTENT DESIGN

**Length:** 2 pages — page 1 in English, page 2 in Spanish. The Spanish page is a faithful translation. For a proxy designation form, 1 page per language is appropriate and concise.

**Structure and layout:** The form has a clear, logical flow:
1. Header with organization logo and form title
2. Explanatory paragraph referencing the Notice of Privacy Practices
3. Two checkbox options: authorize persons OR terminate authorization
4. Four rows for names/relationships/DOBs of designated persons
5. Note about minor children
6. Checkboxes for scope of information sharing
7. Patient identification and signature block
8. Revision footer

**Clarity:** The introductory paragraph is somewhat dense but not unreasonable: *"Our Notice of Privacy Practices (FD-ALL.014e) provides information about how we may use and disclose protected health information about you. The notice contains a Patient Rights Section describing your right to authorize a member of your family, friend or a designated individual of your choosing to discuss your protected health information."* This is moderately clear, though it uses "protected health information" without defining it and references an internal document number (FD-ALL.014e) that a patient would not know how to locate.

**Information scope options** are limited to four checkboxes: "Medication refills," "Referrals," "All information pertaining to appointments," and "All medical information." These are functional but coarse-grained.

**Revision history:** The footer reads "Origination 8/8/08 | Revised 2/4/2022 (Replaces MR1.02Fa) Page 1 of 1" — the "Page 1 of 1" is inaccurate given the PDF is 2 pages (the Spanish version appears to also say "Pagina 1 de 1"), though this likely reflects the intent that each language version is self-contained.

## PATIENT-CENTEREDNESS

**This form does not serve a patient trying to access their own health records.** It is specifically designed for designating third parties who may interact with the clinic on the patient's behalf. A patient seeking their own records under HIPAA's Right of Access would need form-1 (Release of Medical Information), not this form.

The form does offer:
- **Bilingual support** (English/Spanish) — valuable for the patient population served by this FQHC.
- **Termination option** — patients can revoke third-party access using the same form, which is clearly presented.
- **Minor child provisions** — explicit instructions for parents/guardians signing for minor children.

However:
- **No electronic delivery or submission options** are mentioned.
- **No expiration/auto-revocation** clause is stated — the authorization appears to remain in effect indefinitely unless the patient actively terminates it, which is both a pro (no need to re-authorize regularly) and a potential concern (stale authorizations).
- **No reference to HIPAA § 164.524** or patient rights language beyond the Notice of Privacy Practices reference.

## COMPLIANCE

Since this is a proxy access form rather than a Right of Access request form, standard HIPAA Right of Access compliance concerns (fees, turnaround time, format options) are less directly applicable. However, some observations:

- **No expiration date field or clause.** Unlike form-1, which states "IF LEFT BLANK, THIS AUTHORIZATION WILL EXPIRE IN 120 DAYS," this form has no expiration provision. The authorization appears perpetual unless actively revoked.
- **No mention of how to submit the form.** There are no instructions about where to return the completed form — no address, fax number, email, or portal reference.
- **"All medical information" checkbox** is very broad. A patient checking this box for a third party grants sweeping access without granular control over sensitive categories (behavioral health, substance abuse, HIV/AIDS, etc.) that form-1 handles with explicit opt-in/opt-out checkboxes.

## NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES
- **No submission instructions.** The form contains no information about how or where to submit it — no address, fax, email, phone number, or reference to a patient portal. A patient completing this form has no guidance on what to do with it.
- **Perpetual authorization without expiration.** Unlike the companion Release of Medical Information form (form-1) which defaults to 120 days, this authorization has no stated expiration. It's unclear whether this is intentional policy or an oversight.
- **"Page 1 of 1" on a 2-page document.** The footer pagination is technically incorrect, likely reflecting that each language version is considered standalone, but this could confuse patients or staff.

### 🚩 RED FLAGS
- **"All medical information" lacks sensitive-category safeguards.** Form-1 includes explicit opt-in/opt-out for AIDS/HIV, behavioral/mental health, alcohol/drug, and social services information. This form offers "All medical information" as a single checkbox with no such protections, potentially authorizing third-party access to sensitive categories without informed, specific consent — which may conflict with state laws governing disclosure of certain categories of health information.

### ❌ ERRORS
- **PDF title metadata contains "DRAFT2."** The internal title reads "FD-ALL.011es Authorization to Share Information DRAFT2 2-4-22," suggesting the document was never finalized in metadata despite being published for patient use.
- **No text layer in the PDF.** All text is rendered as vector paths (created in Adobe Illustrator), making the document completely inaccessible to screen readers, text search, and copy/paste — a significant accessibility defect for a patient-facing form.

### ✨ BRIGHT SPOTS
- **Bilingual English/Spanish in a single document.** The form provides a complete Spanish translation on page 2, which is appropriate for the patient population served by a Nevada FQHC and makes the form more inclusive without requiring patients to find a separate Spanish version.
- **Dual-purpose design (authorize and terminate).** The form serves both to grant and revoke third-party access, reducing the number of forms patients need to navigate.
