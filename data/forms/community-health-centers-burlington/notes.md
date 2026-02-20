# Community Health Centers of Burlington — ROI Form Retrieval Notes

## Search Strategies

1. **Web search for authorization/release form PDFs** — searched for CHCB + "authorization" + "release" + "health information" + PDF. First search returned generic results without a direct link.
2. **Site-scoped search** — searched `site:chcb.org medical records release authorization form`. This immediately returned a direct link to the 2024 fillable consent form hosted on their WordPress site.
3. **Follow-up search for additional forms** — searched for other uploads on chcb.org and found a verbal-only consent form and a notice of privacy practices.

## What Worked

The site-scoped web search was the most effective strategy, immediately surfacing the direct PDF URL on the CHCB WordPress site (`/wp-content/uploads/2024/03/`). The forms page at https://www.chcb.org/forms/ did not render content (likely JavaScript-rendered), but direct PDF links were discoverable via search.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.chcb.org/wp-content/uploads/2024/03/Consent-to-Disclose-Health-Information-2024-FILLABLE.pdf
- **Document type**: ROI / Consent to Disclose Health Information form (2024, fillable)
- **Description**: "Authorization to Send Health Information" — a comprehensive consent form for releasing medical, mental health/psychiatric, and dental records. Includes fields for patient info, reason for release, record types, date ranges, sender/recipient info, expiration, and signature. References HIPAA. Revised November 2023. This is the primary ROI form for CHCB.

### form-2.pdf
- **Source URL**: https://www.chcb.org/wp-content/uploads/2024/03/Verbal-Consent-to-Disclose-Health-Information-FILLABLE.pdf
- **Document type**: Verbal-only consent form (2024, fillable)
- **Description**: "Authorization for Verbal Communication (Only)" — a companion form that authorizes CHCB to share health information verbally with a designated person, but explicitly states no paper records will be sent. Similar structure to form-1 but limited to verbal communication only.

## Difficulties

- The CHCB forms page (https://www.chcb.org/forms/) did not render useful content when fetched — likely requires JavaScript. However, this was not a barrier since the PDFs were directly discoverable via web search.
- No difficulties with download; both PDFs downloaded cleanly via curl and contain extractable text with fillable fields.

## Additional Forms Found (Not Downloaded)

- **Consent-to-Disclose-FINAL.pdf** (2019 version) — older version of the same consent form, superseded by the 2024 version
- **Notice-of-Privacy-Practices-2026_FINAL.pdf** — privacy practices notice, not an ROI form
