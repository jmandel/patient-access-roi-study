# Canton-Potsdam Hospital — Form 1 Evaluation

## 1. DOCUMENT IDENTIFICATION

This is **OCA Official Form No. 960**, titled "AUTHORIZATION FOR RELEASE OF HEALTH INFORMATION PURSUANT TO HIPAA." It is a New York State standardized form approved by the New York State Department of Health, not a custom organization-specific document. This particular copy has been pre-filled: the "Other" checkbox in Item 9(a) is checked with handwritten text reading "COVID-19 Test Result," and the Social Security Number field is marked "N/A." The form was retrieved from St. Lawrence Health System's archived COVID toolkit, indicating it was published specifically for patients needing to release COVID-19 test results.

Three documents were found for Canton-Potsdam Hospital / St. Lawrence Health:
- **Form 1** (this document): A scanned, pre-filled OCA-960 form for COVID-19 test result release.
- **Form 2**: A blank, digitally-produced OCA-960 form — the general-purpose ROI authorization.
- **Form 3**: The St. Lawrence Health System Notice of Privacy Practices (not an ROI form).

Form 1 is the narrower, COVID-specific variant. Form 2 is the general ROI form patients would use for broader records requests. Neither is a custom, organization-designed authorization form.

## 2. FINDABILITY

This form was **extremely difficult to find**. It is no longer available on any live website. The St. Lawrence Health System domain (stlawrencehealthsystem.org) now redirects to Rochester Regional Health (rochesterregional.org), and the parent system's medical records page explicitly excludes St. Lawrence Health facilities from its online records request tool, stating: *"St. Lawrence Health is not currently available through this application, for information on requesting these records call (315) 769-4386."*

The form was only discovered through the **Wayback Machine CDX API**, which identified archived PDFs from the defunct SLH website. The original URL path (`/files/covid-toolkit/authorization-for-release-of-health-information--covid19-as-of-81820.pdf`) indicates it was published as part of a COVID toolkit, not as a general patient-facing medical records resource. Multiple web searches using standard queries (organization name + "authorization" + "release" + "health information") returned no direct results.

A patient today looking for an ROI form for Canton-Potsdam Hospital would find no downloadable form online and would be directed to call a phone number.

## 3. TECHNICAL ACCESSIBILITY

This document is an **image-only scan** with severe technical limitations:

- **Text layer**: None. The `pdftotext` output is empty (1 character — a form feed). The form was scanned from a RICOH MP C4504 copier.
- **Fillable fields**: Zero. There are no interactive form fields.
- **File size**: 113,357 bytes for a single page — reasonable for a scanned image, but the scan itself is the problem.
- **Page count**: 1 page.
- **Font count**: 0 (confirms image-only nature).
- **Embedded images**: 1 (the entire page is a single raster image).
- **Orientation**: The image appears to be landscape-oriented and rotated, though the rendered version is readable.

This is the worst-case scenario for digital accessibility: a patient cannot search the text, copy content, fill fields electronically, or use assistive technology (screen readers) with this document. It must be printed, filled out by hand, and submitted physically or via fax. The pre-filled handwriting ("COVID-19 Test Result," "N/A") further reduces its utility for any purpose other than the specific COVID scenario it was created for.

## 4. CONTENT DESIGN

Despite the poor scan quality, the underlying OCA-960 form is a well-structured legal document. Examining the image:

- **Length**: 1 page, which is appropriate for an authorization form (though the standard OCA-960 has a page 2 with instructions, which is missing from this copy).
- **Organization**: The form follows a logical numbered structure (Items 1–13) covering: patient identification, disclosure scope (Item 9a), specific information types, recipient identification, reason for release, expiration, and signature. Item 6 is set in **bold** to highlight the critical limitation: "THIS AUTHORIZATION DOES NOT AUTHORIZE YOU TO DISCUSS MY HEALTH INFORMATION OR MEDICAL CARE WITH ANYONE OTHER THAN THE ATTORNEY OR GOVERNMENTAL AGENCY SPECIFIED IN ITEM 9 (b)."
- **Clarity**: The form uses formal legal language but is reasonably readable. Numbered items with clear labels help navigation. However, the dense paragraph format of Items 1–5 (the "I understand that..." statements) creates a wall of text that many patients would skip.
- **Font size**: The scanned text appears to be approximately 9–10pt — on the small side but legible in the scan.
- **Whitespace**: Minimal. The form is packed tightly to fit on one page, with narrow margins and little separation between sections.
- **Missing instruction page**: The standard OCA-960 includes a second page with instructions for completing the form. This scanned copy omits that page, which would help patients understand the form's purpose and how to fill it out.

## 5. PATIENT-CENTEREDNESS

This form has significant patient-centeredness limitations:

- **Patient access vs. third-party release**: This is a **general-purpose authorization** for releasing health information to third parties. It is not designed specifically for patients requesting their own records under HIPAA's Right of Access (45 CFR § 164.524). The form structure assumes a sender (Item 7: "health provider or entity to release this information") and a recipient (Item 8: "person(s) or category of person to whom this information will be sent") — a third-party disclosure model. A patient requesting their own records would have to awkwardly list themselves as the recipient.
- **Scope options**: Item 9(a) offers granular scope selection — date-range-specific medical records, entire medical records (with inclusions listed: "patient histories, office notes (except psychotherapy notes), test results, radiology studies, films, referrals, consults, billing records, insurance records"), or "Other." The sensitive-information opt-in (requiring initials) for Alcohol/Drug Treatment, Mental Health Information, and HIV-Related Information is appropriate and legally required under New York State law.
- **Pre-filled limitation**: The "Other" box is checked with "COVID-19 Test Result" handwritten in, and the "Fax" notation appears next to Item 8. This pre-filling makes the form unusable for any other purpose.
- **Format options**: No electronic delivery options are mentioned. Item 8's handwritten "FAX" annotation suggests fax was the intended delivery method for this COVID use case.
- **Right of Access language**: The form references HIPAA and "the Privacy Rule of the Health Insurance Portability and Accountability Act of 1996" but does not specifically reference the patient's Right of Access under § 164.524.
- **EHI Export**: No mention of electronic health information export or bulk data.
- **Expiration**: Item 11 asks for "Date or event on which this authorization will expire" — patient-controlled, which is appropriate.

## 6. COMPLIANCE

- **Voluntary authorization**: Item 4 correctly states: "I understand that signing this authorization is voluntary. My treatment, payment, enrollment in a health plan, or eligibility for benefits will not be conditioned upon my authorization of this disclosure."
- **Right to revoke**: Item 3 correctly states the right to revoke the authorization at any time by writing to the health care provider.
- **Redisclosure warning**: Item 5 appropriately warns that information disclosed may be redisclosed by the recipient and may no longer be protected.
- **HIV/sensitive information protections**: Item 2 correctly references New York State law protections for HIV-related information and provides contact information for the New York State Division of Human Rights (212) 480-2493 and the New York City Commission of Human Rights (212) 306-7450 for discrimination complaints.
- **No fee disclosure**: The form does not mention any fees for processing the records request.
- **No notarization requirement**: The form requires only a signature.
- **No in-person submission requirement stated**: The form itself does not specify how it must be submitted, though the "FAX" notation suggests remote submission was possible for this use case.
- **Social Security Number field**: The header includes a "Social Security Number" field (marked "N/A" in this copy). Collecting SSNs on authorization forms creates unnecessary privacy risk and is not required by HIPAA.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS
- **SSN field on form**: The OCA-960 header includes a "Social Security Number" field. While marked "N/A" in this copy, the field's presence on the standard form creates pressure to provide an SSN, which is unnecessary for records authorization and creates identity theft risk.
- **No online form available today**: A patient seeking to request records from Canton-Potsdam Hospital today cannot find any downloadable authorization form. The only option is to call (315) 769-4386. The parent system's online records tool explicitly excludes St. Lawrence Health facilities, creating a significant access barrier during an organizational transition.

### ⚠️ AMBIGUITIES
- **Pre-filled form limits utility**: The handwritten "COVID-19 Test Result" in the Other field and the "FAX" notation next to Item 8 make this form appear single-purpose. A patient encountering this document would not know whether they could use it for a general records request.
- **Missing instruction page**: The standard OCA-960 includes a Page 2 with detailed instructions. This scan only captured Page 1, leaving patients without guidance on how to complete the form.
- **"Fax" annotation on Item 8**: The handwritten "(FAX ↓)" notation next to Item 8 is ambiguous — it's unclear whether this is a delivery instruction or part of the pre-filled recipient information.

### ❌ ERRORS
- **Image-only scan with no text layer**: The entire document is a raster image from a RICOH copier scan. No text can be extracted, searched, or read by screen readers. This is a fundamental accessibility failure.
- **Form no longer accessible at original URL**: The stlawrencehealthsystem.org domain redirects to rochesterregional.org, making the original download link dead. The form exists only in the Wayback Machine archive.

### ✨ BRIGHT SPOTS
- **New York State standardized form**: Using the OCA-960 ensures the authorization meets all state and federal legal requirements, including specific protections for HIV-related information, substance abuse treatment, and mental health records. This is better than a poorly drafted custom form.
- **Granular sensitive-information opt-in**: The initialing requirement for Alcohol/Drug Treatment, Mental Health Information, and HIV-Related Information (separate from the general authorization) is a legally sound and patient-protective design choice built into the OCA-960 standard.
