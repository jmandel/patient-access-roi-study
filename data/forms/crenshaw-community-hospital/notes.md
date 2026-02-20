# Crenshaw Community Hospital — ROI Form Retrieval Notes

## Organization Info
- **Name**: Crenshaw Community Hospital
- **Location**: Luverne, AL 36049
- **Website**: https://crenshawcommunityhospital.com
- **Type**: Independent community hospital (for-profit), Critical Access facility, 25 licensed beds (49 staffed beds per CMS data)
- **Owner/Management**: Frey Medical Management (acquired early 2026)

## Search Strategies Tried

### 1. Web Searches
- `"Crenshaw Community Hospital" "authorization" "release" "health information" filetype:pdf` — No results
- `"Crenshaw Community Hospital" "medical records" "release form" filetype:pdf` — No results
- `site:crenshawcommunityhospital.com medical records release authorization` — No results
- `"crenshawcommunityhospital.com" filetype:pdf` — Found only regulatory/legal documents, not ROI forms
- `Crenshaw Community Hospital Luverne AL HIPAA authorization release information form` — No form found
- `"Crenshaw Community Hospital" "release of information" OR "medical records" OR "authorization" form` — No form found
- `Frey Medical Management Alabama hospital medical records release form` — No form found

### 2. Website Navigation
- Visited homepage — no "Medical Records" or "Patient Forms" link in navigation
- Checked **Patient Portal** page — only MyCareCorner login link, no downloadable forms
- Checked **About** page — found "VIEW DISCLOSURES" link, but the disclosures page returns 404
- Navigation only has: About, Our Services, Careers, Contact, Patient Portal, Data Breach Incident, Price Transparency

### 3. WordPress REST API Enumeration
- **Pages API** (`/wp-json/wp/v2/pages`): Listed 25 pages — none related to medical records, forms, or ROI
- **Media API** (`/wp-json/wp/v2/media`): Listed ~100+ media items across 2 pages
  - Only 4 PDFs found, none are ROI forms:
    - Visitation Policy (3 versions)
    - 2022 Community Health Needs Assessment
  - All other media items are images (.jpg, .png)

### 4. Sitemap Check
- `sitemap.xml` and `page-sitemap.xml` — only 24 pages listed, no forms pages

### 5. Parent Company Check
- Frey Medical Management (freymm.com) is a simple marketing site with no patient-facing forms
- No centralized form portal for managed hospitals

### 6. MedicalRecords.com
- Third-party records request service only — no downloadable hospital-specific form

## Result

**No ROI / Authorization for Medical Records form was found online.**

Crenshaw Community Hospital does not appear to publish any patient forms on their website. The site is minimal, focused on basic information about services, providers, and contact details. Patients would need to call (334) 335-3374 or visit in person to obtain a medical records release form.

## Difficulties Encountered
- Very small website with limited pages (25 total)
- No "Patient Forms" or "Medical Records" section exists
- Disclosures page (linked from About page) returns 404
- Recent ownership change (Frey Medical Management, Jan 2026) may mean the website is in transition
- Hospital experienced a data breach in 2025, which may have affected their online presence

## Downloaded PDFs
None — no ROI or authorization forms were found to download.
