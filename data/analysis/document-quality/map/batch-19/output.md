# Document Quality Deep Dive — Batch 19

## Batch Composition

This batch contains **2 organizations** with sharply contrasting profiles:

| Org | Facility Type | Ownership | Affiliation | State | Bed Count |
|-----|--------------|-----------|-------------|-------|-----------|
| Duke University Hospital | Teaching hospital | Nonprofit | Major system (Duke Health) | NC | 1,062 |
| EyeSouth Partners | Physician practice | For-profit | Major system (PE-backed) | GA | N/A |

Both are Southern, system-affiliated organizations, but they diverge dramatically in size, resources, and document quality — a large academic medical center vs. a private-equity-backed ophthalmology network.

## Fillability and Interactivity

- **Fillable/interactive PDF: 1 of 2 orgs** — Duke's current form (M3132, Rev. 3/2025) has **67 fillable interactive fields** on a single page, enabling full on-screen completion without printing. This is an exceptionally high field count, covering patient demographics, recipient details, 14+ record-type checkboxes, date ranges, purpose, delivery format, and signature fields.

- **Flat (print-and-fill) PDF: 1 of 2 orgs** — Both EyeSouth Partners affiliate forms (Center for Sight and Georgia Retina) have a text layer but **zero fillable fields**. Patients must print and complete by hand. Neither form rises above basic text-on-page.

- **Image-only scans: 1 form** — Duke's form-3 is an image-only scan of a superseded revision hosted on a satellite clinic site. It is not the primary form but remains publicly accessible, creating a confusing artifact for patients who find it via search engines.

**Tally: 1 fillable PDF (67 fields), 2 flat PDFs (0 fields each), 1 image-only scan (superseded).**

## Page Counts and Field Counts

| Org | Primary Form | Pages | Fillable Fields | Total Forms |
|-----|-------------|-------|-----------------|-------------|
| Duke University Hospital | form-4.pdf | 1 | 67 | 4 (incl. instructions, superseded revisions) |
| EyeSouth Partners | form-1.pdf | 1 | 0 | 2 (from different affiliates) |

Both primary forms are single-page documents — concise by design. The difference lies entirely in digital sophistication: Duke packs 67 interactive fields into one page; EyeSouth's affiliates offer blank lines to fill by hand. Duke also provides a **3-page companion instruction document** (form-2) with plain-language definitions of each medical record type — a resource no other org in this batch approaches.

## Digital-First vs. Scanned Paper

- **Digital-first: 1 of 2** — Duke's primary form is clearly born-digital, with structured fillable fields, logical section headers, and a six-part layout (Patient Info → Recipient → Records → Purpose → Delivery → Review). The form has gone through multiple revisions (at least three versions exist), with the current Rev. 3/2025 removing the older witness signature requirement.

- **Paper-origin: 1 of 2** — EyeSouth's affiliate forms are functional PDFs with text layers (not scans), but their design reflects paper-first thinking: no interactivity, no electronic submission instructions, and the Georgia Retina form dates to **June 2016** — nearly a decade old, predating both the HHS Right of Access Initiative and the Cures Act information blocking rules.

## Layout, Typography, and Visual Design

**Duke** employs a well-structured six-part layout with clear section headers, inline guidance text, and sensible defaults transparently stated (e.g., "Last 2 years of active treatment will be provided unless specified"). Record-type selection offers excellent granularity with 14+ categories. The one weakness: all 67 fillable fields lack descriptive names, creating an accessibility gap for screen reader users.

**EyeSouth's** Center for Sight form uses plain, accessible language with a logical top-down flow (patient info → sender/receiver → date range → reasons → authorization → signature). It lists 11 clinic locations with addresses and fax numbers — dense but functional. The Georgia Retina form is more text-heavy, with rights disclosures consuming half the page and no visual section headers or dividers. Neither form offers checkboxes for record types, format options, or delivery preferences.

## Instructions and Clarity

- **Duke**: Includes a dedicated 3-page instruction document with plain-language definitions of each medical record type and guidance on completing each section. This is an unusually thorough support resource. A helpline phone number is also provided.
- **EyeSouth**: Neither affiliate form includes instructions. Patients receive no guidance on what records to request, how to submit, or what to expect.

## Multilingual Support

- **Duke**: Spanish-language version available on the official forms page — one of the few orgs offering multilingual support for ROI forms.
- **EyeSouth**: English only across both affiliate forms. No multilingual resources.

**Tally: 1 of 2 orgs offers multilingual support.**

## Notable Examples

**Exceptionally good craftsmanship — Duke University Hospital**: Duke's form represents near-best-in-class document design. The 67-field fillable PDF, companion instruction document, multiple electronic delivery options (MyChart portal, encrypted email, fax), email submission acceptance, and Spanish availability collectively demonstrate genuine institutional investment in patient access. The form's "Self (Same Info As Above)" checkbox and "Personal" purpose option accommodate patient self-requests within a generic authorization framework. Grade: **B** (3.9/5).

**Below-average craftsmanship — EyeSouth Partners**: EyeSouth illustrates the challenges of decentralized practice management organizations. The parent company offers no patient-facing forms at all; patients must independently identify their specific affiliate practice, locate its website, and hope a form exists. The forms that do exist are flat, non-interactive, lack instructions, and carry compliance concerns (indefinite authorization, flat $25 fee, reason-for-release requirement). The Georgia Retina form's 2016 vintage makes it one of the oldest in the study. Grade: **C** (2.6/5).

The gap between these two orgs — both Southern, both system-affiliated — underscores that institutional commitment and resources, not geography, drive document quality.
