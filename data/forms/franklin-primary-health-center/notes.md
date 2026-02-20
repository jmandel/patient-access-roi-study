# Franklin Primary Health Center — ROI Form Retrieval Notes

## Organization
- **Name:** Franklin Primary Health Center
- **Location:** Mobile, AL
- **Type:** FQHC, independent, nonprofit
- **Website:** https://franklinprimary.org/
- **Patient Portal:** EPIC/MyChart via OCHIN (https://mychart.ochin.org/MyChartFPHC/Authentication/Login)

## Search Strategies Tried

1. **Web search for ROI form (multiple queries):**
   - `"Franklin Primary Health Center" "authorization" "release" "health information" filetype:pdf` — No results
   - `"Franklin Primary Health Center" "medical records" "release form" filetype:pdf` — No results
   - `site:franklinprimary.org authorization release medical records` — No results
   - `franklinprimary.org "release of information" OR "authorization" OR "medical records request" filetype:pdf` — Only found Notice of Privacy Practices
   - `"Franklin Primary Health Center" HIPAA authorization form consent release records` — No results

2. **Website navigation:**
   - Visited homepage, Patient Information page, Patient Rights & Responsibilities page
   - Examined "For Patients" menu — no medical records or ROI-specific page found
   - Checked all PDF links across all major pages (homepage, patient-information, health-care-services, patient-rights-responsibilities, new-patient-packet, school-based-health-center)

3. **Sitemap analysis:**
   - Retrieved and examined full WordPress sitemap — no medical records or release-of-information pages exist

4. **URL guessing:**
   - Tried 14 common ROI form filename patterns across 8 upload date directories — no matches found

5. **Wayback Machine:**
   - Checked complete archive of all PDFs ever hosted at `franklinprimary.org/wp-content/uploads/` — no ROI form has ever been published on this site

## Result

**No dedicated ROI / Authorization for Release of Medical Records form was found online.** Franklin Primary Health Center does not appear to publish a standalone ROI form on their website. The New Patient Packet contains a brief "Assignment and Release" clause authorizing release of information for insurance/billing purposes only, but this is not a general medical records release form.

## Downloaded Documents

### form-1.pdf
- **Source URL:** https://franklinprimary.org/wp-content/uploads/2025/08/New-Patient-Packet.pdf
- **Document type:** New Patient Registration Packet (multi-page)
- **Contents:** Patient information form, sliding fee scale self-declaration, privacy notice acknowledgement, patient questionnaire, patient satisfaction survey, patient bill of rights and responsibilities
- **ROI relevance:** Contains a brief "Assignment and Release" clause authorizing FPHC to "release all information necessary to secure payment of benefits" — limited to insurance billing, not a general ROI form

### form-2.pdf
- **Source URL:** https://franklinprimary.org/wp-content/uploads/2025/09/Notice-of-Privacy-Practices.pdf
- **Document type:** Notice of Privacy Practices (HIPAA NPP)
- **Contents:** Standard HIPAA Notice of Privacy Practices describing patient rights to access medical records, how health information is used/shared, and how to file complaints
- **ROI relevance:** Describes patients' right to "get a copy of your paper or electronic medical record" but does not include an actual authorization form

### form-3.pdf
- **Source URL:** https://franklinprimary.org/wp-content/uploads/2025/09/FPHC-Patient-Bill-of-Rights-and-Responsibilities.pdf
- **Document type:** Patient Bill of Rights and Responsibilities
- **Contents:** Lists patient rights (including right to authorize release of health information and to review/copy medical records) and patient responsibilities
- **ROI relevance:** References the right to authorize release but does not include an actual form

## Difficulties Encountered
- No dedicated ROI form exists on the website — the organization does not make one available for download
- The "For Patients" navigation menu could not be clicked/hovered in the browser (likely a JavaScript-dependent dropdown), but the full sitemap was examined instead
- The HMIS Privacy Notice PDF (Appendix_I_HMISPrivacyNotice.pdf) returned HTML instead of a valid PDF — appears to be a broken/removed link
- Patients would need to contact the center directly at (251) 432-4117 or visit in person to obtain an ROI form, or potentially use the EPIC/MyChart patient portal
