# University of Mississippi Medical Center — Org-Level Synthesis

## Forms and Pathways

UMMC provides a single general-purpose "Authorization for Release of Health Information" (Form #1862) in two language versions. Form-1 is a Spanish-language version (Rev. 05/2025) retrieved from the Wayback Machine, and form-2 is an older English-language version (Rev. 04/2018) obtained from a third-party caching site (pdf4pro.com). Both are one-page PDFs covering all UMMC locations. No dedicated patient access form, online portal, or web-based request wizard was identified. No separate fee schedule or patient rights document was found.

## Access Pathway Differentiation

UMMC does **not** differentiate between patient self-access and third-party release. Both forms are generic HIPAA authorization forms designed primarily for releasing records to third parties — the "Release to" field and purpose options like Legal/Attorney, Insurance, and Workers' Compensation reflect a third-party orientation. A patient requesting their own records must select "Personal" as the purpose and enter their own contact information in the "Release to" field, which is a confusing and unintuitive workflow. Neither form references HIPAA § 164.524 (Right of Access) or informs patients of their affirmative right to access their own records.

## Retrieval Experience

Finding the form was **extremely difficult**. The English PDF link on UMMC's website returns HTTP 404, and an older compliance-page URL is also broken. Five different retrieval strategies were attempted: direct web search, curl (failed due to DNS), Wayback Machine, browser-based archive navigation, and finally a third-party cache. The Spanish version was the only form still live at its canonical URL. The English form was only available via pdf4pro.com — a source no typical patient would find. This represents a critical findability failure for a major teaching hospital: a patient visiting the UMMC website today and clicking the Release Form link reaches a dead end.

## Form Document Quality

Using the **high-watermark principle**, the Spanish form (form-1) is the better document: it has 70 fillable/interactive fields, a native text layer, and was clearly designed as a digital-first PDF. The English form (form-2) has zero fillable fields and requires printing and handwriting. Both forms share identical structure: location selection → patient info → release-to info → purpose checkboxes → 14 record-type checkboxes → sensitive information initials → patient rights paragraph → signature block with witness. The layout is logically organized but cramped, fitting everything onto a single page at the cost of readability. The Patient Rights section is a dense, unbroken paragraph of legal text with no bullet points or visual hierarchy. Three delivery formats are offered — Paper, Electronic, and "View Access as scheduled" — but none are defined, and critically, **no submission instructions appear on either form** (no fax number, no mailing address for initial submission, no email, no portal link).

## Barriers

- **Witness signature required**: Both forms mandate a witness, which HIPAA does not require. This is a practical barrier for patients completing the form at home.
- **SSN collection**: Both forms request the patient's full Social Security Number, which is unnecessary for a records request and creates identity theft risk.
- **Incomplete forms rejected**: The header warns that incomplete forms will not be accepted, but does not clarify which fields are mandatory.
- **No fee disclosure**: Neither form mentions fees, costs, or the patient's right to cost-based pricing.
- **No submission instructions**: A patient completing the form has no way to know where to send it.

## Bright Spots

- **Bilingual forms**: Offering Spanish and English versions is a genuine accessibility strength, especially for Mississippi's growing Spanish-speaking population.
- **Fillable PDF (Spanish version)**: 70 interactive fields allow digital completion.
- **Electronic delivery option**: The form explicitly offers "Electronic" as a delivery format.
- **Granular record selection**: 14 specific record categories with a clarification that "Entire Medical Record" does not include images — a helpful transparency measure.
- **"Personal" purpose option**: Including this among pre-printed options legitimizes patient self-access.

## Overall Assessment

UMMC provides a generic, moderately well-designed authorization form that serves patients as an afterthought rather than a primary audience. The critical findability failure — a broken English PDF link on the organization's own website — is the most acute problem: a patient cannot currently obtain the form from UMMC online. The Spanish version survives but would not serve most English-speaking patients. The witness requirement and SSN collection add unnecessary friction. The absence of submission instructions is a significant gap. While the Spanish form's fillable fields and bilingual availability are genuine positives, the overall experience reflects an organization that has not prioritized patient self-access as a distinct use case.
