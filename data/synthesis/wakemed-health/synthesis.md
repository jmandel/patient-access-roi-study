# WakeMed Health & Hospitals — Org-Level Synthesis

## Forms and Pathways

WakeMed Health & Hospitals provides a single ROI authorization form ("Authorization to Release Medical Information," N-935, revised 11/25) available in both English (form-1.pdf) and Spanish (form-2.pdf, N-935S). These are the same form translated — not separate documents for different purposes. Both are linked from the Health Information Management (HIM) page under Patients and Visitors → Medical Records. There is no online portal, no web-based request wizard, and no dedicated patient-access form. The sole pathway is downloading the PDF, completing it by hand, and submitting via email (HIMROI@Wakemed.org), fax (919-350-1720), or mail.

## Access Pathway Differentiation

WakeMed does **not** differentiate between patient self-access and third-party release. The form is a general-purpose HIPAA authorization that covers both releasing and obtaining PHI. A patient requesting their own records selects "Personal" from a list of five purposes (Billing/Insurance, Patient Care, Personal, Legal, Other) and must fill in a "Recipient" field — a concept that doesn't map cleanly when the patient is requesting records for themselves. The form asks for the name of the "Person, Organization, or Facility you want us to release your PHI to," which creates an awkward fit for a simple "send me my records" request. This is a generic_hipaa_auth pathway, not a patient-centric design.

## Retrieval Experience

Finding the form was straightforward. A web search for WakeMed's ROI authorization immediately surfaced the correct page. The only friction was that an older URL (/assets/documents/...) was stale and returned HTML, requiring navigation to the HIM page to locate the current PDF links under /sites/default/files/pdf/. Once there, both language versions are clearly labeled and downloadable without bot blocking or access restrictions. Difficulty: moderate — easy via search, but required one redirect.

## Form Document Quality

The form is a **non-fillable PDF** with zero interactive fields. Checkboxes are rendered as the letter "o" in text, and blanks are underscores — a purely print-and-handwrite design. The form has a text layer (not an image scan), so the content is readable on screen, but a patient cannot complete it digitally without third-party annotation tools.

Layout and organization are strong points. The 2-page form flows logically: patient/recipient information → record types and date ranges → format and delivery preferences (page 1), then understanding/consent → authorization/signature → revocation → contact information (page 2). Section headers are bold and uppercase. Record type selection is granular, with specific options for office visits, hospital admissions, ED visits, imaging studies, and sub-components like discharge summaries and lab reports. The date-of-visit field is flexibly worded ("Specify the date, date range, or other specific description of your visit").

Language is reasonably plain, though the UNDERSTANDING section on page 2 leans toward legal formality with a series of "I understand..." statements. These are necessary disclosures (re-disclosure risk, revocation rights, non-conditioning of treatment) but add density.

## Barriers and Bright Spots

**No unnecessary barriers**: No notarization or witness requirement. No in-person-only submission. Multiple electronic submission channels (email and fax). Identity verification is mentioned but framed permissively ("proof of my identity... may be requested").

**Fee disclosure is vague**: The form warns that "any and/or all" requests and large-volume requests are processed by WakeMed's copy service and "a fee will be charged," but provides no schedule, estimate, or reference to HIPAA's reasonable cost-based standard. A patient cannot predict costs before submitting.

**Notable bright spots**: (1) A Spanish-language version exists — uncommon in this study — though it has translation gaps, with key field labels ("Address where you want your PHI sent to," "Email address") remaining in English. (2) Six delivery methods are offered: mail, fax, pick up, onsite review, MyChart (for records after 2/1/2015), and email with encrypted delivery as the default. (3) Email submission of the form itself removes a significant access barrier. (4) The form was recently revised (11/25), suggesting active maintenance.

## Overall Assessment

WakeMed provides a competent, well-organized ROI form with multiple submission and delivery channels, a Spanish translation, and no major procedural barriers. Its primary weakness is the lack of a patient-centric access pathway — patients must navigate a generic authorization form designed for all disclosure purposes, and the non-fillable PDF format forces a print-and-handwrite workflow. The form is adequate for its purpose but falls short of best practice in digital accessibility and patient-centeredness. Grade: **B** (3.50).
