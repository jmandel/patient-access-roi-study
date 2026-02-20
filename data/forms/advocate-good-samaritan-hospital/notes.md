# Advocate Good Samaritan Hospital — ROI Form Retrieval Notes

## Search Strategies

1. **Web search** for "Advocate Good Samaritan Hospital authorization release health information form PDF" — returned direct PDF URLs from Advocate Health's website, including EAP forms and the AMG (Advocate Medical Group) authorization form.
2. **Web search** for "Advocate Good Samaritan Hospital medical records release form PDF Downers Grove" — confirmed the medical records page URL at advocatehealth.com/contact-us/medical-records.
3. **Web search** for "site:advocatehealth.com authorization release medical records form" — found additional form variants including AMG-specific and EAP forms.
4. **Navigated** to https://www.advocatehealth.com/contact-us/medical-records via browser — this was the most productive source, revealing the official patient-facing forms with direct download links.

## What Worked Best

Navigating the Advocate Health medical records page directly was the most effective strategy. The page clearly lists two primary forms (Patient Request form and Authorization to Release form) with PDF download links, plus a Spanish version and instructions document. The web searches also surfaced direct PDF links but some were for EAP (Employee Assistance Program) forms rather than the hospital's patient medical records forms.

## Difficulties Encountered

- The organization is part of a large health system (Advocate Health / Advocate Aurora Health), so forms are centralized at the system level rather than hospital-specific.
- Multiple form variants exist across different parts of the organization (EAP vs. hospital vs. AMG), which could confuse patients.
- No difficulties with bot blocking or JavaScript rendering — all PDFs downloaded successfully via curl.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.advocatehealth.com/-/media/Project/Health-System-Enterprise/AdvocateHealthOrg/advocatehealthorg/documents/employer-solutions/release-of-information-general.PDF
- **Size**: 71,615 bytes
- **Description**: Aurora Employee Assistance Program (EAP) "General Release of Information" form. Authorizes release of mental health/substance abuse information from the EAP program. Not a hospital medical records ROI form.

### form-2.pdf
- **Source URL**: https://www.advocatehealth.com/-/media/Project/Health-System-Enterprise/AdvocateHealthCom/amg/documents/98-5050-en.pdf
- **Size**: 71,737 bytes
- **Description**: "Authorization for Release of Patient Health Information" — Advocate Medical Group (AMG) version. General third-party release form with checkboxes for record types (Face Sheet, H&P, Lab, Operative Report, etc.). Includes opt-out checkboxes for sensitive info (substance abuse, HIV, psychiatric). Appears to be an older/AMG-specific version.

### form-3.pdf
- **Source URL**: https://www.advocatehealth.org/-/media/Project/Health-System-Enterprise/AdvocateHealthOrg/advocatehealthorg/documents/employer-solutions/290-release-of-information-for-supervisory-or-administrative-referrals.PDF
- **Size**: 184,352 bytes
- **Description**: Advocate Aurora EAP "General Release of Information" — updated version of form-1 with Advocate Aurora branding. For supervisory/administrative referrals. Includes attendance and compliance reporting checkboxes. Not a hospital medical records ROI form.

### form-4.pdf ⭐ (Primary patient access form)
- **Source URL**: https://www.advocatehealth.com/-/media/Project/Health-System-Enterprise/AdvocateHealthCom/advocatehealth/documents/contact-us/medical-records/patient-request-for-health-information-s88411en.PDF
- **Size**: 164,638 bytes
- **Description**: "Patient Request for Health Information" — the primary form for patients requesting their own records. Has detailed checkboxes for Medical Records (Discharge Summary, H&P, Consultation Reports, Immunizations, Office Notes, etc.), Imaging, and Billing sections. Mentions the LiveWell patient portal for online access. This is the patient-access-specific form.

### form-5.pdf ⭐ (Primary authorization/disclosure form)
- **Source URL**: https://www.advocatehealth.com/-/media/Project/Health-System-Enterprise/AdvocateHealthCom/advocatehealth/documents/contact-us/medical-records/authorization-to-release-protected-health-information-wi-il-s300503.PDF
- **Size**: 196,289 bytes
- **Description**: "Authorization to Release Protected Health Information" — the general authorization for disclosing PHI to third parties. Covers medical records, imaging, and billing. Includes checkboxes for mutual exchange (behavioral health), record types, and purposes. This is the standard ROI/authorization form used across Advocate Health hospitals including Good Samaritan.

### form-6.pdf
- **Source URL**: https://www.advocatehealth.com/-/media/Project/Health-System-Enterprise/AdvocateHealthCom/advocatehealth/documents/contact-us/medical-records/authorization-for-disclosure-of-health-information-s23623-sp.PDF
- **Size**: 354,431 bytes
- **Description**: Spanish-language version of the Authorization for Disclosure of Protected Health Information form. "Autorización para revelar información médica protegida."

### form-7.pdf
- **Source URL**: https://www.advocatehealth.com/-/media/Project/Health-System-Enterprise/AdvocateHealthCom/advocatehealth/documents/contact-us/medical-records/authorization-for-release-of-information-form-instructions.PDF
- **Size**: 130,370 bytes
- **Description**: "Instructions for Completing the Authorization for Release of Information Form" — step-by-step guide explaining how to fill out the authorization form. References the LiveWell Patient Portal as an alternative for online requests.

## Summary

Advocate Good Samaritan Hospital uses system-wide forms from Advocate Health. The key forms are:
- **form-4.pdf**: Patient-specific records request form (for patients requesting their own records)
- **form-5.pdf**: General authorization to release PHI (for third-party disclosures)

Both are linked prominently from the medical records page. The hospital also has a Spanish-language version (form-6) and an instructions document (form-7). The EAP forms (form-1, form-3) and AMG form (form-2) are separate and serve different organizational functions.
