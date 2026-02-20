# Worst Barriers to Patient Record Access: A Cross-Study Synthesis

## Introduction

This analysis synthesizes findings from approximately 200 healthcare organizations across the United States, examining how well providers serve patients who attempt to exercise their HIPAA Right of Access (45 CFR § 164.524) by requesting their own health records online. The picture that emerges is not one of deliberate obstruction but of pervasive institutional indifference — a healthcare system that has digitized billing, scheduling, and clinical workflows while leaving patient access infrastructure stranded in the fax era. The barriers documented below are organized by type, drawing the most egregious examples from across all batches.

---

## 1. Forms That Cannot Be Found

The most severe barrier is the most basic: patients cannot begin the process at all because no usable form exists online.

**Complete absence.** Canton-Potsdam Hospital (NY), orphaned during a Rochester Regional Health acquisition, has no ROI form on any live website. The only forms ever recovered came from the Wayback Machine. Desert Valley Hospital (CA), part of the for-profit Prime Healthcare system, describes a records request process on its website but publishes no downloadable form — the only usable authorization was found on a sister facility's site. Consensus Health (NJ) has no patient forms page, no medical records section, and no ROI form anywhere on its website; the sole form discovered was an unbranded PDF on a third-party CDN with no submission instructions and no organizational identification.

**Broken links and defunct sites.** The University of Mississippi Medical Center's English-language PDF link returns a 404 error; the form was only recoverable from a third-party caching site. Troy Regional Medical Center's (AL) form exists exclusively on a defunct legacy website (trmc.fasthealth.com) with no link from the current site, which itself returns 502 errors on its Patient Info page. ENT & Allergy Associates, a practice with 80+ offices across four states, has its ROI form as an orphaned 2009-era Word document linked from no website page — discoverable only via a `filetype:doc` search.

**Technical blocking.** Cottage Hospital (NH) has its entire website behind Cloudflare Turnstile bot protection, preventing programmatic and sometimes even direct browser access. Forms were only retrievable via Wayback Machine archives.

These findability failures span facility types — from major academic medical centers to small rural hospitals to large multi-state practices — suggesting the problem is not resource-dependent but reflects a systemic blind spot in healthcare web management. Organizational transitions (acquisitions, website redesigns, system consolidations) are a recurring trigger: patient access pages are among the first casualties of migration and among the last to be rebuilt.

## 2. Missing Submission Instructions

The second most pervasive barrier is a form that can be found and completed but provides no indication of where to send it. This pattern appeared at organizations of every size and type across all batches: Consensus Health, Cottage Hospital, Colquitt Regional Medical Center (GA), Abbeville Area Medical Center (SC), GI Alliance (TX), ENT & Allergy Associates, Arizona Community Physicians, Black River Memorial Hospital (WI), Ironwood Cancer & Research Centers (AZ), and Advocate Good Samaritan Hospital (IL), among others.

GI Alliance's form is particularly striking: a major for-profit practice network provides a form with blank provider identity fields and no submission address, fax number, or email. A patient who completes it literally cannot determine where to send it. Even Advocate Good Samaritan — which produced one of the better-designed dedicated patient access forms in the study — omits all return instructions.

This is the most widespread single defect in the dataset and appears to stem from a simple design oversight: forms are created by Health Information Management departments for internal use and published online without considering that a patient downloading the PDF at home has no institutional context. The fix is trivial — add an address and fax number — which makes the prevalence of this omission all the more telling about how little attention patient-facing workflows receive.

## 3. Fees That Likely Exceed HIPAA Limits

HIPAA limits fees for patient access requests to reasonable, cost-based amounts. Several organizations impose fee structures that appear to exceed this standard, often by failing to distinguish patient self-access from third-party authorization:

- **JPS Health Network (TX):** $75 flat fee for electronic delivery and $30 minimum for the first 10 pages.
- **UF Health Shands (FL):** $1.00/page applied uniformly with no patient access distinction.
- **Saratoga Hospital / Albany Med (NY):** $0.75/page applied uniformly across the health system.
- **Lincoln Hospital (WA):** $26 base plus $1.17/page, citing an expired state fee schedule from 2017–2019.
- **MUSC Health (SC):** Mentions "search and duplication" fees for patient requests — HIPAA does not permit search fees for patient access.
- **UPMC Presbyterian (PA):** States "records will be sent upon receipt of payment," potentially conditioning access on prepayment.

HHS/OCR has taken enforcement actions against similar fee structures. The pattern of applying third-party fee schedules to patient access requests suggests these organizations have never separately considered their obligations under the Right of Access — they treat all records requests as equivalent regardless of who is asking and why.

## 4. Witness Signature Requirements

HIPAA does not require witness signatures for patient access requests, yet this requirement appeared at a striking number of organizations: AdventHealth Central Texas (one witness required for all requests), Abbeville Area Medical Center (SC, two witnesses required), Troy Regional Medical Center (AL), Tioga Medical Center (ND), Duly Health and Care (IL, witnesses required specifically for "Personal Reasons" requests — directly targeting patient self-access), Springhill Medical Center (AL), Community Health Center of Central Missouri, DHR Health (TX), Millinocket Regional Hospital (ME), Cottage Hospital (NH), Bath Community Hospital, Lane County Hospital (KS), and MUSC Health (SC).

Abbeville's requirement for two witnesses is the most burdensome instance — a patient must print the form, handwrite it, locate two witnesses, obtain their signatures, and then independently determine where to submit. For a rural critical access hospital, this is a particularly heavy lift. Duly Health and Care's form is the most targeted, requiring witnesses specifically for non-care requests including "Personal Reasons," which is precisely the category that covers patient self-access.

This pattern spans regions and facility types but appears more frequently at smaller and Southern facilities. It likely reflects widespread misunderstanding of HIPAA requirements or the uncritical adoption of form templates designed for third-party authorizations, where witness requirements may have some state-law basis.

## 5. Social Security Number Collection

Multiple organizations request full Social Security Numbers on ROI forms: Decatur County Hospital (IA), Nemaha Valley Community Hospital (KS), Lane County Hospital (KS), UMMC (MS), Desert Valley Hospital (CA), Springhill Medical Center (AL), DHR Health (TX), ENT & Allergy Associates, Piedmont Medical Center (SC), Fisher-Titus Medical Center, Rio Grande Hospital, and Ascension Saint Thomas Rutherford.

SSNs are unnecessary for patient identification in the records request context — medical record numbers, dates of birth, and addresses are sufficient. Collecting SSNs on documents routinely transmitted by fax or mail creates meaningful identity theft risk, particularly at smaller facilities with less security infrastructure. ENT & Allergy Associates' form, dating to 2009, combines SSN collection with an orphaned, unfindable document — a worst-of-both-worlds scenario.

## 6. Non-Fillable and Inaccessible Documents

The vast majority of organizations publish non-fillable PDFs, even when the underlying documents are digitally authored. This forces a hybrid workflow — download digitally, print, handwrite, scan or fax — that is worse than either a pure paper or pure digital process.

The most extreme cases involve image-only scans with no text layer, rendering them completely inaccessible to screen readers and assistive technology. Black River Memorial Hospital's (WI) PDF renders virtually all text as 970 embedded images. Colquitt Regional Medical Center (GA), Troy Regional Medical Center, JPS Health Network, Tioga Medical Center (ND), Nemaha Valley Community Hospital, and Mayers Memorial Hospital District (CA) all provide image-only scans.

JPS Health Network exemplifies the problem most damningly: its 2025 HIE forms are modern fillable PDFs with encrypted email submission, proving the organization has the capability to produce accessible documents. The patient-facing ROI form remains a 2018 image-only scan. Similarly, Ironwood Cancer & Research Centers' provider-facing incoming records form has 22 fillable fields while the patient-facing form has zero. These are not capability limitations — they are priority statements.

## 7. Sensitive Information Handling

Organizations split between two problematic approaches to sensitive health information (mental health, substance abuse, HIV/AIDS, genetic testing):

**All-or-nothing bundling.** Cone Health (NC), AdventHealth Central Texas, Abbeville Area Medical Center, and others bundle consent for all sensitive categories into the authorization — signing the form authorizes release of everything, with no opt-out. A patient requesting general medical records who wishes to protect sensitive information has no mechanism to do so.

**Physician gatekeeping.** Mercy General Hospital (CA, Dignity Health/CommonSpirit) requires physician approval before releasing HIV test results and caregiver approval for psychiatric records to the patient themselves. Under HIPAA's Right of Access, providers may deny access only in narrow, reviewable circumstances — building physician approval into the default workflow likely exceeds these limits.

## 8. Misleading Legal Language and Intimidation

Several forms use language that could discourage patients from exercising their rights:

- **Millinocket Regional Hospital** warns that "refusal or revocation may result in improper diagnosis or treatment, denial of health benefits" — alarming language that applies only to third-party scenarios but is presented without context on a general authorization form.
- **Mayers Memorial Hospital District** opens with "Failure to provide all information requested may invalidate this authorization" — designed to intimidate rather than assist.
- **Boulder Medical Center (CO)** states that "Due to HIPAA regulations regarding security of electronic transmissions, we cannot email records to anyone but your personal email" — mischaracterizing HIPAA, which explicitly allows patients to direct records to third parties.
- **Troy Regional Medical Center** demands that "ALL fields MUST be completed or authorization is invalid," exceeding HIPAA requirements.
- **Grady Memorial Hospital (GA)** bundles a broad liability waiver ("not to hold Grady responsible for anything that may happen from use or release of PHI") into the authorization.

## 9. Submission Limited to Physical Delivery

Even in 2025, some organizations accept completed forms only via in-person delivery or postal mail. Grady Memorial Hospital — a major public safety-net hospital in Atlanta serving vulnerable populations — offers no fax, no email, and no portal for form submission. OSU Wexner Medical Center, a flagship academic institution, similarly requires patients to print, handwrite, and physically mail their authorization. For patients without reliable transportation or mailing supplies, these restrictions can be prohibitive.

---

## Accidental or Structural?

The overwhelming pattern is **institutional indifference, not intentional obstruction.** The worst barriers — unfindable forms, decade-old scans, missing submission instructions — stem from organizations that have never invested in patient access infrastructure or that let it atrophy through system transitions and website redesigns. Canton-Potsdam, Troy Regional, and Mayers Memorial exemplify facilities where records processes have been neglected for a decade or more.

However, some barriers have a more structural character. The universal use of third-party authorization forms for patient self-access is not an accident — it reflects an industry that has not conceptualized patient access as a distinct workflow deserving its own design. Fee structures that fail to distinguish patient access from third-party requests suggest organizations have never separately considered their Right of Access obligations. Physician gatekeeping at Mercy General embeds clinical hierarchy into what should be an administrative process. And the contrast at JPS and Ironwood — where provider-facing forms are modern and fillable while patient-facing forms remain scanned images — reveals a structural prioritization of institutional convenience over patient rights.

The small number of organizations that created dedicated patient access forms (Barnes-Jewish, Advocate Good Samaritan, Providence Sacred Heart, GHC-SCW, Aurora/Advocate Health, UTMB, Flowers Hospital) consistently delivered better experiences. This suggests the single most impactful intervention is not fixing individual form defects but reconceptualizing the patient access pathway as a first-class workflow.

## Cumulative Impact

No single barrier documented here is insurmountable for a determined, resourceful patient. But patients are not typically determined and resourceful at the moment they need their records — they may be managing a new diagnosis, transferring care, or navigating insurance disputes. The cumulative effect of these barriers is a system where exercising a clear legal right requires navigating a multi-step obstacle course: find the form (if it exists), determine which of several forms applies (if there are multiple), complete it by hand (because it's not fillable), find a witness (because the form demands one), figure out where to send it (because the form doesn't say), and potentially pay a fee that exceeds what HIPAA allows — all before the organization's 30-day response clock even starts.

For vulnerable populations — patients at safety-net hospitals, rural critical access facilities, and federally qualified health centers — these barriers compound existing disadvantages. The cruelest irony is that the organizations serving the most vulnerable patients often have the worst access processes: Grady Memorial's paper-only submission, Abbeville's two-witness requirement, and the unfindable forms at small rural hospitals are not problems for patients with advocates, cars, and printers. They are problems for patients without them.

## Most Critical Issues Requiring Attention

1. **Forms that don't exist or can't be found** remain the highest-severity barrier. Organizations that have undergone acquisitions or website migrations should audit their patient-facing records pages immediately.

2. **Fee structures that fail to distinguish patient access** from third-party authorization likely violate HIPAA and should be reviewed — particularly at JPS Health Network, UF Health Shands, Saratoga/Albany Med, and MUSC Health.

3. **Witness signature requirements** have no HIPAA basis for patient self-access and should be removed universally. The two-witness requirement at Abbeville Area Medical Center is the most extreme example.

4. **Missing submission instructions** is the most easily fixable widespread defect. Every form published online should include at minimum an address and fax number.

5. **SSN collection on faxable documents** creates unnecessary identity theft risk and should be eliminated across the industry.

6. **The wrong-form problem** — using third-party authorization forms for patient self-access — is the root cause of many downstream barriers. Organizations should create purpose-built patient access pathways, as the best-performing organizations in this study have done.
