# JPS Health Network — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **Health Information Exchange (HIE) Authorization Form**, not a traditional Release of Information (ROI) form. Its purpose is to authorize JPS Health Network to share the patient's health records with their other healthcare providers via the HIE system. The title reads "Authorization of HIE" and the body states: *"I, the signer, agree to JPS Health Network's Health Information Exchange (HIE) to release my health records to my HIE providers."*

Three forms were found for JPS Health Network on the Patient Records page:
- **form-1.pdf** — The main ROI / Authorization & Request for Release of Information form (English). Image-only scan from 2018, no text layer, no fillable fields.
- **form-2.pdf (this document)** — HIE Authorization Form. Digitally created, has text layer and fillable fields.
- **form-3.pdf** — HIE Revocation of Records Authorization Form. Companion to form-2, used to cancel HIE consent. Nearly identical layout and metadata.

Form-2 is thus a **supplementary document** — it does not serve the primary use case of a patient requesting a copy of their own records. Rather, it authorizes provider-to-provider data sharing via a health information exchange. A patient seeking their own records would need form-1 instead.

## 2. FINDABILITY

Per the retrieval notes, this form was found on the **Patient Records page** (https://jpshealthnet.org/patient-tools/patient-records), under a "Health Information Exchange" accordion section, linked as "Authorization Form — English." The page is reachable within 2 clicks from the homepage (Patient Tools → Patient Records).

The URL is descriptive: `Patient-HIE-Authorization-Form.pdf`, and the file was recently updated (2025-05 per the URL path). Web searches also surfaced the Patient Records page. The form itself is easy to find, though a patient looking specifically for a records-request form might be confused by the distinction between the HIE authorization section and the "JPS Authorization Form" section above it.

The findability is **good for the HIE form specifically**, but its placement alongside the main ROI form without clear differentiation of purpose could be confusing.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Yes — full text is extractable (1,570 characters).
- **Fillable fields**: 9 interactive form fields are present (metadata reports `fillable_field_count: 9`), though `fillable_field_names` is an empty array, suggesting the fields exist but lack descriptive names/labels in the PDF field metadata.
- **Page count**: 1 page.
- **File size**: 69,354 bytes (~68 KB) — very compact and appropriate for a single-page form.
- **PDF version**: 1.7, which is modern.
- **Image-only scan**: No — this is a digitally created document.
- **Font count**: 3 fonts.
- **Embedded images**: 0.

This is a **well-constructed digital PDF** — a stark contrast to form-1.pdf, which is an image-only scan from 2018. Form-2 demonstrates that JPS is capable of producing digitally native, fillable PDFs; they simply haven't updated the main ROI form to the same standard.

The submission instructions are notable: *"Mail, fax, or email this form to the Data Integrity team."* and an encrypted email address is provided (`him-dataintegrity@jpshealth.org`). This offers a meaningful electronic submission path — again, in contrast to the main ROI form which states "It is not possible to accept electronic transfer of this form at this time."

## 4. CONTENT DESIGN

**Length**: 1 page, ~1,570 characters. Concise and proportionate to the simple purpose (opt-in consent).

**Clarity**: The language is relatively plain but contains some awkward phrasing. The sentence *"This gives future use to records by the HIE to my providers' past and now"* is grammatically confusing — it appears to mean the HIE will share both past and future records with the patient's providers going forward, but the wording is muddled.

**Organization**: The form follows a logical structure:
1. Title ("Authorization of HIE")
2. Patient identification fields (Name, DOB, Address, Phone/Email)
3. Authorization statement
4. Processing note (72-hour turnaround)
5. Signature block
6. Administrative use field (MRN/Acct #)
7. Legally authorized representative definition
8. Submission instructions (mail, fax, email)

**Layout**: Clean and uncluttered for a single-page form. No embedded images, 3 fonts suggesting visual hierarchy.

**Readability**: The main authorization text is short and reasonably accessible. The legally authorized representative definition block at the bottom is dense legalese referencing the Texas Consent to Medical Treatment Act, but this is a necessary legal inclusion and is clearly separated from the main authorization language.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This form is **neither** — it is an HIE opt-in authorization. It does not help a patient obtain their own records. A patient arriving at this form while trying to request their records would need to be redirected to form-1.

**Scope options**: None. The authorization is all-or-nothing — the patient consents to share "my health records" broadly via the HIE. There is no option to limit which records, record types, or date ranges are shared.

**Format/delivery options**: Not applicable since this is not a records request form.

**Right of Access language**: No reference to HIPAA § 164.524 or patient rights, which is appropriate since this is not a patient access form.

**EHI Export awareness**: No mention of electronic health information export or bulk data.

**Processing time**: The form states *"The Data Integrity team takes up to 72 hours once the form is received"* — this is a clear and reasonable turnaround time.

**Proxy authorization**: The form allows a "Patient or Legally Authorized Proxy" to sign, with a detailed definition of who qualifies, referencing Texas law. This is thorough.

**Submission options**: Three channels — mail, fax, and encrypted email — are offered with complete contact information. This is notably more accessible than the main ROI form.

## 6. COMPLIANCE

**Unreasonable barriers**: None observed. The form is simple, accepts electronic submission, and has a 72-hour processing timeline.

**Expiration/auto-revocation**: The authorization has **no stated expiration date**. The form says it *"starts after the date of this signed form once the form is processed"* with no end date. The companion revocation form (form-3) exists for patients to cancel consent. This is reasonable — ongoing HIE participation shouldn't require periodic renewal.

**Broad consent bundling**: The authorization is narrowly scoped to HIE sharing only. The revocation form (form-3) explicitly clarifies: *"This consent is for the HIE services. It does not cancel other consents to release records that I have given."* This is good — the two are kept separate.

**ID requirements**: No photo ID or in-person requirements for this form.

**Fee disclosure**: No fees mentioned for the HIE authorization, which is appropriate.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Confusing authorization language**: The sentence *"This gives future use to records by the HIE to my providers' past and now"* is grammatically unclear and could confuse patients about the scope of what they're consenting to. It likely means "this authorizes the HIE to share your past and current records with your providers going forward," but the wording does not clearly convey this.
- **"My HIE providers" is undefined**: The form authorizes release to "my HIE providers" without explaining who that includes, how a patient can find out which providers participate in the HIE, or whether the patient can limit which providers receive data.

### ✨ BRIGHT SPOTS

- **Encrypted email submission**: The form offers submission via encrypted email (`him-dataintegrity@jpshealth.org`) alongside mail and fax — a meaningful electronic option that the organization's main ROI form (form-1) lacks entirely. This demonstrates the organization can support digital workflows.
- **Clear processing timeline**: The "up to 72 hours" processing note sets explicit expectations, which is better than many forms that give no timeline at all.
- **Thorough proxy definition**: The legally authorized representative definition is comprehensive, citing specific Texas law provisions and listing six qualifying categories, rather than using a vague catch-all.
- **Clean digital-native design**: As a single-page, digitally created PDF with fillable fields and extractable text at only 68 KB, this is technically well-executed — especially compared to the organization's own main ROI form, which is a 478 KB image-only scan with no fillable fields.
- **Separate revocation form**: Providing a dedicated revocation form (form-3) makes it easy for patients to withdraw consent, rather than burying the opt-out process.
