# Evaluation: Boone County Health Center — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **HIPAA Contact Information form**, not a Release of Information (ROI) form. The document itself makes this distinction explicit: "This is not a substitute for a Release of Information form to obtain medical records." Its purpose is to allow patients to designate individuals authorized to receive their medical and/or billing information — essentially a standing permission list for the facility to communicate with specified family members or contacts about the patient's care and billing.

The form is titled "HIPAA CONTACT INFORMATION" and is 2 pages long (though the substantive content fits on roughly one page, with the signature block on page 2). It was originally a .docx file (`HIPAA-contact-form.docx`) uploaded to the website in May 2023 and converted to PDF via LibreOffice for this study.

In context with the other forms found for this organization:
- **form-1.pdf**: Older ROI form (August 2017 vintage), still accessible at its direct URL but no longer linked from the website.
- **form-2.pdf**: Current ROI form (February 2026), the active authorization for release of PHI.
- **form-3.pdf** (this document): A supplementary HIPAA contact designation form — a different document category entirely.

## 2. FINDABILITY

Per the retrieval notes, this form was found on the same "Patient Forms" section of the website (Patient Resources > General Information > Patient Forms) where the ROI form was listed. It was linked alongside the main ROI form. The source URL (`https://boonecohealth.org/wp-content/uploads/2023/05/HIPAA-contact-form.docx`) has a reasonably descriptive filename. The website required JavaScript rendering to display the form links (static curl returned no form links), which is a minor accessibility issue for automated retrieval but not a significant barrier for patients using a normal browser.

Overall findability is **easy** — the form is in a logical location on the site and co-located with the ROI form. However, the .docx format is less immediately accessible than a PDF would be.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: Originally a Microsoft Word .docx file, converted to PDF for this study. The .docx format is a significant accessibility concern — patients without Microsoft Word or a compatible application cannot easily open or fill out the form. Not all devices handle .docx reliably, and it's an unusual choice for a patient-facing form.
- **Text layer**: Yes, the converted PDF has a full text layer (1,368 characters extracted).
- **Fillable fields**: Zero fillable fields (`fillable_field_count: 0`). The form uses underscores/blank lines for all input areas — patient name, DOB, the contact table, signature, and date are all meant to be filled by hand.
- **File size**: 93,397 bytes (93 KB) for 2 pages — reasonable.
- **Page count**: 2 pages, though the content is sparse enough to fit on one page comfortably.
- **Fonts**: 3 fonts used.
- **Images**: 1 embedded image (likely the facility header/logo).
- **Digital-first design**: No. This is clearly designed as a print-and-fill paper form. The table structure with columns for "NAME," "RELATIONSHIP," "PHONE NUMBER," "RELEASE MEDICAL INFORMATION," and "RELEASE BILLING INFORMATION" renders as a grid meant for handwriting.

The table column headers appear truncated in the extracted text: "INFORMATI" and "ON" appear on separate lines for both "RELEASE MEDICAL INFORMATION" and "RELEASE BILLING INFORMATION," suggesting the table columns are too narrow even for the header text — a layout issue from the Word-to-PDF conversion or the original document design.

## 4. CONTENT DESIGN

**Length**: 2 pages, but content-sparse. The actual form could easily fit on a single well-designed page.

**Clarity**: The form uses reasonably plain language. The initial statement is clear: "Boone County Health Center (BCHC) is permitted to share any and all medical information with the following individuals listed below, including test results, sensitive information as stipulated by the State of Nebraska, and information disclosed during hospital and/or office visits." This is straightforward and tells the patient what they're authorizing.

**Exceptions mechanism**: The form includes a line for patients to specify exceptions: "The following are exceptions of information I do NOT want shared:___" — this is a good feature allowing patients to exclude specific types of information.

**Organization**: The form flows logically: header → explanation → exceptions → contact table → disclaimer → signature. However, the signature block is pushed to page 2 with only minimal content, resulting in wasted space.

**Contact table**: The table asks for Name, Relationship, Phone Number, Release Medical Information (X), and Release Billing Information (X). This allows granular control — a patient can authorize someone for billing only, medical only, or both. However, the number of rows available for contacts is not stated in the extracted text, limiting assessment of whether adequate space is provided.

**Address discrepancy**: The form lists the address as "723 West Fairview Street" and "PO Box 151, Albion, NE 68620," which matches the older form-1 address. The current form-2 uses "1173 South 8th Street." This suggests the HIPAA Contact Form has not been updated to reflect the organization's current physical address.

## 5. PATIENT-CENTEREDNESS

This form serves a specific patient need — designating who can receive information about the patient — and does so in a relatively patient-friendly way. Key observations:

- **Scope control**: Patients can specify exceptions for information they don't want shared, and can separately authorize medical vs. billing information disclosure per contact. This is meaningfully granular.
- **Sensitive information**: The form explicitly notes that authorization covers "sensitive information as stipulated by the State of Nebraska," which is transparent but may overwhelm patients who don't understand what that encompasses.
- **Duration**: The form states "THIS AUTHORIZATION WILL REMAIN IN EFFECT UNTIL IT IS REVOKED BY ME IN WRITING." This is patient-friendly in that it doesn't expire arbitrarily, but places the burden on the patient to revoke.
- **Revocation process**: Only "in writing" — no mention of how or where to submit the revocation.
- **Healthcare Power of Attorney**: The form asks patients to "list your Healthcare Power of Attorney and provide BCHC a copy of your Healthcare Power of Attorney form," which is practical guidance.
- **Not an ROI substitute**: The form clearly states it is not a substitute for an ROI form, which helps prevent patient confusion about its purpose.

## 6. COMPLIANCE

- **Scope of authorization**: The default authorization is very broad — "any and all medical information" including "sensitive information as stipulated by the State of Nebraska" and information from "hospital and/or office visits." The opt-out mechanism (listing exceptions) puts the burden on the patient to restrict, rather than requiring affirmative opt-in for sensitive categories.
- **No expiration**: The indefinite duration ("until revoked in writing") is permissive and avoids creating unnecessary re-authorization burden, but also means patients who forget they signed this form may have information shared longer than intended.
- **Initials required**: The form requires a patient initial next to the broad authorization statement ("_____(Initial)"), which is a reasonable consent confirmation mechanism.
- **MRN field**: The signature page includes an "MRN#" field, which most patients would not know. This could be confusing, though it may be intended for staff completion.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES
- **"Sensitive information as stipulated by the State of Nebraska"** — this phrase is vague for patients. It likely refers to substance abuse, mental health, and HIV/AIDS information (as broken out separately in the ROI forms), but the HIPAA Contact Form does not enumerate what "sensitive information" includes. A patient cannot make an informed exception without understanding what categories exist.
- **Revocation process unclear**: The form states authorization can be revoked "in writing" but does not specify where to send the revocation or provide contact information for doing so.

### ❌ ERRORS
- **Outdated address**: The form header lists "723 West Fairview Street" while the current ROI form (form-2) uses "1173 South 8th Street." This discrepancy suggests the HIPAA Contact Form has not been updated to reflect the facility's current address.
- **Truncated column headers**: The extracted text shows "INFORMATI" / "ON" split across lines for both medical and billing release columns, indicating the table columns are too narrow for their headers — a layout defect.

### ✨ BRIGHT SPOTS
- **Granular medical/billing split**: Allowing patients to separately authorize medical vs. billing information disclosure per contact is more granular than many similar forms, giving patients meaningful control.
- **Exception mechanism**: The ability to list information the patient does NOT want shared is a patient-empowering feature that many facilities omit from contact designation forms.
- **Clear disclaimer**: The explicit statement "This is not a substitute for a Release of Information form to obtain medical records" prevents confusion about the form's purpose.
