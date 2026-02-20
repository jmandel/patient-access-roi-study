# UW Medical Center — ROI Form Retrieval Notes

## Organization
- **Name:** UW Medical Center
- **Parent System:** UW Medicine (University of Washington)
- **Website:** https://www.uwmedicine.org
- **Location:** Seattle, WA

## Search Strategies

1. **Web search** for `UW Medical Center Seattle "authorization" "release" "health information" form PDF` — immediately found the form hosted on the UW compliance site (`depts.washington.edu/comply/docs/103f7_AuthRq.pdf`) and two alternate URLs on `uwmedicine.org`.

2. **Web search** for `UW Medicine "medical records" "release form" authorization PDF` — confirmed the same form and linked to the patient forms page.

3. **Web search** for `site:uwmedicine.org authorization release medical records form` — found a 2022 accessible version URL and the patient forms page.

4. **Navigated** the UW Medicine website: Patient & Visitor Resources → Patient Forms → "Medical records and authorization forms" expandable section. This confirmed the primary ROI form and revealed several other authorization/privacy forms.

## Download Attempts

- **URL 1 (uwmedicine.org 2022 version):** `https://www.uwmedicine.org/sites/stevie/files/2022-04/UH0626-Accessible%20%281%29.pdf` — **BLOCKED** (returned "Access Denied" HTML). Bot protection on uwmedicine.org's file hosting.
- **URL 2 (UW compliance site):** `https://depts.washington.edu/comply/docs/103f7_AuthRq.pdf` — **SUCCESS** (321,683 bytes, valid PDF).
- **URL 3 (uwmedicine.org 2019 version):** `https://www.uwmedicine.org/sites/stevie/files/2019-07/Patient%20Authorization%20for%20Protected%20Health%20Information%20103f7_AuthRq%20PDFA.pdf` — **BLOCKED** (same "Access Denied").

The patient forms page on uwmedicine.org links to `depts.washington.edu/comply/docs/103f7_AuthRq.pdf`, so the compliance site URL is the canonical/current location.

## Difficulties

- The uwmedicine.org CDN (`/sites/stevie/files/...`) blocks curl requests even with a realistic browser User-Agent string, returning a 403 "Access Denied" page. However, the same form is available without restriction from the UW compliance department site (`depts.washington.edu`), and the patient forms page links there directly.

## Downloaded Files

### form-1.pdf
- **Source URL:** https://depts.washington.edu/comply/docs/103f7_AuthRq.pdf
- **File size:** 321,683 bytes
- **Pages:** Multi-page (3 pages based on content — patient info, authorization details, and instructions)
- **Document title:** U0626 (internal form number)
- **Created:** December 2025
- **Description:** "Patient Authorization to Disclose, Release, and/or Obtain Protected Health Information" — This is UW Medicine's primary ROI form. It covers all UW Medicine facilities (Harborview, UW Medical Center Montlake & Northwest, UW Medicine Primary Care, UW Physicians). Includes fields for patient info, purpose of request, facility selection, recipient details, record types (medical records, billing, immunizations, radiology, labs, clinic notes), format preferences (paper, CD/DVD, MyChart, email), sensitive information opt-in (HIV, mental health, substance abuse, sexual assault), and expiration date. The form notes that recent records are available via MyChart for immediate download.

## Other Forms on Patient Forms Page (not downloaded)
The "Medical records and authorization forms" section also lists:
- Notice of Privacy Practices Acknowledgment
- Patient Authorization for Publicity
- Patient Authorization for Publication
- Patient Authorization for Photography/Video
- Request for Additional Privacy Protection
- Request for Correction or Amendment of Medical Record
- Request to Restrict Disclosure to Health Plans (self-pay)

These are related but not ROI/records release forms.
