# Duly Health and Care — ROI Form Retrieval Notes

## Organization
- **Name**: Duly Health and Care
- **Location**: Downers Grove, IL
- **Website**: https://www.dulyhealthandcare.com
- **Type**: Physician practice, independent, for-profit, Midwest

## Search Strategies

1. **Web search for "Duly Health and Care authorization release health information filetype:pdf"** — No direct PDF links in results.
2. **Web search for "Duly Health and Care medical records release form filetype:pdf"** — Found multiple PDF URLs including Duly's own form hosted on Azure blob storage and MediCopy partner forms. This was the most productive search.
3. **Web search for "site:dulyhealthandcare.com authorization release medical records"** — Confirmed the medical records request page at dulyhealthandcare.com/services/medical-records-requests and surfaced additional form URLs.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://dmgwebprodstorage.blob.core.windows.net/dmgprodweb/files/@assetBasePath/files/Release-of-Information-Authorization-Updated-062023.pdf
- **File size**: 214,315 bytes
- **Description**: Duly Health and Care's own "Authorization for Release of Health Information" form, processed by ScanSTAT Technologies. Contains sections for patient info, information requested (radiology, cardiac, labs, progress notes, etc.), recipient, delivery method (fax, mail, MyChart, secure e-delivery, pick up), purpose of disclosure, and signature. References 45 CFR § 171.204(a)(2) regarding sensitive information segmentation. Updated June 2023. This is the primary ROI form.

### form-2.pdf
- **Source URL**: https://medicopy.net/sites/default/files/2025-01/Duly%20and%20MediCopy%20Authorization.pdf
- **File size**: 231,731 bytes
- **Description**: MediCopy "Authorization for the Release of Medical Records" — a multi-facility form that covers Duly Health and Care, The South Bend Clinic, and Quincy Medical Group. This is a partner/vendor form for releasing records through MediCopy's service.

### form-3.pdf
- **Source URL**: https://dmgwebprodstorage.blob.core.windows.net/dmgprodweb/files/%40assetBasePath/files/Duly-MediCopy-MRO-Intake-Form-Authorization.pdf
- **File size**: 81,363 bytes
- **Description**: MediCopy Disability/FMLA Intake Form and Authorization. Not a standard ROI form — this is specifically for disability/FMLA paperwork requests. Includes authorization for release of records needed for form completion.

### form-4.pdf
- **Source URL**: https://dmgwebprodstorage.blob.core.windows.net/dmgprodweb/files/%40assetBasePath/files/Duly-MRO-MediCopy-Authorization.pdf
- **File size**: 239,671 bytes
- **Description**: Another MediCopy "Authorization for the Release of Medical Records" form. Generic version with facility name fields (not pre-filled for specific organizations). Similar structure to form-2 but appears to be a more general template.

## Difficulties
- None significant. Forms were readily discoverable via web search. Duly hosts forms on Azure blob storage (dmgwebprodstorage.blob.core.windows.net) — the "dmg" in the URL reflects their former name "DuPage Medical Group."
- The organization uses MediCopy/MRO as their third-party release of information vendor, which means multiple authorization forms exist (Duly's own and MediCopy's).
- All downloads succeeded on first attempt with no bot blocking.

## Summary
Retrieval difficulty: **easy**. Four forms found and downloaded. The primary ROI form is form-1.pdf (Duly's own authorization). Forms 2 and 4 are MediCopy partner authorization forms, and form-3 is a specialized FMLA/disability form.
