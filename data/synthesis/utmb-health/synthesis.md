# University of Texas Medical Branch — Synthesis

## Forms and Pathways Available

UTMB provides three downloaded documents, but the most important distinction is between two form types: **Form 7033** ("Patients Request for Medical Records," form-1.pdf, dated April 2023) is a dedicated patient self-request form, while **Form 7032** (form-2.pdf, revised May 2024) is a general HIPAA authorization for third-party release. A third document (form-3.pdf) is an outdated 2016 version of Form 7032 hosted by Champion Records Service, a third-party ROI vendor. For a patient requesting their own records, **Form 7033 is the relevant document**.

UTMB also offers an online portal through Datavant/Swellbox as a digital alternative to the paper forms, and the medical records page references this option.

## Access Pathway Differentiation

UTMB earns genuine credit for maintaining **separate forms for patient self-access versus third-party release** — a design choice that relatively few organizations make. Form 7033 omits irrelevant fields (purpose of request, representative documentation requirements) and adds patient-relevant features (MyChart delivery, email delivery, email encryption disclosure). Form 7032, by contrast, has only a "Signature of Authorized Personal Representative" line with no patient signature option, and requires documentation of authority to act on the patient's behalf. This structural separation demonstrates intentional consideration of the patient self-request use case.

However, the forms do not cross-reference each other. A patient who finds Form 7032 (whether on UTMB's site or the third-party copy) has no indication that the more appropriate Form 7033 exists.

## Retrieval Experience

Finding the forms was **easy to moderate**. A single web search surfaced UTMB's medical records page at `utmb.edu/utmbhealth/online-services/medical-records`, which lists forms with download links under a logical "Online Services > Request Medical Records" navigation path. The complication is that PDFs are hosted on SharePoint (`liveutmb.sharepoint.com`), which requires browser-based download — programmatic access (curl) returns login pages. For a typical patient using a web browser, this is a non-issue.

## Form Document Quality

Form 7033 is a **single-page, text-based PDF** with a clean text layer (no OCR artifacts, not an image scan). It flows logically: patient identification → recipient/delivery method → record scope → expiration → signature → submission instructions. However, it has **zero fillable fields** — all fields must be completed by hand after printing or via PDF annotation tools. This is the primary technical shortcoming.

The form offers **four delivery options** for records: mail, fax, email, and MyChart Patient Portal. It also provides **three submission methods** for the form itself: mail, fax, and email (himrio@utmb.edu). The email submission option is a notable convenience that eliminates the need for a printer or fax machine.

Language is generally clear and functional, though institutional rather than warm. The email encryption risk disclosure is a model of transparent, plain-language communication. The form asks for approximately 10–12 fields (name, address, DOB, phone, recipient info, record scope, dates, signature).

## Barriers and Gaps

- **No fillable fields**: Despite digital distribution, the form cannot be completed electronically in standard PDF readers.
- **No fee disclosure**: The form says nothing about costs. HIPAA limits patient access fees to a reasonable, cost-based amount, but patients have no idea what to expect.
- **No turnaround time stated**: No response timeline is communicated.
- **No patient rights statement**: The form does not reference HIPAA's Right of Access or explain patient rights.
- **Bundled sensitive-information consent**: Mental health, substance abuse, and HIV/AIDS records are authorized in a single blanket statement with no opt-out mechanism for individual categories.
- **No multilingual support**: Notable for a Galveston, TX institution serving a significant Spanish-speaking population.
- **No notarization or witness required** — a positive.
- **No in-person submission required** — email, fax, and mail are all available.

## Notable Strengths

- **Dedicated patient self-request form** separate from third-party authorization — a structural best practice.
- **MyChart portal delivery option** on the authorization form itself — few organizations integrate portal delivery directly into their ROI form.
- **Email submission** of the completed form at himrio@utmb.edu — lowers the barrier significantly.
- **Transparent email encryption disclosure** — clearly written, appropriately informative without being alarming.
- **Datavant/Swellbox online portal** as a digital alternative pathway.

## Overall Assessment

UTMB demonstrates above-average patient-centeredness through its structural decision to maintain separate patient and third-party forms, and through the variety of delivery and submission options. The organization clearly thought about the patient self-access use case. The main weaknesses are the lack of fillable PDF fields (undermining the digital workflow), absence of fee/rights/turnaround information, and no multilingual support. The availability of email submission and an online portal partially compensates for the non-fillable PDF. Overall, UTMB earns a **B grade** — meaningfully better than average, with room for improvement in document interactivity and patient education.
