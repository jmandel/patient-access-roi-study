# Wayne County Hospital — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a single-page PDF titled **"WAYNE COUNTY HOSPITAL — REQUEST TO REVIEW/RECEIVE MEDICAL INFORMATION."** It functions as the organization's ROI form for patients to request copies of or review their own medical records. The form is oriented toward patient self-access ("review/receive"), with options for the request to cover the patient's own records, a child's records, or another person's records (with a "Specify" blank for the latter).

This is the only downloadable PDF form found for Wayne County Hospital. The organization also offers a web-based HTML form at `/Release-of-Health-Form` that captures equivalent information electronically. The two mechanisms appear to be parallel pathways — the PDF for print-and-submit, the web form for online submission.

## 2. FINDABILITY

**Moderate difficulty.** The PDF was not linked from any navigable page on the hospital's website. The Health Information Management (HIM) department page provides a phone number (606-340-3227) but does not link to the downloadable form. There is no "Patient Forms" or "Downloads" section on the site. The form was discovered only through a targeted web search that surfaced the direct URL at `waynehospital.org/files/galleries/Medical_Records_Release.pdf` — a `/files/galleries/` path that suggests it was uploaded to a media library but never linked from site navigation.

The filename `Medical_Records_Release.pdf` is descriptive, which helped with search discovery. However, a patient browsing the website would likely not find this PDF without calling the HIM department or using a search engine.

The separate web-based form at `/Release-of-Health-Form` may be more discoverable via site navigation, though the retrieval notes do not confirm it is linked from any prominent page either.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer:** Present. The full text is extractable via `pdftotext`, with 2,015 characters of content. This is not an image-only scan.
- **Fillable fields:** Zero (0). The form is a flat PDF with no interactive fields. All blanks are represented as underscores in the text layer (e.g., `Patient Name _____________`). A patient would need to print this and fill it out by hand, or use PDF annotation tools.
- **File size:** 71,933 bytes (~70 KB) for a single page with no embedded images — appropriately small.
- **Font count:** 3 fonts, suggesting minimal formatting complexity.
- **Embedded images:** Zero. The form is entirely text-based.
- **Design origin:** This appears to be a digitally created document (not a scan), but it is designed as a print form rather than a digital-first artifact. The underscore-based fill blanks and lack of interactive fields confirm the print-oriented design.

## 4. CONTENT DESIGN

**Length:** One page — appropriate and efficient for a patient access request. The brevity is a strength.

**Structure and organization:** The form follows a logical flow:
1. Patient identification (name, DOB, address, phone)
2. Request type (review vs. receive) and delivery method (fax, email, mail, pick-up)
3. Whose record (self, child, other)
4. Date(s) of service
5. Specific information requested (10 checkboxes)
6. Reason for request (5 options)
7. Identification presented (4 options)
8. Signatures and dates (patient/representative + witness)
9. Staff receiving line

**Clarity:** The language is straightforward and accessible. There is no dense legalese. The form uses plain checkbox-style options with clear labels like "Discharge Summary," "History & Physical," "Lab," "Radiology." The phrase "REQUEST TO REVIEW/RECEIVE MEDICAL INFORMATION" is clear about the form's purpose.

**Layout:** As a flat PDF with blanks represented by underscores, the layout is functional but basic. Without seeing the visual rendering, the text extraction suggests a two-column layout for some sections (e.g., the record type checkboxes). The form is compact — fitting everything onto one page is efficient, though the heavy use of underscores for blank lines likely makes it feel crowded when printed.

**Readability:** With only 3 fonts and a straightforward structure, the form appears readable, though font sizes cannot be confirmed from metadata alone.

## 5. PATIENT-CENTEREDNESS

**Patient access focus:** The form is explicitly designed for patient access. The title says "REQUEST TO REVIEW/RECEIVE MEDICAL INFORMATION" (not "Authorization for Release" to a third party). The options for record ownership are "self," "child," or "other" — putting patient self-access first. The signature line reads "(Patient, Parent, or Legal Representative) Please circle," which directly addresses the patient as the expected user.

**Scope options:** Good. The form offers 10 specific record types to check: Discharge Summary, History & Physical, Operative Report, Lab, Radiology, Drs. Orders, Pathology Report, Entire Medical Record, ER Record, and Other. Patients can also specify date(s) of service. This granularity lets patients request exactly what they need.

**Delivery options:** Four methods are offered: fax, email, mail, and pick-up. The inclusion of email as a delivery option is a positive, as many smaller facilities do not offer electronic delivery.

**Right of Access language:** The form includes a notable reference: **"Based on KRS 422.317 a first copy of a patient's record will be provided free, subsequent copies may be charged."** This cites Kentucky state law (KRS 422.317) regarding free first copies. The form does not reference HIPAA § 164.524 or federal patient access rights explicitly.

**EHI Export / bulk data:** No mention of electronic health information export, patient portal access, or CEHRT-based data export.

**Reason for request:** The form asks patients to specify a reason: Continuity of Care, Personal Interest, Insurance Claims Processing, Legal Claims Processing, or Other. Under HIPAA, patients are not required to provide a reason when exercising their Right of Access. Including "Personal Interest" as an option suggests the form acknowledges unrestricted patient access, but the checkbox structure implies a reason is expected.

**Identification requirement:** The form includes a section "Identification Presented" with options for Driver's License, Work ID, School ID, or Other. While reasonable for in-person requests, this is presented as a mandatory field rather than something applicable only to in-person pickup.

## 6. COMPLIANCE

**Fee disclosure:** The KRS 422.317 reference about free first copies is helpful and accurate under Kentucky law. No specific fee schedule is disclosed for subsequent copies.

**Witness requirement:** The form includes a separate "Witness" signature line with its own date field. Requiring a witness for a patient's own records request is unusual and could constitute a barrier — HIPAA does not require witness signatures for patient access requests.

**No notarization requirement.** The form does not require notarization.

**Reason for request:** As noted, the form asks for a reason. HIPAA does not require patients to state a reason when requesting their own records (45 CFR § 164.524(a)(1)). While this may be used for internal workflow routing, it could be perceived as a gatekeeping mechanism.

**No explicit expiration or auto-revocation clause.**

**Submission method:** The form does not specify how to submit (mail, fax, in-person). Combined with the "Identification Presented" section, the implication is in-person submission, though the availability of the web-based form at `/Release-of-Health-Form` provides an alternative electronic pathway.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature required:** The form includes a dedicated "(Witness)" signature line for a patient self-access request. HIPAA does not require witness signatures, and this creates an unnecessary barrier — a patient filling out the form at home would need to find a witness before submitting. This is particularly burdensome for a rural population.

### ⚠️ AMBIGUITIES

- **Reason for request appears mandatory:** The form presents reason checkboxes (Continuity of Care, Personal Interest, etc.) without indicating they are optional. Under HIPAA's Right of Access, patients need not justify their request. The form structure implies a reason must be provided.
- **"Other" record ownership unclear:** The form allows requesting records of "other" with a "Specify" line, but provides no guidance on what authorization or documentation is needed for third-party requests versus patient self-access. A patient requesting their own records and one requesting someone else's records use the same single-page form with no differentiated instructions.
- **Submission method unspecified:** The form does not state where or how to submit the completed form (address, fax number, email). A patient would need to contact the HIM department to learn how to return it.

### ✨ BRIGHT SPOTS

- **KRS 422.317 free-copy reference:** Prominently noting that "a first copy of a patient's record will be provided free" is unusually transparent for a small rural hospital. Many larger organizations do not disclose this on the form itself.
- **Email as a delivery option:** Offering email delivery alongside fax, mail, and pick-up is forward-thinking for a 25-bed critical access hospital and reduces barriers for patients who cannot visit in person.
- **Parallel web form available:** The existence of an online HTML form at `/Release-of-Health-Form` provides an electronic submission pathway that compensates for the PDF's lack of fillable fields. Few critical access hospitals offer this.
- **One-page brevity:** The entire form fits on a single page with no unnecessary legal boilerplate, making it approachable and quick to complete.
