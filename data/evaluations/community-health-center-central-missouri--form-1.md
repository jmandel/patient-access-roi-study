# Evaluation: Community Health Center of Central Missouri — form-1.pdf

## 1. DOCUMENT IDENTIFICATION

This is a one-page "Authorization for Use and Disclosure of Protected Health Information" — a general-purpose ROI form used for both sending and receiving records. The form is the **2025 updated version**, sourced from `https://chccmo.org/wp-content/uploads/2025/08/Release-of-Records-updated-2025.pdf`. A second document (form-2.pdf) exists as the older 2023 version of the same form. The two are functionally similar, with the 2025 version being the currently active form. Both are general release/obtain forms — neither is specifically tailored for a patient exercising their HIPAA Right of Access.

## 2. FINDABILITY

The form was **very easy to find**. Per the retrieval notes, a straightforward web search for the organization name plus "authorization release health information" immediately returned direct PDF links hosted on chccmo.org. No navigation of the website was required — the PDFs are served directly from WordPress uploads (`/wp-content/uploads/2025/08/`). The filename `Release-of-Records-updated-2025.pdf` is descriptive and clearly indicates what the document is. There was no bot blocking, login wall, or JavaScript rendering barrier. Retrieval difficulty was rated "easy."

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full text (2,768 characters) is cleanly extractable, indicating this is a digitally created document rather than a scan.
- **Fillable fields**: **Zero** fillable form fields. Despite being a digital-origin PDF, the form contains no interactive fields — patients must print and handwrite entries. This is a significant missed opportunity.
- **File size**: 119,119 bytes (~116 KB) for a single page, which is reasonable. There is 1 embedded image (likely an organizational logo) and 6 fonts.
- **Page count**: 1 page — compact.
- **Digital-first design**: The document was clearly created digitally (it has a text layer, multiple fonts, clean layout), but it is designed as a **print-and-fill** form with blank lines and checkboxes, not as a digital-fill experience.

## 4. CONTENT DESIGN

The form is a **single page** covering patient identification, sender/receiver routing, record type selection, date range, purpose of disclosure, and acknowledgement of understanding. For a general ROI form, one page is efficient.

**Layout and organization**: The form follows a logical top-to-bottom flow: internal processing fields → patient identification → FROM/TO routing → method of release → information types → date range → purpose → acknowledgement → signature → clinic locations. However, the layout is **densely packed**. The information-to-be-released section and purpose-of-disclosure section appear to use a multi-column layout that, in the extracted text, results in fragmented reading order (e.g., "Fax" and "Hold for Pickup" are separated from their context, and "Fax: 573-632-2769" appears adjacent to unrelated content).

**Record type options**: The form lists: Entire Record, Lab/Pathology, Immunization Record, Consult Reports, Ultrasound Reports, Billing Records, Medication Records, Dental Records, Visit Notes, Dental Xrays, plus an "Other" field. This is a **reasonably comprehensive** list of 10 named record types.

**Method of release**: Fax, Mail, Hold for Pickup, Email. The inclusion of **email** as a delivery option is notable and a step up from many ROI forms.

**Date range options**: "Last 12 months," "Last 24 months," or a custom date range field. These preset options are convenient.

**Acknowledgement section**: The section is titled "AKNOWLEDGEMENT OF UNDERSTANDING" (misspelled — see Errors below). The text covers: scope of authorization, sensitive records (drug/alcohol, psychiatric, HIV/AIDS), expiration ("when the records requested on this authorization have been released, or in 365 days, whichever occurs first"), right to revoke, re-disclosure warning, non-conditioning of treatment, and right to request copies. The language is fairly standard legal boilerplate but is presented in a **single dense paragraph** — not broken into numbered points or visually separated for readability.

**Signature section**: Requires "Signature of Patient/Legal Guardian," "Date," "Relationship to Patient," and a **witness signature** with date.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is a **general-purpose** authorization that supports both sending records FROM and TO the organization. The FROM/TO structure with checkboxes for "Community Health Center of Central Missouri" or "Other" makes it dual-use. However, there is **no specific pathway or language for a patient simply requesting their own records** under the HIPAA Right of Access (45 CFR § 164.524). A patient wanting their own records must navigate the same form designed for provider-to-provider transfers.

**No HIPAA Right of Access reference**: The form does not mention HIPAA, the Right of Access, 45 CFR § 164.524, or any patient rights specific to self-access. The acknowledgement section mentions Federal privacy regulations only in the re-disclosure warning.

**No EHI export mention**: There is no reference to electronic health information export, patient portal access, or bulk data access.

**Delivery options**: The inclusion of email alongside fax, mail, and pickup is a positive feature, though there is no mention of electronic format options (e.g., CD, USB, patient portal download, CCDA).

**Sensitive records**: The acknowledgement states that signing the form authorizes release of "any drug and/or alcohol information, psychiatric, HIV testing and/or results or AIDS information contained within the records." This is an **all-or-nothing bundling** — there are no separate checkboxes allowing a patient to consent to or exclude sensitive record categories individually.

## 6. COMPLIANCE

**Witness requirement**: The form requires a witness signature ("Witnessed by: ______ Date: ______"). HIPAA does not require witnesses for a valid authorization. This adds a procedural barrier, though its severity depends on whether the organization actually enforces it.

**Expiration**: The authorization expires "when the records requested on this authorization have been released, or in 365 days, whichever occurs first." The 365-day expiration is reasonable. The "when released" termination clause is appropriate for a one-time records request.

**Sensitive records bundling**: As noted above, signing the form authorizes release of all sensitive categories (mental health, substance abuse, HIV/AIDS) without granular opt-in/opt-out. Some state laws (e.g., 42 CFR Part 2 for substance abuse records) may require separate consent for these categories.

**Non-conditioning**: The form includes appropriate language: "I understand by signing or not signing this authorization, my healthcare and payment for my healthcare will not be affected."

**Fees**: No fees are mentioned. The older form-2.pdf references potential costs ("I understand that I may be required to pay the cost of preparing and mailing copies"), but this 2025 version omits any fee language entirely.

**Revocation**: Appropriately addressed — patients may revoke "at any time by notifying Community Health Center of Central Missouri in writing."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness requirement**: The form requires a witness signature, which is not a HIPAA requirement and creates an unnecessary barrier — particularly for patients filling out and mailing the form from home.
- **Sensitive records bundling**: The form provides no mechanism to exclude sensitive record categories (substance abuse, mental health, HIV/AIDS) from the authorization. Patients must consent to release of all such information or not sign the form at all, which may conflict with 42 CFR Part 2 requirements for substance abuse records.

### ⚠️ AMBIGUITIES

- **Email delivery details unclear**: "Email" is listed as a method of release, but there is no field for the recipient's email address and no mention of encryption or security considerations. It's unclear how this option is operationalized.
- **FROM/TO dual structure**: The form structure could confuse patients who simply want to obtain their own records. The "Please send my records FROM" / "Please send my records TO" layout implies a transfer between entities, not a patient self-access request.

### ❌ ERRORS

- **"AKNOWLEDGEMENT" is misspelled** — should be "ACKNOWLEDGEMENT." This appears in the section header "AKNOWLEDGEMENT OF UNDERSTANDING."
- **Mailing address inconsistency**: The form body lists the address as "PO Box 104780 Jefferson City, MO 65101," while the footer lists "P.O. Box 104780 Jefferson City, MO 65110." The ZIP codes differ — 65101 vs. 65110. One of these is likely incorrect.

### ✨ BRIGHT SPOTS

- **Email as a delivery option**: Unlike many ROI forms that only offer fax, mail, or pickup, this form includes email as a release method. This is a meaningful improvement for patient convenience.
- **Preset date range options**: Offering "Last 12 months" and "Last 24 months" alongside a custom range reduces friction for common requests.
- **Comprehensive record type list**: Ten named record categories plus "Other" gives patients meaningful granularity in what they request.
