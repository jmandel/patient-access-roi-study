# Evaluation: Hartford Hospital — form-1.pdf

**Organization:** Hartford Hospital (Hartford, CT)
**Document:** form-1.pdf — "Authorization to Disclose/Obtain Health Information"
**Form Number:** HH Forms 571559 Rev. 11-2022
**Pages:** 2 | **File Size:** 449 KB | **Fillable Fields:** 0

---

## 1. DOCUMENT IDENTIFICATION

This is the system-wide Hartford HealthCare (HHC) authorization form for releasing or obtaining health information. It is titled "AUTHORIZATION TO DISCLOSE/OBTAIN HEALTH INFORMATION" and is a general-purpose ROI form covering all HHC facilities — Hartford Hospital, Institute of Living, Backus, Charlotte Hungerford, HOCC, MidState, Natchaug, Rushford, St. Vincent's, Windham, and HHCMG. The form carries form number 571559, revised November 2022.

Three forms were downloaded for this organization. Form-1 and form-3 are identical copies of this system-wide form (571559), hosted on different HHC subdomains. Form-2 is an older, facility-specific variant (573008, Rev. 05/12) tailored to the Institute of Living psychiatric facility. Form-1 is the current canonical authorization form linked from the parent system's medical records page.

---

## 2. FINDABILITY

**Moderate findability.** The form was found through the parent system's medical records page at `hartfordhealthcare.org/patients-visitors/patients/medical-records`, linked under "Release of Information forms" as "Authorization to Disclose/Obtain Health Information (English)." Web searches for Hartford Hospital ROI forms returned relevant results.

However, the notes document a stale URL: `hartfordhealthcare.org/-/media/files/patients-visitors/patients/hhc-authorization-to-release-form-english.pdf` returns a 404 error, meaning older search engine results or bookmarks lead to a dead link. The current working URL (`hartfordhealthcare.org/file%20library/forms/571559.pdf`) uses an opaque numeric filename that gives no indication of the document's contents.

The form itself is hosted at the parent system level (hartfordhealthcare.org), not on the Hartford Hospital subdomain. A patient starting at hartfordhospital.org would need to navigate to the parent system's site. That said, having a centralized medical records page with clear headings is a reasonable organizational choice.

---

## 3. TECHNICAL ACCESSIBILITY

**Mixed quality.** The PDF has a text layer (`has_text_layer: true`) and is not an image-only scan, which is positive — the full text is extractable and searchable. The document uses 13 fonts, suggesting it was digitally authored rather than scanned.

However, the form has **zero fillable fields** (`fillable_field_count: 0`). Despite being a digitally-authored PDF, all fields are represented as static text with blank lines (e.g., `Patient Name: ________________________________________`). A patient must print the form and fill it by hand, or use a PDF annotation tool. For a 449 KB, 2-page document from a major regional health system revised in 2022, the lack of any fillable fields is a significant missed opportunity.

The file size of 449 KB is somewhat large for a 2-page text-based PDF with no embedded images, suggesting possible inefficiency in the PDF generation.

---

## 4. CONTENT DESIGN

**Adequate but dense.** Page 1 is the authorization form proper; page 2 consists entirely of legal notice blocks covering HIV, psychiatric, substance abuse, and reproductive health information protections under Connecticut and federal law.

The form opens with an internal administrative header: `MR#:`, `Date Completed:`, `Pages Copied:`, `Initials:` — these are clearly for HIM staff, not patients, yet they appear at the very top of the form before the title. This is a staff-facing design choice that may confuse patients.

The record type section offers a comprehensive set of 19 checkbox options including "Abstract of Record," "Entire Record," "Billing Records," "History & Physical," "Consultations," "Laboratory Reports," "Discharge/Transfer Summary," "ED Record," "MyChart Plus Enrollment," "Operative Reports," "Pathology Reports," "Progress Reports," "Psychiatric Evaluation," "Psych/Neuro Testing," "Radiology Films," "Radiology Reports," "Treatment Plan," and "Other." This granularity is good for specificity but may overwhelm patients who simply want "my records."

The form also separates sensitive record categories into a distinct checkbox group at the top: "Reproductive Healthcare Services," "Mental Health Record," "Substance Abuse Records," and "HIV-Related Information" — which is appropriate given Connecticut's special protections for these categories.

The destination section uses a single structure for both disclosing and obtaining: `I authorize _____ to disclose /obtain health information to: ______` — combining two directions of information flow into one line. This dual-purpose design may confuse patients who are requesting their own records vs. authorizing release to a third party.

The authorization section at the bottom lists 11 HHC facilities with full mailing addresses and fax numbers as checkbox options, making it clear where to send the form. This is helpful but consumes significant page real estate.

---

## 5. PATIENT-CENTEREDNESS

**Primarily designed for third-party release, not patient self-access.** The form's structure — `I authorize [facility] to disclose/obtain health information to: [recipient]` — is oriented toward releasing records to an external party, not toward a patient requesting their own records. There is no separate pathway, simplified form, or specific language for patients exercising their Right of Access under HIPAA § 164.524.

The purpose field lists "At the request of the patient" as one of several options (alongside "Medical," "Legal," "Disability," "Insurance," "Other"), but the form still requires the patient to fill in both a source facility and a destination recipient — an awkward fit when the patient *is* the recipient.

**Delivery options are reasonably flexible.** The "Method of Disclosure/obtain" line includes: Mail, Verbal, Pick-up, Review, Electronic, MyChart Plus, and Fax. The inclusion of "Electronic" and "MyChart Plus" as options is a positive signal, though the form doesn't define what "Electronic" means in practice (email? portal download? USB drive?).

The form states: "I understand that my treatment or continued treatment is in no way conditioned on whether or not I sign this authorization and that I may refuse to sign it." This is a required HIPAA element and is included appropriately.

The form also states: "I understand that I may inspect or copy the information to be used or disclosed" — correctly referencing the patient's right to inspect, though it does not elaborate on how to exercise this right.

The expiration clause is patient-friendly: "This authorization will expire (date) __________. If date is not completed, this authorization will expire one year from the date of signature below." The one-year default is reasonable.

There is no mention of fees, processing times, or the patient's right to receive records in a requested format — all of which would improve patient-centeredness.

---

## 6. COMPLIANCE

The form includes several HIPAA-required elements: revocation rights ("I may revoke this authorization at any time by notifying Patient Relations in writing"), re-disclosure warning, unconditional treatment statement, and right to inspect.

The purpose field is explicitly marked "(Optional)" — which is correct under HIPAA (the individual is not required to state the purpose when requesting their own records).

Page 2 includes detailed legal notices for four categories of specially protected information under Connecticut law and federal regulations: HIV-related information (CT state law), psychiatric information (CT state law), drug and alcohol abuse records (42 CFR Part 2), and reproductive health care services (CT state law). These notices are appropriately included given the form's scope.

No notarization is required. No in-person submission is required (fax numbers are provided for all facilities). No fees are mentioned on the form.

---

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Dual-purpose "disclose/obtain" structure creates confusion.** The single line `I authorize _____ to disclose /obtain health information to: ______` conflates two distinct workflows — releasing records to a third party and requesting records for oneself. A patient requesting their own records must puzzle over who goes in which blank.

- **"Electronic" delivery is undefined.** The checkbox for "Electronic" as a method of disclosure is listed without any explanation of what this means — email, portal, download link, encrypted file transfer? A patient checking this box has no way to know what they'll receive.

- **"MyChart Plus Enrollment" appears as a record type**, not a delivery method, despite MyChart Plus also appearing as a delivery method. Its placement among record types like "Pathology Reports" and "Radiology Films" is confusing — is this requesting enrollment itself, or requesting records related to enrollment?

### ❌ ERRORS

- **Stale URL still indexed by search engines.** The notes document that `hartfordhealthcare.org/-/media/files/patients-visitors/patients/hhc-authorization-to-release-form-english.pdf` returns a 404 page. Patients following older links or cached search results will hit a dead end.

- **Inconsistent fax number formatting.** The facility list mixes formats: some use periods (`860.892.2723`), others use dashes (`860-380-1730`), and one uses a mix within the same line (`Fax# 860.545.6764 or 545.6446`). The abbreviated second number (`545.6446`) omits the area code, which could cause dialing errors.

- **Typographical issue on page 2.** The psychiatric information notice reads "If the event that information released constitutes..." — this should be "In the event." The same error ("If the event") appears in the reproductive health care services section.

### ✨ BRIGHT SPOTS

- **Comprehensive facility directory with fax numbers.** The form lists 11 HHC facilities with full mailing addresses and fax numbers as checkboxes, making it unambiguous where to submit the form. This reduces a common patient pain point of not knowing where to send a completed authorization.

- **Connecticut-specific protections clearly delineated.** Page 2 provides distinct legal notice blocks for HIV, psychiatric, substance abuse, and reproductive health records, each citing the applicable law. This level of specificity about state-level protections is unusual and informative.

- **Purpose field marked optional.** Labeling the purpose of disclosure as "(Optional)" is a small but meaningful patient-rights-respecting detail that many forms get wrong.
