# Surprising Findings — Batch 1

## The Encryption Question Nobody Asked

Coast Plaza Hospital, a 117-bed for-profit community hospital in Norwalk, CA (part of Pipeline Health's 4-hospital regional system), includes an option on its ROI form asking patients whether they want their records encrypted. This is a genuinely unusual privacy-conscious feature — across the broader study, encryption preferences on paper ROI forms are rare, and you'd expect them from large tech-forward health systems, not a small for-profit community hospital. What makes this surprising is the juxtaposition: the same form that offers encryption as a delivery option lists **CD-ROM as the only electronic format**. The organization is simultaneously ahead of and behind the curve — privacy-aware enough to ask about encryption, but technologically stuck in a medium that most patients can no longer use. This anachronism suggests the form template evolved by accretion rather than redesign: someone added an encryption checkbox at some point, but nobody reconsidered the delivery options it would apply to.

## The "Well-Crafted Wrong Form" Paradox

Heartland Community Health Center, an independent nonprofit FQHC in Lawrence, Kansas, reveals a striking scoring paradox. Its content design score is 4 out of 5 — the form has logical flow, clear section ordering, plain-language opening text, and an innovative "Record Set" pre-bundled option that reduces decision burden by offering a curated default records bundle. Yet its patient-centeredness score is only 2 out of 5 because the form is fundamentally a generic third-party authorization with "Records From/To" fields designed for transfers, not individual access. "Patient's Request" is merely one checkbox among several purpose options.

This gap — high craftsmanship, wrong purpose — is more interesting than forms that are simply bad at everything. Heartland clearly invested effort in making its form usable and well-organized, but that effort went into polishing the wrong artifact. The "Record Set" option is especially notable: it shows sophisticated thinking about reducing patient cognitive load (exactly the kind of innovation you'd hope to see from an FQHC serving underserved populations), but it's embedded in a form that frames the patient as a third party requesting someone else's records. The organization got the UX right and the legal framing wrong.

## Witness Lines as Silent Deterrents

Heartland's form includes a witness signature line that is "not explicitly required but its presence may deter patients." This is a subtle but important pattern: a field that technically isn't mandatory but functionally signals to patients that they need someone else present to complete the form. For an FQHC serving populations that may already face trust barriers with the healthcare system, a witness line — even an optional one — could be enough to make a patient abandon the process or delay their request. It raises the question of how many other "optional" form elements function as de facto barriers through implication alone.

## Version Control as a Patient Safety Issue

Coast Plaza maintains two versions of the same ROI form online — a June 2024 "FINAL" version and a January 2022 version — with no indication of which is current. Critically, the two versions list **different fax numbers**. A patient who downloads the older form (equally prominent on the Medical Records page) and faxes their authorization to the 2022 number may be sending protected health information to a line that is no longer monitored. This isn't just a findability problem; it's a potential PHI exposure risk and a practical barrier to completing a records request. The fact that both versions are on the same page, presumably placed there intentionally, suggests nobody considered the patient's perspective when the newer form was published.

## Mental Health Records Fragmentation

Heartland requires a "completely separate form" for mental health records, which cannot be combined with other record types on the same authorization. For patients receiving integrated primary care and behavioral health services at an FQHC — exactly the model FQHCs are designed to provide — this creates a paradox: the care model is integrated but the records access model is fragmented. A patient who wants their complete health record must navigate two separate authorization processes, likely doubling the effort and potentially the turnaround time.

## Cross-Cutting Pattern: Digital Forms That Refuse to Be Digital

Both organizations in this batch produce born-digital PDFs with clean text layers — these are not scans of paper forms. Yet both have zero fillable fields. Coast Plaza's form has 20+ data entry points that must be handwritten; Heartland's has 22. The technology to make these forms fillable is built into the same PDF creation tools that produced them. The gap between "digitally created" and "digitally usable" suggests that form design workflows treat PDFs as print-ready documents rather than interactive artifacts, even when the creation tool supports interactivity. This is a process problem, not a technology problem.
