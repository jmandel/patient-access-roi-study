# Hospital of the University of Pennsylvania — Org-Level Synthesis

## Forms and Pathways Available

Penn Medicine (the parent system for HUP) provides two main pathways for patients seeking their medical records. The **primary pathway** for patient self-access is the **myPennMedicine patient portal**, which the organization's website explicitly directs patients toward. The **secondary pathway** is a downloadable PDF — the "Authorization for Disclosure of Health Information" (form UPHS-099-9, revised December 2020) — a system-wide authorization form used across all Penn Medicine facilities.

Two versions of this PDF form were found: the current version (form-1.pdf) hosted on Penn Medicine's own infrastructure, and an outdated 2018 version (form-2.pdf) hosted on a third-party neurology practice website. The current form is the basis for this quality assessment.

## Access Pathway Differentiation

Penn Medicine **partially differentiates** patient self-access from third-party release — but only at the website level, not at the form level. The patient access web page directs patients wanting their own records to the myPennMedicine portal, reserving the PDF authorization form for broader disclosure purposes. However, the form itself is a **generic HIPAA authorization** that makes no distinction between patient self-access and third-party release. A patient using the form must fill in their own name in the "I request my PHI to be released to" field, which is functional but not intuitive. The form includes one notable sentence acknowledging patient rights: "I can choose and have the right to have my records released directly to me so that I can review and inspect the materials, including for sensitive information I do not wish to be disclosed to a third party."

## Retrieval Experience

Finding the authorization form required **moderate effort**. A web search surfaced the form from Penn's medical school subdomain (med.upenn.edu). The official Penn Medicine patient access page links to the same form but was initially blocked by **Incapsula bot protection** on programmatic fetches, requiring browser fallback. The form is not immediately discoverable from the Penn Medicine homepage — patients must navigate to Patient Resources → Patient Access Health Information.

## Form Document Quality

The current form (form-1.pdf) is a **strong digital artifact** with **70 fillable interactive fields** — covering patient demographics, facility checkboxes, 14 record-type selections, behavioral health/SUD opt-in, delivery method, and signature blocks. The ADA-accessible designation in the filename suggests intentional accessibility design. The layout is well-organized across two pages: page 1 contains the authorization itself, page 2 provides detailed instructions with submission addresses for six Penn Medicine hospitals.

Language quality is mixed: core instructions are clear, but the authorization section uses dense legal language about redisclosure and revocation. The behavioral health consent language is notably well-written and patient-respectful.

## Barriers and Concerns

**Submission method is the key barrier.** The PDF form must be physically mailed to the appropriate hospital's Medical Records Department — there is no fax submission (Penn Medicine explicitly restricts fax to urgent patient care situations), no email submission of the form, and no online submission pathway for the authorization itself. This makes the PDF pathway a predominantly paper-based process despite the excellent digital form.

**Fee transparency is weak.** The form states Penn Medicine "will charge for copying records in accordance with Pennsylvania, New Jersey and Delaware law" without specifying amounts. This references state law rather than HIPAA's cost-based fee limits for patient access, potentially resulting in overcharging. Radiology images are explicitly free.

**Ambulatory carve-out is buried.** The instruction that "Any Ambulatory/Office Visit requests should be addressed to the individual Physician's Office" is on page 2 and could cause patients to miss outpatient records.

## Notable Strengths

- **70 fillable PDF fields** — among the most thoroughly digitized forms encountered
- **ADA-accessible** PDF design with proper text encoding and interactive elements
- **Granular record selection** with 14 types plus behavioral health/SUD opt-in
- **Explicit patient rights language** acknowledging the right to inspect records directly
- **Free radiology images** — a patient-friendly policy
- **Clear compliance provisions**: 30/60-day response timelines, denial/appeal rights with Chief Privacy Officer contact, no notarization required, treatment not conditioned on signing

## Overall Assessment

Penn Medicine demonstrates institutional competence in form design — the fillable PDF is technically excellent and the instructions are thorough. However, the organization's approach to patient self-access is bifurcated: the portal handles self-access while the PDF form serves as a general-purpose disclosure authorization that doesn't optimize for individual access rights. The mail-only submission requirement for the PDF form is a meaningful barrier. A patient who cannot or does not use the portal faces a paper-based workflow despite the digitally fillable form. For a major academic medical center, the gap between the quality of the form document and the quality of the submission/delivery infrastructure is notable.
