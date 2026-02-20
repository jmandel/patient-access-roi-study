# AdventHealth Central Texas — Org-Level Synthesis

## Overview

AdventHealth Central Texas is a nonprofit community hospital in Killeen, TX, part of the major AdventHealth system. Two ROI forms were found: a system-wide authorization form (form-1, ADV-800003A, rev. 2022) and a facility-specific "Request For Access And Authorization" form (form-2, AHCT 616, rev. 2005). Both were easily discoverable via web search, downloaded directly from the AdventHealth CDN with no barriers.

## Access Pathway Assessment

The facility-specific form (form-2) is the more relevant document for a patient requesting their own records. It explicitly includes a checkbox for "Provide me with access to the protected health information specified below" as its first option — a clear patient self-access pathway distinct from third-party disclosure. The system-wide form (form-1), by contrast, is architecturally a third-party disclosure form that funnels all requests through a "Disclose To" entity-naming structure. While it lists "Personal Use" as a purpose, a patient would need to awkwardly list themselves as the recipient.

The existence of both forms creates a "which form?" problem. Neither form references the other, and no landing page was found that explains when to use which. A patient could reasonably download the system-wide form first and never discover the more patient-friendly facility-specific version. That said, the facility-specific form does meaningfully differentiate patient access from third-party release — it presents four distinct action options (access, copies, disclosure to others, summary) rather than treating everything as a third-party authorization.

## Retrieval Experience

Finding the forms was straightforward. A single web search for "AdventHealth Central Texas authorization release health information medical records form PDF" surfaced both PDFs immediately. No bot blocking, login walls, or navigation mazes were encountered. The forms are hosted on AdventHealth's CDN at direct URLs. This is among the easiest retrieval experiences possible — full marks for findability.

## Form Document Quality

Both forms are digitally created PDFs with extractable text — neither is a scan. However, **neither form has any fillable/interactive fields** (both have zero fillable fields per metadata). Every field must be completed by hand after printing. This is a significant gap, especially for the system-wide form revised as recently as 2022. The "Affix Patient Label Here" boxes on form-2 further signal a paper-first, in-facility design never adapted for remote digital use.

Form-2 (the primary patient access form) is 2 pages with approximately 20–25 fields. The first page is reasonably organized: action checkboxes, patient demographics, record type selection (12 categories plus catch-alls), and a disclosure recipient section. The second page is a dense block of legal "I understand..." statements followed by signature blocks. The legal language is moderately formal but comprehensible. However, the lack of bullet points or visual separation in the legal text makes it harder to parse.

The system-wide form (form-1) is more complex, with 12 numbered sections spanning 48+ checkbox options across medical/surgical and behavioral health record types. It is visually overwhelming for a routine records request.

## Barriers

**Witness requirement**: Form-2 requires a witness signature for all requests — not just behavioral health records. HIPAA does not require witness signatures for patient access, making this an unnecessary barrier for patients completing the form at home.

**Fees**: Form-2 mentions a "reasonable, cost-based fee" but provides no specific amounts or fee schedule. The summary option pre-fills a blank for cost, setting an expectation of charges without transparency.

**90-day authorization cap**: Form-2 limits authorization to a maximum of 90 days, which is restrictive and conflates patient access requests (which don't require authorization under HIPAA) with third-party disclosure authorization.

**Wrong state law**: Form-1 references the "Illinois Mental Health and Development Disabilities Confidentiality Act" despite being served at a Texas facility — a clear legal citation error from a system-wide template not adapted for local jurisdiction.

**No notarization required**: Neither form requires notarization. Submission can be done by fax (254-526-7134) or mail, meeting the baseline for electronic submission.

## Bright Spots

- **Explicit patient access pathway**: Form-2's first checkbox is "Provide me with access to the protected health information" — a rarity that centers patient self-access.
- **Broad catch-all category**: Form-2 includes "Any other personally identifiable information used by AdventHealth Central Texas to make medical decisions about me" — an unusually expansive request option.
- **Local contact information**: Form-2 provides facility-specific phone and fax numbers, unlike the generic system form.
- **Secure email delivery option**: Form-1 offers secure email as a delivery method, more progressive than fax-only alternatives.
- **Non-conditioning statement**: Both forms correctly state that refusing to sign will not affect treatment or benefits.

## Overall Assessment

AdventHealth Central Texas offers a mixed experience. On the positive side, the facility-specific form includes genuine patient access language and the forms are trivially easy to find online. On the negative side, neither form is fillable, the facility form is over 20 years old, a witness signature creates unnecessary friction, and the two-form landscape creates confusion about which to use. The organization earns credit for having a patient access pathway at all — many peers offer only generic third-party authorization forms — but the execution falls short of modern standards for digital accessibility and form hygiene.
