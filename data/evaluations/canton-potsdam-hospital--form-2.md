# Evaluation: Canton-Potsdam Hospital — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

Form-2.pdf is a blank **OCA Official Form No. 960** — "Authorization for Release of Health Information Pursuant to HIPAA." This is the standard New York State authorization form produced collaboratively by the NY State Office of Court Administration, representatives of the medical provider community, the bench and bar, and designed to comply with the HIPAA Privacy Rule. It is a generic state form, not a custom Canton-Potsdam Hospital or St. Lawrence Health document.

The organization published three documents on its old website (stlawrencehealthsystem.org):
- **form-1.pdf**: A COVID-specific pre-filled version of the same OCA-960 form (image-only scan, 1 page)
- **form-2.pdf** (this document): The blank, general-purpose OCA-960 form (2 pages, digitally produced)
- **form-3.pdf**: St. Lawrence Health System Notice of Privacy Practices (7 pages)

Form-2 is the most relevant ROI form for general patient use — it is the blank version of the standard NY State HIPAA authorization. Form-1 is a narrower, COVID-specific variant of the same form. Form-3 is a privacy notice, not an authorization form.

## 2. FINDABILITY

This form was **extremely difficult to find**. It is no longer available on a live website. Key obstacles:

- The original host site (stlawrencehealthsystem.org) now **redirects to rochesterregional.org** following a system acquisition. The form is no longer accessible at its original URL.
- Rochester Regional Health's medical records page **explicitly excludes St. Lawrence Health** facilities from its online records request tool (Swellbox/Datavant), telling patients: "St. Lawrence Health is not currently available through this application, for information on requesting these records call (315) 769-4386."
- The form was only recovered via the **Wayback Machine CDX API**, searching archived PDFs from the defunct stlawrencehealthsystem.org domain. Original URL: `https://www.stlawrencehealthsystem.org/-/media/slh/patients-and-visitors/oca-960-form.pdf`
- No web search using queries like `"Canton-Potsdam Hospital" "authorization" "release" "health information"` or `site:rochesterregional.org authorization release` returned a downloadable form.
- The notes indicate that even the archived St. Lawrence Health site never had a dedicated "medical records" page — the CDX API returned zero results for any URL containing "medical" or "record."

A patient today would have **no way** to find this form online. They would need to call (315) 769-4386 to request records.

## 3. TECHNICAL ACCESSIBILITY

- **File size**: 127,880 bytes (125 KB) for 2 pages — reasonable.
- **Text layer**: Technically present, but **severely garbled** due to font encoding issues. The extracted text is largely unreadable, with characters replaced by control characters and mojibake. For example, the form title renders as `"012ÿ04456578ÿ9 ÿ \u000e\u000fÿ\u0010\u0011\u0012"` instead of "OCA Official Form No. 960." Key phrases like "Patient Name" appear as `"./01230ÿ5/62"` and "Date of Birth" as `"D/02ÿ89ÿ:1;0<"`.
- **Fillable fields**: **Zero** fillable form fields. Despite being a digitally-produced PDF (created via PScript5.dll/Acrobat Distiller, not a scan), no interactive fields were added. Patients must print and complete by hand.
- **Fonts**: Only 2 fonts embedded. The font encoding issues suggest non-standard character mappings that break text extraction.
- **Images**: 0 embedded images — this is a purely text-based layout, not a scan.
- **Digital-first design**: No. While digitally produced rather than scanned, the form was designed as a print-and-fill document. The complete absence of fillable fields and the garbled text layer mean the PDF is functionally opaque to assistive technology and cannot be completed digitally.

## 4. CONTENT DESIGN

Despite the garbled text extraction, the form's structure can be partially reconstructed from the metadata and from knowledge of the standard OCA-960 form:

- **Length**: 2 pages — page 1 is the authorization form itself, page 2 contains instructions. This is an appropriate length.
- **Structure**: The form uses numbered items (Items 6–13 visible in the garbled text) covering:
  - Name and address of the health provider releasing information (Item 6)
  - Name and address of the recipient (Item 7)
  - Specific information to be released, with date range options (Item 8a)
  - Options for entire medical record including office notes, test results, radiology, referrals, consults, billing, and insurance records
  - Special categories requiring separate initialing: HIV-related information, alcohol or drug treatment, and mental health treatment (Item 8b)
  - Reason for release (Item 9)
  - Signature fields (Items 10–13)
  - Expiration date or event (Item 11)
- **Clarity**: The OCA-960 is written in reasonably plain language for a legal document. Numbered clauses explain patient rights (right to revoke, voluntariness, redisclosure risk). However, it is still fundamentally a legal authorization form with dense paragraph text.
- **Patient rights statements**: Includes statements that authorization is voluntary, that treatment/payment/enrollment won't be conditioned on signing, right to revoke in writing, and redisclosure warnings.
- **Special protections**: Separately addresses HIV-related information, substance abuse treatment, and mental health treatment with initialing requirements, consistent with NY state law requirements.

## 5. PATIENT-CENTEREDNESS

- **Patient access vs. third-party release**: This is a **general-purpose** authorization form, not specific to patient access. The form language ("I, or my authorized representative, request that health information regarding my care and treatment be released") frames the request as a release to a third party. It does not distinguish between a patient requesting their own records under HIPAA § 164.524 and an authorization for release to another entity.
- **Scope options**: The form does offer scope controls — patients can specify date ranges ("Medical Record from [insert date] to [insert date]") and choose between entire record or specific information categories.
- **Format/delivery options**: **None**. There is no mention of electronic delivery, email, patient portal access, or any delivery method. The form does not address how records will be provided.
- **HIPAA Right of Access**: The form references HIPAA generally ("Pursuant to HIPAA") but does not specifically reference § 164.524 or patient right of access. It references the "Privacy Rule of the Health Insurance Portability and Accountability Act of 1996."
- **EHI Export**: No mention of electronic health information export or bulk data.
- **Contact information**: The form is generic — it does not pre-populate Canton-Potsdam Hospital or St. Lawrence Health contact information. Patients must fill in the provider name and address themselves.
- **Discrimination protection**: Notably includes contact information for the NY State Division of Human Rights (212-480-2493) and NY City Commission of Human Rights (212-306-7500) for patients who experience discrimination related to HIV disclosure.

## 6. COMPLIANCE

- **No notarization required**: The form requires signature but not notarization.
- **No in-person requirement stated**: The form does not mandate in-person submission on its face.
- **Fees**: No fees are disclosed or referenced on the form itself.
- **Expiration**: Item 11 asks the patient to designate an expiration date or event (e.g., "at the conclusion of my court case") or a specific date. The instructions note you may designate "6 years from this date." This is reasonable and patient-controlled.
- **Revocation**: Clearly states right to revoke "at any time by writing to the health care provider listed below" with standard exception that revocation doesn't apply to actions already taken.
- **Voluntariness**: Explicitly states "signing this authorization is voluntary. My treatment, payment, enrollment in a health plan, or eligibility for benefits will not be conditioned upon my authorization of this disclosure."
- **Redisclosure warning**: Standard language about information possibly being redisclosed by the recipient.
- **Special categories**: Appropriately requires separate patient initialing for HIV-related, substance abuse, and mental health information, consistent with NY Public Health Law protections.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Form no longer available online**: The form exists only in a web archive. A patient visiting rochesterregional.org today would find that Canton-Potsdam Hospital / St. Lawrence Health is explicitly excluded from the online records request system, with only a phone number provided. This effectively creates an **in-person or phone-only barrier** to initiating a records request.

### ⚠️ AMBIGUITIES

- **No distinction between patient access and third-party release**: The OCA-960 is a general authorization form. A patient requesting their own records under HIPAA's Right of Access (§ 164.524) would use the same form as someone authorizing release to an attorney or insurer. This can lead to confusion about what rights apply — patient access requests have different fee limits and timelines than third-party authorizations.
- **Provider and recipient fields are blank**: Since this is a generic state form with no pre-filled organizational information, a patient would need to know the correct name and mailing address of Canton-Potsdam Hospital's HIM department to fill in Item 6. No guidance is provided.

### ❌ ERRORS

- **Garbled text layer**: The PDF's text extraction is almost entirely unreadable due to font encoding issues. Characters are replaced with control codes and mojibake (e.g., `"./01230ÿ5/62"` for "Patient Name"). This renders the document **inaccessible to screen readers** and breaks any text search, copy-paste, or automated processing. For a digitally-produced PDF (not a scan), this is a significant technical defect.
- **Dead website reference**: The form was hosted on stlawrencehealthsystem.org, which now redirects. The Notice of Privacy Practices (form-3) references `www.StLawrenceHealthSystem.org` as the website where the current notice is available — that URL is also dead.

### ✨ BRIGHT SPOTS

- **Patient-controlled expiration**: The form lets the patient designate when the authorization expires, either by event or specific date, rather than imposing an arbitrary expiration.
- **Explicit voluntariness and non-retaliation language**: Clear statement that signing is voluntary and won't affect treatment, payment, or benefits.
- **Discrimination protection contacts**: Providing NY Division of Human Rights and NYC Commission of Human Rights contact information for HIV-related discrimination is a thoughtful inclusion.
