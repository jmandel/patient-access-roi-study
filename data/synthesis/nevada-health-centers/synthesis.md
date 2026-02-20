# Nevada Health Centers — Org-Level Synthesis

## Overview

Nevada Health Centers (NHC) is an independent nonprofit FQHC based in Carson City, NV. The organization publishes three ROI-related forms on a well-organized patient forms page. All three are bilingual English/Spanish PDFs created in Adobe Illustrator, and none have fillable fields or an extractable text layer. The primary form for patient self-access is a general-purpose "Release of Medical Information" authorization — there is no dedicated patient access request form.

## Available Forms and Pathways

Three documents were retrieved from the forms page at `nevadahealthcenters.org/forms/`:

1. **Form-1** — "Release of Medical Information" (1 page, bilingual EN/ES). This is the primary general-purpose release form, covering both patient-initiated requests and third-party releases via a "To/From" checkbox. It is the most relevant document for a patient requesting their own records.
2. **Form-2** — "Authorization to Share Information" (2 pages, bilingual EN/ES). This is a proxy access designation form allowing patients to authorize family or friends to access information on their behalf. It does *not* serve patient self-access.
3. **Form-3** — "WIC Release of Medical Information" (1 page, bilingual EN/ES). A WIC program-specific variant of Form-1, listing seven WIC clinic locations. Structurally identical to Form-1 with added clinic details.

The organization directs completed forms to its Support Services Department in Las Vegas. Fax numbers appear on the forms (and specifically on Form-3's clinic listings), and a mailing address is provided on Form-1. No online portal, email submission, or patient portal-based records request was identified.

## Access Pathway Differentiation

NHC does **not** differentiate between patient self-access and third-party release. Form-1 uses a single "To or From" directional checkbox to handle both scenarios. A patient requesting their own records would check "To" (themselves) and provide their own contact information in the recipient fields — but the form's language and structure are oriented toward third-party release, asking for a recipient's name, address, phone, and fax. There is no reference to HIPAA § 164.524, the Right of Access, or any patient rights language beyond revocation rights. The form requires a "Reason for Request" (with options including "Personal"), which HIPAA does not require for patient self-access.

## Retrieval Experience

Finding the forms was **relatively easy**. A site-scoped search (`site:nevadahealthcenters.org`) identified the forms page within 2–3 steps. The page is well-organized by category (General Forms, Dental Forms, Mammovan Forms, etc.) with clearly labeled PDF links. However, generic web searches did not surface NHC-specific forms — results returned other Nevada healthcare organizations instead. A patient would need to navigate directly to the NHC website to find these forms.

## Form Document Quality

Form-1 is a clean, single-page design that packs bilingual content, multiple checkbox sections, and a signature block into a reasonably organized layout. The top-to-bottom flow is logical: patient identification → direction of release → record types → date range → confidential information → reason → signature.

However, significant technical and design issues undermine usability:

- **No fillable fields and no text layer**: All three PDFs were created in Adobe Illustrator with text rendered as vector paths. They have zero extractable text, zero embedded fonts, and zero interactive fields. Screen readers cannot read them, text cannot be copied or searched, and every field must be hand-filled after printing. This is an especially unfortunate choice because the documents are born-digital (not scans) — a word processor or PDF form tool would have preserved accessibility.
- **No "All Records" checkbox**: The form offers six specific record categories plus "Other" but lacks an option to request a complete record. A patient exercising their Right of Access to their full designated record set must check every box and potentially write additional categories.
- **Ambiguous witness line**: The signature block includes a "Witness" field without indicating whether it is required or optional, potentially creating a perceived barrier for patients completing the form at home.
- **Inline bilingual compression**: English and Spanish share space on a single page, which keeps things concise but subordinates the Spanish text and reduces whitespace.

## Barriers and Bright Spots

**Barriers**: No notarization is required. No fees are mentioned (neither disclosed nor explicitly waived). The 120-day default expiration is reasonable but on the shorter side. The witness field ambiguity is a minor concern. The primary barriers are technical: the completely non-digital workflow (print, handwrite, fax/mail) and the inaccessible PDF format.

**Bright spots**: The bilingual English/Spanish design across all three forms is a genuine strength for this FQHC's patient population. The granular confidential information opt-in/opt-out section (AIDS/HIV, behavioral health, alcohol/drug, social services) gives patients meaningful control over sensitive categories. The single-page form length is appropriately concise.

## Overall Assessment

Nevada Health Centers provides a findable, bilingual, concisely designed release form that a patient *can* use to request their own records — but the process was not designed with patient self-access in mind. The generic authorization form, the print-only workflow, and the complete lack of digital accessibility represent a paper-era approach that creates unnecessary friction. The organization earns credit for easy findability and inclusive bilingual design, but loses ground on technical accessibility and patient-centeredness. Overall grade: **C**.
