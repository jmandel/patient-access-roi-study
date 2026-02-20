# The Baton Rouge Clinic — ROI Form Retrieval Notes

## Search Strategy

1. **Web search** for "The Baton Rouge Clinic authorization release health information medical records form PDF" — immediately returned direct PDF links to two authorization forms hosted on batonrougeclinic.com.
2. **Site-specific search** (`site:batonrougeclinic.com`) confirmed the same results.
3. **Visited the downloadable forms page** at `https://batonrougeclinic.com/patient-information/downloadable-forms/` to confirm completeness — discovered a third form ("Right of Access") not surfaced in initial search results.

## Retrieval Difficulty: Easy

All forms were directly linked from a well-organized "Downloadable Forms" page under Patient Information. No login, CAPTCHA, or JavaScript rendering required. PDFs downloaded cleanly via curl.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://batonrougeclinic.com/wp-content/uploads/2022/01/AuthFrom-01.31.22.pdf
- **File size**: 200,510 bytes
- **Description**: "Authorization for Release of Protected Health Information FROM The Baton Rouge Clinic, AMC" — a standard ROI form for releasing patient records from the clinic to another party. Includes fields for patient identification, recipient information, date ranges, types of records to release, purpose of disclosure, and special authorization for sensitive records (drug/alcohol, psychiatric, HIV/AIDS). Dated January 2022.

### form-2.pdf
- **Source URL**: https://batonrougeclinic.com/wp-content/uploads/2023/03/AuthTo-02.28.2023.pdf
- **File size**: 264,223 bytes
- **Description**: "Authorization for Release of Protected Health Information TO The Baton Rouge Clinic, AMC" — an incoming records request form, authorizing another organization to send records to the Baton Rouge Clinic. Similar structure to form-1 but in the opposite direction. Dated February 2023.

### form-3.pdf
- **Source URL**: https://batonrougeclinic.com/wp-content/uploads/2022/01/RightOfAccess01.22.pdf
- **File size**: 123,342 bytes
- **Description**: "Right of Access Form" — allows a patient to designate another person (e.g., spouse, child) to access their records. Explicitly references HIPAA 45 C.F.R. 164.524. Offers choice of electronic or hard copy disclosure. Notably more patient-centered than the general ROI forms — includes electronic delivery option and HIPAA Right of Access citation. Dated January 2022.

## Observations

- The clinic maintains three distinct medical records forms, well-organized under "Medical Records" on their downloadable forms page.
- The "Right of Access" form (form-3) is the most patient-access-specific, with explicit HIPAA Right of Access reference and electronic delivery option.
- The "Release FROM" form (form-1) is the traditional ROI/authorization form for releasing records outward.
- The "Release TO" form (form-2) is for incoming records transfers.
- All three forms have text layers (not image-only scans) but appear to be flat PDFs without fillable form fields.
- The HIPAA Privacy Notice was also available on the same page but was not downloaded as it is not an ROI form.
