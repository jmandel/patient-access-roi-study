# Southwell (Tift Regional Health System) — form-4.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**This is not an ROI form.** Form-4.pdf is a supplementary reference document titled "List of TRHS Entities" — a single-page directory listing approximately 40+ Tift Regional Health System facility trade names and their physical addresses. It was linked from the same medical release page (`https://mysouthwell.com/medical-release/`) as the actual authorization forms.

In the context of the four documents found for Southwell:
- **form-1.pdf**: The primary TRHS Authorization to Release/Obtain PHI (hospital system)
- **form-2.pdf**: A newer Release of Information form (image-only scan, content unverifiable)
- **form-3.pdf**: Southwell Ambulatory authorization form (ambulatory/specialty clinics)
- **form-4.pdf (this document)**: Entity reference list — not an authorization form at all

The document serves as a companion to the ROI forms, which require patients to identify which facility holds their records. The ROI forms (form-1 and form-3) list only a handful of facilities with checkboxes; this entity list provides the full directory of ~40+ locations that fall under the TRHS umbrella.

## 2. FINDABILITY

The document was found on the medical release page alongside the actual authorization forms. Its source URL (`https://mysouthwell.com/wp-content/uploads/2020/09/List-of-TRHS-Entities.pdf`) has a descriptive filename ("List-of-TRHS-Entities.pdf"), making it identifiable before downloading. However, since the notes indicate forms were discovered by scraping all PDF links from the medical release page, it is unclear how prominently this list is labeled or linked on the page itself. The URL date path (`2020/09`) suggests the document was uploaded in September 2020 and may not have been updated since.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — all entity names and addresses are extractable as text (3,280 characters).
- **Fillable fields**: None (0 fields), which is appropriate since this is a reference list, not a form.
- **File size**: 341 KB for a single page with no images and only 2 fonts. This is disproportionately large for what amounts to a plain text table. For comparison, form-1.pdf (the 2-page authorization form with 5 fonts) is only 135 KB.
- **Format**: The extracted text shows entity names and addresses interleaved in a two-column layout, but `pdftotext` extraction produces jumbled output where names and addresses are misaligned (e.g., "Ben Hill Specialty Care" appears next to "Southwell Medical Nashville Primary Care" before any address). This suggests the document uses a table layout that does not extract cleanly, which would also impact screen reader accessibility.
- **Digital-first**: The document appears digitally created (not a scan), with 0 embedded images. However, the poor text extraction ordering suggests it may not have been created with accessibility in mind.

## 4. CONTENT DESIGN

The document is a single-page listing of facility names and addresses, organized in what appears to be a two-column table format (Tradename | Address). The extracted text reveals approximately 40+ entities spanning locations in Tifton, Adel, Fitzgerald, Nashville, Moultrie, Ocilla, Ashburn, and Sylvester, GA.

**Observations:**
- No header identifying this as a TRHS document or explaining its purpose — the extracted text begins directly with "Tradename" and "Address" column headers.
- No date, version number, or "last updated" indicator.
- Some address entries are awkward, such as: `"39 Kent Road, Suite 1, Tifton, GA 31794/moved to 1493 Kennedy Road, Suite A, Tifton, GA 31794"` for Affinity Physicians for Women — suggesting a stale, un-maintained document that records address changes inline rather than updating the entry.
- There is a typo: "Southwell Chriopractic" (should be "Chiropractic").
- The entity listing appears alphabetical within sub-groups but is not strictly alphabetical overall — Tifton entities are grouped together, with out-of-Tifton entities appearing first.

## 5. PATIENT-CENTEREDNESS

As a reference document, this list is potentially useful for patients who need to identify which TRHS entity holds their records. However, it falls short in several ways:

- **No guidance on how to use the list**: There is no explanatory text telling patients why this list exists or how it relates to the authorization forms.
- **No contact information**: Only physical addresses are listed — no phone numbers, fax numbers, or department contacts for HIM/medical records at each location.
- **No indication of which form to use**: The TRHS system uses separate authorization forms for hospital entities (form-1) versus ambulatory entities (form-3), but this list does not indicate which form corresponds to which entity.
- **Facility name confusion**: Many entities share similar names (e.g., "Tift Regional Medical Center," "Tift Regional Medical Center West Campus," "Tift Regional Medical Center Oncology") without explaining the distinctions. A patient who visited "the Tift Regional building on 18th Street" may not know which of several overlapping entities to select.

## 6. COMPLIANCE

No compliance concerns arise from this document since it is not an authorization form and imposes no requirements on patients. However, the existence of this document as a separate PDF (rather than integrated into the authorization forms) adds an extra step for patients — they must locate and cross-reference this list to correctly complete their ROI request. The stale address data (inline "moved to" notation) could misdirect mail-based record requests.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES
- The document provides no context for its purpose. A patient downloading this PDF in isolation would not understand its relationship to the ROI authorization process.
- No mapping between entity names and which authorization form (TRHS vs. Southwell Ambulatory) to use — this is critical since the system maintains separate forms.

### ❌ ERRORS
- **Typo**: "Southwell Chriopractic" should be "Southwell Chiropractic."
- **Stale data**: The entry for Affinity Physicians for Women contains `"39 Kent Road, Suite 1, Tifton, GA 31794/moved to 1493 Kennedy Road, Suite A, Tifton, GA 31794"` — an inline address change that suggests the document has not been properly maintained since its 2020 upload.
- **Disproportionate file size**: 341 KB for a single-page text-only document with 2 fonts and 0 images is roughly 2.5× the size of the 2-page authorization form (135 KB), suggesting inefficient PDF generation.
- **Poor text extraction order**: The two-column table layout produces garbled `pdftotext` output, which would impair assistive technology use.
