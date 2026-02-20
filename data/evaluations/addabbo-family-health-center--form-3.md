# Evaluation: Joseph P. Addabbo Family Health Center — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **"HIPAA Consent to Release Information Form for Use and Disclosure of Protected Health Information and Acknowledgment of Receipt of Notice of Privacy Practices."** It is a single-page general consent form that patients sign during registration, acknowledging receipt of the Notice of Privacy Practices (NPP) and consenting to routine uses and disclosures of their Protected Health Information as described in the NPP.

**This is not a Release of Information (ROI) authorization form.** It does not enable a patient to request copies of their own records. Rather, it is an administrative intake document that authorizes the organization's ongoing routine use and disclosure of PHI — essentially the HIPAA-required NPP acknowledgment bundled with a broad consent.

In context of the three forms found for this organization:
- **form-1.pdf** is the actual ROI form — New York State's OCA Official Form No. 960, "Authorization for Release of Health Information Pursuant to HIPAA" (2 pages, 25 fillable fields).
- **form-2.pdf** is a bilingual "We're Listening" patient transfer/survey form.
- **form-3.pdf** (this document) is the NPP consent/acknowledgment form, linked from the Patient Forms page as "HIPAA Consent to Release Information — English."

The labeling on the website ("HIPAA Consent to Release Information") could easily mislead a patient into thinking this is the form they need to request their records, when it is not.

## 2. FINDABILITY

This form was found on the organization's **Patient Forms** page (`https://www.addabbo.org/for-patients/patient-forms/`), labeled "HIPAA Consent to Release Information — English." It was **not** found on the Medical Records page, which instead links to the actual ROI form (form-1.pdf).

The form is hosted on a third-party platform (`pbformsonline.com`) via a JavaScript-based PDF viewer. The actual PDF URL (`/pdv-view-merge/pdfviewer/data/fed/1563365959addabbo-hipaa-release-english.pdf`) had to be discovered through browser DevTools — there is no direct download link on the site. This indirect hosting approach hinders accessibility for patients using assistive technology or simpler browsers.

The misleading label "HIPAA Consent to Release Information" may cause patients to download this form when they actually need to request records, sending them down a wrong path before they discover form-1.pdf on the separate Medical Records page.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (2,723 characters). Not an image-only scan.
- **Fillable fields**: 10 fillable fields are reported, though `fillable_field_names` is empty (no named fields). This suggests the fields exist but are not labeled accessibly, which degrades the experience for screen readers and form-fill tools.
- **File size**: 395,328 bytes (386 KB) for a single-page document — somewhat large, likely due to the embedded image (1 embedded image, probably the organizational logo). Not excessive but larger than necessary.
- **Page count**: 1 page.
- **Fonts**: 7 fonts used.
- **Digital-first design**: This appears to be a natively created digital PDF rather than a scanned paper form, given the text layer and fillable fields. However, the lack of named form fields limits its digital usability.

## 4. CONTENT DESIGN

The form is a **single page**, which is appropriately concise for its purpose (NPP acknowledgment + consent). However, the content is densely worded legal text with long, complex sentences.

**Clarity issues**: The form uses heavy legalese throughout. For example:
> "I consent to the use and disclosure of such Protected Health Information as described in Joseph P. Addabbo Family Health Center's Notice of Privacy Practices for Protected Health Information."

And:
> "I agree that this Consent supersedes any and all previous consents, authorizations, releases, and other written legal permissions signed by me regarding the use and disclosure of the Protect Health Information covered by this Consent, and I release Joseph P. Addabbo Family Health Center and its health care providers from all liabilities related to their compliance with this Consent."

This supersession clause, combined with the liability release, is dense and would be difficult for most patients to parse. Note also the typo: "Protect Health Information" instead of "Protected Health Information."

**Layout**: The form has a clear title block and logically separates the acknowledgment section from the consent section. Signature blocks are organized for both patient and authorized representative. The fields for the representative include "Basis of Authority to Act on Behalf of Patient," which is a useful inclusion.

**Date indicator**: "Updated 4/6/16" — the form is nearly 10 years old at this point, raising questions about whether it reflects current practices and legal requirements.

## 5. PATIENT-CENTEREDNESS

This form **does not serve a patient trying to access their own health records**. It is a general consent for the organization's routine use and disclosure of PHI, not a mechanism for requesting record copies.

- **No scope options**: There are no fields for selecting specific record types, date ranges, or delivery formats.
- **No Right of Access language**: No reference to HIPAA § 164.524 or the patient's right to access their records.
- **No format or delivery options**: No mention of electronic delivery, mail, or pickup.
- **No EHI Export awareness**: No mention of electronic health information export.

The form's sole patient-facing function is to document consent to the organization's existing privacy practices and to acknowledge receipt of the NPP. A patient seeking their records would gain nothing from this form.

## 6. COMPLIANCE

**Broad consent bundling**: The form bundles NPP acknowledgment with a broad consent to use and disclose PHI and a liability release — all in a single signature. The supersession clause ("this Consent supersedes any and all previous consents, authorizations, releases, and other written legal permissions") is notably broad.

**Liability release**: The language "I release Joseph P. Addabbo Family Health Center and its health care providers from all liabilities related to their compliance with this Consent" asks patients to waive liability claims related to the organization's handling of their PHI. This is an unusual and potentially concerning provision in a consent form.

**Revocation**: The form notes patients "may revoke this Consent in writing at any time using the procedure in the Notice," which is appropriate, though the procedure itself is not described — the patient must consult the NPP.

**Property claim**: The statement that "all health information concerning the above-named patient ('Protected Health Information') shall remain the property of Joseph P. Addabbo Family Health Center" asserts ownership over the patient's health information. While this reflects common practice in some states, it could discourage patients from understanding their right to access copies.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **Liability release in consent form**: The form asks patients to "release Joseph P. Addabbo Family Health Center and its health care providers from all liabilities related to their compliance with this Consent." Embedding a liability waiver in a routine intake consent form is unusual and may discourage patients from raising privacy complaints.
- **Blanket supersession clause**: "This Consent supersedes any and all previous consents, authorizations, releases, and other written legal permissions" could be interpreted to override more specific or more protective authorizations the patient previously signed.
- **PHI ownership assertion**: Stating that PHI "shall remain the property of" the organization without mentioning the patient's right to access copies may create a misleading impression about patient rights.

### ⚠️ AMBIGUITIES
- **Misleading website label**: The form is labeled "HIPAA Consent to Release Information" on the Patient Forms page, which strongly suggests it is a records release authorization. A patient looking for a way to request their records would likely download this form first, only to find it is an intake consent document. The actual ROI form (form-1.pdf) is on a different page.
- **Undefined NPP reference**: The form references "the procedure in the Notice" for revoking consent, but the Notice itself is not linked, attached, or described. Patients must separately locate the NPP to understand their revocation rights.

### ❌ ERRORS
- **Typo**: "the Protect Health Information" should read "the Protected Health Information."
- **Redundant phrasing**: "Other Legal Authorized Legal Representative" contains an awkward double use of "Legal" that appears to be a drafting error.
- **Stale date**: "Updated 4/6/16" — nearly a decade old, raising concerns about currency with evolving privacy regulations.

### ✨ BRIGHT SPOTS
- **Representative accommodation**: The form includes dedicated fields for a parent, guardian, or other legally authorized representative, including their basis of authority, telephone number, and address — a relatively thorough set of representative fields for a single-page form.
