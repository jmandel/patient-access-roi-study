# UAB Hospital — Org-Level Synthesis

## Overview

UAB Hospital (UAB Medicine), a major nonprofit teaching hospital in Birmingham, Alabama, provides one of the clearer patient record request experiences encountered in this study. The organization maintains a dedicated medical records request page that explicitly separates patient self-access from third-party release, offering distinct downloadable PDF forms for each pathway. Three forms were retrieved: a patient self-access form (form-1), a Callahan Eye Hospital variant (form-2), and a third-party authorization form (form-3).

## Access Pathway: Dedicated Patient Self-Access

UAB Medicine stands out by offering a **dedicated patient self-access form** (form-1, "Patient Request for Own Medical Records") that is clearly differentiated from its third-party authorization form (form-3). The patient access form opens with an explicit rights-affirming statement: *"UAB Medicine recognizes a patient's right to access their own protected health information."* The medical records request page at `uabmedicine.org/pay-your-bill/medical-records-request/` routes patients to the correct form based on their need — self-access versus third-party disclosure — with separate download links. This is a best practice that many organizations fail to implement.

## Retrieval Experience

Finding the forms was straightforward. Web searches immediately returned direct PDF links, and the UAB Medicine website clearly organizes its medical records page. The patient access form has a descriptive URL and filename (`Patient-Request-own-medical-records.pdf`), making it identifiable even in search results. No bot blocking or browser fallback was needed.

## Form Quality: The Primary Patient Access Form (Form-1)

Form-1 is a 2-page fillable PDF with **51 interactive form fields**, clean text extraction, and a logical layout. The form is structured into clear sections: patient demographics, recipient designation, sensitive records opt-in, date range, record package selection, delivery method, and signature. The language is generally plain and direct, though the tiered package system requires some cognitive effort to parse.

A standout feature is the **five-tier record package system**, offering graduated levels of detail from key clinical notes through the entire medical record. This gives patients meaningful control over scope rather than forcing an all-or-nothing choice. Additionally, nine individual record-type checkboxes allow specific requests (operative reports, billing records, medication list, radiology images, etc.).

**Delivery options** are comprehensive: paper mail, in-person pickup, fax, CD, and email. Electronic delivery includes a clear notice about encryption and privacy. For form submission, patients can return the completed form by mail or **fax (205-930-6721)**, providing an adequate electronic submission channel.

## Barriers and Compliance

The form imposes no notarization or witness requirements. No in-person submission is required. There are no excessive procedural hurdles — a patient signs once and does not need to initial multiple clauses (unlike form-2's three-initial requirement). However, **fees are not mentioned at all** — neither confirming free patient access nor disclosing a fee schedule. This silence creates ambiguity for patients who may reasonably want to know costs upfront. Similarly, **no turnaround time** is stated.

One ambiguity warrants mention: the form asks patients whether to include psychiatric/substance use records (opt-in checkbox on page 1) but then includes blanket authorization language covering those same records in the signature block on page 2, creating a potential contradiction.

## Contextual Notes on Other Forms

Form-2 (Callahan Eye Hospital variant) serves the same self-access function but is notably inferior: it has **zero fillable fields**, requires print-and-handwrite completion, and is 3 pages despite offering less content (2 record packages versus 5). Its title conflates "Patient Access" with "Authorization for Use or Disclosure," and it omits the rights-affirming opening statement present in form-1. It also contains a pagination error ("Page 3/2"). However, the high-watermark principle means UAB is assessed based on form-1, not this weaker variant.

Form-3 is correctly scoped as a third-party authorization and is appropriately separate from the patient access pathway. Its text layer is completely garbled due to CID font encoding issues, creating accessibility barriers, but this does not affect the patient self-access assessment.

## Overall Assessment

UAB Hospital delivers an above-average patient record request experience. The dedicated patient self-access form with rights-affirming language, fillable fields, granular record selection, and multiple delivery options — combined with a well-organized website that clearly separates patient access from third-party release — places this organization among the better performers. The primary gaps are the absence of fee disclosure and turnaround time information. The form is not cutting-edge (no online portal or digital submission), but the fillable PDF with fax submission represents a solid, accessible workflow.
