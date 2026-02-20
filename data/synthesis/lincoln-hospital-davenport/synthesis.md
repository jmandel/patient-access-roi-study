# Lincoln Hospital (Davenport, WA) — Org-Level Synthesis

## Forms and Pathways Available

Lincoln Hospital, a small government-owned critical access hospital in rural eastern Washington, publishes two ROI forms on its Health Records page: a **clinics version** (form-1.pdf) for records held at North Basin Medical Clinics and a **hospital version** (form-2.pdf) for hospital records. Both are titled "Authorization for Release of Health Care Information and Records" and share nearly identical structure and legal boilerplate. The forms are reachable in two clicks from the homepage (Patients and Visitors → Health Records), making them reasonably easy to find.

## Access Pathway: Generic Authorization, Not Dedicated Patient Access

Neither form is a dedicated patient access request form. Both are generic HIPAA authorization forms designed primarily for third-party release of information — the page 1 structure asks patients to specify a recipient for records, with fields for the recipient's name, address, phone, and fax. Page 2 of each form includes an "ACCESS REQUEST" section that acknowledges the patient's right to inspect and obtain copies of their own records, making the forms technically dual-purpose. However, a patient requesting their own records receives no clear guidance on how to fill out the third-party-oriented page 1 — should they list themselves as the recipient? The form doesn't say. The "At the request of the Patient" purpose checkbox and "Given to Patient" delivery option exist but are not prominently featured as a distinct pathway.

## Form Document Quality

The hospital form (form-2.pdf) is the technically superior document: it has a full text layer (7,364 characters extractable), making it screen-reader accessible and searchable. However, it has **zero fillable fields** — patients must print it and fill it out by hand. The clinics form (form-1.pdf) is worse: a scanned image of a paper document with no extractable text whatsoever, rendering it completely inaccessible to assistive technology.

Both forms are 2 pages and reasonably organized. Page 1 uses labeled sections (Types of Information, Purpose, Revocation, Re-Disclosure, No Conditions, Time Frame, Consent of Minor) with clear visual hierarchy. The language mixes plain English with necessary legal terminology; sections like the "No Conditions" statement are clear, while the sensitive-information preamble is dense legalese. The hospital form's "OFFICE USE" section appears near patient-facing fields without clear labeling, potentially confusing patients about what they need to fill out.

## Retrieval Experience

Forms were found through web search and confirmed on the hospital website. The Health Records page returned a 403 error to automated fetch tools (likely bot blocking), requiring browser access, but loaded normally in a standard browser. One alternate URL for the clinics form returned HTTP 400, suggesting stale links. Overall findability was good — a patient navigating the website would locate these forms without difficulty.

## Barriers and Compliance Concerns

The most significant concern is the **fee structure**. The clinics form cites Washington's WAC 246-08-400 fee schedule ($26.00 search/base fee, $1.17/page for first 30 pages, $0.88/page thereafter plus tax) — fees designed for third-party record duplication that likely exceed HIPAA's cost-based limits for patient access requests. Worse, this fee schedule references dates of September 2017 through June 2019, making it nearly seven years expired. The hospital form takes a different approach: its fee field reads "$______ per page" with the amount left blank — unhelpful for patients trying to anticipate costs.

The clinics form requires patients to attach a copy of photo identification, which goes beyond HIPAA requirements and creates an additional burden. Neither form requires notarization or witness signatures. Both forms correctly state a 30-day response time (60 days for off-site records) with one possible 30-day extension, aligning with HIPAA requirements.

## Notable Strengths

The clinics form offers electronic delivery options — "MyChart Secure Patient Portal, CD, USB Flash Drive (provided by patient)" — a notably progressive feature for a small rural critical access hospital. The "Most recent two (2) years" date range shortcut with specific clinical examples (colonoscopy, mammogram, DEXA, diabetic exams) is patient-friendly. Both forms include an explicit "No Conditions" statement and detailed minor consent provisions aligned with Washington State law.

## Overall Assessment

Lincoln Hospital provides a functional but unremarkable records request process. The forms are easy to find and include some thoughtful patient-facing features (electronic delivery options, clinical shortcuts), but fundamental issues undermine the experience: no fillable fields on either form, a generic third-party authorization structure that doesn't clearly serve patient self-access, potentially excessive fees, and one form that is an image-only scan. The organization deserves credit for acknowledging patient access rights on page 2 of each form but falls short of providing a clear, patient-centric access pathway.
