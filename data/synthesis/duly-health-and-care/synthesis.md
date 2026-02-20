# Synthesis: Duly Health and Care

## Overview

Duly Health and Care (Downers Grove, IL) is a large independent, for-profit physician practice formerly known as DuPage Medical Group. Four PDF documents were retrieved: one Duly-branded ROI authorization (form-1), two MediCopy vendor authorization forms (forms 2 and 4), and one specialized FMLA/disability intake form (form-3). The primary form for patient self-access is **form-1**, Duly's own "Authorization for Release of Health Information," processed by ScanSTAT Technologies and last updated June 2023.

## Access Pathway & Patient Self-Access

Duly does **not** differentiate between patient self-access and third-party release of information. All four forms are generic HIPAA authorization forms designed for any disclosure purpose. Form-1's "Purpose of Disclosure" section includes a "Personal Reasons" checkbox, and forms 2 and 4 offer "Personal Use," but none of these forms are specifically designed around the patient's Right of Access under 45 CFR § 164.524. The same witness requirements, fee language, and expiration terms apply regardless of whether the patient is requesting records for themselves or authorizing release to a third party.

The form header does note that records "may be available through MyDMGHealth" (the MyChart patient portal), suggesting a digital self-service alternative exists — but this is a brief aside, not a developed pathway. Delivery methods on form-1 include fax, mail, MyChart, secure e-delivery, and pick-up, which is above-average flexibility. Submission of the completed form can be done via fax (630-873-8797) or email (mrrequests@dupagemd.com), so a patient can submit without visiting the facility.

## Retrieval Experience

Finding Duly's forms was **easy**. A web search for the organization name plus "medical records release form" returned direct PDF links on the first attempt. Duly hosts forms on Azure blob storage, and a dedicated medical records request page exists at `dulyhealthandcare.com/services/medical-records-requests`. No bot blocking or browser fallback was needed. The only minor friction: the coexistence of Duly-branded and MediCopy-branded forms could confuse a patient about which to use.

## Form Document Quality

Form-1 is a single-page PDF with a text layer and clean extraction, but **zero fillable fields**. It is a print-and-fill document. Despite being "Updated 062023," the form retains legacy branding — the email uses `@dupagemd.com`, the MyChart URL references `dupagemedicalgroup.com`, and the form ID starts with "DMG." The layout is organized into six clearly numbered sections with a logical flow (patient info → records requested → recipient → delivery → purpose → signature). Record-type checkboxes are granular (11 categories including imaging CDs), and date format examples are provided — helpful details many forms lack. However, the legal text in Section 6 is dense, presented as a continuous block in small type.

The MediCopy forms (2 and 4) use friendlier conversational headings ("Tell us about the patient," "Where are we sending the records?") but also lack fillable fields and have their own issues: form-2 has no submission contact information at all, while form-4 adds a witness requirement.

## Barriers

**Witness requirement**: Form-1 requires a witness signature unless the request is for continuation/transfer of care or records go directly to the patient. A patient requesting records for "Personal Reasons" must find a witness — an unusual burden with no HIPAA basis. Form-4 imposes the same requirement.

**Fee ambiguity**: Form-1 states "Charges may apply. Please contact us for details. Cash payments are not accepted." No fee schedule is provided, no amounts are indicated, and there is no acknowledgment that HIPAA limits fees for patient-access requests. The cash-payment prohibition is unexplained.

**"All records" rejection**: Form-1 explicitly states that "'All records' or incomplete dates are not considered specific." This may improperly limit patient access under HIPAA, which permits patients to request their entire designated record set.

**No notarization** is required — a positive. **Response time** is not stated.

## Bright Spots

- **Multiple delivery methods** including MyChart, secure e-delivery, fax, mail, and pick-up — five options on form-1.
- **Granular record-type checkboxes** with 11 categories give patients specific control.
- **Explicit date format examples** reduce ambiguity.
- **Patient rights statements** in form-1's Section 6 cover revocation, right to inspect, right to refuse, and re-disclosure — comprehensive if dense.
- **Easy retrieval** — forms found quickly with no technical barriers.

## Overall Assessment

Duly Health and Care provides a functional but undifferentiated records request process. The primary form is well-organized and offers good delivery flexibility, but it funnels all requests — patient self-access and third-party releases alike — through a single generic authorization with unnecessary barriers (witness requirement, fee opacity, rejection of blanket record requests). The form is not fillable, retains outdated branding, and does not acknowledge the distinction between patient access rights and third-party authorization. A patient can complete the process (print, fill, fax), but the experience is not designed around their needs as a rights-holder under HIPAA.
