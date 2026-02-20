# Sturdy Memorial Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is an older version of Sturdy Memorial Hospital's "Authorization to Release Health Information" form. The title reads **"STURDY MEMORIAL HOSPITAL/MANSFIELD HEALTH CENTER — AUTHORIZATION TO RELEASE HEALTH INFORMATION"**, indicating it predates a rebranding or reorganization (the current form-1.pdf drops the "Mansfield Health Center" co-branding). HTTP headers date this document to October 2017, while the replacement form-1.pdf is dated January 2025 (form code SM00081 10/24).

Both forms serve the same purpose — general authorization to release protected health information — but differ meaningfully:

- **form-1.pdf** (current): 221 KB, 59 fillable fields, 11 fonts, cleaner layout, updated department name ("Health Information Management Department"), no embedded images.
- **form-2.pdf** (legacy): 761 KB, 0 fillable fields, 3 fonts, 1 embedded image, older department name ("Medical Record Department/Correspondence Section"), includes dated terminology ("Venereal Disease (STD)") and facility-specific references ("SDC", "Sturdy Plus").

Form-2 appears to be a superseded version that remains publicly accessible on the website despite being replaced by form-1.

## 2. FINDABILITY

Per the retrieval notes, both forms were found via a single web search (`Sturdy Memorial Hospital Attleboro MA "authorization" "release of information" medical records form filetype:pdf`), appearing as direct PDF links on sturdyhealth.org. The source URL for form-2 is:

```
https://www.sturdyhealth.org/app/files/public/96f2cd1b-4b3f-4460-9ec1-a8eeacdc61a6/Medical-Records-Auth-Form.pdf
```

The filename `Medical-Records-Auth-Form.pdf` is reasonably descriptive, though the UUID-based path (`96f2cd1b-...`) suggests a CMS upload rather than a structured site hierarchy. The fact that both the old and new forms appear in search results creates a risk that patients will download and use the outdated version. There is no obvious mechanism (e.g., "superseded" banner, redirect) to steer patients toward form-1.

Bot blocking via Akamai CDN was encountered during retrieval — direct `curl` downloads returned "Access Denied" HTML. This required a browser-based workaround to obtain the PDF, suggesting that automated or assistive-technology access may also be impeded.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present — the full text (4,833 characters) is extractable via `pdftotext`. The document is not an image-only scan.

**Fillable fields**: Zero. Despite having a text layer, this is a flat PDF with no interactive form fields. Patients must print, hand-fill, and submit physically (or annotate the PDF with third-party tools). This stands in stark contrast to form-1's 59 fillable fields.

**File size**: At 761 KB for a 2-page document, this is significantly oversized — 3.4× larger than the more capable form-1 (221 KB). The metadata shows 1 embedded image, which likely accounts for the bloat (possibly a letterhead or logo scan).

**Fonts**: Only 3 fonts are embedded, suggesting a simple layout.

**Digital design**: This reads as a print-first document that was saved to PDF rather than designed as a digital form. The underline-blank-line pattern (`____________________`) for fields confirms a paper-era design approach.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is proportionate for an authorization form.

**Organization**: The form follows a logical flow: Patient identification → Authorizing source → Recipient → Information to be released → Sensitive information categories → Purpose of disclosure → Re-disclosure warning → Rights → Expiration → Signature → Witness. This is a reasonable structure.

**Record type options**: The form offers a moderately detailed set of record categories: "Entire Record," "Complete Admission," "Emergency Room," "SDC," "Sturdy Plus" (clinic-specific), "X-Ray Reports," "Lab Reports," "Physical Therapy," "Surgical Reports," "Consultation," and an "Inspection Only" option. Date specification is requested for each. However, several of these references are facility-specific abbreviations ("SDC") without explanation, potentially confusing patients.

**Sensitive information section**: Requires patients to initial next to each sensitive category they wish to authorize: Mental Health Communications, HIV/AIDS, "Venereal Disease (STD)," Sexual Assault, Substance Abuse, and Genetic Testing. This granular opt-in approach is appropriate from a compliance perspective.

**Clarity**: The language is largely institutional/legal but not impenetrably dense. The rights section is written in reasonable plain English. However, there's no introductory guidance explaining when or why a patient would use this form.

**Layout**: The use of underline blanks and single-character bullet markers (`·`) suggests rudimentary formatting. The form lacks visual hierarchy cues like section headers with differentiated styling — it reads as a wall of text with blanks interspersed.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a general-purpose release form, not one designed specifically for patients requesting their own records. The structure presumes a three-party model: patient authorizes Provider A to release records to Provider B. There is no workflow optimized for "I want a copy of my own records."

**Scope options**: Patients can specify record types and date ranges, which is good. However, there is no option for requesting records in electronic format, receiving records via email or patient portal, or any mention of electronic health information (EHI) export.

**Format/delivery options**: None specified. The form provides no mechanism for indicating how the patient wants to receive the records. The distribution note at the bottom states: "Distribution of Copies: Original to Provider; Copy to Patient; Copy to accompany use or disclosure" — this addresses paper copy routing, not delivery format preferences.

**Right of Access language**: The form references the right to refuse signing and the right to revoke authorization. It does not cite HIPAA § 164.524 or explicitly reference the patient's Right of Access. It does not mention fees or timelines for fulfillment.

**"Inspection Only" option**: The form includes an "Inspection Only" checkbox, which is noteworthy — this reflects the HIPAA right to inspect records in person without obtaining copies, though it's not labeled as such.

## 6. COMPLIANCE

**Expiration**: The form states: "This authorization is good until the following date(s)___________ or for 90 days from the date signed." A 90-day default expiration is standard and not unreasonable, though the phrasing allows the patient to specify a custom date.

**Six-year records retention reference**: Under rights, the form states: "I have the right to see and copy the information on this form or ask for another copy of the form at anytime within six years of its expiration date." This language appears in form-2 but was removed from the current form-1, suggesting the organization recognized it was potentially misleading or unnecessary.

**Revocation**: Revocation instructions direct written notice to "Sturdy Memorial Hospital, Medical Record Department/Correspondence Section, 211 Park Street, P.O. Box 2963, Attleboro, MA 02703-0963." The department name ("Medical Record Department/Correspondence Section") differs from the current form-1 ("Health Information Management Department"), confirming this is outdated.

**Witness line**: The form includes a witness signature line. While not explicitly required (no language mandates a witness), its presence may cause patients to believe they need a witness, creating a potential unnecessary barrier.

**No fee disclosure**: No mention of costs associated with obtaining copies.

**No submission method specified**: The form does not indicate how to submit it (mail, fax, in-person, email). Combined with the lack of fillable fields, this implicitly steers toward in-person or mail submission.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Outdated form still publicly accessible**: This ~2017-era form coexists with the current January 2025 version (form-1.pdf) on the same website. Patients searching for the authorization form may find and submit the wrong version, potentially causing processing delays or confusion. The organization should remove or redirect this legacy URL.

### ⚠️ AMBIGUITIES

- **Witness line without explanation**: The form includes `WITNESS:___________` but provides no guidance on whether a witness is required, recommended, or optional. This may lead patients to delay submission while seeking a witness unnecessarily.
- **"SDC" undefined**: The record type option "SDC (Specify Dates)" uses an unexplained abbreviation. Patients unfamiliar with the facility's internal terminology would not know what this means or whether it applies to them.
- **"Inspection Only" without context**: The checkbox for "Inspection Only" is listed among record type options without explanation of what it means (i.e., reviewing records on-site without receiving copies). Patients may misinterpret this as requesting copies for personal inspection.

### ❌ ERRORS

- **Outdated terminology**: The form uses "Venereal Disease (STD)" — the current form-1 uses "Sexually Transmitted Diseases," reflecting modern medical terminology. "Venereal disease" has been deprecated in clinical usage for decades.
- **Department name outdated**: References to "Medical Record Department/Correspondence Section" no longer match the current department name ("Health Information Management Department"), meaning revocation notices sent to the old name may be misrouted.
- **"Sturdy Plus" reference**: Lists "Sturdy Plus (Specify Clinic/Date(s))" as a record category — this appears to reference a clinic branding that may no longer exist, potentially confusing patients.

### ✨ BRIGHT SPOTS

- **Granular sensitive information consent**: The initial-based opt-in for each sensitive information category (Mental Health, HIV/AIDS, STD, Sexual Assault, Substance Abuse, Genetic Testing) gives patients fine-grained control over what is disclosed, exceeding the minimum required by many state laws.
- **Clear right-to-refuse language**: The statement "I understand that I may refuse to sign this authorization and that such refusal will not affect my health care or payment for my health care" is plainly written and prominently placed.
