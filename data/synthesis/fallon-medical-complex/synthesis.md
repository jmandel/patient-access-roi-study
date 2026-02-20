# Fallon Medical Complex — Organization Synthesis

## Overview

Fallon Medical Complex (FMC) is a small independent nonprofit critical access hospital in Baker, Montana — a rural community in the state's eastern plains. FMC publishes three documents on its Information Management page: a primary ROI authorization form (form-1), a verbal release form (form-2), and a Notice of Privacy Practices (form-3). The primary ROI form is the relevant document for a patient seeking copies of their own health records.

## Access Pathway: Generic Authorization, Not Patient-Specific

FMC does not offer a dedicated patient access pathway. The primary form — "Authorization for Access, Use and Disclosure of Protected Health Information (PHI)" — is a generic HIPAA authorization that serves both patient self-access and third-party release. A patient wanting their own records must navigate the same "Release From" / "Release To" fields used when authorizing disclosure to an insurer or attorney. The form does list "Personal" as a purpose option, which is helpful, but provides no guidance on how a patient should fill in the directional fields when they are both the requester and the recipient. This is a common pattern among small facilities, but it means the patient must figure out which parts of the form apply to their situation.

The verbal release form (form-2) is narrowly scoped to phone-based verbal sharing and explicitly directs patients to form-1 for copies. The NPP (form-3) describes patient rights including the right to inspect and copy records but does not cross-reference the actual forms.

## Retrieval Experience

Finding the forms was straightforward. Two web searches led directly to the Information Management page at fallonmedical.org, where all three documents are clearly linked. No login walls, CAPTCHAs, or bot blocking were encountered. The one notable issue: the primary ROI form is published as a Microsoft Word .doc file rather than a PDF, hosted on a Google Cloud Storage bucket with "tmp" in the URL path — an unusual and potentially fragile hosting arrangement for a permanent compliance document.

## Form Document Quality

The primary form (form-1) is a 2-page document with **zero fillable fields**. It was published as a .doc file and had to be converted to PDF for this study. The lack of fillable fields means every patient must print and handwrite their information. The form has a text layer (not a scan), uses 5 fonts, and is visually legible, but the non-interactive format is a significant accessibility gap — especially for a geographically isolated community where patients may live far from the facility.

The layout follows a logical top-to-bottom flow: patient demographics → release routing → purpose → record types → date range → disclosure format → sensitive information → patient rights → signatures. The information-type checkboxes offer good granularity (10 categories from "Emergency Report/Records" to "Entire Medical Record"). The dual sensitive-information sections — one for categories to include, one to exclude — are structurally sound but confusingly similar, with identical checkbox labels distinguished only by a header word.

Language is a mix of accessible and legalistic. The "I Understand That" section covers core rights (revocation, non-conditioning, inspection under §164.524) but is dense. There are two spelling errors ("immunodefiency" twice, "proving" for "providing") and a confusing interstitial note ("IF SENDING RECORDS TO FMC, PLEASE MAIL IF MORE THAN 20 PAGES") apparently directed at other facilities rather than patients.

## Barriers and Bright Spots

**Barriers are minimal.** No notarization is required (the witness signature is in the "For Office Use Only" section). Photo ID is required for fax, mail, or email submissions — reasonable identity verification, though potentially burdensome for patients without government-issued ID. The statement "A HIM professional will supervise the review of my medical record" adds friction to in-person review that may feel paternalistic.

**Notable bright spots for a rural CAH:**
- **First copy free** — the form explicitly states patients may receive the first copy without charge, reducing financial barriers.
- **Seven disclosure format options** — paper mail, USB drive/disc, electronic fax, review only, paper pick-up, unencrypted email (with informed consent), and patient portal access. This is remarkably comprehensive for a 25-bed rural hospital.
- **Patient portal integration** — offering portal signup directly from the ROI form bridges paper and digital workflows.
- **Unencrypted email with informed consent** — respects patient autonomy while ensuring awareness of risks.

Submission of the completed form appears possible via fax, mail, or email (implied by the ID requirement language), meaning patients do not need to physically visit the facility.

## Overall Assessment

Fallon Medical Complex demonstrates a sincere effort to serve patients within the constraints of a small rural facility. The breadth of delivery format options is genuinely impressive and patient-centered. However, the form itself is a generic third-party authorization rather than a patient access request, published in an outdated format (.doc) with no fillable fields. A patient must print, handwrite, and fax or mail the form — a workflow that falls short of modern accessibility expectations. For a critical access hospital in rural Montana, FMC does better than many peers, but meaningful improvements are within reach: converting to a fillable PDF, separating the patient access pathway, and adding clear instructions for self-access requests would significantly improve the experience.
