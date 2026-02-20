# Batch 4: Surprising Findings

## The Wrong-Direction Form Problem

East Georgia Healthcare Center (EGHC), an independent nonprofit FQHC in Swainsboro, GA, presents perhaps the most striking finding in this batch: the only authorization form available to patients is designed for **incoming** records transfers — authorizing other providers to send records *to* EGHC — not for patients to request their own records *from* EGHC. A patient visiting the forms page encounters a polished RightSignature e-signature workflow, but for a purpose that is the exact inverse of what they need. The organization invested in bilingual forms and a modern e-signature platform, yet the fundamental use case — patient self-access — is entirely unserved. This is not a case of a generic form being repurposed; the form literally points the wrong direction.

## Accessibility Regression at Scale: Image-Only Scans Replacing Text PDFs

Two Bon Secours Mercy Health facilities (Springfield and Fairfield) reveal a troubling pattern: the system replaced functional text-layer PDFs with **image-only scans** as their currently linked authorization forms. Mercy Health–Springfield's system-wide form has only 46 extractable characters, while the older regional text-based version sits at an undiscoverable URL. Mercy Health–Fairfield shows the same regression — a previously functional Cincinnati-region text PDF was supplanted by a 2024 image scan. This isn't a small rural facility cutting corners; it's a major health system actively degrading document accessibility in recent updates.

## Prevea Health's Hmong and Somali Forms: Hyper-Local Language Choices

Prevea Health, an independent nonprofit physician practice in Green Bay, WI, offers its ROI form in four languages: English, Spanish, **Hmong**, and **Somali**. This is the only organization in the batch with Hmong or Somali translations — languages that reflect Green Bay's specific refugee resettlement demographics rather than the generic Spanish-only multilingual approach most organizations take. For a practice with zero fillable fields and no submission instructions on its form, this hyper-local language investment is a striking contrast: deeply attentive to community demographics while neglecting basic digital usability.

## The Vanishing Form: UMMC's Broken English PDF

The University of Mississippi Medical Center, a major government-affiliated teaching hospital, has a **broken link** for its English-language ROI form on its own website. The English PDF returns HTTP 404. The only surviving version was found on a third-party caching site (pdf4pro.com). Meanwhile, the Spanish version — with 70 fillable fields — remains live. A patient visiting UMMC's website today who clicks the Release Form link reaches a dead end. The Spanish form is technically superior to the English version it outlived (70 fillable fields vs. zero), creating an unusual situation where the non-English form is the better document.

## AdventHealth Central Texas: A 2005 Form That's Better Than Its 2022 Successor

AdventHealth Central Texas maintains two forms: a system-wide 2022 authorization and a **facility-specific form from 2005**. The 20-year-old form is actually more patient-centered — its first checkbox explicitly reads "Provide me with access to the protected health information specified below," a dedicated patient self-access option absent from the newer system form. Additionally, the 2022 system form references the **Illinois** Mental Health and Development Disabilities Confidentiality Act despite being served at a Texas facility — a copy-paste error from a system-wide template never localized. The older, locally-authored form got the legal citations right.

## Owensboro Health's EHI Export Option: A Rare Interoperability Signal

Owensboro Health, a regional nonprofit community hospital in Kentucky, is the only organization in this batch that explicitly offers an **EHI Export** as a records format option, with a detailed explanation covering "all electronic Protected Health Information across the organization" and naming Community Connect Partners. This aligns with the 21st Century Cures Act's electronic health information provisions and is virtually unheard of on paper ROI forms. The same organization also offers seven format options (Paper, MyChart, EHI Export, Email, Fax, CD, USB) — the most comprehensive delivery menu in the batch — yet its PDF form has zero fillable fields.

## FQHCs Outperform Teaching Hospitals on Pathway Differentiation

A counterintuitive pattern emerges when comparing patient-centeredness scores: two FQHCs — Philadelphia FIGHT (score: 5) and West Tennessee Healthcare (a government hospital, but scoring well on differentiation) — maintain **dedicated patient access forms** separate from third-party authorization, while prestigious teaching hospitals like UCSF, Rhode Island Hospital, and MUSC funnel patients through generic disclosure forms. Philadelphia FIGHT, a small HIV/AIDS-focused community health center, demonstrates better structural understanding of HIPAA's distinct access provisions than Mass General Brigham's 78-fillable-field form, which still treats patient access as a checkbox on a third-party release document. Barnes-Jewish Hospital (BJC HealthCare) is a notable teaching hospital exception, offering a true dedicated patient access form.

## The Liability Waiver Creep

Multiple organizations bundle **liability waivers** into their authorization forms, requiring patients to release the facility from legal responsibility as a condition of accessing records. Grady Memorial Hospital (Atlanta's public safety-net hospital) requires patients to agree they "will not hold Grady... responsible for anything that may happen from the use or release of my PHI." Good Samaritan Medical Center (Tenet/HCA, West Palm Beach) and Rhode Island Hospital (Brown University Health) embed similar waivers. Asking vulnerable patient populations — particularly at a safety-net hospital — to waive accountability to exercise a fundamental HIPAA right is both legally questionable and ethically concerning.

## Mail-Merge Ghosts and Typos Frozen in Time

Good Samaritan Medical Center's 2020 network form displays raw mail-merge placeholders (`«PatientNumber»`, `«PatientName»`) in its sidebar — internal database fields visible to patients. U.S. Dermatology Partners has maintained an uncorrected typo ("IDS" instead of "AIDS") since its 2017 revision. Bath Community Hospital's scanned form renders "Patient" as "Pa ent" and "authorization" as "authoriza on" throughout due to a broken ligature encoding. These artifacts suggest forms that were never reviewed from a patient's perspective — they were authored for internal workflow and published externally as an afterthought.
