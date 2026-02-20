# Michigan Medicine – University of Michigan Health: Synthesis

## Forms and Pathways

Michigan Medicine provides three publicly available forms related to medical records, though only one is relevant for patient self-access. **Form-1** (70-10015, VER: A/24) is the current "Authorization to Release Copies of a Medical Record," a 3-page document that serves as the primary ROI form for both patient self-requests and third-party releases. **Form-2** is an outdated 2011 version of the same form, still indexed on the legacy `medicine.umich.edu` domain — a housekeeping gap that could confuse patients. **Form-3** is an inbound records request form (authorizing Michigan Medicine to pull records from other providers), unrelated to patient self-access.

## Access Pathway Differentiation

The primary form is a generic HIPAA authorization that serves dual purposes, but it does meaningfully differentiate patient self-access from third-party release. Item 2 provides a dedicated "Myself" checkbox with delivery options tailored to patients (Patient Portal, electronic email web link, US Mail), while item 3 handles third-party recipients with its own delivery methods. This structural separation gives patients a clear path without needing to decode which sections apply to them. Additionally, the form prominently promotes the **MyUofMHealth Patient Portal** as a free, zero-cost delivery channel — a strong nudge toward the most convenient option. However, the form remains fundamentally an authorization rather than a dedicated patient access request, and the fee schedule and prepayment language do not clearly exempt patient self-requests.

## Retrieval Experience

Finding the form was straightforward. A basic web search for Michigan Medicine's ROI form immediately returned direct links to the current PDF on `uofmhealth.org`. No site navigation was required. The download was unobstructed — no CAPTCHAs or bot blocking on the primary domain (though the legacy `medicine.umich.edu` domain had Cloudflare challenges). The one annoyance is the uninformative filename (`ROI_.pdf`).

## Form Document Quality

The form has a proper text layer and clean digital design — it is not a scan. However, despite the full text layer, **no fillable/interactive PDF fields exist** (metadata confirms `fillable_field_count: 0`). A patient must print and handwrite or use a PDF annotation tool. For submission, fax (734-936-8571) and mail are available; notably, **no walk-in services** are offered — a departure from the 2011 version which accepted in-person delivery at any registration desk.

The layout uses numbered sections (1–9) that follow a logical progression: voluntariness statement → patient info → self/third-party selection → purpose → record set → expiration → revocation → signature → fees. The **package-based record selection** system is a genuine bright spot: instead of requiring patients to specify individual record types, it offers pre-built packages (Package 1: Key Clinical Documentation; Package 2: All Clinical Documentation) mapped to common purposes. This simplifies what is typically one of the most confusing parts of any ROI form.

Language is bureaucratic but generally comprehensible. Legal disclosures (voluntariness, revocation rights, re-disclosure risks) are clearly stated. Some passages are dense, particularly the insurance authorization exception clause. The fee schedule on page 3 is presented as a clear table with a helpful "No Cost Services" sidebar.

## Barriers and Compliance

No notarization or witness is required. Fees are disclosed transparently: portal access is free, electronic delivery to patients costs $6.89, and third-party requests incur higher per-page fees. The $6.89 patient fee is close to HIPAA's cost-based guidance but not explicitly justified as cost-based. More concerning is the prepayment language — "Some records requested for legal, insurance, or personal use may require a prepayment" — where "personal use" could be read to include patient self-requests, potentially conflicting with HIPAA's prohibition on conditioning access on payment.

The authorization defaults to a 60-day expiration, which is relatively short given the stated turnaround of 5–7 business days (with a caveat to "allow up to 30 days"). Turnaround time discrepancies between pages 2 and 3 add confusion. The form also names **Vital Chart (VRC)** as the third-party vendor handling records fulfillment — a transparency bright spot that sets patient expectations for communications from an unfamiliar sender.

## Overall Assessment

Michigan Medicine provides a competent, moderately patient-centered records request process. The form is well-organized, the package system simplifies record selection, and the portal promotion guides patients toward a free pathway. However, the lack of fillable PDF fields, the ambiguous prepayment language, and the elimination of walk-in services create friction. The continued availability of the outdated 2011 form is a minor but avoidable risk. This is a solid B-level experience: functional and accessible, with room for improvement in digital form design and compliance clarity.
