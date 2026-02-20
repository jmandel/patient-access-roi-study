# Canton-Potsdam Hospital — ROI Form Retrieval Notes

## Organization Details
- **Name**: Canton-Potsdam Hospital (CPH)
- **Location**: 50 Leroy St, Potsdam, NY 13676
- **Website**: https://www.rochesterregional.org (parent system)
- **Parent System**: St. Lawrence Health (SLH), which is part of Rochester Regional Health (RRH)
- **Type**: Community hospital, nonprofit, northeast

## Search Strategies

### 1. Web searches (multiple queries)
- `"Canton-Potsdam Hospital" "authorization" "release" "health information" medical records form`
- `Rochester Regional Health "release of information" "authorization" form filetype:pdf`
- `"St. Lawrence Health" medical records authorization release form`
- `site:rochesterregional.org "release of information" OR "medical records"`
- Various other keyword combinations — none returned a direct downloadable PDF form.

### 2. Rochester Regional Health website navigation
- Visited https://www.rochesterregional.org/patients-visitors/medical-records — the medical records page uses an online tool (Swellbox/Datavant) for record requests but **explicitly states**: "St. Lawrence Health is not currently available through this application, for information on requesting these records call (315) 769-4386."
- Visited https://www.rochesterregional.org/policies — Policies & Forms page lists various patient forms but no ROI/authorization form download.
- Visited https://www.rochesterregional.org/locations/hospitals/potsdam — Canton-Potsdam Hospital page has general info and MyCare portal link but no forms.

### 3. St. Lawrence Health System website (stlawrencehealthsystem.org)
- This domain now redirects to rochesterregional.org.
- Used the Wayback Machine CDX API to search all archived PDFs from the old SLH site.
- Found the archived "Patient Forms and Notices" page — it listed patient rights documents but NOT a general ROI form.
- Found two relevant authorization forms in the archived files:
  - A COVID-specific pre-filled OCA-960 form (in the COVID toolkit section)
  - A blank OCA-960 form (in the patients-and-visitors section)

### 4. What worked
- The **Wayback Machine CDX API** was the most productive tool, allowing systematic discovery of all PDFs ever hosted on the old stlawrencehealthsystem.org domain. This revealed the OCA-960 forms that were the only authorization forms published by the organization.

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://web.archive.org/web/2022/https://www.stlawrencehealthsystem.org/-/media/slh/files/covid-toolkit/authorization-for-release-of-health-information--covid19-as-of-81820.pdf`
- **Original URL**: `https://www.stlawrencehealthsystem.org/-/media/slh/files/covid-toolkit/authorization-for-release-of-health-information--covid19-as-of-81820.pdf`
- **What it is**: OCA Official Form No. 960 — "Authorization for Release of Health Information Pursuant to HIPAA" — pre-filled with "COVID-19 Test Result" in the records section. This is a scanned (image-only) copy of the NY State standard form, used specifically for COVID test result release authorization.
- **Pages**: 1
- **File size**: 113,357 bytes
- **Technical notes**: Image-only scan from RICOH MP C4504 copier, no text layer, no fillable fields, landscape orientation rotated.

### form-2.pdf
- **Source URL**: `https://web.archive.org/web/2022/https://www.stlawrencehealthsystem.org/-/media/slh/patients-and-visitors/oca-960-form.pdf`
- **Original URL**: `https://www.stlawrencehealthsystem.org/-/media/slh/patients-and-visitors/oca-960-form.pdf`
- **What it is**: Blank OCA Official Form No. 960 — "Authorization for Release of Health Information Pursuant to HIPAA." This is the general-purpose NY State HIPAA authorization form. Page 2 contains instructions for use. This is the general ROI form that St. Lawrence Health published for patients.
- **Pages**: 2
- **File size**: 127,880 bytes
- **Technical notes**: Has text layer (though garbled in pdftotext due to font encoding issues), no fillable fields. Not a scan — digitally produced from PScript5.dll/Acrobat Distiller.

### form-3.pdf
- **Source URL**: `https://web.archive.org/web/2024/https://www.stlawrencehealthsystem.org/-/media/slh/patients-and-visitors/slhs-notice-of-privacy-practices-11921.pdf`
- **Original URL**: `https://www.stlawrencehealthsystem.org/-/media/slh/patients-and-visitors/slhs-notice-of-privacy-practices-11921.pdf`
- **What it is**: Notice of Privacy Practices for St. Lawrence Health System, effective July 11, 2016. Explains how medical information can be used and disclosed, and how patients can access their records.
- **Pages**: Multiple
- **Technical notes**: Has text layer, clean text extraction.

## Difficulties Encountered

1. **Website transition**: St. Lawrence Health's website (stlawrencehealthsystem.org) has been absorbed into Rochester Regional Health's main site (rochesterregional.org). The old domain now redirects. This means previously published forms are no longer directly accessible.

2. **No general ROI form published online**: Neither the current Rochester Regional Health site nor the archived St. Lawrence Health site published a custom, organization-specific ROI/authorization form. The only authorization form available was the generic NY State OCA-960 form.

3. **Online records tool excludes St. Lawrence Health**: Rochester Regional's Swellbox/Datavant online records request tool explicitly excludes St. Lawrence Health facilities, directing patients to call (315) 769-4386 instead.

4. **No Wayback Machine capture of medical records page**: The old SLH website apparently never had a dedicated "medical records" page — the CDX API returned zero results for any URL containing "medical" or "record" under the stlawrencehealthsystem.org domain.

5. **Image-only scan**: The COVID authorization form (form-1) is a scanned copy with no text layer, making it impossible to fill digitally.

## Summary

Canton-Potsdam Hospital / St. Lawrence Health does not appear to have ever published a custom ROI form online. They relied on the standard NY State OCA-960 form, which was available on their old website. The current process directs patients to call for medical records requests. The organization is in a transitional state between the old St. Lawrence Health System infrastructure and the Rochester Regional Health platform.
