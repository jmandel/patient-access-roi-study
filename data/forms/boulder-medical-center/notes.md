# Boulder Medical Center — ROI Form Retrieval Notes

## Search Strategies

1. **Web search for PDF**: Searched `Boulder Medical Center "authorization" "release" "health information" filetype:pdf` — no direct hit for BMC specifically, but pointed toward their website.
2. **Web search for medical records release**: Searched `Boulder Medical Center Boulder CO "medical records" "release form"` — found their Medical Records Department page at `https://www.bouldermedicalcenter.com/departments/medical-records/`.
3. **Website navigation**: Fetched the Medical Records page directly. The form is clearly linked under "Option 2: Complete and Return the Form" with a direct PDF download link.

## What Worked

The second web search immediately identified the correct page. The form is directly linked from the Medical Records department page — no deep navigation required. The PDF downloaded cleanly with curl (no bot blocking or JavaScript rendering needed).

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://www.bouldermedicalcenter.com/wp-content/uploads/2020/11/BMC-Record-Release-Form.pdf`
- **File size**: 59,672 bytes
- **Document type**: Authorization to Release and/or Obtain Patient Information (ROI form)
- **Description**: A single-page form titled "AUTHORIZATION TO RELEASE AND/OR OBTAIN PATIENT INFORMATION" from Boulder Medical Center, P.C. It includes fields for patient name, DOB, address, phone, MR#, service date range, record type checkboxes (clinic/progress notes, procedure reports, immunization records, radiology reports, laboratory reports), delivery method selection (mail or electronic/email), entity information for sending/receiving records, signature lines for patient and designated agent, and legal authorization language. The form mentions a 180-day expiration from signature date, notes that treatment cannot be conditioned on signing, and references the BMC Notice of Privacy Practices for revocation. Form ID: AUTH001a, Rev 01.2019.

## Difficulties

- None. The form was easy to find and download. It was clearly linked from the medical records page.
- The website also mentions two other ways to request records: (1) an online form via Swellbox for records before September 9, 2024, and (2) the MyChart "Sharing Hub" for records after September 9, 2024. Only the PDF release form was downloaded as it is the traditional ROI authorization form.
