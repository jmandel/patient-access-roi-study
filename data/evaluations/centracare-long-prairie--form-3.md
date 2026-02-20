# Evaluation: CentraCare – Long Prairie Hospital — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

This is a **"Authorization to Share Substance Use Disorder Health Information"** — a single-page form specifically addressing consent for sharing SUD (Substance Use Disorder) records under 42 CFR Part 2. It is one of three documents found on CentraCare's medical records release page:

- **form-1.pdf**: The main "Authorization for Release of Health Information" (general ROI form, 2 pages, text-based)
- **form-2.pdf**: "Instructions for Completing Authorization for Release of Health Information" (companion instructions, 2 pages, text-based)
- **form-3.pdf**: This document — a standalone SUD-specific authorization form (1 page, image-only scan)

This form is a **supplementary** document. The main ROI form (form-1) already includes a "Special Disclosure" section for substance use disorder records with its own date range and description fields citing 42 CFR Part 2. This form-3 serves a different purpose: it is not about releasing SUD records to a third party, but rather about authorizing CentraCare to **share** SUD records internally for "Treatment, Payment, and Healthcare Operations" (TPO). The title and body language confirm this distinction — it authorizes CentraCare and its "personnel, affiliated entities, qualified service organizations, and business associates" to "access, use, exchange, and share my medical information, including my past, present and future SUD records for treatment, payment, and healthcare operations."

The document bears a revision date of "Rev 02/2026" and an internal tracking code "SCE_DT0726SUD" with a barcode at the bottom.

## 2. FINDABILITY

Per the retrieval notes, this form was found on CentraCare's centralized medical records release page at `https://www.centracare.com/patient-resources/medical-records-release/`. It was available alongside the main ROI form and instructions document — all accessible from the same page, suggesting reasonable discoverability for patients who navigate to the medical records section.

However, the notes indicate that **direct `curl` downloads returned "Access Denied" HTML pages** — the PDFs could only be retrieved by navigating to the page in a browser and using JavaScript `fetch()`. This bot-blocking behavior means automated tools, screen readers relying on direct link downloads, or patients using non-standard browsers may have difficulty accessing the file.

The form's source URL (`https://www.centracare.com/app/files/public/3366c37f-eada-4170-b4cd-21525b0d5f72/Authorization-to-Share-Substance-Use-Disorder-Health-Information.pdf`) uses a UUID-based path, meaning it is not guessable and depends entirely on the linking page for discoverability.

## 3. TECHNICAL ACCESSIBILITY

This document has **severe technical accessibility deficits**:

- **Image-only scan**: The metadata confirms `is_image_only_scan: true`, `has_text_layer: false`, `full_text_chars: 1` (just a form feed character). The PDF contains 5 embedded images and 0 fonts, confirming it is a scanned image with no underlying text.
- **No fillable fields**: `fillable_field_count: 0`. Despite having clearly labeled input fields (Patient Full Name, Patient Date of Birth, Patient Address, Patient Phone Number, City, State, Zip Code, Previous Patient Name, plus signature/date fields), none are digitally fillable.
- **No text selection or search**: Because there is no text layer, users cannot select, copy, or search any text in the document. Screen readers will find nothing to read.
- **File size**: 235,480 bytes for a single page — reasonable for an image scan but large compared to what a text-based single-page form would be.

The form must be printed and filled out by hand. This stands in stark contrast to form-1 (the main ROI form), which has a proper text layer, selectable text, and 5 embedded fonts — though notably form-1 also has 0 fillable fields.

## 4. CONTENT DESIGN

**Layout**: The form is a single page with a clean layout. The CentraCare logo appears in the upper left, the title "Authorization to Share Substance Use Disorder Health Information" in bold at the top. Patient demographic fields are organized in a simple table grid at the top. The body contains bulleted consent statements, revocation information, consequences of not signing, and a signature block at the bottom.

**Patient information section**: 8 fields — Patient Full Name, Patient Date of Birth, Patient Address, Patient Phone Number, City, State, Zip Code, and Previous Patient Name. These are standard demographic identifiers.

**Consent content**: The "I understand and agree" section has 4 bullet points covering:
1. Authorization for CentraCare and affiliates to share SUD records for TPO
2. Notice that shared records may be subject to re-disclosure and "may no longer be protected by 42 C.F.R. Part 2"
3. Statement about redisclosure under HIPAA, "except for uses and disclosures for any civil, criminal, administrative, and legislative proceedings against you"
4. Fundraising opt-out with contact information (email: foundation@centracare.com, phone: 320-240-2810 or 800-835-6652, ext. 52810)

**Revocation paragraph**: Provides a mailing address (CentraCare Health, Release of Information, 1900 CentraCare Circle St. Cloud, MN 56303), email (CCHROI@centracare.com), and phone (320-255-5624).

**Consequences section**: Two bullet points explaining what may happen if the patient does not sign — CentraCare "may not be able to see me as a patient, provide me with treatment, make referrals to other healthcare providers, or coordinate my healthcare" and "My insurer may not cover its portion of my medical bills."

**Signature block**: Includes lines for Patient signature + Date, Guardian or Legal Representative signature + Date, Printed guardian/Legal Representative name, Relationship to patient, and checkboxes for Parent, Legal Guardian, HealthCare Agent/Power of Attorney, Other.

**Footer**: "*Notice to recipients: 42 CFR part 2 prohibits unauthorized use or disclosure of these records." Revision date "Rev 02/2026" and tracking code "SCE_DT0726SUD" with a barcode.

**Readability**: The text is generally readable in the scanned image, though as a scan it is not as crisp as digitally-generated text. The language is moderately complex — not plain language, but not impenetrably legalistic either.

## 5. PATIENT-CENTEREDNESS

**Purpose clarity**: The form title clearly identifies it as SUD-specific. However, a patient might struggle to understand the relationship between this form and the SUD section already present in the main ROI form (form-1). There is no explanatory text or cross-reference helping patients understand when they need this form versus the Special Disclosure section of form-1.

**No expiration date field**: Unlike form-1, which includes a field for the patient to specify when the authorization expires (defaulting to one year), this form has **no expiration mechanism**. There is no stated expiration date or event. The revocation section explains how to revoke consent but does not state when the authorization automatically expires if not revoked. This means the authorization could be interpreted as perpetual.

**Revocation process**: The form provides clear instructions for revoking the authorization — writing to a specific address, emailing, or calling. It honestly notes that revocation "will stop any future sharing of your information but will be unable to stop any information that has already been released."

**Coercive framing**: The consequences-of-not-signing section states that CentraCare "may not be able to see me as a patient" and that the patient's "insurer may not cover its portion of my medical bills." This language strongly pressures the patient to sign.

**No date range scoping**: The consent applies to "my past, present and future SUD records" with no mechanism for the patient to limit the scope by date range, type of information, or specific provider/facility.

## 6. COMPLIANCE

**42 CFR Part 2 alignment**: The form references 42 CFR Part 2 in the footer and in the body. However, the 2024 updates to 42 CFR Part 2 (effective February 2024) aligned Part 2 more closely with HIPAA, allowing SUD records to be used for TPO purposes with a single general consent rather than individual authorizations. This form appears to be designed to obtain that general TPO consent. The revision date "Rev 02/2026" suggests it was recently updated, possibly to align with these regulatory changes.

**Conditioning treatment on authorization**: The statement that CentraCare "may not be able to see me as a patient" if the patient declines to sign raises compliance concerns. Under HIPAA, covered entities generally cannot condition treatment on signing an authorization for uses beyond TPO. However, the 2024 Part 2 final rule does allow providers to condition treatment on obtaining consent for SUD information sharing, so this language may be permissible under the updated regulations — though it remains controversial and potentially intimidating to patients.

**Re-disclosure language**: The form states records "may no longer be protected by 42 C.F.R. Part 2" after sharing, and includes a carve-out noting SUD records may be redisclosed under HIPAA "except for uses and disclosures for any civil, criminal, administrative, and legislative proceedings against you." This asterisked exception with the notice at the bottom represents an important patient protection, though the double-negative phrasing ("except for...against you") is somewhat confusing.

**No copy offered**: The form does not mention providing a copy to the patient.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Coercive conditioning of treatment**: The form states "I understand that if I do not sign this authorization: CentraCare may not be able to see me as a patient, provide me with treatment, make referrals to other healthcare providers, or coordinate my healthcare with those providers or others" and "My insurer may not cover its portion of my medical bills." While potentially permissible under the 2024 Part 2 rule updates, this language may intimidate patients into signing an authorization they don't fully understand. The insurance consequence statement is particularly concerning — it shifts financial risk to the patient for declining to consent.

- **No expiration date or automatic termination**: Unlike the companion general ROI form (form-1) which defaults to one-year expiration and lets patients specify a different date or event, this SUD consent form has **no expiration clause whatsoever**. The authorization covers "past, present and future SUD records" indefinitely. A patient must affirmatively revoke the authorization to terminate it.

- **Overbroad scope — "past, present and future"**: The consent is not time-limited or scoped to specific encounters. It covers all SUD records, past and future, across all CentraCare entities and business associates. Patients have no ability to narrow the scope.

### ⚠️ AMBIGUITIES

- **Relationship to form-1's SUD section unclear**: Form-1 (the main ROI form) already contains a "Special Disclosure" section specifically for substance use disorder records under 42 CFR Part 2. It is unclear when a patient would use form-3 versus the SUD section in form-1. Form-3 appears to be for ongoing TPO consent, while form-1's section is for a one-time release to a specified recipient — but this distinction is never explained anywhere.

- **Fundraising bullet point placement**: The fourth bullet point under the consent section abruptly shifts from SUD record sharing to fundraising contact: "CentraCare may contact me as part of its fundraising efforts." This is unrelated to substance use disorder authorization and its inclusion in this form conflates two distinct consent purposes. A patient might not realize they are also consenting to fundraising outreach by signing an SUD authorization.

### ❌ ERRORS

- **Image-only PDF with no text layer**: This is a scanned image with no OCR text layer, 0 fillable fields, and 0 fonts. It is completely inaccessible to screen readers and cannot be filled electronically. This fails basic ADA/Section 508 digital accessibility requirements. Both form-1 and form-2 have proper text layers, making this form an outlier in the set.

- **Future revision date**: The document shows "Rev 02/2026," which is in the future or very recent (current date is February 2026). This may indicate the form was pre-dated or the revision date reflects a planned effective date rather than actual publication.

### ✨ BRIGHT SPOTS

- **Clear revocation instructions**: The form provides multiple channels for revoking authorization (mail, email, phone) with specific addresses and numbers. The honest disclosure that revocation cannot undo prior sharing is commendable transparency.

- **Litigation protection for patients**: The asterisked note that SUD records cannot be redisclosed "for any civil, criminal, administrative, and legislative proceedings against you" — reinforced by the footer notice "42 CFR part 2 prohibits unauthorized use or disclosure of these records" — highlights an important patient protection that many forms omit.
