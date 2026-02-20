# Evaluation: Guthrie Corning Hospital — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

Form-2 is titled **"RELEASE OF PATIENT INFORMATION TO FAMILY, FRIENDS AND OTHERS INVOLVED IN YOUR CARE"** (form ID: LMR-1571 Family Access 3.2021). It is a specialized authorization form that allows a patient to designate specific family members, friends, or other parties to receive medical information, manage appointments, and access financial health information.

This is **not** the primary ROI form for patient self-access. It is one of three documents found for Guthrie:
- **form-1.pdf**: The main general-purpose "Authorization to Use or Disclose Health Information" (the standard ROI form)
- **form-2.pdf** (this document): A narrower family/friend access authorization
- **form-3.pdf**: An instruction sheet explaining how to submit the ROI form, including fees, addresses, and hours

Form-2 serves a distinct purpose from form-1: it authorizes ongoing disclosure to named third parties involved in care, rather than a one-time release of specific records. The form applies system-wide to "The Guthrie Clinic entities (including RPH, Corning Hospital, Cortland Hospital, Troy Hospital, Robert Packer Hospital Towanda Campus and all Guthrie clinics)."

## 2. FINDABILITY

Per the retrieval notes, all three forms were "easy to find via web search and directly downloadable as PDFs without any bot blocking or JavaScript barriers." The medical records page at https://www.guthrie.org/medical-records serves as a central hub. The source URL for this form is descriptive: `https://www.guthrie.org/sites/default/files/Medical%20Record%20Release%20Form%20for%20Family%20Access%20-%20March%202021.pdf`. The filename clearly identifies it as a "Family Access" release form, distinct from the general release.

The forms are published by the parent system (Guthrie Clinic) and apply to all Guthrie facilities, meaning patients at Corning Hospital don't need to search for a facility-specific form — a practical benefit for a multi-site system.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (3,149 characters), so the form is not a scan.
- **Fillable fields**: Zero. The form has `fillable_field_count: 0` despite containing numerous data-entry fields (patient name, DOB, designated party name, relationship, phone, address — appearing twice for two designees — plus purpose, initials lines, and signature/date). Patients must print and hand-fill.
- **Page count**: 1 page — compact.
- **File size**: 159,510 bytes (~156 KB) for a single page with 2 embedded images and 5 fonts. Reasonable.
- **Digital design**: This is a digitally-created PDF (not a scan), but it was designed as a print-and-fill form. No interactive elements. The lack of any fillable fields for a form with at least 15+ distinct input areas is a significant missed opportunity.

## 4. CONTENT DESIGN

**Length & Proportionality**: At one page, the form is appropriately concise for its purpose. It covers designation of up to two parties, scope of access, expiration, revocation, and sensitive-information disclosure.

**Clarity**: The opening paragraph is a dense run-on sentence explaining the policy basis: "According to The Guthrie Clinic Providing Medical Information to Family, Friends, and Others Directly Involved in Patient's Care – the person must be clearly involved in the patient's care or payment for care in order to share the protected health information." This is somewhat convoluted — it reads like a policy title embedded in a sentence rather than a plain-language explanation.

The authorization grant paragraph is clearer: it specifies what the designated party can do — "make or confirm appointments; have access to pertinent medical information; have access to telephone communication as well as other common means of communication; be made aware of my diagnosis, treatment and prognosis; and have access to my financial health information."

**Organization**: The form flows logically: explanation → authorization scope → entity list → patient info → designated parties → purpose → expiration/revocation terms → sensitive information categories → signature. Numbered statements (1-4) requiring initials add structure to the legal terms.

**Layout issues**: The form is densely packed onto a single page. The two "Designated Party" blocks with address fields consume significant space. There is a minor text-layer issue: "privacyregulations" appears as a single run-together word (missing space between "privacy" and "regulations").

**Font size**: With 5 fonts used and a full page of content, text appears adequately sized for readability based on the content density.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is explicitly **not** for patient self-access — it is for authorizing third-party (family/friend) access. It serves an important but different need than HIPAA Right of Access. Patients wanting their own records should use form-1 instead.

**Scope options**: The authorization is broadly scoped — it covers "pertinent medical information," appointments, communications, diagnosis/treatment/prognosis, and financial information. There is no granularity to select which of these categories to authorize. It's an all-or-nothing grant to the designated party.

**Expiration options**: The form offers a choice (must check one): expire one year from signing, or be effective for the patient's lifetime unless revoked. The lifetime option is notably broad.

**Sensitive information**: Item 4 lists sensitive categories that "may be disclosed": AIDS/HIV, psychiatric/mental health, drug/alcohol/substance abuse, and genetic diseases/tests. Unlike form-1, which allows patients to opt out of releasing specific sensitive categories, form-2 simply states these categories "may be disclosed" with only an initials line — the opt-out mechanism is less clear.

**Revocation**: The form states the patient may revoke "at any time by notifying The Guthrie Clinic in writing."

**Electronic delivery/EHI**: No mention of electronic delivery, EHI export, or digital access methods. The footer note states: "Access to eGuthrie requires other forms to be filled out. Access refers to verbal information or paper information obtained through the Medical Records department only." This explicitly scopes the form to non-digital channels.

**Right of Access language**: No reference to HIPAA § 164.524 or patient rights to access their own records (expected, since this is a third-party authorization form, not a patient access form).

## 6. COMPLIANCE

**Voluntary nature**: The form states "I may revoke this authorization at any time" and includes the bold footer note: "*YOU MAY REFUSE TO SIGN THIS AUTHORIZATION*". It also notes (item 3): "I understand that my treatment cannot be conditioned on whether I sign this authorization." These are appropriate HIPAA-compliant disclosures.

**Re-disclosure warning**: The form warns: "I understand that once this information is disclosed to the individual(s) named below, the released information may no longer be protected by Federal privacy regulations." Standard and appropriate.

**Limited designees**: The form provides space for only two designated parties. Patients needing more would presumably need additional forms.

**No fee disclosure**: The form does not mention fees (fees are addressed in form-3 for the general ROI process). Since this form authorizes ongoing verbal/paper sharing rather than copies, the absence of fee language may be appropriate.

**No submission instructions**: Unlike form-3 (the instruction sheet), this form does not specify where or how to submit it — no mailing address, fax number, or indication of whether it can be submitted electronically.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **Sensitive information opt-out unclear**: Item 4 states sensitive information categories "may be disclosed" and requires initials, but unlike form-1 (which lets patients check boxes to exclude specific categories), form-2 provides no mechanism to exclude specific sensitive categories. A patient who initials item 4 appears to authorize disclosure of all listed sensitive categories with no granular control.

- **"Pertinent medical information" undefined**: The authorization grants access to "pertinent medical information" without defining what "pertinent" means or who determines pertinence. This vagueness could lead to inconsistent application.

- **No submission instructions on the form itself**: The form lacks any indication of where or how to submit it. Patients must either know to consult form-3 (the instruction sheet) or contact the facility directly.

### ❌ ERRORS

- **Run-together text**: "privacyregulations" appears as a single word in the extracted text, indicating a missing space in the PDF text layer between "privacy" and "regulations."

### ✨ BRIGHT SPOTS

- **Clear refusal language**: The bold footer "*YOU MAY REFUSE TO SIGN THIS AUTHORIZATION*" and the statement that treatment cannot be conditioned on signing are prominently displayed — better than many forms that bury these rights in fine print.

- **Lifetime vs. one-year expiration choice**: Offering patients a choice between one-year and lifetime authorization duration is practical — many family access scenarios (e.g., a spouse managing care for a chronically ill patient) benefit from not requiring annual re-authorization.

- **System-wide applicability**: The form covers all Guthrie entities in a single authorization, saving patients from filling out separate forms for each facility within the system.
