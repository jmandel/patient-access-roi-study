# Evaluation: Bayshore Medical Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is a "Release of Information Authorization Form" from **Pascack Valley Medical Center**, a sister facility within the Hackensack Meridian Health (HMH) system. It is **not** a Bayshore Medical Center form. The filename from the source URL — `PVC-Release-of-Information-Authorization-Form-All-Reqestors.pdf` — identifies it as a Pascack Valley ("PVC") document applicable to "All Requestors" (note the misspelling "Reqestors" in the URL).

Among the six forms retrieved for Bayshore Medical Center, this is one of two forms originating from Pascack Valley (the other being form-5.pdf, a patient-specific request form). The collection also includes:
- **form-1.pdf**: HMH Medical Group outpatient ROI form (1 page, text layer, dated March 2018)
- **form-3.pdf**: Spanish-language HMH system-wide ROI form (CMR-003S)
- **form-4.pdf**: HMH amendment request form
- **form-5.pdf**: Pascack Valley patient request form (patient-access specific)
- **form-6.pdf**: The primary English HMH system-wide ROI form (CMR-003) — the most relevant form for Bayshore

Form-2 appears to be a general third-party release authorization — the "All Requestors" label in the filename suggests it is designed for any requester (patient, attorney, insurer, etc.) rather than being tailored for patient self-access.

## 2. FINDABILITY

This form was **not findable through Bayshore Medical Center's website**. It was discovered on the separately-managed Pascack Valley Medical Center website (`pascackmedicalcenter.com`) during an expanded search of HMH sister facilities. The retrieval notes document that Bayshore's own path leads to the HMH system-wide Medical Records page, which directs English-speaking users to the Swellbox/Datavant online wizard rather than offering a downloadable PDF.

A patient seeking Bayshore Medical Center's ROI form would have no reason to visit the Pascack Valley website. The form is not linked from any Bayshore or HMH system-wide page. Findability for a Bayshore patient is effectively zero — this form would only be encountered by someone who happened to search for HMH ROI forms broadly and landed on the Pascack Valley site.

The source URL (`https://pascackmedicalcenter.com/wp-content/uploads/sites/7/2024/09/PVC-Release-of-Information-Authorization-Form-All-Reqestors.pdf`) is a WordPress media upload path — descriptive enough to identify the content but not designed for direct discovery.

## 3. TECHNICAL ACCESSIBILITY

This document has **severe technical accessibility problems**:

- **Image-only scan**: `is_image_only_scan: true`. The PDF contains zero extractable text (`full_text_chars: 1` — just a form feed character). All content exists only as embedded images.
- **No text layer**: `has_text_layer: false`. The document cannot be read by screen readers, cannot be searched, and cannot have text selected or copied.
- **No fillable fields**: `fillable_field_count: 0`. The form must be printed, filled by hand, and scanned/faxed back.
- **No fonts embedded**: `font_count: 0`, confirming the document is purely raster images.
- **Two embedded images**: `embedded_image_count: 2` — likely a scan of a physical form captured as image(s).
- **File size**: 217,084 bytes (217 KB) for a single page. This is moderately large for a 1-page document, consistent with an image-based scan rather than a vector/text-based PDF.
- **Single page**: `page_count: 1`.

This is the worst possible outcome for digital accessibility. The form is essentially a photograph of a paper document packaged as a PDF. It fails every digital-first criterion: no text extraction, no fillability, no accessibility for assistive technologies.

## 4. CONTENT DESIGN

**Content cannot be fully evaluated** because the document is an image-only scan with no extractable text. No text from the form body was captured by `pdftotext`. Without OCR, the actual content, layout, language, font sizes, and organization of the form cannot be assessed from the metadata alone.

Based on the filename ("Release of Information Authorization Form — All Requestors") and the fact that it is a single page, we can infer it is a relatively compact authorization form. However, the following cannot be determined from available metadata:
- Reading level and clarity of language
- Visual hierarchy and organization
- Font sizes and readability
- Whether sections are logically ordered
- Quality of instructions provided to the patient

The fact that the form fits on a single page suggests reasonable brevity, but this is the only positive inference possible.

## 5. PATIENT-CENTEREDNESS

Based on available information, this form has **limited patient-centeredness**:

- **Not patient-access specific**: The "All Requestors" label indicates this is a general-purpose release form, not one designed specifically for patients requesting their own records. Compare this to form-5.pdf from the same Pascack Valley facility, which is titled "Patient Request for Health Information" and is explicitly patient-facing.
- **Not applicable to Bayshore**: This form is branded for Pascack Valley Medical Center. A Bayshore patient would need the HMH system-wide form (form-6/CMR-003) or would be directed to the online portal.
- **No electronic delivery options visible**: Since no text is extractable, it's impossible to confirm whether the form offers electronic delivery, but the image-only scan format itself signals a paper-first workflow.
- **No EHI Export option visible**: Unlike the HMH system-wide form (CMR-003, form-6), which explicitly mentions EHI Export for machine-readable records, there is no indication this form includes such an option.
- **No HIPAA Right of Access language visible**: Cannot verify from metadata.

The existence of a separate patient-specific form (form-5.pdf) at Pascack Valley suggests that form-2 may serve primarily as a third-party release authorization, which would make it less relevant for a patient self-access scenario.

## 6. COMPLIANCE

Without extractable text, a full compliance assessment is impossible. However, several observations can be made:

- **Image-only format creates an accessibility barrier**: HIPAA requires covered entities to provide information in a form and format requested by the patient where readily producible. An image-only scan that cannot be filled electronically and requires printing, hand-completion, and physical return creates unnecessary friction.
- **No visible fee disclosure**: Cannot verify from metadata whether fees are mentioned.
- **No visible expiration terms**: Cannot confirm authorization duration or auto-revocation terms.
- **Submission method unknown**: Without text, it's unclear whether the form requires in-person submission, allows mail/fax, or accepts email.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Image-only scan with zero text accessibility**: This is the most significant issue. The PDF contains no extractable text whatsoever — it is a photograph of a form. This creates barriers for patients using screen readers, patients who need to search or copy text, and any automated processing. It fails basic ADA/Section 508 digital accessibility standards.

### ⚠️ AMBIGUITIES

- **Applicability to Bayshore patients is unclear**: This form is from Pascack Valley Medical Center, a sister HMH facility. It is not clear whether Bayshore's HIM department would accept this form, or whether patients should use the system-wide CMR-003 form instead. A patient who somehow found this form would face confusion about whether it applies to their Bayshore records.
- **"All Requestors" scope**: The filename suggests this form is for any requester type, but without readable text, patients cannot determine whether this is the right form for self-access vs. third-party release.

### ❌ ERRORS

- **Misspelled filename**: The source URL contains "Reqestors" instead of "Requestors" — a minor but telling indicator of the level of care in digital publishing.
- **No text layer despite being a published document**: A form uploaded in September 2024 (per the URL path `/2024/09/`) should have OCR applied or be recreated as a native digital PDF. Publishing an image-only scan in 2024 is a production deficiency.
