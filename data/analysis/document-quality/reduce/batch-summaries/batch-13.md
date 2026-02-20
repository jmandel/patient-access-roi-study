# Document Quality Deep Dive — Batch 13

## Batch Composition

This batch contains **2 organizations** with contrasting profiles:

| Org | Facility Type | Ownership | Affiliation | Region | State |
|-----|--------------|-----------|-------------|--------|-------|
| Group Health Cooperative of South Central Wisconsin (GHC-SCW) | Physician practice | Nonprofit | Independent | Midwest | WI |
| Community Medical Center (CMC, Toms River) | Community hospital (592 beds) | Nonprofit | Major system (RWJBarnabas Health) | Northeast | NJ |

Both are nonprofits, but they differ sharply in size, affiliation, and facility type — an independent cooperative clinic vs. a large system-affiliated hospital.

## Fillability and Interactivity

- **Fillable/interactive PDF: 1 of 2 orgs** — GHC-SCW's primary patient access form (form-2) is a fully fillable PDF with **49 interactive fields** on a single page. This is exceptionally high for a one-page document and reflects thoughtful digital-first design. Their secondary form (form-1, third-party authorization) has zero fillable fields despite being digitally authored.

- **Flat (print-and-fill) PDFs: 1 of 2 orgs** — CMC's best available PDF (form-3, the system-wide RWJBH form) was created in Word and has a clean text layer, but has **zero fillable fields** — patients must print and handwrite. Two older CMC-specific forms (form-1, form-2) are **image-only scans** with no meaningful text layer and no fillable fields.

**Tally across all individual form documents (5 total):**
- Fillable interactive PDFs: **1** (GHC-SCW form-2)
- Flat digital PDFs (text layer, no fill): **2** (GHC-SCW form-1, CMC form-3)
- Image-only scans: **2** (CMC form-1, CMC form-2)

CMC also offers a **Ciox/Swellbox online portal** as its primary pathway, providing a fully digital alternative to the non-fillable PDFs.

## Page Counts and Field Counts

| Org | Form | Pages | Fillable Fields | Type |
|-----|------|-------|-----------------|------|
| GHC-SCW | form-2 (patient access) | 1 | 49 | Fillable PDF |
| GHC-SCW | form-1 (third-party auth) | 2 | 0 | Flat digital PDF |
| CMC | form-3 (RWJBH system-wide) | 3 | 0 (est. 22 data points) | Flat digital PDF |
| CMC | form-1 (legacy CMC outbound) | 1 | 0 | Image-only scan |
| CMC | form-2 (inbound transfer) | 1 | 0 | Image-only scan |

**Page count range:** 1–3 pages. **Field count range:** 0–49 fillable fields. GHC-SCW's patient access form packs 49 interactive fields into a single page — a remarkable density that suggests careful layout design. CMC's primary form has roughly 22 data-capture points across 3 pages but none are fillable.

## Digital-First vs. Scanned Paper

- **Digital-first: 3 of 5 forms.** GHC-SCW's two forms and CMC's system-wide form (form-3) were all created digitally (word processor or form builder). GHC-SCW form-2 is the only one that takes the additional step of adding interactive fields.
- **Scanned paper: 2 of 5 forms.** CMC's legacy facility-specific forms (form-1 from 2017, form-2 from 2015/2021) are photographed paper documents. CMC form-1 extracted only 11 characters of OCR noise, rendering it completely inaccessible to assistive technology.

## Layout, Typography, and Visual Design

**GHC-SCW form-2** stands out for excellent design: clean layout with logical section flow (demographics → record selection → delivery method → recipient → signature), plain-English question-based headers ("What records do you want?", "How would you like your records delivered?"), and granular checkbox options for both record types and delivery formats. Typography is clear and readable.

**CMC form-3** (RWJBH system-wide) has a competent but denser layout. The patient demographics section flows logically, and the record type selection is granular (15+ checkboxes). However, the facility checkbox grid on page 1 is visually crowded, and the legal text block on page 2 is dense. Page 3 provides a useful HIM contact directory for all RWJBH facilities — a practical touch. The older CMC image-only scans have rudimentary hand-ruled layouts typical of pre-digital forms.

## Instructions

- **GHC-SCW form-2:** No explicit instructions section, but the question-based headers serve as inline guidance. The form references HIPAA right of access and states a 5-business-day processing timeline. **Missing:** submission instructions (no address, fax, or email on the form itself).
- **CMC form-3:** Includes implicit instructions through section labels and legal disclosures. Anti-conditioning language is present. **Missing:** clear submission routing beyond the contact directory on page 3.

**Tally:** 1 of 2 orgs include instructions (CMC's form-3 has instructions marked as present in structured data). Neither form provides truly standalone submission guidance.

## Multilingual Support

- **GHC-SCW:** Spanish-language version of form-1 (third-party authorization) available. Primary patient access form (form-2) is English-only.
- **CMC:** English only across all forms.

**Tally:** 1 of 2 orgs offers any multilingual support, and only for a secondary form.

## Notable Examples

**Exceptionally good:** GHC-SCW's patient access form (form-2) is a standout document. It is one of the rare forms that is purpose-built for patient self-access (separate from third-party authorization), fully fillable with 49 interactive fields, uses plain-language question headers, and offers five delivery methods including encrypted email (as default), MyChart portal, CD, USB, and paper. The one-page format with high field density demonstrates that brevity and completeness are not mutually exclusive.

**Notably weak:** CMC's legacy facility-level forms (form-1, form-2) are image-only scans that remain publicly linked on the website alongside the modern system-wide form. This creates patient confusion — a 2017 scanned form with zero accessibility sits alongside a 2025 digitally-created (but still non-fillable) system form and an online portal. The coexistence of three generations of forms (scanned paper, flat digital, online portal) on one medical records page reflects incomplete digital modernization.

## Emerging Pattern

The system-affiliated hospital (CMC/RWJBH) compensates for non-fillable PDFs with a vendor portal (Ciox/Swellbox), while the independent practice (GHC-SCW) invested in making the PDF itself excellent. Both approaches can serve patients, but the portal-dependent model leaves the PDF forms as afterthoughts — technically published but practically unusable without printing. The independent practice's approach produces a better standalone document artifact.
