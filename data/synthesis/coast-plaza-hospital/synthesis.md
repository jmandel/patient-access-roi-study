# Coast Plaza Hospital — Org-Level Synthesis

## Available Forms and Pathways

Coast Plaza Hospital provides two versions of the same "Authorization to Release Protected Health Information" form on its Medical Records page (`/for-patients/medical-records/`). Form-1 (June 2024, labeled "FINAL") is the current version; form-2 (January 2022) remains publicly accessible alongside it with no indication of which is current. Both are general-purpose ROI authorization forms — not patient-access-specific documents. The primary pathway for a patient requesting their own records is to download form-1, print and hand-fill it, and fax or mail it to the hospital.

## Access Pathway Differentiation

Coast Plaza Hospital does **not** differentiate patient self-access from third-party release. Both forms use a single "Authorization to Release Protected Health Information" workflow. The "Information to be Released to" section asks for "Name of Hospital/Clinic/Physician/Person," framing the recipient as a third party. A patient requesting their own records must write their own name in this field, which is unintuitive. While "Personal Use" appears as a purpose option and "Records for Personal Use" as a record-type checkbox, the relationship between these is ambiguous — it's unclear whether selecting one, the other, or both is needed. The form lacks any Right of Access language or statement of patient rights beyond standard authorization boilerplate.

## Retrieval Experience

Finding the form was straightforward. Multiple search strategies succeeded: a filetype:pdf web search and a site-scoped search both led to the hospital's Medical Records page. No bot blocking, login walls, or JavaScript rendering was required. Both PDFs downloaded directly with curl. The only findability concern is the co-existence of two versions without clear versioning — a patient could easily download the outdated 2022 form, which lists a different fax number that may no longer be monitored.

## Form Document Quality

Form-1 is a digitally-created 2-page PDF with a clean text layer, but it has **zero fillable fields**. All ~20+ data entry points (patient name, address, DOB, phone, email, recipient information, purpose checkboxes, record-type checkboxes, date range, delivery method, signature) must be completed by hand after printing. The layout is well-organized with bold section headers ("Patient Information," "Information to be Released From," etc.) and a logical top-to-bottom flow. Record types are arranged efficiently in two columns with 16+ individual categories. The language is moderately legalistic — first-person authorization statements are standard but dense. A "PATIENT LABEL" box on both pages is a clinical workflow artifact that may confuse patients completing the form at home.

## Barriers and Concerns

- **No fillable fields**: Forces a fully paper-based completion workflow in a form that was digitally designed and could easily support interactive fields.
- **CD-only electronic delivery**: The only electronic format option is CD — functionally obsolete in 2024. No email, portal, or secure download option exists.
- **Vague fee disclosure**: "I understand that there may be a fee associated with this request" provides no fee amounts or reference to HIPAA's cost-based fee standard, potentially chilling patient requests.
- **No submission instructions**: The form does not tell patients where to send the completed authorization. The hospital's fax number appears in the "Released From" section but is not framed as a return destination.
- **Outdated form still online**: The 2022 version with a different fax number remains downloadable, creating confusion risk.

## Notable Strengths

- **Granular record selection**: 16+ specific record types give patients meaningful control over what is released.
- **Sensitive category separation**: Mental Health, Genetic Testing, Alcohol/Drug Abuse, and HIV/AIDS records require separate initialing — correctly implementing federal and state requirements.
- **Encryption preference**: The form asks whether patients want records encrypted, a privacy-conscious option rarely seen on ROI forms.
- **No notarization or witness required**: The form requires only the patient's signature.

## Overall Assessment

Coast Plaza Hospital provides a findable, reasonably organized generic ROI form that a patient *can* use for self-access, but the experience is clearly not designed around patient needs. The lack of fillable fields, absence of submission instructions, CD-only electronic delivery, and generic third-party framing all reflect a process built for institutional convenience rather than patient empowerment. The form earns credit for easy findability, granular record selection, and proper handling of sensitive categories, but falls short on technical accessibility and patient-centeredness.
