# Surprising Findings — Batch 22

## A 25-Bed Rural Hospital Out-Innovates on Delivery Options

The most striking finding in this batch is **Fallon Medical Complex** (Baker, Montana) — a 25-bed critical access hospital serving a frontier region of seven counties across Montana and North Dakota. Despite being among the smallest and most resource-constrained facility types in U.S. healthcare, FMC offers **seven disclosure format options**: paper mail, USB drive/disc, electronic fax, in-person review, paper pick-up, unencrypted email (with informed consent), and patient portal access. This breadth of delivery options would be impressive for a large urban health system; for a rural CAH it is genuinely remarkable. The inclusion of USB drive as a delivery medium is an unusually practical accommodation for patients who may have intermittent internet access — a real consideration in eastern Montana. Equally notable is the portal signup integrated directly into the ROI form, bridging paper and digital workflows in a single document. This defies the assumption that small rural facilities lack digital sophistication.

Yet FMC simultaneously publishes its form as a Microsoft Word `.doc` file hosted on a Google Cloud Storage bucket with "tmp" in the URL path — an improvised, fragile hosting arrangement that could break at any time. The juxtaposition of thoughtful patient-facing options with ad hoc technical infrastructure suggests that FMC's patient-centeredness outpaces its IT resources. The form itself has zero fillable fields and contains spelling errors ("immunodefiency" twice), but these rough edges coexist with a "first copy free" policy — an explicit financial accommodation that many larger hospitals fail to offer.

## An FQHC's Abandoned PDFs and the Portal Transition Gap

**Community Health Center, Inc.** (Middletown, CT), one of Connecticut's largest FQHCs serving over 145,000 patients, illustrates an underappreciated problem in healthcare digitization: the **zombie form**. CHC's patient forms page has transitioned to Luma Health online portals, but the legacy PDF ROI forms (English and Spanish, dated 2019) remain discoverable via direct web search — still hosted in their WordPress uploads directory, just no longer linked from the site navigation. A patient who searches "Community Health Center CT medical records form" could end up with a 2019 PDF that may no longer be the organization's preferred workflow, while the "correct" pathway is now a portal that the patient might never find.

This creates a bifurcated experience: tech-savvy patients who navigate the website find the portal; patients who search the web find orphaned PDFs. Neither group gets a clear signal about which pathway is current. The organization appears to be mid-migration with no sunset strategy for the old forms.

## The Generic Form Problem Persists Even at Mission-Driven Organizations

Both organizations in this batch — an FQHC explicitly serving underserved populations and a CAH serving a frontier community — use **generic HIPAA authorization forms** that conflate patient self-access (§164.524) with third-party release (§164.508). At FMC, a patient wanting their own records must navigate "Release From" / "Release To" fields designed for inter-provider exchanges. At CHC, the form is titled "Authorization to Release **or** Obtain Health Information," serving dual purposes that could confuse patients about their rights. Both forms ask for a reason for the request — not required for patient self-access under HIPAA — and neither explains how self-access differs from third-party authorization.

This is especially surprising for the FQHC. Community health centers exist specifically to reduce barriers for vulnerable populations, yet CHC's records request workflow imposes the same generic-form friction found at for-profit systems. The default 3-year scope limitation on CHC's form could inadvertently prevent patients from obtaining their complete record if they don't know to explicitly request a broader range.

## Minor Oddities

- FMC's form includes the note "IF SENDING RECORDS TO FMC, PLEASE MAIL IF MORE THAN 20 PAGES" — a message clearly directed at other facilities, not patients, embedded in a patient-facing document. This suggests the form doubles as an inter-provider communication tool.
- FMC requires "A HIM professional will supervise the review of my medical record" for in-person access — paternalistic language that implies the patient cannot be trusted alone with their own records.
- CHC's Birth to Three program has its own pre-filled ROI variant (form-1), showing how departmental siloing creates form proliferation even within small organizations.
