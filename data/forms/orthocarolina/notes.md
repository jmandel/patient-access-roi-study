# OrthoCarolina — ROI Form Retrieval Notes

## Search Strategies

1. **Web search for PDFs**: Searched `OrthoCarolina "authorization" "release" "health information" filetype:pdf` — did not return direct OrthoCarolina results.
2. **Web search for medical records release**: Searched `OrthoCarolina "medical records" "release form" Charlotte NC` — found the main form URL and the medical records resource page.
3. **Site-scoped search**: Searched `site:orthocarolina.com authorization release medical records` — confirmed form URLs and found an additional variant.

Strategy #2 was most effective, immediately returning the direct PDF link and the medical records resource page URL.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.orthocarolina.com/storage/wysiwyg/authorization_for_access_use_disclosure_of_protected_health_information.pdf
- **File size**: 218,210 bytes
- **Document type**: ROI / Authorization form — "Authorization for Access/Use/Disclosure of Protected Health Information"
- **Notes**: Current version of OrthoCarolina's ROI form. Includes fields for patient info, date ranges, record types (office notes, operative report, discharge summary, PT, labs, MRI, CT, itemized statement), radiology images, recipient info, purpose of release (medical/patient care, legal review, insurance, personal use, other), and delivery method options (paper copies, email, fax, CD, pick up). Has sections for sensitive information consent (HIV, substance abuse, mental health, genetic). Includes signature and revocation language. Header references HIM/Release of Information Department at 4601 Park Road, Suite 250, Charlotte, NC 28209.

### form-2.pdf
- **Source URL**: https://www.orthocarolina.com/storage/components/authorization_for_use_disclosure_of_phi_6-20171_1.pdf
- **File size**: 130,629 bytes
- **Document type**: ROI / Authorization form — "Authorization for Use/Disclosure of Protected Health Information" (older version)
- **Notes**: An older version of the form (filename suggests June 2017). Slightly different layout — titled "Authorization for Use/Disclosure" (without "Access"). Includes copy fee disclosure upfront. Different fax number (704-323-3941 vs 704-323-3806 in newer versions). Similar content but slightly different checkbox options (includes "Photographs" and "Consultation Reports" as separate options). Does not mention patient portal upload as a submission method.

### form-3.pdf
- **Source URL**: https://www.orthocarolina.com/storage/wysiwyg/authorization_for_access_use_disclosure_of_phi_3.pdf
- **File size**: 406,966 bytes
- **Document type**: ROI / Authorization form — "Authorization for Access/Use/Disclosure of Protected Health Information" (variant)
- **Notes**: Another version/variant of the authorization form. Very similar to form-1 but with minor differences. Mentions patient portal upload as a submission option. Notes that radiology images "can only be provided on a CD". Larger file size suggests it may contain embedded images or different formatting. Same mailing address and contact info as form-1.

## Difficulties

- No significant difficulties. All forms were directly downloadable via curl with no bot blocking or JavaScript rendering required.
- OrthoCarolina maintains multiple versions of essentially the same form at different URLs, which may cause confusion for patients.

## Summary

OrthoCarolina makes their ROI forms readily available online. The medical records page (https://www.orthocarolina.com/resources-category/medical-records) is the main resource hub. Three versions of the authorization form were found — all are legitimate ROI forms with slightly different layouts and features. Form-1 appears to be the current primary version linked from the medical records page.
