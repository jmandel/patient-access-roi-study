# Newton-Wellesley Hospital — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is a **legacy Authorization for Release of Protected or Privileged Health Information** form branded under **Partners HealthCare System (PHS)**, the former name of the Mass General Brigham system. The form number is **0600938 (1/06)**, indicating it dates from January 2006 — making it roughly 20 years old at the time of this evaluation.

Newton-Wellesley Hospital has two forms available online. **Form-1** is the current MGB-branded authorization (form number MGB00087, dated 06/24), hosted on the massgeneralbrigham.org CDN and actively linked from the system's medical records page. **Form-2** (this document) is the legacy predecessor, still accessible at `https://www.nwh.org/media/file/PHS_HIM_RELEASE-ENG.pdf` on the old NWH domain. The filename itself ("PHS_HIM_RELEASE-ENG") reflects the outdated Partners HealthCare branding. This form appears to have been superseded by form-1 but never removed from the NWH web server.

Both forms serve the same general purpose — authorizing release of medical records — but differ substantially in design quality and available options.

## 2. FINDABILITY

According to retrieval notes, this form was found "referenced in web search results as an alternative URL." It is **not** the form linked from the current NWH or MGB medical records pages. The current workflow directs patients from the NWH website → MGB parent system's medical records page → Newton-Wellesley Hospital accordion → current form (form-1).

This legacy form is an orphaned artifact: still publicly accessible via direct URL but not linked from any current navigation path. A patient would only encounter it if a web search returned the old URL, if they had a bookmarked link, or if a third party referenced the outdated URL. The filename (`PHS_HIM_RELEASE-ENG.pdf`) is reasonably descriptive but uses the defunct "PHS" abbreviation.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present. Full text is extractable (5,763 characters across 2 pages). This is not an image-only scan.
- **Fillable fields**: **Zero**. The form uses underscored blank lines throughout (e.g., `PATIENT NAME: _____________________________________`). Unlike the current form-1, which has 78 interactive fillable fields, this form offers no digital interactivity whatsoever.
- **File size**: 102,258 bytes (100 KB) for 2 pages — reasonably compact.
- **Fonts**: 5 embedded fonts.
- **Images**: 0 embedded images.
- **Design origin**: This is a flat PDF designed for print. All data entry relies on handwriting or typewriter input. There are no checkboxes with interactive states — instead, the form uses `Ë` symbols as checkbox placeholders and blank underscores for initials.

The form is clearly a **print-era document** with no concessions to digital use. A patient would need to print it, fill it by hand, and submit it physically.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is appropriate for this type of authorization.

**Organization**: Page 1 covers patient demographics, the authorization grant (naming patient and facility), recipient/purpose selection, and record types. Page 2 covers specifically protected information categories, patient rights/understanding statements, and signature blocks. The flow is logical but the page break creates a disconnect — "See Page 2 on Reverse" assumes physical double-sided printing.

**Clarity**: The language is moderately legalistic. The authorization grant reads: *"I, _______ do hereby authorize _______ to release my protected health information including copies of my medical record of care received at _______ to the following persons at the locations/facilities listed below, for the purposes described."* The "do hereby authorize" phrasing is formal but understandable.

**Layout issues**:
- The recipient/purpose section uses a side-by-side table layout that is cramped, with only two recipient slots available.
- Phone number fields are split oddly: `DAY: ( ) __________________` and `EVENING: (` with the area code parenthesis and number field separated across lines, likely a text extraction artifact but reflecting tight formatting.
- The sensitive information section on page 2 uses blank lines for initials (`_____`) rather than checkboxes, which is more error-prone.
- The 42 CFR Part 2 disclosure uses ALL CAPS for the federal prohibition language, which is harder to read.

**Record type options**: The form offers checkboxes for: Clinic visit notes, Discharge Summary, Lab Reports, Operative Reports, Pathology Reports, Photographs, Radiation reports, X-rays/Scan reports, and a "Medical Record Abstract" composite option. Date specification lines are provided next to each. There is no billing records option (unlike form-1).

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party release**: This is a **general-purpose release form**, not specific to patient self-access. The structure assumes records are being sent to a third party — it asks for "Person(s)/Facility/Address" and "Purpose" without a streamlined path for "I want my own records." A patient requesting their own records must fill in their own name and address as the recipient.

**Scope options**: Patients can select specific record types and specify dates. The "Medical Record Abstract" option provides a convenient composite selection. However, there is no option to request "all records" — patients must check individual boxes.

**Delivery format options**: **None specified.** Unlike the current form-1 (which offers Patient Gateway, Secure Email, Fax, and Paper Copy via Mail), this legacy form provides no delivery method selection at all. The form implicitly assumes paper copies.

**Right of Access language**: No reference to HIPAA § 164.524 or patient rights to access their own records. The form does note that *"I may refuse to sign this authorization"* and that treatment/payment won't be affected, which are standard HIPAA authorization disclosures (relevant to third-party releases, not patient access requests).

**EHI Export awareness**: None.

**Fees**: The form states: *"Please refer to the Partners HealthCare Privacy Notice for information on copying fees that may be associated with this request."* and notes *"There may be additional charges for copies of photographs."* This references a document that likely no longer exists under the "Partners HealthCare" name.

## 6. COMPLIANCE

**Authorization expiration**: *"This authorization will automatically expire in 6 months unless otherwise specified."* This is identical to the current form and is a reasonable standard timeframe.

**Withdrawal rights**: The form clearly states patients may withdraw authorization by *"submitting a written request to the Director of Health Information Management, or the Office Manager in my Doctor's Office"* — naming specific roles is helpful.

**Non-coercion**: The form includes the standard statement that treatment, payment, enrollment, and benefits eligibility won't be affected by refusing to sign.

**Re-disclosure warning**: *"Information released on this authorization, if redisclosed by the recipient, is no longer protected by Partners HealthCare."* This is a standard and important disclosure.

**42 CFR Part 2**: The substance abuse records section includes the federally required notice about prohibition on further disclosure, using the older "Alcohol and Drug Abuse Records" terminology (vs. the current form's "Substance Use Disorder Treatment Records").

**No submission instructions**: Unlike form-1, which prominently displays a mailing address and fax number, this form provides no guidance on where or how to submit the completed authorization. A patient filling this out has no indication of where to send it.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No submission instructions**: The form contains zero information about where to mail, fax, or deliver the completed authorization. A patient who downloads this form has no way to know how to submit it, creating a dead-end barrier.

### ⚠️ AMBIGUITIES

- **"Facility" field in authorization grant**: The form asks the patient to fill in the facility name in the authorization sentence (*"do hereby authorize _______ to release"*), but doesn't pre-populate or clarify which facility name to use — Newton-Wellesley Hospital? Partners HealthCare? The specific clinic? This is confusing for patients who may have received care at multiple NWH locations.
- **Copying fees reference to nonexistent document**: The form directs patients to *"the Partners HealthCare Privacy Notice"* for fee information. Partners HealthCare was renamed to Mass General Brigham in 2019. A patient following this instruction today would be looking for a document under a defunct organization name.

### ❌ ERRORS

- **Outdated branding throughout**: The form exclusively references "Partners HealthCare" — an entity that was rebranded to Mass General Brigham in 2019. This makes the form appear unofficial or expired, potentially causing patients to question its validity.
- **Outdated terminology**: Uses "Alcohol and Drug Abuse Records" rather than the current accepted term "Substance Use Disorder Treatment Records," reflecting the form's 2006 vintage.
- **Form number dating**: The form identifier `0600938 (1/06)` indicates January 2006 — a 20-year-old document still publicly accessible, with no indication it has been superseded.

### ✨ BRIGHT SPOTS

- **Sensitive information categories are well-specified**: The form separately addresses HIV results, genetic screening, substance use records (with 42 CFR Part 2 notice), psychotherapy, social work counseling, domestic violence counseling, and sexual assault counseling — each requiring individual initials. This granular approach to sensitive categories respects patient autonomy over particularly private information.
- **Review option**: The form offers both *"RELEASE COPIES OF HEALTH/MEDICAL RECORD"* and *"REVIEW HEALTH/MEDICAL RECORD"* as top-level options, acknowledging that some patients may prefer to review records in person rather than receive copies. This is an option not present on the current form-1.
