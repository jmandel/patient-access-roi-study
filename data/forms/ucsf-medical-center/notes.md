# UCSF Medical Center — ROI Form Retrieval Notes

## Search Strategies

1. **Web search**: Searched for `UCSF Medical Center authorization release health information medical records form PDF` — immediately found the direct PDF URL on ucsfhealth.org.
2. **Site-specific search**: Searched `site:ucsfhealth.org authorization release medical records form` — confirmed the same form and found the medical records landing page.
3. **Website navigation**: Fetched `https://www.ucsfhealth.org/medical-records` — the Medical Records page clearly links to the English and Spanish versions of the authorization form. The page also describes the request process, fees ($0.25/page or $25 electronic), and MyChart as an alternative.

## What Worked

The first web search immediately surfaced the direct PDF link. The UCSF Health website has a clear, well-organized Medical Records page that links directly to downloadable forms.

## Downloaded Forms

### form-1.pdf
- **Source URL**: `https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/pdf/health-information-release-01_756-020zirev0421_en.pdf`
- **Description**: "Authorization for Release of Health Information" — the English ROI form. This appears to be an older URL/revision (Rev. 04/21 in filename, though text says Rev. 04/22). 162,793 bytes.
- **Initial impression**: Standard ROI authorization form. Has text layer, checkboxes for record types (ER visit, entire hospital record, clinic visit, billing, radiology images, dental, reproductive health), delivery method options (mail, pick-up, online portal), and special authorization sections for substance abuse, mental health, HIV/AIDS, and genetic testing records. References California-specific codes.

### form-2.pdf
- **Source URL**: `https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/pdf/roi-authorization.pdf`
- **Description**: "Authorization for Release of Health Information" — English ROI form linked from the current Medical Records page. 226,907 bytes. Same textual content as form-1 (both say Rev. 04/22) but different file size and hash, suggesting it may be a re-exported or updated PDF file.
- **Initial impression**: Same ROI form as form-1, likely the currently canonical version linked from the website.

### form-3.pdf
- **Source URL**: `https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/pdf/roi-authorization-sp.pdf`
- **Description**: "Autorización de Divulgación de Información Médica" — Spanish-language version of the ROI form. 133,557 bytes. Rev. 05/22.
- **Initial impression**: Spanish translation of the same authorization form. Same structure and options as the English version. Includes same California-specific legal citations.

## Difficulties

- **None significant**: Forms were easy to find and download. No bot blocking, no login walls, no JavaScript-only rendering. UCSF Health has a straightforward, patient-friendly approach to making these forms available.
- The only minor note is that two different URLs serve what appears to be the same English form with slightly different PDF files (different sizes/hashes but same extracted text). The version linked from the current Medical Records page (`roi-authorization.pdf`) is likely the canonical one.
