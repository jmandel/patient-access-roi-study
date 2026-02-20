# Surprising Findings: What We Didn't Expect to See in ROI Forms

## 1. Organizations Are Getting Worse on Purpose

The most counterintuitive discovery across all batches is not that many forms are bad — it's that some are *newly* bad. Multiple organizations demonstrably regressed in form quality during recent updates, replacing functional digital documents with inferior ones.

University of Iowa Hospitals dropped from 50 fillable fields to zero in its 2024 revision — while the form's own consent language still endorses electronic completion. NorthLakes Community Clinic (FQHC, Ashland, WI) tells the same story: its older form had 54 fillable fields; the December 2023 replacement has none, with both versions still live under the same form number. Mercy Health–Fairfield (Bon Secours Mercy Health, OH) replaced a searchable text-based PDF with an image-only scan — completely inaccessible to screen readers. Mercy Health–Springfield shows the same pattern across its system.

These are not organizations failing to modernize. They are organizations that *had* modern, accessible forms and actively chose to abandon them. The most likely explanation is that form updates are driven by legal or compliance revisions — new consent language, updated regulatory citations — and whoever handles the revision either scans the signed paper original back into PDF or strips interactive fields during template migration. The digital usability of the document is simply not on anyone's checklist. Accessibility is treated as an accident of production method, not a requirement.

## 2. The Capability-Choice Gap

Closely related to regression is a pattern we might call the capability-choice gap: organizations that demonstrably *can* produce modern, patient-friendly digital forms — and choose not to apply that capability to patient access.

JPS Health Network (Fort Worth, TX) is the starkest example. In 2025, JPS published fillable, text-searchable HIE authorization forms with encrypted email submission. Its patient ROI form remains a seven-year-old image scan with a single extractable character and a $75 flat fee for electronic delivery. The organization proved it has the tools and skills; it simply didn't deploy them where patients need them.

Ironwood Cancer & Research Centers (AZ) reveals a subtler version of the same asymmetry: its form for *other providers* to send records *to* Ironwood has 22 fillable fields and was updated in 2023. Its patient-facing release form has zero fillable fields, dates to 2019, and isn't linked from any active webpage. The provider-facing workflow got investment; the patient-facing one was abandoned. Mercy General Hospital (Sacramento) similarly produced a third-party authorization form with 42 fillable fields while its patient access forms have zero.

The implication is uncomfortable: patient access isn't a technical problem. It's a priority problem. The organizations have the capability. They've applied it to workflows they care about — provider-to-provider exchange, internal operations, insurance authorizations. The patient's own records request sits in a different budget line, owned by a different team, with no one accountable for its digital quality.

## 3. Small Rural Hospitals Routinely Outperform Academic Medical Centers

Perhaps the study's most persistent surprise is how frequently tiny critical access hospitals deliver a better patient experience than flagship teaching institutions.

Wayne County Hospital — a 25-bed independent facility in rural Monticello, Kentucky — offers a downloadable PDF, a parallel web-based HTML submission form, email delivery, and transparent fee disclosure citing Kentucky's free-copy statute. OSU Wexner Medical Center (1,439 beds, major teaching hospital) provides no electronic submission channel, no fax number, no email address, and routes billing through a third-party vendor without fee transparency. Fallon Medical Complex (25 beds, Baker, MT) offers seven delivery formats including USB, patient portal, and email. Myrtue Medical Center (25 beds, Harlan, IA) provides MyChart portal delivery, encrypted email, and a Spanish translation. Labette Health (99 beds, Parsons, KS) built a Formstack workflow with electronic signatures and photo ID upload, scoring a perfect 5 in technical accessibility — while the Hospital of the University of Pennsylvania (800 beds) requires patients to physically mail their fillable PDF.

The conventional assumption — that large, well-resourced academic centers produce better patient-facing materials — is flatly contradicted. Small hospitals may actually have an advantage: fewer layers of bureaucracy, less template standardization pressure from parent systems, and staff who wear multiple hats and can implement a JotForm or email workflow without a procurement cycle. The worst-performing facilities in the study are not the smallest; they're mid-to-large organizations trapped between legacy processes and system-wide standardization that optimizes for legal compliance over patient experience.

## 4. For-Profit Chains Produce the Best Standardized Forms

The for-profit findings challenged our expectations directly. Flowers Hospital (Community Health Systems, Dothan, AL) earned the study's only A grade with a dedicated "Patient Request for Health Information" form, 66 fillable fields, "Myself" as the first recipient option, co-equal Spanish translation, and a Swellbox online portal. Merit Health Central (CHS, Jackson, MS) uses the same system-standardized HIM-1406 template and scored highest in its batch. These for-profit CHS hospitals outperformed every teaching hospital and major academic medical center across all batches — including Mass General, UCSF, and UPMC Presbyterian.

The mechanism appears to be standardization itself. CHS deployed a single, well-designed template across its facilities, and that template happened to be patient-centered. Nonprofit systems with more facility autonomy often produce inconsistent, locally authored forms of variable quality. Standardization is a double-edged sword — it can propagate bad templates as easily as good ones — but in CHS's case, someone at the system level invested in getting the template right, and every facility benefited.

## 5. Forms Cite the Wrong State's Laws

Multiple organizations cite statutes from the wrong state. AdventHealth Central Texas (Killeen, TX) cites the Illinois Mental Health and Development Disabilities Confidentiality Act on forms served at Texas facilities. Proliance Surgeons (Seattle, WA) cites California's Confidentiality of Medical Information Act instead of Washington's RCW 70.02. Ironwood Cancer & Research Centers (Arizona) references Washington State's RCW 70.24 on Arizona forms.

These aren't footnote errors — they're the legal foundations for sensitive-information consent sections governing HIV, mental health, and substance use records. The pattern reveals that multi-state health systems and practice groups copy authorization form templates across state lines without localized legal review. A patient in Texas consenting to HIV record release under Illinois law is consenting under a statute that has no force in their jurisdiction. Whether this invalidates the authorization is a legal question; that no one caught it is an organizational one. AdventHealth's case is particularly telling: their older, locally authored 2005 form got the Texas citations right, while the 2022 system-wide replacement introduced the Illinois error.

## 6. East Georgia Healthcare Center: The Inverted Form

East Georgia Healthcare Center (Swainsboro, GA; nonprofit FQHC) presents a conceptually perfect error: the only ROI forms on its website authorize other providers to send records *to* EGHC — the exact inverse of what a patient requesting their own records needs. The organization invested in bilingual forms and a modern RightSignature e-signature platform, applying genuine digital sophistication to the wrong direction entirely. A patient visiting the forms page encounters a polished workflow for a purpose that doesn't serve them.

## 7. Ghost Artifacts Haunt Patient-Facing Documents

Several findings reveal that ROI forms were never reviewed from a patient's perspective. Tenet Healthcare facilities (Good Samaritan Medical Center, FL and Piedmont Medical Center, SC) publish forms with visible mail-merge placeholders — `«PatientNumber»`, `«PatientName»` — raw database fields staring at patients. Bath Community Hospital's scanned form renders "Patient" as "Pa ent" and "authorization" as "authoriza on" due to broken ligature encoding. Memorial Healthcare System's English PDF is bloated to 2.45 MB because it contains hidden template debris — staff business cards, physician rosters, internal labels — that produce garbled output for screen readers. Hendrick Health misspells "HIPAA" as "HIPPA" in the opening paragraph of its forms. U.S. Dermatology Partners has maintained an uncorrected "IDS" (for "AIDS") typo since 2017.

These are not edge cases. They are symptoms of a systemic pattern: ROI forms are authored for internal HIM workflow, published to the web as an afterthought, and never tested from a patient's perspective. No one at these organizations has apparently downloaded their own form, opened it in a PDF reader, and attempted to complete it.

## 8. Hyper-Local Language Access in Unexpected Places

The most demographically responsive language choices come not from major urban health systems but from small community organizations. Prevea Health (Green Bay, WI), an independent physician practice, offers forms in English, Spanish, Hmong, and Somali — reflecting northeastern Wisconsin's specific refugee communities. Olmsted Medical Center (Rochester, MN), a 61-bed independent practice, offers English, Spanish, and Somali forms, responsive to Rochester's Somali population. Broward Health (South Florida) provides English, Spanish, Haitian Creole, and Portuguese — four languages.

Meanwhile, Sea Mar Community Health Centers (Seattle FQHC), explicitly serving diverse immigrant communities, offers forms only in English. The disconnect between stated mission and form availability is striking. The organizations making hyper-local language investments are doing so without mandates or obvious incentives — they're simply paying attention to who walks through their doors.

## 9. Liability Waivers as a Condition of Access

Multiple organizations embed liability waivers into their ROI forms, requiring patients to release the facility from legal responsibility as a precondition for receiving records. Grady Memorial Hospital — Atlanta's public safety-net hospital — requires patients to agree they "will not hold Grady... responsible for anything that may happen from the use or release of my PHI." Good Samaritan Medical Center and Rhode Island Hospital include similar provisions. Conditioning a fundamental HIPAA right on a liability waiver is both legally questionable and ethically concerning, particularly at safety-net institutions serving vulnerable populations who may feel they have no choice but to sign.

## 10. Interoperability Options Are Emerging — But Barely

A handful of organizations are beginning to offer machine-readable health information exports on their ROI forms, signaling awareness of the 21st Century Cures Act. Samaritan Health Services (OR) offers a dedicated "Computer Readable EHI Export Request" form in English and Spanish. Owensboro Health (KY) lists "EHI Export" as a delivery format with detailed explanations covering all ePHI in TSV format. Emory University Hospital, Bayshore Medical Center (Hackensack Meridian), and HCA facilities offer "EHI Export" or "USCDI release request" options.

These are vanishingly rare — appearing at perhaps five organizations across nearly 200 studied — but their existence on paper ROI forms is itself surprising. The Cures Act's interoperability provisions were designed primarily around API-based access (patient portals, FHIR endpoints), not paper authorization workflows. That some organizations are bridging the two worlds — even imperfectly, even with jargon like "Requires Direct Address or National Provider Identifier" that would baffle most patients — suggests early awareness that records access is evolving beyond fax-and-mail.

## What This Tells Us

The overarching story is not that healthcare organizations lack the *ability* to serve patients well through their ROI processes. The capability exists. Small hospitals prove it with creative low-cost solutions. For-profit chains prove it with well-designed standardized templates. Individual facilities prove it with hyper-local language investments and interoperability experiments.

The problem is that patient records access is institutionally orphaned. It sits at the intersection of HIM departments, legal/compliance teams, IT, and web communications — owned by everyone and no one. Forms get updated for legal reasons without preserving digital usability. Templates get copied across state lines without legal review. Documents get published to websites without anyone testing them as a patient would. The result is a landscape where a 25-bed rural hospital in Kentucky can outperform a 1,400-bed academic medical center — not because the small hospital has more resources, but because someone there actually cared about the patient's experience of requesting their own records.
