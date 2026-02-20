# Evaluation: Mercy Health - Springfield Regional Medical Center — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

**Form title**: Authorization for Release of Protected Health Information (system-wide, 2024 version)
**Source URL**: `https://www.mercy.com/-/media/mercy/patient-resources/medical-records-requests/mh-authorization-22024.ashx`
**Form number**: MHP0786.dcl (from the embedded print metadata: `Printed: 2024-01-17 08:19 MHP0786.dcl`)
**Pages**: 1 | **File size**: 151,891 bytes (152 KB)

This is the **system-wide** ROI authorization form currently linked on the Mercy Health (Bon Secours Mercy Health) medical records request page. Unlike the region-specific variants (form-2/Youngstown MHP 0782, form-4/Springfield MHP 0785), this form does not target a specific geographic region — it is the single form the website offers to all patients across the system. However, it is an **image-only scan** of what appears to be a printed form, making its actual content unreadable to automated tools.

Among the four forms retrieved for this organization:
- **form-1.pdf**: Patient access form from mercy.net — a different Mercy system (Missouri), not this organization
- **form-2.pdf**: Youngstown-region ROI authorization (mercy.com, correct system, wrong region)
- **form-3.pdf** (this document): System-wide 2024 ROI authorization, image-only scan — the form currently promoted on the website
- **form-4.pdf**: Springfield-specific ROI authorization (mercy.com, correct system and region, text-based)

The form number MHP0786 is distinct from the region-specific forms (MHP 0782, MHP 0785), suggesting this is a newer system-wide revision (printed January 2024) that may have been intended to replace the 2019-era regional variants.

## 2. FINDABILITY

This is the **most findable** of all the forms in this set. It is directly linked from the central medical records request page at `https://www.mercy.com/patient-resources/medical-record-requests` as the English-language "Medical Records Request Forms" download. A patient navigating to Patient Resources → Medical Record Requests would encounter this form alongside two other access channels (MyChart and eRequest via Swellbox/Datavant).

The URL (`mh-authorization-22024.ashx`) is not particularly descriptive — "mh-authorization-22024" does not clearly communicate what the document is, and the `.ashx` extension (an ASP.NET handler) is atypical for a downloadable PDF. However, the page itself contextualizes the link adequately.

The irony is that this most-findable form is also the **least usable** — it is an image-only scan, while the superior text-based, region-specific forms (like the Springfield variant at `.../springfield.ashx`) are not linked anywhere on the website and are discoverable only through URL-pattern guessing.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Effectively absent. While the metadata flags `has_text_layer: true`, the entire extractable text consists of just 46 characters: `"1ROI\n\nPrinted: 2024-01-17 08:19 MHP0786.dcl"`. This is printer metadata embedded in the PDF, not form content. The actual form content is captured only as a raster image.

**Embedded images**: 2 images. Per the retrieval notes, the primary image is a grayscale scan at 2550×3300 pixels, 300 DPI — a full-page scan of a printed form.

**Fillable fields**: Zero (0). As an image-only scan, no interactive form elements exist.

**File size**: 151,891 bytes for a single-page image scan. This is reasonably compact for a 300 DPI grayscale image, suggesting some compression was applied.

**Digital-first design**: This is the opposite of digital-first. The workflow behind this document appears to have been: design form digitally → print → scan → upload as PDF. The result is a document that cannot be searched, indexed, read by screen readers, filled electronically, or processed by any automated system. The region-specific variants (forms 2 and 4, both MHP 078x Rev 1/19) are properly digital PDFs with full text layers, demonstrating that the system has the capability to produce accessible forms — this 2024 version simply failed to maintain that standard.

## 4. CONTENT DESIGN

**Because this is an image-only scan, the form's textual content cannot be evaluated from the metadata.** The extracted text provides no information about the form's actual fields, instructions, legal language, record-type options, or layout. Any assessment of content design would require visual inspection of the scanned image or OCR processing, neither of which is available in the metadata.

Based on the form number (MHP0786) and its role as a system-wide replacement for the region-specific MHP 078x forms, it likely follows a similar structure to form-2 and form-4 — patient demographics, facility selection, record types, recipient, format/delivery options, legal disclosures, and signature. However, this cannot be confirmed from the available data.

**Length**: 1 page — if it mirrors the regional variants, this would be appropriately compact.

**Readability of the scan**: At 300 DPI grayscale with a 2550×3300 resolution, the scan should be visually legible when viewed on screen or printed, assuming the original was clean. However, any text will appear at scan resolution rather than vector resolution, degrading quality on high-DPI displays and when zoomed.

## 5. PATIENT-CENTEREDNESS

The image-only nature of this form fundamentally undermines patient-centeredness in several ways:

- **Accessibility**: Patients using screen readers or assistive technology cannot access this form at all. The 46 characters of extractable text (`1ROI`, `Printed: 2024-01-17 08:19 MHP0786.dcl`) provide no useful information.
- **Electronic filling**: Patients cannot type into this form. They must print it, fill it by hand, and then scan/photograph it or deliver it physically — adding multiple steps to the process.
- **Searchability**: The form cannot be found via text-based search tools within a browser or document manager.
- **Translation/adaptation**: The scanned content cannot be programmatically translated or reformatted.

This is particularly notable because the same website page that links to this form also offers **eRequest** (an online submission option via Swellbox/Datavant) and **MyChart** portal access. The existence of these digital alternatives somewhat mitigates the form's inaccessibility — but only for patients who notice and choose those alternatives. A patient who downloads this PDF expecting to fill it out digitally will be unable to do so.

No assessment of record-type options, format choices, delivery methods, HIPAA Right of Access references, or EHI export mentions can be made from the available metadata, as the form content is locked in the scanned image.

## 6. COMPLIANCE

Without readable form text, specific compliance assessment is limited. However, several observations can be made:

**The image-only format itself is a barrier.** While HIPAA does not specifically require fillable PDF forms, the fact that this organization has text-based versions (forms 2 and 4) but chose to link an image-only scan as the primary download suggests a process failure rather than a deliberate design choice. The 2024 print date indicates this is recent — not a legacy artifact.

**Form number lineage**: MHP0786.dcl (this form) vs. MHP 0782/0785 (region-specific forms from Rev 1/19). The "dcl" suffix and the 2024 date suggest this may have been generated from a document management system. The regional forms were revised in January 2019; this system-wide version was printed in January 2024, suggesting a 5-year update cycle.

**Fee, expiration, and barrier analysis**: Cannot be assessed from the metadata. If this form mirrors the regional variants (forms 2 and 4), it would include a one-year authorization expiration for Ohio, photo ID requirement, two-year default for "entire record" requests, and vague fee language — all of which were noted as concerns in the evaluations of those forms.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Image-only scan as the primary linked form**: The organization's website links to this image-only scan as the default download, while text-based, accessible versions of the same form template exist for specific regions (Youngstown, Springfield) but are hidden. This creates a significant accessibility barrier for the majority of patients who follow the website's navigation to find the form. It may also raise ADA/Section 508 accessibility concerns for a healthcare organization's patient-facing materials.

### ❌ ERRORS

- **Metadata inconsistency**: The `is_image_only_scan` field in the metadata JSON is `false`, but the form is functionally an image-only scan — only 46 characters of printer metadata are extractable from a full-page form. The `has_text_layer: true` flag is technically correct (there is *some* text) but deeply misleading about the document's usability. This is a metadata extraction issue, not a form design issue, but it could cause automated quality assessments to incorrectly classify this form as having readable text.
- **Regression from accessible to inaccessible**: The 2019-era region-specific forms (MHP 0782, MHP 0785) are properly digitized PDFs with full text layers. The 2024 system-wide form (MHP0786) that appears to supersede them is an image-only scan. This represents a **backwards step** in accessibility — a newer form is less accessible than the older ones it replaces.

### ⚠️ AMBIGUITIES

- **Relationship to regional forms unclear**: It is not clear whether this system-wide form (MHP0786) is intended to fully replace the regional variants (MHP 0782, MHP 0785) or to coexist alongside them. The website links only to this form, but the regional forms remain accessible via direct URL. Patients have no guidance on which form to use.
- **Form content entirely opaque**: Without OCR, no evaluation of the form's actual fields, options, legal language, or compliance posture is possible. The form could contain materially different content from the regional variants — or could be identical aside from facility names — but the image-only format makes this impossible to determine from metadata alone.

### ✨ BRIGHT SPOTS

- **Alternative digital channels exist**: The same medical records page that links to this form also offers MyChart portal access and an eRequest online submission option via Swellbox/Datavant. These alternatives provide genuinely digital, accessible pathways for patients who can use them — partially compensating for the PDF form's inaccessibility.
