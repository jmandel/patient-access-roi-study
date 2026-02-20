# Worst Barriers Deep Dive — Batch 0

## Most Significant Barriers to Patient Record Access

### 1. Canton-Potsdam Hospital (NY) — Form Effectively Unfindable Online
**Overall: D (1.95)**

Canton-Potsdam Hospital, a regional nonprofit in upstate New York affiliated with Rochester Regional Health, has no ROI form on any live website. The only forms recovered were retrieved via the Wayback Machine from the defunct St. Lawrence Health System domain. The parent system's Swellbox/Datavant portal explicitly excludes this facility. A patient's only current option is to call (315) 769-4386 and hope for guidance. This is the most severe findability failure in the batch — a complete absence of any online records request pathway. This appears to be a casualty of a system acquisition that orphaned the facility's patient resources.

### 2. JPS Health Network (TX) — Potentially Illegal Fees and an Obsolete Form
**Overall: D (2.45)**

JPS Health Network, a major government-owned hospital in Fort Worth, charges a **$75 flat fee for electronic delivery** and a **$30 minimum for the first 10 pages** — fee levels that likely exceed HIPAA's reasonable, cost-based limits for patient access requests. HHS/OCR has taken enforcement actions against similar fee structures. The ROI form itself is a 2018 image-only scan with no text layer, no fillable fields, and no accessibility for screen readers. Most damningly, JPS demonstrated the capability to produce modern fillable PDFs with its 2025 HIE forms — meaning the outdated ROI form reflects neglect, not inability. This looks like a pattern of institutional indifference to patient access rights.

### 3. Troy Regional Medical Center (AL) — A Decade of Neglect
**Overall: Not scored in batch data (synthesis only)**

Troy Regional's sole ROI form is a February 2015 image-only scan hosted on a defunct legacy website with no link from the current site. The form requires a **witness signature**, includes a **broad liability waiver**, warns that **"all fields MUST be completed"** or the authorization is invalid, and provides **no submission instructions**. The anti-conditioning language contradicts itself in consecutive sentences. A patient navigating the current website would almost certainly fail to find this form. This represents the deepest neglect of patient access in the batch — a small government hospital that apparently hasn't revisited its records process in over a decade.

### 4. Mayers Memorial Hospital District (CA) — Mislabeled and Inaccessible
**Overall: D (2.35)**

This small critical access hospital in rural California mislabels its ROI form as "Disclosure of Privacy Practices" on its website, hiding it from patients searching for a records release form. The form itself is an image-only scan with no text layer, no fillable fields, and no submission instructions. The Medical Records page has no form link at all. The opening line — "Failure to provide all information requested may invalidate this authorization" — is designed to intimidate rather than assist. For a rural hospital where patients may live far from the facility, this paper-only, instruction-free process is a serious barrier.

### 5. Cone Health (NC) — Bundled Sensitive-Category Consent with No Opt-Out
**Overall: C (2.9)**

Cone Health, a regional nonprofit teaching hospital in Greensboro, bundles consent for mental health, substance abuse, HIV/AIDS, genetic, and reproductive health records into its authorization — signing the form authorizes release of all sensitive categories regardless of what was actually requested, with **no opt-out mechanism**. This is a meaningful autonomy violation for patients who want general medical records but wish to protect sensitive information. The form also lacks submission instructions (no address, fax, or email) and offers two separate ROI forms for hospital vs. medical group with no guidance on which to use. The medical group form embeds a liability waiver as a condition of authorization.

### 6. AdventHealth Central Texas — Witness Requirement for All Requests
**Overall: C (2.9)**

AdventHealth Central Texas explicitly **requires a witness signature for all records requests** — a requirement with no basis in HIPAA and a practical barrier for patients completing the form at home. The form also imposes a 90-day maximum authorization expiration that conflates patient access with third-party authorization timelines, and the system-wide form cites Illinois law at a Texas facility. The bundled all-or-nothing sensitive information disclosure offers no granular opt-out for mental health, substance abuse, or HIV/AIDS records.

### 7. Abbeville Area Medical Center (SC) — Two Witnesses Required
**Overall: C (synthesis only)**

This small critical access hospital in rural South Carolina requires **two witness signatures** marked as mandatory — an unusually burdensome requirement with no HIPAA basis. The form also bundles sensitive-information consent with no opt-out and provides no submission instructions. A patient must print the form, handwrite it, find two witnesses, then figure out independently where to send it.

### 8. Black River Memorial Hospital (WI) — Screen Reader Inaccessible
**Overall: C (3.1)**

This critical access hospital's PDF renders virtually all text as **970 embedded images**, making it completely inaccessible to screen readers and assistive technology. Combined with zero fillable fields and no submission instructions, a visually impaired patient would face an insurmountable barrier. The form provides no documented way to return the completed authorization — no address, no fax number, no email.

### 9. Decatur County Hospital (IA) — SSN Collection and Blank Fee Amounts
**Overall: C (synthesis only)**

This rural critical access hospital collects **Social Security Numbers** on its ROI form — unnecessary for patient identification and a significant identity-theft risk on documents that may be faxed or mailed. The fee disclosure states patients "may impose a fee of [blank]," asking patients to agree to unspecified costs before submitting. The form was last reviewed in March 2018, predating the 21st Century Cures Act information blocking rules.

### 10. Grady Memorial Hospital (GA) — Submission Limited to Physical Delivery
**Overall: C (synthesis only)**

Atlanta's major public safety-net hospital limits form **submission to in-person drop-off and postal mail only** — no fax, no email, no portal. For a safety-net hospital serving vulnerable populations who may lack transportation or mailing supplies, this is a significant access barrier. The form also includes a broad liability waiver and requires a government-issued photo ID, which may burden patients without such documentation.

## Summary of Barrier Patterns

Three systemic patterns emerge across this batch:

**Institutional neglect, not intentional obstruction.** The worst barriers — unfindable forms, decade-old scans, missing submission instructions — stem from organizations that simply haven't invested in their patient access infrastructure. Canton-Potsdam, Troy Regional, and Mayers Memorial all appear to have let their records processes atrophy through system transitions, website redesigns, or simple inattention. This is incompetence and indifference, not active discouragement.

**Paper-era thinking persists in digital distribution.** The vast majority of organizations in this batch (roughly 75%) publish non-fillable PDFs despite being digitally authored documents. They post forms online but haven't adapted them for online completion — creating a hybrid workflow (download digitally, print, handwrite, scan, fax) that is worse than either a pure paper or pure digital process. JPS Health Network epitomizes this: capable of producing modern fillable PDFs but choosing not to for its patient-facing ROI form.

**Sensitive information handling is a compliance minefield.** Organizations split between two problematic extremes: bundling all sensitive categories into a single all-or-nothing consent (Cone Health, AdventHealth Central Texas, Abbeville) or requiring completely separate forms for mental health records (Heartland Community Health Center). Neither approach respects patient autonomy. The best practice — granular per-category opt-in/opt-out checkboxes — is present at some organizations but far from universal.
