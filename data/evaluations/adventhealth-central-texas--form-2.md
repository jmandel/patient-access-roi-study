# Evaluation: AdventHealth Central Texas — form-2.pdf

## 1. DOCUMENT IDENTIFICATION

This is a facility-specific "Request For Access And Authorization For Use And/Or Disclosure of Protected Health Information" form (form number AHCT 616, last revised 11/05 — i.e., November 2005). It is branded specifically to AdventHealth Central Texas at 2201 South Clear Creek Road, Killeen, TX 76549, with local phone (254-519-8174) and fax (254-526-7134) numbers.

This is the second of two forms found for this organization. Form-1 (ADV-800003A, rev 4/2022) is a system-wide AdventHealth authorization form focused on third-party disclosure. Form-2 is the older, facility-specific form that notably includes explicit **patient access** language — "Provide me with access to the protected health information specified below" — making it more directly relevant to a patient requesting their own records. The two forms overlap significantly in purpose but differ in scope, branding, and age.

## 2. FINDABILITY

Per the retrieval notes, both forms were found on the first web search for "AdventHealth Central Texas authorization release health information medical records form PDF." The forms were directly linked from AdventHealth's CDN with no login wall, bot blocking, or other barriers. The source URL (`https://www.adventhealth.com/sites/default/files/assets/AH_CT_Release_of_Information__To_Send_or_Release_-1.pdf`) is reasonably descriptive, containing the facility abbreviation and "Release_of_Information" in the filename.

However, the URL is a CDN asset path rather than a page with contextual information about when to use the form, how to submit it, or what to expect. A patient would need to already know they need this specific document, or find it via search. No specific landing page or medical records instruction page was cited as linking to this form.

## 3. TECHNICAL ACCESSIBILITY

**Text layer**: Present. The full text (5,906 characters across 2 pages) extracts cleanly via `pdftotext`, indicating this is a digitally-created PDF rather than a scan.

**Fillable fields**: Zero. Despite being a digitally-created document, the form has no interactive form fields whatsoever. Patients must print and hand-fill every field — patient name, address, date of birth, checkboxes, signature lines, and all other entries. This is a flat PDF.

**File format**: 178,398 bytes for 2 pages with 6 fonts and 1 embedded image. Reasonably sized. The "Affix Patient Label Here" instruction on both pages reinforces that this was designed for in-facility paper use, not digital completion.

**Digital-first design**: This is clearly a print-first document. The layout includes physical artifacts like "Affix Patient Label Here" boxes, hand-written underlines (`_______`), and instruction to "circle format you would like" — none of which translate to digital interaction. The zero fillable fields confirm this was never adapted for electronic use.

## 4. CONTENT DESIGN

**Length**: 2 pages, which is reasonable for an ROI form combining both patient access and third-party disclosure.

**Clarity**: The form uses moderately formal language but is generally comprehensible. The first page presents action options clearly:
- "Provide me with access to the protected health information specified below"
- "Provide me with copies of the protected health information specified below"
- "Disclose my protected health information to the individual(s) specified below"
- "Provide me with a summary of my protected health information at a cost of ($ ____________)"

The second page shifts to dense legal language, including a long block of "I understand..." statements covering fees, denial of access, redisclosure risks, revocation, and voluntariness. These are presented as a continuous paragraph-style block without bullet points or visual separation, making them harder to parse.

**Organization**: Page 1 handles the request details (who, what, where), and page 2 handles the legal terms and signatures. This is a logical split, though the record-type checkboxes on page 1 are a long vertical list without grouping or visual hierarchy.

**Record type specificity**: The form offers 12 record-type checkboxes: Complete Medical Record, Discharge Summary(ies), Operative Report(s), Pathology Report(s), History and Physical(s), Laboratory Report(s), Radiology Report(s), Consultation(s), Psychiatric Evaluation, Psychological, Psychosocial Assessment, and Other. It also includes separate checkboxes for "My Billing Records" and "Any other personally identifiable information used by AdventHealth Central Texas to make medical decisions about me."

**Layout**: The form is reasonably spaced on page 1 but becomes cramped on page 2 with the dense legal text. The checkbox list is clear but simple.

## 5. PATIENT-CENTEREDNESS

**Patient access focus**: This form is notably better than many ROI forms in this regard. It explicitly includes a checkbox for "Provide me with access to the protected health information specified below" as its first option, distinguishing patient access from third-party disclosure. This dual-purpose design means a patient can use this single form to request their own records.

**Format options**: The form offers three copy formats: "photocopy, electronic or other (if available)" with the instruction to "circle format you would like." The inclusion of electronic as an option is positive, though no further detail is provided about what "electronic" means in practice (portal download, CD, email, etc.).

**Summary option**: Unusually, the form includes a fourth option: "Provide me with a summary of my protected health information at a cost of ($ ____________)." This acknowledges the HIPAA right to request a summary but pre-fills the expectation that it will cost money, with a blank for the amount.

**HIPAA reference**: The form references "HIPAA (45 CFR 164.501)" on page 2, specifically in the context of psychotherapy notes. It does not reference 45 CFR § 164.524 (the Right of Access provision) despite including patient access language.

**EHI Export**: No mention of electronic health information export, bulk data, or any modern digital access mechanisms.

**Authorization expiration**: The form includes a significant limitation: "Unless otherwise revoked, this authorization will expire on the following date, event or condition (not to exceed 90 days)." If the patient fails to specify a date, "this authorization will expire 90 days from the date signed." A 90-day maximum expiration is restrictive, particularly for ongoing access needs, though for a one-time records request it may be adequate.

## 6. COMPLIANCE

**Witness requirement**: The form requires a witness signature on both the patient signature block and the legal representative block. The form text states "Printed Name of Witness" and "Witness Signature" alongside every patient signature. HIPAA does not require witness signatures for patient access requests. This adds an extra barrier — a patient filling out the form at home would need to find someone to witness their signature.

**Fee disclosure**: The summary option includes a blank for cost "at a cost of ($ ____________)" but no fee schedule or cost estimate is provided. The legal text states "AdventHealth Central Texas may impose a reasonable, cost-based fee for such access," which aligns with HIPAA language but gives the patient no way to anticipate costs.

**Denial of access language**: The form includes: "I understand that if I am denied access to all or a portion of my protected health information, the protected health information that I have been denied access to may not be disclosed as authorized in this Form." This is legally accurate but presented without explaining the patient's right to appeal a denial, which HIPAA requires.

**Sensitive information**: The form states that "protected health information specified above may include mental health, substance abuse (e.g., drugs, alcohol) and/or HIV/AIDS status information, diagnostic and treatment records" and then adds: "IF I DO NOT WANT THIS PROTECTED HEALTH INFORMATION DISCLOSED, MY OPTION IS NOT TO SIGN THIS FORM." This is an all-or-nothing framing — the patient cannot exclude sensitive categories from their request; they must either authorize everything or nothing.

**No conditioning**: The form correctly states: "I understand that AdventHealth Central Texas will not condition treatment, payment, and enrollment in any health plans or my eligibility for benefits if I decide not to sign this Form."

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **90-day maximum authorization expiration**: The form caps authorization at 90 days ("not to exceed 90 days") with an automatic 90-day default. While HIPAA does not prescribe a maximum duration for patient access authorizations, this is unusually restrictive and could create problems for patients needing ongoing access. Note: for a simple patient access request (which doesn't require an authorization at all under HIPAA), conflating the process with an authorization that expires is itself a conceptual problem.
- **Witness signature required**: Both signature blocks require a witness. HIPAA does not require witnesses for patient access requests, and this creates a practical barrier for patients completing the form independently at home.
- **All-or-nothing sensitive information disclosure**: The statement "IF I DO NOT WANT THIS PROTECTED HEALTH INFORMATION DISCLOSED, MY OPTION IS NOT TO SIGN THIS FORM" removes patient control over sensitive categories. Unlike form-1 (the system-wide form), which has individual checkboxes for each sensitive information type, form-2 provides no granular opt-in/opt-out for mental health, substance abuse, or HIV/AIDS information.

### ⚠️ AMBIGUITIES

- **"Electronic" format undefined**: The form offers "electronic" as a copy format but provides no explanation of what this means — CD, USB, email, portal access? A patient selecting this option has no way to know what they'll receive.
- **Patient access vs. authorization conflation**: The form title is "Request For Access And Authorization For Use And/Or Disclosure" — combining patient access (which under HIPAA does not require a signed authorization) with third-party disclosure authorization in a single document. This may confuse patients about their rights and create unnecessary procedural barriers for simple access requests.
- **Denial rights omitted**: The form mentions the possibility of being denied access but does not explain the patient's right to have a denial reviewed, as required under 45 CFR § 164.524(d).

### ❌ ERRORS

- **Severely outdated**: Form AHCT 616 was last revised in November 2005 — over 20 years ago. It predates the HITECH Act (2009), the Omnibus Rule (2013), the 21st Century Cures Act (2016), and the ONC Information Blocking Rule (2021). Despite being hosted on AdventHealth's current CDN, the form has not been updated to reflect two decades of regulatory evolution.
- **"Affix Patient Label Here"**: Both pages include this instruction, which only makes sense in a facility setting where patient label printers are available. For a form downloaded from the web, this instruction is meaningless and signals the form was not adapted for remote/online use.

### ✨ BRIGHT SPOTS

- **Explicit patient access checkbox**: The first option on the form — "Provide me with access to the protected health information specified below" — is a clear, direct patient access option that many ROI forms lack entirely. This distinguishes it from pure third-party disclosure forms.
- **Broad "any other" catch-all**: The inclusion of "Any other personally identifiable information used by AdventHealth Central Texas to make medical decisions about me" as a requestable category is unusually broad and patient-friendly, allowing patients to request information beyond the enumerated record types.
- **Local facility contact information**: Unlike the system-wide form-1, this form provides specific local phone and fax numbers, making it clear where to submit the request and whom to contact with questions.
