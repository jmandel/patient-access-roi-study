# Surprising Findings — Batch 2

## The Tiny Rural Hospital That Outperforms Everyone on Findability

**Lane County Hospital**, a 25-bed government critical access hospital in Dighton, Kansas, earned a perfect findability score (5/5) — a single web search leads directly to a clearly labeled download link. No login walls, no portal maze, no bot blocking. You'd expect the smallest, most resource-constrained facilities to have the worst web presence, but Lane County's bare-bones "click here" approach works precisely because it's simple. Meanwhile, **UMC of Southern Nevada** (564 beds, Las Vegas) doesn't even link its ROI form from its Medical Records page — patients land on an amendment form instead. The actual ROI form exists but is effectively hidden. A government safety-net hospital serving one of America's largest metros makes records access harder to navigate than a 25-bed hospital in western Kansas.

## Conceptual Sophistication Without Technical Execution

**Barnes-Jewish Hospital** (BJC Health System, 1,278 beds, St. Louis) is one of the few organizations in this batch with a dedicated patient self-access form distinct from its third-party authorization — a genuine best practice that correctly invokes HIPAA § 164.524 "request for access" language rather than "authorization to release." This is conceptually exactly right. Yet the form itself has zero fillable fields. A 2022-revised PDF from one of the nation's premier academic medical centers still requires patients to print, handwrite, and fax or mail it back. The gap between getting the legal framework right and executing the document technology is striking. **Shannon Health** shows the same pattern in miniature: a brand-new 2025 form, clearly digitally authored, with zero fillable fields.

## Bilingual Access as a Two-Tier System

**DHR Health** in Edinburg, Texas — deep in the Rio Grande Valley, where roughly 90% of the population is Hispanic — offers both English and Spanish authorization forms. Laudable. But the English form is a digitally authored PDF with fillable fields and a full text layer, while the Spanish version is an image-only scan with no text layer whatsoever. A Spanish-speaking patient gets a form that can't be searched, can't be read by screen readers, and can't be filled digitally. In a region where Spanish is the primary language for many patients, the secondary-language version is actually the inferior document. The form is also dated August 2015 — over a decade old, predating the 21st Century Cures Act.

## Witness Requirements: From Unusual to Absurd

HIPAA does not require witness signatures for valid authorization, yet multiple organizations in this batch impose them. **Duly Health and Care** (a large physician practice in Illinois) requires a witness specifically when the patient's stated purpose is "personal reasons" — meaning the most straightforward self-access request triggers an extra bureaucratic step. **Abbeville Area Medical Center** (a 25-bed critical access hospital in South Carolina) goes further: it requires TWO witness signatures for a patient to access their own records. For a solo patient without readily available witnesses, this creates a barrier that may effectively require an in-person visit to the facility.

## Organizations That Sabotage Their Own Forms

Several organizations have functioning forms that are undermined by missing or broken infrastructure. **GI Alliance**, a major for-profit specialty practice network spanning multiple states, publishes authorization forms that leave the organization's own name blank — patients must figure out which affiliate they're requesting from and fill it in themselves. None of the three GI Alliance forms include any submission instructions: no fax number, no mailing address, no email, no portal link. Patients receive a form with literally no indication of where to send it. **Colquitt Regional Medical Center** (Georgia) has the same problem: a scanned-image-only form with zero submission instructions. **UMC Southern Nevada** compounds its hidden-form problem with an obsolete 2016 version still publicly accessible alongside the current one, with no "superseded" notice — patients could unknowingly submit outdated paperwork.

## The CD-ROM Default in 2026

**Penobscot Community Health Care**, an FQHC in Bangor, Maine, defaults to mailing records on a CD — a medium that most modern laptops can't read. The organization has actually built a Datavant/Swellbox portal as its primary pathway, but the downloadable PDF form (which the portal effectively hides) still reflects a pre-streaming era. The form also uses an opt-out-by-striking mechanism that defaults patients into the broadest possible authorization (ongoing disclosure, third-party access) unless they manually redact printed text — a design that nudges toward over-authorization.

## An Explicit Rejection of "All Records" Requests

**Duly Health and Care** explicitly states it will reject requests for "all records" or requests with "incomplete dates." Under HIPAA's Right of Access, patients are entitled to request their complete designated record set. A blanket policy rejecting such requests may itself be a HIPAA violation — yet it's printed directly on the form as organizational policy. This is not a case of an ambiguous form that might be interpreted restrictively; it's an explicit, documented refusal to process a category of request that federal law requires providers to fulfill.
