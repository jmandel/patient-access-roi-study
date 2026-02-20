# MountainView Hospital (Las Vegas, NV) — Org-Level Synthesis

## Overview

MountainView Hospital is part of HCA Healthcare's Sunrise Health network in Las Vegas. The facility's own domain (`mountainview-hospital.com`) redirects to the Sunrise Health system website at `sunrisehealthinfo.com`, where all medical records information is centralized. Two PDF forms were found—an English and Spanish version of the same standardized HCA Healthcare authorization form—alongside references to two additional digital pathways: an online Swellbox records request portal and the MyHealthONE patient portal.

## Available Pathways and Primary Form

The medical records page at sunrisehealthinfo.com offers three pathways for patients requesting records: (1) a downloadable PDF authorization form (in English and Spanish), (2) an online request wizard via Swellbox, and (3) the MyHealthONE patient portal. The primary downloadable form (form-1.pdf, HCA-840-00434, Rev. 09/21) is a system-wide HCA Healthcare standardized authorization used across all HCA facilities, not specific to MountainView Hospital. The Swellbox portal represents the most streamlined digital option, though the PDF form remains the most prominently linked resource.

## Access Pathway Differentiation

MountainView Hospital does **not** offer a dedicated patient self-access form. The single authorization form serves both patient self-requests and third-party release, with a radio-button choice between "At the request of the individual" and "Other 3rd party recipient." While a patient *can* use this form to request their own records, the form's framing—with prominent "Recipient" fields, fax-to-provider-only restrictions, and third-party disclosure language—is clearly oriented toward release-of-information scenarios rather than individual access rights under HIPAA § 164.524. The form makes no distinction between Right of Access fee limits/timelines and general authorization practices.

## Retrieval Experience

Finding the form was relatively easy. The medical records page is accessible via the main navigation ("For Patients → Medical Records"), and the authorization forms are directly linked with clear labels. The one complication was bot protection: curl requests to the initial download URL returned HTML rather than a PDF, requiring discovery of the actual CDN URL at `hcadam.com`. This is a minor technical obstacle that wouldn't affect a patient using a browser.

## Form Document Quality

The English form (form-1.pdf) is technically well-executed. It is a single-page, fully interactive PDF with 52 fillable fields—patients can complete it digitally without printing. The layout is organized into three clearly labeled sections (patient/recipient info, marketing/PHI sale, signatures), with 16 specific record-type checkboxes plus an "All Pertinent Records" option. Four delivery format options are offered: paper, electronic media, encrypted email, and unencrypted email (with risk disclosure). The form also includes a rare USCDI (United States Core Data for Interoperability) release option, a forward-looking feature for structured data export.

However, the single-page constraint makes the layout quite dense, and some terminology (USCDI, Direct Address, NPI) is jargon that would be opaque to most patients. The language is a mix of plain language and legalese—the six "I understand that..." statements are reasonably clear, but the overall form assumes familiarity with medical records processes.

## Barriers and Red Flags

- **SSN collection**: The form requests the last 4 digits of SSN, marked optional but unnecessary for records authorization and a data minimization concern.
- **Fee ambiguity**: The form states patients may obtain copies "for a reasonable copy fee" without specifying amounts, and this language appears in a rights statement that could normalize fee collection even for Right of Access requests.
- **Fax restriction**: "(FAX only to Physician Office / Medical facility)" limits fax delivery destinations and may restrict patient choice.
- **No notarization or witness required**—a positive.
- **No in-person requirement**: Mail, fax, and online portal options are all available.

## Bright Spots

- **Multilingual**: Full Spanish translation (form-2.pdf) available alongside the English version—meaningful for Las Vegas's significant Spanish-speaking population, though the surrounding web pages remain English-only and some form footer elements were left untranslated.
- **USCDI release option**: Rare and forward-looking inclusion of interoperability standards on an ROI form.
- **Multiple electronic delivery choices**: Four format options with honest risk disclosures.
- **Alternative digital pathways**: Swellbox portal and MyHealthONE patient portal provide additional request channels beyond the PDF.
- **52 fillable fields**: Fully digital-first form design.

## Overall Assessment

MountainView Hospital, through HCA Healthcare's standardized forms and Sunrise Health's website, provides a reasonably accessible records request experience. The form is easy to find, technically well-built, and offers meaningful delivery format choices. The main weakness is the lack of a dedicated patient self-access pathway—patients must navigate a generic third-party authorization form that doesn't distinguish Right of Access rights, fee limits, or timelines. The availability of the Swellbox online portal and MyHealthONE partially compensates for this gap by offering alternative digital pathways. The form earns credit for its fillable design, Spanish availability, and USCDI awareness, but loses points for its generic framing, fee ambiguity, and unnecessary SSN collection.
