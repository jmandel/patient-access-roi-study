# Surprising Findings — Batch 19

## Prestige Does Not Predict Patient-Centeredness

Northwestern Memorial Hospital — flagship of Northwestern Medicine, a 943-bed teaching hospital affiliated with Feinberg School of Medicine — earns only a B (3.9/5). You might expect a top-tier academic medical center to lead on patient access, but Northwestern channels all records requests through a generic third-party authorization form with no acknowledgment of HIPAA's Right of Access (§ 164.524). The form was designed for attorneys and insurers; patients must figure out that "Personal Use" is their purpose and that they should name themselves as the recipient. For an institution that otherwise demonstrates strong technical execution (79 fillable fields, email submission, portal delivery, Spanish translation), the failure to create a patient-specific pathway feels like an institutional blind spot rather than a resource limitation.

## Mail-Merge Ghosts and Phantom References

Good Samaritan Medical Center's network-wide form (2020 PBHN version) contains raw mail-merge placeholders — `«PatientNumber»`, `«PatientName»`, `«BirthDate»` — visible in the sidebar of the downloadable PDF. These are internal template variables that were never resolved before publication. For a form distributed across Tenet Healthcare's Palm Beach Health Network, this is a striking quality-control failure: it suggests the document was exported from a mail-merge system and published without review. More consequentially, the same form's revocation paragraph tells patients to contact the Privacy Office at an address "listed below" — but no address appears anywhere in the document. This is not merely sloppy; it blocks patients from exercising a legal right (revocation of authorization) by referencing information that does not exist.

## Version Drift Creates Two-Tier Language Access

Northwestern Medicine publishes both English and Spanish authorization forms with equivalent fillable-field functionality (79 and 82 fields respectively) — a genuine strength. But the Spanish form (rev. 8/2024) is 18 months behind the English version (rev. 2/2026), missing hospital renamings, updated 42 CFR Part 2 language, and the TTY: 711 accessibility reference. This creates a subtle but real two-tier experience: Spanish-speaking patients use a legally and factually outdated document. The gap reveals a common pattern where translation is treated as a one-time project rather than an ongoing maintenance obligation.

## Haitian Creole: Serving the Actual Community

Good Samaritan Medical Center — a for-profit Tenet Healthcare hospital — offers forms in English, Spanish, and Haitian Creole. Haitian Creole is uncommon in healthcare ROI forms and reflects genuine attention to Palm Beach County demographics, where the Haitian-born population is substantial. That a for-profit community hospital provides this while many academic centers offer only English is noteworthy and somewhat defies the expectation that for-profit facilities do the minimum.

## SSN Collection and Vendor Opacity

Good Samaritan's form collects Social Security Number — unnecessary for HIPAA identity verification and a data-security risk on documents transmitted via fax or mail. Meanwhile, records requests are processed through Datavant (a commercial ROI vendor), with the email address `SM-Tenetgoodsamaritan@Datavant.com` serving as the submission endpoint. The newer network form omits the remuneration disclosure present in the older facility form, despite Datavant's commercial involvement — potentially violating 45 CFR § 164.508(a)(4). The combination of unnecessary SSN collection and opaque vendor involvement creates a situation where patients hand over their most sensitive identifier to a process they cannot fully evaluate.

## The "Two Forms, No Guidance" Problem

Good Samaritan publishes both a 2014 facility-specific form and a 2020 network-wide form simultaneously, with no indication of which patients should use. The two forms differ meaningfully — the older one includes a remuneration disclosure and fax number; the newer one has better record-type granularity but contains the merge-field artifacts and missing contact information described above. A patient encountering both would have no way to choose correctly.
