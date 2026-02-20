# Saratoga Hospital — ROI Form Retrieval Notes

## Search Strategies

1. **Web search for filetype:pdf** — `"Saratoga Hospital" "authorization" "release" "health information" filetype:pdf` — did not return direct results.
2. **Web search for medical records release form** — `Saratoga Hospital Saratoga Springs NY medical records release form` — **this worked**, returning a direct link to the Saratoga Hospital-specific authorization form hosted on albanymed.org.
3. **Site-scoped search** — `site:saratogahospital.org authorization release medical records` — returned the same albanymed.org-hosted form (Saratoga Hospital's site redirects to albanymed.org as part of the Albany Med Health System).
4. **Browsed the Albany Med "Requesting Medical Records" page** — Found the system-wide AMHS authorization form and confirmed Saratoga Hospital is one of four hospitals in the Albany Med Health System.

## Key Finding

Saratoga Hospital is part of the **Albany Med Health System**. The original saratogahospital.org domain now redirects to albanymed.org/saratoga/. The medical records page (albanymed.org/patients-visitors/requesting-medical-records/) provides a unified system-wide authorization form covering all four hospitals (Albany Medical Center, Columbia Memorial Health, Glens Falls Hospital, and Saratoga Hospital). An older Saratoga Hospital–specific form also remains available.

## Downloaded Forms

### form-1.pdf
- **Source URL**: https://www.albanymed.org/wp-content/uploads/sites/2/2024/05/SH_Auth-to-Disclose-PHI_2020_Electronic-Form.pdf
- **File size**: 98,869 bytes
- **Document type**: Saratoga Hospital–specific "Authorization to Disclose Protected Health Information" (Form 4202, dated 2020)
- **Description**: Single-page form with Saratoga Hospital branding (211 Church Street address). Includes patient info fields, record type checkboxes, disclosure recipient, delivery method options (pick-up, mail, email, fax), HIPAA/HIV disclosure language, and signature line. Notes a $0.75/page copy fee (waived for physician-to-physician transfers). Authorization defaults to 90-day expiry.
- **Text layer**: Yes (extractable text)
- **Fillable fields**: Appears to be an electronic form based on filename ("Electronic-Form")

### form-2.pdf
- **Source URL**: https://www.albanymed.org/wp-content/uploads/sites/2/2024/11/24_AMHS_Authorization-to-Disclose-PHI_V2-1.pdf
- **File size**: 114,399 bytes
- **Document type**: Albany Med Health System–wide "Authorization to Disclose Protected Health Information" (2024 version, V2)
- **Description**: Multi-field form covering all four AMHS hospitals. More comprehensive than form-1: includes checkboxes for which hospital to release from, broader record type options (billing, ER, urgent care, primary care, specialty), sensitive information categories with separate initials (alcohol/drug, mental health, HIV, genetic testing), and recipient/purpose sections. This is the current form linked from the Requesting Medical Records page.
- **Text layer**: Yes (extractable text)
- **Initial impression**: This is the current/active system-wide ROI form that patients would use

## Difficulties

- **No difficulties encountered.** The form was easy to find via web search and the Albany Med website. Both PDFs downloaded without any bot blocking or authentication requirements.
- The main complexity is that Saratoga Hospital has been absorbed into the Albany Med Health System, so both an older hospital-specific form and a newer system-wide form exist.
