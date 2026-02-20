# Southeast Medical Group — ROI Form Retrieval Notes

## Organization
- **Name:** Southeast Medical Group (SEMG)
- **Website:** https://mysemg.com
- **Location:** Alpharetta, GA
- **Type:** Independent physician practice, for-profit

## Search Strategies

### 1. Web search for authorization/release forms (filetype:pdf)
- Searched: `"Southeast Medical Group" Alpharetta GA "authorization" "release" "health information" form PDF`
- Searched: `site:mysemg.com medical records release authorization form`
- Searched: `"Southeast Medical Group" OR "mysemg" authorization "release of information" filetype:pdf`
- **Result:** No SEMG-specific ROI PDF found. Searches confirmed SEMG does not publish a standalone ROI form on their own website.

### 2. Navigated SEMG website
- Checked https://mysemg.com/resources/forms — lists 10 patient forms (registration, advance directive, health questionnaire, etc.) but **no ROI/authorization for release of records form**.
- Checked https://mysemg.com/resources — "Medical Records" section says patients can request records online or in person, with a "Request Records" link.
- Expanded FAQ "How can I get a copy of my medical record?" — Answer: "The fastest method is clicking here" (link to MediCopy) and email medicalrecords@southeastmedicalgroup.com.

### 3. Followed "Request Records" link
- https://semg.link/med-records redirects to https://www.medicopy.net/patients — **MediCopy**, a third-party Release of Information service.
- MediCopy's ROI page (https://www.medicopy.net/roi) provides authorization forms in PDF and online (HelloSign) formats.
- **This is the form SEMG patients are directed to use for medical records requests.**

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.medicopy.net/sites/default/files/2023-12/MediCopy%20MRO%20Authorization%20%28English%29.pdf
- **What it is:** MediCopy Authorization for the Release of Medical Records (2023 version)
- **Description:** Generic MediCopy ROI authorization form. Includes fields for facility name, patient info, recipient info, record types to release, date range, delivery method, and signature. Not SEMG-specific but is the form SEMG patients are directed to use.
- **File size:** ~1.4 MB
- **Has text layer:** Yes

### form-2.pdf
- **Source URL:** https://medicopy.net/sites/default/files/2020-05/MediCopy%20Authorization%202020.pdf
- **What it is:** MediCopy Authorization for the Release of Medical Records (2020 version)
- **Description:** Older version of the same MediCopy authorization form, still linked on the MediCopy ROI page. Very similar content to form-1.pdf.
- **File size:** ~1.2 MB
- **Has text layer:** Yes

### form-3.pdf
- **Source URL:** https://cdn.sanity.io/files/4pare3i8/production/bd23ef224680293eaafa04ca5303569d6d4952d2.pdf
- **What it is:** SEMG Patient Portal Proxy Authentication Form
- **Description:** A form allowing authorized individuals to access a patient's portal at SEMG. Image-only scan (no extractable text). Related to records access but not an ROI form.
- **File size:** ~198 KB
- **Has text layer:** No (image-only)

### form-4.pdf
- **Source URL:** https://cdn.sanity.io/files/4pare3i8/production/3f40d79aa87a96396ffad4b157f7dcfbea285511.pdf
- **What it is:** SEMG Patient Registration Form (English)
- **Description:** Multi-page patient registration form that includes a "Privacy Practices Acknowledgement and HIPAA Authorization Form" section and a blanket consent to release medical records to specialists associated with the patient's care plan. Not a standalone ROI form, but contains HIPAA-related language and a general consent to release records for treatment purposes.
- **File size:** ~multi-page
- **Has text layer:** Yes

## Key Findings

1. **SEMG does not publish their own standalone ROI/Authorization for Release of Medical Records form.** They outsource release of information to MediCopy, a third-party HIM service.
2. The patient journey for requesting records is: mysemg.com → Resources → Medical Records → "Request Records" → redirected to medicopy.net → fill out MediCopy's generic authorization form.
3. MediCopy offers both an online (HelloSign) authorization form and downloadable PDF versions.
4. The registration form includes HIPAA acknowledgement and general consent to release records for treatment, but this is not a patient-initiated ROI form.

## Difficulties
- No difficulties with downloading. All PDFs were accessible without bot blocking.
- The main challenge was that SEMG doesn't have their own ROI form — it required following the redirect chain to MediCopy to find the actual authorization form patients would use.
