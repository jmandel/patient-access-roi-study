# Natividad Medical Center — Org-Level Synthesis

## Available Forms and Pathways

Natividad Medical Center, a government-owned community hospital in Salinas, CA, hosts two ROI authorization forms on its medical records page at `https://www.natividad.com/medical-records/`:

- **Form 1** (2019): A 1-page "Authorization to Use or Disclose Health Information" — an image-only scan with no text layer and no fillable fields. Despite being the newer version, it is a grayscale scan at 200 DPI that cannot be read by screen readers or completed digitally.
- **Form 2** (2007): A 2-page "Authorization for Use or Disclosure of Health Information" created from Microsoft Word. It has a text layer but is copy-protected (RC4 encryption) and also lacks fillable fields. It requests Social Security Number and contains a garbled legal citation.

Both forms serve the same general purpose — authorizing release of health information — and both remain linked from the website with no guidance on which is current or preferred.

## Access Pathway Differentiation

Neither form is a dedicated patient access request form. Both are generic HIPAA authorization forms designed primarily for third-party release of information. However, Form 1 does include explicit patient access language: "If you are the patient requesting your own records, you may choose between printed copies or CD." It also includes a "Patient" checkbox among requester roles. Form 2 has a "Patient request" checkbox under Purpose but is structurally oriented toward third-party release, requiring the patient to name a "release to" recipient — awkward when requesting one's own records.

The organization does not differentiate individual access from third-party authorization through separate forms, sections, or pathways. A patient must navigate a form designed for a different use case.

## Retrieval Experience

Finding the forms required moderate effort. A general web search for medical records release forms surfaced both PDFs, and a site-specific search confirmed the medical records page. The presence of two overlapping forms with unclear currency creates confusion — a patient finding both would not know which to use. The filename "Auth_ROI_e.pdf" for Form 2 is cryptic and unhelpful. No bot blocking or browser fallback was needed.

## Form Document Quality

Neither form is fillable — both require printing and completion by hand. Form 1's image-only format makes it completely inaccessible to assistive technology, likely violating Section 508 and WCAG standards for a government facility. Form 2's text layer is an improvement but copy-protection prevents text selection. Both forms use underscore-line blanks for data entry.

Form 1 packs substantial content onto a single page with cramped layout. Section headings exist but are not strongly differentiated from body text in the scanned format. Form 2 is better organized with clear section headers (USE AND DISCLOSURE, PURPOSE, EXPIRATION, MY RIGHTS, SIGNATURE) and logical flow across two pages, though footnotes descend into dense legal prose.

Language is generally plain in both forms, though both include legal phrasing that may challenge patients with limited health literacy. Neither form provides clear instructions for completion.

## Barriers

- **No electronic submission pathway documented**: Neither form specifies how to submit — no fax number, email address, or portal is mentioned. The forms only address what information to release, not how to submit the request.
- **No fee disclosure**: Neither form mentions costs, leaving patients unable to anticipate charges.
- **Outdated delivery options**: Form 1 states "Natividad policy is to provide all electronic records on a CD" — CDs are increasingly obsolete, and this may functionally limit patients' right to receive records electronically.
- **SSN collection** (Form 2): Requesting Social Security Number is unnecessary for HIPAA requests and creates identity-theft risk.
- **Blank revocation address** (Form 2): The form instructs patients to submit revocations "to the following address" but leaves the address blank.

## Bright Spots

- Form 1 explicitly addresses patients requesting their own records and offers format choices.
- Form 1's opt-out exclusion model (defaulting to full disclosure with options to exclude HIV, substance abuse, mental health records) is patient-friendly.
- Form 1 dropped the SSN requirement present in Form 2, showing incremental improvement.
- Both forms include patient rights language covering refusal, no-retaliation, revocation, and right to a copy.

## Overall Assessment

Natividad Medical Center provides a minimally functional but outdated and poorly maintained patient access experience. The organization relies on generic third-party authorization forms rather than a dedicated patient access pathway. The newer form (2019) is paradoxically less accessible than the older one (2007) due to its image-only scan format — a regression in digital accessibility. Neither form is fillable, no electronic submission method is documented, and the dual-form situation with no guidance creates unnecessary confusion. For a government-owned facility, the accessibility failures are particularly concerning. The org earns a **C grade**, reflecting a process that technically exists but was not designed with patient self-access in mind.
