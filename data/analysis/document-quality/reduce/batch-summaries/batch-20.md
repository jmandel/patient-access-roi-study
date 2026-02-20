# Document Quality Deep Dive — Batch 20

## Batch Composition

This batch contains **2 organizations**, both nonprofit critical access hospitals in rural settings:

| Org | Facility Type | Affiliation | Region | State | Beds |
|-----|--------------|-------------|--------|-------|------|
| Barrett Hospital & HealthCare | Critical access hospital | Independent | West | MT | 18 |
| CentraCare – Long Prairie Hospital | Critical access hospital | Regional system | Midwest | MN | 25 |

Both are small rural CAHs (18–25 beds), but they differ on a key axis: Barrett is independent while CentraCare – Long Prairie operates within a 9-hospital regional system. This pairing offers a direct comparison of how system affiliation affects document quality for otherwise similar facilities.

## Fillability and Interactivity

**Neither organization offers a fillable PDF.** Both forms are born-digital documents with text layers (not scans), but both have zero interactive form fields. Patients must print each form and complete it by hand.

- **Barrett Hospital**: 1-page flat PDF, ~18 fields. "Circle one" instructions throughout confirm this was designed as a print-and-handwrite artifact.
- **CentraCare – Long Prairie**: 2-page flat PDF, ~18 fields. Despite being produced by a regional system with centralized resources, the form still lacks any fillable fields.

**Tally: 0 fillable PDFs, 2 flat (print-and-fill) PDFs, 0 image-only scans.**

CentraCare also has a supplementary substance use disorder consent form (form-3) that is an **image-only scan** with no meaningful text layer — inaccessible to screen readers — but this is not the primary pathway document.

## Page Counts and Field Counts

| Org | Pages | Est. Fields | Total Forms Found |
|-----|-------|-------------|-------------------|
| Barrett Hospital | 1 | ~18 | 1 |
| CentraCare – Long Prairie | 2 | ~18 | 3 |

Barrett's single page covers patient identification, recipient, purpose, record types (with a per-category date-range table), format/delivery, legal notices, and signature. CentraCare's second page is a comprehensive directory of all regional HIM offices with fax numbers, phone numbers, and mailing addresses — useful reference material that justifies the extra page.

## Digital-First vs. Scanned Paper

Both primary forms are **digital-first** — created natively as PDFs rather than scanned from paper. Text is selectable, and both have clean layouts without scanning artifacts. CentraCare's SUD form (form-3) is the lone scanned document, digitized but with essentially no usable text layer.

**Tally: 2 digital-first, 0 scanned primary forms (1 scanned supplementary form).**

## Layout, Typography, and Visual Design

Both forms demonstrate competent but unremarkable document design:

- **Barrett Hospital**: Efficient single-page layout with a logical top-to-bottom flow. The record-type section uses a tabular format with per-category date ranges — a space-efficient design choice. However, the "Initial" column in this table is never explained, and the abbreviation "Disc" next to imaging options is cryptic. These ambiguities undermine an otherwise clean layout.

- **CentraCare – Long Prairie**: Well-organized with clear section headers following a logical progression (Patient Information → Release From → Release To → Information to be Released → Special Disclosure → Preferred Method → Reason → Authorization → Revocation). The HIM office directory on page 2 is organized by geographic region. The revocation paragraph contains dense legalese that contrasts with the otherwise plain language.

Neither form uses color, branding, or visual hierarchy beyond bold headers and horizontal rules — typical of utilitarian healthcare forms.

## Instructions

- **Barrett Hospital**: **No instructions included.** The form is self-contained but offers no guidance for patients unfamiliar with the authorization process.
- **CentraCare – Long Prairie**: **Separate instruction document included** (form-2). This companion sheet is notably well-crafted — written in second person, it explains not just *what* to fill in but *why* each field matters. This is an unusual and patient-friendly touch that distinguishes CentraCare from most organizations in the study. The instructions represent the clearest system-affiliation advantage visible in this batch.

## Multilingual Support

**Neither organization provides multilingual forms.** Both are English-only. For rural Montana and rural Minnesota, this may reflect the demographic reality, but it represents a gap for any non-English-speaking patients who may need records access.

## Notable Observations

**Best practice — CentraCare's instruction document**: The companion instruction sheet is a standout artifact. Rather than embedding instructions on the form itself (consuming space) or omitting them entirely (the more common failure), CentraCare provides a dedicated explanatory document that walks patients through each section with context. This is a model other organizations should consider.

**Worst practice — Barrett's conditioning language**: The form states "I understand that my refusal to sign may affect my ability to obtain treatment or payment." Under HIPAA § 164.524, providers cannot condition treatment on a patient's willingness to authorize access to their own records. Because this generic form is used for all disclosure types including patient self-access, every patient sees this legally problematic language.

**System advantage is modest**: CentraCare's system affiliation provides the instruction document and multiple electronic submission channels (email, fax, mail, plus MyChart/encrypted email for delivery). Barrett, the independent facility, offers fewer channels. Yet both share the same core limitation — non-fillable PDFs — suggesting that system membership improves process design more than document technology.
