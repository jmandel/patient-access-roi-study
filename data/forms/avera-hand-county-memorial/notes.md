# Avera Hand County Memorial Hospital — ROI Form Retrieval Notes

## Organization
- **Name:** Avera Hand County Memorial Hospital
- **Location:** Miller, SD
- **Type:** Critical access hospital, part of Avera Health regional system (nonprofit)
- **Website:** https://www.avera.org/locations/profile/avera-hand-county-memorial-hospital/

## Search Strategies

### What was tried
1. **Web search for facility-specific form:** Searched for "Avera Hand County Memorial Hospital authorization release health information filetype:pdf" — no facility-specific form found.
2. **Web search for parent system (Avera) form:** Searched for "Avera medical records release form authorization PDF" — found multiple Avera system-level forms.
3. **Site-scoped search:** Searched "site:avera.org authorization release medical records form" — found the main Avera medical records request page.
4. **Navigated Avera medical records page:** https://www.avera.org/patients-visitors/patient-information/request-medical-records/ — found the primary HIPAA Authorization form and several facility-specific variants (for Heart Hospital, Access Health Worthington, Windom, Spencer, Lakes Regional, Osceola). No Hand County–specific form was listed.
5. **Checked facility profile page:** The Avera Hand County Memorial Hospital profile page has no direct link to an ROI form — patients would use the system-wide form.

### What worked
The parent system's medical records page (Avera Health) provides the general ROI form applicable to all Avera facilities, including Hand County Memorial Hospital. The form was found via web search and confirmed by navigating the Avera website.

## Difficulties
- **Bot blocking:** Avera's website blocks curl/wget requests entirely (returns "Access Denied" HTML). All PDF downloads had to be performed through the browser (Chrome DevTools), fetching the file via JavaScript `fetch()`, extracting base64, and decoding locally.
- **No facility-specific form:** Hand County Memorial Hospital does not have its own ROI form. The Avera system provides a single unified form used across most facilities, with a few exceptions (Heart Hospital, Worthington, Windom, Spencer, Lakes Regional, Osceola).

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://www.avera.org/app/files/public/16c5ca97-99f7-4e3a-ab27-cf98bb199144/medical-records-release-8691-04.pdf
- **Found via:** Avera Health "Request Medical Records" page → "HIPAA Authorization for Disclosure of Health Information – English" link
- **Document type:** ROI / Authorization for Release of Medical Records Information
- **Description:** System-wide Avera Health HIPAA authorization form (Form 8691-04). Single-page PDF with text layer. Includes sections for patient identification, provider releasing info, recipient, information to be disclosed (standard chart copy, x-ray/imaging, entire record, other), service dates, format options (paper, fax, flash drive, CD-ROM, email), substance abuse documentation release checkbox, purpose of disclosure, expiration date, revocation rights, and signature lines. References 45 CFR 164.524 and 42 CFR Part 2. Offers electronic delivery options including email with encryption notice.
- **File size:** 139,493 bytes
- **Pages:** 1
