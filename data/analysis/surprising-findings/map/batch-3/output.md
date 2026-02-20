# Surprising Findings — Batch 3

## The Provider-vs-Patient Fillability Gap

The most striking finding in this batch is a pattern of **asymmetric investment in form quality depending on who the form serves**. Ironwood Cancer & Research Centers (AZ, for-profit physician practice) makes the case most starkly: their provider-facing incoming records form has 22 fillable fields and was updated in November 2023, while their patient-facing ROI form has zero fillable fields, dates from March 2019, and is effectively orphaned — not linked from any active webpage, discoverable only via search engine queries against old WordPress upload paths. The organization invested in making it easy for other providers to send records *to* Ironwood while neglecting the form patients use to get records *from* Ironwood. This isn't an oversight; it's a revealed preference about whose time matters.

## An FQHC With No Form at All

La Clínica de La Raza — a large, established FQHC serving Oakland's predominantly low-income, multilingual community since 1971 — has **no ROI form published online**. The only documented pathway for requesting records is to compose a freeform letter and mail it to a P.O. Box, as described in a Notice of Privacy Practices that hasn't been updated since 2012 (pre-dating the 2013 Omnibus Rule). For an organization whose mission is health equity for underserved populations, this is a jarring gap. The NPP *is* available in English, Spanish, and Chinese, showing the organization understands its patient demographics — it simply hasn't extended that awareness to the records-request process. This scored 1.65/5.0 overall, the lowest in the batch.

## Wrong-State Law on an Arizona Form

Ironwood's incoming records form cites **Washington state law (RCW 70.24)** for STD confidentiality protections — despite being an Arizona practice with no Washington locations. This template-copy error suggests the form was adapted from a vendor or partner template without review. It's a small detail, but it raises questions: if the legal citations weren't reviewed, were the substantive requirements?

## Government Hospitals: High Findability, Low Everything Else

Three government-owned facilities in this batch — Grady Memorial Hospital (GA, 953 beds), Lane County Hospital (KS, 25 beds), and La Clínica de La Raza (CA, FQHC) — illustrate a pattern where public institutions make forms easy to locate but offer poor-quality documents. Grady scores 4/5 on findability but only 2/5 on technical accessibility: its form is a non-fillable PDF that can only be *submitted* via in-person drop-off or postal mail, despite offering encrypted email for *receiving* records. Lane County Hospital achieves a perfect 5/5 on findability (one-click download from a clear records page) but then asks for Social Security Numbers and implies a witness is needed — barriers HIPAA doesn't require. The pattern suggests these institutions see web publishing as a transparency obligation but don't follow through to the form-quality level.

## The Witness Signature Creep

Four organizations in this batch include witness signature lines on their forms: Cottage Hospital (NH), Lane County Hospital (KS), Heartland Community Health Center (KS), and Adena Regional Medical Center (OH). HIPAA does not require witnesses for patient authorizations, and none of these forms explicitly state the witness is optional. For a patient filling out a form at home — the expected scenario for a downloadable PDF — finding a witness adds friction and may deter submission entirely. This quasi-requirement appears across facility types (critical access, community, FQHC) and regions (northeast, midwest), suggesting it's a cargo-cult compliance pattern inherited from institutional templates rather than a deliberate policy choice.

## CD-ROM as "Electronic" Delivery

Coast Plaza Hospital (CA, for-profit) lists CD-ROM as its **only electronic delivery format** — no email, no portal download, no USB option. In 2024, this is functionally equivalent to offering no electronic delivery at all. Erie Family Health Centers (IL, FQHC) similarly lists "Electronic copy (CD-ROM)" as a format option alongside encrypted email, suggesting the CD-ROM language persists in templates long after the medium became obsolete. These artifacts reveal how slowly form templates evolve even when the rest of an organization's technology stack has moved on.

## Fenway Health's Sensitive-Information Granularity

Fenway Health (MA, FQHC specializing in LGBTQIA+ care) requires individual patient initials for **10 separate categories** of sensitive health information, including abortion care, gender-affirming care, HIV/AIDS, and behavioral health. This level of granularity — far exceeding what most organizations offer — gives patients unusually fine-grained control over which sensitive records are disclosed. It also includes a "Name used (if different)" field that accommodates patients whose current name differs from their legal name. These design choices clearly reflect the organization's specific patient population and mission, demonstrating how an FQHC's identity can meaningfully shape form design in ways generic templates cannot.

## Cottage Hospital's Buried Better Form

Cottage Hospital (NH, 25-bed CAH) has a genuinely better authorization form — one that distinguishes "Self or Representative" from "Other Provider or Facility" with different scope rules — but it's buried on page 2 of a 12-page new patient intake packet. The standalone ROI form, which patients would actually search for and find, is the inferior generic version. Meanwhile, the standalone form's footer reads "PAGE 14 OF 28," a vestige of a larger policy document it was extracted from. Small rural hospitals often lack dedicated HIM web resources, but the mismatch between "form they designed thoughtfully" and "form patients actually encounter" is a microcosm of a broader problem across the study.
