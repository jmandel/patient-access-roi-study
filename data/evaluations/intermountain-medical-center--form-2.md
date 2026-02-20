# Intermountain Medical Center — Form 2 Evaluation

**Document**: form-2.pdf — "Authorization for Disclosure of Protected Health Information (PHI)"
**Source URL**: `https://intermountainhealthcare.org/-/media/files/intermountain-health/for-patients/medical-records/auth-to-use-and-disclose-phi-request-records-be-sent-to-someone-else.ashx`
**Organization**: Intermountain Medical Center (Murray, UT) — part of Intermountain Health system
**Dated**: 06/2025 (form code A-MR-0215-0625)

---

## 1. DOCUMENT IDENTIFICATION

This is one of three forms found for Intermountain Medical Center, all published at the system level by Intermountain Health:

- **Form 1** (legacy, 2017): "Authorization to Use and Disclose Protected Health Information" — a general-purpose ROI form, non-fillable, branded under the old "Intermountain Healthcare" name.
- **Form 2** (this document): "Authorization for Disclosure of Protected Health Information (PHI)" — a newer fillable form specifically for **third-party disclosure** (sending records to someone else). The URL slug explicitly reads `request-records-be-sent-to-someone-else`.
- **Form 3**: "Patient Request for Health Information" — a separate fillable form specifically for **patient self-access** requests.

Form 2 is clearly the current third-party release authorization. The existence of a companion patient-access form (form 3) shows that Intermountain has deliberately separated these two use cases, which is good practice. However, form 2 confusingly incorporates a "Patient Access Information" section (see Patient-Centeredness below).

---

## 2. FINDABILITY

Per the retrieval notes, all three forms were found easily via standard web searches. No login, portal, or JavaScript rendering was required. The forms were directly downloadable as PDFs from `intermountainhealthcare.org`. The URL path (`/for-patients/medical-records/`) is logical and discoverable. The URL filename (`auth-to-use-and-disclose-phi-request-records-be-sent-to-someone-else.ashx`) is descriptive, though `.ashx` is a server-side handler extension rather than a clean `.pdf` link.

Retrieval difficulty was rated **easy**. The forms were found within the first few web searches, and Intermountain's medical records pages link to the forms directly. Notably, Intermountain hosts forms on two domains — the legacy `intermountainhealthcare.org` and the current `prod.intermountainhealth.org` — which could cause confusion but didn't impede retrieval.

---

## 3. TECHNICAL ACCESSIBILITY

Form 2 is a well-constructed digital PDF:

- **Text layer**: Full extractable text (3,946 characters). Not an image-only scan.
- **Fillable fields**: 48 interactive form fields — a substantial count for a single-page form, covering patient info, release-from/to addresses, purpose checkboxes, record type checkboxes, and delivery format options.
- **Print/Clear buttons**: The form includes interactive `Print` and `Clear` buttons, indicating it was designed for on-screen completion.
- **File size**: 84,424 bytes (~82 KB) for a 1-page form — reasonable.
- **Fonts**: 6 fonts embedded.
- **Images**: 2 embedded images (likely the Intermountain Health logo and a decorative element).
- **Page count**: 1 page.

This is clearly a digital-first design — not a scanned paper form. The high fillable field count and interactive buttons demonstrate intentional design for electronic completion. This is a strong showing for technical accessibility.

---

## 4. CONTENT DESIGN

**Length and density**: The form packs considerable content into a single page. Sections include Patient Information, Release From, Release To, Purpose, Dates of Service, Information To Be Disclosed (12 record-type checkboxes), Disclosure Format (7 delivery options), Patient Access Information (5 bullet points), "I Understand That" (4 bullet points of legal disclosures), and signature/submission instructions. This is dense but not unreasonably so.

**Organization**: The form follows a logical flow — identify patient → identify source → identify recipient → specify purpose → specify records → specify format → legal terms → signature → where to submit. Section headers are present but visual hierarchy is modest; the form relies primarily on bold labels and checkbox groupings rather than numbered sections or colored bands. Compare this to form 3, which uses numbered sections (1 through 7) for clearer navigation.

**Language clarity**: The top portion (patient info, checkboxes) uses plain, directive language. The bottom half shifts to dense legal prose. The "I Understand That" section is standard HIPAA boilerplate but includes complex sentences like: "Information disclosed pursuant to the authorization may be subject to redisclosure by the recipient and is no longer protected by the HIPAA Privacy rule, unless the disclosure includes records from a federally-assisted program specifically providing diagnosis, treatment or referral for treatment of drug and alcohol abuse, in which case redisclosure is prohibited under 42 CFR Part 2."

**Record type options**: The form provides 12 checkboxes for record types: Clinic Visit, History & Physical, Laboratory, Substance Use Treatment, Emergency Report, Discharge Summary, Imaging Report, Billing Record, Operative Report, Consultation, Cardiac Study/EKG, and Other. This is a solid granularity.

**Delivery format options**: Seven options are provided: Paper–US Mail, CD, Verbal only, Fax (healthcare provider only), Paper–pick up, USB, and Email. This is unusually comprehensive.

---

## 5. PATIENT-CENTEREDNESS

**Form purpose**: This is explicitly a **third-party disclosure** form, not a patient self-access form. The URL, title, and "Release To" structure all confirm this. Intermountain Health has a separate form (form 3, "Patient Request for Health Information") for patient self-access, which is a meaningful distinction.

**Confusing "Patient Access Information" section**: Despite being a third-party disclosure form, form 2 includes a "Patient Access Information" section with five bullets addressing in-person record review:
- "I will provide a picture ID prior to accessing my medical record."
- "I may review my medical record without a charge. If I request copies of my medical record, I may be charged a fee."
- "A Care Site professional will supervise the review of my medical record."
- "If I am involved in a research study involving medical treatment, my access to the research study content may be suspended for as long as the research is in progress."

These bullets are about patient access, not third-party disclosure. Their inclusion on this form blurs the line between the two use cases and could confuse patients about which form to use. The supervised-review bullet is particularly odd on a disclosure authorization.

**Scope options**: Good granularity — 12 record types, date range specification, 7 delivery formats. Patients can tailor requests meaningfully.

**Electronic delivery**: Email is offered as a delivery format, though there's no mention of encryption or secure transmission. Fax is restricted to "healthcare provider only."

**Right of Access language**: No explicit reference to HIPAA § 164.524 or patient right of access on this form (though form 1 does reference it). The form does mention the HIPAA Privacy Rule in the redisclosure warning.

**EHI Export awareness**: No mention of electronic health information export, bulk data, or patient portal access.

---

## 6. COMPLIANCE

**Authorization expiration**: "Without my express revocation, this authorization will automatically expire 180 days from the date signed below, unless I request a specific expiration date or event." 180 days is a standard expiration period — neither unreasonable nor unusual.

**Revocation rights**: Clearly stated: "I may revoke this authorization in writing at any time, except to the extent that action has already been taken to comply with it." Standard language.

**Fees**: "If I request copies of my medical record, I may be charged a fee" and "According to State Statutes, this Care Site may charge for copies of medical records." Fee amounts are not specified. The reference to "State Statutes" rather than HIPAA fee limits is notable — HIPAA limits fees for patient-access requests, but this is a third-party disclosure form where state law fee schedules may apply.

**Conditioning of treatment**: "If I do not sign this authorization, this Care Site will still provide treatment and seek payment for services provided." Properly states that treatment is not conditioned on signing — required by HIPAA.

**Research access suspension**: The form states that if a patient is in a research study, "my access to the research study content may be suspended for as long as the research is in progress." This is permitted under HIPAA 45 CFR § 164.524(a)(2)(iii) for records created during research, but its inclusion on a third-party disclosure form (rather than a patient-access form) is unusual.

**Outsourced ROI processing**: The UT/ID return address uses `MedRecReq@r1rcm.com` — R1 RCM is a revenue cycle management company. This indicates Intermountain outsources at least some ROI processing, which is common in large systems but worth noting.

**Regional routing**: The form provides two distinct return addresses based on state — CO/NV/MT/WY routes to Broomfield, CO (`peaks_croi@imail.org`); UT/ID routes to Murray, UT (`MedRecReq@r1rcm.com`). This reflects Intermountain's multi-state footprint post-merger with SCL Health.

---

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **"Patient Access Information" on a third-party form**: Five bullets about in-person record review, supervised access, and photo ID requirements appear on what is explicitly a third-party disclosure authorization. This creates confusion about the form's purpose and may lead patients to incorrectly use this form instead of form 3 for self-access requests. The bullets about supervised review and research study suspension are particularly irrelevant to a disclosure authorization.

- **"Health Oversite" checkbox**: The Purpose section includes "Health Oversite" — this appears to be a misspelling of "Oversight" and the term "Health Oversight" is a HIPAA-defined concept that may confuse patients who don't know what it means. No tooltip or explanation is provided.

### ❌ ERRORS

- **Misspelling**: "Health Oversite" should be "Health Oversight" — a factual error in a legal term. Health oversight is defined in HIPAA (45 CFR § 164.512(d)) and misspelling it on an official form is a quality defect.

### ✨ BRIGHT SPOTS

- **Seven delivery format options**: Offering Paper–US Mail, CD, Verbal only, Fax, Paper–pick up, USB, and Email is unusually comprehensive. Most forms offer only 2–3 options. The inclusion of USB and email as explicit options is forward-looking.

- **Separate forms for separate purposes**: Intermountain maintains distinct forms for third-party disclosure (form 2) and patient self-access (form 3). This avoids the common problem of forcing patients to use a general ROI form when they simply want their own records. The patient-access form (form 3) is notably simpler and more patient-friendly.

- **Multiple submission channels**: Patients can return the form via email, fax, or mail — three options per region. This removes the in-person-only barrier that many organizations impose.

- **48 fillable fields on a single page**: The form is fully interactive with a high field count, Print/Clear buttons, and was clearly designed for digital completion. This is well above average for ROI forms.
