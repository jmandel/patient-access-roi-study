# Millinocket Regional Hospital — ROI Form Retrieval Notes

## Organization
- **Name**: Millinocket Regional Hospital
- **Website**: https://www.mrhme.org
- **Location**: Millinocket, ME
- **Type**: Critical access hospital, independent, nonprofit

## Search Strategies

1. **Web search: `"Millinocket Regional Hospital" "authorization" "release" "health information" filetype:pdf`** — No direct results found.
2. **Web search: `"Millinocket Regional Hospital" "medical records" "release form" filetype:pdf`** — No direct results found.
3. **Web search: `site:mrhme.org authorization release medical records`** — **Success.** Found a direct link to the PDF form at `https://www.mrhme.org/wp-content/uploads/2014/06/Release-of-Information-for-Medical-Records.pdf`. The search also surfaced the Patient Resources page and Privacy & Security page.

The third search strategy (site-scoped search) was most effective.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.mrhme.org/wp-content/uploads/2014/06/Release-of-Information-for-Medical-Records.pdf
- **File size**: 31,717 bytes
- **Pages**: 2
- **Has text layer**: Yes (3,739 characters extracted via pdftotext)
- **Initial impression**: This is the hospital's official **Authorization to Release Health Care Information** form. It is a general-purpose ROI form (not patient-access-specific). The form includes:
  - Patient identification fields (name, DOB)
  - Sender and recipient institution fields
  - Checklist of record types (a–r) including H&P, lab results, medication list, progress notes, treatment plans, discharge summary, etc.
  - Reason for release (continuing care or other)
  - Special consent sections for drug/alcohol abuse, HIV/AIDS, and psychiatric records
  - Signature lines for patient, representative, and witness
  - Expiration date field
  - Note about minors (ages 14–17) and representative capacity
- **Fillable fields**: Appears to be a flat PDF (no interactive form fields); designed for print and manual completion.

## Difficulties Encountered
- The first two search strategies (non-site-scoped) did not return the form directly, but the site-scoped search found it immediately.
- The form URL contains a 2014 date in the path (`/2014/06/`), suggesting it has been hosted on the site for a long time and may not have been updated recently.
- No difficulties with downloading — curl worked on the first attempt with no bot blocking.
