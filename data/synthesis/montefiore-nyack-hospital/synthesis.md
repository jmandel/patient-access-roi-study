# Montefiore Nyack Hospital — Org-Level Synthesis

## Forms and Pathways Available

Montefiore Nyack Hospital (part of Montefiore Health System) publishes a single "Authorization for Release of Health Information" form, available in two versions. The current version (form-1.pdf, Rev. 01/2022) is a 3-page fillable PDF linked from the hospital's [Medical Records page](https://www.montefiorenyack.org/manage-my-care/medical-records). An older version (form-2.pdf, Rev. 10/2021) remains accessible at its original URL but is no longer linked from the website. Both forms are facility-branded rather than system-wide Montefiore Health System forms.

The hospital provides three submission channels: fax (845-348-8433), email (ROI@montefiorenyack.org), and phone (845-348-2527), with a physical mailing address also listed. Electronic delivery of records via email is explicitly offered — a notable positive.

## Access Pathway Differentiation

Montefiore Nyack does **not** differentiate patient self-access from third-party release. The authorization form is a generic HIPAA release serving patients, attorneys, and "other individuals/companies" as parallel options under a single "RELEASE THE REQUESTED RECORDS TO" section. There is no reference to HIPAA's Right of Access (45 CFR § 164.524) or any framing that acknowledges patients have a legal right to their records. The transaction is characterized entirely as an "authorization to release" — a third-party authorization framework applied to patient self-access. A patient can select "PATIENT" as the recipient, but must navigate a form that equally serves attorneys and other third parties.

## Retrieval Experience

Finding the form was straightforward. A single web search immediately surfaced the direct PDF URL, and the form is one click from the Medical Records page. The only friction was technical: the site's CDN/WAF blocks automated downloads (curl requests return "Access Denied"), requiring browser-based retrieval. This bot-blocking is likely unintentional but could affect patients using download managers or assistive tools.

## Form Document Quality

The current form (form-1.pdf) is a meaningful improvement over its predecessor. It includes 39 interactive fillable fields, allowing patients to complete it digitally rather than printing and handwriting. The form follows a logical flow: patient identification → recipient designation → record type selection → sensitive information consent → legal disclosures → signature → contact information. Section headers are bold and labeled, and record type checkboxes (ER, inpatient, outpatient, images, billing) offer useful granularity.

However, several quality issues undercut the form. All 39 fillable fields lack accessible names, creating a significant screen-reader accessibility gap. The form has inflated to 3 pages and 353 KB (with 210 embedded images) compared to the older single-page version covering identical content in 70 KB. The revocation paragraph contains a grammatical error ("affect" instead of "effect") and switches between first and second person mid-sentence, suggesting poorly merged source text. Despite a header instructing patients to "SPECIFY THE DATES OF SERVICE," no field exists for entering dates. The distinction between an "abstract" and a full medical record is mentioned but no mechanism is provided to request the full record.

## Barriers and Compliance

The form imposes no unreasonable barriers: no notarization, no witness signature, no in-person submission requirement. Fees are not mentioned at all — neither disclosed nor waived. Revocation rights and re-disclosure warnings are clearly stated. Sensitive information categories (alcohol/drug, mental health, HIV) are appropriately separated per New York State law. The electronic delivery option requires a somewhat confusing two-step process (provide email on the form and send a confirmation email to ROI@montefiorenyack.org), adding unnecessary friction.

## Overall Assessment

Montefiore Nyack Hospital provides a functional, findable, and reasonably well-designed records request process. The fillable PDF, multiple submission channels, and electronic delivery option are genuine strengths that place it above many peers. However, the lack of a dedicated patient access pathway — funneling self-access requests through a generic third-party authorization form — is the most significant gap. The form's technical quality is further diminished by unnamed fillable fields, grammatical errors, and confusing instructions around dates of service and electronic delivery. The hospital earns a solid **B grade**: accessible and usable, but not designed around the patient self-access use case.
