# Bon Secours St. Mary's Hospital (Richmond, VA) — Org-Level Synthesis

## Forms & Pathways Available

Bon Secours St. Mary's Hospital is part of the Bon Secours Mercy Health system and uses system-wide forms for its Richmond-area facilities. Two PDF forms were found: an English-language "Authorization to Disclose Health Information" (form-1.pdf, BSR-MR-50, rev. 1/21) and a Spanish-language equivalent (form-2.pdf, BSR-MR-50SPN, rev. 11/17). Both are single-page, non-fillable PDFs linked directly from the system's medical records page. Beyond the PDF forms, Bon Secours also offers an online request pathway via Ciox/Swellbox and MyChart patient portal access, giving patients three distinct channels to request records.

## Access Pathway: Individual Access vs. Third-Party Release

The PDF form is a **generic HIPAA authorization** designed for third-party disclosure — the structure asks the patient to authorize a facility "TO DISCLOSE" information to a named recipient. A patient requesting their own records must awkwardly name themselves as both authorizer and recipient, navigating a form whose conceptual framework doesn't match their use case. There is no dedicated patient access request form.

That said, the form includes a "Personal" purpose checkbox and an "eDelivery by Ciox (for patient's only)" delivery option specifically marked as patient-exclusive. These suggest some awareness of the patient self-access use case, but the form itself was not redesigned around it. The availability of Ciox/Swellbox as an online portal likely represents a more patient-centered pathway, though it was not evaluated in detail as it is a web-based tool rather than a downloadable document.

## Retrieval Experience

Finding the forms was **easy**. A simple web search immediately surfaced the Bon Secours medical records page at `bonsecours.com/patient-resources/request-medical-records`, where both PDF forms are directly linked alongside information about online and MyChart options. No bot blocking, login walls, or JavaScript rendering issues were encountered. The URL path (`roi-form-2017.ashx`) is somewhat opaque but the page itself is well-organized.

## Form Document Quality

The primary English form (form-1.pdf) is a digitally-authored, single-page PDF with a text layer — not a scan. However, it has **zero fillable fields**, meaning patients must print and complete it by hand. The layout is compact and logically ordered: demographics → record types → recipient → delivery format → purpose → legal terms → signature. The top half uses clear, short labels; the bottom half shifts to dense legal language across four numbered paragraphs. Twelve record-type checkboxes plus two "Other" fields provide good scope granularity. Five delivery format options (US Mail, CD/DVD, Radiology Film/CD, MyChart, Ciox eDelivery) are notably generous.

The Spanish version mirrors the English form but lags by over three years (November 2017 vs. January 2021), contains several untranslated English field labels ("Anesthesia Record," "Radiology Film/CD"), and has a minor typographical error (double closing parenthesis). While the existence of a Spanish form is commendable, the version discrepancy raises concerns about whether Spanish-speaking patients receive equivalent information.

## Barriers

- **No notarization or witness required** — good.
- **Fees are vaguely stated**: "copying charges will be applied, according to the hospital policy" — with no specific amounts, no fee schedule, and critically, no distinction between patient-access fees (subject to HIPAA's reasonable cost-based limits) and third-party release fees. This is a compliance concern.
- **No response time stated** on the form.
- **Fax submission is available** (fax number listed in notes: 804-673-9561), so physical delivery is not the only option.

## Notable Strengths

- **Multilingual availability**: English and Spanish forms linked from the same page — better than most organizations.
- **Multiple delivery formats**: Five options including MyChart and Ciox eDelivery with email, going well beyond the typical mail-or-fax binary.
- **Multiple request channels**: PDF form, Ciox/Swellbox online portal, and MyChart portal give patients real choice.
- **Single-page efficiency**: All necessary content on one page reduces patient burden.
- **Explicit CFR 164.524 reference**: The form cites the HIPAA Right of Access provision, which is uncommon and helpful.

## Weaknesses

- **Generic disclosure form, not patient-access form**: The form is conceptually designed for third-party release, forcing patients to adapt.
- **Non-fillable PDF**: Despite being digitally authored, the form lacks any interactive fields — a missed opportunity.
- **Vague fee language**: No fee schedule, no patient-access fee distinction.
- **Spanish version outdated**: Three-year lag behind English version with untranslated fields.

## Overall Assessment

Bon Secours St. Mary's Hospital provides a **moderately patient-friendly** records request experience. The form is easy to find, compact, and offers unusually good delivery options including electronic delivery for patients. The multilingual availability and multiple request channels (PDF, Swellbox, MyChart) are genuine strengths. However, the core PDF form remains a generic third-party authorization that doesn't center the patient self-access use case, it lacks fillable fields, and its fee language falls short of HIPAA transparency standards. The overall experience is adequate but not exemplary — a patient can get their records, but the process wasn't designed with them as the primary user.
