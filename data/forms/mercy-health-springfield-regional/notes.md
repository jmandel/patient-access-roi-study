# Mercy Health - Springfield Regional Medical Center: ROI Form Retrieval Notes

## Organization
- **Name**: Mercy Health - Springfield Regional Medical Center
- **Location**: Springfield, OH
- **Website**: https://www.mercy.com/locations/hospitals/springfield/mercy-health-springfield-regional-medical-center
- **Parent System**: Bon Secours Mercy Health (mercy.com)

## Search Strategies

1. **Web search** for `Mercy Health Springfield Regional Medical Center "authorization" "release" "health information" form PDF` — found the main medical records request page and a direct PDF link from mercy.net (which turned out to be a different Mercy system).
2. **Web search** for `Mercy Health Springfield Ohio "medical records" "release form" PDF` — confirmed the mercy.com medical records page and found additional form URLs.
3. **Web search** for `site:mercy.com "authorization" "release of information" filetype:pdf` — found the Youngstown-specific authorization form.
4. **Navigated** to https://www.mercy.com/patient-resources/medical-record-requests — the central medical records request page. Found the system-wide authorization form link (English and Spanish) and Springfield-specific contact info.
5. **URL pattern probing** — tested location-specific URLs at `mercy.com/-/media/mercy/patient-resources/medical-records-requests/{location}.ashx` and discovered a Springfield-specific authorization form exists alongside Youngstown, Toledo, Cincinnati, and Lima versions.

## Key Findings

The medical records request page (https://www.mercy.com/patient-resources/medical-record-requests) offers three options:
1. **MyChart** — request records through the patient portal
2. **eRequest** — online request via Ciox/Datavant partner (https://www.swellbox.com/mercy-health-wizard.html) — covers Springfield
3. **Paper form** — download and submit authorization form by mail, fax, or email

Springfield-specific contact info:
- Email: MercyROI@datavant.com
- Phone: 844-835-1238
- Fax: 513-599-4503

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.mercy.net/content/dam/mercy/en/pdf/Mercy-Patients-Request-to-Access-Protected-Health-Information-Form_920.pdf
- **Document type**: Patient's Request to Access Protected Health Information
- **Pages**: 2
- **Text layer**: Yes (full text extractable)
- **Notes**: This form is from **mercy.net** (Mercy, the Missouri-based health system), NOT from mercy.com (Bon Secours Mercy Health, the Ohio system that operates Springfield Regional). The web search returned this as a result, but it belongs to a different organization. Kept per study protocol. This is a patient-access-specific form with good format options (paper, PDF email, CD, MyMercy Portal, secure/unsecure email, fax, mail, personal pick-up).

### form-2.pdf
- **Source URL**: https://www.mercy.com/-/media/mercy/patient-resources/medical-records-requests/youngstown.ashx
- **Document type**: Authorization for Release of Protected Health Information (Youngstown-specific)
- **Pages**: 1
- **Text layer**: Yes (full text extractable)
- **Notes**: From the correct Mercy Health (mercy.com) system, but this version is specific to the Youngstown region (lists St. Elizabeth Boardman Hospital, St. Elizabeth Youngstown Hospital, St. Joseph Warren Hospital). Same general format as the Springfield version but with different facility names. Form number MHP 0782 Rev 1/19.

### form-3.pdf
- **Source URL**: https://www.mercy.com/-/media/mercy/patient-resources/medical-records-requests/mh-authorization-22024.ashx
- **Document type**: Authorization for Release of Protected Health Information (system-wide, 2024 version)
- **Pages**: 1
- **Text layer**: No (image-only scan, grayscale 2550x3300 at 300 DPI)
- **Notes**: This is the form currently linked on the medical records request page as the system-wide "Medical Records Request Forms" (English version). It is an image-only scan with virtually no extractable text. Printed date shown: 2024-01-17. Despite being the currently-linked version on the website, it is less accessible than the location-specific text-based versions.

### form-4.pdf
- **Source URL**: https://www.mercy.com/-/media/mercy/patient-resources/medical-records-requests/springfield.ashx
- **Document type**: Authorization for Release of Protected Health Information (Springfield-specific)
- **Pages**: 1
- **Text layer**: Yes (full text extractable)
- **Notes**: **This is the most relevant form.** Springfield-specific version that explicitly lists "Springfield Regional Medical Center" and "Urbana Hospital" as facility options. Form number MHP 0785 Rev 1/19. Contains checkboxes for record types, options for self or third-party disclosure, format choices (paper or electronic PDF/CD), and delivery methods (mail, fax, MyChart, secure email). References 45 CFR § 164.524. Authorization expires one year from date (Ohio). Not directly linked on the website (the system-wide image-only version is linked instead), but accessible via predictable URL pattern.

## Difficulties Encountered

1. **Two "Mercy" systems confusion**: Web searches conflated mercy.com (Bon Secours Mercy Health, Ohio) with mercy.net (Mercy, Missouri). The initial PDF result was from the wrong system.
2. **Image-only scan**: The system-wide form currently linked on the website (form-3.pdf) is an image-only scan with no extractable text, making it less accessible than the location-specific versions.
3. **Hidden location-specific forms**: The Springfield-specific form (form-4.pdf) is not directly linked on the medical records page. Only the system-wide image-only version is linked. The location-specific versions are discoverable only by guessing URL patterns.
4. **Form age**: The text-based Springfield form (MHP 0785) was revised 1/19 (January 2019), while the image-only system-wide version appears to be from 2024 — suggesting they may have scanned a newer version but didn't provide a text-based PDF.
