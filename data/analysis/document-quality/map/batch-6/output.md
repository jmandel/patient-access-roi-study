# Document Quality Deep Dive — Batch 6

## Batch Composition

This batch contains **2 organizations**, both large nonprofit teaching hospitals in different regions:

| Org | Facility Type | Ownership | Affiliation | Region | State | Beds |
|-----|--------------|-----------|-------------|--------|-------|------|
| UCHealth University of Colorado Hospital | Teaching hospital | Nonprofit | Major system | West | CO | 678 |
| WakeMed Health & Hospitals | Teaching hospital | Nonprofit | Regional system | South | NC | 973 |

Both are sizable academic-affiliated institutions, providing a focused look at how well-resourced teaching hospitals handle ROI form design.

## Fillability and Interactivity

- **Flat (print-and-fill) PDFs: 2 of 2** — Neither organization provides a fillable PDF for its current ROI form. UCHealth's current form (form-4, revised October 2025) has zero interactive fields despite being a digitally generated document. WakeMed's form (N-935, revised November 2025) renders checkboxes as the letter "o" and blanks as underscores — a purely print-and-handwrite design.

- **Fillable/interactive PDFs: 0 of 2** — Notably, UCHealth's *legacy* inter-facility form (form-2) had 54 fillable fields, demonstrating the organization has the technical capability but chose not to apply it to the current patient-facing form.

- **Image-only scans: 0 of 2** — Both forms have intact text layers and are digitally authored, not scanned paper documents.

**Tally: 0 fillable PDFs, 2 flat digital PDFs, 0 image-only scans.**

## Page Counts and Field Counts

| Org | Pages | Estimated Fields |
|-----|-------|-----------------|
| UCHealth | 1 | ~22 |
| WakeMed | 2 | ~15 |

UCHealth compresses an enormous amount of content — 28 record-type checkboxes, a full fee schedule, six disclosure statements, and a reproductive healthcare warning — onto a single page. WakeMed spreads its content across two pages with a more spacious layout, separating authorization/signature content from patient and record information.

## Digital-First vs. Scanned Paper

- **Digital-first: 2 of 2** — Both forms are natively digital PDFs with clean text layers. Neither is a scan of a paper document.

UCHealth additionally offers an MRO Express online portal as an alternative digital pathway, making it the more digitally mature of the two. WakeMed offers no portal alternative.

## Layout, Typography, and Visual Design

**UCHealth** uses a clean, logically ordered single-page layout flowing from facility selection through demographics, purpose, recipient, date range, record types, disclosures, fees, and signature. However, the extreme density is a significant weakness — compressing all of this onto one page sacrifices readability. Parenthetical definitions (e.g., "Visit record" vs. "Visit summary") aid comprehension, which partially compensates.

**WakeMed** has the stronger visual design. Bold uppercase section headers, logical two-page flow (patient/record info on page 1, consent/signature on page 2), and granular record-type options (office visits, hospital admissions, ED visits, imaging studies, sub-components). The additional page gives content room to breathe, though the "UNDERSTANDING" section on page 2 trends toward legal density.

## Instructions and Submission Guidance

- **UCHealth**: No submission instructions on the form itself — no address, fax number, or email. Patients must return to the website to find where to send the completed form. This is a notable gap for a form that must be printed and mailed/faxed.

- **WakeMed**: Instructions are embedded. The form includes the HIM email address (HIMROI@Wakemed.org), fax number (919-350-1720), and mailing address. Six delivery methods are enumerated directly on the form, including encrypted email as the default.

**Tally: 1 of 2 organizations include submission instructions on the form itself.**

## Multilingual Support

- **UCHealth**: English only. No multilingual version available.
- **WakeMed**: Spanish translation available (N-935S), though with translation gaps — key field labels like "Address where you want your PHI sent to" and "Email address" remain in English.

**Tally: 1 of 2 offers a non-English version.**

## Notable Examples

**Best practice — UCHealth's fee transparency**: UCHealth's form explicitly separates patient-access fees (free via portal, free paper up to 100 pages, first radiology disc free) from third-party fees (retrieval fee plus per-page charges). This dual fee structure, printed directly on the authorization form, is a standout practice that few organizations match. The post-*Dobbs* reproductive healthcare warning (alerting patients that released reproductive health information could be used in litigation) is also a forward-looking compliance feature.

**Best practice — WakeMed's multilingual and multichannel approach**: Offering both English and Spanish versions, plus six delivery methods including encrypted email as default, demonstrates genuine effort to reduce access barriers. The recently revised date (11/25) suggests active form maintenance.

**Missed opportunity — both organizations**: Despite both being large, well-resourced teaching hospitals, neither provides a fillable PDF. UCHealth's legacy form proves the capability exists. This is a structural gap in how HIM departments prioritize digital accessibility — even organizations with the resources to do better don't invest in interactive form design.

## Summary

This batch of two large teaching hospitals shows competent but imperfect document quality. Both produce clean, digitally authored PDFs with logical layouts and plain language — well above the image-scan baseline seen in smaller facilities. Yet both fall short on the same fundamental dimension: fillability. The print-and-handwrite requirement persists even at organizations with the technical capacity to do better. WakeMed edges ahead on practical usability (submission instructions on the form, multilingual support, multiple delivery channels), while UCHealth leads on compliance sophistication (fee transparency, granular sensitive-category consent, reproductive healthcare warning). Neither achieves the ideal of a fillable, well-instructed, multilingual form with clear patient-access differentiation.
