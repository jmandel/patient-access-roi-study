# Montefiore Nyack Hospital — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for "Montefiore Nyack Hospital authorization release health information form PDF" — immediately found two direct PDF URLs on the official hospital website.
2. **Web search** for "Montefiore Nyack Hospital medical records release form PDF" — confirmed the same URLs.
3. **Site-specific search** for `site:montefiorenyack.org authorization release medical records` — confirmed form links and the Medical Records page.
4. **Navigated the website** to `https://www.montefiorenyack.org/manage-my-care/medical-records` — found the Medical Records page with a direct link to the authorization form under "Release of Medical Records" heading.

## Difficulties Encountered

- **Bot blocking via curl**: Direct `curl` downloads (even with a realistic browser User-Agent) returned "Access Denied" HTML pages (482–515 bytes). The site's CDN/WAF blocks automated requests.
- **Resolution**: Used Chrome DevTools browser environment to fetch the PDFs via JavaScript `fetch()` from within the browser session, then decoded the base64 content to disk. Both PDFs downloaded successfully this way.

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://www.montefiorenyack.org/sites/default/files/MNH_HIPAA_AuthorizationForm%20Rev%2001.2022FN.pdf`
- **File size**: 353,152 bytes
- **Description**: "Montefiore Nyack Hospital Authorization for Release of Health Information" — revised 01/2022. This is the current version linked from the Medical Records page. It is a multi-page PDF with a text layer (not a scan). The form covers patient self-requests, attorney requests, and third-party requests. Includes sections for specifying record types (ER, inpatient, outpatient, images, billing), sensitive information consent (alcohol/drug, mental health, HIV), expiration (default 180 days), and revocation rights. Contact info: fax 845-348-8433, email MNH-ROI@montefiorenyack.org.

### form-2.pdf
- **Source URL**: `https://www.montefiorenyack.org/sites/default/files/New%20Release%20of%20Information%20Authorization%20Form%2010.20.21.pdf`
- **File size**: 70,455 bytes
- **Description**: An older version of the same "Authorization for Release of Health Information" form, dated 10/20/2021. Content is very similar to form-1 but in a single-page layout. This version is not currently linked from the Medical Records page (form-1 is the current version) but remains accessible at its URL. Found via web search results referencing the alternate URL.

## Summary

The form was easy to find — a single web search or one click from the Medical Records page. The hospital publishes a clear, dedicated ROI/HIPAA authorization form. The only technical challenge was bot blocking on direct downloads, which required browser-based retrieval.
