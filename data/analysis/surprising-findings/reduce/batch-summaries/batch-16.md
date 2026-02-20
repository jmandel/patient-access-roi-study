# Surprising Findings — Batch 16

## Copy-Paste Jurisdiction Errors Reveal Unreviewed Templates

Three organizations serve forms citing laws from the wrong state. **AdventHealth Central Texas** (Killeen, TX) references the "Illinois Mental Health and Development Disabilities Confidentiality Act" — a system-wide template never localized for its Texas facility. **Ironwood Cancer & Research Centers** (Chandler, AZ) cites Washington state's RCW 70.24 for STD definitions despite operating exclusively in Arizona. **Proliance Surgeons** (Seattle, WA) references California's Confidentiality of Medical Information Act instead of Washington's RCW 70.02. These aren't obscure footnotes; they're the legal authority sections patients rely on to understand their rights. The pattern suggests organizations treat ROI forms as copy-once-deploy-everywhere documents, with no jurisdiction-specific review even for legally operative text.

## System Standardization Is a Rising Tide — When It Reaches You

Organizations using system-standardized forms score 0.39 points higher on average (3.53 vs. 3.14) than those using facility-specific forms. The effect is starkest within major systems: system-form users average 3.64 versus 3.25 for facilities maintaining their own. But standardization is uneven. **AdventHealth Hendersonville** (NC, score 3.95) benefits from a Swellbox portal, while **AdventHealth Central Texas** (TX, score 2.90) is stuck with a non-fillable 2005 facility form that still includes "Affix Patient Label Here" boxes designed for in-facility use. Within the same system, one facility gets a modern digital workflow; the other gets a two-decade-old paper form with the wrong state's law. CHS achieves more consistent lift — both **Flowers Hospital** (4.65) and **Merit Health Central** (4.15) use the identical HIM-1406 template with 66 fillable fields and co-equal Spanish translations.

## SSN Collection Is Endemic and Dangerous

Forty-eight organizations (25%) collect Social Security Numbers on their ROI forms, despite HIPAA requiring no such identifier. Several compound the risk by collecting SSN on forms designed to be faxed — **Fisher-Titus Medical Center** (OH), **WellSpan York Hospital** (PA), and **East Georgia Healthcare Center** (GA) all transmit SSN over unsecured fax lines. **Barnes-Jewish Hospital** (MO) requests full SSN while offering only a "last-4-digits alternative." **Lexington Medical Center** (SC) collects full SSN on a form designed to be mailed. The practice spans all facility types and regions, with no apparent correlation to organizational sophistication — teaching hospitals, FQHCs, and physician practices all participate equally in this unnecessary data exposure.

## Response Time Transparency Splits Sharply by Ambition

Only 38 of 190 organizations (20%) state any response time commitment on their forms or records pages. Among those that do, the range is remarkable: **Northwest Colorado Health** promises 48 business hours; **Memorial Healthcare System** (FL) commits to 2 business days; **Group Health Cooperative of South Central Wisconsin** targets 5 business days. Meanwhile, others default to the HIPAA maximum of 30 days, and **Hospital of the University of Pennsylvania** claims 60 days for off-site records with a possible 30-day extension — potentially exceeding HIPAA's allowable timeline. The 80% of organizations that state nothing leave patients with zero expectations about when they'll receive their records.

## Portal-Only Pathways Create New Opacity

Eight organizations have eliminated downloadable forms entirely in favor of portal-only workflows. While this sounds modern, it creates problems. **Minnie Hamilton Health System** (WV), a critical access hospital, routes patients to ChartRequest, which requires account creation before patients can even preview the authorization terms. **Labette Health** (KS) uses Formstack with a typo in its subdomain ("labetteheatlh"). **Anaheim Global Medical Center** (CA) and **The Iowa Clinic** (IA) similarly offer no downloadable form. Patients cannot assess what they'll need — identification, date ranges, fees — before committing to a third-party platform. The shift from PDF to portal trades one set of barriers (printing, handwriting) for another (account creation, vendor lock-in, opacity about terms).

## Only 19% of Organizations Differentiate Self-Access from Third-Party Release

The most structurally surprising finding: 154 of 190 organizations (81%) funnel patients requesting their own records through the same form designed for attorneys, insurers, and other third parties. This is not a minor framing issue — it means patients encounter expiration dates, purpose-of-disclosure fields, and re-disclosure warnings that are legally irrelevant to their right of access under § 164.524. The few organizations that do differentiate — **Valleywise Health** (AZ) with its dedicated Form 45643, **Flowers Hospital** (AL) with "Myself" as the first recipient option, **Baton Rouge Clinic** (LA) with a three-form strategy — demonstrate that good design is achievable. The overwhelming majority simply haven't tried.

## The Fee Disclosure Vacuum

Only 4 of 190 organizations (2%) explicitly state that patient access is free. Another 12 provide compliant fee disclosures. The remaining 168 organizations (88%) either mention fees vaguely ("charges may apply"), cite state-law fee schedules without HIPAA context, or say nothing at all. Patients requesting their own records have, in the vast majority of cases, no way to know what they'll be charged before submitting their request.
