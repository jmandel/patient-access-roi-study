# Surprising Findings — Batch 18

## The Scale Inversion: Community Hospital Outgrows the Teaching Hospital

Lakeland Regional Health Medical Center (Lakeland, FL) has **892 beds** — more than Hartford Hospital's **867 beds** — despite being categorized as an independent community hospital versus Hartford's status as a major teaching affiliate of UConn Medical School with a Level I trauma center. You would expect the academic medical center embedded in a multi-hospital system to be the larger institution, but Lakeland — a single-site, independently operated community hospital founded in 1916 — is actually bigger. Yet both land at essentially identical quality grades (C, with overall scores of 3.3 and 3.2 respectively). Scale alone clearly does not predict form quality, and neither does system resources or academic affiliation.

## System Affiliation Provides No Quality Uplift

Hartford Hospital is part of Hartford HealthCare, a regional system operating 7 hospitals. The system-wide form (HH Forms 571559, Rev. 11-2022) is shared across all 11 HHC facilities — a centralized approach that should, in theory, produce a higher-quality document than what any single facility could develop independently. Instead, the system-wide form has **zero fillable fields** despite being revised as recently as 2022, opens with staff-facing administrative fields irrelevant to patients (MR#, Date Completed, Pages Copied, Initials), and contains typographical errors ("If the event" instead of "In the event"). Meanwhile, independent Lakeland — with no system resources to draw on — produced a cleaner, more concise single-page form. The system affiliation seems to have optimized for administrative standardization (one form for all facilities, with a comprehensive fax directory) rather than patient experience.

## The Witness Signature Ambiguity Problem

Lakeland Regional Health's form includes a **witness signature line** whose mandatory-or-optional status is unclear. This is a subtle but potentially serious barrier: if a patient filling out the form at home interprets it as required, they must recruit someone to witness their signature before they can submit — transforming a simple records request into a coordinated event. Combined with an ambiguous "Photo ID verified" checkbox that could imply in-person presentation, Lakeland's form creates requirements that may never have been intended but that risk deterring patients. This pattern — forms that accidentally impose barriers through ambiguous design — may be more pernicious than overtly burdensome requirements because neither the organization nor the patient realizes what went wrong.

## SSN Collection as Security Theater

Lakeland's form collects the **last four digits of the patient's Social Security Number** even though it already asks for medical record number, full name, date of birth, and mailing address. This is a notable privacy anti-pattern: collecting partial SSN adds negligible identity verification value when four other identifiers are present, but it does expose a sensitive data element to any fax machine, mail handler, or filing clerk in the chain. Neither HIPAA nor Florida law requires SSN for patient access requests. This unnecessary data collection creates real risk for no functional benefit.

## The Fee Statute Shell Game

Both organizations reveal a subtle compliance issue around fees, but Lakeland's approach is particularly striking. The form tells patients they "agree to pay charges... per Florida Statute 395.3025 or Florida Administrative Code 64B8-10.003" — citing legal authority without disclosing the actual dollar amounts. A patient cannot assess the cost of their request without separately researching Florida administrative code. More importantly, these state-law fee schedules may exceed HIPAA's cost-based fee limits for patient access requests (as opposed to third-party release), but the form makes **no distinction** between the two fee structures. Hartford, by contrast, simply never mentions fees at all — a different kind of opacity.

## Stale URLs as a Persistent Access Barrier

Hartford Hospital has a previously indexed URL for its authorization form that now returns a **404 error**. The current URL uses an opaque numeric filename (`571559.pdf`) that provides no discoverability clues. At Lakeland, a superseded 2016 version of the form remains publicly accessible without any "outdated" marker. Both patterns — dead links and unmarked obsolete versions — represent a category of findability barrier that persists long after form updates: organizations revise their forms but fail to manage the digital lifecycle of the old URLs. Patients arriving via bookmarks, cached search results, or referral links encounter either nothing or the wrong version.

## Identical Structural Flaw, Different Institutions

Perhaps the most noteworthy pattern is that both organizations — differing in geography (CT vs. FL), type (teaching vs. community), affiliation (regional system vs. independent), and scale — exhibit the **exact same fundamental design flaw**: a generic HIPAA authorization form with confusing bidirectional "disclose/obtain" language that forces patients to puzzle over which blank represents them and which represents the hospital. Neither organization has created a dedicated patient self-access pathway. This convergence across very different institutions suggests the problem is not about resources, sophistication, or regional practice — it is an industry-wide default that patients encounter regardless of where they seek care.
