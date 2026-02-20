# SSM Health DePaul Hospital - St. Louis: ROI Form Retrieval Notes

## Organization
- **Name:** SSM Health DePaul Hospital - St. Louis
- **Location:** Bridgeton, MO
- **Website:** https://www.ssmhealth.com/locations/st-louis/depaul-hospital-st-louis
- **Parent System:** SSM Health (major nonprofit health system)

## Search Strategies

### 1. Web search for SSM Health authorization/release forms
- Searched for `SSM Health medical records release form authorization PDF`
- Found direct links to system-wide SSM Health ROI forms, including a general form and a St. Louis metro-specific form

### 2. Navigating SSM Health medical records page
- Visited https://www.ssmhealth.com/resources/get-my-medical-records
- Page has location-dependent content; mentions that St. Louis metro area facilities have specific forms
- Also offers electronic request via MRO Express portal (mroexpress.mrocorp.com) for Missouri

### 3. DePaul Hospital location page
- Visited https://www.ssmhealth.com/locations/st-louis/depaul-hospital-st-louis
- The "Get Medical Records" link points to the same system-wide medical records page
- No DePaul-specific ROI form exists; the hospital uses SSM Health's system-wide forms

### 4. Direct URL guessing for DePaul-specific form
- Tried URL pattern `…/st-louis-metro/depaul-hospital-medical-records-request-form.pdf` — returned 302 to error page
- Confirmed no facility-specific form exists

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.ssmhealth.com/getmedia/626ff70a-39ec-49a8-8f3f-903d077ae27d/medical-record-release-form.pdf
- **File size:** 86,620 bytes (1 page)
- **Document type:** ROI/Authorization form
- **Title:** SSMHC "Request for Access to/Authorization for Use and Disclosure of Protected Health Information"
- **Notes:** Older version of the SSM Health system-wide authorization form. Uses "SSMHC" (SSM Health Care) branding. Single page, flat PDF with text layer. Includes checkboxes for type of access (inspection, hard copy, electronic copy), specific record types, purpose of disclosure, and acknowledgement section with HIPAA-related language. Has fields for both disclosure-from and disclosure-to parties.

### form-2.pdf
- **Source URL:** https://www.ssmhealth.com/SSMHealth/media/Documents/patients-and-visitors/get-medical-records/st-louis-metro/medical-records-request-form-stl.pdf
- **File size:** 293,571 bytes
- **Document type:** ROI/Authorization form (St. Louis metro area version)
- **Title:** SSM Health "Request for Access to/Authorization for Use and Disclosure of Protected Health Information"
- **Notes:** Updated version using current "SSM Health" branding, specifically for St. Louis metro area facilities including DePaul Hospital. Similar content to form-1 but with some additions (e.g., psychotherapy notes option, email delivery option). This is the form DePaul Hospital patients would be directed to use. Includes text layer; appears to have form fields based on larger file size.

## Difficulties
- The SSM Health medical records page uses location-based dynamic content loading, but the location selector's autocomplete didn't populate options when tested via browser
- No DePaul-specific form exists; the hospital relies on SSM Health's system-wide forms
- The earlier web_fetch of the raw HTML showed that facility-specific tabs may exist for St. Louis metro area, but they load the same STL metro form

## Summary
SSM Health uses system-wide ROI forms rather than facility-specific ones. For DePaul Hospital in the St. Louis metro area, form-2.pdf (the STL metro version) is the applicable form. Form-1.pdf is an older/general version of the same authorization form. Both are legitimate ROI/authorization forms with text layers.
