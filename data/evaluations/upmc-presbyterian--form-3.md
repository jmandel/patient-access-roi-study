# UPMC Presbyterian — form-3.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This document is **not an ROI form**. It is titled "INFORMATIONAL GUIDE — Authorization for Release of Protected Health Information" and functions as a companion instruction sheet explaining how to complete the main UPMC ROI form (form-1.pdf). It is a single-page visual walkthrough that labels and explains each section of the authorization form — patient information, facility selection, recipient information, purpose, service type, documents to release, and signature requirements.

UPMC Presbyterian's form collection consists of three documents: (1) the system-wide Authorization for Release of PHI form, (2) an In-Home Urgent Care variant, and (3) this instructional guide. Form-3 is dependent on form-1 — it has no standalone function and does not collect any patient data itself. The source URL (`https://dam.upmc.com/-/media/upmc/patients-visitors/medical-records/documents/release-form-instructions.pdf`) was found on the UPMC Presbyterian medical records sub-page alongside the main form.

## 2. FINDABILITY

Per the retrieval notes, this guide was discovered when navigating to the UPMC Presbyterian-specific medical records page (`https://www.upmc.com/locations/hospitals/presbyterian/patients-visitors/medical-records`), where it was linked as a "form completion guide" alongside the main ROI form. The URL path is descriptive (`release-form-instructions.pdf`) and it is hosted on UPMC's DAM CDN, which was fast and unrestricted. The retrieval agent reported "None" for difficulties.

However, since this is a support document rather than a standalone form, its findability matters only insofar as patients can find it alongside the main form. It is co-located with form-1 on the same page, which is appropriate. The form was found within a few clicks from the UPMC homepage via the Patient & Visitors > Medical Records path.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (2,325 characters).
- **Fillable fields**: Zero — appropriate since this is an instructional document, not a fillable form.
- **File size**: 614,049 bytes (~600 KB) for a single page. This is disproportionately large — roughly 1.7× the size of the actual 2-page ROI form (371 KB). The document contains 1 embedded image and 8 fonts, suggesting it may include a graphic/visual layout element (likely a screenshot or annotated reproduction of the form) that inflates the file size.
- **Page count**: 1 page.
- **Format**: Has text layer and is not a scan, indicating digital-first creation. However, the relatively high file size for a single-page text-based document suggests embedded raster images.

The document appears to be digitally produced rather than scanned, which is positive. The large file size for a single page of instructional content is a minor inefficiency but not a significant barrier.

## 4. CONTENT DESIGN

The guide is structured to mirror the sections of the main ROI form, walking through each area in order:

- **Patient Information** — lists required fields (Full Name, Birth Date, SSN/MRN)
- **Authorize Facility(s)** — explains to "Select UPMC hospital(s) where patient was seen"
- **Recipient Information** — differentiates between Physician Office, Personal Use, Insurance, and Legal recipients
- **Purpose for Release** — maps recipient types to purpose checkboxes (e.g., "Personal Use" for patient/representative)
- **Service Type and Date Range** — defines service types (Inpatient, Same Day Surgery, Emergency Dept, Outpatient Testing) with plain-language examples ("e.g. Intensive Care, Cardiology, Labor & Delivery")
- **Documents to Be Released** — instructs patients to check specific reports/records
- **Date, Signature and Additional Documentation** — explains representative authorization requirements

The language is reasonably plain. The use of concrete examples like "e.g. Orthopaedic procedures, hernia repairs" for Same Day Surgery and "e.g. Lab tests, X-rays, EKGs" for Outpatient Testing is helpful for patients who may not understand medical service categories. The note about approximate dates ("If patient dates of service are unknown, approximate by month and/or year") is pragmatically useful.

At 2,325 characters, the document is concise. One page is an appropriate length for an instructional guide. The content is organized logically, following the top-to-bottom flow of the actual form.

One layout concern: the extracted text suggests a multi-column or side-by-side layout (instructions paired with form sections), which could be dense on a single page. Without seeing the visual rendering, the text extraction indicates the content flows somewhat non-linearly, mixing left-column explanations with right-column form section descriptions.

## 5. PATIENT-CENTEREDNESS

**Strengths:**
- The guide explicitly tells patients requesting their own records to select "Personal Use" as the purpose — providing a direct mapping: "Send to Patient/Patient Representative: 'Personal Use'." This is practical guidance that many organizations fail to provide.
- It acknowledges that patients may not know their exact dates of service and offers a workaround: "If patient dates of service are unknown, approximate by month and/or year."
- The inclusion of plain-language examples for each service type helps patients self-classify their visits.

**Limitations:**
- The guide notes: "This form does not apply to non-hospital records including those from physician offices and urgent care centers." This is an important scope limitation that patients need to know, but the guide does not explain how to obtain those non-hospital records.
- There is no mention of HIPAA Right of Access, patient rights under federal law, or any fee information.
- No mention of electronic health information (EHI) export options or patient portal alternatives.
- The guide directs research requests to the University of Pittsburgh's eResearch portal (`www.eresearch.pitt.edu`) and billing inquiries to a specific UPMC address — useful cross-references but tangential to patient access.

**Representative documentation requirements** are explained clearly: the guide specifies that Power of Attorney, guardianship orders, Executor of Estate papers, or death certificates must accompany representative requests. This is helpful context for the signature section.

## 6. COMPLIANCE

This document itself does not impose any requirements — it is purely informational. However, it does reflect/explain several requirements from the main form:

- **Signature requirements**: The guide states "The patient or patient representative must sign and date the authorization" and explains that representatives must provide documentation of their authority. These are standard and appropriate.
- **SSN collection**: The guide lists "Social Security Number (or Medical Record Number)" as patient information. While the main form also requests this, the guide's phrasing correctly notes MRN as an alternative, which is appropriate since SSN should not be a mandatory field for records access.
- **No fee information**: The guide does not mention fees, though the main form (form-1, page 2) does note that "charges may be associated with this request."

The guide itself creates no barriers. It is a facilitative document.

## 7. NOTABLE OBSERVATIONS

### ✨ BRIGHT SPOTS

- **Existence of the guide itself**: Publishing a dedicated instruction document alongside the ROI form is uncommon and genuinely helpful. Most organizations provide the form alone and expect patients to figure out the fields. UPMC's decision to create a separate "INFORMATIONAL GUIDE" is a patient-friendly practice worth emulating.
- **Purpose mapping for patient access**: The explicit instruction "Send to Patient/Patient Representative: 'Personal Use'" eliminates a common source of confusion on general ROI forms.
- **Practical date flexibility**: The note "If patient dates of service are unknown, approximate by month and/or year" removes a common barrier where patients abandon requests because they cannot recall exact service dates.
- **Plain-language service type definitions**: Explaining that "Inpatient" means "Admitted for treatment or surgery with overnight stay" with examples like "Intensive Care, Cardiology, Labor & Delivery" translates medical jargon into terms patients can match against their own experience.

### ⚠️ AMBIGUITIES

- **Scope exclusion without alternative path**: The guide states "This form does not apply to non-hospital records including those from physician offices and urgent care centers" but provides no information on how to request those records. A patient seeing a UPMC physician in an office setting would hit a dead end.

### ❌ ERRORS

- **Stale creation/revision date**: The document footer reads "Created by Claire Giblin | Revised 04/14" — presumably April 2014, making this guide potentially 12 years old. The main ROI form (form-1) was revised "10/2022." A companion guide that is 8+ years older than the form it explains may contain outdated section references or miss form fields added in the 2022 revision.
