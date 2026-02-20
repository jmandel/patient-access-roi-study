# Batch 24: Wrong Form Problem — Map Output

## Batch Summary

| Org | Type | Pathway Classification | Form Type |
|-----|------|----------------------|-----------|
| Joseph P. Addabbo Family Health Center | FQHC, independent, nonprofit (Northeast) | **GENERIC-ONLY** | NY State OCA Form 960 — litigation-origin third-party authorization |
| Broward Health | Government-owned regional system (South) | **GENERIC-ONLY** (with portal alternative) | Generic ROI authorization with "MYSELF" checkbox |

**Tally: 2 orgs total — 2 generic-only (100%); 0 dedicated patient access; 0 both; 0 portal-only; 0 undetermined.**

Both organizations in this batch route patients seeking their own records through generic third-party authorization forms that were not designed for individual access under HIPAA § 164.524. Neither differentiates between a patient exercising their Right of Access and a third party requesting records release.

## Detailed Classification

### Addabbo Family Health Center — Generic-Only

Addabbo uses **OCA Official Form No. 960**, a New York State standard form titled "Authorization for Release of Health Information Pursuant to HIPAA." The form's own instruction page states it was designed for "release of health information needed for litigation in New York State courts" and "can, however, be used more broadly." A patient requesting their own records must use this litigation instrument, checking "At request of individual" as one reason among several.

**What a patient experiences:**

- **Wrong framing from the start.** The form opens with six dense legal disclosures — HIV redisclosure warnings, revocation rights, voluntariness statements — written for attorneys, not patients. Item 6 includes an all-caps restriction about not discussing health information "WITH ANYONE OTHER THAN THE ATTORNEY OR GOVERNMENTAL AGENCY SPECIFIED IN ITEM 9(b)," which is bewildering for someone simply requesting their own lab results.
- **Unnecessary data collection.** The form requests the patient's Social Security Number — irrelevant and risky for self-access. A dedicated patient access form would never ask for this.
- **No acknowledgment of patient rights.** The form contains zero references to the patient's right to receive their own records, offers no format or delivery options (electronic, paper, CD), and does not mention the patient portal. The patient has no indication that HIPAA entitles them to this information.
- **No fee transparency.** The form is silent on costs, leaving patients unable to anticipate charges or assert their right to cost-limited access under § 164.524(c)(4).

Despite these issues, Addabbo's implementation has one notable bright spot: a typed-signature acceptance clause allows fully digital completion without printing, which is a meaningful accessibility accommodation rarely seen on generic authorization forms.

### Broward Health — Generic-Only (with Portal Alternative)

Broward Health offers a single-page "Authorization for Release of Confidential Medical Information" form in four languages (English, Spanish, Haitian Creole, Portuguese). Patients check "MYSELF" alongside an "OTHER" option — acknowledging self-access is possible but treating it as a variant of third-party release rather than a distinct right.

**What a patient experiences:**

- **Compelled to state a purpose.** The form requires patients to specify why they want their records. Under HIPAA § 164.524, patients exercising their Right of Access are not required to provide a reason. This field may cause patients to feel they need to justify their request — or worse, fear denial if their reason seems insufficient.
- **Minimum necessary confusion.** The form applies "minimum necessary" language to all requests, but 45 CFR § 164.502(b)(2)(v) explicitly exempts individual access from the minimum necessary standard. This could lead the organization to improperly narrow the records provided.
- **Witness signature required.** A witness signature line creates a procedural barrier for patients completing the form at home — they must find another person to witness their signature for a routine records request.
- **Outdated infrastructure.** The English version is an image-only scan (grayscale JPEG at 200 DPI) with zero fillable fields and no text layer for screen readers. The footer references "ADDRESSOGRAPH" and carbon-copy routing ("WHITE - MEDICAL RECORD / CANARY - PATIENTS"), confirming this is an unreconstructed 2014 paper form. Delivery options are limited to paper or encrypted CD.

Broward Health partially redeems this experience with a Swellbox online portal wizard, which provides a fully digital alternative. However, the PDF form remains prominently offered on the Medical Records Request page and is the documented primary pathway. The exceptional multilingual support (four languages reflecting South Florida demographics) and explicit CFR 164.524 citation in the rights disclosure are genuine strengths — but they cannot overcome the fundamental mismatch of the form itself.

## Cross-Cutting Patterns

**The core mismatch is structural, not cosmetic.** Both organizations treat patient self-access as a special case of third-party release, rather than recognizing it as a distinct legal right with different requirements. This produces three concrete harms:

1. **Unnecessary fields and friction.** Patients encounter fields designed for attorneys, insurance companies, or other third parties — purpose statements, witness signatures, SSN fields — that have no place in a self-access request.
2. **Missing patient-specific information.** Neither form tells patients about their rights, available formats, expected timelines, or fee limits. A dedicated patient access form would center this information.
3. **Compliance risk for the organization.** By applying third-party authorization requirements (purpose, minimum necessary) to individual access requests, organizations may inadvertently violate HIPAA provisions that specifically exempt patient access from these constraints.

**Org type does not predict the problem.** This batch includes an independent nonprofit FQHC and a government-owned regional system — different sizes, ownership models, and regions — yet both exhibit the same generic-form pattern, suggesting the problem is systemic rather than confined to a particular organizational profile.
