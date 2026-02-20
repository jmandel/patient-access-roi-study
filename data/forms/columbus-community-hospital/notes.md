# Columbus Community Hospital — ROI Form Retrieval Notes

## Organization
- **Name:** Columbus Community Hospital
- **Location:** Columbus, NE
- **Website:** https://www.columbushosp.org (also https://columbusch.com)
- **Type:** Independent nonprofit community hospital

## Search Strategies

1. **Web search for "Columbus Community Hospital Columbus NE authorization release health information form PDF"** — Did not return a direct link but confirmed the hospital exists.
2. **Web search for "Columbus Community Hospital Columbus Nebraska medical records release form"** — Successfully returned a direct link to the PDF at `https://www.columbushosp.org/Content/Uploads/ColumbusHosp/files/Release%20Med%20Records%2C%20Authorization.pdf` and also identified the patient forms page at `https://columbusch.com/patient-forms/`.
3. **Checked patient forms page** at `https://columbusch.com/patient-forms/` — The page mentions the Release of Information form and instructs patients to email it to release@columbusch.com, but does not include a direct download link on the page itself. The PDF is hosted on the older columbushosp.org domain.

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.columbushosp.org/Content/Uploads/ColumbusHosp/files/Release%20Med%20Records%2C%20Authorization.pdf
- **Document type:** Authorization to Release Medical Records (ROI form)
- **Description:** Single-page PDF form titled "AUTHORIZATION TO RELEASE MEDICAL RECORDS" (form ID: MR-1, dated 12/14). Includes fields for patient name/DOB, recipient name/address, dates of treatment, type of records to disclose (discharge summary, ER record, lab/x-ray, operative report, progress notes, H&P, x-ray films, consult report, complete record), purpose (treatment, insurance, follow-up, legal, personal, other), special authorization for substance abuse/mental health/HIV-AIDS information, patient acknowledgments (non-retaliation, re-disclosure risk, 12-month expiration, revocation rights), signature lines, and a Notice of Revocation section.
- **Text layer:** Yes — full text extractable via pdftotext
- **Pages:** 1
- **Fillable fields:** Not checked but appears to be a flat (non-fillable) PDF based on the text extraction showing blank lines

## Difficulties
- The hospital appears to operate two domains: `columbushosp.org` (older, hosts the PDF) and `columbusch.com` (newer website with navigation). The patient forms page on the newer site mentions the form but doesn't link directly to the PDF download.
- No bot blocking or download issues encountered — curl worked on first attempt.

## Summary
Found one ROI form (Authorization to Release Medical Records) hosted directly on the hospital's website. The form was relatively easy to find via web search. It is a standard single-page authorization form with checkboxes for record types and purposes, and includes HIPAA-related acknowledgment language.
