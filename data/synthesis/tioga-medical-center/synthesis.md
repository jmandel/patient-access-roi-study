# Tioga Medical Center — Org-Level Synthesis

## Available Forms and Pathways

Tioga Medical Center, a small independent critical access hospital in Tioga, North Dakota, offers a single ROI form: an "Authorization for Release of Medical/Confidential Information" available from its Health Information Management (HIM) page at https://www.tiogahealth.org/him. The form is provided in both PDF and Word (.docx) formats. No patient portal, online request wizard, or dedicated patient access form exists. The only submission options apparent from the form are fax (701-664-2646) and mail (P.O. Box 159, Tioga, ND 58852).

## Access Pathway Differentiation

Tioga Medical Center does **not** differentiate between patient self-access and third-party release. The sole form uses a "Release From" / "Release To" structure that assumes records are moving between facilities or to a third party — not to the patient themselves. A patient requesting their own records would need to awkwardly list themselves in the "Release To" field, navigating a paradigm that was never designed for them. There is no mention of HIPAA's Right of Access (§ 164.524), no dedicated patient access pathway, and no guidance on how patients requesting their own records should complete the form. This is a textbook example of the "wrong form" problem: the organization funnels all requesters through a generic authorization form built for inter-institutional disclosure.

## Retrieval Experience

Finding the form was straightforward. A basic web search immediately surfaced the HIM page, and the form is directly linked with no login required. For a small critical access hospital, this represents reasonable discoverability. The only minor issue is that the download URL is a Wix-generated hash path that gives no indication of the document's content, and the HIM page provides little context about when or why a patient would use this form.

## Form Document Quality

The PDF is an **image-only scan** — a CCITT fax-encoded grayscale image at 200 DPI with zero text layer, zero fillable fields, and zero embedded fonts. It is completely inaccessible to screen readers and fails basic digital accessibility standards. A patient must print the form and fill it out by hand. The availability of a Word (.docx) version partially mitigates this: a patient with Microsoft Word could type into the document, but this depends on having compatible software and the initiative to seek out the alternative format.

The form itself is a single page with a logical top-to-bottom flow: patient demographics, release-from/to facility information, date range, purpose checkboxes (6 options), record type checkboxes (12 categories), sensitive records authorization, and signature lines. The 12 checkbox categories for record types — from emergency room records to clinic notes — provide genuinely useful granularity. However, a dense legal paragraph at the bottom covers revocation rights, insurance implications, and re-disclosure warnings in a single unbroken block with no visual emphasis on key patient rights.

## Barriers and Concerns

The form includes a **witness signature line** — while not explicitly marked as required, its presence as a structured field implies it is expected. HIPAA does not require a witness for patient access requests, and this could deter patients who lack someone available to witness. The form mentions no fees, states no response timeline, and provides no delivery format options (electronic, CD, mail). An internal tracking sidebar ("Records given □ / Number of Pages / Initials") sits unlabeled among patient-facing fields, creating potential confusion.

## Strengths

Despite its limitations, the form has some positive elements: a clear voluntariness statement ("I can refuse to sign this authorization. I need not sign this form in order to assure treatment"), explicit revocation rights, a reasonable six-month authorization window, and granular record-type selection. The dual-format availability (PDF + Word) shows some awareness of accessibility needs, even if the execution is lacking.

## Overall Assessment

Tioga Medical Center provides a minimally functional records request process that reflects the resource constraints typical of small independent critical access hospitals. The form is easy to find and covers the basics, but it is technically primitive (image-only scan), not designed for patient self-access, and includes a potentially unnecessary witness requirement. A patient could navigate this process, but they would need to print the form, handwrite their information, figure out that they belong in the "Release To" field, and fax or mail it back. The organization earns a **C grade** — adequate findability cannot fully compensate for poor technical accessibility and a form paradigm that treats patient self-access as an afterthought.
