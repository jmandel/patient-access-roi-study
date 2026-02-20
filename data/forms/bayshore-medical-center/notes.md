# Bayshore Medical Center — ROI Form Retrieval Notes

## Organization
- **Name**: Bayshore Medical Center
- **Location**: 727 North Beers St., Holmdel, NJ 07730
- **Parent System**: Hackensack Meridian Health (HMH)
- **Website**: https://www.hackensackmeridianhealth.org/en/locations/bayshore-medical-center

## Search Strategies

### What was tried
1. **Web search** for `"Bayshore Medical Center" "authorization" "release" "health information" filetype:pdf` — no direct Bayshore-specific PDF found.
2. **Web search** for `Hackensack Meridian Health "medical records" "release form" filetype:pdf` — found HMHMG (Medical Group) form and Pascack Valley forms.
3. **Web search** for `site:hackensackmeridianhealth.org authorization release medical records form` — found the system-wide Medical Records page.
4. **Navigated** to Bayshore Medical Center's Patient & Visitor Information page → "Medical Records" accordion → links to system-wide HMH Medical Records page.
5. **Navigated** to HMH system-wide Medical Records page (`/en/patients-and-visitors/medical-records`) — found:
   - "Request Records" → Swellbox/Datavant online wizard (primary English pathway)
   - "Spanish" → Spanish ROI PDF (CMR-003S)
   - "Records Amendment" → Amendment form PDF
   - No English ROI PDF linked directly
6. **URL guessing** based on Spanish form URL pattern — all returned 500.
7. **Web search** for English CMR-003 form — found it hosted under the Medical Group patient forms path.
8. **Checked** Pascack Valley Medical Center (HMH sister facility with separate website) for comparison forms.

### What worked
- The English hospital-level ROI form (CMR-003) was found via web search pointing to the HMH Media path under Medical Group patient forms. It was **not** linked from the main Medical Records page, which only offers the Spanish version as a PDF download.
- The primary English pathway for record requests is the Swellbox/Datavant online wizard.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.maochealth.com/wp-content/themes/maoc/pdf/HMHMG_Authorization-for-Release-of-Information.pdf (also at https://www.hackensackmeridianhealth.org/-/media/Project/HMH/HMH/Public/Medical-Group/Patient-Forms/General-English/HMHMG-Authorization-for-Release-of-Information.pdf)
- **Document type**: Authorization for Release of Information — HMH Medical Group (outpatient/physician practices)
- **Description**: Simple 1-page form for authorizing HMH Medical Group to release or obtain health information. Has text layer, no fillable fields. Dated March 2018. General third-party release form, not patient-access specific.
- **File size**: 321 KB

### form-2.pdf
- **Source URL**: https://pascackmedicalcenter.com/wp-content/uploads/sites/7/2024/09/PVC-Release-of-Information-Authorization-Form-All-Reqestors.pdf
- **Document type**: Release of Information Authorization Form — Pascack Valley Medical Center (HMH sister facility)
- **Description**: Image-only scanned PDF (no extractable text). From a sister HMH facility (Pascack Valley), not Bayshore directly. 217 KB.
- **File size**: 217 KB

### form-3.pdf
- **Source URL**: https://www.hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/files/patients-visitors/roi-request-form-2024-spanish.pdf
- **Document type**: Spanish version of HMH hospital-level ROI form (CMR-003S)
- **Description**: "Autorización para Usar o Divulgar Información Médica Protegida" — Spanish version of the system-wide authorization form. 2 pages, has text layer. Lists all HMH facilities including Bayshore Medical Center. Form ID: CMR-003S, dated 12-20-23.
- **File size**: 94 KB

### form-4.pdf
- **Source URL**: https://www.hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/files/patients-visitors/request-amendment-of-information.pdf
- **Document type**: Request for Amendment of Protected Health Information
- **Description**: Form for requesting amendments to medical records at HMH. 2 pages, has text layer. Lists all HMH facilities including Bayshore. Form ID: 10711X, dated 4-29-25.
- **File size**: 93 KB

### form-5.pdf
- **Source URL**: https://pascackmedicalcenter.com/wp-content/uploads/sites/7/2024/09/PVC-Patient-Request-Form.pdf
- **Document type**: Patient Request for Health Information — Pascack Valley Medical Center (HMH sister facility)
- **Description**: Patient-access specific form from Pascack Valley. 1 page, has text layer. Offers electronic delivery via email. Includes checkboxes for specific record types. From sister facility, not Bayshore directly.
- **File size**: 61 KB

### form-6.pdf ⭐ (Primary ROI form for Bayshore)
- **Source URL**: https://www.hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/medical-group/patient-forms/general-english/roi-request-form-2024-english.pdf
- **Document type**: Authorization to Use or Disclose Protected Health Information (CMR-003)
- **Description**: The main English hospital-level ROI form for all Hackensack Meridian Health facilities. 2 pages, has text layer. Explicitly lists Bayshore Medical Center as a location option with specific contact info (732-739-5933/5985, fax 732-888-7332). Features include:
  - Record type checkboxes (clinic notes, labs, radiology, etc.)
  - Date range selection
  - Purpose of release options
  - Specific consent for sensitive records (reproductive health, STDs, HIV/AIDS, mental health, alcohol/drug abuse)
  - Delivery format options: paper, electronic (encrypted USB, CD), fax, secured email
  - **EHI Export option**: Mentions machine-readable format uploadable to another EHR
  - Minor consent section
  - 1-year expiration from date signed
  - Fee disclosure note
  - Form ID: CMR-003, dated 12-20-23
- **File size**: 67 KB

## Difficulties Encountered
1. **No English ROI PDF linked from main Medical Records page**: The HMH system-wide Medical Records page links to the Spanish ROI form but not the English version. English users are directed to the Swellbox/Datavant online wizard instead.
2. **Form found via indirect path**: The English CMR-003 form was hosted under the Medical Group patient forms directory path, not the patients-visitors directory where the Spanish version lives.
3. **Multiple form types**: HMH has separate forms for the Medical Group (outpatient) vs. hospital-level records, and sister facilities (Pascack Valley) have their own forms on a separately managed website.

## Summary
Bayshore Medical Center uses the Hackensack Meridian Health system-wide ROI form (CMR-003). The primary form (form-6.pdf) is a well-designed 2-page authorization that covers all HMH hospitals including Bayshore, offers electronic delivery options, and notably includes an EHI Export option for machine-readable records. However, the English PDF version is not easily discoverable from the main Medical Records page — patients are primarily directed to an online wizard (Swellbox/Datavant) for English record requests.
