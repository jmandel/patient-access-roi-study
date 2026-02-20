# The Valley Hospital — Org-Level Synthesis

## Overview

The Valley Hospital is a nonprofit, independent community hospital in Paramus, NJ, operating under the Valley Health System umbrella alongside Valley Medical Group (VMG) and Valley Home Care. Four PDF authorization forms were found — two VMG versions (July 2023 and May 2023), one older hospital-specific form hosted on MRO Corp's site (last revised 2011), and one Valley Home Care form (April 2023). Critically, the hospital's medical records page now directs patients to an online records request tool with identity verification via driver's license photo, rather than linking to any downloadable PDF forms.

## Access Pathway Assessment

The primary pathway for a patient requesting their own records is the **online records request tool** accessible from the medical records page at `valleyhealth.com/patients-visitors/medical-records`. This represents a meaningful shift toward patient-centered digital access — the identity verification via driver's license photo suggests a workflow specifically designed for the patient themselves, distinct from third-party release scenarios.

The PDF forms, by contrast, are all **generic HIPAA authorization forms** designed for release of information to any recipient. None is a dedicated patient access form. The most current form (form-1, VMG, July 2023) accommodates patient self-access through instructions that say "If the recipient's name is the same as the patient, just write 'SELF'" — functional but clearly an afterthought within a third-party disclosure framework. The four forms create a confusing landscape: a patient of The Valley Hospital proper might not realize the VMG form is what they need for ambulatory records, while a separate home care form exists for Valley Home Care patients. No guidance on the website explains which form applies to which entity.

## Retrieval Experience

Finding the online records request tool is straightforward — the medical records page sits at a logical URL in the patient resources section. Finding the PDF forms, however, requires search engine assistance. The medical records page no longer links to any downloadable PDFs. The forms remain hosted at their original URLs on valleyhealth.com (and on mrocorp.com for the older hospital form) but are effectively orphaned. A patient who specifically wants a PDF form would need to search externally — not an unreasonable ask, but not ideal either.

## Form Document Quality

The best PDF form (form-1, VMG July 2023) is a well-structured 2-page document with a clear Section A/Section B organization and a full second page of step-by-step instructions with practical examples. The instructions are genuinely helpful — explaining how to designate self-access, offering example expiration events, and warning about unencrypted email risks. However, **none of the four forms has any fillable/interactive PDF fields** (all have `fillable_field_count: 0`). Despite being born-digital documents with clean text layers, they are designed purely for print-and-fill workflow. The form offers five delivery methods — fax, paper copy, CD, unencrypted email, and encrypted email — a strong set of options. The encrypted email option is a positive differentiator.

The language is mixed: the instructions page uses plain language, but the sensitive information consent section is dense. The form's handling of sensitive categories (HIV, mental health, substance use, reproductive health) includes important NJ-specific protections but is complex enough to confuse lay readers. Approximately 20–25 fields must be completed, which is reasonable for a records authorization.

## Barriers

**Misleading "entire record" checkbox**: Checking "Entire medical record" on form-1 will *exclude* Behavioral Health Specialist and Substance Use Specialist records unless those boxes are also separately checked. This is the most significant red flag — a patient checking "entire record" would reasonably expect completeness.

**Fee ambiguity**: Form-1 states "there may be a fee" based on page count but discloses no amounts. The older hospital form (form-3) explicitly states a $1/page fee for personal use, which may exceed HIPAA's cost-based limits for patient access. Fees are processed through MRO Disclosure Management Solutions, a third-party vendor.

**No form submission instructions**: Form-1 tells patients what to fill out but never specifies where or how to submit the completed form — no mailing address, fax number, or email for submission. Only the revocation address is provided.

**No notarization or witness required** on the primary form (form-1), though the older hospital form (form-3) includes a witness line.

## Bright Spots

- **Online portal transition**: The org has moved its primary pathway to a digital records request tool, significantly improving access over PDF-only workflows.
- **Encrypted email delivery**: Offering encrypted email alongside standard options demonstrates privacy awareness.
- **Comprehensive instructions**: The full-page plain-language instruction sheet with practical examples is among the better guidance we've seen.
- **Five delivery methods**: Fax, paper, CD, encrypted email, and unencrypted email give patients meaningful choice in how they receive records.

## Overall Assessment

The Valley Hospital earns a **B grade** primarily because of its transition to an online records request portal, which places it ahead of organizations still relying solely on paper forms. The PDF forms themselves are adequate but generic — they serve third-party release as the primary use case and accommodate patient self-access as a secondary scenario. The absence of fillable fields on all four PDFs is a missed opportunity for born-digital documents. The misleading "entire record" exclusion and fee ambiguity are notable compliance concerns, though neither rises to the level of an active barrier to access. The organization's investment in an online portal signals a patient-centered direction, even as its legacy PDF forms lag behind.
