# UF Health Shands Hospital — ROI Form Retrieval Notes

## Organization
- **Name:** UF Health Shands Hospital
- **Website:** https://ufhealth.org
- **Location:** Gainesville, FL
- **Type:** Teaching hospital, major system, nonprofit

## Search Strategies

1. **Web search** for `"UF Health Shands Hospital" "authorization" "release" "health information" filetype:pdf` — returned general pointers to ufhealth.org but no direct PDF links.
2. **Web search** for `"UF Health Shands Hospital" "medical records" "release form" filetype:pdf` — found multiple direct PDF URLs including forms hosted at ufhealth.org.
3. **Web search** for `site:ufhealth.org authorization release medical records form` — confirmed the primary form URL and found additional variants.
4. **Fetched the medical records page** at https://ufhealth.org/medical-records — this is the canonical patient-facing page. It links directly to the primary form (form-2.pdf) and describes submission methods (mail, fax, in-person pickup).

## Downloaded Forms

### form-1.pdf
- **Source URL:** https://ufhealth.org/sites/default/files/media/Locations/forms/Medical-Record-Release-Form.pdf
- **File size:** 612,570 bytes
- **Description:** Comprehensive "Record Request: Authorization to Use and Disclose Protected Health Information (PHI) Maintained by UF Health" form. Multi-section layout with identity verification fields (driver license, personally known, etc.), representative authorization section, and facility selection checkboxes for UF Health Shands Hospital and Shands Rehab Hospital. Appears to be a more detailed/newer version of the ROI form.

### form-2.pdf
- **Source URL:** https://ufhealth.org/assets/media/forms/46283_F.pdf
- **File size:** 94,652 bytes
- **Description:** "Record Request: Authorization to Use and Disclose Protected Health Information (PHI) Maintained by UF Health." This is the **primary form linked from the official medical records page** (ufhealth.org/medical-records). Simpler layout than form-1; includes from/to fields, facility checkboxes, and instructions to mail or fax completed forms to UF Health HIM Dept – ROI.

### form-3.pdf
- **Source URL:** https://ufhealth.org/sites/default/files/media/PDF/ROI.pdf
- **File size:** 88,083 bytes
- **Description:** "Authorization for Use or Disclosure of Protected Health Information (PHI) Maintained by UF Health." Appears to be an older version of the ROI form. Lists more specific facility checkboxes (Shands Hospital, Rehab Hospital, Psychiatric Hospital, HomeCare, Radiology, UF clinics). Includes checkboxes for record types (Mental Health, History and Physical, Operative Reports, Discharge Summary, ER Record). More granular in specifying what PHI may be shared.

### form-4.pdf
- **Source URL:** https://ufhealth.org/sites/default/files/media/BASIC%20Providers%20RELEASE.pdf
- **File size:** 181,454 bytes
- **Description:** "Record Request: Authorization to Use and Disclose Protected Health Information (PHI) Maintained by UF Health." A specialized variant with pre-filled provider information for "All our Providers & UF C.A.R.D" (Center for Autism and Neurodevelopment). Same general structure as form-2 but tailored to a specific clinic/program.

## Difficulties Encountered
- **None significant.** The forms were straightforward to find via web search. The medical records page (ufhealth.org/medical-records) is well-organized and clearly links to the primary form.
- Multiple versions of the form exist at different URLs on the same site, likely reflecting different revisions or location-specific variants.
- All PDFs downloaded successfully with curl (no bot blocking or JavaScript requirements).
- All forms have text layers (not image-only scans).

## Summary
UF Health Shands makes its ROI forms readily available online. The primary form (form-2.pdf) is linked directly from the medical records page. Multiple versions exist on the site — an older/more detailed version (form-3.pdf), a comprehensive version with identity verification (form-1.pdf), and a clinic-specific variant (form-4.pdf). Retrieval difficulty: **easy**.
