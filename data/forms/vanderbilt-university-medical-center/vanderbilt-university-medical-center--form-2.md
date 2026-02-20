# Evaluation: Vanderbilt University Medical Center — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a four-page "Authorization for Release of Medical Information," form number VMR-P 3017, dated 08/2017. It carries the old "VANDERBILT UNIVERSITY MEDICAL CENTER" branding with a shield logo. The document was retrieved from the VUMC Information Privacy & Security subdomain (`vumc.org/information-privacy-security/`).

Within the set of five documents found for Vanderbilt, this is the **oldest version** of the organization's outbound release-of-information authorization. Form-1 is a 2022 revision of the same form (VMR 3017, without the "P" suffix), found on the student-health subdomain. Form-4 is the current official version (10/2023), now branded "Vanderbilt Health" and linked from `vanderbilthealth.com`. Form-5 is the Spanish translation of form-4. Form-3 is a different document altogether (VMR 3022, for incoming records *to* VUMC). This 2017 version has been superseded at least twice yet remains publicly accessible at its original URL, creating a risk that patients or staff may use an outdated authorization.

The four pages serve distinct functions:
- **Page 1**: Patient identification, release-from and release-to addresses, and facility selection.
- **Page 2**: Record type checkboxes, purpose of release, authorization language, and signature lines.
- **Page 3**: Billing and fee schedule information, with a separate fee-acknowledgment signature.
- **Page 4**: "Helpful Hints" instruction sheet for completing and submitting the form.

## 2. FINDABILITY

According to the search notes, this form was found by navigating through `vumc.org` subdomains. It was not linked from the primary patient-facing site (`vanderbilthealth.com`), which instead links to the newer form-4. The direct URL is long and includes URL-encoded spaces:

```
https://www.vumc.org/information-privacy-security/sites/default/files/public_files/
Authorization%20for%20Release%20of%20Medical%20Information%2008_2017.pdf
```

A patient searching for medical records release forms on the main Vanderbilt Health website would not encounter this version. However, because it remains indexed and accessible, a web search could surface it alongside or instead of the current form. The notes describe the search process as requiring exploration of multiple subdomains, and this form was one of several versions discovered across different parts of the VUMC web presence. The continued availability of superseded forms at stable URLs with no "this form is outdated" notice is a findability concern — patients cannot easily determine which version is authoritative.

## 3. TECHNICAL ACCESSIBILITY

This document is functionally an image-only scan packaged as a PDF. Despite the metadata field `is_image_only_scan` being set to `false`, the extracted text totals only 63 characters: "Patient Label or Patient Identifiers." The remaining content — all field labels, instructions, authorization language, fee schedules, and helpful hints — exists only as rasterized images. Key technical characteristics:

- **Pages**: 4
- **File size**: 466,559 bytes
- **Fillable fields**: 0
- **Font count**: 1
- **Embedded images**: 5
- **Extractable text**: 63 characters

This means the form is **completely inaccessible to screen readers**, violating basic digital accessibility expectations. Patients using assistive technology cannot read any of the authorization language, fee disclosures, or instructions. The form cannot be filled out digitally — patients must print it and complete it by hand. There is no evidence of OCR having been applied. For a document that contains legally significant authorization language and fee commitments, the inability to extract or search text is a serious deficiency.

## 4. CONTENT DESIGN

The form uses a structured layout with labeled fields, checkboxes, and boxed sections, but the design reflects its age (2017) and its origin as a paper form that was scanned rather than created digitally.

**Page 1** opens with patient identification fields including name, date of birth, Social Security Number, phone number, and address. The "Release Information FROM" section pre-prints two Vanderbilt addresses (University Hospital and Psychiatric Hospital) with checkboxes. The "Release Information TO" section provides blank fields. A "Medical Record Includes Records From" section lists six Vanderbilt facilities with checkboxes: Vanderbilt University Hospital, Vanderbilt Psychiatric Hospital, Vanderbilt Stallworth Rehab Hospital, Vanderbilt Bill Wilkerson Center, Vanderbilt University Medical Group, and Home Health Services. The current form (form-4, dated 2023) lists eight facilities including newer affiliates, so this version's facility list is incomplete.

**Page 2** provides checkboxes for record types (Complete Medical Record, Abstract, Discharge Summary, History & Physical, Lab Results, Radiology Reports, Operative Reports, Pathology Reports, Billing Record, Other) and purpose of release (Continuity of Care, Legal, Insurance, Personal, Workers' Comp, Disability, SSA, VA, Other). The authorization language is relatively clear, explicitly mentioning that records "may include information relating to sexually transmitted disease, acquired immunodeficiency syndrome (AIDS), or human immunodeficiency virus (HIV)" and "behavioral or mental health services, and treatment for alcohol and drug abuse." This is a useful disclosure. The form states the authorization "is not a condition of treatment, payment, or eligibility for benefits" and defaults to a one-year expiration, with a field to specify a different period.

**Page 3** introduces billing information and a fee schedule. It identifies CIOX as the contracted third-party processor and cites Tennessee Code Annotated 68-11-304(a)(2) as the basis for fees. The fee schedule lists:
- $6.50 flat fee per patient request
- $0.01–0.02/page for paper records scanned
- $0.05/page for paper records printed and delivered as hard copy
- Actual postage for hard copy delivery
- $6.50 flat for electronic delivery (CD, USB, website/download portal)

This page includes a separate signature line: "I understand that there may be fees for copying my medical records. By signing below, I agree to pay these fees when I am billed for them by CIOX." This creates a two-signature structure — one for authorization (page 2) and one for fee acknowledgment (page 3).

**Page 4** ("Helpful Hints") provides practical guidance on completing and submitting the form, including the 15-day processing timeframe, submission methods (mail, fax, or in-person), and notes about sensitive records requiring additional authorization. It includes contact information (phone, fax, mailing address).

Overall, the form is dense but organized. The four-page length is excessive for what newer versions accomplish in two pages. The separation of fee information onto its own page with a separate signature adds bureaucratic weight. The "Helpful Hints" page is a genuinely useful addition, but would be more effective as a cover sheet or web page rather than a scanned page embedded in the authorization form itself.

## 5. PATIENT-CENTEREDNESS

The form presents several barriers to patient-centered access:

**Submission channels are limited.** The form can only be submitted by mail, fax, or in person. There is no electronic submission option (no email, no portal upload). The "Helpful Hints" page states: "requests should be submitted to VUMC by mail, fax, or in person." For a major academic medical center, the absence of any digital submission pathway in 2017 was already behind the curve, and patients encountering this form today would find it even more frustrating.

**The free abstract is walk-in only.** Page 3 states: "At no cost to you, we will provide up to 50 pages of the medical records that are relevant to your care. This is called an abstract." However, this free provision appears to apply only to walk-in requests, creating a geographic barrier for patients who cannot visit in person.

**The abstract vs. legal medical record distinction may confuse patients.** The form defines an "abstract" as "records needed for continuity of care" (listing specific record types) and a "legal medical record" as "all information needed to identify, support diagnosis, justify treatment, document care and results." A patient who simply wants "my records" may not understand which option to choose, and the distinction could inadvertently steer patients toward the narrower abstract rather than their full record.

**SSN is requested on page 1.** While there is no indication the field is mandatory, including a Social Security Number field on a medical records release form is unusual and potentially concerning. Most modern forms identify patients by name, date of birth, and medical record number.

**Fee acknowledgment requires a separate signature.** Patients must sign page 3 agreeing to pay CIOX directly for fees. This adds friction and may alarm patients who are uncertain about costs. The form does include a useful "Let me know if the fee for my records will be more than $_____" line that serves as a cost cap request, which is a patient-friendly feature.

**The 15-day processing timeframe** is stated on page 4. This is within HIPAA's 30-day window (extendable to 60 days) and is a reasonable commitment, though it is not prominent on the authorization pages themselves.

## 6. COMPLIANCE

**Fee schedule basis.** The fees are explicitly cited to Tennessee Code Annotated 68-11-304(a)(2), which governs third-party record copying fees, not the HIPAA Right of Access fee structure. Under HIPAA's patient access provisions (45 CFR 164.524), covered entities may only charge a "reasonable, cost-based fee" for copies requested by patients for their own use. The Tennessee state statute fees (which include per-page charges and flat fees) may exceed what HIPAA permits for patient access requests. The form does not distinguish between patient-access requests and third-party release requests; the same fee schedule applies to all. This is a significant compliance concern — patients requesting their own records under HIPAA should not be charged the state-statute third-party rate.

**CIOX involvement.** The form states that "VUMC contracts with CIOX to process requests" and requires patients to agree to pay CIOX directly. While outsourcing ROI processing is common, the arrangement should not result in fees that exceed HIPAA's cost-based standard for patient access.

**Authorization language.** The form includes appropriate HIPAA-related disclosures: the right to revoke authorization in writing, the statement that authorization is not a condition of treatment, and acknowledgment that information may include sensitive categories (STD, HIV/AIDS, behavioral health, substance abuse). The form does not cite HIPAA by regulation number, but the content aligns with 45 CFR 164.508 authorization requirements.

**Sensitive records.** Page 4 notes that "Some records maintained by VUMC require additional or specific authorization for the release of this information such as HIV/AIDS, substance abuse treatment, psychotherapy notes, and genetic information." This correctly acknowledges special protections under federal regulations (42 CFR Part 2 for substance abuse, HIPAA for psychotherapy notes).

**Expiration.** The one-year default expiration with an option to specify a shorter period is compliant and patient-protective.

## 7. NOTABLE OBSERVATIONS

- 🚩 **Fee schedule applies third-party rates to patient access requests.** The fee schedule on page 3 cites TN Code 68-11-304(a)(2), a state statute governing third-party copying fees, without distinguishing patient access requests covered by HIPAA's cost-based fee limitation. Patients requesting their own records should not be charged the per-page rates listed here.

- 🚩 **SSN requested as an identification field.** Page 1 includes a field for Social Security Number. Collecting SSNs for medical records release purposes is unnecessary and creates identity theft risk. Most current ROI forms rely on name, DOB, and MRN.

- 🚩 **Free records limited to walk-in abstract only.** While the form offers up to 50 free pages as an "abstract," this appears conditioned on in-person retrieval. Patients who cannot visit Nashville cannot access this free option, creating a geographic barrier.

- ⚠️ **Outdated form still publicly accessible.** This 2017 version (VMR-P 3017) has been superseded by at least two newer versions (2022 and 2023) but remains live at its original URL with no deprecation notice. Patients or providers may unknowingly use an outdated authorization.

- ⚠️ **Abstract vs. legal medical record distinction.** The form differentiates between an "abstract" (continuity-of-care records) and a "legal medical record" (complete record), but does not clearly explain that patients have a HIPAA right to their full designated record set. This framing may inadvertently steer patients toward requesting less than they are entitled to.

- ⚠️ **Two separate signatures required.** The authorization signature on page 2 and the fee acknowledgment signature on page 3 create a dual-consent structure. If a patient signs the authorization but not the fee page, it is unclear whether VUMC/CIOX would process the request.

- ❌ **Image-only scan with no text layer.** Despite being a PDF, the document contains only 63 characters of extractable text. All substantive content exists as rasterized images, making the form completely inaccessible to screen readers and unsearchable. This is a significant accessibility failure for a legal document.

- ❌ **Outdated facility list.** The form lists six Vanderbilt facilities; the current 2023 form lists eight. Patients affiliated with newer facilities (added after 2017) may not find their care location represented.

- ❌ **No electronic submission option.** The form accepts only mail, fax, or in-person delivery. For a 2017 document from a major academic medical center, the absence of any digital submission pathway (email, patient portal upload) is a notable gap, made worse by the form's continued availability in 2024+.

- ✨ **"Helpful Hints" instruction page.** Page 4 provides practical guidance on completing and submitting the form, including processing timeframes, contact information, and notes about sensitive records. This is a genuinely useful patient resource that many ROI forms lack.

- ✨ **Cost cap request field.** The line "Let me know if the fee for my records will be more than $_____" on page 3 allows patients to set a spending limit before records are processed. This is a patient-friendly feature that helps avoid surprise bills.

- ✨ **Explicit 15-day processing commitment.** The stated 15-day turnaround is half of HIPAA's 30-day standard, demonstrating a commitment to timely fulfillment.
