# Evaluation: Fisher-Titus Medical Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

**This document is NOT a Release of Information (ROI) form.** It is an "EMERGENCY MEDICAL AUTHORIZATION" (Form #FTC11-4, revised 3/6/12) — a form for parents or guardians to pre-authorize emergency medical treatment for minor children when they cannot be reached. The form's stated purpose: "To enable parents and guardians to authorize the provision of emergency treatment for children who become ill or injured when parents or guardians cannot be reached."

Fisher-Titus Medical Center has three forms downloaded in this set:
- **form-1.pdf**: The actual ROI form — "Authorization to Disclose PHI" (Form #FTC24-5, revised 11/20/2024), 2 pages.
- **form-2.pdf** (this document): Emergency Medical Authorization — unrelated to ROI.
- **form-3.pdf**: A slightly updated version of the same ROI form as form-1 (Form #FTC24-5, revised 07/16/2025), found on the Medical Records page.

Form-2 was found on the Patient Forms page (`/patients-guests/patient-forms`) alongside the actual ROI form (form-1). It was apparently downloaded because it appeared among patient-facing forms, but it serves an entirely different purpose — authorizing emergency treatment consent, not releasing health information.

## 2. FINDABILITY

This form was found on the Patient Forms page at `/patients-guests/patient-forms`, which the retrieval notes describe as reachable "within 2 clicks from the homepage (Patients & Guests → Patient Forms)." The source URL is `https://www.fishertitus.org/media/2025/07/Service-Documents_FTC11-4-Emergency-Medical-Authorization-OPT-11-16.pdf`. The filename is descriptive ("Emergency-Medical-Authorization"), which would help a user distinguish it from the ROI form. However, because this is not an ROI form, findability scoring in the ROI context is not meaningfully applicable.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. The full 2,499 characters are extractable via pdftotext.
- **Fillable fields**: Zero (fillable_field_count: 0). The form uses underscored blank lines for handwritten entry (e.g., `Dr.: ______________________________________________`).
- **File size**: 25,283 bytes — very small for a 1-page PDF, reasonable.
- **Page count**: 1 page.
- **Fonts**: 5 fonts embedded.
- **Images**: 3 embedded images (likely a logo and decorative elements).
- **Design origin**: This appears to be a digitally-created document (not a scan), given the clean text layer and small file size. However, with zero fillable fields, it is designed for print-and-handwrite workflow.
- **Age**: Revised 3/6/12 — this form is nearly 14 years old, making it the oldest document in the set by a wide margin (compared to the ROI forms revised in 2024 and 2025).

## 4. CONTENT DESIGN

The form is a single page, which is appropriately concise for its purpose. The layout is straightforward:

1. Header with Fisher-Titus address and phone at top (using the older `www.ftmc.com` domain).
2. Bold title "EMERGENCY MEDICAL AUTHORIZATION" followed by a purpose statement.
3. Sections for preferred physician and dentist.
4. A clause about major surgery requiring two concurring physician opinions.
5. Space for the child's medical history, allergies, and medications.
6. Tables for children's names/DOBs and alternate contact persons.
7. Signature and date at the bottom.

The language is reasonably clear for a consent document. One notable phrasing issue: "each whom hereby are authorized" is grammatically awkward (should be "each of whom is hereby authorized"). The document uses blank lines with underscores for all data entry, organized in a logical sequence.

## 5. PATIENT-CENTEREDNESS

This dimension is largely inapplicable because the form is not an ROI/records release form. It does not deal with:
- Patient access to health records
- HIPAA Right of Access (45 CFR § 164.524)
- Record type selection or date ranges
- Electronic delivery options
- EHI export

The form serves a narrow, specific use case (emergency treatment consent for minors) and is reasonably well-suited to that purpose. Parents can specify preferred physicians, list children's medical conditions, and designate alternate contacts.

## 6. COMPLIANCE

Since this is not an ROI form, HIPAA ROI compliance dimensions do not apply. The form's major surgery clause — "This authorization does not cover major surgery unless the opinions of two other licensed physicians or dentists, concurring in the necessity for such surgery, are obtained prior to the performance of such surgery" — is a reasonable safeguard for an emergency consent form.

The form does not include an expiration date or mechanism to revoke the authorization, which could be a concern for a standing consent document — a parent's circumstances may change (e.g., custody changes, new medical conditions for the child).

## 7. NOTABLE OBSERVATIONS

### ❌ ERRORS
- **Outdated website URL**: The form header lists `www.ftmc.com` as the organization's website, but the current website is `www.fishertitus.org`. This is a factual error reflecting the form's age (revised 2012).
- **Stale revision date**: Form #FTC11-4 was last revised on 3/6/12 — nearly 14 years ago. While the content may still be functionally adequate, the outdated branding and URL suggest it has not been reviewed for currency.

### ⚠️ AMBIGUITIES
- **No expiration or revocation mechanism**: The form provides no way to expire or revoke the authorization. A parent who signs this form has no stated process to withdraw consent if circumstances change (e.g., divorce, custody change, child aging out).
- **Wrong document in ROI context**: This form's presence on the Patient Forms page alongside ROI forms could confuse a patient searching for a records release form, though the title "Emergency Medical Authorization" is clear enough to distinguish it.

### 🚩 RED FLAGS
- **Not an ROI form**: This document should not be evaluated as an ROI form. Its inclusion in the retrieval set appears to be an artifact of the broad download strategy from the Patient Forms page. Any ROI-specific scoring applied to this document would be misleading.
